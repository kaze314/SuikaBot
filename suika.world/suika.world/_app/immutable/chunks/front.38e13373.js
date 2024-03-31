import "./index.c7cfddcd.js";
(function () {
  try {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[t] = "aa50378d-96d6-43a7-af21-a2c92f855fcb"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-aa50378d-96d6-43a7-af21-a2c92f855fcb"));
  } catch {}
})();
const oe =
    typeof window < "u"
      ? window
      : typeof globalThis < "u"
      ? globalThis
      : global,
  q = { x: -0.0021, y: 0.0032 };
function ce(i) {
  const t = new i.World({ x: 0, y: 0.973 }),
    e = i.ColliderDesc.cuboid(tt / 2, K)
      .setRestitution(0)
      .setRestitutionCombineRule(i.CoefficientCombineRule.Min)
      .setTranslation(tt / 2 + q.x, rt + K + q.y),
    n = t.createCollider(e),
    r = i.ColliderDesc.cuboid(K, rt / 2).setTranslation(q.x + K, rt / 2 + q.y);
  t.createCollider(r);
  const a = i.ColliderDesc.cuboid(K, rt / 2).setTranslation(
    q.x + tt - K,
    rt / 2 + q.y
  );
  t.createCollider(a);
  const s = i.ColliderDesc.cuboid(tt / 2, K)
    .setRestitution(0)
    .setRestitutionCombineRule(i.CoefficientCombineRule.Min)
    .setCollisionGroups(4294901762)
    .setTranslation(tt / 2 + q.x, Tt + zt - K + q.y);
  return t.createCollider(s), { world: t, ground: n.handle };
}
function de(i, t) {
  return (e, n, r) => {
    try {
      if (!r) return;
      const a = i.fruits.get(e),
        s = i.fruits.get(n);
      if (i.falling_fruit) {
        const g =
          e === i.falling_fruit.handle
            ? n
            : n === i.falling_fruit.handle
            ? e
            : null;
        g !== null &&
          (i.ground_handle === g || i.fruits.has(g)) &&
          ((i.falling_fruit = void 0), t.on_finish_falling?.());
      }
      if (!a || !s || a.type !== s.type) return;
      const u = a.combine();
      if (!u.combine) return;
      if (((i.score += u.score), u.output)) {
        const { x: g, y: M } = a.rigidBody.translation(),
          { x: X, y: j } = s.rigidBody.translation(),
          _ = { x: (g + X) / 2, y: (M + j) / 2 };
        a.destroy(), s.destroy(), t.on_create(u, _);
      } else a.destroy(), s.destroy(), t.on_rotten_pop?.();
    } catch (a) {
      console.error(a);
    }
  };
}
const K = 1 / 100,
  tt = 30 / 100,
  rt = 40 / 100,
  ht = 45 * 100,
  le = q.y + 270 / ht,
  Tt = q.y + 350 / ht,
  zt = 0,
  wt = 10 / ht;
function ue(i) {
  return [q.x + K * 2 + i + wt, q.x + tt - K * 2 - i - wt];
}
var Wt = ((i) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(i, { get: (t, e) => (typeof require < "u" ? require : t)[e] })
    : i)(function (i) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + i + '" is not supported');
});
new TextDecoder();
var ot = "0123456789abcdef",
  f = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10,
    11, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  st = "-",
  ct = 621355968000000000n,
  dt = 0x3fffffffffffffffn,
  Mt = new Uint8Array(0),
  Dt = "",
  m = [];
