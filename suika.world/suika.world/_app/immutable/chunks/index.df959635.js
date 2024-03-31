import {
  B as f,
  I as h,
  y as I,
  s as D,
  J as m,
} from "./scheduler.023ced08.js";
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
      (e._sentryDebugIds[n] = "290a94de-3c78-4bcc-a0f0-6ace3adb03d6"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-290a94de-3c78-4bcc-a0f0-6ace3adb03d6"));
  } catch {}
})();
const a = [];
function q(e, n) {
  return { subscribe: x(e, n).subscribe };
}
function x(e, n = f) {
  let r;
  const o = new Set();
  function c(t) {
    if (D(e, t) && ((e = t), r)) {
      const i = !a.length;
      for (const s of o) s[1](), a.push(s, e);
      if (i) {
        for (let s = 0; s < a.length; s += 2) a[s][0](a[s + 1]);
        a.length = 0;
      }
    }
  }
  function d(t) {
    c(t(e));
  }
  function b(t, i = f) {
    const s = [t, i];
    return (
      o.add(s),
      o.size === 1 && (r = n(c, d) || f),
      t(e),
      () => {
        o.delete(s), o.size === 0 && r && (r(), (r = null));
      }
    );
  }
  return { set: c, update: d, subscribe: b };
}
function A(e, n, r) {
  const o = !Array.isArray(e),
    c = o ? [e] : e;
  if (!c.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const d = n.length < 2;
  return q(r, (b, t) => {
    let i = !1;
    const s = [];
    let l = 0,
      y = f;
    const g = () => {
        if (l) return;
        y();
        const u = n(o ? s[0] : s, b, t);
        d ? b(u) : (y = m(u) ? u : f);
      },
      _ = c.map((u, p) =>
        h(
          u,
          (w) => {
            (s[p] = w), (l &= ~(1 << p)), i && g();
          },
          () => {
            l |= 1 << p;
          }
        )
      );
    return (
      (i = !0),
      g(),
      function () {
        I(_), y(), (i = !1);
      }
    );
  });
}
export { A as d, q as r, x as w };
//# sourceMappingURL=index.df959635.js.map
