/* =========================================================
   TechFix IT Solutions — script.js
   Part 3: navigation, dynamic services, interactions, and validation
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // Responsive mobile navigation with a clear accessible state.
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
      }
    });
  }

  // Keep the established FAQ accordion; expose the state to assistive technology.
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.setAttribute("aria-expanded", String(item.classList.contains("open")));
    question.addEventListener("click", function () {
      var isOpen = item.classList.toggle("open");
      question.setAttribute("aria-expanded", String(isOpen));
    });
  });

  // Service directory content. Search/filter/sort only the existing TechFix offerings.
  var serviceList = document.querySelector("#service-list");
  if (serviceList) {
    var services = [
      { name: "Remote Support", category: "support", serviceValue: "helpdesk", price: 450, description: "Screen-share troubleshooting for software errors, slow performance, printer setup, and email issues — most tickets closed same day." },
      { name: "On-Site Callouts", category: "support", serviceValue: "helpdesk", price: 850, description: "Hardware repairs, workstation setup, and new starter onboarding handled in person across the Johannesburg area." },
      { name: "Device Management", category: "support", serviceValue: "helpdesk", price: 650, description: "Ongoing patching, antivirus updates, and performance checks so small issues don't turn into downtime." },
      { name: "Router & Switch Configuration", category: "network", serviceValue: "networking", price: 950, description: "Correctly configured hardware for reliable, secure internal networking from day one." },
      { name: "Wi-Fi Coverage Planning", category: "network", serviceValue: "networking", price: 750, description: "Access point placement and testing so every corner of your office gets a usable signal." },
      { name: "Uptime Monitoring", category: "network", serviceValue: "networking", price: 550, description: "Automated alerts when a connection drops, so we're often fixing it before you've noticed." },
      { name: "Firewall & Endpoint Protection", category: "security", serviceValue: "security", price: 900, description: "Baseline security software across every device, configured and monitored, not just installed and forgotten." },
      { name: "Staff Awareness Training", category: "security", serviceValue: "security", price: 700, description: "Short, practical sessions on spotting phishing emails and safe password habits — your biggest security investment for the lowest cost." },
      { name: "Backup & Recovery Planning", category: "security", serviceValue: "security", price: 800, description: "Automated backups and a tested recovery plan, so a lost laptop or ransomware attempt isn't a lost business." }
    ];
    var search = document.querySelector("#service-search");
    var category = document.querySelector("#service-category");
    var sort = document.querySelector("#service-sort");
    var count = document.querySelector("#service-count");
    var empty = document.querySelector("#service-empty");

    function renderServices() {
      var query = search.value.trim().toLocaleLowerCase();
      var selectedCategory = category.value;
      var visible = services.filter(function (service) {
        return (selectedCategory === "all" || service.category === selectedCategory)
          && (service.name + " " + service.description + " " + service.category).toLocaleLowerCase().includes(query);
      });

      visible.sort(function (a, b) {
        if (sort.value === "price-desc") return b.price - a.price;
        if (sort.value === "name") return a.name.localeCompare(b.name);
        return a.price - b.price;
      });

      serviceList.replaceChildren.apply(serviceList, visible.map(function (service) {
        var card = document.createElement("article");
        card.className = "card service-card";
        card.dataset.category = service.category;
        var label = document.createElement("span");
        label.className = "card-index";
        label.textContent = service.category.charAt(0).toUpperCase() + service.category.slice(1);
        var title = document.createElement("h3");
        title.textContent = service.name;
        var description = document.createElement("p");
        description.textContent = service.description;
        var price = document.createElement("p");
        price.className = "service-price";
        price.textContent = "Indicative callout from R" + service.price;
        var link = document.createElement("a");
        link.className = "btn btn-ghost service-booking-link";
        link.href = "booking.html?service=" + encodeURIComponent(service.serviceValue) + "&offering=" + encodeURIComponent(service.name);
        link.textContent = "Request a consultation";
        card.append(label, title, description, price, link);
        return card;
      }));
      count.textContent = visible.length + " " + (visible.length === 1 ? "service" : "services") + " found";
      empty.hidden = visible.length !== 0;
    }

    [search, category, sort].forEach(function (control) {
      control.addEventListener("input", renderServices);
      control.addEventListener("change", renderServices);
    });
    renderServices();
  }

  // Date/phone checks and accessible feedback for the static demonstration forms.
  document.querySelectorAll("form[data-validate]").forEach(function (form) {
    var dateField = form.querySelector('input[type="date"]');
    if (dateField) {
      var localToday = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      dateField.min = localToday;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      var requiredFields = form.querySelectorAll("[required]");
      var isValid = true;

      requiredFields.forEach(function (field) {
        var valid = field.value.trim().length > 0 && field.checkValidity();
        if (field.type === "tel" && field.value) {
          valid = /^[+\d][\d\s().-]{6,19}$/.test(field.value.trim()) && field.value.replace(/\D/g, "").length >= 7;
        }
        field.style.borderColor = valid ? "" : "#b91c1c";
        if (!valid) isValid = false;
      });

      if (!status) return;
      if (isValid) {
        status.textContent = "Your details passed the website checks. This static student demonstration does not send or store your information.";
        status.className = "form-status success";
        form.reset();
      } else {
        status.textContent = "Please check each required field, use a valid email and phone number, and choose a current or future date.";
        status.className = "form-status error";
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
      }
    });
  });

  // Preselect the requested service passed from the dynamic Services listing.
  var requestedService = new URLSearchParams(window.location.search).get("service");
  var serviceSelect = document.querySelector("#b-service");
  if (requestedService && serviceSelect) {
    var matchingOption = Array.from(serviceSelect.options).find(function (option) {
      return option.value.toLocaleLowerCase() === requestedService.toLocaleLowerCase();
    });
    if (matchingOption) serviceSelect.value = matchingOption.value;
  }

  // Accessible enlarged view for existing responsive photos. Escape closes native dialog.
  var lightbox = document.querySelector("#gallery-lightbox");
  if (lightbox) {
    var lightboxImage = lightbox.querySelector("img");
    var caption = lightbox.querySelector("figcaption");
    document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        lightboxImage.src = trigger.href;
        lightboxImage.alt = trigger.dataset.alt || "";
        caption.textContent = trigger.dataset.caption || lightboxImage.alt;
        lightbox.showModal();
      });
    });
    lightbox.querySelector("[data-close-dialog]").addEventListener("click", function () { lightbox.close(); });
    lightbox.addEventListener("click", function (event) { if (event.target === lightbox) lightbox.close(); });
  }

  // Subtle entrance motion; skip for reduced-motion preferences.
  var revealItems = document.querySelectorAll(".section .card:not(.service-card), .team-member, .testimonial");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { item.classList.add("reveal"); observer.observe(item); });
  }
});
