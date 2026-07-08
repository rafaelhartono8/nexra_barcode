(() => {
  // node_modules/zxing-wasm/dist/es/share.js
  var e = [
    [
      "All",
      "*",
      "*",
      "     ",
      0,
      "All"
    ],
    [
      "AllReadable",
      "*",
      "r",
      "     ",
      0,
      "All Readable"
    ],
    [
      "AllCreatable",
      "*",
      "w",
      "     ",
      0,
      "All Creatable"
    ],
    [
      "AllLinear",
      "*",
      "l",
      "     ",
      0,
      "All Linear"
    ],
    [
      "AllMatrix",
      "*",
      "m",
      "     ",
      0,
      "All Matrix"
    ],
    [
      "AllGS1",
      "*",
      "G",
      "     ",
      0,
      "All GS1"
    ],
    [
      "AllRetail",
      "*",
      "R",
      "     ",
      0,
      "All Retail"
    ],
    [
      "AllIndustrial",
      "*",
      "I",
      "     ",
      0,
      "All Industrial"
    ],
    [
      "Codabar",
      "F",
      " ",
      "lrw  ",
      18,
      "Codabar"
    ],
    [
      "Code39",
      "A",
      " ",
      "lrw I",
      8,
      "Code 39"
    ],
    [
      "Code39Std",
      "A",
      "s",
      "lrw I",
      8,
      "Code 39 Standard"
    ],
    [
      "Code39Ext",
      "A",
      "e",
      "lr  I",
      9,
      "Code 39 Extended"
    ],
    [
      "Code32",
      "A",
      "2",
      "lr  I",
      129,
      "Code 32"
    ],
    [
      "PZN",
      "A",
      "p",
      "lr  I",
      52,
      "Pharmazentralnummer"
    ],
    [
      "Code93",
      "G",
      " ",
      "lrw I",
      25,
      "Code 93"
    ],
    [
      "Code128",
      "C",
      " ",
      "lrwGI",
      20,
      "Code 128"
    ],
    [
      "ITF",
      "I",
      " ",
      "lrw I",
      3,
      "ITF"
    ],
    [
      "ITF14",
      "I",
      "4",
      "lr  I",
      89,
      "ITF-14"
    ],
    [
      "DataBar",
      "e",
      " ",
      "lr GR",
      29,
      "DataBar"
    ],
    [
      "DataBarOmni",
      "e",
      "o",
      "lr GR",
      29,
      "DataBar Omni"
    ],
    [
      "DataBarStk",
      "e",
      "s",
      "lr GR",
      79,
      "DataBar Stacked"
    ],
    [
      "DataBarStkOmni",
      "e",
      "O",
      "lr GR",
      80,
      "DataBar Stacked Omni"
    ],
    [
      "DataBarLtd",
      "e",
      "l",
      "lr GR",
      30,
      "DataBar Limited"
    ],
    [
      "DataBarExp",
      "e",
      "e",
      "lr GR",
      31,
      "DataBar Expanded"
    ],
    [
      "DataBarExpStk",
      "e",
      "E",
      "lr GR",
      81,
      "DataBar Expanded Stacked"
    ],
    [
      "EANUPC",
      "E",
      " ",
      "lr  R",
      15,
      "EAN/UPC"
    ],
    [
      "EAN13",
      "E",
      "1",
      "lrw R",
      15,
      "EAN-13"
    ],
    [
      "EAN8",
      "E",
      "8",
      "lrw R",
      10,
      "EAN-8"
    ],
    [
      "EAN5",
      "E",
      "5",
      "l   R",
      12,
      "EAN-5"
    ],
    [
      "EAN2",
      "E",
      "2",
      "l   R",
      11,
      "EAN-2"
    ],
    [
      "ISBN",
      "E",
      "i",
      "lr  R",
      69,
      "ISBN"
    ],
    [
      "UPCA",
      "E",
      "a",
      "lrw R",
      34,
      "UPC-A"
    ],
    [
      "UPCE",
      "E",
      "e",
      "lrw R",
      37,
      "UPC-E"
    ],
    [
      "Telepen",
      "B",
      " ",
      "lr  I",
      32,
      "Telepen"
    ],
    [
      "TelepenAlpha",
      "B",
      "0",
      "lr  I",
      32,
      "Telepen Alpha"
    ],
    [
      "TelepenNumeric",
      "B",
      "1",
      "lr  I",
      87,
      "Telepen Numeric"
    ],
    [
      "OtherBarcode",
      "X",
      " ",
      " r   ",
      0,
      "Other barcode"
    ],
    [
      "DXFilmEdge",
      "X",
      "x",
      "lr   ",
      147,
      "DX Film Edge"
    ],
    [
      "PDF417",
      "L",
      " ",
      "mrw  ",
      55,
      "PDF417"
    ],
    [
      "CompactPDF417",
      "L",
      "c",
      "mr   ",
      56,
      "Compact PDF417"
    ],
    [
      "MicroPDF417",
      "L",
      "m",
      "mr   ",
      84,
      "MicroPDF417"
    ],
    [
      "Aztec",
      "z",
      " ",
      "mr G ",
      92,
      "Aztec"
    ],
    [
      "AztecCode",
      "z",
      "c",
      "mrwG ",
      92,
      "Aztec Code"
    ],
    [
      "AztecRune",
      "z",
      "r",
      "mr   ",
      128,
      "Aztec Rune"
    ],
    [
      "QRCode",
      "Q",
      " ",
      "mrwG ",
      58,
      "QR Code"
    ],
    [
      "QRCodeModel1",
      "Q",
      "1",
      "mr   ",
      0,
      "QR Code Model 1"
    ],
    [
      "QRCodeModel2",
      "Q",
      "2",
      "mr   ",
      58,
      "QR Code Model 2"
    ],
    [
      "MicroQRCode",
      "Q",
      "m",
      "mr   ",
      97,
      "Micro QR Code"
    ],
    [
      "RMQRCode",
      "Q",
      "r",
      "mr G ",
      145,
      "rMQR Code"
    ],
    [
      "DataMatrix",
      "d",
      " ",
      "mrwG ",
      71,
      "Data Matrix"
    ],
    [
      "MaxiCode",
      "U",
      " ",
      "mr   ",
      57,
      "MaxiCode"
    ]
  ];
  var t = {
    DataBarExpanded: "DataBarExp",
    DataBarLimited: "DataBarLtd",
    "Linear-Codes": "AllLinear",
    "Matrix-Codes": "AllMatrix",
    Any: "All",
    rMQRCode: "RMQRCode"
  };
  var n = e.map((e2) => e2[5]);
  var r = e.filter((e2) => e2[1] === "*").map((e2) => e2[0]);
  var i = e.filter((e2) => e2[1] !== "*").map((e2) => e2[0]);
  var o = e.filter((e2) => e2[2] === " ").map((e2) => e2[0]);
  var s = e.filter((e2) => e2[3][0] === "l").map((e2) => e2[0]);
  var l = e.filter((e2) => e2[3][0] === "m").map((e2) => e2[0]);
  var d = e.filter((e2) => e2[3][1] === "r").map((e2) => e2[0]);
  var f = e.filter((e2) => e2[3][2] === "w" || e2[4] !== 0).map((e2) => e2[0]);
  var p = e.filter((e2) => e2[3][3] === "G").map((e2) => e2[0]);
  var m = e.filter((e2) => e2[3][4] === "R").map((e2) => e2[0]);
  var h = e.filter((e2) => e2[3][4] === "I").map((e2) => e2[0]);
  function y(e2) {
    var n2;
    return (n2 = t[e2]) == null ? e2 : n2;
  }
  var I = {
    formats: [],
    tryHarder: true,
    tryRotate: true,
    tryInvert: true,
    tryDownscale: true,
    tryDenoise: false,
    binarizer: "LocalAverage",
    isPure: false,
    downscaleFactor: 3,
    downscaleThreshold: 500,
    minLineCount: 2,
    maxNumberOfSymbols: 255,
    validateOptionalChecksum: false,
    returnErrors: false,
    eanAddOnSymbol: "Ignore",
    textMode: "HRI",
    characterSet: "Unknown",
    tryCode39ExtendedMode: true
  };
  function z(e2) {
    var t2;
    return {
      ...e2,
      image: (t2 = e2.image && new Blob([e2.image], { type: "image/png" })) == null ? null : t2
    };
  }
  var B = {
    format: "QRCode",
    readerInit: false,
    forceSquareDataMatrix: false,
    ecLevel: "",
    scale: 1,
    sizeHint: 0,
    rotate: 0,
    invert: false,
    withHRT: false,
    withQuietZones: true,
    addHRT: false,
    addQuietZones: true,
    options: ""
  };
  function V(e2 = B) {
    var t2, n2;
    let { format: r2 = B.format, sizeHint: i2 = B.sizeHint, readerInit: a2 = B.readerInit, forceSquareDataMatrix: o2 = B.forceSquareDataMatrix, ecLevel: s2 = B.ecLevel, withHRT: c2, withQuietZones: l2, addHRT: u2, addQuietZones: d2, options: f2 = B.options, scale: p2, rotate: m2 = B.rotate, invert: h2 = B.invert } = e2, g2 = f2.split(",").map((e3) => e3.trim()).filter(Boolean), _2 = (e3) => {
      let t3 = e3.split("=")[0];
      g2.some((e4) => e4.split("=")[0] === t3) || g2.push(e3);
    };
    a2 && _2("readerInit"), o2 && _2("forceSquare"), s2 && _2(`ecLevel=${s2}`);
    let v2 = p2 == null ? i2 > 0 ? -Math.trunc(Math.abs(i2)) : B.scale : p2;
    return {
      format: y(r2),
      options: g2.join(","),
      scale: v2,
      rotate: m2,
      invert: h2,
      addHRT: (t2 = u2 == null ? c2 : u2) == null ? B.addHRT : t2,
      addQuietZones: (n2 = d2 == null ? l2 : d2) == null ? B.addQuietZones : n2
    };
  }
  var W = { locateFile: (e2, t2) => {
    let n2 = e2.match(/_(.+?)\.wasm$/);
    return n2 ? `https://fastly.jsdelivr.net/npm/zxing-wasm@3.1.0/dist/${n2[1]}/${e2}` : t2 + e2;
  } };
  var G = /* @__PURE__ */ new WeakMap();
  function K(e2, t2) {
    return Object.is(e2, t2) || Object.keys(e2).length === Object.keys(t2).length && Object.keys(e2).every((n2) => Object.hasOwn(t2, n2) && e2[n2] === t2[n2]);
  }
  function q(e2, { overrides: t2, equalityFn: n2 = K, fireImmediately: r2 = false } = {}) {
    var i2, a2;
    let [o2, s2] = (i2 = G.get(e2)) == null ? [W] : i2, c2 = t2 == null ? o2 : t2, l2;
    if (r2) {
      if (s2 && (l2 = n2(o2, c2))) return s2;
      let t3 = e2({ ...c2 });
      return G.set(e2, [c2, t3]), t3;
    }
    ((a2 = l2) == null ? n2(o2, c2) : a2) || G.set(e2, [c2]);
  }
  async function Z(e2, t2, n2 = B) {
    let r2 = V(n2), i2 = await q(e2, { fireImmediately: true });
    if (typeof t2 == "string") return z(i2.writeBarcodeFromText(t2, r2));
    let { byteLength: a2 } = t2, o2 = i2._malloc(a2);
    if (!o2) throw Error(`Failed to allocate ${a2} bytes in WASM memory`);
    try {
      return i2.HEAPU8.set(t2, o2), z(i2.writeBarcodeFromBytes(o2, a2, r2));
    } finally {
      i2._free(o2);
    }
  }
  var Q = {
    ...I,
    formats: [...I.formats]
  };
  var $2 = { ...B };

  // node_modules/zxing-wasm/dist/es/writer/index.js
  async function b2(e2 = {}) {
    var t2, n2, r2, i2 = e2, a2 = !!globalThis.window, o2 = typeof Bun < "u", s2 = !!globalThis.WorkerGlobalScope;
    !((n2 = globalThis.process) == null || (n2 = n2.versions) == null) && n2.node && ((r2 = globalThis.process) == null || r2.type);
    var c2 = "./this.program", l2, u2 = "";
    function d2(e3) {
      return i2.locateFile ? i2.locateFile(e3, u2) : u2 + e3;
    }
    var f2, p2;
    if (a2 || s2 || o2) {
      try {
        u2 = new URL(".", l2).href;
      } catch {
      }
      s2 && (p2 = (e3) => {
        var t3 = new XMLHttpRequest();
        return t3.open("GET", e3, false), t3.responseType = "arraybuffer", t3.send(null), new Uint8Array(t3.response);
      }), f2 = async (e3) => {
        var t3 = await fetch(e3, { credentials: "same-origin" });
        if (t3.ok) return t3.arrayBuffer();
        throw Error(t3.status + " : " + t3.url);
      };
    }
    var m2 = console.log.bind(console), h2 = console.error.bind(console), g2, _2 = false, ee, te, ne = false;
    function re() {
      var e3 = Q2.buffer;
      w2 = new Int8Array(e3), S = new Int16Array(e3), i2.HEAPU8 = D = new Uint8Array(e3), T2 = new Uint16Array(e3), C = new Int32Array(e3), E = new Uint32Array(e3), fe = new Float32Array(e3), pe = new Float64Array(e3);
    }
    function ie() {
      if (i2.preRun) for (typeof i2.preRun == "function" && (i2.preRun = [i2.preRun]); i2.preRun.length; ) ve(i2.preRun.shift());
      me(_e);
    }
    function ae() {
      ne = true, $3.oa();
    }
    function oe() {
      if (i2.postRun) for (typeof i2.postRun == "function" && (i2.postRun = [i2.postRun]); i2.postRun.length; ) ge(i2.postRun.shift());
      me(he);
    }
    function v2(e3) {
      var t3, n3;
      (t3 = i2.onAbort) == null || t3.call(i2, e3), e3 = "Aborted(" + e3 + ")", h2(e3), _2 = true, e3 += ". Build with -sASSERTIONS for more info.";
      var r3 = new WebAssembly.RuntimeError(e3);
      throw (n3 = te) == null || n3(r3), r3;
    }
    var y2;
    function b3() {
      return d2("zxing_writer.wasm");
    }
    function x(e3) {
      if (e3 == y2 && g2) return new Uint8Array(g2);
      if (p2) return p2(e3);
      throw "both async and sync fetching of the wasm failed";
    }
    async function se(e3) {
      if (!g2) try {
        var t3 = await f2(e3);
        return new Uint8Array(t3);
      } catch {
      }
      return x(e3);
    }
    async function ce(e3, t3) {
      try {
        var n3 = await se(e3);
        return await WebAssembly.instantiate(n3, t3);
      } catch (e4) {
        h2(`failed to asynchronously prepare wasm: ${e4}`), v2(e4);
      }
    }
    async function le(e3, t3, n3) {
      if (!e3 && WebAssembly.instantiateStreaming) try {
        var r3 = fetch(t3, { credentials: "same-origin" });
        return await WebAssembly.instantiateStreaming(r3, n3);
      } catch (e4) {
        h2(`wasm streaming compile failed: ${e4}`), h2("falling back to ArrayBuffer instantiation");
      }
      return ce(t3, n3);
    }
    function ue2() {
      return { a: Sn };
    }
    async function de() {
      function e3(e4, t4) {
        return $3 = e4.exports, xn($3), re(), $3;
      }
      function t3(t4) {
        return e3(t4.instance);
      }
      var n3 = ue2();
      return i2.instantiateWasm ? new Promise((t4, r3) => {
        i2.instantiateWasm(n3, (n4, r4) => {
          t4(e3(n4, r4));
        });
      }) : (y2 != null || (y2 = b3()), t3(await le(g2, y2, n3)));
    }
    var S, C, w2, fe, pe, T2, E, D, me = (e3) => {
      for (; e3.length > 0; ) e3.shift()(i2);
    }, he = [], ge = (e3) => he.push(e3), _e = [], ve = (e3) => _e.push(e3), O = (e3) => pn(e3), k = () => mn(), A = [], j = 0, ye = (e3) => {
      var t3 = new xe(e3);
      return t3.get_caught() || (t3.set_caught(true), j--), t3.set_rethrown(false), A.push(t3), vn(e3);
    }, M = 0, be = () => {
      Z2(0, 0);
      var e3 = A.pop();
      hn(e3.excPtr), M = 0;
    };
    class xe {
      constructor(e3) {
        this.excPtr = e3, this.ptr = e3 - 24;
      }
      set_type(e3) {
        E[this.ptr + 4 >> 2] = e3;
      }
      get_type() {
        return E[this.ptr + 4 >> 2];
      }
      set_destructor(e3) {
        E[this.ptr + 8 >> 2] = e3;
      }
      get_destructor() {
        return E[this.ptr + 8 >> 2];
      }
      set_caught(e3) {
        e3 = +!!e3, w2[this.ptr + 12] = e3;
      }
      get_caught() {
        return w2[this.ptr + 12] != 0;
      }
      set_rethrown(e3) {
        e3 = +!!e3, w2[this.ptr + 13] = e3;
      }
      get_rethrown() {
        return w2[this.ptr + 13] != 0;
      }
      init(e3, t3) {
        this.set_adjusted_ptr(0), this.set_type(e3), this.set_destructor(t3);
      }
      set_adjusted_ptr(e3) {
        E[this.ptr + 16 >> 2] = e3;
      }
      get_adjusted_ptr() {
        return E[this.ptr + 16 >> 2];
      }
    }
    var N = (e3) => fn(e3), P = (e3) => {
      var t3 = M;
      if (!t3) return N(0), 0;
      var n3 = new xe(t3);
      n3.set_adjusted_ptr(t3);
      var r3 = n3.get_type();
      if (!r3) return N(0), t3;
      for (var i3 of e3) {
        if (i3 === 0 || i3 === r3) break;
        var a3 = n3.ptr + 16;
        if (_n(i3, r3, a3)) return N(i3), t3;
      }
      return N(r3), t3;
    }, Se = () => P([]), Ce = (e3) => P([e3]), we = (e3, t3) => P([e3, t3]), Te = () => {
      var e3 = A.pop();
      e3 || v2("no exception to throw");
      var t3 = e3.excPtr;
      throw e3.get_rethrown() || (A.push(e3), e3.set_rethrown(true), e3.set_caught(false), j++), gn(t3), M = t3, M;
    }, Ee = (e3, t3, n3) => {
      throw new xe(e3).init(t3, n3), gn(e3), M = e3, j++, M;
    }, De = () => j, Oe = (e3) => {
      throw M || (M = e3), M;
    }, ke = globalThis.TextDecoder && new TextDecoder(), Ae = (e3, t3, n3, r3) => {
      var i3 = t3 + n3;
      if (r3) return i3;
      for (; e3[t3] && !(t3 >= i3); ) ++t3;
      return t3;
    }, je = function(e3) {
      let t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n3 = arguments.length > 2 ? arguments[2] : void 0, r3 = arguments.length > 3 ? arguments[3] : void 0;
      var i3 = Ae(e3, t3, n3, r3);
      if (i3 - t3 > 16 && e3.buffer && ke) return ke.decode(e3.subarray(t3, i3));
      for (var a3 = ""; t3 < i3; ) {
        var o3 = e3[t3++];
        if (!(o3 & 128)) {
          a3 += String.fromCharCode(o3);
          continue;
        }
        var s3 = e3[t3++] & 63;
        if ((o3 & 224) == 192) {
          a3 += String.fromCharCode((o3 & 31) << 6 | s3);
          continue;
        }
        var c3 = e3[t3++] & 63;
        if (o3 = (o3 & 240) == 224 ? (o3 & 15) << 12 | s3 << 6 | c3 : (o3 & 7) << 18 | s3 << 12 | c3 << 6 | e3[t3++] & 63, o3 < 65536) a3 += String.fromCharCode(o3);
        else {
          var l3 = o3 - 65536;
          a3 += String.fromCharCode(55296 | l3 >> 10, 56320 | l3 & 1023);
        }
      }
      return a3;
    }, Me = (e3, t3, n3) => e3 ? je(D, e3, t3, n3) : "", Ne = {
      varargs: void 0,
      getStr(e3) {
        return Me(e3);
      }
    };
    function Pe(e3, t3, n3) {
      return Ne.varargs = n3, 0;
    }
    function Fe(e3, t3, n3) {
      return Ne.varargs = n3, 0;
    }
    var Ie = (e3, t3, n3) => {
    };
    function Le(e3, t3, n3, r3) {
      Ne.varargs = r3;
    }
    var Re = (e3, t3) => {
    }, ze = () => v2(""), F = {}, Be = (e3) => {
      for (; e3.length; ) {
        var t3 = e3.pop();
        e3.pop()(t3);
      }
    };
    function I2(e3) {
      return this.fromWireType(E[e3 >> 2]);
    }
    var L = {}, R = {}, z2 = {}, Ve = class extends Error {
      constructor(e3) {
        super(e3), this.name = "InternalError";
      }
    }, He = (e3) => {
      throw new Ve(e3);
    }, Ue = (e3, t3, n3) => {
      e3.forEach((e4) => z2[e4] = t3);
      function r3(t4) {
        var r4 = n3(t4);
        r4.length !== e3.length && He("Mismatched type converter count");
        for (var i4 = 0; i4 < e3.length; ++i4) H2(e3[i4], r4[i4]);
      }
      var i3 = Array(t3.length), a3 = [], o3 = 0;
      {
        let e4 = t3;
        for (let t4 = 0; t4 < e4.length; ++t4) {
          let n4 = e4[t4];
          R.hasOwnProperty(n4) ? i3[t4] = R[n4] : (a3.push(n4), L.hasOwnProperty(n4) || (L[n4] = []), L[n4].push(() => {
            i3[t4] = R[n4], ++o3, o3 === a3.length && r3(i3);
          }));
        }
      }
      a3.length === 0 && r3(i3);
    }, We = (e3) => {
      var t3 = F[e3];
      delete F[e3];
      var n3 = t3.rawConstructor, r3 = t3.rawDestructor, i3 = t3.fields, a3 = i3.map((e4) => e4.getterReturnType).concat(i3.map((e4) => e4.setterArgumentType));
      Ue([e3], a3, (e4) => {
        var a4 = {};
        {
          let t4 = i3;
          for (let n4 = 0; n4 < t4.length; ++n4) {
            let r4 = t4[n4], o3 = e4[n4], s3 = r4.getter, c3 = r4.getterContext, l3 = e4[n4 + i3.length], u3 = r4.setter, d3 = r4.setterContext;
            a4[r4.fieldName] = {
              read: (e5) => o3.fromWireType(s3(c3, e5)),
              write: (e5, t5) => {
                var n5 = [];
                u3(d3, e5, l3.toWireType(n5, t5)), Be(n5);
              },
              optional: o3.optional
            };
          }
        }
        return [{
          name: t3.name,
          fromWireType: (e5) => {
            var t4 = {};
            for (var n4 in a4) t4[n4] = a4[n4].read(e5);
            return r3(e5), t4;
          },
          toWireType: (e5, t4) => {
            for (var i4 in a4) if (!(i4 in t4) && !a4[i4].optional) throw TypeError(`Missing field: "${i4}"`);
            var o3 = n3();
            for (i4 in a4) a4[i4].write(o3, t4[i4]);
            return e5 !== null && e5.push(r3, o3), o3;
          },
          readValueFromPointer: I2,
          destructorFunction: r3
        }];
      });
    }, Ge = (e3, t3, n3, r3, i3) => {
    }, B2 = (e3) => {
      for (var t3 = ""; ; ) {
        var n3 = D[e3++];
        if (!n3) return t3;
        t3 += String.fromCharCode(n3);
      }
    }, Ke = class extends Error {
      constructor(e3) {
        super(e3), this.name = "BindingError";
      }
    }, V2 = (e3) => {
      throw new Ke(e3);
    };
    function qe(e3, t3) {
      let n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var r3 = t3.name;
      if (e3 || V2(`type "${r3}" must have a positive integer typeid pointer`), R.hasOwnProperty(e3)) {
        if (n3.ignoreDuplicateRegistrations) return;
        V2(`Cannot register type '${r3}' twice`);
      }
      if (R[e3] = t3, delete z2[e3], L.hasOwnProperty(e3)) {
        var i3 = L[e3];
        delete L[e3], i3.forEach((e4) => e4());
      }
    }
    function H2(e3, t3) {
      return qe(e3, t3, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
    }
    var Je = (e3, t3, n3, r3) => {
      t3 = B2(t3), H2(e3, {
        name: t3,
        fromWireType: function(e4) {
          return !!e4;
        },
        toWireType: function(e4, t4) {
          return t4 ? n3 : r3;
        },
        readValueFromPointer: function(e4) {
          return this.fromWireType(D[e4]);
        },
        destructorFunction: null
      });
    }, Ye = [], U2 = [
      0,
      1,
      ,
      1,
      null,
      1,
      true,
      1,
      false,
      1
    ], Xe = (e3) => {
      e3 > 9 && --U2[e3 + 1] === 0 && (U2[e3] = void 0, Ye.push(e3));
    }, W2 = {
      toValue: (e3) => (e3 || V2(`Cannot use deleted val. handle = ${e3}`), U2[e3]),
      toHandle: (e3) => {
        switch (e3) {
          case void 0:
            return 2;
          case null:
            return 4;
          case true:
            return 6;
          case false:
            return 8;
          default: {
            let t3 = Ye.pop() || U2.length;
            return U2[t3] = e3, U2[t3 + 1] = 1, t3;
          }
        }
      }
    }, Ze = {
      name: "emscripten::val",
      fromWireType: (e3) => {
        var t3 = W2.toValue(e3);
        return Xe(e3), t3;
      },
      toWireType: (e3, t3) => W2.toHandle(t3),
      readValueFromPointer: I2,
      destructorFunction: null
    }, Qe = (e3) => H2(e3, Ze), $e = (e3, t3) => {
      switch (t3) {
        case 4:
          return function(e4) {
            return this.fromWireType(fe[e4 >> 2]);
          };
        case 8:
          return function(e4) {
            return this.fromWireType(pe[e4 >> 3]);
          };
        default:
          throw TypeError(`invalid float width (${t3}): ${e3}`);
      }
    }, et = (e3, t3, n3) => {
      t3 = B2(t3), H2(e3, {
        name: t3,
        fromWireType: (e4) => e4,
        toWireType: (e4, t4) => t4,
        readValueFromPointer: $e(t3, n3),
        destructorFunction: null
      });
    }, tt = (e3, t3) => Object.defineProperty(t3, "name", { value: e3 });
    function nt(e3) {
      for (var t3 = 1; t3 < e3.length; ++t3) if (e3[t3] !== null && e3[t3].destructorFunction === void 0) return true;
      return false;
    }
    function rt(e3, t3, n3, r3, i3, a3) {
      var o3 = t3.length;
      o3 < 2 && V2("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var s3 = t3[1] !== null && n3 !== null, c3 = nt(t3), l3 = !t3[0].isVoid, u3 = o3 - 2, d3 = Array(u3), f3 = [], p3 = [];
      return tt(e3, function() {
        p3.length = 0;
        var e4;
        f3.length = s3 ? 2 : 1, f3[0] = i3, s3 && (e4 = t3[1].toWireType(p3, this), f3[1] = e4);
        for (var n4 = 0; n4 < u3; ++n4) d3[n4] = t3[n4 + 2].toWireType(p3, n4 < 0 || arguments.length <= n4 ? void 0 : arguments[n4]), f3.push(d3[n4]);
        var a4 = r3(...f3);
        function o4(n5) {
          if (c3) Be(p3);
          else for (var r4 = s3 ? 1 : 2; r4 < t3.length; r4++) {
            var i4 = r4 === 1 ? e4 : d3[r4 - 2];
            t3[r4].destructorFunction !== null && t3[r4].destructorFunction(i4);
          }
          if (l3) return t3[0].fromWireType(n5);
        }
        return o4(a4);
      });
    }
    var it = (e3, t3, n3) => {
      if (e3[t3].overloadTable === void 0) {
        var r3 = e3[t3];
        e3[t3] = function() {
          var r4 = [...arguments];
          return e3[t3].overloadTable.hasOwnProperty(r4.length) || V2(`Function '${n3}' called with an invalid number of arguments (${r4.length}) - expects one of (${e3[t3].overloadTable})!`), e3[t3].overloadTable[r4.length].apply(this, r4);
        }, e3[t3].overloadTable = [], e3[t3].overloadTable[r3.argCount] = r3;
      }
    }, at = (e3, t3, n3) => {
      i2.hasOwnProperty(e3) ? ((n3 === void 0 || i2[e3].overloadTable !== void 0 && i2[e3].overloadTable[n3] !== void 0) && V2(`Cannot register public name '${e3}' twice`), it(i2, e3, e3), i2[e3].overloadTable.hasOwnProperty(n3) && V2(`Cannot register multiple overloads of a function with the same number of arguments (${n3})!`), i2[e3].overloadTable[n3] = t3) : (i2[e3] = t3, i2[e3].argCount = n3);
    }, ot = (e3, t3) => {
      for (var n3 = [], r3 = 0; r3 < e3; r3++) n3.push(E[t3 + r3 * 4 >> 2]);
      return n3;
    }, st = (e3, t3, n3) => {
      i2.hasOwnProperty(e3) || He("Replacing nonexistent public symbol"), i2[e3].overloadTable !== void 0 && n3 !== void 0 ? i2[e3].overloadTable[n3] = t3 : (i2[e3] = t3, i2[e3].argCount = n3);
    }, G2 = {}, ct = (e3, t3, n3) => {
      e3 = e3.replace(/p/g, "i");
      var r3 = G2[e3];
      return r3(t3, ...n3);
    }, lt = [], K2 = (e3) => {
      var t3 = lt[e3];
      return t3 || (lt[e3] = t3 = bn.get(e3)), t3;
    }, ut = function(e3, t3) {
      let n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (arguments.length > 3 && arguments[3] !== void 0 && arguments[3], e3.includes("j")) return ct(e3, t3, n3);
      var r3 = K2(t3)(...n3);
      function i3(e4) {
        return e4;
      }
      return i3(r3);
    }, dt = function(e3, t3) {
      let n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return function() {
        return ut(e3, t3, [...arguments], n3);
      };
    }, q2 = function(e3, t3) {
      arguments.length > 2 && arguments[2] !== void 0 && arguments[2], e3 = B2(e3);
      function n3() {
        return e3.includes("j") ? dt(e3, t3) : K2(t3);
      }
      var r3 = n3();
      return typeof r3 != "function" && V2(`unknown function pointer with signature ${e3}: ${t3}`), r3;
    };
    class ft extends Error {
    }
    var pt = (e3) => {
      var t3 = un(e3), n3 = B2(t3);
      return X(t3), n3;
    }, mt = (e3, t3) => {
      var n3 = [], r3 = {};
      function i3(e4) {
        if (!r3[e4] && !R[e4]) {
          if (z2[e4]) {
            z2[e4].forEach(i3);
            return;
          }
          n3.push(e4), r3[e4] = true;
        }
      }
      throw t3.forEach(i3), new ft(`${e3}: ` + n3.map(pt).join([", "]));
    }, ht = (e3) => {
      e3 = e3.trim();
      let t3 = e3.indexOf("(");
      return t3 === -1 ? e3 : e3.slice(0, t3);
    }, gt = (e3, t3, n3, r3, i3, a3, o3, s3) => {
      var c3 = ot(t3, n3);
      e3 = B2(e3), e3 = ht(e3), i3 = q2(r3, i3, o3), at(e3, function() {
        mt(`Cannot call ${e3} due to unbound types`, c3);
      }, t3 - 1), Ue([], c3, (n4) => {
        var r4 = [n4[0], null].concat(n4.slice(1));
        return st(e3, rt(e3, r4, null, i3, a3, o3), t3 - 1), [];
      });
    }, _t = (e3, t3, n3) => {
      switch (t3) {
        case 1:
          return n3 ? (e4) => w2[e4] : (e4) => D[e4];
        case 2:
          return n3 ? (e4) => S[e4 >> 1] : (e4) => T2[e4 >> 1];
        case 4:
          return n3 ? (e4) => C[e4 >> 2] : (e4) => E[e4 >> 2];
        default:
          throw TypeError(`invalid integer width (${t3}): ${e3}`);
      }
    }, vt = (e3, t3, n3, r3, i3) => {
      t3 = B2(t3);
      let a3 = r3 === 0, o3 = (e4) => e4;
      if (a3) {
        var s3 = 32 - 8 * n3;
        o3 = (e4) => e4 << s3 >>> s3, i3 = o3(i3);
      }
      H2(e3, {
        name: t3,
        fromWireType: o3,
        toWireType: (e4, t4) => t4,
        readValueFromPointer: _t(t3, n3, r3 !== 0),
        destructorFunction: null
      });
    }, yt = (e3, t3, n3) => {
      var r3 = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      ][t3];
      function i3(e4) {
        var t4 = E[e4 >> 2], n4 = E[e4 + 4 >> 2];
        return new r3(w2.buffer, n4, t4);
      }
      n3 = B2(n3), H2(e3, {
        name: n3,
        fromWireType: i3,
        readValueFromPointer: i3
      }, { ignoreDuplicateRegistrations: true });
    }, bt = (e3, t3, n3, r3) => {
      if (!(r3 > 0)) return 0;
      for (var i3 = n3, a3 = n3 + r3 - 1, o3 = 0; o3 < e3.length; ++o3) {
        var s3 = e3.codePointAt(o3);
        if (s3 <= 127) {
          if (n3 >= a3) break;
          t3[n3++] = s3;
        } else if (s3 <= 2047) {
          if (n3 + 1 >= a3) break;
          t3[n3++] = 192 | s3 >> 6, t3[n3++] = 128 | s3 & 63;
        } else if (s3 <= 65535) {
          if (n3 + 2 >= a3) break;
          t3[n3++] = 224 | s3 >> 12, t3[n3++] = 128 | s3 >> 6 & 63, t3[n3++] = 128 | s3 & 63;
        } else {
          if (n3 + 3 >= a3) break;
          t3[n3++] = 240 | s3 >> 18, t3[n3++] = 128 | s3 >> 12 & 63, t3[n3++] = 128 | s3 >> 6 & 63, t3[n3++] = 128 | s3 & 63, o3++;
        }
      }
      return t3[n3] = 0, n3 - i3;
    }, J2 = (e3, t3, n3) => bt(e3, D, t3, n3), xt = (e3) => {
      for (var t3 = 0, n3 = 0; n3 < e3.length; ++n3) {
        var r3 = e3.charCodeAt(n3);
        r3 <= 127 ? t3++ : r3 <= 2047 ? t3 += 2 : r3 >= 55296 && r3 <= 57343 ? (t3 += 4, ++n3) : t3 += 3;
      }
      return t3;
    }, St = (e3, t3) => {
      t3 = B2(t3);
      var n3 = true;
      H2(e3, {
        name: t3,
        fromWireType(e4) {
          var t4 = E[e4 >> 2], r3 = e4 + 4, i3;
          if (n3) i3 = Me(r3, t4, true);
          else {
            i3 = "";
            for (var a3 = 0; a3 < t4; ++a3) i3 += String.fromCharCode(D[r3 + a3]);
          }
          return X(e4), i3;
        },
        toWireType(e4, t4) {
          t4 instanceof ArrayBuffer && (t4 = new Uint8Array(t4));
          var r3, i3 = typeof t4 == "string";
          i3 || ArrayBuffer.isView(t4) && t4.BYTES_PER_ELEMENT == 1 || V2("Cannot pass non-string to std::string"), r3 = n3 && i3 ? xt(t4) : t4.length;
          var a3 = dn(4 + r3 + 1), o3 = a3 + 4;
          if (E[a3 >> 2] = r3, i3) if (n3) J2(t4, o3, r3 + 1);
          else for (var s3 = 0; s3 < r3; ++s3) {
            var c3 = t4.charCodeAt(s3);
            c3 > 255 && (X(a3), V2("String has UTF-16 code units that do not fit in 8 bits")), D[o3 + s3] = c3;
          }
          else D.set(t4, o3);
          return e4 !== null && e4.push(X, a3), a3;
        },
        readValueFromPointer: I2,
        destructorFunction(e4) {
          X(e4);
        }
      });
    }, Ct = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, wt = (e3, t3, n3) => {
      var r3 = e3 >> 1, i3 = Ae(T2, r3, t3 / 2, n3);
      if (i3 - r3 > 16 && Ct) return Ct.decode(T2.subarray(r3, i3));
      for (var a3 = "", o3 = r3; o3 < i3; ++o3) {
        var s3 = T2[o3];
        a3 += String.fromCharCode(s3);
      }
      return a3;
    }, Tt = (e3, t3, n3) => {
      if (n3 != null || (n3 = 2147483647), n3 < 2) return 0;
      n3 -= 2;
      for (var r3 = t3, i3 = n3 < e3.length * 2 ? n3 / 2 : e3.length, a3 = 0; a3 < i3; ++a3) {
        var o3 = e3.charCodeAt(a3);
        S[t3 >> 1] = o3, t3 += 2;
      }
      return S[t3 >> 1] = 0, t3 - r3;
    }, Et = (e3) => e3.length * 2, Dt = (e3, t3, n3) => {
      for (var r3 = "", i3 = e3 >> 2, a3 = 0; !(a3 >= t3 / 4); a3++) {
        var o3 = E[i3 + a3];
        if (!o3 && !n3) break;
        r3 += String.fromCodePoint(o3);
      }
      return r3;
    }, Ot = (e3, t3, n3) => {
      if (n3 != null || (n3 = 2147483647), n3 < 4) return 0;
      for (var r3 = t3, i3 = r3 + n3 - 4, a3 = 0; a3 < e3.length; ++a3) {
        var o3 = e3.codePointAt(a3);
        if (o3 > 65535 && a3++, C[t3 >> 2] = o3, t3 += 4, t3 + 4 > i3) break;
      }
      return C[t3 >> 2] = 0, t3 - r3;
    }, kt = (e3) => {
      for (var t3 = 0, n3 = 0; n3 < e3.length; ++n3) e3.codePointAt(n3) > 65535 && n3++, t3 += 4;
      return t3;
    }, At = (e3, t3, n3) => {
      n3 = B2(n3);
      var r3, i3, a3;
      t3 === 2 ? (r3 = wt, i3 = Tt, a3 = Et) : (r3 = Dt, i3 = Ot, a3 = kt), H2(e3, {
        name: n3,
        fromWireType: (e4) => {
          var n4 = E[e4 >> 2], i4 = r3(e4 + 4, n4 * t3, true);
          return X(e4), i4;
        },
        toWireType: (e4, r4) => {
          typeof r4 != "string" && V2(`Cannot pass non-string to C++ string type ${n3}`);
          var o3 = a3(r4), s3 = dn(4 + o3 + t3);
          return E[s3 >> 2] = o3 / t3, i3(r4, s3 + 4, o3 + t3), e4 !== null && e4.push(X, s3), s3;
        },
        readValueFromPointer: I2,
        destructorFunction(e4) {
          X(e4);
        }
      });
    }, jt = (e3, t3, n3, r3, i3, a3) => {
      F[e3] = {
        name: B2(t3),
        rawConstructor: q2(n3, r3),
        rawDestructor: q2(i3, a3),
        fields: []
      };
    }, Mt = (e3, t3, n3, r3, i3, a3, o3, s3, c3, l3) => {
      F[e3].fields.push({
        fieldName: B2(t3),
        getterReturnType: n3,
        getter: q2(r3, i3),
        getterContext: a3,
        setterArgumentType: o3,
        setter: q2(s3, c3),
        setterContext: l3
      });
    }, Nt = (e3, t3) => {
      t3 = B2(t3), H2(e3, {
        isVoid: true,
        name: t3,
        fromWireType: () => void 0,
        toWireType: (e4, t4) => void 0
      });
    }, Pt = [], Ft = (e3) => {
      var t3 = Pt.length;
      return Pt.push(e3), t3;
    }, It = (e3, t3) => {
      var n3 = R[e3];
      return n3 === void 0 && V2(`${t3} has unknown type ${pt(e3)}`), n3;
    }, Lt = (e3, t3) => {
      for (var n3 = Array(e3), r3 = 0; r3 < e3; ++r3) n3[r3] = It(E[t3 + r3 * 4 >> 2], `parameter ${r3}`);
      return n3;
    }, Rt = (e3, t3, n3) => {
      var r3 = [], i3 = e3(r3, n3);
      return r3.length && (E[t3 >> 2] = W2.toHandle(r3)), i3;
    }, zt = {}, Bt = (e3) => {
      var t3 = zt[e3];
      return t3 === void 0 ? B2(e3) : t3;
    }, Vt = (e3, t3, n3) => {
      var r3 = 8, [i3, ...a3] = Lt(e3, t3), o3 = i3.toWireType.bind(i3), s3 = a3.map((e4) => e4.readValueFromPointer.bind(e4));
      e3--;
      var c3 = Array(e3);
      return Ft(tt(`methodCaller<(${a3.map((e4) => e4.name)}) => ${i3.name}>`, (t4, i4, a4, l3) => {
        for (var u3 = 0, d3 = 0; d3 < e3; ++d3) c3[d3] = s3[d3](l3 + u3), u3 += r3;
        var f3;
        switch (n3) {
          case 0:
            f3 = W2.toValue(t4).apply(null, c3);
            break;
          case 2:
            f3 = Reflect.construct(W2.toValue(t4), c3);
            break;
          case 3:
            f3 = c3[0];
            break;
          case 1:
            f3 = W2.toValue(t4)[Bt(i4)](...c3);
            break;
        }
        return Rt(o3, a4, f3);
      }));
    }, Ht = (e3) => e3 ? (e3 = Bt(e3), W2.toHandle(globalThis[e3])) : W2.toHandle(globalThis), Ut = (e3) => {
      e3 > 9 && (U2[e3 + 1] += 1);
    }, Wt = (e3, t3, n3, r3, i3) => Pt[e3](t3, n3, r3, i3), Gt = (e3) => {
      Be(W2.toValue(e3)), Xe(e3);
    }, Kt = (e3, t3, n3, r3) => {
      var i3 = (/* @__PURE__ */ new Date()).getFullYear(), a3 = new Date(i3, 0, 1), o3 = new Date(i3, 6, 1), s3 = a3.getTimezoneOffset(), c3 = o3.getTimezoneOffset(), l3 = Math.max(s3, c3);
      E[e3 >> 2] = l3 * 60, C[t3 >> 2] = Number(s3 != c3);
      var u3 = (e4) => {
        var t4 = e4 >= 0 ? "-" : "+", n4 = Math.abs(e4);
        return `UTC${t4}${String(Math.floor(n4 / 60)).padStart(2, "0")}${String(n4 % 60).padStart(2, "0")}`;
      }, d3 = u3(s3), f3 = u3(c3);
      c3 < s3 ? (J2(d3, n3, 17), J2(f3, r3, 17)) : (J2(d3, r3, 17), J2(f3, n3, 17));
    }, qt = () => 2147483648, Jt = (e3, t3) => Math.ceil(e3 / t3) * t3, Yt = (e3) => {
      var t3 = (e3 - Q2.buffer.byteLength + 65535) / 65536 | 0;
      try {
        return Q2.grow(t3), re(), 1;
      } catch {
      }
    }, Xt = (e3) => {
      var t3 = D.length;
      e3 >>>= 0;
      var n3 = qt();
      if (e3 > n3) return false;
      for (var r3 = 1; r3 <= 4; r3 *= 2) {
        var i3 = t3 * (1 + 0.2 / r3);
        if (i3 = Math.min(i3, e3 + 100663296), Yt(Math.min(n3, Jt(Math.max(e3, i3), 65536)))) return true;
      }
      return false;
    }, Zt = {}, Qt = () => c2 || "./this.program", Y = () => {
      if (!Y.strings) {
        var e3, t3, n3 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: ((e3 = (t3 = globalThis.navigator) == null ? void 0 : t3.language) == null ? "C" : e3).replace("-", "_") + ".UTF-8",
          _: Qt()
        };
        for (var r3 in Zt) Zt[r3] === void 0 ? delete n3[r3] : n3[r3] = Zt[r3];
        var i3 = [];
        for (var r3 in n3) i3.push(`${r3}=${n3[r3]}`);
        Y.strings = i3;
      }
      return Y.strings;
    }, $t = (e3, t3) => {
      var n3 = 0, r3 = 0;
      for (var i3 of Y()) {
        var a3 = t3 + n3;
        E[e3 + r3 >> 2] = a3, n3 += J2(i3, a3, Infinity) + 1, r3 += 4;
      }
      return 0;
    }, en = (e3, t3) => {
      var n3 = Y();
      E[e3 >> 2] = n3.length;
      var r3 = 0;
      for (var i3 of n3) r3 += xt(i3) + 1;
      return E[t3 >> 2] = r3, 0;
    }, tn = (e3) => 52, nn = (e3, t3, n3, r3) => 52, rn = (e3, t3) => t3 + 2097152 >>> 0 < 4194305 - !!e3 ? (e3 >>> 0) + t3 * 4294967296 : NaN;
    function an(e3, t3, n3, r3, i3) {
      return rn(t3, n3), 70;
    }
    var on = [
      null,
      [],
      []
    ], sn = (e3, t3) => {
      var n3 = on[e3];
      t3 === 0 || t3 === 10 ? ((e3 === 1 ? m2 : h2)(je(n3)), n3.length = 0) : n3.push(t3);
    }, cn = (e3, t3, n3, r3) => {
      for (var i3 = 0, a3 = 0; a3 < n3; a3++) {
        var o3 = E[t3 >> 2], s3 = E[t3 + 4 >> 2];
        t3 += 8;
        for (var c3 = 0; c3 < s3; c3++) sn(e3, D[o3 + c3]);
        i3 += s3;
      }
      return E[r3 >> 2] = i3, 0;
    }, ln = (e3) => e3;
    if (i2.noExitRuntime && i2.noExitRuntime, i2.print && (m2 = i2.print), i2.printErr && (h2 = i2.printErr), i2.wasmBinary && (g2 = i2.wasmBinary), i2.arguments && i2.arguments, i2.thisProgram && (c2 = i2.thisProgram), i2.preInit) for (typeof i2.preInit == "function" && (i2.preInit = [i2.preInit]); i2.preInit.length > 0; ) i2.preInit.shift()();
    var un, dn, X, Z2, fn, pn, mn, hn, gn, _n, vn, yn, Q2, bn;
    function xn(e3) {
      un = e3.pa, dn = i2._malloc = e3.ra, X = i2._free = e3.sa, Z2 = e3.ta, fn = e3.ua, pn = e3.va, mn = e3.wa, hn = e3.xa, gn = e3.ya, _n = e3.za, vn = e3.Aa, G2.jiji = e3.Ba, G2.viijii = e3.Ca, yn = G2.jiiii = e3.Da, G2.iiiiij = e3.Ea, G2.iiiiijj = e3.Fa, G2.iiiiiijj = e3.Ga, Q2 = e3.na, bn = e3.qa;
    }
    var Sn = {
      t: ye,
      u: be,
      a: Se,
      g: Ce,
      v: we,
      _: Te,
      p: Ee,
      Z: De,
      e: Oe,
      L: Pe,
      da: Fe,
      ba: Ie,
      ea: Le,
      aa: Re,
      U: ze,
      ka: We,
      T: Ge,
      ia: Je,
      ga: Qe,
      M: et,
      N: gt,
      s: vt,
      n: yt,
      ha: St,
      E: At,
      F: jt,
      la: Mt,
      ja: Nt,
      C: Vt,
      ma: Xe,
      Q: Ht,
      G: Ut,
      A: Wt,
      W: Gt,
      V: Kt,
      $: Xt,
      X: $t,
      Y: en,
      J: tn,
      ca: nn,
      S: an,
      K: cn,
      H: Vn,
      O: jn,
      I: Bn,
      l: Hn,
      b: kn,
      c: Dn,
      f: An,
      j: Fn,
      D: In,
      r: Rn,
      B: zn,
      x: Wn,
      R: Kn,
      k: On,
      i: Cn,
      d: Tn,
      h: En,
      o: wn,
      y: Ln,
      z: Nn,
      q: Un,
      fa: Pn,
      m: Mn,
      w: Gn,
      P: ln
    };
    function Cn(e3, t3) {
      var n3 = k();
      try {
        K2(e3)(t3);
      } catch (e4) {
        if (O(n3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function wn(e3, t3, n3, r3, i3) {
      var a3 = k();
      try {
        K2(e3)(t3, n3, r3, i3);
      } catch (e4) {
        if (O(a3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Tn(e3, t3, n3) {
      var r3 = k();
      try {
        K2(e3)(t3, n3);
      } catch (e4) {
        if (O(r3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function En(e3, t3, n3, r3) {
      var i3 = k();
      try {
        K2(e3)(t3, n3, r3);
      } catch (e4) {
        if (O(i3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Dn(e3, t3, n3) {
      var r3 = k();
      try {
        return K2(e3)(t3, n3);
      } catch (e4) {
        if (O(r3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function On(e3) {
      var t3 = k();
      try {
        K2(e3)();
      } catch (e4) {
        if (O(t3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function kn(e3, t3) {
      var n3 = k();
      try {
        return K2(e3)(t3);
      } catch (e4) {
        if (O(n3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function An(e3, t3, n3, r3) {
      var i3 = k();
      try {
        return K2(e3)(t3, n3, r3);
      } catch (e4) {
        if (O(i3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function jn(e3, t3, n3, r3, i3, a3) {
      var o3 = k();
      try {
        return K2(e3)(t3, n3, r3, i3, a3);
      } catch (e4) {
        if (O(o3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Mn(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3) {
      var d3 = k();
      try {
        K2(e3)(t3, n3, r3, i3, a3, o3, s3, c3, l3, u3);
      } catch (e4) {
        if (O(d3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Nn(e3, t3, n3, r3, i3, a3, o3) {
      var s3 = k();
      try {
        K2(e3)(t3, n3, r3, i3, a3, o3);
      } catch (e4) {
        if (O(s3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Pn(e3, t3, n3, r3, i3, a3, o3, s3, c3) {
      var l3 = k();
      try {
        K2(e3)(t3, n3, r3, i3, a3, o3, s3, c3);
      } catch (e4) {
        if (O(l3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Fn(e3, t3, n3, r3, i3) {
      var a3 = k();
      try {
        return K2(e3)(t3, n3, r3, i3);
      } catch (e4) {
        if (O(a3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function In(e3, t3, n3, r3, i3, a3) {
      var o3 = k();
      try {
        return K2(e3)(t3, n3, r3, i3, a3);
      } catch (e4) {
        if (O(o3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Ln(e3, t3, n3, r3, i3, a3) {
      var o3 = k();
      try {
        K2(e3)(t3, n3, r3, i3, a3);
      } catch (e4) {
        if (O(o3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Rn(e3, t3, n3, r3, i3, a3, o3) {
      var s3 = k();
      try {
        return K2(e3)(t3, n3, r3, i3, a3, o3);
      } catch (e4) {
        if (O(s3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function zn(e3, t3, n3, r3, i3, a3, o3, s3) {
      var c3 = k();
      try {
        return K2(e3)(t3, n3, r3, i3, a3, o3, s3);
      } catch (e4) {
        if (O(c3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Bn(e3, t3, n3, r3) {
      var i3 = k();
      try {
        return K2(e3)(t3, n3, r3);
      } catch (e4) {
        if (O(i3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Vn(e3, t3, n3, r3) {
      var i3 = k();
      try {
        return K2(e3)(t3, n3, r3);
      } catch (e4) {
        if (O(i3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Hn(e3) {
      var t3 = k();
      try {
        return K2(e3)();
      } catch (e4) {
        if (O(t3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Un(e3, t3, n3, r3, i3, a3, o3, s3) {
      var c3 = k();
      try {
        K2(e3)(t3, n3, r3, i3, a3, o3, s3);
      } catch (e4) {
        if (O(c3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Wn(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3) {
      var f3 = k();
      try {
        return K2(e3)(t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3);
      } catch (e4) {
        if (O(f3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Gn(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3) {
      var g3 = k();
      try {
        K2(e3)(t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3);
      } catch (e4) {
        if (O(g3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function Kn(e3, t3, n3, r3, i3) {
      var a3 = k();
      try {
        return yn(e3, t3, n3, r3, i3);
      } catch (e4) {
        if (O(a3), e4 !== e4 + 0) throw e4;
        Z2(1, 0);
      }
    }
    function qn() {
      ie();
      function e3() {
        var e4, t3;
        i2.calledRun = true, !_2 && (ae(), (e4 = ee) == null || e4(i2), (t3 = i2.onRuntimeInitialized) == null || t3.call(i2), oe());
      }
      i2.setStatus ? (i2.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => i2.setStatus(""), 1), e3();
      }, 1)) : e3();
    }
    var $3 = await de();
    return qn(), t2 = ne ? i2 : new Promise((e3, t3) => {
      ee = e3, te = t3;
    }), t2;
  }
  async function ue(e2, t2) {
    return Z(b2, e2, t2);
  }

  // nexra_barcode/public/js/nexra_barcode_src.js
  var ruteWorker = "/assets/nexra_barcode/js/nexra_worker.js";
  var instansiWorker = null;
  function dapatkanWorkerAktif() {
    if (!instansiWorker) {
      instansiWorker = new Worker(ruteWorker, { type: "module" });
    }
    return instansiWorker;
  }
  window.nexraBarcode = {
    /**
     * 1. GENERATOR BARCODE (SVG)
     */
    generateToSVG: async function(textToEncode, customOptions = {}) {
      const defaultWriterOptions = {
        format: "Code_128",
        scale: 2,
        addHRT: true,
        addQuietZones: true,
        invert: false
      };
      if (typeof customOptions === "string") {
        customOptions = { format: customOptions };
      }
      const finalOptions = { ...defaultWriterOptions, ...customOptions };
      try {
        const output = await ue(textToEncode, finalOptions);
        return output.svg;
      } catch (error) {
        console.error("Gagal membuat barcode:", error);
        return null;
      }
    },
    /**
     * 2. UX MODAL SCANNER KAMERA REAL-TIME (Async Multi-Threaded)
     */
    bukaModalKameraGlobal: function(frm, targetField, callbackSukses = null) {
      const dialog = new frappe.ui.Dialog({
        title: `<i class="fa fa-qrcode text-info"></i> ${__("Nexra Barcode Scanner (Multi-Threaded)")}`,
        fields: [
          {
            fieldname: "preview_html",
            fieldtype: "HTML",
            options: `
                        <div style="text-align: center; position: relative; background: #000; border-radius: 8px; overflow: hidden; max-width: 480px; margin: 0 auto; box-shadow: var(--shadow-sm);">
                            <video id="nexra-video" width="100%" height="auto" autoplay playsinline style="display: block;"></video>
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 2px solid #17a2b8; width: 75%; height: 45%; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6); pointer-events: none; border-radius: 6px;">
                                <div style="position: absolute; top: 0; left: 0; border-top: 4px solid #00fcff; border-left: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; top: 0; right: 0; border-top: 4px solid #00fcff; border-right: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; bottom: 0; left: 0; border-bottom: 4px solid #00fcff; border-left: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; bottom: 0; right: 0; border-bottom: 4px solid #00fcff; border-right: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; width: 100%; height: 2px; background: rgba(0, 252, 255, 0.4); top: 0; animation: nexra-scan 2s linear infinite;"></div>
                            </div>
                        </div>
                        <style>
                            @keyframes nexra-scan { 0% { top: 0%; } 50% { top: 100%; } 100% { top: 0%; } }
                        </style>
                    `
          }
        ],
        primary_action_label: __("Tutup"),
        primary_action() {
          dialog.hide();
        }
      });
      let streamKamera = null;
      let aktif = true;
      let threadSedangSibuk = false;
      const worker = dapatkanWorkerAktif();
      dialog.on_page_show = async function() {
        const video = document.getElementById("nexra-video");
        try {
          streamKamera = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment", width: { ideal: 640 }, height: { ideal: 480 } }
          });
          video.srcObject = streamKamera;
        } catch (err) {
          frappe.msgprint(__("Akses kamera ditolak. Pastikan koneksi aman (HTTPS/Localhost)."));
          dialog.hide();
          return;
        }
        worker.onmessage = function(e2) {
          if (!aktif) return;
          const { type, text } = e2.data;
          if (type === "success") {
            aktif = false;
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(1e3, ctx.currentTime);
            osc.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
            if (navigator.vibrate) navigator.vibrate(100);
            if (callbackSukses) {
              callbackSukses(text);
            } else {
              const fieldObj = frm.fields_dict[targetField];
              if (fieldObj && fieldObj.df.fieldtype === "Table") {
                let row = frm.add_child(targetField);
                row.barcode = text;
                row.uom = frm.doc.stock_uom || "Nos";
                frm.refresh_field(targetField);
              } else {
                frm.set_value(targetField, text);
              }
            }
            dialog.hide();
          } else {
            threadSedangSibuk = false;
          }
        };
        async function tick() {
          if (!aktif) return;
          if (video.readyState === video.HAVE_ENOUGH_DATA && !threadSedangSibuk && video.videoWidth > 0) {
            try {
              threadSedangSibuk = true;
              const hitungTinggi = Math.trunc(video.videoHeight / video.videoWidth * 320);
              const objekBitmap = await createImageBitmap(video, {
                resizeWidth: 320,
                resizeHeight: hitungTinggi
              });
              worker.postMessage({ type: "scan", bitmap: objekBitmap }, [objekBitmap]);
            } catch (err) {
              threadSedangSibuk = false;
            }
          }
          if (aktif) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      };
      dialog.on_hide = function() {
        aktif = false;
        if (streamKamera) {
          streamKamera.getTracks().forEach((track) => track.stop());
        }
      };
      dialog.show();
    }
  };
  $(document).on("app_ready", function() {
    frappe.ui.form.on("*", {
      refresh: function(frm) {
        frappe.db.get_doc("Nexra Barcode Setting").then((setting) => {
          if (!setting || !setting.enabled || !setting.mappings) return;
          const aturan = setting.mappings.find((m2) => m2.document_type === frm.doctype);
          if (aturan) {
            suntikTombolUX(frm, aturan);
          }
        }).catch(() => {
        });
      }
    });
    $(document).on("ajaxComplete", function(event, xhr, settings) {
      if (settings.url.includes("posawesome")) {
        setTimeout(() => {
          suntikTombolPOSAwesome();
        }, 800);
      }
    });
  });
  function suntikTombolUX(frm, aturan) {
    if (aturan.use_case === "Generate Preview") {
      if (frm.doc.item_code && frm.fields_dict[aturan.target_field]) {
        window.nexraBarcode.generateToSVG(frm.doc.item_code).then((svg) => {
          if (svg) frm.get_field(aturan.target_field).$wrapper.html(svg);
        });
      }
    }
    if (aturan.use_case === "Scan Input") {
      setTimeout(() => {
        const field = frm.get_field(aturan.target_field);
        if (!field) return;
        if (field.df.fieldtype !== "Table") {
          const wrapper = field.$wrapper.find(".control-input-wrapper");
          if (wrapper.length && !wrapper.find(".btn-nexra-scan").length) {
            wrapper.addClass("input-group");
            const btn = $(`
                        <div class="input-group-append btn-nexra-scan">
                            <button class="btn btn-default" type="button" style="border-left:0; border-radius:0 4px 4px 0; background:#f8f9fa;">
                                <i class="fa fa-camera text-info"></i>
                            </button>
                        </div>
                    `);
            wrapper.find("input").css("border-radius", "4px 0 0 4px").after(btn);
            btn.find("button").on("click", () => window.nexraBarcode.bukaModalKameraGlobal(frm, aturan.target_field));
          }
        } else {
          if (!field.$wrapper.find(".btn-nexra-table-scan").length) {
            const btnTable = $(`
                        <button class="btn btn-xs btn-info btn-nexra-table-scan" style="margin: 5px;" type="button">
                            <i class="fa fa-camera"></i> ${__("Scan Barcode Kamera")}
                        </button>
                    `);
            field.$wrapper.prepend(btnTable);
            btnTable.on("click", () => window.nexraBarcode.bukaModalKameraGlobal(frm, aturan.target_field));
          }
        }
      }, 300);
    }
  }
  function suntikTombolPOSAwesome() {
    const posSearchWrapper = $(".search-item-field");
    if (posSearchWrapper.length && !$(".btn-nexra-pos").length) {
      posSearchWrapper.parent().addClass("input-group");
      const posBtn = $(`
            <div class="input-group-append btn-nexra-pos">
                <button class="btn btn-primary" type="button" style="background:#17a2b8; border-color:#17a2b8; height: 100%;">
                    <i class="fa fa-camera"></i>
                </button>
            </div>
        `);
      posSearchWrapper.after(posBtn);
      posBtn.on("click", function() {
        window.nexraBarcode.bukaModalKameraGlobal(null, null, function(teksHasilScan) {
          const inputPOS = $(".search-item-field input");
          inputPOS.val(teksHasilScan).trigger("focus");
          const e2 = $.Event("keydown", { keyCode: 13, which: 13 });
          inputPOS.trigger(e2);
        });
      });
    }
  }
})();
//# sourceMappingURL=nexra_barcode.js.map
