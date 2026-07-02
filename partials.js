/* Shared header/footer + Tweaks for Octus Estate */

const OCTUS_NAV = [
  { href: "/index.html", label: "Home" },
  { href: "/how-it-works.html", label: "How it works" },
  { href: "/pricing.html", label: "Pricing" },
  { href: "/trust-vs-will.html", label: "Trust vs Will" },
  { href: "/about.html", label: "About" },
  { href: "/faq.html", label: "FAQ" },
  { href: "/blog.html", label: "Resources" },
  { href: "/contact.html", label: "Contact" },
];

// Essay pages — treated as "Resources" for nav highlighting purposes
const ESSAY_SLUGS = [
  "essay-revocable-vs-irrevocable.html",
  "essay-what-a-trust-does.html",
  "essay-diy-trust.html",
  "essay-unfunded-trust.html",
  "essay-retitle-brokerage.html",
  "essay-holographic-will.html",
  "essay-probate.html",
  "essay-intestate-florida.html",
  "essay-healthcare-proxy.html",
  "essay-powers-of-attorney.html",
  "essay-guardian-designation.html",
  "essay-spouse-dies.html",
  "essay-when-to-update.html",
  "essay-blended-families.html",
  "essay-estate-tax-sunset.html",
  "essay-cabin-another-state.html",
  "essay-lady-bird-deed.html",
];

function renderHeader(currentPath) {
  // If we're on an essay page, highlight "Resources" in the nav
  const navPath = ESSAY_SLUGS.includes(currentPath) ? "blog.html" : currentPath;

  const links = OCTUS_NAV.map(n => {
    const cur = n.href === navPath ? ' class="current"' : "";
    return `<a href="${n.href}"${cur}>${n.label}</a>`;
  }).join("");

  return `
  <header class="site-header">
    <div class="site-header-inner">
      <a class="brand" href="/index.html" aria-label="Octus Estate home">
        <img src="assets/octus-mark.png" alt="" />
        <span class="brand-text">
          <span class="name">Octus</span>
          <span class="sub">Financial</span>
        </span>
      </a>
      <nav class="site-nav">${links}</nav>
      <div class="header-cta">
        <a class="phone-link" href="tel:+18335331123">(833) 533-1123</a>
        <a class="btn btn-primary" href="https://calendly.com/octusfinancial/introduction" target="_blank" rel="noopener">Schedule now
          <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:12px;">
            <img src="assets/octus-mark.png" alt="" width="40" height="40" style="filter:brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(8deg);opacity:.85;" />
            <span style="font-family:var(--serif);font-size:24px;color:#f7f1df;letter-spacing:.02em;">Octus Estate</span>
          </div>
          <p>Estate planning, done with you — not for you. Flat-fee guidance over three meetings, available in every state.</p>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="/pricing.html">Revocable Trust</a></li>
            <li><a href="/pricing.html">Last Will</a></li>
            <li><a href="/pricing.html">Pour-Over Will</a></li>
            <li><a href="/pricing.html">Powers of Attorney</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Learn</h5>
          <ul>
            <li><a href="/how-it-works.html">How it works</a></li>
            <li><a href="/trust-vs-will.html">Trust vs Will</a></li>
            <li><a href="/faq.html">FAQ</a></li>
            <li><a href="/blog.html">Resources</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Essays</h5>
          <ul>
            <li><a href="/essay-unfunded-trust.html">The unfunded trust epidemic</a></li>
            <li><a href="/essay-revocable-vs-irrevocable.html">Revocable vs irrevocable</a></li>
            <li><a href="/essay-probate.html">What probate actually costs</a></li>
            <li><a href="/essay-lady-bird-deed.html">Lady Bird deeds in Florida</a></li>
            <li><a href="/essay-blended-families.html">Blended family planning</a></li>
            <li><a href="/blog.html" style="color:var(--gold);margin-top:4px;display:inline-block;">All essays →</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Firm</h5>
          <ul>
            <li><a href="/about.html">About Octus</a></li>
            <li><a href="/testimonials.html">Client stories</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="https://calendly.com/octusfinancial/introduction" target="_blank" rel="noopener">Schedule now</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Octus Estate. All rights reserved.</span>
        <span>Available in all 50 states</span>
        <span class="footer-legal-links">
          <a href="/legal.html#disclosures">Disclosures</a>
          <span aria-hidden="true">·</span>
          <a href="/legal.html#privacy">Privacy</a>
          <span aria-hidden="true">·</span>
          <a href="/legal.html#terms">Terms</a>
          <span aria-hidden="true">·</span>
          <a href="/legal.html#cookies">Cookies</a>
        </span>
      </div>
      <p class="footer-disclaimer">
        Octus Estate, LLC is a financial advisory firm — not a law firm. Estate-planning documents are prepared using the Estately platform; where attorney involvement is required, legal services are provided by attorneys licensed in your state through Estately + Counsel (operated by Advanced Services Law Group). Information on this website is provided for general informational purposes only and does not constitute legal, tax, or financial advice, and does not create an attorney-client relationship. Past results do not guarantee future outcomes. By using this site you agree to our <a href="/legal.html#terms" style="color:#d9bf85;text-decoration:underline;">Terms of Service</a> and <a href="/legal.html#privacy" style="color:#d9bf85;text-decoration:underline;">Privacy Policy</a>. See our full <a href="/legal.html" style="color:#d9bf85;text-decoration:underline;">Legal &amp; Disclosures</a> page.
      </p>
    </div>
  </footer>`;
}

