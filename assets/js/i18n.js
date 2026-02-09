/**
 * Aura Orientalis - Internationalization (i18n) Module
 * Supports: English (en), Japanese (ja), Vietnamese (vi)
 */
(function () {
  "use strict";

  const SUPPORTED_LANGS = ["en", "ja", "vi"];
  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "aura-lang";

  let translations = {};
  let currentLang = DEFAULT_LANG;

  /**
   * Get the saved language from localStorage, or detect from browser
   */
  function getSavedLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }
    return DEFAULT_LANG;
  }

  /**
   * Load translation JSON for a given language
   */
  async function loadTranslation(lang) {
    if (translations[lang]) return translations[lang];
    try {
      const scriptEl = document.querySelector('script[src*="i18n.js"]');
      const basePath = scriptEl ? scriptEl.getAttribute('src').replace(/js\/i18n\.js$/, '') : 'assets/';
      const response = await fetch(`${basePath}i18n/${lang}.json`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      translations[lang] = await response.json();
      return translations[lang];
    } catch (e) {
      console.warn(`Failed to load ${lang} translations:`, e);
      return null;
    }
  }

  /**
   * Get a nested value from an object using dot-separated key
   * e.g., getValue(obj, "nav.home") returns obj.nav.home
   */
  function getValue(obj, key) {
    return key.split(".").reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : null;
    }, obj);
  }

  /**
   * Apply translations to all elements with data-i18n attribute
   */
  function applyTranslations(data) {
    if (!data) return;

    // Translate elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = getValue(data, key);
      if (value !== null) {
        // Check if the value contains HTML
        if (value.includes("<")) {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
    });

    // Translate placeholders with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = getValue(data, key);
      if (value !== null) {
        el.setAttribute("placeholder", value);
      }
    });

    // Translate value attributes with data-i18n-value
    document.querySelectorAll("[data-i18n-value]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-value");
      const value = getValue(data, key);
      if (value !== null) {
        el.setAttribute("value", value);
      }
    });

    // Update html lang attribute
    document.documentElement.lang = currentLang;

    // Update active language indicator
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.classList.toggle("active-lang", el.getAttribute("data-lang") === currentLang);
    });
  }

  /**
   * Switch to a new language
   */
  async function switchLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    const data = await loadTranslation(lang);
    if (data) {
      applyTranslations(data);
    }
  }

  /**
   * Initialize i18n system
   */
  async function init() {
    currentLang = getSavedLang();

    // Pre-load current language
    const data = await loadTranslation(currentLang);
    if (data) {
      applyTranslations(data);
    }

    // Bind language switcher links
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const lang = this.getAttribute("data-lang");
        switchLanguage(lang);
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for external use
  window.AuraI18n = {
    switchLanguage: switchLanguage,
    getCurrentLang: function () { return currentLang; }
  };

})();
