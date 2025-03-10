/*
  Human
  homepage: <https://github.com/vladmandic/human>
  author: <https://github.com/vladmandic>'
*/

"use strict";
var Ho = Object.create;
var w2 = Object.defineProperty;
var Go = Object.getOwnPropertyDescriptor;
var Vo = Object.getOwnPropertyNames;
var Zo = Object.getPrototypeOf,
  qo = Object.prototype.hasOwnProperty;
var I1 = (e) => {
  throw TypeError(e);
};
var Xo = (e, t, n) =>
  t in e
    ? w2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Uo = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Se = (e, t) => {
    for (var n in t) w2(e, n, { get: t[n], enumerable: !0 });
  },
  O1 = (e, t, n, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let r of Vo(t))
        !qo.call(e, r) &&
          r !== n &&
          w2(e, r, {
            get: () => t[r],
            enumerable: !(o = Go(t, r)) || o.enumerable,
          });
    return e;
  };
var Z = (e, t, n) => (
    (n = e != null ? Ho(Zo(e)) : {}),
    O1(
      t || !e || !e.__esModule
        ? w2(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  Yo = (e) => O1(w2({}, "__esModule", { value: !0 }), e);
var w = (e, t, n) => Xo(e, typeof t != "symbol" ? t + "" : t, n),
  L1 = (e, t, n) => t.has(e) || I1("Cannot " + n);
var Y0 = (e, t, n) => (
    L1(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ue = (e, t, n) =>
    t.has(e)
      ? I1("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  Me = (e, t, n, o) => (
    L1(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n
  );
var H = Uo((Ra, z2) => {
  "use strict";
  var Kt = Object.defineProperty,
    Ko = Object.getOwnPropertyDescriptor,
    Jo = Object.getOwnPropertyNames,
    Qo = Object.prototype.hasOwnProperty,
    _o = (e, t) => {
      for (var n in t) Kt(e, n, { get: t[n], enumerable: !0 });
    },
    Yt = (e, t, n, o) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of Jo(t))
          !Qo.call(e, r) &&
            r !== n &&
            Kt(e, r, {
              get: () => t[r],
              enumerable: !(o = Ko(t, r)) || o.enumerable,
            });
      return e;
    },
    Jt = (e, t, n) => (Yt(e, t, "default"), n && Yt(n, t, "default")),
    $o = (e) => Yt(Kt({}, "__esModule", { value: !0 }), e),
    E2 = {};
  _o(E2, { version: () => sr });
  z2.exports = $o(E2);
  Jt(E2, require("@tensorflow/tfjs-core"), z2.exports);
  Jt(E2, require("@tensorflow/tfjs-converter"), z2.exports);
  Jt(E2, require("@tensorflow/tfjs-backend-wasm"), z2.exports);
  var C1 = "4.22.0",
    er = "4.22.0",
    tr = "4.22.0",
    nr = "4.22.0",
    or = "4.22.0",
    rr = "4.22.0",
    sr = {
      tfjs: C1,
      "tfjs-core": C1,
      "tfjs-converter": er,
      "tfjs-backend-cpu": tr,
      "tfjs-backend-webgl": nr,
      "tfjs-backend-wasm": or,
      "tfjs-backend-webgpu": rr,
    };
});
var Ta = {};
Se(Ta, {
  Env: () => S2,
  Human: () => E1,
  default: () => E1,
  defaults: () => Ke,
  draw: () => rt,
  empty: () => ve,
  env: () => R,
  match: () => Wt,
  models: () => w1,
});
module.exports = Yo(Ta);
var de = Z(H());
function b(...e) {
  let t = new Date(),
    n = `${t.getHours().toString().padStart(2, "0")}:${t
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${t.getSeconds().toString().padStart(2, "0")}.${t
      .getMilliseconds()
      .toString()
      .padStart(3, "0")}`;
  e && console.log(n, "Human:", ...e);
}
function W1(e, t) {
  let n = e.endsWith("/") ? "" : "/",
    r =
      t.startsWith(".") ||
      t.startsWith("/") ||
      t.startsWith("http:") ||
      t.startsWith("https:") ||
      t.startsWith("file:")
        ? `${t}`
        : `${e}${n}${t}`;
  if (!r.toLocaleLowerCase().includes(".json"))
    throw new Error(`modelpath error: expecting json file: ${r}`);
  return r;
}
var v = () =>
  typeof performance != "undefined"
    ? performance.now()
    : parseInt((Number(process.hrtime.bigint()) / 1e3 / 1e3).toString());
function Qt(e, t, n = "config", o = []) {
  for (let r of Object.keys(t))
    if (typeof t[r] == "object") Qt(e[r], t[r], r, o);
    else {
      let s = e && typeof e[r] != "undefined";
      s || o.push({ reason: "unknown property", where: `${n}.${r} = ${t[r]}` });
      let A = e && typeof e[r] == typeof t[r];
      s &&
        !A &&
        o.push({
          reason: "property type mismatch",
          where: `${n}.${r} = ${t[r]}`,
          expected: typeof e[r],
        });
    }
  return (
    t.debug && n === "config" && o.length > 0 && b("invalid configuration", o),
    o
  );
}
function i0(...e) {
  let t = (n) => n && typeof n == "object";
  return e.reduce(
    (n, o) => (
      Object.keys(o || {}).forEach((r) => {
        let s = n[r],
          A = o[r];
        Array.isArray(s) && Array.isArray(A)
          ? (n[r] = s.concat(...A))
          : t(s) && t(A)
          ? (n[r] = i0(s, A))
          : (n[r] = A);
      }),
      n
    ),
    {}
  );
}
var Ke = {
  backend: "",
  modelBasePath: "",
  cacheModels: !0,
  validateModels: !0,
  wasmPath: "",
  wasmPlatformFetch: !1,
  debug: !1,
  async: !0,
  warmup: "full",
  cacheSensitivity: 0.7,
  skipAllowed: !1,
  deallocate: !1,
  flags: {},
  softwareKernels: !1,
  filter: {
    enabled: !0,
    equalization: !1,
    width: 0,
    height: 0,
    flip: !1,
    return: !0,
    autoBrightness: !0,
    brightness: 0,
    contrast: 0,
    sharpness: 0,
    blur: 0,
    saturation: 0,
    hue: 0,
    negative: !1,
    sepia: !1,
    vintage: !1,
    kodachrome: !1,
    technicolor: !1,
    polaroid: !1,
    pixelate: 0,
  },
  gesture: { enabled: !0 },
  face: {
    enabled: !0,
    detector: {
      modelPath: "blazeface.json",
      rotation: !1,
      maxDetected: 1,
      skipFrames: 99,
      skipTime: 2500,
      minConfidence: 0.2,
      minSize: 0,
      iouThreshold: 0.1,
      scale: 1.4,
      mask: !1,
      return: !1,
    },
    mesh: { enabled: !0, modelPath: "facemesh.json", keepInvalid: !1 },
    attention: { enabled: !1, modelPath: "facemesh-attention.json" },
    iris: { enabled: !0, scale: 2.3, modelPath: "iris.json" },
    emotion: {
      enabled: !0,
      minConfidence: 0.1,
      skipFrames: 99,
      skipTime: 1500,
      modelPath: "emotion.json",
    },
    description: {
      enabled: !0,
      modelPath: "faceres.json",
      skipFrames: 99,
      skipTime: 3e3,
      minConfidence: 0.1,
    },
    antispoof: {
      enabled: !1,
      skipFrames: 99,
      skipTime: 4e3,
      modelPath: "antispoof.json",
    },
    liveness: {
      enabled: !1,
      skipFrames: 99,
      skipTime: 4e3,
      modelPath: "liveness.json",
    },
  },
  body: {
    enabled: !0,
    modelPath: "movenet-lightning.json",
    maxDetected: -1,
    minConfidence: 0.3,
    skipFrames: 1,
    skipTime: 200,
  },
  hand: {
    enabled: !0,
    rotation: !0,
    skipFrames: 99,
    skipTime: 1e3,
    minConfidence: 0.5,
    iouThreshold: 0.2,
    maxDetected: -1,
    landmarks: !0,
    detector: { modelPath: "handtrack.json" },
    skeleton: { modelPath: "handlandmark-lite.json" },
  },
  object: {
    enabled: !1,
    modelPath: "centernet.json",
    minConfidence: 0.2,
    iouThreshold: 0.4,
    maxDetected: 10,
    skipFrames: 99,
    skipTime: 2e3,
  },
  segmentation: {
    enabled: !1,
    modelPath: "rvm.json",
    ratio: 0.5,
    mode: "default",
  },
};
var W0 = Z(H());
var I = Z(H());
var D1 = `
  precision highp float;
  attribute vec2 pos;
  attribute vec2 uv;
  varying vec2 vUv;
  uniform float flipY;
  void main(void) {
    vUv = uv;
    gl_Position = vec4(pos.x, pos.y*flipY, 0.0, 1.);
  }
`;
var F1 = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform float m[20];
  void main(void) {
    vec4 c = texture2D(texture, vUv);
    gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[3] * c.a + m[4];
    gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[8] * c.a + m[9];
    gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[13] * c.a + m[14];
    gl_FragColor.a = m[15] * c.r + m[16] * c.g + m[17] * c.b + m[18] * c.a + m[19];
  }
`,
  B1 = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform float m[20];
  void main(void) {
    vec4 c = texture2D(texture, vUv);
    gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[4];
    gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[9];
    gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[14];
    gl_FragColor.a = c.a;
  }
`,
  H1 = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 size;
  uniform sampler2D texture;
  vec2 pixelate(vec2 coord, vec2 size) {
    return floor( coord / size ) * size;
  }
  void main(void) {
    gl_FragColor = vec4(0.0);
    vec2 coord = pixelate(vUv, size);
    gl_FragColor += texture2D(texture, coord);
  }
`,
  G1 = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform vec2 px;
  void main(void) {
    gl_FragColor = vec4(0.0);
    gl_FragColor += texture2D(texture, vUv + vec2(-7.0*px.x, -7.0*px.y))*0.0044299121055113265;
    gl_FragColor += texture2D(texture, vUv + vec2(-6.0*px.x, -6.0*px.y))*0.00895781211794;
    gl_FragColor += texture2D(texture, vUv + vec2(-5.0*px.x, -5.0*px.y))*0.0215963866053;
    gl_FragColor += texture2D(texture, vUv + vec2(-4.0*px.x, -4.0*px.y))*0.0443683338718;
    gl_FragColor += texture2D(texture, vUv + vec2(-3.0*px.x, -3.0*px.y))*0.0776744219933;
    gl_FragColor += texture2D(texture, vUv + vec2(-2.0*px.x, -2.0*px.y))*0.115876621105;
    gl_FragColor += texture2D(texture, vUv + vec2(-1.0*px.x, -1.0*px.y))*0.147308056121;
    gl_FragColor += texture2D(texture, vUv                             )*0.159576912161;
    gl_FragColor += texture2D(texture, vUv + vec2( 1.0*px.x,  1.0*px.y))*0.147308056121;
    gl_FragColor += texture2D(texture, vUv + vec2( 2.0*px.x,  2.0*px.y))*0.115876621105;
    gl_FragColor += texture2D(texture, vUv + vec2( 3.0*px.x,  3.0*px.y))*0.0776744219933;
    gl_FragColor += texture2D(texture, vUv + vec2( 4.0*px.x,  4.0*px.y))*0.0443683338718;
    gl_FragColor += texture2D(texture, vUv + vec2( 5.0*px.x,  5.0*px.y))*0.0215963866053;
    gl_FragColor += texture2D(texture, vUv + vec2( 6.0*px.x,  6.0*px.y))*0.00895781211794;
    gl_FragColor += texture2D(texture, vUv + vec2( 7.0*px.x,  7.0*px.y))*0.0044299121055113265;
  }
`,
  V1 = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform vec2 px;
  uniform float m[9];
  void main(void) {
    vec4 c11 = texture2D(texture, vUv - px); // top left
    vec4 c12 = texture2D(texture, vec2(vUv.x, vUv.y - px.y)); // top center
    vec4 c13 = texture2D(texture, vec2(vUv.x + px.x, vUv.y - px.y)); // top right
    vec4 c21 = texture2D(texture, vec2(vUv.x - px.x, vUv.y) ); // mid left
    vec4 c22 = texture2D(texture, vUv); // mid center
    vec4 c23 = texture2D(texture, vec2(vUv.x + px.x, vUv.y) ); // mid right
    vec4 c31 = texture2D(texture, vec2(vUv.x - px.x, vUv.y + px.y) ); // bottom left
    vec4 c32 = texture2D(texture, vec2(vUv.x, vUv.y + px.y) ); // bottom center
    vec4 c33 = texture2D(texture, vUv + px ); // bottom right
    gl_FragColor = 
    c11 * m[0] + c12 * m[1] + c22 * m[2] +
    c21 * m[3] + c22 * m[4] + c23 * m[5] +
    c31 * m[6] + c32 * m[7] + c33 * m[8];
    gl_FragColor.a = c22.a;
  }
`;
var _t = (e, t, n) => {
    let o = new RegExp("\\b" + t + " \\w+ (\\w+)", "ig");
    e.replace(o, (r, s) => ((n[s] = 0), r));
  },
  $t = class {
    constructor(t, n, o) {
      w(this, "uniform", {});
      w(this, "attribute", {});
      w(this, "gl");
      w(this, "id");
      w(this, "compile", (t, n) => {
        let o = this.gl.createShader(n);
        return o
          ? (this.gl.shaderSource(o, t),
            this.gl.compileShader(o),
            this.gl.getShaderParameter(o, this.gl.COMPILE_STATUS)
              ? o
              : (b(
                  `filter: gl compile failed: ${
                    this.gl.getShaderInfoLog(o) || "unknown"
                  }`
                ),
                null))
          : (b("filter: could not create shader"), null);
      });
      this.gl = t;
      let r = this.compile(n, this.gl.VERTEX_SHADER),
        s = this.compile(o, this.gl.FRAGMENT_SHADER);
      if (((this.id = this.gl.createProgram()), !(!r || !s))) {
        if (!this.id) {
          b("filter: could not create webgl program");
          return;
        }
        if (
          (this.gl.attachShader(this.id, r),
          this.gl.attachShader(this.id, s),
          this.gl.linkProgram(this.id),
          !this.gl.getProgramParameter(this.id, this.gl.LINK_STATUS))
        ) {
          b(
            `filter: gl link failed: ${
              this.gl.getProgramInfoLog(this.id) || "unknown"
            }`
          );
          return;
        }
        this.gl.useProgram(this.id), _t(n, "attribute", this.attribute);
        for (let A in this.attribute)
          this.attribute[A] = this.gl.getAttribLocation(this.id, A);
        _t(n, "uniform", this.uniform), _t(o, "uniform", this.uniform);
        for (let A in this.uniform)
          this.uniform[A] = this.gl.getUniformLocation(this.id, A);
      }
    }
  };
function Z1() {
  let e = 0,
    t = null,
    n = !1,
    o = -1,
    r = [null, null],
    s = [],
    A = null,
    a = null,
    l = Ae(100, 100),
    c = {},
    d = { INTERMEDIATE: 1 },
    i = l.getContext("webgl");
  if (!i) {
    b("filter: cannot get webgl context");
    return;
  }
  this.gl = i;
  function y(g, p) {
    if (!(g === l.width && p === l.height)) {
      if (((l.width = g), (l.height = p), !A)) {
        let u = new Float32Array([
          -1, -1, 0, 1, 1, -1, 1, 1, -1, 1, 0, 0, -1, 1, 0, 0, 1, -1, 1, 1, 1,
          1, 1, 0,
        ]);
        (A = i.createBuffer()),
          i.bindBuffer(i.ARRAY_BUFFER, A),
          i.bufferData(i.ARRAY_BUFFER, u, i.STATIC_DRAW),
          i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
      }
      i.viewport(0, 0, l.width, l.height), (r = [null, null]);
    }
  }
  function x(g, p) {
    let u = i.createFramebuffer();
    i.bindFramebuffer(i.FRAMEBUFFER, u);
    let k = i.createRenderbuffer();
    i.bindRenderbuffer(i.RENDERBUFFER, k);
    let P = i.createTexture();
    return (
      i.bindTexture(i.TEXTURE_2D, P),
      i.texImage2D(
        i.TEXTURE_2D,
        0,
        i.RGBA,
        g,
        p,
        0,
        i.RGBA,
        i.UNSIGNED_BYTE,
        null
      ),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
      i.framebufferTexture2D(
        i.FRAMEBUFFER,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        P,
        0
      ),
      i.bindTexture(i.TEXTURE_2D, null),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      { fbo: u, texture: P }
    );
  }
  function m(g) {
    return (r[g] = r[g] || x(l.width, l.height)), r[g];
  }
  function f(g = 0) {
    if (!a) return;
    let p = null,
      u = null,
      k = !1;
    e === 0 ? (p = t) : (p = m(o).texture || null),
      e++,
      n && !(g & d.INTERMEDIATE)
        ? ((u = null), (k = e % 2 === 0))
        : ((o = (o + 1) % 2), (u = m(o).fbo || null)),
      i.bindTexture(i.TEXTURE_2D, p),
      i.bindFramebuffer(i.FRAMEBUFFER, u),
      i.uniform1f(a.uniform.flipY, k ? -1 : 1),
      i.drawArrays(i.TRIANGLES, 0, 6);
  }
  function h(g) {
    if (c[g]) return (a = c[g]), i.useProgram((a ? a.id : null) || null), a;
    if (((a = new $t(i, D1, g)), !a))
      return b("filter: could not get webgl program"), null;
    let p = Float32Array.BYTES_PER_ELEMENT,
      u = 4 * p;
    return (
      i.enableVertexAttribArray(a.attribute.pos),
      i.vertexAttribPointer(a.attribute.pos, 2, i.FLOAT, !1, u, 0 * p),
      i.enableVertexAttribArray(a.attribute.uv),
      i.vertexAttribPointer(a.attribute.uv, 2, i.FLOAT, !1, u, 2 * p),
      (c[g] = a),
      a
    );
  }
  let T = {
    colorMatrix: (g) => {
      let p = new Float32Array(g);
      (p[4] /= 255), (p[9] /= 255), (p[14] /= 255), (p[19] /= 255);
      let u =
          p[18] === 1 &&
          p[3] === 0 &&
          p[8] === 0 &&
          p[13] === 0 &&
          p[15] === 0 &&
          p[16] === 0 &&
          p[17] === 0 &&
          p[19] === 0
            ? B1
            : F1,
        k = h(u);
      k && (i.uniform1fv(k.uniform.m, p), f());
    },
    brightness: (g) => {
      let p = (g || 0) + 1;
      T.colorMatrix([
        p,
        0,
        0,
        0,
        0,
        0,
        p,
        0,
        0,
        0,
        0,
        0,
        p,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
      ]);
    },
    saturation: (g) => {
      let p = ((g || 0) * 2) / 3 + 1,
        u = (p - 1) * -0.5;
      T.colorMatrix([
        p,
        u,
        u,
        0,
        0,
        u,
        p,
        u,
        0,
        0,
        u,
        u,
        p,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
      ]);
    },
    desaturate: () => {
      T.saturation(-1);
    },
    contrast: (g) => {
      let p = (g || 0) + 1,
        u = -128 * (p - 1);
      T.colorMatrix([
        p,
        0,
        0,
        0,
        u,
        0,
        p,
        0,
        0,
        u,
        0,
        0,
        p,
        0,
        u,
        0,
        0,
        0,
        1,
        0,
      ]);
    },
    negative: () => {
      T.contrast(-2);
    },
    hue: (g) => {
      g = ((g || 0) / 180) * Math.PI;
      let p = Math.cos(g),
        u = Math.sin(g),
        k = 0.213,
        P = 0.715,
        N = 0.072;
      T.colorMatrix([
        k + p * (1 - k) + u * -k,
        P + p * -P + u * -P,
        N + p * -N + u * (1 - N),
        0,
        0,
        k + p * -k + u * 0.143,
        P + p * (1 - P) + u * 0.14,
        N + p * -N + u * -0.283,
        0,
        0,
        k + p * -k + u * -(1 - k),
        P + p * -P + u * P,
        N + p * (1 - N) + u * N,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
      ]);
    },
    desaturateLuminance: () => {
      T.colorMatrix([
        0.2764723, 0.929708, 0.0938197, 0, -37.1, 0.2764723, 0.929708,
        0.0938197, 0, -37.1, 0.2764723, 0.929708, 0.0938197, 0, -37.1, 0, 0, 0,
        1, 0,
      ]);
    },
    sepia: () => {
      T.colorMatrix([
        0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0,
        0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
      ]);
    },
    brownie: () => {
      T.colorMatrix([
        0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
        47.43192855600873, -0.037703249837783157, 0.8609577587992641,
        0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
        -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0,
        0, 1, 0,
      ]);
    },
    vintagePinhole: () => {
      T.colorMatrix([
        0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
        9.651285835294123, 0.02578397704808868, 0.6441188644374771,
        0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
        -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0,
        1, 0,
      ]);
    },
    kodachrome: () => {
      T.colorMatrix([
        1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
        63.72958762196502, -0.16404339962244616, 1.0835251566291304,
        -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
        -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0,
        1, 0,
      ]);
    },
    technicolor: () => {
      T.colorMatrix([
        1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
        11.793603434377337, -0.3087833385928097, 1.7658908555458428,
        -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
        -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0,
        1, 0,
      ]);
    },
    polaroid: () => {
      T.colorMatrix([
        1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016,
        -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
      ]);
    },
    shiftToBGR: () => {
      T.colorMatrix([
        0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      ]);
    },
    convolution: (g) => {
      let p = new Float32Array(g),
        u = 1 / l.width,
        k = 1 / l.height,
        P = h(V1);
      P && (i.uniform1fv(P.uniform.m, p), i.uniform2f(P.uniform.px, u, k), f());
    },
    detectEdges: () => {
      T.convolution.call(this, [0, 1, 0, 1, -4, 1, 0, 1, 0]);
    },
    sobelX: () => {
      T.convolution.call(this, [-1, 0, 1, -2, 0, 2, -1, 0, 1]);
    },
    sobelY: () => {
      T.convolution.call(this, [-1, -2, -1, 0, 0, 0, 1, 2, 1]);
    },
    sharpen: (g) => {
      let p = g || 1;
      T.convolution.call(this, [
        0,
        -1 * p,
        0,
        -1 * p,
        1 + 4 * p,
        -1 * p,
        0,
        -1 * p,
        0,
      ]);
    },
    emboss: (g) => {
      let p = g || 1;
      T.convolution.call(this, [
        -2 * p,
        -1 * p,
        0,
        -1 * p,
        1,
        1 * p,
        0,
        1 * p,
        2 * p,
      ]);
    },
    blur: (g) => {
      let p = g / 7 / l.width,
        u = g / 7 / l.height,
        k = h(G1);
      k &&
        (i.uniform2f(k.uniform.px, 0, u),
        f(d.INTERMEDIATE),
        i.uniform2f(k.uniform.px, p, 0),
        f());
    },
    pixelate: (g) => {
      let p = g / l.width,
        u = g / l.height,
        k = h(H1);
      k && (i.uniform2f(k.uniform.size, p, u), f());
    },
  };
  (this.add = function (g) {
    let p = Array.prototype.slice.call(arguments, 1),
      u = T[g];
    s.push({ func: u, args: p });
  }),
    (this.reset = function () {
      s = [];
    }),
    (this.get = function () {
      return s;
    }),
    (this.apply = function (g) {
      y(g.width, g.height),
        (e = 0),
        t || (t = i.createTexture()),
        i.bindTexture(i.TEXTURE_2D, t),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.NEAREST),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.NEAREST),
        i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, g);
      for (let p = 0; p < s.length; p++) {
        n = p === s.length - 1;
        let u = s[p];
        u.func.apply(this, u.args || []);
      }
      return l;
    }),
    (this.draw = function (g) {
      return this.add("brightness", 0), this.apply(g);
    });
}
var U = Z(H());
async function X2(e) {
  let t = e.shape.length === 4 ? U.squeeze(e) : e,
    n = U.split(t, 3, 2),
    o = [U.min(n[0]), U.min(n[1]), U.min(n[2])],
    r = [U.max(n[0]), U.max(n[1]), U.max(n[2])],
    s = await Promise.all(r.map((d) => d.data())),
    A = Math.max(s[0][0], s[1][0], s[2][0]),
    l = (A > 1 ? 255 : 1) / A,
    c;
  if (l > 1) {
    let d = [U.sub(n[0], o[0]), U.sub(n[1], o[1]), U.sub(n[2], o[2])],
      i = [U.sub(r[0], o[0]), U.sub(r[1], o[1]), U.sub(r[2], o[2])],
      y = [U.mul(d[0], l), U.mul(d[1], l), U.mul(d[2], l)],
      x = U.stack([y[0], y[1], y[2]], 2);
    (c = U.reshape(x, [1, t.shape[0] || 0, t.shape[1] || 0, 3])),
      U.dispose([...d, ...i, ...y, x]);
  } else c = U.expandDims(t, 0);
  return U.dispose([...n, ...o, ...r, n, t, e]), c;
}
var U2 = 3840,
  M0 = null,
  P0 = null,
  y2 = null,
  t0,
  ne = { inputSum: 0, cacheDiff: 1, sumMethod: 0, inputTensor: void 0 };
function e5() {
  (ne.inputSum = 0),
    (ne.cacheDiff = 1),
    (ne.sumMethod = 0),
    (ne.inputTensor = void 0);
}
function Ae(e, t) {
  let n;
  if (R.browser)
    if (R.worker) {
      if (typeof OffscreenCanvas == "undefined")
        throw new Error(
          "canvas error: attempted to run in web worker but OffscreenCanvas is not supported"
        );
      n = new OffscreenCanvas(e, t);
    } else if (typeof document != "undefined")
      (n = document.createElement("canvas")), (n.width = e), (n.height = t);
    else if (
      typeof navigator != "undefined" &&
      navigator.product === "ReactNative"
    )
      if (typeof R.Canvas != "undefined") n = new R.Canvas(e, t);
      else if (typeof globalThis.Canvas != "undefined")
        n = new globalThis.Canvas(e, t);
      else
        throw new Error(
          "canvas error: attempted to use canvas in react-native without canvas support installed"
        );
    else
      throw new Error(
        "canvas error: attempted to run in browser but DOM is not defined"
      );
  else
    typeof R.Canvas != "undefined"
      ? (n = new R.Canvas(e, t))
      : typeof globalThis.Canvas != "undefined" &&
        (n = new globalThis.Canvas(e, t));
  return n;
}
function Y2(e, t) {
  let n = t || Ae(e.width, e.height);
  return n.getContext("2d").drawImage(e, 0, 0), n;
}
async function K2(e, t, n = !0) {
  var y, x, m;
  if (!e)
    return (
      t.debug && b("input error: input is missing"),
      { tensor: null, canvas: null }
    );
  if (
    !(e instanceof I.Tensor) &&
    !(typeof Image != "undefined" && e instanceof Image) &&
    !(
      typeof globalThis.Canvas != "undefined" && e instanceof globalThis.Canvas
    ) &&
    !(typeof ImageData != "undefined" && e instanceof ImageData) &&
    !(typeof ImageBitmap != "undefined" && e instanceof ImageBitmap) &&
    !(
      typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement
    ) &&
    !(
      typeof HTMLMediaElement != "undefined" && e instanceof HTMLMediaElement
    ) &&
    !(
      typeof HTMLVideoElement != "undefined" && e instanceof HTMLVideoElement
    ) &&
    !(
      typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement
    ) &&
    !(typeof OffscreenCanvas != "undefined" && e instanceof OffscreenCanvas)
  )
    throw new Error("input error: type not recognized");
  if (e instanceof I.Tensor) {
    let f = null;
    if (e.isDisposedInternal)
      throw new Error(
        "input error: attempted to use tensor but it is disposed"
      );
    if (!e.shape)
      throw new Error("input error: attempted to use tensor without a shape");
    if (e.shape.length === 3) {
      if (e.shape[2] === 3) f = I.expandDims(e, 0);
      else if (e.shape[2] === 4) {
        let h = I.slice3d(e, [0, 0, 0], [-1, -1, 3]);
        (f = I.expandDims(h, 0)), I.dispose(h);
      }
    } else
      e.shape.length === 4 &&
        (e.shape[3] === 3
          ? (f = I.clone(e))
          : e.shape[3] === 4 &&
            (f = I.slice4d(e, [0, 0, 0, 0], [-1, -1, -1, 3])));
    if (
      f == null ||
      f.shape.length !== 4 ||
      f.shape[0] !== 1 ||
      f.shape[3] !== 3
    )
      throw new Error(
        `input error: attempted to use tensor with unrecognized shape: ${e.shape.toString()}`
      );
    if (f.dtype === "int32") {
      let h = I.cast(f, "float32");
      I.dispose(f), (f = h);
    }
    return { tensor: f, canvas: t.filter.return ? P0 : null };
  }
  if (typeof e.readyState != "undefined" && e.readyState <= 2)
    return (
      t.debug && b("input stream is not ready"), { tensor: null, canvas: M0 }
    );
  let o =
      e.naturalWidth || e.videoWidth || e.width || (e.shape && e.shape[1] > 0),
    r =
      e.naturalHeight ||
      e.videoHeight ||
      e.height ||
      (e.shape && e.shape[2] > 0);
  if (!o || !r)
    return (
      t.debug && b("cannot determine input dimensions"),
      { tensor: null, canvas: M0 }
    );
  let s = o,
    A = r;
  if (
    (s > U2 && ((s = U2), (A = Math.trunc((s * r) / o))),
    A > U2 && ((A = U2), (s = Math.trunc((A * o) / r))),
    (((y = t.filter) == null ? void 0 : y.width) || 0) > 0
      ? (s = t.filter.width)
      : (((x = t.filter) == null ? void 0 : x.height) || 0) > 0 &&
        (s = o * ((t.filter.height || 0) / r)),
    (t.filter.height || 0) > 0
      ? (A = t.filter.height)
      : (t.filter.width || 0) > 0 && (A = r * ((t.filter.width || 0) / o)),
    !s || !A)
  )
    throw new Error("input error: cannot determine dimension");
  (!M0 || M0.width !== s || M0.height !== A) && (M0 = Ae(s, A));
  let a = M0.getContext("2d");
  if (
    (typeof ImageData != "undefined" && e instanceof ImageData
      ? a.putImageData(e, 0, 0)
      : t.filter.flip && typeof a.translate != "undefined"
      ? (a.translate(o, 0),
        a.scale(-1, 1),
        a.drawImage(e, 0, 0, o, r, 0, 0, M0.width, M0.height),
        a.setTransform(1, 0, 0, 1, 0, 0))
      : a.drawImage(e, 0, 0, o, r, 0, 0, M0.width, M0.height),
    (!P0 || M0.width !== P0.width || M0.height !== P0.height) &&
      (P0 = Ae(M0.width, M0.height)),
    t.filter.enabled && R.webgl.supported
      ? (t0 || (t0 = R.browser ? new Z1() : null),
        (R.filter = !!t0),
        t0 != null && t0.add
          ? (t0.reset(),
            t.filter.brightness !== 0 &&
              t0.add("brightness", t.filter.brightness),
            t.filter.contrast !== 0 && t0.add("contrast", t.filter.contrast),
            t.filter.sharpness !== 0 && t0.add("sharpen", t.filter.sharpness),
            t.filter.blur !== 0 && t0.add("blur", t.filter.blur),
            t.filter.saturation !== 0 &&
              t0.add("saturation", t.filter.saturation),
            t.filter.hue !== 0 && t0.add("hue", t.filter.hue),
            t.filter.negative && t0.add("negative"),
            t.filter.sepia && t0.add("sepia"),
            t.filter.vintage && t0.add("brownie"),
            t.filter.sepia && t0.add("sepia"),
            t.filter.kodachrome && t0.add("kodachrome"),
            t.filter.technicolor && t0.add("technicolor"),
            t.filter.polaroid && t0.add("polaroid"),
            t.filter.pixelate !== 0 && t0.add("pixelate", t.filter.pixelate),
            ((m = t0.get()) == null ? void 0 : m.length) > 1
              ? (P0 = t0.apply(M0))
              : (P0 = t0.draw(M0)))
          : (t.debug && b("input process error: cannot initialize filters"),
            (R.webgl.supported = !1),
            (t.filter.enabled = !1),
            Y2(M0, P0)))
      : (Y2(M0, P0), t0 && (t0 = null), (R.filter = !!t0)),
    !n)
  )
    return { tensor: null, canvas: P0 };
  if (!P0) throw new Error("canvas error: cannot create output");
  let l,
    c = 3;
  if (
    (typeof ImageData != "undefined" && e instanceof ImageData) ||
    (e.data && e.width && e.height)
  )
    if (R.browser && I.browser) l = I.browser ? I.browser.fromPixels(e) : null;
    else {
      c = e.data.length / e.height / e.width;
      let f = new Uint8Array(e.data.buffer);
      l = I.tensor(f, [e.height, e.width, c], "int32");
    }
  else if (
    ((!y2 || P0.width !== y2.width || P0.height !== y2.height) &&
      (y2 = Ae(P0.width, P0.height)),
    I.browser && R.browser)
  )
    t.backend === "webgl" || t.backend === "humangl" || t.backend === "webgpu"
      ? (l = I.browser.fromPixels(P0))
      : ((y2 = Y2(P0)), (l = I.browser.fromPixels(y2)));
  else {
    let T = Y2(P0).getContext("2d").getImageData(0, 0, s, A);
    c = T.data.length / s / A;
    let g = new Uint8Array(T.data.buffer);
    l = I.tensor(g, [s, A, c]);
  }
  if (c === 4) {
    let f = I.slice3d(l, [0, 0, 0], [-1, -1, 3]);
    I.dispose(l), (l = f);
  }
  if (!l) throw new Error("input error: cannot create tensor");
  let d = I.cast(l, "float32"),
    i = t.filter.equalization ? await X2(d) : I.expandDims(d, 0);
  if ((I.dispose([l, d]), t.filter.autoBrightness)) {
    let f = I.max(i),
      h = await f.data();
    (t.filter.brightness = h[0] > 1 ? 1 - h[0] / 255 : 1 - h[0]), I.dispose(f);
  }
  return { tensor: i, canvas: t.filter.return ? P0 : null };
}
async function q1(e, t) {
  let n = !1;
  if (
    e.cacheSensitivity === 0 ||
    !t.shape ||
    t.shape.length !== 4 ||
    t.shape[1] > 3840 ||
    t.shape[2] > 2160
  )
    return n;
  if (!ne.inputTensor) ne.inputTensor = I.clone(t);
  else if (
    ne.inputTensor.shape[1] !== t.shape[1] ||
    ne.inputTensor.shape[2] !== t.shape[2]
  )
    I.dispose(ne.inputTensor), (ne.inputTensor = I.clone(t));
  else {
    let o = {};
    (o.diff = I.sub(t, ne.inputTensor)),
      (o.squared = I.mul(o.diff, o.diff)),
      (o.sum = I.sum(o.squared));
    let s =
      (await o.sum.data())[0] / (t.shape[1] || 1) / (t.shape[2] || 1) / 255 / 3;
    I.dispose([ne.inputTensor, o.diff, o.squared, o.sum]),
      (ne.inputTensor = I.clone(t)),
      (n = s <= (e.cacheSensitivity || 0));
  }
  return n;
}
async function X1(e, t, n) {
  let o = {};
  if (!t || !n || t.shape.length !== 4 || t.shape.length !== n.shape.length)
    return (
      e.debug ||
        b(
          "invalid input tensor or tensor shapes do not match:",
          t.shape,
          n.shape
        ),
      0
    );
  if (
    t.shape[0] !== 1 ||
    n.shape[0] !== 1 ||
    t.shape[3] !== 3 ||
    n.shape[3] !== 3
  )
    return (
      e.debug ||
        b(
          "input tensors must be of shape [1, height, width, 3]:",
          t.shape,
          n.shape
        ),
      0
    );
  (o.input1 = I.clone(t)),
    (o.input2 =
      t.shape[1] !== n.shape[1] || t.shape[2] !== n.shape[2]
        ? I.image.resizeBilinear(n, [t.shape[1], t.shape[2]])
        : I.clone(n)),
    (o.diff = I.sub(o.input1, o.input2)),
    (o.squared = I.mul(o.diff, o.diff)),
    (o.sum = I.sum(o.squared));
  let s =
    (await o.sum.data())[0] / (t.shape[1] || 1) / (t.shape[2] || 1) / 255 / 3;
  return I.dispose([o.input1, o.input2, o.diff, o.squared, o.sum]), s;
}
var j2,
  N2,
  I2,
  S2 = class {
    constructor() {
      w(this, "browser");
      w(this, "node");
      w(this, "worker");
      w(this, "platform", "");
      w(this, "agent", "");
      w(this, "backends", []);
      w(this, "initial");
      w(this, "filter");
      w(this, "tfjs");
      w(this, "offscreen");
      w(this, "perfadd", !1);
      w(this, "tensorflow", { version: void 0, gpu: void 0 });
      w(this, "wasm", {
        supported: void 0,
        backend: void 0,
        simd: void 0,
        multithread: void 0,
      });
      w(this, "webgl", {
        supported: void 0,
        backend: void 0,
        version: void 0,
        renderer: void 0,
        shader: void 0,
        vendor: void 0,
      });
      w(this, "webgpu", {
        supported: void 0,
        backend: void 0,
        adapter: void 0,
      });
      w(this, "cpu", { model: void 0, flags: [] });
      w(this, "kernels", []);
      ue(this, j2);
      ue(this, N2);
      ue(this, I2);
      if (
        ((this.browser =
          typeof navigator != "undefined" &&
          typeof navigator.appVersion != "undefined"),
        (this.node =
          typeof process != "undefined" &&
          typeof process.versions != "undefined" &&
          typeof process.versions.node != "undefined"),
        (this.tfjs = { version: W0.version["tfjs-core"] }),
        (this.offscreen = typeof OffscreenCanvas != "undefined"),
        (this.initial = !0),
        (this.worker =
          this.browser && this.offscreen
            ? typeof WorkerGlobalScope != "undefined"
            : void 0),
        typeof navigator != "undefined" &&
          typeof navigator.userAgent != "undefined")
      ) {
        let t = navigator.userAgent || "",
          n = t.match(/\(([^()]+)\)/g);
        if (n != null && n[0]) {
          let o = n[0].match(/\(([^()]+)\)/g);
          (this.platform = o != null && o[0] ? o[0].replace(/\(|\)/g, "") : ""),
            (this.agent = t.replace(n[0], "")),
            this.platform[1] && (this.agent = this.agent.replace(n[1], "")),
            (this.agent = this.agent.replace(/  /g, " "));
        }
      } else
        typeof process != "undefined" &&
          ((this.platform = `${process.platform} ${process.arch}`),
          (this.agent = `NodeJS ${process.version}`));
    }
    get Canvas() {
      return Y0(this, j2);
    }
    set Canvas(t) {
      Me(this, j2, t), (globalThis.Canvas = t);
    }
    get Image() {
      return Y0(this, N2);
    }
    set Image(t) {
      Me(this, N2, t), (globalThis.Image = t);
    }
    get ImageData() {
      return Y0(this, I2);
    }
    set ImageData(t) {
      Me(this, I2, t), (globalThis.ImageData = t);
    }
    async updateBackend() {
      this.backends = Object.keys(W0.engine().registryFactory);
      try {
        this.tensorflow = {
          version: W0.backend().binding
            ? W0.backend().binding.TF_Version
            : void 0,
          gpu: W0.backend().binding
            ? W0.backend().binding.isUsingGpuDevice()
            : void 0,
        };
      } catch (o) {}
      (this.wasm.supported = typeof WebAssembly != "undefined"),
        (this.wasm.backend = this.backends.includes("wasm")),
        this.wasm.supported &&
          this.wasm.backend &&
          ((this.wasm.simd = await W0.env().getAsync("WASM_HAS_SIMD_SUPPORT")),
          (this.wasm.multithread = await W0.env().getAsync(
            "WASM_HAS_MULTITHREAD_SUPPORT"
          )));
      let t = Ae(100, 100),
        n = t ? t.getContext("webgl2") : void 0;
      (this.webgl.supported = typeof n != "undefined"),
        (this.webgl.backend = this.backends.includes("webgl")),
        this.webgl.supported &&
          this.webgl.backend &&
          n &&
          ((this.webgl.version = n.getParameter(n.VERSION)),
          (this.webgl.vendor = n.getParameter(n.VENDOR)),
          (this.webgl.renderer = n.getParameter(n.RENDERER)),
          (this.webgl.shader = n.getParameter(n.SHADING_LANGUAGE_VERSION))),
        (this.webgpu.supported =
          this.browser &&
          typeof navigator != "undefined" &&
          typeof navigator.gpu != "undefined"),
        (this.webgpu.backend = this.backends.includes("webgpu"));
      try {
        if (this.webgpu.supported) {
          let o = await navigator.gpu.requestAdapter();
          o &&
            ("requestAdapterInfo" in o
              ? (this.webgpu.adapter = await o.requestAdapterInfo())
              : (this.webgpu.adapter = await o.info));
        }
      } catch (o) {
        this.webgpu.supported = !1;
      }
      try {
        this.kernels = W0.getKernelsForBackend(W0.getBackend()).map((o) =>
          o.kernelName.toLowerCase()
        );
      } catch (o) {}
    }
    updateCPU() {
      let t = { model: "", flags: [] };
      this.node && this.platform.startsWith("linux"),
        this.cpu
          ? (this.cpu = t)
          : Object.defineProperty(this, "cpu", { value: t });
    }
  };
(j2 = new WeakMap()), (N2 = new WeakMap()), (I2 = new WeakMap());
var R = new S2();
var Q2 = class {
  constructor() {
    w(this, "config");
    w(this, "element");
    w(this, "stream");
    w(this, "devices", []);
    w(this, "enumerate", async () => {
      try {
        let t = await navigator.mediaDevices.enumerateDevices();
        this.devices = t.filter((n) => n.kind === "videoinput");
      } catch (t) {
        this.devices = [];
      }
      return this.devices;
    });
    w(this, "start", async (t) => {
      var r, s;
      if (
        (t != null &&
          t.debug &&
          (this.config.debug = t == null ? void 0 : t.debug),
        t != null && t.crop && (this.config.crop = t == null ? void 0 : t.crop),
        t != null && t.mode && (this.config.mode = t == null ? void 0 : t.mode),
        t != null &&
          t.width &&
          (this.config.width = t == null ? void 0 : t.width),
        t != null &&
          t.height &&
          (this.config.height = t == null ? void 0 : t.height),
        t != null && t.id && (this.config.id = t == null ? void 0 : t.id),
        t != null && t.element)
      )
        if (typeof t.element == "string") {
          let A = document.getElementById(t.element);
          if (A && A instanceof HTMLVideoElement) this.element = A;
          else
            return (
              this.config.debug &&
                b("webcam", "cannot get dom element", t.element),
              `webcam error: cannot get dom element: ${t.element}`
            );
        } else if (t.element instanceof HTMLVideoElement)
          this.element = t.element;
        else
          return (
            this.config.debug && b("webcam", "unknown dom element", t.element),
            `webcam error: unknown dom element: ${t.element}`
          );
      else this.element = document.createElement("video");
      let n = {
        audio: !1,
        video: {
          facingMode: this.config.mode === "front" ? "user" : "environment",
          resizeMode: this.config.crop ? "crop-and-scale" : "none",
        },
      };
      if (
        (((r = this.config) == null ? void 0 : r.width) > 0 &&
          (n.video.width = { ideal: this.config.width }),
        ((s = this.config) == null ? void 0 : s.height) > 0 &&
          (n.video.height = { ideal: this.config.height }),
        this.config.id && (n.video.deviceId = this.config.id),
        this.element.addEventListener("play", () => {
          this.config.debug && b("webcam", "play");
        }),
        this.element.addEventListener("pause", () => {
          this.config.debug && b("webcam", "pause");
        }),
        this.element.addEventListener("click", async () => {
          !this.element ||
            !this.stream ||
            (this.element.paused
              ? await this.element.play()
              : this.element.pause());
        }),
        !(navigator != null && navigator.mediaDevices))
      )
        return (
          this.config.debug && b("webcam error", "no devices"),
          "webcam error: no devices"
        );
      try {
        this.stream = await navigator.mediaDevices.getUserMedia(n);
      } catch (A) {
        return b("webcam", A), `webcam error: ${A}`;
      }
      return this.stream
        ? ((this.element.srcObject = this.stream),
          await new Promise((A) => {
            this.element ? (this.element.onloadeddata = () => A(!0)) : A(!1);
          }),
          await this.element.play(),
          this.config.debug &&
            b("webcam", {
              width: this.width,
              height: this.height,
              label: this.label,
              stream: this.stream,
              track: this.track,
              settings: this.settings,
              constraints: this.constraints,
              capabilities: this.capabilities,
            }),
          `webcam: ${this.label}`)
        : (this.config.debug && b("webcam error", "no stream"),
          "webcam error no stream");
    });
    w(this, "pause", () => {
      this.element && this.element.pause();
    });
    w(this, "play", async () => {
      this.element && (await this.element.play());
    });
    w(this, "stop", () => {
      this.config.debug && b("webcam", "stop"), this.track && this.track.stop();
    });
    this.config = {
      element: void 0,
      debug: !0,
      mode: "front",
      crop: !1,
      width: 0,
      height: 0,
    };
  }
  get track() {
    if (this.stream) return this.stream.getVideoTracks()[0];
  }
  get capabilities() {
    if (this.track)
      return this.track.getCapabilities ? this.track.getCapabilities() : void 0;
  }
  get constraints() {
    if (this.track)
      return this.track.getConstraints ? this.track.getConstraints() : void 0;
  }
  get settings() {
    if (!this.stream) return;
    let t = this.stream.getVideoTracks()[0];
    return t.getSettings ? t.getSettings() : void 0;
  }
  get label() {
    return this.track ? this.track.label : "";
  }
  get paused() {
    var t;
    return ((t = this.element) == null ? void 0 : t.paused) || !1;
  }
  get width() {
    var t;
    return ((t = this.element) == null ? void 0 : t.videoWidth) || 0;
  }
  get height() {
    var t;
    return ((t = this.element) == null ? void 0 : t.videoHeight) || 0;
  }
};
var f2 = Z(H());
var t5 = {};
Se(t5, {
  "affectnet-mobilenet": () => Tr,
  age: () => vr,
  "anti-spoofing": () => es,
  antispoof: () => lr,
  blazeface: () => cr,
  "blazeface-back": () => Rr,
  "blazeface-front": () => Mr,
  "blazepose-detector": () => Pr,
  "blazepose-full": () => kr,
  "blazepose-heavy": () => wr,
  "blazepose-lite": () => Er,
  centernet: () => dr,
  default: () => ys,
  efficientpose: () => zr,
  "efficientpose-i-lite": () => ts,
  "efficientpose-ii-lite": () => ns,
  "efficientpose-iv": () => os,
  emotion: () => xr,
  faceboxes: () => Sr,
  facemesh: () => yr,
  "facemesh-attention": () => Nr,
  "facemesh-attention-pinto": () => jr,
  "facemesh-detection-full": () => Ir,
  "facemesh-detection-short": () => Or,
  faceres: () => fr,
  "faceres-deep": () => Lr,
  gear: () => Dr,
  "gear-e1": () => Cr,
  "gear-e2": () => Wr,
  gender: () => Br,
  "gender-ssrnet-imdb": () => Fr,
  handdetect: () => Hr,
  "handlandmark-full": () => Gr,
  "handlandmark-lite": () => mr,
  "handlandmark-sparse": () => Vr,
  handskeleton: () => Zr,
  handtrack: () => pr,
  "insightface-efficientnet-b0": () => rs,
  "insightface-ghostnet-strides1": () => ss,
  "insightface-ghostnet-strides2": () => As,
  "insightface-mobilenet-emore": () => as,
  "insightface-mobilenet-swish": () => is,
  iris: () => ur,
  liveness: () => hr,
  meet: () => qr,
  mobileface: () => Xr,
  mobilefacenet: () => Ur,
  models: () => br,
  "movenet-lightning": () => gr,
  "movenet-multipose": () => Yr,
  "movenet-thunder": () => Kr,
  nanodet: () => Jr,
  "nanodet-e": () => ls,
  "nanodet-g": () => cs,
  "nanodet-m": () => ds,
  "nanodet-t": () => xs,
  posenet: () => Qr,
  rvm: () => _r,
  selfie: () => $r,
});
var lr = 853098,
  cr = 538928,
  dr = 4030290,
  xr = 820516,
  yr = 1477958,
  fr = 6978814,
  mr = 2023432,
  pr = 2964837,
  ur = 2599092,
  hr = 592976,
  br = 0,
  gr = 4650216,
  Tr = 6920630,
  vr = 161240,
  Rr = 538928,
  Mr = 402048,
  Pr = 5928856,
  kr = 6339202,
  wr = 27502466,
  Er = 2726402,
  zr = 5651240,
  Sr = 2013002,
  jr = 2387598,
  Nr = 2382414,
  Ir = 1026192,
  Or = 201268,
  Lr = 13957620,
  Cr = 112438,
  Wr = 112438,
  Dr = 1498916,
  Fr = 161236,
  Br = 201808,
  Hr = 3515612,
  Gr = 5431368,
  Vr = 5286322,
  Zr = 5502280,
  qr = 372228,
  Xr = 2183192,
  Ur = 5171976,
  Yr = 9448838,
  Kr = 12477112,
  Jr = 7574558,
  Qr = 5032780,
  _r = 3739355,
  $r = 212886,
  es = 853098,
  ts = 2269064,
  ns = 5651240,
  os = 25643252,
  rs = 13013224,
  ss = 8093408,
  As = 8049584,
  as = 6938536,
  is = 12168584,
  ls = 12319156,
  cs = 7574558,
  ds = 1887474,
  xs = 5294216,
  ys = {
    antispoof: lr,
    blazeface: cr,
    centernet: dr,
    emotion: xr,
    facemesh: yr,
    faceres: fr,
    "handlandmark-lite": mr,
    handtrack: pr,
    iris: ur,
    liveness: hr,
    models: br,
    "movenet-lightning": gr,
    "affectnet-mobilenet": Tr,
    age: vr,
    "blazeface-back": Rr,
    "blazeface-front": Mr,
    "blazepose-detector": Pr,
    "blazepose-full": kr,
    "blazepose-heavy": wr,
    "blazepose-lite": Er,
    efficientpose: zr,
    faceboxes: Sr,
    "facemesh-attention-pinto": jr,
    "facemesh-attention": Nr,
    "facemesh-detection-full": Ir,
    "facemesh-detection-short": Or,
    "faceres-deep": Lr,
    "gear-e1": Cr,
    "gear-e2": Wr,
    gear: Dr,
    "gender-ssrnet-imdb": Fr,
    gender: Br,
    handdetect: Hr,
    "handlandmark-full": Gr,
    "handlandmark-sparse": Vr,
    handskeleton: Zr,
    meet: qr,
    mobileface: Xr,
    mobilefacenet: Ur,
    "movenet-multipose": Yr,
    "movenet-thunder": Kr,
    nanodet: Jr,
    posenet: Qr,
    rvm: _r,
    selfie: $r,
    "anti-spoofing": es,
    "efficientpose-i-lite": ts,
    "efficientpose-ii-lite": ns,
    "efficientpose-iv": os,
    "insightface-efficientnet-b0": rs,
    "insightface-ghostnet-strides1": ss,
    "insightface-ghostnet-strides2": As,
    "insightface-mobilenet-emore": as,
    "insightface-mobilenet-swish": is,
    "nanodet-e": ls,
    "nanodet-g": cs,
    "nanodet-m": ds,
    "nanodet-t": xs,
  };
var D0 = {
    cacheModels: !0,
    cacheSupported: !0,
    verbose: !0,
    debug: !1,
    modelBasePath: "",
  },
  v0 = {};
async function fs(e, t) {
  return D0.debug && b("load model fetch:", e, t), fetch(e, t);
}
function U1(e) {
  (D0.cacheModels = e.cacheModels),
    (D0.verbose = e.debug),
    (D0.modelBasePath = e.modelBasePath);
}
async function L(e) {
  var l, c, d, i, y, x;
  let t = W1(D0.modelBasePath, e || "");
  t.toLowerCase().endsWith(".json") || (t += ".json");
  let n = t.includes("/") ? t.split("/") : t.split("\\"),
    o = n[n.length - 1].replace(".json", ""),
    r = "indexeddb://" + o;
  (v0[o] = {
    name: o,
    loaded: !1,
    sizeFromManifest: 0,
    sizeLoadedWeights: 0,
    sizeDesired: t5[o],
    inCache: !1,
    url: "",
  }),
    (D0.cacheSupported = typeof indexedDB != "undefined");
  let s = {};
  try {
    s = D0.cacheSupported && D0.cacheModels ? await f2.io.listModels() : {};
  } catch (m) {
    D0.cacheSupported = !1;
  }
  (v0[o].inCache =
    D0.cacheSupported && D0.cacheModels && Object.keys(s).includes(r)),
    (v0[o].url = v0[o].inCache ? r : t);
  let A = typeof fetch == "undefined" ? {} : { fetchFunc: (m, f) => fs(m, f) },
    a = new f2.GraphModel(v0[o].url, A);
  v0[o].loaded = !1;
  try {
    a.findIOHandler(), D0.debug && b("model load handler:", a.handler);
  } catch (m) {
    b("error finding model i/o handler:", t, m);
  }
  try {
    let m = (await ((l = a.handler) == null ? void 0 : l.load())) || null;
    (v0[o].sizeFromManifest =
      ((c = m == null ? void 0 : m.weightData) == null
        ? void 0
        : c.byteLength) || 0),
      m
        ? a.loadSync(m)
        : (a = await f2.loadGraphModel(v0[o].inCache ? r : t, A)),
      (v0[o].sizeLoadedWeights =
        ((i = (d = a.artifacts) == null ? void 0 : d.weightData) == null
          ? void 0
          : i.byteLength) ||
        ((x = (y = a.artifacts) == null ? void 0 : y.weightData) == null
          ? void 0
          : x[0].byteLength) ||
        0),
      D0.verbose &&
        b("load:", {
          model: o,
          url: a.modelUrl,
          bytes: v0[o].sizeLoadedWeights,
        }),
      (v0[o].loaded = !0);
  } catch (m) {
    b("error loading model:", t, m);
  }
  if (v0[o].loaded && D0.cacheModels && D0.cacheSupported && !v0[o].inCache)
    try {
      let m = await a.save(r);
      D0.debug && b("model saved:", r, m);
    } catch (m) {
      b("error saving model:", t, m);
    }
  return a;
}
var n5 = "3.3.5";
var S = Z(H());
var u0 = Z(H());
var r0 = {
  name: "humangl",
  priority: 999,
  canvas: null,
  gl: null,
  extensions: [],
  webGLattr: {
    alpha: !1,
    antialias: !1,
    premultipliedAlpha: !1,
    preserveDrawingBuffer: !1,
    depth: !1,
    stencil: !1,
    failIfMajorPerformanceCaveat: !1,
    desynchronized: !0,
  },
};
function us() {
  let e = r0.gl;
  e && (r0.extensions = e.getSupportedExtensions());
}
function Y1(e) {
  var t;
  if (
    e.config.backend === "humangl" &&
    (r0.name in u0.engine().registry &&
      !(
        (t = r0 == null ? void 0 : r0.gl) != null &&
        t.getParameter(r0.gl.VERSION)
      ) &&
      (b("humangl error: backend invalid context"), e.models.reset()),
    !u0.findBackend(r0.name))
  ) {
    try {
      r0.canvas = Ae(100, 100);
    } catch (r) {
      b("humangl error: cannot create canvas:", r);
      return;
    }
    try {
      if (((r0.gl = r0.canvas.getContext("webgl2", r0.webGLattr)), !r0.gl)) {
        b("humangl error: cannot get webgl context");
        return;
      }
      if (!r0.gl.getParameter(r0.gl.VERSION).includes("2.0")) {
        b(
          "backend override: using fallback webgl backend as webgl 2.0 is not detected"
        ),
          (e.config.backend = "webgl");
        return;
      }
      r0.canvas &&
        (r0.canvas.addEventListener("webglcontextlost", (s) => {
          throw (
            (b("humangl error:", s.type),
            b(
              "possible browser memory leak using webgl or conflict with multiple backend registrations"
            ),
            e.emit("error"),
            new Error("backend error: webgl context lost"))
          );
        }),
        r0.canvas.addEventListener("webglcontextrestored", (s) => {
          b("humangl error: context restored:", s);
        }),
        r0.canvas.addEventListener("webglcontextcreationerror", (s) => {
          b("humangl error: context create:", s);
        }));
    } catch (r) {
      b("humangl error: cannot get webgl context:", r);
      return;
    }
    try {
      u0.setWebGLContext(2, r0.gl);
    } catch (r) {
      b("humangl error: cannot set webgl context:", r);
      return;
    }
    try {
      let r = new u0.GPGPUContext(r0.gl);
      u0.registerBackend(
        r0.name,
        () => new u0.MathBackendWebGL(r),
        r0.priority
      );
    } catch (r) {
      b("humangl error: cannot register webgl backend:", r);
      return;
    }
    try {
      u0.getKernelsForBackend("webgl").forEach((s) => {
        let A = { ...s, backendName: r0.name };
        u0.registerKernel(A);
      });
    } catch (r) {
      b("humangl error: cannot update webgl backend registration:", r);
      return;
    }
    try {
      u0.env().flagRegistry.WEBGL_VERSION && u0.env().set("WEBGL_VERSION", 2);
    } catch (r) {
      b("humangl error: cannot set WebGL backend flags:", r);
      return;
    }
    us();
    let n = u0.backend(),
      o = typeof n.gpgpu != "undefined" ? n.getGPGPUContext().gl : null;
    o
      ? e.config.debug &&
        b("humangl backend registered:", {
          webgl: o.getParameter(o.VERSION),
          renderer: o.getParameter(o.RENDERER),
        })
      : b("humangl error: no current gl context:", o, r0.gl);
  }
}
var je = Z(H()),
  C = {
    tf255: 255,
    tf1: 1,
    tf2: 2,
    tf05: 0.5,
    tf127: 127.5,
    rgb: [0.2989, 0.587, 0.114],
  };
function K1() {
  (C.tf255 = je.scalar(255, "float32")),
    (C.tf1 = je.scalar(1, "float32")),
    (C.tf2 = je.scalar(2, "float32")),
    (C.tf05 = je.scalar(0.5, "float32")),
    (C.tf127 = je.scalar(127.5, "float32")),
    (C.rgb = je.tensor1d([0.2989, 0.587, 0.114], "float32"));
}
async function gs() {
  var e;
  return (
    await R.updateBackend(),
    (e = R.tensorflow) != null && e.version
      ? "tensorflow"
      : R.webgpu.supported && R.webgpu.backend
      ? "webgpu"
      : R.webgl.supported && R.webgl.backend
      ? "webgl"
      : R.wasm.supported && R.wasm.backend
      ? "wasm"
      : "cpu"
  );
}
function Ts(e) {
  let t = [];
  if (!R.kernels.includes("mod")) {
    let n = {
      kernelName: "Mod",
      backendName: S.getBackend(),
      kernelFunc: (o) =>
        S.tidy(() =>
          S.sub(o.inputs.a, S.mul(S.div(o.inputs.a, o.inputs.b), o.inputs.b))
        ),
    };
    S.registerKernel(n), R.kernels.push("mod"), t.push("mod");
  }
  if (!R.kernels.includes("floormod")) {
    let n = {
      kernelName: "FloorMod",
      backendName: S.getBackend(),
      kernelFunc: (o) =>
        S.tidy(() =>
          S.add(
            S.mul(S.floorDiv(o.inputs.a, o.inputs.b), o.inputs.b),
            S.mod(o.inputs.a, o.inputs.b)
          )
        ),
    };
    S.registerKernel(n), R.kernels.push("floormod"), t.push("floormod");
  }
  if (!R.kernels.includes("rotatewithoffset") && e.softwareKernels) {
    let n = {
      kernelName: "RotateWithOffset",
      backendName: S.getBackend(),
      kernelFunc: (o) =>
        S.tidy(() => {
          let r = S.getBackend();
          S.setBackend("cpu");
          let s = S.image.rotateWithOffset(
            o.inputs.image,
            o.attrs.radians,
            o.attrs.fillValue,
            o.attrs.center
          );
          return S.setBackend(r), s;
        }),
    };
    S.registerKernel(n),
      R.kernels.push("rotatewithoffset"),
      t.push("rotatewithoffset");
  }
  t.length > 0 && e.debug && b("registered kernels:", t);
}
var J1 = {};
async function O2(e, t = !1) {
  var n, o;
  if (
    ((e.state = "backend"),
    ((n = e.config.backend) == null ? void 0 : n.length) === 0 &&
      (e.config.backend = await gs()),
    t ||
      R.initial ||
      (e.config.backend &&
        e.config.backend.length > 0 &&
        S.getBackend() !== e.config.backend))
  ) {
    let r = v();
    if (e.config.backend && e.config.backend.length > 0) {
      typeof window == "undefined" &&
        typeof WorkerGlobalScope != "undefined" &&
        e.config.debug &&
        e.config.debug &&
        b("running inside web worker"),
        typeof navigator != "undefined" &&
          (o = navigator == null ? void 0 : navigator.userAgent) != null &&
          o.toLowerCase().includes("electron") &&
          e.config.debug &&
          b("running inside electron");
      let s = Object.keys(S.engine().registryFactory);
      if (
        (e.config.backend === "humangl" &&
          !s.includes("humangl") &&
          (Y1(e), (s = Object.keys(S.engine().registryFactory))),
        e.config.debug && b("available backends:", s),
        R.browser &&
          !R.node &&
          e.config.backend === "tensorflow" &&
          s.includes("webgl") &&
          (e.config.debug &&
            b("override: backend set to tensorflow while running in browser"),
          (e.config.backend = "webgl")),
        R.node &&
          !R.browser &&
          (e.config.backend === "webgl" || e.config.backend === "humangl") &&
          s.includes("tensorflow") &&
          (e.config.debug &&
            b(
              `override: backend set to ${e.config.backend} while running in nodejs`
            ),
          (e.config.backend = "tensorflow")),
        R.browser && e.config.backend === "webgpu")
      )
        if (
          typeof navigator == "undefined" ||
          typeof navigator.gpu == "undefined"
        )
          b(
            "override: backend set to webgpu but browser does not support webgpu"
          ),
            (e.config.backend = "webgl");
        else {
          let A = await navigator.gpu.requestAdapter();
          if ((e.config.debug && b("enumerated webgpu adapter:", A), !A))
            b(
              "override: backend set to webgpu but browser reports no available gpu"
            ),
              (e.config.backend = "webgl");
          else {
            let a;
            "requestAdapterInfo" in A
              ? (a = await (A == null ? void 0 : A.requestAdapterInfo()))
              : (a = A.info),
              b("webgpu adapter info:", a);
          }
        }
      if (
        (s.includes(e.config.backend) ||
          (b(`error: backend ${e.config.backend} not found in registry`),
          (e.config.backend = R.node ? "tensorflow" : "webgl"),
          e.config.debug && b(`override: setting backend ${e.config.backend}`)),
        e.config.debug && b("setting backend:", [e.config.backend]),
        e.config.backend === "wasm")
      ) {
        if (
          (S.env().flagRegistry.CANVAS2D_WILL_READ_FREQUENTLY &&
            S.env().set("CANVAS2D_WILL_READ_FREQUENTLY", !0),
          e.config.debug && b("wasm path:", e.config.wasmPath),
          typeof S.setWasmPaths != "undefined")
        )
          S.setWasmPaths(e.config.wasmPath, e.config.wasmPlatformFetch);
        else
          throw new Error(
            "backend error: attempting to use wasm backend but wasm path is not set"
          );
        let A = !1,
          a = !1;
        try {
          (A = await S.env().getAsync("WASM_HAS_MULTITHREAD_SUPPORT")),
            (a = await S.env().getAsync("WASM_HAS_SIMD_SUPPORT")),
            e.config.debug &&
              b(
                `wasm execution: ${a ? "simd" : "no simd"} ${
                  A ? "multithreaded" : "singlethreaded"
                }`
              ),
            e.config.debug &&
              !a &&
              b("warning: wasm simd support is not enabled");
        } catch (l) {
          b("wasm detection failed");
        }
      }
      try {
        await S.setBackend(e.config.backend), await S.ready();
      } catch (A) {
        return b("error: cannot set backend:", e.config.backend, A), !1;
      }
      e.config.debug && (J1 = JSON.parse(JSON.stringify(S.env().flags)));
    }
    if (
      ((S.getBackend() === "humangl" || S.getBackend() === "webgl") &&
        (S.env().flagRegistry.WEBGL_USE_SHAPES_UNIFORMS &&
          S.env().set("WEBGL_USE_SHAPES_UNIFORMS", !0),
        S.env().flagRegistry.WEBGL_EXP_CONV &&
          S.env().set("WEBGL_EXP_CONV", !0),
        e.config.debug &&
          typeof e.config.deallocate != "undefined" &&
          e.config.deallocate &&
          (b("changing webgl: WEBGL_DELETE_TEXTURE_THRESHOLD:", !0),
          S.env().set("WEBGL_DELETE_TEXTURE_THRESHOLD", 0))),
      S.getBackend(),
      e.config.debug)
    ) {
      let s = S.env().flags,
        A = {};
      for (let a of Object.keys(s)) J1[a] !== s[a] && (A[a] = s[a]);
      e.config.debug &&
        Object.keys(A).length > 0 &&
        b("backend:", S.getBackend(), "flags:", A);
    }
    if (e.config.flags && Object.keys(e.config.flags).length > 0) {
      e.config.debug && b("flags:", e.config.flags);
      for (let [s, A] of Object.entries(e.config.flags)) S.env().set(s, A);
    }
    S.enableProdMode(),
      K1(),
      (e.performance.initBackend = Math.trunc(v() - r)),
      (e.config.backend = S.getBackend()),
      await R.updateBackend(),
      Ts(e.config);
  }
  return !0;
}
function _2(e, t) {
  for (let n of e) {
    let o = {
      kernelName: n,
      backendName: t.backend,
      kernelFunc: (r) => {
        var s;
        return (
          t.debug && b("kernelFunc", n, t.backend, r),
          (s = r == null ? void 0 : r.inputs) == null ? void 0 : s.info
        );
      },
    };
    S.registerKernel(o);
  }
  R.kernels = S.getKernelsForBackend(S.getBackend()).map((n) =>
    n.kernelName.toLowerCase()
  );
}
var rt = {};
Se(rt, {
  all: () => $s,
  body: () => et,
  canvas: () => Qs,
  face: () => $2,
  gesture: () => ot,
  hand: () => tt,
  init: () => l5,
  object: () => nt,
  options: () => f0,
  person: () => Js,
  tensor: () => _s,
});
var e3 = Z(H());
var oe = (e) => {
    if (!e) b("draw error: invalid canvas");
    else if (!e.getContext) b("draw error: canvas context not defined");
    else {
      let t = e.getContext("2d", { willReadFrequently: !0 });
      if (!t) b("draw error: cannot get canvas context");
      else return t;
    }
    return null;
  },
  Je = (e) => Math.round((e * 180) / Math.PI),
  Y = (e, t, n) => e.replace(t, typeof n == "number" ? n.toFixed(1) : n),
  Qe = (e, t) => {
    if (!t.useDepth || typeof e == "undefined") return t.color;
    let n = Uint8ClampedArray.from([127 + 2 * e, 127 - 2 * e, 255]);
    return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t.alpha})`;
  };
function re(e, t, n, o, r) {
  let s = t
      .replace(/\[.*\]/g, "")
      .split(
        `
`
      )
      .map((a) => a.trim()),
    A = Math.max(0, n);
  for (let a = s.length - 1; a >= 0; a--) {
    let l = a * r.lineHeight + o;
    r.shadowColor &&
      r.shadowColor !== "" &&
      ((e.fillStyle = r.shadowColor), e.fillText(s[a], A + 5, l + 16)),
      (e.fillStyle = r.labelColor),
      e.fillText(s[a], A + 4, l + 15);
  }
}
function he(e, t, n, o, r) {
  (e.fillStyle = Qe(o, r)),
    e.beginPath(),
    e.arc(t, n, r.pointSize, 0, 2 * Math.PI),
    e.fill();
}
function be(e, t, n, o, r, s) {
  if ((e.beginPath(), (e.lineWidth = s.lineWidth), s.useCurves)) {
    let A = (t + t + o) / 2,
      a = (n + n + r) / 2;
    e.ellipse(A, a, o / 2, r / 2, 0, 0, 2 * Math.PI);
  } else
    e.moveTo(t + s.roundRect, n),
      e.lineTo(t + o - s.roundRect, n),
      e.quadraticCurveTo(t + o, n, t + o, n + s.roundRect),
      e.lineTo(t + o, n + r - s.roundRect),
      e.quadraticCurveTo(t + o, n + r, t + o - s.roundRect, n + r),
      e.lineTo(t + s.roundRect, n + r),
      e.quadraticCurveTo(t, n + r, t, n + r - s.roundRect),
      e.lineTo(t, n + s.roundRect),
      e.quadraticCurveTo(t, n, t + s.roundRect, n),
      e.closePath();
  e.stroke();
}
function o5(e, t, n) {
  if (!(t.length < 2)) {
    e.beginPath(), e.moveTo(t[0][0], t[0][1]);
    for (let o of t)
      (e.strokeStyle = Qe(o[2] || 0, n)),
        e.lineTo(Math.trunc(o[0]), Math.trunc(o[1]));
    e.stroke(), n.fillPolygons && (e.closePath(), e.fill());
  }
}
function _1(e, t, n) {
  if (!(t.length < 2)) {
    if (((e.lineWidth = n.lineWidth), !n.useCurves || t.length <= 2)) {
      o5(e, t, n);
      return;
    }
    e.moveTo(t[0][0], t[0][1]);
    for (let o = 0; o < t.length - 2; o++) {
      let r = (t[o][0] + t[o + 1][0]) / 2,
        s = (t[o][1] + t[o + 1][1]) / 2;
      e.quadraticCurveTo(t[o][0], t[o][1], r, s);
    }
    e.quadraticCurveTo(
      t[t.length - 2][0],
      t[t.length - 2][1],
      t[t.length - 1][0],
      t[t.length - 1][1]
    ),
      e.stroke(),
      n.fillPolygons && (e.closePath(), e.fill());
  }
}
function r5(e, t, n, o = 5) {
  let r, s, A;
  e.beginPath(),
    e.moveTo(t[0], t[1]),
    e.lineTo(n[0], n[1]),
    (r = Math.atan2(n[1] - t[1], n[0] - t[0])),
    (s = o * Math.cos(r) + n[0]),
    (A = o * Math.sin(r) + n[1]),
    e.moveTo(s, A),
    (r += (1 / 3) * (2 * Math.PI)),
    (s = o * Math.cos(r) + n[0]),
    (A = o * Math.sin(r) + n[1]),
    e.lineTo(s, A),
    (r += (1 / 3) * (2 * Math.PI)),
    (s = o * Math.cos(r) + n[0]),
    (A = o * Math.sin(r) + n[1]),
    e.lineTo(s, A),
    e.closePath(),
    e.stroke(),
    e.fill();
}
var f0 = {
  color: "rgba(173, 216, 230, 0.6)",
  labelColor: "rgba(173, 216, 230, 1)",
  shadowColor: "black",
  alpha: 0.5,
  font: 'small-caps 16px "Segoe UI"',
  lineHeight: 18,
  lineWidth: 4,
  pointSize: 2,
  roundRect: 8,
  drawPoints: !1,
  drawLabels: !0,
  drawBoxes: !0,
  drawAttention: !0,
  drawGestures: !0,
  drawPolygons: !0,
  drawGaze: !0,
  fillPolygons: !1,
  useDepth: !0,
  useCurves: !1,
  faceLabels: "",
  bodyLabels: "",
  bodyPartLabels: "",
  objectLabels: "",
  handLabels: "",
  fingerLabels: "",
  gestureLabels: "",
};
var ae = {
    silhouette: [
      10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379,
      378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127,
      162, 21, 54, 103, 67, 109,
    ],
    lipsUpperOuter: [185, 40, 39, 37, 0, 267, 269, 270, 409],
    lipsLowerOuter: [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291],
    lipsUpperInner: [191, 80, 81, 82, 13, 312, 311, 310, 415],
    lipsLowerInner: [78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308],
    lipsLowerSemiOuter: [76, 77, 90, 180, 85, 16, 315, 404, 320, 307, 306],
    lipsUpperSemiOuter: [184, 74, 73, 72, 11, 302, 303, 304, 408],
    lipsLowerSemiInner: [62, 96, 89, 179, 86, 15, 316, 403, 319, 325, 292],
    lipsUpperSemiInner: [183, 42, 41, 38, 12, 268, 271, 272, 407],
    rightEyeUpper0: [246, 161, 160, 159, 158, 157, 173],
    rightEyeLower0: [33, 7, 163, 144, 145, 153, 154, 155, 133],
    rightEyeUpper1: [247, 30, 29, 27, 28, 56, 190],
    rightEyeLower1: [130, 25, 110, 24, 23, 22, 26, 112, 243],
    rightEyeUpper2: [113, 225, 224, 223, 222, 221, 189],
    rightEyeLower2: [226, 31, 228, 229, 230, 231, 232, 233, 244],
    rightEyeLower3: [143, 111, 117, 118, 119, 120, 121, 128, 245],
    rightEyebrowUpper: [156, 70, 63, 105, 66, 107, 55, 193],
    rightEyebrowLower: [35, 124, 46, 53, 52, 65],
    rightEyeIris: [473, 474, 475, 476, 477],
    leftEyeUpper0: [466, 388, 387, 386, 385, 384, 398],
    leftEyeLower0: [263, 249, 390, 373, 374, 380, 381, 382, 362],
    leftEyeUpper1: [467, 260, 259, 257, 258, 286, 414],
    leftEyeLower1: [359, 255, 339, 254, 253, 252, 256, 341, 463],
    leftEyeUpper2: [342, 445, 444, 443, 442, 441, 413],
    leftEyeLower2: [446, 261, 448, 449, 450, 451, 452, 453, 464],
    leftEyeLower3: [372, 340, 346, 347, 348, 349, 350, 357, 465],
    leftEyebrowUpper: [383, 300, 293, 334, 296, 336, 285, 417],
    leftEyebrowLower: [265, 353, 276, 283, 282, 295],
    leftEyeIris: [468, 469, 470, 471, 472],
    midwayBetweenEyes: [168],
    noseTip: [1],
    noseBottom: [2],
    noseRightCorner: [98],
    noseLeftCorner: [327],
    rightCheek: [205],
    leftCheek: [425],
  },
  s5 = { count: 468, mouth: 13, symmetryLine: [13, ae.midwayBetweenEyes[0]] },
  _e = {
    leftEye: 0,
    rightEye: 1,
    nose: 2,
    mouth: 3,
    leftEar: 4,
    rightEar: 5,
    symmetryLine: [3, 2],
  },
  A5 = [
    { key: "EyeUpper0", indices: [9, 10, 11, 12, 13, 14, 15] },
    { key: "EyeUpper1", indices: [25, 26, 27, 28, 29, 30, 31] },
    { key: "EyeUpper2", indices: [41, 42, 43, 44, 45, 46, 47] },
    { key: "EyeLower0", indices: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    { key: "EyeLower1", indices: [16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { key: "EyeLower2", indices: [32, 33, 34, 35, 36, 37, 38, 39, 40] },
    { key: "EyeLower3", indices: [54, 55, 56, 57, 58, 59, 60, 61, 62] },
    { key: "EyebrowUpper", indices: [63, 64, 65, 66, 67, 68, 69, 70] },
    { key: "EyebrowLower", indices: [48, 49, 50, 51, 52, 53] },
  ],
  L2 = [
    [0.499976992607117, 0.652534008026123],
    [0.500025987625122, 0.547487020492554],
    [0.499974012374878, 0.602371990680695],
    [0.482113003730774, 0.471979022026062],
    [0.500150978565216, 0.527155995368958],
    [0.499909996986389, 0.498252987861633],
    [0.499523013830185, 0.40106201171875],
    [0.289712011814117, 0.380764007568359],
    [0.499954998493195, 0.312398016452789],
    [0.499987006187439, 0.269918978214264],
    [0.500023007392883, 0.107050001621246],
    [0.500023007392883, 0.666234016418457],
    [0.5000159740448, 0.679224014282227],
    [0.500023007392883, 0.692348003387451],
    [0.499976992607117, 0.695277988910675],
    [0.499976992607117, 0.70593398809433],
    [0.499976992607117, 0.719385027885437],
    [0.499976992607117, 0.737019002437592],
    [0.499967992305756, 0.781370997428894],
    [0.499816000461578, 0.562981009483337],
    [0.473773002624512, 0.573909997940063],
    [0.104906998574734, 0.254140973091125],
    [0.365929991006851, 0.409575998783112],
    [0.338757991790771, 0.41302502155304],
    [0.311120003461838, 0.409460008144379],
    [0.274657994508743, 0.389131009578705],
    [0.393361985683441, 0.403706014156342],
    [0.345234006643295, 0.344011008739471],
    [0.370094001293182, 0.346076011657715],
    [0.319321990013123, 0.347265005111694],
    [0.297903001308441, 0.353591024875641],
    [0.24779200553894, 0.410809993743896],
    [0.396889001131058, 0.842755019664764],
    [0.280097991228104, 0.375599980354309],
    [0.106310002505779, 0.399955987930298],
    [0.2099249958992, 0.391353011131287],
    [0.355807989835739, 0.534406006336212],
    [0.471751004457474, 0.65040397644043],
    [0.474155008792877, 0.680191993713379],
    [0.439785003662109, 0.657229006290436],
    [0.414617002010345, 0.66654098033905],
    [0.450374007225037, 0.680860996246338],
    [0.428770989179611, 0.682690978050232],
    [0.374971002340317, 0.727805018424988],
    [0.486716985702515, 0.547628998756409],
    [0.485300987958908, 0.527395009994507],
    [0.257764995098114, 0.314490020275116],
    [0.401223003864288, 0.455172002315521],
    [0.429818987846375, 0.548614978790283],
    [0.421351999044418, 0.533740997314453],
    [0.276895999908447, 0.532056987285614],
    [0.483370006084442, 0.499586999416351],
    [0.33721199631691, 0.282882988452911],
    [0.296391993761063, 0.293242990970612],
    [0.169294998049736, 0.193813979625702],
    [0.447580009698868, 0.302609980106354],
    [0.392390012741089, 0.353887975215912],
    [0.354490011930466, 0.696784019470215],
    [0.067304998636246, 0.730105042457581],
    [0.442739009857178, 0.572826027870178],
    [0.457098007202148, 0.584792017936707],
    [0.381974011659622, 0.694710969924927],
    [0.392388999462128, 0.694203019142151],
    [0.277076005935669, 0.271932005882263],
    [0.422551989555359, 0.563233017921448],
    [0.385919004678726, 0.281364023685455],
    [0.383103013038635, 0.255840003490448],
    [0.331431001424789, 0.119714021682739],
    [0.229923993349075, 0.232002973556519],
    [0.364500999450684, 0.189113974571228],
    [0.229622006416321, 0.299540996551514],
    [0.173287004232407, 0.278747975826263],
    [0.472878992557526, 0.666198015213013],
    [0.446828007698059, 0.668527007102966],
    [0.422762006521225, 0.673889994621277],
    [0.445307999849319, 0.580065965652466],
    [0.388103008270264, 0.693961024284363],
    [0.403039008378983, 0.706539988517761],
    [0.403629004955292, 0.693953037261963],
    [0.460041999816895, 0.557139039039612],
    [0.431158006191254, 0.692366003990173],
    [0.452181994915009, 0.692366003990173],
    [0.475387006998062, 0.692366003990173],
    [0.465828001499176, 0.779190003871918],
    [0.472328990697861, 0.736225962638855],
    [0.473087012767792, 0.717857003211975],
    [0.473122000694275, 0.704625964164734],
    [0.473033010959625, 0.695277988910675],
    [0.427942007780075, 0.695277988910675],
    [0.426479011774063, 0.703539967536926],
    [0.423162013292313, 0.711845993995667],
    [0.4183090031147, 0.720062971115112],
    [0.390094995498657, 0.639572978019714],
    [0.013953999616206, 0.560034036636353],
    [0.499913990497589, 0.58014702796936],
    [0.413199990987778, 0.69539999961853],
    [0.409626007080078, 0.701822996139526],
    [0.468080013990402, 0.601534962654114],
    [0.422728985548019, 0.585985004901886],
    [0.463079988956451, 0.593783974647522],
    [0.37211999297142, 0.47341400384903],
    [0.334562003612518, 0.496073007583618],
    [0.411671012639999, 0.546965003013611],
    [0.242175996303558, 0.14767599105835],
    [0.290776997804642, 0.201445996761322],
    [0.327338010072708, 0.256527006626129],
    [0.399509996175766, 0.748921036720276],
    [0.441727995872498, 0.261676013469696],
    [0.429764986038208, 0.187834024429321],
    [0.412198007106781, 0.108901023864746],
    [0.288955003023148, 0.398952007293701],
    [0.218936994671822, 0.435410976409912],
    [0.41278201341629, 0.398970007896423],
    [0.257135003805161, 0.355440020561218],
    [0.427684992551804, 0.437960982322693],
    [0.448339998722076, 0.536936044692993],
    [0.178560003638268, 0.45755398273468],
    [0.247308000922203, 0.457193970680237],
    [0.286267012357712, 0.467674970626831],
    [0.332827985286713, 0.460712015628815],
    [0.368755996227264, 0.447206974029541],
    [0.398963987827301, 0.432654976844788],
    [0.476410001516342, 0.405806005001068],
    [0.189241006970406, 0.523923993110657],
    [0.228962004184723, 0.348950982093811],
    [0.490725994110107, 0.562400996685028],
    [0.404670000076294, 0.485132992267609],
    [0.019469000399113, 0.401564002037048],
    [0.426243007183075, 0.420431017875671],
    [0.396993011236191, 0.548797011375427],
    [0.266469985246658, 0.376977026462555],
    [0.439121007919312, 0.51895797252655],
    [0.032313998788595, 0.644356966018677],
    [0.419054001569748, 0.387154996395111],
    [0.462783008813858, 0.505746960639954],
    [0.238978996872902, 0.779744982719421],
    [0.198220998048782, 0.831938028335571],
    [0.107550002634525, 0.540755033493042],
    [0.183610007166862, 0.740257024765015],
    [0.134409993886948, 0.333683013916016],
    [0.385764002799988, 0.883153975009918],
    [0.490967005491257, 0.579378008842468],
    [0.382384985685349, 0.508572995662689],
    [0.174399003386497, 0.397670984268188],
    [0.318785011768341, 0.39623498916626],
    [0.343364000320435, 0.400596976280212],
    [0.396100014448166, 0.710216999053955],
    [0.187885001301765, 0.588537991046906],
    [0.430987000465393, 0.944064974784851],
    [0.318993002176285, 0.898285031318665],
    [0.266247987747192, 0.869701027870178],
    [0.500023007392883, 0.190576016902924],
    [0.499976992607117, 0.954452991485596],
    [0.366169989109039, 0.398822009563446],
    [0.393207013607025, 0.39553701877594],
    [0.410373002290726, 0.391080021858215],
    [0.194993004202843, 0.342101991176605],
    [0.388664990663528, 0.362284004688263],
    [0.365961998701096, 0.355970978736877],
    [0.343364000320435, 0.355356991291046],
    [0.318785011768341, 0.35834002494812],
    [0.301414996385574, 0.363156020641327],
    [0.058132998645306, 0.319076001644135],
    [0.301414996385574, 0.387449026107788],
    [0.499987989664078, 0.618434011936188],
    [0.415838003158569, 0.624195992946625],
    [0.445681989192963, 0.566076993942261],
    [0.465844005346298, 0.620640993118286],
    [0.49992299079895, 0.351523995399475],
    [0.288718998432159, 0.819945991039276],
    [0.335278987884521, 0.852819979190826],
    [0.440512001514435, 0.902418971061707],
    [0.128294005990028, 0.791940987110138],
    [0.408771991729736, 0.373893976211548],
    [0.455606997013092, 0.451801002025604],
    [0.499877005815506, 0.908990025520325],
    [0.375436991453171, 0.924192011356354],
    [0.11421000212431, 0.615022003650665],
    [0.448662012815475, 0.695277988910675],
    [0.4480200111866, 0.704632043838501],
    [0.447111994028091, 0.715808033943176],
    [0.444831997156143, 0.730794012546539],
    [0.430011987686157, 0.766808986663818],
    [0.406787008047104, 0.685672998428345],
    [0.400738000869751, 0.681069016456604],
    [0.392399996519089, 0.677703022956848],
    [0.367855995893478, 0.663918972015381],
    [0.247923001646996, 0.601333022117615],
    [0.452769994735718, 0.420849978923798],
    [0.43639200925827, 0.359887003898621],
    [0.416164010763168, 0.368713974952698],
    [0.413385987281799, 0.692366003990173],
    [0.228018000721931, 0.683571994304657],
    [0.468268007040024, 0.352671027183533],
    [0.411361992359161, 0.804327011108398],
    [0.499989002943039, 0.469825029373169],
    [0.479153990745544, 0.442654013633728],
    [0.499974012374878, 0.439637005329132],
    [0.432112008333206, 0.493588984012604],
    [0.499886006116867, 0.866917014122009],
    [0.49991300702095, 0.821729004383087],
    [0.456548988819122, 0.819200992584229],
    [0.344549000263214, 0.745438992977142],
    [0.37890899181366, 0.574010014533997],
    [0.374292999505997, 0.780184984207153],
    [0.319687992334366, 0.570737957954407],
    [0.357154995203018, 0.604269981384277],
    [0.295284003019333, 0.621580958366394],
    [0.447750002145767, 0.862477004528046],
    [0.410986006259918, 0.508723020553589],
    [0.31395098567009, 0.775308012962341],
    [0.354128003120422, 0.812552988529205],
    [0.324548006057739, 0.703992962837219],
    [0.189096003770828, 0.646299958229065],
    [0.279776990413666, 0.71465802192688],
    [0.1338230073452, 0.682700991630554],
    [0.336768001317978, 0.644733011722565],
    [0.429883986711502, 0.466521978378296],
    [0.455527991056442, 0.548622965812683],
    [0.437114000320435, 0.558896005153656],
    [0.467287987470627, 0.529924988746643],
    [0.414712011814117, 0.335219979286194],
    [0.37704598903656, 0.322777986526489],
    [0.344107985496521, 0.320150971412659],
    [0.312875986099243, 0.32233202457428],
    [0.283526003360748, 0.333190023899078],
    [0.241245999932289, 0.382785975933075],
    [0.102986000478268, 0.468762993812561],
    [0.267612010240555, 0.424560010433197],
    [0.297879010438919, 0.433175981044769],
    [0.333433985710144, 0.433878004550934],
    [0.366427004337311, 0.426115989685059],
    [0.396012008190155, 0.416696012020111],
    [0.420121014118195, 0.41022801399231],
    [0.007561000064015, 0.480777025222778],
    [0.432949006557465, 0.569517970085144],
    [0.458638995885849, 0.479089021682739],
    [0.473466008901596, 0.545744001865387],
    [0.476087987422943, 0.563830018043518],
    [0.468472003936768, 0.555056989192963],
    [0.433990985155106, 0.582361996173859],
    [0.483518004417419, 0.562983989715576],
    [0.482482999563217, 0.57784903049469],
    [0.42645001411438, 0.389798998832703],
    [0.438998997211456, 0.39649498462677],
    [0.450067013502121, 0.400434017181396],
    [0.289712011814117, 0.368252992630005],
    [0.276670008897781, 0.363372981548309],
    [0.517862021923065, 0.471948027610779],
    [0.710287988185883, 0.380764007568359],
    [0.526226997375488, 0.573909997940063],
    [0.895093023777008, 0.254140973091125],
    [0.634069979190826, 0.409575998783112],
    [0.661242008209229, 0.41302502155304],
    [0.688880026340485, 0.409460008144379],
    [0.725341975688934, 0.389131009578705],
    [0.606630027294159, 0.40370500087738],
    [0.654766023159027, 0.344011008739471],
    [0.629905998706818, 0.346076011657715],
    [0.680678009986877, 0.347265005111694],
    [0.702096998691559, 0.353591024875641],
    [0.75221198797226, 0.410804986953735],
    [0.602918028831482, 0.842862963676453],
    [0.719901978969574, 0.375599980354309],
    [0.893692970275879, 0.399959981441498],
    [0.790081977844238, 0.391354024410248],
    [0.643998026847839, 0.534487962722778],
    [0.528249025344849, 0.65040397644043],
    [0.525849997997284, 0.680191040039062],
    [0.560214996337891, 0.657229006290436],
    [0.585384011268616, 0.66654098033905],
    [0.549625992774963, 0.680860996246338],
    [0.57122802734375, 0.682691991329193],
    [0.624852001667023, 0.72809898853302],
    [0.513050019741058, 0.547281980514526],
    [0.51509702205658, 0.527251958847046],
    [0.742246985435486, 0.314507007598877],
    [0.598631024360657, 0.454979002475739],
    [0.570338010787964, 0.548575043678284],
    [0.578631997108459, 0.533622980117798],
    [0.723087012767792, 0.532054007053375],
    [0.516445994377136, 0.499638974666595],
    [0.662801027297974, 0.282917976379395],
    [0.70362401008606, 0.293271005153656],
    [0.830704987049103, 0.193813979625702],
    [0.552385985851288, 0.302568018436432],
    [0.607609987258911, 0.353887975215912],
    [0.645429015159607, 0.696707010269165],
    [0.932694971561432, 0.730105042457581],
    [0.557260990142822, 0.572826027870178],
    [0.542901992797852, 0.584792017936707],
    [0.6180260181427, 0.694710969924927],
    [0.607590973377228, 0.694203019142151],
    [0.722943007946014, 0.271963000297546],
    [0.577413976192474, 0.563166975975037],
    [0.614082992076874, 0.281386971473694],
    [0.616907000541687, 0.255886018276215],
    [0.668509006500244, 0.119913995265961],
    [0.770092010498047, 0.232020974159241],
    [0.635536015033722, 0.189248979091644],
    [0.77039098739624, 0.299556016921997],
    [0.826722025871277, 0.278755009174347],
    [0.527121007442474, 0.666198015213013],
    [0.553171992301941, 0.668527007102966],
    [0.577238023281097, 0.673889994621277],
    [0.554691970348358, 0.580065965652466],
    [0.611896991729736, 0.693961024284363],
    [0.59696102142334, 0.706539988517761],
    [0.596370995044708, 0.693953037261963],
    [0.539958000183105, 0.557139039039612],
    [0.568841993808746, 0.692366003990173],
    [0.547818005084991, 0.692366003990173],
    [0.52461302280426, 0.692366003990173],
    [0.534089982509613, 0.779141008853912],
    [0.527670979499817, 0.736225962638855],
    [0.526912987232208, 0.717857003211975],
    [0.526877999305725, 0.704625964164734],
    [0.526966989040375, 0.695277988910675],
    [0.572058022022247, 0.695277988910675],
    [0.573521018028259, 0.703539967536926],
    [0.57683801651001, 0.711845993995667],
    [0.581691026687622, 0.720062971115112],
    [0.609944999217987, 0.639909982681274],
    [0.986046016216278, 0.560034036636353],
    [0.5867999792099, 0.69539999961853],
    [0.590372025966644, 0.701822996139526],
    [0.531915009021759, 0.601536989212036],
    [0.577268004417419, 0.585934996604919],
    [0.536915004253387, 0.593786001205444],
    [0.627542972564697, 0.473352015018463],
    [0.665585994720459, 0.495950996875763],
    [0.588353991508484, 0.546862006187439],
    [0.757824003696442, 0.14767599105835],
    [0.709249973297119, 0.201507985591888],
    [0.672684013843536, 0.256581008434296],
    [0.600408971309662, 0.74900496006012],
    [0.55826598405838, 0.261672019958496],
    [0.570303976535797, 0.187870979309082],
    [0.588165998458862, 0.109044015407562],
    [0.711045026779175, 0.398952007293701],
    [0.781069993972778, 0.435405015945435],
    [0.587247014045715, 0.398931980133057],
    [0.742869973182678, 0.355445981025696],
    [0.572156012058258, 0.437651991844177],
    [0.55186802148819, 0.536570012569427],
    [0.821442008018494, 0.457556009292603],
    [0.752701997756958, 0.457181990146637],
    [0.71375697851181, 0.467626988887787],
    [0.66711300611496, 0.460672974586487],
    [0.631101012229919, 0.447153985500336],
    [0.6008620262146, 0.432473003864288],
    [0.523481011390686, 0.405627012252808],
    [0.810747981071472, 0.523926019668579],
    [0.771045982837677, 0.348959028720856],
    [0.509127020835876, 0.562718033790588],
    [0.595292985439301, 0.485023975372314],
    [0.980530977249146, 0.401564002037048],
    [0.573499977588654, 0.420000016689301],
    [0.602994978427887, 0.548687994480133],
    [0.733529984951019, 0.376977026462555],
    [0.560611009597778, 0.519016981124878],
    [0.967685997486115, 0.644356966018677],
    [0.580985009670258, 0.387160003185272],
    [0.537728011608124, 0.505385041236877],
    [0.760966002941132, 0.779752969741821],
    [0.801778972148895, 0.831938028335571],
    [0.892440974712372, 0.54076099395752],
    [0.816350996494293, 0.740260004997253],
    [0.865594983100891, 0.333687007427216],
    [0.614073991775513, 0.883246004581451],
    [0.508952975273132, 0.579437971115112],
    [0.617941975593567, 0.508316040039062],
    [0.825608015060425, 0.397674977779388],
    [0.681214988231659, 0.39623498916626],
    [0.656635999679565, 0.400596976280212],
    [0.603900015354156, 0.710216999053955],
    [0.81208598613739, 0.588539004325867],
    [0.56801301240921, 0.944564998149872],
    [0.681007981300354, 0.898285031318665],
    [0.733752012252808, 0.869701027870178],
    [0.633830010890961, 0.398822009563446],
    [0.606792986392975, 0.39553701877594],
    [0.589659988880157, 0.391062021255493],
    [0.805015981197357, 0.342108011245728],
    [0.611334979534149, 0.362284004688263],
    [0.634037971496582, 0.355970978736877],
    [0.656635999679565, 0.355356991291046],
    [0.681214988231659, 0.35834002494812],
    [0.698584973812103, 0.363156020641327],
    [0.941866993904114, 0.319076001644135],
    [0.698584973812103, 0.387449026107788],
    [0.584177017211914, 0.624107003211975],
    [0.554318010807037, 0.566076993942261],
    [0.534153997898102, 0.62064003944397],
    [0.711217999458313, 0.819975018501282],
    [0.664629995822906, 0.852871000766754],
    [0.559099972248077, 0.902631998062134],
    [0.871706008911133, 0.791940987110138],
    [0.591234028339386, 0.373893976211548],
    [0.544341027736664, 0.451583981513977],
    [0.624562978744507, 0.924192011356354],
    [0.88577002286911, 0.615028977394104],
    [0.551338016986847, 0.695277988910675],
    [0.551980018615723, 0.704632043838501],
    [0.552887976169586, 0.715808033943176],
    [0.555167973041534, 0.730794012546539],
    [0.569944024085999, 0.767035007476807],
    [0.593203008174896, 0.685675978660583],
    [0.599261999130249, 0.681069016456604],
    [0.607599973678589, 0.677703022956848],
    [0.631937980651855, 0.663500010967255],
    [0.752032995223999, 0.601315021514893],
    [0.547226011753082, 0.420395016670227],
    [0.563543975353241, 0.359827995300293],
    [0.583841025829315, 0.368713974952698],
    [0.586614012718201, 0.692366003990173],
    [0.771915018558502, 0.683578014373779],
    [0.531597018241882, 0.352482974529266],
    [0.588370978832245, 0.804440975189209],
    [0.52079701423645, 0.442565023899078],
    [0.567984998226166, 0.493479013442993],
    [0.543282985687256, 0.819254994392395],
    [0.655317008495331, 0.745514988899231],
    [0.621008992195129, 0.574018001556396],
    [0.625559985637665, 0.78031200170517],
    [0.680198013782501, 0.570719003677368],
    [0.64276397228241, 0.604337990283966],
    [0.704662978649139, 0.621529996395111],
    [0.552012026309967, 0.862591981887817],
    [0.589071989059448, 0.508637011051178],
    [0.685944974422455, 0.775357007980347],
    [0.645735025405884, 0.812640011310577],
    [0.675342977046967, 0.703978002071381],
    [0.810858011245728, 0.646304965019226],
    [0.72012197971344, 0.714666962623596],
    [0.866151988506317, 0.682704985141754],
    [0.663187026977539, 0.644596993923187],
    [0.570082008838654, 0.466325998306274],
    [0.544561982154846, 0.548375964164734],
    [0.562758982181549, 0.558784961700439],
    [0.531987011432648, 0.530140042304993],
    [0.585271000862122, 0.335177004337311],
    [0.622952997684479, 0.32277899980545],
    [0.655896008014679, 0.320163011550903],
    [0.687132000923157, 0.322345972061157],
    [0.716481983661652, 0.333200991153717],
    [0.758756995201111, 0.382786989212036],
    [0.897013008594513, 0.468769013881683],
    [0.732392013072968, 0.424547016620636],
    [0.70211398601532, 0.433162987232208],
    [0.66652500629425, 0.433866024017334],
    [0.633504986763, 0.426087975502014],
    [0.603875994682312, 0.416586995124817],
    [0.579657971858978, 0.409945011138916],
    [0.992439985275269, 0.480777025222778],
    [0.567192018032074, 0.569419980049133],
    [0.54136598110199, 0.478899002075195],
    [0.526564002037048, 0.546118021011353],
    [0.523913025856018, 0.563830018043518],
    [0.531529009342194, 0.555056989192963],
    [0.566035985946655, 0.582329034805298],
    [0.51631098985672, 0.563053965568542],
    [0.5174720287323, 0.577877044677734],
    [0.573594987392426, 0.389806985855103],
    [0.560697972774506, 0.395331978797913],
    [0.549755990505219, 0.399751007556915],
    [0.710287988185883, 0.368252992630005],
    [0.723330020904541, 0.363372981548309],
  ],
  $e = [
    127, 34, 139, 11, 0, 37, 232, 231, 120, 72, 37, 39, 128, 121, 47, 232, 121,
    128, 104, 69, 67, 175, 171, 148, 157, 154, 155, 118, 50, 101, 73, 39, 40, 9,
    151, 108, 48, 115, 131, 194, 204, 211, 74, 40, 185, 80, 42, 183, 40, 92,
    186, 230, 229, 118, 202, 212, 214, 83, 18, 17, 76, 61, 146, 160, 29, 30, 56,
    157, 173, 106, 204, 194, 135, 214, 192, 203, 165, 98, 21, 71, 68, 51, 45, 4,
    144, 24, 23, 77, 146, 91, 205, 50, 187, 201, 200, 18, 91, 106, 182, 90, 91,
    181, 85, 84, 17, 206, 203, 36, 148, 171, 140, 92, 40, 39, 193, 189, 244,
    159, 158, 28, 247, 246, 161, 236, 3, 196, 54, 68, 104, 193, 168, 8, 117,
    228, 31, 189, 193, 55, 98, 97, 99, 126, 47, 100, 166, 79, 218, 155, 154, 26,
    209, 49, 131, 135, 136, 150, 47, 126, 217, 223, 52, 53, 45, 51, 134, 211,
    170, 140, 67, 69, 108, 43, 106, 91, 230, 119, 120, 226, 130, 247, 63, 53,
    52, 238, 20, 242, 46, 70, 156, 78, 62, 96, 46, 53, 63, 143, 34, 227, 173,
    155, 133, 123, 117, 111, 44, 125, 19, 236, 134, 51, 216, 206, 205, 154, 153,
    22, 39, 37, 167, 200, 201, 208, 36, 142, 100, 57, 212, 202, 20, 60, 99, 28,
    158, 157, 35, 226, 113, 160, 159, 27, 204, 202, 210, 113, 225, 46, 43, 202,
    204, 62, 76, 77, 137, 123, 116, 41, 38, 72, 203, 129, 142, 64, 98, 240, 49,
    102, 64, 41, 73, 74, 212, 216, 207, 42, 74, 184, 169, 170, 211, 170, 149,
    176, 105, 66, 69, 122, 6, 168, 123, 147, 187, 96, 77, 90, 65, 55, 107, 89,
    90, 180, 101, 100, 120, 63, 105, 104, 93, 137, 227, 15, 86, 85, 129, 102,
    49, 14, 87, 86, 55, 8, 9, 100, 47, 121, 145, 23, 22, 88, 89, 179, 6, 122,
    196, 88, 95, 96, 138, 172, 136, 215, 58, 172, 115, 48, 219, 42, 80, 81, 195,
    3, 51, 43, 146, 61, 171, 175, 199, 81, 82, 38, 53, 46, 225, 144, 163, 110,
    246, 33, 7, 52, 65, 66, 229, 228, 117, 34, 127, 234, 107, 108, 69, 109, 108,
    151, 48, 64, 235, 62, 78, 191, 129, 209, 126, 111, 35, 143, 163, 161, 246,
    117, 123, 50, 222, 65, 52, 19, 125, 141, 221, 55, 65, 3, 195, 197, 25, 7,
    33, 220, 237, 44, 70, 71, 139, 122, 193, 245, 247, 130, 33, 71, 21, 162,
    153, 158, 159, 170, 169, 150, 188, 174, 196, 216, 186, 92, 144, 160, 161, 2,
    97, 167, 141, 125, 241, 164, 167, 37, 72, 38, 12, 145, 159, 160, 38, 82, 13,
    63, 68, 71, 226, 35, 111, 158, 153, 154, 101, 50, 205, 206, 92, 165, 209,
    198, 217, 165, 167, 97, 220, 115, 218, 133, 112, 243, 239, 238, 241, 214,
    135, 169, 190, 173, 133, 171, 208, 32, 125, 44, 237, 86, 87, 178, 85, 86,
    179, 84, 85, 180, 83, 84, 181, 201, 83, 182, 137, 93, 132, 76, 62, 183, 61,
    76, 184, 57, 61, 185, 212, 57, 186, 214, 207, 187, 34, 143, 156, 79, 239,
    237, 123, 137, 177, 44, 1, 4, 201, 194, 32, 64, 102, 129, 213, 215, 138, 59,
    166, 219, 242, 99, 97, 2, 94, 141, 75, 59, 235, 24, 110, 228, 25, 130, 226,
    23, 24, 229, 22, 23, 230, 26, 22, 231, 112, 26, 232, 189, 190, 243, 221, 56,
    190, 28, 56, 221, 27, 28, 222, 29, 27, 223, 30, 29, 224, 247, 30, 225, 238,
    79, 20, 166, 59, 75, 60, 75, 240, 147, 177, 215, 20, 79, 166, 187, 147, 213,
    112, 233, 244, 233, 128, 245, 128, 114, 188, 114, 217, 174, 131, 115, 220,
    217, 198, 236, 198, 131, 134, 177, 132, 58, 143, 35, 124, 110, 163, 7, 228,
    110, 25, 356, 389, 368, 11, 302, 267, 452, 350, 349, 302, 303, 269, 357,
    343, 277, 452, 453, 357, 333, 332, 297, 175, 152, 377, 384, 398, 382, 347,
    348, 330, 303, 304, 270, 9, 336, 337, 278, 279, 360, 418, 262, 431, 304,
    408, 409, 310, 415, 407, 270, 409, 410, 450, 348, 347, 422, 430, 434, 313,
    314, 17, 306, 307, 375, 387, 388, 260, 286, 414, 398, 335, 406, 418, 364,
    367, 416, 423, 358, 327, 251, 284, 298, 281, 5, 4, 373, 374, 253, 307, 320,
    321, 425, 427, 411, 421, 313, 18, 321, 405, 406, 320, 404, 405, 315, 16, 17,
    426, 425, 266, 377, 400, 369, 322, 391, 269, 417, 465, 464, 386, 257, 258,
    466, 260, 388, 456, 399, 419, 284, 332, 333, 417, 285, 8, 346, 340, 261,
    413, 441, 285, 327, 460, 328, 355, 371, 329, 392, 439, 438, 382, 341, 256,
    429, 420, 360, 364, 394, 379, 277, 343, 437, 443, 444, 283, 275, 440, 363,
    431, 262, 369, 297, 338, 337, 273, 375, 321, 450, 451, 349, 446, 342, 467,
    293, 334, 282, 458, 461, 462, 276, 353, 383, 308, 324, 325, 276, 300, 293,
    372, 345, 447, 382, 398, 362, 352, 345, 340, 274, 1, 19, 456, 248, 281, 436,
    427, 425, 381, 256, 252, 269, 391, 393, 200, 199, 428, 266, 330, 329, 287,
    273, 422, 250, 462, 328, 258, 286, 384, 265, 353, 342, 387, 259, 257, 424,
    431, 430, 342, 353, 276, 273, 335, 424, 292, 325, 307, 366, 447, 345, 271,
    303, 302, 423, 266, 371, 294, 455, 460, 279, 278, 294, 271, 272, 304, 432,
    434, 427, 272, 407, 408, 394, 430, 431, 395, 369, 400, 334, 333, 299, 351,
    417, 168, 352, 280, 411, 325, 319, 320, 295, 296, 336, 319, 403, 404, 330,
    348, 349, 293, 298, 333, 323, 454, 447, 15, 16, 315, 358, 429, 279, 14, 15,
    316, 285, 336, 9, 329, 349, 350, 374, 380, 252, 318, 402, 403, 6, 197, 419,
    318, 319, 325, 367, 364, 365, 435, 367, 397, 344, 438, 439, 272, 271, 311,
    195, 5, 281, 273, 287, 291, 396, 428, 199, 311, 271, 268, 283, 444, 445,
    373, 254, 339, 263, 466, 249, 282, 334, 296, 449, 347, 346, 264, 447, 454,
    336, 296, 299, 338, 10, 151, 278, 439, 455, 292, 407, 415, 358, 371, 355,
    340, 345, 372, 390, 249, 466, 346, 347, 280, 442, 443, 282, 19, 94, 370,
    441, 442, 295, 248, 419, 197, 263, 255, 359, 440, 275, 274, 300, 383, 368,
    351, 412, 465, 263, 467, 466, 301, 368, 389, 380, 374, 386, 395, 378, 379,
    412, 351, 419, 436, 426, 322, 373, 390, 388, 2, 164, 393, 370, 462, 461,
    164, 0, 267, 302, 11, 12, 374, 373, 387, 268, 12, 13, 293, 300, 301, 446,
    261, 340, 385, 384, 381, 330, 266, 425, 426, 423, 391, 429, 355, 437, 391,
    327, 326, 440, 457, 438, 341, 382, 362, 459, 457, 461, 434, 430, 394, 414,
    463, 362, 396, 369, 262, 354, 461, 457, 316, 403, 402, 315, 404, 403, 314,
    405, 404, 313, 406, 405, 421, 418, 406, 366, 401, 361, 306, 408, 407, 291,
    409, 408, 287, 410, 409, 432, 436, 410, 434, 416, 411, 264, 368, 383, 309,
    438, 457, 352, 376, 401, 274, 275, 4, 421, 428, 262, 294, 327, 358, 433,
    416, 367, 289, 455, 439, 462, 370, 326, 2, 326, 370, 305, 460, 455, 254,
    449, 448, 255, 261, 446, 253, 450, 449, 252, 451, 450, 256, 452, 451, 341,
    453, 452, 413, 464, 463, 441, 413, 414, 258, 442, 441, 257, 443, 442, 259,
    444, 443, 260, 445, 444, 467, 342, 445, 459, 458, 250, 289, 392, 290, 290,
    328, 460, 376, 433, 435, 250, 290, 392, 411, 416, 433, 341, 463, 464, 453,
    464, 465, 357, 465, 412, 343, 412, 399, 360, 363, 440, 437, 399, 456, 420,
    456, 363, 401, 435, 288, 372, 383, 353, 339, 255, 249, 448, 261, 255, 133,
    243, 190, 133, 155, 112, 33, 246, 247, 33, 130, 25, 398, 384, 286, 362, 398,
    414, 362, 463, 341, 263, 359, 467, 263, 249, 255, 466, 467, 260, 75, 60,
    166, 238, 239, 79, 162, 127, 139, 72, 11, 37, 121, 232, 120, 73, 72, 39,
    114, 128, 47, 233, 232, 128, 103, 104, 67, 152, 175, 148, 173, 157, 155,
    119, 118, 101, 74, 73, 40, 107, 9, 108, 49, 48, 131, 32, 194, 211, 184, 74,
    185, 191, 80, 183, 185, 40, 186, 119, 230, 118, 210, 202, 214, 84, 83, 17,
    77, 76, 146, 161, 160, 30, 190, 56, 173, 182, 106, 194, 138, 135, 192, 129,
    203, 98, 54, 21, 68, 5, 51, 4, 145, 144, 23, 90, 77, 91, 207, 205, 187, 83,
    201, 18, 181, 91, 182, 180, 90, 181, 16, 85, 17, 205, 206, 36, 176, 148,
    140, 165, 92, 39, 245, 193, 244, 27, 159, 28, 30, 247, 161, 174, 236, 196,
    103, 54, 104, 55, 193, 8, 111, 117, 31, 221, 189, 55, 240, 98, 99, 142, 126,
    100, 219, 166, 218, 112, 155, 26, 198, 209, 131, 169, 135, 150, 114, 47,
    217, 224, 223, 53, 220, 45, 134, 32, 211, 140, 109, 67, 108, 146, 43, 91,
    231, 230, 120, 113, 226, 247, 105, 63, 52, 241, 238, 242, 124, 46, 156, 95,
    78, 96, 70, 46, 63, 116, 143, 227, 116, 123, 111, 1, 44, 19, 3, 236, 51,
    207, 216, 205, 26, 154, 22, 165, 39, 167, 199, 200, 208, 101, 36, 100, 43,
    57, 202, 242, 20, 99, 56, 28, 157, 124, 35, 113, 29, 160, 27, 211, 204, 210,
    124, 113, 46, 106, 43, 204, 96, 62, 77, 227, 137, 116, 73, 41, 72, 36, 203,
    142, 235, 64, 240, 48, 49, 64, 42, 41, 74, 214, 212, 207, 183, 42, 184, 210,
    169, 211, 140, 170, 176, 104, 105, 69, 193, 122, 168, 50, 123, 187, 89, 96,
    90, 66, 65, 107, 179, 89, 180, 119, 101, 120, 68, 63, 104, 234, 93, 227, 16,
    15, 85, 209, 129, 49, 15, 14, 86, 107, 55, 9, 120, 100, 121, 153, 145, 22,
    178, 88, 179, 197, 6, 196, 89, 88, 96, 135, 138, 136, 138, 215, 172, 218,
    115, 219, 41, 42, 81, 5, 195, 51, 57, 43, 61, 208, 171, 199, 41, 81, 38,
    224, 53, 225, 24, 144, 110, 105, 52, 66, 118, 229, 117, 227, 34, 234, 66,
    107, 69, 10, 109, 151, 219, 48, 235, 183, 62, 191, 142, 129, 126, 116, 111,
    143, 7, 163, 246, 118, 117, 50, 223, 222, 52, 94, 19, 141, 222, 221, 65,
    196, 3, 197, 45, 220, 44, 156, 70, 139, 188, 122, 245, 139, 71, 162, 145,
    153, 159, 149, 170, 150, 122, 188, 196, 206, 216, 92, 163, 144, 161, 164, 2,
    167, 242, 141, 241, 0, 164, 37, 11, 72, 12, 144, 145, 160, 12, 38, 13, 70,
    63, 71, 31, 226, 111, 157, 158, 154, 36, 101, 205, 203, 206, 165, 126, 209,
    217, 98, 165, 97, 237, 220, 218, 237, 239, 241, 210, 214, 169, 140, 171, 32,
    241, 125, 237, 179, 86, 178, 180, 85, 179, 181, 84, 180, 182, 83, 181, 194,
    201, 182, 177, 137, 132, 184, 76, 183, 185, 61, 184, 186, 57, 185, 216, 212,
    186, 192, 214, 187, 139, 34, 156, 218, 79, 237, 147, 123, 177, 45, 44, 4,
    208, 201, 32, 98, 64, 129, 192, 213, 138, 235, 59, 219, 141, 242, 97, 97, 2,
    141, 240, 75, 235, 229, 24, 228, 31, 25, 226, 230, 23, 229, 231, 22, 230,
    232, 26, 231, 233, 112, 232, 244, 189, 243, 189, 221, 190, 222, 28, 221,
    223, 27, 222, 224, 29, 223, 225, 30, 224, 113, 247, 225, 99, 60, 240, 213,
    147, 215, 60, 20, 166, 192, 187, 213, 243, 112, 244, 244, 233, 245, 245,
    128, 188, 188, 114, 174, 134, 131, 220, 174, 217, 236, 236, 198, 134, 215,
    177, 58, 156, 143, 124, 25, 110, 7, 31, 228, 25, 264, 356, 368, 0, 11, 267,
    451, 452, 349, 267, 302, 269, 350, 357, 277, 350, 452, 357, 299, 333, 297,
    396, 175, 377, 381, 384, 382, 280, 347, 330, 269, 303, 270, 151, 9, 337,
    344, 278, 360, 424, 418, 431, 270, 304, 409, 272, 310, 407, 322, 270, 410,
    449, 450, 347, 432, 422, 434, 18, 313, 17, 291, 306, 375, 259, 387, 260,
    424, 335, 418, 434, 364, 416, 391, 423, 327, 301, 251, 298, 275, 281, 4,
    254, 373, 253, 375, 307, 321, 280, 425, 411, 200, 421, 18, 335, 321, 406,
    321, 320, 405, 314, 315, 17, 423, 426, 266, 396, 377, 369, 270, 322, 269,
    413, 417, 464, 385, 386, 258, 248, 456, 419, 298, 284, 333, 168, 417, 8,
    448, 346, 261, 417, 413, 285, 326, 327, 328, 277, 355, 329, 309, 392, 438,
    381, 382, 256, 279, 429, 360, 365, 364, 379, 355, 277, 437, 282, 443, 283,
    281, 275, 363, 395, 431, 369, 299, 297, 337, 335, 273, 321, 348, 450, 349,
    359, 446, 467, 283, 293, 282, 250, 458, 462, 300, 276, 383, 292, 308, 325,
    283, 276, 293, 264, 372, 447, 346, 352, 340, 354, 274, 19, 363, 456, 281,
    426, 436, 425, 380, 381, 252, 267, 269, 393, 421, 200, 428, 371, 266, 329,
    432, 287, 422, 290, 250, 328, 385, 258, 384, 446, 265, 342, 386, 387, 257,
    422, 424, 430, 445, 342, 276, 422, 273, 424, 306, 292, 307, 352, 366, 345,
    268, 271, 302, 358, 423, 371, 327, 294, 460, 331, 279, 294, 303, 271, 304,
    436, 432, 427, 304, 272, 408, 395, 394, 431, 378, 395, 400, 296, 334, 299,
    6, 351, 168, 376, 352, 411, 307, 325, 320, 285, 295, 336, 320, 319, 404,
    329, 330, 349, 334, 293, 333, 366, 323, 447, 316, 15, 315, 331, 358, 279,
    317, 14, 316, 8, 285, 9, 277, 329, 350, 253, 374, 252, 319, 318, 403, 351,
    6, 419, 324, 318, 325, 397, 367, 365, 288, 435, 397, 278, 344, 439, 310,
    272, 311, 248, 195, 281, 375, 273, 291, 175, 396, 199, 312, 311, 268, 276,
    283, 445, 390, 373, 339, 295, 282, 296, 448, 449, 346, 356, 264, 454, 337,
    336, 299, 337, 338, 151, 294, 278, 455, 308, 292, 415, 429, 358, 355, 265,
    340, 372, 388, 390, 466, 352, 346, 280, 295, 442, 282, 354, 19, 370, 285,
    441, 295, 195, 248, 197, 457, 440, 274, 301, 300, 368, 417, 351, 465, 251,
    301, 389, 385, 380, 386, 394, 395, 379, 399, 412, 419, 410, 436, 322, 387,
    373, 388, 326, 2, 393, 354, 370, 461, 393, 164, 267, 268, 302, 12, 386, 374,
    387, 312, 268, 13, 298, 293, 301, 265, 446, 340, 380, 385, 381, 280, 330,
    425, 322, 426, 391, 420, 429, 437, 393, 391, 326, 344, 440, 438, 458, 459,
    461, 364, 434, 394, 428, 396, 262, 274, 354, 457, 317, 316, 402, 316, 315,
    403, 315, 314, 404, 314, 313, 405, 313, 421, 406, 323, 366, 361, 292, 306,
    407, 306, 291, 408, 291, 287, 409, 287, 432, 410, 427, 434, 411, 372, 264,
    383, 459, 309, 457, 366, 352, 401, 1, 274, 4, 418, 421, 262, 331, 294, 358,
    435, 433, 367, 392, 289, 439, 328, 462, 326, 94, 2, 370, 289, 305, 455, 339,
    254, 448, 359, 255, 446, 254, 253, 449, 253, 252, 450, 252, 256, 451, 256,
    341, 452, 414, 413, 463, 286, 441, 414, 286, 258, 441, 258, 257, 442, 257,
    259, 443, 259, 260, 444, 260, 467, 445, 309, 459, 250, 305, 289, 290, 305,
    290, 460, 401, 376, 435, 309, 250, 392, 376, 411, 433, 453, 341, 464, 357,
    453, 465, 343, 357, 412, 437, 343, 399, 344, 360, 440, 420, 437, 456, 360,
    420, 363, 361, 401, 288, 265, 372, 353, 390, 339, 249, 339, 448, 255,
  ];
var vs = [
    127, 234, 132, 58, 172, 150, 149, 148, 152, 377, 378, 379, 397, 288, 361,
    454, 356, 70, 63, 105, 66, 107, 336, 296, 334, 293, 300, 168, 6, 195, 4, 98,
    97, 2, 326, 327, 33, 160, 158, 133, 153, 144, 362, 385, 387, 263, 373, 380,
    57, 40, 37, 0, 267, 270, 287, 321, 314, 17, 84, 91, 78, 81, 13, 311, 308,
    402, 14, 178,
  ],
  Rs = [
    33, 133, 362, 263, 1, 62, 308, 159, 145, 386, 374, 6, 102, 331, 2, 13, 14,
    70, 105, 107, 336, 334, 300, 54, 10, 284, 50, 280, 234, 454, 58, 288, 152,
  ],
  Ms = [33, 133, 362, 263, 1, 78, 308],
  Za = vs.map((e) => L2[e]),
  qa = Rs.map((e) => L2[e]),
  Xa = Ms.map((e) => L2[e]);
function Ne(e) {
  let t = e.map((n) => n[0]);
  return t.push(e[e.length - 1][1]), t;
}
var Ps = [
    [61, 146],
    [146, 91],
    [91, 181],
    [181, 84],
    [84, 17],
    [17, 314],
    [314, 405],
    [405, 321],
    [321, 375],
    [375, 291],
    [61, 185],
    [185, 40],
    [40, 39],
    [39, 37],
    [37, 0],
    [0, 267],
    [267, 269],
    [269, 270],
    [270, 409],
    [409, 291],
    [78, 95],
    [95, 88],
    [88, 178],
    [178, 87],
    [87, 14],
    [14, 317],
    [317, 402],
    [402, 318],
    [318, 324],
    [324, 308],
    [78, 191],
    [191, 80],
    [80, 81],
    [81, 82],
    [82, 13],
    [13, 312],
    [312, 311],
    [311, 310],
    [310, 415],
    [415, 308],
  ],
  ks = [
    [263, 249],
    [249, 390],
    [390, 373],
    [373, 374],
    [374, 380],
    [380, 381],
    [381, 382],
    [382, 362],
    [263, 466],
    [466, 388],
    [388, 387],
    [387, 386],
    [386, 385],
    [385, 384],
    [384, 398],
    [398, 362],
  ],
  ws = [
    [276, 283],
    [283, 282],
    [282, 295],
    [295, 285],
    [300, 293],
    [293, 334],
    [334, 296],
    [296, 336],
  ],
  Es = [
    [474, 475],
    [475, 476],
    [476, 477],
    [477, 474],
  ],
  zs = [
    [33, 7],
    [7, 163],
    [163, 144],
    [144, 145],
    [145, 153],
    [153, 154],
    [154, 155],
    [155, 133],
    [33, 246],
    [246, 161],
    [161, 160],
    [160, 159],
    [159, 158],
    [158, 157],
    [157, 173],
    [173, 133],
  ],
  Ss = [
    [46, 53],
    [53, 52],
    [52, 65],
    [65, 55],
    [70, 63],
    [63, 105],
    [105, 66],
    [66, 107],
  ],
  js = [
    [469, 470],
    [470, 471],
    [471, 472],
    [472, 469],
  ],
  Ns = [
    [10, 338],
    [338, 297],
    [297, 332],
    [332, 284],
    [284, 251],
    [251, 389],
    [389, 356],
    [356, 454],
    [454, 323],
    [323, 361],
    [361, 288],
    [288, 397],
    [397, 365],
    [365, 379],
    [379, 378],
    [378, 400],
    [400, 377],
    [377, 152],
    [152, 148],
    [148, 176],
    [176, 149],
    [149, 150],
    [150, 136],
    [136, 172],
    [172, 58],
    [58, 132],
    [132, 93],
    [93, 234],
    [234, 127],
    [127, 162],
    [162, 21],
    [21, 54],
    [54, 103],
    [103, 67],
    [67, 109],
    [109, 10],
  ],
  Ua = {
    lips: Ne(Ps),
    leftEye: Ne(ks),
    leftEyebrow: Ne(ws),
    leftIris: Ne(Es),
    rightEye: Ne(zs),
    rightEyebrow: Ne(Ss),
    rightIris: Ne(js),
    faceOval: Ne(Ns),
  };
var Is = [
    [61, 146],
    [146, 91],
    [91, 181],
    [181, 84],
    [84, 17],
    [17, 314],
    [314, 405],
    [405, 321],
    [321, 375],
    [375, 291],
    [61, 185],
    [185, 40],
    [40, 39],
    [39, 37],
    [37, 0],
    [0, 267],
    [267, 269],
    [269, 270],
    [270, 409],
    [409, 291],
    [78, 95],
    [95, 88],
    [88, 178],
    [178, 87],
    [87, 14],
    [14, 317],
    [317, 402],
    [402, 318],
    [318, 324],
    [324, 308],
    [78, 191],
    [191, 80],
    [80, 81],
    [81, 82],
    [82, 13],
    [13, 312],
    [312, 311],
    [311, 310],
    [310, 415],
    [415, 308],
  ],
  Os = [
    [263, 249],
    [249, 390],
    [390, 373],
    [373, 374],
    [374, 380],
    [380, 381],
    [381, 382],
    [382, 362],
    [263, 466],
    [466, 388],
    [388, 387],
    [387, 386],
    [386, 385],
    [385, 384],
    [384, 398],
    [398, 362],
  ],
  Ls = [
    [276, 283],
    [283, 282],
    [282, 295],
    [295, 285],
    [300, 293],
    [293, 334],
    [334, 296],
    [296, 336],
  ],
  Cs = [
    [474, 475],
    [475, 476],
    [476, 477],
    [477, 474],
  ],
  Ws = [
    [33, 7],
    [7, 163],
    [163, 144],
    [144, 145],
    [145, 153],
    [153, 154],
    [154, 155],
    [155, 133],
    [33, 246],
    [246, 161],
    [161, 160],
    [160, 159],
    [159, 158],
    [158, 157],
    [157, 173],
    [173, 133],
  ],
  Ds = [
    [46, 53],
    [53, 52],
    [52, 65],
    [65, 55],
    [70, 63],
    [63, 105],
    [105, 66],
    [66, 107],
  ],
  Fs = [
    [469, 470],
    [470, 471],
    [471, 472],
    [472, 469],
  ],
  Bs = [
    [10, 338],
    [338, 297],
    [297, 332],
    [332, 284],
    [284, 251],
    [251, 389],
    [389, 356],
    [356, 454],
    [454, 323],
    [323, 361],
    [361, 288],
    [288, 397],
    [397, 365],
    [365, 379],
    [379, 378],
    [378, 400],
    [400, 377],
    [377, 152],
    [152, 148],
    [148, 176],
    [176, 149],
    [149, 150],
    [150, 136],
    [136, 172],
    [172, 58],
    [58, 132],
    [132, 93],
    [93, 234],
    [234, 127],
    [127, 162],
    [162, 21],
    [21, 54],
    [54, 103],
    [103, 67],
    [67, 109],
    [109, 10],
  ];
function Ie(e) {
  let t = e.map((n) => n[0]);
  return t.push(e[e.length - 1][1]), t;
}
var Hs = {
    lips: Ie(Is),
    leftEye: Ie(Os),
    leftEyebrow: Ie(Ls),
    leftIris: Ie(Cs),
    rightEye: Ie(Ws),
    rightEyebrow: Ie(Ds),
    rightIris: Ie(Fs),
    faceOval: Ie(Bs),
  },
  Gs = Object.entries(Hs)
    .map(([e, t]) => t.map((n) => [n, e]))
    .flat(),
  Ya = new Map(Gs),
  C2 = [
    61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 185, 40, 39, 37, 0, 267,
    269, 270, 409, 78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, 191, 80,
    81, 82, 13, 312, 311, 310, 415, 76, 77, 90, 180, 85, 16, 315, 404, 320, 307,
    306, 184, 74, 73, 72, 11, 302, 303, 304, 408, 62, 96, 89, 179, 86, 15, 316,
    403, 319, 325, 292, 183, 42, 41, 38, 12, 268, 271, 272, 407,
  ],
  e2 = [
    33, 7, 163, 144, 145, 153, 154, 155, 133, 246, 161, 160, 159, 158, 157, 173,
    130, 25, 110, 24, 23, 22, 26, 112, 243, 247, 30, 29, 27, 28, 56, 190, 226,
    31, 228, 229, 230, 231, 232, 233, 244, 113, 225, 224, 223, 222, 221, 189,
    35, 124, 46, 53, 52, 65, 143, 111, 117, 118, 119, 120, 121, 128, 245, 156,
    70, 63, 105, 66, 107, 55, 193,
  ],
  t2 = [
    263, 249, 390, 373, 374, 380, 381, 382, 362, 466, 388, 387, 386, 385, 384,
    398, 359, 255, 339, 254, 253, 252, 256, 341, 463, 467, 260, 259, 257, 258,
    286, 414, 446, 261, 448, 449, 450, 451, 452, 453, 464, 342, 445, 444, 443,
    442, 441, 413, 265, 353, 276, 283, 282, 295, 372, 340, 346, 347, 348, 349,
    350, 357, 465, 383, 300, 293, 334, 296, 336, 285, 417,
  ];
var X;
function Vs(e, t) {
  var o, r, s, A, a, l, c, d, i;
  if (!X.drawLabels || ((o = X.faceLabels) == null ? void 0 : o.length) === 0)
    return;
  let n = X.faceLabels.slice();
  if (
    ((n = Y(n, "[id]", e.id.toFixed(0))),
    e.score && (n = Y(n, "[score]", 100 * e.score)),
    e.gender && (n = Y(n, "[gender]", e.gender)),
    e.genderScore && (n = Y(n, "[genderScore]", 100 * e.genderScore)),
    e.age && (n = Y(n, "[age]", e.age)),
    e.distance && (n = Y(n, "[distance]", 100 * e.distance)),
    e.real && (n = Y(n, "[real]", 100 * e.real)),
    e.live && (n = Y(n, "[live]", 100 * e.live)),
    e.emotion && e.emotion.length > 0)
  ) {
    let y = e.emotion.map((x) => `${Math.trunc(100 * x.score)}% ${x.emotion}`);
    y.length > 3 && (y.length = 3), (n = Y(n, "[emotions]", y.join(" ")));
  }
  (s = (r = e.rotation) == null ? void 0 : r.angle) != null &&
    s.roll &&
    (n = Y(n, "[roll]", Je(e.rotation.angle.roll))),
    (a = (A = e.rotation) == null ? void 0 : A.angle) != null &&
      a.yaw &&
      (n = Y(n, "[yaw]", Je(e.rotation.angle.yaw))),
    (c = (l = e.rotation) == null ? void 0 : l.angle) != null &&
      c.pitch &&
      (n = Y(n, "[pitch]", Je(e.rotation.angle.pitch))),
    (i = (d = e.rotation) == null ? void 0 : d.gaze) != null &&
      i.bearing &&
      (n = Y(n, "[gaze]", Je(e.rotation.gaze.bearing))),
    re(t, n, e.box[0], e.box[1], X);
}
function Zs(e, t) {
  var n, o, r, s;
  if (
    (n = e.annotations) != null &&
    n.leftEyeIris &&
    (o = e.annotations) != null &&
    o.leftEyeIris[0]
  ) {
    (t.strokeStyle = X.useDepth ? "rgba(255, 200, 255, 0.3)" : X.color),
      t.beginPath();
    let A =
        Math.abs(
          e.annotations.leftEyeIris[3][0] - e.annotations.leftEyeIris[1][0]
        ) / 2,
      a =
        Math.abs(
          e.annotations.leftEyeIris[4][1] - e.annotations.leftEyeIris[2][1]
        ) / 2;
    t.ellipse(
      e.annotations.leftEyeIris[0][0],
      e.annotations.leftEyeIris[0][1],
      A,
      a,
      0,
      0,
      2 * Math.PI
    ),
      t.stroke(),
      X.fillPolygons &&
        ((t.fillStyle = X.useDepth ? "rgba(255, 255, 200, 0.3)" : X.color),
        t.fill());
  }
  if (
    (r = e.annotations) != null &&
    r.rightEyeIris &&
    (s = e.annotations) != null &&
    s.rightEyeIris[0]
  ) {
    (t.strokeStyle = X.useDepth ? "rgba(255, 200, 255, 0.3)" : X.color),
      t.beginPath();
    let A =
        Math.abs(
          e.annotations.rightEyeIris[3][0] - e.annotations.rightEyeIris[1][0]
        ) / 2,
      a =
        Math.abs(
          e.annotations.rightEyeIris[4][1] - e.annotations.rightEyeIris[2][1]
        ) / 2;
    t.ellipse(
      e.annotations.rightEyeIris[0][0],
      e.annotations.rightEyeIris[0][1],
      A,
      a,
      0,
      0,
      2 * Math.PI
    ),
      t.stroke(),
      X.fillPolygons &&
        ((t.fillStyle = X.useDepth ? "rgba(255, 255, 200, 0.3)" : X.color),
        t.fill());
  }
}
function qs(e, t) {
  var n;
  if (
    X.drawGaze &&
    (n = e.rotation) != null &&
    n.angle &&
    typeof Path2D != "undefined"
  ) {
    t.strokeStyle = "pink";
    let o =
        e.box[0] + e.box[2] / 2 - (e.box[3] * Je(e.rotation.angle.yaw)) / 90,
      r =
        e.box[1] + e.box[3] / 2 + (e.box[2] * Je(e.rotation.angle.pitch)) / 90,
      s = new Path2D(`
      M ${e.box[0] + e.box[2] / 2} ${e.box[1]}
      C
        ${o} ${e.box[1]},
        ${o} ${e.box[1] + e.box[3]},
        ${e.box[0] + e.box[2] / 2} ${e.box[1] + e.box[3]}
    `),
      A = new Path2D(`
      M ${e.box[0]} ${e.box[1] + e.box[3] / 2}
      C 
        ${e.box[0]} ${r},
        ${e.box[0] + e.box[2]} ${r},
        ${e.box[0] + e.box[2]} ${e.box[1] + e.box[3] / 2}
    `);
    t.stroke(A), t.stroke(s);
  }
}
function Xs(e, t) {
  var n;
  if (
    X.drawGaze &&
    (n = e.rotation) != null &&
    n.gaze.strength &&
    e.rotation.gaze.bearing &&
    e.annotations.leftEyeIris &&
    e.annotations.rightEyeIris &&
    e.annotations.leftEyeIris[0] &&
    e.annotations.rightEyeIris[0]
  ) {
    (t.strokeStyle = "pink"), (t.fillStyle = "pink");
    let o = [
      e.annotations.leftEyeIris[0][0] +
        Math.sin(e.rotation.gaze.bearing) * e.rotation.gaze.strength * e.box[3],
      e.annotations.leftEyeIris[0][1] +
        Math.cos(e.rotation.gaze.bearing) * e.rotation.gaze.strength * e.box[2],
    ];
    r5(
      t,
      [e.annotations.leftEyeIris[0][0], e.annotations.leftEyeIris[0][1]],
      [o[0], o[1]],
      4
    );
    let r = [
      e.annotations.rightEyeIris[0][0] +
        Math.sin(e.rotation.gaze.bearing) * e.rotation.gaze.strength * e.box[3],
      e.annotations.rightEyeIris[0][1] +
        Math.cos(e.rotation.gaze.bearing) * e.rotation.gaze.strength * e.box[2],
    ];
    r5(
      t,
      [e.annotations.rightEyeIris[0][0], e.annotations.rightEyeIris[0][1]],
      [r[0], r[1]],
      4
    );
  }
}
function Us(e, t) {
  if (X.drawPolygons && e.mesh.length >= 468) {
    t.lineWidth = 1;
    for (let n = 0; n < $e.length / 3; n++) {
      let o = [$e[n * 3 + 0], $e[n * 3 + 1], $e[n * 3 + 2]].map(
        (r) => e.mesh[r]
      );
      o5(t, o, X);
    }
    Zs(e, t);
  }
}
function Ys(e, t) {
  if (X.drawPoints)
    if ((e == null ? void 0 : e.mesh.length) >= 468)
      for (let n = 0; n < e.mesh.length; n++)
        he(t, e.mesh[n][0], e.mesh[n][1], e.mesh[n][2], X),
          X.drawAttention &&
            (C2.includes(n) &&
              he(t, e.mesh[n][0], e.mesh[n][1], e.mesh[n][2] + 127, X),
            e2.includes(n) &&
              he(t, e.mesh[n][0], e.mesh[n][1], e.mesh[n][2] - 127, X),
            t2.includes(n) &&
              he(t, e.mesh[n][0], e.mesh[n][1], e.mesh[n][2] - 127, X));
    else
      for (let [n, o] of Object.entries(
        (e == null ? void 0 : e.annotations) || {}
      )) {
        if (!(o != null && o[0])) continue;
        let r = o[0];
        he(t, r[0], r[1], 0, X), X.drawLabels && re(t, n, r[0], r[1], X);
      }
}
function Ks(e, t) {
  X.drawBoxes && be(t, e.box[0], e.box[1], e.box[2], e.box[3], X);
}
function $2(e, t, n) {
  if (((X = i0(f0, n)), !t || !e)) return;
  let o = oe(e);
  if (o) {
    (o.font = X.font), (o.strokeStyle = X.color), (o.fillStyle = X.color);
    for (let r of t)
      Ks(r, o),
        Vs(r, o),
        r.mesh && r.mesh.length > 0 && (Ys(r, o), Us(r, o), qs(r, o), Xs(r, o));
  }
}
function et(e, t, n) {
  var s, A;
  let o = i0(f0, n);
  if (!t || !e) return;
  let r = oe(e);
  if (r) {
    r.lineJoin = "round";
    for (let a = 0; a < t.length; a++) {
      if (
        ((r.strokeStyle = o.color),
        (r.fillStyle = o.color),
        (r.lineWidth = o.lineWidth),
        (r.font = o.font),
        o.drawBoxes &&
          t[a].box &&
          t[a].box.length === 4 &&
          (be(r, t[a].box[0], t[a].box[1], t[a].box[2], t[a].box[3], o),
          o.drawLabels && ((s = o.bodyLabels) == null ? void 0 : s.length) > 0))
      ) {
        let l = o.bodyLabels.slice();
        (l = Y(l, "[id]", t[a].id.toFixed(0))),
          (l = Y(l, "[score]", 100 * t[a].score)),
          re(r, l, t[a].box[0], t[a].box[1], o);
      }
      if (o.drawPoints && t[a].keypoints)
        for (let l = 0; l < t[a].keypoints.length; l++)
          !t[a].keypoints[l].score ||
            t[a].keypoints[l].score === 0 ||
            ((r.fillStyle = Qe(t[a].keypoints[l].position[2], o)),
            he(
              r,
              t[a].keypoints[l].position[0],
              t[a].keypoints[l].position[1],
              0,
              o
            ));
      if (
        o.drawLabels &&
        ((A = o.bodyPartLabels) == null ? void 0 : A.length) > 0 &&
        t[a].keypoints
      ) {
        r.font = o.font;
        for (let l of t[a].keypoints) {
          if (!l.score || l.score === 0) continue;
          let c = o.bodyPartLabels.slice();
          (c = Y(c, "[label]", l.part)),
            (c = Y(c, "[score]", 100 * l.score)),
            re(r, c, l.position[0], l.position[1], o);
        }
      }
      if (o.drawPolygons && t[a].keypoints && t[a].annotations)
        for (let l of Object.values(t[a].annotations))
          for (let c of l) _1(r, c, o);
    }
  }
}
function tt(e, t, n) {
  var s, A;
  let o = i0(f0, n);
  if (!t || !e) return;
  let r = oe(e);
  if (r) {
    (r.lineJoin = "round"), (r.font = o.font);
    for (let a of t) {
      if (o.drawBoxes) {
        if (
          ((r.strokeStyle = o.color),
          (r.fillStyle = o.color),
          be(r, a.box[0], a.box[1], a.box[2], a.box[3], o),
          o.drawLabels && ((s = o.handLabels) == null ? void 0 : s.length) > 0)
        ) {
          let l = o.handLabels.slice();
          (l = Y(l, "[id]", a.id.toFixed(0))),
            (l = Y(l, "[label]", a.label)),
            (l = Y(l, "[score]", 100 * a.score)),
            re(r, l, a.box[0], a.box[1], o);
        }
        r.stroke();
      }
      if (o.drawPoints && a.keypoints && a.keypoints.length > 0)
        for (let l of a.keypoints)
          (r.fillStyle = Qe(l[2], o)), he(r, l[0], l[1], 0, o);
      if (
        o.drawLabels &&
        a.annotations &&
        ((A = o.fingerLabels) == null ? void 0 : A.length) > 0
      )
        for (let [l, c] of Object.entries(a.annotations)) {
          let d = o.fingerLabels.slice();
          (d = Y(d, "[label]", l)),
            re(r, d, c[c.length - 1][0], c[c.length - 1][1], o);
        }
      if (o.drawPolygons && a.annotations) {
        let l = (c) => {
          if (!(!c || c.length === 0 || !c[0]))
            for (let d = 0; d < c.length; d++) {
              r.beginPath();
              let i = c[d][2] || 0;
              (r.strokeStyle = Qe(d * i, o)),
                r.moveTo(c[d > 0 ? d - 1 : 0][0], c[d > 0 ? d - 1 : 0][1]),
                r.lineTo(c[d][0], c[d][1]),
                r.stroke();
            }
        };
        (r.lineWidth = o.lineWidth),
          l(a.annotations.index),
          l(a.annotations.middle),
          l(a.annotations.ring),
          l(a.annotations.pinky),
          l(a.annotations.thumb);
      }
    }
  }
}
function nt(e, t, n) {
  var s;
  let o = i0(f0, n);
  if (!t || !e) return;
  let r = oe(e);
  if (r) {
    (r.lineJoin = "round"), (r.font = o.font);
    for (let A of t)
      if (o.drawBoxes) {
        if (
          ((r.strokeStyle = o.color),
          (r.fillStyle = o.color),
          be(r, A.box[0], A.box[1], A.box[2], A.box[3], o),
          o.drawLabels &&
            ((s = o.objectLabels) == null ? void 0 : s.length) > 0)
        ) {
          let a = o.objectLabels.slice();
          (a = Y(a, "[id]", A.id.toFixed(0))),
            (a = Y(a, "[label]", A.label)),
            (a = Y(a, "[score]", 100 * A.score)),
            re(r, a, A.box[0], A.box[1], o);
        }
        r.stroke();
      }
  }
}
function ot(e, t, n) {
  var r;
  let o = i0(f0, n);
  if (
    !(!t || !e) &&
    o.drawGestures &&
    ((r = o.gestureLabels) == null ? void 0 : r.length) > 0
  ) {
    let s = oe(e);
    if (!s) return;
    (s.font = o.font), (s.fillStyle = o.color);
    let A = 1;
    for (let a = 0; a < t.length; a++) {
      let [l, c] = Object.entries(t[a]);
      if (c.length > 1 && c[1].length > 0) {
        let d = l[1] > 0 ? `#${l[1]}` : "",
          i = o.gestureLabels.slice();
        (i = Y(i, "[where]", l[0])),
          (i = Y(i, "[who]", d)),
          (i = Y(i, "[what]", c[1])),
          re(s, i, 8, 2 + A * o.lineHeight, o),
          (A += 1);
      }
    }
  }
}
var Oe = {
  face: `face
    confidence: [score]%
    [gender] [genderScore]%
    age: [age] years
    distance: [distance]cm
    real: [real]%
    live: [live]%
    [emotions]
    roll: [roll]\xB0 yaw:[yaw]\xB0 pitch:[pitch]\xB0
    gaze: [gaze]\xB0`,
  body: "body [score]%",
  bodyPart: "[label] [score]%",
  object: "[label] [score]%",
  hand: "[label] [score]%",
  finger: "[label]",
  gesture: "[where] [who]: [what]",
};
var i5 = 0;
function Js(e, t, n) {
  let o = i0(f0, n);
  if (!t || !e) return;
  let r = oe(e);
  if (r) {
    (r.lineJoin = "round"), (r.font = o.font);
    for (let s = 0; s < t.length; s++)
      if (o.drawBoxes) {
        if (
          ((r.strokeStyle = o.color),
          (r.fillStyle = o.color),
          be(r, t[s].box[0], t[s].box[1], t[s].box[2], t[s].box[3], o),
          o.drawLabels)
        ) {
          let A = `person #${s}`;
          o.shadowColor &&
            o.shadowColor !== "" &&
            ((r.fillStyle = o.shadowColor),
            r.fillText(
              A,
              t[s].box[0] + 3,
              1 + t[s].box[1] + o.lineHeight,
              t[s].box[2]
            )),
            (r.fillStyle = o.labelColor),
            r.fillText(
              A,
              t[s].box[0] + 2,
              0 + t[s].box[1] + o.lineHeight,
              t[s].box[2]
            );
        }
        r.stroke();
      }
  }
}
function Qs(e, t) {
  if (!e || !t) return;
  let n = oe(t);
  n && n.drawImage(e, 0, 0);
}
async function _s(e, t) {
  !e || !t || (R.browser && (await e3.browser.toPixels(e, t)));
}
async function $s(e, t, n) {
  if (!(t != null && t.performance) || !e) return null;
  let o = v(),
    r = i0(f0, n),
    s = Promise.all([
      $2(e, t.face, r),
      et(e, t.body, r),
      tt(e, t.hand, r),
      nt(e, t.object, r),
      ot(e, t.gesture, r),
    ]);
  return (
    (i5 = R.perfadd ? i5 + Math.round(v() - o) : Math.round(v() - o)),
    (t.performance.draw = i5),
    s
  );
}
function l5() {
  (f0.faceLabels = Oe.face),
    (f0.bodyLabels = Oe.body),
    (f0.bodyPartLabels = Oe.bodyPart),
    (f0.handLabels = Oe.hand),
    (f0.fingerLabels = Oe.finger),
    (f0.objectLabels = Oe.object),
    (f0.gestureLabels = Oe.gesture);
}
var q0 = Z(H());
var st = {};
Se(st, { connected: () => d5, kpt: () => c5 });
var c5 = [
    "nose",
    "leftEyeInside",
    "leftEye",
    "leftEyeOutside",
    "rightEyeInside",
    "rightEye",
    "rightEyeOutside",
    "leftEar",
    "rightEar",
    "leftMouth",
    "rightMouth",
    "leftShoulder",
    "rightShoulder",
    "leftElbow",
    "rightElbow",
    "leftWrist",
    "rightWrist",
    "leftPinky",
    "rightPinky",
    "leftIndex",
    "rightIndex",
    "leftThumb",
    "rightThumb",
    "leftHip",
    "rightHip",
    "leftKnee",
    "rightKnee",
    "leftAnkle",
    "rightAnkle",
    "leftHeel",
    "rightHeel",
    "leftFoot",
    "rightFoot",
    "bodyCenter",
    "bodyTop",
    "leftPalm",
    "leftHand",
    "rightPalm",
    "rightHand",
  ],
  d5 = {
    shoulders: ["leftShoulder", "rightShoulder"],
    hips: ["rightHip", "leftHip"],
    mouth: ["leftMouth", "rightMouth"],
    leftLegUpper: ["leftHip", "leftKnee"],
    leftLegLower: ["leftKnee", "leftAnkle"],
    leftFoot: ["leftAnkle", "leftHeel", "leftFoot"],
    leftTorso: ["leftShoulder", "leftHip"],
    leftArmUpper: ["leftShoulder", "leftElbow"],
    leftArmLower: ["leftElbow", "leftWrist"],
    leftHand: ["leftWrist", "leftPalm"],
    leftHandPinky: ["leftPalm", "leftPinky"],
    leftHandIndex: ["leftPalm", "leftIndex"],
    leftHandThumb: ["leftPalm", "leftThumb"],
    leftEyeOutline: ["leftEyeInside", "leftEyeOutside"],
    rightLegUpper: ["rightHip", "rightKnee"],
    rightLegLower: ["rightKnee", "rightAnkle"],
    rightFoot: ["rightAnkle", "rightHeel", "rightFoot"],
    rightTorso: ["rightShoulder", "rightHip"],
    rightArmUpper: ["rightShoulder", "rightElbow"],
    rightArmLower: ["rightElbow", "rightWrist"],
    rightHand: ["rightWrist", "rightPalm"],
    rightHandPinky: ["rightPalm", "rightPinky"],
    rightHandIndex: ["rightPalm", "rightIndex"],
    rightHandThumb: ["rightPalm", "rightThumb"],
    rightEyeOutline: ["rightEyeInside", "rightEyeOutside"],
  };
var D = Z(H());
var se,
  n2 = 224,
  n3,
  eA = 5,
  At = [8, 16, 32, 32, 32];
function tA() {
  let e = [],
    t = 0;
  for (; t < eA; ) {
    let n = 0,
      o = t;
    for (; o < At.length && At[o] === At[t]; ) (n += 2), o++;
    let r = At[t],
      s = Math.ceil(n2 / r),
      A = Math.ceil(n2 / r);
    for (let a = 0; a < s; ++a)
      for (let l = 0; l < A; ++l)
        for (let c = 0; c < n; ++c)
          e.push({ x: (l + 0.5) / A, y: (a + 0.5) / s });
    t = o;
  }
  n3 = { x: D.tensor1d(e.map((n) => n.x)), y: D.tensor1d(e.map((n) => n.y)) };
}
async function o3(e) {
  if (
    (R.initial && (se = null),
    !se && e.body.detector && e.body.detector.modelPath)
  ) {
    se = await L(e.body.detector.modelPath);
    let t =
      se != null && se.executor
        ? Object.values(se.modelSignature.inputs)
        : void 0;
    n2 = Array.isArray(t) ? parseInt(t[0].tensorShape.dim[1].size) : 0;
  } else e.debug && se && b("cached model:", se.modelUrl);
  return tA(), se;
}
var t3 = [5, 5];
function nA(e, t) {
  return D.tidy(() => {
    let n = D.split(e, 12, 1),
      o = D.squeeze(n[0]),
      r = D.squeeze(n[1]),
      s = D.squeeze(n[2]),
      A = D.squeeze(n[3]);
    (o = D.add(D.div(o, n2), t.x)),
      (r = D.add(D.div(r, n2), t.y)),
      (s = D.mul(D.div(s, n2), t3[0])),
      (A = D.mul(D.div(A, n2), t3[1]));
    let a = D.sub(o, D.div(s, 2)),
      l = D.sub(r, D.div(A, 2)),
      c = D.add(a, s),
      d = D.add(l, A);
    return D.stack([a, l, c, d], 1);
  });
}
async function oA(e, t, n, o) {
  var c, d;
  let r = [],
    s = {};
  (s.boxes = nA(e, n3)),
    (s.scores = D.sigmoid(t)),
    (s.nms = await D.image.nonMaxSuppressionAsync(
      s.boxes,
      s.scores,
      1,
      ((c = n.body.detector) == null ? void 0 : c.minConfidence) || 0.1,
      ((d = n.body.detector) == null ? void 0 : d.iouThreshold) || 0.1
    ));
  let A = await s.nms.data(),
    a = await s.scores.data(),
    l = await s.boxes.array();
  for (let i of Array.from(A)) {
    let y = a[i],
      x = l[i],
      m = [
        Math.round(x[0] * o[0]),
        Math.round(x[1] * o[1]),
        Math.round(x[2] * o[0]),
        Math.round(x[3] * o[1]),
      ],
      f = { score: y, boxRaw: x, box: m };
    r.push(f);
  }
  return Object.keys(s).forEach((i) => D.dispose(s[i])), r;
}
async function r3(e, t, n) {
  let o = {};
  (o.res = se == null ? void 0 : se.execute(e, ["Identity"])),
    (o.logitsRaw = D.slice(o.res, [0, 0, 0], [1, -1, 1])),
    (o.boxesRaw = D.slice(o.res, [0, 0, 1], [1, -1, -1])),
    (o.logits = D.squeeze(o.logitsRaw)),
    (o.boxes = D.squeeze(o.boxesRaw));
  let r = await oA(o.boxes, o.logits, t, n);
  return Object.keys(o).forEach((s) => D.dispose(o[s])), r;
}
function Le(e, t = [1, 1]) {
  let n = [e.map((a) => a[0]), e.map((a) => a[1])],
    o = [Math.min(...n[0]), Math.min(...n[1])],
    r = [Math.max(...n[0]), Math.max(...n[1])],
    s = [o[0], o[1], r[0] - o[0], r[1] - o[1]],
    A = [s[0] / t[0], s[1] / t[1], s[2] / t[0], s[3] / t[1]];
  return { box: s, boxRaw: A };
}
function s3(e, t = [1, 1]) {
  let n = [e.map((c) => c[0]), e.map((c) => c[1])],
    o = [Math.min(...n[0]), Math.min(...n[1])],
    r = [Math.max(...n[0]), Math.max(...n[1])],
    s = [(o[0] + r[0]) / 2, (o[1] + r[1]) / 2],
    A = Math.max(s[0] - o[0], s[1] - o[1], -s[0] + r[0], -s[1] + r[1]),
    a = [
      Math.trunc(s[0] - A),
      Math.trunc(s[1] - A),
      Math.trunc(2 * A),
      Math.trunc(2 * A),
    ],
    l = [a[0] / t[0], a[1] / t[1], a[2] / t[0], a[3] / t[1]];
  return { box: a, boxRaw: l };
}
function at(e, t) {
  let n = [e[2] * t, e[3] * t];
  return [e[0] - (n[0] - e[2]) / 2, e[1] - (n[1] - e[3]) / 2, n[0], n[1]];
}
var Z0,
  y5 = 256,
  x5 = Number.MAX_SAFE_INTEGER,
  rA = {
    landmarks: [
      "ld_3d",
      "activation_segmentation",
      "activation_heatmap",
      "world_3d",
      "output_poseflag",
    ],
    detector: [],
  },
  lt = [],
  Ce = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
  A3 = 0,
  a3 = (e) => 1 - 1 / (1 + Math.exp(e)),
  l3 = (e) => o3(e);
async function c3(e) {
  if ((R.initial && (Z0 = null), Z0))
    e.debug && b("cached model:", Z0.modelUrl);
  else {
    Z0 = await L(e.body.modelPath);
    let t =
      Z0 != null && Z0.executor
        ? Object.values(Z0.modelSignature.inputs)
        : void 0;
    y5 = Array.isArray(t) ? parseInt(t[0].tensorShape.dim[1].size) : 0;
  }
  return Z0;
}
function i3(e, t, n) {
  var s, A;
  let o = {};
  if (
    !((s = e == null ? void 0 : e.shape) != null && s[1]) ||
    !((A = e == null ? void 0 : e.shape) != null && A[2])
  )
    return e;
  let r;
  if (
    (n &&
      (o.cropped = q0.image.cropAndResize(
        e,
        [n],
        [0],
        [e.shape[1], e.shape[2]]
      )),
    e.shape[1] !== e.shape[2])
  ) {
    let a = [
        e.shape[2] > e.shape[1] ? Math.trunc((e.shape[2] - e.shape[1]) / 2) : 0,
        e.shape[2] > e.shape[1] ? Math.trunc((e.shape[2] - e.shape[1]) / 2) : 0,
      ],
      l = [
        e.shape[1] > e.shape[2] ? Math.trunc((e.shape[1] - e.shape[2]) / 2) : 0,
        e.shape[1] > e.shape[2] ? Math.trunc((e.shape[1] - e.shape[2]) / 2) : 0,
      ];
    (Ce = [[0, 0], a, l, [0, 0]]),
      (o.pad = q0.pad(o.cropped || e, Ce)),
      (o.resize = q0.image.resizeBilinear(o.pad, [t, t])),
      (r = q0.div(o.resize, C.tf255));
  } else
    e.shape[1] !== t
      ? ((o.resize = q0.image.resizeBilinear(o.cropped || e, [t, t])),
        (r = q0.div(o.resize, C.tf255)))
      : (r = q0.div(o.cropped || e, C.tf255));
  return Object.keys(o).forEach((a) => q0.dispose(o[a])), r;
}
function sA(e, t, n) {
  for (let o of e)
    (o.position = [
      Math.trunc(
        (o.position[0] * (t[0] + Ce[2][0] + Ce[2][1])) / t[0] - Ce[2][0]
      ),
      Math.trunc(
        (o.position[1] * (t[1] + Ce[1][0] + Ce[1][1])) / t[1] - Ce[1][0]
      ),
      o.position[2],
    ]),
      (o.positionRaw = [
        o.position[0] / t[0],
        o.position[1] / t[1],
        (2 * o.position[2]) / (t[0] + t[1]),
      ]);
  if (n) {
    let o = n[2] - n[0],
      r = n[3] - n[1];
    for (let s of e)
      (s.positionRaw = [
        s.positionRaw[0] / r + n[1],
        s.positionRaw[1] / o + n[0],
        s.positionRaw[2],
      ]),
        (s.position = [
          Math.trunc(s.positionRaw[0] * t[0]),
          Math.trunc(s.positionRaw[1] * t[1]),
          s.positionRaw[2],
        ]);
  }
  return e;
}
function AA(e) {
  let t = e.find((a) => a.part === "leftPalm"),
    n = e.find((a) => a.part === "leftWrist"),
    o = e.find((a) => a.part === "leftIndex");
  t.position[2] = ((n.position[2] || 0) + (o.position[2] || 0)) / 2;
  let r = e.find((a) => a.part === "rightPalm"),
    s = e.find((a) => a.part === "rightWrist"),
    A = e.find((a) => a.part === "rightIndex");
  r.position[2] = ((s.position[2] || 0) + (A.position[2] || 0)) / 2;
}
async function aA(e, t, n) {
  if (!(Z0 != null && Z0.executor)) return null;
  let o = {};
  [o.ld, o.segmentation, o.heatmap, o.world, o.poseflag] =
    Z0 == null ? void 0 : Z0.execute(e, rA.landmarks);
  let r = (await o.poseflag.data())[0],
    s = await o.ld.data(),
    A = await o.world.data();
  Object.keys(o).forEach((m) => q0.dispose(o[m]));
  let a = [],
    l = 5;
  for (let m = 0; m < s.length / l; m++) {
    let f = a3(s[l * m + 3]),
      h = a3(s[l * m + 4]),
      T = Math.trunc(100 * f * h * r) / 100,
      g = [s[l * m + 0] / y5, s[l * m + 1] / y5, s[l * m + 2] + 0],
      p = [Math.trunc(n[0] * g[0]), Math.trunc(n[1] * g[1]), g[2]],
      u = [A[l * m + 0], A[l * m + 1], A[l * m + 2] + 0];
    a.push({ part: c5[m], positionRaw: g, position: p, distance: u, score: T });
  }
  if (r < (t.body.minConfidence || 0)) return null;
  AA(a);
  let c = sA(a, n),
    d = c.map((m) => m.position),
    i = Le(d, [n[0], n[1]]),
    y = {};
  for (let [m, f] of Object.entries(d5)) {
    let h = [];
    for (let T = 0; T < f.length - 1; T++) {
      let g = c.find((u) => u.part === f[T]),
        p = c.find((u) => u.part === f[T + 1]);
      g && p && h.push([g.position, p.position]);
    }
    y[m] = h;
  }
  return {
    id: 0,
    score: Math.trunc(100 * r) / 100,
    box: i.box,
    boxRaw: i.boxRaw,
    keypoints: c,
    annotations: y,
  };
}
async function f5(e, t) {
  var s, A, a;
  let n = [e.shape[2] || 0, e.shape[1] || 0],
    o = (t.body.skipTime || 0) > v() - A3,
    r = x5 < (t.body.skipFrames || 0);
  if (t.skipAllowed && o && r && lt !== null) x5++;
  else {
    let l = [];
    if ((A = (s = t.body) == null ? void 0 : s.detector) != null && A.enabled) {
      let c = i3(e, 224);
      (l = await r3(c, t, n)), q0.dispose(c);
    } else l = [{ box: [0, 0, 0, 0], boxRaw: [0, 0, 1, 1], score: 0 }];
    for (let c = 0; c < l.length; c++) {
      let d = i3(e, 256, (a = l[c]) == null ? void 0 : a.boxRaw);
      lt.length = 0;
      let i = await aA(d, t, n);
      q0.dispose(d), i && ((i.id = c), lt.push(i));
    }
    (A3 = v()), (x5 = 0);
  }
  return lt;
}
var F0 = Z(H());
var m2 = [
  { class: 1, label: "person" },
  { class: 2, label: "bicycle" },
  { class: 3, label: "car" },
  { class: 4, label: "motorcycle" },
  { class: 5, label: "airplane" },
  { class: 6, label: "bus" },
  { class: 7, label: "train" },
  { class: 8, label: "truck" },
  { class: 9, label: "boat" },
  { class: 10, label: "traffic light" },
  { class: 11, label: "fire hydrant" },
  { class: 12, label: "stop sign" },
  { class: 13, label: "parking meter" },
  { class: 14, label: "bench" },
  { class: 15, label: "bird" },
  { class: 16, label: "cat" },
  { class: 17, label: "dog" },
  { class: 18, label: "horse" },
  { class: 19, label: "sheep" },
  { class: 20, label: "cow" },
  { class: 21, label: "elephant" },
  { class: 22, label: "bear" },
  { class: 23, label: "zebra" },
  { class: 24, label: "giraffe" },
  { class: 25, label: "backpack" },
  { class: 26, label: "umbrella" },
  { class: 27, label: "handbag" },
  { class: 28, label: "tie" },
  { class: 29, label: "suitcase" },
  { class: 30, label: "frisbee" },
  { class: 31, label: "skis" },
  { class: 32, label: "snowboard" },
  { class: 33, label: "sports ball" },
  { class: 34, label: "kite" },
  { class: 35, label: "baseball bat" },
  { class: 36, label: "baseball glove" },
  { class: 37, label: "skateboard" },
  { class: 38, label: "surfboard" },
  { class: 39, label: "tennis racket" },
  { class: 40, label: "bottle" },
  { class: 41, label: "wine glass" },
  { class: 42, label: "cup" },
  { class: 43, label: "fork" },
  { class: 44, label: "knife" },
  { class: 45, label: "spoon" },
  { class: 46, label: "bowl" },
  { class: 47, label: "banana" },
  { class: 48, label: "apple" },
  { class: 49, label: "sandwich" },
  { class: 50, label: "orange" },
  { class: 51, label: "broccoli" },
  { class: 52, label: "carrot" },
  { class: 53, label: "hot dog" },
  { class: 54, label: "pizza" },
  { class: 55, label: "donut" },
  { class: 56, label: "cake" },
  { class: 57, label: "chair" },
  { class: 58, label: "couch" },
  { class: 59, label: "potted plant" },
  { class: 60, label: "bed" },
  { class: 61, label: "dining table" },
  { class: 62, label: "toilet" },
  { class: 63, label: "tv" },
  { class: 64, label: "laptop" },
  { class: 65, label: "mouse" },
  { class: 66, label: "remote" },
  { class: 67, label: "keyboard" },
  { class: 68, label: "cell phone" },
  { class: 69, label: "microwave" },
  { class: 70, label: "oven" },
  { class: 71, label: "toaster" },
  { class: 72, label: "sink" },
  { class: 73, label: "refrigerator" },
  { class: 74, label: "book" },
  { class: 75, label: "clock" },
  { class: 76, label: "vase" },
  { class: 77, label: "scissors" },
  { class: 78, label: "teddy bear" },
  { class: 79, label: "hair drier" },
  { class: 80, label: "toothbrush" },
];
var X0,
  o2 = 0,
  m5 = [],
  x3 = 0,
  p5 = Number.MAX_SAFE_INTEGER;
async function y3(e) {
  if ((R.initial && (X0 = null), X0))
    e.debug && b("cached model:", X0.modelUrl);
  else {
    X0 = await L(e.object.modelPath);
    let t =
      X0 != null && X0.executor
        ? Object.values(X0.modelSignature.inputs)
        : void 0;
    o2 = Array.isArray(t) ? parseInt(t[0].tensorShape.dim[2].size) : 0;
  }
  return X0;
}
async function iA(e, t, n) {
  if (!e) return [];
  let o = {},
    r = [],
    s = await e.array();
  o.squeeze = F0.squeeze(e);
  let A = F0.split(o.squeeze, 6, 1);
  (o.stack = F0.stack([A[1], A[0], A[3], A[2]], 1)),
    (o.boxes = F0.squeeze(o.stack)),
    (o.scores = F0.squeeze(A[4])),
    (o.classes = F0.squeeze(A[5])),
    F0.dispose([e, ...A]),
    (o.nms = await F0.image.nonMaxSuppressionAsync(
      o.boxes,
      o.scores,
      n.object.maxDetected || 0,
      n.object.iouThreshold,
      n.object.minConfidence || 0
    ));
  let a = await o.nms.data(),
    l = 0;
  for (let c of Array.from(a)) {
    let d = Math.trunc(100 * s[0][c][4]) / 100,
      i = s[0][c][5];
    if (Number.isNaN(i)) continue;
    let y = m2[i].label,
      [x, m] = [s[0][c][0] / o2, s[0][c][1] / o2],
      f = [x, m, s[0][c][2] / o2 - x, s[0][c][3] / o2 - m],
      h = [
        Math.trunc(f[0] * t[0]),
        Math.trunc(f[1] * t[1]),
        Math.trunc(f[2] * t[0]),
        Math.trunc(f[3] * t[1]),
      ];
    r.push({ id: l++, score: d, class: i, label: y, box: h, boxRaw: f });
  }
  return Object.keys(o).forEach((c) => F0.dispose(o[c])), r;
}
async function u5(e, t) {
  if (!(X0 != null && X0.executor)) return [];
  let n = (t.object.skipTime || 0) > v() - x3,
    o = p5 < (t.object.skipFrames || 0);
  return t.skipAllowed && n && o && m5.length > 0
    ? (p5++, m5)
    : ((p5 = 0),
      new Promise(async (r) => {
        let s = [e.shape[2] || 0, e.shape[1] || 0],
          A = F0.image.resizeBilinear(e, [o2, o2]),
          a = t.object.enabled
            ? X0 == null
              ? void 0
              : X0.execute(A, ["tower_0/detections"])
            : null;
        (x3 = v()), F0.dispose(A);
        let l = await iA(a, s, t);
        (m5 = l), r(l);
      }));
}
var _ = Z(H());
var ct = {};
Se(ct, { connected: () => b5, kpt: () => h5 });
var h5 = [
    "head",
    "neck",
    "rightShoulder",
    "rightElbow",
    "rightWrist",
    "chest",
    "leftShoulder",
    "leftElbow",
    "leftWrist",
    "bodyCenter",
    "rightHip",
    "rightKnee",
    "rightAnkle",
    "leftHip",
    "leftKnee",
    "leftAnkle",
  ],
  b5 = {
    leftLeg: ["leftHip", "leftKnee", "leftAnkle"],
    rightLeg: ["rightHip", "rightKnee", "rightAnkle"],
    torso: [
      "leftShoulder",
      "rightShoulder",
      "rightHip",
      "leftHip",
      "leftShoulder",
    ],
    leftArm: ["leftShoulder", "leftElbow", "leftWrist"],
    rightArm: ["rightShoulder", "rightElbow", "rightWrist"],
    head: [],
  };
var l0,
  m3 = 0,
  B0 = {
    id: 0,
    keypoints: [],
    box: [0, 0, 0, 0],
    boxRaw: [0, 0, 0, 0],
    score: 0,
    annotations: {},
  },
  g5 = Number.MAX_SAFE_INTEGER;
async function p3(e) {
  return (
    R.initial && (l0 = null),
    l0
      ? e.debug && b("cached model:", l0.modelUrl)
      : (l0 = await L(e.body.modelPath)),
    l0
  );
}
async function lA(e, t) {
  let [n, o] = e.shape,
    r = _.reshape(e, [o * n]),
    s = _.max(r, 0),
    A = (await s.data())[0];
  if (A > t) {
    let a = _.argMax(r, 0),
      l = _.mod(a, n),
      c = (await l.data())[0],
      d = _.div(a, n),
      i = (await d.data())[0];
    return _.dispose([r, s, a, l, d]), [c, i, A];
  }
  return _.dispose([r, s]), [0, 0, A];
}
async function T5(e, t) {
  if (!(l0 != null && l0.executor) || !(l0 != null && l0.inputs[0].shape))
    return [];
  let n = (t.body.skipTime || 0) > v() - m3,
    o = g5 < (t.body.skipFrames || 0);
  return t.skipAllowed && n && o && Object.keys(B0.keypoints).length > 0
    ? (g5++, [B0])
    : ((g5 = 0),
      new Promise(async (r) => {
        let s = _.tidy(() => {
            var m, f;
            let i = _.image.resizeBilinear(
                e,
                [
                  ((m = l0 == null ? void 0 : l0.inputs[0].shape) == null
                    ? void 0
                    : m[2]) || 0,
                  ((f = l0 == null ? void 0 : l0.inputs[0].shape) == null
                    ? void 0
                    : f[1]) || 0,
                ],
                !1
              ),
              y = _.mul(i, C.tf2);
            return _.sub(y, C.tf1);
          }),
          A;
        if (
          (t.body.enabled && (A = l0 == null ? void 0 : l0.execute(s)),
          (m3 = v()),
          _.dispose(s),
          A)
        ) {
          B0.keypoints.length = 0;
          let i = _.squeeze(A);
          _.dispose(A);
          let y = _.unstack(i, 2);
          _.dispose(i);
          for (let x = 0; x < y.length; x++) {
            let [m, f, h] = await lA(y[x], t.body.minConfidence);
            h > (t.body.minConfidence || 0) &&
              B0.keypoints.push({
                score: Math.round(100 * h) / 100,
                part: h5[x],
                positionRaw: [
                  m / l0.inputs[0].shape[2],
                  f / l0.inputs[0].shape[1],
                ],
                position: [
                  Math.round((e.shape[2] * m) / l0.inputs[0].shape[2]),
                  Math.round((e.shape[1] * f) / l0.inputs[0].shape[1]),
                ],
              });
          }
          y.forEach((x) => _.dispose(x));
        }
        B0.score = B0.keypoints.reduce(
          (i, y) => (y.score > i ? y.score : i),
          0
        );
        let a = B0.keypoints.map((i) => i.position[0]),
          l = B0.keypoints.map((i) => i.position[1]);
        B0.box = [
          Math.min(...a),
          Math.min(...l),
          Math.max(...a) - Math.min(...a),
          Math.max(...l) - Math.min(...l),
        ];
        let c = B0.keypoints.map((i) => i.positionRaw[0]),
          d = B0.keypoints.map((i) => i.positionRaw[1]);
        B0.boxRaw = [
          Math.min(...c),
          Math.min(...d),
          Math.max(...c) - Math.min(...c),
          Math.max(...d) - Math.min(...d),
        ];
        for (let [i, y] of Object.entries(b5)) {
          let x = [];
          for (let m = 0; m < y.length - 1; m++) {
            let f = B0.keypoints.find((T) => T.part === y[m]),
              h = B0.keypoints.find((T) => T.part === y[m + 1]);
            f &&
              h &&
              f.score > (t.body.minConfidence || 0) &&
              h.score > (t.body.minConfidence || 0) &&
              x.push([f.position, h.position]);
          }
          B0.annotations[i] = x;
        }
        r([B0]);
      }));
}
var c0 = Z(H());
var De = Z(H());
var O = Z(H());
var Pe = Z(H());
var p2 = (e) => [
    Math.abs(e.endPoint[0] - e.startPoint[0]),
    Math.abs(e.endPoint[1] - e.startPoint[1]),
  ],
  dt = (e) => [
    e.startPoint[0] + (e.endPoint[0] - e.startPoint[0]) / 2,
    e.startPoint[1] + (e.endPoint[1] - e.startPoint[1]) / 2,
    1,
  ],
  xt = (e, t) =>
    e
      ? [
          Math.trunc(Math.max(0, e.startPoint[0])),
          Math.trunc(Math.max(0, e.startPoint[1])),
          Math.trunc(
            Math.min(t.shape[2] || 0, e.endPoint[0]) -
              Math.max(0, e.startPoint[0])
          ),
          Math.trunc(
            Math.min(t.shape[1] || 0, e.endPoint[1]) -
              Math.max(0, e.startPoint[1])
          ),
        ]
      : [0, 0, 0, 0],
  yt = (e, t) =>
    e
      ? [
          e.startPoint[0] / (t.shape[2] || 0),
          e.startPoint[1] / (t.shape[1] || 0),
          (e.endPoint[0] - e.startPoint[0]) / (t.shape[2] || 0),
          (e.endPoint[1] - e.startPoint[1]) / (t.shape[1] || 0),
        ]
      : [0, 0, 0, 0],
  g3 = (e, t, n) => {
    let o = [e.startPoint[0] * t[0], e.startPoint[1] * t[1]],
      r = [e.endPoint[0] * t[0], e.endPoint[1] * t[1]],
      s = e.landmarks.map((A) => [(A[0] + n[0]) * t[0], (A[1] + n[1]) * t[1]]);
    return {
      startPoint: o,
      endPoint: r,
      landmarks: s,
      confidence: e.confidence,
    };
  },
  v5 = (e, t, n) => {
    let o = t.shape[1],
      r = t.shape[2],
      s = [
        e.startPoint[1] / o,
        e.startPoint[0] / r,
        e.endPoint[1] / o,
        e.endPoint[0] / r,
      ],
      A = Pe.image.cropAndResize(t, [s], [0], n),
      a = Pe.div(A, C.tf255);
    return Pe.dispose(A), a;
  },
  ft = (e, t) => {
    let n = dt(e),
      o = p2(e),
      r = [(t * o[0]) / 2, (t * o[1]) / 2];
    return {
      startPoint: [n[0] - r[0], n[1] - r[1]],
      endPoint: [n[0] + r[0], n[1] + r[1]],
      landmarks: e.landmarks,
      confidence: e.confidence,
      size: o,
    };
  },
  mt = (e) => {
    let t = dt(e),
      n = p2(e),
      o = Math.max(...n) / 2;
    return {
      startPoint: [Math.round(t[0] - o), Math.round(t[1] - o)],
      endPoint: [Math.round(t[0] + o), Math.round(t[1] + o)],
      landmarks: e.landmarks,
      confidence: e.confidence,
      size: [Math.round(n[0]), Math.round(n[1])],
    };
  },
  T3 = (e) => {
    let t = e.map((o) => o[0]),
      n = e.map((o) => o[1]);
    return {
      startPoint: [Math.min(...t), Math.min(...n)],
      endPoint: [Math.max(...t), Math.max(...n)],
      landmarks: e,
    };
  },
  R5 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  cA = (e) => e - 2 * Math.PI * Math.floor((e + Math.PI) / (2 * Math.PI)),
  dA = (e, t) => cA(Math.PI / 2 - Math.atan2(-(t[1] - e[1]), t[0] - e[0]));
var h3 = (e, t) => [
    [1, 0, e],
    [0, 1, t],
    [0, 0, 1],
  ],
  r2 = (e, t) => {
    let n = 0;
    for (let o = 0; o < e.length; o++) n += e[o] * t[o];
    return n;
  },
  xA = (e, t) => {
    let n = [];
    for (let o = 0; o < e.length; o++) n.push(e[o][t]);
    return n;
  },
  b3 = (e, t) => {
    let n = [],
      o = e.length;
    for (let r = 0; r < o; r++) {
      n.push([]);
      for (let s = 0; s < o; s++) n[r].push(r2(e[r], xA(t, s)));
    }
    return n;
  },
  v3 = (e, t) => {
    let n = Math.cos(e),
      o = Math.sin(e),
      r = [
        [n, -o, 0],
        [o, n, 0],
        [0, 0, 1],
      ],
      s = h3(t[0], t[1]),
      A = b3(s, r),
      a = h3(-t[0], -t[1]);
    return b3(A, a);
  },
  yA = (e) => {
    let t = [
        [e[0][0], e[1][0]],
        [e[0][1], e[1][1]],
      ],
      n = [e[0][2], e[1][2]],
      o = [-r2(t[0], n), -r2(t[1], n)];
    return [t[0].concat(o[0]), t[1].concat(o[1]), [0, 0, 1]];
  },
  fA = (e, t) => [r2(e, t[0]), r2(e, t[1])];
function R3(e) {
  let t =
      e === 192
        ? { strides: [4], anchors: [1] }
        : { strides: [e / 16, e / 8], anchors: [2, 6] },
    n = [];
  for (let o = 0; o < t.strides.length; o++) {
    let r = t.strides[o],
      s = Math.floor((e + r - 1) / r),
      A = Math.floor((e + r - 1) / r),
      a = t.anchors[o];
    for (let l = 0; l < s; l++) {
      let c = r * (l + 0.5);
      for (let d = 0; d < A; d++) {
        let i = r * (d + 0.5);
        for (let y = 0; y < a; y++) n.push([i, c]);
      }
    }
  }
  return n;
}
function M3(e, t, n, o, r) {
  let s = p2(t),
    A = e.map((x) => [
      (s[0] / r) * (x[0] - r / 2),
      (s[1] / r) * (x[1] - r / 2),
      x[2] || 0,
    ]),
    a = n && n !== 0 && Math.abs(n) > 0.2,
    l = a ? v3(n, [0, 0]) : R5,
    c = a ? A.map((x) => [...fA(x, l), x[2]]) : A,
    d = a ? yA(o) : R5,
    i = dt(t),
    y = [r2(i, d[0]), r2(i, d[1])];
  return c.map((x) => [
    Math.trunc(x[0] + y[0]),
    Math.trunc(x[1] + y[1]),
    Math.trunc(x[2] || 0),
  ]);
}
function P3(e, t, n, o) {
  let r = t.landmarks.length >= s5.count ? s5.symmetryLine : _e.symmetryLine,
    s = 0,
    A = R5,
    a;
  if (e && R.kernels.includes("rotatewithoffset"))
    if (
      ((s = dA(t.landmarks[r[0]], t.landmarks[r[1]])),
      s && s !== 0 && Math.abs(s) > 0.2)
    ) {
      let c = dt(t),
        d = [c[0] / n.shape[2], c[1] / n.shape[1]],
        i = Pe.image.rotateWithOffset(n, s, 0, [d[0], d[1]]);
      (A = v3(-s, c)), (a = v5(t, i, [o, o])), Pe.dispose(i);
    } else a = v5(t, n, [o, o]);
  else a = v5(t, n, [o, o]);
  return [s, A, a];
}
var mA = (e) => {
    let t = e.map((o) => o[0]),
      n = e.map((o) => o[1]);
    return [
      Math.min(...t) + (Math.max(...t) - Math.min(...t)) / 2,
      Math.min(...n) + (Math.max(...n) - Math.min(...n)) / 2,
    ];
  },
  k3 = (e, t) => {
    let n = mA(e),
      o = p2(t);
    return {
      startPoint: [n[0] - o[0] / 2, n[1] - o[1] / 2],
      endPoint: [n[0] + o[0] / 2, n[1] + o[1] / 2],
    };
  };
var w3 = 6,
  xe,
  pt = null,
  ge = 0,
  u2 = null,
  E3 = () => ge;
async function z3(e) {
  var t;
  return (
    R.initial && (xe = null),
    xe
      ? e.debug && b("cached model:", xe.modelUrl)
      : (xe = await L((t = e.face.detector) == null ? void 0 : t.modelPath)),
    (ge = xe.executor && xe.inputs[0].shape ? xe.inputs[0].shape[2] : 256),
    (u2 = O.scalar(ge, "int32")),
    (pt = O.tensor2d(R3(ge))),
    xe
  );
}
function pA(e) {
  if (!pt || !u2) return O.zeros([0, 0]);
  let t = {};
  (t.boxStarts = O.slice(e, [0, 1], [-1, 2])),
    (t.centers = O.add(t.boxStarts, pt)),
    (t.boxSizes = O.slice(e, [0, 3], [-1, 2])),
    (t.boxSizesNormalized = O.div(t.boxSizes, u2)),
    (t.centersNormalized = O.div(t.centers, u2)),
    (t.halfBoxSize = O.div(t.boxSizesNormalized, C.tf2)),
    (t.starts = O.sub(t.centersNormalized, t.halfBoxSize)),
    (t.ends = O.add(t.centersNormalized, t.halfBoxSize)),
    (t.startNormalized = O.mul(t.starts, u2)),
    (t.endNormalized = O.mul(t.ends, u2));
  let n = O.concat2d([t.startNormalized, t.endNormalized], 1);
  return Object.keys(t).forEach((o) => O.dispose(t[o])), n;
}
async function S3(e, t) {
  var c, d, i, y, x, m, f, h, T;
  if (
    !e ||
    e.isDisposedInternal ||
    e.shape.length !== 4 ||
    e.shape[1] < 1 ||
    e.shape[2] < 1
  )
    return [];
  let n = {},
    o = [0, 0],
    r = [1, 1];
  if (
    (d = (c = t == null ? void 0 : t.face) == null ? void 0 : c.detector) !=
      null &&
    d.square
  ) {
    let g = Math.max(e.shape[2], e.shape[1]);
    (o = [Math.floor((g - e.shape[2]) / 2), Math.floor((g - e.shape[1]) / 2)]),
      (n.padded = O.pad(e, [
        [0, 0],
        [o[1], o[1]],
        [o[0], o[0]],
        [0, 0],
      ])),
      (r = [e.shape[2] / g, e.shape[1] / g]),
      (o = [o[0] / ge, o[1] / ge]);
  } else n.padded = e.clone();
  (n.resized = O.image.resizeBilinear(n.padded, [ge, ge])),
    (n.div = O.div(n.resized, C.tf127)),
    (n.normalized = O.sub(n.div, C.tf1));
  let s = xe == null ? void 0 : xe.execute(n.normalized);
  if (Array.isArray(s) && s.length > 2) {
    let g = s.sort((p, u) => p.size - u.size);
    (n.concat384 = O.concat([g[0], g[2]], 2)),
      (n.concat512 = O.concat([g[1], g[3]], 2)),
      (n.concat = O.concat([n.concat512, n.concat384], 1)),
      (n.batch = O.squeeze(n.concat, [0]));
  } else
    Array.isArray(s) ? (n.batch = O.squeeze(s[0])) : (n.batch = O.squeeze(s));
  O.dispose(s),
    (n.boxes = pA(n.batch)),
    (n.logits = O.slice(n.batch, [0, 0], [-1, 1])),
    (n.sigmoid = O.sigmoid(n.logits)),
    (n.scores = O.squeeze(n.sigmoid)),
    (n.nms = await O.image.nonMaxSuppressionAsync(
      n.boxes,
      n.scores,
      ((i = t.face.detector) == null ? void 0 : i.maxDetected) || 0,
      ((y = t.face.detector) == null ? void 0 : y.iouThreshold) || 0,
      ((x = t.face.detector) == null ? void 0 : x.minConfidence) || 0
    ));
  let A = await n.nms.array(),
    a = [],
    l = await n.scores.data();
  for (let g = 0; g < A.length; g++) {
    let p = l[A[g]];
    if (p > (((m = t.face.detector) == null ? void 0 : m.minConfidence) || 0)) {
      let u = {};
      (u.bbox = O.slice(n.boxes, [A[g], 0], [1, -1])),
        (u.slice = O.slice(n.batch, [A[g], w3 - 1], [1, -1])),
        (u.squeeze = O.squeeze(u.slice)),
        (u.landmarks = O.reshape(u.squeeze, [w3, -1]));
      let k = await u.bbox.data(),
        P = [
          k[0] * r[0] - o[0],
          k[1] * r[1] - o[1],
          k[2] * r[0] - o[0],
          k[3] * r[1] - o[1],
        ],
        N = {
          startPoint: [P[0], P[1]],
          endPoint: [P[2], P[3]],
          landmarks: await u.landmarks.array(),
          confidence: p,
        };
      u.anchor = O.slice(pt, [A[g], 0], [1, 2]);
      let B = await u.anchor.data(),
        J = g3(N, [(e.shape[2] || 0) / ge, (e.shape[1] || 0) / ge], B),
        G = ft(J, ((f = t.face.detector) == null ? void 0 : f.scale) || 1.4),
        K = mt(G);
      K.size[0] > (((h = t.face.detector) == null ? void 0 : h.minSize) || 0) &&
        K.size[1] >
          (((T = t.face.detector) == null ? void 0 : T.minSize) || 0) &&
        a.push(K),
        Object.keys(u).forEach((e0) => O.dispose(u[e0]));
    }
  }
  return Object.keys(n).forEach((g) => O.dispose(n[g])), a;
}
var ye = Z(H());
var K0,
  We = 0,
  P5 = ae.leftEyeLower0,
  k5 = ae.rightEyeLower0,
  h2 = {
    leftBounds: [P5[0], P5[P5.length - 1]],
    rightBounds: [k5[0], k5[k5.length - 1]],
  },
  b2 = { upperCenter: 3, lowerCenter: 4, index: 71, numCoordinates: 76 };
async function L3(e) {
  var t, n;
  return (
    R.initial && (K0 = null),
    K0
      ? e.debug && b("cached model:", K0.modelUrl)
      : (K0 = await L((t = e.face.iris) == null ? void 0 : t.modelPath)),
    (We =
      K0 != null && K0.executor && (n = K0.inputs) != null && n[0].shape
        ? K0.inputs[0].shape[2]
        : 0),
    We === -1 && (We = 64),
    K0
  );
}
function ut(e, t, n, o) {
  for (let r = 0; r < A5.length; r++) {
    let { key: s, indices: A } = A5[r],
      a = ae[`${n}${s}`];
    if (!o || o.includes(s))
      for (let l = 0; l < A.length; l++) {
        let c = A[l];
        e[a[l]] = [t[c][0], t[c][1], (t[c][2] + e[a[l]][2]) / 2];
      }
  }
}
var uA = (e) => {
    let t = e[h2.leftBounds[0]][2],
      n = e[h2.rightBounds[0]][2];
    return t - n;
  },
  N3 = (e, t, n, o, r, s = !1, A = 2.3) => {
    let a = mt(ft(T3([e[n], e[o]]), A)),
      l = p2(a),
      c = ye.image.cropAndResize(
        t,
        [
          [
            a.startPoint[1] / r,
            a.startPoint[0] / r,
            a.endPoint[1] / r,
            a.endPoint[0] / r,
          ],
        ],
        [0],
        [We, We]
      );
    if (s && R.kernels.includes("flipleftright")) {
      let d = ye.image.flipLeftRight(c);
      ye.dispose(c), (c = d);
    }
    return { box: a, boxSize: l, crop: c };
  },
  I3 = (e, t, n, o = !1) => {
    let r = [];
    for (let s = 0; s < b2.numCoordinates; s++) {
      let A = e[s * 3],
        a = e[s * 3 + 1],
        l = e[s * 3 + 2];
      r.push([
        (o ? 1 - A / We : A / We) * n[0] + t.startPoint[0],
        (a / We) * n[1] + t.startPoint[1],
        l,
      ]);
    }
    return { rawCoords: r, iris: r.slice(b2.index) };
  },
  O3 = (e, t, n) => {
    let o = e[ae[`${n}EyeUpper0`][b2.upperCenter]][2],
      r = e[ae[`${n}EyeLower0`][b2.lowerCenter]][2],
      s = (o + r) / 2;
    return t.map((A, a) => {
      let l = s;
      return a === 2 ? (l = o) : a === 4 && (l = r), [A[0], A[1], l];
    });
  };
async function C3(e, t, n, o) {
  var N, B;
  if (!(K0 != null && K0.executor)) return e;
  let {
      box: r,
      boxSize: s,
      crop: A,
    } = N3(
      e,
      t,
      h2.leftBounds[0],
      h2.leftBounds[1],
      n,
      !0,
      ((N = o.face.iris) == null ? void 0 : N.scale) || 2.3
    ),
    {
      box: a,
      boxSize: l,
      crop: c,
    } = N3(
      e,
      t,
      h2.rightBounds[0],
      h2.rightBounds[1],
      n,
      !0,
      ((B = o.face.iris) == null ? void 0 : B.scale) || 2.3
    ),
    d = ye.concat([A, c]);
  ye.dispose(A), ye.dispose(c);
  let i = K0.execute(d);
  ye.dispose(d);
  let y = await i.data();
  ye.dispose(i);
  let x = y.slice(0, b2.numCoordinates * 3),
    { rawCoords: m, iris: f } = I3(x, r, s, !0),
    h = y.slice(b2.numCoordinates * 3),
    { rawCoords: T, iris: g } = I3(h, a, l, !1),
    p = uA(e);
  Math.abs(p) < 30
    ? (ut(e, m, "left", null), ut(e, T, "right", null))
    : p < 1
    ? ut(e, m, "left", ["EyeUpper0", "EyeLower0"])
    : ut(e, T, "right", ["EyeUpper0", "EyeLower0"]);
  let u = O3(e, f, "left"),
    k = O3(e, g, "right");
  return e.concat(u).concat(k);
}
async function D3(e, t) {
  var s, A, a, l, c, d, i, y, x, m;
  let n = {
    lips: await ((A =
      (s = t.filter((f) => f.size === 160)) == null ? void 0 : s[0]) == null
      ? void 0
      : A.data()),
    irisL: await ((l =
      (a = t.filter((f) => f.size === 10)) == null ? void 0 : a[0]) == null
      ? void 0
      : l.data()),
    eyeL: await ((d =
      (c = t.filter((f) => f.size === 142)) == null ? void 0 : c[0]) == null
      ? void 0
      : d.data()),
    irisR: await ((y =
      (i = t.filter((f) => f.size === 10)) == null ? void 0 : i[1]) == null
      ? void 0
      : y.data()),
    eyeR: await ((m =
      (x = t.filter((f) => f.size === 142)) == null ? void 0 : x[1]) == null
      ? void 0
      : m.data()),
  };
  for (let f of Object.values(n)) if (!f) return e;
  let o = e2.reduce((f, h) => (f += e[h][2]), 0) / e2.length;
  for (let f = 0; f < n.irisL.length / 2; f++)
    e.push([n.irisL[2 * f + 0], n.irisL[2 * f + 1], o]);
  let r = t2.reduce((f, h) => (f += e[h][2]), 0) / t2.length;
  for (let f = 0; f < n.irisR.length / 2; f++)
    e.push([n.irisR[2 * f + 0], n.irisR[2 * f + 1], r]);
  for (let f = 0; f < n.eyeL.length / 2; f++)
    e[e2[f]] = [n.eyeL[2 * f + 0], n.eyeL[2 * f + 1], e[e2[f]][2]];
  for (let f = 0; f < n.eyeR.length / 2; f++)
    e[t2[f]] = [n.eyeR[2 * f + 0], n.eyeR[2 * f + 1], e[t2[f]][2]];
  for (let f = 0; f < n.lips.length / 2; f++)
    e[C2[f]] = [n.lips[2 * f + 0], n.lips[2 * f + 1], e[C2[f]][2]];
  return e;
}
var Te = { boxes: [], skipped: Number.MAX_SAFE_INTEGER, timestamp: 0 },
  s0 = null,
  W2 = 0;
async function F3(e, t) {
  var l, c, d, i, y, x, m, f, h, T;
  let n =
      (((l = t.face.detector) == null ? void 0 : l.skipTime) || 0) >
      v() - Te.timestamp,
    o =
      Te.skipped <
      (((c = t.face.detector) == null ? void 0 : c.skipFrames) || 0);
  !t.skipAllowed || !n || !o || Te.boxes.length === 0
    ? ((Te.boxes = await S3(e, t)), (Te.timestamp = v()), (Te.skipped = 0))
    : Te.skipped++;
  let r = [],
    s = [],
    A = 0,
    a = W2;
  for (let g = 0; g < Te.boxes.length; g++) {
    let p = Te.boxes[g],
      u = 0,
      k,
      P = {
        id: A++,
        mesh: [],
        meshRaw: [],
        box: [0, 0, 0, 0],
        boxRaw: [0, 0, 0, 0],
        score: 0,
        boxScore: 0,
        faceScore: 0,
        size: [0, 0],
        annotations: {},
      };
    if (
      (([u, k, P.tensor] = P3(
        (d = t.face.detector) == null ? void 0 : d.rotation,
        p,
        e,
        (i = t.face.mesh) != null && i.enabled ? W2 : E3()
      )),
      t.filter.equalization)
    ) {
      let N = P.tensor ? await X2(P.tensor) : void 0;
      De.dispose(P.tensor), N && (P.tensor = N);
    }
    if (
      ((P.boxScore = Math.round(100 * p.confidence) / 100),
      !((y = t.face.mesh) != null && y.enabled) || !(s0 != null && s0.executor))
    ) {
      (P.box = xt(p, e)),
        (P.boxRaw = yt(p, e)),
        (P.score = P.boxScore),
        (P.size = p.size),
        (P.mesh = p.landmarks),
        (P.meshRaw = P.mesh.map((N) => [
          N[0] / (e.shape[2] || 0),
          N[1] / (e.shape[1] || 0),
          (N[2] || 0) / a,
        ]));
      for (let N of Object.keys(_e)) P.annotations[N] = [P.mesh[_e[N]]];
    } else if (!s0)
      t.debug && b("face mesh detection requested, but model is not loaded");
    else {
      if (
        (x = t.face.attention) != null &&
        x.enabled &&
        !R.kernels.includes("atan2")
      )
        return (t.face.attention.enabled = !1), De.dispose(P.tensor), r;
      let N = s0.execute(P.tensor),
        J = await N.find((G) => G.shape[G.shape.length - 1] === 1).data();
      if (
        ((P.faceScore = Math.round(100 * J[0]) / 100),
        P.faceScore <
          (((m = t.face.detector) == null ? void 0 : m.minConfidence) || 1))
      ) {
        if (((p.confidence = P.faceScore), t.face.mesh.keepInvalid)) {
          (P.box = xt(p, e)),
            (P.boxRaw = yt(p, e)),
            (P.size = p.size),
            (P.score = P.boxScore),
            (P.mesh = p.landmarks),
            (P.meshRaw = P.mesh.map((G) => [
              G[0] / (e.shape[2] || 1),
              G[1] / (e.shape[1] || 1),
              (G[2] || 0) / a,
            ]));
          for (let G of Object.keys(_e)) P.annotations[G] = [P.mesh[_e[G]]];
        }
      } else {
        let G = N.find((o0) => o0.shape[o0.shape.length - 1] === 1404),
          K = De.reshape(G, [-1, 3]),
          e0 = await K.array();
        De.dispose(K),
          (f = t.face.attention) != null && f.enabled
            ? (e0 = await D3(e0, N))
            : (h = t.face.iris) != null &&
              h.enabled &&
              (e0 = await C3(e0, P.tensor, W2, t)),
          (P.mesh = M3(e0, p, u, k, W2)),
          (P.meshRaw = P.mesh.map((o0) => [
            o0[0] / (e.shape[2] || 0),
            o0[1] / (e.shape[1] || 0),
            (o0[2] || 0) / a,
          ]));
        for (let o0 of Object.keys(ae))
          P.annotations[o0] = ae[o0].map((N0) => P.mesh[N0]);
        P.score = P.faceScore;
        let n0 = {
          ...k3(P.mesh, p),
          confidence: p.confidence,
          landmarks: p.landmarks,
          size: p.size,
        };
        (P.box = xt(n0, e)),
          (P.boxRaw = yt(n0, e)),
          (P.size = n0.size),
          s.push(n0);
      }
      De.dispose(N);
    }
    P.score > (((T = t.face.detector) == null ? void 0 : T.minConfidence) || 1)
      ? r.push(P)
      : De.dispose(P.tensor);
  }
  return (Te.boxes = s), r;
}
async function B3(e) {
  var t, n, o, r, s, A;
  return (
    R.initial && (s0 = null),
    (t = e.face.attention) != null &&
      t.enabled &&
      s0 != null &&
      s0.signature &&
      Object.keys(
        ((n = s0 == null ? void 0 : s0.signature) == null
          ? void 0
          : n.outputs) || {}
      ).length < 6 &&
      (s0 = null),
    s0
      ? e.debug && b("cached model:", s0.modelUrl)
      : (o = e.face.attention) != null && o.enabled
      ? (s0 = await L(e.face.attention.modelPath))
      : (s0 = await L((r = e.face.mesh) == null ? void 0 : r.modelPath)),
    (W2 =
      s0.executor && (s = s0 == null ? void 0 : s0.inputs) != null && s[0].shape
        ? (A = s0 == null ? void 0 : s0.inputs) == null
          ? void 0
          : A[0].shape[2]
        : 256),
    s0
  );
}
var H3 = $e,
  G3 = L2;
var J0 = Z(H());
var z5 = [],
  k0,
  ht = [],
  V3 = 0,
  Z3 = 0,
  E5 = Number.MAX_SAFE_INTEGER,
  S5 = !1;
async function q3(e) {
  var t, n, o;
  return (
    R.initial && (k0 = null),
    k0
      ? e.debug && b("cached model:", k0.modelUrl)
      : ((k0 = await L((t = e.face.emotion) == null ? void 0 : t.modelPath)),
        (S5 =
          ((o =
            (n = k0 == null ? void 0 : k0.inputs) == null
              ? void 0
              : n[0].shape) == null
            ? void 0
            : o[3]) === 3),
        S5
          ? (z5 = [
              "angry",
              "disgust",
              "fear",
              "happy",
              "neutral",
              "sad",
              "surprise",
            ])
          : (z5 = [
              "angry",
              "disgust",
              "fear",
              "happy",
              "sad",
              "surprise",
              "neutral",
            ])),
    k0
  );
}
async function j5(e, t, n, o) {
  var A, a;
  if (!k0) return [];
  let r = E5 < (((A = t.face.emotion) == null ? void 0 : A.skipFrames) || 0),
    s = (((a = t.face.emotion) == null ? void 0 : a.skipTime) || 0) > v() - Z3;
  return t.skipAllowed && s && r && V3 === o && ht[n] && ht[n].length > 0
    ? (E5++, ht[n])
    : ((E5 = 0),
      new Promise(async (l) => {
        var d, i, y;
        let c = [];
        if ((d = t.face.emotion) != null && d.enabled) {
          let x = {},
            m = k0 != null && k0.inputs[0].shape ? k0.inputs[0].shape[2] : 0;
          if (((i = t.face.emotion) == null ? void 0 : i.crop) > 0) {
            let h = (y = t.face.emotion) == null ? void 0 : y.crop,
              T = [[h, h, 1 - h, 1 - h]];
            x.resize = J0.image.cropAndResize(e, T, [0], [m, m]);
          } else x.resize = J0.image.resizeBilinear(e, [m, m], !1);
          S5
            ? ((x.mul = J0.mul(x.resize, 255)),
              (x.normalize = J0.sub(x.mul, [103.939, 116.779, 123.68])),
              (x.emotion = k0 == null ? void 0 : k0.execute(x.normalize)))
            : ((x.channels = J0.mul(x.resize, C.rgb)),
              (x.grayscale = J0.sum(x.channels, 3, !0)),
              (x.grayscaleSub = J0.sub(x.grayscale, C.tf05)),
              (x.grayscaleMul = J0.mul(x.grayscaleSub, C.tf2)),
              (x.emotion = k0 == null ? void 0 : k0.execute(x.grayscaleMul))),
            (Z3 = v());
          let f = await x.emotion.data();
          for (let h = 0; h < f.length; h++)
            f[h] > (t.face.emotion.minConfidence || 0) &&
              c.push({
                score: Math.min(0.99, Math.trunc(100 * f[h]) / 100),
                emotion: z5[h],
              });
          c.sort((h, T) => T.score - h.score),
            Object.keys(x).forEach((h) => J0.dispose(x[h]));
        }
        (ht[n] = c), (V3 = o), l(c);
      }));
}
var ie = Z(H());
var w0,
  Fe = [],
  U3 = 0,
  Y3 = 0,
  N5 = Number.MAX_SAFE_INTEGER;
async function K3(e) {
  var t;
  return (
    R.initial && (w0 = null),
    w0
      ? e.debug && b("cached model:", w0.modelUrl)
      : (w0 = await L((t = e.face.description) == null ? void 0 : t.modelPath)),
    w0
  );
}
function bA(e, t) {
  var s, A;
  let n = e.image || e.tensor || e;
  if (!(w0 != null && w0.inputs[0].shape)) return n;
  let o;
  if (((s = t.face.description) == null ? void 0 : s.crop) > 0) {
    let a = (A = t.face.description) == null ? void 0 : A.crop,
      l = [[a, a, 1 - a, 1 - a]];
    o = ie.image.cropAndResize(
      n,
      l,
      [0],
      [w0.inputs[0].shape[2], w0.inputs[0].shape[1]]
    );
  } else
    o = ie.image.resizeBilinear(
      n,
      [w0.inputs[0].shape[2], w0.inputs[0].shape[1]],
      !1
    );
  let r = ie.mul(o, C.tf255);
  return ie.dispose(o), r;
}
async function I5(e, t, n, o) {
  var a, l, c, d;
  let r = { age: 0, gender: "unknown", genderScore: 0, descriptor: [] };
  if (!(w0 != null && w0.executor)) return r;
  let s =
      N5 < (((a = t.face.description) == null ? void 0 : a.skipFrames) || 0),
    A =
      (((l = t.face.description) == null ? void 0 : l.skipTime) || 0) >
      v() - U3;
  return t.skipAllowed &&
    s &&
    A &&
    Y3 === o &&
    ((c = Fe == null ? void 0 : Fe[n]) == null ? void 0 : c.age) > 0 &&
    ((d = Fe == null ? void 0 : Fe[n]) == null ? void 0 : d.genderScore) > 0
    ? (N5++, Fe[n])
    : ((N5 = 0),
      new Promise(async (i) => {
        var y;
        if ((y = t.face.description) != null && y.enabled) {
          let x = bA(e, t),
            m = w0 == null ? void 0 : w0.execute(x);
          (U3 = v()), ie.dispose(x);
          let h = await m.find((B) => B.shape[1] === 1).data(),
            T = Math.trunc(200 * Math.abs(h[0] - 0.5)) / 100;
          T > (t.face.description.minConfidence || 0) &&
            ((r.gender = h[0] <= 0.5 ? "female" : "male"),
            (r.genderScore = Math.min(0.99, T)));
          let g = ie.argMax(
              m.find((B) => B.shape[1] === 100),
              1
            ),
            p = (await g.data())[0];
          ie.dispose(g);
          let k = await m.find((B) => B.shape[1] === 100).data();
          (r.age =
            Math.round(
              k[p - 1] > k[p + 1]
                ? 10 * p - 100 * k[p - 1]
                : 10 * p + 100 * k[p + 1]
            ) / 10),
            (Number.isNaN(h[0]) || Number.isNaN(k[0])) &&
              b("faceres error:", { model: w0, result: m });
          let P = m.find((B) => B.shape[1] === 1024),
            N = P ? await P.data() : [];
          (r.descriptor = Array.from(N)), m.forEach((B) => ie.dispose(B));
        }
        (Fe[n] = r), (Y3 = o), i(r);
      }));
}
var g2 = 0.1,
  O5 = 0.5;
function gA(e, t, n) {
  let o = !1,
    r = n.length - 1;
  for (let s = 0; s < n.length; r = s++)
    n[s].y > t != n[r].y > t &&
      e < ((n[r].x - n[s].x) * (t - n[s].y)) / (n[r].y - n[s].y) + n[s].x &&
      (o = !o);
  return o;
}
async function Q3(e) {
  if (!e.tensor || !e.mesh || e.mesh.length < 100) return e.tensor;
  let t = e.tensor.shape[2] || 0,
    n = e.tensor.shape[1] || 0,
    o = await e.tensor.buffer(),
    r = [];
  for (let A of ae.silhouette)
    r.push({
      x: (e.mesh[A][0] - e.box[0]) / e.box[2],
      y: (e.mesh[A][1] - e.box[1]) / e.box[3],
    });
  g2 &&
    g2 > 0 &&
    (r = r.map((A) => ({
      x: A.x > 0.5 ? A.x + g2 : A.x - g2,
      y: A.y > 0.5 ? A.y + g2 : A.y - g2,
    })));
  for (let A = 0; A < t; A++)
    for (let a = 0; a < n; a++)
      gA(A / t, a / t, r) ||
        (o.set(O5 * o.get(0, a, A, 0), 0, a, A, 0),
        o.set(O5 * o.get(0, a, A, 1), 0, a, A, 1),
        o.set(O5 * o.get(0, a, A, 2), 0, a, A, 2));
  return o.toTensor();
}
var gt = Z(H());
var E0,
  bt = [],
  L5 = Number.MAX_SAFE_INTEGER,
  _3 = 0,
  $3 = 0;
async function en(e) {
  var t;
  return (
    R.initial && (E0 = null),
    E0
      ? e.debug && b("cached model:", E0.modelUrl)
      : (E0 = await L((t = e.face.antispoof) == null ? void 0 : t.modelPath)),
    E0
  );
}
async function C5(e, t, n, o) {
  var A, a;
  if (!(E0 != null && E0.executor)) return 0;
  let r =
      (((A = t.face.antispoof) == null ? void 0 : A.skipTime) || 0) > v() - $3,
    s = L5 < (((a = t.face.antispoof) == null ? void 0 : a.skipFrames) || 0);
  return t.skipAllowed && r && s && _3 === o && bt[n]
    ? (L5++, bt[n])
    : ((L5 = 0),
      new Promise(async (l) => {
        let c = gt.image.resizeBilinear(
            e,
            [
              E0 != null && E0.inputs[0].shape ? E0.inputs[0].shape[2] : 0,
              E0 != null && E0.inputs[0].shape ? E0.inputs[0].shape[1] : 0,
            ],
            !1
          ),
          d = E0 == null ? void 0 : E0.execute(c),
          i = (await d.data())[0];
        (bt[n] = Math.round(100 * i) / 100),
          (_3 = o),
          ($3 = v()),
          gt.dispose([c, d]),
          l(bt[n]);
      }));
}
var vt = Z(H());
var z0,
  Tt = [],
  W5 = Number.MAX_SAFE_INTEGER,
  nn = 0,
  on = 0;
async function rn(e) {
  var t;
  return (
    R.initial && (z0 = null),
    z0
      ? e.debug && b("cached model:", z0.modelUrl)
      : (z0 = await L((t = e.face.liveness) == null ? void 0 : t.modelPath)),
    z0
  );
}
async function D5(e, t, n, o) {
  var A, a;
  if (!(z0 != null && z0.executor)) return 0;
  let r =
      (((A = t.face.liveness) == null ? void 0 : A.skipTime) || 0) > v() - on,
    s = W5 < (((a = t.face.liveness) == null ? void 0 : a.skipFrames) || 0);
  return t.skipAllowed && r && s && nn === o && Tt[n]
    ? (W5++, Tt[n])
    : ((W5 = 0),
      new Promise(async (l) => {
        let c = vt.image.resizeBilinear(
            e,
            [
              z0 != null && z0.inputs[0].shape ? z0.inputs[0].shape[2] : 0,
              z0 != null && z0.inputs[0].shape ? z0.inputs[0].shape[1] : 0,
            ],
            !1
          ),
          d = z0 == null ? void 0 : z0.execute(c),
          i = (await d.data())[0];
        (Tt[n] = Math.round(100 * i) / 100),
          (nn = o),
          (on = v()),
          vt.dispose([c, d]),
          l(Tt[n]);
      }));
}
var Rt = Z(H());
var le,
  F5 = [],
  vA = ["white", "black", "asian", "indian", "other"],
  RA = [15, 23, 28, 35.5, 45.5, 55.5, 65],
  An = 0,
  an = 0,
  B5 = Number.MAX_SAFE_INTEGER;
async function ln(e) {
  var t;
  return (
    R.initial && (le = null),
    le
      ? e.debug && b("cached model:", le.modelUrl)
      : (le = await L((t = e.face.gear) == null ? void 0 : t.modelPath)),
    le
  );
}
async function H5(e, t, n, o) {
  var A, a;
  if (!le) return { age: 0, gender: "unknown", genderScore: 0, race: [] };
  let r = B5 < (((A = t.face.gear) == null ? void 0 : A.skipFrames) || 0),
    s = (((a = t.face.gear) == null ? void 0 : a.skipTime) || 0) > v() - an;
  return t.skipAllowed && s && r && An === o && F5[n]
    ? (B5++, F5[n])
    : ((B5 = 0),
      new Promise(async (l) => {
        var T, g, p, u;
        if (!(le != null && le.inputs[0].shape)) return;
        let c = {},
          d = [[0, 0.1, 0.9, 0.9]];
        if (((T = t.face.gear) == null ? void 0 : T.crop) > 0) {
          let k = (g = t.face.gear) == null ? void 0 : g.crop;
          d = [[k, k, 1 - k, 1 - k]];
        }
        c.resize = Rt.image.cropAndResize(
          e,
          d,
          [0],
          [le.inputs[0].shape[2], le.inputs[0].shape[1]]
        );
        let i = { age: 0, gender: "unknown", genderScore: 0, race: [] };
        (p = t.face.gear) != null &&
          p.enabled &&
          ([c.age, c.gender, c.race] = le.execute(c.resize, [
            "age_output",
            "gender_output",
            "race_output",
          ]));
        let y = await c.gender.data();
        (i.gender = y[0] > y[1] ? "male" : "female"),
          (i.genderScore = Math.round(100 * (y[0] > y[1] ? y[0] : y[1])) / 100);
        let x = await c.race.data();
        for (let k = 0; k < x.length; k++)
          x[k] >
            (((u = t.face.gear) == null ? void 0 : u.minConfidence) || 0.2) &&
            i.race.push({ score: Math.round(100 * x[k]) / 100, race: vA[k] });
        i.race.sort((k, P) => P.score - k.score);
        let f = Array.from(await c.age.data())
            .map((k, P) => [RA[P], k])
            .sort((k, P) => P[1] - k[1]),
          h = f[0][0];
        for (let k = 1; k < f.length; k++) h += f[k][1] * (f[k][0] - h);
        (i.age = Math.round(10 * h) / 10),
          Object.keys(c).forEach((k) => Rt.dispose(c[k])),
          (F5[n] = i),
          (An = o),
          (an = v()),
          l(i);
      }));
}
var s2 = Z(H());
var H0,
  Mt = [],
  dn = 0,
  xn = 0,
  G5 = Number.MAX_SAFE_INTEGER;
async function yn(e) {
  return (
    R.initial && (H0 = null),
    H0
      ? e.debug && b("cached model:", H0.modelUrl)
      : (H0 = await L(e.face.ssrnet.modelPathAge)),
    H0
  );
}
async function V5(e, t, n, o) {
  var A, a, l, c;
  if (!H0) return { age: 0 };
  let r = G5 < (((A = t.face.ssrnet) == null ? void 0 : A.skipFrames) || 0),
    s = (((a = t.face.ssrnet) == null ? void 0 : a.skipTime) || 0) > v() - xn;
  return t.skipAllowed &&
    r &&
    s &&
    dn === o &&
    (l = Mt[n]) != null &&
    l.age &&
    ((c = Mt[n]) == null ? void 0 : c.age) > 0
    ? (G5++, Mt[n])
    : ((G5 = 0),
      new Promise(async (d) => {
        var x, m, f;
        if (!(H0 != null && H0.inputs) || !H0.inputs[0] || !H0.inputs[0].shape)
          return;
        let i = {};
        if (((x = t.face.ssrnet) == null ? void 0 : x.crop) > 0) {
          let h = (m = t.face.ssrnet) == null ? void 0 : m.crop,
            T = [[h, h, 1 - h, 1 - h]];
          i.resize = s2.image.cropAndResize(
            e,
            T,
            [0],
            [H0.inputs[0].shape[2], H0.inputs[0].shape[1]]
          );
        } else
          i.resize = s2.image.resizeBilinear(
            e,
            [H0.inputs[0].shape[2], H0.inputs[0].shape[1]],
            !1
          );
        i.enhance = s2.mul(i.resize, C.tf255);
        let y = { age: 0 };
        if (
          ((f = t.face.ssrnet) != null &&
            f.enabled &&
            (i.age = H0.execute(i.enhance)),
          i.age)
        ) {
          let h = await i.age.data();
          y.age = Math.trunc(10 * h[0]) / 10;
        }
        Object.keys(i).forEach((h) => s2.dispose(i[h])),
          (Mt[n] = y),
          (dn = o),
          (xn = v()),
          d(y);
      }));
}
var R0 = Z(H());
var I0,
  Pt = [],
  mn = 0,
  pn = 0,
  Z5 = Number.MAX_SAFE_INTEGER,
  q5 = [0.2989, 0.587, 0.114];
async function un(e) {
  var t;
  return (
    R.initial && (I0 = null),
    I0
      ? e.debug && b("cached model:", I0.modelUrl)
      : (I0 = await L(
          (t = e.face.ssrnet) == null ? void 0 : t.modelPathGender
        )),
    I0
  );
}
async function X5(e, t, n, o) {
  var A, a, l, c;
  if (!I0) return { gender: "unknown", genderScore: 0 };
  let r = Z5 < (((A = t.face.ssrnet) == null ? void 0 : A.skipFrames) || 0),
    s = (((a = t.face.ssrnet) == null ? void 0 : a.skipTime) || 0) > v() - pn;
  return t.skipAllowed &&
    r &&
    s &&
    mn === o &&
    (l = Pt[n]) != null &&
    l.gender &&
    ((c = Pt[n]) == null ? void 0 : c.genderScore) > 0
    ? (Z5++, Pt[n])
    : ((Z5 = 0),
      new Promise(async (d) => {
        var m, f, h;
        if (!(I0 != null && I0.inputs[0].shape)) return;
        let i = {};
        if (((m = t.face.ssrnet) == null ? void 0 : m.crop) > 0) {
          let T = (f = t.face.ssrnet) == null ? void 0 : f.crop,
            g = [[T, T, 1 - T, 1 - T]];
          i.resize = R0.image.cropAndResize(
            e,
            g,
            [0],
            [I0.inputs[0].shape[2], I0.inputs[0].shape[1]]
          );
        } else
          i.resize = R0.image.resizeBilinear(
            e,
            [I0.inputs[0].shape[2], I0.inputs[0].shape[1]],
            !1
          );
        i.enhance = R0.tidy(() => {
          var g, p;
          let T;
          if (
            ((p =
              (g = I0 == null ? void 0 : I0.inputs) == null
                ? void 0
                : g[0].shape) == null
              ? void 0
              : p[3]) === 1
          ) {
            let [u, k, P] = R0.split(i.resize, 3, 3),
              N = R0.mul(u, q5[0]),
              B = R0.mul(k, q5[1]),
              J = R0.mul(P, q5[2]),
              G = R0.addN([N, B, J]);
            T = R0.mul(R0.sub(G, C.tf05), 2);
          } else T = R0.mul(R0.sub(i.resize, C.tf05), 2);
          return T;
        });
        let y = { gender: "unknown", genderScore: 0 };
        (h = t.face.ssrnet) != null &&
          h.enabled &&
          (i.gender = I0.execute(i.enhance));
        let x = await i.gender.data();
        (y.gender = x[0] > x[1] ? "female" : "male"),
          (y.genderScore =
            x[0] > x[1]
              ? Math.trunc(100 * x[0]) / 100
              : Math.trunc(100 * x[1]) / 100),
          Object.keys(i).forEach((T) => R0.dispose(i[T])),
          (Pt[n] = y),
          (mn = o),
          (pn = v()),
          d(y);
      }));
}
var kt = Z(H());
var Q0,
  U5 = [],
  bn = 0,
  gn = 0,
  Tn = Number.MAX_SAFE_INTEGER;
async function vn(e) {
  var t;
  return (
    R.initial && (Q0 = null),
    Q0
      ? e.debug && b("cached model:", Q0.modelUrl)
      : (Q0 = await L(
          (t = e.face.mobilefacenet) == null ? void 0 : t.modelPath
        )),
    Q0
  );
}
async function Y5(e, t, n, o) {
  var A, a;
  if (!(Q0 != null && Q0.executor)) return [];
  let r =
      Tn < (((A = t.face.mobilefacenet) == null ? void 0 : A.skipFrames) || 0),
    s =
      (((a = t.face.mobilefacenet) == null ? void 0 : a.skipTime) || 0) >
      v() - gn;
  return t.skipAllowed && s && r && bn === o && U5[n]
    ? (Tn++, U5[n])
    : new Promise(async (l) => {
        var d;
        let c = [];
        if (
          (d = t.face.mobilefacenet) != null &&
          d.enabled &&
          Q0 != null &&
          Q0.inputs[0].shape
        ) {
          let i = {};
          (i.crop = kt.image.resizeBilinear(
            e,
            [Q0.inputs[0].shape[2], Q0.inputs[0].shape[1]],
            !1
          )),
            (i.data = Q0.execute(i.crop));
          let y = await i.data.data();
          (c = Array.from(y)), Object.keys(i).forEach((x) => kt.dispose(i[x]));
        }
        (U5[n] = c), (bn = o), (gn = v()), l(c);
      });
}
var wt = Z(H());
var _0,
  K5 = [],
  Mn = 0,
  Pn = 0,
  kn = Number.MAX_SAFE_INTEGER;
async function wn(e) {
  return (
    R.initial && (_0 = null),
    _0
      ? e.debug && b("cached model:", _0.modelUrl)
      : (_0 = await L(e.face.insightface.modelPath)),
    _0
  );
}
async function J5(e, t, n, o) {
  var A, a;
  if (!(_0 != null && _0.executor)) return [];
  let r =
      kn < (((A = t.face.insightface) == null ? void 0 : A.skipFrames) || 0),
    s =
      (((a = t.face.insightface) == null ? void 0 : a.skipTime) || 0) >
      v() - Pn;
  return t.skipAllowed && s && r && Mn === o && K5[n]
    ? (kn++, K5[n])
    : new Promise(async (l) => {
        var d;
        let c = [];
        if (
          (d = t.face.insightface) != null &&
          d.enabled &&
          _0 != null &&
          _0.inputs[0].shape
        ) {
          let i = {};
          (i.crop = wt.image.resizeBilinear(
            e,
            [_0.inputs[0].shape[2], _0.inputs[0].shape[1]],
            !1
          )),
            (i.data = _0.execute(i.crop));
          let y = await i.data.data();
          (c = Array.from(y)), Object.keys(i).forEach((x) => wt.dispose(i[x]));
        }
        (K5[n] = c), (Mn = o), (Pn = v()), l(c);
      });
}
var MA = (e) => {
    let t = (i, y) => Math.atan2(i[1] - y[1], i[0] - y[0]);
    if (!e.annotations.rightEyeIris || !e.annotations.leftEyeIris)
      return { bearing: 0, strength: 0 };
    let n = [0, -0.1],
      o = 1,
      r = (e.mesh[33][2] || 0) > (e.mesh[263][2] || 0),
      s = r ? e.mesh[473] : e.mesh[468],
      A = r
        ? [
            (e.mesh[133][0] + e.mesh[33][0]) / 2,
            (e.mesh[133][1] + e.mesh[33][1]) / 2,
          ]
        : [
            (e.mesh[263][0] + e.mesh[362][0]) / 2,
            (e.mesh[263][1] + e.mesh[362][1]) / 2,
          ],
      a = r
        ? [e.mesh[133][0] - e.mesh[33][0], e.mesh[23][1] - e.mesh[27][1]]
        : [e.mesh[263][0] - e.mesh[362][0], e.mesh[253][1] - e.mesh[257][1]],
      l = [(A[0] - s[0]) / a[0] - n[0], (o * (s[1] - A[1])) / a[1] - n[1]],
      c = Math.sqrt(l[0] * l[0] + l[1] * l[1]);
    return (
      (c = Math.min(c, e.boxRaw[2] / 2, e.boxRaw[3] / 2)),
      { bearing: (t([0, 0], l) + Math.PI / 2) % Math.PI, strength: c }
    );
  },
  zn = (e, t) => {
    let n = (f) => {
        let h = Math.sqrt(f[0] * f[0] + f[1] * f[1] + f[2] * f[2]);
        return (f[0] /= h), (f[1] /= h), (f[2] /= h), f;
      },
      o = (f, h) => {
        let T = f[0] - h[0],
          g = f[1] - h[1],
          p = f[2] - h[2];
        return [T, g, p];
      },
      r = (f, h) => {
        let T = f[1] * h[2] - f[2] * h[1],
          g = f[2] * h[0] - f[0] * h[2],
          p = f[0] * h[1] - f[1] * h[0];
        return [T, g, p];
      },
      s = (f) => {
        let [h, T, g, p, u, k, P, N, B] = f,
          J,
          G,
          K;
        if (p < 1)
          if (p > -1) {
            let e0 = Math.sqrt(h * h + P * P);
            (K = Math.atan2(p, e0)),
              (G = Math.atan2(-P, h)),
              (J = Math.atan2(-k, u));
          } else (K = -Math.PI / 2), (G = -Math.atan2(N, B)), (J = 0);
        else (K = Math.PI / 2), (G = Math.atan2(N, B)), (J = 0);
        return (
          Number.isNaN(J) && (J = 0),
          Number.isNaN(G) && (G = 0),
          Number.isNaN(K) && (K = 0),
          { pitch: -J, yaw: -G, roll: -K }
        );
      },
      A = e.meshRaw;
    if (!A || A.length < 300)
      return {
        angle: { pitch: 0, yaw: 0, roll: 0 },
        matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1],
        gaze: { bearing: 0, strength: 0 },
      };
    let a = Math.max(e.boxRaw[2] * t[0], e.boxRaw[3] * t[1]) / 1.5,
      l = [A[10], A[152], A[234], A[454]].map((f) => [
        (f[0] * t[0]) / a,
        (f[1] * t[1]) / a,
        f[2],
      ]),
      c = n(o(l[1], l[0])),
      d = n(o(l[3], l[2])),
      i = n(r(d, c));
    d = r(c, i);
    let y = [d[0], d[1], d[2], c[0], c[1], c[2], i[0], i[1], i[2]],
      x = s(y),
      m = A.length === 478 ? MA(e) : { bearing: 0, strength: 0 };
    return { angle: x, matrix: y, gaze: m };
  };
function Sn(e, t) {
  let n = e == null ? void 0 : e.annotations;
  if (!(n != null && n.leftEyeIris) || !(n != null && n.rightEyeIris)) return 0;
  let o =
    Math.max(
      Math.abs(n.leftEyeIris[3][0] - n.leftEyeIris[1][0]),
      Math.abs(n.rightEyeIris[3][0] - n.rightEyeIris[1][0])
    ) / t;
  return Math.round(1.17 / o) / 100;
}
var Q5 = async (e, t) => {
  var m,
    f,
    h,
    T,
    g,
    p,
    u,
    k,
    P,
    N,
    B,
    J,
    G,
    K,
    e0,
    n0,
    o0,
    N0,
    M,
    T0,
    C0,
    x0,
    Q;
  let n = v(),
    o,
    r,
    s,
    A,
    a,
    l,
    c,
    d,
    i,
    y = [];
  e.state = "run:face";
  let x = await F3(t, e.config);
  if (
    ((e.performance.face = R.perfadd
      ? (e.performance.face || 0) + Math.trunc(v() - n)
      : Math.trunc(v() - n)),
    !t.shape || t.shape.length !== 4)
  )
    return [];
  if (!x) return [];
  for (let E = 0; E < x.length; E++) {
    if (
      (e.analyze("Get Face"), !x[E].tensor || x[E].tensor.isDisposedInternal)
    ) {
      b("Face object is disposed:", x[E].tensor);
      continue;
    }
    if ((m = e.config.face.detector) != null && m.mask) {
      let ze = await Q3(x[E]);
      c0.dispose(x[E].tensor), ze && (x[E].tensor = ze);
    }
    let V =
      x[E].mesh && x[E].mesh.length > 200
        ? zn(x[E], [t.shape[2], t.shape[1]])
        : null;
    e.analyze("Start Emotion:"),
      e.config.async
        ? (A =
            (f = e.config.face.emotion) != null && f.enabled
              ? j5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : [])
        : ((e.state = "run:emotion"),
          (n = v()),
          (A =
            (h = e.config.face.emotion) != null && h.enabled
              ? await j5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : []),
          (e.performance.emotion = R.perfadd
            ? (e.performance.emotion || 0) + Math.trunc(v() - n)
            : Math.trunc(v() - n))),
      e.analyze("End Emotion:"),
      e.analyze("Start AntiSpoof:"),
      e.config.async
        ? (c =
            (T = e.config.face.antispoof) != null && T.enabled
              ? C5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : 0)
        : ((e.state = "run:antispoof"),
          (n = v()),
          (c =
            (g = e.config.face.antispoof) != null && g.enabled
              ? await C5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : 0),
          (e.performance.antispoof = R.perfadd
            ? (e.performance.antispoof || 0) + Math.trunc(v() - n)
            : Math.trunc(v() - n))),
      e.analyze("End AntiSpoof:"),
      e.analyze("Start Liveness:"),
      e.config.async
        ? (d =
            (p = e.config.face.liveness) != null && p.enabled
              ? D5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : 0)
        : ((e.state = "run:liveness"),
          (n = v()),
          (d =
            (u = e.config.face.liveness) != null && u.enabled
              ? await D5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : 0),
          (e.performance.liveness = R.perfadd
            ? (e.performance.antispoof || 0) + Math.trunc(v() - n)
            : Math.trunc(v() - n))),
      e.analyze("End Liveness:"),
      e.analyze("Start GEAR:"),
      e.config.async
        ? (r =
            (k = e.config.face.gear) != null && k.enabled
              ? H5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null)
        : ((e.state = "run:gear"),
          (n = v()),
          (r =
            (P = e.config.face.gear) != null && P.enabled
              ? await H5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null),
          (e.performance.gear = Math.trunc(v() - n))),
      e.analyze("End GEAR:"),
      e.analyze("Start SSRNet:"),
      e.config.async
        ? ((o =
            (N = e.config.face.ssrnet) != null && N.enabled
              ? V5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null),
          (s =
            (B = e.config.face.ssrnet) != null && B.enabled
              ? X5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null))
        : ((e.state = "run:ssrnet"),
          (n = v()),
          (o =
            (J = e.config.face.ssrnet) != null && J.enabled
              ? await V5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null),
          (s =
            (G = e.config.face.ssrnet) != null && G.enabled
              ? await X5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null),
          (e.performance.ssrnet = Math.trunc(v() - n))),
      e.analyze("End SSRNet:"),
      e.analyze("Start MobileFaceNet:"),
      e.config.async
        ? (a =
            (K = e.config.face.mobilefacenet) != null && K.enabled
              ? Y5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null)
        : ((e.state = "run:mobilefacenet"),
          (n = v()),
          (a =
            (e0 = e.config.face.mobilefacenet) != null && e0.enabled
              ? await Y5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null),
          (e.performance.mobilefacenet = Math.trunc(v() - n))),
      e.analyze("End MobileFaceNet:"),
      e.analyze("Start InsightFace:"),
      e.config.async
        ? (l =
            (n0 = e.config.face.insightface) != null && n0.enabled
              ? J5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null)
        : ((e.state = "run:mobilefacenet"),
          (n = v()),
          (l =
            (o0 = e.config.face.insightface) != null && o0.enabled
              ? await J5(x[E].tensor || c0.tensor([]), e.config, E, x.length)
              : null),
          (e.performance.mobilefacenet = Math.trunc(v() - n))),
      e.analyze("End InsightFace:"),
      e.analyze("Start Description:"),
      e.config.async
        ? (i = I5(x[E].tensor || c0.tensor([]), e.config, E, x.length))
        : ((e.state = "run:description"),
          (n = v()),
          (i = await I5(x[E].tensor || c0.tensor([]), e.config, E, x.length)),
          (e.performance.description = R.perfadd
            ? (e.performance.description || 0) + Math.trunc(v() - n)
            : Math.trunc(v() - n))),
      e.analyze("End Description:"),
      e.config.async &&
        ([o, s, A, a, l, i, r, c, d] = await Promise.all([
          o,
          s,
          A,
          a,
          l,
          i,
          r,
          c,
          d,
        ])),
      e.analyze("Finish Face:"),
      (N0 = e.config.face.ssrnet) != null &&
        N0.enabled &&
        o &&
        s &&
        (i = {
          ...i,
          age: o.age,
          gender: s.gender,
          genderScore: s.genderScore,
        }),
      (M = e.config.face.gear) != null &&
        M.enabled &&
        r &&
        (i = {
          ...i,
          age: r.age,
          gender: r.gender,
          genderScore: r.genderScore,
          race: r.race,
        }),
      (T0 = e.config.face.mobilefacenet) != null &&
        T0.enabled &&
        a &&
        (i.descriptor = a),
      (C0 = e.config.face.insightface) != null &&
        C0.enabled &&
        l &&
        (i.descriptor = l);
    let q =
        (x0 = e.config.face.iris) != null && x0.enabled
          ? Sn(x[E], t.shape[2])
          : 0,
      U0 =
        (Q = e.config.face.detector) != null && Q.return
          ? c0.squeeze(x[E].tensor)
          : null;
    c0.dispose(x[E].tensor), x[E].tensor && delete x[E].tensor;
    let y0 = { ...x[E], id: E };
    i.age && (y0.age = i.age),
      i.gender && (y0.gender = i.gender),
      i.genderScore && (y0.genderScore = i.genderScore),
      i.descriptor && (y0.embedding = i.descriptor),
      i.race && (y0.race = i.race),
      A && (y0.emotion = A),
      c && (y0.real = c),
      d && (y0.live = d),
      q > 0 && (y0.distance = q),
      V && (y0.rotation = V),
      U0 && (y0.tensor = U0),
      y.push(y0),
      e.analyze("End Face");
  }
  return (
    e.analyze("End FaceMesh:"),
    e.config.async &&
      (e.performance.face && delete e.performance.face,
      e.performance.age && delete e.performance.age,
      e.performance.gender && delete e.performance.gender,
      e.performance.emotion && delete e.performance.emotion),
    y
  );
};
var G0 = {
    thumb: 0,
    index: 1,
    middle: 2,
    ring: 3,
    pinky: 4,
    all: [0, 1, 2, 3, 4],
    nameMapping: { 0: "thumb", 1: "index", 2: "middle", 3: "ring", 4: "pinky" },
    pointsMapping: {
      0: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      1: [
        [0, 5],
        [5, 6],
        [6, 7],
        [7, 8],
      ],
      2: [
        [0, 9],
        [9, 10],
        [10, 11],
        [11, 12],
      ],
      3: [
        [0, 13],
        [13, 14],
        [14, 15],
        [15, 16],
      ],
      4: [
        [0, 17],
        [17, 18],
        [18, 19],
        [19, 20],
      ],
    },
    getName: (e) => G0.nameMapping[e],
    getPoints: (e) => G0.pointsMapping[e],
  },
  He = {
    none: 0,
    half: 1,
    full: 2,
    nameMapping: { 0: "none", 1: "half", 2: "full" },
    getName: (e) => He.nameMapping[e],
  },
  d0 = {
    verticalUp: 0,
    verticalDown: 1,
    horizontalLeft: 2,
    horizontalRight: 3,
    diagonalUpRight: 4,
    diagonalUpLeft: 5,
    diagonalDownRight: 6,
    diagonalDownLeft: 7,
    nameMapping: {
      0: "verticalUp",
      1: "verticalDown",
      2: "horizontalLeft",
      3: "horizontalRight",
      4: "diagonalUpRight",
      5: "diagonalUpLeft",
      6: "diagonalDownRight",
      7: "diagonalDownLeft",
    },
    getName: (e) => d0.nameMapping[e],
  },
  Be = class {
    constructor(t) {
      w(this, "name");
      w(this, "curls");
      w(this, "directions");
      w(this, "weights");
      w(this, "weightsRelative");
      (this.name = t),
        (this.curls = {}),
        (this.directions = {}),
        (this.weights = [1, 1, 1, 1, 1]),
        (this.weightsRelative = [1, 1, 1, 1, 1]);
    }
    curl(t, n, o) {
      typeof this.curls[t] == "undefined" && (this.curls[t] = []),
        this.curls[t].push([n, o]);
    }
    direction(t, n, o) {
      this.directions[t] || (this.directions[t] = []),
        this.directions[t].push([n, o]);
    }
    weight(t, n) {
      this.weights[t] = n;
      let o = this.weights.reduce((r, s) => r + s, 0);
      this.weightsRelative = this.weights.map((r) => (r * 5) / o);
    }
    matchAgainst(t, n) {
      let o = 0;
      for (let r in t) {
        let s = t[r],
          A = this.curls[r];
        if (typeof A == "undefined") {
          o += this.weightsRelative[r];
          continue;
        }
        for (let [a, l] of A)
          if (s === a) {
            o += l * this.weightsRelative[r];
            break;
          }
      }
      for (let r in n) {
        let s = n[r],
          A = this.directions[r];
        if (typeof A == "undefined") {
          o += this.weightsRelative[r];
          continue;
        }
        for (let [a, l] of A)
          if (s === a) {
            o += l * this.weightsRelative[r];
            break;
          }
      }
      return o / 10;
    }
  };
var { thumb: fe, index: ke, middle: we, ring: A2, pinky: a2 } = G0,
  { none: me, half: kA, full: pe } = He,
  {
    verticalUp: T2,
    verticalDown: _i,
    horizontalLeft: _5,
    horizontalRight: wA,
    diagonalUpRight: EA,
    diagonalUpLeft: v2,
    diagonalDownRight: $i,
    diagonalDownLeft: e7,
  } = d0,
  Ge = new Be("thumbs up");
Ge.curl(fe, me, 1);
Ge.direction(fe, T2, 1);
Ge.direction(fe, v2, 0.25);
Ge.direction(fe, EA, 0.25);
for (let e of [G0.index, G0.middle, G0.ring, G0.pinky])
  Ge.curl(e, pe, 1), Ge.direction(e, _5, 1), Ge.direction(e, wA, 1);
var h0 = new Be("victory");
h0.curl(fe, kA, 0.5);
h0.curl(fe, me, 0.5);
h0.direction(fe, T2, 1);
h0.direction(fe, v2, 1);
h0.curl(ke, me, 1);
h0.direction(ke, T2, 0.75);
h0.direction(ke, v2, 1);
h0.curl(we, me, 1);
h0.direction(we, T2, 1);
h0.direction(we, v2, 0.75);
h0.curl(A2, pe, 1);
h0.direction(A2, T2, 0.2);
h0.direction(A2, v2, 1);
h0.direction(A2, _5, 0.2);
h0.curl(a2, pe, 1);
h0.direction(a2, T2, 0.2);
h0.direction(a2, v2, 1);
h0.direction(a2, _5, 0.2);
h0.weight(ke, 2);
h0.weight(we, 2);
var Ve = new Be("point");
Ve.curl(fe, pe, 1);
Ve.curl(ke, me, 0.5);
Ve.curl(we, pe, 0.5);
Ve.curl(A2, pe, 0.5);
Ve.curl(a2, pe, 0.5);
Ve.weight(ke, 2);
Ve.weight(we, 2);
var Ze = new Be("middle finger");
Ze.curl(fe, me, 1);
Ze.curl(ke, pe, 0.5);
Ze.curl(we, pe, 0.5);
Ze.curl(A2, pe, 0.5);
Ze.curl(a2, pe, 0.5);
Ze.weight(ke, 2);
Ze.weight(we, 2);
var R2 = new Be("open palm");
R2.curl(fe, me, 0.75);
R2.curl(ke, me, 0.75);
R2.curl(we, me, 0.75);
R2.curl(A2, me, 0.75);
R2.curl(a2, me, 0.75);
var jn = [Ge, h0, Ve, Ze, R2];
var zA = 0.7,
  i2 = {
    HALF_CURL_START_LIMIT: 60,
    NO_CURL_START_LIMIT: 130,
    DISTANCE_VOTE_POWER: 1.1,
    SINGLE_ANGLE_VOTE_POWER: 0.9,
    TOTAL_ANGLE_VOTE_POWER: 1.6,
  };
function Nn(e, t, n, o) {
  let r = (t - o) / (e - n),
    s = (Math.atan(r) * 180) / Math.PI;
  return s <= 0 ? (s = -s) : s > 0 && (s = 180 - s), s;
}
function On(e, t) {
  if (!e || !t) return [0, 0];
  let n = Nn(e[0], e[1], t[0], t[1]);
  if (e.length === 2) return n;
  let o = Nn(e[1], e[2], t[1], t[2]);
  return [n, o];
}
function In(e, t = 1) {
  let n = 0,
    o = 0,
    r = 0;
  return (
    e >= 75 && e <= 105
      ? (n = 1 * t)
      : e >= 25 && e <= 155
      ? (o = 1 * t)
      : (r = 1 * t),
    [n, o, r]
  );
}
function SA(e, t, n) {
  let o = e[0] - t[0],
    r = e[0] - n[0],
    s = t[0] - n[0],
    A = e[1] - t[1],
    a = e[1] - n[1],
    l = t[1] - n[1],
    c = e[2] - t[2],
    d = e[2] - n[2],
    i = t[2] - n[2],
    y = Math.sqrt(o * o + A * A + c * c),
    x = Math.sqrt(r * r + a * a + d * d),
    m = Math.sqrt(s * s + l * l + i * i),
    f = (m * m + y * y - x * x) / (2 * m * y);
  f > 1 ? (f = 1) : f < -1 && (f = -1);
  let h = Math.acos(f);
  h = (57.2958 * h) % 180;
  let T;
  return (
    h > i2.NO_CURL_START_LIMIT
      ? (T = He.none)
      : h > i2.HALF_CURL_START_LIMIT
      ? (T = He.half)
      : (T = He.full),
    T
  );
}
function Ln(e, t, n, o) {
  let r;
  return (
    o === Math.abs(e)
      ? e > 0
        ? (r = d0.horizontalLeft)
        : (r = d0.horizontalRight)
      : o === Math.abs(t)
      ? t > 0
        ? (r = d0.horizontalLeft)
        : (r = d0.horizontalRight)
      : n > 0
      ? (r = d0.horizontalLeft)
      : (r = d0.horizontalRight),
    r
  );
}
function Cn(e, t, n, o) {
  let r;
  return (
    o === Math.abs(e)
      ? e < 0
        ? (r = d0.verticalDown)
        : (r = d0.verticalUp)
      : o === Math.abs(t)
      ? t < 0
        ? (r = d0.verticalDown)
        : (r = d0.verticalUp)
      : n < 0
      ? (r = d0.verticalDown)
      : (r = d0.verticalUp),
    r
  );
}
function jA(e, t, n, o, r, s, A, a) {
  let l,
    c = Cn(e, t, n, o),
    d = Ln(r, s, A, a);
  return (
    c === d0.verticalUp
      ? d === d0.horizontalLeft
        ? (l = d0.diagonalUpLeft)
        : (l = d0.diagonalUpRight)
      : d === d0.horizontalLeft
      ? (l = d0.diagonalDownLeft)
      : (l = d0.diagonalDownRight),
    l
  );
}
function NA(e, t, n, o) {
  let r = e[0] - t[0],
    s = e[0] - n[0],
    A = t[0] - n[0],
    a = e[1] - t[1],
    l = e[1] - n[1],
    c = t[1] - n[1],
    d = Math.max(Math.abs(r), Math.abs(s), Math.abs(A)),
    i = Math.max(Math.abs(a), Math.abs(l), Math.abs(c)),
    y = 0,
    x = 0,
    m = 0,
    f = i / (d + 1e-5);
  f > 1.5
    ? (y += i2.DISTANCE_VOTE_POWER)
    : f > 0.66
    ? (x += i2.DISTANCE_VOTE_POWER)
    : (m += i2.DISTANCE_VOTE_POWER);
  let h = Math.sqrt(r * r + a * a),
    T = Math.sqrt(s * s + l * l),
    g = Math.sqrt(A * A + c * c),
    p = Math.max(h, T, g),
    u = e[0],
    k = e[1],
    P = n[0],
    N = n[1];
  p === h ? ((P = n[0]), (N = n[1])) : p === g && ((u = t[0]), (k = t[1]));
  let G = On([u, k], [P, N]),
    K = In(G, i2.TOTAL_ANGLE_VOTE_POWER);
  (y += K[0]), (x += K[1]), (m += K[2]);
  for (let n0 of o) {
    let o0 = In(n0, i2.SINGLE_ANGLE_VOTE_POWER);
    (y += o0[0]), (x += o0[1]), (m += o0[2]);
  }
  let e0;
  return (
    y === Math.max(y, x, m)
      ? (e0 = Cn(l, a, c, i))
      : m === Math.max(x, m)
      ? (e0 = Ln(s, r, A, d))
      : (e0 = jA(l, a, c, i, s, r, A, d)),
    e0
  );
}
function Wn(e) {
  let t = [],
    n = [],
    o = [],
    r = [];
  if (!e) return { curls: o, directions: r };
  for (let s of G0.all) {
    let A = G0.getPoints(s),
      a = [],
      l = [];
    for (let c of A) {
      let d = e[c[0]],
        i = e[c[1]],
        y = On(d, i),
        x = y[0],
        m = y[1];
      a.push(x), l.push(m);
    }
    t.push(a), n.push(l);
  }
  for (let s of G0.all) {
    let A = s === G0.thumb ? 1 : 0,
      a = G0.getPoints(s),
      l = e[a[A][0]],
      c = e[a[A + 1][1]],
      d = e[a[3][1]],
      i = SA(l, c, d),
      y = NA(l, c, d, t[s].slice(A));
    (o[s] = i), (r[s] = y);
  }
  return { curls: o, directions: r };
}
function Et(e) {
  if (!e || e.length === 0) return null;
  let t = Wn(e),
    n = {};
  for (let o of G0.all)
    n[G0.getName(o)] = {
      curl: He.getName(t.curls[o]),
      direction: d0.getName(t.directions[o]),
    };
  return n;
}
function Dn(e) {
  let t = [];
  if (!e || e.length === 0) return t;
  let n = Wn(e);
  for (let o of jn) {
    let r = o.matchAgainst(n.curls, n.directions);
    r >= zA && t.push({ name: o.name, confidence: r });
  }
  return t;
}
var Fn = (e) => {
    if (!e) return [];
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let o = e[n].keypoints.find((l) => l.part === "leftWrist"),
        r = e[n].keypoints.find((l) => l.part === "rightWrist"),
        s = e[n].keypoints.find((l) => l.part === "nose");
      s &&
      o &&
      r &&
      o.position[1] < s.position[1] &&
      r.position[1] < s.position[1]
        ? t.push({ body: n, gesture: "i give up" })
        : s && o && o.position[1] < s.position[1]
        ? t.push({ body: n, gesture: "raise left hand" })
        : s &&
          r &&
          r.position[1] < s.position[1] &&
          t.push({ body: n, gesture: "raise right hand" });
      let A = e[n].keypoints.find((l) => l.part === "leftShoulder"),
        a = e[n].keypoints.find((l) => l.part === "rightShoulder");
      A &&
        a &&
        Math.abs(A.positionRaw[1] - a.positionRaw[1]) > 0.1 &&
        t.push({
          body: n,
          gesture: `leaning ${
            A.position[1] > a.position[1] ? "left" : "right"
          }`,
        });
    }
    return t;
  },
  Bn = (e) => {
    if (!e) return [];
    let t = [];
    for (let n = 0; n < e.length; n++)
      if (e[n].mesh && e[n].mesh.length > 450) {
        let o = (e[n].mesh[33][2] || 0) - (e[n].mesh[263][2] || 0),
          r = e[n].mesh[33][0] - e[n].mesh[263][0];
        Math.abs(o / r) <= 0.15
          ? t.push({ face: n, gesture: "facing center" })
          : t.push({ face: n, gesture: `facing ${o < 0 ? "left" : "right"}` }),
          Math.abs(e[n].mesh[374][1] - e[n].mesh[386][1]) /
            Math.abs(e[n].mesh[443][1] - e[n].mesh[450][1]) <
            0.2 && t.push({ face: n, gesture: "blink left eye" }),
          Math.abs(e[n].mesh[145][1] - e[n].mesh[159][1]) /
            Math.abs(e[n].mesh[223][1] - e[n].mesh[230][1]) <
            0.2 && t.push({ face: n, gesture: "blink right eye" });
        let a = Math.min(
          100,
          (500 * Math.abs(e[n].mesh[13][1] - e[n].mesh[14][1])) /
            Math.abs(e[n].mesh[10][1] - e[n].mesh[152][1])
        );
        a > 10 && t.push({ face: n, gesture: `mouth ${Math.trunc(a)}% open` });
        let l = e[n].mesh[152][2] || 0;
        Math.abs(l) > 10 &&
          t.push({ face: n, gesture: `head ${l < 0 ? "up" : "down"}` });
      }
    return t;
  },
  Hn = (e) => {
    var n, o, r, s;
    if (!e) return [];
    let t = [];
    for (let A = 0; A < e.length; A++) {
      if (
        !(
          (o = (n = e[A].annotations) == null ? void 0 : n.leftEyeIris) !=
            null && o[0]
        ) ||
        !(
          (s = (r = e[A].annotations) == null ? void 0 : r.rightEyeIris) !=
            null && s[0]
        )
      )
        continue;
      let a =
          e[A].annotations.leftEyeIris[3][0] -
          e[A].annotations.leftEyeIris[1][0],
        l =
          e[A].annotations.leftEyeIris[4][1] -
          e[A].annotations.leftEyeIris[2][1],
        c = Math.abs(a * l),
        d =
          e[A].annotations.rightEyeIris[3][0] -
          e[A].annotations.rightEyeIris[1][0],
        i =
          e[A].annotations.rightEyeIris[4][1] -
          e[A].annotations.rightEyeIris[2][1],
        y = Math.abs(d * i),
        x = !1;
      Math.abs(c - y) / Math.max(c, y) < 0.25 &&
        ((x = !0), t.push({ iris: A, gesture: "facing center" }));
      let f =
          Math.abs(e[A].mesh[263][0] - e[A].annotations.leftEyeIris[0][0]) /
          e[A].box[2],
        h =
          Math.abs(e[A].mesh[33][0] - e[A].annotations.rightEyeIris[0][0]) /
          e[A].box[2];
      (f > 0.06 || h > 0.06) && (x = !1),
        f > h
          ? h > 0.04 && t.push({ iris: A, gesture: "looking right" })
          : f > 0.04 && t.push({ iris: A, gesture: "looking left" });
      let T =
          Math.abs(e[A].mesh[145][1] - e[A].annotations.rightEyeIris[0][1]) /
          e[A].box[3],
        g =
          Math.abs(e[A].mesh[374][1] - e[A].annotations.leftEyeIris[0][1]) /
          e[A].box[3];
      (g < 0.01 || T < 0.01 || g > 0.022 || T > 0.022) && (x = !1),
        (g < 0.01 || T < 0.01) && t.push({ iris: A, gesture: "looking down" }),
        (g > 0.022 || T > 0.022) && t.push({ iris: A, gesture: "looking up" }),
        x && t.push({ iris: A, gesture: "looking center" });
    }
    return t;
  },
  Gn = (e) => {
    if (!e) return [];
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let o = [];
      if (e[n].annotations)
        for (let [r, s] of Object.entries(e[n].annotations))
          r !== "palmBase" &&
            Array.isArray(s) &&
            s[0] &&
            o.push({ name: r.toLowerCase(), position: s[0] });
      if (o && o.length > 0) {
        let r = o.reduce((A, a) =>
          (A.position[2] || 0) < (a.position[2] || 0) ? A : a
        );
        t.push({ hand: n, gesture: `${r.name} forward` });
        let s = o.reduce((A, a) => (A.position[1] < a.position[1] ? A : a));
        t.push({ hand: n, gesture: `${s.name} up` });
      }
      if (e[n].keypoints) {
        let r = Dn(e[n].keypoints);
        for (let s of r) t.push({ hand: n, gesture: s.name });
      }
    }
    return t;
  };
var W = Z(H());
var qn = Z(H());
function zt(e) {
  return [
    Math.abs(e.endPoint[0] - e.startPoint[0]),
    Math.abs(e.endPoint[1] - e.startPoint[1]),
  ];
}
function D2(e) {
  return [
    e.startPoint[0] + (e.endPoint[0] - e.startPoint[0]) / 2,
    e.startPoint[1] + (e.endPoint[1] - e.startPoint[1]) / 2,
  ];
}
function Xn(e, t, n) {
  let o = t.shape[1],
    r = t.shape[2],
    s = [
      [
        e.startPoint[1] / o,
        e.startPoint[0] / r,
        e.endPoint[1] / o,
        e.endPoint[0] / r,
      ],
    ];
  return qn.image.cropAndResize(t, s, [0], n);
}
function Un(e, t) {
  let n = [e.startPoint[0] * t[0], e.startPoint[1] * t[1]],
    o = [e.endPoint[0] * t[0], e.endPoint[1] * t[1]],
    r = e.palmLandmarks.map((s) => [s[0] * t[0], s[1] * t[1]]);
  return {
    startPoint: n,
    endPoint: o,
    palmLandmarks: r,
    confidence: e.confidence,
  };
}
function St(e, t = 1.5) {
  let n = D2(e),
    o = zt(e),
    r = [(t * o[0]) / 2, (t * o[1]) / 2],
    s = [n[0] - r[0], n[1] - r[1]],
    A = [n[0] + r[0], n[1] + r[1]];
  return { startPoint: s, endPoint: A, palmLandmarks: e.palmLandmarks };
}
function jt(e) {
  let t = D2(e),
    n = zt(e),
    r = Math.max(...n) / 2,
    s = [t[0] - r, t[1] - r],
    A = [t[0] + r, t[1] + r];
  return { startPoint: s, endPoint: A, palmLandmarks: e.palmLandmarks };
}
function OA(e) {
  return e - 2 * Math.PI * Math.floor((e + Math.PI) / (2 * Math.PI));
}
function Yn(e, t) {
  let n = Math.PI / 2 - Math.atan2(-(t[1] - e[1]), t[0] - e[0]);
  return OA(n);
}
var Vn = (e, t) => [
  [1, 0, e],
  [0, 1, t],
  [0, 0, 1],
];
function qe(e, t) {
  let n = 0;
  for (let o = 0; o < e.length; o++) n += e[o] * t[o];
  return n;
}
function LA(e, t) {
  let n = [];
  for (let o = 0; o < e.length; o++) n.push(e[o][t]);
  return n;
}
function Zn(e, t) {
  let n = [],
    o = e.length;
  for (let r = 0; r < o; r++) {
    n.push([]);
    for (let s = 0; s < o; s++) n[r].push(qe(e[r], LA(t, s)));
  }
  return n;
}
function e1(e, t) {
  let n = Math.cos(e),
    o = Math.sin(e),
    r = [
      [n, -o, 0],
      [o, n, 0],
      [0, 0, 1],
    ],
    s = Vn(t[0], t[1]),
    A = Zn(s, r),
    a = Vn(-t[0], -t[1]);
  return Zn(A, a);
}
function Kn(e) {
  let t = [
      [e[0][0], e[1][0]],
      [e[0][1], e[1][1]],
    ],
    n = [e[0][2], e[1][2]],
    o = [-qe(t[0], n), -qe(t[1], n)];
  return [t[0].concat(o[0]), t[1].concat(o[1]), [0, 0, 1]];
}
function t1(e, t) {
  return [qe(e, t[0]), qe(e, t[1])];
}
var Qn = [
  { x: 0.015625, y: 0.015625 },
  { x: 0.015625, y: 0.015625 },
  { x: 0.046875, y: 0.015625 },
  { x: 0.046875, y: 0.015625 },
  { x: 0.078125, y: 0.015625 },
  { x: 0.078125, y: 0.015625 },
  { x: 0.109375, y: 0.015625 },
  { x: 0.109375, y: 0.015625 },
  { x: 0.140625, y: 0.015625 },
  { x: 0.140625, y: 0.015625 },
  { x: 0.171875, y: 0.015625 },
  { x: 0.171875, y: 0.015625 },
  { x: 0.203125, y: 0.015625 },
  { x: 0.203125, y: 0.015625 },
  { x: 0.234375, y: 0.015625 },
  { x: 0.234375, y: 0.015625 },
  { x: 0.265625, y: 0.015625 },
  { x: 0.265625, y: 0.015625 },
  { x: 0.296875, y: 0.015625 },
  { x: 0.296875, y: 0.015625 },
  { x: 0.328125, y: 0.015625 },
  { x: 0.328125, y: 0.015625 },
  { x: 0.359375, y: 0.015625 },
  { x: 0.359375, y: 0.015625 },
  { x: 0.390625, y: 0.015625 },
  { x: 0.390625, y: 0.015625 },
  { x: 0.421875, y: 0.015625 },
  { x: 0.421875, y: 0.015625 },
  { x: 0.453125, y: 0.015625 },
  { x: 0.453125, y: 0.015625 },
  { x: 0.484375, y: 0.015625 },
  { x: 0.484375, y: 0.015625 },
  { x: 0.515625, y: 0.015625 },
  { x: 0.515625, y: 0.015625 },
  { x: 0.546875, y: 0.015625 },
  { x: 0.546875, y: 0.015625 },
  { x: 0.578125, y: 0.015625 },
  { x: 0.578125, y: 0.015625 },
  { x: 0.609375, y: 0.015625 },
  { x: 0.609375, y: 0.015625 },
  { x: 0.640625, y: 0.015625 },
  { x: 0.640625, y: 0.015625 },
  { x: 0.671875, y: 0.015625 },
  { x: 0.671875, y: 0.015625 },
  { x: 0.703125, y: 0.015625 },
  { x: 0.703125, y: 0.015625 },
  { x: 0.734375, y: 0.015625 },
  { x: 0.734375, y: 0.015625 },
  { x: 0.765625, y: 0.015625 },
  { x: 0.765625, y: 0.015625 },
  { x: 0.796875, y: 0.015625 },
  { x: 0.796875, y: 0.015625 },
  { x: 0.828125, y: 0.015625 },
  { x: 0.828125, y: 0.015625 },
  { x: 0.859375, y: 0.015625 },
  { x: 0.859375, y: 0.015625 },
  { x: 0.890625, y: 0.015625 },
  { x: 0.890625, y: 0.015625 },
  { x: 0.921875, y: 0.015625 },
  { x: 0.921875, y: 0.015625 },
  { x: 0.953125, y: 0.015625 },
  { x: 0.953125, y: 0.015625 },
  { x: 0.984375, y: 0.015625 },
  { x: 0.984375, y: 0.015625 },
  { x: 0.015625, y: 0.046875 },
  { x: 0.015625, y: 0.046875 },
  { x: 0.046875, y: 0.046875 },
  { x: 0.046875, y: 0.046875 },
  { x: 0.078125, y: 0.046875 },
  { x: 0.078125, y: 0.046875 },
  { x: 0.109375, y: 0.046875 },
  { x: 0.109375, y: 0.046875 },
  { x: 0.140625, y: 0.046875 },
  { x: 0.140625, y: 0.046875 },
  { x: 0.171875, y: 0.046875 },
  { x: 0.171875, y: 0.046875 },
  { x: 0.203125, y: 0.046875 },
  { x: 0.203125, y: 0.046875 },
  { x: 0.234375, y: 0.046875 },
  { x: 0.234375, y: 0.046875 },
  { x: 0.265625, y: 0.046875 },
  { x: 0.265625, y: 0.046875 },
  { x: 0.296875, y: 0.046875 },
  { x: 0.296875, y: 0.046875 },
  { x: 0.328125, y: 0.046875 },
  { x: 0.328125, y: 0.046875 },
  { x: 0.359375, y: 0.046875 },
  { x: 0.359375, y: 0.046875 },
  { x: 0.390625, y: 0.046875 },
  { x: 0.390625, y: 0.046875 },
  { x: 0.421875, y: 0.046875 },
  { x: 0.421875, y: 0.046875 },
  { x: 0.453125, y: 0.046875 },
  { x: 0.453125, y: 0.046875 },
  { x: 0.484375, y: 0.046875 },
  { x: 0.484375, y: 0.046875 },
  { x: 0.515625, y: 0.046875 },
  { x: 0.515625, y: 0.046875 },
  { x: 0.546875, y: 0.046875 },
  { x: 0.546875, y: 0.046875 },
  { x: 0.578125, y: 0.046875 },
  { x: 0.578125, y: 0.046875 },
  { x: 0.609375, y: 0.046875 },
  { x: 0.609375, y: 0.046875 },
  { x: 0.640625, y: 0.046875 },
  { x: 0.640625, y: 0.046875 },
  { x: 0.671875, y: 0.046875 },
  { x: 0.671875, y: 0.046875 },
  { x: 0.703125, y: 0.046875 },
  { x: 0.703125, y: 0.046875 },
  { x: 0.734375, y: 0.046875 },
  { x: 0.734375, y: 0.046875 },
  { x: 0.765625, y: 0.046875 },
  { x: 0.765625, y: 0.046875 },
  { x: 0.796875, y: 0.046875 },
  { x: 0.796875, y: 0.046875 },
  { x: 0.828125, y: 0.046875 },
  { x: 0.828125, y: 0.046875 },
  { x: 0.859375, y: 0.046875 },
  { x: 0.859375, y: 0.046875 },
  { x: 0.890625, y: 0.046875 },
  { x: 0.890625, y: 0.046875 },
  { x: 0.921875, y: 0.046875 },
  { x: 0.921875, y: 0.046875 },
  { x: 0.953125, y: 0.046875 },
  { x: 0.953125, y: 0.046875 },
  { x: 0.984375, y: 0.046875 },
  { x: 0.984375, y: 0.046875 },
  { x: 0.015625, y: 0.078125 },
  { x: 0.015625, y: 0.078125 },
  { x: 0.046875, y: 0.078125 },
  { x: 0.046875, y: 0.078125 },
  { x: 0.078125, y: 0.078125 },
  { x: 0.078125, y: 0.078125 },
  { x: 0.109375, y: 0.078125 },
  { x: 0.109375, y: 0.078125 },
  { x: 0.140625, y: 0.078125 },
  { x: 0.140625, y: 0.078125 },
  { x: 0.171875, y: 0.078125 },
  { x: 0.171875, y: 0.078125 },
  { x: 0.203125, y: 0.078125 },
  { x: 0.203125, y: 0.078125 },
  { x: 0.234375, y: 0.078125 },
  { x: 0.234375, y: 0.078125 },
  { x: 0.265625, y: 0.078125 },
  { x: 0.265625, y: 0.078125 },
  { x: 0.296875, y: 0.078125 },
  { x: 0.296875, y: 0.078125 },
  { x: 0.328125, y: 0.078125 },
  { x: 0.328125, y: 0.078125 },
  { x: 0.359375, y: 0.078125 },
  { x: 0.359375, y: 0.078125 },
  { x: 0.390625, y: 0.078125 },
  { x: 0.390625, y: 0.078125 },
  { x: 0.421875, y: 0.078125 },
  { x: 0.421875, y: 0.078125 },
  { x: 0.453125, y: 0.078125 },
  { x: 0.453125, y: 0.078125 },
  { x: 0.484375, y: 0.078125 },
  { x: 0.484375, y: 0.078125 },
  { x: 0.515625, y: 0.078125 },
  { x: 0.515625, y: 0.078125 },
  { x: 0.546875, y: 0.078125 },
  { x: 0.546875, y: 0.078125 },
  { x: 0.578125, y: 0.078125 },
  { x: 0.578125, y: 0.078125 },
  { x: 0.609375, y: 0.078125 },
  { x: 0.609375, y: 0.078125 },
  { x: 0.640625, y: 0.078125 },
  { x: 0.640625, y: 0.078125 },
  { x: 0.671875, y: 0.078125 },
  { x: 0.671875, y: 0.078125 },
  { x: 0.703125, y: 0.078125 },
  { x: 0.703125, y: 0.078125 },
  { x: 0.734375, y: 0.078125 },
  { x: 0.734375, y: 0.078125 },
  { x: 0.765625, y: 0.078125 },
  { x: 0.765625, y: 0.078125 },
  { x: 0.796875, y: 0.078125 },
  { x: 0.796875, y: 0.078125 },
  { x: 0.828125, y: 0.078125 },
  { x: 0.828125, y: 0.078125 },
  { x: 0.859375, y: 0.078125 },
  { x: 0.859375, y: 0.078125 },
  { x: 0.890625, y: 0.078125 },
  { x: 0.890625, y: 0.078125 },
  { x: 0.921875, y: 0.078125 },
  { x: 0.921875, y: 0.078125 },
  { x: 0.953125, y: 0.078125 },
  { x: 0.953125, y: 0.078125 },
  { x: 0.984375, y: 0.078125 },
  { x: 0.984375, y: 0.078125 },
  { x: 0.015625, y: 0.109375 },
  { x: 0.015625, y: 0.109375 },
  { x: 0.046875, y: 0.109375 },
  { x: 0.046875, y: 0.109375 },
  { x: 0.078125, y: 0.109375 },
  { x: 0.078125, y: 0.109375 },
  { x: 0.109375, y: 0.109375 },
  { x: 0.109375, y: 0.109375 },
  { x: 0.140625, y: 0.109375 },
  { x: 0.140625, y: 0.109375 },
  { x: 0.171875, y: 0.109375 },
  { x: 0.171875, y: 0.109375 },
  { x: 0.203125, y: 0.109375 },
  { x: 0.203125, y: 0.109375 },
  { x: 0.234375, y: 0.109375 },
  { x: 0.234375, y: 0.109375 },
  { x: 0.265625, y: 0.109375 },
  { x: 0.265625, y: 0.109375 },
  { x: 0.296875, y: 0.109375 },
  { x: 0.296875, y: 0.109375 },
  { x: 0.328125, y: 0.109375 },
  { x: 0.328125, y: 0.109375 },
  { x: 0.359375, y: 0.109375 },
  { x: 0.359375, y: 0.109375 },
  { x: 0.390625, y: 0.109375 },
  { x: 0.390625, y: 0.109375 },
  { x: 0.421875, y: 0.109375 },
  { x: 0.421875, y: 0.109375 },
  { x: 0.453125, y: 0.109375 },
  { x: 0.453125, y: 0.109375 },
  { x: 0.484375, y: 0.109375 },
  { x: 0.484375, y: 0.109375 },
  { x: 0.515625, y: 0.109375 },
  { x: 0.515625, y: 0.109375 },
  { x: 0.546875, y: 0.109375 },
  { x: 0.546875, y: 0.109375 },
  { x: 0.578125, y: 0.109375 },
  { x: 0.578125, y: 0.109375 },
  { x: 0.609375, y: 0.109375 },
  { x: 0.609375, y: 0.109375 },
  { x: 0.640625, y: 0.109375 },
  { x: 0.640625, y: 0.109375 },
  { x: 0.671875, y: 0.109375 },
  { x: 0.671875, y: 0.109375 },
  { x: 0.703125, y: 0.109375 },
  { x: 0.703125, y: 0.109375 },
  { x: 0.734375, y: 0.109375 },
  { x: 0.734375, y: 0.109375 },
  { x: 0.765625, y: 0.109375 },
  { x: 0.765625, y: 0.109375 },
  { x: 0.796875, y: 0.109375 },
  { x: 0.796875, y: 0.109375 },
  { x: 0.828125, y: 0.109375 },
  { x: 0.828125, y: 0.109375 },
  { x: 0.859375, y: 0.109375 },
  { x: 0.859375, y: 0.109375 },
  { x: 0.890625, y: 0.109375 },
  { x: 0.890625, y: 0.109375 },
  { x: 0.921875, y: 0.109375 },
  { x: 0.921875, y: 0.109375 },
  { x: 0.953125, y: 0.109375 },
  { x: 0.953125, y: 0.109375 },
  { x: 0.984375, y: 0.109375 },
  { x: 0.984375, y: 0.109375 },
  { x: 0.015625, y: 0.140625 },
  { x: 0.015625, y: 0.140625 },
  { x: 0.046875, y: 0.140625 },
  { x: 0.046875, y: 0.140625 },
  { x: 0.078125, y: 0.140625 },
  { x: 0.078125, y: 0.140625 },
  { x: 0.109375, y: 0.140625 },
  { x: 0.109375, y: 0.140625 },
  { x: 0.140625, y: 0.140625 },
  { x: 0.140625, y: 0.140625 },
  { x: 0.171875, y: 0.140625 },
  { x: 0.171875, y: 0.140625 },
  { x: 0.203125, y: 0.140625 },
  { x: 0.203125, y: 0.140625 },
  { x: 0.234375, y: 0.140625 },
  { x: 0.234375, y: 0.140625 },
  { x: 0.265625, y: 0.140625 },
  { x: 0.265625, y: 0.140625 },
  { x: 0.296875, y: 0.140625 },
  { x: 0.296875, y: 0.140625 },
  { x: 0.328125, y: 0.140625 },
  { x: 0.328125, y: 0.140625 },
  { x: 0.359375, y: 0.140625 },
  { x: 0.359375, y: 0.140625 },
  { x: 0.390625, y: 0.140625 },
  { x: 0.390625, y: 0.140625 },
  { x: 0.421875, y: 0.140625 },
  { x: 0.421875, y: 0.140625 },
  { x: 0.453125, y: 0.140625 },
  { x: 0.453125, y: 0.140625 },
  { x: 0.484375, y: 0.140625 },
  { x: 0.484375, y: 0.140625 },
  { x: 0.515625, y: 0.140625 },
  { x: 0.515625, y: 0.140625 },
  { x: 0.546875, y: 0.140625 },
  { x: 0.546875, y: 0.140625 },
  { x: 0.578125, y: 0.140625 },
  { x: 0.578125, y: 0.140625 },
  { x: 0.609375, y: 0.140625 },
  { x: 0.609375, y: 0.140625 },
  { x: 0.640625, y: 0.140625 },
  { x: 0.640625, y: 0.140625 },
  { x: 0.671875, y: 0.140625 },
  { x: 0.671875, y: 0.140625 },
  { x: 0.703125, y: 0.140625 },
  { x: 0.703125, y: 0.140625 },
  { x: 0.734375, y: 0.140625 },
  { x: 0.734375, y: 0.140625 },
  { x: 0.765625, y: 0.140625 },
  { x: 0.765625, y: 0.140625 },
  { x: 0.796875, y: 0.140625 },
  { x: 0.796875, y: 0.140625 },
  { x: 0.828125, y: 0.140625 },
  { x: 0.828125, y: 0.140625 },
  { x: 0.859375, y: 0.140625 },
  { x: 0.859375, y: 0.140625 },
  { x: 0.890625, y: 0.140625 },
  { x: 0.890625, y: 0.140625 },
  { x: 0.921875, y: 0.140625 },
  { x: 0.921875, y: 0.140625 },
  { x: 0.953125, y: 0.140625 },
  { x: 0.953125, y: 0.140625 },
  { x: 0.984375, y: 0.140625 },
  { x: 0.984375, y: 0.140625 },
  { x: 0.015625, y: 0.171875 },
  { x: 0.015625, y: 0.171875 },
  { x: 0.046875, y: 0.171875 },
  { x: 0.046875, y: 0.171875 },
  { x: 0.078125, y: 0.171875 },
  { x: 0.078125, y: 0.171875 },
  { x: 0.109375, y: 0.171875 },
  { x: 0.109375, y: 0.171875 },
  { x: 0.140625, y: 0.171875 },
  { x: 0.140625, y: 0.171875 },
  { x: 0.171875, y: 0.171875 },
  { x: 0.171875, y: 0.171875 },
  { x: 0.203125, y: 0.171875 },
  { x: 0.203125, y: 0.171875 },
  { x: 0.234375, y: 0.171875 },
  { x: 0.234375, y: 0.171875 },
  { x: 0.265625, y: 0.171875 },
  { x: 0.265625, y: 0.171875 },
  { x: 0.296875, y: 0.171875 },
  { x: 0.296875, y: 0.171875 },
  { x: 0.328125, y: 0.171875 },
  { x: 0.328125, y: 0.171875 },
  { x: 0.359375, y: 0.171875 },
  { x: 0.359375, y: 0.171875 },
  { x: 0.390625, y: 0.171875 },
  { x: 0.390625, y: 0.171875 },
  { x: 0.421875, y: 0.171875 },
  { x: 0.421875, y: 0.171875 },
  { x: 0.453125, y: 0.171875 },
  { x: 0.453125, y: 0.171875 },
  { x: 0.484375, y: 0.171875 },
  { x: 0.484375, y: 0.171875 },
  { x: 0.515625, y: 0.171875 },
  { x: 0.515625, y: 0.171875 },
  { x: 0.546875, y: 0.171875 },
  { x: 0.546875, y: 0.171875 },
  { x: 0.578125, y: 0.171875 },
  { x: 0.578125, y: 0.171875 },
  { x: 0.609375, y: 0.171875 },
  { x: 0.609375, y: 0.171875 },
  { x: 0.640625, y: 0.171875 },
  { x: 0.640625, y: 0.171875 },
  { x: 0.671875, y: 0.171875 },
  { x: 0.671875, y: 0.171875 },
  { x: 0.703125, y: 0.171875 },
  { x: 0.703125, y: 0.171875 },
  { x: 0.734375, y: 0.171875 },
  { x: 0.734375, y: 0.171875 },
  { x: 0.765625, y: 0.171875 },
  { x: 0.765625, y: 0.171875 },
  { x: 0.796875, y: 0.171875 },
  { x: 0.796875, y: 0.171875 },
  { x: 0.828125, y: 0.171875 },
  { x: 0.828125, y: 0.171875 },
  { x: 0.859375, y: 0.171875 },
  { x: 0.859375, y: 0.171875 },
  { x: 0.890625, y: 0.171875 },
  { x: 0.890625, y: 0.171875 },
  { x: 0.921875, y: 0.171875 },
  { x: 0.921875, y: 0.171875 },
  { x: 0.953125, y: 0.171875 },
  { x: 0.953125, y: 0.171875 },
  { x: 0.984375, y: 0.171875 },
  { x: 0.984375, y: 0.171875 },
  { x: 0.015625, y: 0.203125 },
  { x: 0.015625, y: 0.203125 },
  { x: 0.046875, y: 0.203125 },
  { x: 0.046875, y: 0.203125 },
  { x: 0.078125, y: 0.203125 },
  { x: 0.078125, y: 0.203125 },
  { x: 0.109375, y: 0.203125 },
  { x: 0.109375, y: 0.203125 },
  { x: 0.140625, y: 0.203125 },
  { x: 0.140625, y: 0.203125 },
  { x: 0.171875, y: 0.203125 },
  { x: 0.171875, y: 0.203125 },
  { x: 0.203125, y: 0.203125 },
  { x: 0.203125, y: 0.203125 },
  { x: 0.234375, y: 0.203125 },
  { x: 0.234375, y: 0.203125 },
  { x: 0.265625, y: 0.203125 },
  { x: 0.265625, y: 0.203125 },
  { x: 0.296875, y: 0.203125 },
  { x: 0.296875, y: 0.203125 },
  { x: 0.328125, y: 0.203125 },
  { x: 0.328125, y: 0.203125 },
  { x: 0.359375, y: 0.203125 },
  { x: 0.359375, y: 0.203125 },
  { x: 0.390625, y: 0.203125 },
  { x: 0.390625, y: 0.203125 },
  { x: 0.421875, y: 0.203125 },
  { x: 0.421875, y: 0.203125 },
  { x: 0.453125, y: 0.203125 },
  { x: 0.453125, y: 0.203125 },
  { x: 0.484375, y: 0.203125 },
  { x: 0.484375, y: 0.203125 },
  { x: 0.515625, y: 0.203125 },
  { x: 0.515625, y: 0.203125 },
  { x: 0.546875, y: 0.203125 },
  { x: 0.546875, y: 0.203125 },
  { x: 0.578125, y: 0.203125 },
  { x: 0.578125, y: 0.203125 },
  { x: 0.609375, y: 0.203125 },
  { x: 0.609375, y: 0.203125 },
  { x: 0.640625, y: 0.203125 },
  { x: 0.640625, y: 0.203125 },
  { x: 0.671875, y: 0.203125 },
  { x: 0.671875, y: 0.203125 },
  { x: 0.703125, y: 0.203125 },
  { x: 0.703125, y: 0.203125 },
  { x: 0.734375, y: 0.203125 },
  { x: 0.734375, y: 0.203125 },
  { x: 0.765625, y: 0.203125 },
  { x: 0.765625, y: 0.203125 },
  { x: 0.796875, y: 0.203125 },
  { x: 0.796875, y: 0.203125 },
  { x: 0.828125, y: 0.203125 },
  { x: 0.828125, y: 0.203125 },
  { x: 0.859375, y: 0.203125 },
  { x: 0.859375, y: 0.203125 },
  { x: 0.890625, y: 0.203125 },
  { x: 0.890625, y: 0.203125 },
  { x: 0.921875, y: 0.203125 },
  { x: 0.921875, y: 0.203125 },
  { x: 0.953125, y: 0.203125 },
  { x: 0.953125, y: 0.203125 },
  { x: 0.984375, y: 0.203125 },
  { x: 0.984375, y: 0.203125 },
  { x: 0.015625, y: 0.234375 },
  { x: 0.015625, y: 0.234375 },
  { x: 0.046875, y: 0.234375 },
  { x: 0.046875, y: 0.234375 },
  { x: 0.078125, y: 0.234375 },
  { x: 0.078125, y: 0.234375 },
  { x: 0.109375, y: 0.234375 },
  { x: 0.109375, y: 0.234375 },
  { x: 0.140625, y: 0.234375 },
  { x: 0.140625, y: 0.234375 },
  { x: 0.171875, y: 0.234375 },
  { x: 0.171875, y: 0.234375 },
  { x: 0.203125, y: 0.234375 },
  { x: 0.203125, y: 0.234375 },
  { x: 0.234375, y: 0.234375 },
  { x: 0.234375, y: 0.234375 },
  { x: 0.265625, y: 0.234375 },
  { x: 0.265625, y: 0.234375 },
  { x: 0.296875, y: 0.234375 },
  { x: 0.296875, y: 0.234375 },
  { x: 0.328125, y: 0.234375 },
  { x: 0.328125, y: 0.234375 },
  { x: 0.359375, y: 0.234375 },
  { x: 0.359375, y: 0.234375 },
  { x: 0.390625, y: 0.234375 },
  { x: 0.390625, y: 0.234375 },
  { x: 0.421875, y: 0.234375 },
  { x: 0.421875, y: 0.234375 },
  { x: 0.453125, y: 0.234375 },
  { x: 0.453125, y: 0.234375 },
  { x: 0.484375, y: 0.234375 },
  { x: 0.484375, y: 0.234375 },
  { x: 0.515625, y: 0.234375 },
  { x: 0.515625, y: 0.234375 },
  { x: 0.546875, y: 0.234375 },
  { x: 0.546875, y: 0.234375 },
  { x: 0.578125, y: 0.234375 },
  { x: 0.578125, y: 0.234375 },
  { x: 0.609375, y: 0.234375 },
  { x: 0.609375, y: 0.234375 },
  { x: 0.640625, y: 0.234375 },
  { x: 0.640625, y: 0.234375 },
  { x: 0.671875, y: 0.234375 },
  { x: 0.671875, y: 0.234375 },
  { x: 0.703125, y: 0.234375 },
  { x: 0.703125, y: 0.234375 },
  { x: 0.734375, y: 0.234375 },
  { x: 0.734375, y: 0.234375 },
  { x: 0.765625, y: 0.234375 },
  { x: 0.765625, y: 0.234375 },
  { x: 0.796875, y: 0.234375 },
  { x: 0.796875, y: 0.234375 },
  { x: 0.828125, y: 0.234375 },
  { x: 0.828125, y: 0.234375 },
  { x: 0.859375, y: 0.234375 },
  { x: 0.859375, y: 0.234375 },
  { x: 0.890625, y: 0.234375 },
  { x: 0.890625, y: 0.234375 },
  { x: 0.921875, y: 0.234375 },
  { x: 0.921875, y: 0.234375 },
  { x: 0.953125, y: 0.234375 },
  { x: 0.953125, y: 0.234375 },
  { x: 0.984375, y: 0.234375 },
  { x: 0.984375, y: 0.234375 },
  { x: 0.015625, y: 0.265625 },
  { x: 0.015625, y: 0.265625 },
  { x: 0.046875, y: 0.265625 },
  { x: 0.046875, y: 0.265625 },
  { x: 0.078125, y: 0.265625 },
  { x: 0.078125, y: 0.265625 },
  { x: 0.109375, y: 0.265625 },
  { x: 0.109375, y: 0.265625 },
  { x: 0.140625, y: 0.265625 },
  { x: 0.140625, y: 0.265625 },
  { x: 0.171875, y: 0.265625 },
  { x: 0.171875, y: 0.265625 },
  { x: 0.203125, y: 0.265625 },
  { x: 0.203125, y: 0.265625 },
  { x: 0.234375, y: 0.265625 },
  { x: 0.234375, y: 0.265625 },
  { x: 0.265625, y: 0.265625 },
  { x: 0.265625, y: 0.265625 },
  { x: 0.296875, y: 0.265625 },
  { x: 0.296875, y: 0.265625 },
  { x: 0.328125, y: 0.265625 },
  { x: 0.328125, y: 0.265625 },
  { x: 0.359375, y: 0.265625 },
  { x: 0.359375, y: 0.265625 },
  { x: 0.390625, y: 0.265625 },
  { x: 0.390625, y: 0.265625 },
  { x: 0.421875, y: 0.265625 },
  { x: 0.421875, y: 0.265625 },
  { x: 0.453125, y: 0.265625 },
  { x: 0.453125, y: 0.265625 },
  { x: 0.484375, y: 0.265625 },
  { x: 0.484375, y: 0.265625 },
  { x: 0.515625, y: 0.265625 },
  { x: 0.515625, y: 0.265625 },
  { x: 0.546875, y: 0.265625 },
  { x: 0.546875, y: 0.265625 },
  { x: 0.578125, y: 0.265625 },
  { x: 0.578125, y: 0.265625 },
  { x: 0.609375, y: 0.265625 },
  { x: 0.609375, y: 0.265625 },
  { x: 0.640625, y: 0.265625 },
  { x: 0.640625, y: 0.265625 },
  { x: 0.671875, y: 0.265625 },
  { x: 0.671875, y: 0.265625 },
  { x: 0.703125, y: 0.265625 },
  { x: 0.703125, y: 0.265625 },
  { x: 0.734375, y: 0.265625 },
  { x: 0.734375, y: 0.265625 },
  { x: 0.765625, y: 0.265625 },
  { x: 0.765625, y: 0.265625 },
  { x: 0.796875, y: 0.265625 },
  { x: 0.796875, y: 0.265625 },
  { x: 0.828125, y: 0.265625 },
  { x: 0.828125, y: 0.265625 },
  { x: 0.859375, y: 0.265625 },
  { x: 0.859375, y: 0.265625 },
  { x: 0.890625, y: 0.265625 },
  { x: 0.890625, y: 0.265625 },
  { x: 0.921875, y: 0.265625 },
  { x: 0.921875, y: 0.265625 },
  { x: 0.953125, y: 0.265625 },
  { x: 0.953125, y: 0.265625 },
  { x: 0.984375, y: 0.265625 },
  { x: 0.984375, y: 0.265625 },
  { x: 0.015625, y: 0.296875 },
  { x: 0.015625, y: 0.296875 },
  { x: 0.046875, y: 0.296875 },
  { x: 0.046875, y: 0.296875 },
  { x: 0.078125, y: 0.296875 },
  { x: 0.078125, y: 0.296875 },
  { x: 0.109375, y: 0.296875 },
  { x: 0.109375, y: 0.296875 },
  { x: 0.140625, y: 0.296875 },
  { x: 0.140625, y: 0.296875 },
  { x: 0.171875, y: 0.296875 },
  { x: 0.171875, y: 0.296875 },
  { x: 0.203125, y: 0.296875 },
  { x: 0.203125, y: 0.296875 },
  { x: 0.234375, y: 0.296875 },
  { x: 0.234375, y: 0.296875 },
  { x: 0.265625, y: 0.296875 },
  { x: 0.265625, y: 0.296875 },
  { x: 0.296875, y: 0.296875 },
  { x: 0.296875, y: 0.296875 },
  { x: 0.328125, y: 0.296875 },
  { x: 0.328125, y: 0.296875 },
  { x: 0.359375, y: 0.296875 },
  { x: 0.359375, y: 0.296875 },
  { x: 0.390625, y: 0.296875 },
  { x: 0.390625, y: 0.296875 },
  { x: 0.421875, y: 0.296875 },
  { x: 0.421875, y: 0.296875 },
  { x: 0.453125, y: 0.296875 },
  { x: 0.453125, y: 0.296875 },
  { x: 0.484375, y: 0.296875 },
  { x: 0.484375, y: 0.296875 },
  { x: 0.515625, y: 0.296875 },
  { x: 0.515625, y: 0.296875 },
  { x: 0.546875, y: 0.296875 },
  { x: 0.546875, y: 0.296875 },
  { x: 0.578125, y: 0.296875 },
  { x: 0.578125, y: 0.296875 },
  { x: 0.609375, y: 0.296875 },
  { x: 0.609375, y: 0.296875 },
  { x: 0.640625, y: 0.296875 },
  { x: 0.640625, y: 0.296875 },
  { x: 0.671875, y: 0.296875 },
  { x: 0.671875, y: 0.296875 },
  { x: 0.703125, y: 0.296875 },
  { x: 0.703125, y: 0.296875 },
  { x: 0.734375, y: 0.296875 },
  { x: 0.734375, y: 0.296875 },
  { x: 0.765625, y: 0.296875 },
  { x: 0.765625, y: 0.296875 },
  { x: 0.796875, y: 0.296875 },
  { x: 0.796875, y: 0.296875 },
  { x: 0.828125, y: 0.296875 },
  { x: 0.828125, y: 0.296875 },
  { x: 0.859375, y: 0.296875 },
  { x: 0.859375, y: 0.296875 },
  { x: 0.890625, y: 0.296875 },
  { x: 0.890625, y: 0.296875 },
  { x: 0.921875, y: 0.296875 },
  { x: 0.921875, y: 0.296875 },
  { x: 0.953125, y: 0.296875 },
  { x: 0.953125, y: 0.296875 },
  { x: 0.984375, y: 0.296875 },
  { x: 0.984375, y: 0.296875 },
  { x: 0.015625, y: 0.328125 },
  { x: 0.015625, y: 0.328125 },
  { x: 0.046875, y: 0.328125 },
  { x: 0.046875, y: 0.328125 },
  { x: 0.078125, y: 0.328125 },
  { x: 0.078125, y: 0.328125 },
  { x: 0.109375, y: 0.328125 },
  { x: 0.109375, y: 0.328125 },
  { x: 0.140625, y: 0.328125 },
  { x: 0.140625, y: 0.328125 },
  { x: 0.171875, y: 0.328125 },
  { x: 0.171875, y: 0.328125 },
  { x: 0.203125, y: 0.328125 },
  { x: 0.203125, y: 0.328125 },
  { x: 0.234375, y: 0.328125 },
  { x: 0.234375, y: 0.328125 },
  { x: 0.265625, y: 0.328125 },
  { x: 0.265625, y: 0.328125 },
  { x: 0.296875, y: 0.328125 },
  { x: 0.296875, y: 0.328125 },
  { x: 0.328125, y: 0.328125 },
  { x: 0.328125, y: 0.328125 },
  { x: 0.359375, y: 0.328125 },
  { x: 0.359375, y: 0.328125 },
  { x: 0.390625, y: 0.328125 },
  { x: 0.390625, y: 0.328125 },
  { x: 0.421875, y: 0.328125 },
  { x: 0.421875, y: 0.328125 },
  { x: 0.453125, y: 0.328125 },
  { x: 0.453125, y: 0.328125 },
  { x: 0.484375, y: 0.328125 },
  { x: 0.484375, y: 0.328125 },
  { x: 0.515625, y: 0.328125 },
  { x: 0.515625, y: 0.328125 },
  { x: 0.546875, y: 0.328125 },
  { x: 0.546875, y: 0.328125 },
  { x: 0.578125, y: 0.328125 },
  { x: 0.578125, y: 0.328125 },
  { x: 0.609375, y: 0.328125 },
  { x: 0.609375, y: 0.328125 },
  { x: 0.640625, y: 0.328125 },
  { x: 0.640625, y: 0.328125 },
  { x: 0.671875, y: 0.328125 },
  { x: 0.671875, y: 0.328125 },
  { x: 0.703125, y: 0.328125 },
  { x: 0.703125, y: 0.328125 },
  { x: 0.734375, y: 0.328125 },
  { x: 0.734375, y: 0.328125 },
  { x: 0.765625, y: 0.328125 },
  { x: 0.765625, y: 0.328125 },
  { x: 0.796875, y: 0.328125 },
  { x: 0.796875, y: 0.328125 },
  { x: 0.828125, y: 0.328125 },
  { x: 0.828125, y: 0.328125 },
  { x: 0.859375, y: 0.328125 },
  { x: 0.859375, y: 0.328125 },
  { x: 0.890625, y: 0.328125 },
  { x: 0.890625, y: 0.328125 },
  { x: 0.921875, y: 0.328125 },
  { x: 0.921875, y: 0.328125 },
  { x: 0.953125, y: 0.328125 },
  { x: 0.953125, y: 0.328125 },
  { x: 0.984375, y: 0.328125 },
  { x: 0.984375, y: 0.328125 },
  { x: 0.015625, y: 0.359375 },
  { x: 0.015625, y: 0.359375 },
  { x: 0.046875, y: 0.359375 },
  { x: 0.046875, y: 0.359375 },
  { x: 0.078125, y: 0.359375 },
  { x: 0.078125, y: 0.359375 },
  { x: 0.109375, y: 0.359375 },
  { x: 0.109375, y: 0.359375 },
  { x: 0.140625, y: 0.359375 },
  { x: 0.140625, y: 0.359375 },
  { x: 0.171875, y: 0.359375 },
  { x: 0.171875, y: 0.359375 },
  { x: 0.203125, y: 0.359375 },
  { x: 0.203125, y: 0.359375 },
  { x: 0.234375, y: 0.359375 },
  { x: 0.234375, y: 0.359375 },
  { x: 0.265625, y: 0.359375 },
  { x: 0.265625, y: 0.359375 },
  { x: 0.296875, y: 0.359375 },
  { x: 0.296875, y: 0.359375 },
  { x: 0.328125, y: 0.359375 },
  { x: 0.328125, y: 0.359375 },
  { x: 0.359375, y: 0.359375 },
  { x: 0.359375, y: 0.359375 },
  { x: 0.390625, y: 0.359375 },
  { x: 0.390625, y: 0.359375 },
  { x: 0.421875, y: 0.359375 },
  { x: 0.421875, y: 0.359375 },
  { x: 0.453125, y: 0.359375 },
  { x: 0.453125, y: 0.359375 },
  { x: 0.484375, y: 0.359375 },
  { x: 0.484375, y: 0.359375 },
  { x: 0.515625, y: 0.359375 },
  { x: 0.515625, y: 0.359375 },
  { x: 0.546875, y: 0.359375 },
  { x: 0.546875, y: 0.359375 },
  { x: 0.578125, y: 0.359375 },
  { x: 0.578125, y: 0.359375 },
  { x: 0.609375, y: 0.359375 },
  { x: 0.609375, y: 0.359375 },
  { x: 0.640625, y: 0.359375 },
  { x: 0.640625, y: 0.359375 },
  { x: 0.671875, y: 0.359375 },
  { x: 0.671875, y: 0.359375 },
  { x: 0.703125, y: 0.359375 },
  { x: 0.703125, y: 0.359375 },
  { x: 0.734375, y: 0.359375 },
  { x: 0.734375, y: 0.359375 },
  { x: 0.765625, y: 0.359375 },
  { x: 0.765625, y: 0.359375 },
  { x: 0.796875, y: 0.359375 },
  { x: 0.796875, y: 0.359375 },
  { x: 0.828125, y: 0.359375 },
  { x: 0.828125, y: 0.359375 },
  { x: 0.859375, y: 0.359375 },
  { x: 0.859375, y: 0.359375 },
  { x: 0.890625, y: 0.359375 },
  { x: 0.890625, y: 0.359375 },
  { x: 0.921875, y: 0.359375 },
  { x: 0.921875, y: 0.359375 },
  { x: 0.953125, y: 0.359375 },
  { x: 0.953125, y: 0.359375 },
  { x: 0.984375, y: 0.359375 },
  { x: 0.984375, y: 0.359375 },
  { x: 0.015625, y: 0.390625 },
  { x: 0.015625, y: 0.390625 },
  { x: 0.046875, y: 0.390625 },
  { x: 0.046875, y: 0.390625 },
  { x: 0.078125, y: 0.390625 },
  { x: 0.078125, y: 0.390625 },
  { x: 0.109375, y: 0.390625 },
  { x: 0.109375, y: 0.390625 },
  { x: 0.140625, y: 0.390625 },
  { x: 0.140625, y: 0.390625 },
  { x: 0.171875, y: 0.390625 },
  { x: 0.171875, y: 0.390625 },
  { x: 0.203125, y: 0.390625 },
  { x: 0.203125, y: 0.390625 },
  { x: 0.234375, y: 0.390625 },
  { x: 0.234375, y: 0.390625 },
  { x: 0.265625, y: 0.390625 },
  { x: 0.265625, y: 0.390625 },
  { x: 0.296875, y: 0.390625 },
  { x: 0.296875, y: 0.390625 },
  { x: 0.328125, y: 0.390625 },
  { x: 0.328125, y: 0.390625 },
  { x: 0.359375, y: 0.390625 },
  { x: 0.359375, y: 0.390625 },
  { x: 0.390625, y: 0.390625 },
  { x: 0.390625, y: 0.390625 },
  { x: 0.421875, y: 0.390625 },
  { x: 0.421875, y: 0.390625 },
  { x: 0.453125, y: 0.390625 },
  { x: 0.453125, y: 0.390625 },
  { x: 0.484375, y: 0.390625 },
  { x: 0.484375, y: 0.390625 },
  { x: 0.515625, y: 0.390625 },
  { x: 0.515625, y: 0.390625 },
  { x: 0.546875, y: 0.390625 },
  { x: 0.546875, y: 0.390625 },
  { x: 0.578125, y: 0.390625 },
  { x: 0.578125, y: 0.390625 },
  { x: 0.609375, y: 0.390625 },
  { x: 0.609375, y: 0.390625 },
  { x: 0.640625, y: 0.390625 },
  { x: 0.640625, y: 0.390625 },
  { x: 0.671875, y: 0.390625 },
  { x: 0.671875, y: 0.390625 },
  { x: 0.703125, y: 0.390625 },
  { x: 0.703125, y: 0.390625 },
  { x: 0.734375, y: 0.390625 },
  { x: 0.734375, y: 0.390625 },
  { x: 0.765625, y: 0.390625 },
  { x: 0.765625, y: 0.390625 },
  { x: 0.796875, y: 0.390625 },
  { x: 0.796875, y: 0.390625 },
  { x: 0.828125, y: 0.390625 },
  { x: 0.828125, y: 0.390625 },
  { x: 0.859375, y: 0.390625 },
  { x: 0.859375, y: 0.390625 },
  { x: 0.890625, y: 0.390625 },
  { x: 0.890625, y: 0.390625 },
  { x: 0.921875, y: 0.390625 },
  { x: 0.921875, y: 0.390625 },
  { x: 0.953125, y: 0.390625 },
  { x: 0.953125, y: 0.390625 },
  { x: 0.984375, y: 0.390625 },
  { x: 0.984375, y: 0.390625 },
  { x: 0.015625, y: 0.421875 },
  { x: 0.015625, y: 0.421875 },
  { x: 0.046875, y: 0.421875 },
  { x: 0.046875, y: 0.421875 },
  { x: 0.078125, y: 0.421875 },
  { x: 0.078125, y: 0.421875 },
  { x: 0.109375, y: 0.421875 },
  { x: 0.109375, y: 0.421875 },
  { x: 0.140625, y: 0.421875 },
  { x: 0.140625, y: 0.421875 },
  { x: 0.171875, y: 0.421875 },
  { x: 0.171875, y: 0.421875 },
  { x: 0.203125, y: 0.421875 },
  { x: 0.203125, y: 0.421875 },
  { x: 0.234375, y: 0.421875 },
  { x: 0.234375, y: 0.421875 },
  { x: 0.265625, y: 0.421875 },
  { x: 0.265625, y: 0.421875 },
  { x: 0.296875, y: 0.421875 },
  { x: 0.296875, y: 0.421875 },
  { x: 0.328125, y: 0.421875 },
  { x: 0.328125, y: 0.421875 },
  { x: 0.359375, y: 0.421875 },
  { x: 0.359375, y: 0.421875 },
  { x: 0.390625, y: 0.421875 },
  { x: 0.390625, y: 0.421875 },
  { x: 0.421875, y: 0.421875 },
  { x: 0.421875, y: 0.421875 },
  { x: 0.453125, y: 0.421875 },
  { x: 0.453125, y: 0.421875 },
  { x: 0.484375, y: 0.421875 },
  { x: 0.484375, y: 0.421875 },
  { x: 0.515625, y: 0.421875 },
  { x: 0.515625, y: 0.421875 },
  { x: 0.546875, y: 0.421875 },
  { x: 0.546875, y: 0.421875 },
  { x: 0.578125, y: 0.421875 },
  { x: 0.578125, y: 0.421875 },
  { x: 0.609375, y: 0.421875 },
  { x: 0.609375, y: 0.421875 },
  { x: 0.640625, y: 0.421875 },
  { x: 0.640625, y: 0.421875 },
  { x: 0.671875, y: 0.421875 },
  { x: 0.671875, y: 0.421875 },
  { x: 0.703125, y: 0.421875 },
  { x: 0.703125, y: 0.421875 },
  { x: 0.734375, y: 0.421875 },
  { x: 0.734375, y: 0.421875 },
  { x: 0.765625, y: 0.421875 },
  { x: 0.765625, y: 0.421875 },
  { x: 0.796875, y: 0.421875 },
  { x: 0.796875, y: 0.421875 },
  { x: 0.828125, y: 0.421875 },
  { x: 0.828125, y: 0.421875 },
  { x: 0.859375, y: 0.421875 },
  { x: 0.859375, y: 0.421875 },
  { x: 0.890625, y: 0.421875 },
  { x: 0.890625, y: 0.421875 },
  { x: 0.921875, y: 0.421875 },
  { x: 0.921875, y: 0.421875 },
  { x: 0.953125, y: 0.421875 },
  { x: 0.953125, y: 0.421875 },
  { x: 0.984375, y: 0.421875 },
  { x: 0.984375, y: 0.421875 },
  { x: 0.015625, y: 0.453125 },
  { x: 0.015625, y: 0.453125 },
  { x: 0.046875, y: 0.453125 },
  { x: 0.046875, y: 0.453125 },
  { x: 0.078125, y: 0.453125 },
  { x: 0.078125, y: 0.453125 },
  { x: 0.109375, y: 0.453125 },
  { x: 0.109375, y: 0.453125 },
  { x: 0.140625, y: 0.453125 },
  { x: 0.140625, y: 0.453125 },
  { x: 0.171875, y: 0.453125 },
  { x: 0.171875, y: 0.453125 },
  { x: 0.203125, y: 0.453125 },
  { x: 0.203125, y: 0.453125 },
  { x: 0.234375, y: 0.453125 },
  { x: 0.234375, y: 0.453125 },
  { x: 0.265625, y: 0.453125 },
  { x: 0.265625, y: 0.453125 },
  { x: 0.296875, y: 0.453125 },
  { x: 0.296875, y: 0.453125 },
  { x: 0.328125, y: 0.453125 },
  { x: 0.328125, y: 0.453125 },
  { x: 0.359375, y: 0.453125 },
  { x: 0.359375, y: 0.453125 },
  { x: 0.390625, y: 0.453125 },
  { x: 0.390625, y: 0.453125 },
  { x: 0.421875, y: 0.453125 },
  { x: 0.421875, y: 0.453125 },
  { x: 0.453125, y: 0.453125 },
  { x: 0.453125, y: 0.453125 },
  { x: 0.484375, y: 0.453125 },
  { x: 0.484375, y: 0.453125 },
  { x: 0.515625, y: 0.453125 },
  { x: 0.515625, y: 0.453125 },
  { x: 0.546875, y: 0.453125 },
  { x: 0.546875, y: 0.453125 },
  { x: 0.578125, y: 0.453125 },
  { x: 0.578125, y: 0.453125 },
  { x: 0.609375, y: 0.453125 },
  { x: 0.609375, y: 0.453125 },
  { x: 0.640625, y: 0.453125 },
  { x: 0.640625, y: 0.453125 },
  { x: 0.671875, y: 0.453125 },
  { x: 0.671875, y: 0.453125 },
  { x: 0.703125, y: 0.453125 },
  { x: 0.703125, y: 0.453125 },
  { x: 0.734375, y: 0.453125 },
  { x: 0.734375, y: 0.453125 },
  { x: 0.765625, y: 0.453125 },
  { x: 0.765625, y: 0.453125 },
  { x: 0.796875, y: 0.453125 },
  { x: 0.796875, y: 0.453125 },
  { x: 0.828125, y: 0.453125 },
  { x: 0.828125, y: 0.453125 },
  { x: 0.859375, y: 0.453125 },
  { x: 0.859375, y: 0.453125 },
  { x: 0.890625, y: 0.453125 },
  { x: 0.890625, y: 0.453125 },
  { x: 0.921875, y: 0.453125 },
  { x: 0.921875, y: 0.453125 },
  { x: 0.953125, y: 0.453125 },
  { x: 0.953125, y: 0.453125 },
  { x: 0.984375, y: 0.453125 },
  { x: 0.984375, y: 0.453125 },
  { x: 0.015625, y: 0.484375 },
  { x: 0.015625, y: 0.484375 },
  { x: 0.046875, y: 0.484375 },
  { x: 0.046875, y: 0.484375 },
  { x: 0.078125, y: 0.484375 },
  { x: 0.078125, y: 0.484375 },
  { x: 0.109375, y: 0.484375 },
  { x: 0.109375, y: 0.484375 },
  { x: 0.140625, y: 0.484375 },
  { x: 0.140625, y: 0.484375 },
  { x: 0.171875, y: 0.484375 },
  { x: 0.171875, y: 0.484375 },
  { x: 0.203125, y: 0.484375 },
  { x: 0.203125, y: 0.484375 },
  { x: 0.234375, y: 0.484375 },
  { x: 0.234375, y: 0.484375 },
  { x: 0.265625, y: 0.484375 },
  { x: 0.265625, y: 0.484375 },
  { x: 0.296875, y: 0.484375 },
  { x: 0.296875, y: 0.484375 },
  { x: 0.328125, y: 0.484375 },
  { x: 0.328125, y: 0.484375 },
  { x: 0.359375, y: 0.484375 },
  { x: 0.359375, y: 0.484375 },
  { x: 0.390625, y: 0.484375 },
  { x: 0.390625, y: 0.484375 },
  { x: 0.421875, y: 0.484375 },
  { x: 0.421875, y: 0.484375 },
  { x: 0.453125, y: 0.484375 },
  { x: 0.453125, y: 0.484375 },
  { x: 0.484375, y: 0.484375 },
  { x: 0.484375, y: 0.484375 },
  { x: 0.515625, y: 0.484375 },
  { x: 0.515625, y: 0.484375 },
  { x: 0.546875, y: 0.484375 },
  { x: 0.546875, y: 0.484375 },
  { x: 0.578125, y: 0.484375 },
  { x: 0.578125, y: 0.484375 },
  { x: 0.609375, y: 0.484375 },
  { x: 0.609375, y: 0.484375 },
  { x: 0.640625, y: 0.484375 },
  { x: 0.640625, y: 0.484375 },
  { x: 0.671875, y: 0.484375 },
  { x: 0.671875, y: 0.484375 },
  { x: 0.703125, y: 0.484375 },
  { x: 0.703125, y: 0.484375 },
  { x: 0.734375, y: 0.484375 },
  { x: 0.734375, y: 0.484375 },
  { x: 0.765625, y: 0.484375 },
  { x: 0.765625, y: 0.484375 },
  { x: 0.796875, y: 0.484375 },
  { x: 0.796875, y: 0.484375 },
  { x: 0.828125, y: 0.484375 },
  { x: 0.828125, y: 0.484375 },
  { x: 0.859375, y: 0.484375 },
  { x: 0.859375, y: 0.484375 },
  { x: 0.890625, y: 0.484375 },
  { x: 0.890625, y: 0.484375 },
  { x: 0.921875, y: 0.484375 },
  { x: 0.921875, y: 0.484375 },
  { x: 0.953125, y: 0.484375 },
  { x: 0.953125, y: 0.484375 },
  { x: 0.984375, y: 0.484375 },
  { x: 0.984375, y: 0.484375 },
  { x: 0.015625, y: 0.515625 },
  { x: 0.015625, y: 0.515625 },
  { x: 0.046875, y: 0.515625 },
  { x: 0.046875, y: 0.515625 },
  { x: 0.078125, y: 0.515625 },
  { x: 0.078125, y: 0.515625 },
  { x: 0.109375, y: 0.515625 },
  { x: 0.109375, y: 0.515625 },
  { x: 0.140625, y: 0.515625 },
  { x: 0.140625, y: 0.515625 },
  { x: 0.171875, y: 0.515625 },
  { x: 0.171875, y: 0.515625 },
  { x: 0.203125, y: 0.515625 },
  { x: 0.203125, y: 0.515625 },
  { x: 0.234375, y: 0.515625 },
  { x: 0.234375, y: 0.515625 },
  { x: 0.265625, y: 0.515625 },
  { x: 0.265625, y: 0.515625 },
  { x: 0.296875, y: 0.515625 },
  { x: 0.296875, y: 0.515625 },
  { x: 0.328125, y: 0.515625 },
  { x: 0.328125, y: 0.515625 },
  { x: 0.359375, y: 0.515625 },
  { x: 0.359375, y: 0.515625 },
  { x: 0.390625, y: 0.515625 },
  { x: 0.390625, y: 0.515625 },
  { x: 0.421875, y: 0.515625 },
  { x: 0.421875, y: 0.515625 },
  { x: 0.453125, y: 0.515625 },
  { x: 0.453125, y: 0.515625 },
  { x: 0.484375, y: 0.515625 },
  { x: 0.484375, y: 0.515625 },
  { x: 0.515625, y: 0.515625 },
  { x: 0.515625, y: 0.515625 },
  { x: 0.546875, y: 0.515625 },
  { x: 0.546875, y: 0.515625 },
  { x: 0.578125, y: 0.515625 },
  { x: 0.578125, y: 0.515625 },
  { x: 0.609375, y: 0.515625 },
  { x: 0.609375, y: 0.515625 },
  { x: 0.640625, y: 0.515625 },
  { x: 0.640625, y: 0.515625 },
  { x: 0.671875, y: 0.515625 },
  { x: 0.671875, y: 0.515625 },
  { x: 0.703125, y: 0.515625 },
  { x: 0.703125, y: 0.515625 },
  { x: 0.734375, y: 0.515625 },
  { x: 0.734375, y: 0.515625 },
  { x: 0.765625, y: 0.515625 },
  { x: 0.765625, y: 0.515625 },
  { x: 0.796875, y: 0.515625 },
  { x: 0.796875, y: 0.515625 },
  { x: 0.828125, y: 0.515625 },
  { x: 0.828125, y: 0.515625 },
  { x: 0.859375, y: 0.515625 },
  { x: 0.859375, y: 0.515625 },
  { x: 0.890625, y: 0.515625 },
  { x: 0.890625, y: 0.515625 },
  { x: 0.921875, y: 0.515625 },
  { x: 0.921875, y: 0.515625 },
  { x: 0.953125, y: 0.515625 },
  { x: 0.953125, y: 0.515625 },
  { x: 0.984375, y: 0.515625 },
  { x: 0.984375, y: 0.515625 },
  { x: 0.015625, y: 0.546875 },
  { x: 0.015625, y: 0.546875 },
  { x: 0.046875, y: 0.546875 },
  { x: 0.046875, y: 0.546875 },
  { x: 0.078125, y: 0.546875 },
  { x: 0.078125, y: 0.546875 },
  { x: 0.109375, y: 0.546875 },
  { x: 0.109375, y: 0.546875 },
  { x: 0.140625, y: 0.546875 },
  { x: 0.140625, y: 0.546875 },
  { x: 0.171875, y: 0.546875 },
  { x: 0.171875, y: 0.546875 },
  { x: 0.203125, y: 0.546875 },
  { x: 0.203125, y: 0.546875 },
  { x: 0.234375, y: 0.546875 },
  { x: 0.234375, y: 0.546875 },
  { x: 0.265625, y: 0.546875 },
  { x: 0.265625, y: 0.546875 },
  { x: 0.296875, y: 0.546875 },
  { x: 0.296875, y: 0.546875 },
  { x: 0.328125, y: 0.546875 },
  { x: 0.328125, y: 0.546875 },
  { x: 0.359375, y: 0.546875 },
  { x: 0.359375, y: 0.546875 },
  { x: 0.390625, y: 0.546875 },
  { x: 0.390625, y: 0.546875 },
  { x: 0.421875, y: 0.546875 },
  { x: 0.421875, y: 0.546875 },
  { x: 0.453125, y: 0.546875 },
  { x: 0.453125, y: 0.546875 },
  { x: 0.484375, y: 0.546875 },
  { x: 0.484375, y: 0.546875 },
  { x: 0.515625, y: 0.546875 },
  { x: 0.515625, y: 0.546875 },
  { x: 0.546875, y: 0.546875 },
  { x: 0.546875, y: 0.546875 },
  { x: 0.578125, y: 0.546875 },
  { x: 0.578125, y: 0.546875 },
  { x: 0.609375, y: 0.546875 },
  { x: 0.609375, y: 0.546875 },
  { x: 0.640625, y: 0.546875 },
  { x: 0.640625, y: 0.546875 },
  { x: 0.671875, y: 0.546875 },
  { x: 0.671875, y: 0.546875 },
  { x: 0.703125, y: 0.546875 },
  { x: 0.703125, y: 0.546875 },
  { x: 0.734375, y: 0.546875 },
  { x: 0.734375, y: 0.546875 },
  { x: 0.765625, y: 0.546875 },
  { x: 0.765625, y: 0.546875 },
  { x: 0.796875, y: 0.546875 },
  { x: 0.796875, y: 0.546875 },
  { x: 0.828125, y: 0.546875 },
  { x: 0.828125, y: 0.546875 },
  { x: 0.859375, y: 0.546875 },
  { x: 0.859375, y: 0.546875 },
  { x: 0.890625, y: 0.546875 },
  { x: 0.890625, y: 0.546875 },
  { x: 0.921875, y: 0.546875 },
  { x: 0.921875, y: 0.546875 },
  { x: 0.953125, y: 0.546875 },
  { x: 0.953125, y: 0.546875 },
  { x: 0.984375, y: 0.546875 },
  { x: 0.984375, y: 0.546875 },
  { x: 0.015625, y: 0.578125 },
  { x: 0.015625, y: 0.578125 },
  { x: 0.046875, y: 0.578125 },
  { x: 0.046875, y: 0.578125 },
  { x: 0.078125, y: 0.578125 },
  { x: 0.078125, y: 0.578125 },
  { x: 0.109375, y: 0.578125 },
  { x: 0.109375, y: 0.578125 },
  { x: 0.140625, y: 0.578125 },
  { x: 0.140625, y: 0.578125 },
  { x: 0.171875, y: 0.578125 },
  { x: 0.171875, y: 0.578125 },
  { x: 0.203125, y: 0.578125 },
  { x: 0.203125, y: 0.578125 },
  { x: 0.234375, y: 0.578125 },
  { x: 0.234375, y: 0.578125 },
  { x: 0.265625, y: 0.578125 },
  { x: 0.265625, y: 0.578125 },
  { x: 0.296875, y: 0.578125 },
  { x: 0.296875, y: 0.578125 },
  { x: 0.328125, y: 0.578125 },
  { x: 0.328125, y: 0.578125 },
  { x: 0.359375, y: 0.578125 },
  { x: 0.359375, y: 0.578125 },
  { x: 0.390625, y: 0.578125 },
  { x: 0.390625, y: 0.578125 },
  { x: 0.421875, y: 0.578125 },
  { x: 0.421875, y: 0.578125 },
  { x: 0.453125, y: 0.578125 },
  { x: 0.453125, y: 0.578125 },
  { x: 0.484375, y: 0.578125 },
  { x: 0.484375, y: 0.578125 },
  { x: 0.515625, y: 0.578125 },
  { x: 0.515625, y: 0.578125 },
  { x: 0.546875, y: 0.578125 },
  { x: 0.546875, y: 0.578125 },
  { x: 0.578125, y: 0.578125 },
  { x: 0.578125, y: 0.578125 },
  { x: 0.609375, y: 0.578125 },
  { x: 0.609375, y: 0.578125 },
  { x: 0.640625, y: 0.578125 },
  { x: 0.640625, y: 0.578125 },
  { x: 0.671875, y: 0.578125 },
  { x: 0.671875, y: 0.578125 },
  { x: 0.703125, y: 0.578125 },
  { x: 0.703125, y: 0.578125 },
  { x: 0.734375, y: 0.578125 },
  { x: 0.734375, y: 0.578125 },
  { x: 0.765625, y: 0.578125 },
  { x: 0.765625, y: 0.578125 },
  { x: 0.796875, y: 0.578125 },
  { x: 0.796875, y: 0.578125 },
  { x: 0.828125, y: 0.578125 },
  { x: 0.828125, y: 0.578125 },
  { x: 0.859375, y: 0.578125 },
  { x: 0.859375, y: 0.578125 },
  { x: 0.890625, y: 0.578125 },
  { x: 0.890625, y: 0.578125 },
  { x: 0.921875, y: 0.578125 },
  { x: 0.921875, y: 0.578125 },
  { x: 0.953125, y: 0.578125 },
  { x: 0.953125, y: 0.578125 },
  { x: 0.984375, y: 0.578125 },
  { x: 0.984375, y: 0.578125 },
  { x: 0.015625, y: 0.609375 },
  { x: 0.015625, y: 0.609375 },
  { x: 0.046875, y: 0.609375 },
  { x: 0.046875, y: 0.609375 },
  { x: 0.078125, y: 0.609375 },
  { x: 0.078125, y: 0.609375 },
  { x: 0.109375, y: 0.609375 },
  { x: 0.109375, y: 0.609375 },
  { x: 0.140625, y: 0.609375 },
  { x: 0.140625, y: 0.609375 },
  { x: 0.171875, y: 0.609375 },
  { x: 0.171875, y: 0.609375 },
  { x: 0.203125, y: 0.609375 },
  { x: 0.203125, y: 0.609375 },
  { x: 0.234375, y: 0.609375 },
  { x: 0.234375, y: 0.609375 },
  { x: 0.265625, y: 0.609375 },
  { x: 0.265625, y: 0.609375 },
  { x: 0.296875, y: 0.609375 },
  { x: 0.296875, y: 0.609375 },
  { x: 0.328125, y: 0.609375 },
  { x: 0.328125, y: 0.609375 },
  { x: 0.359375, y: 0.609375 },
  { x: 0.359375, y: 0.609375 },
  { x: 0.390625, y: 0.609375 },
  { x: 0.390625, y: 0.609375 },
  { x: 0.421875, y: 0.609375 },
  { x: 0.421875, y: 0.609375 },
  { x: 0.453125, y: 0.609375 },
  { x: 0.453125, y: 0.609375 },
  { x: 0.484375, y: 0.609375 },
  { x: 0.484375, y: 0.609375 },
  { x: 0.515625, y: 0.609375 },
  { x: 0.515625, y: 0.609375 },
  { x: 0.546875, y: 0.609375 },
  { x: 0.546875, y: 0.609375 },
  { x: 0.578125, y: 0.609375 },
  { x: 0.578125, y: 0.609375 },
  { x: 0.609375, y: 0.609375 },
  { x: 0.609375, y: 0.609375 },
  { x: 0.640625, y: 0.609375 },
  { x: 0.640625, y: 0.609375 },
  { x: 0.671875, y: 0.609375 },
  { x: 0.671875, y: 0.609375 },
  { x: 0.703125, y: 0.609375 },
  { x: 0.703125, y: 0.609375 },
  { x: 0.734375, y: 0.609375 },
  { x: 0.734375, y: 0.609375 },
  { x: 0.765625, y: 0.609375 },
  { x: 0.765625, y: 0.609375 },
  { x: 0.796875, y: 0.609375 },
  { x: 0.796875, y: 0.609375 },
  { x: 0.828125, y: 0.609375 },
  { x: 0.828125, y: 0.609375 },
  { x: 0.859375, y: 0.609375 },
  { x: 0.859375, y: 0.609375 },
  { x: 0.890625, y: 0.609375 },
  { x: 0.890625, y: 0.609375 },
  { x: 0.921875, y: 0.609375 },
  { x: 0.921875, y: 0.609375 },
  { x: 0.953125, y: 0.609375 },
  { x: 0.953125, y: 0.609375 },
  { x: 0.984375, y: 0.609375 },
  { x: 0.984375, y: 0.609375 },
  { x: 0.015625, y: 0.640625 },
  { x: 0.015625, y: 0.640625 },
  { x: 0.046875, y: 0.640625 },
  { x: 0.046875, y: 0.640625 },
  { x: 0.078125, y: 0.640625 },
  { x: 0.078125, y: 0.640625 },
  { x: 0.109375, y: 0.640625 },
  { x: 0.109375, y: 0.640625 },
  { x: 0.140625, y: 0.640625 },
  { x: 0.140625, y: 0.640625 },
  { x: 0.171875, y: 0.640625 },
  { x: 0.171875, y: 0.640625 },
  { x: 0.203125, y: 0.640625 },
  { x: 0.203125, y: 0.640625 },
  { x: 0.234375, y: 0.640625 },
  { x: 0.234375, y: 0.640625 },
  { x: 0.265625, y: 0.640625 },
  { x: 0.265625, y: 0.640625 },
  { x: 0.296875, y: 0.640625 },
  { x: 0.296875, y: 0.640625 },
  { x: 0.328125, y: 0.640625 },
  { x: 0.328125, y: 0.640625 },
  { x: 0.359375, y: 0.640625 },
  { x: 0.359375, y: 0.640625 },
  { x: 0.390625, y: 0.640625 },
  { x: 0.390625, y: 0.640625 },
  { x: 0.421875, y: 0.640625 },
  { x: 0.421875, y: 0.640625 },
  { x: 0.453125, y: 0.640625 },
  { x: 0.453125, y: 0.640625 },
  { x: 0.484375, y: 0.640625 },
  { x: 0.484375, y: 0.640625 },
  { x: 0.515625, y: 0.640625 },
  { x: 0.515625, y: 0.640625 },
  { x: 0.546875, y: 0.640625 },
  { x: 0.546875, y: 0.640625 },
  { x: 0.578125, y: 0.640625 },
  { x: 0.578125, y: 0.640625 },
  { x: 0.609375, y: 0.640625 },
  { x: 0.609375, y: 0.640625 },
  { x: 0.640625, y: 0.640625 },
  { x: 0.640625, y: 0.640625 },
  { x: 0.671875, y: 0.640625 },
  { x: 0.671875, y: 0.640625 },
  { x: 0.703125, y: 0.640625 },
  { x: 0.703125, y: 0.640625 },
  { x: 0.734375, y: 0.640625 },
  { x: 0.734375, y: 0.640625 },
  { x: 0.765625, y: 0.640625 },
  { x: 0.765625, y: 0.640625 },
  { x: 0.796875, y: 0.640625 },
  { x: 0.796875, y: 0.640625 },
  { x: 0.828125, y: 0.640625 },
  { x: 0.828125, y: 0.640625 },
  { x: 0.859375, y: 0.640625 },
  { x: 0.859375, y: 0.640625 },
  { x: 0.890625, y: 0.640625 },
  { x: 0.890625, y: 0.640625 },
  { x: 0.921875, y: 0.640625 },
  { x: 0.921875, y: 0.640625 },
  { x: 0.953125, y: 0.640625 },
  { x: 0.953125, y: 0.640625 },
  { x: 0.984375, y: 0.640625 },
  { x: 0.984375, y: 0.640625 },
  { x: 0.015625, y: 0.671875 },
  { x: 0.015625, y: 0.671875 },
  { x: 0.046875, y: 0.671875 },
  { x: 0.046875, y: 0.671875 },
  { x: 0.078125, y: 0.671875 },
  { x: 0.078125, y: 0.671875 },
  { x: 0.109375, y: 0.671875 },
  { x: 0.109375, y: 0.671875 },
  { x: 0.140625, y: 0.671875 },
  { x: 0.140625, y: 0.671875 },
  { x: 0.171875, y: 0.671875 },
  { x: 0.171875, y: 0.671875 },
  { x: 0.203125, y: 0.671875 },
  { x: 0.203125, y: 0.671875 },
  { x: 0.234375, y: 0.671875 },
  { x: 0.234375, y: 0.671875 },
  { x: 0.265625, y: 0.671875 },
  { x: 0.265625, y: 0.671875 },
  { x: 0.296875, y: 0.671875 },
  { x: 0.296875, y: 0.671875 },
  { x: 0.328125, y: 0.671875 },
  { x: 0.328125, y: 0.671875 },
  { x: 0.359375, y: 0.671875 },
  { x: 0.359375, y: 0.671875 },
  { x: 0.390625, y: 0.671875 },
  { x: 0.390625, y: 0.671875 },
  { x: 0.421875, y: 0.671875 },
  { x: 0.421875, y: 0.671875 },
  { x: 0.453125, y: 0.671875 },
  { x: 0.453125, y: 0.671875 },
  { x: 0.484375, y: 0.671875 },
  { x: 0.484375, y: 0.671875 },
  { x: 0.515625, y: 0.671875 },
  { x: 0.515625, y: 0.671875 },
  { x: 0.546875, y: 0.671875 },
  { x: 0.546875, y: 0.671875 },
  { x: 0.578125, y: 0.671875 },
  { x: 0.578125, y: 0.671875 },
  { x: 0.609375, y: 0.671875 },
  { x: 0.609375, y: 0.671875 },
  { x: 0.640625, y: 0.671875 },
  { x: 0.640625, y: 0.671875 },
  { x: 0.671875, y: 0.671875 },
  { x: 0.671875, y: 0.671875 },
  { x: 0.703125, y: 0.671875 },
  { x: 0.703125, y: 0.671875 },
  { x: 0.734375, y: 0.671875 },
  { x: 0.734375, y: 0.671875 },
  { x: 0.765625, y: 0.671875 },
  { x: 0.765625, y: 0.671875 },
  { x: 0.796875, y: 0.671875 },
  { x: 0.796875, y: 0.671875 },
  { x: 0.828125, y: 0.671875 },
  { x: 0.828125, y: 0.671875 },
  { x: 0.859375, y: 0.671875 },
  { x: 0.859375, y: 0.671875 },
  { x: 0.890625, y: 0.671875 },
  { x: 0.890625, y: 0.671875 },
  { x: 0.921875, y: 0.671875 },
  { x: 0.921875, y: 0.671875 },
  { x: 0.953125, y: 0.671875 },
  { x: 0.953125, y: 0.671875 },
  { x: 0.984375, y: 0.671875 },
  { x: 0.984375, y: 0.671875 },
  { x: 0.015625, y: 0.703125 },
  { x: 0.015625, y: 0.703125 },
  { x: 0.046875, y: 0.703125 },
  { x: 0.046875, y: 0.703125 },
  { x: 0.078125, y: 0.703125 },
  { x: 0.078125, y: 0.703125 },
  { x: 0.109375, y: 0.703125 },
  { x: 0.109375, y: 0.703125 },
  { x: 0.140625, y: 0.703125 },
  { x: 0.140625, y: 0.703125 },
  { x: 0.171875, y: 0.703125 },
  { x: 0.171875, y: 0.703125 },
  { x: 0.203125, y: 0.703125 },
  { x: 0.203125, y: 0.703125 },
  { x: 0.234375, y: 0.703125 },
  { x: 0.234375, y: 0.703125 },
  { x: 0.265625, y: 0.703125 },
  { x: 0.265625, y: 0.703125 },
  { x: 0.296875, y: 0.703125 },
  { x: 0.296875, y: 0.703125 },
  { x: 0.328125, y: 0.703125 },
  { x: 0.328125, y: 0.703125 },
  { x: 0.359375, y: 0.703125 },
  { x: 0.359375, y: 0.703125 },
  { x: 0.390625, y: 0.703125 },
  { x: 0.390625, y: 0.703125 },
  { x: 0.421875, y: 0.703125 },
  { x: 0.421875, y: 0.703125 },
  { x: 0.453125, y: 0.703125 },
  { x: 0.453125, y: 0.703125 },
  { x: 0.484375, y: 0.703125 },
  { x: 0.484375, y: 0.703125 },
  { x: 0.515625, y: 0.703125 },
  { x: 0.515625, y: 0.703125 },
  { x: 0.546875, y: 0.703125 },
  { x: 0.546875, y: 0.703125 },
  { x: 0.578125, y: 0.703125 },
  { x: 0.578125, y: 0.703125 },
  { x: 0.609375, y: 0.703125 },
  { x: 0.609375, y: 0.703125 },
  { x: 0.640625, y: 0.703125 },
  { x: 0.640625, y: 0.703125 },
  { x: 0.671875, y: 0.703125 },
  { x: 0.671875, y: 0.703125 },
  { x: 0.703125, y: 0.703125 },
  { x: 0.703125, y: 0.703125 },
  { x: 0.734375, y: 0.703125 },
  { x: 0.734375, y: 0.703125 },
  { x: 0.765625, y: 0.703125 },
  { x: 0.765625, y: 0.703125 },
  { x: 0.796875, y: 0.703125 },
  { x: 0.796875, y: 0.703125 },
  { x: 0.828125, y: 0.703125 },
  { x: 0.828125, y: 0.703125 },
  { x: 0.859375, y: 0.703125 },
  { x: 0.859375, y: 0.703125 },
  { x: 0.890625, y: 0.703125 },
  { x: 0.890625, y: 0.703125 },
  { x: 0.921875, y: 0.703125 },
  { x: 0.921875, y: 0.703125 },
  { x: 0.953125, y: 0.703125 },
  { x: 0.953125, y: 0.703125 },
  { x: 0.984375, y: 0.703125 },
  { x: 0.984375, y: 0.703125 },
  { x: 0.015625, y: 0.734375 },
  { x: 0.015625, y: 0.734375 },
  { x: 0.046875, y: 0.734375 },
  { x: 0.046875, y: 0.734375 },
  { x: 0.078125, y: 0.734375 },
  { x: 0.078125, y: 0.734375 },
  { x: 0.109375, y: 0.734375 },
  { x: 0.109375, y: 0.734375 },
  { x: 0.140625, y: 0.734375 },
  { x: 0.140625, y: 0.734375 },
  { x: 0.171875, y: 0.734375 },
  { x: 0.171875, y: 0.734375 },
  { x: 0.203125, y: 0.734375 },
  { x: 0.203125, y: 0.734375 },
  { x: 0.234375, y: 0.734375 },
  { x: 0.234375, y: 0.734375 },
  { x: 0.265625, y: 0.734375 },
  { x: 0.265625, y: 0.734375 },
  { x: 0.296875, y: 0.734375 },
  { x: 0.296875, y: 0.734375 },
  { x: 0.328125, y: 0.734375 },
  { x: 0.328125, y: 0.734375 },
  { x: 0.359375, y: 0.734375 },
  { x: 0.359375, y: 0.734375 },
  { x: 0.390625, y: 0.734375 },
  { x: 0.390625, y: 0.734375 },
  { x: 0.421875, y: 0.734375 },
  { x: 0.421875, y: 0.734375 },
  { x: 0.453125, y: 0.734375 },
  { x: 0.453125, y: 0.734375 },
  { x: 0.484375, y: 0.734375 },
  { x: 0.484375, y: 0.734375 },
  { x: 0.515625, y: 0.734375 },
  { x: 0.515625, y: 0.734375 },
  { x: 0.546875, y: 0.734375 },
  { x: 0.546875, y: 0.734375 },
  { x: 0.578125, y: 0.734375 },
  { x: 0.578125, y: 0.734375 },
  { x: 0.609375, y: 0.734375 },
  { x: 0.609375, y: 0.734375 },
  { x: 0.640625, y: 0.734375 },
  { x: 0.640625, y: 0.734375 },
  { x: 0.671875, y: 0.734375 },
  { x: 0.671875, y: 0.734375 },
  { x: 0.703125, y: 0.734375 },
  { x: 0.703125, y: 0.734375 },
  { x: 0.734375, y: 0.734375 },
  { x: 0.734375, y: 0.734375 },
  { x: 0.765625, y: 0.734375 },
  { x: 0.765625, y: 0.734375 },
  { x: 0.796875, y: 0.734375 },
  { x: 0.796875, y: 0.734375 },
  { x: 0.828125, y: 0.734375 },
  { x: 0.828125, y: 0.734375 },
  { x: 0.859375, y: 0.734375 },
  { x: 0.859375, y: 0.734375 },
  { x: 0.890625, y: 0.734375 },
  { x: 0.890625, y: 0.734375 },
  { x: 0.921875, y: 0.734375 },
  { x: 0.921875, y: 0.734375 },
  { x: 0.953125, y: 0.734375 },
  { x: 0.953125, y: 0.734375 },
  { x: 0.984375, y: 0.734375 },
  { x: 0.984375, y: 0.734375 },
  { x: 0.015625, y: 0.765625 },
  { x: 0.015625, y: 0.765625 },
  { x: 0.046875, y: 0.765625 },
  { x: 0.046875, y: 0.765625 },
  { x: 0.078125, y: 0.765625 },
  { x: 0.078125, y: 0.765625 },
  { x: 0.109375, y: 0.765625 },
  { x: 0.109375, y: 0.765625 },
  { x: 0.140625, y: 0.765625 },
  { x: 0.140625, y: 0.765625 },
  { x: 0.171875, y: 0.765625 },
  { x: 0.171875, y: 0.765625 },
  { x: 0.203125, y: 0.765625 },
  { x: 0.203125, y: 0.765625 },
  { x: 0.234375, y: 0.765625 },
  { x: 0.234375, y: 0.765625 },
  { x: 0.265625, y: 0.765625 },
  { x: 0.265625, y: 0.765625 },
  { x: 0.296875, y: 0.765625 },
  { x: 0.296875, y: 0.765625 },
  { x: 0.328125, y: 0.765625 },
  { x: 0.328125, y: 0.765625 },
  { x: 0.359375, y: 0.765625 },
  { x: 0.359375, y: 0.765625 },
  { x: 0.390625, y: 0.765625 },
  { x: 0.390625, y: 0.765625 },
  { x: 0.421875, y: 0.765625 },
  { x: 0.421875, y: 0.765625 },
  { x: 0.453125, y: 0.765625 },
  { x: 0.453125, y: 0.765625 },
  { x: 0.484375, y: 0.765625 },
  { x: 0.484375, y: 0.765625 },
  { x: 0.515625, y: 0.765625 },
  { x: 0.515625, y: 0.765625 },
  { x: 0.546875, y: 0.765625 },
  { x: 0.546875, y: 0.765625 },
  { x: 0.578125, y: 0.765625 },
  { x: 0.578125, y: 0.765625 },
  { x: 0.609375, y: 0.765625 },
  { x: 0.609375, y: 0.765625 },
  { x: 0.640625, y: 0.765625 },
  { x: 0.640625, y: 0.765625 },
  { x: 0.671875, y: 0.765625 },
  { x: 0.671875, y: 0.765625 },
  { x: 0.703125, y: 0.765625 },
  { x: 0.703125, y: 0.765625 },
  { x: 0.734375, y: 0.765625 },
  { x: 0.734375, y: 0.765625 },
  { x: 0.765625, y: 0.765625 },
  { x: 0.765625, y: 0.765625 },
  { x: 0.796875, y: 0.765625 },
  { x: 0.796875, y: 0.765625 },
  { x: 0.828125, y: 0.765625 },
  { x: 0.828125, y: 0.765625 },
  { x: 0.859375, y: 0.765625 },
  { x: 0.859375, y: 0.765625 },
  { x: 0.890625, y: 0.765625 },
  { x: 0.890625, y: 0.765625 },
  { x: 0.921875, y: 0.765625 },
  { x: 0.921875, y: 0.765625 },
  { x: 0.953125, y: 0.765625 },
  { x: 0.953125, y: 0.765625 },
  { x: 0.984375, y: 0.765625 },
  { x: 0.984375, y: 0.765625 },
  { x: 0.015625, y: 0.796875 },
  { x: 0.015625, y: 0.796875 },
  { x: 0.046875, y: 0.796875 },
  { x: 0.046875, y: 0.796875 },
  { x: 0.078125, y: 0.796875 },
  { x: 0.078125, y: 0.796875 },
  { x: 0.109375, y: 0.796875 },
  { x: 0.109375, y: 0.796875 },
  { x: 0.140625, y: 0.796875 },
  { x: 0.140625, y: 0.796875 },
  { x: 0.171875, y: 0.796875 },
  { x: 0.171875, y: 0.796875 },
  { x: 0.203125, y: 0.796875 },
  { x: 0.203125, y: 0.796875 },
  { x: 0.234375, y: 0.796875 },
  { x: 0.234375, y: 0.796875 },
  { x: 0.265625, y: 0.796875 },
  { x: 0.265625, y: 0.796875 },
  { x: 0.296875, y: 0.796875 },
  { x: 0.296875, y: 0.796875 },
  { x: 0.328125, y: 0.796875 },
  { x: 0.328125, y: 0.796875 },
  { x: 0.359375, y: 0.796875 },
  { x: 0.359375, y: 0.796875 },
  { x: 0.390625, y: 0.796875 },
  { x: 0.390625, y: 0.796875 },
  { x: 0.421875, y: 0.796875 },
  { x: 0.421875, y: 0.796875 },
  { x: 0.453125, y: 0.796875 },
  { x: 0.453125, y: 0.796875 },
  { x: 0.484375, y: 0.796875 },
  { x: 0.484375, y: 0.796875 },
  { x: 0.515625, y: 0.796875 },
  { x: 0.515625, y: 0.796875 },
  { x: 0.546875, y: 0.796875 },
  { x: 0.546875, y: 0.796875 },
  { x: 0.578125, y: 0.796875 },
  { x: 0.578125, y: 0.796875 },
  { x: 0.609375, y: 0.796875 },
  { x: 0.609375, y: 0.796875 },
  { x: 0.640625, y: 0.796875 },
  { x: 0.640625, y: 0.796875 },
  { x: 0.671875, y: 0.796875 },
  { x: 0.671875, y: 0.796875 },
  { x: 0.703125, y: 0.796875 },
  { x: 0.703125, y: 0.796875 },
  { x: 0.734375, y: 0.796875 },
  { x: 0.734375, y: 0.796875 },
  { x: 0.765625, y: 0.796875 },
  { x: 0.765625, y: 0.796875 },
  { x: 0.796875, y: 0.796875 },
  { x: 0.796875, y: 0.796875 },
  { x: 0.828125, y: 0.796875 },
  { x: 0.828125, y: 0.796875 },
  { x: 0.859375, y: 0.796875 },
  { x: 0.859375, y: 0.796875 },
  { x: 0.890625, y: 0.796875 },
  { x: 0.890625, y: 0.796875 },
  { x: 0.921875, y: 0.796875 },
  { x: 0.921875, y: 0.796875 },
  { x: 0.953125, y: 0.796875 },
  { x: 0.953125, y: 0.796875 },
  { x: 0.984375, y: 0.796875 },
  { x: 0.984375, y: 0.796875 },
  { x: 0.015625, y: 0.828125 },
  { x: 0.015625, y: 0.828125 },
  { x: 0.046875, y: 0.828125 },
  { x: 0.046875, y: 0.828125 },
  { x: 0.078125, y: 0.828125 },
  { x: 0.078125, y: 0.828125 },
  { x: 0.109375, y: 0.828125 },
  { x: 0.109375, y: 0.828125 },
  { x: 0.140625, y: 0.828125 },
  { x: 0.140625, y: 0.828125 },
  { x: 0.171875, y: 0.828125 },
  { x: 0.171875, y: 0.828125 },
  { x: 0.203125, y: 0.828125 },
  { x: 0.203125, y: 0.828125 },
  { x: 0.234375, y: 0.828125 },
  { x: 0.234375, y: 0.828125 },
  { x: 0.265625, y: 0.828125 },
  { x: 0.265625, y: 0.828125 },
  { x: 0.296875, y: 0.828125 },
  { x: 0.296875, y: 0.828125 },
  { x: 0.328125, y: 0.828125 },
  { x: 0.328125, y: 0.828125 },
  { x: 0.359375, y: 0.828125 },
  { x: 0.359375, y: 0.828125 },
  { x: 0.390625, y: 0.828125 },
  { x: 0.390625, y: 0.828125 },
  { x: 0.421875, y: 0.828125 },
  { x: 0.421875, y: 0.828125 },
  { x: 0.453125, y: 0.828125 },
  { x: 0.453125, y: 0.828125 },
  { x: 0.484375, y: 0.828125 },
  { x: 0.484375, y: 0.828125 },
  { x: 0.515625, y: 0.828125 },
  { x: 0.515625, y: 0.828125 },
  { x: 0.546875, y: 0.828125 },
  { x: 0.546875, y: 0.828125 },
  { x: 0.578125, y: 0.828125 },
  { x: 0.578125, y: 0.828125 },
  { x: 0.609375, y: 0.828125 },
  { x: 0.609375, y: 0.828125 },
  { x: 0.640625, y: 0.828125 },
  { x: 0.640625, y: 0.828125 },
  { x: 0.671875, y: 0.828125 },
  { x: 0.671875, y: 0.828125 },
  { x: 0.703125, y: 0.828125 },
  { x: 0.703125, y: 0.828125 },
  { x: 0.734375, y: 0.828125 },
  { x: 0.734375, y: 0.828125 },
  { x: 0.765625, y: 0.828125 },
  { x: 0.765625, y: 0.828125 },
  { x: 0.796875, y: 0.828125 },
  { x: 0.796875, y: 0.828125 },
  { x: 0.828125, y: 0.828125 },
  { x: 0.828125, y: 0.828125 },
  { x: 0.859375, y: 0.828125 },
  { x: 0.859375, y: 0.828125 },
  { x: 0.890625, y: 0.828125 },
  { x: 0.890625, y: 0.828125 },
  { x: 0.921875, y: 0.828125 },
  { x: 0.921875, y: 0.828125 },
  { x: 0.953125, y: 0.828125 },
  { x: 0.953125, y: 0.828125 },
  { x: 0.984375, y: 0.828125 },
  { x: 0.984375, y: 0.828125 },
  { x: 0.015625, y: 0.859375 },
  { x: 0.015625, y: 0.859375 },
  { x: 0.046875, y: 0.859375 },
  { x: 0.046875, y: 0.859375 },
  { x: 0.078125, y: 0.859375 },
  { x: 0.078125, y: 0.859375 },
  { x: 0.109375, y: 0.859375 },
  { x: 0.109375, y: 0.859375 },
  { x: 0.140625, y: 0.859375 },
  { x: 0.140625, y: 0.859375 },
  { x: 0.171875, y: 0.859375 },
  { x: 0.171875, y: 0.859375 },
  { x: 0.203125, y: 0.859375 },
  { x: 0.203125, y: 0.859375 },
  { x: 0.234375, y: 0.859375 },
  { x: 0.234375, y: 0.859375 },
  { x: 0.265625, y: 0.859375 },
  { x: 0.265625, y: 0.859375 },
  { x: 0.296875, y: 0.859375 },
  { x: 0.296875, y: 0.859375 },
  { x: 0.328125, y: 0.859375 },
  { x: 0.328125, y: 0.859375 },
  { x: 0.359375, y: 0.859375 },
  { x: 0.359375, y: 0.859375 },
  { x: 0.390625, y: 0.859375 },
  { x: 0.390625, y: 0.859375 },
  { x: 0.421875, y: 0.859375 },
  { x: 0.421875, y: 0.859375 },
  { x: 0.453125, y: 0.859375 },
  { x: 0.453125, y: 0.859375 },
  { x: 0.484375, y: 0.859375 },
  { x: 0.484375, y: 0.859375 },
  { x: 0.515625, y: 0.859375 },
  { x: 0.515625, y: 0.859375 },
  { x: 0.546875, y: 0.859375 },
  { x: 0.546875, y: 0.859375 },
  { x: 0.578125, y: 0.859375 },
  { x: 0.578125, y: 0.859375 },
  { x: 0.609375, y: 0.859375 },
  { x: 0.609375, y: 0.859375 },
  { x: 0.640625, y: 0.859375 },
  { x: 0.640625, y: 0.859375 },
  { x: 0.671875, y: 0.859375 },
  { x: 0.671875, y: 0.859375 },
  { x: 0.703125, y: 0.859375 },
  { x: 0.703125, y: 0.859375 },
  { x: 0.734375, y: 0.859375 },
  { x: 0.734375, y: 0.859375 },
  { x: 0.765625, y: 0.859375 },
  { x: 0.765625, y: 0.859375 },
  { x: 0.796875, y: 0.859375 },
  { x: 0.796875, y: 0.859375 },
  { x: 0.828125, y: 0.859375 },
  { x: 0.828125, y: 0.859375 },
  { x: 0.859375, y: 0.859375 },
  { x: 0.859375, y: 0.859375 },
  { x: 0.890625, y: 0.859375 },
  { x: 0.890625, y: 0.859375 },
  { x: 0.921875, y: 0.859375 },
  { x: 0.921875, y: 0.859375 },
  { x: 0.953125, y: 0.859375 },
  { x: 0.953125, y: 0.859375 },
  { x: 0.984375, y: 0.859375 },
  { x: 0.984375, y: 0.859375 },
  { x: 0.015625, y: 0.890625 },
  { x: 0.015625, y: 0.890625 },
  { x: 0.046875, y: 0.890625 },
  { x: 0.046875, y: 0.890625 },
  { x: 0.078125, y: 0.890625 },
  { x: 0.078125, y: 0.890625 },
  { x: 0.109375, y: 0.890625 },
  { x: 0.109375, y: 0.890625 },
  { x: 0.140625, y: 0.890625 },
  { x: 0.140625, y: 0.890625 },
  { x: 0.171875, y: 0.890625 },
  { x: 0.171875, y: 0.890625 },
  { x: 0.203125, y: 0.890625 },
  { x: 0.203125, y: 0.890625 },
  { x: 0.234375, y: 0.890625 },
  { x: 0.234375, y: 0.890625 },
  { x: 0.265625, y: 0.890625 },
  { x: 0.265625, y: 0.890625 },
  { x: 0.296875, y: 0.890625 },
  { x: 0.296875, y: 0.890625 },
  { x: 0.328125, y: 0.890625 },
  { x: 0.328125, y: 0.890625 },
  { x: 0.359375, y: 0.890625 },
  { x: 0.359375, y: 0.890625 },
  { x: 0.390625, y: 0.890625 },
  { x: 0.390625, y: 0.890625 },
  { x: 0.421875, y: 0.890625 },
  { x: 0.421875, y: 0.890625 },
  { x: 0.453125, y: 0.890625 },
  { x: 0.453125, y: 0.890625 },
  { x: 0.484375, y: 0.890625 },
  { x: 0.484375, y: 0.890625 },
  { x: 0.515625, y: 0.890625 },
  { x: 0.515625, y: 0.890625 },
  { x: 0.546875, y: 0.890625 },
  { x: 0.546875, y: 0.890625 },
  { x: 0.578125, y: 0.890625 },
  { x: 0.578125, y: 0.890625 },
  { x: 0.609375, y: 0.890625 },
  { x: 0.609375, y: 0.890625 },
  { x: 0.640625, y: 0.890625 },
  { x: 0.640625, y: 0.890625 },
  { x: 0.671875, y: 0.890625 },
  { x: 0.671875, y: 0.890625 },
  { x: 0.703125, y: 0.890625 },
  { x: 0.703125, y: 0.890625 },
  { x: 0.734375, y: 0.890625 },
  { x: 0.734375, y: 0.890625 },
  { x: 0.765625, y: 0.890625 },
  { x: 0.765625, y: 0.890625 },
  { x: 0.796875, y: 0.890625 },
  { x: 0.796875, y: 0.890625 },
  { x: 0.828125, y: 0.890625 },
  { x: 0.828125, y: 0.890625 },
  { x: 0.859375, y: 0.890625 },
  { x: 0.859375, y: 0.890625 },
  { x: 0.890625, y: 0.890625 },
  { x: 0.890625, y: 0.890625 },
  { x: 0.921875, y: 0.890625 },
  { x: 0.921875, y: 0.890625 },
  { x: 0.953125, y: 0.890625 },
  { x: 0.953125, y: 0.890625 },
  { x: 0.984375, y: 0.890625 },
  { x: 0.984375, y: 0.890625 },
  { x: 0.015625, y: 0.921875 },
  { x: 0.015625, y: 0.921875 },
  { x: 0.046875, y: 0.921875 },
  { x: 0.046875, y: 0.921875 },
  { x: 0.078125, y: 0.921875 },
  { x: 0.078125, y: 0.921875 },
  { x: 0.109375, y: 0.921875 },
  { x: 0.109375, y: 0.921875 },
  { x: 0.140625, y: 0.921875 },
  { x: 0.140625, y: 0.921875 },
  { x: 0.171875, y: 0.921875 },
  { x: 0.171875, y: 0.921875 },
  { x: 0.203125, y: 0.921875 },
  { x: 0.203125, y: 0.921875 },
  { x: 0.234375, y: 0.921875 },
  { x: 0.234375, y: 0.921875 },
  { x: 0.265625, y: 0.921875 },
  { x: 0.265625, y: 0.921875 },
  { x: 0.296875, y: 0.921875 },
  { x: 0.296875, y: 0.921875 },
  { x: 0.328125, y: 0.921875 },
  { x: 0.328125, y: 0.921875 },
  { x: 0.359375, y: 0.921875 },
  { x: 0.359375, y: 0.921875 },
  { x: 0.390625, y: 0.921875 },
  { x: 0.390625, y: 0.921875 },
  { x: 0.421875, y: 0.921875 },
  { x: 0.421875, y: 0.921875 },
  { x: 0.453125, y: 0.921875 },
  { x: 0.453125, y: 0.921875 },
  { x: 0.484375, y: 0.921875 },
  { x: 0.484375, y: 0.921875 },
  { x: 0.515625, y: 0.921875 },
  { x: 0.515625, y: 0.921875 },
  { x: 0.546875, y: 0.921875 },
  { x: 0.546875, y: 0.921875 },
  { x: 0.578125, y: 0.921875 },
  { x: 0.578125, y: 0.921875 },
  { x: 0.609375, y: 0.921875 },
  { x: 0.609375, y: 0.921875 },
  { x: 0.640625, y: 0.921875 },
  { x: 0.640625, y: 0.921875 },
  { x: 0.671875, y: 0.921875 },
  { x: 0.671875, y: 0.921875 },
  { x: 0.703125, y: 0.921875 },
  { x: 0.703125, y: 0.921875 },
  { x: 0.734375, y: 0.921875 },
  { x: 0.734375, y: 0.921875 },
  { x: 0.765625, y: 0.921875 },
  { x: 0.765625, y: 0.921875 },
  { x: 0.796875, y: 0.921875 },
  { x: 0.796875, y: 0.921875 },
  { x: 0.828125, y: 0.921875 },
  { x: 0.828125, y: 0.921875 },
  { x: 0.859375, y: 0.921875 },
  { x: 0.859375, y: 0.921875 },
  { x: 0.890625, y: 0.921875 },
  { x: 0.890625, y: 0.921875 },
  { x: 0.921875, y: 0.921875 },
  { x: 0.921875, y: 0.921875 },
  { x: 0.953125, y: 0.921875 },
  { x: 0.953125, y: 0.921875 },
  { x: 0.984375, y: 0.921875 },
  { x: 0.984375, y: 0.921875 },
  { x: 0.015625, y: 0.953125 },
  { x: 0.015625, y: 0.953125 },
  { x: 0.046875, y: 0.953125 },
  { x: 0.046875, y: 0.953125 },
  { x: 0.078125, y: 0.953125 },
  { x: 0.078125, y: 0.953125 },
  { x: 0.109375, y: 0.953125 },
  { x: 0.109375, y: 0.953125 },
  { x: 0.140625, y: 0.953125 },
  { x: 0.140625, y: 0.953125 },
  { x: 0.171875, y: 0.953125 },
  { x: 0.171875, y: 0.953125 },
  { x: 0.203125, y: 0.953125 },
  { x: 0.203125, y: 0.953125 },
  { x: 0.234375, y: 0.953125 },
  { x: 0.234375, y: 0.953125 },
  { x: 0.265625, y: 0.953125 },
  { x: 0.265625, y: 0.953125 },
  { x: 0.296875, y: 0.953125 },
  { x: 0.296875, y: 0.953125 },
  { x: 0.328125, y: 0.953125 },
  { x: 0.328125, y: 0.953125 },
  { x: 0.359375, y: 0.953125 },
  { x: 0.359375, y: 0.953125 },
  { x: 0.390625, y: 0.953125 },
  { x: 0.390625, y: 0.953125 },
  { x: 0.421875, y: 0.953125 },
  { x: 0.421875, y: 0.953125 },
  { x: 0.453125, y: 0.953125 },
  { x: 0.453125, y: 0.953125 },
  { x: 0.484375, y: 0.953125 },
  { x: 0.484375, y: 0.953125 },
  { x: 0.515625, y: 0.953125 },
  { x: 0.515625, y: 0.953125 },
  { x: 0.546875, y: 0.953125 },
  { x: 0.546875, y: 0.953125 },
  { x: 0.578125, y: 0.953125 },
  { x: 0.578125, y: 0.953125 },
  { x: 0.609375, y: 0.953125 },
  { x: 0.609375, y: 0.953125 },
  { x: 0.640625, y: 0.953125 },
  { x: 0.640625, y: 0.953125 },
  { x: 0.671875, y: 0.953125 },
  { x: 0.671875, y: 0.953125 },
  { x: 0.703125, y: 0.953125 },
  { x: 0.703125, y: 0.953125 },
  { x: 0.734375, y: 0.953125 },
  { x: 0.734375, y: 0.953125 },
  { x: 0.765625, y: 0.953125 },
  { x: 0.765625, y: 0.953125 },
  { x: 0.796875, y: 0.953125 },
  { x: 0.796875, y: 0.953125 },
  { x: 0.828125, y: 0.953125 },
  { x: 0.828125, y: 0.953125 },
  { x: 0.859375, y: 0.953125 },
  { x: 0.859375, y: 0.953125 },
  { x: 0.890625, y: 0.953125 },
  { x: 0.890625, y: 0.953125 },
  { x: 0.921875, y: 0.953125 },
  { x: 0.921875, y: 0.953125 },
  { x: 0.953125, y: 0.953125 },
  { x: 0.953125, y: 0.953125 },
  { x: 0.984375, y: 0.953125 },
  { x: 0.984375, y: 0.953125 },
  { x: 0.015625, y: 0.984375 },
  { x: 0.015625, y: 0.984375 },
  { x: 0.046875, y: 0.984375 },
  { x: 0.046875, y: 0.984375 },
  { x: 0.078125, y: 0.984375 },
  { x: 0.078125, y: 0.984375 },
  { x: 0.109375, y: 0.984375 },
  { x: 0.109375, y: 0.984375 },
  { x: 0.140625, y: 0.984375 },
  { x: 0.140625, y: 0.984375 },
  { x: 0.171875, y: 0.984375 },
  { x: 0.171875, y: 0.984375 },
  { x: 0.203125, y: 0.984375 },
  { x: 0.203125, y: 0.984375 },
  { x: 0.234375, y: 0.984375 },
  { x: 0.234375, y: 0.984375 },
  { x: 0.265625, y: 0.984375 },
  { x: 0.265625, y: 0.984375 },
  { x: 0.296875, y: 0.984375 },
  { x: 0.296875, y: 0.984375 },
  { x: 0.328125, y: 0.984375 },
  { x: 0.328125, y: 0.984375 },
  { x: 0.359375, y: 0.984375 },
  { x: 0.359375, y: 0.984375 },
  { x: 0.390625, y: 0.984375 },
  { x: 0.390625, y: 0.984375 },
  { x: 0.421875, y: 0.984375 },
  { x: 0.421875, y: 0.984375 },
  { x: 0.453125, y: 0.984375 },
  { x: 0.453125, y: 0.984375 },
  { x: 0.484375, y: 0.984375 },
  { x: 0.484375, y: 0.984375 },
  { x: 0.515625, y: 0.984375 },
  { x: 0.515625, y: 0.984375 },
  { x: 0.546875, y: 0.984375 },
  { x: 0.546875, y: 0.984375 },
  { x: 0.578125, y: 0.984375 },
  { x: 0.578125, y: 0.984375 },
  { x: 0.609375, y: 0.984375 },
  { x: 0.609375, y: 0.984375 },
  { x: 0.640625, y: 0.984375 },
  { x: 0.640625, y: 0.984375 },
  { x: 0.671875, y: 0.984375 },
  { x: 0.671875, y: 0.984375 },
  { x: 0.703125, y: 0.984375 },
  { x: 0.703125, y: 0.984375 },
  { x: 0.734375, y: 0.984375 },
  { x: 0.734375, y: 0.984375 },
  { x: 0.765625, y: 0.984375 },
  { x: 0.765625, y: 0.984375 },
  { x: 0.796875, y: 0.984375 },
  { x: 0.796875, y: 0.984375 },
  { x: 0.828125, y: 0.984375 },
  { x: 0.828125, y: 0.984375 },
  { x: 0.859375, y: 0.984375 },
  { x: 0.859375, y: 0.984375 },
  { x: 0.890625, y: 0.984375 },
  { x: 0.890625, y: 0.984375 },
  { x: 0.921875, y: 0.984375 },
  { x: 0.921875, y: 0.984375 },
  { x: 0.953125, y: 0.984375 },
  { x: 0.953125, y: 0.984375 },
  { x: 0.984375, y: 0.984375 },
  { x: 0.984375, y: 0.984375 },
  { x: 0.03125, y: 0.03125 },
  { x: 0.03125, y: 0.03125 },
  { x: 0.09375, y: 0.03125 },
  { x: 0.09375, y: 0.03125 },
  { x: 0.15625, y: 0.03125 },
  { x: 0.15625, y: 0.03125 },
  { x: 0.21875, y: 0.03125 },
  { x: 0.21875, y: 0.03125 },
  { x: 0.28125, y: 0.03125 },
  { x: 0.28125, y: 0.03125 },
  { x: 0.34375, y: 0.03125 },
  { x: 0.34375, y: 0.03125 },
  { x: 0.40625, y: 0.03125 },
  { x: 0.40625, y: 0.03125 },
  { x: 0.46875, y: 0.03125 },
  { x: 0.46875, y: 0.03125 },
  { x: 0.53125, y: 0.03125 },
  { x: 0.53125, y: 0.03125 },
  { x: 0.59375, y: 0.03125 },
  { x: 0.59375, y: 0.03125 },
  { x: 0.65625, y: 0.03125 },
  { x: 0.65625, y: 0.03125 },
  { x: 0.71875, y: 0.03125 },
  { x: 0.71875, y: 0.03125 },
  { x: 0.78125, y: 0.03125 },
  { x: 0.78125, y: 0.03125 },
  { x: 0.84375, y: 0.03125 },
  { x: 0.84375, y: 0.03125 },
  { x: 0.90625, y: 0.03125 },
  { x: 0.90625, y: 0.03125 },
  { x: 0.96875, y: 0.03125 },
  { x: 0.96875, y: 0.03125 },
  { x: 0.03125, y: 0.09375 },
  { x: 0.03125, y: 0.09375 },
  { x: 0.09375, y: 0.09375 },
  { x: 0.09375, y: 0.09375 },
  { x: 0.15625, y: 0.09375 },
  { x: 0.15625, y: 0.09375 },
  { x: 0.21875, y: 0.09375 },
  { x: 0.21875, y: 0.09375 },
  { x: 0.28125, y: 0.09375 },
  { x: 0.28125, y: 0.09375 },
  { x: 0.34375, y: 0.09375 },
  { x: 0.34375, y: 0.09375 },
  { x: 0.40625, y: 0.09375 },
  { x: 0.40625, y: 0.09375 },
  { x: 0.46875, y: 0.09375 },
  { x: 0.46875, y: 0.09375 },
  { x: 0.53125, y: 0.09375 },
  { x: 0.53125, y: 0.09375 },
  { x: 0.59375, y: 0.09375 },
  { x: 0.59375, y: 0.09375 },
  { x: 0.65625, y: 0.09375 },
  { x: 0.65625, y: 0.09375 },
  { x: 0.71875, y: 0.09375 },
  { x: 0.71875, y: 0.09375 },
  { x: 0.78125, y: 0.09375 },
  { x: 0.78125, y: 0.09375 },
  { x: 0.84375, y: 0.09375 },
  { x: 0.84375, y: 0.09375 },
  { x: 0.90625, y: 0.09375 },
  { x: 0.90625, y: 0.09375 },
  { x: 0.96875, y: 0.09375 },
  { x: 0.96875, y: 0.09375 },
  { x: 0.03125, y: 0.15625 },
  { x: 0.03125, y: 0.15625 },
  { x: 0.09375, y: 0.15625 },
  { x: 0.09375, y: 0.15625 },
  { x: 0.15625, y: 0.15625 },
  { x: 0.15625, y: 0.15625 },
  { x: 0.21875, y: 0.15625 },
  { x: 0.21875, y: 0.15625 },
  { x: 0.28125, y: 0.15625 },
  { x: 0.28125, y: 0.15625 },
  { x: 0.34375, y: 0.15625 },
  { x: 0.34375, y: 0.15625 },
  { x: 0.40625, y: 0.15625 },
  { x: 0.40625, y: 0.15625 },
  { x: 0.46875, y: 0.15625 },
  { x: 0.46875, y: 0.15625 },
  { x: 0.53125, y: 0.15625 },
  { x: 0.53125, y: 0.15625 },
  { x: 0.59375, y: 0.15625 },
  { x: 0.59375, y: 0.15625 },
  { x: 0.65625, y: 0.15625 },
  { x: 0.65625, y: 0.15625 },
  { x: 0.71875, y: 0.15625 },
  { x: 0.71875, y: 0.15625 },
  { x: 0.78125, y: 0.15625 },
  { x: 0.78125, y: 0.15625 },
  { x: 0.84375, y: 0.15625 },
  { x: 0.84375, y: 0.15625 },
  { x: 0.90625, y: 0.15625 },
  { x: 0.90625, y: 0.15625 },
  { x: 0.96875, y: 0.15625 },
  { x: 0.96875, y: 0.15625 },
  { x: 0.03125, y: 0.21875 },
  { x: 0.03125, y: 0.21875 },
  { x: 0.09375, y: 0.21875 },
  { x: 0.09375, y: 0.21875 },
  { x: 0.15625, y: 0.21875 },
  { x: 0.15625, y: 0.21875 },
  { x: 0.21875, y: 0.21875 },
  { x: 0.21875, y: 0.21875 },
  { x: 0.28125, y: 0.21875 },
  { x: 0.28125, y: 0.21875 },
  { x: 0.34375, y: 0.21875 },
  { x: 0.34375, y: 0.21875 },
  { x: 0.40625, y: 0.21875 },
  { x: 0.40625, y: 0.21875 },
  { x: 0.46875, y: 0.21875 },
  { x: 0.46875, y: 0.21875 },
  { x: 0.53125, y: 0.21875 },
  { x: 0.53125, y: 0.21875 },
  { x: 0.59375, y: 0.21875 },
  { x: 0.59375, y: 0.21875 },
  { x: 0.65625, y: 0.21875 },
  { x: 0.65625, y: 0.21875 },
  { x: 0.71875, y: 0.21875 },
  { x: 0.71875, y: 0.21875 },
  { x: 0.78125, y: 0.21875 },
  { x: 0.78125, y: 0.21875 },
  { x: 0.84375, y: 0.21875 },
  { x: 0.84375, y: 0.21875 },
  { x: 0.90625, y: 0.21875 },
  { x: 0.90625, y: 0.21875 },
  { x: 0.96875, y: 0.21875 },
  { x: 0.96875, y: 0.21875 },
  { x: 0.03125, y: 0.28125 },
  { x: 0.03125, y: 0.28125 },
  { x: 0.09375, y: 0.28125 },
  { x: 0.09375, y: 0.28125 },
  { x: 0.15625, y: 0.28125 },
  { x: 0.15625, y: 0.28125 },
  { x: 0.21875, y: 0.28125 },
  { x: 0.21875, y: 0.28125 },
  { x: 0.28125, y: 0.28125 },
  { x: 0.28125, y: 0.28125 },
  { x: 0.34375, y: 0.28125 },
  { x: 0.34375, y: 0.28125 },
  { x: 0.40625, y: 0.28125 },
  { x: 0.40625, y: 0.28125 },
  { x: 0.46875, y: 0.28125 },
  { x: 0.46875, y: 0.28125 },
  { x: 0.53125, y: 0.28125 },
  { x: 0.53125, y: 0.28125 },
  { x: 0.59375, y: 0.28125 },
  { x: 0.59375, y: 0.28125 },
  { x: 0.65625, y: 0.28125 },
  { x: 0.65625, y: 0.28125 },
  { x: 0.71875, y: 0.28125 },
  { x: 0.71875, y: 0.28125 },
  { x: 0.78125, y: 0.28125 },
  { x: 0.78125, y: 0.28125 },
  { x: 0.84375, y: 0.28125 },
  { x: 0.84375, y: 0.28125 },
  { x: 0.90625, y: 0.28125 },
  { x: 0.90625, y: 0.28125 },
  { x: 0.96875, y: 0.28125 },
  { x: 0.96875, y: 0.28125 },
  { x: 0.03125, y: 0.34375 },
  { x: 0.03125, y: 0.34375 },
  { x: 0.09375, y: 0.34375 },
  { x: 0.09375, y: 0.34375 },
  { x: 0.15625, y: 0.34375 },
  { x: 0.15625, y: 0.34375 },
  { x: 0.21875, y: 0.34375 },
  { x: 0.21875, y: 0.34375 },
  { x: 0.28125, y: 0.34375 },
  { x: 0.28125, y: 0.34375 },
  { x: 0.34375, y: 0.34375 },
  { x: 0.34375, y: 0.34375 },
  { x: 0.40625, y: 0.34375 },
  { x: 0.40625, y: 0.34375 },
  { x: 0.46875, y: 0.34375 },
  { x: 0.46875, y: 0.34375 },
  { x: 0.53125, y: 0.34375 },
  { x: 0.53125, y: 0.34375 },
  { x: 0.59375, y: 0.34375 },
  { x: 0.59375, y: 0.34375 },
  { x: 0.65625, y: 0.34375 },
  { x: 0.65625, y: 0.34375 },
  { x: 0.71875, y: 0.34375 },
  { x: 0.71875, y: 0.34375 },
  { x: 0.78125, y: 0.34375 },
  { x: 0.78125, y: 0.34375 },
  { x: 0.84375, y: 0.34375 },
  { x: 0.84375, y: 0.34375 },
  { x: 0.90625, y: 0.34375 },
  { x: 0.90625, y: 0.34375 },
  { x: 0.96875, y: 0.34375 },
  { x: 0.96875, y: 0.34375 },
  { x: 0.03125, y: 0.40625 },
  { x: 0.03125, y: 0.40625 },
  { x: 0.09375, y: 0.40625 },
  { x: 0.09375, y: 0.40625 },
  { x: 0.15625, y: 0.40625 },
  { x: 0.15625, y: 0.40625 },
  { x: 0.21875, y: 0.40625 },
  { x: 0.21875, y: 0.40625 },
  { x: 0.28125, y: 0.40625 },
  { x: 0.28125, y: 0.40625 },
  { x: 0.34375, y: 0.40625 },
  { x: 0.34375, y: 0.40625 },
  { x: 0.40625, y: 0.40625 },
  { x: 0.40625, y: 0.40625 },
  { x: 0.46875, y: 0.40625 },
  { x: 0.46875, y: 0.40625 },
  { x: 0.53125, y: 0.40625 },
  { x: 0.53125, y: 0.40625 },
  { x: 0.59375, y: 0.40625 },
  { x: 0.59375, y: 0.40625 },
  { x: 0.65625, y: 0.40625 },
  { x: 0.65625, y: 0.40625 },
  { x: 0.71875, y: 0.40625 },
  { x: 0.71875, y: 0.40625 },
  { x: 0.78125, y: 0.40625 },
  { x: 0.78125, y: 0.40625 },
  { x: 0.84375, y: 0.40625 },
  { x: 0.84375, y: 0.40625 },
  { x: 0.90625, y: 0.40625 },
  { x: 0.90625, y: 0.40625 },
  { x: 0.96875, y: 0.40625 },
  { x: 0.96875, y: 0.40625 },
  { x: 0.03125, y: 0.46875 },
  { x: 0.03125, y: 0.46875 },
  { x: 0.09375, y: 0.46875 },
  { x: 0.09375, y: 0.46875 },
  { x: 0.15625, y: 0.46875 },
  { x: 0.15625, y: 0.46875 },
  { x: 0.21875, y: 0.46875 },
  { x: 0.21875, y: 0.46875 },
  { x: 0.28125, y: 0.46875 },
  { x: 0.28125, y: 0.46875 },
  { x: 0.34375, y: 0.46875 },
  { x: 0.34375, y: 0.46875 },
  { x: 0.40625, y: 0.46875 },
  { x: 0.40625, y: 0.46875 },
  { x: 0.46875, y: 0.46875 },
  { x: 0.46875, y: 0.46875 },
  { x: 0.53125, y: 0.46875 },
  { x: 0.53125, y: 0.46875 },
  { x: 0.59375, y: 0.46875 },
  { x: 0.59375, y: 0.46875 },
  { x: 0.65625, y: 0.46875 },
  { x: 0.65625, y: 0.46875 },
  { x: 0.71875, y: 0.46875 },
  { x: 0.71875, y: 0.46875 },
  { x: 0.78125, y: 0.46875 },
  { x: 0.78125, y: 0.46875 },
  { x: 0.84375, y: 0.46875 },
  { x: 0.84375, y: 0.46875 },
  { x: 0.90625, y: 0.46875 },
  { x: 0.90625, y: 0.46875 },
  { x: 0.96875, y: 0.46875 },
  { x: 0.96875, y: 0.46875 },
  { x: 0.03125, y: 0.53125 },
  { x: 0.03125, y: 0.53125 },
  { x: 0.09375, y: 0.53125 },
  { x: 0.09375, y: 0.53125 },
  { x: 0.15625, y: 0.53125 },
  { x: 0.15625, y: 0.53125 },
  { x: 0.21875, y: 0.53125 },
  { x: 0.21875, y: 0.53125 },
  { x: 0.28125, y: 0.53125 },
  { x: 0.28125, y: 0.53125 },
  { x: 0.34375, y: 0.53125 },
  { x: 0.34375, y: 0.53125 },
  { x: 0.40625, y: 0.53125 },
  { x: 0.40625, y: 0.53125 },
  { x: 0.46875, y: 0.53125 },
  { x: 0.46875, y: 0.53125 },
  { x: 0.53125, y: 0.53125 },
  { x: 0.53125, y: 0.53125 },
  { x: 0.59375, y: 0.53125 },
  { x: 0.59375, y: 0.53125 },
  { x: 0.65625, y: 0.53125 },
  { x: 0.65625, y: 0.53125 },
  { x: 0.71875, y: 0.53125 },
  { x: 0.71875, y: 0.53125 },
  { x: 0.78125, y: 0.53125 },
  { x: 0.78125, y: 0.53125 },
  { x: 0.84375, y: 0.53125 },
  { x: 0.84375, y: 0.53125 },
  { x: 0.90625, y: 0.53125 },
  { x: 0.90625, y: 0.53125 },
  { x: 0.96875, y: 0.53125 },
  { x: 0.96875, y: 0.53125 },
  { x: 0.03125, y: 0.59375 },
  { x: 0.03125, y: 0.59375 },
  { x: 0.09375, y: 0.59375 },
  { x: 0.09375, y: 0.59375 },
  { x: 0.15625, y: 0.59375 },
  { x: 0.15625, y: 0.59375 },
  { x: 0.21875, y: 0.59375 },
  { x: 0.21875, y: 0.59375 },
  { x: 0.28125, y: 0.59375 },
  { x: 0.28125, y: 0.59375 },
  { x: 0.34375, y: 0.59375 },
  { x: 0.34375, y: 0.59375 },
  { x: 0.40625, y: 0.59375 },
  { x: 0.40625, y: 0.59375 },
  { x: 0.46875, y: 0.59375 },
  { x: 0.46875, y: 0.59375 },
  { x: 0.53125, y: 0.59375 },
  { x: 0.53125, y: 0.59375 },
  { x: 0.59375, y: 0.59375 },
  { x: 0.59375, y: 0.59375 },
  { x: 0.65625, y: 0.59375 },
  { x: 0.65625, y: 0.59375 },
  { x: 0.71875, y: 0.59375 },
  { x: 0.71875, y: 0.59375 },
  { x: 0.78125, y: 0.59375 },
  { x: 0.78125, y: 0.59375 },
  { x: 0.84375, y: 0.59375 },
  { x: 0.84375, y: 0.59375 },
  { x: 0.90625, y: 0.59375 },
  { x: 0.90625, y: 0.59375 },
  { x: 0.96875, y: 0.59375 },
  { x: 0.96875, y: 0.59375 },
  { x: 0.03125, y: 0.65625 },
  { x: 0.03125, y: 0.65625 },
  { x: 0.09375, y: 0.65625 },
  { x: 0.09375, y: 0.65625 },
  { x: 0.15625, y: 0.65625 },
  { x: 0.15625, y: 0.65625 },
  { x: 0.21875, y: 0.65625 },
  { x: 0.21875, y: 0.65625 },
  { x: 0.28125, y: 0.65625 },
  { x: 0.28125, y: 0.65625 },
  { x: 0.34375, y: 0.65625 },
  { x: 0.34375, y: 0.65625 },
  { x: 0.40625, y: 0.65625 },
  { x: 0.40625, y: 0.65625 },
  { x: 0.46875, y: 0.65625 },
  { x: 0.46875, y: 0.65625 },
  { x: 0.53125, y: 0.65625 },
  { x: 0.53125, y: 0.65625 },
  { x: 0.59375, y: 0.65625 },
  { x: 0.59375, y: 0.65625 },
  { x: 0.65625, y: 0.65625 },
  { x: 0.65625, y: 0.65625 },
  { x: 0.71875, y: 0.65625 },
  { x: 0.71875, y: 0.65625 },
  { x: 0.78125, y: 0.65625 },
  { x: 0.78125, y: 0.65625 },
  { x: 0.84375, y: 0.65625 },
  { x: 0.84375, y: 0.65625 },
  { x: 0.90625, y: 0.65625 },
  { x: 0.90625, y: 0.65625 },
  { x: 0.96875, y: 0.65625 },
  { x: 0.96875, y: 0.65625 },
  { x: 0.03125, y: 0.71875 },
  { x: 0.03125, y: 0.71875 },
  { x: 0.09375, y: 0.71875 },
  { x: 0.09375, y: 0.71875 },
  { x: 0.15625, y: 0.71875 },
  { x: 0.15625, y: 0.71875 },
  { x: 0.21875, y: 0.71875 },
  { x: 0.21875, y: 0.71875 },
  { x: 0.28125, y: 0.71875 },
  { x: 0.28125, y: 0.71875 },
  { x: 0.34375, y: 0.71875 },
  { x: 0.34375, y: 0.71875 },
  { x: 0.40625, y: 0.71875 },
  { x: 0.40625, y: 0.71875 },
  { x: 0.46875, y: 0.71875 },
  { x: 0.46875, y: 0.71875 },
  { x: 0.53125, y: 0.71875 },
  { x: 0.53125, y: 0.71875 },
  { x: 0.59375, y: 0.71875 },
  { x: 0.59375, y: 0.71875 },
  { x: 0.65625, y: 0.71875 },
  { x: 0.65625, y: 0.71875 },
  { x: 0.71875, y: 0.71875 },
  { x: 0.71875, y: 0.71875 },
  { x: 0.78125, y: 0.71875 },
  { x: 0.78125, y: 0.71875 },
  { x: 0.84375, y: 0.71875 },
  { x: 0.84375, y: 0.71875 },
  { x: 0.90625, y: 0.71875 },
  { x: 0.90625, y: 0.71875 },
  { x: 0.96875, y: 0.71875 },
  { x: 0.96875, y: 0.71875 },
  { x: 0.03125, y: 0.78125 },
  { x: 0.03125, y: 0.78125 },
  { x: 0.09375, y: 0.78125 },
  { x: 0.09375, y: 0.78125 },
  { x: 0.15625, y: 0.78125 },
  { x: 0.15625, y: 0.78125 },
  { x: 0.21875, y: 0.78125 },
  { x: 0.21875, y: 0.78125 },
  { x: 0.28125, y: 0.78125 },
  { x: 0.28125, y: 0.78125 },
  { x: 0.34375, y: 0.78125 },
  { x: 0.34375, y: 0.78125 },
  { x: 0.40625, y: 0.78125 },
  { x: 0.40625, y: 0.78125 },
  { x: 0.46875, y: 0.78125 },
  { x: 0.46875, y: 0.78125 },
  { x: 0.53125, y: 0.78125 },
  { x: 0.53125, y: 0.78125 },
  { x: 0.59375, y: 0.78125 },
  { x: 0.59375, y: 0.78125 },
  { x: 0.65625, y: 0.78125 },
  { x: 0.65625, y: 0.78125 },
  { x: 0.71875, y: 0.78125 },
  { x: 0.71875, y: 0.78125 },
  { x: 0.78125, y: 0.78125 },
  { x: 0.78125, y: 0.78125 },
  { x: 0.84375, y: 0.78125 },
  { x: 0.84375, y: 0.78125 },
  { x: 0.90625, y: 0.78125 },
  { x: 0.90625, y: 0.78125 },
  { x: 0.96875, y: 0.78125 },
  { x: 0.96875, y: 0.78125 },
  { x: 0.03125, y: 0.84375 },
  { x: 0.03125, y: 0.84375 },
  { x: 0.09375, y: 0.84375 },
  { x: 0.09375, y: 0.84375 },
  { x: 0.15625, y: 0.84375 },
  { x: 0.15625, y: 0.84375 },
  { x: 0.21875, y: 0.84375 },
  { x: 0.21875, y: 0.84375 },
  { x: 0.28125, y: 0.84375 },
  { x: 0.28125, y: 0.84375 },
  { x: 0.34375, y: 0.84375 },
  { x: 0.34375, y: 0.84375 },
  { x: 0.40625, y: 0.84375 },
  { x: 0.40625, y: 0.84375 },
  { x: 0.46875, y: 0.84375 },
  { x: 0.46875, y: 0.84375 },
  { x: 0.53125, y: 0.84375 },
  { x: 0.53125, y: 0.84375 },
  { x: 0.59375, y: 0.84375 },
  { x: 0.59375, y: 0.84375 },
  { x: 0.65625, y: 0.84375 },
  { x: 0.65625, y: 0.84375 },
  { x: 0.71875, y: 0.84375 },
  { x: 0.71875, y: 0.84375 },
  { x: 0.78125, y: 0.84375 },
  { x: 0.78125, y: 0.84375 },
  { x: 0.84375, y: 0.84375 },
  { x: 0.84375, y: 0.84375 },
  { x: 0.90625, y: 0.84375 },
  { x: 0.90625, y: 0.84375 },
  { x: 0.96875, y: 0.84375 },
  { x: 0.96875, y: 0.84375 },
  { x: 0.03125, y: 0.90625 },
  { x: 0.03125, y: 0.90625 },
  { x: 0.09375, y: 0.90625 },
  { x: 0.09375, y: 0.90625 },
  { x: 0.15625, y: 0.90625 },
  { x: 0.15625, y: 0.90625 },
  { x: 0.21875, y: 0.90625 },
  { x: 0.21875, y: 0.90625 },
  { x: 0.28125, y: 0.90625 },
  { x: 0.28125, y: 0.90625 },
  { x: 0.34375, y: 0.90625 },
  { x: 0.34375, y: 0.90625 },
  { x: 0.40625, y: 0.90625 },
  { x: 0.40625, y: 0.90625 },
  { x: 0.46875, y: 0.90625 },
  { x: 0.46875, y: 0.90625 },
  { x: 0.53125, y: 0.90625 },
  { x: 0.53125, y: 0.90625 },
  { x: 0.59375, y: 0.90625 },
  { x: 0.59375, y: 0.90625 },
  { x: 0.65625, y: 0.90625 },
  { x: 0.65625, y: 0.90625 },
  { x: 0.71875, y: 0.90625 },
  { x: 0.71875, y: 0.90625 },
  { x: 0.78125, y: 0.90625 },
  { x: 0.78125, y: 0.90625 },
  { x: 0.84375, y: 0.90625 },
  { x: 0.84375, y: 0.90625 },
  { x: 0.90625, y: 0.90625 },
  { x: 0.90625, y: 0.90625 },
  { x: 0.96875, y: 0.90625 },
  { x: 0.96875, y: 0.90625 },
  { x: 0.03125, y: 0.96875 },
  { x: 0.03125, y: 0.96875 },
  { x: 0.09375, y: 0.96875 },
  { x: 0.09375, y: 0.96875 },
  { x: 0.15625, y: 0.96875 },
  { x: 0.15625, y: 0.96875 },
  { x: 0.21875, y: 0.96875 },
  { x: 0.21875, y: 0.96875 },
  { x: 0.28125, y: 0.96875 },
  { x: 0.28125, y: 0.96875 },
  { x: 0.34375, y: 0.96875 },
  { x: 0.34375, y: 0.96875 },
  { x: 0.40625, y: 0.96875 },
  { x: 0.40625, y: 0.96875 },
  { x: 0.46875, y: 0.96875 },
  { x: 0.46875, y: 0.96875 },
  { x: 0.53125, y: 0.96875 },
  { x: 0.53125, y: 0.96875 },
  { x: 0.59375, y: 0.96875 },
  { x: 0.59375, y: 0.96875 },
  { x: 0.65625, y: 0.96875 },
  { x: 0.65625, y: 0.96875 },
  { x: 0.71875, y: 0.96875 },
  { x: 0.71875, y: 0.96875 },
  { x: 0.78125, y: 0.96875 },
  { x: 0.78125, y: 0.96875 },
  { x: 0.84375, y: 0.96875 },
  { x: 0.84375, y: 0.96875 },
  { x: 0.90625, y: 0.96875 },
  { x: 0.90625, y: 0.96875 },
  { x: 0.96875, y: 0.96875 },
  { x: 0.96875, y: 0.96875 },
  { x: 0.0625, y: 0.0625 },
  { x: 0.0625, y: 0.0625 },
  { x: 0.0625, y: 0.0625 },
  { x: 0.0625, y: 0.0625 },
  { x: 0.0625, y: 0.0625 },
  { x: 0.0625, y: 0.0625 },
  { x: 0.1875, y: 0.0625 },
  { x: 0.1875, y: 0.0625 },
  { x: 0.1875, y: 0.0625 },
  { x: 0.1875, y: 0.0625 },
  { x: 0.1875, y: 0.0625 },
  { x: 0.1875, y: 0.0625 },
  { x: 0.3125, y: 0.0625 },
  { x: 0.3125, y: 0.0625 },
  { x: 0.3125, y: 0.0625 },
  { x: 0.3125, y: 0.0625 },
  { x: 0.3125, y: 0.0625 },
  { x: 0.3125, y: 0.0625 },
  { x: 0.4375, y: 0.0625 },
  { x: 0.4375, y: 0.0625 },
  { x: 0.4375, y: 0.0625 },
  { x: 0.4375, y: 0.0625 },
  { x: 0.4375, y: 0.0625 },
  { x: 0.4375, y: 0.0625 },
  { x: 0.5625, y: 0.0625 },
  { x: 0.5625, y: 0.0625 },
  { x: 0.5625, y: 0.0625 },
  { x: 0.5625, y: 0.0625 },
  { x: 0.5625, y: 0.0625 },
  { x: 0.5625, y: 0.0625 },
  { x: 0.6875, y: 0.0625 },
  { x: 0.6875, y: 0.0625 },
  { x: 0.6875, y: 0.0625 },
  { x: 0.6875, y: 0.0625 },
  { x: 0.6875, y: 0.0625 },
  { x: 0.6875, y: 0.0625 },
  { x: 0.8125, y: 0.0625 },
  { x: 0.8125, y: 0.0625 },
  { x: 0.8125, y: 0.0625 },
  { x: 0.8125, y: 0.0625 },
  { x: 0.8125, y: 0.0625 },
  { x: 0.8125, y: 0.0625 },
  { x: 0.9375, y: 0.0625 },
  { x: 0.9375, y: 0.0625 },
  { x: 0.9375, y: 0.0625 },
  { x: 0.9375, y: 0.0625 },
  { x: 0.9375, y: 0.0625 },
  { x: 0.9375, y: 0.0625 },
  { x: 0.0625, y: 0.1875 },
  { x: 0.0625, y: 0.1875 },
  { x: 0.0625, y: 0.1875 },
  { x: 0.0625, y: 0.1875 },
  { x: 0.0625, y: 0.1875 },
  { x: 0.0625, y: 0.1875 },
  { x: 0.1875, y: 0.1875 },
  { x: 0.1875, y: 0.1875 },
  { x: 0.1875, y: 0.1875 },
  { x: 0.1875, y: 0.1875 },
  { x: 0.1875, y: 0.1875 },
  { x: 0.1875, y: 0.1875 },
  { x: 0.3125, y: 0.1875 },
  { x: 0.3125, y: 0.1875 },
  { x: 0.3125, y: 0.1875 },
  { x: 0.3125, y: 0.1875 },
  { x: 0.3125, y: 0.1875 },
  { x: 0.3125, y: 0.1875 },
  { x: 0.4375, y: 0.1875 },
  { x: 0.4375, y: 0.1875 },
  { x: 0.4375, y: 0.1875 },
  { x: 0.4375, y: 0.1875 },
  { x: 0.4375, y: 0.1875 },
  { x: 0.4375, y: 0.1875 },
  { x: 0.5625, y: 0.1875 },
  { x: 0.5625, y: 0.1875 },
  { x: 0.5625, y: 0.1875 },
  { x: 0.5625, y: 0.1875 },
  { x: 0.5625, y: 0.1875 },
  { x: 0.5625, y: 0.1875 },
  { x: 0.6875, y: 0.1875 },
  { x: 0.6875, y: 0.1875 },
  { x: 0.6875, y: 0.1875 },
  { x: 0.6875, y: 0.1875 },
  { x: 0.6875, y: 0.1875 },
  { x: 0.6875, y: 0.1875 },
  { x: 0.8125, y: 0.1875 },
  { x: 0.8125, y: 0.1875 },
  { x: 0.8125, y: 0.1875 },
  { x: 0.8125, y: 0.1875 },
  { x: 0.8125, y: 0.1875 },
  { x: 0.8125, y: 0.1875 },
  { x: 0.9375, y: 0.1875 },
  { x: 0.9375, y: 0.1875 },
  { x: 0.9375, y: 0.1875 },
  { x: 0.9375, y: 0.1875 },
  { x: 0.9375, y: 0.1875 },
  { x: 0.9375, y: 0.1875 },
  { x: 0.0625, y: 0.3125 },
  { x: 0.0625, y: 0.3125 },
  { x: 0.0625, y: 0.3125 },
  { x: 0.0625, y: 0.3125 },
  { x: 0.0625, y: 0.3125 },
  { x: 0.0625, y: 0.3125 },
  { x: 0.1875, y: 0.3125 },
  { x: 0.1875, y: 0.3125 },
  { x: 0.1875, y: 0.3125 },
  { x: 0.1875, y: 0.3125 },
  { x: 0.1875, y: 0.3125 },
  { x: 0.1875, y: 0.3125 },
  { x: 0.3125, y: 0.3125 },
  { x: 0.3125, y: 0.3125 },
  { x: 0.3125, y: 0.3125 },
  { x: 0.3125, y: 0.3125 },
  { x: 0.3125, y: 0.3125 },
  { x: 0.3125, y: 0.3125 },
  { x: 0.4375, y: 0.3125 },
  { x: 0.4375, y: 0.3125 },
  { x: 0.4375, y: 0.3125 },
  { x: 0.4375, y: 0.3125 },
  { x: 0.4375, y: 0.3125 },
  { x: 0.4375, y: 0.3125 },
  { x: 0.5625, y: 0.3125 },
  { x: 0.5625, y: 0.3125 },
  { x: 0.5625, y: 0.3125 },
  { x: 0.5625, y: 0.3125 },
  { x: 0.5625, y: 0.3125 },
  { x: 0.5625, y: 0.3125 },
  { x: 0.6875, y: 0.3125 },
  { x: 0.6875, y: 0.3125 },
  { x: 0.6875, y: 0.3125 },
  { x: 0.6875, y: 0.3125 },
  { x: 0.6875, y: 0.3125 },
  { x: 0.6875, y: 0.3125 },
  { x: 0.8125, y: 0.3125 },
  { x: 0.8125, y: 0.3125 },
  { x: 0.8125, y: 0.3125 },
  { x: 0.8125, y: 0.3125 },
  { x: 0.8125, y: 0.3125 },
  { x: 0.8125, y: 0.3125 },
  { x: 0.9375, y: 0.3125 },
  { x: 0.9375, y: 0.3125 },
  { x: 0.9375, y: 0.3125 },
  { x: 0.9375, y: 0.3125 },
  { x: 0.9375, y: 0.3125 },
  { x: 0.9375, y: 0.3125 },
  { x: 0.0625, y: 0.4375 },
  { x: 0.0625, y: 0.4375 },
  { x: 0.0625, y: 0.4375 },
  { x: 0.0625, y: 0.4375 },
  { x: 0.0625, y: 0.4375 },
  { x: 0.0625, y: 0.4375 },
  { x: 0.1875, y: 0.4375 },
  { x: 0.1875, y: 0.4375 },
  { x: 0.1875, y: 0.4375 },
  { x: 0.1875, y: 0.4375 },
  { x: 0.1875, y: 0.4375 },
  { x: 0.1875, y: 0.4375 },
  { x: 0.3125, y: 0.4375 },
  { x: 0.3125, y: 0.4375 },
  { x: 0.3125, y: 0.4375 },
  { x: 0.3125, y: 0.4375 },
  { x: 0.3125, y: 0.4375 },
  { x: 0.3125, y: 0.4375 },
  { x: 0.4375, y: 0.4375 },
  { x: 0.4375, y: 0.4375 },
  { x: 0.4375, y: 0.4375 },
  { x: 0.4375, y: 0.4375 },
  { x: 0.4375, y: 0.4375 },
  { x: 0.4375, y: 0.4375 },
  { x: 0.5625, y: 0.4375 },
  { x: 0.5625, y: 0.4375 },
  { x: 0.5625, y: 0.4375 },
  { x: 0.5625, y: 0.4375 },
  { x: 0.5625, y: 0.4375 },
  { x: 0.5625, y: 0.4375 },
  { x: 0.6875, y: 0.4375 },
  { x: 0.6875, y: 0.4375 },
  { x: 0.6875, y: 0.4375 },
  { x: 0.6875, y: 0.4375 },
  { x: 0.6875, y: 0.4375 },
  { x: 0.6875, y: 0.4375 },
  { x: 0.8125, y: 0.4375 },
  { x: 0.8125, y: 0.4375 },
  { x: 0.8125, y: 0.4375 },
  { x: 0.8125, y: 0.4375 },
  { x: 0.8125, y: 0.4375 },
  { x: 0.8125, y: 0.4375 },
  { x: 0.9375, y: 0.4375 },
  { x: 0.9375, y: 0.4375 },
  { x: 0.9375, y: 0.4375 },
  { x: 0.9375, y: 0.4375 },
  { x: 0.9375, y: 0.4375 },
  { x: 0.9375, y: 0.4375 },
  { x: 0.0625, y: 0.5625 },
  { x: 0.0625, y: 0.5625 },
  { x: 0.0625, y: 0.5625 },
  { x: 0.0625, y: 0.5625 },
  { x: 0.0625, y: 0.5625 },
  { x: 0.0625, y: 0.5625 },
  { x: 0.1875, y: 0.5625 },
  { x: 0.1875, y: 0.5625 },
  { x: 0.1875, y: 0.5625 },
  { x: 0.1875, y: 0.5625 },
  { x: 0.1875, y: 0.5625 },
  { x: 0.1875, y: 0.5625 },
  { x: 0.3125, y: 0.5625 },
  { x: 0.3125, y: 0.5625 },
  { x: 0.3125, y: 0.5625 },
  { x: 0.3125, y: 0.5625 },
  { x: 0.3125, y: 0.5625 },
  { x: 0.3125, y: 0.5625 },
  { x: 0.4375, y: 0.5625 },
  { x: 0.4375, y: 0.5625 },
  { x: 0.4375, y: 0.5625 },
  { x: 0.4375, y: 0.5625 },
  { x: 0.4375, y: 0.5625 },
  { x: 0.4375, y: 0.5625 },
  { x: 0.5625, y: 0.5625 },
  { x: 0.5625, y: 0.5625 },
  { x: 0.5625, y: 0.5625 },
  { x: 0.5625, y: 0.5625 },
  { x: 0.5625, y: 0.5625 },
  { x: 0.5625, y: 0.5625 },
  { x: 0.6875, y: 0.5625 },
  { x: 0.6875, y: 0.5625 },
  { x: 0.6875, y: 0.5625 },
  { x: 0.6875, y: 0.5625 },
  { x: 0.6875, y: 0.5625 },
  { x: 0.6875, y: 0.5625 },
  { x: 0.8125, y: 0.5625 },
  { x: 0.8125, y: 0.5625 },
  { x: 0.8125, y: 0.5625 },
  { x: 0.8125, y: 0.5625 },
  { x: 0.8125, y: 0.5625 },
  { x: 0.8125, y: 0.5625 },
  { x: 0.9375, y: 0.5625 },
  { x: 0.9375, y: 0.5625 },
  { x: 0.9375, y: 0.5625 },
  { x: 0.9375, y: 0.5625 },
  { x: 0.9375, y: 0.5625 },
  { x: 0.9375, y: 0.5625 },
  { x: 0.0625, y: 0.6875 },
  { x: 0.0625, y: 0.6875 },
  { x: 0.0625, y: 0.6875 },
  { x: 0.0625, y: 0.6875 },
  { x: 0.0625, y: 0.6875 },
  { x: 0.0625, y: 0.6875 },
  { x: 0.1875, y: 0.6875 },
  { x: 0.1875, y: 0.6875 },
  { x: 0.1875, y: 0.6875 },
  { x: 0.1875, y: 0.6875 },
  { x: 0.1875, y: 0.6875 },
  { x: 0.1875, y: 0.6875 },
  { x: 0.3125, y: 0.6875 },
  { x: 0.3125, y: 0.6875 },
  { x: 0.3125, y: 0.6875 },
  { x: 0.3125, y: 0.6875 },
  { x: 0.3125, y: 0.6875 },
  { x: 0.3125, y: 0.6875 },
  { x: 0.4375, y: 0.6875 },
  { x: 0.4375, y: 0.6875 },
  { x: 0.4375, y: 0.6875 },
  { x: 0.4375, y: 0.6875 },
  { x: 0.4375, y: 0.6875 },
  { x: 0.4375, y: 0.6875 },
  { x: 0.5625, y: 0.6875 },
  { x: 0.5625, y: 0.6875 },
  { x: 0.5625, y: 0.6875 },
  { x: 0.5625, y: 0.6875 },
  { x: 0.5625, y: 0.6875 },
  { x: 0.5625, y: 0.6875 },
  { x: 0.6875, y: 0.6875 },
  { x: 0.6875, y: 0.6875 },
  { x: 0.6875, y: 0.6875 },
  { x: 0.6875, y: 0.6875 },
  { x: 0.6875, y: 0.6875 },
  { x: 0.6875, y: 0.6875 },
  { x: 0.8125, y: 0.6875 },
  { x: 0.8125, y: 0.6875 },
  { x: 0.8125, y: 0.6875 },
  { x: 0.8125, y: 0.6875 },
  { x: 0.8125, y: 0.6875 },
  { x: 0.8125, y: 0.6875 },
  { x: 0.9375, y: 0.6875 },
  { x: 0.9375, y: 0.6875 },
  { x: 0.9375, y: 0.6875 },
  { x: 0.9375, y: 0.6875 },
  { x: 0.9375, y: 0.6875 },
  { x: 0.9375, y: 0.6875 },
  { x: 0.0625, y: 0.8125 },
  { x: 0.0625, y: 0.8125 },
  { x: 0.0625, y: 0.8125 },
  { x: 0.0625, y: 0.8125 },
  { x: 0.0625, y: 0.8125 },
  { x: 0.0625, y: 0.8125 },
  { x: 0.1875, y: 0.8125 },
  { x: 0.1875, y: 0.8125 },
  { x: 0.1875, y: 0.8125 },
  { x: 0.1875, y: 0.8125 },
  { x: 0.1875, y: 0.8125 },
  { x: 0.1875, y: 0.8125 },
  { x: 0.3125, y: 0.8125 },
  { x: 0.3125, y: 0.8125 },
  { x: 0.3125, y: 0.8125 },
  { x: 0.3125, y: 0.8125 },
  { x: 0.3125, y: 0.8125 },
  { x: 0.3125, y: 0.8125 },
  { x: 0.4375, y: 0.8125 },
  { x: 0.4375, y: 0.8125 },
  { x: 0.4375, y: 0.8125 },
  { x: 0.4375, y: 0.8125 },
  { x: 0.4375, y: 0.8125 },
  { x: 0.4375, y: 0.8125 },
  { x: 0.5625, y: 0.8125 },
  { x: 0.5625, y: 0.8125 },
  { x: 0.5625, y: 0.8125 },
  { x: 0.5625, y: 0.8125 },
  { x: 0.5625, y: 0.8125 },
  { x: 0.5625, y: 0.8125 },
  { x: 0.6875, y: 0.8125 },
  { x: 0.6875, y: 0.8125 },
  { x: 0.6875, y: 0.8125 },
  { x: 0.6875, y: 0.8125 },
  { x: 0.6875, y: 0.8125 },
  { x: 0.6875, y: 0.8125 },
  { x: 0.8125, y: 0.8125 },
  { x: 0.8125, y: 0.8125 },
  { x: 0.8125, y: 0.8125 },
  { x: 0.8125, y: 0.8125 },
  { x: 0.8125, y: 0.8125 },
  { x: 0.8125, y: 0.8125 },
  { x: 0.9375, y: 0.8125 },
  { x: 0.9375, y: 0.8125 },
  { x: 0.9375, y: 0.8125 },
  { x: 0.9375, y: 0.8125 },
  { x: 0.9375, y: 0.8125 },
  { x: 0.9375, y: 0.8125 },
  { x: 0.0625, y: 0.9375 },
  { x: 0.0625, y: 0.9375 },
  { x: 0.0625, y: 0.9375 },
  { x: 0.0625, y: 0.9375 },
  { x: 0.0625, y: 0.9375 },
  { x: 0.0625, y: 0.9375 },
  { x: 0.1875, y: 0.9375 },
  { x: 0.1875, y: 0.9375 },
  { x: 0.1875, y: 0.9375 },
  { x: 0.1875, y: 0.9375 },
  { x: 0.1875, y: 0.9375 },
  { x: 0.1875, y: 0.9375 },
  { x: 0.3125, y: 0.9375 },
  { x: 0.3125, y: 0.9375 },
  { x: 0.3125, y: 0.9375 },
  { x: 0.3125, y: 0.9375 },
  { x: 0.3125, y: 0.9375 },
  { x: 0.3125, y: 0.9375 },
  { x: 0.4375, y: 0.9375 },
  { x: 0.4375, y: 0.9375 },
  { x: 0.4375, y: 0.9375 },
  { x: 0.4375, y: 0.9375 },
  { x: 0.4375, y: 0.9375 },
  { x: 0.4375, y: 0.9375 },
  { x: 0.5625, y: 0.9375 },
  { x: 0.5625, y: 0.9375 },
  { x: 0.5625, y: 0.9375 },
  { x: 0.5625, y: 0.9375 },
  { x: 0.5625, y: 0.9375 },
  { x: 0.5625, y: 0.9375 },
  { x: 0.6875, y: 0.9375 },
  { x: 0.6875, y: 0.9375 },
  { x: 0.6875, y: 0.9375 },
  { x: 0.6875, y: 0.9375 },
  { x: 0.6875, y: 0.9375 },
  { x: 0.6875, y: 0.9375 },
  { x: 0.8125, y: 0.9375 },
  { x: 0.8125, y: 0.9375 },
  { x: 0.8125, y: 0.9375 },
  { x: 0.8125, y: 0.9375 },
  { x: 0.8125, y: 0.9375 },
  { x: 0.8125, y: 0.9375 },
  { x: 0.9375, y: 0.9375 },
  { x: 0.9375, y: 0.9375 },
  { x: 0.9375, y: 0.9375 },
  { x: 0.9375, y: 0.9375 },
  { x: 0.9375, y: 0.9375 },
  { x: 0.9375, y: 0.9375 },
];
var Nt = class {
  constructor(t) {
    w(this, "model");
    w(this, "anchors");
    w(this, "anchorsTensor");
    w(this, "inputSize");
    w(this, "inputSizeTensor");
    w(this, "doubleInputSizeTensor");
    var n, o, r, s;
    (this.model = t),
      (this.anchors = Qn.map((A) => [A.x, A.y])),
      (this.anchorsTensor = W.tensor2d(this.anchors)),
      (this.inputSize =
        ((s =
          (r =
            (o =
              (n = this == null ? void 0 : this.model) == null
                ? void 0
                : n.inputs) == null
              ? void 0
              : o[0]) == null
            ? void 0
            : r.shape) == null
          ? void 0
          : s[2]) || 0),
      (this.inputSizeTensor = W.tensor1d([this.inputSize, this.inputSize])),
      (this.doubleInputSizeTensor = W.tensor1d([
        this.inputSize * 2,
        this.inputSize * 2,
      ]));
  }
  normalizeBoxes(t) {
    let n = {};
    (n.boxOffsets = W.slice(t, [0, 0], [-1, 2])),
      (n.boxSizes = W.slice(t, [0, 2], [-1, 2])),
      (n.div = W.div(n.boxOffsets, this.inputSizeTensor)),
      (n.boxCenterPoints = W.add(n.div, this.anchorsTensor)),
      (n.halfBoxSizes = W.div(n.boxSizes, this.doubleInputSizeTensor)),
      (n.sub = W.sub(n.boxCenterPoints, n.halfBoxSizes)),
      (n.startPoints = W.mul(n.sub, this.inputSizeTensor)),
      (n.add = W.add(n.boxCenterPoints, n.halfBoxSizes)),
      (n.endPoints = W.mul(n.add, this.inputSizeTensor));
    let o = W.concat2d([n.startPoints, n.endPoints], 1);
    return Object.keys(n).forEach((r) => W.dispose(n[r])), o;
  }
  normalizeLandmarks(t, n) {
    let o = {};
    (o.reshape = W.reshape(t, [-1, 7, 2])),
      (o.div = W.div(o.reshape, this.inputSizeTensor)),
      (o.landmarks = W.add(o.div, this.anchors[n] ? this.anchors[n] : 0));
    let r = W.mul(o.landmarks, this.inputSizeTensor);
    return Object.keys(o).forEach((s) => W.dispose(o[s])), r;
  }
  async predict(t, n) {
    var a;
    let o = {};
    (o.resize = W.image.resizeBilinear(t, [this.inputSize, this.inputSize])),
      (o.div = W.div(o.resize, C.tf127)),
      (o.image = W.sub(o.div, C.tf1)),
      (o.batched = this.model.execute(o.image)),
      (o.predictions = W.squeeze(o.batched)),
      (o.slice = W.slice(o.predictions, [0, 0], [-1, 1])),
      (o.sigmoid = W.sigmoid(o.slice)),
      (o.scores = W.squeeze(o.sigmoid));
    let r = await o.scores.data();
    (o.boxes = W.slice(o.predictions, [0, 1], [-1, 4])),
      (o.norm = this.normalizeBoxes(o.boxes)),
      (o.nms = await W.image.nonMaxSuppressionAsync(
        o.norm,
        o.scores,
        3 * (((a = n.hand) == null ? void 0 : a.maxDetected) || 1),
        n.hand.iouThreshold,
        n.hand.minConfidence
      ));
    let s = await o.nms.array(),
      A = [];
    for (let l of s) {
      let c = {};
      (c.box = W.slice(o.norm, [l, 0], [1, -1])),
        (c.slice = W.slice(o.predictions, [l, 5], [1, 14])),
        (c.norm = this.normalizeLandmarks(c.slice, l)),
        (c.palmLandmarks = W.reshape(c.norm, [-1, 2]));
      let d = await c.box.data(),
        i = d.slice(0, 2),
        y = d.slice(2, 4),
        x = await c.palmLandmarks.array(),
        m = { startPoint: i, endPoint: y, palmLandmarks: x, confidence: r[l] },
        f = Un(m, [
          (t.shape[2] || 1) / this.inputSize,
          (t.shape[1] || 0) / this.inputSize,
        ]);
      A.push(f), Object.keys(c).forEach((h) => W.dispose(c[h]));
    }
    return Object.keys(o).forEach((l) => W.dispose(o[l])), A;
  }
};
var $0 = Z(H());
var DA = 5,
  _n = 1.65,
  $n = [0, 5, 9, 13, 17, 1, 2],
  FA = 0,
  BA = 2,
  eo = 0,
  It = class {
    constructor(t, n) {
      w(this, "handDetector");
      w(this, "handPoseModel");
      w(this, "inputSize");
      w(this, "storedBoxes");
      w(this, "skipped");
      w(this, "detectedHands");
      var o, r, s;
      (this.handDetector = t),
        (this.handPoseModel = n),
        (this.inputSize =
          ((s =
            (r = (o = this.handPoseModel) == null ? void 0 : o.inputs) == null
              ? void 0
              : r[0].shape) == null
            ? void 0
            : s[2]) || 0),
        (this.storedBoxes = []),
        (this.skipped = Number.MAX_SAFE_INTEGER),
        (this.detectedHands = 0);
    }
    calculateLandmarksBoundingBox(t) {
      let n = t.map((A) => A[0]),
        o = t.map((A) => A[1]),
        r = [Math.min(...n), Math.min(...o)],
        s = [Math.max(...n), Math.max(...o)];
      return { startPoint: r, endPoint: s };
    }
    getBoxForPalmLandmarks(t, n) {
      let o = t.map((s) => t1([...s, 1], n)),
        r = this.calculateLandmarksBoundingBox(o);
      return St(jt(r), DA);
    }
    getBoxForHandLandmarks(t) {
      let n = this.calculateLandmarksBoundingBox(t),
        o = St(jt(n), _n);
      o.palmLandmarks = [];
      for (let r = 0; r < $n.length; r++)
        o.palmLandmarks.push(t[$n[r]].slice(0, 2));
      return o;
    }
    transformRawCoords(t, n, o, r) {
      let s = zt(n),
        A = [
          s[0] / this.inputSize,
          s[1] / this.inputSize,
          (s[0] + s[1]) / this.inputSize / 2,
        ],
        a = t.map((x) => [
          A[0] * (x[0] - this.inputSize / 2),
          A[1] * (x[1] - this.inputSize / 2),
          A[2] * x[2],
        ]),
        l = e1(o, [0, 0]),
        c = a.map((x) => [...t1(x, l), x[2]]),
        d = Kn(r),
        i = [...D2(n), 1],
        y = [qe(i, d[0]), qe(i, d[1])];
      return c.map((x) => [
        Math.trunc(x[0] + y[0]),
        Math.trunc(x[1] + y[1]),
        Math.trunc(x[2]),
      ]);
    }
    async estimateHands(t, n) {
      let o = !1,
        r,
        s = (n.hand.skipTime || 0) > v() - eo,
        A = this.skipped < (n.hand.skipFrames || 0);
      n.skipAllowed && s && A
        ? this.skipped++
        : ((r = await this.handDetector.predict(t, n)), (this.skipped = 0)),
        r &&
          r.length > 0 &&
          ((r.length !== this.detectedHands &&
            this.detectedHands !== n.hand.maxDetected) ||
            !n.hand.landmarks) &&
          ((this.detectedHands = 0),
          (this.storedBoxes = [...r]),
          this.storedBoxes.length > 0 && (o = !0));
      let a = [];
      for (let l = 0; l < this.storedBoxes.length; l++) {
        let c = this.storedBoxes[l];
        if (c)
          if (n.hand.landmarks) {
            let d = n.hand.rotation
                ? Yn(c.palmLandmarks[FA], c.palmLandmarks[BA])
                : 0,
              i = D2(c),
              y = [i[0] / t.shape[2], i[1] / t.shape[1]],
              x =
                n.hand.rotation && R.kernels.includes("rotatewithoffset")
                  ? $0.image.rotateWithOffset(t, d, 0, y)
                  : t.clone(),
              m = e1(-d, i),
              f = o ? this.getBoxForPalmLandmarks(c.palmLandmarks, m) : c,
              h = Xn(f, x, [this.inputSize, this.inputSize]),
              T = $0.div(h, C.tf255);
            $0.dispose(h), $0.dispose(x);
            let [g, p] = this.handPoseModel.execute(T);
            (eo = v()), $0.dispose(T);
            let u = (await g.data())[0];
            if (($0.dispose(g), u >= n.hand.minConfidence / 4)) {
              let k = $0.reshape(p, [-1, 3]),
                P = await k.array();
              $0.dispose(p), $0.dispose(k);
              let N = this.transformRawCoords(P, f, d, m),
                B = this.getBoxForHandLandmarks(N);
              this.storedBoxes[l] = { ...B, confidence: u };
              let J = {
                landmarks: N,
                confidence: u,
                boxConfidence: c.confidence,
                fingerConfidence: u,
                box: { topLeft: B.startPoint, bottomRight: B.endPoint },
              };
              a.push(J);
            } else this.storedBoxes[l] = null;
            $0.dispose(p);
          } else {
            let d = St(jt(c), _n),
              i = {
                confidence: c.confidence,
                boxConfidence: c.confidence,
                fingerConfidence: 0,
                box: { topLeft: d.startPoint, bottomRight: d.endPoint },
                landmarks: [],
              };
            a.push(i);
          }
      }
      return (
        (this.storedBoxes = this.storedBoxes.filter((l) => l !== null)),
        (this.detectedHands = a.length),
        a.length > n.hand.maxDetected && (a.length = n.hand.maxDetected),
        a
      );
    }
  };
var to = {
    thumb: [1, 2, 3, 4],
    index: [5, 6, 7, 8],
    middle: [9, 10, 11, 12],
    ring: [13, 14, 15, 16],
    pinky: [17, 18, 19, 20],
    palm: [0],
  },
  l2,
  c2,
  n1;
function GA() {
  let e = l2 ? new Nt(l2) : void 0;
  e && c2 && (n1 = new It(e, c2));
}
async function o1(e, t) {
  n1 || GA();
  let n = await n1.estimateHands(e, t);
  if (!n) return [];
  let o = [];
  for (let r = 0; r < n.length; r++) {
    let s = {};
    if (n[r].landmarks)
      for (let d of Object.keys(to)) s[d] = to[d].map((i) => n[r].landmarks[i]);
    let A = n[r].landmarks,
      a = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0, 0],
      l = [0, 0, 0, 0];
    if (A && A.length > 0) {
      for (let d of A)
        d[0] < a[0] && (a[0] = d[0]),
          d[1] < a[1] && (a[1] = d[1]),
          d[0] > a[2] && (a[2] = d[0]),
          d[1] > a[3] && (a[3] = d[1]);
      (a[2] -= a[0]),
        (a[3] -= a[1]),
        (l = [
          a[0] / (e.shape[2] || 0),
          a[1] / (e.shape[1] || 0),
          a[2] / (e.shape[2] || 0),
          a[3] / (e.shape[1] || 0),
        ]);
    } else
      (a = n[r].box
        ? [
            Math.trunc(Math.max(0, n[r].box.topLeft[0])),
            Math.trunc(Math.max(0, n[r].box.topLeft[1])),
            Math.trunc(
              Math.min(e.shape[2] || 0, n[r].box.bottomRight[0]) -
                Math.max(0, n[r].box.topLeft[0])
            ),
            Math.trunc(
              Math.min(e.shape[1] || 0, n[r].box.bottomRight[1]) -
                Math.max(0, n[r].box.topLeft[1])
            ),
          ]
        : [0, 0, 0, 0]),
        (l = [
          n[r].box.topLeft[0] / (e.shape[2] || 0),
          n[r].box.topLeft[1] / (e.shape[1] || 0),
          (n[r].box.bottomRight[0] - n[r].box.topLeft[0]) / (e.shape[2] || 0),
          (n[r].box.bottomRight[1] - n[r].box.topLeft[1]) / (e.shape[1] || 0),
        ]);
    let c = Et(A);
    o.push({
      id: r,
      score: Math.round(100 * n[r].confidence) / 100,
      boxScore: Math.round(100 * n[r].boxConfidence) / 100,
      fingerScore: Math.round(100 * n[r].fingerConfidence) / 100,
      label: "hand",
      box: a,
      boxRaw: l,
      keypoints: A,
      annotations: s,
      landmarks: c,
    });
  }
  return o;
}
async function no(e) {
  var t;
  return (
    R.initial && (l2 = null),
    l2
      ? e.debug && b("cached model:", l2.modelUrl)
      : (l2 = await L((t = e.hand.detector) == null ? void 0 : t.modelPath)),
    l2
  );
}
async function oo(e) {
  var t;
  return (
    R.initial && (c2 = null),
    c2
      ? e.debug && b("cached model:", c2.modelUrl)
      : (c2 = await L((t = e.hand.skeleton) == null ? void 0 : t.modelPath)),
    c2
  );
}
var $ = Z(H());
var p0 = [null, null],
  VA = [
    "StatefulPartitionedCall/Postprocessor/Slice",
    "StatefulPartitionedCall/Postprocessor/ExpandDims_1",
  ],
  Xe = [
    [0, 0],
    [0, 0],
  ],
  ZA = ["hand", "fist", "pinch", "point", "face", "tip", "pinchtip"],
  so = 4,
  Ao = 1.6,
  qA = 512,
  XA = 1.4,
  Ot = Number.MAX_SAFE_INTEGER,
  r1 = 0,
  Ee = [0, 0],
  m0 = { boxes: [], hands: [] },
  ao = {
    thumb: [1, 2, 3, 4],
    index: [5, 6, 7, 8],
    middle: [9, 10, 11, 12],
    ring: [13, 14, 15, 16],
    pinky: [17, 18, 19, 20],
    base: [0],
    palm: [0, 17, 13, 9, 5, 1, 0],
  };
async function io(e) {
  var t;
  if ((R.initial && (p0[0] = null), p0[0]))
    e.debug && b("cached model:", p0[0].modelUrl);
  else {
    _2(
      [
        "tensorlistreserve",
        "enter",
        "tensorlistfromtensor",
        "merge",
        "loopcond",
        "switch",
        "exit",
        "tensorliststack",
        "nextiteration",
        "tensorlistsetitem",
        "tensorlistgetitem",
        "reciprocal",
        "shape",
        "split",
        "where",
      ],
      e
    ),
      (p0[0] = await L((t = e.hand.detector) == null ? void 0 : t.modelPath));
    let n = p0[0].executor
      ? Object.values(p0[0].modelSignature.inputs)
      : void 0;
    (Xe[0][0] = Array.isArray(n) ? parseInt(n[0].tensorShape.dim[1].size) : 0),
      (Xe[0][1] = Array.isArray(n)
        ? parseInt(n[0].tensorShape.dim[2].size)
        : 0);
  }
  return p0[0];
}
async function lo(e) {
  var t;
  if ((R.initial && (p0[1] = null), p0[1]))
    e.debug && b("cached model:", p0[1].modelUrl);
  else {
    p0[1] = await L((t = e.hand.skeleton) == null ? void 0 : t.modelPath);
    let n = p0[1].executor
      ? Object.values(p0[1].modelSignature.inputs)
      : void 0;
    (Xe[1][0] = Array.isArray(n) ? parseInt(n[0].tensorShape.dim[1].size) : 0),
      (Xe[1][1] = Array.isArray(n)
        ? parseInt(n[0].tensorShape.dim[2].size)
        : 0);
  }
  return p0[1];
}
async function UA(e, t) {
  let n = [];
  if (!e || !p0[0]) return n;
  let o = {},
    r = (e.shape[2] || 1) / (e.shape[1] || 1),
    s = Math.min(Math.round((e.shape[1] || 0) / 8) * 8, qA),
    A = Math.round((s * r) / 8) * 8;
  (o.resize = $.image.resizeBilinear(e, [s, A])),
    (o.cast = $.cast(o.resize, "int32")),
    ([o.rawScores, o.rawBoxes] = await p0[0].executeAsync(o.cast, VA)),
    (o.boxes = $.squeeze(o.rawBoxes, [0, 2])),
    (o.scores = $.squeeze(o.rawScores, [0]));
  let a = $.unstack(o.scores, 1);
  $.dispose(a[so]),
    a.splice(so, 1),
    (o.filtered = $.stack(a, 1)),
    $.dispose(a),
    (o.max = $.max(o.filtered, 1)),
    (o.argmax = $.argMax(o.filtered, 1));
  let l = 0;
  o.nms = await $.image.nonMaxSuppressionAsync(
    o.boxes,
    o.max,
    (t.hand.maxDetected || 0) + 1,
    t.hand.iouThreshold || 0,
    t.hand.minConfidence || 1
  );
  let c = await o.nms.data(),
    d = await o.max.data(),
    i = await o.argmax.data();
  for (let y of Array.from(c)) {
    let x = $.slice(o.boxes, y, 1),
      m = await x.data();
    $.dispose(x);
    let f = [m[1], m[0], m[3] - m[1], m[2] - m[0]],
      h = at(f, XA),
      T = [
        Math.trunc(f[0] * Ee[0]),
        Math.trunc(f[1] * Ee[1]),
        Math.trunc(f[2] * Ee[0]),
        Math.trunc(f[3] * Ee[1]),
      ],
      g = d[y],
      p = ZA[i[y]],
      u = { id: l++, score: g, box: T, boxRaw: h, label: p };
    n.push(u);
  }
  return (
    Object.keys(o).forEach((y) => $.dispose(o[y])),
    n.sort((y, x) => x.score - y.score),
    n.length > (t.hand.maxDetected || 1) &&
      (n.length = t.hand.maxDetected || 1),
    n
  );
}
async function s1(e, t, n) {
  let o = {
    id: t.id,
    score: Math.round(100 * t.score) / 100,
    boxScore: Math.round(100 * t.score) / 100,
    fingerScore: 0,
    box: t.box,
    boxRaw: t.boxRaw,
    label: t.label,
    keypoints: [],
    landmarks: {},
    annotations: {},
  };
  if (e && p0[1] && n.hand.landmarks && t.score > (n.hand.minConfidence || 0)) {
    let r = {},
      s = [
        t.boxRaw[1],
        t.boxRaw[0],
        t.boxRaw[3] + t.boxRaw[1],
        t.boxRaw[2] + t.boxRaw[0],
      ];
    (r.crop = $.image.cropAndResize(
      e,
      [s],
      [0],
      [Xe[1][0], Xe[1][1]],
      "bilinear"
    )),
      (r.div = $.div(r.crop, C.tf255)),
      ([r.score, r.keypoints] = p0[1].execute(r.div, [
        "Identity_1",
        "Identity",
      ]));
    let A = (await r.score.data())[0],
      a = (100 - Math.trunc(100 / (1 + Math.exp(A)))) / 100;
    if (a >= (n.hand.minConfidence || 0)) {
      (o.fingerScore = a), (r.reshaped = $.reshape(r.keypoints, [-1, 3]));
      let d = (await r.reshaped.array())
        .map((i) => [i[0] / Xe[1][1], i[1] / Xe[1][0], i[2] || 0])
        .map((i) => [i[0] * t.boxRaw[2], i[1] * t.boxRaw[3], i[2] || 0]);
      (o.keypoints = d.map((i) => [
        Ee[0] * (i[0] + t.boxRaw[0]),
        Ee[1] * (i[1] + t.boxRaw[1]),
        i[2] || 0,
      ])),
        (o.landmarks = Et(o.keypoints));
      for (let i of Object.keys(ao))
        o.annotations[i] = ao[i].map((y) =>
          o.landmarks && o.keypoints[y] ? o.keypoints[y] : null
        );
    }
    Object.keys(r).forEach((l) => $.dispose(r[l]));
  }
  return o;
}
async function A1(e, t) {
  var r, s;
  if (
    !((r = p0[0]) != null && r.executor) ||
    !((s = p0[1]) != null && s.executor) ||
    !p0[0].inputs[0].shape ||
    !p0[1].inputs[0].shape
  )
    return [];
  (Ee = [e.shape[2] || 0, e.shape[1] || 0]), Ot++;
  let n = (t.hand.skipTime || 0) > v() - r1,
    o = Ot < (t.hand.skipFrames || 0);
  return t.skipAllowed && n && o
    ? m0.hands
    : new Promise(async (A) => {
        let a = 3 * (t.hand.skipTime || 0) > v() - r1,
          l = Ot < 3 * (t.hand.skipFrames || 0);
        t.skipAllowed && m0.hands.length === t.hand.maxDetected
          ? (m0.hands = await Promise.all(m0.boxes.map((d) => s1(e, d, t))))
          : t.skipAllowed && a && l && m0.hands.length > 0
          ? (m0.hands = await Promise.all(m0.boxes.map((d) => s1(e, d, t))))
          : ((m0.boxes = await UA(e, t)),
            (r1 = v()),
            (m0.hands = await Promise.all(m0.boxes.map((d) => s1(e, d, t)))),
            (Ot = 0));
        let c = [...m0.boxes];
        if (((m0.boxes.length = 0), t.cacheSensitivity > 0))
          for (let d = 0; d < m0.hands.length; d++) {
            let i = s3(m0.hands[d].keypoints, Ee);
            if (
              i.box[2] / (e.shape[2] || 1) > 0.05 &&
              i.box[3] / (e.shape[1] || 1) > 0.05 &&
              m0.hands[d].fingerScore &&
              m0.hands[d].fingerScore > (t.hand.minConfidence || 0)
            ) {
              let y = at(i.box, Ao),
                x = at(i.boxRaw, Ao);
              m0.boxes.push({ ...c[d], box: y, boxRaw: x });
            }
          }
        for (let d = 0; d < m0.hands.length; d++) {
          let i = Le(m0.hands[d].keypoints, Ee);
          (m0.hands[d].box = i.box), (m0.hands[d].boxRaw = i.boxRaw);
        }
        A(m0.hands);
      });
}
var ve = (e = null) => ({
  face: [],
  body: [],
  hand: [],
  gesture: [],
  object: [],
  persons: [],
  performance: {},
  timestamp: 0,
  width: 0,
  height: 0,
  error: e,
});
var F2 = {};
Se(F2, {
  connected: () => Ct,
  horizontal: () => a1,
  kpt: () => Lt,
  relative: () => l1,
  vertical: () => i1,
});
var Lt = [
    "nose",
    "leftEye",
    "rightEye",
    "leftEar",
    "rightEar",
    "leftShoulder",
    "rightShoulder",
    "leftElbow",
    "rightElbow",
    "leftWrist",
    "rightWrist",
    "leftHip",
    "rightHip",
    "leftKnee",
    "rightKnee",
    "leftAnkle",
    "rightAnkle",
  ],
  a1 = [
    ["leftEye", "rightEye"],
    ["leftEar", "rightEar"],
    ["leftShoulder", "rightShoulder"],
    ["leftElbow", "rightElbow"],
    ["leftWrist", "rightWrist"],
    ["leftHip", "rightHip"],
    ["leftKnee", "rightKnee"],
    ["leftAnkle", "rightAnkle"],
  ],
  i1 = [
    ["leftKnee", "leftShoulder"],
    ["rightKnee", "rightShoulder"],
    ["leftAnkle", "leftKnee"],
    ["rightAnkle", "rightKnee"],
  ],
  l1 = [
    [
      ["leftHip", "rightHip"],
      ["leftShoulder", "rightShoulder"],
    ],
    [
      ["leftElbow", "rightElbow"],
      ["leftShoulder", "rightShoulder"],
    ],
  ],
  Ct = {
    leftLeg: ["leftHip", "leftKnee", "leftAnkle"],
    rightLeg: ["rightHip", "rightKnee", "rightAnkle"],
    torso: [
      "leftShoulder",
      "rightShoulder",
      "rightHip",
      "leftHip",
      "leftShoulder",
    ],
    leftArm: ["leftShoulder", "leftElbow", "leftWrist"],
    rightArm: ["rightShoulder", "rightElbow", "rightWrist"],
    head: [],
  };
var z = ve(),
  c1 = 0;
function xo(e, t) {
  var A,
    a,
    l,
    c,
    d,
    i,
    y,
    x,
    m,
    f,
    h,
    T,
    g,
    p,
    u,
    k,
    P,
    N,
    B,
    J,
    G,
    K,
    e0,
    n0,
    o0,
    N0;
  let n = v();
  if (!e) return ve();
  let o = Date.now() - e.timestamp,
    r = o < 1e3 ? 8 - Math.log(o + 1) : 1;
  if (
    (e.canvas && (z.canvas = e.canvas),
    e.error && (z.error = e.error),
    !z.body || e.body.length !== z.body.length)
  )
    z.body = JSON.parse(JSON.stringify(e.body));
  else
    for (let M = 0; M < e.body.length; M++) {
      let T0 = e.body[M].box.map(
          (V, q) => ((r - 1) * z.body[M].box[q] + V) / r
        ),
        C0 = e.body[M].boxRaw.map(
          (V, q) => ((r - 1) * z.body[M].boxRaw[q] + V) / r
        ),
        x0 = e.body[M].keypoints.map((V, q) => {
          var U0, y0, ze, k2, x2, z1, S1, j1, N1;
          return {
            score: V.score,
            part: V.part,
            position: [
              z.body[M].keypoints[q]
                ? ((r - 1) * (z.body[M].keypoints[q].position[0] || 0) +
                    (V.position[0] || 0)) /
                  r
                : V.position[0],
              z.body[M].keypoints[q]
                ? ((r - 1) * (z.body[M].keypoints[q].position[1] || 0) +
                    (V.position[1] || 0)) /
                  r
                : V.position[1],
              z.body[M].keypoints[q]
                ? ((r - 1) * (z.body[M].keypoints[q].position[2] || 0) +
                    (V.position[2] || 0)) /
                  r
                : V.position[2],
            ],
            positionRaw: [
              z.body[M].keypoints[q]
                ? ((r - 1) * (z.body[M].keypoints[q].positionRaw[0] || 0) +
                    (V.positionRaw[0] || 0)) /
                  r
                : V.positionRaw[0],
              z.body[M].keypoints[q]
                ? ((r - 1) * (z.body[M].keypoints[q].positionRaw[1] || 0) +
                    (V.positionRaw[1] || 0)) /
                  r
                : V.positionRaw[1],
              z.body[M].keypoints[q]
                ? ((r - 1) * (z.body[M].keypoints[q].positionRaw[2] || 0) +
                    (V.positionRaw[2] || 0)) /
                  r
                : V.positionRaw[2],
            ],
            distance: [
              z.body[M].keypoints[q]
                ? ((r - 1) *
                    (((U0 = z.body[M].keypoints[q].distance) == null
                      ? void 0
                      : U0[0]) || 0) +
                    (((y0 = V.distance) == null ? void 0 : y0[0]) || 0)) /
                  r
                : (ze = V.distance) == null
                ? void 0
                : ze[0],
              z.body[M].keypoints[q]
                ? ((r - 1) *
                    (((k2 = z.body[M].keypoints[q].distance) == null
                      ? void 0
                      : k2[1]) || 0) +
                    (((x2 = V.distance) == null ? void 0 : x2[1]) || 0)) /
                  r
                : (z1 = V.distance) == null
                ? void 0
                : z1[1],
              z.body[M].keypoints[q]
                ? ((r - 1) *
                    (((S1 = z.body[M].keypoints[q].distance) == null
                      ? void 0
                      : S1[2]) || 0) +
                    (((j1 = V.distance) == null ? void 0 : j1[2]) || 0)) /
                  r
                : (N1 = V.distance) == null
                ? void 0
                : N1[2],
            ],
          };
        }),
        Q = {},
        E = { connected: {} };
      (A = t.body.modelPath) != null && A.includes("efficientpose")
        ? (E = ct)
        : (a = t.body.modelPath) != null && a.includes("blazepose")
        ? (E = st)
        : (l = t.body.modelPath) != null && l.includes("movenet") && (E = F2);
      for (let [V, q] of Object.entries(E.connected)) {
        let U0 = [];
        for (let y0 = 0; y0 < q.length - 1; y0++) {
          let ze = x0.find((x2) => x2.part === q[y0]),
            k2 = x0.find((x2) => x2.part === q[y0 + 1]);
          ze && k2 && U0.push([ze.position, k2.position]);
        }
        Q[V] = U0;
      }
      z.body[M] = {
        ...e.body[M],
        box: T0,
        boxRaw: C0,
        keypoints: x0,
        annotations: Q,
      };
    }
  if (!z.hand || e.hand.length !== z.hand.length)
    z.hand = JSON.parse(JSON.stringify(e.hand));
  else
    for (let M = 0; M < e.hand.length; M++) {
      let T0 = e.hand[M].box.map(
          (E, V) => ((r - 1) * z.hand[M].box[V] + E) / r
        ),
        C0 = e.hand[M].boxRaw.map(
          (E, V) => ((r - 1) * z.hand[M].boxRaw[V] + E) / r
        );
      z.hand[M].keypoints.length !== e.hand[M].keypoints.length &&
        (z.hand[M].keypoints = e.hand[M].keypoints);
      let x0 =
          e.hand[M].keypoints && e.hand[M].keypoints.length > 0
            ? e.hand[M].keypoints.map((E, V) =>
                E.map(
                  (q, U0) =>
                    ((r - 1) * (z.hand[M].keypoints[V][U0] || 1) + (q || 0)) / r
                )
              )
            : [],
        Q = {};
      if (
        Object.keys(z.hand[M].annotations).length !==
        Object.keys(e.hand[M].annotations).length
      )
        (z.hand[M].annotations = e.hand[M].annotations),
          (Q = z.hand[M].annotations);
      else if (e.hand[M].annotations)
        for (let E of Object.keys(e.hand[M].annotations))
          Q[E] =
            (i =
              (d = (c = e.hand[M]) == null ? void 0 : c.annotations) == null
                ? void 0
                : d[E]) != null && i[0]
              ? e.hand[M].annotations[E].map((V, q) =>
                  V.map(
                    (U0, y0) =>
                      ((r - 1) * z.hand[M].annotations[E][q][y0] + U0) / r
                  )
                )
              : null;
      z.hand[M] = {
        ...e.hand[M],
        box: T0,
        boxRaw: C0,
        keypoints: x0,
        annotations: Q,
      };
    }
  if (!z.face || e.face.length !== z.face.length)
    z.face = JSON.parse(JSON.stringify(e.face));
  else
    for (let M = 0; M < e.face.length; M++) {
      let T0 = e.face[M].box.map(
          (Q, E) => ((r - 1) * z.face[M].box[E] + Q) / r
        ),
        C0 = e.face[M].boxRaw.map(
          (Q, E) => ((r - 1) * z.face[M].boxRaw[E] + Q) / r
        ),
        x0 = e.face[M].annotations;
      if (
        Object.keys(z.face[M].annotations).length !==
        Object.keys(e.face[M].annotations).length
      )
        (z.face[M].annotations = e.face[M].annotations),
          (x0 = z.face[M].annotations);
      else if (e.face[M].annotations)
        for (let Q of Object.keys(e.face[M].annotations))
          x0[Q] =
            (m =
              (x = (y = e.face[M]) == null ? void 0 : y.annotations) == null
                ? void 0
                : x[Q]) != null && m[0]
              ? e.face[M].annotations[Q].map((E, V) =>
                  E.map(
                    (q, U0) =>
                      ((r - 1) * z.face[M].annotations[Q][V][U0] + q) / r
                  )
                )
              : null;
      if (e.face[M].rotation) {
        let Q = {
          matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          angle: { roll: 0, yaw: 0, pitch: 0 },
          gaze: { bearing: 0, strength: 0 },
        };
        (Q.matrix = (f = e.face[M].rotation) == null ? void 0 : f.matrix),
          (Q.angle = {
            roll:
              ((r - 1) *
                (((T = (h = z.face[M].rotation) == null ? void 0 : h.angle) ==
                null
                  ? void 0
                  : T.roll) || 0) +
                (((p = (g = e.face[M].rotation) == null ? void 0 : g.angle) ==
                null
                  ? void 0
                  : p.roll) || 0)) /
              r,
            yaw:
              ((r - 1) *
                (((k = (u = z.face[M].rotation) == null ? void 0 : u.angle) ==
                null
                  ? void 0
                  : k.yaw) || 0) +
                (((N = (P = e.face[M].rotation) == null ? void 0 : P.angle) ==
                null
                  ? void 0
                  : N.yaw) || 0)) /
              r,
            pitch:
              ((r - 1) *
                (((J = (B = z.face[M].rotation) == null ? void 0 : B.angle) ==
                null
                  ? void 0
                  : J.pitch) || 0) +
                (((K = (G = e.face[M].rotation) == null ? void 0 : G.angle) ==
                null
                  ? void 0
                  : K.pitch) || 0)) /
              r,
          }),
          (Q.gaze = {
            bearing:
              ((r - 1) *
                (((e0 = z.face[M].rotation) == null
                  ? void 0
                  : e0.gaze.bearing) || 0) +
                (((n0 = e.face[M].rotation) == null
                  ? void 0
                  : n0.gaze.bearing) || 0)) /
              r,
            strength:
              ((r - 1) *
                (((o0 = z.face[M].rotation) == null
                  ? void 0
                  : o0.gaze.strength) || 0) +
                (((N0 = e.face[M].rotation) == null
                  ? void 0
                  : N0.gaze.strength) || 0)) /
              r,
          }),
          (z.face[M] = {
            ...e.face[M],
            rotation: Q,
            box: T0,
            boxRaw: C0,
            annotations: x0,
          });
      } else z.face[M] = { ...e.face[M], box: T0, boxRaw: C0, annotations: x0 };
    }
  if (!z.object || e.object.length !== z.object.length)
    z.object = JSON.parse(JSON.stringify(e.object));
  else
    for (let M = 0; M < e.object.length; M++) {
      let T0 = e.object[M].box.map(
          (x0, Q) => ((r - 1) * z.object[M].box[Q] + x0) / r
        ),
        C0 = e.object[M].boxRaw.map(
          (x0, Q) => ((r - 1) * z.object[M].boxRaw[Q] + x0) / r
        );
      z.object[M] = { ...e.object[M], box: T0, boxRaw: C0 };
    }
  if (e.persons) {
    let M = e.persons;
    if (!z.persons || M.length !== z.persons.length)
      z.persons = JSON.parse(JSON.stringify(M));
    else
      for (let T0 = 0; T0 < M.length; T0++)
        z.persons[T0].box = M[T0].box.map(
          (C0, x0) => ((r - 1) * z.persons[T0].box[x0] + C0) / r
        );
  }
  e.gesture && (z.gesture = e.gesture),
    (z.width = e.width),
    (z.height = e.height);
  let s = v();
  return (
    (c1 = R.perfadd ? c1 + Math.round(s - n) : Math.round(s - n)),
    e.performance && (z.performance = { ...e.performance, interpolate: c1 }),
    z
  );
}
var A0 = Z(H());
var O0;
async function d1(e) {
  return (
    !O0 || R.initial
      ? (O0 = await L(e.segmentation.modelPath))
      : e.debug && b("cached model:", O0.modelUrl),
    O0
  );
}
async function yo(e, t) {
  var r;
  if (
    (O0 || (O0 = await d1(t)),
    !(O0 != null && O0.executor) ||
      !((r = O0 == null ? void 0 : O0.inputs) != null && r[0].shape))
  )
    return null;
  let n = {};
  (n.resize = A0.image.resizeBilinear(
    e,
    [
      O0.inputs[0].shape ? O0.inputs[0].shape[1] : 0,
      O0.inputs[0].shape ? O0.inputs[0].shape[2] : 0,
    ],
    !1
  )),
    (n.norm = A0.div(n.resize, C.tf255)),
    (n.res = O0.execute(n.norm)),
    (n.squeeze = A0.squeeze(n.res, [0])),
    ([n.bgRaw, n.fgRaw] = A0.unstack(n.squeeze, 2)),
    (n.fg = A0.softmax(n.fgRaw)),
    (n.mul = A0.mul(n.fg, C.tf255)),
    (n.expand = A0.expandDims(n.mul, 2)),
    (n.output = A0.image.resizeBilinear(n.expand, [
      e.shape[1] || 0,
      e.shape[2] || 0,
    ]));
  let o;
  switch (t.segmentation.mode || "default") {
    case "default":
      (n.input = A0.squeeze(e)),
        (n.concat = A0.concat([n.input, n.output], -1)),
        (o = A0.cast(n.concat, "int32"));
      break;
    case "alpha":
      o = A0.cast(n.output, "int32");
      break;
    default:
      o = A0.tensor(0);
  }
  return Object.keys(n).forEach((s) => A0.dispose(n[s])), o;
}
var Wt = {};
Se(Wt, { distance: () => x1, find: () => JA, similarity: () => KA });
function x1(e, t, n = { order: 2, multiplier: 25 }) {
  if (!e || !e) return Number.MAX_SAFE_INTEGER;
  let o = 0;
  for (let s = 0; s < e.length; s++) {
    let A = !n.order || n.order === 2 ? e[s] - t[s] : Math.abs(e[s] - t[s]);
    o += !n.order || n.order === 2 ? A * A : A ** n.order;
  }
  return Math.round(100 * (n.multiplier || 20) * o) / 100;
}
var mo = (e, t, n, o) => {
  if (e === 0) return 1;
  let s = (1 - (t === 2 ? Math.sqrt(e) : e ** (1 / t)) / 100 - n) / (o - n);
  return Math.round(100 * Math.max(Math.min(s, 1), 0)) / 100;
};
function KA(e, t, n = { order: 2, multiplier: 25, min: 0.2, max: 0.8 }) {
  let o = x1(e, t, n);
  return mo(o, n.order || 2, n.min || 0, n.max || 1);
}
function JA(
  e,
  t,
  n = { order: 2, multiplier: 25, threshold: 0, min: 0.2, max: 0.8 }
) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length < 64 || t.length === 0)
    return { index: -1, distance: Number.POSITIVE_INFINITY, similarity: 0 };
  let o = Number.MAX_SAFE_INTEGER,
    r = -1;
  for (let A = 0; A < t.length; A++) {
    let a = t[A].length === e.length ? x1(e, t[A], n) : Number.MAX_SAFE_INTEGER;
    if ((a < o && ((o = a), (r = A)), o < (n.threshold || 0))) break;
  }
  let s = mo(o, n.order || 2, n.min || 0, n.max || 1);
  return { index: r, distance: o, similarity: s };
}
var w1 = {};
Se(w1, { Models: () => V2, validateModel: () => Zt });
var B2 = Z(H());
var Ue = Z(H());
var po = 0.005,
  ee = {
    keypoints: [],
    padding: [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ],
  };
function y1(e) {
  for (let t of a1) {
    let n = e.keypoints.findIndex((r) => r.part === t[0]),
      o = e.keypoints.findIndex((r) => r.part === t[1]);
    if (
      e.keypoints[n] &&
      e.keypoints[o] &&
      e.keypoints[n].position[0] < e.keypoints[o].position[0]
    ) {
      let r = e.keypoints[n];
      (e.keypoints[n] = e.keypoints[o]), (e.keypoints[o] = r);
    }
  }
  for (let t of i1) {
    let n = e.keypoints.findIndex((r) => r && r.part === t[0]),
      o = e.keypoints.findIndex((r) => r && r.part === t[1]);
    e.keypoints[n] &&
      e.keypoints[o] &&
      e.keypoints[n].position[1] < e.keypoints[o].position[1] &&
      e.keypoints.splice(n, 1);
  }
  for (let [t, n] of l1) {
    let o = e.keypoints.findIndex((c) => c && c.part === t[0]),
      r = e.keypoints.findIndex((c) => c && c.part === t[1]),
      s = e.keypoints.findIndex((c) => c && c.part === n[0]),
      A = e.keypoints.findIndex((c) => c && c.part === n[1]);
    if (!e.keypoints[s] || !e.keypoints[A]) continue;
    let a = e.keypoints[o]
        ? [
            Math.abs(e.keypoints[s].position[0] - e.keypoints[o].position[0]),
            Math.abs(e.keypoints[A].position[0] - e.keypoints[o].position[0]),
          ]
        : [0, 0],
      l = e.keypoints[r]
        ? [
            Math.abs(e.keypoints[A].position[0] - e.keypoints[r].position[0]),
            Math.abs(e.keypoints[s].position[0] - e.keypoints[r].position[0]),
          ]
        : [0, 0];
    if (a[0] > a[1] || l[0] > l[1]) {
      let c = e.keypoints[o];
      (e.keypoints[o] = e.keypoints[r]), (e.keypoints[r] = c);
    }
  }
}
function uo(e) {
  for (let t = 0; t < e.length; t++)
    if (e[t] && ee.keypoints[t]) {
      let n = [
        Math.abs(e[t].positionRaw[0] - ee.keypoints[t].positionRaw[0]),
        Math.abs(e[t].positionRaw[1] - ee.keypoints[t].positionRaw[1]),
      ];
      n[0] < po && n[1] < po
        ? (e[t] = ee.keypoints[t])
        : (ee.keypoints[t] = e[t]);
    } else ee.keypoints[t] = e[t];
  return e;
}
function ho(e, t) {
  var r, s;
  let n = {};
  if (
    !((r = e == null ? void 0 : e.shape) != null && r[1]) ||
    !((s = e == null ? void 0 : e.shape) != null && s[2])
  )
    return e;
  (ee.padding = [
    [0, 0],
    [
      e.shape[2] > e.shape[1] ? Math.trunc((e.shape[2] - e.shape[1]) / 2) : 0,
      e.shape[2] > e.shape[1] ? Math.trunc((e.shape[2] - e.shape[1]) / 2) : 0,
    ],
    [
      e.shape[1] > e.shape[2] ? Math.trunc((e.shape[1] - e.shape[2]) / 2) : 0,
      e.shape[1] > e.shape[2] ? Math.trunc((e.shape[1] - e.shape[2]) / 2) : 0,
    ],
    [0, 0],
  ]),
    (n.pad = Ue.pad(e, ee.padding)),
    (n.resize = Ue.image.resizeBilinear(n.pad, [t, t]));
  let o = Ue.cast(n.resize, "int32");
  return Object.keys(n).forEach((A) => Ue.dispose(n[A])), o;
}
function bo(e, t) {
  e.keypoints = e.keypoints.filter((o) => (o == null ? void 0 : o.position));
  for (let o of e.keypoints)
    (o.position = [
      (o.position[0] * (t[0] + ee.padding[2][0] + ee.padding[2][1])) / t[0] -
        ee.padding[2][0],
      (o.position[1] * (t[1] + ee.padding[1][0] + ee.padding[1][1])) / t[1] -
        ee.padding[1][0],
    ]),
      (o.positionRaw = [o.position[0] / t[0], o.position[1] / t[1]]);
  let n = Le(
    e.keypoints.map((o) => o.position),
    t
  );
  return (e.box = n.box), (e.boxRaw = n.boxRaw), e;
}
var b0,
  Dt = 0,
  f1 = Number.MAX_SAFE_INTEGER,
  d2 = { boxes: [], bodies: [], last: 0 };
async function go(e) {
  var t;
  return (
    R.initial && (b0 = null),
    b0
      ? e.debug && b("cached model:", b0.modelUrl)
      : (_2(["size"], e), (b0 = await L(e.body.modelPath))),
    (Dt =
      b0 != null &&
      b0.executor &&
      (t = b0 == null ? void 0 : b0.inputs) != null &&
      t[0].shape
        ? b0.inputs[0].shape[2]
        : 0),
    Dt < 64 && (Dt = 256),
    B2.env().flagRegistry.WEBGL_USE_SHAPES_UNIFORMS &&
      B2.env().set("WEBGL_USE_SHAPES_UNIFORMS", !1),
    b0
  );
}
function _A(e, t, n) {
  let o = e[0][0],
    r = [],
    s = 0;
  for (let d = 0; d < o.length; d++)
    if (((s = o[d][2]), s > t.body.minConfidence)) {
      let i = [o[d][1], o[d][0]];
      r.push({
        score: Math.round(100 * s) / 100,
        part: Lt[d],
        positionRaw: i,
        position: [
          Math.round((n.shape[2] || 0) * i[0]),
          Math.round((n.shape[1] || 0) * i[1]),
        ],
      });
    }
  s = r.reduce((d, i) => (i.score > d ? i.score : d), 0);
  let A = [],
    a = Le(
      r.map((d) => d.position),
      [n.shape[2], n.shape[1]]
    ),
    l = {};
  for (let [d, i] of Object.entries(Ct)) {
    let y = [];
    for (let x = 0; x < i.length - 1; x++) {
      let m = r.find((h) => h.part === i[x]),
        f = r.find((h) => h.part === i[x + 1]);
      m &&
        f &&
        m.score > (t.body.minConfidence || 0) &&
        f.score > (t.body.minConfidence || 0) &&
        y.push([m.position, f.position]);
    }
    l[d] = y;
  }
  let c = {
    id: 0,
    score: s,
    box: a.box,
    boxRaw: a.boxRaw,
    keypoints: r,
    annotations: l,
  };
  return y1(c), A.push(c), A;
}
function $A(e, t, n) {
  let o = [];
  for (let r = 0; r < e[0].length; r++) {
    let s = e[0][r],
      A = Math.round(100 * s[55]) / 100;
    if (A > t.body.minConfidence) {
      let a = [];
      for (let y = 0; y < 17; y++) {
        let x = s[3 * y + 2];
        if (x > t.body.minConfidence) {
          let m = [s[3 * y + 1], s[3 * y + 0]];
          a.push({
            part: Lt[y],
            score: Math.round(100 * x) / 100,
            positionRaw: m,
            position: [
              Math.round((n.shape[2] || 0) * m[0]),
              Math.round((n.shape[1] || 0) * m[1]),
            ],
          });
        }
      }
      let l = [s[52], s[51], s[54] - s[52], s[53] - s[51]],
        c = [
          Math.trunc(l[0] * (n.shape[2] || 0)),
          Math.trunc(l[1] * (n.shape[1] || 0)),
          Math.trunc(l[2] * (n.shape[2] || 0)),
          Math.trunc(l[3] * (n.shape[1] || 0)),
        ],
        d = {};
      for (let [y, x] of Object.entries(Ct)) {
        let m = [];
        for (let f = 0; f < x.length - 1; f++) {
          let h = a.find((g) => g.part === x[f]),
            T = a.find((g) => g.part === x[f + 1]);
          h &&
            T &&
            h.score > (t.body.minConfidence || 0) &&
            T.score > (t.body.minConfidence || 0) &&
            m.push([h.position, T.position]);
        }
        d[y] = m;
      }
      let i = {
        id: r,
        score: A,
        box: c,
        boxRaw: l,
        keypoints: [...a],
        annotations: d,
      };
      y1(i), o.push(i);
    }
  }
  return (
    o.sort((r, s) => s.score - r.score),
    o.length > t.body.maxDetected && (o.length = t.body.maxDetected),
    o
  );
}
async function m1(e, t) {
  var r;
  if (
    !(b0 != null && b0.executor) ||
    !((r = b0 == null ? void 0 : b0.inputs) != null && r[0].shape)
  )
    return [];
  t.skipAllowed || (d2.boxes.length = 0), f1++;
  let n = (t.body.skipTime || 0) > v() - d2.last,
    o = f1 < (t.body.skipFrames || 0);
  return t.skipAllowed && n && o
    ? d2.bodies
    : new Promise(async (s) => {
        let A = {};
        (f1 = 0),
          (A.input = ho(e, Dt)),
          (A.res = b0 == null ? void 0 : b0.execute(A.input)),
          (d2.last = v());
        let a = await A.res.array();
        d2.bodies = A.res.shape[2] === 17 ? _A(a, t, e) : $A(a, t, e);
        for (let l of d2.bodies)
          bo(l, [e.shape[2] || 1, e.shape[1] || 1]), uo(l.keypoints);
        Object.keys(A).forEach((l) => B2.dispose(A[l])), s(d2.bodies);
      });
}
var j0 = Z(H());
var ce,
  Ft = [],
  vo = 0,
  p1 = Number.MAX_SAFE_INTEGER,
  Ht = 0,
  Bt = 2.5;
async function Ro(e) {
  if (!ce || R.initial) {
    ce = await L(e.object.modelPath);
    let t =
      ce != null && ce.executor
        ? Object.values(ce.modelSignature.inputs)
        : void 0;
    Ht = Array.isArray(t) ? parseInt(t[0].tensorShape.dim[2].size) : 416;
  } else e.debug && b("cached model:", ce.modelUrl);
  return ce;
}
async function ea(e, t, n) {
  var c, d;
  let o = 0,
    r = [],
    s = Ht;
  for (let i of [1, 2, 4]) {
    let y = i * 13,
      x = j0.squeeze(
        e.find((p) => p.shape[1] === y ** 2 && (p.shape[2] || 0) === m2.length)
      ),
      m = await x.array(),
      f = j0.squeeze(
        e.find((p) => p.shape[1] === y ** 2 && (p.shape[2] || 0) < m2.length)
      ),
      h = j0.reshape(f, [
        -1,
        4,
        (((c = f.shape) == null ? void 0 : c[1]) || 0) / 4,
      ]),
      T = j0.argMax(h, 2),
      g = await T.array();
    for (let p = 0; p < x.shape[0]; p++)
      for (let u = 0; u < (((d = x.shape) == null ? void 0 : d[1]) || 0); u++) {
        let k = m[p][u];
        if (k > (n.object.minConfidence || 0) && u !== 61) {
          let P = (0.5 + Math.trunc(p % y)) / y,
            N = (0.5 + Math.trunc(p / y)) / y,
            B = g[p].map((M) => M * (y / i / s)),
            [J, G] = [P - (Bt / i) * B[0], N - (Bt / i) * B[1]],
            [K, e0] = [P + (Bt / i) * B[2] - J, N + (Bt / i) * B[3] - G],
            n0 = [J, G, K, e0];
          n0 = n0.map((M) => Math.max(0, Math.min(M, 1)));
          let o0 = [n0[0] * t[0], n0[1] * t[1], n0[2] * t[0], n0[3] * t[1]],
            N0 = {
              id: o++,
              score: Math.round(100 * k) / 100,
              class: u + 1,
              label: m2[u].label,
              box: o0.map((M) => Math.trunc(M)),
              boxRaw: n0,
            };
          r.push(N0);
        }
      }
    j0.dispose([x, f, h, T]);
  }
  let A = r.map((i) => [i.boxRaw[1], i.boxRaw[0], i.boxRaw[3], i.boxRaw[2]]),
    a = r.map((i) => i.score),
    l = [];
  if (A && A.length > 0) {
    let i = await j0.image.nonMaxSuppressionAsync(
      A,
      a,
      n.object.maxDetected || 0,
      n.object.iouThreshold,
      n.object.minConfidence
    );
    (l = Array.from(await i.data())), j0.dispose(i);
  }
  return (
    (r = r.filter((i, y) => l.includes(y)).sort((i, y) => y.score - i.score)), r
  );
}
async function u1(e, t) {
  if (!(ce != null && ce.executor)) return [];
  let n = (t.object.skipTime || 0) > v() - vo,
    o = p1 < (t.object.skipFrames || 0);
  return t.skipAllowed && n && o && Ft.length > 0
    ? (p1++, Ft)
    : ((p1 = 0),
      !R.kernels.includes("mod") || !R.kernels.includes("sparsetodense")
        ? Ft
        : new Promise(async (r) => {
            let s = [e.shape[2] || 0, e.shape[1] || 0],
              A = j0.image.resizeBilinear(e, [Ht, Ht], !1),
              a = j0.div(A, C.tf255),
              l = j0.transpose(a, [0, 3, 1, 2]),
              c;
            t.object.enabled && (c = ce.execute(l)), (vo = v());
            let d = await ea(c, s, t);
            (Ft = d), j0.dispose([A, a, l, ...c]), r(d);
          }));
}
var V0 = Z(H());
var G2 = [
    "nose",
    "leftEye",
    "rightEye",
    "leftEar",
    "rightEar",
    "leftShoulder",
    "rightShoulder",
    "leftElbow",
    "rightElbow",
    "leftWrist",
    "rightWrist",
    "leftHip",
    "rightHip",
    "leftKnee",
    "rightKnee",
    "leftAnkle",
    "rightAnkle",
  ],
  ta = G2.length,
  H2 = G2.reduce((e, t, n) => ((e[t] = n), e), {}),
  na = [
    ["leftHip", "leftShoulder"],
    ["leftElbow", "leftShoulder"],
    ["leftElbow", "leftWrist"],
    ["leftHip", "leftKnee"],
    ["leftKnee", "leftAnkle"],
    ["rightHip", "rightShoulder"],
    ["rightElbow", "rightShoulder"],
    ["rightElbow", "rightWrist"],
    ["rightHip", "rightKnee"],
    ["rightKnee", "rightAnkle"],
    ["leftShoulder", "rightShoulder"],
    ["leftHip", "rightHip"],
  ],
  X7 = na.map(([e, t]) => [H2[e], H2[t]]),
  Po = [
    ["nose", "leftEye"],
    ["leftEye", "leftEar"],
    ["nose", "rightEye"],
    ["rightEye", "rightEar"],
    ["nose", "leftShoulder"],
    ["leftShoulder", "leftElbow"],
    ["leftElbow", "leftWrist"],
    ["leftShoulder", "leftHip"],
    ["leftHip", "leftKnee"],
    ["leftKnee", "leftAnkle"],
    ["nose", "rightShoulder"],
    ["rightShoulder", "rightElbow"],
    ["rightElbow", "rightWrist"],
    ["rightShoulder", "rightHip"],
    ["rightHip", "rightKnee"],
    ["rightKnee", "rightAnkle"],
  ];
function ko(e) {
  let t = e.reduce(
    ({ maxX: n, maxY: o, minX: r, minY: s }, { position: { x: A, y: a } }) => ({
      maxX: Math.max(n, A),
      maxY: Math.max(o, a),
      minX: Math.min(r, A),
      minY: Math.min(s, a),
    }),
    {
      maxX: Number.NEGATIVE_INFINITY,
      maxY: Number.NEGATIVE_INFINITY,
      minX: Number.POSITIVE_INFINITY,
      minY: Number.POSITIVE_INFINITY,
    }
  );
  return [t.minX, t.minY, t.maxX - t.minX, t.maxY - t.minY];
}
function wo(e, [t, n], [o, r]) {
  let s = t / o,
    A = n / r,
    a = (c, d) => ({
      id: d,
      score: c.score,
      boxRaw: [c.box[0] / r, c.box[1] / o, c.box[2] / r, c.box[3] / o],
      box: [
        Math.trunc(c.box[0] * A),
        Math.trunc(c.box[1] * s),
        Math.trunc(c.box[2] * A),
        Math.trunc(c.box[3] * s),
      ],
      keypoints: c.keypoints.map(({ score: i, part: y, position: x }) => ({
        score: i,
        part: y,
        position: [Math.trunc(x.x * A), Math.trunc(x.y * s)],
        positionRaw: [x.x / o, x.y / o],
      })),
      annotations: {},
    });
  return e.map((c, d) => a(c, d));
}
var Gt = class {
  constructor(t, n) {
    w(this, "priorityQueue");
    w(this, "numberOfElements");
    w(this, "getElementValue");
    (this.priorityQueue = new Array(t)),
      (this.numberOfElements = -1),
      (this.getElementValue = n);
  }
  enqueue(t) {
    (this.priorityQueue[++this.numberOfElements] = t),
      this.swim(this.numberOfElements);
  }
  dequeue() {
    let t = this.priorityQueue[0];
    return (
      this.exchange(0, this.numberOfElements--),
      this.sink(0),
      (this.priorityQueue[this.numberOfElements + 1] = null),
      t
    );
  }
  empty() {
    return this.numberOfElements === -1;
  }
  size() {
    return this.numberOfElements + 1;
  }
  all() {
    return this.priorityQueue.slice(0, this.numberOfElements + 1);
  }
  max() {
    return this.priorityQueue[0];
  }
  swim(t) {
    for (; t > 0 && this.less(Math.floor(t / 2), t); )
      this.exchange(t, Math.floor(t / 2)), (t = Math.floor(t / 2));
  }
  sink(t) {
    for (; 2 * t <= this.numberOfElements; ) {
      let n = 2 * t;
      if (
        (n < this.numberOfElements && this.less(n, n + 1) && n++,
        !this.less(t, n))
      )
        break;
      this.exchange(t, n), (t = n);
    }
  }
  getValueAt(t) {
    return this.getElementValue(this.priorityQueue[t]);
  }
  less(t, n) {
    return this.getValueAt(t) < this.getValueAt(n);
  }
  exchange(t, n) {
    let o = this.priorityQueue[t];
    (this.priorityQueue[t] = this.priorityQueue[n]),
      (this.priorityQueue[n] = o);
  }
};
function h1(e, t, n, o) {
  return { y: o.get(e, t, n), x: o.get(e, t, n + ta) };
}
function b1(e, t, n) {
  let { heatmapY: o, heatmapX: r, id: s } = e,
    { y: A, x: a } = h1(o, r, s, n);
  return { x: e.heatmapX * t + a, y: e.heatmapY * t + A };
}
function g1(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function Eo(e, t, n, o) {
  let r = n - e,
    s = o - t;
  return r * r + s * s;
}
function T1(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
var te,
  ra = [
    "MobilenetV1/offset_2/BiasAdd",
    "MobilenetV1/heatmap_2/BiasAdd",
    "MobilenetV1/displacement_fwd_2/BiasAdd",
    "MobilenetV1/displacement_bwd_2/BiasAdd",
  ],
  Vt = 1,
  M2 = 16,
  sa = 50 ** 2;
function zo(e, t, n, o, r, s, A = 2) {
  let a = (T) => ({
      y: s.get(T.y, T.x, e),
      x: s.get(T.y, T.x, s.shape[2] / 2 + e),
    }),
    l = (T, g, p) => ({
      y: g1(Math.round(T.y / M2), 0, g - 1),
      x: g1(Math.round(T.x / M2), 0, p - 1),
    }),
    [c, d] = o.shape,
    i = l(t.position, c, d),
    y = a(i),
    m = T1(t.position, y);
  for (let T = 0; T < A; T++) {
    let g = l(m, c, d),
      p = h1(g.y, g.x, n, r);
    m = T1({ x: g.x * M2, y: g.y * M2 }, { x: p.x, y: p.y });
  }
  let f = l(m, c, d),
    h = o.get(f.y, f.x, n);
  return { position: m, part: G2[n], score: h };
}
function Aa(e, t, n, o, r) {
  let s = Po.map(([y, x]) => [H2[y], H2[x]]),
    A = s.map(([, y]) => y),
    a = s.map(([y]) => y),
    l = t.shape[2],
    c = A.length,
    d = new Array(l),
    i = b1(e.part, M2, n);
  d[e.part.id] = { score: e.score, part: G2[e.part.id], position: i };
  for (let y = c - 1; y >= 0; --y) {
    let x = A[y],
      m = a[y];
    d[x] && !d[m] && (d[m] = zo(y, d[x], m, t, n, r));
  }
  for (let y = 0; y < c; ++y) {
    let x = a[y],
      m = A[y];
    d[x] && !d[m] && (d[m] = zo(y, d[x], m, t, n, o));
  }
  return d;
}
function aa(e, t, n, o, r) {
  let [s, A] = r.shape,
    a = !0,
    l = Math.max(n - Vt, 0),
    c = Math.min(n + Vt + 1, s);
  for (let d = l; d < c; ++d) {
    let i = Math.max(o - Vt, 0),
      y = Math.min(o + Vt + 1, A);
    for (let x = i; x < y; ++x)
      if (r.get(d, x, e) > t) {
        a = !1;
        break;
      }
    if (!a) break;
  }
  return a;
}
function ia(e, t) {
  let [n, o, r] = t.shape,
    s = new Gt(n * o * r, ({ score: A }) => A);
  for (let A = 0; A < n; ++A)
    for (let a = 0; a < o; ++a)
      for (let l = 0; l < r; ++l) {
        let c = t.get(A, a, l);
        c < e ||
          (aa(l, c, A, a, t) &&
            s.enqueue({ score: c, part: { heatmapY: A, heatmapX: a, id: l } }));
      }
  return s;
}
function So(e, { x: t, y: n }, o) {
  return e.some(({ keypoints: r }) => {
    var A;
    let s = (A = r[o]) == null ? void 0 : A.position;
    return s ? Eo(n, t, s.y, s.x) <= sa : !1;
  });
}
function la(e, t) {
  return (
    t.reduce(
      (o, { position: r, score: s }, A) => (So(e, r, A) || (o += s), o),
      0
    ) / t.length
  );
}
function ca(e, t, n, o, r, s) {
  let A = [],
    a = ia(s, t);
  for (; A.length < r && !a.empty(); ) {
    let l = a.dequeue(),
      c = b1(l.part, M2, e);
    if (So(A, c, l.part.id)) continue;
    let d = Aa(l, t, e, n, o);
    d = d.filter((x) => x.score > s);
    let i = la(A, d),
      y = ko(d);
    i > s && A.push({ keypoints: d, box: y, score: Math.round(100 * i) / 100 });
  }
  return A;
}
async function v1(e, t) {
  if (!(te != null && te.executor)) return [];
  let n = V0.tidy(() => {
      if (!te.inputs[0].shape) return [];
      let A = V0.image.resizeBilinear(e, [
          te.inputs[0].shape[2],
          te.inputs[0].shape[1],
        ]),
        a = V0.sub(V0.div(V0.cast(A, "float32"), 127.5), 1),
        c = te.execute(a, ra).map((d) => V0.squeeze(d, [0]));
      return (c[1] = V0.sigmoid(c[1])), c;
    }),
    o = await Promise.all(n.map((A) => A.buffer()));
  for (let A of n) V0.dispose(A);
  let r = ca(o[0], o[1], o[2], o[3], t.body.maxDetected, t.body.minConfidence);
  return te.inputs[0].shape
    ? wo(
        r,
        [e.shape[1], e.shape[2]],
        [te.inputs[0].shape[2], te.inputs[0].shape[1]]
      )
    : [];
}
async function jo(e) {
  return (
    !te || R.initial
      ? (te = await L(e.body.modelPath))
      : e.debug && b("cached model:", te.modelUrl),
    te
  );
}
var F = Z(H());
var Re,
  da = ["fgr", "pha", "r1o", "r2o", "r3o", "r4o"],
  g0 = {},
  M1 = 0;
function Oo(e) {
  F.dispose([g0.r1i, g0.r2i, g0.r3i, g0.r4i, g0.downsample_ratio]),
    (g0.r1i = F.tensor(0)),
    (g0.r2i = F.tensor(0)),
    (g0.r3i = F.tensor(0)),
    (g0.r4i = F.tensor(0)),
    (M1 = e.segmentation.ratio || 0.5),
    (g0.downsample_ratio = F.tensor(M1));
}
async function P1(e) {
  return (
    !Re || R.initial
      ? (Re = await L(e.segmentation.modelPath))
      : e.debug && b("cached model:", Re.modelUrl),
    Oo(e),
    Re
  );
}
var Io = (e) =>
  F.tidy(() => {
    let t = F.squeeze(e, [0]),
      n = F.mul(t, C.tf255);
    return F.cast(n, "int32");
  });
function R1(e, t) {
  let n = e
      ? Io(e)
      : F.fill([t.shape[1] || 0, t.shape[2] || 0, 3], 255, "int32"),
    o = t ? Io(t) : F.fill([e.shape[1] || 0, e.shape[2] || 0, 1], 255, "int32"),
    r = F.concat([n, o], -1);
  return F.dispose([n, o]), r;
}
function xa(e) {
  return F.tidy(() => {
    let t = {};
    return (
      (t.unstack = F.unstack(e, -1)),
      (t.concat = F.concat(t.unstack, 1)),
      (t.split = F.split(t.concat, 4, 1)),
      (t.stack = F.concat(t.split, 2)),
      (t.squeeze = F.squeeze(t.stack, [0])),
      (t.expand = F.expandDims(t.squeeze, -1)),
      (t.add = F.add(t.expand, 1)),
      (t.mul = F.mul(t.add, 127.5)),
      (t.cast = F.cast(t.mul, "int32")),
      (t.tile = F.tile(t.cast, [1, 1, 3])),
      (t.alpha = F.fill(
        [t.tile.shape[0] || 0, t.tile.shape[1] || 0, 1],
        255,
        "int32"
      )),
      F.concat([t.tile, t.alpha], -1)
    );
  });
}
async function Lo(e, t) {
  if ((Re || (Re = await P1(t)), !(Re != null && Re.executor))) return null;
  (g0.src = F.div(e, 255)), M1 !== t.segmentation.ratio && Oo(t);
  let [n, o, r, s, A, a] = await Re.executeAsync(g0, da),
    l;
  switch (t.segmentation.mode || "default") {
    case "default":
      l = R1(n, o);
      break;
    case "alpha":
      l = R1(null, o);
      break;
    case "foreground":
      l = R1(n, null);
      break;
    case "state":
      l = xa(r);
      break;
    default:
      l = F.tensor(0);
  }
  return (
    F.dispose([g0.src, n, o, g0.r1i, g0.r2i, g0.r3i, g0.r4i]),
    ([g0.r1i, g0.r2i, g0.r3i, g0.r4i] = [r, s, A, a]),
    l
  );
}
var S0 = Z(H());
var L0;
async function k1(e) {
  return (
    !L0 || R.initial
      ? (L0 = await L(e.segmentation.modelPath))
      : e.debug && b("cached model:", L0.modelUrl),
    L0
  );
}
async function Wo(e, t) {
  var r;
  if (
    (L0 || (L0 = await k1(t)),
    !(L0 != null && L0.executor) ||
      !((r = L0 == null ? void 0 : L0.inputs) != null && r[0].shape))
  )
    return null;
  let n = {};
  (n.resize = S0.image.resizeBilinear(
    e,
    [
      L0.inputs[0].shape ? L0.inputs[0].shape[1] : 0,
      L0.inputs[0].shape ? L0.inputs[0].shape[2] : 0,
    ],
    !1
  )),
    (n.norm = S0.div(n.resize, C.tf255)),
    (n.res = L0.execute(n.norm)),
    (n.squeeze = S0.squeeze(n.res, [0])),
    (n.alpha = S0.image.resizeBilinear(n.squeeze, [
      e.shape[1] || 0,
      e.shape[2] || 0,
    ])),
    (n.mul = S0.mul(n.alpha, C.tf255));
  let o;
  switch (t.segmentation.mode || "default") {
    case "default":
      (n.input = S0.squeeze(e)),
        (n.concat = S0.concat([n.input, n.mul], -1)),
        (o = S0.cast(n.concat, "int32"));
      break;
    case "alpha":
      o = S0.cast(n.mul, "int32");
      break;
    default:
      o = S0.tensor(0);
  }
  return Object.keys(n).forEach((s) => S0.dispose(n[s])), o;
}
function Zt(e, t, n) {
  var c, d;
  if (!t || !((c = e == null ? void 0 : e.config) != null && c.validateModels))
    return null;
  let o = [
      "const",
      "placeholder",
      "noop",
      "pad",
      "squeeze",
      "add",
      "sub",
      "mul",
      "div",
    ],
    r = [
      "biasadd",
      "fusedbatchnormv3",
      "matmul",
      "switch",
      "shape",
      "merge",
      "split",
      "broadcastto",
    ],
    s = [],
    A = [],
    a = t.modelUrl,
    l = t.executor;
  if ((d = l == null ? void 0 : l.graph) != null && d.nodes)
    for (let i of Object.values(l.graph.nodes)) {
      let y = i.op.toLowerCase();
      s.includes(y) || s.push(y);
    }
  else !l && e.config.debug && b("model not loaded", n);
  for (let i of s)
    !o.includes(i) &&
      !r.includes(i) &&
      !e.env.kernels.includes(i) &&
      !e.env.kernels.includes(i.replace("_", "")) &&
      !e.env.kernels.includes(i.replace("native", "")) &&
      !e.env.kernels.includes(i.replace("v2", "")) &&
      A.push(i);
  return (
    e.config.debug && A.length > 0 && b("model validation failed:", n, A),
    A.length > 0 ? { name: n, missing: A, ops: s, url: a } : null
  );
}
var V2 = class {
  constructor(t) {
    w(this, "instance");
    w(this, "models", {});
    (this.models = {}), (this.instance = t);
  }
  stats() {
    let t = 0,
      n = 0,
      o = 0;
    for (let s of Object.values(v0))
      (t += Number.isNaN(+s.sizeFromManifest) ? 0 : s.sizeFromManifest),
        (n += Number.isNaN(+s.sizeLoadedWeights) ? 0 : s.sizeLoadedWeights),
        (o += Number.isNaN(+s.sizeDesired) ? 0 : s.sizeDesired);
    let r = o > 0 ? n / o : 0;
    return {
      numLoadedModels: Object.values(v0).filter((s) =>
        s == null ? void 0 : s.loaded
      ).length,
      numDefinedModels: Object.keys(this.models).length,
      percentageLoaded: r,
      totalSizeFromManifest: t,
      totalSizeWeights: n,
      totalSizeLoading: o,
      modelStats: Object.values(v0),
    };
  }
  reset() {
    for (let t of Object.keys(this.models)) this.models[t] = null;
  }
  async load(t) {
    var o,
      r,
      s,
      A,
      a,
      l,
      c,
      d,
      i,
      y,
      x,
      m,
      f,
      h,
      T,
      g,
      p,
      u,
      k,
      P,
      N,
      B,
      J,
      G,
      K,
      e0,
      n0;
    R.initial && this.reset(), t && (this.instance = t);
    let n = {};
    (n.blazeface =
      this.instance.config.face.enabled && !this.models.blazeface
        ? z3(this.instance.config)
        : null),
      (n.antispoof =
        this.instance.config.face.enabled &&
        (o = this.instance.config.face.antispoof) != null &&
        o.enabled &&
        !this.models.antispoof
          ? en(this.instance.config)
          : null),
      (n.liveness =
        this.instance.config.face.enabled &&
        (r = this.instance.config.face.liveness) != null &&
        r.enabled &&
        !this.models.liveness
          ? rn(this.instance.config)
          : null),
      (n.faceres =
        this.instance.config.face.enabled &&
        (s = this.instance.config.face.description) != null &&
        s.enabled &&
        !this.models.faceres
          ? K3(this.instance.config)
          : null),
      (n.emotion =
        this.instance.config.face.enabled &&
        (A = this.instance.config.face.emotion) != null &&
        A.enabled &&
        !this.models.emotion
          ? q3(this.instance.config)
          : null),
      (n.iris =
        this.instance.config.face.enabled &&
        (a = this.instance.config.face.iris) != null &&
        a.enabled &&
        !((l = this.instance.config.face.attention) != null && l.enabled) &&
        !this.models.iris
          ? L3(this.instance.config)
          : null),
      (n.facemesh =
        this.instance.config.face.enabled &&
        (c = this.instance.config.face.mesh) != null &&
        c.enabled &&
        !this.models.facemesh
          ? B3(this.instance.config)
          : null),
      (n.gear =
        this.instance.config.face.enabled &&
        (d = this.instance.config.face.gear) != null &&
        d.enabled &&
        !this.models.gear
          ? ln(this.instance.config)
          : null),
      (n.ssrnetage =
        this.instance.config.face.enabled &&
        (i = this.instance.config.face.ssrnet) != null &&
        i.enabled &&
        !this.models.ssrnetage
          ? yn(this.instance.config)
          : null),
      (n.ssrnetgender =
        this.instance.config.face.enabled &&
        (y = this.instance.config.face.ssrnet) != null &&
        y.enabled &&
        !this.models.ssrnetgender
          ? un(this.instance.config)
          : null),
      (n.mobilefacenet =
        this.instance.config.face.enabled &&
        (x = this.instance.config.face.mobilefacenet) != null &&
        x.enabled &&
        !this.models.mobilefacenet
          ? vn(this.instance.config)
          : null),
      (n.insightface =
        this.instance.config.face.enabled &&
        (m = this.instance.config.face.insightface) != null &&
        m.enabled &&
        !this.models.insightface
          ? wn(this.instance.config)
          : null),
      (n.blazepose =
        this.instance.config.body.enabled &&
        !this.models.blazepose &&
        (f = this.instance.config.body.modelPath) != null &&
        f.includes("blazepose")
          ? c3(this.instance.config)
          : null),
      (n.blazeposedetect =
        this.instance.config.body.enabled &&
        !this.models.blazeposedetect &&
        this.instance.config.body.detector &&
        this.instance.config.body.detector.modelPath
          ? l3(this.instance.config)
          : null),
      (n.efficientpose =
        this.instance.config.body.enabled &&
        !this.models.efficientpose &&
        (h = this.instance.config.body.modelPath) != null &&
        h.includes("efficientpose")
          ? p3(this.instance.config)
          : null),
      (n.movenet =
        this.instance.config.body.enabled &&
        !this.models.movenet &&
        (T = this.instance.config.body.modelPath) != null &&
        T.includes("movenet")
          ? go(this.instance.config)
          : null),
      (n.posenet =
        this.instance.config.body.enabled &&
        !this.models.posenet &&
        (g = this.instance.config.body.modelPath) != null &&
        g.includes("posenet")
          ? jo(this.instance.config)
          : null),
      (n.handtrack =
        this.instance.config.hand.enabled &&
        !this.models.handtrack &&
        (u =
          (p = this.instance.config.hand.detector) == null
            ? void 0
            : p.modelPath) != null &&
        u.includes("handtrack")
          ? io(this.instance.config)
          : null),
      (n.handskeleton =
        this.instance.config.hand.enabled &&
        this.instance.config.hand.landmarks &&
        !this.models.handskeleton &&
        (P =
          (k = this.instance.config.hand.detector) == null
            ? void 0
            : k.modelPath) != null &&
        P.includes("handtrack")
          ? lo(this.instance.config)
          : null),
      this.instance.config.hand.enabled &&
        !this.models.handdetect &&
        (B =
          (N = this.instance.config.hand.detector) == null
            ? void 0
            : N.modelPath) != null &&
        B.includes("handdetect") &&
        ((n.handdetect = no(this.instance.config)),
        (n.handskeleton = oo(this.instance.config))),
      (n.centernet =
        this.instance.config.object.enabled &&
        !this.models.centernet &&
        (J = this.instance.config.object.modelPath) != null &&
        J.includes("centernet")
          ? y3(this.instance.config)
          : null),
      (n.nanodet =
        this.instance.config.object.enabled &&
        !this.models.nanodet &&
        (G = this.instance.config.object.modelPath) != null &&
        G.includes("nanodet")
          ? Ro(this.instance.config)
          : null),
      (n.selfie =
        this.instance.config.segmentation.enabled &&
        !this.models.selfie &&
        (K = this.instance.config.segmentation.modelPath) != null &&
        K.includes("selfie")
          ? k1(this.instance.config)
          : null),
      (n.meet =
        this.instance.config.segmentation.enabled &&
        !this.models.meet &&
        (e0 = this.instance.config.segmentation.modelPath) != null &&
        e0.includes("meet")
          ? d1(this.instance.config)
          : null),
      (n.rvm =
        this.instance.config.segmentation.enabled &&
        !this.models.rvm &&
        (n0 = this.instance.config.segmentation.modelPath) != null &&
        n0.includes("rvm")
          ? P1(this.instance.config)
          : null);
    for (let [o0, N0] of Object.entries(n))
      N0 != null && N0.then && N0.then((M) => (this.models[o0] = M));
    await Promise.all(Object.values(n));
  }
  list() {
    let t = Object.keys(this.models).map((n) => {
      var o;
      return {
        name: n,
        loaded: this.models[n] !== null,
        size: 0,
        url: this.models[n]
          ? (o = this.models[n]) == null
            ? void 0
            : o.modelUrl
          : null,
      };
    });
    for (let n of t) {
      let o = Object.keys(v0).find((r) => r.startsWith(n.name));
      o && ((n.size = v0[o].sizeLoadedWeights), (n.url = v0[o].url));
    }
    return t;
  }
  loaded() {
    return this.list()
      .filter((o) => o.loaded)
      .map((o) => o.name);
  }
  validate() {
    let t = [];
    for (let n of Object.keys(this.models)) {
      let o = this.models[n];
      if (!o) continue;
      let r = Zt(this.instance, o, n);
      r && t.push(r);
    }
    return t;
  }
};
function Fo(e, t, n, o, r) {
  var a, l, c, d, i, y;
  let s = 0,
    A = [];
  for (let x of e) {
    let m = {
      id: s++,
      face: x,
      body: null,
      hands: { left: null, right: null },
      gestures: [],
      box: [0, 0, 0, 0],
    };
    for (let u of t)
      x.box[0] > u.box[0] &&
        x.box[0] < u.box[0] + u.box[2] &&
        x.box[1] + x.box[3] > u.box[1] &&
        x.box[1] + x.box[3] < u.box[1] + u.box[3] &&
        (m.body = u);
    if (m.body)
      for (let u of n)
        u.box[0] + u.box[2] > m.body.box[0] &&
          u.box[0] + u.box[2] < m.body.box[0] + m.body.box[2] &&
          u.box[1] + u.box[3] > m.body.box[1] &&
          u.box[1] + u.box[3] < m.body.box[1] + m.body.box[3] &&
          m.hands &&
          (m.hands.left = u),
          u.box[0] < m.body.box[0] + m.body.box[2] &&
            u.box[0] > m.body.box[0] &&
            u.box[1] + u.box[3] > m.body.box[1] &&
            u.box[1] + u.box[3] < m.body.box[1] + m.body.box[3] &&
            m.hands &&
            (m.hands.right = u);
    for (let u of o)
      ((u.face !== void 0 && u.face === x.id) ||
        (u.iris !== void 0 && u.iris === x.id) ||
        (u.body !== void 0 &&
          u.body === ((a = m.body) == null ? void 0 : a.id)) ||
        (u.hand !== void 0 &&
          u.hand === ((l = m.hands.left) == null ? void 0 : l.id)) ||
        (u.hand !== void 0 &&
          u.hand === ((c = m.hands.right) == null ? void 0 : c.id))) &&
        m.gestures.push(u);
    let f = [],
      h = [],
      T = (u) => {
        u &&
          u.length === 4 &&
          (f.push(u[0], u[0] + u[2]), h.push(u[1], u[1] + u[3]));
      };
    T(m.face.box),
      T((d = m.body) == null ? void 0 : d.box),
      T((i = m.hands.left) == null ? void 0 : i.box),
      T((y = m.hands.right) == null ? void 0 : y.box);
    let g = Math.min(...f),
      p = Math.min(...h);
    (m.box = [g, p, Math.max(...f) - g, Math.max(...h) - p]),
      r != null &&
        r[1] &&
        r != null &&
        r[2] &&
        (m.boxRaw = [
          m.box[0] / r[2],
          m.box[1] / r[1],
          m.box[2] / r[2],
          m.box[3] / r[1],
        ]),
      A.push(m);
  }
  return A;
}
var a0 = Z(H());
var qt = `
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`,
  Xt = `
/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigk
JyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVF
RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCASwBLADASIA
AhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEDAgQFBgf/xABDEAEAAgECBAMECQIDBgUFAQAA
AQIDBBEFEiExE0FRBiJhcRQjMkJSgZGhsWLBJDNyFSVTY3OSNEPR4fAHFjWCokT/xAAYAQEAAwEA
AAAAAAAAAAAAAAAAAQIDBP/EACARAQEBAQADAQEBAQEBAAAAAAABAhEDITFBEjJRIhP/2gAMAwEA
AhEDEQA/APqYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAKNTq8OkxzfNkisQC8eb1XtRNbzXT4q7eU2nu0MntRq/D8StMccvW29ZmdvgjsTyvZjxOLj
+s8WLxn8TFPXs6Oj9oct7c14rkxz22nrB2I49KOdTjelmszfmpMeUxv/AA28OqwZ4icWWtt/SUi4
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmdo3nsPNe0Pt
Fh09Z0+DNWL7+9O/7A3eJcZppsV5raI27esvH6jX5ddM25p79Ilo59VbUZOe2Tm/PeGvfPfT2iKR
PLv1+DO678XmW/a97U6TtOyzTbTF538/T9WjTNecm9a7126tqk3rSYxY5ta1plRZqZNXGjyZcPXl
mZmsx+qjBrsuO16xM7eXRt04JrdTltk5OWJnfaWf0a2lty5MdZnfzSn+WOHiOutFpjHa9e8bQ2fp
+alYy462pk7zXbuxjPesbRS0f6ZZV1ET1tErzXFLHo+A+1ddZf6NrI8PJHa1vN6iJi0bxMTHwfOa
zhzd61v1846utwniM6DUdb3nBaNrVmd9vjC/ZVePYirBqMWppz4rxaPgtEAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAItaK1m09ojcHnvarjM8P0vh49+a/eY8ng9D
h1fGM1rxjtGPfvbzdbjuTJxHX48cTPNltM/KsS9Dw7S49Jp6UpHaGe2vjz1y9J7LYK13vHWe7bj2
ex1tvM80ekuxW3RnW3Vm6P5jRx8H0+OYmMcb+bapo8GKPdpC6bQwtdHU8JpWkdJ/JweL6e23iU67
d4dubSqyVi9Zi0bwIs68XGp36TtEq7ZJmZmevzdbifCKWtbJinkt6eTgZPFw32t+sRurbWVzxs1y
Rv6T8V1NZNPtfq0seTm+Kevr+SZuxXjvaPiV8N4viycto9HseG6+uu08W6Rkj7UPmFck1tE1nlmP
Ld3eA8V8HVVi1pjq6Ma/pnqce/ERMTETHaUrKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAADW19+TQ5p/p2bLS4v04Zmt5VjeQeJ4bjnLqsupv+Ka1+ERLv4reTmcNxcuC
vy3l0qdI2hlr66sT02ot0ZV7qqrInruzrVZLGSZ37JjqgYTG0K5lbaFVhDT1Ub456RPweY4hixWi
eSdpjvD1eWejz3FNHWYtkpvFo9EIseb3tS3SerOms22rfpPqZKzvvHSYUz70TExG6Gdbs2rljeJ/
Mx5L0vEzPaelnOi98c9J2bFNTFpit47+a+PVUvx9T9nOIfT+GV5p3yY/ds67wvsXqpxau+G09Lx+
r3TqrEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADV4ljnLw3U0jvO
O0fs2lWqyUw6XLkyfYrWZkHldBEV09eveG3Fq1mI3jd4vPrOIaid8G9MP3Y38k6fNrt/rMk9Ou8s
tfXXn49rGWInuy8SO/k5Gl1E3rG/fzbOe94wTy99mbRvTrMOOvNfJWsesywniukrG/jU6fF43WYN
TmtEeJtEQ06aSmK2+bNtEd+qfSO17unF9Hmvy1y13XWyVmN4tExLxVK8PmNq5NrT58zawam+m/yc
0Xj8NpRYSvQZ7xEOdqI3rPozxayNRXe0ct/ON03jmrKB5nV4q1yTO20Obmv4c+cx8HoeI6WZpNoj
q83niYmYscU0r8aJ6T1n49zeJ+Meqm1drb9J+Kd5p136StGVem9l9TbHxLDFp7W7+sS+q1nesT6w
+PcAzVjiGHftzQ+v4f8AJpv6On8jH9ZgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAABp8VrW/C9TW0ztOO3b5Nxp8VmI4bn37TWYB8f1HFtTfUfR9FWJmsdZ9I7MtJxDX5s
d8ta1y0xzteaR2277rcuhycP12SceLxMeWNpjttHwlu8I0mfQ1y+D7k5YmJmY36T36Ka43z/AF1t
cI1ds+qxVj7/AEej19PCw9HJ4NoK4OIU5Y35YmZdzVTGebVZabx5jJS+Tmns81rNLm1Wrzc9rVw4
Yibbem72mXTTS0w0M3BvEta1bWrM95ie5EanY87wXgNOL6XPfxraXLhra/W28bR/dzYzarBqJxRe
bzE7Rt5vWU9n8mPHOGmS0Ypnea1naJb+k9ncNLR7u2y/WcxXO4TOoyUrN6zD0FaW5Y3hu49FiwUi
KxCvLMR0hlW0jn6ukWw3iXjOJzbDlneOj3GaN6zDzfFOH+LE7SRGo83XNSZ2lbG2/WfdlvaT2cy6
rNFInlrv1mfJ37cK4PwTTxOoidRm2+/2/KFuyMp47XB4LivXiunrH2b2iH2qn2K/J8x4fGDNxTSZ
9Nh8OviRvTyfT6xtWI+DeXs9MNZubypASqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAOZx6/LoOWPvWiHTcf2hiZ0e8fc2mf1E5+vP/AEeuSd7RC2uKtI6QjHfeINTfwtPf
Jvty9WPfbt/lucP03gxfJf7d/wBoReYpm97zaNeLb4Ims9Nt94auDjem1Wo5PFi1onylS+1o7l8V
bxvtupjDMdNkYtXS1+Stt+m63xImEJ4xjHER2ZxMUjeUTO3VRmydBbjLJqPi08mbeVOXJPq1sl5Q
Vbkz9+rRy35rxHqzmZlVEe/Ez5LRlW5iyfR6zffaIjq1OSNZps2a21rZInafSPJhxGMl9LStLRWM
lorM/A4dkrWbYfLZC2W/7K6eubX6b4RzT+W76K8b7G6X62cu3Sten59nsm3j+OXz3/0ANGIAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0OIYfpOHPijvNNo+fdvtXJO18k/
/OwPFYbz2ls3jx8VqW6xMdWPEdP9D4lkx/dt79flLLHbkxTPwY6nt2512ORTRzE2x4/dpE7cvkme
E4IrW3hRMxO8THRtU1FKWtvtvK2upx22rzRCtXkqzh2jtF7ZbT122b01ndnpuWuP3Z3+Ky20qDVv
fauzVy3mejZzNK8dVjqi87KLRLYtXruqvXzkQp7Qoid88R6rcl+WGlW0/Sa22mfhCZOq2x082ix6
jkm822pO8VrPdr4dNObVeDo8XW3uzMbzK+mvxT7szE27cvnu9j7PcNjSaXx8mOIzZevbrEeic5tN
+SZnpt8J4fHD9HXHO3PPW0x/DeBtJxx29vaAJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAKNRim9Z5e89Nl4DzXtVh5babURHrSf7f3ec1+qnDorWrvvt5Pccb0n0zhmWk
Rvevv1+cPE2rGTFNZU26PFfxwa5dVkjelI2772nZnX6bbrEUq3o0d678u8wmuDL2ittvVjXdneeK
cGv4jpJ6U56+kS7+j118+GLXpakzHaWlp9NNY3tv+bbiYiNoQy1y30uyZJlrWmZnuym6q1iIJnop
yW2Te8bdWnnypQqzZOadokiIpSZntWN5lrxki19vNRxrUeBwnNNd+fJEY6/OejXLn3Xe/wDp9wyn
E8uo4lqqxblv7lJ26T6vpD5X7G8QycKzeBMbzMRM1/FH/wA/h9QwZ6ajDXLitvWzRgsAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeL45w+dDrZvWv1OWd4+E+j2jX
12jx67TWw5Y6T2nzifU+rZ1y9eHwzDYxxEy18+DJodXfT5o96vafWPVbjyxDn1OOzHudbM0rt2UW
iI69mVtRXZq5tREb9VUoy2iIlRbJ0UX1VZ6btTLrI7V6yk62M2oisT1c7JmtkttVMUyZp6x0beDS
RWOvdKijDimvWd3G9pNRMfRcNfvZOb9Hpb0itJeP47k/3hgjaZnbaP1XxWW3T0movbNS0W645nbf
0nrMPpXs3xamoxdJiLbe/X1n8Uf3fKsOTw4jbaXo+EarJhtGTHMxeJ6xH7Sti9Zaj6x3HM4NxXFx
DS1mtoi8dJrv2l011QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AGjxLhODieOIye7kr9m8d4eM4to9RwjPXFa0ZIvG9bR0fQXmPbDFvTTZPOJmEWS/V8bs9R43NxLL
G8eFbePg1bajU5/s0l1ceKLx1hbjwRE9mOpx0y2uRTSZsm3PMw2aaKtIjo6kYo9EXpET0hVLXxYK
xC6MZvyx1lFs0RHfaPiCnU12pLyHGNDbUajBekWma2npWN3p8+opa20e9LSyZLxExTlpM+vdOdcZ
a9tPS8MyUvFrzWlI6727u1pYxYrbVmb7x+TQx6au3Nqcl7/0rcmW9axGnwZJj1novmxnZXV0fFp4
ZxLBPgTGK8xzXr5fOH0bFlpmxVyY7Rato3iYfNuG2x56Wrqa8s2jz+7Lu8O12bS6jkwzN6THNNI6
tvrN68Y4rxlx1vHa0bskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAA4XtTTm0OKfTJ/aXdcL2pyRGjwU362yb7fkJz9eTxxyZJjyltRXzUZK7TFtl9Lbwy06YzrHwa+
fJFd/wCVt8m0bQ0eS2qzcm+1K/an+zNZFL5M1pjFXeI72ky48eGnPkvNp27+TPU6nHpMfLXaIjpE
erk5dRMxOfN1mPeisfshW1ne1a1577Y6x5R3U0zze31FOWI6ze0byU098kRlzbxM9qrMlPDpyRMR
Md5Vt/Ihp5898mWZm1pjftE91uCt7fCI7dWeHDEW3t723l6rslqxWZnasR+SYhFbzhnfxJ2jyeq9
lcGXWZcmW0zWKxHLaI7794eJx5fpfEKabT8t8l5isddo3l9S4VjrwrRUwzSJt3tav3pdOL6Y6dXD
j8HFWm+/KsU4NRXPvtWazHquWVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAa+fXYNP9u8b+kdZBsDkZOO135cWOZn4y5Wu4xqctbe9y19Kp4njt6vi+PDm8DFMWybbzPlV
5PiGtz67UxbNbeKTtWIjaIXYpnwuaftT5tXJT3vmi1pMsrU5qIrG1V1a+5DCa7b9GFbRr5J6Wnbt
Cu+Wmk0m8956z8ZWZNorbfzcbX5rZslazPux3hUt41NTntktObJ13+zX1bek01r4/HzVm0bxPXy/
+bNfDgjVa2uOY92kdfg6ufJOKvLXtttVVSqbcta2vM7zXtHpLQy5ZtMd+vWd+7Zy3mdJHXra3f0c
vUarw7zFY5rT2hH1Lavnrgx81p3U49Pk4nE5L35MO/StfNRXR5tXnrS8W67WvfyiPSPi7uLHFK1p
jrtSsbR5Lc4RzsXBaYreP4l45esRD2HD9fnw6evvWvO3Tfr0aGk0U55ra0TFInv6uzgrXFXlx0i0
77RPlC83Yj+JW7oddqr6vHzTTw9/f6dod+L1t9m0T8pcbFSmPHER3892W0zPuz+jSbVvidkcqmfP
Sel7bekrI4n4dZnPWIrHeYnZee2Wpy8dEaml4npNZblw5qzb8M9JbYgAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAABEzFYmZnaI7yCXL1XGa0jJXT0571nbee27DiXEprp8nhbxG20W8
5cbD0ikfnKO+urTPvjoZdXqctdsmTaPSvRpWmsdZ6yztfaGplvv3lWW1tyRlz1x0vkn7Vo5atTNe
Y0+1o79V2KsZsvX7Ne5mwxnyTNvsx2iGneM/rCdRSuOsTasTt5kRFtpjqmOH4t4nk7estiMNa97R
Hwhna0iuKTEdmGWa4672nZtRele1N59Zlq6vLOSsYorEc07qcW65euzRvtXvPZy52naZ7ujr6fXV
rWdukREK8+njHgmZmPc67bq6ivVWhxxgxZLztNrT1mZ/SP4VZs0zaOvfp84WUtNsXLvtv3699+rU
z7+Jtt5qURqMnPpctaR1rMSw4ZoK57eNk6xHaJRh97Ltt7lo5Z+L1HAPZvVauZ2nFTSzMTzeJEz8
to6xPfvsZntPZ9rXxabmxzefdrv0j1dXh/BcmstW1qxTHHasR3+b0GPhGl+kWmd64dNEVjf73T7X
y8vy+Ddx6O3iRakxTH5RXrMw1/lX+3Itw2MFIraN48qRHdZi0cUjmmPen9noox1iO0fNzdXEYrTt
stcmd9aX0bJ+HePmiKTitO8TMLZ1cVjrMfqpz6ys4pjfrPRWZ9rXXptUit6zO+23VyaRHEc05L1/
w9J9ys/en1ljqdVbwYw452tlnl3jyjzbmmiMeKtYjpEbLeTXPUU8ee/+qjJpsV5rbkrFqzE1tEbT
DpYNbW21Mnu29fKWna0KbqTdjXXjld0cvQ63ltGHNPSfs2n+HUbS9c2s2UASqAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAOVxPWe99HpP8ArmP4b+r1EabT3yT3iOkesvMVtN7za07zad5l
XV5GmM9vVfEstvDx0jtaVVMlq+UJ18b5cMRvPeSuK87bUt+i2Z3PtG7zXpjkzXt6R+TXyTMzvM7t
ydHqZ+zhv1+Cv/ZuqvPTHMfOYaTMil1a1K2vHSLTELq2v+KWzThGo84rH5rq8JzedqR+ZeI7WnOS
34pYTafWXR/2Pln/AMyrKOCWnvmiPyR6O1y9585lhWJvl557Q6eo4T4dYiMvW3b3UanhldHpJtGX
e09unmjsT7eb1l4trI2t0hsZfrdNO0bzy+nzU20/+NmkzO9esz+TZxWis9dttvPv+Tn21jjaW8zn
26bTG3mp1M/Wzv3t0jyWXiKZJmsTERaZhXXDbNl8WaztWenxZLstPp5pau8frDtVrNMM5cfTfpMf
3aunxxbes9d/R09Dp8ebJi09ptFr3jtt2WyrW9wy1Jx132mK+Xq9PotT0iIU19ntLtExa3T47T+q
6nBaYvsZstZ+cT/LeMnUi0TXffo1s2m8Ws2/OIMWk5Jib5L328rS2t94Sh5TV4ppklpW6PT6rh+P
NbebTHyas8E081mZy5P2W6OFhjxNTE/hr/LoRO0Kvo9dPqctKzMxEx1la5t3tdnjnMs4noievcrO
yZjeFF1OSnNV0OG62cn1GWffj7Mz5w05joovzY7xes7TE7w0xrjPeex6Ua+j1UarBFu1o6Wj0lsN
3JfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrU5o0+nvlt92P3BxuM6nxNRGCs+7Tv8
2hToxm1r3m9utrTvMsonqyt7XTmcja0u3O6FMfi5t/u0/lzdJM81p9O3zdvHTwsUR5+bfPqOfX1h
dqV+3O7bs1+T31oqmI3TEM4rvCdkDGIIhlFd2daboS0NXG2bD6bufxXU1vlmu/u4us/N0+L1tTSx
kr9qk7w89j1FNZMV3jxLzvaJ8mer+LSOZqK2xZotbvljfr/89U453rXt9lse081xZtNjx7TGKu0t
DHlrevSevaN5Y6+tJ8c7VRNMt63n3ub+6/R54rERMztDYy4a5omclYmfxKcenrjtHLvtPrCnVmdb
eFe3JXmjy6eS/DrMuLVYsta9Mdt++6qLxO+0dEc8UmInr18iUfReHcXrqccb9Z27Q61Lb13eJ9nc
1Z35rTvE9avY4bTkpG8xEfB05vYxqybc07R281naGMREdoT5JQqy9mply7Q3bV3iXG1eXw7TWSka
c258t7+tpT5/BjT7MfHqndz12Z+M4lMMKyziUJJiN1WSu9fku23RaOgKNJqbaTU1t9yelo+D0cTE
xEx1iXmM1Nt3W4PqvFweDaffx9vjDbGvxz+TP66QDRiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAOJxzU73rp6z296zsZMkYsdr2naKxvLyObNOfNfJbvad1dXkaeOdpvsc2yuZVzfbfqybutwu
s5s8R92J3dvJb3tnO4HSMegtmt3nfZvYp8SZl0z45NfSK7onH1bNcfRFqnUKJr0Y7dVtq7prjEsK
0XVpEM6028mW20IHK41aPo3J6zs4ODhdcvPnvExFevNXpMOrxi/PlrTee7PLX6Pwa09uaNlKtHg9
dM3z5d7ReOu02nu0JzZMfblrv5R5uvrcdImZ26T1mYhxs1Os7RH93PZ7axuafNfLitvbaYU3yZYt
PXs9NwHhui1HBa5LVicsb81onrEuVqNNSuS8Y67dZ6xPZa59Il9uX41vEitImZme3q2Kxbxora0T
Md/ROSa4Ztkj7c9OafL5LuGYubmyX3iu/TfbdSfVnpvZLT/XZK233+Mbbva1xRXyiPk8pwbH4N6T
adq5a71n0tD1WDL4tPe6Xr0tDpz8YVnJHWEXYxbqlBedoef4tW0XraO09HdyztSZcbUz43C+ee9b
SVMaeOfqq7+jGckQ1Yz7+7v2RN/WXPXZPjci2+2yyJaVMuy+uSJlA2d+pNoVRbeDcSxyTE+TDDlt
pdRXLTynrHrDOyiyZeVFnY9TjvXJjres71tG8MnJ4Nqt4tp7T1jrV1nRL1x2cvABKAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAHJ49qfD09cNZ97JPX5PPw2uI6j6Vrsl/ux7tfk1mWr7dOM8iLdm
vfebREefRsWldw7SxqNbWbR7lPesrn3Vteo7dYjDpMGCvfbeXQ0uLlxRLRxROfUc34p6fCHYrXlr
EejqrjY8uzCYW7MZjdVKqK9VlaxCYrsnYExBMRMJRPZA8/xPHtmpP9W2xx76vhWOInvt/C7ike7N
vwzE9kcapGfhlevTaFbFo8RqJ5vy8/RoW09ek0msxHfp3dzNoLzp4zUmZpMbT8HJyYJi20X2n0lh
ZY1li/RaidBF4w2mK3jrHaFGp1lN+tptPp5IjBkid5mIp16TKu0abBPv33vPlM7z+iPdFNcWXU5I
tkrNce/b1W5db1nTaf3ax9q0fxDW1ebNk2phty1mOu09VOm8W19orEz23j1TwfSeERFuEYMddptW
d43dvBn21eKJ75KbW+cf/JcTgMxXTb3nbljz+TpcPmc2uyZO1KRtVtGVdi0bx07qJnllsRO6rNTe
N4XVamsy8mnvPwc3R2jPwe8TPbdlxXNOPSZfhWWpwO85OFzv57qrODkzeHntSe8Sn6Rv0a3EZ218
8nXekfr1a0ZLVnqx19dWb6demXybOO7lYMvNMdW9S/VVLo0us7tPHdtUtEwJiZU3jq2Jhham8CVG
PNODNTJXvWd3qcWSubFXJWd4tG8PK3pPd1OB6veLaa89Y61/u2xfxh5c/rsgNHOAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAANLimq+i6O0xPv392rdeZ4rq/pOqnlnelOkIt5F8Z7Wj27I2I6sb25YY
V1ImY3dbQ08LRc23vZp2j5OJG+XJWle9p2h6HHtbJXFT7OOIpX+7TxT31j5rycdTh+Dpz+XaG/sw
w18PHWseULN2trBE9UcrJKBhFU7JAQi0dEomegNDUYovM7x3jb5tO1ZvpbaTLtzRExWfWPJ08kbT
Ex5NXWYYyV5omYtHWJieyeDzuizfRs19Jn6TM7Ru1uMcJxZqTkw+5f4ebqa7SV1MR4tdrx2vEfy1
axqsNOTLjnLXytVXi3Xj8+nmsxTLM16d5npPyUzpekTtSK+U7vS6vQ/SYmK1vWPS1HOn2dvvvvE/
tDO5XlcO+LbfHSd/W3o6/BdDOXPTnj3Kz38rS6Wm4FNrRyRzTH3p6RH/AKvR8L4dXSzE3jmtHn5I
mbfqLV+m4dbLSsZInHjr3iI6zLpYaxS01rHuxHRHiT9mv6s67Vj1aqL6326MrWiYa+/Q54BxPaGe
XRZpj8MquB4+Xg8zPnB7SX30to379GxpK1xcHiKz5IS8xr8PLPixH2bftLTy05o6dHYyVjLhy0t1
izjZa3pMVv3iO/qz1G2L+NbSajbNyW7xLsY8kTDz+fJXFqKZN4iZnafi6WHL0iYlStI7OO+7axW2
crFl7dW9jvE9ULN+J3ZbdFGOy+AYWpEqN7afNXLj+1Wd23KrJVMvCzseh0+auow1yU7WhY4fCdV4
OadPefcvPuz6S7jol649Tl4AJVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV581NPhtkvO0R+4NPi2
r8DB4dJ9+/7Q83Po2NTqLanNbLfvPaPSFDHV66sZ5ET0hRknyW2lTtMyouz0c8usx2n7s7vScKwx
zc1vu/y85p+maJh6Th+SOWeveXR4/wDLm8v+nX5mUWa9bbrInolmu5jdTNkxYFk2Isr3TuCzeGMz
+THdEyDDJO9Ja823rt2XWnya946pGvktDXta0ztWu/ybvLE9dkcoOf4GbJPWK1j49VmLh9JtE33v
Mevb9G7WsW8l1ccREISophiJ2jpDYpijbaOjOuOJ8ujOdqxsgVcsUjaETYvbaFFrgu5lVsm0yUtu
ryg43H5m+GIj1XcJzePoL4pnrWGtxmfchr8JvfHS1622if3QljzTTLes+qrNjrkiYtCzPMxnm095
YZJ6boS5teB49Tqscza97VtvWvlv8V/FOF34RrIxTM2xXjelp/eHoeA6XnzReY3ivX/0dfivDcfE
9HbDbaLx1pb0lOs+jO7K8Lis3cN+0NKcd9PmthzV5clJ2mF9J9GHHVL108dm1SznYr/Ft0tuhLb8
mNohFbMhLWy0mJ3rPXvDvcO1karBG8/WV6Wj+7kWrvDDBlvpdRGSnbzj1hpjX4z8mOx6UYYstc2O
uSk71tG7Ns5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZ2jeXneJ62dVl5KT9VTt8Z9W9xbWclPo+O
fft9qfSHEU1pv48ftYST23ZTDC/p0YtlVuvVjMbM5+LCZjYGWGdrTPxiHY4ffaf3cjTxz1v6xMS6
Olty2iXVj/Dk8n+ndrkhnGRo1v8AFdW3RCrZ5uiYsqrboncSu508yjmZRYQt50TfowYTbYGVrKrT
uTZjvukQnYhMIGVY2ZxPVWyrHVCWzXpVXkt3TE7Va+W4K7X3jv1auTNy3jdba0RZpamfroQN7Hk3
6wr1GTaN2OOJiu6Mu98NvgDi8Wy74d/yZ8PiPAiO2zU4nb6qIn1bugjfFE/ASp1ke9u15mbbRDZ1
Mb823kx0Ontn1OOkedoJCvT8I03gaKsz9q/WW+isRWsVjtHRKyrhe0XCfpWL6Vgr9fjjrEfeh5fF
feH0V5Dj3DPoOo+k4a/U5J6xH3ZZ7z3228evytOk7NvFbo0cdols47bSybt7HbddHVqUs2aW3Qnq
xVeu8LILR3SlZw3V/R8nhXn6u0/pLuPMXjeHT4Zruf6jLPvR9mZ8/g1xrvpz+TH7HUAaMAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAABRq9VXSYJyW79qx6yvmdo3l5viGs+maqYrO+OnSvx+KLeLZz2te1rZL2v
ed7WneZYWnZl5K72YV1xEyxmeqJljzIEWlVkszvbZp5soN3h2SJz3pP3odCnuWmPRxuERfJrZmtZ
mtY96fR28kbX3dXj/wAuTyf6bmK+9YX1s0cNtm3Sd4LFY2K23W1s16StiUJW7bp22RW3RluBuruz
mWEgrmCGWyNkoExKE1QlPmsqRDKeyBjaejWy2W3ttDUyz1QKslvehVqKTNosyyTvELabXptIJpaP
B39Ia2mz+JGpr51jdZefDx2hzuHZObNq58poJaGtjxJ2+LoaKP8ADRPo5+T3skx5OhpOmC0fBNQ0
5yTbn+bt8A0u9raiY6RHLVwY62mI6zMvaaHBGn0mPHt1iN5+aYVsACBXqMFNTgviyxvW0bSsAeE1
mkvw7V2w5Ote9besJx2er4rw2nEdNNekZa9aW9JeQjnxZLYskTW9Z2mJY7zz26fHrrdpbZsY7NGt
mxjvso1b9NmUwpx33XRO4K7VUTE1nmrvEx1bVo2VWiJE/XY4frY1WPlt0y17x6/FuPM0m+HJGTHO
1qu9pNVXVYt46Xj7VfRtnXXL5MfzexsALsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHM4jxOMFJphmJv529Dq
ZLfjDjPEIx450+K3v2+1MeUOHSOWFc3nJkmZnf4yujpVlqunOeFpV2nctLCZUXRM7MJtsWlRkv3Q
ky5NmpWt9RnrixVm17TtEQnJabXisRMzPSIew9n+CRoccajURvqLx5/chfOest642OGcIpoOG2w7
ROW9d72+LQvXevyejcPUU5M+SvpLeOataraw2a0dLbLqTtK1G3Es4lVWWUSoldFtmcXUbpidgXzK
GEW3TuCUSncnsDFMMLSms9EC6J6FpVzbZE5ALy0809ZbFr9GtfrEoFMzuuwz0Ueey3HbaBLDXe7i
tMOfwWnP9I+NZbuttvhs1uBRtXPb4SDm3iIvf57N7Dbl0VrS5+XrltEd+Z1Jx7cNms9N4TURRw3T
+PrcO3WszEvZOD7P6aYiMlvu16S7y1QAIAABxOPcLnUY/pWCv1tI96I+9DtgmXl68Biy7/NtUu3+
O8HnFa2s0tfd75KR5fFyMWTdhrPHVnX9R0cd21S3Rzsdm1iuqs256wrmGcT0RYSx5d047X02SMmO
esd49YRE9WcdSXhZ2O1p89NRji9J+cei1xMc3wXi+KZj1j1dTTaqmor06WjvWW+ddcu8XK8BZmAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAMMmWmKu952UZ9XFZmuP3revlDTtzWnmvO8q3XGmfHb9ZanV3yxtWeWn7y4es
vPNtDqZJ6Ts5mppvdl/XXRMyfGvSNlu/RVvtOzLfoipLT1VTKbSpvfogRkvtDVyZOhkyvQcA4Dzz
XV6yvTvTHMfvK+c9U3rkW+zvA/D21urr789cdZ8vi9KDb45rejl8Rry6iJ/FV1HP4vXbBTJEfYt1
+UpiHM295bXsqrO9l8QkZ0lZEqqLeyBZHZLGvZkhIndADKJ3TMoqWQMZ6pjsxll2jsCLSrmU2lFY
36gieyu0LJk3jbsga0wdqzK20QpyztQGprL/AFMrOE05NLkt6qdVWZxNrSe5o9vWBLiUjnzXn0vL
q555dHt8HOwV928/1z/LpzXxbYccRvzTB+jucOwxh0dI22mY3ltIrHLWIjyjZKyoAAAAACJiJjaY
3iXleM8InR5J1GniZw2n3oj7s/8Ao9Wi9a3rNbRE1mNpifNFnVs65XhcWTdt47bnFuF24dm8TFEz
p7T0/pn0a+HJux1OOrOux08d1ndqY7tillVkzExLOk7yd4YxGwluViJhE45raL0na0dtlWO0+bZr
1TKi+2zptZGTamT3b/tLacvJjiY3XaTWdYxZZ6/dtPm1zrv1z78fPcbwC7EAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhkyV
xUm152iAZWtFazNp2iGhm1Vss8uP3aevnKrNntqLdelI7VRHRnrX/HRjx/tZREVjZXeybW6KbWZt
pCZ6S08tN7Nmbb7zCrJtyoS5145bSx5mWafelr3tsKmS/o08uXyhlly7RPV2+AcBnPNdZrK+53pS
fP4ytnPVda4y4BwHxOXV6uvu96Unz+MvVxG0bQRG0bR2G0nHLb2gCUDX12LxtFmpHeazt82wT1gH
mMN4tWs+rcr2aEV8DU5sM/cvO3yb+O0csLUTSdrLphRE8tlkZI7Atr2ZMazDJVKTYSCawi7Ksq7z
1QERvLK3ZGPrKbyCrbdnMcsbeaa18/RhvvM7oGEwTG0JmYYTIML22a2e28xELM19oURPNO4lOem+
n3ZY5+prVnMc2GYU4/L4A0a15cNf6rz/AC6fC6+NxCPOuOu/5tHJTbHj+F5/l1+BYumXJMd9o3/d
MRXYASgAAAAAAABhlxUz4rY8lYtS0bTEvH8R4ffhmo6bzhtPu29Pg9mq1Gnx6rDbFmrzVsizq2df
zXkMWTeIbNL7tbXaHLwzUctvexWn3bmPL8WFnHVL326VZ91MfFVjvvVlz79kLrcf2m7j7bNHH3bl
J2SirLQoy4t1++7G0dBC/RanxI8PJPv18/WG241+alovSdrV6w6mDNGfFF4/OPSW2b1zeTPL1aAs
zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAVZ9RXBTe3WZ7R6iZOpzZq4ac1p+UermZMl89+a/byj0Ra9815ted59PQ32hlrXXRjH
DpCLX6ML5NlNsm/ZRqstfdXzbsZt06sLZNvNB1Za8RDWyZdo7q8udq5Mu/mIMt4md2lmy7JzZuWJ
dHgfBL8RvGo1MTXTxPSPx/8AstJ1XWpIs4BwSdbeNVqq/URPu0n73/s9hEREbRG0QUpWlYrWIisR
tER5JbSccur2gCUAAAAPM8Sry8Uyz67fwuxbzVPGsE49XGbvF42V4M0TEL33ERnktsxpk3sumK2j
admFdPFZ33VS2Mdui2J3UU6LYlFSsN2O5NkCyJ6K7T1TEsbAsxdpReerKkTFGMxvYEz0rsqtbbpC
b2VT1QEzuwtbaGUxspuJU3neWdKoiu8rq12gCI92YatLcublnzbEz1aOptyZqTuDHLfxN6R0+t5X
qdJhjBp6UiPLeXl9NSMnEKxHa1+bb8nrlvxUAAAAAAAAAAABTqtNj1eC2LLXeto/R43VabJw/VTh
ydY+7b1h7ho8V4dXiGlmvbJXrS3xRZ1fGv5rzeHN02bEW3cys3xZJx5ImtqztMS3MeTeGFjqlb2O
8btql3NpbZtYsnSBLeiWfdTjtutid+ghherHS5p0+f3vsX6T8Fkw181d4lMvEWdnHaGnw/UeNh5L
T7+PpPxbjdyWcvAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAo1Oprgr63ntAmTqdRqK4K9etp7Q5d7Wy2m953lNrWyWm953mVd77R0
Za1104xxlN9lV8qnJl2a9s3xUXX2ybsJyRDWtl3YWydEC+2VRkzeW6q+T4tbJm+KRdfK1cmWZnlr
vNp7RC/R6HU8SycmCk7ed57Q9ZwvgOn4fEXtHi5/O9o7fJaZ6z1uRyOEezVstq6jiEbV71xevzer
rWtKxWsRFY6REeSRrJxz22gCUAAAAAANbX6aNVpL0npMRvWfSXlKamsRMVvXm+EvZXjmpaPWHzfL
oNRjzXicfWJ8phfPxFejx72x7xMzK+sXiNoiXlq+Pi6fWV/VfTNqfLJl/WTg9Pji8R70LqvMV1Gq
j/zcv6yz+lanzzZP1lWpelTET6S81Gp1P/Gyf90s412rjtnyfqql6asREdWM9+jz9eJ6yP8Az7uh
odZqMt458tpB1JvEViI3/RhzRt13/R1MNaziiZiJn5K9ZNceKZiIiQcu/WekT+iYrWI3lzdTrs+8
8uW0fJzcur1Np/zsn6g79phVaIeetqNR/wAXJ/3SwnUaj/i5P+6UD0ldonum161h5mNRqP8Ai5P1
lNtRqJjacuT9Qd22WN5aGeZyZd/KHJy59RHbLf8AVq31Gp/4uT9ZEvS8Lr/vSs2npzRtL1z53wK+
oza/HW2XJNd99pmX0Rb8VAAAAAAAAAAAAAAcHj/C5yV+l4I9+v24jzj1cLFk8nu5jeNpeW41wmdL
knU6ev1Vp96sfdn/ANFdTrXG+eq1q5F2LLtbZoY8m8d11bbSydErsYsm+zZrO/zcnBm226uhiyRK
EtrvCrJDOJTeu8A1MWX6Lqq5N/dnpb5O5ExMbx2cPNTeJb/DM/iYPDtPvY+nzhri/jDy5/W6AuwA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAa2p1UYo5adbz+xbxMlvqJ1OqjDHLXree0ejmzNrWm953tPmTPWbWneZ7yoy5YhjrXXTjH8s75N
mtkyxt0VZM2/m175N1V03yTKubMLXVXybeYLLX2VXy7eam+b0bOg4VquJW+rry4/O9uyZOq3UjVm
9r25axMzPaIdvhns1kzbZddM0p5Y47z8/R2+HcF03Doi1a8+Xzvbv+TotJnjDXkt+K8ODHp8cY8N
IpSO0RCwF2YAAAAAAAAACvUZYw6fJkntWN3k8dfHz2vLucdz8mkjFE9bz1+UOZosX1UzPm0nqI/W
MYo9FlcPNklfFGeH/NshLGun+Cz6PtHZtVZWlRLS+jxPkRpIn7rdoupHTdA5s6SI+7H6Mfo+32Y2
+To3neSIiZ7A0IjPXpXLePlMotGW3272t85datKzHZjbTVnsDj+FG/2Y/RlGP4R+jo20u7H6N1Ql
o+H8I/REY957R+jpfReiK6eOYHLtj2tttH6KrY/6Y/R2c+kjeJiFVtLG24hxpw7/AHY/RRkw9O37
O99Hrt1YX0tfOBLjcGp4XF8c+u8fs9c4dcVcGemSI61nd3IneN1orQAAAAAAAAAAAAABFqxes1tE
TE9JiUgPKcX4RbRXnNgiZwWnrH4XPi28PdXpW9JraImsxtMS8pxXhF9DecuGJtgmf+1TWW2N/la1
L7N7T5e3Vy6W3hsYcvLbqzbO9jvvCzvDR0+XeO7crO6FmGSvRThy/RtVXJ92elvk2rRvDUzU7pl4
izsd2J3jeBpcNz+Lg5LT7+Pp+Xk3W7js5eAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs0NTrN96Yp6edkW8Wzm6+LNTq4pvTHO9vOfRoWtt
1mes95YWvs1s2fZldddOczLPLn2ju0MmebT3YZc2/mpm3qqllN1drsbZIhr3yzvtHf4AsvlYYseb
V5Yx4KTe0+UQ6nDvZ3UazbJqd8OKeu33peq0eh0+hxcmnxxWPOfOfm0mP+steT/ji8N9mKY9suum
L37+HHaPm9DSlaVitKxWsdohI0Y22gAgAAAAAAAAAABXnyRhw3yT92Nwef4xm8bVzET0rPJH5d12
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
AOZE/OsPS29nuH27YrV+VpeV9pdPXhOtw49NG9Mld55+vXcTPd42I47qo7xSfyWV9oM8d8VJ/VxM
d8l46xWF9cV7en6o/qLfxp2I9ob+eCv/AHMo9op89P8A/wBORGmyT5R+qfo2X8P7n9Q/jTsx7RR5
6ef+4/8AuHftg/8A6cWcOSO9J/WEbWr3pY7Efzp2Lcfv5YK/9zWy8d1E/ZpSv5Oba1/+Hb9lc+LP
bFt87I7E/wAabWbiurvEx4nL/pjZzc2bJkn372t85ZXx55/BX85lucC0vPxnTxlnnjm32mOiZqUu
LJ2p4TwnVavNWaYbRTfre0bQ99pcH0bT0xb78vmtiIiNojaErMwAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAHnfarF7umzRHaZrLjYrdIen9ocPi8JyTt1xzF4eUw23rCm3R4r6bMy
wt6kdTaWLdjswmNoZontsCm0K5XWjopnuDC0dGpqG5bs08/daKV672MjbSaif6oh6Z5f2LtvptRX
0tEvUN3Jfo8f7cYve0eX4zV7B5z20xc/C8eSPuZIRficfXlcPaG7ino08HWIbePpLF2NuiyOyrHK
3fZFSwuovHVfaVF4QK5YWTM9UT0EKry6Ps1Tn4zjn8NZn9nOtLseydObiWW34cf918fWfk+PYANn
KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq1WKM+ly4p+/WYeBxTNd6zG0xO0
vobw3FcP0bi2em20Tbmj5Srr418V9sa2Z7qKyzi07MXUylhaU7yjqhLCeiq3ddaFNxFYW7NLNG8t
zya+WO6Va9J7FW66mvwidnrXiPY3Ny8RyUn71Jj9Ht3RPjk19HK9pMHj8D1ER3rHN+jqqtTjjNps
uOe16zAifXzfTz7kNyndpYazS9qT0mszDdoxrsi6m8LazMq6zDOsq1ZEyrt1WWlXaUCqyq0rbKbi
Fdp6PReyFd8uqv8ACsfy83aXrPZHHto89/xX2/SP/dpj6y8vx6EBq5gAAAAAAAAAAAAAAAAAAAAA
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
NO67NbkhzNVnmInqzaOZrL93JyZeV0M1++7S02jvxDWxhxx033tPpC8Z6rrezWjmZyazJG2/u03h
2vFibTHoqvamiwVwY+nLGzV0+SZ1Mx8G0/45tOhzJ5lXMc3UVXRdlF1HP+iYsDPLPPy49/tz1+Te
pSIr0ho6ak5Ms5J8o2q6NImOrHV7XX488ypzTtHXo0s9t6zG7c1G1qz6ubeZiZ3UatXJG3yauSO7
cvMTEx5tPLb3prPRMVr0HB8vicNxf0+7+kt+LOJwTJyY/Bnz3tH93X36N58cWvq6LSyiyndMSlC7
mZcymLJiwLosmJVRLKLAtiU7q4lMSCzc3YxJuDMRuAlKAEgAAAlAkAAAAAABKAEgAAAAAJAAAAAA
AAAAAAAEgAAAAAAAAAAAAAkAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAhIAAACAAAASgAAAAAAEAAAA
hGzJAImGMwzQDDZjNVuyNgUTVhNGxysZqDVmiu1G5NN2M4waM0+DCaN2cbGcQNGaMZq3JxMJxA1J
qx2bU4kU09slorWNwa20z02RXHbJbl26QvtFovbHWkxEdJt5y2MOHlr2U1W3jx+1hiw8vSO63lmI
XRTaEWmtY6snRHO1VpmJ+DjavpSZl2s8b7y4HFcnh0n0gha5ebJN55KRM2mdoiPN6fh+kpwXh0Wy
RHj5Otp/s5Ps1p62y31+em9aTMYt/OfVfxTiPjZ52naI7fBrI5t66xz5+a1rW7yx0eSL6iZjtEOX
qNbSletom3lENjh2fbHzbbWt3iVozruc+5ztWubf4M4ybpQ2Oboyrva0Vjza8WdDR4OkXt3n9ldX
kaePP9VtYqctYhdvt5oivTeCZ2YOxXk6ubqMfV0b9mrljfqlFcq88k7z2U5axeItDa1OPessuC8P
ya7XRWYnwqdbT/ZMilvIu4dpslNdixXja8Y5tt85djZdbDWnGOesRtXFtuw6T27No5Kx2OrKYQlC
ExKJgBnEpiyvdlEgsizKLKollFgWxLKJVRLKJBbEp3VxLKJBnuMWQJEbpBIAAAJAAAABIAAAAAAA
lAJAAAAAAAAAAAAAASAAAAAAAAAAAAAJAAAABAJABAlAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAA
AAABAJQAAAAgAABAAI2EoBGyJhkgGPKxmqxAKpownHC+YRMdN5BrTj67R3bOn01o7p01Iv71u89o
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
2Q==`;
async function ma(e) {
  let t = (r, s = "application/octet-stream") =>
      fetch(`data:${s};base64,${r}`).then((A) => A.blob()),
    n,
    o;
  switch (e.config.warmup) {
    case "face":
      n = await t(qt);
      break;
    case "body":
    case "full":
      n = await t(Xt);
      break;
    default:
      n = null;
  }
  if (n) {
    let r = await createImageBitmap(n);
    (o = await e.detect(r, e.config)), r.close();
  }
  return o;
}
async function pa(e) {
  return new Promise((t) => {
    let n;
    switch (e.config.warmup) {
      case "face":
        n = "data:image/jpeg;base64," + qt;
        break;
      case "full":
      case "body":
        n = "data:image/jpeg;base64," + Xt;
        break;
      default:
        n = "";
    }
    let o;
    if (typeof Image != "undefined") o = new Image();
    else if (R.Image) o = new R.Image();
    else {
      t(void 0);
      return;
    }
    (o.onload = async () => {
      let r = Ae(o.naturalWidth, o.naturalHeight);
      if (!r) b("Warmup: Canvas not found"), t(void 0);
      else {
        let s = r.getContext("2d");
        s && s.drawImage(o, 0, 0);
        let A = await e.image(r, !0),
          a = A.tensor ? await e.detect(A.tensor, e.config) : void 0;
        t(a);
      }
    }),
      n ? (o.src = n) : t(void 0);
  });
}
async function ua(e) {
  let t = (r) => Buffer.from(r, "base64"),
    n;
  e.config.warmup === "face" ? (n = t(qt)) : (n = t(Xt));
  let o;
  if ("node" in a0 && a0.getBackend() === "tensorflow") {
    let r = a0.node.decodeJpeg(n),
      s = a0.expandDims(r, 0);
    e.tf.dispose(r), (o = await e.detect(s, e.config)), e.tf.dispose(s);
  } else e.config.debug && b("Warmup tfjs-node not loaded");
  return o;
}
async function ha(e) {
  let t;
  return (
    typeof createImageBitmap == "function"
      ? (t = await ma(e))
      : typeof Image != "undefined" || R.Canvas !== void 0
      ? (t = await pa(e))
      : (t = await ua(e)),
    t
  );
}
async function ba(e) {
  var a, l, c, d;
  if (!a0.env().flagRegistry.ENGINE_COMPILE_ONLY) return;
  let t = a0.getBackend(),
    n = a0.backend();
  if (
    (t !== "webgl" && t !== "humangl") ||
    !(n != null && n.checkCompileCompletion)
  )
    return;
  a0.env().set("ENGINE_COMPILE_ONLY", !0);
  let o = a0.engine().state.numTensors,
    r = [];
  for (let [i, y] of Object.entries(e.models.models)) {
    if (!y) continue;
    let x =
        y != null &&
        y.modelSignature &&
        (l = (a = y == null ? void 0 : y.inputs) == null ? void 0 : a[0]) !=
          null &&
        l.shape
          ? [...y.inputs[0].shape]
          : [1, 64, 64, 3],
      m =
        y != null &&
        y.modelSignature &&
        (d = (c = y == null ? void 0 : y.inputs) == null ? void 0 : c[0]) !=
          null &&
        d.dtype
          ? y.inputs[0].dtype
          : "float32";
    for (let h = 0; h < x.length; h++) x[h] === -1 && (x[h] = h === 0 ? 1 : 64);
    let f = a0.zeros(x, m);
    try {
      let h = y.execute(f);
      r.push(i),
        Array.isArray(h) ? h.forEach((T) => a0.dispose(T)) : a0.dispose(h);
    } catch (h) {
      e.config.debug && b("compile fail model:", i);
    }
    a0.dispose(f);
  }
  let s = await n.checkCompileCompletionAsync();
  n.getUniformLocations(),
    e.config.debug && b("compile pass:", { models: r, kernels: s.length }),
    a0.env().set("ENGINE_COMPILE_ONLY", !1);
  let A = a0.engine().state.numTensors;
  A - o > 0 && b("tensor leak:", A - o);
}
async function Bo(e, t) {
  await O2(e, !1);
  let n = v();
  return (
    (e.state = "warmup"),
    t && (e.config = i0(e.config, t)),
    !e.config.warmup ||
    e.config.warmup.length === 0 ||
    e.config.warmup === "none"
      ? ve()
      : new Promise(async (o) => {
          await e.models.load(), await a0.ready(), await ba(e);
          let r = await ha(e),
            s = v();
          e.config.debug &&
            b("warmup", e.config.warmup, Math.round(s - n), "ms"),
            e.emit("warmup"),
            o(r);
        })
  );
}
var P2,
  Z2,
  q2,
  Ut,
  Ye,
  E1 = class {
    constructor(t) {
      w(this, "version");
      w(this, "config");
      w(this, "result");
      w(this, "state");
      w(this, "process");
      w(this, "tf");
      w(this, "env", R);
      w(this, "draw", rt);
      w(this, "match", Wt);
      w(this, "models");
      w(this, "events");
      w(this, "faceTriangulation");
      w(this, "faceUVMap");
      w(this, "performance");
      ue(this, P2);
      ue(this, Z2);
      ue(this, q2);
      w(this, "analyze", (...t) => {
        if (!Y0(this, Z2)) return;
        let n = this.tf.engine().state.numTensors,
          o = Y0(this, P2);
        Me(this, P2, n);
        let r = n - o;
        r !== 0 && b(...t, r);
      });
      ue(this, Ut, (t) => {
        if (!Y0(this, q2)) return null;
        if (!t) return "input is not defined";
        if (this.env.node && !(t instanceof de.Tensor))
          return "input must be a tensor";
        try {
          this.tf.getBackend();
        } catch (n) {
          return "backend not loaded";
        }
        return null;
      });
      w(this, "webcam", new Q2());
      w(this, "emit", (t) => {
        var n;
        (n = this.events) != null &&
          n.dispatchEvent &&
          this.events.dispatchEvent(new Event(t));
      });
      ue(this, Ye, {});
      let n = (de.version.tfjs || de.version_core).replace(/-(.*)/, "");
      (Ke.wasmPath = `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${n}/dist/`),
        (Ke.modelBasePath = R.browser ? "../models/" : "file://models/"),
        (this.version = n5),
        Object.defineProperty(this, "version", { value: n5 }),
        (this.config = JSON.parse(JSON.stringify(Ke))),
        Object.seal(this.config),
        (this.config.cacheModels = typeof indexedDB != "undefined"),
        t && (this.config = i0(this.config, t)),
        U1(this.config),
        (this.tf = de),
        (this.state = "idle"),
        Me(this, P2, 0),
        Me(this, Z2, !1),
        Me(this, q2, !1),
        (this.performance = {}),
        (this.events =
          typeof EventTarget != "undefined" ? new EventTarget() : void 0),
        (this.models = new V2(this)),
        l5(),
        (this.result = ve()),
        (this.process = { tensor: null, canvas: null }),
        (this.faceTriangulation = H3),
        (this.faceUVMap = G3),
        Zt(this, null, ""),
        this.emit("create"),
        (this.config.debug || this.env.browser) &&
          b(`version: ${this.version}`),
        this.config.debug && b(`tfjs version: ${this.tf.version["tfjs-core"]}`);
      let o = JSON.parse(JSON.stringify(this.env));
      delete o.kernels,
        delete o.initial,
        delete o.perfadd,
        this.config.debug && b("environment:", o);
    }
    reset() {
      let t = this.config.backend;
      (this.config = JSON.parse(JSON.stringify(Ke))),
        (this.config.backend = t),
        e5(),
        (R.initial = !0);
    }
    validate(t) {
      let n = Qt(Ke, t || this.config);
      return n.length === 0 && (this.config = i0(this.config, t)), n;
    }
    now() {
      return v();
    }
    image(t, n = !1) {
      return K2(t, this.config, n);
    }
    async segmentation(t, n) {
      var s, A, a;
      if (
        (n && (this.config = i0(this.config, n)),
        !this.config.segmentation.enabled)
      )
        return null;
      let o = await K2(t, this.config);
      if (!o.tensor) return null;
      let r = null;
      return (
        (s = this.config.segmentation.modelPath) != null &&
          s.includes("rvm") &&
          (r = await Lo(o.tensor, this.config)),
        (A = this.config.segmentation.modelPath) != null &&
          A.includes("meet") &&
          (r = await yo(o.tensor, this.config)),
        (a = this.config.segmentation.modelPath) != null &&
          a.includes("selfie") &&
          (r = await Wo(o.tensor, this.config)),
        de.dispose(o.tensor),
        r
      );
    }
    compare(t, n) {
      return X1(this.config, t, n);
    }
    async init() {
      await O2(this, !0), await this.tf.ready(), e5();
    }
    async load(t) {
      this.state = "load";
      let n = v(),
        o = Object.values(this.models.models).filter((A) => A).length;
      t && (this.config = i0(this.config, t)),
        this.env.initial &&
          ((await O2(this, !1)) || b("error: backend check failed"),
          await de.ready(),
          this.env.browser &&
            (this.config.debug && b("configuration:", this.config),
            this.config.debug && b("tf flags:", this.tf.ENV.flags))),
        await this.models.load(this),
        this.env.initial &&
          this.config.debug &&
          b(
            "tf engine state:",
            this.tf.engine().state.numBytes,
            "bytes",
            this.tf.engine().state.numTensors,
            "tensors"
          ),
        (this.env.initial = !1),
        Object.values(this.models.models).filter((A) => A).length !== o &&
          (this.models.validate(), this.emit("load"));
      let s = Math.trunc(v() - n);
      s > (this.performance.loadModels || 0) &&
        (this.performance.loadModels = this.env.perfadd
          ? (this.performance.loadModels || 0) + s
          : s);
    }
    next(t = this.result) {
      return xo(t, this.config);
    }
    async warmup(t) {
      let n = v(),
        o = await Bo(this, t),
        r = v();
      return (this.performance.warmup = Math.trunc(r - n)), o;
    }
    async profile(t, n) {
      let o = await this.tf.profile(() => this.detect(t, n)),
        r = {},
        s = 0;
      for (let a of o.kernels) {
        let l = Number(a.kernelTimeMs) || 0;
        r[a.name] ? (r[a.name] += l) : (r[a.name] = l), (s += l);
      }
      let A = [];
      Object.entries(r).forEach((a) =>
        A.push({ kernel: a[0], time: a[1], perc: 0 })
      );
      for (let a of A)
        (a.perc = Math.round((1e3 * a.time) / s) / 1e3),
          (a.time = Math.round(1e3 * a.time) / 1e3);
      return A.sort((a, l) => l.time - a.time), (A.length = 20), A;
    }
    async detect(t, n) {
      return (
        (this.state = "detect"),
        new Promise(async (o) => {
          var h,
            T,
            g,
            p,
            u,
            k,
            P,
            N,
            B,
            J,
            G,
            K,
            e0,
            n0,
            o0,
            N0,
            M,
            T0,
            C0,
            x0,
            Q;
          this.state = "config";
          let r;
          (this.config = i0(this.config, n)), (this.state = "check");
          let s = Y0(this, Ut).call(this, t);
          s && (b(s, t), this.emit("error"), o(ve(s)));
          let A = v();
          await this.load(), (r = v()), (this.state = "image");
          let a = await K2(t, this.config);
          if (
            ((this.process = a),
            (this.performance.inputProcess = this.env.perfadd
              ? (this.performance.inputProcess || 0) + Math.trunc(v() - r)
              : Math.trunc(v() - r)),
            this.analyze("Get Image:"),
            !a.tensor)
          ) {
            this.config.debug && b("could not convert input to tensor"),
              this.emit("error"),
              o(ve("could not convert input to tensor"));
            return;
          }
          this.emit("image"),
            (r = v()),
            (this.config.skipAllowed = await q1(this.config, a.tensor)),
            (this.config.filter.autoBrightness =
              (this.config.filter.autoBrightness || !1) &&
              this.config.skipAllowed),
            this.performance.totalFrames || (this.performance.totalFrames = 0),
            this.performance.cachedFrames ||
              (this.performance.cachedFrames = 0),
            this.performance.totalFrames++,
            this.config.skipAllowed && this.performance.cachedFrames++,
            (this.performance.cacheCheck = this.env.perfadd
              ? (this.performance.cacheCheck || 0) + Math.trunc(v() - r)
              : Math.trunc(v() - r)),
            this.analyze("Check Changed:");
          let l = [],
            c = [],
            d = [],
            i = [];
          (this.state = "detect:face"),
            this.config.async
              ? ((l = this.config.face.enabled ? Q5(this, a.tensor) : []),
                this.performance.face && delete this.performance.face)
              : ((r = v()),
                (l = this.config.face.enabled ? await Q5(this, a.tensor) : []),
                (this.performance.face = this.env.perfadd
                  ? (this.performance.face || 0) + Math.trunc(v() - r)
                  : Math.trunc(v() - r))),
            this.config.async &&
              (this.config.body.maxDetected === -1 ||
                this.config.hand.maxDetected === -1) &&
              (l = await l),
            this.analyze("Start Body:"),
            (this.state = "detect:body");
          let y =
            this.config.body.maxDetected === -1
              ? i0(this.config, {
                  body: {
                    maxDetected: this.config.face.enabled ? 1 * l.length : 1,
                  },
                })
              : this.config;
          this.config.async
            ? ((h = this.config.body.modelPath) != null && h.includes("posenet")
                ? (c = this.config.body.enabled ? v1(a.tensor, y) : [])
                : (T = this.config.body.modelPath) != null &&
                  T.includes("blazepose")
                ? (c = this.config.body.enabled ? f5(a.tensor, y) : [])
                : (g = this.config.body.modelPath) != null &&
                  g.includes("efficientpose")
                ? (c = this.config.body.enabled ? T5(a.tensor, y) : [])
                : (p = this.config.body.modelPath) != null &&
                  p.includes("movenet") &&
                  (c = this.config.body.enabled ? m1(a.tensor, y) : []),
              this.performance.body && delete this.performance.body)
            : ((r = v()),
              (u = this.config.body.modelPath) != null && u.includes("posenet")
                ? (c = this.config.body.enabled ? await v1(a.tensor, y) : [])
                : (k = this.config.body.modelPath) != null &&
                  k.includes("blazepose")
                ? (c = this.config.body.enabled ? await f5(a.tensor, y) : [])
                : (P = this.config.body.modelPath) != null &&
                  P.includes("efficientpose")
                ? (c = this.config.body.enabled ? await T5(a.tensor, y) : [])
                : (N = this.config.body.modelPath) != null &&
                  N.includes("movenet") &&
                  (c = this.config.body.enabled ? await m1(a.tensor, y) : []),
              (this.performance.body = this.env.perfadd
                ? (this.performance.body || 0) + Math.trunc(v() - r)
                : Math.trunc(v() - r))),
            this.analyze("End Body:"),
            this.analyze("Start Hand:"),
            (this.state = "detect:hand");
          let x =
            this.config.hand.maxDetected === -1
              ? i0(this.config, {
                  hand: {
                    maxDetected: this.config.face.enabled ? 2 * l.length : 1,
                  },
                })
              : this.config;
          this.config.async
            ? ((J =
                (B = this.config.hand.detector) == null
                  ? void 0
                  : B.modelPath) != null && J.includes("handdetect")
                ? (d = this.config.hand.enabled ? o1(a.tensor, x) : [])
                : (K =
                    (G = this.config.hand.detector) == null
                      ? void 0
                      : G.modelPath) != null &&
                  K.includes("handtrack") &&
                  (d = this.config.hand.enabled ? A1(a.tensor, x) : []),
              this.performance.hand && delete this.performance.hand)
            : ((r = v()),
              (n0 =
                (e0 = this.config.hand.detector) == null
                  ? void 0
                  : e0.modelPath) != null && n0.includes("handdetect")
                ? (d = this.config.hand.enabled ? await o1(a.tensor, x) : [])
                : (N0 =
                    (o0 = this.config.hand.detector) == null
                      ? void 0
                      : o0.modelPath) != null &&
                  N0.includes("handtrack") &&
                  (d = this.config.hand.enabled ? await A1(a.tensor, x) : []),
              (this.performance.hand = this.env.perfadd
                ? (this.performance.hand || 0) + Math.trunc(v() - r)
                : Math.trunc(v() - r))),
            this.analyze("End Hand:"),
            this.analyze("Start Object:"),
            (this.state = "detect:object"),
            this.config.async
              ? ((M = this.config.object.modelPath) != null &&
                M.includes("nanodet")
                  ? (i = this.config.object.enabled
                      ? u1(a.tensor, this.config)
                      : [])
                  : (T0 = this.config.object.modelPath) != null &&
                    T0.includes("centernet") &&
                    (i = this.config.object.enabled
                      ? u5(a.tensor, this.config)
                      : []),
                this.performance.object && delete this.performance.object)
              : ((r = v()),
                (C0 = this.config.object.modelPath) != null &&
                C0.includes("nanodet")
                  ? (i = this.config.object.enabled
                      ? await u1(a.tensor, this.config)
                      : [])
                  : (x0 = this.config.object.modelPath) != null &&
                    x0.includes("centernet") &&
                    (i = this.config.object.enabled
                      ? await u5(a.tensor, this.config)
                      : []),
                (this.performance.object = this.env.perfadd
                  ? (this.performance.object || 0) + Math.trunc(v() - r)
                  : Math.trunc(v() - r))),
            this.analyze("End Object:"),
            (this.state = "detect:await"),
            this.config.async &&
              ([l, c, d, i] = await Promise.all([l, c, d, i])),
            (this.state = "detect:gesture");
          let m = [];
          this.config.gesture.enabled &&
            ((r = v()),
            (m = [...Bn(l), ...Fn(c), ...Gn(d), ...Hn(l)]),
            this.config.async
              ? this.performance.gesture && delete this.performance.gesture
              : (this.performance.gesture = this.env.perfadd
                  ? (this.performance.gesture || 0) + Math.trunc(v() - r)
                  : Math.trunc(v() - r))),
            (this.performance.total = this.env.perfadd
              ? (this.performance.total || 0) + Math.trunc(v() - A)
              : Math.trunc(v() - A));
          let f = ((Q = this.process.tensor) == null ? void 0 : Q.shape) || [
            0, 0, 0, 0,
          ];
          (this.result = {
            face: l,
            body: c,
            hand: d,
            gesture: m,
            object: i,
            performance: this.performance,
            canvas: this.process.canvas,
            timestamp: Date.now(),
            error: null,
            width: f[2],
            height: f[1],
            get persons() {
              return Fo(l, c, d, m, f);
            },
          }),
            de.dispose(a.tensor),
            this.emit("detect"),
            (this.state = "idle"),
            o(this.result);
        })
      );
    }
    async sleep(t) {
      return new Promise((n) => {
        setTimeout(n, t);
      });
    }
    async video(t, n = !0, o = 0) {
      n
        ? (Y0(this, Ye)[t.id] ||
            (this.config.debug && b("video start", t.id),
            (Y0(this, Ye)[t.id] = !0)),
          !t.paused &&
            Y0(this, Ye)[t.id] &&
            t.readyState >= 2 &&
            (await this.detect(t)),
          o > 0 && (await this.sleep(o)),
          Y0(this, Ye)[t.id] &&
            requestAnimationFrame(() => this.video(t, n, o)))
        : (this.config.debug && b("video stop", t.id),
          (Y0(this, Ye)[t.id] = !1));
    }
  };
(P2 = new WeakMap()),
  (Z2 = new WeakMap()),
  (q2 = new WeakMap()),
  (Ut = new WeakMap()),
  (Ye = new WeakMap());
0 &&
  (module.exports = { Env, Human, defaults, draw, empty, env, match, models });