for (const i of ot) for (const t of ot) m.push(i + t);
var c = class extends Error {
    constructor(i) {
      super(i), (this.name = "BebopRuntimeError");
    }
  },
  P = class Z {
    constructor(t) {
      this.value = t;
    }
    static empty = new Z("00000000-0000-0000-0000-000000000000");
    toString() {
      return this.value;
    }
    isEmpty() {
      return this.value === Z.empty.value;
    }
    static isGuid(t) {
      return t instanceof Z;
    }
    static parseGuid(t) {
      let e = "",
        n = 0;
      for (let a = 0; a < t.length; a++) {
        let s = t[a].toLowerCase();
        if (ot.indexOf(s) !== -1) (e += s), n++;
        else if (s !== "-") throw new c(`Invalid GUID: ${t}`);
      }
      if (n !== 32) throw new c(`Invalid GUID: ${t}`);
      const r =
        e.slice(0, 8) +
        "-" +
        e.slice(8, 12) +
        "-" +
        e.slice(12, 16) +
        "-" +
        e.slice(16, 20) +
        "-" +
        e.slice(20);
      return new Z(r);
    }
    static newGuid() {
      let t = "";
      const e = Date.now();
      for (let n = 0; n < 36; n++)
        n === 8 || n === 13 || n === 18 || n === 23
          ? (t += "-")
          : n === 14
          ? (t += "4")
          : n === 19
          ? (t += Math.random() > 0.5 ? "a" : "b")
          : (t += ot[(Math.random() * 16 + e) % 16 | 0]);
      return new Z(t);
    }
    equals(t) {
      if (this === t) return !0;
      if (!(t instanceof Z)) return !1;
      for (let e = 0; e < this.value.length; e++)
        if (this.value[e] !== t.value[e]) return !1;
      return !0;
    }
    writeToView(t, e) {
      var n = 0,
        r = 0;
      (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (n += this.value.charCodeAt(n) === 45),
        t.setUint32(e, r, !0),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (n += this.value.charCodeAt(n) === 45),
        t.setUint16(e + 4, r, !0),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (n += this.value.charCodeAt(n) === 45),
        t.setUint16(e + 6, r, !0),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (n += this.value.charCodeAt(n) === 45),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        t.setUint32(e + 8, r, !1),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        (r = (r << 4) | f[this.value.charCodeAt(n++)]),
        t.setUint32(e + 12, r, !1);
    }
    static fromBytes(t, e) {
      var n = m[t[e + 3]];
      return (
        (n += m[t[e + 2]]),
        (n += m[t[e + 1]]),
        (n += m[t[e]]),
        (n += st),
        (n += m[t[e + 5]]),
        (n += m[t[e + 4]]),
        (n += st),
        (n += m[t[e + 7]]),
        (n += m[t[e + 6]]),
        (n += st),
        (n += m[t[e + 8]]),
        (n += m[t[e + 9]]),
        (n += st),
        (n += m[t[e + 10]]),
        (n += m[t[e + 11]]),
        (n += m[t[e + 12]]),
        (n += m[t[e + 13]]),
        (n += m[t[e + 14]]),
        (n += m[t[e + 15]]),
        new Z(n)
      );
    }
    [Symbol.toPrimitive](t) {
      if (t === "string" || t === "default") return this.toString();
      throw new Error(`Guid cannot be converted to ${t}`);
    }
  },
  gt = class It {
    map;
    constructor(t) {
      t instanceof Map
        ? (this.map = new Map(t))
        : t && typeof t[Symbol.iterator] == "function"
        ? (this.map = new Map([...t].map(([e, n]) => [e.toString(), n])))
        : (this.map = new Map());
    }
    set(t, e) {
      return this.map.set(t.toString(), e), this;
    }
    get(t) {
      return this.map.get(t.toString());
    }
    delete(t) {
      return this.map.delete(t.toString());
    }
    has(t) {
      return this.map.has(t.toString());
    }
    clear() {
      this.map.clear();
    }
    get size() {
      return this.map.size;
    }
    forEach(t) {
      this.map.forEach((e, n) => {
        t(e, P.parseGuid(n), this);
      });
    }
    *entries() {
      for (const [t, e] of this.map.entries()) yield [P.parseGuid(t), e];
    }
    *keys() {
      for (const t of this.map.keys()) yield P.parseGuid(t);
    }
    *values() {
      yield* this.map.values();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get [Symbol.species]() {
      return It;
    }
  },
  d = class D {
    static textDecoder;
    static writeBuffer = new Uint8Array(256);
    static writeBufferView = new DataView(D.writeBuffer.buffer);
    static instance;
    static getInstance() {
      return D.instance || (D.instance = new D()), D.instance;
    }
    minimumTextDecoderLength = 300;
    buffer;
    view;
    index;
    length;
    constructor() {
      (this.buffer = D.writeBuffer),
        (this.view = D.writeBufferView),
        (this.index = 0),
        (this.length = 0);
    }
    startReading(t) {
      (this.buffer = t),
        (this.view = new DataView(
          this.buffer.buffer,
          this.buffer.byteOffset,
          this.buffer.byteLength
        )),
        (this.index = 0),
        (this.length = t.length);
    }
    startWriting() {
      (this.buffer = D.writeBuffer),
        (this.view = D.writeBufferView),
        (this.index = 0),
        (this.length = 0);
    }
    guaranteeBufferLength(t) {
      if (t > this.buffer.length) {
        const e = new Uint8Array(t << 1);
        e.set(this.buffer),
          (this.buffer = e),
          (this.view = new DataView(e.buffer));
      }
    }
    growBy(t) {
      (this.length += t), this.guaranteeBufferLength(this.length);
    }
    skip(t) {
      this.index += t;
    }
    toArray() {
      return this.buffer.subarray(0, this.length);
    }
    readByte() {
      return this.buffer[this.index++];
    }
    readUint16() {
      const t = this.view.getUint16(this.index, !0);
      return (this.index += 2), t;
    }
    readInt16() {
      const t = this.view.getInt16(this.index, !0);
      return (this.index += 2), t;
    }
    readUint32() {
      const t = this.view.getUint32(this.index, !0);
      return (this.index += 4), t;
    }
    readInt32() {
      const t = this.view.getInt32(this.index, !0);
      return (this.index += 4), t;
    }
    readUint64() {
      const t = this.view.getBigUint64(this.index, !0);
      return (this.index += 8), t;
    }
    readInt64() {
      const t = this.view.getBigInt64(this.index, !0);
      return (this.index += 8), t;
    }
    readFloat32() {
      const t = this.view.getFloat32(this.index, !0);
      return (this.index += 4), t;
    }
    readFloat64() {
      const t = this.view.getFloat64(this.index, !0);
      return (this.index += 8), t;
    }
    writeByte(t) {
      const e = this.length;
      this.growBy(1), (this.buffer[e] = t);
    }
    writeUint16(t) {
      const e = this.length;
      this.growBy(2), this.view.setUint16(e, t, !0);
    }
    writeInt16(t) {
      const e = this.length;
      this.growBy(2), this.view.setInt16(e, t, !0);
    }
    writeUint32(t) {
      const e = this.length;
      this.growBy(4), this.view.setUint32(e, t, !0);
    }
    writeInt32(t) {
      const e = this.length;
      this.growBy(4), this.view.setInt32(e, t, !0);
    }
    writeUint64(t) {
      const e = this.length;
      this.growBy(8), this.view.setBigUint64(e, t, !0);
    }
    writeInt64(t) {
      const e = this.length;
      this.growBy(8), this.view.setBigInt64(e, t, !0);
    }
    writeFloat32(t) {
      const e = this.length;
      this.growBy(4), this.view.setFloat32(e, t, !0);
    }
    writeFloat64(t) {
      const e = this.length;
      this.growBy(8), this.view.setFloat64(e, t, !0);
    }
    readBytes() {
      const t = this.readUint32();
      if (t === 0) return Mt;
      const e = this.index,
        n = e + t;
      return (this.index = n), this.buffer.subarray(e, n);
    }
    writeBytes(t) {
      const e = t.length;
      if ((this.writeUint32(e), e === 0)) return;
      const n = this.length;
      this.growBy(e), this.buffer.set(t, n);
    }
    readString() {
      const t = this.readUint32();
      if (t === 0) return Dt;
      if (t >= this.minimumTextDecoderLength) {
        if (typeof Wt < "u" && typeof TextDecoder > "u")
          throw new c(
            "TextDecoder is not defined on 'global'. Please include a polyfill."
          );
        return (
          D.textDecoder === void 0 && (D.textDecoder = new TextDecoder()),
          D.textDecoder.decode(
            this.buffer.subarray(this.index, (this.index += t))
          )
        );
      }
      const e = this.index + t;
      let n = "",
        r;
      for (; this.index < e; ) {
        const a = this.buffer[this.index++];
        if (a < 192) r = a;
        else {
          const s = this.buffer[this.index++];
          if (a < 224) r = ((a & 31) << 6) | (s & 63);
          else {
            const u = this.buffer[this.index++];
            if (a < 240) r = ((a & 15) << 12) | ((s & 63) << 6) | (u & 63);
            else {
              const g = this.buffer[this.index++];
              r =
                ((a & 7) << 18) | ((s & 63) << 12) | ((u & 63) << 6) | (g & 63);
            }
          }
        }
        r < 65536
          ? (n += String.fromCharCode(r))
          : ((r -= 65536),
            (n += String.fromCharCode(
              (r >> 10) + 55296,
              (r & (1024 - 1)) + 56320
            )));
      }
      return (this.index = e), n;
    }
    writeString(t) {
      const e = t.length;
      if (e === 0) {
        this.writeUint32(0);
        return;
      }
      const n = 4 + e * 3;
      this.guaranteeBufferLength(this.length + n);
      let r = this.length + 4;
      const a = r;
      let s;
      for (let g = 0; g < e; g++) {
        const M = t.charCodeAt(g);
        if (g + 1 === e || M < 55296 || M >= 56320) s = M;
        else {
          const X = t.charCodeAt(++g);
          s = (M << 10) + X + (65536 - 56623104 - 56320);
        }
        s < 128
          ? (this.buffer[r++] = s)
          : (s < 2048
              ? (this.buffer[r++] = ((s >> 6) & 31) | 192)
              : (s < 65536
                  ? (this.buffer[r++] = ((s >> 12) & 15) | 224)
                  : ((this.buffer[r++] = ((s >> 18) & 7) | 240),
                    (this.buffer[r++] = ((s >> 12) & 63) | 128)),
                (this.buffer[r++] = ((s >> 6) & 63) | 128)),
            (this.buffer[r++] = (s & 63) | 128));
      }
      const u = r - a;
      this.view.setUint32(this.length, u, !0), (this.length += 4 + u);
    }
    readGuid() {
      const t = P.fromBytes(this.buffer, this.index);
      return (this.index += 16), t;
    }
    writeGuid(t) {
      const e = this.length;
      this.growBy(16), t.writeToView(this.view, e);
    }
    readDate() {
      const e = ((this.readUint64() & dt) - ct) / 10000n;
      return new Date(Number(e));
    }
    writeDate(t) {
      const n = BigInt(t.getTime()) * 10000n + ct;
      this.writeUint64(n & dt);
    }
    reserveMessageLength() {
      const t = this.length;
      return this.growBy(4), t;
    }
    fillMessageLength(t, e) {
      this.view.setUint32(t, e, !0);
    }
    readMessageLength() {
      const t = this.view.getUint32(this.index, !0);
      return (this.index += 4), t;
    }
  },
  Q = "#btype",
  Ct = "#ktype",
  Nt = 1,
  Ot = 2,
  xt = 3,
  lt = 4,
  St = 5,
  Jt = 6,
  vt = 7,
  Bt = 8,
  At = 9,
  $t = (i, t) => {
    switch (t) {
      case lt:
        return BigInt(i);
      case vt:
        return !!i;
      case Bt:
        return i;
      case At:
        return Number(i);
      default:
        throw new c(`Unknown scalar tag: ${t}`);
    }
  },
  Lt = (i) => {
    if (i.size === 0) throw new c("Cannot determine key type of an empty map.");
    const t = typeof i.keys().next().value;
    let e;
    switch (t) {
      case "string":
        e = Bt;
        break;
      case "number":
        e = At;
        break;
      case "boolean":
        e = vt;
        break;
      case "bigint":
        e = lt;
        break;
      default:
        throw new c(
          `Not suitable map type tag found. Keys must be strings, numbers, booleans, or BigInts: ${t}`
        );
    }
    return e;
  },
  at = (i, t) => {
    if (t === null) return t;
    switch (typeof t) {
      case "bigint":
        return { [Q]: lt, value: t.toString() };
      case "string":
      case "number":
      case "boolean":
        return t;
    }
    if (t instanceof Date) {
      const n = BigInt(t.getTime()) * 10000n + ct;
      return { [Q]: Ot, value: (n & dt).toString() };
    }
    if (t instanceof Uint8Array) return { [Q]: xt, value: Array.from(t) };
    if (t instanceof P) return { [Q]: St, value: t.toString() };
    if (t instanceof gt) {
      const e = {};
      for (let [n, r] of t.entries()) e[n.toString()] = at(i, r);
      return { [Q]: Jt, value: e };
    }
    if (t instanceof Map) {
      const e = {};
      let n = Lt(t);
      if (n === void 0) throw new c("Not suitable map key type tag found.");
      for (let [r, a] of t.entries()) e[r] = at(i, a);
      return { [Q]: Nt, [Ct]: n, value: e };
    }
    if (Array.isArray(t)) return t.map((e, n) => at(n, e));
    if (typeof t == "object") {
      const e = {};
      for (let n in t) e[n] = at(n, t[n]);
      return e;
    }
    return t;
  },
  ut = (i, t) => {
    if (i === "__proto__" || i === "prototype" || i === "constructor")
      throw new c("potential prototype pollution");
    if (t && typeof t == "object" && !Array.isArray(t) && t[Q])
      switch (t[Q]) {
        case lt:
          return BigInt(t.value);
        case Ot:
          const n = ((BigInt(t.value) & dt) - ct) / 10000n;
          return new Date(Number(n));
        case xt:
          return new Uint8Array(t.value);
        case Nt:
          const r = t[Ct];
          if (r == null) throw new c("Map key type tag not found.");
          const a = new Map();
          for (let u in t.value) {
            const g = $t(u, r);
            a.set(g, ut(u, t.value[u]));
          }
          return a;
        case St:
          return P.parseGuid(t.value);
        case Jt:
          const s = new gt();
          for (let u in t.value) s.set(P.parseGuid(u), ut(u, t.value[u]));
          return s;
        default:
          throw new c(`Unknown type marker: ${t[Q]}`);
      }
    return t;
  },
  l = { replacer: at, reviver: ut },
  Gt = (i) => {
    if (
      !(i === !1 || i === !0 || i instanceof Boolean || typeof i == "boolean")
    )
      throw new c(`Invalid value for Boolean: ${i} / typeof ${typeof i}`);
  },
  Ht = (i) => {
    if (!Number.isInteger(i) || i < 0 || i > 255)
      throw new c(`Invalid value for Uint8: ${i}`);
  },
  Vt = (i) => {
    if (!Number.isInteger(i) || i < -32768 || i > 32767)
      throw new c(`Invalid value for Int16: ${i}`);
  },
  qt = (i) => {
    if (!Number.isInteger(i) || i < 0 || i > 65535)
      throw new c(`Invalid value for Uint16: ${i}`);
  },
  Et = (i) => {
    if (!Number.isInteger(i) || i < -2147483648 || i > 2147483647)
      throw new c(`Invalid value for Int32: ${i}`);
  },
  Yt = (i) => {
    if (!Number.isInteger(i) || i < 0 || i > 4294967295)
      throw new c(`Invalid value for Uint32: ${i}`);
  },
  Kt = (i) => {
    const t = BigInt("-9223372036854775808"),
      e = BigInt("9223372036854775807");
    if (((i = BigInt(i)), i < t || i > e))
      throw new c(`Invalid value for Int64: ${i}`);
  },
  Xt = (i) => {
    const t = BigInt("18446744073709551615");
    if (((i = BigInt(i)), i < BigInt(0) || i > t))
      throw new c(`Invalid value for Uint64: ${i}`);
  },
  Qt = (i) => {
    if (typeof i != "bigint") throw new c(`Invalid value for BigInt: ${i}`);
  },
  Zt = (i) => {
    if (typeof i != "number" || !Number.isFinite(i))
      throw new c(`Invalid value for Float: ${i}`);
  },
  Pt = (i, t, e) => {
    if (!(i instanceof Map || i instanceof gt))
      throw new c(`Invalid value for Map: ${i}`);
    for (let [n, r] of i) t(n), e(r);
  },
  jt = (i, t) => {
    if (!Array.isArray(i)) throw new c(`Invalid value for Array: ${i}`);
    for (let e of i) t(e);
  },
  _t = (i) => {
    if (!(i instanceof Date)) throw new c(`Invalid value for Date: ${i}`);
  },
  te = (i) => {
    if (!(i instanceof Uint8Array))
      throw new c(`Invalid value for Uint8Array: ${i}`);
  },
  ee = (i) => {
    if (typeof i != "string") throw new c(`Invalid value for String: ${i}`);
  },
  ne = (i, t) => {
    if (!Number.isInteger(i))
      throw new c(`Invalid value for enum, not an int: ${i}`);
    if (!(i in t)) throw new c(`Invalid value for enum, not in enum: ${i}`);
  },
  ie = (i) => {
    if (!(i instanceof P)) throw new c(`Invalid value for Guid: ${i}`);
  },
  o = {
    ensureBoolean: Gt,
    ensureUint8: Ht,
    ensureInt16: Vt,
    ensureUint16: qt,
    ensureInt32: Et,
    ensureUint32: Yt,
    ensureInt64: Kt,
    ensureUint64: Xt,
    ensureBigInt: Qt,
    ensureFloat: Zt,
    ensureMap: Pt,
    ensureArray: jt,
    ensureDate: _t,
    ensureUint8Array: te,
    ensureString: ee,
    ensureEnum: ne,
    ensureGuid: ie,
  };
class E {
  constructor(t) {
    this.boards = t.boards;
  }
  toJSON() {
    return E.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    E.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureMap(t.boards, o.ensureString, $.validateCompatibility);
  }
  static unsafeCast(t) {
    return new E(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("Replay.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return E.validateCompatibility(e), E.unsafeCast(e);
  }
  encode() {
    return E.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), E.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    e.writeUint32(t.boards.size);
    for (const [a, s] of t.boards) e.writeString(a), $.encodeInto(s, e);
    return e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), E.readFrom(e);
  }
  static readFrom(t) {
    let e;
    {
      let r = t.readUint32();
      e = new Map();
      for (let a = 0; a < r; a++) {
        let s, u;
        (s = t.readString()), (u = $.readFrom(t)), e.set(s, u);
      }
    }
    let n = { boards: e };
    return new E(n);
  }
}
class $ {
  constructor(t) {
    this.drops = t.drops;
  }
  toJSON() {
    return $.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    $.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureArray(t.drops, L.validateCompatibility);
  }
  static unsafeCast(t) {
    return new $(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ReplayBoard.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return $.validateCompatibility(e), $.unsafeCast(e);
  }
  encode() {
    return $.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), $.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    {
      const a = t.drops.length;
      e.writeUint32(a);
      for (let s = 0; s < a; s++) L.encodeInto(t.drops[s], e);
    }
    return e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), $.readFrom(e);
  }
  static readFrom(t) {
    let e;
    {
      let r = t.readUint32();
      e = new Array(r);
      for (let a = 0; a < r; a++) {
        let s;
        (s = L.readFrom(t)), (e[a] = s);
      }
    }
    let n = { drops: e };
    return new $(n);
  }
}
class L {
  constructor(t) {
    (this.tick = t.tick), (this.type = t.type), (this.x = t.x);
  }
  toJSON() {
    return L.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    L.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureUint32(t.tick), o.ensureEnum(t.type, W), o.ensureFloat(t.x);
  }
  static unsafeCast(t) {
    return new L(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ReplayDrop.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return L.validateCompatibility(e), L.unsafeCast(e);
  }
  encode() {
    return L.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), L.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeUint32(t.tick),
      e.writeByte(t.type),
      e.writeFloat32(t.x),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), L.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readUint32();
    let n;
    n = t.readByte();
    let r;
    r = t.readFloat32();
    let a = { tick: e, type: n, x: r };
    return new L(a);
  }
}
class Y {
  constructor(t) {
    this.boards = t.boards;
  }
  toJSON() {
    return Y.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    Y.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureMap(t.boards, o.ensureString, G.validateCompatibility);
  }
  static unsafeCast(t) {
    return new Y(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("FinalBoardStates.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return Y.validateCompatibility(e), Y.unsafeCast(e);
  }
  encode() {
    return Y.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), Y.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    e.writeUint32(t.boards.size);
    for (const [a, s] of t.boards) e.writeString(a), G.encodeInto(s, e);
    return e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), Y.readFrom(e);
  }
  static readFrom(t) {
    let e;
    {
      let r = t.readUint32();
      e = new Map();
      for (let a = 0; a < r; a++) {
        let s, u;
        (s = t.readString()), (u = G.readFrom(t)), e.set(s, u);
      }
    }
    let n = { boards: e };
    return new Y(n);
  }
}
class G {
  constructor(t) {
    this.fruits = t.fruits;
  }
  toJSON() {
    return G.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    G.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureArray(t.fruits, H.validateCompatibility);
  }
  static unsafeCast(t) {
    return new G(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("FinalBoardState.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return G.validateCompatibility(e), G.unsafeCast(e);
  }
  encode() {
    return G.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), G.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    {
      const a = t.fruits.length;
      e.writeUint32(a);
      for (let s = 0; s < a; s++) H.encodeInto(t.fruits[s], e);
    }
    return e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), G.readFrom(e);
  }
  static readFrom(t) {
    let e;
    {
      let r = t.readUint32();
      e = new Array(r);
      for (let a = 0; a < r; a++) {
        let s;
        (s = H.readFrom(t)), (e[a] = s);
      }
    }
    let n = { fruits: e };
    return new G(n);
  }
}
class H {
  constructor(t) {
    (this.type = t.type),
      (this.x = t.x),
      (this.y = t.y),
      (this.rotation = t.rotation);
  }
  toJSON() {
    return H.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    H.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureEnum(t.type, W),
      o.ensureFloat(t.x),
      o.ensureFloat(t.y),
      o.ensureFloat(t.rotation);
  }
  static unsafeCast(t) {
    return new H(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("FinalBoardFruit.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return H.validateCompatibility(e), H.unsafeCast(e);
  }
  encode() {
    return H.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), H.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeByte(t.type),
      e.writeFloat32(t.x),
      e.writeFloat32(t.y),
      e.writeFloat32(t.rotation),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), H.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readByte();
    let n;
    n = t.readFloat32();
    let r;
    r = t.readFloat32();
    let a;
    a = t.readFloat32();
    let s = { type: e, x: n, y: r, rotation: a };
    return new H(s);
  }
}
class w {
  constructor(t) {
    (this.discriminator = 1),
      (this.tick = t.tick),
      (this.x = t.x),
      (this.buffer = t.buffer);
  }
  toJSON() {
    return w.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    w.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureUint32(t.tick), o.ensureFloat(t.x), o.ensureBoolean(t.buffer);
  }
  static unsafeCast(t) {
    return new w(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("DropFruit.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return w.validateCompatibility(e), w.unsafeCast(e);
  }
  encode() {
    return w.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), w.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeUint32(t.tick),
      e.writeFloat32(t.x),
      e.writeByte(Number(t.buffer)),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), w.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readUint32();
    let n;
    n = t.readFloat32();
    let r;
    r = !!t.readByte();
    let a = { tick: e, x: n, buffer: r };
    return new w(a);
  }
}
class I {
  constructor(t) {
    (this.discriminator = 2), (this.x = t.x);
  }
  toJSON() {
    return I.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    I.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureFloat(t.x);
  }
  static unsafeCast(t) {
    return new I(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("PreviewMove.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return I.validateCompatibility(e), I.unsafeCast(e);
  }
  encode() {
    return I.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), I.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.writeFloat64(t.x), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), I.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readFloat64();
    let n = { x: e };
    return new I(n);
  }
}
class C {
  constructor(t) {
    (this.discriminator = 3), (this.isReady = t.isReady);
  }
  toJSON() {
    return C.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    C.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureBoolean(t.isReady);
  }
  static unsafeCast(t) {
    return new C(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("Ready.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return C.validateCompatibility(e), C.unsafeCast(e);
  }
  encode() {
    return C.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), C.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.writeByte(Number(t.isReady)), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), C.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = !!t.readByte();
    let n = { isReady: e };
    return new C(n);
  }
}
class V {
  constructor(t) {
    this.discriminator = 4;
  }
  toJSON() {
    return V.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {}
  static validateCompatibility(t) {}
  static unsafeCast(t) {
    return new V(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("Reset.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return V.unsafeCast(e);
  }
  encode() {
    return V.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), V.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), V.readFrom(e);
  }
  static readFrom(t) {
    let e = {};
    return new V(e);
  }
}
class b {
  constructor(t) {
    this.data = t;
  }
  get discriminator() {
    return this.data.discriminator;
  }
  get value() {
    return this.data.value;
  }
  static fromDropFruit(t) {
    return new b({ discriminator: 1, value: new w(t) });
  }
  static fromPreviewMove(t) {
    return new b({ discriminator: 2, value: new I(t) });
  }
  static fromReady(t) {
    return new b({ discriminator: 3, value: new C(t) });
  }
  static fromReset(t) {
    return new b({ discriminator: 4, value: new V(t) });
  }
  toJSON() {
    return b.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return delete t.data.value.discriminator, JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    b.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    const e = t.data.discriminator;
    switch ((o.ensureUint8(e), e)) {
      case 1: {
        w.validateCompatibility(t.data.value);
        break;
      }
      case 2: {
        I.validateCompatibility(t.data.value);
        break;
      }
      case 3: {
        C.validateCompatibility(t.data.value);
        break;
      }
      case 4: {
        V.validateCompatibility(t.data.value);
        break;
      }
      default:
        throw new Error(`Unknown discriminator for ClientToServer: ${e}`);
    }
  }
  static unsafeCast(t) {
    const e = t.data.discriminator;
    switch (e) {
      case 1:
        return new b({ discriminator: 1, value: w.unsafeCast(t.value) });
      case 2:
        return new b({ discriminator: 2, value: I.unsafeCast(t.value) });
      case 3:
        return new b({ discriminator: 3, value: C.unsafeCast(t.value) });
      case 4:
        return new b({ discriminator: 4, value: V.unsafeCast(t.value) });
    }
    throw new c(`Failed to unsafely cast union from discriminator: ${e}`);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ClientToServer.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return b.validateCompatibility(e), b.unsafeCast(e);
  }
  encode() {
    return b.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), b.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length,
      r = e.reserveMessageLength(),
      a = e.length + 1;
    switch ((e.writeByte(t.data.discriminator), t.data.discriminator)) {
      case 1:
        w.encodeInto(t.data.value, e);
        break;
      case 2:
        I.encodeInto(t.data.value, e);
        break;
      case 3:
        C.encodeInto(t.data.value, e);
        break;
      case 4:
        V.encodeInto(t.data.value, e);
        break;
    }
    const s = e.length;
    return e.fillMessageLength(r, s - a), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), b.readFrom(e);
  }
  static readFrom(t) {
    const e = t.readMessageLength(),
      n = t.index + 1 + e;
    switch (t.readByte()) {
      case 1:
        return this.fromDropFruit(w.readFrom(t));
      case 2:
        return this.fromPreviewMove(I.readFrom(t));
      case 3:
        return this.fromReady(C.readFrom(t));
      case 4:
        return this.fromReset(V.readFrom(t));
      default:
        throw (
          ((t.index = n),
          new c("Unrecognized discriminator while decoding ClientToServer"))
        );
    }
  }
}
class N {
  constructor(t) {
    (this.discriminator = 1),
      (this.tick = t.tick),
      (this.playerId = t.playerId),
      (this.type = t.type),
      (this.x = t.x),
      (this.nextPreview = t.nextPreview);
  }
  toJSON() {
    return N.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    N.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureUint32(t.tick),
      o.ensureString(t.playerId),
      o.ensureEnum(t.type, W),
      o.ensureFloat(t.x),
      o.ensureEnum(t.nextPreview, W);
  }
  static unsafeCast(t) {
    return new N(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ServerDropFruit.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return N.validateCompatibility(e), N.unsafeCast(e);
  }
  encode() {
    return N.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), N.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeUint32(t.tick),
      e.writeString(t.playerId),
      e.writeByte(t.type),
      e.writeFloat32(t.x),
      e.writeByte(t.nextPreview),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), N.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readUint32();
    let n;
    n = t.readString();
    let r;
    r = t.readByte();
    let a;
    a = t.readFloat32();
    let s;
    s = t.readByte();
    let u = { tick: e, playerId: n, type: r, x: a, nextPreview: s };
    return new N(u);
  }
}
class O {
  constructor(t) {
    (this.discriminator = 2),
      (this.playerId = t.playerId),
      (this.lethalFruitHandle = t.lethalFruitHandle);
  }
  toJSON() {
    return O.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    O.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.playerId), o.ensureFloat(t.lethalFruitHandle);
  }
  static unsafeCast(t) {
    return new O(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("PlayerDied.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return O.validateCompatibility(e), O.unsafeCast(e);
  }
  encode() {
    return O.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), O.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeString(t.playerId),
      e.writeFloat64(t.lethalFruitHandle),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), O.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n;
    n = t.readFloat64();
    let r = { playerId: e, lethalFruitHandle: n };
    return new O(r);
  }
}
class x {
  constructor(t) {
    (this.discriminator = 3),
      (this.playerId = t.playerId),
      (this.garbageBar = t.garbageBar);
  }
  toJSON() {
    return x.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    x.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.playerId), o.ensureFloat(t.garbageBar);
  }
  static unsafeCast(t) {
    return new x(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("GarbageUpdate.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return x.validateCompatibility(e), x.unsafeCast(e);
  }
  encode() {
    return x.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), x.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeString(t.playerId), e.writeFloat64(t.garbageBar), e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), x.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n;
    n = t.readFloat64();
    let r = { playerId: e, garbageBar: n };
    return new x(r);
  }
}
class y {
  constructor(t) {
    this.data = t;
  }
  get discriminator() {
    return this.data.discriminator;
  }
  get value() {
    return this.data.value;
  }
  static fromServerDropFruit(t) {
    return new y({ discriminator: 1, value: new N(t) });
  }
  static fromPlayerDied(t) {
    return new y({ discriminator: 2, value: new O(t) });
  }
  static fromGarbageUpdate(t) {
    return new y({ discriminator: 3, value: new x(t) });
  }
  toJSON() {
    return y.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return delete t.data.value.discriminator, JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    y.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    const e = t.data.discriminator;
    switch ((o.ensureUint8(e), e)) {
      case 1: {
        N.validateCompatibility(t.data.value);
        break;
      }
      case 2: {
        O.validateCompatibility(t.data.value);
        break;
      }
      case 3: {
        x.validateCompatibility(t.data.value);
        break;
      }
      default:
        throw new Error(`Unknown discriminator for TickEvent: ${e}`);
    }
  }
  static unsafeCast(t) {
    const e = t.data.discriminator;
    switch (e) {
      case 1:
        return new y({ discriminator: 1, value: N.unsafeCast(t.value) });
      case 2:
        return new y({ discriminator: 2, value: O.unsafeCast(t.value) });
      case 3:
        return new y({ discriminator: 3, value: x.unsafeCast(t.value) });
    }
    throw new c(`Failed to unsafely cast union from discriminator: ${e}`);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("TickEvent.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return y.validateCompatibility(e), y.unsafeCast(e);
  }
  encode() {
    return y.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), y.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length,
      r = e.reserveMessageLength(),
      a = e.length + 1;
    switch ((e.writeByte(t.data.discriminator), t.data.discriminator)) {
      case 1:
        N.encodeInto(t.data.value, e);
        break;
      case 2:
        O.encodeInto(t.data.value, e);
        break;
      case 3:
        x.encodeInto(t.data.value, e);
        break;
    }
    const s = e.length;
    return e.fillMessageLength(r, s - a), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), y.readFrom(e);
  }
  static readFrom(t) {
    const e = t.readMessageLength(),
      n = t.index + 1 + e;
    switch (t.readByte()) {
      case 1:
        return this.fromServerDropFruit(N.readFrom(t));
      case 2:
        return this.fromPlayerDied(O.readFrom(t));
      case 3:
        return this.fromGarbageUpdate(x.readFrom(t));
      default:
        throw (
          ((t.index = n),
          new c("Unrecognized discriminator while decoding TickEvent"))
        );
    }
  }
}
class T {
  constructor(t) {
    (this.username = t.username),
      (this.image = t.image),
      (this.rating = t.rating);
  }
  toJSON() {
    return T.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    T.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.username),
      o.ensureString(t.image),
      o.ensureFloat(t.rating);
  }
  static unsafeCast(t) {
    return new T(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("PlayerInfo.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return T.validateCompatibility(e), T.unsafeCast(e);
  }
  encode() {
    return T.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), T.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeString(t.username),
      e.writeString(t.image),
      e.writeFloat64(t.rating),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), T.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n;
    n = t.readString();
    let r;
    r = t.readFloat64();
    let a = { username: e, image: n, rating: r };
    return new T(a);
  }
}
class p {
  constructor(t) {
    (this.player = t.player),
      (this.isReady = t.isReady),
      (this.isConnected = t.isConnected),
      (this.rapierState = t.rapierState),
      (this.groundHandle = t.groundHandle),
      (this.fruits = t.fruits),
      (this.hasFallingFruit = t.hasFallingFruit),
      (this.fallingFruit = t.fallingFruit),
      (this.killGraceTimer = t.killGraceTimer),
      (this.isDead = t.isDead),
      (this.score = t.score),
      (this.lastDropTime = t.lastDropTime),
      (this.dropTimer = t.dropTimer),
      (this.garbageBar = t.garbageBar);
  }
  toJSON() {
    return p.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    p.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    T.validateCompatibility(t.player),
      o.ensureBoolean(t.isReady),
      o.ensureBoolean(t.isConnected),
      o.ensureArray(t.rapierState, o.ensureUint8),
      o.ensureFloat(t.groundHandle),
      o.ensureMap(t.fruits, o.ensureFloat, (e) => o.ensureEnum(e, W)),
      o.ensureBoolean(t.hasFallingFruit),
      o.ensureFloat(t.fallingFruit),
      o.ensureUint8(t.killGraceTimer),
      o.ensureBoolean(t.isDead),
      o.ensureUint32(t.score),
      o.ensureUint32(t.lastDropTime),
      o.ensureFloat(t.dropTimer),
      o.ensureFloat(t.garbageBar);
  }
  static unsafeCast(t) {
    return (t.player = T.unsafeCast(t.player)), new p(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ServerBoardState.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return p.validateCompatibility(e), p.unsafeCast(e);
  }
  encode() {
    return p.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), p.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    T.encodeInto(t.player, e),
      e.writeByte(Number(t.isReady)),
      e.writeByte(Number(t.isConnected)),
      e.writeBytes(t.rapierState),
      e.writeFloat64(t.groundHandle),
      e.writeUint32(t.fruits.size);
    for (const [a, s] of t.fruits) e.writeFloat64(a), e.writeByte(s);
    return (
      e.writeByte(Number(t.hasFallingFruit)),
      e.writeFloat64(t.fallingFruit),
      e.writeByte(t.killGraceTimer),
      e.writeByte(Number(t.isDead)),
      e.writeUint32(t.score),
      e.writeUint32(t.lastDropTime),
      e.writeFloat64(t.dropTimer),
      e.writeFloat64(t.garbageBar),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), p.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = T.readFrom(t);
    let n;
    n = !!t.readByte();
    let r;
    r = !!t.readByte();
    let a;
    a = t.readBytes();
    let s;
    s = t.readFloat64();
    let u;
    {
      let Rt = t.readUint32();
      u = new Map();
      for (let yt = 0; yt < Rt; yt++) {
        let pt, bt;
        (pt = t.readFloat64()), (bt = t.readByte()), u.set(pt, bt);
      }
    }
    let g;
    g = !!t.readByte();
    let M;
    M = t.readFloat64();
    let X;
    X = t.readByte();
    let j;
    j = !!t.readByte();
    let _;
    _ = t.readUint32();
    let et;
    et = t.readUint32();
    let nt;
    nt = t.readFloat64();
    let it;
    it = t.readFloat64();
    let Ut = {
      player: e,
      isReady: n,
      isConnected: r,
      rapierState: a,
      groundHandle: s,
      fruits: u,
      hasFallingFruit: g,
      fallingFruit: M,
      killGraceTimer: X,
      isDead: j,
      score: _,
      lastDropTime: et,
      dropTimer: nt,
      garbageBar: it,
    };
    return new p(Ut);
  }
}
class z {
  constructor(t) {
    (this.private = t.private),
      (this.createdAt = t.createdAt),
      (this.region = t.region),
      (this.gameMode = t.gameMode);
  }
  toJSON() {
    return z.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    z.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureBoolean(t.private),
      o.ensureDate(t.createdAt),
      o.ensureString(t.region),
      o.ensureString(t.gameMode);
  }
  static unsafeCast(t) {
    return new z(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("LobbyInfo.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return z.validateCompatibility(e), z.unsafeCast(e);
  }
  encode() {
    return z.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), z.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeByte(Number(t.private)),
      e.writeDate(t.createdAt),
      e.writeString(t.region),
      e.writeString(t.gameMode),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), z.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = !!t.readByte();
    let n;
    n = t.readDate();
    let r;
    r = t.readString();
    let a;
    a = t.readString();
    let s = { private: e, createdAt: n, region: r, gameMode: a };
    return new z(s);
  }
}
class S {
  constructor(t) {
    (this.discriminator = 1), (this.index = t.index), (this.events = t.events);
  }
  toJSON() {
    return S.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    S.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureUint32(t.index), o.ensureArray(t.events, y.validateCompatibility);
  }
  static unsafeCast(t) {
    return new S(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("Tick.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return S.validateCompatibility(e), S.unsafeCast(e);
  }
  encode() {
    return S.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), S.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    e.writeUint32(t.index);
    {
      const a = t.events.length;
      e.writeUint32(a);
      for (let s = 0; s < a; s++) y.encodeInto(t.events[s], e);
    }
    return e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), S.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readUint32();
    let n;
    {
      let a = t.readUint32();
      n = new Array(a);
      for (let s = 0; s < a; s++) {
        let u;
        (u = y.readFrom(t)), (n[s] = u);
      }
    }
    let r = { index: e, events: n };
    return new S(r);
  }
}
class J {
  constructor(t) {
    (this.discriminator = 2),
      (this.serverVersion = t.serverVersion),
      (this.serverTickRate = t.serverTickRate),
      (this.clientTickRate = t.clientTickRate),
      (this.garbageTimer = t.garbageTimer),
      (this.gameState = t.gameState),
      (this.initialFruit = t.initialFruit),
      (this.secondFruit = t.secondFruit),
      (this.initialBoardStates = t.initialBoardStates),
      (this.lobby = t.lobby);
  }
  toJSON() {
    return J.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    J.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureUint32(t.serverVersion),
      o.ensureUint8(t.serverTickRate),
      o.ensureUint8(t.clientTickRate),
      o.ensureFloat(t.garbageTimer),
      o.ensureEnum(t.gameState, mt),
      o.ensureEnum(t.initialFruit, W),
      o.ensureEnum(t.secondFruit, W),
      o.ensureMap(
        t.initialBoardStates,
        o.ensureString,
        p.validateCompatibility
      ),
      z.validateCompatibility(t.lobby);
  }
  static unsafeCast(t) {
    return (t.lobby = z.unsafeCast(t.lobby)), new J(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("Setup.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return J.validateCompatibility(e), J.unsafeCast(e);
  }
  encode() {
    return J.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), J.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    e.writeUint32(t.serverVersion),
      e.writeByte(t.serverTickRate),
      e.writeByte(t.clientTickRate),
      e.writeFloat64(t.garbageTimer),
      e.writeByte(t.gameState),
      e.writeByte(t.initialFruit),
      e.writeByte(t.secondFruit),
      e.writeUint32(t.initialBoardStates.size);
    for (const [a, s] of t.initialBoardStates)
      e.writeString(a), p.encodeInto(s, e);
    return z.encodeInto(t.lobby, e), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), J.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readUint32();
    let n;
    n = t.readByte();
    let r;
    r = t.readByte();
    let a;
    a = t.readFloat64();
    let s;
    s = t.readByte();
    let u;
    u = t.readByte();
    let g;
    g = t.readByte();
    let M;
    {
      let _ = t.readUint32();
      M = new Map();
      for (let et = 0; et < _; et++) {
        let nt, it;
        (nt = t.readString()), (it = p.readFrom(t)), M.set(nt, it);
      }
    }
    let X;
    X = z.readFrom(t);
    let j = {
      serverVersion: e,
      serverTickRate: n,
      clientTickRate: r,
      garbageTimer: a,
      gameState: s,
      initialFruit: u,
      secondFruit: g,
      initialBoardStates: M,
      lobby: X,
    };
    return new J(j);
  }
}
class v {
  constructor(t) {
    (this.discriminator = 3), (this.playerId = t.playerId), (this.x = t.x);
  }
  toJSON() {
    return v.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    v.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.playerId), o.ensureFloat(t.x);
  }
  static unsafeCast(t) {
    return new v(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ServerPreviewMove.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return v.validateCompatibility(e), v.unsafeCast(e);
  }
  encode() {
    return v.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), v.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.writeString(t.playerId), e.writeFloat32(t.x), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), v.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n;
    n = t.readFloat32();
    let r = { playerId: e, x: n };
    return new v(r);
  }
}
class B {
  constructor(t) {
    (this.discriminator = 4), (this.type = t.type), (this.details = t.details);
  }
  toJSON() {
    return B.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    B.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureEnum(t.type, Ft), o.ensureString(t.details);
  }
  static unsafeCast(t) {
    return new B(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ServerError.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return B.validateCompatibility(e), B.unsafeCast(e);
  }
  encode() {
    return B.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), B.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.writeByte(t.type), e.writeString(t.details), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), B.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readByte();
    let n;
    n = t.readString();
    let r = { type: e, details: n };
    return new B(r);
  }
}
class A {
  constructor(t) {
    (this.discriminator = 5),
      (this.playerId = t.playerId),
      (this.board = t.board);
  }
  toJSON() {
    return A.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    A.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.playerId), p.validateCompatibility(t.board);
  }
  static unsafeCast(t) {
    return (t.board = p.unsafeCast(t.board)), new A(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("PlayerJoin.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return A.validateCompatibility(e), A.unsafeCast(e);
  }
  encode() {
    return A.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), A.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.writeString(t.playerId), p.encodeInto(t.board, e), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), A.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n;
    n = p.readFrom(t);
    let r = { playerId: e, board: n };
    return new A(r);
  }
}
class F {
  constructor(t) {
    (this.discriminator = 6),
      (this.playerId = t.playerId),
      (this.isReady = t.isReady);
  }
  toJSON() {
    return F.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    F.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.playerId), o.ensureBoolean(t.isReady);
  }
  static unsafeCast(t) {
    return new F(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("PlayerReady.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return F.validateCompatibility(e), F.unsafeCast(e);
  }
  encode() {
    return F.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), F.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeString(t.playerId), e.writeByte(Number(t.isReady)), e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), F.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n;
    n = !!t.readByte();
    let r = { playerId: e, isReady: n };
    return new F(r);
  }
}
class k {
  constructor(t) {
    (this.discriminator = 7),
      (this.playerId = t.playerId),
      (this.isConnected = t.isConnected);
  }
  toJSON() {
    return k.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    k.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.playerId), o.ensureBoolean(t.isConnected);
  }
  static unsafeCast(t) {
    return new k(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("PlayerConnected.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return k.validateCompatibility(e), k.unsafeCast(e);
  }
  encode() {
    return k.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), k.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return (
      e.writeString(t.playerId),
      e.writeByte(Number(t.isConnected)),
      e.length - n
    );
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), k.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n;
    n = !!t.readByte();
    let r = { playerId: e, isConnected: n };
    return new k(r);
  }
}
class U {
  constructor(t) {
    (this.discriminator = 8), (this.state = t.state);
  }
  toJSON() {
    return U.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    U.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureEnum(t.state, mt);
  }
  static unsafeCast(t) {
    return new U(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("GameStateUpdate.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return U.validateCompatibility(e), U.unsafeCast(e);
  }
  encode() {
    return U.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), U.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.writeByte(t.state), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), U.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readByte();
    let n = { state: e };
    return new U(n);
  }
}
class R {
  constructor(t) {
    (this.discriminator = 9), (this.playerId = t.playerId);
  }
  toJSON() {
    return R.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    R.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    o.ensureString(t.playerId);
  }
  static unsafeCast(t) {
    return new R(t);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("PlayerLeave.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return R.validateCompatibility(e), R.unsafeCast(e);
  }
  encode() {
    return R.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), R.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length;
    return e.writeString(t.playerId), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), R.readFrom(e);
  }
  static readFrom(t) {
    let e;
    e = t.readString();
    let n = { playerId: e };
    return new R(n);
  }
}
class h {
  constructor(t) {
    this.data = t;
  }
  get discriminator() {
    return this.data.discriminator;
  }
  get value() {
    return this.data.value;
  }
  static fromTick(t) {
    return new h({ discriminator: 1, value: new S(t) });
  }
  static fromSetup(t) {
    return new h({ discriminator: 2, value: new J(t) });
  }
  static fromServerPreviewMove(t) {
    return new h({ discriminator: 3, value: new v(t) });
  }
  static fromServerError(t) {
    return new h({ discriminator: 4, value: new B(t) });
  }
  static fromPlayerJoin(t) {
    return new h({ discriminator: 5, value: new A(t) });
  }
  static fromPlayerReady(t) {
    return new h({ discriminator: 6, value: new F(t) });
  }
  static fromPlayerConnected(t) {
    return new h({ discriminator: 7, value: new k(t) });
  }
  static fromGameStateUpdate(t) {
    return new h({ discriminator: 8, value: new U(t) });
  }
  static fromPlayerLeave(t) {
    return new h({ discriminator: 9, value: new R(t) });
  }
  toJSON() {
    return h.encodeToJSON(this);
  }
  static encodeToJSON(t) {
    return delete t.data.value.discriminator, JSON.stringify(t, l.replacer);
  }
  validateTypes() {
    h.validateCompatibility(this);
  }
  static validateCompatibility(t) {
    const e = t.data.discriminator;
    switch ((o.ensureUint8(e), e)) {
      case 1: {
        S.validateCompatibility(t.data.value);
        break;
      }
      case 2: {
        J.validateCompatibility(t.data.value);
        break;
      }
      case 3: {
        v.validateCompatibility(t.data.value);
        break;
      }
      case 4: {
        B.validateCompatibility(t.data.value);
        break;
      }
      case 5: {
        A.validateCompatibility(t.data.value);
        break;
      }
      case 6: {
        F.validateCompatibility(t.data.value);
        break;
      }
      case 7: {
        k.validateCompatibility(t.data.value);
        break;
      }
      case 8: {
        U.validateCompatibility(t.data.value);
        break;
      }
      case 9: {
        R.validateCompatibility(t.data.value);
        break;
      }
      default:
        throw new Error(`Unknown discriminator for ServerToClient: ${e}`);
    }
  }
  static unsafeCast(t) {
    const e = t.data.discriminator;
    switch (e) {
      case 1:
        return new h({ discriminator: 1, value: S.unsafeCast(t.value) });
      case 2:
        return new h({ discriminator: 2, value: J.unsafeCast(t.value) });
      case 3:
        return new h({ discriminator: 3, value: v.unsafeCast(t.value) });
      case 4:
        return new h({ discriminator: 4, value: B.unsafeCast(t.value) });
      case 5:
        return new h({ discriminator: 5, value: A.unsafeCast(t.value) });
      case 6:
        return new h({ discriminator: 6, value: F.unsafeCast(t.value) });
      case 7:
        return new h({ discriminator: 7, value: k.unsafeCast(t.value) });
      case 8:
        return new h({ discriminator: 8, value: U.unsafeCast(t.value) });
      case 9:
        return new h({ discriminator: 9, value: R.unsafeCast(t.value) });
    }
    throw new c(`Failed to unsafely cast union from discriminator: ${e}`);
  }
  static fromJSON(t) {
    if (typeof t != "string" || t.trim().length === 0)
      throw new c("ServerToClient.fromJSON: expected string");
    const e = JSON.parse(t, l.reviver);
    return h.validateCompatibility(e), h.unsafeCast(e);
  }
  encode() {
    return h.encode(this);
  }
  static encode(t) {
    const e = d.getInstance();
    return e.startWriting(), h.encodeInto(t, e), e.toArray();
  }
  static encodeInto(t, e) {
    const n = e.length,
      r = e.reserveMessageLength(),
      a = e.length + 1;
    switch ((e.writeByte(t.data.discriminator), t.data.discriminator)) {
      case 1:
        S.encodeInto(t.data.value, e);
        break;
      case 2:
        J.encodeInto(t.data.value, e);
        break;
      case 3:
        v.encodeInto(t.data.value, e);
        break;
      case 4:
        B.encodeInto(t.data.value, e);
        break;
      case 5:
        A.encodeInto(t.data.value, e);
        break;
      case 6:
        F.encodeInto(t.data.value, e);
        break;
      case 7:
        k.encodeInto(t.data.value, e);
        break;
      case 8:
        U.encodeInto(t.data.value, e);
        break;
      case 9:
        R.encodeInto(t.data.value, e);
        break;
    }
    const s = e.length;
    return e.fillMessageLength(r, s - a), e.length - n;
  }
  static decode(t) {
    const e = d.getInstance();
    return e.startReading(t), h.readFrom(e);
  }
  static readFrom(t) {
    const e = t.readMessageLength(),
      n = t.index + 1 + e;
    switch (t.readByte()) {
      case 1:
        return this.fromTick(S.readFrom(t));
      case 2:
        return this.fromSetup(J.readFrom(t));
      case 3:
        return this.fromServerPreviewMove(v.readFrom(t));
      case 4:
        return this.fromServerError(B.readFrom(t));
      case 5:
        return this.fromPlayerJoin(A.readFrom(t));
      case 6:
        return this.fromPlayerReady(F.readFrom(t));
      case 7:
        return this.fromPlayerConnected(k.readFrom(t));
      case 8:
        return this.fromGameStateUpdate(U.readFrom(t));
      case 9:
        return this.fromPlayerLeave(R.readFrom(t));
      default:
        throw (
          ((t.index = n),
          new c("Unrecognized discriminator while decoding ServerToClient"))
        );
    }
  }
}
var mt = ((i) => (
    (i[(i.Unknown = 0)] = "Unknown"),
    (i[(i.Waiting = 1)] = "Waiting"),
    (i[(i.Playing = 2)] = "Playing"),
    (i[(i.Finished = 3)] = "Finished"),
    i
  ))(mt || {}),
  Ft = ((i) => (
    (i[(i.Unknown = 0)] = "Unknown"),
    (i[(i.ConnectedElsewhere = 1)] = "ConnectedElsewhere"),
    (i[(i.MissingAuth = 2)] = "MissingAuth"),
    (i[(i.InvalidLobbyCode = 3)] = "InvalidLobbyCode"),
    (i[(i.InvalidSession = 4)] = "InvalidSession"),
    (i[(i.LobbyNotFound = 5)] = "LobbyNotFound"),
    (i[(i.PlayerNotInLobby = 6)] = "PlayerNotInLobby"),
    (i[(i.GameFinished = 7)] = "GameFinished"),
    (i[(i.WrongServerVersion = 8)] = "WrongServerVersion"),
    i
  ))(Ft || {}),
  W = ((i) => (
    (i[(i.Unknown = 0)] = "Unknown"),
    (i[(i.Cherry = 1)] = "Cherry"),
    (i[(i.Strawberry = 2)] = "Strawberry"),
    (i[(i.Grape = 3)] = "Grape"),
    (i[(i.Orange = 4)] = "Orange"),
    (i[(i.Persimmon = 5)] = "Persimmon"),
    (i[(i.Apple = 6)] = "Apple"),
    (i[(i.Yuzu = 7)] = "Yuzu"),
    (i[(i.Peach = 8)] = "Peach"),
    (i[(i.Pineapple = 9)] = "Pineapple"),
    (i[(i.Honeydew = 10)] = "Honeydew"),
    (i[(i.Watermelon = 11)] = "Watermelon"),
    (i[(i.RottenCherry = 12)] = "RottenCherry"),
    (i[(i.RottenStrawberry = 13)] = "RottenStrawberry"),
    (i[(i.RottenGrape = 14)] = "RottenGrape"),
    (i[(i.RottenOrange = 15)] = "RottenOrange"),
    (i[(i.RottenPersimmon = 16)] = "RottenPersimmon"),
    (i[(i.RottenApple = 17)] = "RottenApple"),
    (i[(i.RottenYuzu = 18)] = "RottenYuzu"),
    (i[(i.RottenPeach = 19)] = "RottenPeach"),
    (i[(i.RottenPineapple = 20)] = "RottenPineapple"),
    (i[(i.RottenHoneydew = 21)] = "RottenHoneydew"),
    (i[(i.RottenWatermelon = 22)] = "RottenWatermelon"),
    (i[(i.Blueberry = 23)] = "Blueberry"),
    i
  ))(W || {});
