import { c as Xn } from "./_commonjsHelpers.691cbe36.js";
(function () {
  try {
    var Ve =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      At = new Error().stack;
    At &&
      ((Ve._sentryDebugIds = Ve._sentryDebugIds || {}),
      (Ve._sentryDebugIds[At] = "2032aa43-540f-4ee8-817a-25bf5c693977"),
      (Ve._sentryDebugIdIdentifier =
        "sentry-dbid-2032aa43-540f-4ee8-817a-25bf5c693977"));
  } catch {}
})();
var mn = { exports: {} };
(function (Ve, At) {
  (function (Pt, le) {
    Ve.exports = le();
  })(Xn, () =>
    (() => {
      var Ct = [
          ,
          (q, V, N) => {
            N.r(V), N.d(V, { default: () => me });
            var be = (() => {
              var Z =
                typeof document < "u" && document.currentScript
                  ? document.currentScript.src
                  : void 0;
              return function (I = {}) {
                var l = I,
                  te,
                  ae;
                l.ready = new Promise((t, e) => {
                  (te = t), (ae = e);
                });
                function ne() {
                  function t(p) {
                    const h = i;
                    (r = e = 0),
                      (i = new Map()),
                      h.forEach((g) => {
                        try {
                          g(p);
                        } catch (f) {
                          console.error(f);
                        }
                      }),
                      this.fb(),
                      s && s.Db();
                  }
                  let e = 0,
                    r = 0,
                    i = new Map(),
                    s = null,
                    u = null;
                  (this.requestAnimationFrame = function (p) {
                    e || (e = requestAnimationFrame(t.bind(this)));
                    const h = ++r;
                    return i.set(h, p), h;
                  }),
                    (this.cancelAnimationFrame = function (p) {
                      i.delete(p),
                        e && i.size == 0 && (cancelAnimationFrame(e), (e = 0));
                    }),
                    (this.Bb = function (p) {
                      u && (document.body.remove(u), (u = null)),
                        p ||
                          ((u = document.createElement("div")),
                          (u.style.backgroundColor = "black"),
                          (u.style.position = "fixed"),
                          (u.style.right = 0),
                          (u.style.top = 0),
                          (u.style.color = "white"),
                          (u.style.padding = "4px"),
                          (u.innerHTML = "RIVE FPS"),
                          (p = function (h) {
                            u.innerHTML = "RIVE FPS " + h.toFixed(1);
                          }),
                          document.body.appendChild(u)),
                        (s = new (function () {
                          let h = 0,
                            g = 0;
                          this.Db = function () {
                            var f = performance.now();
                            g
                              ? (++h,
                                (f -= g),
                                1e3 < f && (p((1e3 * h) / f), (h = g = 0)))
                              : ((g = f), (h = 0));
                          };
                        })());
                    }),
                    (this.yb = function () {
                      u && (document.body.remove(u), (u = null)), (s = null);
                    }),
                    (this.fb = function () {});
                }
                function fe(t) {
                  console.assert(!0);
                  const e = new Map();
                  let r = -1 / 0;
                  this.push = function (i) {
                    return (
                      (i = (i + ((1 << t) - 1)) >> t),
                      e.has(i) && clearTimeout(e.get(i)),
                      e.set(
                        i,
                        setTimeout(function () {
                          e.delete(i),
                            e.length == 0
                              ? (r = -1 / 0)
                              : i == r &&
                                ((r = Math.max(...e.keys())),
                                console.assert(r < i));
                        }, 1e3)
                      ),
                      (r = Math.max(i, r)),
                      r << t
                    );
                  };
                }
                const ue =
                    "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                      " "
                    ),
                  re = new (function () {
                    function t() {
                      if (!e) {
                        let M = function (X, _, x) {
                          if (
                            ((_ = v.createShader(_)),
                            v.shaderSource(_, x),
                            v.compileShader(_),
                            (x = v.getShaderInfoLog(_)),
                            0 < x.length)
                          )
                            throw x;
                          v.attachShader(X, _);
                        };
                        var E = document.createElement("canvas"),
                          c = {
                            alpha: 1,
                            depth: 0,
                            stencil: 0,
                            antialias: 0,
                            premultipliedAlpha: 1,
                            preserveDrawingBuffer: 0,
                            preferLowPowerToHighPerformance: 0,
                            failIfMajorPerformanceCaveat: 0,
                            enableExtensionsByDefault: 1,
                            explicitSwapControl: 1,
                            renderViaOffscreenBackBuffer: 1,
                          };
                        let v = E.getContext("webgl2", c);
                        if (v) r = 2;
                        else if ((v = E.getContext("webgl", c))) r = 1;
                        else
                          return (
                            console.log(
                              "No WebGL support. Image mesh will not be drawn."
                            ),
                            !1
                          );
                        if (
                          ((i = Math.min(
                            v.getParameter(v.MAX_RENDERBUFFER_SIZE),
                            v.getParameter(v.MAX_TEXTURE_SIZE)
                          )),
                          (E = v.createProgram()),
                          M(
                            E,
                            v.VERTEX_SHADER,
                            `attribute vec2 vertex;
                attribute vec2 uv;
                uniform vec4 mat;
                uniform vec2 translate;
                varying vec2 st;
                void main() {
                    st = uv;
                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);
                }`
                          ),
                          M(
                            E,
                            v.FRAGMENT_SHADER,
                            `precision highp float;
                uniform sampler2D image;
                varying vec2 st;
                void main() {
                    gl_FragColor = texture2D(image, st);
                }`
                          ),
                          v.bindAttribLocation(E, 0, "vertex"),
                          v.bindAttribLocation(E, 1, "uv"),
                          v.linkProgram(E),
                          (c = v.getProgramInfoLog(E)),
                          0 < c.trim().length)
                        )
                          throw c;
                        (s = v.getUniformLocation(E, "mat")),
                          (u = v.getUniformLocation(E, "translate")),
                          v.useProgram(E),
                          v.bindBuffer(v.ARRAY_BUFFER, v.createBuffer()),
                          v.enableVertexAttribArray(0),
                          v.enableVertexAttribArray(1),
                          v.bindBuffer(
                            v.ELEMENT_ARRAY_BUFFER,
                            v.createBuffer()
                          ),
                          v.uniform1i(v.getUniformLocation(E, "image"), 0),
                          v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                          (e = v);
                      }
                      return !0;
                    }
                    let e = null,
                      r = 0,
                      i = 0,
                      s = null,
                      u = null,
                      p = 0,
                      h = 0;
                    (this.Mb = function () {
                      return t(), i;
                    }),
                      (this.vb = function (E) {
                        if (!t()) return null;
                        const c = e.createTexture();
                        return (
                          e.bindTexture(e.TEXTURE_2D, c),
                          e.texImage2D(
                            e.TEXTURE_2D,
                            0,
                            e.RGBA,
                            e.RGBA,
                            e.UNSIGNED_BYTE,
                            E
                          ),
                          e.texParameteri(
                            e.TEXTURE_2D,
                            e.TEXTURE_WRAP_S,
                            e.CLAMP_TO_EDGE
                          ),
                          e.texParameteri(
                            e.TEXTURE_2D,
                            e.TEXTURE_WRAP_T,
                            e.CLAMP_TO_EDGE
                          ),
                          e.texParameteri(
                            e.TEXTURE_2D,
                            e.TEXTURE_MAG_FILTER,
                            e.LINEAR
                          ),
                          r == 2
                            ? (e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_MIN_FILTER,
                                e.LINEAR_MIPMAP_LINEAR
                              ),
                              e.generateMipmap(e.TEXTURE_2D))
                            : e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_MIN_FILTER,
                                e.LINEAR
                              ),
                          c
                        );
                      });
                    const g = new fe(8),
                      f = new fe(8),
                      R = new fe(10),
                      P = new fe(10);
                    (this.Ab = function (E, c, v, M, X) {
                      if (t()) {
                        var _ = g.push(E),
                          x = f.push(c);
                        (e.canvas.width != _ || e.canvas.height != x) &&
                          ((e.canvas.width = _), (e.canvas.height = x)),
                          e.viewport(0, x - c, E, c),
                          e.disable(e.SCISSOR_TEST),
                          e.clearColor(0, 0, 0, 0),
                          e.clear(e.COLOR_BUFFER_BIT),
                          e.enable(e.SCISSOR_TEST),
                          v.sort((j, We) => We.jb - j.jb),
                          (_ = R.push(M)),
                          p != _ &&
                            (e.bufferData(
                              e.ARRAY_BUFFER,
                              8 * _,
                              e.DYNAMIC_DRAW
                            ),
                            (p = _)),
                          (_ = 0);
                        for (var G of v)
                          e.bufferSubData(e.ARRAY_BUFFER, _, G.Ra),
                            (_ += 4 * G.Ra.length);
                        console.assert(_ == 4 * M);
                        for (var de of v)
                          e.bufferSubData(e.ARRAY_BUFFER, _, de.mb),
                            (_ += 4 * de.mb.length);
                        console.assert(_ == 8 * M),
                          (_ = P.push(X)),
                          h != _ &&
                            (e.bufferData(
                              e.ELEMENT_ARRAY_BUFFER,
                              2 * _,
                              e.DYNAMIC_DRAW
                            ),
                            (h = _)),
                          (G = 0);
                        for (var De of v)
                          e.bufferSubData(
                            e.ELEMENT_ARRAY_BUFFER,
                            G,
                            De.indices
                          ),
                            (G += 2 * De.indices.length);
                        console.assert(G == 2 * X),
                          (De = 0),
                          (de = !0),
                          (_ = G = 0);
                        for (const j of v) {
                          j.image.Ma != De &&
                            (e.bindTexture(e.TEXTURE_2D, j.image.rb || null),
                            (De = j.image.Ma)),
                            j.Pb
                              ? (e.scissor(j.Va, x - j.Wa - j.cb, j.$b, j.cb),
                                (de = !0))
                              : de && (e.scissor(0, x - c, E, c), (de = !1)),
                            (v = 2 / E);
                          const We = -2 / c;
                          e.uniform4f(
                            s,
                            j.xa[0] * v * j.Ga,
                            j.xa[1] * We * j.Ha,
                            j.xa[2] * v * j.Ga,
                            j.xa[3] * We * j.Ha
                          ),
                            e.uniform2f(
                              u,
                              j.xa[4] * v * j.Ga + v * (j.Va - j.Nb * j.Ga) - 1,
                              j.xa[5] * We * j.Ha +
                                We * (j.Wa - j.Ob * j.Ha) +
                                1
                            ),
                            e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, _),
                            e.vertexAttribPointer(
                              1,
                              2,
                              e.FLOAT,
                              !1,
                              0,
                              _ + 4 * M
                            ),
                            e.drawElements(
                              e.TRIANGLES,
                              j.indices.length,
                              e.UNSIGNED_SHORT,
                              G
                            ),
                            (_ += 4 * j.Ra.length),
                            (G += 2 * j.indices.length);
                        }
                        console.assert(_ == 4 * M), console.assert(G == 2 * X);
                      }
                    }),
                      (this.canvas = function () {
                        return t() && e.canvas;
                      });
                  })(),
                  oe = l.onRuntimeInitialized;
                l.onRuntimeInitialized = function () {
                  function t(b) {
                    switch (b) {
                      case f.srcOver:
                        return "source-over";
                      case f.screen:
                        return "screen";
                      case f.overlay:
                        return "overlay";
                      case f.darken:
                        return "darken";
                      case f.lighten:
                        return "lighten";
                      case f.colorDodge:
                        return "color-dodge";
                      case f.colorBurn:
                        return "color-burn";
                      case f.hardLight:
                        return "hard-light";
                      case f.softLight:
                        return "soft-light";
                      case f.difference:
                        return "difference";
                      case f.exclusion:
                        return "exclusion";
                      case f.multiply:
                        return "multiply";
                      case f.hue:
                        return "hue";
                      case f.saturation:
                        return "saturation";
                      case f.color:
                        return "color";
                      case f.luminosity:
                        return "luminosity";
                    }
                  }
                  function e(b) {
                    return (
                      "rgba(" +
                      ((16711680 & b) >>> 16) +
                      "," +
                      ((65280 & b) >>> 8) +
                      "," +
                      ((255 & b) >>> 0) +
                      "," +
                      ((4278190080 & b) >>> 24) / 255 +
                      ")"
                    );
                  }
                  function r() {
                    0 < G.length &&
                      (re.Ab(x.drawWidth(), x.drawHeight(), G, de, De),
                      (G = []),
                      (De = de = 0),
                      x.reset(512, 512));
                    for (const b of _) {
                      for (let C = 0; C < b.ja.length; C++)
                        (C >= b.ja.length - 18 && C <= b.ja.length - 3) ||
                          b.ja[C]();
                      b.ja = [];
                    }
                    _.clear();
                  }
                  oe && oe();
                  var i = l.RenderPaintStyle;
                  const s = l.RenderPath,
                    u = l.RenderPaint,
                    p = l.Renderer,
                    h = l.StrokeCap,
                    g = l.StrokeJoin,
                    f = l.BlendMode,
                    R = i.fill,
                    P = i.stroke,
                    E = l.FillRule.evenOdd;
                  let c = 1;
                  var v = l.RenderImage.extend("CanvasRenderImage", {
                      __construct: function ({ Aa: b, Fa: C } = {}) {
                        this.__parent.__construct.call(this),
                          (this.Ma = c),
                          (c = (c + 1) & 2147483647 || 1),
                          (this.Aa = b),
                          (this.Fa = C);
                      },
                      decode: function (b) {
                        var C = this;
                        C.Fa && C.Fa(C);
                        var U = new Image();
                        (U.src = URL.createObjectURL(
                          new Blob([b], { type: "image/png" })
                        )),
                          (U.onload = function () {
                            (C.ob = U),
                              (C.rb = re.vb(U)),
                              C.size(U.width, U.height),
                              C.Aa && C.Aa(C);
                          });
                      },
                    }),
                    M = s.extend("CanvasRenderPath", {
                      __construct: function () {
                        this.__parent.__construct.call(this),
                          (this.pa = new Path2D());
                      },
                      rewind: function () {
                        this.pa = new Path2D();
                      },
                      addPath: function (b, C, U, k, O, W, B) {
                        var $ = this.pa,
                          ve = $.addPath;
                        b = b.pa;
                        const K = new DOMMatrix();
                        (K.a = C),
                          (K.b = U),
                          (K.c = k),
                          (K.d = O),
                          (K.e = W),
                          (K.f = B),
                          ve.call($, b, K);
                      },
                      fillRule: function (b) {
                        this.Ta = b;
                      },
                      moveTo: function (b, C) {
                        this.pa.moveTo(b, C);
                      },
                      lineTo: function (b, C) {
                        this.pa.lineTo(b, C);
                      },
                      cubicTo: function (b, C, U, k, O, W) {
                        this.pa.bezierCurveTo(b, C, U, k, O, W);
                      },
                      close: function () {
                        this.pa.closePath();
                      },
                    }),
                    X = u.extend("CanvasRenderPaint", {
                      color: function (b) {
                        this.Ua = e(b);
                      },
                      thickness: function (b) {
                        this.sb = b;
                      },
                      join: function (b) {
                        switch (b) {
                          case g.miter:
                            this.La = "miter";
                            break;
                          case g.round:
                            this.La = "round";
                            break;
                          case g.bevel:
                            this.La = "bevel";
                        }
                      },
                      cap: function (b) {
                        switch (b) {
                          case h.butt:
                            this.Ka = "butt";
                            break;
                          case h.round:
                            this.Ka = "round";
                            break;
                          case h.square:
                            this.Ka = "square";
                        }
                      },
                      style: function (b) {
                        this.qb = b;
                      },
                      blendMode: function (b) {
                        this.nb = t(b);
                      },
                      clearGradient: function () {
                        this.za = null;
                      },
                      linearGradient: function (b, C, U, k) {
                        this.za = { kb: b, lb: C, Za: U, $a: k, Pa: [] };
                      },
                      radialGradient: function (b, C, U, k) {
                        this.za = {
                          kb: b,
                          lb: C,
                          Za: U,
                          $a: k,
                          Pa: [],
                          Kb: !0,
                        };
                      },
                      addStop: function (b, C) {
                        this.za.Pa.push({ color: b, stop: C });
                      },
                      completeGradient: function () {},
                      draw: function (b, C, U) {
                        let k = this.qb;
                        var O = this.Ua,
                          W = this.za;
                        if (
                          ((b.globalCompositeOperation = this.nb), W != null)
                        ) {
                          O = W.kb;
                          var B = W.lb;
                          const ve = W.Za;
                          var $ = W.$a;
                          const K = W.Pa;
                          W.Kb
                            ? ((W = ve - O),
                              ($ -= B),
                              (O = b.createRadialGradient(
                                O,
                                B,
                                0,
                                O,
                                B,
                                Math.sqrt(W * W + $ * $)
                              )))
                            : (O = b.createLinearGradient(O, B, ve, $));
                          for (let Me = 0, J = K.length; Me < J; Me++)
                            (B = K[Me]), O.addColorStop(B.stop, e(B.color));
                          (this.Ua = O), (this.za = null);
                        }
                        switch (k) {
                          case P:
                            (b.strokeStyle = O),
                              (b.lineWidth = this.sb),
                              (b.lineCap = this.Ka),
                              (b.lineJoin = this.La),
                              b.stroke(C);
                            break;
                          case R:
                            (b.fillStyle = O), b.fill(C, U);
                        }
                      },
                    });
                  const _ = new Set();
                  let x = null,
                    G = [],
                    de = 0,
                    De = 0;
                  var j = (l.CanvasRenderer = p.extend("Renderer", {
                    __construct: function (b) {
                      this.__parent.__construct.call(this),
                        (this.oa = [1, 0, 0, 1, 0, 0]),
                        (this.ha = b.getContext("2d")),
                        (this.Sa = b),
                        (this.ja = []);
                    },
                    save: function () {
                      this.oa.push(...this.oa.slice(this.oa.length - 6)),
                        this.ja.push(this.ha.save.bind(this.ha));
                    },
                    restore: function () {
                      const b = this.oa.length - 6;
                      if (6 > b)
                        throw "restore() called without matching save().";
                      this.oa.splice(b),
                        this.ja.push(this.ha.restore.bind(this.ha));
                    },
                    transform: function (b, C, U, k, O, W) {
                      const B = this.oa,
                        $ = B.length - 6;
                      B.splice(
                        $,
                        6,
                        B[$] * b + B[$ + 2] * C,
                        B[$ + 1] * b + B[$ + 3] * C,
                        B[$] * U + B[$ + 2] * k,
                        B[$ + 1] * U + B[$ + 3] * k,
                        B[$] * O + B[$ + 2] * W + B[$ + 4],
                        B[$ + 1] * O + B[$ + 3] * W + B[$ + 5]
                      ),
                        this.ja.push(
                          this.ha.transform.bind(this.ha, b, C, U, k, O, W)
                        );
                    },
                    rotate: function (b) {
                      const C = Math.sin(b);
                      (b = Math.cos(b)), this.transform(b, C, -C, b, 0, 0);
                    },
                    _drawPath: function (b, C) {
                      this.ja.push(
                        C.draw.bind(
                          C,
                          this.ha,
                          b.pa,
                          b.Ta === E ? "evenodd" : "nonzero"
                        )
                      );
                    },
                    _drawRiveImage: function (b, C, U) {
                      var k = b.ob;
                      if (k) {
                        var O = this.ha,
                          W = t(C);
                        this.ja.push(function () {
                          (O.globalCompositeOperation = W),
                            (O.globalAlpha = U),
                            O.drawImage(k, 0, 0),
                            (O.globalAlpha = 1);
                        });
                      }
                    },
                    _getMatrix: function (b) {
                      const C = this.oa,
                        U = C.length - 6;
                      for (let k = 0; 6 > k; ++k) b[k] = C[U + k];
                    },
                    _drawImageMesh: function (b, C, U, k, O, W, B, $, ve, K) {
                      var Me = this.ha.canvas.width,
                        J = this.ha.canvas.height;
                      const hn = ve - B,
                        dn = K - $;
                      (B = Math.max(B, 0)),
                        ($ = Math.max($, 0)),
                        (ve = Math.min(ve, Me)),
                        (K = Math.min(K, J));
                      const rt = ve - B,
                        it = K - $;
                      if (
                        (console.assert(rt <= Math.min(hn, Me)),
                        console.assert(it <= Math.min(dn, J)),
                        !(0 >= rt || 0 >= it))
                      ) {
                        (ve = rt < hn || it < dn), (Me = K = 1);
                        var Xe = Math.ceil(rt * K),
                          Ne = Math.ceil(it * Me);
                        (J = re.Mb()),
                          Xe > J && ((K *= J / Xe), (Xe = J)),
                          Ne > J && ((Me *= J / Ne), (Ne = J)),
                          x ||
                            ((x = new l.DynamicRectanizer(J)),
                            x.reset(512, 512)),
                          (J = x.addRect(Xe, Ne)),
                          0 > J &&
                            (r(),
                            _.add(this),
                            (J = x.addRect(Xe, Ne)),
                            console.assert(0 <= J));
                        var pn = J & 65535,
                          vn = J >> 16;
                        G.push({
                          xa: this.oa.slice(this.oa.length - 6),
                          image: b,
                          Va: pn,
                          Wa: vn,
                          Nb: B,
                          Ob: $,
                          $b: Xe,
                          cb: Ne,
                          Ga: K,
                          Ha: Me,
                          Ra: new Float32Array(k),
                          mb: new Float32Array(O),
                          indices: new Uint16Array(W),
                          Pb: ve,
                          jb: (b.Ma << 1) | (ve ? 1 : 0),
                        }),
                          (de += k.length),
                          (De += W.length);
                        var Qe = this.ha,
                          Yn = t(C);
                        this.ja.push(function () {
                          Qe.save(),
                            Qe.resetTransform(),
                            (Qe.globalCompositeOperation = Yn),
                            (Qe.globalAlpha = U),
                            Qe.drawImage(
                              re.canvas(),
                              pn,
                              vn,
                              Xe,
                              Ne,
                              B,
                              $,
                              rt,
                              it
                            ),
                            Qe.restore();
                        });
                      }
                    },
                    _clipPath: function (b) {
                      this.ja.push(
                        this.ha.clip.bind(
                          this.ha,
                          b.pa,
                          b.Ta === E ? "evenodd" : "nonzero"
                        )
                      );
                    },
                    clear: function () {
                      _.add(this),
                        this.ja.push(
                          this.ha.clearRect.bind(
                            this.ha,
                            0,
                            0,
                            this.Sa.width,
                            this.Sa.height
                          )
                        );
                    },
                    flush: function () {},
                    translate: function (b, C) {
                      this.transform(1, 0, 0, 1, b, C);
                    },
                  }));
                  (l.makeRenderer = function (b) {
                    const C = new j(b),
                      U = C.ha;
                    return new Proxy(C, {
                      get(k, O) {
                        if (typeof k[O] == "function")
                          return function (...W) {
                            return k[O].apply(k, W);
                          };
                        if (typeof U[O] == "function") {
                          if (-1 < ue.indexOf(O))
                            throw Error(
                              "RiveException: Method call to '" +
                                O +
                                "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods."
                            );
                          return function (...W) {
                            C.ja.push(U[O].bind(U, ...W));
                          };
                        }
                        return k[O];
                      },
                      set(k, O, W) {
                        if (O in U) return (U[O] = W), !0;
                      },
                    });
                  }),
                    (l.decodeImage = function (b, C) {
                      new v({ Aa: C }).decode(b);
                    }),
                    (l.renderFactory = {
                      makeRenderPaint: function () {
                        return new X();
                      },
                      makeRenderPath: function () {
                        return new M();
                      },
                      makeRenderImage: function () {
                        let b = kt;
                        return new v({
                          Fa: () => {
                            b.total++;
                          },
                          Aa: () => {
                            if ((b.loaded++, b.loaded === b.total)) {
                              const C = b.ready;
                              C && (C(), (b.ready = null));
                            }
                          },
                        });
                      },
                    });
                  let We = l.load,
                    kt = null;
                  (l.load = function (b, C, U = !0) {
                    const k = new l.FallbackFileAssetLoader();
                    return (
                      C !== void 0 && k.addLoader(C),
                      U && ((C = new l.CDNFileAssetLoader()), k.addLoader(C)),
                      new Promise(function (O) {
                        let W = null;
                        (kt = {
                          total: 0,
                          loaded: 0,
                          ready: function () {
                            O(W);
                          },
                        }),
                          (W = We(b, k)),
                          kt.total == 0 && O(W);
                      })
                    );
                  }),
                    (i = new ne()),
                    (l.requestAnimationFrame = i.requestAnimationFrame.bind(i)),
                    (l.cancelAnimationFrame = i.cancelAnimationFrame.bind(i)),
                    (l.enableFPSCounter = i.Bb.bind(i)),
                    (l.disableFPSCounter = i.yb),
                    (i.fb = r),
                    (l.cleanup = function () {
                      x && x.delete();
                    });
                };
                const S = l.onRuntimeInitialized;
                l.onRuntimeInitialized = function () {
                  S && S();
                  let t = l.decodeFont;
                  l.decodeFont = function (r, i) {
                    (r = t(r)), i(r);
                  };
                  const e = l.FileAssetLoader;
                  (l.ptrToAsset = (r) => {
                    let i = l.ptrToFileAsset(r);
                    return i.isImage
                      ? l.ptrToImageAsset(r)
                      : i.isFont
                      ? l.ptrToFontAsset(r)
                      : i;
                  }),
                    (l.CustomFileAssetLoader = e.extend(
                      "CustomFileAssetLoader",
                      {
                        __construct: function ({ loadContents: r }) {
                          this.__parent.__construct.call(this), (this.pb = r);
                        },
                        loadContents: function (r, i) {
                          return (r = l.ptrToAsset(r)), this.pb(r, i);
                        },
                      }
                    )),
                    (l.CDNFileAssetLoader = e.extend("CDNFileAssetLoader", {
                      __construct: function () {
                        this.__parent.__construct.call(this);
                      },
                      loadContents: function (r) {
                        let i = l.ptrToAsset(r);
                        return (
                          (r = i.cdnUuid),
                          r === ""
                            ? !1
                            : ((function (s, u) {
                                var p = new XMLHttpRequest();
                                (p.responseType = "arraybuffer"),
                                  (p.onreadystatechange = function () {
                                    p.readyState == 4 &&
                                      p.status == 200 &&
                                      u(p);
                                  }),
                                  p.open("GET", s, !0),
                                  p.send(null);
                              })(i.cdnBaseUrl + "/" + r, (s) => {
                                i.decode(new Uint8Array(s.response));
                              }),
                              !0)
                        );
                      },
                    })),
                    (l.FallbackFileAssetLoader = e.extend(
                      "FallbackFileAssetLoader",
                      {
                        __construct: function () {
                          this.__parent.__construct.call(this), (this.eb = []);
                        },
                        addLoader: function (r) {
                          this.eb.push(r);
                        },
                        loadContents: function (r, i) {
                          for (let s of this.eb)
                            if (s.loadContents(r, i)) return !0;
                          return !1;
                        },
                      }
                    ));
                };
                var Y = Object.assign({}, l),
                  Le = "./this.program",
                  we = typeof window == "object",
                  _e = typeof importScripts == "function",
                  se = "",
                  ee,
                  Be;
                (we || _e) &&
                  (_e
                    ? (se = self.location.href)
                    : typeof document < "u" &&
                      document.currentScript &&
                      (se = document.currentScript.src),
                  Z && (se = Z),
                  se.indexOf("blob:") !== 0
                    ? (se = se.substr(
                        0,
                        se.replace(/[?#].*/, "").lastIndexOf("/") + 1
                      ))
                    : (se = ""),
                  _e &&
                    (Be = (t) => {
                      var e = new XMLHttpRequest();
                      return (
                        e.open("GET", t, !1),
                        (e.responseType = "arraybuffer"),
                        e.send(null),
                        new Uint8Array(e.response)
                      );
                    }),
                  (ee = (t, e, r) => {
                    var i = new XMLHttpRequest();
                    i.open("GET", t, !0),
                      (i.responseType = "arraybuffer"),
                      (i.onload = () => {
                        i.status == 200 || (i.status == 0 && i.response)
                          ? e(i.response)
                          : r();
                      }),
                      (i.onerror = r),
                      i.send(null);
                  }));
                var Ke = l.print || console.log.bind(console),
                  ge = l.printErr || console.error.bind(console);
                Object.assign(l, Y),
                  (Y = null),
                  l.thisProgram && (Le = l.thisProgram);
                var o;
                l.wasmBinary && (o = l.wasmBinary),
                  l.noExitRuntime,
                  typeof WebAssembly != "object" &&
                    $e("no native wasm support detected");
                var n,
                  a,
                  d = !1,
                  m,
                  y,
                  w,
                  T,
                  L,
                  A,
                  D,
                  z;
                function ce() {
                  var t = n.buffer;
                  (l.HEAP8 = m = new Int8Array(t)),
                    (l.HEAP16 = w = new Int16Array(t)),
                    (l.HEAP32 = L = new Int32Array(t)),
                    (l.HEAPU8 = y = new Uint8Array(t)),
                    (l.HEAPU16 = T = new Uint16Array(t)),
                    (l.HEAPU32 = A = new Uint32Array(t)),
                    (l.HEAPF32 = D = new Float32Array(t)),
                    (l.HEAPF64 = z = new Float64Array(t));
                }
                var Q,
                  Re = [],
                  Ae = [],
                  He = [];
                function at() {
                  var t = l.preRun.shift();
                  Re.unshift(t);
                }
                var Ce = 0,
                  je = null;
                function $e(t) {
                  throw (
                    (l.onAbort && l.onAbort(t),
                    (t = "Aborted(" + t + ")"),
                    ge(t),
                    (d = !0),
                    (t = new WebAssembly.RuntimeError(
                      t + ". Build with -sASSERTIONS for more info."
                    )),
                    ae(t),
                    t)
                  );
                }
                function Ue(t) {
                  return t.startsWith("data:application/octet-stream;base64,");
                }
                var Pe;
                if (((Pe = "canvas_advanced.wasm"), !Ue(Pe))) {
                  var Se = Pe;
                  Pe = l.locateFile ? l.locateFile(Se, se) : se + Se;
                }
                function Wt(t) {
                  if (t == Pe && o) return new Uint8Array(o);
                  if (Be) return Be(t);
                  throw "both async and sync fetching of the wasm failed";
                }
                function gn(t) {
                  if (!o && (we || _e)) {
                    if (typeof fetch == "function" && !t.startsWith("file://"))
                      return fetch(t, { credentials: "same-origin" })
                        .then((e) => {
                          if (!e.ok)
                            throw (
                              "failed to load wasm binary file at '" + t + "'"
                            );
                          return e.arrayBuffer();
                        })
                        .catch(() => Wt(t));
                    if (ee)
                      return new Promise((e, r) => {
                        ee(t, (i) => e(new Uint8Array(i)), r);
                      });
                  }
                  return Promise.resolve().then(() => Wt(t));
                }
                function Bt(t, e, r) {
                  return gn(t)
                    .then((i) => WebAssembly.instantiate(i, e))
                    .then((i) => i)
                    .then(r, (i) => {
                      ge("failed to asynchronously prepare wasm: " + i), $e(i);
                    });
                }
                function yn(t, e) {
                  var r = Pe;
                  return o ||
                    typeof WebAssembly.instantiateStreaming != "function" ||
                    Ue(r) ||
                    r.startsWith("file://") ||
                    typeof fetch != "function"
                    ? Bt(r, t, e)
                    : fetch(r, { credentials: "same-origin" }).then((i) =>
                        WebAssembly.instantiateStreaming(i, t).then(
                          e,
                          function (s) {
                            return (
                              ge("wasm streaming compile failed: " + s),
                              ge("falling back to ArrayBuffer instantiation"),
                              Bt(r, t, e)
                            );
                          }
                        )
                      );
                }
                var Tt = (t) => {
                  for (; 0 < t.length; ) t.shift()(l);
                };
                function $t(t) {
                  if (t === void 0) return "_unknown";
                  t = t.replace(/[^a-zA-Z0-9_]/g, "$");
                  var e = t.charCodeAt(0);
                  return 48 <= e && 57 >= e ? `_${t}` : t;
                }
                function ot(t, e) {
                  return (
                    (t = $t(t)),
                    {
                      [t]: function () {
                        return e.apply(this, arguments);
                      },
                    }[t]
                  );
                }
                function Yt() {
                  (this.qa = [void 0]), (this.bb = []);
                }
                var pe = new Yt(),
                  Ge = void 0;
                function F(t) {
                  throw new Ge(t);
                }
                var ye = (t) => (
                    t || F("Cannot use deleted val. handle = " + t),
                    pe.get(t).value
                  ),
                  Ee = (t) => {
                    switch (t) {
                      case void 0:
                        return 1;
                      case null:
                        return 2;
                      case !0:
                        return 3;
                      case !1:
                        return 4;
                      default:
                        return pe.tb({ ib: 1, value: t });
                    }
                  };
                function Xt(t) {
                  var e = Error,
                    r = ot(t, function (i) {
                      (this.name = t),
                        (this.message = i),
                        (i = Error(i).stack),
                        i !== void 0 &&
                          (this.stack =
                            this.toString() +
                            `
` +
                            i.replace(/^Error(:[^\n]*)?\n/, ""));
                    });
                  return (
                    (r.prototype = Object.create(e.prototype)),
                    (r.prototype.constructor = r),
                    (r.prototype.toString = function () {
                      return this.message === void 0
                        ? this.name
                        : `${this.name}: ${this.message}`;
                    }),
                    r
                  );
                }
                var Nt = void 0,
                  Vt = void 0;
                function H(t) {
                  for (var e = ""; y[t]; ) e += Vt[y[t++]];
                  return e;
                }
                var Je = [];
                function Mt() {
                  for (; Je.length; ) {
                    var t = Je.pop();
                    (t.ba.wa = !1), t.delete();
                  }
                }
                var Ze = void 0,
                  Fe = {};
                function Lt(t, e) {
                  for (e === void 0 && F("ptr should not be undefined"); t.fa; )
                    (e = t.Ba(e)), (t = t.fa);
                  return e;
                }
                var Ye = {};
                function Ht(t) {
                  t = ln(t);
                  var e = H(t);
                  return xe(t), e;
                }
                function et(t, e) {
                  var r = Ye[t];
                  return r === void 0 && F(e + " has unknown type " + Ht(t)), r;
                }
                function st() {}
                var _t = !1;
                function Gt(t) {
                  --t.count.value,
                    t.count.value === 0 &&
                      (t.ia ? t.la.ra(t.ia) : t.ea.ca.ra(t.da));
                }
                function zt(t, e, r) {
                  return e === r
                    ? t
                    : r.fa === void 0
                    ? null
                    : ((t = zt(t, e, r.fa)), t === null ? null : r.zb(t));
                }
                var qt = {};
                function bn(t, e) {
                  return (e = Lt(t, e)), Fe[e];
                }
                var Qt = void 0;
                function ut(t) {
                  throw new Qt(t);
                }
                function ct(t, e) {
                  return (
                    (e.ea && e.da) ||
                      ut("makeClassHandle requires ptr and ptrType"),
                    !!e.la != !!e.ia &&
                      ut("Both smartPtrType and smartPtr must be specified"),
                    (e.count = { value: 1 }),
                    ze(Object.create(t, { ba: { value: e } }))
                  );
                }
                function ze(t) {
                  return typeof FinalizationRegistry > "u"
                    ? ((ze = (e) => e), t)
                    : ((_t = new FinalizationRegistry((e) => {
                        Gt(e.ba);
                      })),
                      (ze = (e) => {
                        var r = e.ba;
                        return r.ia && _t.register(e, { ba: r }, e), e;
                      }),
                      (st = (e) => {
                        _t.unregister(e);
                      }),
                      ze(t));
                }
                var lt = {};
                function tt(t) {
                  for (; t.length; ) {
                    var e = t.pop();
                    t.pop()(e);
                  }
                }
                function nt(t) {
                  return this.fromWireType(L[t >> 2]);
                }
                var qe = {},
                  ft = {};
                function he(t, e, r) {
                  function i(h) {
                    (h = r(h)),
                      h.length !== t.length &&
                        ut("Mismatched type converter count");
                    for (var g = 0; g < t.length; ++g) Te(t[g], h[g]);
                  }
                  t.forEach(function (h) {
                    ft[h] = e;
                  });
                  var s = Array(e.length),
                    u = [],
                    p = 0;
                  e.forEach((h, g) => {
                    Ye.hasOwnProperty(h)
                      ? (s[g] = Ye[h])
                      : (u.push(h),
                        qe.hasOwnProperty(h) || (qe[h] = []),
                        qe[h].push(() => {
                          (s[g] = Ye[h]), ++p, p === u.length && i(s);
                        }));
                  }),
                    u.length === 0 && i(s);
                }
                function ht(t) {
                  switch (t) {
                    case 1:
                      return 0;
                    case 2:
                      return 1;
                    case 4:
                      return 2;
                    case 8:
                      return 3;
                    default:
                      throw new TypeError(`Unknown type size: ${t}`);
                  }
                }
                function wn(t, e, r = {}) {
                  var i = e.name;
                  if (
                    (t ||
                      F(
                        `type "${i}" must have a positive integer typeid pointer`
                      ),
                    Ye.hasOwnProperty(t))
                  ) {
                    if (r.Jb) return;
                    F(`Cannot register type '${i}' twice`);
                  }
                  (Ye[t] = e),
                    delete ft[t],
                    qe.hasOwnProperty(t) &&
                      ((e = qe[t]), delete qe[t], e.forEach((s) => s()));
                }
                function Te(t, e, r = {}) {
                  if (!("argPackAdvance" in e))
                    throw new TypeError(
                      "registerType registeredInstance requires argPackAdvance"
                    );
                  wn(t, e, r);
                }
                function St(t) {
                  F(t.ba.ea.ca.name + " instance already deleted");
                }
                function ke() {}
                function Ft(t, e, r) {
                  if (t[e].ga === void 0) {
                    var i = t[e];
                    (t[e] = function () {
                      return (
                        t[e].ga.hasOwnProperty(arguments.length) ||
                          F(
                            `Function '${r}' called with an invalid number of arguments (${arguments.length}) - expects one of (${t[e].ga})!`
                          ),
                        t[e].ga[arguments.length].apply(this, arguments)
                      );
                    }),
                      (t[e].ga = []),
                      (t[e].ga[i.va] = i);
                  }
                }
                function Ot(t, e, r) {
                  l.hasOwnProperty(t)
                    ? ((r === void 0 ||
                        (l[t].ga !== void 0 && l[t].ga[r] !== void 0)) &&
                        F(`Cannot register public name '${t}' twice`),
                      Ft(l, t, t),
                      l.hasOwnProperty(r) &&
                        F(
                          `Cannot register multiple overloads of a function with the same number of arguments (${r})!`
                        ),
                      (l[t].ga[r] = e))
                    : ((l[t] = e), r !== void 0 && (l[t].ac = r));
                }
                function Rn(t, e, r, i, s, u, p, h) {
                  (this.name = t),
                    (this.constructor = e),
                    (this.ma = r),
                    (this.ra = i),
                    (this.fa = s),
                    (this.Eb = u),
                    (this.Ba = p),
                    (this.zb = h),
                    (this.gb = []);
                }
                function dt(t, e, r) {
                  for (; e !== r; )
                    e.Ba ||
                      F(
                        `Expected null or instance of ${r.name}, got an instance of ${e.name}`
                      ),
                      (t = e.Ba(t)),
                      (e = e.fa);
                  return t;
                }
                function An(t, e) {
                  return e === null
                    ? (this.Na && F(`null is not a valid ${this.name}`), 0)
                    : (e.ba || F(`Cannot pass "${xt(e)}" as a ${this.name}`),
                      e.ba.da ||
                        F(
                          `Cannot pass deleted object as a pointer of type ${this.name}`
                        ),
                      dt(e.ba.da, e.ba.ea.ca, this.ca));
                }
                function Cn(t, e) {
                  if (e === null) {
                    if (
                      (this.Na && F(`null is not a valid ${this.name}`),
                      this.Ea)
                    ) {
                      var r = this.Oa();
                      return t !== null && t.push(this.ra, r), r;
                    }
                    return 0;
                  }
                  if (
                    (e.ba || F(`Cannot pass "${xt(e)}" as a ${this.name}`),
                    e.ba.da ||
                      F(
                        `Cannot pass deleted object as a pointer of type ${this.name}`
                      ),
                    !this.Da &&
                      e.ba.ea.Da &&
                      F(
                        `Cannot convert argument of type ${
                          e.ba.la ? e.ba.la.name : e.ba.ea.name
                        } to parameter type ${this.name}`
                      ),
                    (r = dt(e.ba.da, e.ba.ea.ca, this.ca)),
                    this.Ea)
                  )
                    switch (
                      (e.ba.ia === void 0 &&
                        F("Passing raw pointer to smart pointer is illegal"),
                      this.Vb)
                    ) {
                      case 0:
                        e.ba.la === this
                          ? (r = e.ba.ia)
                          : F(
                              `Cannot convert argument of type ${
                                e.ba.la ? e.ba.la.name : e.ba.ea.name
                              } to parameter type ${this.name}`
                            );
                        break;
                      case 1:
                        r = e.ba.ia;
                        break;
                      case 2:
                        if (e.ba.la === this) r = e.ba.ia;
                        else {
                          var i = e.clone();
                          (r = this.Rb(
                            r,
                            Ee(function () {
                              i.delete();
                            })
                          )),
                            t !== null && t.push(this.ra, r);
                        }
                        break;
                      default:
                        F("Unsupporting sharing policy");
                    }
                  return r;
                }
                function Pn(t, e) {
                  return e === null
                    ? (this.Na && F(`null is not a valid ${this.name}`), 0)
                    : (e.ba || F(`Cannot pass "${xt(e)}" as a ${this.name}`),
                      e.ba.da ||
                        F(
                          `Cannot pass deleted object as a pointer of type ${this.name}`
                        ),
                      e.ba.ea.Da &&
                        F(
                          `Cannot convert argument of type ${e.ba.ea.name} to parameter type ${this.name}`
                        ),
                      dt(e.ba.da, e.ba.ea.ca, this.ca));
                }
                function Oe(t, e, r, i) {
                  (this.name = t),
                    (this.ca = e),
                    (this.Na = r),
                    (this.Da = i),
                    (this.Ea = !1),
                    (this.ra =
                      this.Rb =
                      this.Oa =
                      this.hb =
                      this.Vb =
                      this.Qb =
                        void 0),
                    e.fa !== void 0
                      ? (this.toWireType = Cn)
                      : ((this.toWireType = i ? An : Pn), (this.ka = null));
                }
                function Kt(t, e, r) {
                  l.hasOwnProperty(t) ||
                    ut("Replacing nonexistant public symbol"),
                    l[t].ga !== void 0 && r !== void 0
                      ? (l[t].ga[r] = e)
                      : ((l[t] = e), (l[t].va = r));
                }
                var En = (t, e) => {
                  var r = [];
                  return function () {
                    if (
                      ((r.length = 0),
                      Object.assign(r, arguments),
                      t.includes("j"))
                    ) {
                      var i = l["dynCall_" + t];
                      i =
                        r && r.length
                          ? i.apply(null, [e].concat(r))
                          : i.call(null, e);
                    } else i = Q.get(e).apply(null, r);
                    return i;
                  };
                };
                function ie(t, e) {
                  t = H(t);
                  var r = t.includes("j") ? En(t, e) : Q.get(e);
                  return (
                    typeof r != "function" &&
                      F(`unknown function pointer with signature ${t}: ${e}`),
                    r
                  );
                }
                var Jt = void 0;
                function Ie(t, e) {
                  function r(u) {
                    s[u] ||
                      Ye[u] ||
                      (ft[u] ? ft[u].forEach(r) : (i.push(u), (s[u] = !0)));
                  }
                  var i = [],
                    s = {};
                  throw (
                    (e.forEach(r), new Jt(`${t}: ` + i.map(Ht).join([", "])))
                  );
                }
                function pt(t, e, r, i, s) {
                  var u = e.length;
                  2 > u &&
                    F(
                      "argTypes array size mismatch! Must at least get return value and 'this' types!"
                    );
                  var p = e[1] !== null && r !== null,
                    h = !1;
                  for (r = 1; r < e.length; ++r)
                    if (e[r] !== null && e[r].ka === void 0) {
                      h = !0;
                      break;
                    }
                  var g = e[0].name !== "void",
                    f = u - 2,
                    R = Array(f),
                    P = [],
                    E = [];
                  return function () {
                    if (
                      (arguments.length !== f &&
                        F(
                          `function ${t} called with ${arguments.length} arguments, expected ${f} args!`
                        ),
                      (E.length = 0),
                      (P.length = p ? 2 : 1),
                      (P[0] = s),
                      p)
                    ) {
                      var c = e[1].toWireType(E, this);
                      P[1] = c;
                    }
                    for (var v = 0; v < f; ++v)
                      (R[v] = e[v + 2].toWireType(E, arguments[v])),
                        P.push(R[v]);
                    if (((v = i.apply(null, P)), h)) tt(E);
                    else
                      for (var M = p ? 1 : 2; M < e.length; M++) {
                        var X = M === 1 ? c : R[M - 2];
                        e[M].ka !== null && e[M].ka(X);
                      }
                    return (c = g ? e[0].fromWireType(v) : void 0), c;
                  };
                }
                function vt(t, e) {
                  for (var r = [], i = 0; i < t; i++)
                    r.push(A[(e + 4 * i) >> 2]);
                  return r;
                }
                function Zt(t, e, r) {
                  return (
                    t instanceof Object || F(`${r} with invalid "this": ${t}`),
                    t instanceof e.ca.constructor ||
                      F(
                        `${r} incompatible with "this" of type ${t.constructor.name}`
                      ),
                    t.ba.da ||
                      F(
                        `cannot call emscripten binding method ${r} on deleted object`
                      ),
                    dt(t.ba.da, t.ba.ea.ca, e.ca)
                  );
                }
                function It(t) {
                  t >= pe.Xa && --pe.get(t).ib === 0 && pe.wb(t);
                }
                function Tn(t, e, r) {
                  switch (e) {
                    case 0:
                      return function (i) {
                        return this.fromWireType((r ? m : y)[i]);
                      };
                    case 1:
                      return function (i) {
                        return this.fromWireType((r ? w : T)[i >> 1]);
                      };
                    case 2:
                      return function (i) {
                        return this.fromWireType((r ? L : A)[i >> 2]);
                      };
                    default:
                      throw new TypeError("Unknown integer type: " + t);
                  }
                }
                function xt(t) {
                  if (t === null) return "null";
                  var e = typeof t;
                  return e === "object" || e === "array" || e === "function"
                    ? t.toString()
                    : "" + t;
                }
                function Mn(t, e) {
                  switch (e) {
                    case 2:
                      return function (r) {
                        return this.fromWireType(D[r >> 2]);
                      };
                    case 3:
                      return function (r) {
                        return this.fromWireType(z[r >> 3]);
                      };
                    default:
                      throw new TypeError("Unknown float type: " + t);
                  }
                }
                function Ln(t, e, r) {
                  switch (e) {
                    case 0:
                      return r
                        ? function (i) {
                            return m[i];
                          }
                        : function (i) {
                            return y[i];
                          };
                    case 1:
                      return r
                        ? function (i) {
                            return w[i >> 1];
                          }
                        : function (i) {
                            return T[i >> 1];
                          };
                    case 2:
                      return r
                        ? function (i) {
                            return L[i >> 2];
                          }
                        : function (i) {
                            return A[i >> 2];
                          };
                    default:
                      throw new TypeError("Unknown integer type: " + t);
                  }
                }
                var en = (t, e, r, i) => {
                    if (0 < i) {
                      i = r + i - 1;
                      for (var s = 0; s < t.length; ++s) {
                        var u = t.charCodeAt(s);
                        if (55296 <= u && 57343 >= u) {
                          var p = t.charCodeAt(++s);
                          u = (65536 + ((u & 1023) << 10)) | (p & 1023);
                        }
                        if (127 >= u) {
                          if (r >= i) break;
                          e[r++] = u;
                        } else {
                          if (2047 >= u) {
                            if (r + 1 >= i) break;
                            e[r++] = 192 | (u >> 6);
                          } else {
                            if (65535 >= u) {
                              if (r + 2 >= i) break;
                              e[r++] = 224 | (u >> 12);
                            } else {
                              if (r + 3 >= i) break;
                              (e[r++] = 240 | (u >> 18)),
                                (e[r++] = 128 | ((u >> 12) & 63));
                            }
                            e[r++] = 128 | ((u >> 6) & 63);
                          }
                          e[r++] = 128 | (u & 63);
                        }
                      }
                      e[r] = 0;
                    }
                  },
                  tn = (t) => {
                    for (var e = 0, r = 0; r < t.length; ++r) {
                      var i = t.charCodeAt(r);
                      127 >= i
                        ? e++
                        : 2047 >= i
                        ? (e += 2)
                        : 55296 <= i && 57343 >= i
                        ? ((e += 4), ++r)
                        : (e += 3);
                    }
                    return e;
                  },
                  nn =
                    typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0,
                  mt = (t, e, r) => {
                    var i = e + r;
                    for (r = e; t[r] && !(r >= i); ) ++r;
                    if (16 < r - e && t.buffer && nn)
                      return nn.decode(t.subarray(e, r));
                    for (i = ""; e < r; ) {
                      var s = t[e++];
                      if (s & 128) {
                        var u = t[e++] & 63;
                        if ((s & 224) == 192)
                          i += String.fromCharCode(((s & 31) << 6) | u);
                        else {
                          var p = t[e++] & 63;
                          (s =
                            (s & 240) == 224
                              ? ((s & 15) << 12) | (u << 6) | p
                              : ((s & 7) << 18) |
                                (u << 12) |
                                (p << 6) |
                                (t[e++] & 63)),
                            65536 > s
                              ? (i += String.fromCharCode(s))
                              : ((s -= 65536),
                                (i += String.fromCharCode(
                                  55296 | (s >> 10),
                                  56320 | (s & 1023)
                                )));
                        }
                      } else i += String.fromCharCode(s);
                    }
                    return i;
                  },
                  rn =
                    typeof TextDecoder < "u"
                      ? new TextDecoder("utf-16le")
                      : void 0,
                  _n = (t, e) => {
                    for (var r = t >> 1, i = r + e / 2; !(r >= i) && T[r]; )
                      ++r;
                    if (((r <<= 1), 32 < r - t && rn))
                      return rn.decode(y.subarray(t, r));
                    for (r = "", i = 0; !(i >= e / 2); ++i) {
                      var s = w[(t + 2 * i) >> 1];
                      if (s == 0) break;
                      r += String.fromCharCode(s);
                    }
                    return r;
                  },
                  Sn = (t, e, r) => {
                    if ((r === void 0 && (r = 2147483647), 2 > r)) return 0;
                    r -= 2;
                    var i = e;
                    r = r < 2 * t.length ? r / 2 : t.length;
                    for (var s = 0; s < r; ++s)
                      (w[e >> 1] = t.charCodeAt(s)), (e += 2);
                    return (w[e >> 1] = 0), e - i;
                  },
                  Fn = (t) => 2 * t.length,
                  On = (t, e) => {
                    for (var r = 0, i = ""; !(r >= e / 4); ) {
                      var s = L[(t + 4 * r) >> 2];
                      if (s == 0) break;
                      ++r,
                        65536 <= s
                          ? ((s -= 65536),
                            (i += String.fromCharCode(
                              55296 | (s >> 10),
                              56320 | (s & 1023)
                            )))
                          : (i += String.fromCharCode(s));
                    }
                    return i;
                  },
                  In = (t, e, r) => {
                    if ((r === void 0 && (r = 2147483647), 4 > r)) return 0;
                    var i = e;
                    r = i + r - 4;
                    for (var s = 0; s < t.length; ++s) {
                      var u = t.charCodeAt(s);
                      if (55296 <= u && 57343 >= u) {
                        var p = t.charCodeAt(++s);
                        u = (65536 + ((u & 1023) << 10)) | (p & 1023);
                      }
                      if (((L[e >> 2] = u), (e += 4), e + 4 > r)) break;
                    }
                    return (L[e >> 2] = 0), e - i;
                  },
                  xn = (t) => {
                    for (var e = 0, r = 0; r < t.length; ++r) {
                      var i = t.charCodeAt(r);
                      55296 <= i && 57343 >= i && ++r, (e += 4);
                    }
                    return e;
                  },
                  Dn = {};
                function gt(t) {
                  var e = Dn[t];
                  return e === void 0 ? H(t) : e;
                }
                var yt = [];
                function jn(t) {
                  var e = yt.length;
                  return yt.push(t), e;
                }
                function Un(t, e) {
                  for (var r = Array(t), i = 0; i < t; ++i)
                    r[i] = et(A[(e + 4 * i) >> 2], "parameter " + i);
                  return r;
                }
                var an = [],
                  Dt = {},
                  on = () => {
                    if (!jt) {
                      var t = {
                          USER: "web_user",
                          LOGNAME: "web_user",
                          PATH: "/",
                          PWD: "/",
                          HOME: "/home/web_user",
                          LANG:
                            (
                              (typeof navigator == "object" &&
                                navigator.languages &&
                                navigator.languages[0]) ||
                              "C"
                            ).replace("-", "_") + ".UTF-8",
                          _: Le || "./this.program",
                        },
                        e;
                      for (e in Dt)
                        Dt[e] === void 0 ? delete t[e] : (t[e] = Dt[e]);
                      var r = [];
                      for (e in t) r.push(`${e}=${t[e]}`);
                      jt = r;
                    }
                    return jt;
                  },
                  jt,
                  kn = [null, [], []],
                  bt = (t) => t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0),
                  sn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                  un = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                function Wn(t) {
                  var e = Array(tn(t) + 1);
                  return en(t, e, 0, e.length), e;
                }
                var Bn = (t, e, r, i) => {
                  function s(c, v, M) {
                    for (
                      c = typeof c == "number" ? c.toString() : c || "";
                      c.length < v;

                    )
                      c = M[0] + c;
                    return c;
                  }
                  function u(c, v) {
                    return s(c, v, "0");
                  }
                  function p(c, v) {
                    function M(_) {
                      return 0 > _ ? -1 : 0 < _ ? 1 : 0;
                    }
                    var X;
                    return (
                      (X = M(c.getFullYear() - v.getFullYear())) === 0 &&
                        (X = M(c.getMonth() - v.getMonth())) === 0 &&
                        (X = M(c.getDate() - v.getDate())),
                      X
                    );
                  }
                  function h(c) {
                    switch (c.getDay()) {
                      case 0:
                        return new Date(c.getFullYear() - 1, 11, 29);
                      case 1:
                        return c;
                      case 2:
                        return new Date(c.getFullYear(), 0, 3);
                      case 3:
                        return new Date(c.getFullYear(), 0, 2);
                      case 4:
                        return new Date(c.getFullYear(), 0, 1);
                      case 5:
                        return new Date(c.getFullYear() - 1, 11, 31);
                      case 6:
                        return new Date(c.getFullYear() - 1, 11, 30);
                    }
                  }
                  function g(c) {
                    var v = c.ta;
                    for (
                      c = new Date(new Date(c.ua + 1900, 0, 1).getTime());
                      0 < v;

                    ) {
                      var M = c.getMonth(),
                        X = (bt(c.getFullYear()) ? sn : un)[M];
                      if (v > X - c.getDate())
                        (v -= X - c.getDate() + 1),
                          c.setDate(1),
                          11 > M
                            ? c.setMonth(M + 1)
                            : (c.setMonth(0),
                              c.setFullYear(c.getFullYear() + 1));
                      else {
                        c.setDate(c.getDate() + v);
                        break;
                      }
                    }
                    return (
                      (M = new Date(c.getFullYear() + 1, 0, 4)),
                      (v = h(new Date(c.getFullYear(), 0, 4))),
                      (M = h(M)),
                      0 >= p(v, c)
                        ? 0 >= p(M, c)
                          ? c.getFullYear() + 1
                          : c.getFullYear()
                        : c.getFullYear() - 1
                    );
                  }
                  var f = L[(i + 40) >> 2];
                  (i = {
                    Yb: L[i >> 2],
                    Xb: L[(i + 4) >> 2],
                    Ia: L[(i + 8) >> 2],
                    Qa: L[(i + 12) >> 2],
                    Ja: L[(i + 16) >> 2],
                    ua: L[(i + 20) >> 2],
                    na: L[(i + 24) >> 2],
                    ta: L[(i + 28) >> 2],
                    bc: L[(i + 32) >> 2],
                    Wb: L[(i + 36) >> 2],
                    Zb: f && f ? mt(y, f) : "",
                  }),
                    (r = r ? mt(y, r) : ""),
                    (f = {
                      "%c": "%a %b %d %H:%M:%S %Y",
                      "%D": "%m/%d/%y",
                      "%F": "%Y-%m-%d",
                      "%h": "%b",
                      "%r": "%I:%M:%S %p",
                      "%R": "%H:%M",
                      "%T": "%H:%M:%S",
                      "%x": "%m/%d/%y",
                      "%X": "%H:%M:%S",
                      "%Ec": "%c",
                      "%EC": "%C",
                      "%Ex": "%m/%d/%y",
                      "%EX": "%H:%M:%S",
                      "%Ey": "%y",
                      "%EY": "%Y",
                      "%Od": "%d",
                      "%Oe": "%e",
                      "%OH": "%H",
                      "%OI": "%I",
                      "%Om": "%m",
                      "%OM": "%M",
                      "%OS": "%S",
                      "%Ou": "%u",
                      "%OU": "%U",
                      "%OV": "%V",
                      "%Ow": "%w",
                      "%OW": "%W",
                      "%Oy": "%y",
                    });
                  for (var R in f) r = r.replace(new RegExp(R, "g"), f[R]);
                  var P =
                      "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                        " "
                      ),
                    E =
                      "January February March April May June July August September October November December".split(
                        " "
                      );
                  (f = {
                    "%a": (c) => P[c.na].substring(0, 3),
                    "%A": (c) => P[c.na],
                    "%b": (c) => E[c.Ja].substring(0, 3),
                    "%B": (c) => E[c.Ja],
                    "%C": (c) => u(((c.ua + 1900) / 100) | 0, 2),
                    "%d": (c) => u(c.Qa, 2),
                    "%e": (c) => s(c.Qa, 2, " "),
                    "%g": (c) => g(c).toString().substring(2),
                    "%G": (c) => g(c),
                    "%H": (c) => u(c.Ia, 2),
                    "%I": (c) => (
                      (c = c.Ia),
                      c == 0 ? (c = 12) : 12 < c && (c -= 12),
                      u(c, 2)
                    ),
                    "%j": (c) => {
                      for (
                        var v = 0, M = 0;
                        M <= c.Ja - 1;
                        v += (bt(c.ua + 1900) ? sn : un)[M++]
                      );
                      return u(c.Qa + v, 3);
                    },
                    "%m": (c) => u(c.Ja + 1, 2),
                    "%M": (c) => u(c.Xb, 2),
                    "%n": () => `
`,
                    "%p": (c) => (0 <= c.Ia && 12 > c.Ia ? "AM" : "PM"),
                    "%S": (c) => u(c.Yb, 2),
                    "%t": () => "	",
                    "%u": (c) => c.na || 7,
                    "%U": (c) => u(Math.floor((c.ta + 7 - c.na) / 7), 2),
                    "%V": (c) => {
                      var v = Math.floor((c.ta + 7 - ((c.na + 6) % 7)) / 7);
                      if ((2 >= (c.na + 371 - c.ta - 2) % 7 && v++, v))
                        v == 53 &&
                          ((M = (c.na + 371 - c.ta) % 7),
                          M == 4 || (M == 3 && bt(c.ua)) || (v = 1));
                      else {
                        v = 52;
                        var M = (c.na + 7 - c.ta - 1) % 7;
                        (M == 4 || (M == 5 && bt((c.ua % 400) - 1))) && v++;
                      }
                      return u(v, 2);
                    },
                    "%w": (c) => c.na,
                    "%W": (c) =>
                      u(Math.floor((c.ta + 7 - ((c.na + 6) % 7)) / 7), 2),
                    "%y": (c) => (c.ua + 1900).toString().substring(2),
                    "%Y": (c) => c.ua + 1900,
                    "%z": (c) => {
                      c = c.Wb;
                      var v = 0 <= c;
                      return (
                        (c = Math.abs(c) / 60),
                        (v ? "+" : "-") +
                          ("0000" + ((c / 60) * 100 + (c % 60))).slice(-4)
                      );
                    },
                    "%Z": (c) => c.Zb,
                    "%%": () => "%",
                  }),
                    (r = r.replace(/%%/g, "\0\0"));
                  for (R in f)
                    r.includes(R) &&
                      (r = r.replace(new RegExp(R, "g"), f[R](i)));
                  return (
                    (r = r.replace(/\0\0/g, "%")),
                    (R = Wn(r)),
                    R.length > e ? 0 : (m.set(R, t), R.length - 1)
                  );
                };
                Object.assign(Yt.prototype, {
                  get(t) {
                    return this.qa[t];
                  },
                  has(t) {
                    return this.qa[t] !== void 0;
                  },
                  tb(t) {
                    var e = this.bb.pop() || this.qa.length;
                    return (this.qa[e] = t), e;
                  },
                  wb(t) {
                    (this.qa[t] = void 0), this.bb.push(t);
                  },
                }),
                  (Ge = l.BindingError =
                    class extends Error {
                      constructor(t) {
                        super(t), (this.name = "BindingError");
                      }
                    }),
                  pe.qa.push(
                    { value: void 0 },
                    { value: null },
                    { value: !0 },
                    { value: !1 }
                  ),
                  (pe.Xa = pe.qa.length),
                  (l.count_emval_handles = function () {
                    for (var t = 0, e = pe.Xa; e < pe.qa.length; ++e)
                      pe.qa[e] !== void 0 && ++t;
                    return t;
                  }),
                  (Nt = l.PureVirtualError = Xt("PureVirtualError"));
                for (var cn = Array(256), wt = 0; 256 > wt; ++wt)
                  cn[wt] = String.fromCharCode(wt);
                (Vt = cn),
                  (l.getInheritedInstanceCount = function () {
                    return Object.keys(Fe).length;
                  }),
                  (l.getLiveInheritedInstances = function () {
                    var t = [],
                      e;
                    for (e in Fe) Fe.hasOwnProperty(e) && t.push(Fe[e]);
                    return t;
                  }),
                  (l.flushPendingDeletes = Mt),
                  (l.setDelayFunction = function (t) {
                    (Ze = t), Je.length && Ze && Ze(Mt);
                  }),
                  (Qt = l.InternalError =
                    class extends Error {
                      constructor(t) {
                        super(t), (this.name = "InternalError");
                      }
                    }),
                  (ke.prototype.isAliasOf = function (t) {
                    if (!(this instanceof ke && t instanceof ke)) return !1;
                    var e = this.ba.ea.ca,
                      r = this.ba.da,
                      i = t.ba.ea.ca;
                    for (t = t.ba.da; e.fa; ) (r = e.Ba(r)), (e = e.fa);
                    for (; i.fa; ) (t = i.Ba(t)), (i = i.fa);
                    return e === i && r === t;
                  }),
                  (ke.prototype.clone = function () {
                    if ((this.ba.da || St(this), this.ba.ya))
                      return (this.ba.count.value += 1), this;
                    var t = ze,
                      e = Object,
                      r = e.create,
                      i = Object.getPrototypeOf(this),
                      s = this.ba;
                    return (
                      (t = t(
                        r.call(e, i, {
                          ba: {
                            value: {
                              count: s.count,
                              wa: s.wa,
                              ya: s.ya,
                              da: s.da,
                              ea: s.ea,
                              ia: s.ia,
                              la: s.la,
                            },
                          },
                        })
                      )),
                      (t.ba.count.value += 1),
                      (t.ba.wa = !1),
                      t
                    );
                  }),
                  (ke.prototype.delete = function () {
                    this.ba.da || St(this),
                      this.ba.wa &&
                        !this.ba.ya &&
                        F("Object already scheduled for deletion"),
                      st(this),
                      Gt(this.ba),
                      this.ba.ya ||
                        ((this.ba.ia = void 0), (this.ba.da = void 0));
                  }),
                  (ke.prototype.isDeleted = function () {
                    return !this.ba.da;
                  }),
                  (ke.prototype.deleteLater = function () {
                    return (
                      this.ba.da || St(this),
                      this.ba.wa &&
                        !this.ba.ya &&
                        F("Object already scheduled for deletion"),
                      Je.push(this),
                      Je.length === 1 && Ze && Ze(Mt),
                      (this.ba.wa = !0),
                      this
                    );
                  }),
                  (Oe.prototype.Fb = function (t) {
                    return this.hb && (t = this.hb(t)), t;
                  }),
                  (Oe.prototype.Ya = function (t) {
                    this.ra && this.ra(t);
                  }),
                  (Oe.prototype.argPackAdvance = 8),
                  (Oe.prototype.readValueFromPointer = nt),
                  (Oe.prototype.deleteObject = function (t) {
                    t !== null && t.delete();
                  }),
                  (Oe.prototype.fromWireType = function (t) {
                    function e() {
                      return this.Ea
                        ? ct(this.ca.ma, {
                            ea: this.Qb,
                            da: r,
                            la: this,
                            ia: t,
                          })
                        : ct(this.ca.ma, { ea: this, da: t });
                    }
                    var r = this.Fb(t);
                    if (!r) return this.Ya(t), null;
                    var i = bn(this.ca, r);
                    if (i !== void 0)
                      return i.ba.count.value === 0
                        ? ((i.ba.da = r), (i.ba.ia = t), i.clone())
                        : ((i = i.clone()), this.Ya(t), i);
                    if (((i = this.ca.Eb(r)), (i = qt[i]), !i))
                      return e.call(this);
                    i = this.Da ? i.ub : i.pointerType;
                    var s = zt(r, this.ca, i.ca);
                    return s === null
                      ? e.call(this)
                      : this.Ea
                      ? ct(i.ca.ma, { ea: i, da: s, la: this, ia: t })
                      : ct(i.ca.ma, { ea: i, da: s });
                  }),
                  (Jt = l.UnboundTypeError = Xt("UnboundTypeError"));
                var $n = {
                  N: function (t, e, r) {
                    (t = H(t)), (e = et(e, "wrapper")), (r = ye(r));
                    var i = [].slice,
                      s = e.ca,
                      u = s.ma,
                      p = s.fa.ma,
                      h = s.fa.constructor;
                    (t = ot(t, function () {
                      s.fa.gb.forEach(
                        function (f) {
                          if (this[f] === p[f])
                            throw new Nt(
                              `Pure virtual function ${f} must be implemented in JavaScript`
                            );
                        }.bind(this)
                      ),
                        Object.defineProperty(this, "__parent", { value: u }),
                        this.__construct.apply(this, i.call(arguments));
                    })),
                      (u.__construct = function () {
                        this === u && F("Pass correct 'this' to __construct");
                        var f = h.implement.apply(
                          void 0,
                          [this].concat(i.call(arguments))
                        );
                        st(f);
                        var R = f.ba;
                        f.notifyOnDestruction(),
                          (R.ya = !0),
                          Object.defineProperties(this, { ba: { value: R } }),
                          ze(this),
                          (f = R.da),
                          (f = Lt(s, f)),
                          Fe.hasOwnProperty(f)
                            ? F(`Tried to register registered instance: ${f}`)
                            : (Fe[f] = this);
                      }),
                      (u.__destruct = function () {
                        this === u && F("Pass correct 'this' to __destruct"),
                          st(this);
                        var f = this.ba.da;
                        (f = Lt(s, f)),
                          Fe.hasOwnProperty(f)
                            ? delete Fe[f]
                            : F(
                                `Tried to unregister unregistered instance: ${f}`
                              );
                      }),
                      (t.prototype = Object.create(u));
                    for (var g in r) t.prototype[g] = r[g];
                    return Ee(t);
                  },
                  O: function (t) {
                    var e = lt[t];
                    delete lt[t];
                    var r = e.Oa,
                      i = e.ra,
                      s = e.ab,
                      u = s.map((p) => p.Ib).concat(s.map((p) => p.Tb));
                    he([t], u, (p) => {
                      var h = {};
                      return (
                        s.forEach((g, f) => {
                          var R = p[f],
                            P = g.Gb,
                            E = g.Hb,
                            c = p[f + s.length],
                            v = g.Sb,
                            M = g.Ub;
                          h[g.Cb] = {
                            read: (X) => R.fromWireType(P(E, X)),
                            write: (X, _) => {
                              var x = [];
                              v(M, X, c.toWireType(x, _)), tt(x);
                            },
                          };
                        }),
                        [
                          {
                            name: e.name,
                            fromWireType: function (g) {
                              var f = {},
                                R;
                              for (R in h) f[R] = h[R].read(g);
                              return i(g), f;
                            },
                            toWireType: function (g, f) {
                              for (var R in h)
                                if (!(R in f))
                                  throw new TypeError(`Missing field: "${R}"`);
                              var P = r();
                              for (R in h) h[R].write(P, f[R]);
                              return g !== null && g.push(i, P), P;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: nt,
                            ka: i,
                          },
                        ]
                      );
                    });
                  },
                  C: function () {},
                  K: function (t, e, r, i, s) {
                    var u = ht(r);
                    (e = H(e)),
                      Te(t, {
                        name: e,
                        fromWireType: function (p) {
                          return !!p;
                        },
                        toWireType: function (p, h) {
                          return h ? i : s;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function (p) {
                          if (r === 1) var h = m;
                          else if (r === 2) h = w;
                          else if (r === 4) h = L;
                          else
                            throw new TypeError(
                              "Unknown boolean type size: " + e
                            );
                          return this.fromWireType(h[p >> u]);
                        },
                        ka: null,
                      });
                  },
                  f: function (t, e, r, i, s, u, p, h, g, f, R, P, E) {
                    (R = H(R)),
                      (u = ie(s, u)),
                      h && (h = ie(p, h)),
                      f && (f = ie(g, f)),
                      (E = ie(P, E));
                    var c = $t(R);
                    Ot(c, function () {
                      Ie(`Cannot construct ${R} due to unbound types`, [i]);
                    }),
                      he([t, e, r], i ? [i] : [], function (v) {
                        if (((v = v[0]), i))
                          var M = v.ca,
                            X = M.ma;
                        else X = ke.prototype;
                        v = ot(c, function () {
                          if (Object.getPrototypeOf(this) !== _)
                            throw new Ge("Use 'new' to construct " + R);
                          if (x.sa === void 0)
                            throw new Ge(R + " has no accessible constructor");
                          var de = x.sa[arguments.length];
                          if (de === void 0)
                            throw new Ge(
                              `Tried to invoke ctor of ${R} with invalid number of parameters (${
                                arguments.length
                              }) - expected (${Object.keys(
                                x.sa
                              ).toString()}) parameters instead!`
                            );
                          return de.apply(this, arguments);
                        });
                        var _ = Object.create(X, { constructor: { value: v } });
                        v.prototype = _;
                        var x = new Rn(R, v, _, E, M, u, h, f);
                        x.fa &&
                          (x.fa.Ca === void 0 && (x.fa.Ca = []),
                          x.fa.Ca.push(x)),
                          (M = new Oe(R, x, !0, !1)),
                          (X = new Oe(R + "*", x, !1, !1));
                        var G = new Oe(R + " const*", x, !1, !0);
                        return (
                          (qt[t] = { pointerType: X, ub: G }),
                          Kt(c, v),
                          [M, X, G]
                        );
                      });
                  },
                  j: function (t, e, r, i, s, u, p) {
                    var h = vt(r, i);
                    (e = H(e)),
                      (u = ie(s, u)),
                      he([], [t], function (g) {
                        function f() {
                          Ie(`Cannot call ${R} due to unbound types`, h);
                        }
                        g = g[0];
                        var R = `${g.name}.${e}`;
                        e.startsWith("@@") && (e = Symbol[e.substring(2)]);
                        var P = g.ca.constructor;
                        return (
                          P[e] === void 0
                            ? ((f.va = r - 1), (P[e] = f))
                            : (Ft(P, e, R), (P[e].ga[r - 1] = f)),
                          he([], h, function (E) {
                            if (
                              ((E = pt(
                                R,
                                [E[0], null].concat(E.slice(1)),
                                null,
                                u,
                                p
                              )),
                              P[e].ga === void 0
                                ? ((E.va = r - 1), (P[e] = E))
                                : (P[e].ga[r - 1] = E),
                              g.ca.Ca)
                            )
                              for (const c of g.ca.Ca)
                                c.constructor.hasOwnProperty(e) ||
                                  (c.constructor[e] = E);
                            return [];
                          }),
                          []
                        );
                      });
                  },
                  x: function (t, e, r, i, s, u, p, h) {
                    (e = H(e)),
                      (u = ie(s, u)),
                      he([], [t], function (g) {
                        g = g[0];
                        var f = `${g.name}.${e}`,
                          R = {
                            get() {
                              Ie(`Cannot access ${f} due to unbound types`, [
                                r,
                              ]);
                            },
                            enumerable: !0,
                            configurable: !0,
                          };
                        return (
                          (R.set = h
                            ? () => {
                                Ie(`Cannot access ${f} due to unbound types`, [
                                  r,
                                ]);
                              }
                            : () => {
                                F(`${f} is a read-only property`);
                              }),
                          Object.defineProperty(g.ca.constructor, e, R),
                          he([], [r], function (P) {
                            P = P[0];
                            var E = {
                              get() {
                                return P.fromWireType(u(i));
                              },
                              enumerable: !0,
                            };
                            return (
                              h &&
                                ((h = ie(p, h)),
                                (E.set = (c) => {
                                  var v = [];
                                  h(i, P.toWireType(v, c)), tt(v);
                                })),
                              Object.defineProperty(g.ca.constructor, e, E),
                              []
                            );
                          }),
                          []
                        );
                      });
                  },
                  s: function (t, e, r, i, s, u) {
                    var p = vt(e, r);
                    (s = ie(i, s)),
                      he([], [t], function (h) {
                        h = h[0];
                        var g = `constructor ${h.name}`;
                        if (
                          (h.ca.sa === void 0 && (h.ca.sa = []),
                          h.ca.sa[e - 1] !== void 0)
                        )
                          throw new Ge(
                            `Cannot register multiple constructors with identical number of parameters (${
                              e - 1
                            }) for class '${
                              h.name
                            }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                          );
                        return (
                          (h.ca.sa[e - 1] = () => {
                            Ie(
                              `Cannot construct ${h.name} due to unbound types`,
                              p
                            );
                          }),
                          he([], p, function (f) {
                            return (
                              f.splice(1, 0, null),
                              (h.ca.sa[e - 1] = pt(g, f, null, s, u)),
                              []
                            );
                          }),
                          []
                        );
                      });
                  },
                  a: function (t, e, r, i, s, u, p, h) {
                    var g = vt(r, i);
                    (e = H(e)),
                      (u = ie(s, u)),
                      he([], [t], function (f) {
                        function R() {
                          Ie(`Cannot call ${P} due to unbound types`, g);
                        }
                        f = f[0];
                        var P = `${f.name}.${e}`;
                        e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                          h && f.ca.gb.push(e);
                        var E = f.ca.ma,
                          c = E[e];
                        return (
                          c === void 0 ||
                          (c.ga === void 0 &&
                            c.className !== f.name &&
                            c.va === r - 2)
                            ? ((R.va = r - 2),
                              (R.className = f.name),
                              (E[e] = R))
                            : (Ft(E, e, P), (E[e].ga[r - 2] = R)),
                          he([], g, function (v) {
                            return (
                              (v = pt(P, v, f, u, p)),
                              E[e].ga === void 0
                                ? ((v.va = r - 2), (E[e] = v))
                                : (E[e].ga[r - 2] = v),
                              []
                            );
                          }),
                          []
                        );
                      });
                  },
                  e: function (t, e, r, i, s, u, p, h, g, f) {
                    (e = H(e)),
                      (s = ie(i, s)),
                      he([], [t], function (R) {
                        R = R[0];
                        var P = `${R.name}.${e}`,
                          E = {
                            get() {
                              Ie(`Cannot access ${P} due to unbound types`, [
                                r,
                                p,
                              ]);
                            },
                            enumerable: !0,
                            configurable: !0,
                          };
                        return (
                          (E.set = g
                            ? () => {
                                Ie(`Cannot access ${P} due to unbound types`, [
                                  r,
                                  p,
                                ]);
                              }
                            : () => {
                                F(P + " is a read-only property");
                              }),
                          Object.defineProperty(R.ca.ma, e, E),
                          he([], g ? [r, p] : [r], function (c) {
                            var v = c[0],
                              M = {
                                get() {
                                  var _ = Zt(this, R, P + " getter");
                                  return v.fromWireType(s(u, _));
                                },
                                enumerable: !0,
                              };
                            if (g) {
                              g = ie(h, g);
                              var X = c[1];
                              M.set = function (_) {
                                var x = Zt(this, R, P + " setter"),
                                  G = [];
                                g(f, x, X.toWireType(G, _)), tt(G);
                              };
                            }
                            return Object.defineProperty(R.ca.ma, e, M), [];
                          }),
                          []
                        );
                      });
                  },
                  J: function (t, e) {
                    (e = H(e)),
                      Te(t, {
                        name: e,
                        fromWireType: function (r) {
                          var i = ye(r);
                          return It(r), i;
                        },
                        toWireType: function (r, i) {
                          return Ee(i);
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: nt,
                        ka: null,
                      });
                  },
                  p: function (t, e, r, i) {
                    function s() {}
                    (r = ht(r)),
                      (e = H(e)),
                      (s.values = {}),
                      Te(t, {
                        name: e,
                        constructor: s,
                        fromWireType: function (u) {
                          return this.constructor.values[u];
                        },
                        toWireType: function (u, p) {
                          return p.value;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Tn(e, r, i),
                        ka: null,
                      }),
                      Ot(e, s);
                  },
                  d: function (t, e, r) {
                    var i = et(t, "enum");
                    (e = H(e)),
                      (t = i.constructor),
                      (i = Object.create(i.constructor.prototype, {
                        value: { value: r },
                        constructor: {
                          value: ot(`${i.name}_${e}`, function () {}),
                        },
                      })),
                      (t.values[r] = i),
                      (t[e] = i);
                  },
                  y: function (t, e, r) {
                    (r = ht(r)),
                      (e = H(e)),
                      Te(t, {
                        name: e,
                        fromWireType: function (i) {
                          return i;
                        },
                        toWireType: function (i, s) {
                          return s;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Mn(e, r),
                        ka: null,
                      });
                  },
                  m: function (t, e, r, i, s, u) {
                    var p = vt(e, r);
                    (t = H(t)),
                      (s = ie(i, s)),
                      Ot(
                        t,
                        function () {
                          Ie(`Cannot call ${t} due to unbound types`, p);
                        },
                        e - 1
                      ),
                      he([], p, function (h) {
                        return (
                          Kt(
                            t,
                            pt(t, [h[0], null].concat(h.slice(1)), null, s, u),
                            e - 1
                          ),
                          []
                        );
                      });
                  },
                  l: function (t, e, r, i, s) {
                    (e = H(e)), s === -1 && (s = 4294967295), (s = ht(r));
                    var u = (h) => h;
                    if (i === 0) {
                      var p = 32 - 8 * r;
                      u = (h) => (h << p) >>> p;
                    }
                    (r = e.includes("unsigned")
                      ? function (h, g) {
                          return g >>> 0;
                        }
                      : function (h, g) {
                          return g;
                        }),
                      Te(t, {
                        name: e,
                        fromWireType: u,
                        toWireType: r,
                        argPackAdvance: 8,
                        readValueFromPointer: Ln(e, s, i !== 0),
                        ka: null,
                      });
                  },
                  g: function (t, e, r) {
                    function i(u) {
                      u >>= 2;
                      var p = A;
                      return new s(p.buffer, p[u + 1], p[u]);
                    }
                    var s = [
                      Int8Array,
                      Uint8Array,
                      Int16Array,
                      Uint16Array,
                      Int32Array,
                      Uint32Array,
                      Float32Array,
                      Float64Array,
                    ][e];
                    (r = H(r)),
                      Te(
                        t,
                        {
                          name: r,
                          fromWireType: i,
                          argPackAdvance: 8,
                          readValueFromPointer: i,
                        },
                        { Jb: !0 }
                      );
                  },
                  z: function (t, e) {
                    e = H(e);
                    var r = e === "std::string";
                    Te(t, {
                      name: e,
                      fromWireType: function (i) {
                        var s = A[i >> 2],
                          u = i + 4;
                        if (r)
                          for (var p = u, h = 0; h <= s; ++h) {
                            var g = u + h;
                            if (h == s || y[g] == 0) {
                              if (
                                ((p = p ? mt(y, p, g - p) : ""), f === void 0)
                              )
                                var f = p;
                              else (f += String.fromCharCode(0)), (f += p);
                              p = g + 1;
                            }
                          }
                        else {
                          for (f = Array(s), h = 0; h < s; ++h)
                            f[h] = String.fromCharCode(y[u + h]);
                          f = f.join("");
                        }
                        return xe(i), f;
                      },
                      toWireType: function (i, s) {
                        s instanceof ArrayBuffer && (s = new Uint8Array(s));
                        var u = typeof s == "string";
                        u ||
                          s instanceof Uint8Array ||
                          s instanceof Uint8ClampedArray ||
                          s instanceof Int8Array ||
                          F("Cannot pass non-string to std::string");
                        var p = r && u ? tn(s) : s.length,
                          h = Ut(4 + p + 1),
                          g = h + 4;
                        if (((A[h >> 2] = p), r && u)) en(s, y, g, p + 1);
                        else if (u)
                          for (u = 0; u < p; ++u) {
                            var f = s.charCodeAt(u);
                            255 < f &&
                              (xe(g),
                              F(
                                "String has UTF-16 code units that do not fit in 8 bits"
                              )),
                              (y[g + u] = f);
                          }
                        else for (u = 0; u < p; ++u) y[g + u] = s[u];
                        return i !== null && i.push(xe, h), h;
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: nt,
                      ka: function (i) {
                        xe(i);
                      },
                    });
                  },
                  u: function (t, e, r) {
                    if (((r = H(r)), e === 2))
                      var i = _n,
                        s = Sn,
                        u = Fn,
                        p = () => T,
                        h = 1;
                    else
                      e === 4 &&
                        ((i = On), (s = In), (u = xn), (p = () => A), (h = 2));
                    Te(t, {
                      name: r,
                      fromWireType: function (g) {
                        for (
                          var f = A[g >> 2], R = p(), P, E = g + 4, c = 0;
                          c <= f;
                          ++c
                        ) {
                          var v = g + 4 + c * e;
                          (c == f || R[v >> h] == 0) &&
                            ((E = i(E, v - E)),
                            P === void 0
                              ? (P = E)
                              : ((P += String.fromCharCode(0)), (P += E)),
                            (E = v + e));
                        }
                        return xe(g), P;
                      },
                      toWireType: function (g, f) {
                        typeof f != "string" &&
                          F(`Cannot pass non-string to C++ string type ${r}`);
                        var R = u(f),
                          P = Ut(4 + R + e);
                        return (
                          (A[P >> 2] = R >> h),
                          s(f, P + 4, R + e),
                          g !== null && g.push(xe, P),
                          P
                        );
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: nt,
                      ka: function (g) {
                        xe(g);
                      },
                    });
                  },
                  Q: function (t, e, r, i, s, u) {
                    lt[t] = { name: H(e), Oa: ie(r, i), ra: ie(s, u), ab: [] };
                  },
                  P: function (t, e, r, i, s, u, p, h, g, f) {
                    lt[t].ab.push({
                      Cb: H(e),
                      Ib: r,
                      Gb: ie(i, s),
                      Hb: u,
                      Tb: p,
                      Sb: ie(h, g),
                      Ub: f,
                    });
                  },
                  L: function (t, e) {
                    (e = H(e)),
                      Te(t, {
                        Lb: !0,
                        name: e,
                        argPackAdvance: 0,
                        fromWireType: function () {},
                        toWireType: function () {},
                      });
                  },
                  v: function (t, e, r) {
                    (t = ye(t)), (e = et(e, "emval::as"));
                    var i = [],
                      s = Ee(i);
                    return (A[r >> 2] = s), e.toWireType(i, t);
                  },
                  w: function (t, e, r, i, s) {
                    (t = yt[t]), (e = ye(e)), (r = gt(r));
                    var u = [];
                    return (A[i >> 2] = Ee(u)), t(e, r, u, s);
                  },
                  i: function (t, e, r, i) {
                    (t = yt[t]), (e = ye(e)), (r = gt(r)), t(e, r, null, i);
                  },
                  c: It,
                  h: function (t, e) {
                    var r = Un(t, e),
                      i = r[0];
                    e =
                      i.name +
                      "_$" +
                      r
                        .slice(1)
                        .map(function (p) {
                          return p.name;
                        })
                        .join("_") +
                      "$";
                    var s = an[e];
                    if (s !== void 0) return s;
                    var u = Array(t - 1);
                    return (
                      (s = jn((p, h, g, f) => {
                        for (var R = 0, P = 0; P < t - 1; ++P)
                          (u[P] = r[P + 1].readValueFromPointer(f + R)),
                            (R += r[P + 1].argPackAdvance);
                        for (p = p[h].apply(p, u), P = 0; P < t - 1; ++P)
                          r[P + 1].xb && r[P + 1].xb(u[P]);
                        if (!i.Lb) return i.toWireType(g, p);
                      })),
                      (an[e] = s)
                    );
                  },
                  t: function (t) {
                    return (t = gt(t)), Ee(l[t]);
                  },
                  M: function (t, e) {
                    return (t = ye(t)), (e = ye(e)), Ee(t[e]);
                  },
                  n: function (t) {
                    4 < t && (pe.get(t).ib += 1);
                  },
                  o: function (t) {
                    return Ee(gt(t));
                  },
                  A: function () {
                    return Ee({});
                  },
                  q: function (t) {
                    var e = ye(t);
                    tt(e), It(t);
                  },
                  k: function (t, e, r) {
                    (t = ye(t)), (e = ye(e)), (r = ye(r)), (t[e] = r);
                  },
                  r: function (t, e) {
                    return (
                      (t = et(t, "_emval_take_value")),
                      (t = t.readValueFromPointer(e)),
                      Ee(t)
                    );
                  },
                  b: () => {
                    $e("");
                  },
                  E: (t) => {
                    var e = y.length;
                    if (((t >>>= 0), 2147483648 < t)) return !1;
                    for (var r = 1; 4 >= r; r *= 2) {
                      var i = e * (1 + 0.2 / r);
                      i = Math.min(i, t + 100663296);
                      var s = Math;
                      i = Math.max(t, i);
                      e: {
                        s =
                          (s.min.call(
                            s,
                            2147483648,
                            i + ((65536 - (i % 65536)) % 65536)
                          ) -
                            n.buffer.byteLength +
                            65535) >>>
                          16;
                        try {
                          n.grow(s), ce();
                          var u = 1;
                          break e;
                        } catch {}
                        u = void 0;
                      }
                      if (u) return !0;
                    }
                    return !1;
                  },
                  F: (t, e) => {
                    var r = 0;
                    return (
                      on().forEach(function (i, s) {
                        var u = e + r;
                        for (
                          s = A[(t + 4 * s) >> 2] = u, u = 0;
                          u < i.length;
                          ++u
                        )
                          m[s++ >> 0] = i.charCodeAt(u);
                        (m[s >> 0] = 0), (r += i.length + 1);
                      }),
                      0
                    );
                  },
                  G: (t, e) => {
                    var r = on();
                    A[t >> 2] = r.length;
                    var i = 0;
                    return (
                      r.forEach(function (s) {
                        i += s.length + 1;
                      }),
                      (A[e >> 2] = i),
                      0
                    );
                  },
                  H: () => 52,
                  B: function () {
                    return 70;
                  },
                  I: (t, e, r, i) => {
                    for (var s = 0, u = 0; u < r; u++) {
                      var p = A[e >> 2],
                        h = A[(e + 4) >> 2];
                      e += 8;
                      for (var g = 0; g < h; g++) {
                        var f = y[p + g],
                          R = kn[t];
                        f === 0 || f === 10
                          ? ((t === 1 ? Ke : ge)(mt(R, 0)), (R.length = 0))
                          : R.push(f);
                      }
                      s += h;
                    }
                    return (A[i >> 2] = s), 0;
                  },
                  D: (t, e, r, i) => Bn(t, e, r, i),
                };
                (function () {
                  function t(r) {
                    if (
                      ((a = r = r.exports),
                      (n = a.R),
                      ce(),
                      (Q = a.X),
                      Ae.unshift(a.S),
                      Ce--,
                      l.monitorRunDependencies && l.monitorRunDependencies(Ce),
                      Ce == 0 && je)
                    ) {
                      var i = je;
                      (je = null), i();
                    }
                    return r;
                  }
                  var e = { a: $n };
                  if (
                    (Ce++,
                    l.monitorRunDependencies && l.monitorRunDependencies(Ce),
                    l.instantiateWasm)
                  )
                    try {
                      return l.instantiateWasm(e, t);
                    } catch (r) {
                      ge(
                        "Module.instantiateWasm callback failed with error: " +
                          r
                      ),
                        ae(r);
                    }
                  return (
                    yn(e, function (r) {
                      t(r.instance);
                    }).catch(ae),
                    {}
                  );
                })();
                var xe = (t) => (xe = a.T)(t),
                  Ut = (t) => (Ut = a.U)(t),
                  ln = (t) => (ln = a.V)(t);
                (l.__embind_initialize_bindings = () =>
                  (l.__embind_initialize_bindings = a.W)()),
                  (l.dynCall_jiji = (t, e, r, i, s) =>
                    (l.dynCall_jiji = a.Y)(t, e, r, i, s)),
                  (l.dynCall_viijii = (t, e, r, i, s, u, p) =>
                    (l.dynCall_viijii = a.Z)(t, e, r, i, s, u, p)),
                  (l.dynCall_iiiiij = (t, e, r, i, s, u, p) =>
                    (l.dynCall_iiiiij = a._)(t, e, r, i, s, u, p)),
                  (l.dynCall_iiiiijj = (t, e, r, i, s, u, p, h, g) =>
                    (l.dynCall_iiiiijj = a.$)(t, e, r, i, s, u, p, h, g)),
                  (l.dynCall_iiiiiijj = (t, e, r, i, s, u, p, h, g, f) =>
                    (l.dynCall_iiiiiijj = a.aa)(t, e, r, i, s, u, p, h, g, f));
                var Rt;
                je = function t() {
                  Rt || fn(), Rt || (je = t);
                };
                function fn() {
                  function t() {
                    if (!Rt && ((Rt = !0), (l.calledRun = !0), !d)) {
                      if (
                        (Tt(Ae),
                        te(l),
                        l.onRuntimeInitialized && l.onRuntimeInitialized(),
                        l.postRun)
                      )
                        for (
                          typeof l.postRun == "function" &&
                          (l.postRun = [l.postRun]);
                          l.postRun.length;

                        ) {
                          var e = l.postRun.shift();
                          He.unshift(e);
                        }
                      Tt(He);
                    }
                  }
                  if (!(0 < Ce)) {
                    if (l.preRun)
                      for (
                        typeof l.preRun == "function" &&
                        (l.preRun = [l.preRun]);
                        l.preRun.length;

                      )
                        at();
                    Tt(Re),
                      0 < Ce ||
                        (l.setStatus
                          ? (l.setStatus("Running..."),
                            setTimeout(function () {
                              setTimeout(function () {
                                l.setStatus("");
                              }, 1),
                                t();
                            }, 1))
                          : t());
                  }
                }
                if (l.preInit)
                  for (
                    typeof l.preInit == "function" && (l.preInit = [l.preInit]);
                    0 < l.preInit.length;

                  )
                    l.preInit.pop()();
                return fn(), I.ready;
              };
            })();
            const me = be;
          },
          (q) => {
            q.exports = JSON.parse(
              `{"name":"@rive-app/canvas","version":"2.7.0","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`
            );
          },
          (q, V, N) => {
            N.r(V),
              N.d(V, {
                BLANK_URL: () => me.BLANK_URL,
                registerTouchInteractions: () => be.registerTouchInteractions,
                sanitizeUrl: () => me.sanitizeUrl,
              });
            var be = N(4),
              me = N(5);
          },
          (q, V, N) => {
            N.r(V), N.d(V, { registerTouchInteractions: () => Z });
            var be = void 0,
              me = function (I) {
                var l, te;
                return ["touchstart", "touchmove"].indexOf(I.type) > -1 &&
                  !((l = I.touches) === null || l === void 0) &&
                  l.length
                  ? (I.preventDefault(),
                    {
                      clientX: I.touches[0].clientX,
                      clientY: I.touches[0].clientY,
                    })
                  : I.type === "touchend" &&
                    !((te = I.changedTouches) === null || te === void 0) &&
                    te.length
                  ? {
                      clientX: I.changedTouches[0].clientX,
                      clientY: I.changedTouches[0].clientY,
                    }
                  : { clientX: I.clientX, clientY: I.clientY };
              },
              Z = function (I) {
                var l = I.canvas,
                  te = I.artboard,
                  ae = I.stateMachines,
                  ne = ae === void 0 ? [] : ae,
                  fe = I.renderer,
                  ue = I.rive,
                  re = I.fit,
                  oe = I.alignment;
                if (
                  !l ||
                  !ne.length ||
                  !fe ||
                  !ue ||
                  !te ||
                  typeof window > "u"
                )
                  return null;
                var S = function (Le) {
                    var we = Le.currentTarget.getBoundingClientRect(),
                      _e = me(Le),
                      se = _e.clientX,
                      ee = _e.clientY;
                    if (!(!se && !ee)) {
                      var Be = se - we.left,
                        Ke = ee - we.top,
                        ge = ue.computeAlignment(
                          re,
                          oe,
                          { minX: 0, minY: 0, maxX: we.width, maxY: we.height },
                          te.bounds
                        ),
                        o = new ue.Mat2D();
                      ge.invert(o);
                      var n = new ue.Vec2D(Be, Ke),
                        a = ue.mapXY(o, n),
                        d = a.x(),
                        m = a.y();
                      switch (
                        (a.delete(),
                        o.delete(),
                        n.delete(),
                        ge.delete(),
                        Le.type)
                      ) {
                        case "touchmove":
                        case "mouseover":
                        case "mouseout":
                        case "mousemove": {
                          for (var y = 0, w = ne; y < w.length; y++) {
                            var T = w[y];
                            T.pointerMove(d, m);
                          }
                          break;
                        }
                        case "touchstart":
                        case "mousedown": {
                          for (var L = 0, A = ne; L < A.length; L++) {
                            var T = A[L];
                            T.pointerDown(d, m);
                          }
                          break;
                        }
                        case "touchend":
                        case "mouseup": {
                          for (var D = 0, z = ne; D < z.length; D++) {
                            var T = z[D];
                            T.pointerUp(d, m);
                          }
                          break;
                        }
                      }
                    }
                  },
                  Y = S.bind(be);
                return (
                  l.addEventListener("mouseover", Y),
                  l.addEventListener("mouseout", Y),
                  l.addEventListener("mousemove", Y),
                  l.addEventListener("mousedown", Y),
                  l.addEventListener("mouseup", Y),
                  l.addEventListener("touchmove", Y),
                  l.addEventListener("touchstart", Y),
                  l.addEventListener("touchend", Y),
                  function () {
                    l.removeEventListener("mouseover", Y),
                      l.removeEventListener("mouseout", Y),
                      l.removeEventListener("mousemove", Y),
                      l.removeEventListener("mousedown", Y),
                      l.removeEventListener("mouseup", Y),
                      l.removeEventListener("touchmove", Y),
                      l.removeEventListener("touchstart", Y),
                      l.removeEventListener("touchend", Y);
                  }
                );
              };
          },
          (q, V, N) => {
            N.r(V), N.d(V, { BLANK_URL: () => ae, sanitizeUrl: () => ue });
            var be = /^([^\w]*)(javascript|data|vbscript)/im,
              me = /&#(\w+)(^\w|;)?/g,
              Z = /&(newline|tab);/gi,
              I = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
              l = /^.+(:|&colon;)/gim,
              te = [".", "/"],
              ae = "about:blank";
            function ne(re) {
              return te.indexOf(re[0]) > -1;
            }
            function fe(re) {
              var oe = re.replace(I, "");
              return oe.replace(me, function (S, Y) {
                return String.fromCharCode(Y);
              });
            }
            function ue(re) {
              if (!re) return ae;
              var oe = fe(re).replace(Z, "").replace(I, "").trim();
              if (!oe) return ae;
              if (ne(oe)) return oe;
              var S = oe.match(l);
              if (!S) return oe;
              var Y = S[0];
              return be.test(Y) ? ae : oe;
            }
          },
        ],
        Pt = {};
      function le(q) {
        var V = Pt[q];
        if (V !== void 0) return V.exports;
        var N = (Pt[q] = { exports: {} });
        return Ct[q](N, N.exports, le), N.exports;
      }
      (le.d = (q, V) => {
        for (var N in V)
          le.o(V, N) &&
            !le.o(q, N) &&
            Object.defineProperty(q, N, { enumerable: !0, get: V[N] });
      }),
        (le.o = (q, V) => Object.prototype.hasOwnProperty.call(q, V)),
        (le.r = (q) => {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(q, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(q, "__esModule", { value: !0 });
        });
      var Et = {};
      return (
        (() => {
          le.r(Et),
            le.d(Et, {
              Alignment: () => I,
              EventType: () => S,
              Fit: () => Z,
              Layout: () => l,
              LoopType: () => Y,
              Rive: () => _e,
              RiveEventType: () => ue,
              RuntimeLoader: () => te,
              StateMachineInput: () => fe,
              StateMachineInputType: () => ne,
              Testing: () => Be,
              decodeFont: () => ge,
              decodeImage: () => Ke,
            });
          var q = le(1),
            V = le(2),
            N = le(3),
            be = function (o, n, a, d) {
              function m(y) {
                return y instanceof a
                  ? y
                  : new a(function (w) {
                      w(y);
                    });
              }
              return new (a || (a = Promise))(function (y, w) {
                function T(D) {
                  try {
                    A(d.next(D));
                  } catch (z) {
                    w(z);
                  }
                }
                function L(D) {
                  try {
                    A(d.throw(D));
                  } catch (z) {
                    w(z);
                  }
                }
                function A(D) {
                  D.done ? y(D.value) : m(D.value).then(T, L);
                }
                A((d = d.apply(o, n || [])).next());
              });
            },
            me = function (o, n) {
              var a = {
                  label: 0,
                  sent: function () {
                    if (y[0] & 1) throw y[1];
                    return y[1];
                  },
                  trys: [],
                  ops: [],
                },
                d,
                m,
                y,
                w;
              return (
                (w = { next: T(0), throw: T(1), return: T(2) }),
                typeof Symbol == "function" &&
                  (w[Symbol.iterator] = function () {
                    return this;
                  }),
                w
              );
              function T(A) {
                return function (D) {
                  return L([A, D]);
                };
              }
              function L(A) {
                if (d) throw new TypeError("Generator is already executing.");
                for (; w && ((w = 0), A[0] && (a = 0)), a; )
                  try {
                    if (
                      ((d = 1),
                      m &&
                        (y =
                          A[0] & 2
                            ? m.return
                            : A[0]
                            ? m.throw || ((y = m.return) && y.call(m), 0)
                            : m.next) &&
                        !(y = y.call(m, A[1])).done)
                    )
                      return y;
                    switch (((m = 0), y && (A = [A[0] & 2, y.value]), A[0])) {
                      case 0:
                      case 1:
                        y = A;
                        break;
                      case 4:
                        return a.label++, { value: A[1], done: !1 };
                      case 5:
                        a.label++, (m = A[1]), (A = [0]);
                        continue;
                      case 7:
                        (A = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((y = a.trys),
                          !(y = y.length > 0 && y[y.length - 1]) &&
                            (A[0] === 6 || A[0] === 2))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          A[0] === 3 &&
                          (!y || (A[1] > y[0] && A[1] < y[3]))
                        ) {
                          a.label = A[1];
                          break;
                        }
                        if (A[0] === 6 && a.label < y[1]) {
                          (a.label = y[1]), (y = A);
                          break;
                        }
                        if (y && a.label < y[2]) {
                          (a.label = y[2]), a.ops.push(A);
                          break;
                        }
                        y[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    A = n.call(o, a);
                  } catch (D) {
                    (A = [6, D]), (m = 0);
                  } finally {
                    d = y = 0;
                  }
                if (A[0] & 5) throw A[1];
                return { value: A[0] ? A[1] : void 0, done: !0 };
              }
            },
            Z;
          (function (o) {
            (o.Cover = "cover"),
              (o.Contain = "contain"),
              (o.Fill = "fill"),
              (o.FitWidth = "fitWidth"),
              (o.FitHeight = "fitHeight"),
              (o.None = "none"),
              (o.ScaleDown = "scaleDown");
          })(Z || (Z = {}));
          var I;
          (function (o) {
            (o.Center = "center"),
              (o.TopLeft = "topLeft"),
              (o.TopCenter = "topCenter"),
              (o.TopRight = "topRight"),
              (o.CenterLeft = "centerLeft"),
              (o.CenterRight = "centerRight"),
              (o.BottomLeft = "bottomLeft"),
              (o.BottomCenter = "bottomCenter"),
              (o.BottomRight = "bottomRight");
          })(I || (I = {}));
          var l = (function () {
              function o(n) {
                var a, d, m, y, w, T;
                (this.fit =
                  (a = n?.fit) !== null && a !== void 0 ? a : Z.Contain),
                  (this.alignment =
                    (d = n?.alignment) !== null && d !== void 0 ? d : I.Center),
                  (this.minX = (m = n?.minX) !== null && m !== void 0 ? m : 0),
                  (this.minY = (y = n?.minY) !== null && y !== void 0 ? y : 0),
                  (this.maxX = (w = n?.maxX) !== null && w !== void 0 ? w : 0),
                  (this.maxY = (T = n?.maxY) !== null && T !== void 0 ? T : 0);
              }
              return (
                (o.new = function (n) {
                  var a = n.fit,
                    d = n.alignment,
                    m = n.minX,
                    y = n.minY,
                    w = n.maxX,
                    T = n.maxY;
                  return (
                    console.warn(
                      "This function is deprecated: please use `new Layout({})` instead"
                    ),
                    new o({
                      fit: a,
                      alignment: d,
                      minX: m,
                      minY: y,
                      maxX: w,
                      maxY: T,
                    })
                  );
                }),
                (o.prototype.copyWith = function (n) {
                  var a = n.fit,
                    d = n.alignment,
                    m = n.minX,
                    y = n.minY,
                    w = n.maxX,
                    T = n.maxY;
                  return new o({
                    fit: a ?? this.fit,
                    alignment: d ?? this.alignment,
                    minX: m ?? this.minX,
                    minY: y ?? this.minY,
                    maxX: w ?? this.maxX,
                    maxY: T ?? this.maxY,
                  });
                }),
                (o.prototype.runtimeFit = function (n) {
                  if (this.cachedRuntimeFit) return this.cachedRuntimeFit;
                  var a;
                  return (
                    this.fit === Z.Cover
                      ? (a = n.Fit.cover)
                      : this.fit === Z.Contain
                      ? (a = n.Fit.contain)
                      : this.fit === Z.Fill
                      ? (a = n.Fit.fill)
                      : this.fit === Z.FitWidth
                      ? (a = n.Fit.fitWidth)
                      : this.fit === Z.FitHeight
                      ? (a = n.Fit.fitHeight)
                      : this.fit === Z.ScaleDown
                      ? (a = n.Fit.scaleDown)
                      : (a = n.Fit.none),
                    (this.cachedRuntimeFit = a),
                    a
                  );
                }),
                (o.prototype.runtimeAlignment = function (n) {
                  if (this.cachedRuntimeAlignment)
                    return this.cachedRuntimeAlignment;
                  var a;
                  return (
                    this.alignment === I.TopLeft
                      ? (a = n.Alignment.topLeft)
                      : this.alignment === I.TopCenter
                      ? (a = n.Alignment.topCenter)
                      : this.alignment === I.TopRight
                      ? (a = n.Alignment.topRight)
                      : this.alignment === I.CenterLeft
                      ? (a = n.Alignment.centerLeft)
                      : this.alignment === I.CenterRight
                      ? (a = n.Alignment.centerRight)
                      : this.alignment === I.BottomLeft
                      ? (a = n.Alignment.bottomLeft)
                      : this.alignment === I.BottomCenter
                      ? (a = n.Alignment.bottomCenter)
                      : this.alignment === I.BottomRight
                      ? (a = n.Alignment.bottomRight)
                      : (a = n.Alignment.center),
                    (this.cachedRuntimeAlignment = a),
                    a
                  );
                }),
                o
              );
            })(),
            te = (function () {
              function o() {}
              return (
                (o.loadRuntime = function () {
                  q.default({
                    locateFile: function () {
                      return o.wasmURL;
                    },
                  })
                    .then(function (n) {
                      var a;
                      for (o.runtime = n; o.callBackQueue.length > 0; )
                        (a = o.callBackQueue.shift()) === null ||
                          a === void 0 ||
                          a(o.runtime);
                    })
                    .catch(function () {
                      var n = "https://cdn.jsdelivr.net/npm/"
                        .concat(V.name, "@")
                        .concat(V.version, "/rive.wasm");
                      o.wasmURL.toLowerCase() !== n
                        ? (console.warn(
                            "Failed to load WASM from ".concat(
                              o.wasmURL,
                              ", trying jsdelivr as a backup"
                            )
                          ),
                          o.setWasmUrl(n),
                          o.loadRuntime())
                        : console.error(
                            "Could not load Rive WASM file from unpkg or jsdelivr, network connection may be down, or 	        you may need to call set a new WASM source via RuntimeLoader.setWasmUrl() and call 	        RuntimeLoader.loadRuntime() again"
                          );
                    });
                }),
                (o.getInstance = function (n) {
                  o.isLoading || ((o.isLoading = !0), o.loadRuntime()),
                    o.runtime ? n(o.runtime) : o.callBackQueue.push(n);
                }),
                (o.awaitInstance = function () {
                  return new Promise(function (n) {
                    return o.getInstance(function (a) {
                      return n(a);
                    });
                  });
                }),
                (o.setWasmUrl = function (n) {
                  o.wasmURL = n;
                }),
                (o.isLoading = !1),
                (o.callBackQueue = []),
                (o.wasmURL = "https://unpkg.com/"
                  .concat(V.name, "@")
                  .concat(V.version, "/rive.wasm")),
                o
              );
            })(),
            ae = (function () {
              function o(n, a, d, m) {
                (this.animation = n),
                  (this.artboard = a),
                  (this.playing = m),
                  (this.loopCount = 0),
                  (this.scrubTo = null),
                  (this.instance = new d.LinearAnimationInstance(n, a));
              }
              return (
                Object.defineProperty(o.prototype, "name", {
                  get: function () {
                    return this.animation.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "time", {
                  get: function () {
                    return this.instance.time;
                  },
                  set: function (n) {
                    this.instance.time = n;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "loopValue", {
                  get: function () {
                    return this.animation.loopValue;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.advance = function (n) {
                  this.scrubTo === null
                    ? this.instance.advance(n)
                    : ((this.instance.time = 0),
                      this.instance.advance(this.scrubTo),
                      (this.scrubTo = null));
                }),
                (o.prototype.apply = function (n) {
                  this.instance.apply(n);
                }),
                Object.defineProperty(o.prototype, "needsScrub", {
                  get: function () {
                    return this.scrubTo !== null;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.cleanup = function () {
                  this.instance.delete();
                }),
                o
              );
            })(),
            ne;
          (function (o) {
            (o[(o.Number = 56)] = "Number"),
              (o[(o.Trigger = 58)] = "Trigger"),
              (o[(o.Boolean = 59)] = "Boolean");
          })(ne || (ne = {}));
          var fe = (function () {
              function o(n, a) {
                (this.type = n), (this.runtimeInput = a);
              }
              return (
                Object.defineProperty(o.prototype, "name", {
                  get: function () {
                    return this.runtimeInput.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "value", {
                  get: function () {
                    return this.runtimeInput.value;
                  },
                  set: function (n) {
                    this.runtimeInput.value = n;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.fire = function () {
                  this.type === ne.Trigger && this.runtimeInput.fire();
                }),
                o
              );
            })(),
            ue;
          (function (o) {
            (o[(o.General = 128)] = "General"),
              (o[(o.OpenUrl = 131)] = "OpenUrl");
          })(ue || (ue = {}));
          var re = (function () {
              function o(n, a, d, m) {
                (this.stateMachine = n),
                  (this.playing = d),
                  (this.artboard = m),
                  (this.inputs = []),
                  (this.instance = new a.StateMachineInstance(n, m)),
                  this.initInputs(a);
              }
              return (
                Object.defineProperty(o.prototype, "name", {
                  get: function () {
                    return this.stateMachine.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "statesChanged", {
                  get: function () {
                    for (
                      var n = [], a = 0;
                      a < this.instance.stateChangedCount();
                      a++
                    )
                      n.push(this.instance.stateChangedNameByIndex(a));
                    return n;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.advance = function (n) {
                  this.instance.advance(n);
                }),
                (o.prototype.reportedEventCount = function () {
                  return this.instance.reportedEventCount();
                }),
                (o.prototype.reportedEventAt = function (n) {
                  return this.instance.reportedEventAt(n);
                }),
                (o.prototype.initInputs = function (n) {
                  for (var a = 0; a < this.instance.inputCount(); a++) {
                    var d = this.instance.input(a);
                    this.inputs.push(this.mapRuntimeInput(d, n));
                  }
                }),
                (o.prototype.mapRuntimeInput = function (n, a) {
                  if (n.type === a.SMIInput.bool)
                    return new fe(ne.Boolean, n.asBool());
                  if (n.type === a.SMIInput.number)
                    return new fe(ne.Number, n.asNumber());
                  if (n.type === a.SMIInput.trigger)
                    return new fe(ne.Trigger, n.asTrigger());
                }),
                (o.prototype.cleanup = function () {
                  this.instance.delete();
                }),
                o
              );
            })(),
            oe = (function () {
              function o(n, a, d, m, y) {
                m === void 0 && (m = []),
                  y === void 0 && (y = []),
                  (this.runtime = n),
                  (this.artboard = a),
                  (this.eventManager = d),
                  (this.animations = m),
                  (this.stateMachines = y);
              }
              return (
                (o.prototype.add = function (n, a, d) {
                  if ((d === void 0 && (d = !0), (n = ee(n)), n.length === 0))
                    this.animations.forEach(function (Q) {
                      return (Q.playing = a);
                    }),
                      this.stateMachines.forEach(function (Q) {
                        return (Q.playing = a);
                      });
                  else
                    for (
                      var m = this.animations.map(function (Q) {
                          return Q.name;
                        }),
                        y = this.stateMachines.map(function (Q) {
                          return Q.name;
                        }),
                        w = 0;
                      w < n.length;
                      w++
                    ) {
                      var T = m.indexOf(n[w]),
                        L = y.indexOf(n[w]);
                      if (T >= 0 || L >= 0)
                        T >= 0
                          ? (this.animations[T].playing = a)
                          : (this.stateMachines[L].playing = a);
                      else {
                        var A = this.artboard.animationByName(n[w]);
                        if (A) {
                          var D = new ae(A, this.artboard, this.runtime, a);
                          D.advance(0), D.apply(1), this.animations.push(D);
                        } else {
                          var z = this.artboard.stateMachineByName(n[w]);
                          if (z) {
                            var ce = new re(z, this.runtime, a, this.artboard);
                            this.stateMachines.push(ce);
                          }
                        }
                      }
                    }
                  return (
                    d &&
                      (a
                        ? this.eventManager.fire({
                            type: S.Play,
                            data: this.playing,
                          })
                        : this.eventManager.fire({
                            type: S.Pause,
                            data: this.paused,
                          })),
                    a ? this.playing : this.paused
                  );
                }),
                (o.prototype.initLinearAnimations = function (n, a) {
                  for (
                    var d = this.animations.map(function (L) {
                        return L.name;
                      }),
                      m = 0;
                    m < n.length;
                    m++
                  ) {
                    var y = d.indexOf(n[m]);
                    if (y >= 0) this.animations[y].playing = a;
                    else {
                      var w = this.artboard.animationByName(n[m]);
                      if (w) {
                        var T = new ae(w, this.artboard, this.runtime, a);
                        T.advance(0), T.apply(1), this.animations.push(T);
                      }
                    }
                  }
                }),
                (o.prototype.initStateMachines = function (n, a) {
                  for (
                    var d = this.stateMachines.map(function (L) {
                        return L.name;
                      }),
                      m = 0;
                    m < n.length;
                    m++
                  ) {
                    var y = d.indexOf(n[m]);
                    if (y >= 0) this.stateMachines[y].playing = a;
                    else {
                      var w = this.artboard.stateMachineByName(n[m]);
                      if (w) {
                        var T = new re(w, this.runtime, a, this.artboard);
                        this.stateMachines.push(T);
                      } else this.initLinearAnimations([n[m]], a);
                    }
                  }
                }),
                (o.prototype.play = function (n) {
                  return this.add(n, !0);
                }),
                (o.prototype.pause = function (n) {
                  return this.add(n, !1);
                }),
                (o.prototype.scrub = function (n, a) {
                  var d = this.animations.filter(function (m) {
                    return n.includes(m.name);
                  });
                  return (
                    d.forEach(function (m) {
                      return (m.scrubTo = a);
                    }),
                    d.map(function (m) {
                      return m.name;
                    })
                  );
                }),
                Object.defineProperty(o.prototype, "playing", {
                  get: function () {
                    return this.animations
                      .filter(function (n) {
                        return n.playing;
                      })
                      .map(function (n) {
                        return n.name;
                      })
                      .concat(
                        this.stateMachines
                          .filter(function (n) {
                            return n.playing;
                          })
                          .map(function (n) {
                            return n.name;
                          })
                      );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "paused", {
                  get: function () {
                    return this.animations
                      .filter(function (n) {
                        return !n.playing;
                      })
                      .map(function (n) {
                        return n.name;
                      })
                      .concat(
                        this.stateMachines
                          .filter(function (n) {
                            return !n.playing;
                          })
                          .map(function (n) {
                            return n.name;
                          })
                      );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.stop = function (n) {
                  var a = this;
                  n = ee(n);
                  var d = [];
                  if (n.length === 0)
                    (d = this.animations
                      .map(function (w) {
                        return w.name;
                      })
                      .concat(
                        this.stateMachines.map(function (w) {
                          return w.name;
                        })
                      )),
                      this.animations.forEach(function (w) {
                        return w.cleanup();
                      }),
                      this.stateMachines.forEach(function (w) {
                        return w.cleanup();
                      }),
                      this.animations.splice(0, this.animations.length),
                      this.stateMachines.splice(0, this.stateMachines.length);
                  else {
                    var m = this.animations.filter(function (w) {
                      return n.includes(w.name);
                    });
                    m.forEach(function (w) {
                      w.cleanup(),
                        a.animations.splice(a.animations.indexOf(w), 1);
                    });
                    var y = this.stateMachines.filter(function (w) {
                      return n.includes(w.name);
                    });
                    y.forEach(function (w) {
                      w.cleanup(),
                        a.stateMachines.splice(a.stateMachines.indexOf(w), 1);
                    }),
                      (d = m
                        .map(function (w) {
                          return w.name;
                        })
                        .concat(
                          y.map(function (w) {
                            return w.name;
                          })
                        ));
                  }
                  return this.eventManager.fire({ type: S.Stop, data: d }), d;
                }),
                Object.defineProperty(o.prototype, "isPlaying", {
                  get: function () {
                    return (
                      this.animations.reduce(function (n, a) {
                        return n || a.playing;
                      }, !1) ||
                      this.stateMachines.reduce(function (n, a) {
                        return n || a.playing;
                      }, !1)
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "isPaused", {
                  get: function () {
                    return (
                      !this.isPlaying &&
                      (this.animations.length > 0 ||
                        this.stateMachines.length > 0)
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "isStopped", {
                  get: function () {
                    return (
                      this.animations.length === 0 &&
                      this.stateMachines.length === 0
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.atLeastOne = function (n, a) {
                  a === void 0 && (a = !0);
                  var d;
                  return (
                    this.animations.length === 0 &&
                      this.stateMachines.length === 0 &&
                      (this.artboard.animationCount() > 0
                        ? this.add(
                            [(d = this.artboard.animationByIndex(0).name)],
                            n,
                            a
                          )
                        : this.artboard.stateMachineCount() > 0 &&
                          this.add(
                            [(d = this.artboard.stateMachineByIndex(0).name)],
                            n,
                            a
                          )),
                    d
                  );
                }),
                (o.prototype.handleLooping = function () {
                  for (
                    var n = 0,
                      a = this.animations.filter(function (m) {
                        return m.playing;
                      });
                    n < a.length;
                    n++
                  ) {
                    var d = a[n];
                    d.loopValue === 0 && d.loopCount
                      ? ((d.loopCount = 0), this.stop(d.name))
                      : d.loopValue === 1 && d.loopCount
                      ? (this.eventManager.fire({
                          type: S.Loop,
                          data: { animation: d.name, type: Y.Loop },
                        }),
                        (d.loopCount = 0))
                      : d.loopValue === 2 &&
                        d.loopCount > 1 &&
                        (this.eventManager.fire({
                          type: S.Loop,
                          data: { animation: d.name, type: Y.PingPong },
                        }),
                        (d.loopCount = 0));
                  }
                }),
                (o.prototype.handleStateChanges = function () {
                  for (
                    var n = [],
                      a = 0,
                      d = this.stateMachines.filter(function (y) {
                        return y.playing;
                      });
                    a < d.length;
                    a++
                  ) {
                    var m = d[a];
                    n.push.apply(n, m.statesChanged);
                  }
                  n.length > 0 &&
                    this.eventManager.fire({ type: S.StateChange, data: n });
                }),
                (o.prototype.handleAdvancing = function (n) {
                  this.eventManager.fire({ type: S.Advance, data: n });
                }),
                o
              );
            })(),
            S;
          (function (o) {
            (o.Load = "load"),
              (o.LoadError = "loaderror"),
              (o.Play = "play"),
              (o.Pause = "pause"),
              (o.Stop = "stop"),
              (o.Loop = "loop"),
              (o.Draw = "draw"),
              (o.Advance = "advance"),
              (o.StateChange = "statechange"),
              (o.RiveEvent = "riveevent");
          })(S || (S = {}));
          var Y;
          (function (o) {
            (o.OneShot = "oneshot"),
              (o.Loop = "loop"),
              (o.PingPong = "pingpong");
          })(Y || (Y = {}));
          var Le = (function () {
              function o(n) {
                n === void 0 && (n = []), (this.listeners = n);
              }
              return (
                (o.prototype.getListeners = function (n) {
                  return this.listeners.filter(function (a) {
                    return a.type === n;
                  });
                }),
                (o.prototype.add = function (n) {
                  this.listeners.includes(n) || this.listeners.push(n);
                }),
                (o.prototype.remove = function (n) {
                  for (var a = 0; a < this.listeners.length; a++) {
                    var d = this.listeners[a];
                    if (d.type === n.type && d.callback === n.callback) {
                      this.listeners.splice(a, 1);
                      break;
                    }
                  }
                }),
                (o.prototype.removeAll = function (n) {
                  var a = this;
                  n
                    ? this.listeners
                        .filter(function (d) {
                          return d.type === n;
                        })
                        .forEach(function (d) {
                          return a.remove(d);
                        })
                    : this.listeners.splice(0, this.listeners.length);
                }),
                (o.prototype.fire = function (n) {
                  var a = this.getListeners(n.type);
                  a.forEach(function (d) {
                    return d.callback(n);
                  });
                }),
                o
              );
            })(),
            we = (function () {
              function o(n) {
                (this.eventManager = n), (this.queue = []);
              }
              return (
                (o.prototype.add = function (n) {
                  this.queue.push(n);
                }),
                (o.prototype.process = function () {
                  for (; this.queue.length > 0; ) {
                    var n = this.queue.shift();
                    n?.action && n.action(),
                      n?.event && this.eventManager.fire(n.event);
                  }
                }),
                o
              );
            })(),
            _e = (function () {
              function o(n) {
                var a;
                (this.loaded = !1),
                  (this.readyForPlaying = !1),
                  (this.artboard = null),
                  (this.eventCleanup = null),
                  (this.shouldDisableRiveListeners = !1),
                  (this.automaticallyHandleEvents = !1),
                  (this.enableRiveAssetCDN = !0),
                  (this.durations = []),
                  (this.frameTimes = []),
                  (this.frameCount = 0),
                  (this.renderSecondTimer = 0),
                  (this.canvas = n.canvas),
                  (this.src = n.src),
                  (this.buffer = n.buffer),
                  (this.layout =
                    (a = n.layout) !== null && a !== void 0 ? a : new l()),
                  (this.shouldDisableRiveListeners =
                    !!n.shouldDisableRiveListeners),
                  (this.automaticallyHandleEvents =
                    !!n.automaticallyHandleEvents),
                  (this.enableRiveAssetCDN =
                    n.enableRiveAssetCDN === void 0
                      ? !0
                      : n.enableRiveAssetCDN),
                  (this.eventManager = new Le()),
                  n.onLoad && this.on(S.Load, n.onLoad),
                  n.onLoadError && this.on(S.LoadError, n.onLoadError),
                  n.onPlay && this.on(S.Play, n.onPlay),
                  n.onPause && this.on(S.Pause, n.onPause),
                  n.onStop && this.on(S.Stop, n.onStop),
                  n.onLoop && this.on(S.Loop, n.onLoop),
                  n.onStateChange && this.on(S.StateChange, n.onStateChange),
                  n.onAdvance && this.on(S.Advance, n.onAdvance),
                  n.onload && !n.onLoad && this.on(S.Load, n.onload),
                  n.onloaderror &&
                    !n.onLoadError &&
                    this.on(S.LoadError, n.onloaderror),
                  n.onplay && !n.onPlay && this.on(S.Play, n.onplay),
                  n.onpause && !n.onPause && this.on(S.Pause, n.onpause),
                  n.onstop && !n.onStop && this.on(S.Stop, n.onstop),
                  n.onloop && !n.onLoop && this.on(S.Loop, n.onloop),
                  n.onstatechange &&
                    !n.onStateChange &&
                    this.on(S.StateChange, n.onstatechange),
                  n.assetLoader && (this.assetLoader = n.assetLoader),
                  (this.taskQueue = new we(this.eventManager)),
                  this.init({
                    src: this.src,
                    buffer: this.buffer,
                    autoplay: n.autoplay,
                    animations: n.animations,
                    stateMachines: n.stateMachines,
                    artboard: n.artboard,
                    useOffscreenRenderer: n.useOffscreenRenderer,
                  });
              }
              return (
                (o.new = function (n) {
                  return (
                    console.warn(
                      "This function is deprecated: please use `new Rive({})` instead"
                    ),
                    new o(n)
                  );
                }),
                (o.prototype.init = function (n) {
                  var a = this,
                    d = n.src,
                    m = n.buffer,
                    y = n.animations,
                    w = n.stateMachines,
                    T = n.artboard,
                    L = n.autoplay,
                    A = L === void 0 ? !1 : L,
                    D = n.useOffscreenRenderer,
                    z = D === void 0 ? !1 : D;
                  if (
                    ((this.src = d),
                    (this.buffer = m),
                    !this.src && !this.buffer)
                  )
                    throw new Error(o.missingErrorMessage);
                  var ce = ee(y),
                    Q = ee(w);
                  (this.loaded = !1),
                    (this.readyForPlaying = !1),
                    te
                      .awaitInstance()
                      .then(function (Re) {
                        (a.runtime = Re),
                          (a.renderer = a.runtime.makeRenderer(a.canvas, z)),
                          a.canvas.width ||
                            a.canvas.height ||
                            a.resizeDrawingSurfaceToCanvas(),
                          a
                            .initData(T, ce, Q, A)
                            .then(function () {
                              return a.setupRiveListeners();
                            })
                            .catch(function (Ae) {
                              console.error(Ae);
                            });
                      })
                      .catch(function (Re) {
                        console.error(Re);
                      });
                }),
                (o.prototype.setupRiveListeners = function () {
                  var n = this;
                  if (!this.shouldDisableRiveListeners) {
                    var a = (this.animator.stateMachines || [])
                      .filter(function (d) {
                        return d.playing && n.runtime.hasListeners(d.instance);
                      })
                      .map(function (d) {
                        return d.instance;
                      });
                    this.eventCleanup = (0, N.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: a,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                    });
                  }
                }),
                (o.prototype.initData = function (n, a, d, m) {
                  var y;
                  return be(this, void 0, void 0, function () {
                    var w, T, L, A;
                    return me(this, function (D) {
                      switch (D.label) {
                        case 0:
                          return this.src
                            ? ((w = this), [4, se(this.src)])
                            : [3, 2];
                        case 1:
                          (w.buffer = D.sent()), (D.label = 2);
                        case 2:
                          return (
                            this.assetLoader &&
                              (T = new this.runtime.CustomFileAssetLoader({
                                loadContents: this.assetLoader,
                              })),
                            (L = this),
                            [
                              4,
                              this.runtime.load(
                                new Uint8Array(this.buffer),
                                T,
                                this.enableRiveAssetCDN
                              ),
                            ]
                          );
                        case 3:
                          return (
                            (L.file = D.sent()),
                            this.file
                              ? (this.initArtboard(n, a, d, m),
                                (this.loaded = !0),
                                this.eventManager.fire({
                                  type: S.Load,
                                  data:
                                    (y = this.src) !== null && y !== void 0
                                      ? y
                                      : "buffer",
                                }),
                                (this.readyForPlaying = !0),
                                this.taskQueue.process(),
                                this.drawFrame(),
                                [2, Promise.resolve()])
                              : ((A = "Problem loading file; may be corrupt!"),
                                console.warn(A),
                                this.eventManager.fire({
                                  type: S.LoadError,
                                  data: A,
                                }),
                                [2, Promise.reject(A)])
                          );
                      }
                    });
                  });
                }),
                (o.prototype.initArtboard = function (n, a, d, m) {
                  var y = n
                    ? this.file.artboardByName(n)
                    : this.file.defaultArtboard();
                  if (!y) {
                    var w = "Invalid artboard name or no default artboard";
                    console.warn(w),
                      this.eventManager.fire({ type: S.LoadError, data: w });
                    return;
                  }
                  if (
                    ((this.artboard = y), this.artboard.animationCount() < 1)
                  ) {
                    var w = "Artboard has no animations";
                    throw (
                      (this.eventManager.fire({ type: S.LoadError, data: w }),
                      w)
                    );
                  }
                  this.animator = new oe(
                    this.runtime,
                    this.artboard,
                    this.eventManager
                  );
                  var T;
                  a.length > 0 || d.length > 0
                    ? ((T = a.concat(d)),
                      this.animator.initLinearAnimations(a, m),
                      this.animator.initStateMachines(d, m))
                    : (T = [this.animator.atLeastOne(m, !1)]),
                    this.taskQueue.add({
                      event: { type: m ? S.Play : S.Pause, data: T },
                    });
                }),
                (o.prototype.drawFrame = function () {
                  this.startRendering();
                }),
                (o.prototype.draw = function (n, a) {
                  var d = performance.now();
                  (this.frameRequestId = null),
                    this.lastRenderTime || (this.lastRenderTime = n),
                    (this.renderSecondTimer += n - this.lastRenderTime),
                    this.renderSecondTimer > 5e3 &&
                      ((this.renderSecondTimer = 0), a?.());
                  var m = (n - this.lastRenderTime) / 1e3;
                  this.lastRenderTime = n;
                  for (
                    var y = this.animator.animations
                        .filter(function (Se) {
                          return Se.playing || Se.needsScrub;
                        })
                        .sort(function (Se) {
                          return Se.needsScrub ? -1 : 1;
                        }),
                      w = 0,
                      T = y;
                    w < T.length;
                    w++
                  ) {
                    var L = T[w];
                    L.advance(m),
                      L.instance.didLoop && (L.loopCount += 1),
                      L.apply(1);
                  }
                  for (
                    var A = this.animator.stateMachines.filter(function (Se) {
                        return Se.playing;
                      }),
                      D = 0,
                      z = A;
                    D < z.length;
                    D++
                  ) {
                    var ce = z[D],
                      Q = ce.reportedEventCount();
                    if (Q)
                      for (var Re = 0; Re < Q; Re++) {
                        var Ae = ce.reportedEventAt(Re);
                        if (Ae)
                          if (Ae.type === ue.OpenUrl) {
                            if (
                              (this.eventManager.fire({
                                type: S.RiveEvent,
                                data: Ae,
                              }),
                              this.automaticallyHandleEvents)
                            ) {
                              var He = document.createElement("a"),
                                at = Ae,
                                Ce = at.url,
                                je = at.target,
                                $e = (0, N.sanitizeUrl)(Ce);
                              Ce && He.setAttribute("href", $e),
                                je && He.setAttribute("target", je),
                                $e && $e !== N.BLANK_URL && He.click();
                            }
                          } else
                            this.eventManager.fire({
                              type: S.RiveEvent,
                              data: Ae,
                            });
                      }
                    ce.advance(m);
                  }
                  this.artboard.advance(m);
                  var Ue = this.renderer;
                  Ue.clear(),
                    Ue.save(),
                    this.alignRenderer(),
                    this.artboard.draw(Ue),
                    Ue.restore(),
                    Ue.flush(),
                    this.animator.handleLooping(),
                    this.animator.handleStateChanges(),
                    this.animator.handleAdvancing(m),
                    this.frameCount++;
                  var Pe = performance.now();
                  for (
                    this.frameTimes.push(Pe), this.durations.push(Pe - d);
                    this.frameTimes[0] <= Pe - 1e3;

                  )
                    this.frameTimes.shift(), this.durations.shift();
                  this.animator.isPlaying
                    ? this.startRendering()
                    : this.animator.isPaused
                    ? (this.lastRenderTime = 0)
                    : this.animator.isStopped && (this.lastRenderTime = 0);
                }),
                (o.prototype.alignRenderer = function () {
                  var n = this,
                    a = n.renderer,
                    d = n.runtime,
                    m = n._layout,
                    y = n.artboard;
                  a.align(
                    m.runtimeFit(d),
                    m.runtimeAlignment(d),
                    { minX: m.minX, minY: m.minY, maxX: m.maxX, maxY: m.maxY },
                    y.bounds
                  );
                }),
                Object.defineProperty(o.prototype, "fps", {
                  get: function () {
                    return this.durations.length;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "frameTime", {
                  get: function () {
                    return this.durations.length === 0
                      ? 0
                      : (
                          this.durations.reduce(function (n, a) {
                            return n + a;
                          }, 0) / this.durations.length
                        ).toFixed(4);
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.cleanup = function () {
                  var n, a;
                  this.stopRendering(),
                    this.cleanupInstances(),
                    (n = this.renderer) === null || n === void 0 || n.delete(),
                    (this.renderer = null),
                    (a = this.file) === null || a === void 0 || a.delete(),
                    (this.file = null);
                }),
                (o.prototype.cleanupInstances = function () {
                  this.eventCleanup !== null && this.eventCleanup(),
                    this.stop(),
                    this.artboard &&
                      (this.artboard.delete(), (this.artboard = null));
                }),
                (o.prototype.retrieveTextRun = function (n) {
                  var a;
                  if (!n) {
                    console.warn("No text run name provided");
                    return;
                  }
                  if (!this.artboard) {
                    console.warn(
                      "Tried to access text run, but the Artboard is null"
                    );
                    return;
                  }
                  var d = this.artboard.textRun(n);
                  if (!d) {
                    console.warn(
                      "Could not access a text run with name '"
                        .concat(n, "' in the '")
                        .concat(
                          (a = this.artboard) === null || a === void 0
                            ? void 0
                            : a.name,
                          "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."
                        )
                    );
                    return;
                  }
                  return d;
                }),
                (o.prototype.getTextRunValue = function (n) {
                  var a = this.retrieveTextRun(n);
                  return a ? a.text : void 0;
                }),
                (o.prototype.setTextRunValue = function (n, a) {
                  var d = this.retrieveTextRun(n);
                  d && (d.text = a);
                }),
                (o.prototype.play = function (n, a) {
                  var d = this;
                  if (((n = ee(n)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return d.play(n, a);
                      },
                    });
                    return;
                  }
                  this.animator.play(n),
                    this.eventCleanup && this.eventCleanup(),
                    this.setupRiveListeners(),
                    this.startRendering();
                }),
                (o.prototype.pause = function (n) {
                  var a = this;
                  if (((n = ee(n)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return a.pause(n);
                      },
                    });
                    return;
                  }
                  this.eventCleanup && this.eventCleanup(),
                    this.animator.pause(n);
                }),
                (o.prototype.scrub = function (n, a) {
                  var d = this;
                  if (((n = ee(n)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return d.scrub(n, a);
                      },
                    });
                    return;
                  }
                  this.animator.scrub(n, a || 0), this.drawFrame();
                }),
                (o.prototype.stop = function (n) {
                  var a = this;
                  if (((n = ee(n)), !this.readyForPlaying)) {
                    this.taskQueue.add({
                      action: function () {
                        return a.stop(n);
                      },
                    });
                    return;
                  }
                  this.animator.stop(n),
                    this.eventCleanup && this.eventCleanup();
                }),
                (o.prototype.reset = function (n) {
                  var a,
                    d = n?.artboard,
                    m = ee(n?.animations),
                    y = ee(n?.stateMachines),
                    w = (a = n?.autoplay) !== null && a !== void 0 ? a : !1;
                  this.cleanupInstances(),
                    this.initArtboard(d, m, y, w),
                    this.taskQueue.process();
                }),
                (o.prototype.load = function (n) {
                  this.stop(), this.init(n);
                }),
                Object.defineProperty(o.prototype, "layout", {
                  get: function () {
                    return this._layout;
                  },
                  set: function (n) {
                    (this._layout = n),
                      (!n.maxX || !n.maxY) && this.resizeToCanvas(),
                      this.loaded &&
                        !this.animator.isPlaying &&
                        this.drawFrame();
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.resizeToCanvas = function () {
                  this._layout = this.layout.copyWith({
                    minX: 0,
                    minY: 0,
                    maxX: this.canvas.width,
                    maxY: this.canvas.height,
                  });
                }),
                (o.prototype.resizeDrawingSurfaceToCanvas = function () {
                  if (this.canvas instanceof HTMLCanvasElement && window) {
                    var n = this.canvas.getBoundingClientRect(),
                      a = n.width,
                      d = n.height,
                      m = window.devicePixelRatio || 1;
                    (this.canvas.width = m * a),
                      (this.canvas.height = m * d),
                      this.startRendering(),
                      this.resizeToCanvas();
                  }
                }),
                Object.defineProperty(o.prototype, "source", {
                  get: function () {
                    return this.src;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "activeArtboard", {
                  get: function () {
                    return this.artboard ? this.artboard.name : "";
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "animationNames", {
                  get: function () {
                    if (!this.loaded) return [];
                    for (
                      var n = [], a = 0;
                      a < this.artboard.animationCount();
                      a++
                    )
                      n.push(this.artboard.animationByIndex(a).name);
                    return n;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "stateMachineNames", {
                  get: function () {
                    if (!this.loaded) return [];
                    for (
                      var n = [], a = 0;
                      a < this.artboard.stateMachineCount();
                      a++
                    )
                      n.push(this.artboard.stateMachineByIndex(a).name);
                    return n;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.stateMachineInputs = function (n) {
                  if (this.loaded) {
                    var a = this.animator.stateMachines.find(function (d) {
                      return d.name === n;
                    });
                    return a?.inputs;
                  }
                }),
                Object.defineProperty(o.prototype, "playingStateMachineNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.stateMachines
                          .filter(function (n) {
                            return n.playing;
                          })
                          .map(function (n) {
                            return n.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "playingAnimationNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.animations
                          .filter(function (n) {
                            return n.playing;
                          })
                          .map(function (n) {
                            return n.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "pausedAnimationNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.animations
                          .filter(function (n) {
                            return !n.playing;
                          })
                          .map(function (n) {
                            return n.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "pausedStateMachineNames", {
                  get: function () {
                    return this.loaded
                      ? this.animator.stateMachines
                          .filter(function (n) {
                            return !n.playing;
                          })
                          .map(function (n) {
                            return n.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "isPlaying", {
                  get: function () {
                    return this.animator.isPlaying;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "isPaused", {
                  get: function () {
                    return this.animator.isPaused;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "isStopped", {
                  get: function () {
                    return this.animator.isStopped;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(o.prototype, "bounds", {
                  get: function () {
                    return this.artboard ? this.artboard.bounds : void 0;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.on = function (n, a) {
                  this.eventManager.add({ type: n, callback: a });
                }),
                (o.prototype.off = function (n, a) {
                  this.eventManager.remove({ type: n, callback: a });
                }),
                (o.prototype.unsubscribe = function (n, a) {
                  console.warn(
                    "This function is deprecated: please use `off()` instead."
                  ),
                    this.off(n, a);
                }),
                (o.prototype.removeAllRiveEventListeners = function (n) {
                  this.eventManager.removeAll(n);
                }),
                (o.prototype.unsubscribeAll = function (n) {
                  console.warn(
                    "This function is deprecated: please use `removeAllRiveEventListeners()` instead."
                  ),
                    this.removeAllRiveEventListeners(n);
                }),
                (o.prototype.stopRendering = function () {
                  this.loaded &&
                    this.frameRequestId &&
                    (this.runtime.cancelAnimationFrame
                      ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                      : cancelAnimationFrame(this.frameRequestId),
                    (this.frameRequestId = null));
                }),
                (o.prototype.startRendering = function () {
                  this.loaded &&
                    this.artboard &&
                    !this.frameRequestId &&
                    (this.runtime.requestAnimationFrame
                      ? (this.frameRequestId =
                          this.runtime.requestAnimationFrame(
                            this.draw.bind(this)
                          ))
                      : (this.frameRequestId = requestAnimationFrame(
                          this.draw.bind(this)
                        )));
                }),
                (o.prototype.enableFPSCounter = function (n) {
                  this.runtime.enableFPSCounter(n);
                }),
                (o.prototype.disableFPSCounter = function () {
                  this.runtime.disableFPSCounter();
                }),
                Object.defineProperty(o.prototype, "contents", {
                  get: function () {
                    if (this.loaded) {
                      for (
                        var n = { artboards: [] }, a = 0;
                        a < this.file.artboardCount();
                        a++
                      ) {
                        for (
                          var d = this.file.artboardByIndex(a),
                            m = {
                              name: d.name,
                              animations: [],
                              stateMachines: [],
                            },
                            y = 0;
                          y < d.animationCount();
                          y++
                        ) {
                          var w = d.animationByIndex(y);
                          m.animations.push(w.name);
                        }
                        for (var T = 0; T < d.stateMachineCount(); T++) {
                          for (
                            var L = d.stateMachineByIndex(T),
                              A = L.name,
                              D = new this.runtime.StateMachineInstance(L, d),
                              z = [],
                              ce = 0;
                            ce < D.inputCount();
                            ce++
                          ) {
                            var Q = D.input(ce);
                            z.push({ name: Q.name, type: Q.type });
                          }
                          m.stateMachines.push({ name: A, inputs: z });
                        }
                        n.artboards.push(m);
                      }
                      return n;
                    }
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.missingErrorMessage =
                  "Rive source file or data buffer required"),
                o
              );
            })(),
            se = function (o) {
              return be(void 0, void 0, void 0, function () {
                var n, a, d;
                return me(this, function (m) {
                  switch (m.label) {
                    case 0:
                      return (n = new Request(o)), [4, fetch(n)];
                    case 1:
                      return (a = m.sent()), [4, a.arrayBuffer()];
                    case 2:
                      return (d = m.sent()), [2, d];
                  }
                });
              });
            },
            ee = function (o) {
              return typeof o == "string" ? [o] : o instanceof Array ? o : [];
            },
            Be = { EventManager: Le, TaskQueueManager: we },
            Ke = function (o) {
              return new Promise(function (n) {
                return te.getInstance(function (a) {
                  a.decodeImage(o, n);
                });
              });
            },
            ge = function (o) {
              return new Promise(function (n) {
                return te.getInstance(function (a) {
                  a.decodeFont(o, n);
                });
              });
            };
        })(),
        Et
      );
    })()
  );
})(mn);
var Vn = mn.exports;
const Hn = "" + new URL("../assets/rive.ed455a66.wasm", import.meta.url).href;
export { Vn as r, Hn as w };
//# sourceMappingURL=rive.810782c4.js.map