function mountHeaderFooter() {
  const path = (location.pathname.split("/").pop() || "index.html");
  const headerHost = document.getElementById("site-header");
  const footerHost = document.getElementById("site-footer");
  if (headerHost) headerHost.outerHTML = renderHeader(path);
  if (footerHost) footerHost.outerHTML = renderFooter();
}

/* =========================================================
   Schema.org JSON-LD — Organization (every page)
   ========================================================= */
function injectGlobalSchema() {
  if (document.querySelector('script[type="application/ld+json"][data-schema="org"]')) return;

  const org = {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "ProfessionalService"],
    "@id": "https://octusestate.com/#organization",
    "name": "Octus Estate",
    "legalName": "Octus Estate, LLC",
    "url": "https://octusestate.com/",
    "logo": "https://octusestate.com/assets/octus-mark.png",
    "image": "https://octusestate.com/assets/octus-mark.png",
    "description": "Flat-fee estate planning delivered over three guided meetings. Revocable trusts, wills, and powers of attorney. Available in all 50 states.",
    "telephone": "+1-833-533-1123",
    "priceRange": "$$",
    "areaServed": [
      { "@type": "Country", "name": "United States" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "sameAs": [],
    "knowsAbout": [
      "Revocable Living Trust",
      "Last Will and Testament",
      "Pour-Over Will",
      "Financial Power of Attorney",
      "Medical Power of Attorney",
      "Healthcare Proxy",
      "Estate Planning",
      "Trust Funding",
      "Probate Avoidance",
      "Lady Bird Deed",
      "Enhanced Life Estate Deed",
      "Ancillary Probate",
      "QTIP Trust",
      "Blended Family Estate Planning",
      "Florida Homestead Law",
      "Estate Tax Planning"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Estate Planning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Complete Plan",
          "description": "Revocable trust, last will, pour-over will, financial and medical powers of attorney, three guided meetings, and complimentary annual review.",
          "price": "2500.00",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Trust & Will Plan",
          "description": "Revocable trust and pour-over will, two guided meetings, attorney review in your state.",
          "price": "1800.00",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Essentials (Powers of Attorney)",
          "description": "Financial and medical powers of attorney plus living will / advance directive, one meeting, attorney review.",
          "price": "625.00",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.setAttribute("data-schema", "org");
  s.textContent = JSON.stringify(org);
  document.head.appendChild(s);

  // WebSite schema
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://octusestate.com/#website",
    "url": "https://octusestate.com/",
    "name": "Octus Estate",
    "publisher": { "@id": "https://octusestate.com/#organization" },
    "inLanguage": "en-US"
  };
  const s2 = document.createElement("script");
  s2.type = "application/ld+json";
  s2.setAttribute("data-schema", "website");
  s2.textContent = JSON.stringify(site);
  document.head.appendChild(s2);

  // Article list schema — helps AI engines and search understand the essay library
  const path = (location.pathname.split("/").pop() || "");
  if (path === "blog.html" || path === "") {
    const articleList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Estate Planning Essays — Octus Estate",
      "description": "Short essays on estate planning written by Mia Smith, FRC, NSSA, FPWM.",
      "url": "https://octusestate.com/blog.html",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "The Unfunded Trust Epidemic", "url": "https://octusestate.com/essay-unfunded-trust.html" },
        { "@type": "ListItem", "position": 2, "name": "Revocable vs Irrevocable Trusts", "url": "https://octusestate.com/essay-revocable-vs-irrevocable.html" },
        { "@type": "ListItem", "position": 3, "name": "What a Revocable Trust Actually Does", "url": "https://octusestate.com/essay-what-a-trust-does.html" },
        { "@type": "ListItem", "position": 4, "name": "Why a DIY Trust Almost Never Survives", "url": "https://octusestate.com/essay-diy-trust.html" },
        { "@type": "ListItem", "position": 5, "name": "How to Re-Title a Brokerage Account", "url": "https://octusestate.com/essay-retitle-brokerage.html" },
        { "@type": "ListItem", "position": 6, "name": "Why a Holographic Will Is a Worse Idea Than You Think", "url": "https://octusestate.com/essay-holographic-will.html" },
        { "@type": "ListItem", "position": 7, "name": "What Probate Is and How Long It Takes", "url": "https://octusestate.com/essay-probate.html" },
        { "@type": "ListItem", "position": 8, "name": "What Happens If You Die Without a Will in Florida", "url": "https://octusestate.com/essay-intestate-florida.html" },
        { "@type": "ListItem", "position": 9, "name": "The Healthcare Proxy Nobody Reads", "url": "https://octusestate.com/essay-healthcare-proxy.html" },
        { "@type": "ListItem", "position": 10, "name": "Powers of Attorney Explained", "url": "https://octusestate.com/essay-powers-of-attorney.html" },
        { "@type": "ListItem", "position": 11, "name": "Naming a Guardian for Your Children", "url": "https://octusestate.com/essay-guardian-designation.html" },
        { "@type": "ListItem", "position": 12, "name": "What to Do in the First 30 Days After a Spouse Dies", "url": "https://octusestate.com/essay-spouse-dies.html" },
        { "@type": "ListItem", "position": 13, "name": "When to Update Your Estate Plan", "url": "https://octusestate.com/essay-when-to-update.html" },
        { "@type": "ListItem", "position": 14, "name": "Estate Planning for Blended Families", "url": "https://octusestate.com/essay-blended-families.html" },
        { "@type": "ListItem", "position": 15, "name": "The 2026 Estate Tax Sunset", "url": "https://octusestate.com/essay-estate-tax-sunset.html" },
        { "@type": "ListItem", "position": 16, "name": "If You Own a Cabin in Another State", "url": "https://octusestate.com/essay-cabin-another-state.html" },
        { "@type": "ListItem", "position": 17, "name": "Regular Deed vs Lady Bird Deed in Florida", "url": "https://octusestate.com/essay-lady-bird-deed.html" }
      ]
    };
    const s3 = document.createElement("script");
    s3.type = "application/ld+json";
    s3.setAttribute("data-schema", "articlelist");
    s3.textContent = JSON.stringify(articleList);
    document.head.appendChild(s3);
  }
}

