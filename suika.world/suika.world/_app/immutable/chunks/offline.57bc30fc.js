import { r as d } from "./index.df959635.js";
import "./index.c7cfddcd.js";
(function () {
  try {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      n = new Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "68f3d635-cea2-4d89-aef6-a3b8f78772a5"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-68f3d635-cea2-4d89-aef6-a3b8f78772a5"));
  } catch {}
})();
const o = d(!1, (e) => {
  e(!navigator.onLine),
    window.addEventListener("offline", () => e(!0)),
    window.addEventListener("online", () => e(!1));
});
export { o as i };
//# sourceMappingURL=offline.57bc30fc.js.map
