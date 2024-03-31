import {
  s as d,
  e as f,
  t as u,
  f as c,
  g as _,
  h as p,
  i,
  j as o,
  k as g,
  l as h,
  m,
  B as l,
} from "./scheduler.023ced08.js";
import { S as y, i as b } from "./index.c7cfddcd.js";
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
      e = new Error().stack;
    e &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[e] = "8574ca78-e36e-4b7c-afa3-31a11ad9f3a7"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-8574ca78-e36e-4b7c-afa3-31a11ad9f3a7"));
  } catch {}
})();
function v(a) {
  let e,
    s = Math.round(a[0].rating) + "",
    n;
  return {
    c() {
      (e = f("span")), (n = u(s)), this.h();
    },
    l(t) {
      e = c(t, "SPAN", { class: !0, title: !0 });
      var r = _(e);
      (n = p(r, s)), r.forEach(i), this.h();
    },
    h() {
      o(
        e,
        "class",
        "glow rounded-full border-2 border-rose-900 bg-rose-800 px-2 py-px text-sm text-white svelte-v4mzms"
      ),
        o(e, "title", "Rating");
    },
    m(t, r) {
      g(t, e, r), h(e, n);
    },
    p(t, [r]) {
      r & 1 && s !== (s = Math.round(t[0].rating) + "") && m(n, s);
    },
    i: l,
    o: l,
    d(t) {
      t && i(e);
    },
  };
}
function x(a, e, s) {
  let { user: n } = e;
  return (
    (a.$$set = (t) => {
      "user" in t && s(0, (n = t.user));
    }),
    [n]
  );
}
class D extends y {
  constructor(e) {
    super(), b(this, e, x, v, d, { user: 0 });
  }
}
export { D as R };
//# sourceMappingURL=Rating.67e07323.js.map
