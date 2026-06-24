/* @ds-bundle: {"format":3,"namespace":"PermacultureDesignDesignSystem_20f973","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"AccordionItem","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"88aafff3d215","components/core/Card.jsx":"470a2a7a501a","components/core/Rating.jsx":"7fb2d6bc87c6","components/feedback/Accordion.jsx":"63d103231c11","components/feedback/Callout.jsx":"03d0af5142f6","components/forms/Button.jsx":"8efc767c6806","components/forms/Checkbox.jsx":"8f9e985d294d","components/forms/Input.jsx":"2a2405fbf6c7","components/navigation/Breadcrumb.jsx":"8f9f9e169117","ui_kits/permaculture-website/App.jsx":"ae26d881a002","ui_kits/permaculture-website/AtelierScreen.jsx":"842562af9e2b","ui_kits/permaculture-website/Footer.jsx":"b3656b6679ff","ui_kits/permaculture-website/FormationsScreen.jsx":"caf3d85c9472","ui_kits/permaculture-website/Header.jsx":"9d3db471bcc8","ui_kits/permaculture-website/HomeScreen.jsx":"44a0c4b03f0b","ui_kits/permaculture-website/ds-loader.js":"5cdbd309b3c8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PermacultureDesignDesignSystem_20f973 = window.PermacultureDesignDesignSystem_20f973 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-sans); font-weight: var(--fw-bold);
  font-size: var(--fs-body-xs); line-height: 1; white-space: nowrap;
  padding: 6px 12px; border-radius: var(--radius-pill);
  background: var(--green-100); color: var(--green-800); border: 1px solid transparent;
}
.pcd-badge__icon { display: inline-flex; width: 14px; height: 14px; }
.pcd-badge__icon img, .pcd-badge__icon svg { width: 100%; height: 100%; }
.pcd-badge--premium { background: var(--yellow-400); color: var(--brown-900); }
.pcd-badge--success { background: var(--green-100); color: var(--green-700); }
.pcd-badge--solid   { background: var(--green-700); color: var(--white); }
.pcd-badge--neutral { background: var(--sand-50); color: var(--sand-600); border-color: var(--sand-300); }
.pcd-badge--danger  { background: #FFE7E3; color: var(--danger); }
.pcd-badge--warning { background: #FFF1DE; color: var(--warning); }
.pcd-badge--outline { background: transparent; color: var(--green-700); border-color: var(--green-300); }
.pcd-badge--lg { font-size: var(--fs-body-s); padding: 8px 16px; }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-badge-css")) {
  const el = document.createElement("style");
  el.id = "pcd-badge-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Badge — compact pill label for status, plan tiers ("Premium", "Gratuit"),
 * counts and tags.
 */
function Badge({
  children,
  variant = "success",
  size = "m",
  icon = null,
  className = "",
  ...rest
}) {
  const cls = ["pcd-badge", `pcd-badge--${variant}`, size === "lg" ? "pcd-badge--lg" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "pcd-badge__icon"
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-card {
  --_bg: var(--white); --_fg: var(--green-900);
  display: flex; flex-direction: column;
  background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-lg); overflow: hidden;
  border: 1px solid transparent;
}
.pcd-card--tint   { --_bg: var(--green-50); }
.pcd-card--band   { --_bg: var(--green-100); }
.pcd-card--sand   { --_bg: var(--sand-50); }
.pcd-card--forest { --_bg: var(--green-900); --_fg: var(--white); }
.pcd-card--bordered { border-color: var(--green-100); }
.pcd-card--elevated { box-shadow: var(--shadow-card); }
.pcd-card--xl { border-radius: var(--radius-xl); }
.pcd-card.is-interactive { cursor: pointer; transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); text-decoration: none; }
.pcd-card.is-interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.pcd-card__media { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; background: var(--green-100); }
.pcd-card__body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-3); }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-card-css")) {
  const el = document.createElement("style");
  el.id = "pcd-card-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Card — surface container. Holds media + body; tones map to the brand
 * surface palette (white, tint, band, sand, forest).
 */
function Card({
  children,
  tone = "white",
  elevated = false,
  bordered = false,
  radius = "lg",
  media = null,
  href,
  bodyless = false,
  className = "",
  ...rest
}) {
  const cls = ["pcd-card", tone !== "white" ? `pcd-card--${tone}` : "", elevated ? "pcd-card--elevated" : "", bordered ? "pcd-card--bordered" : "", radius === "xl" ? "pcd-card--xl" : "", href ? "is-interactive" : "", className].filter(Boolean).join(" ");
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), media && (typeof media === "string" ? /*#__PURE__*/React.createElement("img", {
    className: "pcd-card__media",
    src: media,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "pcd-card__media"
  }, media)), bodyless ? children : /*#__PURE__*/React.createElement("div", {
    className: "pcd-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-rating { display: inline-flex; align-items: center; gap: var(--space-2); font-family: var(--font-sans); }
.pcd-rating__stars { display: inline-flex; gap: 2px; }
.pcd-rating__star { width: 1em; height: 1em; font-size: var(--_sz, 18px); color: var(--yellow-400); display: inline-block; line-height: 1; }
.pcd-rating__star--empty { color: var(--green-200); }
.pcd-rating__text { font-size: var(--fs-body-s); font-weight: var(--fw-bold); color: var(--green-900); }
.pcd-rating__text span { font-weight: var(--fw-medium); color: var(--text-muted); }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-rating-css")) {
  const el = document.createElement("style");
  el.id = "pcd-rating-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Rating — five honey-yellow stars with optional score + review count,
 * mirroring the "5/5 · 12 500+ avis Google" pattern.
 */
function Rating({
  value = 5,
  max = 5,
  size = 18,
  label,
  className = "",
  ...rest
}) {
  const full = Math.round(value);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["pcd-rating", className].filter(Boolean).join(" "),
    style: {
      "--_sz": size + "px"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pcd-rating__stars",
    "aria-label": `${value} sur ${max}`
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "pcd-rating__star" + (i < full ? "" : " pcd-rating__star--empty")
  }, "\u2605"))), label && /*#__PURE__*/React.createElement("span", {
    className: "pcd-rating__text"
  }, label));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-accordion { display: flex; flex-direction: column; gap: var(--space-3); font-family: var(--font-sans); }
