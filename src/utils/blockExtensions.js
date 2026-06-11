const BLOCKED = /adobe|acrobat|pdf.?tool|dc-view/i;

function shouldRemove(el) {
  if (!el || el.nodeType !== 1) return false;
  if (el.id === "root" || el.tagName === "SCRIPT") return false;

  const id = el.id || "";
  const cls = typeof el.className === "string" ? el.className : "";
  const label = el.getAttribute("aria-label") || "";
  const title = el.getAttribute("title") || "";
  const combined = `${id} ${cls} ${label} ${title}`;

  if (BLOCKED.test(combined)) return true;

  if (el.parentElement === document.body) {
    const style = window.getComputedStyle(el);
    if (style.position === "fixed" || style.position === "sticky") {
      const rect = el.getBoundingClientRect();
      const nearBottom = rect.bottom >= window.innerHeight - 120;
      const nearRight = rect.right >= window.innerWidth - 200;
      if (nearBottom && nearRight && rect.width < 400) return true;
    }
  }

  return false;
}

function removeInjectedWidgets() {
  document.querySelectorAll("body > *").forEach((el) => {
    if (shouldRemove(el)) el.remove();
  });

  document
    .querySelectorAll(
      '[id*="adobe" i], [class*="adobe" i], [id*="acrobat" i], [class*="acrobat" i]'
    )
    .forEach((el) => {
      const root = document.getElementById("root");
      if (root && !root.contains(el)) el.remove();
    });
}

export function blockBrowserExtensionWidgets() {
  removeInjectedWidgets();

  const observer = new MutationObserver(() => {
    removeInjectedWidgets();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: false,
  });

  window.setInterval(removeInjectedWidgets, 1000);
}
