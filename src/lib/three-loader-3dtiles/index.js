var Uc = Object.defineProperty;
var Hc = (e, t, n) => t in e ? Uc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => Hc(e, typeof t != "symbol" ? t + "" : t, n);
import { CanvasTexture as Jc, LinearFilter as Vc, RepeatWrapping as Vr, Frustum as jc, Matrix4 as Y, Group as Cn, PlaneGeometry as kc, Vector3 as st, MeshBasicMaterial as Gs, DoubleSide as Jo, Mesh as Ns, ArrowHelper as Kc, Color as w, BoxGeometry as zc, EdgesGeometry as Wc, LineSegments as Xc, LineBasicMaterial as Qc, Vector2 as Vo, ShaderMaterial as ar, NormalBlending as cr, WebGLRenderTarget as qc, NearestFilter as jr, RGBAFormat as $c, FloatType as Yc, Scene as Zc, WebGLRenderer as tu, Euler as ns, BufferGeometry as jo, Float32BufferAttribute as Mn, BufferAttribute as ko, Quaternion as eu, Uint8BufferAttribute as kr, Points as nu } from "three";
import { GLTFLoader as su } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader as ru } from "three/examples/jsm/loaders/DRACOLoader.js";
import { KTX2Loader as iu } from "three/examples/jsm/loaders/KTX2Loader.js";
async function Ke(e, t, n, s) {
  return s._parse(e, t, n, s);
}
function K(e, t) {
  if (!e)
    throw new Error(t || "loader assertion failed.");
}
const Vn = !!(typeof process != "object" || String(process) !== "[object process]" || process.browser), Kr = typeof process < "u" && process.version && /v([0-9]*)/.exec(process.version);
Kr && parseFloat(Kr[1]);
function ou(e, t) {
  return Ko(e || {}, t);
}
function Ko(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  if (n > 3)
    return t;
  const s = {
    ...e
  };
  for (const [r, i] of Object.entries(t))
    i && typeof i == "object" && !Array.isArray(i) ? s[r] = Ko(s[r] || {}, t[r], n + 1) : s[r] = t[r];
  return s;
}
const au = "latest";
function cu() {
  var e;
  return (e = globalThis._loadersgl_) !== null && e !== void 0 && e.version || (globalThis._loadersgl_ = globalThis._loadersgl_ || {}, globalThis._loadersgl_.version = "4.1.1"), globalThis._loadersgl_.version;
}
const zo = cu();
function Ht(e, t) {
  if (!e)
    throw new Error(t || "loaders.gl assertion failed.");
}
const Tt = typeof process != "object" || String(process) !== "[object process]" || process.browser, ur = typeof importScripts == "function", uu = typeof window < "u" && typeof window.orientation < "u", zr = typeof process < "u" && process.version && /v([0-9]*)/.exec(process.version);
zr && parseFloat(zr[1]);
class lu {
  constructor(t, n) {
    this.name = void 0, this.workerThread = void 0, this.isRunning = !0, this.result = void 0, this._resolve = () => {
    }, this._reject = () => {
    }, this.name = t, this.workerThread = n, this.result = new Promise((s, r) => {
      this._resolve = s, this._reject = r;
    });
  }
  postMessage(t, n) {
    this.workerThread.postMessage({
      source: "loaders.gl",
      type: t,
      payload: n
    });
  }
  done(t) {
    Ht(this.isRunning), this.isRunning = !1, this._resolve(t);
  }
  error(t) {
    Ht(this.isRunning), this.isRunning = !1, this._reject(t);
  }
}
class ss {
  terminate() {
  }
}
const rs = /* @__PURE__ */ new Map();
function hu(e) {
  Ht(e.source && !e.url || !e.source && e.url);
  let t = rs.get(e.source || e.url);
  return t || (e.url && (t = fu(e.url), rs.set(e.url, t)), e.source && (t = Wo(e.source), rs.set(e.source, t))), Ht(t), t;
}
function fu(e) {
  if (!e.startsWith("http"))
    return e;
  const t = du(e);
  return Wo(t);
}
function Wo(e) {
  const t = new Blob([e], {
    type: "application/javascript"
  });
  return URL.createObjectURL(t);
}
function du(e) {
  return `try {
  importScripts('${e}');
} catch (error) {
  console.error(error);
  throw error;
}`;
}
function Xo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 ? arguments[2] : void 0;
  const s = n || /* @__PURE__ */ new Set();
  if (e) {
    if (Wr(e))
      s.add(e);
    else if (Wr(e.buffer))
      s.add(e.buffer);
    else if (!ArrayBuffer.isView(e)) {
      if (t && typeof e == "object")
        for (const r in e)
          Xo(e[r], t, s);
    }
  }
  return n === void 0 ? Array.from(s) : [];
}
function Wr(e) {
  return e ? e instanceof ArrayBuffer || typeof MessagePort < "u" && e instanceof MessagePort || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas : !1;
}
const is = () => {
};
class Us {
  static isSupported() {
    return typeof Worker < "u" && Tt || typeof ss < "u" && !Tt;
  }
  constructor(t) {
    this.name = void 0, this.source = void 0, this.url = void 0, this.terminated = !1, this.worker = void 0, this.onMessage = void 0, this.onError = void 0, this._loadableURL = "";
    const {
      name: n,
      source: s,
      url: r
    } = t;
    Ht(s || r), this.name = n, this.source = s, this.url = r, this.onMessage = is, this.onError = (i) => console.log(i), this.worker = Tt ? this._createBrowserWorker() : this._createNodeWorker();
  }
  destroy() {
    this.onMessage = is, this.onError = is, this.worker.terminate(), this.terminated = !0;
  }
  get isRunning() {
    return !!this.onMessage;
  }
  postMessage(t, n) {
    n = n || Xo(t), this.worker.postMessage(t, n);
  }
  _getErrorFromErrorEvent(t) {
    let n = "Failed to load ";
    return n += `worker ${this.name} from ${this.url}. `, t.message && (n += `${t.message} in `), t.lineno && (n += `:${t.lineno}:${t.colno}`), new Error(n);
  }
  _createBrowserWorker() {
    this._loadableURL = hu({
      source: this.source,
      url: this.url
    });
    const t = new Worker(this._loadableURL, {
      name: this.name
    });
    return t.onmessage = (n) => {
      n.data ? this.onMessage(n.data) : this.onError(new Error("No data received"));
    }, t.onerror = (n) => {
      this.onError(this._getErrorFromErrorEvent(n)), this.terminated = !0;
    }, t.onmessageerror = (n) => console.error(n), t;
  }
  _createNodeWorker() {
    let t;
    if (this.url) {
      const s = this.url.includes(":/") || this.url.startsWith("/") ? this.url : `./${this.url}`;
      t = new ss(s, {
        eval: !1
      });
    } else if (this.source)
      t = new ss(this.source, {
        eval: !0
      });
    else
      throw new Error("no worker");
    return t.on("message", (n) => {
      this.onMessage(n);
    }), t.on("error", (n) => {
      this.onError(n);
    }), t.on("exit", (n) => {
    }), t;
  }
}
class mu {
  static isSupported() {
    return Us.isSupported();
  }
  constructor(t) {
    this.name = "unnamed", this.source = void 0, this.url = void 0, this.maxConcurrency = 1, this.maxMobileConcurrency = 1, this.onDebug = () => {
    }, this.reuseWorkers = !0, this.props = {}, this.jobQueue = [], this.idleQueue = [], this.count = 0, this.isDestroyed = !1, this.source = t.source, this.url = t.url, this.setProps(t);
  }
  destroy() {
    this.idleQueue.forEach((t) => t.destroy()), this.isDestroyed = !0;
  }
  setProps(t) {
    this.props = {
      ...this.props,
      ...t
    }, t.name !== void 0 && (this.name = t.name), t.maxConcurrency !== void 0 && (this.maxConcurrency = t.maxConcurrency), t.maxMobileConcurrency !== void 0 && (this.maxMobileConcurrency = t.maxMobileConcurrency), t.reuseWorkers !== void 0 && (this.reuseWorkers = t.reuseWorkers), t.onDebug !== void 0 && (this.onDebug = t.onDebug);
  }
  async startJob(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (i, o, a) => i.done(a), s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (i, o) => i.error(o);
    const r = new Promise((i) => (this.jobQueue.push({
      name: t,
      onMessage: n,
      onError: s,
      onStart: i
    }), this));
    return this._startQueuedJob(), await r;
  }
  async _startQueuedJob() {
    if (!this.jobQueue.length)
      return;
    const t = this._getAvailableWorker();
    if (!t)
      return;
    const n = this.jobQueue.shift();
    if (n) {
      this.onDebug({
        message: "Starting job",
        name: n.name,
        workerThread: t,
        backlog: this.jobQueue.length
      });
      const s = new lu(n.name, t);
      t.onMessage = (r) => n.onMessage(s, r.type, r.payload), t.onError = (r) => n.onError(s, r), n.onStart(s);
      try {
        await s.result;
      } catch (r) {
        console.error(`Worker exception: ${r}`);
      } finally {
        this.returnWorkerToQueue(t);
      }
    }
  }
  returnWorkerToQueue(t) {
    !Tt || this.isDestroyed || !this.reuseWorkers || this.count > this._getMaxConcurrency() ? (t.destroy(), this.count--) : this.idleQueue.push(t), this.isDestroyed || this._startQueuedJob();
  }
  _getAvailableWorker() {
    if (this.idleQueue.length > 0)
      return this.idleQueue.shift() || null;
    if (this.count < this._getMaxConcurrency()) {
      this.count++;
      const t = `${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;
      return new Us({
        name: t,
        source: this.source,
        url: this.url
      });
    }
    return null;
  }
  _getMaxConcurrency() {
    return uu ? this.maxMobileConcurrency : this.maxConcurrency;
  }
}
const gu = {
  maxConcurrency: 3,
  maxMobileConcurrency: 1,
  reuseWorkers: !0,
  onDebug: () => {
  }
};
class Gt {
  static isSupported() {
    return Us.isSupported();
  }
  static getWorkerFarm() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Gt._workerFarm = Gt._workerFarm || new Gt({}), Gt._workerFarm.setProps(t), Gt._workerFarm;
  }
  constructor(t) {
    this.props = void 0, this.workerPools = /* @__PURE__ */ new Map(), this.props = {
      ...gu
    }, this.setProps(t), this.workerPools = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const t of this.workerPools.values())
      t.destroy();
    this.workerPools = /* @__PURE__ */ new Map();
  }
  setProps(t) {
    this.props = {
      ...this.props,
      ...t
    };
    for (const n of this.workerPools.values())
      n.setProps(this._getWorkerPoolProps());
  }
  getWorkerPool(t) {
    const {
      name: n,
      source: s,
      url: r
    } = t;
    let i = this.workerPools.get(n);
    return i || (i = new mu({
      name: n,
      source: s,
      url: r
    }), i.setProps(this._getWorkerPoolProps()), this.workerPools.set(n, i)), i;
  }
  _getWorkerPoolProps() {
    return {
      maxConcurrency: this.props.maxConcurrency,
      maxMobileConcurrency: this.props.maxMobileConcurrency,
      reuseWorkers: this.props.reuseWorkers,
      onDebug: this.props.onDebug
    };
  }
}
Gt._workerFarm = void 0;
function Au(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = t[e.id] || {}, s = Tt ? `${e.id}-worker.js` : `${e.id}-worker-node.js`;
  let r = n.workerUrl;
  if (!r && e.id === "compression" && (r = t.workerUrl), t._workerType === "test" && (Tt ? r = `modules/${e.module}/dist/${s}` : r = `modules/${e.module}/src/workers/${e.id}-worker-node.ts`), !r) {
    let i = e.version;
    i === "latest" && (i = au);
    const o = i ? `@${i}` : "";
    r = `https://unpkg.com/@loaders.gl/${e.module}${o}/dist/${s}`;
  }
  return Ht(r), r;
}
function pu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zo;
  Ht(e, "no worker provided");
  const n = e.version;
  return !(!t || !n);
}
const yu = {}, Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yu
}, Symbol.toStringTag, { value: "Module" })), os = {};
async function Yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  return t && (e = Cu(e, t, n, s)), os[e] = os[e] || Eu(e), await os[e];
}
function Cu(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!n.useLocalLibraries && e.startsWith("http"))
    return e;
  s = s || e;
  const r = n.modules || {};
  return r[s] ? r[s] : Tt ? n.CDN ? (Ht(n.CDN.startsWith("http")), `${n.CDN}/${t}@${zo}/dist/libs/${s}`) : ur ? `../src/libs/${s}` : `modules/${t}/src/libs/${s}` : `modules/${t}/dist/libs/${s}`;
}
async function Eu(e) {
  if (e.endsWith("wasm"))
    return await bu(e);
  if (!Tt)
    try {
      return Bu && void 0;
    } catch (n) {
      return console.error(n), null;
    }
  if (ur)
    return importScripts(e);
  const t = await _u(e);
  return Tu(t, e);
}
function Tu(e, t) {
  if (!Tt)
    return;
  if (ur)
    return eval.call(globalThis, e), null;
  const n = document.createElement("script");
  n.id = t;
  try {
    n.appendChild(document.createTextNode(e));
  } catch {
    n.text = e;
  }
  return document.body.appendChild(n), null;
}
async function bu(e) {
  return await (await fetch(e)).arrayBuffer();
}
async function _u(e) {
  return await (await fetch(e)).text();
}
function wu(e, t) {
  return !Gt.isSupported() || !Tt && !(t != null && t._nodeWorkers) ? !1 : e.worker && (t == null ? void 0 : t.worker);
}
async function Ru(e, t, n, s, r) {
  const i = e.id, o = Au(e, n), c = Gt.getWorkerFarm(n).getWorkerPool({
    name: i,
    url: o
  });
  n = JSON.parse(JSON.stringify(n)), s = JSON.parse(JSON.stringify(s || {}));
  const u = await c.startJob("process-on-worker", Mu.bind(null, r));
  return u.postMessage("process", {
    input: t,
    options: n,
    context: s
  }), await (await u.result).result;
}
async function Mu(e, t, n, s) {
  switch (n) {
    case "done":
      t.done(s);
      break;
    case "error":
      t.error(new Error(s.error));
      break;
    case "process":
      const {
        id: r,
        input: i,
        options: o
      } = s;
      try {
        const a = await e(i, o);
        t.postMessage("done", {
          id: r,
          result: a
        });
      } catch (a) {
        const c = a instanceof Error ? a.message : "unknown error";
        t.postMessage("error", {
          id: r,
          error: c
        });
      }
      break;
    default:
      console.warn(`parse-with-worker unknown message ${n}`);
  }
}
function Su(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
  return typeof e == "string" ? e.slice(0, t) : ArrayBuffer.isView(e) ? Xr(e.buffer, e.byteOffset, t) : e instanceof ArrayBuffer ? Xr(e, 0, t) : "";
}
function Xr(e, t, n) {
  if (e.byteLength <= t + n)
    return "";
  const s = new DataView(e);
  let r = "";
  for (let i = 0; i < n; i++)
    r += String.fromCharCode(s.getUint8(t + i));
  return r;
}
function Iu(e) {
  try {
    return JSON.parse(e);
  } catch {
    throw new Error(`Failed to parse JSON from data starting with "${Su(e)}"`);
  }
}
function xu(e, t, n) {
  if (n = n || e.byteLength, e.byteLength < n || t.byteLength < n)
    return !1;
  const s = new Uint8Array(e), r = new Uint8Array(t);
  for (let i = 0; i < s.length; ++i)
    if (s[i] !== r[i])
      return !1;
  return !0;
}
function Ou() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Fu(t);
}
function Fu(e) {
  const t = e.map((i) => i instanceof ArrayBuffer ? new Uint8Array(i) : i), n = t.reduce((i, o) => i + o.byteLength, 0), s = new Uint8Array(n);
  let r = 0;
  for (const i of t)
    s.set(i, r), r += i.byteLength;
  return s.buffer;
}
function lr(e, t, n) {
  const s = n !== void 0 ? new Uint8Array(e).subarray(t, t + n) : new Uint8Array(e).subarray(t);
  return new Uint8Array(s).buffer;
}
function ze(e, t) {
  return K(e >= 0), K(t > 0), e + (t - 1) & ~(t - 1);
}
function vu(e, t, n) {
  let s;
  if (e instanceof ArrayBuffer)
    s = new Uint8Array(e);
  else {
    const r = e.byteOffset, i = e.byteLength;
    s = new Uint8Array(e.buffer || e.arrayBuffer, r, i);
  }
  return t.set(s, n), n + ze(s.byteLength, 4);
}
async function Du(e) {
  const t = [];
  for await (const n of e)
    t.push(n);
  return Ou(...t);
}
function Qr() {
  let e;
  if (typeof window < "u" && window.performance)
    e = window.performance.now();
  else if (typeof process < "u" && process.hrtime) {
    const t = process.hrtime();
    e = t[0] * 1e3 + t[1] / 1e6;
  } else
    e = Date.now();
  return e;
}
class qr {
  constructor(t, n) {
    this.name = void 0, this.type = void 0, this.sampleSize = 1, this.time = 0, this.count = 0, this.samples = 0, this.lastTiming = 0, this.lastSampleTime = 0, this.lastSampleCount = 0, this._count = 0, this._time = 0, this._samples = 0, this._startTime = 0, this._timerPending = !1, this.name = t, this.type = n, this.reset();
  }
  reset() {
    return this.time = 0, this.count = 0, this.samples = 0, this.lastTiming = 0, this.lastSampleTime = 0, this.lastSampleCount = 0, this._count = 0, this._time = 0, this._samples = 0, this._startTime = 0, this._timerPending = !1, this;
  }
  setSampleSize(t) {
    return this.sampleSize = t, this;
  }
  incrementCount() {
    return this.addCount(1), this;
  }
  decrementCount() {
    return this.subtractCount(1), this;
  }
  addCount(t) {
    return this._count += t, this._samples++, this._checkSampling(), this;
  }
  subtractCount(t) {
    return this._count -= t, this._samples++, this._checkSampling(), this;
  }
  addTime(t) {
    return this._time += t, this.lastTiming = t, this._samples++, this._checkSampling(), this;
  }
  timeStart() {
    return this._startTime = Qr(), this._timerPending = !0, this;
  }
  timeEnd() {
    return this._timerPending ? (this.addTime(Qr() - this._startTime), this._timerPending = !1, this._checkSampling(), this) : this;
  }
  getSampleAverageCount() {
    return this.sampleSize > 0 ? this.lastSampleCount / this.sampleSize : 0;
  }
  getSampleAverageTime() {
    return this.sampleSize > 0 ? this.lastSampleTime / this.sampleSize : 0;
  }
  getSampleHz() {
    return this.lastSampleTime > 0 ? this.sampleSize / (this.lastSampleTime / 1e3) : 0;
  }
  getAverageCount() {
    return this.samples > 0 ? this.count / this.samples : 0;
  }
  getAverageTime() {
    return this.samples > 0 ? this.time / this.samples : 0;
  }
  getHz() {
    return this.time > 0 ? this.samples / (this.time / 1e3) : 0;
  }
  _checkSampling() {
    this._samples === this.sampleSize && (this.lastSampleTime = this._time, this.lastSampleCount = this._count, this.count += this._count, this.time += this._time, this.samples += this._samples, this._time = 0, this._count = 0, this._samples = 0);
  }
}
class Qo {
  constructor(t) {
    this.id = void 0, this.stats = {}, this.id = t.id, this.stats = {}, this._initializeStats(t.stats), Object.seal(this);
  }
  get(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "count";
    return this._getOrCreate({
      name: t,
      type: n
    });
  }
  get size() {
    return Object.keys(this.stats).length;
  }
  reset() {
    for (const t of Object.values(this.stats))
      t.reset();
    return this;
  }
  forEach(t) {
    for (const n of Object.values(this.stats))
      t(n);
  }
  getTable() {
    const t = {};
    return this.forEach((n) => {
      t[n.name] = {
        time: n.time || 0,
        count: n.count || 0,
        average: n.getAverageTime() || 0,
        hz: n.getHz() || 0
      };
    }), t;
  }
  _initializeStats() {
    (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach((n) => this._getOrCreate(n));
  }
  _getOrCreate(t) {
    const {
      name: n,
      type: s
    } = t;
    let r = this.stats[n];
    return r || (t instanceof qr ? r = t : r = new qr(n, s), this.stats[n] = r), r;
  }
}
let Lu = "";
const $r = {};
function Pu(e) {
  for (const t in $r)
    if (e.startsWith(t)) {
      const n = $r[t];
      e = e.replace(t, n);
    }
  return !e.startsWith("http://") && !e.startsWith("https://") && (e = `${Lu}${e}`), e;
}
function Gu(e) {
  return e && typeof e == "object" && e.isBuffer;
}
function qo(e) {
  if (Gu(e))
    return e;
  if (e instanceof ArrayBuffer)
    return e;
  if (ArrayBuffer.isView(e))
    return e.byteOffset === 0 && e.byteLength === e.buffer.byteLength ? e.buffer : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
  if (typeof e == "string") {
    const t = e;
    return new TextEncoder().encode(t).buffer;
  }
  if (e && typeof e == "object" && e._toArrayBuffer)
    return e._toArrayBuffer();
  throw new Error("toArrayBuffer");
}
function Nu() {
  var e;
  if (typeof process < "u" && typeof process.cwd < "u")
    return process.cwd();
  const t = (e = window.location) === null || e === void 0 ? void 0 : e.pathname;
  return (t == null ? void 0 : t.slice(0, t.lastIndexOf("/") + 1)) || "";
}
function $o(e) {
  const t = e ? e.lastIndexOf("/") : -1;
  return t >= 0 ? e.substr(t + 1) : "";
}
function Yo(e) {
  const t = e ? e.lastIndexOf("/") : -1;
  return t >= 0 ? e.substr(0, t) : "";
}
function Uu() {
  const e = [];
  for (let r = 0; r < arguments.length; r++)
    e[r] = r < 0 || arguments.length <= r ? void 0 : arguments[r];
  let t = "", n = !1, s;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    let i;
    r >= 0 ? i = e[r] : (s === void 0 && (s = Nu()), i = s), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === Ie);
  }
  return t = Hu(t, !n), n ? `/${t}` : t.length > 0 ? t : ".";
}
const Ie = 47, as = 46;
function Hu(e, t) {
  let n = "", s = -1, r = 0, i, o = !1;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      i = e.charCodeAt(a);
    else {
      if (i === Ie)
        break;
      i = Ie;
    }
    if (i === Ie) {
      if (!(s === a - 1 || r === 1)) if (s !== a - 1 && r === 2) {
        if (n.length < 2 || !o || n.charCodeAt(n.length - 1) !== as || n.charCodeAt(n.length - 2) !== as) {
          if (n.length > 2) {
            const c = n.length - 1;
            let u = c;
            for (; u >= 0 && n.charCodeAt(u) !== Ie; --u)
              ;
            if (u !== c) {
              n = u === -1 ? "" : n.slice(0, u), s = a, r = 0, o = !1;
              continue;
            }
          } else if (n.length === 2 || n.length === 1) {
            n = "", s = a, r = 0, o = !1;
            continue;
          }
        }
        t && (n.length > 0 ? n += "/.." : n = "..", o = !0);
      } else {
        const c = e.slice(s + 1, a);
        n.length > 0 ? n += `/${c}` : n = c, o = !1;
      }
      s = a, r = 0;
    } else i === as && r !== -1 ? ++r : r = -1;
  }
  return n;
}
const Ju = (e) => typeof e == "boolean", Oe = (e) => typeof e == "function", We = (e) => e !== null && typeof e == "object", Yr = (e) => We(e) && e.constructor === {}.constructor, Vu = (e) => !!e && typeof e[Symbol.iterator] == "function", ju = (e) => e && typeof e[Symbol.asyncIterator] == "function", ne = (e) => typeof Response < "u" && e instanceof Response || e && e.arrayBuffer && e.text && e.json, se = (e) => typeof Blob < "u" && e instanceof Blob, ku = (e) => e && typeof e == "object" && e.isBuffer, Ku = (e) => typeof ReadableStream < "u" && e instanceof ReadableStream || We(e) && Oe(e.tee) && Oe(e.cancel) && Oe(e.getReader), zu = (e) => We(e) && Oe(e.read) && Oe(e.pipe) && Ju(e.readable), Zo = (e) => Ku(e) || zu(e), Wu = /^data:([-\w.]+\/[-\w.+]+)(;|,)/, Xu = /^([-\w.]+\/[-\w.+]+)/;
function Qu(e) {
  const t = Xu.exec(e);
  return t ? t[1] : e;
}
function Zr(e) {
  const t = Wu.exec(e);
  return t ? t[1] : "";
}
const ta = /\?.*/;
function qu(e) {
  const t = e.match(ta);
  return t && t[0];
}
function hr(e) {
  return e.replace(ta, "");
}
function jn(e) {
  return ne(e) ? e.url : se(e) ? e.name || "" : typeof e == "string" ? e : "";
}
function fr(e) {
  if (ne(e)) {
    const t = e, n = t.headers.get("content-type") || "", s = hr(t.url);
    return Qu(n) || Zr(s);
  }
  return se(e) ? e.type || "" : typeof e == "string" ? Zr(e) : "";
}
function $u(e) {
  return ne(e) ? e.headers["content-length"] || -1 : se(e) ? e.size : typeof e == "string" ? e.length : e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? e.byteLength : -1;
}
async function ea(e) {
  if (ne(e))
    return e;
  const t = {}, n = $u(e);
  n >= 0 && (t["content-length"] = String(n));
  const s = jn(e), r = fr(e);
  r && (t["content-type"] = r);
  const i = await tl(e);
  i && (t["x-first-bytes"] = i), typeof e == "string" && (e = new TextEncoder().encode(e));
  const o = new Response(e, {
    headers: t
  });
  return Object.defineProperty(o, "url", {
    value: s
  }), o;
}
async function Yu(e) {
  if (!e.ok) {
    const t = await Zu(e);
    throw new Error(t);
  }
}
async function Zu(e) {
  let t = `Failed to fetch resource ${e.url} (${e.status}): `;
  try {
    const n = e.headers.get("Content-Type");
    let s = e.statusText;
    n != null && n.includes("application/json") && (s += ` ${await e.text()}`), t += s, t = t.length > 60 ? `${t.slice(0, 60)}...` : t;
  } catch {
  }
  return t;
}
async function tl(e) {
  if (typeof e == "string")
    return `data:,${e.slice(0, 5)}`;
  if (e instanceof Blob) {
    const n = e.slice(0, 5);
    return await new Promise((s) => {
      const r = new FileReader();
      r.onload = (i) => {
        var o;
        return s(i == null || (o = i.target) === null || o === void 0 ? void 0 : o.result);
      }, r.readAsDataURL(n);
    });
  }
  if (e instanceof ArrayBuffer) {
    const n = e.slice(0, 5);
    return `data:base64,${el(n)}`;
  }
  return null;
}
function el(e) {
  let t = "";
  const n = new Uint8Array(e);
  for (let s = 0; s < n.byteLength; s++)
    t += String.fromCharCode(n[s]);
  return btoa(t);
}
function nl(e) {
  return !sl(e) && !rl(e);
}
function sl(e) {
  return e.startsWith("http:") || e.startsWith("https:");
}
function rl(e) {
  return e.startsWith("data:");
}
async function Ge(e, t) {
  if (typeof e == "string") {
    const r = Pu(e);
    if (nl(r)) {
      var n;
      if ((n = globalThis.loaders) !== null && n !== void 0 && n.fetchNode) {
        var s;
        return (s = globalThis.loaders) === null || s === void 0 ? void 0 : s.fetchNode(r, t);
      }
    }
    return await fetch(r, t);
  }
  return await ea(e);
}
const Ye = globalThis, oe = globalThis.process || {};
function il(e) {
  var s, r;
  if (typeof window < "u" && ((s = window.process) == null ? void 0 : s.type) === "renderer" || typeof process < "u" && ((r = process.versions) != null && r.electron))
    return !0;
  const n = typeof navigator < "u" && navigator.userAgent;
  return !!(n && n.indexOf("Electron") >= 0);
}
function dr() {
  return !// @ts-expect-error
  (typeof process == "object" && String(process) === "[object process]" && !(process != null && process.browser)) || il();
}
const na = "4.0.7";
function ol(e) {
  try {
    const t = window[e], n = "__storage_test__";
    return t.setItem(n, n), t.removeItem(n), t;
  } catch {
    return null;
  }
}
class al {
  constructor(t, n, s = "sessionStorage") {
    this.storage = ol(s), this.id = t, this.config = n, this._loadConfiguration();
  }
  getConfiguration() {
    return this.config;
  }
  setConfiguration(t) {
    if (Object.assign(this.config, t), this.storage) {
      const n = JSON.stringify(this.config);
      this.storage.setItem(this.id, n);
    }
  }
  // Get config from persistent store, if available
  _loadConfiguration() {
    let t = {};
    if (this.storage) {
      const n = this.storage.getItem(this.id);
      t = n ? JSON.parse(n) : {};
    }
    return Object.assign(this.config, t), this;
  }
}
function cl(e) {
  let t;
  return e < 10 ? t = `${e.toFixed(2)}ms` : e < 100 ? t = `${e.toFixed(1)}ms` : e < 1e3 ? t = `${e.toFixed(0)}ms` : t = `${(e / 1e3).toFixed(2)}s`, t;
}
function ul(e, t = 8) {
  const n = Math.max(t - e.length, 0);
  return `${" ".repeat(n)}${e}`;
}
var Sn;
(function(e) {
  e[e.BLACK = 30] = "BLACK", e[e.RED = 31] = "RED", e[e.GREEN = 32] = "GREEN", e[e.YELLOW = 33] = "YELLOW", e[e.BLUE = 34] = "BLUE", e[e.MAGENTA = 35] = "MAGENTA", e[e.CYAN = 36] = "CYAN", e[e.WHITE = 37] = "WHITE", e[e.BRIGHT_BLACK = 90] = "BRIGHT_BLACK", e[e.BRIGHT_RED = 91] = "BRIGHT_RED", e[e.BRIGHT_GREEN = 92] = "BRIGHT_GREEN", e[e.BRIGHT_YELLOW = 93] = "BRIGHT_YELLOW", e[e.BRIGHT_BLUE = 94] = "BRIGHT_BLUE", e[e.BRIGHT_MAGENTA = 95] = "BRIGHT_MAGENTA", e[e.BRIGHT_CYAN = 96] = "BRIGHT_CYAN", e[e.BRIGHT_WHITE = 97] = "BRIGHT_WHITE";
})(Sn || (Sn = {}));
const ll = 10;
function ti(e) {
  return typeof e != "string" ? e : (e = e.toUpperCase(), Sn[e] || Sn.WHITE);
}
function hl(e, t, n) {
  return !dr && typeof e == "string" && (t && (e = `\x1B[${ti(t)}m${e}\x1B[39m`), n && (e = `\x1B[${ti(n) + ll}m${e}\x1B[49m`)), e;
}
function fl(e, t = ["constructor"]) {
  const n = Object.getPrototypeOf(e), s = Object.getOwnPropertyNames(n), r = e;
  for (const i of s) {
    const o = r[i];
    typeof o == "function" && (t.find((a) => i === a) || (r[i] = o.bind(e)));
  }
}
function mr(e, t) {
  if (!e)
    throw new Error("Assertion failed");
}
function ae() {
  var t, n, s;
  let e;
  if (dr() && Ye.performance)
    e = (n = (t = Ye == null ? void 0 : Ye.performance) == null ? void 0 : t.now) == null ? void 0 : n.call(t);
  else if ("hrtime" in oe) {
    const r = (s = oe == null ? void 0 : oe.hrtime) == null ? void 0 : s.call(oe);
    e = r[0] * 1e3 + r[1] / 1e6;
  } else
    e = Date.now();
  return e;
}
const ce = {
  debug: dr() && console.debug || console.log,
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error
}, dl = {
  enabled: !0,
  level: 0
};
function ue() {
}
const ei = {}, ni = { once: !0 };
class kn {
  constructor({ id: t } = { id: "" }) {
    this.VERSION = na, this._startTs = ae(), this._deltaTs = ae(), this.userData = {}, this.LOG_THROTTLE_TIMEOUT = 0, this.id = t, this.userData = {}, this._storage = new al(`__probe-${this.id}__`, dl), this.timeStamp(`${this.id} started`), fl(this), Object.seal(this);
  }
  set level(t) {
    this.setLevel(t);
  }
  get level() {
    return this.getLevel();
  }
  isEnabled() {
    return this._storage.config.enabled;
  }
  getLevel() {
    return this._storage.config.level;
  }
  /** @return milliseconds, with fractions */
  getTotal() {
    return Number((ae() - this._startTs).toPrecision(10));
  }
  /** @return milliseconds, with fractions */
  getDelta() {
    return Number((ae() - this._deltaTs).toPrecision(10));
  }
  /** @deprecated use logLevel */
  set priority(t) {
    this.level = t;
  }
  /** @deprecated use logLevel */
  get priority() {
    return this.level;
  }
  /** @deprecated use logLevel */
  getPriority() {
    return this.level;
  }
  // Configure
  enable(t = !0) {
    return this._storage.setConfiguration({ enabled: t }), this;
  }
  setLevel(t) {
    return this._storage.setConfiguration({ level: t }), this;
  }
  /** return the current status of the setting */
  get(t) {
    return this._storage.config[t];
  }
  // update the status of the setting
  set(t, n) {
    this._storage.setConfiguration({ [t]: n });
  }
  /** Logs the current settings as a table */
  settings() {
    console.table ? console.table(this._storage.config) : console.log(this._storage.config);
  }
  // Unconditional logging
  assert(t, n) {
    if (!t)
      throw new Error(n || "Assertion failed");
  }
  warn(t) {
    return this._getLogFunction(0, t, ce.warn, arguments, ni);
  }
  error(t) {
    return this._getLogFunction(0, t, ce.error, arguments);
  }
  /** Print a deprecation warning */
  deprecated(t, n) {
    return this.warn(`\`${t}\` is deprecated and will be removed in a later version. Use \`${n}\` instead`);
  }
  /** Print a removal warning */
  removed(t, n) {
    return this.error(`\`${t}\` has been removed. Use \`${n}\` instead`);
  }
  probe(t, n) {
    return this._getLogFunction(t, n, ce.log, arguments, {
      time: !0,
      once: !0
    });
  }
  log(t, n) {
    return this._getLogFunction(t, n, ce.debug, arguments);
  }
  info(t, n) {
    return this._getLogFunction(t, n, console.info, arguments);
  }
  once(t, n) {
    return this._getLogFunction(t, n, ce.debug || ce.info, arguments, ni);
  }
  /** Logs an object as a table */
  table(t, n, s) {
    return n ? this._getLogFunction(t, n, console.table || ue, s && [s], {
      tag: gl(n)
    }) : ue;
  }
  time(t, n) {
    return this._getLogFunction(t, n, console.time ? console.time : console.info);
  }
  timeEnd(t, n) {
    return this._getLogFunction(t, n, console.timeEnd ? console.timeEnd : console.info);
  }
  timeStamp(t, n) {
    return this._getLogFunction(t, n, console.timeStamp || ue);
  }
  group(t, n, s = { collapsed: !1 }) {
    const r = si({ logLevel: t, message: n, opts: s }), { collapsed: i } = s;
    return r.method = (i ? console.groupCollapsed : console.group) || console.info, this._getLogFunction(r);
  }
  groupCollapsed(t, n, s = {}) {
    return this.group(t, n, Object.assign({}, s, { collapsed: !0 }));
  }
  groupEnd(t) {
    return this._getLogFunction(t, "", console.groupEnd || ue);
  }
  // EXPERIMENTAL
  withGroup(t, n, s) {
    this.group(t, n)();
    try {
      s();
    } finally {
      this.groupEnd(t)();
    }
  }
  trace() {
    console.trace && console.trace();
  }
  // PRIVATE METHODS
  /** Deduces log level from a variety of arguments */
  _shouldLog(t) {
    return this.isEnabled() && this.getLevel() >= sa(t);
  }
  _getLogFunction(t, n, s, r, i) {
    if (this._shouldLog(t)) {
      i = si({ logLevel: t, message: n, args: r, opts: i }), s = s || i.method, mr(s), i.total = this.getTotal(), i.delta = this.getDelta(), this._deltaTs = ae();
      const o = i.tag || i.message;
      if (i.once && o)
        if (!ei[o])
          ei[o] = ae();
        else
          return ue;
      return n = ml(this.id, i.message, i), s.bind(console, n, ...i.args);
    }
    return ue;
  }
}
kn.VERSION = na;
function sa(e) {
  if (!e)
    return 0;
  let t;
  switch (typeof e) {
    case "number":
      t = e;
      break;
    case "object":
      t = e.logLevel || e.priority || 0;
      break;
    default:
      return 0;
  }
  return mr(Number.isFinite(t) && t >= 0), t;
}
function si(e) {
  const { logLevel: t, message: n } = e;
  e.logLevel = sa(t);
  const s = e.args ? Array.from(e.args) : [];
  for (; s.length && s.shift() !== n; )
    ;
  switch (typeof t) {
    case "string":
    case "function":
      n !== void 0 && s.unshift(n), e.message = t;
      break;
    case "object":
      Object.assign(e, t);
      break;
  }
  typeof e.message == "function" && (e.message = e.message());
  const r = typeof e.message;
  return mr(r === "string" || r === "object"), Object.assign(e, { args: s }, e.opts);
}
function ml(e, t, n) {
  if (typeof t == "string") {
    const s = n.time ? ul(cl(n.total)) : "";
    t = n.time ? `${e}: ${s}  ${t}` : `${e}: ${t}`, t = hl(t, n.color, n.background);
  }
  return t;
}
function gl(e) {
  for (const t in e)
    for (const n in e[t])
      return n || "untitled";
  return "empty";
}
globalThis.probe = {};
const ra = new kn({ id: "@probe.gl/log" }), ri = new kn({
  id: "loaders.gl"
});
class Al {
  log() {
    return () => {
    };
  }
  info() {
    return () => {
    };
  }
  warn() {
    return () => {
    };
  }
  error() {
    return () => {
    };
  }
}
class pl {
  constructor() {
    this.console = void 0, this.console = console;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
      n[s] = arguments[s];
    return this.console.log.bind(this.console, ...n);
  }
  info() {
    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
      n[s] = arguments[s];
    return this.console.info.bind(this.console, ...n);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
      n[s] = arguments[s];
    return this.console.warn.bind(this.console, ...n);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
      n[s] = arguments[s];
    return this.console.error.bind(this.console, ...n);
  }
}
const ia = {
  fetch: null,
  mimeType: void 0,
  nothrow: !1,
  log: new pl(),
  useLocalLibraries: !1,
  CDN: "https://unpkg.com/@loaders.gl",
  worker: !0,
  maxConcurrency: 3,
  maxMobileConcurrency: 1,
  reuseWorkers: Vn,
  _nodeWorkers: !1,
  _workerType: "",
  limit: 0,
  _limitMB: 0,
  batchSize: "auto",
  batchDebounceMs: 0,
  metadata: !1,
  transforms: []
}, yl = {
  throws: "nothrow",
  dataType: "(no longer used)",
  uri: "baseUri",
  method: "fetch.method",
  headers: "fetch.headers",
  body: "fetch.body",
  mode: "fetch.mode",
  credentials: "fetch.credentials",
  cache: "fetch.cache",
  redirect: "fetch.redirect",
  referrer: "fetch.referrer",
  referrerPolicy: "fetch.referrerPolicy",
  integrity: "fetch.integrity",
  keepalive: "fetch.keepalive",
  signal: "fetch.signal"
};
function oa() {
  globalThis.loaders = globalThis.loaders || {};
  const {
    loaders: e
  } = globalThis;
  return e._state = e._state || {}, e._state;
}
function aa() {
  const e = oa();
  return e.globalOptions = e.globalOptions || {
    ...ia
  }, e.globalOptions;
}
function Bl(e, t, n, s) {
  return n = n || [], n = Array.isArray(n) ? n : [n], Cl(e, n), Tl(t, e, s);
}
function Cl(e, t) {
  ii(e, null, ia, yl, t);
  for (const n of t) {
    const s = e && e[n.id] || {}, r = n.options && n.options[n.id] || {}, i = n.deprecatedOptions && n.deprecatedOptions[n.id] || {};
    ii(s, n.id, r, i, t);
  }
}
function ii(e, t, n, s, r) {
  const i = t || "Top level", o = t ? `${t}.` : "";
  for (const a in e) {
    const c = !t && We(e[a]), u = a === "baseUri" && !t, l = a === "workerUrl" && t;
    if (!(a in n) && !u && !l) {
      if (a in s)
        ri.warn(`${i} loader option '${o}${a}' no longer supported, use '${s[a]}'`)();
      else if (!c) {
        const h = El(a, r);
        ri.warn(`${i} loader option '${o}${a}' not recognized. ${h}`)();
      }
    }
  }
}
function El(e, t) {
  const n = e.toLowerCase();
  let s = "";
  for (const r of t)
    for (const i in r.options) {
      if (e === i)
        return `Did you mean '${r.id}.${i}'?`;
      const o = i.toLowerCase();
      (n.startsWith(o) || o.startsWith(n)) && (s = s || `Did you mean '${r.id}.${i}'?`);
    }
  return s;
}
function Tl(e, t, n) {
  const r = {
    ...e.options || {}
  };
  return bl(r, n), r.log === null && (r.log = new Al()), oi(r, aa()), oi(r, t), r;
}
function oi(e, t) {
  for (const n in t)
    if (n in t) {
      const s = t[n];
      Yr(s) && Yr(e[n]) ? e[n] = {
        ...e[n],
        ...t[n]
      } : e[n] = t[n];
    }
}
function bl(e, t) {
  t && !("baseUri" in e) && (e.baseUri = t);
}
function gr(e) {
  var t;
  return e ? (Array.isArray(e) && (e = e[0]), Array.isArray((t = e) === null || t === void 0 ? void 0 : t.extensions)) : !1;
}
function ca(e) {
  var t, n;
  K(e, "null loader"), K(gr(e), "invalid loader");
  let s;
  return Array.isArray(e) && (s = e[1], e = e[0], e = {
    ...e,
    options: {
      ...e.options,
      ...s
    }
  }), ((t = e) !== null && t !== void 0 && t.parseTextSync || (n = e) !== null && n !== void 0 && n.parseText) && (e.text = !0), e.text || (e.binary = !0), e;
}
const _l = () => {
  const e = oa();
  return e.loaderRegistry = e.loaderRegistry || [], e.loaderRegistry;
};
function wl() {
  return _l();
}
const Rl = new kn({
  id: "loaders.gl"
}), Ml = /\.([^.]+)$/;
async function Sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0;
  if (!ua(e))
    return null;
  let r = ai(e, t, {
    ...n,
    nothrow: !0
  }, s);
  if (r)
    return r;
  if (se(e) && (e = await e.slice(0, 10).arrayBuffer(), r = ai(e, t, n, s)), !r && !(n != null && n.nothrow))
    throw new Error(la(e));
  return r;
}
function ai(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0;
  if (!ua(e))
    return null;
  if (t && !Array.isArray(t))
    return ca(t);
  let r = [];
  t && (r = r.concat(t)), n != null && n.ignoreRegisteredLoaders || r.push(...wl()), xl(r);
  const i = Il(e, r, n, s);
  if (!i && !(n != null && n.nothrow))
    throw new Error(la(e));
  return i;
}
function Il(e, t, n, s) {
  const r = jn(e), i = fr(e), o = hr(r) || (s == null ? void 0 : s.url);
  let a = null, c = "";
  if (n != null && n.mimeType && (a = cs(t, n == null ? void 0 : n.mimeType), c = `match forced by supplied MIME type ${n == null ? void 0 : n.mimeType}`), a = a || Ol(t, o), c = c || (a ? `matched url ${o}` : ""), a = a || cs(t, i), c = c || (a ? `matched MIME type ${i}` : ""), a = a || vl(t, e), c = c || (a ? `matched initial data ${ha(e)}` : ""), n != null && n.fallbackMimeType && (a = a || cs(t, n == null ? void 0 : n.fallbackMimeType), c = c || (a ? `matched fallback MIME type ${i}` : "")), c) {
    var u;
    Rl.log(1, `selectLoader selected ${(u = a) === null || u === void 0 ? void 0 : u.name}: ${c}.`);
  }
  return a;
}
function ua(e) {
  return !(e instanceof Response && e.status === 204);
}
function la(e) {
  const t = jn(e), n = fr(e);
  let s = "No valid loader found (";
  s += t ? `${$o(t)}, ` : "no url provided, ", s += `MIME type: ${n ? `"${n}"` : "not provided"}, `;
  const r = e ? ha(e) : "";
  return s += r ? ` first bytes: "${r}"` : "first bytes: not available", s += ")", s;
}
function xl(e) {
  for (const t of e)
    ca(t);
}
function Ol(e, t) {
  const n = t && Ml.exec(t), s = n && n[1];
  return s ? Fl(e, s) : null;
}
function Fl(e, t) {
  t = t.toLowerCase();
  for (const n of e)
    for (const s of n.extensions)
      if (s.toLowerCase() === t)
        return n;
  return null;
}
function cs(e, t) {
  for (const n of e)
    if (n.mimeTypes && n.mimeTypes.includes(t) || t === `application/x.${n.id}`)
      return n;
  return null;
}
function vl(e, t) {
  if (!t)
    return null;
  for (const n of e)
    if (typeof t == "string") {
      if (Dl(t, n))
        return n;
    } else if (ArrayBuffer.isView(t)) {
      if (ci(t.buffer, t.byteOffset, n))
        return n;
    } else if (t instanceof ArrayBuffer && ci(t, 0, n))
      return n;
  return null;
}
function Dl(e, t) {
  return t.testText ? t.testText(e) : (Array.isArray(t.tests) ? t.tests : [t.tests]).some((s) => e.startsWith(s));
}
function ci(e, t, n) {
  return (Array.isArray(n.tests) ? n.tests : [n.tests]).some((r) => Ll(e, t, n, r));
}
function Ll(e, t, n, s) {
  if (s instanceof ArrayBuffer)
    return xu(s, e, s.byteLength);
  switch (typeof s) {
    case "function":
      return s(e);
    case "string":
      const r = Hs(e, t, s.length);
      return s === r;
    default:
      return !1;
  }
}
function ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
  return typeof e == "string" ? e.slice(0, t) : ArrayBuffer.isView(e) ? Hs(e.buffer, e.byteOffset, t) : e instanceof ArrayBuffer ? Hs(e, 0, t) : "";
}
function Hs(e, t, n) {
  if (e.byteLength < t + n)
    return "";
  const s = new DataView(e);
  let r = "";
  for (let i = 0; i < n; i++)
    r += String.fromCharCode(s.getUint8(t + i));
  return r;
}
const Pl = 256 * 1024;
function* Gl(e, t) {
  const n = (t == null ? void 0 : t.chunkSize) || Pl;
  let s = 0;
  const r = new TextEncoder();
  for (; s < e.length; ) {
    const i = Math.min(e.length - s, n), o = e.slice(s, s + i);
    s += i, yield r.encode(o);
  }
}
const Nl = 256 * 1024;
function Ul(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    const {
      chunkSize: n = Nl
    } = t;
    let s = 0;
    for (; s < e.byteLength; ) {
      const r = Math.min(e.byteLength - s, n), i = new ArrayBuffer(r), o = new Uint8Array(e, s, r);
      new Uint8Array(i).set(o), s += r, yield i;
    }
  }();
}
const Hl = 1024 * 1024;
async function* Jl(e, t) {
  const n = (t == null ? void 0 : t.chunkSize) || Hl;
  let s = 0;
  for (; s < e.size; ) {
    const r = s + n, i = await e.slice(s, r).arrayBuffer();
    s = r, yield i;
  }
}
function ui(e, t) {
  return Vn ? Vl(e, t) : jl(e);
}
async function* Vl(e, t) {
  const n = e.getReader();
  let s;
  try {
    for (; ; ) {
      const r = s || n.read();
      t != null && t._streamReadAhead && (s = n.read());
      const {
        done: i,
        value: o
      } = await r;
      if (i)
        return;
      yield qo(o);
    }
  } catch {
    n.releaseLock();
  }
}
async function* jl(e, t) {
  for await (const n of e)
    yield qo(n);
}
function kl(e, t) {
  if (typeof e == "string")
    return Gl(e, t);
  if (e instanceof ArrayBuffer)
    return Ul(e, t);
  if (se(e))
    return Jl(e, t);
  if (Zo(e))
    return ui(e, t);
  if (ne(e))
    return ui(e.body, t);
  throw new Error("makeIterator");
}
const fa = "Cannot convert supplied data type";
function Kl(e, t, n) {
  if (t.text && typeof e == "string")
    return e;
  if (ku(e) && (e = e.buffer), e instanceof ArrayBuffer) {
    const s = e;
    return t.text && !t.binary ? new TextDecoder("utf8").decode(s) : s;
  }
  if (ArrayBuffer.isView(e)) {
    if (t.text && !t.binary)
      return new TextDecoder("utf8").decode(e);
    let s = e.buffer;
    const r = e.byteLength || e.length;
    return (e.byteOffset !== 0 || r !== s.byteLength) && (s = s.slice(e.byteOffset, e.byteOffset + r)), s;
  }
  throw new Error(fa);
}
async function zl(e, t, n) {
  const s = e instanceof ArrayBuffer || ArrayBuffer.isView(e);
  if (typeof e == "string" || s)
    return Kl(e, t);
  if (se(e) && (e = await ea(e)), ne(e)) {
    const r = e;
    return await Yu(r), t.binary ? await r.arrayBuffer() : await r.text();
  }
  if (Zo(e) && (e = kl(e, n)), Vu(e) || ju(e))
    return Du(e);
  throw new Error(fa);
}
function da(e, t) {
  const n = aa(), s = e || n;
  return typeof s.fetch == "function" ? s.fetch : We(s.fetch) ? (r) => Ge(r, s.fetch) : t != null && t.fetch ? t == null ? void 0 : t.fetch : Ge;
}
function Wl(e, t, n) {
  if (n)
    return n;
  const s = {
    fetch: da(t, e),
    ...e
  };
  if (s.url) {
    const r = hr(s.url);
    s.baseUrl = r, s.queryString = qu(s.url), s.filename = $o(r), s.baseUrl = Yo(r);
  }
  return Array.isArray(s.loaders) || (s.loaders = null), s;
}
function Xl(e, t) {
  if (e && !Array.isArray(e))
    return e;
  let n;
  if (e && (n = Array.isArray(e) ? e : [e]), t && t.loaders) {
    const s = Array.isArray(t.loaders) ? t.loaders : [t.loaders];
    n = n ? [...n, ...s] : s;
  }
  return n && n.length ? n : void 0;
}
async function In(e, t, n, s) {
  t && !Array.isArray(t) && !gr(t) && (s = void 0, n = t, t = void 0), e = await e, n = n || {};
  const r = jn(e), o = Xl(t, s), a = await Sl(e, o, n);
  return a ? (n = Bl(n, a, o, r), s = Wl({
    url: r,
    _parse: In,
    loaders: o
  }, n, s || null), await Ql(a, e, n, s)) : null;
}
async function Ql(e, t, n, s) {
  if (pu(e), n = ou(e.options, n), ne(t)) {
    const i = t, {
      ok: o,
      redirected: a,
      status: c,
      statusText: u,
      type: l,
      url: h
    } = i, f = Object.fromEntries(i.headers.entries());
    s.response = {
      headers: f,
      ok: o,
      redirected: a,
      status: c,
      statusText: u,
      type: l,
      url: h
    };
  }
  t = await zl(t, e, n);
  const r = e;
  if (r.parseTextSync && typeof t == "string")
    return r.parseTextSync(t, n, s);
  if (wu(e, n))
    return await Ru(e, t, n, s, In);
  if (r.parseText && typeof t == "string")
    return await r.parseText(t, n, s);
  if (r.parse)
    return await r.parse(t, n, s);
  throw Ht(!r.parseSync), new Error(`${e.id} loader - no parser found and worker is disabled`);
}
function ql(e) {
  switch (e.constructor) {
    case Int8Array:
      return "int8";
    case Uint8Array:
    case Uint8ClampedArray:
      return "uint8";
    case Int16Array:
      return "int16";
    case Uint16Array:
      return "uint16";
    case Int32Array:
      return "int32";
    case Uint32Array:
      return "uint32";
    case Float32Array:
      return "float32";
    case Float64Array:
      return "float64";
    default:
      return "null";
  }
}
function $l(e) {
  let t = 1 / 0, n = 1 / 0, s = 1 / 0, r = -1 / 0, i = -1 / 0, o = -1 / 0;
  const a = e.POSITION ? e.POSITION.value : [], c = a && a.length;
  for (let u = 0; u < c; u += 3) {
    const l = a[u], h = a[u + 1], f = a[u + 2];
    t = l < t ? l : t, n = h < n ? h : n, s = f < s ? f : s, r = l > r ? l : r, i = h > i ? h : i, o = f > o ? f : o;
  }
  return [[t, n, s], [r, i, o]];
}
function Yl(e, t, n) {
  const s = ql(t.value), r = n || Zl(t);
  return {
    name: e,
    type: {
      type: "fixed-size-list",
      listSize: t.size,
      children: [{
        name: "value",
        type: s
      }]
    },
    nullable: !1,
    metadata: r
  };
}
function Zl(e) {
  const t = {};
  return "byteOffset" in e && (t.byteOffset = e.byteOffset.toString(10)), "byteStride" in e && (t.byteStride = e.byteStride.toString(10)), "normalized" in e && (t.normalized = e.normalized.toString()), t;
}
async function pe(e, t, n, s) {
  let r, i;
  !Array.isArray(t) && !gr(t) ? (r = [], i = t) : (r = t, i = n);
  const o = da(i);
  let a = e;
  return typeof e == "string" && (a = await o(e)), se(e) && (a = await o(e)), Array.isArray(r) ? await In(a, r, i) : await In(a, r, i);
}
const th = 1 / Math.PI * 180, eh = 1 / 180 * Math.PI, nh = {
  EPSILON: 1e-12,
  debug: !1,
  precision: 4,
  printTypes: !1,
  printDegrees: !1,
  printRowMajor: !0,
  _cartographicRadians: !1
};
globalThis.mathgl = globalThis.mathgl || {
  config: {
    ...nh
  }
};
const Z = globalThis.mathgl.config;
function sh(e, {
  precision: t = Z.precision
} = {}) {
  return e = ch(e), "".concat(parseFloat(e.toPrecision(t)));
}
function te(e) {
  return Array.isArray(e) || ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function rh(e) {
  return oh(e);
}
function ih(e) {
  return wt(e);
}
function oh(e, t) {
  return Ar(e, (n) => n * eh, t);
}
function wt(e, t) {
  return Ar(e, (n) => n * th, t);
}
function ah(e, t, n) {
  return Ar(e, (s) => Math.max(t, Math.min(n, s)));
}
function kt(e, t, n) {
  const s = Z.EPSILON;
  n && (Z.EPSILON = n);
  try {
    if (e === t)
      return !0;
    if (te(e) && te(t)) {
      if (e.length !== t.length)
        return !1;
      for (let r = 0; r < e.length; ++r)
        if (!kt(e[r], t[r]))
          return !1;
      return !0;
    }
    return e && e.equals ? e.equals(t) : t && t.equals ? t.equals(e) : typeof e == "number" && typeof t == "number" ? Math.abs(e - t) <= Z.EPSILON * Math.max(1, Math.abs(e), Math.abs(t)) : !1;
  } finally {
    Z.EPSILON = s;
  }
}
function ch(e) {
  return Math.round(e / Z.EPSILON) * Z.EPSILON;
}
function uh(e) {
  return e.clone ? e.clone() : new Array(e.length);
}
function Ar(e, t, n) {
  if (te(e)) {
    const s = e;
    n = n || uh(s);
    for (let r = 0; r < n.length && r < s.length; ++r) {
      const i = typeof e == "number" ? e : e[r];
      n[r] = t(i, r, n);
    }
    return n;
  }
  return t(e);
}
function lh(e) {
  function t() {
    var n = Reflect.construct(e, Array.from(arguments));
    return Object.setPrototypeOf(n, Object.getPrototypeOf(this)), n;
  }
  return t.prototype = Object.create(e.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e, t;
}
class pr extends lh(Array) {
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(t, n = 0) {
    for (let s = 0; s < this.ELEMENTS; ++s)
      this[s] = t[s + n];
    return this.check();
  }
  toArray(t = [], n = 0) {
    for (let s = 0; s < this.ELEMENTS; ++s)
      t[n + s] = this[s];
    return t;
  }
  toObject(t) {
    return t;
  }
  from(t) {
    return Array.isArray(t) ? this.copy(t) : this.fromObject(t);
  }
  to(t) {
    return t === this ? this : te(t) ? this.toArray(t) : this.toObject(t);
  }
  toTarget(t) {
    return t ? this.to(t) : this;
  }
  toFloat32Array() {
    return new Float32Array(this);
  }
  toString() {
    return this.formatString(Z);
  }
  formatString(t) {
    let n = "";
    for (let s = 0; s < this.ELEMENTS; ++s)
      n += (s > 0 ? ", " : "") + sh(this[s], t);
    return "".concat(t.printTypes ? this.constructor.name : "", "[").concat(n, "]");
  }
  equals(t) {
    if (!t || this.length !== t.length)
      return !1;
    for (let n = 0; n < this.ELEMENTS; ++n)
      if (!kt(this[n], t[n]))
        return !1;
    return !0;
  }
  exactEquals(t) {
    if (!t || this.length !== t.length)
      return !1;
    for (let n = 0; n < this.ELEMENTS; ++n)
      if (this[n] !== t[n])
        return !1;
    return !0;
  }
  negate() {
    for (let t = 0; t < this.ELEMENTS; ++t)
      this[t] = -this[t];
    return this.check();
  }
  lerp(t, n, s) {
    if (s === void 0)
      return this.lerp(this, t, n);
    for (let r = 0; r < this.ELEMENTS; ++r) {
      const i = t[r], o = typeof n == "number" ? n : n[r];
      this[r] = i + s * (o - i);
    }
    return this.check();
  }
  min(t) {
    for (let n = 0; n < this.ELEMENTS; ++n)
      this[n] = Math.min(t[n], this[n]);
    return this.check();
  }
  max(t) {
    for (let n = 0; n < this.ELEMENTS; ++n)
      this[n] = Math.max(t[n], this[n]);
    return this.check();
  }
  clamp(t, n) {
    for (let s = 0; s < this.ELEMENTS; ++s)
      this[s] = Math.min(Math.max(this[s], t[s]), n[s]);
    return this.check();
  }
  add(...t) {
    for (const n of t)
      for (let s = 0; s < this.ELEMENTS; ++s)
        this[s] += n[s];
    return this.check();
  }
  subtract(...t) {
    for (const n of t)
      for (let s = 0; s < this.ELEMENTS; ++s)
        this[s] -= n[s];
    return this.check();
  }
  scale(t) {
    if (typeof t == "number")
      for (let n = 0; n < this.ELEMENTS; ++n)
        this[n] *= t;
    else
      for (let n = 0; n < this.ELEMENTS && n < t.length; ++n)
        this[n] *= t[n];
    return this.check();
  }
  multiplyByScalar(t) {
    for (let n = 0; n < this.ELEMENTS; ++n)
      this[n] *= t;
    return this.check();
  }
  check() {
    if (Z.debug && !this.validate())
      throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
    return this;
  }
  validate() {
    let t = this.length === this.ELEMENTS;
    for (let n = 0; n < this.ELEMENTS; ++n)
      t = t && Number.isFinite(this[n]);
    return t;
  }
  sub(t) {
    return this.subtract(t);
  }
  setScalar(t) {
    for (let n = 0; n < this.ELEMENTS; ++n)
      this[n] = t;
    return this.check();
  }
  addScalar(t) {
    for (let n = 0; n < this.ELEMENTS; ++n)
      this[n] += t;
    return this.check();
  }
  subScalar(t) {
    return this.addScalar(-t);
  }
  multiplyScalar(t) {
    for (let n = 0; n < this.ELEMENTS; ++n)
      this[n] *= t;
    return this.check();
  }
  divideScalar(t) {
    return this.multiplyByScalar(1 / t);
  }
  clampScalar(t, n) {
    for (let s = 0; s < this.ELEMENTS; ++s)
      this[s] = Math.min(Math.max(this[s], t), n);
    return this.check();
  }
  get elements() {
    return this;
  }
}
function hh(e, t) {
  if (e.length !== t)
    return !1;
  for (let n = 0; n < e.length; ++n)
    if (!Number.isFinite(e[n]))
      return !1;
  return !0;
}
function U(e) {
  if (!Number.isFinite(e))
    throw new Error("Invalid number ".concat(JSON.stringify(e)));
  return e;
}
function Fe(e, t, n = "") {
  if (Z.debug && !hh(e, t))
    throw new Error("math.gl: ".concat(n, " some fields set to invalid numbers'"));
  return e;
}
function j(e, t) {
  if (!e)
    throw new Error("math.gl assertion ".concat(t));
}
class yr extends pr {
  get x() {
    return this[0];
  }
  set x(t) {
    this[0] = U(t);
  }
  get y() {
    return this[1];
  }
  set y(t) {
    this[1] = U(t);
  }
  len() {
    return Math.sqrt(this.lengthSquared());
  }
  magnitude() {
    return this.len();
  }
  lengthSquared() {
    let t = 0;
    for (let n = 0; n < this.ELEMENTS; ++n)
      t += this[n] * this[n];
    return t;
  }
  magnitudeSquared() {
    return this.lengthSquared();
  }
  distance(t) {
    return Math.sqrt(this.distanceSquared(t));
  }
  distanceSquared(t) {
    let n = 0;
    for (let s = 0; s < this.ELEMENTS; ++s) {
      const r = this[s] - t[s];
      n += r * r;
    }
    return U(n);
  }
  dot(t) {
    let n = 0;
    for (let s = 0; s < this.ELEMENTS; ++s)
      n += this[s] * t[s];
    return U(n);
  }
  normalize() {
    const t = this.magnitude();
    if (t !== 0)
      for (let n = 0; n < this.ELEMENTS; ++n)
        this[n] /= t;
    return this.check();
  }
  multiply(...t) {
    for (const n of t)
      for (let s = 0; s < this.ELEMENTS; ++s)
        this[s] *= n[s];
    return this.check();
  }
  divide(...t) {
    for (const n of t)
      for (let s = 0; s < this.ELEMENTS; ++s)
        this[s] /= n[s];
    return this.check();
  }
  lengthSq() {
    return this.lengthSquared();
  }
  distanceTo(t) {
    return this.distance(t);
  }
  distanceToSquared(t) {
    return this.distanceSquared(t);
  }
  getComponent(t) {
    return j(t >= 0 && t < this.ELEMENTS, "index is out of range"), U(this[t]);
  }
  setComponent(t, n) {
    return j(t >= 0 && t < this.ELEMENTS, "index is out of range"), this[t] = n, this.check();
  }
  addVectors(t, n) {
    return this.copy(t).add(n);
  }
  subVectors(t, n) {
    return this.copy(t).subtract(n);
  }
  multiplyVectors(t, n) {
    return this.copy(t).multiply(n);
  }
  addScaledVector(t, n) {
    return this.add(new this.constructor(t).multiplyScalar(n));
  }
}
const ve = 1e-6;
let St = typeof Float32Array < "u" ? Float32Array : Array;
function fh() {
  const e = new St(2);
  return St != Float32Array && (e[0] = 0, e[1] = 0), e;
}
function dh(e, t, n) {
  const s = t[0], r = t[1];
  return e[0] = n[0] * s + n[2] * r, e[1] = n[1] * s + n[3] * r, e;
}
function mh(e, t, n) {
  const s = t[0], r = t[1];
  return e[0] = n[0] * s + n[2] * r + n[4], e[1] = n[1] * s + n[3] * r + n[5], e;
}
function ma(e, t, n) {
  const s = t[0], r = t[1];
  return e[0] = n[0] * s + n[3] * r + n[6], e[1] = n[1] * s + n[4] * r + n[7], e;
}
function ga(e, t, n) {
  const s = t[0], r = t[1];
  return e[0] = n[0] * s + n[4] * r + n[12], e[1] = n[1] * s + n[5] * r + n[13], e;
}
(function() {
  const e = fh();
  return function(t, n, s, r, i, o) {
    let a, c;
    for (n || (n = 2), s || (s = 0), r ? c = Math.min(r * n + s, t.length) : c = t.length, a = s; a < c; a += n)
      e[0] = t[a], e[1] = t[a + 1], i(e, e, o), t[a] = e[0], t[a + 1] = e[1];
    return t;
  };
})();
function Aa(e, t, n) {
  const s = t[0], r = t[1], i = n[3] * s + n[7] * r || 1;
  return e[0] = (n[0] * s + n[4] * r) / i, e[1] = (n[1] * s + n[5] * r) / i, e;
}
function pa(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = n[3] * s + n[7] * r + n[11] * i || 1;
  return e[0] = (n[0] * s + n[4] * r + n[8] * i) / o, e[1] = (n[1] * s + n[5] * r + n[9] * i) / o, e[2] = (n[2] * s + n[6] * r + n[10] * i) / o, e;
}
function gh(e, t, n) {
  const s = t[0], r = t[1];
  return e[0] = n[0] * s + n[2] * r, e[1] = n[1] * s + n[3] * r, e[2] = t[2], e;
}
function Ah(e, t, n) {
  const s = t[0], r = t[1];
  return e[0] = n[0] * s + n[2] * r, e[1] = n[1] * s + n[3] * r, e[2] = t[2], e[3] = t[3], e;
}
function ya(e, t, n) {
  const s = t[0], r = t[1], i = t[2];
  return e[0] = n[0] * s + n[3] * r + n[6] * i, e[1] = n[1] * s + n[4] * r + n[7] * i, e[2] = n[2] * s + n[5] * r + n[8] * i, e[3] = t[3], e;
}
class Kn extends yr {
  constructor(t = 0, n = 0) {
    super(2), te(t) && arguments.length === 1 ? this.copy(t) : (Z.debug && (U(t), U(n)), this[0] = t, this[1] = n);
  }
  set(t, n) {
    return this[0] = t, this[1] = n, this.check();
  }
  copy(t) {
    return this[0] = t[0], this[1] = t[1], this.check();
  }
  fromObject(t) {
    return Z.debug && (U(t.x), U(t.y)), this[0] = t.x, this[1] = t.y, this.check();
  }
  toObject(t) {
    return t.x = this[0], t.y = this[1], t;
  }
  get ELEMENTS() {
    return 2;
  }
  horizontalAngle() {
    return Math.atan2(this.y, this.x);
  }
  verticalAngle() {
    return Math.atan2(this.x, this.y);
  }
  transform(t) {
    return this.transformAsPoint(t);
  }
  transformAsPoint(t) {
    return ga(this, this, t), this.check();
  }
  transformAsVector(t) {
    return Aa(this, this, t), this.check();
  }
  transformByMatrix3(t) {
    return ma(this, this, t), this.check();
  }
  transformByMatrix2x3(t) {
    return mh(this, this, t), this.check();
  }
  transformByMatrix2(t) {
    return dh(this, this, t), this.check();
  }
}
function Ba() {
  const e = new St(3);
  return St != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function Ca(e) {
  const t = e[0], n = e[1], s = e[2];
  return Math.sqrt(t * t + n * n + s * s);
}
function li(e, t, n) {
  const s = new St(3);
  return s[0] = e, s[1] = t, s[2] = n, s;
}
function ph(e, t) {
  const n = t[0], s = t[1], r = t[2];
  let i = n * n + s * s + r * r;
  return i > 0 && (i = 1 / Math.sqrt(i)), e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e;
}
function Br(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function En(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = n[0], a = n[1], c = n[2];
  return e[0] = r * c - i * a, e[1] = i * o - s * c, e[2] = s * a - r * o, e;
}
function Cr(e, t, n) {
  const s = t[0], r = t[1], i = t[2];
  let o = n[3] * s + n[7] * r + n[11] * i + n[15];
  return o = o || 1, e[0] = (n[0] * s + n[4] * r + n[8] * i + n[12]) / o, e[1] = (n[1] * s + n[5] * r + n[9] * i + n[13]) / o, e[2] = (n[2] * s + n[6] * r + n[10] * i + n[14]) / o, e;
}
function Ea(e, t, n) {
  const s = t[0], r = t[1], i = t[2];
  return e[0] = s * n[0] + r * n[3] + i * n[6], e[1] = s * n[1] + r * n[4] + i * n[7], e[2] = s * n[2] + r * n[5] + i * n[8], e;
}
function Ta(e, t, n) {
  const s = n[0], r = n[1], i = n[2], o = n[3], a = t[0], c = t[1], u = t[2];
  let l = r * u - i * c, h = i * a - s * u, f = s * c - r * a, d = r * f - i * h, m = i * l - s * f, g = s * h - r * l;
  const y = o * 2;
  return l *= y, h *= y, f *= y, d *= 2, m *= 2, g *= 2, e[0] = a + l + d, e[1] = c + h + m, e[2] = u + f + g, e;
}
function yh(e, t, n, s) {
  const r = [], i = [];
  return r[0] = t[0] - n[0], r[1] = t[1] - n[1], r[2] = t[2] - n[2], i[0] = r[0], i[1] = r[1] * Math.cos(s) - r[2] * Math.sin(s), i[2] = r[1] * Math.sin(s) + r[2] * Math.cos(s), e[0] = i[0] + n[0], e[1] = i[1] + n[1], e[2] = i[2] + n[2], e;
}
function Bh(e, t, n, s) {
  const r = [], i = [];
  return r[0] = t[0] - n[0], r[1] = t[1] - n[1], r[2] = t[2] - n[2], i[0] = r[2] * Math.sin(s) + r[0] * Math.cos(s), i[1] = r[1], i[2] = r[2] * Math.cos(s) - r[0] * Math.sin(s), e[0] = i[0] + n[0], e[1] = i[1] + n[1], e[2] = i[2] + n[2], e;
}
function Ch(e, t, n, s) {
  const r = [], i = [];
  return r[0] = t[0] - n[0], r[1] = t[1] - n[1], r[2] = t[2] - n[2], i[0] = r[0] * Math.cos(s) - r[1] * Math.sin(s), i[1] = r[0] * Math.sin(s) + r[1] * Math.cos(s), i[2] = r[2], e[0] = i[0] + n[0], e[1] = i[1] + n[1], e[2] = i[2] + n[2], e;
}
function Eh(e, t) {
  const n = e[0], s = e[1], r = e[2], i = t[0], o = t[1], a = t[2], c = Math.sqrt((n * n + s * s + r * r) * (i * i + o * o + a * a)), u = c && Br(e, t) / c;
  return Math.acos(Math.min(Math.max(u, -1), 1));
}
const Th = Ca;
(function() {
  const e = Ba();
  return function(t, n, s, r, i, o) {
    let a, c;
    for (n || (n = 3), s || (s = 0), r ? c = Math.min(r * n + s, t.length) : c = t.length, a = s; a < c; a += n)
      e[0] = t[a], e[1] = t[a + 1], e[2] = t[a + 2], i(e, e, o), t[a] = e[0], t[a + 1] = e[1], t[a + 2] = e[2];
    return t;
  };
})();
const us = [0, 0, 0];
let Ze;
class A extends yr {
  static get ZERO() {
    return Ze || (Ze = new A(0, 0, 0), Object.freeze(Ze)), Ze;
  }
  constructor(t = 0, n = 0, s = 0) {
    super(-0, -0, -0), arguments.length === 1 && te(t) ? this.copy(t) : (Z.debug && (U(t), U(n), U(s)), this[0] = t, this[1] = n, this[2] = s);
  }
  set(t, n, s) {
    return this[0] = t, this[1] = n, this[2] = s, this.check();
  }
  copy(t) {
    return this[0] = t[0], this[1] = t[1], this[2] = t[2], this.check();
  }
  fromObject(t) {
    return Z.debug && (U(t.x), U(t.y), U(t.z)), this[0] = t.x, this[1] = t.y, this[2] = t.z, this.check();
  }
  toObject(t) {
    return t.x = this[0], t.y = this[1], t.z = this[2], t;
  }
  get ELEMENTS() {
    return 3;
  }
  get z() {
    return this[2];
  }
  set z(t) {
    this[2] = U(t);
  }
  angle(t) {
    return Eh(this, t);
  }
  cross(t) {
    return En(this, this, t), this.check();
  }
  rotateX({
    radians: t,
    origin: n = us
  }) {
    return yh(this, this, n, t), this.check();
  }
  rotateY({
    radians: t,
    origin: n = us
  }) {
    return Bh(this, this, n, t), this.check();
  }
  rotateZ({
    radians: t,
    origin: n = us
  }) {
    return Ch(this, this, n, t), this.check();
  }
  transform(t) {
    return this.transformAsPoint(t);
  }
  transformAsPoint(t) {
    return Cr(this, this, t), this.check();
  }
  transformAsVector(t) {
    return pa(this, this, t), this.check();
  }
  transformByMatrix3(t) {
    return Ea(this, this, t), this.check();
  }
  transformByMatrix2(t) {
    return gh(this, this, t), this.check();
  }
  transformByQuaternion(t) {
    return Ta(this, this, t), this.check();
  }
}
let tn;
class Er extends yr {
  static get ZERO() {
    return tn || (tn = new Er(0, 0, 0, 0), Object.freeze(tn)), tn;
  }
  constructor(t = 0, n = 0, s = 0, r = 0) {
    super(-0, -0, -0, -0), te(t) && arguments.length === 1 ? this.copy(t) : (Z.debug && (U(t), U(n), U(s), U(r)), this[0] = t, this[1] = n, this[2] = s, this[3] = r);
  }
  set(t, n, s, r) {
    return this[0] = t, this[1] = n, this[2] = s, this[3] = r, this.check();
  }
  copy(t) {
    return this[0] = t[0], this[1] = t[1], this[2] = t[2], this[3] = t[3], this.check();
  }
  fromObject(t) {
    return Z.debug && (U(t.x), U(t.y), U(t.z), U(t.w)), this[0] = t.x, this[1] = t.y, this[2] = t.z, this[3] = t.w, this;
  }
  toObject(t) {
    return t.x = this[0], t.y = this[1], t.z = this[2], t.w = this[3], t;
  }
  get ELEMENTS() {
    return 4;
  }
  get z() {
    return this[2];
  }
  set z(t) {
    this[2] = U(t);
  }
  get w() {
    return this[3];
  }
  set w(t) {
    this[3] = U(t);
  }
  transform(t) {
    return Cr(this, this, t), this.check();
  }
  transformByMatrix3(t) {
    return ya(this, this, t), this.check();
  }
  transformByMatrix2(t) {
    return Ah(this, this, t), this.check();
  }
  transformByQuaternion(t) {
    return Ta(this, this, t), this.check();
  }
  applyMatrix4(t) {
    return t.transform(this, this), this;
  }
}
class ba extends pr {
  toString() {
    let t = "[";
    if (Z.printRowMajor) {
      t += "row-major:";
      for (let n = 0; n < this.RANK; ++n)
        for (let s = 0; s < this.RANK; ++s)
          t += " ".concat(this[s * this.RANK + n]);
    } else {
      t += "column-major:";
      for (let n = 0; n < this.ELEMENTS; ++n)
        t += " ".concat(this[n]);
    }
    return t += "]", t;
  }
  getElementIndex(t, n) {
    return n * this.RANK + t;
  }
  getElement(t, n) {
    return this[n * this.RANK + t];
  }
  setElement(t, n, s) {
    return this[n * this.RANK + t] = U(s), this;
  }
  getColumn(t, n = new Array(this.RANK).fill(-0)) {
    const s = t * this.RANK;
    for (let r = 0; r < this.RANK; ++r)
      n[r] = this[s + r];
    return n;
  }
  setColumn(t, n) {
    const s = t * this.RANK;
    for (let r = 0; r < this.RANK; ++r)
      this[s + r] = n[r];
    return this;
  }
}
function bh() {
  const e = new St(9);
  return St != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e;
}
function _h(e, t) {
  if (e === t) {
    const n = t[1], s = t[2], r = t[5];
    e[1] = t[3], e[2] = t[6], e[3] = n, e[5] = t[7], e[6] = s, e[7] = r;
  } else
    e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];
  return e;
}
function wh(e, t) {
  const n = t[0], s = t[1], r = t[2], i = t[3], o = t[4], a = t[5], c = t[6], u = t[7], l = t[8], h = l * o - a * u, f = -l * i + a * c, d = u * i - o * c;
  let m = n * h + s * f + r * d;
  return m ? (m = 1 / m, e[0] = h * m, e[1] = (-l * s + r * u) * m, e[2] = (a * s - r * o) * m, e[3] = f * m, e[4] = (l * n - r * c) * m, e[5] = (-a * n + r * i) * m, e[6] = d * m, e[7] = (-u * n + s * c) * m, e[8] = (o * n - s * i) * m, e) : null;
}
function Rh(e) {
  const t = e[0], n = e[1], s = e[2], r = e[3], i = e[4], o = e[5], a = e[6], c = e[7], u = e[8];
  return t * (u * i - o * c) + n * (-u * r + o * a) + s * (c * r - i * a);
}
function hi(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = t[3], a = t[4], c = t[5], u = t[6], l = t[7], h = t[8], f = n[0], d = n[1], m = n[2], g = n[3], y = n[4], E = n[5], R = n[6], B = n[7], C = n[8];
  return e[0] = f * s + d * o + m * u, e[1] = f * r + d * a + m * l, e[2] = f * i + d * c + m * h, e[3] = g * s + y * o + E * u, e[4] = g * r + y * a + E * l, e[5] = g * i + y * c + E * h, e[6] = R * s + B * o + C * u, e[7] = R * r + B * a + C * l, e[8] = R * i + B * c + C * h, e;
}
function Mh(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = t[3], a = t[4], c = t[5], u = t[6], l = t[7], h = t[8], f = n[0], d = n[1];
  return e[0] = s, e[1] = r, e[2] = i, e[3] = o, e[4] = a, e[5] = c, e[6] = f * s + d * o + u, e[7] = f * r + d * a + l, e[8] = f * i + d * c + h, e;
}
function Sh(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = t[3], a = t[4], c = t[5], u = t[6], l = t[7], h = t[8], f = Math.sin(n), d = Math.cos(n);
  return e[0] = d * s + f * o, e[1] = d * r + f * a, e[2] = d * i + f * c, e[3] = d * o - f * s, e[4] = d * a - f * r, e[5] = d * c - f * i, e[6] = u, e[7] = l, e[8] = h, e;
}
function fi(e, t, n) {
  const s = n[0], r = n[1];
  return e[0] = s * t[0], e[1] = s * t[1], e[2] = s * t[2], e[3] = r * t[3], e[4] = r * t[4], e[5] = r * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function Ih(e, t) {
  const n = t[0], s = t[1], r = t[2], i = t[3], o = n + n, a = s + s, c = r + r, u = n * o, l = s * o, h = s * a, f = r * o, d = r * a, m = r * c, g = i * o, y = i * a, E = i * c;
  return e[0] = 1 - h - m, e[3] = l - E, e[6] = f + y, e[1] = l + E, e[4] = 1 - u - m, e[7] = d - g, e[2] = f - y, e[5] = d + g, e[8] = 1 - u - h, e;
}
var Js;
(function(e) {
  e[e.COL0ROW0 = 0] = "COL0ROW0", e[e.COL0ROW1 = 1] = "COL0ROW1", e[e.COL0ROW2 = 2] = "COL0ROW2", e[e.COL1ROW0 = 3] = "COL1ROW0", e[e.COL1ROW1 = 4] = "COL1ROW1", e[e.COL1ROW2 = 5] = "COL1ROW2", e[e.COL2ROW0 = 6] = "COL2ROW0", e[e.COL2ROW1 = 7] = "COL2ROW1", e[e.COL2ROW2 = 8] = "COL2ROW2";
})(Js || (Js = {}));
const xh = Object.freeze([1, 0, 0, 0, 1, 0, 0, 0, 1]);
class W extends ba {
  static get IDENTITY() {
    return Fh();
  }
  static get ZERO() {
    return Oh();
  }
  get ELEMENTS() {
    return 9;
  }
  get RANK() {
    return 3;
  }
  get INDICES() {
    return Js;
  }
  constructor(t, ...n) {
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0), arguments.length === 1 && Array.isArray(t) ? this.copy(t) : n.length > 0 ? this.copy([t, ...n]) : this.identity();
  }
  copy(t) {
    return this[0] = t[0], this[1] = t[1], this[2] = t[2], this[3] = t[3], this[4] = t[4], this[5] = t[5], this[6] = t[6], this[7] = t[7], this[8] = t[8], this.check();
  }
  identity() {
    return this.copy(xh);
  }
  fromObject(t) {
    return this.check();
  }
  fromQuaternion(t) {
    return Ih(this, t), this.check();
  }
  set(t, n, s, r, i, o, a, c, u) {
    return this[0] = t, this[1] = n, this[2] = s, this[3] = r, this[4] = i, this[5] = o, this[6] = a, this[7] = c, this[8] = u, this.check();
  }
  setRowMajor(t, n, s, r, i, o, a, c, u) {
    return this[0] = t, this[1] = r, this[2] = a, this[3] = n, this[4] = i, this[5] = c, this[6] = s, this[7] = o, this[8] = u, this.check();
  }
  determinant() {
    return Rh(this);
  }
  transpose() {
    return _h(this, this), this.check();
  }
  invert() {
    return wh(this, this), this.check();
  }
  multiplyLeft(t) {
    return hi(this, t, this), this.check();
  }
  multiplyRight(t) {
    return hi(this, this, t), this.check();
  }
  rotate(t) {
    return Sh(this, this, t), this.check();
  }
  scale(t) {
    return Array.isArray(t) ? fi(this, this, t) : fi(this, this, [t, t]), this.check();
  }
  translate(t) {
    return Mh(this, this, t), this.check();
  }
  transform(t, n) {
    let s;
    switch (t.length) {
      case 2:
        s = ma(n || [-0, -0], t, this);
        break;
      case 3:
        s = Ea(n || [-0, -0, -0], t, this);
        break;
      case 4:
        s = ya(n || [-0, -0, -0, -0], t, this);
        break;
      default:
        throw new Error("Illegal vector");
    }
    return Fe(s, t.length), s;
  }
  transformVector(t, n) {
    return this.transform(t, n);
  }
  transformVector2(t, n) {
    return this.transform(t, n);
  }
  transformVector3(t, n) {
    return this.transform(t, n);
  }
}
let en, nn = null;
function Oh() {
  return en || (en = new W([0, 0, 0, 0, 0, 0, 0, 0, 0]), Object.freeze(en)), en;
}
function Fh() {
  return nn || (nn = new W(), Object.freeze(nn)), nn;
}
function vh(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Dh(e, t) {
  if (e === t) {
    const n = t[1], s = t[2], r = t[3], i = t[6], o = t[7], a = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = s, e[9] = i, e[11] = t[14], e[12] = r, e[13] = o, e[14] = a;
  } else
    e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function Lh(e, t) {
  const n = t[0], s = t[1], r = t[2], i = t[3], o = t[4], a = t[5], c = t[6], u = t[7], l = t[8], h = t[9], f = t[10], d = t[11], m = t[12], g = t[13], y = t[14], E = t[15], R = n * a - s * o, B = n * c - r * o, C = n * u - i * o, M = s * c - r * a, b = s * u - i * a, F = r * u - i * c, v = l * g - h * m, O = l * y - f * m, L = l * E - d * m, k = h * y - f * g, X = h * E - d * g, Q = f * E - d * y;
  let P = R * Q - B * X + C * k + M * L - b * O + F * v;
  return P ? (P = 1 / P, e[0] = (a * Q - c * X + u * k) * P, e[1] = (r * X - s * Q - i * k) * P, e[2] = (g * F - y * b + E * M) * P, e[3] = (f * b - h * F - d * M) * P, e[4] = (c * L - o * Q - u * O) * P, e[5] = (n * Q - r * L + i * O) * P, e[6] = (y * C - m * F - E * B) * P, e[7] = (l * F - f * C + d * B) * P, e[8] = (o * X - a * L + u * v) * P, e[9] = (s * L - n * X - i * v) * P, e[10] = (m * b - g * C + E * R) * P, e[11] = (h * C - l * b - d * R) * P, e[12] = (a * O - o * k - c * v) * P, e[13] = (n * k - s * O + r * v) * P, e[14] = (g * B - m * M - y * R) * P, e[15] = (l * M - h * B + f * R) * P, e) : null;
}
function Ph(e) {
  const t = e[0], n = e[1], s = e[2], r = e[3], i = e[4], o = e[5], a = e[6], c = e[7], u = e[8], l = e[9], h = e[10], f = e[11], d = e[12], m = e[13], g = e[14], y = e[15], E = t * o - n * i, R = t * a - s * i, B = n * a - s * o, C = u * m - l * d, M = u * g - h * d, b = l * g - h * m, F = t * b - n * M + s * C, v = i * b - o * M + a * C, O = u * B - l * R + h * E, L = d * B - m * R + g * E;
  return c * F - r * v + y * O - f * L;
}
function di(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = t[3], a = t[4], c = t[5], u = t[6], l = t[7], h = t[8], f = t[9], d = t[10], m = t[11], g = t[12], y = t[13], E = t[14], R = t[15];
  let B = n[0], C = n[1], M = n[2], b = n[3];
  return e[0] = B * s + C * a + M * h + b * g, e[1] = B * r + C * c + M * f + b * y, e[2] = B * i + C * u + M * d + b * E, e[3] = B * o + C * l + M * m + b * R, B = n[4], C = n[5], M = n[6], b = n[7], e[4] = B * s + C * a + M * h + b * g, e[5] = B * r + C * c + M * f + b * y, e[6] = B * i + C * u + M * d + b * E, e[7] = B * o + C * l + M * m + b * R, B = n[8], C = n[9], M = n[10], b = n[11], e[8] = B * s + C * a + M * h + b * g, e[9] = B * r + C * c + M * f + b * y, e[10] = B * i + C * u + M * d + b * E, e[11] = B * o + C * l + M * m + b * R, B = n[12], C = n[13], M = n[14], b = n[15], e[12] = B * s + C * a + M * h + b * g, e[13] = B * r + C * c + M * f + b * y, e[14] = B * i + C * u + M * d + b * E, e[15] = B * o + C * l + M * m + b * R, e;
}
function Gh(e, t, n) {
  const s = n[0], r = n[1], i = n[2];
  let o, a, c, u, l, h, f, d, m, g, y, E;
  return t === e ? (e[12] = t[0] * s + t[4] * r + t[8] * i + t[12], e[13] = t[1] * s + t[5] * r + t[9] * i + t[13], e[14] = t[2] * s + t[6] * r + t[10] * i + t[14], e[15] = t[3] * s + t[7] * r + t[11] * i + t[15]) : (o = t[0], a = t[1], c = t[2], u = t[3], l = t[4], h = t[5], f = t[6], d = t[7], m = t[8], g = t[9], y = t[10], E = t[11], e[0] = o, e[1] = a, e[2] = c, e[3] = u, e[4] = l, e[5] = h, e[6] = f, e[7] = d, e[8] = m, e[9] = g, e[10] = y, e[11] = E, e[12] = o * s + l * r + m * i + t[12], e[13] = a * s + h * r + g * i + t[13], e[14] = c * s + f * r + y * i + t[14], e[15] = u * s + d * r + E * i + t[15]), e;
}
function Nh(e, t, n) {
  const s = n[0], r = n[1], i = n[2];
  return e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e[3] = t[3] * s, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * i, e[9] = t[9] * i, e[10] = t[10] * i, e[11] = t[11] * i, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function Uh(e, t, n, s) {
  let r = s[0], i = s[1], o = s[2], a = Math.sqrt(r * r + i * i + o * o), c, u, l, h, f, d, m, g, y, E, R, B, C, M, b, F, v, O, L, k, X, Q, P, at;
  return a < ve ? null : (a = 1 / a, r *= a, i *= a, o *= a, u = Math.sin(n), c = Math.cos(n), l = 1 - c, h = t[0], f = t[1], d = t[2], m = t[3], g = t[4], y = t[5], E = t[6], R = t[7], B = t[8], C = t[9], M = t[10], b = t[11], F = r * r * l + c, v = i * r * l + o * u, O = o * r * l - i * u, L = r * i * l - o * u, k = i * i * l + c, X = o * i * l + r * u, Q = r * o * l + i * u, P = i * o * l - r * u, at = o * o * l + c, e[0] = h * F + g * v + B * O, e[1] = f * F + y * v + C * O, e[2] = d * F + E * v + M * O, e[3] = m * F + R * v + b * O, e[4] = h * L + g * k + B * X, e[5] = f * L + y * k + C * X, e[6] = d * L + E * k + M * X, e[7] = m * L + R * k + b * X, e[8] = h * Q + g * P + B * at, e[9] = f * Q + y * P + C * at, e[10] = d * Q + E * P + M * at, e[11] = m * Q + R * P + b * at, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function Hh(e, t, n) {
  const s = Math.sin(n), r = Math.cos(n), i = t[4], o = t[5], a = t[6], c = t[7], u = t[8], l = t[9], h = t[10], f = t[11];
  return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = i * r + u * s, e[5] = o * r + l * s, e[6] = a * r + h * s, e[7] = c * r + f * s, e[8] = u * r - i * s, e[9] = l * r - o * s, e[10] = h * r - a * s, e[11] = f * r - c * s, e;
}
function Jh(e, t, n) {
  const s = Math.sin(n), r = Math.cos(n), i = t[0], o = t[1], a = t[2], c = t[3], u = t[8], l = t[9], h = t[10], f = t[11];
  return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * r - u * s, e[1] = o * r - l * s, e[2] = a * r - h * s, e[3] = c * r - f * s, e[8] = i * s + u * r, e[9] = o * s + l * r, e[10] = a * s + h * r, e[11] = c * s + f * r, e;
}
function Vh(e, t, n) {
  const s = Math.sin(n), r = Math.cos(n), i = t[0], o = t[1], a = t[2], c = t[3], u = t[4], l = t[5], h = t[6], f = t[7];
  return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * r + u * s, e[1] = o * r + l * s, e[2] = a * r + h * s, e[3] = c * r + f * s, e[4] = u * r - i * s, e[5] = l * r - o * s, e[6] = h * r - a * s, e[7] = f * r - c * s, e;
}
function jh(e, t) {
  const n = t[0], s = t[1], r = t[2], i = t[4], o = t[5], a = t[6], c = t[8], u = t[9], l = t[10];
  return e[0] = Math.sqrt(n * n + s * s + r * r), e[1] = Math.sqrt(i * i + o * o + a * a), e[2] = Math.sqrt(c * c + u * u + l * l), e;
}
function kh(e, t) {
  const n = t[0], s = t[1], r = t[2], i = t[3], o = n + n, a = s + s, c = r + r, u = n * o, l = s * o, h = s * a, f = r * o, d = r * a, m = r * c, g = i * o, y = i * a, E = i * c;
  return e[0] = 1 - h - m, e[1] = l + E, e[2] = f - y, e[3] = 0, e[4] = l - E, e[5] = 1 - u - m, e[6] = d + g, e[7] = 0, e[8] = f + y, e[9] = d - g, e[10] = 1 - u - h, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Kh(e, t, n, s, r, i, o) {
  const a = 1 / (n - t), c = 1 / (r - s), u = 1 / (i - o);
  return e[0] = i * 2 * a, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i * 2 * c, e[6] = 0, e[7] = 0, e[8] = (n + t) * a, e[9] = (r + s) * c, e[10] = (o + i) * u, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = o * i * 2 * u, e[15] = 0, e;
}
function zh(e, t, n, s, r) {
  const i = 1 / Math.tan(t / 2);
  if (e[0] = i / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, r != null && r !== 1 / 0) {
    const o = 1 / (s - r);
    e[10] = (r + s) * o, e[14] = 2 * r * s * o;
  } else
    e[10] = -1, e[14] = -2 * s;
  return e;
}
const Wh = zh;
function Xh(e, t, n, s, r, i, o) {
  const a = 1 / (t - n), c = 1 / (s - r), u = 1 / (i - o);
  return e[0] = -2 * a, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * u, e[11] = 0, e[12] = (t + n) * a, e[13] = (r + s) * c, e[14] = (o + i) * u, e[15] = 1, e;
}
const Qh = Xh;
function qh(e, t, n, s) {
  let r, i, o, a, c, u, l, h, f, d;
  const m = t[0], g = t[1], y = t[2], E = s[0], R = s[1], B = s[2], C = n[0], M = n[1], b = n[2];
  return Math.abs(m - C) < ve && Math.abs(g - M) < ve && Math.abs(y - b) < ve ? vh(e) : (h = m - C, f = g - M, d = y - b, r = 1 / Math.sqrt(h * h + f * f + d * d), h *= r, f *= r, d *= r, i = R * d - B * f, o = B * h - E * d, a = E * f - R * h, r = Math.sqrt(i * i + o * o + a * a), r ? (r = 1 / r, i *= r, o *= r, a *= r) : (i = 0, o = 0, a = 0), c = f * a - d * o, u = d * i - h * a, l = h * o - f * i, r = Math.sqrt(c * c + u * u + l * l), r ? (r = 1 / r, c *= r, u *= r, l *= r) : (c = 0, u = 0, l = 0), e[0] = i, e[1] = c, e[2] = h, e[3] = 0, e[4] = o, e[5] = u, e[6] = f, e[7] = 0, e[8] = a, e[9] = l, e[10] = d, e[11] = 0, e[12] = -(i * m + o * g + a * y), e[13] = -(c * m + u * g + l * y), e[14] = -(h * m + f * g + d * y), e[15] = 1, e);
}
function $h() {
  const e = new St(4);
  return St != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e;
}
function Yh(e, t, n) {
  return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e;
}
function Zh(e, t, n) {
  return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e;
}
function tf(e) {
  const t = e[0], n = e[1], s = e[2], r = e[3];
  return Math.sqrt(t * t + n * n + s * s + r * r);
}
function ef(e) {
  const t = e[0], n = e[1], s = e[2], r = e[3];
  return t * t + n * n + s * s + r * r;
}
function nf(e, t) {
  const n = t[0], s = t[1], r = t[2], i = t[3];
  let o = n * n + s * s + r * r + i * i;
  return o > 0 && (o = 1 / Math.sqrt(o)), e[0] = n * o, e[1] = s * o, e[2] = r * o, e[3] = i * o, e;
}
function sf(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function rf(e, t, n, s) {
  const r = t[0], i = t[1], o = t[2], a = t[3];
  return e[0] = r + s * (n[0] - r), e[1] = i + s * (n[1] - i), e[2] = o + s * (n[2] - o), e[3] = a + s * (n[3] - a), e;
}
function of(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = t[3];
  return e[0] = n[0] * s + n[4] * r + n[8] * i + n[12] * o, e[1] = n[1] * s + n[5] * r + n[9] * i + n[13] * o, e[2] = n[2] * s + n[6] * r + n[10] * i + n[14] * o, e[3] = n[3] * s + n[7] * r + n[11] * i + n[15] * o, e;
}
function af(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = n[0], a = n[1], c = n[2], u = n[3], l = u * s + a * i - c * r, h = u * r + c * s - o * i, f = u * i + o * r - a * s, d = -o * s - a * r - c * i;
  return e[0] = l * u + d * -o + h * -c - f * -a, e[1] = h * u + d * -a + f * -o - l * -c, e[2] = f * u + d * -c + l * -a - h * -o, e[3] = t[3], e;
}
(function() {
  const e = $h();
  return function(t, n, s, r, i, o) {
    let a, c;
    for (n || (n = 4), s || (s = 0), r ? c = Math.min(r * n + s, t.length) : c = t.length, a = s; a < c; a += n)
      e[0] = t[a], e[1] = t[a + 1], e[2] = t[a + 2], e[3] = t[a + 3], i(e, e, o), t[a] = e[0], t[a + 1] = e[1], t[a + 2] = e[2], t[a + 3] = e[3];
    return t;
  };
})();
var Vs;
(function(e) {
  e[e.COL0ROW0 = 0] = "COL0ROW0", e[e.COL0ROW1 = 1] = "COL0ROW1", e[e.COL0ROW2 = 2] = "COL0ROW2", e[e.COL0ROW3 = 3] = "COL0ROW3", e[e.COL1ROW0 = 4] = "COL1ROW0", e[e.COL1ROW1 = 5] = "COL1ROW1", e[e.COL1ROW2 = 6] = "COL1ROW2", e[e.COL1ROW3 = 7] = "COL1ROW3", e[e.COL2ROW0 = 8] = "COL2ROW0", e[e.COL2ROW1 = 9] = "COL2ROW1", e[e.COL2ROW2 = 10] = "COL2ROW2", e[e.COL2ROW3 = 11] = "COL2ROW3", e[e.COL3ROW0 = 12] = "COL3ROW0", e[e.COL3ROW1 = 13] = "COL3ROW1", e[e.COL3ROW2 = 14] = "COL3ROW2", e[e.COL3ROW3 = 15] = "COL3ROW3";
})(Vs || (Vs = {}));
const cf = 45 * Math.PI / 180, uf = 1, ls = 0.1, hs = 500, lf = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
class V extends ba {
  static get IDENTITY() {
    return ff();
  }
  static get ZERO() {
    return hf();
  }
  get ELEMENTS() {
    return 16;
  }
  get RANK() {
    return 4;
  }
  get INDICES() {
    return Vs;
  }
  constructor(t) {
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0), arguments.length === 1 && Array.isArray(t) ? this.copy(t) : this.identity();
  }
  copy(t) {
    return this[0] = t[0], this[1] = t[1], this[2] = t[2], this[3] = t[3], this[4] = t[4], this[5] = t[5], this[6] = t[6], this[7] = t[7], this[8] = t[8], this[9] = t[9], this[10] = t[10], this[11] = t[11], this[12] = t[12], this[13] = t[13], this[14] = t[14], this[15] = t[15], this.check();
  }
  set(t, n, s, r, i, o, a, c, u, l, h, f, d, m, g, y) {
    return this[0] = t, this[1] = n, this[2] = s, this[3] = r, this[4] = i, this[5] = o, this[6] = a, this[7] = c, this[8] = u, this[9] = l, this[10] = h, this[11] = f, this[12] = d, this[13] = m, this[14] = g, this[15] = y, this.check();
  }
  setRowMajor(t, n, s, r, i, o, a, c, u, l, h, f, d, m, g, y) {
    return this[0] = t, this[1] = i, this[2] = u, this[3] = d, this[4] = n, this[5] = o, this[6] = l, this[7] = m, this[8] = s, this[9] = a, this[10] = h, this[11] = g, this[12] = r, this[13] = c, this[14] = f, this[15] = y, this.check();
  }
  toRowMajor(t) {
    return t[0] = this[0], t[1] = this[4], t[2] = this[8], t[3] = this[12], t[4] = this[1], t[5] = this[5], t[6] = this[9], t[7] = this[13], t[8] = this[2], t[9] = this[6], t[10] = this[10], t[11] = this[14], t[12] = this[3], t[13] = this[7], t[14] = this[11], t[15] = this[15], t;
  }
  identity() {
    return this.copy(lf);
  }
  fromObject(t) {
    return this.check();
  }
  fromQuaternion(t) {
    return kh(this, t), this.check();
  }
  frustum(t) {
    const {
      left: n,
      right: s,
      bottom: r,
      top: i,
      near: o = ls,
      far: a = hs
    } = t;
    return a === 1 / 0 ? df(this, n, s, r, i, o) : Kh(this, n, s, r, i, o, a), this.check();
  }
  lookAt(t) {
    const {
      eye: n,
      center: s = [0, 0, 0],
      up: r = [0, 1, 0]
    } = t;
    return qh(this, n, s, r), this.check();
  }
  ortho(t) {
    const {
      left: n,
      right: s,
      bottom: r,
      top: i,
      near: o = ls,
      far: a = hs
    } = t;
    return Qh(this, n, s, r, i, o, a), this.check();
  }
  orthographic(t) {
    const {
      fovy: n = cf,
      aspect: s = uf,
      focalDistance: r = 1,
      near: i = ls,
      far: o = hs
    } = t;
    mi(n);
    const a = n / 2, c = r * Math.tan(a), u = c * s;
    return this.ortho({
      left: -u,
      right: u,
      bottom: -c,
      top: c,
      near: i,
      far: o
    });
  }
  perspective(t) {
    const {
      fovy: n = 45 * Math.PI / 180,
      aspect: s = 1,
      near: r = 0.1,
      far: i = 500
    } = t;
    return mi(n), Wh(this, n, s, r, i), this.check();
  }
  determinant() {
    return Ph(this);
  }
  getScale(t = [-0, -0, -0]) {
    return t[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]), t[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]), t[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]), t;
  }
  getTranslation(t = [-0, -0, -0]) {
    return t[0] = this[12], t[1] = this[13], t[2] = this[14], t;
  }
  getRotation(t, n) {
    t = t || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0], n = n || [-0, -0, -0];
    const s = this.getScale(n), r = 1 / s[0], i = 1 / s[1], o = 1 / s[2];
    return t[0] = this[0] * r, t[1] = this[1] * i, t[2] = this[2] * o, t[3] = 0, t[4] = this[4] * r, t[5] = this[5] * i, t[6] = this[6] * o, t[7] = 0, t[8] = this[8] * r, t[9] = this[9] * i, t[10] = this[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
  }
  getRotationMatrix3(t, n) {
    t = t || [-0, -0, -0, -0, -0, -0, -0, -0, -0], n = n || [-0, -0, -0];
    const s = this.getScale(n), r = 1 / s[0], i = 1 / s[1], o = 1 / s[2];
    return t[0] = this[0] * r, t[1] = this[1] * i, t[2] = this[2] * o, t[3] = this[4] * r, t[4] = this[5] * i, t[5] = this[6] * o, t[6] = this[8] * r, t[7] = this[9] * i, t[8] = this[10] * o, t;
  }
  transpose() {
    return Dh(this, this), this.check();
  }
  invert() {
    return Lh(this, this), this.check();
  }
  multiplyLeft(t) {
    return di(this, t, this), this.check();
  }
  multiplyRight(t) {
    return di(this, this, t), this.check();
  }
  rotateX(t) {
    return Hh(this, this, t), this.check();
  }
  rotateY(t) {
    return Jh(this, this, t), this.check();
  }
  rotateZ(t) {
    return Vh(this, this, t), this.check();
  }
  rotateXYZ(t) {
    return this.rotateX(t[0]).rotateY(t[1]).rotateZ(t[2]);
  }
  rotateAxis(t, n) {
    return Uh(this, this, t, n), this.check();
  }
  scale(t) {
    return Nh(this, this, Array.isArray(t) ? t : [t, t, t]), this.check();
  }
  translate(t) {
    return Gh(this, this, t), this.check();
  }
  transform(t, n) {
    return t.length === 4 ? (n = of(n || [-0, -0, -0, -0], t, this), Fe(n, 4), n) : this.transformAsPoint(t, n);
  }
  transformAsPoint(t, n) {
    const {
      length: s
    } = t;
    let r;
    switch (s) {
      case 2:
        r = ga(n || [-0, -0], t, this);
        break;
      case 3:
        r = Cr(n || [-0, -0, -0], t, this);
        break;
      default:
        throw new Error("Illegal vector");
    }
    return Fe(r, t.length), r;
  }
  transformAsVector(t, n) {
    let s;
    switch (t.length) {
      case 2:
        s = Aa(n || [-0, -0], t, this);
        break;
      case 3:
        s = pa(n || [-0, -0, -0], t, this);
        break;
      default:
        throw new Error("Illegal vector");
    }
    return Fe(s, t.length), s;
  }
  transformPoint(t, n) {
    return this.transformAsPoint(t, n);
  }
  transformVector(t, n) {
    return this.transformAsPoint(t, n);
  }
  transformDirection(t, n) {
    return this.transformAsVector(t, n);
  }
  makeRotationX(t) {
    return this.identity().rotateX(t);
  }
  makeTranslation(t, n, s) {
    return this.identity().translate([t, n, s]);
  }
}
let sn, rn;
function hf() {
  return sn || (sn = new V([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Object.freeze(sn)), sn;
}
function ff() {
  return rn || (rn = new V(), Object.freeze(rn)), rn;
}
function mi(e) {
  if (e > Math.PI * 2)
    throw Error("expected radians");
}
function df(e, t, n, s, r, i) {
  const o = 2 * i / (n - t), a = 2 * i / (r - s), c = (n + t) / (n - t), u = (r + s) / (r - s), l = -1, h = -1, f = -2 * i;
  return e[0] = o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = c, e[9] = u, e[10] = l, e[11] = h, e[12] = 0, e[13] = 0, e[14] = f, e[15] = 0, e;
}
function gi() {
  const e = new St(4);
  return St != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e;
}
function mf(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
}
function _a(e, t, n) {
  n = n * 0.5;
  const s = Math.sin(n);
  return e[0] = s * t[0], e[1] = s * t[1], e[2] = s * t[2], e[3] = Math.cos(n), e;
}
function Ai(e, t, n) {
  const s = t[0], r = t[1], i = t[2], o = t[3], a = n[0], c = n[1], u = n[2], l = n[3];
  return e[0] = s * l + o * a + r * u - i * c, e[1] = r * l + o * c + i * a - s * u, e[2] = i * l + o * u + s * c - r * a, e[3] = o * l - s * a - r * c - i * u, e;
}
function gf(e, t, n) {
  n *= 0.5;
  const s = t[0], r = t[1], i = t[2], o = t[3], a = Math.sin(n), c = Math.cos(n);
  return e[0] = s * c + o * a, e[1] = r * c + i * a, e[2] = i * c - r * a, e[3] = o * c - s * a, e;
}
function Af(e, t, n) {
  n *= 0.5;
  const s = t[0], r = t[1], i = t[2], o = t[3], a = Math.sin(n), c = Math.cos(n);
  return e[0] = s * c - i * a, e[1] = r * c + o * a, e[2] = i * c + s * a, e[3] = o * c - r * a, e;
}
function pf(e, t, n) {
  n *= 0.5;
  const s = t[0], r = t[1], i = t[2], o = t[3], a = Math.sin(n), c = Math.cos(n);
  return e[0] = s * c + r * a, e[1] = r * c - s * a, e[2] = i * c + o * a, e[3] = o * c - i * a, e;
}
function yf(e, t) {
  const n = t[0], s = t[1], r = t[2];
  return e[0] = n, e[1] = s, e[2] = r, e[3] = Math.sqrt(Math.abs(1 - n * n - s * s - r * r)), e;
}
function Tn(e, t, n, s) {
  const r = t[0], i = t[1], o = t[2], a = t[3];
  let c = n[0], u = n[1], l = n[2], h = n[3], f, d, m, g, y;
  return f = r * c + i * u + o * l + a * h, f < 0 && (f = -f, c = -c, u = -u, l = -l, h = -h), 1 - f > ve ? (d = Math.acos(f), y = Math.sin(d), m = Math.sin((1 - s) * d) / y, g = Math.sin(s * d) / y) : (m = 1 - s, g = s), e[0] = m * r + g * c, e[1] = m * i + g * u, e[2] = m * o + g * l, e[3] = m * a + g * h, e;
}
function Bf(e, t) {
  const n = t[0], s = t[1], r = t[2], i = t[3], o = n * n + s * s + r * r + i * i, a = o ? 1 / o : 0;
  return e[0] = -n * a, e[1] = -s * a, e[2] = -r * a, e[3] = i * a, e;
}
function Cf(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e;
}
function wa(e, t) {
  const n = t[0] + t[4] + t[8];
  let s;
  if (n > 0)
    s = Math.sqrt(n + 1), e[3] = 0.5 * s, s = 0.5 / s, e[0] = (t[5] - t[7]) * s, e[1] = (t[6] - t[2]) * s, e[2] = (t[1] - t[3]) * s;
  else {
    let r = 0;
    t[4] > t[0] && (r = 1), t[8] > t[r * 3 + r] && (r = 2);
    const i = (r + 1) % 3, o = (r + 2) % 3;
    s = Math.sqrt(t[r * 3 + r] - t[i * 3 + i] - t[o * 3 + o] + 1), e[r] = 0.5 * s, s = 0.5 / s, e[3] = (t[i * 3 + o] - t[o * 3 + i]) * s, e[i] = (t[i * 3 + r] + t[r * 3 + i]) * s, e[o] = (t[o * 3 + r] + t[r * 3 + o]) * s;
  }
  return e;
}
const Ef = Yh, Tf = Zh, bf = sf, _f = rf, wf = tf, Rf = ef, Ra = nf, Mf = function() {
  const e = Ba(), t = li(1, 0, 0), n = li(0, 1, 0);
  return function(s, r, i) {
    const o = Br(r, i);
    return o < -0.999999 ? (En(e, t, r), Th(e) < 1e-6 && En(e, n, r), ph(e, e), _a(s, e, Math.PI), s) : o > 0.999999 ? (s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 1, s) : (En(e, r, i), s[0] = e[0], s[1] = e[1], s[2] = e[2], s[3] = 1 + o, Ra(s, s));
  };
}();
(function() {
  const e = gi(), t = gi();
  return function(n, s, r, i, o, a) {
    return Tn(e, s, o, a), Tn(t, r, i, a), Tn(n, e, t, 2 * a * (1 - a)), n;
  };
})();
(function() {
  const e = bh();
  return function(t, n, s, r) {
    return e[0] = s[0], e[3] = s[1], e[6] = s[2], e[1] = r[0], e[4] = r[1], e[7] = r[2], e[2] = -n[0], e[5] = -n[1], e[8] = -n[2], Ra(t, wa(t, e));
  };
})();
const Sf = [0, 0, 0, 1];
class xn extends pr {
  constructor(t = 0, n = 0, s = 0, r = 1) {
    super(-0, -0, -0, -0), Array.isArray(t) && arguments.length === 1 ? this.copy(t) : this.set(t, n, s, r);
  }
  copy(t) {
    return this[0] = t[0], this[1] = t[1], this[2] = t[2], this[3] = t[3], this.check();
  }
  set(t, n, s, r) {
    return this[0] = t, this[1] = n, this[2] = s, this[3] = r, this.check();
  }
  fromObject(t) {
    return this[0] = t.x, this[1] = t.y, this[2] = t.z, this[3] = t.w, this.check();
  }
  fromMatrix3(t) {
    return wa(this, t), this.check();
  }
  fromAxisRotation(t, n) {
    return _a(this, t, n), this.check();
  }
  identity() {
    return mf(this), this.check();
  }
  setAxisAngle(t, n) {
    return this.fromAxisRotation(t, n);
  }
  get ELEMENTS() {
    return 4;
  }
  get x() {
    return this[0];
  }
  set x(t) {
    this[0] = U(t);
  }
  get y() {
    return this[1];
  }
  set y(t) {
    this[1] = U(t);
  }
  get z() {
    return this[2];
  }
  set z(t) {
    this[2] = U(t);
  }
  get w() {
    return this[3];
  }
  set w(t) {
    this[3] = U(t);
  }
  len() {
    return wf(this);
  }
  lengthSquared() {
    return Rf(this);
  }
  dot(t) {
    return bf(this, t);
  }
  rotationTo(t, n) {
    return Mf(this, t, n), this.check();
  }
  add(t) {
    return Ef(this, this, t), this.check();
  }
  calculateW() {
    return yf(this, this), this.check();
  }
  conjugate() {
    return Cf(this, this), this.check();
  }
  invert() {
    return Bf(this, this), this.check();
  }
  lerp(t, n, s) {
    return s === void 0 ? this.lerp(this, t, n) : (_f(this, t, n, s), this.check());
  }
  multiplyRight(t) {
    return Ai(this, this, t), this.check();
  }
  multiplyLeft(t) {
    return Ai(this, t, this), this.check();
  }
  normalize() {
    const t = this.len(), n = t > 0 ? 1 / t : 0;
    return this[0] = this[0] * n, this[1] = this[1] * n, this[2] = this[2] * n, this[3] = this[3] * n, t === 0 && (this[3] = 1), this.check();
  }
  rotateX(t) {
    return gf(this, this, t), this.check();
  }
  rotateY(t) {
    return Af(this, this, t), this.check();
  }
  rotateZ(t) {
    return pf(this, this, t), this.check();
  }
  scale(t) {
    return Tf(this, this, t), this.check();
  }
  slerp(t, n, s) {
    let r, i, o;
    switch (arguments.length) {
      case 1:
        ({
          start: r = Sf,
          target: i,
          ratio: o
        } = t);
        break;
      case 2:
        r = this, i = t, o = n;
        break;
      default:
        r = t, i = n, o = s;
    }
    return Tn(this, r, i, o), this.check();
  }
  transformVector4(t, n = new Er()) {
    return af(n, t, this), Fe(n, 4);
  }
  lengthSq() {
    return this.lengthSquared();
  }
  setFromAxisAngle(t, n) {
    return this.setAxisAngle(t, n);
  }
  premultiply(t) {
    return this.multiplyLeft(t);
  }
  multiply(t) {
    return this.multiplyRight(t);
  }
}
function Ne(e) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ne(e);
}
function If(e, t) {
  if (Ne(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(e, t || "default");
    if (Ne(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xf(e) {
  var t = If(e, "string");
  return Ne(t) == "symbol" ? t : String(t);
}
function x(e, t, n) {
  return t = xf(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
const Of = 0.1, Ff = 1e-12, Ma = 1e-15, vf = 1e-20, Df = 6378137, Lf = 6378137, Pf = 6356752314245179e-9;
function zn(e) {
  return e;
}
new A();
function Gf(e, t = [], n = zn) {
  return "longitude" in e ? (t[0] = n(e.longitude), t[1] = n(e.latitude), t[2] = e.height) : "x" in e ? (t[0] = n(e.x), t[1] = n(e.y), t[2] = e.z) : (t[0] = n(e[0]), t[1] = n(e[1]), t[2] = e[2]), t;
}
function Nf(e, t = []) {
  return Gf(e, t, Z._cartographicRadians ? zn : rh);
}
function Uf(e, t, n = zn) {
  return "longitude" in t ? (t.longitude = n(e[0]), t.latitude = n(e[1]), t.height = e[2]) : "x" in t ? (t.x = n(e[0]), t.y = n(e[1]), t.z = e[2]) : (t[0] = n(e[0]), t[1] = n(e[1]), t[2] = e[2]), t;
}
function Hf(e, t) {
  return Uf(e, t, Z._cartographicRadians ? zn : ih);
}
const pi = 1e-14, Jf = new A(), yi = {
  up: {
    south: "east",
    north: "west",
    west: "south",
    east: "north"
  },
  down: {
    south: "west",
    north: "east",
    west: "north",
    east: "south"
  },
  south: {
    up: "west",
    down: "east",
    west: "down",
    east: "up"
  },
  north: {
    up: "east",
    down: "west",
    west: "up",
    east: "down"
  },
  west: {
    up: "north",
    down: "south",
    north: "down",
    south: "up"
  },
  east: {
    up: "south",
    down: "north",
    north: "up",
    south: "down"
  }
}, fs = {
  north: [-1, 0, 0],
  east: [0, 1, 0],
  up: [0, 0, 1],
  south: [1, 0, 0],
  west: [0, -1, 0],
  down: [0, 0, -1]
}, Te = {
  east: new A(),
  north: new A(),
  up: new A(),
  west: new A(),
  south: new A(),
  down: new A()
}, Vf = new A(), jf = new A(), kf = new A();
function Bi(e, t, n, s, r, i) {
  const o = yi[t] && yi[t][n];
  j(o && (!s || s === o));
  let a, c, u;
  const l = Jf.copy(r);
  if (kt(l.x, 0, pi) && kt(l.y, 0, pi)) {
    const f = Math.sign(l.z);
    a = Vf.fromArray(fs[t]), t !== "east" && t !== "west" && a.scale(f), c = jf.fromArray(fs[n]), n !== "east" && n !== "west" && c.scale(f), u = kf.fromArray(fs[s]), s !== "east" && s !== "west" && u.scale(f);
  } else {
    const {
      up: f,
      east: d,
      north: m
    } = Te;
    d.set(-l.y, l.x, 0).normalize(), e.geodeticSurfaceNormal(l, f), m.copy(f).cross(d);
    const {
      down: g,
      west: y,
      south: E
    } = Te;
    g.copy(f).scale(-1), y.copy(d).scale(-1), E.copy(m).scale(-1), a = Te[t], c = Te[n], u = Te[s];
  }
  return i[0] = a.x, i[1] = a.y, i[2] = a.z, i[3] = 0, i[4] = c.x, i[5] = c.y, i[6] = c.z, i[7] = 0, i[8] = u.x, i[9] = u.y, i[10] = u.z, i[11] = 0, i[12] = l.x, i[13] = l.y, i[14] = l.z, i[15] = 1, i;
}
const le = new A(), Kf = new A(), zf = new A();
function Wf(e, t, n = []) {
  const {
    oneOverRadii: s,
    oneOverRadiiSquared: r,
    centerToleranceSquared: i
  } = t;
  le.from(e);
  const o = le.x, a = le.y, c = le.z, u = s.x, l = s.y, h = s.z, f = o * o * u * u, d = a * a * l * l, m = c * c * h * h, g = f + d + m, y = Math.sqrt(1 / g);
  if (!Number.isFinite(y))
    return;
  const E = Kf;
  if (E.copy(e).scale(y), g < i)
    return E.to(n);
  const R = r.x, B = r.y, C = r.z, M = zf;
  M.set(E.x * R * 2, E.y * B * 2, E.z * C * 2);
  let b = (1 - y) * le.len() / (0.5 * M.len()), F = 0, v, O, L, k;
  do {
    b -= F, v = 1 / (1 + b * R), O = 1 / (1 + b * B), L = 1 / (1 + b * C);
    const X = v * v, Q = O * O, P = L * L, at = X * v, zt = Q * O, ie = P * L;
    k = f * X + d * Q + m * P - 1;
    const Dt = -2 * (f * at * R + d * zt * B + m * ie * C);
    F = k / Dt;
  } while (Math.abs(k) > Ff);
  return le.scale([v, O, L]).to(n);
}
const on = new A(), Ci = new A(), Xf = new A(), _t = new A(), Qf = new A(), an = new A();
class J {
  constructor(t = 0, n = 0, s = 0) {
    x(this, "radii", void 0), x(this, "radiiSquared", void 0), x(this, "radiiToTheFourth", void 0), x(this, "oneOverRadii", void 0), x(this, "oneOverRadiiSquared", void 0), x(this, "minimumRadius", void 0), x(this, "maximumRadius", void 0), x(this, "centerToleranceSquared", Of), x(this, "squaredXOverSquaredZ", void 0), j(t >= 0), j(n >= 0), j(s >= 0), this.radii = new A(t, n, s), this.radiiSquared = new A(t * t, n * n, s * s), this.radiiToTheFourth = new A(t * t * t * t, n * n * n * n, s * s * s * s), this.oneOverRadii = new A(t === 0 ? 0 : 1 / t, n === 0 ? 0 : 1 / n, s === 0 ? 0 : 1 / s), this.oneOverRadiiSquared = new A(t === 0 ? 0 : 1 / (t * t), n === 0 ? 0 : 1 / (n * n), s === 0 ? 0 : 1 / (s * s)), this.minimumRadius = Math.min(t, n, s), this.maximumRadius = Math.max(t, n, s), this.radiiSquared.z !== 0 && (this.squaredXOverSquaredZ = this.radiiSquared.x / this.radiiSquared.z), Object.freeze(this);
  }
  equals(t) {
    return this === t || !!(t && this.radii.equals(t.radii));
  }
  toString() {
    return this.radii.toString();
  }
  cartographicToCartesian(t, n = [0, 0, 0]) {
    const s = Ci, r = Xf, [, , i] = t;
    this.geodeticSurfaceNormalCartographic(t, s), r.copy(this.radiiSquared).scale(s);
    const o = Math.sqrt(s.dot(r));
    return r.scale(1 / o), s.scale(i), r.add(s), r.to(n);
  }
  cartesianToCartographic(t, n = [0, 0, 0]) {
    an.from(t);
    const s = this.scaleToGeodeticSurface(an, _t);
    if (!s)
      return;
    const r = this.geodeticSurfaceNormal(s, Ci), i = Qf;
    i.copy(an).subtract(s);
    const o = Math.atan2(r.y, r.x), a = Math.asin(r.z), c = Math.sign(Br(i, an)) * Ca(i);
    return Hf([o, a, c], n);
  }
  eastNorthUpToFixedFrame(t, n = new V()) {
    return Bi(this, "east", "north", "up", t, n);
  }
  localFrameToFixedFrame(t, n, s, r, i = new V()) {
    return Bi(this, t, n, s, r, i);
  }
  geocentricSurfaceNormal(t, n = [0, 0, 0]) {
    return on.from(t).normalize().to(n);
  }
  geodeticSurfaceNormalCartographic(t, n = [0, 0, 0]) {
    const s = Nf(t), r = s[0], i = s[1], o = Math.cos(i);
    return on.set(o * Math.cos(r), o * Math.sin(r), Math.sin(i)).normalize(), on.to(n);
  }
  geodeticSurfaceNormal(t, n = [0, 0, 0]) {
    return on.from(t).scale(this.oneOverRadiiSquared).normalize().to(n);
  }
  scaleToGeodeticSurface(t, n) {
    return Wf(t, this, n);
  }
  scaleToGeocentricSurface(t, n = [0, 0, 0]) {
    _t.from(t);
    const s = _t.x, r = _t.y, i = _t.z, o = this.oneOverRadiiSquared, a = 1 / Math.sqrt(s * s * o.x + r * r * o.y + i * i * o.z);
    return _t.multiplyScalar(a).to(n);
  }
  transformPositionToScaledSpace(t, n = [0, 0, 0]) {
    return _t.from(t).scale(this.oneOverRadii).to(n);
  }
  transformPositionFromScaledSpace(t, n = [0, 0, 0]) {
    return _t.from(t).scale(this.radii).to(n);
  }
  getSurfaceNormalIntersectionWithZAxis(t, n = 0, s = [0, 0, 0]) {
    j(kt(this.radii.x, this.radii.y, Ma)), j(this.radii.z > 0), _t.from(t);
    const r = _t.z * (1 - this.squaredXOverSquaredZ);
    if (!(Math.abs(r) >= this.radii.z - n))
      return _t.set(0, 0, r).to(s);
  }
}
x(J, "WGS84", new J(Df, Lf, Pf));
const pt = {
  OUTSIDE: -1,
  INTERSECTING: 0,
  INSIDE: 1
};
new A();
new A();
const be = new A(), Ei = new A();
class Xe {
  constructor(t = [0, 0, 0], n = 0) {
    x(this, "center", void 0), x(this, "radius", void 0), this.radius = -0, this.center = new A(), this.fromCenterRadius(t, n);
  }
  fromCenterRadius(t, n) {
    return this.center.from(t), this.radius = n, this;
  }
  fromCornerPoints(t, n) {
    return n = be.from(n), this.center = new A().from(t).add(n).scale(0.5), this.radius = this.center.distance(n), this;
  }
  equals(t) {
    return this === t || !!t && this.center.equals(t.center) && this.radius === t.radius;
  }
  clone() {
    return new Xe(this.center, this.radius);
  }
  union(t) {
    const n = this.center, s = this.radius, r = t.center, i = t.radius, o = be.copy(r).subtract(n), a = o.magnitude();
    if (s >= a + i)
      return this.clone();
    if (i >= a + s)
      return t.clone();
    const c = (s + a + i) * 0.5;
    return Ei.copy(o).scale((-s + c) / a).add(n), this.center.copy(Ei), this.radius = c, this;
  }
  expand(t) {
    const s = be.from(t).subtract(this.center).magnitude();
    return s > this.radius && (this.radius = s), this;
  }
  transform(t) {
    this.center.transform(t);
    const n = jh(be, t);
    return this.radius = Math.max(n[0], Math.max(n[1], n[2])) * this.radius, this;
  }
  distanceSquaredTo(t) {
    const n = this.distanceTo(t);
    return n * n;
  }
  distanceTo(t) {
    const s = be.from(t).subtract(this.center);
    return Math.max(0, s.len() - this.radius);
  }
  intersectPlane(t) {
    const n = this.center, s = this.radius, i = t.normal.dot(n) + t.distance;
    return i < -s ? pt.OUTSIDE : i < s ? pt.INTERSECTING : pt.INSIDE;
  }
}
const qf = new A(), $f = new A(), cn = new A(), un = new A(), ln = new A(), Yf = new A(), Zf = new A(), Pt = {
  COLUMN0ROW0: 0,
  COLUMN0ROW1: 1,
  COLUMN0ROW2: 2,
  COLUMN1ROW0: 3,
  COLUMN1ROW1: 4,
  COLUMN1ROW2: 5,
  COLUMN2ROW0: 6,
  COLUMN2ROW1: 7,
  COLUMN2ROW2: 8
};
class Qe {
  constructor(t = [0, 0, 0], n = [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    x(this, "center", void 0), x(this, "halfAxes", void 0), this.center = new A().from(t), this.halfAxes = new W(n);
  }
  get halfSize() {
    const t = this.halfAxes.getColumn(0), n = this.halfAxes.getColumn(1), s = this.halfAxes.getColumn(2);
    return [new A(t).len(), new A(n).len(), new A(s).len()];
  }
  get quaternion() {
    const t = this.halfAxes.getColumn(0), n = this.halfAxes.getColumn(1), s = this.halfAxes.getColumn(2), r = new A(t).normalize(), i = new A(n).normalize(), o = new A(s).normalize();
    return new xn().fromMatrix3(new W([...r, ...i, ...o]));
  }
  fromCenterHalfSizeQuaternion(t, n, s) {
    const r = new xn(s), i = new W().fromQuaternion(r);
    return i[0] = i[0] * n[0], i[1] = i[1] * n[0], i[2] = i[2] * n[0], i[3] = i[3] * n[1], i[4] = i[4] * n[1], i[5] = i[5] * n[1], i[6] = i[6] * n[2], i[7] = i[7] * n[2], i[8] = i[8] * n[2], this.center = new A().from(t), this.halfAxes = i, this;
  }
  clone() {
    return new Qe(this.center, this.halfAxes);
  }
  equals(t) {
    return this === t || !!t && this.center.equals(t.center) && this.halfAxes.equals(t.halfAxes);
  }
  getBoundingSphere(t = new Xe()) {
    const n = this.halfAxes, s = n.getColumn(0, cn), r = n.getColumn(1, un), i = n.getColumn(2, ln), o = qf.copy(s).add(r).add(i);
    return t.center.copy(this.center), t.radius = o.magnitude(), t;
  }
  intersectPlane(t) {
    const n = this.center, s = t.normal, r = this.halfAxes, i = s.x, o = s.y, a = s.z, c = Math.abs(i * r[Pt.COLUMN0ROW0] + o * r[Pt.COLUMN0ROW1] + a * r[Pt.COLUMN0ROW2]) + Math.abs(i * r[Pt.COLUMN1ROW0] + o * r[Pt.COLUMN1ROW1] + a * r[Pt.COLUMN1ROW2]) + Math.abs(i * r[Pt.COLUMN2ROW0] + o * r[Pt.COLUMN2ROW1] + a * r[Pt.COLUMN2ROW2]), u = s.dot(n) + t.distance;
    return u <= -c ? pt.OUTSIDE : u >= c ? pt.INSIDE : pt.INTERSECTING;
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceSquaredTo(t));
  }
  distanceSquaredTo(t) {
    const n = $f.from(t).subtract(this.center), s = this.halfAxes, r = s.getColumn(0, cn), i = s.getColumn(1, un), o = s.getColumn(2, ln), a = r.magnitude(), c = i.magnitude(), u = o.magnitude();
    r.normalize(), i.normalize(), o.normalize();
    let l = 0, h;
    return h = Math.abs(n.dot(r)) - a, h > 0 && (l += h * h), h = Math.abs(n.dot(i)) - c, h > 0 && (l += h * h), h = Math.abs(n.dot(o)) - u, h > 0 && (l += h * h), l;
  }
  computePlaneDistances(t, n, s = [-0, -0]) {
    let r = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    const o = this.center, a = this.halfAxes, c = a.getColumn(0, cn), u = a.getColumn(1, un), l = a.getColumn(2, ln), h = Yf.copy(c).add(u).add(l).add(o), f = Zf.copy(h).subtract(t);
    let d = n.dot(f);
    return r = Math.min(d, r), i = Math.max(d, i), h.copy(o).add(c).add(u).subtract(l), f.copy(h).subtract(t), d = n.dot(f), r = Math.min(d, r), i = Math.max(d, i), h.copy(o).add(c).subtract(u).add(l), f.copy(h).subtract(t), d = n.dot(f), r = Math.min(d, r), i = Math.max(d, i), h.copy(o).add(c).subtract(u).subtract(l), f.copy(h).subtract(t), d = n.dot(f), r = Math.min(d, r), i = Math.max(d, i), o.copy(h).subtract(c).add(u).add(l), f.copy(h).subtract(t), d = n.dot(f), r = Math.min(d, r), i = Math.max(d, i), o.copy(h).subtract(c).add(u).subtract(l), f.copy(h).subtract(t), d = n.dot(f), r = Math.min(d, r), i = Math.max(d, i), o.copy(h).subtract(c).subtract(u).add(l), f.copy(h).subtract(t), d = n.dot(f), r = Math.min(d, r), i = Math.max(d, i), o.copy(h).subtract(c).subtract(u).subtract(l), f.copy(h).subtract(t), d = n.dot(f), r = Math.min(d, r), i = Math.max(d, i), s[0] = r, s[1] = i, s;
  }
  transform(t) {
    this.center.transformAsPoint(t);
    const n = this.halfAxes.getColumn(0, cn);
    n.transformAsPoint(t);
    const s = this.halfAxes.getColumn(1, un);
    s.transformAsPoint(t);
    const r = this.halfAxes.getColumn(2, ln);
    return r.transformAsPoint(t), this.halfAxes = new W([...n, ...s, ...r]), this;
  }
  getTransform() {
    throw new Error("not implemented");
  }
}
const Ti = new A(), bi = new A();
class tt {
  constructor(t = [0, 0, 1], n = 0) {
    x(this, "normal", void 0), x(this, "distance", void 0), this.normal = new A(), this.distance = -0, this.fromNormalDistance(t, n);
  }
  fromNormalDistance(t, n) {
    return j(Number.isFinite(n)), this.normal.from(t).normalize(), this.distance = n, this;
  }
  fromPointNormal(t, n) {
    t = Ti.from(t), this.normal.from(n).normalize();
    const s = -this.normal.dot(t);
    return this.distance = s, this;
  }
  fromCoefficients(t, n, s, r) {
    return this.normal.set(t, n, s), j(kt(this.normal.len(), 1)), this.distance = r, this;
  }
  clone() {
    return new tt(this.normal, this.distance);
  }
  equals(t) {
    return kt(this.distance, t.distance) && kt(this.normal, t.normal);
  }
  getPointDistance(t) {
    return this.normal.dot(t) + this.distance;
  }
  transform(t) {
    const n = bi.copy(this.normal).transformAsVector(t).normalize(), s = this.normal.scale(-this.distance).transform(t);
    return this.fromPointNormal(s, n);
  }
  projectPointOntoPlane(t, n = [0, 0, 0]) {
    const s = Ti.from(t), r = this.getPointDistance(s), i = bi.copy(this.normal).scale(r);
    return s.subtract(i).to(n);
  }
}
const _i = [new A([1, 0, 0]), new A([0, 1, 0]), new A([0, 0, 1])], wi = new A(), td = new A();
class dt {
  constructor(t = []) {
    x(this, "planes", void 0), this.planes = t;
  }
  fromBoundingSphere(t) {
    this.planes.length = 2 * _i.length;
    const n = t.center, s = t.radius;
    let r = 0;
    for (const i of _i) {
      let o = this.planes[r], a = this.planes[r + 1];
      o || (o = this.planes[r] = new tt()), a || (a = this.planes[r + 1] = new tt());
      const c = wi.copy(i).scale(-s).add(n);
      o.fromPointNormal(c, i);
      const u = wi.copy(i).scale(s).add(n), l = td.copy(i).negate();
      a.fromPointNormal(u, l), r += 2;
    }
    return this;
  }
  computeVisibility(t) {
    let n = pt.INSIDE;
    for (const s of this.planes)
      switch (t.intersectPlane(s)) {
        case pt.OUTSIDE:
          return pt.OUTSIDE;
        case pt.INTERSECTING:
          n = pt.INTERSECTING;
          break;
      }
    return n;
  }
  computeVisibilityWithPlaneMask(t, n) {
    if (j(Number.isFinite(n), "parentPlaneMask is required."), n === dt.MASK_OUTSIDE || n === dt.MASK_INSIDE)
      return n;
    let s = dt.MASK_INSIDE;
    const r = this.planes;
    for (let i = 0; i < this.planes.length; ++i) {
      const o = i < 31 ? 1 << i : 0;
      if (i < 31 && !(n & o))
        continue;
      const a = r[i], c = t.intersectPlane(a);
      if (c === pt.OUTSIDE)
        return dt.MASK_OUTSIDE;
      c === pt.INTERSECTING && (s |= o);
    }
    return s;
  }
}
x(dt, "MASK_OUTSIDE", 4294967295);
x(dt, "MASK_INSIDE", 0);
x(dt, "MASK_INDETERMINATE", 2147483647);
const ed = new A(), nd = new A(), sd = new A(), rd = new A(), id = new A();
class On {
  constructor(t = {}) {
    x(this, "left", void 0), x(this, "_left", void 0), x(this, "right", void 0), x(this, "_right", void 0), x(this, "top", void 0), x(this, "_top", void 0), x(this, "bottom", void 0), x(this, "_bottom", void 0), x(this, "near", void 0), x(this, "_near", void 0), x(this, "far", void 0), x(this, "_far", void 0), x(this, "_cullingVolume", new dt([new tt(), new tt(), new tt(), new tt(), new tt(), new tt()])), x(this, "_perspectiveMatrix", new V()), x(this, "_infinitePerspective", new V());
    const {
      near: n = 1,
      far: s = 5e8
    } = t;
    this.left = t.left, this._left = void 0, this.right = t.right, this._right = void 0, this.top = t.top, this._top = void 0, this.bottom = t.bottom, this._bottom = void 0, this.near = n, this._near = n, this.far = s, this._far = s;
  }
  clone() {
    return new On({
      right: this.right,
      left: this.left,
      top: this.top,
      bottom: this.bottom,
      near: this.near,
      far: this.far
    });
  }
  equals(t) {
    return t && t instanceof On && this.right === t.right && this.left === t.left && this.top === t.top && this.bottom === t.bottom && this.near === t.near && this.far === t.far;
  }
  get projectionMatrix() {
    return this._update(), this._perspectiveMatrix;
  }
  get infiniteProjectionMatrix() {
    return this._update(), this._infinitePerspective;
  }
  computeCullingVolume(t, n, s) {
    j(t, "position is required."), j(n, "direction is required."), j(s, "up is required.");
    const r = this._cullingVolume.planes;
    s = ed.copy(s).normalize();
    const i = nd.copy(n).cross(s).normalize(), o = sd.copy(n).multiplyByScalar(this.near).add(t), a = rd.copy(n).multiplyByScalar(this.far).add(t);
    let c = id;
    return c.copy(i).multiplyByScalar(this.left).add(o).subtract(t).cross(s), r[0].fromPointNormal(t, c), c.copy(i).multiplyByScalar(this.right).add(o).subtract(t).cross(s).negate(), r[1].fromPointNormal(t, c), c.copy(s).multiplyByScalar(this.bottom).add(o).subtract(t).cross(i).negate(), r[2].fromPointNormal(t, c), c.copy(s).multiplyByScalar(this.top).add(o).subtract(t).cross(i), r[3].fromPointNormal(t, c), c = new A().copy(n), r[4].fromPointNormal(o, c), c.negate(), r[5].fromPointNormal(a, c), this._cullingVolume;
  }
  getPixelDimensions(t, n, s, r) {
    this._update(), j(Number.isFinite(t) && Number.isFinite(n)), j(t > 0), j(n > 0), j(s > 0), j(r);
    const i = 1 / this.near;
    let o = this.top * i;
    const a = 2 * s * o / n;
    o = this.right * i;
    const c = 2 * s * o / t;
    return r.x = c, r.y = a, r;
  }
  _update() {
    j(Number.isFinite(this.right) && Number.isFinite(this.left) && Number.isFinite(this.top) && Number.isFinite(this.bottom) && Number.isFinite(this.near) && Number.isFinite(this.far));
    const {
      top: t,
      bottom: n,
      right: s,
      left: r,
      near: i,
      far: o
    } = this;
    (t !== this._top || n !== this._bottom || r !== this._left || s !== this._right || i !== this._near || o !== this._far) && (j(this.near > 0 && this.near < this.far, "near must be greater than zero and less than far."), this._left = r, this._right = s, this._top = t, this._bottom = n, this._near = i, this._far = o, this._perspectiveMatrix = new V().frustum({
      left: r,
      right: s,
      bottom: n,
      top: t,
      near: i,
      far: o
    }), this._infinitePerspective = new V().frustum({
      left: r,
      right: s,
      bottom: n,
      top: t,
      near: i,
      far: 1 / 0
    }));
  }
}
const od = (e) => e !== null && typeof e < "u";
class Fn {
  constructor(t = {}) {
    x(this, "_offCenterFrustum", new On()), x(this, "fov", void 0), x(this, "_fov", void 0), x(this, "_fovy", void 0), x(this, "_sseDenominator", void 0), x(this, "aspectRatio", void 0), x(this, "_aspectRatio", void 0), x(this, "near", void 0), x(this, "_near", void 0), x(this, "far", void 0), x(this, "_far", void 0), x(this, "xOffset", void 0), x(this, "_xOffset", void 0), x(this, "yOffset", void 0), x(this, "_yOffset", void 0);
    const {
      fov: n,
      aspectRatio: s,
      near: r = 1,
      far: i = 5e8,
      xOffset: o = 0,
      yOffset: a = 0
    } = t;
    this.fov = n, this.aspectRatio = s, this.near = r, this.far = i, this.xOffset = o, this.yOffset = a;
  }
  clone() {
    return new Fn({
      aspectRatio: this.aspectRatio,
      fov: this.fov,
      near: this.near,
      far: this.far
    });
  }
  equals(t) {
    return !od(t) || !(t instanceof Fn) ? !1 : (this._update(), t._update(), this.fov === t.fov && this.aspectRatio === t.aspectRatio && this.near === t.near && this.far === t.far && this._offCenterFrustum.equals(t._offCenterFrustum));
  }
  get projectionMatrix() {
    return this._update(), this._offCenterFrustum.projectionMatrix;
  }
  get infiniteProjectionMatrix() {
    return this._update(), this._offCenterFrustum.infiniteProjectionMatrix;
  }
  get fovy() {
    return this._update(), this._fovy;
  }
  get sseDenominator() {
    return this._update(), this._sseDenominator;
  }
  computeCullingVolume(t, n, s) {
    return this._update(), this._offCenterFrustum.computeCullingVolume(t, n, s);
  }
  getPixelDimensions(t, n, s, r) {
    return this._update(), this._offCenterFrustum.getPixelDimensions(t, n, s, r || new Kn());
  }
  _update() {
    j(Number.isFinite(this.fov) && Number.isFinite(this.aspectRatio) && Number.isFinite(this.near) && Number.isFinite(this.far));
    const t = this._offCenterFrustum;
    (this.fov !== this._fov || this.aspectRatio !== this._aspectRatio || this.near !== this._near || this.far !== this._far || this.xOffset !== this._xOffset || this.yOffset !== this._yOffset) && (j(this.fov >= 0 && this.fov < Math.PI), j(this.aspectRatio > 0), j(this.near >= 0 && this.near < this.far), this._aspectRatio = this.aspectRatio, this._fov = this.fov, this._fovy = this.aspectRatio <= 1 ? this.fov : Math.atan(Math.tan(this.fov * 0.5) / this.aspectRatio) * 2, this._near = this.near, this._far = this.far, this._sseDenominator = 2 * Math.tan(0.5 * this._fovy), this._xOffset = this.xOffset, this._yOffset = this.yOffset, t.top = this.near * Math.tan(0.5 * this._fovy), t.bottom = -t.top, t.right = this.aspectRatio * t.top, t.left = -t.right, t.near = this.near, t.far = this.far, t.right += this.xOffset, t.left += this.xOffset, t.top += this.yOffset, t.bottom += this.yOffset);
  }
}
new A();
new A();
new A();
new A();
new A();
new A();
new A();
new A();
new A();
new A();
new A();
new A();
const xt = new W(), ad = new W(), cd = new W(), hn = new W(), Ri = new W();
function ud(e, t = {}) {
  const n = vf, s = 10;
  let r = 0, i = 0;
  const o = ad, a = cd;
  o.identity(), a.copy(e);
  const c = n * ld(a);
  for (; i < s && hd(a) > c; )
    fd(a, hn), Ri.copy(hn).transpose(), a.multiplyRight(hn), a.multiplyLeft(Ri), o.multiplyRight(hn), ++r > 2 && (++i, r = 0);
  return t.unitary = o.toTarget(t.unitary), t.diagonal = a.toTarget(t.diagonal), t;
}
function ld(e) {
  let t = 0;
  for (let n = 0; n < 9; ++n) {
    const s = e[n];
    t += s * s;
  }
  return Math.sqrt(t);
}
const js = [1, 0, 0], ks = [2, 2, 1];
function hd(e) {
  let t = 0;
  for (let n = 0; n < 3; ++n) {
    const s = e[xt.getElementIndex(ks[n], js[n])];
    t += 2 * s * s;
  }
  return Math.sqrt(t);
}
function fd(e, t) {
  const n = Ma;
  let s = 0, r = 1;
  for (let u = 0; u < 3; ++u) {
    const l = Math.abs(e[xt.getElementIndex(ks[u], js[u])]);
    l > s && (r = u, s = l);
  }
  const i = js[r], o = ks[r];
  let a = 1, c = 0;
  if (Math.abs(e[xt.getElementIndex(o, i)]) > n) {
    const u = e[xt.getElementIndex(o, o)], l = e[xt.getElementIndex(i, i)], h = e[xt.getElementIndex(o, i)], f = (u - l) / 2 / h;
    let d;
    f < 0 ? d = -1 / (-f + Math.sqrt(1 + f * f)) : d = 1 / (f + Math.sqrt(1 + f * f)), a = 1 / Math.sqrt(1 + d * d), c = d * a;
  }
  return W.IDENTITY.to(t), t[xt.getElementIndex(i, i)] = t[xt.getElementIndex(o, o)] = a, t[xt.getElementIndex(o, i)] = c, t[xt.getElementIndex(i, o)] = -c, t;
}
const Jt = new A(), dd = new A(), md = new A(), gd = new A(), Ad = new A(), pd = new W(), yd = {
  diagonal: new W(),
  unitary: new W()
};
function Bd(e, t = new Qe()) {
  if (!e || e.length === 0)
    return t.halfAxes = new W([0, 0, 0, 0, 0, 0, 0, 0, 0]), t.center = new A(), t;
  const n = e.length, s = new A(0, 0, 0);
  for (const O of e)
    s.add(O);
  const r = 1 / n;
  s.multiplyByScalar(r);
  let i = 0, o = 0, a = 0, c = 0, u = 0, l = 0;
  for (const O of e) {
    const L = Jt.copy(O).subtract(s);
    i += L.x * L.x, o += L.x * L.y, a += L.x * L.z, c += L.y * L.y, u += L.y * L.z, l += L.z * L.z;
  }
  i *= r, o *= r, a *= r, c *= r, u *= r, l *= r;
  const h = pd;
  h[0] = i, h[1] = o, h[2] = a, h[3] = o, h[4] = c, h[5] = u, h[6] = a, h[7] = u, h[8] = l;
  const {
    unitary: f
  } = ud(h, yd), d = t.halfAxes.copy(f);
  let m = d.getColumn(0, md), g = d.getColumn(1, gd), y = d.getColumn(2, Ad), E = -Number.MAX_VALUE, R = -Number.MAX_VALUE, B = -Number.MAX_VALUE, C = Number.MAX_VALUE, M = Number.MAX_VALUE, b = Number.MAX_VALUE;
  for (const O of e)
    Jt.copy(O), E = Math.max(Jt.dot(m), E), R = Math.max(Jt.dot(g), R), B = Math.max(Jt.dot(y), B), C = Math.min(Jt.dot(m), C), M = Math.min(Jt.dot(g), M), b = Math.min(Jt.dot(y), b);
  m = m.multiplyByScalar(0.5 * (C + E)), g = g.multiplyByScalar(0.5 * (M + R)), y = y.multiplyByScalar(0.5 * (b + B)), t.center.copy(m).add(g).add(y);
  const F = dd.set(E - C, R - M, B - b).multiplyByScalar(0.5), v = new W([F[0], 0, 0, 0, F[1], 0, 0, 0, F[2]]);
  return t.halfAxes.multiplyRight(v), t;
}
let Mi = function(e) {
  return e[e.ADD = 1] = "ADD", e[e.REPLACE = 2] = "REPLACE", e;
}({}), fn = function(e) {
  return e.EMPTY = "empty", e.SCENEGRAPH = "scenegraph", e.POINTCLOUD = "pointcloud", e.MESH = "mesh", e;
}({}), Cd = function(e) {
  return e.I3S = "I3S", e.TILES3D = "TILES3D", e;
}({}), Wn = function(e) {
  return e.GEOMETRIC_ERROR = "geometricError", e.MAX_SCREEN_THRESHOLD = "maxScreenThreshold", e;
}({});
const Sa = "4.1.1", _e = {
  COMPOSITE: "cmpt",
  POINT_CLOUD: "pnts",
  BATCHED_3D_MODEL: "b3dm",
  INSTANCED_3D_MODEL: "i3dm",
  GEOMETRY: "geom",
  VECTOR: "vect",
  GLTF: "glTF"
};
function Ia(e, t, n) {
  K(e instanceof ArrayBuffer);
  const s = new TextDecoder("utf8"), r = new Uint8Array(e, t, n);
  return s.decode(r);
}
function Ed(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = new DataView(e);
  return `${String.fromCharCode(n.getUint8(t + 0))}${String.fromCharCode(n.getUint8(t + 1))}${String.fromCharCode(n.getUint8(t + 2))}${String.fromCharCode(n.getUint8(t + 3))}`;
}
const Td = "4.1.1", bd = {
  name: "Draco",
  id: "draco",
  module: "draco",
  version: Td,
  worker: !0,
  extensions: ["drc"],
  mimeTypes: ["application/octet-stream"],
  binary: !0,
  tests: ["DRACO"],
  options: {
    draco: {
      decoderType: typeof WebAssembly == "object" ? "wasm" : "js",
      libraryPath: "libs/",
      extraAttributes: {},
      attributeNameEntry: void 0
    }
  }
};
function _d(e, t, n) {
  const s = xa(t.metadata), r = [], i = wd(t.attributes);
  for (const o in e) {
    const a = e[o], c = Si(o, a, i[o]);
    r.push(c);
  }
  if (n) {
    const o = Si("indices", n);
    r.push(o);
  }
  return {
    fields: r,
    metadata: s
  };
}
function wd(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    t[s.name || "undefined"] = s;
  }
  return t;
}
function Si(e, t, n) {
  const s = n ? xa(n.metadata) : void 0;
  return Yl(e, t, s);
}
function xa(e) {
  Object.entries(e);
  const t = {};
  for (const n in e)
    t[`${n}.string`] = JSON.stringify(e[n]);
  return t;
}
const Ii = {
  POSITION: "POSITION",
  NORMAL: "NORMAL",
  COLOR: "COLOR_0",
  TEX_COORD: "TEXCOORD_0"
}, Rd = {
  1: Int8Array,
  2: Uint8Array,
  3: Int16Array,
  4: Uint16Array,
  5: Int32Array,
  6: Uint32Array,
  9: Float32Array
}, Md = 4;
class Sd {
  constructor(t) {
    this.draco = void 0, this.decoder = void 0, this.metadataQuerier = void 0, this.draco = t, this.decoder = new this.draco.Decoder(), this.metadataQuerier = new this.draco.MetadataQuerier();
  }
  destroy() {
    this.draco.destroy(this.decoder), this.draco.destroy(this.metadataQuerier);
  }
  parseSync(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = new this.draco.DecoderBuffer();
    s.Init(new Int8Array(t), t.byteLength), this._disableAttributeTransforms(n);
    const r = this.decoder.GetEncodedGeometryType(s), i = r === this.draco.TRIANGULAR_MESH ? new this.draco.Mesh() : new this.draco.PointCloud();
    try {
      let o;
      switch (r) {
        case this.draco.TRIANGULAR_MESH:
          o = this.decoder.DecodeBufferToMesh(s, i);
          break;
        case this.draco.POINT_CLOUD:
          o = this.decoder.DecodeBufferToPointCloud(s, i);
          break;
        default:
          throw new Error("DRACO: Unknown geometry type.");
      }
      if (!o.ok() || !i.ptr) {
        const f = `DRACO decompression failed: ${o.error_msg()}`;
        throw new Error(f);
      }
      const a = this._getDracoLoaderData(i, r, n), c = this._getMeshData(i, a, n), u = $l(c.attributes), l = _d(c.attributes, a, c.indices);
      return {
        loader: "draco",
        loaderData: a,
        header: {
          vertexCount: i.num_points(),
          boundingBox: u
        },
        ...c,
        schema: l
      };
    } finally {
      this.draco.destroy(s), i && this.draco.destroy(i);
    }
  }
  _getDracoLoaderData(t, n, s) {
    const r = this._getTopLevelMetadata(t), i = this._getDracoAttributes(t, s);
    return {
      geometry_type: n,
      num_attributes: t.num_attributes(),
      num_points: t.num_points(),
      num_faces: t instanceof this.draco.Mesh ? t.num_faces() : 0,
      metadata: r,
      attributes: i
    };
  }
  _getDracoAttributes(t, n) {
    const s = {};
    for (let r = 0; r < t.num_attributes(); r++) {
      const i = this.decoder.GetAttribute(t, r), o = this._getAttributeMetadata(t, r);
      s[i.unique_id()] = {
        unique_id: i.unique_id(),
        attribute_type: i.attribute_type(),
        data_type: i.data_type(),
        num_components: i.num_components(),
        byte_offset: i.byte_offset(),
        byte_stride: i.byte_stride(),
        normalized: i.normalized(),
        attribute_index: r,
        metadata: o
      };
      const a = this._getQuantizationTransform(i, n);
      a && (s[i.unique_id()].quantization_transform = a);
      const c = this._getOctahedronTransform(i, n);
      c && (s[i.unique_id()].octahedron_transform = c);
    }
    return s;
  }
  _getMeshData(t, n, s) {
    const r = this._getMeshAttributes(n, t, s);
    if (!r.POSITION)
      throw new Error("DRACO: No position attribute found.");
    if (t instanceof this.draco.Mesh)
      switch (s.topology) {
        case "triangle-strip":
          return {
            topology: "triangle-strip",
            mode: 4,
            attributes: r,
            indices: {
              value: this._getTriangleStripIndices(t),
              size: 1
            }
          };
        case "triangle-list":
        default:
          return {
            topology: "triangle-list",
            mode: 5,
            attributes: r,
            indices: {
              value: this._getTriangleListIndices(t),
              size: 1
            }
          };
      }
    return {
      topology: "point-list",
      mode: 0,
      attributes: r
    };
  }
  _getMeshAttributes(t, n, s) {
    const r = {};
    for (const i of Object.values(t.attributes)) {
      const o = this._deduceAttributeName(i, s);
      i.name = o;
      const {
        value: a,
        size: c
      } = this._getAttributeValues(n, i);
      r[o] = {
        value: a,
        size: c,
        byteOffset: i.byte_offset,
        byteStride: i.byte_stride,
        normalized: i.normalized
      };
    }
    return r;
  }
  _getTriangleListIndices(t) {
    const s = t.num_faces() * 3, r = s * Md, i = this.draco._malloc(r);
    try {
      return this.decoder.GetTrianglesUInt32Array(t, r, i), new Uint32Array(this.draco.HEAPF32.buffer, i, s).slice();
    } finally {
      this.draco._free(i);
    }
  }
  _getTriangleStripIndices(t) {
    const n = new this.draco.DracoInt32Array();
    try {
      return this.decoder.GetTriangleStripsFromMesh(t, n), Od(n);
    } finally {
      this.draco.destroy(n);
    }
  }
  _getAttributeValues(t, n) {
    const s = Rd[n.data_type], r = n.num_components, o = t.num_points() * r, a = o * s.BYTES_PER_ELEMENT, c = Id(this.draco, s);
    let u;
    const l = this.draco._malloc(a);
    try {
      const h = this.decoder.GetAttribute(t, n.attribute_index);
      this.decoder.GetAttributeDataArrayForAllPoints(t, h, c, a, l), u = new s(this.draco.HEAPF32.buffer, l, o).slice();
    } finally {
      this.draco._free(l);
    }
    return {
      value: u,
      size: r
    };
  }
  _deduceAttributeName(t, n) {
    const s = t.unique_id;
    for (const [o, a] of Object.entries(n.extraAttributes || {}))
      if (a === s)
        return o;
    const r = t.attribute_type;
    for (const o in Ii)
      if (this.draco[o] === r)
        return Ii[o];
    const i = n.attributeNameEntry || "name";
    return t.metadata[i] ? t.metadata[i].string : `CUSTOM_ATTRIBUTE_${s}`;
  }
  _getTopLevelMetadata(t) {
    const n = this.decoder.GetMetadata(t);
    return this._getDracoMetadata(n);
  }
  _getAttributeMetadata(t, n) {
    const s = this.decoder.GetAttributeMetadata(t, n);
    return this._getDracoMetadata(s);
  }
  _getDracoMetadata(t) {
    if (!t || !t.ptr)
      return {};
    const n = {}, s = this.metadataQuerier.NumEntries(t);
    for (let r = 0; r < s; r++) {
      const i = this.metadataQuerier.GetEntryName(t, r);
      n[i] = this._getDracoMetadataField(t, i);
    }
    return n;
  }
  _getDracoMetadataField(t, n) {
    const s = new this.draco.DracoInt32Array();
    try {
      this.metadataQuerier.GetIntEntryArray(t, n, s);
      const r = xd(s);
      return {
        int: this.metadataQuerier.GetIntEntry(t, n),
        string: this.metadataQuerier.GetStringEntry(t, n),
        double: this.metadataQuerier.GetDoubleEntry(t, n),
        intArray: r
      };
    } finally {
      this.draco.destroy(s);
    }
  }
  _disableAttributeTransforms(t) {
    const {
      quantizedAttributes: n = [],
      octahedronAttributes: s = []
    } = t, r = [...n, ...s];
    for (const i of r)
      this.decoder.SkipAttributeTransform(this.draco[i]);
  }
  _getQuantizationTransform(t, n) {
    const {
      quantizedAttributes: s = []
    } = n, r = t.attribute_type();
    if (s.map((o) => this.decoder[o]).includes(r)) {
      const o = new this.draco.AttributeQuantizationTransform();
      try {
        if (o.InitFromAttribute(t))
          return {
            quantization_bits: o.quantization_bits(),
            range: o.range(),
            min_values: new Float32Array([1, 2, 3]).map((a) => o.min_value(a))
          };
      } finally {
        this.draco.destroy(o);
      }
    }
    return null;
  }
  _getOctahedronTransform(t, n) {
    const {
      octahedronAttributes: s = []
    } = n, r = t.attribute_type();
    if (s.map((o) => this.decoder[o]).includes(r)) {
      const o = new this.draco.AttributeQuantizationTransform();
      try {
        if (o.InitFromAttribute(t))
          return {
            quantization_bits: o.quantization_bits()
          };
      } finally {
        this.draco.destroy(o);
      }
    }
    return null;
  }
}
function Id(e, t) {
  switch (t) {
    case Float32Array:
      return e.DT_FLOAT32;
    case Int8Array:
      return e.DT_INT8;
    case Int16Array:
      return e.DT_INT16;
    case Int32Array:
      return e.DT_INT32;
    case Uint8Array:
      return e.DT_UINT8;
    case Uint16Array:
      return e.DT_UINT16;
    case Uint32Array:
      return e.DT_UINT32;
    default:
      return e.DT_INVALID;
  }
}
function xd(e) {
  const t = e.size(), n = new Int32Array(t);
  for (let s = 0; s < t; s++)
    n[s] = e.GetValue(s);
  return n;
}
function Od(e) {
  const t = e.size(), n = new Int32Array(t);
  for (let s = 0; s < t; s++)
    n[s] = e.GetValue(s);
  return n;
}
const Fd = "1.5.6", vd = "1.4.1", ds = `https://www.gstatic.com/draco/versioned/decoders/${Fd}`, ft = {
  DECODER: "draco_wasm_wrapper.js",
  DECODER_WASM: "draco_decoder.wasm",
  FALLBACK_DECODER: "draco_decoder.js",
  ENCODER: "draco_encoder.js"
}, ms = {
  [ft.DECODER]: `${ds}/${ft.DECODER}`,
  [ft.DECODER_WASM]: `${ds}/${ft.DECODER_WASM}`,
  [ft.FALLBACK_DECODER]: `${ds}/${ft.FALLBACK_DECODER}`,
  [ft.ENCODER]: `https://raw.githubusercontent.com/google/draco/${vd}/javascript/${ft.ENCODER}`
};
let we;
async function Dd(e) {
  const t = e.modules || {};
  return t.draco3d ? we = we || t.draco3d.createDecoderModule({}).then((n) => ({
    draco: n
  })) : we = we || Ld(e), await we;
}
async function Ld(e) {
  let t, n;
  switch (e.draco && e.draco.decoderType) {
    case "js":
      t = await Yt(ms[ft.FALLBACK_DECODER], "draco", e, ft.FALLBACK_DECODER);
      break;
    case "wasm":
    default:
      [t, n] = await Promise.all([await Yt(ms[ft.DECODER], "draco", e, ft.DECODER), await Yt(ms[ft.DECODER_WASM], "draco", e, ft.DECODER_WASM)]);
  }
  return t = t || globalThis.DracoDecoderModule, await Pd(t, n);
}
function Pd(e, t) {
  const n = {};
  return t && (n.wasmBinary = t), new Promise((s) => {
    e({
      ...n,
      onModuleLoaded: (r) => s({
        draco: r
      })
    });
  });
}
const Oa = {
  ...bd,
  parse: Gd
};
async function Gd(e, t) {
  const {
    draco: n
  } = await Dd(t), s = new Sd(n);
  try {
    return s.parseSync(e, t == null ? void 0 : t.draco);
  } finally {
    s.destroy();
  }
}
const Nd = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, $ = {
  BYTE: 5120,
  UNSIGNED_BYTE: 5121,
  SHORT: 5122,
  UNSIGNED_SHORT: 5123,
  INT: 5124,
  UNSIGNED_INT: 5125,
  FLOAT: 5126,
  DOUBLE: 5130
}, G = {
  ...Nd,
  ...$
}, gs = {
  [$.DOUBLE]: Float64Array,
  [$.FLOAT]: Float32Array,
  [$.UNSIGNED_SHORT]: Uint16Array,
  [$.UNSIGNED_INT]: Uint32Array,
  [$.UNSIGNED_BYTE]: Uint8Array,
  [$.BYTE]: Int8Array,
  [$.SHORT]: Int16Array,
  [$.INT]: Int32Array
}, Ud = {
  DOUBLE: $.DOUBLE,
  FLOAT: $.FLOAT,
  UNSIGNED_SHORT: $.UNSIGNED_SHORT,
  UNSIGNED_INT: $.UNSIGNED_INT,
  UNSIGNED_BYTE: $.UNSIGNED_BYTE,
  BYTE: $.BYTE,
  SHORT: $.SHORT,
  INT: $.INT
}, As = "Failed to convert GL type";
class vt {
  static fromTypedArray(t) {
    t = ArrayBuffer.isView(t) ? t.constructor : t;
    for (const n in gs)
      if (gs[n] === t)
        return n;
    throw new Error(As);
  }
  static fromName(t) {
    const n = Ud[t];
    if (!n)
      throw new Error(As);
    return n;
  }
  static getArrayType(t) {
    switch (t) {
      case $.UNSIGNED_SHORT_5_6_5:
      case $.UNSIGNED_SHORT_4_4_4_4:
      case $.UNSIGNED_SHORT_5_5_5_1:
        return Uint16Array;
      default:
        const n = gs[t];
        if (!n)
          throw new Error(As);
        return n;
    }
  }
  static getByteSize(t) {
    return vt.getArrayType(t).BYTES_PER_ELEMENT;
  }
  static validate(t) {
    return !!vt.getArrayType(t);
  }
  static createTypedArray(t, n) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 ? arguments[3] : void 0;
    r === void 0 && (r = (n.byteLength - s) / vt.getByteSize(t));
    const i = vt.getArrayType(t);
    return new i(n, s, r);
  }
}
function Hd(e, t) {
  if (!e)
    throw new Error(`math.gl assertion failed. ${t}`);
}
function Jd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0, 0, 0];
  const n = e >> 11 & 31, s = e >> 5 & 63, r = e & 31;
  return t[0] = n << 3, t[1] = s << 2, t[2] = r << 3, t;
}
new Kn();
new A();
new Kn();
new Kn();
function xi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 255;
  return ah(e, 0, t) / t * 2 - 1;
}
function Oi(e) {
  return e < 0 ? -1 : 1;
}
function Vd(e, t, n, s) {
  if (Hd(s), e < 0 || e > n || t < 0 || t > n)
    throw new Error(`x and y must be unsigned normalized integers between 0 and ${n}`);
  if (s.x = xi(e, n), s.y = xi(t, n), s.z = 1 - (Math.abs(s.x) + Math.abs(s.y)), s.z < 0) {
    const r = s.x;
    s.x = (1 - Math.abs(s.y)) * Oi(r), s.y = (1 - Math.abs(r)) * Oi(s.y);
  }
  return s.normalize();
}
function jd(e, t, n) {
  return Vd(e, t, 255, n);
}
class Tr {
  constructor(t, n) {
    this.json = void 0, this.buffer = void 0, this.featuresLength = 0, this._cachedTypedArrays = {}, this.json = t, this.buffer = n;
  }
  getExtension(t) {
    return this.json.extensions && this.json.extensions[t];
  }
  hasProperty(t) {
    return !!this.json[t];
  }
  getGlobalProperty(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G.UNSIGNED_INT, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    const r = this.json[t];
    return r && Number.isFinite(r.byteOffset) ? this._getTypedArrayFromBinary(t, n, s, 1, r.byteOffset) : r;
  }
  getPropertyArray(t, n, s) {
    const r = this.json[t];
    return r && Number.isFinite(r.byteOffset) ? ("componentType" in r && (n = vt.fromName(r.componentType)), this._getTypedArrayFromBinary(t, n, s, this.featuresLength, r.byteOffset)) : this._getTypedArrayFromArray(t, n, r);
  }
  getProperty(t, n, s, r, i) {
    const o = this.json[t];
    if (!o)
      return o;
    const a = this.getPropertyArray(t, n, s);
    if (s === 1)
      return a[r];
    for (let c = 0; c < s; ++c)
      i[c] = a[s * r + c];
    return i;
  }
  _getTypedArrayFromBinary(t, n, s, r, i) {
    const o = this._cachedTypedArrays;
    let a = o[t];
    return a || (a = vt.createTypedArray(n, this.buffer.buffer, this.buffer.byteOffset + i, r * s), o[t] = a), a;
  }
  _getTypedArrayFromArray(t, n, s) {
    const r = this._cachedTypedArrays;
    let i = r[t];
    return i || (i = vt.createTypedArray(n, s), r[t] = i), i;
  }
}
const kd = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Kd = {
  SCALAR: (e, t) => e[t],
  VEC2: (e, t) => [e[2 * t + 0], e[2 * t + 1]],
  VEC3: (e, t) => [e[3 * t + 0], e[3 * t + 1], e[3 * t + 2]],
  VEC4: (e, t) => [e[4 * t + 0], e[4 * t + 1], e[4 * t + 2], e[4 * t + 3]],
  MAT2: (e, t) => [e[4 * t + 0], e[4 * t + 1], e[4 * t + 2], e[4 * t + 3]],
  MAT3: (e, t) => [e[9 * t + 0], e[9 * t + 1], e[9 * t + 2], e[9 * t + 3], e[9 * t + 4], e[9 * t + 5], e[9 * t + 6], e[9 * t + 7], e[9 * t + 8]],
  MAT4: (e, t) => [e[16 * t + 0], e[16 * t + 1], e[16 * t + 2], e[16 * t + 3], e[16 * t + 4], e[16 * t + 5], e[16 * t + 6], e[16 * t + 7], e[16 * t + 8], e[16 * t + 9], e[16 * t + 10], e[16 * t + 11], e[16 * t + 12], e[16 * t + 13], e[16 * t + 14], e[16 * t + 15]]
}, zd = {
  SCALAR: (e, t, n) => {
    t[n] = e;
  },
  VEC2: (e, t, n) => {
    t[2 * n + 0] = e[0], t[2 * n + 1] = e[1];
  },
  VEC3: (e, t, n) => {
    t[3 * n + 0] = e[0], t[3 * n + 1] = e[1], t[3 * n + 2] = e[2];
  },
  VEC4: (e, t, n) => {
    t[4 * n + 0] = e[0], t[4 * n + 1] = e[1], t[4 * n + 2] = e[2], t[4 * n + 3] = e[3];
  },
  MAT2: (e, t, n) => {
    t[4 * n + 0] = e[0], t[4 * n + 1] = e[1], t[4 * n + 2] = e[2], t[4 * n + 3] = e[3];
  },
  MAT3: (e, t, n) => {
    t[9 * n + 0] = e[0], t[9 * n + 1] = e[1], t[9 * n + 2] = e[2], t[9 * n + 3] = e[3], t[9 * n + 4] = e[4], t[9 * n + 5] = e[5], t[9 * n + 6] = e[6], t[9 * n + 7] = e[7], t[9 * n + 8] = e[8], t[9 * n + 9] = e[9];
  },
  MAT4: (e, t, n) => {
    t[16 * n + 0] = e[0], t[16 * n + 1] = e[1], t[16 * n + 2] = e[2], t[16 * n + 3] = e[3], t[16 * n + 4] = e[4], t[16 * n + 5] = e[5], t[16 * n + 6] = e[6], t[16 * n + 7] = e[7], t[16 * n + 8] = e[8], t[16 * n + 9] = e[9], t[16 * n + 10] = e[10], t[16 * n + 11] = e[11], t[16 * n + 12] = e[12], t[16 * n + 13] = e[13], t[16 * n + 14] = e[14], t[16 * n + 15] = e[15];
  }
};
function Wd(e, t, n, s) {
  const {
    componentType: r
  } = e;
  K(e.componentType);
  const i = typeof r == "string" ? vt.fromName(r) : r, o = kd[e.type], a = Kd[e.type], c = zd[e.type];
  return n += e.byteOffset, {
    values: vt.createTypedArray(i, t, n, o * s),
    type: i,
    size: o,
    unpacker: a,
    packer: c
  };
}
const Ot = (e) => e !== void 0;
function Xd(e, t, n) {
  if (!t)
    return null;
  let s = e.getExtension("3DTILES_batch_table_hierarchy");
  const r = t.HIERARCHY;
  return r && (console.warn("3D Tile Parser: HIERARCHY is deprecated. Use 3DTILES_batch_table_hierarchy."), t.extensions = t.extensions || {}, t.extensions["3DTILES_batch_table_hierarchy"] = r, s = r), s ? Qd(s, n) : null;
}
function Qd(e, t) {
  let n, s, r;
  const i = e.instancesLength, o = e.classes;
  let a = e.classIds, c = e.parentCounts, u = e.parentIds, l = i;
  Ot(a.byteOffset) && (a.componentType = defaultValue(a.componentType, GL.UNSIGNED_SHORT), a.type = AttributeType.SCALAR, r = getBinaryAccessor(a), a = r.createArrayBufferView(t.buffer, t.byteOffset + a.byteOffset, i));
  let h;
  if (Ot(c))
    for (Ot(c.byteOffset) && (c.componentType = defaultValue(c.componentType, GL.UNSIGNED_SHORT), c.type = AttributeType.SCALAR, r = getBinaryAccessor(c), c = r.createArrayBufferView(t.buffer, t.byteOffset + c.byteOffset, i)), h = new Uint16Array(i), l = 0, n = 0; n < i; ++n)
      h[n] = l, l += c[n];
  Ot(u) && Ot(u.byteOffset) && (u.componentType = defaultValue(u.componentType, GL.UNSIGNED_SHORT), u.type = AttributeType.SCALAR, r = getBinaryAccessor(u), u = r.createArrayBufferView(t.buffer, t.byteOffset + u.byteOffset, l));
  const f = o.length;
  for (n = 0; n < f; ++n) {
    const y = o[n].length, E = o[n].instances, R = getBinaryProperties(y, E, t);
    o[n].instances = combine(R, E);
  }
  const d = new Array(f).fill(0), m = new Uint16Array(i);
  for (n = 0; n < i; ++n)
    s = a[n], m[n] = d[s], ++d[s];
  const g = {
    classes: o,
    classIds: a,
    classIndexes: m,
    parentCounts: c,
    parentIndexes: h,
    parentIds: u
  };
  return Yd(g), g;
}
function Re(e, t, n) {
  if (!e)
    return;
  const s = e.parentCounts;
  return e.parentIds ? n(e, t) : s > 0 ? qd(e, t, n) : $d(e, t, n);
}
function qd(e, t, n) {
  const s = e.classIds, r = e.parentCounts, i = e.parentIds, o = e.parentIndexes, a = s.length, c = scratchVisited;
  c.length = Math.max(c.length, a);
  const u = ++marker, l = scratchStack;
  for (l.length = 0, l.push(t); l.length > 0; ) {
    if (t = l.pop(), c[t] === u)
      continue;
    c[t] = u;
    const h = n(e, t);
    if (Ot(h))
      return h;
    const f = r[t], d = o[t];
    for (let m = 0; m < f; ++m) {
      const g = i[d + m];
      g !== t && l.push(g);
    }
  }
  return null;
}
function $d(e, t, n) {
  let s = !0;
  for (; s; ) {
    const r = n(e, t);
    if (Ot(r))
      return r;
    const i = e.parentIds[t];
    s = i !== t, t = i;
  }
  throw new Error("traverseHierarchySingleParent");
}
function Yd(e) {
  const n = e.classIds.length;
  for (let s = 0; s < n; ++s)
    Fa(e, s, stack);
}
function Fa(e, t, n) {
  const s = e.parentCounts, r = e.parentIds, i = e.parentIndexes, a = e.classIds.length;
  if (!Ot(r))
    return;
  assert(t < a, `Parent index ${t} exceeds the total number of instances: ${a}`), assert(n.indexOf(t) === -1, "Circular dependency detected in the batch table hierarchy."), n.push(t);
  const c = Ot(s) ? s[t] : 1, u = Ot(s) ? i[t] : t;
  for (let l = 0; l < c; ++l) {
    const h = r[u + l];
    h !== t && Fa(e, h, n);
  }
  n.pop(t);
}
function ut(e) {
  return e != null;
}
const dn = (e, t) => e, Zd = {
  HIERARCHY: !0,
  extensions: !0,
  extras: !0
};
class va {
  constructor(t, n, s) {
    var r;
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    this.json = void 0, this.binary = void 0, this.featureCount = void 0, this._extensions = void 0, this._properties = void 0, this._binaryProperties = void 0, this._hierarchy = void 0, K(s >= 0), this.json = t || {}, this.binary = n, this.featureCount = s, this._extensions = ((r = this.json) === null || r === void 0 ? void 0 : r.extensions) || {}, this._properties = {};
    for (const o in this.json)
      Zd[o] || (this._properties[o] = this.json[o]);
    this._binaryProperties = this._initializeBinaryProperties(), i["3DTILES_batch_table_hierarchy"] && (this._hierarchy = Xd(this, this.json, this.binary));
  }
  getExtension(t) {
    return this.json && this.json.extensions && this.json.extensions[t];
  }
  memorySizeInBytes() {
    return 0;
  }
  isClass(t, n) {
    if (this._checkBatchId(t), K(typeof n == "string", n), this._hierarchy) {
      const s = Re(this._hierarchy, t, (r, i) => {
        const o = r.classIds[i];
        return r.classes[o].name === n;
      });
      return ut(s);
    }
    return !1;
  }
  isExactClass(t, n) {
    return K(typeof n == "string", n), this.getExactClassName(t) === n;
  }
  getExactClassName(t) {
    if (this._checkBatchId(t), this._hierarchy) {
      const n = this._hierarchy.classIds[t];
      return this._hierarchy.classes[n].name;
    }
  }
  hasProperty(t, n) {
    return this._checkBatchId(t), K(typeof n == "string", n), ut(this._properties[n]) || this._hasPropertyInHierarchy(t, n);
  }
  getPropertyNames(t, n) {
    this._checkBatchId(t), n = ut(n) ? n : [], n.length = 0;
    const s = Object.keys(this._properties);
    return n.push(...s), this._hierarchy && this._getPropertyNamesInHierarchy(t, n), n;
  }
  getProperty(t, n) {
    if (this._checkBatchId(t), K(typeof n == "string", n), this._binaryProperties) {
      const r = this._binaryProperties[n];
      if (ut(r))
        return this._getBinaryProperty(r, t);
    }
    const s = this._properties[n];
    if (ut(s))
      return dn(s[t]);
    if (this._hierarchy) {
      const r = this._getHierarchyProperty(t, n);
      if (ut(r))
        return r;
    }
  }
  setProperty(t, n, s) {
    const r = this.featureCount;
    if (this._checkBatchId(t), K(typeof n == "string", n), this._binaryProperties) {
      const o = this._binaryProperties[n];
      if (o) {
        this._setBinaryProperty(o, t, s);
        return;
      }
    }
    if (this._hierarchy && this._setHierarchyProperty(this, t, n, s))
      return;
    let i = this._properties[n];
    ut(i) || (this._properties[n] = new Array(r), i = this._properties[n]), i[t] = dn(s);
  }
  _checkBatchId(t) {
    if (!(t >= 0 && t < this.featureCount))
      throw new Error("batchId not in range [0, featureCount - 1].");
  }
  _getBinaryProperty(t, n) {
    return t.unpack(t.typedArray, n);
  }
  _setBinaryProperty(t, n, s) {
    t.pack(s, t.typedArray, n);
  }
  _initializeBinaryProperties() {
    let t = null;
    for (const n in this._properties) {
      const s = this._properties[n], r = this._initializeBinaryProperty(n, s);
      r && (t = t || {}, t[n] = r);
    }
    return t;
  }
  _initializeBinaryProperty(t, n) {
    if ("byteOffset" in n) {
      const s = n;
      K(this.binary, `Property ${t} requires a batch table binary.`), K(s.type, `Property ${t} requires a type.`);
      const r = Wd(s, this.binary.buffer, this.binary.byteOffset | 0, this.featureCount);
      return {
        typedArray: r.values,
        componentCount: r.size,
        unpack: r.unpacker,
        pack: r.packer
      };
    }
    return null;
  }
  _hasPropertyInHierarchy(t, n) {
    if (!this._hierarchy)
      return !1;
    const s = Re(this._hierarchy, t, (r, i) => {
      const o = r.classIds[i], a = r.classes[o].instances;
      return ut(a[n]);
    });
    return ut(s);
  }
  _getPropertyNamesInHierarchy(t, n) {
    Re(this._hierarchy, t, (s, r) => {
      const i = s.classIds[r], o = s.classes[i].instances;
      for (const a in o)
        o.hasOwnProperty(a) && n.indexOf(a) === -1 && n.push(a);
    });
  }
  _getHierarchyProperty(t, n) {
    return Re(this._hierarchy, t, (s, r) => {
      const i = s.classIds[r], o = s.classes[i], a = s.classIndexes[r], c = o.instances[n];
      return ut(c) ? ut(c.typedArray) ? this._getBinaryProperty(c, a) : dn(c[a]) : null;
    });
  }
  _setHierarchyProperty(t, n, s, r) {
    const i = Re(this._hierarchy, n, (o, a) => {
      const c = o.classIds[a], u = o.classes[c], l = o.classIndexes[a], h = u.instances[s];
      return ut(h) ? (K(a === n, `Inherited property "${s}" is read-only.`), ut(h.typedArray) ? this._setBinaryProperty(h, l, r) : h[l] = dn(r), !0) : !1;
    });
    return ut(i);
  }
}
const ps = 4;
function Xn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  const s = new DataView(t);
  if (e.magic = s.getUint32(n, !0), n += ps, e.version = s.getUint32(n, !0), n += ps, e.byteLength = s.getUint32(n, !0), n += ps, e.version !== 1)
    throw new Error(`3D Tile Version ${e.version} not supported`);
  return n;
}
const he = 4, Fi = "b3dm tile in legacy format.";
function br(e, t, n) {
  const s = new DataView(t);
  let r;
  e.header = e.header || {};
  let i = s.getUint32(n, !0);
  n += he;
  let o = s.getUint32(n, !0);
  n += he;
  let a = s.getUint32(n, !0);
  n += he;
  let c = s.getUint32(n, !0);
  return n += he, a >= 570425344 ? (n -= he * 2, r = i, a = o, c = 0, i = 0, o = 0, console.warn(Fi)) : c >= 570425344 && (n -= he, r = a, a = i, c = o, i = 0, o = 0, console.warn(Fi)), e.header.featureTableJsonByteLength = i, e.header.featureTableBinaryByteLength = o, e.header.batchTableJsonByteLength = a, e.header.batchTableBinaryByteLength = c, e.header.batchLength = r, n;
}
function _r(e, t, n, s) {
  return n = tm(e, t, n), n = em(e, t, n), n;
}
function tm(e, t, n, s) {
  const {
    featureTableJsonByteLength: r,
    featureTableBinaryByteLength: i,
    batchLength: o
  } = e.header || {};
  if (e.featureTableJson = {
    BATCH_LENGTH: o || 0
  }, r && r > 0) {
    const a = Ia(t, n, r);
    e.featureTableJson = JSON.parse(a);
  }
  return n += r || 0, e.featureTableBinary = new Uint8Array(t, n, i), n += i || 0, n;
}
function em(e, t, n, s) {
  const {
    batchTableJsonByteLength: r,
    batchTableBinaryByteLength: i
  } = e.header || {};
  if (r && r > 0) {
    const o = Ia(t, n, r);
    e.batchTableJson = JSON.parse(o), n += r, i && i > 0 && (e.batchTableBinary = new Uint8Array(t, n, i), e.batchTableBinary = new Uint8Array(e.batchTableBinary), n += i);
  }
  return n;
}
function Da(e, t, n) {
  if (!t && (!e || !e.batchIds || !n))
    return null;
  const {
    batchIds: s,
    isRGB565: r,
    pointCount: i = 0
  } = e;
  if (s && n) {
    const o = new Uint8ClampedArray(i * 3);
    for (let a = 0; a < i; a++) {
      const c = s[a], l = n.getProperty(c, "dimensions").map((h) => h * 255);
      o[a * 3] = l[0], o[a * 3 + 1] = l[1], o[a * 3 + 2] = l[2];
    }
    return {
      type: G.UNSIGNED_BYTE,
      value: o,
      size: 3,
      normalized: !0
    };
  }
  if (t && r) {
    const o = new Uint8ClampedArray(i * 3);
    for (let a = 0; a < i; a++) {
      const c = Jd(t[a]);
      o[a * 3] = c[0], o[a * 3 + 1] = c[1], o[a * 3 + 2] = c[2];
    }
    return {
      type: G.UNSIGNED_BYTE,
      value: o,
      size: 3,
      normalized: !0
    };
  }
  return t && t.length === i * 3 ? {
    type: G.UNSIGNED_BYTE,
    value: t,
    size: 3,
    normalized: !0
  } : {
    type: G.UNSIGNED_BYTE,
    value: t || new Uint8ClampedArray(),
    size: 4,
    normalized: !0
  };
}
const vi = new A();
function nm(e, t) {
  if (!t)
    return null;
  if (e.isOctEncoded16P) {
    const n = new Float32Array((e.pointsLength || 0) * 3);
    for (let s = 0; s < (e.pointsLength || 0); s++)
      jd(t[s * 2], t[s * 2 + 1], vi), vi.toArray(n, s * 3);
    return {
      type: G.FLOAT,
      size: 2,
      value: n
    };
  }
  return {
    type: G.FLOAT,
    size: 2,
    value: t
  };
}
function sm(e, t, n) {
  return e.isQuantized ? n["3d-tiles"] && n["3d-tiles"].decodeQuantizedPositions ? (e.isQuantized = !1, rm(e, t)) : {
    type: G.UNSIGNED_SHORT,
    value: t,
    size: 3,
    normalized: !0
  } : t;
}
function rm(e, t) {
  const n = new A(), s = new Float32Array(e.pointCount * 3);
  for (let r = 0; r < e.pointCount; r++)
    n.set(t[r * 3], t[r * 3 + 1], t[r * 3 + 2]).scale(1 / e.quantizedRange).multiply(e.quantizedVolumeScale).add(e.quantizedVolumeOffset).toArray(s, r * 3);
  return s;
}
async function im(e, t, n, s, r) {
  n = Xn(e, t, n), n = br(e, t, n), n = _r(e, t, n), om(e);
  const {
    featureTable: i,
    batchTable: o
  } = am(e);
  return await fm(e, i, o, s, r), cm(e, i, s), um(e, i, o), lm(e, i), n;
}
function om(e) {
  e.attributes = {
    positions: null,
    colors: null,
    normals: null,
    batchIds: null
  }, e.isQuantized = !1, e.isTranslucent = !1, e.isRGB565 = !1, e.isOctEncoded16P = !1;
}
function am(e) {
  const t = new Tr(e.featureTableJson, e.featureTableBinary), n = t.getGlobalProperty("POINTS_LENGTH");
  if (!Number.isFinite(n))
    throw new Error("POINTS_LENGTH must be defined");
  t.featuresLength = n, e.featuresLength = n, e.pointsLength = n, e.pointCount = n, e.rtcCenter = t.getGlobalProperty("RTC_CENTER", G.FLOAT, 3);
  const s = hm(e, t);
  return {
    featureTable: t,
    batchTable: s
  };
}
function cm(e, t, n) {
  if (e.attributes = e.attributes || {
    positions: null,
    colors: null,
    normals: null,
    batchIds: null
  }, !e.attributes.positions) {
    if (t.hasProperty("POSITION"))
      e.attributes.positions = t.getPropertyArray("POSITION", G.FLOAT, 3);
    else if (t.hasProperty("POSITION_QUANTIZED")) {
      const s = t.getPropertyArray("POSITION_QUANTIZED", G.UNSIGNED_SHORT, 3);
      if (e.isQuantized = !0, e.quantizedRange = 65535, e.quantizedVolumeScale = t.getGlobalProperty("QUANTIZED_VOLUME_SCALE", G.FLOAT, 3), !e.quantizedVolumeScale)
        throw new Error("QUANTIZED_VOLUME_SCALE must be defined for quantized positions.");
      if (e.quantizedVolumeOffset = t.getGlobalProperty("QUANTIZED_VOLUME_OFFSET", G.FLOAT, 3), !e.quantizedVolumeOffset)
        throw new Error("QUANTIZED_VOLUME_OFFSET must be defined for quantized positions.");
      e.attributes.positions = sm(e, s, n);
    }
  }
  if (!e.attributes.positions)
    throw new Error("Either POSITION or POSITION_QUANTIZED must be defined.");
}
function um(e, t, n) {
  if (e.attributes = e.attributes || {
    positions: null,
    colors: null,
    normals: null,
    batchIds: null
  }, !e.attributes.colors) {
    let s = null;
    t.hasProperty("RGBA") ? (s = t.getPropertyArray("RGBA", G.UNSIGNED_BYTE, 4), e.isTranslucent = !0) : t.hasProperty("RGB") ? s = t.getPropertyArray("RGB", G.UNSIGNED_BYTE, 3) : t.hasProperty("RGB565") && (s = t.getPropertyArray("RGB565", G.UNSIGNED_SHORT, 1), e.isRGB565 = !0), e.attributes.colors = Da(e, s, n);
  }
  t.hasProperty("CONSTANT_RGBA") && (e.constantRGBA = t.getGlobalProperty("CONSTANT_RGBA", G.UNSIGNED_BYTE, 4));
}
function lm(e, t) {
  if (e.attributes = e.attributes || {
    positions: null,
    colors: null,
    normals: null,
    batchIds: null
  }, !e.attributes.normals) {
    let n = null;
    t.hasProperty("NORMAL") ? n = t.getPropertyArray("NORMAL", G.FLOAT, 3) : t.hasProperty("NORMAL_OCT16P") && (n = t.getPropertyArray("NORMAL_OCT16P", G.UNSIGNED_BYTE, 2), e.isOctEncoded16P = !0), e.attributes.normals = nm(e, n);
  }
}
function hm(e, t) {
  let n = null;
  if (!e.batchIds && t.hasProperty("BATCH_ID") && (e.batchIds = t.getPropertyArray("BATCH_ID", G.UNSIGNED_SHORT, 1), e.batchIds)) {
    const s = t.getGlobalProperty("BATCH_LENGTH");
    if (!s)
      throw new Error("Global property: BATCH_LENGTH must be defined when BATCH_ID is defined.");
    const {
      batchTableJson: r,
      batchTableBinary: i
    } = e;
    n = new va(r, i, s);
  }
  return n;
}
async function fm(e, t, n, s, r) {
  let i, o, a;
  const c = e.batchTableJson && e.batchTableJson.extensions && e.batchTableJson.extensions["3DTILES_draco_point_compression"];
  c && (a = c.properties);
  const u = t.getExtension("3DTILES_draco_point_compression");
  if (u) {
    o = u.properties;
    const h = u.byteOffset, f = u.byteLength;
    if (!o || !Number.isFinite(h) || !f)
      throw new Error("Draco properties, byteOffset, and byteLength must be defined");
    i = (e.featureTableBinary || []).slice(h, h + f), e.hasPositions = Number.isFinite(o.POSITION), e.hasColors = Number.isFinite(o.RGB) || Number.isFinite(o.RGBA), e.hasNormals = Number.isFinite(o.NORMAL), e.hasBatchIds = Number.isFinite(o.BATCH_ID), e.isTranslucent = Number.isFinite(o.RGBA);
  }
  if (!i)
    return !0;
  const l = {
    buffer: i,
    properties: {
      ...o,
      ...a
    },
    featureTableProperties: o,
    batchTableProperties: a,
    dequantizeInShader: !1
  };
  return await dm(e, l, s, r);
}
async function dm(e, t, n, s) {
  if (!s)
    return;
  const r = {
    ...n,
    draco: {
      ...n == null ? void 0 : n.draco,
      extraAttributes: t.batchTableProperties || {}
    }
  };
  delete r["3d-tiles"];
  const i = await Ke(t.buffer, Oa, r, s), o = i.attributes.POSITION && i.attributes.POSITION.value, a = i.attributes.COLOR_0 && i.attributes.COLOR_0.value, c = i.attributes.NORMAL && i.attributes.NORMAL.value, u = i.attributes.BATCH_ID && i.attributes.BATCH_ID.value, l = o && i.attributes.POSITION.value.quantization, h = c && i.attributes.NORMAL.value.quantization;
  if (l) {
    const d = i.POSITION.data.quantization, m = d.range;
    e.quantizedVolumeScale = new A(m, m, m), e.quantizedVolumeOffset = new A(d.minValues), e.quantizedRange = (1 << d.quantizationBits) - 1, e.isQuantizedDraco = !0;
  }
  h && (e.octEncodedRange = (1 << i.NORMAL.data.quantization.quantizationBits) - 1, e.isOctEncodedDraco = !0);
  const f = {};
  if (t.batchTableProperties)
    for (const d of Object.keys(t.batchTableProperties))
      i.attributes[d] && i.attributes[d].value && (f[d.toLowerCase()] = i.attributes[d].value);
  e.attributes = {
    positions: o,
    colors: Da(e, a, void 0),
    normals: c,
    batchIds: u,
    ...f
  };
}
const mm = "4.1.1";
var ys;
const gm = (ys = globalThis.loaders) === null || ys === void 0 ? void 0 : ys.parseImageNode, Ks = typeof Image < "u", zs = typeof ImageBitmap < "u", Am = !!gm, Ws = Vn ? !0 : Am;
function pm(e) {
  switch (e) {
    case "auto":
      return zs || Ks || Ws;
    case "imagebitmap":
      return zs;
    case "image":
      return Ks;
    case "data":
      return Ws;
    default:
      throw new Error(`@loaders.gl/images: image ${e} not supported in this environment`);
  }
}
function ym() {
  if (zs)
    return "imagebitmap";
  if (Ks)
    return "image";
  if (Ws)
    return "data";
  throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js");
}
function Bm(e) {
  const t = Cm(e);
  if (!t)
    throw new Error("Not an image");
  return t;
}
function La(e) {
  switch (Bm(e)) {
    case "data":
      return e;
    case "image":
    case "imagebitmap":
      const t = document.createElement("canvas"), n = t.getContext("2d");
      if (!n)
        throw new Error("getImageData");
      return t.width = e.width, t.height = e.height, n.drawImage(e, 0, 0), n.getImageData(0, 0, e.width, e.height);
    default:
      throw new Error("getImageData");
  }
}
function Cm(e) {
  return typeof ImageBitmap < "u" && e instanceof ImageBitmap ? "imagebitmap" : typeof Image < "u" && e instanceof Image ? "image" : e && typeof e == "object" && e.data && e.width && e.height ? "data" : null;
}
const Em = /^data:image\/svg\+xml/, Tm = /\.svg((\?|#).*)?$/;
function wr(e) {
  return e && (Em.test(e) || Tm.test(e));
}
function bm(e, t) {
  if (wr(t)) {
    let s = new TextDecoder().decode(e);
    try {
      typeof unescape == "function" && typeof encodeURIComponent == "function" && (s = unescape(encodeURIComponent(s)));
    } catch (i) {
      throw new Error(i.message);
    }
    return `data:image/svg+xml;base64,${btoa(s)}`;
  }
  return Pa(e, t);
}
function Pa(e, t) {
  if (wr(t))
    throw new Error("SVG cannot be parsed directly to imagebitmap");
  return new Blob([new Uint8Array(e)]);
}
async function Ga(e, t, n) {
  const s = bm(e, n), r = self.URL || self.webkitURL, i = typeof s != "string" && r.createObjectURL(s);
  try {
    return await _m(i || s, t);
  } finally {
    i && r.revokeObjectURL(i);
  }
}
async function _m(e, t) {
  const n = new Image();
  return n.src = e, t.image && t.image.decode && n.decode ? (await n.decode(), n) : await new Promise((s, r) => {
    try {
      n.onload = () => s(n), n.onerror = (i) => {
        const o = i instanceof Error ? i.message : "error";
        r(new Error(o));
      };
    } catch (i) {
      r(i);
    }
  });
}
const wm = {};
let Di = !0;
async function Rm(e, t, n) {
  let s;
  wr(n) ? s = await Ga(e, t, n) : s = Pa(e, n);
  const r = t && t.imagebitmap;
  return await Mm(s, r);
}
async function Mm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if ((Sm(t) || !Di) && (t = null), t)
    try {
      return await createImageBitmap(e, t);
    } catch (n) {
      console.warn(n), Di = !1;
    }
  return await createImageBitmap(e);
}
function Sm(e) {
  for (const t in e || wm)
    return !1;
  return !0;
}
function Im(e) {
  return !vm(e, "ftyp", 4) || !(e[8] & 96) ? null : xm(e);
}
function xm(e) {
  switch (Om(e, 8, 12).replace("\0", " ").trim()) {
    case "avif":
    case "avis":
      return {
        extension: "avif",
        mimeType: "image/avif"
      };
    default:
      return null;
  }
}
function Om(e, t, n) {
  return String.fromCharCode(...e.slice(t, n));
}
function Fm(e) {
  return [...e].map((t) => t.charCodeAt(0));
}
function vm(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  const s = Fm(t);
  for (let r = 0; r < s.length; ++r)
    if (s[r] !== e[r + n])
      return !1;
  return !0;
}
const Ft = !1, De = !0;
function Rr(e) {
  const t = qe(e);
  return Lm(t) || Nm(t) || Pm(t) || Gm(t) || Dm(t);
}
function Dm(e) {
  const t = new Uint8Array(e instanceof DataView ? e.buffer : e), n = Im(t);
  return n ? {
    mimeType: n.mimeType,
    width: 0,
    height: 0
  } : null;
}
function Lm(e) {
  const t = qe(e);
  return t.byteLength >= 24 && t.getUint32(0, Ft) === 2303741511 ? {
    mimeType: "image/png",
    width: t.getUint32(16, Ft),
    height: t.getUint32(20, Ft)
  } : null;
}
function Pm(e) {
  const t = qe(e);
  return t.byteLength >= 10 && t.getUint32(0, Ft) === 1195984440 ? {
    mimeType: "image/gif",
    width: t.getUint16(6, De),
    height: t.getUint16(8, De)
  } : null;
}
function Gm(e) {
  const t = qe(e);
  return t.byteLength >= 14 && t.getUint16(0, Ft) === 16973 && t.getUint32(2, De) === t.byteLength ? {
    mimeType: "image/bmp",
    width: t.getUint32(18, De),
    height: t.getUint32(22, De)
  } : null;
}
function Nm(e) {
  const t = qe(e);
  if (!(t.byteLength >= 3 && t.getUint16(0, Ft) === 65496 && t.getUint8(2) === 255))
    return null;
  const {
    tableMarkers: s,
    sofMarkers: r
  } = Um();
  let i = 2;
  for (; i + 9 < t.byteLength; ) {
    const o = t.getUint16(i, Ft);
    if (r.has(o))
      return {
        mimeType: "image/jpeg",
        height: t.getUint16(i + 5, Ft),
        width: t.getUint16(i + 7, Ft)
      };
    if (!s.has(o))
      return null;
    i += 2, i += t.getUint16(i, Ft);
  }
  return null;
}
function Um() {
  const e = /* @__PURE__ */ new Set([65499, 65476, 65484, 65501, 65534]);
  for (let n = 65504; n < 65520; ++n)
    e.add(n);
  return {
    tableMarkers: e,
    sofMarkers: /* @__PURE__ */ new Set([65472, 65473, 65474, 65475, 65477, 65478, 65479, 65481, 65482, 65483, 65485, 65486, 65487, 65502])
  };
}
function qe(e) {
  if (e instanceof DataView)
    return e;
  if (ArrayBuffer.isView(e))
    return new DataView(e.buffer);
  if (e instanceof ArrayBuffer)
    return new DataView(e);
  throw new Error("toDataView");
}
async function Hm(e, t) {
  var n;
  const {
    mimeType: s
  } = Rr(e) || {}, r = (n = globalThis.loaders) === null || n === void 0 ? void 0 : n.parseImageNode;
  return K(r), await r(e, s);
}
async function Jm(e, t, n) {
  t = t || {};
  const r = (t.image || {}).type || "auto", {
    url: i
  } = n || {}, o = Vm(r);
  let a;
  switch (o) {
    case "imagebitmap":
      a = await Rm(e, t, i);
      break;
    case "image":
      a = await Ga(e, t, i);
      break;
    case "data":
      a = await Hm(e);
      break;
    default:
      K(!1);
  }
  return r === "data" && (a = La(a)), a;
}
function Vm(e) {
  switch (e) {
    case "auto":
    case "data":
      return ym();
    default:
      return pm(e), e;
  }
}
const jm = ["png", "jpg", "jpeg", "gif", "webp", "bmp", "ico", "svg", "avif"], km = ["image/png", "image/jpeg", "image/gif", "image/webp", "image/avif", "image/bmp", "image/vnd.microsoft.icon", "image/svg+xml"], Km = {
  image: {
    type: "auto",
    decode: !0
  }
}, zm = {
  id: "image",
  module: "images",
  name: "Images",
  version: mm,
  mimeTypes: km,
  extensions: jm,
  parse: Jm,
  tests: [(e) => !!Rr(new DataView(e))],
  options: Km
}, Bs = {};
function Wm(e) {
  if (Bs[e] === void 0) {
    const t = Vn ? Qm(e) : Xm(e);
    Bs[e] = t;
  }
  return Bs[e];
}
function Xm(e) {
  var t, n;
  const s = ["image/png", "image/jpeg", "image/gif"], r = ((t = globalThis.loaders) === null || t === void 0 ? void 0 : t.imageFormatsNode) || s;
  return !!((n = globalThis.loaders) === null || n === void 0 ? void 0 : n.parseImageNode) && r.includes(e);
}
function Qm(e) {
  switch (e) {
    case "image/avif":
    case "image/webp":
      return qm(e);
    default:
      return !0;
  }
}
function qm(e) {
  try {
    return document.createElement("canvas").toDataURL(e).indexOf(`data:${e}`) === 0;
  } catch {
    return !1;
  }
}
function yt(e, t) {
  if (!e)
    throw new Error(t || "assert failed: gltf");
}
const Na = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Ua = {
  5120: 1,
  5121: 1,
  5122: 2,
  5123: 2,
  5125: 4,
  5126: 4
}, $m = 1.33, Li = ["SCALAR", "VEC2", "VEC3", "VEC4"], Ym = [[Int8Array, 5120], [Uint8Array, 5121], [Int16Array, 5122], [Uint16Array, 5123], [Uint32Array, 5125], [Float32Array, 5126], [Float64Array, 5130]], Zm = new Map(Ym), tg = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, eg = {
  5120: 1,
  5121: 1,
  5122: 2,
  5123: 2,
  5125: 4,
  5126: 4
}, ng = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
function Ha(e) {
  return Li[e - 1] || Li[0];
}
function Mr(e) {
  const t = Zm.get(e.constructor);
  if (!t)
    throw new Error("Illegal typed array");
  return t;
}
function Sr(e, t) {
  const n = ng[e.componentType], s = tg[e.type], r = eg[e.componentType], i = e.count * s, o = e.count * s * r;
  yt(o >= 0 && o <= t.byteLength);
  const a = Ua[e.componentType], c = Na[e.type];
  return {
    ArrayType: n,
    length: i,
    byteLength: o,
    componentByteSize: a,
    numberOfComponentsInElement: c
  };
}
function Ja(e) {
  let {
    images: t,
    bufferViews: n
  } = e;
  t = t || [], n = n || [];
  const s = t.map((o) => o.bufferView);
  n = n.filter((o) => !s.includes(o));
  const r = n.reduce((o, a) => o + a.byteLength, 0), i = t.reduce((o, a) => {
    const {
      width: c,
      height: u
    } = a.image;
    return o + c * u;
  }, 0);
  return r + Math.ceil(4 * i * $m);
}
function sg(e, t, n) {
  const s = e.bufferViews[n];
  yt(s);
  const r = s.buffer, i = t[r];
  yt(i);
  const o = (s.byteOffset || 0) + i.byteOffset;
  return new Uint8Array(i.arrayBuffer, o, s.byteLength);
}
function rg(e, t, n) {
  var s, r;
  const i = typeof n == "number" ? (s = e.accessors) === null || s === void 0 ? void 0 : s[n] : n;
  if (!i)
    throw new Error(`No gltf accessor ${JSON.stringify(n)}`);
  const o = (r = e.bufferViews) === null || r === void 0 ? void 0 : r[i.bufferView || 0];
  if (!o)
    throw new Error(`No gltf buffer view for accessor ${o}`);
  const {
    arrayBuffer: a,
    byteOffset: c
  } = t[o.buffer], u = (c || 0) + (i.byteOffset || 0) + (o.byteOffset || 0), {
    ArrayType: l,
    length: h,
    componentByteSize: f,
    numberOfComponentsInElement: d
  } = Sr(i, o), m = f * d, g = o.byteStride || m;
  if (typeof o.byteStride > "u" || o.byteStride === m)
    return new l(a, u, h);
  const y = new l(h);
  for (let E = 0; E < i.count; E++) {
    const R = new l(a, u + E * g, d);
    y.set(R, E * d);
  }
  return y;
}
function ig() {
  return {
    asset: {
      version: "2.0",
      generator: "loaders.gl"
    },
    buffers: [],
    extensions: {},
    extensionsRequired: [],
    extensionsUsed: []
  };
}
class it {
  constructor(t) {
    this.gltf = void 0, this.sourceBuffers = void 0, this.byteLength = void 0, this.gltf = {
      json: (t == null ? void 0 : t.json) || ig(),
      buffers: (t == null ? void 0 : t.buffers) || [],
      images: (t == null ? void 0 : t.images) || []
    }, this.sourceBuffers = [], this.byteLength = 0, this.gltf.buffers && this.gltf.buffers[0] && (this.byteLength = this.gltf.buffers[0].byteLength, this.sourceBuffers = [this.gltf.buffers[0]]);
  }
  get json() {
    return this.gltf.json;
  }
  getApplicationData(t) {
    return this.json[t];
  }
  getExtraData(t) {
    return (this.json.extras || {})[t];
  }
  hasExtension(t) {
    const n = this.getUsedExtensions().find((r) => r === t), s = this.getRequiredExtensions().find((r) => r === t);
    return typeof n == "string" || typeof s == "string";
  }
  getExtension(t) {
    const n = this.getUsedExtensions().find((r) => r === t), s = this.json.extensions || {};
    return n ? s[t] : null;
  }
  getRequiredExtension(t) {
    return this.getRequiredExtensions().find((s) => s === t) ? this.getExtension(t) : null;
  }
  getRequiredExtensions() {
    return this.json.extensionsRequired || [];
  }
  getUsedExtensions() {
    return this.json.extensionsUsed || [];
  }
  getRemovedExtensions() {
    return this.json.extensionsRemoved || [];
  }
  getObjectExtension(t, n) {
    return (t.extensions || {})[n];
  }
  getScene(t) {
    return this.getObject("scenes", t);
  }
  getNode(t) {
    return this.getObject("nodes", t);
  }
  getSkin(t) {
    return this.getObject("skins", t);
  }
  getMesh(t) {
    return this.getObject("meshes", t);
  }
  getMaterial(t) {
    return this.getObject("materials", t);
  }
  getAccessor(t) {
    return this.getObject("accessors", t);
  }
  getTexture(t) {
    return this.getObject("textures", t);
  }
  getSampler(t) {
    return this.getObject("samplers", t);
  }
  getImage(t) {
    return this.getObject("images", t);
  }
  getBufferView(t) {
    return this.getObject("bufferViews", t);
  }
  getBuffer(t) {
    return this.getObject("buffers", t);
  }
  getObject(t, n) {
    if (typeof n == "object")
      return n;
    const s = this.json[t] && this.json[t][n];
    if (!s)
      throw new Error(`glTF file error: Could not find ${t}[${n}]`);
    return s;
  }
  getTypedArrayForBufferView(t) {
    t = this.getBufferView(t);
    const n = t.buffer, s = this.gltf.buffers[n];
    yt(s);
    const r = (t.byteOffset || 0) + s.byteOffset;
    return new Uint8Array(s.arrayBuffer, r, t.byteLength);
  }
  getTypedArrayForAccessor(t) {
    const n = this.getAccessor(t);
    return rg(this.gltf.json, this.gltf.buffers, n);
  }
  getTypedArrayForImageData(t) {
    t = this.getAccessor(t);
    const n = this.getBufferView(t.bufferView), r = this.getBuffer(n.buffer).data, i = n.byteOffset || 0;
    return new Uint8Array(r, i, n.byteLength);
  }
  addApplicationData(t, n) {
    return this.json[t] = n, this;
  }
  addExtraData(t, n) {
    return this.json.extras = this.json.extras || {}, this.json.extras[t] = n, this;
  }
  addObjectExtension(t, n, s) {
    return t.extensions = t.extensions || {}, t.extensions[n] = s, this.registerUsedExtension(n), this;
  }
  setObjectExtension(t, n, s) {
    const r = t.extensions || {};
    r[n] = s;
  }
  removeObjectExtension(t, n) {
    const s = (t == null ? void 0 : t.extensions) || {};
    if (s[n]) {
      this.json.extensionsRemoved = this.json.extensionsRemoved || [];
      const r = this.json.extensionsRemoved;
      r.includes(n) || r.push(n);
    }
    delete s[n];
  }
  addExtension(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return yt(n), this.json.extensions = this.json.extensions || {}, this.json.extensions[t] = n, this.registerUsedExtension(t), n;
  }
  addRequiredExtension(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return yt(n), this.addExtension(t, n), this.registerRequiredExtension(t), n;
  }
  registerUsedExtension(t) {
    this.json.extensionsUsed = this.json.extensionsUsed || [], this.json.extensionsUsed.find((n) => n === t) || this.json.extensionsUsed.push(t);
  }
  registerRequiredExtension(t) {
    this.registerUsedExtension(t), this.json.extensionsRequired = this.json.extensionsRequired || [], this.json.extensionsRequired.find((n) => n === t) || this.json.extensionsRequired.push(t);
  }
  removeExtension(t) {
    var n;
    if ((n = this.json.extensions) !== null && n !== void 0 && n[t]) {
      this.json.extensionsRemoved = this.json.extensionsRemoved || [];
      const s = this.json.extensionsRemoved;
      s.includes(t) || s.push(t);
    }
    this.json.extensions && delete this.json.extensions[t], this.json.extensionsRequired && this._removeStringFromArray(this.json.extensionsRequired, t), this.json.extensionsUsed && this._removeStringFromArray(this.json.extensionsUsed, t);
  }
  setDefaultScene(t) {
    this.json.scene = t;
  }
  addScene(t) {
    const {
      nodeIndices: n
    } = t;
    return this.json.scenes = this.json.scenes || [], this.json.scenes.push({
      nodes: n
    }), this.json.scenes.length - 1;
  }
  addNode(t) {
    const {
      meshIndex: n,
      matrix: s
    } = t;
    this.json.nodes = this.json.nodes || [];
    const r = {
      mesh: n
    };
    return s && (r.matrix = s), this.json.nodes.push(r), this.json.nodes.length - 1;
  }
  addMesh(t) {
    const {
      attributes: n,
      indices: s,
      material: r,
      mode: i = 4
    } = t, a = {
      primitives: [{
        attributes: this._addAttributes(n),
        mode: i
      }]
    };
    if (s) {
      const c = this._addIndices(s);
      a.primitives[0].indices = c;
    }
    return Number.isFinite(r) && (a.primitives[0].material = r), this.json.meshes = this.json.meshes || [], this.json.meshes.push(a), this.json.meshes.length - 1;
  }
  addPointCloud(t) {
    const s = {
      primitives: [{
        attributes: this._addAttributes(t),
        mode: 0
      }]
    };
    return this.json.meshes = this.json.meshes || [], this.json.meshes.push(s), this.json.meshes.length - 1;
  }
  addImage(t, n) {
    const s = Rr(t), r = n || (s == null ? void 0 : s.mimeType), o = {
      bufferView: this.addBufferView(t),
      mimeType: r
    };
    return this.json.images = this.json.images || [], this.json.images.push(o), this.json.images.length - 1;
  }
  addBufferView(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.byteLength;
    const r = t.byteLength;
    yt(Number.isFinite(r)), this.sourceBuffers = this.sourceBuffers || [], this.sourceBuffers.push(t);
    const i = {
      buffer: n,
      byteOffset: s,
      byteLength: r
    };
    return this.byteLength += ze(r, 4), this.json.bufferViews = this.json.bufferViews || [], this.json.bufferViews.push(i), this.json.bufferViews.length - 1;
  }
  addAccessor(t, n) {
    const s = {
      bufferView: t,
      type: Ha(n.size),
      componentType: n.componentType,
      count: n.count,
      max: n.max,
      min: n.min
    };
    return this.json.accessors = this.json.accessors || [], this.json.accessors.push(s), this.json.accessors.length - 1;
  }
  addBinaryBuffer(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      size: 3
    };
    const s = this.addBufferView(t);
    let r = {
      min: n.min,
      max: n.max
    };
    (!r.min || !r.max) && (r = this._getAccessorMinMax(t, n.size));
    const i = {
      size: n.size,
      componentType: Mr(t),
      count: Math.round(t.length / n.size),
      min: r.min,
      max: r.max
    };
    return this.addAccessor(s, Object.assign(i, n));
  }
  addTexture(t) {
    const {
      imageIndex: n
    } = t, s = {
      source: n
    };
    return this.json.textures = this.json.textures || [], this.json.textures.push(s), this.json.textures.length - 1;
  }
  addMaterial(t) {
    return this.json.materials = this.json.materials || [], this.json.materials.push(t), this.json.materials.length - 1;
  }
  createBinaryChunk() {
    var t, n;
    this.gltf.buffers = [];
    const s = this.byteLength, r = new ArrayBuffer(s), i = new Uint8Array(r);
    let o = 0;
    for (const a of this.sourceBuffers || [])
      o = vu(a, i, o);
    (t = this.json) !== null && t !== void 0 && (n = t.buffers) !== null && n !== void 0 && n[0] ? this.json.buffers[0].byteLength = s : this.json.buffers = [{
      byteLength: s
    }], this.gltf.binary = r, this.sourceBuffers = [r];
  }
  _removeStringFromArray(t, n) {
    let s = !0;
    for (; s; ) {
      const r = t.indexOf(n);
      r > -1 ? t.splice(r, 1) : s = !1;
    }
  }
  _addAttributes() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = {};
    for (const s in t) {
      const r = t[s], i = this._getGltfAttributeName(s), o = this.addBinaryBuffer(r.value, r);
      n[i] = o;
    }
    return n;
  }
  _addIndices(t) {
    return this.addBinaryBuffer(t, {
      size: 1
    });
  }
  _getGltfAttributeName(t) {
    switch (t.toLowerCase()) {
      case "position":
      case "positions":
      case "vertices":
        return "POSITION";
      case "normal":
      case "normals":
        return "NORMAL";
      case "color":
      case "colors":
        return "COLOR_0";
      case "texcoord":
      case "texcoords":
        return "TEXCOORD_0";
      default:
        return t;
    }
  }
  _getAccessorMinMax(t, n) {
    const s = {
      min: null,
      max: null
    };
    if (t.length < n)
      return s;
    s.min = [], s.max = [];
    const r = t.subarray(0, n);
    for (const i of r)
      s.min.push(i), s.max.push(i);
    for (let i = n; i < t.length; i += n)
      for (let o = 0; o < n; o++)
        s.min[0 + o] = Math.min(s.min[0 + o], t[i + o]), s.max[0 + o] = Math.max(s.max[0 + o], t[i + o]);
    return s;
  }
}
function Pi(e) {
  return (e % 1 + 1) % 1;
}
const Va = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16,
  BOOLEAN: 1,
  STRING: 1,
  ENUM: 1
}, og = {
  INT8: Int8Array,
  UINT8: Uint8Array,
  INT16: Int16Array,
  UINT16: Uint16Array,
  INT32: Int32Array,
  UINT32: Uint32Array,
  INT64: BigInt64Array,
  UINT64: BigUint64Array,
  FLOAT32: Float32Array,
  FLOAT64: Float64Array
}, ja = {
  INT8: 1,
  UINT8: 1,
  INT16: 2,
  UINT16: 2,
  INT32: 4,
  UINT32: 4,
  INT64: 8,
  UINT64: 8,
  FLOAT32: 4,
  FLOAT64: 8
};
function Ir(e, t) {
  return ja[t] * Va[e];
}
function Qn(e, t, n, s) {
  if (n !== "UINT8" && n !== "UINT16" && n !== "UINT32" && n !== "UINT64")
    return null;
  const r = e.getTypedArrayForBufferView(t), i = qn(r, "SCALAR", n, s + 1);
  return i instanceof BigInt64Array || i instanceof BigUint64Array ? null : i;
}
function qn(e, t, n) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  const r = Va[t], i = og[n], o = ja[n], a = s * r, c = a * o;
  let u = e.buffer, l = e.byteOffset;
  return l % o !== 0 && (u = new Uint8Array(u).slice(l, l + c).buffer, l = 0), new i(u, l, a);
}
function xr(e, t, n) {
  var s, r;
  const i = `TEXCOORD_${t.texCoord || 0}`, o = n.attributes[i], a = e.getTypedArrayForAccessor(o), c = e.gltf.json, u = t.index, l = (s = c.textures) === null || s === void 0 || (r = s[u]) === null || r === void 0 ? void 0 : r.source;
  if (typeof l < "u") {
    var h, f, d;
    const m = (h = c.images) === null || h === void 0 || (f = h[l]) === null || f === void 0 ? void 0 : f.mimeType, g = (d = e.gltf.images) === null || d === void 0 ? void 0 : d[l];
    if (g && typeof g.width < "u") {
      const y = [];
      for (let E = 0; E < a.length; E += 2) {
        const R = ag(g, m, a, E, t.channels);
        y.push(R);
      }
      return y;
    }
  }
  return [];
}
function ka(e, t, n, s, r) {
  if (!(n != null && n.length))
    return;
  const i = [];
  for (const l of n) {
    let h = s.findIndex((f) => f === l);
    h === -1 && (h = s.push(l) - 1), i.push(h);
  }
  const o = new Uint32Array(i), a = e.gltf.buffers.push({
    arrayBuffer: o.buffer,
    byteOffset: o.byteOffset,
    byteLength: o.byteLength
  }) - 1, c = e.addBufferView(o, a, 0), u = e.addAccessor(c, {
    size: 1,
    componentType: Mr(o),
    count: o.length
  });
  r.attributes[t] = u;
}
function ag(e, t, n, s) {
  let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [0];
  const i = {
    r: {
      offset: 0,
      shift: 0
    },
    g: {
      offset: 1,
      shift: 8
    },
    b: {
      offset: 2,
      shift: 16
    },
    a: {
      offset: 3,
      shift: 24
    }
  }, o = n[s], a = n[s + 1];
  let c = 1;
  t && (t.indexOf("image/jpeg") !== -1 || t.indexOf("image/png") !== -1) && (c = 4);
  const u = cg(o, a, e, c);
  let l = 0;
  for (const h of r) {
    const f = typeof h == "number" ? Object.values(i)[h] : i[h], d = u + f.offset, m = La(e);
    if (m.data.length <= d)
      throw new Error(`${m.data.length} <= ${d}`);
    const g = m.data[d];
    l |= g << f.shift;
  }
  return l;
}
function cg(e, t, n) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  const r = n.width, i = Pi(e) * (r - 1), o = Math.round(i), a = n.height, c = Pi(t) * (a - 1), u = Math.round(c), l = n.components ? n.components : s;
  return (u * r + o) * l;
}
function Ka(e, t, n, s, r) {
  const i = [];
  for (let o = 0; o < t; o++) {
    const a = n[o], c = n[o + 1] - n[o];
    if (c + a > s)
      break;
    const u = a / r, l = c / r;
    i.push(e.slice(u, u + l));
  }
  return i;
}
function za(e, t, n) {
  const s = [];
  for (let r = 0; r < t; r++) {
    const i = r * n;
    s.push(e.slice(i, i + n));
  }
  return s;
}
function Wa(e, t, n, s) {
  if (n)
    throw new Error("Not implemented - arrayOffsets for strings is specified");
  if (s) {
    const r = [], i = new TextDecoder("utf8");
    let o = 0;
    for (let a = 0; a < e; a++) {
      const c = s[a + 1] - s[a];
      if (c + o <= t.length) {
        const u = t.subarray(o, c + o), l = i.decode(u);
        r.push(l), o += c;
      }
    }
    return r;
  }
  return [];
}
const Xa = "EXT_mesh_features", ug = Xa;
async function lg(e, t) {
  const n = new it(e);
  hg(n, t);
}
function hg(e, t) {
  const n = e.gltf.json;
  if (n.meshes)
    for (const s of n.meshes)
      for (const r of s.primitives)
        fg(e, r, t);
}
function fg(e, t, n) {
  var s, r;
  if (!(n != null && (s = n.gltf) !== null && s !== void 0 && s.loadBuffers))
    return;
  const i = (r = t.extensions) === null || r === void 0 ? void 0 : r[Xa], o = i == null ? void 0 : i.featureIds;
  if (o)
    for (const c of o) {
      var a;
      let u;
      if (typeof c.attribute < "u") {
        const l = `_FEATURE_ID_${c.attribute}`, h = t.attributes[l];
        u = e.getTypedArrayForAccessor(h);
      } else typeof c.texture < "u" && n !== null && n !== void 0 && (a = n.gltf) !== null && a !== void 0 && a.loadImages ? u = xr(e, c.texture, t) : u = [];
      c.data = u;
    }
}
const dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: lg,
  name: ug
}, Symbol.toStringTag, { value: "Module" })), Or = "EXT_structural_metadata", mg = Or;
async function gg(e, t) {
  const n = new it(e);
  Ag(n, t);
}
function Ag(e, t) {
  var n, s;
  if (!((n = t.gltf) !== null && n !== void 0 && n.loadBuffers))
    return;
  const r = e.getExtension(Or);
  r && ((s = t.gltf) !== null && s !== void 0 && s.loadImages && pg(e, r), yg(e, r));
}
function pg(e, t) {
  const n = t.propertyTextures, s = e.gltf.json;
  if (n && s.meshes)
    for (const r of s.meshes)
      for (const i of r.primitives)
        Cg(e, n, i, t);
}
function yg(e, t) {
  const n = t.schema;
  if (!n)
    return;
  const s = n.classes, r = t.propertyTables;
  if (s && r)
    for (const i in s) {
      const o = Bg(r, i);
      o && Tg(e, n, o);
    }
}
function Bg(e, t) {
  for (const n of e)
    if (n.class === t)
      return n;
  return null;
}
function Cg(e, t, n, s) {
  var r;
  if (!t)
    return;
  const i = (r = n.extensions) === null || r === void 0 ? void 0 : r[Or], o = i == null ? void 0 : i.propertyTextures;
  if (o)
    for (const a of o) {
      const c = t[a];
      Eg(e, c, n, s);
    }
}
function Eg(e, t, n, s) {
  if (!t.properties)
    return;
  s.dataAttributeNames || (s.dataAttributeNames = []);
  const r = t.class;
  for (const o in t.properties) {
    var i;
    const a = `${r}_${o}`, c = (i = t.properties) === null || i === void 0 ? void 0 : i[o];
    if (!c)
      continue;
    c.data || (c.data = []);
    const u = c.data, l = xr(e, c, n);
    l !== null && (ka(e, a, l, u, n), c.data = u, s.dataAttributeNames.push(a));
  }
}
function Tg(e, t, n) {
  var s;
  const r = (s = t.classes) === null || s === void 0 ? void 0 : s[n.class];
  if (!r)
    throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${n.class}`);
  const i = n.count;
  for (const a in r.properties) {
    var o;
    const c = r.properties[a], u = (o = n.properties) === null || o === void 0 ? void 0 : o[a];
    if (u) {
      const l = bg(e, t, c, i, u);
      u.data = l;
    }
  }
}
function bg(e, t, n, s, r) {
  let i = [];
  const o = r.values, a = e.getTypedArrayForBufferView(o), c = _g(e, n, r, s), u = wg(e, r, s);
  switch (n.type) {
    case "SCALAR":
    case "VEC2":
    case "VEC3":
    case "VEC4":
    case "MAT2":
    case "MAT3":
    case "MAT4": {
      i = Rg(n, s, a, c);
      break;
    }
    case "BOOLEAN":
      throw new Error(`Not implemented - classProperty.type=${n.type}`);
    case "STRING": {
      i = Wa(s, a, c, u);
      break;
    }
    case "ENUM": {
      i = Mg(t, n, s, a, c);
      break;
    }
    default:
      throw new Error(`Unknown classProperty type ${n.type}`);
  }
  return i;
}
function _g(e, t, n, s) {
  return t.array && typeof t.count > "u" && typeof n.arrayOffsets < "u" ? Qn(e, n.arrayOffsets, n.arrayOffsetType || "UINT32", s) : null;
}
function wg(e, t, n) {
  return typeof t.stringOffsets < "u" ? Qn(e, t.stringOffsets, t.stringOffsetType || "UINT32", n) : null;
}
function Rg(e, t, n, s) {
  const r = e.array, i = e.count, o = Ir(e.type, e.componentType), a = n.byteLength / o;
  let c;
  return e.componentType ? c = qn(n, e.type, e.componentType, a) : c = n, r ? s ? Ka(c, t, s, n.length, o) : i ? za(c, t, i) : [] : c;
}
function Mg(e, t, n, s, r) {
  var i;
  const o = t.enumType;
  if (!o)
    throw new Error("Incorrect data in the EXT_structural_metadata extension: classProperty.enumType is not set for type ENUM");
  const a = (i = e.enums) === null || i === void 0 ? void 0 : i[o];
  if (!a)
    throw new Error(`Incorrect data in the EXT_structural_metadata extension: schema.enums does't contain ${o}`);
  const c = a.valueType || "UINT16", u = Ir(t.type, c), l = s.byteLength / u;
  let h = qn(s, t.type, c, l);
  if (h || (h = s), t.array) {
    if (r)
      return Sg({
        valuesData: h,
        numberOfElements: n,
        arrayOffsets: r,
        valuesDataBytesLength: s.length,
        elementSize: u,
        enumEntry: a
      });
    const f = t.count;
    return f ? Ig(h, n, f, a) : [];
  }
  return Fr(h, 0, n, a);
}
function Sg(e) {
  const {
    valuesData: t,
    numberOfElements: n,
    arrayOffsets: s,
    valuesDataBytesLength: r,
    elementSize: i,
    enumEntry: o
  } = e, a = [];
  for (let c = 0; c < n; c++) {
    const u = s[c], l = s[c + 1] - s[c];
    if (l + u > r)
      break;
    const h = u / i, f = l / i, d = Fr(t, h, f, o);
    a.push(d);
  }
  return a;
}
function Ig(e, t, n, s) {
  const r = [];
  for (let i = 0; i < t; i++) {
    const o = n * i, a = Fr(e, o, n, s);
    r.push(a);
  }
  return r;
}
function Fr(e, t, n, s) {
  const r = [];
  for (let i = 0; i < n; i++)
    if (e instanceof BigInt64Array || e instanceof BigUint64Array)
      r.push("");
    else {
      const o = e[t + i], a = xg(s, o);
      a ? r.push(a.name) : r.push("");
    }
  return r;
}
function xg(e, t) {
  for (const n of e.values)
    if (n.value === t)
      return n;
  return null;
}
const Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: gg,
  name: mg
}, Symbol.toStringTag, { value: "Module" })), Qa = "EXT_feature_metadata", Fg = Qa;
async function vg(e, t) {
  const n = new it(e);
  Dg(n, t);
}
function Dg(e, t) {
  var n, s;
  if (!((n = t.gltf) !== null && n !== void 0 && n.loadBuffers))
    return;
  const r = e.getExtension(Qa);
  r && ((s = t.gltf) !== null && s !== void 0 && s.loadImages && Lg(e, r), Pg(e, r));
}
function Lg(e, t) {
  const n = t.schema;
  if (!n)
    return;
  const s = n.classes, {
    featureTextures: r
  } = t;
  if (s && r)
    for (const i in s) {
      const o = s[i], a = Ng(r, i);
      a && Hg(e, a, o);
    }
}
function Pg(e, t) {
  const n = t.schema;
  if (!n)
    return;
  const s = n.classes, r = t.featureTables;
  if (s && r)
    for (const i in s) {
      const o = Gg(r, i);
      o && Ug(e, n, o);
    }
}
function Gg(e, t) {
  for (const n in e) {
    const s = e[n];
    if (s.class === t)
      return s;
  }
  return null;
}
function Ng(e, t) {
  for (const n in e) {
    const s = e[n];
    if (s.class === t)
      return s;
  }
  return null;
}
function Ug(e, t, n) {
  var s;
  if (!n.class)
    return;
  const r = (s = t.classes) === null || s === void 0 ? void 0 : s[n.class];
  if (!r)
    throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${n.class}`);
  const i = n.count;
  for (const a in r.properties) {
    var o;
    const c = r.properties[a], u = (o = n.properties) === null || o === void 0 ? void 0 : o[a];
    if (u) {
      const l = Jg(e, t, c, i, u);
      u.data = l;
    }
  }
}
function Hg(e, t, n) {
  const s = t.class;
  for (const i in n.properties) {
    var r;
    const o = t == null || (r = t.properties) === null || r === void 0 ? void 0 : r[i];
    if (o) {
      const a = zg(e, o, s);
      o.data = a;
    }
  }
}
function Jg(e, t, n, s, r) {
  let i = [];
  const o = r.bufferView, a = e.getTypedArrayForBufferView(o), c = Vg(e, n, r, s), u = jg(e, n, r, s);
  return n.type === "STRING" || n.componentType === "STRING" ? i = Wa(s, a, c, u) : kg(n) && (i = Kg(n, s, a, c)), i;
}
function Vg(e, t, n, s) {
  return t.type === "ARRAY" && typeof t.componentCount > "u" && typeof n.arrayOffsetBufferView < "u" ? Qn(e, n.arrayOffsetBufferView, n.offsetType || "UINT32", s) : null;
}
function jg(e, t, n, s) {
  return typeof n.stringOffsetBufferView < "u" ? Qn(e, n.stringOffsetBufferView, n.offsetType || "UINT32", s) : null;
}
function kg(e) {
  const t = ["UINT8", "INT16", "UINT16", "INT32", "UINT32", "INT64", "UINT64", "FLOAT32", "FLOAT64"];
  return t.includes(e.type) || typeof e.componentType < "u" && t.includes(e.componentType);
}
function Kg(e, t, n, s) {
  const r = e.type === "ARRAY", i = e.componentCount, o = "SCALAR", a = e.componentType || e.type, c = Ir(o, a), u = n.byteLength / c, l = qn(n, o, a, u);
  return r ? s ? Ka(l, t, s, n.length, c) : i ? za(l, t, i) : [] : l;
}
function zg(e, t, n) {
  const s = e.gltf.json;
  if (!s.meshes)
    return [];
  const r = [];
  for (const i of s.meshes)
    for (const o of i.primitives)
      Wg(e, n, t, r, o);
  return r;
}
function Wg(e, t, n, s, r) {
  const i = {
    channels: n.channels,
    ...n.texture
  }, o = xr(e, i, r);
  o && ka(e, t, o, s, r);
}
const Xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: vg,
  name: Fg
}, Symbol.toStringTag, { value: "Module" })), Qg = "4.1.1", qg = "4.1.1", vn = {
  TRANSCODER: "basis_transcoder.js",
  TRANSCODER_WASM: "basis_transcoder.wasm",
  ENCODER: "basis_encoder.js",
  ENCODER_WASM: "basis_encoder.wasm"
};
let Cs;
async function Gi(e) {
  const t = e.modules || {};
  return t.basis ? t.basis : (Cs = Cs || $g(e), await Cs);
}
async function $g(e) {
  let t = null, n = null;
  return [t, n] = await Promise.all([await Yt(vn.TRANSCODER, "textures", e), await Yt(vn.TRANSCODER_WASM, "textures", e)]), t = t || globalThis.BASIS, await Yg(t, n);
}
function Yg(e, t) {
  const n = {};
  return t && (n.wasmBinary = t), new Promise((s) => {
    e(n).then((r) => {
      const {
        BasisFile: i,
        initializeBasis: o
      } = r;
      o(), s({
        BasisFile: i
      });
    });
  });
}
let Es;
async function Ni(e) {
  const t = e.modules || {};
  return t.basisEncoder ? t.basisEncoder : (Es = Es || Zg(e), await Es);
}
async function Zg(e) {
  let t = null, n = null;
  return [t, n] = await Promise.all([await Yt(vn.ENCODER, "textures", e), await Yt(vn.ENCODER_WASM, "textures", e)]), t = t || globalThis.BASIS, await t0(t, n);
}
function t0(e, t) {
  const n = {};
  return t && (n.wasmBinary = t), new Promise((s) => {
    e(n).then((r) => {
      const {
        BasisFile: i,
        KTX2File: o,
        initializeBasis: a,
        BasisEncoder: c
      } = r;
      a(), s({
        BasisFile: i,
        KTX2File: o,
        BasisEncoder: c
      });
    });
  });
}
const fe = {
  COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,
  COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,
  COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,
  COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,
  COMPRESSED_R11_EAC: 37488,
  COMPRESSED_SIGNED_R11_EAC: 37489,
  COMPRESSED_RG11_EAC: 37490,
  COMPRESSED_SIGNED_RG11_EAC: 37491,
  COMPRESSED_RGB8_ETC2: 37492,
  COMPRESSED_RGBA8_ETC2_EAC: 37493,
  COMPRESSED_SRGB8_ETC2: 37494,
  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37495,
  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37496,
  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37497,
  COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,
  COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,
  COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,
  COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,
  COMPRESSED_RGB_ETC1_WEBGL: 36196,
  COMPRESSED_RGB_ATC_WEBGL: 35986,
  COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: 35987,
  COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: 34798,
  COMPRESSED_RGBA_ASTC_4X4_KHR: 37808,
  COMPRESSED_RGBA_ASTC_5X4_KHR: 37809,
  COMPRESSED_RGBA_ASTC_5X5_KHR: 37810,
  COMPRESSED_RGBA_ASTC_6X5_KHR: 37811,
  COMPRESSED_RGBA_ASTC_6X6_KHR: 37812,
  COMPRESSED_RGBA_ASTC_8X5_KHR: 37813,
  COMPRESSED_RGBA_ASTC_8X6_KHR: 37814,
  COMPRESSED_RGBA_ASTC_8X8_KHR: 37815,
  COMPRESSED_RGBA_ASTC_10X5_KHR: 37816,
  COMPRESSED_RGBA_ASTC_10X6_KHR: 37817,
  COMPRESSED_RGBA_ASTC_10X8_KHR: 37818,
  COMPRESSED_RGBA_ASTC_10X10_KHR: 37819,
  COMPRESSED_RGBA_ASTC_12X10_KHR: 37820,
  COMPRESSED_RGBA_ASTC_12X12_KHR: 37821,
  COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR: 37840,
  COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR: 37841,
  COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR: 37842,
  COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR: 37843,
  COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR: 37844,
  COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR: 37845,
  COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR: 37846,
  COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR: 37847,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR: 37848,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR: 37849,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR: 37850,
  COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR: 37851,
  COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR: 37852,
  COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR: 37853,
  COMPRESSED_RED_RGTC1_EXT: 36283,
  COMPRESSED_SIGNED_RED_RGTC1_EXT: 36284,
  COMPRESSED_RED_GREEN_RGTC2_EXT: 36285,
  COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: 36286,
  COMPRESSED_SRGB_S3TC_DXT1_EXT: 35916,
  COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 35917,
  COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 35918,
  COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 35919
}, e0 = ["", "WEBKIT_", "MOZ_"], Ui = {
  WEBGL_compressed_texture_s3tc: "dxt",
  WEBGL_compressed_texture_s3tc_srgb: "dxt-srgb",
  WEBGL_compressed_texture_etc1: "etc1",
  WEBGL_compressed_texture_etc: "etc2",
  WEBGL_compressed_texture_pvrtc: "pvrtc",
  WEBGL_compressed_texture_atc: "atc",
  WEBGL_compressed_texture_astc: "astc",
  EXT_texture_compression_rgtc: "rgtc"
};
let mn = null;
function n0(e) {
  if (!mn) {
    e = e || s0() || void 0, mn = /* @__PURE__ */ new Set();
    for (const t of e0)
      for (const n in Ui)
        if (e && e.getExtension(`${t}${n}`)) {
          const s = Ui[n];
          mn.add(s);
        }
  }
  return mn;
}
function s0() {
  try {
    return document.createElement("canvas").getContext("webgl");
  } catch {
    return null;
  }
}
var Hi, Ji, Vi, ji, ki, Ki, zi, Wi;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.BASISLZ = 1] = "BASISLZ", e[e.ZSTD = 2] = "ZSTD", e[e.ZLIB = 3] = "ZLIB";
})(Hi || (Hi = {})), function(e) {
  e[e.BASICFORMAT = 0] = "BASICFORMAT";
}(Ji || (Ji = {})), function(e) {
  e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ETC1S = 163] = "ETC1S", e[e.UASTC = 166] = "UASTC";
}(Vi || (Vi = {})), function(e) {
  e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.SRGB = 1] = "SRGB";
}(ji || (ji = {})), function(e) {
  e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.LINEAR = 1] = "LINEAR", e[e.SRGB = 2] = "SRGB", e[e.ITU = 3] = "ITU", e[e.NTSC = 4] = "NTSC", e[e.SLOG = 5] = "SLOG", e[e.SLOG2 = 6] = "SLOG2";
}(ki || (ki = {})), function(e) {
  e[e.ALPHA_STRAIGHT = 0] = "ALPHA_STRAIGHT", e[e.ALPHA_PREMULTIPLIED = 1] = "ALPHA_PREMULTIPLIED";
}(Ki || (Ki = {})), function(e) {
  e[e.RGB = 0] = "RGB", e[e.RRR = 3] = "RRR", e[e.GGG = 4] = "GGG", e[e.AAA = 15] = "AAA";
}(zi || (zi = {})), function(e) {
  e[e.RGB = 0] = "RGB", e[e.RGBA = 3] = "RGBA", e[e.RRR = 4] = "RRR", e[e.RRRG = 5] = "RRRG";
}(Wi || (Wi = {}));
const gt = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function r0(e) {
  const t = new Uint8Array(e);
  return !(t.byteLength < gt.length || t[0] !== gt[0] || t[1] !== gt[1] || t[2] !== gt[2] || t[3] !== gt[3] || t[4] !== gt[4] || t[5] !== gt[5] || t[6] !== gt[6] || t[7] !== gt[7] || t[8] !== gt[8] || t[9] !== gt[9] || t[10] !== gt[10] || t[11] !== gt[11]);
}
const i0 = {
  etc1: {
    basisFormat: 0,
    compressed: !0,
    format: fe.COMPRESSED_RGB_ETC1_WEBGL
  },
  etc2: {
    basisFormat: 1,
    compressed: !0
  },
  bc1: {
    basisFormat: 2,
    compressed: !0,
    format: fe.COMPRESSED_RGB_S3TC_DXT1_EXT
  },
  bc3: {
    basisFormat: 3,
    compressed: !0,
    format: fe.COMPRESSED_RGBA_S3TC_DXT5_EXT
  },
  bc4: {
    basisFormat: 4,
    compressed: !0
  },
  bc5: {
    basisFormat: 5,
    compressed: !0
  },
  "bc7-m6-opaque-only": {
    basisFormat: 6,
    compressed: !0
  },
  "bc7-m5": {
    basisFormat: 7,
    compressed: !0
  },
  "pvrtc1-4-rgb": {
    basisFormat: 8,
    compressed: !0,
    format: fe.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
  },
  "pvrtc1-4-rgba": {
    basisFormat: 9,
    compressed: !0,
    format: fe.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
  },
  "astc-4x4": {
    basisFormat: 10,
    compressed: !0,
    format: fe.COMPRESSED_RGBA_ASTC_4X4_KHR
  },
  "atc-rgb": {
    basisFormat: 11,
    compressed: !0
  },
  "atc-rgba-interpolated-alpha": {
    basisFormat: 12,
    compressed: !0
  },
  rgba32: {
    basisFormat: 13,
    compressed: !1
  },
  rgb565: {
    basisFormat: 14,
    compressed: !1
  },
  bgr565: {
    basisFormat: 15,
    compressed: !1
  },
  rgba4444: {
    basisFormat: 16,
    compressed: !1
  }
};
async function o0(e, t) {
  if (t.basis.containerFormat === "auto") {
    if (r0(e)) {
      const s = await Ni(t);
      return Xi(s.KTX2File, e, t);
    }
    const {
      BasisFile: n
    } = await Gi(t);
    return Ts(n, e, t);
  }
  switch (t.basis.module) {
    case "encoder":
      const n = await Ni(t);
      switch (t.basis.containerFormat) {
        case "ktx2":
          return Xi(n.KTX2File, e, t);
        case "basis":
        default:
          return Ts(n.BasisFile, e, t);
      }
    case "transcoder":
    default:
      const {
        BasisFile: s
      } = await Gi(t);
      return Ts(s, e, t);
  }
}
function Ts(e, t, n) {
  const s = new e(new Uint8Array(t));
  try {
    if (!s.startTranscoding())
      throw new Error("Failed to start basis transcoding");
    const r = s.getNumImages(), i = [];
    for (let o = 0; o < r; o++) {
      const a = s.getNumLevels(o), c = [];
      for (let u = 0; u < a; u++)
        c.push(a0(s, o, u, n));
      i.push(c);
    }
    return i;
  } finally {
    s.close(), s.delete();
  }
}
function a0(e, t, n, s) {
  const r = e.getImageWidth(t, n), i = e.getImageHeight(t, n), o = e.getHasAlpha(), {
    compressed: a,
    format: c,
    basisFormat: u
  } = qa(s, o), l = e.getImageTranscodedSizeInBytes(t, n, u), h = new Uint8Array(l);
  if (!e.transcodeImage(h, t, n, u, 0, 0))
    throw new Error("failed to start Basis transcoding");
  return {
    width: r,
    height: i,
    data: h,
    compressed: a,
    format: c,
    hasAlpha: o
  };
}
function Xi(e, t, n) {
  const s = new e(new Uint8Array(t));
  try {
    if (!s.startTranscoding())
      throw new Error("failed to start KTX2 transcoding");
    const r = s.getLevels(), i = [];
    for (let o = 0; o < r; o++) {
      i.push(c0(s, o, n));
      break;
    }
    return [i];
  } finally {
    s.close(), s.delete();
  }
}
function c0(e, t, n) {
  const {
    alphaFlag: s,
    height: r,
    width: i
  } = e.getImageLevelInfo(t, 0, 0), {
    compressed: o,
    format: a,
    basisFormat: c
  } = qa(n, s), u = e.getImageTranscodedSizeInBytes(t, 0, 0, c), l = new Uint8Array(u);
  if (!e.transcodeImage(l, t, 0, 0, c, 0, -1, -1))
    throw new Error("Failed to transcode KTX2 image");
  return {
    width: i,
    height: r,
    data: l,
    compressed: o,
    levelSize: u,
    hasAlpha: s,
    format: a
  };
}
function qa(e, t) {
  let n = e && e.basis && e.basis.format;
  return n === "auto" && (n = $a()), typeof n == "object" && (n = t ? n.alpha : n.noAlpha), n = n.toLowerCase(), i0[n];
}
function $a() {
  const e = n0();
  return e.has("astc") ? "astc-4x4" : e.has("dxt") ? {
    alpha: "bc3",
    noAlpha: "bc1"
  } : e.has("pvrtc") ? {
    alpha: "pvrtc1-4-rgba",
    noAlpha: "pvrtc1-4-rgb"
  } : e.has("etc1") ? "etc1" : e.has("etc2") ? "etc2" : "rgb565";
}
const u0 = {
  name: "Basis",
  id: "basis",
  module: "textures",
  version: qg,
  worker: !0,
  extensions: ["basis", "ktx2"],
  mimeTypes: ["application/octet-stream", "image/ktx2"],
  tests: ["sB"],
  binary: !0,
  options: {
    basis: {
      format: "auto",
      libraryPath: "libs/",
      containerFormat: "auto",
      module: "transcoder"
    }
  }
}, l0 = {
  ...u0,
  parse: o0
}, ye = !0, Qi = 1735152710, vr = 12, Dn = 8, h0 = 1313821514, f0 = 5130562, d0 = 0, m0 = 0, g0 = 1;
function A0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return `${String.fromCharCode(e.getUint8(t + 0))}${String.fromCharCode(e.getUint8(t + 1))}${String.fromCharCode(e.getUint8(t + 2))}${String.fromCharCode(e.getUint8(t + 3))}`;
}
function p0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const s = new DataView(e), {
    magic: r = Qi
  } = n, i = s.getUint32(t, !1);
  return i === r || i === Qi;
}
function y0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  const s = new DataView(t), r = A0(s, n + 0), i = s.getUint32(n + 4, ye), o = s.getUint32(n + 8, ye);
  switch (Object.assign(e, {
    header: {
      byteOffset: n,
      byteLength: o,
      hasBinChunk: !1
    },
    type: r,
    version: i,
    json: {},
    binChunks: []
  }), n += vr, e.version) {
    case 1:
      return B0(e, s, n);
    case 2:
      return C0(e, s, n, {});
    default:
      throw new Error(`Invalid GLB version ${e.version}. Only supports version 1 and 2.`);
  }
}
function B0(e, t, n) {
  K(e.header.byteLength > vr + Dn);
  const s = t.getUint32(n + 0, ye), r = t.getUint32(n + 4, ye);
  return n += Dn, K(r === d0), Xs(e, t, n, s), n += s, n += Qs(e, t, n, e.header.byteLength), n;
}
function C0(e, t, n, s) {
  return K(e.header.byteLength > vr + Dn), E0(e, t, n, s), n + e.header.byteLength;
}
function E0(e, t, n, s) {
  for (; n + 8 <= e.header.byteLength; ) {
    const r = t.getUint32(n + 0, ye), i = t.getUint32(n + 4, ye);
    switch (n += Dn, i) {
      case h0:
        Xs(e, t, n, r);
        break;
      case f0:
        Qs(e, t, n, r);
        break;
      case m0:
        s.strict || Xs(e, t, n, r);
        break;
      case g0:
        s.strict || Qs(e, t, n, r);
        break;
    }
    n += ze(r, 4);
  }
  return n;
}
function Xs(e, t, n, s) {
  const r = new Uint8Array(t.buffer, n, s), o = new TextDecoder("utf8").decode(r);
  return e.json = JSON.parse(o), ze(s, 4);
}
function Qs(e, t, n, s) {
  return e.header.hasBinChunk = !0, e.binChunks.push({
    byteOffset: n,
    byteLength: s,
    arrayBuffer: t.buffer
  }), ze(s, 4);
}
function Ya(e, t) {
  if (e.startsWith("data:") || e.startsWith("http:") || e.startsWith("https:"))
    return e;
  const s = t.baseUri || t.uri;
  if (!s)
    throw new Error(`'baseUri' must be provided to resolve relative url ${e}`);
  return s.substr(0, s.lastIndexOf("/") + 1) + e;
}
const T0 = "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", b0 = "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", _0 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), w0 = new Uint8Array([32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12, 16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21, 22, 14, 255, 66, 24, 54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144, 27, 87, 131, 44, 45, 74, 156, 154, 70, 167]), R0 = {
  0: "",
  1: "meshopt_decodeFilterOct",
  2: "meshopt_decodeFilterQuat",
  3: "meshopt_decodeFilterExp",
  NONE: "",
  OCTAHEDRAL: "meshopt_decodeFilterOct",
  QUATERNION: "meshopt_decodeFilterQuat",
  EXPONENTIAL: "meshopt_decodeFilterExp"
}, M0 = {
  0: "meshopt_decodeVertexBuffer",
  1: "meshopt_decodeIndexBuffer",
  2: "meshopt_decodeIndexSequence",
  ATTRIBUTES: "meshopt_decodeVertexBuffer",
  TRIANGLES: "meshopt_decodeIndexBuffer",
  INDICES: "meshopt_decodeIndexSequence"
};
async function S0(e, t, n, s, r) {
  let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "NONE";
  const o = await I0();
  F0(o, o.exports[M0[r]], e, t, n, s, o.exports[R0[i || "NONE"]]);
}
let bs;
async function I0() {
  return bs || (bs = x0()), bs;
}
async function x0() {
  let e = T0;
  WebAssembly.validate(_0) && (e = b0, console.log("Warning: meshopt_decoder is using experimental SIMD support"));
  const t = await WebAssembly.instantiate(O0(e), {});
  return await t.instance.exports.__wasm_call_ctors(), t.instance;
}
function O0(e) {
  const t = new Uint8Array(e.length);
  for (let s = 0; s < e.length; ++s) {
    const r = e.charCodeAt(s);
    t[s] = r > 96 ? r - 71 : r > 64 ? r - 65 : r > 47 ? r + 4 : r > 46 ? 63 : 62;
  }
  let n = 0;
  for (let s = 0; s < e.length; ++s)
    t[n++] = t[s] < 60 ? w0[t[s]] : (t[s] - 60) * 64 + t[++s];
  return t.buffer.slice(0, n);
}
function F0(e, t, n, s, r, i, o) {
  const a = e.exports.sbrk, c = s + 3 & -4, u = a(c * r), l = a(i.length), h = new Uint8Array(e.exports.memory.buffer);
  h.set(i, l);
  const f = t(u, s, r, l, i.length);
  if (f === 0 && o && o(u, c, r), n.set(h.subarray(u, u + s * r)), a(u - a(0)), f !== 0)
    throw new Error(`Malformed buffer data: ${f}`);
}
const Ln = "EXT_meshopt_compression", v0 = Ln;
async function D0(e, t) {
  var n, s;
  const r = new it(e);
  if (!(t != null && (n = t.gltf) !== null && n !== void 0 && n.decompressMeshes) || !((s = t.gltf) !== null && s !== void 0 && s.loadBuffers))
    return;
  const i = [];
  for (const o of e.json.bufferViews || [])
    i.push(L0(r, o));
  await Promise.all(i), r.removeExtension(Ln);
}
async function L0(e, t) {
  const n = e.getObjectExtension(t, Ln);
  if (n) {
    const {
      byteOffset: s = 0,
      byteLength: r = 0,
      byteStride: i,
      count: o,
      mode: a,
      filter: c = "NONE",
      buffer: u
    } = n, l = e.gltf.buffers[u], h = new Uint8Array(l.arrayBuffer, l.byteOffset + s, r), f = new Uint8Array(e.gltf.buffers[t.buffer].arrayBuffer, t.byteOffset, t.byteLength);
    await S0(f, o, i, h, a, c), e.removeObjectExtension(t, Ln);
  }
}
const P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: D0,
  name: v0
}, Symbol.toStringTag, { value: "Module" })), de = "EXT_texture_webp", G0 = de;
function N0(e, t) {
  const n = new it(e);
  if (!Wm("image/webp")) {
    if (n.getRequiredExtensions().includes(de))
      throw new Error(`gltf: Required extension ${de} not supported by browser`);
    return;
  }
  const {
    json: s
  } = n;
  for (const r of s.textures || []) {
    const i = n.getObjectExtension(r, de);
    i && (r.source = i.source), n.removeObjectExtension(r, de);
  }
  n.removeExtension(de);
}
const U0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  name: G0,
  preprocess: N0
}, Symbol.toStringTag, { value: "Module" })), bn = "KHR_texture_basisu", H0 = bn;
function J0(e, t) {
  const n = new it(e), {
    json: s
  } = n;
  for (const r of s.textures || []) {
    const i = n.getObjectExtension(r, bn);
    i && (r.source = i.source, n.removeObjectExtension(r, bn));
  }
  n.removeExtension(bn);
}
const V0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  name: H0,
  preprocess: J0
}, Symbol.toStringTag, { value: "Module" }));
function j0(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    if (n !== "indices") {
      const r = Za(s);
      t[n] = r;
    }
  }
  return t;
}
function Za(e) {
  const {
    buffer: t,
    size: n,
    count: s
  } = k0(e);
  return {
    value: t,
    size: n,
    byteOffset: 0,
    count: s,
    type: Ha(n),
    componentType: Mr(t)
  };
}
function k0(e) {
  let t = e, n = 1, s = 0;
  return e && e.value && (t = e.value, n = e.size || 1), t && (ArrayBuffer.isView(t) || (t = K0(t, Float32Array)), s = t.length / n), {
    buffer: t,
    size: n,
    count: s
  };
}
function K0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e ? Array.isArray(e) ? new t(e) : n && !(e instanceof t) ? new t(e) : e : null;
}
const Kt = "KHR_draco_mesh_compression", z0 = Kt;
function W0(e, t, n) {
  const s = new it(e);
  for (const r of tc(s))
    s.getObjectExtension(r, Kt);
}
async function X0(e, t, n) {
  var s;
  if (!(t != null && (s = t.gltf) !== null && s !== void 0 && s.decompressMeshes))
    return;
  const r = new it(e), i = [];
  for (const o of tc(r))
    r.getObjectExtension(o, Kt) && i.push(q0(r, o, t, n));
  await Promise.all(i), r.removeExtension(Kt);
}
function Q0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = new it(e);
  for (const s of n.json.meshes || [])
    $0(s, t), n.addRequiredExtension(Kt);
}
async function q0(e, t, n, s) {
  const r = e.getObjectExtension(t, Kt);
  if (!r)
    return;
  const i = e.getTypedArrayForBufferView(r.bufferView), o = lr(i.buffer, i.byteOffset), a = {
    ...n
  };
  delete a["3d-tiles"];
  const c = await Ke(o, Oa, a, s), u = j0(c.attributes);
  for (const [l, h] of Object.entries(u))
    if (l in t.attributes) {
      const f = t.attributes[l], d = e.getAccessor(f);
      d != null && d.min && d !== null && d !== void 0 && d.max && (h.min = d.min, h.max = d.max);
    }
  t.attributes = u, c.indices && (t.indices = Za(c.indices)), e.removeObjectExtension(t, Kt), Y0(t);
}
function $0(e, t) {
  var n;
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
  if (!r.DracoWriter)
    throw new Error("options.gltf.DracoWriter not provided");
  const o = r.DracoWriter.encodeSync({
    attributes: e
  }), a = i == null || (n = i.parseSync) === null || n === void 0 ? void 0 : n.call(i, {
    attributes: e
  }), c = r._addFauxAttributes(a.attributes), u = r.addBufferView(o);
  return {
    primitives: [{
      attributes: c,
      mode: s,
      extensions: {
        [Kt]: {
          bufferView: u,
          attributes: c
        }
      }
    }]
  };
}
function Y0(e) {
  if (!e.attributes && Object.keys(e.attributes).length > 0)
    throw new Error("glTF: Empty primitive detected: Draco decompression failure?");
}
function* tc(e) {
  for (const t of e.json.meshes || [])
    for (const n of t.primitives)
      yield n;
}
const Z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: X0,
  encode: Q0,
  name: z0,
  preprocess: W0
}, Symbol.toStringTag, { value: "Module" })), Dr = "KHR_texture_transform", tA = Dr, gn = new A(), eA = new W(), nA = new W();
async function sA(e, t) {
  var n;
  if (!new it(e).hasExtension(Dr) || !((n = t.gltf) !== null && n !== void 0 && n.loadBuffers))
    return;
  const i = e.json.materials || [];
  for (let o = 0; o < i.length; o++)
    rA(o, e);
}
function rA(e, t) {
  var n, s, r;
  const i = [], o = (n = t.json.materials) === null || n === void 0 ? void 0 : n[e], a = o == null || (s = o.pbrMetallicRoughness) === null || s === void 0 ? void 0 : s.baseColorTexture;
  a && Me(t, e, a, i);
  const c = o == null ? void 0 : o.emissiveTexture;
  c && Me(t, e, c, i);
  const u = o == null ? void 0 : o.normalTexture;
  u && Me(t, e, u, i);
  const l = o == null ? void 0 : o.occlusionTexture;
  l && Me(t, e, l, i);
  const h = o == null || (r = o.pbrMetallicRoughness) === null || r === void 0 ? void 0 : r.metallicRoughnessTexture;
  h && Me(t, e, h, i);
}
function Me(e, t, n, s) {
  const r = iA(n, s);
  if (!r)
    return;
  const i = e.json.meshes || [];
  for (const o of i)
    for (const a of o.primitives) {
      const c = a.material;
      Number.isFinite(c) && t === c && oA(e, a, r);
    }
}
function iA(e, t) {
  var n;
  const s = (n = e.extensions) === null || n === void 0 ? void 0 : n[Dr], {
    texCoord: r = 0
  } = e, {
    texCoord: i = r
  } = s;
  if (!(t.findIndex((a) => {
    let [c, u] = a;
    return c === r && u === i;
  }) !== -1)) {
    const a = uA(s);
    return r !== i && (e.texCoord = i), t.push([r, i]), {
      originalTexCoord: r,
      texCoord: i,
      matrix: a
    };
  }
  return null;
}
function oA(e, t, n) {
  const {
    originalTexCoord: s,
    texCoord: r,
    matrix: i
  } = n, o = t.attributes[`TEXCOORD_${s}`];
  if (Number.isFinite(o)) {
    var a;
    const u = (a = e.json.accessors) === null || a === void 0 ? void 0 : a[o];
    if (u && u.bufferView) {
      var c;
      const l = (c = e.json.bufferViews) === null || c === void 0 ? void 0 : c[u.bufferView];
      if (l) {
        const {
          arrayBuffer: h,
          byteOffset: f
        } = e.buffers[l.buffer], d = (f || 0) + (u.byteOffset || 0) + (l.byteOffset || 0), {
          ArrayType: m,
          length: g
        } = Sr(u, l), y = Ua[u.componentType], E = Na[u.type], R = l.byteStride || y * E, B = new Float32Array(g);
        for (let C = 0; C < u.count; C++) {
          const M = new m(h, d + C * R, 2);
          gn.set(M[0], M[1], 1), gn.transformByMatrix3(i), B.set([gn[0], gn[1]], C * E);
        }
        s === r ? aA(u, l, e.buffers, B) : cA(r, u, t, e, B);
      }
    }
  }
}
function aA(e, t, n, s) {
  e.componentType = 5126, n.push({
    arrayBuffer: s.buffer,
    byteOffset: 0,
    byteLength: s.buffer.byteLength
  }), t.buffer = n.length - 1, t.byteLength = s.buffer.byteLength, t.byteOffset = 0, delete t.byteStride;
}
function cA(e, t, n, s, r) {
  s.buffers.push({
    arrayBuffer: r.buffer,
    byteOffset: 0,
    byteLength: r.buffer.byteLength
  });
  const i = s.json.bufferViews;
  if (!i)
    return;
  i.push({
    buffer: s.buffers.length - 1,
    byteLength: r.buffer.byteLength,
    byteOffset: 0
  });
  const o = s.json.accessors;
  o && (o.push({
    bufferView: (i == null ? void 0 : i.length) - 1,
    byteOffset: 0,
    componentType: 5126,
    count: t.count,
    type: "VEC2"
  }), n.attributes[`TEXCOORD_${e}`] = o.length - 1);
}
function uA(e) {
  const {
    offset: t = [0, 0],
    rotation: n = 0,
    scale: s = [1, 1]
  } = e, r = new W().set(1, 0, 0, 0, 1, 0, t[0], t[1], 1), i = eA.set(Math.cos(n), Math.sin(n), 0, -Math.sin(n), Math.cos(n), 0, 0, 0, 1), o = nA.set(s[0], 0, 0, 0, s[1], 0, 0, 0, 1);
  return r.multiplyRight(i).multiplyRight(o);
}
const lA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: sA,
  name: tA
}, Symbol.toStringTag, { value: "Module" })), qt = "KHR_lights_punctual", hA = qt;
async function fA(e) {
  const t = new it(e), {
    json: n
  } = t, s = t.getExtension(qt);
  s && (t.json.lights = s.lights, t.removeExtension(qt));
  for (const r of n.nodes || []) {
    const i = t.getObjectExtension(r, qt);
    i && (r.light = i.light), t.removeObjectExtension(r, qt);
  }
}
async function dA(e) {
  const t = new it(e), {
    json: n
  } = t;
  if (n.lights) {
    const s = t.addExtension(qt);
    yt(!s.lights), s.lights = n.lights, delete n.lights;
  }
  if (t.json.lights) {
    for (const s of t.json.lights) {
      const r = s.node;
      t.addObjectExtension(r, qt, s);
    }
    delete t.json.lights;
  }
}
const mA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: fA,
  encode: dA,
  name: hA
}, Symbol.toStringTag, { value: "Module" })), Ue = "KHR_materials_unlit", gA = Ue;
async function AA(e) {
  const t = new it(e), {
    json: n
  } = t;
  for (const s of n.materials || [])
    s.extensions && s.extensions.KHR_materials_unlit && (s.unlit = !0), t.removeObjectExtension(s, Ue);
  t.removeExtension(Ue);
}
function pA(e) {
  const t = new it(e), {
    json: n
  } = t;
  if (t.materials)
    for (const s of n.materials || [])
      s.unlit && (delete s.unlit, t.addObjectExtension(s, Ue, {}), t.addExtension(Ue));
}
const yA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: AA,
  encode: pA,
  name: gA
}, Symbol.toStringTag, { value: "Module" })), xe = "KHR_techniques_webgl", BA = xe;
async function CA(e) {
  const t = new it(e), {
    json: n
  } = t, s = t.getExtension(xe);
  if (s) {
    const r = TA(s, t);
    for (const i of n.materials || []) {
      const o = t.getObjectExtension(i, xe);
      o && (i.technique = Object.assign({}, o, r[o.technique]), i.technique.values = bA(i.technique, t)), t.removeObjectExtension(i, xe);
    }
    t.removeExtension(xe);
  }
}
async function EA(e, t) {
}
function TA(e, t) {
  const {
    programs: n = [],
    shaders: s = [],
    techniques: r = []
  } = e, i = new TextDecoder();
  return s.forEach((o) => {
    if (Number.isFinite(o.bufferView))
      o.code = i.decode(t.getTypedArrayForBufferView(o.bufferView));
    else
      throw new Error("KHR_techniques_webgl: no shader code");
  }), n.forEach((o) => {
    o.fragmentShader = s[o.fragmentShader], o.vertexShader = s[o.vertexShader];
  }), r.forEach((o) => {
    o.program = n[o.program];
  }), r;
}
function bA(e, t) {
  const n = Object.assign({}, e.values);
  return Object.keys(e.uniforms || {}).forEach((s) => {
    e.uniforms[s].value && !(s in n) && (n[s] = e.uniforms[s].value);
  }), Object.keys(n).forEach((s) => {
    typeof n[s] == "object" && n[s].index !== void 0 && (n[s].texture = t.getTexture(n[s].index));
  }), n;
}
const _A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: CA,
  encode: EA,
  name: BA
}, Symbol.toStringTag, { value: "Module" })), ec = [Og, dg, P0, U0, V0, Z0, mA, yA, _A, lA, Xg];
function wA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const s = ec.filter((i) => nc(i.name, t));
  for (const i of s) {
    var r;
    (r = i.preprocess) === null || r === void 0 || r.call(i, e, t, n);
  }
}
async function RA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const s = ec.filter((i) => nc(i.name, t));
  for (const i of s) {
    var r;
    await ((r = i.decode) === null || r === void 0 ? void 0 : r.call(i, e, t, n));
  }
}
function nc(e, t) {
  var n;
  const s = (t == null || (n = t.gltf) === null || n === void 0 ? void 0 : n.excludeExtensions) || {};
  return !(e in s && !s[e]);
}
const _s = "KHR_binary_glTF";
function MA(e) {
  const t = new it(e), {
    json: n
  } = t;
  for (const s of n.images || []) {
    const r = t.getObjectExtension(s, _s);
    r && Object.assign(s, r), t.removeObjectExtension(s, _s);
  }
  n.buffers && n.buffers[0] && delete n.buffers[0].uri, t.removeExtension(_s);
}
const qi = {
  accessors: "accessor",
  animations: "animation",
  buffers: "buffer",
  bufferViews: "bufferView",
  images: "image",
  materials: "material",
  meshes: "mesh",
  nodes: "node",
  samplers: "sampler",
  scenes: "scene",
  skins: "skin",
  textures: "texture"
}, SA = {
  accessor: "accessors",
  animations: "animation",
  buffer: "buffers",
  bufferView: "bufferViews",
  image: "images",
  material: "materials",
  mesh: "meshes",
  node: "nodes",
  sampler: "samplers",
  scene: "scenes",
  skin: "skins",
  texture: "textures"
};
class IA {
  constructor() {
    this.idToIndexMap = {
      animations: {},
      accessors: {},
      buffers: {},
      bufferViews: {},
      images: {},
      materials: {},
      meshes: {},
      nodes: {},
      samplers: {},
      scenes: {},
      skins: {},
      textures: {}
    }, this.json = void 0;
  }
  normalize(t, n) {
    this.json = t.json;
    const s = t.json;
    switch (s.asset && s.asset.version) {
      case "2.0":
        return;
      case void 0:
      case "1.0":
        break;
      default:
        console.warn(`glTF: Unknown version ${s.asset.version}`);
        return;
    }
    if (!n.normalize)
      throw new Error("glTF v1 is not supported.");
    console.warn("Converting glTF v1 to glTF v2 format. This is experimental and may fail."), this._addAsset(s), this._convertTopLevelObjectsToArrays(s), MA(t), this._convertObjectIdsToArrayIndices(s), this._updateObjects(s), this._updateMaterial(s);
  }
  _addAsset(t) {
    t.asset = t.asset || {}, t.asset.version = "2.0", t.asset.generator = t.asset.generator || "Normalized to glTF 2.0 by loaders.gl";
  }
  _convertTopLevelObjectsToArrays(t) {
    for (const n in qi)
      this._convertTopLevelObjectToArray(t, n);
  }
  _convertTopLevelObjectToArray(t, n) {
    const s = t[n];
    if (!(!s || Array.isArray(s))) {
      t[n] = [];
      for (const r in s) {
        const i = s[r];
        i.id = i.id || r;
        const o = t[n].length;
        t[n].push(i), this.idToIndexMap[n][r] = o;
      }
    }
  }
  _convertObjectIdsToArrayIndices(t) {
    for (const n in qi)
      this._convertIdsToIndices(t, n);
    "scene" in t && (t.scene = this._convertIdToIndex(t.scene, "scene"));
    for (const n of t.textures)
      this._convertTextureIds(n);
    for (const n of t.meshes)
      this._convertMeshIds(n);
    for (const n of t.nodes)
      this._convertNodeIds(n);
    for (const n of t.scenes)
      this._convertSceneIds(n);
  }
  _convertTextureIds(t) {
    t.source && (t.source = this._convertIdToIndex(t.source, "image"));
  }
  _convertMeshIds(t) {
    for (const n of t.primitives) {
      const {
        attributes: s,
        indices: r,
        material: i
      } = n;
      for (const o in s)
        s[o] = this._convertIdToIndex(s[o], "accessor");
      r && (n.indices = this._convertIdToIndex(r, "accessor")), i && (n.material = this._convertIdToIndex(i, "material"));
    }
  }
  _convertNodeIds(t) {
    t.children && (t.children = t.children.map((n) => this._convertIdToIndex(n, "node"))), t.meshes && (t.meshes = t.meshes.map((n) => this._convertIdToIndex(n, "mesh")));
  }
  _convertSceneIds(t) {
    t.nodes && (t.nodes = t.nodes.map((n) => this._convertIdToIndex(n, "node")));
  }
  _convertIdsToIndices(t, n) {
    t[n] || (console.warn(`gltf v1: json doesn't contain attribute ${n}`), t[n] = []);
    for (const s of t[n])
      for (const r in s) {
        const i = s[r], o = this._convertIdToIndex(i, r);
        s[r] = o;
      }
  }
  _convertIdToIndex(t, n) {
    const s = SA[n];
    if (s in this.idToIndexMap) {
      const r = this.idToIndexMap[s][t];
      if (!Number.isFinite(r))
        throw new Error(`gltf v1: failed to resolve ${n} with id ${t}`);
      return r;
    }
    return t;
  }
  _updateObjects(t) {
    for (const n of this.json.buffers)
      delete n.type;
  }
  _updateMaterial(t) {
    for (const i of t.materials) {
      var n, s, r;
      i.pbrMetallicRoughness = {
        baseColorFactor: [1, 1, 1, 1],
        metallicFactor: 1,
        roughnessFactor: 1
      };
      const o = ((n = i.values) === null || n === void 0 ? void 0 : n.tex) || ((s = i.values) === null || s === void 0 ? void 0 : s.texture2d_0) || ((r = i.values) === null || r === void 0 ? void 0 : r.diffuseTex), a = t.textures.findIndex((c) => c.id === o);
      a !== -1 && (i.pbrMetallicRoughness.baseColorTexture = {
        index: a
      });
    }
  }
}
function xA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new IA().normalize(e, t);
}
async function OA(e, t) {
  var n, s, r;
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0;
  return FA(e, t, i, o), xA(e, {
    normalize: o == null || (n = o.gltf) === null || n === void 0 ? void 0 : n.normalize
  }), wA(e, o, a), o != null && (s = o.gltf) !== null && s !== void 0 && s.loadBuffers && e.json.buffers && await vA(e, o, a), o != null && (r = o.gltf) !== null && r !== void 0 && r.loadImages && await DA(e, o, a), await RA(e, o, a), e;
}
function FA(e, t, n, s) {
  if (s.uri && (e.baseUri = s.uri), t instanceof ArrayBuffer && !p0(t, n, s) && (t = new TextDecoder().decode(t)), typeof t == "string")
    e.json = Iu(t);
  else if (t instanceof ArrayBuffer) {
    const o = {};
    n = y0(o, t, n, s.glb), yt(o.type === "glTF", `Invalid GLB magic string ${o.type}`), e._glb = o, e.json = o.json;
  } else
    yt(!1, "GLTF: must be ArrayBuffer or string");
  const r = e.json.buffers || [];
  if (e.buffers = new Array(r.length).fill(null), e._glb && e._glb.header.hasBinChunk) {
    const {
      binChunks: o
    } = e._glb;
    e.buffers[0] = {
      arrayBuffer: o[0].arrayBuffer,
      byteOffset: o[0].byteOffset,
      byteLength: o[0].byteLength
    };
  }
  const i = e.json.images || [];
  e.images = new Array(i.length).fill({});
}
async function vA(e, t, n) {
  const s = e.json.buffers || [];
  for (let o = 0; o < s.length; ++o) {
    const a = s[o];
    if (a.uri) {
      var r, i;
      const {
        fetch: c
      } = n;
      yt(c);
      const u = Ya(a.uri, t), l = await (n == null || (r = n.fetch) === null || r === void 0 ? void 0 : r.call(n, u)), h = await (l == null || (i = l.arrayBuffer) === null || i === void 0 ? void 0 : i.call(l));
      e.buffers[o] = {
        arrayBuffer: h,
        byteOffset: 0,
        byteLength: h.byteLength
      }, delete a.uri;
    } else e.buffers[o] === null && (e.buffers[o] = {
      arrayBuffer: new ArrayBuffer(a.byteLength),
      byteOffset: 0,
      byteLength: a.byteLength
    });
  }
}
async function DA(e, t, n) {
  const s = LA(e), r = e.json.images || [], i = [];
  for (const o of s)
    i.push(PA(e, r[o], o, t, n));
  return await Promise.all(i);
}
function LA(e) {
  const t = /* @__PURE__ */ new Set(), n = e.json.textures || [];
  for (const s of n)
    s.source !== void 0 && t.add(s.source);
  return Array.from(t).sort();
}
async function PA(e, t, n, s, r) {
  let i;
  if (t.uri && !t.hasOwnProperty("bufferView")) {
    const a = Ya(t.uri, s), {
      fetch: c
    } = r;
    i = await (await c(a)).arrayBuffer(), t.bufferView = {
      data: i
    };
  }
  if (Number.isFinite(t.bufferView)) {
    const a = sg(e.json, e.buffers, t.bufferView);
    i = lr(a.buffer, a.byteOffset, a.byteLength);
  }
  yt(i, "glTF image has no data");
  let o = await Ke(i, [zm, l0], {
    ...s,
    mimeType: t.mimeType,
    basis: s.basis || {
      format: $a()
    }
  }, r);
  o && o[0] && (o = {
    compressed: !0,
    mipmaps: !1,
    width: o[0].width,
    height: o[0].height,
    data: o[0]
  }), e.images = e.images || [], e.images[n] = o;
}
const Pn = {
  name: "glTF",
  id: "gltf",
  module: "gltf",
  version: Qg,
  extensions: ["gltf", "glb"],
  mimeTypes: ["model/gltf+json", "model/gltf-binary"],
  text: !0,
  binary: !0,
  tests: ["glTF"],
  parse: GA,
  options: {
    gltf: {
      normalize: !0,
      loadBuffers: !0,
      loadImages: !0,
      decompressMeshes: !0
    },
    log: console
  }
};
async function GA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  t = {
    ...Pn.options,
    ...t
  }, t.gltf = {
    ...Pn.options.gltf,
    ...t.gltf
  };
  const {
    byteOffset: s = 0
  } = t;
  return await OA({}, e, s, t, n);
}
const NA = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, UA = {
  5120: 1,
  5121: 1,
  5122: 2,
  5123: 2,
  5125: 4,
  5126: 4
}, Bt = {
  TEXTURE_MAG_FILTER: 10240,
  TEXTURE_MIN_FILTER: 10241,
  TEXTURE_WRAP_S: 10242,
  TEXTURE_WRAP_T: 10243,
  REPEAT: 10497,
  LINEAR: 9729,
  NEAREST_MIPMAP_LINEAR: 9986
}, HA = {
  magFilter: Bt.TEXTURE_MAG_FILTER,
  minFilter: Bt.TEXTURE_MIN_FILTER,
  wrapS: Bt.TEXTURE_WRAP_S,
  wrapT: Bt.TEXTURE_WRAP_T
}, JA = {
  [Bt.TEXTURE_MAG_FILTER]: Bt.LINEAR,
  [Bt.TEXTURE_MIN_FILTER]: Bt.NEAREST_MIPMAP_LINEAR,
  [Bt.TEXTURE_WRAP_S]: Bt.REPEAT,
  [Bt.TEXTURE_WRAP_T]: Bt.REPEAT
};
function VA() {
  return {
    id: "default-sampler",
    parameters: JA
  };
}
function jA(e) {
  return UA[e];
}
function kA(e) {
  return NA[e];
}
class KA {
  constructor() {
    this.baseUri = "", this.jsonUnprocessed = void 0, this.json = void 0, this.buffers = [], this.images = [];
  }
  postProcess(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      json: s,
      buffers: r = [],
      images: i = []
    } = t, {
      baseUri: o = ""
    } = t;
    return yt(s), this.baseUri = o, this.buffers = r, this.images = i, this.jsonUnprocessed = s, this.json = this._resolveTree(t.json, n), this.json;
  }
  _resolveTree(t) {
    const n = {
      ...t
    };
    return this.json = n, t.bufferViews && (n.bufferViews = t.bufferViews.map((s, r) => this._resolveBufferView(s, r))), t.images && (n.images = t.images.map((s, r) => this._resolveImage(s, r))), t.samplers && (n.samplers = t.samplers.map((s, r) => this._resolveSampler(s, r))), t.textures && (n.textures = t.textures.map((s, r) => this._resolveTexture(s, r))), t.accessors && (n.accessors = t.accessors.map((s, r) => this._resolveAccessor(s, r))), t.materials && (n.materials = t.materials.map((s, r) => this._resolveMaterial(s, r))), t.meshes && (n.meshes = t.meshes.map((s, r) => this._resolveMesh(s, r))), t.nodes && (n.nodes = t.nodes.map((s, r) => this._resolveNode(s, r)), n.nodes = n.nodes.map((s, r) => this._resolveNodeChildren(s))), t.skins && (n.skins = t.skins.map((s, r) => this._resolveSkin(s, r))), t.scenes && (n.scenes = t.scenes.map((s, r) => this._resolveScene(s, r))), typeof this.json.scene == "number" && n.scenes && (n.scene = n.scenes[this.json.scene]), n;
  }
  getScene(t) {
    return this._get(this.json.scenes, t);
  }
  getNode(t) {
    return this._get(this.json.nodes, t);
  }
  getSkin(t) {
    return this._get(this.json.skins, t);
  }
  getMesh(t) {
    return this._get(this.json.meshes, t);
  }
  getMaterial(t) {
    return this._get(this.json.materials, t);
  }
  getAccessor(t) {
    return this._get(this.json.accessors, t);
  }
  getCamera(t) {
    return this._get(this.json.cameras, t);
  }
  getTexture(t) {
    return this._get(this.json.textures, t);
  }
  getSampler(t) {
    return this._get(this.json.samplers, t);
  }
  getImage(t) {
    return this._get(this.json.images, t);
  }
  getBufferView(t) {
    return this._get(this.json.bufferViews, t);
  }
  getBuffer(t) {
    return this._get(this.json.buffers, t);
  }
  _get(t, n) {
    if (typeof n == "object")
      return n;
    const s = t && t[n];
    return s || console.warn(`glTF file error: Could not find ${t}[${n}]`), s;
  }
  _resolveScene(t, n) {
    return {
      ...t,
      id: t.id || `scene-${n}`,
      nodes: (t.nodes || []).map((s) => this.getNode(s))
    };
  }
  _resolveNode(t, n) {
    const s = {
      ...t,
      id: (t == null ? void 0 : t.id) || `node-${n}`
    };
    return t.mesh !== void 0 && (s.mesh = this.getMesh(t.mesh)), t.camera !== void 0 && (s.camera = this.getCamera(t.camera)), t.skin !== void 0 && (s.skin = this.getSkin(t.skin)), t.meshes !== void 0 && t.meshes.length && (s.mesh = t.meshes.reduce((r, i) => {
      const o = this.getMesh(i);
      return r.id = o.id, r.primitives = r.primitives.concat(o.primitives), r;
    }, {
      primitives: []
    })), s;
  }
  _resolveNodeChildren(t) {
    return t.children && (t.children = t.children.map((n) => this.getNode(n))), t;
  }
  _resolveSkin(t, n) {
    const s = typeof t.inverseBindMatrices == "number" ? this.getAccessor(t.inverseBindMatrices) : void 0;
    return {
      ...t,
      id: t.id || `skin-${n}`,
      inverseBindMatrices: s
    };
  }
  _resolveMesh(t, n) {
    const s = {
      ...t,
      id: t.id || `mesh-${n}`,
      primitives: []
    };
    return t.primitives && (s.primitives = t.primitives.map((r) => {
      const i = {
        ...r,
        attributes: {},
        indices: void 0,
        material: void 0
      }, o = r.attributes;
      for (const a in o)
        i.attributes[a] = this.getAccessor(o[a]);
      return r.indices !== void 0 && (i.indices = this.getAccessor(r.indices)), r.material !== void 0 && (i.material = this.getMaterial(r.material)), i;
    })), s;
  }
  _resolveMaterial(t, n) {
    const s = {
      ...t,
      id: t.id || `material-${n}`
    };
    if (s.normalTexture && (s.normalTexture = {
      ...s.normalTexture
    }, s.normalTexture.texture = this.getTexture(s.normalTexture.index)), s.occlusionTexture && (s.occlusionTexture = {
      ...s.occlusionTexture
    }, s.occlusionTexture.texture = this.getTexture(s.occlusionTexture.index)), s.emissiveTexture && (s.emissiveTexture = {
      ...s.emissiveTexture
    }, s.emissiveTexture.texture = this.getTexture(s.emissiveTexture.index)), s.emissiveFactor || (s.emissiveFactor = s.emissiveTexture ? [1, 1, 1] : [0, 0, 0]), s.pbrMetallicRoughness) {
      s.pbrMetallicRoughness = {
        ...s.pbrMetallicRoughness
      };
      const r = s.pbrMetallicRoughness;
      r.baseColorTexture && (r.baseColorTexture = {
        ...r.baseColorTexture
      }, r.baseColorTexture.texture = this.getTexture(r.baseColorTexture.index)), r.metallicRoughnessTexture && (r.metallicRoughnessTexture = {
        ...r.metallicRoughnessTexture
      }, r.metallicRoughnessTexture.texture = this.getTexture(r.metallicRoughnessTexture.index));
    }
    return s;
  }
  _resolveAccessor(t, n) {
    const s = jA(t.componentType), r = kA(t.type), i = s * r, o = {
      ...t,
      id: t.id || `accessor-${n}`,
      bytesPerComponent: s,
      components: r,
      bytesPerElement: i,
      value: void 0,
      bufferView: void 0,
      sparse: void 0
    };
    if (t.bufferView !== void 0 && (o.bufferView = this.getBufferView(t.bufferView)), o.bufferView) {
      const a = o.bufferView.buffer, {
        ArrayType: c,
        byteLength: u
      } = Sr(o, o.bufferView), l = (o.bufferView.byteOffset || 0) + (o.byteOffset || 0) + a.byteOffset;
      let h = a.arrayBuffer.slice(l, l + u);
      o.bufferView.byteStride && (h = this._getValueFromInterleavedBuffer(a, l, o.bufferView.byteStride, o.bytesPerElement, o.count)), o.value = new c(h);
    }
    return o;
  }
  _getValueFromInterleavedBuffer(t, n, s, r, i) {
    const o = new Uint8Array(i * r);
    for (let a = 0; a < i; a++) {
      const c = n + a * s;
      o.set(new Uint8Array(t.arrayBuffer.slice(c, c + r)), a * r);
    }
    return o.buffer;
  }
  _resolveTexture(t, n) {
    return {
      ...t,
      id: t.id || `texture-${n}`,
      sampler: typeof t.sampler == "number" ? this.getSampler(t.sampler) : VA(),
      source: typeof t.source == "number" ? this.getImage(t.source) : void 0
    };
  }
  _resolveSampler(t, n) {
    const s = {
      id: t.id || `sampler-${n}`,
      ...t,
      parameters: {}
    };
    for (const r in s) {
      const i = this._enumSamplerParameter(r);
      i !== void 0 && (s.parameters[i] = s[r]);
    }
    return s;
  }
  _enumSamplerParameter(t) {
    return HA[t];
  }
  _resolveImage(t, n) {
    const s = {
      ...t,
      id: t.id || `image-${n}`,
      image: null,
      bufferView: t.bufferView !== void 0 ? this.getBufferView(t.bufferView) : void 0
    }, r = this.images[n];
    return r && (s.image = r), s;
  }
  _resolveBufferView(t, n) {
    const s = t.buffer, r = this.buffers[s].arrayBuffer;
    let i = this.buffers[s].byteOffset || 0;
    return t.byteOffset && (i += t.byteOffset), {
      id: `bufferView-${n}`,
      ...t,
      buffer: this.buffers[s],
      data: new Uint8Array(r, i, t.byteLength)
    };
  }
  _resolveCamera(t, n) {
    const s = {
      ...t,
      id: t.id || `camera-${n}`
    };
    return s.perspective, s.orthographic, s;
  }
}
function sc(e, t) {
  return new KA().postProcess(e, t);
}
const qs = {
  URI: 0,
  EMBEDDED: 1
};
function rc(e, t, n, s) {
  e.rotateYtoZ = !0;
  const r = (e.byteOffset || 0) + (e.byteLength || 0) - n;
  if (r === 0)
    throw new Error("glTF byte length must be greater than 0.");
  return e.gltfUpAxis = s != null && s["3d-tiles"] && s["3d-tiles"].assetGltfUpAxis ? s["3d-tiles"].assetGltfUpAxis : "Y", e.gltfArrayBuffer = lr(t, n, r), e.gltfByteOffset = 0, e.gltfByteLength = r, n % 4 === 0 || console.warn(`${e.type}: embedded glb is not aligned to a 4-byte boundary.`), (e.byteOffset || 0) + (e.byteLength || 0);
}
async function ic(e, t, n, s) {
  const r = (n == null ? void 0 : n["3d-tiles"]) || {};
  if (zA(e, t), r.loadGLTF) {
    if (!s)
      return;
    if (e.gltfUrl) {
      const {
        fetch: i
      } = s, o = await i(e.gltfUrl, n);
      e.gltfArrayBuffer = await o.arrayBuffer(), e.gltfByteOffset = 0;
    }
    if (e.gltfArrayBuffer) {
      const i = await Ke(e.gltfArrayBuffer, Pn, n, s);
      e.gltf = sc(i), e.gpuMemoryUsageInBytes = Ja(e.gltf), delete e.gltfArrayBuffer, delete e.gltfByteOffset, delete e.gltfByteLength;
    }
  }
}
function zA(e, t, n) {
  switch (t) {
    case qs.URI:
      if (e.gltfArrayBuffer) {
        const s = new Uint8Array(e.gltfArrayBuffer, e.gltfByteOffset), i = new TextDecoder().decode(s);
        e.gltfUrl = i.replace(/[\s\0]+$/, "");
      }
      delete e.gltfArrayBuffer, delete e.gltfByteOffset, delete e.gltfByteLength;
      break;
    case qs.EMBEDDED:
      break;
    default:
      throw new Error("b3dm: Illegal glTF format field");
  }
}
async function WA(e, t, n, s, r) {
  var i;
  n = XA(e, t, n, s), await ic(e, qs.EMBEDDED, s, r);
  const o = e == null || (i = e.gltf) === null || i === void 0 ? void 0 : i.extensions;
  return o && o.CESIUM_RTC && (e.rtcCenter = o.CESIUM_RTC.center), n;
}
function XA(e, t, n, s, r) {
  n = Xn(e, t, n), n = br(e, t, n), n = _r(e, t, n), n = rc(e, t, n, s);
  const i = new Tr(e.featureTableJson, e.featureTableBinary);
  return e.rtcCenter = i.getGlobalProperty("RTC_CENTER", G.FLOAT, 3), n;
}
async function QA(e, t, n, s, r) {
  return n = qA(e, t, n, s), await ic(e, e.gltfFormat || 0, s, r), n;
}
function qA(e, t, n, s, r) {
  var i;
  if (n = Xn(e, t, n), e.version !== 1)
    throw new Error(`Instanced 3D Model version ${e.version} is not supported`);
  n = br(e, t, n);
  const o = new DataView(t);
  if (e.gltfFormat = o.getUint32(n, !0), n += 4, n = _r(e, t, n), n = rc(e, t, n, s), !(e != null && (i = e.header) !== null && i !== void 0 && i.featureTableJsonByteLength) || e.header.featureTableJsonByteLength === 0)
    throw new Error("i3dm parser: featureTableJsonByteLength is zero.");
  const a = new Tr(e.featureTableJson, e.featureTableBinary), c = a.getGlobalProperty("INSTANCES_LENGTH");
  if (a.featuresLength = c, !Number.isFinite(c))
    throw new Error("i3dm parser: INSTANCES_LENGTH must be defined");
  e.eastNorthUp = a.getGlobalProperty("EAST_NORTH_UP"), e.rtcCenter = a.getGlobalProperty("RTC_CENTER", G.FLOAT, 3);
  const u = new va(e.batchTableJson, e.batchTableBinary, c);
  return $A(e, a, u, c), n;
}
function $A(e, t, n, s) {
  const r = new Array(s), i = new A();
  new A(), new A(), new A();
  const o = new W(), a = new xn(), c = new A(), u = {}, l = new V(), h = [], f = [], d = [], m = [];
  for (let g = 0; g < s; g++) {
    let y;
    if (t.hasProperty("POSITION"))
      y = t.getProperty("POSITION", G.FLOAT, 3, g, i);
    else if (t.hasProperty("POSITION_QUANTIZED")) {
      y = t.getProperty("POSITION_QUANTIZED", G.UNSIGNED_SHORT, 3, g, i);
      const b = t.getGlobalProperty("QUANTIZED_VOLUME_OFFSET", G.FLOAT, 3);
      if (!b)
        throw new Error("i3dm parser: QUANTIZED_VOLUME_OFFSET must be defined for quantized positions.");
      const F = t.getGlobalProperty("QUANTIZED_VOLUME_SCALE", G.FLOAT, 3);
      if (!F)
        throw new Error("i3dm parser: QUANTIZED_VOLUME_SCALE must be defined for quantized positions.");
      const v = 65535;
      for (let O = 0; O < 3; O++)
        y[O] = y[O] / v * F[O] + b[O];
    }
    if (!y)
      throw new Error("i3dm: POSITION or POSITION_QUANTIZED must be defined for each instance.");
    if (i.copy(y), u.translation = i, e.normalUp = t.getProperty("NORMAL_UP", G.FLOAT, 3, g, h), e.normalRight = t.getProperty("NORMAL_RIGHT", G.FLOAT, 3, g, f), e.normalUp) {
      if (!e.normalRight)
        throw new Error("i3dm: Custom orientation requires both NORMAL_UP and NORMAL_RIGHT.");
      e.hasCustomOrientation = !0;
    } else {
      if (e.octNormalUp = t.getProperty("NORMAL_UP_OCT32P", G.UNSIGNED_SHORT, 2, g, h), e.octNormalRight = t.getProperty("NORMAL_RIGHT_OCT32P", G.UNSIGNED_SHORT, 2, g, f), e.octNormalUp)
        throw e.octNormalRight ? new Error("i3dm: oct-encoded orientation not implemented") : new Error("i3dm: oct-encoded orientation requires NORMAL_UP_OCT32P and NORMAL_RIGHT_OCT32P");
      e.eastNorthUp ? (J.WGS84.eastNorthUpToFixedFrame(i, l), l.getRotationMatrix3(o)) : o.identity();
    }
    a.fromMatrix3(o), u.rotation = a, c.set(1, 1, 1);
    const E = t.getProperty("SCALE", G.FLOAT, 1, g, d);
    Number.isFinite(E) && c.multiplyByScalar(E);
    const R = t.getProperty("SCALE_NON_UNIFORM", G.FLOAT, 3, g, h);
    R && c.scale(R), u.scale = c;
    let B = t.getProperty("BATCH_ID", G.UNSIGNED_SHORT, 1, g, m);
    B === void 0 && (B = g);
    const C = new V().fromQuaternion(u.rotation);
    l.identity(), l.translate(u.translation), l.multiplyRight(C), l.scale(u.scale);
    const M = l.clone();
    r[g] = {
      modelMatrix: M,
      batchId: B
    };
  }
  e.instances = r;
}
async function YA(e, t, n, s, r, i) {
  n = Xn(e, t, n);
  const o = new DataView(t);
  for (e.tilesLength = o.getUint32(n, !0), n += 4, e.tiles = []; e.tiles.length < e.tilesLength && (e.byteLength || 0) - n > 12; ) {
    const a = {
      shape: "tile3d"
    };
    e.tiles.push(a), n = await i(t, n, s, r, a);
  }
  return n;
}
async function ZA(e, t, n, s) {
  var r, i;
  if (e.rotateYtoZ = !0, e.gltfUpAxis = n != null && (r = n["3d-tiles"]) !== null && r !== void 0 && r.assetGltfUpAxis ? n["3d-tiles"].assetGltfUpAxis : "Y", n != null && (i = n["3d-tiles"]) !== null && i !== void 0 && i.loadGLTF) {
    if (!s)
      return t.byteLength;
    const o = await Ke(t, Pn, n, s);
    e.gltf = sc(o), e.gpuMemoryUsageInBytes = Ja(e.gltf);
  } else
    e.gltfArrayBuffer = t;
  return t.byteLength;
}
async function oc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
    shape: "tile3d"
  };
  switch (r.byteOffset = t, r.type = Ed(e, t), r.type) {
    case _e.COMPOSITE:
      return await YA(r, e, t, n, s, oc);
    case _e.BATCHED_3D_MODEL:
      return await WA(r, e, t, n, s);
    case _e.GLTF:
      return await ZA(r, e, n, s);
    case _e.INSTANCED_3D_MODEL:
      return await QA(r, e, t, n, s);
    case _e.POINT_CLOUD:
      return await im(r, e, t, n, s);
    default:
      throw new Error(`3DTileLoader: unknown type ${r.type}`);
  }
}
const tp = 1952609651, ep = 1;
async function np(e, t, n) {
  if (new Uint32Array(e.slice(0, 4))[0] !== tp)
    throw new Error("Wrong subtree file magic number");
  if (new Uint32Array(e.slice(4, 8))[0] !== ep)
    throw new Error("Wrong subtree file verson, must be 1");
  const i = $i(e.slice(8, 16)), o = new Uint8Array(e, 24, i), c = new TextDecoder("utf8").decode(o), u = JSON.parse(c), l = $i(e.slice(16, 24));
  let h = new ArrayBuffer(0);
  if (l && (h = e.slice(24 + i)), await An(u, u.tileAvailability, h, n), Array.isArray(u.contentAvailability))
    for (const f of u.contentAvailability)
      await An(u, f, h, n);
  else
    await An(u, u.contentAvailability, h, n);
  return await An(u, u.childSubtreeAvailability, h, n), u;
}
async function An(e, t, n, s) {
  const r = Number.isFinite(t.bitstream) ? t.bitstream : t.bufferView;
  if (typeof r != "number")
    return;
  const i = e.bufferViews[r], o = e.buffers[i.buffer];
  if (!(s != null && s.baseUrl))
    throw new Error("Url is not provided");
  if (!s.fetch)
    throw new Error("fetch is not provided");
  if (o.uri) {
    const c = `${(s == null ? void 0 : s.baseUrl) || ""}/${o.uri}`, l = await (await s.fetch(c)).arrayBuffer();
    t.explicitBitstream = new Uint8Array(l, i.byteOffset, i.byteLength);
    return;
  }
  const a = e.buffers.slice(0, i.buffer).reduce((c, u) => c + u.byteLength, 0);
  t.explicitBitstream = new Uint8Array(n.slice(a, a + o.byteLength), i.byteOffset, i.byteLength);
}
function $i(e) {
  const t = new DataView(e), n = t.getUint32(0, !0), s = t.getUint32(4, !0);
  return n + 2 ** 32 * s;
}
const ac = {
  id: "3d-tiles-subtree",
  name: "3D Tiles Subtree",
  module: "3d-tiles",
  version: Sa,
  extensions: ["subtree"],
  mimeTypes: ["application/octet-stream"],
  tests: ["subtree"],
  parse: np,
  options: {}
};
/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
var Ct = null;
try {
  Ct = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    13,
    2,
    96,
    0,
    1,
    127,
    96,
    4,
    127,
    127,
    127,
    127,
    1,
    127,
    3,
    7,
    6,
    0,
    1,
    1,
    1,
    1,
    1,
    6,
    6,
    1,
    127,
    1,
    65,
    0,
    11,
    7,
    50,
    6,
    3,
    109,
    117,
    108,
    0,
    1,
    5,
    100,
    105,
    118,
    95,
    115,
    0,
    2,
    5,
    100,
    105,
    118,
    95,
    117,
    0,
    3,
    5,
    114,
    101,
    109,
    95,
    115,
    0,
    4,
    5,
    114,
    101,
    109,
    95,
    117,
    0,
    5,
    8,
    103,
    101,
    116,
    95,
    104,
    105,
    103,
    104,
    0,
    0,
    10,
    191,
    1,
    6,
    4,
    0,
    35,
    0,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    126,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    127,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    128,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    129,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    130,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11
  ])), {}).exports;
} catch {
}
function H(e, t, n) {
  this.low = e | 0, this.high = t | 0, this.unsigned = !!n;
}
H.prototype.__isLong__;
Object.defineProperty(H.prototype, "__isLong__", { value: !0 });
function ot(e) {
  return (e && e.__isLong__) === !0;
}
function Yi(e) {
  var t = Math.clz32(e & -e);
  return e ? 31 - t : t;
}
H.isLong = ot;
var Zi = {}, to = {};
function re(e, t) {
  var n, s, r;
  return t ? (e >>>= 0, (r = 0 <= e && e < 256) && (s = to[e], s) ? s : (n = N(e, 0, !0), r && (to[e] = n), n)) : (e |= 0, (r = -128 <= e && e < 128) && (s = Zi[e], s) ? s : (n = N(e, e < 0 ? -1 : 0, !1), r && (Zi[e] = n), n));
}
H.fromInt = re;
function Et(e, t) {
  if (isNaN(e))
    return t ? Nt : Mt;
  if (t) {
    if (e < 0)
      return Nt;
    if (e >= cc)
      return hc;
  } else {
    if (e <= -no)
      return mt;
    if (e + 1 >= no)
      return lc;
  }
  return e < 0 ? Et(-e, t).neg() : N(e % Be | 0, e / Be | 0, t);
}
H.fromNumber = Et;
function N(e, t, n) {
  return new H(e, t, n);
}
H.fromBits = N;
var Gn = Math.pow;
function Lr(e, t, n) {
  if (e.length === 0)
    throw Error("empty string");
  if (typeof t == "number" ? (n = t, t = !1) : t = !!t, e === "NaN" || e === "Infinity" || e === "+Infinity" || e === "-Infinity")
    return t ? Nt : Mt;
  if (n = n || 10, n < 2 || 36 < n)
    throw RangeError("radix");
  var s;
  if ((s = e.indexOf("-")) > 0)
    throw Error("interior hyphen");
  if (s === 0)
    return Lr(e.substring(1), t, n).neg();
  for (var r = Et(Gn(n, 8)), i = Mt, o = 0; o < e.length; o += 8) {
    var a = Math.min(8, e.length - o), c = parseInt(e.substring(o, o + a), n);
    if (a < 8) {
      var u = Et(Gn(n, a));
      i = i.mul(u).add(Et(c));
    } else
      i = i.mul(r), i = i.add(Et(c));
  }
  return i.unsigned = t, i;
}
H.fromString = Lr;
function It(e, t) {
  return typeof e == "number" ? Et(e, t) : typeof e == "string" ? Lr(e, t) : N(e.low, e.high, typeof t == "boolean" ? t : e.unsigned);
}
H.fromValue = It;
var eo = 65536, sp = 1 << 24, Be = eo * eo, cc = Be * Be, no = cc / 2, so = re(sp), Mt = re(0);
H.ZERO = Mt;
var Nt = re(0, !0);
H.UZERO = Nt;
var me = re(1);
H.ONE = me;
var uc = re(1, !0);
H.UONE = uc;
var $s = re(-1);
H.NEG_ONE = $s;
var lc = N(-1, 2147483647, !1);
H.MAX_VALUE = lc;
var hc = N(-1, -1, !0);
H.MAX_UNSIGNED_VALUE = hc;
var mt = N(0, -2147483648, !1);
H.MIN_VALUE = mt;
var _ = H.prototype;
_.toInt = function() {
  return this.unsigned ? this.low >>> 0 : this.low;
};
_.toNumber = function() {
  return this.unsigned ? (this.high >>> 0) * Be + (this.low >>> 0) : this.high * Be + (this.low >>> 0);
};
_.toString = function(t) {
  if (t = t || 10, t < 2 || 36 < t)
    throw RangeError("radix");
  if (this.isZero())
    return "0";
  if (this.isNegative())
    if (this.eq(mt)) {
      var n = Et(t), s = this.div(n), r = s.mul(n).sub(this);
      return s.toString(t) + r.toInt().toString(t);
    } else
      return "-" + this.neg().toString(t);
  for (var i = Et(Gn(t, 6), this.unsigned), o = this, a = ""; ; ) {
    var c = o.div(i), u = o.sub(c.mul(i)).toInt() >>> 0, l = u.toString(t);
    if (o = c, o.isZero())
      return l + a;
    for (; l.length < 6; )
      l = "0" + l;
    a = "" + l + a;
  }
};
_.getHighBits = function() {
  return this.high;
};
_.getHighBitsUnsigned = function() {
  return this.high >>> 0;
};
_.getLowBits = function() {
  return this.low;
};
_.getLowBitsUnsigned = function() {
  return this.low >>> 0;
};
_.getNumBitsAbs = function() {
  if (this.isNegative())
    return this.eq(mt) ? 64 : this.neg().getNumBitsAbs();
  for (var t = this.high != 0 ? this.high : this.low, n = 31; n > 0 && !(t & 1 << n); n--)
    ;
  return this.high != 0 ? n + 33 : n + 1;
};
_.isZero = function() {
  return this.high === 0 && this.low === 0;
};
_.eqz = _.isZero;
_.isNegative = function() {
  return !this.unsigned && this.high < 0;
};
_.isPositive = function() {
  return this.unsigned || this.high >= 0;
};
_.isOdd = function() {
  return (this.low & 1) === 1;
};
_.isEven = function() {
  return (this.low & 1) === 0;
};
_.equals = function(t) {
  return ot(t) || (t = It(t)), this.unsigned !== t.unsigned && this.high >>> 31 === 1 && t.high >>> 31 === 1 ? !1 : this.high === t.high && this.low === t.low;
};
_.eq = _.equals;
_.notEquals = function(t) {
  return !this.eq(
    /* validates */
    t
  );
};
_.neq = _.notEquals;
_.ne = _.notEquals;
_.lessThan = function(t) {
  return this.comp(
    /* validates */
    t
  ) < 0;
};
_.lt = _.lessThan;
_.lessThanOrEqual = function(t) {
  return this.comp(
    /* validates */
    t
  ) <= 0;
};
_.lte = _.lessThanOrEqual;
_.le = _.lessThanOrEqual;
_.greaterThan = function(t) {
  return this.comp(
    /* validates */
    t
  ) > 0;
};
_.gt = _.greaterThan;
_.greaterThanOrEqual = function(t) {
  return this.comp(
    /* validates */
    t
  ) >= 0;
};
_.gte = _.greaterThanOrEqual;
_.ge = _.greaterThanOrEqual;
_.compare = function(t) {
  if (ot(t) || (t = It(t)), this.eq(t))
    return 0;
  var n = this.isNegative(), s = t.isNegative();
  return n && !s ? -1 : !n && s ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1;
};
_.comp = _.compare;
_.negate = function() {
  return !this.unsigned && this.eq(mt) ? mt : this.not().add(me);
};
_.neg = _.negate;
_.add = function(t) {
  ot(t) || (t = It(t));
  var n = this.high >>> 16, s = this.high & 65535, r = this.low >>> 16, i = this.low & 65535, o = t.high >>> 16, a = t.high & 65535, c = t.low >>> 16, u = t.low & 65535, l = 0, h = 0, f = 0, d = 0;
  return d += i + u, f += d >>> 16, d &= 65535, f += r + c, h += f >>> 16, f &= 65535, h += s + a, l += h >>> 16, h &= 65535, l += n + o, l &= 65535, N(f << 16 | d, l << 16 | h, this.unsigned);
};
_.subtract = function(t) {
  return ot(t) || (t = It(t)), this.add(t.neg());
};
_.sub = _.subtract;
_.multiply = function(t) {
  if (this.isZero())
    return this;
  if (ot(t) || (t = It(t)), Ct) {
    var n = Ct.mul(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return N(n, Ct.get_high(), this.unsigned);
  }
  if (t.isZero())
    return this.unsigned ? Nt : Mt;
  if (this.eq(mt))
    return t.isOdd() ? mt : Mt;
  if (t.eq(mt))
    return this.isOdd() ? mt : Mt;
  if (this.isNegative())
    return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
  if (t.isNegative())
    return this.mul(t.neg()).neg();
  if (this.lt(so) && t.lt(so))
    return Et(this.toNumber() * t.toNumber(), this.unsigned);
  var s = this.high >>> 16, r = this.high & 65535, i = this.low >>> 16, o = this.low & 65535, a = t.high >>> 16, c = t.high & 65535, u = t.low >>> 16, l = t.low & 65535, h = 0, f = 0, d = 0, m = 0;
  return m += o * l, d += m >>> 16, m &= 65535, d += i * l, f += d >>> 16, d &= 65535, d += o * u, f += d >>> 16, d &= 65535, f += r * l, h += f >>> 16, f &= 65535, f += i * u, h += f >>> 16, f &= 65535, f += o * c, h += f >>> 16, f &= 65535, h += s * l + r * u + i * c + o * a, h &= 65535, N(d << 16 | m, h << 16 | f, this.unsigned);
};
_.mul = _.multiply;
_.divide = function(t) {
  if (ot(t) || (t = It(t)), t.isZero())
    throw Error("division by zero");
  if (Ct) {
    if (!this.unsigned && this.high === -2147483648 && t.low === -1 && t.high === -1)
      return this;
    var n = (this.unsigned ? Ct.div_u : Ct.div_s)(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return N(n, Ct.get_high(), this.unsigned);
  }
  if (this.isZero())
    return this.unsigned ? Nt : Mt;
  var s, r, i;
  if (this.unsigned) {
    if (t.unsigned || (t = t.toUnsigned()), t.gt(this))
      return Nt;
    if (t.gt(this.shru(1)))
      return uc;
    i = Nt;
  } else {
    if (this.eq(mt)) {
      if (t.eq(me) || t.eq($s))
        return mt;
      if (t.eq(mt))
        return me;
      var o = this.shr(1);
      return s = o.div(t).shl(1), s.eq(Mt) ? t.isNegative() ? me : $s : (r = this.sub(t.mul(s)), i = s.add(r.div(t)), i);
    } else if (t.eq(mt))
      return this.unsigned ? Nt : Mt;
    if (this.isNegative())
      return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
    if (t.isNegative())
      return this.div(t.neg()).neg();
    i = Mt;
  }
  for (r = this; r.gte(t); ) {
    s = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
    for (var a = Math.ceil(Math.log(s) / Math.LN2), c = a <= 48 ? 1 : Gn(2, a - 48), u = Et(s), l = u.mul(t); l.isNegative() || l.gt(r); )
      s -= c, u = Et(s, this.unsigned), l = u.mul(t);
    u.isZero() && (u = me), i = i.add(u), r = r.sub(l);
  }
  return i;
};
_.div = _.divide;
_.modulo = function(t) {
  if (ot(t) || (t = It(t)), Ct) {
    var n = (this.unsigned ? Ct.rem_u : Ct.rem_s)(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return N(n, Ct.get_high(), this.unsigned);
  }
  return this.sub(this.div(t).mul(t));
};
_.mod = _.modulo;
_.rem = _.modulo;
_.not = function() {
  return N(~this.low, ~this.high, this.unsigned);
};
_.countLeadingZeros = function() {
  return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
};
_.clz = _.countLeadingZeros;
_.countTrailingZeros = function() {
  return this.low ? Yi(this.low) : Yi(this.high) + 32;
};
_.ctz = _.countTrailingZeros;
_.and = function(t) {
  return ot(t) || (t = It(t)), N(this.low & t.low, this.high & t.high, this.unsigned);
};
_.or = function(t) {
  return ot(t) || (t = It(t)), N(this.low | t.low, this.high | t.high, this.unsigned);
};
_.xor = function(t) {
  return ot(t) || (t = It(t)), N(this.low ^ t.low, this.high ^ t.high, this.unsigned);
};
_.shiftLeft = function(t) {
  return ot(t) && (t = t.toInt()), (t &= 63) === 0 ? this : t < 32 ? N(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : N(0, this.low << t - 32, this.unsigned);
};
_.shl = _.shiftLeft;
_.shiftRight = function(t) {
  return ot(t) && (t = t.toInt()), (t &= 63) === 0 ? this : t < 32 ? N(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : N(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned);
};
_.shr = _.shiftRight;
_.shiftRightUnsigned = function(t) {
  return ot(t) && (t = t.toInt()), (t &= 63) === 0 ? this : t < 32 ? N(this.low >>> t | this.high << 32 - t, this.high >>> t, this.unsigned) : t === 32 ? N(this.high, 0, this.unsigned) : N(this.high >>> t - 32, 0, this.unsigned);
};
_.shru = _.shiftRightUnsigned;
_.shr_u = _.shiftRightUnsigned;
_.rotateLeft = function(t) {
  var n;
  return ot(t) && (t = t.toInt()), (t &= 63) === 0 ? this : t === 32 ? N(this.high, this.low, this.unsigned) : t < 32 ? (n = 32 - t, N(this.low << t | this.high >>> n, this.high << t | this.low >>> n, this.unsigned)) : (t -= 32, n = 32 - t, N(this.high << t | this.low >>> n, this.low << t | this.high >>> n, this.unsigned));
};
_.rotl = _.rotateLeft;
_.rotateRight = function(t) {
  var n;
  return ot(t) && (t = t.toInt()), (t &= 63) === 0 ? this : t === 32 ? N(this.high, this.low, this.unsigned) : t < 32 ? (n = 32 - t, N(this.high << n | this.low >>> t, this.low << n | this.high >>> t, this.unsigned)) : (t -= 32, n = 32 - t, N(this.low << n | this.high >>> t, this.high << n | this.low >>> t, this.unsigned));
};
_.rotr = _.rotateRight;
_.toSigned = function() {
  return this.unsigned ? N(this.low, this.high, !1) : this;
};
_.toUnsigned = function() {
  return this.unsigned ? this : N(this.low, this.high, !0);
};
_.toBytes = function(t) {
  return t ? this.toBytesLE() : this.toBytesBE();
};
_.toBytesLE = function() {
  var t = this.high, n = this.low;
  return [
    n & 255,
    n >>> 8 & 255,
    n >>> 16 & 255,
    n >>> 24,
    t & 255,
    t >>> 8 & 255,
    t >>> 16 & 255,
    t >>> 24
  ];
};
_.toBytesBE = function() {
  var t = this.high, n = this.low;
  return [
    t >>> 24,
    t >>> 16 & 255,
    t >>> 8 & 255,
    t & 255,
    n >>> 24,
    n >>> 16 & 255,
    n >>> 8 & 255,
    n & 255
  ];
};
H.fromBytes = function(t, n, s) {
  return s ? H.fromBytesLE(t, n) : H.fromBytesBE(t, n);
};
H.fromBytesLE = function(t, n) {
  return new H(
    t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24,
    t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24,
    n
  );
};
H.fromBytesBE = function(t, n) {
  return new H(
    t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7],
    t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3],
    n
  );
};
const rp = 16;
function fc(e) {
  e === "X" && (e = "");
  const t = e.padEnd(rp, "0");
  return H.fromString(t, !0, 16);
}
function ip(e) {
  if (e.isZero())
    return "X";
  let t = e.countTrailingZeros();
  const n = t % 4;
  t = (t - n) / 4;
  const s = t;
  t *= 4;
  const i = e.shiftRightUnsigned(t).toString(16).replace(/0+$/, "");
  return Array(17 - s - i.length).join("0") + i;
}
function op(e, t) {
  const n = ap(e).shiftRightUnsigned(2);
  return e.add(H.fromNumber(2 * t + 1 - 4).multiply(n));
}
function ap(e) {
  return e.and(e.not().add(1));
}
const cp = 3, up = 30, lp = 2 * up + 1, ro = 180 / Math.PI;
function hp(e) {
  if (e.length === 0)
    throw new Error(`Invalid Hilbert quad key ${e}`);
  const t = e.split("/"), n = parseInt(t[0], 10), s = t[1], r = s.length;
  let i = 0;
  const o = [0, 0];
  for (let a = r - 1; a >= 0; a--) {
    i = r - a;
    const c = s[a];
    let u = 0, l = 0;
    c === "1" ? l = 1 : c === "2" ? (u = 1, l = 1) : c === "3" && (u = 1);
    const h = Math.pow(2, i - 1);
    dp(h, o, u, l), o[0] += h * u, o[1] += h * l;
  }
  if (n % 2 === 1) {
    const a = o[0];
    o[0] = o[1], o[1] = a;
  }
  return {
    face: n,
    ij: o,
    level: i
  };
}
function fp(e) {
  if (e.isZero())
    return "";
  let t = e.toString(2);
  for (; t.length < cp + lp; )
    t = "0" + t;
  const n = t.lastIndexOf("1"), s = t.substring(0, 3), r = t.substring(3, n), i = r.length / 2, o = H.fromString(s, !0, 2).toString(10);
  let a = "";
  if (i !== 0)
    for (a = H.fromString(r, !0, 2).toString(4); a.length < i; )
      a = "0" + a;
  return `${o}/${a}`;
}
function dc(e, t, n) {
  const s = 1 << t;
  return [(e[0] + n[0]) / s, (e[1] + n[1]) / s];
}
function io(e) {
  return e >= 0.5 ? 1 / 3 * (4 * e * e - 1) : 1 / 3 * (1 - 4 * (1 - e) * (1 - e));
}
function mc(e) {
  return [io(e[0]), io(e[1])];
}
function gc(e, t) {
  let [n, s] = t;
  switch (e) {
    case 0:
      return [1, n, s];
    case 1:
      return [-n, 1, s];
    case 2:
      return [-n, -s, 1];
    case 3:
      return [-1, -s, -n];
    case 4:
      return [s, -1, -n];
    case 5:
      return [s, n, -1];
    default:
      throw new Error("Invalid face");
  }
}
function Ac(e) {
  let [t, n, s] = e;
  const r = Math.atan2(s, Math.sqrt(t * t + n * n));
  return [Math.atan2(n, t) * ro, r * ro];
}
function dp(e, t, n, s) {
  if (s === 0) {
    n === 1 && (t[0] = e - 1 - t[0], t[1] = e - 1 - t[1]);
    const r = t[0];
    t[0] = t[1], t[1] = r;
  }
}
function mp(e) {
  const t = dc(e.ij, e.level, [0.5, 0.5]), n = mc(t), s = gc(e.face, n);
  return Ac(s);
}
const gp = 100;
function oo(e) {
  const {
    face: t,
    ij: n,
    level: s
  } = e, r = [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], i = Math.max(1, Math.ceil(gp * Math.pow(2, -s))), o = new Float64Array(4 * i * 2 + 2);
  let a = 0, c = 0;
  for (let u = 0; u < 4; u++) {
    const l = r[u].slice(0), h = r[u + 1], f = (h[0] - l[0]) / i, d = (h[1] - l[1]) / i;
    for (let m = 0; m < i; m++) {
      l[0] += f, l[1] += d;
      const g = dc(n, s, l), y = mc(g), E = gc(t, y), R = Ac(E);
      Math.abs(R[1]) > 89.999 && (R[0] = c);
      const B = R[0] - c;
      R[0] += B > 180 ? -360 : B < -180 ? 360 : 0, o[a++] = R[0], o[a++] = R[1], c = R[0];
    }
  }
  return o[a++] = o[0], o[a++] = o[1], o;
}
function Pr(e) {
  const t = Ap(e);
  return hp(t);
}
function Ap(e) {
  if (e.indexOf("/") > 0)
    return e;
  const t = fc(e);
  return fp(t);
}
function pp(e) {
  const t = Pr(e);
  return mp(t);
}
function yp(e) {
  let t;
  if (e.face === 2 || e.face === 5) {
    let n = null, s = 0;
    for (let r = 0; r < 4; r++) {
      const i = `${e.face}/${r}`, o = Pr(i), a = oo(o);
      (typeof n > "u" || n === null) && (n = new Float64Array(4 * a.length)), n.set(a, s), s += a.length;
    }
    t = ao(n);
  } else {
    const n = oo(e);
    t = ao(n);
  }
  return t;
}
function ao(e) {
  if (e.length % 2 !== 0)
    throw new Error("Invalid corners");
  const t = [], n = [];
  for (let s = 0; s < e.length; s += 2)
    t.push(e[s]), n.push(e[s + 1]);
  return t.sort((s, r) => s - r), n.sort((s, r) => s - r), {
    west: t[0],
    east: t[t.length - 1],
    north: n[n.length - 1],
    south: n[0]
  };
}
function Bp(e, t) {
  const n = (t == null ? void 0 : t.minimumHeight) || 0, s = (t == null ? void 0 : t.maximumHeight) || 0, r = Pr(e), i = yp(r), o = i.west, a = i.south, c = i.east, u = i.north, l = [];
  return l.push(new A(o, u, n)), l.push(new A(c, u, n)), l.push(new A(c, a, n)), l.push(new A(o, a, n)), l.push(new A(o, u, s)), l.push(new A(c, u, s)), l.push(new A(c, a, s)), l.push(new A(o, a, s)), l;
}
function pc(e) {
  const t = e.token, n = {
    minimumHeight: e.minimumHeight,
    maximumHeight: e.maximumHeight
  }, s = Bp(t, n), r = pp(t), i = r[0], o = r[1], a = J.WGS84.cartographicToCartesian([i, o, n.maximumHeight]), c = new A(a[0], a[1], a[2]);
  s.push(c);
  const u = Bd(s);
  return [...u.center, ...u.halfAxes];
}
const Cp = 4, Ep = 8, Tp = {
  QUADTREE: Cp,
  OCTREE: Ep
};
function bp(e, t, n) {
  if (e != null && e.box) {
    const s = fc(e.s2VolumeInfo.token), r = op(s, t), i = ip(r), o = {
      ...e.s2VolumeInfo
    };
    switch (o.token = i, n) {
      case "OCTREE":
        const u = e.s2VolumeInfo, l = u.maximumHeight - u.minimumHeight, h = l / 2, f = u.minimumHeight + l / 2;
        u.minimumHeight = f - h, u.maximumHeight = f + h;
        break;
    }
    return {
      box: pc(o),
      s2VolumeInfo: o
    };
  }
}
async function yc(e) {
  const {
    implicitOptions: t,
    parentData: n = {
      mortonIndex: 0,
      x: 0,
      y: 0,
      z: 0
    },
    childIndex: s = 0,
    s2VolumeBox: r,
    loaderOptions: i
  } = e;
  let {
    subtree: o,
    level: a = 0,
    globalData: c = {
      level: 0,
      mortonIndex: 0,
      x: 0,
      y: 0,
      z: 0
    }
  } = e;
  const {
    subdivisionScheme: u,
    subtreeLevels: l,
    maximumLevel: h,
    contentUrlTemplate: f,
    subtreesUriTemplate: d,
    basePath: m
  } = t, g = {
    children: [],
    lodMetricValue: 0,
    contentUrl: ""
  };
  if (!h)
    return ra.once(`Missing 'maximumLevel' or 'availableLevels' property. The subtree ${f} won't be loaded...`), g;
  const y = a + c.level;
  if (y > h)
    return g;
  const E = Tp[u], R = Math.log2(E), B = s & 1, C = s >> 1 & 1, M = s >> 2 & 1, b = (E ** a - 1) / (E - 1);
  let F = Xt(n.mortonIndex, s, R), v = b + F, O = Xt(n.x, B, 1), L = Xt(n.y, C, 1), k = Xt(n.z, M, 1), X = !1;
  a >= l && (X = ws(o.childSubtreeAvailability, F));
  const Q = Xt(c.x, O, a), P = Xt(c.y, L, a), at = Xt(c.z, k, a);
  if (X) {
    const et = `${m}/${d}`, Lt = Ys(et, y, Q, P, at);
    o = await pe(Lt, ac, i), c = {
      mortonIndex: F,
      x: O,
      y: L,
      z: k,
      level: a
    }, F = 0, v = 0, O = 0, L = 0, k = 0, a = 0;
  }
  if (!ws(o.tileAvailability, v))
    return g;
  ws(o.contentAvailability, v) && (g.contentUrl = Ys(f, y, Q, P, at));
  const Ce = a + 1, Dt = {
    mortonIndex: F,
    x: O,
    y: L,
    z: k
  };
  for (let et = 0; et < E; et++) {
    const Lt = bp(r, et, u), Wt = await yc({
      subtree: o,
      implicitOptions: t,
      loaderOptions: i,
      parentData: Dt,
      childIndex: et,
      level: Ce,
      globalData: {
        ...c
      },
      s2VolumeBox: Lt
    });
    if (Wt.contentUrl || Wt.children.length) {
      const Ee = y + 1, Zn = _p(Wt, Ee, {
        childTileX: O,
        childTileY: L,
        childTileZ: k
      }, t, r);
      g.children.push(Zn);
    }
  }
  return g;
}
function ws(e, t) {
  let n;
  return Array.isArray(e) ? (n = e[0], e.length > 1 && ra.once('Not supported extension "3DTILES_multiple_contents" has been detected')) : n = e, "constant" in n ? !!n.constant : n.explicitBitstream ? Mp(t, n.explicitBitstream) : !1;
}
function _p(e, t, n, s, r) {
  const {
    basePath: i,
    refine: o,
    getRefine: a,
    lodMetricType: c,
    getTileType: u,
    rootLodMetricValue: l,
    rootBoundingVolume: h
  } = s, f = e.contentUrl && e.contentUrl.replace(`${i}/`, ""), d = l / 2 ** t, m = r != null && r.box ? {
    box: r.box
  } : h, g = wp(t, m, n);
  return {
    children: e.children,
    contentUrl: e.contentUrl,
    content: {
      uri: f
    },
    id: e.contentUrl,
    refine: a(o),
    type: u(e),
    lodMetricType: c,
    lodMetricValue: d,
    geometricError: d,
    transform: e.transform,
    boundingVolume: g
  };
}
function wp(e, t, n) {
  if (t.region) {
    const {
      childTileX: s,
      childTileY: r,
      childTileZ: i
    } = n, [o, a, c, u, l, h] = t.region, f = 2 ** e, d = (c - o) / f, m = (u - a) / f, g = (h - l) / f, [y, E] = [o + d * s, o + d * (s + 1)], [R, B] = [a + m * r, a + m * (r + 1)], [C, M] = [l + g * i, l + g * (i + 1)];
    return {
      region: [y, R, E, B, C, M]
    };
  }
  if (t.box)
    return t;
  throw new Error(`Unsupported bounding volume type ${t}`);
}
function Xt(e, t, n) {
  return (e << n) + t;
}
function Ys(e, t, n, s, r) {
  const i = Rp({
    level: t,
    x: n,
    y: s,
    z: r
  });
  return e.replace(/{level}|{x}|{y}|{z}/gi, (o) => i[o]);
}
function Rp(e) {
  const t = {};
  for (const n in e)
    t[`{${n}}`] = e[n];
  return t;
}
function Mp(e, t) {
  const n = Math.floor(e / 8), s = e % 8;
  return (t[n] >> s & 1) === 1;
}
function Gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  if (!t)
    return fn.EMPTY;
  const s = t.split("?")[0].split(".").pop();
  switch (s) {
    case "pnts":
      return fn.POINTCLOUD;
    case "i3dm":
    case "b3dm":
    case "glb":
    case "gltf":
      return fn.SCENEGRAPH;
    default:
      return s || fn.EMPTY;
  }
}
function Nr(e) {
  switch (e) {
    case "REPLACE":
    case "replace":
      return Mi.REPLACE;
    case "ADD":
    case "add":
      return Mi.ADD;
    default:
      return e;
  }
}
function Zs(e, t) {
  if (/^[a-z][0-9a-z+.-]*:/i.test(t)) {
    const s = new URL(e, `${t}/`);
    return decodeURI(s.toString());
  } else if (e.startsWith("/"))
    return e;
  return Uu(t, e);
}
function co(e, t) {
  if (!e)
    return null;
  let n;
  if (e.content) {
    var s;
    const i = e.content.uri || ((s = e.content) === null || s === void 0 ? void 0 : s.url);
    typeof i < "u" && (n = Zs(i, t));
  }
  return {
    ...e,
    id: n,
    contentUrl: n,
    lodMetricType: Wn.GEOMETRIC_ERROR,
    lodMetricValue: e.geometricError,
    transformMatrix: e.transform,
    type: Gr(e, n),
    refine: Nr(e.refine)
  };
}
async function Sp(e, t, n) {
  let s = null;
  const r = lo(e.root);
  r && e.root ? s = await uo(e.root, e, t, r, n) : s = co(e.root, t);
  const i = [];
  for (i.push(s); i.length > 0; ) {
    const o = i.pop() || {}, a = o.children || [], c = [];
    for (const u of a) {
      const l = lo(u);
      let h;
      l ? h = await uo(u, e, t, l, n) : h = co(u, t), h && (c.push(h), i.push(h));
    }
    o.children = c;
  }
  return s;
}
async function uo(e, t, n, s, r) {
  var i, o, a;
  const {
    subdivisionScheme: c,
    maximumLevel: u,
    availableLevels: l,
    subtreeLevels: h,
    subtrees: {
      uri: f
    }
  } = s, d = Ys(f, 0, 0, 0, 0), m = Zs(d, n), g = await pe(m, ac, r), y = (i = e.content) === null || i === void 0 ? void 0 : i.uri, E = y ? Zs(y, n) : "", R = t == null || (o = t.root) === null || o === void 0 ? void 0 : o.refine, B = e.geometricError, C = (a = e.boundingVolume.extensions) === null || a === void 0 ? void 0 : a["3DTILES_bounding_volume_S2"];
  if (C) {
    const v = {
      box: pc(C),
      s2VolumeInfo: C
    };
    e.boundingVolume = v;
  }
  const M = e.boundingVolume, b = {
    contentUrlTemplate: E,
    subtreesUriTemplate: f,
    subdivisionScheme: c,
    subtreeLevels: h,
    maximumLevel: Number.isFinite(l) ? l - 1 : u,
    refine: R,
    basePath: n,
    lodMetricType: Wn.GEOMETRIC_ERROR,
    rootLodMetricValue: B,
    rootBoundingVolume: M,
    getTileType: Gr,
    getRefine: Nr
  };
  return await Ip(e, n, g, b, r);
}
async function Ip(e, t, n, s, r) {
  if (!e)
    return null;
  const {
    children: i,
    contentUrl: o
  } = await yc({
    subtree: n,
    implicitOptions: s,
    loaderOptions: r
  });
  let a, c = null;
  return o && (a = o, c = {
    uri: o.replace(`${t}/`, "")
  }), {
    ...e,
    id: a,
    contentUrl: a,
    lodMetricType: Wn.GEOMETRIC_ERROR,
    lodMetricValue: e.geometricError,
    transformMatrix: e.transform,
    type: Gr(e, a),
    refine: Nr(e.refine),
    content: c || e.content,
    children: i
  };
}
function lo(e) {
  var t;
  return (e == null || (t = e.extensions) === null || t === void 0 ? void 0 : t["3DTILES_implicit_tiling"]) || (e == null ? void 0 : e.implicitTiling);
}
const Le = {
  id: "3d-tiles",
  name: "3D Tiles",
  module: "3d-tiles",
  version: Sa,
  extensions: ["cmpt", "pnts", "b3dm", "i3dm"],
  mimeTypes: ["application/octet-stream"],
  tests: ["cmpt", "pnts", "b3dm", "i3dm"],
  parse: xp,
  options: {
    "3d-tiles": {
      loadGLTF: !0,
      decodeQuantizedPositions: !1,
      isTileset: "auto",
      assetGltfUpAxis: null
    }
  }
};
async function xp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const s = t["3d-tiles"] || {};
  let r;
  return s.isTileset === "auto" ? r = (n == null ? void 0 : n.url) && n.url.indexOf(".json") !== -1 : r = s.isTileset, r ? Op(e, t, n) : Fp(e, t, n);
}
async function Op(e, t, n) {
  var s;
  const r = JSON.parse(new TextDecoder().decode(e)), i = (n == null ? void 0 : n.url) || "", o = vp(i), a = await Sp(r, o, t || {});
  return {
    ...r,
    shape: "tileset3d",
    loader: Le,
    url: i,
    queryString: (n == null ? void 0 : n.queryString) || "",
    basePath: o,
    root: a || r.root,
    type: Cd.TILES3D,
    lodMetricType: Wn.GEOMETRIC_ERROR,
    lodMetricValue: ((s = r.root) === null || s === void 0 ? void 0 : s.geometricError) || 0
  };
}
async function Fp(e, t, n) {
  const s = {
    content: {
      shape: "tile3d",
      featureIds: null
    }
  };
  return await oc(e, 0, t, n, s.content), s.content;
}
function vp(e) {
  return Yo(e);
}
const Bc = "https://api.cesium.com/v1/assets";
async function Dp(e, t) {
  if (!t) {
    const i = await Lp(e);
    for (const o of i.items)
      o.type === "3DTILES" && (t = o.id);
  }
  const n = await Pp(e, t), {
    type: s,
    url: r
  } = n;
  return K(s === "3DTILES" && r), n.headers = {
    Authorization: `Bearer ${n.accessToken}`
  }, n;
}
async function Lp(e) {
  K(e);
  const t = Bc, n = {
    Authorization: `Bearer ${e}`
  }, s = await Ge(t, {
    headers: n
  });
  if (!s.ok)
    throw new Error(s.statusText);
  return await s.json();
}
async function Pp(e, t) {
  K(e, t);
  const n = {
    Authorization: `Bearer ${e}`
  }, s = `${Bc}/${t}`;
  let r = await Ge(`${s}`, {
    headers: n
  });
  if (!r.ok)
    throw new Error(r.statusText);
  let i = await r.json();
  if (r = await Ge(`${s}/endpoint`, {
    headers: n
  }), !r.ok)
    throw new Error(r.statusText);
  const o = await r.json();
  return i = {
    ...i,
    ...o
  }, i;
}
async function Gp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  t = t["cesium-ion"] || {};
  const {
    accessToken: n
  } = t;
  let s = t.assetId;
  if (!Number.isFinite(s)) {
    const r = e.match(/\/([0-9]+)\/tileset.json/);
    s = r && r[1];
  }
  return Dp(n, s);
}
const Cc = {
  ...Le,
  id: "cesium-ion",
  name: "Cesium Ion",
  preload: Gp,
  parse: async (e, t, n) => (t = {
    ...t
  }, t["3d-tiles"] = t["cesium-ion"], t.loader = Cc, Le.parse(e, t, n)),
  options: {
    "cesium-ion": {
      ...Le.options["3d-tiles"],
      accessToken: null
    }
  }
}, ho = 100;
class Np {
  constructor(t, n) {
    if (this.schema = void 0, this.options = void 0, this.shape = void 0, this.length = 0, this.rows = null, this.cursor = 0, this._headers = [], this.options = n, this.schema = t, !Array.isArray(t)) {
      this._headers = [];
      for (const s in t)
        this._headers[t[s].index] = t[s].name;
    }
  }
  rowCount() {
    return this.length;
  }
  addArrayRow(t, n) {
    Number.isFinite(n) && (this.cursor = n), this.shape = "array-row-table", this.rows = this.rows || new Array(ho), this.rows[this.length] = t, this.length++;
  }
  addObjectRow(t, n) {
    Number.isFinite(n) && (this.cursor = n), this.shape = "object-row-table", this.rows = this.rows || new Array(ho), this.rows[this.length] = t, this.length++;
  }
  getBatch() {
    let t = this.rows;
    return t ? (t = t.slice(0, this.length), this.rows = null, {
      shape: this.shape || "array-row-table",
      batchType: "data",
      data: t,
      length: this.length,
      schema: this.schema,
      cursor: this.cursor
    }) : null;
  }
}
function Up(e, t) {
  if (!e)
    throw new Error("null row");
  const n = {};
  if (t)
    for (let s = 0; s < t.length; s++)
      n[t[s]] = e[s];
  else
    for (let s = 0; s < e.length; s++) {
      const r = `column-${s}`;
      n[r] = e[s];
    }
  return n;
}
function Hp(e, t) {
  if (!e)
    throw new Error("null row");
  if (t) {
    const n = new Array(t.length);
    for (let s = 0; s < t.length; s++)
      n[s] = e[t[s]];
    return n;
  }
  return Object.values(e);
}
function Jp(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const s = `column-${n}`;
    t.push(s);
  }
  return t;
}
function Vp(e) {
  return Object.keys(e);
}
const fo = 100;
class jp {
  constructor(t, n) {
    if (this.schema = void 0, this.options = void 0, this.length = 0, this.objectRows = null, this.arrayRows = null, this.cursor = 0, this._headers = null, this.options = n, this.schema = t, t) {
      this._headers = [];
      for (const s in t)
        this._headers[t[s].index] = t[s].name;
    }
  }
  rowCount() {
    return this.length;
  }
  addArrayRow(t, n) {
    switch (Number.isFinite(n) && (this.cursor = n), this._headers || (this._headers = Jp(t)), this.options.shape) {
      case "object-row-table":
        const s = Up(t, this._headers);
        this.addObjectRow(s, n);
        break;
      case "array-row-table":
        this.arrayRows = this.arrayRows || new Array(fo), this.arrayRows[this.length] = t, this.length++;
        break;
    }
  }
  addObjectRow(t, n) {
    switch (Number.isFinite(n) && (this.cursor = n), this._headers || (this._headers = Vp(t)), this.options.shape) {
      case "array-row-table":
        const s = Hp(t, this._headers);
        this.addArrayRow(s, n);
        break;
      case "object-row-table":
        this.objectRows = this.objectRows || new Array(fo), this.objectRows[this.length] = t, this.length++;
        break;
    }
  }
  getBatch() {
    let t = this.arrayRows || this.objectRows;
    return t ? (t = t.slice(0, this.length), this.arrayRows = null, this.objectRows = null, {
      shape: this.options.shape,
      batchType: "data",
      data: t,
      length: this.length,
      schema: this.schema,
      cursor: this.cursor
    }) : null;
  }
}
const kp = 100;
class Kp {
  constructor(t, n) {
    this.schema = void 0, this.length = 0, this.allocated = 0, this.columns = {}, this.schema = t, this._reallocateColumns();
  }
  rowCount() {
    return this.length;
  }
  addArrayRow(t) {
    this._reallocateColumns();
    let n = 0;
    for (const s in this.columns)
      this.columns[s][this.length] = t[n++];
    this.length++;
  }
  addObjectRow(t) {
    this._reallocateColumns();
    for (const n in t)
      this.columns[n][this.length] = t[n];
    this.length++;
  }
  getBatch() {
    this._pruneColumns();
    const t = Array.isArray(this.schema) ? this.columns : {};
    if (!Array.isArray(this.schema))
      for (const s in this.schema) {
        const r = this.schema[s];
        t[r.name] = this.columns[r.index];
      }
    return this.columns = {}, {
      shape: "columnar-table",
      batchType: "data",
      data: t,
      schema: this.schema,
      length: this.length
    };
  }
  _reallocateColumns() {
    if (!(this.length < this.allocated)) {
      this.allocated = this.allocated > 0 ? this.allocated *= 2 : kp, this.columns = {};
      for (const t in this.schema) {
        const n = this.schema[t], s = n.type || Float32Array, r = this.columns[n.index];
        if (r && ArrayBuffer.isView(r)) {
          const i = new s(this.allocated);
          i.set(r), this.columns[n.index] = i;
        } else r ? (r.length = this.allocated, this.columns[n.index] = r) : this.columns[n.index] = new s(this.allocated);
      }
    }
  }
  _pruneColumns() {
    for (const [t, n] of Object.entries(this.columns))
      this.columns[t] = n.slice(0, this.length);
  }
}
const zp = {
  shape: void 0,
  batchSize: "auto",
  batchDebounceMs: 0,
  limit: 0,
  _limitMB: 0
}, Wp = "TableBatchBuilder";
class He {
  constructor(t, n) {
    this.schema = void 0, this.options = void 0, this.aggregator = null, this.batchCount = 0, this.bytesUsed = 0, this.isChunkComplete = !1, this.lastBatchEmittedMs = Date.now(), this.totalLength = 0, this.totalBytes = 0, this.rowBytes = 0, this.schema = t, this.options = {
      ...zp,
      ...n
    };
  }
  limitReached() {
    var t, n;
    return !!(!((t = this.options) === null || t === void 0) && t.limit && this.totalLength >= this.options.limit || !((n = this.options) === null || n === void 0) && n._limitMB && this.totalBytes / 1e6 >= this.options._limitMB);
  }
  addRow(t) {
    this.limitReached() || (this.totalLength++, this.rowBytes = this.rowBytes || this._estimateRowMB(t), this.totalBytes += this.rowBytes, Array.isArray(t) ? this.addArrayRow(t) : this.addObjectRow(t));
  }
  addArrayRow(t) {
    if (!this.aggregator) {
      const n = this._getTableBatchType();
      this.aggregator = new n(this.schema, this.options);
    }
    this.aggregator.addArrayRow(t);
  }
  addObjectRow(t) {
    if (!this.aggregator) {
      const n = this._getTableBatchType();
      this.aggregator = new n(this.schema, this.options);
    }
    this.aggregator.addObjectRow(t);
  }
  chunkComplete(t) {
    t instanceof ArrayBuffer && (this.bytesUsed += t.byteLength), typeof t == "string" && (this.bytesUsed += t.length), this.isChunkComplete = !0;
  }
  getFullBatch(t) {
    return this._isFull() ? this._getBatch(t) : null;
  }
  getFinalBatch(t) {
    return this._getBatch(t);
  }
  _estimateRowMB(t) {
    return Array.isArray(t) ? t.length * 8 : Object.keys(t).length * 8;
  }
  _isFull() {
    if (!this.aggregator || this.aggregator.rowCount() === 0)
      return !1;
    if (this.options.batchSize === "auto") {
      if (!this.isChunkComplete)
        return !1;
    } else if (this.options.batchSize > this.aggregator.rowCount())
      return !1;
    return this.options.batchDebounceMs > Date.now() - this.lastBatchEmittedMs ? !1 : (this.isChunkComplete = !1, this.lastBatchEmittedMs = Date.now(), !0);
  }
  _getBatch(t) {
    if (!this.aggregator)
      return null;
    t != null && t.bytesUsed && (this.bytesUsed = t.bytesUsed);
    const n = this.aggregator.getBatch();
    return n.count = this.batchCount, n.bytesUsed = this.bytesUsed, Object.assign(n, t), this.batchCount++, this.aggregator = null, n;
  }
  _getTableBatchType() {
    switch (this.options.shape) {
      case "array-row-table":
      case "object-row-table":
        return jp;
      case "columnar-table":
        return Kp;
      case "arrow-table":
        if (!He.ArrowBatch)
          throw new Error(Wp);
        return He.ArrowBatch;
      default:
        return Np;
    }
  }
}
He.ArrowBatch = void 0;
function Xp(e) {
  try {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return async function* () {
      const n = new TextDecoder(void 0, t);
      for await (const s of e)
        yield typeof s == "string" ? s : n.decode(s, {
          stream: !0
        });
    }();
  } catch (t) {
    return Promise.reject(t);
  }
}
const tr = Number.MAX_SAFE_INTEGER;
var S = function(e) {
  return e[e.BEGIN = 0] = "BEGIN", e[e.VALUE = 1] = "VALUE", e[e.OPEN_OBJECT = 2] = "OPEN_OBJECT", e[e.CLOSE_OBJECT = 3] = "CLOSE_OBJECT", e[e.OPEN_ARRAY = 4] = "OPEN_ARRAY", e[e.CLOSE_ARRAY = 5] = "CLOSE_ARRAY", e[e.TEXT_ESCAPE = 6] = "TEXT_ESCAPE", e[e.STRING = 7] = "STRING", e[e.BACKSLASH = 8] = "BACKSLASH", e[e.END = 9] = "END", e[e.OPEN_KEY = 10] = "OPEN_KEY", e[e.CLOSE_KEY = 11] = "CLOSE_KEY", e[e.TRUE = 12] = "TRUE", e[e.TRUE2 = 13] = "TRUE2", e[e.TRUE3 = 14] = "TRUE3", e[e.FALSE = 15] = "FALSE", e[e.FALSE2 = 16] = "FALSE2", e[e.FALSE3 = 17] = "FALSE3", e[e.FALSE4 = 18] = "FALSE4", e[e.NULL = 19] = "NULL", e[e.NULL2 = 20] = "NULL2", e[e.NULL3 = 21] = "NULL3", e[e.NUMBER_DECIMAL_POINT = 22] = "NUMBER_DECIMAL_POINT", e[e.NUMBER_DIGIT = 23] = "NUMBER_DIGIT", e;
}(S || {});
const I = {
  tab: 9,
  lineFeed: 10,
  carriageReturn: 13,
  space: 32,
  doubleQuote: 34,
  plus: 43,
  comma: 44,
  minus: 45,
  period: 46,
  _0: 48,
  _9: 57,
  colon: 58,
  E: 69,
  openBracket: 91,
  backslash: 92,
  closeBracket: 93,
  a: 97,
  b: 98,
  e: 101,
  f: 102,
  l: 108,
  n: 110,
  r: 114,
  s: 115,
  t: 116,
  u: 117,
  openBrace: 123,
  closeBrace: 125
}, mo = /[\\"\n]/g, go = {
  onready: () => {
  },
  onopenobject: () => {
  },
  onkey: () => {
  },
  oncloseobject: () => {
  },
  onopenarray: () => {
  },
  onclosearray: () => {
  },
  onvalue: () => {
  },
  onerror: () => {
  },
  onend: () => {
  },
  onchunkparsed: () => {
  }
};
class Qp {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.options = go, this.bufferCheckPosition = tr, this.q = "", this.c = "", this.p = "", this.closed = !1, this.closedRoot = !1, this.sawRoot = !1, this.error = null, this.state = S.BEGIN, this.stack = [], this.position = 0, this.column = 0, this.line = 1, this.slashed = !1, this.unicodeI = 0, this.unicodeS = null, this.depth = 0, this.textNode = void 0, this.numberNode = void 0, this.options = {
      ...go,
      ...t
    }, this.textNode = void 0, this.numberNode = "", this.emit("onready");
  }
  end() {
    return (this.state !== S.VALUE || this.depth !== 0) && this._error("Unexpected end"), this._closeValue(), this.c = "", this.closed = !0, this.emit("onend"), this;
  }
  resume() {
    return this.error = null, this;
  }
  close() {
    return this.write(null);
  }
  emit(t, n) {
    var s, r;
    (s = (r = this.options)[t]) === null || s === void 0 || s.call(r, n, this);
  }
  emitNode(t, n) {
    this._closeValue(), this.emit(t, n);
  }
  write(t) {
    if (this.error)
      throw this.error;
    if (this.closed)
      return this._error("Cannot write after close. Assign an onready handler.");
    if (t === null)
      return this.end();
    let n = 0, s = t.charCodeAt(0), r = this.p;
    for (; s && (r = s, this.c = s = t.charCodeAt(n++), r !== s ? this.p = r : r = this.p, !!s); )
      switch (this.position++, s === I.lineFeed ? (this.line++, this.column = 0) : this.column++, this.state) {
        case S.BEGIN:
          s === I.openBrace ? this.state = S.OPEN_OBJECT : s === I.openBracket ? this.state = S.OPEN_ARRAY : Se(s) || this._error("Non-whitespace before {[.");
          continue;
        case S.OPEN_KEY:
        case S.OPEN_OBJECT:
          if (Se(s)) continue;
          if (this.state === S.OPEN_KEY) this.stack.push(S.CLOSE_KEY);
          else if (s === I.closeBrace) {
            this.emit("onopenobject"), this.depth++, this.emit("oncloseobject"), this.depth--, this.state = this.stack.pop() || S.VALUE;
            continue;
          } else this.stack.push(S.CLOSE_OBJECT);
          s === I.doubleQuote ? this.state = S.STRING : this._error('Malformed object key should start with "');
          continue;
        case S.CLOSE_KEY:
        case S.CLOSE_OBJECT:
          if (Se(s)) continue;
          s === I.colon ? (this.state === S.CLOSE_OBJECT ? (this.stack.push(S.CLOSE_OBJECT), this._closeValue("onopenobject"), this.depth++) : this._closeValue("onkey"), this.state = S.VALUE) : s === I.closeBrace ? (this.emitNode("oncloseobject"), this.depth--, this.state = this.stack.pop() || S.VALUE) : s === I.comma ? (this.state === S.CLOSE_OBJECT && this.stack.push(S.CLOSE_OBJECT), this._closeValue(), this.state = S.OPEN_KEY) : this._error("Bad object");
          continue;
        case S.OPEN_ARRAY:
        case S.VALUE:
          if (Se(s)) continue;
          if (this.state === S.OPEN_ARRAY)
            if (this.emit("onopenarray"), this.depth++, this.state = S.VALUE, s === I.closeBracket) {
              this.emit("onclosearray"), this.depth--, this.state = this.stack.pop() || S.VALUE;
              continue;
            } else
              this.stack.push(S.CLOSE_ARRAY);
          s === I.doubleQuote ? this.state = S.STRING : s === I.openBrace ? this.state = S.OPEN_OBJECT : s === I.openBracket ? this.state = S.OPEN_ARRAY : s === I.t ? this.state = S.TRUE : s === I.f ? this.state = S.FALSE : s === I.n ? this.state = S.NULL : s === I.minus ? this.numberNode += "-" : I._0 <= s && s <= I._9 ? (this.numberNode += String.fromCharCode(s), this.state = S.NUMBER_DIGIT) : this._error("Bad value");
          continue;
        case S.CLOSE_ARRAY:
          if (s === I.comma)
            this.stack.push(S.CLOSE_ARRAY), this._closeValue("onvalue"), this.state = S.VALUE;
          else if (s === I.closeBracket)
            this.emitNode("onclosearray"), this.depth--, this.state = this.stack.pop() || S.VALUE;
          else {
            if (Se(s)) continue;
            this._error("Bad array");
          }
          continue;
        case S.STRING:
          this.textNode === void 0 && (this.textNode = "");
          let i = n - 1, o = this.slashed, a = this.unicodeI;
          t: for (; ; ) {
            for (; a > 0; )
              if (this.unicodeS += String.fromCharCode(s), s = t.charCodeAt(n++), this.position++, a === 4 ? (this.textNode += String.fromCharCode(parseInt(this.unicodeS, 16)), a = 0, i = n - 1) : a++, !s) break t;
            if (s === I.doubleQuote && !o) {
              this.state = this.stack.pop() || S.VALUE, this.textNode += t.substring(i, n - 1), this.position += n - 1 - i;
              break;
            }
            if (s === I.backslash && !o && (o = !0, this.textNode += t.substring(i, n - 1), this.position += n - 1 - i, s = t.charCodeAt(n++), this.position++, !s))
              break;
            if (o) {
              if (o = !1, s === I.n ? this.textNode += `
` : s === I.r ? this.textNode += "\r" : s === I.t ? this.textNode += "	" : s === I.f ? this.textNode += "\f" : s === I.b ? this.textNode += "\b" : s === I.u ? (a = 1, this.unicodeS = "") : this.textNode += String.fromCharCode(s), s = t.charCodeAt(n++), this.position++, i = n - 1, s) continue;
              break;
            }
            mo.lastIndex = n;
            const c = mo.exec(t);
            if (c === null) {
              n = t.length + 1, this.textNode += t.substring(i, n - 1), this.position += n - 1 - i;
              break;
            }
            if (n = c.index + 1, s = t.charCodeAt(c.index), !s) {
              this.textNode += t.substring(i, n - 1), this.position += n - 1 - i;
              break;
            }
          }
          this.slashed = o, this.unicodeI = a;
          continue;
        case S.TRUE:
          s === I.r ? this.state = S.TRUE2 : this._error(`Invalid true started with t${s}`);
          continue;
        case S.TRUE2:
          s === I.u ? this.state = S.TRUE3 : this._error(`Invalid true started with tr${s}`);
          continue;
        case S.TRUE3:
          s === I.e ? (this.emit("onvalue", !0), this.state = this.stack.pop() || S.VALUE) : this._error(`Invalid true started with tru${s}`);
          continue;
        case S.FALSE:
          s === I.a ? this.state = S.FALSE2 : this._error(`Invalid false started with f${s}`);
          continue;
        case S.FALSE2:
          s === I.l ? this.state = S.FALSE3 : this._error(`Invalid false started with fa${s}`);
          continue;
        case S.FALSE3:
          s === I.s ? this.state = S.FALSE4 : this._error(`Invalid false started with fal${s}`);
          continue;
        case S.FALSE4:
          s === I.e ? (this.emit("onvalue", !1), this.state = this.stack.pop() || S.VALUE) : this._error(`Invalid false started with fals${s}`);
          continue;
        case S.NULL:
          s === I.u ? this.state = S.NULL2 : this._error(`Invalid null started with n${s}`);
          continue;
        case S.NULL2:
          s === I.l ? this.state = S.NULL3 : this._error(`Invalid null started with nu${s}`);
          continue;
        case S.NULL3:
          s === I.l ? (this.emit("onvalue", null), this.state = this.stack.pop() || S.VALUE) : this._error(`Invalid null started with nul${s}`);
          continue;
        case S.NUMBER_DECIMAL_POINT:
          s === I.period ? (this.numberNode += ".", this.state = S.NUMBER_DIGIT) : this._error("Leading zero not followed by .");
          continue;
        case S.NUMBER_DIGIT:
          I._0 <= s && s <= I._9 ? this.numberNode += String.fromCharCode(s) : s === I.period ? (this.numberNode.indexOf(".") !== -1 && this._error("Invalid number has two dots"), this.numberNode += ".") : s === I.e || s === I.E ? ((this.numberNode.indexOf("e") !== -1 || this.numberNode.indexOf("E") !== -1) && this._error("Invalid number has two exponential"), this.numberNode += "e") : s === I.plus || s === I.minus ? (r === I.e || r === I.E || this._error("Invalid symbol in number"), this.numberNode += String.fromCharCode(s)) : (this._closeNumber(), n--, this.state = this.stack.pop() || S.VALUE);
          continue;
        default:
          this._error(`Unknown state: ${this.state}`);
      }
    return this.position >= this.bufferCheckPosition && qp(this), this.emit("onchunkparsed"), this;
  }
  _closeValue() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "onvalue";
    this.textNode !== void 0 && this.emit(t, this.textNode), this.textNode = void 0;
  }
  _closeNumber() {
    this.numberNode && this.emit("onvalue", parseFloat(this.numberNode)), this.numberNode = "";
  }
  _error() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    this._closeValue(), t += `
Line: ${this.line}
Column: ${this.column}
Char: ${this.c}`;
    const n = new Error(t);
    this.error = n, this.emit("onerror", n);
  }
}
function Se(e) {
  return e === I.carriageReturn || e === I.lineFeed || e === I.space || e === I.tab;
}
function qp(e) {
  const t = Math.max(tr, 10);
  let n = 0;
  for (const s of ["textNode", "numberNode"]) {
    const r = e[s] === void 0 ? 0 : e[s].length;
    if (r > t)
      switch (s) {
        case "text":
          break;
        default:
          e._error(`Max buffer length exceeded: ${s}`);
      }
    n = Math.max(n, r);
  }
  e.bufferCheckPosition = tr - n + e.position;
}
class Zt {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (this.path = void 0, this.path = ["$"], t instanceof Zt) {
      this.path = [...t.path];
      return;
    }
    if (Array.isArray(t)) {
      this.path.push(...t);
      return;
    }
    if (typeof t == "string" && (this.path = t.split("."), this.path[0] !== "$"))
      throw new Error("JSONPaths must start with $");
  }
  clone() {
    return new Zt(this);
  }
  toString() {
    return this.path.join(".");
  }
  push(t) {
    this.path.push(t);
  }
  pop() {
    return this.path.pop();
  }
  set(t) {
    this.path[this.path.length - 1] = t;
  }
  equals(t) {
    if (!this || !t || this.path.length !== t.path.length)
      return !1;
    for (let n = 0; n < this.path.length; ++n)
      if (this.path[n] !== t.path[n])
        return !1;
    return !0;
  }
  setFieldAtPath(t, n) {
    const s = [...this.path];
    s.shift();
    const r = s.pop();
    for (const i of s)
      t = t[i];
    t[r] = n;
  }
  getFieldAtPath(t) {
    const n = [...this.path];
    n.shift();
    const s = n.pop();
    for (const r of n)
      t = t[r];
    return t[s];
  }
}
class $p {
  constructor(t) {
    this.parser = void 0, this.result = void 0, this.previousStates = [], this.currentState = Object.freeze({
      container: [],
      key: null
    }), this.jsonpath = new Zt(), this.reset(), this.parser = new Qp({
      onready: () => {
        this.jsonpath = new Zt(), this.previousStates.length = 0, this.currentState.container.length = 0;
      },
      onopenobject: (n) => {
        this._openObject({}), typeof n < "u" && this.parser.emit("onkey", n);
      },
      onkey: (n) => {
        this.jsonpath.set(n), this.currentState.key = n;
      },
      oncloseobject: () => {
        this._closeObject();
      },
      onopenarray: () => {
        this._openArray();
      },
      onclosearray: () => {
        this._closeArray();
      },
      onvalue: (n) => {
        this._pushOrSet(n);
      },
      onerror: (n) => {
        throw n;
      },
      onend: () => {
        this.result = this.currentState.container.pop();
      },
      ...t
    });
  }
  reset() {
    this.result = void 0, this.previousStates = [], this.currentState = Object.freeze({
      container: [],
      key: null
    }), this.jsonpath = new Zt();
  }
  write(t) {
    this.parser.write(t);
  }
  close() {
    this.parser.close();
  }
  _pushOrSet(t) {
    const {
      container: n,
      key: s
    } = this.currentState;
    s !== null ? (n[s] = t, this.currentState.key = null) : n.push(t);
  }
  _openArray() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    this.jsonpath.push(null), this._pushOrSet(t), this.previousStates.push(this.currentState), this.currentState = {
      container: t,
      isArray: !0,
      key: null
    };
  }
  _closeArray() {
    this.jsonpath.pop(), this.currentState = this.previousStates.pop();
  }
  _openObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.jsonpath.push(null), this._pushOrSet(t), this.previousStates.push(this.currentState), this.currentState = {
      container: t,
      isArray: !1,
      key: null
    };
  }
  _closeObject() {
    this.jsonpath.pop(), this.currentState = this.previousStates.pop();
  }
}
class Yp extends $p {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super({
      onopenarray: () => {
        if (!this.streamingArray && this._matchJSONPath()) {
          this.streamingJsonPath = this.getJsonPath().clone(), this.streamingArray = [], this._openArray(this.streamingArray);
          return;
        }
        this._openArray();
      },
      onopenobject: (s) => {
        this.topLevelObject ? this._openObject({}) : (this.topLevelObject = {}, this._openObject(this.topLevelObject)), typeof s < "u" && this.parser.emit("onkey", s);
      }
    }), this.jsonPaths = void 0, this.streamingJsonPath = null, this.streamingArray = null, this.topLevelObject = null;
    const n = t.jsonpaths || [];
    this.jsonPaths = n.map((s) => new Zt(s));
  }
  write(t) {
    super.write(t);
    let n = [];
    return this.streamingArray && (n = [...this.streamingArray], this.streamingArray.length = 0), n;
  }
  getPartialResult() {
    return this.topLevelObject;
  }
  getStreamingJsonPath() {
    return this.streamingJsonPath;
  }
  getStreamingJsonPathAsString() {
    return this.streamingJsonPath && this.streamingJsonPath.toString();
  }
  getJsonPath() {
    return this.jsonpath;
  }
  _matchJSONPath() {
    const t = this.getJsonPath();
    if (this.jsonPaths.length === 0)
      return !0;
    for (const n of this.jsonPaths)
      if (n.equals(t))
        return !0;
    return !1;
  }
}
async function* Zp(e, t) {
  const n = Xp(e), {
    metadata: s
  } = t, {
    jsonpaths: r
  } = t.json || {};
  let i = !0;
  const o = null, a = new He(o, t), c = new Yp({
    jsonpaths: r
  });
  for await (const f of n) {
    const d = c.write(f), m = d.length > 0 && c.getStreamingJsonPathAsString();
    if (d.length > 0 && i) {
      if (s) {
        var u;
        yield {
          shape: (t == null || (u = t.json) === null || u === void 0 ? void 0 : u.shape) || "array-row-table",
          batchType: "partial-result",
          data: [],
          length: 0,
          bytesUsed: 0,
          container: c.getPartialResult(),
          jsonpath: m
        };
      }
      i = !1;
    }
    for (const y of d) {
      a.addRow(y);
      const E = a.getFullBatch({
        jsonpath: m
      });
      E && (yield E);
    }
    a.chunkComplete(f);
    const g = a.getFullBatch({
      jsonpath: m
    });
    g && (yield g);
  }
  const l = c.getStreamingJsonPathAsString(), h = a.getFinalBatch({
    jsonpath: l
  });
  h && (yield h), s && (yield {
    shape: "json",
    batchType: "final-result",
    container: c.getPartialResult(),
    jsonpath: c.getStreamingJsonPathAsString(),
    data: [],
    length: 0
  });
}
const Nn = {
  x: 0,
  y: 1,
  z: 2
};
function Ec(e, t = {}) {
  const { start: n = 0, end: s = e.length, plane: r = "xy" } = t, i = t.size || 2;
  let o = 0;
  const a = Nn[r[0]], c = Nn[r[1]];
  for (let u = n, l = s - i; u < s; u += i)
    o += (e[u + a] - e[l + a]) * (e[u + c] + e[l + c]), l = u;
  return o / 2;
}
function ty(e, t, n = 2, s, r = "xy") {
  const i = t && t.length, o = i ? t[0] * n : e.length;
  let a = Tc(e, 0, o, n, !0, s && s[0], r);
  const c = [];
  if (!a || a.next === a.prev)
    return c;
  let u, l, h, f, d, m, g;
  if (i && (a = iy(e, t, a, n, s, r)), e.length > 80 * n) {
    f = l = e[0], d = h = e[1];
    for (let y = n; y < o; y += n)
      m = e[y], g = e[y + 1], m < f && (f = m), g < d && (d = g), m > l && (l = m), g > h && (h = g);
    u = Math.max(l - f, h - d), u = u !== 0 ? 32767 / u : 0;
  }
  return Je(a, c, n, f, d, u, 0), c;
}
function Tc(e, t, n, s, r, i, o) {
  let a, c;
  i === void 0 && (i = Ec(e, { start: t, end: n, size: s, plane: o }));
  let u = Nn[o[0]], l = Nn[o[1]];
  if (r === i < 0)
    for (a = t; a < n; a += s)
      c = Ao(a, e[a + u], e[a + l], c);
  else
    for (a = n - s; a >= t; a -= s)
      c = Ao(a, e[a + u], e[a + l], c);
  return c && $n(c, c.next) && (je(c), c = c.next), c;
}
function ee(e, t) {
  if (!e)
    return e;
  t || (t = e);
  let n = e, s;
  do
    if (s = !1, !n.steiner && ($n(n, n.next) || z(n.prev, n, n.next) === 0)) {
      if (je(n), n = t = n.prev, n === n.next)
        break;
      s = !0;
    } else
      n = n.next;
  while (s || n !== t);
  return t;
}
function Je(e, t, n, s, r, i, o) {
  if (!e)
    return;
  !o && i && ly(e, s, r, i);
  let a = e, c, u;
  for (; e.prev !== e.next; ) {
    if (c = e.prev, u = e.next, i ? ny(e, s, r, i) : ey(e)) {
      t.push(c.i / n | 0), t.push(e.i / n | 0), t.push(u.i / n | 0), je(e), e = u.next, a = u.next;
      continue;
    }
    if (e = u, e === a) {
      o ? o === 1 ? (e = sy(ee(e), t, n), Je(e, t, n, s, r, i, 2)) : o === 2 && ry(e, t, n, s, r, i) : Je(ee(e), t, n, s, r, i, 1);
      break;
    }
  }
}
function ey(e) {
  const t = e.prev, n = e, s = e.next;
  if (z(t, n, s) >= 0)
    return !1;
  const r = t.x, i = n.x, o = s.x, a = t.y, c = n.y, u = s.y, l = r < i ? r < o ? r : o : i < o ? i : o, h = a < c ? a < u ? a : u : c < u ? c : u, f = r > i ? r > o ? r : o : i > o ? i : o, d = a > c ? a > u ? a : u : c > u ? c : u;
  let m = s.next;
  for (; m !== t; ) {
    if (m.x >= l && m.x <= f && m.y >= h && m.y <= d && ge(r, a, i, c, o, u, m.x, m.y) && z(m.prev, m, m.next) >= 0)
      return !1;
    m = m.next;
  }
  return !0;
}
function ny(e, t, n, s) {
  const r = e.prev, i = e, o = e.next;
  if (z(r, i, o) >= 0)
    return !1;
  const a = r.x, c = i.x, u = o.x, l = r.y, h = i.y, f = o.y, d = a < c ? a < u ? a : u : c < u ? c : u, m = l < h ? l < f ? l : f : h < f ? h : f, g = a > c ? a > u ? a : u : c > u ? c : u, y = l > h ? l > f ? l : f : h > f ? h : f, E = er(d, m, t, n, s), R = er(g, y, t, n, s);
  let B = e.prevZ, C = e.nextZ;
  for (; B && B.z >= E && C && C.z <= R; ) {
    if (B.x >= d && B.x <= g && B.y >= m && B.y <= y && B !== r && B !== o && ge(a, l, c, h, u, f, B.x, B.y) && z(B.prev, B, B.next) >= 0 || (B = B.prevZ, C.x >= d && C.x <= g && C.y >= m && C.y <= y && C !== r && C !== o && ge(a, l, c, h, u, f, C.x, C.y) && z(C.prev, C, C.next) >= 0))
      return !1;
    C = C.nextZ;
  }
  for (; B && B.z >= E; ) {
    if (B.x >= d && B.x <= g && B.y >= m && B.y <= y && B !== r && B !== o && ge(a, l, c, h, u, f, B.x, B.y) && z(B.prev, B, B.next) >= 0)
      return !1;
    B = B.prevZ;
  }
  for (; C && C.z <= R; ) {
    if (C.x >= d && C.x <= g && C.y >= m && C.y <= y && C !== r && C !== o && ge(a, l, c, h, u, f, C.x, C.y) && z(C.prev, C, C.next) >= 0)
      return !1;
    C = C.nextZ;
  }
  return !0;
}
function sy(e, t, n) {
  let s = e;
  do {
    const r = s.prev, i = s.next.next;
    !$n(r, i) && bc(r, s, s.next, i) && Ve(r, i) && Ve(i, r) && (t.push(r.i / n | 0), t.push(s.i / n | 0), t.push(i.i / n | 0), je(s), je(s.next), s = e = i), s = s.next;
  } while (s !== e);
  return ee(s);
}
function ry(e, t, n, s, r, i) {
  let o = e;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && dy(o, a)) {
        let c = _c(o, a);
        o = ee(o, o.next), c = ee(c, c.next), Je(o, t, n, s, r, i, 0), Je(c, t, n, s, r, i, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== e);
}
function iy(e, t, n, s, r, i) {
  const o = [];
  let a, c, u, l, h;
  for (a = 0, c = t.length; a < c; a++)
    u = t[a] * s, l = a < c - 1 ? t[a + 1] * s : e.length, h = Tc(e, u, l, s, !1, r && r[a + 1], i), h === h.next && (h.steiner = !0), o.push(fy(h));
  for (o.sort(oy), a = 0; a < o.length; a++)
    n = ay(o[a], n);
  return n;
}
function oy(e, t) {
  return e.x - t.x;
}
function ay(e, t) {
  const n = cy(e, t);
  if (!n)
    return t;
  const s = _c(n, e);
  return ee(s, s.next), ee(n, n.next);
}
function cy(e, t) {
  let n = t;
  const s = e.x, r = e.y;
  let i = -1 / 0, o;
  do {
    if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
      const f = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (f <= s && f > i && (i = f, o = n.x < n.next.x ? n : n.next, f === s))
        return o;
    }
    n = n.next;
  } while (n !== t);
  if (!o)
    return null;
  const a = o, c = o.x, u = o.y;
  let l = 1 / 0, h;
  n = o;
  do
    s >= n.x && n.x >= c && s !== n.x && ge(r < u ? s : i, r, c, u, r < u ? i : s, r, n.x, n.y) && (h = Math.abs(r - n.y) / (s - n.x), Ve(n, e) && (h < l || h === l && (n.x > o.x || n.x === o.x && uy(o, n))) && (o = n, l = h)), n = n.next;
  while (n !== a);
  return o;
}
function uy(e, t) {
  return z(e.prev, e, t.prev) < 0 && z(t.next, e, e.next) < 0;
}
function ly(e, t, n, s) {
  let r = e;
  do
    r.z === 0 && (r.z = er(r.x, r.y, t, n, s)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== e);
  r.prevZ.nextZ = null, r.prevZ = null, hy(r);
}
function hy(e) {
  let t, n, s = 1, r, i, o, a, c, u;
  do {
    for (i = e, e = null, u = null, r = 0; i; ) {
      for (r++, a = i, o = 0, n = 0; n < s && (o++, a = a.nextZ, !!a); n++)
        ;
      for (c = s; o > 0 || c > 0 && a; )
        o !== 0 && (c === 0 || !a || i.z <= a.z) ? (t = i, i = i.nextZ, o--) : (t = a, a = a.nextZ, c--), u ? u.nextZ = t : e = t, t.prevZ = u, u = t;
      i = a;
    }
    u.nextZ = null, s *= 2;
  } while (r > 1);
  return e;
}
function er(e, t, n, s, r) {
  return e = (e - n) * r | 0, t = (t - s) * r | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function fy(e) {
  let t = e, n = e;
  do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
  while (t !== e);
  return n;
}
function ge(e, t, n, s, r, i, o, a) {
  return (r - o) * (t - a) >= (e - o) * (i - a) && (e - o) * (s - a) >= (n - o) * (t - a) && (n - o) * (i - a) >= (r - o) * (s - a);
}
function dy(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !my(e, t) && // dones't intersect other edges
  (Ve(e, t) && Ve(t, e) && gy(e, t) && // locally visible
  (z(e.prev, e, t.prev) || z(e, t.prev, t)) || // does not create opposite-facing sectors
  $n(e, t) && z(e.prev, e, e.next) > 0 && z(t.prev, t, t.next) > 0);
}
function z(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function $n(e, t) {
  return e.x === t.x && e.y === t.y;
}
function bc(e, t, n, s) {
  const r = yn(z(e, t, n)), i = yn(z(e, t, s)), o = yn(z(n, s, e)), a = yn(z(n, s, t));
  return !!(r !== i && o !== a || r === 0 && pn(e, n, t) || i === 0 && pn(e, s, t) || o === 0 && pn(n, e, s) || a === 0 && pn(n, t, s));
}
function pn(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function yn(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function my(e, t) {
  let n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && bc(n, n.next, e, t))
      return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function Ve(e, t) {
  return z(e.prev, e, e.next) < 0 ? z(e, t, e.next) >= 0 && z(e, e.prev, t) >= 0 : z(e, t, e.prev) < 0 || z(e, e.next, t) < 0;
}
function gy(e, t) {
  let n = e, s = !1;
  const r = (e.x + t.x) / 2, i = (e.y + t.y) / 2;
  do
    n.y > i != n.next.y > i && n.next.y !== n.y && r < (n.next.x - n.x) * (i - n.y) / (n.next.y - n.y) + n.x && (s = !s), n = n.next;
  while (n !== e);
  return s;
}
function _c(e, t) {
  const n = new nr(e.i, e.x, e.y), s = new nr(t.i, t.x, t.y), r = e.next, i = t.prev;
  return e.next = t, t.prev = e, n.next = r, r.prev = n, s.next = n, n.prev = s, i.next = s, s.prev = i, s;
}
function Ao(e, t, n, s) {
  const r = new nr(e, t, n);
  return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r, r.next = r), r;
}
function je(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
class nr {
  constructor(t, n, s) {
    this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1, this.i = t, this.x = n, this.y = s;
  }
}
function Ay(e, t, n) {
  const s = py(e), r = Object.keys(s).filter((i) => s[i] !== Array);
  return yy(e, {
    propArrayTypes: s,
    ...t
  }, {
    numericPropKeys: n && n.numericPropKeys || r,
    PositionDataType: n ? n.PositionDataType : Float32Array,
    triangulate: n ? n.triangulate : !0
  });
}
function py(e) {
  const t = {};
  for (const n of e)
    if (n.properties)
      for (const s in n.properties) {
        const r = n.properties[s];
        t[s] = _y(r, t[s]);
      }
  return t;
}
function yy(e, t, n) {
  const {
    pointPositionsCount: s,
    pointFeaturesCount: r,
    linePositionsCount: i,
    linePathsCount: o,
    lineFeaturesCount: a,
    polygonPositionsCount: c,
    polygonObjectsCount: u,
    polygonRingsCount: l,
    polygonFeaturesCount: h,
    propArrayTypes: f,
    coordLength: d
  } = t, {
    numericPropKeys: m = [],
    PositionDataType: g = Float32Array,
    triangulate: y = !0
  } = n, E = e[0] && "id" in e[0], R = e.length > 65535 ? Uint32Array : Uint16Array, B = {
    type: "Point",
    positions: new g(s * d),
    globalFeatureIds: new R(s),
    featureIds: r > 65535 ? new Uint32Array(s) : new Uint16Array(s),
    numericProps: {},
    properties: [],
    fields: []
  }, C = {
    type: "LineString",
    pathIndices: i > 65535 ? new Uint32Array(o + 1) : new Uint16Array(o + 1),
    positions: new g(i * d),
    globalFeatureIds: new R(i),
    featureIds: a > 65535 ? new Uint32Array(i) : new Uint16Array(i),
    numericProps: {},
    properties: [],
    fields: []
  }, M = {
    type: "Polygon",
    polygonIndices: c > 65535 ? new Uint32Array(u + 1) : new Uint16Array(u + 1),
    primitivePolygonIndices: c > 65535 ? new Uint32Array(l + 1) : new Uint16Array(l + 1),
    positions: new g(c * d),
    globalFeatureIds: new R(c),
    featureIds: h > 65535 ? new Uint32Array(c) : new Uint16Array(c),
    numericProps: {},
    properties: [],
    fields: []
  };
  y && (M.triangles = []);
  for (const F of [B, C, M])
    for (const v of m) {
      const O = f[v];
      F.numericProps[v] = new O(F.positions.length / d);
    }
  C.pathIndices[o] = i, M.polygonIndices[u] = c, M.primitivePolygonIndices[l] = c;
  const b = {
    pointPosition: 0,
    pointFeature: 0,
    linePosition: 0,
    linePath: 0,
    lineFeature: 0,
    polygonPosition: 0,
    polygonObject: 0,
    polygonRing: 0,
    polygonFeature: 0,
    feature: 0
  };
  for (const F of e) {
    const v = F.geometry, O = F.properties || {};
    switch (v.type) {
      case "Point":
        By(v, B, b, d, O), B.properties.push(Ms(O, m)), E && B.fields.push({
          id: F.id
        }), b.pointFeature++;
        break;
      case "LineString":
        Cy(v, C, b, d, O), C.properties.push(Ms(O, m)), E && C.fields.push({
          id: F.id
        }), b.lineFeature++;
        break;
      case "Polygon":
        Ey(v, M, b, d, O), M.properties.push(Ms(O, m)), E && M.fields.push({
          id: F.id
        }), b.polygonFeature++;
        break;
      default:
        throw new Error("Invalid geometry type");
    }
    b.feature++;
  }
  return by(B, C, M, d);
}
function By(e, t, n, s, r) {
  t.positions.set(e.data, n.pointPosition * s);
  const i = e.data.length / s;
  Ur(t, r, n.pointPosition, i), t.globalFeatureIds.fill(n.feature, n.pointPosition, n.pointPosition + i), t.featureIds.fill(n.pointFeature, n.pointPosition, n.pointPosition + i), n.pointPosition += i;
}
function Cy(e, t, n, s, r) {
  t.positions.set(e.data, n.linePosition * s);
  const i = e.data.length / s;
  Ur(t, r, n.linePosition, i), t.globalFeatureIds.fill(n.feature, n.linePosition, n.linePosition + i), t.featureIds.fill(n.lineFeature, n.linePosition, n.linePosition + i);
  for (let o = 0, a = e.indices.length; o < a; ++o) {
    const c = e.indices[o], u = o === a - 1 ? e.data.length : e.indices[o + 1];
    t.pathIndices[n.linePath++] = n.linePosition, n.linePosition += (u - c) / s;
  }
}
function Ey(e, t, n, s, r) {
  t.positions.set(e.data, n.polygonPosition * s);
  const i = e.data.length / s;
  Ur(t, r, n.polygonPosition, i), t.globalFeatureIds.fill(n.feature, n.polygonPosition, n.polygonPosition + i), t.featureIds.fill(n.polygonFeature, n.polygonPosition, n.polygonPosition + i);
  for (let o = 0, a = e.indices.length; o < a; ++o) {
    const c = n.polygonPosition;
    t.polygonIndices[n.polygonObject++] = c;
    const u = e.areas[o], l = e.indices[o], h = e.indices[o + 1];
    for (let d = 0, m = l.length; d < m; ++d) {
      const g = l[d], y = d === m - 1 ? h === void 0 ? e.data.length : h[0] : l[d + 1];
      t.primitivePolygonIndices[n.polygonRing++] = n.polygonPosition, n.polygonPosition += (y - g) / s;
    }
    const f = n.polygonPosition;
    Ty(t, u, l, {
      startPosition: c,
      endPosition: f,
      coordLength: s
    });
  }
}
function Ty(e, t, n, s) {
  let {
    startPosition: r,
    endPosition: i,
    coordLength: o
  } = s;
  if (!e.triangles)
    return;
  const a = r * o, c = i * o, u = e.positions.subarray(a, c), l = n[0], h = n.slice(1).map((d) => (d - l) / o), f = ty(u, h, o, t);
  for (let d = 0, m = f.length; d < m; ++d)
    e.triangles.push(r + f[d]);
}
function Rs(e, t) {
  const n = {};
  for (const s in e)
    n[s] = {
      value: e[s],
      size: t
    };
  return n;
}
function by(e, t, n, s) {
  const r = {
    shape: "binary-feature-collection",
    points: {
      ...e,
      positions: {
        value: e.positions,
        size: s
      },
      globalFeatureIds: {
        value: e.globalFeatureIds,
        size: 1
      },
      featureIds: {
        value: e.featureIds,
        size: 1
      },
      numericProps: Rs(e.numericProps, 1)
    },
    lines: {
      ...t,
      positions: {
        value: t.positions,
        size: s
      },
      pathIndices: {
        value: t.pathIndices,
        size: 1
      },
      globalFeatureIds: {
        value: t.globalFeatureIds,
        size: 1
      },
      featureIds: {
        value: t.featureIds,
        size: 1
      },
      numericProps: Rs(t.numericProps, 1)
    },
    polygons: {
      ...n,
      positions: {
        value: n.positions,
        size: s
      },
      polygonIndices: {
        value: n.polygonIndices,
        size: 1
      },
      primitivePolygonIndices: {
        value: n.primitivePolygonIndices,
        size: 1
      },
      globalFeatureIds: {
        value: n.globalFeatureIds,
        size: 1
      },
      featureIds: {
        value: n.featureIds,
        size: 1
      },
      numericProps: Rs(n.numericProps, 1)
    }
  };
  return r.polygons && n.triangles && (r.polygons.triangles = {
    value: new Uint32Array(n.triangles),
    size: 1
  }), r;
}
function Ur(e, t, n, s) {
  for (const r in e.numericProps)
    if (r in t) {
      const i = t[r];
      e.numericProps[r].fill(i, n, n + s);
    }
}
function Ms(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function _y(e, t) {
  return t === Array || !Number.isFinite(e) ? Array : t === Float64Array || Math.fround(e) !== e ? Float64Array : Float32Array;
}
function wy(e) {
  let t = 0, n = 0, s = 0, r = 0, i = 0, o = 0, a = 0, c = 0, u = 0;
  const l = /* @__PURE__ */ new Set();
  for (const h of e) {
    const f = h.geometry;
    switch (f.type) {
      case "Point":
        n++, t++, l.add(f.coordinates.length);
        break;
      case "MultiPoint":
        n++, t += f.coordinates.length;
        for (const m of f.coordinates)
          l.add(m.length);
        break;
      case "LineString":
        i++, s += f.coordinates.length, r++;
        for (const m of f.coordinates)
          l.add(m.length);
        break;
      case "MultiLineString":
        i++;
        for (const m of f.coordinates) {
          s += m.length, r++;
          for (const g of m)
            l.add(g.length);
        }
        break;
      case "Polygon":
        u++, a++, c += f.coordinates.length;
        const d = f.coordinates.flat();
        o += d.length;
        for (const m of d)
          l.add(m.length);
        break;
      case "MultiPolygon":
        u++;
        for (const m of f.coordinates) {
          a++, c += m.length;
          const g = m.flat();
          o += g.length;
          for (const y of g)
            l.add(y.length);
        }
        break;
      default:
        throw new Error(`Unsupported geometry type: ${f.type}`);
    }
  }
  return {
    coordLength: l.size > 0 ? Math.max(...l) : 2,
    pointPositionsCount: t,
    pointFeaturesCount: n,
    linePositionsCount: s,
    linePathsCount: r,
    lineFeaturesCount: i,
    polygonPositionsCount: o,
    polygonObjectsCount: a,
    polygonRingsCount: c,
    polygonFeaturesCount: u
  };
}
function Ry(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    coordLength: 2,
    fixRingWinding: !0
  };
  return e.map((n) => My(n, t));
}
function po(e, t, n, s) {
  n.push(t.length), t.push(...e);
  for (let r = e.length; r < s.coordLength; r++)
    t.push(0);
}
function sr(e, t, n, s) {
  n.push(t.length);
  for (const r of e) {
    t.push(...r);
    for (let i = r.length; i < s.coordLength; i++)
      t.push(0);
  }
}
function yo(e, t, n, s, r) {
  let i = 0;
  const o = [], a = [];
  for (const c of e) {
    const u = c.map((f) => f.slice(0, 2));
    let l = Ec(u.flat());
    const h = l < 0;
    r.fixRingWinding && (i === 0 && !h || i > 0 && h) && (c.reverse(), l = -l), o.push(l), sr(c, t, a, r), i++;
  }
  i > 0 && (s.push(o), n.push(a));
}
function My(e, t) {
  const {
    geometry: n
  } = e;
  if (n.type === "GeometryCollection")
    throw new Error("GeometryCollection type not supported");
  const s = [], r = [];
  let i, o;
  switch (n.type) {
    case "Point":
      o = "Point", po(n.coordinates, s, r, t);
      break;
    case "MultiPoint":
      o = "Point", n.coordinates.map((a) => po(a, s, r, t));
      break;
    case "LineString":
      o = "LineString", sr(n.coordinates, s, r, t);
      break;
    case "MultiLineString":
      o = "LineString", n.coordinates.map((a) => sr(a, s, r, t));
      break;
    case "Polygon":
      o = "Polygon", i = [], yo(n.coordinates, s, r, i, t);
      break;
    case "MultiPolygon":
      o = "Polygon", i = [], n.coordinates.map((a) => yo(a, s, r, i, t));
      break;
    default:
      throw new Error(`Unknown type: ${o}`);
  }
  return {
    ...e,
    geometry: {
      type: o,
      indices: r,
      data: s,
      areas: i
    }
  };
}
function wc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    fixRingWinding: !0,
    triangulate: !0
  };
  const n = wy(e), s = n.coordLength, {
    fixRingWinding: r
  } = t, i = Ry(e, {
    coordLength: s,
    fixRingWinding: r
  });
  return Ay(i, n, {
    numericPropKeys: t.numericPropKeys,
    PositionDataType: t.PositionDataType || Float32Array,
    triangulate: t.triangulate
  });
}
const Sy = "4.1.4", Iy = {
  name: "GeoJSON",
  id: "geojson",
  module: "geojson",
  version: Sy,
  worker: !0,
  extensions: ["geojson"],
  mimeTypes: ["application/geo+json"],
  category: "geometry",
  text: !0,
  options: {
    geojson: {
      shape: "object-row-table"
    },
    json: {
      shape: "object-row-table",
      jsonpaths: ["$", "$.features"]
    },
    gis: {
      format: "geojson"
    }
  }
}, ke = {
  ...Iy,
  parse: xy,
  parseTextSync: Rc,
  parseInBatches: Oy
};
async function xy(e, t) {
  return Rc(new TextDecoder().decode(e), t);
}
function Rc(e, t) {
  var n;
  t = {
    ...ke.options,
    ...t
  }, t.geojson = {
    ...ke.options.geojson,
    ...t.geojson
  }, t.gis = t.gis || {};
  let s;
  try {
    s = JSON.parse(e);
  } catch {
    s = {};
  }
  const r = {
    shape: "geojson-table",
    type: "FeatureCollection",
    features: ((n = s) === null || n === void 0 ? void 0 : n.features) || []
  };
  switch (t.gis.format) {
    case "binary":
      return wc(r.features);
    default:
      return r;
  }
}
function Oy(e, t) {
  t = {
    ...ke.options,
    ...t
  }, t.json = {
    ...ke.options.geojson,
    ...t.geojson
  };
  const n = Zp(e, t);
  switch (t.gis.format) {
    case "binary":
      return Fy(n);
    default:
      return n;
  }
}
async function* Fy(e) {
  for await (const t of e)
    t.data = wc(t.data), yield t;
}
function $t(e, t) {
  if (!e)
    throw new Error(t || "loader assertion failed.");
}
const vy = "Queued Requests", Dy = "Active Requests", Ly = "Cancelled Requests", Py = "Queued Requests Ever", Gy = "Active Requests Ever", Ny = {
  id: "request-scheduler",
  /** Specifies if the request scheduler should throttle incoming requests, mainly for comparative testing. */
  throttleRequests: !0,
  /** The maximum number of simultaneous active requests. Un-throttled requests do not observe this limit. */
  maxRequests: 6,
  /**
   * Specifies a debounce time, in milliseconds. All requests are queued, until no new requests have
   * been added to the queue for this amount of time.
   */
  debounceTime: 0
};
class Uy {
  constructor(t = {}) {
    p(this, "props");
    p(this, "stats");
    p(this, "activeRequestCount", 0);
    /** Tracks the number of active requests and prioritizes/cancels queued requests. */
    p(this, "requestQueue", []);
    p(this, "requestMap", /* @__PURE__ */ new Map());
    p(this, "updateTimer", null);
    this.props = { ...Ny, ...t }, this.stats = new Qo({ id: this.props.id }), this.stats.get(vy), this.stats.get(Dy), this.stats.get(Ly), this.stats.get(Py), this.stats.get(Gy);
  }
  /**
   * Called by an application that wants to issue a request, without having it deeply queued by the browser
   *
   * When the returned promise resolved, it is OK for the application to issue a request.
   * The promise resolves to an object that contains a `done` method.
   * When the application's request has completed (or failed), the application must call the `done` function
   *
   * @param handle
   * @param getPriority will be called when request "slots" open up,
   *    allowing the caller to update priority or cancel the request
   *    Highest priority executes first, priority < 0 cancels the request
   * @returns a promise
   *   - resolves to a object (with a `done` field) when the request can be issued without queueing,
   *   - resolves to `null` if the request has been cancelled (by the callback return < 0).
   *     In this case the application should not issue the request
   */
  scheduleRequest(t, n = () => 0) {
    if (!this.props.throttleRequests)
      return Promise.resolve({ done: () => {
      } });
    if (this.requestMap.has(t))
      return this.requestMap.get(t);
    const s = { handle: t, priority: 0, getPriority: n }, r = new Promise((i) => (s.resolve = i, s));
    return this.requestQueue.push(s), this.requestMap.set(t, r), this._issueNewRequests(), r;
  }
  // PRIVATE
  _issueRequest(t) {
    const { handle: n, resolve: s } = t;
    let r = !1;
    const i = () => {
      r || (r = !0, this.requestMap.delete(n), this.activeRequestCount--, this._issueNewRequests());
    };
    return this.activeRequestCount++, s ? s({ done: i }) : Promise.resolve({ done: i });
  }
  /** We check requests asynchronously, to prevent multiple updates */
  _issueNewRequests() {
    this.updateTimer !== null && clearTimeout(this.updateTimer), this.updateTimer = setTimeout(() => this._issueNewRequestsAsync(), this.props.debounceTime);
  }
  /** Refresh all requests  */
  _issueNewRequestsAsync() {
    this.updateTimer !== null && clearTimeout(this.updateTimer), this.updateTimer = null;
    const t = Math.max(this.props.maxRequests - this.activeRequestCount, 0);
    if (t !== 0) {
      this._updateAllRequests();
      for (let n = 0; n < t; ++n) {
        const s = this.requestQueue.shift();
        s && this._issueRequest(s);
      }
    }
  }
  /** Ensure all requests have updated priorities, and that no longer valid requests are cancelled */
  _updateAllRequests() {
    const t = this.requestQueue;
    for (let n = 0; n < t.length; ++n) {
      const s = t[n];
      this._updateRequest(s) || (t.splice(n, 1), this.requestMap.delete(s.handle), n--);
    }
    t.sort((n, s) => n.priority - s.priority);
  }
  /** Update a single request by calling the callback */
  _updateRequest(t) {
    return t.priority = t.getPriority(t.handle), t.priority < 0 ? (t.resolve(null), !1) : !0;
  }
}
function Hy(e) {
  const t = e ? e.lastIndexOf("/") : -1;
  return t >= 0 ? e.substr(0, t) : "";
}
class Jy {
  constructor(t, n, s) {
    p(this, "item");
    p(this, "previous");
    p(this, "next");
    this.item = t, this.previous = n, this.next = s;
  }
}
class Vy {
  constructor() {
    p(this, "head", null);
    p(this, "tail", null);
    p(this, "_length", 0);
  }
  get length() {
    return this._length;
  }
  /**
   * Adds the item to the end of the list
   * @param {*} [item]
   * @return {DoublyLinkedListNode}
   */
  add(t) {
    const n = new Jy(t, this.tail, null);
    return this.tail ? (this.tail.next = n, this.tail = n) : (this.head = n, this.tail = n), ++this._length, n;
  }
  /**
   * Removes the given node from the list
   * @param {DoublyLinkedListNode} node
   */
  remove(t) {
    t && (t.previous && t.next ? (t.previous.next = t.next, t.next.previous = t.previous) : t.previous ? (t.previous.next = null, this.tail = t.previous) : t.next ? (t.next.previous = null, this.head = t.next) : (this.head = null, this.tail = null), t.next = null, t.previous = null, --this._length);
  }
  /**
   * Moves nextNode after node
   * @param {DoublyLinkedListNode} node
   * @param {DoublyLinkedListNode} nextNode
   */
  splice(t, n) {
    t !== n && (this.remove(n), this._insert(t, n));
  }
  _insert(t, n) {
    const s = t.next;
    t.next = n, this.tail === t ? this.tail = n : s.previous = n, n.next = s, n.previous = t, ++this._length;
  }
}
class jy {
  constructor() {
    p(this, "_list");
    p(this, "_sentinel");
    p(this, "_trimTiles");
    this._list = new Vy(), this._sentinel = this._list.add("sentinel"), this._trimTiles = !1;
  }
  reset() {
    this._list.splice(this._list.tail, this._sentinel);
  }
  touch(t) {
    const n = t._cacheNode;
    n && this._list.splice(this._sentinel, n);
  }
  add(t, n, s) {
    n._cacheNode || (n._cacheNode = this._list.add(n), s && s(t, n));
  }
  unloadTile(t, n, s) {
    const r = n._cacheNode;
    r && (this._list.remove(r), n._cacheNode = null, s && s(t, n));
  }
  unloadTiles(t, n) {
    const s = this._trimTiles;
    this._trimTiles = !1;
    const r = this._list, i = t.maximumMemoryUsage * 1024 * 1024, o = this._sentinel;
    let a = r.head;
    for (; a !== o && (t.gpuMemoryUsageInBytes > i || s); ) {
      const c = a.item;
      a = a.next, this.unloadTile(t, c, n);
    }
  }
  trim() {
    this._trimTiles = !0;
  }
}
function ky(e, t) {
  $t(e), $t(t);
  const { rtcCenter: n, gltfUpAxis: s } = t, { computedTransform: r, boundingVolume: { center: i } } = e;
  let o = new V(r);
  switch (n && o.translate(n), s) {
    case "Z":
      break;
    case "Y":
      const h = new V().rotateX(Math.PI / 2);
      o = o.multiplyRight(h);
      break;
    case "X":
      const f = new V().rotateY(-Math.PI / 2);
      o = o.multiplyRight(f);
      break;
  }
  t.isQuantized && o.translate(t.quantizedVolumeOffset).scale(t.quantizedVolumeScale);
  const a = new A(i);
  t.cartesianModelMatrix = o, t.cartesianOrigin = a;
  const c = J.WGS84.cartesianToCartographic(a, new A()), l = J.WGS84.eastNorthUpToFixedFrame(a).invert();
  t.cartographicModelMatrix = l.multiplyRight(o), t.cartographicOrigin = c, t.coordinateSystem || (t.modelMatrix = t.cartographicModelMatrix);
}
const Bo = new A(), Ss = new A(), rr = new dt([
  new tt(),
  new tt(),
  new tt(),
  new tt(),
  new tt(),
  new tt()
]);
function Ky(e, t) {
  const { cameraDirection: n, cameraUp: s, height: r } = e, { metersPerUnit: i } = e.distanceScales, o = _n(e, e.center), a = J.WGS84.eastNorthUpToFixedFrame(o), c = e.unprojectPosition(e.cameraPosition), u = J.WGS84.cartographicToCartesian(c, new A()), l = new A(
    // @ts-ignore
    a.transformAsVector(new A(n).scale(i))
  ).normalize(), h = new A(
    // @ts-ignore
    a.transformAsVector(new A(s).scale(i))
  ).normalize();
  Wy(e);
  const f = e.constructor, { longitude: d, latitude: m, width: g, bearing: y, zoom: E } = e, R = new f({
    longitude: d,
    latitude: m,
    height: r,
    width: g,
    bearing: y,
    zoom: E,
    pitch: 0
  });
  return {
    camera: {
      position: u,
      direction: l,
      up: h
    },
    viewport: e,
    topDownViewport: R,
    height: r,
    cullingVolume: rr,
    frameNumber: t,
    // TODO: This can be the same between updates, what number is unique for between updates?
    sseDenominator: 1.15
    // Assumes fovy = 60 degrees
  };
}
function zy(e, t, n) {
  if (n === 0 || e.length <= n)
    return [e, []];
  const s = [], { longitude: r, latitude: i } = t.viewport;
  for (const [u, l] of e.entries()) {
    const [h, f] = l.header.mbs, d = Math.abs(r - h), m = Math.abs(i - f), g = Math.sqrt(m * m + d * d);
    s.push([u, g]);
  }
  const o = s.sort((u, l) => u[1] - l[1]), a = [];
  for (let u = 0; u < n; u++)
    a.push(e[o[u][0]]);
  const c = [];
  for (let u = n; u < o.length; u++)
    c.push(e[o[u][0]]);
  return [a, c];
}
function Wy(e) {
  const t = e.getFrustumPlanes(), n = Co(t.near, e.cameraPosition), s = _n(e, n), r = _n(e, e.cameraPosition, Ss);
  let i = 0;
  rr.planes[i++].fromPointNormal(s, Bo.copy(s).subtract(r));
  for (const o in t) {
    if (o === "near")
      continue;
    const a = t[o], c = Co(a, n, Ss), u = _n(e, c, Ss);
    rr.planes[i++].fromPointNormal(
      u,
      // Want the normal to point into the frustum since that's what culling expects
      Bo.copy(s).subtract(u)
    );
  }
}
function Co(e, t, n = new A()) {
  const s = e.normal.dot(t);
  return n.copy(e.normal).scale(e.distance - s).add(t), n;
}
function _n(e, t, n = new A()) {
  const s = e.unprojectPosition(t);
  return J.WGS84.cartographicToCartesian(s, n);
}
const Xy = 6378137, Qy = 6378137, ir = 6356752314245179e-9, Ae = new A();
function qy(e, t) {
  if (e instanceof Qe) {
    const { halfAxes: n } = e, s = Yy(n);
    return Math.log2(ir / (s + t[2]));
  } else if (e instanceof Xe) {
    const { radius: n } = e;
    return Math.log2(ir / (n + t[2]));
  } else if (e.width && e.height) {
    const { width: n, height: s } = e, r = Math.log2(Xy / n), i = Math.log2(Qy / s);
    return (r + i) / 2;
  }
  return 1;
}
function Mc(e, t, n) {
  J.WGS84.cartographicToCartesian([e.xmax, e.ymax, e.zmax], Ae);
  const s = Math.sqrt(Math.pow(Ae[0] - n[0], 2) + Math.pow(Ae[1] - n[1], 2) + Math.pow(Ae[2] - n[2], 2));
  return Math.log2(ir / (s + t[2]));
}
function $y(e, t, n) {
  const [s, r, i, o] = e;
  return Mc({ xmin: s, xmax: i, ymin: r, ymax: o, zmin: 0, zmax: 0 }, t, n);
}
function Yy(e) {
  e.getColumn(0, Ae);
  const t = e.getColumn(1), n = e.getColumn(2);
  return Ae.add(t).add(n).len();
}
const lt = {
  UNLOADED: 0,
  // Has never been requested
  LOADING: 1,
  // Is waiting on a pending request
  PROCESSING: 2,
  // Request received.  Contents are being processed for rendering.  Depending on the content, it might make its own requests for external data.
  READY: 3,
  // Ready to render.
  EXPIRED: 4,
  // Is expired and will be unloaded once new content is loaded.
  FAILED: 5
  // Request failed.
};
var Ut;
(function(e) {
  e[e.ADD = 1] = "ADD", e[e.REPLACE = 2] = "REPLACE";
})(Ut || (Ut = {}));
var Pe;
(function(e) {
  e.EMPTY = "empty", e.SCENEGRAPH = "scenegraph", e.POINTCLOUD = "pointcloud", e.MESH = "mesh";
})(Pe || (Pe = {}));
var At;
(function(e) {
  e.I3S = "I3S", e.TILES3D = "TILES3D";
})(At || (At = {}));
var Eo;
(function(e) {
  e.GEOMETRIC_ERROR = "geometricError", e.MAX_SCREEN_THRESHOLD = "maxScreenThreshold";
})(Eo || (Eo = {}));
const Zy = {
  NOT_COMPUTED: -1,
  USE_OPTIMIZATION: 1,
  SKIP_OPTIMIZATION: 0
};
function Sc(e) {
  return e != null;
}
const rt = new A(), wn = new A(), tB = new A(), eB = new A(), Qt = new A(), To = new A(), bo = new A(), _o = new A();
function Is(e, t, n) {
  if ($t(e, "3D Tile: boundingVolume must be defined"), e.box)
    return Ic(e.box, t, n);
  if (e.region)
    return rB(e.region);
  if (e.sphere)
    return sB(e.sphere, t, n);
  throw new Error("3D Tile: boundingVolume must contain a sphere, region, or box");
}
function nB(e, t) {
  if (e.box)
    return iB(t);
  if (e.region) {
    const [n, s, r, i, o, a] = e.region;
    return [
      [wt(n), wt(s), o],
      [wt(r), wt(i), a]
    ];
  }
  if (e.sphere)
    return oB(t);
  throw new Error("Unkown boundingVolume type");
}
function Ic(e, t, n) {
  const s = new A(e[0], e[1], e[2]);
  t.transform(s, s);
  let r = [];
  if (e.length === 10) {
    const u = e.slice(3, 6), l = new xn();
    l.fromArray(e, 6);
    const h = new A([1, 0, 0]), f = new A([0, 1, 0]), d = new A([0, 0, 1]);
    h.transformByQuaternion(l), h.scale(u[0]), f.transformByQuaternion(l), f.scale(u[1]), d.transformByQuaternion(l), d.scale(u[2]), r = [...h.toArray(), ...f.toArray(), ...d.toArray()];
  } else
    r = [...e.slice(3, 6), ...e.slice(6, 9), ...e.slice(9, 12)];
  const i = t.transformAsVector(r.slice(0, 3)), o = t.transformAsVector(r.slice(3, 6)), a = t.transformAsVector(r.slice(6, 9)), c = new W([
    i[0],
    i[1],
    i[2],
    o[0],
    o[1],
    o[2],
    a[0],
    a[1],
    a[2]
  ]);
  return Sc(n) ? (n.center = s, n.halfAxes = c, n) : new Qe(s, c);
}
function sB(e, t, n) {
  const s = new A(e[0], e[1], e[2]);
  t.transform(s, s);
  const r = t.getScale(wn), i = Math.max(Math.max(r[0], r[1]), r[2]), o = e[3] * i;
  return Sc(n) ? (n.center = s, n.radius = o, n) : new Xe(s, o);
}
function rB(e) {
  const [t, n, s, r, i, o] = e, a = J.WGS84.cartographicToCartesian([wt(t), wt(r), i], tB), c = J.WGS84.cartographicToCartesian([wt(s), wt(n), o], eB), u = new A().addVectors(a, c).multiplyByScalar(0.5);
  return J.WGS84.cartesianToCartographic(u, Qt), J.WGS84.cartographicToCartesian([wt(s), Qt[1], Qt[2]], To), J.WGS84.cartographicToCartesian([Qt[0], wt(r), Qt[2]], bo), J.WGS84.cartographicToCartesian([Qt[0], Qt[1], o], _o), Ic([
    ...u,
    ...To.subtract(u),
    ...bo.subtract(u),
    ..._o.subtract(u)
  ], new V());
}
function iB(e) {
  const t = xc(), { halfAxes: n } = e, s = new A(n.getColumn(0)), r = new A(n.getColumn(1)), i = new A(n.getColumn(2));
  for (let o = 0; o < 2; o++) {
    for (let a = 0; a < 2; a++) {
      for (let c = 0; c < 2; c++)
        rt.copy(e.center), rt.add(s), rt.add(r), rt.add(i), Oc(t, rt), i.negate();
      r.negate();
    }
    s.negate();
  }
  return t;
}
function oB(e) {
  const t = xc(), { center: n, radius: s } = e, r = J.WGS84.scaleToGeodeticSurface(n, rt);
  let i;
  r ? i = J.WGS84.geodeticSurfaceNormal(r) : i = new A(0, 0, 1);
  let o = new A(i[2], -i[1], 0);
  o.len() > 0 ? o.normalize() : o = new A(0, 1, 0);
  const a = o.clone().cross(i);
  for (const c of [o, a, i]) {
    wn.copy(c).scale(s);
    for (let u = 0; u < 2; u++)
      rt.copy(n), rt.add(wn), Oc(t, rt), wn.negate();
  }
  return t;
}
function xc() {
  return [
    [1 / 0, 1 / 0, 1 / 0],
    [-1 / 0, -1 / 0, -1 / 0]
  ];
}
function Oc(e, t) {
  J.WGS84.cartesianToCartographic(t, rt), e[0][0] = Math.min(e[0][0], rt[0]), e[0][1] = Math.min(e[0][1], rt[1]), e[0][2] = Math.min(e[0][2], rt[2]), e[1][0] = Math.max(e[1][0], rt[0]), e[1][1] = Math.max(e[1][1], rt[1]), e[1][2] = Math.max(e[1][2], rt[2]);
}
new A();
new A();
new V();
new A();
new A();
new A();
function aB(e, t) {
  const n = e * t;
  return 1 - Math.exp(-(n * n));
}
function cB(e, t) {
  if (e.dynamicScreenSpaceError && e.dynamicScreenSpaceErrorComputedDensity) {
    const n = e.dynamicScreenSpaceErrorComputedDensity, s = e.dynamicScreenSpaceErrorFactor;
    return aB(t, n) * s;
  }
  return 0;
}
function uB(e, t, n) {
  const s = e.tileset, r = e.parent && e.parent.lodMetricValue || e.lodMetricValue, i = n ? r : e.lodMetricValue;
  if (i === 0)
    return 0;
  const o = Math.max(e._distanceToCamera, 1e-7), { height: a, sseDenominator: c } = t, { viewDistanceScale: u } = s.options;
  let l = i * a * (u || 1) / (o * c);
  return l -= cB(s, o), l;
}
const xs = new A(), wo = new A(), Vt = new A(), Ro = new A(), lB = new A(), Os = new V(), Mo = new V();
function hB(e, t) {
  if (e.lodMetricValue === 0 || isNaN(e.lodMetricValue))
    return "DIG";
  const n = 2 * Fc(e, t);
  return n < 2 ? "OUT" : !e.header.children || n <= e.lodMetricValue ? "DRAW" : e.header.children ? "DIG" : "OUT";
}
function Fc(e, t) {
  const { topDownViewport: n } = t, s = e.header.mbs[1], r = e.header.mbs[0], i = e.header.mbs[2], o = e.header.mbs[3], a = [...e.boundingVolume.center], c = n.unprojectPosition(n.cameraPosition);
  J.WGS84.cartographicToCartesian(c, xs), wo.copy(xs).subtract(a).normalize(), J.WGS84.eastNorthUpToFixedFrame(a, Os), Mo.copy(Os).invert(), Vt.copy(xs).transform(Mo);
  const u = Math.sqrt(Vt[0] * Vt[0] + Vt[1] * Vt[1]), l = u * u / Vt[2];
  Ro.copy([Vt[0], Vt[1], l]);
  const f = Ro.transform(Os).subtract(a).normalize(), m = wo.cross(f).normalize().scale(o).add(a), g = J.WGS84.cartesianToCartographic(m), y = n.project([r, s, i]), E = n.project(g);
  return lB.copy(y).subtract(E).magnitude();
}
function fB(e) {
  return {
    assetGltfUpAxis: e.asset && e.asset.gltfUpAxis || "Y"
  };
}
class So {
  constructor(t = 0) {
    p(this, "_map", /* @__PURE__ */ new Map());
    p(this, "_array");
    p(this, "_length");
    this._array = new Array(t), this._length = t;
  }
  /**
   * Gets or sets the length of the array.
   * If the set length is greater than the length of the internal array, the internal array is resized.
   *
   * @memberof ManagedArray.prototype
   * @type Number
   */
  get length() {
    return this._length;
  }
  set length(t) {
    this._length = t, t > this._array.length && (this._array.length = t);
  }
  /**
   * Gets the internal array.
   *
   * @memberof ManagedArray.prototype
   * @type Array
   * @readonly
   */
  get values() {
    return this._array;
  }
  /**
   * Gets the element at an index.
   *
   * @param {Number} index The index to get.
   */
  get(t) {
    return $t(t < this._array.length), this._array[t];
  }
  /**
   * Sets the element at an index. Resizes the array if index is greater than the length of the array.
   *
   * @param {Number} index The index to set.
   * @param {*} element The element to set at index.
   */
  set(t, n) {
    $t(t >= 0), t >= this.length && (this.length = t + 1), this._map.has(this._array[t]) && this._map.delete(this._array[t]), this._array[t] = n, this._map.set(n, t);
  }
  delete(t) {
    const n = this._map.get(t);
    n >= 0 && (this._array.splice(n, 1), this._map.delete(t), this.length--);
  }
  /**
   * Returns the last element in the array without modifying the array.
   *
   * @returns {*} The last element in the array.
   */
  peek() {
    return this._array[this._length - 1];
  }
  /**
   * Push an element into the array.
   *
   * @param {*} element The element to push.
   */
  push(t) {
    if (!this._map.has(t)) {
      const n = this.length++;
      this._array[n] = t, this._map.set(t, n);
    }
  }
  /**
   * Pop an element from the array.
   *
   * @returns {*} The last element in the array.
   */
  pop() {
    const t = this._array[--this.length];
    return this._map.delete(t), t;
  }
  /**
   * Resize the internal array if length > _array.length.
   *
   * @param {Number} length The length.
   */
  reserve(t) {
    $t(t >= 0), t > this._array.length && (this._array.length = t);
  }
  /**
   * Resize the array.
   *
   * @param {Number} length The length.
   */
  resize(t) {
    $t(t >= 0), this.length = t;
  }
  /**
   * Trim the internal array to the specified length. Defaults to the current length.
   *
   * @param {Number} [length] The length.
   */
  trim(t) {
    t == null && (t = this.length), this._array.length = t;
  }
  reset() {
    this._array = [], this._map = /* @__PURE__ */ new Map(), this._length = 0;
  }
  find(t) {
    return this._map.has(t);
  }
}
const dB = {
  loadSiblings: !1,
  skipLevelOfDetail: !1,
  updateTransforms: !0,
  onTraversalEnd: () => {
  },
  viewportTraversersMap: {},
  basePath: ""
};
class Yn {
  // TODO nested props
  constructor(t) {
    p(this, "options");
    // fulfill in traverse call
    p(this, "root", null);
    // tiles should be rendered
    p(this, "selectedTiles", {});
    // tiles should be loaded from server
    p(this, "requestedTiles", {});
    // tiles does not have render content
    p(this, "emptyTiles", {});
    p(this, "lastUpdate", (/* @__PURE__ */ new Date()).getTime());
    p(this, "updateDebounceTime", 1e3);
    /** temporary storage to hold the traversed tiles during a traversal */
    p(this, "_traversalStack", new So());
    p(this, "_emptyTraversalStack", new So());
    /** set in every traverse cycle */
    p(this, "_frameNumber", null);
    this.options = { ...dB, ...t };
  }
  // RESULT
  traversalFinished(t) {
    return !0;
  }
  // tiles should be visible
  traverse(t, n, s) {
    this.root = t, this.options = { ...this.options, ...s }, this.reset(), this.updateTile(t, n), this._frameNumber = n.frameNumber, this.executeTraversal(t, n);
  }
  reset() {
    this.requestedTiles = {}, this.selectedTiles = {}, this.emptyTiles = {}, this._traversalStack.reset(), this._emptyTraversalStack.reset();
  }
  /**
   * Execute traverse
   * Depth-first traversal that traverses all visible tiles and marks tiles for selection.
   * If skipLevelOfDetail is off then a tile does not refine until all children are loaded.
   * This is the traditional replacement refinement approach and is called the base traversal.
   * Tiles that have a greater screen space error than the base screen space error are part of the base traversal,
   * all other tiles are part of the skip traversal. The skip traversal allows for skipping levels of the tree
   * and rendering children and parent tiles simultaneously.
   */
  /* eslint-disable-next-line complexity, max-statements */
  executeTraversal(t, n) {
    const s = this._traversalStack;
    for (t._selectionDepth = 1, s.push(t); s.length > 0; ) {
      const i = s.pop();
      let o = !1;
      this.canTraverse(i, n) && (this.updateChildTiles(i, n), o = this.updateAndPushChildren(i, n, s, i.hasRenderContent ? i._selectionDepth + 1 : i._selectionDepth));
      const a = i.parent, c = !!(!a || a._shouldRefine), u = !o;
      i.hasRenderContent ? i.refine === Ut.ADD ? (this.loadTile(i, n), this.selectTile(i, n)) : i.refine === Ut.REPLACE && (this.loadTile(i, n), u && this.selectTile(i, n)) : (this.emptyTiles[i.id] = i, this.loadTile(i, n), u && this.selectTile(i, n)), this.touchTile(i, n), i._shouldRefine = o && c;
    }
    const r = (/* @__PURE__ */ new Date()).getTime();
    (this.traversalFinished(n) || r - this.lastUpdate > this.updateDebounceTime) && (this.lastUpdate = r, this.options.onTraversalEnd(n));
  }
  updateChildTiles(t, n) {
    const s = t.children;
    for (const r of s)
      this.updateTile(r, n);
  }
  /* eslint-disable complexity, max-statements */
  updateAndPushChildren(t, n, s, r) {
    const { loadSiblings: i, skipLevelOfDetail: o } = this.options, a = t.children;
    a.sort(this.compareDistanceToCamera.bind(this));
    const c = t.refine === Ut.REPLACE && t.hasRenderContent && !o;
    let u = !1, l = !0;
    for (const h of a)
      if (h._selectionDepth = r, h.isVisibleAndInRequestVolume ? (s.find(h) && s.delete(h), s.push(h), u = !0) : (c || i) && (this.loadTile(h, n), this.touchTile(h, n)), c) {
        let f;
        if (h._inRequestVolume ? h.hasRenderContent ? f = h.contentAvailable : f = this.executeEmptyTraversal(h, n) : f = !1, l = l && f, !l)
          return !1;
      }
    return u || (l = !1), l;
  }
  /* eslint-enable complexity, max-statements */
  updateTile(t, n) {
    this.updateTileVisibility(t, n);
  }
  // tile to render in the browser
  selectTile(t, n) {
    this.shouldSelectTile(t) && (t._selectedFrame = n.frameNumber, this.selectedTiles[t.id] = t);
  }
  // tile to load from server
  loadTile(t, n) {
    this.shouldLoadTile(t) && (t._requestedFrame = n.frameNumber, t._priority = t._getPriority(), this.requestedTiles[t.id] = t);
  }
  // cache tile
  touchTile(t, n) {
    t.tileset._cache.touch(t), t._touchedFrame = n.frameNumber;
  }
  // tile should be visible
  // tile should have children
  // tile LoD (level of detail) is not sufficient under current viewport
  canTraverse(t, n) {
    return t.hasChildren ? t.hasTilesetContent ? !t.contentExpired : this.shouldRefine(t, n) : !1;
  }
  shouldLoadTile(t) {
    return t.hasUnloadedContent || t.contentExpired;
  }
  shouldSelectTile(t) {
    return t.contentAvailable && !this.options.skipLevelOfDetail;
  }
  /** Decide if tile LoD (level of detail) is not sufficient under current viewport */
  shouldRefine(t, n, s = !1) {
    let r = t._screenSpaceError;
    return s && (r = t.getScreenSpaceError(n, !0)), r > t.tileset.memoryAdjustedScreenSpaceError;
  }
  updateTileVisibility(t, n) {
    const s = [];
    if (this.options.viewportTraversersMap)
      for (const r in this.options.viewportTraversersMap)
        this.options.viewportTraversersMap[r] === n.viewport.id && s.push(r);
    else
      s.push(n.viewport.id);
    t.updateVisibility(n, s);
  }
  // UTILITIES
  compareDistanceToCamera(t, n) {
    return t._distanceToCamera - n._distanceToCamera;
  }
  anyChildrenVisible(t, n) {
    let s = !1;
    for (const r of t.children)
      r.updateVisibility(n), s = s || r.isVisibleAndInRequestVolume;
    return s;
  }
  // Depth-first traversal that checks if all nearest descendants with content are loaded.
  // Ignores visibility.
  executeEmptyTraversal(t, n) {
    let s = !0;
    const r = this._emptyTraversalStack;
    for (r.push(t); r.length > 0; ) {
      const i = r.pop(), o = !i.hasRenderContent && this.canTraverse(i, n), a = !i.hasRenderContent && i.children.length === 0;
      if (!o && !i.contentAvailable && !a && (s = !1), this.updateTile(i, n), i.isVisibleAndInRequestVolume || (this.loadTile(i, n), this.touchTile(i, n)), o) {
        const c = i.children;
        for (const u of c)
          r.push(u);
      }
    }
    return s;
  }
}
const Io = new A();
function mB(e) {
  return e != null;
}
class or {
  // TODO i3s specific, needs to remove
  /**
   * @constructs
   * Create a Tile3D instance
   * @param tileset - Tileset3D instance
   * @param header - tile header - JSON loaded from a dataset
   * @param parentHeader - parent Tile3D instance
   * @param extendedId - optional ID to separate copies of a tile for different viewports.
   *    const extendedId = `${tile.id}-${frameState.viewport.id}`;
   */
  // eslint-disable-next-line max-statements
  constructor(t, n, s, r = "") {
    p(this, "tileset");
    p(this, "header");
    p(this, "id");
    p(this, "url");
    p(this, "parent");
    /* Specifies the type of refine that is used when traversing this tile for rendering. */
    p(this, "refine");
    p(this, "type");
    p(this, "contentUrl");
    /** Different refinement algorithms used by I3S and 3D tiles */
    p(this, "lodMetricType", "geometricError");
    /** The error, in meters, introduced if this tile is rendered and its children are not. */
    p(this, "lodMetricValue", 0);
    /** @todo math.gl is not exporting BoundingVolume base type? */
    p(this, "boundingVolume", null);
    /**
     * The tile's content.  This represents the actual tile's payload,
     * not the content's metadata in the tileset JSON file.
     */
    p(this, "content", null);
    p(this, "contentState", lt.UNLOADED);
    p(this, "gpuMemoryUsageInBytes", 0);
    /** The tile's children - an array of Tile3D objects. */
    p(this, "children", []);
    p(this, "depth", 0);
    p(this, "viewportIds", []);
    p(this, "transform", new V());
    p(this, "extensions", null);
    /** TODO Cesium 3d tiles specific */
    p(this, "implicitTiling", null);
    /** Container to store application specific data */
    p(this, "userData", {});
    p(this, "computedTransform");
    p(this, "hasEmptyContent", !1);
    p(this, "hasTilesetContent", !1);
    p(this, "traverser", new Yn({}));
    /** Used by TilesetCache */
    p(this, "_cacheNode", null);
    p(this, "_frameNumber", null);
    // TODO Cesium 3d tiles specific
    p(this, "_expireDate", null);
    p(this, "_expiredContent", null);
    p(this, "_boundingBox");
    /** updated every frame for tree traversal and rendering optimizations: */
    p(this, "_distanceToCamera", 0);
    p(this, "_screenSpaceError", 0);
    p(this, "_visibilityPlaneMask");
    p(this, "_visible");
    p(this, "_contentBoundingVolume");
    p(this, "_viewerRequestVolume");
    p(this, "_initialTransform", new V());
    // Used by traverser, cannot be marked private
    p(this, "_priority", 0);
    p(this, "_selectedFrame", 0);
    p(this, "_requestedFrame", 0);
    p(this, "_selectionDepth", 0);
    p(this, "_touchedFrame", 0);
    p(this, "_centerZDepth", 0);
    p(this, "_shouldRefine", !1);
    p(this, "_stackLength", 0);
    p(this, "_visitedFrame", 0);
    p(this, "_inRequestVolume", !1);
    p(this, "_lodJudge", null);
    this.header = n, this.tileset = t, this.id = r || n.id, this.url = n.url, this.parent = s, this.refine = this._getRefine(n.refine), this.type = n.type, this.contentUrl = n.contentUrl, this._initializeLodMetric(n), this._initializeTransforms(n), this._initializeBoundingVolumes(n), this._initializeContent(n), this._initializeRenderingState(n), Object.seal(this);
  }
  destroy() {
    this.header = null;
  }
  isDestroyed() {
    return this.header === null;
  }
  get selected() {
    return this._selectedFrame === this.tileset._frameNumber;
  }
  get isVisible() {
    return this._visible;
  }
  get isVisibleAndInRequestVolume() {
    return this._visible && this._inRequestVolume;
  }
  /** Returns true if tile is not an empty tile and not an external tileset */
  get hasRenderContent() {
    return !this.hasEmptyContent && !this.hasTilesetContent;
  }
  /** Returns true if tile has children */
  get hasChildren() {
    return this.children.length > 0 || this.header.children && this.header.children.length > 0;
  }
  /**
   * Determines if the tile's content is ready. This is automatically `true` for
   * tiles with empty content.
   */
  get contentReady() {
    return this.contentState === lt.READY || this.hasEmptyContent;
  }
  /**
   * Determines if the tile has available content to render.  `true` if the tile's
   * content is ready or if it has expired content this renders while new content loads; otherwise,
   */
  get contentAvailable() {
    return !!(this.contentReady && this.hasRenderContent || this._expiredContent && !this.contentFailed);
  }
  /** Returns true if tile has renderable content but it's unloaded */
  get hasUnloadedContent() {
    return this.hasRenderContent && this.contentUnloaded;
  }
  /**
   * Determines if the tile's content has not be requested. `true` if tile's
   * content has not be requested; otherwise, `false`.
   */
  get contentUnloaded() {
    return this.contentState === lt.UNLOADED;
  }
  /**
   * Determines if the tile's content is expired. `true` if tile's
   * content is expired; otherwise, `false`.
   */
  get contentExpired() {
    return this.contentState === lt.EXPIRED;
  }
  // Determines if the tile's content failed to load.  `true` if the tile's
  // content failed to load; otherwise, `false`.
  get contentFailed() {
    return this.contentState === lt.FAILED;
  }
  /**
   * Distance from the tile's bounding volume center to the camera
   */
  get distanceToCamera() {
    return this._distanceToCamera;
  }
  /**
   * Screen space error for LOD selection
   */
  get screenSpaceError() {
    return this._screenSpaceError;
  }
  /**
   * Get bounding box in cartographic coordinates
   * @returns [min, max] each in [longitude, latitude, altitude]
   */
  get boundingBox() {
    return this._boundingBox || (this._boundingBox = nB(this.header.boundingVolume, this.boundingVolume)), this._boundingBox;
  }
  /** Get the tile's screen space error. */
  getScreenSpaceError(t, n) {
    switch (this.tileset.type) {
      case At.I3S:
        return Fc(this, t);
      case At.TILES3D:
        return uB(this, t, n);
      default:
        throw new Error("Unsupported tileset type");
    }
  }
  /**
   * Make tile unselected than means it won't be shown
   * but it can be still loaded in memory
   */
  unselect() {
    this._selectedFrame = 0;
  }
  /**
   * Memory usage of tile on GPU
   */
  _getGpuMemoryUsageInBytes() {
    return this.content.gpuMemoryUsageInBytes || this.content.byteLength || 0;
  }
  /*
   * If skipLevelOfDetail is off try to load child tiles as soon as possible so that their parent can refine sooner.
   * Tiles are prioritized by screen space error.
   */
  // eslint-disable-next-line complexity
  _getPriority() {
    const t = this.tileset._traverser, { skipLevelOfDetail: n } = t.options, s = this.refine === Ut.ADD || n;
    if (s && !this.isVisible && this._visible !== void 0 || this.tileset._frameNumber - this._touchedFrame >= 1 || this.contentState === lt.UNLOADED)
      return -1;
    const r = this.parent, o = r && (!s || this._screenSpaceError === 0 || r.hasTilesetContent) ? r._screenSpaceError : this._screenSpaceError, a = t.root ? t.root._screenSpaceError : 0;
    return Math.max(a - o, 0);
  }
  /**
   *  Requests the tile's content.
   * The request may not be made if the Request Scheduler can't prioritize it.
   */
  // eslint-disable-next-line max-statements, complexity
  async loadContent() {
    if (this.hasEmptyContent)
      return !1;
    if (this.content)
      return !0;
    this.contentExpired && (this._expireDate = null), this.contentState = lt.LOADING;
    const n = await this.tileset._requestScheduler.scheduleRequest(this.id, this._getPriority.bind(this));
    if (!n)
      return this.contentState = lt.UNLOADED, !1;
    try {
      const s = this.tileset.getTileUrl(this.contentUrl), r = this.tileset.loader, i = {
        ...this.tileset.loadOptions,
        [r.id]: {
          // @ts-expect-error
          ...this.tileset.loadOptions[r.id],
          isTileset: this.type === "json",
          ...this._getLoaderSpecificOptions(r.id)
        }
      };
      return this.content = await pe(s, r, i), this.tileset.options.contentLoader && await this.tileset.options.contentLoader(this), this._isTileset() && this.tileset._initializeTileHeaders(this.content, this), this.contentState = lt.READY, this._onContentLoaded(), !0;
    } catch (s) {
      throw this.contentState = lt.FAILED, s;
    } finally {
      n.done();
    }
  }
  // Unloads the tile's content.
  unloadContent() {
    return this.content && this.content.destroy && this.content.destroy(), this.content = null, this.header.content && this.header.content.destroy && this.header.content.destroy(), this.header.content = null, this.contentState = lt.UNLOADED, !0;
  }
  /**
   * Update the tile's visibility
   * @param {Object} frameState - frame state for tile culling
   * @param {string[]} viewportIds - a list of viewport ids that show this tile
   * @return {void}
   */
  updateVisibility(t, n) {
    if (this._frameNumber === t.frameNumber)
      return;
    const s = this.parent, r = s ? s._visibilityPlaneMask : dt.MASK_INDETERMINATE;
    if (this.tileset._traverser.options.updateTransforms) {
      const i = s ? s.computedTransform : this.tileset.modelMatrix;
      this._updateTransform(i);
    }
    this._distanceToCamera = this.distanceToTile(t), this._screenSpaceError = this.getScreenSpaceError(t, !1), this._visibilityPlaneMask = this.visibility(t, r), this._visible = this._visibilityPlaneMask !== dt.MASK_OUTSIDE, this._inRequestVolume = this.insideViewerRequestVolume(t), this._frameNumber = t.frameNumber, this.viewportIds = n;
  }
  // Determines whether the tile's bounding volume intersects the culling volume.
  // @param {FrameState} frameState The frame state.
  // @param {Number} parentVisibilityPlaneMask The parent's plane mask to speed up the visibility check.
  // @returns {Number} A plane mask as described above in {@link CullingVolume#computeVisibilityWithPlaneMask}.
  visibility(t, n) {
    const { cullingVolume: s } = t, { boundingVolume: r } = this;
    return s.computeVisibilityWithPlaneMask(r, n);
  }
  // Assuming the tile's bounding volume intersects the culling volume, determines
  // whether the tile's content's bounding volume intersects the culling volume.
  // @param {FrameState} frameState The frame state.
  // @returns {Intersect} The result of the intersection: the tile's content is completely outside, completely inside, or intersecting the culling volume.
  contentVisibility() {
    return !0;
  }
  /**
   * Computes the (potentially approximate) distance from the closest point of the tile's bounding volume to the camera.
   * @param frameState The frame state.
   * @returns {Number} The distance, in meters, or zero if the camera is inside the bounding volume.
   */
  distanceToTile(t) {
    const n = this.boundingVolume;
    return Math.sqrt(Math.max(n.distanceSquaredTo(t.camera.position), 0));
  }
  /**
   * Computes the tile's camera-space z-depth.
   * @param frameState The frame state.
   * @returns The distance, in meters.
   */
  cameraSpaceZDepth({ camera: t }) {
    const n = this.boundingVolume;
    return Io.subVectors(n.center, t.position), t.direction.dot(Io);
  }
  /**
   * Checks if the camera is inside the viewer request volume.
   * @param {FrameState} frameState The frame state.
   * @returns {Boolean} Whether the camera is inside the volume.
   */
  insideViewerRequestVolume(t) {
    const n = this._viewerRequestVolume;
    return !n || n.distanceSquaredTo(t.camera.position) <= 0;
  }
  // TODO Cesium specific
  // Update whether the tile has expired.
  updateExpiration() {
    if (mB(this._expireDate) && this.contentReady && !this.hasEmptyContent) {
      const t = Date.now();
      Date.lessThan(this._expireDate, t) && (this.contentState = lt.EXPIRED, this._expiredContent = this.content);
    }
  }
  get extras() {
    return this.header.extras;
  }
  // INTERNAL METHODS
  _initializeLodMetric(t) {
    "lodMetricType" in t ? this.lodMetricType = t.lodMetricType : (this.lodMetricType = this.parent && this.parent.lodMetricType || this.tileset.lodMetricType, console.warn("3D Tile: Required prop lodMetricType is undefined. Using parent lodMetricType")), "lodMetricValue" in t ? this.lodMetricValue = t.lodMetricValue : (this.lodMetricValue = this.parent && this.parent.lodMetricValue || this.tileset.lodMetricValue, console.warn("3D Tile: Required prop lodMetricValue is undefined. Using parent lodMetricValue"));
  }
  _initializeTransforms(t) {
    this.transform = t.transform ? new V(t.transform) : new V();
    const n = this.parent, s = this.tileset, r = n && n.computedTransform ? n.computedTransform.clone() : s.modelMatrix.clone();
    this.computedTransform = new V(r).multiplyRight(this.transform);
    const i = n && n._initialTransform ? n._initialTransform.clone() : new V();
    this._initialTransform = new V(i).multiplyRight(this.transform);
  }
  _initializeBoundingVolumes(t) {
    this._contentBoundingVolume = null, this._viewerRequestVolume = null, this._updateBoundingVolume(t);
  }
  _initializeContent(t) {
    this.content = { _tileset: this.tileset, _tile: this }, this.hasEmptyContent = !0, this.contentState = lt.UNLOADED, this.hasTilesetContent = !1, t.contentUrl && (this.content = null, this.hasEmptyContent = !1);
  }
  // TODO - remove anything not related to basic visibility detection
  _initializeRenderingState(t) {
    this.depth = t.level || (this.parent ? this.parent.depth + 1 : 0), this._shouldRefine = !1, this._distanceToCamera = 0, this._centerZDepth = 0, this._screenSpaceError = 0, this._visibilityPlaneMask = dt.MASK_INDETERMINATE, this._visible = void 0, this._inRequestVolume = !1, this._stackLength = 0, this._selectionDepth = 0, this._frameNumber = 0, this._touchedFrame = 0, this._visitedFrame = 0, this._selectedFrame = 0, this._requestedFrame = 0, this._priority = 0;
  }
  _getRefine(t) {
    return t || this.parent && this.parent.refine || Ut.REPLACE;
  }
  _isTileset() {
    return this.contentUrl.indexOf(".json") !== -1;
  }
  _onContentLoaded() {
    switch (this.content && this.content.type) {
      case "vctr":
      case "geom":
        this.tileset._traverser.disableSkipLevelOfDetail = !0;
        break;
    }
    this._isTileset() ? this.hasTilesetContent = !0 : this.gpuMemoryUsageInBytes = this._getGpuMemoryUsageInBytes();
  }
  _updateBoundingVolume(t) {
    this.boundingVolume = Is(t.boundingVolume, this.computedTransform, this.boundingVolume);
    const n = t.content;
    n && (n.boundingVolume && (this._contentBoundingVolume = Is(n.boundingVolume, this.computedTransform, this._contentBoundingVolume)), t.viewerRequestVolume && (this._viewerRequestVolume = Is(t.viewerRequestVolume, this.computedTransform, this._viewerRequestVolume)));
  }
  // Update the tile's transform. The transform is applied to the tile's bounding volumes.
  _updateTransform(t = new V()) {
    const n = t.clone().multiplyRight(this.transform);
    n.equals(this.computedTransform) || (this.computedTransform = n, this._updateBoundingVolume(this.header));
  }
  // Get options which are applicable only for the particular loader
  _getLoaderSpecificOptions(t) {
    switch (t) {
      case "i3s":
        return {
          ...this.tileset.options.i3s,
          _tileOptions: {
            attributeUrls: this.header.attributeUrls,
            textureUrl: this.header.textureUrl,
            textureFormat: this.header.textureFormat,
            textureLoaderOptions: this.header.textureLoaderOptions,
            materialDefinition: this.header.materialDefinition,
            isDracoGeometry: this.header.isDracoGeometry,
            mbs: this.header.mbs
          },
          _tilesetOptions: {
            store: this.tileset.tileset.store,
            attributeStorageInfo: this.tileset.tileset.attributeStorageInfo,
            fields: this.tileset.tileset.fields
          },
          isTileHeader: !1
        };
      case "3d-tiles":
      case "cesium-ion":
      default:
        return fB(this.tileset.tileset);
    }
  }
}
class gB extends Yn {
  compareDistanceToCamera(t, n) {
    return n._distanceToCamera === 0 && t._distanceToCamera === 0 ? n._centerZDepth - t._centerZDepth : n._distanceToCamera - t._distanceToCamera;
  }
  updateTileVisibility(t, n) {
    if (super.updateTileVisibility(t, n), !t.isVisibleAndInRequestVolume)
      return;
    const s = t.children.length > 0;
    if (t.hasTilesetContent && s) {
      const o = t.children[0];
      this.updateTileVisibility(o, n), t._visible = o._visible;
      return;
    }
    if (this.meetsScreenSpaceErrorEarly(t, n)) {
      t._visible = !1;
      return;
    }
    const r = t.refine === Ut.REPLACE, i = t._optimChildrenWithinParent === Zy.USE_OPTIMIZATION;
    if (r && i && s && !this.anyChildrenVisible(t, n)) {
      t._visible = !1;
      return;
    }
  }
  meetsScreenSpaceErrorEarly(t, n) {
    const { parent: s } = t;
    return !s || s.hasTilesetContent || s.refine !== Ut.ADD ? !1 : !this.shouldRefine(t, n, !0);
  }
}
class AB {
  constructor() {
    p(this, "frameNumberMap", /* @__PURE__ */ new Map());
  }
  /**
   * Register a new pending tile header for the particular frameNumber
   * @param viewportId
   * @param frameNumber
   */
  register(t, n) {
    const s = this.frameNumberMap.get(t) || /* @__PURE__ */ new Map(), r = s.get(n) || 0;
    s.set(n, r + 1), this.frameNumberMap.set(t, s);
  }
  /**
   * Deregister a pending tile header for the particular frameNumber
   * @param viewportId
   * @param frameNumber
   */
  deregister(t, n) {
    const s = this.frameNumberMap.get(t);
    if (!s)
      return;
    const r = s.get(n) || 1;
    s.set(n, r - 1);
  }
  /**
   * Check is there are no pending tile headers registered for the particular frameNumber
   * @param viewportId
   * @param frameNumber
   * @returns
   */
  isZero(t, n) {
    var r;
    return (((r = this.frameNumberMap.get(t)) == null ? void 0 : r.get(n)) || 0) === 0;
  }
}
const Fs = {
  REQUESTED: "REQUESTED",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR"
};
class pB {
  constructor() {
    p(this, "_statusMap");
    p(this, "pendingTilesRegister", new AB());
    this._statusMap = {};
  }
  /**
   * Add request to map
   * @param request - node metadata request
   * @param key - unique key
   * @param callback - callback after request completed
   * @param frameState - frameState data
   */
  add(t, n, s, r) {
    if (!this._statusMap[n]) {
      const { frameNumber: i, viewport: { id: o } } = r;
      this._statusMap[n] = { request: t, callback: s, key: n, frameState: r, status: Fs.REQUESTED }, this.pendingTilesRegister.register(o, i), t().then((a) => {
        this._statusMap[n].status = Fs.COMPLETED;
        const { frameNumber: c, viewport: { id: u } } = this._statusMap[n].frameState;
        this.pendingTilesRegister.deregister(u, c), this._statusMap[n].callback(a, r);
      }).catch((a) => {
        this._statusMap[n].status = Fs.ERROR;
        const { frameNumber: c, viewport: { id: u } } = this._statusMap[n].frameState;
        this.pendingTilesRegister.deregister(u, c), s(a);
      });
    }
  }
  /**
   * Update request if it is still actual for the new frameState
   * @param key - unique key
   * @param frameState - frameState data
   */
  update(t, n) {
    if (this._statusMap[t]) {
      const { frameNumber: s, viewport: { id: r } } = this._statusMap[t].frameState;
      this.pendingTilesRegister.deregister(r, s);
      const { frameNumber: i, viewport: { id: o } } = n;
      this.pendingTilesRegister.register(o, i), this._statusMap[t].frameState = n;
    }
  }
  /**
   * Find request in the map
   * @param key - unique key
   * @returns
   */
  find(t) {
    return this._statusMap[t];
  }
  /**
   * Check it there are pending tile headers for the particular frameNumber
   * @param viewportId
   * @param frameNumber
   * @returns
   */
  hasPendingTiles(t, n) {
    return !this.pendingTilesRegister.isZero(t, n);
  }
}
class yB extends Yn {
  constructor(n) {
    super(n);
    p(this, "_tileManager");
    this._tileManager = new pB();
  }
  /**
   * Check if there are no penging tile header requests,
   * that means the traversal is finished and we can call
   * following-up callbacks.
   */
  traversalFinished(n) {
    return !this._tileManager.hasPendingTiles(n.viewport.id, this._frameNumber || 0);
  }
  shouldRefine(n, s) {
    return n._lodJudge = hB(n, s), n._lodJudge === "DIG";
  }
  updateChildTiles(n, s) {
    const r = n.header.children || [], i = n.children, o = n.tileset;
    for (const a of r) {
      const c = `${a.id}-${s.viewport.id}`, u = i && i.find((l) => l.id === c);
      if (u)
        u && this.updateTile(u, s);
      else {
        let l = () => this._loadTile(a.id, o);
        this._tileManager.find(c) ? this._tileManager.update(c, s) : (o.tileset.nodePages && (l = () => o.tileset.nodePagesTile.formTileFromNodePages(a.id)), this._tileManager.add(l, c, (f) => this._onTileLoad(f, n, c), s));
      }
    }
    return !1;
  }
  async _loadTile(n, s) {
    const { loader: r } = s, i = s.getTileUrl(`${s.url}/nodes/${n}`), o = {
      ...s.loadOptions,
      i3s: {
        ...s.loadOptions.i3s,
        isTileHeader: !0
      }
    };
    return await pe(i, r, o);
  }
  /**
   * The callback to init Tile3D instance after loading the tile JSON
   * @param {Object} header - the tile JSON from a dataset
   * @param {Tile3D} tile - the parent Tile3D instance
   * @param {string} extendedId - optional ID to separate copies of a tile for different viewports.
   *                              const extendedId = `${tile.id}-${frameState.viewport.id}`;
   * @return {void}
   */
  _onTileLoad(n, s, r) {
    const i = new or(s.tileset, n, s, r);
    s.children.push(i);
    const o = this._tileManager.find(i.id).frameState;
    this.updateTile(i, o), this._frameNumber === o.frameNumber && (this.traversalFinished(o) || (/* @__PURE__ */ new Date()).getTime() - this.lastUpdate > this.updateDebounceTime) && this.executeTraversal(i, o);
  }
}
const BB = {
  description: "",
  ellipsoid: J.WGS84,
  modelMatrix: new V(),
  throttleRequests: !0,
  maxRequests: 64,
  /** Default memory values optimized for viewing mesh-based 3D Tiles on both mobile and desktop devices */
  maximumMemoryUsage: 32,
  memoryCacheOverflow: 1,
  maximumTilesSelected: 0,
  debounceTime: 0,
  onTileLoad: () => {
  },
  onTileUnload: () => {
  },
  onTileError: () => {
  },
  onTraversalComplete: (e) => e,
  contentLoader: void 0,
  viewDistanceScale: 1,
  maximumScreenSpaceError: 8,
  memoryAdjustedScreenSpaceError: !1,
  loadTiles: !0,
  updateTransforms: !0,
  viewportTraversersMap: null,
  loadOptions: { fetch: {} },
  attributions: [],
  basePath: "",
  i3s: {}
}, Bn = "Tiles In Tileset(s)", vs = "Tiles In Memory", xo = "Tiles In View", Oo = "Tiles To Render", Fo = "Tiles Loaded", Ds = "Tiles Loading", vo = "Tiles Unloaded", Do = "Failed Tile Loads", Lo = "Points/Vertices", Ls = "Tile Memory Use", Po = "Maximum Screen Space Error";
class CB {
  /**
   * Create a new Tileset3D
   * @param json
   * @param props
   */
  // eslint-disable-next-line max-statements
  constructor(t, n) {
    // props: Tileset3DProps;
    p(this, "options");
    p(this, "loadOptions");
    p(this, "type");
    p(this, "tileset");
    p(this, "loader");
    p(this, "url");
    p(this, "basePath");
    p(this, "modelMatrix");
    p(this, "ellipsoid");
    p(this, "lodMetricType");
    p(this, "lodMetricValue");
    p(this, "refine");
    p(this, "root", null);
    p(this, "roots", {});
    /** @todo any->unknown */
    p(this, "asset", {});
    // Metadata for the entire tileset
    p(this, "description", "");
    p(this, "properties");
    p(this, "extras", null);
    p(this, "attributions", {});
    p(this, "credits", {});
    p(this, "stats");
    /** flags that contain information about data types in nested tiles */
    p(this, "contentFormats", { draco: !1, meshopt: !1, dds: !1, ktx2: !1 });
    // view props
    p(this, "cartographicCenter", null);
    p(this, "cartesianCenter", null);
    p(this, "zoom", 1);
    p(this, "boundingVolume", null);
    /** Updated based on the camera position and direction */
    p(this, "dynamicScreenSpaceErrorComputedDensity", 0);
    // METRICS
    /**
     * The maximum amount of GPU memory (in MB) that may be used to cache tiles
     * Tiles not in view are unloaded to enforce private
     */
    p(this, "maximumMemoryUsage", 32);
    /** The total amount of GPU memory in bytes used by the tileset. */
    p(this, "gpuMemoryUsageInBytes", 0);
    /**
     * If loading the level of detail required by maximumScreenSpaceError
     * results in the memory usage exceeding maximumMemoryUsage (GPU), level of detail refinement
     * will instead use this (larger) adjusted screen space error to achieve the
     * best possible visual quality within the available memory.
     */
    p(this, "memoryAdjustedScreenSpaceError", 0);
    p(this, "_cacheBytes", 0);
    p(this, "_cacheOverflowBytes", 0);
    /** Update tracker. increase in each update cycle. */
    p(this, "_frameNumber", 0);
    p(this, "_queryParams", {});
    p(this, "_extensionsUsed", []);
    p(this, "_tiles", {});
    /** counter for tracking tiles requests */
    p(this, "_pendingCount", 0);
    /** Hold traversal results */
    p(this, "selectedTiles", []);
    // TRAVERSAL
    p(this, "traverseCounter", 0);
    p(this, "geometricError", 0);
    p(this, "lastUpdatedVieports", null);
    p(this, "_requestedTiles", []);
    p(this, "_emptyTiles", []);
    p(this, "frameStateData", {});
    p(this, "_traverser");
    p(this, "_cache", new jy());
    p(this, "_requestScheduler");
    // Promise tracking
    p(this, "updatePromise", null);
    p(this, "tilesetInitializationPromise");
    this.options = { ...BB, ...n }, this.tileset = t, this.loader = t.loader, this.type = t.type, this.url = t.url, this.basePath = t.basePath || Hy(this.url), this.modelMatrix = this.options.modelMatrix, this.ellipsoid = this.options.ellipsoid, this.lodMetricType = t.lodMetricType, this.lodMetricValue = t.lodMetricValue, this.refine = t.root.refine, this.loadOptions = this.options.loadOptions || {}, this._traverser = this._initializeTraverser(), this._requestScheduler = new Uy({
      throttleRequests: this.options.throttleRequests,
      maxRequests: this.options.maxRequests
    }), this.memoryAdjustedScreenSpaceError = this.options.maximumScreenSpaceError, this._cacheBytes = this.options.maximumMemoryUsage * 1024 * 1024, this._cacheOverflowBytes = this.options.memoryCacheOverflow * 1024 * 1024, this.stats = new Qo({ id: this.url }), this._initializeStats(), this.tilesetInitializationPromise = this._initializeTileSet(t);
  }
  /** Release resources */
  destroy() {
    this._destroy();
  }
  /** Is the tileset loaded (update needs to have been called at least once) */
  isLoaded() {
    return this._pendingCount === 0 && this._frameNumber !== 0 && this._requestedTiles.length === 0;
  }
  get tiles() {
    return Object.values(this._tiles);
  }
  get frameNumber() {
    return this._frameNumber;
  }
  get queryParams() {
    return new URLSearchParams(this._queryParams).toString();
  }
  setProps(t) {
    this.options = { ...this.options, ...t };
  }
  /** @deprecated */
  // setOptions(options: Tileset3DProps): void {
  //   this.options = {...this.options, ...options};
  // }
  /**
   * Return a loadable tile url for a specific tile subpath
   * @param tilePath a tile subpath
   */
  getTileUrl(t) {
    if (t.startsWith("data:"))
      return t;
    let s = t;
    return this.queryParams.length && (s = `${t}${t.includes("?") ? "&" : "?"}${this.queryParams}`), s;
  }
  // TODO CESIUM specific
  hasExtension(t) {
    return this._extensionsUsed.indexOf(t) > -1;
  }
  /**
   * Update visible tiles relying on a list of viewports
   * @param viewports - list of viewports
   * @deprecated
   */
  update(t = null) {
    this.tilesetInitializationPromise.then(() => {
      !t && this.lastUpdatedVieports ? t = this.lastUpdatedVieports : this.lastUpdatedVieports = t, t && this.doUpdate(t);
    });
  }
  /**
   * Update visible tiles relying on a list of viewports.
   * Do it with debounce delay to prevent update spam
   * @param viewports viewports
   * @returns Promise of new frameNumber
   */
  async selectTiles(t = null) {
    return await this.tilesetInitializationPromise, t && (this.lastUpdatedVieports = t), this.updatePromise || (this.updatePromise = new Promise((n) => {
      setTimeout(() => {
        this.lastUpdatedVieports && this.doUpdate(this.lastUpdatedVieports), n(this._frameNumber), this.updatePromise = null;
      }, this.options.debounceTime);
    })), this.updatePromise;
  }
  adjustScreenSpaceError() {
    this.gpuMemoryUsageInBytes < this._cacheBytes ? this.memoryAdjustedScreenSpaceError = Math.max(this.memoryAdjustedScreenSpaceError / 1.02, this.options.maximumScreenSpaceError) : this.gpuMemoryUsageInBytes > this._cacheBytes + this._cacheOverflowBytes && (this.memoryAdjustedScreenSpaceError *= 1.02);
  }
  /**
   * Update visible tiles relying on a list of viewports
   * @param viewports viewports
   */
  // eslint-disable-next-line max-statements, complexity
  doUpdate(t) {
    if ("loadTiles" in this.options && !this.options.loadTiles || this.traverseCounter > 0)
      return;
    const n = t instanceof Array ? t : [t];
    this._cache.reset(), this._frameNumber++, this.traverseCounter = n.length;
    const s = [];
    for (const r of n) {
      const i = r.id;
      this._needTraverse(i) ? s.push(i) : this.traverseCounter--;
    }
    for (const r of n) {
      const i = r.id;
      if (this.roots[i] || (this.roots[i] = this._initializeTileHeaders(this.tileset, null)), !s.includes(i))
        continue;
      const o = Ky(r, this._frameNumber);
      this._traverser.traverse(this.roots[i], o, this.options);
    }
  }
  /**
   * Check if traversal is needed for particular viewport
   * @param {string} viewportId - id of a viewport
   * @return {boolean}
   */
  _needTraverse(t) {
    let n = t;
    return this.options.viewportTraversersMap && (n = this.options.viewportTraversersMap[t]), n === t;
  }
  /**
   * The callback to post-process tiles after traversal procedure
   * @param frameState - frame state for tile culling
   */
  _onTraversalEnd(t) {
    const n = t.viewport.id;
    this.frameStateData[n] || (this.frameStateData[n] = { selectedTiles: [], _requestedTiles: [], _emptyTiles: [] });
    const s = this.frameStateData[n], r = Object.values(this._traverser.selectedTiles), [i, o] = zy(r, t, this.options.maximumTilesSelected);
    s.selectedTiles = i;
    for (const a of o)
      a.unselect();
    s._requestedTiles = Object.values(this._traverser.requestedTiles), s._emptyTiles = Object.values(this._traverser.emptyTiles), this.traverseCounter--, !(this.traverseCounter > 0) && this._updateTiles();
  }
  /**
   * Update tiles relying on data from all traversers
   */
  _updateTiles() {
    this.selectedTiles = [], this._requestedTiles = [], this._emptyTiles = [];
    for (const t in this.frameStateData) {
      const n = this.frameStateData[t];
      this.selectedTiles = this.selectedTiles.concat(n.selectedTiles), this._requestedTiles = this._requestedTiles.concat(n._requestedTiles), this._emptyTiles = this._emptyTiles.concat(n._emptyTiles);
    }
    this.selectedTiles = this.options.onTraversalComplete(this.selectedTiles);
    for (const t of this.selectedTiles)
      this._tiles[t.id] = t;
    this._loadTiles(), this._unloadTiles(), this._updateStats();
  }
  _tilesChanged(t, n) {
    if (t.length !== n.length)
      return !0;
    const s = new Set(t.map((o) => o.id)), r = new Set(n.map((o) => o.id));
    let i = t.filter((o) => !r.has(o.id)).length > 0;
    return i = i || n.filter((o) => !s.has(o.id)).length > 0, i;
  }
  _loadTiles() {
    for (const t of this._requestedTiles)
      t.contentUnloaded && this._loadTile(t);
  }
  _unloadTiles() {
    this._cache.unloadTiles(this, (t, n) => t._unloadTile(n));
  }
  _updateStats() {
    let t = 0, n = 0;
    for (const s of this.selectedTiles)
      s.contentAvailable && s.content && (t++, s.content.pointCount ? n += s.content.pointCount : n += s.content.vertexCount);
    this.stats.get(xo).count = this.selectedTiles.length, this.stats.get(Oo).count = t, this.stats.get(Lo).count = n, this.stats.get(Po).count = this.memoryAdjustedScreenSpaceError;
  }
  async _initializeTileSet(t) {
    this.type === At.I3S && (this.calculateViewPropsI3S(), t.root = await t.root), this.root = this._initializeTileHeaders(t, null), this.type === At.TILES3D && (this._initializeTiles3DTileset(t), this.calculateViewPropsTiles3D()), this.type === At.I3S && this._initializeI3STileset();
  }
  /**
   * Called during initialize Tileset to initialize the tileset's cartographic center (longitude, latitude) and zoom.
   * These metrics help apps center view on tileset
   * For I3S there is extent (<1.8 version) or fullExtent (>=1.8 version) to calculate view props
   * @returns
   */
  calculateViewPropsI3S() {
    var s;
    const t = this.tileset.fullExtent;
    if (t) {
      const { xmin: r, xmax: i, ymin: o, ymax: a, zmin: c, zmax: u } = t;
      this.cartographicCenter = new A(r + (i - r) / 2, o + (a - o) / 2, c + (u - c) / 2), this.cartesianCenter = new A(), J.WGS84.cartographicToCartesian(this.cartographicCenter, this.cartesianCenter), this.zoom = Mc(t, this.cartographicCenter, this.cartesianCenter);
      return;
    }
    const n = (s = this.tileset.store) == null ? void 0 : s.extent;
    if (n) {
      const [r, i, o, a] = n;
      this.cartographicCenter = new A(r + (o - r) / 2, i + (a - i) / 2, 0), this.cartesianCenter = new A(), J.WGS84.cartographicToCartesian(this.cartographicCenter, this.cartesianCenter), this.zoom = $y(n, this.cartographicCenter, this.cartesianCenter);
      return;
    }
    console.warn("Extent is not defined in the tileset header"), this.cartographicCenter = new A(), this.zoom = 1;
  }
  /**
   * Called during initialize Tileset to initialize the tileset's cartographic center (longitude, latitude) and zoom.
   * These metrics help apps center view on tileset.
   * For 3DTiles the root tile data is used to calculate view props.
   * @returns
   */
  calculateViewPropsTiles3D() {
    const t = this.root, { center: n } = t.boundingVolume;
    if (!n) {
      console.warn("center was not pre-calculated for the root tile"), this.cartographicCenter = new A(), this.zoom = 1;
      return;
    }
    n[0] !== 0 || n[1] !== 0 || n[2] !== 0 ? (this.cartographicCenter = new A(), J.WGS84.cartesianToCartographic(n, this.cartographicCenter)) : this.cartographicCenter = new A(0, 0, -J.WGS84.radii[0]), this.cartesianCenter = n, this.zoom = qy(t.boundingVolume, this.cartographicCenter);
  }
  _initializeStats() {
    this.stats.get(Bn), this.stats.get(Ds), this.stats.get(vs), this.stats.get(xo), this.stats.get(Oo), this.stats.get(Fo), this.stats.get(vo), this.stats.get(Do), this.stats.get(Lo), this.stats.get(Ls, "memory"), this.stats.get(Po);
  }
  // Installs the main tileset JSON file or a tileset JSON file referenced from a tile.
  // eslint-disable-next-line max-statements
  _initializeTileHeaders(t, n) {
    var r;
    const s = new or(this, t.root, n);
    if (n && (n.children.push(s), s.depth = n.depth + 1), this.type === At.TILES3D) {
      const i = [];
      for (i.push(s); i.length > 0; ) {
        const o = i.pop();
        this.stats.get(Bn).incrementCount();
        const a = o.header.children || [];
        for (const c of a) {
          const u = new or(this, c, o);
          if ((r = u.contentUrl) != null && r.includes("?session=")) {
            const h = new URL(u.contentUrl).searchParams.get("session");
            h && (this._queryParams.session = h);
          }
          o.children.push(u), u.depth = o.depth + 1, i.push(u);
        }
      }
    }
    return s;
  }
  _initializeTraverser() {
    let t;
    switch (this.type) {
      case At.TILES3D:
        t = gB;
        break;
      case At.I3S:
        t = yB;
        break;
      default:
        t = Yn;
    }
    return new t({
      basePath: this.basePath,
      onTraversalEnd: this._onTraversalEnd.bind(this)
    });
  }
  _destroyTileHeaders(t) {
    this._destroySubtree(t);
  }
  async _loadTile(t) {
    let n;
    try {
      this._onStartTileLoading(), n = await t.loadContent();
    } catch (s) {
      this._onTileLoadError(t, s instanceof Error ? s : new Error("load failed"));
    } finally {
      this._onEndTileLoading(), this._onTileLoad(t, n);
    }
  }
  _onTileLoadError(t, n) {
    this.stats.get(Do).incrementCount();
    const s = n.message || n.toString(), r = t.url;
    console.error(`A 3D tile failed to load: ${t.url} ${s}`), this.options.onTileError(t, s, r);
  }
  _onTileLoad(t, n) {
    var s, r;
    if (n) {
      if (this.type === At.I3S) {
        const i = ((r = (s = this.tileset) == null ? void 0 : s.nodePagesTile) == null ? void 0 : r.nodesInNodePages) || 0;
        this.stats.get(Bn).reset(), this.stats.get(Bn).addCount(i);
      }
      t && t.content && ky(t, t.content), this.updateContentTypes(t), this._addTileToCache(t), this.options.onTileLoad(t);
    }
  }
  /**
   * Update information about data types in nested tiles
   * @param tile instance of a nested Tile3D
   */
  updateContentTypes(t) {
    var n;
    if (this.type === At.I3S)
      switch (t.header.isDracoGeometry && (this.contentFormats.draco = !0), t.header.textureFormat) {
        case "dds":
          this.contentFormats.dds = !0;
          break;
        case "ktx2":
          this.contentFormats.ktx2 = !0;
          break;
      }
    else if (this.type === At.TILES3D) {
      const { extensionsRemoved: s = [] } = ((n = t.content) == null ? void 0 : n.gltf) || {};
      s.includes("KHR_draco_mesh_compression") && (this.contentFormats.draco = !0), s.includes("EXT_meshopt_compression") && (this.contentFormats.meshopt = !0), s.includes("KHR_texture_basisu") && (this.contentFormats.ktx2 = !0);
    }
  }
  _onStartTileLoading() {
    this._pendingCount++, this.stats.get(Ds).incrementCount();
  }
  _onEndTileLoading() {
    this._pendingCount--, this.stats.get(Ds).decrementCount();
  }
  _addTileToCache(t) {
    this._cache.add(this, t, (n) => n._updateCacheStats(t));
  }
  _updateCacheStats(t) {
    this.stats.get(Fo).incrementCount(), this.stats.get(vs).incrementCount(), this.gpuMemoryUsageInBytes += t.gpuMemoryUsageInBytes || 0, this.stats.get(Ls).count = this.gpuMemoryUsageInBytes, this.options.memoryAdjustedScreenSpaceError && this.adjustScreenSpaceError();
  }
  _unloadTile(t) {
    this.gpuMemoryUsageInBytes -= t.gpuMemoryUsageInBytes || 0, this.stats.get(vs).decrementCount(), this.stats.get(vo).incrementCount(), this.stats.get(Ls).count = this.gpuMemoryUsageInBytes, this.options.onTileUnload(t), t.unloadContent();
  }
  // Traverse the tree and destroy all tiles
  _destroy() {
    const t = [];
    for (this.root && t.push(this.root); t.length > 0; ) {
      const n = t.pop();
      for (const s of n.children)
        t.push(s);
      this._destroyTile(n);
    }
    this.root = null;
  }
  // Traverse the tree and destroy all sub tiles
  _destroySubtree(t) {
    const n = t, s = [];
    for (s.push(n); s.length > 0; ) {
      t = s.pop();
      for (const r of t.children)
        s.push(r);
      t !== n && this._destroyTile(t);
    }
    n.children = [];
  }
  _destroyTile(t) {
    this._cache.unloadTile(this, t), this._unloadTile(t), t.destroy();
  }
  _initializeTiles3DTileset(t) {
    if (t.queryString) {
      const n = new URLSearchParams(t.queryString), s = Object.fromEntries(n.entries());
      this._queryParams = { ...this._queryParams, ...s };
    }
    if (this.asset = t.asset, !this.asset)
      throw new Error("Tileset must have an asset property.");
    if (this.asset.version !== "0.0" && this.asset.version !== "1.0" && this.asset.version !== "1.1")
      throw new Error("The tileset must be 3D Tiles version either 0.0 or 1.0 or 1.1.");
    "tilesetVersion" in this.asset && (this._queryParams.v = this.asset.tilesetVersion), this.credits = {
      attributions: this.options.attributions || []
    }, this.description = this.options.description || "", this.properties = t.properties, this.geometricError = t.geometricError, this._extensionsUsed = t.extensionsUsed || [], this.extras = t.extras;
  }
  _initializeI3STileset() {
    this.loadOptions.i3s && "token" in this.loadOptions.i3s && (this._queryParams.token = this.loadOptions.i3s.token);
  }
}
function EB(e) {
  let t = 0;
  for (const s in e.attributes) {
    const r = e.getAttribute(s);
    t += r.count * r.itemSize * r.array.BYTES_PER_ELEMENT;
  }
  const n = e.getIndex();
  return t += n ? n.count * n.itemSize * n.array.BYTES_PER_ELEMENT : 0, t;
}
function vc(e) {
  const n = document.createElement("canvas");
  n.width = 64, n.height = 64;
  const s = n.getContext("2d");
  s.rect(0, 0, 64, 64);
  const r = s.createLinearGradient(0, 0, 64, 64);
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    r.addColorStop(a[0], "#" + a[1].getHexString());
  }
  s.fillStyle = r, s.fill();
  const i = new Jc(n);
  return i.needsUpdate = !0, i.minFilter = Vc, i.wrapS = Vr, i.wrapT = Vr, i.repeat.set(2, 2), i;
}
function Go(e) {
  e.updateMatrix(), e.updateMatrixWorld(), e.matrixWorldInverse.copy(e.matrixWorld).invert();
  const t = new jc();
  return t.setFromProjectionMatrix(new Y().multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse)), t;
}
function TB(e) {
  const t = new Cn(), n = new kc(10, 5), s = new st(...e.projectPointOntoPlane([0, 0, 0])), r = new st(e.normal.x, e.normal.y, e.normal.z), i = new st().copy(s).add(r);
  n.lookAt(i), n.translate(s.x, s.y, s.z);
  const o = new Gs({ color: 65535, side: Jo }), a = new Ns(n, o), c = new Kc(r, s, 5, 16776960);
  return t.add(c), t.add(a), t;
}
function No(e) {
  const { boundingVolume: t } = e;
  let n = 0;
  e.content && (n = Math.min(e.content.byteLength / 5e5, 1));
  const s = new w(n, 1, 0), r = new zc(1, 1, 1), i = new Y();
  t.halfAxes ? i.copy(Dc(t.halfAxes)) : t.radius && r.scale(t.radius * 2, t.radius * 2, t.radius * 2), r.applyMatrix4(i);
  const o = new Wc(r), a = new Xc(o, new Qc({ color: s }));
  return a.position.copy(new st(...t.center)), a;
}
function Dc(e) {
  const t = e;
  return new Y().fromArray([
    t[0] * 2,
    t[1] * 2,
    t[2] * 2,
    0,
    t[3] * 2,
    t[4] * 2,
    t[5] * 2,
    0,
    t[6] * 2,
    t[7] * 2,
    t[8] * 2,
    0,
    0,
    0,
    0,
    1
  ]);
}
function bB(e, t) {
  const r = 2 * Math.PI * 6378137 / 2, i = t * r / 180;
  let o = Math.log(Math.tan((90 + e) * Math.PI / 360)) / (Math.PI / 180);
  return o = o * r / 180, new Vo(i, o);
}
function _B(e) {
  let t = 0;
  if ((e == null ? void 0 : e.userData.mimeType) == "image/ktx2" && e.mipmaps) {
    for (let n = 0; n < e.mipmaps.length; n++)
      t += e.mipmaps[n].data.byteLength;
    return t;
  } else if (e.image) {
    const { image: n } = e, s = 4;
    let r = [n.width, n.height];
    for (; r[0] > 1 || r[1] > 1; )
      t += r[0] * r[1] * s, r[0] = Math.max(Math.floor(r[0] / 2), 1), r[1] = Math.max(Math.floor(r[1] / 2), 1);
    return t += 1 * 1 * s, t;
  } else
    return;
}
function Lc(e) {
  return EB(e);
}
let ht = null, Rt = null, Un = null, Rn = null;
const Uo = {
  minHeight: 0,
  maxHeight: 300,
  samples: 4,
  sampleStep: 4,
  opacity: 0.5,
  blendingType: cr
};
function wB(e, t, n, s = Uo) {
  ht && ht.dispose(), Rt || (Rt = n);
  const r = { ...Uo, ...s };
  ht = new qc(e.width * e.devicePixelRatio, e.height * e.devicePixelRatio), ht.texture.minFilter = jr, ht.texture.magFilter = jr, ht.stencilBuffer = !1, ht.texture.format = $c, ht.texture.type = Yc, Rt.setPixelRatio(devicePixelRatio), Rt.setSize(e.width, e.height), Rt.setRenderTarget(ht), Un = new Zc(), Un.overrideMaterial = SB, Rn = t, jt.uniforms.tPosition.value = ht.texture, jt.uniforms.minHeight.value = r.minHeight, jt.uniforms.maxHeight.value = r.maxHeight, jt.uniforms.samples.value = r.samples, jt.uniforms.sampleStep.value = r.sampleStep, jt.uniforms.opacity.value = r.opacity, jt.blending = r.blendingType;
}
function RB(e) {
  ht.setSize(e.width * e.devicePixelRatio, e.height * e.devicePixelRatio), Rt.setPixelRatio(devicePixelRatio), Rt.setSize(e.width, e.height);
}
function MB(e) {
  if (Rt) {
    const t = Rn.parent;
    Un.add(Rn), Rt.setRenderTarget(ht), Rt.render(Un, e), t && t.add(Rn), Rt.setRenderTarget(null);
  }
}
const Hn = (e) => e.toString(), SB = new ar({
  vertexShader: Hn`
        varying vec3 vPosition;
        void main() {
            vPosition =  (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
  fragmentShader: Hn`
        varying vec3 vPosition;
        void main() {
            gl_FragColor = vec4(vPosition, 1.0);
        }
    `,
  side: Jo
}), IB = Hn`
    #include <packing>

    varying vec2 vUv;
    varying vec3 vColor;
    uniform sampler2D tPosition;
    uniform float minHeight;
    uniform float maxHeight;
    uniform int samples;
    uniform float sampleStep;

    mat4 MVP;

    // Convert to normalized screen coordinates
    vec4 toNSC(const in vec4 v) {
        return vec4(0.5 * (v.xyz / v.w) + 0.5, v.w);
    }
    vec4 vertexDraping(
        const in sampler2D positionTex, // Position G-Buffer
        const in vec4 Vin // Vertex to drape
    ) {
        float texSize = float(textureSize(positionTex, 0).x);
        float pixelSize = 1.0 / texSize;
        vec2 stepSize = vec2(sampleStep/texSize);
        vec4 VinWorld = modelMatrix * Vin;

        vec4 lineStart = projectionMatrix * viewMatrix * vec4(VinWorld.x, minHeight, VinWorld.z, 1.0);
        vec4 lineEnd = projectionMatrix * viewMatrix * vec4(VinWorld.x, maxHeight, VinWorld.z, 1.0);

        vec4 Vout = VinWorld;

        // Binary search for line-terrain intersection
        float first = 0.0, last = 1.0;
        while(first <= last) {
            // Compute mid-point
            float mid = first + (last-first) / 2.0;
            // Compute texture coordinates along line
            vec4 texCoords = toNSC(mix(lineStart, lineEnd, mid));
            vec4 texSample = vec4(0.0); // Sample terrain
            for(int s = -samples; s < samples; s++) {
                for(int t = -samples; t < samples; t++) {
                    texSample += texture(positionTex,
                    texCoords.st + vec2(s,t) * stepSize);
                }
            }
            // Smooth samples obtain from G-Buffer
            texSample = texSample / (float(samples) * float(samples) * 4.0);
            float terrainHeight = texSample.y;
            Vout.y = terrainHeight;
           
            if((last-first) < pixelSize) { // Termination criteria
                return Vout;
            }
            // Perform intersection test
            float depthScene = toNSC(projectionMatrix * viewMatrix * Vout).y;
            if(depthScene >= texCoords.y) {
                first = mid;
            }
            else
                last = mid;
        }
        return Vout;
    }

    void main() {
        vColor = color;
        vUv = uv;
        MVP = projectionMatrix * modelViewMatrix;
        vec4 inputVertex = vec4(position, 1.0);
        vec4 outputVertex = vertexDraping(tPosition, inputVertex);
        vec4 finalPosition = projectionMatrix * viewMatrix * outputVertex;
        gl_Position = finalPosition;
    }
`, xB = Hn`
    varying vec3 vColor;
    uniform float opacity;

    void main() {
        gl_FragColor = vec4(vColor, opacity);
    }
`, jt = new ar({
  vertexShader: IB,
  fragmentShader: xB,
  uniforms: {
    tPosition: { value: null },
    minHeight: { value: 0 },
    maxHeight: { value: 300 },
    opacity: { value: 0.5 },
    samples: { value: 4 },
    sampleStep: { value: 4 }
  },
  vertexColors: !0,
  transparent: !0,
  depthTest: !1,
  blending: cr
}), Pc = {
  // From chroma spectral http://gka.github.io/chroma.js/
  SPECTRAL: [
    [0, new w(0.3686, 0.3098, 0.6353)],
    [0.1, new w(0.1961, 0.5333, 0.7412)],
    [0.2, new w(0.4, 0.7608, 0.6471)],
    [0.3, new w(0.6706, 0.8667, 0.6431)],
    [0.4, new w(0.902, 0.9608, 0.5961)],
    [0.5, new w(1, 1, 0.749)],
    [0.6, new w(0.9961, 0.8784, 0.5451)],
    [0.7, new w(0.9922, 0.6824, 0.3804)],
    [0.8, new w(0.9569, 0.4275, 0.2627)],
    [0.9, new w(0.8353, 0.2431, 0.3098)],
    [1, new w(0.6196, 39e-4, 0.2588)]
  ],
  PLASMA: [
    [0, new w(0.241, 0.015, 0.61)],
    [0.1, new w(0.387, 1e-3, 0.654)],
    [0.2, new w(0.524, 0.025, 0.653)],
    [0.3, new w(0.651, 0.125, 0.596)],
    [0.4, new w(0.752, 0.227, 0.513)],
    [0.5, new w(0.837, 0.329, 0.431)],
    [0.6, new w(0.907, 0.435, 0.353)],
    [0.7, new w(0.963, 0.554, 0.272)],
    [0.8, new w(0.992, 0.681, 0.195)],
    [0.9, new w(0.987, 0.822, 0.144)],
    [1, new w(0.94, 0.975, 0.131)]
  ],
  YELLOW_GREEN: [
    [0, new w(0.1647, 0.2824, 0.3451)],
    [0.1, new w(0.1338, 0.3555, 0.4227)],
    [0.2, new w(0.061, 0.4319, 0.4864)],
    [0.3, new w(0, 0.5099, 0.5319)],
    [0.4, new w(0, 0.5881, 0.5569)],
    [0.5, new w(0.137, 0.665, 0.5614)],
    [0.6, new w(0.2906, 0.7395, 0.5477)],
    [0.7, new w(0.4453, 0.8099, 0.5201)],
    [0.8, new w(0.6102, 0.8748, 0.485)],
    [0.9, new w(0.7883, 0.9323, 0.4514)],
    [1, new w(0.9804, 0.9804, 0.4314)]
  ],
  VIRIDIS: [
    [0, new w(0.267, 5e-3, 0.329)],
    [0.1, new w(0.283, 0.141, 0.458)],
    [0.2, new w(0.254, 0.265, 0.53)],
    [0.3, new w(0.207, 0.372, 0.553)],
    [0.4, new w(0.164, 0.471, 0.558)],
    [0.5, new w(0.128, 0.567, 0.551)],
    [0.6, new w(0.135, 0.659, 0.518)],
    [0.7, new w(0.267, 0.749, 0.441)],
    [0.8, new w(0.478, 0.821, 0.318)],
    [0.9, new w(0.741, 0.873, 0.15)],
    [1, new w(0.993, 0.906, 0.144)]
  ],
  INFERNO: [
    [0, new w(0.077, 0.042, 0.206)],
    [0.1, new w(0.225, 0.036, 0.388)],
    [0.2, new w(0.373, 0.074, 0.432)],
    [0.3, new w(0.522, 0.128, 0.42)],
    [0.4, new w(0.665, 0.182, 0.37)],
    [0.5, new w(0.797, 0.255, 0.287)],
    [0.6, new w(0.902, 0.364, 0.184)],
    [0.7, new w(0.969, 0.516, 0.063)],
    [0.8, new w(0.988, 0.683, 0.072)],
    [0.9, new w(0.961, 0.859, 0.298)],
    [1, new w(0.988, 0.998, 0.645)]
  ],
  GRAYSCALE: [
    [0, new w(0, 0, 0)],
    [1, new w(1, 1, 1)]
  ],
  // 16 samples of the TURBU color scheme
  // values taken from: https://gist.github.com/mikhailov-work/ee72ba4191942acecc03fe6da94fc73f
  // original file licensed under Apache-2.0
  TURBO: [
    [0, new w(0.18995, 0.07176, 0.23217)],
    [0.07, new w(0.25107, 0.25237, 0.63374)],
    [0.13, new w(0.27628, 0.42118, 0.89123)],
    [0.2, new w(0.25862, 0.57958, 0.99876)],
    [0.27, new w(0.15844, 0.73551, 0.92305)],
    [0.33, new w(0.09267, 0.86554, 0.7623)],
    [0.4, new w(0.19659, 0.94901, 0.59466)],
    [0.47, new w(0.42778, 0.99419, 0.38575)],
    [0.53, new w(0.64362, 0.98999, 0.23356)],
    [0.6, new w(0.80473, 0.92452, 0.20459)],
    [0.67, new w(0.93301, 0.81236, 0.22667)],
    [0.73, new w(0.99314, 0.67408, 0.20348)],
    [0.8, new w(0.9836, 0.49291, 0.12849)],
    [0.87, new w(0.92105, 0.31489, 0.05475)],
    [0.93, new w(0.81608, 0.18462, 0.01809)],
    [1, new w(0.66449, 0.08436, 424e-5)]
  ],
  RAINBOW: [
    [0, new w(0.278, 0, 0.714)],
    [1 / 6, new w(0, 0, 1)],
    [2 / 6, new w(0, 1, 1)],
    [3 / 6, new w(0, 1, 0)],
    [4 / 6, new w(1, 1, 0)],
    [5 / 6, new w(1, 0.64, 0)],
    [1, new w(1, 0, 0)]
  ],
  CONTOUR: [
    [0, new w(0, 0, 0)],
    [0.03, new w(0, 0, 0)],
    [0.04, new w(1, 1, 1)],
    [1, new w(1, 1, 1)]
  ]
}, OB = `
  varying vec3 vColor;
  uniform float alpha;

  void main() {
    if (vColor == vec3(0.0, 0.0, 0.0)) {
      discard;
    } else {
      gl_FragColor = vec4( vColor, alpha);
    }
  }
`, FB = `
  varying vec3 vColor;
  uniform sampler2D gradient;
  uniform sampler2D grayscale;
  attribute float intensity;
  attribute float classification;
  uniform vec3 rootCenter;
  uniform vec3 rootNormal;
  uniform vec2 elevationRange;
  uniform int coloring;
  uniform bool hideGround;
  uniform float maxIntensity;
  uniform float intensityContrast;
  uniform float pointSize;

  #ifdef USE_COLOR
  vec3 getRGB() {
      vec3 rgb = color;
      return rgb;
  }
  #endif

  vec3 getElevation(){
    vec4 world = modelMatrix * vec4( position, 1.0 );
    float diff = abs(dot(rootNormal, (vec3(world) - rootCenter)));
    float w = max(diff - elevationRange.x,0.0) / max(elevationRange.y - elevationRange.x,1.0);
    vec3 cElevation = texture2D(gradient, vec2(w,1.0-w)).rgb;

    return cElevation;
  }

  vec3 getIntensity(){
    // TODO: real contrast enhancement. Check https://github.com/yuki-koyama/enhancer/blob/master/shaders/enhancer.fs
    float intmod = pow(intensity, intensityContrast);
    vec3 cIntensity = texture2D(grayscale, vec2(intmod / maxIntensity ,1.0-(intmod / maxIntensity))).rgb;
    return cIntensity;
  }

  vec3 getClassification(){
    float classNormalized = classification / 255.0;
    vec3 cClassification = texture2D(gradient, vec2(classNormalized * 5.0,1.0-classNormalized * 5.0)).rgb;
    return cClassification;
  }

  vec3 getColor(){
      vec3 color;
      if (hideGround && classification == 2.0) {
         return vec3(0.0, 0.0, 0.0);               
      }

      if (coloring == 1) {
        color = getIntensity();
      }
      else if (coloring == 2) {
        color = getClassification();
      } else if (coloring == 3) {
        color = getElevation();
      } 
      #ifdef USE_COLOR
      else if (coloring == 4) {
        color = getRGB();
      }
      #endif
      else {
        color = vec3(1.0, 1.0, 1.0);
      }
      return color;
  }

  void main() {
      vColor = getColor();

      gl_PointSize = pointSize;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;
var Gc = /* @__PURE__ */ ((e) => (e[e.Intensity = 1] = "Intensity", e[e.Classification = 2] = "Classification", e[e.Elevation = 3] = "Elevation", e[e.RGB = 4] = "RGB", e[e.White = 5] = "White", e))(Gc || {}), Jn = /* @__PURE__ */ ((e) => (e[e.FlatTexture = 1] = "FlatTexture", e[e.ShadedTexture = 2] = "ShadedTexture", e[e.ShadedNoTexture = 3] = "ShadedNoTexture", e))(Jn || {});
const vB = Pc.RAINBOW, DB = typeof document < "u" ? vc(vB) : null, LB = Pc.GRAYSCALE, PB = typeof document < "u" ? vc(LB) : null, GB = {
  throttleRequests: !0,
  maxRequests: 64,
  updateInterval: 0.1,
  maxConcurrency: 1,
  maximumScreenSpaceError: 16,
  memoryAdjustedScreenSpaceError: !0,
  maximumMemoryUsage: 400,
  memoryCacheOverflow: 128,
  viewDistanceScale: 1,
  skipLevelOfDetail: !1,
  resetTransform: !1,
  updateTransforms: !0,
  shading: Jn.FlatTexture,
  transparent: !1,
  pointCloudColoring: Gc.White,
  pointSize: 1,
  worker: !0,
  wireframe: !1,
  debug: !1,
  gltfLoader: null,
  basisTranscoderPath: null,
  dracoDecoderPath: null,
  material: null,
  contentPostProcess: void 0,
  preloadTilesCount: null,
  collectAttributions: !1
};
class WB {
  /**
  * Loads a tileset of 3D Tiles according to the given {@link LoaderProps}
  * @public
  *
  * @param props - Properties for this load call {@link LoaderProps}.
  * @returns An object containing the 3D Model to be added to the scene
  * and a runtime engine to be updated every frame.
  */
  static async load(t) {
    const n = { ...GB, ...t.options }, { url: s } = t;
    let { viewport: r, renderer: i } = t;
    const o = n.updateInterval, a = 5, c = {};
    if (n.cesiumIONToken) {
      c["cesium-ion"] = {
        accessToken: n.cesiumIONToken
      };
      const T = await Cc.preload(s, c);
      c.fetch = { headers: T.headers };
    }
    n.googleApiKey && (c.fetch = { headers: { "X-GOOG-API-KEY": n.googleApiKey } }, t.options.hasOwnProperty("collectAttributions") || (n.collectAttributions = !0)), t.loadingManager && t.loadingManager.itemStart(s);
    const u = await pe(s, Le, {
      ...c
    }), l = {}, h = {}, f = [], d = new Cn(), m = new Cn();
    n.debug || (m.visible = !1);
    const g = {
      pointSize: { type: "f", value: n.pointSize },
      gradient: { type: "t", value: DB },
      grayscale: { type: "t", value: PB },
      rootCenter: { type: "vec3", value: new st() },
      rootNormal: { type: "vec3", value: new st() },
      coloring: { type: "i", value: n.pointCloudColoring },
      hideGround: { type: "b", value: !0 },
      elevationRange: { type: "vec2", value: new Vo(0, 400) },
      maxIntensity: { type: "f", value: 1 },
      intensityContrast: { type: "f", value: 1 },
      alpha: { type: "f", value: 1 }
    }, y = new ar({
      uniforms: g,
      vertexShader: FB,
      fragmentShader: OB,
      transparent: n.transparent,
      vertexColors: !0
    });
    let E, R, B;
    n.gltfLoader ? E = n.gltfLoader : (E = new su(), n.basisTranscoderPath && (R = new iu(), R.detectSupport(i ?? new tu()), R.setTranscoderPath(n.basisTranscoderPath + "/"), R.setWorkerLimit(1), E.setKTX2Loader(R)), n.dracoDecoderPath && (B = new ru(), B.setDecoderPath(n.dracoDecoderPath + "/"), B.setWorkerLimit(n.maxConcurrency), E.setDRACOLoader(B)));
    const C = new Gs({ transparent: n.transparent }), M = {
      maximumMemoryUsage: n.maximumMemoryUsage,
      maximumScreenSpaceError: n.maximumScreenSpaceError,
      memoryAdjustedScreenSpaceError: n.memoryAdjustedScreenSpaceError,
      memoryCacheOverflow: n.memoryCacheOverflow,
      viewDistanceScale: n.viewDistanceScale,
      skipLevelOfDetail: n.skipLevelOfDetail,
      updateTransforms: n.updateTransforms,
      throttleRequests: n.throttleRequests,
      maxRequests: n.maxRequests,
      contentLoader: async (T) => {
        let D = null;
        switch (T.type) {
          case Pe.POINTCLOUD: {
            D = UB(T, y, n, Lt);
            break;
          }
          case Pe.SCENEGRAPH:
          case Pe.MESH: {
            D = await NB(E, T, C, n, Lt);
            break;
          }
        }
        if (D && (D.visible = !1, l[T.id] = D, d.add(l[T.id]), n.debug)) {
          const nt = No(T);
          m.add(nt), h[T.id] = nt;
        }
      },
      onTileLoad: async (T) => {
        b && (n.resetTransform && !L && (T == null ? void 0 : T.depth) <= a && Wt(T), zt = !0);
      },
      onTileUnload: (T) => {
        f.push(T);
      },
      onTileError: (T, D) => {
        console.warn("Tile error", T.id, D);
      },
      onTraversalComplete(T) {
        return n.collectAttributions && (k = JB(T)), T;
      }
    }, b = new CB(u, {
      ...M,
      loadOptions: {
        ...c,
        maxConcurrency: n.maxConcurrency,
        worker: n.worker,
        gltf: {
          loadImages: !1
        },
        "3d-tiles": {
          loadGLTF: !1
        }
      }
    }), F = new Y(), v = new Y(), O = new st();
    let L = !1, k = "";
    if (b.root.boundingVolume ? (b.root.header.boundingVolume.region && console.warn("Cannot apply a model matrix to bounding volumes of type region. Tileset stays in original geo-coordinates."), v.setPosition(
      b.root.boundingVolume.center[0],
      b.root.boundingVolume.center[1],
      b.root.boundingVolume.center[2]
    )) : console.warn("Bounding volume not found, no transformations applied"), n.debug) {
      const T = No(b.root);
      m.add(T), h[b.root.id] = T;
    }
    let X = !1, Q = !1;
    g.rootCenter.value.copy(O), g.rootNormal.value.copy(new st(0, 0, 1).normalize()), b.stats.get("Loader concurrency").count = n.maxConcurrency, b.stats.get("Maximum mem usage").count = n.maximumMemoryUsage;
    let P = 0, at = null, zt = !0, ie = null;
    const Ce = new st(1 / 0, 1 / 0, 1 / 0);
    let Dt = null;
    d.updateMatrixWorld(!0);
    const et = new Y().copy(d.matrixWorld), Lt = new Y().copy(et).invert();
    n.resetTransform && Wt(b.root), n.debug && (h[b.root.id].applyMatrix4(F), m.matrixWorld.copy(d.matrixWorld));
    function Wt(T) {
      if (!T.boundingVolume.halfAxes)
        return;
      const D = T.boundingVolume.halfAxes, nt = new Y().extractRotation(Dc(D)).premultiply(new Y().extractRotation(Lt));
      if (!new ns().setFromRotationMatrix(nt).equals(new ns())) {
        L = !0;
        const bt = new st(
          v.elements[12],
          v.elements[13],
          v.elements[14]
        );
        v.extractRotation(nt), v.setPosition(bt);
      }
      Ee();
    }
    function Ee() {
      F.copy(et), n.resetTransform && F.multiply(new Y().copy(v).invert()), b.modelMatrix = new V(F.toArray());
    }
    function $e(T, D, nt, ct) {
      if (X || !ct)
        return;
      Dt || (Dt = new Fn({
        fov: ct.fov / 180 * Math.PI,
        aspectRatio: ct.aspect,
        near: ct.near,
        far: ct.far
      }).sseDenominator, n.debug && console.log("Updated sse denonimator:", Dt));
      const ts = Go(ct).planes.map((q) => new tt(q.normal.toArray(), q.constant)), Nc = new dt(ts), Hr = {
        camera: {
          position: Ce.toArray()
        },
        height: nt.height * nt.devicePixelRatio,
        frameNumber: T._frameNumber,
        sseDenominator: Dt,
        cullingVolume: Nc,
        viewport: {
          id: 0
        }
      };
      T._cache.reset(), T._traverser.traverse(T.root, Hr, T.options);
      for (const q of T.tiles)
        q.selected ? D[q.id] ? D[q.id].visible = !0 : console.error("TILE SELECTED BUT NOT LOADED!!", q.id) : D[q.id] && (D[q.id].visible = !1);
      for (; f.length > 0; ) {
        const q = f.pop();
        D[q.id] && q.contentState == lt.UNLOADED && (d.remove(D[q.id]), Ps(D[q.id]), delete D[q.id]), h[q.id] && (Ps(h[q.id]), m.remove(h[q.id]), delete h[q.id]);
      }
      const es = T.stats.get("Tiles Loaded").count, Jr = T.stats.get("Tiles Loading").count;
      return t.onProgress && t.onProgress(
        es,
        es + Jr
      ), t.loadingManager && !Q && Jr == 0 && (n.preloadTilesCount == null || es >= n.preloadTilesCount) && (Q = !0, t.loadingManager.itemEnd(t.url)), Hr;
    }
    function Zn(T) {
      const D = new st(), nt = new eu(), ct = new st();
      T.decompose(D, nt, ct), d.position.copy(D), d.quaternion.copy(nt), d.scale.copy(ct), d.updateMatrix(), d.updateMatrixWorld(!0), et.copy(d.matrixWorld), Lt.copy(et).invert(), Ee();
    }
    return {
      model: d,
      runtime: {
        getTileset: () => b,
        getStats: () => b.stats,
        getDataAttributions: () => k,
        showTiles: (T) => {
          m.visible = T;
        },
        setWireframe: (T) => {
          n.wireframe = T, d.traverse((D) => {
            D instanceof Ns && (D.material.wireframe = T);
          });
        },
        setDebug: (T) => {
          n.debug = T, m.visible = T;
        },
        setShading: (T) => {
          n.shading = T;
        },
        getTileBoxes: () => m,
        setViewDistanceScale: (T) => {
          b.options.viewDistanceScale = T, b._frameNumber++, $e(b, l, r, ie);
        },
        setMaximumScreenSpaceError: (T) => {
          b.options.maximumScreenSpaceError = T, b._frameNumber++, $e(b, l, r, ie);
        },
        setHideGround: (T) => {
          g.hideGround.value = T;
        },
        setPointCloudColoring: (T) => {
          g.coloring.value = T;
        },
        setElevationRange: (T) => {
          g.elevationRange.value.set(T[0], T[1]);
        },
        setMaxIntensity: (T) => {
          g.maxIntensity.value = T;
        },
        setIntensityContrast: (T) => {
          g.intensityContrast.value = T;
        },
        setPointAlpha: (T) => {
          g.alpha.value = T;
        },
        getLatLongHeightFromPosition: (T) => {
          const D = b.ellipsoid.cartesianToCartographic(
            new st().copy(T).applyMatrix4(new Y().copy(F).invert()).toArray()
          );
          return {
            lat: D[1],
            long: D[0],
            height: D[2]
          };
        },
        getPositionFromLatLongHeight: (T) => {
          const D = b.ellipsoid.cartographicToCartesian([
            T.long,
            T.lat,
            T.height
          ]);
          return new st(...D).applyMatrix4(F);
        },
        orientToGeocoord: (T) => {
          const D = [T.long, T.lat, T.height], nt = b.ellipsoid.cartographicToCartesian(D), ct = new Y().fromArray(b.ellipsoid.eastNorthUpToFixedFrame(nt)), bt = new Y().makeRotationFromEuler(
            new ns(Math.PI / 2, Math.PI / 2, 0)
          ), ts = new Y().copy(ct).multiply(bt).invert();
          Zn(ts);
        },
        getWebMercatorCoord: (T) => bB(T.lat, T.long),
        getCameraFrustum: (T) => {
          const nt = Go(T).planes.map((bt) => new tt(bt.normal.toArray(), bt.constant)).map((bt) => TB(bt)), ct = new Cn();
          for (const bt of nt) ct.add(bt);
          return ct;
        },
        overlayGeoJSON: (T, D) => {
          if (T.applyMatrix4(F), T.updateMatrixWorld(), !i)
            throw new Error("GeoJSON draping requires a renderer reference via LoaderProps");
          return wB(r, d, i, D), T.material.dispose(), T.material = jt, T;
        },
        setViewport: (T) => {
          r = T, Dt = null, zt = !0, ht && RB(r);
        },
        setRenderer: (T) => {
          i = T;
        },
        update: function(T, D) {
          if (ie = D, P += T, ht && MB(D), b && P >= o) {
            if (!et.equals(d.matrixWorld)) {
              P = 0, et.copy(d.matrixWorld), n.updateTransforms && Ee();
              const nt = new st().setFromMatrixPosition(et);
              g.rootCenter.value.copy(nt), g.rootNormal.value.copy(new st(0, 0, 1).applyMatrix4(et).normalize()), Lt.copy(et).invert(), n.debug && (h[b.root.id].matrixWorld.copy(F), h[b.root.id].applyMatrix4(et));
            }
            at == null ? at = new Y().copy(D.matrixWorld) : (zt || HB(D, at)) && (P = 0, zt = !1, b._frameNumber++, D.getWorldPosition(Ce), at.copy(D.matrixWorld), $e(b, l, r, D));
          }
        },
        dispose: function() {
          for (X = !0, b._destroy(); d.children.length > 0; ) {
            const T = d.children[0];
            Ps(T), d.remove(T);
          }
          for (; m.children.length > 0; ) {
            const T = m.children[0];
            m.remove(T), T.geometry.dispose(), T.material.dispose();
          }
          R && R.dispose(), B && B.dispose();
        }
      }
    };
  }
  /**
  * Loads a tileset of 3D Tiles according to the given {@link GeoJSONLoaderProps}
  * Could be overlayed on geograpical 3D Tiles using {@link Runtime.overlayGeoJSON}
  * @public
  *
  * @param props - Properties for this load call {@link GeoJSONLoaderProps}.
  * @returns An object containing the 3D Model to be added to the scene
  */
  static async loadGeoJSON(t) {
    const { url: n, height: s, featureToColor: r } = t;
    return pe(n, ke, { worker: !1, gis: { format: "binary" } }).then((i) => {
      const o = i, a = new jo(), c = o.polygons.positions.value.reduce((h, f, d, m) => {
        if (d % 2 == 0) {
          const g = [f, m[d + 1], s ?? 0], y = J.WGS84.cartographicToCartesian(g);
          h.push(...y);
        }
        return h;
      }, []);
      if (a.setAttribute("position", new Mn(
        c,
        3
      )), r) {
        const h = o.polygons.numericProps[r.feature].value.reduce((f, d, m, g) => {
          const y = r.colorMap(d);
          return f[m * 3] = y.r, f[m * 3 + 1] = y.g, f[m * 3 + 2] = y.b, f;
        }, []);
        a.setAttribute("color", new Mn(
          h,
          3
        ));
      }
      a.setIndex(
        new ko(o.polygons.triangles.value, 1)
      );
      const u = new Gs({
        transparent: !0,
        vertexColors: !0,
        opacity: 0.5,
        blending: cr
      });
      return new Ns(a, u);
    });
  }
}
async function NB(e, t, n, s, r) {
  return new Promise((i, o) => {
    const a = new Y().makeRotationAxis(new st(1, 0, 0), Math.PI / 2), c = t.content.gltfUpAxis !== "Z", u = new Y().fromArray(t.computedTransform).premultiply(r);
    c && u.multiply(a), t.content.byteLength || (t.content.byteLength = t.content.gltfArrayBuffer.byteLength), e.parse(
      t.content.gltfArrayBuffer,
      t.contentUrl ? t.contentUrl.substr(0, t.contentUrl.lastIndexOf("/") + 1) : null,
      (l) => {
        t.userData.asset = l.asset;
        const h = l.scenes[0];
        h.applyMatrix4(u), t.content.texturesByteLength = 0, t.content.geometriesByteLength = 0, h.traverse((f) => {
          if (f.type == "Mesh") {
            const d = f;
            t.content.geometriesByteLength += Lc(d.geometry);
            const m = d.material, g = m.map;
            if (g) {
              const y = _B(g);
              y && (t.content.texturesByteLength += y);
            }
            s.material ? (d.material = s.material.clone(), m.dispose()) : s.shading == Jn.FlatTexture && d.material.type !== "MeshBasicMaterial" && (d.material = n.clone(), m.dispose()), s.shading != Jn.ShadedNoTexture ? d.material.type == "ShaderMaterial" ? d.material.uniforms.map = { value: g } : d.material.map = g : (g && g.dispose(), d.material.map = null), d.material.wireframe = s.wireframe, s.contentPostProcess && s.contentPostProcess(d);
          }
        }), t.content.gpuMemoryUsageInBytes = t.content.texturesByteLength + t.content.geometriesByteLength, i(h);
      },
      (l) => {
        o(new Error(`error parsing gltf in tile ${t.id}: ${l}`));
      }
    );
  });
}
function UB(e, t, n, s) {
  const r = {
    rtc_center: e.content.rtcCenter,
    // eslint-disable-line camelcase
    points: e.content.attributes.positions,
    intensities: e.content.attributes.intensity,
    classifications: e.content.attributes.classification,
    rgb: null,
    rgba: null
  }, { colors: i } = e.content.attributes;
  i && i.size === 3 && (r.rgb = i.value), i && i.size === 4 && (r.rgba = i.value);
  const o = new jo();
  o.setAttribute("position", new Mn(r.points, 3));
  const a = new Y().fromArray(e.computedTransform).premultiply(s);
  r.rgba ? o.setAttribute("color", new Mn(r.rgba, 4)) : r.rgb && o.setAttribute("color", new kr(r.rgb, 3, !0)), r.intensities && o.setAttribute(
    "intensity",
    // Handles both 16bit or 8bit intensity values
    new ko(r.intensities, 1, !0)
  ), r.classifications && o.setAttribute("classification", new kr(r.classifications, 1, !1)), e.content.geometriesByteLength = Lc(o), e.content.gpuMemoryUsageInBytes = e.content.geometriesByteLength;
  const c = new nu(o, n.material || t);
  if (r.rtc_center) {
    const u = r.rtc_center;
    a.multiply(new Y().makeTranslation(u[0], u[1], u[2]));
  }
  return c.applyMatrix4(a), n.contentPostProcess && n.contentPostProcess(c), c;
}
function Ho(e) {
  var t, n, s, r;
  (t = e == null ? void 0 : e.uniforms) != null && t.map ? (s = (n = e == null ? void 0 : e.uniforms) == null ? void 0 : n.map.value) == null || s.dispose() : e.map && ((r = e.map) == null || r.dispose()), e.dispose();
}
function Ps(e) {
  e.traverse((t) => {
    if (t.isMesh)
      if (t.geometry.dispose(), t.material.isMaterial)
        Ho(t.material);
      else
        for (const n of t.material)
          Ho(n);
  });
  for (let t = e.children.length - 1; t >= 0; t--) {
    const n = e.children[t];
    e.remove(n);
  }
}
function HB(e, t) {
  return !e.matrixWorld.equals(t);
}
function JB(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    var o, a;
    const i = (a = (o = r == null ? void 0 : r.userData) == null ? void 0 : o.asset) == null ? void 0 : a.copyright;
    i && i.split(/;/g).map((u) => u.trim()).forEach((u) => {
      u && t.set(u, (t.get(u) || 0) + 1);
    });
  }), Array.from(t).sort((r, i) => i[1] - r[1]).map(([r]) => r).join("; ");
}
export {
  WB as Loader3DTiles,
  Gc as PointCloudColoring,
  Jn as Shading
};
