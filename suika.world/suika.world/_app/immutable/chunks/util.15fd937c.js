import "./index.c7cfddcd.js";
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
      t = new Error().stack;
    t &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[t] = "f8481fd0-760f-44a0-a496-b3c98fa701a9"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-f8481fd0-760f-44a0-a496-b3c98fa701a9"));
  } catch {}
})();
const s = "346789ABCDEFGHJKLMNPQRTUVWXY",
  _ = 10,
  o = new RegExp(`^[${s}]{${_}}$`),
  r = ["pvp", "pvp-ranked", "co-op"],
  R = 5,
  E = 10,
  a = 60,
  d = 10,
  i = a / E,
  I = 0.5,
  C = 5;
function O(n) {
  if (n === void 0) return;
  if (n.length === 36) return "singleplayer";
  if (n.length !== _ || !o.test(n)) return;
  const t = n.charAt(n.length - 1),
    e = s.indexOf(t);
  return r[e];
}
const u = new Intl.NumberFormat("en-US");
export {
  a as C,
  C as D,
  d as G,
  I as K,
  _ as L,
  E as S,
  R as a,
  i as b,
  O as g,
  u as s,
};
//# sourceMappingURL=util.15fd937c.js.map
