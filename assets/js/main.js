/**
 * Aura Orientalis - Main JavaScript
 * Based on the BootstrapMade "Aura" template
 * Vanilla JS (no jQuery dependency)
 */
(function () {
  "use strict";

  /* ==========================================================================
     Helper Functions
     ========================================================================== */

  /**
   * Shortcut for querySelector
   * @param {string} selector - CSS selector
   * @param {boolean} [all=false] - If true, return all matching elements
   * @returns {Element|NodeList}
   */
  function select(selector, all = false) {
    return all
      ? document.querySelectorAll(selector)
      : document.querySelector(selector);
  }

  /**
   * Shortcut for addEventListener
   * @param {string} type - Event type
   * @param {string} selector - CSS selector (or the element itself)
   * @param {Function} handler - Event handler
   * @param {boolean} [all=false] - Bind to all matching elements
   */
  function on(type, selector, handler, all = false) {
    const elements = all ? select(selector, true) : [select(selector)];
    elements.forEach(function (el) {
      if (el) {
        el.addEventListener(type, handler);
      }
    });
  }

  /**
   * Shortcut for scroll-based event listeners
   * @param {Element} el - Target element
   * @param {Function} handler - Scroll handler
   */
  function onScroll(el, handler) {
    el.addEventListener("scroll", handler);
  }

  /* ==========================================================================
     1. Preloader
     ========================================================================== */

  /**
   * Hide the preloader overlay once the window has fully loaded.
   */
  window.addEventListener("load", function () {
    const preloader = select("#preloader");
    if (preloader) {
      preloader.remove();
    }
  });

  /* ==========================================================================
     2. Scroll-to-Top Button
     ========================================================================== */

  /**
   * Show the scroll-to-top button when the user scrolls past 100px.
   * Smooth-scroll back to the top on click.
   */
  const scrollTopBtn = select("#scroll-top");

  function toggleScrollTopBtn() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 100) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Evaluate on scroll
  window.addEventListener("scroll", toggleScrollTopBtn);

  /* ==========================================================================
     3. Header Scroll Effect
     ========================================================================== */

  /**
   * Add a `.scrolled` class to the #header element when the page is
   * scrolled past 100px. This is also checked on initial page load in
   * case the page starts in a scrolled position (e.g. via browser restore).
   */
  const header = select("#header");

  function toggleHeaderScrolled() {
    if (!header) return;
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // Run on scroll
  window.addEventListener("scroll", toggleHeaderScrolled);

  // Run once on DOMContentLoaded to handle pages loaded already scrolled
  document.addEventListener("DOMContentLoaded", toggleHeaderScrolled);

  /* ==========================================================================
     4. Mobile Navigation
     ========================================================================== */

  document.addEventListener("DOMContentLoaded", function () {
    /**
     * Toggle mobile navigation menu.
     * Swaps the hamburger icon (bi-list) with the close icon (bi-x) and
     * adds a `mobile-nav-active` class to <body>.
     */
    const mobileNavToggle = select(".mobile-nav-toggle");

    if (mobileNavToggle) {
      mobileNavToggle.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.toggle("mobile-nav-active");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
      });
    }

    /**
     * Close the mobile nav when a navigation link is clicked.
     */
    on(
      "click",
      "#navmenu a",
      function () {
        if (document.body.classList.contains("mobile-nav-active")) {
          document.body.classList.remove("mobile-nav-active");
          const toggler = select(".mobile-nav-toggle");
          if (toggler) {
            toggler.classList.add("bi-list");
            toggler.classList.remove("bi-x");
          }
        }
      },
      true
    );

    /**
     * Handle dropdown toggles inside mobile navigation.
     * Clicking `.toggle-dropdown` opens or closes the parent dropdown.
     */
    on(
      "click",
      ".navmenu .toggle-dropdown",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        // Toggle the parent <li> element
        const parentItem = this.parentElement;
        if (parentItem) {
          parentItem.classList.toggle("active");
          parentItem.parentElement.classList.toggle("dropdown-active");
        }
      },
      true
    );
  });

  /* ==========================================================================
     DOM-Ready Initializations
     ========================================================================== */

  document.addEventListener("DOMContentLoaded", function () {
    /* ========================================================================
       5. AOS (Animate On Scroll) Init
       ======================================================================== */

    /**
     * Initialize AOS library for scroll-triggered animations.
     */
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }

    /* ========================================================================
       6. GLightbox Init
       ======================================================================== */

    /**
     * Initialize GLightbox for lightbox-style media previews.
     */
    if (typeof GLightbox !== "undefined") {
      GLightbox({
        selector: ".glightbox",
      });
    }

    /* ========================================================================
       7. PureCounter Init
       ======================================================================== */

    /**
     * Initialize PureCounter for animated number counters.
     */
    if (typeof PureCounter !== "undefined") {
      new PureCounter();
    }
  });

  /* ==========================================================================
     Window-Load Initializations
     ========================================================================== */

  window.addEventListener("load", function () {
    /* ========================================================================
       8. Swiper Init
       ======================================================================== */

    /**
     * Initialize all Swiper instances.
     * Each `.init-swiper` wrapper should contain a <script> tag with
     * the class `swiper-config` holding a valid JSON configuration object.
     * The Swiper is initialized on the `.swiper` child container.
     */
    if (typeof Swiper !== "undefined") {
      select(".init-swiper", true).forEach(function (swiperWrapper) {
        const configScript = swiperWrapper.querySelector(
          "script.swiper-config"
        );
        if (!configScript) return;

        try {
          const config = JSON.parse(configScript.textContent.trim());
          const swiperContainer = swiperWrapper.querySelector(".swiper");
          if (swiperContainer) {
            new Swiper(swiperContainer, config);
          }
        } catch (e) {
          console.error("Invalid Swiper config JSON:", e);
        }
      });
    }

    /* ========================================================================
       9. Isotope & imagesLoaded Init
       ======================================================================== */

    /**
     * Initialize Isotope masonry/filter layouts.
     * Waits for imagesLoaded before triggering layout to prevent overlap.
     * Connects `.isotope-filters` button groups to filter the grid.
     */
    if (typeof Isotope !== "undefined") {
      select(".isotope-container", true).forEach(function (container) {
        // Read layout and default filter from data attributes (with fallbacks)
        const layout = container.getAttribute("data-layout") || "masonry";
        const defaultFilter =
          container.getAttribute("data-default-filter") || "*";
        const sort = container.getAttribute("data-sort") || "original-order";

        // Wait for images to load, then initialize Isotope
        let initIsotope;

        if (typeof imagesLoaded !== "undefined") {
          imagesLoaded(container, function () {
            initIsotope = new Isotope(container, {
              itemSelector: ".isotope-item",
              layoutMode: layout,
              filter: defaultFilter,
              sortBy: sort,
            });
          });
        } else {
          // Fallback: initialize without imagesLoaded
          initIsotope = new Isotope(container, {
            itemSelector: ".isotope-item",
            layoutMode: layout,
            filter: defaultFilter,
            sortBy: sort,
          });
        }

        // Bind filter buttons
        const filtersContainer = container
          .closest("section")
          ?.querySelector(".isotope-filters");

        if (filtersContainer) {
          filtersContainer.querySelectorAll("li").forEach(function (filterBtn) {
            filterBtn.addEventListener("click", function () {
              // Update active state on filter buttons
              filtersContainer
                .querySelector(".filter-active")
                ?.classList.remove("filter-active");
              this.classList.add("filter-active");

              // Apply the filter
              if (initIsotope) {
                initIsotope.arrange({
                  filter: this.getAttribute("data-filter"),
                });
              }
            });
          });
        }
      });
    }

    /* ========================================================================
       10. Smooth Scroll for Hash Links
       ======================================================================== */

    /**
     * If the URL contains a hash, smooth-scroll to the target element
     * after the page has fully loaded.
     */
    if (window.location.hash) {
      const targetEl = select(window.location.hash);
      if (targetEl) {
        setTimeout(function () {
          targetEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  });
})();