const re = [
    {
      type: 1,
      name: "Cherry",
      size: { x: 98, y: 136.28450106157112 },
      img: "/fruit/cherry.png",
      score: 1,
      center: { x: 0.49929299363057317, y: 0.6399496183206107 },
      rotten: !1,
      hitbox_radius: 0.5007070063694267,
    },
    {
      type: 2,
      name: "Strawberry",
      size: { x: 132, y: 149.7243816254417 },
      img: "/fruit/strawberry.png",
      score: 3,
      center: { x: 0.5026501766784452, y: 0.5007788161993769 },
      rotten: !1,
      hitbox_radius: 0.5,
    },
    {
      type: 3,
      name: "Grape",
      size: { x: 200, y: 227.61061946902655 },
      img: "/fruit/grape.png",
      score: 6,
      center: { x: 0.4978747831240702, y: 0.521632651307735 },
      rotten: !1,
      hitbox_radius: 0.5,
    },
    {
      type: 4,
      name: "Orange",
      size: { x: 208, y: 224.58471760797343 },
      img: "/fruit/orange.png",
      score: 10,
      center: { x: 0.5, y: 0.5369230769230771 },
      rotten: !1,
      hitbox_radius: 0.5,
    },
    {
      type: 5,
      name: "Persimmon",
      size: { x: 265, y: 285.6208609271523 },
      img: "/fruit/persimmon.png",
      score: 15,
      center: { x: 0.4999999999999999, y: 0.5360983102918587 },
      rotten: !1,
      hitbox_radius: 0.4999999999999999,
    },
    {
      type: 6,
      name: "Apple",
      size: { x: 341, y: 349.687898089172 },
      img: "/fruit/apple.png",
      score: 21,
      center: { x: 0.5, y: 0.5124223602484472 },
      rotten: !1,
      hitbox_radius: 0.4999999999999999,
    },
    {
      type: 7,
      name: "Yuzu",
      size: { x: 394, y: 418.1873990306947 },
      img: "/fruit/yuzu.png",
      score: 28,
      center: { x: 0.5, y: 0.5289193302891934 },
      rotten: !1,
      hitbox_radius: 0.5,
    },
    {
      type: 8,
      name: "Peach",
      size: { x: 484, y: 471.45731707317077 },
      img: "/fruit/peach.png",
      score: 36,
      center: { x: 0.4992378048780488, y: 0.5015649452269171 },
      rotten: !1,
      hitbox_radius: 0.4839186335599873,
    },
    {
      type: 9,
      name: "Pineapple",
      size: { x: 536, y: 609.2189141856393 },
      img: "/fruit/pineapple.png",
      score: 45,
      center: { x: 0.5, y: 0.5600924499229584 },
      rotten: !1,
      hitbox_radius: 0.5,
    },
    {
      type: 10,
      name: "Honeydew",
      size: { x: 660, y: 661.0138248847926 },
      img: "/fruit/honeydew.png",
      score: 55,
      center: { x: 0.5, y: 0.5007668711656442 },
      rotten: !1,
      hitbox_radius: 0.4999999999999999,
    },
    {
      type: 11,
      name: "Watermelon",
      size: { x: 778, y: 776.8229954614221 },
      img: "/fruit/watermelon.png",
      score: 66,
      center: { x: 0.5007564296520424, y: 0.5 },
      rotten: !1,
      hitbox_radius: 0.49924357034795763,
    },
    {
      type: 12,
      name: "Rotten Cherry",
      size: { x: 113, y: 105.7959927140255 },
      img: "/rotten_fruit/cherry.png",
      score: 0,
      center: { x: 0.43274310468216165, y: 0.5377899523920101 },
      rotten: !0,
      hitbox_radius: 0.4327431046821617,
    },
    {
      type: 13,
      name: "Rotten Strawberry",
      size: { x: 132, y: 149.1875 },
      img: "/rotten_fruit/strawberry.png",
      score: 0,
      center: { x: 0.5000000000000001, y: 0.5 },
      rotten: !0,
      hitbox_radius: 0.5000000000000001,
    },
    {
      type: 14,
      name: "Rotten Grape",
      size: { x: 200, y: 195.8115183246073 },
      img: "/rotten_fruit/grape.png",
      score: 0,
      center: { x: 0.49345888106964636, y: 0.48526202827170173 },
      rotten: !0,
      hitbox_radius: 0.4731308966763676,
    },
    {
      type: 15,
      name: "Rotten Orange",
      size: { x: 208, y: 224.68085106382978 },
      img: "/rotten_fruit/orange.png",
      score: 0,
      center: { x: 0.5, y: 0.5371212121212121 },
      rotten: !0,
      hitbox_radius: 0.5000000000000001,
    },
    {
      type: 16,
      name: "Rotten Persimmon",
      size: { x: 265, y: 286.2173202614379 },
      img: "/rotten_fruit/persimmon.png",
      score: 0,
      center: { x: 0.5, y: 0.5370650529500756 },
      rotten: !0,
      hitbox_radius: 0.5,
    },
    {
      type: 17,
      name: "Rotten Apple",
      size: { x: 341, y: 349.55172413793105 },
      img: "/rotten_fruit/apple.png",
      score: 0,
      center: { x: 0.5, y: 0.5122324159021407 },
      rotten: !0,
      hitbox_radius: 0.5,
    },
    {
      type: 18,
      name: "Rotten Yuzu",
      size: { x: 394, y: 402.76947535771063 },
      img: "/rotten_fruit/yuzu.png",
      score: 0,
      center: { x: 0.5, y: 0.5108864696734059 },
      rotten: !0,
      hitbox_radius: 0.5,
    },
    {
      type: 19,
      name: "Rotten Peach",
      size: { x: 484, y: 471.6456456456457 },
      img: "/rotten_fruit/peach.png",
      score: 0,
      center: { x: 0.49924924924924924, y: 0.5015408320493067 },
      rotten: !0,
      hitbox_radius: 0.49018336302281945,
    },
    {
      type: 20,
      name: "Rotten Pineapple",
      size: { x: 536, y: 585.903448275862 },
      img: "/rotten_fruit/pineapple.png",
      score: 0,
      center: { x: 0.5, y: 0.5425867507886435 },
      rotten: !0,
      hitbox_radius: 0.5,
    },
    {
      type: 21,
      name: "Rotten Honeydew",
      size: { x: 660, y: 660.9984871406959 },
      img: "/rotten_fruit/honeydew.png",
      score: 0,
      center: { x: 0.5, y: 0.5007552870090635 },
      rotten: !0,
      hitbox_radius: 0.5,
    },
    {
      type: 22,
      name: "Rotten Watermelon",
      size: { x: 778, y: 776.8405365126677 },
      img: "/rotten_fruit/watermelon.png",
      score: 0,
      center: { x: 0.5, y: 0.4992537313432836 },
      rotten: !0,
      hitbox_radius: 0.5,
    },
    {
      type: 23,
      name: "Blueberry",
      size: { x: 150, y: 150 },
      img: "/fruit/blueberry.png",
      score: 0,
      center: { x: 0.5018547759824676, y: 0.5011947047381717 },
      rotten: !1,
      hitbox_radius: 0.37282330897417126,
    },
  ],
  ae = re;
