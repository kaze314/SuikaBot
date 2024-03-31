(function () {
  try {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      u = new Error().stack;
    u &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[u] = "5ea816f8-306e-4a7e-8d51-95c1070a4174"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-5ea816f8-306e-4a7e-8d51-95c1070a4174"));
  } catch {}
})();
const I = -1,
  g = -2,
  w = -3,
  p = -4,
  E = -5,
  h = -6;
function k(a, u) {
  return N(JSON.parse(a), u);
}
function N(a, u) {
  if (typeof a == "number") return o(a, !0);
  if (!Array.isArray(a) || a.length === 0) throw new Error("Invalid input");
  const l = a,
    r = Array(l.length);
  function o(e, b = !1) {
    if (e === I) return;
    if (e === w) return NaN;
    if (e === p) return 1 / 0;
    if (e === E) return -1 / 0;
    if (e === h) return -0;
    if (b) throw new Error("Invalid input");
    if (e in r) return r[e];
    const t = l[e];
    if (!t || typeof t != "object") r[e] = t;
    else if (Array.isArray(t))
      if (typeof t[0] == "string") {
        const c = t[0],
          s = u?.[c];
        if (s) return (r[e] = s(o(t[1])));
        switch (c) {
          case "Date":
            r[e] = new Date(t[1]);
            break;
          case "Set":
            const f = new Set();
            r[e] = f;
            for (let n = 1; n < t.length; n += 1) f.add(o(t[n]));
            break;
          case "Map":
            const i = new Map();
            r[e] = i;
            for (let n = 1; n < t.length; n += 2) i.set(o(t[n]), o(t[n + 1]));
            break;
          case "RegExp":
            r[e] = new RegExp(t[1], t[2]);
            break;
          case "Object":
            r[e] = Object(t[1]);
            break;
          case "BigInt":
            r[e] = BigInt(t[1]);
            break;
          case "null":
            const y = Object.create(null);
            r[e] = y;
            for (let n = 1; n < t.length; n += 2) y[t[n]] = o(t[n + 1]);
            break;
          default:
            throw new Error(`Unknown type ${c}`);
        }
      } else {
        const c = new Array(t.length);
        r[e] = c;
        for (let s = 0; s < t.length; s += 1) {
          const f = t[s];
          f !== g && (c[s] = o(f));
        }
      }
    else {
      const c = {};
      r[e] = c;
      for (const s in t) {
        const f = t[s];
        c[s] = o(f);
      }
    }
    return r[e];
  }
  return o(0);
}
export { g as H, w as N, p as P, I as U, E as a, h as b, k as p, N as u };
//# sourceMappingURL=parse.1d943ae3.js.map