.pcd-acc-item { background: var(--green-50); border: 1px solid var(--green-100); border-radius: var(--radius-md); overflow: hidden; }
.pcd-acc-item > summary {
  list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: var(--space-4);
  padding: 18px 20px; font-size: var(--fs-body-m); font-weight: var(--fw-bold); color: var(--green-900);
}
.pcd-acc-item > summary::-webkit-details-marker { display: none; }
.pcd-acc-item > summary:hover { color: var(--green-700); }
.pcd-acc-item__icon { flex: none; width: 22px; height: 22px; position: relative; transition: transform var(--dur-base) var(--ease-out); }
.pcd-acc-item__icon::before, .pcd-acc-item__icon::after {
  content: ""; position: absolute; background: var(--green-600); border-radius: 2px;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
}
.pcd-acc-item__icon::before { width: 14px; height: 2.4px; }
.pcd-acc-item__icon::after  { width: 2.4px; height: 14px; transition: transform var(--dur-base) var(--ease-out); }
.pcd-acc-item[open] .pcd-acc-item__icon::after { transform: translate(-50%, -50%) scaleY(0); }
.pcd-acc-item__body { padding: 0 20px 20px; font-size: var(--fs-body-m); font-weight: var(--fw-medium); color: var(--green-800); line-height: var(--lh-body); }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-accordion-css")) {
  const el = document.createElement("style");
  el.id = "pcd-accordion-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * AccordionItem — a single collapsible row (native <details> for no-JS support).
 */
function AccordionItem({
  question,
  children,
  name,
  defaultOpen = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("details", _extends({
    className: "pcd-acc-item",
    name: name,
    open: defaultOpen || undefined
  }, rest), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    className: "pcd-acc-item__icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcd-acc-item__body"
  }, children));
}

/**
 * Accordion — FAQ list. Pass `items=[{question, answer}]` or compose
 * <AccordionItem> children. `exclusive` keeps only one row open at a time.
 */
function Accordion({
  items,
  exclusive = false,
  children,
  className = "",
  ...rest
}) {
  const name = exclusive ? "pcd-acc-" + Math.random().toString(36).slice(2, 8) : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["pcd-accordion", className].filter(Boolean).join(" ")
  }, rest), items ? items.map((it, i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: i,
    question: it.question,
    name: name,
    defaultOpen: it.defaultOpen
  }, it.answer)) : React.Children.map(children, c => React.isValidElement(c) && exclusive ? React.cloneElement(c, {
    name
  }) : c));
}
Object.assign(__ds_scope, { AccordionItem, Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-callout { font-family: var(--font-sans); font-size: var(--fs-body-m); font-weight: var(--fw-medium); color: var(--green-900); line-height: var(--lh-body); }

/* highlight — indented text with green accent bar */
.pcd-callout--highlight { display: flex; gap: var(--space-4); padding: 8px 0; }
.pcd-callout--highlight::before { content: ""; flex: none; width: 4px; border-radius: 2px; background: var(--green-600); align-self: stretch; }

/* quote — soft green panel with oversized quotation mark */
.pcd-callout--quote { position: relative; background: var(--green-100); border-radius: var(--radius-md); padding: 32px 36px; color: var(--green-900); }
.pcd-callout--quote .pcd-callout__mark { font-family: var(--font-display); font-size: 72px; line-height: 0.7; color: var(--green-700); display: block; height: 34px; }
.pcd-callout--quote .pcd-callout__cite { display: block; margin-top: 14px; font-size: var(--fs-body-s); font-weight: var(--fw-bold); color: var(--green-700); }

/* état banners — tinted, with leading glyph */
.pcd-callout--state { display: flex; align-items: flex-start; gap: var(--space-3); padding: 14px 18px; border-radius: var(--radius-md); }
.pcd-callout__glyph { flex: none; width: 22px; height: 22px; margin-top: 1px; }
.pcd-callout__glyph svg { width: 100%; height: 100%; display: block; }
.pcd-callout--success { background: var(--green-100); color: var(--green-800); }
.pcd-callout--success .pcd-callout__glyph { color: var(--green-600); }
.pcd-callout--info { background: var(--green-50); color: var(--green-800); }
.pcd-callout--info .pcd-callout__glyph { color: var(--green-600); }
.pcd-callout--warning { background: #FFF1DE; color: #6b3a00; }
.pcd-callout--warning .pcd-callout__glyph { color: var(--warning); }
.pcd-callout--danger { background: #FFE7E3; color: #8a1f12; }
.pcd-callout--danger .pcd-callout__glyph { color: var(--danger); }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-callout-css")) {
  const el = document.createElement("style");
  el.id = "pcd-callout-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
const GLYPHS = {
  success: /*#__PURE__*/React.createElement("path", {
    d: "M5 12l4.5 4.5L19 7",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }),
  info: /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7.4",
    r: "0.2",
    strokeWidth: "2.6"
  })),
  warning: /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5 22 20H2L12 3.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10v4.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "17.6",
    r: "0.2",
    strokeWidth: "2.6"
  })),
  danger: /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "16.6",
    r: "0.2",
    strokeWidth: "2.6"
  }))
};

