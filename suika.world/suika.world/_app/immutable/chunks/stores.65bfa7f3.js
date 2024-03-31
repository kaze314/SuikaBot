import { s as t } from "./singletons.5faec7ad.js";
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
      s = new Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = "31404cbc-ff9c-4c9c-8d22-f66d1d65a5d9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-31404cbc-ff9c-4c9c-8d22-f66d1d65a5d9"));
  } catch {}
})();
const r = () => {
    const e = t;
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      updated: e.updated,
    };
  },
  c = {
    subscribe(e) {
      return r().page.subscribe(e);
    },
  };
export { c as p };
//# sourceMappingURL=stores.65bfa7f3.js.map