/* =========================================================
   Tweaks — Treatment switcher + accent toggle
   ========================================================= */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "treatment": "classic",
  "accent_strength": "balanced",
  "density": "comfortable"
}/*EDITMODE-END*/;

const TREATMENT_LABELS = {
  classic: { title: "Classic", sub: "Trusted, traditional. Warm cream + navy + gold." },
  editorial: { title: "Modern Editorial", sub: "Crisp, fintech-leaning. Lighter, tighter type." },
  luxury: { title: "Quiet Luxury", sub: "Subdued, premium. Stone + deep navy, restrained gold." }
};

function applyTweaks(state) {
  const root = document.documentElement;
  root.setAttribute("data-treatment", state.treatment);
  root.setAttribute("data-accent", state.accent_strength);
  root.setAttribute("data-density", state.density);

  if (state.density === "spacious") {
    root.style.setProperty("--gutter", "36px");
  } else {
    root.style.setProperty("--gutter", "28px");
  }

  if (state.accent_strength === "subtle") {
    root.style.setProperty("--accent", "var(--gold-deep)");
  } else if (state.accent_strength === "prominent") {
    root.style.setProperty("--accent", "var(--gold)");
  } else {
    root.style.setProperty("--accent", "var(--gold)");
  }
}

function loadTweaks() {
  try {
    const saved = JSON.parse(localStorage.getItem("octus_tweaks") || "null");
    return { ...TWEAK_DEFAULTS, ...(saved || {}) };
  } catch (e) { return { ...TWEAK_DEFAULTS }; }
}

function saveTweaks(state) {
  localStorage.setItem("octus_tweaks", JSON.stringify(state));
  try {
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: state }, "*");
  } catch (e) {}
}

