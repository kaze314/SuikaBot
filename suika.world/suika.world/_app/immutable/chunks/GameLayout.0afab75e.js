var tp = Object.defineProperty;
var gameDataGlobal;
var teting123 = 10;
var ep = (ie, V, mt) =>
  V in ie
    ? tp(ie, V, { enumerable: !0, configurable: !0, writable: !0, value: mt })
    : (ie[V] = mt);
var $t = (ie, V, mt) => (ep(ie, typeof V != "symbol" ? V + "" : V, mt), mt);
import {
  s as Ri,
  e as ct,
  f as dt,
  g as St,
  i as ot,
  j as et,
  k as Zt,
  l as at,
  B as bs,
  a8 as sp,
  c as Pi,
  U as Ts,
  G as Mi,
  H as Jr,
  a as It,
  d as Ct,
  p as Di,
  E as Oo,
  r as Qe,
  u as ip,
  y as rp,
  F as fe,
  D as Bi,
  A as Rt,
  ac as np,
  n as Zr,
  v as Qr,
  w as tn,
  x as en,
} from "./scheduler.023ced08.js";
import {
  S as Li,
  i as Ni,
  t as Tt,
  g as Fo,
  b as Pt,
  e as ko,
  c as Oi,
  a as Fi,
  m as ki,
  d as Ui,
} from "./index.c7cfddcd.js";
import {
  F as Ne,
  j as Uo,
  b as Go,
  d as ap,
  g as sn,
  B as op,
  k as Es,
  l as Ho,
  m as hp,
  a as lp,
  f as up,
  n as rn,
  P as cp,
  o as dp,
} from "./front.38e13373.js";
import { w as ts, d as pp } from "./index.df959635.js";
import { _ as fp } from "./preload-helper.0639fc73.js";
import { r as As, w as mp } from "./rive.810782c4.js";
import { s as gp, S as _p } from "./ScoreBox.f0c90bd2.js";
import {
  s as N,
  A as Et,
  C as Q,
  B as zo,
  a as j,
  S as me,
  M as Qt,
  W as ge,
  T as ws,
  F as C,
  b as O,
  E as Ss,
  D as Wt,
  c as te,
  d as es,
  P as Ut,
  e as ee,
  p as xp,
  f as ht,
  g as se,
  h as Xo,
  j as ft,
  G as Vo,
  k as B,
  R as yp,
  i as vp,
  l as $o,
  m as Wo,
} from "./BoundingBox.de364d8e.js";
import { D as bp, K as Tp, C as Ep } from "./util.15fd937c.js";
import { U as Ap } from "./UserCard.093cd29b.js";
import { p as wp, c as Sp } from "./sfx.2b6c74c2.js";
let jo,
  Yo,
  Is,
  qo,
  Oe,
  nn,
  an,
  Ko,
  on,
  Ip = (async () => {
    (function () {
      try {
        var r =
            typeof window < "u"
              ? window
              : typeof global < "u"
              ? global
              : typeof self < "u"
              ? self
              : {},
          t = new Error().stack;
        t &&
          ((r._sentryDebugIds = r._sentryDebugIds || {}),
          (r._sentryDebugIds[t] = "583edbda-e468-424d-bd2a-1b6f457ab1b6"),
          (r._sentryDebugIdIdentifier =
            "sentry-dbid-583edbda-e468-424d-bd2a-1b6f457ab1b6"));
      } catch {}
    })();
    const ie = {};
    function V(r, t, e = 3) {
      if (ie[t]) return;
      let s = new Error().stack;
      typeof s > "u"
        ? console.warn(
            "PixiJS Deprecation Warning: ",
            `${t}
Deprecated since v${r}`
          )
        : ((s = s
            .split(
              `
`
            )
            .splice(e).join(`
`)),
          console.groupCollapsed
            ? (console.groupCollapsed(
                "%cPixiJS Deprecation Warning: %c%s",
                "color:#614108;background:#fffbe6",
                "font-weight:normal;color:#614108;background:#fffbe6",
                `${t}
Deprecated since v${r}`
              ),
              console.warn(s),
              console.groupEnd())
            : (console.warn(
                "PixiJS Deprecation Warning: ",
                `${t}
Deprecated since v${r}`
              ),
              console.warn(s))),
        (ie[t] = !0);
    }
    function mt(r) {
      if (typeof r != "string")
        throw new TypeError(
          `Path must be a string. Received ${JSON.stringify(r)}`
        );
    }
    function as(r) {
      return r.split("?")[0].split("#")[0];
    }
    function nh(r) {
      return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ah(r, t, e) {
      return r.replace(new RegExp(nh(t), "g"), e);
    }
    function oh(r, t) {
      let e = "",
        s = 0,
        i = -1,
        n = 0,
        a = -1;
      for (let o = 0; o <= r.length; ++o) {
        if (o < r.length) a = r.charCodeAt(o);
        else {
          if (a === 47) break;
          a = 47;
        }
        if (a === 47) {
          if (!(i === o - 1 || n === 1))
            if (i !== o - 1 && n === 2) {
              if (
                e.length < 2 ||
                s !== 2 ||
                e.charCodeAt(e.length - 1) !== 46 ||
                e.charCodeAt(e.length - 2) !== 46
              ) {
                if (e.length > 2) {
                  const h = e.lastIndexOf("/");
                  if (h !== e.length - 1) {
                    h === -1
                      ? ((e = ""), (s = 0))
                      : ((e = e.slice(0, h)),
                        (s = e.length - 1 - e.lastIndexOf("/"))),
                      (i = o),
                      (n = 0);
                    continue;
                  }
                } else if (e.length === 2 || e.length === 1) {
                  (e = ""), (s = 0), (i = o), (n = 0);
                  continue;
                }
              }
              t && (e.length > 0 ? (e += "/..") : (e = ".."), (s = 2));
            } else
              e.length > 0
                ? (e += `/${r.slice(i + 1, o)}`)
                : (e = r.slice(i + 1, o)),
                (s = o - i - 1);
          (i = o), (n = 0);
        } else a === 46 && n !== -1 ? ++n : (n = -1);
      }
      return e;
    }
    const lt = {
      toPosix(r) {
        return ah(r, "\\", "/");
      },
      isUrl(r) {
        return /^https?:/.test(this.toPosix(r));
      },
      isDataUrl(r) {
        return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(
          r
        );
      },
      isBlobUrl(r) {
        return r.startsWith("blob:");
      },
      hasProtocol(r) {
        return /^[^/:]+:/.test(this.toPosix(r));
      },
      getProtocol(r) {
        mt(r), (r = this.toPosix(r));
        const t = /^file:\/\/\//.exec(r);
        if (t) return t[0];
        const e = /^[^/:]+:\/{0,2}/.exec(r);
        return e ? e[0] : "";
      },
      toAbsolute(r, t, e) {
        if ((mt(r), this.isDataUrl(r) || this.isBlobUrl(r))) return r;
        const s = as(this.toPosix(t ?? N.ADAPTER.getBaseUrl())),
          i = as(this.toPosix(e ?? this.rootname(s)));
        return (
          (r = this.toPosix(r)),
          r.startsWith("/")
            ? lt.join(i, r.slice(1))
            : this.isAbsolute(r)
            ? r
            : this.join(s, r)
        );
      },
      normalize(r) {
        if ((mt(r), r.length === 0)) return ".";
        if (this.isDataUrl(r) || this.isBlobUrl(r)) return r;
        r = this.toPosix(r);
        let t = "";
        const e = r.startsWith("/");
        this.hasProtocol(r) &&
          ((t = this.rootname(r)), (r = r.slice(t.length)));
        const s = r.endsWith("/");
        return (
          (r = oh(r, !1)), r.length > 0 && s && (r += "/"), e ? `/${r}` : t + r
        );
      },
      isAbsolute(r) {
        return (
          mt(r),
          (r = this.toPosix(r)),
          this.hasProtocol(r) ? !0 : r.startsWith("/")
        );
      },
      join(...r) {
        if (r.length === 0) return ".";
        let t;
        for (let e = 0; e < r.length; ++e) {
          const s = r[e];
          if ((mt(s), s.length > 0))
            if (t === void 0) t = s;
            else {
              const i = r[e - 1] ?? "";
              this.extname(i) ? (t += `/../${s}`) : (t += `/${s}`);
            }
        }
        return t === void 0 ? "." : this.normalize(t);
      },
      dirname(r) {
        if ((mt(r), r.length === 0)) return ".";
        r = this.toPosix(r);
        let t = r.charCodeAt(0);
        const e = t === 47;
        let s = -1,
          i = !0;
        const n = this.getProtocol(r),
          a = r;
        r = r.slice(n.length);
        for (let o = r.length - 1; o >= 1; --o)
          if (((t = r.charCodeAt(o)), t === 47)) {
            if (!i) {
              s = o;
              break;
            }
          } else i = !1;
        return s === -1
          ? e
            ? "/"
            : this.isUrl(a)
            ? n + r
            : n
          : e && s === 1
          ? "//"
          : n + r.slice(0, s);
      },
      rootname(r) {
        mt(r), (r = this.toPosix(r));
        let t = "";
        if (
          (r.startsWith("/") ? (t = "/") : (t = this.getProtocol(r)),
          this.isUrl(r))
        ) {
          const e = r.indexOf("/", t.length);
          e !== -1 ? (t = r.slice(0, e)) : (t = r),
            t.endsWith("/") || (t += "/");
        }
        return t;
      },
      basename(r, t) {
        mt(r), t && mt(t), (r = as(this.toPosix(r)));
        let e = 0,
          s = -1,
          i = !0,
          n;
        if (t !== void 0 && t.length > 0 && t.length <= r.length) {
          if (t.length === r.length && t === r) return "";
          let a = t.length - 1,
            o = -1;
          for (n = r.length - 1; n >= 0; --n) {
            const h = r.charCodeAt(n);
            if (h === 47) {
              if (!i) {
                e = n + 1;
                break;
              }
            } else
              o === -1 && ((i = !1), (o = n + 1)),
                a >= 0 &&
                  (h === t.charCodeAt(a)
                    ? --a === -1 && (s = n)
                    : ((a = -1), (s = o)));
          }
          return e === s ? (s = o) : s === -1 && (s = r.length), r.slice(e, s);
        }
        for (n = r.length - 1; n >= 0; --n)
          if (r.charCodeAt(n) === 47) {
            if (!i) {
              e = n + 1;
              break;
            }
          } else s === -1 && ((i = !1), (s = n + 1));
        return s === -1 ? "" : r.slice(e, s);
      },
      extname(r) {
        mt(r), (r = as(this.toPosix(r)));
        let t = -1,
          e = 0,
          s = -1,
          i = !0,
          n = 0;
        for (let a = r.length - 1; a >= 0; --a) {
          const o = r.charCodeAt(a);
          if (o === 47) {
            if (!i) {
              e = a + 1;
              break;
            }
            continue;
          }
          s === -1 && ((i = !1), (s = a + 1)),
            o === 46
              ? t === -1
                ? (t = a)
                : n !== 1 && (n = 1)
              : t !== -1 && (n = -1);
        }
        return t === -1 ||
          s === -1 ||
          n === 0 ||
          (n === 1 && t === s - 1 && t === e + 1)
          ? ""
          : r.slice(t, s);
      },
      parse(r) {
        mt(r);
        const t = { root: "", dir: "", base: "", ext: "", name: "" };
        if (r.length === 0) return t;
        r = as(this.toPosix(r));
        let e = r.charCodeAt(0);
        const s = this.isAbsolute(r);
        let i;
        (t.root = this.rootname(r)),
          s || this.hasProtocol(r) ? (i = 1) : (i = 0);
        let n = -1,
          a = 0,
          o = -1,
          h = !0,
          l = r.length - 1,
          u = 0;
        for (; l >= i; --l) {
          if (((e = r.charCodeAt(l)), e === 47)) {
            if (!h) {
              a = l + 1;
              break;
            }
            continue;
          }
          o === -1 && ((h = !1), (o = l + 1)),
            e === 46
              ? n === -1
                ? (n = l)
                : u !== 1 && (u = 1)
              : n !== -1 && (u = -1);
        }
        return (
          n === -1 ||
          o === -1 ||
          u === 0 ||
          (u === 1 && n === o - 1 && n === a + 1)
            ? o !== -1 &&
              (a === 0 && s
                ? (t.base = t.name = r.slice(1, o))
                : (t.base = t.name = r.slice(a, o)))
            : (a === 0 && s
                ? ((t.name = r.slice(1, n)), (t.base = r.slice(1, o)))
                : ((t.name = r.slice(a, n)), (t.base = r.slice(a, o))),
              (t.ext = r.slice(n, o))),
          (t.dir = this.dirname(r)),
          t
        );
      },
      sep: "/",
      delimiter: ":",
    };
    let Vi;
    async function hh() {
      return (
        Vi ??
          (Vi = (async () => {
            var n;
            const r = document.createElement("canvas").getContext("webgl");
            if (!r) return Et.UNPACK;
            const t = await new Promise((a) => {
              const o = document.createElement("video");
              (o.onloadeddata = () => a(o)),
                (o.onerror = () => a(null)),
                (o.autoplay = !1),
                (o.crossOrigin = "anonymous"),
                (o.preload = "auto"),
                (o.src =
                  "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM="),
                o.load();
            });
            if (!t) return Et.UNPACK;
            const e = r.createTexture();
            r.bindTexture(r.TEXTURE_2D, e);
            const s = r.createFramebuffer();
            r.bindFramebuffer(r.FRAMEBUFFER, s),
              r.framebufferTexture2D(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0,
                r.TEXTURE_2D,
                e,
                0
              ),
              r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
              r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE),
              r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t);
            const i = new Uint8Array(4);
            return (
              r.readPixels(0, 0, 1, 1, r.RGBA, r.UNSIGNED_BYTE, i),
              r.deleteFramebuffer(s),
              r.deleteTexture(e),
              (n = r.getExtension("WEBGL_lose_context")) == null ||
                n.loseContext(),
              i[0] <= i[3] ? Et.PMA : Et.UNPACK
            );
          })()),
        Vi
      );
    }
    function lh(r, t = []) {
      return (
        V("7.2.0", "utils.hex2rgb is deprecated, use Color#toRgbArray instead"),
        Q.shared.setValue(r).toRgbArray(t)
      );
    }
    function uh(r) {
      return (
        V("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"),
        Q.shared.setValue(r).toHex()
      );
    }
    function ch(r) {
      return (
        V("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"),
        Q.shared.setValue(r).toNumber()
      );
    }
    function dh(r, t = null) {
      const e = r * 6;
      if (((t = t || new Uint16Array(e)), t.length !== e))
        throw new Error(
          `Out buffer length is incorrect, got ${t.length} and expected ${e}`
        );
      for (let s = 0, i = 0; s < e; s += 6, i += 4)
        (t[s + 0] = i + 0),
          (t[s + 1] = i + 1),
          (t[s + 2] = i + 2),
          (t[s + 3] = i + 0),
          (t[s + 4] = i + 2),
          (t[s + 5] = i + 3);
      return t;
    }
    function mn(r) {
      if (r.BYTES_PER_ELEMENT === 4)
        return r instanceof Float32Array
          ? "Float32Array"
          : r instanceof Uint32Array
          ? "Uint32Array"
          : "Int32Array";
      if (r.BYTES_PER_ELEMENT === 2) {
        if (r instanceof Uint16Array) return "Uint16Array";
      } else if (r.BYTES_PER_ELEMENT === 1 && r instanceof Uint8Array)
        return "Uint8Array";
      return null;
    }
    function Bs(r) {
      return (
        (r += r === 0 ? 1 : 0),
        --r,
        (r |= r >>> 1),
        (r |= r >>> 2),
        (r |= r >>> 4),
        (r |= r >>> 8),
        (r |= r >>> 16),
        r + 1
      );
    }
    function gn(r) {
      return !(r & (r - 1)) && !!r;
    }
    function _n(r) {
      let t = (r > 65535 ? 1 : 0) << 4;
      r >>>= t;
      let e = (r > 255 ? 1 : 0) << 3;
      return (
        (r >>>= e),
        (t |= e),
        (e = (r > 15 ? 1 : 0) << 2),
        (r >>>= e),
        (t |= e),
        (e = (r > 3 ? 1 : 0) << 1),
        (r >>>= e),
        (t |= e),
        t | (r >> 1)
      );
    }
    function Fe(r, t, e) {
      const s = r.length;
      let i;
      if (t >= s || e === 0) return;
      e = t + e > s ? s - t : e;
      const n = s - e;
      for (i = t; i < n; ++i) r[i] = r[i + e];
      r.length = n;
    }
    function re(r) {
      return r === 0 ? 0 : r < 0 ? -1 : 1;
    }
    let ph = 0;
    function _e() {
      return ++ph;
    }
    const xn = {},
      Ht = Object.create(null),
      ne = Object.create(null);
    class fh {
      constructor(t, e, s) {
        (this._canvas = N.ADAPTER.createCanvas()),
          (this._context = this._canvas.getContext("2d")),
          (this.resolution = s || N.RESOLUTION),
          this.resize(t, e);
      }
      clear() {
        this._checkDestroyed(),
          this._context.setTransform(1, 0, 0, 1, 0, 0),
          this._context.clearRect(
            0,
            0,
            this._canvas.width,
            this._canvas.height
          );
      }
      resize(t, e) {
        this._checkDestroyed(),
          (this._canvas.width = Math.round(t * this.resolution)),
          (this._canvas.height = Math.round(e * this.resolution));
      }
      destroy() {
        (this._context = null), (this._canvas = null);
      }
      get width() {
        return this._checkDestroyed(), this._canvas.width;
      }
      set width(t) {
        this._checkDestroyed(), (this._canvas.width = Math.round(t));
      }
      get height() {
        return this._checkDestroyed(), this._canvas.height;
      }
      set height(t) {
        this._checkDestroyed(), (this._canvas.height = Math.round(t));
      }
      get canvas() {
        return this._checkDestroyed(), this._canvas;
      }
      get context() {
        return this._checkDestroyed(), this._context;
      }
      _checkDestroyed() {
        if (this._canvas === null)
          throw new TypeError(
            "The CanvasRenderTarget has already been destroyed"
          );
      }
    }
    function yn(r, t, e) {
      for (let s = 0, i = 4 * e * t; s < t; ++s, i += 4)
        if (r[i + 3] !== 0) return !1;
      return !0;
    }
    function vn(r, t, e, s, i) {
      const n = 4 * t;
      for (let a = s, o = s * n + 4 * e; a <= i; ++a, o += n)
        if (r[o + 3] !== 0) return !1;
      return !0;
    }
    function mh(r) {
      const { width: t, height: e } = r,
        s = r.getContext("2d", { willReadFrequently: !0 });
      if (s === null) throw new TypeError("Failed to get canvas 2D context");
      const i = s.getImageData(0, 0, t, e).data;
      let n = 0,
        a = 0,
        o = t - 1,
        h = e - 1;
      for (; a < e && yn(i, t, a); ) ++a;
      if (a === e) return zo.EMPTY;
      for (; yn(i, t, h); ) --h;
      for (; vn(i, t, n, a, h); ) ++n;
      for (; vn(i, t, o, a, h); ) --o;
      return ++o, ++h, new zo(n, a, o, h);
    }
    function gh(r) {
      const t = mh(r),
        { width: e, height: s } = t;
      let i = null;
      if (!t.isEmpty()) {
        const n = r.getContext("2d");
        if (n === null) throw new TypeError("Failed to get canvas 2D context");
        i = n.getImageData(t.left, t.top, e, s);
      }
      return { width: e, height: s, data: i };
    }
    function _h(r, t = globalThis.location) {
      if (r.startsWith("data:")) return "";
      t = t || globalThis.location;
      const e = new URL(r, document.baseURI);
      return e.hostname !== t.hostname ||
        e.port !== t.port ||
        e.protocol !== t.protocol
        ? "anonymous"
        : "";
    }
    function Yt(r, t = 1) {
      var s;
      const e = (s = N.RETINA_PREFIX) == null ? void 0 : s.exec(r);
      return e ? parseFloat(e[1]) : t;
    }
    (Oe = function (r, [t, e]) {
      return r < t ? t : r > e ? e : r;
    }),
      (on = ts(!1)),
      fp(
        () =>
          import("./rapier.5ac5f184.js").then(async (r) => (await r.__tla, r)),
        [],
        import.meta.url
      ).then((r) => {
        (Is = r), on.set(!0);
      });
    let Ls, Ns, $i;
    (Ls = ts(!1)),
      (Ns = ts(!1)),
      (qo = pp([Ls, Ns], (r) => r.every((t) => t))),
      ($i = new Map()),
      (Ko = async function (r) {
        if (!r) {
          Ns.set(!0), Ls.set(!0);
          return;
        }
        As.RuntimeLoader.setWasmUrl(mp),
          As.RuntimeLoader.getInstance(() => {
            Ls.set(!0);
          }),
          typeof r == "string" && (r = [r]),
          await Promise.all(
            r.map(async (t) => {
              const e = await (await fetch(t)).arrayBuffer();
              $i.set(t, e);
            })
          ),
          Ns.set(!0);
      }),
      (an =
        "" +
        new URL("../assets/garbage_meter.c1aae4ab.riv", import.meta.url).href);
    function xh(r) {
      let t, e;
      return {
        c() {
          (t = ct("div")), (e = ct("canvas")), this.h();
        },
        l(s) {
          t = dt(s, "DIV", { class: !0 });
          var i = St(t);
          (e = dt(i, "CANVAS", { width: !0, height: !0, class: !0 })),
            St(e).forEach(ot),
            i.forEach(ot),
            this.h();
        },
        h() {
          et(e, "width", 600),
            et(e, "height", 200),
            et(e, "class", "w-full"),
            et(t, "class", "my-[-5%] w-full");
        },
        m(s, i) {
          Zt(s, t, i), at(t, e), r[9](e);
        },
        p: bs,
        i: bs,
        o: bs,
        d(s) {
          s && ot(t), r[9](null);
        },
      };
    }
    function yh(r, t, e) {
      let s,
        i,
        n,
        { dead: a = !1 } = t;
      const o = sp("time_until_garbage");
      Pi(r, o, (x) => e(7, (i = x)));
      let { value: h } = t;
      function l(x) {
        if (x !== 0)
          for (let A = Ne.Watermelon; A > Ne.Cherry; A--) {
            const w = Math.pow(2, A);
            if (x > w) {
              const b = Math.pow(2, A + 1);
              return { current: A, progress: ((x - w) / (b - w)) * 100 };
            }
          }
      }
      const u = ts(void 0);
      Pi(r, u, (x) => e(6, (s = x)));
      let c = null,
        d,
        p = !1;
      function f(x) {
        p ||
          (c &&
            ((c.timer.value = x),
            x === 0 &&
              ((p = !0),
              (d = setTimeout(() => {
                (p = !1), m(s), f(i);
              }, 1e3)))));
      }
      Ts(() => {
        clearTimeout(d);
      });
      function m(x) {
        p ||
          (c &&
            ((c.isShown.value = !!x),
            x &&
              ((c.currentFruit.value = x.current),
              c.progressChangeTrigger.fire())));
      }
      function g(x) {
        p || (c && (c.progress.value = Oe(x, [0, 1])));
      }
      const _ = gp((s == null ? void 0 : s.progress) ?? 0.5);
      Pi(r, _, (x) => e(8, (n = x))),
        Mi(() => {
          const x = new As.Rive({
            buffer: $i.get(an),
            canvas: v,
            autoplay: !0,
            stateMachines: "State Machine 1",
            layout: new As.Layout({ fit: As.Fit.Contain }),
            onLoad: () => {
              c = {};
              const A = x.stateMachineInputs("State Machine 1");
              for (const w of A) c[w.name] = w;
              f(i), m(s);
            },
          });
          return () => x.cleanup();
        });
      let v;
      function y(x) {
        Jr[x ? "unshift" : "push"](() => {
          (v = x), e(0, v);
        });
      }
      return (
        (r.$$set = (x) => {
          "dead" in x && e(4, (a = x.dead)),
            "value" in x && e(5, (h = x.value));
        }),
        (r.$$.update = () => {
          r.$$.dirty & 48 && u.set(a ? void 0 : l(h)),
            r.$$.dirty & 128 && f(i),
            r.$$.dirty & 64 && m(s),
            r.$$.dirty & 64 && _.set((s == null ? void 0 : s.progress) ?? 0.5),
            r.$$.dirty & 256 && g(n);
        }),
        [v, o, u, _, a, h, s, i, n, y]
      );
    }
    class vh extends Li {
      constructor(t) {
        super(), Ni(this, t, yh, xh, Ri, { dead: 4, value: 5 });
      }
    }
    var M = ((r) => (
      (r.Renderer = "renderer"),
      (r.Application = "application"),
      (r.RendererSystem = "renderer-webgl-system"),
      (r.RendererPlugin = "renderer-webgl-plugin"),
      (r.CanvasRendererSystem = "renderer-canvas-system"),
      (r.CanvasRendererPlugin = "renderer-canvas-plugin"),
      (r.Asset = "asset"),
      (r.LoadParser = "load-parser"),
      (r.ResolveParser = "resolve-parser"),
      (r.CacheParser = "cache-parser"),
      (r.DetectionParser = "detection-parser"),
      r
    ))(M || {});
    const Wi = (r) => {
        if (typeof r == "function" || (typeof r == "object" && r.extension)) {
          if (!r.extension)
            throw new Error("Extension class must have an extension object");
          r = {
            ...(typeof r.extension != "object"
              ? { type: r.extension }
              : r.extension),
            ref: r,
          };
        }
        if (typeof r == "object") r = { ...r };
        else throw new Error("Invalid extension type");
        return typeof r.type == "string" && (r.type = [r.type]), r;
      },
      bn = (r, t) => Wi(r).priority ?? t,
      k = {
        _addHandlers: {},
        _removeHandlers: {},
        _queue: {},
        remove(...r) {
          return (
            r.map(Wi).forEach((t) => {
              t.type.forEach((e) => {
                var s, i;
                return (i = (s = this._removeHandlers)[e]) == null
                  ? void 0
                  : i.call(s, t);
              });
            }),
            this
          );
        },
        add(...r) {
          return (
            r.map(Wi).forEach((t) => {
              t.type.forEach((e) => {
                const s = this._addHandlers,
                  i = this._queue;
                s[e] ? s[e](t) : ((i[e] = i[e] || []), i[e].push(t));
              });
            }),
            this
          );
        },
        handle(r, t, e) {
          const s = this._addHandlers,
            i = this._removeHandlers;
          if (s[r] || i[r])
            throw new Error(`Extension type ${r} already has a handler`);
          (s[r] = t), (i[r] = e);
          const n = this._queue;
          return n[r] && (n[r].forEach((a) => t(a)), delete n[r]), this;
        },
        handleByMap(r, t) {
          return this.handle(
            r,
            (e) => {
              t[e.name] = e.ref;
            },
            (e) => {
              delete t[e.name];
            }
          );
        },
        handleByList(r, t, e = -1) {
          return this.handle(
            r,
            (s) => {
              t.includes(s.ref) ||
                (t.push(s.ref), t.sort((i, n) => bn(n, e) - bn(i, e)));
            },
            (s) => {
              const i = t.indexOf(s.ref);
              i !== -1 && t.splice(i, 1);
            }
          );
        },
      };
    class ji {
      constructor(t) {
        typeof t == "number"
          ? (this.rawBinaryData = new ArrayBuffer(t))
          : t instanceof Uint8Array
          ? (this.rawBinaryData = t.buffer)
          : (this.rawBinaryData = t),
          (this.uint32View = new Uint32Array(this.rawBinaryData)),
          (this.float32View = new Float32Array(this.rawBinaryData));
      }
      get int8View() {
        return (
          this._int8View ||
            (this._int8View = new Int8Array(this.rawBinaryData)),
          this._int8View
        );
      }
      get uint8View() {
        return (
          this._uint8View ||
            (this._uint8View = new Uint8Array(this.rawBinaryData)),
          this._uint8View
        );
      }
      get int16View() {
        return (
          this._int16View ||
            (this._int16View = new Int16Array(this.rawBinaryData)),
          this._int16View
        );
      }
      get uint16View() {
        return (
          this._uint16View ||
            (this._uint16View = new Uint16Array(this.rawBinaryData)),
          this._uint16View
        );
      }
      get int32View() {
        return (
          this._int32View ||
            (this._int32View = new Int32Array(this.rawBinaryData)),
          this._int32View
        );
      }
      view(t) {
        return this[`${t}View`];
      }
      destroy() {
        (this.rawBinaryData = null),
          (this._int8View = null),
          (this._uint8View = null),
          (this._int16View = null),
          (this._uint16View = null),
          (this._int32View = null),
          (this.uint32View = null),
          (this.float32View = null);
      }
      static sizeOf(t) {
        switch (t) {
          case "int8":
          case "uint8":
            return 1;
          case "int16":
          case "uint16":
            return 2;
          case "int32":
          case "uint32":
          case "float32":
            return 4;
          default:
            throw new Error(`${t} isn't a valid view type`);
        }
      }
    }
    const bh = [
      "precision mediump float;",
      "void main(void){",
      "float test = 0.1;",
      "%forloop%",
      "gl_FragColor = vec4(0.0);",
      "}",
    ].join(`
`);
    function Th(r) {
      let t = "";
      for (let e = 0; e < r; ++e)
        e > 0 &&
          (t += `
else `),
          e < r - 1 && (t += `if(test == ${e}.0){}`);
      return t;
    }
    function Eh(r, t) {
      if (r === 0)
        throw new Error(
          "Invalid value of `0` passed to `checkMaxIfStatementsInShader`"
        );
      const e = t.createShader(t.FRAGMENT_SHADER);
      for (;;) {
        const s = bh.replace(/%forloop%/gi, Th(r));
        if (
          (t.shaderSource(e, s),
          t.compileShader(e),
          !t.getShaderParameter(e, t.COMPILE_STATUS))
        )
          r = (r / 2) | 0;
        else break;
      }
      return r;
    }
    const Yi = 0,
      qi = 1,
      Ki = 2,
      Ji = 3,
      Zi = 4,
      Qi = 5;
    class Mt {
      constructor() {
        (this.data = 0),
          (this.blendMode = j.NORMAL),
          (this.polygonOffset = 0),
          (this.blend = !0),
          (this.depthMask = !0);
      }
      get blend() {
        return !!(this.data & (1 << Yi));
      }
      set blend(t) {
        !!(this.data & (1 << Yi)) !== t && (this.data ^= 1 << Yi);
      }
      get offsets() {
        return !!(this.data & (1 << qi));
      }
      set offsets(t) {
        !!(this.data & (1 << qi)) !== t && (this.data ^= 1 << qi);
      }
      get culling() {
        return !!(this.data & (1 << Ki));
      }
      set culling(t) {
        !!(this.data & (1 << Ki)) !== t && (this.data ^= 1 << Ki);
      }
      get depthTest() {
        return !!(this.data & (1 << Ji));
      }
      set depthTest(t) {
        !!(this.data & (1 << Ji)) !== t && (this.data ^= 1 << Ji);
      }
      get depthMask() {
        return !!(this.data & (1 << Qi));
      }
      set depthMask(t) {
        !!(this.data & (1 << Qi)) !== t && (this.data ^= 1 << Qi);
      }
      get clockwiseFrontFace() {
        return !!(this.data & (1 << Zi));
      }
      set clockwiseFrontFace(t) {
        !!(this.data & (1 << Zi)) !== t && (this.data ^= 1 << Zi);
      }
      get blendMode() {
        return this._blendMode;
      }
      set blendMode(t) {
        (this.blend = t !== j.NONE), (this._blendMode = t);
      }
      get polygonOffset() {
        return this._polygonOffset;
      }
      set polygonOffset(t) {
        (this.offsets = !!t), (this._polygonOffset = t);
      }
      static for2d() {
        const t = new Mt();
        return (t.depthTest = !1), (t.blend = !0), t;
      }
    }
    Mt.prototype.toString = function () {
      return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
    };
    const tr = [];
    function Tn(r, t) {
      if (!r) return null;
      let e = "";
      if (typeof r == "string") {
        const s = /\.(\w{3,4})(?:$|\?|#)/i.exec(r);
        s && (e = s[1].toLowerCase());
      }
      for (let s = tr.length - 1; s >= 0; --s) {
        const i = tr[s];
        if (i.test && i.test(r, e)) return new i(r, t);
      }
      throw new Error("Unrecognized source type to auto-detect Resource");
    }
    class Dt {
      constructor(t) {
        (this.items = []), (this._name = t), (this._aliasCount = 0);
      }
      emit(t, e, s, i, n, a, o, h) {
        if (arguments.length > 8) throw new Error("max arguments reached");
        const { name: l, items: u } = this;
        this._aliasCount++;
        for (let c = 0, d = u.length; c < d; c++)
          u[c][l](t, e, s, i, n, a, o, h);
        return u === this.items && this._aliasCount--, this;
      }
      ensureNonAliasedItems() {
        this._aliasCount > 0 &&
          this.items.length > 1 &&
          ((this._aliasCount = 0), (this.items = this.items.slice(0)));
      }
      add(t) {
        return (
          t[this._name] &&
            (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)),
          this
        );
      }
      remove(t) {
        const e = this.items.indexOf(t);
        return (
          e !== -1 && (this.ensureNonAliasedItems(), this.items.splice(e, 1)),
          this
        );
      }
      contains(t) {
        return this.items.includes(t);
      }
      removeAll() {
        return this.ensureNonAliasedItems(), (this.items.length = 0), this;
      }
      destroy() {
        this.removeAll(), (this.items = null), (this._name = null);
      }
      get empty() {
        return this.items.length === 0;
      }
      get name() {
        return this._name;
      }
    }
    Object.defineProperties(Dt.prototype, {
      dispatch: { value: Dt.prototype.emit },
      run: { value: Dt.prototype.emit },
    });
    class os {
      constructor(t = 0, e = 0) {
        (this._width = t),
          (this._height = e),
          (this.destroyed = !1),
          (this.internal = !1),
          (this.onResize = new Dt("setRealSize")),
          (this.onUpdate = new Dt("update")),
          (this.onError = new Dt("onError"));
      }
      bind(t) {
        this.onResize.add(t),
          this.onUpdate.add(t),
          this.onError.add(t),
          (this._width || this._height) &&
            this.onResize.emit(this._width, this._height);
      }
      unbind(t) {
        this.onResize.remove(t),
          this.onUpdate.remove(t),
          this.onError.remove(t);
      }
      resize(t, e) {
        (t !== this._width || e !== this._height) &&
          ((this._width = t), (this._height = e), this.onResize.emit(t, e));
      }
      get valid() {
        return !!this._width && !!this._height;
      }
      update() {
        this.destroyed || this.onUpdate.emit();
      }
      load() {
        return Promise.resolve(this);
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      style(t, e, s) {
        return !1;
      }
      dispose() {}
      destroy() {
        this.destroyed ||
          ((this.destroyed = !0),
          this.dispose(),
          this.onError.removeAll(),
          (this.onError = null),
          this.onResize.removeAll(),
          (this.onResize = null),
          this.onUpdate.removeAll(),
          (this.onUpdate = null));
      }
      static test(t, e) {
        return !1;
      }
    }
    class Os extends os {
      constructor(t, e) {
        const { width: s, height: i } = e || {};
        if (!s || !i) throw new Error("BufferResource width or height invalid");
        super(s, i),
          (this.data = t),
          (this.unpackAlignment = e.unpackAlignment ?? 4);
      }
      upload(t, e, s) {
        const i = t.gl;
        i.pixelStorei(i.UNPACK_ALIGNMENT, this.unpackAlignment),
          i.pixelStorei(
            i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            e.alphaMode === Et.UNPACK
          );
        const n = e.realWidth,
          a = e.realHeight;
        return (
          s.width === n && s.height === a
            ? i.texSubImage2D(
                e.target,
                0,
                0,
                0,
                n,
                a,
                e.format,
                s.type,
                this.data
              )
            : ((s.width = n),
              (s.height = a),
              i.texImage2D(
                e.target,
                0,
                s.internalFormat,
                n,
                a,
                0,
                e.format,
                s.type,
                this.data
              )),
          !0
        );
      }
      dispose() {
        this.data = null;
      }
      static test(t) {
        return (
          t === null ||
          t instanceof Int8Array ||
          t instanceof Uint8Array ||
          t instanceof Uint8ClampedArray ||
          t instanceof Int16Array ||
          t instanceof Uint16Array ||
          t instanceof Int32Array ||
          t instanceof Uint32Array ||
          t instanceof Float32Array
        );
      }
    }
    const Ah = { scaleMode: me.NEAREST, alphaMode: Et.NPM },
      er = class ss extends Ss {
        constructor(t = null, e = null) {
          super(), (e = Object.assign({}, ss.defaultOptions, e));
          const {
            alphaMode: s,
            mipmap: i,
            anisotropicLevel: n,
            scaleMode: a,
            width: o,
            height: h,
            wrapMode: l,
            format: u,
            type: c,
            target: d,
            resolution: p,
            resourceOptions: f,
          } = e;
          t && !(t instanceof os) && ((t = Tn(t, f)), (t.internal = !0)),
            (this.resolution = p || N.RESOLUTION),
            (this.width =
              Math.round((o || 0) * this.resolution) / this.resolution),
            (this.height =
              Math.round((h || 0) * this.resolution) / this.resolution),
            (this._mipmap = i),
            (this.anisotropicLevel = n),
            (this._wrapMode = l),
            (this._scaleMode = a),
            (this.format = u),
            (this.type = c),
            (this.target = d),
            (this.alphaMode = s),
            (this.uid = _e()),
            (this.touched = 0),
            (this.isPowerOfTwo = !1),
            this._refreshPOT(),
            (this._glTextures = {}),
            (this.dirtyId = 0),
            (this.dirtyStyleId = 0),
            (this.cacheId = null),
            (this.valid = o > 0 && h > 0),
            (this.textureCacheIds = []),
            (this.destroyed = !1),
            (this.resource = null),
            (this._batchEnabled = 0),
            (this._batchLocation = 0),
            (this.parentTextureArray = null),
            this.setResource(t);
        }
        get realWidth() {
          return Math.round(this.width * this.resolution);
        }
        get realHeight() {
          return Math.round(this.height * this.resolution);
        }
        get mipmap() {
          return this._mipmap;
        }
        set mipmap(t) {
          this._mipmap !== t && ((this._mipmap = t), this.dirtyStyleId++);
        }
        get scaleMode() {
          return this._scaleMode;
        }
        set scaleMode(t) {
          this._scaleMode !== t && ((this._scaleMode = t), this.dirtyStyleId++);
        }
        get wrapMode() {
          return this._wrapMode;
        }
        set wrapMode(t) {
          this._wrapMode !== t && ((this._wrapMode = t), this.dirtyStyleId++);
        }
        setStyle(t, e) {
          let s;
          return (
            t !== void 0 &&
              t !== this.scaleMode &&
              ((this.scaleMode = t), (s = !0)),
            e !== void 0 && e !== this.mipmap && ((this.mipmap = e), (s = !0)),
            s && this.dirtyStyleId++,
            this
          );
        }
        setSize(t, e, s) {
          return (s = s || this.resolution), this.setRealSize(t * s, e * s, s);
        }
        setRealSize(t, e, s) {
          return (
            (this.resolution = s || this.resolution),
            (this.width = Math.round(t) / this.resolution),
            (this.height = Math.round(e) / this.resolution),
            this._refreshPOT(),
            this.update(),
            this
          );
        }
        _refreshPOT() {
          this.isPowerOfTwo = gn(this.realWidth) && gn(this.realHeight);
        }
        setResolution(t) {
          const e = this.resolution;
          return e === t
            ? this
            : ((this.resolution = t),
              this.valid &&
                ((this.width = Math.round(this.width * e) / t),
                (this.height = Math.round(this.height * e) / t),
                this.emit("update", this)),
              this._refreshPOT(),
              this);
        }
        setResource(t) {
          if (this.resource === t) return this;
          if (this.resource) throw new Error("Resource can be set only once");
          return t.bind(this), (this.resource = t), this;
        }
        update() {
          this.valid
            ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this))
            : this.width > 0 &&
              this.height > 0 &&
              ((this.valid = !0),
              this.emit("loaded", this),
              this.emit("update", this));
        }
        onError(t) {
          this.emit("error", this, t);
        }
        destroy() {
          this.resource &&
            (this.resource.unbind(this),
            this.resource.internal && this.resource.destroy(),
            (this.resource = null)),
            this.cacheId &&
              (delete ne[this.cacheId],
              delete Ht[this.cacheId],
              (this.cacheId = null)),
            (this.valid = !1),
            this.dispose(),
            ss.removeFromCache(this),
            (this.textureCacheIds = null),
            (this.destroyed = !0),
            this.emit("destroyed", this),
            this.removeAllListeners();
        }
        dispose() {
          this.emit("dispose", this);
        }
        castToBaseTexture() {
          return this;
        }
        static from(t, e, s = N.STRICT_TEXTURE_CACHE) {
          const i = typeof t == "string";
          let n = null;
          if (i) n = t;
          else {
            if (!t._pixiId) {
              const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
              t._pixiId = `${o}_${_e()}`;
            }
            n = t._pixiId;
          }
          let a = ne[n];
          if (i && s && !a)
            throw new Error(
              `The cacheId "${n}" does not exist in BaseTextureCache.`
            );
          return (
            a || ((a = new ss(t, e)), (a.cacheId = n), ss.addToCache(a, n)), a
          );
        }
        static fromBuffer(t, e, s, i) {
          t = t || new Float32Array(e * s * 4);
          const n = new Os(t, {
            width: e,
            height: s,
            ...(i == null ? void 0 : i.resourceOptions),
          });
          let a, o;
          return (
            t instanceof Float32Array
              ? ((a = C.RGBA), (o = O.FLOAT))
              : t instanceof Int32Array
              ? ((a = C.RGBA_INTEGER), (o = O.INT))
              : t instanceof Uint32Array
              ? ((a = C.RGBA_INTEGER), (o = O.UNSIGNED_INT))
              : t instanceof Int16Array
              ? ((a = C.RGBA_INTEGER), (o = O.SHORT))
              : t instanceof Uint16Array
              ? ((a = C.RGBA_INTEGER), (o = O.UNSIGNED_SHORT))
              : t instanceof Int8Array
              ? ((a = C.RGBA), (o = O.BYTE))
              : ((a = C.RGBA), (o = O.UNSIGNED_BYTE)),
            (n.internal = !0),
            new ss(n, Object.assign({}, Ah, { type: o, format: a }, i))
          );
        }
        static addToCache(t, e) {
          e &&
            (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
            ne[e] &&
              ne[e] !== t &&
              console.warn(
                `BaseTexture added to the cache with an id [${e}] that already had an entry`
              ),
            (ne[e] = t));
        }
        static removeFromCache(t) {
          if (typeof t == "string") {
            const e = ne[t];
            if (e) {
              const s = e.textureCacheIds.indexOf(t);
              return s > -1 && e.textureCacheIds.splice(s, 1), delete ne[t], e;
            }
          } else if (t != null && t.textureCacheIds) {
            for (let e = 0; e < t.textureCacheIds.length; ++e)
              delete ne[t.textureCacheIds[e]];
            return (t.textureCacheIds.length = 0), t;
          }
          return null;
        }
      };
    (er.defaultOptions = {
      mipmap: Qt.POW2,
      anisotropicLevel: 0,
      scaleMode: me.LINEAR,
      wrapMode: ge.CLAMP,
      alphaMode: Et.UNPACK,
      target: ws.TEXTURE_2D,
      format: C.RGBA,
      type: O.UNSIGNED_BYTE,
    }),
      (er._globalBatch = 0);
    let $ = er,
      sr = class {
        constructor() {
          (this.texArray = null),
            (this.blend = 0),
            (this.type = Wt.TRIANGLES),
            (this.start = 0),
            (this.size = 0),
            (this.data = null);
        }
      },
      wh = 0;
    class st {
      constructor(t, e = !0, s = !1) {
        (this.data = t || new Float32Array(1)),
          (this._glBuffers = {}),
          (this._updateID = 0),
          (this.index = s),
          (this.static = e),
          (this.id = wh++),
          (this.disposeRunner = new Dt("disposeBuffer"));
      }
      update(t) {
        t instanceof Array && (t = new Float32Array(t)),
          (this.data = t || this.data),
          this._updateID++;
      }
      dispose() {
        this.disposeRunner.emit(this, !1);
      }
      destroy() {
        this.dispose(), (this.data = null);
      }
      set index(t) {
        this.type = t ? te.ELEMENT_ARRAY_BUFFER : te.ARRAY_BUFFER;
      }
      get index() {
        return this.type === te.ELEMENT_ARRAY_BUFFER;
      }
      static from(t) {
        return t instanceof Array && (t = new Float32Array(t)), new st(t);
      }
    }
    class Fs {
      constructor(t, e = 0, s = !1, i = O.FLOAT, n, a, o, h = 1) {
        (this.buffer = t),
          (this.size = e),
          (this.normalized = s),
          (this.type = i),
          (this.stride = n),
          (this.start = a),
          (this.instance = o),
          (this.divisor = h);
      }
      destroy() {
        this.buffer = null;
      }
      static from(t, e, s, i, n) {
        return new Fs(t, e, s, i, n);
      }
    }
    const Sh = { Float32Array, Uint32Array, Int32Array, Uint8Array };
    function Ih(r, t) {
      let e = 0,
        s = 0;
      const i = {};
      for (let h = 0; h < r.length; h++) (s += t[h]), (e += r[h].length);
      const n = new ArrayBuffer(e * 4);
      let a = null,
        o = 0;
      for (let h = 0; h < r.length; h++) {
        const l = t[h],
          u = r[h],
          c = mn(u);
        i[c] || (i[c] = new Sh[c](n)), (a = i[c]);
        for (let d = 0; d < u.length; d++) {
          const p = ((d / l) | 0) * s + o,
            f = d % l;
          a[p + f] = u[d];
        }
        o += l;
      }
      return new Float32Array(n);
    }
    const En = { 5126: 4, 5123: 2, 5121: 1 };
    let Ch = 0;
    const Rh = {
      Float32Array,
      Uint32Array,
      Int32Array,
      Uint8Array,
      Uint16Array,
    };
    class qt {
      constructor(t = [], e = {}) {
        (this.buffers = t),
          (this.indexBuffer = null),
          (this.attributes = e),
          (this.glVertexArrayObjects = {}),
          (this.id = Ch++),
          (this.instanced = !1),
          (this.instanceCount = 1),
          (this.disposeRunner = new Dt("disposeGeometry")),
          (this.refCount = 0);
      }
      addAttribute(t, e, s = 0, i = !1, n, a, o, h = !1) {
        if (!e)
          throw new Error("You must pass a buffer when creating an attribute");
        e instanceof st ||
          (e instanceof Array && (e = new Float32Array(e)), (e = new st(e)));
        const l = t.split("|");
        if (l.length > 1) {
          for (let c = 0; c < l.length; c++)
            this.addAttribute(l[c], e, s, i, n);
          return this;
        }
        let u = this.buffers.indexOf(e);
        return (
          u === -1 && (this.buffers.push(e), (u = this.buffers.length - 1)),
          (this.attributes[t] = new Fs(u, s, i, n, a, o, h)),
          (this.instanced = this.instanced || h),
          this
        );
      }
      getAttribute(t) {
        return this.attributes[t];
      }
      getBuffer(t) {
        return this.buffers[this.getAttribute(t).buffer];
      }
      addIndex(t) {
        return (
          t instanceof st ||
            (t instanceof Array && (t = new Uint16Array(t)), (t = new st(t))),
          (t.type = te.ELEMENT_ARRAY_BUFFER),
          (this.indexBuffer = t),
          this.buffers.includes(t) || this.buffers.push(t),
          this
        );
      }
      getIndex() {
        return this.indexBuffer;
      }
      interleave() {
        if (
          this.buffers.length === 1 ||
          (this.buffers.length === 2 && this.indexBuffer)
        )
          return this;
        const t = [],
          e = [],
          s = new st();
        let i;
        for (i in this.attributes) {
          const n = this.attributes[i],
            a = this.buffers[n.buffer];
          t.push(a.data), e.push((n.size * En[n.type]) / 4), (n.buffer = 0);
        }
        for (s.data = Ih(t, e), i = 0; i < this.buffers.length; i++)
          this.buffers[i] !== this.indexBuffer && this.buffers[i].destroy();
        return (
          (this.buffers = [s]),
          this.indexBuffer && this.buffers.push(this.indexBuffer),
          this
        );
      }
      getSize() {
        for (const t in this.attributes) {
          const e = this.attributes[t];
          return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
        }
        return 0;
      }
      dispose() {
        this.disposeRunner.emit(this, !1);
      }
      destroy() {
        this.dispose(),
          (this.buffers = null),
          (this.indexBuffer = null),
          (this.attributes = null);
      }
      clone() {
        const t = new qt();
        for (let e = 0; e < this.buffers.length; e++)
          t.buffers[e] = new st(this.buffers[e].data.slice(0));
        for (const e in this.attributes) {
          const s = this.attributes[e];
          t.attributes[e] = new Fs(
            s.buffer,
            s.size,
            s.normalized,
            s.type,
            s.stride,
            s.start,
            s.instance
          );
        }
        return (
          this.indexBuffer &&
            ((t.indexBuffer =
              t.buffers[this.buffers.indexOf(this.indexBuffer)]),
            (t.indexBuffer.type = te.ELEMENT_ARRAY_BUFFER)),
          t
        );
      }
      static merge(t) {
        const e = new qt(),
          s = [],
          i = [],
          n = [];
        let a;
        for (let o = 0; o < t.length; o++) {
          a = t[o];
          for (let h = 0; h < a.buffers.length; h++)
            (i[h] = i[h] || 0), (i[h] += a.buffers[h].data.length), (n[h] = 0);
        }
        for (let o = 0; o < a.buffers.length; o++)
          (s[o] = new Rh[mn(a.buffers[o].data)](i[o])),
            (e.buffers[o] = new st(s[o]));
        for (let o = 0; o < t.length; o++) {
          a = t[o];
          for (let h = 0; h < a.buffers.length; h++)
            s[h].set(a.buffers[h].data, n[h]),
              (n[h] += a.buffers[h].data.length);
        }
        if (((e.attributes = a.attributes), a.indexBuffer)) {
          (e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)]),
            (e.indexBuffer.type = te.ELEMENT_ARRAY_BUFFER);
          let o = 0,
            h = 0,
            l = 0,
            u = 0;
          for (let c = 0; c < a.buffers.length; c++)
            if (a.buffers[c] !== a.indexBuffer) {
              u = c;
              break;
            }
          for (const c in a.attributes) {
            const d = a.attributes[c];
            (d.buffer | 0) === u && (h += (d.size * En[d.type]) / 4);
          }
          for (let c = 0; c < t.length; c++) {
            const d = t[c].indexBuffer.data;
            for (let p = 0; p < d.length; p++) e.indexBuffer.data[p + l] += o;
            (o += t[c].buffers[u].data.length / h), (l += d.length);
          }
        }
        return e;
      }
    }
    class An extends qt {
      constructor(t = !1) {
        super(),
          (this._buffer = new st(null, t, !1)),
          (this._indexBuffer = new st(null, t, !0)),
          this.addAttribute("aVertexPosition", this._buffer, 2, !1, O.FLOAT)
            .addAttribute("aTextureCoord", this._buffer, 2, !1, O.FLOAT)
            .addAttribute("aColor", this._buffer, 4, !0, O.UNSIGNED_BYTE)
            .addAttribute("aTextureId", this._buffer, 1, !0, O.FLOAT)
            .addIndex(this._indexBuffer);
      }
    }
    const ke = Math.PI * 2,
      Ph = 180 / Math.PI,
      Mh = Math.PI / 180;
    var Z = ((r) => (
      (r[(r.POLY = 0)] = "POLY"),
      (r[(r.RECT = 1)] = "RECT"),
      (r[(r.CIRC = 2)] = "CIRC"),
      (r[(r.ELIP = 3)] = "ELIP"),
      (r[(r.RREC = 4)] = "RREC"),
      r
    ))(Z || {});
    class q {
      constructor(t = 0, e = 0) {
        (this.x = 0), (this.y = 0), (this.x = t), (this.y = e);
      }
      clone() {
        return new q(this.x, this.y);
      }
      copyFrom(t) {
        return this.set(t.x, t.y), this;
      }
      copyTo(t) {
        return t.set(this.x, this.y), t;
      }
      equals(t) {
        return t.x === this.x && t.y === this.y;
      }
      set(t = 0, e = t) {
        return (this.x = t), (this.y = e), this;
      }
    }
    q.prototype.toString = function () {
      return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
    };
    const ks = [new q(), new q(), new q(), new q()];
    class W {
      constructor(t = 0, e = 0, s = 0, i = 0) {
        (this.x = Number(t)),
          (this.y = Number(e)),
          (this.width = Number(s)),
          (this.height = Number(i)),
          (this.type = Z.RECT);
      }
      get left() {
        return this.x;
      }
      get right() {
        return this.x + this.width;
      }
      get top() {
        return this.y;
      }
      get bottom() {
        return this.y + this.height;
      }
      static get EMPTY() {
        return new W(0, 0, 0, 0);
      }
      clone() {
        return new W(this.x, this.y, this.width, this.height);
      }
      copyFrom(t) {
        return (
          (this.x = t.x),
          (this.y = t.y),
          (this.width = t.width),
          (this.height = t.height),
          this
        );
      }
      copyTo(t) {
        return (
          (t.x = this.x),
          (t.y = this.y),
          (t.width = this.width),
          (t.height = this.height),
          t
        );
      }
      contains(t, e) {
        return this.width <= 0 || this.height <= 0
          ? !1
          : t >= this.x &&
              t < this.x + this.width &&
              e >= this.y &&
              e < this.y + this.height;
      }
      intersects(t, e) {
        if (!e) {
          const E = this.x < t.x ? t.x : this.x;
          if ((this.right > t.right ? t.right : this.right) <= E) return !1;
          const S = this.y < t.y ? t.y : this.y;
          return (this.bottom > t.bottom ? t.bottom : this.bottom) > S;
        }
        const s = this.left,
          i = this.right,
          n = this.top,
          a = this.bottom;
        if (i <= s || a <= n) return !1;
        const o = ks[0].set(t.left, t.top),
          h = ks[1].set(t.left, t.bottom),
          l = ks[2].set(t.right, t.top),
          u = ks[3].set(t.right, t.bottom);
        if (l.x <= o.x || h.y <= o.y) return !1;
        const c = Math.sign(e.a * e.d - e.b * e.c);
        if (
          c === 0 ||
          (e.apply(o, o),
          e.apply(h, h),
          e.apply(l, l),
          e.apply(u, u),
          Math.max(o.x, h.x, l.x, u.x) <= s ||
            Math.min(o.x, h.x, l.x, u.x) >= i ||
            Math.max(o.y, h.y, l.y, u.y) <= n ||
            Math.min(o.y, h.y, l.y, u.y) >= a)
        )
          return !1;
        const d = c * (h.y - o.y),
          p = c * (o.x - h.x),
          f = d * s + p * n,
          m = d * i + p * n,
          g = d * s + p * a,
          _ = d * i + p * a;
        if (
          Math.max(f, m, g, _) <= d * o.x + p * o.y ||
          Math.min(f, m, g, _) >= d * u.x + p * u.y
        )
          return !1;
        const v = c * (o.y - l.y),
          y = c * (l.x - o.x),
          x = v * s + y * n,
          A = v * i + y * n,
          w = v * s + y * a,
          b = v * i + y * a;
        return !(
          Math.max(x, A, w, b) <= v * o.x + y * o.y ||
          Math.min(x, A, w, b) >= v * u.x + y * u.y
        );
      }
      pad(t = 0, e = t) {
        return (
          (this.x -= t),
          (this.y -= e),
          (this.width += t * 2),
          (this.height += e * 2),
          this
        );
      }
      fit(t) {
        const e = Math.max(this.x, t.x),
          s = Math.min(this.x + this.width, t.x + t.width),
          i = Math.max(this.y, t.y),
          n = Math.min(this.y + this.height, t.y + t.height);
        return (
          (this.x = e),
          (this.width = Math.max(s - e, 0)),
          (this.y = i),
          (this.height = Math.max(n - i, 0)),
          this
        );
      }
      ceil(t = 1, e = 0.001) {
        const s = Math.ceil((this.x + this.width - e) * t) / t,
          i = Math.ceil((this.y + this.height - e) * t) / t;
        return (
          (this.x = Math.floor((this.x + e) * t) / t),
          (this.y = Math.floor((this.y + e) * t) / t),
          (this.width = s - this.x),
          (this.height = i - this.y),
          this
        );
      }
      enlarge(t) {
        const e = Math.min(this.x, t.x),
          s = Math.max(this.x + this.width, t.x + t.width),
          i = Math.min(this.y, t.y),
          n = Math.max(this.y + this.height, t.y + t.height);
        return (
          (this.x = e),
          (this.width = s - e),
          (this.y = i),
          (this.height = n - i),
          this
        );
      }
    }
    W.prototype.toString = function () {
      return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
    };
    class hs {
      constructor(t = 0, e = 0, s = 0) {
        (this.x = t), (this.y = e), (this.radius = s), (this.type = Z.CIRC);
      }
      clone() {
        return new hs(this.x, this.y, this.radius);
      }
      contains(t, e) {
        if (this.radius <= 0) return !1;
        const s = this.radius * this.radius;
        let i = this.x - t,
          n = this.y - e;
        return (i *= i), (n *= n), i + n <= s;
      }
      getBounds() {
        return new W(
          this.x - this.radius,
          this.y - this.radius,
          this.radius * 2,
          this.radius * 2
        );
      }
    }
    hs.prototype.toString = function () {
      return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
    };
    class ls {
      constructor(t = 0, e = 0, s = 0, i = 0) {
        (this.x = t),
          (this.y = e),
          (this.width = s),
          (this.height = i),
          (this.type = Z.ELIP);
      }
      clone() {
        return new ls(this.x, this.y, this.width, this.height);
      }
      contains(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        let s = (t - this.x) / this.width,
          i = (e - this.y) / this.height;
        return (s *= s), (i *= i), s + i <= 1;
      }
      getBounds() {
        return new W(
          this.x - this.width,
          this.y - this.height,
          this.width,
          this.height
        );
      }
    }
    ls.prototype.toString = function () {
      return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
    };
    class zt {
      constructor(...t) {
        let e = Array.isArray(t[0]) ? t[0] : t;
        if (typeof e[0] != "number") {
          const s = [];
          for (let i = 0, n = e.length; i < n; i++) s.push(e[i].x, e[i].y);
          e = s;
        }
        (this.points = e), (this.type = Z.POLY), (this.closeStroke = !0);
      }
      clone() {
        const t = this.points.slice(),
          e = new zt(t);
        return (e.closeStroke = this.closeStroke), e;
      }
      contains(t, e) {
        let s = !1;
        const i = this.points.length / 2;
        for (let n = 0, a = i - 1; n < i; a = n++) {
          const o = this.points[n * 2],
            h = this.points[n * 2 + 1],
            l = this.points[a * 2],
            u = this.points[a * 2 + 1];
          h > e != u > e && t < (l - o) * ((e - h) / (u - h)) + o && (s = !s);
        }
        return s;
      }
    }
    zt.prototype.toString = function () {
      return `[@pixi/math:PolygoncloseStroke=${
        this.closeStroke
      }points=${this.points.reduce((r, t) => `${r}, ${t}`, "")}]`;
    };
    class us {
      constructor(t = 0, e = 0, s = 0, i = 0, n = 20) {
        (this.x = t),
          (this.y = e),
          (this.width = s),
          (this.height = i),
          (this.radius = n),
          (this.type = Z.RREC);
      }
      clone() {
        return new us(this.x, this.y, this.width, this.height, this.radius);
      }
      contains(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        if (
          t >= this.x &&
          t <= this.x + this.width &&
          e >= this.y &&
          e <= this.y + this.height
        ) {
          const s = Math.max(
            0,
            Math.min(this.radius, Math.min(this.width, this.height) / 2)
          );
          if (
            (e >= this.y + s && e <= this.y + this.height - s) ||
            (t >= this.x + s && t <= this.x + this.width - s)
          )
            return !0;
          let i = t - (this.x + s),
            n = e - (this.y + s);
          const a = s * s;
          if (
            i * i + n * n <= a ||
            ((i = t - (this.x + this.width - s)), i * i + n * n <= a) ||
            ((n = e - (this.y + this.height - s)), i * i + n * n <= a) ||
            ((i = t - (this.x + s)), i * i + n * n <= a)
          )
            return !0;
        }
        return !1;
      }
    }
    us.prototype.toString = function () {
      return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
    };
    class tt {
      constructor(t = 1, e = 0, s = 0, i = 1, n = 0, a = 0) {
        (this.array = null),
          (this.a = t),
          (this.b = e),
          (this.c = s),
          (this.d = i),
          (this.tx = n),
          (this.ty = a);
      }
      fromArray(t) {
        (this.a = t[0]),
          (this.b = t[1]),
          (this.c = t[3]),
          (this.d = t[4]),
          (this.tx = t[2]),
          (this.ty = t[5]);
      }
      set(t, e, s, i, n, a) {
        return (
          (this.a = t),
          (this.b = e),
          (this.c = s),
          (this.d = i),
          (this.tx = n),
          (this.ty = a),
          this
        );
      }
      toArray(t, e) {
        this.array || (this.array = new Float32Array(9));
        const s = e || this.array;
        return (
          t
            ? ((s[0] = this.a),
              (s[1] = this.b),
              (s[2] = 0),
              (s[3] = this.c),
              (s[4] = this.d),
              (s[5] = 0),
              (s[6] = this.tx),
              (s[7] = this.ty),
              (s[8] = 1))
            : ((s[0] = this.a),
              (s[1] = this.c),
              (s[2] = this.tx),
              (s[3] = this.b),
              (s[4] = this.d),
              (s[5] = this.ty),
              (s[6] = 0),
              (s[7] = 0),
              (s[8] = 1)),
          s
        );
      }
      apply(t, e) {
        e = e || new q();
        const s = t.x,
          i = t.y;
        return (
          (e.x = this.a * s + this.c * i + this.tx),
          (e.y = this.b * s + this.d * i + this.ty),
          e
        );
      }
      applyInverse(t, e) {
        e = e || new q();
        const s = 1 / (this.a * this.d + this.c * -this.b),
          i = t.x,
          n = t.y;
        return (
          (e.x =
            this.d * s * i +
            -this.c * s * n +
            (this.ty * this.c - this.tx * this.d) * s),
          (e.y =
            this.a * s * n +
            -this.b * s * i +
            (-this.ty * this.a + this.tx * this.b) * s),
          e
        );
      }
      translate(t, e) {
        return (this.tx += t), (this.ty += e), this;
      }
      scale(t, e) {
        return (
          (this.a *= t),
          (this.d *= e),
          (this.c *= t),
          (this.b *= e),
          (this.tx *= t),
          (this.ty *= e),
          this
        );
      }
      rotate(t) {
        const e = Math.cos(t),
          s = Math.sin(t),
          i = this.a,
          n = this.c,
          a = this.tx;
        return (
          (this.a = i * e - this.b * s),
          (this.b = i * s + this.b * e),
          (this.c = n * e - this.d * s),
          (this.d = n * s + this.d * e),
          (this.tx = a * e - this.ty * s),
          (this.ty = a * s + this.ty * e),
          this
        );
      }
      append(t) {
        const e = this.a,
          s = this.b,
          i = this.c,
          n = this.d;
        return (
          (this.a = t.a * e + t.b * i),
          (this.b = t.a * s + t.b * n),
          (this.c = t.c * e + t.d * i),
          (this.d = t.c * s + t.d * n),
          (this.tx = t.tx * e + t.ty * i + this.tx),
          (this.ty = t.tx * s + t.ty * n + this.ty),
          this
        );
      }
      setTransform(t, e, s, i, n, a, o, h, l) {
        return (
          (this.a = Math.cos(o + l) * n),
          (this.b = Math.sin(o + l) * n),
          (this.c = -Math.sin(o - h) * a),
          (this.d = Math.cos(o - h) * a),
          (this.tx = t - (s * this.a + i * this.c)),
          (this.ty = e - (s * this.b + i * this.d)),
          this
        );
      }
      prepend(t) {
        const e = this.tx;
        if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
          const s = this.a,
            i = this.c;
          (this.a = s * t.a + this.b * t.c),
            (this.b = s * t.b + this.b * t.d),
            (this.c = i * t.a + this.d * t.c),
            (this.d = i * t.b + this.d * t.d);
        }
        return (
          (this.tx = e * t.a + this.ty * t.c + t.tx),
          (this.ty = e * t.b + this.ty * t.d + t.ty),
          this
        );
      }
      decompose(t) {
        const e = this.a,
          s = this.b,
          i = this.c,
          n = this.d,
          a = t.pivot,
          o = -Math.atan2(-i, n),
          h = Math.atan2(s, e),
          l = Math.abs(o + h);
        return (
          l < 1e-5 || Math.abs(ke - l) < 1e-5
            ? ((t.rotation = h), (t.skew.x = t.skew.y = 0))
            : ((t.rotation = 0), (t.skew.x = o), (t.skew.y = h)),
          (t.scale.x = Math.sqrt(e * e + s * s)),
          (t.scale.y = Math.sqrt(i * i + n * n)),
          (t.position.x = this.tx + (a.x * e + a.y * i)),
          (t.position.y = this.ty + (a.x * s + a.y * n)),
          t
        );
      }
      invert() {
        const t = this.a,
          e = this.b,
          s = this.c,
          i = this.d,
          n = this.tx,
          a = t * i - e * s;
        return (
          (this.a = i / a),
          (this.b = -e / a),
          (this.c = -s / a),
          (this.d = t / a),
          (this.tx = (s * this.ty - i * n) / a),
          (this.ty = -(t * this.ty - e * n) / a),
          this
        );
      }
      identity() {
        return (
          (this.a = 1),
          (this.b = 0),
          (this.c = 0),
          (this.d = 1),
          (this.tx = 0),
          (this.ty = 0),
          this
        );
      }
      clone() {
        const t = new tt();
        return (
          (t.a = this.a),
          (t.b = this.b),
          (t.c = this.c),
          (t.d = this.d),
          (t.tx = this.tx),
          (t.ty = this.ty),
          t
        );
      }
      copyTo(t) {
        return (
          (t.a = this.a),
          (t.b = this.b),
          (t.c = this.c),
          (t.d = this.d),
          (t.tx = this.tx),
          (t.ty = this.ty),
          t
        );
      }
      copyFrom(t) {
        return (
          (this.a = t.a),
          (this.b = t.b),
          (this.c = t.c),
          (this.d = t.d),
          (this.tx = t.tx),
          (this.ty = t.ty),
          this
        );
      }
      static get IDENTITY() {
        return new tt();
      }
      static get TEMP_MATRIX() {
        return new tt();
      }
    }
    tt.prototype.toString = function () {
      return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
    };
    const xe = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
      ye = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
      ve = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
      be = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
      ir = [],
      wn = [],
      Us = Math.sign;
    function Dh() {
      for (let r = 0; r < 16; r++) {
        const t = [];
        ir.push(t);
        for (let e = 0; e < 16; e++) {
          const s = Us(xe[r] * xe[e] + ve[r] * ye[e]),
            i = Us(ye[r] * xe[e] + be[r] * ye[e]),
            n = Us(xe[r] * ve[e] + ve[r] * be[e]),
            a = Us(ye[r] * ve[e] + be[r] * be[e]);
          for (let o = 0; o < 16; o++)
            if (xe[o] === s && ye[o] === i && ve[o] === n && be[o] === a) {
              t.push(o);
              break;
            }
        }
      }
      for (let r = 0; r < 16; r++) {
        const t = new tt();
        t.set(xe[r], ye[r], ve[r], be[r], 0, 0), wn.push(t);
      }
    }
    Dh();
    const it = {
      E: 0,
      SE: 1,
      S: 2,
      SW: 3,
      W: 4,
      NW: 5,
      N: 6,
      NE: 7,
      MIRROR_VERTICAL: 8,
      MAIN_DIAGONAL: 10,
      MIRROR_HORIZONTAL: 12,
      REVERSE_DIAGONAL: 14,
      uX: (r) => xe[r],
      uY: (r) => ye[r],
      vX: (r) => ve[r],
      vY: (r) => be[r],
      inv: (r) => (r & 8 ? r & 15 : -r & 7),
      add: (r, t) => ir[r][t],
      sub: (r, t) => ir[r][it.inv(t)],
      rotate180: (r) => r ^ 4,
      isVertical: (r) => (r & 3) === 2,
      byDirection: (r, t) =>
        Math.abs(r) * 2 <= Math.abs(t)
          ? t >= 0
            ? it.S
            : it.N
          : Math.abs(t) * 2 <= Math.abs(r)
          ? r > 0
            ? it.E
            : it.W
          : t > 0
          ? r > 0
            ? it.SE
            : it.SW
          : r > 0
          ? it.NE
          : it.NW,
      matrixAppendRotationInv: (r, t, e = 0, s = 0) => {
        const i = wn[it.inv(t)];
        (i.tx = e), (i.ty = s), r.append(i);
      },
    };
    class Kt {
      constructor(t, e, s = 0, i = 0) {
        (this._x = s), (this._y = i), (this.cb = t), (this.scope = e);
      }
      clone(t = this.cb, e = this.scope) {
        return new Kt(t, e, this._x, this._y);
      }
      set(t = 0, e = t) {
        return (
          (this._x !== t || this._y !== e) &&
            ((this._x = t), (this._y = e), this.cb.call(this.scope)),
          this
        );
      }
      copyFrom(t) {
        return (
          (this._x !== t.x || this._y !== t.y) &&
            ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
          this
        );
      }
      copyTo(t) {
        return t.set(this._x, this._y), t;
      }
      equals(t) {
        return t.x === this._x && t.y === this._y;
      }
      get x() {
        return this._x;
      }
      set x(t) {
        this._x !== t && ((this._x = t), this.cb.call(this.scope));
      }
      get y() {
        return this._y;
      }
      set y(t) {
        this._y !== t && ((this._y = t), this.cb.call(this.scope));
      }
    }
    Kt.prototype.toString = function () {
      return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
    };
    const rr = class {
      constructor() {
        (this.worldTransform = new tt()),
          (this.localTransform = new tt()),
          (this.position = new Kt(this.onChange, this, 0, 0)),
          (this.scale = new Kt(this.onChange, this, 1, 1)),
          (this.pivot = new Kt(this.onChange, this, 0, 0)),
          (this.skew = new Kt(this.updateSkew, this, 0, 0)),
          (this._rotation = 0),
          (this._cx = 1),
          (this._sx = 0),
          (this._cy = 0),
          (this._sy = 1),
          (this._localID = 0),
          (this._currentLocalID = 0),
          (this._worldID = 0),
          (this._parentID = 0);
      }
      onChange() {
        this._localID++;
      }
      updateSkew() {
        (this._cx = Math.cos(this._rotation + this.skew.y)),
          (this._sx = Math.sin(this._rotation + this.skew.y)),
          (this._cy = -Math.sin(this._rotation - this.skew.x)),
          (this._sy = Math.cos(this._rotation - this.skew.x)),
          this._localID++;
      }
      updateLocalTransform() {
        const r = this.localTransform;
        this._localID !== this._currentLocalID &&
          ((r.a = this._cx * this.scale.x),
          (r.b = this._sx * this.scale.x),
          (r.c = this._cy * this.scale.y),
          (r.d = this._sy * this.scale.y),
          (r.tx = this.position.x - (this.pivot.x * r.a + this.pivot.y * r.c)),
          (r.ty = this.position.y - (this.pivot.x * r.b + this.pivot.y * r.d)),
          (this._currentLocalID = this._localID),
          (this._parentID = -1));
      }
      updateTransform(r) {
        const t = this.localTransform;
        if (
          (this._localID !== this._currentLocalID &&
            ((t.a = this._cx * this.scale.x),
            (t.b = this._sx * this.scale.x),
            (t.c = this._cy * this.scale.y),
            (t.d = this._sy * this.scale.y),
            (t.tx =
              this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
            (t.ty =
              this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
            (this._currentLocalID = this._localID),
            (this._parentID = -1)),
          this._parentID !== r._worldID)
        ) {
          const e = r.worldTransform,
            s = this.worldTransform;
          (s.a = t.a * e.a + t.b * e.c),
            (s.b = t.a * e.b + t.b * e.d),
            (s.c = t.c * e.a + t.d * e.c),
            (s.d = t.c * e.b + t.d * e.d),
            (s.tx = t.tx * e.a + t.ty * e.c + e.tx),
            (s.ty = t.tx * e.b + t.ty * e.d + e.ty),
            (this._parentID = r._worldID),
            this._worldID++;
        }
      }
      setFromMatrix(r) {
        r.decompose(this), this._localID++;
      }
      get rotation() {
        return this._rotation;
      }
      set rotation(r) {
        this._rotation !== r && ((this._rotation = r), this.updateSkew());
      }
    };
    rr.IDENTITY = new rr();
    let nr = rr;
    nr.prototype.toString = function () {
      return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
    };
    var Bh = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,
      Lh = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
    function Sn(r, t, e) {
      const s = r.createShader(t);
      return r.shaderSource(s, e), r.compileShader(s), s;
    }
    function ar(r) {
      const t = new Array(r);
      for (let e = 0; e < t.length; e++) t[e] = !1;
      return t;
    }
    function In(r, t) {
      switch (r) {
        case "float":
          return 0;
        case "vec2":
          return new Float32Array(2 * t);
        case "vec3":
          return new Float32Array(3 * t);
        case "vec4":
          return new Float32Array(4 * t);
        case "int":
        case "uint":
        case "sampler2D":
        case "sampler2DArray":
          return 0;
        case "ivec2":
          return new Int32Array(2 * t);
        case "ivec3":
          return new Int32Array(3 * t);
        case "ivec4":
          return new Int32Array(4 * t);
        case "uvec2":
          return new Uint32Array(2 * t);
        case "uvec3":
          return new Uint32Array(3 * t);
        case "uvec4":
          return new Uint32Array(4 * t);
        case "bool":
          return !1;
        case "bvec2":
          return ar(2 * t);
        case "bvec3":
          return ar(3 * t);
        case "bvec4":
          return ar(4 * t);
        case "mat2":
          return new Float32Array([1, 0, 0, 1]);
        case "mat3":
          return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case "mat4":
          return new Float32Array([
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
          ]);
      }
      return null;
    }
    const Ue = [
        {
          test: (r) => r.type === "float" && r.size === 1 && !r.isArray,
          code: (r) => `
            if(uv["${r}"] !== ud["${r}"].value)
            {
                ud["${r}"].value = uv["${r}"]
                gl.uniform1f(ud["${r}"].location, uv["${r}"])
            }
            `,
        },
        {
          test: (r, t) =>
            (r.type === "sampler2D" ||
              r.type === "samplerCube" ||
              r.type === "sampler2DArray") &&
            r.size === 1 &&
            !r.isArray &&
            (t == null || t.castToBaseTexture !== void 0),
          code: (r) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${r}"], t);

            if(ud["${r}"].value !== t)
            {
                ud["${r}"].value = t;
                gl.uniform1i(ud["${r}"].location, t);
; // eslint-disable-line max-len
            }`,
        },
        {
          test: (r, t) =>
            r.type === "mat3" && r.size === 1 && !r.isArray && t.a !== void 0,
          code: (r) => `
            gl.uniformMatrix3fv(ud["${r}"].location, false, uv["${r}"].toArray(true));
            `,
          codeUbo: (r) => `
                var ${r}_matrix = uv.${r}.toArray(true);

                data[offset] = ${r}_matrix[0];
                data[offset+1] = ${r}_matrix[1];
                data[offset+2] = ${r}_matrix[2];
        
                data[offset + 4] = ${r}_matrix[3];
                data[offset + 5] = ${r}_matrix[4];
                data[offset + 6] = ${r}_matrix[5];
        
                data[offset + 8] = ${r}_matrix[6];
                data[offset + 9] = ${r}_matrix[7];
                data[offset + 10] = ${r}_matrix[8];
            `,
        },
        {
          test: (r, t) =>
            r.type === "vec2" && r.size === 1 && !r.isArray && t.x !== void 0,
          code: (r) => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${r}"].location, v.x, v.y);
                }`,
          codeUbo: (r) => `
                v = uv.${r};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `,
        },
        {
          test: (r) => r.type === "vec2" && r.size === 1 && !r.isArray,
          code: (r) => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${r}"].location, v[0], v[1]);
                }
            `,
        },
        {
          test: (r, t) =>
            r.type === "vec4" &&
            r.size === 1 &&
            !r.isArray &&
            t.width !== void 0,
          code: (r) => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${r}"].location, v.x, v.y, v.width, v.height)
                }`,
          codeUbo: (r) => `
                    v = uv.${r};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `,
        },
        {
          test: (r, t) =>
            r.type === "vec4" && r.size === 1 && !r.isArray && t.red !== void 0,
          code: (r) => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${r}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
          codeUbo: (r) => `
                    v = uv.${r};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `,
        },
        {
          test: (r, t) =>
            r.type === "vec3" && r.size === 1 && !r.isArray && t.red !== void 0,
          code: (r) => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${r}"].location, v.red, v.green, v.blue)
                }`,
          codeUbo: (r) => `
                    v = uv.${r};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `,
        },
        {
          test: (r) => r.type === "vec4" && r.size === 1 && !r.isArray,
          code: (r) => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${r}"].location, v[0], v[1], v[2], v[3])
                }`,
        },
      ],
      Nh = {
        float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
        vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
        vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
        vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
        int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
        uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
        uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
        uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
        bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
        bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
      },
      Oh = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        uint: "gl.uniform1uiv(location, v)",
        uvec2: "gl.uniform2uiv(location, v)",
        uvec3: "gl.uniform3uiv(location, v)",
        uvec4: "gl.uniform4uiv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)",
      };
    function Fh(r, t) {
      var s;
      const e = [
        `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `,
      ];
      for (const i in r.uniforms) {
        const n = t[i];
        if (!n) {
          ((s = r.uniforms[i]) == null ? void 0 : s.group) === !0 &&
            (r.uniforms[i].ubo
              ? e.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${i}, '${i}');
                    `)
              : e.push(`
                        renderer.shader.syncUniformGroup(uv.${i}, syncData);
                    `));
          continue;
        }
        const a = r.uniforms[i];
        let o = !1;
        for (let h = 0; h < Ue.length; h++)
          if (Ue[h].test(n, a)) {
            e.push(Ue[h].code(i, a)), (o = !0);
            break;
          }
        if (!o) {
          const h = (n.size === 1 && !n.isArray ? Nh : Oh)[n.type].replace(
            "location",
            `ud["${i}"].location`
          );
          e.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${h};`);
        }
      }
      return new Function(
        "ud",
        "uv",
        "renderer",
        "syncData",
        e.join(`
`)
      );
    }
    const Cn = {};
    let Ge = Cn;
    function kh() {
      if (Ge === Cn || (Ge != null && Ge.isContextLost())) {
        const r = N.ADAPTER.createCanvas();
        let t;
        N.PREFER_ENV >= es.WEBGL2 && (t = r.getContext("webgl2", {})),
          t ||
            ((t =
              r.getContext("webgl", {}) ||
              r.getContext("experimental-webgl", {})),
            t ? t.getExtension("WEBGL_draw_buffers") : (t = null)),
          (Ge = t);
      }
      return Ge;
    }
    let Gs;
    function Uh() {
      if (!Gs) {
        Gs = Ut.MEDIUM;
        const r = kh();
        if (r && r.getShaderPrecisionFormat) {
          const t = r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT);
          t && (Gs = t.precision ? Ut.HIGH : Ut.MEDIUM);
        }
      }
      return Gs;
    }
    function Rn(r, t) {
      const e = r
          .getShaderSource(t)
          .split(
            `
`
          )
          .map((l, u) => `${u}: ${l}`),
        s = r.getShaderInfoLog(t),
        i = s.split(`
`),
        n = {},
        a = i
          .map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1")))
          .filter((l) => (l && !n[l] ? ((n[l] = !0), !0) : !1)),
        o = [""];
      a.forEach((l) => {
        (e[l - 1] = `%c${e[l - 1]}%c`),
          o.push(
            "background: #FF0000; color:#FFFFFF; font-size: 10px",
            "font-size: 10px"
          );
      });
      const h = e.join(`
`);
      (o[0] = h),
        console.error(s),
        console.groupCollapsed("click to view full shader code"),
        console.warn(...o),
        console.groupEnd();
    }
    function Gh(r, t, e, s) {
      r.getProgramParameter(t, r.LINK_STATUS) ||
        (r.getShaderParameter(e, r.COMPILE_STATUS) || Rn(r, e),
        r.getShaderParameter(s, r.COMPILE_STATUS) || Rn(r, s),
        console.error("PixiJS Error: Could not initialize shader."),
        r.getProgramInfoLog(t) !== "" &&
          console.warn(
            "PixiJS Warning: gl.getProgramInfoLog()",
            r.getProgramInfoLog(t)
          ));
    }
    const Hh = {
      float: 1,
      vec2: 2,
      vec3: 3,
      vec4: 4,
      int: 1,
      ivec2: 2,
      ivec3: 3,
      ivec4: 4,
      uint: 1,
      uvec2: 2,
      uvec3: 3,
      uvec4: 4,
      bool: 1,
      bvec2: 2,
      bvec3: 3,
      bvec4: 4,
      mat2: 4,
      mat3: 9,
      mat4: 16,
      sampler2D: 1,
    };
    function Pn(r) {
      return Hh[r];
    }
    let Hs = null;
    const Mn = {
      FLOAT: "float",
      FLOAT_VEC2: "vec2",
      FLOAT_VEC3: "vec3",
      FLOAT_VEC4: "vec4",
      INT: "int",
      INT_VEC2: "ivec2",
      INT_VEC3: "ivec3",
      INT_VEC4: "ivec4",
      UNSIGNED_INT: "uint",
      UNSIGNED_INT_VEC2: "uvec2",
      UNSIGNED_INT_VEC3: "uvec3",
      UNSIGNED_INT_VEC4: "uvec4",
      BOOL: "bool",
      BOOL_VEC2: "bvec2",
      BOOL_VEC3: "bvec3",
      BOOL_VEC4: "bvec4",
      FLOAT_MAT2: "mat2",
      FLOAT_MAT3: "mat3",
      FLOAT_MAT4: "mat4",
      SAMPLER_2D: "sampler2D",
      INT_SAMPLER_2D: "sampler2D",
      UNSIGNED_INT_SAMPLER_2D: "sampler2D",
      SAMPLER_CUBE: "samplerCube",
      INT_SAMPLER_CUBE: "samplerCube",
      UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
      SAMPLER_2D_ARRAY: "sampler2DArray",
      INT_SAMPLER_2D_ARRAY: "sampler2DArray",
      UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    };
    function Dn(r, t) {
      if (!Hs) {
        const e = Object.keys(Mn);
        Hs = {};
        for (let s = 0; s < e.length; ++s) {
          const i = e[s];
          Hs[r[i]] = Mn[i];
        }
      }
      return Hs[t];
    }
    function Bn(r, t, e) {
      if (r.substring(0, 9) !== "precision") {
        let s = t;
        return (
          t === Ut.HIGH && e !== Ut.HIGH && (s = Ut.MEDIUM),
          `precision ${s} float;
${r}`
        );
      } else if (e !== Ut.HIGH && r.substring(0, 15) === "precision highp")
        return r.replace("precision highp", "precision mediump");
      return r;
    }
    let cs;
    function zh() {
      if (typeof cs == "boolean") return cs;
      try {
        cs =
          new Function(
            "param1",
            "param2",
            "param3",
            "return param1[param2] === param3;"
          )({ a: "b" }, "a", "b") === !0;
      } catch {
        cs = !1;
      }
      return cs;
    }
    let Xh = 0;
    const zs = {},
      or = class is {
        constructor(t, e, s = "pixi-shader", i = {}) {
          (this.extra = {}),
            (this.id = Xh++),
            (this.vertexSrc = t || is.defaultVertexSrc),
            (this.fragmentSrc = e || is.defaultFragmentSrc),
            (this.vertexSrc = this.vertexSrc.trim()),
            (this.fragmentSrc = this.fragmentSrc.trim()),
            (this.extra = i),
            this.vertexSrc.substring(0, 8) !== "#version" &&
              ((s = s.replace(/\s+/g, "-")),
              zs[s] ? (zs[s]++, (s += `-${zs[s]}`)) : (zs[s] = 1),
              (this.vertexSrc = `#define SHADER_NAME ${s}
${this.vertexSrc}`),
              (this.fragmentSrc = `#define SHADER_NAME ${s}
${this.fragmentSrc}`),
              (this.vertexSrc = Bn(
                this.vertexSrc,
                is.defaultVertexPrecision,
                Ut.HIGH
              )),
              (this.fragmentSrc = Bn(
                this.fragmentSrc,
                is.defaultFragmentPrecision,
                Uh()
              ))),
            (this.glPrograms = {}),
            (this.syncUniforms = null);
        }
        static get defaultVertexSrc() {
          return Lh;
        }
        static get defaultFragmentSrc() {
          return Bh;
        }
        static from(t, e, s) {
          const i = t + e;
          let n = xn[i];
          return n || (xn[i] = n = new is(t, e, s)), n;
        }
      };
    (or.defaultVertexPrecision = Ut.HIGH),
      (or.defaultFragmentPrecision = ee.apple.device ? Ut.HIGH : Ut.MEDIUM);
    let Xt = or,
      Vh = 0;
    class Bt {
      constructor(t, e, s) {
        (this.group = !0),
          (this.syncUniforms = {}),
          (this.dirtyId = 0),
          (this.id = Vh++),
          (this.static = !!e),
          (this.ubo = !!s),
          t instanceof st
            ? ((this.buffer = t),
              (this.buffer.type = te.UNIFORM_BUFFER),
              (this.autoManage = !1),
              (this.ubo = !0))
            : ((this.uniforms = t),
              this.ubo &&
                ((this.buffer = new st(new Float32Array(1))),
                (this.buffer.type = te.UNIFORM_BUFFER),
                (this.autoManage = !0)));
      }
      update() {
        this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
      }
      add(t, e, s) {
        if (!this.ubo) this.uniforms[t] = new Bt(e, s);
        else
          throw new Error(
            "[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them"
          );
      }
      static from(t, e, s) {
        return new Bt(t, e, s);
      }
      static uboFrom(t, e) {
        return new Bt(t, e ?? !0, !0);
      }
    }
    class Lt {
      constructor(t, e) {
        (this.uniformBindCount = 0),
          (this.program = t),
          e
            ? e instanceof Bt
              ? (this.uniformGroup = e)
              : (this.uniformGroup = new Bt(e))
            : (this.uniformGroup = new Bt({})),
          (this.disposeRunner = new Dt("disposeShader"));
      }
      checkUniformExists(t, e) {
        if (e.uniforms[t]) return !0;
        for (const s in e.uniforms) {
          const i = e.uniforms[s];
          if (i.group === !0 && this.checkUniformExists(t, i)) return !0;
        }
        return !1;
      }
      destroy() {
        (this.uniformGroup = null),
          this.disposeRunner.emit(this),
          this.disposeRunner.destroy();
      }
      get uniforms() {
        return this.uniformGroup.uniforms;
      }
      static from(t, e, s) {
        const i = Xt.from(t, e);
        return new Lt(i, s);
      }
    }
    class $h {
      constructor(t, e) {
        if (
          ((this.vertexSrc = t),
          (this.fragTemplate = e),
          (this.programCache = {}),
          (this.defaultGroupCache = {}),
          !e.includes("%count%"))
        )
          throw new Error('Fragment template must contain "%count%".');
        if (!e.includes("%forloop%"))
          throw new Error('Fragment template must contain "%forloop%".');
      }
      generateShader(t) {
        if (!this.programCache[t]) {
          const s = new Int32Array(t);
          for (let n = 0; n < t; n++) s[n] = n;
          this.defaultGroupCache[t] = Bt.from({ uSamplers: s }, !0);
          let i = this.fragTemplate;
          (i = i.replace(/%count%/gi, `${t}`)),
            (i = i.replace(/%forloop%/gi, this.generateSampleSrc(t))),
            (this.programCache[t] = new Xt(this.vertexSrc, i));
        }
        const e = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new tt(),
          default: this.defaultGroupCache[t],
        };
        return new Lt(this.programCache[t], e);
      }
      generateSampleSrc(t) {
        let e = "";
        (e += `
`),
          (e += `
`);
        for (let s = 0; s < t; s++)
          s > 0 &&
            (e += `
else `),
            s < t - 1 && (e += `if(vTextureId < ${s}.5)`),
            (e += `
{`),
            (e += `
	color = texture2D(uSamplers[${s}], vTextureCoord);`),
            (e += `
}`);
        return (
          (e += `
`),
          (e += `
`),
          e
        );
      }
    }
    class Xs {
      constructor() {
        (this.elements = []), (this.ids = []), (this.count = 0);
      }
      clear() {
        for (let t = 0; t < this.count; t++) this.elements[t] = null;
        this.count = 0;
      }
    }
    function Wh() {
      return !ee.apple.device;
    }
    function jh(r) {
      let t = !0;
      const e = N.ADAPTER.getNavigator();
      if (ee.tablet || ee.phone) {
        if (ee.apple.device) {
          const s = e.userAgent.match(/OS (\d+)_(\d+)?/);
          s && parseInt(s[1], 10) < 11 && (t = !1);
        }
        if (ee.android.device) {
          const s = e.userAgent.match(/Android\s([0-9.]*)/);
          s && parseInt(s[1], 10) < 7 && (t = !1);
        }
      }
      return t ? r : 4;
    }
    class Vs {
      constructor(t) {
        this.renderer = t;
      }
      flush() {}
      destroy() {
        this.renderer = null;
      }
      start() {}
      stop() {
        this.flush();
      }
      render(t) {}
    }
    var Yh = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,
      qh = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
    const ds = class Gt extends Vs {
      constructor(t) {
        super(t),
          this.setShaderGenerator(),
          (this.geometryClass = An),
          (this.vertexSize = 6),
          (this.state = Mt.for2d()),
          (this.size = Gt.defaultBatchSize * 4),
          (this._vertexCount = 0),
          (this._indexCount = 0),
          (this._bufferedElements = []),
          (this._bufferedTextures = []),
          (this._bufferSize = 0),
          (this._shader = null),
          (this._packedGeometries = []),
          (this._packedGeometryPoolSize = 2),
          (this._flushId = 0),
          (this._aBuffers = {}),
          (this._iBuffers = {}),
          (this.maxTextures = 1),
          this.renderer.on("prerender", this.onPrerender, this),
          t.runners.contextChange.add(this),
          (this._dcIndex = 0),
          (this._aIndex = 0),
          (this._iIndex = 0),
          (this._attributeBuffer = null),
          (this._indexBuffer = null),
          (this._tempBoundTextures = []);
      }
      static get defaultMaxTextures() {
        return (
          (this._defaultMaxTextures = this._defaultMaxTextures ?? jh(32)),
          this._defaultMaxTextures
        );
      }
      static set defaultMaxTextures(t) {
        this._defaultMaxTextures = t;
      }
      static get canUploadSameBuffer() {
        return (
          (this._canUploadSameBuffer = this._canUploadSameBuffer ?? Wh()),
          this._canUploadSameBuffer
        );
      }
      static set canUploadSameBuffer(t) {
        this._canUploadSameBuffer = t;
      }
      get MAX_TEXTURES() {
        return (
          V(
            "7.1.0",
            "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"
          ),
          this.maxTextures
        );
      }
      static get defaultVertexSrc() {
        return qh;
      }
      static get defaultFragmentTemplate() {
        return Yh;
      }
      setShaderGenerator({
        vertex: t = Gt.defaultVertexSrc,
        fragment: e = Gt.defaultFragmentTemplate,
      } = {}) {
        this.shaderGenerator = new $h(t, e);
      }
      contextChange() {
        const t = this.renderer.gl;
        N.PREFER_ENV === es.WEBGL_LEGACY
          ? (this.maxTextures = 1)
          : ((this.maxTextures = Math.min(
              t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
              Gt.defaultMaxTextures
            )),
            (this.maxTextures = Eh(this.maxTextures, t))),
          (this._shader = this.shaderGenerator.generateShader(
            this.maxTextures
          ));
        for (let e = 0; e < this._packedGeometryPoolSize; e++)
          this._packedGeometries[e] = new this.geometryClass();
        this.initFlushBuffers();
      }
      initFlushBuffers() {
        const { _drawCallPool: t, _textureArrayPool: e } = Gt,
          s = this.size / 4,
          i = Math.floor(s / this.maxTextures) + 1;
        for (; t.length < s; ) t.push(new sr());
        for (; e.length < i; ) e.push(new Xs());
        for (let n = 0; n < this.maxTextures; n++)
          this._tempBoundTextures[n] = null;
      }
      onPrerender() {
        this._flushId = 0;
      }
      render(t) {
        t._texture.valid &&
          (this._vertexCount + t.vertexData.length / 2 > this.size &&
            this.flush(),
          (this._vertexCount += t.vertexData.length / 2),
          (this._indexCount += t.indices.length),
          (this._bufferedTextures[this._bufferSize] = t._texture.baseTexture),
          (this._bufferedElements[this._bufferSize++] = t));
      }
      buildTexturesAndDrawCalls() {
        const { _bufferedTextures: t, maxTextures: e } = this,
          s = Gt._textureArrayPool,
          i = this.renderer.batch,
          n = this._tempBoundTextures,
          a = this.renderer.textureGC.count;
        let o = ++$._globalBatch,
          h = 0,
          l = s[0],
          u = 0;
        i.copyBoundTextures(n, e);
        for (let c = 0; c < this._bufferSize; ++c) {
          const d = t[c];
          (t[c] = null),
            d._batchEnabled !== o &&
              (l.count >= e &&
                (i.boundArray(l, n, o, e),
                this.buildDrawCalls(l, u, c),
                (u = c),
                (l = s[++h]),
                ++o),
              (d._batchEnabled = o),
              (d.touched = a),
              (l.elements[l.count++] = d));
        }
        l.count > 0 &&
          (i.boundArray(l, n, o, e),
          this.buildDrawCalls(l, u, this._bufferSize),
          ++h,
          ++o);
        for (let c = 0; c < n.length; c++) n[c] = null;
        $._globalBatch = o;
      }
      buildDrawCalls(t, e, s) {
        const {
            _bufferedElements: i,
            _attributeBuffer: n,
            _indexBuffer: a,
            vertexSize: o,
          } = this,
          h = Gt._drawCallPool;
        let l = this._dcIndex,
          u = this._aIndex,
          c = this._iIndex,
          d = h[l];
        (d.start = this._iIndex), (d.texArray = t);
        for (let p = e; p < s; ++p) {
          const f = i[p],
            m = f._texture.baseTexture,
            g = xp[m.alphaMode ? 1 : 0][f.blendMode];
          (i[p] = null),
            e < p &&
              d.blend !== g &&
              ((d.size = c - d.start),
              (e = p),
              (d = h[++l]),
              (d.texArray = t),
              (d.start = c)),
            this.packInterleavedGeometry(f, n, a, u, c),
            (u += (f.vertexData.length / 2) * o),
            (c += f.indices.length),
            (d.blend = g);
        }
        e < s && ((d.size = c - d.start), ++l),
          (this._dcIndex = l),
          (this._aIndex = u),
          (this._iIndex = c);
      }
      bindAndClearTexArray(t) {
        const e = this.renderer.texture;
        for (let s = 0; s < t.count; s++)
          e.bind(t.elements[s], t.ids[s]), (t.elements[s] = null);
        t.count = 0;
      }
      updateGeometry() {
        const {
          _packedGeometries: t,
          _attributeBuffer: e,
          _indexBuffer: s,
        } = this;
        Gt.canUploadSameBuffer
          ? (t[this._flushId]._buffer.update(e.rawBinaryData),
            t[this._flushId]._indexBuffer.update(s),
            this.renderer.geometry.updateBuffers())
          : (this._packedGeometryPoolSize <= this._flushId &&
              (this._packedGeometryPoolSize++,
              (t[this._flushId] = new this.geometryClass())),
            t[this._flushId]._buffer.update(e.rawBinaryData),
            t[this._flushId]._indexBuffer.update(s),
            this.renderer.geometry.bind(t[this._flushId]),
            this.renderer.geometry.updateBuffers(),
            this._flushId++);
      }
      drawBatches() {
        const t = this._dcIndex,
          { gl: e, state: s } = this.renderer,
          i = Gt._drawCallPool;
        let n = null;
        for (let a = 0; a < t; a++) {
          const { texArray: o, type: h, size: l, start: u, blend: c } = i[a];
          n !== o && ((n = o), this.bindAndClearTexArray(o)),
            (this.state.blendMode = c),
            s.set(this.state),
            e.drawElements(h, l, e.UNSIGNED_SHORT, u * 2);
        }
      }
      flush() {
        this._vertexCount !== 0 &&
          ((this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)),
          (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
          (this._aIndex = 0),
          (this._iIndex = 0),
          (this._dcIndex = 0),
          this.buildTexturesAndDrawCalls(),
          this.updateGeometry(),
          this.drawBatches(),
          (this._bufferSize = 0),
          (this._vertexCount = 0),
          (this._indexCount = 0));
      }
      start() {
        this.renderer.state.set(this.state),
          this.renderer.texture.ensureSamplerType(this.maxTextures),
          this.renderer.shader.bind(this._shader),
          Gt.canUploadSameBuffer &&
            this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
      }
      stop() {
        this.flush();
      }
      destroy() {
        for (let t = 0; t < this._packedGeometryPoolSize; t++)
          this._packedGeometries[t] && this._packedGeometries[t].destroy();
        this.renderer.off("prerender", this.onPrerender, this),
          (this._aBuffers = null),
          (this._iBuffers = null),
          (this._packedGeometries = null),
          (this._attributeBuffer = null),
          (this._indexBuffer = null),
          this._shader && (this._shader.destroy(), (this._shader = null)),
          super.destroy();
      }
      getAttributeBuffer(t) {
        const e = Bs(Math.ceil(t / 8)),
          s = _n(e),
          i = e * 8;
        this._aBuffers.length <= s && (this._iBuffers.length = s + 1);
        let n = this._aBuffers[i];
        return (
          n || (this._aBuffers[i] = n = new ji(i * this.vertexSize * 4)), n
        );
      }
      getIndexBuffer(t) {
        const e = Bs(Math.ceil(t / 12)),
          s = _n(e),
          i = e * 12;
        this._iBuffers.length <= s && (this._iBuffers.length = s + 1);
        let n = this._iBuffers[s];
        return n || (this._iBuffers[s] = n = new Uint16Array(i)), n;
      }
      packInterleavedGeometry(t, e, s, i, n) {
        const { uint32View: a, float32View: o } = e,
          h = i / this.vertexSize,
          l = t.uvs,
          u = t.indices,
          c = t.vertexData,
          d = t._texture.baseTexture._batchLocation,
          p = Math.min(t.worldAlpha, 1),
          f = Q.shared
            .setValue(t._tintRGB)
            .toPremultiplied(p, t._texture.baseTexture.alphaMode > 0);
        for (let m = 0; m < c.length; m += 2)
          (o[i++] = c[m]),
            (o[i++] = c[m + 1]),
            (o[i++] = l[m]),
            (o[i++] = l[m + 1]),
            (a[i++] = f),
            (o[i++] = d);
        for (let m = 0; m < u.length; m++) s[n++] = h + u[m];
      }
    };
    (ds.defaultBatchSize = 4096),
      (ds.extension = { name: "batch", type: M.RendererPlugin }),
      (ds._drawCallPool = []),
      (ds._textureArrayPool = []);
    let Te = ds;
    k.add(Te);
    var Kh = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,
      Jh = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
    const hr = class Cs extends Lt {
      constructor(t, e, s) {
        const i = Xt.from(t || Cs.defaultVertexSrc, e || Cs.defaultFragmentSrc);
        super(i, s),
          (this.padding = 0),
          (this.resolution = Cs.defaultResolution),
          (this.multisample = Cs.defaultMultisample),
          (this.enabled = !0),
          (this.autoFit = !0),
          (this.state = new Mt());
      }
      apply(t, e, s, i, n) {
        t.applyFilter(this, e, s, i);
      }
      get blendMode() {
        return this.state.blendMode;
      }
      set blendMode(t) {
        this.state.blendMode = t;
      }
      get resolution() {
        return this._resolution;
      }
      set resolution(t) {
        this._resolution = t;
      }
      static get defaultVertexSrc() {
        return Jh;
      }
      static get defaultFragmentSrc() {
        return Kh;
      }
    };
    (hr.defaultResolution = 1), (hr.defaultMultisample = ht.NONE);
    let gt = hr;
    class $s {
      constructor() {
        (this.clearBeforeRender = !0),
          (this._backgroundColor = new Q(0)),
          (this.alpha = 1);
      }
      init(t) {
        this.clearBeforeRender = t.clearBeforeRender;
        const { backgroundColor: e, background: s, backgroundAlpha: i } = t,
          n = s ?? e;
        n !== void 0 && (this.color = n), (this.alpha = i);
      }
      get color() {
        return this._backgroundColor.value;
      }
      set color(t) {
        this._backgroundColor.setValue(t);
      }
      get alpha() {
        return this._backgroundColor.alpha;
      }
      set alpha(t) {
        this._backgroundColor.setAlpha(t);
      }
      get backgroundColor() {
        return this._backgroundColor;
      }
      destroy() {}
    }
    ($s.defaultOptions = {
      backgroundAlpha: 1,
      backgroundColor: 0,
      clearBeforeRender: !0,
    }),
      ($s.extension = {
        type: [M.RendererSystem, M.CanvasRendererSystem],
        name: "background",
      }),
      k.add($s);
    class Ln {
      constructor(t) {
        (this.renderer = t),
          (this.emptyRenderer = new Vs(t)),
          (this.currentRenderer = this.emptyRenderer);
      }
      setObjectRenderer(t) {
        this.currentRenderer !== t &&
          (this.currentRenderer.stop(),
          (this.currentRenderer = t),
          this.currentRenderer.start());
      }
      flush() {
        this.setObjectRenderer(this.emptyRenderer);
      }
      reset() {
        this.setObjectRenderer(this.emptyRenderer);
      }
      copyBoundTextures(t, e) {
        const { boundTextures: s } = this.renderer.texture;
        for (let i = e - 1; i >= 0; --i)
          (t[i] = s[i] || null), t[i] && (t[i]._batchLocation = i);
      }
      boundArray(t, e, s, i) {
        const { elements: n, ids: a, count: o } = t;
        let h = 0;
        for (let l = 0; l < o; l++) {
          const u = n[l],
            c = u._batchLocation;
          if (c >= 0 && c < i && e[c] === u) {
            a[l] = c;
            continue;
          }
          for (; h < i; ) {
            const d = e[h];
            if (d && d._batchEnabled === s && d._batchLocation === h) {
              h++;
              continue;
            }
            (a[l] = h), (u._batchLocation = h), (e[h] = u);
            break;
          }
        }
      }
      destroy() {
        this.renderer = null;
      }
    }
    (Ln.extension = { type: M.RendererSystem, name: "batch" }), k.add(Ln);
    let Nn = 0;
    class Ws {
      constructor(t) {
        (this.renderer = t),
          (this.webGLVersion = 1),
          (this.extensions = {}),
          (this.supports = { uint32Indices: !1 }),
          (this.handleContextLost = this.handleContextLost.bind(this)),
          (this.handleContextRestored = this.handleContextRestored.bind(this));
      }
      get isLost() {
        return !this.gl || this.gl.isContextLost();
      }
      contextChange(t) {
        (this.gl = t),
          (this.renderer.gl = t),
          (this.renderer.CONTEXT_UID = Nn++);
      }
      init(t) {
        if (t.context) this.initFromContext(t.context);
        else {
          const e = this.renderer.background.alpha < 1,
            s = t.premultipliedAlpha;
          (this.preserveDrawingBuffer = t.preserveDrawingBuffer),
            (this.useContextAlpha = t.useContextAlpha),
            (this.powerPreference = t.powerPreference),
            this.initFromOptions({
              alpha: e,
              premultipliedAlpha: s,
              antialias: t.antialias,
              stencil: !0,
              preserveDrawingBuffer: t.preserveDrawingBuffer,
              powerPreference: t.powerPreference,
            });
        }
      }
      initFromContext(t) {
        (this.gl = t),
          this.validateContext(t),
          (this.renderer.gl = t),
          (this.renderer.CONTEXT_UID = Nn++),
          this.renderer.runners.contextChange.emit(t);
        const e = this.renderer.view;
        e.addEventListener !== void 0 &&
          (e.addEventListener("webglcontextlost", this.handleContextLost, !1),
          e.addEventListener(
            "webglcontextrestored",
            this.handleContextRestored,
            !1
          ));
      }
      initFromOptions(t) {
        const e = this.createContext(this.renderer.view, t);
        this.initFromContext(e);
      }
      createContext(t, e) {
        let s;
        if ((N.PREFER_ENV >= es.WEBGL2 && (s = t.getContext("webgl2", e)), s))
          this.webGLVersion = 2;
        else if (
          ((this.webGLVersion = 1),
          (s =
            t.getContext("webgl", e) || t.getContext("experimental-webgl", e)),
          !s)
        )
          throw new Error(
            "This browser does not support WebGL. Try using the canvas renderer"
          );
        return (this.gl = s), this.getExtensions(), this.gl;
      }
      getExtensions() {
        const { gl: t } = this,
          e = {
            loseContext: t.getExtension("WEBGL_lose_context"),
            anisotropicFiltering: t.getExtension(
              "EXT_texture_filter_anisotropic"
            ),
            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
            s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
            s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
            etc: t.getExtension("WEBGL_compressed_texture_etc"),
            etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
            pvrtc:
              t.getExtension("WEBGL_compressed_texture_pvrtc") ||
              t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            atc: t.getExtension("WEBGL_compressed_texture_atc"),
            astc: t.getExtension("WEBGL_compressed_texture_astc"),
          };
        this.webGLVersion === 1
          ? Object.assign(this.extensions, e, {
              drawBuffers: t.getExtension("WEBGL_draw_buffers"),
              depthTexture: t.getExtension("WEBGL_depth_texture"),
              vertexArrayObject:
                t.getExtension("OES_vertex_array_object") ||
                t.getExtension("MOZ_OES_vertex_array_object") ||
                t.getExtension("WEBKIT_OES_vertex_array_object"),
              uint32ElementIndex: t.getExtension("OES_element_index_uint"),
              floatTexture: t.getExtension("OES_texture_float"),
              floatTextureLinear: t.getExtension("OES_texture_float_linear"),
              textureHalfFloat: t.getExtension("OES_texture_half_float"),
              textureHalfFloatLinear: t.getExtension(
                "OES_texture_half_float_linear"
              ),
            })
          : this.webGLVersion === 2 &&
            Object.assign(this.extensions, e, {
              colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
            });
      }
      handleContextLost(t) {
        t.preventDefault(),
          setTimeout(() => {
            this.gl.isContextLost() &&
              this.extensions.loseContext &&
              this.extensions.loseContext.restoreContext();
          }, 0);
      }
      handleContextRestored() {
        this.renderer.runners.contextChange.emit(this.gl);
      }
      destroy() {
        const t = this.renderer.view;
        (this.renderer = null),
          t.removeEventListener !== void 0 &&
            (t.removeEventListener("webglcontextlost", this.handleContextLost),
            t.removeEventListener(
              "webglcontextrestored",
              this.handleContextRestored
            )),
          this.gl.useProgram(null),
          this.extensions.loseContext &&
            this.extensions.loseContext.loseContext();
      }
      postrender() {
        this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
      }
      validateContext(t) {
        const e = t.getContextAttributes(),
          s =
            "WebGL2RenderingContext" in globalThis &&
            t instanceof globalThis.WebGL2RenderingContext;
        s && (this.webGLVersion = 2),
          e &&
            !e.stencil &&
            console.warn(
              "Provided WebGL context does not have a stencil buffer, masks may not render correctly"
            );
        const i = s || !!t.getExtension("OES_element_index_uint");
        (this.supports.uint32Indices = i),
          i ||
            console.warn(
              "Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly"
            );
      }
    }
    (Ws.defaultOptions = {
      context: null,
      antialias: !1,
      premultipliedAlpha: !0,
      preserveDrawingBuffer: !1,
      powerPreference: "default",
    }),
      (Ws.extension = { type: M.RendererSystem, name: "context" }),
      k.add(Ws);
    class lr {
      constructor(t, e) {
        if (
          ((this.width = Math.round(t)),
          (this.height = Math.round(e)),
          !this.width || !this.height)
        )
          throw new Error("Framebuffer width or height is zero");
        (this.stencil = !1),
          (this.depth = !1),
          (this.dirtyId = 0),
          (this.dirtyFormat = 0),
          (this.dirtySize = 0),
          (this.depthTexture = null),
          (this.colorTextures = []),
          (this.glFramebuffers = {}),
          (this.disposeRunner = new Dt("disposeFramebuffer")),
          (this.multisample = ht.NONE);
      }
      get colorTexture() {
        return this.colorTextures[0];
      }
      addColorTexture(t = 0, e) {
        return (
          (this.colorTextures[t] =
            e ||
            new $(null, {
              scaleMode: me.NEAREST,
              resolution: 1,
              mipmap: Qt.OFF,
              width: this.width,
              height: this.height,
            })),
          this.dirtyId++,
          this.dirtyFormat++,
          this
        );
      }
      addDepthTexture(t) {
        return (
          (this.depthTexture =
            t ||
            new $(null, {
              scaleMode: me.NEAREST,
              resolution: 1,
              width: this.width,
              height: this.height,
              mipmap: Qt.OFF,
              format: C.DEPTH_COMPONENT,
              type: O.UNSIGNED_SHORT,
            })),
          this.dirtyId++,
          this.dirtyFormat++,
          this
        );
      }
      enableDepth() {
        return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
      }
      enableStencil() {
        return (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this;
      }
      resize(t, e) {
        if (((t = Math.round(t)), (e = Math.round(e)), !t || !e))
          throw new Error("Framebuffer width and height must not be zero");
        if (!(t === this.width && e === this.height)) {
          (this.width = t), (this.height = e), this.dirtyId++, this.dirtySize++;
          for (let s = 0; s < this.colorTextures.length; s++) {
            const i = this.colorTextures[s],
              n = i.resolution;
            i.setSize(t / n, e / n);
          }
          if (this.depthTexture) {
            const s = this.depthTexture.resolution;
            this.depthTexture.setSize(t / s, e / s);
          }
        }
      }
      dispose() {
        this.disposeRunner.emit(this, !1);
      }
      destroyDepthTexture() {
        this.depthTexture &&
          (this.depthTexture.destroy(),
          (this.depthTexture = null),
          ++this.dirtyId,
          ++this.dirtyFormat);
      }
    }
    class On extends $ {
      constructor(t = {}) {
        if (typeof t == "number") {
          const e = arguments[0],
            s = arguments[1],
            i = arguments[2],
            n = arguments[3];
          t = { width: e, height: s, scaleMode: i, resolution: n };
        }
        (t.width = t.width ?? 100),
          (t.height = t.height ?? 100),
          t.multisample ?? (t.multisample = ht.NONE),
          super(null, t),
          (this.mipmap = Qt.OFF),
          (this.valid = !0),
          (this._clear = new Q([0, 0, 0, 0])),
          (this.framebuffer = new lr(
            this.realWidth,
            this.realHeight
          ).addColorTexture(0, this)),
          (this.framebuffer.multisample = t.multisample),
          (this.maskStack = []),
          (this.filterStack = [{}]);
      }
      set clearColor(t) {
        this._clear.setValue(t);
      }
      get clearColor() {
        return this._clear.value;
      }
      get clear() {
        return this._clear;
      }
      get multisample() {
        return this.framebuffer.multisample;
      }
      set multisample(t) {
        this.framebuffer.multisample = t;
      }
      resize(t, e) {
        this.framebuffer.resize(t * this.resolution, e * this.resolution),
          this.setRealSize(this.framebuffer.width, this.framebuffer.height);
      }
      dispose() {
        this.framebuffer.dispose(), super.dispose();
      }
      destroy() {
        super.destroy(),
          this.framebuffer.destroyDepthTexture(),
          (this.framebuffer = null);
      }
    }
    class ae extends os {
      constructor(t) {
        const e = t,
          s = e.naturalWidth || e.videoWidth || e.width,
          i = e.naturalHeight || e.videoHeight || e.height;
        super(s, i), (this.source = t), (this.noSubImage = !1);
      }
      static crossOrigin(t, e, s) {
        s === void 0 && !e.startsWith("data:")
          ? (t.crossOrigin = _h(e))
          : s !== !1 &&
            (t.crossOrigin = typeof s == "string" ? s : "anonymous");
      }
      upload(t, e, s, i) {
        const n = t.gl,
          a = e.realWidth,
          o = e.realHeight;
        if (
          ((i = i || this.source),
          typeof HTMLImageElement < "u" && i instanceof HTMLImageElement)
        ) {
          if (!i.complete || i.naturalWidth === 0) return !1;
        } else if (
          typeof HTMLVideoElement < "u" &&
          i instanceof HTMLVideoElement &&
          i.readyState <= 1
        )
          return !1;
        return (
          n.pixelStorei(
            n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            e.alphaMode === Et.UNPACK
          ),
          !this.noSubImage &&
          e.target === n.TEXTURE_2D &&
          s.width === a &&
          s.height === o
            ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, s.type, i)
            : ((s.width = a),
              (s.height = o),
              n.texImage2D(e.target, 0, s.internalFormat, e.format, s.type, i)),
          !0
        );
      }
      update() {
        if (this.destroyed) return;
        const t = this.source,
          e = t.naturalWidth || t.videoWidth || t.width,
          s = t.naturalHeight || t.videoHeight || t.height;
        this.resize(e, s), super.update();
      }
      dispose() {
        this.source = null;
      }
    }
    class Fn extends ae {
      constructor(t, e) {
        if (((e = e || {}), typeof t == "string")) {
          const s = new Image();
          ae.crossOrigin(s, t, e.crossorigin), (s.src = t), (t = s);
        }
        super(t),
          !t.complete &&
            this._width &&
            this._height &&
            ((this._width = 0), (this._height = 0)),
          (this.url = t.src),
          (this._process = null),
          (this.preserveBitmap = !1),
          (this.createBitmap =
            (e.createBitmap ?? N.CREATE_IMAGE_BITMAP) &&
            !!globalThis.createImageBitmap),
          (this.alphaMode =
            typeof e.alphaMode == "number" ? e.alphaMode : null),
          (this.bitmap = null),
          (this._load = null),
          e.autoLoad !== !1 && this.load();
      }
      load(t) {
        return this._load
          ? this._load
          : (t !== void 0 && (this.createBitmap = t),
            (this._load = new Promise((e, s) => {
              const i = this.source;
              this.url = i.src;
              const n = () => {
                this.destroyed ||
                  ((i.onload = null),
                  (i.onerror = null),
                  this.update(),
                  (this._load = null),
                  this.createBitmap ? e(this.process()) : e(this));
              };
              i.complete && i.src
                ? n()
                : ((i.onload = n),
                  (i.onerror = (a) => {
                    s(a), this.onError.emit(a);
                  }));
            })),
            this._load);
      }
      process() {
        const t = this.source;
        if (this._process !== null) return this._process;
        if (this.bitmap !== null || !globalThis.createImageBitmap)
          return Promise.resolve(this);
        const e = globalThis.createImageBitmap,
          s = !t.crossOrigin || t.crossOrigin === "anonymous";
        return (
          (this._process = fetch(t.src, { mode: s ? "cors" : "no-cors" })
            .then((i) => i.blob())
            .then((i) =>
              e(i, 0, 0, t.width, t.height, {
                premultiplyAlpha:
                  this.alphaMode === null || this.alphaMode === Et.UNPACK
                    ? "premultiply"
                    : "none",
              })
            )
            .then((i) =>
              this.destroyed
                ? Promise.reject()
                : ((this.bitmap = i),
                  this.update(),
                  (this._process = null),
                  Promise.resolve(this))
            )),
          this._process
        );
      }
      upload(t, e, s) {
        if (
          (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
          !this.createBitmap)
        )
          return super.upload(t, e, s);
        if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
        if ((super.upload(t, e, s, this.bitmap), !this.preserveBitmap)) {
          let i = !0;
          const n = e._glTextures;
          for (const a in n) {
            const o = n[a];
            if (o !== s && o.dirtyId !== e.dirtyId) {
              i = !1;
              break;
            }
          }
          i && (this.bitmap.close && this.bitmap.close(), (this.bitmap = null));
        }
        return !0;
      }
      dispose() {
        (this.source.onload = null),
          (this.source.onerror = null),
          super.dispose(),
          this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
          (this._process = null),
          (this._load = null);
      }
      static test(t) {
        return (
          typeof HTMLImageElement < "u" &&
          (typeof t == "string" || t instanceof HTMLImageElement)
        );
      }
    }
    class ur {
      constructor() {
        (this.x0 = 0),
          (this.y0 = 0),
          (this.x1 = 1),
          (this.y1 = 0),
          (this.x2 = 1),
          (this.y2 = 1),
          (this.x3 = 0),
          (this.y3 = 1),
          (this.uvsFloat32 = new Float32Array(8));
      }
      set(t, e, s) {
        const i = e.width,
          n = e.height;
        if (s) {
          const a = t.width / 2 / i,
            o = t.height / 2 / n,
            h = t.x / i + a,
            l = t.y / n + o;
          (s = it.add(s, it.NW)),
            (this.x0 = h + a * it.uX(s)),
            (this.y0 = l + o * it.uY(s)),
            (s = it.add(s, 2)),
            (this.x1 = h + a * it.uX(s)),
            (this.y1 = l + o * it.uY(s)),
            (s = it.add(s, 2)),
            (this.x2 = h + a * it.uX(s)),
            (this.y2 = l + o * it.uY(s)),
            (s = it.add(s, 2)),
            (this.x3 = h + a * it.uX(s)),
            (this.y3 = l + o * it.uY(s));
        } else
          (this.x0 = t.x / i),
            (this.y0 = t.y / n),
            (this.x1 = (t.x + t.width) / i),
            (this.y1 = t.y / n),
            (this.x2 = (t.x + t.width) / i),
            (this.y2 = (t.y + t.height) / n),
            (this.x3 = t.x / i),
            (this.y3 = (t.y + t.height) / n);
        (this.uvsFloat32[0] = this.x0),
          (this.uvsFloat32[1] = this.y0),
          (this.uvsFloat32[2] = this.x1),
          (this.uvsFloat32[3] = this.y1),
          (this.uvsFloat32[4] = this.x2),
          (this.uvsFloat32[5] = this.y2),
          (this.uvsFloat32[6] = this.x3),
          (this.uvsFloat32[7] = this.y3);
      }
    }
    ur.prototype.toString = function () {
      return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
    };
    const kn = new ur();
    function js(r) {
      (r.destroy = function () {}),
        (r.on = function () {}),
        (r.once = function () {}),
        (r.emit = function () {});
    }
    class L extends Ss {
      constructor(t, e, s, i, n, a, o) {
        if (
          (super(),
          (this.noFrame = !1),
          e || ((this.noFrame = !0), (e = new W(0, 0, 1, 1))),
          t instanceof L && (t = t.baseTexture),
          (this.baseTexture = t),
          (this._frame = e),
          (this.trim = i),
          (this.valid = !1),
          (this.destroyed = !1),
          (this._uvs = kn),
          (this.uvMatrix = null),
          (this.orig = s || e),
          (this._rotate = Number(n || 0)),
          n === !0)
        )
          this._rotate = 2;
        else if (this._rotate % 2 !== 0)
          throw new Error(
            "attempt to use diamond-shaped UVs. If you are sure, set rotation manually"
          );
        (this.defaultAnchor = a ? new q(a.x, a.y) : new q(0, 0)),
          (this.defaultBorders = o),
          (this._updateID = 0),
          (this.textureCacheIds = []),
          t.valid
            ? this.noFrame
              ? t.valid && this.onBaseTextureUpdated(t)
              : (this.frame = e)
            : t.once("loaded", this.onBaseTextureUpdated, this),
          this.noFrame && t.on("update", this.onBaseTextureUpdated, this);
      }
      update() {
        this.baseTexture.resource && this.baseTexture.resource.update();
      }
      onBaseTextureUpdated(t) {
        if (this.noFrame) {
          if (!this.baseTexture.valid) return;
          (this._frame.width = t.width),
            (this._frame.height = t.height),
            (this.valid = !0),
            this.updateUvs();
        } else this.frame = this._frame;
        this.emit("update", this);
      }
      destroy(t) {
        if (this.baseTexture) {
          if (t) {
            const { resource: e } = this.baseTexture;
            e != null && e.url && Ht[e.url] && L.removeFromCache(e.url),
              this.baseTexture.destroy();
          }
          this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
            this.baseTexture.off("update", this.onBaseTextureUpdated, this),
            (this.baseTexture = null);
        }
        (this._frame = null),
          (this._uvs = null),
          (this.trim = null),
          (this.orig = null),
          (this.valid = !1),
          L.removeFromCache(this),
          (this.textureCacheIds = null),
          (this.destroyed = !0),
          this.emit("destroyed", this),
          this.removeAllListeners();
      }
      clone() {
        var i;
        const t = this._frame.clone(),
          e = this._frame === this.orig ? t : this.orig.clone(),
          s = new L(
            this.baseTexture,
            !this.noFrame && t,
            e,
            (i = this.trim) == null ? void 0 : i.clone(),
            this.rotate,
            this.defaultAnchor,
            this.defaultBorders
          );
        return this.noFrame && (s._frame = t), s;
      }
      updateUvs() {
        this._uvs === kn && (this._uvs = new ur()),
          this._uvs.set(this._frame, this.baseTexture, this.rotate),
          this._updateID++;
      }
      static from(t, e = {}, s = N.STRICT_TEXTURE_CACHE) {
        const i = typeof t == "string";
        let n = null;
        if (i) n = t;
        else if (t instanceof $) {
          if (!t.cacheId) {
            const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
            (t.cacheId = `${o}-${_e()}`), $.addToCache(t, t.cacheId);
          }
          n = t.cacheId;
        } else {
          if (!t._pixiId) {
            const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
            t._pixiId = `${o}_${_e()}`;
          }
          n = t._pixiId;
        }
        let a = Ht[n];
        if (i && s && !a)
          throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
        return (
          !a && !(t instanceof $)
            ? (e.resolution || (e.resolution = Yt(t)),
              (a = new L(new $(t, e))),
              (a.baseTexture.cacheId = n),
              $.addToCache(a.baseTexture, n),
              L.addToCache(a, n))
            : !a && t instanceof $ && ((a = new L(t)), L.addToCache(a, n)),
          a
        );
      }
      static fromURL(t, e) {
        const s = Object.assign(
            { autoLoad: !1 },
            e == null ? void 0 : e.resourceOptions
          ),
          i = L.from(t, Object.assign({ resourceOptions: s }, e), !1),
          n = i.baseTexture.resource;
        return i.baseTexture.valid
          ? Promise.resolve(i)
          : n.load().then(() => Promise.resolve(i));
      }
      static fromBuffer(t, e, s, i) {
        return new L($.fromBuffer(t, e, s, i));
      }
      static fromLoader(t, e, s, i) {
        const n = new $(
            t,
            Object.assign(
              { scaleMode: $.defaultOptions.scaleMode, resolution: Yt(e) },
              i
            )
          ),
          { resource: a } = n;
        a instanceof Fn && (a.url = e);
        const o = new L(n);
        return (
          s || (s = e),
          $.addToCache(o.baseTexture, s),
          L.addToCache(o, s),
          s !== e && ($.addToCache(o.baseTexture, e), L.addToCache(o, e)),
          o.baseTexture.valid
            ? Promise.resolve(o)
            : new Promise((h) => {
                o.baseTexture.once("loaded", () => h(o));
              })
        );
      }
      static addToCache(t, e) {
        e &&
          (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
          Ht[e] &&
            Ht[e] !== t &&
            console.warn(
              `Texture added to the cache with an id [${e}] that already had an entry`
            ),
          (Ht[e] = t));
      }
      static removeFromCache(t) {
        if (typeof t == "string") {
          const e = Ht[t];
          if (e) {
            const s = e.textureCacheIds.indexOf(t);
            return s > -1 && e.textureCacheIds.splice(s, 1), delete Ht[t], e;
          }
        } else if (t != null && t.textureCacheIds) {
          for (let e = 0; e < t.textureCacheIds.length; ++e)
            Ht[t.textureCacheIds[e]] === t && delete Ht[t.textureCacheIds[e]];
          return (t.textureCacheIds.length = 0), t;
        }
        return null;
      }
      get resolution() {
        return this.baseTexture.resolution;
      }
      get frame() {
        return this._frame;
      }
      set frame(t) {
        (this._frame = t), (this.noFrame = !1);
        const { x: e, y: s, width: i, height: n } = t,
          a = e + i > this.baseTexture.width,
          o = s + n > this.baseTexture.height;
        if (a || o) {
          const h = a && o ? "and" : "or",
            l = `X: ${e} + ${i} = ${e + i} > ${this.baseTexture.width}`,
            u = `Y: ${s} + ${n} = ${s + n} > ${this.baseTexture.height}`;
          throw new Error(
            `Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${u}`
          );
        }
        (this.valid = i && n && this.baseTexture.valid),
          !this.trim && !this.rotate && (this.orig = t),
          this.valid && this.updateUvs();
      }
      get rotate() {
        return this._rotate;
      }
      set rotate(t) {
        (this._rotate = t), this.valid && this.updateUvs();
      }
      get width() {
        return this.orig.width;
      }
      get height() {
        return this.orig.height;
      }
      castToBaseTexture() {
        return this.baseTexture;
      }
      static get EMPTY() {
        return (
          L._EMPTY ||
            ((L._EMPTY = new L(new $())),
            js(L._EMPTY),
            js(L._EMPTY.baseTexture)),
          L._EMPTY
        );
      }
      static get WHITE() {
        if (!L._WHITE) {
          const t = N.ADAPTER.createCanvas(16, 16),
            e = t.getContext("2d");
          (t.width = 16),
            (t.height = 16),
            (e.fillStyle = "white"),
            e.fillRect(0, 0, 16, 16),
            (L._WHITE = new L($.from(t))),
            js(L._WHITE),
            js(L._WHITE.baseTexture);
        }
        return L._WHITE;
      }
    }
    class Ee extends L {
      constructor(t, e) {
        super(t, e),
          (this.valid = !0),
          (this.filterFrame = null),
          (this.filterPoolKey = null),
          this.updateUvs();
      }
      get framebuffer() {
        return this.baseTexture.framebuffer;
      }
      get multisample() {
        return this.framebuffer.multisample;
      }
      set multisample(t) {
        this.framebuffer.multisample = t;
      }
      resize(t, e, s = !0) {
        const i = this.baseTexture.resolution,
          n = Math.round(t * i) / i,
          a = Math.round(e * i) / i;
        (this.valid = n > 0 && a > 0),
          (this._frame.width = this.orig.width = n),
          (this._frame.height = this.orig.height = a),
          s && this.baseTexture.resize(n, a),
          this.updateUvs();
      }
      setResolution(t) {
        const { baseTexture: e } = this;
        e.resolution !== t &&
          (e.setResolution(t), this.resize(e.width, e.height, !1));
      }
      static create(t) {
        return new Ee(new On(t));
      }
    }
    class Un {
      constructor(t) {
        (this.texturePool = {}),
          (this.textureOptions = t || {}),
          (this.enableFullScreen = !1),
          (this._pixelsWidth = 0),
          (this._pixelsHeight = 0);
      }
      createTexture(t, e, s = ht.NONE) {
        const i = new On(
          Object.assign(
            { width: t, height: e, resolution: 1, multisample: s },
            this.textureOptions
          )
        );
        return new Ee(i);
      }
      getOptimalTexture(t, e, s = 1, i = ht.NONE) {
        let n;
        (t = Math.max(Math.ceil(t * s - 1e-6), 1)),
          (e = Math.max(Math.ceil(e * s - 1e-6), 1)),
          !this.enableFullScreen ||
          t !== this._pixelsWidth ||
          e !== this._pixelsHeight
            ? ((t = Bs(t)),
              (e = Bs(e)),
              (n = (((t & 65535) << 16) | (e & 65535)) >>> 0),
              i > 1 && (n += i * 4294967296))
            : (n = i > 1 ? -i : -1),
          this.texturePool[n] || (this.texturePool[n] = []);
        let a = this.texturePool[n].pop();
        return (
          a || (a = this.createTexture(t, e, i)),
          (a.filterPoolKey = n),
          a.setResolution(s),
          a
        );
      }
      getFilterTexture(t, e, s) {
        const i = this.getOptimalTexture(
          t.width,
          t.height,
          e || t.resolution,
          s || ht.NONE
        );
        return (i.filterFrame = t.filterFrame), i;
      }
      returnTexture(t) {
        const e = t.filterPoolKey;
        (t.filterFrame = null), this.texturePool[e].push(t);
      }
      returnFilterTexture(t) {
        this.returnTexture(t);
      }
      clear(t) {
        if (((t = t !== !1), t))
          for (const e in this.texturePool) {
            const s = this.texturePool[e];
            if (s) for (let i = 0; i < s.length; i++) s[i].destroy(!0);
          }
        this.texturePool = {};
      }
      setScreenSize(t) {
        if (
          !(t.width === this._pixelsWidth && t.height === this._pixelsHeight)
        ) {
          this.enableFullScreen = t.width > 0 && t.height > 0;
          for (const e in this.texturePool) {
            if (!(Number(e) < 0)) continue;
            const s = this.texturePool[e];
            if (s) for (let i = 0; i < s.length; i++) s[i].destroy(!0);
            this.texturePool[e] = [];
          }
          (this._pixelsWidth = t.width), (this._pixelsHeight = t.height);
        }
      }
    }
    Un.SCREEN_KEY = -1;
    class Zh extends qt {
      constructor() {
        super(),
          this.addAttribute(
            "aVertexPosition",
            new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
          ).addIndex([0, 1, 3, 2]);
      }
    }
    class Gn extends qt {
      constructor() {
        super(),
          (this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
          (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
          (this.vertexBuffer = new st(this.vertices)),
          (this.uvBuffer = new st(this.uvs)),
          this.addAttribute("aVertexPosition", this.vertexBuffer)
            .addAttribute("aTextureCoord", this.uvBuffer)
            .addIndex([0, 1, 2, 0, 2, 3]);
      }
      map(t, e) {
        let s = 0,
          i = 0;
        return (
          (this.uvs[0] = s),
          (this.uvs[1] = i),
          (this.uvs[2] = s + e.width / t.width),
          (this.uvs[3] = i),
          (this.uvs[4] = s + e.width / t.width),
          (this.uvs[5] = i + e.height / t.height),
          (this.uvs[6] = s),
          (this.uvs[7] = i + e.height / t.height),
          (s = e.x),
          (i = e.y),
          (this.vertices[0] = s),
          (this.vertices[1] = i),
          (this.vertices[2] = s + e.width),
          (this.vertices[3] = i),
          (this.vertices[4] = s + e.width),
          (this.vertices[5] = i + e.height),
          (this.vertices[6] = s),
          (this.vertices[7] = i + e.height),
          this.invalidate(),
          this
        );
      }
      invalidate() {
        return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
      }
    }
    class Qh {
      constructor() {
        (this.renderTexture = null),
          (this.target = null),
          (this.legacy = !1),
          (this.resolution = 1),
          (this.multisample = ht.NONE),
          (this.sourceFrame = new W()),
          (this.destinationFrame = new W()),
          (this.bindingSourceFrame = new W()),
          (this.bindingDestinationFrame = new W()),
          (this.filters = []),
          (this.transform = null);
      }
      clear() {
        (this.target = null),
          (this.filters = null),
          (this.renderTexture = null);
      }
    }
    const Ys = [new q(), new q(), new q(), new q()],
      cr = new tt();
    class Hn {
      constructor(t) {
        (this.renderer = t),
          (this.defaultFilterStack = [{}]),
          (this.texturePool = new Un()),
          (this.statePool = []),
          (this.quad = new Zh()),
          (this.quadUv = new Gn()),
          (this.tempRect = new W()),
          (this.activeState = {}),
          (this.globalUniforms = new Bt(
            {
              outputFrame: new W(),
              inputSize: new Float32Array(4),
              inputPixel: new Float32Array(4),
              inputClamp: new Float32Array(4),
              resolution: 1,
              filterArea: new Float32Array(4),
              filterClamp: new Float32Array(4),
            },
            !0
          )),
          (this.forceClear = !1),
          (this.useMaxPadding = !1);
      }
      init() {
        this.texturePool.setScreenSize(this.renderer.view);
      }
      push(t, e) {
        const s = this.renderer,
          i = this.defaultFilterStack,
          n = this.statePool.pop() || new Qh(),
          a = s.renderTexture;
        let o, h;
        if (a.current) {
          const g = a.current;
          (o = g.resolution), (h = g.multisample);
        } else (o = s.resolution), (h = s.multisample);
        let l = e[0].resolution || o,
          u = e[0].multisample ?? h,
          c = e[0].padding,
          d = e[0].autoFit,
          p = e[0].legacy ?? !0;
        for (let g = 1; g < e.length; g++) {
          const _ = e[g];
          (l = Math.min(l, _.resolution || o)),
            (u = Math.min(u, _.multisample ?? h)),
            (c = this.useMaxPadding ? Math.max(c, _.padding) : c + _.padding),
            (d = d && _.autoFit),
            (p = p || (_.legacy ?? !0));
        }
        i.length === 1 &&
          (this.defaultFilterStack[0].renderTexture = a.current),
          i.push(n),
          (n.resolution = l),
          (n.multisample = u),
          (n.legacy = p),
          (n.target = t),
          n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
          n.sourceFrame.pad(c);
        const f = this.tempRect.copyFrom(a.sourceFrame);
        s.projection.transform &&
          this.transformAABB(cr.copyFrom(s.projection.transform).invert(), f),
          d
            ? (n.sourceFrame.fit(f),
              (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) &&
                ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)))
            : n.sourceFrame.intersects(f) ||
              ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)),
          this.roundFrame(
            n.sourceFrame,
            a.current ? a.current.resolution : s.resolution,
            a.sourceFrame,
            a.destinationFrame,
            s.projection.transform
          ),
          (n.renderTexture = this.getOptimalFilterTexture(
            n.sourceFrame.width,
            n.sourceFrame.height,
            l,
            u
          )),
          (n.filters = e),
          (n.destinationFrame.width = n.renderTexture.width),
          (n.destinationFrame.height = n.renderTexture.height);
        const m = this.tempRect;
        (m.x = 0),
          (m.y = 0),
          (m.width = n.sourceFrame.width),
          (m.height = n.sourceFrame.height),
          (n.renderTexture.filterFrame = n.sourceFrame),
          n.bindingSourceFrame.copyFrom(a.sourceFrame),
          n.bindingDestinationFrame.copyFrom(a.destinationFrame),
          (n.transform = s.projection.transform),
          (s.projection.transform = null),
          a.bind(n.renderTexture, n.sourceFrame, m),
          s.framebuffer.clear(0, 0, 0, 0);
      }
      pop() {
        const t = this.defaultFilterStack,
          e = t.pop(),
          s = e.filters;
        this.activeState = e;
        const i = this.globalUniforms.uniforms;
        (i.outputFrame = e.sourceFrame), (i.resolution = e.resolution);
        const n = i.inputSize,
          a = i.inputPixel,
          o = i.inputClamp;
        if (
          ((n[0] = e.destinationFrame.width),
          (n[1] = e.destinationFrame.height),
          (n[2] = 1 / n[0]),
          (n[3] = 1 / n[1]),
          (a[0] = Math.round(n[0] * e.resolution)),
          (a[1] = Math.round(n[1] * e.resolution)),
          (a[2] = 1 / a[0]),
          (a[3] = 1 / a[1]),
          (o[0] = 0.5 * a[2]),
          (o[1] = 0.5 * a[3]),
          (o[2] = e.sourceFrame.width * n[2] - 0.5 * a[2]),
          (o[3] = e.sourceFrame.height * n[3] - 0.5 * a[3]),
          e.legacy)
        ) {
          const l = i.filterArea;
          (l[0] = e.destinationFrame.width),
            (l[1] = e.destinationFrame.height),
            (l[2] = e.sourceFrame.x),
            (l[3] = e.sourceFrame.y),
            (i.filterClamp = i.inputClamp);
        }
        this.globalUniforms.update();
        const h = t[t.length - 1];
        if ((this.renderer.framebuffer.blit(), s.length === 1))
          s[0].apply(this, e.renderTexture, h.renderTexture, se.BLEND, e),
            this.returnFilterTexture(e.renderTexture);
        else {
          let l = e.renderTexture,
            u = this.getOptimalFilterTexture(l.width, l.height, e.resolution);
          u.filterFrame = l.filterFrame;
          let c = 0;
          for (c = 0; c < s.length - 1; ++c) {
            c === 1 &&
              e.multisample > 1 &&
              ((u = this.getOptimalFilterTexture(
                l.width,
                l.height,
                e.resolution
              )),
              (u.filterFrame = l.filterFrame)),
              s[c].apply(this, l, u, se.CLEAR, e);
            const d = l;
            (l = u), (u = d);
          }
          s[c].apply(this, l, h.renderTexture, se.BLEND, e),
            c > 1 &&
              e.multisample > 1 &&
              this.returnFilterTexture(e.renderTexture),
            this.returnFilterTexture(l),
            this.returnFilterTexture(u);
        }
        e.clear(), this.statePool.push(e);
      }
      bindAndClear(t, e = se.CLEAR) {
        const { renderTexture: s, state: i } = this.renderer;
        if (
          (t ===
          this.defaultFilterStack[this.defaultFilterStack.length - 1]
            .renderTexture
            ? (this.renderer.projection.transform = this.activeState.transform)
            : (this.renderer.projection.transform = null),
          t == null ? void 0 : t.filterFrame)
        ) {
          const a = this.tempRect;
          (a.x = 0),
            (a.y = 0),
            (a.width = t.filterFrame.width),
            (a.height = t.filterFrame.height),
            s.bind(t, t.filterFrame, a);
        } else
          t !==
          this.defaultFilterStack[this.defaultFilterStack.length - 1]
            .renderTexture
            ? s.bind(t)
            : this.renderer.renderTexture.bind(
                t,
                this.activeState.bindingSourceFrame,
                this.activeState.bindingDestinationFrame
              );
        const n = i.stateId & 1 || this.forceClear;
        (e === se.CLEAR || (e === se.BLIT && n)) &&
          this.renderer.framebuffer.clear(0, 0, 0, 0);
      }
      applyFilter(t, e, s, i) {
        const n = this.renderer;
        n.state.set(t.state),
          this.bindAndClear(s, i),
          (t.uniforms.uSampler = e),
          (t.uniforms.filterGlobals = this.globalUniforms),
          n.shader.bind(t),
          (t.legacy = !!t.program.attributeData.aTextureCoord),
          t.legacy
            ? (this.quadUv.map(e._frame, e.filterFrame),
              n.geometry.bind(this.quadUv),
              n.geometry.draw(Wt.TRIANGLES))
            : (n.geometry.bind(this.quad), n.geometry.draw(Wt.TRIANGLE_STRIP));
      }
      calculateSpriteMatrix(t, e) {
        const { sourceFrame: s, destinationFrame: i } = this.activeState,
          { orig: n } = e._texture,
          a = t.set(i.width, 0, 0, i.height, s.x, s.y),
          o = e.worldTransform.copyTo(tt.TEMP_MATRIX);
        return (
          o.invert(),
          a.prepend(o),
          a.scale(1 / n.width, 1 / n.height),
          a.translate(e.anchor.x, e.anchor.y),
          a
        );
      }
      destroy() {
        (this.renderer = null), this.texturePool.clear(!1);
      }
      getOptimalFilterTexture(t, e, s = 1, i = ht.NONE) {
        return this.texturePool.getOptimalTexture(t, e, s, i);
      }
      getFilterTexture(t, e, s) {
        if (typeof t == "number") {
          const n = t;
          (t = e), (e = n);
        }
        t = t || this.activeState.renderTexture;
        const i = this.texturePool.getOptimalTexture(
          t.width,
          t.height,
          e || t.resolution,
          s || ht.NONE
        );
        return (i.filterFrame = t.filterFrame), i;
      }
      returnFilterTexture(t) {
        this.texturePool.returnTexture(t);
      }
      emptyPool() {
        this.texturePool.clear(!0);
      }
      resize() {
        this.texturePool.setScreenSize(this.renderer.view);
      }
      transformAABB(t, e) {
        const s = Ys[0],
          i = Ys[1],
          n = Ys[2],
          a = Ys[3];
        s.set(e.left, e.top),
          i.set(e.left, e.bottom),
          n.set(e.right, e.top),
          a.set(e.right, e.bottom),
          t.apply(s, s),
          t.apply(i, i),
          t.apply(n, n),
          t.apply(a, a);
        const o = Math.min(s.x, i.x, n.x, a.x),
          h = Math.min(s.y, i.y, n.y, a.y),
          l = Math.max(s.x, i.x, n.x, a.x),
          u = Math.max(s.y, i.y, n.y, a.y);
        (e.x = o), (e.y = h), (e.width = l - o), (e.height = u - h);
      }
      roundFrame(t, e, s, i, n) {
        if (!(t.width <= 0 || t.height <= 0 || s.width <= 0 || s.height <= 0)) {
          if (n) {
            const { a, b: o, c: h, d: l } = n;
            if (
              (Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4) &&
              (Math.abs(a) > 1e-4 || Math.abs(l) > 1e-4)
            )
              return;
          }
          (n = n ? cr.copyFrom(n) : cr.identity()),
            n
              .translate(-s.x, -s.y)
              .scale(i.width / s.width, i.height / s.height)
              .translate(i.x, i.y),
            this.transformAABB(n, t),
            t.ceil(e),
            this.transformAABB(n.invert(), t);
        }
      }
    }
    (Hn.extension = { type: M.RendererSystem, name: "filter" }), k.add(Hn);
    class tl {
      constructor(t) {
        (this.framebuffer = t),
          (this.stencil = null),
          (this.dirtyId = -1),
          (this.dirtyFormat = -1),
          (this.dirtySize = -1),
          (this.multisample = ht.NONE),
          (this.msaaBuffer = null),
          (this.blitFramebuffer = null),
          (this.mipLevel = 0);
      }
    }
    const el = new W();
    class zn {
      constructor(t) {
        (this.renderer = t),
          (this.managedFramebuffers = []),
          (this.unknownFramebuffer = new lr(10, 10)),
          (this.msaaSamples = null);
      }
      contextChange() {
        this.disposeAll(!0);
        const t = (this.gl = this.renderer.gl);
        if (
          ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
          (this.current = this.unknownFramebuffer),
          (this.viewport = new W()),
          (this.hasMRT = !0),
          (this.writeDepthTexture = !0),
          this.renderer.context.webGLVersion === 1)
        ) {
          let e = this.renderer.context.extensions.drawBuffers,
            s = this.renderer.context.extensions.depthTexture;
          N.PREFER_ENV === es.WEBGL_LEGACY && ((e = null), (s = null)),
            e
              ? (t.drawBuffers = (i) => e.drawBuffersWEBGL(i))
              : ((this.hasMRT = !1), (t.drawBuffers = () => {})),
            s || (this.writeDepthTexture = !1);
        } else
          this.msaaSamples = t.getInternalformatParameter(
            t.RENDERBUFFER,
            t.RGBA8,
            t.SAMPLES
          );
      }
      bind(t, e, s = 0) {
        const { gl: i } = this;
        if (t) {
          const n =
            t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
          this.current !== t &&
            ((this.current = t),
            i.bindFramebuffer(i.FRAMEBUFFER, n.framebuffer)),
            n.mipLevel !== s &&
              (t.dirtyId++, t.dirtyFormat++, (n.mipLevel = s)),
            n.dirtyId !== t.dirtyId &&
              ((n.dirtyId = t.dirtyId),
              n.dirtyFormat !== t.dirtyFormat
                ? ((n.dirtyFormat = t.dirtyFormat),
                  (n.dirtySize = t.dirtySize),
                  this.updateFramebuffer(t, s))
                : n.dirtySize !== t.dirtySize &&
                  ((n.dirtySize = t.dirtySize), this.resizeFramebuffer(t)));
          for (let a = 0; a < t.colorTextures.length; a++) {
            const o = t.colorTextures[a];
            this.renderer.texture.unbind(o.parentTextureArray || o);
          }
          if (
            (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e)
          ) {
            const a = e.width >> s,
              o = e.height >> s,
              h = a / e.width;
            this.setViewport(e.x * h, e.y * h, a, o);
          } else {
            const a = t.width >> s,
              o = t.height >> s;
            this.setViewport(0, 0, a, o);
          }
        } else
          this.current &&
            ((this.current = null), i.bindFramebuffer(i.FRAMEBUFFER, null)),
            e
              ? this.setViewport(e.x, e.y, e.width, e.height)
              : this.setViewport(
                  0,
                  0,
                  this.renderer.width,
                  this.renderer.height
                );
      }
      setViewport(t, e, s, i) {
        const n = this.viewport;
        (t = Math.round(t)),
          (e = Math.round(e)),
          (s = Math.round(s)),
          (i = Math.round(i)),
          (n.width !== s || n.height !== i || n.x !== t || n.y !== e) &&
            ((n.x = t),
            (n.y = e),
            (n.width = s),
            (n.height = i),
            this.gl.viewport(t, e, s, i));
      }
      get size() {
        return this.current
          ? {
              x: 0,
              y: 0,
              width: this.current.width,
              height: this.current.height,
            }
          : {
              x: 0,
              y: 0,
              width: this.renderer.width,
              height: this.renderer.height,
            };
      }
      clear(t, e, s, i, n = Xo.COLOR | Xo.DEPTH) {
        const { gl: a } = this;
        a.clearColor(t, e, s, i), a.clear(n);
      }
      initFramebuffer(t) {
        const { gl: e } = this,
          s = new tl(e.createFramebuffer());
        return (
          (s.multisample = this.detectSamples(t.multisample)),
          (t.glFramebuffers[this.CONTEXT_UID] = s),
          this.managedFramebuffers.push(t),
          t.disposeRunner.add(this),
          s
        );
      }
      resizeFramebuffer(t) {
        const { gl: e } = this,
          s = t.glFramebuffers[this.CONTEXT_UID];
        if (s.stencil) {
          e.bindRenderbuffer(e.RENDERBUFFER, s.stencil);
          let a;
          this.renderer.context.webGLVersion === 1
            ? (a = e.DEPTH_STENCIL)
            : t.depth && t.stencil
            ? (a = e.DEPTH24_STENCIL8)
            : t.depth
            ? (a = e.DEPTH_COMPONENT24)
            : (a = e.STENCIL_INDEX8),
            s.msaaBuffer
              ? e.renderbufferStorageMultisample(
                  e.RENDERBUFFER,
                  s.multisample,
                  a,
                  t.width,
                  t.height
                )
              : e.renderbufferStorage(e.RENDERBUFFER, a, t.width, t.height);
        }
        const i = t.colorTextures;
        let n = i.length;
        e.drawBuffers || (n = Math.min(n, 1));
        for (let a = 0; a < n; a++) {
          const o = i[a],
            h = o.parentTextureArray || o;
          this.renderer.texture.bind(h, 0),
            a === 0 &&
              s.msaaBuffer &&
              (e.bindRenderbuffer(e.RENDERBUFFER, s.msaaBuffer),
              e.renderbufferStorageMultisample(
                e.RENDERBUFFER,
                s.multisample,
                h._glTextures[this.CONTEXT_UID].internalFormat,
                t.width,
                t.height
              ));
        }
        t.depthTexture &&
          this.writeDepthTexture &&
          this.renderer.texture.bind(t.depthTexture, 0);
      }
      updateFramebuffer(t, e) {
        const { gl: s } = this,
          i = t.glFramebuffers[this.CONTEXT_UID],
          n = t.colorTextures;
        let a = n.length;
        s.drawBuffers || (a = Math.min(a, 1)),
          i.multisample > 1 && this.canMultisampleFramebuffer(t)
            ? (i.msaaBuffer = i.msaaBuffer || s.createRenderbuffer())
            : i.msaaBuffer &&
              (s.deleteRenderbuffer(i.msaaBuffer),
              (i.msaaBuffer = null),
              i.blitFramebuffer &&
                (i.blitFramebuffer.dispose(), (i.blitFramebuffer = null)));
        const o = [];
        for (let h = 0; h < a; h++) {
          const l = n[h],
            u = l.parentTextureArray || l;
          this.renderer.texture.bind(u, 0),
            h === 0 && i.msaaBuffer
              ? (s.bindRenderbuffer(s.RENDERBUFFER, i.msaaBuffer),
                s.renderbufferStorageMultisample(
                  s.RENDERBUFFER,
                  i.multisample,
                  u._glTextures[this.CONTEXT_UID].internalFormat,
                  t.width,
                  t.height
                ),
                s.framebufferRenderbuffer(
                  s.FRAMEBUFFER,
                  s.COLOR_ATTACHMENT0,
                  s.RENDERBUFFER,
                  i.msaaBuffer
                ))
              : (s.framebufferTexture2D(
                  s.FRAMEBUFFER,
                  s.COLOR_ATTACHMENT0 + h,
                  l.target,
                  u._glTextures[this.CONTEXT_UID].texture,
                  e
                ),
                o.push(s.COLOR_ATTACHMENT0 + h));
        }
        if (
          (o.length > 1 && s.drawBuffers(o),
          t.depthTexture && this.writeDepthTexture)
        ) {
          const h = t.depthTexture;
          this.renderer.texture.bind(h, 0),
            s.framebufferTexture2D(
              s.FRAMEBUFFER,
              s.DEPTH_ATTACHMENT,
              s.TEXTURE_2D,
              h._glTextures[this.CONTEXT_UID].texture,
              e
            );
        }
        if (
          (t.stencil || t.depth) &&
          !(t.depthTexture && this.writeDepthTexture)
        ) {
          i.stencil = i.stencil || s.createRenderbuffer();
          let h, l;
          this.renderer.context.webGLVersion === 1
            ? ((h = s.DEPTH_STENCIL_ATTACHMENT), (l = s.DEPTH_STENCIL))
            : t.depth && t.stencil
            ? ((h = s.DEPTH_STENCIL_ATTACHMENT), (l = s.DEPTH24_STENCIL8))
            : t.depth
            ? ((h = s.DEPTH_ATTACHMENT), (l = s.DEPTH_COMPONENT24))
            : ((h = s.STENCIL_ATTACHMENT), (l = s.STENCIL_INDEX8)),
            s.bindRenderbuffer(s.RENDERBUFFER, i.stencil),
            i.msaaBuffer
              ? s.renderbufferStorageMultisample(
                  s.RENDERBUFFER,
                  i.multisample,
                  l,
                  t.width,
                  t.height
                )
              : s.renderbufferStorage(s.RENDERBUFFER, l, t.width, t.height),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              h,
              s.RENDERBUFFER,
              i.stencil
            );
        } else
          i.stencil && (s.deleteRenderbuffer(i.stencil), (i.stencil = null));
      }
      canMultisampleFramebuffer(t) {
        return (
          this.renderer.context.webGLVersion !== 1 &&
          t.colorTextures.length <= 1 &&
          !t.depthTexture
        );
      }
      detectSamples(t) {
        const { msaaSamples: e } = this;
        let s = ht.NONE;
        if (t <= 1 || e === null) return s;
        for (let i = 0; i < e.length; i++)
          if (e[i] <= t) {
            s = e[i];
            break;
          }
        return s === 1 && (s = ht.NONE), s;
      }
      blit(t, e, s) {
        const { current: i, renderer: n, gl: a, CONTEXT_UID: o } = this;
        if (n.context.webGLVersion !== 2 || !i) return;
        const h = i.glFramebuffers[o];
        if (!h) return;
        if (!t) {
          if (!h.msaaBuffer) return;
          const u = i.colorTextures[0];
          if (!u) return;
          h.blitFramebuffer ||
            ((h.blitFramebuffer = new lr(i.width, i.height)),
            h.blitFramebuffer.addColorTexture(0, u)),
            (t = h.blitFramebuffer),
            t.colorTextures[0] !== u &&
              ((t.colorTextures[0] = u), t.dirtyId++, t.dirtyFormat++),
            (t.width !== i.width || t.height !== i.height) &&
              ((t.width = i.width),
              (t.height = i.height),
              t.dirtyId++,
              t.dirtySize++);
        }
        e || ((e = el), (e.width = i.width), (e.height = i.height)),
          s || (s = e);
        const l = e.width === s.width && e.height === s.height;
        this.bind(t),
          a.bindFramebuffer(a.READ_FRAMEBUFFER, h.framebuffer),
          a.blitFramebuffer(
            e.left,
            e.top,
            e.right,
            e.bottom,
            s.left,
            s.top,
            s.right,
            s.bottom,
            a.COLOR_BUFFER_BIT,
            l ? a.NEAREST : a.LINEAR
          ),
          a.bindFramebuffer(
            a.READ_FRAMEBUFFER,
            t.glFramebuffers[this.CONTEXT_UID].framebuffer
          );
      }
      disposeFramebuffer(t, e) {
        const s = t.glFramebuffers[this.CONTEXT_UID],
          i = this.gl;
        if (!s) return;
        delete t.glFramebuffers[this.CONTEXT_UID];
        const n = this.managedFramebuffers.indexOf(t);
        n >= 0 && this.managedFramebuffers.splice(n, 1),
          t.disposeRunner.remove(this),
          e ||
            (i.deleteFramebuffer(s.framebuffer),
            s.msaaBuffer && i.deleteRenderbuffer(s.msaaBuffer),
            s.stencil && i.deleteRenderbuffer(s.stencil)),
          s.blitFramebuffer && this.disposeFramebuffer(s.blitFramebuffer, e);
      }
      disposeAll(t) {
        const e = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (let s = 0; s < e.length; s++) this.disposeFramebuffer(e[s], t);
      }
      forceStencil() {
        const t = this.current;
        if (!t) return;
        const e = t.glFramebuffers[this.CONTEXT_UID];
        if (!e || (e.stencil && t.stencil)) return;
        t.stencil = !0;
        const s = t.width,
          i = t.height,
          n = this.gl,
          a = (e.stencil = n.createRenderbuffer());
        n.bindRenderbuffer(n.RENDERBUFFER, a);
        let o, h;
        this.renderer.context.webGLVersion === 1
          ? ((o = n.DEPTH_STENCIL_ATTACHMENT), (h = n.DEPTH_STENCIL))
          : t.depth
          ? ((o = n.DEPTH_STENCIL_ATTACHMENT), (h = n.DEPTH24_STENCIL8))
          : ((o = n.STENCIL_ATTACHMENT), (h = n.STENCIL_INDEX8)),
          e.msaaBuffer
            ? n.renderbufferStorageMultisample(
                n.RENDERBUFFER,
                e.multisample,
                h,
                s,
                i
              )
            : n.renderbufferStorage(n.RENDERBUFFER, h, s, i),
          n.framebufferRenderbuffer(n.FRAMEBUFFER, o, n.RENDERBUFFER, a);
      }
      reset() {
        (this.current = this.unknownFramebuffer), (this.viewport = new W());
      }
      destroy() {
        this.renderer = null;
      }
    }
    (zn.extension = { type: M.RendererSystem, name: "framebuffer" }), k.add(zn);
    const dr = { 5126: 4, 5123: 2, 5121: 1 };
    class Xn {
      constructor(t) {
        (this.renderer = t),
          (this._activeGeometry = null),
          (this._activeVao = null),
          (this.hasVao = !0),
          (this.hasInstance = !0),
          (this.canUseUInt32ElementIndex = !1),
          (this.managedGeometries = {});
      }
      contextChange() {
        this.disposeAll(!0);
        const t = (this.gl = this.renderer.gl),
          e = this.renderer.context;
        if (
          ((this.CONTEXT_UID = this.renderer.CONTEXT_UID), e.webGLVersion !== 2)
        ) {
          let s = this.renderer.context.extensions.vertexArrayObject;
          N.PREFER_ENV === es.WEBGL_LEGACY && (s = null),
            s
              ? ((t.createVertexArray = () => s.createVertexArrayOES()),
                (t.bindVertexArray = (i) => s.bindVertexArrayOES(i)),
                (t.deleteVertexArray = (i) => s.deleteVertexArrayOES(i)))
              : ((this.hasVao = !1),
                (t.createVertexArray = () => null),
                (t.bindVertexArray = () => null),
                (t.deleteVertexArray = () => null));
        }
        if (e.webGLVersion !== 2) {
          const s = t.getExtension("ANGLE_instanced_arrays");
          s
            ? ((t.vertexAttribDivisor = (i, n) =>
                s.vertexAttribDivisorANGLE(i, n)),
              (t.drawElementsInstanced = (i, n, a, o, h) =>
                s.drawElementsInstancedANGLE(i, n, a, o, h)),
              (t.drawArraysInstanced = (i, n, a, o) =>
                s.drawArraysInstancedANGLE(i, n, a, o)))
            : (this.hasInstance = !1);
        }
        this.canUseUInt32ElementIndex =
          e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex;
      }
      bind(t, e) {
        e = e || this.renderer.shader.shader;
        const { gl: s } = this;
        let i = t.glVertexArrayObjects[this.CONTEXT_UID],
          n = !1;
        i ||
          ((this.managedGeometries[t.id] = t),
          t.disposeRunner.add(this),
          (t.glVertexArrayObjects[this.CONTEXT_UID] = i = {}),
          (n = !0));
        const a = i[e.program.id] || this.initGeometryVao(t, e, n);
        (this._activeGeometry = t),
          this._activeVao !== a &&
            ((this._activeVao = a),
            this.hasVao
              ? s.bindVertexArray(a)
              : this.activateVao(t, e.program)),
          this.updateBuffers();
      }
      reset() {
        this.unbind();
      }
      updateBuffers() {
        const t = this._activeGeometry,
          e = this.renderer.buffer;
        for (let s = 0; s < t.buffers.length; s++) {
          const i = t.buffers[s];
          e.update(i);
        }
      }
      checkCompatibility(t, e) {
        const s = t.attributes,
          i = e.attributeData;
        for (const n in i)
          if (!s[n])
            throw new Error(
              `shader and geometry incompatible, geometry missing the "${n}" attribute`
            );
      }
      getSignature(t, e) {
        const s = t.attributes,
          i = e.attributeData,
          n = ["g", t.id];
        for (const a in s) i[a] && n.push(a, i[a].location);
        return n.join("-");
      }
      initGeometryVao(t, e, s = !0) {
        const i = this.gl,
          n = this.CONTEXT_UID,
          a = this.renderer.buffer,
          o = e.program;
        o.glPrograms[n] || this.renderer.shader.generateProgram(e),
          this.checkCompatibility(t, o);
        const h = this.getSignature(t, o),
          l = t.glVertexArrayObjects[this.CONTEXT_UID];
        let u = l[h];
        if (u) return (l[o.id] = u), u;
        const c = t.buffers,
          d = t.attributes,
          p = {},
          f = {};
        for (const m in c) (p[m] = 0), (f[m] = 0);
        for (const m in d)
          !d[m].size && o.attributeData[m]
            ? (d[m].size = o.attributeData[m].size)
            : d[m].size ||
              console.warn(
                `PIXI Geometry attribute '${m}' size cannot be determined (likely the bound shader does not have the attribute)`
              ),
            (p[d[m].buffer] += d[m].size * dr[d[m].type]);
        for (const m in d) {
          const g = d[m],
            _ = g.size;
          g.stride === void 0 &&
            (p[g.buffer] === _ * dr[g.type]
              ? (g.stride = 0)
              : (g.stride = p[g.buffer])),
            g.start === void 0 &&
              ((g.start = f[g.buffer]), (f[g.buffer] += _ * dr[g.type]));
        }
        (u = i.createVertexArray()), i.bindVertexArray(u);
        for (let m = 0; m < c.length; m++) {
          const g = c[m];
          a.bind(g), s && g._glBuffers[n].refCount++;
        }
        return (
          this.activateVao(t, o),
          (l[o.id] = u),
          (l[h] = u),
          i.bindVertexArray(null),
          a.unbind(te.ARRAY_BUFFER),
          u
        );
      }
      disposeGeometry(t, e) {
        var o;
        if (!this.managedGeometries[t.id]) return;
        delete this.managedGeometries[t.id];
        const s = t.glVertexArrayObjects[this.CONTEXT_UID],
          i = this.gl,
          n = t.buffers,
          a = (o = this.renderer) == null ? void 0 : o.buffer;
        if ((t.disposeRunner.remove(this), !!s)) {
          if (a)
            for (let h = 0; h < n.length; h++) {
              const l = n[h]._glBuffers[this.CONTEXT_UID];
              l && (l.refCount--, l.refCount === 0 && !e && a.dispose(n[h], e));
            }
          if (!e) {
            for (const h in s)
              if (h[0] === "g") {
                const l = s[h];
                this._activeVao === l && this.unbind(), i.deleteVertexArray(l);
              }
          }
          delete t.glVertexArrayObjects[this.CONTEXT_UID];
        }
      }
      disposeAll(t) {
        const e = Object.keys(this.managedGeometries);
        for (let s = 0; s < e.length; s++)
          this.disposeGeometry(this.managedGeometries[e[s]], t);
      }
      activateVao(t, e) {
        const s = this.gl,
          i = this.CONTEXT_UID,
          n = this.renderer.buffer,
          a = t.buffers,
          o = t.attributes;
        t.indexBuffer && n.bind(t.indexBuffer);
        let h = null;
        for (const l in o) {
          const u = o[l],
            c = a[u.buffer],
            d = c._glBuffers[i];
          if (e.attributeData[l]) {
            h !== d && (n.bind(c), (h = d));
            const p = e.attributeData[l].location;
            if (
              (s.enableVertexAttribArray(p),
              s.vertexAttribPointer(
                p,
                u.size,
                u.type || s.FLOAT,
                u.normalized,
                u.stride,
                u.start
              ),
              u.instance)
            )
              if (this.hasInstance) s.vertexAttribDivisor(p, u.divisor);
              else
                throw new Error(
                  "geometry error, GPU Instancing is not supported on this device"
                );
          }
        }
      }
      draw(t, e, s, i) {
        const { gl: n } = this,
          a = this._activeGeometry;
        if (a.indexBuffer) {
          const o = a.indexBuffer.data.BYTES_PER_ELEMENT,
            h = o === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
          o === 2 || (o === 4 && this.canUseUInt32ElementIndex)
            ? a.instanced
              ? n.drawElementsInstanced(
                  t,
                  e || a.indexBuffer.data.length,
                  h,
                  (s || 0) * o,
                  i || 1
                )
              : n.drawElements(
                  t,
                  e || a.indexBuffer.data.length,
                  h,
                  (s || 0) * o
                )
            : console.warn("unsupported index buffer type: uint32");
        } else
          a.instanced
            ? n.drawArraysInstanced(t, s, e || a.getSize(), i || 1)
            : n.drawArrays(t, s, e || a.getSize());
        return this;
      }
      unbind() {
        this.gl.bindVertexArray(null),
          (this._activeVao = null),
          (this._activeGeometry = null);
      }
      destroy() {
        this.renderer = null;
      }
    }
    (Xn.extension = { type: M.RendererSystem, name: "geometry" }), k.add(Xn);
    const Vn = new tt();
    class $n {
      constructor(t, e) {
        (this._texture = t),
          (this.mapCoord = new tt()),
          (this.uClampFrame = new Float32Array(4)),
          (this.uClampOffset = new Float32Array(2)),
          (this._textureID = -1),
          (this._updateID = 0),
          (this.clampOffset = 0),
          (this.clampMargin = typeof e > "u" ? 0.5 : e),
          (this.isSimple = !1);
      }
      get texture() {
        return this._texture;
      }
      set texture(t) {
        (this._texture = t), (this._textureID = -1);
      }
      multiplyUvs(t, e) {
        e === void 0 && (e = t);
        const s = this.mapCoord;
        for (let i = 0; i < t.length; i += 2) {
          const n = t[i],
            a = t[i + 1];
          (e[i] = n * s.a + a * s.c + s.tx),
            (e[i + 1] = n * s.b + a * s.d + s.ty);
        }
        return e;
      }
      update(t) {
        const e = this._texture;
        if (!e || !e.valid || (!t && this._textureID === e._updateID))
          return !1;
        (this._textureID = e._updateID), this._updateID++;
        const s = e._uvs;
        this.mapCoord.set(
          s.x1 - s.x0,
          s.y1 - s.y0,
          s.x3 - s.x0,
          s.y3 - s.y0,
          s.x0,
          s.y0
        );
        const i = e.orig,
          n = e.trim;
        n &&
          (Vn.set(
            i.width / n.width,
            0,
            0,
            i.height / n.height,
            -n.x / n.width,
            -n.y / n.height
          ),
          this.mapCoord.append(Vn));
        const a = e.baseTexture,
          o = this.uClampFrame,
          h = this.clampMargin / a.resolution,
          l = this.clampOffset;
        return (
          (o[0] = (e._frame.x + h + l) / a.width),
          (o[1] = (e._frame.y + h + l) / a.height),
          (o[2] = (e._frame.x + e._frame.width - h + l) / a.width),
          (o[3] = (e._frame.y + e._frame.height - h + l) / a.height),
          (this.uClampOffset[0] = l / a.realWidth),
          (this.uClampOffset[1] = l / a.realHeight),
          (this.isSimple =
            e._frame.width === a.width &&
            e._frame.height === a.height &&
            e.rotate === 0),
          !0
        );
      }
    }
    var sl = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,
      il = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
    class rl extends gt {
      constructor(t, e, s) {
        let i = null;
        typeof t != "string" &&
          e === void 0 &&
          s === void 0 &&
          ((i = t), (t = void 0), (e = void 0), (s = void 0)),
          super(t || il, e || sl, s),
          (this.maskSprite = i),
          (this.maskMatrix = new tt());
      }
      get maskSprite() {
        return this._maskSprite;
      }
      set maskSprite(t) {
        (this._maskSprite = t),
          this._maskSprite && (this._maskSprite.renderable = !1);
      }
      apply(t, e, s, i) {
        const n = this._maskSprite,
          a = n._texture;
        a.valid &&
          (a.uvMatrix || (a.uvMatrix = new $n(a, 0)),
          a.uvMatrix.update(),
          (this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1),
          (this.uniforms.mask = a),
          (this.uniforms.otherMatrix = t
            .calculateSpriteMatrix(this.maskMatrix, n)
            .prepend(a.uvMatrix.mapCoord)),
          (this.uniforms.alpha = n.worldAlpha),
          (this.uniforms.maskClamp = a.uvMatrix.uClampFrame),
          t.applyFilter(this, e, s, i));
      }
    }
    class nl {
      constructor(t = null) {
        (this.type = ft.NONE),
          (this.autoDetect = !0),
          (this.maskObject = t || null),
          (this.pooled = !1),
          (this.isMaskData = !0),
          (this.resolution = null),
          (this.multisample = gt.defaultMultisample),
          (this.enabled = !0),
          (this.colorMask = 15),
          (this._filters = null),
          (this._stencilCounter = 0),
          (this._scissorCounter = 0),
          (this._scissorRect = null),
          (this._scissorRectLocal = null),
          (this._colorMask = 15),
          (this._target = null);
      }
      get filter() {
        return this._filters ? this._filters[0] : null;
      }
      set filter(t) {
        t
          ? this._filters
            ? (this._filters[0] = t)
            : (this._filters = [t])
          : (this._filters = null);
      }
      reset() {
        this.pooled &&
          ((this.maskObject = null),
          (this.type = ft.NONE),
          (this.autoDetect = !0)),
          (this._target = null),
          (this._scissorRectLocal = null);
      }
      copyCountersOrReset(t) {
        t
          ? ((this._stencilCounter = t._stencilCounter),
            (this._scissorCounter = t._scissorCounter),
            (this._scissorRect = t._scissorRect))
          : ((this._stencilCounter = 0),
            (this._scissorCounter = 0),
            (this._scissorRect = null));
      }
    }
    class Wn {
      constructor(t) {
        (this.renderer = t),
          (this.enableScissor = !0),
          (this.alphaMaskPool = []),
          (this.maskDataPool = []),
          (this.maskStack = []),
          (this.alphaMaskIndex = 0);
      }
      setMaskStack(t) {
        (this.maskStack = t),
          this.renderer.scissor.setMaskStack(t),
          this.renderer.stencil.setMaskStack(t);
      }
      push(t, e) {
        let s = e;
        if (!s.isMaskData) {
          const n = this.maskDataPool.pop() || new nl();
          (n.pooled = !0), (n.maskObject = e), (s = n);
        }
        const i =
          this.maskStack.length !== 0
            ? this.maskStack[this.maskStack.length - 1]
            : null;
        if (
          (s.copyCountersOrReset(i),
          (s._colorMask = i ? i._colorMask : 15),
          s.autoDetect && this.detect(s),
          (s._target = t),
          s.type !== ft.SPRITE && this.maskStack.push(s),
          s.enabled)
        )
          switch (s.type) {
            case ft.SCISSOR:
              this.renderer.scissor.push(s);
              break;
            case ft.STENCIL:
              this.renderer.stencil.push(s);
              break;
            case ft.SPRITE:
              s.copyCountersOrReset(null), this.pushSpriteMask(s);
              break;
            case ft.COLOR:
              this.pushColorMask(s);
              break;
          }
        s.type === ft.SPRITE && this.maskStack.push(s);
      }
      pop(t) {
        const e = this.maskStack.pop();
        if (!(!e || e._target !== t)) {
          if (e.enabled)
            switch (e.type) {
              case ft.SCISSOR:
                this.renderer.scissor.pop(e);
                break;
              case ft.STENCIL:
                this.renderer.stencil.pop(e.maskObject);
                break;
              case ft.SPRITE:
                this.popSpriteMask(e);
                break;
              case ft.COLOR:
                this.popColorMask(e);
                break;
            }
          if (
            (e.reset(),
            e.pooled && this.maskDataPool.push(e),
            this.maskStack.length !== 0)
          ) {
            const s = this.maskStack[this.maskStack.length - 1];
            s.type === ft.SPRITE &&
              s._filters &&
              (s._filters[0].maskSprite = s.maskObject);
          }
        }
      }
      detect(t) {
        const e = t.maskObject;
        e
          ? e.isSprite
            ? (t.type = ft.SPRITE)
            : this.enableScissor && this.renderer.scissor.testScissor(t)
            ? (t.type = ft.SCISSOR)
            : (t.type = ft.STENCIL)
          : (t.type = ft.COLOR);
      }
      pushSpriteMask(t) {
        const { maskObject: e } = t,
          s = t._target;
        let i = t._filters;
        i ||
          ((i = this.alphaMaskPool[this.alphaMaskIndex]),
          i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new rl()])),
          (i[0].resolution = t.resolution),
          (i[0].multisample = t.multisample),
          (i[0].maskSprite = e);
        const n = s.filterArea;
        (s.filterArea = e.getBounds(!0)),
          this.renderer.filter.push(s, i),
          (s.filterArea = n),
          t._filters || this.alphaMaskIndex++;
      }
      popSpriteMask(t) {
        this.renderer.filter.pop(),
          t._filters
            ? (t._filters[0].maskSprite = null)
            : (this.alphaMaskIndex--,
              (this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null));
      }
      pushColorMask(t) {
        const e = t._colorMask,
          s = (t._colorMask = e & t.colorMask);
        s !== e &&
          this.renderer.gl.colorMask(
            (s & 1) !== 0,
            (s & 2) !== 0,
            (s & 4) !== 0,
            (s & 8) !== 0
          );
      }
      popColorMask(t) {
        const e = t._colorMask,
          s =
            this.maskStack.length > 0
              ? this.maskStack[this.maskStack.length - 1]._colorMask
              : 15;
        s !== e &&
          this.renderer.gl.colorMask(
            (s & 1) !== 0,
            (s & 2) !== 0,
            (s & 4) !== 0,
            (s & 8) !== 0
          );
      }
      destroy() {
        this.renderer = null;
      }
    }
    (Wn.extension = { type: M.RendererSystem, name: "mask" }), k.add(Wn);
    class jn {
      constructor(t) {
        (this.renderer = t), (this.maskStack = []), (this.glConst = 0);
      }
      getStackLength() {
        return this.maskStack.length;
      }
      setMaskStack(t) {
        const { gl: e } = this.renderer,
          s = this.getStackLength();
        this.maskStack = t;
        const i = this.getStackLength();
        i !== s &&
          (i === 0
            ? e.disable(this.glConst)
            : (e.enable(this.glConst), this._useCurrent()));
      }
      _useCurrent() {}
      destroy() {
        (this.renderer = null), (this.maskStack = null);
      }
    }
    const Yn = new tt(),
      qn = [],
      Kn = class Gi extends jn {
        constructor(t) {
          super(t),
            (this.glConst = N.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST);
        }
        getStackLength() {
          const t = this.maskStack[this.maskStack.length - 1];
          return t ? t._scissorCounter : 0;
        }
        calcScissorRect(t) {
          if (t._scissorRectLocal) return;
          const e = t._scissorRect,
            { maskObject: s } = t,
            { renderer: i } = this,
            n = i.renderTexture,
            a = s.getBounds(!0, qn.pop() ?? new W());
          this.roundFrameToPixels(
            a,
            n.current ? n.current.resolution : i.resolution,
            n.sourceFrame,
            n.destinationFrame,
            i.projection.transform
          ),
            e && a.fit(e),
            (t._scissorRectLocal = a);
        }
        static isMatrixRotated(t) {
          if (!t) return !1;
          const { a: e, b: s, c: i, d: n } = t;
          return (
            (Math.abs(s) > 1e-4 || Math.abs(i) > 1e-4) &&
            (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
          );
        }
        testScissor(t) {
          const { maskObject: e } = t;
          if (
            !e.isFastRect ||
            !e.isFastRect() ||
            Gi.isMatrixRotated(e.worldTransform) ||
            Gi.isMatrixRotated(this.renderer.projection.transform)
          )
            return !1;
          this.calcScissorRect(t);
          const s = t._scissorRectLocal;
          return s.width > 0 && s.height > 0;
        }
        roundFrameToPixels(t, e, s, i, n) {
          Gi.isMatrixRotated(n) ||
            ((n = n ? Yn.copyFrom(n) : Yn.identity()),
            n
              .translate(-s.x, -s.y)
              .scale(i.width / s.width, i.height / s.height)
              .translate(i.x, i.y),
            this.renderer.filter.transformAABB(n, t),
            t.fit(i),
            (t.x = Math.round(t.x * e)),
            (t.y = Math.round(t.y * e)),
            (t.width = Math.round(t.width * e)),
            (t.height = Math.round(t.height * e)));
        }
        push(t) {
          t._scissorRectLocal || this.calcScissorRect(t);
          const { gl: e } = this.renderer;
          t._scissorRect || e.enable(e.SCISSOR_TEST),
            t._scissorCounter++,
            (t._scissorRect = t._scissorRectLocal),
            this._useCurrent();
        }
        pop(t) {
          const { gl: e } = this.renderer;
          t && qn.push(t._scissorRectLocal),
            this.getStackLength() > 0
              ? this._useCurrent()
              : e.disable(e.SCISSOR_TEST);
        }
        _useCurrent() {
          const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
          let e;
          this.renderer.renderTexture.current
            ? (e = t.y)
            : (e = this.renderer.height - t.height - t.y),
            this.renderer.gl.scissor(t.x, e, t.width, t.height);
        }
      };
    Kn.extension = { type: M.RendererSystem, name: "scissor" };
    let al = Kn;
    k.add(al);
    class Jn extends jn {
      constructor(t) {
        super(t),
          (this.glConst = N.ADAPTER.getWebGLRenderingContext().STENCIL_TEST);
      }
      getStackLength() {
        const t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0;
      }
      push(t) {
        const e = t.maskObject,
          { gl: s } = this.renderer,
          i = t._stencilCounter;
        i === 0 &&
          (this.renderer.framebuffer.forceStencil(),
          s.clearStencil(0),
          s.clear(s.STENCIL_BUFFER_BIT),
          s.enable(s.STENCIL_TEST)),
          t._stencilCounter++;
        const n = t._colorMask;
        n !== 0 && ((t._colorMask = 0), s.colorMask(!1, !1, !1, !1)),
          s.stencilFunc(s.EQUAL, i, 4294967295),
          s.stencilOp(s.KEEP, s.KEEP, s.INCR),
          (e.renderable = !0),
          e.render(this.renderer),
          this.renderer.batch.flush(),
          (e.renderable = !1),
          n !== 0 &&
            ((t._colorMask = n),
            s.colorMask(
              (n & 1) !== 0,
              (n & 2) !== 0,
              (n & 4) !== 0,
              (n & 8) !== 0
            )),
          this._useCurrent();
      }
      pop(t) {
        const e = this.renderer.gl;
        if (this.getStackLength() === 0) e.disable(e.STENCIL_TEST);
        else {
          const s =
              this.maskStack.length !== 0
                ? this.maskStack[this.maskStack.length - 1]
                : null,
            i = s ? s._colorMask : 15;
          i !== 0 && ((s._colorMask = 0), e.colorMask(!1, !1, !1, !1)),
            e.stencilOp(e.KEEP, e.KEEP, e.DECR),
            (t.renderable = !0),
            t.render(this.renderer),
            this.renderer.batch.flush(),
            (t.renderable = !1),
            i !== 0 &&
              ((s._colorMask = i),
              e.colorMask(
                (i & 1) !== 0,
                (i & 2) !== 0,
                (i & 4) !== 0,
                (i & 8) !== 0
              )),
            this._useCurrent();
        }
      }
      _useCurrent() {
        const t = this.renderer.gl;
        t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
          t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
      }
    }
    (Jn.extension = { type: M.RendererSystem, name: "stencil" }), k.add(Jn);
    class Zn {
      constructor(t) {
        (this.renderer = t),
          (this.plugins = {}),
          Object.defineProperties(this.plugins, {
            extract: {
              enumerable: !1,
              get() {
                return (
                  V(
                    "7.0.0",
                    "renderer.plugins.extract has moved to renderer.extract"
                  ),
                  t.extract
                );
              },
            },
            prepare: {
              enumerable: !1,
              get() {
                return (
                  V(
                    "7.0.0",
                    "renderer.plugins.prepare has moved to renderer.prepare"
                  ),
                  t.prepare
                );
              },
            },
            interaction: {
              enumerable: !1,
              get() {
                return (
                  V(
                    "7.0.0",
                    "renderer.plugins.interaction has been deprecated, use renderer.events"
                  ),
                  t.events
                );
              },
            },
          });
      }
      init() {
        const t = this.rendererPlugins;
        for (const e in t) this.plugins[e] = new t[e](this.renderer);
      }
      destroy() {
        for (const t in this.plugins)
          this.plugins[t].destroy(), (this.plugins[t] = null);
      }
    }
    (Zn.extension = {
      type: [M.RendererSystem, M.CanvasRendererSystem],
      name: "_plugin",
    }),
      k.add(Zn);
    class Qn {
      constructor(t) {
        (this.renderer = t),
          (this.destinationFrame = null),
          (this.sourceFrame = null),
          (this.defaultFrame = null),
          (this.projectionMatrix = new tt()),
          (this.transform = null);
      }
      update(t, e, s, i) {
        (this.destinationFrame =
          t || this.destinationFrame || this.defaultFrame),
          (this.sourceFrame = e || this.sourceFrame || t),
          this.calculateProjection(
            this.destinationFrame,
            this.sourceFrame,
            s,
            i
          ),
          this.transform && this.projectionMatrix.append(this.transform);
        const n = this.renderer;
        (n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix),
          n.globalUniforms.update(),
          n.shader.shader &&
            n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
      }
      calculateProjection(t, e, s, i) {
        const n = this.projectionMatrix,
          a = i ? -1 : 1;
        n.identity(),
          (n.a = (1 / e.width) * 2),
          (n.d = a * ((1 / e.height) * 2)),
          (n.tx = -1 - e.x * n.a),
          (n.ty = -a - e.y * n.d);
      }
      setTransform(t) {}
      destroy() {
        this.renderer = null;
      }
    }
    (Qn.extension = { type: M.RendererSystem, name: "projection" }), k.add(Qn);
    const ol = new nr(),
      ta = new W();
    class ea {
      constructor(t) {
        (this.renderer = t), (this._tempMatrix = new tt());
      }
      generateTexture(t, e) {
        const { region: s, ...i } = e || {},
          n = (s == null ? void 0 : s.copyTo(ta)) || t.getLocalBounds(ta, !0),
          a = i.resolution || this.renderer.resolution;
        (n.width = Math.max(n.width, 1 / a)),
          (n.height = Math.max(n.height, 1 / a)),
          (i.width = n.width),
          (i.height = n.height),
          (i.resolution = a),
          i.multisample ?? (i.multisample = this.renderer.multisample);
        const o = Ee.create(i);
        (this._tempMatrix.tx = -n.x), (this._tempMatrix.ty = -n.y);
        const h = t.transform;
        return (
          (t.transform = ol),
          this.renderer.render(t, {
            renderTexture: o,
            transform: this._tempMatrix,
            skipUpdateTransform: !!t.parent,
            blit: !0,
          }),
          (t.transform = h),
          o
        );
      }
      destroy() {}
    }
    (ea.extension = {
      type: [M.RendererSystem, M.CanvasRendererSystem],
      name: "textureGenerator",
    }),
      k.add(ea);
    const Ae = new W(),
      ps = new W();
    class sa {
      constructor(t) {
        (this.renderer = t),
          (this.defaultMaskStack = []),
          (this.current = null),
          (this.sourceFrame = new W()),
          (this.destinationFrame = new W()),
          (this.viewportFrame = new W());
      }
      contextChange() {
        var e;
        const t =
          (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
        this._rendererPremultipliedAlpha = !!(
          t &&
          t.alpha &&
          t.premultipliedAlpha
        );
      }
      bind(t = null, e, s) {
        const i = this.renderer;
        this.current = t;
        let n, a, o;
        t
          ? ((n = t.baseTexture),
            (o = n.resolution),
            e ||
              ((Ae.width = t.frame.width),
              (Ae.height = t.frame.height),
              (e = Ae)),
            s ||
              ((ps.x = t.frame.x),
              (ps.y = t.frame.y),
              (ps.width = e.width),
              (ps.height = e.height),
              (s = ps)),
            (a = n.framebuffer))
          : ((o = i.resolution),
            e ||
              ((Ae.width = i._view.screen.width),
              (Ae.height = i._view.screen.height),
              (e = Ae)),
            s || ((s = Ae), (s.width = e.width), (s.height = e.height)));
        const h = this.viewportFrame;
        (h.x = s.x * o),
          (h.y = s.y * o),
          (h.width = s.width * o),
          (h.height = s.height * o),
          t || (h.y = i.view.height - (h.y + h.height)),
          h.ceil(),
          this.renderer.framebuffer.bind(a, h),
          this.renderer.projection.update(s, e, o, !a),
          t
            ? this.renderer.mask.setMaskStack(n.maskStack)
            : this.renderer.mask.setMaskStack(this.defaultMaskStack),
          this.sourceFrame.copyFrom(e),
          this.destinationFrame.copyFrom(s);
      }
      clear(t, e) {
        const s = this.current
            ? this.current.baseTexture.clear
            : this.renderer.background.backgroundColor,
          i = Q.shared.setValue(t || s);
        ((this.current && this.current.baseTexture.alphaMode > 0) ||
          (!this.current && this._rendererPremultipliedAlpha)) &&
          i.premultiply(i.alpha);
        const n = this.destinationFrame,
          a = this.current
            ? this.current.baseTexture
            : this.renderer._view.screen,
          o = n.width !== a.width || n.height !== a.height;
        if (o) {
          let { x: h, y: l, width: u, height: c } = this.viewportFrame;
          (h = Math.round(h)),
            (l = Math.round(l)),
            (u = Math.round(u)),
            (c = Math.round(c)),
            this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
            this.renderer.gl.scissor(h, l, u, c);
        }
        this.renderer.framebuffer.clear(i.red, i.green, i.blue, i.alpha, e),
          o && this.renderer.scissor.pop();
      }
      resize() {
        this.bind(null);
      }
      reset() {
        this.bind(null);
      }
      destroy() {
        this.renderer = null;
      }
    }
    (sa.extension = { type: M.RendererSystem, name: "renderTexture" }),
      k.add(sa);
    class hl {
      constructor(t, e) {
        (this.program = t),
          (this.uniformData = e),
          (this.uniformGroups = {}),
          (this.uniformDirtyGroups = {}),
          (this.uniformBufferBindings = {});
      }
      destroy() {
        (this.uniformData = null),
          (this.uniformGroups = null),
          (this.uniformDirtyGroups = null),
          (this.uniformBufferBindings = null),
          (this.program = null);
      }
    }
    function ll(r, t) {
      const e = {},
        s = t.getProgramParameter(r, t.ACTIVE_ATTRIBUTES);
      for (let i = 0; i < s; i++) {
        const n = t.getActiveAttrib(r, i);
        if (n.name.startsWith("gl_")) continue;
        const a = Dn(t, n.type),
          o = {
            type: a,
            name: n.name,
            size: Pn(a),
            location: t.getAttribLocation(r, n.name),
          };
        e[n.name] = o;
      }
      return e;
    }
    function ul(r, t) {
      const e = {},
        s = t.getProgramParameter(r, t.ACTIVE_UNIFORMS);
      for (let i = 0; i < s; i++) {
        const n = t.getActiveUniform(r, i),
          a = n.name.replace(/\[.*?\]$/, ""),
          o = !!n.name.match(/\[.*?\]$/),
          h = Dn(t, n.type);
        e[a] = {
          name: a,
          index: i,
          type: h,
          size: n.size,
          isArray: o,
          value: In(h, n.size),
        };
      }
      return e;
    }
    function cl(r, t) {
      var o;
      const e = Sn(r, r.VERTEX_SHADER, t.vertexSrc),
        s = Sn(r, r.FRAGMENT_SHADER, t.fragmentSrc),
        i = r.createProgram();
      r.attachShader(i, e), r.attachShader(i, s);
      const n = (o = t.extra) == null ? void 0 : o.transformFeedbackVaryings;
      if (
        (n &&
          (typeof r.transformFeedbackVaryings != "function"
            ? console.warn(
                "TransformFeedback is not supported but TransformFeedbackVaryings are given."
              )
            : r.transformFeedbackVaryings(
                i,
                n.names,
                n.bufferMode === "separate"
                  ? r.SEPARATE_ATTRIBS
                  : r.INTERLEAVED_ATTRIBS
              )),
        r.linkProgram(i),
        r.getProgramParameter(i, r.LINK_STATUS) || Gh(r, i, e, s),
        (t.attributeData = ll(i, r)),
        (t.uniformData = ul(i, r)),
        !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc))
      ) {
        const h = Object.keys(t.attributeData);
        h.sort((l, u) => (l > u ? 1 : -1));
        for (let l = 0; l < h.length; l++)
          (t.attributeData[h[l]].location = l),
            r.bindAttribLocation(i, l, h[l]);
        r.linkProgram(i);
      }
      r.deleteShader(e), r.deleteShader(s);
      const a = {};
      for (const h in t.uniformData) {
        const l = t.uniformData[h];
        a[h] = {
          location: r.getUniformLocation(i, h),
          value: In(l.type, l.size),
        };
      }
      return new hl(i, a);
    }
    function dl(r, t, e, s, i) {
      e.buffer.update(i);
    }
    const pl = {
        float: `
        data[offset] = v;
    `,
        vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
        vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
        vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
        mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
        mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
        mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `,
      },
      ia = {
        float: 4,
        vec2: 8,
        vec3: 12,
        vec4: 16,
        int: 4,
        ivec2: 8,
        ivec3: 12,
        ivec4: 16,
        uint: 4,
        uvec2: 8,
        uvec3: 12,
        uvec4: 16,
        bool: 4,
        bvec2: 8,
        bvec3: 12,
        bvec4: 16,
        mat2: 16 * 2,
        mat3: 16 * 3,
        mat4: 16 * 4,
      };
    function fl(r) {
      const t = r.map((n) => ({ data: n, offset: 0, dataLen: 0, dirty: 0 }));
      let e = 0,
        s = 0,
        i = 0;
      for (let n = 0; n < t.length; n++) {
        const a = t[n];
        if (
          ((e = ia[a.data.type]),
          a.data.size > 1 && (e = Math.max(e, 16) * a.data.size),
          (a.dataLen = e),
          s % e !== 0 && s < 16)
        ) {
          const o = (s % e) % 16;
          (s += o), (i += o);
        }
        s + e > 16
          ? ((i = Math.ceil(i / 16) * 16), (a.offset = i), (i += e), (s = e))
          : ((a.offset = i), (s += e), (i += e));
      }
      return (i = Math.ceil(i / 16) * 16), { uboElements: t, size: i };
    }
    function ml(r, t) {
      const e = [];
      for (const s in r) t[s] && e.push(t[s]);
      return e.sort((s, i) => s.index - i.index), e;
    }
    function gl(r, t) {
      if (!r.autoManage) return { size: 0, syncFunc: dl };
      const e = ml(r.uniforms, t),
        { uboElements: s, size: i } = fl(e),
        n = [
          `
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `,
        ];
      for (let a = 0; a < s.length; a++) {
        const o = s[a],
          h = r.uniforms[o.data.name],
          l = o.data.name;
        let u = !1;
        for (let c = 0; c < Ue.length; c++) {
          const d = Ue[c];
          if (d.codeUbo && d.test(o.data, h)) {
            n.push(`offset = ${o.offset / 4};`, Ue[c].codeUbo(o.data.name, h)),
              (u = !0);
            break;
          }
        }
        if (!u)
          if (o.data.size > 1) {
            const c = Pn(o.data.type),
              d = Math.max(ia[o.data.type] / 16, 1),
              p = c / d,
              f = (4 - (p % 4)) % 4;
            n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};

                t = 0;

                for(var i=0; i < ${o.data.size * d}; i++)
                {
                    for(var j = 0; j < ${p}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${f};
                }

                `);
          } else {
            const c = pl[o.data.type];
            n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};
                ${c};
                `);
          }
      }
      return (
        n.push(`
       renderer.buffer.update(buffer);
    `),
        {
          size: i,
          syncFunc: new Function(
            "ud",
            "uv",
            "renderer",
            "syncData",
            "buffer",
            n.join(`
`)
          ),
        }
      );
    }
    let _l = 0;
    const qs = { textureCount: 0, uboCount: 0 };
    class ra {
      constructor(t) {
        (this.destroyed = !1),
          (this.renderer = t),
          this.systemCheck(),
          (this.gl = null),
          (this.shader = null),
          (this.program = null),
          (this.cache = {}),
          (this._uboCache = {}),
          (this.id = _l++);
      }
      systemCheck() {
        if (!zh())
          throw new Error(
            "Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support."
          );
      }
      contextChange(t) {
        (this.gl = t), this.reset();
      }
      bind(t, e) {
        t.disposeRunner.add(this),
          (t.uniforms.globals = this.renderer.globalUniforms);
        const s = t.program,
          i =
            s.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
        return (
          (this.shader = t),
          this.program !== s &&
            ((this.program = s), this.gl.useProgram(i.program)),
          e ||
            ((qs.textureCount = 0),
            (qs.uboCount = 0),
            this.syncUniformGroup(t.uniformGroup, qs)),
          i
        );
      }
      setUniforms(t) {
        const e = this.shader.program,
          s = e.glPrograms[this.renderer.CONTEXT_UID];
        e.syncUniforms(s.uniformData, t, this.renderer);
      }
      syncUniformGroup(t, e) {
        const s = this.getGlProgram();
        (!t.static || t.dirtyId !== s.uniformDirtyGroups[t.id]) &&
          ((s.uniformDirtyGroups[t.id] = t.dirtyId),
          this.syncUniforms(t, s, e));
      }
      syncUniforms(t, e, s) {
        (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(
          e.uniformData,
          t.uniforms,
          this.renderer,
          s
        );
      }
      createSyncGroups(t) {
        const e = this.getSignature(t, this.shader.program.uniformData, "u");
        return (
          this.cache[e] ||
            (this.cache[e] = Fh(t, this.shader.program.uniformData)),
          (t.syncUniforms[this.shader.program.id] = this.cache[e]),
          t.syncUniforms[this.shader.program.id]
        );
      }
      syncUniformBufferGroup(t, e) {
        const s = this.getGlProgram();
        if (!t.static || t.dirtyId !== 0 || !s.uniformGroups[t.id]) {
          t.dirtyId = 0;
          const i =
            s.uniformGroups[t.id] || this.createSyncBufferGroup(t, s, e);
          t.buffer.update(),
            i(s.uniformData, t.uniforms, this.renderer, qs, t.buffer);
        }
        this.renderer.buffer.bindBufferBase(
          t.buffer,
          s.uniformBufferBindings[e]
        );
      }
      createSyncBufferGroup(t, e, s) {
        const { gl: i } = this.renderer;
        this.renderer.buffer.bind(t.buffer);
        const n = this.gl.getUniformBlockIndex(e.program, s);
        (e.uniformBufferBindings[s] = this.shader.uniformBindCount),
          i.uniformBlockBinding(e.program, n, this.shader.uniformBindCount),
          this.shader.uniformBindCount++;
        const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
        let o = this._uboCache[a];
        if (
          (o ||
            (o = this._uboCache[a] = gl(t, this.shader.program.uniformData)),
          t.autoManage)
        ) {
          const h = new Float32Array(o.size / 4);
          t.buffer.update(h);
        }
        return (e.uniformGroups[t.id] = o.syncFunc), e.uniformGroups[t.id];
      }
      getSignature(t, e, s) {
        const i = t.uniforms,
          n = [`${s}-`];
        for (const a in i) n.push(a), e[a] && n.push(e[a].type);
        return n.join("-");
      }
      getGlProgram() {
        return this.shader
          ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
          : null;
      }
      generateProgram(t) {
        const e = this.gl,
          s = t.program,
          i = cl(e, s);
        return (s.glPrograms[this.renderer.CONTEXT_UID] = i), i;
      }
      reset() {
        (this.program = null), (this.shader = null);
      }
      disposeShader(t) {
        this.shader === t && (this.shader = null);
      }
      destroy() {
        (this.renderer = null), (this.destroyed = !0);
      }
    }
    (ra.extension = { type: M.RendererSystem, name: "shader" }), k.add(ra);
    class Ks {
      constructor(t) {
        this.renderer = t;
      }
      run(t) {
        const { renderer: e } = this;
        e.runners.init.emit(e.options),
          t.hello &&
            console.log(
              `PixiJS 7.3.2 - ${e.rendererLogId} - https://pixijs.com`
            ),
          e.resize(e.screen.width, e.screen.height);
      }
      destroy() {}
    }
    (Ks.defaultOptions = { hello: !1 }),
      (Ks.extension = {
        type: [M.RendererSystem, M.CanvasRendererSystem],
        name: "startup",
      }),
      k.add(Ks);
    function xl(r, t = []) {
      return (
        (t[j.NORMAL] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.ADD] = [r.ONE, r.ONE]),
        (t[j.MULTIPLY] = [
          r.DST_COLOR,
          r.ONE_MINUS_SRC_ALPHA,
          r.ONE,
          r.ONE_MINUS_SRC_ALPHA,
        ]),
        (t[j.SCREEN] = [
          r.ONE,
          r.ONE_MINUS_SRC_COLOR,
          r.ONE,
          r.ONE_MINUS_SRC_ALPHA,
        ]),
        (t[j.OVERLAY] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.DARKEN] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.LIGHTEN] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.COLOR_DODGE] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.COLOR_BURN] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.HARD_LIGHT] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.SOFT_LIGHT] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.DIFFERENCE] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.EXCLUSION] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.HUE] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.SATURATION] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.COLOR] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.LUMINOSITY] = [r.ONE, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.NONE] = [0, 0]),
        (t[j.NORMAL_NPM] = [
          r.SRC_ALPHA,
          r.ONE_MINUS_SRC_ALPHA,
          r.ONE,
          r.ONE_MINUS_SRC_ALPHA,
        ]),
        (t[j.ADD_NPM] = [r.SRC_ALPHA, r.ONE, r.ONE, r.ONE]),
        (t[j.SCREEN_NPM] = [
          r.SRC_ALPHA,
          r.ONE_MINUS_SRC_COLOR,
          r.ONE,
          r.ONE_MINUS_SRC_ALPHA,
        ]),
        (t[j.SRC_IN] = [r.DST_ALPHA, r.ZERO]),
        (t[j.SRC_OUT] = [r.ONE_MINUS_DST_ALPHA, r.ZERO]),
        (t[j.SRC_ATOP] = [r.DST_ALPHA, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.DST_OVER] = [r.ONE_MINUS_DST_ALPHA, r.ONE]),
        (t[j.DST_IN] = [r.ZERO, r.SRC_ALPHA]),
        (t[j.DST_OUT] = [r.ZERO, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.DST_ATOP] = [r.ONE_MINUS_DST_ALPHA, r.SRC_ALPHA]),
        (t[j.XOR] = [r.ONE_MINUS_DST_ALPHA, r.ONE_MINUS_SRC_ALPHA]),
        (t[j.SUBTRACT] = [
          r.ONE,
          r.ONE,
          r.ONE,
          r.ONE,
          r.FUNC_REVERSE_SUBTRACT,
          r.FUNC_ADD,
        ]),
        t
      );
    }
    const yl = 0,
      vl = 1,
      bl = 2,
      Tl = 3,
      El = 4,
      Al = 5,
      na = class hn {
        constructor() {
          (this.gl = null),
            (this.stateId = 0),
            (this.polygonOffset = 0),
            (this.blendMode = j.NONE),
            (this._blendEq = !1),
            (this.map = []),
            (this.map[yl] = this.setBlend),
            (this.map[vl] = this.setOffset),
            (this.map[bl] = this.setCullFace),
            (this.map[Tl] = this.setDepthTest),
            (this.map[El] = this.setFrontFace),
            (this.map[Al] = this.setDepthMask),
            (this.checks = []),
            (this.defaultState = new Mt()),
            (this.defaultState.blend = !0);
        }
        contextChange(t) {
          (this.gl = t),
            (this.blendModes = xl(t)),
            this.set(this.defaultState),
            this.reset();
        }
        set(t) {
          if (((t = t || this.defaultState), this.stateId !== t.data)) {
            let e = this.stateId ^ t.data,
              s = 0;
            for (; e; )
              e & 1 && this.map[s].call(this, !!(t.data & (1 << s))),
                (e = e >> 1),
                s++;
            this.stateId = t.data;
          }
          for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
        }
        forceState(t) {
          t = t || this.defaultState;
          for (let e = 0; e < this.map.length; e++)
            this.map[e].call(this, !!(t.data & (1 << e)));
          for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
          this.stateId = t.data;
        }
        setBlend(t) {
          this.updateCheck(hn.checkBlendMode, t),
            this.gl[t ? "enable" : "disable"](this.gl.BLEND);
        }
        setOffset(t) {
          this.updateCheck(hn.checkPolygonOffset, t),
            this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
        }
        setDepthTest(t) {
          this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
        }
        setDepthMask(t) {
          this.gl.depthMask(t);
        }
        setCullFace(t) {
          this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
        }
        setFrontFace(t) {
          this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
        }
        setBlendMode(t) {
          if (t === this.blendMode) return;
          this.blendMode = t;
          const e = this.blendModes[t],
            s = this.gl;
          e.length === 2
            ? s.blendFunc(e[0], e[1])
            : s.blendFuncSeparate(e[0], e[1], e[2], e[3]),
            e.length === 6
              ? ((this._blendEq = !0), s.blendEquationSeparate(e[4], e[5]))
              : this._blendEq &&
                ((this._blendEq = !1),
                s.blendEquationSeparate(s.FUNC_ADD, s.FUNC_ADD));
        }
        setPolygonOffset(t, e) {
          this.gl.polygonOffset(t, e);
        }
        reset() {
          this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
            this.forceState(this.defaultState),
            (this._blendEq = !0),
            (this.blendMode = -1),
            this.setBlendMode(0);
        }
        updateCheck(t, e) {
          const s = this.checks.indexOf(t);
          e && s === -1
            ? this.checks.push(t)
            : !e && s !== -1 && this.checks.splice(s, 1);
        }
        static checkBlendMode(t, e) {
          t.setBlendMode(e.blendMode);
        }
        static checkPolygonOffset(t, e) {
          t.setPolygonOffset(1, e.polygonOffset);
        }
        destroy() {
          this.gl = null;
        }
      };
    na.extension = { type: M.RendererSystem, name: "state" };
    let wl = na;
    k.add(wl);
    class Sl extends Ss {
      constructor() {
        super(...arguments), (this.runners = {}), (this._systemsHash = {});
      }
      setup(t) {
        this.addRunners(...t.runners);
        const e = (t.priority ?? []).filter((i) => t.systems[i]),
          s = [...e, ...Object.keys(t.systems).filter((i) => !e.includes(i))];
        for (const i of s) this.addSystem(t.systems[i], i);
      }
      addRunners(...t) {
        t.forEach((e) => {
          this.runners[e] = new Dt(e);
        });
      }
      addSystem(t, e) {
        const s = new t(this);
        if (this[e])
          throw new Error(`Whoops! The name "${e}" is already in use`);
        (this[e] = s), (this._systemsHash[e] = s);
        for (const i in this.runners) this.runners[i].add(s);
        return this;
      }
      emitWithCustomOptions(t, e) {
        const s = Object.keys(this._systemsHash);
        t.items.forEach((i) => {
          const n = s.find((a) => this._systemsHash[a] === i);
          i[t.name](e[n]);
        });
      }
      destroy() {
        Object.values(this.runners).forEach((t) => {
          t.destroy();
        }),
          (this._systemsHash = {});
      }
    }
    const fs = class Hi {
      constructor(t) {
        (this.renderer = t),
          (this.count = 0),
          (this.checkCount = 0),
          (this.maxIdle = Hi.defaultMaxIdle),
          (this.checkCountMax = Hi.defaultCheckCountMax),
          (this.mode = Hi.defaultMode);
      }
      postrender() {
        this.renderer.objectRenderer.renderingToScreen &&
          (this.count++,
          this.mode !== Vo.MANUAL &&
            (this.checkCount++,
            this.checkCount > this.checkCountMax &&
              ((this.checkCount = 0), this.run())));
      }
      run() {
        const t = this.renderer.texture,
          e = t.managedTextures;
        let s = !1;
        for (let i = 0; i < e.length; i++) {
          const n = e[i];
          n.resource &&
            this.count - n.touched > this.maxIdle &&
            (t.destroyTexture(n, !0), (e[i] = null), (s = !0));
        }
        if (s) {
          let i = 0;
          for (let n = 0; n < e.length; n++) e[n] !== null && (e[i++] = e[n]);
          e.length = i;
        }
      }
      unload(t) {
        const e = this.renderer.texture,
          s = t._texture;
        s && !s.framebuffer && e.destroyTexture(s);
        for (let i = t.children.length - 1; i >= 0; i--)
          this.unload(t.children[i]);
      }
      destroy() {
        this.renderer = null;
      }
    };
    (fs.defaultMode = Vo.AUTO),
      (fs.defaultMaxIdle = 60 * 60),
      (fs.defaultCheckCountMax = 60 * 10),
      (fs.extension = { type: M.RendererSystem, name: "textureGC" });
    let we = fs;
    k.add(we);
    class pr {
      constructor(t) {
        (this.texture = t),
          (this.width = -1),
          (this.height = -1),
          (this.dirtyId = -1),
          (this.dirtyStyleId = -1),
          (this.mipmap = !1),
          (this.wrapMode = 33071),
          (this.type = O.UNSIGNED_BYTE),
          (this.internalFormat = C.RGBA),
          (this.samplerType = 0);
      }
    }
    function Il(r) {
      let t;
      return (
        "WebGL2RenderingContext" in globalThis &&
        r instanceof globalThis.WebGL2RenderingContext
          ? (t = {
              [r.RGB]: B.FLOAT,
              [r.RGBA]: B.FLOAT,
              [r.ALPHA]: B.FLOAT,
              [r.LUMINANCE]: B.FLOAT,
              [r.LUMINANCE_ALPHA]: B.FLOAT,
              [r.R8]: B.FLOAT,
              [r.R8_SNORM]: B.FLOAT,
              [r.RG8]: B.FLOAT,
              [r.RG8_SNORM]: B.FLOAT,
              [r.RGB8]: B.FLOAT,
              [r.RGB8_SNORM]: B.FLOAT,
              [r.RGB565]: B.FLOAT,
              [r.RGBA4]: B.FLOAT,
              [r.RGB5_A1]: B.FLOAT,
              [r.RGBA8]: B.FLOAT,
              [r.RGBA8_SNORM]: B.FLOAT,
              [r.RGB10_A2]: B.FLOAT,
              [r.RGB10_A2UI]: B.FLOAT,
              [r.SRGB8]: B.FLOAT,
              [r.SRGB8_ALPHA8]: B.FLOAT,
              [r.R16F]: B.FLOAT,
              [r.RG16F]: B.FLOAT,
              [r.RGB16F]: B.FLOAT,
              [r.RGBA16F]: B.FLOAT,
              [r.R32F]: B.FLOAT,
              [r.RG32F]: B.FLOAT,
              [r.RGB32F]: B.FLOAT,
              [r.RGBA32F]: B.FLOAT,
              [r.R11F_G11F_B10F]: B.FLOAT,
              [r.RGB9_E5]: B.FLOAT,
              [r.R8I]: B.INT,
              [r.R8UI]: B.UINT,
              [r.R16I]: B.INT,
              [r.R16UI]: B.UINT,
              [r.R32I]: B.INT,
              [r.R32UI]: B.UINT,
              [r.RG8I]: B.INT,
              [r.RG8UI]: B.UINT,
              [r.RG16I]: B.INT,
              [r.RG16UI]: B.UINT,
              [r.RG32I]: B.INT,
              [r.RG32UI]: B.UINT,
              [r.RGB8I]: B.INT,
              [r.RGB8UI]: B.UINT,
              [r.RGB16I]: B.INT,
              [r.RGB16UI]: B.UINT,
              [r.RGB32I]: B.INT,
              [r.RGB32UI]: B.UINT,
              [r.RGBA8I]: B.INT,
              [r.RGBA8UI]: B.UINT,
              [r.RGBA16I]: B.INT,
              [r.RGBA16UI]: B.UINT,
              [r.RGBA32I]: B.INT,
              [r.RGBA32UI]: B.UINT,
              [r.DEPTH_COMPONENT16]: B.FLOAT,
              [r.DEPTH_COMPONENT24]: B.FLOAT,
              [r.DEPTH_COMPONENT32F]: B.FLOAT,
              [r.DEPTH_STENCIL]: B.FLOAT,
              [r.DEPTH24_STENCIL8]: B.FLOAT,
              [r.DEPTH32F_STENCIL8]: B.FLOAT,
            })
          : (t = {
              [r.RGB]: B.FLOAT,
              [r.RGBA]: B.FLOAT,
              [r.ALPHA]: B.FLOAT,
              [r.LUMINANCE]: B.FLOAT,
              [r.LUMINANCE_ALPHA]: B.FLOAT,
              [r.DEPTH_STENCIL]: B.FLOAT,
            }),
        t
      );
    }
    function Cl(r) {
      let t;
      return (
        "WebGL2RenderingContext" in globalThis &&
        r instanceof globalThis.WebGL2RenderingContext
          ? (t = {
              [O.UNSIGNED_BYTE]: {
                [C.RGBA]: r.RGBA8,
                [C.RGB]: r.RGB8,
                [C.RG]: r.RG8,
                [C.RED]: r.R8,
                [C.RGBA_INTEGER]: r.RGBA8UI,
                [C.RGB_INTEGER]: r.RGB8UI,
                [C.RG_INTEGER]: r.RG8UI,
                [C.RED_INTEGER]: r.R8UI,
                [C.ALPHA]: r.ALPHA,
                [C.LUMINANCE]: r.LUMINANCE,
                [C.LUMINANCE_ALPHA]: r.LUMINANCE_ALPHA,
              },
              [O.BYTE]: {
                [C.RGBA]: r.RGBA8_SNORM,
                [C.RGB]: r.RGB8_SNORM,
                [C.RG]: r.RG8_SNORM,
                [C.RED]: r.R8_SNORM,
                [C.RGBA_INTEGER]: r.RGBA8I,
                [C.RGB_INTEGER]: r.RGB8I,
                [C.RG_INTEGER]: r.RG8I,
                [C.RED_INTEGER]: r.R8I,
              },
              [O.UNSIGNED_SHORT]: {
                [C.RGBA_INTEGER]: r.RGBA16UI,
                [C.RGB_INTEGER]: r.RGB16UI,
                [C.RG_INTEGER]: r.RG16UI,
                [C.RED_INTEGER]: r.R16UI,
                [C.DEPTH_COMPONENT]: r.DEPTH_COMPONENT16,
              },
              [O.SHORT]: {
                [C.RGBA_INTEGER]: r.RGBA16I,
                [C.RGB_INTEGER]: r.RGB16I,
                [C.RG_INTEGER]: r.RG16I,
                [C.RED_INTEGER]: r.R16I,
              },
              [O.UNSIGNED_INT]: {
                [C.RGBA_INTEGER]: r.RGBA32UI,
                [C.RGB_INTEGER]: r.RGB32UI,
                [C.RG_INTEGER]: r.RG32UI,
                [C.RED_INTEGER]: r.R32UI,
                [C.DEPTH_COMPONENT]: r.DEPTH_COMPONENT24,
              },
              [O.INT]: {
                [C.RGBA_INTEGER]: r.RGBA32I,
                [C.RGB_INTEGER]: r.RGB32I,
                [C.RG_INTEGER]: r.RG32I,
                [C.RED_INTEGER]: r.R32I,
              },
              [O.FLOAT]: {
                [C.RGBA]: r.RGBA32F,
                [C.RGB]: r.RGB32F,
                [C.RG]: r.RG32F,
                [C.RED]: r.R32F,
                [C.DEPTH_COMPONENT]: r.DEPTH_COMPONENT32F,
              },
              [O.HALF_FLOAT]: {
                [C.RGBA]: r.RGBA16F,
                [C.RGB]: r.RGB16F,
                [C.RG]: r.RG16F,
                [C.RED]: r.R16F,
              },
              [O.UNSIGNED_SHORT_5_6_5]: { [C.RGB]: r.RGB565 },
              [O.UNSIGNED_SHORT_4_4_4_4]: { [C.RGBA]: r.RGBA4 },
              [O.UNSIGNED_SHORT_5_5_5_1]: { [C.RGBA]: r.RGB5_A1 },
              [O.UNSIGNED_INT_2_10_10_10_REV]: {
                [C.RGBA]: r.RGB10_A2,
                [C.RGBA_INTEGER]: r.RGB10_A2UI,
              },
              [O.UNSIGNED_INT_10F_11F_11F_REV]: { [C.RGB]: r.R11F_G11F_B10F },
              [O.UNSIGNED_INT_5_9_9_9_REV]: { [C.RGB]: r.RGB9_E5 },
              [O.UNSIGNED_INT_24_8]: { [C.DEPTH_STENCIL]: r.DEPTH24_STENCIL8 },
              [O.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
                [C.DEPTH_STENCIL]: r.DEPTH32F_STENCIL8,
              },
            })
          : (t = {
              [O.UNSIGNED_BYTE]: {
                [C.RGBA]: r.RGBA,
                [C.RGB]: r.RGB,
                [C.ALPHA]: r.ALPHA,
                [C.LUMINANCE]: r.LUMINANCE,
                [C.LUMINANCE_ALPHA]: r.LUMINANCE_ALPHA,
              },
              [O.UNSIGNED_SHORT_5_6_5]: { [C.RGB]: r.RGB },
              [O.UNSIGNED_SHORT_4_4_4_4]: { [C.RGBA]: r.RGBA },
              [O.UNSIGNED_SHORT_5_5_5_1]: { [C.RGBA]: r.RGBA },
            }),
        t
      );
    }
    class aa {
      constructor(t) {
        (this.renderer = t),
          (this.boundTextures = []),
          (this.currentLocation = -1),
          (this.managedTextures = []),
          (this._unknownBoundTextures = !1),
          (this.unknownTexture = new $()),
          (this.hasIntegerTextures = !1);
      }
      contextChange() {
        const t = (this.gl = this.renderer.gl);
        (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
          (this.webGLVersion = this.renderer.context.webGLVersion),
          (this.internalFormats = Cl(t)),
          (this.samplerTypes = Il(t));
        const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = e;
        for (let i = 0; i < e; i++) this.boundTextures[i] = null;
        this.emptyTextures = {};
        const s = new pr(t.createTexture());
        t.bindTexture(t.TEXTURE_2D, s.texture),
          t.texImage2D(
            t.TEXTURE_2D,
            0,
            t.RGBA,
            1,
            1,
            0,
            t.RGBA,
            t.UNSIGNED_BYTE,
            new Uint8Array(4)
          ),
          (this.emptyTextures[t.TEXTURE_2D] = s),
          (this.emptyTextures[t.TEXTURE_CUBE_MAP] = new pr(t.createTexture())),
          t.bindTexture(
            t.TEXTURE_CUBE_MAP,
            this.emptyTextures[t.TEXTURE_CUBE_MAP].texture
          );
        for (let i = 0; i < 6; i++)
          t.texImage2D(
            t.TEXTURE_CUBE_MAP_POSITIVE_X + i,
            0,
            t.RGBA,
            1,
            1,
            0,
            t.RGBA,
            t.UNSIGNED_BYTE,
            null
          );
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
          t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
        for (let i = 0; i < this.boundTextures.length; i++) this.bind(null, i);
      }
      bind(t, e = 0) {
        const { gl: s } = this;
        if (
          ((t = t == null ? void 0 : t.castToBaseTexture()),
          (t == null ? void 0 : t.valid) && !t.parentTextureArray)
        ) {
          t.touched = this.renderer.textureGC.count;
          const i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
          this.boundTextures[e] !== t &&
            (this.currentLocation !== e &&
              ((this.currentLocation = e), s.activeTexture(s.TEXTURE0 + e)),
            s.bindTexture(t.target, i.texture)),
            i.dirtyId !== t.dirtyId
              ? (this.currentLocation !== e &&
                  ((this.currentLocation = e), s.activeTexture(s.TEXTURE0 + e)),
                this.updateTexture(t))
              : i.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
            (this.boundTextures[e] = t);
        } else
          this.currentLocation !== e &&
            ((this.currentLocation = e), s.activeTexture(s.TEXTURE0 + e)),
            s.bindTexture(
              s.TEXTURE_2D,
              this.emptyTextures[s.TEXTURE_2D].texture
            ),
            (this.boundTextures[e] = null);
      }
      reset() {
        (this._unknownBoundTextures = !0),
          (this.hasIntegerTextures = !1),
          (this.currentLocation = -1);
        for (let t = 0; t < this.boundTextures.length; t++)
          this.boundTextures[t] = this.unknownTexture;
      }
      unbind(t) {
        const { gl: e, boundTextures: s } = this;
        if (this._unknownBoundTextures) {
          this._unknownBoundTextures = !1;
          for (let i = 0; i < s.length; i++)
            s[i] === this.unknownTexture && this.bind(null, i);
        }
        for (let i = 0; i < s.length; i++)
          s[i] === t &&
            (this.currentLocation !== i &&
              (e.activeTexture(e.TEXTURE0 + i), (this.currentLocation = i)),
            e.bindTexture(t.target, this.emptyTextures[t.target].texture),
            (s[i] = null));
      }
      ensureSamplerType(t) {
        const {
          boundTextures: e,
          hasIntegerTextures: s,
          CONTEXT_UID: i,
        } = this;
        if (s)
          for (let n = t - 1; n >= 0; --n) {
            const a = e[n];
            a &&
              a._glTextures[i].samplerType !== B.FLOAT &&
              this.renderer.texture.unbind(a);
          }
      }
      initTexture(t) {
        const e = new pr(this.gl.createTexture());
        return (
          (e.dirtyId = -1),
          (t._glTextures[this.CONTEXT_UID] = e),
          this.managedTextures.push(t),
          t.on("dispose", this.destroyTexture, this),
          e
        );
      }
      initTextureType(t, e) {
        var s;
        (e.internalFormat =
          ((s = this.internalFormats[t.type]) == null ? void 0 : s[t.format]) ??
          t.format),
          (e.samplerType = this.samplerTypes[e.internalFormat] ?? B.FLOAT),
          this.webGLVersion === 2 && t.type === O.HALF_FLOAT
            ? (e.type = this.gl.HALF_FLOAT)
            : (e.type = t.type);
      }
      updateTexture(t) {
        var i;
        const e = t._glTextures[this.CONTEXT_UID];
        if (!e) return;
        const s = this.renderer;
        if (
          (this.initTextureType(t, e),
          (i = t.resource) == null ? void 0 : i.upload(s, t, e))
        )
          e.samplerType !== B.FLOAT && (this.hasIntegerTextures = !0);
        else {
          const n = t.realWidth,
            a = t.realHeight,
            o = s.gl;
          (e.width !== n || e.height !== a || e.dirtyId < 0) &&
            ((e.width = n),
            (e.height = a),
            o.texImage2D(
              t.target,
              0,
              e.internalFormat,
              n,
              a,
              0,
              t.format,
              e.type,
              null
            ));
        }
        t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
          (e.dirtyId = t.dirtyId);
      }
      destroyTexture(t, e) {
        const { gl: s } = this;
        if (
          ((t = t.castToBaseTexture()),
          t._glTextures[this.CONTEXT_UID] &&
            (this.unbind(t),
            s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
            t.off("dispose", this.destroyTexture, this),
            delete t._glTextures[this.CONTEXT_UID],
            !e))
        ) {
          const i = this.managedTextures.indexOf(t);
          i !== -1 && Fe(this.managedTextures, i, 1);
        }
      }
      updateTextureStyle(t) {
        var s;
        const e = t._glTextures[this.CONTEXT_UID];
        e &&
          ((t.mipmap === Qt.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo
            ? (e.mipmap = !1)
            : (e.mipmap = t.mipmap >= 1),
          this.webGLVersion !== 2 && !t.isPowerOfTwo
            ? (e.wrapMode = ge.CLAMP)
            : (e.wrapMode = t.wrapMode),
          ((s = t.resource) != null && s.style(this.renderer, t, e)) ||
            this.setStyle(t, e),
          (e.dirtyStyleId = t.dirtyStyleId));
      }
      setStyle(t, e) {
        const s = this.gl;
        if (
          (e.mipmap && t.mipmap !== Qt.ON_MANUAL && s.generateMipmap(t.target),
          s.texParameteri(t.target, s.TEXTURE_WRAP_S, e.wrapMode),
          s.texParameteri(t.target, s.TEXTURE_WRAP_T, e.wrapMode),
          e.mipmap)
        ) {
          s.texParameteri(
            t.target,
            s.TEXTURE_MIN_FILTER,
            t.scaleMode === me.LINEAR
              ? s.LINEAR_MIPMAP_LINEAR
              : s.NEAREST_MIPMAP_NEAREST
          );
          const i = this.renderer.context.extensions.anisotropicFiltering;
          if (i && t.anisotropicLevel > 0 && t.scaleMode === me.LINEAR) {
            const n = Math.min(
              t.anisotropicLevel,
              s.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            );
            s.texParameterf(t.target, i.TEXTURE_MAX_ANISOTROPY_EXT, n);
          }
        } else
          s.texParameteri(
            t.target,
            s.TEXTURE_MIN_FILTER,
            t.scaleMode === me.LINEAR ? s.LINEAR : s.NEAREST
          );
        s.texParameteri(
          t.target,
          s.TEXTURE_MAG_FILTER,
          t.scaleMode === me.LINEAR ? s.LINEAR : s.NEAREST
        );
      }
      destroy() {
        this.renderer = null;
      }
    }
    (aa.extension = { type: M.RendererSystem, name: "texture" }), k.add(aa);
    class oa {
      constructor(t) {
        this.renderer = t;
      }
      contextChange() {
        (this.gl = this.renderer.gl),
          (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
      }
      bind(t) {
        const { gl: e, CONTEXT_UID: s } = this,
          i = t._glTransformFeedbacks[s] || this.createGLTransformFeedback(t);
        e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, i);
      }
      unbind() {
        const { gl: t } = this;
        t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
      }
      beginTransformFeedback(t, e) {
        const { gl: s, renderer: i } = this;
        e && i.shader.bind(e), s.beginTransformFeedback(t);
      }
      endTransformFeedback() {
        const { gl: t } = this;
        t.endTransformFeedback();
      }
      createGLTransformFeedback(t) {
        const { gl: e, renderer: s, CONTEXT_UID: i } = this,
          n = e.createTransformFeedback();
        (t._glTransformFeedbacks[i] = n),
          e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n);
        for (let a = 0; a < t.buffers.length; a++) {
          const o = t.buffers[a];
          o &&
            (s.buffer.update(o),
            o._glBuffers[i].refCount++,
            e.bindBufferBase(
              e.TRANSFORM_FEEDBACK_BUFFER,
              a,
              o._glBuffers[i].buffer || null
            ));
        }
        return (
          e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null),
          t.disposeRunner.add(this),
          n
        );
      }
      disposeTransformFeedback(t, e) {
        const s = t._glTransformFeedbacks[this.CONTEXT_UID],
          i = this.gl;
        t.disposeRunner.remove(this);
        const n = this.renderer.buffer;
        if (n)
          for (let a = 0; a < t.buffers.length; a++) {
            const o = t.buffers[a];
            if (!o) continue;
            const h = o._glBuffers[this.CONTEXT_UID];
            h && (h.refCount--, h.refCount === 0 && !e && n.dispose(o, e));
          }
        s &&
          (e || i.deleteTransformFeedback(s),
          delete t._glTransformFeedbacks[this.CONTEXT_UID]);
      }
      destroy() {
        this.renderer = null;
      }
    }
    (oa.extension = { type: M.RendererSystem, name: "transformFeedback" }),
      k.add(oa);
    class Js {
      constructor(t) {
        this.renderer = t;
      }
      init(t) {
        (this.screen = new W(0, 0, t.width, t.height)),
          (this.element = t.view || N.ADAPTER.createCanvas()),
          (this.resolution = t.resolution || N.RESOLUTION),
          (this.autoDensity = !!t.autoDensity);
      }
      resizeView(t, e) {
        (this.element.width = Math.round(t * this.resolution)),
          (this.element.height = Math.round(e * this.resolution));
        const s = this.element.width / this.resolution,
          i = this.element.height / this.resolution;
        (this.screen.width = s),
          (this.screen.height = i),
          this.autoDensity &&
            ((this.element.style.width = `${s}px`),
            (this.element.style.height = `${i}px`)),
          this.renderer.emit("resize", s, i),
          this.renderer.runners.resize.emit(
            this.screen.width,
            this.screen.height
          );
      }
      destroy(t) {
        var e;
        t &&
          ((e = this.element.parentNode) == null ||
            e.removeChild(this.element)),
          (this.renderer = null),
          (this.element = null),
          (this.screen = null);
      }
    }
    (Js.defaultOptions = {
      width: 800,
      height: 600,
      resolution: void 0,
      autoDensity: !1,
    }),
      (Js.extension = {
        type: [M.RendererSystem, M.CanvasRendererSystem],
        name: "_view",
      }),
      k.add(Js),
      (N.PREFER_ENV = es.WEBGL2),
      (N.STRICT_TEXTURE_CACHE = !1),
      (N.RENDER_OPTIONS = {
        ...Ws.defaultOptions,
        ...$s.defaultOptions,
        ...Js.defaultOptions,
        ...Ks.defaultOptions,
      }),
      Object.defineProperties(N, {
        WRAP_MODE: {
          get() {
            return $.defaultOptions.wrapMode;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"
            ),
              ($.defaultOptions.wrapMode = r);
          },
        },
        SCALE_MODE: {
          get() {
            return $.defaultOptions.scaleMode;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"
            ),
              ($.defaultOptions.scaleMode = r);
          },
        },
        MIPMAP_TEXTURES: {
          get() {
            return $.defaultOptions.mipmap;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"
            ),
              ($.defaultOptions.mipmap = r);
          },
        },
        ANISOTROPIC_LEVEL: {
          get() {
            return $.defaultOptions.anisotropicLevel;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"
            ),
              ($.defaultOptions.anisotropicLevel = r);
          },
        },
        FILTER_RESOLUTION: {
          get() {
            return (
              V(
                "7.1.0",
                "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"
              ),
              gt.defaultResolution
            );
          },
          set(r) {
            gt.defaultResolution = r;
          },
        },
        FILTER_MULTISAMPLE: {
          get() {
            return (
              V(
                "7.1.0",
                "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"
              ),
              gt.defaultMultisample
            );
          },
          set(r) {
            gt.defaultMultisample = r;
          },
        },
        SPRITE_MAX_TEXTURES: {
          get() {
            return Te.defaultMaxTextures;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"
            ),
              (Te.defaultMaxTextures = r);
          },
        },
        SPRITE_BATCH_SIZE: {
          get() {
            return Te.defaultBatchSize;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"
            ),
              (Te.defaultBatchSize = r);
          },
        },
        CAN_UPLOAD_SAME_BUFFER: {
          get() {
            return Te.canUploadSameBuffer;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"
            ),
              (Te.canUploadSameBuffer = r);
          },
        },
        GC_MODE: {
          get() {
            return we.defaultMode;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"
            ),
              (we.defaultMode = r);
          },
        },
        GC_MAX_IDLE: {
          get() {
            return we.defaultMaxIdle;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"
            ),
              (we.defaultMaxIdle = r);
          },
        },
        GC_MAX_CHECK_COUNT: {
          get() {
            return we.defaultCheckCountMax;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"
            ),
              (we.defaultCheckCountMax = r);
          },
        },
        PRECISION_VERTEX: {
          get() {
            return Xt.defaultVertexPrecision;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"
            ),
              (Xt.defaultVertexPrecision = r);
          },
        },
        PRECISION_FRAGMENT: {
          get() {
            return Xt.defaultFragmentPrecision;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"
            ),
              (Xt.defaultFragmentPrecision = r);
          },
        },
      });
    var Se = ((r) => (
      (r[(r.INTERACTION = 50)] = "INTERACTION"),
      (r[(r.HIGH = 25)] = "HIGH"),
      (r[(r.NORMAL = 0)] = "NORMAL"),
      (r[(r.LOW = -25)] = "LOW"),
      (r[(r.UTILITY = -50)] = "UTILITY"),
      r
    ))(Se || {});
    class fr {
      constructor(t, e = null, s = 0, i = !1) {
        (this.next = null),
          (this.previous = null),
          (this._destroyed = !1),
          (this.fn = t),
          (this.context = e),
          (this.priority = s),
          (this.once = i);
      }
      match(t, e = null) {
        return this.fn === t && this.context === e;
      }
      emit(t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        const e = this.next;
        return (
          this.once && this.destroy(!0),
          this._destroyed && (this.next = null),
          e
        );
      }
      connect(t) {
        (this.previous = t),
          t.next && (t.next.previous = this),
          (this.next = t.next),
          (t.next = this);
      }
      destroy(t = !1) {
        (this._destroyed = !0),
          (this.fn = null),
          (this.context = null),
          this.previous && (this.previous.next = this.next),
          this.next && (this.next.previous = this.previous);
        const e = this.next;
        return (this.next = t ? null : e), (this.previous = null), e;
      }
    }
    const ha = class At {
      constructor() {
        (this.autoStart = !1),
          (this.deltaTime = 1),
          (this.lastTime = -1),
          (this.speed = 1),
          (this.started = !1),
          (this._requestId = null),
          (this._maxElapsedMS = 100),
          (this._minElapsedMS = 0),
          (this._protected = !1),
          (this._lastFrame = -1),
          (this._head = new fr(null, null, 1 / 0)),
          (this.deltaMS = 1 / At.targetFPMS),
          (this.elapsedMS = 1 / At.targetFPMS),
          (this._tick = (t) => {
            (this._requestId = null),
              this.started &&
                (this.update(t),
                this.started &&
                  this._requestId === null &&
                  this._head.next &&
                  (this._requestId = requestAnimationFrame(this._tick)));
          });
      }
      _requestIfNeeded() {
        this._requestId === null &&
          this._head.next &&
          ((this.lastTime = performance.now()),
          (this._lastFrame = this.lastTime),
          (this._requestId = requestAnimationFrame(this._tick)));
      }
      _cancelIfNeeded() {
        this._requestId !== null &&
          (cancelAnimationFrame(this._requestId), (this._requestId = null));
      }
      _startIfPossible() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start();
      }
      add(t, e, s = Se.NORMAL) {
        return this._addListener(new fr(t, e, s));
      }
      addOnce(t, e, s = Se.NORMAL) {
        return this._addListener(new fr(t, e, s, !0));
      }
      _addListener(t) {
        let e = this._head.next,
          s = this._head;
        if (!e) t.connect(s);
        else {
          for (; e; ) {
            if (t.priority > e.priority) {
              t.connect(s);
              break;
            }
            (s = e), (e = e.next);
          }
          t.previous || t.connect(s);
        }
        return this._startIfPossible(), this;
      }
      remove(t, e) {
        let s = this._head.next;
        for (; s; ) s.match(t, e) ? (s = s.destroy()) : (s = s.next);
        return this._head.next || this._cancelIfNeeded(), this;
      }
      get count() {
        if (!this._head) return 0;
        let t = 0,
          e = this._head;
        for (; (e = e.next); ) t++;
        return t;
      }
      start() {
        this.started || ((this.started = !0), this._requestIfNeeded());
      }
      stop() {
        this.started && ((this.started = !1), this._cancelIfNeeded());
      }
      destroy() {
        if (!this._protected) {
          this.stop();
          let t = this._head.next;
          for (; t; ) t = t.destroy(!0);
          this._head.destroy(), (this._head = null);
        }
      }
      update(t = performance.now()) {
        let e;
        if (t > this.lastTime) {
          if (
            ((e = this.elapsedMS = t - this.lastTime),
            e > this._maxElapsedMS && (e = this._maxElapsedMS),
            (e *= this.speed),
            this._minElapsedMS)
          ) {
            const n = (t - this._lastFrame) | 0;
            if (n < this._minElapsedMS) return;
            this._lastFrame = t - (n % this._minElapsedMS);
          }
          (this.deltaMS = e), (this.deltaTime = this.deltaMS * At.targetFPMS);
          const s = this._head;
          let i = s.next;
          for (; i; ) i = i.emit(this.deltaTime);
          s.next || this._cancelIfNeeded();
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t;
      }
      get FPS() {
        return 1e3 / this.elapsedMS;
      }
      get minFPS() {
        return 1e3 / this._maxElapsedMS;
      }
      set minFPS(t) {
        const e = Math.min(this.maxFPS, t),
          s = Math.min(Math.max(0, e) / 1e3, At.targetFPMS);
        this._maxElapsedMS = 1 / s;
      }
      get maxFPS() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
      }
      set maxFPS(t) {
        if (t === 0) this._minElapsedMS = 0;
        else {
          const e = Math.max(this.minFPS, t);
          this._minElapsedMS = 1 / (e / 1e3);
        }
      }
      static get shared() {
        if (!At._shared) {
          const t = (At._shared = new At());
          (t.autoStart = !0), (t._protected = !0);
        }
        return At._shared;
      }
      static get system() {
        if (!At._system) {
          const t = (At._system = new At());
          (t.autoStart = !0), (t._protected = !0);
        }
        return At._system;
      }
    };
    ha.targetFPMS = 0.06;
    let xt = ha;
    Object.defineProperties(N, {
      TARGET_FPMS: {
        get() {
          return xt.targetFPMS;
        },
        set(r) {
          V(
            "7.1.0",
            "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"
          ),
            (xt.targetFPMS = r);
        },
      },
    });
    class la {
      static init(t) {
        (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
          Object.defineProperty(this, "ticker", {
            set(e) {
              this._ticker && this._ticker.remove(this.render, this),
                (this._ticker = e),
                e && e.add(this.render, this, Se.LOW);
            },
            get() {
              return this._ticker;
            },
          }),
          (this.stop = () => {
            this._ticker.stop();
          }),
          (this.start = () => {
            this._ticker.start();
          }),
          (this._ticker = null),
          (this.ticker = t.sharedTicker ? xt.shared : new xt()),
          t.autoStart && this.start();
      }
      static destroy() {
        if (this._ticker) {
          const t = this._ticker;
          (this.ticker = null), t.destroy();
        }
      }
    }
    (la.extension = M.Application), k.add(la);
    const ua = [];
    k.handleByList(M.Renderer, ua);
    function Rl(r) {
      for (const t of ua) if (t.test(r)) return new t(r);
      throw new Error("Unable to auto-detect a suitable renderer.");
    }
    var Pl = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
      Ml = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
    const Dl = Pl,
      ca = Ml;
    class da {
      constructor(t) {
        this.renderer = t;
      }
      contextChange(t) {
        let e;
        if (this.renderer.context.webGLVersion === 1) {
          const s = t.getParameter(t.FRAMEBUFFER_BINDING);
          t.bindFramebuffer(t.FRAMEBUFFER, null),
            (e = t.getParameter(t.SAMPLES)),
            t.bindFramebuffer(t.FRAMEBUFFER, s);
        } else {
          const s = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
          t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            (e = t.getParameter(t.SAMPLES)),
            t.bindFramebuffer(t.DRAW_FRAMEBUFFER, s);
        }
        e >= ht.HIGH
          ? (this.multisample = ht.HIGH)
          : e >= ht.MEDIUM
          ? (this.multisample = ht.MEDIUM)
          : e >= ht.LOW
          ? (this.multisample = ht.LOW)
          : (this.multisample = ht.NONE);
      }
      destroy() {}
    }
    (da.extension = { type: M.RendererSystem, name: "_multisample" }),
      k.add(da);
    class Bl {
      constructor(t) {
        (this.buffer = t || null),
          (this.updateID = -1),
          (this.byteLength = -1),
          (this.refCount = 0);
      }
    }
    class pa {
      constructor(t) {
        (this.renderer = t),
          (this.managedBuffers = {}),
          (this.boundBufferBases = {});
      }
      destroy() {
        this.renderer = null;
      }
      contextChange() {
        this.disposeAll(!0),
          (this.gl = this.renderer.gl),
          (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
      }
      bind(t) {
        const { gl: e, CONTEXT_UID: s } = this,
          i = t._glBuffers[s] || this.createGLBuffer(t);
        e.bindBuffer(t.type, i.buffer);
      }
      unbind(t) {
        const { gl: e } = this;
        e.bindBuffer(t, null);
      }
      bindBufferBase(t, e) {
        const { gl: s, CONTEXT_UID: i } = this;
        if (this.boundBufferBases[e] !== t) {
          const n = t._glBuffers[i] || this.createGLBuffer(t);
          (this.boundBufferBases[e] = t),
            s.bindBufferBase(s.UNIFORM_BUFFER, e, n.buffer);
        }
      }
      bindBufferRange(t, e, s) {
        const { gl: i, CONTEXT_UID: n } = this;
        s = s || 0;
        const a = t._glBuffers[n] || this.createGLBuffer(t);
        i.bindBufferRange(i.UNIFORM_BUFFER, e || 0, a.buffer, s * 256, 256);
      }
      update(t) {
        const { gl: e, CONTEXT_UID: s } = this,
          i = t._glBuffers[s] || this.createGLBuffer(t);
        if (t._updateID !== i.updateID)
          if (
            ((i.updateID = t._updateID),
            e.bindBuffer(t.type, i.buffer),
            i.byteLength >= t.data.byteLength)
          )
            e.bufferSubData(t.type, 0, t.data);
          else {
            const n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
            (i.byteLength = t.data.byteLength), e.bufferData(t.type, t.data, n);
          }
      }
      dispose(t, e) {
        if (!this.managedBuffers[t.id]) return;
        delete this.managedBuffers[t.id];
        const s = t._glBuffers[this.CONTEXT_UID],
          i = this.gl;
        t.disposeRunner.remove(this),
          s &&
            (e || i.deleteBuffer(s.buffer),
            delete t._glBuffers[this.CONTEXT_UID]);
      }
      disposeAll(t) {
        const e = Object.keys(this.managedBuffers);
        for (let s = 0; s < e.length; s++)
          this.dispose(this.managedBuffers[e[s]], t);
      }
      createGLBuffer(t) {
        const { CONTEXT_UID: e, gl: s } = this;
        return (
          (t._glBuffers[e] = new Bl(s.createBuffer())),
          (this.managedBuffers[t.id] = t),
          t.disposeRunner.add(this),
          t._glBuffers[e]
        );
      }
    }
    (pa.extension = { type: M.RendererSystem, name: "buffer" }), k.add(pa);
    class fa {
      constructor(t) {
        this.renderer = t;
      }
      render(t, e) {
        const s = this.renderer;
        let i, n, a, o;
        if (
          (e &&
            ((i = e.renderTexture),
            (n = e.clear),
            (a = e.transform),
            (o = e.skipUpdateTransform)),
          (this.renderingToScreen = !i),
          s.runners.prerender.emit(),
          s.emit("prerender"),
          (s.projection.transform = a),
          !s.context.isLost)
        ) {
          if ((i || (this.lastObjectRendered = t), !o)) {
            const h = t.enableTempParent();
            t.updateTransform(), t.disableTempParent(h);
          }
          s.renderTexture.bind(i),
            s.batch.currentRenderer.start(),
            (n ?? s.background.clearBeforeRender) && s.renderTexture.clear(),
            t.render(s),
            s.batch.currentRenderer.flush(),
            i && (e.blit && s.framebuffer.blit(), i.baseTexture.update()),
            s.runners.postrender.emit(),
            (s.projection.transform = null),
            s.emit("postrender");
        }
      }
      destroy() {
        (this.renderer = null), (this.lastObjectRendered = null);
      }
    }
    (fa.extension = { type: M.RendererSystem, name: "objectRenderer" }),
      k.add(fa);
    const Zs = class ln extends Sl {
      constructor(t) {
        super(),
          (this.type = yp.WEBGL),
          (t = Object.assign({}, N.RENDER_OPTIONS, t)),
          (this.gl = null),
          (this.CONTEXT_UID = 0),
          (this.globalUniforms = new Bt({ projectionMatrix: new tt() }, !0));
        const e = {
          runners: [
            "init",
            "destroy",
            "contextChange",
            "resolutionChange",
            "reset",
            "update",
            "postrender",
            "prerender",
            "resize",
          ],
          systems: ln.__systems,
          priority: [
            "_view",
            "textureGenerator",
            "background",
            "_plugin",
            "startup",
            "context",
            "state",
            "texture",
            "buffer",
            "geometry",
            "framebuffer",
            "transformFeedback",
            "mask",
            "scissor",
            "stencil",
            "projection",
            "textureGC",
            "filter",
            "renderTexture",
            "batch",
            "objectRenderer",
            "_multisample",
          ],
        };
        this.setup(e),
          "useContextAlpha" in t &&
            (V(
              "7.0.0",
              "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"
            ),
            (t.premultipliedAlpha =
              t.useContextAlpha && t.useContextAlpha !== "notMultiplied"),
            (t.backgroundAlpha =
              t.useContextAlpha === !1 ? 1 : t.backgroundAlpha)),
          (this._plugin.rendererPlugins = ln.__plugins),
          (this.options = t),
          this.startup.run(this.options);
      }
      static test(t) {
        return t != null && t.forceCanvas ? !1 : vp();
      }
      render(t, e) {
        this.objectRenderer.render(t, e);
      }
      resize(t, e) {
        this._view.resizeView(t, e);
      }
      reset() {
        return this.runners.reset.emit(), this;
      }
      clear() {
        this.renderTexture.bind(), this.renderTexture.clear();
      }
      destroy(t = !1) {
        this.runners.destroy.items.reverse(),
          this.emitWithCustomOptions(this.runners.destroy, { _view: t }),
          super.destroy();
      }
      get plugins() {
        return this._plugin.plugins;
      }
      get multisample() {
        return this._multisample.multisample;
      }
      get width() {
        return this._view.element.width;
      }
      get height() {
        return this._view.element.height;
      }
      get resolution() {
        return this._view.resolution;
      }
      set resolution(t) {
        (this._view.resolution = t), this.runners.resolutionChange.emit(t);
      }
      get autoDensity() {
        return this._view.autoDensity;
      }
      get view() {
        return this._view.element;
      }
      get screen() {
        return this._view.screen;
      }
      get lastObjectRendered() {
        return this.objectRenderer.lastObjectRendered;
      }
      get renderingToScreen() {
        return this.objectRenderer.renderingToScreen;
      }
      get rendererLogId() {
        return `WebGL ${this.context.webGLVersion}`;
      }
      get clearBeforeRender() {
        return (
          V(
            "7.0.0",
            "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."
          ),
          this.background.clearBeforeRender
        );
      }
      get useContextAlpha() {
        return (
          V(
            "7.0.0",
            "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."
          ),
          this.context.useContextAlpha
        );
      }
      get preserveDrawingBuffer() {
        return (
          V(
            "7.0.0",
            "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"
          ),
          this.context.preserveDrawingBuffer
        );
      }
      get backgroundColor() {
        return (
          V(
            "7.0.0",
            "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
          ),
          this.background.color
        );
      }
      set backgroundColor(t) {
        V(
          "7.0.0",
          "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
        ),
          (this.background.color = t);
      }
      get backgroundAlpha() {
        return (
          V(
            "7.0.0",
            "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
          ),
          this.background.alpha
        );
      }
      set backgroundAlpha(t) {
        V(
          "7.0.0",
          "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
        ),
          (this.background.alpha = t);
      }
      get powerPreference() {
        return (
          V(
            "7.0.0",
            "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"
          ),
          this.context.powerPreference
        );
      }
      generateTexture(t, e) {
        return this.textureGenerator.generateTexture(t, e);
      }
    };
    (Zs.extension = { type: M.Renderer, priority: 1 }),
      (Zs.__plugins = {}),
      (Zs.__systems = {});
    let mr = Zs;
    k.handleByMap(M.RendererPlugin, mr.__plugins),
      k.handleByMap(M.RendererSystem, mr.__systems),
      k.add(mr);
    class ma extends os {
      constructor(t, e) {
        const { width: s, height: i } = e || {};
        super(s, i), (this.items = []), (this.itemDirtyIds = []);
        for (let n = 0; n < t; n++) {
          const a = new $();
          this.items.push(a), this.itemDirtyIds.push(-2);
        }
        (this.length = t), (this._load = null), (this.baseTexture = null);
      }
      initFromArray(t, e) {
        for (let s = 0; s < this.length; s++)
          t[s] &&
            (t[s].castToBaseTexture
              ? this.addBaseTextureAt(t[s].castToBaseTexture(), s)
              : t[s] instanceof os
              ? this.addResourceAt(t[s], s)
              : this.addResourceAt(Tn(t[s], e), s));
      }
      dispose() {
        for (let t = 0, e = this.length; t < e; t++) this.items[t].destroy();
        (this.items = null), (this.itemDirtyIds = null), (this._load = null);
      }
      addResourceAt(t, e) {
        if (!this.items[e]) throw new Error(`Index ${e} is out of bounds`);
        return (
          t.valid && !this.valid && this.resize(t.width, t.height),
          this.items[e].setResource(t),
          this
        );
      }
      bind(t) {
        if (this.baseTexture !== null)
          throw new Error("Only one base texture per TextureArray is allowed");
        super.bind(t);
        for (let e = 0; e < this.length; e++)
          (this.items[e].parentTextureArray = t),
            this.items[e].on("update", t.update, t);
      }
      unbind(t) {
        super.unbind(t);
        for (let e = 0; e < this.length; e++)
          (this.items[e].parentTextureArray = null),
            this.items[e].off("update", t.update, t);
      }
      load() {
        if (this._load) return this._load;
        const t = this.items
          .map((e) => e.resource)
          .filter((e) => e)
          .map((e) => e.load());
        return (
          (this._load = Promise.all(t).then(() => {
            const { realWidth: e, realHeight: s } = this.items[0];
            return this.resize(e, s), this.update(), Promise.resolve(this);
          })),
          this._load
        );
      }
    }
    class Ll extends ma {
      constructor(t, e) {
        const { width: s, height: i } = e || {};
        let n, a;
        Array.isArray(t) ? ((n = t), (a = t.length)) : (a = t),
          super(a, { width: s, height: i }),
          n && this.initFromArray(n, e);
      }
      addBaseTextureAt(t, e) {
        if (t.resource) this.addResourceAt(t.resource, e);
        else throw new Error("ArrayResource does not support RenderTexture");
        return this;
      }
      bind(t) {
        super.bind(t), (t.target = ws.TEXTURE_2D_ARRAY);
      }
      upload(t, e, s) {
        const { length: i, itemDirtyIds: n, items: a } = this,
          { gl: o } = t;
        s.dirtyId < 0 &&
          o.texImage3D(
            o.TEXTURE_2D_ARRAY,
            0,
            s.internalFormat,
            this._width,
            this._height,
            i,
            0,
            e.format,
            s.type,
            null
          );
        for (let h = 0; h < i; h++) {
          const l = a[h];
          n[h] < l.dirtyId &&
            ((n[h] = l.dirtyId),
            l.valid &&
              o.texSubImage3D(
                o.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                h,
                l.resource.width,
                l.resource.height,
                1,
                e.format,
                s.type,
                l.resource.source
              ));
        }
        return !0;
      }
    }
    class Nl extends ae {
      constructor(t) {
        super(t);
      }
      static test(t) {
        const { OffscreenCanvas: e } = globalThis;
        return e && t instanceof e
          ? !0
          : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
      }
    }
    const ga = class Rs extends ma {
      constructor(t, e) {
        const {
          width: s,
          height: i,
          autoLoad: n,
          linkBaseTexture: a,
        } = e || {};
        if (t && t.length !== Rs.SIDES)
          throw new Error(`Invalid length. Got ${t.length}, expected 6`);
        super(6, { width: s, height: i });
        for (let o = 0; o < Rs.SIDES; o++)
          this.items[o].target = ws.TEXTURE_CUBE_MAP_POSITIVE_X + o;
        (this.linkBaseTexture = a !== !1),
          t && this.initFromArray(t, e),
          n !== !1 && this.load();
      }
      bind(t) {
        super.bind(t), (t.target = ws.TEXTURE_CUBE_MAP);
      }
      addBaseTextureAt(t, e, s) {
        if ((s === void 0 && (s = this.linkBaseTexture), !this.items[e]))
          throw new Error(`Index ${e} is out of bounds`);
        if (
          !this.linkBaseTexture ||
          t.parentTextureArray ||
          Object.keys(t._glTextures).length > 0
        )
          if (t.resource) this.addResourceAt(t.resource, e);
          else
            throw new Error(
              "CubeResource does not support copying of renderTexture."
            );
        else
          (t.target = ws.TEXTURE_CUBE_MAP_POSITIVE_X + e),
            (t.parentTextureArray = this.baseTexture),
            (this.items[e] = t);
        return (
          t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
          (this.items[e] = t),
          this
        );
      }
      upload(t, e, s) {
        const i = this.itemDirtyIds;
        for (let n = 0; n < Rs.SIDES; n++) {
          const a = this.items[n];
          (i[n] < a.dirtyId || s.dirtyId < e.dirtyId) &&
            (a.valid && a.resource
              ? (a.resource.upload(t, a, s), (i[n] = a.dirtyId))
              : i[n] < -1 &&
                (t.gl.texImage2D(
                  a.target,
                  0,
                  s.internalFormat,
                  e.realWidth,
                  e.realHeight,
                  0,
                  e.format,
                  s.type,
                  null
                ),
                (i[n] = -1)));
        }
        return !0;
      }
      static test(t) {
        return Array.isArray(t) && t.length === Rs.SIDES;
      }
    };
    ga.SIDES = 6;
    let Ol = ga;
    class He extends ae {
      constructor(t, e) {
        e = e || {};
        let s, i, n;
        typeof t == "string"
          ? ((s = He.EMPTY), (i = t), (n = !0))
          : ((s = t), (i = null), (n = !1)),
          super(s),
          (this.url = i),
          (this.crossOrigin = e.crossOrigin ?? !0),
          (this.alphaMode =
            typeof e.alphaMode == "number" ? e.alphaMode : null),
          (this.ownsImageBitmap = e.ownsImageBitmap ?? n),
          (this._load = null),
          e.autoLoad !== !1 && this.load();
      }
      load() {
        return this._load
          ? this._load
          : ((this._load = new Promise(async (t, e) => {
              if (this.url === null) {
                t(this);
                return;
              }
              try {
                const s = await N.ADAPTER.fetch(this.url, {
                  mode: this.crossOrigin ? "cors" : "no-cors",
                });
                if (this.destroyed) return;
                const i = await s.blob();
                if (this.destroyed) return;
                const n = await createImageBitmap(i, {
                  premultiplyAlpha:
                    this.alphaMode === null || this.alphaMode === Et.UNPACK
                      ? "premultiply"
                      : "none",
                });
                if (this.destroyed) {
                  n.close();
                  return;
                }
                (this.source = n), this.update(), t(this);
              } catch (s) {
                if (this.destroyed) return;
                e(s), this.onError.emit(s);
              }
            })),
            this._load);
      }
      upload(t, e, s) {
        return this.source instanceof ImageBitmap
          ? (typeof this.alphaMode == "number" &&
              (e.alphaMode = this.alphaMode),
            super.upload(t, e, s))
          : (this.load(), !1);
      }
      dispose() {
        this.ownsImageBitmap &&
          this.source instanceof ImageBitmap &&
          this.source.close(),
          super.dispose(),
          (this._load = null);
      }
      static test(t) {
        return (
          !!globalThis.createImageBitmap &&
          typeof ImageBitmap < "u" &&
          (typeof t == "string" || t instanceof ImageBitmap)
        );
      }
      static get EMPTY() {
        return (
          (He._EMPTY = He._EMPTY ?? N.ADAPTER.createCanvas(0, 0)), He._EMPTY
        );
      }
    }
    const gr = class zi extends ae {
      constructor(t, e) {
        (e = e || {}),
          super(N.ADAPTER.createCanvas()),
          (this._width = 0),
          (this._height = 0),
          (this.svg = t),
          (this.scale = e.scale || 1),
          (this._overrideWidth = e.width),
          (this._overrideHeight = e.height),
          (this._resolve = null),
          (this._crossorigin = e.crossorigin),
          (this._load = null),
          e.autoLoad !== !1 && this.load();
      }
      load() {
        return this._load
          ? this._load
          : ((this._load = new Promise((t) => {
              if (
                ((this._resolve = () => {
                  this.update(), t(this);
                }),
                zi.SVG_XML.test(this.svg.trim()))
              ) {
                if (!btoa)
                  throw new Error(
                    "Your browser doesn't support base64 conversions."
                  );
                this.svg = `data:image/svg+xml;base64,${btoa(
                  unescape(encodeURIComponent(this.svg))
                )}`;
              }
              this._loadSvg();
            })),
            this._load);
      }
      _loadSvg() {
        const t = new Image();
        ae.crossOrigin(t, this.svg, this._crossorigin),
          (t.src = this.svg),
          (t.onerror = (e) => {
            this._resolve && ((t.onerror = null), this.onError.emit(e));
          }),
          (t.onload = () => {
            if (!this._resolve) return;
            const e = t.width,
              s = t.height;
            if (!e || !s)
              throw new Error(
                "The SVG image must have width and height defined (in pixels), canvas API needs them."
              );
            let i = e * this.scale,
              n = s * this.scale;
            (this._overrideWidth || this._overrideHeight) &&
              ((i = this._overrideWidth || (this._overrideHeight / s) * e),
              (n = this._overrideHeight || (this._overrideWidth / e) * s)),
              (i = Math.round(i)),
              (n = Math.round(n));
            const a = this.source;
            (a.width = i),
              (a.height = n),
              (a._pixiId = `canvas_${_e()}`),
              a.getContext("2d").drawImage(t, 0, 0, e, s, 0, 0, i, n),
              this._resolve(),
              (this._resolve = null);
          });
      }
      static getSize(t) {
        const e = zi.SVG_SIZE.exec(t),
          s = {};
        return (
          e &&
            ((s[e[1]] = Math.round(parseFloat(e[3]))),
            (s[e[5]] = Math.round(parseFloat(e[7])))),
          s
        );
      }
      dispose() {
        super.dispose(), (this._resolve = null), (this._crossorigin = null);
      }
      static test(t, e) {
        return (
          e === "svg" ||
          (typeof t == "string" && t.startsWith("data:image/svg+xml")) ||
          (typeof t == "string" && zi.SVG_XML.test(t))
        );
      }
    };
    (gr.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m),
      (gr.SVG_SIZE =
        /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i);
    let _r = gr;
    const xr = class un extends ae {
      constructor(t, e) {
        if (((e = e || {}), !(t instanceof HTMLVideoElement))) {
          const s = document.createElement("video");
          e.autoLoad !== !1 && s.setAttribute("preload", "auto"),
            e.playsinline !== !1 &&
              (s.setAttribute("webkit-playsinline", ""),
              s.setAttribute("playsinline", "")),
            e.muted === !0 && (s.setAttribute("muted", ""), (s.muted = !0)),
            e.loop === !0 && s.setAttribute("loop", ""),
            e.autoPlay !== !1 && s.setAttribute("autoplay", ""),
            typeof t == "string" && (t = [t]);
          const i = t[0].src || t[0];
          ae.crossOrigin(s, i, e.crossorigin);
          for (let n = 0; n < t.length; ++n) {
            const a = document.createElement("source");
            let { src: o, mime: h } = t[n];
            if (((o = o || t[n]), o.startsWith("data:")))
              h = o.slice(5, o.indexOf(";"));
            else if (!o.startsWith("blob:")) {
              const l = o.split("?").shift().toLowerCase(),
                u = l.slice(l.lastIndexOf(".") + 1);
              h = h || un.MIME_TYPES[u] || `video/${u}`;
            }
            (a.src = o), h && (a.type = h), s.appendChild(a);
          }
          t = s;
        }
        super(t),
          (this.noSubImage = !0),
          (this._autoUpdate = !0),
          (this._isConnectedToTicker = !1),
          (this._updateFPS = e.updateFPS || 0),
          (this._msToNextUpdate = 0),
          (this.autoPlay = e.autoPlay !== !1),
          (this._videoFrameRequestCallback =
            this._videoFrameRequestCallback.bind(this)),
          (this._videoFrameRequestCallbackHandle = null),
          (this._load = null),
          (this._resolve = null),
          (this._reject = null),
          (this._onCanPlay = this._onCanPlay.bind(this)),
          (this._onError = this._onError.bind(this)),
          (this._onPlayStart = this._onPlayStart.bind(this)),
          (this._onPlayStop = this._onPlayStop.bind(this)),
          (this._onSeeked = this._onSeeked.bind(this)),
          e.autoLoad !== !1 && this.load();
      }
      update(t = 0) {
        if (!this.destroyed) {
          if (this._updateFPS) {
            const e = xt.shared.elapsedMS * this.source.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
          }
          (!this._updateFPS || this._msToNextUpdate <= 0) &&
            (super.update(),
            (this._msToNextUpdate = this._updateFPS
              ? Math.floor(1e3 / this._updateFPS)
              : 0));
        }
      }
      _videoFrameRequestCallback() {
        this.update(),
          this.destroyed
            ? (this._videoFrameRequestCallbackHandle = null)
            : (this._videoFrameRequestCallbackHandle =
                this.source.requestVideoFrameCallback(
                  this._videoFrameRequestCallback
                ));
      }
      load() {
        if (this._load) return this._load;
        const t = this.source;
        return (
          (t.readyState === t.HAVE_ENOUGH_DATA ||
            t.readyState === t.HAVE_FUTURE_DATA) &&
            t.width &&
            t.height &&
            (t.complete = !0),
          t.addEventListener("play", this._onPlayStart),
          t.addEventListener("pause", this._onPlayStop),
          t.addEventListener("seeked", this._onSeeked),
          this._isSourceReady()
            ? this._onCanPlay()
            : (t.addEventListener("canplay", this._onCanPlay),
              t.addEventListener("canplaythrough", this._onCanPlay),
              t.addEventListener("error", this._onError, !0)),
          (this._load = new Promise((e, s) => {
            this.valid
              ? e(this)
              : ((this._resolve = e), (this._reject = s), t.load());
          })),
          this._load
        );
      }
      _onError(t) {
        this.source.removeEventListener("error", this._onError, !0),
          this.onError.emit(t),
          this._reject &&
            (this._reject(t), (this._reject = null), (this._resolve = null));
      }
      _isSourcePlaying() {
        const t = this.source;
        return !t.paused && !t.ended;
      }
      _isSourceReady() {
        return this.source.readyState > 2;
      }
      _onPlayStart() {
        this.valid || this._onCanPlay(), this._configureAutoUpdate();
      }
      _onPlayStop() {
        this._configureAutoUpdate();
      }
      _onSeeked() {
        this._autoUpdate &&
          !this._isSourcePlaying() &&
          ((this._msToNextUpdate = 0),
          this.update(),
          (this._msToNextUpdate = 0));
      }
      _onCanPlay() {
        const t = this.source;
        t.removeEventListener("canplay", this._onCanPlay),
          t.removeEventListener("canplaythrough", this._onCanPlay);
        const e = this.valid;
        (this._msToNextUpdate = 0),
          this.update(),
          (this._msToNextUpdate = 0),
          !e &&
            this._resolve &&
            (this._resolve(this),
            (this._resolve = null),
            (this._reject = null)),
          this._isSourcePlaying()
            ? this._onPlayStart()
            : this.autoPlay && t.play();
      }
      dispose() {
        this._configureAutoUpdate();
        const t = this.source;
        t &&
          (t.removeEventListener("play", this._onPlayStart),
          t.removeEventListener("pause", this._onPlayStop),
          t.removeEventListener("seeked", this._onSeeked),
          t.removeEventListener("canplay", this._onCanPlay),
          t.removeEventListener("canplaythrough", this._onCanPlay),
          t.removeEventListener("error", this._onError, !0),
          t.pause(),
          (t.src = ""),
          t.load()),
          super.dispose();
      }
      get autoUpdate() {
        return this._autoUpdate;
      }
      set autoUpdate(t) {
        t !== this._autoUpdate &&
          ((this._autoUpdate = t), this._configureAutoUpdate());
      }
      get updateFPS() {
        return this._updateFPS;
      }
      set updateFPS(t) {
        t !== this._updateFPS &&
          ((this._updateFPS = t), this._configureAutoUpdate());
      }
      _configureAutoUpdate() {
        this._autoUpdate && this._isSourcePlaying()
          ? !this._updateFPS && this.source.requestVideoFrameCallback
            ? (this._isConnectedToTicker &&
                (xt.shared.remove(this.update, this),
                (this._isConnectedToTicker = !1),
                (this._msToNextUpdate = 0)),
              this._videoFrameRequestCallbackHandle === null &&
                (this._videoFrameRequestCallbackHandle =
                  this.source.requestVideoFrameCallback(
                    this._videoFrameRequestCallback
                  )))
            : (this._videoFrameRequestCallbackHandle !== null &&
                (this.source.cancelVideoFrameCallback(
                  this._videoFrameRequestCallbackHandle
                ),
                (this._videoFrameRequestCallbackHandle = null)),
              this._isConnectedToTicker ||
                (xt.shared.add(this.update, this),
                (this._isConnectedToTicker = !0),
                (this._msToNextUpdate = 0)))
          : (this._videoFrameRequestCallbackHandle !== null &&
              (this.source.cancelVideoFrameCallback(
                this._videoFrameRequestCallbackHandle
              ),
              (this._videoFrameRequestCallbackHandle = null)),
            this._isConnectedToTicker &&
              (xt.shared.remove(this.update, this),
              (this._isConnectedToTicker = !1),
              (this._msToNextUpdate = 0)));
      }
      static test(t, e) {
        return (
          (globalThis.HTMLVideoElement && t instanceof HTMLVideoElement) ||
          un.TYPES.includes(e)
        );
      }
    };
    (xr.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"]),
      (xr.MIME_TYPES = {
        ogv: "video/ogg",
        mov: "video/quicktime",
        m4v: "video/mp4",
      });
    let _a = xr;
    tr.push(He, Fn, Nl, _a, _r, Os, Ol, Ll);
    class ze {
      constructor() {
        (this.minX = 1 / 0),
          (this.minY = 1 / 0),
          (this.maxX = -1 / 0),
          (this.maxY = -1 / 0),
          (this.rect = null),
          (this.updateID = -1);
      }
      isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY;
      }
      clear() {
        (this.minX = 1 / 0),
          (this.minY = 1 / 0),
          (this.maxX = -1 / 0),
          (this.maxY = -1 / 0);
      }
      getRectangle(t) {
        return this.minX > this.maxX || this.minY > this.maxY
          ? W.EMPTY
          : ((t = t || new W(0, 0, 1, 1)),
            (t.x = this.minX),
            (t.y = this.minY),
            (t.width = this.maxX - this.minX),
            (t.height = this.maxY - this.minY),
            t);
      }
      addPoint(t) {
        (this.minX = Math.min(this.minX, t.x)),
          (this.maxX = Math.max(this.maxX, t.x)),
          (this.minY = Math.min(this.minY, t.y)),
          (this.maxY = Math.max(this.maxY, t.y));
      }
      addPointMatrix(t, e) {
        const { a: s, b: i, c: n, d: a, tx: o, ty: h } = t,
          l = s * e.x + n * e.y + o,
          u = i * e.x + a * e.y + h;
        (this.minX = Math.min(this.minX, l)),
          (this.maxX = Math.max(this.maxX, l)),
          (this.minY = Math.min(this.minY, u)),
          (this.maxY = Math.max(this.maxY, u));
      }
      addQuad(t) {
        let e = this.minX,
          s = this.minY,
          i = this.maxX,
          n = this.maxY,
          a = t[0],
          o = t[1];
        (e = a < e ? a : e),
          (s = o < s ? o : s),
          (i = a > i ? a : i),
          (n = o > n ? o : n),
          (a = t[2]),
          (o = t[3]),
          (e = a < e ? a : e),
          (s = o < s ? o : s),
          (i = a > i ? a : i),
          (n = o > n ? o : n),
          (a = t[4]),
          (o = t[5]),
          (e = a < e ? a : e),
          (s = o < s ? o : s),
          (i = a > i ? a : i),
          (n = o > n ? o : n),
          (a = t[6]),
          (o = t[7]),
          (e = a < e ? a : e),
          (s = o < s ? o : s),
          (i = a > i ? a : i),
          (n = o > n ? o : n),
          (this.minX = e),
          (this.minY = s),
          (this.maxX = i),
          (this.maxY = n);
      }
      addFrame(t, e, s, i, n) {
        this.addFrameMatrix(t.worldTransform, e, s, i, n);
      }
      addFrameMatrix(t, e, s, i, n) {
        const a = t.a,
          o = t.b,
          h = t.c,
          l = t.d,
          u = t.tx,
          c = t.ty;
        let d = this.minX,
          p = this.minY,
          f = this.maxX,
          m = this.maxY,
          g = a * e + h * s + u,
          _ = o * e + l * s + c;
        (d = g < d ? g : d),
          (p = _ < p ? _ : p),
          (f = g > f ? g : f),
          (m = _ > m ? _ : m),
          (g = a * i + h * s + u),
          (_ = o * i + l * s + c),
          (d = g < d ? g : d),
          (p = _ < p ? _ : p),
          (f = g > f ? g : f),
          (m = _ > m ? _ : m),
          (g = a * e + h * n + u),
          (_ = o * e + l * n + c),
          (d = g < d ? g : d),
          (p = _ < p ? _ : p),
          (f = g > f ? g : f),
          (m = _ > m ? _ : m),
          (g = a * i + h * n + u),
          (_ = o * i + l * n + c),
          (d = g < d ? g : d),
          (p = _ < p ? _ : p),
          (f = g > f ? g : f),
          (m = _ > m ? _ : m),
          (this.minX = d),
          (this.minY = p),
          (this.maxX = f),
          (this.maxY = m);
      }
      addVertexData(t, e, s) {
        let i = this.minX,
          n = this.minY,
          a = this.maxX,
          o = this.maxY;
        for (let h = e; h < s; h += 2) {
          const l = t[h],
            u = t[h + 1];
          (i = l < i ? l : i),
            (n = u < n ? u : n),
            (a = l > a ? l : a),
            (o = u > o ? u : o);
        }
        (this.minX = i), (this.minY = n), (this.maxX = a), (this.maxY = o);
      }
      addVertices(t, e, s, i) {
        this.addVerticesMatrix(t.worldTransform, e, s, i);
      }
      addVerticesMatrix(t, e, s, i, n = 0, a = n) {
        const o = t.a,
          h = t.b,
          l = t.c,
          u = t.d,
          c = t.tx,
          d = t.ty;
        let p = this.minX,
          f = this.minY,
          m = this.maxX,
          g = this.maxY;
        for (let _ = s; _ < i; _ += 2) {
          const v = e[_],
            y = e[_ + 1],
            x = o * v + l * y + c,
            A = u * y + h * v + d;
          (p = Math.min(p, x - n)),
            (m = Math.max(m, x + n)),
            (f = Math.min(f, A - a)),
            (g = Math.max(g, A + a));
        }
        (this.minX = p), (this.minY = f), (this.maxX = m), (this.maxY = g);
      }
      addBounds(t) {
        const e = this.minX,
          s = this.minY,
          i = this.maxX,
          n = this.maxY;
        (this.minX = t.minX < e ? t.minX : e),
          (this.minY = t.minY < s ? t.minY : s),
          (this.maxX = t.maxX > i ? t.maxX : i),
          (this.maxY = t.maxY > n ? t.maxY : n);
      }
      addBoundsMask(t, e) {
        const s = t.minX > e.minX ? t.minX : e.minX,
          i = t.minY > e.minY ? t.minY : e.minY,
          n = t.maxX < e.maxX ? t.maxX : e.maxX,
          a = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (s <= n && i <= a) {
          const o = this.minX,
            h = this.minY,
            l = this.maxX,
            u = this.maxY;
          (this.minX = s < o ? s : o),
            (this.minY = i < h ? i : h),
            (this.maxX = n > l ? n : l),
            (this.maxY = a > u ? a : u);
        }
      }
      addBoundsMatrix(t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
      }
      addBoundsArea(t, e) {
        const s = t.minX > e.x ? t.minX : e.x,
          i = t.minY > e.y ? t.minY : e.y,
          n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
          a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (s <= n && i <= a) {
          const o = this.minX,
            h = this.minY,
            l = this.maxX,
            u = this.maxY;
          (this.minX = s < o ? s : o),
            (this.minY = i < h ? i : h),
            (this.maxX = n > l ? n : l),
            (this.maxY = a > u ? a : u);
        }
      }
      pad(t = 0, e = t) {
        this.isEmpty() ||
          ((this.minX -= t),
          (this.maxX += t),
          (this.minY -= e),
          (this.maxY += e));
      }
      addFramePad(t, e, s, i, n, a) {
        (t -= n),
          (e -= a),
          (s += n),
          (i += a),
          (this.minX = this.minX < t ? this.minX : t),
          (this.maxX = this.maxX > s ? this.maxX : s),
          (this.minY = this.minY < e ? this.minY : e),
          (this.maxY = this.maxY > i ? this.maxY : i);
      }
    }
    class rt extends Ss {
      constructor() {
        super(),
          (this.tempDisplayObjectParent = null),
          (this.transform = new nr()),
          (this.alpha = 1),
          (this.visible = !0),
          (this.renderable = !0),
          (this.cullable = !1),
          (this.cullArea = null),
          (this.parent = null),
          (this.worldAlpha = 1),
          (this._lastSortedIndex = 0),
          (this._zIndex = 0),
          (this.filterArea = null),
          (this.filters = null),
          (this._enabledFilters = null),
          (this._bounds = new ze()),
          (this._localBounds = null),
          (this._boundsID = 0),
          (this._boundsRect = null),
          (this._localBoundsRect = null),
          (this._mask = null),
          (this._maskRefCount = 0),
          (this._destroyed = !1),
          (this.isSprite = !1),
          (this.isMask = !1);
      }
      static mixin(t) {
        const e = Object.keys(t);
        for (let s = 0; s < e.length; ++s) {
          const i = e[s];
          Object.defineProperty(
            rt.prototype,
            i,
            Object.getOwnPropertyDescriptor(t, i)
          );
        }
      }
      get destroyed() {
        return this._destroyed;
      }
      _recursivePostUpdateTransform() {
        this.parent
          ? (this.parent._recursivePostUpdateTransform(),
            this.transform.updateTransform(this.parent.transform))
          : this.transform.updateTransform(
              this._tempDisplayObjectParent.transform
            );
      }
      updateTransform() {
        this._boundsID++,
          this.transform.updateTransform(this.parent.transform),
          (this.worldAlpha = this.alpha * this.parent.worldAlpha);
      }
      getBounds(t, e) {
        return (
          t ||
            (this.parent
              ? (this._recursivePostUpdateTransform(), this.updateTransform())
              : ((this.parent = this._tempDisplayObjectParent),
                this.updateTransform(),
                (this.parent = null))),
          this._bounds.updateID !== this._boundsID &&
            (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
          e ||
            (this._boundsRect || (this._boundsRect = new W()),
            (e = this._boundsRect)),
          this._bounds.getRectangle(e)
        );
      }
      getLocalBounds(t) {
        t ||
          (this._localBoundsRect || (this._localBoundsRect = new W()),
          (t = this._localBoundsRect)),
          this._localBounds || (this._localBounds = new ze());
        const e = this.transform,
          s = this.parent;
        (this.parent = null),
          (this._tempDisplayObjectParent.worldAlpha =
            (s == null ? void 0 : s.worldAlpha) ?? 1),
          (this.transform = this._tempDisplayObjectParent.transform);
        const i = this._bounds,
          n = this._boundsID;
        this._bounds = this._localBounds;
        const a = this.getBounds(!1, t);
        return (
          (this.parent = s),
          (this.transform = e),
          (this._bounds = i),
          (this._bounds.updateID += this._boundsID - n),
          a
        );
      }
      toGlobal(t, e, s = !1) {
        return (
          s ||
            (this._recursivePostUpdateTransform(),
            this.parent
              ? this.displayObjectUpdateTransform()
              : ((this.parent = this._tempDisplayObjectParent),
                this.displayObjectUpdateTransform(),
                (this.parent = null))),
          this.worldTransform.apply(t, e)
        );
      }
      toLocal(t, e, s, i) {
        return (
          e && (t = e.toGlobal(t, s, i)),
          i ||
            (this._recursivePostUpdateTransform(),
            this.parent
              ? this.displayObjectUpdateTransform()
              : ((this.parent = this._tempDisplayObjectParent),
                this.displayObjectUpdateTransform(),
                (this.parent = null))),
          this.worldTransform.applyInverse(t, s)
        );
      }
      setParent(t) {
        if (!t || !t.addChild)
          throw new Error("setParent: Argument must be a Container");
        return t.addChild(this), t;
      }
      removeFromParent() {
        var t;
        (t = this.parent) == null || t.removeChild(this);
      }
      setTransform(
        t = 0,
        e = 0,
        s = 1,
        i = 1,
        n = 0,
        a = 0,
        o = 0,
        h = 0,
        l = 0
      ) {
        return (
          (this.position.x = t),
          (this.position.y = e),
          (this.scale.x = s || 1),
          (this.scale.y = i || 1),
          (this.rotation = n),
          (this.skew.x = a),
          (this.skew.y = o),
          (this.pivot.x = h),
          (this.pivot.y = l),
          this
        );
      }
      destroy(t) {
        this.removeFromParent(),
          (this._destroyed = !0),
          (this.transform = null),
          (this.parent = null),
          (this._bounds = null),
          (this.mask = null),
          (this.cullArea = null),
          (this.filters = null),
          (this.filterArea = null),
          (this.hitArea = null),
          (this.eventMode = "auto"),
          (this.interactiveChildren = !1),
          this.emit("destroyed"),
          this.removeAllListeners();
      }
      get _tempDisplayObjectParent() {
        return (
          this.tempDisplayObjectParent === null &&
            (this.tempDisplayObjectParent = new Fl()),
          this.tempDisplayObjectParent
        );
      }
      enableTempParent() {
        const t = this.parent;
        return (this.parent = this._tempDisplayObjectParent), t;
      }
      disableTempParent(t) {
        this.parent = t;
      }
      get x() {
        return this.position.x;
      }
      set x(t) {
        this.transform.position.x = t;
      }
      get y() {
        return this.position.y;
      }
      set y(t) {
        this.transform.position.y = t;
      }
      get worldTransform() {
        return this.transform.worldTransform;
      }
      get localTransform() {
        return this.transform.localTransform;
      }
      get position() {
        return this.transform.position;
      }
      set position(t) {
        this.transform.position.copyFrom(t);
      }
      get scale() {
        return this.transform.scale;
      }
      set scale(t) {
        this.transform.scale.copyFrom(t);
      }
      get pivot() {
        return this.transform.pivot;
      }
      set pivot(t) {
        this.transform.pivot.copyFrom(t);
      }
      get skew() {
        return this.transform.skew;
      }
      set skew(t) {
        this.transform.skew.copyFrom(t);
      }
      get rotation() {
        return this.transform.rotation;
      }
      set rotation(t) {
        this.transform.rotation = t;
      }
      get angle() {
        return this.transform.rotation * Ph;
      }
      set angle(t) {
        this.transform.rotation = t * Mh;
      }
      get zIndex() {
        return this._zIndex;
      }
      set zIndex(t) {
        (this._zIndex = t), this.parent && (this.parent.sortDirty = !0);
      }
      get worldVisible() {
        let t = this;
        do {
          if (!t.visible) return !1;
          t = t.parent;
        } while (t);
        return !0;
      }
      get mask() {
        return this._mask;
      }
      set mask(t) {
        if (this._mask !== t) {
          if (this._mask) {
            const e = this._mask.isMaskData
              ? this._mask.maskObject
              : this._mask;
            e &&
              (e._maskRefCount--,
              e._maskRefCount === 0 && ((e.renderable = !0), (e.isMask = !1)));
          }
          if (((this._mask = t), this._mask)) {
            const e = this._mask.isMaskData
              ? this._mask.maskObject
              : this._mask;
            e &&
              (e._maskRefCount === 0 && ((e.renderable = !1), (e.isMask = !0)),
              e._maskRefCount++);
          }
        }
      }
    }
    class Fl extends rt {
      constructor() {
        super(...arguments), (this.sortDirty = null);
      }
    }
    rt.prototype.displayObjectUpdateTransform = rt.prototype.updateTransform;
    const kl = new tt();
    function Ul(r, t) {
      return r.zIndex === t.zIndex
        ? r._lastSortedIndex - t._lastSortedIndex
        : r.zIndex - t.zIndex;
    }
    const xa = class cn extends rt {
      constructor() {
        super(),
          (this.children = []),
          (this.sortableChildren = cn.defaultSortableChildren),
          (this.sortDirty = !1);
      }
      onChildrenChange(t) {}
      addChild(...t) {
        if (t.length > 1)
          for (let e = 0; e < t.length; e++) this.addChild(t[e]);
        else {
          const e = t[0];
          e.parent && e.parent.removeChild(e),
            (e.parent = this),
            (this.sortDirty = !0),
            (e.transform._parentID = -1),
            this.children.push(e),
            this._boundsID++,
            this.onChildrenChange(this.children.length - 1),
            this.emit("childAdded", e, this, this.children.length - 1),
            e.emit("added", this);
        }
        return t[0];
      }
      addChildAt(t, e) {
        if (e < 0 || e > this.children.length)
          throw new Error(
            `${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`
          );
        return (
          t.parent && t.parent.removeChild(t),
          (t.parent = this),
          (this.sortDirty = !0),
          (t.transform._parentID = -1),
          this.children.splice(e, 0, t),
          this._boundsID++,
          this.onChildrenChange(e),
          t.emit("added", this),
          this.emit("childAdded", t, this, e),
          t
        );
      }
      swapChildren(t, e) {
        if (t === e) return;
        const s = this.getChildIndex(t),
          i = this.getChildIndex(e);
        (this.children[s] = e),
          (this.children[i] = t),
          this.onChildrenChange(s < i ? s : i);
      }
      getChildIndex(t) {
        const e = this.children.indexOf(t);
        if (e === -1)
          throw new Error(
            "The supplied DisplayObject must be a child of the caller"
          );
        return e;
      }
      setChildIndex(t, e) {
        if (e < 0 || e >= this.children.length)
          throw new Error(
            `The index ${e} supplied is out of bounds ${this.children.length}`
          );
        const s = this.getChildIndex(t);
        Fe(this.children, s, 1),
          this.children.splice(e, 0, t),
          this.onChildrenChange(e);
      }
      getChildAt(t) {
        if (t < 0 || t >= this.children.length)
          throw new Error(`getChildAt: Index (${t}) does not exist.`);
        return this.children[t];
      }
      removeChild(...t) {
        if (t.length > 1)
          for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
        else {
          const e = t[0],
            s = this.children.indexOf(e);
          if (s === -1) return null;
          (e.parent = null),
            (e.transform._parentID = -1),
            Fe(this.children, s, 1),
            this._boundsID++,
            this.onChildrenChange(s),
            e.emit("removed", this),
            this.emit("childRemoved", e, this, s);
        }
        return t[0];
      }
      removeChildAt(t) {
        const e = this.getChildAt(t);
        return (
          (e.parent = null),
          (e.transform._parentID = -1),
          Fe(this.children, t, 1),
          this._boundsID++,
          this.onChildrenChange(t),
          e.emit("removed", this),
          this.emit("childRemoved", e, this, t),
          e
        );
      }
      removeChildren(t = 0, e = this.children.length) {
        const s = t,
          i = e,
          n = i - s;
        let a;
        if (n > 0 && n <= i) {
          a = this.children.splice(s, n);
          for (let o = 0; o < a.length; ++o)
            (a[o].parent = null),
              a[o].transform && (a[o].transform._parentID = -1);
          this._boundsID++, this.onChildrenChange(t);
          for (let o = 0; o < a.length; ++o)
            a[o].emit("removed", this),
              this.emit("childRemoved", a[o], this, o);
          return a;
        } else if (n === 0 && this.children.length === 0) return [];
        throw new RangeError(
          "removeChildren: numeric values are outside the acceptable range."
        );
      }
      sortChildren() {
        let t = !1;
        for (let e = 0, s = this.children.length; e < s; ++e) {
          const i = this.children[e];
          (i._lastSortedIndex = e), !t && i.zIndex !== 0 && (t = !0);
        }
        t && this.children.length > 1 && this.children.sort(Ul),
          (this.sortDirty = !1);
      }
      updateTransform() {
        this.sortableChildren && this.sortDirty && this.sortChildren(),
          this._boundsID++,
          this.transform.updateTransform(this.parent.transform),
          (this.worldAlpha = this.alpha * this.parent.worldAlpha);
        for (let t = 0, e = this.children.length; t < e; ++t) {
          const s = this.children[t];
          s.visible && s.updateTransform();
        }
      }
      calculateBounds() {
        this._bounds.clear(), this._calculateBounds();
        for (let t = 0; t < this.children.length; t++) {
          const e = this.children[t];
          if (!(!e.visible || !e.renderable))
            if ((e.calculateBounds(), e._mask)) {
              const s = e._mask.isMaskData ? e._mask.maskObject : e._mask;
              s
                ? (s.calculateBounds(),
                  this._bounds.addBoundsMask(e._bounds, s._bounds))
                : this._bounds.addBounds(e._bounds);
            } else
              e.filterArea
                ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
                : this._bounds.addBounds(e._bounds);
        }
        this._bounds.updateID = this._boundsID;
      }
      getLocalBounds(t, e = !1) {
        const s = super.getLocalBounds(t);
        if (!e)
          for (let i = 0, n = this.children.length; i < n; ++i) {
            const a = this.children[i];
            a.visible && a.updateTransform();
          }
        return s;
      }
      _calculateBounds() {}
      _renderWithCulling(t) {
        const e = t.renderTexture.sourceFrame;
        if (!(e.width > 0 && e.height > 0)) return;
        let s, i;
        this.cullArea
          ? ((s = this.cullArea), (i = this.worldTransform))
          : this._render !== cn.prototype._render && (s = this.getBounds(!0));
        const n = t.projection.transform;
        if (
          (n && (i ? ((i = kl.copyFrom(i)), i.prepend(n)) : (i = n)),
          s && e.intersects(s, i))
        )
          this._render(t);
        else if (this.cullArea) return;
        for (let a = 0, o = this.children.length; a < o; ++a) {
          const h = this.children[a],
            l = h.cullable;
          (h.cullable = l || !this.cullArea), h.render(t), (h.cullable = l);
        }
      }
      render(t) {
        var e;
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
          if (this._mask || ((e = this.filters) != null && e.length))
            this.renderAdvanced(t);
          else if (this.cullable) this._renderWithCulling(t);
          else {
            this._render(t);
            for (let s = 0, i = this.children.length; s < i; ++s)
              this.children[s].render(t);
          }
      }
      renderAdvanced(t) {
        var n, a, o;
        const e = this.filters,
          s = this._mask;
        if (e) {
          this._enabledFilters || (this._enabledFilters = []),
            (this._enabledFilters.length = 0);
          for (let h = 0; h < e.length; h++)
            e[h].enabled && this._enabledFilters.push(e[h]);
        }
        const i =
          (e && ((n = this._enabledFilters) == null ? void 0 : n.length)) ||
          (s &&
            (!s.isMaskData ||
              (s.enabled && (s.autoDetect || s.type !== ft.NONE))));
        if (
          (i && t.batch.flush(),
          e &&
            (a = this._enabledFilters) != null &&
            a.length &&
            t.filter.push(this, this._enabledFilters),
          s && t.mask.push(this, this._mask),
          this.cullable)
        )
          this._renderWithCulling(t);
        else {
          this._render(t);
          for (let h = 0, l = this.children.length; h < l; ++h)
            this.children[h].render(t);
        }
        i && t.batch.flush(),
          s && t.mask.pop(this),
          e && (o = this._enabledFilters) != null && o.length && t.filter.pop();
      }
      _render(t) {}
      destroy(t) {
        super.destroy(), (this.sortDirty = !1);
        const e = typeof t == "boolean" ? t : t == null ? void 0 : t.children,
          s = this.removeChildren(0, this.children.length);
        if (e) for (let i = 0; i < s.length; ++i) s[i].destroy(t);
      }
      get width() {
        return this.scale.x * this.getLocalBounds().width;
      }
      set width(t) {
        const e = this.getLocalBounds().width;
        e !== 0 ? (this.scale.x = t / e) : (this.scale.x = 1),
          (this._width = t);
      }
      get height() {
        return this.scale.y * this.getLocalBounds().height;
      }
      set height(t) {
        const e = this.getLocalBounds().height;
        e !== 0 ? (this.scale.y = t / e) : (this.scale.y = 1),
          (this._height = t);
      }
    };
    xa.defaultSortableChildren = !1;
    let yt = xa;
    (yt.prototype.containerUpdateTransform = yt.prototype.updateTransform),
      Object.defineProperties(N, {
        SORTABLE_CHILDREN: {
          get() {
            return yt.defaultSortableChildren;
          },
          set(r) {
            V(
              "7.1.0",
              "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"
            ),
              (yt.defaultSortableChildren = r);
          },
        },
      });
    const ms = new q(),
      Gl = new Uint16Array([0, 1, 2, 0, 2, 3]);
    class oe extends yt {
      constructor(t) {
        super(),
          (this._anchor = new Kt(
            this._onAnchorUpdate,
            this,
            t ? t.defaultAnchor.x : 0,
            t ? t.defaultAnchor.y : 0
          )),
          (this._texture = null),
          (this._width = 0),
          (this._height = 0),
          (this._tintColor = new Q(16777215)),
          (this._tintRGB = null),
          (this.tint = 16777215),
          (this.blendMode = j.NORMAL),
          (this._cachedTint = 16777215),
          (this.uvs = null),
          (this.texture = t || L.EMPTY),
          (this.vertexData = new Float32Array(8)),
          (this.vertexTrimmedData = null),
          (this._transformID = -1),
          (this._textureID = -1),
          (this._transformTrimmedID = -1),
          (this._textureTrimmedID = -1),
          (this.indices = Gl),
          (this.pluginName = "batch"),
          (this.isSprite = !0),
          (this._roundPixels = N.ROUND_PIXELS);
      }
      _onTextureUpdate() {
        (this._textureID = -1),
          (this._textureTrimmedID = -1),
          (this._cachedTint = 16777215),
          this._width &&
            (this.scale.x =
              (re(this.scale.x) * this._width) / this._texture.orig.width),
          this._height &&
            (this.scale.y =
              (re(this.scale.y) * this._height) / this._texture.orig.height);
      }
      _onAnchorUpdate() {
        (this._transformID = -1), (this._transformTrimmedID = -1);
      }
      calculateVertices() {
        const t = this._texture;
        if (
          this._transformID === this.transform._worldID &&
          this._textureID === t._updateID
        )
          return;
        this._textureID !== t._updateID &&
          (this.uvs = this._texture._uvs.uvsFloat32),
          (this._transformID = this.transform._worldID),
          (this._textureID = t._updateID);
        const e = this.transform.worldTransform,
          s = e.a,
          i = e.b,
          n = e.c,
          a = e.d,
          o = e.tx,
          h = e.ty,
          l = this.vertexData,
          u = t.trim,
          c = t.orig,
          d = this._anchor;
        let p = 0,
          f = 0,
          m = 0,
          g = 0;
        if (
          (u
            ? ((f = u.x - d._x * c.width),
              (p = f + u.width),
              (g = u.y - d._y * c.height),
              (m = g + u.height))
            : ((f = -d._x * c.width),
              (p = f + c.width),
              (g = -d._y * c.height),
              (m = g + c.height)),
          (l[0] = s * f + n * g + o),
          (l[1] = a * g + i * f + h),
          (l[2] = s * p + n * g + o),
          (l[3] = a * g + i * p + h),
          (l[4] = s * p + n * m + o),
          (l[5] = a * m + i * p + h),
          (l[6] = s * f + n * m + o),
          (l[7] = a * m + i * f + h),
          this._roundPixels)
        ) {
          const _ = N.RESOLUTION;
          for (let v = 0; v < l.length; ++v) l[v] = Math.round(l[v] * _) / _;
        }
      }
      calculateTrimmedVertices() {
        if (!this.vertexTrimmedData)
          this.vertexTrimmedData = new Float32Array(8);
        else if (
          this._transformTrimmedID === this.transform._worldID &&
          this._textureTrimmedID === this._texture._updateID
        )
          return;
        (this._transformTrimmedID = this.transform._worldID),
          (this._textureTrimmedID = this._texture._updateID);
        const t = this._texture,
          e = this.vertexTrimmedData,
          s = t.orig,
          i = this._anchor,
          n = this.transform.worldTransform,
          a = n.a,
          o = n.b,
          h = n.c,
          l = n.d,
          u = n.tx,
          c = n.ty,
          d = -i._x * s.width,
          p = d + s.width,
          f = -i._y * s.height,
          m = f + s.height;
        if (
          ((e[0] = a * d + h * f + u),
          (e[1] = l * f + o * d + c),
          (e[2] = a * p + h * f + u),
          (e[3] = l * f + o * p + c),
          (e[4] = a * p + h * m + u),
          (e[5] = l * m + o * p + c),
          (e[6] = a * d + h * m + u),
          (e[7] = l * m + o * d + c),
          this._roundPixels)
        ) {
          const g = N.RESOLUTION;
          for (let _ = 0; _ < e.length; ++_) e[_] = Math.round(e[_] * g) / g;
        }
      }
      _render(t) {
        this.calculateVertices(),
          t.batch.setObjectRenderer(t.plugins[this.pluginName]),
          t.plugins[this.pluginName].render(this);
      }
      _calculateBounds() {
        const t = this._texture.trim,
          e = this._texture.orig;
        !t || (t.width === e.width && t.height === e.height)
          ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData))
          : (this.calculateTrimmedVertices(),
            this._bounds.addQuad(this.vertexTrimmedData));
      }
      getLocalBounds(t) {
        return this.children.length === 0
          ? (this._localBounds || (this._localBounds = new ze()),
            (this._localBounds.minX =
              this._texture.orig.width * -this._anchor._x),
            (this._localBounds.minY =
              this._texture.orig.height * -this._anchor._y),
            (this._localBounds.maxX =
              this._texture.orig.width * (1 - this._anchor._x)),
            (this._localBounds.maxY =
              this._texture.orig.height * (1 - this._anchor._y)),
            t ||
              (this._localBoundsRect || (this._localBoundsRect = new W()),
              (t = this._localBoundsRect)),
            this._localBounds.getRectangle(t))
          : super.getLocalBounds.call(this, t);
      }
      containsPoint(t) {
        this.worldTransform.applyInverse(t, ms);
        const e = this._texture.orig.width,
          s = this._texture.orig.height,
          i = -e * this.anchor.x;
        let n = 0;
        return (
          ms.x >= i &&
          ms.x < i + e &&
          ((n = -s * this.anchor.y), ms.y >= n && ms.y < n + s)
        );
      }
      destroy(t) {
        if (
          (super.destroy(t),
          this._texture.off("update", this._onTextureUpdate, this),
          (this._anchor = null),
          typeof t == "boolean" ? t : t == null ? void 0 : t.texture)
        ) {
          const e =
            typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
          this._texture.destroy(!!e);
        }
        this._texture = null;
      }
      static from(t, e) {
        const s = t instanceof L ? t : L.from(t, e);
        return new oe(s);
      }
      set roundPixels(t) {
        this._roundPixels !== t &&
          ((this._transformID = -1), (this._transformTrimmedID = -1)),
          (this._roundPixels = t);
      }
      get roundPixels() {
        return this._roundPixels;
      }
      get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width;
      }
      set width(t) {
        const e = re(this.scale.x) || 1;
        (this.scale.x = (e * t) / this._texture.orig.width), (this._width = t);
      }
      get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height;
      }
      set height(t) {
        const e = re(this.scale.y) || 1;
        (this.scale.y = (e * t) / this._texture.orig.height),
          (this._height = t);
      }
      get anchor() {
        return this._anchor;
      }
      set anchor(t) {
        this._anchor.copyFrom(t);
      }
      get tint() {
        return this._tintColor.value;
      }
      set tint(t) {
        this._tintColor.setValue(t),
          (this._tintRGB = this._tintColor.toLittleEndianNumber());
      }
      get tintValue() {
        return this._tintColor.toNumber();
      }
      get texture() {
        return this._texture;
      }
      set texture(t) {
        this._texture !== t &&
          (this._texture &&
            this._texture.off("update", this._onTextureUpdate, this),
          (this._texture = t || L.EMPTY),
          (this._cachedTint = 16777215),
          (this._textureID = -1),
          (this._textureTrimmedID = -1),
          t &&
            (t.baseTexture.valid
              ? this._onTextureUpdate()
              : t.once("update", this._onTextureUpdate, this)));
      }
    }
    const ya = new tt();
    (rt.prototype._cacheAsBitmap = !1),
      (rt.prototype._cacheData = null),
      (rt.prototype._cacheAsBitmapResolution = null),
      (rt.prototype._cacheAsBitmapMultisample = null);
    class Hl {
      constructor() {
        (this.textureCacheId = null),
          (this.originalRender = null),
          (this.originalRenderCanvas = null),
          (this.originalCalculateBounds = null),
          (this.originalGetLocalBounds = null),
          (this.originalUpdateTransform = null),
          (this.originalDestroy = null),
          (this.originalMask = null),
          (this.originalFilterArea = null),
          (this.originalContainsPoint = null),
          (this.sprite = null);
      }
    }
    Object.defineProperties(rt.prototype, {
      cacheAsBitmapResolution: {
        get() {
          return this._cacheAsBitmapResolution;
        },
        set(r) {
          r !== this._cacheAsBitmapResolution &&
            ((this._cacheAsBitmapResolution = r),
            this.cacheAsBitmap &&
              ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
        },
      },
      cacheAsBitmapMultisample: {
        get() {
          return this._cacheAsBitmapMultisample;
        },
        set(r) {
          r !== this._cacheAsBitmapMultisample &&
            ((this._cacheAsBitmapMultisample = r),
            this.cacheAsBitmap &&
              ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
        },
      },
      cacheAsBitmap: {
        get() {
          return this._cacheAsBitmap;
        },
        set(r) {
          if (this._cacheAsBitmap === r) return;
          this._cacheAsBitmap = r;
          let t;
          r
            ? (this._cacheData || (this._cacheData = new Hl()),
              (t = this._cacheData),
              (t.originalRender = this.render),
              (t.originalRenderCanvas = this.renderCanvas),
              (t.originalUpdateTransform = this.updateTransform),
              (t.originalCalculateBounds = this.calculateBounds),
              (t.originalGetLocalBounds = this.getLocalBounds),
              (t.originalDestroy = this.destroy),
              (t.originalContainsPoint = this.containsPoint),
              (t.originalMask = this._mask),
              (t.originalFilterArea = this.filterArea),
              (this.render = this._renderCached),
              (this.renderCanvas = this._renderCachedCanvas),
              (this.destroy = this._cacheAsBitmapDestroy))
            : ((t = this._cacheData),
              t.sprite && this._destroyCachedDisplayObject(),
              (this.render = t.originalRender),
              (this.renderCanvas = t.originalRenderCanvas),
              (this.calculateBounds = t.originalCalculateBounds),
              (this.getLocalBounds = t.originalGetLocalBounds),
              (this.destroy = t.originalDestroy),
              (this.updateTransform = t.originalUpdateTransform),
              (this.containsPoint = t.originalContainsPoint),
              (this._mask = t.originalMask),
              (this.filterArea = t.originalFilterArea));
        },
      },
    }),
      (rt.prototype._renderCached = function (r) {
        !this.visible ||
          this.worldAlpha <= 0 ||
          !this.renderable ||
          (this._initCachedDisplayObject(r),
          (this._cacheData.sprite.transform._worldID = this.transform._worldID),
          (this._cacheData.sprite.worldAlpha = this.worldAlpha),
          this._cacheData.sprite._render(r));
      }),
      (rt.prototype._initCachedDisplayObject = function (r) {
        var d, p;
        if ((d = this._cacheData) != null && d.sprite) return;
        const t = this.alpha;
        (this.alpha = 1), r.batch.flush();
        const e = this.getLocalBounds(new W(), !0);
        if ((p = this.filters) != null && p.length) {
          const f = this.filters[0].padding;
          e.pad(f);
        }
        const s = this.cacheAsBitmapResolution || r.resolution;
        e.ceil(s),
          (e.width = Math.max(e.width, 1 / s)),
          (e.height = Math.max(e.height, 1 / s));
        const i = r.renderTexture.current,
          n = r.renderTexture.sourceFrame.clone(),
          a = r.renderTexture.destinationFrame.clone(),
          o = r.projection.transform,
          h = Ee.create({
            width: e.width,
            height: e.height,
            resolution: s,
            multisample: this.cacheAsBitmapMultisample ?? r.multisample,
          }),
          l = `cacheAsBitmap_${_e()}`;
        (this._cacheData.textureCacheId = l),
          $.addToCache(h.baseTexture, l),
          L.addToCache(h, l);
        const u = this.transform.localTransform
          .copyTo(ya)
          .invert()
          .translate(-e.x, -e.y);
        (this.render = this._cacheData.originalRender),
          r.render(this, {
            renderTexture: h,
            clear: !0,
            transform: u,
            skipUpdateTransform: !1,
          }),
          r.framebuffer.blit(),
          (r.projection.transform = o),
          r.renderTexture.bind(i, n, a),
          (this.render = this._renderCached),
          (this.updateTransform = this.displayObjectUpdateTransform),
          (this.calculateBounds = this._calculateCachedBounds),
          (this.getLocalBounds = this._getCachedLocalBounds),
          (this._mask = null),
          (this.filterArea = null),
          (this.alpha = t);
        const c = new oe(h);
        (c.transform.worldTransform = this.transform.worldTransform),
          (c.anchor.x = -(e.x / e.width)),
          (c.anchor.y = -(e.y / e.height)),
          (c.alpha = t),
          (c._bounds = this._bounds),
          (this._cacheData.sprite = c),
          (this.transform._parentID = -1),
          this.parent
            ? this.updateTransform()
            : (this.enableTempParent(),
              this.updateTransform(),
              this.disableTempParent(null)),
          (this.containsPoint = c.containsPoint.bind(c));
      }),
      (rt.prototype._renderCachedCanvas = function (r) {
        !this.visible ||
          this.worldAlpha <= 0 ||
          !this.renderable ||
          (this._initCachedDisplayObjectCanvas(r),
          (this._cacheData.sprite.worldAlpha = this.worldAlpha),
          this._cacheData.sprite._renderCanvas(r));
      }),
      (rt.prototype._initCachedDisplayObjectCanvas = function (r) {
        var u;
        if ((u = this._cacheData) != null && u.sprite) return;
        const t = this.getLocalBounds(new W(), !0),
          e = this.alpha;
        this.alpha = 1;
        const s = r.canvasContext.activeContext,
          i = r._projTransform,
          n = this.cacheAsBitmapResolution || r.resolution;
        t.ceil(n),
          (t.width = Math.max(t.width, 1 / n)),
          (t.height = Math.max(t.height, 1 / n));
        const a = Ee.create({
            width: t.width,
            height: t.height,
            resolution: n,
          }),
          o = `cacheAsBitmap_${_e()}`;
        (this._cacheData.textureCacheId = o),
          $.addToCache(a.baseTexture, o),
          L.addToCache(a, o);
        const h = ya;
        this.transform.localTransform.copyTo(h),
          h.invert(),
          (h.tx -= t.x),
          (h.ty -= t.y),
          (this.renderCanvas = this._cacheData.originalRenderCanvas),
          r.render(this, {
            renderTexture: a,
            clear: !0,
            transform: h,
            skipUpdateTransform: !1,
          }),
          (r.canvasContext.activeContext = s),
          (r._projTransform = i),
          (this.renderCanvas = this._renderCachedCanvas),
          (this.updateTransform = this.displayObjectUpdateTransform),
          (this.calculateBounds = this._calculateCachedBounds),
          (this.getLocalBounds = this._getCachedLocalBounds),
          (this._mask = null),
          (this.filterArea = null),
          (this.alpha = e);
        const l = new oe(a);
        (l.transform.worldTransform = this.transform.worldTransform),
          (l.anchor.x = -(t.x / t.width)),
          (l.anchor.y = -(t.y / t.height)),
          (l.alpha = e),
          (l._bounds = this._bounds),
          (this._cacheData.sprite = l),
          (this.transform._parentID = -1),
          this.parent
            ? this.updateTransform()
            : ((this.parent = r._tempDisplayObjectParent),
              this.updateTransform(),
              (this.parent = null)),
          (this.containsPoint = l.containsPoint.bind(l));
      }),
      (rt.prototype._calculateCachedBounds = function () {
        this._bounds.clear(),
          (this._cacheData.sprite.transform._worldID = this.transform._worldID),
          this._cacheData.sprite._calculateBounds(),
          (this._bounds.updateID = this._boundsID);
      }),
      (rt.prototype._getCachedLocalBounds = function () {
        return this._cacheData.sprite.getLocalBounds(null);
      }),
      (rt.prototype._destroyCachedDisplayObject = function () {
        this._cacheData.sprite._texture.destroy(!0),
          (this._cacheData.sprite = null),
          $.removeFromCache(this._cacheData.textureCacheId),
          L.removeFromCache(this._cacheData.textureCacheId),
          (this._cacheData.textureCacheId = null);
      }),
      (rt.prototype._cacheAsBitmapDestroy = function (r) {
        (this.cacheAsBitmap = !1), this.destroy(r);
      }),
      (rt.prototype.name = null),
      (yt.prototype.getChildByName = function (r, t) {
        for (let e = 0, s = this.children.length; e < s; e++)
          if (this.children[e].name === r) return this.children[e];
        if (t)
          for (let e = 0, s = this.children.length; e < s; e++) {
            const i = this.children[e];
            if (!i.getChildByName) continue;
            const n = i.getChildByName(r, !0);
            if (n) return n;
          }
        return null;
      }),
      (rt.prototype.getGlobalPosition = function (r = new q(), t = !1) {
        return (
          this.parent
            ? this.parent.toGlobal(this.position, r, t)
            : ((r.x = this.position.x), (r.y = this.position.y)),
          r
        );
      });
    var zl = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
    class Xl extends gt {
      constructor(t = 1) {
        super(Dl, zl, { uAlpha: 1 }), (this.alpha = t);
      }
      get alpha() {
        return this.uniforms.uAlpha;
      }
      set alpha(t) {
        this.uniforms.uAlpha = t;
      }
    }
    const Vl = {
        5: [0.153388, 0.221461, 0.250301],
        7: [0.071303, 0.131514, 0.189879, 0.214607],
        9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
        11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
        13: [
          0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641,
        ],
        15: [
          489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
          0.197448,
        ],
      },
      $l = [
        "varying vec2 vBlurTexCoords[%size%];",
        "uniform sampler2D uSampler;",
        "void main(void)",
        "{",
        "    gl_FragColor = vec4(0.0);",
        "    %blur%",
        "}",
      ].join(`
`);
    function Wl(r) {
      const t = Vl[r],
        e = t.length;
      let s = $l,
        i = "";
      const n =
        "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
      let a;
      for (let o = 0; o < r; o++) {
        let h = n.replace("%index%", o.toString());
        (a = o),
          o >= e && (a = r - o - 1),
          (h = h.replace("%value%", t[a].toString())),
          (i += h),
          (i += `
`);
      }
      return (
        (s = s.replace("%blur%", i)), (s = s.replace("%size%", r.toString())), s
      );
    }
    const jl = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
    function Yl(r, t) {
      const e = Math.ceil(r / 2);
      let s = jl,
        i = "",
        n;
      t
        ? (n =
            "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);")
        : (n =
            "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);");
      for (let a = 0; a < r; a++) {
        let o = n.replace("%index%", a.toString());
        (o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`)),
          (i += o),
          (i += `
`);
      }
      return (
        (s = s.replace("%blur%", i)), (s = s.replace("%size%", r.toString())), s
      );
    }
    class yr extends gt {
      constructor(t, e = 8, s = 4, i = gt.defaultResolution, n = 5) {
        const a = Yl(n, t),
          o = Wl(n);
        super(a, o),
          (this.horizontal = t),
          (this.resolution = i),
          (this._quality = 0),
          (this.quality = s),
          (this.blur = e);
      }
      apply(t, e, s, i) {
        if (
          (s
            ? this.horizontal
              ? (this.uniforms.strength = (1 / s.width) * (s.width / e.width))
              : (this.uniforms.strength =
                  (1 / s.height) * (s.height / e.height))
            : this.horizontal
            ? (this.uniforms.strength =
                (1 / t.renderer.width) * (t.renderer.width / e.width))
            : (this.uniforms.strength =
                (1 / t.renderer.height) * (t.renderer.height / e.height)),
          (this.uniforms.strength *= this.strength),
          (this.uniforms.strength /= this.passes),
          this.passes === 1)
        )
          t.applyFilter(this, e, s, i);
        else {
          const n = t.getFilterTexture(),
            a = t.renderer;
          let o = e,
            h = n;
          (this.state.blend = !1), t.applyFilter(this, o, h, se.CLEAR);
          for (let l = 1; l < this.passes - 1; l++) {
            t.bindAndClear(o, se.BLIT), (this.uniforms.uSampler = h);
            const u = h;
            (h = o), (o = u), a.shader.bind(this), a.geometry.draw(5);
          }
          (this.state.blend = !0),
            t.applyFilter(this, h, s, i),
            t.returnFilterTexture(n);
        }
      }
      get blur() {
        return this.strength;
      }
      set blur(t) {
        (this.padding = 1 + Math.abs(t) * 2), (this.strength = t);
      }
      get quality() {
        return this._quality;
      }
      set quality(t) {
        (this._quality = t), (this.passes = t);
      }
    }
    class ql extends gt {
      constructor(t = 8, e = 4, s = gt.defaultResolution, i = 5) {
        super(),
          (this._repeatEdgePixels = !1),
          (this.blurXFilter = new yr(!0, t, e, s, i)),
          (this.blurYFilter = new yr(!1, t, e, s, i)),
          (this.resolution = s),
          (this.quality = e),
          (this.blur = t),
          (this.repeatEdgePixels = !1);
      }
      apply(t, e, s, i) {
        const n = Math.abs(this.blurXFilter.strength),
          a = Math.abs(this.blurYFilter.strength);
        if (n && a) {
          const o = t.getFilterTexture();
          this.blurXFilter.apply(t, e, o, se.CLEAR),
            this.blurYFilter.apply(t, o, s, i),
            t.returnFilterTexture(o);
        } else
          a
            ? this.blurYFilter.apply(t, e, s, i)
            : this.blurXFilter.apply(t, e, s, i);
      }
      updatePadding() {
        this._repeatEdgePixels
          ? (this.padding = 0)
          : (this.padding =
              Math.max(
                Math.abs(this.blurXFilter.strength),
                Math.abs(this.blurYFilter.strength)
              ) * 2);
      }
      get blur() {
        return this.blurXFilter.blur;
      }
      set blur(t) {
        (this.blurXFilter.blur = this.blurYFilter.blur = t),
          this.updatePadding();
      }
      get quality() {
        return this.blurXFilter.quality;
      }
      set quality(t) {
        this.blurXFilter.quality = this.blurYFilter.quality = t;
      }
      get blurX() {
        return this.blurXFilter.blur;
      }
      set blurX(t) {
        (this.blurXFilter.blur = t), this.updatePadding();
      }
      get blurY() {
        return this.blurYFilter.blur;
      }
      set blurY(t) {
        (this.blurYFilter.blur = t), this.updatePadding();
      }
      get blendMode() {
        return this.blurYFilter.blendMode;
      }
      set blendMode(t) {
        this.blurYFilter.blendMode = t;
      }
      get repeatEdgePixels() {
        return this._repeatEdgePixels;
      }
      set repeatEdgePixels(t) {
        (this._repeatEdgePixels = t), this.updatePadding();
      }
    }
    var Kl = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
    class vr extends gt {
      constructor() {
        const t = {
          m: new Float32Array([
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
          ]),
          uAlpha: 1,
        };
        super(ca, Kl, t), (this.alpha = 1);
      }
      _loadMatrix(t, e = !1) {
        let s = t;
        e &&
          (this._multiply(s, this.uniforms.m, t), (s = this._colorMatrix(s))),
          (this.uniforms.m = s);
      }
      _multiply(t, e, s) {
        return (
          (t[0] = e[0] * s[0] + e[1] * s[5] + e[2] * s[10] + e[3] * s[15]),
          (t[1] = e[0] * s[1] + e[1] * s[6] + e[2] * s[11] + e[3] * s[16]),
          (t[2] = e[0] * s[2] + e[1] * s[7] + e[2] * s[12] + e[3] * s[17]),
          (t[3] = e[0] * s[3] + e[1] * s[8] + e[2] * s[13] + e[3] * s[18]),
          (t[4] =
            e[0] * s[4] + e[1] * s[9] + e[2] * s[14] + e[3] * s[19] + e[4]),
          (t[5] = e[5] * s[0] + e[6] * s[5] + e[7] * s[10] + e[8] * s[15]),
          (t[6] = e[5] * s[1] + e[6] * s[6] + e[7] * s[11] + e[8] * s[16]),
          (t[7] = e[5] * s[2] + e[6] * s[7] + e[7] * s[12] + e[8] * s[17]),
          (t[8] = e[5] * s[3] + e[6] * s[8] + e[7] * s[13] + e[8] * s[18]),
          (t[9] =
            e[5] * s[4] + e[6] * s[9] + e[7] * s[14] + e[8] * s[19] + e[9]),
          (t[10] = e[10] * s[0] + e[11] * s[5] + e[12] * s[10] + e[13] * s[15]),
          (t[11] = e[10] * s[1] + e[11] * s[6] + e[12] * s[11] + e[13] * s[16]),
          (t[12] = e[10] * s[2] + e[11] * s[7] + e[12] * s[12] + e[13] * s[17]),
          (t[13] = e[10] * s[3] + e[11] * s[8] + e[12] * s[13] + e[13] * s[18]),
          (t[14] =
            e[10] * s[4] +
            e[11] * s[9] +
            e[12] * s[14] +
            e[13] * s[19] +
            e[14]),
          (t[15] = e[15] * s[0] + e[16] * s[5] + e[17] * s[10] + e[18] * s[15]),
          (t[16] = e[15] * s[1] + e[16] * s[6] + e[17] * s[11] + e[18] * s[16]),
          (t[17] = e[15] * s[2] + e[16] * s[7] + e[17] * s[12] + e[18] * s[17]),
          (t[18] = e[15] * s[3] + e[16] * s[8] + e[17] * s[13] + e[18] * s[18]),
          (t[19] =
            e[15] * s[4] +
            e[16] * s[9] +
            e[17] * s[14] +
            e[18] * s[19] +
            e[19]),
          t
        );
      }
      _colorMatrix(t) {
        const e = new Float32Array(t);
        return (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e;
      }
      brightness(t, e) {
        const s = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e);
      }
      tint(t, e) {
        const [s, i, n] = Q.shared.setValue(t).toArray(),
          a = [s, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(a, e);
      }
      greyscale(t, e) {
        const s = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e);
      }
      blackAndWhite(t) {
        const e = [
          0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0,
          0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      hue(t, e) {
        t = ((t || 0) / 180) * Math.PI;
        const s = Math.cos(t),
          i = Math.sin(t),
          n = Math.sqrt,
          a = 1 / 3,
          o = n(a),
          h = s + (1 - s) * a,
          l = a * (1 - s) - o * i,
          u = a * (1 - s) + o * i,
          c = a * (1 - s) + o * i,
          d = s + a * (1 - s),
          p = a * (1 - s) - o * i,
          f = a * (1 - s) - o * i,
          m = a * (1 - s) + o * i,
          g = s + a * (1 - s),
          _ = [h, l, u, 0, 0, c, d, p, 0, 0, f, m, g, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(_, e);
      }
      contrast(t, e) {
        const s = (t || 0) + 1,
          i = -0.5 * (s - 1),
          n = [s, 0, 0, 0, i, 0, s, 0, 0, i, 0, 0, s, 0, i, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e);
      }
      saturate(t = 0, e) {
        const s = (t * 2) / 3 + 1,
          i = (s - 1) * -0.5,
          n = [s, i, i, 0, 0, i, s, i, 0, 0, i, i, s, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e);
      }
      desaturate() {
        this.saturate(-1);
      }
      negative(t) {
        const e = [
          -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      sepia(t) {
        const e = [
          0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0,
          0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      technicolor(t) {
        const e = [
          1.9125277891456085, -0.8545344976951645, -0.09155508482755584, 0,
          11.793603434377337, -0.3087833385928097, 1.7658908555458428,
          -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
          -0.7501899197440212, 1.847597816108189, 0, 30.950940869491134, 0, 0,
          0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      polaroid(t) {
        const e = [
          1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016,
          -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      toBGR(t) {
        const e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t);
      }
      kodachrome(t) {
        const e = [
          1.1285582396593523, -0.3967382283601348, -0.03992559172921793, 0,
          63.72958762196502, -0.16404339962244616, 1.0835251566291304,
          -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
          -0.5603416277695248, 1.6014850761964945, 0, 35.62982807460946, 0, 0,
          0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      browni(t) {
        const e = [
          0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
          47.43192855600873, -0.03770324983778316, 0.8609577587992641,
          0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
          -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0,
          0, 0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      vintage(t) {
        const e = [
          0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
          9.651285835294123, 0.02578397704808868, 0.6441188644374771,
          0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
          -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0,
          0, 1, 0,
        ];
        this._loadMatrix(e, t);
      }
      colorTone(t, e, s, i, n) {
        (t = t || 0.2),
          (e = e || 0.15),
          (s = s || 16770432),
          (i = i || 3375104);
        const a = Q.shared,
          [o, h, l] = a.setValue(s).toArray(),
          [u, c, d] = a.setValue(i).toArray(),
          p = [
            0.3,
            0.59,
            0.11,
            0,
            0,
            o,
            h,
            l,
            t,
            0,
            u,
            c,
            d,
            e,
            0,
            o - u,
            h - c,
            l - d,
            0,
            0,
          ];
        this._loadMatrix(p, n);
      }
      night(t, e) {
        t = t || 0.1;
        const s = [
          t * -2,
          -t,
          0,
          0,
          0,
          -t,
          0,
          t,
          0,
          0,
          0,
          t,
          t * 2,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
        ];
        this._loadMatrix(s, e);
      }
      predator(t, e) {
        const s = [
          11.224130630493164 * t,
          -4.794486999511719 * t,
          -2.8746118545532227 * t,
          0 * t,
          0.40342438220977783 * t,
          -3.6330697536468506 * t,
          9.193157196044922 * t,
          -2.951810836791992 * t,
          0 * t,
          -1.316135048866272 * t,
          -3.2184197902679443 * t,
          -4.2375030517578125 * t,
          7.476448059082031 * t,
          0 * t,
          0.8044459223747253 * t,
          0,
          0,
          0,
          1,
          0,
        ];
        this._loadMatrix(s, e);
      }
      lsd(t) {
        const e = [
          2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0,
          1, 0,
        ];
        this._loadMatrix(e, t);
      }
      reset() {
        const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(t, !1);
      }
      get matrix() {
        return this.uniforms.m;
      }
      set matrix(t) {
        this.uniforms.m = t;
      }
      get alpha() {
        return this.uniforms.uAlpha;
      }
      set alpha(t) {
        this.uniforms.uAlpha = t;
      }
    }
    vr.prototype.grayscale = vr.prototype.greyscale;
    var Jl = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,
      Zl = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
    class Ql extends gt {
      constructor(t, e) {
        const s = new tt();
        (t.renderable = !1),
          super(Zl, Jl, {
            mapSampler: t._texture,
            filterMatrix: s,
            scale: { x: 1, y: 1 },
            rotation: new Float32Array([1, 0, 0, 1]),
          }),
          (this.maskSprite = t),
          (this.maskMatrix = s),
          e == null && (e = 20),
          (this.scale = new q(e, e));
      }
      apply(t, e, s, i) {
        (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
          this.maskMatrix,
          this.maskSprite
        )),
          (this.uniforms.scale.x = this.scale.x),
          (this.uniforms.scale.y = this.scale.y);
        const n = this.maskSprite.worldTransform,
          a = Math.sqrt(n.a * n.a + n.b * n.b),
          o = Math.sqrt(n.c * n.c + n.d * n.d);
        a !== 0 &&
          o !== 0 &&
          ((this.uniforms.rotation[0] = n.a / a),
          (this.uniforms.rotation[1] = n.b / a),
          (this.uniforms.rotation[2] = n.c / o),
          (this.uniforms.rotation[3] = n.d / o)),
          t.applyFilter(this, e, s, i);
      }
      get map() {
        return this.uniforms.mapSampler;
      }
      set map(t) {
        this.uniforms.mapSampler = t;
      }
    }
    var tu = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,
      eu = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
    class su extends gt {
      constructor() {
        super(eu, tu);
      }
    }
    var iu = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
    class ru extends gt {
      constructor(t = 0.5, e = Math.random()) {
        super(ca, iu, { uNoise: 0, uSeed: 0 }),
          (this.noise = t),
          (this.seed = e);
      }
      get noise() {
        return this.uniforms.uNoise;
      }
      set noise(t) {
        this.uniforms.uNoise = t;
      }
      get seed() {
        return this.uniforms.uSeed;
      }
      set seed(t) {
        this.uniforms.uSeed = t;
      }
    }
    const va = {
      AlphaFilter: Xl,
      BlurFilter: ql,
      BlurFilterPass: yr,
      ColorMatrixFilter: vr,
      DisplacementFilter: Ql,
      FXAAFilter: su,
      NoiseFilter: ru,
    };
    Object.entries(va).forEach(([r, t]) => {
      Object.defineProperty(va, r, {
        get() {
          return V("7.1.0", `filters.${r} has moved to ${r}`), t;
        },
      });
    });
    class nu {
      constructor() {
        (this.interactionFrequency = 10),
          (this._deltaTime = 0),
          (this._didMove = !1),
          (this.tickerAdded = !1),
          (this._pauseUpdate = !0);
      }
      init(t) {
        this.removeTickerListener(),
          (this.events = t),
          (this.interactionFrequency = 10),
          (this._deltaTime = 0),
          (this._didMove = !1),
          (this.tickerAdded = !1),
          (this._pauseUpdate = !0);
      }
      get pauseUpdate() {
        return this._pauseUpdate;
      }
      set pauseUpdate(t) {
        this._pauseUpdate = t;
      }
      addTickerListener() {
        this.tickerAdded ||
          !this.domElement ||
          (xt.system.add(this.tickerUpdate, this, Se.INTERACTION),
          (this.tickerAdded = !0));
      }
      removeTickerListener() {
        this.tickerAdded &&
          (xt.system.remove(this.tickerUpdate, this), (this.tickerAdded = !1));
      }
      pointerMoved() {
        this._didMove = !0;
      }
      update() {
        if (!this.domElement || this._pauseUpdate) return;
        if (this._didMove) {
          this._didMove = !1;
          return;
        }
        const t = this.events.rootPointerEvent;
        (this.events.supportsTouchEvents && t.pointerType === "touch") ||
          globalThis.document.dispatchEvent(
            new PointerEvent("pointermove", {
              clientX: t.clientX,
              clientY: t.clientY,
            })
          );
      }
      tickerUpdate(t) {
        (this._deltaTime += t),
          !(this._deltaTime < this.interactionFrequency) &&
            ((this._deltaTime = 0), this.update());
      }
    }
    const he = new nu();
    class gs {
      constructor(t) {
        (this.bubbles = !0),
          (this.cancelBubble = !0),
          (this.cancelable = !1),
          (this.composed = !1),
          (this.defaultPrevented = !1),
          (this.eventPhase = gs.prototype.NONE),
          (this.propagationStopped = !1),
          (this.propagationImmediatelyStopped = !1),
          (this.layer = new q()),
          (this.page = new q()),
          (this.NONE = 0),
          (this.CAPTURING_PHASE = 1),
          (this.AT_TARGET = 2),
          (this.BUBBLING_PHASE = 3),
          (this.manager = t);
      }
      get layerX() {
        return this.layer.x;
      }
      get layerY() {
        return this.layer.y;
      }
      get pageX() {
        return this.page.x;
      }
      get pageY() {
        return this.page.y;
      }
      get data() {
        return this;
      }
      composedPath() {
        return (
          this.manager &&
            (!this.path || this.path[this.path.length - 1] !== this.target) &&
            (this.path = this.target
              ? this.manager.propagationPath(this.target)
              : []),
          this.path
        );
      }
      initEvent(t, e, s) {
        throw new Error(
          "initEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
        );
      }
      initUIEvent(t, e, s, i, n) {
        throw new Error(
          "initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
        );
      }
      preventDefault() {
        this.nativeEvent instanceof Event &&
          this.nativeEvent.cancelable &&
          this.nativeEvent.preventDefault(),
          (this.defaultPrevented = !0);
      }
      stopImmediatePropagation() {
        this.propagationImmediatelyStopped = !0;
      }
      stopPropagation() {
        this.propagationStopped = !0;
      }
    }
    class Qs extends gs {
      constructor() {
        super(...arguments),
          (this.client = new q()),
          (this.movement = new q()),
          (this.offset = new q()),
          (this.global = new q()),
          (this.screen = new q());
      }
      get clientX() {
        return this.client.x;
      }
      get clientY() {
        return this.client.y;
      }
      get x() {
        return this.clientX;
      }
      get y() {
        return this.clientY;
      }
      get movementX() {
        return this.movement.x;
      }
      get movementY() {
        return this.movement.y;
      }
      get offsetX() {
        return this.offset.x;
      }
      get offsetY() {
        return this.offset.y;
      }
      get globalX() {
        return this.global.x;
      }
      get globalY() {
        return this.global.y;
      }
      get screenX() {
        return this.screen.x;
      }
      get screenY() {
        return this.screen.y;
      }
      getLocalPosition(t, e, s) {
        return t.worldTransform.applyInverse(s || this.global, e);
      }
      getModifierState(t) {
        return (
          "getModifierState" in this.nativeEvent &&
          this.nativeEvent.getModifierState(t)
        );
      }
      initMouseEvent(t, e, s, i, n, a, o, h, l, u, c, d, p, f, m) {
        throw new Error("Method not implemented.");
      }
    }
    class Nt extends Qs {
      constructor() {
        super(...arguments),
          (this.width = 0),
          (this.height = 0),
          (this.isPrimary = !1);
      }
      getCoalescedEvents() {
        return this.type === "pointermove" ||
          this.type === "mousemove" ||
          this.type === "touchmove"
          ? [this]
          : [];
      }
      getPredictedEvents() {
        throw new Error("getPredictedEvents is not supported!");
      }
    }
    class Xe extends Qs {
      constructor() {
        super(...arguments),
          (this.DOM_DELTA_PIXEL = 0),
          (this.DOM_DELTA_LINE = 1),
          (this.DOM_DELTA_PAGE = 2);
      }
    }
    (Xe.DOM_DELTA_PIXEL = 0), (Xe.DOM_DELTA_LINE = 1), (Xe.DOM_DELTA_PAGE = 2);
    const au = 2048,
      ou = new q(),
      br = new q();
    class hu {
      constructor(t) {
        (this.dispatch = new Ss()),
          (this.moveOnAll = !1),
          (this.enableGlobalMoveEvents = !0),
          (this.mappingState = { trackingData: {} }),
          (this.eventPool = new Map()),
          (this._allInteractiveElements = []),
          (this._hitElements = []),
          (this._isPointerMoveEvent = !1),
          (this.rootTarget = t),
          (this.hitPruneFn = this.hitPruneFn.bind(this)),
          (this.hitTestFn = this.hitTestFn.bind(this)),
          (this.mapPointerDown = this.mapPointerDown.bind(this)),
          (this.mapPointerMove = this.mapPointerMove.bind(this)),
          (this.mapPointerOut = this.mapPointerOut.bind(this)),
          (this.mapPointerOver = this.mapPointerOver.bind(this)),
          (this.mapPointerUp = this.mapPointerUp.bind(this)),
          (this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this)),
          (this.mapWheel = this.mapWheel.bind(this)),
          (this.mappingTable = {}),
          this.addEventMapping("pointerdown", this.mapPointerDown),
          this.addEventMapping("pointermove", this.mapPointerMove),
          this.addEventMapping("pointerout", this.mapPointerOut),
          this.addEventMapping("pointerleave", this.mapPointerOut),
          this.addEventMapping("pointerover", this.mapPointerOver),
          this.addEventMapping("pointerup", this.mapPointerUp),
          this.addEventMapping("pointerupoutside", this.mapPointerUpOutside),
          this.addEventMapping("wheel", this.mapWheel);
      }
      addEventMapping(t, e) {
        this.mappingTable[t] || (this.mappingTable[t] = []),
          this.mappingTable[t].push({ fn: e, priority: 0 }),
          this.mappingTable[t].sort((s, i) => s.priority - i.priority);
      }
      dispatchEvent(t, e) {
        (t.propagationStopped = !1),
          (t.propagationImmediatelyStopped = !1),
          this.propagate(t, e),
          this.dispatch.emit(e || t.type, t);
      }
      mapEvent(t) {
        if (!this.rootTarget) return;
        const e = this.mappingTable[t.type];
        if (e) for (let s = 0, i = e.length; s < i; s++) e[s].fn(t);
        else
          console.warn(
            `[EventBoundary]: Event mapping not defined for ${t.type}`
          );
      }
      hitTest(t, e) {
        he.pauseUpdate = !0;
        const s =
            this._isPointerMoveEvent && this.enableGlobalMoveEvents
              ? "hitTestMoveRecursive"
              : "hitTestRecursive",
          i = this[s](
            this.rootTarget,
            this.rootTarget.eventMode,
            ou.set(t, e),
            this.hitTestFn,
            this.hitPruneFn
          );
        return i && i[0];
      }
      propagate(t, e) {
        if (!t.target) return;
        const s = t.composedPath();
        t.eventPhase = t.CAPTURING_PHASE;
        for (let i = 0, n = s.length - 1; i < n; i++)
          if (
            ((t.currentTarget = s[i]),
            this.notifyTarget(t, e),
            t.propagationStopped || t.propagationImmediatelyStopped)
          )
            return;
        if (
          ((t.eventPhase = t.AT_TARGET),
          (t.currentTarget = t.target),
          this.notifyTarget(t, e),
          !(t.propagationStopped || t.propagationImmediatelyStopped))
        ) {
          t.eventPhase = t.BUBBLING_PHASE;
          for (let i = s.length - 2; i >= 0; i--)
            if (
              ((t.currentTarget = s[i]),
              this.notifyTarget(t, e),
              t.propagationStopped || t.propagationImmediatelyStopped)
            )
              return;
        }
      }
      all(t, e, s = this._allInteractiveElements) {
        if (s.length === 0) return;
        t.eventPhase = t.BUBBLING_PHASE;
        const i = Array.isArray(e) ? e : [e];
        for (let n = s.length - 1; n >= 0; n--)
          i.forEach((a) => {
            (t.currentTarget = s[n]), this.notifyTarget(t, a);
          });
      }
      propagationPath(t) {
        const e = [t];
        for (let s = 0; s < au && t !== this.rootTarget; s++) {
          if (!t.parent)
            throw new Error(
              "Cannot find propagation path to disconnected target"
            );
          e.push(t.parent), (t = t.parent);
        }
        return e.reverse(), e;
      }
      hitTestMoveRecursive(t, e, s, i, n, a = !1) {
        let o = !1;
        if (this._interactivePrune(t)) return null;
        if (
          ((t.eventMode === "dynamic" || e === "dynamic") &&
            (he.pauseUpdate = !1),
          t.interactiveChildren && t.children)
        ) {
          const u = t.children;
          for (let c = u.length - 1; c >= 0; c--) {
            const d = u[c],
              p = this.hitTestMoveRecursive(
                d,
                this._isInteractive(e) ? e : d.eventMode,
                s,
                i,
                n,
                a || n(t, s)
              );
            if (p) {
              if (p.length > 0 && !p[p.length - 1].parent) continue;
              const f = t.isInteractive();
              (p.length > 0 || f) &&
                (f && this._allInteractiveElements.push(t), p.push(t)),
                this._hitElements.length === 0 && (this._hitElements = p),
                (o = !0);
            }
          }
        }
        const h = this._isInteractive(e),
          l = t.isInteractive();
        return (
          h && l && this._allInteractiveElements.push(t),
          a || this._hitElements.length > 0
            ? null
            : o
            ? this._hitElements
            : h && !n(t, s) && i(t, s)
            ? l
              ? [t]
              : []
            : null
        );
      }
      hitTestRecursive(t, e, s, i, n) {
        if (this._interactivePrune(t) || n(t, s)) return null;
        if (
          ((t.eventMode === "dynamic" || e === "dynamic") &&
            (he.pauseUpdate = !1),
          t.interactiveChildren && t.children)
        ) {
          const h = t.children;
          for (let l = h.length - 1; l >= 0; l--) {
            const u = h[l],
              c = this.hitTestRecursive(
                u,
                this._isInteractive(e) ? e : u.eventMode,
                s,
                i,
                n
              );
            if (c) {
              if (c.length > 0 && !c[c.length - 1].parent) continue;
              const d = t.isInteractive();
              return (c.length > 0 || d) && c.push(t), c;
            }
          }
        }
        const a = this._isInteractive(e),
          o = t.isInteractive();
        return a && i(t, s) ? (o ? [t] : []) : null;
      }
      _isInteractive(t) {
        return t === "static" || t === "dynamic";
      }
      _interactivePrune(t) {
        return !!(
          !t ||
          t.isMask ||
          !t.visible ||
          !t.renderable ||
          t.eventMode === "none" ||
          (t.eventMode === "passive" && !t.interactiveChildren) ||
          t.isMask
        );
      }
      hitPruneFn(t, e) {
        var s;
        if (
          t.hitArea &&
          (t.worldTransform.applyInverse(e, br),
          !t.hitArea.contains(br.x, br.y))
        )
          return !0;
        if (t._mask) {
          const i = t._mask.isMaskData ? t._mask.maskObject : t._mask;
          if (i && !((s = i.containsPoint) != null && s.call(i, e))) return !0;
        }
        return !1;
      }
      hitTestFn(t, e) {
        return t.eventMode === "passive"
          ? !1
          : t.hitArea
          ? !0
          : t.containsPoint
          ? t.containsPoint(e)
          : !1;
      }
      notifyTarget(t, e) {
        var n, a;
        e = e ?? t.type;
        const s = `on${e}`;
        (a = (n = t.currentTarget)[s]) == null || a.call(n, t);
        const i =
          t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET
            ? `${e}capture`
            : e;
        this.notifyListeners(t, i),
          t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e);
      }
      mapPointerDown(t) {
        if (!(t instanceof Nt)) {
          console.warn(
            "EventBoundary cannot map a non-pointer event as a pointer event"
          );
          return;
        }
        const e = this.createPointerEvent(t);
        if ((this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch"))
          this.dispatchEvent(e, "touchstart");
        else if (e.pointerType === "mouse" || e.pointerType === "pen") {
          const i = e.button === 2;
          this.dispatchEvent(e, i ? "rightdown" : "mousedown");
        }
        const s = this.trackingData(t.pointerId);
        (s.pressTargetsByButton[t.button] = e.composedPath()),
          this.freeEvent(e);
      }
      mapPointerMove(t) {
        var h, l;
        if (!(t instanceof Nt)) {
          console.warn(
            "EventBoundary cannot map a non-pointer event as a pointer event"
          );
          return;
        }
        (this._allInteractiveElements.length = 0),
          (this._hitElements.length = 0),
          (this._isPointerMoveEvent = !0);
        const e = this.createPointerEvent(t);
        this._isPointerMoveEvent = !1;
        const s = e.pointerType === "mouse" || e.pointerType === "pen",
          i = this.trackingData(t.pointerId),
          n = this.findMountedTarget(i.overTargets);
        if (
          ((h = i.overTargets) == null ? void 0 : h.length) > 0 &&
          n !== e.target
        ) {
          const u = t.type === "mousemove" ? "mouseout" : "pointerout",
            c = this.createPointerEvent(t, u, n);
          if (
            (this.dispatchEvent(c, "pointerout"),
            s && this.dispatchEvent(c, "mouseout"),
            !e.composedPath().includes(n))
          ) {
            const d = this.createPointerEvent(t, "pointerleave", n);
            for (
              d.eventPhase = d.AT_TARGET;
              d.target && !e.composedPath().includes(d.target);

            )
              (d.currentTarget = d.target),
                this.notifyTarget(d),
                s && this.notifyTarget(d, "mouseleave"),
                (d.target = d.target.parent);
            this.freeEvent(d);
          }
          this.freeEvent(c);
        }
        if (n !== e.target) {
          const u = t.type === "mousemove" ? "mouseover" : "pointerover",
            c = this.clonePointerEvent(e, u);
          this.dispatchEvent(c, "pointerover"),
            s && this.dispatchEvent(c, "mouseover");
          let d = n == null ? void 0 : n.parent;
          for (; d && d !== this.rootTarget.parent && d !== e.target; )
            d = d.parent;
          if (!d || d === this.rootTarget.parent) {
            const p = this.clonePointerEvent(e, "pointerenter");
            for (
              p.eventPhase = p.AT_TARGET;
              p.target && p.target !== n && p.target !== this.rootTarget.parent;

            )
              (p.currentTarget = p.target),
                this.notifyTarget(p),
                s && this.notifyTarget(p, "mouseenter"),
                (p.target = p.target.parent);
            this.freeEvent(p);
          }
          this.freeEvent(c);
        }
        const a = [],
          o = this.enableGlobalMoveEvents ?? !0;
        this.moveOnAll
          ? a.push("pointermove")
          : this.dispatchEvent(e, "pointermove"),
          o && a.push("globalpointermove"),
          e.pointerType === "touch" &&
            (this.moveOnAll
              ? a.splice(1, 0, "touchmove")
              : this.dispatchEvent(e, "touchmove"),
            o && a.push("globaltouchmove")),
          s &&
            (this.moveOnAll
              ? a.splice(1, 0, "mousemove")
              : this.dispatchEvent(e, "mousemove"),
            o && a.push("globalmousemove"),
            (this.cursor = (l = e.target) == null ? void 0 : l.cursor)),
          a.length > 0 && this.all(e, a),
          (this._allInteractiveElements.length = 0),
          (this._hitElements.length = 0),
          (i.overTargets = e.composedPath()),
          this.freeEvent(e);
      }
      mapPointerOver(t) {
        var a;
        if (!(t instanceof Nt)) {
          console.warn(
            "EventBoundary cannot map a non-pointer event as a pointer event"
          );
          return;
        }
        const e = this.trackingData(t.pointerId),
          s = this.createPointerEvent(t),
          i = s.pointerType === "mouse" || s.pointerType === "pen";
        this.dispatchEvent(s, "pointerover"),
          i && this.dispatchEvent(s, "mouseover"),
          s.pointerType === "mouse" &&
            (this.cursor = (a = s.target) == null ? void 0 : a.cursor);
        const n = this.clonePointerEvent(s, "pointerenter");
        for (
          n.eventPhase = n.AT_TARGET;
          n.target && n.target !== this.rootTarget.parent;

        )
          (n.currentTarget = n.target),
            this.notifyTarget(n),
            i && this.notifyTarget(n, "mouseenter"),
            (n.target = n.target.parent);
        (e.overTargets = s.composedPath()),
          this.freeEvent(s),
          this.freeEvent(n);
      }
      mapPointerOut(t) {
        if (!(t instanceof Nt)) {
          console.warn(
            "EventBoundary cannot map a non-pointer event as a pointer event"
          );
          return;
        }
        const e = this.trackingData(t.pointerId);
        if (e.overTargets) {
          const s = t.pointerType === "mouse" || t.pointerType === "pen",
            i = this.findMountedTarget(e.overTargets),
            n = this.createPointerEvent(t, "pointerout", i);
          this.dispatchEvent(n), s && this.dispatchEvent(n, "mouseout");
          const a = this.createPointerEvent(t, "pointerleave", i);
          for (
            a.eventPhase = a.AT_TARGET;
            a.target && a.target !== this.rootTarget.parent;

          )
            (a.currentTarget = a.target),
              this.notifyTarget(a),
              s && this.notifyTarget(a, "mouseleave"),
              (a.target = a.target.parent);
          (e.overTargets = null), this.freeEvent(n), this.freeEvent(a);
        }
        this.cursor = null;
      }
      mapPointerUp(t) {
        if (!(t instanceof Nt)) {
          console.warn(
            "EventBoundary cannot map a non-pointer event as a pointer event"
          );
          return;
        }
        const e = performance.now(),
          s = this.createPointerEvent(t);
        if ((this.dispatchEvent(s, "pointerup"), s.pointerType === "touch"))
          this.dispatchEvent(s, "touchend");
        else if (s.pointerType === "mouse" || s.pointerType === "pen") {
          const o = s.button === 2;
          this.dispatchEvent(s, o ? "rightup" : "mouseup");
        }
        const i = this.trackingData(t.pointerId),
          n = this.findMountedTarget(i.pressTargetsByButton[t.button]);
        let a = n;
        if (n && !s.composedPath().includes(n)) {
          let o = n;
          for (; o && !s.composedPath().includes(o); ) {
            if (
              ((s.currentTarget = o),
              this.notifyTarget(s, "pointerupoutside"),
              s.pointerType === "touch")
            )
              this.notifyTarget(s, "touchendoutside");
            else if (s.pointerType === "mouse" || s.pointerType === "pen") {
              const h = s.button === 2;
              this.notifyTarget(s, h ? "rightupoutside" : "mouseupoutside");
            }
            o = o.parent;
          }
          delete i.pressTargetsByButton[t.button], (a = o);
        }
        if (a) {
          const o = this.clonePointerEvent(s, "click");
          (o.target = a),
            (o.path = null),
            i.clicksByButton[t.button] ||
              (i.clicksByButton[t.button] = {
                clickCount: 0,
                target: o.target,
                timeStamp: e,
              });
          const h = i.clicksByButton[t.button];
          if (
            (h.target === o.target && e - h.timeStamp < 200
              ? ++h.clickCount
              : (h.clickCount = 1),
            (h.target = o.target),
            (h.timeStamp = e),
            (o.detail = h.clickCount),
            o.pointerType === "mouse")
          ) {
            const l = o.button === 2;
            this.dispatchEvent(o, l ? "rightclick" : "click");
          } else o.pointerType === "touch" && this.dispatchEvent(o, "tap");
          this.dispatchEvent(o, "pointertap"), this.freeEvent(o);
        }
        this.freeEvent(s);
      }
      mapPointerUpOutside(t) {
        if (!(t instanceof Nt)) {
          console.warn(
            "EventBoundary cannot map a non-pointer event as a pointer event"
          );
          return;
        }
        const e = this.trackingData(t.pointerId),
          s = this.findMountedTarget(e.pressTargetsByButton[t.button]),
          i = this.createPointerEvent(t);
        if (s) {
          let n = s;
          for (; n; )
            (i.currentTarget = n),
              this.notifyTarget(i, "pointerupoutside"),
              i.pointerType === "touch"
                ? this.notifyTarget(i, "touchendoutside")
                : (i.pointerType === "mouse" || i.pointerType === "pen") &&
                  this.notifyTarget(
                    i,
                    i.button === 2 ? "rightupoutside" : "mouseupoutside"
                  ),
              (n = n.parent);
          delete e.pressTargetsByButton[t.button];
        }
        this.freeEvent(i);
      }
      mapWheel(t) {
        if (!(t instanceof Xe)) {
          console.warn(
            "EventBoundary cannot map a non-wheel event as a wheel event"
          );
          return;
        }
        const e = this.createWheelEvent(t);
        this.dispatchEvent(e), this.freeEvent(e);
      }
      findMountedTarget(t) {
        if (!t) return null;
        let e = t[0];
        for (let s = 1; s < t.length && t[s].parent === e; s++) e = t[s];
        return e;
      }
      createPointerEvent(t, e, s) {
        const i = this.allocateEvent(Nt);
        return (
          this.copyPointerData(t, i),
          this.copyMouseData(t, i),
          this.copyData(t, i),
          (i.nativeEvent = t.nativeEvent),
          (i.originalEvent = t),
          (i.target =
            s ?? this.hitTest(i.global.x, i.global.y) ?? this._hitElements[0]),
          typeof e == "string" && (i.type = e),
          i
        );
      }
      createWheelEvent(t) {
        const e = this.allocateEvent(Xe);
        return (
          this.copyWheelData(t, e),
          this.copyMouseData(t, e),
          this.copyData(t, e),
          (e.nativeEvent = t.nativeEvent),
          (e.originalEvent = t),
          (e.target = this.hitTest(e.global.x, e.global.y)),
          e
        );
      }
      clonePointerEvent(t, e) {
        const s = this.allocateEvent(Nt);
        return (
          (s.nativeEvent = t.nativeEvent),
          (s.originalEvent = t.originalEvent),
          this.copyPointerData(t, s),
          this.copyMouseData(t, s),
          this.copyData(t, s),
          (s.target = t.target),
          (s.path = t.composedPath().slice()),
          (s.type = e ?? s.type),
          s
        );
      }
      copyWheelData(t, e) {
        (e.deltaMode = t.deltaMode),
          (e.deltaX = t.deltaX),
          (e.deltaY = t.deltaY),
          (e.deltaZ = t.deltaZ);
      }
      copyPointerData(t, e) {
        t instanceof Nt &&
          e instanceof Nt &&
          ((e.pointerId = t.pointerId),
          (e.width = t.width),
          (e.height = t.height),
          (e.isPrimary = t.isPrimary),
          (e.pointerType = t.pointerType),
          (e.pressure = t.pressure),
          (e.tangentialPressure = t.tangentialPressure),
          (e.tiltX = t.tiltX),
          (e.tiltY = t.tiltY),
          (e.twist = t.twist));
      }
      copyMouseData(t, e) {
        t instanceof Qs &&
          e instanceof Qs &&
          ((e.altKey = t.altKey),
          (e.button = t.button),
          (e.buttons = t.buttons),
          e.client.copyFrom(t.client),
          (e.ctrlKey = t.ctrlKey),
          (e.metaKey = t.metaKey),
          e.movement.copyFrom(t.movement),
          e.screen.copyFrom(t.screen),
          (e.shiftKey = t.shiftKey),
          e.global.copyFrom(t.global));
      }
      copyData(t, e) {
        (e.isTrusted = t.isTrusted),
          (e.srcElement = t.srcElement),
          (e.timeStamp = performance.now()),
          (e.type = t.type),
          (e.detail = t.detail),
          (e.view = t.view),
          (e.which = t.which),
          e.layer.copyFrom(t.layer),
          e.page.copyFrom(t.page);
      }
      trackingData(t) {
        return (
          this.mappingState.trackingData[t] ||
            (this.mappingState.trackingData[t] = {
              pressTargetsByButton: {},
              clicksByButton: {},
              overTarget: null,
            }),
          this.mappingState.trackingData[t]
        );
      }
      allocateEvent(t) {
        this.eventPool.has(t) || this.eventPool.set(t, []);
        const e = this.eventPool.get(t).pop() || new t(this);
        return (
          (e.eventPhase = e.NONE),
          (e.currentTarget = null),
          (e.path = null),
          (e.target = null),
          e
        );
      }
      freeEvent(t) {
        if (t.manager !== this)
          throw new Error(
            "It is illegal to free an event not managed by this EventBoundary!"
          );
        const e = t.constructor;
        this.eventPool.has(e) || this.eventPool.set(e, []),
          this.eventPool.get(e).push(t);
      }
      notifyListeners(t, e) {
        const s = t.currentTarget._events[e];
        if (s && t.currentTarget.isInteractive())
          if ("fn" in s)
            s.once && t.currentTarget.removeListener(e, s.fn, void 0, !0),
              s.fn.call(s.context, t);
          else
            for (
              let i = 0, n = s.length;
              i < n && !t.propagationImmediatelyStopped;
              i++
            )
              s[i].once &&
                t.currentTarget.removeListener(e, s[i].fn, void 0, !0),
                s[i].fn.call(s[i].context, t);
      }
    }
    const lu = 1,
      uu = {
        touchstart: "pointerdown",
        touchend: "pointerup",
        touchendoutside: "pointerupoutside",
        touchmove: "pointermove",
        touchcancel: "pointercancel",
      },
      Tr = class dn {
        constructor(t) {
          (this.supportsTouchEvents = "ontouchstart" in globalThis),
            (this.supportsPointerEvents = !!globalThis.PointerEvent),
            (this.domElement = null),
            (this.resolution = 1),
            (this.renderer = t),
            (this.rootBoundary = new hu(null)),
            he.init(this),
            (this.autoPreventDefault = !0),
            (this.eventsAdded = !1),
            (this.rootPointerEvent = new Nt(null)),
            (this.rootWheelEvent = new Xe(null)),
            (this.cursorStyles = { default: "inherit", pointer: "pointer" }),
            (this.features = new Proxy(
              { ...dn.defaultEventFeatures },
              {
                set: (e, s, i) => (
                  s === "globalMove" &&
                    (this.rootBoundary.enableGlobalMoveEvents = i),
                  (e[s] = i),
                  !0
                ),
              }
            )),
            (this.onPointerDown = this.onPointerDown.bind(this)),
            (this.onPointerMove = this.onPointerMove.bind(this)),
            (this.onPointerUp = this.onPointerUp.bind(this)),
            (this.onPointerOverOut = this.onPointerOverOut.bind(this)),
            (this.onWheel = this.onWheel.bind(this));
        }
        static get defaultEventMode() {
          return this._defaultEventMode;
        }
        init(t) {
          const { view: e, resolution: s } = this.renderer;
          this.setTargetElement(e),
            (this.resolution = s),
            (dn._defaultEventMode = t.eventMode ?? "auto"),
            Object.assign(this.features, t.eventFeatures ?? {}),
            (this.rootBoundary.enableGlobalMoveEvents =
              this.features.globalMove);
        }
        resolutionChange(t) {
          this.resolution = t;
        }
        destroy() {
          this.setTargetElement(null), (this.renderer = null);
        }
        setCursor(t) {
          t = t || "default";
          let e = !0;
          if (
            (globalThis.OffscreenCanvas &&
              this.domElement instanceof OffscreenCanvas &&
              (e = !1),
            this.currentCursor === t)
          )
            return;
          this.currentCursor = t;
          const s = this.cursorStyles[t];
          if (s)
            switch (typeof s) {
              case "string":
                e && (this.domElement.style.cursor = s);
                break;
              case "function":
                s(t);
                break;
              case "object":
                e && Object.assign(this.domElement.style, s);
                break;
            }
          else
            e &&
              typeof t == "string" &&
              !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) &&
              (this.domElement.style.cursor = t);
        }
        get pointer() {
          return this.rootPointerEvent;
        }
        onPointerDown(t) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          const e = this.normalizeToPointerData(t);
          this.autoPreventDefault &&
            e[0].isNormalized &&
            (t.cancelable || !("cancelable" in t)) &&
            t.preventDefault();
          for (let s = 0, i = e.length; s < i; s++) {
            const n = e[s],
              a = this.bootstrapEvent(this.rootPointerEvent, n);
            this.rootBoundary.mapEvent(a);
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        onPointerMove(t) {
          if (!this.features.move) return;
          (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
            he.pointerMoved();
          const e = this.normalizeToPointerData(t);
          for (let s = 0, i = e.length; s < i; s++) {
            const n = this.bootstrapEvent(this.rootPointerEvent, e[s]);
            this.rootBoundary.mapEvent(n);
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        onPointerUp(t) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          let e = t.target;
          t.composedPath &&
            t.composedPath().length > 0 &&
            (e = t.composedPath()[0]);
          const s = e !== this.domElement ? "outside" : "",
            i = this.normalizeToPointerData(t);
          for (let n = 0, a = i.length; n < a; n++) {
            const o = this.bootstrapEvent(this.rootPointerEvent, i[n]);
            (o.type += s), this.rootBoundary.mapEvent(o);
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        onPointerOverOut(t) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          const e = this.normalizeToPointerData(t);
          for (let s = 0, i = e.length; s < i; s++) {
            const n = this.bootstrapEvent(this.rootPointerEvent, e[s]);
            this.rootBoundary.mapEvent(n);
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        onWheel(t) {
          if (!this.features.wheel) return;
          const e = this.normalizeWheelEvent(t);
          (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
            this.rootBoundary.mapEvent(e);
        }
        setTargetElement(t) {
          this.removeEvents(),
            (this.domElement = t),
            (he.domElement = t),
            this.addEvents();
        }
        addEvents() {
          if (this.eventsAdded || !this.domElement) return;
          he.addTickerListener();
          const t = this.domElement.style;
          t &&
            (globalThis.navigator.msPointerEnabled
              ? ((t.msContentZooming = "none"), (t.msTouchAction = "none"))
              : this.supportsPointerEvents && (t.touchAction = "none")),
            this.supportsPointerEvents
              ? (globalThis.document.addEventListener(
                  "pointermove",
                  this.onPointerMove,
                  !0
                ),
                this.domElement.addEventListener(
                  "pointerdown",
                  this.onPointerDown,
                  !0
                ),
                this.domElement.addEventListener(
                  "pointerleave",
                  this.onPointerOverOut,
                  !0
                ),
                this.domElement.addEventListener(
                  "pointerover",
                  this.onPointerOverOut,
                  !0
                ),
                globalThis.addEventListener("pointerup", this.onPointerUp, !0))
              : (globalThis.document.addEventListener(
                  "mousemove",
                  this.onPointerMove,
                  !0
                ),
                this.domElement.addEventListener(
                  "mousedown",
                  this.onPointerDown,
                  !0
                ),
                this.domElement.addEventListener(
                  "mouseout",
                  this.onPointerOverOut,
                  !0
                ),
                this.domElement.addEventListener(
                  "mouseover",
                  this.onPointerOverOut,
                  !0
                ),
                globalThis.addEventListener("mouseup", this.onPointerUp, !0),
                this.supportsTouchEvents &&
                  (this.domElement.addEventListener(
                    "touchstart",
                    this.onPointerDown,
                    !0
                  ),
                  this.domElement.addEventListener(
                    "touchend",
                    this.onPointerUp,
                    !0
                  ),
                  this.domElement.addEventListener(
                    "touchmove",
                    this.onPointerMove,
                    !0
                  ))),
            this.domElement.addEventListener("wheel", this.onWheel, {
              passive: !0,
              capture: !0,
            }),
            (this.eventsAdded = !0);
        }
        removeEvents() {
          if (!this.eventsAdded || !this.domElement) return;
          he.removeTickerListener();
          const t = this.domElement.style;
          globalThis.navigator.msPointerEnabled
            ? ((t.msContentZooming = ""), (t.msTouchAction = ""))
            : this.supportsPointerEvents && (t.touchAction = ""),
            this.supportsPointerEvents
              ? (globalThis.document.removeEventListener(
                  "pointermove",
                  this.onPointerMove,
                  !0
                ),
                this.domElement.removeEventListener(
                  "pointerdown",
                  this.onPointerDown,
                  !0
                ),
                this.domElement.removeEventListener(
                  "pointerleave",
                  this.onPointerOverOut,
                  !0
                ),
                this.domElement.removeEventListener(
                  "pointerover",
                  this.onPointerOverOut,
                  !0
                ),
                globalThis.removeEventListener(
                  "pointerup",
                  this.onPointerUp,
                  !0
                ))
              : (globalThis.document.removeEventListener(
                  "mousemove",
                  this.onPointerMove,
                  !0
                ),
                this.domElement.removeEventListener(
                  "mousedown",
                  this.onPointerDown,
                  !0
                ),
                this.domElement.removeEventListener(
                  "mouseout",
                  this.onPointerOverOut,
                  !0
                ),
                this.domElement.removeEventListener(
                  "mouseover",
                  this.onPointerOverOut,
                  !0
                ),
                globalThis.removeEventListener("mouseup", this.onPointerUp, !0),
                this.supportsTouchEvents &&
                  (this.domElement.removeEventListener(
                    "touchstart",
                    this.onPointerDown,
                    !0
                  ),
                  this.domElement.removeEventListener(
                    "touchend",
                    this.onPointerUp,
                    !0
                  ),
                  this.domElement.removeEventListener(
                    "touchmove",
                    this.onPointerMove,
                    !0
                  ))),
            this.domElement.removeEventListener("wheel", this.onWheel, !0),
            (this.domElement = null),
            (this.eventsAdded = !1);
        }
        mapPositionToPoint(t, e, s) {
          const i = this.domElement.isConnected
              ? this.domElement.getBoundingClientRect()
              : {
                  x: 0,
                  y: 0,
                  width: this.domElement.width,
                  height: this.domElement.height,
                  left: 0,
                  top: 0,
                },
            n = 1 / this.resolution;
          (t.x = (e - i.left) * (this.domElement.width / i.width) * n),
            (t.y = (s - i.top) * (this.domElement.height / i.height) * n);
        }
        normalizeToPointerData(t) {
          const e = [];
          if (this.supportsTouchEvents && t instanceof TouchEvent)
            for (let s = 0, i = t.changedTouches.length; s < i; s++) {
              const n = t.changedTouches[s];
              typeof n.button > "u" && (n.button = 0),
                typeof n.buttons > "u" && (n.buttons = 1),
                typeof n.isPrimary > "u" &&
                  (n.isPrimary =
                    t.touches.length === 1 && t.type === "touchstart"),
                typeof n.width > "u" && (n.width = n.radiusX || 1),
                typeof n.height > "u" && (n.height = n.radiusY || 1),
                typeof n.tiltX > "u" && (n.tiltX = 0),
                typeof n.tiltY > "u" && (n.tiltY = 0),
                typeof n.pointerType > "u" && (n.pointerType = "touch"),
                typeof n.pointerId > "u" && (n.pointerId = n.identifier || 0),
                typeof n.pressure > "u" && (n.pressure = n.force || 0.5),
                typeof n.twist > "u" && (n.twist = 0),
                typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0),
                typeof n.layerX > "u" && (n.layerX = n.offsetX = n.clientX),
                typeof n.layerY > "u" && (n.layerY = n.offsetY = n.clientY),
                (n.isNormalized = !0),
                (n.type = t.type),
                e.push(n);
            }
          else if (
            !globalThis.MouseEvent ||
            (t instanceof MouseEvent &&
              (!this.supportsPointerEvents ||
                !(t instanceof globalThis.PointerEvent)))
          ) {
            const s = t;
            typeof s.isPrimary > "u" && (s.isPrimary = !0),
              typeof s.width > "u" && (s.width = 1),
              typeof s.height > "u" && (s.height = 1),
              typeof s.tiltX > "u" && (s.tiltX = 0),
              typeof s.tiltY > "u" && (s.tiltY = 0),
              typeof s.pointerType > "u" && (s.pointerType = "mouse"),
              typeof s.pointerId > "u" && (s.pointerId = lu),
              typeof s.pressure > "u" && (s.pressure = 0.5),
              typeof s.twist > "u" && (s.twist = 0),
              typeof s.tangentialPressure > "u" && (s.tangentialPressure = 0),
              (s.isNormalized = !0),
              e.push(s);
          } else e.push(t);
          return e;
        }
        normalizeWheelEvent(t) {
          const e = this.rootWheelEvent;
          return (
            this.transferMouseData(e, t),
            (e.deltaX = t.deltaX),
            (e.deltaY = t.deltaY),
            (e.deltaZ = t.deltaZ),
            (e.deltaMode = t.deltaMode),
            this.mapPositionToPoint(e.screen, t.clientX, t.clientY),
            e.global.copyFrom(e.screen),
            e.offset.copyFrom(e.screen),
            (e.nativeEvent = t),
            (e.type = t.type),
            e
          );
        }
        bootstrapEvent(t, e) {
          return (
            (t.originalEvent = null),
            (t.nativeEvent = e),
            (t.pointerId = e.pointerId),
            (t.width = e.width),
            (t.height = e.height),
            (t.isPrimary = e.isPrimary),
            (t.pointerType = e.pointerType),
            (t.pressure = e.pressure),
            (t.tangentialPressure = e.tangentialPressure),
            (t.tiltX = e.tiltX),
            (t.tiltY = e.tiltY),
            (t.twist = e.twist),
            this.transferMouseData(t, e),
            this.mapPositionToPoint(t.screen, e.clientX, e.clientY),
            t.global.copyFrom(t.screen),
            t.offset.copyFrom(t.screen),
            (t.isTrusted = e.isTrusted),
            t.type === "pointerleave" && (t.type = "pointerout"),
            t.type.startsWith("mouse") &&
              (t.type = t.type.replace("mouse", "pointer")),
            t.type.startsWith("touch") && (t.type = uu[t.type] || t.type),
            t
          );
        }
        transferMouseData(t, e) {
          (t.isTrusted = e.isTrusted),
            (t.srcElement = e.srcElement),
            (t.timeStamp = performance.now()),
            (t.type = e.type),
            (t.altKey = e.altKey),
            (t.button = e.button),
            (t.buttons = e.buttons),
            (t.client.x = e.clientX),
            (t.client.y = e.clientY),
            (t.ctrlKey = e.ctrlKey),
            (t.metaKey = e.metaKey),
            (t.movement.x = e.movementX),
            (t.movement.y = e.movementY),
            (t.page.x = e.pageX),
            (t.page.y = e.pageY),
            (t.relatedTarget = null),
            (t.shiftKey = e.shiftKey);
        }
      };
    (Tr.extension = {
      name: "events",
      type: [M.RendererSystem, M.CanvasRendererSystem],
    }),
      (Tr.defaultEventFeatures = {
        move: !0,
        globalMove: !0,
        click: !0,
        wheel: !0,
      });
    let Er = Tr;
    k.add(Er);
    function ba(r) {
      return r === "dynamic" || r === "static";
    }
    const cu = {
      onclick: null,
      onmousedown: null,
      onmouseenter: null,
      onmouseleave: null,
      onmousemove: null,
      onglobalmousemove: null,
      onmouseout: null,
      onmouseover: null,
      onmouseup: null,
      onmouseupoutside: null,
      onpointercancel: null,
      onpointerdown: null,
      onpointerenter: null,
      onpointerleave: null,
      onpointermove: null,
      onglobalpointermove: null,
      onpointerout: null,
      onpointerover: null,
      onpointertap: null,
      onpointerup: null,
      onpointerupoutside: null,
      onrightclick: null,
      onrightdown: null,
      onrightup: null,
      onrightupoutside: null,
      ontap: null,
      ontouchcancel: null,
      ontouchend: null,
      ontouchendoutside: null,
      ontouchmove: null,
      onglobaltouchmove: null,
      ontouchstart: null,
      onwheel: null,
      _internalInteractive: void 0,
      get interactive() {
        return this._internalInteractive ?? ba(Er.defaultEventMode);
      },
      set interactive(r) {
        V(
          "7.2.0",
          "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."
        ),
          (this._internalInteractive = r),
          (this.eventMode = r ? "static" : "auto");
      },
      _internalEventMode: void 0,
      get eventMode() {
        return this._internalEventMode ?? Er.defaultEventMode;
      },
      set eventMode(r) {
        (this._internalInteractive = ba(r)), (this._internalEventMode = r);
      },
      isInteractive() {
        return this.eventMode === "static" || this.eventMode === "dynamic";
      },
      interactiveChildren: !0,
      hitArea: null,
      addEventListener(r, t, e) {
        const s =
            (typeof e == "boolean" && e) || (typeof e == "object" && e.capture),
          i = typeof t == "function" ? void 0 : t;
        (r = s ? `${r}capture` : r),
          (t = typeof t == "function" ? t : t.handleEvent),
          this.on(r, t, i);
      },
      removeEventListener(r, t, e) {
        const s =
            (typeof e == "boolean" && e) || (typeof e == "object" && e.capture),
          i = typeof t == "function" ? void 0 : t;
        (r = s ? `${r}capture` : r),
          (t = typeof t == "function" ? t : t.handleEvent),
          this.off(r, t, i);
      },
      dispatchEvent(r) {
        if (!(r instanceof gs))
          throw new Error(
            "DisplayObject cannot propagate events outside of the Federated Events API"
          );
        return (
          (r.defaultPrevented = !1),
          (r.path = null),
          (r.target = this),
          r.manager.dispatchEvent(r),
          !r.defaultPrevented
        );
      },
    };
    rt.mixin(cu);
    const du = {
      accessible: !1,
      accessibleTitle: null,
      accessibleHint: null,
      tabIndex: 0,
      _accessibleActive: !1,
      _accessibleDiv: null,
      accessibleType: "button",
      accessiblePointerEvents: "auto",
      accessibleChildren: !0,
      renderId: -1,
    };
    rt.mixin(du);
    const pu = 9,
      ti = 100,
      fu = 0,
      mu = 0,
      Ta = 2,
      Ea = 1,
      gu = -1e3,
      _u = -1e3,
      xu = 2;
    class Aa {
      constructor(t) {
        (this.debug = !1),
          (this._isActive = !1),
          (this._isMobileAccessibility = !1),
          (this.pool = []),
          (this.renderId = 0),
          (this.children = []),
          (this.androidUpdateCount = 0),
          (this.androidUpdateFrequency = 500),
          (this._hookDiv = null),
          (ee.tablet || ee.phone) && this.createTouchHook();
        const e = document.createElement("div");
        (e.style.width = `${ti}px`),
          (e.style.height = `${ti}px`),
          (e.style.position = "absolute"),
          (e.style.top = `${fu}px`),
          (e.style.left = `${mu}px`),
          (e.style.zIndex = Ta.toString()),
          (this.div = e),
          (this.renderer = t),
          (this._onKeyDown = this._onKeyDown.bind(this)),
          (this._onMouseMove = this._onMouseMove.bind(this)),
          globalThis.addEventListener("keydown", this._onKeyDown, !1);
      }
      get isActive() {
        return this._isActive;
      }
      get isMobileAccessibility() {
        return this._isMobileAccessibility;
      }
      createTouchHook() {
        const t = document.createElement("button");
        (t.style.width = `${Ea}px`),
          (t.style.height = `${Ea}px`),
          (t.style.position = "absolute"),
          (t.style.top = `${gu}px`),
          (t.style.left = `${_u}px`),
          (t.style.zIndex = xu.toString()),
          (t.style.backgroundColor = "#FF0000"),
          (t.title = "select to enable accessibility for this content"),
          t.addEventListener("focus", () => {
            (this._isMobileAccessibility = !0),
              this.activate(),
              this.destroyTouchHook();
          }),
          document.body.appendChild(t),
          (this._hookDiv = t);
      }
      destroyTouchHook() {
        this._hookDiv &&
          (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
      }
      activate() {
        var t;
        this._isActive ||
          ((this._isActive = !0),
          globalThis.document.addEventListener(
            "mousemove",
            this._onMouseMove,
            !0
          ),
          globalThis.removeEventListener("keydown", this._onKeyDown, !1),
          this.renderer.on("postrender", this.update, this),
          (t = this.renderer.view.parentNode) == null ||
            t.appendChild(this.div));
      }
      deactivate() {
        var t;
        !this._isActive ||
          this._isMobileAccessibility ||
          ((this._isActive = !1),
          globalThis.document.removeEventListener(
            "mousemove",
            this._onMouseMove,
            !0
          ),
          globalThis.addEventListener("keydown", this._onKeyDown, !1),
          this.renderer.off("postrender", this.update),
          (t = this.div.parentNode) == null || t.removeChild(this.div));
      }
      updateAccessibleObjects(t) {
        if (!t.visible || !t.accessibleChildren) return;
        t.accessible &&
          t.isInteractive() &&
          (t._accessibleActive || this.addChild(t),
          (t.renderId = this.renderId));
        const e = t.children;
        if (e)
          for (let s = 0; s < e.length; s++) this.updateAccessibleObjects(e[s]);
      }
      update() {
        const t = performance.now();
        if (
          (ee.android.device && t < this.androidUpdateCount) ||
          ((this.androidUpdateCount = t + this.androidUpdateFrequency),
          !this.renderer.renderingToScreen)
        )
          return;
        this.renderer.lastObjectRendered &&
          this.updateAccessibleObjects(this.renderer.lastObjectRendered);
        const {
            x: e,
            y: s,
            width: i,
            height: n,
          } = this.renderer.view.getBoundingClientRect(),
          { width: a, height: o, resolution: h } = this.renderer,
          l = (i / a) * h,
          u = (n / o) * h;
        let c = this.div;
        (c.style.left = `${e}px`),
          (c.style.top = `${s}px`),
          (c.style.width = `${a}px`),
          (c.style.height = `${o}px`);
        for (let d = 0; d < this.children.length; d++) {
          const p = this.children[d];
          if (p.renderId !== this.renderId)
            (p._accessibleActive = !1),
              Fe(this.children, d, 1),
              this.div.removeChild(p._accessibleDiv),
              this.pool.push(p._accessibleDiv),
              (p._accessibleDiv = null),
              d--;
          else {
            c = p._accessibleDiv;
            let f = p.hitArea;
            const m = p.worldTransform;
            p.hitArea
              ? ((c.style.left = `${(m.tx + f.x * m.a) * l}px`),
                (c.style.top = `${(m.ty + f.y * m.d) * u}px`),
                (c.style.width = `${f.width * m.a * l}px`),
                (c.style.height = `${f.height * m.d * u}px`))
              : ((f = p.getBounds()),
                this.capHitArea(f),
                (c.style.left = `${f.x * l}px`),
                (c.style.top = `${f.y * u}px`),
                (c.style.width = `${f.width * l}px`),
                (c.style.height = `${f.height * u}px`),
                c.title !== p.accessibleTitle &&
                  p.accessibleTitle !== null &&
                  (c.title = p.accessibleTitle),
                c.getAttribute("aria-label") !== p.accessibleHint &&
                  p.accessibleHint !== null &&
                  c.setAttribute("aria-label", p.accessibleHint)),
              (p.accessibleTitle !== c.title || p.tabIndex !== c.tabIndex) &&
                ((c.title = p.accessibleTitle),
                (c.tabIndex = p.tabIndex),
                this.debug && this.updateDebugHTML(c));
          }
        }
        this.renderId++;
      }
      updateDebugHTML(t) {
        t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
      }
      capHitArea(t) {
        t.x < 0 && ((t.width += t.x), (t.x = 0)),
          t.y < 0 && ((t.height += t.y), (t.y = 0));
        const { width: e, height: s } = this.renderer;
        t.x + t.width > e && (t.width = e - t.x),
          t.y + t.height > s && (t.height = s - t.y);
      }
      addChild(t) {
        let e = this.pool.pop();
        e ||
          ((e = document.createElement("button")),
          (e.style.width = `${ti}px`),
          (e.style.height = `${ti}px`),
          (e.style.backgroundColor = this.debug
            ? "rgba(255,255,255,0.5)"
            : "transparent"),
          (e.style.position = "absolute"),
          (e.style.zIndex = Ta.toString()),
          (e.style.borderStyle = "none"),
          navigator.userAgent.toLowerCase().includes("chrome")
            ? e.setAttribute("aria-live", "off")
            : e.setAttribute("aria-live", "polite"),
          navigator.userAgent.match(/rv:.*Gecko\//)
            ? e.setAttribute("aria-relevant", "additions")
            : e.setAttribute("aria-relevant", "text"),
          e.addEventListener("click", this._onClick.bind(this)),
          e.addEventListener("focus", this._onFocus.bind(this)),
          e.addEventListener("focusout", this._onFocusOut.bind(this))),
          (e.style.pointerEvents = t.accessiblePointerEvents),
          (e.type = t.accessibleType),
          t.accessibleTitle && t.accessibleTitle !== null
            ? (e.title = t.accessibleTitle)
            : (!t.accessibleHint || t.accessibleHint === null) &&
              (e.title = `displayObject ${t.tabIndex}`),
          t.accessibleHint &&
            t.accessibleHint !== null &&
            e.setAttribute("aria-label", t.accessibleHint),
          this.debug && this.updateDebugHTML(e),
          (t._accessibleActive = !0),
          (t._accessibleDiv = e),
          (e.displayObject = t),
          this.children.push(t),
          this.div.appendChild(t._accessibleDiv),
          (t._accessibleDiv.tabIndex = t.tabIndex);
      }
      _dispatchEvent(t, e) {
        const { displayObject: s } = t.target,
          i = this.renderer.events.rootBoundary,
          n = Object.assign(new gs(i), { target: s });
        (i.rootTarget = this.renderer.lastObjectRendered),
          e.forEach((a) => i.dispatchEvent(n, a));
      }
      _onClick(t) {
        this._dispatchEvent(t, ["click", "pointertap", "tap"]);
      }
      _onFocus(t) {
        t.target.getAttribute("aria-live") ||
          t.target.setAttribute("aria-live", "assertive"),
          this._dispatchEvent(t, ["mouseover"]);
      }
      _onFocusOut(t) {
        t.target.getAttribute("aria-live") ||
          t.target.setAttribute("aria-live", "polite"),
          this._dispatchEvent(t, ["mouseout"]);
      }
      _onKeyDown(t) {
        t.keyCode === pu && this.activate();
      }
      _onMouseMove(t) {
        (t.movementX === 0 && t.movementY === 0) || this.deactivate();
      }
      destroy() {
        this.destroyTouchHook(),
          (this.div = null),
          globalThis.document.removeEventListener(
            "mousemove",
            this._onMouseMove,
            !0
          ),
          globalThis.removeEventListener("keydown", this._onKeyDown),
          (this.pool = null),
          (this.children = null),
          (this.renderer = null);
      }
    }
    (Aa.extension = {
      name: "accessibility",
      type: [M.RendererPlugin, M.CanvasRendererPlugin],
    }),
      k.add(Aa);
    const wa = class pn {
      constructor(t) {
        (this.stage = new yt()),
          (t = Object.assign({ forceCanvas: !1 }, t)),
          (this.renderer = Rl(t)),
          pn._plugins.forEach((e) => {
            e.init.call(this, t);
          });
      }
      render() {
        this.renderer.render(this.stage);
      }
      get view() {
        var t;
        return (t = this.renderer) == null ? void 0 : t.view;
      }
      get screen() {
        var t;
        return (t = this.renderer) == null ? void 0 : t.screen;
      }
      destroy(t, e) {
        const s = pn._plugins.slice(0);
        s.reverse(),
          s.forEach((i) => {
            i.destroy.call(this);
          }),
          this.stage.destroy(e),
          (this.stage = null),
          this.renderer.destroy(t),
          (this.renderer = null);
      }
    };
    wa._plugins = [];
    let Sa = wa;
    k.handleByList(M.Application, Sa._plugins);
    class Ia {
      static init(t) {
        Object.defineProperty(this, "resizeTo", {
          set(e) {
            globalThis.removeEventListener("resize", this.queueResize),
              (this._resizeTo = e),
              e &&
                (globalThis.addEventListener("resize", this.queueResize),
                this.resize());
          },
          get() {
            return this._resizeTo;
          },
        }),
          (this.queueResize = () => {
            this._resizeTo &&
              (this.cancelResize(),
              (this._resizeId = requestAnimationFrame(() => this.resize())));
          }),
          (this.cancelResize = () => {
            this._resizeId &&
              (cancelAnimationFrame(this._resizeId), (this._resizeId = null));
          }),
          (this.resize = () => {
            if (!this._resizeTo) return;
            this.cancelResize();
            let e, s;
            if (this._resizeTo === globalThis.window)
              (e = globalThis.innerWidth), (s = globalThis.innerHeight);
            else {
              const { clientWidth: i, clientHeight: n } = this._resizeTo;
              (e = i), (s = n);
            }
            this.renderer.resize(e, s), this.render();
          }),
          (this._resizeId = null),
          (this._resizeTo = null),
          (this.resizeTo = t.resizeTo || null);
      }
      static destroy() {
        globalThis.removeEventListener("resize", this.queueResize),
          this.cancelResize(),
          (this.cancelResize = null),
          (this.queueResize = null),
          (this.resizeTo = null),
          (this.resize = null);
      }
    }
    (Ia.extension = M.Application), k.add(Ia);
    const Ca = {
      loader: M.LoadParser,
      resolver: M.ResolveParser,
      cache: M.CacheParser,
      detection: M.DetectionParser,
    };
    k.handle(
      M.Asset,
      (r) => {
        const t = r.ref;
        Object.entries(Ca)
          .filter(([e]) => !!t[e])
          .forEach(([e, s]) =>
            k.add(Object.assign(t[e], { extension: t[e].extension ?? s }))
          );
      },
      (r) => {
        const t = r.ref;
        Object.keys(Ca)
          .filter((e) => !!t[e])
          .forEach((e) => k.remove(t[e]));
      }
    );
    class yu {
      constructor(t, e = !1) {
        (this._loader = t),
          (this._assetList = []),
          (this._isLoading = !1),
          (this._maxConcurrent = 1),
          (this.verbose = e);
      }
      add(t) {
        t.forEach((e) => {
          this._assetList.push(e);
        }),
          this.verbose &&
            console.log("[BackgroundLoader] assets: ", this._assetList),
          this._isActive && !this._isLoading && this._next();
      }
      async _next() {
        if (this._assetList.length && this._isActive) {
          this._isLoading = !0;
          const t = [],
            e = Math.min(this._assetList.length, this._maxConcurrent);
          for (let s = 0; s < e; s++) t.push(this._assetList.pop());
          await this._loader.load(t), (this._isLoading = !1), this._next();
        }
      }
      get active() {
        return this._isActive;
      }
      set active(t) {
        this._isActive !== t &&
          ((this._isActive = t), t && !this._isLoading && this._next());
      }
    }
    function Ve(r, t) {
      if (Array.isArray(t)) {
        for (const e of t) if (r.startsWith(`data:${e}`)) return !0;
        return !1;
      }
      return r.startsWith(`data:${t}`);
    }
    function le(r, t) {
      const e = r.split("?")[0],
        s = lt.extname(e).toLowerCase();
      return Array.isArray(t) ? t.includes(s) : s === t;
    }
    const Ot = (r, t, e = !1) => (
        Array.isArray(r) || (r = [r]),
        t ? r.map((s) => (typeof s == "string" || e ? t(s) : s)) : r
      ),
      Ar = (r, t) => {
        const e = t.split("?")[1];
        return e && (r += `?${e}`), r;
      };
    function Ra(r, t, e, s, i) {
      const n = t[e];
      for (let a = 0; a < n.length; a++) {
        const o = n[a];
        e < t.length - 1
          ? Ra(r.replace(s[e], o), t, e + 1, s, i)
          : i.push(r.replace(s[e], o));
      }
    }
    function vu(r) {
      const t = /\{(.*?)\}/g,
        e = r.match(t),
        s = [];
      if (e) {
        const i = [];
        e.forEach((n) => {
          const a = n.substring(1, n.length - 1).split(",");
          i.push(a);
        }),
          Ra(r, i, 0, e, s);
      } else s.push(r);
      return s;
    }
    const ei = (r) => !Array.isArray(r);
    class bu {
      constructor() {
        (this._parsers = []),
          (this._cache = new Map()),
          (this._cacheMap = new Map());
      }
      reset() {
        this._cacheMap.clear(), this._cache.clear();
      }
      has(t) {
        return this._cache.has(t);
      }
      get(t) {
        const e = this._cache.get(t);
        return (
          e ||
            console.warn(`[Assets] Asset id ${t} was not found in the Cache`),
          e
        );
      }
      set(t, e) {
        const s = Ot(t);
        let i;
        for (let o = 0; o < this.parsers.length; o++) {
          const h = this.parsers[o];
          if (h.test(e)) {
            i = h.getCacheableAssets(s, e);
            break;
          }
        }
        i ||
          ((i = {}),
          s.forEach((o) => {
            i[o] = e;
          }));
        const n = Object.keys(i),
          a = { cacheKeys: n, keys: s };
        if (
          (s.forEach((o) => {
            this._cacheMap.set(o, a);
          }),
          n.forEach((o) => {
            this._cache.has(o) &&
              this._cache.get(o) !== e &&
              console.warn("[Cache] already has key:", o),
              this._cache.set(o, i[o]);
          }),
          e instanceof L)
        ) {
          const o = e;
          s.forEach((h) => {
            o.baseTexture !== L.EMPTY.baseTexture &&
              $.addToCache(o.baseTexture, h),
              L.addToCache(o, h);
          });
        }
      }
      remove(t) {
        if (!this._cacheMap.has(t)) {
          console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
          return;
        }
        const e = this._cacheMap.get(t);
        e.cacheKeys.forEach((s) => {
          this._cache.delete(s);
        }),
          e.keys.forEach((s) => {
            this._cacheMap.delete(s);
          });
      }
      get parsers() {
        return this._parsers;
      }
    }
    const Ie = new bu();
    class Tu {
      constructor() {
        (this._parsers = []),
          (this._parsersValidated = !1),
          (this.parsers = new Proxy(this._parsers, {
            set: (t, e, s) => ((this._parsersValidated = !1), (t[e] = s), !0),
          })),
          (this.promiseCache = {});
      }
      reset() {
        (this._parsersValidated = !1), (this.promiseCache = {});
      }
      _getLoadPromiseAndParser(t, e) {
        const s = { promise: null, parser: null };
        return (
          (s.promise = (async () => {
            var a, o;
            let i = null,
              n = null;
            if (
              (e.loadParser &&
                ((n = this._parserHash[e.loadParser]),
                n ||
                  console.warn(
                    `[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`
                  )),
              !n)
            ) {
              for (let h = 0; h < this.parsers.length; h++) {
                const l = this.parsers[h];
                if (l.load && (a = l.test) != null && a.call(l, t, e, this)) {
                  n = l;
                  break;
                }
              }
              if (!n)
                return (
                  console.warn(
                    `[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`
                  ),
                  null
                );
            }
            (i = await n.load(t, e, this)), (s.parser = n);
            for (let h = 0; h < this.parsers.length; h++) {
              const l = this.parsers[h];
              l.parse &&
                l.parse &&
                (await ((o = l.testParse) == null
                  ? void 0
                  : o.call(l, i, e, this))) &&
                ((i = (await l.parse(i, e, this)) || i), (s.parser = l));
            }
            return i;
          })()),
          s
        );
      }
      async load(t, e) {
        this._parsersValidated || this._validateParsers();
        let s = 0;
        const i = {},
          n = ei(t),
          a = Ot(t, (l) => ({ alias: [l], src: l })),
          o = a.length,
          h = a.map(async (l) => {
            const u = lt.toAbsolute(l.src);
            if (!i[l.src])
              try {
                this.promiseCache[u] ||
                  (this.promiseCache[u] = this._getLoadPromiseAndParser(u, l)),
                  (i[l.src] = await this.promiseCache[u].promise),
                  e && e(++s / o);
              } catch (c) {
                throw (
                  (delete this.promiseCache[u],
                  delete i[l.src],
                  new Error(`[Loader.load] Failed to load ${u}.
${c}`))
                );
              }
          });
        return await Promise.all(h), n ? i[a[0].src] : i;
      }
      async unload(t) {
        const e = Ot(t, (s) => ({ alias: [s], src: s })).map(async (s) => {
          var a, o;
          const i = lt.toAbsolute(s.src),
            n = this.promiseCache[i];
          if (n) {
            const h = await n.promise;
            delete this.promiseCache[i],
              (o = (a = n.parser) == null ? void 0 : a.unload) == null ||
                o.call(a, h, s, this);
          }
        });
        await Promise.all(e);
      }
      _validateParsers() {
        (this._parsersValidated = !0),
          (this._parserHash = this._parsers
            .filter((t) => t.name)
            .reduce(
              (t, e) => (
                t[e.name] &&
                  console.warn(`[Assets] loadParser name conflict "${e.name}"`),
                { ...t, [e.name]: e }
              ),
              {}
            ));
      }
    }
    var Ft = ((r) => (
      (r[(r.Low = 0)] = "Low"),
      (r[(r.Normal = 1)] = "Normal"),
      (r[(r.High = 2)] = "High"),
      r
    ))(Ft || {});
    const Eu = ".json",
      Au = "application/json",
      wu = {
        extension: { type: M.LoadParser, priority: Ft.Low },
        name: "loadJson",
        test(r) {
          return Ve(r, Au) || le(r, Eu);
        },
        async load(r) {
          return await (await N.ADAPTER.fetch(r)).json();
        },
      };
    k.add(wu);
    const Su = ".txt",
      Iu = "text/plain",
      Cu = {
        name: "loadTxt",
        extension: { type: M.LoadParser, priority: Ft.Low },
        test(r) {
          return Ve(r, Iu) || le(r, Su);
        },
        async load(r) {
          return await (await N.ADAPTER.fetch(r)).text();
        },
      };
    k.add(Cu);
    const Ru = [
        "normal",
        "bold",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      Pu = [".ttf", ".otf", ".woff", ".woff2"],
      Mu = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
      Du = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
    function Bu(r) {
      const t = lt.extname(r),
        e = lt
          .basename(r, t)
          .replace(/(-|_)/g, " ")
          .toLowerCase()
          .split(" ")
          .map((n) => n.charAt(0).toUpperCase() + n.slice(1));
      let s = e.length > 0;
      for (const n of e)
        if (!n.match(Du)) {
          s = !1;
          break;
        }
      let i = e.join(" ");
      return s || (i = `"${i.replace(/[\\"]/g, "\\$&")}"`), i;
    }
    const Lu = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
    function Nu(r) {
      return Lu.test(r) ? r : encodeURI(r);
    }
    const Ou = {
      extension: { type: M.LoadParser, priority: Ft.Low },
      name: "loadWebFont",
      test(r) {
        return Ve(r, Mu) || le(r, Pu);
      },
      async load(r, t) {
        var s, i, n;
        const e = N.ADAPTER.getFontFaceSet();
        if (e) {
          const a = [],
            o = ((s = t.data) == null ? void 0 : s.family) ?? Bu(r),
            h = ((n = (i = t.data) == null ? void 0 : i.weights) == null
              ? void 0
              : n.filter((u) => Ru.includes(u))) ?? ["normal"],
            l = t.data ?? {};
          for (let u = 0; u < h.length; u++) {
            const c = h[u],
              d = new FontFace(o, `url(${Nu(r)})`, { ...l, weight: c });
            await d.load(), e.add(d), a.push(d);
          }
          return a.length === 1 ? a[0] : a;
        }
        return (
          console.warn(
            "[loadWebFont] FontFace API is not supported. Skipping loading font"
          ),
          null
        );
      },
      unload(r) {
        (Array.isArray(r) ? r : [r]).forEach((t) =>
          N.ADAPTER.getFontFaceSet().delete(t)
        );
      },
    };
    k.add(Ou);
    let Pa = 0,
      wr;
    const Fu =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
      ku = {
        id: "checkImageBitmap",
        code: `
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('${Fu}');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `,
      },
      Uu = {
        id: "loadImageBitmap",
        code: `
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`,
      };
    let Sr;
    class Gu {
      constructor() {
        (this._initialized = !1),
          (this._createdWorkers = 0),
          (this.workerPool = []),
          (this.queue = []),
          (this.resolveHash = {});
      }
      isImageBitmapSupported() {
        return this._isImageBitmapSupported !== void 0
          ? this._isImageBitmapSupported
          : ((this._isImageBitmapSupported = new Promise((t) => {
              const e = URL.createObjectURL(
                  new Blob([ku.code], { type: "application/javascript" })
                ),
                s = new Worker(e);
              s.addEventListener("message", (i) => {
                s.terminate(), URL.revokeObjectURL(e), t(i.data);
              });
            })),
            this._isImageBitmapSupported);
      }
      loadImageBitmap(t) {
        return this._run("loadImageBitmap", [t]);
      }
      async _initWorkers() {
        this._initialized || (this._initialized = !0);
      }
      getWorker() {
        wr === void 0 && (wr = navigator.hardwareConcurrency || 4);
        let t = this.workerPool.pop();
        return (
          !t &&
            this._createdWorkers < wr &&
            (Sr ||
              (Sr = URL.createObjectURL(
                new Blob([Uu.code], { type: "application/javascript" })
              )),
            this._createdWorkers++,
            (t = new Worker(Sr)),
            t.addEventListener("message", (e) => {
              this.complete(e.data), this.returnWorker(e.target), this.next();
            })),
          t
        );
      }
      returnWorker(t) {
        this.workerPool.push(t);
      }
      complete(t) {
        t.error !== void 0
          ? this.resolveHash[t.uuid].reject(t.error)
          : this.resolveHash[t.uuid].resolve(t.data),
          (this.resolveHash[t.uuid] = null);
      }
      async _run(t, e) {
        await this._initWorkers();
        const s = new Promise((i, n) => {
          this.queue.push({ id: t, arguments: e, resolve: i, reject: n });
        });
        return this.next(), s;
      }
      next() {
        if (!this.queue.length) return;
        const t = this.getWorker();
        if (!t) return;
        const e = this.queue.pop(),
          s = e.id;
        (this.resolveHash[Pa] = { resolve: e.resolve, reject: e.reject }),
          t.postMessage({ data: e.arguments, uuid: Pa++, id: s });
      }
    }
    const Ma = new Gu();
    function _s(r, t, e) {
      r.resource.internal = !0;
      const s = new L(r),
        i = () => {
          delete t.promiseCache[e], Ie.has(e) && Ie.remove(e);
        };
      return (
        s.baseTexture.once("destroyed", () => {
          e in t.promiseCache &&
            (console.warn(
              "[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."
            ),
            i());
        }),
        s.once("destroyed", () => {
          r.destroyed ||
            (console.warn(
              "[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."
            ),
            i());
        }),
        s
      );
    }
    const Hu = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
      zu = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    async function Xu(r) {
      const t = await N.ADAPTER.fetch(r);
      if (!t.ok)
        throw new Error(
          `[loadImageBitmap] Failed to fetch ${r}: ${t.status} ${t.statusText}`
        );
      const e = await t.blob();
      return await createImageBitmap(e);
    }
    const si = {
      name: "loadTextures",
      extension: { type: M.LoadParser, priority: Ft.High },
      config: {
        preferWorkers: !0,
        preferCreateImageBitmap: !0,
        crossOrigin: "anonymous",
      },
      test(r) {
        return Ve(r, zu) || le(r, Hu);
      },
      async load(r, t, e) {
        var o;
        const s =
          globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
        let i;
        s
          ? this.config.preferWorkers && (await Ma.isImageBitmapSupported())
            ? (i = await Ma.loadImageBitmap(r))
            : (i = await Xu(r))
          : (i = await new Promise((h, l) => {
              const u = new Image();
              (u.crossOrigin = this.config.crossOrigin),
                (u.src = r),
                u.complete
                  ? h(u)
                  : ((u.onload = () => h(u)), (u.onerror = (c) => l(c)));
            }));
        const n = { ...t.data };
        n.resolution ?? (n.resolution = Yt(r)),
          s &&
            ((o = n.resourceOptions) == null ? void 0 : o.ownsImageBitmap) ===
              void 0 &&
            ((n.resourceOptions = { ...n.resourceOptions }),
            (n.resourceOptions.ownsImageBitmap = !0));
        const a = new $(i, n);
        return (a.resource.src = r), _s(a, e, r);
      },
      unload(r) {
        r.destroy(!0);
      },
    };
    k.add(si);
    const Vu = ".svg",
      $u = "image/svg+xml",
      Wu = {
        extension: { type: M.LoadParser, priority: Ft.High },
        name: "loadSVG",
        test(r) {
          return Ve(r, $u) || le(r, Vu);
        },
        async testParse(r) {
          return _r.test(r);
        },
        async parse(r, t, e) {
          var n;
          const s = new _r(
            r,
            (n = t == null ? void 0 : t.data) == null
              ? void 0
              : n.resourceOptions
          );
          await s.load();
          const i = new $(s, {
            resolution: Yt(r),
            ...(t == null ? void 0 : t.data),
          });
          return (i.resource.src = t.src), _s(i, e, t.src);
        },
        async load(r, t) {
          return (await N.ADAPTER.fetch(r)).text();
        },
        unload: si.unload,
      };
    k.add(Wu);
    const ju = [".mp4", ".m4v", ".webm", ".ogv"],
      Yu = ["video/mp4", "video/webm", "video/ogg"],
      qu = {
        name: "loadVideo",
        extension: { type: M.LoadParser, priority: Ft.High },
        config: { defaultAutoPlay: !0 },
        test(r) {
          return Ve(r, Yu) || le(r, ju);
        },
        async load(r, t, e) {
          var a;
          let s;
          const i = await (await N.ADAPTER.fetch(r)).blob(),
            n = URL.createObjectURL(i);
          try {
            const o = {
                autoPlay: this.config.defaultAutoPlay,
                ...((a = t == null ? void 0 : t.data) == null
                  ? void 0
                  : a.resourceOptions),
              },
              h = new _a(n, o);
            await h.load();
            const l = new $(h, {
              alphaMode: await hh(),
              resolution: Yt(r),
              ...(t == null ? void 0 : t.data),
            });
            (l.resource.src = r),
              (s = _s(l, e, r)),
              s.baseTexture.once("destroyed", () => {
                URL.revokeObjectURL(n);
              });
          } catch (o) {
            throw (URL.revokeObjectURL(n), o);
          }
          return s;
        },
        unload(r) {
          r.destroy(!0);
        },
      };
    k.add(qu);
    class Ku {
      constructor() {
        (this._defaultBundleIdentifierOptions = {
          connector: "-",
          createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
          extractAssetIdFromBundle: (t, e) =>
            e.replace(`${t}${this._bundleIdConnector}`, ""),
        }),
          (this._bundleIdConnector =
            this._defaultBundleIdentifierOptions.connector),
          (this._createBundleAssetId =
            this._defaultBundleIdentifierOptions.createBundleAssetId),
          (this._extractAssetIdFromBundle =
            this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
          (this._assetMap = {}),
          (this._preferredOrder = []),
          (this._parsers = []),
          (this._resolverHash = {}),
          (this._bundles = {});
      }
      setBundleIdentifier(t) {
        if (
          ((this._bundleIdConnector = t.connector ?? this._bundleIdConnector),
          (this._createBundleAssetId =
            t.createBundleAssetId ?? this._createBundleAssetId),
          (this._extractAssetIdFromBundle =
            t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle),
          this._extractAssetIdFromBundle(
            "foo",
            this._createBundleAssetId("foo", "bar")
          ) !== "bar")
        )
          throw new Error(
            "[Resolver] GenerateBundleAssetId are not working correctly"
          );
      }
      prefer(...t) {
        t.forEach((e) => {
          this._preferredOrder.push(e),
            e.priority || (e.priority = Object.keys(e.params));
        }),
          (this._resolverHash = {});
      }
      set basePath(t) {
        this._basePath = t;
      }
      get basePath() {
        return this._basePath;
      }
      set rootPath(t) {
        this._rootPath = t;
      }
      get rootPath() {
        return this._rootPath;
      }
      get parsers() {
        return this._parsers;
      }
      reset() {
        this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
          (this._assetMap = {}),
          (this._preferredOrder = []),
          (this._resolverHash = {}),
          (this._rootPath = null),
          (this._basePath = null),
          (this._manifest = null),
          (this._bundles = {}),
          (this._defaultSearchParams = null);
      }
      setDefaultSearchParams(t) {
        if (typeof t == "string") this._defaultSearchParams = t;
        else {
          const e = t;
          this._defaultSearchParams = Object.keys(e)
            .map((s) => `${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`)
            .join("&");
        }
      }
      getAlias(t) {
        const { alias: e, name: s, src: i, srcs: n } = t;
        return Ot(
          e || s || i || n,
          (a) =>
            typeof a == "string"
              ? a
              : Array.isArray(a)
              ? a.map(
                  (o) =>
                    (o == null ? void 0 : o.src) ??
                    (o == null ? void 0 : o.srcs) ??
                    o
                )
              : (a != null && a.src) || (a != null && a.srcs)
              ? a.src ?? a.srcs
              : a,
          !0
        );
      }
      addManifest(t) {
        this._manifest &&
          console.warn(
            "[Resolver] Manifest already exists, this will be overwritten"
          ),
          (this._manifest = t),
          t.bundles.forEach((e) => {
            this.addBundle(e.name, e.assets);
          });
      }
      addBundle(t, e) {
        const s = [];
        Array.isArray(e)
          ? e.forEach((i) => {
              const n = i.src ?? i.srcs,
                a = i.alias ?? i.name;
              let o;
              if (typeof a == "string") {
                const h = this._createBundleAssetId(t, a);
                s.push(h), (o = [a, h]);
              } else {
                const h = a.map((l) => this._createBundleAssetId(t, l));
                s.push(...h), (o = [...a, ...h]);
              }
              this.add({ ...i, alias: o, src: n });
            })
          : Object.keys(e).forEach((i) => {
              const n = [i, this._createBundleAssetId(t, i)];
              if (typeof e[i] == "string") this.add({ alias: n, src: e[i] });
              else if (Array.isArray(e[i])) this.add({ alias: n, src: e[i] });
              else {
                const a = e[i],
                  o = a.src ?? a.srcs;
                this.add({ ...a, alias: n, src: Array.isArray(o) ? o : [o] });
              }
              s.push(...n);
            }),
          (this._bundles[t] = s);
      }
      add(t, e, s, i, n) {
        const a = [];
        typeof t == "string" || (Array.isArray(t) && typeof t[0] == "string")
          ? (V(
              "7.2.0",
              `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`
            ),
            a.push({ alias: t, src: e, data: s, format: i, loadParser: n }))
          : Array.isArray(t)
          ? a.push(...t)
          : a.push(t);
        let o;
        (o = (h) => {
          this.hasKey(h) &&
            console.warn(`[Resolver] already has key: ${h} overwriting`);
        }),
          Ot(a).forEach((h) => {
            const { src: l, srcs: u } = h;
            let { data: c, format: d, loadParser: p } = h;
            const f = Ot(l || u).map((_) =>
                typeof _ == "string" ? vu(_) : Array.isArray(_) ? _ : [_]
              ),
              m = this.getAlias(h);
            Array.isArray(m) ? m.forEach(o) : o(m);
            const g = [];
            f.forEach((_) => {
              _.forEach((v) => {
                let y = {};
                if (typeof v != "object") {
                  y.src = v;
                  for (let x = 0; x < this._parsers.length; x++) {
                    const A = this._parsers[x];
                    if (A.test(v)) {
                      y = A.parse(v);
                      break;
                    }
                  }
                } else
                  (c = v.data ?? c),
                    (d = v.format ?? d),
                    (p = v.loadParser ?? p),
                    (y = { ...y, ...v });
                if (!m)
                  throw new Error(
                    `[Resolver] alias is undefined for this asset: ${y.src}`
                  );
                (y = this.buildResolvedAsset(y, {
                  aliases: m,
                  data: c,
                  format: d,
                  loadParser: p,
                })),
                  g.push(y);
              });
            }),
              m.forEach((_) => {
                this._assetMap[_] = g;
              });
          });
      }
      resolveBundle(t) {
        const e = ei(t);
        t = Ot(t);
        const s = {};
        return (
          t.forEach((i) => {
            const n = this._bundles[i];
            if (n) {
              const a = this.resolve(n),
                o = {};
              for (const h in a) {
                const l = a[h];
                o[this._extractAssetIdFromBundle(i, h)] = l;
              }
              s[i] = o;
            }
          }),
          e ? s[t[0]] : s
        );
      }
      resolveUrl(t) {
        const e = this.resolve(t);
        if (typeof t != "string") {
          const s = {};
          for (const i in e) s[i] = e[i].src;
          return s;
        }
        return e.src;
      }
      resolve(t) {
        const e = ei(t);
        t = Ot(t);
        const s = {};
        return (
          t.forEach((i) => {
            if (!this._resolverHash[i])
              if (this._assetMap[i]) {
                let n = this._assetMap[i];
                const a = n[0],
                  o = this._getPreferredOrder(n);
                o == null ||
                  o.priority.forEach((h) => {
                    o.params[h].forEach((l) => {
                      const u = n.filter((c) => (c[h] ? c[h] === l : !1));
                      u.length && (n = u);
                    });
                  }),
                  (this._resolverHash[i] = n[0] ?? a);
              } else
                this._resolverHash[i] = this.buildResolvedAsset(
                  { alias: [i], src: i },
                  {}
                );
            s[i] = this._resolverHash[i];
          }),
          e ? s[t[0]] : s
        );
      }
      hasKey(t) {
        return !!this._assetMap[t];
      }
      hasBundle(t) {
        return !!this._bundles[t];
      }
      _getPreferredOrder(t) {
        for (let e = 0; e < t.length; e++) {
          const s = t[0],
            i = this._preferredOrder.find((n) =>
              n.params.format.includes(s.format)
            );
          if (i) return i;
        }
        return this._preferredOrder[0];
      }
      _appendDefaultSearchParams(t) {
        if (!this._defaultSearchParams) return t;
        const e = /\?/.test(t) ? "&" : "?";
        return `${t}${e}${this._defaultSearchParams}`;
      }
      buildResolvedAsset(t, e) {
        const { aliases: s, data: i, loadParser: n, format: a } = e;
        return (
          (this._basePath || this._rootPath) &&
            (t.src = lt.toAbsolute(t.src, this._basePath, this._rootPath)),
          (t.alias = s ?? t.alias ?? [t.src]),
          (t.src = this._appendDefaultSearchParams(t.src)),
          (t.data = { ...(i || {}), ...t.data }),
          (t.loadParser = n ?? t.loadParser),
          (t.format = a ?? lt.extname(t.src).slice(1)),
          (t.srcs = t.src),
          (t.name = t.alias),
          t
        );
      }
    }
    class Ju {
      constructor() {
        (this._detections = []),
          (this._initialized = !1),
          (this.resolver = new Ku()),
          (this.loader = new Tu()),
          (this.cache = Ie),
          (this._backgroundLoader = new yu(this.loader)),
          (this._backgroundLoader.active = !0),
          this.reset();
      }
      async init(t = {}) {
        var n, a;
        if (this._initialized) {
          console.warn(
            "[Assets]AssetManager already initialized, did you load before calling this Asset.init()?"
          );
          return;
        }
        if (
          ((this._initialized = !0),
          t.defaultSearchParams &&
            this.resolver.setDefaultSearchParams(t.defaultSearchParams),
          t.basePath && (this.resolver.basePath = t.basePath),
          t.bundleIdentifier &&
            this.resolver.setBundleIdentifier(t.bundleIdentifier),
          t.manifest)
        ) {
          let o = t.manifest;
          typeof o == "string" && (o = await this.load(o)),
            this.resolver.addManifest(o);
        }
        const e =
            ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1,
          s = typeof e == "number" ? [e] : e,
          i = await this._detectFormats({
            preferredFormats:
              (a = t.texturePreference) == null ? void 0 : a.format,
            skipDetections: t.skipDetections,
            detections: this._detections,
          });
        this.resolver.prefer({ params: { format: i, resolution: s } }),
          t.preferences && this.setPreferences(t.preferences);
      }
      add(t, e, s, i, n) {
        this.resolver.add(t, e, s, i, n);
      }
      async load(t, e) {
        this._initialized || (await this.init());
        const s = ei(t),
          i = Ot(t).map((o) => {
            if (typeof o != "string") {
              const h = this.resolver.getAlias(o);
              return (
                h.some((l) => !this.resolver.hasKey(l)) && this.add(o),
                Array.isArray(h) ? h[0] : h
              );
            }
            return this.resolver.hasKey(o) || this.add({ alias: o, src: o }), o;
          }),
          n = this.resolver.resolve(i),
          a = await this._mapLoadToResolve(n, e);
        return s ? a[i[0]] : a;
      }
      addBundle(t, e) {
        this.resolver.addBundle(t, e);
      }
      async loadBundle(t, e) {
        this._initialized || (await this.init());
        let s = !1;
        typeof t == "string" && ((s = !0), (t = [t]));
        const i = this.resolver.resolveBundle(t),
          n = {},
          a = Object.keys(i);
        let o = 0,
          h = 0;
        const l = () => {
            e == null || e(++o / h);
          },
          u = a.map((c) => {
            const d = i[c];
            return (
              (h += Object.keys(d).length),
              this._mapLoadToResolve(d, l).then((p) => {
                n[c] = p;
              })
            );
          });
        return await Promise.all(u), s ? n[t[0]] : n;
      }
      async backgroundLoad(t) {
        this._initialized || (await this.init()),
          typeof t == "string" && (t = [t]);
        const e = this.resolver.resolve(t);
        this._backgroundLoader.add(Object.values(e));
      }
      async backgroundLoadBundle(t) {
        this._initialized || (await this.init()),
          typeof t == "string" && (t = [t]);
        const e = this.resolver.resolveBundle(t);
        Object.values(e).forEach((s) => {
          this._backgroundLoader.add(Object.values(s));
        });
      }
      reset() {
        this.resolver.reset(),
          this.loader.reset(),
          this.cache.reset(),
          (this._initialized = !1);
      }
      get(t) {
        if (typeof t == "string") return Ie.get(t);
        const e = {};
        for (let s = 0; s < t.length; s++) e[s] = Ie.get(t[s]);
        return e;
      }
      async _mapLoadToResolve(t, e) {
        const s = Object.values(t),
          i = Object.keys(t);
        this._backgroundLoader.active = !1;
        const n = await this.loader.load(s, e);
        this._backgroundLoader.active = !0;
        const a = {};
        return (
          s.forEach((o, h) => {
            const l = n[o.src],
              u = [o.src];
            o.alias && u.push(...o.alias), (a[i[h]] = l), Ie.set(u, l);
          }),
          a
        );
      }
      async unload(t) {
        this._initialized || (await this.init());
        const e = Ot(t).map((i) => (typeof i != "string" ? i.src : i)),
          s = this.resolver.resolve(e);
        await this._unloadFromResolved(s);
      }
      async unloadBundle(t) {
        this._initialized || (await this.init()), (t = Ot(t));
        const e = this.resolver.resolveBundle(t),
          s = Object.keys(e).map((i) => this._unloadFromResolved(e[i]));
        await Promise.all(s);
      }
      async _unloadFromResolved(t) {
        const e = Object.values(t);
        e.forEach((s) => {
          Ie.remove(s.src);
        }),
          await this.loader.unload(e);
      }
      async _detectFormats(t) {
        let e = [];
        t.preferredFormats &&
          (e = Array.isArray(t.preferredFormats)
            ? t.preferredFormats
            : [t.preferredFormats]);
        for (const s of t.detections)
          t.skipDetections || (await s.test())
            ? (e = await s.add(e))
            : t.skipDetections || (e = await s.remove(e));
        return (e = e.filter((s, i) => e.indexOf(s) === i)), e;
      }
      get detections() {
        return this._detections;
      }
      get preferWorkers() {
        return si.config.preferWorkers;
      }
      set preferWorkers(t) {
        V(
          "7.2.0",
          "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."
        ),
          this.setPreferences({ preferWorkers: t });
      }
      setPreferences(t) {
        this.loader.parsers.forEach((e) => {
          e.config &&
            Object.keys(e.config)
              .filter((s) => s in t)
              .forEach((s) => {
                e.config[s] = t[s];
              });
        });
      }
    }
    const ii = new Ju();
    k.handleByList(M.LoadParser, ii.loader.parsers)
      .handleByList(M.ResolveParser, ii.resolver.parsers)
      .handleByList(M.CacheParser, ii.cache.parsers)
      .handleByList(M.DetectionParser, ii.detections);
    const Zu = {
      extension: M.CacheParser,
      test: (r) => Array.isArray(r) && r.every((t) => t instanceof L),
      getCacheableAssets: (r, t) => {
        const e = {};
        return (
          r.forEach((s) => {
            t.forEach((i, n) => {
              e[s + (n === 0 ? "" : n + 1)] = i;
            });
          }),
          e
        );
      },
    };
    k.add(Zu);
    async function Da(r) {
      if ("Image" in globalThis)
        return new Promise((t) => {
          const e = new Image();
          (e.onload = () => {
            t(!0);
          }),
            (e.onerror = () => {
              t(!1);
            }),
            (e.src = r);
        });
      if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
        try {
          const t = await (await fetch(r)).blob();
          await createImageBitmap(t);
        } catch {
          return !1;
        }
        return !0;
      }
      return !1;
    }
    const Qu = {
      extension: { type: M.DetectionParser, priority: 1 },
      test: async () =>
        Da(
          "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
        ),
      add: async (r) => [...r, "avif"],
      remove: async (r) => r.filter((t) => t !== "avif"),
    };
    k.add(Qu);
    const tc = {
      extension: { type: M.DetectionParser, priority: 0 },
      test: async () =>
        Da(
          "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
        ),
      add: async (r) => [...r, "webp"],
      remove: async (r) => r.filter((t) => t !== "webp"),
    };
    k.add(tc);
    const Ba = ["png", "jpg", "jpeg"],
      ec = {
        extension: { type: M.DetectionParser, priority: -1 },
        test: () => Promise.resolve(!0),
        add: async (r) => [...r, ...Ba],
        remove: async (r) => r.filter((t) => !Ba.includes(t)),
      };
    k.add(ec);
    const sc =
      "WorkerGlobalScope" in globalThis &&
      globalThis instanceof globalThis.WorkerGlobalScope;
    function Ir(r) {
      return sc ? !1 : document.createElement("video").canPlayType(r) !== "";
    }
    const ic = {
      extension: { type: M.DetectionParser, priority: 0 },
      test: async () => Ir("video/webm"),
      add: async (r) => [...r, "webm"],
      remove: async (r) => r.filter((t) => t !== "webm"),
    };
    k.add(ic);
    const rc = {
      extension: { type: M.DetectionParser, priority: 0 },
      test: async () => Ir("video/mp4"),
      add: async (r) => [...r, "mp4", "m4v"],
      remove: async (r) => r.filter((t) => t !== "mp4" && t !== "m4v"),
    };
    k.add(rc);
    const nc = {
      extension: { type: M.DetectionParser, priority: 0 },
      test: async () => Ir("video/ogg"),
      add: async (r) => [...r, "ogv"],
      remove: async (r) => r.filter((t) => t !== "ogv"),
    };
    k.add(nc);
    const ac = {
      extension: M.ResolveParser,
      test: si.test,
      parse: (r) => {
        var t;
        return {
          resolution: parseFloat(
            ((t = N.RETINA_PREFIX.exec(r)) == null ? void 0 : t[1]) ?? "1"
          ),
          format: lt.extname(r).slice(1),
          src: r,
        };
      },
    };
    k.add(ac);
    var vt = ((r) => (
      (r[(r.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
        "COMPRESSED_RGB_S3TC_DXT1_EXT"),
      (r[(r.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
        "COMPRESSED_RGBA_S3TC_DXT1_EXT"),
      (r[(r.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
        "COMPRESSED_RGBA_S3TC_DXT3_EXT"),
      (r[(r.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
        "COMPRESSED_RGBA_S3TC_DXT5_EXT"),
      (r[(r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
        "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"),
      (r[(r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
        "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"),
      (r[(r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
        "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"),
      (r[(r.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
        "COMPRESSED_SRGB_S3TC_DXT1_EXT"),
      (r[(r.COMPRESSED_R11_EAC = 37488)] = "COMPRESSED_R11_EAC"),
      (r[(r.COMPRESSED_SIGNED_R11_EAC = 37489)] = "COMPRESSED_SIGNED_R11_EAC"),
      (r[(r.COMPRESSED_RG11_EAC = 37490)] = "COMPRESSED_RG11_EAC"),
      (r[(r.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
        "COMPRESSED_SIGNED_RG11_EAC"),
      (r[(r.COMPRESSED_RGB8_ETC2 = 37492)] = "COMPRESSED_RGB8_ETC2"),
      (r[(r.COMPRESSED_RGBA8_ETC2_EAC = 37496)] = "COMPRESSED_RGBA8_ETC2_EAC"),
      (r[(r.COMPRESSED_SRGB8_ETC2 = 37493)] = "COMPRESSED_SRGB8_ETC2"),
      (r[(r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
        "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"),
      (r[(r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
        "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
      (r[(r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
        "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
      (r[(r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
        "COMPRESSED_RGB_PVRTC_4BPPV1_IMG"),
      (r[(r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
        "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"),
      (r[(r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
        "COMPRESSED_RGB_PVRTC_2BPPV1_IMG"),
      (r[(r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
        "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"),
      (r[(r.COMPRESSED_RGB_ETC1_WEBGL = 36196)] = "COMPRESSED_RGB_ETC1_WEBGL"),
      (r[(r.COMPRESSED_RGB_ATC_WEBGL = 35986)] = "COMPRESSED_RGB_ATC_WEBGL"),
      (r[(r.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986)] =
        "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"),
      (r[(r.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
        "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"),
      (r[(r.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] =
        "COMPRESSED_RGBA_ASTC_4x4_KHR"),
      r
    ))(vt || {});
    const ri = {
      33776: 0.5,
      33777: 0.5,
      33778: 1,
      33779: 1,
      35916: 0.5,
      35917: 0.5,
      35918: 1,
      35919: 1,
      37488: 0.5,
      37489: 0.5,
      37490: 1,
      37491: 1,
      37492: 0.5,
      37496: 1,
      37493: 0.5,
      37497: 1,
      37494: 0.5,
      37495: 0.5,
      35840: 0.5,
      35842: 0.5,
      35841: 0.25,
      35843: 0.25,
      36196: 0.5,
      35986: 0.5,
      35986: 1,
      34798: 1,
      37808: 1,
    };
    let Jt, $e;
    function La() {
      $e = {
        s3tc: Jt.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: Jt.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: Jt.getExtension("WEBGL_compressed_texture_etc"),
        etc1: Jt.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc:
          Jt.getExtension("WEBGL_compressed_texture_pvrtc") ||
          Jt.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: Jt.getExtension("WEBGL_compressed_texture_atc"),
        astc: Jt.getExtension("WEBGL_compressed_texture_astc"),
      };
    }
    const oc = {
      extension: { type: M.DetectionParser, priority: 2 },
      test: async () => {
        const r = N.ADAPTER.createCanvas().getContext("webgl");
        return r
          ? ((Jt = r), !0)
          : (console.warn("WebGL not available for compressed textures."), !1);
      },
      add: async (r) => {
        $e || La();
        const t = [];
        for (const e in $e) $e[e] && t.push(e);
        return [...t, ...r];
      },
      remove: async (r) => ($e || La(), r.filter((t) => !(t in $e))),
    };
    k.add(oc);
    class hc extends Os {
      constructor(t, e = { width: 1, height: 1, autoLoad: !0 }) {
        let s, i;
        typeof t == "string"
          ? ((s = t), (i = new Uint8Array()))
          : ((s = null), (i = t)),
          super(i, e),
          (this.origin = s),
          (this.buffer = i ? new ji(i) : null),
          (this._load = null),
          (this.loaded = !1),
          this.origin !== null && e.autoLoad !== !1 && this.load(),
          this.origin === null &&
            this.buffer &&
            ((this._load = Promise.resolve(this)),
            (this.loaded = !0),
            this.onBlobLoaded(this.buffer.rawBinaryData));
      }
      onBlobLoaded(t) {}
      load() {
        return this._load
          ? this._load
          : ((this._load = fetch(this.origin)
              .then((t) => t.blob())
              .then((t) => t.arrayBuffer())
              .then(
                (t) => (
                  (this.data = new Uint32Array(t)),
                  (this.buffer = new ji(t)),
                  (this.loaded = !0),
                  this.onBlobLoaded(t),
                  this.update(),
                  this
                )
              )),
            this._load);
      }
    }
    class Ce extends hc {
      constructor(t, e) {
        super(t, e),
          (this.format = e.format),
          (this.levels = e.levels || 1),
          (this._width = e.width),
          (this._height = e.height),
          (this._extension = Ce._formatToExtension(this.format)),
          (e.levelBuffers || this.buffer) &&
            (this._levelBuffers =
              e.levelBuffers ||
              Ce._createLevelBuffers(
                t instanceof Uint8Array ? t : this.buffer.uint8View,
                this.format,
                this.levels,
                4,
                4,
                this.width,
                this.height
              ));
      }
      upload(t, e, s) {
        const i = t.gl;
        if (!t.context.extensions[this._extension])
          throw new Error(
            `${this._extension} textures are not supported on the current machine`
          );
        if (!this._levelBuffers) return !1;
        i.pixelStorei(i.UNPACK_ALIGNMENT, 4);
        for (let n = 0, a = this.levels; n < a; n++) {
          const {
            levelID: o,
            levelWidth: h,
            levelHeight: l,
            levelBuffer: u,
          } = this._levelBuffers[n];
          i.compressedTexImage2D(i.TEXTURE_2D, o, this.format, h, l, 0, u);
        }
        return !0;
      }
      onBlobLoaded() {
        this._levelBuffers = Ce._createLevelBuffers(
          this.buffer.uint8View,
          this.format,
          this.levels,
          4,
          4,
          this.width,
          this.height
        );
      }
      static _formatToExtension(t) {
        if (t >= 33776 && t <= 33779) return "s3tc";
        if (t >= 37488 && t <= 37497) return "etc";
        if (t >= 35840 && t <= 35843) return "pvrtc";
        if (t >= 36196) return "etc1";
        if (t >= 35986 && t <= 34798) return "atc";
        throw new Error("Invalid (compressed) texture format given!");
      }
      static _createLevelBuffers(t, e, s, i, n, a, o) {
        const h = new Array(s);
        let l = t.byteOffset,
          u = a,
          c = o,
          d = (u + i - 1) & ~(i - 1),
          p = (c + n - 1) & ~(n - 1),
          f = d * p * ri[e];
        for (let m = 0; m < s; m++)
          (h[m] = {
            levelID: m,
            levelWidth: s > 1 ? u : d,
            levelHeight: s > 1 ? c : p,
            levelBuffer: new Uint8Array(t.buffer, l, f),
          }),
            (l += f),
            (u = u >> 1 || 1),
            (c = c >> 1 || 1),
            (d = (u + i - 1) & ~(i - 1)),
            (p = (c + n - 1) & ~(n - 1)),
            (f = d * p * ri[e]);
        return h;
      }
    }
    const Cr = 4,
      ni = 124,
      lc = 32,
      Na = 20,
      uc = 542327876,
      ai = {
        SIZE: 1,
        FLAGS: 2,
        HEIGHT: 3,
        WIDTH: 4,
        MIPMAP_COUNT: 7,
        PIXEL_FORMAT: 19,
      },
      cc = {
        SIZE: 0,
        FLAGS: 1,
        FOURCC: 2,
        RGB_BITCOUNT: 3,
        R_BIT_MASK: 4,
        G_BIT_MASK: 5,
        B_BIT_MASK: 6,
        A_BIT_MASK: 7,
      },
      oi = {
        DXGI_FORMAT: 0,
        RESOURCE_DIMENSION: 1,
        MISC_FLAG: 2,
        ARRAY_SIZE: 3,
        MISC_FLAGS2: 4,
      },
      dc = 1,
      pc = 2,
      fc = 4,
      mc = 64,
      gc = 512,
      _c = 131072,
      xc = 827611204,
      yc = 861165636,
      vc = 894720068,
      bc = 808540228,
      Tc = 4,
      Ec = {
        [xc]: vt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        [yc]: vt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        [vc]: vt.COMPRESSED_RGBA_S3TC_DXT5_EXT,
      },
      Ac = {
        70: vt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        71: vt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        73: vt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        74: vt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        76: vt.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        77: vt.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        72: vt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
        75: vt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
        78: vt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
      };
    function wc(r) {
      const t = new Uint32Array(r);
      if (t[0] !== uc) throw new Error("Invalid DDS file magic word");
      const e = new Uint32Array(r, 0, ni / Uint32Array.BYTES_PER_ELEMENT),
        s = e[ai.HEIGHT],
        i = e[ai.WIDTH],
        n = e[ai.MIPMAP_COUNT],
        a = new Uint32Array(
          r,
          ai.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,
          lc / Uint32Array.BYTES_PER_ELEMENT
        ),
        o = a[dc];
      if (o & fc) {
        const h = a[cc.FOURCC];
        if (h !== bc) {
          const v = Ec[h],
            y = Cr + ni,
            x = new Uint8Array(r, y);
          return [new Ce(x, { format: v, width: i, height: s, levels: n })];
        }
        const l = Cr + ni,
          u = new Uint32Array(t.buffer, l, Na / Uint32Array.BYTES_PER_ELEMENT),
          c = u[oi.DXGI_FORMAT],
          d = u[oi.RESOURCE_DIMENSION],
          p = u[oi.MISC_FLAG],
          f = u[oi.ARRAY_SIZE],
          m = Ac[c];
        if (m === void 0)
          throw new Error(
            `DDSParser cannot parse texture data with DXGI format ${c}`
          );
        if (p === Tc)
          throw new Error("DDSParser does not support cubemap textures");
        if (d === 6)
          throw new Error("DDSParser does not supported 3D texture data");
        const g = new Array(),
          _ = Cr + ni + Na;
        if (f === 1) g.push(new Uint8Array(r, _));
        else {
          const v = ri[m];
          let y = 0,
            x = i,
            A = s;
          for (let b = 0; b < n; b++) {
            const E = Math.max(1, (x + 3) & -4),
              S = Math.max(1, (A + 3) & -4),
              F = E * S * v;
            (y += F), (x = x >>> 1), (A = A >>> 1);
          }
          let w = _;
          for (let b = 0; b < f; b++) g.push(new Uint8Array(r, w, y)), (w += y);
        }
        return g.map(
          (v) => new Ce(v, { format: m, width: i, height: s, levels: n })
        );
      }
      throw o & mc
        ? new Error("DDSParser does not support uncompressed texture data.")
        : o & gc
        ? new Error(
            "DDSParser does not supported YUV uncompressed texture data."
          )
        : o & _c
        ? new Error(
            "DDSParser does not support single-channel (lumninance) texture data!"
          )
        : o & pc
        ? new Error(
            "DDSParser does not support single-channel (alpha) texture data!"
          )
        : new Error(
            "DDSParser failed to load a texture file due to an unknown reason!"
          );
    }
    const Oa = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
      Sc = 67305985,
      kt = {
        FILE_IDENTIFIER: 0,
        ENDIANNESS: 12,
        GL_TYPE: 16,
        GL_TYPE_SIZE: 20,
        GL_FORMAT: 24,
        GL_INTERNAL_FORMAT: 28,
        GL_BASE_INTERNAL_FORMAT: 32,
        PIXEL_WIDTH: 36,
        PIXEL_HEIGHT: 40,
        PIXEL_DEPTH: 44,
        NUMBER_OF_ARRAY_ELEMENTS: 48,
        NUMBER_OF_FACES: 52,
        NUMBER_OF_MIPMAP_LEVELS: 56,
        BYTES_OF_KEY_VALUE_DATA: 60,
      },
      Rr = 64,
      Fa = {
        [O.UNSIGNED_BYTE]: 1,
        [O.UNSIGNED_SHORT]: 2,
        [O.INT]: 4,
        [O.UNSIGNED_INT]: 4,
        [O.FLOAT]: 4,
        [O.HALF_FLOAT]: 8,
      },
      Ic = {
        [C.RGBA]: 4,
        [C.RGB]: 3,
        [C.RG]: 2,
        [C.RED]: 1,
        [C.LUMINANCE]: 1,
        [C.LUMINANCE_ALPHA]: 2,
        [C.ALPHA]: 1,
      },
      Cc = {
        [O.UNSIGNED_SHORT_4_4_4_4]: 2,
        [O.UNSIGNED_SHORT_5_5_5_1]: 2,
        [O.UNSIGNED_SHORT_5_6_5]: 2,
      };
    function Rc(r, t, e = !1) {
      const s = new DataView(t);
      if (!Pc(r, s)) return null;
      const i = s.getUint32(kt.ENDIANNESS, !0) === Sc,
        n = s.getUint32(kt.GL_TYPE, i),
        a = s.getUint32(kt.GL_FORMAT, i),
        o = s.getUint32(kt.GL_INTERNAL_FORMAT, i),
        h = s.getUint32(kt.PIXEL_WIDTH, i),
        l = s.getUint32(kt.PIXEL_HEIGHT, i) || 1,
        u = s.getUint32(kt.PIXEL_DEPTH, i) || 1,
        c = s.getUint32(kt.NUMBER_OF_ARRAY_ELEMENTS, i) || 1,
        d = s.getUint32(kt.NUMBER_OF_FACES, i),
        p = s.getUint32(kt.NUMBER_OF_MIPMAP_LEVELS, i),
        f = s.getUint32(kt.BYTES_OF_KEY_VALUE_DATA, i);
      if (l === 0 || u !== 1) throw new Error("Only 2D textures are supported");
      if (d !== 1)
        throw new Error("CubeTextures are not supported by KTXLoader yet!");
      if (c !== 1) throw new Error("WebGL does not support array textures");
      const m = 4,
        g = 4,
        _ = (h + 3) & -4,
        v = (l + 3) & -4,
        y = new Array(c);
      let x = h * l;
      n === 0 && (x = _ * v);
      let A;
      if (
        (n !== 0 ? (Fa[n] ? (A = Fa[n] * Ic[a]) : (A = Cc[n])) : (A = ri[o]),
        A === void 0)
      )
        throw new Error(
          "Unable to resolve the pixel format stored in the *.ktx file!"
        );
      const w = e ? Dc(s, f, i) : null;
      let b = x * A,
        E = h,
        S = l,
        F = _,
        K = v,
        D = Rr + f;
      for (let T = 0; T < p; T++) {
        const R = s.getUint32(D, i);
        let G = D + 4;
        for (let J = 0; J < c; J++) {
          let z = y[J];
          z || (z = y[J] = new Array(p)),
            (z[T] = {
              levelID: T,
              levelWidth: p > 1 || n !== 0 ? E : F,
              levelHeight: p > 1 || n !== 0 ? S : K,
              levelBuffer: new Uint8Array(t, G, b),
            }),
            (G += b);
        }
        (D += R + 4),
          (D = D % 4 !== 0 ? D + 4 - (D % 4) : D),
          (E = E >> 1 || 1),
          (S = S >> 1 || 1),
          (F = (E + m - 1) & ~(m - 1)),
          (K = (S + g - 1) & ~(g - 1)),
          (b = F * K * A);
      }
      return n !== 0
        ? {
            uncompressed: y.map((T) => {
              let R = T[0].levelBuffer,
                G = !1;
              return (
                n === O.FLOAT
                  ? (R = new Float32Array(
                      T[0].levelBuffer.buffer,
                      T[0].levelBuffer.byteOffset,
                      T[0].levelBuffer.byteLength / 4
                    ))
                  : n === O.UNSIGNED_INT
                  ? ((G = !0),
                    (R = new Uint32Array(
                      T[0].levelBuffer.buffer,
                      T[0].levelBuffer.byteOffset,
                      T[0].levelBuffer.byteLength / 4
                    )))
                  : n === O.INT &&
                    ((G = !0),
                    (R = new Int32Array(
                      T[0].levelBuffer.buffer,
                      T[0].levelBuffer.byteOffset,
                      T[0].levelBuffer.byteLength / 4
                    ))),
                {
                  resource: new Os(R, {
                    width: T[0].levelWidth,
                    height: T[0].levelHeight,
                  }),
                  type: n,
                  format: G ? Mc(a) : a,
                }
              );
            }),
            kvData: w,
          }
        : {
            compressed: y.map(
              (T) =>
                new Ce(null, {
                  format: o,
                  width: h,
                  height: l,
                  levels: p,
                  levelBuffers: T,
                })
            ),
            kvData: w,
          };
    }
    function Pc(r, t) {
      for (let e = 0; e < Oa.length; e++)
        if (t.getUint8(e) !== Oa[e])
          return console.error(`${r} is not a valid *.ktx file!`), !1;
      return !0;
    }
    function Mc(r) {
      switch (r) {
        case C.RGBA:
          return C.RGBA_INTEGER;
        case C.RGB:
          return C.RGB_INTEGER;
        case C.RG:
          return C.RG_INTEGER;
        case C.RED:
          return C.RED_INTEGER;
        default:
          return r;
      }
    }
    function Dc(r, t, e) {
      const s = new Map();
      let i = 0;
      for (; i < t; ) {
        const n = r.getUint32(Rr + i, e),
          a = Rr + i + 4,
          o = 3 - ((n + 3) % 4);
        if (n === 0 || n > t - i) {
          console.error("KTXLoader: keyAndValueByteSize out of bounds");
          break;
        }
        let h = 0;
        for (; h < n && r.getUint8(a + h) !== 0; h++);
        if (h === -1) {
          console.error(
            "KTXLoader: Failed to find null byte terminating kvData key"
          );
          break;
        }
        const l = new TextDecoder().decode(new Uint8Array(r.buffer, a, h)),
          u = new DataView(r.buffer, a + h + 1, n - h - 1);
        s.set(l, u), (i += 4 + n + o);
      }
      return s;
    }
    const Bc = {
      extension: { type: M.LoadParser, priority: Ft.High },
      name: "loadDDS",
      test(r) {
        return le(r, ".dds");
      },
      async load(r, t, e) {
        const s = await (await N.ADAPTER.fetch(r)).arrayBuffer(),
          i = wc(s).map((n) => {
            const a = new $(n, {
              mipmap: Qt.OFF,
              alphaMode: Et.NO_PREMULTIPLIED_ALPHA,
              resolution: Yt(r),
              ...t.data,
            });
            return _s(a, e, r);
          });
        return i.length === 1 ? i[0] : i;
      },
      unload(r) {
        Array.isArray(r) ? r.forEach((t) => t.destroy(!0)) : r.destroy(!0);
      },
    };
    k.add(Bc);
    const Lc = {
      extension: { type: M.LoadParser, priority: Ft.High },
      name: "loadKTX",
      test(r) {
        return le(r, ".ktx");
      },
      async load(r, t, e) {
        const s = await (await N.ADAPTER.fetch(r)).arrayBuffer(),
          { compressed: i, uncompressed: n, kvData: a } = Rc(r, s),
          o = i ?? n,
          h = {
            mipmap: Qt.OFF,
            alphaMode: Et.NO_PREMULTIPLIED_ALPHA,
            resolution: Yt(r),
            ...t.data,
          },
          l = o.map((u) => {
            o === n && Object.assign(h, { type: u.type, format: u.format });
            const c = u.resource ?? u,
              d = new $(c, h);
            return (d.ktxKeyValueData = a), _s(d, e, r);
          });
        return l.length === 1 ? l[0] : l;
      },
      unload(r) {
        Array.isArray(r) ? r.forEach((t) => t.destroy(!0)) : r.destroy(!0);
      },
    };
    k.add(Lc);
    const Nc = {
      extension: M.ResolveParser,
      test: (r) => {
        const t = lt.extname(r).slice(1);
        return ["basis", "ktx", "dds"].includes(t);
      },
      parse: (r) => {
        var e, s;
        const t = lt.extname(r).slice(1);
        if (t === "ktx") {
          const i = [
            ".s3tc.ktx",
            ".s3tc_sRGB.ktx",
            ".etc.ktx",
            ".etc1.ktx",
            ".pvrt.ktx",
            ".atc.ktx",
            ".astc.ktx",
          ];
          if (i.some((n) => r.endsWith(n)))
            return {
              resolution: parseFloat(
                ((e = N.RETINA_PREFIX.exec(r)) == null ? void 0 : e[1]) ?? "1"
              ),
              format: i.find((n) => r.endsWith(n)),
              src: r,
            };
        }
        return {
          resolution: parseFloat(
            ((s = N.RETINA_PREFIX.exec(r)) == null ? void 0 : s[1]) ?? "1"
          ),
          format: t,
          src: r,
        };
      },
    };
    k.add(Nc);
    const hi = new W(),
      Oc = 4,
      ka = class Ps {
        constructor(t) {
          (this.renderer = t), (this._rendererPremultipliedAlpha = !1);
        }
        contextChange() {
          var e;
          const t =
            (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
          this._rendererPremultipliedAlpha = !!(
            t &&
            t.alpha &&
            t.premultipliedAlpha
          );
        }
        async image(t, e, s, i) {
          const n = new Image();
          return (n.src = await this.base64(t, e, s, i)), n;
        }
        async base64(t, e, s, i) {
          const n = this.canvas(t, i);
          if (n.toBlob !== void 0)
            return new Promise((a, o) => {
              n.toBlob(
                (h) => {
                  if (!h) {
                    o(new Error("ICanvas.toBlob failed!"));
                    return;
                  }
                  const l = new FileReader();
                  (l.onload = () => a(l.result)),
                    (l.onerror = o),
                    l.readAsDataURL(h);
                },
                e,
                s
              );
            });
          if (n.toDataURL !== void 0) return n.toDataURL(e, s);
          if (n.convertToBlob !== void 0) {
            const a = await n.convertToBlob({ type: e, quality: s });
            return new Promise((o, h) => {
              const l = new FileReader();
              (l.onload = () => o(l.result)),
                (l.onerror = h),
                l.readAsDataURL(a);
            });
          }
          throw new Error(
            "Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented"
          );
        }
        canvas(t, e) {
          const {
            pixels: s,
            width: i,
            height: n,
            flipY: a,
            premultipliedAlpha: o,
          } = this._rawPixels(t, e);
          a && Ps._flipY(s, i, n), o && Ps._unpremultiplyAlpha(s);
          const h = new fh(i, n, 1),
            l = new ImageData(new Uint8ClampedArray(s.buffer), i, n);
          return h.context.putImageData(l, 0, 0), h.canvas;
        }
        pixels(t, e) {
          const {
            pixels: s,
            width: i,
            height: n,
            flipY: a,
            premultipliedAlpha: o,
          } = this._rawPixels(t, e);
          return a && Ps._flipY(s, i, n), o && Ps._unpremultiplyAlpha(s), s;
        }
        _rawPixels(t, e) {
          const s = this.renderer;
          if (!s) throw new Error("The Extract has already been destroyed");
          let i,
            n = !1,
            a = !1,
            o,
            h = !1;
          t &&
            (t instanceof Ee
              ? (o = t)
              : ((o = s.generateTexture(t, {
                  region: e,
                  resolution: s.resolution,
                  multisample: s.multisample,
                })),
                (h = !0),
                e && ((hi.width = e.width), (hi.height = e.height), (e = hi))));
          const l = s.gl;
          if (o) {
            if (
              ((i = o.baseTexture.resolution),
              (e = e ?? o.frame),
              (n = !1),
              (a =
                o.baseTexture.alphaMode > 0 && o.baseTexture.format === C.RGBA),
              !h)
            ) {
              s.renderTexture.bind(o);
              const p = o.framebuffer.glFramebuffers[s.CONTEXT_UID];
              p.blitFramebuffer && s.framebuffer.bind(p.blitFramebuffer);
            }
          } else
            (i = s.resolution),
              e ||
                ((e = hi), (e.width = s.width / i), (e.height = s.height / i)),
              (n = !0),
              (a = this._rendererPremultipliedAlpha),
              s.renderTexture.bind();
          const u = Math.max(Math.round(e.width * i), 1),
            c = Math.max(Math.round(e.height * i), 1),
            d = new Uint8Array(Oc * u * c);
          return (
            l.readPixels(
              Math.round(e.x * i),
              Math.round(e.y * i),
              u,
              c,
              l.RGBA,
              l.UNSIGNED_BYTE,
              d
            ),
            h && (o == null || o.destroy(!0)),
            { pixels: d, width: u, height: c, flipY: n, premultipliedAlpha: a }
          );
        }
        destroy() {
          this.renderer = null;
        }
        static _flipY(t, e, s) {
          const i = e << 2,
            n = s >> 1,
            a = new Uint8Array(i);
          for (let o = 0; o < n; o++) {
            const h = o * i,
              l = (s - o - 1) * i;
            a.set(t.subarray(h, h + i)), t.copyWithin(h, l, l + i), t.set(a, l);
          }
        }
        static _unpremultiplyAlpha(t) {
          t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
          const e = t.length;
          for (let s = 0; s < e; s += 4) {
            const i = t[s + 3];
            if (i !== 0) {
              const n = 255.001 / i;
              (t[s] = t[s] * n + 0.5),
                (t[s + 1] = t[s + 1] * n + 0.5),
                (t[s + 2] = t[s + 2] * n + 0.5);
            }
          }
        }
      };
    ka.extension = { name: "extract", type: M.RendererSystem };
    let Fc = ka;
    k.add(Fc);
    const xs = {
      build(r) {
        const t = r.points;
        let e, s, i, n, a, o;
        if (r.type === Z.CIRC) {
          const f = r.shape;
          (e = f.x), (s = f.y), (a = o = f.radius), (i = n = 0);
        } else if (r.type === Z.ELIP) {
          const f = r.shape;
          (e = f.x), (s = f.y), (a = f.width), (o = f.height), (i = n = 0);
        } else {
          const f = r.shape,
            m = f.width / 2,
            g = f.height / 2;
          (e = f.x + m),
            (s = f.y + g),
            (a = o = Math.max(0, Math.min(f.radius, Math.min(m, g)))),
            (i = m - a),
            (n = g - o);
        }
        if (!(a >= 0 && o >= 0 && i >= 0 && n >= 0)) {
          t.length = 0;
          return;
        }
        const h = Math.ceil(2.3 * Math.sqrt(a + o)),
          l = h * 8 + (i ? 4 : 0) + (n ? 4 : 0);
        if (((t.length = l), l === 0)) return;
        if (h === 0) {
          (t.length = 8),
            (t[0] = t[6] = e + i),
            (t[1] = t[3] = s + n),
            (t[2] = t[4] = e - i),
            (t[5] = t[7] = s - n);
          return;
        }
        let u = 0,
          c = h * 4 + (i ? 2 : 0) + 2,
          d = c,
          p = l;
        {
          const f = i + a,
            m = n,
            g = e + f,
            _ = e - f,
            v = s + m;
          if (((t[u++] = g), (t[u++] = v), (t[--c] = v), (t[--c] = _), n)) {
            const y = s - m;
            (t[d++] = _), (t[d++] = y), (t[--p] = y), (t[--p] = g);
          }
        }
        for (let f = 1; f < h; f++) {
          const m = (Math.PI / 2) * (f / h),
            g = i + Math.cos(m) * a,
            _ = n + Math.sin(m) * o,
            v = e + g,
            y = e - g,
            x = s + _,
            A = s - _;
          (t[u++] = v),
            (t[u++] = x),
            (t[--c] = x),
            (t[--c] = y),
            (t[d++] = y),
            (t[d++] = A),
            (t[--p] = A),
            (t[--p] = v);
        }
        {
          const f = i,
            m = n + o,
            g = e + f,
            _ = e - f,
            v = s + m,
            y = s - m;
          (t[u++] = g),
            (t[u++] = v),
            (t[--p] = y),
            (t[--p] = g),
            i && ((t[u++] = _), (t[u++] = v), (t[--p] = y), (t[--p] = _));
        }
      },
      triangulate(r, t) {
        const e = r.points,
          s = t.points,
          i = t.indices;
        if (e.length === 0) return;
        let n = s.length / 2;
        const a = n;
        let o, h;
        if (r.type !== Z.RREC) {
          const u = r.shape;
          (o = u.x), (h = u.y);
        } else {
          const u = r.shape;
          (o = u.x + u.width / 2), (h = u.y + u.height / 2);
        }
        const l = r.matrix;
        s.push(
          r.matrix ? l.a * o + l.c * h + l.tx : o,
          r.matrix ? l.b * o + l.d * h + l.ty : h
        ),
          n++,
          s.push(e[0], e[1]);
        for (let u = 2; u < e.length; u += 2)
          s.push(e[u], e[u + 1]), i.push(n++, a, n);
        i.push(a + 1, a, n);
      },
    };
    function Ua(r, t = !1) {
      const e = r.length;
      if (e < 6) return;
      let s = 0;
      for (let i = 0, n = r[e - 2], a = r[e - 1]; i < e; i += 2) {
        const o = r[i],
          h = r[i + 1];
        (s += (o - n) * (h + a)), (n = o), (a = h);
      }
      if ((!t && s > 0) || (t && s <= 0)) {
        const i = e / 2;
        for (let n = i + (i % 2); n < e; n += 2) {
          const a = e - n - 2,
            o = e - n - 1,
            h = n,
            l = n + 1;
          ([r[a], r[h]] = [r[h], r[a]]), ([r[o], r[l]] = [r[l], r[o]]);
        }
      }
    }
    const Pr = {
        build(r) {
          r.points = r.shape.points.slice();
        },
        triangulate(r, t) {
          let e = r.points;
          const s = r.holes,
            i = t.points,
            n = t.indices;
          if (e.length >= 6) {
            Ua(e, !1);
            const a = [];
            for (let l = 0; l < s.length; l++) {
              const u = s[l];
              Ua(u.points, !0), a.push(e.length / 2), (e = e.concat(u.points));
            }
            const o = $o(e, a, 2);
            if (!o) return;
            const h = i.length / 2;
            for (let l = 0; l < o.length; l += 3)
              n.push(o[l] + h), n.push(o[l + 1] + h), n.push(o[l + 2] + h);
            for (let l = 0; l < e.length; l++) i.push(e[l]);
          }
        },
      },
      Ga = {
        build(r) {
          const t = r.shape,
            e = t.x,
            s = t.y,
            i = t.width,
            n = t.height,
            a = r.points;
          (a.length = 0),
            i >= 0 && n >= 0 && a.push(e, s, e + i, s, e + i, s + n, e, s + n);
        },
        triangulate(r, t) {
          const e = r.points,
            s = t.points;
          if (e.length === 0) return;
          const i = s.length / 2;
          s.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]),
            t.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3);
        },
      },
      Ha = {
        build(r) {
          xs.build(r);
        },
        triangulate(r, t) {
          xs.triangulate(r, t);
        },
      };
    var pt = ((r) => (
        (r.MITER = "miter"), (r.BEVEL = "bevel"), (r.ROUND = "round"), r
      ))(pt || {}),
      wt = ((r) => (
        (r.BUTT = "butt"), (r.ROUND = "round"), (r.SQUARE = "square"), r
      ))(wt || {});
    const Re = {
      adaptive: !0,
      maxLength: 10,
      minSegments: 8,
      maxSegments: 2048,
      epsilon: 1e-4,
      _segmentsCount(r, t = 20) {
        if (!this.adaptive || !r || isNaN(r)) return t;
        let e = Math.ceil(r / this.maxLength);
        return (
          e < this.minSegments
            ? (e = this.minSegments)
            : e > this.maxSegments && (e = this.maxSegments),
          e
        );
      },
    };
    let Mr = class {
        static curveTo(r, t, e, s, i, n) {
          const a = n[n.length - 2],
            o = n[n.length - 1] - t,
            h = a - r,
            l = s - t,
            u = e - r,
            c = Math.abs(o * u - h * l);
          if (c < 1e-8 || i === 0)
            return (
              (n[n.length - 2] !== r || n[n.length - 1] !== t) && n.push(r, t),
              null
            );
          const d = o * o + h * h,
            p = l * l + u * u,
            f = o * l + h * u,
            m = (i * Math.sqrt(d)) / c,
            g = (i * Math.sqrt(p)) / c,
            _ = (m * f) / d,
            v = (g * f) / p,
            y = m * u + g * h,
            x = m * l + g * o,
            A = h * (g + _),
            w = o * (g + _),
            b = u * (m + v),
            E = l * (m + v),
            S = Math.atan2(w - x, A - y),
            F = Math.atan2(E - x, b - y);
          return {
            cx: y + r,
            cy: x + t,
            radius: i,
            startAngle: S,
            endAngle: F,
            anticlockwise: h * l > u * o,
          };
        }
        static arc(r, t, e, s, i, n, a, o, h) {
          const l = a - n,
            u = Re._segmentsCount(
              Math.abs(l) * i,
              Math.ceil(Math.abs(l) / ke) * 40
            ),
            c = l / (u * 2),
            d = c * 2,
            p = Math.cos(c),
            f = Math.sin(c),
            m = u - 1,
            g = (m % 1) / m;
          for (let _ = 0; _ <= m; ++_) {
            const v = _ + g * _,
              y = c + n + d * v,
              x = Math.cos(y),
              A = -Math.sin(y);
            h.push((p * x + f * A) * i + e, (p * -A + f * x) * i + s);
          }
        }
      },
      za = class {
        constructor() {
          this.reset();
        }
        begin(r, t, e) {
          this.reset(),
            (this.style = r),
            (this.start = t),
            (this.attribStart = e);
        }
        end(r, t) {
          (this.attribSize = t - this.attribStart),
            (this.size = r - this.start);
        }
        reset() {
          (this.style = null),
            (this.size = 0),
            (this.start = 0),
            (this.attribStart = 0),
            (this.attribSize = 0);
        }
      },
      Xa = class Jo {
        static curveLength(t, e, s, i, n, a, o, h) {
          let l = 0,
            u = 0,
            c = 0,
            d = 0,
            p = 0,
            f = 0,
            m = 0,
            g = 0,
            _ = 0,
            v = 0,
            y = 0,
            x = t,
            A = e;
          for (let w = 1; w <= 10; ++w)
            (u = w / 10),
              (c = u * u),
              (d = c * u),
              (p = 1 - u),
              (f = p * p),
              (m = f * p),
              (g = m * t + 3 * f * u * s + 3 * p * c * n + d * o),
              (_ = m * e + 3 * f * u * i + 3 * p * c * a + d * h),
              (v = x - g),
              (y = A - _),
              (x = g),
              (A = _),
              (l += Math.sqrt(v * v + y * y));
          return l;
        }
        static curveTo(t, e, s, i, n, a, o) {
          const h = o[o.length - 2],
            l = o[o.length - 1];
          o.length -= 2;
          const u = Re._segmentsCount(Jo.curveLength(h, l, t, e, s, i, n, a));
          let c = 0,
            d = 0,
            p = 0,
            f = 0,
            m = 0;
          o.push(h, l);
          for (let g = 1, _ = 0; g <= u; ++g)
            (_ = g / u),
              (c = 1 - _),
              (d = c * c),
              (p = d * c),
              (f = _ * _),
              (m = f * _),
              o.push(
                p * h + 3 * d * _ * t + 3 * c * f * s + m * n,
                p * l + 3 * d * _ * e + 3 * c * f * i + m * a
              );
        }
      };
    function Va(r, t, e, s, i, n, a, o) {
      const h = r - e * i,
        l = t - s * i,
        u = r + e * n,
        c = t + s * n;
      let d, p;
      a ? ((d = s), (p = -e)) : ((d = -s), (p = e));
      const f = h + d,
        m = l + p,
        g = u + d,
        _ = c + p;
      return o.push(f, m, g, _), 2;
    }
    function Pe(r, t, e, s, i, n, a, o) {
      const h = e - r,
        l = s - t;
      let u = Math.atan2(h, l),
        c = Math.atan2(i - r, n - t);
      o && u < c ? (u += Math.PI * 2) : !o && u > c && (c += Math.PI * 2);
      let d = u;
      const p = c - u,
        f = Math.abs(p),
        m = Math.sqrt(h * h + l * l),
        g = (((15 * f * Math.sqrt(m)) / Math.PI) >> 0) + 1,
        _ = p / g;
      if (((d += _), o)) {
        a.push(r, t, e, s);
        for (let v = 1, y = d; v < g; v++, y += _)
          a.push(r, t, r + Math.sin(y) * m, t + Math.cos(y) * m);
        a.push(r, t, i, n);
      } else {
        a.push(e, s, r, t);
        for (let v = 1, y = d; v < g; v++, y += _)
          a.push(r + Math.sin(y) * m, t + Math.cos(y) * m, r, t);
        a.push(i, n, r, t);
      }
      return g * 2;
    }
    function kc(r, t) {
      const e = r.shape;
      let s = r.points || e.points.slice();
      const i = t.closePointEps;
      if (s.length === 0) return;
      const n = r.lineStyle,
        a = new q(s[0], s[1]),
        o = new q(s[s.length - 2], s[s.length - 1]),
        h = e.type !== Z.POLY || e.closeStroke,
        l = Math.abs(a.x - o.x) < i && Math.abs(a.y - o.y) < i;
      if (h) {
        (s = s.slice()),
          l && (s.pop(), s.pop(), o.set(s[s.length - 2], s[s.length - 1]));
        const z = (a.x + o.x) * 0.5,
          I = (o.y + a.y) * 0.5;
        s.unshift(z, I), s.push(z, I);
      }
      const u = t.points,
        c = s.length / 2;
      let d = s.length;
      const p = u.length / 2,
        f = n.width / 2,
        m = f * f,
        g = n.miterLimit * n.miterLimit;
      let _ = s[0],
        v = s[1],
        y = s[2],
        x = s[3],
        A = 0,
        w = 0,
        b = -(v - x),
        E = _ - y,
        S = 0,
        F = 0,
        K = Math.sqrt(b * b + E * E);
      (b /= K), (E /= K), (b *= f), (E *= f);
      const D = n.alignment,
        T = (1 - D) * 2,
        R = D * 2;
      h ||
        (n.cap === wt.ROUND
          ? (d +=
              Pe(
                _ - b * (T - R) * 0.5,
                v - E * (T - R) * 0.5,
                _ - b * T,
                v - E * T,
                _ + b * R,
                v + E * R,
                u,
                !0
              ) + 2)
          : n.cap === wt.SQUARE && (d += Va(_, v, b, E, T, R, !0, u))),
        u.push(_ - b * T, v - E * T, _ + b * R, v + E * R);
      for (let z = 1; z < c - 1; ++z) {
        (_ = s[(z - 1) * 2]),
          (v = s[(z - 1) * 2 + 1]),
          (y = s[z * 2]),
          (x = s[z * 2 + 1]),
          (A = s[(z + 1) * 2]),
          (w = s[(z + 1) * 2 + 1]),
          (b = -(v - x)),
          (E = _ - y),
          (K = Math.sqrt(b * b + E * E)),
          (b /= K),
          (E /= K),
          (b *= f),
          (E *= f),
          (S = -(x - w)),
          (F = y - A),
          (K = Math.sqrt(S * S + F * F)),
          (S /= K),
          (F /= K),
          (S *= f),
          (F *= f);
        const I = y - _,
          X = v - x,
          Y = y - A,
          H = w - x,
          _t = I * Y + X * H,
          Je = X * Y - H * I,
          bt = Je < 0;
        if (Math.abs(Je) < 0.001 * Math.abs(_t)) {
          u.push(y - b * T, x - E * T, y + b * R, x + E * R),
            _t >= 0 &&
              (n.join === pt.ROUND
                ? (d +=
                    Pe(
                      y,
                      x,
                      y - b * T,
                      x - E * T,
                      y - S * T,
                      x - F * T,
                      u,
                      !1
                    ) + 4)
                : (d += 2),
              u.push(y - S * R, x - F * R, y + S * T, x + F * T));
          continue;
        }
        const Ze = (-b + _) * (-E + x) - (-b + y) * (-E + v),
          Bo = (-S + A) * (-F + x) - (-S + y) * (-F + w),
          Si = (I * Bo - Y * Ze) / Je,
          Ii = (H * Ze - X * Bo) / Je,
          Lo = (Si - y) * (Si - y) + (Ii - x) * (Ii - x),
          Me = y + (Si - y) * T,
          De = x + (Ii - x) * T,
          Be = y - (Si - y) * R,
          Le = x - (Ii - x) * R,
          Jd = Math.min(I * I + X * X, Y * Y + H * H),
          No = bt ? T : R,
          Zd = Jd + No * No * m,
          Qd = Lo <= Zd;
        let Ci = n.join;
        if ((Ci === pt.MITER && Lo / m > g && (Ci = pt.BEVEL), Qd))
          switch (Ci) {
            case pt.MITER: {
              u.push(Me, De, Be, Le);
              break;
            }
            case pt.BEVEL: {
              bt
                ? u.push(
                    Me,
                    De,
                    y + b * R,
                    x + E * R,
                    Me,
                    De,
                    y + S * R,
                    x + F * R
                  )
                : u.push(
                    y - b * T,
                    x - E * T,
                    Be,
                    Le,
                    y - S * T,
                    x - F * T,
                    Be,
                    Le
                  ),
                (d += 2);
              break;
            }
            case pt.ROUND: {
              bt
                ? (u.push(Me, De, y + b * R, x + E * R),
                  (d +=
                    Pe(
                      y,
                      x,
                      y + b * R,
                      x + E * R,
                      y + S * R,
                      x + F * R,
                      u,
                      !0
                    ) + 4),
                  u.push(Me, De, y + S * R, x + F * R))
                : (u.push(y - b * T, x - E * T, Be, Le),
                  (d +=
                    Pe(
                      y,
                      x,
                      y - b * T,
                      x - E * T,
                      y - S * T,
                      x - F * T,
                      u,
                      !1
                    ) + 4),
                  u.push(y - S * T, x - F * T, Be, Le));
              break;
            }
          }
        else {
          switch ((u.push(y - b * T, x - E * T, y + b * R, x + E * R), Ci)) {
            case pt.MITER: {
              bt ? u.push(Be, Le, Be, Le) : u.push(Me, De, Me, De), (d += 2);
              break;
            }
            case pt.ROUND: {
              bt
                ? (d +=
                    Pe(
                      y,
                      x,
                      y + b * R,
                      x + E * R,
                      y + S * R,
                      x + F * R,
                      u,
                      !0
                    ) + 2)
                : (d +=
                    Pe(
                      y,
                      x,
                      y - b * T,
                      x - E * T,
                      y - S * T,
                      x - F * T,
                      u,
                      !1
                    ) + 2);
              break;
            }
          }
          u.push(y - S * T, x - F * T, y + S * R, x + F * R), (d += 2);
        }
      }
      (_ = s[(c - 2) * 2]),
        (v = s[(c - 2) * 2 + 1]),
        (y = s[(c - 1) * 2]),
        (x = s[(c - 1) * 2 + 1]),
        (b = -(v - x)),
        (E = _ - y),
        (K = Math.sqrt(b * b + E * E)),
        (b /= K),
        (E /= K),
        (b *= f),
        (E *= f),
        u.push(y - b * T, x - E * T, y + b * R, x + E * R),
        h ||
          (n.cap === wt.ROUND
            ? (d +=
                Pe(
                  y - b * (T - R) * 0.5,
                  x - E * (T - R) * 0.5,
                  y - b * T,
                  x - E * T,
                  y + b * R,
                  x + E * R,
                  u,
                  !1
                ) + 2)
            : n.cap === wt.SQUARE && (d += Va(y, x, b, E, T, R, !1, u)));
      const G = t.indices,
        J = Re.epsilon * Re.epsilon;
      for (let z = p; z < d + p - 2; ++z)
        (_ = u[z * 2]),
          (v = u[z * 2 + 1]),
          (y = u[(z + 1) * 2]),
          (x = u[(z + 1) * 2 + 1]),
          (A = u[(z + 2) * 2]),
          (w = u[(z + 2) * 2 + 1]),
          !(Math.abs(_ * (x - w) + y * (w - v) + A * (v - x)) < J) &&
            G.push(z, z + 1, z + 2);
    }
    function Uc(r, t) {
      let e = 0;
      const s = r.shape,
        i = r.points || s.points,
        n = s.type !== Z.POLY || s.closeStroke;
      if (i.length === 0) return;
      const a = t.points,
        o = t.indices,
        h = i.length / 2,
        l = a.length / 2;
      let u = l;
      for (a.push(i[0], i[1]), e = 1; e < h; e++)
        a.push(i[e * 2], i[e * 2 + 1]), o.push(u, u + 1), u++;
      n && o.push(u, l);
    }
    function Dr(r, t) {
      r.lineStyle.native ? Uc(r, t) : kc(r, t);
    }
    let $a = class Zo {
      static curveLength(t, e, s, i, n, a) {
        const o = t - 2 * s + n,
          h = e - 2 * i + a,
          l = 2 * s - 2 * t,
          u = 2 * i - 2 * e,
          c = 4 * (o * o + h * h),
          d = 4 * (o * l + h * u),
          p = l * l + u * u,
          f = 2 * Math.sqrt(c + d + p),
          m = Math.sqrt(c),
          g = 2 * c * m,
          _ = 2 * Math.sqrt(p),
          v = d / m;
        return (
          (g * f +
            m * d * (f - _) +
            (4 * p * c - d * d) * Math.log((2 * m + v + f) / (v + _))) /
          (4 * g)
        );
      }
      static curveTo(t, e, s, i, n) {
        const a = n[n.length - 2],
          o = n[n.length - 1],
          h = Re._segmentsCount(Zo.curveLength(a, o, t, e, s, i));
        let l = 0,
          u = 0;
        for (let c = 1; c <= h; ++c) {
          const d = c / h;
          (l = a + (t - a) * d),
            (u = o + (e - o) * d),
            n.push(
              l + (t + (s - t) * d - l) * d,
              u + (e + (i - e) * d - u) * d
            );
        }
      }
    };
    const li = {
        [Z.POLY]: Pr,
        [Z.CIRC]: xs,
        [Z.ELIP]: xs,
        [Z.RECT]: Ga,
        [Z.RREC]: Ha,
      },
      Br = [],
      ys = [];
    class ui {
      constructor(t, e = null, s = null, i = null) {
        (this.points = []),
          (this.holes = []),
          (this.shape = t),
          (this.lineStyle = s),
          (this.fillStyle = e),
          (this.matrix = i),
          (this.type = t.type);
      }
      clone() {
        return new ui(this.shape, this.fillStyle, this.lineStyle, this.matrix);
      }
      destroy() {
        (this.shape = null),
          (this.holes.length = 0),
          (this.holes = null),
          (this.points.length = 0),
          (this.points = null),
          (this.lineStyle = null),
          (this.fillStyle = null);
      }
    }
    const We = new q(),
      Wa = class Qo extends An {
        constructor() {
          super(),
            (this.closePointEps = 1e-4),
            (this.boundsPadding = 0),
            (this.uvsFloat32 = null),
            (this.indicesUint16 = null),
            (this.batchable = !1),
            (this.points = []),
            (this.colors = []),
            (this.uvs = []),
            (this.indices = []),
            (this.textureIds = []),
            (this.graphicsData = []),
            (this.drawCalls = []),
            (this.batchDirty = -1),
            (this.batches = []),
            (this.dirty = 0),
            (this.cacheDirty = -1),
            (this.clearDirty = 0),
            (this.shapeIndex = 0),
            (this._bounds = new ze()),
            (this.boundsDirty = -1);
        }
        get bounds() {
          return (
            this.updateBatches(),
            this.boundsDirty !== this.dirty &&
              ((this.boundsDirty = this.dirty), this.calculateBounds()),
            this._bounds
          );
        }
        invalidate() {
          (this.boundsDirty = -1),
            this.dirty++,
            this.batchDirty++,
            (this.shapeIndex = 0),
            (this.points.length = 0),
            (this.colors.length = 0),
            (this.uvs.length = 0),
            (this.indices.length = 0),
            (this.textureIds.length = 0);
          for (let t = 0; t < this.drawCalls.length; t++)
            this.drawCalls[t].texArray.clear(), ys.push(this.drawCalls[t]);
          this.drawCalls.length = 0;
          for (let t = 0; t < this.batches.length; t++) {
            const e = this.batches[t];
            e.reset(), Br.push(e);
          }
          this.batches.length = 0;
        }
        clear() {
          return (
            this.graphicsData.length > 0 &&
              (this.invalidate(),
              this.clearDirty++,
              (this.graphicsData.length = 0)),
            this
          );
        }
        drawShape(t, e = null, s = null, i = null) {
          const n = new ui(t, e, s, i);
          return this.graphicsData.push(n), this.dirty++, this;
        }
        drawHole(t, e = null) {
          if (!this.graphicsData.length) return null;
          const s = new ui(t, null, null, e),
            i = this.graphicsData[this.graphicsData.length - 1];
          return (
            (s.lineStyle = i.lineStyle), i.holes.push(s), this.dirty++, this
          );
        }
        destroy() {
          super.destroy();
          for (let t = 0; t < this.graphicsData.length; ++t)
            this.graphicsData[t].destroy();
          (this.points.length = 0),
            (this.points = null),
            (this.colors.length = 0),
            (this.colors = null),
            (this.uvs.length = 0),
            (this.uvs = null),
            (this.indices.length = 0),
            (this.indices = null),
            this.indexBuffer.destroy(),
            (this.indexBuffer = null),
            (this.graphicsData.length = 0),
            (this.graphicsData = null),
            (this.drawCalls.length = 0),
            (this.drawCalls = null),
            (this.batches.length = 0),
            (this.batches = null),
            (this._bounds = null);
        }
        containsPoint(t) {
          const e = this.graphicsData;
          for (let s = 0; s < e.length; ++s) {
            const i = e[s];
            if (
              i.fillStyle.visible &&
              i.shape &&
              (i.matrix ? i.matrix.applyInverse(t, We) : We.copyFrom(t),
              i.shape.contains(We.x, We.y))
            ) {
              let n = !1;
              if (i.holes) {
                for (let a = 0; a < i.holes.length; a++)
                  if (i.holes[a].shape.contains(We.x, We.y)) {
                    n = !0;
                    break;
                  }
              }
              if (!n) return !0;
            }
          }
          return !1;
        }
        updateBatches() {
          if (!this.graphicsData.length) {
            this.batchable = !0;
            return;
          }
          if (!this.validateBatching()) return;
          this.cacheDirty = this.dirty;
          const t = this.uvs,
            e = this.graphicsData;
          let s = null,
            i = null;
          this.batches.length > 0 &&
            ((s = this.batches[this.batches.length - 1]), (i = s.style));
          for (let h = this.shapeIndex; h < e.length; h++) {
            this.shapeIndex++;
            const l = e[h],
              u = l.fillStyle,
              c = l.lineStyle;
            li[l.type].build(l),
              l.matrix && this.transformPoints(l.points, l.matrix),
              (u.visible || c.visible) && this.processHoles(l.holes);
            for (let d = 0; d < 2; d++) {
              const p = d === 0 ? u : c;
              if (!p.visible) continue;
              const f = p.texture.baseTexture,
                m = this.indices.length,
                g = this.points.length / 2;
              (f.wrapMode = ge.REPEAT),
                d === 0 ? this.processFill(l) : this.processLine(l);
              const _ = this.points.length / 2 - g;
              _ !== 0 &&
                (s && !this._compareStyles(i, p) && (s.end(m, g), (s = null)),
                s ||
                  ((s = Br.pop() || new za()),
                  s.begin(p, m, g),
                  this.batches.push(s),
                  (i = p)),
                this.addUvs(this.points, t, p.texture, g, _, p.matrix));
            }
          }
          const n = this.indices.length,
            a = this.points.length / 2;
          if ((s && s.end(n, a), this.batches.length === 0)) {
            this.batchable = !0;
            return;
          }
          const o = a > 65535;
          this.indicesUint16 &&
          this.indices.length === this.indicesUint16.length &&
          o === this.indicesUint16.BYTES_PER_ELEMENT > 2
            ? this.indicesUint16.set(this.indices)
            : (this.indicesUint16 = o
                ? new Uint32Array(this.indices)
                : new Uint16Array(this.indices)),
            (this.batchable = this.isBatchable()),
            this.batchable ? this.packBatches() : this.buildDrawCalls();
        }
        _compareStyles(t, e) {
          return !(
            !t ||
            !e ||
            t.texture.baseTexture !== e.texture.baseTexture ||
            t.color + t.alpha !== e.color + e.alpha ||
            !!t.native != !!e.native
          );
        }
        validateBatching() {
          if (this.dirty === this.cacheDirty || !this.graphicsData.length)
            return !1;
          for (let t = 0, e = this.graphicsData.length; t < e; t++) {
            const s = this.graphicsData[t],
              i = s.fillStyle,
              n = s.lineStyle;
            if (
              (i && !i.texture.baseTexture.valid) ||
              (n && !n.texture.baseTexture.valid)
            )
              return !1;
          }
          return !0;
        }
        packBatches() {
          this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
          const t = this.batches;
          for (let e = 0, s = t.length; e < s; e++) {
            const i = t[e];
            for (let n = 0; n < i.size; n++) {
              const a = i.start + n;
              this.indicesUint16[a] = this.indicesUint16[a] - i.attribStart;
            }
          }
        }
        isBatchable() {
          if (this.points.length > 65535 * 2) return !1;
          const t = this.batches;
          for (let e = 0; e < t.length; e++) if (t[e].style.native) return !1;
          return this.points.length < Qo.BATCHABLE_SIZE * 2;
        }
        buildDrawCalls() {
          let t = ++$._globalBatch;
          for (let c = 0; c < this.drawCalls.length; c++)
            this.drawCalls[c].texArray.clear(), ys.push(this.drawCalls[c]);
          this.drawCalls.length = 0;
          const e = this.colors,
            s = this.textureIds;
          let i = ys.pop();
          i || ((i = new sr()), (i.texArray = new Xs())),
            (i.texArray.count = 0),
            (i.start = 0),
            (i.size = 0),
            (i.type = Wt.TRIANGLES);
          let n = 0,
            a = null,
            o = 0,
            h = !1,
            l = Wt.TRIANGLES,
            u = 0;
          this.drawCalls.push(i);
          for (let c = 0; c < this.batches.length; c++) {
            const d = this.batches[c],
              p = 8,
              f = d.style,
              m = f.texture.baseTexture;
            h !== !!f.native &&
              ((h = !!f.native),
              (l = h ? Wt.LINES : Wt.TRIANGLES),
              (a = null),
              (n = p),
              t++),
              a !== m &&
                ((a = m),
                m._batchEnabled !== t &&
                  (n === p &&
                    (t++,
                    (n = 0),
                    i.size > 0 &&
                      ((i = ys.pop()),
                      i || ((i = new sr()), (i.texArray = new Xs())),
                      this.drawCalls.push(i)),
                    (i.start = u),
                    (i.size = 0),
                    (i.texArray.count = 0),
                    (i.type = l)),
                  (m.touched = 1),
                  (m._batchEnabled = t),
                  (m._batchLocation = n),
                  (m.wrapMode = ge.REPEAT),
                  (i.texArray.elements[i.texArray.count++] = m),
                  n++)),
              (i.size += d.size),
              (u += d.size),
              (o = m._batchLocation),
              this.addColors(e, f.color, f.alpha, d.attribSize, d.attribStart),
              this.addTextureIds(s, o, d.attribSize, d.attribStart);
          }
          ($._globalBatch = t), this.packAttributes();
        }
        packAttributes() {
          const t = this.points,
            e = this.uvs,
            s = this.colors,
            i = this.textureIds,
            n = new ArrayBuffer(t.length * 3 * 4),
            a = new Float32Array(n),
            o = new Uint32Array(n);
          let h = 0;
          for (let l = 0; l < t.length / 2; l++)
            (a[h++] = t[l * 2]),
              (a[h++] = t[l * 2 + 1]),
              (a[h++] = e[l * 2]),
              (a[h++] = e[l * 2 + 1]),
              (o[h++] = s[l]),
              (a[h++] = i[l]);
          this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
        }
        processFill(t) {
          t.holes.length
            ? Pr.triangulate(t, this)
            : li[t.type].triangulate(t, this);
        }
        processLine(t) {
          Dr(t, this);
          for (let e = 0; e < t.holes.length; e++) Dr(t.holes[e], this);
        }
        processHoles(t) {
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            li[s.type].build(s),
              s.matrix && this.transformPoints(s.points, s.matrix);
          }
        }
        calculateBounds() {
          const t = this._bounds;
          t.clear(),
            t.addVertexData(this.points, 0, this.points.length),
            t.pad(this.boundsPadding, this.boundsPadding);
        }
        transformPoints(t, e) {
          for (let s = 0; s < t.length / 2; s++) {
            const i = t[s * 2],
              n = t[s * 2 + 1];
            (t[s * 2] = e.a * i + e.c * n + e.tx),
              (t[s * 2 + 1] = e.b * i + e.d * n + e.ty);
          }
        }
        addColors(t, e, s, i, n = 0) {
          const a = Q.shared.setValue(e).toLittleEndianNumber(),
            o = Q.shared.setValue(a).toPremultiplied(s);
          t.length = Math.max(t.length, n + i);
          for (let h = 0; h < i; h++) t[n + h] = o;
        }
        addTextureIds(t, e, s, i = 0) {
          t.length = Math.max(t.length, i + s);
          for (let n = 0; n < s; n++) t[i + n] = e;
        }
        addUvs(t, e, s, i, n, a = null) {
          let o = 0;
          const h = e.length,
            l = s.frame;
          for (; o < n; ) {
            let c = t[(i + o) * 2],
              d = t[(i + o) * 2 + 1];
            if (a) {
              const p = a.a * c + a.c * d + a.tx;
              (d = a.b * c + a.d * d + a.ty), (c = p);
            }
            o++, e.push(c / l.width, d / l.height);
          }
          const u = s.baseTexture;
          (l.width < u.width || l.height < u.height) &&
            this.adjustUvs(e, s, h, n);
        }
        adjustUvs(t, e, s, i) {
          const n = e.baseTexture,
            a = 1e-6,
            o = s + i * 2,
            h = e.frame,
            l = h.width / n.width,
            u = h.height / n.height;
          let c = h.x / h.width,
            d = h.y / h.height,
            p = Math.floor(t[s] + a),
            f = Math.floor(t[s + 1] + a);
          for (let m = s + 2; m < o; m += 2)
            (p = Math.min(p, Math.floor(t[m] + a))),
              (f = Math.min(f, Math.floor(t[m + 1] + a)));
          (c -= p), (d -= f);
          for (let m = s; m < o; m += 2)
            (t[m] = (t[m] + c) * l), (t[m + 1] = (t[m + 1] + d) * u);
        }
      };
    Wa.BATCHABLE_SIZE = 100;
    let Gc = Wa,
      ja = class th {
        constructor() {
          (this.color = 16777215),
            (this.alpha = 1),
            (this.texture = L.WHITE),
            (this.matrix = null),
            (this.visible = !1),
            this.reset();
        }
        clone() {
          const t = new th();
          return (
            (t.color = this.color),
            (t.alpha = this.alpha),
            (t.texture = this.texture),
            (t.matrix = this.matrix),
            (t.visible = this.visible),
            t
          );
        }
        reset() {
          (this.color = 16777215),
            (this.alpha = 1),
            (this.texture = L.WHITE),
            (this.matrix = null),
            (this.visible = !1);
        }
        destroy() {
          (this.texture = null), (this.matrix = null);
        }
      },
      Hc = class eh extends ja {
        constructor() {
          super(...arguments),
            (this.width = 0),
            (this.alignment = 0.5),
            (this.native = !1),
            (this.cap = wt.BUTT),
            (this.join = pt.MITER),
            (this.miterLimit = 10);
        }
        clone() {
          const t = new eh();
          return (
            (t.color = this.color),
            (t.alpha = this.alpha),
            (t.texture = this.texture),
            (t.matrix = this.matrix),
            (t.visible = this.visible),
            (t.width = this.width),
            (t.alignment = this.alignment),
            (t.native = this.native),
            (t.cap = this.cap),
            (t.join = this.join),
            (t.miterLimit = this.miterLimit),
            t
          );
        }
        reset() {
          super.reset(),
            (this.color = 0),
            (this.alignment = 0.5),
            (this.width = 0),
            (this.native = !1),
            (this.cap = wt.BUTT),
            (this.join = pt.MITER),
            (this.miterLimit = 10);
        }
      };
    const Lr = {},
      Nr = class Xi extends yt {
        constructor(t = null) {
          super(),
            (this.shader = null),
            (this.pluginName = "batch"),
            (this.currentPath = null),
            (this.batches = []),
            (this.batchTint = -1),
            (this.batchDirty = -1),
            (this.vertexData = null),
            (this._fillStyle = new ja()),
            (this._lineStyle = new Hc()),
            (this._matrix = null),
            (this._holeMode = !1),
            (this.state = Mt.for2d()),
            (this._geometry = t || new Gc()),
            this._geometry.refCount++,
            (this._transformID = -1),
            (this._tintColor = new Q(16777215)),
            (this.blendMode = j.NORMAL);
        }
        get geometry() {
          return this._geometry;
        }
        clone() {
          return this.finishPoly(), new Xi(this._geometry);
        }
        set blendMode(t) {
          this.state.blendMode = t;
        }
        get blendMode() {
          return this.state.blendMode;
        }
        get tint() {
          return this._tintColor.value;
        }
        set tint(t) {
          this._tintColor.setValue(t);
        }
        get fill() {
          return this._fillStyle;
        }
        get line() {
          return this._lineStyle;
        }
        lineStyle(t = null, e = 0, s, i = 0.5, n = !1) {
          return (
            typeof t == "number" &&
              (t = { width: t, color: e, alpha: s, alignment: i, native: n }),
            this.lineTextureStyle(t)
          );
        }
        lineTextureStyle(t) {
          const e = {
            width: 0,
            texture: L.WHITE,
            color: t != null && t.texture ? 16777215 : 0,
            matrix: null,
            alignment: 0.5,
            native: !1,
            cap: wt.BUTT,
            join: pt.MITER,
            miterLimit: 10,
          };
          (t = Object.assign(e, t)),
            this.normalizeColor(t),
            this.currentPath && this.startPoly();
          const s = t.width > 0 && t.alpha > 0;
          return (
            s
              ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                Object.assign(this._lineStyle, { visible: s }, t))
              : this._lineStyle.reset(),
            this
          );
        }
        startPoly() {
          if (this.currentPath) {
            const t = this.currentPath.points,
              e = this.currentPath.points.length;
            e > 2 &&
              (this.drawShape(this.currentPath),
              (this.currentPath = new zt()),
              (this.currentPath.closeStroke = !1),
              this.currentPath.points.push(t[e - 2], t[e - 1]));
          } else
            (this.currentPath = new zt()), (this.currentPath.closeStroke = !1);
        }
        finishPoly() {
          this.currentPath &&
            (this.currentPath.points.length > 2
              ? (this.drawShape(this.currentPath), (this.currentPath = null))
              : (this.currentPath.points.length = 0));
        }
        moveTo(t, e) {
          return (
            this.startPoly(),
            (this.currentPath.points[0] = t),
            (this.currentPath.points[1] = e),
            this
          );
        }
        lineTo(t, e) {
          this.currentPath || this.moveTo(0, 0);
          const s = this.currentPath.points,
            i = s[s.length - 2],
            n = s[s.length - 1];
          return (i !== t || n !== e) && s.push(t, e), this;
        }
        _initCurve(t = 0, e = 0) {
          this.currentPath
            ? this.currentPath.points.length === 0 &&
              (this.currentPath.points = [t, e])
            : this.moveTo(t, e);
        }
        quadraticCurveTo(t, e, s, i) {
          this._initCurve();
          const n = this.currentPath.points;
          return (
            n.length === 0 && this.moveTo(0, 0), $a.curveTo(t, e, s, i, n), this
          );
        }
        bezierCurveTo(t, e, s, i, n, a) {
          return (
            this._initCurve(),
            Xa.curveTo(t, e, s, i, n, a, this.currentPath.points),
            this
          );
        }
        arcTo(t, e, s, i, n) {
          this._initCurve(t, e);
          const a = this.currentPath.points,
            o = Mr.curveTo(t, e, s, i, n, a);
          if (o) {
            const {
              cx: h,
              cy: l,
              radius: u,
              startAngle: c,
              endAngle: d,
              anticlockwise: p,
            } = o;
            this.arc(h, l, u, c, d, p);
          }
          return this;
        }
        arc(t, e, s, i, n, a = !1) {
          if (i === n) return this;
          if (
            (!a && n <= i ? (n += ke) : a && i <= n && (i += ke), n - i === 0)
          )
            return this;
          const o = t + Math.cos(i) * s,
            h = e + Math.sin(i) * s,
            l = this._geometry.closePointEps;
          let u = this.currentPath ? this.currentPath.points : null;
          if (u) {
            const c = Math.abs(u[u.length - 2] - o),
              d = Math.abs(u[u.length - 1] - h);
            (c < l && d < l) || u.push(o, h);
          } else this.moveTo(o, h), (u = this.currentPath.points);
          return Mr.arc(o, h, t, e, s, i, n, a, u), this;
        }
        beginFill(t = 0, e) {
          return this.beginTextureFill({
            texture: L.WHITE,
            color: t,
            alpha: e,
          });
        }
        normalizeColor(t) {
          const e = Q.shared.setValue(t.color ?? 0);
          (t.color = e.toNumber()), t.alpha ?? (t.alpha = e.alpha);
        }
        beginTextureFill(t) {
          const e = { texture: L.WHITE, color: 16777215, matrix: null };
          (t = Object.assign(e, t)),
            this.normalizeColor(t),
            this.currentPath && this.startPoly();
          const s = t.alpha > 0;
          return (
            s
              ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                Object.assign(this._fillStyle, { visible: s }, t))
              : this._fillStyle.reset(),
            this
          );
        }
        endFill() {
          return this.finishPoly(), this._fillStyle.reset(), this;
        }
        drawRect(t, e, s, i) {
          return this.drawShape(new W(t, e, s, i));
        }
        drawRoundedRect(t, e, s, i, n) {
          return this.drawShape(new us(t, e, s, i, n));
        }
        drawCircle(t, e, s) {
          return this.drawShape(new hs(t, e, s));
        }
        drawEllipse(t, e, s, i) {
          return this.drawShape(new ls(t, e, s, i));
        }
        drawPolygon(...t) {
          let e,
            s = !0;
          const i = t[0];
          i.points
            ? ((s = i.closeStroke), (e = i.points))
            : Array.isArray(t[0])
            ? (e = t[0])
            : (e = t);
          const n = new zt(e);
          return (n.closeStroke = s), this.drawShape(n), this;
        }
        drawShape(t) {
          return (
            this._holeMode
              ? this._geometry.drawHole(t, this._matrix)
              : this._geometry.drawShape(
                  t,
                  this._fillStyle.clone(),
                  this._lineStyle.clone(),
                  this._matrix
                ),
            this
          );
        }
        clear() {
          return (
            this._geometry.clear(),
            this._lineStyle.reset(),
            this._fillStyle.reset(),
            this._boundsID++,
            (this._matrix = null),
            (this._holeMode = !1),
            (this.currentPath = null),
            this
          );
        }
        isFastRect() {
          const t = this._geometry.graphicsData;
          return (
            t.length === 1 &&
            t[0].shape.type === Z.RECT &&
            !t[0].matrix &&
            !t[0].holes.length &&
            !(t[0].lineStyle.visible && t[0].lineStyle.width)
          );
        }
        _render(t) {
          this.finishPoly();
          const e = this._geometry;
          e.updateBatches(),
            e.batchable
              ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
                this._renderBatched(t))
              : (t.batch.flush(), this._renderDirect(t));
        }
        _populateBatches() {
          const t = this._geometry,
            e = this.blendMode,
            s = t.batches.length;
          (this.batchTint = -1),
            (this._transformID = -1),
            (this.batchDirty = t.batchDirty),
            (this.batches.length = s),
            (this.vertexData = new Float32Array(t.points));
          for (let i = 0; i < s; i++) {
            const n = t.batches[i],
              a = n.style.color,
              o = new Float32Array(
                this.vertexData.buffer,
                n.attribStart * 4 * 2,
                n.attribSize * 2
              ),
              h = new Float32Array(
                t.uvsFloat32.buffer,
                n.attribStart * 4 * 2,
                n.attribSize * 2
              ),
              l = new Uint16Array(t.indicesUint16.buffer, n.start * 2, n.size),
              u = {
                vertexData: o,
                blendMode: e,
                indices: l,
                uvs: h,
                _batchRGB: Q.shared.setValue(a).toRgbArray(),
                _tintRGB: a,
                _texture: n.style.texture,
                alpha: n.style.alpha,
                worldAlpha: 1,
              };
            this.batches[i] = u;
          }
        }
        _renderBatched(t) {
          if (this.batches.length) {
            t.batch.setObjectRenderer(t.plugins[this.pluginName]),
              this.calculateVertices(),
              this.calculateTints();
            for (let e = 0, s = this.batches.length; e < s; e++) {
              const i = this.batches[e];
              (i.worldAlpha = this.worldAlpha * i.alpha),
                t.plugins[this.pluginName].render(i);
            }
          }
        }
        _renderDirect(t) {
          const e = this._resolveDirectShader(t),
            s = this._geometry,
            i = this.worldAlpha,
            n = e.uniforms,
            a = s.drawCalls;
          (n.translationMatrix = this.transform.worldTransform),
            Q.shared.setValue(this._tintColor).premultiply(i).toArray(n.tint),
            t.shader.bind(e),
            t.geometry.bind(s, e),
            t.state.set(this.state);
          for (let o = 0, h = a.length; o < h; o++)
            this._renderDrawCallDirect(t, s.drawCalls[o]);
        }
        _renderDrawCallDirect(t, e) {
          const { texArray: s, type: i, size: n, start: a } = e,
            o = s.count;
          for (let h = 0; h < o; h++) t.texture.bind(s.elements[h], h);
          t.geometry.draw(i, n, a);
        }
        _resolveDirectShader(t) {
          let e = this.shader;
          const s = this.pluginName;
          if (!e) {
            if (!Lr[s]) {
              const { maxTextures: i } = t.plugins[s],
                n = new Int32Array(i);
              for (let h = 0; h < i; h++) n[h] = h;
              const a = {
                  tint: new Float32Array([1, 1, 1, 1]),
                  translationMatrix: new tt(),
                  default: Bt.from({ uSamplers: n }, !0),
                },
                o = t.plugins[s]._shader.program;
              Lr[s] = new Lt(o, a);
            }
            e = Lr[s];
          }
          return e;
        }
        _calculateBounds() {
          this.finishPoly();
          const t = this._geometry;
          if (!t.graphicsData.length) return;
          const { minX: e, minY: s, maxX: i, maxY: n } = t.bounds;
          this._bounds.addFrame(this.transform, e, s, i, n);
        }
        containsPoint(t) {
          return (
            this.worldTransform.applyInverse(t, Xi._TEMP_POINT),
            this._geometry.containsPoint(Xi._TEMP_POINT)
          );
        }
        calculateTints() {
          if (this.batchTint !== this.tint) {
            this.batchTint = this._tintColor.toNumber();
            for (let t = 0; t < this.batches.length; t++) {
              const e = this.batches[t];
              e._tintRGB = Q.shared
                .setValue(this._tintColor)
                .multiply(e._batchRGB)
                .toLittleEndianNumber();
            }
          }
        }
        calculateVertices() {
          const t = this.transform._worldID;
          if (this._transformID === t) return;
          this._transformID = t;
          const e = this.transform.worldTransform,
            s = e.a,
            i = e.b,
            n = e.c,
            a = e.d,
            o = e.tx,
            h = e.ty,
            l = this._geometry.points,
            u = this.vertexData;
          let c = 0;
          for (let d = 0; d < l.length; d += 2) {
            const p = l[d],
              f = l[d + 1];
            (u[c++] = s * p + n * f + o), (u[c++] = a * f + i * p + h);
          }
        }
        closePath() {
          const t = this.currentPath;
          return t && ((t.closeStroke = !0), this.finishPoly()), this;
        }
        setMatrix(t) {
          return (this._matrix = t), this;
        }
        beginHole() {
          return this.finishPoly(), (this._holeMode = !0), this;
        }
        endHole() {
          return this.finishPoly(), (this._holeMode = !1), this;
        }
        destroy(t) {
          this._geometry.refCount--,
            this._geometry.refCount === 0 && this._geometry.dispose(),
            (this._matrix = null),
            (this.currentPath = null),
            this._lineStyle.destroy(),
            (this._lineStyle = null),
            this._fillStyle.destroy(),
            (this._fillStyle = null),
            (this._geometry = null),
            (this.shader = null),
            (this.vertexData = null),
            (this.batches.length = 0),
            (this.batches = null),
            super.destroy(t);
        }
      };
    (Nr.curves = Re), (Nr._TEMP_POINT = new q());
    let je = Nr;
    const zc = {
      buildPoly: Pr,
      buildCircle: xs,
      buildRectangle: Ga,
      buildRoundedRectangle: Ha,
      buildLine: Dr,
      ArcUtils: Mr,
      BezierUtils: Xa,
      QuadraticUtils: $a,
      BatchPart: za,
      FILL_COMMANDS: li,
      BATCH_POOL: Br,
      DRAW_CALL_POOL: ys,
    };
    class Xc {
      constructor(t, e) {
        (this.uvBuffer = t),
          (this.uvMatrix = e),
          (this.data = null),
          (this._bufferUpdateId = -1),
          (this._textureUpdateId = -1),
          (this._updateID = 0);
      }
      update(t) {
        if (
          !t &&
          this._bufferUpdateId === this.uvBuffer._updateID &&
          this._textureUpdateId === this.uvMatrix._updateID
        )
          return;
        (this._bufferUpdateId = this.uvBuffer._updateID),
          (this._textureUpdateId = this.uvMatrix._updateID);
        const e = this.uvBuffer.data;
        (!this.data || this.data.length !== e.length) &&
          (this.data = new Float32Array(e.length)),
          this.uvMatrix.multiplyUvs(e, this.data),
          this._updateID++;
      }
    }
    const Or = new q(),
      Ya = new zt(),
      qa = class sh extends yt {
        constructor(t, e, s, i = Wt.TRIANGLES) {
          super(),
            (this.geometry = t),
            (this.shader = e),
            (this.state = s || Mt.for2d()),
            (this.drawMode = i),
            (this.start = 0),
            (this.size = 0),
            (this.uvs = null),
            (this.indices = null),
            (this.vertexData = new Float32Array(1)),
            (this.vertexDirty = -1),
            (this._transformID = -1),
            (this._roundPixels = N.ROUND_PIXELS),
            (this.batchUvs = null);
        }
        get geometry() {
          return this._geometry;
        }
        set geometry(t) {
          this._geometry !== t &&
            (this._geometry &&
              (this._geometry.refCount--,
              this._geometry.refCount === 0 && this._geometry.dispose()),
            (this._geometry = t),
            this._geometry && this._geometry.refCount++,
            (this.vertexDirty = -1));
        }
        get uvBuffer() {
          return this.geometry.buffers[1];
        }
        get verticesBuffer() {
          return this.geometry.buffers[0];
        }
        set material(t) {
          this.shader = t;
        }
        get material() {
          return this.shader;
        }
        set blendMode(t) {
          this.state.blendMode = t;
        }
        get blendMode() {
          return this.state.blendMode;
        }
        set roundPixels(t) {
          this._roundPixels !== t && (this._transformID = -1),
            (this._roundPixels = t);
        }
        get roundPixels() {
          return this._roundPixels;
        }
        get tint() {
          return "tint" in this.shader ? this.shader.tint : null;
        }
        set tint(t) {
          this.shader.tint = t;
        }
        get tintValue() {
          return this.shader.tintValue;
        }
        get texture() {
          return "texture" in this.shader ? this.shader.texture : null;
        }
        set texture(t) {
          this.shader.texture = t;
        }
        _render(t) {
          const e = this.geometry.buffers[0].data;
          this.shader.batchable &&
          this.drawMode === Wt.TRIANGLES &&
          e.length < sh.BATCHABLE_SIZE * 2
            ? this._renderToBatch(t)
            : this._renderDefault(t);
        }
        _renderDefault(t) {
          const e = this.shader;
          (e.alpha = this.worldAlpha),
            e.update && e.update(),
            t.batch.flush(),
            (e.uniforms.translationMatrix =
              this.transform.worldTransform.toArray(!0)),
            t.shader.bind(e),
            t.state.set(this.state),
            t.geometry.bind(this.geometry, e),
            t.geometry.draw(
              this.drawMode,
              this.size,
              this.start,
              this.geometry.instanceCount
            );
        }
        _renderToBatch(t) {
          const e = this.geometry,
            s = this.shader;
          s.uvMatrix && (s.uvMatrix.update(), this.calculateUvs()),
            this.calculateVertices(),
            (this.indices = e.indexBuffer.data),
            (this._tintRGB = s._tintRGB),
            (this._texture = s.texture);
          const i = this.material.pluginName;
          t.batch.setObjectRenderer(t.plugins[i]), t.plugins[i].render(this);
        }
        calculateVertices() {
          const t = this.geometry.buffers[0],
            e = t.data,
            s = t._updateID;
          if (
            s === this.vertexDirty &&
            this._transformID === this.transform._worldID
          )
            return;
          (this._transformID = this.transform._worldID),
            this.vertexData.length !== e.length &&
              (this.vertexData = new Float32Array(e.length));
          const i = this.transform.worldTransform,
            n = i.a,
            a = i.b,
            o = i.c,
            h = i.d,
            l = i.tx,
            u = i.ty,
            c = this.vertexData;
          for (let d = 0; d < c.length / 2; d++) {
            const p = e[d * 2],
              f = e[d * 2 + 1];
            (c[d * 2] = n * p + o * f + l), (c[d * 2 + 1] = a * p + h * f + u);
          }
          if (this._roundPixels) {
            const d = N.RESOLUTION;
            for (let p = 0; p < c.length; ++p) c[p] = Math.round(c[p] * d) / d;
          }
          this.vertexDirty = s;
        }
        calculateUvs() {
          const t = this.geometry.buffers[1],
            e = this.shader;
          e.uvMatrix.isSimple
            ? (this.uvs = t.data)
            : (this.batchUvs || (this.batchUvs = new Xc(t, e.uvMatrix)),
              this.batchUvs.update(),
              (this.uvs = this.batchUvs.data));
        }
        _calculateBounds() {
          this.calculateVertices(),
            this._bounds.addVertexData(
              this.vertexData,
              0,
              this.vertexData.length
            );
        }
        containsPoint(t) {
          if (!this.getBounds().contains(t.x, t.y)) return !1;
          this.worldTransform.applyInverse(t, Or);
          const e = this.geometry.getBuffer("aVertexPosition").data,
            s = Ya.points,
            i = this.geometry.getIndex().data,
            n = i.length,
            a = this.drawMode === 4 ? 3 : 1;
          for (let o = 0; o + 2 < n; o += a) {
            const h = i[o] * 2,
              l = i[o + 1] * 2,
              u = i[o + 2] * 2;
            if (
              ((s[0] = e[h]),
              (s[1] = e[h + 1]),
              (s[2] = e[l]),
              (s[3] = e[l + 1]),
              (s[4] = e[u]),
              (s[5] = e[u + 1]),
              Ya.contains(Or.x, Or.y))
            )
              return !0;
          }
          return !1;
        }
        destroy(t) {
          super.destroy(t),
            this._cachedTexture &&
              (this._cachedTexture.destroy(), (this._cachedTexture = null)),
            (this.geometry = null),
            (this.shader = null),
            (this.state = null),
            (this.uvs = null),
            (this.indices = null),
            (this.vertexData = null);
        }
      };
    qa.BATCHABLE_SIZE = 100;
    let Ka = qa;
    class Vc extends qt {
      constructor(t, e, s) {
        super();
        const i = new st(t),
          n = new st(e, !0),
          a = new st(s, !0, !0);
        this.addAttribute("aVertexPosition", i, 2, !1, O.FLOAT)
          .addAttribute("aTextureCoord", n, 2, !1, O.FLOAT)
          .addIndex(a),
          (this._updateId = -1);
      }
      get vertexDirtyId() {
        return this.buffers[0]._updateID;
      }
    }
    var $c = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,
      Wc = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
    class Ja extends Lt {
      constructor(t, e) {
        const s = {
          uSampler: t,
          alpha: 1,
          uTextureMatrix: tt.IDENTITY,
          uColor: new Float32Array([1, 1, 1, 1]),
        };
        (e = Object.assign(
          { tint: 16777215, alpha: 1, pluginName: "batch" },
          e
        )),
          e.uniforms && Object.assign(s, e.uniforms),
          super(e.program || Xt.from(Wc, $c), s),
          (this._colorDirty = !1),
          (this.uvMatrix = new $n(t)),
          (this.batchable = e.program === void 0),
          (this.pluginName = e.pluginName),
          (this._tintColor = new Q(e.tint)),
          (this._tintRGB = this._tintColor.toLittleEndianNumber()),
          (this._colorDirty = !0),
          (this.alpha = e.alpha);
      }
      get texture() {
        return this.uniforms.uSampler;
      }
      set texture(t) {
        this.uniforms.uSampler !== t &&
          (!this.uniforms.uSampler.baseTexture.alphaMode !=
            !t.baseTexture.alphaMode && (this._colorDirty = !0),
          (this.uniforms.uSampler = t),
          (this.uvMatrix.texture = t));
      }
      set alpha(t) {
        t !== this._alpha && ((this._alpha = t), (this._colorDirty = !0));
      }
      get alpha() {
        return this._alpha;
      }
      set tint(t) {
        t !== this.tint &&
          (this._tintColor.setValue(t),
          (this._tintRGB = this._tintColor.toLittleEndianNumber()),
          (this._colorDirty = !0));
      }
      get tint() {
        return this._tintColor.value;
      }
      get tintValue() {
        return this._tintColor.toNumber();
      }
      update() {
        if (this._colorDirty) {
          this._colorDirty = !1;
          const t = this.texture.baseTexture.alphaMode;
          Q.shared
            .setValue(this._tintColor)
            .premultiply(this._alpha, t)
            .toArray(this.uniforms.uColor);
        }
        this.uvMatrix.update() &&
          (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
      }
    }
    class Za {
      constructor(t, e, s) {
        (this.geometry = new qt()),
          (this.indexBuffer = null),
          (this.size = s),
          (this.dynamicProperties = []),
          (this.staticProperties = []);
        for (let i = 0; i < t.length; ++i) {
          let n = t[i];
          (n = {
            attributeName: n.attributeName,
            size: n.size,
            uploadFunction: n.uploadFunction,
            type: n.type || O.FLOAT,
            offset: n.offset,
          }),
            e[i]
              ? this.dynamicProperties.push(n)
              : this.staticProperties.push(n);
        }
        (this.staticStride = 0),
          (this.staticBuffer = null),
          (this.staticData = null),
          (this.staticDataUint32 = null),
          (this.dynamicStride = 0),
          (this.dynamicBuffer = null),
          (this.dynamicData = null),
          (this.dynamicDataUint32 = null),
          (this._updateID = 0),
          this.initBuffers();
      }
      initBuffers() {
        const t = this.geometry;
        let e = 0;
        (this.indexBuffer = new st(dh(this.size), !0, !0)),
          t.addIndex(this.indexBuffer),
          (this.dynamicStride = 0);
        for (let a = 0; a < this.dynamicProperties.length; ++a) {
          const o = this.dynamicProperties[a];
          (o.offset = e), (e += o.size), (this.dynamicStride += o.size);
        }
        const s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        (this.dynamicData = new Float32Array(s)),
          (this.dynamicDataUint32 = new Uint32Array(s)),
          (this.dynamicBuffer = new st(this.dynamicData, !1, !1));
        let i = 0;
        this.staticStride = 0;
        for (let a = 0; a < this.staticProperties.length; ++a) {
          const o = this.staticProperties[a];
          (o.offset = i), (i += o.size), (this.staticStride += o.size);
        }
        const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        (this.staticData = new Float32Array(n)),
          (this.staticDataUint32 = new Uint32Array(n)),
          (this.staticBuffer = new st(this.staticData, !0, !1));
        for (let a = 0; a < this.dynamicProperties.length; ++a) {
          const o = this.dynamicProperties[a];
          t.addAttribute(
            o.attributeName,
            this.dynamicBuffer,
            0,
            o.type === O.UNSIGNED_BYTE,
            o.type,
            this.dynamicStride * 4,
            o.offset * 4
          );
        }
        for (let a = 0; a < this.staticProperties.length; ++a) {
          const o = this.staticProperties[a];
          t.addAttribute(
            o.attributeName,
            this.staticBuffer,
            0,
            o.type === O.UNSIGNED_BYTE,
            o.type,
            this.staticStride * 4,
            o.offset * 4
          );
        }
      }
      uploadDynamic(t, e, s) {
        for (let i = 0; i < this.dynamicProperties.length; i++) {
          const n = this.dynamicProperties[i];
          n.uploadFunction(
            t,
            e,
            s,
            n.type === O.UNSIGNED_BYTE
              ? this.dynamicDataUint32
              : this.dynamicData,
            this.dynamicStride,
            n.offset
          );
        }
        this.dynamicBuffer._updateID++;
      }
      uploadStatic(t, e, s) {
        for (let i = 0; i < this.staticProperties.length; i++) {
          const n = this.staticProperties[i];
          n.uploadFunction(
            t,
            e,
            s,
            n.type === O.UNSIGNED_BYTE
              ? this.staticDataUint32
              : this.staticData,
            this.staticStride,
            n.offset
          );
        }
        this.staticBuffer._updateID++;
      }
      destroy() {
        (this.indexBuffer = null),
          (this.dynamicProperties = null),
          (this.dynamicBuffer = null),
          (this.dynamicData = null),
          (this.dynamicDataUint32 = null),
          (this.staticProperties = null),
          (this.staticBuffer = null),
          (this.staticData = null),
          (this.staticDataUint32 = null),
          this.geometry.destroy();
      }
    }
    var jc = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,
      Yc = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
    class Qa extends Vs {
      constructor(t) {
        super(t),
          (this.shader = null),
          (this.properties = null),
          (this.tempMatrix = new tt()),
          (this.properties = [
            {
              attributeName: "aVertexPosition",
              size: 2,
              uploadFunction: this.uploadVertices,
              offset: 0,
            },
            {
              attributeName: "aPositionCoord",
              size: 2,
              uploadFunction: this.uploadPosition,
              offset: 0,
            },
            {
              attributeName: "aRotation",
              size: 1,
              uploadFunction: this.uploadRotation,
              offset: 0,
            },
            {
              attributeName: "aTextureCoord",
              size: 2,
              uploadFunction: this.uploadUvs,
              offset: 0,
            },
            {
              attributeName: "aColor",
              size: 1,
              type: O.UNSIGNED_BYTE,
              uploadFunction: this.uploadTint,
              offset: 0,
            },
          ]),
          (this.shader = Lt.from(Yc, jc, {})),
          (this.state = Mt.for2d());
      }
      render(t) {
        const e = t.children,
          s = t._maxSize,
          i = t._batchSize,
          n = this.renderer;
        let a = e.length;
        if (a === 0) return;
        a > s && !t.autoResize && (a = s);
        let o = t._buffers;
        o || (o = t._buffers = this.generateBuffers(t));
        const h = e[0]._texture.baseTexture,
          l = h.alphaMode > 0;
        (this.state.blendMode = Wo(t.blendMode, l)), n.state.set(this.state);
        const u = n.gl,
          c = t.worldTransform.copyTo(this.tempMatrix);
        c.prepend(n.globalUniforms.uniforms.projectionMatrix),
          (this.shader.uniforms.translationMatrix = c.toArray(!0)),
          (this.shader.uniforms.uColor = Q.shared
            .setValue(t.tintRgb)
            .premultiply(t.worldAlpha, l)
            .toArray(this.shader.uniforms.uColor)),
          (this.shader.uniforms.uSampler = h),
          this.renderer.shader.bind(this.shader);
        let d = !1;
        for (let p = 0, f = 0; p < a; p += i, f += 1) {
          let m = a - p;
          m > i && (m = i),
            f >= o.length && o.push(this._generateOneMoreBuffer(t));
          const g = o[f];
          g.uploadDynamic(e, p, m);
          const _ = t._bufferUpdateIDs[f] || 0;
          (d = d || g._updateID < _),
            d && ((g._updateID = t._updateID), g.uploadStatic(e, p, m)),
            n.geometry.bind(g.geometry),
            u.drawElements(u.TRIANGLES, m * 6, u.UNSIGNED_SHORT, 0);
        }
      }
      generateBuffers(t) {
        const e = [],
          s = t._maxSize,
          i = t._batchSize,
          n = t._properties;
        for (let a = 0; a < s; a += i) e.push(new Za(this.properties, n, i));
        return e;
      }
      _generateOneMoreBuffer(t) {
        const e = t._batchSize,
          s = t._properties;
        return new Za(this.properties, s, e);
      }
      uploadVertices(t, e, s, i, n, a) {
        let o = 0,
          h = 0,
          l = 0,
          u = 0;
        for (let c = 0; c < s; ++c) {
          const d = t[e + c],
            p = d._texture,
            f = d.scale.x,
            m = d.scale.y,
            g = p.trim,
            _ = p.orig;
          g
            ? ((h = g.x - d.anchor.x * _.width),
              (o = h + g.width),
              (u = g.y - d.anchor.y * _.height),
              (l = u + g.height))
            : ((o = _.width * (1 - d.anchor.x)),
              (h = _.width * -d.anchor.x),
              (l = _.height * (1 - d.anchor.y)),
              (u = _.height * -d.anchor.y)),
            (i[a] = h * f),
            (i[a + 1] = u * m),
            (i[a + n] = o * f),
            (i[a + n + 1] = u * m),
            (i[a + n * 2] = o * f),
            (i[a + n * 2 + 1] = l * m),
            (i[a + n * 3] = h * f),
            (i[a + n * 3 + 1] = l * m),
            (a += n * 4);
        }
      }
      uploadPosition(t, e, s, i, n, a) {
        for (let o = 0; o < s; o++) {
          const h = t[e + o].position;
          (i[a] = h.x),
            (i[a + 1] = h.y),
            (i[a + n] = h.x),
            (i[a + n + 1] = h.y),
            (i[a + n * 2] = h.x),
            (i[a + n * 2 + 1] = h.y),
            (i[a + n * 3] = h.x),
            (i[a + n * 3 + 1] = h.y),
            (a += n * 4);
        }
      }
      uploadRotation(t, e, s, i, n, a) {
        for (let o = 0; o < s; o++) {
          const h = t[e + o].rotation;
          (i[a] = h),
            (i[a + n] = h),
            (i[a + n * 2] = h),
            (i[a + n * 3] = h),
            (a += n * 4);
        }
      }
      uploadUvs(t, e, s, i, n, a) {
        for (let o = 0; o < s; ++o) {
          const h = t[e + o]._texture._uvs;
          h
            ? ((i[a] = h.x0),
              (i[a + 1] = h.y0),
              (i[a + n] = h.x1),
              (i[a + n + 1] = h.y1),
              (i[a + n * 2] = h.x2),
              (i[a + n * 2 + 1] = h.y2),
              (i[a + n * 3] = h.x3),
              (i[a + n * 3 + 1] = h.y3),
              (a += n * 4))
            : ((i[a] = 0),
              (i[a + 1] = 0),
              (i[a + n] = 0),
              (i[a + n + 1] = 0),
              (i[a + n * 2] = 0),
              (i[a + n * 2 + 1] = 0),
              (i[a + n * 3] = 0),
              (i[a + n * 3 + 1] = 0),
              (a += n * 4));
        }
      }
      uploadTint(t, e, s, i, n, a) {
        for (let o = 0; o < s; ++o) {
          const h = t[e + o],
            l = Q.shared
              .setValue(h._tintRGB)
              .toPremultiplied(h.alpha, h.texture.baseTexture.alphaMode > 0);
          (i[a] = l),
            (i[a + n] = l),
            (i[a + n * 2] = l),
            (i[a + n * 3] = l),
            (a += n * 4);
        }
      }
      destroy() {
        super.destroy(),
          this.shader && (this.shader.destroy(), (this.shader = null)),
          (this.tempMatrix = null);
      }
    }
    (Qa.extension = { name: "particle", type: M.RendererPlugin }), k.add(Qa);
    var ci = ((r) => (
      (r[(r.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
      (r[(r.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL"),
      r
    ))(ci || {});
    const di = { willReadFrequently: !0 },
      Vt = class U {
        static get experimentalLetterSpacingSupported() {
          let t = U._experimentalLetterSpacingSupported;
          if (t !== void 0) {
            const e = N.ADAPTER.getCanvasRenderingContext2D().prototype;
            t = U._experimentalLetterSpacingSupported =
              "letterSpacing" in e || "textLetterSpacing" in e;
          }
          return t;
        }
        constructor(t, e, s, i, n, a, o, h, l) {
          (this.text = t),
            (this.style = e),
            (this.width = s),
            (this.height = i),
            (this.lines = n),
            (this.lineWidths = a),
            (this.lineHeight = o),
            (this.maxLineWidth = h),
            (this.fontProperties = l);
        }
        static measureText(t, e, s, i = U._canvas) {
          s = s ?? e.wordWrap;
          const n = e.toFontString(),
            a = U.measureFont(n);
          a.fontSize === 0 &&
            ((a.fontSize = e.fontSize), (a.ascent = e.fontSize));
          const o = i.getContext("2d", di);
          o.font = n;
          const h = (s ? U.wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/),
            l = new Array(h.length);
          let u = 0;
          for (let f = 0; f < h.length; f++) {
            const m = U._measureText(h[f], e.letterSpacing, o);
            (l[f] = m), (u = Math.max(u, m));
          }
          let c = u + e.strokeThickness;
          e.dropShadow && (c += e.dropShadowDistance);
          const d = e.lineHeight || a.fontSize + e.strokeThickness;
          let p =
            Math.max(d, a.fontSize + e.strokeThickness * 2) +
            e.leading +
            (h.length - 1) * (d + e.leading);
          return (
            e.dropShadow && (p += e.dropShadowDistance),
            new U(t, e, c, p, h, l, d + e.leading, u, a)
          );
        }
        static _measureText(t, e, s) {
          let i = !1;
          U.experimentalLetterSpacingSupported &&
            (U.experimentalLetterSpacing
              ? ((s.letterSpacing = `${e}px`),
                (s.textLetterSpacing = `${e}px`),
                (i = !0))
              : ((s.letterSpacing = "0px"), (s.textLetterSpacing = "0px")));
          let n = s.measureText(t).width;
          return (
            n > 0 &&
              (i ? (n -= e) : (n += (U.graphemeSegmenter(t).length - 1) * e)),
            n
          );
        }
        static wordWrap(t, e, s = U._canvas) {
          const i = s.getContext("2d", di);
          let n = 0,
            a = "",
            o = "";
          const h = Object.create(null),
            { letterSpacing: l, whiteSpace: u } = e,
            c = U.collapseSpaces(u),
            d = U.collapseNewlines(u);
          let p = !c;
          const f = e.wordWrapWidth + l,
            m = U.tokenize(t);
          for (let g = 0; g < m.length; g++) {
            let _ = m[g];
            if (U.isNewline(_)) {
              if (!d) {
                (o += U.addLine(a)), (p = !c), (a = ""), (n = 0);
                continue;
              }
              _ = " ";
            }
            if (c) {
              const y = U.isBreakingSpace(_),
                x = U.isBreakingSpace(a[a.length - 1]);
              if (y && x) continue;
            }
            const v = U.getFromCache(_, l, h, i);
            if (v > f)
              if (
                (a !== "" && ((o += U.addLine(a)), (a = ""), (n = 0)),
                U.canBreakWords(_, e.breakWords))
              ) {
                const y = U.wordWrapSplit(_);
                for (let x = 0; x < y.length; x++) {
                  let A = y[x],
                    w = A,
                    b = 1;
                  for (; y[x + b]; ) {
                    const S = y[x + b];
                    if (!U.canBreakChars(w, S, _, x, e.breakWords)) A += S;
                    else break;
                    (w = S), b++;
                  }
                  x += b - 1;
                  const E = U.getFromCache(A, l, h, i);
                  E + n > f &&
                    ((o += U.addLine(a)), (p = !1), (a = ""), (n = 0)),
                    (a += A),
                    (n += E);
                }
              } else {
                a.length > 0 && ((o += U.addLine(a)), (a = ""), (n = 0));
                const y = g === m.length - 1;
                (o += U.addLine(_, !y)), (p = !1), (a = ""), (n = 0);
              }
            else
              v + n > f && ((p = !1), (o += U.addLine(a)), (a = ""), (n = 0)),
                (a.length > 0 || !U.isBreakingSpace(_) || p) &&
                  ((a += _), (n += v));
          }
          return (o += U.addLine(a, !1)), o;
        }
        static addLine(t, e = !0) {
          return (
            (t = U.trimRight(t)),
            (t = e
              ? `${t}
`
              : t),
            t
          );
        }
        static getFromCache(t, e, s, i) {
          let n = s[t];
          return (
            typeof n != "number" &&
              ((n = U._measureText(t, e, i) + e), (s[t] = n)),
            n
          );
        }
        static collapseSpaces(t) {
          return t === "normal" || t === "pre-line";
        }
        static collapseNewlines(t) {
          return t === "normal";
        }
        static trimRight(t) {
          if (typeof t != "string") return "";
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            if (!U.isBreakingSpace(s)) break;
            t = t.slice(0, -1);
          }
          return t;
        }
        static isNewline(t) {
          return typeof t != "string"
            ? !1
            : U._newlines.includes(t.charCodeAt(0));
        }
        static isBreakingSpace(t, e) {
          return typeof t != "string"
            ? !1
            : U._breakingSpaces.includes(t.charCodeAt(0));
        }
        static tokenize(t) {
          const e = [];
          let s = "";
          if (typeof t != "string") return e;
          for (let i = 0; i < t.length; i++) {
            const n = t[i],
              a = t[i + 1];
            if (U.isBreakingSpace(n, a) || U.isNewline(n)) {
              s !== "" && (e.push(s), (s = "")), e.push(n);
              continue;
            }
            s += n;
          }
          return s !== "" && e.push(s), e;
        }
        static canBreakWords(t, e) {
          return e;
        }
        static canBreakChars(t, e, s, i, n) {
          return !0;
        }
        static wordWrapSplit(t) {
          return U.graphemeSegmenter(t);
        }
        static measureFont(t) {
          if (U._fonts[t]) return U._fonts[t];
          const e = { ascent: 0, descent: 0, fontSize: 0 },
            s = U._canvas,
            i = U._context;
          i.font = t;
          const n = U.METRICS_STRING + U.BASELINE_SYMBOL,
            a = Math.ceil(i.measureText(n).width);
          let o = Math.ceil(i.measureText(U.BASELINE_SYMBOL).width);
          const h = Math.ceil(U.HEIGHT_MULTIPLIER * o);
          if (((o = (o * U.BASELINE_MULTIPLIER) | 0), a === 0 || h === 0))
            return (U._fonts[t] = e), e;
          (s.width = a),
            (s.height = h),
            (i.fillStyle = "#f00"),
            i.fillRect(0, 0, a, h),
            (i.font = t),
            (i.textBaseline = "alphabetic"),
            (i.fillStyle = "#000"),
            i.fillText(n, 0, o);
          const l = i.getImageData(0, 0, a, h).data,
            u = l.length,
            c = a * 4;
          let d = 0,
            p = 0,
            f = !1;
          for (d = 0; d < o; ++d) {
            for (let m = 0; m < c; m += 4)
              if (l[p + m] !== 255) {
                f = !0;
                break;
              }
            if (!f) p += c;
            else break;
          }
          for (e.ascent = o - d, p = u - c, f = !1, d = h; d > o; --d) {
            for (let m = 0; m < c; m += 4)
              if (l[p + m] !== 255) {
                f = !0;
                break;
              }
            if (!f) p -= c;
            else break;
          }
          return (
            (e.descent = d - o),
            (e.fontSize = e.ascent + e.descent),
            (U._fonts[t] = e),
            e
          );
        }
        static clearMetrics(t = "") {
          t ? delete U._fonts[t] : (U._fonts = {});
        }
        static get _canvas() {
          var t;
          if (!U.__canvas) {
            let e;
            try {
              const s = new OffscreenCanvas(0, 0);
              if ((t = s.getContext("2d", di)) != null && t.measureText)
                return (U.__canvas = s), s;
              e = N.ADAPTER.createCanvas();
            } catch {
              e = N.ADAPTER.createCanvas();
            }
            (e.width = e.height = 10), (U.__canvas = e);
          }
          return U.__canvas;
        }
        static get _context() {
          return (
            U.__context || (U.__context = U._canvas.getContext("2d", di)),
            U.__context
          );
        }
      };
    (Vt.METRICS_STRING = "|\xC9q\xC5"),
      (Vt.BASELINE_SYMBOL = "M"),
      (Vt.BASELINE_MULTIPLIER = 1.4),
      (Vt.HEIGHT_MULTIPLIER = 2),
      (Vt.graphemeSegmenter = (() => {
        if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
          const r = new Intl.Segmenter();
          return (t) => [...r.segment(t)].map((e) => e.segment);
        }
        return (r) => [...r];
      })()),
      (Vt.experimentalLetterSpacing = !1),
      (Vt._fonts = {}),
      (Vt._newlines = [10, 13]),
      (Vt._breakingSpaces = [
        9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
        12288,
      ]);
    let ue = Vt;
    const qc = [
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui",
      ],
      to = class Ms {
        constructor(t) {
          (this.styleID = 0), this.reset(), kr(this, t, t);
        }
        clone() {
          const t = {};
          return kr(t, this, Ms.defaultStyle), new Ms(t);
        }
        reset() {
          kr(this, Ms.defaultStyle, Ms.defaultStyle);
        }
        get align() {
          return this._align;
        }
        set align(t) {
          this._align !== t && ((this._align = t), this.styleID++);
        }
        get breakWords() {
          return this._breakWords;
        }
        set breakWords(t) {
          this._breakWords !== t && ((this._breakWords = t), this.styleID++);
        }
        get dropShadow() {
          return this._dropShadow;
        }
        set dropShadow(t) {
          this._dropShadow !== t && ((this._dropShadow = t), this.styleID++);
        }
        get dropShadowAlpha() {
          return this._dropShadowAlpha;
        }
        set dropShadowAlpha(t) {
          this._dropShadowAlpha !== t &&
            ((this._dropShadowAlpha = t), this.styleID++);
        }
        get dropShadowAngle() {
          return this._dropShadowAngle;
        }
        set dropShadowAngle(t) {
          this._dropShadowAngle !== t &&
            ((this._dropShadowAngle = t), this.styleID++);
        }
        get dropShadowBlur() {
          return this._dropShadowBlur;
        }
        set dropShadowBlur(t) {
          this._dropShadowBlur !== t &&
            ((this._dropShadowBlur = t), this.styleID++);
        }
        get dropShadowColor() {
          return this._dropShadowColor;
        }
        set dropShadowColor(t) {
          const e = Fr(t);
          this._dropShadowColor !== e &&
            ((this._dropShadowColor = e), this.styleID++);
        }
        get dropShadowDistance() {
          return this._dropShadowDistance;
        }
        set dropShadowDistance(t) {
          this._dropShadowDistance !== t &&
            ((this._dropShadowDistance = t), this.styleID++);
        }
        get fill() {
          return this._fill;
        }
        set fill(t) {
          const e = Fr(t);
          this._fill !== e && ((this._fill = e), this.styleID++);
        }
        get fillGradientType() {
          return this._fillGradientType;
        }
        set fillGradientType(t) {
          this._fillGradientType !== t &&
            ((this._fillGradientType = t), this.styleID++);
        }
        get fillGradientStops() {
          return this._fillGradientStops;
        }
        set fillGradientStops(t) {
          Kc(this._fillGradientStops, t) ||
            ((this._fillGradientStops = t), this.styleID++);
        }
        get fontFamily() {
          return this._fontFamily;
        }
        set fontFamily(t) {
          this.fontFamily !== t && ((this._fontFamily = t), this.styleID++);
        }
        get fontSize() {
          return this._fontSize;
        }
        set fontSize(t) {
          this._fontSize !== t && ((this._fontSize = t), this.styleID++);
        }
        get fontStyle() {
          return this._fontStyle;
        }
        set fontStyle(t) {
          this._fontStyle !== t && ((this._fontStyle = t), this.styleID++);
        }
        get fontVariant() {
          return this._fontVariant;
        }
        set fontVariant(t) {
          this._fontVariant !== t && ((this._fontVariant = t), this.styleID++);
        }
        get fontWeight() {
          return this._fontWeight;
        }
        set fontWeight(t) {
          this._fontWeight !== t && ((this._fontWeight = t), this.styleID++);
        }
        get letterSpacing() {
          return this._letterSpacing;
        }
        set letterSpacing(t) {
          this._letterSpacing !== t &&
            ((this._letterSpacing = t), this.styleID++);
        }
        get lineHeight() {
          return this._lineHeight;
        }
        set lineHeight(t) {
          this._lineHeight !== t && ((this._lineHeight = t), this.styleID++);
        }
        get leading() {
          return this._leading;
        }
        set leading(t) {
          this._leading !== t && ((this._leading = t), this.styleID++);
        }
        get lineJoin() {
          return this._lineJoin;
        }
        set lineJoin(t) {
          this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
        }
        get miterLimit() {
          return this._miterLimit;
        }
        set miterLimit(t) {
          this._miterLimit !== t && ((this._miterLimit = t), this.styleID++);
        }
        get padding() {
          return this._padding;
        }
        set padding(t) {
          this._padding !== t && ((this._padding = t), this.styleID++);
        }
        get stroke() {
          return this._stroke;
        }
        set stroke(t) {
          const e = Fr(t);
          this._stroke !== e && ((this._stroke = e), this.styleID++);
        }
        get strokeThickness() {
          return this._strokeThickness;
        }
        set strokeThickness(t) {
          this._strokeThickness !== t &&
            ((this._strokeThickness = t), this.styleID++);
        }
        get textBaseline() {
          return this._textBaseline;
        }
        set textBaseline(t) {
          this._textBaseline !== t &&
            ((this._textBaseline = t), this.styleID++);
        }
        get trim() {
          return this._trim;
        }
        set trim(t) {
          this._trim !== t && ((this._trim = t), this.styleID++);
        }
        get whiteSpace() {
          return this._whiteSpace;
        }
        set whiteSpace(t) {
          this._whiteSpace !== t && ((this._whiteSpace = t), this.styleID++);
        }
        get wordWrap() {
          return this._wordWrap;
        }
        set wordWrap(t) {
          this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
        }
        get wordWrapWidth() {
          return this._wordWrapWidth;
        }
        set wordWrapWidth(t) {
          this._wordWrapWidth !== t &&
            ((this._wordWrapWidth = t), this.styleID++);
        }
        toFontString() {
          const t =
            typeof this.fontSize == "number"
              ? `${this.fontSize}px`
              : this.fontSize;
          let e = this.fontFamily;
          Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
          for (let s = e.length - 1; s >= 0; s--) {
            let i = e[s].trim();
            !/([\"\'])[^\'\"]+\1/.test(i) && !qc.includes(i) && (i = `"${i}"`),
              (e[s] = i);
          }
          return `${this.fontStyle} ${this.fontVariant} ${
            this.fontWeight
          } ${t} ${e.join(",")}`;
        }
      };
    to.defaultStyle = {
      align: "left",
      breakWords: !1,
      dropShadow: !1,
      dropShadowAlpha: 1,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 0,
      dropShadowColor: "black",
      dropShadowDistance: 5,
      fill: "black",
      fillGradientType: ci.LINEAR_VERTICAL,
      fillGradientStops: [],
      fontFamily: "Arial",
      fontSize: 26,
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      leading: 0,
      letterSpacing: 0,
      lineHeight: 0,
      lineJoin: "miter",
      miterLimit: 10,
      padding: 0,
      stroke: "black",
      strokeThickness: 0,
      textBaseline: "alphabetic",
      trim: !1,
      whiteSpace: "pre",
      wordWrap: !1,
      wordWrapWidth: 100,
    };
    let ce = to;
    function Fr(r) {
      const t = Q.shared,
        e = (s) => {
          const i = t.setValue(s);
          return i.alpha === 1 ? i.toHex() : i.toRgbaString();
        };
      return Array.isArray(r) ? r.map(e) : e(r);
    }
    function Kc(r, t) {
      if (!Array.isArray(r) || !Array.isArray(t) || r.length !== t.length)
        return !1;
      for (let e = 0; e < r.length; ++e) if (r[e] !== t[e]) return !1;
      return !0;
    }
    function kr(r, t, e) {
      for (const s in e)
        Array.isArray(t[s]) ? (r[s] = t[s].slice()) : (r[s] = t[s]);
    }
    const Jc = { texture: !0, children: !1, baseTexture: !0 },
      eo = class fn extends oe {
        constructor(t, e, s) {
          let i = !1;
          s || ((s = N.ADAPTER.createCanvas()), (i = !0)),
            (s.width = 3),
            (s.height = 3);
          const n = L.from(s);
          (n.orig = new W()),
            (n.trim = new W()),
            super(n),
            (this._ownCanvas = i),
            (this.canvas = s),
            (this.context = s.getContext("2d", { willReadFrequently: !0 })),
            (this._resolution = fn.defaultResolution ?? N.RESOLUTION),
            (this._autoResolution = fn.defaultAutoResolution),
            (this._text = null),
            (this._style = null),
            (this._styleListener = null),
            (this._font = ""),
            (this.text = t),
            (this.style = e),
            (this.localStyleID = -1);
        }
        static get experimentalLetterSpacing() {
          return ue.experimentalLetterSpacing;
        }
        static set experimentalLetterSpacing(t) {
          V(
            "7.1.0",
            "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"
          ),
            (ue.experimentalLetterSpacing = t);
        }
        updateText(t) {
          const e = this._style;
          if (
            (this.localStyleID !== e.styleID &&
              ((this.dirty = !0), (this.localStyleID = e.styleID)),
            !this.dirty && t)
          )
            return;
          this._font = this._style.toFontString();
          const s = this.context,
            i = ue.measureText(
              this._text || " ",
              this._style,
              this._style.wordWrap,
              this.canvas
            ),
            n = i.width,
            a = i.height,
            o = i.lines,
            h = i.lineHeight,
            l = i.lineWidths,
            u = i.maxLineWidth,
            c = i.fontProperties;
          (this.canvas.width = Math.ceil(
            Math.ceil(Math.max(1, n) + e.padding * 2) * this._resolution
          )),
            (this.canvas.height = Math.ceil(
              Math.ceil(Math.max(1, a) + e.padding * 2) * this._resolution
            )),
            s.scale(this._resolution, this._resolution),
            s.clearRect(0, 0, this.canvas.width, this.canvas.height),
            (s.font = this._font),
            (s.lineWidth = e.strokeThickness),
            (s.textBaseline = e.textBaseline),
            (s.lineJoin = e.lineJoin),
            (s.miterLimit = e.miterLimit);
          let d, p;
          const f = e.dropShadow ? 2 : 1;
          for (let m = 0; m < f; ++m) {
            const g = e.dropShadow && m === 0,
              _ = g ? Math.ceil(Math.max(1, a) + e.padding * 2) : 0,
              v = _ * this._resolution;
            if (g) {
              (s.fillStyle = "black"), (s.strokeStyle = "black");
              const x = e.dropShadowColor,
                A = e.dropShadowBlur * this._resolution,
                w = e.dropShadowDistance * this._resolution;
              (s.shadowColor = Q.shared
                .setValue(x)
                .setAlpha(e.dropShadowAlpha)
                .toRgbaString()),
                (s.shadowBlur = A),
                (s.shadowOffsetX = Math.cos(e.dropShadowAngle) * w),
                (s.shadowOffsetY = Math.sin(e.dropShadowAngle) * w + v);
            } else
              (s.fillStyle = this._generateFillStyle(e, o, i)),
                (s.strokeStyle = e.stroke),
                (s.shadowColor = "black"),
                (s.shadowBlur = 0),
                (s.shadowOffsetX = 0),
                (s.shadowOffsetY = 0);
            let y = (h - c.fontSize) / 2;
            h - c.fontSize < 0 && (y = 0);
            for (let x = 0; x < o.length; x++)
              (d = e.strokeThickness / 2),
                (p = e.strokeThickness / 2 + x * h + c.ascent + y),
                e.align === "right"
                  ? (d += u - l[x])
                  : e.align === "center" && (d += (u - l[x]) / 2),
                e.stroke &&
                  e.strokeThickness &&
                  this.drawLetterSpacing(
                    o[x],
                    d + e.padding,
                    p + e.padding - _,
                    !0
                  ),
                e.fill &&
                  this.drawLetterSpacing(
                    o[x],
                    d + e.padding,
                    p + e.padding - _
                  );
          }
          this.updateTexture();
        }
        drawLetterSpacing(t, e, s, i = !1) {
          const n = this._style.letterSpacing;
          let a = !1;
          if (
            (ue.experimentalLetterSpacingSupported &&
              (ue.experimentalLetterSpacing
                ? ((this.context.letterSpacing = `${n}px`),
                  (this.context.textLetterSpacing = `${n}px`),
                  (a = !0))
                : ((this.context.letterSpacing = "0px"),
                  (this.context.textLetterSpacing = "0px"))),
            n === 0 || a)
          ) {
            i
              ? this.context.strokeText(t, e, s)
              : this.context.fillText(t, e, s);
            return;
          }
          let o = e;
          const h = ue.graphemeSegmenter(t);
          let l = this.context.measureText(t).width,
            u = 0;
          for (let c = 0; c < h.length; ++c) {
            const d = h[c];
            i
              ? this.context.strokeText(d, o, s)
              : this.context.fillText(d, o, s);
            let p = "";
            for (let f = c + 1; f < h.length; ++f) p += h[f];
            (u = this.context.measureText(p).width), (o += l - u + n), (l = u);
          }
        }
        updateTexture() {
          const t = this.canvas;
          if (this._style.trim) {
            const a = gh(t);
            a.data &&
              ((t.width = a.width),
              (t.height = a.height),
              this.context.putImageData(a.data, 0, 0));
          }
          const e = this._texture,
            s = this._style,
            i = s.trim ? 0 : s.padding,
            n = e.baseTexture;
          (e.trim.width = e._frame.width = t.width / this._resolution),
            (e.trim.height = e._frame.height = t.height / this._resolution),
            (e.trim.x = -i),
            (e.trim.y = -i),
            (e.orig.width = e._frame.width - i * 2),
            (e.orig.height = e._frame.height - i * 2),
            this._onTextureUpdate(),
            n.setRealSize(t.width, t.height, this._resolution),
            e.updateUvs(),
            (this.dirty = !1);
        }
        _render(t) {
          this._autoResolution &&
            this._resolution !== t.resolution &&
            ((this._resolution = t.resolution), (this.dirty = !0)),
            this.updateText(!0),
            super._render(t);
        }
        updateTransform() {
          this.updateText(!0), super.updateTransform();
        }
        getBounds(t, e) {
          return (
            this.updateText(!0),
            this._textureID === -1 && (t = !1),
            super.getBounds(t, e)
          );
        }
        getLocalBounds(t) {
          return this.updateText(!0), super.getLocalBounds.call(this, t);
        }
        _calculateBounds() {
          this.calculateVertices(), this._bounds.addQuad(this.vertexData);
        }
        _generateFillStyle(t, e, s) {
          const i = t.fill;
          if (Array.isArray(i)) {
            if (i.length === 1) return i[0];
          } else return i;
          let n;
          const a = t.dropShadow ? t.dropShadowDistance : 0,
            o = t.padding || 0,
            h = this.canvas.width / this._resolution - a - o * 2,
            l = this.canvas.height / this._resolution - a - o * 2,
            u = i.slice(),
            c = t.fillGradientStops.slice();
          if (!c.length) {
            const d = u.length + 1;
            for (let p = 1; p < d; ++p) c.push(p / d);
          }
          if (
            (u.unshift(i[0]),
            c.unshift(0),
            u.push(i[i.length - 1]),
            c.push(1),
            t.fillGradientType === ci.LINEAR_VERTICAL)
          ) {
            n = this.context.createLinearGradient(h / 2, o, h / 2, l + o);
            const d = s.fontProperties.fontSize + t.strokeThickness;
            for (let p = 0; p < e.length; p++) {
              const f = s.lineHeight * (p - 1) + d,
                m = s.lineHeight * p;
              let g = m;
              p > 0 && f > m && (g = (m + f) / 2);
              const _ = m + d,
                v = s.lineHeight * (p + 1);
              let y = _;
              p + 1 < e.length && v < _ && (y = (_ + v) / 2);
              const x = (y - g) / l;
              for (let A = 0; A < u.length; A++) {
                let w = 0;
                typeof c[A] == "number" ? (w = c[A]) : (w = A / u.length);
                let b = Math.min(1, Math.max(0, g / l + w * x));
                (b = Number(b.toFixed(5))), n.addColorStop(b, u[A]);
              }
            }
          } else {
            n = this.context.createLinearGradient(o, l / 2, h + o, l / 2);
            const d = u.length + 1;
            let p = 1;
            for (let f = 0; f < u.length; f++) {
              let m;
              typeof c[f] == "number" ? (m = c[f]) : (m = p / d),
                n.addColorStop(m, u[f]),
                p++;
            }
          }
          return n;
        }
        destroy(t) {
          typeof t == "boolean" && (t = { children: t }),
            (t = Object.assign({}, Jc, t)),
            super.destroy(t),
            this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
            (this.context = null),
            (this.canvas = null),
            (this._style = null);
        }
        get width() {
          return (
            this.updateText(!0),
            Math.abs(this.scale.x) * this._texture.orig.width
          );
        }
        set width(t) {
          this.updateText(!0);
          const e = re(this.scale.x) || 1;
          (this.scale.x = (e * t) / this._texture.orig.width),
            (this._width = t);
        }
        get height() {
          return (
            this.updateText(!0),
            Math.abs(this.scale.y) * this._texture.orig.height
          );
        }
        set height(t) {
          this.updateText(!0);
          const e = re(this.scale.y) || 1;
          (this.scale.y = (e * t) / this._texture.orig.height),
            (this._height = t);
        }
        get style() {
          return this._style;
        }
        set style(t) {
          (t = t || {}),
            t instanceof ce ? (this._style = t) : (this._style = new ce(t)),
            (this.localStyleID = -1),
            (this.dirty = !0);
        }
        get text() {
          return this._text;
        }
        set text(t) {
          (t = String(t ?? "")),
            this._text !== t && ((this._text = t), (this.dirty = !0));
        }
        get resolution() {
          return this._resolution;
        }
        set resolution(t) {
          (this._autoResolution = !1),
            this._resolution !== t &&
              ((this._resolution = t), (this.dirty = !0));
        }
      };
    eo.defaultAutoResolution = !0;
    let so = eo;
    class Zc {
      constructor(t) {
        (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
      }
      beginFrame() {
        this.itemsLeft = this.maxItemsPerFrame;
      }
      allowedToUpload() {
        return this.itemsLeft-- > 0;
      }
    }
    function Qc(r, t) {
      var s;
      let e = !1;
      if ((s = r == null ? void 0 : r._textures) != null && s.length) {
        for (let i = 0; i < r._textures.length; i++)
          if (r._textures[i] instanceof L) {
            const n = r._textures[i].baseTexture;
            t.includes(n) || (t.push(n), (e = !0));
          }
      }
      return e;
    }
    function td(r, t) {
      if (r.baseTexture instanceof $) {
        const e = r.baseTexture;
        return t.includes(e) || t.push(e), !0;
      }
      return !1;
    }
    function ed(r, t) {
      if (r._texture && r._texture instanceof L) {
        const e = r._texture.baseTexture;
        return t.includes(e) || t.push(e), !0;
      }
      return !1;
    }
    function sd(r, t) {
      return t instanceof so ? (t.updateText(!0), !0) : !1;
    }
    function id(r, t) {
      if (t instanceof ce) {
        const e = t.toFontString();
        return ue.measureFont(e), !0;
      }
      return !1;
    }
    function rd(r, t) {
      if (r instanceof so) {
        t.includes(r.style) || t.push(r.style), t.includes(r) || t.push(r);
        const e = r._texture.baseTexture;
        return t.includes(e) || t.push(e), !0;
      }
      return !1;
    }
    function nd(r, t) {
      return r instanceof ce ? (t.includes(r) || t.push(r), !0) : !1;
    }
    const io = class ih {
      constructor(t) {
        (this.limiter = new Zc(ih.uploadsPerFrame)),
          (this.renderer = t),
          (this.uploadHookHelper = null),
          (this.queue = []),
          (this.addHooks = []),
          (this.uploadHooks = []),
          (this.completes = []),
          (this.ticking = !1),
          (this.delayedTick = () => {
            this.queue && this.prepareItems();
          }),
          this.registerFindHook(rd),
          this.registerFindHook(nd),
          this.registerFindHook(Qc),
          this.registerFindHook(td),
          this.registerFindHook(ed),
          this.registerUploadHook(sd),
          this.registerUploadHook(id);
      }
      upload(t) {
        return new Promise((e) => {
          t && this.add(t),
            this.queue.length
              ? (this.completes.push(e),
                this.ticking ||
                  ((this.ticking = !0),
                  xt.system.addOnce(this.tick, this, Se.UTILITY)))
              : e();
        });
      }
      tick() {
        setTimeout(this.delayedTick, 0);
      }
      prepareItems() {
        for (
          this.limiter.beginFrame();
          this.queue.length && this.limiter.allowedToUpload();

        ) {
          const t = this.queue[0];
          let e = !1;
          if (t && !t._destroyed) {
            for (let s = 0, i = this.uploadHooks.length; s < i; s++)
              if (this.uploadHooks[s](this.uploadHookHelper, t)) {
                this.queue.shift(), (e = !0);
                break;
              }
          }
          e || this.queue.shift();
        }
        if (this.queue.length) xt.system.addOnce(this.tick, this, Se.UTILITY);
        else {
          this.ticking = !1;
          const t = this.completes.slice(0);
          this.completes.length = 0;
          for (let e = 0, s = t.length; e < s; e++) t[e]();
        }
      }
      registerFindHook(t) {
        return t && this.addHooks.push(t), this;
      }
      registerUploadHook(t) {
        return t && this.uploadHooks.push(t), this;
      }
      add(t) {
        for (
          let e = 0, s = this.addHooks.length;
          e < s && !this.addHooks[e](t, this.queue);
          e++
        );
        if (t instanceof yt)
          for (let e = t.children.length - 1; e >= 0; e--)
            this.add(t.children[e]);
        return this;
      }
      destroy() {
        this.ticking && xt.system.remove(this.tick, this),
          (this.ticking = !1),
          (this.addHooks = null),
          (this.uploadHooks = null),
          (this.renderer = null),
          (this.completes = null),
          (this.queue = null),
          (this.limiter = null),
          (this.uploadHookHelper = null);
      }
    };
    io.uploadsPerFrame = 4;
    let Ur = io;
    Object.defineProperties(N, {
      UPLOADS_PER_FRAME: {
        get() {
          return Ur.uploadsPerFrame;
        },
        set(r) {
          V(
            "7.1.0",
            "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"
          ),
            (Ur.uploadsPerFrame = r);
        },
      },
    });
    function ro(r, t) {
      return t instanceof $
        ? (t._glTextures[r.CONTEXT_UID] || r.texture.bind(t), !0)
        : !1;
    }
    function ad(r, t) {
      if (!(t instanceof je)) return !1;
      const { geometry: e } = t;
      t.finishPoly(), e.updateBatches();
      const { batches: s } = e;
      for (let i = 0; i < s.length; i++) {
        const { texture: n } = s[i].style;
        n && ro(r, n.baseTexture);
      }
      return e.batchable || r.geometry.bind(e, t._resolveDirectShader(r)), !0;
    }
    function od(r, t) {
      return r instanceof je ? (t.push(r), !0) : !1;
    }
    class no extends Ur {
      constructor(t) {
        super(t),
          (this.uploadHookHelper = this.renderer),
          this.registerFindHook(od),
          this.registerUploadHook(ro),
          this.registerUploadHook(ad);
      }
    }
    (no.extension = { name: "prepare", type: M.RendererSystem }), k.add(no);
    var hd = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,
      ld = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
      ud = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,
      ao = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
      cd = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
    const pi = new tt();
    class oo extends Vs {
      constructor(t) {
        super(t),
          t.runners.contextChange.add(this),
          (this.quad = new Gn()),
          (this.state = Mt.for2d());
      }
      contextChange() {
        const t = this.renderer,
          e = { globals: t.globalUniforms };
        (this.simpleShader = Lt.from(ao, cd, e)),
          (this.shader =
            t.context.webGLVersion > 1
              ? Lt.from(ld, hd, e)
              : Lt.from(ao, ud, e));
      }
      render(t) {
        const e = this.renderer,
          s = this.quad;
        let i = s.vertices;
        (i[0] = i[6] = t._width * -t.anchor.x),
          (i[1] = i[3] = t._height * -t.anchor.y),
          (i[2] = i[4] = t._width * (1 - t.anchor.x)),
          (i[5] = i[7] = t._height * (1 - t.anchor.y));
        const n = t.uvRespectAnchor ? t.anchor.x : 0,
          a = t.uvRespectAnchor ? t.anchor.y : 0;
        (i = s.uvs),
          (i[0] = i[6] = -n),
          (i[1] = i[3] = -a),
          (i[2] = i[4] = 1 - n),
          (i[5] = i[7] = 1 - a),
          s.invalidate();
        const o = t._texture,
          h = o.baseTexture,
          l = h.alphaMode > 0,
          u = t.tileTransform.localTransform,
          c = t.uvMatrix;
        let d =
          h.isPowerOfTwo &&
          o.frame.width === h.width &&
          o.frame.height === h.height;
        d &&
          (h._glTextures[e.CONTEXT_UID]
            ? (d = h.wrapMode !== ge.CLAMP)
            : h.wrapMode === ge.CLAMP && (h.wrapMode = ge.REPEAT));
        const p = d ? this.simpleShader : this.shader,
          f = o.width,
          m = o.height,
          g = t._width,
          _ = t._height;
        pi.set(
          (u.a * f) / g,
          (u.b * f) / _,
          (u.c * m) / g,
          (u.d * m) / _,
          u.tx / g,
          u.ty / _
        ),
          pi.invert(),
          d
            ? pi.prepend(c.mapCoord)
            : ((p.uniforms.uMapCoord = c.mapCoord.toArray(!0)),
              (p.uniforms.uClampFrame = c.uClampFrame),
              (p.uniforms.uClampOffset = c.uClampOffset)),
          (p.uniforms.uTransform = pi.toArray(!0)),
          (p.uniforms.uColor = Q.shared
            .setValue(t.tint)
            .premultiply(t.worldAlpha, l)
            .toArray(p.uniforms.uColor)),
          (p.uniforms.translationMatrix = t.transform.worldTransform.toArray(
            !0
          )),
          (p.uniforms.uSampler = o),
          e.shader.bind(p),
          e.geometry.bind(s),
          (this.state.blendMode = Wo(t.blendMode, l)),
          e.state.set(this.state),
          e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
      }
    }
    (oo.extension = { name: "tilingSprite", type: M.RendererPlugin }),
      k.add(oo);
    const ho = class Ds {
      constructor(t, e, s = null) {
        (this.linkedSheets = []),
          (this._texture = t instanceof L ? t : null),
          (this.baseTexture = t instanceof $ ? t : this._texture.baseTexture),
          (this.textures = {}),
          (this.animations = {}),
          (this.data = e);
        const i = this.baseTexture.resource;
        (this.resolution = this._updateResolution(s || (i ? i.url : null))),
          (this._frames = this.data.frames),
          (this._frameKeys = Object.keys(this._frames)),
          (this._batchIndex = 0),
          (this._callback = null);
      }
      _updateResolution(t = null) {
        const { scale: e } = this.data.meta;
        let s = Yt(t, null);
        return (
          s === null && (s = parseFloat(e ?? "1")),
          s !== 1 && this.baseTexture.setResolution(s),
          s
        );
      }
      parse() {
        return new Promise((t) => {
          (this._callback = t),
            (this._batchIndex = 0),
            this._frameKeys.length <= Ds.BATCH_SIZE
              ? (this._processFrames(0),
                this._processAnimations(),
                this._parseComplete())
              : this._nextBatch();
        });
      }
      _processFrames(t) {
        let e = t;
        const s = Ds.BATCH_SIZE;
        for (; e - t < s && e < this._frameKeys.length; ) {
          const i = this._frameKeys[e],
            n = this._frames[i],
            a = n.frame;
          if (a) {
            let o = null,
              h = null;
            const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame,
              u = new W(
                0,
                0,
                Math.floor(l.w) / this.resolution,
                Math.floor(l.h) / this.resolution
              );
            n.rotated
              ? (o = new W(
                  Math.floor(a.x) / this.resolution,
                  Math.floor(a.y) / this.resolution,
                  Math.floor(a.h) / this.resolution,
                  Math.floor(a.w) / this.resolution
                ))
              : (o = new W(
                  Math.floor(a.x) / this.resolution,
                  Math.floor(a.y) / this.resolution,
                  Math.floor(a.w) / this.resolution,
                  Math.floor(a.h) / this.resolution
                )),
              n.trimmed !== !1 &&
                n.spriteSourceSize &&
                (h = new W(
                  Math.floor(n.spriteSourceSize.x) / this.resolution,
                  Math.floor(n.spriteSourceSize.y) / this.resolution,
                  Math.floor(a.w) / this.resolution,
                  Math.floor(a.h) / this.resolution
                )),
              (this.textures[i] = new L(
                this.baseTexture,
                o,
                u,
                h,
                n.rotated ? 2 : 0,
                n.anchor,
                n.borders
              )),
              L.addToCache(this.textures[i], i.toString());
          }
          e++;
        }
      }
      _processAnimations() {
        const t = this.data.animations || {};
        for (const e in t) {
          this.animations[e] = [];
          for (let s = 0; s < t[e].length; s++) {
            const i = t[e][s];
            this.animations[e].push(this.textures[i]);
          }
        }
      }
      _parseComplete() {
        const t = this._callback;
        (this._callback = null),
          (this._batchIndex = 0),
          t.call(this, this.textures);
      }
      _nextBatch() {
        this._processFrames(this._batchIndex * Ds.BATCH_SIZE),
          this._batchIndex++,
          setTimeout(() => {
            this._batchIndex * Ds.BATCH_SIZE < this._frameKeys.length
              ? this._nextBatch()
              : (this._processAnimations(), this._parseComplete());
          }, 0);
      }
      destroy(t = !1) {
        var e;
        for (const s in this.textures) this.textures[s].destroy();
        (this._frames = null),
          (this._frameKeys = null),
          (this.data = null),
          (this.textures = null),
          t &&
            ((e = this._texture) == null || e.destroy(),
            this.baseTexture.destroy()),
          (this._texture = null),
          (this.baseTexture = null),
          (this.linkedSheets = []);
      }
    };
    ho.BATCH_SIZE = 1e3;
    let lo = ho;
    const dd = ["jpg", "png", "jpeg", "avif", "webp"];
    function uo(r, t, e) {
      const s = {};
      if (
        (r.forEach((i) => {
          s[i] = t;
        }),
        Object.keys(t.textures).forEach((i) => {
          s[i] = t.textures[i];
        }),
        !e)
      ) {
        const i = lt.dirname(r[0]);
        t.linkedSheets.forEach((n, a) => {
          const o = uo([`${i}/${t.data.meta.related_multi_packs[a]}`], n, !0);
          Object.assign(s, o);
        });
      }
      return s;
    }
    const pd = {
      extension: M.Asset,
      cache: {
        test: (r) => r instanceof lo,
        getCacheableAssets: (r, t) => uo(r, t, !1),
      },
      resolver: {
        test: (r) => {
          const t = r.split("?")[0].split("."),
            e = t.pop(),
            s = t.pop();
          return e === "json" && dd.includes(s);
        },
        parse: (r) => {
          var e;
          const t = r.split(".");
          return {
            resolution: parseFloat(
              ((e = N.RETINA_PREFIX.exec(r)) == null ? void 0 : e[1]) ?? "1"
            ),
            format: t[t.length - 2],
            src: r,
          };
        },
      },
      loader: {
        name: "spritesheetLoader",
        extension: { type: M.LoadParser, priority: Ft.Normal },
        async testParse(r, t) {
          return lt.extname(t.src).toLowerCase() === ".json" && !!r.frames;
        },
        async parse(r, t, e) {
          var h, l;
          let s = lt.dirname(t.src);
          s && s.lastIndexOf("/") !== s.length - 1 && (s += "/");
          let i = s + r.meta.image;
          i = Ar(i, t.src);
          const n = (await e.load([i]))[i],
            a = new lo(n.baseTexture, r, t.src);
          await a.parse();
          const o =
            (h = r == null ? void 0 : r.meta) == null
              ? void 0
              : h.related_multi_packs;
          if (Array.isArray(o)) {
            const u = [];
            for (const d of o) {
              if (typeof d != "string") continue;
              let p = s + d;
              ((l = t.data) != null && l.ignoreMultiPack) ||
                ((p = Ar(p, t.src)),
                u.push(e.load({ src: p, data: { ignoreMultiPack: !0 } })));
            }
            const c = await Promise.all(u);
            (a.linkedSheets = c),
              c.forEach((d) => {
                d.linkedSheets = [a].concat(
                  a.linkedSheets.filter((p) => p !== d)
                );
              });
          }
          return a;
        },
        unload(r) {
          r.destroy(!0);
        },
      },
    };
    k.add(pd);
    class fi {
      constructor() {
        (this.info = []),
          (this.common = []),
          (this.page = []),
          (this.char = []),
          (this.kerning = []),
          (this.distanceField = []);
      }
    }
    class mi {
      static test(t) {
        return typeof t == "string" && t.startsWith("info face=");
      }
      static parse(t) {
        const e = t.match(/^[a-z]+\s+.+$/gm),
          s = {
            info: [],
            common: [],
            page: [],
            char: [],
            chars: [],
            kerning: [],
            kernings: [],
            distanceField: [],
          };
        for (const n in e) {
          const a = e[n].match(/^[a-z]+/gm)[0],
            o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
            h = {};
          for (const l in o) {
            const u = o[l].split("="),
              c = u[0],
              d = u[1].replace(/"/gm, ""),
              p = parseFloat(d),
              f = isNaN(p) ? d : p;
            h[c] = f;
          }
          s[a].push(h);
        }
        const i = new fi();
        return (
          s.info.forEach((n) =>
            i.info.push({ face: n.face, size: parseInt(n.size, 10) })
          ),
          s.common.forEach((n) =>
            i.common.push({ lineHeight: parseInt(n.lineHeight, 10) })
          ),
          s.page.forEach((n) =>
            i.page.push({ id: parseInt(n.id, 10), file: n.file })
          ),
          s.char.forEach((n) =>
            i.char.push({
              id: parseInt(n.id, 10),
              page: parseInt(n.page, 10),
              x: parseInt(n.x, 10),
              y: parseInt(n.y, 10),
              width: parseInt(n.width, 10),
              height: parseInt(n.height, 10),
              xoffset: parseInt(n.xoffset, 10),
              yoffset: parseInt(n.yoffset, 10),
              xadvance: parseInt(n.xadvance, 10),
            })
          ),
          s.kerning.forEach((n) =>
            i.kerning.push({
              first: parseInt(n.first, 10),
              second: parseInt(n.second, 10),
              amount: parseInt(n.amount, 10),
            })
          ),
          s.distanceField.forEach((n) =>
            i.distanceField.push({
              distanceRange: parseInt(n.distanceRange, 10),
              fieldType: n.fieldType,
            })
          ),
          i
        );
      }
    }
    class Gr {
      static test(t) {
        const e = t;
        return (
          typeof t != "string" &&
          "getElementsByTagName" in t &&
          e.getElementsByTagName("page").length &&
          e.getElementsByTagName("info")[0].getAttribute("face") !== null
        );
      }
      static parse(t) {
        const e = new fi(),
          s = t.getElementsByTagName("info"),
          i = t.getElementsByTagName("common"),
          n = t.getElementsByTagName("page"),
          a = t.getElementsByTagName("char"),
          o = t.getElementsByTagName("kerning"),
          h = t.getElementsByTagName("distanceField");
        for (let l = 0; l < s.length; l++)
          e.info.push({
            face: s[l].getAttribute("face"),
            size: parseInt(s[l].getAttribute("size"), 10),
          });
        for (let l = 0; l < i.length; l++)
          e.common.push({
            lineHeight: parseInt(i[l].getAttribute("lineHeight"), 10),
          });
        for (let l = 0; l < n.length; l++)
          e.page.push({
            id: parseInt(n[l].getAttribute("id"), 10) || 0,
            file: n[l].getAttribute("file"),
          });
        for (let l = 0; l < a.length; l++) {
          const u = a[l];
          e.char.push({
            id: parseInt(u.getAttribute("id"), 10),
            page: parseInt(u.getAttribute("page"), 10) || 0,
            x: parseInt(u.getAttribute("x"), 10),
            y: parseInt(u.getAttribute("y"), 10),
            width: parseInt(u.getAttribute("width"), 10),
            height: parseInt(u.getAttribute("height"), 10),
            xoffset: parseInt(u.getAttribute("xoffset"), 10),
            yoffset: parseInt(u.getAttribute("yoffset"), 10),
            xadvance: parseInt(u.getAttribute("xadvance"), 10),
          });
        }
        for (let l = 0; l < o.length; l++)
          e.kerning.push({
            first: parseInt(o[l].getAttribute("first"), 10),
            second: parseInt(o[l].getAttribute("second"), 10),
            amount: parseInt(o[l].getAttribute("amount"), 10),
          });
        for (let l = 0; l < h.length; l++)
          e.distanceField.push({
            fieldType: h[l].getAttribute("fieldType"),
            distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10),
          });
        return e;
      }
    }
    class Hr {
      static test(t) {
        return typeof t == "string" && t.includes("<font>")
          ? Gr.test(N.ADAPTER.parseXML(t))
          : !1;
      }
      static parse(t) {
        return Gr.parse(N.ADAPTER.parseXML(t));
      }
    }
    const zr = [mi, Gr, Hr];
    function fd(r) {
      for (let t = 0; t < zr.length; t++) if (zr[t].test(r)) return zr[t];
      return null;
    }
    function md(r, t, e, s, i, n) {
      const a = e.fill;
      if (Array.isArray(a)) {
        if (a.length === 1) return a[0];
      } else return a;
      let o;
      const h = e.dropShadow ? e.dropShadowDistance : 0,
        l = e.padding || 0,
        u = r.width / s - h - l * 2,
        c = r.height / s - h - l * 2,
        d = a.slice(),
        p = e.fillGradientStops.slice();
      if (!p.length) {
        const f = d.length + 1;
        for (let m = 1; m < f; ++m) p.push(m / f);
      }
      if (
        (d.unshift(a[0]),
        p.unshift(0),
        d.push(a[a.length - 1]),
        p.push(1),
        e.fillGradientType === ci.LINEAR_VERTICAL)
      ) {
        o = t.createLinearGradient(u / 2, l, u / 2, c + l);
        let f = 0;
        const m = (n.fontProperties.fontSize + e.strokeThickness) / c;
        for (let g = 0; g < i.length; g++) {
          const _ = n.lineHeight * g;
          for (let v = 0; v < d.length; v++) {
            let y = 0;
            typeof p[v] == "number" ? (y = p[v]) : (y = v / d.length);
            const x = _ / c + y * m;
            let A = Math.max(f, x);
            (A = Math.min(A, 1)), o.addColorStop(A, d[v]), (f = A);
          }
        }
      } else {
        o = t.createLinearGradient(l, c / 2, u + l, c / 2);
        const f = d.length + 1;
        let m = 1;
        for (let g = 0; g < d.length; g++) {
          let _;
          typeof p[g] == "number" ? (_ = p[g]) : (_ = m / f),
            o.addColorStop(_, d[g]),
            m++;
        }
      }
      return o;
    }
    function gd(r, t, e, s, i, n, a) {
      const o = e.text,
        h = e.fontProperties;
      t.translate(s, i), t.scale(n, n);
      const l = a.strokeThickness / 2,
        u = -(a.strokeThickness / 2);
      if (
        ((t.font = a.toFontString()),
        (t.lineWidth = a.strokeThickness),
        (t.textBaseline = a.textBaseline),
        (t.lineJoin = a.lineJoin),
        (t.miterLimit = a.miterLimit),
        (t.fillStyle = md(r, t, a, n, [o], e)),
        (t.strokeStyle = a.stroke),
        a.dropShadow)
      ) {
        const c = a.dropShadowColor,
          d = a.dropShadowBlur * n,
          p = a.dropShadowDistance * n;
        (t.shadowColor = Q.shared
          .setValue(c)
          .setAlpha(a.dropShadowAlpha)
          .toRgbaString()),
          (t.shadowBlur = d),
          (t.shadowOffsetX = Math.cos(a.dropShadowAngle) * p),
          (t.shadowOffsetY = Math.sin(a.dropShadowAngle) * p);
      } else
        (t.shadowColor = "black"),
          (t.shadowBlur = 0),
          (t.shadowOffsetX = 0),
          (t.shadowOffsetY = 0);
      a.stroke &&
        a.strokeThickness &&
        t.strokeText(o, l, u + e.lineHeight - h.descent),
        a.fill && t.fillText(o, l, u + e.lineHeight - h.descent),
        t.setTransform(1, 0, 0, 1, 0, 0),
        (t.fillStyle = "rgba(0, 0, 0, 0)");
    }
    function gi(r) {
      return r.codePointAt ? r.codePointAt(0) : r.charCodeAt(0);
    }
    function co(r) {
      return Array.from ? Array.from(r) : r.split("");
    }
    function _d(r) {
      typeof r == "string" && (r = [r]);
      const t = [];
      for (let e = 0, s = r.length; e < s; e++) {
        const i = r[e];
        if (Array.isArray(i)) {
          if (i.length !== 2)
            throw new Error(
              `[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`
            );
          const n = i[0].charCodeAt(0),
            a = i[1].charCodeAt(0);
          if (a < n) throw new Error("[BitmapFont]: Invalid character range.");
          for (let o = n, h = a; o <= h; o++) t.push(String.fromCharCode(o));
        } else t.push(...co(i));
      }
      if (t.length === 0)
        throw new Error("[BitmapFont]: Empty set when resolving characters.");
      return t;
    }
    const de = class jt {
      constructor(t, e, s) {
        var u;
        const [i] = t.info,
          [n] = t.common,
          [a] = t.page,
          [o] = t.distanceField,
          h = Yt(a.file),
          l = {};
        (this._ownsTextures = s),
          (this.font = i.face),
          (this.size = i.size),
          (this.lineHeight = n.lineHeight / h),
          (this.chars = {}),
          (this.pageTextures = l);
        for (let c = 0; c < t.page.length; c++) {
          const { id: d, file: p } = t.page[c];
          (l[d] = e instanceof Array ? e[c] : e[p]),
            o != null &&
              o.fieldType &&
              o.fieldType !== "none" &&
              ((l[d].baseTexture.alphaMode = Et.NO_PREMULTIPLIED_ALPHA),
              (l[d].baseTexture.mipmap = Qt.OFF));
        }
        for (let c = 0; c < t.char.length; c++) {
          const { id: d, page: p } = t.char[c];
          let {
            x: f,
            y: m,
            width: g,
            height: _,
            xoffset: v,
            yoffset: y,
            xadvance: x,
          } = t.char[c];
          (f /= h), (m /= h), (g /= h), (_ /= h), (v /= h), (y /= h), (x /= h);
          const A = new W(f + l[p].frame.x / h, m + l[p].frame.y / h, g, _);
          this.chars[d] = {
            xOffset: v,
            yOffset: y,
            xAdvance: x,
            kerning: {},
            texture: new L(l[p].baseTexture, A),
            page: p,
          };
        }
        for (let c = 0; c < t.kerning.length; c++) {
          let { first: d, second: p, amount: f } = t.kerning[c];
          (d /= h),
            (p /= h),
            (f /= h),
            this.chars[p] && (this.chars[p].kerning[d] = f);
        }
        (this.distanceFieldRange = o == null ? void 0 : o.distanceRange),
          (this.distanceFieldType =
            ((u = o == null ? void 0 : o.fieldType) == null
              ? void 0
              : u.toLowerCase()) ?? "none");
      }
      destroy() {
        for (const t in this.chars)
          this.chars[t].texture.destroy(), (this.chars[t].texture = null);
        for (const t in this.pageTextures)
          this._ownsTextures && this.pageTextures[t].destroy(!0),
            (this.pageTextures[t] = null);
        (this.chars = null), (this.pageTextures = null);
      }
      static install(t, e, s) {
        let i;
        if (t instanceof fi) i = t;
        else {
          const a = fd(t);
          if (!a) throw new Error("Unrecognized data format for font.");
          i = a.parse(t);
        }
        e instanceof L && (e = [e]);
        const n = new jt(i, e, s);
        return (jt.available[n.font] = n), n;
      }
      static uninstall(t) {
        const e = jt.available[t];
        if (!e) throw new Error(`No font found named '${t}'`);
        e.destroy(), delete jt.available[t];
      }
      static from(t, e, s) {
        if (!t) throw new Error("[BitmapFont] Property `name` is required.");
        const {
            chars: i,
            padding: n,
            resolution: a,
            textureWidth: o,
            textureHeight: h,
            ...l
          } = Object.assign({}, jt.defaultOptions, s),
          u = _d(i),
          c = e instanceof ce ? e : new ce(e),
          d = o,
          p = new fi();
        (p.info[0] = { face: c.fontFamily, size: c.fontSize }),
          (p.common[0] = { lineHeight: c.fontSize });
        let f = 0,
          m = 0,
          g,
          _,
          v,
          y = 0;
        const x = [];
        for (let w = 0; w < u.length; w++) {
          g ||
            ((g = N.ADAPTER.createCanvas()),
            (g.width = o),
            (g.height = h),
            (_ = g.getContext("2d")),
            (v = new $(g, { resolution: a, ...l })),
            x.push(new L(v)),
            p.page.push({ id: x.length - 1, file: "" }));
          const b = u[w],
            E = ue.measureText(b, c, !1, g),
            S = E.width,
            F = Math.ceil(E.height),
            K = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * S);
          if (m >= h - F * a) {
            if (m === 0)
              throw new Error(
                `[BitmapFont] textureHeight ${h}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${b}')`
              );
            --w, (g = null), (_ = null), (v = null), (m = 0), (f = 0), (y = 0);
            continue;
          }
          if (
            ((y = Math.max(F + E.fontProperties.descent, y)), K * a + f >= d)
          ) {
            if (f === 0)
              throw new Error(
                `[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${b}')`
              );
            --w, (m += y * a), (m = Math.ceil(m)), (f = 0), (y = 0);
            continue;
          }
          gd(g, _, E, f, m, a, c);
          const D = gi(E.text);
          p.char.push({
            id: D,
            page: x.length - 1,
            x: f / a,
            y: m / a,
            width: K,
            height: F,
            xoffset: 0,
            yoffset: 0,
            xadvance:
              S -
              (c.dropShadow ? c.dropShadowDistance : 0) -
              (c.stroke ? c.strokeThickness : 0),
          }),
            (f += (K + 2 * n) * a),
            (f = Math.ceil(f));
        }
        if (!(s != null && s.skipKerning))
          for (let w = 0, b = u.length; w < b; w++) {
            const E = u[w];
            for (let S = 0; S < b; S++) {
              const F = u[S],
                K = _.measureText(E).width,
                D = _.measureText(F).width,
                T = _.measureText(E + F).width - (K + D);
              T && p.kerning.push({ first: gi(E), second: gi(F), amount: T });
            }
          }
        const A = new jt(p, x, !0);
        return (
          jt.available[t] !== void 0 && jt.uninstall(t),
          (jt.available[t] = A),
          A
        );
      }
    };
    (de.ALPHA = [["a", "z"], ["A", "Z"], " "]),
      (de.NUMERIC = [["0", "9"]]),
      (de.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
      (de.ASCII = [[" ", "~"]]),
      (de.defaultOptions = {
        resolution: 1,
        textureWidth: 512,
        textureHeight: 512,
        padding: 4,
        chars: de.ALPHANUMERIC,
      }),
      (de.available = {});
    let pe = de;
    var xd = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`,
      yd = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
    const po = [],
      fo = [],
      mo = [],
      vd = class rh extends yt {
        constructor(t, e = {}) {
          super();
          const {
            align: s,
            tint: i,
            maxWidth: n,
            letterSpacing: a,
            fontName: o,
            fontSize: h,
          } = Object.assign({}, rh.styleDefaults, e);
          if (!pe.available[o]) throw new Error(`Missing BitmapFont "${o}"`);
          (this._activePagesMeshData = []),
            (this._textWidth = 0),
            (this._textHeight = 0),
            (this._align = s),
            (this._tintColor = new Q(i)),
            (this._font = void 0),
            (this._fontName = o),
            (this._fontSize = h),
            (this.text = t),
            (this._maxWidth = n),
            (this._maxLineHeight = 0),
            (this._letterSpacing = a),
            (this._anchor = new Kt(
              () => {
                this.dirty = !0;
              },
              this,
              0,
              0
            )),
            (this._roundPixels = N.ROUND_PIXELS),
            (this.dirty = !0),
            (this._resolution = N.RESOLUTION),
            (this._autoResolution = !0),
            (this._textureCache = {});
        }
        updateText() {
          var K;
          const t = pe.available[this._fontName],
            e = this.fontSize,
            s = e / t.size,
            i = new q(),
            n = [],
            a = [],
            o = [],
            h =
              this._text.replace(
                /(?:\r\n|\r)/g,
                `
`
              ) || " ",
            l = co(h),
            u = (this._maxWidth * t.size) / e,
            c = t.distanceFieldType === "none" ? po : fo;
          let d = null,
            p = 0,
            f = 0,
            m = 0,
            g = -1,
            _ = 0,
            v = 0,
            y = 0,
            x = 0;
          for (let D = 0; D < l.length; D++) {
            const T = l[D],
              R = gi(T);
            if (
              (/(?:\s)/.test(T) && ((g = D), (_ = p), x++),
              T === "\r" ||
                T ===
                  `
`)
            ) {
              a.push(p),
                o.push(-1),
                (f = Math.max(f, p)),
                ++m,
                ++v,
                (i.x = 0),
                (i.y += t.lineHeight),
                (d = null),
                (x = 0);
              continue;
            }
            const G = t.chars[R];
            if (!G) continue;
            d && G.kerning[d] && (i.x += G.kerning[d]);
            const J = mo.pop() || {
              texture: L.EMPTY,
              line: 0,
              charCode: 0,
              prevSpaces: 0,
              position: new q(),
            };
            (J.texture = G.texture),
              (J.line = m),
              (J.charCode = R),
              (J.position.x = Math.round(
                i.x + G.xOffset + this._letterSpacing / 2
              )),
              (J.position.y = Math.round(i.y + G.yOffset)),
              (J.prevSpaces = x),
              n.push(J),
              (p =
                J.position.x +
                Math.max(G.xAdvance - G.xOffset, G.texture.orig.width)),
              (i.x += G.xAdvance + this._letterSpacing),
              (y = Math.max(y, G.yOffset + G.texture.height)),
              (d = R),
              g !== -1 &&
                u > 0 &&
                i.x > u &&
                (++v,
                Fe(n, 1 + g - v, 1 + D - g),
                (D = g),
                (g = -1),
                a.push(_),
                o.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0),
                (f = Math.max(f, _)),
                m++,
                (i.x = 0),
                (i.y += t.lineHeight),
                (d = null),
                (x = 0));
          }
          const A = l[l.length - 1];
          A !== "\r" &&
            A !==
              `
` &&
            (/(?:\s)/.test(A) && (p = _),
            a.push(p),
            (f = Math.max(f, p)),
            o.push(-1));
          const w = [];
          for (let D = 0; D <= m; D++) {
            let T = 0;
            this._align === "right"
              ? (T = f - a[D])
              : this._align === "center"
              ? (T = (f - a[D]) / 2)
              : this._align === "justify" &&
                (T = o[D] < 0 ? 0 : (f - a[D]) / o[D]),
              w.push(T);
          }
          const b = n.length,
            E = {},
            S = [],
            F = this._activePagesMeshData;
          c.push(...F);
          for (let D = 0; D < b; D++) {
            const T = n[D].texture,
              R = T.baseTexture.uid;
            if (!E[R]) {
              let G = c.pop();
              if (!G) {
                const z = new Vc();
                let I, X;
                t.distanceFieldType === "none"
                  ? ((I = new Ja(L.EMPTY)), (X = j.NORMAL))
                  : ((I = new Ja(L.EMPTY, {
                      program: Xt.from(yd, xd),
                      uniforms: { uFWidth: 0 },
                    })),
                    (X = j.NORMAL_NPM));
                const Y = new Ka(z, I);
                (Y.blendMode = X),
                  (G = {
                    index: 0,
                    indexCount: 0,
                    vertexCount: 0,
                    uvsCount: 0,
                    total: 0,
                    mesh: Y,
                    vertices: null,
                    uvs: null,
                    indices: null,
                  });
              }
              (G.index = 0),
                (G.indexCount = 0),
                (G.vertexCount = 0),
                (G.uvsCount = 0),
                (G.total = 0);
              const { _textureCache: J } = this;
              (J[R] = J[R] || new L(T.baseTexture)),
                (G.mesh.texture = J[R]),
                (G.mesh.tint = this._tintColor.value),
                S.push(G),
                (E[R] = G);
            }
            E[R].total++;
          }
          for (let D = 0; D < F.length; D++)
            S.includes(F[D]) || this.removeChild(F[D].mesh);
          for (let D = 0; D < S.length; D++)
            S[D].mesh.parent !== this && this.addChild(S[D].mesh);
          this._activePagesMeshData = S;
          for (const D in E) {
            const T = E[D],
              R = T.total;
            if (
              !(((K = T.indices) == null ? void 0 : K.length) > 6 * R) ||
              T.vertices.length < Ka.BATCHABLE_SIZE * 2
            )
              (T.vertices = new Float32Array(4 * 2 * R)),
                (T.uvs = new Float32Array(4 * 2 * R)),
                (T.indices = new Uint16Array(6 * R));
            else {
              const G = T.total,
                J = T.vertices;
              for (let z = G * 4 * 2; z < J.length; z++) J[z] = 0;
            }
            T.mesh.size = 6 * R;
          }
          for (let D = 0; D < b; D++) {
            const T = n[D];
            let R =
              T.position.x +
              w[T.line] * (this._align === "justify" ? T.prevSpaces : 1);
            this._roundPixels && (R = Math.round(R));
            const G = R * s,
              J = T.position.y * s,
              z = T.texture,
              I = E[z.baseTexture.uid],
              X = z.frame,
              Y = z._uvs,
              H = I.index++;
            (I.indices[H * 6 + 0] = 0 + H * 4),
              (I.indices[H * 6 + 1] = 1 + H * 4),
              (I.indices[H * 6 + 2] = 2 + H * 4),
              (I.indices[H * 6 + 3] = 0 + H * 4),
              (I.indices[H * 6 + 4] = 2 + H * 4),
              (I.indices[H * 6 + 5] = 3 + H * 4),
              (I.vertices[H * 8 + 0] = G),
              (I.vertices[H * 8 + 1] = J),
              (I.vertices[H * 8 + 2] = G + X.width * s),
              (I.vertices[H * 8 + 3] = J),
              (I.vertices[H * 8 + 4] = G + X.width * s),
              (I.vertices[H * 8 + 5] = J + X.height * s),
              (I.vertices[H * 8 + 6] = G),
              (I.vertices[H * 8 + 7] = J + X.height * s),
              (I.uvs[H * 8 + 0] = Y.x0),
              (I.uvs[H * 8 + 1] = Y.y0),
              (I.uvs[H * 8 + 2] = Y.x1),
              (I.uvs[H * 8 + 3] = Y.y1),
              (I.uvs[H * 8 + 4] = Y.x2),
              (I.uvs[H * 8 + 5] = Y.y2),
              (I.uvs[H * 8 + 6] = Y.x3),
              (I.uvs[H * 8 + 7] = Y.y3);
          }
          (this._textWidth = f * s),
            (this._textHeight = (i.y + t.lineHeight) * s);
          for (const D in E) {
            const T = E[D];
            if (this.anchor.x !== 0 || this.anchor.y !== 0) {
              let z = 0;
              const I = this._textWidth * this.anchor.x,
                X = this._textHeight * this.anchor.y;
              for (let Y = 0; Y < T.total; Y++)
                (T.vertices[z++] -= I),
                  (T.vertices[z++] -= X),
                  (T.vertices[z++] -= I),
                  (T.vertices[z++] -= X),
                  (T.vertices[z++] -= I),
                  (T.vertices[z++] -= X),
                  (T.vertices[z++] -= I),
                  (T.vertices[z++] -= X);
            }
            this._maxLineHeight = y * s;
            const R = T.mesh.geometry.getBuffer("aVertexPosition"),
              G = T.mesh.geometry.getBuffer("aTextureCoord"),
              J = T.mesh.geometry.getIndex();
            (R.data = T.vertices),
              (G.data = T.uvs),
              (J.data = T.indices),
              R.update(),
              G.update(),
              J.update();
          }
          for (let D = 0; D < n.length; D++) mo.push(n[D]);
          (this._font = t), (this.dirty = !1);
        }
        updateTransform() {
          this.validate(), this.containerUpdateTransform();
        }
        _render(t) {
          this._autoResolution &&
            this._resolution !== t.resolution &&
            ((this._resolution = t.resolution), (this.dirty = !0));
          const {
            distanceFieldRange: e,
            distanceFieldType: s,
            size: i,
          } = pe.available[this._fontName];
          if (s !== "none") {
            const { a: n, b: a, c: o, d: h } = this.worldTransform,
              l = Math.sqrt(n * n + a * a),
              u = Math.sqrt(o * o + h * h),
              c = (Math.abs(l) + Math.abs(u)) / 2,
              d = this.fontSize / i,
              p = t._view.resolution;
            for (const f of this._activePagesMeshData)
              f.mesh.shader.uniforms.uFWidth = c * e * d * p;
          }
          super._render(t);
        }
        getLocalBounds() {
          return this.validate(), super.getLocalBounds();
        }
        validate() {
          const t = pe.available[this._fontName];
          if (!t) throw new Error(`Missing BitmapFont "${this._fontName}"`);
          this._font !== t && (this.dirty = !0),
            this.dirty && this.updateText();
        }
        get tint() {
          return this._tintColor.value;
        }
        set tint(t) {
          if (this.tint !== t) {
            this._tintColor.setValue(t);
            for (let e = 0; e < this._activePagesMeshData.length; e++)
              this._activePagesMeshData[e].mesh.tint = t;
          }
        }
        get align() {
          return this._align;
        }
        set align(t) {
          this._align !== t && ((this._align = t), (this.dirty = !0));
        }
        get fontName() {
          return this._fontName;
        }
        set fontName(t) {
          if (!pe.available[t]) throw new Error(`Missing BitmapFont "${t}"`);
          this._fontName !== t && ((this._fontName = t), (this.dirty = !0));
        }
        get fontSize() {
          return this._fontSize ?? pe.available[this._fontName].size;
        }
        set fontSize(t) {
          this._fontSize !== t && ((this._fontSize = t), (this.dirty = !0));
        }
        get anchor() {
          return this._anchor;
        }
        set anchor(t) {
          typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
        }
        get text() {
          return this._text;
        }
        set text(t) {
          (t = String(t ?? "")),
            this._text !== t && ((this._text = t), (this.dirty = !0));
        }
        get maxWidth() {
          return this._maxWidth;
        }
        set maxWidth(t) {
          this._maxWidth !== t && ((this._maxWidth = t), (this.dirty = !0));
        }
        get maxLineHeight() {
          return this.validate(), this._maxLineHeight;
        }
        get textWidth() {
          return this.validate(), this._textWidth;
        }
        get letterSpacing() {
          return this._letterSpacing;
        }
        set letterSpacing(t) {
          this._letterSpacing !== t &&
            ((this._letterSpacing = t), (this.dirty = !0));
        }
        get roundPixels() {
          return this._roundPixels;
        }
        set roundPixels(t) {
          t !== this._roundPixels &&
            ((this._roundPixels = t), (this.dirty = !0));
        }
        get textHeight() {
          return this.validate(), this._textHeight;
        }
        get resolution() {
          return this._resolution;
        }
        set resolution(t) {
          (this._autoResolution = !1),
            this._resolution !== t &&
              ((this._resolution = t), (this.dirty = !0));
        }
        destroy(t) {
          const { _textureCache: e } = this,
            s =
              pe.available[this._fontName].distanceFieldType === "none"
                ? po
                : fo;
          s.push(...this._activePagesMeshData);
          for (const i of this._activePagesMeshData) this.removeChild(i.mesh);
          (this._activePagesMeshData = []),
            s
              .filter((i) => e[i.mesh.texture.baseTexture.uid])
              .forEach((i) => {
                i.mesh.texture = L.EMPTY;
              });
          for (const i in e) e[i].destroy(), delete e[i];
          (this._font = null),
            (this._tintColor = null),
            (this._textureCache = null),
            super.destroy(t);
        }
      };
    vd.styleDefaults = {
      align: "left",
      tint: 16777215,
      maxWidth: 0,
      letterSpacing: 0,
    };
    const bd = [".xml", ".fnt"],
      Td = {
        extension: { type: M.LoadParser, priority: Ft.Normal },
        name: "loadBitmapFont",
        test(r) {
          return bd.includes(lt.extname(r).toLowerCase());
        },
        async testParse(r) {
          return mi.test(r) || Hr.test(r);
        },
        async parse(r, t, e) {
          const s = mi.test(r) ? mi.parse(r) : Hr.parse(r),
            { src: i } = t,
            { page: n } = s,
            a = [];
          for (let l = 0; l < n.length; ++l) {
            const u = n[l].file;
            let c = lt.join(lt.dirname(i), u);
            (c = Ar(c, i)), a.push(c);
          }
          const o = await e.load(a),
            h = a.map((l) => o[l]);
          return pe.install(s, h, !0);
        },
        async load(r, t) {
          return (await N.ADAPTER.fetch(r)).text();
        },
        unload(r) {
          r.destroy();
        },
      };
    k.add(Td);
    const Xr = class rs extends ce {
      constructor() {
        super(...arguments),
          (this._fonts = []),
          (this._overrides = []),
          (this._stylesheet = ""),
          (this.fontsDirty = !1);
      }
      static from(t) {
        return new rs(
          Object.keys(rs.defaultOptions).reduce(
            (e, s) => ({ ...e, [s]: t[s] }),
            {}
          )
        );
      }
      cleanFonts() {
        this._fonts.length > 0 &&
          (this._fonts.forEach((t) => {
            URL.revokeObjectURL(t.src),
              t.refs--,
              t.refs === 0 &&
                (t.fontFace && document.fonts.delete(t.fontFace),
                delete rs.availableFonts[t.originalUrl]);
          }),
          (this.fontFamily = "Arial"),
          (this._fonts.length = 0),
          this.styleID++,
          (this.fontsDirty = !0));
      }
      loadFont(t, e = {}) {
        const { availableFonts: s } = rs;
        if (s[t]) {
          const i = s[t];
          return (
            this._fonts.push(i),
            i.refs++,
            this.styleID++,
            (this.fontsDirty = !0),
            Promise.resolve()
          );
        }
        return N.ADAPTER.fetch(t)
          .then((i) => i.blob())
          .then(
            async (i) =>
              new Promise((n, a) => {
                const o = URL.createObjectURL(i),
                  h = new FileReader();
                (h.onload = () => n([o, h.result])),
                  (h.onerror = a),
                  h.readAsDataURL(i);
              })
          )
          .then(async ([i, n]) => {
            const a = Object.assign(
              {
                family: lt.basename(t, lt.extname(t)),
                weight: "normal",
                style: "normal",
                display: "auto",
                src: i,
                dataSrc: n,
                refs: 1,
                originalUrl: t,
                fontFace: null,
              },
              e
            );
            (s[t] = a), this._fonts.push(a), this.styleID++;
            const o = new FontFace(a.family, `url(${a.src})`, {
              weight: a.weight,
              style: a.style,
              display: a.display,
            });
            (a.fontFace = o),
              await o.load(),
              document.fonts.add(o),
              await document.fonts.ready,
              this.styleID++,
              (this.fontsDirty = !0);
          });
      }
      addOverride(...t) {
        const e = t.filter((s) => !this._overrides.includes(s));
        e.length > 0 && (this._overrides.push(...e), this.styleID++);
      }
      removeOverride(...t) {
        const e = t.filter((s) => this._overrides.includes(s));
        e.length > 0 &&
          ((this._overrides = this._overrides.filter((s) => !e.includes(s))),
          this.styleID++);
      }
      toCSS(t) {
        return [
          `transform: scale(${t})`,
          "transform-origin: top left",
          "display: inline-block",
          `color: ${this.normalizeColor(this.fill)}`,
          `font-size: ${this.fontSize}px`,
          `font-family: ${this.fontFamily}`,
          `font-weight: ${this.fontWeight}`,
          `font-style: ${this.fontStyle}`,
          `font-variant: ${this.fontVariant}`,
          `letter-spacing: ${this.letterSpacing}px`,
          `text-align: ${this.align}`,
          `padding: ${this.padding}px`,
          `white-space: ${this.whiteSpace}`,
          ...(this.lineHeight ? [`line-height: ${this.lineHeight}px`] : []),
          ...(this.wordWrap
            ? [
                `word-wrap: ${this.breakWords ? "break-all" : "break-word"}`,
                `max-width: ${this.wordWrapWidth}px`,
              ]
            : []),
          ...(this.strokeThickness
            ? [
                `-webkit-text-stroke-width: ${this.strokeThickness}px`,
                `-webkit-text-stroke-color: ${this.normalizeColor(
                  this.stroke
                )}`,
                `text-stroke-width: ${this.strokeThickness}px`,
                `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
                "paint-order: stroke",
              ]
            : []),
          ...(this.dropShadow ? [this.dropShadowToCSS()] : []),
          ...this._overrides,
        ].join(";");
      }
      toGlobalCSS() {
        return this._fonts.reduce(
          (t, e) => `${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style};
                font-display: ${e.display};
            }`,
          this._stylesheet
        );
      }
      get stylesheet() {
        return this._stylesheet;
      }
      set stylesheet(t) {
        this._stylesheet !== t && ((this._stylesheet = t), this.styleID++);
      }
      normalizeColor(t) {
        return (
          Array.isArray(t) && (t = ch(t)), typeof t == "number" ? uh(t) : t
        );
      }
      dropShadowToCSS() {
        let t = this.normalizeColor(this.dropShadowColor);
        const e = this.dropShadowAlpha,
          s = Math.round(
            Math.cos(this.dropShadowAngle) * this.dropShadowDistance
          ),
          i = Math.round(
            Math.sin(this.dropShadowAngle) * this.dropShadowDistance
          );
        t.startsWith("#") &&
          e < 1 &&
          (t += ((e * 255) | 0).toString(16).padStart(2, "0"));
        const n = `${s}px ${i}px`;
        return this.dropShadowBlur > 0
          ? `text-shadow: ${n} ${this.dropShadowBlur}px ${t}`
          : `text-shadow: ${n} ${t}`;
      }
      reset() {
        Object.assign(this, rs.defaultOptions);
      }
      onBeforeDraw() {
        const { fontsDirty: t } = this;
        return (
          (this.fontsDirty = !1),
          this.isSafari && this._fonts.length > 0 && t
            ? new Promise((e) => setTimeout(e, 100))
            : Promise.resolve()
        );
      }
      get isSafari() {
        const { userAgent: t } = N.ADAPTER.getNavigator();
        return /^((?!chrome|android).)*safari/i.test(t);
      }
      set fillGradientStops(t) {
        console.warn(
          "[HTMLTextStyle] fillGradientStops is not supported by HTMLText"
        );
      }
      get fillGradientStops() {
        return super.fillGradientStops;
      }
      set fillGradientType(t) {
        console.warn(
          "[HTMLTextStyle] fillGradientType is not supported by HTMLText"
        );
      }
      get fillGradientType() {
        return super.fillGradientType;
      }
      set miterLimit(t) {
        console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
      }
      get miterLimit() {
        return super.miterLimit;
      }
      set trim(t) {
        console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
      }
      get trim() {
        return super.trim;
      }
      set textBaseline(t) {
        console.warn(
          "[HTMLTextStyle] textBaseline is not supported by HTMLText"
        );
      }
      get textBaseline() {
        return super.textBaseline;
      }
      set leading(t) {
        console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
      }
      get leading() {
        return super.leading;
      }
      set lineJoin(t) {
        console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
      }
      get lineJoin() {
        return super.lineJoin;
      }
    };
    (Xr.availableFonts = {}),
      (Xr.defaultOptions = {
        align: "left",
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "black",
        dropShadowDistance: 5,
        fill: "black",
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        whiteSpace: "normal",
        wordWrap: !1,
        wordWrapWidth: 100,
      });
    let Vr = Xr;
    const _i = class ns extends oe {
      constructor(t = "", e = {}) {
        super(L.EMPTY),
          (this._text = null),
          (this._style = null),
          (this._autoResolution = !0),
          (this.localStyleID = -1),
          (this.dirty = !1),
          (this._updateID = 0),
          (this.ownsStyle = !1);
        const s = new Image(),
          i = L.from(s, {
            scaleMode: N.SCALE_MODE,
            resourceOptions: { autoLoad: !1 },
          });
        (i.orig = new W()), (i.trim = new W()), (this.texture = i);
        const n = "http://www.w3.org/2000/svg",
          a = "http://www.w3.org/1999/xhtml",
          o = document.createElementNS(n, "svg"),
          h = document.createElementNS(n, "foreignObject"),
          l = document.createElementNS(a, "div"),
          u = document.createElementNS(a, "style");
        h.setAttribute("width", "10000"),
          h.setAttribute("height", "10000"),
          (h.style.overflow = "hidden"),
          o.appendChild(h),
          (this.maxWidth = ns.defaultMaxWidth),
          (this.maxHeight = ns.defaultMaxHeight),
          (this._domElement = l),
          (this._styleElement = u),
          (this._svgRoot = o),
          (this._foreignObject = h),
          this._foreignObject.appendChild(u),
          this._foreignObject.appendChild(l),
          (this._image = s),
          (this._loadImage = new Image()),
          (this._autoResolution = ns.defaultAutoResolution),
          (this._resolution = ns.defaultResolution ?? N.RESOLUTION),
          (this.text = t),
          (this.style = e);
      }
      measureText(t) {
        var u, c;
        const {
          text: e,
          style: s,
          resolution: i,
        } = Object.assign(
          {
            text: this._text,
            style: this._style,
            resolution: this._resolution,
          },
          t
        );
        Object.assign(this._domElement, { innerHTML: e, style: s.toCSS(i) }),
          (this._styleElement.textContent = s.toGlobalCSS()),
          document.body.appendChild(this._svgRoot);
        const n = this._domElement.getBoundingClientRect();
        this._svgRoot.remove();
        const { width: a, height: o } = n;
        (a > this.maxWidth || o > this.maxHeight) &&
          console.warn(
            "[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property."
          );
        const h = Math.min(this.maxWidth, Math.ceil(a)),
          l = Math.min(this.maxHeight, Math.ceil(o));
        return (
          this._svgRoot.setAttribute("width", h.toString()),
          this._svgRoot.setAttribute("height", l.toString()),
          e !== this._text && (this._domElement.innerHTML = this._text),
          s !== this._style &&
            (Object.assign(this._domElement, {
              style: (u = this._style) == null ? void 0 : u.toCSS(i),
            }),
            (this._styleElement.textContent =
              (c = this._style) == null ? void 0 : c.toGlobalCSS())),
          { width: h + s.padding * 2, height: l + s.padding * 2 }
        );
      }
      async updateText(t = !0) {
        const { style: e, _image: s, _loadImage: i } = this;
        if (
          (this.localStyleID !== e.styleID &&
            ((this.dirty = !0), (this.localStyleID = e.styleID)),
          !this.dirty && t)
        )
          return;
        const { width: n, height: a } = this.measureText();
        (s.width = i.width = Math.ceil(Math.max(1, n))),
          (s.height = i.height = Math.ceil(Math.max(1, a))),
          this._updateID++;
        const o = this._updateID;
        await new Promise((h) => {
          i.onload = async () => {
            if (o < this._updateID) {
              h();
              return;
            }
            await e.onBeforeDraw(),
              (s.src = i.src),
              (i.onload = null),
              (i.src = ""),
              this.updateTexture(),
              h();
          };
          const l = new XMLSerializer().serializeToString(this._svgRoot);
          i.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(l)}`;
        });
      }
      get source() {
        return this._image;
      }
      updateTexture() {
        const { style: t, texture: e, _image: s, resolution: i } = this,
          { padding: n } = t,
          { baseTexture: a } = e;
        (e.trim.width = e._frame.width = s.width / i),
          (e.trim.height = e._frame.height = s.height / i),
          (e.trim.x = -n),
          (e.trim.y = -n),
          (e.orig.width = e._frame.width - n * 2),
          (e.orig.height = e._frame.height - n * 2),
          this._onTextureUpdate(),
          a.setRealSize(s.width, s.height, i),
          (this.dirty = !1);
      }
      _render(t) {
        this._autoResolution &&
          this._resolution !== t.resolution &&
          ((this._resolution = t.resolution), (this.dirty = !0)),
          this.updateText(!0),
          super._render(t);
      }
      _renderCanvas(t) {
        this._autoResolution &&
          this._resolution !== t.resolution &&
          ((this._resolution = t.resolution), (this.dirty = !0)),
          this.updateText(!0),
          super._renderCanvas(t);
      }
      getLocalBounds(t) {
        return this.updateText(!0), super.getLocalBounds(t);
      }
      _calculateBounds() {
        this.updateText(!0),
          this.calculateVertices(),
          this._bounds.addQuad(this.vertexData);
      }
      _onStyleChange() {
        this.dirty = !0;
      }
      destroy(t) {
        var s, i, n, a, o;
        typeof t == "boolean" && (t = { children: t }),
          (t = Object.assign({}, ns.defaultDestroyOptions, t)),
          super.destroy(t);
        const e = null;
        this.ownsStyle && ((s = this._style) == null || s.cleanFonts()),
          (this._style = e),
          (i = this._svgRoot) == null || i.remove(),
          (this._svgRoot = e),
          (n = this._domElement) == null || n.remove(),
          (this._domElement = e),
          (a = this._foreignObject) == null || a.remove(),
          (this._foreignObject = e),
          (o = this._styleElement) == null || o.remove(),
          (this._styleElement = e),
          (this._loadImage.src = ""),
          (this._loadImage.onload = null),
          (this._loadImage = e),
          (this._image.src = ""),
          (this._image = e);
      }
      get width() {
        return (
          this.updateText(!0),
          (Math.abs(this.scale.x) * this._image.width) / this.resolution
        );
      }
      set width(t) {
        this.updateText(!0);
        const e = re(this.scale.x) || 1;
        (this.scale.x = (e * t) / this._image.width / this.resolution),
          (this._width = t);
      }
      get height() {
        return (
          this.updateText(!0),
          (Math.abs(this.scale.y) * this._image.height) / this.resolution
        );
      }
      set height(t) {
        this.updateText(!0);
        const e = re(this.scale.y) || 1;
        (this.scale.y = (e * t) / this._image.height / this.resolution),
          (this._height = t);
      }
      get style() {
        return this._style;
      }
      set style(t) {
        this._style !== t &&
          ((t = t || {}),
          t instanceof Vr
            ? ((this.ownsStyle = !1), (this._style = t))
            : t instanceof ce
            ? (console.warn(
                "[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"
              ),
              (this.ownsStyle = !0),
              (this._style = Vr.from(t)))
            : ((this.ownsStyle = !0), (this._style = new Vr(t))),
          (this.localStyleID = -1),
          (this.dirty = !0));
      }
      get text() {
        return this._text;
      }
      set text(t) {
        (t = String(t === "" || t === null || t === void 0 ? " " : t)),
          (t = this.sanitiseText(t)),
          this._text !== t && ((this._text = t), (this.dirty = !0));
      }
      get resolution() {
        return this._resolution;
      }
      set resolution(t) {
        (this._autoResolution = !1),
          this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
      }
      sanitiseText(t) {
        return t
          .replace(/<br>/gi, "<br/>")
          .replace(/<hr>/gi, "<hr/>")
          .replace(/&nbsp;/gi, "&#160;");
      }
    };
    (_i.defaultDestroyOptions = { texture: !0, children: !1, baseTexture: !0 }),
      (_i.defaultMaxWidth = 2024),
      (_i.defaultMaxHeight = 2024),
      (_i.defaultAutoResolution = !0);
    let xi;
    (nn = ts(!1)), (xi = []);
    {
      const r = [];
      for (let e = 0; e < Uo.length; e++) {
        const s = e + 1,
          i = Uo[e],
          n = $.from(i.img);
        n.valid ||
          r.push(
            new Promise((a) => {
              n.once("update", a);
            })
          ),
          (xi[s] = n);
      }
      const t = new Image();
      r.push(
        new Promise((e) => {
          t.onload = () => e();
        })
      ),
        (t.src = Go),
        Promise.all(r).then(() => {
          nn.set(!0);
        });
    }
    const yi = 100;
    class ut extends ap {
      constructor(t, e, s, i, n, a, o) {
        super(s, e, i, n, a, o), (this.sprite = t);
      }
      static restore(t, e, s) {
        const i = sn(e),
          n = s.world.getCollider(t),
          a = n.parent(),
          o = ut.create_sprite(e, i, a.translation(), s),
          h = new ut(o, i, e, a, n, t, s);
        return s.fruits.set(t, h), h;
      }
      static create_sprite(t, e, s, i) {
        const n = xi[t],
          a = oe.from(n);
        return (
          a.scale.set(ut.SCALE),
          (a.x = s.x),
          (a.y = s.y),
          a.anchor.set(e.center.x, e.center.y),
          i.fruit_renderer.container.addChild(a),
          a
        );
      }
      static create(t, e, s) {
        const i = sn(t),
          n = ut.create_sprite(t, i, e, s),
          { rigidBody: a, collider: o } = ut.create_body(i, e, s),
          h = new ut(n, i, t, a, o, o.handle, s);
        return s.fruits.set(o.handle, h), h;
      }
      static create_mask(t) {
        const e = new je();
        return (
          t.addChild(e),
          e.scale.set(1 / yi),
          (e.blendMode = j.ERASE),
          (e.zIndex = 9999),
          e
        );
      }
      render() {
        const { x: t, y: e } = this.rigidBody.translation(),
          s = this.rigidBody.rotation();
        (this.sprite.x = t), (this.sprite.y = e), (this.sprite.rotation = s);
      }
      destroy() {
        super.destroy();
        let t = 0;
        const e = 4,
          s = this.sprite.width / 2,
          i = {
            x: this.sprite.x * yi,
            y: this.sprite.y * yi,
            r: 0,
            update: () => {
              if (t >= e) {
                this.context.fruit_renderer.holes.delete(this.handle),
                  this.sprite.destroy();
                return;
              }
              t++, (i.r = s * yi * (t / e));
            },
          };
        this.context.fruit_renderer.holes.set(this.handle, i);
      }
    }
    function go(r, t, e = 0.001) {
      return (
        this === t ||
        (Math.abs(r.a - t.a) < e &&
          Math.abs(r.b - t.b) < e &&
          Math.abs(r.c - t.c) < e &&
          Math.abs(r.d - t.d) < e &&
          Math.abs(r.tx - t.tx) < e &&
          Math.abs(r.ty - t.ty) < e)
      );
    }
    class Ed {
      constructor() {
        (this.textureIds = []),
          (this.matrices = []),
          (this.lines = []),
          (this.count = 0);
      }
      clear() {
        for (let t = 0; t < this.count; t++)
          (this.textureIds[t] = null), (this.matrices[t] = null);
        this.count = 0;
      }
      add(t, e, s, i, n, a) {
        const { textureIds: o, matrices: h, lines: l, count: u } = this;
        t = t * 4 + n;
        for (let c = 0; c < u; c++)
          if (l[c * 2] === s && l[c * 2 + 1] === i && o[c] === t && go(h[c], e))
            return c;
        return u >= a.maxStyles
          ? -1
          : ((o[u] = t),
            (h[u] = e),
            (l[u * 2] = s),
            (l[u * 2 + 1] = i),
            this.count++,
            u);
      }
    }
    class _o {
      constructor() {
        (this.texArray = new Xs()),
          (this.styleArray = new Ed()),
          (this.shader = null),
          (this.blend = j.NORMAL),
          (this.start = 0),
          (this.size = 0),
          (this.TICK = 0),
          (this.settings = null),
          (this.data = null);
      }
      clear() {
        this.texArray.clear(),
          this.styleArray.clear(),
          (this.settings = null),
          (this.data = null),
          (this.shader = null);
      }
      begin(t, e) {
        (this.TICK = ++$._globalBatch),
          (this.settings = t),
          (this.shader = e),
          (this.start = 0),
          (this.size = 0),
          (this.data = null),
          e && e.settings && (this.settings = e.settings);
      }
      check(t) {
        return this.size === 0 ? ((this.shader = t), !0) : this.shader === t;
      }
      add(t, e, s, i, n) {
        const { texArray: a, TICK: o, styleArray: h, settings: l } = this,
          { baseTexture: u } = t;
        if (u._batchEnabled !== o && a.count === l.maxTextures) return -1;
        const c = u._batchEnabled !== o ? a.count : u._batchLocation,
          d = h.add(c, e || tt.IDENTITY, s, i, n, l);
        return (
          d >= 0 &&
            u._batchEnabled !== o &&
            ((u._batchEnabled = o),
            (u._batchLocation = a.count),
            (a.elements[a.count++] = u)),
          d
        );
      }
    }
    class Ad {
      constructor() {
        this.reset();
      }
      begin(t, e, s) {
        this.reset(),
          (this.style = t),
          (this.start = e),
          (this.attribStart = s),
          (this.jointEnd = 0);
      }
      end(t, e) {
        (this.attribSize = e - this.attribStart), (this.size = t - this.start);
      }
      reset() {
        (this.style = null),
          (this.size = 0),
          (this.start = 0),
          (this.attribStart = 0),
          (this.attribSize = 0),
          (this.styleId = -1),
          (this.rgba = 0),
          (this.jointEnd = 0);
      }
    }
    class vi {
      constructor() {
        this.reset();
      }
      toJSON() {
        return this.copyTo({});
      }
      clone() {
        return this.copyTo(new vi());
      }
      copyTo(t) {
        return (
          (t.color = this.color),
          (t.alpha = this.alpha),
          (t.texture = this.texture),
          (t.matrix = this.matrix),
          (t.shader = this.shader),
          (t.visible = this.visible),
          (t.smooth = this.smooth),
          (t.matrixTex = null),
          t
        );
      }
      packLineScale() {
        return 0;
      }
      reset() {
        (this.color = 16777215),
          (this.alpha = 1),
          (this.texture = L.WHITE),
          (this.matrix = null),
          (this.shader = null),
          (this.visible = !1),
          (this.smooth = !1),
          (this.matrixTex = null);
      }
      destroy() {
        (this.texture = null), (this.matrix = null), (this.matrixTex = null);
      }
      getTextureMatrix() {
        const t = this.texture;
        return this.matrix
          ? t.frame.width === t.baseTexture.width &&
            t.frame.height === t.baseTexture.height
            ? this.matrix
            : (this.matrixTex
                ? this.matrixTex.copyFrom(this.matrix)
                : (this.matrixTex = this.matrix.clone()),
              this.matrixTex.translate(Number(t.frame.x), Number(t.frame.y)),
              this.matrixTex)
          : null;
      }
    }
    var Ye = ((r) => (
      (r.NONE = "none"),
      (r.NORMAL = "normal"),
      (r.HORIZONTAL = "horizontal"),
      (r.VERTICAL = "vertical"),
      r
    ))(Ye || {});
    class $r extends vi {
      clone() {
        return this.copyTo(new $r());
      }
      copyTo(t) {
        return (
          (t.color = this.color),
          (t.alpha = this.alpha),
          (t.texture = this.texture),
          (t.matrix = this.matrix),
          (t.shader = this.shader),
          (t.visible = this.visible),
          (t.width = this.width),
          (t.alignment = this.alignment),
          (t.cap = this.cap),
          (t.join = this.join),
          (t.miterLimit = this.miterLimit),
          (t.scaleMode = this.scaleMode),
          t
        );
      }
      packLineScale() {
        switch (this.scaleMode) {
          case "normal":
            return 1;
          case "horizontal":
            return 2;
          case "vertical":
            return 3;
          default:
            return 0;
        }
      }
      reset() {
        super.reset(),
          (this.smooth = !0),
          (this.color = 0),
          (this.width = 0),
          (this.alignment = 0.5),
          (this.cap = wt.BUTT),
          (this.join = pt.MITER),
          (this.miterLimit = 10),
          (this.scaleMode = "normal");
      }
    }
    class wd {
      constructor() {
        (this.verts = []),
          (this.joints = []),
          (this.vertexSize = 0),
          (this.indexSize = 0),
          (this.closePointEps = 1e-4);
      }
      clear() {
        (this.verts.length = 0),
          (this.joints.length = 0),
          (this.vertexSize = 0),
          (this.indexSize = 0);
      }
      destroy() {
        (this.verts.length = 0), (this.joints.length = 0);
      }
    }
    var P = ((r) => (
      (r[(r.NONE = 0)] = "NONE"),
      (r[(r.FILL = 1)] = "FILL"),
      (r[(r.JOINT_BEVEL = 4)] = "JOINT_BEVEL"),
      (r[(r.JOINT_MITER = 8)] = "JOINT_MITER"),
      (r[(r.JOINT_ROUND = 12)] = "JOINT_ROUND"),
      (r[(r.JOINT_CAP_BUTT = 16)] = "JOINT_CAP_BUTT"),
      (r[(r.JOINT_CAP_SQUARE = 18)] = "JOINT_CAP_SQUARE"),
      (r[(r.JOINT_CAP_ROUND = 20)] = "JOINT_CAP_ROUND"),
      (r[(r.FILL_EXPAND = 24)] = "FILL_EXPAND"),
      (r[(r.CAP_BUTT = 32)] = "CAP_BUTT"),
      (r[(r.CAP_SQUARE = 64)] = "CAP_SQUARE"),
      (r[(r.CAP_ROUND = 96)] = "CAP_ROUND"),
      (r[(r.CAP_BUTT2 = 128)] = "CAP_BUTT2"),
      r
    ))(P || {});
    const qe = class {
      constructor() {
        (this.strideFloats = 12), (this.bufferPos = 0), (this.indexPos = 0);
      }
      updateBufferSize(r, t, e, s) {
        const { joints: i } = s;
        let n = !1,
          a = 0,
          o = 0;
        for (let h = r; h < r + t; h++) {
          const l = i[h] & -32,
            u = i[h] & 31;
          if (u === P.FILL) {
            (n = !0), a++;
            continue;
          }
          if (u >= P.FILL_EXPAND) {
            (a += 3), (o += 3);
            continue;
          }
          const c = qe.vertsByJoint[u] + qe.vertsByJoint[l];
          c >= 4 && ((a += c), (o += 6 + 3 * Math.max(c - 6, 0)));
        }
        n && (o += e), (s.vertexSize += a), (s.indexSize += o);
      }
      beginPack(r, t, e, s, i = 0, n = 0) {
        (this.buildData = r),
          (this.bufFloat = t),
          (this.bufUint = e),
          (this.indices = s),
          (this.bufferPos = i),
          (this.indexPos = n);
      }
      endPack() {
        (this.buildData = null),
          (this.bufFloat = null),
          (this.bufUint = null),
          (this.indices = null);
      }
      packInterleavedGeometry(r, t, e, s, i) {
        const {
            bufFloat: n,
            bufUint: a,
            indices: o,
            buildData: h,
            strideFloats: l,
          } = this,
          { joints: u, verts: c } = h;
        let d = this.bufferPos,
          p = this.indexPos,
          f = this.bufferPos / this.strideFloats,
          m,
          g,
          _,
          v,
          y,
          x,
          A,
          w,
          b = !1,
          E = 0;
        for (let S = r; S < r + t; S++) {
          const F = u[S],
            K = u[S] & -32,
            D = u[S] & 31;
          if (D === P.FILL) {
            (b = !0),
              (m = c[S * 2]),
              (g = c[S * 2 + 1]),
              (n[d] = m),
              (n[d + 1] = g),
              (n[d + 2] = m),
              (n[d + 3] = g),
              (n[d + 4] = m),
              (n[d + 5] = g),
              (n[d + 6] = m),
              (n[d + 7] = g),
              (n[d + 8] = E),
              (n[d + 9] = 16 * D),
              (n[d + 10] = s),
              (a[d + 11] = i),
              (d += l);
            continue;
          }
          if (D >= P.FILL_EXPAND) {
            (y = c[S * 2]),
              (x = c[S * 2 + 1]),
              (m = c[S * 2 + 2]),
              (g = c[S * 2 + 3]),
              (_ = c[S * 2 + 4]),
              (v = c[S * 2 + 5]);
            const G = S + 3;
            for (let J = 0; J < 3; J++)
              (n[d] = y),
                (n[d + 1] = x),
                (n[d + 2] = m),
                (n[d + 3] = g),
                (n[d + 4] = _),
                (n[d + 5] = v),
                (n[d + 6] = c[(G + J) * 2]),
                (n[d + 7] = c[(G + J) * 2 + 1]),
                (n[d + 8] = E),
                (n[d + 9] = 16 * F + J),
                (n[d + 10] = s),
                (a[d + 11] = i),
                (d += l);
            (o[p] = f),
              (o[p + 1] = f + 1),
              (o[p + 2] = f + 2),
              (p += 3),
              (f += 3);
            continue;
          }
          const T = qe.vertsByJoint[D] + qe.vertsByJoint[K];
          if (T === 0) continue;
          (m = c[S * 2]),
            (g = c[S * 2 + 1]),
            (_ = c[S * 2 + 2]),
            (v = c[S * 2 + 3]),
            (y = c[S * 2 - 2]),
            (x = c[S * 2 - 1]);
          const R = Math.sqrt((_ - m) * (_ - m) + (v - g) * (v - g));
          qe.vertsByJoint[D] === 0 && (E -= R),
            (D & -3) !== P.JOINT_CAP_BUTT
              ? ((A = c[S * 2 + 4]), (w = c[S * 2 + 5]))
              : ((A = m), (w = g));
          for (let G = 0; G < T; G++)
            (n[d] = y),
              (n[d + 1] = x),
              (n[d + 2] = m),
              (n[d + 3] = g),
              (n[d + 4] = _),
              (n[d + 5] = v),
              (n[d + 6] = A),
              (n[d + 7] = w),
              (n[d + 8] = E),
              (n[d + 9] = 16 * F + G),
              (n[d + 10] = s),
              (a[d + 11] = i),
              (d += l);
          (E += R),
            (o[p] = f),
            (o[p + 1] = f + 1),
            (o[p + 2] = f + 2),
            (o[p + 3] = f),
            (o[p + 4] = f + 2),
            (o[p + 5] = f + 3),
            (p += 6);
          for (let G = 5; G + 1 < T; G++)
            (o[p] = f + 4),
              (o[p + 1] = f + G),
              (o[p + 2] = f + G + 1),
              (p += 3);
          f += T;
        }
        if (b) {
          for (let S = 0; S < e.length; S++) o[p + S] = e[S] + f;
          p += e.length;
        }
        (this.bufferPos = d), (this.indexPos = p);
      }
    };
    let Wr = qe;
    Wr.vertsByJoint = [];
    const nt = Wr.vertsByJoint;
    for (let r = 0; r < 256; r++) nt.push(0);
    nt[P.FILL] = 1;
    for (let r = 0; r < 8; r++) nt[P.FILL_EXPAND + r] = 3;
    (nt[P.JOINT_BEVEL] = 4 + 5),
      (nt[P.JOINT_BEVEL + 1] = 4 + 5),
      (nt[P.JOINT_BEVEL + 2] = 4 + 5),
      (nt[P.JOINT_BEVEL + 3] = 4 + 5),
      (nt[P.JOINT_ROUND] = 4 + 5),
      (nt[P.JOINT_ROUND + 1] = 4 + 5),
      (nt[P.JOINT_ROUND + 2] = 4 + 5),
      (nt[P.JOINT_ROUND + 3] = 4 + 5),
      (nt[P.JOINT_MITER] = 4 + 5),
      (nt[P.JOINT_MITER + 1] = 4 + 5),
      (nt[P.JOINT_MITER + 2] = 4),
      (nt[P.JOINT_MITER + 3] = 4),
      (nt[P.JOINT_CAP_BUTT] = 4),
      (nt[P.JOINT_CAP_BUTT + 1] = 4),
      (nt[P.JOINT_CAP_SQUARE] = 4),
      (nt[P.JOINT_CAP_SQUARE + 1] = 4),
      (nt[P.JOINT_CAP_ROUND] = 4 + 5),
      (nt[P.JOINT_CAP_ROUND + 1] = 4 + 5),
      (nt[P.CAP_ROUND] = 4);
    class bi {
      constructor(t, e = null, s = null, i = null) {
        (this.shape = t),
          (this.lineStyle = s),
          (this.fillStyle = e),
          (this.matrix = i),
          (this.type = t.type),
          (this.points = []),
          (this.holes = []),
          (this.triangles = []),
          (this.closeStroke = !1),
          this.clearBuild();
      }
      clearPath() {
        (this.points.length = 0), (this.closeStroke = !0);
      }
      clearBuild() {
        (this.triangles.length = 0),
          (this.fillStart = 0),
          (this.fillLen = 0),
          (this.strokeStart = 0),
          (this.strokeLen = 0),
          (this.fillAA = !1);
      }
      clone() {
        return new bi(this.shape, this.fillStyle, this.lineStyle, this.matrix);
      }
      capType() {
        let t;
        switch (this.lineStyle.cap) {
          case wt.SQUARE:
            t = P.CAP_SQUARE;
            break;
          case wt.ROUND:
            t = P.CAP_ROUND;
            break;
          default:
            t = P.CAP_BUTT;
            break;
        }
        return t;
      }
      goodJointType() {
        let t;
        switch (this.lineStyle.join) {
          case pt.BEVEL:
            t = P.JOINT_BEVEL;
            break;
          case pt.ROUND:
            t = P.JOINT_ROUND;
            break;
          default:
            t = P.JOINT_MITER + 3;
            break;
        }
        return t;
      }
      jointType() {
        let t;
        switch (this.lineStyle.join) {
          case pt.BEVEL:
            t = P.JOINT_BEVEL;
            break;
          case pt.ROUND:
            t = P.JOINT_ROUND;
            break;
          default:
            t = P.JOINT_MITER;
            break;
        }
        return t;
      }
      destroy() {
        (this.shape = null),
          (this.holes.length = 0),
          (this.holes = null),
          (this.points.length = 0),
          (this.points = null),
          (this.lineStyle = null),
          (this.fillStyle = null),
          (this.triangles = null);
      }
    }
    class jr {
      path(t, e) {
        const s = t.points;
        let i, n, a, o, h, l;
        if (t.type === Z.CIRC) {
          const g = t.shape;
          (i = g.x), (n = g.y), (h = l = g.radius), (a = o = 0);
        } else if (t.type === Z.ELIP) {
          const g = t.shape;
          (i = g.x), (n = g.y), (h = g.width), (l = g.height), (a = o = 0);
        } else {
          const g = t.shape,
            _ = g.width / 2,
            v = g.height / 2;
          (i = g.x + _),
            (n = g.y + v),
            (h = l = Math.max(0, Math.min(g.radius, Math.min(_, v)))),
            (a = _ - h),
            (o = v - l);
        }
        if (!(h >= 0 && l >= 0 && a >= 0 && o >= 0)) {
          s.length = 0;
          return;
        }
        const u = Math.ceil(2.3 * Math.sqrt(h + l)),
          c = u * 8 + (a ? 4 : 0) + (o ? 4 : 0);
        if (((s.length = c), c === 0)) return;
        if (u === 0) {
          (s.length = 8),
            (s[0] = s[6] = i + a),
            (s[1] = s[3] = n + o),
            (s[2] = s[4] = i - a),
            (s[5] = s[7] = n - o);
          return;
        }
        let d = 0,
          p = u * 4 + (a ? 2 : 0) + 2,
          f = p,
          m = c;
        {
          const g = a + h,
            _ = o,
            v = i + g,
            y = i - g,
            x = n + _;
          if (((s[d++] = v), (s[d++] = x), (s[--p] = x), (s[--p] = y), o)) {
            const A = n - _;
            (s[f++] = y), (s[f++] = A), (s[--m] = A), (s[--m] = v);
          }
        }
        for (let g = 1; g < u; g++) {
          const _ = (Math.PI / 2) * (g / u),
            v = a + Math.cos(_) * h,
            y = o + Math.sin(_) * l,
            x = i + v,
            A = i - v,
            w = n + y,
            b = n - y;
          (s[d++] = x),
            (s[d++] = w),
            (s[--p] = w),
            (s[--p] = A),
            (s[f++] = A),
            (s[f++] = b),
            (s[--m] = b),
            (s[--m] = x);
        }
        {
          const g = a,
            _ = o + l,
            v = i + g,
            y = i - g,
            x = n + _,
            A = n - _;
          (s[d++] = v),
            (s[d++] = x),
            (s[--m] = A),
            (s[--m] = v),
            a && ((s[d++] = y), (s[d++] = x), (s[--m] = A), (s[--m] = y));
        }
      }
      fill(t, e) {
        const { verts: s, joints: i } = e,
          { points: n, triangles: a } = t;
        if (n.length === 0) return;
        let o, h;
        if (t.type !== Z.RREC) {
          const w = t.shape;
          (o = w.x), (h = w.y);
        } else {
          const w = t.shape;
          (o = w.x + w.width / 2), (h = w.y + w.height / 2);
        }
        const l = t.matrix,
          u = l ? l.a * o + l.c * h + l.tx : o,
          c = l ? l.b * o + l.d * h + l.ty : h;
        let d = 1;
        const p = 0;
        if (!t.fillAA) {
          s.push(u, c), i.push(P.FILL), s.push(n[0], n[1]), i.push(P.FILL);
          for (let w = 2; w < n.length; w += 2)
            s.push(n[w], n[w + 1]), i.push(P.FILL), a.push(d++, p, d);
          a.push(p + 1, p, d);
          return;
        }
        const f = n.length;
        let m = n[f - 2],
          g = n[f - 1],
          _ = g - n[f - 3],
          v = n[f - 4] - m;
        const y = Math.sqrt(_ * _ + v * v);
        (_ /= y), (v /= y);
        let x, A;
        for (let w = 0; w < f; w += 2) {
          const b = n[w],
            E = n[w + 1];
          let S = E - g,
            F = m - b;
          const K = Math.sqrt(S * S + F * F);
          (S /= K), (F /= K);
          let D = _ + S,
            T = v + F;
          const R = S * D + F * T;
          (D /= R),
            (T /= R),
            w > 0 ? (s.push(D), s.push(T)) : ((x = D), (A = T)),
            s.push(u),
            s.push(c),
            s.push(m),
            s.push(g),
            s.push(b),
            s.push(E),
            s.push(0),
            s.push(0),
            s.push(D),
            s.push(T),
            i.push(P.FILL_EXPAND + 2),
            i.push(P.NONE),
            i.push(P.NONE),
            i.push(P.NONE),
            i.push(P.NONE),
            i.push(P.NONE),
            (m = b),
            (g = E),
            (_ = S),
            (v = F);
        }
        s.push(x), s.push(A);
      }
      line(t, e) {
        const { verts: s, joints: i } = e,
          { points: n } = t,
          a = n.length === 8 ? t.goodJointType() : P.JOINT_MITER + 3,
          o = n.length;
        if (o !== 0) {
          s.push(n[o - 2], n[o - 1]), i.push(P.NONE);
          for (let h = 0; h < o; h += 2) s.push(n[h], n[h + 1]), i.push(a);
          s.push(n[0], n[1]),
            i.push(P.NONE),
            s.push(n[2], n[3]),
            i.push(P.NONE);
        }
      }
    }
    const Sd = [];
    function xo(r, t = !1) {
      const e = r.length;
      if (e < 6) return;
      let s = 0;
      for (let i = 0, n = r[e - 2], a = r[e - 1]; i < e; i += 2) {
        const o = r[i],
          h = r[i + 1];
        (s += (o - n) * (h + a)), (n = o), (a = h);
      }
      if ((!t && s > 0) || (t && s <= 0)) {
        const i = e / 2;
        for (let n = i + (i % 2); n < e; n += 2) {
          const a = e - n - 2,
            o = e - n - 1,
            h = n,
            l = n + 1;
          ([r[a], r[h]] = [r[h], r[a]]), ([r[o], r[l]] = [r[l], r[o]]);
        }
      }
    }
    class yo {
      path(t, e) {
        const s = t.shape,
          i = (t.points = s.points.slice()),
          n = e.closePointEps,
          a = n * n;
        if (i.length === 0) return;
        const o = new q(i[0], i[1]),
          h = new q(i[i.length - 2], i[i.length - 1]),
          l = (t.closeStroke = s.closeStroke);
        let u = i.length,
          c = 2;
        for (let d = 2; d < u; d += 2) {
          const p = i[d - 2],
            f = i[d - 1],
            m = i[d],
            g = i[d + 1];
          let _ = !0;
          Math.abs(p - m) < n && Math.abs(f - g) < n && (_ = !1),
            _ && ((i[c] = i[d]), (i[c + 1] = i[d + 1]), (c += 2));
        }
        (i.length = u = c), (c = 2);
        for (let d = 2; d + 2 < u; d += 2) {
          let p = i[d - 2],
            f = i[d - 1];
          const m = i[d],
            g = i[d + 1];
          let _ = i[d + 2],
            v = i[d + 3];
          (p -= m), (f -= g), (_ -= m), (v -= g);
          let y = !0;
          Math.abs(_ * f - v * p) < a && p * _ + f * v < -a && (y = !1),
            y && ((i[c] = i[d]), (i[c + 1] = i[d + 1]), (c += 2));
        }
        (i[c] = i[u - 2]),
          (i[c + 1] = i[u - 1]),
          (c += 2),
          (i.length = u = c),
          !(u <= 2) &&
            l &&
            Math.abs(o.x - h.x) < n &&
            Math.abs(o.y - h.y) < n &&
            (i.pop(), i.pop());
      }
      line(t, e) {
        const { closeStroke: s, points: i } = t,
          n = i.length;
        if (n <= 2) return;
        const { verts: a, joints: o } = e,
          h = t.jointType(),
          l = t.capType();
        let u = 0,
          c,
          d;
        s
          ? ((c = i[n - 2]), (d = i[n - 1]), o.push(P.NONE))
          : ((c = i[2]),
            (d = i[3]),
            l === P.CAP_ROUND
              ? (a.push(i[0], i[1]),
                o.push(P.NONE),
                o.push(P.CAP_ROUND),
                (u = 0))
              : ((u = l), o.push(P.NONE))),
          a.push(c, d);
        for (let p = 0; p < n; p += 2) {
          const f = i[p],
            m = i[p + 1];
          let g = h;
          p + 2 >= n
            ? s || (g = P.NONE)
            : p + 4 >= n &&
              (s ||
                (l === P.CAP_ROUND && (g = P.JOINT_CAP_ROUND),
                l === P.CAP_BUTT && (g = P.JOINT_CAP_BUTT),
                l === P.CAP_SQUARE && (g = P.JOINT_CAP_SQUARE))),
            (g += u),
            (u = 0),
            a.push(f, m),
            o.push(g),
            (c = f),
            (d = m);
        }
        s
          ? (a.push(i[0], i[1]),
            o.push(P.NONE),
            a.push(i[2], i[3]),
            o.push(P.NONE))
          : (a.push(i[n - 4], i[n - 3]), o.push(P.NONE));
      }
      fill(t, e) {
        let s = t.points;
        const i = t.holes,
          n = e.closePointEps,
          { verts: a, joints: o } = e;
        if (s.length < 6) return;
        const h = [];
        let l = s.length;
        xo(s, !1);
        for (let p = 0; p < i.length; p++) {
          const f = i[p];
          xo(f.points, !0), h.push(s.length / 2), (s = s.concat(f.points));
        }
        const u = Sd;
        u.length < s.length && (u.length = s.length);
        let c = 0;
        for (let p = 0; p <= h.length; p++) {
          let f = l / 2;
          p > 0 && (p < h.length ? (f = h[p]) : (f = s.length >> 1)),
            (u[c * 2] = f - 1),
            (u[(f - 1) * 2 + 1] = c);
          for (let m = c; m + 1 < f; m++)
            (u[m * 2 + 1] = m + 1), (u[m * 2 + 2] = m);
          c = f;
        }
        if (((t.triangles = $o(s, h, 2)), !t.triangles)) return;
        if (!t.fillAA) {
          for (let p = 0; p < s.length; p += 2)
            a.push(s[p], s[p + 1]), o.push(P.FILL);
          return;
        }
        const { triangles: d } = t;
        l = s.length;
        for (let p = 0; p < d.length; p += 3) {
          let f = 0;
          for (let m = 0; m < 3; m++) {
            const g = d[p + m],
              _ = d[p + ((m + 1) % 3)];
            (u[g * 2] === _ || u[g * 2 + 1] === _) && (f |= 1 << m);
          }
          o.push(P.FILL_EXPAND + f),
            o.push(P.NONE),
            o.push(P.NONE),
            o.push(P.NONE),
            o.push(P.NONE),
            o.push(P.NONE);
        }
        for (let p = 0; p < l / 2; p++) {
          const f = u[p * 2],
            m = u[p * 2 + 1];
          let g = s[m * 2 + 1] - s[p * 2 + 1],
            _ = -(s[m * 2] - s[p * 2]),
            v = s[p * 2 + 1] - s[f * 2 + 1],
            y = -(s[p * 2] - s[f * 2]);
          const x = Math.sqrt(g * g + _ * _);
          (g /= x), (_ /= x);
          const A = Math.sqrt(v * v + y * y);
          (v /= A), (y /= A);
          let w = g + v,
            b = _ + y;
          const E = w * g + b * _;
          Math.abs(E) < n ? ((w = g), (b = _)) : ((w /= E), (b /= E)),
            (u[p * 2] = w),
            (u[p * 2 + 1] = b);
        }
        for (let p = 0; p < d.length; p += 3) {
          const f = d[p],
            m = d[p + 1],
            g = d[p + 2],
            _ = s[g * 2 + 1] - s[m * 2 + 1],
            v = -(s[g * 2] - s[m * 2]),
            y = s[m * 2 + 1] - s[f * 2 + 1],
            x = -(s[m * 2] - s[f * 2]);
          let A = 1;
          _ * x - y * v > 0 && (A = 2);
          for (let w = 0; w < 3; w++) {
            const b = d[p + ((w * A) % 3)];
            a.push(s[b * 2], s[b * 2 + 1]);
          }
          for (let w = 0; w < 3; w++) {
            const b = d[p + ((w * A) % 3)];
            a.push(u[b * 2], u[b * 2 + 1]);
          }
        }
      }
    }
    class Id {
      constructor() {
        this._polyBuilder = new yo();
      }
      path(t, e) {
        const s = t.shape,
          i = s.x,
          n = s.y,
          a = s.width,
          o = s.height,
          h = t.points;
        (h.length = 0), h.push(i, n, i + a, n, i + a, n + o, i, n + o);
      }
      line(t, e) {
        const { verts: s, joints: i } = e,
          { points: n } = t,
          a = t.goodJointType(),
          o = n.length;
        s.push(n[o - 2], n[o - 1]), i.push(P.NONE);
        for (let h = 0; h < o; h += 2) s.push(n[h], n[h + 1]), i.push(a);
        s.push(n[0], n[1]), i.push(P.NONE), s.push(n[2], n[3]), i.push(P.NONE);
      }
      fill(t, e) {
        const { verts: s, joints: i } = e,
          { points: n, triangles: a } = t;
        if (((a.length = 0), !t.fillAA)) {
          s.push(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]),
            i.push(P.FILL, P.FILL, P.FILL, P.FILL),
            a.push(0, 1, 2, 0, 2, 3);
          return;
        }
        this._polyBuilder.fill(t, e);
      }
    }
    class Cd {
      constructor() {
        this._circleBuilder = new jr();
      }
      path(t, e) {
        this._circleBuilder.path(t, e);
      }
      line(t, e) {
        this._circleBuilder.line(t, e);
      }
      fill(t, e) {
        this._circleBuilder.fill(t, e);
      }
    }
    const Ti = {
        [Z.POLY]: new yo(),
        [Z.CIRC]: new jr(),
        [Z.ELIP]: new jr(),
        [Z.RECT]: new Id(),
        [Z.RREC]: new Cd(),
      },
      vo = [],
      Ei = [],
      Ke = new q(),
      Rd = new ze();
    class bo extends qt {
      constructor() {
        super(),
          (this.indicesUint16 = null),
          this.initAttributes(!1),
          (this.buildData = new wd()),
          (this.graphicsData = []),
          (this.dirty = 0),
          (this.batchDirty = -1),
          (this.cacheDirty = -1),
          (this.clearDirty = 0),
          (this.drawCalls = []),
          (this.batches = []),
          (this.shapeBuildIndex = 0),
          (this.shapeBatchIndex = 0),
          (this._bounds = new ze()),
          (this.boundsDirty = -1),
          (this.boundsPadding = 0),
          (this.batchable = !1),
          (this.indicesUint16 = null),
          (this.packer = null),
          (this.packSize = 0),
          (this.pack32index = null);
      }
      get points() {
        return this.buildData.verts;
      }
      get closePointEps() {
        return this.buildData.closePointEps;
      }
      initAttributes(t) {
        (this._buffer = new st(null, t, !1)),
          (this._bufferFloats = new Float32Array()),
          (this._bufferUint = new Uint32Array()),
          (this._indexBuffer = new st(null, t, !0)),
          this.addAttribute("aPrev", this._buffer, 2, !1, O.FLOAT)
            .addAttribute("aPoint1", this._buffer, 2, !1, O.FLOAT)
            .addAttribute("aPoint2", this._buffer, 2, !1, O.FLOAT)
            .addAttribute("aNext", this._buffer, 2, !1, O.FLOAT)
            .addAttribute("aTravel", this._buffer, 1, !1, O.FLOAT)
            .addAttribute("aVertexJoint", this._buffer, 1, !1, O.FLOAT)
            .addAttribute("aStyleId", this._buffer, 1, !1, O.FLOAT)
            .addAttribute("aColor", this._buffer, 4, !0, O.UNSIGNED_BYTE)
            .addIndex(this._indexBuffer),
          (this.strideFloats = 12);
      }
      checkInstancing(t, e) {
        this.packer || ((this.packer = new Wr()), (this.pack32index = e));
      }
      get bounds() {
        return (
          this.boundsDirty !== this.dirty &&
            ((this.boundsDirty = this.dirty), this.calculateBounds()),
          this._bounds
        );
      }
      invalidate() {
        (this.boundsDirty = -1),
          this.dirty++,
          this.batchDirty++,
          (this.shapeBuildIndex = 0),
          (this.shapeBatchIndex = 0),
          (this.packSize = 0),
          this.buildData.clear();
        for (let t = 0; t < this.drawCalls.length; t++)
          this.drawCalls[t].clear(), Ei.push(this.drawCalls[t]);
        this.drawCalls.length = 0;
        for (let t = 0; t < this.batches.length; t++) {
          const e = this.batches[t];
          e.reset(), vo.push(e);
        }
        this.batches.length = 0;
      }
      clear() {
        return (
          this.graphicsData.length > 0 &&
            (this.invalidate(),
            this.clearDirty++,
            (this.graphicsData.length = 0)),
          this
        );
      }
      drawShape(t, e = null, s = null, i = null) {
        const n = new bi(t, e, s, i);
        return this.graphicsData.push(n), this.dirty++, this;
      }
      drawHole(t, e = null) {
        if (!this.graphicsData.length) return null;
        const s = new bi(t, null, null, e),
          i = this.graphicsData[this.graphicsData.length - 1];
        return (s.lineStyle = i.lineStyle), i.holes.push(s), this.dirty++, this;
      }
      destroy() {
        super.destroy();
        for (let t = 0; t < this.graphicsData.length; ++t)
          this.graphicsData[t].destroy();
        this.buildData.destroy(),
          (this.buildData = null),
          this.indexBuffer.destroy(),
          (this.indexBuffer = null),
          (this.graphicsData.length = 0),
          (this.graphicsData = null),
          (this.drawCalls.length = 0),
          (this.drawCalls = null),
          (this.batches.length = 0),
          (this.batches = null),
          (this._bounds = null);
      }
      containsPoint(t) {
        const e = this.graphicsData;
        for (let s = 0; s < e.length; ++s) {
          const i = e[s];
          if (
            i.fillStyle.visible &&
            i.shape &&
            (i.matrix ? i.matrix.applyInverse(t, Ke) : Ke.copyFrom(t),
            i.shape.contains(Ke.x, Ke.y))
          ) {
            let n = !1;
            if (i.holes) {
              for (let a = 0; a < i.holes.length; a++)
                if (i.holes[a].shape.contains(Ke.x, Ke.y)) {
                  n = !0;
                  break;
                }
            }
            if (!n) return !0;
          }
        }
        return !1;
      }
      updatePoints() {}
      updateBufferSize() {
        this._buffer.update(new Float32Array());
      }
      updateBuild() {
        const { graphicsData: t, buildData: e } = this,
          s = t.length;
        for (let i = this.shapeBuildIndex; i < s; i++) {
          const n = t[i];
          (n.strokeStart = 0),
            (n.strokeLen = 0),
            (n.fillStart = 0),
            (n.fillLen = 0);
          const { fillStyle: a, lineStyle: o, holes: h } = n;
          if (!a.visible && !o.visible) continue;
          const l = Ti[n.type];
          if (
            (n.clearPath(),
            l.path(n, e),
            n.matrix && this.transformPoints(n.points, n.matrix),
            n.clearBuild(),
            !(n.points.length <= 2) &&
              ((a.visible || o.visible) && this.processHoles(h),
              a.visible &&
                ((n.fillAA =
                  n.fillStyle.smooth &&
                  n.fillStyle.texture === L.WHITE &&
                  h.length === 0 &&
                  !(
                    n.closeStroke &&
                    n.lineStyle.visible &&
                    !n.lineStyle.shader &&
                    n.lineStyle.alpha >= 0.99 &&
                    n.lineStyle.width *
                      Math.min(
                        n.lineStyle.alignment,
                        1 - n.lineStyle.alignment
                      ) >=
                      0.495
                  )),
                (n.fillStart = e.joints.length),
                h.length ? Ti[Z.POLY].fill(n, e) : l.fill(n, e),
                (n.fillLen = e.joints.length - n.fillStart)),
              o.visible))
          ) {
            (n.strokeStart = e.joints.length), l.line(n, e);
            for (let u = 0; u < h.length; u++) {
              const c = h[u];
              Ti[c.type].line(c, e);
            }
            n.strokeLen = e.joints.length - n.strokeStart;
          }
        }
        this.shapeBuildIndex = s;
      }
      updateBatches(t) {
        if (!this.graphicsData.length) {
          this.batchable = !0;
          return;
        }
        if ((this.updateBuild(), !this.validateBatching())) return;
        const { buildData: e, graphicsData: s } = this,
          i = s.length;
        this.cacheDirty = this.dirty;
        let n = null,
          a = null;
        this.batches.length > 0 &&
          ((n = this.batches[this.batches.length - 1]), (a = n.style));
        for (let o = this.shapeBatchIndex; o < i; o++) {
          const h = s[o],
            l = h.fillStyle,
            u = h.lineStyle;
          if (
            (h.matrix && this.transformPoints(h.points, h.matrix),
            !(!l.visible && !u.visible))
          )
            for (let c = 0; c < 2; c++) {
              const d = c === 0 ? l : u;
              if (!d.visible) continue;
              const p = d.texture.baseTexture,
                f = e.vertexSize,
                m = e.indexSize;
              (p.wrapMode = ge.REPEAT),
                c === 0
                  ? this.packer.updateBufferSize(
                      h.fillStart,
                      h.fillLen,
                      h.triangles.length,
                      e
                    )
                  : this.packer.updateBufferSize(
                      h.strokeStart,
                      h.strokeLen,
                      h.triangles.length,
                      e
                    ),
                e.vertexSize !== f &&
                  (n && !this._compareStyles(a, d) && (n.end(m, f), (n = null)),
                  n ||
                    ((n = vo.pop() || new Ad()),
                    n.begin(d, m, f),
                    this.batches.push(n),
                    (a = d)),
                  c === 0
                    ? (n.jointEnd = h.fillStart + h.fillLen)
                    : (n.jointEnd = h.strokeStart + h.strokeLen));
            }
        }
        if (
          ((this.shapeBatchIndex = i),
          n && n.end(e.indexSize, e.vertexSize),
          this.batches.length === 0)
        ) {
          this.batchable = !0;
          return;
        }
        (this.batchable = this.isBatchable()),
          this.batchable
            ? this.packBatches()
            : (this.buildDrawCalls(t), this.updatePack());
      }
      updatePack() {
        const { vertexSize: t, indexSize: e } = this.buildData;
        if (this.packSize === t) return;
        const { strideFloats: s, packer: i, buildData: n, batches: a } = this,
          o = this._buffer,
          h = this._indexBuffer,
          l = t * s;
        if (o.data.length !== l) {
          const c = new ArrayBuffer(l * 4);
          (this._bufferFloats = new Float32Array(c)),
            (this._bufferUint = new Uint32Array(c)),
            (o.data = this._bufferFloats);
        }
        h.data.length !== e &&
          (t > 65535 && this.pack32index
            ? (h.data = new Uint32Array(e))
            : (h.data = new Uint16Array(e))),
          i.beginPack(n, this._bufferFloats, this._bufferUint, h.data);
        let u = 0;
        for (let c = 0; c < this.graphicsData.length; c++) {
          const d = this.graphicsData[c];
          if (d.fillLen) {
            for (; a[u].jointEnd <= d.fillStart; ) u++;
            i.packInterleavedGeometry(
              d.fillStart,
              d.fillLen,
              d.triangles,
              a[u].styleId,
              a[u].rgba
            );
          }
          if (d.strokeLen) {
            for (; a[u].jointEnd <= d.strokeStart; ) u++;
            i.packInterleavedGeometry(
              d.strokeStart,
              d.strokeLen,
              d.triangles,
              a[u].styleId,
              a[u].rgba
            );
          }
        }
        o.update(), h.update(), (this.packSize = t);
      }
      _compareStyles(t, e) {
        if (
          !t ||
          !e ||
          t.texture.baseTexture !== e.texture.baseTexture ||
          t.color + t.alpha !== e.color + e.alpha ||
          t.shader !== e.shader ||
          t.width !== e.width ||
          t.scaleMode !== e.scaleMode ||
          t.alignment !== e.alignment
        )
          return !1;
        const s = t.matrix || tt.IDENTITY,
          i = e.matrix || tt.IDENTITY;
        return go(s, i);
      }
      validateBatching() {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length)
          return !1;
        for (let t = 0, e = this.graphicsData.length; t < e; t++) {
          const s = this.graphicsData[t],
            i = s.fillStyle,
            n = s.lineStyle;
          if (
            (i && !i.texture.baseTexture.valid) ||
            (n && !n.texture.baseTexture.valid)
          )
            return !1;
        }
        return !0;
      }
      packBatches() {
        this.batchDirty++;
        const t = this.batches;
        for (let e = 0, s = t.length; e < s; e++) {
          const i = t[e];
          for (let n = 0; n < i.size; n++) {
            const a = i.start + n;
            this.indicesUint16[a] = this.indicesUint16[a] - i.attribStart;
          }
        }
      }
      isBatchable() {
        return !1;
      }
      buildDrawCalls(t) {
        for (let i = 0; i < this.drawCalls.length; i++)
          this.drawCalls[i].clear(), Ei.push(this.drawCalls[i]);
        this.drawCalls.length = 0;
        let e = Ei.pop() || new _o();
        e.begin(t, null);
        let s = 0;
        this.drawCalls.push(e);
        for (let i = 0; i < this.batches.length; i++) {
          const n = this.batches[i],
            a = n.style;
          if (n.attribSize === 0) continue;
          let o = -1;
          const h = a.getTextureMatrix();
          e.check(a.shader) &&
            (o = e.add(
              a.texture,
              h,
              a.width,
              a.alignment || 0,
              a.packLineScale()
            )),
            o < 0 &&
              ((e = Ei.pop() || new _o()),
              this.drawCalls.push(e),
              e.begin(t, a.shader),
              (e.start = s),
              (o = e.add(
                a.texture,
                h,
                a.width,
                a.alignment || 0,
                a.packLineScale()
              ))),
            (e.size += n.size),
            (s += n.size);
          const { color: l, alpha: u } = a,
            c = Q.shared.setValue(l).toLittleEndianNumber();
          (n.rgba = Q.shared.setValue(c).toPremultiplied(u)), (n.styleId = o);
        }
      }
      processHoles(t) {
        for (let e = 0; e < t.length; e++) {
          const s = t[e],
            i = Ti[s.type];
          s.clearPath(),
            i.path(s, this.buildData),
            s.matrix && this.transformPoints(s.points, s.matrix);
        }
      }
      calculateBounds() {
        const t = this._bounds,
          e = Rd;
        let s = tt.IDENTITY;
        this._bounds.clear(), e.clear();
        for (let i = 0; i < this.graphicsData.length; i++) {
          const n = this.graphicsData[i],
            a = n.shape,
            o = n.type,
            h = n.lineStyle,
            l = n.matrix || tt.IDENTITY;
          let u = 0;
          if (
            (h &&
              h.visible &&
              ((u = h.width),
              o !== Z.POLY || n.fillStyle.visible
                ? (u *= Math.max(0, h.alignment))
                : (u *= Math.max(h.alignment, 1 - h.alignment))),
            s !== l &&
              (e.isEmpty() || (t.addBoundsMatrix(e, s), e.clear()), (s = l)),
            o === Z.RECT || o === Z.RREC)
          ) {
            const c = a;
            e.addFramePad(c.x, c.y, c.x + c.width, c.y + c.height, u, u);
          } else if (o === Z.CIRC) {
            const c = a;
            e.addFramePad(c.x, c.y, c.x, c.y, c.radius + u, c.radius + u);
          } else if (o === Z.ELIP) {
            const c = a;
            e.addFramePad(c.x, c.y, c.x, c.y, c.width + u, c.height + u);
          } else {
            const c = a;
            t.addVerticesMatrix(s, c.points, 0, c.points.length, u, u);
          }
        }
        e.isEmpty() || t.addBoundsMatrix(e, s),
          t.pad(this.boundsPadding, this.boundsPadding);
      }
      transformPoints(t, e) {
        for (let s = 0; s < t.length / 2; s++) {
          const i = t[s * 2],
            n = t[s * 2 + 1];
          (t[s * 2] = e.a * i + e.c * n + e.tx),
            (t[s * 2 + 1] = e.b * i + e.d * n + e.ty);
        }
      }
    }
    bo.BATCHABLE_SIZE = 100;
    const To = `#version 100
precision highp float;
const float FILL = 1.0;
const float BEVEL = 4.0;
const float MITER = 8.0;
const float ROUND = 12.0;
const float JOINT_CAP_BUTT = 16.0;
const float JOINT_CAP_SQUARE = 18.0;
const float JOINT_CAP_ROUND = 20.0;

const float FILL_EXPAND = 24.0;

const float CAP_BUTT = 1.0;
const float CAP_SQUARE = 2.0;
const float CAP_ROUND = 3.0;
const float CAP_BUTT2 = 4.0;

const float MITER_LIMIT = 10.0;

// === geom ===
attribute vec2 aPrev;
attribute vec2 aPoint1;
attribute vec2 aPoint2;
attribute vec2 aNext;
attribute float aVertexJoint;
attribute float aTravel;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec4 vLine1;
varying vec4 vLine2;
varying vec4 vArc;
varying float vType;

uniform float resolution;
uniform float expand;

// === style ===
attribute float aStyleId;
attribute vec4 aColor;

varying float vTextureId;
varying vec4 vColor;
varying vec2 vTextureCoord;
varying vec2 vTravel;

uniform vec2 styleLine[%MAX_STYLES%];
uniform vec3 styleMatrix[2 * %MAX_STYLES%];
uniform float styleTextureId[%MAX_STYLES%];
uniform vec2 samplerSize[%MAX_TEXTURES%];

vec2 doBisect(vec2 norm, float len, vec2 norm2, float len2,
    float dy, float inner) {
    vec2 bisect = (norm + norm2) / 2.0;
    bisect /= dot(norm, bisect);
    vec2 shift = dy * bisect;
    if (inner > 0.5) {
        if (len < len2) {
            if (abs(dy * (bisect.x * norm.y - bisect.y * norm.x)) > len) {
                return dy * norm;
            }
        } else {
            if (abs(dy * (bisect.x * norm2.y - bisect.y * norm2.x)) > len2) {
                return dy * norm;
            }
        }
    }
    return dy * bisect;
}

void main(void){
    vec2 pointA = (translationMatrix * vec3(aPoint1, 1.0)).xy;
    vec2 pointB = (translationMatrix * vec3(aPoint2, 1.0)).xy;

    vec2 xBasis = pointB - pointA;
    float len = length(xBasis);
    vec2 forward = xBasis / len;
    vec2 norm = vec2(forward.y, -forward.x);

    float type = floor(aVertexJoint / 16.0);
    float vertexNum = aVertexJoint - type * 16.0;
    float dx = 0.0, dy = 1.0;

    float capType = floor(type / 32.0);
    type -= capType * 32.0;

    int styleId = int(aStyleId + 0.5);
    float lineWidth = styleLine[styleId].x;
    vTextureId = floor(styleTextureId[styleId] / 4.0);
    float scaleMode = styleTextureId[styleId] - vTextureId * 4.0;
    float avgScale = 1.0;
    if (scaleMode > 2.5) {
        avgScale = length(translationMatrix * vec3(1.0, 0.0, 0.0));
    } else if (scaleMode > 1.5) {
        avgScale = length(translationMatrix * vec3(0.0, 1.0, 0.0));
    } else if (scaleMode > 0.5) {
        vec2 avgDiag = (translationMatrix * vec3(1.0, 1.0, 0.0)).xy;
        avgScale = sqrt(dot(avgDiag, avgDiag) * 0.5);
    }
    lineWidth *= 0.5 * avgScale;
    float lineAlignment = 2.0 * styleLine[styleId].y - 1.0;
    vTextureCoord = vec2(0.0);

    vec2 pos;

    if (capType == CAP_ROUND) {
        vertexNum += 4.0;
        type = JOINT_CAP_ROUND;
        capType = 0.0;
        lineAlignment = -lineAlignment;
    }

    vLine1 = vec4(0.0, 10.0, 1.0, 0.0);
    vLine2 = vec4(0.0, 10.0, 1.0, 0.0);
    vArc = vec4(0.0);
    if (type == FILL) {
        pos = pointA;
        vType = 0.0;
        vLine2 = vec4(-2.0, -2.0, -2.0, 0.0);
        vec2 vTexturePixel;
        vTexturePixel.x = dot(vec3(aPoint1, 1.0), styleMatrix[styleId * 2]);
        vTexturePixel.y = dot(vec3(aPoint1, 1.0), styleMatrix[styleId * 2 + 1]);
        vTextureCoord = vTexturePixel / samplerSize[int(vTextureId)];
    } else if (type >= FILL_EXPAND && type < FILL_EXPAND + 7.5) {
        // expand vertices
        float flags = type - FILL_EXPAND;
        float flag3 = floor(flags / 4.0);
        float flag2 = floor((flags - flag3 * 4.0) / 2.0);
        float flag1 = flags - flag3 * 4.0 - flag2 * 2.0;

        vec2 prev = (translationMatrix * vec3(aPrev, 1.0)).xy;

        if (vertexNum < 0.5) {
            pos = prev;
        } else if (vertexNum < 1.5) {
            pos = pointA;
        } else {
            pos = pointB;
        }
        float len2 = length(aNext);
        vec2 bisect = (translationMatrix * vec3(aNext, 0.0)).xy;
        if (len2 > 0.01) {
            bisect = normalize(bisect) * len2;
        }

        vec2 n1 = normalize(vec2(pointA.y - prev.y, -(pointA.x - prev.x)));
        vec2 n2 = normalize(vec2(pointB.y - pointA.y, -(pointB.x - pointA.x)));
        vec2 n3 = normalize(vec2(prev.y - pointB.y, -(prev.x - pointB.x)));

        if (n1.x * n2.y - n1.y * n2.x < 0.0) {
            n1 = -n1;
            n2 = -n2;
            n3 = -n3;
        }
        pos += bisect * expand;

        vLine1 = vec4(16.0, 16.0, 16.0, -1.0);
        if (flag1 > 0.5) {
            vLine1.x = -dot(pos - prev, n1);
        }
        if (flag2 > 0.5) {
            vLine1.y = -dot(pos - pointA, n2);
        }
        if (flag3 > 0.5) {
            vLine1.z = -dot(pos - pointB, n3);
        }
        vLine1.xyz *= resolution;
        vType = 2.0;
    } else if (type >= BEVEL) {
        float dy = lineWidth + expand;
        float shift = lineWidth * lineAlignment;
        float inner = 0.0;
        if (vertexNum >= 1.5) {
            dy = -dy;
            inner = 1.0;
        }

        vec2 base, next, xBasis2, bisect;
        float flag = 0.0;
        float side2 = 1.0;
        if (vertexNum < 0.5 || vertexNum > 2.5 && vertexNum < 3.5) {
            next = (translationMatrix * vec3(aPrev, 1.0)).xy;
            base = pointA;
            flag = type - floor(type / 2.0) * 2.0;
            side2 = -1.0;
        } else {
            next = (translationMatrix * vec3(aNext, 1.0)).xy;
            base = pointB;
            if (type >= MITER && type < MITER + 3.5) {
                flag = step(MITER + 1.5, type);
                // check miter limit here?
            }
        }
        xBasis2 = next - base;
        float len2 = length(xBasis2);
        vec2 norm2 = vec2(xBasis2.y, -xBasis2.x) / len2;
        float D = norm.x * norm2.y - norm.y * norm2.x;
        if (D < 0.0) {
            inner = 1.0 - inner;
        }

        norm2 *= side2;

        float collinear = step(0.0, dot(norm, norm2));

        vType = 0.0;
        float dy2 = -1000.0;

        if (abs(D) < 0.01 && collinear < 0.5) {
            if (type >= ROUND && type < ROUND + 1.5) {
                type = JOINT_CAP_ROUND;
            }
            //TODO: BUTT here too
        }

        vLine1 = vec4(0.0, lineWidth, max(abs(norm.x), abs(norm.y)), min(abs(norm.x), abs(norm.y)));
        vLine2 = vec4(0.0, lineWidth, max(abs(norm2.x), abs(norm2.y)), min(abs(norm2.x), abs(norm2.y)));

        if (vertexNum < 3.5) {
            if (abs(D) < 0.01 && collinear < 0.5) {
                pos = (shift + dy) * norm;
            } else {
                if (flag < 0.5 && inner < 0.5) {
                    pos = (shift + dy) * norm;
                } else {
                    pos = doBisect(norm, len, norm2, len2, shift + dy, inner);
                }
            }
            vLine2.y = -1000.0;
            if (capType >= CAP_BUTT && capType < CAP_ROUND) {
                float extra = step(CAP_SQUARE, capType) * lineWidth;
                vec2 back = -forward;
                if (vertexNum < 0.5 || vertexNum > 2.5) {
                    pos += back * (expand + extra);
                    dy2 = expand;
                } else {
                    dy2 = dot(pos + base - pointA, back) - extra;
                }
            }
            if (type >= JOINT_CAP_BUTT && type < JOINT_CAP_SQUARE + 0.5) {
                float extra = step(JOINT_CAP_SQUARE, type) * lineWidth;
                if (vertexNum < 0.5 || vertexNum > 2.5) {
                    vLine2.y = dot(pos + base - pointB, forward) - extra;
                } else {
                    pos += forward * (expand + extra);
                    vLine2.y = expand;
                    if (capType >= CAP_BUTT) {
                        dy2 -= expand + extra;
                    }
                }
            }
        } else if (type >= JOINT_CAP_ROUND && type < JOINT_CAP_ROUND + 1.5) {
            base += shift * norm;
            if (inner > 0.5) {
                dy = -dy;
                inner = 0.0;
            }
            vec2 d2 = abs(dy) * forward;
            if (vertexNum < 4.5) {
                dy = -dy;
                pos = dy * norm;
            } else if (vertexNum < 5.5) {
                pos = dy * norm;
            } else if (vertexNum < 6.5) {
                pos = dy * norm + d2;
                vArc.x = abs(dy);
            } else {
                dy = -dy;
                pos = dy * norm + d2;
                vArc.x = abs(dy);
            }
            vLine2 = vec4(0.0, lineWidth * 2.0 + 10.0, 1.0  , 0.0); // forget about line2 with type=3
            vArc.y = dy;
            vArc.z = 0.0;
            vArc.w = lineWidth;
            vType = 3.0;
        } else if (abs(D) < 0.01 && collinear < 0.5) {
            pos = dy * norm;
        } else {
            if (inner > 0.5) {
                dy = -dy;
                inner = 0.0;
            }
            float side = sign(dy);
            vec2 norm3 = normalize(norm + norm2);

            if (type >= MITER && type < MITER + 3.5) {
                vec2 farVertex = doBisect(norm, len, norm2, len2, shift + dy, 0.0);
                if (length(farVertex) > abs(shift + dy) * MITER_LIMIT) {
                    type = BEVEL;
                }
            }

            if (vertexNum < 4.5) {
                pos = doBisect(norm, len, norm2, len2, shift - dy, 1.0);
            } else if (vertexNum < 5.5) {
                pos = (shift + dy) * norm;
            } else if (vertexNum > 7.5) {
                pos = (shift + dy) * norm2;
            } else {
                if (type >= ROUND && type < ROUND + 1.5) {
                    pos = doBisect(norm, len, norm2, len2, shift + dy, 0.0);
                    float d2 = abs(shift + dy);
                    if (length(pos) > abs(shift + dy) * 1.5) {
                        if (vertexNum < 6.5) {
                            pos.x = (shift + dy) * norm.x - d2 * norm.y;
                            pos.y = (shift + dy) * norm.y + d2 * norm.x;
                        } else {
                            pos.x = (shift + dy) * norm2.x + d2 * norm2.y;
                            pos.y = (shift + dy) * norm2.y - d2 * norm2.x;
                        }
                    }
                } else if (type >= MITER && type < MITER + 3.5) {
                    pos = doBisect(norm, len, norm2, len2, shift + dy, 0.0); //farVertex
                } else if (type >= BEVEL && type < BEVEL + 1.5) {
                    float d2 = side / resolution;
                    if (vertexNum < 6.5) {
                        pos = (shift + dy) * norm + d2 * norm3;
                    } else {
                        pos = (shift + dy) * norm2 + d2 * norm3;
                    }
                }
            }

            if (type >= ROUND && type < ROUND + 1.5) {
                vArc.x = side * dot(pos, norm3);
                vArc.y = pos.x * norm3.y - pos.y * norm3.x;
                vArc.z = dot(norm, norm3) * (lineWidth + side * shift);
                vArc.w = lineWidth + side * shift;
                vType = 3.0;
            } else if (type >= MITER && type < MITER + 3.5) {
                vType = 1.0;
            } else if (type >= BEVEL && type < BEVEL + 1.5) {
                vType = 4.0;
                vArc.z = dot(norm, norm3) * (lineWidth + side * shift) - side * dot(pos, norm3);
            }

            dy = side * (dot(pos, norm) - shift);
            dy2 = side * (dot(pos, norm2) - shift);
        }

        pos += base;
        vLine1.xy = vec2(dy, vLine1.y) * resolution;
        vLine2.xy = vec2(dy2, vLine2.y) * resolution;
        vArc = vArc * resolution;
        vTravel = vec2(aTravel * avgScale + dot(pos - pointA, vec2(-norm.y, norm.x)), avgScale);
    }

    gl_Position = vec4((projectionMatrix * vec3(pos, 1.0)).xy, 0.0, 1.0);

    vColor = aColor * tint;
}`,
      Pd = `#version 100
#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif
`,
      Eo = `%PRECISION%
varying vec4 vColor;
varying vec4 vLine1;
varying vec4 vLine2;
varying vec4 vArc;
varying float vType;
varying float vTextureId;
varying vec2 vTextureCoord;
varying vec2 vTravel;
uniform sampler2D uSamplers[%MAX_TEXTURES%];

%PIXEL_LINE%

void main(void){
    %PIXEL_COVERAGE%

    vec4 texColor;
    float textureId = floor(vTextureId+0.5);
    %FOR_LOOP%

    gl_FragColor = vColor * texColor * alpha;
}
`,
      Md = [
        `
float pixelLine(float x, float A, float B) {
    return clamp(x + 0.5, 0.0, 1.0);
}
`,
        `
float pixelLine(float x, float A, float B) {
    float y = abs(x), s = sign(x);
    if (y * 2.0 < A - B) {
        return 0.5 + s * y / A;
    }
    y -= (A - B) * 0.5;
    y = max(1.0 - y / B, 0.0);
    return (1.0 + s * (1.0 - y * y)) * 0.5;
    //return clamp(x + 0.5, 0.0, 1.0);
}
`,
      ],
      Dd = `float alpha = 1.0;
if (vType < 0.5) {
    float left = pixelLine(-vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float right = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float near = vLine2.x - 0.5;
    float far = min(vLine2.x + 0.5, 0.0);
    float top = vLine2.y - 0.5;
    float bottom = min(vLine2.y + 0.5, 0.0);
    alpha = (right - left) * max(bottom - top, 0.0) * max(far - near, 0.0);
} else if (vType < 1.5) {
    float a1 = pixelLine(- vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float a2 = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float b1 = pixelLine(- vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float b2 = pixelLine(vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    alpha = a2 * b2 - a1 * b1;
} else if (vType < 2.5) {
    alpha *= max(min(vLine1.x + 0.5, 1.0), 0.0);
    alpha *= max(min(vLine1.y + 0.5, 1.0), 0.0);
    alpha *= max(min(vLine1.z + 0.5, 1.0), 0.0);
} else if (vType < 3.5) {
    float a1 = pixelLine(- vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float a2 = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float b1 = pixelLine(- vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float b2 = pixelLine(vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float alpha_miter = a2 * b2 - a1 * b1;
    float alpha_plane = clamp(vArc.z - vArc.x + 0.5, 0.0, 1.0);
    float d = length(vArc.xy);
    float circle_hor = max(min(vArc.w, d + 0.5) - max(-vArc.w, d - 0.5), 0.0);
    float circle_vert = min(vArc.w * 2.0, 1.0);
    float alpha_circle = circle_hor * circle_vert;
    alpha = min(alpha_miter, max(alpha_circle, alpha_plane));
} else {
    float a1 = pixelLine(- vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float a2 = pixelLine(vLine1.y - vLine1.x, vLine1.z, vLine1.w);
    float b1 = pixelLine(- vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    float b2 = pixelLine(vLine2.y - vLine2.x, vLine2.z, vLine2.w);
    alpha = a2 * b2 - a1 * b1;
    alpha *= clamp(vArc.z + 0.5, 0.0, 1.0);
}
`;
    class Ai extends Lt {
      constructor(t, e = To, s = Eo, i = {}) {
        (e = Ai.generateVertexSrc(t, e)), (s = Ai.generateFragmentSrc(t, s));
        const { maxStyles: n, maxTextures: a } = t,
          o = new Int32Array(a);
        for (let h = 0; h < a; h++) o[h] = h;
        super(
          Xt.from(e, s),
          Object.assign(i, {
            styleMatrix: new Float32Array(6 * n),
            styleTextureId: new Float32Array(n),
            styleLine: new Float32Array(2 * n),
            samplerSize: new Float32Array(2 * a),
            uSamplers: o,
            tint: new Float32Array([1, 1, 1, 1]),
            resolution: 1,
            expand: 1,
          })
        ),
          (this.settings = t);
      }
      static generateVertexSrc(t, e = To) {
        const { maxStyles: s, maxTextures: i } = t;
        return (
          (e = e
            .replace(/%MAX_TEXTURES%/gi, `${i}`)
            .replace(/%MAX_STYLES%/gi, `${s}`)),
          e
        );
      }
      static generateFragmentSrc(t, e = Eo) {
        const { maxTextures: s, pixelLine: i } = t;
        return (
          (e = e
            .replace(/%PRECISION%/gi, Pd)
            .replace(/%PIXEL_LINE%/gi, Md[i])
            .replace(/%PIXEL_COVERAGE%/gi, Dd)
            .replace(/%MAX_TEXTURES%/gi, `${s}`)
            .replace(/%FOR_LOOP%/gi, this.generateSampleSrc(s))),
          e
        );
      }
      static generateSampleSrc(t) {
        let e = "";
        (e += `
`),
          (e += `
`);
        for (let s = 0; s < t; s++)
          s > 0 &&
            (e += `
else `),
            s < t - 1 && (e += `if(textureId < ${s}.5)`),
            (e += `
{`),
            (e += `
	texColor = texture2D(uSamplers[${s}], vTextureCoord);`),
            (e += `
}`);
        return (
          (e += `
`),
          (e += `
`),
          e
        );
      }
    }
    const vs = {
        LINE_SCALE_MODE: Ye.NORMAL,
        SHADER_MAX_STYLES: 24,
        SHADER_MAX_TEXTURES: 4,
        PIXEL_LINE: 0,
      },
      Bd = je,
      { BezierUtils: Ld, QuadraticUtils: Nd, ArcUtils: Ao } = zc,
      Yr = {},
      wi = class extends yt {
        constructor(r = null) {
          super(),
            (this._geometry = r || new bo()),
            this._geometry.refCount++,
            (this.shader = null),
            (this.shaderSettings = {
              maxStyles: vs.SHADER_MAX_STYLES,
              maxTextures: vs.SHADER_MAX_TEXTURES,
              pixelLine: vs.PIXEL_LINE,
            }),
            (this.state = Mt.for2d()),
            (this._fillStyle = new vi()),
            (this._lineStyle = new $r()),
            (this._matrix = null),
            (this._holeMode = !1),
            (this.currentPath = null),
            (this.batches = []),
            (this.batchTint = -1),
            (this.batchDirty = -1),
            (this.vertexData = null),
            (this.pluginName = "smooth"),
            (this._transformID = -1),
            (this._tintColor = new Q(16777215)),
            (this.blendMode = j.NORMAL);
        }
        get geometry() {
          return this._geometry;
        }
        clone() {
          return this.finishPoly(), new wi(this._geometry);
        }
        set blendMode(r) {
          this.state.blendMode = r;
        }
        get blendMode() {
          return this.state.blendMode;
        }
        get tint() {
          return this._tintColor.value;
        }
        set tint(r) {
          this._tintColor.setValue(r);
        }
        get fill() {
          return this._fillStyle;
        }
        get line() {
          return this._lineStyle;
        }
        lineStyle(r = null, t = 0, e = 1, s = 0.5, i = vs.LINE_SCALE_MODE) {
          if (typeof r == "number")
            typeof i == "boolean" && (i = i ? Ye.NONE : Ye.NORMAL),
              (r = {
                width: r,
                color: t,
                alpha: e,
                alignment: s,
                scaleMode: i,
              });
          else {
            const n = r.native;
            n !== void 0 && (r.scaleMode = n ? Ye.NONE : Ye.NORMAL);
          }
          return this.lineTextureStyle(r);
        }
        lineTextureStyle(r) {
          (r = Object.assign(
            {
              width: 0,
              texture: L.WHITE,
              color: r && r.texture ? 16777215 : 0,
              alpha: 1,
              matrix: null,
              alignment: 0.5,
              native: !1,
              cap: wt.BUTT,
              join: pt.MITER,
              miterLimit: 10,
              shader: null,
              scaleMode: vs.LINE_SCALE_MODE,
            },
            r
          )),
            this.normalizeColor(r),
            this.currentPath && this.startPoly();
          const t = r.width > 0 && r.alpha > 0;
          return (
            t
              ? (r.matrix && ((r.matrix = r.matrix.clone()), r.matrix.invert()),
                Object.assign(this._lineStyle, { visible: t }, r))
              : this._lineStyle.reset(),
            this
          );
        }
        startPoly() {
          if (this.currentPath) {
            const r = this.currentPath.points,
              t = this.currentPath.points.length;
            t > 2 &&
              (this.drawShape(this.currentPath),
              (this.currentPath = new zt()),
              (this.currentPath.closeStroke = !1),
              this.currentPath.points.push(r[t - 2], r[t - 1]));
          } else
            (this.currentPath = new zt()), (this.currentPath.closeStroke = !1);
        }
        finishPoly() {
          this.currentPath &&
            (this.currentPath.points.length > 2
              ? (this.drawShape(this.currentPath), (this.currentPath = null))
              : (this.currentPath.points.length = 0));
        }
        moveTo(r, t) {
          return (
            this.startPoly(),
            (this.currentPath.points[0] = r),
            (this.currentPath.points[1] = t),
            this
          );
        }
        lineTo(r, t) {
          this.currentPath || this.moveTo(0, 0);
          const e = this.currentPath.points,
            s = e[e.length - 2],
            i = e[e.length - 1];
          return (s !== r || i !== t) && e.push(r, t), this;
        }
        _initCurve(r = 0, t = 0) {
          this.currentPath
            ? this.currentPath.points.length === 0 &&
              (this.currentPath.points = [r, t])
            : this.moveTo(r, t);
        }
        quadraticCurveTo(r, t, e, s) {
          this._initCurve();
          const i = this.currentPath.points;
          return (
            i.length === 0 && this.moveTo(0, 0), Nd.curveTo(r, t, e, s, i), this
          );
        }
        bezierCurveTo(r, t, e, s, i, n) {
          return (
            this._initCurve(),
            Ld.curveTo(r, t, e, s, i, n, this.currentPath.points),
            this
          );
        }
        arcTo(r, t, e, s, i) {
          this._initCurve(r, t);
          const n = this.currentPath.points,
            a = Ao.curveTo(r, t, e, s, i, n);
          if (a) {
            const {
              cx: o,
              cy: h,
              radius: l,
              startAngle: u,
              endAngle: c,
              anticlockwise: d,
            } = a;
            this.arc(o, h, l, u, c, d);
          }
          return this;
        }
        arc(r, t, e, s, i, n = !1) {
          if (s === i) return this;
          if (
            (!n && i <= s ? (i += ke) : n && s <= i && (s += ke), i - s === 0)
          )
            return this;
          const a = r + Math.cos(s) * e,
            o = t + Math.sin(s) * e,
            h = this._geometry.closePointEps;
          let l = this.currentPath ? this.currentPath.points : null;
          if (l) {
            const u = Math.abs(l[l.length - 2] - a),
              c = Math.abs(l[l.length - 1] - o);
            (u < h && c < h) || l.push(a, o);
          } else this.moveTo(a, o), (l = this.currentPath.points);
          return Ao.arc(a, o, r, t, e, s, i, n, l), this;
        }
        beginFill(r = 0, t = 1, e = !1) {
          return this.beginTextureFill({
            texture: L.WHITE,
            color: r,
            alpha: t,
            smooth: e,
          });
        }
        normalizeColor(r) {
          const t = Q.shared.setValue(r.color ?? 0);
          (r.color = t.toNumber()), r.alpha ?? (r.alpha = t.alpha);
        }
        beginTextureFill(r) {
          (r = Object.assign(
            {
              texture: L.WHITE,
              color: 16777215,
              alpha: 1,
              matrix: null,
              smooth: !1,
            },
            r
          )),
            this.normalizeColor(r),
            this.currentPath && this.startPoly();
          const t = r.alpha > 0;
          return (
            t
              ? (r.matrix && ((r.matrix = r.matrix.clone()), r.matrix.invert()),
                Object.assign(this._fillStyle, { visible: t }, r))
              : this._fillStyle.reset(),
            this
          );
        }
        endFill() {
          return this.finishPoly(), this._fillStyle.reset(), this;
        }
        drawRect(r, t, e, s) {
          return this.drawShape(new W(r, t, e, s));
        }
        drawRoundedRect(r, t, e, s, i) {
          return this.drawShape(new us(r, t, e, s, i));
        }
        drawCircle(r, t, e) {
          return this.drawShape(new hs(r, t, e));
        }
        drawEllipse(r, t, e, s) {
          return this.drawShape(new ls(r, t, e, s));
        }
        drawPolygon(...r) {
          let t,
            e = !0;
          const s = r[0];
          s.points
            ? ((e = s.closeStroke), (t = s.points))
            : Array.isArray(r[0])
            ? (t = r[0])
            : (t = r);
          const i = new zt(t);
          return (i.closeStroke = e), this.drawShape(i), this;
        }
        drawShape(r) {
          return (
            this._holeMode
              ? this._geometry.drawHole(r, this._matrix)
              : this._geometry.drawShape(
                  r,
                  this._fillStyle.clone(),
                  this._lineStyle.clone(),
                  this._matrix
                ),
            this
          );
        }
        clear() {
          return (
            this._geometry.clear(),
            this._lineStyle.reset(),
            this._fillStyle.reset(),
            this._boundsID++,
            (this._matrix = null),
            (this._holeMode = !1),
            (this.currentPath = null),
            this
          );
        }
        isFastRect() {
          const r = this._geometry.graphicsData;
          return (
            r.length === 1 &&
            r[0].shape.type === Z.RECT &&
            !r[0].matrix &&
            !r[0].holes.length &&
            !(r[0].lineStyle.visible && r[0].lineStyle.width)
          );
        }
        _renderCanvas(r) {
          Bd.prototype._renderCanvas.call(this, r);
        }
        _render(r) {
          this.finishPoly();
          const t = this._geometry,
            e = r.context.supports.uint32Indices;
          t.checkInstancing(r.geometry.hasInstance, e),
            t.updateBatches(this.shaderSettings),
            t.batchable
              ? (this.batchDirty !== t.batchDirty && this._populateBatches(),
                this._renderBatched(r))
              : (r.batch.flush(), this._renderDirect(r));
        }
        _populateBatches() {
          const r = this._geometry,
            t = this.blendMode,
            e = r.batches.length;
          (this.batchTint = -1),
            (this._transformID = -1),
            (this.batchDirty = r.batchDirty),
            (this.batches.length = e),
            (this.vertexData = new Float32Array(r.points));
          for (let s = 0; s < e; s++) {
            const i = r.batches[s],
              n = i.style.color,
              a = {
                vertexData: new Float32Array(
                  this.vertexData.buffer,
                  i.attribStart * 4 * 2,
                  i.attribSize * 2
                ),
                blendMode: t,
                _batchRGB: lh(n),
                _tintRGB: n,
                _texture: i.style.texture,
                alpha: i.style.alpha,
                worldAlpha: 1,
              };
            this.batches[s] = a;
          }
        }
        _renderBatched(r) {
          if (this.batches.length) {
            r.batch.setObjectRenderer(r.plugins[this.pluginName]),
              this.calculateVertices(),
              this.calculateTints();
            for (let t = 0, e = this.batches.length; t < e; t++) {
              const s = this.batches[t];
              (s.worldAlpha = this.worldAlpha * s.alpha),
                r.plugins[this.pluginName].render(s);
            }
          }
        }
        _renderDirect(r) {
          const t = this._resolveDirectShader(r);
          let e = t;
          const s = this._geometry,
            i = this.worldAlpha,
            n = e.uniforms,
            a = s.drawCalls;
          (n.translationMatrix = this.transform.worldTransform),
            Q.shared.setValue(this._tintColor).premultiply(i).toArray(n.tint),
            (n.resolution = r.renderTexture.current
              ? r.renderTexture.current.resolution
              : r.resolution);
          const o = r.projection.transform;
          if (o) {
            const l = Math.sqrt(o.a * o.a + o.b * o.b);
            n.resolution *= l;
          }
          const h = r.renderTexture.current
            ? r.renderTexture.current.multisample
            : r.multisample;
          (n.expand = (h !== ht.NONE ? 2 : 1) / n.resolution),
            r.shader.bind(e),
            r.geometry.bind(s, e),
            r.state.set(this.state),
            (e = null);
          for (let l = 0, u = a.length; l < u; l++) {
            const c = s.drawCalls[l],
              d = e !== c.shader;
            d &&
              ((e = c.shader),
              e &&
                ((e.uniforms.translationMatrix = this.transform.worldTransform),
                e.uniforms.tint &&
                  ((e.uniforms.tint[0] = n.tint[0]),
                  (e.uniforms.tint[1] = n.tint[1]),
                  (e.uniforms.tint[2] = n.tint[2]),
                  (e.uniforms.tint[3] = n.tint[3]))));
            const { texArray: p, styleArray: f, size: m, start: g } = c,
              _ = p.count,
              v = e || t,
              y = v.uniforms.styleTextureId,
              x = v.uniforms.styleMatrix,
              A = v.uniforms.styleLine;
            for (let b = 0; b < f.count; b++) {
              (y[b] = f.textureIds[b]),
                (A[b * 2] = f.lines[b * 2]),
                (A[b * 2 + 1] = f.lines[b * 2 + 1]);
              const E = f.matrices[b];
              (x[b * 6] = E.a),
                (x[b * 6 + 1] = E.c),
                (x[b * 6 + 2] = E.tx),
                (x[b * 6 + 3] = E.b),
                (x[b * 6 + 4] = E.d),
                (x[b * 6 + 5] = E.ty);
            }
            const w = v.uniforms.samplerSize;
            for (let b = 0; b < _; b++)
              (w[b * 2] = p.elements[b].width),
                (w[b * 2 + 1] = p.elements[b].height);
            r.shader.bind(v), d && r.geometry.bind(s);
            for (let b = 0; b < _; b++) r.texture.bind(p.elements[b], b);
            r.geometry.draw(Wt.TRIANGLES, m, g);
          }
        }
        _resolveDirectShader(r) {
          let t = this.shader;
          const e = this.pluginName;
          return (
            t || (Yr[e] || (Yr[e] = new Ai(this.shaderSettings)), (t = Yr[e])),
            t
          );
        }
        _calculateBounds() {
          this.finishPoly();
          const r = this._geometry;
          if (!r.graphicsData.length) return;
          const { minX: t, minY: e, maxX: s, maxY: i } = r.bounds;
          this._bounds.addFrame(this.transform, t, e, s, i);
        }
        containsPoint(r) {
          return (
            this.worldTransform.applyInverse(r, wi._TEMP_POINT),
            this._geometry.containsPoint(wi._TEMP_POINT)
          );
        }
        calculateTints() {
          if (this.batchTint !== this.tint) {
            this.batchTint = this._tintColor.toNumber();
            for (let r = 0; r < this.batches.length; r++) {
              const t = this.batches[r];
              t._tintRGB = Q.shared
                .setValue(this._tintColor)
                .multiply(t._batchRGB)
                .toLittleEndianNumber();
            }
          }
        }
        calculateVertices() {
          const r = this.transform._worldID;
          if (this._transformID === r) return;
          this._transformID = r;
          const t = this.transform.worldTransform,
            e = t.a,
            s = t.b,
            i = t.c,
            n = t.d,
            a = t.tx,
            o = t.ty,
            h = this._geometry.points,
            l = this.vertexData;
          let u = 0;
          for (let c = 0; c < h.length; c += 2) {
            const d = h[c],
              p = h[c + 1];
            (l[u++] = e * d + i * p + a), (l[u++] = n * p + s * d + o);
          }
        }
        closePath() {
          const r = this.currentPath;
          return r && (r.closeStroke = !0), this;
        }
        setMatrix(r) {
          return (this._matrix = r), this;
        }
        beginHole() {
          return this.finishPoly(), (this._holeMode = !0), this;
        }
        endHole() {
          return this.finishPoly(), (this._holeMode = !1), this;
        }
        destroy(r) {
          this._geometry.refCount--,
            this._geometry.refCount === 0 && this._geometry.dispose(),
            (this._matrix = null),
            (this.currentPath = null),
            this._lineStyle.destroy(),
            (this._lineStyle = null),
            this._fillStyle.destroy(),
            (this._fillStyle = null),
            (this._geometry = null),
            (this.shader = null),
            (this.vertexData = null),
            (this.batches.length = 0),
            (this.batches = null),
            super.destroy(r);
        }
      };
    let qr = wi;
    (qr.curves = Re), (qr._TEMP_POINT = new q());
    class Od extends oe {
      constructor(e, s) {
        super();
        $t(this, "timer_graphics");
        $t(this, "line_graphics");
        $t(this, "radius", 0);
        $t(this, "shape");
        $t(this, "drop_constraints");
        $t(this, "last_timer_percent", 0);
        $t(this, "timer_percent", 0);
        $t(this, "smooth_move");
        $t(this, "smooth_move_origin");
        (this.is_other = e),
          (this.context = s),
          this.scale.set(ut.SCALE),
          (this.x = op.x + Es / 2),
          (this.y = Ho),
          (this.rotation = -0.785398163),
          e ||
            ((this.timer_graphics = new qr()),
            (this.timer_graphics.rotation = 0.785398163),
            this.addChild(this.timer_graphics),
            (this.line_graphics = new je()),
            (this.line_graphics.rotation = 0.785398163),
            this.addChild(this.line_graphics)),
          this.update_visible();
      }
      set_type(e) {
        var n;
        if (e === void 0 || e === Ne.Unknown) {
          (this.drop_constraints = void 0),
            (this.texture = L.EMPTY),
            (n = this.line_graphics) == null || n.clear();
          return;
        }
        const s = sn(e),
          i = xi[e];
        (this.texture = L.from(i)),
          this.anchor.set(s.center.x, s.center.y),
          (this.radius = s.size.x * s.hitbox_radius * ut.SCALE),
          (this.drop_constraints = hp(this.radius)),
          this.move_to(this.x),
          this.line_graphics &&
            (this.shape = new this.context.RAPIER.Ball(
              s.hitbox_radius * s.size.x * ut.SCALE
            )),
          this.update_line();
      }
      update_line() {
        if (!this.line_graphics || !this.shape) return;
        const e = 1,
          s = this.context.world.castShape(
            { x: this.x, y: this.y },
            0,
            { x: 0, y: e },
            this.shape,
            10,
            !1,
            void 0,
            65537
          );
        if (!s) return;
        const i = s.toi * e;
        this.line_graphics.clear().beginFill(16777215, 0.8);
        const n = Math.round(800 * this.radius);
        for (let a = 0.5; a < n + 0.5; a++) {
          const o = (a * Math.PI * 2) / n,
            h = (Math.cos(o) * this.radius) / ut.SCALE,
            l = (Math.sin(o) * this.radius + i) / ut.SCALE;
          this.line_graphics.drawCircle(h, l, 6);
        }
        this.line_graphics
          .endFill()
          .beginFill(16777215)
          .drawRect(
            -5,
            this.radius / ut.SCALE + 20,
            10,
            (i - this.radius) / ut.SCALE - 20
          )
          .endFill();
      }
      update_drop_time(e) {
        this.timer_percent = Oe(
          ((e - this.context.last_drop_time) / this.context.drop_timer) * 2 - 1,
          [0, 1]
        );
      }
      update_visible() {
        this.visible =
          !this.context.is_dead && this.context.falling_fruit === void 0;
      }
      updateMovement() {
        if (this.is_other) {
          if (!this.smooth_move || !this.smooth_move_origin) return;
          const e = performance.now() - 50,
            s = this.smooth_move.time - this.smooth_move_origin.time,
            i = Oe((e - this.smooth_move_origin.time) / s, [0, 1]);
          this.x =
            this.smooth_move_origin.x +
            (this.smooth_move.x - this.smooth_move_origin.x) * i;
        } else
          this.last_timer_percent !== this.timer_percent &&
            ((this.last_timer_percent = this.timer_percent),
            this.timer_graphics.clear(),
            this.timer_graphics
              .lineStyle(20, 16711680)
              .arc(
                0,
                0,
                this.radius / ut.SCALE + 20,
                -Math.PI / 2,
                this.timer_percent * Math.PI * 2 - Math.PI / 2
              )
              .endFill());
      }
      move_to_smooth(e) {
        (this.smooth_move_origin = this.smooth_move),
          (this.smooth_move = { x: e, time: performance.now() });
      }
      move_to(e) {
        (this.smooth_move = void 0),
          this.drop_constraints && (e = Oe(e, this.drop_constraints)),
          (this.x = e);
      }
      destroy(e) {
        var s, i;
        (s = this.timer_graphics) == null || s.destroy(),
          (i = this.line_graphics) == null || i.destroy(),
          super.destroy(e);
      }
    }
    const { window: Kr } = lp;
    function wo(r) {
      let t,
        e = `${r[2] * 100}%`,
        s,
        i,
        n = "HOLD",
        a = `translateX(${(r[2] - 0.5) * 8}px)`;
      return {
        c() {
          (t = ct("div")),
            (s = It()),
            (i = ct("p")),
            (i.textContent = n),
            this.h();
        },
        l(o) {
          (t = dt(o, "DIV", { class: !0 })),
            St(t).forEach(ot),
            (s = Ct(o)),
            (i = dt(o, "P", { class: !0, "data-svelte-h": !0 })),
            Di(i) !== "svelte-q3dm0n" && (i.textContent = n),
            this.h();
        },
        h() {
          et(t, "class", "absolute inset-0 z-0 h-full bg-green-700/50"),
            fe(t, "width", e),
            et(i, "class", "absolute left-0 z-10 w-full text-center"),
            fe(i, "transform", a);
        },
        m(o, h) {
          Zt(o, t, h), Zt(o, s, h), Zt(o, i, h);
        },
        p(o, h) {
          h & 4 && e !== (e = `${o[2] * 100}%`) && fe(t, "width", e),
            h & 4 &&
              a !== (a = `translateX(${(o[2] - 0.5) * 8}px)`) &&
              fe(i, "transform", a);
        },
        d(o) {
          o && (ot(t), ot(s), ot(i));
        },
      };
    }
    function Fd(r) {
      let t,
        e,
        s,
        i = "RESET",
        n,
        a,
        o,
        h = r[1] && wo(r);
      return {
        c() {
          (t = ct("button")),
            h && h.c(),
            (e = It()),
            (s = ct("p")),
            (s.textContent = i),
            this.h();
        },
        l(l) {
          t = dt(l, "BUTTON", { class: !0 });
          var u = St(t);
          h && h.l(u),
            (e = Ct(u)),
            (s = dt(u, "P", { class: !0, "data-svelte-h": !0 })),
            Di(s) !== "svelte-w1hn4u" && (s.textContent = i),
            u.forEach(ot),
            this.h();
        },
        h() {
          et(s, "class", "relative z-10"),
            Oo(s, "opacity-0", r[1]),
            et(
              t,
              "class",
              (n =
                "user-glow relative shrink-0 overflow-hidden rounded-xl border-2 border-green-700 bg-green-500/50 px-2 py-0.5 text-lg font-bold text-green-950 outline-none transition-transform " +
                (r[1] ? "scale-95" : ""))
            );
        },
        m(l, u) {
          Zt(l, t, u),
            h && h.m(t, null),
            at(t, e),
            at(t, s),
            a ||
              ((o = [
                Qe(Kr, "pointerup", r[4]),
                Qe(Kr, "keydown", r[6]),
                Qe(Kr, "keyup", r[7]),
                Qe(t, "pointerup", ip(r[4])),
                Qe(t, "pointerdown", r[8]),
              ]),
              (a = !0));
        },
        p(l, [u]) {
          l[1]
            ? h
              ? h.p(l, u)
              : ((h = wo(l)), h.c(), h.m(t, e))
            : h && (h.d(1), (h = null)),
            u & 2 && Oo(s, "opacity-0", l[1]),
            u & 2 &&
              n !==
                (n =
                  "user-glow relative shrink-0 overflow-hidden rounded-xl border-2 border-green-700 bg-green-500/50 px-2 py-0.5 text-lg font-bold text-green-950 outline-none transition-transform " +
                  (l[1] ? "scale-95" : "")) &&
              et(t, "class", n);
        },
        i: bs,
        o: bs,
        d(l) {
          l && ot(t), h && h.d(), (a = !1), rp(o);
        },
      };
    }
    const kd = 800;
    function Ud(r, t, e) {
      let { reset: s } = t,
        i = !1;
      Mi(() => {
        const m = Date.now();
        let g = (v) => {
          v.key === "r" &&
            (window.removeEventListener("keyup", g), e(0, (i = !0)));
        };
        const _ = (v) => {
          v.key === "r" &&
            (window.removeEventListener("keydown", _),
            Date.now() - m < 200
              ? window.addEventListener("keyup", g)
              : (e(0, (i = !0)), u()));
        };
        return (
          window.addEventListener("keydown", _),
          () => {
            window.removeEventListener("keydown", _),
              window.removeEventListener("keyup", g);
          }
        );
      });
      let n = !1,
        a = null,
        o = 0,
        h;
      function l(m) {
        n &&
          ((h = requestAnimationFrame(l)),
          a === null && (a = m),
          e(2, (o = (m - a) / kd)),
          o >= 1 && (s(), c()));
      }
      Ts(() => {
        cancelAnimationFrame(h);
      });
      function u() {
        n ||
          (e(1, (n = !0)), (a = null), e(2, (o = 0)), requestAnimationFrame(l));
      }
      function c() {
        e(1, (n = !1)), e(2, (o = 0));
      }
      const d = (m) => {
          i && m.key === "r" && u();
        },
        p = (m) => {
          m.key === "r" && c();
        },
        f = (m) => {
          m.button === 0 && u();
        };
      return (
        (r.$$set = (m) => {
          "reset" in m && e(5, (s = m.reset));
        }),
        [i, n, o, u, c, s, d, p, f]
      );
    }
    class Gd extends Li {
      constructor(t) {
        super(), Ni(this, t, Ud, Fd, Ri, { reset: 5 });
      }
    }
    function Hd(r) {
      let t, e;
      return (
        (t = new Ap({
          props: {
            class: "shrink-0",
            user: r[6].player,
            rating: r[0].lobby.gameMode === "pvp-ranked",
          },
        })),
        {
          c() {
            Oi(t.$$.fragment);
          },
          l(s) {
            Fi(t.$$.fragment, s);
          },
          m(s, i) {
            ki(t, s, i), (e = !0);
          },
          p(s, i) {
            const n = {};
            i[0] & 1 && (n.rating = s[0].lobby.gameMode === "pvp-ranked"),
              t.$set(n);
          },
          i(s) {
            e || (Tt(t.$$.fragment, s), (e = !0));
          },
          o(s) {
            Pt(t.$$.fragment, s), (e = !1);
          },
          d(s) {
            Ui(t, s);
          },
        }
      );
    }
    function So(r) {
      let t, e;
      return (
        (t = new Gd({ props: { reset: r[1] } })),
        {
          c() {
            Oi(t.$$.fragment);
          },
          l(s) {
            Fi(t.$$.fragment, s);
          },
          m(s, i) {
            ki(t, s, i), (e = !0);
          },
          p(s, i) {
            const n = {};
            i[0] & 2 && (n.reset = s[1]), t.$set(n);
          },
          i(s) {
            e || (Tt(t.$$.fragment, s), (e = !0));
          },
          o(s) {
            Pt(t.$$.fragment, s), (e = !1);
          },
          d(s) {
            Ui(t, s);
          },
        }
      );
    }
    function zd(r) {
      let t, e;
      return (
        (t = new _p({
          props: { small: r[0].lobby.gameMode === "co-op", score: r[5].score },
        })),
        {
          c() {
            Oi(t.$$.fragment);
          },
          l(s) {
            Fi(t.$$.fragment, s);
          },
          m(s, i) {
            ki(t, s, i), (e = !0);
          },
          p(s, i) {
            const n = {};
            i[0] & 1 && (n.small = s[0].lobby.gameMode === "co-op"),
              i[0] & 32 && (n.score = s[5].score),
              t.$set(n);
          },
          i(s) {
            e || (Tt(t.$$.fragment, s), (e = !0));
          },
          o(s) {
            Pt(t.$$.fragment, s), (e = !1);
          },
          d(s) {
            Ui(t, s);
          },
        }
      );
    }
    function Xd(r) {
      let t, e;
      return (
        (t = new vh({ props: { dead: r[5].is_dead, value: r[4] } })),
        {
          c() {
            Oi(t.$$.fragment);
          },
          l(s) {
            Fi(t.$$.fragment, s);
          },
          m(s, i) {
            ki(t, s, i), (e = !0);
          },
          p(s, i) {
            const n = {};
            i[0] & 32 && (n.dead = s[5].is_dead),
              i[0] & 16 && (n.value = s[4]),
              t.$set(n);
          },
          i(s) {
            e || (Tt(t.$$.fragment, s), (e = !0));
          },
          o(s) {
            Pt(t.$$.fragment, s), (e = !1);
          },
          d(s) {
            Ui(t, s);
          },
        }
      );
    }
    function Vd(r) {
      let t,
        e,
        s,
        i,
        n,
        a,
        o,
        h,
        l,
        u,
        c,
        d,
        p,
        f,
        m,
        g,
        _,
        v,
        y = r[6].player.username && Hd(r),
        x = r[1] && r[0].lobby.gameMode === "singleplayer" && So(r);
      const A = [Xd, zd],
        w = [];
      function b(E, S) {
        return E[0].lobby.gameMode === "pvp" ||
          E[0].lobby.gameMode === "pvp-ranked"
          ? 0
          : 1;
      }
      return (
        (f = b(r)),
        (m = w[f] = A[f](r)),
        {
          c() {
            (t = ct("div")),
              (e = ct("div")),
              y && y.c(),
              (s = It()),
              x && x.c(),
              (i = It()),
              (n = ct("div")),
              (a = ct("img")),
              (h = It()),
              (l = ct("div")),
              (u = It()),
              (c = ct("img")),
              (p = It()),
              m.c(),
              this.h();
          },
          l(E) {
            t = dt(E, "DIV", { class: !0 });
            var S = St(t);
            e = dt(S, "DIV", { class: !0 });
            var F = St(e);
            y && y.l(F),
              (s = Ct(F)),
              x && x.l(F),
              F.forEach(ot),
              (i = Ct(S)),
              (n = dt(S, "DIV", { class: !0 }));
            var K = St(n);
            (a = dt(K, "IMG", { src: !0, class: !0, alt: !0 })),
              (h = Ct(K)),
              (l = dt(K, "DIV", {})),
              St(l).forEach(ot),
              (u = Ct(K)),
              (c = dt(K, "IMG", { src: !0, class: !0, alt: !0 })),
              K.forEach(ot),
              (p = Ct(S)),
              m.l(S),
              S.forEach(ot),
              this.h();
          },
          h() {
            et(e, "class", "flex items-center gap-2"),
              Bi(a.src, (o = Go)) || et(a, "src", o),
              et(
                a,
                "class",
                "pointer-events-none max-h-[50vh] sm:max-w-[50vw] md:max-h-[80vh] md:max-w-[30vw] xl:max-w-[25vw]"
              ),
              et(a, "alt", ""),
              Bi(c.src, (d = up)) || et(c, "src", d),
              et(
                c,
                "class",
                "pointer-events-none absolute inset-0 h-full w-full"
              ),
              et(c, "alt", ""),
              et(n, "class", "relative mb-2 h-fit w-fit flex-grow-0"),
              fe(
                n,
                "filter",
                r[5].is_dead ? "brightness(0.8) saturate(0.2)" : void 0
              ),
              et(
                t,
                "class",
                "relative flex select-none flex-col items-center justify-center p-4"
              );
          },
          m(E, S) {
            Zt(E, t, S),
              at(t, e),
              y && y.m(e, null),
              at(e, s),
              x && x.m(e, null),
              at(t, i),
              at(t, n),
              at(n, a),
              at(n, h),
              at(n, l),
              r[17](l),
              at(n, u),
              at(n, c),
              r[18](n),
              at(t, p),
              w[f].m(t, null),
              (g = !0),
              _ || ((v = Qe(a, "load", r[7])), (_ = !0));
          },
          p(E, S) {
            E[6].player.username && y.p(E, S),
              E[1] && E[0].lobby.gameMode === "singleplayer"
                ? x
                  ? (x.p(E, S), S[0] & 3 && Tt(x, 1))
                  : ((x = So(E)), x.c(), Tt(x, 1), x.m(e, null))
                : x &&
                  (Fo(),
                  Pt(x, 1, 1, () => {
                    x = null;
                  }),
                  ko()),
              S[0] & 32 &&
                fe(
                  n,
                  "filter",
                  E[5].is_dead ? "brightness(0.8) saturate(0.2)" : void 0
                );
            let F = f;
            (f = b(E)),
              f === F
                ? w[f].p(E, S)
                : (Fo(),
                  Pt(w[F], 1, 1, () => {
                    w[F] = null;
                  }),
                  ko(),
                  (m = w[f]),
                  m ? m.p(E, S) : ((m = w[f] = A[f](E)), m.c()),
                  Tt(m, 1),
                  m.m(t, null));
          },
          i(E) {
            g || (Tt(y), Tt(x), Tt(m), (g = !0));
          },
          o(E) {
            Pt(y), Pt(x), Pt(m), (g = !1);
          },
          d(E) {
            E && ot(t),
              y && y.d(),
              x && x.d(),
              r[17](null),
              r[18](null),
              w[f].d(),
              (_ = !1),
              v();
          },
        }
      );
    }
    const Io = 0.08;
    function $d(r, t, e) {
      let s,
        { is_other: i = !1 } = t,
        { player_id: n } = t,
        { settings: a } = t;
      const o = a.initialBoardStates.get(n);
      if (!o) throw new Error("No initial state for player");
      let h, l;
      const u = new Sa({
        backgroundAlpha: 0,
        resolution: window.devicePixelRatio,
      });
      Mi(() => {
        (u.view.className = "absolute inset-0 w-full h-full"),
          l.replaceWith(u.view);
      });
      let c;
      const d = () => {
          p(), (c = requestAnimationFrame(f));
        },
        p = () => {
          c && (cancelAnimationFrame(c), (c = void 0));
        },
        f = () => {
          if ((p(), !h)) return;
          const { clientHeight: I, clientWidth: X } = h;
          u.renderer.resize(X, I),
            u.render(),
            u.stage.scale.set(cp * (X / 1335)),
            m();
        };
      function m() {
        s.is_dead && (_.alpha = 1),
          _.clear().lineStyle(3 / u.stage.scale.x, 16777215);
        const I = 40,
          X = -Es,
          Y = Es * 2;
        for (let H = 0; H < I; H++) {
          const _t = (H * Y) / I + X;
          _.moveTo(_t, rn).lineTo(_t + Y / (I * 2), rn);
        }
      }
      window.addEventListener("resize", d),
        Ts(() => {
          window.removeEventListener("resize", d);
        }),
        u.ticker.add((I) => {
          for (const X of s.fruits.values()) X.render();
          if (
            (s.preview_fruit.updateMovement(),
            s.fruit_renderer.mask.clear(),
            s.fruit_renderer.holes.size)
          ) {
            s.fruit_renderer.mask.beginFill();
            for (const X of s.fruit_renderer.holes.values())
              s.fruit_renderer.mask.drawCircle(X.x, X.y, X.r);
            s.fruit_renderer.mask.endFill();
          }
          for (_.x += I * 3e-4; _.x > Es; ) _.x -= Es;
        });
      const g = new yt();
      (u.stage.eventMode = "static"),
        u.stage.addChild(g),
        (u.stage.sortableChildren = !0),
        (g.zIndex = 10),
        (g.sortableChildren = !0);
      const _ = new je();
      u.stage.addChild(_), (_.alpha = 0);
      const v = Is.World.restoreSnapshot(o.rapierState),
        y = new Map();
      Ts(() => {
        v.free(), u.destroy();
      });
      const x = ts({
        RAPIER: Is,
        app: u,
        preview_fruit: void 0,
        fruit_renderer: {
          holes: new Map(),
          container: g,
          mask: ut.create_mask(g),
        },
        ground_handle: o.groundHandle,
        kill_grace_timer: o.killGraceTimer,
        is_dead: o.isDead,
        event_queue: new Is.EventQueue(!0),
        world: v,
        fruits: y,
        score: o.score,
        last_drop_time: o.lastDropTime,
        drop_timer: o.dropTimer,
        garbage_bar: o.garbageBar,
        fruit_queue: {
          current: a.initialFruit,
          next: a.secondFruit,
          next_next: Ne.Unknown,
        },
      });
      Pi(r, x, (I) => e(5, (s = I)));
      const A = o.hasFallingFruit ? o.fallingFruit : void 0;
      for (const [I, X] of o.fruits) {
        const Y = ut.restore(I, X, s);
        Y.handle === A && Rt(x, (s.falling_fruit = Y), s);
      }
      Rt(x, (s.preview_fruit = new Od(i, s)), s),
        u.stage.addChild(s.preview_fruit),
        s.is_dead && m();
      const w = dp(s, {
          on_create(I, X) {
            i || wp(), ut.create(I.output, X, s), x.update((Y) => Y);
          },
          on_finish_falling() {
            s.fruit_queue.next_next !== Ne.Unknown &&
              Rt(x, (s.fruit_queue.next = s.fruit_queue.next_next), s);
          },
          on_rotten_pop() {
            i || Sp();
          },
        }),
        b = np();
      if (!i) {
        let I = !1;
        const X = (bt) => {
            bt.button !== 0 || !bt.altKey || (I = !0);
          },
          Y = (bt) => {
            if (bt.button !== 0 || ((I = !1), s.is_dead)) return;
            const { left: Ze } = s.app.view.getBoundingClientRect();
            GameData = s;
		//s.world.gravity.y = 30.0
            s.preview_fruit.move_to((bt.clientX - Ze) / u.stage.scale.x),
              b("drop", { x: s.preview_fruit.x, buffer: !0 });
          },
          H = (bt) => {
            const { left: Ze } = s.app.view.getBoundingClientRect();
            s.preview_fruit.move_to((bt.clientX - Ze) / u.stage.scale.x);
          };
        let _t = 0;
        const Je = setInterval(() => {
          s.preview_fruit.x !== _t &&
            (b("pointer_move", s.preview_fruit.x), (_t = s.preview_fruit.x)),
            I && !s.is_dead && b("drop", { x: s.preview_fruit.x, buffer: !1 });
        }, 100);
        window.addEventListener("pointerdown", X),
          window.addEventListener("pointerup", Y),
          window.addEventListener("pointermove", H),
          Ts(() => {
            clearInterval(Je),
              window.removeEventListener("pointerdown", X),
              window.removeEventListener("pointerup", Y),
              window.removeEventListener("pointermove", H);
          });
      }
      let E = 0;
      function S(I) {
        return !s.falling_fruit && I - s.last_drop_time > bp;
      }
      function F(I) {
        e(4, (E = I));
      }
      function K(I) {
        for (const H of s.fruit_renderer.holes.values()) H.update();
        if ((s.preview_fruit.update_visible(), s.is_dead)) return;
        s.world.step(s.event_queue);
        for (const H of s.fruits.values()) {
          const _t = H.rigidBody.linvel().y < -0.2;
          H.collider.setCollisionGroups(_t ? 196609 : 65537);
        }
        s.preview_fruit.update_drop_time(I),
          s.preview_fruit.update_line(),
          s.event_queue.drainCollisionEvents(w);
        let X = !1,
          Y = 100;
        for (const H of s.fruits.values()) {
          if (H === s.falling_fruit) continue;
          const _t = H.rigidBody.translation().y - H.radius - rn;
          if ((_t < Y && (Y = _t), _t < 0)) {
            X = !0;
            break;
          }
        }
        if (X) {
          ShouldRefresh = 1;
      } else {
          if (s.kill_grace_timer !== 0) {
              Rt(x, s.kill_grace_timer = 0, s);
          }
      }
      
      _.alpha = Oe((Y - Io) / (0 - Io), [0, 1]);
      }
      function D(I) {
        const X = s.fruits.get(I.lethalFruitHandle);
        X && (X.sprite.alpha = 0.5), Rt(x, (s.is_dead = !0), s), m();
      }
      function T(I) {
        s.preview_fruit.move_to_smooth(I);
      }
      function R(I) {
        Rt(x, (s.falling_fruit = ut.create(I.type, { x: I.x, y: Ho }, s)), s),
          Rt(x, (s.last_drop_time = I.tick), s),
          Rt(x, (s.fruit_queue.next_next = I.nextPreview), s),
          Rt(x, (s.fruit_queue.current = s.fruit_queue.next), s),
          Rt(x, (s.preview_fruit.visible = !1), s),
          i && s.preview_fruit.move_to(I.x);
          GameData = s;
      }
      Mi(() => {
        let I = Ne.Unknown,
          X = Ne.Unknown,
          Y = 0;
        return x.subscribe((H) => {
          H.fruit_queue.current !== I &&
            ((I = H.fruit_queue.current),
            H.preview_fruit.set_type(I),
            b("next_fruit", I)),
            H.fruit_queue.next !== X &&
              ((X = H.fruit_queue.next), b("next_fruit", X)),
            H.score !== Y && ((Y = H.score), b("score", Y));
        });
      });
      let { reset: G = void 0 } = t;
      function J(I) {
        Jr[I ? "unshift" : "push"](() => {
          (l = I), e(3, l);
        });
      }
      function z(I) {
        Jr[I ? "unshift" : "push"](() => {
          (h = I), e(2, h);
        });
      }
      return (
        (r.$$set = (I) => {
          "is_other" in I && e(9, (i = I.is_other)),
            "player_id" in I && e(10, (n = I.player_id)),
            "settings" in I && e(0, (a = I.settings)),
            "reset" in I && e(1, (G = I.reset));
        }),
        [a, G, h, l, E, s, o, f, x, i, n, S, F, K, D, T, R, J, z]
      );
    }
    jo = class extends Li {
      constructor(r) {
        super(),
          Ni(
            this,
            r,
            $d,
            Vd,
            Ri,
            {
              is_other: 9,
              player_id: 10,
              settings: 0,
              can_drop_fruit: 11,
              set_garbage: 12,
              update: 13,
              die: 14,
              move_preview_other: 15,
              drop_fruit: 16,
              reset: 1,
            },
            null,
            [-1, -1]
          );
      }
      get can_drop_fruit() {
        return this.$$.ctx[11];
      }
      get set_garbage() {
        return this.$$.ctx[12];
      }
      get update() {
        return this.$$.ctx[13];
      }
      get die() {
        return this.$$.ctx[14];
      }
      get move_preview_other() {
        return this.$$.ctx[15];
      }
      get drop_fruit() {
        return this.$$.ctx[16];
      }
    };
    const Wd = (r) => ({}),
      Co = (r) => ({}),
      jd = (r) => ({}),
      Ro = (r) => ({}),
      Yd = (r) => ({}),
      Po = (r) => ({});
    function Mo(r) {
      let t,
        e,
        s = `<source srcset="${
          "" +
          new URL("../assets/next_bubble.7ce47de7.avif", import.meta.url).href +
          " 1x, " +
          new URL("../assets/next_bubble.43d2fc84.avif", import.meta.url).href +
          " 2x"
        }" type="image/avif"/><source srcset="${
          "" +
          new URL("../assets/next_bubble.7a8fe930.webp", import.meta.url).href +
          " 1x, " +
          new URL("../assets/next_bubble.0c58ae0c.webp", import.meta.url).href +
          " 2x"
        }" type="image/webp"/><source srcset="${
          "" +
          new URL("../assets/next_bubble.92c8d5fc.png", import.meta.url).href +
          " 1x, " +
          new URL("../assets/next_bubble.a8950981.png", import.meta.url).href +
          " 2x"
        }" type="image/png"/><img class="absolute inset-0" alt="" src=""+new URL('../assets/next_bubble.a8950981.png', import.meta.url).href+"" width="1000" height="1000"/>`,
        i,
        n = r[0] && Do(r);
      return {
        c() {
          (t = ct("div")),
            (e = ct("picture")),
            (e.innerHTML = s),
            (i = It()),
            n && n.c(),
            this.h();
        },
        l(a) {
          t = dt(a, "DIV", { class: !0 });
          var o = St(t);
          (e = dt(o, "PICTURE", { "data-svelte-h": !0 })),
            Di(e) !== "svelte-1cw1dog" && (e.innerHTML = s),
            (i = Ct(o)),
            n && n.l(o),
            o.forEach(ot),
            this.h();
        },
        h() {
          et(
            t,
            "class",
            "relative aspect-square h-3/5 max-w-[200px] p-4 md:h-auto md:w-4/5 md:p-8"
          );
        },
        m(a, o) {
          Zt(a, t, o), at(t, e), at(t, i), n && n.m(t, null);
        },
        p(a, o) {
          a[0]
            ? n
              ? n.p(a, o)
              : ((n = Do(a)), n.c(), n.m(t, null))
            : n && (n.d(1), (n = null));
        },
        d(a) {
          a && ot(t), n && n.d();
        },
      };
    }
    function Do(r) {
      let t,
        e,
        s,
        i = `translate(${-r[0].center.x * 100 + 50}%,${
          -r[0].center.y * 100 + 50
        }%)`;
      return {
        c() {
          (t = ct("img")), this.h();
        },
        l(n) {
          (t = dt(n, "IMG", { class: !0, src: !0, alt: !0 })), this.h();
        },
        h() {
          et(t, "class", "aspect-square w-full object-contain"),
            Bi(t.src, (e = r[0].img)) || et(t, "src", e),
            et(t, "alt", (s = r[0].name)),
            fe(t, "transform", i);
        },
        m(n, a) {
          Zt(n, t, a);
        },
        p(n, a) {
          a & 1 && !Bi(t.src, (e = n[0].img)) && et(t, "src", e),
            a & 1 && s !== (s = n[0].name) && et(t, "alt", s),
            a & 1 &&
              i !==
                (i = `translate(${-n[0].center.x * 100 + 50}%,${
                  -n[0].center.y * 100 + 50
                }%)`) &&
              fe(t, "transform", i);
        },
        d(n) {
          n && ot(t);
        },
      };
    }
    function qd(r) {
      let t,
        e,
        s,
        i,
        n,
        a = `<picture><source srcset="${
          "" +
          new URL("../assets/fruit_chart.90fdf98e.avif", import.meta.url).href +
          " 1x, " +
          new URL("../assets/fruit_chart.ed1d11a0.avif", import.meta.url).href +
          " 2x"
        }" type="image/avif"/><source srcset="${
          "" +
          new URL("../assets/fruit_chart.9dc68ede.webp", import.meta.url).href +
          " 1x, " +
          new URL("../assets/fruit_chart.e42d6abc.webp", import.meta.url).href +
          " 2x"
        }" type="image/webp"/><source srcset="${
          "" +
          new URL("../assets/fruit_chart.49280815.png", import.meta.url).href +
          " 1x, " +
          new URL("../assets/fruit_chart.9a00b582.png", import.meta.url).href +
          " 2x"
        }" type="image/png"/><img src=""+new URL('../assets/fruit_chart.9a00b582.png', import.meta.url).href+"" alt="Fruit Chart" width="1000" height="1000"/></picture>`,
        o,
        h,
        l,
        u,
        c;
      const d = r[3].left,
        p = Zr(d, r, r[2], Po);
      let f = r[0] !== null && Mo(r);
      const m = r[3].middle,
        g = Zr(m, r, r[2], Ro),
        _ = r[3].right,
        v = Zr(_, r, r[2], Co);
      return {
        c() {
          (t = ct("main")),
            p && p.c(),
            (e = It()),
            (s = ct("section")),
            f && f.c(),
            (i = It()),
            (n = ct("div")),
            (n.innerHTML = a),
            (o = It()),
            g && g.c(),
            (h = It()),
            (l = ct("div")),
            v && v.c(),
            this.h();
        },
        l(y) {
          t = dt(y, "MAIN", { class: !0 });
          var x = St(t);
          p && p.l(x), (e = Ct(x)), (s = dt(x, "SECTION", { class: !0 }));
          var A = St(s);
          f && f.l(A),
            (i = Ct(A)),
            (n = dt(A, "DIV", { class: !0, "data-svelte-h": !0 })),
            Di(n) !== "svelte-b71iu7" && (n.innerHTML = a),
            (o = Ct(A)),
            g && g.l(A),
            A.forEach(ot),
            (h = Ct(x)),
            (l = dt(x, "DIV", { class: !0 }));
          var w = St(l);
          v && v.l(w), w.forEach(ot), x.forEach(ot), this.h();
        },
        h() {
          et(
            n,
            "class",
            "aspect-square h-3/5 max-w-[200px] md:h-auto md:w-4/5"
          ),
            et(
              s,
              "class",
              "flex shrink-0 select-none flex-row items-center justify-center gap-8 md:h-full md:w-1/5 md:flex-col"
            ),
            et(l, "class", "hidden flex-1 self-center md:contents"),
            et(
              t,
              "class",
              (u =
                "flex h-screen w-screen select-none flex-col-reverse items-stretch justify-center overflow-hidden px-8 md:flex-row " +
                r[1])
            );
        },
        m(y, x) {
          Zt(y, t, x),
            p && p.m(t, null),
            at(t, e),
            at(t, s),
            f && f.m(s, null),
            at(s, i),
            at(s, n),
            at(s, o),
            g && g.m(s, null),
            at(t, h),
            at(t, l),
            v && v.m(l, null),
            (c = !0);
        },
        p(y, [x]) {
          p &&
            p.p &&
            (!c || x & 4) &&
            Qr(p, d, y, y[2], c ? en(d, y[2], x, Yd) : tn(y[2]), Po),
            y[0] !== null
              ? f
                ? f.p(y, x)
                : ((f = Mo(y)), f.c(), f.m(s, i))
              : f && (f.d(1), (f = null)),
            g &&
              g.p &&
              (!c || x & 4) &&
              Qr(g, m, y, y[2], c ? en(m, y[2], x, jd) : tn(y[2]), Ro),
            v &&
              v.p &&
              (!c || x & 4) &&
              Qr(v, _, y, y[2], c ? en(_, y[2], x, Wd) : tn(y[2]), Co),
            (!c ||
              (x & 2 &&
                u !==
                  (u =
                    "flex h-screen w-screen select-none flex-col-reverse items-stretch justify-center overflow-hidden px-8 md:flex-row " +
                    y[1]))) &&
              et(t, "class", u);
        },
        i(y) {
          c || (Tt(p, y), Tt(g, y), Tt(v, y), (c = !0));
        },
        o(y) {
          Pt(p, y), Pt(g, y), Pt(v, y), (c = !1);
        },
        d(y) {
          y && ot(t), p && p.d(y), f && f.d(), g && g.d(y), v && v.d(y);
        },
      };
    }
    function Kd(r, t, e) {
      let { $$slots: s = {}, $$scope: i } = t,
        { next_fruit: n } = t,
        { class: a = "" } = t;
      return (
        (r.$$set = (o) => {
          "next_fruit" in o && e(0, (n = o.next_fruit)),
            "class" in o && e(1, (a = o.class)),
            "$$scope" in o && e(2, (i = o.$$scope));
        }),
        [n, a, i, s]
      );
    }
    Yo = class extends Li {
      constructor(r) {
        super(), Ni(this, r, Kd, qd, Ri, { next_fruit: 0, class: 1 });
      }
    };
  })();
export {
  jo as B,
  Yo as G,
  Is as R,
  Ip as __tla,
  qo as a,
  Oe as c,
  nn as f,
  an as g,
  Ko as l,
  on as r,
};