function fe(i) {
  return ae[i - 1];
}
const kt = class ft {
  constructor(t, e, n, r, a, s) {
    (this.type = t),
      (this.def = e),
      (this.rigidBody = n),
      (this.collider = r),
      (this.handle = a),
      (this.context = s);
  }
  get rotten() {
    return this.type >= W.RottenCherry && this.type <= W.RottenWatermelon;
  }
  get radius() {
    return this.def.hitbox_radius * this.def.size.x * ft.SCALE;
  }
  static create_body(t, e, n) {
    const r = n.RAPIER.RigidBodyDesc.dynamic()
        .setCcdEnabled(!0)
        .setTranslation(e.x, e.y)
        .setRotation(-0.785398163)
        .setLinearDamping(0.5),
      a = n.world.createRigidBody(r),
      s = n.RAPIER.ColliderDesc.ball(t.hitbox_radius * t.size.x * ft.SCALE)
        .setFriction(0.15)
        .setDensity(1.5)
        .setCollisionGroups(65537)
        .setRestitution(0.15),
      u = n.world.createCollider(s, a);
    return (
      u.setTranslation({ x: t.center.x * t.size.x, y: t.center.y * t.size.y }),
      u.setActiveEvents(n.RAPIER.ActiveEvents.COLLISION_EVENTS),
      { rigidBody: a, collider: u }
    );
  }
  combine() {
    return this.type === W.Watermelon
      ? { combine: !0, output: W.Blueberry, score: this.def.score }
      : this.type === W.Blueberry
      ? { combine: !1, score: 0 }
      : this.type > W.Watermelon
      ? { combine: !0, output: null, score: 0 }
      : { combine: !0, output: this.type + 1, score: this.def.score };
  }
  destroy() {
    this.context.world.removeRigidBody(this.rigidBody),
      this.context.fruits.delete(this.handle);
  }
};
kt.SCALE = 197e-6;
let he = kt;
const ge = "" + new URL("../assets/back.f3979f7a.png", import.meta.url).href,
  me = "" + new URL("../assets/front.d33286bc.png", import.meta.url).href;
export {
  q as B,
  b as C,
  W as F,
  mt as G,
  ht as P,
  E as R,
  Ft as S,
  oe as a,
  ge as b,
  ce as c,
  he as d,
  G as e,
  me as f,
  fe as g,
  Y as h,
  h as i,
  ae as j,
  tt as k,
  le as l,
  ue as m,
  Tt as n,
  de as o,
};
//# sourceMappingURL=front.38e13373.js.map
