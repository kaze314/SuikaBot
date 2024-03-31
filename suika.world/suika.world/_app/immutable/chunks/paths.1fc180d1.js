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
      (e._sentryDebugIds[s] = "effe0c5b-3674-4d10-9429-0bdd9722995d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-effe0c5b-3674-4d10-9429-0bdd9722995d"));
  } catch {}
})();
const d = globalThis.__sveltekit_14akef2?.base ?? "",
  n = globalThis.__sveltekit_14akef2?.assets ?? d;
export { n as a, d as b };
//# sourceMappingURL=paths.1fc180d1.js.map
