/* =========================================================
   TechFix IT Solutions — script.js
   Handles: mobile navigation toggle, form validation feedback
   ========================================================= */

// Mobile navigation toggle
// Finds the nav toggle button and links list, and switches an
// "open" class on click so the menu can be shown/hidden on small screens.
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      var isOpen = navLinks.classList.contains("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // FAQ accordion
  // Each question button toggles an "open" class on its parent .faq-item,
  // which expands/collapses the answer via CSS max-height.
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      item.classList.toggle("open");
    });
  });

  // Generic form validation for the Booking and Contact pages.
  // Runs on submit, checks required fields are filled and the email
  // looks valid, then shows a status message instead of a real submit
  // (no backend exists for this student project).
  var forms = document.querySelectorAll("form[data-validate]");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var status = form.querySelector(".form-status");
      var requiredFields = form.querySelectorAll("[required]");
      var isValid = true;

      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "#b91c1c";
        } else {
          field.style.borderColor = "";
        }
      });

      var emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = "#b91c1c";
        }
      }

      if (!status) return;

      if (isValid) {
        status.textContent = "Thanks — your message has been received. We'll be in touch within one business day.";
        status.className = "form-status success";
        form.reset();
      } else {
        status.textContent = "Please fill in all required fields with a valid email address.";
        status.className = "form-status error";
      }
    });
  });
});
