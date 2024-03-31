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
      (e._sentryDebugIds[t] = "0072cbe8-ae33-4a96-9cdf-d510a48d4861"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0072cbe8-ae33-4a96-9cdf-d510a48d4861"));
  } catch {}
})();
const i = "enc_",
  d = 32;
function p(e) {
  const r = new TextEncoder().encode(e);
  let n;
  return (
    r.length >= d
      ? (n = r.slice(0, d))
      : ((n = new Uint8Array(d)), n.set(r, 0)),
    crypto.subtle.importKey("raw", n, { name: "AES-GCM" }, !1, [
      "encrypt",
      "decrypt",
    ])
  );
}
async function f(e, t) {
  const n = new TextEncoder().encode(e),
    s = await p(t),
    c = crypto.getRandomValues(new Uint8Array(12)),
    a = await crypto.subtle.encrypt({ name: "AES-GCM", iv: c }, s, n),
    o = new Uint8Array(c.length + a.byteLength);
  o.set(c), o.set(new Uint8Array(a), c.length);
  const y = btoa(String.fromCharCode(...o));
  return i + y.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
export { i as P, f as e };
//# sourceMappingURL=encrypt.34d05a14.js.map
