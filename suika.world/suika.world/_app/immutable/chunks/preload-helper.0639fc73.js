(function () {
  try {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      r = new Error().stack;
    r &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[r] = "93527772-b0ef-4c8d-93ec-13d7e227bb6d"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-93527772-b0ef-4c8d-93ec-13d7e227bb6d"));
  } catch {}
})();
const u = "modulepreload",
  h = function (n, r) {
    return new URL(n, r).href;
  },
  d = {},
  b = function (r, i, c) {
    if (!i || i.length === 0) return r();
    const a = document.getElementsByTagName("link");
    return Promise.all(
      i.map((e) => {
        if (((e = h(e, c)), e in d)) return;
        d[e] = !0;
        const t = e.endsWith(".css"),
          f = t ? '[rel="stylesheet"]' : "";
        if (!!c)
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            if (l.href === e && (!t || l.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${e}"]${f}`)) return;
        const s = document.createElement("link");
        if (
          ((s.rel = t ? "stylesheet" : u),
          t || ((s.as = "script"), (s.crossOrigin = "")),
          (s.href = e),
          document.head.appendChild(s),
          t)
        )
          return new Promise((o, l) => {
            s.addEventListener("load", o),
              s.addEventListener("error", () =>
                l(new Error(`Unable to preload CSS for ${e}`))
              );
          });
      })
    )
      .then(() => r())
      .catch((e) => {
        const t = new Event("vite:preloadError", { cancelable: !0 });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
          throw e;
      });
  };
export { b as _ };
//# sourceMappingURL=preload-helper.0639fc73.js.map
