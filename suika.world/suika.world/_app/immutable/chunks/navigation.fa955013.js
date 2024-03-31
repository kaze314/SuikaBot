import { c as o } from "./singletons.5faec7ad.js";
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
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "93014915-e622-4b66-8404-f6d0eab7a7dc"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-93014915-e622-4b66-8404-f6d0eab7a7dc"));
  } catch {}
})();
const a = o("goto"),
  r = o("before_navigate");
export { r as b, a as g };
//# sourceMappingURL=navigation.fa955013.js.map
