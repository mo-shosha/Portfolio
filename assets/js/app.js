// Main App Component
import { createSidebar } from './components/Sidebar.js';
import { createNavbar } from './components/Navbar.js';
import { createAbout } from './components/About.js';
import { createResume } from './components/Resume.js';
import { createPortfolio } from './components/Portfolio.js';
import { createContact } from './components/Contact.js';

// Utility functions
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Data fetching function
async function fetchPortfolioData() {
  try {
    const response = await fetch('./assets/data/portfolio-data.json');
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return null;
  }
}

// App initialization
async function initializeApp() {
  const data = await fetchPortfolioData();
  if (!data) {
    console.error('Failed to load portfolio data');
    return;
  }

  const main = document.querySelector('main');
  const mainContent = document.querySelector('.main-content');

  // Clear existing content but preserve main-content structure
  const existingMainContent = main.querySelector('.main-content');
  if (existingMainContent) {
    existingMainContent.innerHTML = '';
  } else {
    // If main-content doesn't exist, create it
    const newMainContent = document.createElement('div');
    newMainContent.className = 'main-content';
    main.appendChild(newMainContent);
  }

  // Clear sidebar area
  const sidebar = main.querySelector('[data-sidebar]');
  if (sidebar) {
    sidebar.remove();
  }

  // Create and append sidebar
  const newSidebar = createSidebar(data.personalInfo);
  main.insertBefore(newSidebar, main.firstChild);

  // Get the main-content element again
  const currentMainContent = main.querySelector('.main-content');

  // Create and append navbar
  const navbar = createNavbar();
  currentMainContent.appendChild(navbar);

  // Create and append all page components
  const about = createAbout(data.about, data.testimonials);
  const resume = createResume(data.resume);
  const portfolio = createPortfolio(data.portfolio);
  const contact = createContact(data.contact);

  currentMainContent.appendChild(about);
  currentMainContent.appendChild(resume);
  currentMainContent.appendChild(portfolio);
  currentMainContent.appendChild(contact);

  // Initialize event listeners
  initializeEventListeners();
}

// Event listeners initialization
function initializeEventListeners() {
  // Sidebar toggle
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
  }

  // Testimonials modal
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  const testimonialsModalFunc = () => {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  };

  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      const modalImg = document.querySelector("[data-modal-img]");
      const modalTitle = document.querySelector("[data-modal-title]");
      const modalText = document.querySelector("[data-modal-text]");

      if (modalImg && modalTitle && modalText) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      }

      testimonialsModalFunc();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  }
  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  // Portfolio filtering
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  const filterFunc = (selectedValue) => {
    filterItems.forEach(item => {
      if (selectedValue === "all") {
        item.classList.add("active");
      } else if (selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      const selectedValue = this.dataset.category;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // Contact form
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formInputs && formBtn) {
    formInputs.forEach(input => {
      input.addEventListener("input", () => {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log("Form submitted");
    });
  }

  // Page navigation
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      const targetPage = this.innerHTML.toLowerCase();
      
      pages.forEach(page => {
        if (targetPage === page.dataset.page) {
          page.classList.add("active");
          this.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
        }
      });

      navigationLinks.forEach(navLink => navLink.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp); 