function renderTweaksPanel(state) {
  const existing = document.getElementById("octus-tweaks");
  if (existing) existing.remove();

  const panel = document.createElement("div");
  panel.id = "octus-tweaks";
  panel.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999;
    width: 320px; background: #ffffff; color: #1f2a36;
    border: 1px solid #e3ddd0; border-radius: 14px;
    box-shadow: 0 12px 40px rgba(15,49,78,.18);
    font-family: 'Instrument Sans', -apple-system, sans-serif;
    overflow: hidden;
  `;
  panel.innerHTML = `
    <div style="padding:18px 20px 14px;border-bottom:1px solid #f0ece2;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:20px;color:#0f314e;font-weight:500;">Tweaks</div>
        <div style="font-size:11px;color:#8a8a85;letter-spacing:.12em;text-transform:uppercase;margin-top:2px;">Visual treatment</div>
      </div>
      <button id="tweaks-close" style="background:none;border:0;font-size:22px;color:#8a8a85;cursor:pointer;line-height:1;padding:0;">×</button>
    </div>
    <div style="padding:18px 20px;max-height:60vh;overflow-y:auto;">
      <div style="margin-bottom:18px;">
        <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5a5a55;margin-bottom:10px;">Treatment</div>
        <div id="tw-treatment" style="display:flex;flex-direction:column;gap:8px;">
          ${["classic","editorial","luxury"].map(t => `
            <label style="display:flex;gap:10px;padding:12px;border:1px solid ${state.treatment===t?"#c59f4a":"#e3ddd0"};border-radius:8px;cursor:pointer;background:${state.treatment===t?"#fbf6e9":"#fff"};transition:all .15s;">
              <input type="radio" name="treatment" value="${t}" ${state.treatment===t?"checked":""} style="margin-top:3px;accent-color:#c59f4a;">
              <div>
                <div style="font-weight:600;color:#0f314e;font-size:14px;">${TREATMENT_LABELS[t].title}</div>
                <div style="font-size:12px;color:#5a5a55;margin-top:2px;line-height:1.4;">${TREATMENT_LABELS[t].sub}</div>
              </div>
            </label>
          `).join("")}
        </div>
      </div>
      <div style="margin-bottom:18px;">
        <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5a5a55;margin-bottom:10px;">Gold accent</div>
        <div id="tw-accent" style="display:flex;gap:6px;background:#f5f4f1;padding:4px;border-radius:8px;">
          ${["subtle","balanced","prominent"].map(a => `
            <button data-val="${a}" style="flex:1;padding:8px;font-size:12px;border:0;border-radius:6px;background:${state.accent_strength===a?"#fff":"transparent"};color:#0f314e;box-shadow:${state.accent_strength===a?"0 1px 3px rgba(0,0,0,.08)":"none"};cursor:pointer;text-transform:capitalize;font-weight:${state.accent_strength===a?"600":"400"};">${a}</button>
          `).join("")}
        </div>
      </div>
      <div>
        <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5a5a55;margin-bottom:10px;">Density</div>
        <div id="tw-density" style="display:flex;gap:6px;background:#f5f4f1;padding:4px;border-radius:8px;">
          ${["comfortable","spacious"].map(d => `
            <button data-val="${d}" style="flex:1;padding:8px;font-size:12px;border:0;border-radius:6px;background:${state.density===d?"#fff":"transparent"};color:#0f314e;box-shadow:${state.density===d?"0 1px 3px rgba(0,0,0,.08)":"none"};cursor:pointer;text-transform:capitalize;font-weight:${state.density===d?"600":"400"};">${d}</button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(panel);

  panel.querySelectorAll('input[name="treatment"]').forEach(el => {
    el.addEventListener("change", () => {
      state.treatment = el.value;
      applyTweaks(state);
      saveTweaks(state);
      renderTweaksPanel(state);
    });
  });
  panel.querySelectorAll('#tw-accent button').forEach(el => {
    el.addEventListener("click", () => {
      state.accent_strength = el.dataset.val;
      applyTweaks(state);
      saveTweaks(state);
      renderTweaksPanel(state);
    });
  });
  panel.querySelectorAll('#tw-density button').forEach(el => {
    el.addEventListener("click", () => {
      state.density = el.dataset.val;
      applyTweaks(state);
      saveTweaks(state);
      renderTweaksPanel(state);
    });
  });
  document.getElementById("tweaks-close").addEventListener("click", () => {
    panel.remove();
    window.__octusTweaksOpen = false;
  });
  window.__octusTweaksOpen = true;
}

function initTweaks() {
  const state = loadTweaks();
  applyTweaks(state);

  window.addEventListener("message", (e) => {
    if (!e.data || typeof e.data !== "object") return;
    if (e.data.type === "__activate_edit_mode") {
      renderTweaksPanel(loadTweaks());
    } else if (e.data.type === "__deactivate_edit_mode") {
      const p = document.getElementById("octus-tweaks");
      if (p) p.remove();
      window.__octusTweaksOpen = false;
    }
  });
  try {
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  mountHeaderFooter();
  injectGlobalSchema();
  initTweaks();
});