/**
 * Callout — "mise en exergue": emphasised passages, pull-quotes and
 * status banners within long-form content.
 */
function Callout({
  variant = "highlight",
  children,
  cite,
  icon,
  className = "",
  ...rest
}) {
  if (variant === "quote") {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["pcd-callout", "pcd-callout--quote", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "pcd-callout__mark",
      "aria-hidden": "true"
    }, "\u201C"), /*#__PURE__*/React.createElement("div", null, children), cite && /*#__PURE__*/React.createElement("span", {
      className: "pcd-callout__cite"
    }, cite));
  }
  if (variant === "highlight") {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["pcd-callout", "pcd-callout--highlight", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement("div", null, children));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["pcd-callout", "pcd-callout--state", `pcd-callout--${variant}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pcd-callout__glyph",
    "aria-hidden": "true"
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, GLYPHS[variant])), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once (self-contained; reads design-system tokens). */
const CSS = `
.pcd-btn {
  --_bg: var(--green-700);
  --_fg: var(--white);
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2);
  font-family: var(--font-sans); font-weight: var(--fw-medium); font-size: var(--fs-body-m);
  line-height: 1.4; text-align: center; white-space: nowrap; text-decoration: none;
  color: var(--_fg); background: var(--_bg);
  border: var(--border-width-strong) solid var(--_bd); border-radius: var(--radius-md);
  padding: 16px 24px; cursor: pointer; user-select: none;
  transition: background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out);
}
.pcd-btn:hover { text-decoration: none; filter: brightness(0.94); }
.pcd-btn:active { transform: translateY(1px); }
.pcd-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.pcd-btn[disabled], .pcd-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }
.pcd-btn--full { width: 100%; }

/* sizes */
.pcd-btn--xl { padding: 24px 32px; font-size: var(--fs-body-m); }
.pcd-btn--m  { padding: 16px 24px; font-size: var(--fs-body-m); }
.pcd-btn--s  { padding: 12px 20px; font-size: var(--fs-body-s); }
.pcd-btn--xs { padding: 8px 16px;  font-size: var(--fs-body-s); }

/* variants */
.pcd-btn--primary   { --_bg: var(--green-700); --_fg: var(--white); }
.pcd-btn--accent    { --_bg: var(--yellow-400); --_fg: var(--brown-900); }
.pcd-btn--accent:hover { filter: none; --_bg: var(--yellow-500); }
.pcd-btn--dark      { --_bg: var(--ink); --_fg: var(--white); }
.pcd-btn--light     { --_bg: var(--white); --_fg: var(--green-900); --_bd: var(--border-default); }
.pcd-btn--light:hover { filter: none; --_bg: var(--green-50); }
.pcd-btn--secondary { --_bg: transparent; --_fg: var(--green-700); --_bd: var(--green-700); }
.pcd-btn--secondary:hover { filter: none; --_bg: var(--green-50); }
.pcd-btn--ghost     { --_bg: transparent; --_fg: var(--green-700); --_bd: transparent; }
.pcd-btn--ghost:hover { filter: none; --_bg: var(--green-50); }
.pcd-btn__icon { display: inline-flex; width: 1.25em; height: 1.25em; flex: none; }
.pcd-btn__icon svg, .pcd-btn__icon img { width: 100%; height: 100%; display: block; }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-button-css")) {
  const el = document.createElement("style");
  el.id = "pcd-button-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Button — Permaculture Design's primary action control.
 * Forest-green by default; honey-yellow `accent` for the highest-emphasis CTA.
 */
