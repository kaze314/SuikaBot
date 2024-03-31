(function () {
  try {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = "98739881-3edc-478e-b6eb-61cf328e316f"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-98739881-3edc-478e-b6eb-61cf328e316f"));
  } catch {}
})();
class r {
  constructor(e, t) {
    (this.status = e),
      typeof t == "string"
        ? (this.body = { message: t })
        : t
        ? (this.body = t)
        : (this.body = { message: `Error: ${e}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class i {
  constructor(e, t) {
    (this.status = e), (this.location = t);
  }
}
export { r as H, i as R };
//# sourceMappingURL=control.aec33eca.js.map
