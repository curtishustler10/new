// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// Header scroll effect
const header = document.querySelector(".header")
const lastScrollY = window.scrollY

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active")

    // Close all FAQ items
    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("active")
    })

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active")
    }
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight - 20

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Add animation classes to elements
  const animateElements = document.querySelectorAll(
    ".section-header, .project-card, .testimonial-card, .service-card, .faq-item, .cta-card, .contact-info, .footer-logo, .social-links, .footer-bottom",
  )

  animateElements.forEach((el, index) => {
    el.classList.add("animate-on-scroll")
    el.style.animationDelay = `${index * 0.1}s`
    observer.observe(el)
  })

  // Process steps animation
  const processSteps = document.querySelectorAll(".process-step")
  processSteps.forEach((step, index) => {
    if (index % 2 === 0) {
      step.classList.add("animate-left")
    } else {
      step.classList.add("animate-right")
    }
    observer.observe(step)
  })

  // Stats animation
  const statCards = document.querySelectorAll(".stat-card")
  statCards.forEach((card, index) => {
    card.classList.add("animate-on-scroll")
    card.style.animationDelay = `${0.8 + index * 0.2}s`
    observer.observe(card)
  })

  // Flip-in for mockups
  const mockups = document.querySelectorAll('.mockup');
  mockups.forEach((mockup, index) => {
    observer.observe(mockup);
  });
});

// Extend observer callback to handle .mockup flip-in
const originalObserverCallback = observer.callback;
observer.disconnect();
observer.callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      if (entry.target.classList.contains("mockup")) {
        entry.target.classList.add("flip-in");
      }
    }
  });
};
observer.observe = IntersectionObserver.prototype.observe.bind(observer);
// Re-observe all previous elements
const allObserved = document.querySelectorAll('.animate-on-scroll, .mockup');
allObserved.forEach(el => observer.observe(el));

// Button hover effects
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Project card hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
    const icon = this.querySelector(".service-icon")
    if (icon) {
      icon.style.transform = "scale(1.1)"
    }
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
    const icon = this.querySelector(".service-icon")
    if (icon) {
      icon.style.transform = "scale(1)"
    }
  })
})

// Testimonial card hover effects
document.querySelectorAll(".testimonial-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Stat card hover effects
document.querySelectorAll(".stat-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })
})

// Social link hover effects
document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px) scale(1.1)"
  })

  link.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Logo hover effect
document.querySelectorAll(".logo").forEach((logo) => {
  logo.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)"
  })

  logo.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })
})

// Parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroRadial = document.querySelector(".hero-radial")
  if (heroRadial) {
    heroRadial.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
  const scrolled = window.pageYOffset
  const heroRadial = document.querySelector(".hero-radial")
  if (heroRadial) {
    heroRadial.style.transform = `translateY(${scrolled * 0.5}px)`
  }
}, 10)

window.addEventListener("scroll", debouncedScroll)

// Swiper.js initialization for Projects Carousel
const projectsSwiper = new Swiper('.projects-swiper', {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

// Animated counting for stats
function animateCount(el, endValue, duration = 1000) {
  let start = 0;
  let startTime = null;
  const suffix = /[+%]$/.test(endValue) ? endValue.match(/[+%]$/)[0] : '';
  const pureNumber = parseInt(endValue.replace(/[^0-9]/g, ''));
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * pureNumber);
    el.textContent = value + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = pureNumber + suffix;
    }
  }
  requestAnimationFrame(step);
}

// Trigger animation when .hero-stats is visible
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const statValues = heroStats.querySelectorAll('.stat-value');
  let statsAnimated = false;
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statValues.forEach(el => {
          animateCount(el, el.textContent.trim(), 1200);
        });
      }
    });
  }, { threshold: 0.5 });
  statsObserver.observe(heroStats);
}

// Google-style avatar generation for testimonials
function randomAvatarColor(name) {
  // Nice palette
  const colors = [
    '#F44336', '#E91E63', '#9C27B0', '#3F51B5', '#2196F3', '#009688', '#4CAF50', '#FF9800', '#FF5722', '#607D8B', '#795548', '#00BCD4', '#8BC34A', '#FFC107', '#CDDC39', '#FFB300', '#6D4C41', '#D84315', '#00897B', '#3949AB'
  ];
  // Hash the name to pick a color
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const color = colors[Math.abs(hash) % colors.length];
  return color;
}

// About Us mobile tab logic
document.addEventListener('DOMContentLoaded', function() {
  function closeAllAboutTabs() {
    document.querySelectorAll('.about-tab-content .about-tab').forEach(tab => tab.classList.remove('open'));
    document.querySelectorAll('.about-dot').forEach(dot => dot.classList.remove('active'));
  }
  document.querySelectorAll('.about-dot').forEach(dot => {
    dot.addEventListener('click', function() {
      const person = this.getAttribute('data-person');
      closeAllAboutTabs();
      document.getElementById('tab-' + person).classList.add('open');
      this.classList.add('active');
    });
  });
  // Both tabs closed on load
  closeAllAboutTabs();

  // Timeline animation
  const aboutSection = document.querySelector('.about-us');
  if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });
    observer.observe(aboutSection);
  }

  document.querySelectorAll('.generated-avatar').forEach(function(el) {
    const name = el.getAttribute('data-author') || '';
    const letter = name.trim()[0] ? name.trim()[0].toUpperCase() : '?';
    el.textContent = letter;
    el.style.background = randomAvatarColor(name);
  });
});
