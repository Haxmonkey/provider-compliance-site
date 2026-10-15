/* Provider Compliance Bureau — site behavior. Progressive enhancement: every page works without it. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var params = new URLSearchParams(window.location.search);
  // Preview builds set data-preview on <html>; forms then skip the network and show the confirmation page.
  // Editor sign-up and password links from Netlify Identity land on the home page; send them to the editor.
  if (/(invite|recovery|confirmation|email_change)_token=/.test(window.location.hash) && window.location.pathname.indexOf("/admin") !== 0) {
    window.location.replace("/admin/" + window.location.hash);
    return;
  }
  var isPreview = document.documentElement.hasAttribute("data-preview");

  /* ---------- Navigation ---------- */
  var toggle = $(".nav-toggle"), nav = $("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }
  $$(".sub-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
    });
  });
  document.addEventListener("click", function (e) {
    if (window.matchMedia("(max-width: 1180px)").matches) return;
    $$(".sub-toggle[aria-expanded='true']").forEach(function (btn) {
      if (!btn.parentNode.contains(e.target)) btn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    $$(".sub-toggle[aria-expanded='true']").forEach(function (btn) { btn.setAttribute("aria-expanded", "false"); btn.focus(); });
  });

  /* ---------- Phone call-to-action bar ---------- */
  var bar = $("#mobile-cta");
  if (bar) {
    var onScroll = function () {
      var nearEnd = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 420;
      bar.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.8 && !nearEnd);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Form helpers ---------- */
  function fieldOf(el) { return el.closest(".field"); }
  function clearError(el) {
    var f = fieldOf(el); if (!f) return;
    f.classList.remove("has-error");
    var m = f.querySelector(".error-msg"); if (m) m.remove();
    el.removeAttribute("aria-invalid");
  }
  function setError(el, msg) {
    var f = fieldOf(el); if (!f) return;
    clearError(el);
    f.classList.add("has-error");
    el.setAttribute("aria-invalid", "true");
    var m = document.createElement("span");
    m.className = "error-msg"; m.id = (el.id || el.name) + "-error"; m.textContent = msg;
    f.appendChild(m);
    el.setAttribute("aria-describedby", m.id);
  }
  function validate(scope) {
    var errors = [];
    var radiosChecked = {};
    $$("input, select, textarea", scope).forEach(function (el) {
      if (el.type === "hidden" || el.closest(".hp")) return;
      if (el.type === "radio") {
        if (!el.required || radiosChecked[el.name] !== undefined) return;
        var group = $$("input[name='" + el.name + "']", scope);
        var any = group.some(function (r) { return r.checked; });
        radiosChecked[el.name] = any;
        if (!any) { setError(el, "Choose one option."); errors.push(el); } else clearError(el);
        return;
      }
      clearError(el);
      var v = (el.value || "").trim();
      if (el.required && !v) { setError(el, "This field is required."); errors.push(el); return; }
      if (v && el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setError(el, "Enter a valid email address, like name@practice.com."); errors.push(el); return; }
      if (v && el.type === "tel" && v.replace(/\D/g, "").length < 10) { setError(el, "Enter a phone number with area code."); errors.push(el); }
    });
    var group = scope.querySelector("#concerns");
    if (group) {
      var checked = $$("input:checked", group).length;
      var f = fieldOf(group); var old = f.querySelector(".error-msg"); if (old) old.remove();
      f.classList.toggle("has-error", !checked);
      if (!checked) {
        var m = document.createElement("span"); m.className = "error-msg"; m.textContent = "Select at least one concern.";
        f.appendChild(m); errors.push($("input", group));
      }
    }
    return errors;
  }
  function showSummary(form, errors) {
    var box = $(".form-error-summary", form);
    if (!box) return;
    if (!errors.length) { box.hidden = true; return; }
    box.textContent = errors.length === 1 ? "Please correct the highlighted field." : "Please correct the " + errors.length + " highlighted fields.";
    box.hidden = false;
    errors[0].focus();
  }
  function submitForm(form) {
    if (isPreview) { window.location.href = form.getAttribute("action"); return; }
    form.submit();
  }

  /* ---------- Compliance review form ---------- */
  var review = $("#review-form");
  if (review) {
    var steps = $$("fieldset[data-step]", review);
    var progress = $$("[data-progress]", review);
    var go = function (n) {
      steps.forEach(function (s) { s.classList.toggle("step-hidden", s.getAttribute("data-step") !== String(n)); });
      progress.forEach(function (p) { p.classList.toggle("is-active", Number(p.getAttribute("data-progress")) <= n); });
      var top = review.getBoundingClientRect().top + window.scrollY - 100;
      if (window.scrollY > top) window.scrollTo({ top: top, behavior: "smooth" });
      var first = $("fieldset[data-step='" + n + "'] input:not([type=hidden]), fieldset[data-step='" + n + "'] select", review);
      if (first) first.focus({ preventScroll: true });
    };
    var next = $("[data-next]", review), back = $("[data-back]", review);
    if (next) next.addEventListener("click", function () {
      var errs = validate(steps[0]); showSummary(review, errs);
      if (!errs.length) go(2);
    });
    if (back) back.addEventListener("click", function () { $(".form-error-summary", review).hidden = true; go(1); });

    // Prefill from links such as /compliance-review/?concern=audit-readiness or ?type=surgical-practices
    var concern = params.get("concern");
    if (concern) $$("#concerns input", review).forEach(function (c) { if (c.getAttribute("data-key") === concern) c.checked = true; });
    var type = params.get("type");
    if (type) { var opt = $("#org_type option[data-slug='" + type + "']", review); if (opt) opt.selected = true; }
    if (params.get("contact") === "specialist") {
      $("#inquiry_type").value = "Speak with a compliance specialist";
      var h = $("#form-heading"); if (h) h.textContent = "Speak With a Compliance Specialist";
    }

    review.addEventListener("input", function (e) { if (fieldOf(e.target) && fieldOf(e.target).classList.contains("has-error")) clearError(e.target); });
    review.addEventListener("submit", function (e) {
      e.preventDefault();
      var errs = validate(steps[0]);
      if (errs.length) { go(1); showSummary(review, errs); return; }
      errs = validate(steps[1]); showSummary(review, errs);
      if (errs.length) return;
      $("#primary_concerns").value = $$("#concerns input:checked", review).map(function (c) { return c.value; }).join("; ");
      var btn = $("button[type=submit]", review); btn.disabled = true; btn.textContent = "Sending…";
      submitForm(review);
    });
  }

  /* ---------- Checklist form ---------- */
  var cl = $("#checklist-form");
  if (cl) {
    cl.addEventListener("submit", function (e) {
      e.preventDefault();
      var errs = validate(cl); showSummary(cl, errs);
      if (errs.length) return;
      var btn = $("button[type=submit]", cl); btn.disabled = true; btn.textContent = "Sending…";
      submitForm(cl);
    });
  }

  /* ---------- Resources filtering ---------- */
  var grid = $("#article-grid");
  if (grid) {
    var cards = $$(".article-card", grid), chips = $$("#filters .chip"), search = $("#article-search"), empty = $("#no-results");
    var active = "all";
    var apply = function () {
      var q = (search && search.value || "").trim().toLowerCase(), shown = 0;
      cards.forEach(function (c) {
        var ok = (active === "all" || c.getAttribute("data-category") === active) && (!q || c.getAttribute("data-text").indexOf(q) !== -1);
        c.hidden = !ok; if (ok) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    };
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        active = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        apply();
      });
    });
    if (search) search.addEventListener("input", apply);
    var hash = window.location.hash.slice(1);
    if (hash) chips.forEach(function (c) { if (c.getAttribute("data-filter") === hash) c.click(); });
  }
})();
