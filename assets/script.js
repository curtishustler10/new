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
})

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

// Projects Carousel Interactivity
const carousel = document.querySelector('.projects-carousel');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');

function getCardWidth() {
  if (!carousel) return 0;
  const card = carousel.querySelector('.project-card');
  if (!card) return 0;
  const style = window.getComputedStyle(card);
  const margin = parseFloat(style.marginRight) + parseFloat(style.marginLeft);
  return card.offsetWidth + margin;
}

function scrollCarousel(direction) {
  const cardWidth = getCardWidth();
  if (direction === 'left') {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  } else {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}

if (leftArrow && rightArrow && carousel) {
  leftArrow.addEventListener('click', () => scrollCarousel('left'));
  rightArrow.addEventListener('click', () => scrollCarousel('right'));
}

// Optional: swipe support for mobile
enableSwipe(carousel);

function enableSwipe(element) {
  let startX = 0;
  let isDown = false;

  element.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
  });
  element.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].clientX;
    const diff = startX - x;
    element.scrollLeft += diff;
    startX = x;
  });
  element.addEventListener('touchend', () => {
    isDown = false;
  });
}

// --- Centered Carousel Logic ---
function updateActiveCard() {
  if (!carousel) return;
  const cards = Array.from(carousel.querySelectorAll('.project-card'));
  const carouselRect = carousel.getBoundingClientRect();
  let minDiff = Infinity;
  let activeIdx = 0;
  cards.forEach((card, idx) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    const diff = Math.abs(carouselCenter - cardCenter);
    if (diff < minDiff) {
      minDiff = diff;
      activeIdx = idx;
    }
  });
  cards.forEach((card, idx) => {
    card.classList.toggle('active', idx === activeIdx);
  });
  return activeIdx;
}

function scrollToCard(idx) {
  const cards = Array.from(carousel.querySelectorAll('.project-card'));
  if (!cards[idx]) return;
  const card = cards[idx];
  const carouselRect = carousel.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const carouselCenter = carouselRect.left + carouselRect.width / 2;
  const cardCenter = cardRect.left + cardRect.width / 2;
  const scrollDiff = cardCenter - carouselCenter;
  carousel.scrollBy({ left: scrollDiff, behavior: 'smooth' });
}

// Update active card on scroll
if (carousel) {
  carousel.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateActiveCard);
  });
  // Initial update
  window.addEventListener('load', updateActiveCard);
  window.addEventListener('resize', updateActiveCard);
}

// Arrow navigation: scroll to next/prev card and center it
if (leftArrow && rightArrow && carousel) {
  leftArrow.addEventListener('click', () => {
    const cards = Array.from(carousel.querySelectorAll('.project-card'));
    let activeIdx = updateActiveCard();
    if (activeIdx > 0) {
      scrollToCard(activeIdx - 1);
    }
  });
  rightArrow.addEventListener('click', () => {
    const cards = Array.from(carousel.querySelectorAll('.project-card'));
    let activeIdx = updateActiveCard();
    if (activeIdx < cards.length - 1) {
      scrollToCard(activeIdx + 1);
    }
  });
}

// Swipe support: snap to nearest card on touch end
function enableSwipeSnap(element) {
  let startX = 0;
  let isDown = false;
  element.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
  });
  element.addEventListener('touchend', () => {
    isDown = false;
    // Snap to nearest card
    const cards = Array.from(element.querySelectorAll('.project-card'));
    let minDiff = Infinity;
    let activeIdx = 0;
    const carouselRect = element.getBoundingClientRect();
    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const carouselCenter = carouselRect.left + carouselRect.width / 2;
      const diff = Math.abs(carouselCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = idx;
      }
    });
    scrollToCard(activeIdx);
  });
}
enableSwipeSnap(carousel);
// Also snap on mouse up (for trackpad)
if (carousel) {
  carousel.addEventListener('mouseup', () => {
    setTimeout(() => scrollToCard(updateActiveCard()), 100);
  });
}
