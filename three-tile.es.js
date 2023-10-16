var So = Object.defineProperty;
var Eo = (i, e, t) => e in i ? So(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var X = (i, e, t) => (Eo(i, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const jr = "152", $t = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, rn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, yo = 0, ts = 1, To = 2, Pa = 1, bo = 2, Yt = 3, an = 0, mt = 1, Kt = 2, sn = 0, $n = 1, ns = 2, is = 3, rs = 4, Ao = 5, qn = 100, wo = 101, Ro = 102, ss = 103, as = 104, Co = 200, Lo = 201, Po = 202, Do = 203, Da = 204, Ua = 205, Uo = 206, Io = 207, No = 208, Fo = 209, Oo = 210, Bo = 0, zo = 1, Go = 2, Fr = 3, Ho = 4, Vo = 5, ko = 6, Wo = 7, Ia = 0, Xo = 1, qo = 2, Zt = 0, jo = 1, Yo = 2, $o = 3, Ko = 4, Zo = 5, Na = 300, Jn = 301, Qn = 302, Or = 303, Br = 304, $i = 306, zr = 1e3, Ut = 1001, Gr = 1002, dt = 1003, os = 1004, rr = 1005, Tt = 1006, Jo = 1007, fi = 1008, Tn = 1009, Qo = 1010, el = 1011, Fa = 1012, tl = 1013, xn = 1014, Mn = 1015, pi = 1016, nl = 1017, il = 1018, Kn = 1020, rl = 1021, It = 1023, sl = 1024, al = 1025, Sn = 1026, ei = 1027, ol = 1028, ll = 1029, cl = 1030, ul = 1031, hl = 1033, sr = 33776, ar = 33777, or = 33778, lr = 33779, ls = 35840, cs = 35841, us = 35842, hs = 35843, dl = 36196, ds = 37492, fs = 37496, ps = 37808, ms = 37809, gs = 37810, _s = 37811, vs = 37812, xs = 37813, Ms = 37814, Ss = 37815, Es = 37816, ys = 37817, Ts = 37818, bs = 37819, As = 37820, ws = 37821, cr = 36492, fl = 36283, Rs = 36284, Cs = 36285, Ls = 36286, Oa = 3e3, En = 3001, pl = 3200, ml = 3201, gl = 0, _l = 1, yn = "", we = "srgb", Ht = "srgb-linear", Ba = "display-p3", ur = 7680, vl = 519, Ps = 35044, Ds = "300 es", Hr = 1035;
class ln {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const at = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], hr = Math.PI / 180, Vr = 180 / Math.PI;
function mi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (at[i & 255] + at[i >> 8 & 255] + at[i >> 16 & 255] + at[i >> 24 & 255] + "-" + at[e & 255] + at[e >> 8 & 255] + "-" + at[e >> 16 & 15 | 64] + at[e >> 24 & 255] + "-" + at[t & 63 | 128] + at[t >> 8 & 255] + "-" + at[t >> 16 & 255] + at[t >> 24 & 255] + at[n & 255] + at[n >> 8 & 255] + at[n >> 16 & 255] + at[n >> 24 & 255]).toLowerCase();
}
function ft(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function xl(i, e) {
  return (i % e + e) % e;
}
function dr(i, e, t) {
  return (1 - t) * i + t * e;
}
function Us(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Ml(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Si(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function _t(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ae {
  constructor(e = 0, t = 0) {
    Ae.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ft(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ne {
  constructor() {
    Ne.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, r, s, o, a, c, l) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = a, u[3] = t, u[4] = s, u[5] = c, u[6] = n, u[7] = o, u[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], u = n[4], f = n[7], d = n[2], p = n[5], _ = n[8], x = r[0], m = r[3], h = r[6], T = r[1], M = r[4], w = r[7], y = r[2], R = r[5], D = r[8];
    return s[0] = o * x + a * T + c * y, s[3] = o * m + a * M + c * R, s[6] = o * h + a * w + c * D, s[1] = l * x + u * T + f * y, s[4] = l * m + u * M + f * R, s[7] = l * h + u * w + f * D, s[2] = d * x + p * T + _ * y, s[5] = d * m + p * M + _ * R, s[8] = d * h + p * w + _ * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8];
    return t * o * u - t * a * l - n * s * u + n * a * c + r * s * l - r * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], f = u * o - a * l, d = a * c - u * s, p = l * s - o * c, _ = t * f + n * d + r * p;
    if (_ === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / _;
    return e[0] = f * x, e[1] = (r * l - u * n) * x, e[2] = (a * n - r * o) * x, e[3] = d * x, e[4] = (u * t - r * c) * x, e[5] = (r * s - a * t) * x, e[6] = p * x, e[7] = (n * c - l * t) * x, e[8] = (o * t - n * s) * x, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -r * l,
      r * c,
      -r * (-l * o + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(fr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(fr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(fr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const fr = /* @__PURE__ */ new Ne();
function za(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535)
      return !0;
  return !1;
}
function ji(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
const Is = {};
function hi(i) {
  i in Is || (Is[i] = !0, console.warn(i));
}
function Zn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function pr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const Sl = /* @__PURE__ */ new Ne().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), El = /* @__PURE__ */ new Ne().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]);
function yl(i) {
  return i.convertSRGBToLinear().applyMatrix3(El);
}
function Tl(i) {
  return i.applyMatrix3(Sl).convertLinearToSRGB();
}
const bl = {
  [Ht]: (i) => i,
  [we]: (i) => i.convertSRGBToLinear(),
  [Ba]: yl
}, Al = {
  [Ht]: (i) => i,
  [we]: (i) => i.convertLinearToSRGB(),
  [Ba]: Tl
}, wt = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(i) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !i;
  },
  get workingColorSpace() {
    return Ht;
  },
  set workingColorSpace(i) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = bl[e], r = Al[t];
    if (n === void 0 || r === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this.workingColorSpace);
  }
};
let Cn;
class Ga {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Cn === void 0 && (Cn = ji("canvas")), Cn.width = e.width, Cn.height = e.height;
      const n = Cn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Cn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ji("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Zn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Zn(t[n] / 255) * 255) : t[n] = Zn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Ha {
  constructor(e = null) {
    this.isSource = !0, this.uuid = mi(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(mr(r[o].image)) : s.push(mr(r[o]));
      } else
        s = mr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function mr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ga.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let wl = 0;
class pt extends ln {
  constructor(e = pt.DEFAULT_IMAGE, t = pt.DEFAULT_MAPPING, n = Ut, r = Ut, s = Tt, o = fi, a = It, c = Tn, l = pt.DEFAULT_ANISOTROPY, u = yn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: wl++ }), this.uuid = mi(), this.name = "", this.source = new Ha(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new Ae(0, 0), this.repeat = new Ae(1, 1), this.center = new Ae(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ne(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === En ? we : yn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Na)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case zr:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ut:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Gr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case zr:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ut:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Gr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === we ? En : Oa;
  }
  set encoding(e) {
    hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === En ? we : yn;
  }
}
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = Na;
pt.DEFAULT_ANISOTROPY = 1;
class it {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    it.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements, l = c[0], u = c[4], f = c[8], d = c[1], p = c[5], _ = c[9], x = c[2], m = c[6], h = c[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(f - x) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(f + x) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(l + p + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (l + 1) / 2, w = (p + 1) / 2, y = (h + 1) / 2, R = (u + d) / 4, D = (f + x) / 4, k = (_ + m) / 4;
      return M > w && M > y ? M < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(M), r = R / n, s = D / n) : w > y ? w < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(w), n = R / r, s = k / r) : y < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(y), n = D / s, r = k / s), this.set(n, r, s, t), this;
    }
    let T = Math.sqrt((m - _) * (m - _) + (f - x) * (f - x) + (d - u) * (d - u));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - _) / T, this.y = (f - x) / T, this.z = (d - u) / T, this.w = Math.acos((l + p + h - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class bn extends ln {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new it(0, 0, e, t), this.scissorTest = !1, this.viewport = new it(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === En ? we : yn), this.texture = new pt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Tt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Ha(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Va extends pt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = dt, this.minFilter = dt, this.wrapR = Ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Rl extends pt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = dt, this.minFilter = dt, this.wrapR = Ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class An {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let c = n[r + 0], l = n[r + 1], u = n[r + 2], f = n[r + 3];
    const d = s[o + 0], p = s[o + 1], _ = s[o + 2], x = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = f;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = _, e[t + 3] = x;
      return;
    }
    if (f !== x || c !== d || l !== p || u !== _) {
      let m = 1 - a;
      const h = c * d + l * p + u * _ + f * x, T = h >= 0 ? 1 : -1, M = 1 - h * h;
      if (M > Number.EPSILON) {
        const y = Math.sqrt(M), R = Math.atan2(y, h * T);
        m = Math.sin(m * R) / y, a = Math.sin(a * R) / y;
      }
      const w = a * T;
      if (c = c * m + d * w, l = l * m + p * w, u = u * m + _ * w, f = f * m + x * w, m === 1 - a) {
        const y = 1 / Math.sqrt(c * c + l * l + u * u + f * f);
        c *= y, l *= y, u *= y, f *= y;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], f = s[o], d = s[o + 1], p = s[o + 2], _ = s[o + 3];
    return e[t] = a * _ + u * f + c * p - l * d, e[t + 1] = c * _ + u * d + l * f - a * p, e[t + 2] = l * _ + u * p + a * d - c * f, e[t + 3] = u * _ - a * f - c * d - l * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(r / 2), f = a(s / 2), d = c(n / 2), p = c(r / 2), _ = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * u * f + l * p * _, this._y = l * p * f - d * u * _, this._z = l * u * _ + d * p * f, this._w = l * u * f - d * p * _;
        break;
      case "YXZ":
        this._x = d * u * f + l * p * _, this._y = l * p * f - d * u * _, this._z = l * u * _ - d * p * f, this._w = l * u * f + d * p * _;
        break;
      case "ZXY":
        this._x = d * u * f - l * p * _, this._y = l * p * f + d * u * _, this._z = l * u * _ + d * p * f, this._w = l * u * f - d * p * _;
        break;
      case "ZYX":
        this._x = d * u * f - l * p * _, this._y = l * p * f + d * u * _, this._z = l * u * _ - d * p * f, this._w = l * u * f + d * p * _;
        break;
      case "YZX":
        this._x = d * u * f + l * p * _, this._y = l * p * f + d * u * _, this._z = l * u * _ - d * p * f, this._w = l * u * f - d * p * _;
        break;
      case "XZY":
        this._x = d * u * f - l * p * _, this._y = l * p * f - d * u * _, this._z = l * u * _ + d * p * f, this._w = l * u * f + d * p * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], u = t[6], f = t[10], d = n + a + f;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (u - c) * p, this._y = (s - l) * p, this._z = (o - r) * p;
    } else if (n > a && n > f) {
      const p = 2 * Math.sqrt(1 + n - a - f);
      this._w = (u - c) / p, this._x = 0.25 * p, this._y = (r + o) / p, this._z = (s + l) / p;
    } else if (a > f) {
      const p = 2 * Math.sqrt(1 + a - n - f);
      this._w = (s - l) / p, this._x = (r + o) / p, this._y = 0.25 * p, this._z = (c + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + f - n - a);
      this._w = (o - r) / p, this._x = (s + l) / p, this._y = (c + u) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ft(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + o * a + r * l - s * c, this._y = r * u + o * c + s * a - n * l, this._z = s * u + o * l + n * c - r * a, this._w = o * u - n * a - r * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, a), f = Math.sin((1 - t) * u) / l, d = Math.sin(t * u) / l;
    return this._w = o * f + this._w * d, this._x = n * f + this._x * d, this._y = r * f + this._y * d, this._z = s * f + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ns.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ns.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * r - a * n, u = c * n + a * t - s * r, f = c * r + s * n - o * t, d = -s * t - o * n - a * r;
    return this.x = l * c + d * -s + u * -a - f * -o, this.y = u * c + d * -o + f * -s - l * -a, this.z = f * c + d * -a + l * -o - u * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = r * c - s * a, this.y = s * o - n * c, this.z = n * a - r * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return gr.copy(this).projectOnVector(e), this.sub(gr);
  }
  reflect(e) {
    return this.sub(gr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ft(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const gr = /* @__PURE__ */ new P(), Ns = /* @__PURE__ */ new An();
class ii {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if (e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0)
      e.boundingBox === null && e.computeBoundingBox(), Ln.copy(e.boundingBox), Ln.applyMatrix4(e.matrixWorld), this.union(Ln);
    else {
      const r = e.geometry;
      if (r !== void 0)
        if (t && r.attributes !== void 0 && r.attributes.position !== void 0) {
          const s = r.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            kt.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(kt);
        } else
          r.boundingBox === null && r.computeBoundingBox(), Ln.copy(r.boundingBox), Ln.applyMatrix4(e.matrixWorld), this.union(Ln);
    }
    const n = e.children;
    for (let r = 0, s = n.length; r < s; r++)
      this.expandByObject(n[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, kt), kt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ai), Ei.subVectors(this.max, ai), Pn.subVectors(e.a, ai), Dn.subVectors(e.b, ai), Un.subVectors(e.c, ai), Qt.subVectors(Dn, Pn), en.subVectors(Un, Dn), fn.subVectors(Pn, Un);
    let t = [
      0,
      -Qt.z,
      Qt.y,
      0,
      -en.z,
      en.y,
      0,
      -fn.z,
      fn.y,
      Qt.z,
      0,
      -Qt.x,
      en.z,
      0,
      -en.x,
      fn.z,
      0,
      -fn.x,
      -Qt.y,
      Qt.x,
      0,
      -en.y,
      en.x,
      0,
      -fn.y,
      fn.x,
      0
    ];
    return !_r(t, Pn, Dn, Un, Ei) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !_r(t, Pn, Dn, Un, Ei)) ? !1 : (yi.crossVectors(Qt, en), t = [yi.x, yi.y, yi.z], _r(t, Pn, Dn, Un, Ei));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(kt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Vt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Vt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Vt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Vt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Vt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Vt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Vt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Vt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Vt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Vt = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], kt = /* @__PURE__ */ new P(), Ln = /* @__PURE__ */ new ii(), Pn = /* @__PURE__ */ new P(), Dn = /* @__PURE__ */ new P(), Un = /* @__PURE__ */ new P(), Qt = /* @__PURE__ */ new P(), en = /* @__PURE__ */ new P(), fn = /* @__PURE__ */ new P(), ai = /* @__PURE__ */ new P(), Ei = /* @__PURE__ */ new P(), yi = /* @__PURE__ */ new P(), pn = /* @__PURE__ */ new P();
function _r(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    pn.fromArray(i, s);
    const a = r.x * Math.abs(pn.x) + r.y * Math.abs(pn.y) + r.z * Math.abs(pn.z), c = e.dot(pn), l = t.dot(pn), u = n.dot(pn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a)
      return !1;
  }
  return !0;
}
const Cl = /* @__PURE__ */ new ii(), oi = /* @__PURE__ */ new P(), vr = /* @__PURE__ */ new P();
class Yr {
  constructor(e = new P(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Cl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    oi.subVectors(e, this.center);
    const t = oi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(oi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (vr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(oi.copy(e.center).add(vr)), this.expandByPoint(oi.copy(e.center).sub(vr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wt = /* @__PURE__ */ new P(), xr = /* @__PURE__ */ new P(), Ti = /* @__PURE__ */ new P(), tn = /* @__PURE__ */ new P(), Mr = /* @__PURE__ */ new P(), bi = /* @__PURE__ */ new P(), Sr = /* @__PURE__ */ new P();
class ka {
  constructor(e = new P(), t = new P(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Wt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Wt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Wt.copy(this.origin).addScaledVector(this.direction, t), Wt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    xr.copy(e).add(t).multiplyScalar(0.5), Ti.copy(t).sub(e).normalize(), tn.copy(this.origin).sub(xr);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Ti), a = tn.dot(this.direction), c = -tn.dot(Ti), l = tn.lengthSq(), u = Math.abs(1 - o * o);
    let f, d, p, _;
    if (u > 0)
      if (f = o * c - a, d = o * a - c, _ = s * u, f >= 0)
        if (d >= -_)
          if (d <= _) {
            const x = 1 / u;
            f *= x, d *= x, p = f * (f + o * d + 2 * a) + d * (o * f + d + 2 * c) + l;
          } else
            d = s, f = Math.max(0, -(o * d + a)), p = -f * f + d * (d + 2 * c) + l;
        else
          d = -s, f = Math.max(0, -(o * d + a)), p = -f * f + d * (d + 2 * c) + l;
      else
        d <= -_ ? (f = Math.max(0, -(-o * s + a)), d = f > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -f * f + d * (d + 2 * c) + l) : d <= _ ? (f = 0, d = Math.min(Math.max(-s, -c), s), p = d * (d + 2 * c) + l) : (f = Math.max(0, -(o * s + a)), d = f > 0 ? s : Math.min(Math.max(-s, -c), s), p = -f * f + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -s : s, f = Math.max(0, -(o * d + a)), p = -f * f + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(xr).addScaledVector(Ti, d), p;
  }
  intersectSphere(e, t) {
    Wt.subVectors(e.center, this.origin);
    const n = Wt.dot(this.direction), r = Wt.dot(Wt) - n * n, s = e.radius * e.radius;
    if (r > s)
      return null;
    const o = Math.sqrt(s - r), a = n - o, c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, r = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, r = (e.min.x - d.x) * l), u >= 0 ? (s = (e.min.y - d.y) * u, o = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, o = (e.min.y - d.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - d.z) * f, c = (e.max.z - d.z) * f) : (a = (e.max.z - d.z) * f, c = (e.min.z - d.z) * f), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Wt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Mr.subVectors(t, e), bi.subVectors(n, e), Sr.crossVectors(Mr, bi);
    let o = this.direction.dot(Sr), a;
    if (o > 0) {
      if (r)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    tn.subVectors(this.origin, e);
    const c = a * this.direction.dot(bi.crossVectors(tn, bi));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(Mr.cross(tn));
    if (l < 0 || c + l > o)
      return null;
    const u = -a * tn.dot(Sr);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Je {
  constructor() {
    Je.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, r, s, o, a, c, l, u, f, d, p, _, x, m) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = c, h[2] = l, h[6] = u, h[10] = f, h[14] = d, h[3] = p, h[7] = _, h[11] = x, h[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Je().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / In.setFromMatrixColumn(e, 0).length(), s = 1 / In.setFromMatrixColumn(e, 1).length(), o = 1 / In.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * u, p = o * f, _ = a * u, x = a * f;
      t[0] = c * u, t[4] = -c * f, t[8] = l, t[1] = p + _ * l, t[5] = d - x * l, t[9] = -a * c, t[2] = x - d * l, t[6] = _ + p * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * u, p = c * f, _ = l * u, x = l * f;
      t[0] = d + x * a, t[4] = _ * a - p, t[8] = o * l, t[1] = o * f, t[5] = o * u, t[9] = -a, t[2] = p * a - _, t[6] = x + d * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * u, p = c * f, _ = l * u, x = l * f;
      t[0] = d - x * a, t[4] = -o * f, t[8] = _ + p * a, t[1] = p + _ * a, t[5] = o * u, t[9] = x - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * u, p = o * f, _ = a * u, x = a * f;
      t[0] = c * u, t[4] = _ * l - p, t[8] = d * l + x, t[1] = c * f, t[5] = x * l + d, t[9] = p * l - _, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c, p = o * l, _ = a * c, x = a * l;
      t[0] = c * u, t[4] = x - d * f, t[8] = _ * f + p, t[1] = f, t[5] = o * u, t[9] = -a * u, t[2] = -l * u, t[6] = p * f + _, t[10] = d - x * f;
    } else if (e.order === "XZY") {
      const d = o * c, p = o * l, _ = a * c, x = a * l;
      t[0] = c * u, t[4] = -f, t[8] = l * u, t[1] = d * f + x, t[5] = o * u, t[9] = p * f - _, t[2] = _ * f - p, t[6] = a * u, t[10] = x * f + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ll, e, Pl);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return vt.subVectors(e, t), vt.lengthSq() === 0 && (vt.z = 1), vt.normalize(), nn.crossVectors(n, vt), nn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? vt.x += 1e-4 : vt.z += 1e-4, vt.normalize(), nn.crossVectors(n, vt)), nn.normalize(), Ai.crossVectors(vt, nn), r[0] = nn.x, r[4] = Ai.x, r[8] = vt.x, r[1] = nn.y, r[5] = Ai.y, r[9] = vt.y, r[2] = nn.z, r[6] = Ai.z, r[10] = vt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], u = n[1], f = n[5], d = n[9], p = n[13], _ = n[2], x = n[6], m = n[10], h = n[14], T = n[3], M = n[7], w = n[11], y = n[15], R = r[0], D = r[4], k = r[8], g = r[12], b = r[1], $ = r[5], J = r[9], I = r[13], B = r[2], V = r[6], ie = r[10], Y = r[14], q = r[3], Z = r[7], te = r[11], me = r[15];
    return s[0] = o * R + a * b + c * B + l * q, s[4] = o * D + a * $ + c * V + l * Z, s[8] = o * k + a * J + c * ie + l * te, s[12] = o * g + a * I + c * Y + l * me, s[1] = u * R + f * b + d * B + p * q, s[5] = u * D + f * $ + d * V + p * Z, s[9] = u * k + f * J + d * ie + p * te, s[13] = u * g + f * I + d * Y + p * me, s[2] = _ * R + x * b + m * B + h * q, s[6] = _ * D + x * $ + m * V + h * Z, s[10] = _ * k + x * J + m * ie + h * te, s[14] = _ * g + x * I + m * Y + h * me, s[3] = T * R + M * b + w * B + y * q, s[7] = T * D + M * $ + w * V + y * Z, s[11] = T * k + M * J + w * ie + y * te, s[15] = T * g + M * I + w * Y + y * me, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], u = e[2], f = e[6], d = e[10], p = e[14], _ = e[3], x = e[7], m = e[11], h = e[15];
    return _ * (+s * c * f - r * l * f - s * a * d + n * l * d + r * a * p - n * c * p) + x * (+t * c * p - t * l * d + s * o * d - r * o * p + r * l * u - s * c * u) + m * (+t * l * f - t * a * p - s * o * f + n * o * p + s * a * u - n * l * u) + h * (-r * a * u - t * c * f + t * a * d + r * o * f - n * o * d + n * c * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], f = e[9], d = e[10], p = e[11], _ = e[12], x = e[13], m = e[14], h = e[15], T = f * m * l - x * d * l + x * c * p - a * m * p - f * c * h + a * d * h, M = _ * d * l - u * m * l - _ * c * p + o * m * p + u * c * h - o * d * h, w = u * x * l - _ * f * l + _ * a * p - o * x * p - u * a * h + o * f * h, y = _ * f * c - u * x * c - _ * a * d + o * x * d + u * a * m - o * f * m, R = t * T + n * M + r * w + s * y;
    if (R === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / R;
    return e[0] = T * D, e[1] = (x * d * s - f * m * s - x * r * p + n * m * p + f * r * h - n * d * h) * D, e[2] = (a * m * s - x * c * s + x * r * l - n * m * l - a * r * h + n * c * h) * D, e[3] = (f * c * s - a * d * s - f * r * l + n * d * l + a * r * p - n * c * p) * D, e[4] = M * D, e[5] = (u * m * s - _ * d * s + _ * r * p - t * m * p - u * r * h + t * d * h) * D, e[6] = (_ * c * s - o * m * s - _ * r * l + t * m * l + o * r * h - t * c * h) * D, e[7] = (o * d * s - u * c * s + u * r * l - t * d * l - o * r * p + t * c * p) * D, e[8] = w * D, e[9] = (_ * f * s - u * x * s - _ * n * p + t * x * p + u * n * h - t * f * h) * D, e[10] = (o * x * s - _ * a * s + _ * n * l - t * x * l - o * n * h + t * a * h) * D, e[11] = (u * a * s - o * f * s - u * n * l + t * f * l + o * n * p - t * a * p) * D, e[12] = y * D, e[13] = (u * x * r - _ * f * r + _ * n * d - t * x * d - u * n * m + t * f * m) * D, e[14] = (_ * a * r - o * x * r - _ * n * c + t * x * c + o * n * m - t * a * m) * D, e[15] = (o * f * r - u * a * r + u * n * c - t * f * c - o * n * d + t * a * d) * D, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, u = s * a;
    return this.set(
      l * o + n,
      l * a - r * c,
      l * c + r * a,
      0,
      l * a + r * c,
      u * a + n,
      u * c - r * o,
      0,
      l * c - r * a,
      u * c + r * o,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, u = o + o, f = a + a, d = s * l, p = s * u, _ = s * f, x = o * u, m = o * f, h = a * f, T = c * l, M = c * u, w = c * f, y = n.x, R = n.y, D = n.z;
    return r[0] = (1 - (x + h)) * y, r[1] = (p + w) * y, r[2] = (_ - M) * y, r[3] = 0, r[4] = (p - w) * R, r[5] = (1 - (d + h)) * R, r[6] = (m + T) * R, r[7] = 0, r[8] = (_ + M) * D, r[9] = (m - T) * D, r[10] = (1 - (d + x)) * D, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = In.set(r[0], r[1], r[2]).length();
    const o = In.set(r[4], r[5], r[6]).length(), a = In.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Rt.copy(this);
    const l = 1 / s, u = 1 / o, f = 1 / a;
    return Rt.elements[0] *= l, Rt.elements[1] *= l, Rt.elements[2] *= l, Rt.elements[4] *= u, Rt.elements[5] *= u, Rt.elements[6] *= u, Rt.elements[8] *= f, Rt.elements[9] *= f, Rt.elements[10] *= f, t.setFromRotationMatrix(Rt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o) {
    const a = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - r), u = (t + e) / (t - e), f = (n + r) / (n - r), d = -(o + s) / (o - s), p = -2 * o * s / (o - s);
    return a[0] = c, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = l, a[9] = f, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - r), u = 1 / (o - s), f = (t + e) * c, d = (n + r) * l, p = (o + s) * u;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -f, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const In = /* @__PURE__ */ new P(), Rt = /* @__PURE__ */ new Je(), Ll = /* @__PURE__ */ new P(0, 0, 0), Pl = /* @__PURE__ */ new P(1, 1, 1), nn = /* @__PURE__ */ new P(), Ai = /* @__PURE__ */ new P(), vt = /* @__PURE__ */ new P(), Fs = /* @__PURE__ */ new Je(), Os = /* @__PURE__ */ new An();
class Ki {
  constructor(e = 0, t = 0, n = 0, r = Ki.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], u = r[9], f = r[2], d = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ft(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ft(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ft(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-f, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ft(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(ft(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-ft(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Fs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Fs, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Os.setFromEuler(this), this.setFromQuaternion(Os, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ki.DEFAULT_ORDER = "XYZ";
class $r {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Dl = 0;
const Bs = /* @__PURE__ */ new P(), Nn = /* @__PURE__ */ new An(), Xt = /* @__PURE__ */ new Je(), wi = /* @__PURE__ */ new P(), li = /* @__PURE__ */ new P(), Ul = /* @__PURE__ */ new P(), Il = /* @__PURE__ */ new An(), zs = /* @__PURE__ */ new P(1, 0, 0), Gs = /* @__PURE__ */ new P(0, 1, 0), Hs = /* @__PURE__ */ new P(0, 0, 1), Nl = { type: "added" }, Vs = { type: "removed" };
class lt extends ln {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Dl++ }), this.uuid = mi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = lt.DEFAULT_UP.clone();
    const e = new P(), t = new Ki(), n = new An(), r = new P(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new Je()
      },
      normalMatrix: {
        value: new Ne()
      }
    }), this.matrix = new Je(), this.matrixWorld = new Je(), this.matrixAutoUpdate = lt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new $r(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Nn.setFromAxisAngle(e, t), this.quaternion.multiply(Nn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Nn.setFromAxisAngle(e, t), this.quaternion.premultiply(Nn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(zs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Gs, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Hs, e);
  }
  translateOnAxis(e, t) {
    return Bs.copy(e).applyQuaternion(this.quaternion), this.position.add(Bs.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(zs, e);
  }
  translateY(e) {
    return this.translateOnAxis(Gs, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Hs, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Xt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? wi.copy(e) : wi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), li.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xt.lookAt(li, wi, this.up) : Xt.lookAt(wi, li, this.up), this.quaternion.setFromRotationMatrix(Xt), r && (Xt.extractRotation(r.matrixWorld), Nn.setFromRotationMatrix(Xt), this.quaternion.premultiply(Nn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Nl)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Vs)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Vs);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Xt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Xt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Xt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(li, e, Ul), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(li, Il, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const f = c[l];
            s(e.shapes, f);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        r.material = a;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), u = o(e.images), f = o(e.shapes), d = o(e.skeletons), p = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const u = a[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
lt.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
lt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ct = /* @__PURE__ */ new P(), qt = /* @__PURE__ */ new P(), Er = /* @__PURE__ */ new P(), jt = /* @__PURE__ */ new P(), Fn = /* @__PURE__ */ new P(), On = /* @__PURE__ */ new P(), ks = /* @__PURE__ */ new P(), yr = /* @__PURE__ */ new P(), Tr = /* @__PURE__ */ new P(), br = /* @__PURE__ */ new P();
let Ri = !1;
class Pt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ct.subVectors(e, t), r.cross(Ct);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Ct.subVectors(r, t), qt.subVectors(n, t), Er.subVectors(e, t);
    const o = Ct.dot(Ct), a = Ct.dot(qt), c = Ct.dot(Er), l = qt.dot(qt), u = qt.dot(Er), f = o * l - a * a;
    if (f === 0)
      return s.set(-2, -1, -1);
    const d = 1 / f, p = (l * c - a * u) * d, _ = (o * u - a * c) * d;
    return s.set(1 - p - _, _, p);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, jt), jt.x >= 0 && jt.y >= 0 && jt.x + jt.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, c) {
    return Ri === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ri = !0), this.getInterpolation(e, t, n, r, s, o, a, c);
  }
  static getInterpolation(e, t, n, r, s, o, a, c) {
    return this.getBarycoord(e, t, n, r, jt), c.setScalar(0), c.addScaledVector(s, jt.x), c.addScaledVector(o, jt.y), c.addScaledVector(a, jt.z), c;
  }
  static isFrontFacing(e, t, n, r) {
    return Ct.subVectors(n, t), qt.subVectors(e, t), Ct.cross(qt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ct.subVectors(this.c, this.b), qt.subVectors(this.a, this.b), Ct.cross(qt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Pt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Pt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Ri === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ri = !0), Pt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  getInterpolation(e, t, n, r, s) {
    return Pt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Pt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Pt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    Fn.subVectors(r, n), On.subVectors(s, n), yr.subVectors(e, n);
    const c = Fn.dot(yr), l = On.dot(yr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Tr.subVectors(e, r);
    const u = Fn.dot(Tr), f = On.dot(Tr);
    if (u >= 0 && f <= u)
      return t.copy(r);
    const d = c * f - u * l;
    if (d <= 0 && c >= 0 && u <= 0)
      return o = c / (c - u), t.copy(n).addScaledVector(Fn, o);
    br.subVectors(e, s);
    const p = Fn.dot(br), _ = On.dot(br);
    if (_ >= 0 && p <= _)
      return t.copy(s);
    const x = p * l - c * _;
    if (x <= 0 && l >= 0 && _ <= 0)
      return a = l / (l - _), t.copy(n).addScaledVector(On, a);
    const m = u * _ - p * f;
    if (m <= 0 && f - u >= 0 && p - _ >= 0)
      return ks.subVectors(s, r), a = (f - u) / (f - u + (p - _)), t.copy(r).addScaledVector(ks, a);
    const h = 1 / (m + x + d);
    return o = x * h, a = d * h, t.copy(n).addScaledVector(Fn, o).addScaledVector(On, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Fl = 0;
class Zi extends ln {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Fl++ }), this.uuid = mi(), this.name = "", this.type = "Material", this.blending = $n, this.side = an, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Da, this.blendDst = Ua, this.blendEquation = qn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Fr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = vl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ur, this.stencilZFail = ur, this.stencilZPass = ur, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== $n && (n.blending = this.blending), this.side !== an && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Wa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Lt = { h: 0, s: 0, l: 0 }, Ci = { h: 0, s: 0, l: 0 };
function Ar(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ge {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = we) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, wt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = wt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, wt.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = wt.workingColorSpace) {
    if (e = xl(e, 1), t = ft(t, 0, 1), n = ft(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Ar(o, s, e + 1 / 3), this.g = Ar(o, s, e), this.b = Ar(o, s, e - 1 / 3);
    }
    return wt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = we) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = we) {
    const n = Wa[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Zn(e.r), this.g = Zn(e.g), this.b = Zn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = pr(e.r), this.g = pr(e.g), this.b = pr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = we) {
    return wt.fromWorkingColorSpace(ot.copy(this), e), Math.round(ft(ot.r * 255, 0, 255)) * 65536 + Math.round(ft(ot.g * 255, 0, 255)) * 256 + Math.round(ft(ot.b * 255, 0, 255));
  }
  getHexString(e = we) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = wt.workingColorSpace) {
    wt.fromWorkingColorSpace(ot.copy(this), t);
    const n = ot.r, r = ot.g, s = ot.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let c, l;
    const u = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const f = o - a;
      switch (l = u <= 0.5 ? f / (o + a) : f / (2 - o - a), o) {
        case n:
          c = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / f + 2;
          break;
        case s:
          c = (n - r) / f + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = u, e;
  }
  getRGB(e, t = wt.workingColorSpace) {
    return wt.fromWorkingColorSpace(ot.copy(this), t), e.r = ot.r, e.g = ot.g, e.b = ot.b, e;
  }
  getStyle(e = we) {
    wt.fromWorkingColorSpace(ot.copy(this), e);
    const t = ot.r, n = ot.g, r = ot.b;
    return e !== we ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Lt), Lt.h += e, Lt.s += t, Lt.l += n, this.setHSL(Lt.h, Lt.s, Lt.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Lt), e.getHSL(Ci);
    const n = dr(Lt.h, Ci.h, t), r = dr(Lt.s, Ci.s, t), s = dr(Lt.l, Ci.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ot = /* @__PURE__ */ new Ge();
Ge.NAMES = Wa;
class gi extends Zi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ge(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ia, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ze = /* @__PURE__ */ new P(), Li = /* @__PURE__ */ new Ae();
class zt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ps, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Li.fromBufferAttribute(this, t), Li.applyMatrix3(e), this.setXY(t, Li.x, Li.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ze.fromBufferAttribute(this, t), Ze.applyMatrix3(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t), Ze.applyMatrix4(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t), Ze.applyNormalMatrix(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t), Ze.transformDirection(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = _t(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = _t(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = _t(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Si(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = _t(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = _t(t, this.array), n = _t(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = _t(t, this.array), n = _t(n, this.array), r = _t(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = _t(t, this.array), n = _t(n, this.array), r = _t(r, this.array), s = _t(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Ps && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Xa extends zt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class qa extends zt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Gt extends zt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ol = 0;
const yt = /* @__PURE__ */ new Je(), wr = /* @__PURE__ */ new lt(), Bn = /* @__PURE__ */ new P(), xt = /* @__PURE__ */ new ii(), ci = /* @__PURE__ */ new ii(), nt = /* @__PURE__ */ new P();
class cn extends ln {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ol++ }), this.uuid = mi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (za(e) ? qa : Xa)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ne().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return yt.makeRotationFromQuaternion(e), this.applyMatrix4(yt), this;
  }
  rotateX(e) {
    return yt.makeRotationX(e), this.applyMatrix4(yt), this;
  }
  rotateY(e) {
    return yt.makeRotationY(e), this.applyMatrix4(yt), this;
  }
  rotateZ(e) {
    return yt.makeRotationZ(e), this.applyMatrix4(yt), this;
  }
  translate(e, t, n) {
    return yt.makeTranslation(e, t, n), this.applyMatrix4(yt), this;
  }
  scale(e, t, n) {
    return yt.makeScale(e, t, n), this.applyMatrix4(yt), this;
  }
  lookAt(e) {
    return wr.lookAt(e), wr.updateMatrix(), this.applyMatrix4(wr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Bn).negate(), this.translate(Bn.x, Bn.y, Bn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ii());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          xt.setFromBufferAttribute(s), this.morphTargetsRelative ? (nt.addVectors(this.boundingBox.min, xt.min), this.boundingBox.expandByPoint(nt), nt.addVectors(this.boundingBox.max, xt.max), this.boundingBox.expandByPoint(nt)) : (this.boundingBox.expandByPoint(xt.min), this.boundingBox.expandByPoint(xt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Yr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (xt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ci.setFromBufferAttribute(a), this.morphTargetsRelative ? (nt.addVectors(xt.min, ci.min), xt.expandByPoint(nt), nt.addVectors(xt.max, ci.max), xt.expandByPoint(nt)) : (xt.expandByPoint(ci.min), xt.expandByPoint(ci.max));
        }
      xt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        nt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(nt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, u = a.count; l < u; l++)
            nt.fromBufferAttribute(a, l), c && (Bn.fromBufferAttribute(e, l), nt.add(Bn)), r = Math.max(r, n.distanceToSquared(nt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new zt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], u = [];
    for (let b = 0; b < a; b++)
      l[b] = new P(), u[b] = new P();
    const f = new P(), d = new P(), p = new P(), _ = new Ae(), x = new Ae(), m = new Ae(), h = new P(), T = new P();
    function M(b, $, J) {
      f.fromArray(r, b * 3), d.fromArray(r, $ * 3), p.fromArray(r, J * 3), _.fromArray(o, b * 2), x.fromArray(o, $ * 2), m.fromArray(o, J * 2), d.sub(f), p.sub(f), x.sub(_), m.sub(_);
      const I = 1 / (x.x * m.y - m.x * x.y);
      isFinite(I) && (h.copy(d).multiplyScalar(m.y).addScaledVector(p, -x.y).multiplyScalar(I), T.copy(p).multiplyScalar(x.x).addScaledVector(d, -m.x).multiplyScalar(I), l[b].add(h), l[$].add(h), l[J].add(h), u[b].add(T), u[$].add(T), u[J].add(T));
    }
    let w = this.groups;
    w.length === 0 && (w = [{
      start: 0,
      count: n.length
    }]);
    for (let b = 0, $ = w.length; b < $; ++b) {
      const J = w[b], I = J.start, B = J.count;
      for (let V = I, ie = I + B; V < ie; V += 3)
        M(
          n[V + 0],
          n[V + 1],
          n[V + 2]
        );
    }
    const y = new P(), R = new P(), D = new P(), k = new P();
    function g(b) {
      D.fromArray(s, b * 3), k.copy(D);
      const $ = l[b];
      y.copy($), y.sub(D.multiplyScalar(D.dot($))).normalize(), R.crossVectors(k, $);
      const I = R.dot(u[b]) < 0 ? -1 : 1;
      c[b * 4] = y.x, c[b * 4 + 1] = y.y, c[b * 4 + 2] = y.z, c[b * 4 + 3] = I;
    }
    for (let b = 0, $ = w.length; b < $; ++b) {
      const J = w[b], I = J.start, B = J.count;
      for (let V = I, ie = I + B; V < ie; V += 3)
        g(n[V + 0]), g(n[V + 1]), g(n[V + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new zt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const r = new P(), s = new P(), o = new P(), a = new P(), c = new P(), l = new P(), u = new P(), f = new P();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const _ = e.getX(d + 0), x = e.getX(d + 1), m = e.getX(d + 2);
          r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, x), o.fromBufferAttribute(t, m), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), a.fromBufferAttribute(n, _), c.fromBufferAttribute(n, x), l.fromBufferAttribute(n, m), a.add(u), c.add(u), l.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(x, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      nt.fromBufferAttribute(e, t), nt.normalize(), e.setXYZ(t, nt.x, nt.y, nt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, u = a.itemSize, f = a.normalized, d = new l.constructor(c.length * u);
      let p = 0, _ = 0;
      for (let x = 0, m = c.length; x < m; x++) {
        a.isInterleavedBufferAttribute ? p = c[x] * a.data.stride + a.offset : p = c[x] * u;
        for (let h = 0; h < u; h++)
          d[_++] = l[p++];
      }
      return new zt(d, u, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new cn(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const c = r[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let u = 0, f = l.length; u < f; u++) {
        const d = l[u], p = e(d, n);
        c.push(p);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let f = 0, d = l.length; f < d; f++) {
        const p = l[f];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && (r[c] = u, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = [], f = s[l];
      for (let d = 0, p = f.length; d < p; d++)
        u.push(f[d].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
      const f = o[l];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ws = /* @__PURE__ */ new Je(), Ft = /* @__PURE__ */ new ka(), Pi = /* @__PURE__ */ new Yr(), Xs = /* @__PURE__ */ new P(), zn = /* @__PURE__ */ new P(), Gn = /* @__PURE__ */ new P(), Hn = /* @__PURE__ */ new P(), Rr = /* @__PURE__ */ new P(), Di = /* @__PURE__ */ new P(), Ui = /* @__PURE__ */ new Ae(), Ii = /* @__PURE__ */ new Ae(), Ni = /* @__PURE__ */ new Ae(), qs = /* @__PURE__ */ new P(), js = /* @__PURE__ */ new P(), Ys = /* @__PURE__ */ new P(), Fi = /* @__PURE__ */ new P(), Oi = /* @__PURE__ */ new P();
class Ot extends lt {
  constructor(e = new cn(), t = new gi()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Di.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = a[c], f = s[c];
        u !== 0 && (Rr.fromBufferAttribute(f, e), o ? Di.addScaledVector(Rr, u) : Di.addScaledVector(Rr.sub(t), u));
      }
      t.add(Di);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Pi.copy(n.boundingSphere), Pi.applyMatrix4(s), Ft.copy(e.ray).recast(e.near), !(Pi.containsPoint(Ft.origin) === !1 && (Ft.intersectSphere(Pi, Xs) === null || Ft.origin.distanceToSquared(Xs) > (e.far - e.near) ** 2)) && (Ws.copy(s).invert(), Ft.copy(e.ray).applyMatrix4(Ws), !(n.boundingBox !== null && Ft.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t)));
  }
  _computeIntersections(e, t) {
    let n;
    const r = this.geometry, s = this.material, o = r.index, a = r.attributes.position, c = r.attributes.uv, l = r.attributes.uv1, u = r.attributes.normal, f = r.groups, d = r.drawRange;
    if (o !== null)
      if (Array.isArray(s))
        for (let p = 0, _ = f.length; p < _; p++) {
          const x = f[p], m = s[x.materialIndex], h = Math.max(x.start, d.start), T = Math.min(o.count, Math.min(x.start + x.count, d.start + d.count));
          for (let M = h, w = T; M < w; M += 3) {
            const y = o.getX(M), R = o.getX(M + 1), D = o.getX(M + 2);
            n = Bi(this, m, e, Ft, c, l, u, y, R, D), n && (n.faceIndex = Math.floor(M / 3), n.face.materialIndex = x.materialIndex, t.push(n));
          }
        }
      else {
        const p = Math.max(0, d.start), _ = Math.min(o.count, d.start + d.count);
        for (let x = p, m = _; x < m; x += 3) {
          const h = o.getX(x), T = o.getX(x + 1), M = o.getX(x + 2);
          n = Bi(this, s, e, Ft, c, l, u, h, T, M), n && (n.faceIndex = Math.floor(x / 3), t.push(n));
        }
      }
    else if (a !== void 0)
      if (Array.isArray(s))
        for (let p = 0, _ = f.length; p < _; p++) {
          const x = f[p], m = s[x.materialIndex], h = Math.max(x.start, d.start), T = Math.min(a.count, Math.min(x.start + x.count, d.start + d.count));
          for (let M = h, w = T; M < w; M += 3) {
            const y = M, R = M + 1, D = M + 2;
            n = Bi(this, m, e, Ft, c, l, u, y, R, D), n && (n.faceIndex = Math.floor(M / 3), n.face.materialIndex = x.materialIndex, t.push(n));
          }
        }
      else {
        const p = Math.max(0, d.start), _ = Math.min(a.count, d.start + d.count);
        for (let x = p, m = _; x < m; x += 3) {
          const h = x, T = x + 1, M = x + 2;
          n = Bi(this, s, e, Ft, c, l, u, h, T, M), n && (n.faceIndex = Math.floor(x / 3), t.push(n));
        }
      }
  }
}
function Bl(i, e, t, n, r, s, o, a) {
  let c;
  if (e.side === mt ? c = n.intersectTriangle(o, s, r, !0, a) : c = n.intersectTriangle(r, s, o, e.side === an, a), c === null)
    return null;
  Oi.copy(a), Oi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Oi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Oi.clone(),
    object: i
  };
}
function Bi(i, e, t, n, r, s, o, a, c, l) {
  i.getVertexPosition(a, zn), i.getVertexPosition(c, Gn), i.getVertexPosition(l, Hn);
  const u = Bl(i, e, t, n, zn, Gn, Hn, Fi);
  if (u) {
    r && (Ui.fromBufferAttribute(r, a), Ii.fromBufferAttribute(r, c), Ni.fromBufferAttribute(r, l), u.uv = Pt.getInterpolation(Fi, zn, Gn, Hn, Ui, Ii, Ni, new Ae())), s && (Ui.fromBufferAttribute(s, a), Ii.fromBufferAttribute(s, c), Ni.fromBufferAttribute(s, l), u.uv1 = Pt.getInterpolation(Fi, zn, Gn, Hn, Ui, Ii, Ni, new Ae()), u.uv2 = u.uv1), o && (qs.fromBufferAttribute(o, a), js.fromBufferAttribute(o, c), Ys.fromBufferAttribute(o, l), u.normal = Pt.getInterpolation(Fi, zn, Gn, Hn, qs, js, Ys, new P()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = {
      a,
      b: c,
      c: l,
      normal: new P(),
      materialIndex: 0
    };
    Pt.getNormal(zn, Gn, Hn, f.normal), u.face = f;
  }
  return u;
}
class _i extends cn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], u = [], f = [];
    let d = 0, p = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, r, o, 2), _("x", "z", "y", 1, -1, e, n, -t, r, o, 3), _("x", "y", "z", 1, -1, e, t, n, r, s, 4), _("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new Gt(l, 3)), this.setAttribute("normal", new Gt(u, 3)), this.setAttribute("uv", new Gt(f, 2));
    function _(x, m, h, T, M, w, y, R, D, k, g) {
      const b = w / D, $ = y / k, J = w / 2, I = y / 2, B = R / 2, V = D + 1, ie = k + 1;
      let Y = 0, q = 0;
      const Z = new P();
      for (let te = 0; te < ie; te++) {
        const me = te * $ - I;
        for (let ue = 0; ue < V; ue++) {
          const z = ue * b - J;
          Z[x] = z * T, Z[m] = me * M, Z[h] = B, l.push(Z.x, Z.y, Z.z), Z[x] = 0, Z[m] = 0, Z[h] = R > 0 ? 1 : -1, u.push(Z.x, Z.y, Z.z), f.push(ue / D), f.push(1 - te / k), Y += 1;
        }
      }
      for (let te = 0; te < k; te++)
        for (let me = 0; me < D; me++) {
          const ue = d + me + V * te, z = d + me + V * (te + 1), K = d + (me + 1) + V * (te + 1), se = d + (me + 1) + V * te;
          c.push(ue, z, se), c.push(z, K, se), q += 6;
        }
      a.addGroup(p, q, g), p += q, d += Y;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new _i(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ti(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function ht(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ti(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function zl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function ja(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : Ht;
}
const Ya = { clone: ti, merge: ht };
var Gl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Hl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class on extends Zi {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Gl, this.fragmentShader = Hl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ti(e.uniforms), this.uniformsGroups = zl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[r] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[r] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class $a extends lt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Je(), this.projectionMatrix = new Je(), this.projectionMatrixInverse = new Je();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class bt extends $a {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Vr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(hr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Vr * 2 * Math.atan(
      Math.tan(hr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(hr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * r / c, t -= o.offsetY * n / l, r *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Vn = -90, kn = 1;
class Vl extends lt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const r = new bt(Vn, kn, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(1, 0, 0), this.add(r);
    const s = new bt(Vn, kn, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const o = new bt(Vn, kn, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const a = new bt(Vn, kn, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new bt(Vn, kn, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new bt(Vn, kn, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [r, s, o, a, c, l] = this.children, u = e.getRenderTarget(), f = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = Zt, e.xr.enabled = !1;
    const p = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, r), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = p, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(u), e.toneMapping = f, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Ka extends pt {
  constructor(e, t, n, r, s, o, a, c, l, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Jn, super(e, t, n, r, s, o, a, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class kl extends bn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === En ? we : yn), this.texture = new Ka(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Tt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new _i(5, 5, 5), s = new on({
      name: "CubemapFromEquirect",
      uniforms: ti(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: mt,
      blending: sn
    });
    s.uniforms.tEquirect.value = t;
    const o = new Ot(r, s), a = t.minFilter;
    return t.minFilter === fi && (t.minFilter = Tt), new Vl(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Cr = /* @__PURE__ */ new P(), Wl = /* @__PURE__ */ new P(), Xl = /* @__PURE__ */ new Ne();
class gn {
  constructor(e = new P(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Cr.subVectors(n, t).cross(Wl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Cr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Xl.getNormalMatrix(e), r = this.coplanarPoint(Cr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mn = /* @__PURE__ */ new Yr(), zi = /* @__PURE__ */ new P();
class Ji {
  constructor(e = new gn(), t = new gn(), n = new gn(), r = new gn(), s = new gn(), o = new gn()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, r = n[0], s = n[1], o = n[2], a = n[3], c = n[4], l = n[5], u = n[6], f = n[7], d = n[8], p = n[9], _ = n[10], x = n[11], m = n[12], h = n[13], T = n[14], M = n[15];
    return t[0].setComponents(a - r, f - c, x - d, M - m).normalize(), t[1].setComponents(a + r, f + c, x + d, M + m).normalize(), t[2].setComponents(a + s, f + l, x + p, M + h).normalize(), t[3].setComponents(a - s, f - l, x - p, M - h).normalize(), t[4].setComponents(a - o, f - u, x - _, M - T).normalize(), t[5].setComponents(a + o, f + u, x + _, M + T).normalize(), this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(mn);
  }
  intersectsSprite(e) {
    return mn.center.set(0, 0, 0), mn.radius = 0.7071067811865476, mn.applyMatrix4(e.matrixWorld), this.intersectsSphere(mn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (zi.x = r.normal.x > 0 ? e.max.x : e.min.x, zi.y = r.normal.y > 0 ? e.max.y : e.min.y, zi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(zi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Za() {
  let i = null, e = !1, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function ql(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(l, u) {
    const f = l.array, d = l.usage, p = i.createBuffer();
    i.bindBuffer(u, p), i.bufferData(u, f, d), l.onUploadCallback();
    let _;
    if (f instanceof Float32Array)
      _ = i.FLOAT;
    else if (f instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          _ = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = i.UNSIGNED_SHORT;
    else if (f instanceof Int16Array)
      _ = i.SHORT;
    else if (f instanceof Uint32Array)
      _ = i.UNSIGNED_INT;
    else if (f instanceof Int32Array)
      _ = i.INT;
    else if (f instanceof Int8Array)
      _ = i.BYTE;
    else if (f instanceof Uint8Array)
      _ = i.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray)
      _ = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f);
    return {
      buffer: p,
      type: _,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, u, f) {
    const d = u.array, p = u.updateRange;
    i.bindBuffer(f, l), p.count === -1 ? i.bufferSubData(f, 0, d) : (t ? i.bufferSubData(
      f,
      p.offset * d.BYTES_PER_ELEMENT,
      d,
      p.offset,
      p.count
    ) : i.bufferSubData(
      f,
      p.offset * d.BYTES_PER_ELEMENT,
      d.subarray(p.offset, p.offset + p.count)
    ), p.count = -1), u.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (i.deleteBuffer(u.buffer), n.delete(l));
  }
  function c(l, u) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const f = n.get(l);
    f === void 0 ? n.set(l, r(l, u)) : f.version < l.version && (s(f.buffer, l, u), f.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class wn extends cn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(r), l = a + 1, u = c + 1, f = e / a, d = t / c, p = [], _ = [], x = [], m = [];
    for (let h = 0; h < u; h++) {
      const T = h * d - o;
      for (let M = 0; M < l; M++) {
        const w = M * f - s;
        _.push(w, -T, 0), x.push(0, 0, 1), m.push(M / a), m.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let T = 0; T < a; T++) {
        const M = T + l * h, w = T + l * (h + 1), y = T + 1 + l * (h + 1), R = T + 1 + l * h;
        p.push(M, w, R), p.push(w, y, R);
      }
    this.setIndex(p), this.setAttribute("position", new Gt(_, 3)), this.setAttribute("normal", new Gt(x, 3)), this.setAttribute("uv", new Gt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new wn(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var jl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Yl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, $l = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Kl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Zl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Jl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ql = "vec3 transformed = vec3( position );", ec = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, tc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, nc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, ic = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, rc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, sc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, ac = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, oc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, lc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, cc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, uc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, hc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, dc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, fc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, pc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, mc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, gc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, _c = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, vc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, xc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Mc = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Sc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Ec = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, yc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Tc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, bc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Ac = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, wc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Rc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Cc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Lc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Pc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Dc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Uc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Ic = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Nc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Fc = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, Oc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Bc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, zc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Gc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Hc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`, Vc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, kc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Wc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Xc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, qc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, jc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Yc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, $c = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Kc = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, Zc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Jc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Qc = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, eu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, tu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, nu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, iu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, ru = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, su = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, au = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`, ou = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, lu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, cu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, uu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, hu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, du = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, fu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, pu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, mu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, gu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, _u = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, vu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, xu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Mu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Su = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Eu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, yu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Tu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, bu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Au = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, wu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Ru = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Cu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Lu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Pu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Du = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Uu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Iu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Nu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Fu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, Ou = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, Bu = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, zu = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Gu = `#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Hu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Vu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ku = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Wu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Xu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, qu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ju = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Yu = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, $u = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Ku = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Zu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Ju = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Qu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, eh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, th = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, nh = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, ih = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, rh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, sh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ah = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, oh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, ch = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, uh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, hh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, fh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ph = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, _h = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, vh = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, xh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Mh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Sh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Le = {
  alphamap_fragment: jl,
  alphamap_pars_fragment: Yl,
  alphatest_fragment: $l,
  alphatest_pars_fragment: Kl,
  aomap_fragment: Zl,
  aomap_pars_fragment: Jl,
  begin_vertex: Ql,
  beginnormal_vertex: ec,
  bsdfs: tc,
  iridescence_fragment: nc,
  bumpmap_pars_fragment: ic,
  clipping_planes_fragment: rc,
  clipping_planes_pars_fragment: sc,
  clipping_planes_pars_vertex: ac,
  clipping_planes_vertex: oc,
  color_fragment: lc,
  color_pars_fragment: cc,
  color_pars_vertex: uc,
  color_vertex: hc,
  common: dc,
  cube_uv_reflection_fragment: fc,
  defaultnormal_vertex: pc,
  displacementmap_pars_vertex: mc,
  displacementmap_vertex: gc,
  emissivemap_fragment: _c,
  emissivemap_pars_fragment: vc,
  encodings_fragment: xc,
  encodings_pars_fragment: Mc,
  envmap_fragment: Sc,
  envmap_common_pars_fragment: Ec,
  envmap_pars_fragment: yc,
  envmap_pars_vertex: Tc,
  envmap_physical_pars_fragment: Fc,
  envmap_vertex: bc,
  fog_vertex: Ac,
  fog_pars_vertex: wc,
  fog_fragment: Rc,
  fog_pars_fragment: Cc,
  gradientmap_pars_fragment: Lc,
  lightmap_fragment: Pc,
  lightmap_pars_fragment: Dc,
  lights_lambert_fragment: Uc,
  lights_lambert_pars_fragment: Ic,
  lights_pars_begin: Nc,
  lights_toon_fragment: Oc,
  lights_toon_pars_fragment: Bc,
  lights_phong_fragment: zc,
  lights_phong_pars_fragment: Gc,
  lights_physical_fragment: Hc,
  lights_physical_pars_fragment: Vc,
  lights_fragment_begin: kc,
  lights_fragment_maps: Wc,
  lights_fragment_end: Xc,
  logdepthbuf_fragment: qc,
  logdepthbuf_pars_fragment: jc,
  logdepthbuf_pars_vertex: Yc,
  logdepthbuf_vertex: $c,
  map_fragment: Kc,
  map_pars_fragment: Zc,
  map_particle_fragment: Jc,
  map_particle_pars_fragment: Qc,
  metalnessmap_fragment: eu,
  metalnessmap_pars_fragment: tu,
  morphcolor_vertex: nu,
  morphnormal_vertex: iu,
  morphtarget_pars_vertex: ru,
  morphtarget_vertex: su,
  normal_fragment_begin: au,
  normal_fragment_maps: ou,
  normal_pars_fragment: lu,
  normal_pars_vertex: cu,
  normal_vertex: uu,
  normalmap_pars_fragment: hu,
  clearcoat_normal_fragment_begin: du,
  clearcoat_normal_fragment_maps: fu,
  clearcoat_pars_fragment: pu,
  iridescence_pars_fragment: mu,
  output_fragment: gu,
  packing: _u,
  premultiplied_alpha_fragment: vu,
  project_vertex: xu,
  dithering_fragment: Mu,
  dithering_pars_fragment: Su,
  roughnessmap_fragment: Eu,
  roughnessmap_pars_fragment: yu,
  shadowmap_pars_fragment: Tu,
  shadowmap_pars_vertex: bu,
  shadowmap_vertex: Au,
  shadowmask_pars_fragment: wu,
  skinbase_vertex: Ru,
  skinning_pars_vertex: Cu,
  skinning_vertex: Lu,
  skinnormal_vertex: Pu,
  specularmap_fragment: Du,
  specularmap_pars_fragment: Uu,
  tonemapping_fragment: Iu,
  tonemapping_pars_fragment: Nu,
  transmission_fragment: Fu,
  transmission_pars_fragment: Ou,
  uv_pars_fragment: Bu,
  uv_pars_vertex: zu,
  uv_vertex: Gu,
  worldpos_vertex: Hu,
  background_vert: Vu,
  background_frag: ku,
  backgroundCube_vert: Wu,
  backgroundCube_frag: Xu,
  cube_vert: qu,
  cube_frag: ju,
  depth_vert: Yu,
  depth_frag: $u,
  distanceRGBA_vert: Ku,
  distanceRGBA_frag: Zu,
  equirect_vert: Ju,
  equirect_frag: Qu,
  linedashed_vert: eh,
  linedashed_frag: th,
  meshbasic_vert: nh,
  meshbasic_frag: ih,
  meshlambert_vert: rh,
  meshlambert_frag: sh,
  meshmatcap_vert: ah,
  meshmatcap_frag: oh,
  meshnormal_vert: lh,
  meshnormal_frag: ch,
  meshphong_vert: uh,
  meshphong_frag: hh,
  meshphysical_vert: dh,
  meshphysical_frag: fh,
  meshtoon_vert: ph,
  meshtoon_frag: mh,
  points_vert: gh,
  points_frag: _h,
  shadow_vert: vh,
  shadow_frag: xh,
  sprite_vert: Mh,
  sprite_frag: Sh
}, ae = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ne() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ne() },
    normalScale: { value: /* @__PURE__ */ new Ae(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ne() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ge(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ne() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ae(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  }
}, Dt = {
  basic: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.fog
    ]),
    vertexShader: Le.meshbasic_vert,
    fragmentShader: Le.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) }
      }
    ]),
    vertexShader: Le.meshlambert_vert,
    fragmentShader: Le.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) },
        specular: { value: /* @__PURE__ */ new Ge(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Le.meshphong_vert,
    fragmentShader: Le.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.roughnessmap,
      ae.metalnessmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Le.meshphysical_vert,
    fragmentShader: Le.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.gradientmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) }
      }
    ]),
    vertexShader: Le.meshtoon_vert,
    fragmentShader: Le.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Le.meshmatcap_vert,
    fragmentShader: Le.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ht([
      ae.points,
      ae.fog
    ]),
    vertexShader: Le.points_vert,
    fragmentShader: Le.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Le.linedashed_vert,
    fragmentShader: Le.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.displacementmap
    ]),
    vertexShader: Le.depth_vert,
    fragmentShader: Le.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Le.meshnormal_vert,
    fragmentShader: Le.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ht([
      ae.sprite,
      ae.fog
    ]),
    vertexShader: Le.sprite_vert,
    fragmentShader: Le.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ne() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Le.background_vert,
    fragmentShader: Le.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Le.backgroundCube_vert,
    fragmentShader: Le.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Le.cube_vert,
    fragmentShader: Le.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Le.equirect_vert,
    fragmentShader: Le.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ht([
      ae.common,
      ae.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Le.distanceRGBA_vert,
    fragmentShader: Le.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ht([
      ae.lights,
      ae.fog,
      {
        color: { value: /* @__PURE__ */ new Ge(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Le.shadow_vert,
    fragmentShader: Le.shadow_frag
  }
};
Dt.physical = {
  uniforms: /* @__PURE__ */ ht([
    Dt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ae(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ne() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ge(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ae() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ge(0) },
      specularColor: { value: /* @__PURE__ */ new Ge(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ne() }
    }
  ]),
  vertexShader: Le.meshphysical_vert,
  fragmentShader: Le.meshphysical_frag
};
const Gi = { r: 0, b: 0, g: 0 };
function Eh(i, e, t, n, r, s, o) {
  const a = new Ge(0);
  let c = s === !0 ? 0 : 1, l, u, f = null, d = 0, p = null;
  function _(m, h) {
    let T = !1, M = h.isScene === !0 ? h.background : null;
    switch (M && M.isTexture && (M = (h.backgroundBlurriness > 0 ? t : e).get(M)), M === null ? x(a, c) : M && M.isColor && (x(M, 1), T = !0), i.xr.getEnvironmentBlendMode()) {
      case "opaque":
        T = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), T = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), T = !0;
        break;
    }
    (i.autoClear || T) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), M && (M.isCubeTexture || M.mapping === $i) ? (u === void 0 && (u = new Ot(
      new _i(1, 1, 1),
      new on({
        name: "BackgroundCubeMaterial",
        uniforms: ti(Dt.backgroundCube.uniforms),
        vertexShader: Dt.backgroundCube.vertexShader,
        fragmentShader: Dt.backgroundCube.fragmentShader,
        side: mt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(R, D, k) {
      this.matrixWorld.copyPosition(k.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), u.material.uniforms.envMap.value = M, u.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = h.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, u.material.toneMapped = M.colorSpace !== we, (f !== M || d !== M.version || p !== i.toneMapping) && (u.material.needsUpdate = !0, f = M, d = M.version, p = i.toneMapping), u.layers.enableAll(), m.unshift(u, u.geometry, u.material, 0, 0, null)) : M && M.isTexture && (l === void 0 && (l = new Ot(
      new wn(2, 2),
      new on({
        name: "BackgroundMaterial",
        uniforms: ti(Dt.background.uniforms),
        vertexShader: Dt.background.vertexShader,
        fragmentShader: Dt.background.fragmentShader,
        side: an,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = M, l.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, l.material.toneMapped = M.colorSpace !== we, M.matrixAutoUpdate === !0 && M.updateMatrix(), l.material.uniforms.uvTransform.value.copy(M.matrix), (f !== M || d !== M.version || p !== i.toneMapping) && (l.material.needsUpdate = !0, f = M, d = M.version, p = i.toneMapping), l.layers.enableAll(), m.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function x(m, h) {
    m.getRGB(Gi, ja(i)), n.buffers.color.setClear(Gi.r, Gi.g, Gi.b, h, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(m, h = 1) {
      a.set(m), c = h, x(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(m) {
      c = m, x(a, c);
    },
    render: _
  };
}
function yh(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = m(null);
  let l = c, u = !1;
  function f(B, V, ie, Y, q) {
    let Z = !1;
    if (o) {
      const te = x(Y, ie, V);
      l !== te && (l = te, p(l.object)), Z = h(B, Y, ie, q), Z && T(B, Y, ie, q);
    } else {
      const te = V.wireframe === !0;
      (l.geometry !== Y.id || l.program !== ie.id || l.wireframe !== te) && (l.geometry = Y.id, l.program = ie.id, l.wireframe = te, Z = !0);
    }
    q !== null && t.update(q, i.ELEMENT_ARRAY_BUFFER), (Z || u) && (u = !1, k(B, V, ie, Y), q !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(q).buffer));
  }
  function d() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function p(B) {
    return n.isWebGL2 ? i.bindVertexArray(B) : s.bindVertexArrayOES(B);
  }
  function _(B) {
    return n.isWebGL2 ? i.deleteVertexArray(B) : s.deleteVertexArrayOES(B);
  }
  function x(B, V, ie) {
    const Y = ie.wireframe === !0;
    let q = a[B.id];
    q === void 0 && (q = {}, a[B.id] = q);
    let Z = q[V.id];
    Z === void 0 && (Z = {}, q[V.id] = Z);
    let te = Z[Y];
    return te === void 0 && (te = m(d()), Z[Y] = te), te;
  }
  function m(B) {
    const V = [], ie = [], Y = [];
    for (let q = 0; q < r; q++)
      V[q] = 0, ie[q] = 0, Y[q] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: V,
      enabledAttributes: ie,
      attributeDivisors: Y,
      object: B,
      attributes: {},
      index: null
    };
  }
  function h(B, V, ie, Y) {
    const q = l.attributes, Z = V.attributes;
    let te = 0;
    const me = ie.getAttributes();
    for (const ue in me)
      if (me[ue].location >= 0) {
        const K = q[ue];
        let se = Z[ue];
        if (se === void 0 && (ue === "instanceMatrix" && B.instanceMatrix && (se = B.instanceMatrix), ue === "instanceColor" && B.instanceColor && (se = B.instanceColor)), K === void 0 || K.attribute !== se || se && K.data !== se.data)
          return !0;
        te++;
      }
    return l.attributesNum !== te || l.index !== Y;
  }
  function T(B, V, ie, Y) {
    const q = {}, Z = V.attributes;
    let te = 0;
    const me = ie.getAttributes();
    for (const ue in me)
      if (me[ue].location >= 0) {
        let K = Z[ue];
        K === void 0 && (ue === "instanceMatrix" && B.instanceMatrix && (K = B.instanceMatrix), ue === "instanceColor" && B.instanceColor && (K = B.instanceColor));
        const se = {};
        se.attribute = K, K && K.data && (se.data = K.data), q[ue] = se, te++;
      }
    l.attributes = q, l.attributesNum = te, l.index = Y;
  }
  function M() {
    const B = l.newAttributes;
    for (let V = 0, ie = B.length; V < ie; V++)
      B[V] = 0;
  }
  function w(B) {
    y(B, 0);
  }
  function y(B, V) {
    const ie = l.newAttributes, Y = l.enabledAttributes, q = l.attributeDivisors;
    ie[B] = 1, Y[B] === 0 && (i.enableVertexAttribArray(B), Y[B] = 1), q[B] !== V && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](B, V), q[B] = V);
  }
  function R() {
    const B = l.newAttributes, V = l.enabledAttributes;
    for (let ie = 0, Y = V.length; ie < Y; ie++)
      V[ie] !== B[ie] && (i.disableVertexAttribArray(ie), V[ie] = 0);
  }
  function D(B, V, ie, Y, q, Z) {
    n.isWebGL2 === !0 && (ie === i.INT || ie === i.UNSIGNED_INT) ? i.vertexAttribIPointer(B, V, ie, q, Z) : i.vertexAttribPointer(B, V, ie, Y, q, Z);
  }
  function k(B, V, ie, Y) {
    if (n.isWebGL2 === !1 && (B.isInstancedMesh || Y.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    M();
    const q = Y.attributes, Z = ie.getAttributes(), te = V.defaultAttributeValues;
    for (const me in Z) {
      const ue = Z[me];
      if (ue.location >= 0) {
        let z = q[me];
        if (z === void 0 && (me === "instanceMatrix" && B.instanceMatrix && (z = B.instanceMatrix), me === "instanceColor" && B.instanceColor && (z = B.instanceColor)), z !== void 0) {
          const K = z.normalized, se = z.itemSize, ce = t.get(z);
          if (ce === void 0)
            continue;
          const L = ce.buffer, ye = ce.type, Ee = ce.bytesPerElement;
          if (z.isInterleavedBufferAttribute) {
            const re = z.data, Me = re.stride, Be = z.offset;
            if (re.isInstancedInterleavedBuffer) {
              for (let ve = 0; ve < ue.locationSize; ve++)
                y(ue.location + ve, re.meshPerAttribute);
              B.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let ve = 0; ve < ue.locationSize; ve++)
                w(ue.location + ve);
            i.bindBuffer(i.ARRAY_BUFFER, L);
            for (let ve = 0; ve < ue.locationSize; ve++)
              D(
                ue.location + ve,
                se / ue.locationSize,
                ye,
                K,
                Me * Ee,
                (Be + se / ue.locationSize * ve) * Ee
              );
          } else {
            if (z.isInstancedBufferAttribute) {
              for (let re = 0; re < ue.locationSize; re++)
                y(ue.location + re, z.meshPerAttribute);
              B.isInstancedMesh !== !0 && Y._maxInstanceCount === void 0 && (Y._maxInstanceCount = z.meshPerAttribute * z.count);
            } else
              for (let re = 0; re < ue.locationSize; re++)
                w(ue.location + re);
            i.bindBuffer(i.ARRAY_BUFFER, L);
            for (let re = 0; re < ue.locationSize; re++)
              D(
                ue.location + re,
                se / ue.locationSize,
                ye,
                K,
                se * Ee,
                se / ue.locationSize * re * Ee
              );
          }
        } else if (te !== void 0) {
          const K = te[me];
          if (K !== void 0)
            switch (K.length) {
              case 2:
                i.vertexAttrib2fv(ue.location, K);
                break;
              case 3:
                i.vertexAttrib3fv(ue.location, K);
                break;
              case 4:
                i.vertexAttrib4fv(ue.location, K);
                break;
              default:
                i.vertexAttrib1fv(ue.location, K);
            }
        }
      }
    }
    R();
  }
  function g() {
    J();
    for (const B in a) {
      const V = a[B];
      for (const ie in V) {
        const Y = V[ie];
        for (const q in Y)
          _(Y[q].object), delete Y[q];
        delete V[ie];
      }
      delete a[B];
    }
  }
  function b(B) {
    if (a[B.id] === void 0)
      return;
    const V = a[B.id];
    for (const ie in V) {
      const Y = V[ie];
      for (const q in Y)
        _(Y[q].object), delete Y[q];
      delete V[ie];
    }
    delete a[B.id];
  }
  function $(B) {
    for (const V in a) {
      const ie = a[V];
      if (ie[B.id] === void 0)
        continue;
      const Y = ie[B.id];
      for (const q in Y)
        _(Y[q].object), delete Y[q];
      delete ie[B.id];
    }
  }
  function J() {
    I(), u = !0, l !== c && (l = c, p(l.object));
  }
  function I() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: f,
    reset: J,
    resetDefaultState: I,
    dispose: g,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: $,
    initAttributes: M,
    enableAttribute: w,
    disableUnusedAttributes: R
  };
}
function Th(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, u) {
    i.drawArrays(s, l, u), t.update(u, s, 1);
  }
  function c(l, u, f) {
    if (f === 0)
      return;
    let d, p;
    if (r)
      d = i, p = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[p](s, l, u, f), t.update(u, s, f);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function bh(i, e, t) {
  let n;
  function r() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const D = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(D) {
    if (D === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      D = "mediump";
    }
    return D === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = i.getParameter(i.MAX_TEXTURE_SIZE), _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), x = i.getParameter(i.MAX_VERTEX_ATTRIBS), m = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), h = i.getParameter(i.MAX_VARYING_VECTORS), T = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), M = d > 0, w = o || e.has("OES_texture_float"), y = M && w, R = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: _,
    maxAttributes: x,
    maxVertexUniforms: m,
    maxVaryings: h,
    maxFragmentUniforms: T,
    vertexTextures: M,
    floatFragmentTextures: w,
    floatVertexTextures: y,
    maxSamples: R
  };
}
function Ah(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new gn(), a = new Ne(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, d) {
    const p = f.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = d, n = f.length, p;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, d) {
    t = u(f, d, 0);
  }, this.setState = function(f, d, p) {
    const _ = f.clippingPlanes, x = f.clipIntersection, m = f.clipShadows, h = i.get(f);
    if (!r || _ === null || _.length === 0 || s && !m)
      s ? u(null) : l();
    else {
      const T = s ? 0 : n, M = T * 4;
      let w = h.clippingState || null;
      c.value = w, w = u(_, d, M, p);
      for (let y = 0; y !== M; ++y)
        w[y] = t[y];
      h.clippingState = w, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(f, d, p, _) {
    const x = f !== null ? f.length : 0;
    let m = null;
    if (x !== 0) {
      if (m = c.value, _ !== !0 || m === null) {
        const h = p + x * 4, T = d.matrixWorldInverse;
        a.getNormalMatrix(T), (m === null || m.length < h) && (m = new Float32Array(h));
        for (let M = 0, w = p; M !== x; ++M, w += 4)
          o.copy(f[M]).applyMatrix4(T, a), o.normal.toArray(m, w), m[w + 3] = o.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = x, e.numIntersection = 0, m;
  }
}
function wh(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Or ? o.mapping = Jn : a === Br && (o.mapping = Qn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Or || a === Br)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new kl(c.height / 2);
            return l.fromEquirectangularTexture(i, o), e.set(o, l), o.addEventListener("dispose", r), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Ja extends $a {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= u * this.view.offsetY, c = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const jn = 4, $s = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], vn = 20, Lr = /* @__PURE__ */ new Ja(), Ks = /* @__PURE__ */ new Ge();
let Pr = null;
const _n = (1 + Math.sqrt(5)) / 2, Wn = 1 / _n, Zs = [
  /* @__PURE__ */ new P(1, 1, 1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(0, _n, Wn),
  /* @__PURE__ */ new P(0, _n, -Wn),
  /* @__PURE__ */ new P(Wn, 0, _n),
  /* @__PURE__ */ new P(-Wn, 0, _n),
  /* @__PURE__ */ new P(_n, Wn, 0),
  /* @__PURE__ */ new P(-_n, Wn, 0)
];
class Js {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    Pr = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ta(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ea(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Pr), e.scissorTest = !1, Hi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Jn || e.mapping === Qn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Pr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Tt,
      minFilter: Tt,
      generateMipmaps: !1,
      type: pi,
      format: It,
      colorSpace: Ht,
      depthBuffer: !1
    }, r = Qs(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Qs(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Rh(s)), this._blurMaterial = Ch(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Ot(this._lodPlanes[0], e);
    this._renderer.compile(t, Lr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new bt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(Ks), u.toneMapping = Zt, u.autoClear = !1;
    const p = new gi({
      name: "PMREM.Background",
      side: mt,
      depthWrite: !1,
      depthTest: !1
    }), _ = new Ot(new _i(), p);
    let x = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, x = !0) : (p.color.copy(Ks), x = !0);
    for (let h = 0; h < 6; h++) {
      const T = h % 3;
      T === 0 ? (a.up.set(0, c[h], 0), a.lookAt(l[h], 0, 0)) : T === 1 ? (a.up.set(0, 0, c[h]), a.lookAt(0, l[h], 0)) : (a.up.set(0, c[h], 0), a.lookAt(0, 0, l[h]));
      const M = this._cubeSize;
      Hi(r, T * M, h > 2 ? M : 0, M, M), u.setRenderTarget(r), x && u.render(_, a), u.render(e, a);
    }
    _.geometry.dispose(), _.material.dispose(), u.toneMapping = d, u.autoClear = f, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Jn || e.mapping === Qn;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ta()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ea());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Ot(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Hi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Lr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Zs[(r - 1) % Zs.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, f = new Ot(this._lodPlanes[r], l), d = l.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * vn - 1), x = s / _, m = isFinite(s) ? 1 + Math.floor(u * x) : vn;
    m > vn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vn}`);
    const h = [];
    let T = 0;
    for (let D = 0; D < vn; ++D) {
      const k = D / x, g = Math.exp(-k * k / 2);
      h.push(g), D === 0 ? T += g : D < m && (T += 2 * g);
    }
    for (let D = 0; D < h.length; D++)
      h[D] = h[D] / T;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = h, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: M } = this;
    d.dTheta.value = _, d.mipInt.value = M - n;
    const w = this._sizeLods[r], y = 3 * w * (r > M - jn ? r - M + jn : 0), R = 4 * (this._cubeSize - w);
    Hi(t, y, R, 3 * w, 2 * w), c.setRenderTarget(t), c.render(f, Lr);
  }
}
function Rh(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - jn + 1 + $s.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let c = 1 / a;
    o > i - jn ? c = $s[o - i + jn - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), u = -l, f = 1 + l, d = [u, u, f, u, f, f, u, u, f, f, u, f], p = 6, _ = 6, x = 3, m = 2, h = 1, T = new Float32Array(x * _ * p), M = new Float32Array(m * _ * p), w = new Float32Array(h * _ * p);
    for (let R = 0; R < p; R++) {
      const D = R % 3 * 2 / 3 - 1, k = R > 2 ? 0 : -1, g = [
        D,
        k,
        0,
        D + 2 / 3,
        k,
        0,
        D + 2 / 3,
        k + 1,
        0,
        D,
        k,
        0,
        D + 2 / 3,
        k + 1,
        0,
        D,
        k + 1,
        0
      ];
      T.set(g, x * _ * R), M.set(d, m * _ * R);
      const b = [R, R, R, R, R, R];
      w.set(b, h * _ * R);
    }
    const y = new cn();
    y.setAttribute("position", new zt(T, x)), y.setAttribute("uv", new zt(M, m)), y.setAttribute("faceIndex", new zt(w, h)), e.push(y), r > jn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Qs(i, e, t) {
  const n = new bn(i, e, t);
  return n.texture.mapping = $i, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Hi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Ch(i, e, t) {
  const n = new Float32Array(vn), r = new P(0, 1, 0);
  return new on({
    name: "SphericalGaussianBlur",
    defines: {
      n: vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Kr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: sn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ea() {
  return new on({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Kr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: sn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ta() {
  return new on({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Kr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: sn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Kr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Lh(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Or || c === Br, u = c === Jn || c === Qn;
      if (l || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return t === null && (t = new Js(i)), f = l ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f), e.set(a, f), f.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const f = a.image;
            if (l && f && f.height > 0 || u && f && r(f)) {
              t === null && (t = new Js(i));
              const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      a[u] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Ph(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const r = t(n);
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Dh(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes)
      e.remove(d.attributes[_]);
    d.removeEventListener("dispose", o), delete r[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(f, d) {
    return r[d.id] === !0 || (d.addEventListener("dispose", o), r[d.id] = !0, t.memory.geometries++), d;
  }
  function c(f) {
    const d = f.attributes;
    for (const _ in d)
      e.update(d[_], i.ARRAY_BUFFER);
    const p = f.morphAttributes;
    for (const _ in p) {
      const x = p[_];
      for (let m = 0, h = x.length; m < h; m++)
        e.update(x[m], i.ARRAY_BUFFER);
    }
  }
  function l(f) {
    const d = [], p = f.index, _ = f.attributes.position;
    let x = 0;
    if (p !== null) {
      const T = p.array;
      x = p.version;
      for (let M = 0, w = T.length; M < w; M += 3) {
        const y = T[M + 0], R = T[M + 1], D = T[M + 2];
        d.push(y, R, R, D, D, y);
      }
    } else {
      const T = _.array;
      x = _.version;
      for (let M = 0, w = T.length / 3 - 1; M < w; M += 3) {
        const y = M + 0, R = M + 1, D = M + 2;
        d.push(y, R, R, D, D, y);
      }
    }
    const m = new (za(d) ? qa : Xa)(d, 1);
    m.version = x;
    const h = s.get(f);
    h && e.remove(h), s.set(f, m);
  }
  function u(f) {
    const d = s.get(f);
    if (d) {
      const p = f.index;
      p !== null && d.version < p.version && l(f);
    } else
      l(f);
    return s.get(f);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: u
  };
}
function Uh(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, c;
  function l(d) {
    a = d.type, c = d.bytesPerElement;
  }
  function u(d, p) {
    i.drawElements(s, p, a, d * c), t.update(p, s, 1);
  }
  function f(d, p, _) {
    if (_ === 0)
      return;
    let x, m;
    if (r)
      x = i, m = "drawElementsInstanced";
    else if (x = e.get("ANGLE_instanced_arrays"), m = "drawElementsInstancedANGLE", x === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    x[m](s, p, a, d * c, _), t.update(p, s, _);
  }
  this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = f;
}
function Ih(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Nh(i, e) {
  return i[0] - e[0];
}
function Fh(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Oh(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new it(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, u, f) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, _ = p !== void 0 ? p.length : 0;
      let x = s.get(u);
      if (x === void 0 || x.count !== _) {
        let B = function() {
          J.dispose(), s.delete(u), u.removeEventListener("dispose", B);
        };
        x !== void 0 && x.texture.dispose();
        const T = u.morphAttributes.position !== void 0, M = u.morphAttributes.normal !== void 0, w = u.morphAttributes.color !== void 0, y = u.morphAttributes.position || [], R = u.morphAttributes.normal || [], D = u.morphAttributes.color || [];
        let k = 0;
        T === !0 && (k = 1), M === !0 && (k = 2), w === !0 && (k = 3);
        let g = u.attributes.position.count * k, b = 1;
        g > e.maxTextureSize && (b = Math.ceil(g / e.maxTextureSize), g = e.maxTextureSize);
        const $ = new Float32Array(g * b * 4 * _), J = new Va($, g, b, _);
        J.type = Mn, J.needsUpdate = !0;
        const I = k * 4;
        for (let V = 0; V < _; V++) {
          const ie = y[V], Y = R[V], q = D[V], Z = g * b * 4 * V;
          for (let te = 0; te < ie.count; te++) {
            const me = te * I;
            T === !0 && (o.fromBufferAttribute(ie, te), $[Z + me + 0] = o.x, $[Z + me + 1] = o.y, $[Z + me + 2] = o.z, $[Z + me + 3] = 0), M === !0 && (o.fromBufferAttribute(Y, te), $[Z + me + 4] = o.x, $[Z + me + 5] = o.y, $[Z + me + 6] = o.z, $[Z + me + 7] = 0), w === !0 && (o.fromBufferAttribute(q, te), $[Z + me + 8] = o.x, $[Z + me + 9] = o.y, $[Z + me + 10] = o.z, $[Z + me + 11] = q.itemSize === 4 ? o.w : 1);
          }
        }
        x = {
          count: _,
          texture: J,
          size: new Ae(g, b)
        }, s.set(u, x), u.addEventListener("dispose", B);
      }
      let m = 0;
      for (let T = 0; T < d.length; T++)
        m += d[T];
      const h = u.morphTargetsRelative ? 1 : 1 - m;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", h), f.getUniforms().setValue(i, "morphTargetInfluences", d), f.getUniforms().setValue(i, "morphTargetsTexture", x.texture, t), f.getUniforms().setValue(i, "morphTargetsTextureSize", x.size);
    } else {
      const p = d === void 0 ? 0 : d.length;
      let _ = n[u.id];
      if (_ === void 0 || _.length !== p) {
        _ = [];
        for (let M = 0; M < p; M++)
          _[M] = [M, 0];
        n[u.id] = _;
      }
      for (let M = 0; M < p; M++) {
        const w = _[M];
        w[0] = M, w[1] = d[M];
      }
      _.sort(Fh);
      for (let M = 0; M < 8; M++)
        M < p && _[M][1] ? (a[M][0] = _[M][0], a[M][1] = _[M][1]) : (a[M][0] = Number.MAX_SAFE_INTEGER, a[M][1] = 0);
      a.sort(Nh);
      const x = u.morphAttributes.position, m = u.morphAttributes.normal;
      let h = 0;
      for (let M = 0; M < 8; M++) {
        const w = a[M], y = w[0], R = w[1];
        y !== Number.MAX_SAFE_INTEGER && R ? (x && u.getAttribute("morphTarget" + M) !== x[y] && u.setAttribute("morphTarget" + M, x[y]), m && u.getAttribute("morphNormal" + M) !== m[y] && u.setAttribute("morphNormal" + M, m[y]), r[M] = R, h += R) : (x && u.hasAttribute("morphTarget" + M) === !0 && u.deleteAttribute("morphTarget" + M), m && u.hasAttribute("morphNormal" + M) === !0 && u.deleteAttribute("morphNormal" + M), r[M] = 0);
      }
      const T = u.morphTargetsRelative ? 1 : 1 - h;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", T), f.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: c
  };
}
function Bh(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, u = c.geometry, f = e.get(c, u);
    return r.get(f) !== l && (e.update(f), r.set(f, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER)), f;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const Qa = /* @__PURE__ */ new pt(), eo = /* @__PURE__ */ new Va(), to = /* @__PURE__ */ new Rl(), no = /* @__PURE__ */ new Ka(), na = [], ia = [], ra = new Float32Array(16), sa = new Float32Array(9), aa = new Float32Array(4);
function ri(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = e * t;
  let s = na[r];
  if (s === void 0 && (s = new Float32Array(r), na[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function Qe(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function et(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Qi(i, e) {
  let t = ia[e];
  t === void 0 && (t = new Int32Array(e), ia[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function zh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Gh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Qe(t, e))
      return;
    i.uniform2fv(this.addr, e), et(t, e);
  }
}
function Hh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Qe(t, e))
      return;
    i.uniform3fv(this.addr, e), et(t, e);
  }
}
function Vh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Qe(t, e))
      return;
    i.uniform4fv(this.addr, e), et(t, e);
  }
}
function kh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Qe(t, e))
      return;
    i.uniformMatrix2fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n))
      return;
    aa.set(n), i.uniformMatrix2fv(this.addr, !1, aa), et(t, n);
  }
}
function Wh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Qe(t, e))
      return;
    i.uniformMatrix3fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n))
      return;
    sa.set(n), i.uniformMatrix3fv(this.addr, !1, sa), et(t, n);
  }
}
function Xh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Qe(t, e))
      return;
    i.uniformMatrix4fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n))
      return;
    ra.set(n), i.uniformMatrix4fv(this.addr, !1, ra), et(t, n);
  }
}
function qh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function jh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Qe(t, e))
      return;
    i.uniform2iv(this.addr, e), et(t, e);
  }
}
function Yh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Qe(t, e))
      return;
    i.uniform3iv(this.addr, e), et(t, e);
  }
}
function $h(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Qe(t, e))
      return;
    i.uniform4iv(this.addr, e), et(t, e);
  }
}
function Kh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Zh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Qe(t, e))
      return;
    i.uniform2uiv(this.addr, e), et(t, e);
  }
}
function Jh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Qe(t, e))
      return;
    i.uniform3uiv(this.addr, e), et(t, e);
  }
}
function Qh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Qe(t, e))
      return;
    i.uniform4uiv(this.addr, e), et(t, e);
  }
}
function ed(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || Qa, r);
}
function td(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || to, r);
}
function nd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || no, r);
}
function id(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || eo, r);
}
function rd(i) {
  switch (i) {
    case 5126:
      return zh;
    case 35664:
      return Gh;
    case 35665:
      return Hh;
    case 35666:
      return Vh;
    case 35674:
      return kh;
    case 35675:
      return Wh;
    case 35676:
      return Xh;
    case 5124:
    case 35670:
      return qh;
    case 35667:
    case 35671:
      return jh;
    case 35668:
    case 35672:
      return Yh;
    case 35669:
    case 35673:
      return $h;
    case 5125:
      return Kh;
    case 36294:
      return Zh;
    case 36295:
      return Jh;
    case 36296:
      return Qh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ed;
    case 35679:
    case 36299:
    case 36307:
      return td;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return nd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return id;
  }
}
function sd(i, e) {
  i.uniform1fv(this.addr, e);
}
function ad(i, e) {
  const t = ri(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function od(i, e) {
  const t = ri(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function ld(i, e) {
  const t = ri(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function cd(i, e) {
  const t = ri(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function ud(i, e) {
  const t = ri(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function hd(i, e) {
  const t = ri(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function dd(i, e) {
  i.uniform1iv(this.addr, e);
}
function fd(i, e) {
  i.uniform2iv(this.addr, e);
}
function pd(i, e) {
  i.uniform3iv(this.addr, e);
}
function md(i, e) {
  i.uniform4iv(this.addr, e);
}
function gd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function _d(i, e) {
  i.uniform2uiv(this.addr, e);
}
function vd(i, e) {
  i.uniform3uiv(this.addr, e);
}
function xd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Md(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  Qe(n, s) || (i.uniform1iv(this.addr, s), et(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || Qa, s[o]);
}
function Sd(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  Qe(n, s) || (i.uniform1iv(this.addr, s), et(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || to, s[o]);
}
function Ed(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  Qe(n, s) || (i.uniform1iv(this.addr, s), et(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || no, s[o]);
}
function yd(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  Qe(n, s) || (i.uniform1iv(this.addr, s), et(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || eo, s[o]);
}
function Td(i) {
  switch (i) {
    case 5126:
      return sd;
    case 35664:
      return ad;
    case 35665:
      return od;
    case 35666:
      return ld;
    case 35674:
      return cd;
    case 35675:
      return ud;
    case 35676:
      return hd;
    case 5124:
    case 35670:
      return dd;
    case 35667:
    case 35671:
      return fd;
    case 35668:
    case 35672:
      return pd;
    case 35669:
    case 35673:
      return md;
    case 5125:
      return gd;
    case 36294:
      return _d;
    case 36295:
      return vd;
    case 36296:
      return xd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Md;
    case 35679:
    case 36299:
    case 36307:
      return Sd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ed;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return yd;
  }
}
class bd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = rd(t.type);
  }
}
class Ad {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Td(t.type);
  }
}
class wd {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Dr = /(\w+)(\])?(\[|\.)?/g;
function oa(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Rd(i, e, t) {
  const n = i.name, r = n.length;
  for (Dr.lastIndex = 0; ; ) {
    const s = Dr.exec(n), o = Dr.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) {
      oa(t, l === void 0 ? new bd(a, i, e) : new Ad(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && (f = new wd(a), oa(t, f)), t = f;
    }
  }
}
class Xi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      Rd(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function la(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let Cd = 0;
function Ld(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Pd(i) {
  switch (i) {
    case Ht:
      return ["Linear", "( value )"];
    case we:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), ["Linear", "( value )"];
  }
}
function ca(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + Ld(i.getShaderSource(e), o);
  } else
    return r;
}
function Dd(i, e) {
  const t = Pd(e);
  return "vec4 " + i + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Ud(i, e) {
  let t;
  switch (e) {
    case jo:
      t = "Linear";
      break;
    case Yo:
      t = "Reinhard";
      break;
    case $o:
      t = "OptimizedCineon";
      break;
    case Ko:
      t = "ACESFilmic";
      break;
    case Zo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Id(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ui).join(`
`);
}
function Nd(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Fd(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function ui(i) {
  return i !== "";
}
function ua(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ha(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Od = /^[ \t]*#include +<([\w\d./]+)>/gm;
function kr(i) {
  return i.replace(Od, Bd);
}
function Bd(i, e) {
  const t = Le[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return kr(t);
}
const zd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function da(i) {
  return i.replace(zd, Gd);
}
function Gd(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function fa(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Hd(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Pa ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === bo ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Yt && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Vd(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Jn:
      case Qn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case $i:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function kd(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Qn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Wd(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Ia:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Xo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case qo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Xd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function qd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Hd(t), l = Vd(t), u = kd(t), f = Wd(t), d = Xd(t), p = t.isWebGL2 ? "" : Id(t), _ = Nd(s), x = r.createProgram();
  let m, h, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    _
  ].filter(ui).join(`
`), m.length > 0 && (m += `
`), h = [
    p,
    _
  ].filter(ui).join(`
`), h.length > 0 && (h += `
`)) : (m = [
    fa(t),
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ui).join(`
`), h = [
    p,
    fa(t),
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + f : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Zt ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Zt ? Le.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Zt ? Ud("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Le.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Dd("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ui).join(`
`)), o = kr(o), o = ua(o, t), o = ha(o, t), a = kr(a), a = ua(a, t), a = ha(a, t), o = da(o), a = da(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, m = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, h = [
    "#define varying in",
    t.glslVersion === Ds ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Ds ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const M = T + m + o, w = T + h + a, y = la(r, r.VERTEX_SHADER, M), R = la(r, r.FRAGMENT_SHADER, w);
  if (r.attachShader(x, y), r.attachShader(x, R), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), i.debug.checkShaderErrors) {
    const g = r.getProgramInfoLog(x).trim(), b = r.getShaderInfoLog(y).trim(), $ = r.getShaderInfoLog(R).trim();
    let J = !0, I = !0;
    if (r.getProgramParameter(x, r.LINK_STATUS) === !1)
      if (J = !1, typeof i.debug.onShaderError == "function")
        i.debug.onShaderError(r, x, y, R);
      else {
        const B = ca(r, y, "vertex"), V = ca(r, R, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Program Info Log: ` + g + `
` + B + `
` + V
        );
      }
    else
      g !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", g) : (b === "" || $ === "") && (I = !1);
    I && (this.diagnostics = {
      runnable: J,
      programLog: g,
      vertexShader: {
        log: b,
        prefix: m
      },
      fragmentShader: {
        log: $,
        prefix: h
      }
    });
  }
  r.deleteShader(y), r.deleteShader(R);
  let D;
  this.getUniforms = function() {
    return D === void 0 && (D = new Xi(r, x)), D;
  };
  let k;
  return this.getAttributes = function() {
    return k === void 0 && (k = Fd(r, x)), k;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.name = t.shaderName, this.id = Cd++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = y, this.fragmentShader = R, this;
}
let jd = 0;
class Yd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new $d(e), t.set(e, n)), n;
  }
}
class $d {
  constructor(e) {
    this.id = jd++, this.code = e, this.usedTimes = 0;
  }
}
function Kd(i, e, t, n, r, s, o) {
  const a = new $r(), c = new Yd(), l = [], u = r.isWebGL2, f = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let p = r.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function x(g) {
    return g === 1 ? "uv1" : g === 2 ? "uv2" : g === 3 ? "uv3" : "uv";
  }
  function m(g, b, $, J, I) {
    const B = J.fog, V = I.geometry, ie = g.isMeshStandardMaterial ? J.environment : null, Y = (g.isMeshStandardMaterial ? t : e).get(g.envMap || ie), q = Y && Y.mapping === $i ? Y.image.height : null, Z = _[g.type];
    g.precision !== null && (p = r.getMaxPrecision(g.precision), p !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", p, "instead."));
    const te = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, me = te !== void 0 ? te.length : 0;
    let ue = 0;
    V.morphAttributes.position !== void 0 && (ue = 1), V.morphAttributes.normal !== void 0 && (ue = 2), V.morphAttributes.color !== void 0 && (ue = 3);
    let z, K, se, ce;
    if (Z) {
      const He = Dt[Z];
      z = He.vertexShader, K = He.fragmentShader;
    } else
      z = g.vertexShader, K = g.fragmentShader, c.update(g), se = c.getVertexShaderID(g), ce = c.getFragmentShaderID(g);
    const L = i.getRenderTarget(), ye = I.isInstancedMesh === !0, Ee = !!g.map, re = !!g.matcap, Me = !!Y, Be = !!g.aoMap, ve = !!g.lightMap, Re = !!g.bumpMap, Xe = !!g.normalMap, We = !!g.displacementMap, $e = !!g.emissiveMap, qe = !!g.metalnessMap, Oe = !!g.roughnessMap, ke = g.clearcoat > 0, rt = g.iridescence > 0, E = g.sheen > 0, v = g.transmission > 0, O = ke && !!g.clearcoatMap, Q = ke && !!g.clearcoatNormalMap, ne = ke && !!g.clearcoatRoughnessMap, oe = rt && !!g.iridescenceMap, A = rt && !!g.iridescenceThicknessMap, j = E && !!g.sheenColorMap, F = E && !!g.sheenRoughnessMap, le = !!g.specularMap, fe = !!g.specularColorMap, ge = !!g.specularIntensityMap, he = v && !!g.transmissionMap, pe = v && !!g.thicknessMap, Te = !!g.gradientMap, Pe = !!g.alphaMap, je = g.alphaTest > 0, C = !!g.extensions, G = !!V.attributes.uv1, ee = !!V.attributes.uv2, de = !!V.attributes.uv3;
    return {
      isWebGL2: u,
      shaderID: Z,
      shaderName: g.type,
      vertexShader: z,
      fragmentShader: K,
      defines: g.defines,
      customVertexShaderID: se,
      customFragmentShaderID: ce,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: p,
      instancing: ye,
      instancingColor: ye && I.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: L === null ? i.outputColorSpace : L.isXRRenderTarget === !0 ? L.texture.colorSpace : Ht,
      map: Ee,
      matcap: re,
      envMap: Me,
      envMapMode: Me && Y.mapping,
      envMapCubeUVHeight: q,
      aoMap: Be,
      lightMap: ve,
      bumpMap: Re,
      normalMap: Xe,
      displacementMap: d && We,
      emissiveMap: $e,
      normalMapObjectSpace: Xe && g.normalMapType === _l,
      normalMapTangentSpace: Xe && g.normalMapType === gl,
      metalnessMap: qe,
      roughnessMap: Oe,
      clearcoat: ke,
      clearcoatMap: O,
      clearcoatNormalMap: Q,
      clearcoatRoughnessMap: ne,
      iridescence: rt,
      iridescenceMap: oe,
      iridescenceThicknessMap: A,
      sheen: E,
      sheenColorMap: j,
      sheenRoughnessMap: F,
      specularMap: le,
      specularColorMap: fe,
      specularIntensityMap: ge,
      transmission: v,
      transmissionMap: he,
      thicknessMap: pe,
      gradientMap: Te,
      opaque: g.transparent === !1 && g.blending === $n,
      alphaMap: Pe,
      alphaTest: je,
      combine: g.combine,
      //
      mapUv: Ee && x(g.map.channel),
      aoMapUv: Be && x(g.aoMap.channel),
      lightMapUv: ve && x(g.lightMap.channel),
      bumpMapUv: Re && x(g.bumpMap.channel),
      normalMapUv: Xe && x(g.normalMap.channel),
      displacementMapUv: We && x(g.displacementMap.channel),
      emissiveMapUv: $e && x(g.emissiveMap.channel),
      metalnessMapUv: qe && x(g.metalnessMap.channel),
      roughnessMapUv: Oe && x(g.roughnessMap.channel),
      clearcoatMapUv: O && x(g.clearcoatMap.channel),
      clearcoatNormalMapUv: Q && x(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ne && x(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: oe && x(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: A && x(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: j && x(g.sheenColorMap.channel),
      sheenRoughnessMapUv: F && x(g.sheenRoughnessMap.channel),
      specularMapUv: le && x(g.specularMap.channel),
      specularColorMapUv: fe && x(g.specularColorMap.channel),
      specularIntensityMapUv: ge && x(g.specularIntensityMap.channel),
      transmissionMapUv: he && x(g.transmissionMap.channel),
      thicknessMapUv: pe && x(g.thicknessMap.channel),
      alphaMapUv: Pe && x(g.alphaMap.channel),
      //
      vertexTangents: Xe && !!V.attributes.tangent,
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4,
      vertexUv1s: G,
      vertexUv2s: ee,
      vertexUv3s: de,
      pointsUvs: I.isPoints === !0 && !!V.attributes.uv && (Ee || Pe),
      fog: !!B,
      useFog: g.fog === !0,
      fogExp2: B && B.isFogExp2,
      flatShading: g.flatShading === !0,
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      skinning: I.isSkinnedMesh === !0,
      morphTargets: V.morphAttributes.position !== void 0,
      morphNormals: V.morphAttributes.normal !== void 0,
      morphColors: V.morphAttributes.color !== void 0,
      morphTargetsCount: me,
      morphTextureStride: ue,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && $.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: g.toneMapped ? i.toneMapping : Zt,
      useLegacyLights: i.useLegacyLights,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === Kt,
      flipSided: g.side === mt,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionDerivatives: C && g.extensions.derivatives === !0,
      extensionFragDepth: C && g.extensions.fragDepth === !0,
      extensionDrawBuffers: C && g.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: C && g.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
  }
  function h(g) {
    const b = [];
    if (g.shaderID ? b.push(g.shaderID) : (b.push(g.customVertexShaderID), b.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const $ in g.defines)
        b.push($), b.push(g.defines[$]);
    return g.isRawShaderMaterial === !1 && (T(b, g), M(b, g), b.push(i.outputColorSpace)), b.push(g.customProgramCacheKey), b.join();
  }
  function T(g, b) {
    g.push(b.precision), g.push(b.outputColorSpace), g.push(b.envMapMode), g.push(b.envMapCubeUVHeight), g.push(b.mapUv), g.push(b.alphaMapUv), g.push(b.lightMapUv), g.push(b.aoMapUv), g.push(b.bumpMapUv), g.push(b.normalMapUv), g.push(b.displacementMapUv), g.push(b.emissiveMapUv), g.push(b.metalnessMapUv), g.push(b.roughnessMapUv), g.push(b.clearcoatMapUv), g.push(b.clearcoatNormalMapUv), g.push(b.clearcoatRoughnessMapUv), g.push(b.iridescenceMapUv), g.push(b.iridescenceThicknessMapUv), g.push(b.sheenColorMapUv), g.push(b.sheenRoughnessMapUv), g.push(b.specularMapUv), g.push(b.specularColorMapUv), g.push(b.specularIntensityMapUv), g.push(b.transmissionMapUv), g.push(b.thicknessMapUv), g.push(b.combine), g.push(b.fogExp2), g.push(b.sizeAttenuation), g.push(b.morphTargetsCount), g.push(b.morphAttributeCount), g.push(b.numDirLights), g.push(b.numPointLights), g.push(b.numSpotLights), g.push(b.numSpotLightMaps), g.push(b.numHemiLights), g.push(b.numRectAreaLights), g.push(b.numDirLightShadows), g.push(b.numPointLightShadows), g.push(b.numSpotLightShadows), g.push(b.numSpotLightShadowsWithMaps), g.push(b.shadowMapType), g.push(b.toneMapping), g.push(b.numClippingPlanes), g.push(b.numClipIntersection), g.push(b.depthPacking);
  }
  function M(g, b) {
    a.disableAll(), b.isWebGL2 && a.enable(0), b.supportsVertexTextures && a.enable(1), b.instancing && a.enable(2), b.instancingColor && a.enable(3), b.matcap && a.enable(4), b.envMap && a.enable(5), b.normalMapObjectSpace && a.enable(6), b.normalMapTangentSpace && a.enable(7), b.clearcoat && a.enable(8), b.iridescence && a.enable(9), b.alphaTest && a.enable(10), b.vertexColors && a.enable(11), b.vertexAlphas && a.enable(12), b.vertexUv1s && a.enable(13), b.vertexUv2s && a.enable(14), b.vertexUv3s && a.enable(15), b.vertexTangents && a.enable(16), g.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.skinning && a.enable(4), b.morphTargets && a.enable(5), b.morphNormals && a.enable(6), b.morphColors && a.enable(7), b.premultipliedAlpha && a.enable(8), b.shadowMapEnabled && a.enable(9), b.useLegacyLights && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), g.push(a.mask);
  }
  function w(g) {
    const b = _[g.type];
    let $;
    if (b) {
      const J = Dt[b];
      $ = Ya.clone(J.uniforms);
    } else
      $ = g.uniforms;
    return $;
  }
  function y(g, b) {
    let $;
    for (let J = 0, I = l.length; J < I; J++) {
      const B = l[J];
      if (B.cacheKey === b) {
        $ = B, ++$.usedTimes;
        break;
      }
    }
    return $ === void 0 && ($ = new qd(i, b, g, s), l.push($)), $;
  }
  function R(g) {
    if (--g.usedTimes === 0) {
      const b = l.indexOf(g);
      l[b] = l[l.length - 1], l.pop(), g.destroy();
    }
  }
  function D(g) {
    c.remove(g);
  }
  function k() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: h,
    getUniforms: w,
    acquireProgram: y,
    releaseProgram: R,
    releaseShaderCache: D,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: k
  };
}
function Zd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: r
  };
}
function Jd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function pa(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function ma() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(f, d, p, _, x, m) {
    let h = i[e];
    return h === void 0 ? (h = {
      id: f.id,
      object: f,
      geometry: d,
      material: p,
      groupOrder: _,
      renderOrder: f.renderOrder,
      z: x,
      group: m
    }, i[e] = h) : (h.id = f.id, h.object = f, h.geometry = d, h.material = p, h.groupOrder = _, h.renderOrder = f.renderOrder, h.z = x, h.group = m), e++, h;
  }
  function a(f, d, p, _, x, m) {
    const h = o(f, d, p, _, x, m);
    p.transmission > 0 ? n.push(h) : p.transparent === !0 ? r.push(h) : t.push(h);
  }
  function c(f, d, p, _, x, m) {
    const h = o(f, d, p, _, x, m);
    p.transmission > 0 ? n.unshift(h) : p.transparent === !0 ? r.unshift(h) : t.unshift(h);
  }
  function l(f, d) {
    t.length > 1 && t.sort(f || Jd), n.length > 1 && n.sort(d || pa), r.length > 1 && r.sort(d || pa);
  }
  function u() {
    for (let f = e, d = i.length; f < d; f++) {
      const p = i[f];
      if (p.id === null)
        break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: c,
    finish: u,
    sort: l
  };
}
function Qd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new ma(), i.set(n, [o])) : r >= s.length ? (o = new ma(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function ef() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new Ge()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new Ge(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new Ge(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new Ge(),
            groundColor: new Ge()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ge(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function tf() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ae()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ae()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ae(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let nf = 0;
function rf(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function sf(i, e) {
  const t = new ef(), n = tf(), r = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    r.probe.push(new P());
  const s = new P(), o = new Je(), a = new Je();
  function c(u, f) {
    let d = 0, p = 0, _ = 0;
    for (let $ = 0; $ < 9; $++)
      r.probe[$].set(0, 0, 0);
    let x = 0, m = 0, h = 0, T = 0, M = 0, w = 0, y = 0, R = 0, D = 0, k = 0;
    u.sort(rf);
    const g = f === !0 ? Math.PI : 1;
    for (let $ = 0, J = u.length; $ < J; $++) {
      const I = u[$], B = I.color, V = I.intensity, ie = I.distance, Y = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        d += B.r * V * g, p += B.g * V * g, _ += B.b * V * g;
      else if (I.isLightProbe)
        for (let q = 0; q < 9; q++)
          r.probe[q].addScaledVector(I.sh.coefficients[q], V);
      else if (I.isDirectionalLight) {
        const q = t.get(I);
        if (q.color.copy(I.color).multiplyScalar(I.intensity * g), I.castShadow) {
          const Z = I.shadow, te = n.get(I);
          te.shadowBias = Z.bias, te.shadowNormalBias = Z.normalBias, te.shadowRadius = Z.radius, te.shadowMapSize = Z.mapSize, r.directionalShadow[x] = te, r.directionalShadowMap[x] = Y, r.directionalShadowMatrix[x] = I.shadow.matrix, w++;
        }
        r.directional[x] = q, x++;
      } else if (I.isSpotLight) {
        const q = t.get(I);
        q.position.setFromMatrixPosition(I.matrixWorld), q.color.copy(B).multiplyScalar(V * g), q.distance = ie, q.coneCos = Math.cos(I.angle), q.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), q.decay = I.decay, r.spot[h] = q;
        const Z = I.shadow;
        if (I.map && (r.spotLightMap[D] = I.map, D++, Z.updateMatrices(I), I.castShadow && k++), r.spotLightMatrix[h] = Z.matrix, I.castShadow) {
          const te = n.get(I);
          te.shadowBias = Z.bias, te.shadowNormalBias = Z.normalBias, te.shadowRadius = Z.radius, te.shadowMapSize = Z.mapSize, r.spotShadow[h] = te, r.spotShadowMap[h] = Y, R++;
        }
        h++;
      } else if (I.isRectAreaLight) {
        const q = t.get(I);
        q.color.copy(B).multiplyScalar(V), q.halfWidth.set(I.width * 0.5, 0, 0), q.halfHeight.set(0, I.height * 0.5, 0), r.rectArea[T] = q, T++;
      } else if (I.isPointLight) {
        const q = t.get(I);
        if (q.color.copy(I.color).multiplyScalar(I.intensity * g), q.distance = I.distance, q.decay = I.decay, I.castShadow) {
          const Z = I.shadow, te = n.get(I);
          te.shadowBias = Z.bias, te.shadowNormalBias = Z.normalBias, te.shadowRadius = Z.radius, te.shadowMapSize = Z.mapSize, te.shadowCameraNear = Z.camera.near, te.shadowCameraFar = Z.camera.far, r.pointShadow[m] = te, r.pointShadowMap[m] = Y, r.pointShadowMatrix[m] = I.shadow.matrix, y++;
        }
        r.point[m] = q, m++;
      } else if (I.isHemisphereLight) {
        const q = t.get(I);
        q.skyColor.copy(I.color).multiplyScalar(V * g), q.groundColor.copy(I.groundColor).multiplyScalar(V * g), r.hemi[M] = q, M++;
      }
    }
    T > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = ae.LTC_FLOAT_1, r.rectAreaLTC2 = ae.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = ae.LTC_HALF_1, r.rectAreaLTC2 = ae.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = d, r.ambient[1] = p, r.ambient[2] = _;
    const b = r.hash;
    (b.directionalLength !== x || b.pointLength !== m || b.spotLength !== h || b.rectAreaLength !== T || b.hemiLength !== M || b.numDirectionalShadows !== w || b.numPointShadows !== y || b.numSpotShadows !== R || b.numSpotMaps !== D) && (r.directional.length = x, r.spot.length = h, r.rectArea.length = T, r.point.length = m, r.hemi.length = M, r.directionalShadow.length = w, r.directionalShadowMap.length = w, r.pointShadow.length = y, r.pointShadowMap.length = y, r.spotShadow.length = R, r.spotShadowMap.length = R, r.directionalShadowMatrix.length = w, r.pointShadowMatrix.length = y, r.spotLightMatrix.length = R + D - k, r.spotLightMap.length = D, r.numSpotLightShadowsWithMaps = k, b.directionalLength = x, b.pointLength = m, b.spotLength = h, b.rectAreaLength = T, b.hemiLength = M, b.numDirectionalShadows = w, b.numPointShadows = y, b.numSpotShadows = R, b.numSpotMaps = D, r.version = nf++);
  }
  function l(u, f) {
    let d = 0, p = 0, _ = 0, x = 0, m = 0;
    const h = f.matrixWorldInverse;
    for (let T = 0, M = u.length; T < M; T++) {
      const w = u[T];
      if (w.isDirectionalLight) {
        const y = r.directional[d];
        y.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(h), d++;
      } else if (w.isSpotLight) {
        const y = r.spot[_];
        y.position.setFromMatrixPosition(w.matrixWorld), y.position.applyMatrix4(h), y.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(h), _++;
      } else if (w.isRectAreaLight) {
        const y = r.rectArea[x];
        y.position.setFromMatrixPosition(w.matrixWorld), y.position.applyMatrix4(h), a.identity(), o.copy(w.matrixWorld), o.premultiply(h), a.extractRotation(o), y.halfWidth.set(w.width * 0.5, 0, 0), y.halfHeight.set(0, w.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), x++;
      } else if (w.isPointLight) {
        const y = r.point[p];
        y.position.setFromMatrixPosition(w.matrixWorld), y.position.applyMatrix4(h), p++;
      } else if (w.isHemisphereLight) {
        const y = r.hemi[m];
        y.direction.setFromMatrixPosition(w.matrixWorld), y.direction.transformDirection(h), m++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: r
  };
}
function ga(i, e) {
  const t = new sf(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(f) {
    n.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function c(f) {
    t.setup(n, f);
  }
  function l(f) {
    t.setupView(n, f);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: r,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a
  };
}
function af(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new ga(i, e), t.set(s, [c])) : o >= a.length ? (c = new ga(i, e), a.push(c)) : c = a[o], c;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class of extends Zi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = pl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class lf extends Zi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const cf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, uf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function hf(i, e, t) {
  let n = new Ji();
  const r = new Ae(), s = new Ae(), o = new it(), a = new of({ depthPacking: ml }), c = new lf(), l = {}, u = t.maxTextureSize, f = { [an]: mt, [mt]: an, [Kt]: Kt }, d = new on({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ae() },
      radius: { value: 4 }
    },
    vertexShader: cf,
    fragmentShader: uf
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new cn();
  _.setAttribute(
    "position",
    new zt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new Ot(_, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Pa;
  let h = this.type;
  this.render = function(y, R, D) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || y.length === 0)
      return;
    const k = i.getRenderTarget(), g = i.getActiveCubeFace(), b = i.getActiveMipmapLevel(), $ = i.state;
    $.setBlending(sn), $.buffers.color.setClear(1, 1, 1, 1), $.buffers.depth.setTest(!0), $.setScissorTest(!1);
    const J = h !== Yt && this.type === Yt, I = h === Yt && this.type !== Yt;
    for (let B = 0, V = y.length; B < V; B++) {
      const ie = y[B], Y = ie.shadow;
      if (Y === void 0) {
        console.warn("THREE.WebGLShadowMap:", ie, "has no shadow.");
        continue;
      }
      if (Y.autoUpdate === !1 && Y.needsUpdate === !1)
        continue;
      r.copy(Y.mapSize);
      const q = Y.getFrameExtents();
      if (r.multiply(q), s.copy(Y.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / q.x), r.x = s.x * q.x, Y.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / q.y), r.y = s.y * q.y, Y.mapSize.y = s.y)), Y.map === null || J === !0 || I === !0) {
        const te = this.type !== Yt ? { minFilter: dt, magFilter: dt } : {};
        Y.map !== null && Y.map.dispose(), Y.map = new bn(r.x, r.y, te), Y.map.texture.name = ie.name + ".shadowMap", Y.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(Y.map), i.clear();
      const Z = Y.getViewportCount();
      for (let te = 0; te < Z; te++) {
        const me = Y.getViewport(te);
        o.set(
          s.x * me.x,
          s.y * me.y,
          s.x * me.z,
          s.y * me.w
        ), $.viewport(o), Y.updateMatrices(ie, te), n = Y.getFrustum(), w(R, D, Y.camera, ie, this.type);
      }
      Y.isPointLightShadow !== !0 && this.type === Yt && T(Y, D), Y.needsUpdate = !1;
    }
    h = this.type, m.needsUpdate = !1, i.setRenderTarget(k, g, b);
  };
  function T(y, R) {
    const D = e.update(x);
    d.defines.VSM_SAMPLES !== y.blurSamples && (d.defines.VSM_SAMPLES = y.blurSamples, p.defines.VSM_SAMPLES = y.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), y.mapPass === null && (y.mapPass = new bn(r.x, r.y)), d.uniforms.shadow_pass.value = y.map.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, i.setRenderTarget(y.mapPass), i.clear(), i.renderBufferDirect(R, null, D, d, x, null), p.uniforms.shadow_pass.value = y.mapPass.texture, p.uniforms.resolution.value = y.mapSize, p.uniforms.radius.value = y.radius, i.setRenderTarget(y.map), i.clear(), i.renderBufferDirect(R, null, D, p, x, null);
  }
  function M(y, R, D, k) {
    let g = null;
    const b = D.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (b !== void 0)
      g = b;
    else if (g = D.isPointLight === !0 ? c : a, i.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
      const $ = g.uuid, J = R.uuid;
      let I = l[$];
      I === void 0 && (I = {}, l[$] = I);
      let B = I[J];
      B === void 0 && (B = g.clone(), I[J] = B), g = B;
    }
    if (g.visible = R.visible, g.wireframe = R.wireframe, k === Yt ? g.side = R.shadowSide !== null ? R.shadowSide : R.side : g.side = R.shadowSide !== null ? R.shadowSide : f[R.side], g.alphaMap = R.alphaMap, g.alphaTest = R.alphaTest, g.map = R.map, g.clipShadows = R.clipShadows, g.clippingPlanes = R.clippingPlanes, g.clipIntersection = R.clipIntersection, g.displacementMap = R.displacementMap, g.displacementScale = R.displacementScale, g.displacementBias = R.displacementBias, g.wireframeLinewidth = R.wireframeLinewidth, g.linewidth = R.linewidth, D.isPointLight === !0 && g.isMeshDistanceMaterial === !0) {
      const $ = i.properties.get(g);
      $.light = D;
    }
    return g;
  }
  function w(y, R, D, k, g) {
    if (y.visible === !1)
      return;
    if (y.layers.test(R.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && g === Yt) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, y.matrixWorld);
      const J = e.update(y), I = y.material;
      if (Array.isArray(I)) {
        const B = J.groups;
        for (let V = 0, ie = B.length; V < ie; V++) {
          const Y = B[V], q = I[Y.materialIndex];
          if (q && q.visible) {
            const Z = M(y, q, k, g);
            i.renderBufferDirect(D, null, J, Z, y, Y);
          }
        }
      } else if (I.visible) {
        const B = M(y, I, k, g);
        i.renderBufferDirect(D, null, J, B, y, null);
      }
    }
    const $ = y.children;
    for (let J = 0, I = $.length; J < I; J++)
      w($[J], R, D, k, g);
  }
}
function df(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let C = !1;
    const G = new it();
    let ee = null;
    const de = new it(0, 0, 0, 0);
    return {
      setMask: function(_e) {
        ee !== _e && !C && (i.colorMask(_e, _e, _e, _e), ee = _e);
      },
      setLocked: function(_e) {
        C = _e;
      },
      setClear: function(_e, He, Ve, st, Jt) {
        Jt === !0 && (_e *= st, He *= st, Ve *= st), G.set(_e, He, Ve, st), de.equals(G) === !1 && (i.clearColor(_e, He, Ve, st), de.copy(G));
      },
      reset: function() {
        C = !1, ee = null, de.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let C = !1, G = null, ee = null, de = null;
    return {
      setTest: function(_e) {
        _e ? L(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
      },
      setMask: function(_e) {
        G !== _e && !C && (i.depthMask(_e), G = _e);
      },
      setFunc: function(_e) {
        if (ee !== _e) {
          switch (_e) {
            case Bo:
              i.depthFunc(i.NEVER);
              break;
            case zo:
              i.depthFunc(i.ALWAYS);
              break;
            case Go:
              i.depthFunc(i.LESS);
              break;
            case Fr:
              i.depthFunc(i.LEQUAL);
              break;
            case Ho:
              i.depthFunc(i.EQUAL);
              break;
            case Vo:
              i.depthFunc(i.GEQUAL);
              break;
            case ko:
              i.depthFunc(i.GREATER);
              break;
            case Wo:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ee = _e;
        }
      },
      setLocked: function(_e) {
        C = _e;
      },
      setClear: function(_e) {
        de !== _e && (i.clearDepth(_e), de = _e);
      },
      reset: function() {
        C = !1, G = null, ee = null, de = null;
      }
    };
  }
  function o() {
    let C = !1, G = null, ee = null, de = null, _e = null, He = null, Ve = null, st = null, Jt = null;
    return {
      setTest: function(Ye) {
        C || (Ye ? L(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
      },
      setMask: function(Ye) {
        G !== Ye && !C && (i.stencilMask(Ye), G = Ye);
      },
      setFunc: function(Ye, Et, Nt) {
        (ee !== Ye || de !== Et || _e !== Nt) && (i.stencilFunc(Ye, Et, Nt), ee = Ye, de = Et, _e = Nt);
      },
      setOp: function(Ye, Et, Nt) {
        (He !== Ye || Ve !== Et || st !== Nt) && (i.stencilOp(Ye, Et, Nt), He = Ye, Ve = Et, st = Nt);
      },
      setLocked: function(Ye) {
        C = Ye;
      },
      setClear: function(Ye) {
        Jt !== Ye && (i.clearStencil(Ye), Jt = Ye);
      },
      reset: function() {
        C = !1, G = null, ee = null, de = null, _e = null, He = null, Ve = null, st = null, Jt = null;
      }
    };
  }
  const a = new r(), c = new s(), l = new o(), u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
  let d = {}, p = {}, _ = /* @__PURE__ */ new WeakMap(), x = [], m = null, h = !1, T = null, M = null, w = null, y = null, R = null, D = null, k = null, g = !1, b = null, $ = null, J = null, I = null, B = null;
  const V = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ie = !1, Y = 0;
  const q = i.getParameter(i.VERSION);
  q.indexOf("WebGL") !== -1 ? (Y = parseFloat(/^WebGL (\d)/.exec(q)[1]), ie = Y >= 1) : q.indexOf("OpenGL ES") !== -1 && (Y = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), ie = Y >= 2);
  let Z = null, te = {};
  const me = i.getParameter(i.SCISSOR_BOX), ue = i.getParameter(i.VIEWPORT), z = new it().fromArray(me), K = new it().fromArray(ue);
  function se(C, G, ee, de) {
    const _e = new Uint8Array(4), He = i.createTexture();
    i.bindTexture(C, He), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ve = 0; Ve < ee; Ve++)
      n && (C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY) ? i.texImage3D(G, 0, i.RGBA, 1, 1, de, 0, i.RGBA, i.UNSIGNED_BYTE, _e) : i.texImage2D(G + Ve, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, _e);
    return He;
  }
  const ce = {};
  ce[i.TEXTURE_2D] = se(i.TEXTURE_2D, i.TEXTURE_2D, 1), ce[i.TEXTURE_CUBE_MAP] = se(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (ce[i.TEXTURE_2D_ARRAY] = se(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ce[i.TEXTURE_3D] = se(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), L(i.DEPTH_TEST), c.setFunc(Fr), We(!1), $e(ts), L(i.CULL_FACE), Re(sn);
  function L(C) {
    d[C] !== !0 && (i.enable(C), d[C] = !0);
  }
  function ye(C) {
    d[C] !== !1 && (i.disable(C), d[C] = !1);
  }
  function Ee(C, G) {
    return p[C] !== G ? (i.bindFramebuffer(C, G), p[C] = G, n && (C === i.DRAW_FRAMEBUFFER && (p[i.FRAMEBUFFER] = G), C === i.FRAMEBUFFER && (p[i.DRAW_FRAMEBUFFER] = G)), !0) : !1;
  }
  function re(C, G) {
    let ee = x, de = !1;
    if (C)
      if (ee = _.get(G), ee === void 0 && (ee = [], _.set(G, ee)), C.isWebGLMultipleRenderTargets) {
        const _e = C.texture;
        if (ee.length !== _e.length || ee[0] !== i.COLOR_ATTACHMENT0) {
          for (let He = 0, Ve = _e.length; He < Ve; He++)
            ee[He] = i.COLOR_ATTACHMENT0 + He;
          ee.length = _e.length, de = !0;
        }
      } else
        ee[0] !== i.COLOR_ATTACHMENT0 && (ee[0] = i.COLOR_ATTACHMENT0, de = !0);
    else
      ee[0] !== i.BACK && (ee[0] = i.BACK, de = !0);
    de && (t.isWebGL2 ? i.drawBuffers(ee) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee));
  }
  function Me(C) {
    return m !== C ? (i.useProgram(C), m = C, !0) : !1;
  }
  const Be = {
    [qn]: i.FUNC_ADD,
    [wo]: i.FUNC_SUBTRACT,
    [Ro]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Be[ss] = i.MIN, Be[as] = i.MAX;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (Be[ss] = C.MIN_EXT, Be[as] = C.MAX_EXT);
  }
  const ve = {
    [Co]: i.ZERO,
    [Lo]: i.ONE,
    [Po]: i.SRC_COLOR,
    [Da]: i.SRC_ALPHA,
    [Oo]: i.SRC_ALPHA_SATURATE,
    [No]: i.DST_COLOR,
    [Uo]: i.DST_ALPHA,
    [Do]: i.ONE_MINUS_SRC_COLOR,
    [Ua]: i.ONE_MINUS_SRC_ALPHA,
    [Fo]: i.ONE_MINUS_DST_COLOR,
    [Io]: i.ONE_MINUS_DST_ALPHA
  };
  function Re(C, G, ee, de, _e, He, Ve, st) {
    if (C === sn) {
      h === !0 && (ye(i.BLEND), h = !1);
      return;
    }
    if (h === !1 && (L(i.BLEND), h = !0), C !== Ao) {
      if (C !== T || st !== g) {
        if ((M !== qn || R !== qn) && (i.blendEquation(i.FUNC_ADD), M = qn, R = qn), st)
          switch (C) {
            case $n:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ns:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case is:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case rs:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case $n:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ns:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case is:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case rs:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        w = null, y = null, D = null, k = null, T = C, g = st;
      }
      return;
    }
    _e = _e || G, He = He || ee, Ve = Ve || de, (G !== M || _e !== R) && (i.blendEquationSeparate(Be[G], Be[_e]), M = G, R = _e), (ee !== w || de !== y || He !== D || Ve !== k) && (i.blendFuncSeparate(ve[ee], ve[de], ve[He], ve[Ve]), w = ee, y = de, D = He, k = Ve), T = C, g = !1;
  }
  function Xe(C, G) {
    C.side === Kt ? ye(i.CULL_FACE) : L(i.CULL_FACE);
    let ee = C.side === mt;
    G && (ee = !ee), We(ee), C.blending === $n && C.transparent === !1 ? Re(sn) : Re(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.premultipliedAlpha), c.setFunc(C.depthFunc), c.setTest(C.depthTest), c.setMask(C.depthWrite), a.setMask(C.colorWrite);
    const de = C.stencilWrite;
    l.setTest(de), de && (l.setMask(C.stencilWriteMask), l.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), l.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), Oe(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? L(i.SAMPLE_ALPHA_TO_COVERAGE) : ye(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function We(C) {
    b !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), b = C);
  }
  function $e(C) {
    C !== yo ? (L(i.CULL_FACE), C !== $ && (C === ts ? i.cullFace(i.BACK) : C === To ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ye(i.CULL_FACE), $ = C;
  }
  function qe(C) {
    C !== J && (ie && i.lineWidth(C), J = C);
  }
  function Oe(C, G, ee) {
    C ? (L(i.POLYGON_OFFSET_FILL), (I !== G || B !== ee) && (i.polygonOffset(G, ee), I = G, B = ee)) : ye(i.POLYGON_OFFSET_FILL);
  }
  function ke(C) {
    C ? L(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function rt(C) {
    C === void 0 && (C = i.TEXTURE0 + V - 1), Z !== C && (i.activeTexture(C), Z = C);
  }
  function E(C, G, ee) {
    ee === void 0 && (Z === null ? ee = i.TEXTURE0 + V - 1 : ee = Z);
    let de = te[ee];
    de === void 0 && (de = { type: void 0, texture: void 0 }, te[ee] = de), (de.type !== C || de.texture !== G) && (Z !== ee && (i.activeTexture(ee), Z = ee), i.bindTexture(C, G || ce[C]), de.type = C, de.texture = G);
  }
  function v() {
    const C = te[Z];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function O() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Q() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ne() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function oe() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function A() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function j() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function F() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function fe() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ge() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function he(C) {
    z.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), z.copy(C));
  }
  function pe(C) {
    K.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), K.copy(C));
  }
  function Te(C, G) {
    let ee = f.get(G);
    ee === void 0 && (ee = /* @__PURE__ */ new WeakMap(), f.set(G, ee));
    let de = ee.get(C);
    de === void 0 && (de = i.getUniformBlockIndex(G, C.name), ee.set(C, de));
  }
  function Pe(C, G) {
    const de = f.get(G).get(C);
    u.get(G) !== de && (i.uniformBlockBinding(G, de, C.__bindingPointIndex), u.set(G, de));
  }
  function je() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, Z = null, te = {}, p = {}, _ = /* @__PURE__ */ new WeakMap(), x = [], m = null, h = !1, T = null, M = null, w = null, y = null, R = null, D = null, k = null, g = !1, b = null, $ = null, J = null, I = null, B = null, z.set(0, 0, i.canvas.width, i.canvas.height), K.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: L,
    disable: ye,
    bindFramebuffer: Ee,
    drawBuffers: re,
    useProgram: Me,
    setBlending: Re,
    setMaterial: Xe,
    setFlipSided: We,
    setCullFace: $e,
    setLineWidth: qe,
    setPolygonOffset: Oe,
    setScissorTest: ke,
    activeTexture: rt,
    bindTexture: E,
    unbindTexture: v,
    compressedTexImage2D: O,
    compressedTexImage3D: Q,
    texImage2D: fe,
    texImage3D: ge,
    updateUBOMapping: Te,
    uniformBlockBinding: Pe,
    texStorage2D: F,
    texStorage3D: le,
    texSubImage2D: ne,
    texSubImage3D: oe,
    compressedTexSubImage2D: A,
    compressedTexSubImage3D: j,
    scissor: he,
    viewport: pe,
    reset: je
  };
}
function ff(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, c = r.maxTextures, l = r.maxCubemapSize, u = r.maxTextureSize, f = r.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), _ = /* @__PURE__ */ new WeakMap();
  let x;
  const m = /* @__PURE__ */ new WeakMap();
  let h = !1;
  try {
    h = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function T(E, v) {
    return h ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, v)
    ) : ji("canvas");
  }
  function M(E, v, O, Q) {
    let ne = 1;
    if ((E.width > Q || E.height > Q) && (ne = Q / Math.max(E.width, E.height)), ne < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        const oe = v ? Ml : Math.floor, A = oe(ne * E.width), j = oe(ne * E.height);
        x === void 0 && (x = T(A, j));
        const F = O ? T(A, j) : x;
        return F.width = A, F.height = j, F.getContext("2d").drawImage(E, 0, 0, A, j), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + A + "x" + j + ")."), F;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function w(E) {
    return Us(E.width) && Us(E.height);
  }
  function y(E) {
    return a ? !1 : E.wrapS !== Ut || E.wrapT !== Ut || E.minFilter !== dt && E.minFilter !== Tt;
  }
  function R(E, v) {
    return E.generateMipmaps && v && E.minFilter !== dt && E.minFilter !== Tt;
  }
  function D(E) {
    i.generateMipmap(E);
  }
  function k(E, v, O, Q, ne = !1) {
    if (a === !1)
      return v;
    if (E !== null) {
      if (i[E] !== void 0)
        return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let oe = v;
    return v === i.RED && (O === i.FLOAT && (oe = i.R32F), O === i.HALF_FLOAT && (oe = i.R16F), O === i.UNSIGNED_BYTE && (oe = i.R8)), v === i.RG && (O === i.FLOAT && (oe = i.RG32F), O === i.HALF_FLOAT && (oe = i.RG16F), O === i.UNSIGNED_BYTE && (oe = i.RG8)), v === i.RGBA && (O === i.FLOAT && (oe = i.RGBA32F), O === i.HALF_FLOAT && (oe = i.RGBA16F), O === i.UNSIGNED_BYTE && (oe = Q === we && ne === !1 ? i.SRGB8_ALPHA8 : i.RGBA8), O === i.UNSIGNED_SHORT_4_4_4_4 && (oe = i.RGBA4), O === i.UNSIGNED_SHORT_5_5_5_1 && (oe = i.RGB5_A1)), (oe === i.R16F || oe === i.R32F || oe === i.RG16F || oe === i.RG32F || oe === i.RGBA16F || oe === i.RGBA32F) && e.get("EXT_color_buffer_float"), oe;
  }
  function g(E, v, O) {
    return R(E, O) === !0 || E.isFramebufferTexture && E.minFilter !== dt && E.minFilter !== Tt ? Math.log2(Math.max(v.width, v.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? v.mipmaps.length : 1;
  }
  function b(E) {
    return E === dt || E === os || E === rr ? i.NEAREST : i.LINEAR;
  }
  function $(E) {
    const v = E.target;
    v.removeEventListener("dispose", $), I(v), v.isVideoTexture && _.delete(v);
  }
  function J(E) {
    const v = E.target;
    v.removeEventListener("dispose", J), V(v);
  }
  function I(E) {
    const v = n.get(E);
    if (v.__webglInit === void 0)
      return;
    const O = E.source, Q = m.get(O);
    if (Q) {
      const ne = Q[v.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && B(E), Object.keys(Q).length === 0 && m.delete(O);
    }
    n.remove(E);
  }
  function B(E) {
    const v = n.get(E);
    i.deleteTexture(v.__webglTexture);
    const O = E.source, Q = m.get(O);
    delete Q[v.__cacheKey], o.memory.textures--;
  }
  function V(E) {
    const v = E.texture, O = n.get(E), Q = n.get(v);
    if (Q.__webglTexture !== void 0 && (i.deleteTexture(Q.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++)
        i.deleteFramebuffer(O.__webglFramebuffer[ne]), O.__webglDepthbuffer && i.deleteRenderbuffer(O.__webglDepthbuffer[ne]);
    else {
      if (i.deleteFramebuffer(O.__webglFramebuffer), O.__webglDepthbuffer && i.deleteRenderbuffer(O.__webglDepthbuffer), O.__webglMultisampledFramebuffer && i.deleteFramebuffer(O.__webglMultisampledFramebuffer), O.__webglColorRenderbuffer)
        for (let ne = 0; ne < O.__webglColorRenderbuffer.length; ne++)
          O.__webglColorRenderbuffer[ne] && i.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);
      O.__webglDepthRenderbuffer && i.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let ne = 0, oe = v.length; ne < oe; ne++) {
        const A = n.get(v[ne]);
        A.__webglTexture && (i.deleteTexture(A.__webglTexture), o.memory.textures--), n.remove(v[ne]);
      }
    n.remove(v), n.remove(E);
  }
  let ie = 0;
  function Y() {
    ie = 0;
  }
  function q() {
    const E = ie;
    return E >= c && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + c), ie += 1, E;
  }
  function Z(E) {
    const v = [];
    return v.push(E.wrapS), v.push(E.wrapT), v.push(E.wrapR || 0), v.push(E.magFilter), v.push(E.minFilter), v.push(E.anisotropy), v.push(E.internalFormat), v.push(E.format), v.push(E.type), v.push(E.generateMipmaps), v.push(E.premultiplyAlpha), v.push(E.flipY), v.push(E.unpackAlignment), v.push(E.colorSpace), v.join();
  }
  function te(E, v) {
    const O = n.get(E);
    if (E.isVideoTexture && ke(E), E.isRenderTargetTexture === !1 && E.version > 0 && O.__version !== E.version) {
      const Q = E.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ye(O, E, v);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, O.__webglTexture, i.TEXTURE0 + v);
  }
  function me(E, v) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      ye(O, E, v);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, O.__webglTexture, i.TEXTURE0 + v);
  }
  function ue(E, v) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      ye(O, E, v);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, O.__webglTexture, i.TEXTURE0 + v);
  }
  function z(E, v) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      Ee(O, E, v);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + v);
  }
  const K = {
    [zr]: i.REPEAT,
    [Ut]: i.CLAMP_TO_EDGE,
    [Gr]: i.MIRRORED_REPEAT
  }, se = {
    [dt]: i.NEAREST,
    [os]: i.NEAREST_MIPMAP_NEAREST,
    [rr]: i.NEAREST_MIPMAP_LINEAR,
    [Tt]: i.LINEAR,
    [Jo]: i.LINEAR_MIPMAP_NEAREST,
    [fi]: i.LINEAR_MIPMAP_LINEAR
  };
  function ce(E, v, O) {
    if (O ? (i.texParameteri(E, i.TEXTURE_WRAP_S, K[v.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, K[v.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, K[v.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, se[v.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, se[v.minFilter])) : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (v.wrapS !== Ut || v.wrapT !== Ut) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(E, i.TEXTURE_MAG_FILTER, b(v.magFilter)), i.texParameteri(E, i.TEXTURE_MIN_FILTER, b(v.minFilter)), v.minFilter !== dt && v.minFilter !== Tt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === dt || v.minFilter !== rr && v.minFilter !== fi || v.type === Mn && e.has("OES_texture_float_linear") === !1 || a === !1 && v.type === pi && e.has("OES_texture_half_float_linear") === !1)
        return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (i.texParameterf(E, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function L(E, v) {
    let O = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, v.addEventListener("dispose", $));
    const Q = v.source;
    let ne = m.get(Q);
    ne === void 0 && (ne = {}, m.set(Q, ne));
    const oe = Z(v);
    if (oe !== E.__cacheKey) {
      ne[oe] === void 0 && (ne[oe] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, O = !0), ne[oe].usedTimes++;
      const A = ne[E.__cacheKey];
      A !== void 0 && (ne[E.__cacheKey].usedTimes--, A.usedTimes === 0 && B(v)), E.__cacheKey = oe, E.__webglTexture = ne[oe].texture;
    }
    return O;
  }
  function ye(E, v, O) {
    let Q = i.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (Q = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (Q = i.TEXTURE_3D);
    const ne = L(E, v), oe = v.source;
    t.bindTexture(Q, E.__webglTexture, i.TEXTURE0 + O);
    const A = n.get(oe);
    if (oe.version !== A.__version || ne === !0) {
      t.activeTexture(i.TEXTURE0 + O), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const j = y(v) && w(v.image) === !1;
      let F = M(v.image, j, !1, u);
      F = rt(v, F);
      const le = w(F) || a, fe = s.convert(v.format, v.colorSpace);
      let ge = s.convert(v.type), he = k(v.internalFormat, fe, ge, v.colorSpace);
      ce(Q, v, le);
      let pe;
      const Te = v.mipmaps, Pe = a && v.isVideoTexture !== !0, je = A.__version === void 0 || ne === !0, C = g(v, F, le);
      if (v.isDepthTexture)
        he = i.DEPTH_COMPONENT, a ? v.type === Mn ? he = i.DEPTH_COMPONENT32F : v.type === xn ? he = i.DEPTH_COMPONENT24 : v.type === Kn ? he = i.DEPTH24_STENCIL8 : he = i.DEPTH_COMPONENT16 : v.type === Mn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === Sn && he === i.DEPTH_COMPONENT && v.type !== Fa && v.type !== xn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = xn, ge = s.convert(v.type)), v.format === ei && he === i.DEPTH_COMPONENT && (he = i.DEPTH_STENCIL, v.type !== Kn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Kn, ge = s.convert(v.type))), je && (Pe ? t.texStorage2D(i.TEXTURE_2D, 1, he, F.width, F.height) : t.texImage2D(i.TEXTURE_2D, 0, he, F.width, F.height, 0, fe, ge, null));
      else if (v.isDataTexture)
        if (Te.length > 0 && le) {
          Pe && je && t.texStorage2D(i.TEXTURE_2D, C, he, Te[0].width, Te[0].height);
          for (let G = 0, ee = Te.length; G < ee; G++)
            pe = Te[G], Pe ? t.texSubImage2D(i.TEXTURE_2D, G, 0, 0, pe.width, pe.height, fe, ge, pe.data) : t.texImage2D(i.TEXTURE_2D, G, he, pe.width, pe.height, 0, fe, ge, pe.data);
          v.generateMipmaps = !1;
        } else
          Pe ? (je && t.texStorage2D(i.TEXTURE_2D, C, he, F.width, F.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, F.width, F.height, fe, ge, F.data)) : t.texImage2D(i.TEXTURE_2D, 0, he, F.width, F.height, 0, fe, ge, F.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Pe && je && t.texStorage3D(i.TEXTURE_2D_ARRAY, C, he, Te[0].width, Te[0].height, F.depth);
          for (let G = 0, ee = Te.length; G < ee; G++)
            pe = Te[G], v.format !== It ? fe !== null ? Pe ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, G, 0, 0, 0, pe.width, pe.height, F.depth, fe, pe.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, G, he, pe.width, pe.height, F.depth, 0, pe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pe ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, G, 0, 0, 0, pe.width, pe.height, F.depth, fe, ge, pe.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, G, he, pe.width, pe.height, F.depth, 0, fe, ge, pe.data);
        } else {
          Pe && je && t.texStorage2D(i.TEXTURE_2D, C, he, Te[0].width, Te[0].height);
          for (let G = 0, ee = Te.length; G < ee; G++)
            pe = Te[G], v.format !== It ? fe !== null ? Pe ? t.compressedTexSubImage2D(i.TEXTURE_2D, G, 0, 0, pe.width, pe.height, fe, pe.data) : t.compressedTexImage2D(i.TEXTURE_2D, G, he, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pe ? t.texSubImage2D(i.TEXTURE_2D, G, 0, 0, pe.width, pe.height, fe, ge, pe.data) : t.texImage2D(i.TEXTURE_2D, G, he, pe.width, pe.height, 0, fe, ge, pe.data);
        }
      else if (v.isDataArrayTexture)
        Pe ? (je && t.texStorage3D(i.TEXTURE_2D_ARRAY, C, he, F.width, F.height, F.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, F.width, F.height, F.depth, fe, ge, F.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, he, F.width, F.height, F.depth, 0, fe, ge, F.data);
      else if (v.isData3DTexture)
        Pe ? (je && t.texStorage3D(i.TEXTURE_3D, C, he, F.width, F.height, F.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, F.width, F.height, F.depth, fe, ge, F.data)) : t.texImage3D(i.TEXTURE_3D, 0, he, F.width, F.height, F.depth, 0, fe, ge, F.data);
      else if (v.isFramebufferTexture) {
        if (je)
          if (Pe)
            t.texStorage2D(i.TEXTURE_2D, C, he, F.width, F.height);
          else {
            let G = F.width, ee = F.height;
            for (let de = 0; de < C; de++)
              t.texImage2D(i.TEXTURE_2D, de, he, G, ee, 0, fe, ge, null), G >>= 1, ee >>= 1;
          }
      } else if (Te.length > 0 && le) {
        Pe && je && t.texStorage2D(i.TEXTURE_2D, C, he, Te[0].width, Te[0].height);
        for (let G = 0, ee = Te.length; G < ee; G++)
          pe = Te[G], Pe ? t.texSubImage2D(i.TEXTURE_2D, G, 0, 0, fe, ge, pe) : t.texImage2D(i.TEXTURE_2D, G, he, fe, ge, pe);
        v.generateMipmaps = !1;
      } else
        Pe ? (je && t.texStorage2D(i.TEXTURE_2D, C, he, F.width, F.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, fe, ge, F)) : t.texImage2D(i.TEXTURE_2D, 0, he, fe, ge, F);
      R(v, le) && D(Q), A.__version = oe.version, v.onUpdate && v.onUpdate(v);
    }
    E.__version = v.version;
  }
  function Ee(E, v, O) {
    if (v.image.length !== 6)
      return;
    const Q = L(E, v), ne = v.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + O);
    const oe = n.get(ne);
    if (ne.version !== oe.__version || Q === !0) {
      t.activeTexture(i.TEXTURE0 + O), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const A = v.isCompressedTexture || v.image[0].isCompressedTexture, j = v.image[0] && v.image[0].isDataTexture, F = [];
      for (let G = 0; G < 6; G++)
        !A && !j ? F[G] = M(v.image[G], !1, !0, l) : F[G] = j ? v.image[G].image : v.image[G], F[G] = rt(v, F[G]);
      const le = F[0], fe = w(le) || a, ge = s.convert(v.format, v.colorSpace), he = s.convert(v.type), pe = k(v.internalFormat, ge, he, v.colorSpace), Te = a && v.isVideoTexture !== !0, Pe = oe.__version === void 0 || Q === !0;
      let je = g(v, le, fe);
      ce(i.TEXTURE_CUBE_MAP, v, fe);
      let C;
      if (A) {
        Te && Pe && t.texStorage2D(i.TEXTURE_CUBE_MAP, je, pe, le.width, le.height);
        for (let G = 0; G < 6; G++) {
          C = F[G].mipmaps;
          for (let ee = 0; ee < C.length; ee++) {
            const de = C[ee];
            v.format !== It ? ge !== null ? Te ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee, 0, 0, de.width, de.height, ge, de.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee, pe, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Te ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee, 0, 0, de.width, de.height, ge, he, de.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee, pe, de.width, de.height, 0, ge, he, de.data);
          }
        }
      } else {
        C = v.mipmaps, Te && Pe && (C.length > 0 && je++, t.texStorage2D(i.TEXTURE_CUBE_MAP, je, pe, F[0].width, F[0].height));
        for (let G = 0; G < 6; G++)
          if (j) {
            Te ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, 0, 0, F[G].width, F[G].height, ge, he, F[G].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, pe, F[G].width, F[G].height, 0, ge, he, F[G].data);
            for (let ee = 0; ee < C.length; ee++) {
              const _e = C[ee].image[G].image;
              Te ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee + 1, 0, 0, _e.width, _e.height, ge, he, _e.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee + 1, pe, _e.width, _e.height, 0, ge, he, _e.data);
            }
          } else {
            Te ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, 0, 0, ge, he, F[G]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, pe, ge, he, F[G]);
            for (let ee = 0; ee < C.length; ee++) {
              const de = C[ee];
              Te ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee + 1, 0, 0, ge, he, de.image[G]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ee + 1, pe, ge, he, de.image[G]);
            }
          }
      }
      R(v, fe) && D(i.TEXTURE_CUBE_MAP), oe.__version = ne.version, v.onUpdate && v.onUpdate(v);
    }
    E.__version = v.version;
  }
  function re(E, v, O, Q, ne) {
    const oe = s.convert(O.format, O.colorSpace), A = s.convert(O.type), j = k(O.internalFormat, oe, A, O.colorSpace);
    n.get(v).__hasExternalTextures || (ne === i.TEXTURE_3D || ne === i.TEXTURE_2D_ARRAY ? t.texImage3D(ne, 0, j, v.width, v.height, v.depth, 0, oe, A, null) : t.texImage2D(ne, 0, j, v.width, v.height, 0, oe, A, null)), t.bindFramebuffer(i.FRAMEBUFFER, E), Oe(v) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, ne, n.get(O).__webglTexture, 0, qe(v)) : (ne === i.TEXTURE_2D || ne >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ne <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Q, ne, n.get(O).__webglTexture, 0), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Me(E, v, O) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), v.depthBuffer && !v.stencilBuffer) {
      let Q = i.DEPTH_COMPONENT16;
      if (O || Oe(v)) {
        const ne = v.depthTexture;
        ne && ne.isDepthTexture && (ne.type === Mn ? Q = i.DEPTH_COMPONENT32F : ne.type === xn && (Q = i.DEPTH_COMPONENT24));
        const oe = qe(v);
        Oe(v) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, oe, Q, v.width, v.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, oe, Q, v.width, v.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, Q, v.width, v.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, E);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const Q = qe(v);
      O && Oe(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Q, i.DEPTH24_STENCIL8, v.width, v.height) : Oe(v) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Q, i.DEPTH24_STENCIL8, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, E);
    } else {
      const Q = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ne = 0; ne < Q.length; ne++) {
        const oe = Q[ne], A = s.convert(oe.format, oe.colorSpace), j = s.convert(oe.type), F = k(oe.internalFormat, A, j, oe.colorSpace), le = qe(v);
        O && Oe(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, le, F, v.width, v.height) : Oe(v) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, le, F, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, F, v.width, v.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Be(E, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), te(v.depthTexture, 0);
    const Q = n.get(v.depthTexture).__webglTexture, ne = qe(v);
    if (v.depthTexture.format === Sn)
      Oe(v) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0, ne) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0);
    else if (v.depthTexture.format === ei)
      Oe(v) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0, ne) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ve(E) {
    const v = n.get(E), O = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Be(v.__webglFramebuffer, E);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[Q]), v.__webglDepthbuffer[Q] = i.createRenderbuffer(), Me(v.__webglDepthbuffer[Q], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = i.createRenderbuffer(), Me(v.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Re(E, v, O) {
    const Q = n.get(E);
    v !== void 0 && re(Q.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D), O !== void 0 && ve(E);
  }
  function Xe(E) {
    const v = E.texture, O = n.get(E), Q = n.get(v);
    E.addEventListener("dispose", J), E.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = i.createTexture()), Q.__version = v.version, o.memory.textures++);
    const ne = E.isWebGLCubeRenderTarget === !0, oe = E.isWebGLMultipleRenderTargets === !0, A = w(E) || a;
    if (ne) {
      O.__webglFramebuffer = [];
      for (let j = 0; j < 6; j++)
        O.__webglFramebuffer[j] = i.createFramebuffer();
    } else {
      if (O.__webglFramebuffer = i.createFramebuffer(), oe)
        if (r.drawBuffers) {
          const j = E.texture;
          for (let F = 0, le = j.length; F < le; F++) {
            const fe = n.get(j[F]);
            fe.__webglTexture === void 0 && (fe.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && E.samples > 0 && Oe(E) === !1) {
        const j = oe ? v : [v];
        O.__webglMultisampledFramebuffer = i.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let F = 0; F < j.length; F++) {
          const le = j[F];
          O.__webglColorRenderbuffer[F] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[F]);
          const fe = s.convert(le.format, le.colorSpace), ge = s.convert(le.type), he = k(le.internalFormat, fe, ge, le.colorSpace, E.isXRRenderTarget === !0), pe = qe(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, pe, he, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + F, i.RENDERBUFFER, O.__webglColorRenderbuffer[F]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (O.__webglDepthRenderbuffer = i.createRenderbuffer(), Me(O.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ne) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Q.__webglTexture), ce(i.TEXTURE_CUBE_MAP, v, A);
      for (let j = 0; j < 6; j++)
        re(O.__webglFramebuffer[j], E, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + j);
      R(v, A) && D(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (oe) {
      const j = E.texture;
      for (let F = 0, le = j.length; F < le; F++) {
        const fe = j[F], ge = n.get(fe);
        t.bindTexture(i.TEXTURE_2D, ge.__webglTexture), ce(i.TEXTURE_2D, fe, A), re(O.__webglFramebuffer, E, fe, i.COLOR_ATTACHMENT0 + F, i.TEXTURE_2D), R(fe, A) && D(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let j = i.TEXTURE_2D;
      (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (a ? j = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(j, Q.__webglTexture), ce(j, v, A), re(O.__webglFramebuffer, E, v, i.COLOR_ATTACHMENT0, j), R(v, A) && D(j), t.unbindTexture();
    }
    E.depthBuffer && ve(E);
  }
  function We(E) {
    const v = w(E) || a, O = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let Q = 0, ne = O.length; Q < ne; Q++) {
      const oe = O[Q];
      if (R(oe, v)) {
        const A = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, j = n.get(oe).__webglTexture;
        t.bindTexture(A, j), D(A), t.unbindTexture();
      }
    }
  }
  function $e(E) {
    if (a && E.samples > 0 && Oe(E) === !1) {
      const v = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], O = E.width, Q = E.height;
      let ne = i.COLOR_BUFFER_BIT;
      const oe = [], A = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, j = n.get(E), F = E.isWebGLMultipleRenderTargets === !0;
      if (F)
        for (let le = 0; le < v.length; le++)
          t.bindFramebuffer(i.FRAMEBUFFER, j.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, j.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, j.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, j.__webglFramebuffer);
      for (let le = 0; le < v.length; le++) {
        oe.push(i.COLOR_ATTACHMENT0 + le), E.depthBuffer && oe.push(A);
        const fe = j.__ignoreDepthValues !== void 0 ? j.__ignoreDepthValues : !1;
        if (fe === !1 && (E.depthBuffer && (ne |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && (ne |= i.STENCIL_BUFFER_BIT)), F && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, j.__webglColorRenderbuffer[le]), fe === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [A]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [A])), F) {
          const ge = n.get(v[le]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, ge, 0);
        }
        i.blitFramebuffer(0, 0, O, Q, 0, 0, O, Q, ne, i.NEAREST), p && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, oe);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), F)
        for (let le = 0; le < v.length; le++) {
          t.bindFramebuffer(i.FRAMEBUFFER, j.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.RENDERBUFFER, j.__webglColorRenderbuffer[le]);
          const fe = n.get(v[le]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, j.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.TEXTURE_2D, fe, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, j.__webglMultisampledFramebuffer);
    }
  }
  function qe(E) {
    return Math.min(f, E.samples);
  }
  function Oe(E) {
    const v = n.get(E);
    return a && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function ke(E) {
    const v = o.render.frame;
    _.get(E) !== v && (_.set(E, v), E.update());
  }
  function rt(E, v) {
    const O = E.colorSpace, Q = E.format, ne = E.type;
    return E.isCompressedTexture === !0 || E.format === Hr || O !== Ht && O !== yn && (O === we ? a === !1 ? e.has("EXT_sRGB") === !0 && Q === It ? (E.format = Hr, E.minFilter = Tt, E.generateMipmaps = !1) : v = Ga.sRGBToLinear(v) : (Q !== It || ne !== Tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), v;
  }
  this.allocateTextureUnit = q, this.resetTextureUnits = Y, this.setTexture2D = te, this.setTexture2DArray = me, this.setTexture3D = ue, this.setTextureCube = z, this.rebindTextures = Re, this.setupRenderTarget = Xe, this.updateRenderTargetMipmap = We, this.updateMultisampleRenderTarget = $e, this.setupDepthRenderbuffer = ve, this.setupFrameBufferTexture = re, this.useMultisampledRTT = Oe;
}
function pf(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = yn) {
    let a;
    if (s === Tn)
      return i.UNSIGNED_BYTE;
    if (s === nl)
      return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === il)
      return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === Qo)
      return i.BYTE;
    if (s === el)
      return i.SHORT;
    if (s === Fa)
      return i.UNSIGNED_SHORT;
    if (s === tl)
      return i.INT;
    if (s === xn)
      return i.UNSIGNED_INT;
    if (s === Mn)
      return i.FLOAT;
    if (s === pi)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === rl)
      return i.ALPHA;
    if (s === It)
      return i.RGBA;
    if (s === sl)
      return i.LUMINANCE;
    if (s === al)
      return i.LUMINANCE_ALPHA;
    if (s === Sn)
      return i.DEPTH_COMPONENT;
    if (s === ei)
      return i.DEPTH_STENCIL;
    if (s === Hr)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === ol)
      return i.RED;
    if (s === ll)
      return i.RED_INTEGER;
    if (s === cl)
      return i.RG;
    if (s === ul)
      return i.RG_INTEGER;
    if (s === hl)
      return i.RGBA_INTEGER;
    if (s === sr || s === ar || s === or || s === lr)
      if (o === we)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === sr)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === ar)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === or)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === lr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === sr)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ar)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === or)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === lr)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === ls || s === cs || s === us || s === hs)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === ls)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === cs)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === us)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === hs)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === dl)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === ds || s === fs)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === ds)
          return o === we ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === fs)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === ps || s === ms || s === gs || s === _s || s === vs || s === xs || s === Ms || s === Ss || s === Es || s === ys || s === Ts || s === bs || s === As || s === ws)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === ps)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === ms)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === gs)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === _s)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === vs)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === xs)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ms)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Ss)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Es)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === ys)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ts)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === bs)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === As)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === ws)
          return o === we ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === cr)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === cr)
          return o === we ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === fl || s === Rs || s === Cs || s === Ls)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === cr)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === Rs)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Cs)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Ls)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Kn ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class mf extends bt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Vi extends lt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const gf = { type: "move" };
class Ur {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Vi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Vi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Vi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const x of e.hand.values()) {
          const m = t.getJointPose(x, n), h = this._getHandJoint(l, x);
          m !== null && (h.matrix.fromArray(m.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = m.radius), h.visible = m !== null;
        }
        const u = l.joints["index-finger-tip"], f = l.joints["thumb-tip"], d = u.position.distanceTo(f.position), p = 0.02, _ = 5e-3;
        l.inputState.pinching && d > p + _ ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= p - _ && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(gf)));
    }
    return a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Vi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class _f extends pt {
  constructor(e, t, n, r, s, o, a, c, l, u) {
    if (u = u !== void 0 ? u : Sn, u !== Sn && u !== ei)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Sn && (n = xn), n === void 0 && u === ei && (n = Kn), super(null, r, s, o, a, c, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : dt, this.minFilter = c !== void 0 ? c : dt, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class vf extends ln {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", c = 1, l = null, u = null, f = null, d = null, p = null, _ = null;
    const x = t.getContextAttributes();
    let m = null, h = null;
    const T = [], M = [], w = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map(), R = new bt();
    R.layers.enable(1), R.viewport = new it();
    const D = new bt();
    D.layers.enable(2), D.viewport = new it();
    const k = [R, D], g = new mf();
    g.layers.enable(1), g.layers.enable(2);
    let b = null, $ = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(z) {
      let K = T[z];
      return K === void 0 && (K = new Ur(), T[z] = K), K.getTargetRaySpace();
    }, this.getControllerGrip = function(z) {
      let K = T[z];
      return K === void 0 && (K = new Ur(), T[z] = K), K.getGripSpace();
    }, this.getHand = function(z) {
      let K = T[z];
      return K === void 0 && (K = new Ur(), T[z] = K), K.getHandSpace();
    };
    function J(z) {
      const K = M.indexOf(z.inputSource);
      if (K === -1)
        return;
      const se = T[K];
      se !== void 0 && (se.update(z.inputSource, z.frame, l || o), se.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function I() {
      r.removeEventListener("select", J), r.removeEventListener("selectstart", J), r.removeEventListener("selectend", J), r.removeEventListener("squeeze", J), r.removeEventListener("squeezestart", J), r.removeEventListener("squeezeend", J), r.removeEventListener("end", I), r.removeEventListener("inputsourceschange", B);
      for (let z = 0; z < T.length; z++) {
        const K = M[z];
        K !== null && (M[z] = null, T[z].disconnect(K));
      }
      b = null, $ = null, e.setRenderTarget(m), p = null, d = null, f = null, r = null, h = null, ue.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(z) {
      s = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(z) {
      a = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(z) {
      l = z;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(z) {
      if (r = z, r !== null) {
        if (m = e.getRenderTarget(), r.addEventListener("select", J), r.addEventListener("selectstart", J), r.addEventListener("selectend", J), r.addEventListener("squeeze", J), r.addEventListener("squeezestart", J), r.addEventListener("squeezeend", J), r.addEventListener("end", I), r.addEventListener("inputsourceschange", B), x.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const K = {
            antialias: r.renderState.layers === void 0 ? x.antialias : !0,
            alpha: !0,
            depth: x.depth,
            stencil: x.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, K), r.updateRenderState({ baseLayer: p }), h = new bn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: It,
              type: Tn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: x.stencil
            }
          );
        } else {
          let K = null, se = null, ce = null;
          x.depth && (ce = x.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, K = x.stencil ? ei : Sn, se = x.stencil ? Kn : xn);
          const L = {
            colorFormat: t.RGBA8,
            depthFormat: ce,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), d = f.createProjectionLayer(L), r.updateRenderState({ layers: [d] }), h = new bn(
            d.textureWidth,
            d.textureHeight,
            {
              format: It,
              type: Tn,
              depthTexture: new _f(d.textureWidth, d.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, K),
              stencilBuffer: x.stencil,
              colorSpace: e.outputColorSpace,
              samples: x.antialias ? 4 : 0
            }
          );
          const ye = e.properties.get(h);
          ye.__ignoreDepthValues = d.ignoreDepthValues;
        }
        h.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await r.requestReferenceSpace(a), ue.setContext(r), ue.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function B(z) {
      for (let K = 0; K < z.removed.length; K++) {
        const se = z.removed[K], ce = M.indexOf(se);
        ce >= 0 && (M[ce] = null, T[ce].disconnect(se));
      }
      for (let K = 0; K < z.added.length; K++) {
        const se = z.added[K];
        let ce = M.indexOf(se);
        if (ce === -1) {
          for (let ye = 0; ye < T.length; ye++)
            if (ye >= M.length) {
              M.push(se), ce = ye;
              break;
            } else if (M[ye] === null) {
              M[ye] = se, ce = ye;
              break;
            }
          if (ce === -1)
            break;
        }
        const L = T[ce];
        L && L.connect(se);
      }
    }
    const V = new P(), ie = new P();
    function Y(z, K, se) {
      V.setFromMatrixPosition(K.matrixWorld), ie.setFromMatrixPosition(se.matrixWorld);
      const ce = V.distanceTo(ie), L = K.projectionMatrix.elements, ye = se.projectionMatrix.elements, Ee = L[14] / (L[10] - 1), re = L[14] / (L[10] + 1), Me = (L[9] + 1) / L[5], Be = (L[9] - 1) / L[5], ve = (L[8] - 1) / L[0], Re = (ye[8] + 1) / ye[0], Xe = Ee * ve, We = Ee * Re, $e = ce / (-ve + Re), qe = $e * -ve;
      K.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(qe), z.translateZ($e), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const Oe = Ee + $e, ke = re + $e, rt = Xe - qe, E = We + (ce - qe), v = Me * re / ke * Oe, O = Be * re / ke * Oe;
      z.projectionMatrix.makePerspective(rt, E, v, O, Oe, ke), z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
    }
    function q(z, K) {
      K === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(K.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function(z) {
      if (r === null)
        return;
      g.near = D.near = R.near = z.near, g.far = D.far = R.far = z.far, (b !== g.near || $ !== g.far) && (r.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), b = g.near, $ = g.far);
      const K = z.parent, se = g.cameras;
      q(g, K);
      for (let ce = 0; ce < se.length; ce++)
        q(se[ce], K);
      se.length === 2 ? Y(g, R, D) : g.projectionMatrix.copy(R.projectionMatrix), Z(z, g, K);
    };
    function Z(z, K, se) {
      se === null ? z.matrix.copy(K.matrixWorld) : (z.matrix.copy(se.matrixWorld), z.matrix.invert(), z.matrix.multiply(K.matrixWorld)), z.matrix.decompose(z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0);
      const ce = z.children;
      for (let L = 0, ye = ce.length; L < ye; L++)
        ce[L].updateMatrixWorld(!0);
      z.projectionMatrix.copy(K.projectionMatrix), z.projectionMatrixInverse.copy(K.projectionMatrixInverse), z.isPerspectiveCamera && (z.fov = Vr * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(d === null && p === null))
        return c;
    }, this.setFoveation = function(z) {
      c = z, d !== null && (d.fixedFoveation = z), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = z);
    }, this.getPlanes = function() {
      return w;
    };
    let te = null;
    function me(z, K) {
      if (u = K.getViewerPose(l || o), _ = K, u !== null) {
        const se = u.views;
        p !== null && (e.setRenderTargetFramebuffer(h, p.framebuffer), e.setRenderTarget(h));
        let ce = !1;
        se.length !== g.cameras.length && (g.cameras.length = 0, ce = !0);
        for (let L = 0; L < se.length; L++) {
          const ye = se[L];
          let Ee = null;
          if (p !== null)
            Ee = p.getViewport(ye);
          else {
            const Me = f.getViewSubImage(d, ye);
            Ee = Me.viewport, L === 0 && (e.setRenderTargetTextures(
              h,
              Me.colorTexture,
              d.ignoreDepthValues ? void 0 : Me.depthStencilTexture
            ), e.setRenderTarget(h));
          }
          let re = k[L];
          re === void 0 && (re = new bt(), re.layers.enable(L), re.viewport = new it(), k[L] = re), re.matrix.fromArray(ye.transform.matrix), re.matrix.decompose(re.position, re.quaternion, re.scale), re.projectionMatrix.fromArray(ye.projectionMatrix), re.projectionMatrixInverse.copy(re.projectionMatrix).invert(), re.viewport.set(Ee.x, Ee.y, Ee.width, Ee.height), L === 0 && (g.matrix.copy(re.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), ce === !0 && g.cameras.push(re);
        }
      }
      for (let se = 0; se < T.length; se++) {
        const ce = M[se], L = T[se];
        ce !== null && L !== void 0 && L.update(ce, K, l || o);
      }
      if (te && te(z, K), K.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: K.detectedPlanes });
        let se = null;
        for (const ce of w)
          K.detectedPlanes.has(ce) || (se === null && (se = []), se.push(ce));
        if (se !== null)
          for (const ce of se)
            w.delete(ce), y.delete(ce), n.dispatchEvent({ type: "planeremoved", data: ce });
        for (const ce of K.detectedPlanes)
          if (!w.has(ce))
            w.add(ce), y.set(ce, K.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: ce });
          else {
            const L = y.get(ce);
            ce.lastChangedTime > L && (y.set(ce, ce.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: ce }));
          }
      }
      _ = null;
    }
    const ue = new Za();
    ue.setAnimationLoop(me), this.setAnimationLoop = function(z) {
      te = z;
    }, this.dispose = function() {
    };
  }
}
function xf(i, e) {
  function t(m, h) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, ja(i)), h.isFog ? (m.fogNear.value = h.near, m.fogFar.value = h.far) : h.isFogExp2 && (m.fogDensity.value = h.density);
  }
  function r(m, h, T, M, w) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(m, h) : h.isMeshToonMaterial ? (s(m, h), f(m, h)) : h.isMeshPhongMaterial ? (s(m, h), u(m, h)) : h.isMeshStandardMaterial ? (s(m, h), d(m, h), h.isMeshPhysicalMaterial && p(m, h, w)) : h.isMeshMatcapMaterial ? (s(m, h), _(m, h)) : h.isMeshDepthMaterial ? s(m, h) : h.isMeshDistanceMaterial ? (s(m, h), x(m, h)) : h.isMeshNormalMaterial ? s(m, h) : h.isLineBasicMaterial ? (o(m, h), h.isLineDashedMaterial && a(m, h)) : h.isPointsMaterial ? c(m, h, T, M) : h.isSpriteMaterial ? l(m, h) : h.isShadowMaterial ? (m.color.value.copy(h.color), m.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(m, h) {
    m.opacity.value = h.opacity, h.color && m.diffuse.value.copy(h.color), h.emissive && m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (m.map.value = h.map, t(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, t(h.alphaMap, m.alphaMapTransform)), h.bumpMap && (m.bumpMap.value = h.bumpMap, t(h.bumpMap, m.bumpMapTransform), m.bumpScale.value = h.bumpScale, h.side === mt && (m.bumpScale.value *= -1)), h.normalMap && (m.normalMap.value = h.normalMap, t(h.normalMap, m.normalMapTransform), m.normalScale.value.copy(h.normalScale), h.side === mt && m.normalScale.value.negate()), h.displacementMap && (m.displacementMap.value = h.displacementMap, t(h.displacementMap, m.displacementMapTransform), m.displacementScale.value = h.displacementScale, m.displacementBias.value = h.displacementBias), h.emissiveMap && (m.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, m.emissiveMapTransform)), h.specularMap && (m.specularMap.value = h.specularMap, t(h.specularMap, m.specularMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
    const T = e.get(h).envMap;
    if (T && (m.envMap.value = T, m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = h.reflectivity, m.ior.value = h.ior, m.refractionRatio.value = h.refractionRatio), h.lightMap) {
      m.lightMap.value = h.lightMap;
      const M = i.useLegacyLights === !0 ? Math.PI : 1;
      m.lightMapIntensity.value = h.lightMapIntensity * M, t(h.lightMap, m.lightMapTransform);
    }
    h.aoMap && (m.aoMap.value = h.aoMap, m.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, m.aoMapTransform));
  }
  function o(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, h.map && (m.map.value = h.map, t(h.map, m.mapTransform));
  }
  function a(m, h) {
    m.dashSize.value = h.dashSize, m.totalSize.value = h.dashSize + h.gapSize, m.scale.value = h.scale;
  }
  function c(m, h, T, M) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.size.value = h.size * T, m.scale.value = M * 0.5, h.map && (m.map.value = h.map, t(h.map, m.uvTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function l(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.rotation.value = h.rotation, h.map && (m.map.value = h.map, t(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function u(m, h) {
    m.specular.value.copy(h.specular), m.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function f(m, h) {
    h.gradientMap && (m.gradientMap.value = h.gradientMap);
  }
  function d(m, h) {
    m.metalness.value = h.metalness, h.metalnessMap && (m.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, m.metalnessMapTransform)), m.roughness.value = h.roughness, h.roughnessMap && (m.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, m.roughnessMapTransform)), e.get(h).envMap && (m.envMapIntensity.value = h.envMapIntensity);
  }
  function p(m, h, T) {
    m.ior.value = h.ior, h.sheen > 0 && (m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), m.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (m.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, m.sheenColorMapTransform)), h.sheenRoughnessMap && (m.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, m.sheenRoughnessMapTransform))), h.clearcoat > 0 && (m.clearcoat.value = h.clearcoat, m.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (m.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, m.clearcoatMapTransform)), h.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (m.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === mt && m.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (m.iridescence.value = h.iridescence, m.iridescenceIOR.value = h.iridescenceIOR, m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (m.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, m.iridescenceMapTransform)), h.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), h.transmission > 0 && (m.transmission.value = h.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), h.transmissionMap && (m.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, m.transmissionMapTransform)), m.thickness.value = h.thickness, h.thicknessMap && (m.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = h.attenuationDistance, m.attenuationColor.value.copy(h.attenuationColor)), m.specularIntensity.value = h.specularIntensity, m.specularColor.value.copy(h.specularColor), h.specularColorMap && (m.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, m.specularColorMapTransform)), h.specularIntensityMap && (m.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, h) {
    h.matcap && (m.matcap.value = h.matcap);
  }
  function x(m, h) {
    const T = e.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Mf(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(T, M) {
    const w = M.program;
    n.uniformBlockBinding(T, w);
  }
  function l(T, M) {
    let w = r[T.id];
    w === void 0 && (_(T), w = u(T), r[T.id] = w, T.addEventListener("dispose", m));
    const y = M.program;
    n.updateUBOMapping(T, y);
    const R = e.render.frame;
    s[T.id] !== R && (d(T), s[T.id] = R);
  }
  function u(T) {
    const M = f();
    T.__bindingPointIndex = M;
    const w = i.createBuffer(), y = T.__size, R = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, w), i.bufferData(i.UNIFORM_BUFFER, y, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, M, w), w;
  }
  function f() {
    for (let T = 0; T < a; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const M = r[T.id], w = T.uniforms, y = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, M);
    for (let R = 0, D = w.length; R < D; R++) {
      const k = w[R];
      if (p(k, R, y) === !0) {
        const g = k.__offset, b = Array.isArray(k.value) ? k.value : [k.value];
        let $ = 0;
        for (let J = 0; J < b.length; J++) {
          const I = b[J], B = x(I);
          typeof I == "number" ? (k.__data[0] = I, i.bufferSubData(i.UNIFORM_BUFFER, g + $, k.__data)) : I.isMatrix3 ? (k.__data[0] = I.elements[0], k.__data[1] = I.elements[1], k.__data[2] = I.elements[2], k.__data[3] = I.elements[0], k.__data[4] = I.elements[3], k.__data[5] = I.elements[4], k.__data[6] = I.elements[5], k.__data[7] = I.elements[0], k.__data[8] = I.elements[6], k.__data[9] = I.elements[7], k.__data[10] = I.elements[8], k.__data[11] = I.elements[0]) : (I.toArray(k.__data, $), $ += B.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(i.UNIFORM_BUFFER, g, k.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(T, M, w) {
    const y = T.value;
    if (w[M] === void 0) {
      if (typeof y == "number")
        w[M] = y;
      else {
        const R = Array.isArray(y) ? y : [y], D = [];
        for (let k = 0; k < R.length; k++)
          D.push(R[k].clone());
        w[M] = D;
      }
      return !0;
    } else if (typeof y == "number") {
      if (w[M] !== y)
        return w[M] = y, !0;
    } else {
      const R = Array.isArray(w[M]) ? w[M] : [w[M]], D = Array.isArray(y) ? y : [y];
      for (let k = 0; k < R.length; k++) {
        const g = R[k];
        if (g.equals(D[k]) === !1)
          return g.copy(D[k]), !0;
      }
    }
    return !1;
  }
  function _(T) {
    const M = T.uniforms;
    let w = 0;
    const y = 16;
    let R = 0;
    for (let D = 0, k = M.length; D < k; D++) {
      const g = M[D], b = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, $ = Array.isArray(g.value) ? g.value : [g.value];
      for (let J = 0, I = $.length; J < I; J++) {
        const B = $[J], V = x(B);
        b.boundary += V.boundary, b.storage += V.storage;
      }
      if (g.__data = new Float32Array(b.storage / Float32Array.BYTES_PER_ELEMENT), g.__offset = w, D > 0) {
        R = w % y;
        const J = y - R;
        R !== 0 && J - b.boundary < 0 && (w += y - R, g.__offset = w);
      }
      w += b.storage;
    }
    return R = w % y, R > 0 && (w += y - R), T.__size = w, T.__cache = {}, this;
  }
  function x(T) {
    const M = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" ? (M.boundary = 4, M.storage = 4) : T.isVector2 ? (M.boundary = 8, M.storage = 8) : T.isVector3 || T.isColor ? (M.boundary = 16, M.storage = 12) : T.isVector4 ? (M.boundary = 16, M.storage = 16) : T.isMatrix3 ? (M.boundary = 48, M.storage = 48) : T.isMatrix4 ? (M.boundary = 64, M.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), M;
  }
  function m(T) {
    const M = T.target;
    M.removeEventListener("dispose", m);
    const w = o.indexOf(M.__bindingPointIndex);
    o.splice(w, 1), i.deleteBuffer(r[M.id]), delete r[M.id], delete s[M.id];
  }
  function h() {
    for (const T in r)
      i.deleteBuffer(r[T]);
    o = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
function Sf() {
  const i = ji("canvas");
  return i.style.display = "block", i;
}
class io {
  constructor(e = {}) {
    const {
      canvas: t = Sf(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    let p = null, _ = null;
    const x = [], m = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = we, this.useLegacyLights = !0, this.toneMapping = Zt, this.toneMappingExposure = 1;
    const h = this;
    let T = !1, M = 0, w = 0, y = null, R = -1, D = null;
    const k = new it(), g = new it();
    let b = null, $ = t.width, J = t.height, I = 1, B = null, V = null;
    const ie = new it(0, 0, $, J), Y = new it(0, 0, $, J);
    let q = !1;
    const Z = new Ji();
    let te = !1, me = !1, ue = null;
    const z = new Je(), K = new P(), se = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function ce() {
      return y === null ? I : 1;
    }
    let L = n;
    function ye(S, N) {
      for (let H = 0; H < S.length; H++) {
        const U = S[H], W = t.getContext(U, N);
        if (W !== null)
          return W;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${jr}`), t.addEventListener("webglcontextlost", pe, !1), t.addEventListener("webglcontextrestored", Te, !1), t.addEventListener("webglcontextcreationerror", Pe, !1), L === null) {
        const N = ["webgl2", "webgl", "experimental-webgl"];
        if (h.isWebGL1Renderer === !0 && N.shift(), L = ye(N, S), L === null)
          throw ye(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      L.getShaderPrecisionFormat === void 0 && (L.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let Ee, re, Me, Be, ve, Re, Xe, We, $e, qe, Oe, ke, rt, E, v, O, Q, ne, oe, A, j, F, le, fe;
    function ge() {
      Ee = new Ph(L), re = new bh(L, Ee, e), Ee.init(re), F = new pf(L, Ee, re), Me = new df(L, Ee, re), Be = new Ih(L), ve = new Zd(), Re = new ff(L, Ee, Me, ve, re, F, Be), Xe = new wh(h), We = new Lh(h), $e = new ql(L, re), le = new yh(L, Ee, $e, re), qe = new Dh(L, $e, Be, le), Oe = new Bh(L, qe, $e, Be), oe = new Oh(L, re, Re), O = new Ah(ve), ke = new Kd(h, Xe, We, Ee, re, le, O), rt = new xf(h, ve), E = new Qd(), v = new af(Ee, re), ne = new Eh(h, Xe, We, Me, Oe, d, c), Q = new hf(h, Oe, re), fe = new Mf(L, Be, re, Me), A = new Th(L, Ee, Be, re), j = new Uh(L, Ee, Be, re), Be.programs = ke.programs, h.capabilities = re, h.extensions = Ee, h.properties = ve, h.renderLists = E, h.shadowMap = Q, h.state = Me, h.info = Be;
    }
    ge();
    const he = new vf(h, L);
    this.xr = he, this.getContext = function() {
      return L;
    }, this.getContextAttributes = function() {
      return L.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = Ee.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = Ee.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return I;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (I = S, this.setSize($, J, !1));
    }, this.getSize = function(S) {
      return S.set($, J);
    }, this.setSize = function(S, N, H = !0) {
      if (he.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      $ = S, J = N, t.width = Math.floor(S * I), t.height = Math.floor(N * I), H === !0 && (t.style.width = S + "px", t.style.height = N + "px"), this.setViewport(0, 0, S, N);
    }, this.getDrawingBufferSize = function(S) {
      return S.set($ * I, J * I).floor();
    }, this.setDrawingBufferSize = function(S, N, H) {
      $ = S, J = N, I = H, t.width = Math.floor(S * H), t.height = Math.floor(N * H), this.setViewport(0, 0, S, N);
    }, this.getCurrentViewport = function(S) {
      return S.copy(k);
    }, this.getViewport = function(S) {
      return S.copy(ie);
    }, this.setViewport = function(S, N, H, U) {
      S.isVector4 ? ie.set(S.x, S.y, S.z, S.w) : ie.set(S, N, H, U), Me.viewport(k.copy(ie).multiplyScalar(I).floor());
    }, this.getScissor = function(S) {
      return S.copy(Y);
    }, this.setScissor = function(S, N, H, U) {
      S.isVector4 ? Y.set(S.x, S.y, S.z, S.w) : Y.set(S, N, H, U), Me.scissor(g.copy(Y).multiplyScalar(I).floor());
    }, this.getScissorTest = function() {
      return q;
    }, this.setScissorTest = function(S) {
      Me.setScissorTest(q = S);
    }, this.setOpaqueSort = function(S) {
      B = S;
    }, this.setTransparentSort = function(S) {
      V = S;
    }, this.getClearColor = function(S) {
      return S.copy(ne.getClearColor());
    }, this.setClearColor = function() {
      ne.setClearColor.apply(ne, arguments);
    }, this.getClearAlpha = function() {
      return ne.getClearAlpha();
    }, this.setClearAlpha = function() {
      ne.setClearAlpha.apply(ne, arguments);
    }, this.clear = function(S = !0, N = !0, H = !0) {
      let U = 0;
      S && (U |= L.COLOR_BUFFER_BIT), N && (U |= L.DEPTH_BUFFER_BIT), H && (U |= L.STENCIL_BUFFER_BIT), L.clear(U);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", pe, !1), t.removeEventListener("webglcontextrestored", Te, !1), t.removeEventListener("webglcontextcreationerror", Pe, !1), E.dispose(), v.dispose(), ve.dispose(), Xe.dispose(), We.dispose(), Oe.dispose(), le.dispose(), fe.dispose(), ke.dispose(), he.dispose(), he.removeEventListener("sessionstart", _e), he.removeEventListener("sessionend", He), ue && (ue.dispose(), ue = null), Ve.stop();
    };
    function pe(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function Te() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const S = Be.autoReset, N = Q.enabled, H = Q.autoUpdate, U = Q.needsUpdate, W = Q.type;
      ge(), Be.autoReset = S, Q.enabled = N, Q.autoUpdate = H, Q.needsUpdate = U, Q.type = W;
    }
    function Pe(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function je(S) {
      const N = S.target;
      N.removeEventListener("dispose", je), C(N);
    }
    function C(S) {
      G(S), ve.remove(S);
    }
    function G(S) {
      const N = ve.get(S).programs;
      N !== void 0 && (N.forEach(function(H) {
        ke.releaseProgram(H);
      }), S.isShaderMaterial && ke.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, N, H, U, W, xe) {
      N === null && (N = se);
      const Se = W.isMesh && W.matrixWorld.determinant() < 0, be = _o(S, N, H, U, W);
      Me.setMaterial(U, Se);
      let Ce = H.index, De = 1;
      U.wireframe === !0 && (Ce = qe.getWireframeAttribute(H), De = 2);
      const Ue = H.drawRange, Ie = H.attributes.position;
      let ze = Ue.start * De, ct = (Ue.start + Ue.count) * De;
      xe !== null && (ze = Math.max(ze, xe.start * De), ct = Math.min(ct, (xe.start + xe.count) * De)), Ce !== null ? (ze = Math.max(ze, 0), ct = Math.min(ct, Ce.count)) : Ie != null && (ze = Math.max(ze, 0), ct = Math.min(ct, Ie.count));
      const At = ct - ze;
      if (At < 0 || At === 1 / 0)
        return;
      le.setup(W, U, be, H, Ce);
      let un, Ke = A;
      if (Ce !== null && (un = $e.get(Ce), Ke = j, Ke.setIndex(un)), W.isMesh)
        U.wireframe === !0 ? (Me.setLineWidth(U.wireframeLinewidth * ce()), Ke.setMode(L.LINES)) : Ke.setMode(L.TRIANGLES);
      else if (W.isLine) {
        let Fe = U.linewidth;
        Fe === void 0 && (Fe = 1), Me.setLineWidth(Fe * ce()), W.isLineSegments ? Ke.setMode(L.LINES) : W.isLineLoop ? Ke.setMode(L.LINE_LOOP) : Ke.setMode(L.LINE_STRIP);
      } else
        W.isPoints ? Ke.setMode(L.POINTS) : W.isSprite && Ke.setMode(L.TRIANGLES);
      if (W.isInstancedMesh)
        Ke.renderInstances(ze, At, W.count);
      else if (H.isInstancedBufferGeometry) {
        const Fe = H._maxInstanceCount !== void 0 ? H._maxInstanceCount : 1 / 0, er = Math.min(H.instanceCount, Fe);
        Ke.renderInstances(ze, At, er);
      } else
        Ke.render(ze, At);
    }, this.compile = function(S, N) {
      function H(U, W, xe) {
        U.transparent === !0 && U.side === Kt && U.forceSinglePass === !1 ? (U.side = mt, U.needsUpdate = !0, Mi(U, W, xe), U.side = an, U.needsUpdate = !0, Mi(U, W, xe), U.side = Kt) : Mi(U, W, xe);
      }
      _ = v.get(S), _.init(), m.push(_), S.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (_.pushLight(U), U.castShadow && _.pushShadow(U));
      }), _.setupLights(h.useLegacyLights), S.traverse(function(U) {
        const W = U.material;
        if (W)
          if (Array.isArray(W))
            for (let xe = 0; xe < W.length; xe++) {
              const Se = W[xe];
              H(Se, S, U);
            }
          else
            H(W, S, U);
      }), m.pop(), _ = null;
    };
    let ee = null;
    function de(S) {
      ee && ee(S);
    }
    function _e() {
      Ve.stop();
    }
    function He() {
      Ve.start();
    }
    const Ve = new Za();
    Ve.setAnimationLoop(de), typeof self < "u" && Ve.setContext(self), this.setAnimationLoop = function(S) {
      ee = S, he.setAnimationLoop(S), S === null ? Ve.stop() : Ve.start();
    }, he.addEventListener("sessionstart", _e), he.addEventListener("sessionend", He), this.render = function(S, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0)
        return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), he.enabled === !0 && he.isPresenting === !0 && (he.cameraAutoUpdate === !0 && he.updateCamera(N), N = he.getCamera()), S.isScene === !0 && S.onBeforeRender(h, S, N, y), _ = v.get(S, m.length), _.init(), m.push(_), z.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Z.setFromProjectionMatrix(z), me = this.localClippingEnabled, te = O.init(this.clippingPlanes, me), p = E.get(S, x.length), p.init(), x.push(p), st(S, N, 0, h.sortObjects), p.finish(), h.sortObjects === !0 && p.sort(B, V), te === !0 && O.beginShadows();
      const H = _.state.shadowsArray;
      if (Q.render(H, S, N), te === !0 && O.endShadows(), this.info.autoReset === !0 && this.info.reset(), ne.render(p, S), _.setupLights(h.useLegacyLights), N.isArrayCamera) {
        const U = N.cameras;
        for (let W = 0, xe = U.length; W < xe; W++) {
          const Se = U[W];
          Jt(p, S, Se, Se.viewport);
        }
      } else
        Jt(p, S, N);
      y !== null && (Re.updateMultisampleRenderTarget(y), Re.updateRenderTargetMipmap(y)), S.isScene === !0 && S.onAfterRender(h, S, N), le.resetDefaultState(), R = -1, D = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null, x.pop(), x.length > 0 ? p = x[x.length - 1] : p = null;
    };
    function st(S, N, H, U) {
      if (S.visible === !1)
        return;
      if (S.layers.test(N.layers)) {
        if (S.isGroup)
          H = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(N);
        else if (S.isLight)
          _.pushLight(S), S.castShadow && _.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || Z.intersectsSprite(S)) {
            U && K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(z);
            const Se = Oe.update(S), be = S.material;
            be.visible && p.push(S, Se, be, H, K.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || Z.intersectsObject(S))) {
          S.isSkinnedMesh && S.skeleton.frame !== Be.render.frame && (S.skeleton.update(), S.skeleton.frame = Be.render.frame);
          const Se = Oe.update(S), be = S.material;
          if (U && (Se.boundingSphere === null && Se.computeBoundingSphere(), K.copy(Se.boundingSphere.center).applyMatrix4(S.matrixWorld).applyMatrix4(z)), Array.isArray(be)) {
            const Ce = Se.groups;
            for (let De = 0, Ue = Ce.length; De < Ue; De++) {
              const Ie = Ce[De], ze = be[Ie.materialIndex];
              ze && ze.visible && p.push(S, Se, ze, H, K.z, Ie);
            }
          } else
            be.visible && p.push(S, Se, be, H, K.z, null);
        }
      }
      const xe = S.children;
      for (let Se = 0, be = xe.length; Se < be; Se++)
        st(xe[Se], N, H, U);
    }
    function Jt(S, N, H, U) {
      const W = S.opaque, xe = S.transmissive, Se = S.transparent;
      _.setupLightsView(H), te === !0 && O.setGlobalState(h.clippingPlanes, H), xe.length > 0 && Ye(W, xe, N, H), U && Me.viewport(k.copy(U)), W.length > 0 && Et(W, N, H), xe.length > 0 && Et(xe, N, H), Se.length > 0 && Et(Se, N, H), Me.buffers.depth.setTest(!0), Me.buffers.depth.setMask(!0), Me.buffers.color.setMask(!0), Me.setPolygonOffset(!1);
    }
    function Ye(S, N, H, U) {
      if (ue === null) {
        const be = re.isWebGL2;
        ue = new bn(1024, 1024, {
          generateMipmaps: !0,
          type: Ee.has("EXT_color_buffer_half_float") ? pi : Tn,
          minFilter: fi,
          samples: be && a === !0 ? 4 : 0
        });
      }
      const W = h.getRenderTarget();
      h.setRenderTarget(ue), h.clear();
      const xe = h.toneMapping;
      h.toneMapping = Zt, Et(S, H, U), Re.updateMultisampleRenderTarget(ue), Re.updateRenderTargetMipmap(ue);
      let Se = !1;
      for (let be = 0, Ce = N.length; be < Ce; be++) {
        const De = N[be], Ue = De.object, Ie = De.geometry, ze = De.material, ct = De.group;
        if (ze.side === Kt && Ue.layers.test(U.layers)) {
          const At = ze.side;
          ze.side = mt, ze.needsUpdate = !0, Nt(Ue, H, U, Ie, ze, ct), ze.side = At, ze.needsUpdate = !0, Se = !0;
        }
      }
      Se === !0 && (Re.updateMultisampleRenderTarget(ue), Re.updateRenderTargetMipmap(ue)), h.setRenderTarget(W), h.toneMapping = xe;
    }
    function Et(S, N, H) {
      const U = N.isScene === !0 ? N.overrideMaterial : null;
      for (let W = 0, xe = S.length; W < xe; W++) {
        const Se = S[W], be = Se.object, Ce = Se.geometry, De = U === null ? Se.material : U, Ue = Se.group;
        be.layers.test(H.layers) && Nt(be, N, H, Ce, De, Ue);
      }
    }
    function Nt(S, N, H, U, W, xe) {
      S.onBeforeRender(h, N, H, U, W, xe), S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), W.onBeforeRender(h, N, H, U, S, xe), W.transparent === !0 && W.side === Kt && W.forceSinglePass === !1 ? (W.side = mt, W.needsUpdate = !0, h.renderBufferDirect(H, N, U, W, S, xe), W.side = an, W.needsUpdate = !0, h.renderBufferDirect(H, N, U, W, S, xe), W.side = Kt) : h.renderBufferDirect(H, N, U, W, S, xe), S.onAfterRender(h, N, H, U, W, xe);
    }
    function Mi(S, N, H) {
      N.isScene !== !0 && (N = se);
      const U = ve.get(S), W = _.state.lights, xe = _.state.shadowsArray, Se = W.state.version, be = ke.getParameters(S, W.state, xe, N, H), Ce = ke.getProgramCacheKey(be);
      let De = U.programs;
      U.environment = S.isMeshStandardMaterial ? N.environment : null, U.fog = N.fog, U.envMap = (S.isMeshStandardMaterial ? We : Xe).get(S.envMap || U.environment), De === void 0 && (S.addEventListener("dispose", je), De = /* @__PURE__ */ new Map(), U.programs = De);
      let Ue = De.get(Ce);
      if (Ue !== void 0) {
        if (U.currentProgram === Ue && U.lightsStateVersion === Se)
          return Jr(S, be), Ue;
      } else
        be.uniforms = ke.getUniforms(S), S.onBuild(H, be, h), S.onBeforeCompile(be, h), Ue = ke.acquireProgram(be, Ce), De.set(Ce, Ue), U.uniforms = be.uniforms;
      const Ie = U.uniforms;
      (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ie.clippingPlanes = O.uniform), Jr(S, be), U.needsLights = xo(S), U.lightsStateVersion = Se, U.needsLights && (Ie.ambientLightColor.value = W.state.ambient, Ie.lightProbe.value = W.state.probe, Ie.directionalLights.value = W.state.directional, Ie.directionalLightShadows.value = W.state.directionalShadow, Ie.spotLights.value = W.state.spot, Ie.spotLightShadows.value = W.state.spotShadow, Ie.rectAreaLights.value = W.state.rectArea, Ie.ltc_1.value = W.state.rectAreaLTC1, Ie.ltc_2.value = W.state.rectAreaLTC2, Ie.pointLights.value = W.state.point, Ie.pointLightShadows.value = W.state.pointShadow, Ie.hemisphereLights.value = W.state.hemi, Ie.directionalShadowMap.value = W.state.directionalShadowMap, Ie.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Ie.spotShadowMap.value = W.state.spotShadowMap, Ie.spotLightMatrix.value = W.state.spotLightMatrix, Ie.spotLightMap.value = W.state.spotLightMap, Ie.pointShadowMap.value = W.state.pointShadowMap, Ie.pointShadowMatrix.value = W.state.pointShadowMatrix);
      const ze = Ue.getUniforms(), ct = Xi.seqWithValue(ze.seq, Ie);
      return U.currentProgram = Ue, U.uniformsList = ct, Ue;
    }
    function Jr(S, N) {
      const H = ve.get(S);
      H.outputColorSpace = N.outputColorSpace, H.instancing = N.instancing, H.skinning = N.skinning, H.morphTargets = N.morphTargets, H.morphNormals = N.morphNormals, H.morphColors = N.morphColors, H.morphTargetsCount = N.morphTargetsCount, H.numClippingPlanes = N.numClippingPlanes, H.numIntersection = N.numClipIntersection, H.vertexAlphas = N.vertexAlphas, H.vertexTangents = N.vertexTangents, H.toneMapping = N.toneMapping;
    }
    function _o(S, N, H, U, W) {
      N.isScene !== !0 && (N = se), Re.resetTextureUnits();
      const xe = N.fog, Se = U.isMeshStandardMaterial ? N.environment : null, be = y === null ? h.outputColorSpace : y.isXRRenderTarget === !0 ? y.texture.colorSpace : Ht, Ce = (U.isMeshStandardMaterial ? We : Xe).get(U.envMap || Se), De = U.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4, Ue = !!U.normalMap && !!H.attributes.tangent, Ie = !!H.morphAttributes.position, ze = !!H.morphAttributes.normal, ct = !!H.morphAttributes.color, At = U.toneMapped ? h.toneMapping : Zt, un = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, Ke = un !== void 0 ? un.length : 0, Fe = ve.get(U), er = _.state.lights;
      if (te === !0 && (me === !0 || S !== D)) {
        const gt = S === D && U.id === R;
        O.setState(U, S, gt);
      }
      let tt = !1;
      U.version === Fe.__version ? (Fe.needsLights && Fe.lightsStateVersion !== er.state.version || Fe.outputColorSpace !== be || W.isInstancedMesh && Fe.instancing === !1 || !W.isInstancedMesh && Fe.instancing === !0 || W.isSkinnedMesh && Fe.skinning === !1 || !W.isSkinnedMesh && Fe.skinning === !0 || Fe.envMap !== Ce || U.fog === !0 && Fe.fog !== xe || Fe.numClippingPlanes !== void 0 && (Fe.numClippingPlanes !== O.numPlanes || Fe.numIntersection !== O.numIntersection) || Fe.vertexAlphas !== De || Fe.vertexTangents !== Ue || Fe.morphTargets !== Ie || Fe.morphNormals !== ze || Fe.morphColors !== ct || Fe.toneMapping !== At || re.isWebGL2 === !0 && Fe.morphTargetsCount !== Ke) && (tt = !0) : (tt = !0, Fe.__version = U.version);
      let hn = Fe.currentProgram;
      tt === !0 && (hn = Mi(U, N, W));
      let Qr = !1, si = !1, tr = !1;
      const ut = hn.getUniforms(), dn = Fe.uniforms;
      if (Me.useProgram(hn.program) && (Qr = !0, si = !0, tr = !0), U.id !== R && (R = U.id, si = !0), Qr || D !== S) {
        if (ut.setValue(L, "projectionMatrix", S.projectionMatrix), re.logarithmicDepthBuffer && ut.setValue(
          L,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), D !== S && (D = S, si = !0, tr = !0), U.isShaderMaterial || U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshStandardMaterial || U.envMap) {
          const gt = ut.map.cameraPosition;
          gt !== void 0 && gt.setValue(
            L,
            K.setFromMatrixPosition(S.matrixWorld)
          );
        }
        (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial) && ut.setValue(L, "isOrthographic", S.isOrthographicCamera === !0), (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial || U.isShadowMaterial || W.isSkinnedMesh) && ut.setValue(L, "viewMatrix", S.matrixWorldInverse);
      }
      if (W.isSkinnedMesh) {
        ut.setOptional(L, W, "bindMatrix"), ut.setOptional(L, W, "bindMatrixInverse");
        const gt = W.skeleton;
        gt && (re.floatVertexTextures ? (gt.boneTexture === null && gt.computeBoneTexture(), ut.setValue(L, "boneTexture", gt.boneTexture, Re), ut.setValue(L, "boneTextureSize", gt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const nr = H.morphAttributes;
      if ((nr.position !== void 0 || nr.normal !== void 0 || nr.color !== void 0 && re.isWebGL2 === !0) && oe.update(W, H, hn), (si || Fe.receiveShadow !== W.receiveShadow) && (Fe.receiveShadow = W.receiveShadow, ut.setValue(L, "receiveShadow", W.receiveShadow)), U.isMeshGouraudMaterial && U.envMap !== null && (dn.envMap.value = Ce, dn.flipEnvMap.value = Ce.isCubeTexture && Ce.isRenderTargetTexture === !1 ? -1 : 1), si && (ut.setValue(L, "toneMappingExposure", h.toneMappingExposure), Fe.needsLights && vo(dn, tr), xe && U.fog === !0 && rt.refreshFogUniforms(dn, xe), rt.refreshMaterialUniforms(dn, U, I, J, ue), Xi.upload(L, Fe.uniformsList, dn, Re)), U.isShaderMaterial && U.uniformsNeedUpdate === !0 && (Xi.upload(L, Fe.uniformsList, dn, Re), U.uniformsNeedUpdate = !1), U.isSpriteMaterial && ut.setValue(L, "center", W.center), ut.setValue(L, "modelViewMatrix", W.modelViewMatrix), ut.setValue(L, "normalMatrix", W.normalMatrix), ut.setValue(L, "modelMatrix", W.matrixWorld), U.isShaderMaterial || U.isRawShaderMaterial) {
        const gt = U.uniformsGroups;
        for (let ir = 0, Mo = gt.length; ir < Mo; ir++)
          if (re.isWebGL2) {
            const es = gt[ir];
            fe.update(es, hn), fe.bind(es, hn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return hn;
    }
    function vo(S, N) {
      S.ambientLightColor.needsUpdate = N, S.lightProbe.needsUpdate = N, S.directionalLights.needsUpdate = N, S.directionalLightShadows.needsUpdate = N, S.pointLights.needsUpdate = N, S.pointLightShadows.needsUpdate = N, S.spotLights.needsUpdate = N, S.spotLightShadows.needsUpdate = N, S.rectAreaLights.needsUpdate = N, S.hemisphereLights.needsUpdate = N;
    }
    function xo(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return M;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return y;
    }, this.setRenderTargetTextures = function(S, N, H) {
      ve.get(S.texture).__webglTexture = N, ve.get(S.depthTexture).__webglTexture = H;
      const U = ve.get(S);
      U.__hasExternalTextures = !0, U.__hasExternalTextures && (U.__autoAllocateDepthBuffer = H === void 0, U.__autoAllocateDepthBuffer || Ee.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), U.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, N) {
      const H = ve.get(S);
      H.__webglFramebuffer = N, H.__useDefaultFramebuffer = N === void 0;
    }, this.setRenderTarget = function(S, N = 0, H = 0) {
      y = S, M = N, w = H;
      let U = !0, W = null, xe = !1, Se = !1;
      if (S) {
        const Ce = ve.get(S);
        Ce.__useDefaultFramebuffer !== void 0 ? (Me.bindFramebuffer(L.FRAMEBUFFER, null), U = !1) : Ce.__webglFramebuffer === void 0 ? Re.setupRenderTarget(S) : Ce.__hasExternalTextures && Re.rebindTextures(S, ve.get(S.texture).__webglTexture, ve.get(S.depthTexture).__webglTexture);
        const De = S.texture;
        (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (Se = !0);
        const Ue = ve.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (W = Ue[N], xe = !0) : re.isWebGL2 && S.samples > 0 && Re.useMultisampledRTT(S) === !1 ? W = ve.get(S).__webglMultisampledFramebuffer : W = Ue, k.copy(S.viewport), g.copy(S.scissor), b = S.scissorTest;
      } else
        k.copy(ie).multiplyScalar(I).floor(), g.copy(Y).multiplyScalar(I).floor(), b = q;
      if (Me.bindFramebuffer(L.FRAMEBUFFER, W) && re.drawBuffers && U && Me.drawBuffers(S, W), Me.viewport(k), Me.scissor(g), Me.setScissorTest(b), xe) {
        const Ce = ve.get(S.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + N, Ce.__webglTexture, H);
      } else if (Se) {
        const Ce = ve.get(S.texture), De = N || 0;
        L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, Ce.__webglTexture, H || 0, De);
      }
      R = -1;
    }, this.readRenderTargetPixels = function(S, N, H, U, W, xe, Se) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let be = ve.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && Se !== void 0 && (be = be[Se]), be) {
        Me.bindFramebuffer(L.FRAMEBUFFER, be);
        try {
          const Ce = S.texture, De = Ce.format, Ue = Ce.type;
          if (De !== It && F.convert(De) !== L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ie = Ue === pi && (Ee.has("EXT_color_buffer_half_float") || re.isWebGL2 && Ee.has("EXT_color_buffer_float"));
          if (Ue !== Tn && F.convert(Ue) !== L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ue === Mn && (re.isWebGL2 || Ee.has("OES_texture_float") || Ee.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ie) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= S.width - U && H >= 0 && H <= S.height - W && L.readPixels(N, H, U, W, F.convert(De), F.convert(Ue), xe);
        } finally {
          const Ce = y !== null ? ve.get(y).__webglFramebuffer : null;
          Me.bindFramebuffer(L.FRAMEBUFFER, Ce);
        }
      }
    }, this.copyFramebufferToTexture = function(S, N, H = 0) {
      const U = Math.pow(2, -H), W = Math.floor(N.image.width * U), xe = Math.floor(N.image.height * U);
      Re.setTexture2D(N, 0), L.copyTexSubImage2D(L.TEXTURE_2D, H, 0, 0, S.x, S.y, W, xe), Me.unbindTexture();
    }, this.copyTextureToTexture = function(S, N, H, U = 0) {
      const W = N.image.width, xe = N.image.height, Se = F.convert(H.format), be = F.convert(H.type);
      Re.setTexture2D(H, 0), L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, H.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, H.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, H.unpackAlignment), N.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, U, S.x, S.y, W, xe, Se, be, N.image.data) : N.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, U, S.x, S.y, N.mipmaps[0].width, N.mipmaps[0].height, Se, N.mipmaps[0].data) : L.texSubImage2D(L.TEXTURE_2D, U, S.x, S.y, Se, be, N.image), U === 0 && H.generateMipmaps && L.generateMipmap(L.TEXTURE_2D), Me.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, N, H, U, W = 0) {
      if (h.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const xe = S.max.x - S.min.x + 1, Se = S.max.y - S.min.y + 1, be = S.max.z - S.min.z + 1, Ce = F.convert(U.format), De = F.convert(U.type);
      let Ue;
      if (U.isData3DTexture)
        Re.setTexture3D(U, 0), Ue = L.TEXTURE_3D;
      else if (U.isDataArrayTexture)
        Re.setTexture2DArray(U, 0), Ue = L.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, U.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Ie = L.getParameter(L.UNPACK_ROW_LENGTH), ze = L.getParameter(L.UNPACK_IMAGE_HEIGHT), ct = L.getParameter(L.UNPACK_SKIP_PIXELS), At = L.getParameter(L.UNPACK_SKIP_ROWS), un = L.getParameter(L.UNPACK_SKIP_IMAGES), Ke = H.isCompressedTexture ? H.mipmaps[0] : H.image;
      L.pixelStorei(L.UNPACK_ROW_LENGTH, Ke.width), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, Ke.height), L.pixelStorei(L.UNPACK_SKIP_PIXELS, S.min.x), L.pixelStorei(L.UNPACK_SKIP_ROWS, S.min.y), L.pixelStorei(L.UNPACK_SKIP_IMAGES, S.min.z), H.isDataTexture || H.isData3DTexture ? L.texSubImage3D(Ue, W, N.x, N.y, N.z, xe, Se, be, Ce, De, Ke.data) : H.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), L.compressedTexSubImage3D(Ue, W, N.x, N.y, N.z, xe, Se, be, Ce, Ke.data)) : L.texSubImage3D(Ue, W, N.x, N.y, N.z, xe, Se, be, Ce, De, Ke), L.pixelStorei(L.UNPACK_ROW_LENGTH, Ie), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, ze), L.pixelStorei(L.UNPACK_SKIP_PIXELS, ct), L.pixelStorei(L.UNPACK_SKIP_ROWS, At), L.pixelStorei(L.UNPACK_SKIP_IMAGES, un), W === 0 && U.generateMipmaps && L.generateMipmap(Ue), Me.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? Re.setTextureCube(S, 0) : S.isData3DTexture ? Re.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? Re.setTexture2DArray(S, 0) : Re.setTexture2D(S, 0), Me.unbindTexture();
    }, this.resetState = function() {
      M = 0, w = 0, y = null, Me.reset(), le.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === we ? En : Oa;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === En ? we : Ht;
  }
}
class Ef extends io {
}
Ef.prototype.isWebGL1Renderer = !0;
class Yi {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new Ge(e), this.density = t;
  }
  clone() {
    return new Yi(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class yf extends lt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class ro extends pt {
  constructor(e, t, n, r, s, o, a, c, l) {
    super(e, t, n, r, s, o, a, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
const _a = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class Zr {
  constructor(e, t, n) {
    const r = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), s = !0;
    }, this.itemEnd = function(u) {
      o++, r.onProgress !== void 0 && r.onProgress(u, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(u) {
      r.onError !== void 0 && r.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, f) {
      return l.push(u, f), this;
    }, this.removeHandler = function(u) {
      const f = l.indexOf(u);
      return f !== -1 && l.splice(f, 2), this;
    }, this.getHandler = function(u) {
      for (let f = 0, d = l.length; f < d; f += 2) {
        const p = l[f], _ = l[f + 1];
        if (p.global && (p.lastIndex = 0), p.test(u))
          return _;
      }
      return null;
    };
  }
}
const Tf = /* @__PURE__ */ new Zr();
class vi {
  constructor(e) {
    this.manager = e !== void 0 ? e : Tf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
class so extends lt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ge(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Ir = /* @__PURE__ */ new Je(), va = /* @__PURE__ */ new P(), xa = /* @__PURE__ */ new P();
class bf {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ae(512, 512), this.map = null, this.mapPass = null, this.matrix = new Je(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ji(), this._frameExtents = new Ae(1, 1), this._viewportCount = 1, this._viewports = [
      new it(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    va.setFromMatrixPosition(e.matrixWorld), t.position.copy(va), xa.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(xa), t.updateMatrixWorld(), Ir.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ir), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Ir);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Af extends bf {
  constructor() {
    super(new Ja(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class wf extends so {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(lt.DEFAULT_UP), this.updateMatrix(), this.target = new lt(), this.shadow = new Af();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Rf extends so {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class ao {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Ma(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Ma();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Ma() {
  return (typeof performance > "u" ? Date : performance).now();
}
class oo {
  constructor(e, t, n = 0, r = 1 / 0) {
    this.ray = new ka(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new $r(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Wr(e, this, n, t), n.sort(Sa), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, s = e.length; r < s; r++)
      Wr(e[r], this, n, t);
    return n.sort(Sa), n;
  }
}
function Sa(i, e) {
  return i.distance - e.distance;
}
function Wr(i, e, t, n) {
  if (i.layers.test(e.layers) && i.raycast(e, t), n === !0) {
    const r = i.children;
    for (let s = 0, o = r.length; s < o; s++)
      Wr(r[s], e, t, !0);
  }
}
class Ea {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ft(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ya = /* @__PURE__ */ new Ae();
class Cf {
  constructor(e = new Ae(1 / 0, 1 / 0), t = new Ae(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = ya.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, ya).distanceTo(e);
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: jr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = jr);
class lo extends vi {
  load(e, t, n, r, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const o = _a.get(e);
    if (o !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(o), this.manager.itemEnd(e);
      }, 0), o;
    const a = new Image(), c = (d) => {
      u(), d.target instanceof HTMLImageElement && (_a.add(e, d.target), t && t(d.target)), this.manager.itemEnd(e);
    }, l = (d) => {
      u(), r && r(d), this.manager.itemError(e), this.manager.itemEnd(e);
    }, u = () => {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    };
    a.addEventListener("load", c, !1), a.addEventListener("error", l, !1);
    const f = {};
    return f.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", f.headers = this.requestHeader, f.signal = s, fetch(e, f).then((d) => d.blob()).then((d) => {
      a.src = URL.createObjectURL(d);
    }).catch((d) => {
      d.name === "AbortError" ? console.log("download abort") : (console.error("Download tile error:", e), this.manager.itemError(e)), this.manager.itemEnd(e), u(), r && r(d);
    }), this.manager.itemStart(e), a;
  }
}
function co(i) {
  const e = new AbortController(), t = () => e.abort();
  return i.addEventListener("abort", () => {
    t(), i.removeEventListener("abort", t);
  }), e;
}
const Lf = `\r
// #define LAMBERT\r
\r
uniform vec3 diffuse;\r
uniform vec3 emissive;\r
uniform float opacity;\r
\r
uniform sampler2D map;\r
uniform sampler2D map1;\r
\r
varying vec2 vUv;\r
\r
#include <common>\r
#include <packing>\r
#include <dithering_pars_fragment>\r
#include <color_pars_fragment>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <aomap_pars_fragment>\r
#include <lightmap_pars_fragment>\r
#include <emissivemap_pars_fragment>\r
#include <envmap_common_pars_fragment>\r
#include <envmap_pars_fragment>\r
#include <fog_pars_fragment>\r
#include <bsdfs>\r
#include <lights_pars_begin>\r
#include <normal_pars_fragment>\r
#include <lights_lambert_pars_fragment>\r
#include <shadowmap_pars_fragment>\r
#include <bumpmap_pars_fragment>\r
#include <normalmap_pars_fragment>\r
#include <specularmap_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
\r
void main() {\r
\r
	#include <clipping_planes_fragment>\r
\r
	vec4 diffuseColor = vec4( diffuse, opacity );\r
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\r
	vec3 totalEmissiveRadiance = emissive;\r
\r
	#include <logdepthbuf_fragment>\r
	#include <map_fragment>\r
	#include <color_fragment>\r
	#include <alphamap_fragment>\r
	\r
	\r
	#include <alphatest_fragment>\r
	#include <specularmap_fragment>\r
	#include <normal_fragment_begin>\r
	#include <normal_fragment_maps>\r
	#include <emissivemap_fragment>\r
\r
\r
	// 增加多图层混合\r
    diffuseColor *= texture2D( map, vUv );\r
	vec4 map1Color = texture2D(map1, vUv);\r
	diffuseColor.rgb = diffuseColor.rgb * (1.0 - map1Color.a) + map1Color.rgb * map1Color.a;\r
    diffuseColor.a = opacity;\r
    \r
	// 未加载纹理图片时显示白色（网格）\r
	vec2 size = vec2(textureSize(map, 0));\r
	if(size.x<2.0){\r
		diffuseColor = vec4(1.0, 1.0, 1.0, 0.3);		\r
	}\r
\r
	// accumulation\r
	#include <lights_lambert_fragment>\r
	#include <lights_fragment_begin>\r
	#include <lights_fragment_maps>\r
	#include <lights_fragment_end>\r
\r
	// modulation\r
	// #include <aomap_fragment>\r
\r
\r
\r
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\r
\r
	#include <envmap_fragment>\r
	#include <output_fragment>\r
	#include <tonemapping_fragment>\r
	#include <encodings_fragment>\r
	#include <fog_fragment>\r
	#include <premultiplied_alpha_fragment>\r
	#include <dithering_fragment>\r
\r
}`, Pf = `\r
#define LAMBERT\r
\r
varying vec3 vViewPosition;\r
varying vec2 vUv;\r
\r
#include <common>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <envmap_pars_vertex>\r
#include <color_pars_vertex>\r
#include <fog_pars_vertex>\r
#include <normal_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <shadowmap_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
\r
void main() {\r
\r
	#include <uv_vertex>\r
\r
	vUv = vec3( uv, 1 ).xy;\r
\r
	#include <color_vertex>\r
	#include <morphcolor_vertex>\r
\r
	#include <beginnormal_vertex>\r
	#include <morphnormal_vertex>\r
	#include <skinbase_vertex>\r
	#include <skinnormal_vertex>\r
	#include <defaultnormal_vertex>\r
	#include <normal_vertex>\r
\r
	#include <begin_vertex>\r
	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
\r
	// 增加dem数据\r
	#ifdef USE_DISPLACEMENTMAP\r
		vec4 heightColor = texture2D(displacementMap, vUv);\r
		// mapBox高程\r
		float h = ((heightColor.r * 255.0 * 65536.0 + heightColor.g * 255.0 * 256.0 + heightColor.b * 255.0) * 0.1)*heightColor.a - 10000.0;\r
		transformed += normalize( objectNormal ) * h / 1000.0;\r
	#endif\r
\r
\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
\r
	vViewPosition = - mvPosition.xyz;\r
\r
	#include <worldpos_vertex>\r
	#include <envmap_vertex>\r
	#include <shadowmap_vertex>\r
	#include <fog_vertex>\r
\r
}`;
class uo extends on {
  constructor(e) {
    super({
      uniforms: Ya.merge([
        Dt.lambert.uniforms,
        {
          map1: { value: null },
          diffuse: { value: new Ge(16777215) }
        }
      ]),
      vertexShader: Pf,
      fragmentShader: Lf,
      lights: !0,
      transparent: e.transparent || !0,
      wireframe: e.wireframe || !1,
      fog: !0
    }), this.uniforms.map.value = e.map, this.uniforms.map1.value = e.map1, this.defineProperty("map1"), this.defineProperty("diffuse"), this.defineProperty("opacity");
  }
  dispose() {
    var e, t;
    (e = this.uniforms.map.value) == null || e.dispose(), (t = this.uniforms.map1.value) == null || t.dispose(), super.dispose();
  }
  // public onBeforeCompile = (shader: Shader, _renderer: WebGLRenderer) => {
  //     shader.vertexShader = vert;
  //     shader.fragmentShader = frag;
  //     // console.log(shader.vertexShader);
  //     // console.log(shader.fragmentShader);
  // };
  /**
   * 设置高程数据
   * @param dem 高程数据
   * @returns
   */
  // public setDemData(dem: TexImageSource | null) {
  //     if (dem) {
  //         this.displacementMap = new Texture(dem);
  //         this.displacementMap.minFilter = LinearFilter;
  //         // material.displacementMap.magFilter = LinearFilter;
  //         this.displacementMap.needsUpdate = true;
  //     }
  //     return this;
  // }
  // public dispose(): void {
  //     this.map?.dispose();
  //     this.map = null;
  //     this.aoMap?.dispose();
  //     this.aoMap = null;
  //     this.displacementMap?.dispose();
  //     this.displacementMap = null;
  //     super.dispose();
  // }
  defineProperty(e) {
    Object.defineProperty(this, e, {
      get: function() {
        return this.uniforms[e].value;
      },
      set: function(t) {
        this.uniforms[e].value = t;
      }
    });
  }
}
class Df extends vi {
  load(e, t, n, r) {
    const o = new OffscreenCanvas(256, 256), a = o.getContext("2d"), c = new ro(o);
    c.colorSpace = we;
    const l = new uo({
      map: c,
      transparent: !0,
      wireframe: !0
    });
    l.needsUpdate = !0;
    const u = [];
    for (let f = 0; f < t.length; f++) {
      const d = t[f];
      u.push(this._loadAsync(e, d, n));
    }
    return Promise.all(u).then((f) => {
      for (let d = 0; d < f.length; d++) {
        const p = f[d].image;
        a == null || a.drawImage(p, 0, 0), l.wireframe = !1, c.needsUpdate = !0, l.needsUpdate = !0, r(l);
      }
    }), l;
  }
  _loadAsync(e, t, n) {
    return new Promise((r, s) => {
      t.load(e, n, (o) => r(o));
    });
  }
}
class Uf extends vi {
  // 加载瓦片几何体
  load(e, t, n, r) {
    return t.load(e, n, (s) => r(s));
  }
}
const Yn = class extends vi {
  /**
   *
   * @param imgProvider 影像数据源
   * @param demProvider 地形数据源
   */
  constructor(t, n, r = 2, s = 18) {
    super(new Zr());
    X(this, "isWGS", !1);
    X(this, "projectCenterLon", 0);
    // public projection: IProjection;
    X(this, "_minLevel", 0);
    X(this, "_maxLevel", 18);
    // 是否标记正在加载的瓦片
    X(this, "_showLoading", !0);
    // 影像层瓦片源
    X(this, "_imgProvider");
    // 高程瓦片源
    X(this, "_demProvider");
    // 几何体加载器
    X(this, "geometryLoader", new Uf(this.manager));
    // 纹理加载器
    X(this, "materialLoader", new Df(this.manager));
    this.imgProvider = t, this.demProvider = n, this.minLevel = r, this.maxLevel = s, Yn.defaultGeometry.userData.loaded = !0, Yn.defaultMaterial.userData.loaded = !0;
  }
  set minLevel(t) {
    this._minLevel = t;
  }
  get minLevel() {
    return this._minLevel;
  }
  get maxLevel() {
    return this._maxLevel;
  }
  set maxLevel(t) {
    this._maxLevel = t;
  }
  get showLoading() {
    return this._showLoading;
  }
  set showLoading(t) {
    this._showLoading = t;
  }
  get imgProvider() {
    return this._imgProvider;
  }
  set imgProvider(t) {
    t && t.length > 2 && console.warn("supports only tow images provider on map"), this._imgProvider = t;
  }
  get demProvider() {
    return this._demProvider;
  }
  set demProvider(t) {
    this._demProvider = t;
  }
  /**
   * 加载瓦片几何体和纹理
   * @param tile 瓦片
   * @param onLoad 加载完成回调函数
   * @returns
   */
  load(t, n) {
    const r = () => {
      t.geometry.userData.loaded && t.material.userData.loaded && (o.visible = !0, n({ geometry: s, material: o }));
    }, s = this.loadGeometry(t, (a) => {
      a.userData.loaded = !0, r();
    }), o = this.loadMaterial(t, (a) => {
      a.userData.loaded = !0, r();
    });
    return o.visible = this.showLoading, t.geometry = s, t.material = o, { geometry: s, material: o };
  }
  /**
   * 加载几何体
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 几何体
   */
  loadGeometry(t, n) {
    return this.demProvider ? this.geometryLoader.load(t, this.demProvider, this.projectCenterLon, n) : (setTimeout(() => n(Yn.defaultGeometry), 1), Yn.defaultGeometry);
  }
  /**
   * 加载纹理
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 纹理
   */
  loadMaterial(t, n) {
    if (this.imgProvider.length > 0)
      return this.materialLoader.load(t, this.imgProvider, this.projectCenterLon, n);
    throw new Error("no imgProvide!");
  }
};
let Mt = Yn;
X(Mt, "defaultGeometry", new wn()), X(Mt, "defaultMaterial", new gi({
  visible: !1,
  transparent: !0
}));
class tp extends Mt {
  /**
   * 加载几何体
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 几何体
   */
  // public loadGeometry(_tile: Tile, onLoad: (geometry: BufferGeometry) => void) {
  //     const geometry = new PlaneGeometry();
  //     setTimeout(() => onLoad(geometry), 1);
  //     return geometry;
  // }
  /**
   * 加载纹理
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 纹理
   */
  loadMaterial(e, t) {
    const n = new gi({ wireframe: !0, color: 13421772 });
    return setTimeout(() => t(n), 1), n;
  }
}
class np extends vi {
  load(e, t, n, r) {
    const s = (u) => {
      const f = !a || a.userData.loaded, d = !c || c.userData.loaded;
      u.needsUpdate = !0, f && d && (l.wireframe = !1, r(l));
    };
    let o = t[0];
    const a = o && o.load(e, n, s);
    o = t[1];
    const c = o && o.load(e, n, s), l = new uo({
      map: a,
      map1: c,
      wireframe: !0
    });
    return l;
  }
}
class ip extends Mt {
  /**
   * 加载纹理
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 纹理
   */
  loadMaterial(e, t) {
    const n = new gi({ wireframe: !0 });
    return setTimeout(() => t(n), 1), n;
  }
}
function If(i, e, t) {
  const r = new OffscreenCanvas(e, e).getContext("2d");
  r.imageSmoothingEnabled = !1;
  const s = i.width;
  t.translate(new Ae(0.5, 0.5));
  const o = Math.floor(t.min.x * s), a = Math.floor(t.min.y * s), c = Math.floor((t.max.x - t.min.x) * s), l = Math.floor((t.max.y - t.min.y) * s);
  return r.drawImage(i, o, a, c, l, 0, 0, e, e), r.getImageData(0, 0, e, e).data;
}
function Xn(i, e, t, n, r) {
  const s = new Rn(i, e, t);
  return s.renderOrder = i, s.position.copy(n), s.scale.copy(r), s.updateMatrix(), s;
}
function Nf(i, e = !1) {
  if (i.isLeaf) {
    const t = i.level + 1, n = i.x * 2, r = 0, s = 1 / 4;
    if (i.level === 0 && e) {
      const o = i.y, a = new P(0.5, 1, 1);
      i.add(Xn(t, n, o, new P(-s, 0, r), a)), i.add(Xn(t, n + 1, o, new P(s, 0, r), a));
    } else {
      const o = i.y * 2, a = new P(0.5, 0.5, 1);
      i.add(Xn(t, n, o + 1, new P(-s, -s, r), a)), i.add(Xn(t, n + 1, o + 1, new P(s, -s, r), a)), i.add(Xn(t, n, o, new P(-s, s, r), a)), i.add(Xn(t, n + 1, o, new P(s, s, r), a));
    }
  } else
    console.error("重复创建子瓦片");
  return i.children;
}
const Xr = new P(0, 0, 0), Ta = [
  new P(0.5, 0.5, 0),
  new P(-0.5, 0.5, 0),
  new P(0.5, -0.5, 0),
  new P(-0.5, -0.5, 0)
], ba = { min: 1, max: 3 };
function Ff(i, e) {
  const t = i.geometry.attributes.position;
  if (t.count < 17)
    return Ta[e];
  const n = Math.floor(Math.sqrt(t.count));
  let r = 0;
  switch (e) {
    case 0:
      r = n * 2 - 2;
      break;
    case 1:
      r = n + 1;
      break;
    case 2:
      r = n * (n - 1) - 2;
      break;
    case 3:
      r = n * (n - 2) + 1;
      break;
  }
  const s = t.clone().getZ(r);
  return Ta[e].clone().setZ(s);
}
function Of(i) {
  if (i.loadState === "loaded") {
    const e = i.geometry.attributes.position;
    if (e.count < 17)
      return Xr;
    const t = Math.floor(Math.sqrt(e.count)), n = e.count / 2 + t / 2 + 1;
    return new P(0, 0, e.getZ(n));
  } else
    return Xr;
}
function ho(i, e, t) {
  const n = t.clone().applyMatrix4(e.matrixWorld);
  let r = i.distanceTo(n);
  const s = new P().setFromMatrixScale(e.matrixWorld), o = Math.hypot(s.x, s.y);
  return r / o;
}
function Bf(i) {
  const e = i.parent;
  if (e instanceof Rn)
    for (let t = 0; t < e.children.length; t++) {
      const n = e.children[t];
      if (n.loadState === "loaded")
        return Ff(n, t);
    }
  return Xr;
}
function zf(i, e) {
  const t = Of(i);
  return ho(e, i, t);
}
function Gf(i, e) {
  const t = Bf(i);
  return ho(e, i, t);
}
var qr = /* @__PURE__ */ ((i) => (i[i.none = 0] = "none", i[i.create = 1] = "create", i[i.remove = 2] = "remove", i))(qr || {});
function Hf(i, e, t, n) {
  if (i.level < t && i.isLeafInFrustum) {
    const r = zf(i, e);
    if (console.assert(!isNaN(r), "距离计算错误"), i.level < n || r < ba.min)
      return 1;
  }
  if (i.level > n && i.index === 0) {
    const r = Gf(i, e);
    if (console.assert(!isNaN(r), "距离计算错误"), r > ba.max)
      return 2;
  }
  return 0;
}
class Rn extends Ot {
  /**
   * constructor
   * 构造函数
   * @param level 瓦片级别 tile level
   * @param x 瓦片x坐标 X-coordinate
   * @param y 瓦片y坐标 X-coordinate
   */
  constructor(t = 0, n = 0, r = 0) {
    super(Mt.defaultGeometry, Mt.defaultMaterial);
    // 层级、行坐标、列坐标
    X(this, "level");
    X(this, "x");
    X(this, "y");
    // 父瓦片
    /**
     * tile's parent，a tile have at most one parent.
     */
    X(this, "parent", null);
    // 子瓦片
    /**
     * Array with tile's children，a tile have four children
     */
    X(this, "children", []);
    // 数据加载时间戳，用于判断前次加载与本次加载时间差，防止频繁加载删除造成的抖动
    X(this, "_loadedTime", Date.now());
    // 瓦片数据加载状
    X(this, "_loadState", "empty");
    X(this, "_toLoad", !1);
    X(this, "_inFrustum", !1);
    this.level = t, this.x = n, this.y = r, this.name = `Tile: ${this.level}-${this.x}-${this.y}`, this.matrixAutoUpdate = !1, this.matrixWorldAutoUpdate = !1;
  }
  // 瓦片索引，用以确定在父瓦片中的位置（0:左下、1:右下、2:左上、3:右上、-1:无父瓦片）
  /**
   * get the index in it's Indicates it's position at the parent tile
   * (0:left-bottom, 1:right-bottom, 2:left-top, 3:right-top, -1:no parent)
   */
  get index() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  /**
   * get the tile load state
   */
  get loadState() {
    return this._loadState;
  }
  // 是否需要加载
  /**
   * get Whether tile needs to be loaded
   */
  get needLoad() {
    return this.inFrustum && this._toLoad && this.loadState === "empty";
  }
  // 瓦片是否在可视化范围
  /**
   * get whether the tile is in the frustum
   */
  get inFrustum() {
    return this._inFrustum;
  }
  /**
   * set whether the tile is in the frustum
   */
  set inFrustum(t) {
    this._inFrustum != t && (t ? this._toLoad = this.isLeaf : Date.now() - this._loadedTime > 1e3 && this.dispose(!0), this._inFrustum = t);
  }
  // 是否为可视的叶子瓦片
  /**
   * get Whether the tile is leaf and is inFrustm
   */
  get isLeafInFrustum() {
    return this.inFrustum && this.isLeaf;
  }
  // 临时显示
  /**
   * set the tile to temp (transparent)
   */
  set temp(t) {
    this.loadState != "empty" && (this.material.opacity = t ? 0.3 : 1);
  }
  // 是否为叶子瓦片
  /**
   * get the tile is a leaf
   */
  get isLeaf() {
    return this.children.length === 0;
  }
  /**
   * overwrite Obejct3D.traverse, Modified the callback function param's type to Tile
   * 覆盖Obejct3D.traverse，修改了参数类型
   * @param callback 回调函数，参数改为了this
   */
  traverse(t) {
    t(this), this.children.forEach((n) => {
      n.traverse(t);
    });
  }
  /**
   * orverwrit Mesh.raycast to only loaded tile to checked
   * 重载mesh的raycast，仅检测已加载的瓦片
   * @param raycaster
   * @param intersects
   */
  raycast(t, n) {
    this.loadState === "loaded" && super.raycast(t, n);
  }
  /**
   * reloade tile data
   * 重新加载瓦片数据
   */
  _reload() {
    return this.dispose(!1), this._toLoad = this.isLeaf || this.loadState != "empty", this;
  }
  /**
   * 瓦片LOD
   * @param cameraWorldPosition
   * @param loader
   * @returns 新创建的瓦片
   */
  _lod(t, n) {
    let r = null;
    if (!this.inFrustum)
      return r;
    const s = Hf(this, t, n.maxLevel, n.minLevel);
    if (s === qr.create)
      console.log("创建子瓦片", this.name), this._toLoad = !1, r = Nf(this, n.isWGS);
    else if (s === qr.remove) {
      const o = this.parent;
      o instanceof Rn && !o._toLoad && (console.log("删除子瓦片", o.name), o._toLoad = !0, r = []);
    }
    return r;
  }
  /**
   * load the tile data, include geometry and material
   * 加载瓦片数据
   * @param loader tile data loader
   * @returns data loaded. Promise<boolean>
   */
  _load(t) {
    return new Promise((n, r) => {
      if (!this.needLoad)
        return n(!1);
      this._loadedTime = Date.now(), this._loadState = "loading", console.log("downloading", this.name), t.load(this, (s) => n(this.onLoad(s))), this.temp = !0;
    });
  }
  /**
   * 瓦片数据加载完成回调函数
   * @param data 瓦片数据
   * @returns 是否需要清理瓦片树
   */
  onLoad(t) {
    return this.parent ? this.loadState === "empty" ? !1 : (this.isLeaf ? this._brotherLoaded() && this.parent.dispose(!1) : this._toLoad && (this.children.forEach((n) => n.dispose(!0)), this.clear()), this.temp = !1, this._toLoad = !1, this._loadState = "loaded", !0) : (this.dispose(!0), !1);
  }
  // 视野内兄弟子瓦片是否都下载完成
  _brotherLoaded() {
    return this.parent instanceof Rn ? this.parent.children.filter((t) => t.isLeafInFrustum).every((t) => t.loadState === "loaded") : !1;
  }
  // 递归判断是否有已加载的父瓦片（用于判断：有已加载的父瓦片，暂时不显示）
  // private _parentsLoaded(): boolean {
  //     const parent = this.parent;
  //     if (!(parent instanceof Tile)) {
  //         return false;
  //     }
  //     if (parent.loadState === "loaded") {
  //         return true;
  //     }
  //     return parent._parentsLoaded();
  // }
  /**
   * free the tile resource. include geometry/material/texture
   * 释放瓦片资源
   * @param removeChildren 是否移除子瓦片
   */
  dispose(t) {
    return this.loadState === "loading" && this.dispatchEvent({ type: "abort" }), this.temp = !1, this._toLoad = !1, this._loadState = "empty", this.geometry != Mt.defaultGeometry && (this.geometry.dispose(), this.geometry = Mt.defaultGeometry), this.material != Mt.defaultMaterial && (this.material.dispose(), this.material = Mt.defaultMaterial), t && (this.children.forEach((n) => {
      n.dispose(t), n.clear();
    }), this.clear()), this;
  }
}
const Vf = new P(), ki = 0.6, kf = new ii(new P(-ki, -ki, 0), new P(ki, ki, 8));
class Aa extends Rn {
  /**
   * constructor
   * 构造函数
   * @param level 瓦片级别 tile level
   * @param x 瓦片x坐标 X-coordinate
   * @param y 瓦片y坐标 X-coordinate
   */
  constructor(t = 0, n = 0, r = 0) {
    super(t, n, r);
    // 瓦片树构造完成次数，控制瓦片数据延迟加载
    X(this, "_treeReadyCount", 0);
    X(this, "_updateDataEnable", !0);
    this.matrixAutoUpdate = !0, this.matrixWorldAutoUpdate = !0;
  }
  /**
   * get whether to allow tile data to be updated
   * 是否允许更新瓦片数据
   */
  get updateDataEnable() {
    return this._updateDataEnable && this._treeReadyCount > 5;
  }
  /**
   * set whether to allow tile data to be updated
   */
  set updateDataEnable(t) {
    this._updateDataEnable = t;
  }
  /**
   * update the QuadTree
   * 更新瓦片树并加载数据（每帧渲染前调用）
   * @param camera 摄像机
   * @param frustum 视椎体
   * @param loader 地图数据加载器
   */
  update(t, n, r) {
    const s = t.getWorldPosition(Vf);
    return this._updateTileTree(s, n, r) || this._treeReadyCount++, this.updateDataEnable && (this._updateTileData(r), this._treeReadyCount = 0), this;
  }
  /**
   * reload data, Called to take effect after provider is modified
   * 重新加载瓦片数据
   */
  reload() {
    return this.traverse((t) => t._reload()), this;
  }
  /**
   * 更新瓦片树
   * @param cameraWorldPosition 摄像机世界坐标
   * @param frustum 视椎体
   * @returns 瓦片树是否改变
   */
  _updateTileTree(t, n, r) {
    let s = !1;
    return this.traverse((o) => {
      const a = o._lod(t, r);
      s = !!a, a && a.forEach((c) => {
        this.dispatchEvent({ type: "created", tile: c });
      }), o.inFrustum = n.intersectsBox(kf.clone().applyMatrix4(o.matrixWorld));
    }), s;
  }
  /**
   *  更新瓦片树数据
   * @param loader 地图数据加载器
   */
  _updateTileData(t) {
    return this.traverse(
      (n) => n._load(t).then((r) => {
        r && (this.dispatchEvent({ type: "loaded", tile: n }), this._checkTileTree());
      })
    ), this;
  }
  /**
   * 清理瓦片树
   * 检查所有瓦片是否都下载完成，全部完成显示所有叶子瓦片，释放所有非叶子瓦片
   */
  _checkTileTree() {
    const t = [];
    this.traverse((s) => t.push(s));
    const r = t.filter((s) => s.isLeafInFrustum).every((s) => s.loadState === "loaded");
    return r && t.filter((s) => s.inFrustum).forEach((s) => {
      s.isLeaf ? s.temp = !1 : s.dispose(!1);
    }), r;
  }
}
class fo extends cn {
  constructor() {
    super();
    X(this, "_min", 1 / 0);
    X(this, "_max", -1 / 0);
    X(this, "_avg", 0);
    this.copy(new wn());
  }
  // 最低高程
  get min() {
    return this._min;
  }
  //最高高程
  get max() {
    return this._max;
  }
  // 平均高程
  get avg() {
    return this._avg;
  }
  build(t) {
    this.dispose(), this.copy(new wn(1, 1, t - 1, t - 1));
  }
  // RGB像素值换算为海拔高度
  // 使用 Mapbox Terrain-RGB v1
  // https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-rgb-v1/
  getZ(t, n) {
    const r = t[n * 4], s = t[n * 4 + 1], o = t[n * 4 + 2], a = (((r << 16) + (s << 8) + o) * 0.1 - 1e4) / 1e3;
    return this._min = Math.min(this._min, a), this._max = Math.max(this._max, a), a;
  }
  setDemData(t) {
    const n = Math.sqrt(t.length / 4);
    this.build(n);
    const r = this.getAttribute("position");
    let s = 0;
    for (let o = 0; o < r.count; o++) {
      const a = this.getZ(t, o);
      r.setZ(o, a), s += a;
    }
    return this._avg = s / (t.length / 4), this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals(), r.needsUpdate = !0, this;
  }
}
function Wi(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
class Wf extends fo {
  constructor() {
    super(...arguments);
    X(this, "type", "TileRGBGeometry");
  }
  build(t) {
    this.dispose();
    const n = 1, r = 1, s = t - 1, o = t - 1, a = n / 2, c = r / 2;
    let l = Math.floor(s), u = Math.floor(o);
    const f = n / l, d = r / u;
    l += 2, u += 2;
    const p = l + 1, _ = u + 1, x = [], m = [], h = [], T = [];
    for (let M = 0; M < _; M++)
      for (let w = 0; w < p; w++) {
        let y = 0;
        (M === 0 || M === _ - 1 || w === 0 || w === p - 1) && (y = -1);
        let R = (w - 1) * f - a, D = (M - 1) * d - c, k = (w - 1) / (l - 2), g = 1 - (M - 1) / (u - 2);
        R = Wi(R, -0.5, 0.5), D = Wi(D, -0.5, 0.5), k = Wi(k, 0, 1), g = Wi(g, 0, 1), m.push(R, -D, y), h.push(0, 0, 1), T.push(k, g);
      }
    for (let M = 0; M < u; M++)
      for (let w = 0; w < l; w++) {
        const y = w + p * M, R = w + p * (M + 1), D = w + 1 + p * (M + 1), k = w + 1 + p * M;
        x.push(y, R, k), x.push(R, D, k);
      }
    this.setIndex(x), this.setAttribute("position", new Gt(m, 3)), this.setAttribute("normal", new Gt(h, 3)), this.setAttribute("uv", new Gt(T, 2));
  }
  setDemData(t) {
    const n = Math.sqrt(t.length / 4);
    this.build(n);
    const r = this.attributes.position;
    let s = 0, o = 0;
    for (let a = 0; a < r.count; a++)
      if (r.getZ(a) === 0) {
        const c = this.getZ(t, s);
        r.setZ(a, c), this._avg = o / (t.length / 4), s++;
      } else
        r.setZ(a, -1.5);
    return this._avg = o / s, this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals(), r.needsUpdate = !0, this;
  }
  // 计算裙边处法向量
  // 瓦片边缘法向量计算比较复杂，需要根据相邻瓦片高程计算，暂未实现
  // 考虑使用Mapbox Terrain-DEM v1格式地形 https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/
  computeVertexNormals() {
    super.computeVertexNormals();
    const t = this.index, n = this.getAttribute("position");
    let r = this.getAttribute("normal");
    const s = new P(), o = new P(), a = new P(), c = new P(0, 0, 1);
    function l(u) {
      return r.setXYZ(u, c.x, c.y, c.z);
    }
    if (t)
      for (let u = 0, f = t.count; u < f; u += 3) {
        const d = t.getX(u + 0), p = t.getX(u + 1), _ = t.getX(u + 2);
        s.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), a.fromBufferAttribute(n, _), (s.z < -0.1 || o.z < -0.1 || a.z < -0.1) && (l(d), l(p), l(_));
      }
    r.needsUpdate = !0;
  }
}
class rp extends fo {
  build(e) {
    this.dispose();
    const t = (e + 1) / e;
    this.copy(new wn(t, t, e - 1, e - 1));
  }
  setDemData(e) {
    const t = Math.sqrt(e.length / 4);
    this.build(t);
    const n = this.attributes.position;
    let r = 0;
    for (let s = 0; s < n.count; s++) {
      const o = this.getZ(e, s);
      n.setZ(s, o), this._avg = r / (e.length / 4);
    }
    return this._avg = r / n.count, this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals(), n.needsUpdate = !0, this;
  }
}
class Bt {
  constructor(e, t) {
    X(this, "urlTemplate");
    X(this, "attribution", "ThreeTile");
    X(this, "type", "img");
    X(this, "minLevel", 0);
    X(this, "maxLevel", 18);
    X(this, "projection", "3857");
    X(this, "bounds", [-180, 180, -90, 90]);
    this.urlTemplate = e || "test", Object.assign(this, t);
  }
  getProjectionUrl(e, t, n, r) {
    const s = po(e, n, r);
    return this.getUrl(s, t, n);
  }
  /**
   * 根据瓦片坐标取得瓦片url，子类重载此方法实现瓦片坐标到url的映射，
   * todo：可判断请求坐标在是否在地图范围，在地图范围内返回url，否则返回undefined
   * @param _z 瓦片级别
   * @param _x 瓦片x坐标（投影后）
   * @param _y 瓦片y坐标
   * @returns 瓦片url，返回'test'，将绘制测试瓦片
   */
  getUrl(e, t, n) {
    const r = {
      x: e,
      y: t,
      z: n
    };
    return Xf(this.urlTemplate, r);
  }
  // todo: 判断指定坐标瓦片是否在经纬度范围
  inBounds(e, t, n) {
  }
}
// public projBounds:[number, number, number, number];
X(Bt, "loadingManager", new Zr());
function Xf(i, e) {
  const t = /\{ *([\w_ -]+) *\}/g;
  return i.replace(t, (n, r) => {
    let s = e[r];
    if (s === void 0)
      throw new Error(`No value provided for variable ${n}`);
    return typeof s == "function" && (s = s(e)), s;
  });
}
function po(i, e, t) {
  const n = Math.pow(2, e);
  let r = i + Math.round(n / 360 * t);
  return r >= n ? r -= n : r < 0 && (r += n), r;
}
function sp(i, e, t, n, r) {
  const s = po(e, n, r);
  return i == null ? void 0 : i.getUrl(s, t, n);
}
class St extends Bt {
  constructor() {
    super(...arguments);
    // public colorSpace: ColorSpace = SRGBColorSpace;
    // 图像加载器
    X(this, "loader", new lo(Bt.loadingManager));
  }
  static create(t, n) {
    return new St(t, n);
  }
  load(t, n, r) {
    const s = co(t), o = this.getProjectionUrl(t.x, t.y, t.level, n);
    let a = new pt();
    const c = (l) => {
      l.userData.loaded = !0, r(l);
    };
    return o ? a.image = this.loader.load(
      o,
      (l) => c(a),
      void 0,
      (l) => c(a),
      s.signal
    ) : setTimeout(() => c(a), 1), a;
  }
}
class xi extends Bt {
  constructor() {
    super(...arguments);
    // 图像加载器
    X(this, "imageLoader", new lo(Bt.loadingManager));
  }
  static create(t, n) {
    return new xi(t, n);
  }
  load(t, n, r) {
    const s = this._getMaxLevelTileAndRect(t), o = this.getProjectionUrl(
      s.tile.x,
      s.tile.y,
      s.tile.level,
      n
    ), a = new Wf();
    if (o) {
      let c = (t.level + 1) * 2;
      c = Math.min(c, 32);
      const l = co(t);
      this.imageLoader.load(
        o,
        (u) => {
          const f = If(u, c, s.box);
          a.setDemData(f), r(a);
        },
        void 0,
        (u) => r(a),
        l.signal
      );
    } else
      setTimeout(() => r(a), 1);
    return a;
  }
  /**
   * 取出数据源最大级别瓦片和当前瓦片在最大瓦片中的位置
   *
   * 因为瓦片数据并未覆盖所有级别瓦片，如MapBox地形瓦片最高只到15级，如果要显示15级以上瓦片，只能从最高级别瓦片里截取一部分来显示
   * @param tile 瓦片
   * @param provider 数据源
   * @returns 最大瓦片和大小
   */
  _getMaxLevelTileAndRect(t) {
    let n = new P(), r = new Ae(1, 1);
    for (; t.level > this.maxLevel; )
      n.applyMatrix4(t.matrix), r.multiplyScalar(0.5), t = t.parent;
    n.setY(-n.y);
    let s = new Cf().setFromCenterAndSize(new Ae(n.x, n.y), r);
    return { tile: t, box: s };
  }
}
class ap extends St {
  constructor(t, n = "mapbox.satellite", r = "webp") {
    super();
    X(this, "attribution", "MapBox");
    X(this, "type", "img");
    X(this, "token");
    X(this, "format");
    X(this, "style");
    X(this, "maxLevel", 18);
    this.token = t, this.format = r, this.style = n;
  }
  getUrl(t, n, r) {
    return `https://api.mapbox.com/v4/${this.style}/${r}/${t}/${n}.${this.format}?access_token=${this.token}`;
  }
}
class op extends xi {
  constructor(t, n = "mapbox.terrain-rgb", r = "webp") {
    super();
    X(this, "attribution", "MapBox");
    X(this, "type", "img");
    X(this, "token");
    X(this, "format");
    X(this, "style");
    X(this, "maxLevel", 18);
    this.token = t, this.format = r, this.style = n;
  }
  getUrl(t, n, r) {
    return `https://api.mapbox.com/v4/${this.style}/${r}/${t}/${n}.${this.format}?access_token=${this.token}`;
  }
}
class lp extends St {
  constructor(t, n = "img") {
    super();
    X(this, "attribution", "中科星图[GS(2022)3995号]");
    X(this, "type", "img");
    X(this, "token", "");
    X(this, "style", "img");
    X(this, "format", "webp");
    this.token = t, this.style = n;
  }
  getUrl(t, n, r) {
    return `https://tiles2.geovisearth.com/base/v1/${this.style}/${r}/${t}/${n}?format=${this.format}&tmsIds=w&token=${this.token}`;
  }
}
class cp extends xi {
  constructor(t) {
    super();
    X(this, "token", "");
    X(this, "style", "terrain_rgb");
    X(this, "maxLevel", 10);
    X(this, "attribution", "中科星图[GS(2022)3995号]");
    X(this, "format", "png");
    this.token = t;
  }
  getUrl(t, n, r) {
    return `https://tiles2.geovisearth.com/base/v1/${this.style}/${r}/${t}/${n}?format=${this.format}&tmsIds=w&token=${this.token}`;
  }
}
class up extends St {
  constructor(t = "A,RL") {
    super();
    X(this, "attribution", "bing地图[GS(2021)1731]");
    X(this, "style", "A,RL");
    this.style = t;
  }
  getUrl(t, n, r) {
    return `https://t1.dynamic.tiles.ditu.live.com/comp/ch/${qf(r, t, n)}?mkt=zh-CN&ur=CN&it=${this.style}&n=z&og=804&cstl=vb`;
  }
}
function qf(i, e, t) {
  let n = "";
  for (let r = i; r > 0; r--) {
    const s = 1 << r - 1;
    let o = 0;
    e & s && o++, t & s && (o += 2), n += o;
  }
  return n;
}
class hp extends St {
  // public projection: ProjectionType = "4326";
  constructor(t, n = "img_w") {
    super();
    X(this, "attribution", "天地图[GS(2023)336号]");
    X(this, "token", "");
    X(this, "style");
    this.style = n, this.token = t;
  }
  getUrl(t, n, r) {
    const s = this.projection === "3857" ? "w" : "c";
    return `https://t0.tianditu.gov.cn/${this.style}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=${s}&FORMAT=tiles&TILEMATRIX=${r}&TILEROW=${n}&TILECOL=${t}&tk=${this.token}`;
  }
}
class dp extends St {
  constructor(t = "8") {
    super();
    X(this, "attribution", "高德[GS(2021)6375号]");
    X(this, "style", "8");
    this.style = t;
  }
  getUrl(t, n, r) {
    return `https://webst04.is.autonavi.com/appmaptile?style=${this.style}&x=${t}&y=${n}&z=${r}`;
  }
}
class fp extends Bt {
  constructor(t = "ChinaOnlineStreetPurplishBlue") {
    super();
    X(this, "attribution", "GeoQ");
    X(this, "style", "ChinaOnlineStreetPurplishBlue");
    this.style = t;
  }
  getUrl(t, n, r) {
    return `http://map.geoq.cn/ArcGIS/rest/services/${this.style}/MapServer/tile/${r}/${n}/${t}`;
  }
}
class pp extends St {
  constructor(t = "World_Imagery") {
    super();
    X(this, "attribution", "ArcGIS");
    X(this, "style", "World_Imagery");
    this.style = t;
  }
  getUrl(t, n, r) {
    return `https://services.arcgisonline.com/arcgis/rest/services/${this.style}/MapServer/tile/${r}/${n}/${t}`;
  }
}
class mp extends St {
  constructor(t = "pl") {
    super();
    X(this, "attribution", "百度");
    X(this, "style", "pl");
    this.style = t;
  }
  getUrl(t, n, r) {
    return `http://online0.map.bdimg.com/tile/?qt=tile&x=${t}&y=${n}&z=${r}&v=020`;
  }
}
class gp extends St {
  constructor() {
    super();
    X(this, "attribution", "腾讯[GS(2023)1号]");
  }
  //https://rt3.map.gtimg.com/tile?z=8&x=210&y=152&type=vector&styleid=3&version=117
  //https://p0.map.gtimg.com/sateTiles/8/13/9/214_152.jpg
  //https://p0.map.gtimg.com/sateTiles/5/1/1/24_20.jpg?version=259
  //"https://rt2.map.gtimg.com/tile?z=9&x=410&y=308&styleid=2&version=1308"
  getUrl(t, n, r) {
    const s = t >> 4, o = (1 << r) - n >> 4, a = Math.pow(2, r) - 1 - n;
    return `http://p0.map.gtimg.com/sateTiles/${r}/${s}/${o}/${t}_${a}.jpg`;
  }
}
class _p extends St {
  // constructor(token = "1wQipi7ObKhiPRyTYgl6", id = "hybrid", format = "jpg") {
  constructor(t = "get_your_own_key_QmavnBrQwNGsQ8YvPzZg", n = "terrain-rgb", r = "png") {
    super();
    X(this, "attribution", "MapTiler");
    X(this, "token");
    X(this, "format");
    X(this, "style");
    X(this, "maxLevel", 18);
    this.token = t, this.format = r, this.style = n;
  }
  getUrl(t, n, r) {
    return `https://api.maptiler.com/tiles/${this.style}/${r}/${t}/${n}.${this.format}?key=${this.token}`;
  }
}
class vp extends xi {
  // constructor(token = "1wQipi7ObKhiPRyTYgl6", id = "hybrid", format = "jpg") {
  constructor(t = "get_your_own_key_QmavnBrQwNGsQ8YvPzZg", n = "terrain-rgb", r = "png") {
    super();
    X(this, "attribution", "MapTiler");
    X(this, "token");
    X(this, "format");
    X(this, "style");
    X(this, "maxLevel", 12);
    this.token = t, this.format = r, this.style = n;
  }
  getUrl(t, n, r) {
    return `https://api.maptiler.com/tiles/${this.style}/${r}/${t}/${n}.${this.format}?key=${this.token}`;
  }
}
class xp extends St {
  constructor(t = "s") {
    super();
    X(this, "attribution", "Google");
    X(this, "type", "img");
    X(this, "style");
    X(this, "maxLevel", 18);
    this.style = t;
  }
  getUrl(t, n, r) {
    return `http://gac-geo.googlecnapps.cn/maps/vt?lyrs=${this.style}&x=${t}&y=${n}&z=${r}`;
  }
}
class Mp extends St {
  constructor() {
    super(...arguments);
    X(this, "attribution", "ThreeTile");
    X(this, "maxLevel", 18);
  }
  load(t, n, r) {
    const s = jf(t.x, t.y, t.level), o = new ro(s);
    return o.userData.loaded = !0, setTimeout(() => r(o), 1), o;
  }
}
function jf(i, e, t) {
  const r = new OffscreenCanvas(256, 256), s = r.getContext("2d");
  return s && (s.strokeStyle = "#ccc", s.lineWidth = 4, s.strokeRect(5, 5, 256 - 10, 256 - 10), s.fillStyle = "white", s.shadowColor = "black", s.shadowBlur = 5, s.shadowOffsetX = 1, s.shadowOffsetY = 1, s.font = "bold 20px arial", s.textAlign = "center", s.fillText(`Tile Test - level: ${t}`, 256 / 2, 50), s.fillText(`[${i}, ${e}]`, 256 / 2, 80)), r.transferToImageBitmap();
}
class ni {
  constructor(e = 0) {
    X(this, "centerLon", 0);
    // 是否为经纬度投影
    X(this, "isWGS", !1);
    this.centerLon = e;
  }
  static createFromID(e = "3857", t = 0) {
    let n;
    switch (e) {
      case "3857":
        n = new qi(t);
        break;
      case "4326":
        n = new Zf(t);
        break;
    }
    return n;
  }
  static createFromProvider(e, t = 0) {
    let n = "3857";
    return e && (n = Array.isArray(e) ? e[0].projection : e.projection), ni.createFromID(n, t);
  }
}
function mo(i, e) {
  const t = e.intersectObjects([i.rootTile]);
  for (const n of t)
    if (n.object instanceof Rn) {
      const r = n.point.applyMatrix4(i.matrixWorld.clone().invert()), s = i.unProject(r.x, r.y);
      return Object.assign(n, {
        location: new P(s.lon, s.lat, r.z)
      });
    }
  return null;
}
function Yf(i, e) {
  const t = new P(e.x, e.y, 100), n = new oo(t, new P(0, 0, -1));
  return mo(i, n);
}
function $f(i, e, t) {
  const n = new oo();
  return n.setFromCamera(t, i), mo(e, n);
}
const Kf = new Je(), wa = new Ji();
class go extends Ot {
  /**
   * map mesh constructor
   *
   * 构造函数
   * @param params 地图构造参数 {@link MapContructParams}     *
   * @example
   * ``` typescript
   *  const imgProvider = [source.mapBoxImgProvider, new tt.TestProvider()];
   *  const demProvider = source.mapBoxDemProvider;
   *  const loader = new tt.TileLoader(imgProvider, demProvider, 2, 18);
   *  const map = new TileMap({ loader, projCenterLon: 90 });
   * ```
   */
  constructor(t) {
    super();
    // 渲染时钟计时器
    X(this, "_clock", new ao());
    // 是否为LOD模型（LOD模型，当autoUpdate为真时渲染时会自动调用update方法）
    X(this, "isLOD", !0);
    X(this, "autoUpdate", !0);
    /**
     * root tile
     * 根瓦片
     */
    X(this, "rootTile");
    /**
     * 地图数据加载器
     * map data loader
     */
    X(this, "loader");
    X(this, "_projection");
    this.rootTile = t.rootTile || new Aa(), this.rootTile.addEventListener("created", (n) => {
      this.dispatchEvent({ type: "tile-created", tile: n.tile });
    }), this.rootTile.addEventListener("loaded", (n) => {
      this.dispatchEvent({ type: "tile-loaded", tile: n.tile });
    }), this._attachEvent(), this.loader = t.loader, this.projection = ni.createFromProvider(this.loader.imgProvider, t.projCenterLon), this.add(this.rootTile), this.rootTile.updateMatrix(), this.rootTile.updateMatrixWorld();
  }
  /**
   * get whether to allow tile data to be updated
   * 取得是否允许更新瓦片数据
   */
  get loadeEnable() {
    return this.rootTile.updateDataEnable;
  }
  /**
   * set whether to allow tile data to be updated
   * 设置是否允许更新瓦片数据
   */
  set loadEnable(t) {
    this.rootTile.updateDataEnable = t;
  }
  /**
   * 取得地图投影对象
   * set the map projection object
   */
  get projection() {
    return this._projection;
  }
  /**
   * 设置地图投影对象
   * get the map projection object
   */
  set projection(t) {
    var r;
    const n = (r = this._projection) == null ? void 0 : r.ID;
    this._projection = t, this.loader.projectCenterLon = t.centerLon, this.loader.isWGS = this._projection.isWGS, this.rootTile.scale.set(this._projection.mapWidth, this._projection.mapHeight, this._projection.mapDepth), n && n != t.ID && (this.rebuild(), console.log("Map Projection Changed:", t.ID), this.dispatchEvent({ type: "projection-changed", projection: t }));
  }
  /**
   * 取得影像数据源
   * get the image data provider object
   */
  get imgProvider() {
    return this.loader.imgProvider;
  }
  /**
   * 设置影像数据源
   * set the image data provider object
   */
  set imgProvider(t) {
    this.loader.imgProvider = t ? Array.isArray(t) ? t : [t] : [], this.dispatchEvent({ type: "provider-changed", provider: t }), console.log(this.attributions);
    let n = "3857";
    t && (n = Array.isArray(t) ? t[0].projection : t.projection), this.projection = ni.createFromID(n, this.projection.centerLon);
  }
  /**
   * get the terrain data provider
   * 设置地形数据源
   */
  get demProvider() {
    return this.loader.demProvider;
  }
  /**
   * set the terrain data provider
   * 取得地形数据源
   */
  set demProvider(t) {
    this.loader.demProvider = t, this.dispatchEvent({ type: "provider-changed", provider: t });
  }
  /**
   * map create factory
   * create a map map from params
   * 
   * 地图创建工厂函数
     @param params 地图参数 {@link MapParams}
     @returns 地图模型
     @example
     ``` typescript
      TileMap.create({
          // 影像数据源
          imgProvider: [source.mapBoxImgProvider, new TestProvider()],
          // 高程数据源
          demProvider: source.mapBoxDemProvider,
          // 地图投影中心经度
          projCenterLon: 90,
          // 最小缩放级别
          minLevel: 1,
          // 最大缩放级别
          maxLevel: 18,
      });
     ```
   */
  static create(t) {
    const n = new Aa();
    let r = t.imgProvider;
    Array.isArray(r) || (r = [r]);
    const s = new Mt(r, t.demProvider, t.minLevel, t.maxLevel);
    return s.projectCenterLon != 0 && s.minLevel < 1 && console.warn(`Map projection is ${s.projectCenterLon}, minLevel must > 0`), new go({ loader: s, rootTile: n, projCenterLon: t.projCenterLon });
  }
  /**
   * update the map, It is automatically called after adding a scene
   * 模型更新回调函数，地图加入场景后会在每帧更新时被调用
   * @param camera 摄像机
   */
  update(t) {
    wa.setFromProjectionMatrix(Kf.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse)), this.rootTile.update(t, wa, this.loader), this.dispatchEvent({ type: "update", delta: this._clock.getDelta() });
  }
  /**
   * reload the map data
   * call this after the provider has changed
   * 重新加载地图，在改变地图数据源后调用它才能生效
   */
  reload() {
    this.rootTile.reload();
  }
  /**
   * rebuild th map
   * It is generally used when changing the projection of a map
   * 重新构建瓦片树，一般在改变投影时用它
   */
  rebuild() {
    this.rootTile.dispose(!0);
  }
  /**
   * get map data attributions information
   * 取得地图数据归属信息
   * @returns Attributions 版权信息数组
   */
  get attributions() {
    const t = [];
    let n = this.imgProvider;
    if (n && (Array.isArray(n) || (n = [n]), n.forEach((r) => {
      const s = r.attribution;
      s && t.indexOf(s) < 0 && t.push(s);
    })), this.demProvider) {
      const r = this.demProvider.attribution;
      r && t.indexOf(r) < 0 && t.push(r);
    }
    return t;
  }
  /**
   * Latitude and longitude (4326) converted to scene projection coordinates (3857)
   * 经纬度(4326)转换为场景投影坐标(3857)
   * @param lon 经度
   * @param lat 纬度
   * @returns 投影坐标
   */
  project(t, n) {
    return this._projection.project(t, n);
  }
  /**
   * Scene projection coordinates (3857) converted to latitude and longitude (4326)
   * 场景投影坐标（3857）转换为经纬度(4326)
   * @param x 投影x坐标
   * @param y 投影y坐标
   * @returns 经纬度
   */
  unProject(t, n) {
    return this._projection.unProject(t, n);
  }
  /**
   * get the ground elevation for the specified latitude and longitude
   * 获取指定经纬度的地面信息（法向量、高度等）
   * @param lon 经度
   * @param lat 纬度
   * @returns 海拔高度（km）
   */
  getLocalInfoFromLocation(t, n) {
    const r = this.project(t, n);
    return Yf(this, new Ae(r.x, r.y));
  }
  /**
   * get the loacation infomation from screen point
   * @param camera 摄像机
   * @param pointer 点的屏幕坐标（-0.5~0.5）
   * @returns 位置信息（经纬度、高度等）
   */
  getLocationFromScreen(t, n) {
    return $f(t, this, n);
  }
  /**
   * get map tiles statistics to debug
   * @returns 取得瓦片统计信息，用于调试性能
   */
  getTileCount() {
    let t = 0, n = 0, r = 0, s = 0;
    return this.rootTile.traverse((o) => {
      t++, o.isLeafInFrustum && n++, o.isLeaf && s++, r = Math.max(r, o.level);
    }), { sum: t, visible: n, leaf: s, maxLevle: r };
  }
  // public clampToGround(obj: Object3D) {
  //     const worldPosition = obj.getWorldPosition(tempVec3);
  //     // 取得海拔高度
  //     const h = this.getAltitudeFromWorldPostion(worldPosition);
  //     // obj.geometry.center()
  //     obj.position.setZ(h);
  // }
  /**
   * 监听将瓦片数据加载事件
   */
  _attachEvent() {
    return Bt.loadingManager.onStart = (t, n, r) => {
      this.dispatchEvent({
        type: "loading-start",
        itemsLoaded: n,
        itemsTotal: r
      });
    }, Bt.loadingManager.onError = (t) => {
      this.dispatchEvent({ type: "loading-error", url: t });
    }, Bt.loadingManager.onLoad = () => {
      this.dispatchEvent({ type: "loading-complete" });
    }, Bt.loadingManager.onProgress = (t, n, r) => {
      this.dispatchEvent({
        type: "loading-progress",
        url: t,
        itemsLoaded: n,
        itemsTotal: r
      });
    }, this;
  }
}
const Ra = 6378, di = class extends ni {
  constructor() {
    super(...arguments);
    X(this, "ID", "3857");
    X(this, "isWGS", !1);
    X(this, "mapWidth", 2 * Math.PI * Ra);
    //地球周长(公里)
    X(this, "mapHeight", this.mapWidth);
    //地球周长(公里)
    X(this, "mapDepth", 1);
  }
  //高度不拉伸
  /**
   * 经纬度转投影坐标
   * @param lon 经度
   * @param lat 纬度
   * @returns 投影坐标
   */
  project(t, n) {
    let r = t * Math.PI / 180 * di.earthRad;
    r -= this._getOffsetX();
    let s = n * Math.PI / 180;
    const o = Math.sin(s);
    return s = di.earthRad / 2 * Math.log((1 + o) / (1 - o)), { x: r, y: s };
  }
  /**
   * 投影坐标转经纬度
   * @param x
   * @param y
   * @returns
   */
  unProject(t, n) {
    t += this._getOffsetX();
    const r = di.earthRad * Math.PI;
    let s = t / r * 180, o = n / r * 180;
    return o = 180 / Math.PI * (2 * Math.atan(Math.exp(o * Math.PI / 180)) - Math.PI / 2), { lon: s, lat: o };
  }
  _getOffsetX() {
    return this.mapWidth / 360 * this.centerLon;
  }
};
let qi = di;
// 地球半径
X(qi, "earthRad", Ra);
class Zf extends ni {
  constructor() {
    super(...arguments);
    X(this, "ID", "4326");
    X(this, "isWGS", !0);
    X(this, "mapWidth", 36e3);
    //东西拉伸到36000个单位（360°）
    X(this, "mapHeight", 18e3);
    //南北拉伸到18000个单位（180°）
    X(this, "mapDepth", 1);
  }
  //垂直不拉伸
  project(t, n) {
    return { x: (t - this.centerLon) * 100, y: n * 100 };
  }
  unProject(t, n) {
    return { lon: t / 100 + this.centerLon, lat: n / 100 };
  }
}
const Ca = { type: "change" }, Nr = { type: "start" }, La = { type: "end" };
class Jf extends ln {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: $t.ROTATE, MIDDLE: $t.DOLLY, RIGHT: $t.PAN }, this.touches = { ONE: rn.ROTATE, TWO: rn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(A) {
      A.addEventListener("keydown", ke), this._domElementKeyEvents = A;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", ke), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Ca), n.update(), s = r.NONE;
    }, this.update = function() {
      const A = new P(), j = new An().setFromUnitVectors(e.up, new P(0, 1, 0)), F = j.clone().invert(), le = new P(), fe = new An(), ge = 2 * Math.PI;
      return function() {
        const pe = n.object.position;
        A.copy(pe).sub(n.target), A.applyQuaternion(j), a.setFromVector3(A), n.autoRotate && s === r.NONE && g(D()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let Te = n.minAzimuthAngle, Pe = n.maxAzimuthAngle;
        return isFinite(Te) && isFinite(Pe) && (Te < -Math.PI ? Te += ge : Te > Math.PI && (Te -= ge), Pe < -Math.PI ? Pe += ge : Pe > Math.PI && (Pe -= ge), Te <= Pe ? a.theta = Math.max(Te, Math.min(Pe, a.theta)) : a.theta = a.theta > (Te + Pe) / 2 ? Math.max(Te, a.theta) : Math.min(Pe, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), A.setFromSpherical(a), A.applyQuaternion(F), pe.copy(n.target).add(A), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), u.set(0, 0, 0)), l = 1, f || le.distanceToSquared(n.object.position) > o || 8 * (1 - fe.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Ca), le.copy(n.object.position), fe.copy(n.object.quaternion), f = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", v), n.domElement.removeEventListener("pointerdown", Re), n.domElement.removeEventListener("pointercancel", We), n.domElement.removeEventListener("wheel", Oe), n.domElement.removeEventListener("pointermove", Xe), n.domElement.removeEventListener("pointerup", We), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", ke), n._domElementKeyEvents = null);
    };
    const n = this, r = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = r.NONE;
    const o = 1e-6, a = new Ea(), c = new Ea();
    let l = 1;
    const u = new P();
    let f = !1;
    const d = new Ae(), p = new Ae(), _ = new Ae(), x = new Ae(), m = new Ae(), h = new Ae(), T = new Ae(), M = new Ae(), w = new Ae(), y = [], R = {};
    function D() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function k() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function g(A) {
      c.theta -= A;
    }
    function b(A) {
      c.phi -= A;
    }
    const $ = function() {
      const A = new P();
      return function(F, le) {
        A.setFromMatrixColumn(le, 0), A.multiplyScalar(-F), u.add(A);
      };
    }(), J = function() {
      const A = new P();
      return function(F, le) {
        n.screenSpacePanning === !0 ? A.setFromMatrixColumn(le, 1) : (A.setFromMatrixColumn(le, 0), A.crossVectors(n.object.up, A)), A.multiplyScalar(F), u.add(A);
      };
    }(), I = function() {
      const A = new P();
      return function(F, le) {
        const fe = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const ge = n.object.position;
          A.copy(ge).sub(n.target);
          let he = A.length();
          he *= Math.tan(n.object.fov / 2 * Math.PI / 180), $(2 * F * he / fe.clientHeight, n.object.matrix), J(2 * le * he / fe.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? ($(F * (n.object.right - n.object.left) / n.object.zoom / fe.clientWidth, n.object.matrix), J(le * (n.object.top - n.object.bottom) / n.object.zoom / fe.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function B(A) {
      n.object.isPerspectiveCamera ? l /= A : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * A)), n.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function V(A) {
      n.object.isPerspectiveCamera ? l *= A : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / A)), n.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function ie(A) {
      d.set(A.clientX, A.clientY);
    }
    function Y(A) {
      T.set(A.clientX, A.clientY);
    }
    function q(A) {
      x.set(A.clientX, A.clientY);
    }
    function Z(A) {
      p.set(A.clientX, A.clientY), _.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      g(2 * Math.PI * _.x / j.clientHeight), b(2 * Math.PI * _.y / j.clientHeight), d.copy(p), n.update();
    }
    function te(A) {
      M.set(A.clientX, A.clientY), w.subVectors(M, T), w.y > 0 ? B(k()) : w.y < 0 && V(k()), T.copy(M), n.update();
    }
    function me(A) {
      m.set(A.clientX, A.clientY), h.subVectors(m, x).multiplyScalar(n.panSpeed), I(h.x, h.y), x.copy(m), n.update();
    }
    function ue(A) {
      A.deltaY < 0 ? V(k()) : A.deltaY > 0 && B(k()), n.update();
    }
    function z(A) {
      let j = !1;
      switch (A.code) {
        case n.keys.UP:
          A.ctrlKey || A.metaKey || A.shiftKey ? b(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(0, n.keyPanSpeed), j = !0;
          break;
        case n.keys.BOTTOM:
          A.ctrlKey || A.metaKey || A.shiftKey ? b(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(0, -n.keyPanSpeed), j = !0;
          break;
        case n.keys.LEFT:
          A.ctrlKey || A.metaKey || A.shiftKey ? g(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(n.keyPanSpeed, 0), j = !0;
          break;
        case n.keys.RIGHT:
          A.ctrlKey || A.metaKey || A.shiftKey ? g(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(-n.keyPanSpeed, 0), j = !0;
          break;
      }
      j && (A.preventDefault(), n.update());
    }
    function K() {
      if (y.length === 1)
        d.set(y[0].pageX, y[0].pageY);
      else {
        const A = 0.5 * (y[0].pageX + y[1].pageX), j = 0.5 * (y[0].pageY + y[1].pageY);
        d.set(A, j);
      }
    }
    function se() {
      if (y.length === 1)
        x.set(y[0].pageX, y[0].pageY);
      else {
        const A = 0.5 * (y[0].pageX + y[1].pageX), j = 0.5 * (y[0].pageY + y[1].pageY);
        x.set(A, j);
      }
    }
    function ce() {
      const A = y[0].pageX - y[1].pageX, j = y[0].pageY - y[1].pageY, F = Math.sqrt(A * A + j * j);
      T.set(0, F);
    }
    function L() {
      n.enableZoom && ce(), n.enablePan && se();
    }
    function ye() {
      n.enableZoom && ce(), n.enableRotate && K();
    }
    function Ee(A) {
      if (y.length == 1)
        p.set(A.pageX, A.pageY);
      else {
        const F = oe(A), le = 0.5 * (A.pageX + F.x), fe = 0.5 * (A.pageY + F.y);
        p.set(le, fe);
      }
      _.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      g(2 * Math.PI * _.x / j.clientHeight), b(2 * Math.PI * _.y / j.clientHeight), d.copy(p);
    }
    function re(A) {
      if (y.length === 1)
        m.set(A.pageX, A.pageY);
      else {
        const j = oe(A), F = 0.5 * (A.pageX + j.x), le = 0.5 * (A.pageY + j.y);
        m.set(F, le);
      }
      h.subVectors(m, x).multiplyScalar(n.panSpeed), I(h.x, h.y), x.copy(m);
    }
    function Me(A) {
      const j = oe(A), F = A.pageX - j.x, le = A.pageY - j.y, fe = Math.sqrt(F * F + le * le);
      M.set(0, fe), w.set(0, Math.pow(M.y / T.y, n.zoomSpeed)), B(w.y), T.copy(M);
    }
    function Be(A) {
      n.enableZoom && Me(A), n.enablePan && re(A);
    }
    function ve(A) {
      n.enableZoom && Me(A), n.enableRotate && Ee(A);
    }
    function Re(A) {
      n.enabled !== !1 && (y.length === 0 && (n.domElement.setPointerCapture(A.pointerId), n.domElement.addEventListener("pointermove", Xe), n.domElement.addEventListener("pointerup", We)), O(A), A.pointerType === "touch" ? rt(A) : $e(A));
    }
    function Xe(A) {
      n.enabled !== !1 && (A.pointerType === "touch" ? E(A) : qe(A));
    }
    function We(A) {
      Q(A), y.length === 0 && (n.domElement.releasePointerCapture(A.pointerId), n.domElement.removeEventListener("pointermove", Xe), n.domElement.removeEventListener("pointerup", We)), n.dispatchEvent(La), s = r.NONE;
    }
    function $e(A) {
      let j;
      switch (A.button) {
        case 0:
          j = n.mouseButtons.LEFT;
          break;
        case 1:
          j = n.mouseButtons.MIDDLE;
          break;
        case 2:
          j = n.mouseButtons.RIGHT;
          break;
        default:
          j = -1;
      }
      switch (j) {
        case $t.DOLLY:
          if (n.enableZoom === !1)
            return;
          Y(A), s = r.DOLLY;
          break;
        case $t.ROTATE:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enablePan === !1)
              return;
            q(A), s = r.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            ie(A), s = r.ROTATE;
          }
          break;
        case $t.PAN:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enableRotate === !1)
              return;
            ie(A), s = r.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            q(A), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Nr);
    }
    function qe(A) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1)
            return;
          Z(A);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1)
            return;
          te(A);
          break;
        case r.PAN:
          if (n.enablePan === !1)
            return;
          me(A);
          break;
      }
    }
    function Oe(A) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (A.preventDefault(), n.dispatchEvent(Nr), ue(A), n.dispatchEvent(La));
    }
    function ke(A) {
      n.enabled === !1 || n.enablePan === !1 || z(A);
    }
    function rt(A) {
      switch (ne(A), y.length) {
        case 1:
          switch (n.touches.ONE) {
            case rn.ROTATE:
              if (n.enableRotate === !1)
                return;
              K(), s = r.TOUCH_ROTATE;
              break;
            case rn.PAN:
              if (n.enablePan === !1)
                return;
              se(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case rn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              L(), s = r.TOUCH_DOLLY_PAN;
              break;
            case rn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              ye(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Nr);
    }
    function E(A) {
      switch (ne(A), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          Ee(A), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          re(A), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          Be(A), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          ve(A), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function v(A) {
      n.enabled !== !1 && A.preventDefault();
    }
    function O(A) {
      y.push(A);
    }
    function Q(A) {
      delete R[A.pointerId];
      for (let j = 0; j < y.length; j++)
        if (y[j].pointerId == A.pointerId) {
          y.splice(j, 1);
          return;
        }
    }
    function ne(A) {
      let j = R[A.pointerId];
      j === void 0 && (j = new Ae(), R[A.pointerId] = j), j.set(A.pageX, A.pageY);
    }
    function oe(A) {
      const j = A.pointerId === y[0].pointerId ? y[1] : y[0];
      return R[j.pointerId];
    }
    n.domElement.addEventListener("contextmenu", v), n.domElement.addEventListener("pointerdown", Re), n.domElement.addEventListener("pointercancel", We), n.domElement.addEventListener("wheel", Oe, { passive: !1 }), this.update();
  }
}
class Qf extends Jf {
  constructor(e, t) {
    super(e, t), this.screenSpacePanning = !1, this.mouseButtons = { LEFT: $t.PAN, MIDDLE: $t.DOLLY, RIGHT: $t.ROTATE }, this.touches = { ONE: rn.PAN, TWO: rn.DOLLY_ROTATE };
  }
}
class Sp extends ln {
  constructor(t, n = new P(0, 3e3, 0), r = new P(0, -1e3, 1e4)) {
    super();
    X(this, "scene");
    X(this, "renderer");
    X(this, "camera");
    X(this, "controls");
    X(this, "ambLight");
    X(this, "dirLight");
    X(this, "container");
    X(this, "_clock", new ao());
    this.container = t, this.renderer = new io({
      antialias: !0,
      alpha: !0,
      logarithmicDepthBuffer: !0,
      precision: "highp"
    }), this.renderer.sortObjects = !0, this.renderer.setPixelRatio(window.devicePixelRatio), this.container.appendChild(this.renderer.domElement);
    const s = 12312063;
    this.scene = new yf(), this.scene.background = new Ge(s), this.scene.fog = new Yi(s, 0), this.camera = new bt(80, 1, 0.1, 5e4), this.camera.position.copy(r), this.camera.up.set(0, 0, 1), this.controls = new Qf(this.camera, this.container), this.controls.target.copy(n), this.controls.minDistance = 0.1, this.controls.maxDistance = 15e3, this.controls.zoomSpeed = 3, this.controls.maxPolarAngle = 1.2, this.controls.enableDamping = !0, this.controls.listenToKeyEvents(window), this.controls.addEventListener("change", () => {
      const o = Math.max(this.controls.getPolarAngle(), 0.1), a = Math.max(this.controls.getDistance(), 0.1);
      this.controls.zoomSpeed = Math.max(Math.log(a), 1.8), this.camera.far = Math.max(Math.min(a / o * 8, 5e4), 100), this.camera.near = this.camera.far / 1e3, this.camera.updateProjectionMatrix(), this.scene.fog instanceof Yi && (this.scene.fog.density = o / (a + 5) / 4);
    }), this.controls.saveState(), this.ambLight = new Rf(16777215, 0.7), this.scene.add(this.ambLight), this.dirLight = new wf(16777215, 0.5), this.dirLight.target.position.copy(this.controls.target), this.dirLight.position.set(-1e4, -1e5, 1e5), this.scene.add(this.dirLight), window.addEventListener("resize", this.resize.bind(this)), this.resize(), this.animate();
  }
  //浏览器窗口大小变化重置状态
  resize() {
    this.renderer.setSize(1, 1);
    const t = this.container.clientWidth, n = this.container.clientHeight;
    return this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(t, n), this.camera.aspect = t / n, this.camera.updateProjectionMatrix(), this;
  }
  animate() {
    this.controls.update(), this.renderer.render(this.scene, this.camera), this.dispatchEvent({ type: "update", delta: this._clock.getDelta() }), requestAnimationFrame(this.animate.bind(this));
  }
}
export {
  lo as AbortImageLoader,
  pp as ArcGisProvider,
  mp as BaiduProvider,
  up as BingMapsProvider,
  xi as DemProvider,
  dp as GDProvider,
  Sp as GLViewer,
  fp as GeoqProvider,
  xp as GoogleProvider,
  St as ImgProvider,
  op as MapBoxDemProvider,
  ap as MapBoxImgProvider,
  vp as MapTilerDemProvider,
  _p as MapTilerImgProvider,
  qi as ProjMCT,
  Zf as ProjWGS,
  ni as Projection,
  Bt as Provider,
  Aa as RootTile,
  hp as TDTProvider,
  gp as TXProvider,
  tp as TestLoader,
  Mp as TestProvider,
  Rn as Tile,
  rp as TileDEMGeometry,
  fo as TileGeometry,
  Uf as TileGeometryLoader,
  Mt as TileLoader,
  go as TileMap,
  uo as TileMaterial,
  Wf as TileRGBGeometry,
  np as TileShaderMaterialLoader,
  ip as WireframeLoader,
  lp as ZKXTImgProvider,
  cp as ZKXtDemProvider,
  co as getAbortController,
  If as getImageData,
  sp as getUrl
};