function Button({
  children,
  variant = "primary",
  size = "m",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  href,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["pcd-btn", `pcd-btn--${variant}`, `pcd-btn--${size}`, fullWidth ? "pcd-btn--full" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "pcd-btn__icon"
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", {
    className: "pcd-btn__label"
  }, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "pcd-btn__icon"
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-check { display: inline-flex; align-items: flex-start; gap: var(--space-2); font-family: var(--font-sans); cursor: pointer; user-select: none; }
.pcd-check__input { position: absolute; opacity: 0; width: 0; height: 0; }
.pcd-check__box {
  flex: none; width: 20px; height: 20px; margin-top: 1px;
  border: var(--border-width-strong) solid var(--green-600); background: var(--white);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.pcd-check--checkbox .pcd-check__box { border-radius: 5px; }
.pcd-check--radio .pcd-check__box { border-radius: 999px; }
.pcd-check__box svg { width: 13px; height: 13px; opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.pcd-check__dot { width: 10px; height: 10px; border-radius: 999px; background: var(--white); opacity: 0; transform: scale(0.4); transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.pcd-check__input:checked + .pcd-check__box { background: var(--green-700); border-color: var(--green-700); }
.pcd-check__input:checked + .pcd-check__box svg,
.pcd-check__input:checked + .pcd-check__box .pcd-check__dot { opacity: 1; transform: scale(1); }
.pcd-check__input:focus-visible + .pcd-check__box { box-shadow: var(--shadow-focus); }
.pcd-check__label { font-size: var(--fs-body-m); font-weight: var(--fw-medium); color: var(--green-700); line-height: 1.4; }
.pcd-check__input:disabled ~ .pcd-check__label,
.pcd-check__input:disabled + .pcd-check__box { opacity: 0.45; }
.pcd-check[data-disabled="true"] { cursor: not-allowed; }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-check-css")) {
  const el = document.createElement("style");
  el.id = "pcd-check-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
const CheckGlyph = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 12 10",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 5.2 4.2 8.5 11 1.3",
  stroke: "#fff",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Checkbox / Radio — boxed (checkbox) or circular (radio) selection control
 * filling forest-green when active.
 */
function Checkbox({
  label,
  type = "checkbox",
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["pcd-check", `pcd-check--${type}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    "data-disabled": disabled || undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "pcd-check__input",
    type: type,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pcd-check__box"
  }, type === "radio" ? /*#__PURE__*/React.createElement("span", {
    className: "pcd-check__dot"
  }) : CheckGlyph), label && /*#__PURE__*/React.createElement("span", {
    className: "pcd-check__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.pcd-field__label { font-size: var(--fs-body-s); font-weight: var(--fw-bold); color: var(--green-700); }
.pcd-field__hint { font-size: var(--fs-body-xs); color: var(--text-muted); }
.pcd-field__wrap { position: relative; display: flex; align-items: center; }
.pcd-input {
  width: 100%; font-family: var(--font-sans); font-weight: var(--fw-medium); font-size: var(--fs-body-m);
  color: var(--green-900); background: var(--white);
  border: var(--border-width-strong) solid var(--green-200); border-radius: var(--radius-md);
  padding: 13px 16px; line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.pcd-input::placeholder { color: var(--grey-400); }
.pcd-input:hover { border-color: var(--green-300); }
.pcd-input:focus { outline: none; border-color: var(--green-600); box-shadow: var(--shadow-focus); }
.pcd-input:disabled { background: var(--grey-100); color: var(--grey-400); cursor: not-allowed; }
.pcd-field--icon .pcd-input { padding-left: 46px; }
.pcd-field__icon { position: absolute; left: 16px; width: 20px; height: 20px; pointer-events: none; color: var(--green-600); display: inline-flex; }
.pcd-field__icon img, .pcd-field__icon svg { width: 100%; height: 100%; }
.pcd-field--error .pcd-input { border-color: var(--danger); }
.pcd-field--error .pcd-field__hint { color: var(--danger); }
textarea.pcd-input { resize: vertical; min-height: 96px; }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-input-css")) {
  const el = document.createElement("style");
  el.id = "pcd-input-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Input — single-line text field (or textarea / search) in the brand style.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  multiline = false,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `pcd-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const Tag = multiline ? "textarea" : "input";
  const cls = ["pcd-field", icon ? "pcd-field--icon" : "", error ? "pcd-field--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pcd-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "pcd-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "pcd-field__icon"
  }, icon), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    className: "pcd-input"
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "pcd-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.pcd-breadcrumb { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2); font-family: var(--font-sans); font-size: var(--fs-body-s); font-weight: var(--fw-medium); }
.pcd-breadcrumb__item { color: var(--green-600); text-decoration: none; }
.pcd-breadcrumb__item:hover { text-decoration: underline; }
.pcd-breadcrumb__item--current { color: var(--text-muted); pointer-events: none; }
.pcd-breadcrumb__sep { color: var(--green-300); font-size: 1em; user-select: none; }
.pcd-breadcrumb__home { width: 16px; height: 16px; display: inline-flex; vertical-align: -2px; }
.pcd-breadcrumb__home img, .pcd-breadcrumb__home svg { width: 100%; height: 100%; }
`;
if (typeof document !== "undefined" && !document.getElementById("pcd-breadcrumb-css")) {
  const el = document.createElement("style");
  el.id = "pcd-breadcrumb-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Breadcrumb — "fil d'ariane" trail. The last item renders as the current
 * (non-link) page. Pass a `homeIcon` node to lead with a home glyph.
 */
function Breadcrumb({
  items = [],
  homeIcon = null,
  separator = "›",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["pcd-breadcrumb", className].filter(Boolean).join(" "),
    "aria-label": "Fil d'ariane"
  }, rest), items.map((it, i) => {
    const isLast = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, isLast ? /*#__PURE__*/React.createElement("span", {
      className: "pcd-breadcrumb__item pcd-breadcrumb__item--current",
      "aria-current": "page"
    }, i === 0 && homeIcon && /*#__PURE__*/React.createElement("span", {
      className: "pcd-breadcrumb__home"
    }, homeIcon), it.label) : /*#__PURE__*/React.createElement("a", {
      className: "pcd-breadcrumb__item",
      href: it.href || "#"
    }, i === 0 && homeIcon && /*#__PURE__*/React.createElement("span", {
      className: "pcd-breadcrumb__home"
    }, homeIcon), it.label), !isLast && /*#__PURE__*/React.createElement("span", {
      className: "pcd-breadcrumb__sep",
      "aria-hidden": "true"
    }, separator));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/permaculture-website/App.jsx
try { (() => {
/* App — interactive shell wiring the Permaculture Design website screens. */
function PCDApp() {
  const [screen, setScreen] = React.useState(() => {
    try {
      return localStorage.getItem("pcd-screen") || "home";
    } catch (e) {
      return "home";
    }
  });
  const onNav = React.useCallback(id => {
    setScreen(id);
    try {
      localStorage.setItem("pcd-screen", id);
    } catch (e) {}
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  const Screen = {
    home: window.PCDHome,
    formations: window.PCDFormations,
    atelier: window.PCDAtelier
  }[screen] || window.PCDHome;
  return /*#__PURE__*/React.createElement("div", {
    className: "pk-app"
  }, /*#__PURE__*/React.createElement(window.PCDHeader, {
    active: screen,
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Screen, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(window.PCDFooter, {
    onNav: onNav
  }));
}
window.loadDS().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(PCDApp, null));
}).catch(e => {
  document.getElementById("root").textContent = "Erreur de chargement : " + e.message;
  console.error(e);
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/permaculture-website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/permaculture-website/AtelierScreen.jsx
try { (() => {
/* AtelierScreen — L'Atelier membership / pricing (Premium vs Gratuit). */
function PCDAtelier({
  onNav
}) {
  const {
    Button,
    Badge,
    Card,
    Rating,
    Checkbox
  } = window.PermacultureDesignDesignSystem_20f973;
  const premium = ["Accès illimité à toutes les formations", "Nouvelles formations chaque mois", "Communauté privée de 12 500+ membres", "Sessions en direct + replays", "Supports de culture téléchargeables", "Accès à vie aux mises à jour"];
  const gratuit = ["Aperçu des formations", "Accès à la newsletter hebdomadaire", "1 formation découverte offerte", "Lecture des articles du blog"];
  return /*#__PURE__*/React.createElement("div", {
    className: "pk-page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pk-atelier-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-atelier-hero__inner"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "premium",
    size: "lg"
  }, "L'Atelier \u2014 la communaut\xE9"), /*#__PURE__*/React.createElement("h1", {
    className: "pk-atelier-hero__title"
  }, "Rejoignez l'Atelier de Permaculture Design"), /*#__PURE__*/React.createElement("p", {
    className: "pk-atelier-hero__lede"
  }, "Un seul abonnement, tout le savoir-faire. Apprenez, \xE9changez et passez \xE0 l'action, entour\xE9 de 12 500 passionn\xE9s."), /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    label: "5/5 \xB7 avis Google"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "pk-section pk-section--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-plans"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "pk-plan pk-plan--premium",
    tone: "forest",
    radius: "xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-plan__top"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "premium"
  }, "Le plus choisi"), /*#__PURE__*/React.createElement("h3", {
    className: "pk-plan__name"
  }, "Membre Premium"), /*#__PURE__*/React.createElement("div", {
    className: "pk-plan__price"
  }, /*#__PURE__*/React.createElement("strong", null, "89 \u20AC"), /*#__PURE__*/React.createElement("span", null, "/ an")), /*#__PURE__*/React.createElement("div", {
    className: "pk-plan__note"
  }, "soit 7,42 \u20AC/mois \u2014 2 600 \u20AC de formations incluses")), /*#__PURE__*/React.createElement("ul", {
    className: "pk-plan__list pk-plan__list--light"
  }, premium.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement("span", {
    className: "pk-check pk-check--yellow"
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "xl",
    fullWidth: true
  }, "Rejoindre l'Atelier")), /*#__PURE__*/React.createElement(Card, {
    className: "pk-plan",
    tone: "white",
    bordered: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-plan__top"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "D\xE9couverte"), /*#__PURE__*/React.createElement("h3", {
    className: "pk-plan__name"
  }, "Membre Gratuit"), /*#__PURE__*/React.createElement("div", {
    className: "pk-plan__price"
  }, /*#__PURE__*/React.createElement("strong", null, "0 \u20AC"), /*#__PURE__*/React.createElement("span", null, "/ pour toujours")), /*#__PURE__*/React.createElement("div", {
    className: "pk-plan__note"
  }, "Pour d\xE9couvrir notre approche sans engagement")), /*#__PURE__*/React.createElement("ul", {
    className: "pk-plan__list"
  }, gratuit.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement("span", {
    className: "pk-check"
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "xl",
    fullWidth: true
  }, "Cr\xE9er un compte gratuit"))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    radius: "xl",
    className: "pk-guarantee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-guarantee__inner"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pk-guarantee__title"
  }, "Satisfait ou rembours\xE9 pendant 30 jours"), /*#__PURE__*/React.createElement("p", null, "Essayez l'Atelier sans risque. Si l'approche ne vous convient pas, nous vous remboursons int\xE9gralement."), /*#__PURE__*/React.createElement("label", {
    className: "pk-guarantee__opt"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Je souhaite recevoir le guide gratuit \xAB D\xE9marrer en permaculture \xBB",
    defaultChecked: true
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "pk-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pk-cta__title"
  }, "Pr\xEAt \xE0 concevoir votre vision ?"), /*#__PURE__*/React.createElement("p", {
    className: "pk-cta__sub"
  }, "Rejoignez une communaut\xE9 qui cultive l'autonomie, le vivant et le bon sens."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "xl",
    onClick: () => onNav("home")
  }, "Rejoindre l'Atelier \u2014 89 \u20AC/an"))));
}
window.PCDAtelier = PCDAtelier;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/permaculture-website/AtelierScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/permaculture-website/Footer.jsx
try { (() => {
/* Footer — forest-green site footer with link columns, social, search. */
function PCDFooter({
  onNav
}) {
  const {
    Input
  } = window.PermacultureDesignDesignSystem_20f973;
  const social = ["facebook", "instagram", "youtube", "linkedin", "tiktok", "x"];
  const cols = [["Le principal", ["Formation permaculture en ligne", "L'Atelier & la communauté", "Rejoindre l'Atelier gratuitement", "Une entreprise régénérative"]], ["Aide et contact", ["Nous contacter", "Se connecter", "Mentions légales", "Politique de confidentialité"]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "pk-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-footer__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pk-logo pk-logo--inverse",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "pk-logo__mark",
    src: "../../assets/logos/symbole-pcd.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "pk-logo__word",
    src: "../../assets/logos/pcd-texte-blanc.svg",
    alt: "Permaculture Design"
  })), /*#__PURE__*/React.createElement("p", {
    className: "pk-footer__tagline"
  }, "R\xEAvez plus, vivez votre lieu de vie, construisez-le.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("nav", {
    className: "pk-footer__col",
    key: title
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pk-footer__title"
  }, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault()
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "pk-footer__col"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pk-footer__title"
  }, "Nous suivre"), /*#__PURE__*/React.createElement("div", {
    className: "pk-social"
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/" + s + ".svg",
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pk-footer__search"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/search.svg",
      alt: ""
    }),
    placeholder: "Rechercher sur le site\u2026"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pk-footer__legal"
  }, "\xA9 2026 Permaculture Design \u2014 Une entreprise r\xE9g\xE9n\xE9rative \xB7 Mentions l\xE9gales \xB7 Gestion des cookies"));
}
window.PCDFooter = PCDFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/permaculture-website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/permaculture-website/FormationsScreen.jsx
try { (() => {
/* FormationsScreen — a "pillar"/article page (PCDPagePilier style). */
function PCDFormations({
  onNav
}) {
  const {
    Button,
    Badge,
    Card,
    Callout,
    Accordion,
    Breadcrumb
  } = window.PermacultureDesignDesignSystem_20f973;
  const related = [{
    img: "../../assets/images/photo-garden.png",
    title: "Récupérer l'eau de pluie au jardin"
  }, {
    img: "../../assets/images/photo-formation.png",
    title: "Assainir par les plantes"
  }, {
    img: "../../assets/images/photo-1.jpg",
    title: "Concevoir une forêt-jardin"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "pk-page"
  }, /*#__PURE__*/React.createElement("article", {
    className: "pk-article"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    homeIcon: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/home.svg",
      alt: ""
    }),
    items: [{
      label: "Accueil",
      href: "#"
    }, {
      label: "Découvrir",
      href: "#"
    }, {
      label: "Les principes",
      href: "#"
    }, {
      label: "Créer une mare naturelle"
    }]
  }), /*#__PURE__*/React.createElement("header", {
    className: "pk-article__head"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "success"
  }, "Guide complet"), /*#__PURE__*/React.createElement("h1", null, "Cr\xE9er une mare naturelle vivante"), /*#__PURE__*/React.createElement("p", {
    className: "pk-article__lede"
  }, "Une mare bien con\xE7ue devient le c\u0153ur battant de votre jardin : elle r\xE9gule l'eau, accueille la biodiversit\xE9 et nourrit tout l'\xE9cosyst\xE8me alentour.")), /*#__PURE__*/React.createElement("img", {
    className: "pk-article__hero",
    src: "../../assets/images/photo-1.jpg",
    alt: "Jardin en permaculture avec pergola fleurie"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pk-article__body"
  }, /*#__PURE__*/React.createElement("h3", null, "Observer avant d'agir"), /*#__PURE__*/React.createElement("p", null, "Le premier principe de la permaculture est l'observation. Avant de creuser, prenez le temps de comprendre comment l'eau circule sur votre terrain, o\xF9 elle stagne, o\xF9 elle s'infiltre, et comment la lumi\xE8re se d\xE9place au fil des saisons."), /*#__PURE__*/React.createElement(Callout, {
    variant: "highlight"
  }, "Pensez vos espaces comme des \xE9cosyst\xE8mes : chaque \xE9l\xE9ment en nourrit un autre, et la mare relie l'eau, le sol, les plantes et les animaux."), /*#__PURE__*/React.createElement("p", null, "Une mare naturelle ne demande ni b\xE2che plastique syst\xE9matique ni pompe : bien implant\xE9e, elle s'\xE9quilibre seule. Les plantes oxyg\xE9nantes, les berges en pente douce et la diversit\xE9 v\xE9g\xE9tale font le travail."), /*#__PURE__*/React.createElement(Callout, {
    variant: "quote",
    cite: "\xC9tienne S. \xB7 membre de l'Atelier"
  }, "J'ai suivi ce guide pas \xE0 pas. En deux week-ends, ma mare \xE9tait creus\xE9e et plant\xE9e. Six mois plus tard, libellules et grenouilles avaient d\xE9j\xE0 \xE9lu domicile."), /*#__PURE__*/React.createElement("h3", null, "Les \xE9tapes cl\xE9s"), /*#__PURE__*/React.createElement("p", null, "De l'implantation au choix des v\xE9g\xE9taux, chaque \xE9tape est d\xE9taill\xE9e dans la formation vid\xE9o. Voici les questions que l'on nous pose le plus souvent."), /*#__PURE__*/React.createElement(Accordion, {
    exclusive: true,
    items: [{
      question: "Quelle taille minimale pour une mare vivante ?",
      answer: "Dès 4 à 5 m², l'équilibre s'installe. Plus la mare est grande, plus elle est stable face aux variations de température.",
      defaultOpen: true
    }, {
      question: "Faut-il une bâche ou de l'argile ?",
      answer: "Les deux fonctionnent. L'argile (gleyification) est plus naturelle ; la bâche EPDM est plus rapide à mettre en œuvre sur sol drainant."
    }, {
      question: "Comment éviter les moustiques ?",
      answer: "Une mare vivante s'auto-régule : larves de libellules, notonectes et amphibiens contrôlent naturellement les moustiques."
    }]
  }), /*#__PURE__*/React.createElement(Callout, {
    variant: "success"
  }, "Cette formation est incluse dans l'abonnement Atelier \u2014 acc\xE8s \xE0 vie, mises \xE0 jour comprises.")), /*#__PURE__*/React.createElement("div", {
    className: "pk-article__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "xl",
    onClick: () => onNav("atelier")
  }, "Acc\xE9der \xE0 la formation"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav("home")
  }, "Voir toutes les formations"))), /*#__PURE__*/React.createElement("section", {
    className: "pk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-section__head"
  }, /*#__PURE__*/React.createElement("h2", null, "Dans la m\xEAme th\xE9matique")), /*#__PURE__*/React.createElement("div", {
    className: "pk-grid pk-grid--3"
  }, related.map((r, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    media: r.img,
    elevated: true,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("formations");
    }
  }, /*#__PURE__*/React.createElement("h5", {
    className: "pk-card__title"
  }, r.title), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "s"
  }, "Lire le guide"))))));
}
window.PCDFormations = PCDFormations;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/permaculture-website/FormationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/permaculture-website/Header.jsx
try { (() => {
/* Header — Permaculture Design site header (logo, nav, CTA). */
function PCDHeader({
  active,
  onNav
}) {
  const {
    Button
  } = window.PermacultureDesignDesignSystem_20f973;
  const nav = [["home", "Découvrir"], ["formations", "Formations"], ["apropos", "À propos"], ["boutique", "Boutique"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "pk-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pk-logo",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "pk-logo__mark",
    src: "../../assets/logos/symbole-pcd.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "pk-logo__word",
    src: "../../assets/logos/pcd-texte-vert.svg",
    alt: "Permaculture Design"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "pk-nav"
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    className: "pk-nav__link" + (active === id ? " is-active" : ""),
    onClick: e => {
      e.preventDefault();
      onNav(id === "apropos" || id === "boutique" ? active : id);
    }
  }, label, id === "formations" && /*#__PURE__*/React.createElement("img", {
    className: "pk-nav__chev",
    src: "../../assets/icons/chevron-down.svg",
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pk-header__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "s",
    onClick: () => onNav("atelier")
  }, "D\xE9couvrir l'Atelier"), /*#__PURE__*/React.createElement("a", {
    className: "pk-header__login",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("atelier");
    }
  }, "Se connecter")));
}
window.PCDHeader = PCDHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/permaculture-website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/permaculture-website/HomeScreen.jsx
try { (() => {
/* HomeScreen — Permaculture Design marketing landing ("Formations"). */
function PCDHome({
  onNav
}) {
  const {
    Button,
    Badge,
    Card,
    Rating,
    Accordion,
    Breadcrumb
  } = window.PermacultureDesignDesignSystem_20f973;
  const formations = [{
    img: "../../assets/images/photo-1.jpg",
    title: "Créez une mare naturelle vivante",
    videos: "20 vidéos",
    docs: "10 supports"
  }, {
    img: "../../assets/images/photo-garden.png",
    title: "Récupérez l'eau de pluie au jardin",
    videos: "12 vidéos",
    docs: "6 supports"
  }, {
    img: "../../assets/images/photo-formation.png",
    title: "Assainissement écologique par les plantes",
    videos: "18 vidéos",
    docs: "9 supports"
  }, {
    img: "../../assets/images/photo-1.jpg",
    title: "Concevez votre forêt-jardin comestible",
    videos: "30 vidéos",
    docs: "12 supports"
  }, {
    img: "../../assets/images/photo-garden.png",
    title: "Cultivez vos propres semences",
    videos: "14 vidéos",
    docs: "8 supports"
  }, {
    img: "../../assets/images/photo-formation.png",
    title: "Attirez les pollinisateurs chez vous",
    videos: "10 vidéos",
    docs: "5 supports"
  }];
  const avantages = [{
    t: "Formations en ligne",
    items: ["Apprenez à votre rythme, sans contrainte", "24h/24, 7j/7 sur tous vos appareils", "Vidéos HD découpées en courtes leçons"]
  }, {
    t: "Communauté",
    items: ["Groupe privé de 12 500+ passionnés", "Partage d'expériences et conseils", "Replays des sessions en direct"]
  }, {
    t: "Stages pratiques",
    items: ["Immersion sur un jardin en permaculture", "Accompagnement par nos formateurs", "Mise en pratique immédiate"]
  }];
  const faq = [{
    question: "Achat à l'unité ou rejoindre l'Atelier — que choisir ?",
    answer: "L'achat à l'unité vous donne un accès à vie à une formation précise. L'Atelier ouvre l'accès illimité à tout le catalogue, à la communauté et aux sessions en direct.",
    defaultOpen: true
  }, {
    question: "Les formations sont-elles accessibles à vie ?",
    answer: "Oui. Une fois acquise, une formation reste accessible sans limite de durée, mises à jour incluses."
  }, {
    question: "Puis-je rejoindre l'Atelier après avoir acheté une formation ?",
    answer: "Bien sûr — le montant de vos achats récents peut être déduit de votre premier abonnement."
  }, {
    question: "Je suis débutant(e), les formations me conviennent-elles ?",
    answer: "Elles s'adaptent à tous les niveaux, du jardinier curieux au porteur de projet de lieu de vie."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "pk-page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pk-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-hero__inner"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    className: "pk-hero__crumb",
    items: [{
      label: "Accueil",
      href: "#"
    }, {
      label: "Formations",
      href: "#"
    }, {
      label: "Apprenez à votre rythme"
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    className: "pk-hero__title"
  }, "Apprenez \xE0 votre rythme,", /*#__PURE__*/React.createElement("br", null), "o\xF9 que vous soyez"), /*#__PURE__*/React.createElement("p", {
    className: "pk-hero__lede"
  }, "Acc\xE9dez \xE0 toutes nos formations en illimit\xE9 et acqu\xE9rez la permaculture avec des experts passionn\xE9s."), /*#__PURE__*/React.createElement("div", {
    className: "pk-hero__price"
  }, /*#__PURE__*/React.createElement("strong", null, "89 \u20AC"), " / an \u2014 Acc\xE8s illimit\xE9 ", /*#__PURE__*/React.createElement("span", null, "(2 600 \u20AC de formations incluses)")), /*#__PURE__*/React.createElement(Rating, {
    className: "pk-hero__rating",
    value: 5,
    label: "5/5 \xB7 12 500+ passionn\xE9s nous font confiance \u2014 avis Google"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pk-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "xl",
    onClick: () => onNav("atelier")
  }, "Rejoindre l'Atelier \u2014 89 \u20AC/an"), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "xl",
    onClick: () => onNav("formations")
  }, "Voir les formations")))), /*#__PURE__*/React.createElement("section", {
    className: "pk-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-band__inner"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pk-band__title"
  }, "Acc\xE8s illimit\xE9 \xE0 toutes nos formations"), /*#__PURE__*/React.createElement("ul", {
    className: "pk-band__list"
  }, ["Formations illimitées", "Accès à vie", "Communauté privée", "Nouveautés régulières"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "pk-dot"
  }), t))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav("atelier")
  }, "89 \u20AC/an \u2014 Rejoindre l'Atelier"))), /*#__PURE__*/React.createElement("section", {
    className: "pk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-section__head"
  }, /*#__PURE__*/React.createElement("h2", null, "Nos formations \xE0 l'unit\xE9"), /*#__PURE__*/React.createElement("p", null, "Choisissez une formation pr\xE9cise \u2014 acc\xE8s \xE0 vie, achat unique.")), /*#__PURE__*/React.createElement("div", {
    className: "pk-grid"
  }, formations.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    media: f.img,
    elevated: true,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("formations");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-card__meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, f.videos), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, f.docs)), /*#__PURE__*/React.createElement("h5", {
    className: "pk-card__title"
  }, f.title), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "s"
  }, "D\xE9couvrir"))))), /*#__PURE__*/React.createElement("section", {
    className: "pk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-stats__row"
  }, [["14 ans", "d'expertise"], ["5/5", "avis Google"], ["40+", "formations"], ["+ 12 500", "élèves formés"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    className: "pk-stat",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-stat__n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "pk-stat__l"
  }, l)))), /*#__PURE__*/React.createElement("h3", {
    className: "pk-stats__title"
  }, "Les avantages de nos formations"), /*#__PURE__*/React.createElement("p", {
    className: "pk-stats__sub"
  }, "Que vous soyez d\xE9butant ou jardinier exp\xE9riment\xE9, nos formations s'adaptent \xE0 votre niveau et \xE0 votre emploi du temps."), /*#__PURE__*/React.createElement("div", {
    className: "pk-avantages"
  }, avantages.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.t,
    tone: "white",
    bordered: true
  }, /*#__PURE__*/React.createElement("h5", {
    className: "pk-av__title"
  }, a.t), /*#__PURE__*/React.createElement("ul", {
    className: "pk-av__list"
  }, a.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("span", {
    className: "pk-check"
  }), it)))))))), /*#__PURE__*/React.createElement("section", {
    className: "pk-section pk-section--center"
  }, /*#__PURE__*/React.createElement("h2", null, "Ce qu'en disent nos clients"), /*#__PURE__*/React.createElement("div", {
    className: "pk-testimonials"
  }, [["J'ai participé à la formation « mare naturelle » : un équilibre parfait entre théorie et pratique.", "Agathe B."], ["Excellente formation en verger naturel. Un enseignement clair, vivant et profondément utile.", "Étienne S."], ["Très bonnes formations, clés en main, faciles à mettre en pratique dès le week-end.", "Erika D."]].map(([q, who], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: "band",
    radius: "lg"
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    size: 16
  }), /*#__PURE__*/React.createElement("p", {
    className: "pk-testi__quote"
  }, q), /*#__PURE__*/React.createElement("div", {
    className: "pk-testi__who"
  }, who, " \xB7 avis Google")))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "Lire plus d'avis")), /*#__PURE__*/React.createElement("section", {
    className: "pk-section pk-section--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-section__head pk-section__head--center"
  }, /*#__PURE__*/React.createElement("h2", null, "Questions fr\xE9quentes")), /*#__PURE__*/React.createElement(Accordion, {
    exclusive: true,
    items: faq
  })), /*#__PURE__*/React.createElement("section", {
    className: "pk-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pk-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pk-cta__title"
  }, "Commencez votre aventure en permaculture d\xE8s aujourd'hui"), /*#__PURE__*/React.createElement("p", {
    className: "pk-cta__sub"
  }, "Plus de 12 500 passionn\xE9s ont d\xE9j\xE0 transform\xE9 leur jardin et leur rapport \xE0 la nature. C'est votre tour."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "xl",
    onClick: () => onNav("atelier")
  }, "Rejoindre l'Atelier \u2014 89 \u20AC/an"))));
}
window.PCDHome = PCDHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/permaculture-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/permaculture-website/ds-loader.js
try { (() => {
/* ds-loader.js — resolves the Permaculture Design component namespace.
   Prefers the compiled _ds_bundle.js (available in the Design System tab and
   consuming projects). When that isn't present (e.g. a raw file preview),
   it transpiles the real component sources on the fly so screens still render.
   Requires @babel/standalone to be loaded first. */
(function () {
  var NS = "PermacultureDesignDesignSystem_20f973";
  var FILES = ["../../components/forms/Button.jsx", "../../components/forms/Input.jsx", "../../components/forms/Checkbox.jsx", "../../components/core/Badge.jsx", "../../components/core/Card.jsx", "../../components/core/Rating.jsx", "../../components/feedback/Accordion.jsx", "../../components/feedback/Callout.jsx", "../../components/navigation/Breadcrumb.jsx"];
  window.loadDS = async function () {
    if (window[NS] && window[NS].Button) return window[NS];
    var ns = {};
    for (var i = 0; i < FILES.length; i++) {
      var src = await (await fetch(FILES[i])).text();
      src = src.replace(/^\s*import[^\n]*\n/gm, "");
      var names = (src.match(/export function (\w+)/g) || []).map(function (m) {
        return m.replace("export function ", "");
      });
      src = src.replace(/export function/g, "function");
      var wrapped = src + "\n" + names.map(function (n) {
        return "ns." + n + "=" + n + ";";
      }).join("\n");
      var code = Babel.transform(wrapped, {
        presets: ["react"]
      }).code;
      new Function("React", "ns", code)(window.React, ns);
    }
    window[NS] = ns;
    return ns;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/permaculture-website/ds-loader.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

})();
