import { d as b, w as f } from "./index.df959635.js";
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
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "d27111b6-cdcb-4877-ae73-8290723109b9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d27111b6-cdcb-4877-ae73-8290723109b9"));
  } catch {}
})();
const _ = "" + new URL("../assets/pops.99533ee6.mp3", import.meta.url).href,
  h = "" + new URL("../assets/rotten_pops.3b3846eb.mp3", import.meta.url).href;
let o = null,
  s = null,
  d = null;
const c = f(!0);
let n = !0;
const m = 2,
  u = f(0),
  I = b(u, (e) => e === m);
localStorage.getItem("audio_enabled") === "false" && (c.set(!1), (n = !1)),
  c.subscribe((e) => {
    (n = e), localStorage.setItem("audio_enabled", e ? "true" : "false");
  }),
  (o = new AudioContext()),
  fetch(_)
    .then((e) => e.arrayBuffer())
    .then((e) => o.decodeAudioData(e))
    .then((e) => {
      (s = e), u.update((t) => t + 1);
    }),
  fetch(h)
    .then((e) => e.arrayBuffer())
    .then((e) => o.decodeAudioData(e))
    .then((e) => {
      (d = e), u.update((t) => t + 1);
    });
const i = [
    [0.009, 0.265],
    [0.275, 0.273],
    [0.567, 0.285],
    [0.859, 0.301],
    [1.173, 0.286],
    [1.479, 0.31],
    [1.796, 0.275],
    [2.088, 0.288],
    [2.387, 0.241],
  ],
  p = [
    [0.01, 0.541],
    [0.599, 0.638],
    [1.332, 0.452],
  ];
function D() {
  if (!n || !d) return;
  const e = o.createBufferSource();
  (e.buffer = d),
    e.connect(o.destination),
    (e.playbackRate.value = Math.random() * 0.2 + 0.9);
  const [t, a] = p[Math.floor(Math.random() * p.length)];
  e.start(0, t, a);
}
function y(e) {
  if (!n || !s) return;
  const t = o.createBufferSource();
  (t.buffer = s), t.connect(o.destination), (t.playbackRate.value = e);
  const [a, l] = i[Math.floor(Math.random() * i.length)];
  t.start(0, a, l);
}
let r = 1;
function M() {
  n &&
    (y(r + Math.random() * 0.1 - 0.05),
    (r += 0.1),
    setTimeout(() => {
      r -= 0.1;
    }, 1e3));
}
export { c as a, I as b, D as c, M as p };
//# sourceMappingURL=sfx.2b6c74c2.js.map
