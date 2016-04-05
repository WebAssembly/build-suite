Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = env.___dso_handle | 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = 0;
 var s = global.NaN, t = global.Infinity;
 var u = 0, v = 0, w = 0, x = 0, y = 0.0, z = 0, A = 0, B = 0, C = 0.0;
 var D = 0;
 var E = 0;
 var F = 0;
 var G = 0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = 0;
 var M = 0;
 var N = global.Math.floor;
 var O = global.Math.abs;
 var P = global.Math.sqrt;
 var Q = global.Math.pow;
 var R = global.Math.cos;
 var S = global.Math.sin;
 var T = global.Math.tan;
 var U = global.Math.acos;
 var V = global.Math.asin;
 var W = global.Math.atan;
 var X = global.Math.atan2;
 var Y = global.Math.exp;
 var Z = global.Math.log;
 var _ = global.Math.ceil;
 var $ = global.Math.imul;
 var aa = global.Math.min;
 var ba = global.Math.clz32;
 var ca = env.abort;
 var da = env.assert;
 var ea = env.invoke_iiii;
 var fa = env.invoke_viiiii;
 var ga = env.invoke_vi;
 var ha = env.invoke_vii;
 var ia = env.invoke_ii;
 var ja = env.invoke_v;
 var ka = env.invoke_viiiiii;
 var la = env.invoke_viiii;
 var ma = env._glClearStencil;
 var na = env._glUseProgram;
 var oa = env._glUniformMatrix3fv;
 var pa = env._glUniformMatrix2fv;
 var qa = env._glStencilFunc;
 var ra = env._glUniformMatrix4fv;
 var sa = env._glGenRenderbuffers;
 var ta = env._glDeleteProgram;
 var ua = env.__ZSt18uncaught_exceptionv;
 var va = env._glBindBuffer;
 var wa = env._glCreateProgram;
 var xa = env._emscripten_request_fullscreen_strategy;
 var ya = env._emscripten_webgl_create_context;
 var za = env._sbrk;
 var Aa = env._glDisableVertexAttribArray;
 var Ba = env._emscripten_memcpy_big;
 var Ca = env._glStencilOp;
 var Da = env._glUniform4f;
 var Ea = env._glDrawElementsInstanced;
 var Fa = env.___resumeException;
 var Ga = env._emscripten_get_canvas_size;
 var Ha = env._emscripten_webgl_make_context_current;
 var Ia = env._glGenBuffers;
 var Ja = env._glShaderSource;
 var Ka = env._glFramebufferRenderbuffer;
 var La = env.___cxa_atexit;
 var Ma = env._pthread_cleanup_push;
 var Na = env.___syscall140;
 var Oa = env.___syscall146;
 var Pa = env._pthread_cleanup_pop;
 var Qa = env._glVertexAttribPointer;
 var Ra = env.__restoreHiddenElements;
 var Sa = env.___cxa_find_matching_catch;
 var Ta = env._glBindRenderbuffer;
 var Ua = env._glDrawElements;
 var Va = env._glDepthMask;
 var Wa = env._glBufferSubData;
 var Xa = env._glViewport;
 var Ya = env._glDeleteTextures;
 var Za = env._glDepthFunc;
 var _a = env._glStencilOpSeparate;
 var $a = env._emscripten_set_canvas_size;
 var ab = env._glUniform3f;
 var bb = env._nanosleep;
 var cb = env._glCompressedTexImage2D;
 var db = env._glEnable;
 var eb = env._llvm_trap;
 var fb = env._glGenTextures;
 var gb = env._glGetIntegerv;
 var hb = env._glGetString;
 var ib = env._glDrawArraysInstanced;
 var jb = env.emscriptenWebGLGet;
 var kb = env._glStencilMaskSeparate;
 var lb = env._emscripten_get_now;
 var mb = env._glAttachShader;
 var nb = env.__registerRestoreOldStyle;
 var ob = env.emscriptenWebGLGetTexPixelData;
 var pb = env.___syscall6;
 var qb = env._glBindFramebuffer;
 var rb = env._glGenFramebuffers;
 var sb = env._glUniform2f;
 var tb = env._glCullFace;
 var ub = env._glDeleteFramebuffers;
 var vb = env._glCheckFramebufferStatus;
 var wb = env._emscripten_set_main_loop_timing;
 var xb = env.___cxa_allocate_exception;
 var yb = env._glBlendFuncSeparate;
 var zb = env._glClearDepthf;
 var Ab = env._glClearColor;
 var Bb = env._glBindTexture;
 var Cb = env._glUniform1f;
 var Db = env._glUniform1i;
 var Eb = env._glDrawArrays;
 var Fb = env._glCreateShader;
 var Gb = env._llvm_fabs_f32;
 var Hb = env._emscripten_webgl_init_context_attributes;
 var Ib = env._glActiveTexture;
 var Jb = env.__setLetterbox;
 var Kb = env._glFrontFace;
 var Lb = env._glCompileShader;
 var Mb = env._glEnableVertexAttribArray;
 var Nb = env._abort;
 var Ob = env._glDeleteBuffers;
 var Pb = env._glBufferData;
 var Qb = env._glTexImage2D;
 var Rb = env._glDeleteShader;
 var Sb = env._glGetProgramiv;
 var Tb = env._glScissor;
 var Ub = env.emscriptenWebGLComputeImageSize;
 var Vb = env.__softFullscreenResizeWebGLRenderTarget;
 var Wb = env.___gxx_personality_v0;
 var Xb = env._glDeleteRenderbuffers;
 var Yb = env._usleep;
 var Zb = env._glLinkProgram;
 var _b = env._glGetShaderiv;
 var $b = env._glGetUniformLocation;
 var ac = env._emscripten_cancel_main_loop;
 var bc = env._glClear;
 var cc = env._glUniform4fv;
 var dc = env._glRenderbufferStorage;
 var ec = env._glBindAttribLocation;
 var fc = env._emscripten_webgl_destroy_context;
 var gc = env._glVertexAttribDivisor;
 var hc = env._emscripten_enter_soft_fullscreen;
 var ic = env.___syscall54;
 var jc = env._glFramebufferTexture2D;
 var kc = env._emscripten_set_main_loop;
 var lc = env.___cxa_throw;
 var mc = env._glColorMask;
 var nc = env.__hideEverythingExceptGivenElement;
 var oc = env._glDisable;
 var pc = env._glTexParameteri;
 var qc = env._glBlendColor;
 var rc = env._atexit;
 var sc = env._glStencilMask;
 var tc = env._glBlendEquationSeparate;
 var uc = env._glStencilFuncSeparate;
 var vc = env._emscripten_do_request_fullscreen;
 var wc = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function _d(f) {
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Va = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, db = 0, gb = 0, hb = 0, ib = 0, jb = 0, kb = 0, lb = 0, mb = 0, nb = 0, ob = 0, pb = 0, qb = 0, rb = 0, sb = 0, tb = 0, ub = 0, vb = 0, wb = 0, xb = 0, yb = 0, zb = 0, Ab = 0, Cb = 0, Db = 0, Fb = 0, Gb = 0, Hb = 0.0, Jb = 0.0, Kb = 0.0, Lb = 0.0, Mb = 0.0, Nb = 0.0;
 Fb = i;
 i = i + 5600 | 0;
 Cb = Fb + 5368 | 0;
 wb = Fb + 5360 | 0;
 tb = Fb + 5352 | 0;
 qb = Fb + 5344 | 0;
 pb = Fb + 5336 | 0;
 nb = Fb + 5328 | 0;
 mb = Fb + 5320 | 0;
 lb = Fb + 5312 | 0;
 Db = Fb + 4984 | 0;
 yb = Fb + 4792 | 0;
 jb = Fb + 4720 | 0;
 kb = Fb + 4032 | 0;
 ib = Fb + 3344 | 0;
 ub = Fb + 3336 | 0;
 Sa = Fb + 5592 | 0;
 Xa = Fb + 5588 | 0;
 Va = Fb + 5584 | 0;
 _a = Fb + 3064 | 0;
 Ya = Fb + 5580 | 0;
 Za = Fb + 5576 | 0;
 db = Fb + 5380 | 0;
 $a = Fb + 5376 | 0;
 ab = Fb + 5372 | 0;
 gb = Fb + 3056 | 0;
 bb = Fb + 8 | 0;
 hb = Fb;
 vb = f + 268 | 0;
 if (!(a[vb >> 0] | 0)) {
  l = c[8946] | 0;
  r = l + 1168 | 0;
  q = l + 1276 | 0;
  s = c[q >> 2] | 0;
  c[q >> 2] = s + 1;
  q = l + 1172 | 0;
  h = c[q >> 2] | 0;
  t = l + 1180 | 0;
  j = c[t >> 2] | 0;
  if ((h | 0) == (j | 0)) {
   j = h >> 1;
   k = c[l + 1184 >> 2] | 0;
   if ((j | 0) >= (k | 0)) {
    k = c[l + 1188 >> 2] | 0;
    k = (j | 0) > (k | 0) ? k : j;
   }
   p = k + h | 0;
   if (k) {
    o = l + 1176 | 0;
    h = h - (c[o >> 2] | 0) | 0;
    j = bf(p << 2) | 0;
    k = c[r >> 2] | 0;
    if ((h | 0) > 0) {
     l = j;
     m = 0;
     n = k + (c[o >> 2] << 2) | 0;
     while (1) {
      c[l >> 2] = c[n >> 2];
      m = m + 1 | 0;
      if ((m | 0) == (h | 0)) break; else {
       l = l + 4 | 0;
       n = n + 4 | 0;
      }
     }
    }
    if (k | 0) cf(k);
    c[r >> 2] = j;
    c[q >> 2] = p;
    c[o >> 2] = 0;
    c[t >> 2] = h;
   }
  } else h = j;
  c[t >> 2] = h + 1;
  c[(c[r >> 2] | 0) + (h << 2) >> 2] = s;
  c[f + 272 >> 2] = s;
  Ta = f + 8 | 0;
  v = f + 74 | 0;
  z = f + 10 + (a[v >> 0] << 1) | 0;
  a[z >> 0] = 0;
  a[z + 1 >> 0] = 3;
  z = a[v >> 0] | 0;
  w = f + 58 | 0;
  a[w >> 0] = z;
  y = f + 75 | 0;
  a[(z << 24 >> 24) + (f + 42) >> 0] = a[y >> 0] | 0;
  a[y >> 0] = (d[y >> 0] | 0) + 16;
  z = (a[v >> 0] | 0) + 1 << 24 >> 24;
  a[v >> 0] = z;
  z = f + 10 + (z << 24 >> 24 << 1) | 0;
  a[z >> 0] = 10;
  a[z + 1 >> 0] = 7;
  z = a[v >> 0] | 0;
  x = f + 68 | 0;
  a[x >> 0] = z;
  a[(z << 24 >> 24) + (f + 42) >> 0] = a[y >> 0] | 0;
  a[y >> 0] = (d[y >> 0] | 0) + 4;
  a[v >> 0] = (a[v >> 0] | 0) + 1 << 24 >> 24;
  c[yb >> 2] = -1;
  y = yb + 4 | 0;
  c[y >> 2] = -1;
  a[yb + 10 >> 0] = 17;
  a[yb + 11 >> 0] = 13;
  z = yb + 12 | 0;
  a[z >> 0] = 17;
  a[yb + 13 >> 0] = 13;
  A = yb + 14 | 0;
  a[A >> 0] = 17;
  a[yb + 15 >> 0] = 13;
  B = yb + 16 | 0;
  a[B >> 0] = 17;
  a[yb + 17 >> 0] = 13;
  C = yb + 18 | 0;
  a[C >> 0] = 17;
  a[yb + 19 >> 0] = 13;
  E = yb + 20 | 0;
  a[E >> 0] = 17;
  a[yb + 21 >> 0] = 13;
  F = yb + 22 | 0;
  a[F >> 0] = 17;
  a[yb + 23 >> 0] = 13;
  G = yb + 24 | 0;
  a[G >> 0] = 17;
  a[yb + 25 >> 0] = 13;
  H = yb + 26 | 0;
  a[H >> 0] = 17;
  a[yb + 27 >> 0] = 13;
  I = yb + 28 | 0;
  a[I >> 0] = 17;
  a[yb + 29 >> 0] = 13;
  h = yb + 30 | 0;
  a[h >> 0] = 17;
  a[yb + 31 >> 0] = 13;
  j = yb + 32 | 0;
  a[j >> 0] = 17;
  a[yb + 33 >> 0] = 13;
  k = yb + 34 | 0;
  a[k >> 0] = 17;
  a[yb + 35 >> 0] = 13;
  l = yb + 36 | 0;
  a[l >> 0] = 17;
  a[yb + 37 >> 0] = 13;
  m = yb + 38 | 0;
  a[m >> 0] = 17;
  a[yb + 39 >> 0] = 13;
  n = yb + 40 | 0;
  a[n >> 0] = 17;
  a[yb + 41 >> 0] = 13;
  a[yb + 8 >> 0] = 0;
  a[yb + 9 >> 0] = 1;
  o = yb + 74 | 0;
  a[o >> 0] = 0;
  a[yb + 75 >> 0] = 0;
  p = yb + 58 | 0;
  q = yb + 42 | 0;
  b[p >> 1] = 65535;
  b[p + 2 >> 1] = 65535;
  b[p + 4 >> 1] = 65535;
  b[p + 6 >> 1] = 65535;
  b[p + 8 >> 1] = 65535;
  b[p + 10 >> 1] = 65535;
  b[p + 12 >> 1] = 65535;
  b[p + 14 >> 1] = 65535;
  b[q >> 1] = 0;
  b[q + 2 >> 1] = 0;
  b[q + 4 >> 1] = 0;
  b[q + 6 >> 1] = 0;
  b[q + 8 >> 1] = 0;
  b[q + 10 >> 1] = 0;
  b[q + 12 >> 1] = 0;
  b[q + 14 >> 1] = 0;
  r = yb + 76 | 0;
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  a[r + 12 >> 0] = 0;
  c[Db >> 2] = 0;
  Be(yb + 92 | 0, Db);
  c[yb + 96 >> 2] = -1;
  s = yb + 104 | 0;
  c[s >> 2] = -1;
  c[s + 4 >> 2] = -1;
  s = yb + 112 | 0;
  t = yb + 116 | 0;
  u = yb + 188 | 0;
  J = yb + 120 | 0;
  K = J + 68 | 0;
  do {
   c[J >> 2] = 0;
   J = J + 4 | 0;
  } while ((J | 0) < (K | 0));
  a[u >> 0] = a[u >> 0] & -16 | 4;
  c[yb >> 2] = 2;
  c[y >> 2] = -1;
  c[r >> 2] = 57600;
  c[yb + 80 >> 2] = 0;
  c[yb + 84 >> 2] = 0;
  c[s >> 2] = -1;
  c[t >> 2] = -1;
  b[yb + 8 >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ra = f + 10 | 0;
  b[yb + 10 >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 12 | 0;
  b[z >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 14 | 0;
  b[A >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 16 | 0;
  b[B >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 18 | 0;
  b[C >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 20 | 0;
  b[E >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 22 | 0;
  b[F >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 24 | 0;
  b[G >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 26 | 0;
  b[H >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 28 | 0;
  b[I >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  Ra = f + 30 | 0;
  b[h >> 1] = d[Ra >> 0] | d[Ra + 1 >> 0] << 8;
  h = f + 32 | 0;
  b[j >> 1] = d[h >> 0] | d[h + 1 >> 0] << 8;
  h = f + 34 | 0;
  b[k >> 1] = d[h >> 0] | d[h + 1 >> 0] << 8;
  h = f + 36 | 0;
  b[l >> 1] = d[h >> 0] | d[h + 1 >> 0] << 8;
  h = f + 38 | 0;
  b[m >> 1] = d[h >> 0] | d[h + 1 >> 0] << 8;
  h = f + 40 | 0;
  b[n >> 1] = d[h >> 0] | d[h + 1 >> 0] << 8;
  a[q >> 0] = a[f + 42 >> 0] | 0;
  a[yb + 43 >> 0] = a[f + 43 >> 0] | 0;
  a[yb + 44 >> 0] = a[f + 44 >> 0] | 0;
  a[yb + 45 >> 0] = a[f + 45 >> 0] | 0;
  a[yb + 46 >> 0] = a[f + 46 >> 0] | 0;
  a[yb + 47 >> 0] = a[f + 47 >> 0] | 0;
  a[yb + 48 >> 0] = a[f + 48 >> 0] | 0;
  a[yb + 49 >> 0] = a[f + 49 >> 0] | 0;
  a[yb + 50 >> 0] = a[f + 50 >> 0] | 0;
  a[yb + 51 >> 0] = a[f + 51 >> 0] | 0;
  a[yb + 52 >> 0] = a[f + 52 >> 0] | 0;
  a[yb + 53 >> 0] = a[f + 53 >> 0] | 0;
  a[yb + 54 >> 0] = a[f + 54 >> 0] | 0;
  a[yb + 55 >> 0] = a[f + 55 >> 0] | 0;
  a[yb + 56 >> 0] = a[f + 56 >> 0] | 0;
  a[yb + 57 >> 0] = a[f + 57 >> 0] | 0;
  a[p >> 0] = a[w >> 0] | 0;
  a[yb + 59 >> 0] = a[f + 59 >> 0] | 0;
  a[yb + 60 >> 0] = a[f + 60 >> 0] | 0;
  a[yb + 61 >> 0] = a[f + 61 >> 0] | 0;
  a[yb + 62 >> 0] = a[f + 62 >> 0] | 0;
  a[yb + 63 >> 0] = a[f + 63 >> 0] | 0;
  a[yb + 64 >> 0] = a[f + 64 >> 0] | 0;
  a[yb + 65 >> 0] = a[f + 65 >> 0] | 0;
  a[yb + 66 >> 0] = a[f + 66 >> 0] | 0;
  a[yb + 67 >> 0] = a[f + 67 >> 0] | 0;
  a[yb + 68 >> 0] = a[x >> 0] | 0;
  a[yb + 69 >> 0] = a[f + 69 >> 0] | 0;
  a[yb + 70 >> 0] = a[f + 70 >> 0] | 0;
  a[yb + 71 >> 0] = a[f + 71 >> 0] | 0;
  a[yb + 72 >> 0] = a[f + 72 >> 0] | 0;
  a[yb + 73 >> 0] = a[f + 73 >> 0] | 0;
  b[o >> 1] = d[v >> 0] | d[v + 1 >> 0] << 8;
  h = f + 96 | 0;
  ud(jb, (c[8946] | 0) + 1168 | 0, yb);
  if ((h | 0) != (jb | 0)) {
   Pa = jb;
   Qa = c[Pa + 4 >> 2] | 0;
   Ra = h;
   c[Ra >> 2] = c[Pa >> 2];
   c[Ra + 4 >> 2] = Qa;
  }
  Ae(yb, 24562);
  c[yb + 4 >> 2] = -2;
  Ed(bb, yb);
  c[yb >> 2] = 0;
  za = jb + 4 | 0;
  Aa = jb + 6 | 0;
  a[Aa >> 0] = 17;
  a[jb + 7 >> 0] = 13;
  Ba = jb + 8 | 0;
  a[Ba >> 0] = 17;
  a[jb + 9 >> 0] = 13;
  Ca = jb + 10 | 0;
  a[Ca >> 0] = 17;
  a[jb + 11 >> 0] = 13;
  Da = jb + 12 | 0;
  a[Da >> 0] = 17;
  a[jb + 13 >> 0] = 13;
  Ea = jb + 14 | 0;
  a[Ea >> 0] = 17;
  a[jb + 15 >> 0] = 13;
  Fa = jb + 16 | 0;
  a[Fa >> 0] = 17;
  a[jb + 17 >> 0] = 13;
  Ga = jb + 18 | 0;
  a[Ga >> 0] = 17;
  a[jb + 19 >> 0] = 13;
  Ha = jb + 20 | 0;
  a[Ha >> 0] = 17;
  a[jb + 21 >> 0] = 13;
  Ia = jb + 22 | 0;
  a[Ia >> 0] = 17;
  a[jb + 23 >> 0] = 13;
  Ja = jb + 24 | 0;
  a[Ja >> 0] = 17;
  a[jb + 25 >> 0] = 13;
  Ka = jb + 26 | 0;
  a[Ka >> 0] = 17;
  a[jb + 27 >> 0] = 13;
  La = jb + 28 | 0;
  a[La >> 0] = 17;
  a[jb + 29 >> 0] = 13;
  Ma = jb + 30 | 0;
  a[Ma >> 0] = 17;
  a[jb + 31 >> 0] = 13;
  Na = jb + 32 | 0;
  a[Na >> 0] = 17;
  a[jb + 33 >> 0] = 13;
  a[jb >> 0] = 0;
  a[jb + 1 >> 0] = 1;
  Oa = jb + 66 | 0;
  Pa = jb + 50 | 0;
  Qa = jb + 34 | 0;
  b[Pa >> 1] = 65535;
  b[Pa + 2 >> 1] = 65535;
  b[Pa + 4 >> 1] = 65535;
  b[Pa + 6 >> 1] = 65535;
  b[Pa + 8 >> 1] = 65535;
  b[Pa + 10 >> 1] = 65535;
  b[Pa + 12 >> 1] = 65535;
  b[Pa + 14 >> 1] = 65535;
  b[Qa >> 1] = 0;
  b[Qa + 2 >> 1] = 0;
  b[Qa + 4 >> 1] = 0;
  b[Qa + 6 >> 1] = 0;
  b[Qa + 8 >> 1] = 0;
  b[Qa + 10 >> 1] = 0;
  b[Qa + 12 >> 1] = 0;
  b[Qa + 14 >> 1] = 0;
  b[jb + 2 >> 1] = 768;
  a[Pa >> 0] = 0;
  a[Qa >> 0] = 0;
  b[jb + 4 >> 1] = 778;
  Ra = jb + 60 | 0;
  a[Ra >> 0] = 1;
  a[jb + 35 >> 0] = 16;
  a[jb + 67 >> 0] = 32;
  a[Oa >> 0] = 2;
  a : do if (!3) {
   h = 21651;
   xb = 17;
  } else {
   h = 21651;
   j = 21651;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break a;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     xb = 17;
     break;
    }
   }
  } while (0);
  if ((xb | 0) == 17) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 21651 | 0;
  if ((h | 0) > 0) {
   l = bf(h + 9 | 0) | 0;
   ya = l;
   c[ya >> 2] = 0;
   c[ya + 4 >> 2] = 0;
   c[l >> 2] = 0;
   c[l >> 2] = (c[l >> 2] | 0) + 1;
   c[l + 4 >> 2] = h;
   ya = l + 8 | 0;
   c[kb >> 2] = ya;
   Af(ya | 0, 21651, h | 0) | 0;
   a[ya + h >> 0] = 0;
  } else {
   c[kb >> 2] = 0;
   l = 0;
  }
  b : do if (!3) {
   h = 22231;
   xb = 28;
  } else {
   h = 22231;
   j = 22231;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break b;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     xb = 28;
     break;
    }
   }
  } while (0);
  if ((xb | 0) == 28) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 22231 | 0;
  if ((h | 0) > 0) {
   k = bf(h + 9 | 0) | 0;
   ya = k;
   c[ya >> 2] = 0;
   c[ya + 4 >> 2] = 0;
   c[k >> 2] = 0;
   c[k >> 2] = (c[k >> 2] | 0) + 1;
   c[k + 4 >> 2] = h;
   ya = k + 8 | 0;
   c[ib >> 2] = ya;
   Af(ya | 0, 22231, h | 0) | 0;
   a[ya + h >> 0] = 0;
  } else {
   c[ib >> 2] = 0;
   k = 0;
  }
  j = bb + 16 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   ya = c[h >> 2] | 0;
   c[h >> 2] = ya - 1;
   if ((ya | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = bb + 20 | 0;
    c[h >> 2] = 0;
   } else h = bb + 20 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = l;
  c[bb + 20 >> 2] = c[kb >> 2];
  if (l | 0) {
   ya = l;
   c[ya >> 2] = (c[ya >> 2] | 0) + 1;
  }
  j = bb + 56 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   ya = c[h >> 2] | 0;
   c[h >> 2] = ya - 1;
   if ((ya | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = bb + 60 | 0;
    c[h >> 2] = 0;
   } else h = bb + 60 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = k;
  c[bb + 60 >> 2] = c[ib >> 2];
  h = k;
  if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
  m = bb + 256 | 0;
  b[m >> 1] = b[jb >> 1] | 0;
  n = bb + 258 | 0;
  o = jb + 2 | 0;
  b[n >> 1] = b[o >> 1] | 0;
  p = bb + 260 | 0;
  b[p >> 1] = b[za >> 1] | 0;
  q = bb + 262 | 0;
  b[q >> 1] = b[Aa >> 1] | 0;
  r = bb + 264 | 0;
  b[r >> 1] = b[Ba >> 1] | 0;
  s = bb + 266 | 0;
  b[s >> 1] = b[Ca >> 1] | 0;
  t = bb + 268 | 0;
  b[t >> 1] = b[Da >> 1] | 0;
  u = bb + 270 | 0;
  b[u >> 1] = b[Ea >> 1] | 0;
  v = bb + 272 | 0;
  b[v >> 1] = b[Fa >> 1] | 0;
  w = bb + 274 | 0;
  b[w >> 1] = b[Ga >> 1] | 0;
  x = bb + 276 | 0;
  b[x >> 1] = b[Ha >> 1] | 0;
  y = bb + 278 | 0;
  b[y >> 1] = b[Ia >> 1] | 0;
  z = bb + 280 | 0;
  b[z >> 1] = b[Ja >> 1] | 0;
  A = bb + 282 | 0;
  b[A >> 1] = b[Ka >> 1] | 0;
  B = bb + 284 | 0;
  b[B >> 1] = b[La >> 1] | 0;
  C = bb + 286 | 0;
  b[C >> 1] = b[Ma >> 1] | 0;
  E = bb + 288 | 0;
  b[E >> 1] = b[Na >> 1] | 0;
  H = b[Qa >> 1] | 0;
  F = bb + 290 | 0;
  a[F >> 0] = H;
  G = bb + 291 | 0;
  a[G >> 0] = (H & 65535) >>> 8;
  H = jb + 36 | 0;
  K = b[H >> 1] | 0;
  I = bb + 292 | 0;
  a[I >> 0] = K;
  J = bb + 293 | 0;
  a[J >> 0] = (K & 65535) >>> 8;
  K = jb + 38 | 0;
  N = b[K >> 1] | 0;
  L = bb + 294 | 0;
  a[L >> 0] = N;
  M = bb + 295 | 0;
  a[M >> 0] = (N & 65535) >>> 8;
  N = jb + 40 | 0;
  Q = b[N >> 1] | 0;
  O = bb + 296 | 0;
  a[O >> 0] = Q;
  P = bb + 297 | 0;
  a[P >> 0] = (Q & 65535) >>> 8;
  Q = jb + 42 | 0;
  T = b[Q >> 1] | 0;
  R = bb + 298 | 0;
  a[R >> 0] = T;
  S = bb + 299 | 0;
  a[S >> 0] = (T & 65535) >>> 8;
  T = jb + 44 | 0;
  W = b[T >> 1] | 0;
  U = bb + 300 | 0;
  a[U >> 0] = W;
  V = bb + 301 | 0;
  a[V >> 0] = (W & 65535) >>> 8;
  W = jb + 46 | 0;
  Z = b[W >> 1] | 0;
  X = bb + 302 | 0;
  a[X >> 0] = Z;
  Y = bb + 303 | 0;
  a[Y >> 0] = (Z & 65535) >>> 8;
  Z = jb + 48 | 0;
  da = b[Z >> 1] | 0;
  _ = bb + 304 | 0;
  a[_ >> 0] = da;
  aa = bb + 305 | 0;
  a[aa >> 0] = (da & 65535) >>> 8;
  da = b[Pa >> 1] | 0;
  ba = bb + 306 | 0;
  a[ba >> 0] = da;
  ca = bb + 307 | 0;
  a[ca >> 0] = (da & 65535) >>> 8;
  da = jb + 52 | 0;
  ga = b[da >> 1] | 0;
  ea = bb + 308 | 0;
  a[ea >> 0] = ga;
  fa = bb + 309 | 0;
  a[fa >> 0] = (ga & 65535) >>> 8;
  ga = jb + 54 | 0;
  ja = b[ga >> 1] | 0;
  ha = bb + 310 | 0;
  a[ha >> 0] = ja;
  ia = bb + 311 | 0;
  a[ia >> 0] = (ja & 65535) >>> 8;
  ja = jb + 56 | 0;
  ma = b[ja >> 1] | 0;
  ka = bb + 312 | 0;
  a[ka >> 0] = ma;
  la = bb + 313 | 0;
  a[la >> 0] = (ma & 65535) >>> 8;
  ma = jb + 58 | 0;
  ra = b[ma >> 1] | 0;
  na = bb + 314 | 0;
  a[na >> 0] = ra;
  oa = bb + 315 | 0;
  a[oa >> 0] = (ra & 65535) >>> 8;
  ra = b[Ra >> 1] | 0;
  pa = bb + 316 | 0;
  a[pa >> 0] = ra;
  qa = bb + 317 | 0;
  a[qa >> 0] = (ra & 65535) >>> 8;
  ra = jb + 62 | 0;
  ua = b[ra >> 1] | 0;
  sa = bb + 318 | 0;
  a[sa >> 0] = ua;
  ta = bb + 319 | 0;
  a[ta >> 0] = (ua & 65535) >>> 8;
  ua = jb + 64 | 0;
  ya = b[ua >> 1] | 0;
  wa = bb + 320 | 0;
  a[wa >> 0] = ya;
  xa = bb + 321 | 0;
  a[xa >> 0] = (ya & 65535) >>> 8;
  ya = bb + 322 | 0;
  b[ya >> 1] = b[Oa >> 1] | 0;
  if (k | 0) {
   j = c[h >> 2] | 0;
   c[h >> 2] = j - 1;
   if ((j | 0) == 1) {
    cf(k);
    c[ib >> 2] = 0;
   }
   c[ib >> 2] = 0;
  }
  if (l | 0) {
   j = l;
   k = c[j >> 2] | 0;
   c[j >> 2] = k - 1;
   if ((k | 0) == 1) {
    cf(l);
    c[kb >> 2] = 0;
   }
   c[kb >> 2] = 0;
  }
  c : do if (!3) {
   h = 22631;
   xb = 61;
  } else {
   h = 22631;
   j = 22631;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break c;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     xb = 61;
     break;
    }
   }
  } while (0);
  if ((xb | 0) == 61) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 22631 | 0;
  if ((h | 0) > 0) {
   l = bf(h + 9 | 0) | 0;
   k = l;
   c[k >> 2] = 0;
   c[k + 4 >> 2] = 0;
   c[l >> 2] = 0;
   c[l >> 2] = (c[l >> 2] | 0) + 1;
   c[l + 4 >> 2] = h;
   k = l + 8 | 0;
   c[ub >> 2] = k;
   Af(k | 0, 22631, h | 0) | 0;
   a[k + h >> 0] = 0;
  } else {
   c[ub >> 2] = 0;
   l = 0;
  }
  d : do if (!0) {
   h = 23224;
   xb = 72;
  } else {
   h = 23224;
   j = 23224;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break d;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     xb = 72;
     break;
    }
   }
  } while (0);
  if ((xb | 0) == 72) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 23224 | 0;
  if ((h | 0) > 0) {
   k = bf(h + 9 | 0) | 0;
   j = k;
   c[j >> 2] = 0;
   c[j + 4 >> 2] = 0;
   c[k >> 2] = 0;
   c[k >> 2] = (c[k >> 2] | 0) + 1;
   c[k + 4 >> 2] = h;
   j = k + 8 | 0;
   c[Sa >> 2] = j;
   Af(j | 0, 23224, h | 0) | 0;
   a[j + h >> 0] = 0;
  } else {
   c[Sa >> 2] = 0;
   k = 0;
  }
  j = bb + 24 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   Gb = c[h >> 2] | 0;
   c[h >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = bb + 28 | 0;
    c[h >> 2] = 0;
   } else h = bb + 28 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = l;
  c[bb + 28 >> 2] = c[ub >> 2];
  if (l | 0) {
   Gb = l;
   c[Gb >> 2] = (c[Gb >> 2] | 0) + 1;
  }
  j = bb + 64 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   Gb = c[h >> 2] | 0;
   c[h >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = bb + 68 | 0;
    c[h >> 2] = 0;
   } else h = bb + 68 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = k;
  c[bb + 68 >> 2] = c[Sa >> 2];
  h = k;
  if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
  b[m >> 1] = b[jb >> 1] | 0;
  b[n >> 1] = b[o >> 1] | 0;
  b[p >> 1] = b[za >> 1] | 0;
  b[q >> 1] = b[Aa >> 1] | 0;
  b[r >> 1] = b[Ba >> 1] | 0;
  b[s >> 1] = b[Ca >> 1] | 0;
  b[t >> 1] = b[Da >> 1] | 0;
  b[u >> 1] = b[Ea >> 1] | 0;
  b[v >> 1] = b[Fa >> 1] | 0;
  b[w >> 1] = b[Ga >> 1] | 0;
  b[x >> 1] = b[Ha >> 1] | 0;
  b[y >> 1] = b[Ia >> 1] | 0;
  b[z >> 1] = b[Ja >> 1] | 0;
  b[A >> 1] = b[Ka >> 1] | 0;
  b[B >> 1] = b[La >> 1] | 0;
  b[C >> 1] = b[Ma >> 1] | 0;
  b[E >> 1] = b[Na >> 1] | 0;
  Gb = b[Qa >> 1] | 0;
  a[F >> 0] = Gb;
  a[G >> 0] = (Gb & 65535) >>> 8;
  Gb = b[H >> 1] | 0;
  a[I >> 0] = Gb;
  a[J >> 0] = (Gb & 65535) >>> 8;
  Gb = b[K >> 1] | 0;
  a[L >> 0] = Gb;
  a[M >> 0] = (Gb & 65535) >>> 8;
  Gb = b[N >> 1] | 0;
  a[O >> 0] = Gb;
  a[P >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Q >> 1] | 0;
  a[R >> 0] = Gb;
  a[S >> 0] = (Gb & 65535) >>> 8;
  Gb = b[T >> 1] | 0;
  a[U >> 0] = Gb;
  a[V >> 0] = (Gb & 65535) >>> 8;
  Gb = b[W >> 1] | 0;
  a[X >> 0] = Gb;
  a[Y >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Z >> 1] | 0;
  a[_ >> 0] = Gb;
  a[aa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Pa >> 1] | 0;
  a[ba >> 0] = Gb;
  a[ca >> 0] = (Gb & 65535) >>> 8;
  Gb = b[da >> 1] | 0;
  a[ea >> 0] = Gb;
  a[fa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ga >> 1] | 0;
  a[ha >> 0] = Gb;
  a[ia >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ja >> 1] | 0;
  a[ka >> 0] = Gb;
  a[la >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ma >> 1] | 0;
  a[na >> 0] = Gb;
  a[oa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Ra >> 1] | 0;
  a[pa >> 0] = Gb;
  a[qa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ra >> 1] | 0;
  a[sa >> 0] = Gb;
  a[ta >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ua >> 1] | 0;
  a[wa >> 0] = Gb;
  a[xa >> 0] = (Gb & 65535) >>> 8;
  b[ya >> 1] = b[Oa >> 1] | 0;
  if (k | 0) {
   Gb = c[h >> 2] | 0;
   c[h >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(k);
    c[Sa >> 2] = 0;
   }
   c[Sa >> 2] = 0;
  }
  if (l | 0) {
   Sa = l;
   Gb = c[Sa >> 2] | 0;
   c[Sa >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(l);
    c[ub >> 2] = 0;
   }
   c[ub >> 2] = 0;
  }
  e : do if (!0) {
   h = 23612;
   xb = 105;
  } else {
   h = 23612;
   j = 23612;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break e;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     xb = 105;
     break;
    }
   }
  } while (0);
  if ((xb | 0) == 105) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 23612 | 0;
  if ((h | 0) > 0) {
   l = bf(h + 9 | 0) | 0;
   Gb = l;
   c[Gb >> 2] = 0;
   c[Gb + 4 >> 2] = 0;
   c[l >> 2] = 0;
   c[l >> 2] = (c[l >> 2] | 0) + 1;
   c[l + 4 >> 2] = h;
   Gb = l + 8 | 0;
   c[Xa >> 2] = Gb;
   Af(Gb | 0, 23612, h | 0) | 0;
   a[Gb + h >> 0] = 0;
  } else {
   c[Xa >> 2] = 0;
   l = 0;
  }
  f : do if (!1) {
   h = 24173;
   xb = 116;
  } else {
   h = 24173;
   j = 24173;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break f;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     xb = 116;
     break;
    }
   }
  } while (0);
  if ((xb | 0) == 116) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 24173 | 0;
  if ((h | 0) > 0) {
   k = bf(h + 9 | 0) | 0;
   Gb = k;
   c[Gb >> 2] = 0;
   c[Gb + 4 >> 2] = 0;
   c[k >> 2] = 0;
   c[k >> 2] = (c[k >> 2] | 0) + 1;
   c[k + 4 >> 2] = h;
   Gb = k + 8 | 0;
   c[Va >> 2] = Gb;
   Af(Gb | 0, 24173, h | 0) | 0;
   a[Gb + h >> 0] = 0;
  } else {
   c[Va >> 2] = 0;
   k = 0;
  }
  j = bb + 32 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   Gb = c[h >> 2] | 0;
   c[h >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = bb + 36 | 0;
    c[h >> 2] = 0;
   } else h = bb + 36 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = l;
  c[bb + 36 >> 2] = c[Xa >> 2];
  if (l | 0) {
   Gb = l;
   c[Gb >> 2] = (c[Gb >> 2] | 0) + 1;
  }
  j = bb + 72 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   Gb = c[h >> 2] | 0;
   c[h >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = bb + 76 | 0;
    c[h >> 2] = 0;
   } else h = bb + 76 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = k;
  c[bb + 76 >> 2] = c[Va >> 2];
  h = k;
  if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
  b[m >> 1] = b[jb >> 1] | 0;
  b[n >> 1] = b[o >> 1] | 0;
  b[p >> 1] = b[za >> 1] | 0;
  b[q >> 1] = b[Aa >> 1] | 0;
  b[r >> 1] = b[Ba >> 1] | 0;
  b[s >> 1] = b[Ca >> 1] | 0;
  b[t >> 1] = b[Da >> 1] | 0;
  b[u >> 1] = b[Ea >> 1] | 0;
  b[v >> 1] = b[Fa >> 1] | 0;
  b[w >> 1] = b[Ga >> 1] | 0;
  b[x >> 1] = b[Ha >> 1] | 0;
  b[y >> 1] = b[Ia >> 1] | 0;
  b[z >> 1] = b[Ja >> 1] | 0;
  b[A >> 1] = b[Ka >> 1] | 0;
  b[B >> 1] = b[La >> 1] | 0;
  b[C >> 1] = b[Ma >> 1] | 0;
  b[E >> 1] = b[Na >> 1] | 0;
  Gb = b[Qa >> 1] | 0;
  a[F >> 0] = Gb;
  a[G >> 0] = (Gb & 65535) >>> 8;
  Gb = b[H >> 1] | 0;
  a[I >> 0] = Gb;
  a[J >> 0] = (Gb & 65535) >>> 8;
  Gb = b[K >> 1] | 0;
  a[L >> 0] = Gb;
  a[M >> 0] = (Gb & 65535) >>> 8;
  Gb = b[N >> 1] | 0;
  a[O >> 0] = Gb;
  a[P >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Q >> 1] | 0;
  a[R >> 0] = Gb;
  a[S >> 0] = (Gb & 65535) >>> 8;
  Gb = b[T >> 1] | 0;
  a[U >> 0] = Gb;
  a[V >> 0] = (Gb & 65535) >>> 8;
  Gb = b[W >> 1] | 0;
  a[X >> 0] = Gb;
  a[Y >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Z >> 1] | 0;
  a[_ >> 0] = Gb;
  a[aa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Pa >> 1] | 0;
  a[ba >> 0] = Gb;
  a[ca >> 0] = (Gb & 65535) >>> 8;
  Gb = b[da >> 1] | 0;
  a[ea >> 0] = Gb;
  a[fa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ga >> 1] | 0;
  a[ha >> 0] = Gb;
  a[ia >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ja >> 1] | 0;
  a[ka >> 0] = Gb;
  a[la >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ma >> 1] | 0;
  a[na >> 0] = Gb;
  a[oa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[Ra >> 1] | 0;
  a[pa >> 0] = Gb;
  a[qa >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ra >> 1] | 0;
  a[sa >> 0] = Gb;
  a[ta >> 0] = (Gb & 65535) >>> 8;
  Gb = b[ua >> 1] | 0;
  a[wa >> 0] = Gb;
  a[xa >> 0] = (Gb & 65535) >>> 8;
  b[ya >> 1] = b[Oa >> 1] | 0;
  if (k | 0) {
   Gb = c[h >> 2] | 0;
   c[h >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(k);
    c[Va >> 2] = 0;
   }
   c[Va >> 2] = 0;
  }
  if (l | 0) {
   Va = l;
   Gb = c[Va >> 2] | 0;
   c[Va >> 2] = Gb - 1;
   if ((Gb | 0) == 1) {
    cf(l);
    c[Xa >> 2] = 0;
   }
   c[Xa >> 2] = 0;
  }
  c[_a >> 2] = 0;
  c[_a + 4 >> 2] = 0;
  c[_a + 8 >> 2] = 0;
  c[_a + 12 >> 2] = 0;
  c[_a + 16 >> 2] = 0;
  a[_a + 20 >> 0] = 10;
  c[_a + 24 >> 2] = 1;
  c[_a + 28 >> 2] = 0;
  a[_a + 32 >> 0] = 10;
  c[_a + 36 >> 2] = 1;
  c[_a + 40 >> 2] = 0;
  a[_a + 44 >> 0] = 10;
  c[_a + 48 >> 2] = 1;
  c[_a + 52 >> 2] = 0;
  a[_a + 56 >> 0] = 10;
  c[_a + 60 >> 2] = 1;
  c[_a + 64 >> 2] = 0;
  a[_a + 68 >> 0] = 10;
  c[_a + 72 >> 2] = 1;
  c[_a + 76 >> 2] = 0;
  a[_a + 80 >> 0] = 10;
  c[_a + 84 >> 2] = 1;
  c[_a + 88 >> 2] = 0;
  a[_a + 92 >> 0] = 10;
  c[_a + 96 >> 2] = 1;
  c[_a + 100 >> 2] = 0;
  a[_a + 104 >> 0] = 10;
  c[_a + 108 >> 2] = 1;
  c[_a + 112 >> 2] = 0;
  a[_a + 116 >> 0] = 10;
  c[_a + 120 >> 2] = 1;
  c[_a + 124 >> 2] = 0;
  a[_a + 128 >> 0] = 10;
  c[_a + 132 >> 2] = 1;
  c[_a + 136 >> 2] = 0;
  a[_a + 140 >> 0] = 10;
  c[_a + 144 >> 2] = 1;
  c[_a + 148 >> 2] = 0;
  a[_a + 152 >> 0] = 10;
  c[_a + 156 >> 2] = 1;
  c[_a + 160 >> 2] = 0;
  a[_a + 164 >> 0] = 10;
  c[_a + 168 >> 2] = 1;
  c[_a + 172 >> 2] = 0;
  a[_a + 176 >> 0] = 10;
  c[_a + 180 >> 2] = 1;
  c[_a + 184 >> 2] = 0;
  a[_a + 188 >> 0] = 10;
  c[_a + 192 >> 2] = 1;
  c[_a + 196 >> 2] = 0;
  a[_a + 200 >> 0] = 10;
  c[_a + 204 >> 2] = 1;
  h = _a;
  c[h >> 2] = 2124503556;
  c[h + 4 >> 2] = -923214409;
  Ae(Ya, 24576);
  fd(_a, Ya, 1);
  c[Ya >> 2] = 0;
  Ae(Za, 24586);
  Fd(bb, Za, _a, 0);
  c[Za >> 2] = 0;
  c[db >> 2] = 0;
  c[db + 4 >> 2] = 0;
  c[db + 8 >> 2] = -1;
  c[db + 12 >> 2] = -1;
  c[db + 16 >> 2] = 0;
  c[db + 20 >> 2] = -1;
  c[db + 24 >> 2] = -1;
  c[db + 28 >> 2] = 0;
  c[db + 32 >> 2] = -1;
  c[db + 36 >> 2] = -1;
  c[db + 40 >> 2] = 0;
  c[db + 44 >> 2] = -1;
  c[db + 48 >> 2] = -1;
  c[db + 52 >> 2] = 0;
  c[db + 56 >> 2] = -1;
  c[db + 60 >> 2] = -1;
  c[db + 64 >> 2] = 0;
  c[db + 68 >> 2] = -1;
  c[db + 72 >> 2] = -1;
  c[db + 76 >> 2] = 0;
  c[db + 80 >> 2] = -1;
  c[db + 84 >> 2] = -1;
  c[db + 88 >> 2] = 0;
  c[db + 92 >> 2] = -1;
  c[db + 96 >> 2] = -1;
  c[db + 100 >> 2] = 0;
  c[db + 104 >> 2] = -1;
  c[db + 108 >> 2] = -1;
  c[db + 112 >> 2] = 0;
  c[db + 116 >> 2] = -1;
  c[db + 120 >> 2] = -1;
  c[db + 124 >> 2] = 0;
  c[db + 128 >> 2] = -1;
  c[db + 132 >> 2] = -1;
  c[db + 136 >> 2] = 0;
  c[db + 140 >> 2] = -1;
  c[db + 144 >> 2] = -1;
  c[db + 148 >> 2] = 0;
  c[db + 152 >> 2] = -1;
  c[db + 156 >> 2] = -1;
  c[db + 160 >> 2] = 0;
  c[db + 164 >> 2] = -1;
  c[db + 168 >> 2] = -1;
  c[db + 172 >> 2] = 0;
  c[db + 176 >> 2] = -1;
  c[db + 180 >> 2] = -1;
  c[db + 184 >> 2] = 0;
  c[db + 188 >> 2] = -1;
  c[db + 192 >> 2] = -1;
  Ae($a, 24595);
  h = c[db >> 2] | 0;
  c[db >> 2] = h + 1;
  j = db + 4 + (h * 12 | 0) | 0;
  Be(Db, $a);
  k = Db + 4 | 0;
  c[k >> 2] = 0;
  c[Db + 8 >> 2] = 0;
  if ((Db | 0) != (j | 0)) {
   c[j >> 2] = 0;
   Be(j, Db);
   c[Db >> 2] = 0;
  }
  Gb = k;
  j = c[Gb + 4 >> 2] | 0;
  h = db + 4 + (h * 12 | 0) + 4 | 0;
  c[h >> 2] = c[Gb >> 2];
  c[h + 4 >> 2] = j;
  c[$a >> 2] = 0;
  Ae(ab, 24599);
  h = bb + 2632 | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = j + 1;
  h = bb + 2636 + (j * 204 | 0) | 0;
  if ((h | 0) != (ab | 0)) {
   c[h >> 2] = 0;
   Be(h, ab);
  }
  Gb = bb + 2636 + (j * 204 | 0) + 4 | 0;
  c[Gb >> 2] = c[db >> 2];
  if ((Gb | 0) != (db | 0)) {
   h = 0;
   do {
    $a = bb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) | 0;
    c[$a >> 2] = 0;
    Be($a, db + 4 + (h * 12 | 0) | 0);
    $a = db + 4 + (h * 12 | 0) + 4 | 0;
    ab = c[$a + 4 >> 2] | 0;
    Gb = bb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) + 4 | 0;
    c[Gb >> 2] = c[$a >> 2];
    c[Gb + 4 >> 2] = ab;
    h = h + 1 | 0;
   } while ((h | 0) != 16);
  }
  c[bb + 2636 + (j * 204 | 0) + 200 >> 2] = 1;
  yd(gb, (c[8946] | 0) + 1168 | 0, bb);
  c[bb + 3028 >> 2] = 0;
  c[bb + 3016 >> 2] = 0;
  c[bb + 3004 >> 2] = 0;
  c[bb + 2992 >> 2] = 0;
  c[bb + 2980 >> 2] = 0;
  c[bb + 2968 >> 2] = 0;
  c[bb + 2956 >> 2] = 0;
  c[bb + 2944 >> 2] = 0;
  c[bb + 2932 >> 2] = 0;
  c[bb + 2920 >> 2] = 0;
  c[bb + 2908 >> 2] = 0;
  c[bb + 2896 >> 2] = 0;
  c[bb + 2884 >> 2] = 0;
  c[bb + 2872 >> 2] = 0;
  c[bb + 2860 >> 2] = 0;
  c[bb + 2848 >> 2] = 0;
  c[bb + 2840 >> 2] = 0;
  c[bb + 2824 >> 2] = 0;
  c[bb + 2812 >> 2] = 0;
  c[bb + 2800 >> 2] = 0;
  c[bb + 2788 >> 2] = 0;
  c[bb + 2776 >> 2] = 0;
  c[bb + 2764 >> 2] = 0;
  c[bb + 2752 >> 2] = 0;
  c[bb + 2740 >> 2] = 0;
  c[bb + 2728 >> 2] = 0;
  c[bb + 2716 >> 2] = 0;
  c[bb + 2704 >> 2] = 0;
  c[bb + 2692 >> 2] = 0;
  c[bb + 2680 >> 2] = 0;
  c[bb + 2668 >> 2] = 0;
  c[bb + 2656 >> 2] = 0;
  c[bb + 2644 >> 2] = 0;
  c[bb + 2636 >> 2] = 0;
  c[bb + 2548 >> 2] = 0;
  c[bb + 2536 >> 2] = 0;
  c[bb + 2524 >> 2] = 0;
  c[bb + 2512 >> 2] = 0;
  c[bb + 2500 >> 2] = 0;
  c[bb + 2488 >> 2] = 0;
  c[bb + 2476 >> 2] = 0;
  c[bb + 2464 >> 2] = 0;
  c[bb + 2452 >> 2] = 0;
  c[bb + 2440 >> 2] = 0;
  c[bb + 2428 >> 2] = 0;
  c[bb + 2416 >> 2] = 0;
  c[bb + 2404 >> 2] = 0;
  c[bb + 2392 >> 2] = 0;
  c[bb + 2380 >> 2] = 0;
  c[bb + 2368 >> 2] = 0;
  c[bb + 2344 >> 2] = 0;
  c[bb + 2260 >> 2] = 0;
  c[bb + 2248 >> 2] = 0;
  c[bb + 2236 >> 2] = 0;
  c[bb + 2224 >> 2] = 0;
  c[bb + 2212 >> 2] = 0;
  c[bb + 2200 >> 2] = 0;
  c[bb + 2188 >> 2] = 0;
  c[bb + 2176 >> 2] = 0;
  c[bb + 2164 >> 2] = 0;
  c[bb + 2152 >> 2] = 0;
  c[bb + 2140 >> 2] = 0;
  c[bb + 2128 >> 2] = 0;
  c[bb + 2116 >> 2] = 0;
  c[bb + 2104 >> 2] = 0;
  c[bb + 2092 >> 2] = 0;
  c[bb + 2080 >> 2] = 0;
  c[bb + 2056 >> 2] = 0;
  c[bb + 1972 >> 2] = 0;
  c[bb + 1960 >> 2] = 0;
  c[bb + 1948 >> 2] = 0;
  c[bb + 1936 >> 2] = 0;
  c[bb + 1924 >> 2] = 0;
  c[bb + 1912 >> 2] = 0;
  c[bb + 1900 >> 2] = 0;
  c[bb + 1888 >> 2] = 0;
  c[bb + 1876 >> 2] = 0;
  c[bb + 1864 >> 2] = 0;
  c[bb + 1852 >> 2] = 0;
  c[bb + 1840 >> 2] = 0;
  c[bb + 1828 >> 2] = 0;
  c[bb + 1816 >> 2] = 0;
  c[bb + 1804 >> 2] = 0;
  c[bb + 1792 >> 2] = 0;
  c[bb + 1768 >> 2] = 0;
  c[bb + 1684 >> 2] = 0;
  c[bb + 1672 >> 2] = 0;
  c[bb + 1660 >> 2] = 0;
  c[bb + 1648 >> 2] = 0;
  c[bb + 1636 >> 2] = 0;
  c[bb + 1624 >> 2] = 0;
  c[bb + 1612 >> 2] = 0;
  c[bb + 1600 >> 2] = 0;
  c[bb + 1588 >> 2] = 0;
  c[bb + 1576 >> 2] = 0;
  c[bb + 1564 >> 2] = 0;
  c[bb + 1552 >> 2] = 0;
  c[bb + 1540 >> 2] = 0;
  c[bb + 1528 >> 2] = 0;
  c[bb + 1516 >> 2] = 0;
  c[bb + 1504 >> 2] = 0;
  c[bb + 1480 >> 2] = 0;
  c[bb + 1396 >> 2] = 0;
  c[bb + 1384 >> 2] = 0;
  c[bb + 1372 >> 2] = 0;
  c[bb + 1360 >> 2] = 0;
  c[bb + 1348 >> 2] = 0;
  c[bb + 1336 >> 2] = 0;
  c[bb + 1324 >> 2] = 0;
  c[bb + 1312 >> 2] = 0;
  c[bb + 1300 >> 2] = 0;
  c[bb + 1288 >> 2] = 0;
  c[bb + 1276 >> 2] = 0;
  c[bb + 1264 >> 2] = 0;
  c[bb + 1252 >> 2] = 0;
  c[bb + 1240 >> 2] = 0;
  c[bb + 1228 >> 2] = 0;
  c[bb + 1216 >> 2] = 0;
  c[bb + 1192 >> 2] = 0;
  c[bb + 1108 >> 2] = 0;
  c[bb + 1096 >> 2] = 0;
  c[bb + 1084 >> 2] = 0;
  c[bb + 1072 >> 2] = 0;
  c[bb + 1060 >> 2] = 0;
  c[bb + 1048 >> 2] = 0;
  c[bb + 1036 >> 2] = 0;
  c[bb + 1024 >> 2] = 0;
  c[bb + 1012 >> 2] = 0;
  c[bb + 1e3 >> 2] = 0;
  c[bb + 988 >> 2] = 0;
  c[bb + 976 >> 2] = 0;
  c[bb + 964 >> 2] = 0;
  c[bb + 952 >> 2] = 0;
  c[bb + 940 >> 2] = 0;
  c[bb + 928 >> 2] = 0;
  c[bb + 904 >> 2] = 0;
  c[bb + 820 >> 2] = 0;
  c[bb + 808 >> 2] = 0;
  c[bb + 796 >> 2] = 0;
  c[bb + 784 >> 2] = 0;
  c[bb + 772 >> 2] = 0;
  c[bb + 760 >> 2] = 0;
  c[bb + 748 >> 2] = 0;
  c[bb + 736 >> 2] = 0;
  c[bb + 724 >> 2] = 0;
  c[bb + 712 >> 2] = 0;
  c[bb + 700 >> 2] = 0;
  c[bb + 688 >> 2] = 0;
  c[bb + 676 >> 2] = 0;
  c[bb + 664 >> 2] = 0;
  c[bb + 652 >> 2] = 0;
  c[bb + 640 >> 2] = 0;
  c[bb + 616 >> 2] = 0;
  c[bb + 532 >> 2] = 0;
  c[bb + 520 >> 2] = 0;
  c[bb + 508 >> 2] = 0;
  c[bb + 496 >> 2] = 0;
  c[bb + 484 >> 2] = 0;
  c[bb + 472 >> 2] = 0;
  c[bb + 460 >> 2] = 0;
  c[bb + 448 >> 2] = 0;
  c[bb + 436 >> 2] = 0;
  c[bb + 424 >> 2] = 0;
  c[bb + 412 >> 2] = 0;
  c[bb + 400 >> 2] = 0;
  c[bb + 388 >> 2] = 0;
  c[bb + 376 >> 2] = 0;
  c[bb + 364 >> 2] = 0;
  c[bb + 352 >> 2] = 0;
  c[bb + 328 >> 2] = 0;
  Sc(bb + 16 | 0);
  c[bb >> 2] = 0;
  Bd(Db, Ta, gb);
  h = Db + 36 | 0;
  b[h >> 1] = b[h >> 1] & -64 | 7;
  h = Db + 8 | 0;
  gb = e[h + 4 >> 1] & 65535;
  db = c[h >> 2] & -2013267968 | 1879048521;
  c[h >> 2] = db;
  b[h + 4 >> 1] = gb;
  Gb = c[8946] | 0;
  bb = Df(c[Gb + 476 >> 2] | 0, 0, 31) | 0;
  db = bb & -2147483648 | db & 2013264201;
  gb = D & 15 | gb & 65520;
  c[h >> 2] = db;
  b[h + 4 >> 1] = gb;
  Df(c[Gb + 480 >> 2] | 0, 0, 36) | 0;
  c[h >> 2] = db;
  b[h + 4 >> 1] = D & 496 | gb & 65039;
  h = Db + 40 | 0;
  b[h >> 1] = (c[Gb + 484 >> 2] & 65535) << 8 & 3840 | b[h >> 1] & -3841;
  h = f + 88 | 0;
  zd(hb, Gb + 1168 | 0, Db);
  if ((h | 0) != (hb | 0)) {
   gb = hb;
   hb = c[gb + 4 >> 2] | 0;
   Gb = h;
   c[Gb >> 2] = c[gb >> 2];
   c[Gb + 4 >> 2] = hb;
  }
  L = bf(8192) | 0;
  j = 0;
  k = 24608;
  while (1) {
   h = j << 3;
   l = k;
   m = 0;
   while (1) {
    Gb = (m << 10) + h | 0;
    a[L + Gb >> 0] = ((a[l >> 0] | 0) != 45) << 31 >> 31;
    a[L + (Gb | 1) >> 0] = ((a[l + 1 >> 0] | 0) != 45) << 31 >> 31;
    a[L + (Gb | 2) >> 0] = ((a[l + 2 >> 0] | 0) != 45) << 31 >> 31;
    a[L + (Gb | 3) >> 0] = ((a[l + 3 >> 0] | 0) != 45) << 31 >> 31;
    a[L + (Gb | 4) >> 0] = ((a[l + 4 >> 0] | 0) != 45) << 31 >> 31;
    a[L + (Gb | 5) >> 0] = ((a[l + 5 >> 0] | 0) != 45) << 31 >> 31;
    a[L + (Gb | 6) >> 0] = ((a[l + 6 >> 0] | 0) != 45) << 31 >> 31;
    a[L + (Gb | 7) >> 0] = ((a[l + 7 >> 0] | 0) != 45) << 31 >> 31;
    m = m + 1 | 0;
    if ((m | 0) == 8) break; else l = l + 8 | 0;
   }
   j = j + 1 | 0;
   if ((j | 0) == 128) break; else k = k + 64 | 0;
  }
  c[ib >> 2] = 0;
  c[ib + 4 >> 2] = 0;
  c[ib + 8 >> 2] = 0;
  c[ib + 12 >> 2] = 0;
  c[ib + 16 >> 2] = 0;
  c[ib + 20 >> 2] = 0;
  c[ib + 24 >> 2] = 1;
  c[ib + 28 >> 2] = 0;
  c[ib + 32 >> 2] = 20;
  h = ib + 40 | 0;
  j = h;
  c[j >> 2] = -1;
  c[j + 4 >> 2] = -1;
  b[ib + 48 >> 1] = 21;
  g[ib + 52 >> 2] = 0.0;
  g[ib + 56 >> 2] = 0.0;
  g[ib + 60 >> 2] = 0.0;
  g[ib + 64 >> 2] = 1.0;
  g[ib + 68 >> 2] = 1.0;
  a[ib + 72 >> 0] = 0;
  a[ib + 73 >> 0] = 3;
  c[Db >> 2] = 0;
  j = ib + 76 | 0;
  Be(j, Db);
  k = ib + 80 | 0;
  c[k >> 2] = -1;
  l = ib + 88 | 0;
  m = l;
  c[m >> 2] = -1;
  c[m + 4 >> 2] = -1;
  m = ib + 680 | 0;
  Bf(ib + 96 | 0, 0, 584) | 0;
  a[m >> 0] = a[m >> 0] & -128;
  J = kb;
  o = ib;
  K = J + 36 | 0;
  do {
   c[J >> 2] = c[o >> 2];
   J = J + 4 | 0;
   o = o + 4 | 0;
  } while ((J | 0) < (K | 0));
  t = kb + 40 | 0;
  p = h;
  s = c[p + 4 >> 2] | 0;
  r = t;
  c[r >> 2] = c[p >> 2];
  c[r + 4 >> 2] = s;
  r = kb + 48 | 0;
  s = ib + 48 | 0;
  c[r >> 2] = c[s >> 2];
  c[r + 4 >> 2] = c[s + 4 >> 2];
  c[r + 8 >> 2] = c[s + 8 >> 2];
  c[r + 12 >> 2] = c[s + 12 >> 2];
  c[r + 16 >> 2] = c[s + 16 >> 2];
  c[r + 20 >> 2] = c[s + 20 >> 2];
  c[r + 24 >> 2] = c[s + 24 >> 2];
  s = kb + 76 | 0;
  Be(s, j);
  p = kb + 80 | 0;
  c[p >> 2] = c[k >> 2];
  n = kb + 88 | 0;
  k = l;
  q = c[k + 4 >> 2] | 0;
  l = n;
  c[l >> 2] = c[k >> 2];
  c[l + 4 >> 2] = q;
  l = kb + 96 | 0;
  ld(l, ib + 96 | 0);
  q = kb + 680 | 0;
  a[q >> 0] = a[m >> 0] | 2;
  c[kb + 4 >> 2] = 0;
  c[kb + 8 >> 2] = 1024;
  c[kb + 12 >> 2] = 8;
  c[kb + 24 >> 2] = 1;
  c[kb + 28 >> 2] = 7;
  c[kb + 96 >> 2] = 1;
  c[kb + 100 >> 2] = 1;
  c[ib + 76 >> 2] = 0;
  k = kb + 48 | 0;
  b[k >> 1] = b[k >> 1] & -4048;
  c[kb + 392 >> 2] = 8192;
  k = c[8946] | 0;
  h = k + 1192 | 0;
  j = kb + 76 | 0;
  be(ub, h, j);
  do if ((c[ub + 4 >> 2] | 0) == -1) {
   G = k + 1576 | 0;
   E = c[G >> 2] | 0;
   c[G >> 2] = E + 1;
   G = k + 1616 | 0;
   F = c[G >> 2] | 0;
   H = b[(c[k + 1608 >> 2] | 0) + (F << 1) >> 1] | 0;
   c[G >> 2] = F + 1;
   G = Df(e[k + 1580 >> 1] | 0, 0, 16) | 0;
   E = E | D;
   H = G | H & 65535;
   G = ub;
   c[G >> 2] = H;
   c[G + 4 >> 2] = E;
   G = yb;
   c[G >> 2] = H;
   c[G + 4 >> 2] = E;
   c[jb >> 2] = c[(c[k + 1168 >> 2] | 0) + ((c[k + 1180 >> 2] | 0) + -1 << 2) >> 2];
   $d(h, j, yb, jb);
   G = k + 1592 | 0;
   E = (c[G >> 2] | 0) + (e[ub >> 1] | 0) | 0;
   H = k + 1584 | 0;
   F = c[H >> 2] | 0;
   h = F + (E * 776 | 0) | 0;
   c[F + (E * 776 | 0) + 8 >> 2] = 1;
   I = k + 1572 | 0;
   c[F + (E * 776 | 0) + 12 >> 2] = c[I >> 2];
   if ((h | 0) != (ub | 0)) {
    ib = ub;
    jb = c[ib + 4 >> 2] | 0;
    Gb = h;
    c[Gb >> 2] = c[ib >> 2];
    c[Gb + 4 >> 2] = jb;
   }
   m = F + (E * 776 | 0) + 16 | 0;
   J = m;
   o = kb;
   K = J + 36 | 0;
   do {
    c[J >> 2] = c[o >> 2];
    J = J + 4 | 0;
    o = o + 4 | 0;
   } while ((J | 0) < (K | 0));
   if ((m | 0) == (kb | 0)) {
    h = F + (E * 776 | 0) + 64 | 0;
    c[h >> 2] = c[r >> 2];
    c[h + 4 >> 2] = c[r + 4 >> 2];
    c[h + 8 >> 2] = c[r + 8 >> 2];
    c[h + 12 >> 2] = c[r + 12 >> 2];
    c[h + 16 >> 2] = c[r + 16 >> 2];
    c[h + 20 >> 2] = c[r + 20 >> 2];
    c[h + 24 >> 2] = c[r + 24 >> 2];
    h = c[p >> 2] | 0;
   } else {
    kb = t;
    jb = c[kb + 4 >> 2] | 0;
    h = F + (E * 776 | 0) + 56 | 0;
    c[h >> 2] = c[kb >> 2];
    c[h + 4 >> 2] = jb;
    h = F + (E * 776 | 0) + 64 | 0;
    c[h >> 2] = c[r >> 2];
    c[h + 4 >> 2] = c[r + 4 >> 2];
    c[h + 8 >> 2] = c[r + 8 >> 2];
    c[h + 12 >> 2] = c[r + 12 >> 2];
    c[h + 16 >> 2] = c[r + 16 >> 2];
    c[h + 20 >> 2] = c[r + 20 >> 2];
    c[h + 24 >> 2] = c[r + 24 >> 2];
    h = F + (E * 776 | 0) + 92 | 0;
    c[h >> 2] = 0;
    Be(h, s);
    h = c[p >> 2] | 0;
    jb = n;
    kb = c[jb + 4 >> 2] | 0;
    Gb = F + (E * 776 | 0) + 104 | 0;
    c[Gb >> 2] = c[jb >> 2];
    c[Gb + 4 >> 2] = kb;
   }
   C = F + (E * 776 | 0) + 96 | 0;
   c[C >> 2] = h;
   xd(F + (E * 776 | 0) + 112 | 0, l);
   Gb = a[q >> 0] | 0;
   a[F + (E * 776 | 0) + 696 >> 0] = Gb;
   k = k + 1376 | 0;
   g : do if (!(Gb & 2)) rb = 6; else {
    z = F + (E * 776 | 0) + 24 | 0;
    u = c[z >> 2] | 0;
    A = F + (E * 776 | 0) + 28 | 0;
    v = c[A >> 2] | 0;
    B = F + (E * 776 | 0) + 44 | 0;
    h = c[B >> 2] | 0;
    j = h + -8 | 0;
    h : do if (j >>> 0 < 11) {
     if (!(2023 >>> (j & 2047) & 1)) break;
     switch (h | 0) {
     case 10:
     case 9:
     case 8:
      {
       if (a[36448] | 0) break h;
       break;
      }
     case 16:
     case 15:
     case 14:
     case 13:
      {
       if (a[36449] | 0) break h;
       break;
      }
     default:
      {}
     }
     rb = c[F + (E * 776 | 0) + 92 >> 2] | 0;
     c[lb >> 2] = c[((rb | 0) == 0 ? 1612 : rb + 12 | 0) >> 2];
     oe(19626, lb);
     rb = 4;
     break g;
    } while (0);
    y = F + (E * 776 | 0) + 20 | 0;
    switch (c[y >> 2] | 0) {
    case 0:
     {
      sb = 3553;
      break;
     }
    case 2:
     {
      sb = 34067;
      break;
     }
    default:
     {
      pe(19969, mb);
      eb();
     }
    }
    J = (c[k >> 2] | 0) + 304 | 0;
    K = J + 128 | 0;
    do {
     c[J >> 2] = 0;
     J = J + 4 | 0;
    } while ((J | 0) < (K | 0));
    c[Db >> 2] = 0;
    fb(1, Db | 0);
    Ib(33984);
    Bb(sb | 0, c[Db >> 2] | 0);
    x = c[Db >> 2] | 0;
    Od(m);
    k = c[y >> 2] | 0;
    s = (k | 0) == 2 ? 6 : 1;
    w = F + (E * 776 | 0) + 40 | 0;
    t = c[w >> 2] | 0;
    j = c[B >> 2] | 0;
    h = j + -8 | 0;
    if (h >>> 0 < 11) r = (2023 >>> (h & 2047) & 1) != 0; else r = 0;
    do switch (j | 0) {
    case 6:
    case 5:
    case 2:
    case 4:
    case 0:
     {
      ob = 6408;
      break;
     }
    case 3:
    case 1:
     {
      ob = 6407;
      break;
     }
    case 7:
     {
      ob = 6409;
      break;
     }
    case 11:
     {
      ob = 6402;
      break;
     }
    case 12:
     {
      ob = 34041;
      break;
     }
    case 8:
     {
      ob = 33777;
      break;
     }
    case 9:
     {
      ob = 33778;
      break;
     }
    case 10:
     {
      ob = 33779;
      break;
     }
    case 13:
     {
      ob = 35841;
      break;
     }
    case 14:
     {
      ob = 35840;
      break;
     }
    case 15:
     {
      ob = 35843;
      break;
     }
    case 16:
     {
      ob = 35842;
      break;
     }
    case 17:
     {
      ob = 37492;
      break;
     }
    case 18:
     {
      ob = 37493;
      break;
     }
    default:
     {
      pe(19690, nb);
      eb();
     }
    } while (0);
    q = (t | 0) > 0;
    j = k;
    h = 0;
    i : while (1) {
     j : do if ((j | 0) == 2) switch (h | 0) {
     case 0:
      {
       p = 34069;
       break j;
      }
     case 1:
      {
       p = 34070;
       break j;
      }
     case 2:
      {
       p = 34071;
       break j;
      }
     case 3:
      {
       p = 34072;
       break j;
      }
     case 4:
      {
       p = 34073;
       break j;
      }
     default:
      {
       p = 34074;
       break j;
      }
     } else p = sb; while (0);
     k : do if (q) {
      if (r) {
       j = 0;
       while (1) {
        nb = u >> j;
        Gb = v >> j;
        cb(p | 0, j | 0, ob | 0, ((nb | 0) == 0 ? 1 : nb) | 0, ((Gb | 0) == 0 ? 1 : Gb) | 0, 0, c[F + (E * 776 | 0) + 408 + (h * 48 | 0) + (j << 2) >> 2] | 0, L + (c[F + (E * 776 | 0) + 120 + (h * 48 | 0) + (j << 2) >> 2] | 0) | 0);
        j = j + 1 | 0;
        if ((j | 0) == (t | 0)) break k;
       }
      } else o = 0;
      while (1) {
       m = u >> o;
       m = (m | 0) == 0 ? 1 : m;
       n = v >> o;
       n = (n | 0) == 0 ? 1 : n;
       l = c[B >> 2] | 0;
       do switch (l | 0) {
       case 6:
       case 5:
       case 2:
       case 4:
       case 0:
        {
         k = 6408;
         break;
        }
       case 3:
       case 1:
        {
         j = 6407;
         xb = 220;
         break;
        }
       case 7:
        {
         j = 6409;
         xb = 220;
         break;
        }
       case 11:
        {
         j = 6402;
         xb = 220;
         break;
        }
       case 12:
        {
         j = 34041;
         xb = 220;
         break;
        }
       case 8:
        {
         j = 33777;
         xb = 220;
         break;
        }
       case 9:
        {
         j = 33778;
         xb = 220;
         break;
        }
       case 10:
        {
         j = 33779;
         xb = 220;
         break;
        }
       case 13:
        {
         j = 35841;
         xb = 220;
         break;
        }
       case 14:
        {
         j = 35840;
         xb = 220;
         break;
        }
       case 15:
        {
         j = 35843;
         xb = 220;
         break;
        }
       case 16:
        {
         j = 35842;
         xb = 220;
         break;
        }
       case 17:
        {
         j = 37492;
         xb = 220;
         break;
        }
       case 18:
        {
         j = 37493;
         xb = 220;
         break;
        }
       default:
        {
         xb = 219;
         break i;
        }
       } while (0);
       if ((xb | 0) == 220) {
        xb = 0;
        k = j;
       }
       switch (l | 0) {
       case 5:
        {
         j = 5126;
         break;
        }
       case 6:
        {
         j = 5131;
         break;
        }
       case 7:
       case 1:
       case 0:
        {
         j = 5121;
         break;
        }
       case 4:
        {
         j = 32820;
         break;
        }
       case 3:
        {
         j = 33635;
         break;
        }
       case 2:
        {
         j = 32819;
         break;
        }
       case 11:
        {
         j = 5123;
         break;
        }
       case 12:
        {
         j = 34042;
         break;
        }
       default:
        {
         xb = 229;
         break i;
        }
       }
       Qb(p | 0, o | 0, ob | 0, m | 0, n | 0, 0, k | 0, j | 0, L + (c[F + (E * 776 | 0) + 120 + (h * 48 | 0) + (o << 2) >> 2] | 0) | 0);
       o = o + 1 | 0;
       if ((o | 0) == (t | 0)) break k;
      }
     } while (0);
     h = h + 1 | 0;
     if ((h | 0) >= (s | 0)) {
      xb = 189;
      break;
     }
     j = c[y >> 2] | 0;
    }
    if ((xb | 0) == 189) {
     c[Db >> 2] = 0;
     o = Db + 4 | 0;
     c[o >> 2] = -2;
     p = Db + 8 | 0;
     c[p >> 2] = -1;
     j = Db + 12 | 0;
     c[j >> 2] = 20;
     c[Db + 16 >> 2] = 20;
     k = Db + 20 | 0;
     c[k >> 2] = -1;
     l = Db + 24 | 0;
     c[l >> 2] = 0;
     m = Db + 28 | 0;
     c[m >> 2] = 0;
     c[Db + 32 >> 2] = 0;
     n = Db + 36 | 0;
     c[n >> 2] = 1;
     a[Db + 40 >> 0] = 0;
     a[Db + 41 >> 0] = 0;
     a[Db + 42 >> 0] = 0;
     h = F + (E * 776 | 0) + 92 | 0;
     if ((h | 0) != (Db | 0)) {
      c[Db >> 2] = 0;
      Be(Db, h);
     }
     h = c[C >> 2] | 0;
     c[o >> 2] = h;
     c[p >> 2] = c[y >> 2];
     c[j >> 2] = c[B >> 2];
     c[k >> 2] = c[F + (E * 776 | 0) + 16 >> 2];
     c[l >> 2] = c[z >> 2];
     c[m >> 2] = c[A >> 2];
     c[n >> 2] = c[w >> 2];
     j = F + (E * 776 | 0) + 704 | 0;
     if ((Db | 0) != (j | 0)) {
      c[j >> 2] = 0;
      Be(j, Db);
      h = c[o >> 2] | 0;
     }
     c[F + (E * 776 | 0) + 708 >> 2] = h;
     rb = F + (E * 776 | 0) + 712 | 0;
     c[rb >> 2] = c[p >> 2];
     c[rb + 4 >> 2] = c[p + 4 >> 2];
     c[rb + 8 >> 2] = c[p + 8 >> 2];
     c[rb + 12 >> 2] = c[p + 12 >> 2];
     c[rb + 16 >> 2] = c[p + 16 >> 2];
     c[rb + 20 >> 2] = c[p + 20 >> 2];
     c[rb + 24 >> 2] = c[p + 24 >> 2];
     c[rb + 28 >> 2] = c[p + 28 >> 2];
     b[rb + 32 >> 1] = b[p + 32 >> 1] | 0;
     a[rb + 34 >> 0] = a[p + 34 >> 0] | 0;
     c[F + (E * 776 | 0) + 768 >> 2] = x;
     c[F + (E * 776 | 0) + 748 >> 2] = sb;
     rb = 3;
     break;
    } else if ((xb | 0) == 219) {
     pe(19690, pb);
     eb();
    } else if ((xb | 0) == 229) {
     pe(19737, qb);
     eb();
    }
   } while (0);
   k = c[ub >> 2] | 0;
   l = k & 65535;
   j = (c[G >> 2] | 0) + l | 0;
   h = c[H >> 2] | 0;
   sb = ub;
   Gb = h + (j * 776 | 0) | 0;
   if ((c[sb >> 2] | 0) == (c[Gb >> 2] | 0) ? (c[sb + 4 >> 2] | 0) == (c[Gb + 4 >> 2] | 0) : 0) {
    c[h + (j * 776 | 0) + 8 >> 2] = rb;
    c[h + (j * 776 | 0) + 12 >> 2] = c[I >> 2];
    break;
   } else {
    c[tb >> 2] = k >>> 16;
    c[tb + 4 >> 2] = l;
    oe(19098, tb);
    break;
   }
  } while (0);
  h = f + 160 | 0;
  if ((h | 0) != (ub | 0)) {
   tb = ub;
   ub = c[tb + 4 >> 2] | 0;
   Gb = h;
   c[Gb >> 2] = c[tb >> 2];
   c[Gb + 4 >> 2] = ub;
  }
  cf(L);
  k = c[8946] | 0;
  h = k + 1180 | 0;
  j = c[h >> 2] | 0;
  k = k + 1176 | 0;
  l = c[k >> 2] | 0;
  if ((j - l | 0) == 1) c[k >> 2] = l + 1; else c[h >> 2] = j + -1;
  a[vb >> 0] = 1;
 }
 j = f + 76 | 0;
 do {
  Gb = a[j >> 0] | 0;
  a[j >> 0] = 1;
 } while ((Gb & 1) != 0);
 h = f + 80 | 0;
 do {} while ((c[h >> 2] | 0) > 0);
 h = f + 256 | 0;
 De(Db, h);
 h = c[h >> 2] | 0;
 if (h | 0) a[h >> 0] = 0;
 c[f + 264 >> 2] = 0;
 a[j >> 0] = 0;
 r = c[Db >> 2] | 0;
 s = (r | 0) == 0;
 if (s) {
  i = Fb;
  return;
 }
 if ((c[r + 4 >> 2] | 0) > 9600) {
  q = c[Db + 4 >> 2] | 0;
  q = (q | 0) == 0 ? 36455 : q;
  j = 9600;
  xb = 253;
 } else {
  j = c[r + 4 >> 2] | 0;
  h = c[Db + 4 >> 2] | 0;
  if ((j | 0) > 0) {
   q = (h | 0) == 0 ? 36455 : h;
   xb = 253;
  }
 }
 if ((xb | 0) == 253) {
  p = 0;
  o = 0;
  k = 0;
  l = -16711681;
  m = 0;
  l : while (1) {
   Gb = a[q + p >> 0] | 0;
   h = Gb & 255;
   m : do if ((Gb & 255) < 32) switch (h | 0) {
   case 8:
    {
     n = p;
     h = (o | 0) > 0 ? o + -1 | 0 : 0;
     break m;
    }
   case 9:
    {
     n = p;
     h = (o | 0) < 119 ? o + 1 | 0 : 119;
     break m;
    }
   case 10:
    {
     n = p;
     h = o;
     k = (k | 0) < 79 ? k + 1 | 0 : 79;
     break m;
    }
   case 11:
    {
     n = p;
     h = o;
     k = (k | 0) > 0 ? k + -1 | 0 : 0;
     break m;
    }
   case 13:
    {
     n = p;
     h = 0;
     break m;
    }
   case 16:
    {
     n = p;
     h = 0;
     k = 0;
     break m;
    }
   case 27:
    {
     h = a[q + (p + 1) >> 0] | 0;
     switch (h << 24 >> 24) {
     case 1:
      {
       k = p + 3 | 0;
       n = k;
       h = a[q + (p + 2) >> 0] | 0;
       k = a[q + k >> 0] | 0;
       break m;
      }
     case 2:
      {
       l = p + 5 | 0;
       n = l;
       h = o;
       l = d[q + (p + 3) >> 0] << 8 | d[q + (p + 2) >> 0] | d[q + (p + 4) >> 0] << 16 | d[q + l >> 0] << 24;
       break m;
      }
     default:
      {
       xb = 265;
       break l;
      }
     }
    }
   default:
    {
     n = p;
     h = o;
     break m;
    }
   } else {
    if (!((m | 0) < 57594 & (o | 0) < 120)) {
     Ab = m;
     break l;
    }
    Gb = h & 127;
    Kb = +(o & 255);
    g[f + 276 + (m * 20 | 0) >> 2] = Kb;
    Nb = +(k & 255);
    g[f + 276 + (m * 20 | 0) + 4 >> 2] = Nb;
    Hb = +(Gb & 255);
    g[f + 276 + (m * 20 | 0) + 8 >> 2] = Hb;
    g[f + 276 + (m * 20 | 0) + 12 >> 2] = 0.0;
    c[f + 276 + (m * 20 | 0) + 16 >> 2] = l;
    n = m + 1 | 0;
    h = o + 1 | 0;
    Mb = +(h & 255);
    g[f + 276 + (n * 20 | 0) >> 2] = Mb;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = Nb;
    Lb = +(Gb + 1 & 255);
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = Lb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 0.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 2 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = Mb;
    Jb = +(k + 1 & 255);
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = Jb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = Lb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 1.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 3 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = Kb;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = Nb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = Hb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 0.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 4 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = Mb;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = Jb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = Lb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 1.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 5 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = Kb;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = Jb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = Hb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 1.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = p;
    m = m + 6 | 0;
   } while (0);
   p = n + 1 | 0;
   if ((p | 0) >= (j | 0)) {
    Ab = m;
    break;
   } else o = h;
  }
  if ((xb | 0) == 265) {
   c[wb >> 2] = h << 24 >> 24;
   pe(21625, wb);
   eb();
  }
  if ((Ab | 0) > 0) {
   g[yb >> 2] = 0.0;
   g[yb + 4 >> 2] = 0.0;
   l = c[8946] | 0;
   Nb = +g[f + 4 >> 2] * (8.0 / +(c[l + 472 >> 2] | 0) * 2.0);
   g[yb >> 2] = 8.0 / +(c[l + 468 >> 2] | 0) * 2.0 * +g[f >> 2];
   g[yb + 4 >> 2] = Nb;
   n = f + 88 | 0;
   Gb = f + 96 | 0;
   o = f + 276 | 0;
   m = $(d[f + 75 >> 0] | 0, Ab) | 0;
   j = l + 136 | 0;
   c[j >> 2] = (c[j >> 2] | 0) + 1;
   j = (c[l + 1464 >> 2] | 0) + (e[Gb >> 1] | 0) | 0;
   k = c[l + 1456 >> 2] | 0;
   h = k + (j * 400 | 0) | 0;
   f = Gb;
   Gb = h;
   if ((c[f >> 2] | 0) == (c[Gb >> 2] | 0) ? (c[f + 4 >> 2] | 0) == (c[Gb + 4 >> 2] | 0) : 0) {
    if ((c[k + (j * 400 | 0) + 8 >> 2] | 0) != 3) xb = 272;
   } else xb = 272;
   if ((xb | 0) == 272) h = 0;
   c[h + 364 >> 2] = c[l + 620 >> 2];
   Gb = h + 369 | 0;
   j = (a[Gb >> 0] | 0) + 1 << 24 >> 24;
   j = (j & 255) < (d[h + 368 >> 0] | 0) ? j : 0;
   a[Gb >> 0] = j;
   j = c[h + 372 + ((j & 255) << 2) >> 2] | 0;
   h = l + 708 | 0;
   if ((c[h >> 2] | 0) != (j | 0)) {
    c[h >> 2] = j;
    va(34962, j | 0);
   }
   Wa(34962, 0, m | 0, o | 0);
   dd(n);
   j = c[8946] | 0;
   h = j + 132 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   Md(c[j + 628 >> 2] | 0, 0, yb);
   j = c[8946] | 0;
   h = j + 148 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   h = c[j + 628 >> 2] | 0;
   n : do if (h | 0) {
    h = c[h + 604 >> 2] | 0;
    switch (c[(c[j + 632 >> 2] | 0) + 288 >> 2] | 0) {
    case 0:
     {
      Eb(h | 0, 0, Ab | 0);
      break n;
     }
    case 2:
     {
      zb = 5125;
      break;
     }
    case 1:
     {
      zb = 5123;
      break;
     }
    default:
     {
      pe(21576, Cb);
      eb();
     }
    }
    Ua(h | 0, Ab | 0, zb | 0, 0);
   } while (0);
  }
  if (s) {
   i = Fb;
   return;
  }
 }
 Gb = c[r >> 2] | 0;
 c[r >> 2] = Gb - 1;
 if ((Gb | 0) == 1) {
  cf(r);
  c[Db >> 2] = 0;
  h = Db + 4 | 0;
  c[h >> 2] = 0;
 } else h = Db + 4 | 0;
 c[Db >> 2] = 0;
 c[h >> 2] = 0;
 i = Fb;
 return;
}

function _c(e) {
 e = e | 0;
 var f = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 y = c[e + 12944 >> 2] | 0;
 u = c[e + 14504 >> 2] | 0;
 v = c[e + 14600 >> 2] | 0;
 w = c[e + 15040 >> 2] | 0;
 x = c[e + 19704 >> 2] | 0;
 t = c[e + 20888 >> 2] | 0;
 o = c[e + 20896 >> 2] | 0;
 D = c[e + 21944 >> 2] | 0;
 if ((o | 0) > 0) {
  n = 0;
  do {
   l = c[(t + 1460 | 0) >> 2] | 0;
   k = c[(t + 1468 | 0) >> 2] | 0;
   if ((l | 0) == (k | 0)) {
    k = c[(t + 1472 | 0) >> 2] | 0;
    if ((l >> 1 | 0) >= (k | 0)) {
     k = c[(t + 1476 | 0) >> 2] | 0;
     k = (l >> 1 | 0) > (k | 0) ? k : l >> 1;
    }
    gd(t + 1456 | 0, k + l | 0);
    k = c[(t + 1468 | 0) >> 2] | 0;
   }
   c[(t + 1468 | 0) >> 2] = k + 1;
   m = c[(t + 1456 | 0) >> 2] | 0;
   l = m + (k * 400 | 0) | 0;
   Bf(l | 0, 0, 400) | 0;
   c[l >> 2] = -1;
   c[l + 4 >> 2] = -1;
   c[m + (k * 400 | 0) + 8 >> 2] = 0;
   c[m + (k * 400 | 0) + 12 >> 2] = 0;
   c[m + (k * 400 | 0) + 16 >> 2] = -1;
   c[m + (k * 400 | 0) + 20 >> 2] = -1;
   a[m + (k * 400 | 0) + 26 >> 0] = 17;
   a[m + (k * 400 | 0) + 27 >> 0] = 13;
   a[m + (k * 400 | 0) + 28 >> 0] = 17;
   a[m + (k * 400 | 0) + 29 >> 0] = 13;
   a[m + (k * 400 | 0) + 30 >> 0] = 17;
   a[m + (k * 400 | 0) + 31 >> 0] = 13;
   a[m + (k * 400 | 0) + 32 >> 0] = 17;
   a[m + (k * 400 | 0) + 33 >> 0] = 13;
   a[m + (k * 400 | 0) + 34 >> 0] = 17;
   a[m + (k * 400 | 0) + 35 >> 0] = 13;
   a[m + (k * 400 | 0) + 36 >> 0] = 17;
   a[m + (k * 400 | 0) + 37 >> 0] = 13;
   a[m + (k * 400 | 0) + 38 >> 0] = 17;
   a[m + (k * 400 | 0) + 39 >> 0] = 13;
   a[m + (k * 400 | 0) + 40 >> 0] = 17;
   a[m + (k * 400 | 0) + 41 >> 0] = 13;
   a[m + (k * 400 | 0) + 42 >> 0] = 17;
   a[m + (k * 400 | 0) + 43 >> 0] = 13;
   a[m + (k * 400 | 0) + 44 >> 0] = 17;
   a[m + (k * 400 | 0) + 45 >> 0] = 13;
   a[m + (k * 400 | 0) + 46 >> 0] = 17;
   a[m + (k * 400 | 0) + 47 >> 0] = 13;
   a[m + (k * 400 | 0) + 48 >> 0] = 17;
   a[m + (k * 400 | 0) + 49 >> 0] = 13;
   a[m + (k * 400 | 0) + 50 >> 0] = 17;
   a[m + (k * 400 | 0) + 51 >> 0] = 13;
   a[m + (k * 400 | 0) + 52 >> 0] = 17;
   a[m + (k * 400 | 0) + 53 >> 0] = 13;
   a[m + (k * 400 | 0) + 54 >> 0] = 17;
   a[m + (k * 400 | 0) + 55 >> 0] = 13;
   a[m + (k * 400 | 0) + 56 >> 0] = 17;
   a[m + (k * 400 | 0) + 57 >> 0] = 13;
   a[m + (k * 400 | 0) + 24 >> 0] = 0;
   a[m + (k * 400 | 0) + 25 >> 0] = 1;
   a[m + (k * 400 | 0) + 90 >> 0] = 0;
   a[m + (k * 400 | 0) + 91 >> 0] = 0;
   l = m + (k * 400 | 0) + 58 | 0;
   p = m + (k * 400 | 0) + 74 | 0;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 255;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   p = l;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 0;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   l = m + (k * 400 | 0) + 92 | 0;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[l + 8 >> 2] = 0;
   a[l + 12 >> 0] = 0;
   c[(e + 12528 | 0) >> 2] = 0;
   Be(m + (k * 400 | 0) + 108 | 0, e + 12528 | 0);
   c[m + (k * 400 | 0) + 112 >> 2] = -1;
   l = m + (k * 400 | 0) + 120 | 0;
   c[l >> 2] = -1;
   c[l + 4 >> 2] = -1;
   c[m + (k * 400 | 0) + 128 >> 2] = 0;
   c[m + (k * 400 | 0) + 132 >> 2] = -1;
   l = m + (k * 400 | 0) + 204 | 0;
   p = m + (k * 400 | 0) + 136 | 0;
   s = p + 68 | 0;
   do {
    c[p >> 2] = 0;
    p = p + 4 | 0;
   } while ((p | 0) < (s | 0));
   a[l >> 0] = a[l >> 0] & -16;
   c[m + (k * 400 | 0) + 208 >> 2] = 0;
   a[m + (k * 400 | 0) + 214 >> 0] = 17;
   a[m + (k * 400 | 0) + 215 >> 0] = 13;
   a[m + (k * 400 | 0) + 216 >> 0] = 17;
   a[m + (k * 400 | 0) + 217 >> 0] = 13;
   a[m + (k * 400 | 0) + 218 >> 0] = 17;
   a[m + (k * 400 | 0) + 219 >> 0] = 13;
   a[m + (k * 400 | 0) + 220 >> 0] = 17;
   a[m + (k * 400 | 0) + 221 >> 0] = 13;
   a[m + (k * 400 | 0) + 222 >> 0] = 17;
   a[m + (k * 400 | 0) + 223 >> 0] = 13;
   a[m + (k * 400 | 0) + 224 >> 0] = 17;
   a[m + (k * 400 | 0) + 225 >> 0] = 13;
   a[m + (k * 400 | 0) + 226 >> 0] = 17;
   a[m + (k * 400 | 0) + 227 >> 0] = 13;
   a[m + (k * 400 | 0) + 228 >> 0] = 17;
   a[m + (k * 400 | 0) + 229 >> 0] = 13;
   a[m + (k * 400 | 0) + 230 >> 0] = 17;
   a[m + (k * 400 | 0) + 231 >> 0] = 13;
   a[m + (k * 400 | 0) + 232 >> 0] = 17;
   a[m + (k * 400 | 0) + 233 >> 0] = 13;
   a[m + (k * 400 | 0) + 234 >> 0] = 17;
   a[m + (k * 400 | 0) + 235 >> 0] = 13;
   a[m + (k * 400 | 0) + 236 >> 0] = 17;
   a[m + (k * 400 | 0) + 237 >> 0] = 13;
   a[m + (k * 400 | 0) + 238 >> 0] = 17;
   a[m + (k * 400 | 0) + 239 >> 0] = 13;
   a[m + (k * 400 | 0) + 240 >> 0] = 17;
   a[m + (k * 400 | 0) + 241 >> 0] = 13;
   a[m + (k * 400 | 0) + 242 >> 0] = 17;
   a[m + (k * 400 | 0) + 243 >> 0] = 13;
   a[m + (k * 400 | 0) + 244 >> 0] = 17;
   a[m + (k * 400 | 0) + 245 >> 0] = 13;
   a[m + (k * 400 | 0) + 212 >> 0] = 0;
   a[m + (k * 400 | 0) + 213 >> 0] = 1;
   a[m + (k * 400 | 0) + 278 >> 0] = 0;
   a[m + (k * 400 | 0) + 279 >> 0] = 0;
   l = m + (k * 400 | 0) + 246 | 0;
   p = m + (k * 400 | 0) + 262 | 0;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 255;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   p = l;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 0;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   c[m + (k * 400 | 0) + 280 >> 2] = -1;
   c[m + (k * 400 | 0) + 284 >> 2] = 0;
   c[m + (k * 400 | 0) + 288 >> 2] = -1;
   c[m + (k * 400 | 0) + 292 >> 2] = -1;
   p = m + (k * 400 | 0) + 296 | 0;
   s = p + 68 | 0;
   do {
    c[p >> 2] = 0;
    p = p + 4 | 0;
   } while ((p | 0) < (s | 0));
   c[m + (k * 400 | 0) + 364 >> 2] = -1;
   a[m + (k * 400 | 0) + 368 >> 0] = 1;
   a[m + (k * 400 | 0) + 369 >> 0] = 0;
   c[m + (k * 400 | 0) + 372 >> 2] = 0;
   c[m + (k * 400 | 0) + 376 >> 2] = 0;
   c[m + (k * 400 | 0) + 380 >> 2] = -1;
   a[m + (k * 400 | 0) + 384 >> 0] = 1;
   a[m + (k * 400 | 0) + 385 >> 0] = 0;
   c[m + (k * 400 | 0) + 388 >> 2] = 0;
   c[m + (k * 400 | 0) + 392 >> 2] = 0;
   n = n + 1 | 0;
  } while ((n | 0) != (o | 0));
  k = 0;
  do {
   id(t + 1480 | 0);
   s = c[(t + 1492 | 0) >> 2] | 0;
   c[(t + 1492 | 0) >> 2] = s + 1;
   b[(c[(t + 1480 | 0) >> 2] | 0) + (s << 1) >> 1] = k;
   k = k + 1 << 16 >> 16;
  } while ((k & 65535 | 0) < (o | 0));
 }
 a[t + 1440 >> 0] = 1;
 q = c[((e + 12812 | 0) + 92 | 0) >> 2] | 0;
 b[t + 1516 >> 1] = 2;
 k = (c[(t + 1532 | 0) >> 2] | 0) - (c[t + 1528 >> 2] | 0) + q | 0;
 if ((k | 0) > (c[(t + 1524 | 0) >> 2] | 0)) jd(t + 1520 | 0, k);
 c[(t + 1536 | 0) >> 2] = 0;
 c[(t + 1540 | 0) >> 2] = 0;
 k = (c[(t + 1556 | 0) >> 2] | 0) - (c[(t + 1552 | 0) >> 2] | 0) | 0;
 if ((c[(t + 1548 | 0) >> 2] | 0) < (k + q | 0 | 0)) {
  l = bf((k + q | 0) << 1) | 0;
  m = c[(t + 1544 | 0) >> 2] | 0;
  if ((k | 0) > 0) {
   n = l;
   o = 0;
   p = m + (c[(t + 1552 | 0) >> 2] << 1) | 0;
   while (1) {
    b[n >> 1] = b[p >> 1] | 0;
    o = o + 1 | 0;
    if ((o | 0) == (k | 0)) break; else {
     n = n + 2 | 0;
     p = p + 2 | 0;
    }
   }
  }
  if (m | 0) cf(m);
  c[(t + 1544 | 0) >> 2] = l;
  c[(t + 1548 | 0) >> 2] = k + q | 0;
  c[(t + 1552 | 0) >> 2] = 0;
  c[(t + 1556 | 0) >> 2] = k;
 }
 if ((q | 0) > 0) {
  m = 0;
  do {
   l = c[(t + 1524 | 0) >> 2] | 0;
   k = c[(t + 1532 | 0) >> 2] | 0;
   if ((l | 0) == (k | 0)) {
    k = c[(t + 1536 | 0) >> 2] | 0;
    if ((l >> 1 | 0) >= (k | 0)) {
     k = c[(t + 1540 | 0) >> 2] | 0;
     k = (l >> 1 | 0) > (k | 0) ? k : l >> 1;
    }
    jd(t + 1520 | 0, k + l | 0);
    k = c[(t + 1532 | 0) >> 2] | 0;
   }
   c[(t + 1532 | 0) >> 2] = k + 1;
   r = c[(t + 1520 | 0) >> 2] | 0;
   s = r + (k * 3712 | 0) | 0;
   Bf(s | 0, 0, 3712) | 0;
   c[s >> 2] = -1;
   c[s + 4 >> 2] = -1;
   c[r + (k * 3712 | 0) + 8 >> 2] = 0;
   c[r + (k * 3712 | 0) + 12 >> 2] = 0;
   Dd(r + (k * 3712 | 0) + 16 | 0);
   c[r + (k * 3712 | 0) + 3064 >> 2] = 0;
   Bf(r + (k * 3712 | 0) + 3068 | 0, -1, 640) | 0;
   Hd(s);
   m = m + 1 | 0;
  } while ((m | 0) != (q | 0));
  k = 0;
  do {
   id(t + 1544 | 0);
   s = c[(t + 1556 | 0) >> 2] | 0;
   c[(t + 1556 | 0) >> 2] = s + 1;
   b[(c[(t + 1544 | 0) >> 2] | 0) + (s << 1) >> 1] = k;
   k = k + 1 << 16 >> 16;
  } while ((k & 65535 | 0) < (q | 0));
 }
 a[t + 1504 >> 0] = 1;
 q = c[((e + 12812 | 0) + 84 | 0) >> 2] | 0;
 b[t + 1580 >> 1] = 0;
 k = (c[(t + 1596 | 0) >> 2] | 0) - (c[t + 1592 >> 2] | 0) + q | 0;
 if ((k | 0) > (c[(t + 1588 | 0) >> 2] | 0)) kd(t + 1584 | 0, k);
 c[(t + 1600 | 0) >> 2] = 0;
 c[(t + 1604 | 0) >> 2] = 0;
 k = (c[(t + 1620 | 0) >> 2] | 0) - (c[(t + 1616 | 0) >> 2] | 0) | 0;
 if ((c[(t + 1612 | 0) >> 2] | 0) < (k + q | 0 | 0)) {
  l = bf((k + q | 0) << 1) | 0;
  m = c[(t + 1608 | 0) >> 2] | 0;
  if ((k | 0) > 0) {
   n = l;
   o = 0;
   p = m + (c[(t + 1616 | 0) >> 2] << 1) | 0;
   while (1) {
    b[n >> 1] = b[p >> 1] | 0;
    o = o + 1 | 0;
    if ((o | 0) == (k | 0)) break; else {
     n = n + 2 | 0;
     p = p + 2 | 0;
    }
   }
  }
  if (m | 0) cf(m);
  c[(t + 1608 | 0) >> 2] = l;
  c[(t + 1612 | 0) >> 2] = k + q | 0;
  c[(t + 1616 | 0) >> 2] = 0;
  c[(t + 1620 | 0) >> 2] = k;
 }
 if ((q | 0) > 0) {
  m = 0;
  do {
   l = c[(t + 1588 | 0) >> 2] | 0;
   k = c[(t + 1596 | 0) >> 2] | 0;
   if ((l | 0) == (k | 0)) {
    k = c[(t + 1600 | 0) >> 2] | 0;
    if ((l >> 1 | 0) >= (k | 0)) {
     k = c[(t + 1604 | 0) >> 2] | 0;
     k = (l >> 1 | 0) > (k | 0) ? k : l >> 1;
    }
    kd(t + 1584 | 0, k + l | 0);
    k = c[(t + 1596 | 0) >> 2] | 0;
   }
   c[(t + 1596 | 0) >> 2] = k + 1;
   s = c[(t + 1584 | 0) >> 2] | 0;
   r = s + (k * 776 | 0) | 0;
   Bf(r | 0, 0, 776) | 0;
   c[r >> 2] = -1;
   c[r + 4 >> 2] = -1;
   r = s + (k * 776 | 0) + 8 | 0;
   c[r >> 2] = 0;
   c[r + 4 >> 2] = 0;
   c[r + 8 >> 2] = 0;
   c[r + 12 >> 2] = 0;
   c[r + 16 >> 2] = 0;
   c[r + 20 >> 2] = 0;
   c[r + 24 >> 2] = 0;
   c[r + 28 >> 2] = 0;
   c[s + (k * 776 | 0) + 40 >> 2] = 1;
   c[s + (k * 776 | 0) + 44 >> 2] = 0;
   c[s + (k * 776 | 0) + 48 >> 2] = 20;
   r = s + (k * 776 | 0) + 56 | 0;
   c[r >> 2] = -1;
   c[r + 4 >> 2] = -1;
   b[s + (k * 776 | 0) + 64 >> 1] = 21;
   g[s + (k * 776 | 0) + 68 >> 2] = 0.0;
   g[s + (k * 776 | 0) + 72 >> 2] = 0.0;
   g[s + (k * 776 | 0) + 76 >> 2] = 0.0;
   g[s + (k * 776 | 0) + 80 >> 2] = 1.0;
   g[s + (k * 776 | 0) + 84 >> 2] = 1.0;
   a[s + (k * 776 | 0) + 88 >> 0] = 0;
   a[s + (k * 776 | 0) + 89 >> 0] = 3;
   c[(e + 12528 | 0) >> 2] = 0;
   Be(s + (k * 776 | 0) + 92 | 0, e + 12528 | 0);
   c[s + (k * 776 | 0) + 96 >> 2] = -1;
   r = s + (k * 776 | 0) + 104 | 0;
   c[r >> 2] = -1;
   c[r + 4 >> 2] = -1;
   r = s + (k * 776 | 0) + 696 | 0;
   Bf(s + (k * 776 | 0) + 112 | 0, 0, 584) | 0;
   a[r >> 0] = a[r >> 0] & -128;
   c[s + (k * 776 | 0) + 704 >> 2] = 0;
   c[s + (k * 776 | 0) + 708 >> 2] = -2;
   c[s + (k * 776 | 0) + 712 >> 2] = -1;
   c[s + (k * 776 | 0) + 716 >> 2] = 20;
   c[s + (k * 776 | 0) + 720 >> 2] = 20;
   c[s + (k * 776 | 0) + 724 >> 2] = -1;
   c[s + (k * 776 | 0) + 728 >> 2] = 0;
   c[s + (k * 776 | 0) + 732 >> 2] = 0;
   c[s + (k * 776 | 0) + 736 >> 2] = 0;
   c[s + (k * 776 | 0) + 740 >> 2] = 1;
   a[s + (k * 776 | 0) + 744 >> 0] = 0;
   a[s + (k * 776 | 0) + 745 >> 0] = 0;
   a[s + (k * 776 | 0) + 746 >> 0] = 0;
   c[s + (k * 776 | 0) + 748 >> 2] = 0;
   c[s + (k * 776 | 0) + 752 >> 2] = 0;
   c[s + (k * 776 | 0) + 756 >> 2] = 0;
   c[s + (k * 776 | 0) + 760 >> 2] = -1;
   a[s + (k * 776 | 0) + 764 >> 0] = 1;
   a[s + (k * 776 | 0) + 765 >> 0] = 0;
   c[s + (k * 776 | 0) + 768 >> 2] = 0;
   c[s + (k * 776 | 0) + 772 >> 2] = 0;
   m = m + 1 | 0;
  } while ((m | 0) != (q | 0));
  k = 0;
  do {
   id(t + 1608 | 0);
   s = c[(t + 1620 | 0) >> 2] | 0;
   c[(t + 1620 | 0) >> 2] = s + 1;
   b[(c[(t + 1608 | 0) >> 2] | 0) + (s << 1) >> 1] = k;
   k = k + 1 << 16 >> 16;
  } while ((k & 65535 | 0) < (q | 0));
 }
 a[t + 1568 >> 0] = 1;
 r = c[((e + 12812 | 0) + 96 | 0) >> 2] | 0;
 b[t + 1644 >> 1] = 3;
 n = (c[(t + 1660 | 0) >> 2] | 0) - (c[(t + 1656 | 0) >> 2] | 0) | 0;
 if ((c[(t + 1652 | 0) >> 2] | 0) < (n + r | 0 | 0)) {
  o = bf((n + r | 0) * 608 | 0) | 0;
  if ((n | 0) > 0) {
   k = o;
   l = 0;
   m = (c[(t + 1648 | 0) >> 2] | 0) + ((c[(t + 1656 | 0) >> 2] | 0) * 608 | 0) | 0;
   while (1) {
    md(k, m);
    c[m + 16 >> 2] = 0;
    l = l + 1 | 0;
    if ((l | 0) == (n | 0)) break; else {
     k = k + 608 | 0;
     m = m + 608 | 0;
    }
   }
  }
  k = c[(t + 1648 | 0) >> 2] | 0;
  if (k | 0) cf(k);
  c[(t + 1648 | 0) >> 2] = o;
  c[(t + 1652 | 0) >> 2] = n + r | 0;
  c[(t + 1656 | 0) >> 2] = 0;
  c[(t + 1660 | 0) >> 2] = n;
 }
 c[(t + 1664 | 0) >> 2] = 0;
 c[(t + 1668 | 0) >> 2] = 0;
 k = (c[(t + 1684 | 0) >> 2] | 0) - (c[(t + 1680 | 0) >> 2] | 0) | 0;
 if ((c[(t + 1676 | 0) >> 2] | 0) < (k + r | 0 | 0)) {
  l = bf((k + r | 0) << 1) | 0;
  m = c[(t + 1672 | 0) >> 2] | 0;
  if ((k | 0) > 0) {
   n = l;
   o = 0;
   p = m + (c[(t + 1680 | 0) >> 2] << 1) | 0;
   while (1) {
    b[n >> 1] = b[p >> 1] | 0;
    o = o + 1 | 0;
    if ((o | 0) == (k | 0)) break; else {
     n = n + 2 | 0;
     p = p + 2 | 0;
    }
   }
  }
  if (m | 0) cf(m);
  c[(t + 1672 | 0) >> 2] = l;
  c[(t + 1676 | 0) >> 2] = k + r | 0;
  c[(t + 1680 | 0) >> 2] = 0;
  c[(t + 1684 | 0) >> 2] = k;
 }
 if ((r | 0) > 0) {
  q = 0;
  do {
   l = c[(t + 1652 | 0) >> 2] | 0;
   k = c[(t + 1660 | 0) >> 2] | 0;
   do if ((l | 0) == (k | 0)) {
    k = c[(t + 1664 | 0) >> 2] | 0;
    if ((l >> 1 | 0) >= (k | 0)) {
     k = c[(t + 1668 | 0) >> 2] | 0;
     k = (l >> 1 | 0) > (k | 0) ? k : l >> 1;
    }
    p = k + l | 0;
    if (!k) {
     k = l;
     break;
    }
    k = l - (c[(t + 1656 | 0) >> 2] | 0) | 0;
    o = bf(p * 608 | 0) | 0;
    if ((k | 0) > 0) {
     l = o;
     m = 0;
     n = (c[(t + 1648 | 0) >> 2] | 0) + ((c[(t + 1656 | 0) >> 2] | 0) * 608 | 0) | 0;
     while (1) {
      md(l, n);
      c[n + 16 >> 2] = 0;
      m = m + 1 | 0;
      if ((m | 0) == (k | 0)) break; else {
       l = l + 608 | 0;
       n = n + 608 | 0;
      }
     }
    }
    l = c[(t + 1648 | 0) >> 2] | 0;
    if (l | 0) cf(l);
    c[(t + 1648 | 0) >> 2] = o;
    c[(t + 1652 | 0) >> 2] = p;
    c[(t + 1656 | 0) >> 2] = 0;
    c[(t + 1660 | 0) >> 2] = k;
   } while (0);
   c[(t + 1660 | 0) >> 2] = k + 1;
   m = c[(t + 1648 | 0) >> 2] | 0;
   l = m + (k * 608 | 0) | 0;
   Bf(l | 0, 0, 608) | 0;
   c[l >> 2] = -1;
   c[l + 4 >> 2] = -1;
   c[m + (k * 608 | 0) + 8 >> 2] = 0;
   c[m + (k * 608 | 0) + 12 >> 2] = 0;
   c[(e + 12528 | 0) >> 2] = 0;
   Be(m + (k * 608 | 0) + 16 | 0, e + 12528 | 0);
   c[m + (k * 608 | 0) + 20 >> 2] = -1;
   l = m + (k * 608 | 0) + 24 | 0;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[l >> 2] = 2013282306;
   b[l + 4 >> 1] = 192;
   g[m + (k * 608 | 0) + 32 >> 2] = 1.0;
   g[m + (k * 608 | 0) + 36 >> 2] = 1.0;
   g[m + (k * 608 | 0) + 40 >> 2] = 1.0;
   g[m + (k * 608 | 0) + 44 >> 2] = 1.0;
   b[m + (k * 608 | 0) + 48 >> 1] = 28672;
   b[m + (k * 608 | 0) + 50 >> 1] = 28672;
   l = m + (k * 608 | 0) + 52 | 0;
   c[l >> 2] = 0;
   b[l >> 1] = 32647;
   b[l + 2 >> 1] = 255;
   b[m + (k * 608 | 0) + 56 >> 1] = 296;
   a[m + (k * 608 | 0) + 60 >> 0] = 17;
   a[m + (k * 608 | 0) + 61 >> 0] = 13;
   a[m + (k * 608 | 0) + 62 >> 0] = 17;
   a[m + (k * 608 | 0) + 63 >> 0] = 13;
   a[m + (k * 608 | 0) + 64 >> 0] = 17;
   a[m + (k * 608 | 0) + 65 >> 0] = 13;
   a[m + (k * 608 | 0) + 66 >> 0] = 17;
   a[m + (k * 608 | 0) + 67 >> 0] = 13;
   a[m + (k * 608 | 0) + 68 >> 0] = 17;
   a[m + (k * 608 | 0) + 69 >> 0] = 13;
   a[m + (k * 608 | 0) + 70 >> 0] = 17;
   a[m + (k * 608 | 0) + 71 >> 0] = 13;
   a[m + (k * 608 | 0) + 72 >> 0] = 17;
   a[m + (k * 608 | 0) + 73 >> 0] = 13;
   a[m + (k * 608 | 0) + 74 >> 0] = 17;
   a[m + (k * 608 | 0) + 75 >> 0] = 13;
   a[m + (k * 608 | 0) + 76 >> 0] = 17;
   a[m + (k * 608 | 0) + 77 >> 0] = 13;
   a[m + (k * 608 | 0) + 78 >> 0] = 17;
   a[m + (k * 608 | 0) + 79 >> 0] = 13;
   a[m + (k * 608 | 0) + 80 >> 0] = 17;
   a[m + (k * 608 | 0) + 81 >> 0] = 13;
   a[m + (k * 608 | 0) + 82 >> 0] = 17;
   a[m + (k * 608 | 0) + 83 >> 0] = 13;
   a[m + (k * 608 | 0) + 84 >> 0] = 17;
   a[m + (k * 608 | 0) + 85 >> 0] = 13;
   a[m + (k * 608 | 0) + 86 >> 0] = 17;
   a[m + (k * 608 | 0) + 87 >> 0] = 13;
   a[m + (k * 608 | 0) + 88 >> 0] = 17;
   a[m + (k * 608 | 0) + 89 >> 0] = 13;
   a[m + (k * 608 | 0) + 90 >> 0] = 17;
   a[m + (k * 608 | 0) + 91 >> 0] = 13;
   a[m + (k * 608 | 0) + 58 >> 0] = 0;
   a[m + (k * 608 | 0) + 59 >> 0] = 1;
   a[m + (k * 608 | 0) + 124 >> 0] = 0;
   a[m + (k * 608 | 0) + 125 >> 0] = 0;
   l = m + (k * 608 | 0) + 92 | 0;
   p = m + (k * 608 | 0) + 108 | 0;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 255;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   p = l;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 0;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   a[m + (k * 608 | 0) + 128 >> 0] = 17;
   a[m + (k * 608 | 0) + 129 >> 0] = 13;
   a[m + (k * 608 | 0) + 130 >> 0] = 17;
   a[m + (k * 608 | 0) + 131 >> 0] = 13;
   a[m + (k * 608 | 0) + 132 >> 0] = 17;
   a[m + (k * 608 | 0) + 133 >> 0] = 13;
   a[m + (k * 608 | 0) + 134 >> 0] = 17;
   a[m + (k * 608 | 0) + 135 >> 0] = 13;
   a[m + (k * 608 | 0) + 136 >> 0] = 17;
   a[m + (k * 608 | 0) + 137 >> 0] = 13;
   a[m + (k * 608 | 0) + 138 >> 0] = 17;
   a[m + (k * 608 | 0) + 139 >> 0] = 13;
   a[m + (k * 608 | 0) + 140 >> 0] = 17;
   a[m + (k * 608 | 0) + 141 >> 0] = 13;
   a[m + (k * 608 | 0) + 142 >> 0] = 17;
   a[m + (k * 608 | 0) + 143 >> 0] = 13;
   a[m + (k * 608 | 0) + 144 >> 0] = 17;
   a[m + (k * 608 | 0) + 145 >> 0] = 13;
   a[m + (k * 608 | 0) + 146 >> 0] = 17;
   a[m + (k * 608 | 0) + 147 >> 0] = 13;
   a[m + (k * 608 | 0) + 148 >> 0] = 17;
   a[m + (k * 608 | 0) + 149 >> 0] = 13;
   a[m + (k * 608 | 0) + 150 >> 0] = 17;
   a[m + (k * 608 | 0) + 151 >> 0] = 13;
   a[m + (k * 608 | 0) + 152 >> 0] = 17;
   a[m + (k * 608 | 0) + 153 >> 0] = 13;
   a[m + (k * 608 | 0) + 154 >> 0] = 17;
   a[m + (k * 608 | 0) + 155 >> 0] = 13;
   a[m + (k * 608 | 0) + 156 >> 0] = 17;
   a[m + (k * 608 | 0) + 157 >> 0] = 13;
   a[m + (k * 608 | 0) + 158 >> 0] = 17;
   a[m + (k * 608 | 0) + 159 >> 0] = 13;
   a[m + (k * 608 | 0) + 126 >> 0] = 0;
   a[m + (k * 608 | 0) + 127 >> 0] = 1;
   a[m + (k * 608 | 0) + 192 >> 0] = 0;
   a[m + (k * 608 | 0) + 193 >> 0] = 0;
   l = m + (k * 608 | 0) + 160 | 0;
   p = m + (k * 608 | 0) + 176 | 0;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 255;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   p = l;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 0;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   a[m + (k * 608 | 0) + 196 >> 0] = 17;
   a[m + (k * 608 | 0) + 197 >> 0] = 13;
   a[m + (k * 608 | 0) + 198 >> 0] = 17;
   a[m + (k * 608 | 0) + 199 >> 0] = 13;
   a[m + (k * 608 | 0) + 200 >> 0] = 17;
   a[m + (k * 608 | 0) + 201 >> 0] = 13;
   a[m + (k * 608 | 0) + 202 >> 0] = 17;
   a[m + (k * 608 | 0) + 203 >> 0] = 13;
   a[m + (k * 608 | 0) + 204 >> 0] = 17;
   a[m + (k * 608 | 0) + 205 >> 0] = 13;
   a[m + (k * 608 | 0) + 206 >> 0] = 17;
   a[m + (k * 608 | 0) + 207 >> 0] = 13;
   a[m + (k * 608 | 0) + 208 >> 0] = 17;
   a[m + (k * 608 | 0) + 209 >> 0] = 13;
   a[m + (k * 608 | 0) + 210 >> 0] = 17;
   a[m + (k * 608 | 0) + 211 >> 0] = 13;
   a[m + (k * 608 | 0) + 212 >> 0] = 17;
   a[m + (k * 608 | 0) + 213 >> 0] = 13;
   a[m + (k * 608 | 0) + 214 >> 0] = 17;
   a[m + (k * 608 | 0) + 215 >> 0] = 13;
   a[m + (k * 608 | 0) + 216 >> 0] = 17;
   a[m + (k * 608 | 0) + 217 >> 0] = 13;
   a[m + (k * 608 | 0) + 218 >> 0] = 17;
   a[m + (k * 608 | 0) + 219 >> 0] = 13;
   a[m + (k * 608 | 0) + 220 >> 0] = 17;
   a[m + (k * 608 | 0) + 221 >> 0] = 13;
   a[m + (k * 608 | 0) + 222 >> 0] = 17;
   a[m + (k * 608 | 0) + 223 >> 0] = 13;
   a[m + (k * 608 | 0) + 224 >> 0] = 17;
   a[m + (k * 608 | 0) + 225 >> 0] = 13;
   a[m + (k * 608 | 0) + 226 >> 0] = 17;
   a[m + (k * 608 | 0) + 227 >> 0] = 13;
   a[m + (k * 608 | 0) + 194 >> 0] = 0;
   a[m + (k * 608 | 0) + 195 >> 0] = 1;
   a[m + (k * 608 | 0) + 260 >> 0] = 0;
   a[m + (k * 608 | 0) + 261 >> 0] = 0;
   l = m + (k * 608 | 0) + 228 | 0;
   p = m + (k * 608 | 0) + 244 | 0;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 255;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   p = l;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 0;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   a[m + (k * 608 | 0) + 264 >> 0] = 17;
   a[m + (k * 608 | 0) + 265 >> 0] = 13;
   a[m + (k * 608 | 0) + 266 >> 0] = 17;
   a[m + (k * 608 | 0) + 267 >> 0] = 13;
   a[m + (k * 608 | 0) + 268 >> 0] = 17;
   a[m + (k * 608 | 0) + 269 >> 0] = 13;
   a[m + (k * 608 | 0) + 270 >> 0] = 17;
   a[m + (k * 608 | 0) + 271 >> 0] = 13;
   a[m + (k * 608 | 0) + 272 >> 0] = 17;
   a[m + (k * 608 | 0) + 273 >> 0] = 13;
   a[m + (k * 608 | 0) + 274 >> 0] = 17;
   a[m + (k * 608 | 0) + 275 >> 0] = 13;
   a[m + (k * 608 | 0) + 276 >> 0] = 17;
   a[m + (k * 608 | 0) + 277 >> 0] = 13;
   a[m + (k * 608 | 0) + 278 >> 0] = 17;
   a[m + (k * 608 | 0) + 279 >> 0] = 13;
   a[m + (k * 608 | 0) + 280 >> 0] = 17;
   a[m + (k * 608 | 0) + 281 >> 0] = 13;
   a[m + (k * 608 | 0) + 282 >> 0] = 17;
   a[m + (k * 608 | 0) + 283 >> 0] = 13;
   a[m + (k * 608 | 0) + 284 >> 0] = 17;
   a[m + (k * 608 | 0) + 285 >> 0] = 13;
   a[m + (k * 608 | 0) + 286 >> 0] = 17;
   a[m + (k * 608 | 0) + 287 >> 0] = 13;
   a[m + (k * 608 | 0) + 288 >> 0] = 17;
   a[m + (k * 608 | 0) + 289 >> 0] = 13;
   a[m + (k * 608 | 0) + 290 >> 0] = 17;
   a[m + (k * 608 | 0) + 291 >> 0] = 13;
   a[m + (k * 608 | 0) + 292 >> 0] = 17;
   a[m + (k * 608 | 0) + 293 >> 0] = 13;
   a[m + (k * 608 | 0) + 294 >> 0] = 17;
   a[m + (k * 608 | 0) + 295 >> 0] = 13;
   a[m + (k * 608 | 0) + 262 >> 0] = 0;
   a[m + (k * 608 | 0) + 263 >> 0] = 1;
   a[m + (k * 608 | 0) + 328 >> 0] = 0;
   a[m + (k * 608 | 0) + 329 >> 0] = 0;
   l = m + (k * 608 | 0) + 296 | 0;
   p = m + (k * 608 | 0) + 312 | 0;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 255;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   p = l;
   s = p + 16 | 0;
   do {
    a[p >> 0] = 0;
    p = p + 1 | 0;
   } while ((p | 0) < (s | 0));
   c[m + (k * 608 | 0) + 332 >> 2] = 3;
   O = m + (k * 608 | 0) + 336 | 0;
   c[O >> 2] = -1;
   c[O + 4 >> 2] = -1;
   O = m + (k * 608 | 0) + 344 | 0;
   N = m + (k * 608 | 0) + 356 | 0;
   M = m + (k * 608 | 0) + 372 | 0;
   L = m + (k * 608 | 0) + 388 | 0;
   K = m + (k * 608 | 0) + 404 | 0;
   J = m + (k * 608 | 0) + 420 | 0;
   I = m + (k * 608 | 0) + 436 | 0;
   H = m + (k * 608 | 0) + 452 | 0;
   G = m + (k * 608 | 0) + 468 | 0;
   F = m + (k * 608 | 0) + 484 | 0;
   E = m + (k * 608 | 0) + 500 | 0;
   l = m + (k * 608 | 0) + 516 | 0;
   n = m + (k * 608 | 0) + 532 | 0;
   o = m + (k * 608 | 0) + 548 | 0;
   p = m + (k * 608 | 0) + 564 | 0;
   s = m + (k * 608 | 0) + 580 | 0;
   c[m + (k * 608 | 0) + 596 >> 2] = 0;
   c[m + (k * 608 | 0) + 600 >> 2] = 0;
   c[m + (k * 608 | 0) + 604 >> 2] = 0;
   c[O >> 2] = 0;
   c[O + 4 >> 2] = 0;
   b[O + 8 >> 1] = 0;
   a[O + 10 >> 0] = 0;
   c[N >> 2] = 0;
   c[N + 4 >> 2] = 0;
   c[N + 8 >> 2] = 0;
   b[N + 12 >> 1] = 0;
   a[N + 14 >> 0] = 0;
   c[M >> 2] = 0;
   c[M + 4 >> 2] = 0;
   c[M + 8 >> 2] = 0;
   b[M + 12 >> 1] = 0;
   a[M + 14 >> 0] = 0;
   c[L >> 2] = 0;
   c[L + 4 >> 2] = 0;
   c[L + 8 >> 2] = 0;
   b[L + 12 >> 1] = 0;
   a[L + 14 >> 0] = 0;
   c[K >> 2] = 0;
   c[K + 4 >> 2] = 0;
   c[K + 8 >> 2] = 0;
   b[K + 12 >> 1] = 0;
   a[K + 14 >> 0] = 0;
   c[J >> 2] = 0;
   c[J + 4 >> 2] = 0;
   c[J + 8 >> 2] = 0;
   b[J + 12 >> 1] = 0;
   a[J + 14 >> 0] = 0;
   c[I >> 2] = 0;
   c[I + 4 >> 2] = 0;
   c[I + 8 >> 2] = 0;
   b[I + 12 >> 1] = 0;
   a[I + 14 >> 0] = 0;
   c[H >> 2] = 0;
   c[H + 4 >> 2] = 0;
   c[H + 8 >> 2] = 0;
   b[H + 12 >> 1] = 0;
   a[H + 14 >> 0] = 0;
   c[G >> 2] = 0;
   c[G + 4 >> 2] = 0;
   c[G + 8 >> 2] = 0;
   b[G + 12 >> 1] = 0;
   a[G + 14 >> 0] = 0;
   c[F >> 2] = 0;
   c[F + 4 >> 2] = 0;
   c[F + 8 >> 2] = 0;
   b[F + 12 >> 1] = 0;
   a[F + 14 >> 0] = 0;
   c[E >> 2] = 0;
   c[E + 4 >> 2] = 0;
   c[E + 8 >> 2] = 0;
   b[E + 12 >> 1] = 0;
   a[E + 14 >> 0] = 0;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[l + 8 >> 2] = 0;
   b[l + 12 >> 1] = 0;
   a[l + 14 >> 0] = 0;
   c[n >> 2] = 0;
   c[n + 4 >> 2] = 0;
   c[n + 8 >> 2] = 0;
   b[n + 12 >> 1] = 0;
   a[n + 14 >> 0] = 0;
   c[o >> 2] = 0;
   c[o + 4 >> 2] = 0;
   c[o + 8 >> 2] = 0;
   b[o + 12 >> 1] = 0;
   a[o + 14 >> 0] = 0;
   c[p >> 2] = 0;
   c[p + 4 >> 2] = 0;
   c[p + 8 >> 2] = 0;
   b[p + 12 >> 1] = 0;
   a[p + 14 >> 0] = 0;
   c[s >> 2] = 0;
   c[s + 4 >> 2] = 0;
   c[s + 8 >> 2] = 0;
   b[s + 12 >> 1] = 0;
   a[s + 14 >> 0] = 0;
   q = q + 1 | 0;
  } while ((q | 0) != (r | 0));
  k = 0;
  do {
   id(t + 1672 | 0);
   O = c[(t + 1684 | 0) >> 2] | 0;
   c[(t + 1684 | 0) >> 2] = O + 1;
   b[(c[(t + 1672 | 0) >> 2] | 0) + (O << 1) >> 1] = k;
   k = k + 1 << 16 >> 16;
  } while ((k & 65535 | 0) < (r | 0));
 }
 a[t + 1632 >> 0] = 1;
 c[(t + 1312 | 0) >> 2] = c[(t + 1284 | 0) >> 2];
 c[(t + 1312 | 0) + 4 >> 2] = c[(t + 1284 | 0) + 4 >> 2];
 c[(t + 1312 | 0) + 8 >> 2] = c[(t + 1284 | 0) + 8 >> 2];
 c[(t + 1312 | 0) + 12 >> 2] = c[(t + 1284 | 0) + 12 >> 2];
 c[(t + 1312 | 0) + 16 >> 2] = c[(t + 1284 | 0) + 16 >> 2];
 c[(t + 1312 | 0) + 20 >> 2] = c[(t + 1284 | 0) + 20 >> 2];
 c[(t + 1312 | 0) + 24 >> 2] = c[(t + 1284 | 0) + 24 >> 2];
 a[t + 1340 >> 0] = 1;
 a[t + 1372 >> 0] = 1;
 c[(t + 1344 | 0) >> 2] = c[(t + 1284 | 0) >> 2];
 c[(t + 1344 | 0) + 4 >> 2] = c[(t + 1284 | 0) + 4 >> 2];
 c[(t + 1344 | 0) + 8 >> 2] = c[(t + 1284 | 0) + 8 >> 2];
 c[(t + 1344 | 0) + 12 >> 2] = c[(t + 1284 | 0) + 12 >> 2];
 c[(t + 1344 | 0) + 16 >> 2] = c[(t + 1284 | 0) + 16 >> 2];
 c[(t + 1344 | 0) + 20 >> 2] = c[(t + 1284 | 0) + 20 >> 2];
 c[(t + 1344 | 0) + 24 >> 2] = c[(t + 1284 | 0) + 24 >> 2];
 a[t + 1404 >> 0] = 1;
 c[(t + 1376 | 0) >> 2] = c[(t + 1284 | 0) >> 2];
 c[(t + 1376 | 0) + 4 >> 2] = c[(t + 1284 | 0) + 4 >> 2];
 c[(t + 1376 | 0) + 8 >> 2] = c[(t + 1284 | 0) + 8 >> 2];
 c[(t + 1376 | 0) + 12 >> 2] = c[(t + 1284 | 0) + 12 >> 2];
 c[(t + 1376 | 0) + 16 >> 2] = c[(t + 1284 | 0) + 16 >> 2];
 c[(t + 1376 | 0) + 20 >> 2] = c[(t + 1284 | 0) + 20 >> 2];
 c[(t + 1376 | 0) + 24 >> 2] = c[(t + 1284 | 0) + 24 >> 2];
 c[(t + 1408 | 0) >> 2] = c[(t + 1284 | 0) >> 2];
 c[(t + 1408 | 0) + 4 >> 2] = c[(t + 1284 | 0) + 4 >> 2];
 c[(t + 1408 | 0) + 8 >> 2] = c[(t + 1284 | 0) + 8 >> 2];
 c[(t + 1408 | 0) + 12 >> 2] = c[(t + 1284 | 0) + 12 >> 2];
 c[(t + 1408 | 0) + 16 >> 2] = c[(t + 1284 | 0) + 16 >> 2];
 c[(t + 1408 | 0) + 20 >> 2] = c[(t + 1284 | 0) + 20 >> 2];
 c[(t + 1408 | 0) + 24 >> 2] = c[(t + 1284 | 0) + 24 >> 2];
 a[t + 1436 >> 0] = 1;
 k = c[8965] | 0;
 c[((e + 12456 | 0) + 16 | 0) >> 2] = e + 12456 | 0;
 c[(e + 12456 | 0) >> 2] = 1252;
 c[(e + 12456 | 0) + 4 >> 2] = t + 1168 | 0;
 c[t + 1696 >> 2] = ye(k, e + 12456 | 0) | 0;
 k = c[((e + 12456 | 0) + 16 | 0) >> 2] | 0;
 do if ((k | 0) == (e + 12456 | 0 | 0)) zc[c[(c[k >> 2] | 0) + 16 >> 2] & 63](k); else {
  if (!k) break;
  zc[c[(c[k >> 2] | 0) + 20 >> 2] & 63](k);
 } while (0);
 s = c[((e + 12812 | 0) + 68 | 0) >> 2] | 0;
 k = (c[(t + 1180 | 0) >> 2] | 0) - (c[(t + 1176 | 0) >> 2] | 0) | 0;
 l = k + (c[((e + 12812 | 0) + 64 | 0) >> 2] | 0) | 0;
 if ((c[(t + 1172 | 0) >> 2] | 0) < (l | 0)) {
  m = bf(l << 2) | 0;
  n = c[(t + 1168 | 0) >> 2] | 0;
  if ((k | 0) > 0) {
   o = m;
   p = 0;
   q = n + (c[(t + 1176 | 0) >> 2] << 2) | 0;
   while (1) {
    c[o >> 2] = c[q >> 2];
    p = p + 1 | 0;
    if ((p | 0) == (k | 0)) break; else {
     o = o + 4 | 0;
     q = q + 4 | 0;
    }
   }
  }
  if (n | 0) cf(n);
  c[(t + 1168 | 0) >> 2] = m;
  c[(t + 1172 | 0) >> 2] = l;
  c[(t + 1176 | 0) >> 2] = 0;
  c[(t + 1180 | 0) >> 2] = k;
 }
 a[t + 1192 >> 0] = 1;
 n = (c[(t + 1208 | 0) >> 2] | 0) - (c[(t + 1204 | 0) >> 2] | 0) | 0;
 if ((c[(t + 1200 | 0) >> 2] | 0) < (n + s | 0 | 0)) {
  o = bf((n + s | 0) * 24 | 0) | 0;
  if ((n | 0) > 0) {
   k = o;
   l = 0;
   m = (c[(t + 1196 | 0) >> 2] | 0) + ((c[(t + 1204 | 0) >> 2] | 0) * 24 | 0) | 0;
   while (1) {
    Be(k, m);
    c[k + 4 >> 2] = c[m + 4 >> 2];
    M = m + 8 | 0;
    N = c[M + 4 >> 2] | 0;
    O = k + 8 | 0;
    c[O >> 2] = c[M >> 2];
    c[O + 4 >> 2] = N;
    c[k + 16 >> 2] = c[m + 16 >> 2];
    c[m >> 2] = 0;
    l = l + 1 | 0;
    if ((l | 0) == (n | 0)) break; else {
     k = k + 24 | 0;
     m = m + 24 | 0;
    }
   }
  }
  k = c[(t + 1196 | 0) >> 2] | 0;
  if (k | 0) cf(k);
  c[(t + 1196 | 0) >> 2] = o;
  c[(t + 1200 | 0) >> 2] = n + s | 0;
  c[(t + 1204 | 0) >> 2] = 0;
  c[(t + 1208 | 0) >> 2] = n;
 }
 o = c[(t + 1232 | 0) >> 2] | 0;
 p = c[(t + 1228 | 0) >> 2] | 0;
 q = (o - p | 0) + s | 0;
 k = c[(t + 1224 | 0) >> 2] | 0;
 do if ((q | 0) > (k | 0)) {
  if ((k | 0) == (q | 0)) break;
  n = bf(q * 12 | 0) | 0;
  if ((o - p | 0 | 0) > 0) {
   k = n + ((p - o + q >> 1) * 12 | 0) | 0;
   l = 0;
   m = (c[(t + 1220 | 0) >> 2] | 0) + ((c[(t + 1228 | 0) >> 2] | 0) * 12 | 0) | 0;
   while (1) {
    Be(k, m);
    c[k + 4 >> 2] = c[m + 4 >> 2];
    c[k + 8 >> 2] = c[m + 8 >> 2];
    c[m >> 2] = 0;
    l = l + 1 | 0;
    if ((l | 0) == (o - p | 0 | 0)) break; else {
     k = k + 12 | 0;
     m = m + 12 | 0;
    }
   }
  }
  k = c[(t + 1220 | 0) >> 2] | 0;
  if (k | 0) cf(k);
  c[(t + 1220 | 0) >> 2] = n;
  c[(t + 1224 | 0) >> 2] = q;
  c[(t + 1228 | 0) >> 2] = p - o + q >> 1;
  c[(t + 1232 | 0) >> 2] = (p - o + q >> 1) + (o - p | 0);
 } while (0);
 q = c[(t + 1260 | 0) >> 2] | 0;
 r = c[(t + 1256 | 0) >> 2] | 0;
 p = (q - r | 0) + s | 0;
 k = c[(t + 1252 | 0) >> 2] | 0;
 do if ((p | 0) > (k | 0)) {
  if ((k | 0) == (p | 0)) break;
  k = bf(p << 4) | 0;
  l = c[(t + 1248 | 0) >> 2] | 0;
  if ((q - r | 0 | 0) > 0) {
   m = k + (r - q + p >> 1 << 4) | 0;
   n = 0;
   o = l + (c[(t + 1256 | 0) >> 2] << 4) | 0;
   while (1) {
    M = o;
    N = c[M + 4 >> 2] | 0;
    O = m;
    c[O >> 2] = c[M >> 2];
    c[O + 4 >> 2] = N;
    c[m + 8 >> 2] = c[o + 8 >> 2];
    n = n + 1 | 0;
    if ((n | 0) == (q - r | 0 | 0)) break; else {
     m = m + 16 | 0;
     o = o + 16 | 0;
    }
   }
  }
  if (l | 0) cf(l);
  c[(t + 1248 | 0) >> 2] = k;
  c[(t + 1252 | 0) >> 2] = p;
  c[(t + 1256 | 0) >> 2] = r - q + p >> 1;
  c[(t + 1260 | 0) >> 2] = (r - q + p >> 1) + (q - r | 0);
 } while (0);
 a[t + 1280 >> 0] = 1;
 k = c[(t + 1172 | 0) >> 2] | 0;
 l = c[(t + 1180 | 0) >> 2] | 0;
 do if ((k | 0) == (l | 0)) {
  l = c[t + 1184 >> 2] | 0;
  if ((k >> 1 | 0) >= (l | 0)) {
   l = c[t + 1188 >> 2] | 0;
   l = (k >> 1 | 0) > (l | 0) ? l : k >> 1;
  }
  q = l + k | 0;
  if (!l) break;
  k = k - (c[(t + 1176 | 0) >> 2] | 0) | 0;
  l = bf(q << 2) | 0;
  m = c[(t + 1168 | 0) >> 2] | 0;
  if ((k | 0) > 0) {
   n = l;
   o = 0;
   p = m + (c[(t + 1176 | 0) >> 2] << 2) | 0;
   while (1) {
    c[n >> 2] = c[p >> 2];
    o = o + 1 | 0;
    if ((o | 0) == (k | 0)) break; else {
     n = n + 4 | 0;
     p = p + 4 | 0;
    }
   }
  }
  if (m | 0) cf(m);
  c[(t + 1168 | 0) >> 2] = l;
  c[(t + 1172 | 0) >> 2] = q;
  c[(t + 1176 | 0) >> 2] = 0;
  c[(t + 1180 | 0) >> 2] = k;
 } else k = l; while (0);
 c[(t + 1180 | 0) >> 2] = k + 1;
 c[(c[(t + 1168 | 0) >> 2] | 0) + (k << 2) >> 2] = -3;
 k = c[8964] | 0;
 c[((e + 11696 | 0) + 16 | 0) >> 2] = e + 11696 | 0;
 c[(e + 11696 | 0) >> 2] = 1216;
 k = ye(k, e + 11696 | 0) | 0;
 c[(c[8946] | 0) + 156 >> 2] = k;
 k = c[((e + 11696 | 0) + 16 | 0) >> 2] | 0;
 do if ((k | 0) == (e + 11696 | 0 | 0)) zc[c[(c[k >> 2] | 0) + 16 >> 2] & 63](k); else {
  if (!k) break;
  zc[c[(c[k >> 2] | 0) + 20 >> 2] & 63](k);
 } while (0);
 p = (c[8946] | 0) + 116 | 0;
 s = p + 40 | 0;
 do {
  c[p >> 2] = 0;
  p = p + 4 | 0;
 } while ((p | 0) < (s | 0));
 k = c[u >> 2] | 0;
 if (k | 0) {
  O = c[k >> 2] | 0;
  c[k >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(c[x >> 2] | 0);
   c[u >> 2] = 0;
   c[w >> 2] = 0;
  }
  c[u >> 2] = 0;
  c[w >> 2] = 0;
 }
 if (v | 0) {
  N = v;
  O = c[N >> 2] | 0;
  c[N >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(v);
   c[(e + 12808 | 0) >> 2] = 0;
  }
  c[(e + 12808 | 0) >> 2] = 0;
 }
 O = bf(1152280) | 0;
 Bf(O | 0, 0, 1152280) | 0;
 Yd(O);
 c[8962] = O;
 if (!(a[36451] | 0)) {
  pe(2273, e + 12576 | 0);
  eb();
 }
 if (!(a[36453] | 0)) {
  pe(2315, e + 12584 | 0);
  eb();
 }
 c[(e + 1280 | 0) >> 2] = 0;
 c[(e + 1280 | 0) + 4 >> 2] = 0;
 c[(e + 1280 | 0) + 8 >> 2] = 0;
 c[(e + 1280 | 0) + 12 >> 2] = 0;
 c[(e + 1280 | 0) + 16 >> 2] = 0;
 c[(e + 1280 | 0) + 20 >> 2] = 0;
 c[(e + 1280 | 0) + 24 >> 2] = 1;
 c[((e + 1280 | 0) + 28 | 0) >> 2] = 0;
 c[((e + 1280 | 0) + 32 | 0) >> 2] = 20;
 c[((e + 1280 | 0) + 40 | 0) >> 2] = -1;
 c[((e + 1280 | 0) + 40 | 0) + 4 >> 2] = -1;
 b[((e + 1280 | 0) + 48 | 0) >> 1] = 21;
 g[(e + 1280 | 0) + 52 >> 2] = 0.0;
 g[(e + 1280 | 0) + 56 >> 2] = 0.0;
 g[(e + 1280 | 0) + 60 >> 2] = 0.0;
 g[(e + 1280 | 0) + 64 >> 2] = 1.0;
 g[(e + 1280 | 0) + 68 >> 2] = 1.0;
 a[(e + 1280 | 0) + 72 >> 0] = 0;
 a[(e + 1280 | 0) + 73 >> 0] = 3;
 c[(e + 12528 | 0) >> 2] = 0;
 Be((e + 1280 | 0) + 76 | 0, e + 12528 | 0);
 c[((e + 1280 | 0) + 80 | 0) >> 2] = -1;
 c[((e + 1280 | 0) + 88 | 0) >> 2] = -1;
 c[((e + 1280 | 0) + 88 | 0) + 4 >> 2] = -1;
 Bf((e + 1280 | 0) + 96 | 0, 0, 584) | 0;
 a[((e + 1280 | 0) + 680 | 0) >> 0] = a[((e + 1280 | 0) + 680 | 0) >> 0] & -128 | 8;
 c[(e + 1280 | 0) + 8 >> 2] = 2048;
 c[(e + 1280 | 0) + 12 >> 2] = 1024;
 O = b[((e + 1280 | 0) + 48 | 0) >> 1] | 0;
 c[((e + 1280 | 0) + 28 | 0) >> 2] = 5;
 b[((e + 1280 | 0) + 48 | 0) >> 1] = O & -4048;
 wd(e + 11720 | 0, (c[8946] | 0) + 1168 | 0, e + 1280 | 0);
 if ((y + 40 | 0 | 0) != (e + 11720 | 0 | 0)) {
  O = c[(e + 11720 | 0) + 4 >> 2] | 0;
  c[(y + 40 | 0) >> 2] = c[(e + 11720 | 0) >> 2];
  c[(y + 40 | 0) + 4 >> 2] = O;
 }
 Ae(e + 12800 | 0, 2360);
 c[(e + 12800 | 0) + 4 >> 2] = -2;
 c[((e + 1280 | 0) + 76 | 0) >> 2] = 0;
 Be((e + 1280 | 0) + 76 | 0, e + 12800 | 0);
 c[((e + 1280 | 0) + 80 | 0) >> 2] = -2;
 c[(e + 12800 | 0) >> 2] = 0;
 wd(e + 11688 | 0, (c[8946] | 0) + 1168 | 0, e + 1280 | 0);
 if ((y + 48 | 0 | 0) != (e + 11688 | 0 | 0)) {
  O = c[(e + 11688 | 0) + 4 >> 2] | 0;
  c[(y + 48 | 0) >> 2] = c[(e + 11688 | 0) >> 2];
  c[(y + 48 | 0) + 4 >> 2] = O;
 }
 c[(e + 1088 | 0) >> 2] = -1;
 c[(e + 1088 | 0) + 4 >> 2] = -1;
 a[(e + 1088 | 0) + 10 >> 0] = 17;
 a[(e + 1088 | 0) + 11 >> 0] = 13;
 a[(e + 1088 | 0) + 12 >> 0] = 17;
 a[(e + 1088 | 0) + 13 >> 0] = 13;
 a[(e + 1088 | 0) + 14 >> 0] = 17;
 a[(e + 1088 | 0) + 15 >> 0] = 13;
 a[(e + 1088 | 0) + 16 >> 0] = 17;
 a[(e + 1088 | 0) + 17 >> 0] = 13;
 a[(e + 1088 | 0) + 18 >> 0] = 17;
 a[(e + 1088 | 0) + 19 >> 0] = 13;
 a[(e + 1088 | 0) + 20 >> 0] = 17;
 a[(e + 1088 | 0) + 21 >> 0] = 13;
 a[(e + 1088 | 0) + 22 >> 0] = 17;
 a[(e + 1088 | 0) + 23 >> 0] = 13;
 a[(e + 1088 | 0) + 24 >> 0] = 17;
 a[(e + 1088 | 0) + 25 >> 0] = 13;
 a[(e + 1088 | 0) + 26 >> 0] = 17;
 a[(e + 1088 | 0) + 27 >> 0] = 13;
 a[(e + 1088 | 0) + 28 >> 0] = 17;
 a[(e + 1088 | 0) + 29 >> 0] = 13;
 a[(e + 1088 | 0) + 30 >> 0] = 17;
 a[(e + 1088 | 0) + 31 >> 0] = 13;
 a[(e + 1088 | 0) + 32 >> 0] = 17;
 a[(e + 1088 | 0) + 33 >> 0] = 13;
 a[(e + 1088 | 0) + 34 >> 0] = 17;
 a[(e + 1088 | 0) + 35 >> 0] = 13;
 a[(e + 1088 | 0) + 36 >> 0] = 17;
 a[(e + 1088 | 0) + 37 >> 0] = 13;
 a[(e + 1088 | 0) + 38 >> 0] = 17;
 a[(e + 1088 | 0) + 39 >> 0] = 13;
 a[(e + 1088 | 0) + 40 >> 0] = 17;
 a[(e + 1088 | 0) + 41 >> 0] = 13;
 a[(e + 1088 | 0) + 8 >> 0] = 0;
 a[(e + 1088 | 0) + 9 >> 0] = 1;
 k = (e + 1088 | 0) + 74 | 0;
 a[k >> 0] = 0;
 l = (e + 1088 | 0) + 75 | 0;
 a[l >> 0] = 0;
 m = (e + 1088 | 0) + 58 | 0;
 p = (e + 1088 | 0) + 42 | 0;
 b[m >> 1] = 65535;
 b[m + 2 >> 1] = 65535;
 b[m + 4 >> 1] = 65535;
 b[m + 6 >> 1] = 65535;
 b[m + 8 >> 1] = 65535;
 b[m + 10 >> 1] = 65535;
 b[m + 12 >> 1] = 65535;
 b[m + 14 >> 1] = 65535;
 b[p >> 1] = 0;
 b[p + 2 >> 1] = 0;
 b[p + 4 >> 1] = 0;
 b[p + 6 >> 1] = 0;
 b[p + 8 >> 1] = 0;
 b[p + 10 >> 1] = 0;
 b[p + 12 >> 1] = 0;
 b[p + 14 >> 1] = 0;
 c[((e + 1088 | 0) + 76 | 0) >> 2] = 0;
 c[((e + 1088 | 0) + 76 | 0) + 4 >> 2] = 0;
 c[((e + 1088 | 0) + 76 | 0) + 8 >> 2] = 0;
 a[((e + 1088 | 0) + 76 | 0) + 12 >> 0] = 0;
 c[(e + 12528 | 0) >> 2] = 0;
 Be((e + 1088 | 0) + 92 | 0, e + 12528 | 0);
 c[(e + 1088 | 0) + 96 >> 2] = -1;
 c[((e + 1088 | 0) + 104 | 0) >> 2] = -1;
 c[((e + 1088 | 0) + 104 | 0) + 4 >> 2] = -1;
 c[(e + 1088 | 0) + 112 >> 2] = 0;
 c[(e + 1088 | 0) + 116 >> 2] = -1;
 p = (e + 1088 | 0) + 120 | 0;
 s = p + 68 | 0;
 do {
  c[p >> 2] = 0;
  p = p + 4 | 0;
 } while ((p | 0) < (s | 0));
 a[((e + 1088 | 0) + 188 | 0) >> 0] = a[((e + 1088 | 0) + 188 | 0) >> 0] & -16 | 8;
 a[(e + 1088 | 0) + 88 >> 0] = 0;
 b[(e + 1088 | 0) + 10 + (a[k >> 0] << 1) >> 1] = 512;
 O = b[k >> 1] | 0;
 a[m >> 0] = O & 255;
 a[((O & 255) << 24 >> 24) + ((e + 1088 | 0) + 42) >> 0] = (O & 65535) >>> 8;
 a[l >> 0] = (d[l >> 0] | 0) + 12;
 O = (a[k >> 0] | 0) + 1 << 24 >> 24;
 a[k >> 0] = O;
 b[(e + 1088 | 0) + 10 + (O << 24 >> 24 << 1) >> 1] = 258;
 O = b[k >> 1] | 0;
 a[(e + 1088 | 0) + 60 >> 0] = O & 255;
 a[((O & 255) << 24 >> 24) + ((e + 1088 | 0) + 42) >> 0] = (O & 65535) >>> 8;
 a[l >> 0] = (d[l >> 0] | 0) + 8;
 a[k >> 0] = (a[k >> 0] | 0) + 1 << 24 >> 24;
 ud(e + 1080 | 0, (c[8946] | 0) + 1168 | 0, e + 1088 | 0);
 if ((y + 64 | 0 | 0) != (e + 1080 | 0 | 0)) {
  O = c[(e + 1080 | 0) + 4 >> 2] | 0;
  c[(y + 64 | 0) >> 2] = c[(e + 1080 | 0) >> 2];
  c[(y + 64 | 0) + 4 >> 2] = O;
 }
 if ((y + 232 | 0 | 0) != (e + 1080 | 0 | 0)) {
  O = c[(e + 1080 | 0) + 4 >> 2] | 0;
  c[(y + 232 | 0) >> 2] = c[(e + 1080 | 0) >> 2];
  c[(y + 232 | 0) + 4 >> 2] = O;
 }
 Ae(e + 12528 | 0, 19041);
 c[(e + 12528 | 0) + 4 >> 2] = -2;
 Ed(e + 8640 | 0, e + 12528 | 0);
 c[(e + 12528 | 0) >> 2] = 0;
 a[((e + 12456 | 0) + 4 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 5 >> 0] = 13;
 a[((e + 12456 | 0) + 6 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 7 >> 0] = 13;
 a[((e + 12456 | 0) + 8 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 9 >> 0] = 13;
 a[((e + 12456 | 0) + 10 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 11 >> 0] = 13;
 a[((e + 12456 | 0) + 12 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 13 >> 0] = 13;
 a[((e + 12456 | 0) + 14 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 15 >> 0] = 13;
 a[((e + 12456 | 0) + 16 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 17 >> 0] = 13;
 a[((e + 12456 | 0) + 18 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 19 >> 0] = 13;
 a[((e + 12456 | 0) + 20 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 21 >> 0] = 13;
 a[((e + 12456 | 0) + 22 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 23 >> 0] = 13;
 a[((e + 12456 | 0) + 24 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 25 >> 0] = 13;
 a[((e + 12456 | 0) + 26 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 27 >> 0] = 13;
 a[((e + 12456 | 0) + 28 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 29 >> 0] = 13;
 a[((e + 12456 | 0) + 30 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 31 >> 0] = 13;
 a[((e + 12456 | 0) + 32 | 0) >> 0] = 17;
 a[(e + 12456 | 0) + 33 >> 0] = 13;
 a[(e + 12456 | 0) >> 0] = 0;
 a[(e + 12456 | 0) + 1 >> 0] = 1;
 m = (e + 12456 | 0) + 50 | 0;
 n = (e + 12456 | 0) + 34 | 0;
 b[m >> 1] = 65535;
 b[m + 2 >> 1] = 65535;
 b[m + 4 >> 1] = 65535;
 b[m + 6 >> 1] = 65535;
 b[m + 8 >> 1] = 65535;
 b[m + 10 >> 1] = 65535;
 b[m + 12 >> 1] = 65535;
 b[m + 14 >> 1] = 65535;
 b[n >> 1] = 0;
 b[n + 2 >> 1] = 0;
 b[n + 4 >> 1] = 0;
 b[n + 6 >> 1] = 0;
 b[n + 8 >> 1] = 0;
 b[n + 10 >> 1] = 0;
 b[n + 12 >> 1] = 0;
 b[n + 14 >> 1] = 0;
 b[(e + 12456 | 0) + 2 >> 1] = 768;
 a[m >> 0] = 0;
 a[n >> 0] = 0;
 a[(e + 12456 | 0) + 67 >> 0] = 16;
 a[((e + 12456 | 0) + 66 | 0) >> 0] = 1;
 a : do if (!3) {
  z = 3407;
  D = 360;
 } else {
  k = 3407;
  l = 3407;
  while (1) {
   if (!(a[k >> 0] | 0)) {
    j = l;
    break a;
   }
   k = k + 1 | 0;
   l = k;
   if (!(l & 3)) {
    z = k;
    D = 360;
    break;
   }
  }
 } while (0);
 if ((D | 0) == 360) {
  j = z;
  while (1) {
   k = c[j >> 2] | 0;
   if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) j = j + 4 | 0; else break;
  }
  if ((k & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
 }
 j = j - 3407 | 0;
 if ((j | 0) > 0) {
  l = bf(j + 9 | 0) | 0;
  c[l >> 2] = 0;
  c[l + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = j;
  c[(e + 12384 | 0) >> 2] = l + 8 | 0;
  Af(l + 8 | 0 | 0, 3407, j | 0) | 0;
  a[(l + 8 | 0) + j >> 0] = 0;
 } else {
  c[(e + 12384 | 0) >> 2] = 0;
  l = 0;
 }
 b : do if (!3) {
  A = 3735;
  D = 371;
 } else {
  j = 3735;
  k = 3735;
  while (1) {
   if (!(a[j >> 0] | 0)) {
    i = k;
    break b;
   }
   j = j + 1 | 0;
   k = j;
   if (!(k & 3)) {
    A = j;
    D = 371;
    break;
   }
  }
 } while (0);
 if ((D | 0) == 371) {
  i = A;
  while (1) {
   j = c[i >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) i = i + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do i = i + 1 | 0; while ((a[i >> 0] | 0) != 0);
 }
 i = i - 3735 | 0;
 if ((i | 0) > 0) {
  k = bf(i + 9 | 0) | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = i;
  c[(e + 12376 | 0) >> 2] = k + 8 | 0;
  Af(k + 8 | 0 | 0, 3735, i | 0) | 0;
  a[(k + 8 | 0) + i >> 0] = 0;
 } else {
  c[(e + 12376 | 0) >> 2] = 0;
  k = 0;
 }
 j = (e + 8640 | 0) + 16 | 0;
 i = c[j >> 2] | 0;
 if (i | 0) {
  O = c[i >> 2] | 0;
  c[i >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(c[j >> 2] | 0);
   c[j >> 2] = 0;
   c[((e + 8640 | 0) + 20 | 0) >> 2] = 0;
   i = (e + 8640 | 0) + 20 | 0;
  } else i = (e + 8640 | 0) + 20 | 0;
  c[j >> 2] = 0;
  c[i >> 2] = 0;
 }
 c[j >> 2] = l;
 c[(e + 8640 | 0) + 20 >> 2] = c[(e + 12384 | 0) >> 2];
 if (l | 0) {
  O = l;
  c[O >> 2] = (c[O >> 2] | 0) + 1;
 }
 j = (e + 8640 | 0) + 56 | 0;
 i = c[j >> 2] | 0;
 if (i | 0) {
  O = c[i >> 2] | 0;
  c[i >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(c[j >> 2] | 0);
   c[j >> 2] = 0;
   c[((e + 8640 | 0) + 60 | 0) >> 2] = 0;
   i = (e + 8640 | 0) + 60 | 0;
  } else i = (e + 8640 | 0) + 60 | 0;
  c[j >> 2] = 0;
  c[i >> 2] = 0;
 }
 c[j >> 2] = k;
 c[(e + 8640 | 0) + 60 >> 2] = c[(e + 12376 | 0) >> 2];
 i = k;
 if (k | 0) c[i >> 2] = (c[i >> 2] | 0) + 1;
 b[((e + 8640 | 0) + 256 | 0) >> 1] = b[(e + 12456 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 258 | 0) >> 1] = b[((e + 12456 | 0) + 2 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 260 | 0) >> 1] = b[((e + 12456 | 0) + 4 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 262 | 0) >> 1] = b[((e + 12456 | 0) + 6 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 264 | 0) >> 1] = b[((e + 12456 | 0) + 8 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 266 | 0) >> 1] = b[((e + 12456 | 0) + 10 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 268 | 0) >> 1] = b[((e + 12456 | 0) + 12 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 270 | 0) >> 1] = b[((e + 12456 | 0) + 14 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 272 | 0) >> 1] = b[((e + 12456 | 0) + 16 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 274 | 0) >> 1] = b[((e + 12456 | 0) + 18 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 276 | 0) >> 1] = b[((e + 12456 | 0) + 20 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 278 | 0) >> 1] = b[((e + 12456 | 0) + 22 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 280 | 0) >> 1] = b[((e + 12456 | 0) + 24 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 282 | 0) >> 1] = b[((e + 12456 | 0) + 26 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 284 | 0) >> 1] = b[((e + 12456 | 0) + 28 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 286 | 0) >> 1] = b[((e + 12456 | 0) + 30 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 288 | 0) >> 1] = b[((e + 12456 | 0) + 32 | 0) >> 1] | 0;
 O = b[n >> 1] | 0;
 a[((e + 8640 | 0) + 290 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 291 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 36 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 292 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 293 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 38 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 294 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 295 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 40 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 296 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 297 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 42 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 298 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 299 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 44 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 300 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 301 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 46 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 302 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 303 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 48 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 304 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 305 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[m >> 1] | 0;
 a[((e + 8640 | 0) + 306 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 307 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 52 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 308 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 309 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 54 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 310 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 311 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 56 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 312 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 313 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 58 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 314 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 315 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 60 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 316 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 317 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 62 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 318 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 319 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 64 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 320 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 321 | 0) >> 0] = (O & 65535) >>> 8;
 b[((e + 8640 | 0) + 322 | 0) >> 1] = b[((e + 12456 | 0) + 66 | 0) >> 1] | 0;
 if (k | 0) {
  O = c[i >> 2] | 0;
  c[i >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(k);
   c[(e + 12376 | 0) >> 2] = 0;
  }
  c[(e + 12376 | 0) >> 2] = 0;
 }
 if (l | 0) {
  N = l;
  O = c[N >> 2] | 0;
  c[N >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(l);
   c[(e + 12384 | 0) >> 2] = 0;
  }
  c[(e + 12384 | 0) >> 2] = 0;
 }
 c : do if (!3) {
  B = 9015;
  D = 404;
 } else {
  i = 9015;
  j = 9015;
  while (1) {
   if (!(a[i >> 0] | 0)) {
    h = j;
    break c;
   }
   i = i + 1 | 0;
   j = i;
   if (!(j & 3)) {
    B = i;
    D = 404;
    break;
   }
  }
 } while (0);
 if ((D | 0) == 404) {
  h = B;
  while (1) {
   i = c[h >> 2] | 0;
   if (!((i & -2139062144 ^ -2139062144) & i + -16843009)) h = h + 4 | 0; else break;
  }
  if ((i & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 9015 | 0;
 if ((h | 0) > 0) {
  j = bf(h + 9 | 0) | 0;
  c[j >> 2] = 0;
  c[j + 4 >> 2] = 0;
  c[j >> 2] = 0;
  c[j >> 2] = (c[j >> 2] | 0) + 1;
  c[j + 4 >> 2] = h;
  c[(e + 12368 | 0) >> 2] = j + 8 | 0;
  Af(j + 8 | 0 | 0, 9015, h | 0) | 0;
  a[(j + 8 | 0) + h >> 0] = 0;
 } else {
  c[(e + 12368 | 0) >> 2] = 0;
  j = 0;
 }
 d : do if (!0) {
  C = 9356;
  D = 415;
 } else {
  h = 9356;
  i = 9356;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    f = i;
    break d;
   }
   h = h + 1 | 0;
   i = h;
   if (!(i & 3)) {
    C = h;
    D = 415;
    break;
   }
  }
 } while (0);
 if ((D | 0) == 415) {
  f = C;
  while (1) {
   h = c[f >> 2] | 0;
   if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) f = f + 4 | 0; else break;
  }
  if ((h & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
 }
 f = f - 9356 | 0;
 if ((f | 0) > 0) {
  i = bf(f + 9 | 0) | 0;
  c[i >> 2] = 0;
  c[i + 4 >> 2] = 0;
  c[i >> 2] = 0;
  c[i >> 2] = (c[i >> 2] | 0) + 1;
  c[i + 4 >> 2] = f;
  c[(e + 12352 | 0) >> 2] = i + 8 | 0;
  Af(i + 8 | 0 | 0, 9356, f | 0) | 0;
  a[(i + 8 | 0) + f >> 0] = 0;
 } else {
  c[(e + 12352 | 0) >> 2] = 0;
  i = 0;
 }
 h = (e + 8640 | 0) + 24 | 0;
 f = c[h >> 2] | 0;
 if (f | 0) {
  O = c[f >> 2] | 0;
  c[f >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(c[h >> 2] | 0);
   c[h >> 2] = 0;
   c[((e + 8640 | 0) + 28 | 0) >> 2] = 0;
   f = (e + 8640 | 0) + 28 | 0;
  } else f = (e + 8640 | 0) + 28 | 0;
  c[h >> 2] = 0;
  c[f >> 2] = 0;
 }
 c[h >> 2] = j;
 c[(e + 8640 | 0) + 28 >> 2] = c[(e + 12368 | 0) >> 2];
 if (j | 0) {
  O = j;
  c[O >> 2] = (c[O >> 2] | 0) + 1;
 }
 h = (e + 8640 | 0) + 64 | 0;
 f = c[h >> 2] | 0;
 if (f | 0) {
  O = c[f >> 2] | 0;
  c[f >> 2] = O - 1;
  if ((O | 0) == 1) {
   cf(c[h >> 2] | 0);
   c[h >> 2] = 0;
   c[((e + 8640 | 0) + 68 | 0) >> 2] = 0;
   f = (e + 8640 | 0) + 68 | 0;
  } else f = (e + 8640 | 0) + 68 | 0;
  c[h >> 2] = 0;
  c[f >> 2] = 0;
 }
 c[h >> 2] = i;
 c[(e + 8640 | 0) + 68 >> 2] = c[(e + 12352 | 0) >> 2];
 f = i;
 if (i | 0) c[f >> 2] = (c[f >> 2] | 0) + 1;
 b[((e + 8640 | 0) + 256 | 0) >> 1] = b[(e + 12456 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 258 | 0) >> 1] = b[((e + 12456 | 0) + 2 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 260 | 0) >> 1] = b[((e + 12456 | 0) + 4 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 262 | 0) >> 1] = b[((e + 12456 | 0) + 6 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 264 | 0) >> 1] = b[((e + 12456 | 0) + 8 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 266 | 0) >> 1] = b[((e + 12456 | 0) + 10 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 268 | 0) >> 1] = b[((e + 12456 | 0) + 12 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 270 | 0) >> 1] = b[((e + 12456 | 0) + 14 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 272 | 0) >> 1] = b[((e + 12456 | 0) + 16 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 274 | 0) >> 1] = b[((e + 12456 | 0) + 18 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 276 | 0) >> 1] = b[((e + 12456 | 0) + 20 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 278 | 0) >> 1] = b[((e + 12456 | 0) + 22 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 280 | 0) >> 1] = b[((e + 12456 | 0) + 24 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 282 | 0) >> 1] = b[((e + 12456 | 0) + 26 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 284 | 0) >> 1] = b[((e + 12456 | 0) + 28 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 286 | 0) >> 1] = b[((e + 12456 | 0) + 30 | 0) >> 1] | 0;
 b[((e + 8640 | 0) + 288 | 0) >> 1] = b[((e + 12456 | 0) + 32 | 0) >> 1] | 0;
 O = b[n >> 1] | 0;
 a[((e + 8640 | 0) + 290 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 291 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 36 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 292 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 293 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 38 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 294 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 295 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 40 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 296 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 297 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 42 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 298 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 299 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 44 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 300 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 301 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 46 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 302 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 303 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[((e + 12456 | 0) + 48 | 0) >> 1] | 0;
 a[((e + 8640 | 0) + 304 | 0) >> 0] = O;
 a[((e + 8640 | 0) + 305 | 0) >> 0] = (O & 65535) >>> 8;
 O = b[m >> 1] | 0;
 c[e + 14536 >> 2] = f;
 c[e + 14624 >> 2] = i;
 c[e + 14632 >> 2] = j;
 c[e + 15712 >> 2] = m;
 c[e + 15720 >> 2] = n;
 c[e + 16192 >> 2] = O;
 c[e + 21912 >> 2] = p;
 c[e + 21936 >> 2] = s;
 c[e + 21944 >> 2] = D;
}

function Fe(e) {
 e = e | 0;
 var f = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0, s = 0.0, t = 0.0, u = 0.0, v = 0.0, w = 0.0, x = 0.0, y = 0.0, z = 0.0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0.0, J = 0.0, K = 0, L = 0, M = 0, N = 0.0, O = 0, Q = 0, R = 0.0, S = 0.0, T = 0.0, U = 0, V = 0.0, W = 0.0, X = 0.0, Y = 0.0, Z = 0.0, _ = 0.0, aa = 0.0, ba = 0.0, ca = 0.0, da = 0.0, ea = 0.0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0.0, pa = 0.0;
 ma = c[e + 328 >> 2] | 0;
 ka = c[e + 6392 >> 2] | 0;
 f = c[e + 6400 >> 2] | 0;
 la = c[e + 6408 >> 2] | 0;
 na = c[e + 7e3 >> 2] | 0;
 ja = c[e + 7008 >> 2] | 0;
 a : {
  if (na) {
   na = 0;
   switch (ja | 0) {
   case 1:
    {
     ia = c[ka + 80 >> 2] | 0;
     N = +g[ka + 68 >> 2];
     R = +g[ka + 72 >> 2];
     S = +g[ka + 76 >> 2];
     T = 1.0 / +(ia | 0);
     D = (a[(ma + 247 | 0) >> 0] | 0) != -1;
     E = (a[(ma + 248 | 0) >> 0] | 0) != -1;
     F = ka + 4 | 0;
     G = ka + 8 | 0;
     H = ka + 12 | 0;
     K = ka + 20 | 0;
     L = ka + 24 | 0;
     M = ka + 28 | 0;
     O = ka + 36 | 0;
     Q = ka + 40 | 0;
     U = ka + 44 | 0;
     fa = ka + 52 | 0;
     ga = ka + 56 | 0;
     ha = ka + 60 | 0;
     B = ($(ia, ia + 2 | 0) | 0) + 1 | 0;
     h = la;
     r = 0.0;
     s = 0.0;
     t = 0.0;
     C = 0;
     do {
      A = (C | 0) == 0;
      J = A ? R * -.5 : R * .5;
      if (D) {
       t = A ? -1.0 : 1.0;
       r = +g[F >> 2] * 0.0 + t * +g[K >> 2] + (+g[O >> 2] * 0.0 + +g[fa >> 2] * 0.0);
       s = +g[G >> 2] * 0.0 + t * +g[L >> 2] + (+g[Q >> 2] * 0.0 + +g[ga >> 2] * 0.0);
       t = +g[H >> 2] * 0.0 + t * +g[M >> 2] + (+g[U >> 2] * 0.0 + +g[ha >> 2] * 0.0);
      }
      if ((ia | 0) >= 0) {
       o = h;
       q = 0;
       while (1) {
        y = +(q | 0);
        I = A ? N * -.5 + N / +(ia | 0) * y : N * .5 - N / +(ia | 0) * y;
        z = T * y > -32768.0 ? T * y : -32768.0;
        p = ~~(z < 32767.0 ? z : 32767.0);
        z = T * y > -1.0 ? T * y : -1.0;
        z = (z < 1.0 ? z : 1.0) * 32767.0;
        if (D) {
         m = o;
         n = 0;
         while (1) {
          x = +(n | 0);
          w = S * -.5 + S / +(ia | 0) * x;
          u = I * +g[F >> 2] + J * +g[K >> 2] + (w * +g[O >> 2] + +g[fa >> 2]);
          v = I * +g[G >> 2] + J * +g[L >> 2] + (w * +g[Q >> 2] + +g[ga >> 2]);
          w = I * +g[H >> 2] + J * +g[M >> 2] + (w * +g[U >> 2] + +g[ha >> 2]);
          l = a[(ma + 246 | 0) >> 0] | 0;
          i = c[(ma + 508 | 0) >> 2] | 0;
          j = a[(ma + 263 | 0) >> 0] | 0;
          k = $(j & 255, m) | 0;
          k = i + (k + (d[ma + 230 + l >> 0] | 0)) | 0;
          l = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
          if (l << 24 >> 24 == 2) {
           g[k >> 2] = u;
           g[k + 4 >> 2] = v;
           g[k + 8 >> 2] = w;
          } else {
           Wd(k, l, u, v, w, 0.0) | 0;
           j = a[(ma + 263 | 0) >> 0] | 0;
           i = c[(ma + 508 | 0) >> 2] | 0;
          }
          l = a[(ma + 247 | 0) >> 0] | 0;
          j = $(j & 255, m) | 0;
          i = i + (j + (d[ma + 230 + l >> 0] | 0)) | 0;
          j = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = r;
           g[i + 4 >> 2] = s;
           g[i + 8 >> 2] = t;
          } else Wd(i, j, r, s, t, 0.0) | 0;
          b : do if (E) {
           l = a[(ma + 248 | 0) >> 0] | 0;
           i = $(d[(ma + 263 | 0) >> 0] | 0, m) | 0;
           i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + l >> 0] | 0)) | 0;
           switch (a[ma + 198 + (l << 1) + 1 >> 0] | 0) {
           case 1:
            {
             g[i >> 2] = T * y;
             g[i + 4 >> 2] = T * x;
             break b;
            }
           case 8:
            {
             ea = T * x > -32768.0 ? T * x : -32768.0;
             b[i >> 1] = p;
             b[i + 2 >> 1] = ~~(ea < 32767.0 ? ea : 32767.0);
             break b;
            }
           case 9:
            {
             da = T * x > -1.0 ? T * x : -1.0;
             ea = +zf(+z);
             l = ~~+zf(+((da < 1.0 ? da : 1.0) * 32767.0));
             b[i >> 1] = ~~ea;
             b[i + 2 >> 1] = l;
             break b;
            }
           default:
            break b;
           }
          } while (0);
          n = n + 1 | 0;
          if ((n | 0) == (ia + 1 | 0 | 0)) break; else m = m + 1 | 0;
         }
        } else {
         k = o;
         l = 0;
         while (1) {
          x = +(l | 0);
          w = S * -.5 + S / +(ia | 0) * x;
          u = I * +g[F >> 2] + J * +g[K >> 2] + (w * +g[O >> 2] + +g[fa >> 2]);
          v = I * +g[G >> 2] + J * +g[L >> 2] + (w * +g[Q >> 2] + +g[ga >> 2]);
          w = I * +g[H >> 2] + J * +g[M >> 2] + (w * +g[U >> 2] + +g[ha >> 2]);
          j = a[(ma + 246 | 0) >> 0] | 0;
          i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
          i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
          j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = u;
           g[i + 4 >> 2] = v;
           g[i + 8 >> 2] = w;
          } else Wd(i, j, u, v, w, 0.0) | 0;
          c : do if (E) {
           n = a[(ma + 248 | 0) >> 0] | 0;
           i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
           i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + n >> 0] | 0)) | 0;
           switch (a[ma + 198 + (n << 1) + 1 >> 0] | 0) {
           case 1:
            {
             g[i >> 2] = T * y;
             g[i + 4 >> 2] = T * x;
             break c;
            }
           case 8:
            {
             ea = T * x > -32768.0 ? T * x : -32768.0;
             b[i >> 1] = p;
             b[i + 2 >> 1] = ~~(ea < 32767.0 ? ea : 32767.0);
             break c;
            }
           case 9:
            {
             da = T * x > -1.0 ? T * x : -1.0;
             ea = +zf(+z);
             n = ~~+zf(+((da < 1.0 ? da : 1.0) * 32767.0));
             b[i >> 1] = ~~ea;
             b[i + 2 >> 1] = n;
             break c;
            }
           default:
            break c;
           }
          } while (0);
          l = l + 1 | 0;
          if ((l | 0) == (ia + 1 | 0 | 0)) break; else k = k + 1 | 0;
         }
        }
        q = q + 1 | 0;
        if ((q | 0) == (ia + 1 | 0 | 0)) break; else o = (ia + 1 | 0) + o | 0;
       }
       h = B + h | 0;
      }
      C = C + 1 | 0;
     } while ((C | 0) != 2);
     C = ($(ia, ia + 2 | 0) | 0) + 1 | 0;
     B = 0;
     do {
      A = (B | 0) == 0;
      J = A ? N * -.5 : N * .5;
      if (D) {
       t = A ? -1.0 : 1.0;
       r = t * +g[F >> 2] + +g[K >> 2] * 0.0 + (+g[O >> 2] * 0.0 + +g[fa >> 2] * 0.0);
       s = t * +g[G >> 2] + +g[L >> 2] * 0.0 + (+g[Q >> 2] * 0.0 + +g[ga >> 2] * 0.0);
       t = t * +g[H >> 2] + +g[M >> 2] * 0.0 + (+g[U >> 2] * 0.0 + +g[ha >> 2] * 0.0);
      }
      if ((ia | 0) >= 0) {
       o = h;
       q = 0;
       while (1) {
        y = +(q | 0);
        I = A ? R * .5 - R / +(ia | 0) * y : R * -.5 + R / +(ia | 0) * y;
        z = T * y > -32768.0 ? T * y : -32768.0;
        p = ~~(z < 32767.0 ? z : 32767.0);
        z = T * y > -1.0 ? T * y : -1.0;
        z = (z < 1.0 ? z : 1.0) * 32767.0;
        if (D) {
         m = o;
         n = 0;
         while (1) {
          x = +(n | 0);
          w = S * -.5 + S / +(ia | 0) * x;
          u = J * +g[F >> 2] + I * +g[K >> 2] + (w * +g[O >> 2] + +g[fa >> 2]);
          v = J * +g[G >> 2] + I * +g[L >> 2] + (w * +g[Q >> 2] + +g[ga >> 2]);
          w = J * +g[H >> 2] + I * +g[M >> 2] + (w * +g[U >> 2] + +g[ha >> 2]);
          l = a[(ma + 246 | 0) >> 0] | 0;
          i = c[(ma + 508 | 0) >> 2] | 0;
          j = a[(ma + 263 | 0) >> 0] | 0;
          k = $(j & 255, m) | 0;
          k = i + (k + (d[ma + 230 + l >> 0] | 0)) | 0;
          l = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
          if (l << 24 >> 24 == 2) {
           g[k >> 2] = u;
           g[k + 4 >> 2] = v;
           g[k + 8 >> 2] = w;
          } else {
           Wd(k, l, u, v, w, 0.0) | 0;
           j = a[(ma + 263 | 0) >> 0] | 0;
           i = c[(ma + 508 | 0) >> 2] | 0;
          }
          l = a[(ma + 247 | 0) >> 0] | 0;
          j = $(j & 255, m) | 0;
          i = i + (j + (d[ma + 230 + l >> 0] | 0)) | 0;
          j = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = r;
           g[i + 4 >> 2] = s;
           g[i + 8 >> 2] = t;
          } else Wd(i, j, r, s, t, 0.0) | 0;
          d : do if (E) {
           l = a[(ma + 248 | 0) >> 0] | 0;
           i = $(d[(ma + 263 | 0) >> 0] | 0, m) | 0;
           i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + l >> 0] | 0)) | 0;
           switch (a[ma + 198 + (l << 1) + 1 >> 0] | 0) {
           case 1:
            {
             g[i >> 2] = T * y;
             g[i + 4 >> 2] = T * x;
             break d;
            }
           case 8:
            {
             ea = T * x > -32768.0 ? T * x : -32768.0;
             b[i >> 1] = p;
             b[i + 2 >> 1] = ~~(ea < 32767.0 ? ea : 32767.0);
             break d;
            }
           case 9:
            {
             da = T * x > -1.0 ? T * x : -1.0;
             ea = +zf(+z);
             l = ~~+zf(+((da < 1.0 ? da : 1.0) * 32767.0));
             b[i >> 1] = ~~ea;
             b[i + 2 >> 1] = l;
             break d;
            }
           default:
            break d;
           }
          } while (0);
          n = n + 1 | 0;
          if ((n | 0) == (ia + 1 | 0 | 0)) break; else m = m + 1 | 0;
         }
        } else {
         k = o;
         l = 0;
         while (1) {
          x = +(l | 0);
          w = S * -.5 + S / +(ia | 0) * x;
          u = J * +g[F >> 2] + I * +g[K >> 2] + (w * +g[O >> 2] + +g[fa >> 2]);
          v = J * +g[G >> 2] + I * +g[L >> 2] + (w * +g[Q >> 2] + +g[ga >> 2]);
          w = J * +g[H >> 2] + I * +g[M >> 2] + (w * +g[U >> 2] + +g[ha >> 2]);
          j = a[(ma + 246 | 0) >> 0] | 0;
          i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
          i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
          j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = u;
           g[i + 4 >> 2] = v;
           g[i + 8 >> 2] = w;
          } else Wd(i, j, u, v, w, 0.0) | 0;
          e : do if (E) {
           n = a[(ma + 248 | 0) >> 0] | 0;
           i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
           i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + n >> 0] | 0)) | 0;
           switch (a[ma + 198 + (n << 1) + 1 >> 0] | 0) {
           case 1:
            {
             g[i >> 2] = T * y;
             g[i + 4 >> 2] = T * x;
             break e;
            }
           case 8:
            {
             ea = T * x > -32768.0 ? T * x : -32768.0;
             b[i >> 1] = p;
             b[i + 2 >> 1] = ~~(ea < 32767.0 ? ea : 32767.0);
             break e;
            }
           case 9:
            {
             da = T * x > -1.0 ? T * x : -1.0;
             ea = +zf(+z);
             n = ~~+zf(+((da < 1.0 ? da : 1.0) * 32767.0));
             b[i >> 1] = ~~ea;
             b[i + 2 >> 1] = n;
             break e;
            }
           default:
            break e;
           }
          } while (0);
          l = l + 1 | 0;
          if ((l | 0) == (ia + 1 | 0 | 0)) break; else k = k + 1 | 0;
         }
        }
        q = q + 1 | 0;
        if ((q | 0) == (ia + 1 | 0 | 0)) break; else o = (ia + 1 | 0) + o | 0;
       }
       h = C + h | 0;
      }
      B = B + 1 | 0;
     } while ((B | 0) != 2);
     C = ($(ia, ia + 2 | 0) | 0) + 1 | 0;
     B = 0;
     do {
      A = (B | 0) == 0;
      J = A ? S * -.5 : S * .5;
      if (D) {
       t = A ? -1.0 : 1.0;
       r = +g[F >> 2] * 0.0 + +g[K >> 2] * 0.0 + (t * +g[O >> 2] + +g[fa >> 2] * 0.0);
       s = +g[G >> 2] * 0.0 + +g[L >> 2] * 0.0 + (t * +g[Q >> 2] + +g[ga >> 2] * 0.0);
       t = +g[H >> 2] * 0.0 + +g[M >> 2] * 0.0 + (t * +g[U >> 2] + +g[ha >> 2] * 0.0);
      }
      if ((ia | 0) >= 0) {
       o = h;
       q = 0;
       while (1) {
        y = +(q | 0);
        I = A ? N * .5 - N / +(ia | 0) * y : N * -.5 + N / +(ia | 0) * y;
        z = T * y > -32768.0 ? T * y : -32768.0;
        p = ~~(z < 32767.0 ? z : 32767.0);
        z = T * y > -1.0 ? T * y : -1.0;
        z = (z < 1.0 ? z : 1.0) * 32767.0;
        if (D) {
         m = o;
         n = 0;
         while (1) {
          x = +(n | 0);
          w = R * -.5 + R / +(ia | 0) * x;
          u = I * +g[F >> 2] + w * +g[K >> 2] + (J * +g[O >> 2] + +g[fa >> 2]);
          v = I * +g[G >> 2] + w * +g[L >> 2] + (J * +g[Q >> 2] + +g[ga >> 2]);
          w = I * +g[H >> 2] + w * +g[M >> 2] + (J * +g[U >> 2] + +g[ha >> 2]);
          l = a[(ma + 246 | 0) >> 0] | 0;
          i = c[(ma + 508 | 0) >> 2] | 0;
          j = a[(ma + 263 | 0) >> 0] | 0;
          k = $(j & 255, m) | 0;
          k = i + (k + (d[ma + 230 + l >> 0] | 0)) | 0;
          l = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
          if (l << 24 >> 24 == 2) {
           g[k >> 2] = u;
           g[k + 4 >> 2] = v;
           g[k + 8 >> 2] = w;
          } else {
           Wd(k, l, u, v, w, 0.0) | 0;
           j = a[(ma + 263 | 0) >> 0] | 0;
           i = c[(ma + 508 | 0) >> 2] | 0;
          }
          l = a[(ma + 247 | 0) >> 0] | 0;
          j = $(j & 255, m) | 0;
          i = i + (j + (d[ma + 230 + l >> 0] | 0)) | 0;
          j = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = r;
           g[i + 4 >> 2] = s;
           g[i + 8 >> 2] = t;
          } else Wd(i, j, r, s, t, 0.0) | 0;
          f : do if (E) {
           l = a[(ma + 248 | 0) >> 0] | 0;
           i = $(d[(ma + 263 | 0) >> 0] | 0, m) | 0;
           i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + l >> 0] | 0)) | 0;
           switch (a[ma + 198 + (l << 1) + 1 >> 0] | 0) {
           case 1:
            {
             g[i >> 2] = T * y;
             g[i + 4 >> 2] = T * x;
             break f;
            }
           case 8:
            {
             ea = T * x > -32768.0 ? T * x : -32768.0;
             b[i >> 1] = p;
             b[i + 2 >> 1] = ~~(ea < 32767.0 ? ea : 32767.0);
             break f;
            }
           case 9:
            {
             da = T * x > -1.0 ? T * x : -1.0;
             ea = +zf(+z);
             l = ~~+zf(+((da < 1.0 ? da : 1.0) * 32767.0));
             b[i >> 1] = ~~ea;
             b[i + 2 >> 1] = l;
             break f;
            }
           default:
            break f;
           }
          } while (0);
          n = n + 1 | 0;
          if ((n | 0) == (ia + 1 | 0 | 0)) break; else m = m + 1 | 0;
         }
        } else {
         k = o;
         l = 0;
         while (1) {
          x = +(l | 0);
          w = R * -.5 + R / +(ia | 0) * x;
          u = I * +g[F >> 2] + w * +g[K >> 2] + (J * +g[O >> 2] + +g[fa >> 2]);
          v = I * +g[G >> 2] + w * +g[L >> 2] + (J * +g[Q >> 2] + +g[ga >> 2]);
          w = I * +g[H >> 2] + w * +g[M >> 2] + (J * +g[U >> 2] + +g[ha >> 2]);
          j = a[(ma + 246 | 0) >> 0] | 0;
          i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
          i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
          j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = u;
           g[i + 4 >> 2] = v;
           g[i + 8 >> 2] = w;
          } else Wd(i, j, u, v, w, 0.0) | 0;
          g : do if (E) {
           n = a[(ma + 248 | 0) >> 0] | 0;
           i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
           i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + n >> 0] | 0)) | 0;
           switch (a[ma + 198 + (n << 1) + 1 >> 0] | 0) {
           case 1:
            {
             g[i >> 2] = T * y;
             g[i + 4 >> 2] = T * x;
             break g;
            }
           case 8:
            {
             ea = T * x > -32768.0 ? T * x : -32768.0;
             b[i >> 1] = p;
             b[i + 2 >> 1] = ~~(ea < 32767.0 ? ea : 32767.0);
             break g;
            }
           case 9:
            {
             da = T * x > -1.0 ? T * x : -1.0;
             ea = +zf(+z);
             n = ~~+zf(+((da < 1.0 ? da : 1.0) * 32767.0));
             b[i >> 1] = ~~ea;
             b[i + 2 >> 1] = n;
             break g;
            }
           default:
            break g;
           }
          } while (0);
          l = l + 1 | 0;
          if ((l | 0) == (ia + 1 | 0 | 0)) break; else k = k + 1 | 0;
         }
        }
        q = q + 1 | 0;
        if ((q | 0) == (ia + 1 | 0 | 0)) break; else o = (ia + 1 | 0) + o | 0;
       }
       h = C + h | 0;
      }
      B = B + 1 | 0;
     } while ((B | 0) != 2);
     if ((a[(ma + 256 | 0) >> 0] | 0) != -1) Vd(ma, ka, la);
     if ((a[(ma + 253 | 0) >> 0] | 0) != -1) oe(20784, e + 200 | 0);
     if ((a[(ma + 252 | 0) >> 0] | 0) != -1) oe(20848, e + 208 | 0);
     if ((ia | 0) > 0) {
      k = ($(ia, ia) | 0) << 1;
      h = f;
      o = 0;
      while (1) {
       l = $(o, ia + 1 | 0) | 0;
       i = h;
       q = 0;
       while (1) {
        m = ($(q + l | 0, ia + 1 | 0) | 0) + la | 0;
        n = c[(ma + 512 | 0) >> 2] | 0;
        j = i;
        p = 0;
        while (1) {
         ga = m + p | 0;
         ha = j * 3 | 0;
         b[(n + (ha << 1) | 0) >> 1] = ga & 65535;
         b[(n + (ha << 1) | 0) + 2 >> 1] = ga + 1;
         b[(n + (ha << 1) | 0) + 4 >> 1] = (ga + ia | 0) + 2 & 65535;
         b[(n + (ha + 3 << 1) | 0) >> 1] = ga & 65535;
         b[(n + (ha + 3 << 1) | 0) + 2 >> 1] = (ga + ia | 0) + 2 & 65535;
         b[(n + (ha + 3 << 1) | 0) + 4 >> 1] = (ga + ia | 0) + 1;
         p = p + 1 | 0;
         if ((p | 0) == (ia | 0)) break; else j = j + 2 | 0;
        }
        q = q + 1 | 0;
        if ((q | 0) == (ia | 0)) break; else i = (ia << 1) + i | 0;
       }
       o = o + 1 | 0;
       if ((o | 0) == 6) break; else h = k + h | 0;
      }
     }
     break;
    }
   default:
    na = 1;
   }
  }
  if (na) {
   na = 0;
   switch (ja | 0) {
   case 2:
    {
     Q = c[ka + 80 >> 2] | 0;
     O = c[ka + 84 >> 2] | 0;
     J = +g[ka + 68 >> 2];
     n = (a[(ma + 247 | 0) >> 0] | 0) == -1;
     o = (a[(ma + 248 | 0) >> 0] | 0) == -1;
     if ((O | 0) >= 0) {
      p = ka + 4 | 0;
      q = ka + 8 | 0;
      A = ka + 12 | 0;
      B = ka + 20 | 0;
      C = ka + 24 | 0;
      D = ka + 28 | 0;
      E = ka + 36 | 0;
      F = ka + 40 | 0;
      G = ka + 44 | 0;
      H = ka + 52 | 0;
      K = ka + 56 | 0;
      L = ka + 60 | 0;
      h = la;
      M = 0;
      while (1) {
       r = +(M | 0);
       z = +ef(r * 3.1415927410125732 / +(O | 0));
       I = +df(r * 3.1415927410125732 / +(O | 0));
       if ((Q | 0) >= 0) {
        x = 1.0 / +(O | 0) * r;
        y = x > -32768.0 ? x : -32768.0;
        l = ~~(y < 32767.0 ? y : 32767.0);
        y = x > -1.0 ? x : -1.0;
        y = (y < 1.0 ? y : 1.0) * 32767.0;
        k = h;
        m = 0;
        while (1) {
         w = +(m | 0);
         u = +ef(w * 6.2831854820251465 / +(Q | 0));
         v = z * +df(w * 6.2831854820251465 / +(Q | 0));
         r = J * (z * u) * +g[p >> 2] + J * v * +g[B >> 2] + (J * I * +g[E >> 2] + +g[H >> 2]);
         s = J * (z * u) * +g[q >> 2] + J * v * +g[C >> 2] + (J * I * +g[F >> 2] + +g[K >> 2]);
         t = J * (z * u) * +g[A >> 2] + J * v * +g[D >> 2] + (J * I * +g[G >> 2] + +g[L >> 2]);
         j = a[(ma + 246 | 0) >> 0] | 0;
         i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
         i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
         j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
         if (j << 24 >> 24 == 2) {
          g[i >> 2] = r;
          g[i + 4 >> 2] = s;
          g[i + 8 >> 2] = t;
         } else Wd(i, j, r, s, t, 0.0) | 0;
         do if (!n) {
          s = z * u * +g[p >> 2] + v * +g[B >> 2] + (I * +g[E >> 2] + +g[H >> 2] * 0.0);
          t = z * u * +g[q >> 2] + v * +g[C >> 2] + (I * +g[F >> 2] + +g[K >> 2] * 0.0);
          r = z * u * +g[A >> 2] + v * +g[D >> 2] + (I * +g[G >> 2] + +g[L >> 2] * 0.0);
          j = a[(ma + 247 | 0) >> 0] | 0;
          i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
          i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
          j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = s;
           g[i + 4 >> 2] = t;
           g[i + 8 >> 2] = r;
           break;
          } else {
           Wd(i, j, s, t, r, 0.0) | 0;
           break;
          }
         } while (0);
         h : do if (!o) {
          r = 1.0 / +(Q | 0) * w;
          ia = a[(ma + 248 | 0) >> 0] | 0;
          i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
          i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + ia >> 0] | 0)) | 0;
          switch (a[ma + 198 + (ia << 1) + 1 >> 0] | 0) {
          case 1:
           {
            g[i >> 2] = r;
            g[i + 4 >> 2] = x;
            break h;
           }
          case 8:
           {
            ea = r > -32768.0 ? r : -32768.0;
            b[i >> 1] = ~~(ea < 32767.0 ? ea : 32767.0);
            b[i + 2 >> 1] = l;
            break h;
           }
          case 9:
           {
            ea = r > -1.0 ? r : -1.0;
            ea = +zf(+((ea < 1.0 ? ea : 1.0) * 32767.0));
            ia = ~~+zf(+y);
            b[i >> 1] = ~~ea;
            b[i + 2 >> 1] = ia;
            break h;
           }
          default:
           break h;
          }
         } while (0);
         m = m + 1 | 0;
         if ((m | 0) == (Q + 1 | 0 | 0)) break; else k = k + 1 | 0;
        }
        h = (Q + 1 | 0) + h | 0;
       }
       if ((M | 0) == (O | 0)) break; else M = M + 1 | 0;
      }
     }
     if ((a[(ma + 256 | 0) >> 0] | 0) != -1) Vd(ma, ka, la);
     if ((a[(ma + 253 | 0) >> 0] | 0) != -1) oe(20911, e + 216 | 0);
     if ((a[(ma + 252 | 0) >> 0] | 0) != -1) oe(20978, e + 224 | 0);
     if ((Q | 0) > 0) {
      i = la + 1 + Q | 0;
      j = c[(ma + 512 | 0) >> 2] | 0;
      h = f;
      k = 0;
      while (1) {
       ha = i + k | 0;
       ia = j + (h * 3 << 1) | 0;
       b[ia >> 1] = k + la;
       b[ia + 2 >> 1] = ha;
       b[ia + 4 >> 1] = ha + 1;
       k = k + 1 | 0;
       if ((k | 0) == (Q | 0)) break; else h = h + 1 | 0;
      }
      h = Q + f | 0;
     } else h = f;
     if ((O + -1 | 0 | 0) > 1) {
      if ((Q | 0) <= 0) {
       c[e + 7016 >> 2] = 2;
       c[e + 7020 >> 2] = 15;
       break a;
      }
      i = h;
      n = 1;
      while (1) {
       k = ($(n, Q + 1 | 0) | 0) + la | 0;
       l = c[(ma + 512 | 0) >> 2] | 0;
       j = i;
       m = 0;
       while (1) {
        ga = m + k | 0;
        ha = ((Q + 1 | 0) + k | 0) + m | 0;
        ia = j * 3 | 0;
        b[(l + (ia << 1) | 0) >> 1] = ga & 65535;
        b[(l + (ia << 1) | 0) + 2 >> 1] = ha + 1 & 65535;
        b[(l + (ia << 1) | 0) + 4 >> 1] = ga + 1;
        b[(l + (ia + 3 << 1) | 0) >> 1] = ga & 65535;
        b[(l + (ia + 3 << 1) | 0) + 2 >> 1] = ha;
        b[(l + (ia + 3 << 1) | 0) + 4 >> 1] = ha + 1 & 65535;
        m = m + 1 | 0;
        if ((m | 0) == (Q | 0)) break; else j = j + 2 | 0;
       }
       n = n + 1 | 0;
       if ((n | 0) == (O + -1 | 0 | 0)) break; else i = (Q << 1) + i | 0;
      }
      h = h + ($(Q, (O << 1) + -4 | 0) | 0) | 0;
     }
     j = ($(O + -1 | 0, Q + 1 | 0) | 0) + la | 0;
     if ((Q | 0) > 0) {
      k = c[(ma + 512 | 0) >> 2] | 0;
      i = 0;
      while (1) {
       ha = i + j | 0;
       ia = k + (h * 3 << 1) | 0;
       b[ia >> 1] = ha;
       b[ia + 2 >> 1] = (Q + 2 + j | 0) + i;
       b[ia + 4 >> 1] = ha + 1;
       i = i + 1 | 0;
       if ((i | 0) == (Q | 0)) break; else h = h + 1 | 0;
      }
     }
     break;
    }
   default:
    na = 1;
   }
  }
  if (na) {
   na = 0;
   switch (ja | 0) {
   case 3:
    {
     O = c[ka + 80 >> 2] | 0;
     M = c[ka + 84 >> 2] | 0;
     da = +g[ka + 68 >> 2];
     ea = +g[ka + 76 >> 2];
     L = (a[(ma + 247 | 0) >> 0] | 0) != -1;
     o = ka + 4 | 0;
     u = +g[o >> 2] * 0.0;
     B = ka + 8 | 0;
     v = +g[B >> 2] * 0.0;
     F = ka + 12 | 0;
     w = +g[F >> 2] * 0.0;
     p = ka + 20 | 0;
     x = +g[p >> 2];
     C = ka + 24 | 0;
     y = +g[C >> 2];
     G = ka + 28 | 0;
     z = +g[G >> 2];
     q = ka + 36 | 0;
     I = +g[q >> 2] * 0.0;
     D = ka + 40 | 0;
     J = +g[D >> 2] * 0.0;
     H = ka + 44 | 0;
     N = +g[H >> 2] * 0.0;
     A = ka + 52 | 0;
     R = +g[A >> 2];
     E = ka + 56 | 0;
     S = +g[E >> 2];
     K = ka + 60 | 0;
     T = +g[K >> 2];
     do if ((O | 0) < 0) h = la; else {
      n = O + la | 0;
      if (L) {
       l = la;
       m = 0;
       while (1) {
        k = a[(ma + 246 | 0) >> 0] | 0;
        h = c[(ma + 508 | 0) >> 2] | 0;
        i = a[(ma + 263 | 0) >> 0] | 0;
        j = $(i & 255, l) | 0;
        j = h + (j + (d[ma + 230 + k >> 0] | 0)) | 0;
        k = a[ma + 198 + (k << 1) + 1 >> 0] | 0;
        if (k << 24 >> 24 == 2) {
         g[j >> 2] = u + ea * .5 * x + (I + R);
         g[j + 4 >> 2] = v + ea * .5 * y + (J + S);
         g[j + 8 >> 2] = w + ea * .5 * z + (N + T);
        } else {
         Wd(j, k, u + ea * .5 * x + (I + R), v + ea * .5 * y + (J + S), w + ea * .5 * z + (N + T), 0.0) | 0;
         i = a[(ma + 263 | 0) >> 0] | 0;
         h = c[(ma + 508 | 0) >> 2] | 0;
        }
        ia = a[(ma + 247 | 0) >> 0] | 0;
        i = $(i & 255, l) | 0;
        h = h + (i + (d[ma + 230 + ia >> 0] | 0)) | 0;
        i = a[ma + 198 + (ia << 1) + 1 >> 0] | 0;
        if (i << 24 >> 24 == 2) {
         g[h >> 2] = u + x + (I + R * 0.0);
         g[h + 4 >> 2] = v + y + (J + S * 0.0);
         g[h + 8 >> 2] = w + z + (N + T * 0.0);
        } else Wd(h, i, u + x + (I + R * 0.0), v + y + (J + S * 0.0), w + z + (N + T * 0.0), 0.0) | 0;
        if ((m | 0) == (O | 0)) break; else {
         l = l + 1 | 0;
         m = m + 1 | 0;
        }
       }
      } else {
       h = la;
       k = 0;
       while (1) {
        j = a[(ma + 246 | 0) >> 0] | 0;
        i = $(d[(ma + 263 | 0) >> 0] | 0, h) | 0;
        i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
        j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
        if (j << 24 >> 24 == 2) {
         g[i >> 2] = u + ea * .5 * x + (I + R);
         g[i + 4 >> 2] = v + ea * .5 * y + (J + S);
         g[i + 8 >> 2] = w + ea * .5 * z + (N + T);
        } else Wd(i, j, u + ea * .5 * x + (I + R), v + ea * .5 * y + (J + S), w + ea * .5 * z + (N + T), 0.0) | 0;
        if ((k | 0) == (O | 0)) break; else {
         h = h + 1 | 0;
         k = k + 1 | 0;
        }
       }
      }
      if (L) {
       l = n + 1 | 0;
       m = 0;
      } else {
       h = n + 1 | 0;
       k = 0;
       while (1) {
        t = +(k | 0) * 6.2831854820251465 / +(O | 0);
        ca = +ef(t);
        t = da * +df(t);
        r = da * ca * +g[o >> 2] + ea * .5 * +g[p >> 2] + (t * +g[q >> 2] + +g[A >> 2]);
        s = da * ca * +g[B >> 2] + ea * .5 * +g[C >> 2] + (t * +g[D >> 2] + +g[E >> 2]);
        t = da * ca * +g[F >> 2] + ea * .5 * +g[G >> 2] + (t * +g[H >> 2] + +g[K >> 2]);
        j = a[(ma + 246 | 0) >> 0] | 0;
        i = $(d[(ma + 263 | 0) >> 0] | 0, h) | 0;
        i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
        j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
        if (j << 24 >> 24 == 2) {
         g[i >> 2] = r;
         g[i + 4 >> 2] = s;
         g[i + 8 >> 2] = t;
        } else Wd(i, j, r, s, t, 0.0) | 0;
        if ((k | 0) == (O | 0)) break; else {
         h = h + 1 | 0;
         k = k + 1 | 0;
        }
       }
       h = ((n + 1 | 0) + O | 0) + 1 | 0;
       break;
      }
      while (1) {
       t = +(m | 0) * 6.2831854820251465 / +(O | 0);
       ca = +ef(t);
       t = da * +df(t);
       r = da * ca * +g[o >> 2] + ea * .5 * +g[p >> 2] + (t * +g[q >> 2] + +g[A >> 2]);
       s = da * ca * +g[B >> 2] + ea * .5 * +g[C >> 2] + (t * +g[D >> 2] + +g[E >> 2]);
       t = da * ca * +g[F >> 2] + ea * .5 * +g[G >> 2] + (t * +g[H >> 2] + +g[K >> 2]);
       k = a[(ma + 246 | 0) >> 0] | 0;
       h = c[(ma + 508 | 0) >> 2] | 0;
       i = a[(ma + 263 | 0) >> 0] | 0;
       j = $(i & 255, l) | 0;
       j = h + (j + (d[ma + 230 + k >> 0] | 0)) | 0;
       k = a[ma + 198 + (k << 1) + 1 >> 0] | 0;
       if (k << 24 >> 24 == 2) {
        g[j >> 2] = r;
        g[j + 4 >> 2] = s;
        g[j + 8 >> 2] = t;
       } else {
        Wd(j, k, r, s, t, 0.0) | 0;
        i = a[(ma + 263 | 0) >> 0] | 0;
        h = c[(ma + 508 | 0) >> 2] | 0;
       }
       ia = a[(ma + 247 | 0) >> 0] | 0;
       i = $(i & 255, l) | 0;
       h = h + (i + (d[ma + 230 + ia >> 0] | 0)) | 0;
       i = a[ma + 198 + (ia << 1) + 1 >> 0] | 0;
       if (i << 24 >> 24 == 2) {
        g[h >> 2] = u + x + (I + R * 0.0);
        g[h + 4 >> 2] = v + y + (J + S * 0.0);
        g[h + 8 >> 2] = w + z + (N + T * 0.0);
       } else Wd(h, i, u + x + (I + R * 0.0), v + y + (J + S * 0.0), w + z + (N + T * 0.0), 0.0) | 0;
       if ((m | 0) == (O | 0)) break; else {
        l = l + 1 | 0;
        m = m + 1 | 0;
       }
      }
      h = ((n + 1 | 0) + O | 0) + 1 | 0;
     } while (0);
     if ((M | 0) >= 0) {
      m = 0;
      while (1) {
       w = ea * .5 - ea / +(M | 0) * +(m | 0);
       if ((O | 0) >= 0) {
        k = h;
        l = 0;
        while (1) {
         v = +(l | 0) * 6.2831854820251465 / +(O | 0);
         u = +ef(v);
         v = +df(v);
         r = da * u * +g[o >> 2] + w * +g[p >> 2] + (da * v * +g[q >> 2] + +g[A >> 2]);
         s = da * u * +g[B >> 2] + w * +g[C >> 2] + (da * v * +g[D >> 2] + +g[E >> 2]);
         t = da * u * +g[F >> 2] + w * +g[G >> 2] + (da * v * +g[H >> 2] + +g[K >> 2]);
         j = a[(ma + 246 | 0) >> 0] | 0;
         i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
         i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
         j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
         if (j << 24 >> 24 == 2) {
          g[i >> 2] = r;
          g[i + 4 >> 2] = s;
          g[i + 8 >> 2] = t;
         } else Wd(i, j, r, s, t, 0.0) | 0;
         do if (L) {
          s = u * +g[o >> 2] + +g[p >> 2] * 0.0 + (v * +g[q >> 2] + +g[A >> 2] * 0.0);
          t = u * +g[B >> 2] + +g[C >> 2] * 0.0 + (v * +g[D >> 2] + +g[E >> 2] * 0.0);
          r = u * +g[F >> 2] + +g[G >> 2] * 0.0 + (v * +g[H >> 2] + +g[K >> 2] * 0.0);
          j = a[(ma + 247 | 0) >> 0] | 0;
          i = $(d[(ma + 263 | 0) >> 0] | 0, k) | 0;
          i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
          j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
          if (j << 24 >> 24 == 2) {
           g[i >> 2] = s;
           g[i + 4 >> 2] = t;
           g[i + 8 >> 2] = r;
           break;
          } else {
           Wd(i, j, s, t, r, 0.0) | 0;
           break;
          }
         } while (0);
         l = l + 1 | 0;
         if ((l | 0) == (O + 1 | 0 | 0)) break; else k = k + 1 | 0;
        }
        h = (O + 1 | 0) + h | 0;
       }
       if ((m | 0) == (M | 0)) break; else m = m + 1 | 0;
      }
     }
     R = +g[o >> 2];
     S = +g[B >> 2];
     T = +g[F >> 2];
     V = +g[p >> 2];
     W = +g[C >> 2];
     X = +g[G >> 2];
     Y = +g[q >> 2];
     Z = +g[D >> 2];
     _ = +g[H >> 2];
     aa = +g[A >> 2];
     ba = +g[E >> 2];
     ca = +g[K >> 2];
     do if ((O | 0) >= 0) {
      n = h + O | 0;
      if (L) {
       r = R;
       v = S;
       z = T;
       s = V;
       w = W;
       I = X;
       t = Y;
       x = Z;
       J = _;
       u = aa;
       y = ba;
       N = ca;
       m = 0;
      } else {
       r = R;
       v = S;
       z = T;
       s = V;
       w = W;
       I = X;
       t = Y;
       x = Z;
       J = _;
       u = aa;
       y = ba;
       N = ca;
       k = 0;
       while (1) {
        oa = +(k | 0) * 6.2831854820251465 / +(O | 0);
        pa = +ef(oa);
        oa = da * +df(oa);
        t = da * pa * r + ea * -.5 * s + (oa * t + u);
        s = da * pa * v + ea * -.5 * w + (oa * x + y);
        r = da * pa * z + ea * -.5 * I + (oa * J + N);
        j = a[(ma + 246 | 0) >> 0] | 0;
        i = $(d[(ma + 263 | 0) >> 0] | 0, h) | 0;
        i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
        j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
        if (j << 24 >> 24 == 2) {
         g[i >> 2] = t;
         g[i + 4 >> 2] = s;
         g[i + 8 >> 2] = r;
        } else Wd(i, j, t, s, r, 0.0) | 0;
        if ((k | 0) == (O | 0)) break;
        h = h + 1 | 0;
        r = +g[o >> 2];
        v = +g[B >> 2];
        z = +g[F >> 2];
        s = +g[p >> 2];
        w = +g[C >> 2];
        I = +g[G >> 2];
        t = +g[q >> 2];
        x = +g[D >> 2];
        J = +g[H >> 2];
        u = +g[A >> 2];
        y = +g[E >> 2];
        N = +g[K >> 2];
        k = k + 1 | 0;
       }
       h = n + 1 | 0;
       break;
      }
      while (1) {
       pa = +(m | 0) * 6.2831854820251465 / +(O | 0);
       oa = +ef(pa);
       pa = da * +df(pa);
       t = da * oa * r + ea * -.5 * s + (pa * t + u);
       s = da * oa * v + ea * -.5 * w + (pa * x + y);
       r = da * oa * z + ea * -.5 * I + (pa * J + N);
       l = a[(ma + 246 | 0) >> 0] | 0;
       i = c[(ma + 508 | 0) >> 2] | 0;
       j = a[(ma + 263 | 0) >> 0] | 0;
       k = $(j & 255, h) | 0;
       k = i + (k + (d[ma + 230 + l >> 0] | 0)) | 0;
       l = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
       if (l << 24 >> 24 == 2) {
        g[k >> 2] = t;
        g[k + 4 >> 2] = s;
        g[k + 8 >> 2] = r;
       } else {
        Wd(k, l, t, s, r, 0.0) | 0;
        j = a[(ma + 263 | 0) >> 0] | 0;
        i = c[(ma + 508 | 0) >> 2] | 0;
       }
       ia = a[(ma + 247 | 0) >> 0] | 0;
       j = $(j & 255, h) | 0;
       i = i + (j + (d[ma + 230 + ia >> 0] | 0)) | 0;
       j = a[ma + 198 + (ia << 1) + 1 >> 0] | 0;
       if (j << 24 >> 24 == 2) {
        g[i >> 2] = R * 0.0 - V + (Y * 0.0 + aa * 0.0);
        g[i + 4 >> 2] = S * 0.0 - W + (Z * 0.0 + ba * 0.0);
        g[i + 8 >> 2] = T * 0.0 - X + (_ * 0.0 + ca * 0.0);
       } else Wd(i, j, R * 0.0 - V + (Y * 0.0 + aa * 0.0), S * 0.0 - W + (Z * 0.0 + ba * 0.0), T * 0.0 - X + (_ * 0.0 + ca * 0.0), 0.0) | 0;
       if ((m | 0) == (O | 0)) break;
       h = h + 1 | 0;
       r = +g[o >> 2];
       v = +g[B >> 2];
       z = +g[F >> 2];
       s = +g[p >> 2];
       w = +g[C >> 2];
       I = +g[G >> 2];
       t = +g[q >> 2];
       x = +g[D >> 2];
       J = +g[H >> 2];
       u = +g[A >> 2];
       y = +g[E >> 2];
       N = +g[K >> 2];
       m = m + 1 | 0;
      }
      h = n + 1 | 0;
     } while (0);
     t = +g[o >> 2] * 0.0 + ea * -.5 * +g[p >> 2] + (+g[q >> 2] * 0.0 + +g[A >> 2]);
     s = +g[B >> 2] * 0.0 + ea * -.5 * +g[C >> 2] + (+g[D >> 2] * 0.0 + +g[E >> 2]);
     r = +g[F >> 2] * 0.0 + ea * -.5 * +g[G >> 2] + (+g[H >> 2] * 0.0 + +g[K >> 2]);
     i : do if ((O | 0) >= 0) {
      if (L) m = 0; else {
       k = 0;
       while (1) {
        j = a[(ma + 246 | 0) >> 0] | 0;
        i = $(d[(ma + 263 | 0) >> 0] | 0, h) | 0;
        i = (c[(ma + 508 | 0) >> 2] | 0) + (i + (d[ma + 230 + j >> 0] | 0)) | 0;
        j = a[ma + 198 + (j << 1) + 1 >> 0] | 0;
        if (j << 24 >> 24 == 2) {
         g[i >> 2] = t;
         g[i + 4 >> 2] = s;
         g[i + 8 >> 2] = r;
        } else Wd(i, j, t, s, r, 0.0) | 0;
        if ((k | 0) == (O | 0)) break i; else {
         h = h + 1 | 0;
         k = k + 1 | 0;
        }
       }
      }
      while (1) {
       l = a[(ma + 246 | 0) >> 0] | 0;
       i = c[(ma + 508 | 0) >> 2] | 0;
       j = a[(ma + 263 | 0) >> 0] | 0;
       k = $(j & 255, h) | 0;
       k = i + (k + (d[ma + 230 + l >> 0] | 0)) | 0;
       l = a[ma + 198 + (l << 1) + 1 >> 0] | 0;
       if (l << 24 >> 24 == 2) {
        g[k >> 2] = t;
        g[k + 4 >> 2] = s;
        g[k + 8 >> 2] = r;
       } else {
        Wd(k, l, t, s, r, 0.0) | 0;
        j = a[(ma + 263 | 0) >> 0] | 0;
        i = c[(ma + 508 | 0) >> 2] | 0;
       }
       ia = a[(ma + 247 | 0) >> 0] | 0;
       j = $(j & 255, h) | 0;
       i = i + (j + (d[ma + 230 + ia >> 0] | 0)) | 0;
       j = a[ma + 198 + (ia << 1) + 1 >> 0] | 0;
       if (j << 24 >> 24 == 2) {
        g[i >> 2] = R * 0.0 - V + (Y * 0.0 + aa * 0.0);
        g[i + 4 >> 2] = S * 0.0 - W + (Z * 0.0 + ba * 0.0);
        g[i + 8 >> 2] = T * 0.0 - X + (_ * 0.0 + ca * 0.0);
       } else Wd(i, j, R * 0.0 - V + (Y * 0.0 + aa * 0.0), S * 0.0 - W + (Z * 0.0 + ba * 0.0), T * 0.0 - X + (_ * 0.0 + ca * 0.0), 0.0) | 0;
       if ((m | 0) == (O | 0)) break; else {
        h = h + 1 | 0;
        m = m + 1 | 0;
       }
      }
     } while (0);
     if ((a[(ma + 256 | 0) >> 0] | 0) != -1) Vd(ma, ka, la);
     if ((a[(ma + 253 | 0) >> 0] | 0) != -1) oe(21044, e + 232 | 0);
     if ((a[(ma + 252 | 0) >> 0] | 0) != -1) oe(21113, e + 240 | 0);
     if ((a[(ma + 248 | 0) >> 0] | 0) != -1) oe(21181, e + 248 | 0);
     if ((O | 0) > 0) {
      i = la + 1 + O | 0;
      j = c[(ma + 512 | 0) >> 2] | 0;
      h = f;
      k = 0;
      while (1) {
       ha = i + k | 0;
       ia = j + (h * 3 << 1) | 0;
       b[ia >> 1] = k + la;
       b[ia + 2 >> 1] = ha + 1;
       b[ia + 4 >> 1] = ha;
       k = k + 1 | 0;
       if ((k | 0) == (O | 0)) break; else h = h + 1 | 0;
      }
      h = O + f | 0;
     } else h = f;
     if ((M | 0) > 0) {
      if ((O | 0) <= 0) {
       c[e + 7016 >> 2] = 2;
       c[e + 7020 >> 2] = 15;
       break a;
      }
      k = $(M, O) | 0;
      i = h;
      o = 0;
      while (1) {
       l = ($(o + 2 | 0, O + 1 | 0) | 0) + la | 0;
       m = c[(ma + 512 | 0) >> 2] | 0;
       j = i;
       n = 0;
       while (1) {
        ga = n + l | 0;
        ha = ((O + 1 | 0) + l | 0) + n | 0;
        ia = j * 3 | 0;
        b[(m + (ia << 1) | 0) >> 1] = ga & 65535;
        b[(m + (ia << 1) | 0) + 2 >> 1] = ga + 1;
        b[(m + (ia << 1) | 0) + 4 >> 1] = ha + 1 & 65535;
        b[(m + (ia + 3 << 1) | 0) >> 1] = ga & 65535;
        b[(m + (ia + 3 << 1) | 0) + 2 >> 1] = ha + 1 & 65535;
        b[(m + (ia + 3 << 1) | 0) + 4 >> 1] = ha;
        n = n + 1 | 0;
        if ((n | 0) == (O | 0)) break; else j = j + 2 | 0;
       }
       o = o + 1 | 0;
       if ((o | 0) == (M | 0)) break; else i = (O << 1) + i | 0;
      }
      h = h + (k << 1) | 0;
     }
     j = ($(M + 3 | 0, O + 1 | 0) | 0) + la | 0;
     if ((O | 0) <= 0) {
      c[e + 7016 >> 2] = 2;
      c[e + 7020 >> 2] = 15;
      break a;
     }
     k = c[(ma + 512 | 0) >> 2] | 0;
     i = 0;
     while (1) {
      ha = i + j | 0;
      ia = k + (h * 3 << 1) | 0;
      b[ia >> 1] = ha;
      b[ia + 2 >> 1] = ha + 1;
      b[ia + 4 >> 1] = (O + 2 + j | 0) + i;
      i = i + 1 | 0;
      if ((i | 0) == (O | 0)) break; else h = h + 1 | 0;
     }
     break;
    }
   default:
    na = 1;
   }
  }
  if (na) {
   na = 0;
   switch (ja | 0) {
   case 4:
    {
     if (!(a[35720] | 0)) {
      a[35720] = 1;
      c[8958] = c[ka + 68 >> 2];
     }
     if (!(a[35728] | 0)) {
      a[35728] = 1;
      c[8959] = c[ka + 72 >> 2];
     }
     if (!(a[35736] | 0)) {
      a[35736] = 1;
      c[8960] = c[ka + 80 >> 2];
     }
     if (!(a[35744] | 0)) {
      a[35744] = 1;
      c[8961] = c[ka + 84 >> 2];
     }
     m = (a[(ma + 247 | 0) >> 0] | 0) == -1;
     h = c[8960] | 0;
     if ((h | 0) >= 0) {
      n = ka + 4 | 0;
      o = ka + 8 | 0;
      p = ka + 12 | 0;
      q = ka + 20 | 0;
      A = ka + 24 | 0;
      B = ka + 28 | 0;
      C = ka + 36 | 0;
      D = ka + 40 | 0;
      E = ka + 44 | 0;
      F = ka + 52 | 0;
      G = ka + 56 | 0;
      H = ka + 60 | 0;
      j = la;
      i = c[8961] | 0;
      l = 0;
      while (1) {
       z = +(l | 0) * 6.2831854820251465 / +(h | 0);
       y = +ef(z);
       z = +df(z);
       if ((i | 0) >= 0) {
        k = 0;
        while (1) {
         v = +(k | 0) * 6.2831854820251465 / +(i | 0);
         r = +ef(v);
         v = +df(v);
         w = +g[8958];
         x = +g[8959] + z * w;
         s = +g[n >> 2] * (v * x) + x * -r * +g[q >> 2] + (y * w * +g[C >> 2] + +g[F >> 2]);
         t = +g[o >> 2] * (v * x) + x * -r * +g[A >> 2] + (y * w * +g[D >> 2] + +g[G >> 2]);
         u = v * x * +g[p >> 2] + x * -r * +g[B >> 2] + (y * w * +g[E >> 2] + +g[H >> 2]);
         i = a[(ma + 246 | 0) >> 0] | 0;
         h = $(d[(ma + 263 | 0) >> 0] | 0, j) | 0;
         h = (c[(ma + 508 | 0) >> 2] | 0) + (h + (d[ma + 230 + i >> 0] | 0)) | 0;
         i = a[ma + 198 + (i << 1) + 1 >> 0] | 0;
         if (i << 24 >> 24 == 2) {
          g[h >> 2] = s;
          g[h + 4 >> 2] = t;
          g[h + 8 >> 2] = u;
         } else Wd(h, i, s, t, u, 0.0) | 0;
         do if (!m) {
          oa = +g[8959];
          pa = 1.0 / +P(+(y * w * (y * w) + 0.0 + ((v * x - v * oa) * (v * x - v * oa) + (x * -r - oa * -r) * (x * -r - oa * -r))));
          r = (x * -r - oa * -r) * pa;
          s = +g[n >> 2] * ((v * x - v * oa) * pa) + r * +g[q >> 2] + (y * w * pa * +g[C >> 2] + pa * 0.0 * +g[F >> 2]);
          t = (v * x - v * oa) * pa * +g[o >> 2] + r * +g[A >> 2] + (y * w * pa * +g[D >> 2] + pa * 0.0 * +g[G >> 2]);
          r = (v * x - v * oa) * pa * +g[p >> 2] + r * +g[B >> 2] + (y * w * pa * +g[E >> 2] + pa * 0.0 * +g[H >> 2]);
          i = a[(ma + 247 | 0) >> 0] | 0;
          h = $(d[(ma + 263 | 0) >> 0] | 0, j) | 0;
          h = (c[(ma + 508 | 0) >> 2] | 0) + (h + (d[ma + 230 + i >> 0] | 0)) | 0;
          i = a[ma + 198 + (i << 1) + 1 >> 0] | 0;
          if (i << 24 >> 24 == 2) {
           g[h >> 2] = s;
           g[h + 4 >> 2] = t;
           g[h + 8 >> 2] = r;
           break;
          } else {
           Wd(h, i, s, t, r, 0.0) | 0;
           break;
          }
         } while (0);
         j = j + 1 | 0;
         i = c[8961] | 0;
         if ((k | 0) >= (i | 0)) break; else k = k + 1 | 0;
        }
        h = c[8960] | 0;
       }
       if ((l | 0) < (h | 0)) l = l + 1 | 0; else break;
      }
     }
     if ((a[(ma + 256 | 0) >> 0] | 0) != -1) Vd(ma, ka, la);
     if ((a[(ma + 253 | 0) >> 0] | 0) != -1) oe(21249, e + 256 | 0);
     if ((a[(ma + 252 | 0) >> 0] | 0) != -1) oe(21315, e + 264 | 0);
     if ((a[(ma + 248 | 0) >> 0] | 0) != -1) oe(21380, e + 272 | 0);
     m = c[8960] | 0;
     if ((m | 0) <= 0) {
      c[e + 7016 >> 2] = 2;
      c[e + 7020 >> 2] = 15;
      break a;
     }
     n = c[8961] | 0;
     if ((n | 0) <= 0) {
      c[e + 7016 >> 2] = 2;
      c[e + 7020 >> 2] = 15;
      break a;
     }
     l = 0;
     while (1) {
      i = ($(n + 1 | 0, l) | 0) + la | 0;
      j = c[(ma + 512 | 0) >> 2] | 0;
      h = f;
      k = 0;
      while (1) {
       ia = k + i | 0;
       ja = ((n + 1 | 0) + i | 0) + k | 0;
       ka = h * 3 | 0;
       b[(j + (ka << 1) | 0) >> 1] = ia & 65535;
       b[(j + (ka << 1) | 0) + 2 >> 1] = ia + 1;
       b[(j + (ka << 1) | 0) + 4 >> 1] = ja + 1 & 65535;
       b[(j + (ka + 3 << 1) | 0) >> 1] = ia & 65535;
       b[(j + (ka + 3 << 1) | 0) + 2 >> 1] = ja + 1 & 65535;
       b[(j + (ka + 3 << 1) | 0) + 4 >> 1] = ja;
       k = k + 1 | 0;
       if ((k | 0) == (n | 0)) break; else h = h + 2 | 0;
      }
      l = l + 1 | 0;
      if ((l | 0) == (m | 0)) break; else f = (n << 1) + f | 0;
     }
     break;
    }
   case 5:
    {
     U = c[ka + 80 >> 2] | 0;
     v = +g[ka + 68 >> 2];
     w = +g[ka + 72 >> 2];
     o = (a[(ma + 247 | 0) >> 0] | 0) == -1;
     p = (a[(ma + 248 | 0) >> 0] | 0) == -1;
     q = ka + 4 | 0;
     A = ka + 8 | 0;
     B = ka + 12 | 0;
     C = ka + 20 | 0;
     D = ka + 24 | 0;
     E = ka + 28 | 0;
     F = ka + 36 | 0;
     G = ka + 40 | 0;
     H = ka + 44 | 0;
     K = ka + 52 | 0;
     L = ka + 56 | 0;
     M = ka + 60 | 0;
     x = +g[q >> 2] * 0.0 + +g[C >> 2] + (+g[F >> 2] * 0.0 + +g[K >> 2] * 0.0);
     y = +g[A >> 2] * 0.0 + +g[D >> 2] + (+g[G >> 2] * 0.0 + +g[L >> 2] * 0.0);
     z = +g[B >> 2] * 0.0 + +g[E >> 2] + (+g[H >> 2] * 0.0 + +g[M >> 2] * 0.0);
     if ((U | 0) >= 0) {
      n = la;
      Q = 0;
      while (1) {
       J = +(Q | 0);
       I = v / +(U | 0) * J - v * .5;
       J = 1.0 / +(U | 0) * J;
       N = J > -32768.0 ? J : -32768.0;
       O = ~~(N < 32767.0 ? N : 32767.0);
       N = J > -1.0 ? J : -1.0;
       N = (N < 1.0 ? N : 1.0) * 32767.0;
       if (o) {
        j = n;
        k = 0;
        while (1) {
         r = +(k | 0);
         u = w * .5 + -w / +(U | 0) * r;
         s = I * +g[q >> 2] + +g[C >> 2] * 0.0 + (u * +g[F >> 2] + +g[K >> 2]);
         t = I * +g[A >> 2] + +g[D >> 2] * 0.0 + (u * +g[G >> 2] + +g[L >> 2]);
         u = I * +g[B >> 2] + +g[E >> 2] * 0.0 + (u * +g[H >> 2] + +g[M >> 2]);
         i = a[(ma + 246 | 0) >> 0] | 0;
         h = $(d[(ma + 263 | 0) >> 0] | 0, j) | 0;
         h = (c[(ma + 508 | 0) >> 2] | 0) + (h + (d[ma + 230 + i >> 0] | 0)) | 0;
         i = a[ma + 198 + (i << 1) + 1 >> 0] | 0;
         if (i << 24 >> 24 == 2) {
          g[h >> 2] = s;
          g[h + 4 >> 2] = t;
          g[h + 8 >> 2] = u;
         } else Wd(h, i, s, t, u, 0.0) | 0;
         j : do if (!p) {
          r = 1.0 / +(U | 0) * r;
          ja = a[(ma + 248 | 0) >> 0] | 0;
          h = $(d[(ma + 263 | 0) >> 0] | 0, j) | 0;
          h = (c[(ma + 508 | 0) >> 2] | 0) + (h + (d[ma + 230 + ja >> 0] | 0)) | 0;
          switch (a[ma + 198 + (ja << 1) + 1 >> 0] | 0) {
          case 1:
           {
            g[h >> 2] = J;
            g[h + 4 >> 2] = r;
            break j;
           }
          case 8:
           {
            pa = r > -32768.0 ? r : -32768.0;
            b[h >> 1] = O;
            b[h + 2 >> 1] = ~~(pa < 32767.0 ? pa : 32767.0);
            break j;
           }
          case 9:
           {
            oa = r > -1.0 ? r : -1.0;
            pa = +zf(+N);
            ja = ~~+zf(+((oa < 1.0 ? oa : 1.0) * 32767.0));
            b[h >> 1] = ~~pa;
            b[h + 2 >> 1] = ja;
            break j;
           }
          default:
           break j;
          }
         } while (0);
         k = k + 1 | 0;
         if ((k | 0) == (U + 1 | 0 | 0)) break; else j = j + 1 | 0;
        }
       } else {
        l = n;
        m = 0;
        while (1) {
         u = +(m | 0);
         t = w * .5 + -w / +(U | 0) * u;
         r = I * +g[q >> 2] + +g[C >> 2] * 0.0 + (t * +g[F >> 2] + +g[K >> 2]);
         s = I * +g[A >> 2] + +g[D >> 2] * 0.0 + (t * +g[G >> 2] + +g[L >> 2]);
         t = I * +g[B >> 2] + +g[E >> 2] * 0.0 + (t * +g[H >> 2] + +g[M >> 2]);
         k = a[(ma + 246 | 0) >> 0] | 0;
         h = c[(ma + 508 | 0) >> 2] | 0;
         i = a[(ma + 263 | 0) >> 0] | 0;
         j = $(i & 255, l) | 0;
         j = h + (j + (d[ma + 230 + k >> 0] | 0)) | 0;
         k = a[ma + 198 + (k << 1) + 1 >> 0] | 0;
         if (k << 24 >> 24 == 2) {
          g[j >> 2] = r;
          g[j + 4 >> 2] = s;
          g[j + 8 >> 2] = t;
         } else {
          Wd(j, k, r, s, t, 0.0) | 0;
          i = a[(ma + 263 | 0) >> 0] | 0;
          h = c[(ma + 508 | 0) >> 2] | 0;
         }
         ja = a[(ma + 247 | 0) >> 0] | 0;
         i = $(i & 255, l) | 0;
         h = h + (i + (d[ma + 230 + ja >> 0] | 0)) | 0;
         i = a[ma + 198 + (ja << 1) + 1 >> 0] | 0;
         if (i << 24 >> 24 == 2) {
          g[h >> 2] = x;
          g[h + 4 >> 2] = y;
          g[h + 8 >> 2] = z;
         } else Wd(h, i, x, y, z, 0.0) | 0;
         k : do if (!p) {
          r = 1.0 / +(U | 0) * u;
          ja = a[(ma + 248 | 0) >> 0] | 0;
          h = $(d[(ma + 263 | 0) >> 0] | 0, l) | 0;
          h = (c[(ma + 508 | 0) >> 2] | 0) + (h + (d[ma + 230 + ja >> 0] | 0)) | 0;
          switch (a[ma + 198 + (ja << 1) + 1 >> 0] | 0) {
          case 1:
           {
            g[h >> 2] = J;
            g[h + 4 >> 2] = r;
            break k;
           }
          case 8:
           {
            pa = r > -32768.0 ? r : -32768.0;
            b[h >> 1] = O;
            b[h + 2 >> 1] = ~~(pa < 32767.0 ? pa : 32767.0);
            break k;
           }
          case 9:
           {
            oa = r > -1.0 ? r : -1.0;
            pa = +zf(+N);
            ja = ~~+zf(+((oa < 1.0 ? oa : 1.0) * 32767.0));
            b[h >> 1] = ~~pa;
            b[h + 2 >> 1] = ja;
            break k;
           }
          default:
           break k;
          }
         } while (0);
         m = m + 1 | 0;
         if ((m | 0) == (U + 1 | 0 | 0)) break; else l = l + 1 | 0;
        }
       }
       Q = Q + 1 | 0;
       if ((Q | 0) == (U + 1 | 0 | 0)) break; else n = (U + 1 | 0) + n | 0;
      }
     }
     if ((a[(ma + 256 | 0) >> 0] | 0) != -1) Vd(ma, ka, la);
     if ((a[(ma + 253 | 0) >> 0] | 0) != -1) oe(21445, e + 280 | 0);
     if ((a[(ma + 252 | 0) >> 0] | 0) != -1) oe(21511, e + 288 | 0);
     if ((U | 0) > 0) {
      l = 0;
      while (1) {
       i = ($(l, U + 1 | 0) | 0) + la | 0;
       j = c[(ma + 512 | 0) >> 2] | 0;
       h = f;
       k = 0;
       while (1) {
        ja = i + k | 0;
        ka = h * 3 | 0;
        b[(j + (ka << 1) | 0) >> 1] = ja & 65535;
        b[(j + (ka << 1) | 0) + 2 >> 1] = ja + 1;
        b[(j + (ka << 1) | 0) + 4 >> 1] = (ja + U | 0) + 2 & 65535;
        b[(j + (ka + 3 << 1) | 0) >> 1] = ja & 65535;
        b[(j + (ka + 3 << 1) | 0) + 2 >> 1] = (ja + U | 0) + 2 & 65535;
        b[(j + (ka + 3 << 1) | 0) + 4 >> 1] = (ja + U | 0) + 1;
        k = k + 1 | 0;
        if ((k | 0) == (U | 0)) break; else h = h + 2 | 0;
       }
       l = l + 1 | 0;
       if ((l | 0) == (U | 0)) break; else f = (U << 1) + f | 0;
      }
     }
     break;
    }
   default:
    {}
   }
  }
 }
 c[e + 7e3 >> 2] = na;
}

function Td(d) {
 d = d | 0;
 var f = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = c[d + 800 >> 2] | 0;
 x = c[d + 1920 >> 2] | 0;
 y = c[d + 3320 >> 2] | 0;
 f = c[d + 3328 >> 2] | 0;
 h = c[d + 3336 >> 2] | 0;
 z = c[d + 4160 >> 2] | 0;
 B = c[d + 4464 >> 2] | 0;
 i = c[d + 4472 >> 2] | 0;
 a : {
  if (B) {
   B = 0;
   switch (i | 0) {
   case 2:
    {
     h = c[(A + 360 | 0) >> 2] | 0;
     f = h + (e[z >> 1] | 0) | 0;
     i = c[(A + 352 | 0) >> 2] | 0;
     k = z;
     j = c[k >> 2] | 0;
     k = c[k + 4 >> 2] | 0;
     if ((j | 0) == (c[(i + (f * 3712 | 0) | 0) >> 2] | 0) ? (k | 0) == (c[(i + (f * 3712 | 0) | 0) + 4 >> 2] | 0) : 0) if ((c[i + (f * 3712 | 0) + 8 >> 2] | 0) == 3) {
      w = i + ((h + (j & 65535) | 0) * 3712 | 0) | 0;
      if ((j | 0) == (c[w >> 2] | 0) ? (k | 0) == (c[w + 4 >> 2] | 0) : 0) if ((c[i + ((h + (j & 65535) | 0) * 3712 | 0) + 8 >> 2] | 0) == 3) {
       f = c[(A + 176 | 0) >> 2] | 0;
       na(0);
       c[f + 300 >> 2] = 0;
       f = c[(i + ((h + (j & 65535) | 0) * 3712 | 0) + 3064 | 0) >> 2] | 0;
       if (f | 0) ta(f | 0);
       c[(i + ((h + (j & 65535) | 0) * 3712 | 0) + 3064 | 0) >> 2] = 0;
       Bf(i + ((h + (j & 65535) | 0) * 3712 | 0) + 3068 | 0, -1, 640) | 0;
       Hd(i + ((h + (j & 65535) | 0) * 3712 | 0) | 0);
       k = z;
       m = c[z >> 2] | 0;
       h = c[(A + 360 | 0) >> 2] | 0;
       i = c[(A + 352 | 0) >> 2] | 0;
       l = c[k >> 2] | 0;
       k = c[k + 4 >> 2] | 0;
      } else {
       m = j;
       l = j;
      } else {
       m = j;
       l = j;
      }
     } else {
      m = j;
      l = j;
     } else {
      m = j;
      l = j;
     }
     j = m & 65535;
     f = h + j | 0;
     h = i + (f * 3712 | 0) | 0;
     if ((l | 0) == (c[h >> 2] | 0) ? (k | 0) == (c[h + 4 >> 2] | 0) : 0) {
      c[h >> 2] = -1;
      c[h + 4 >> 2] = -1;
      c[i + (f * 3712 | 0) + 8 >> 2] = 0;
      c[i + (f * 3712 | 0) + 12 >> 2] = 0;
      id(A + 376 | 0);
      f = c[(A + 388 | 0) >> 2] | 0;
      c[(A + 388 | 0) >> 2] = f + 1;
      b[(c[(A + 376 | 0) >> 2] | 0) + (f << 1) >> 1] = b[z >> 1] | 0;
      f = y;
      h = x;
      c[d + 4544 >> 2] = 2;
      c[d + 4548 >> 2] = 4;
      break a;
     } else {
      c[(d + 704 | 0) >> 2] = m >>> 16;
      c[(d + 704 | 0) + 4 >> 2] = j;
      oe(19168, d + 704 | 0);
      f = y;
      h = x;
      c[d + 4544 >> 2] = 2;
      c[d + 4548 >> 2] = 4;
      break a;
     }
    }
   default:
    B = 1;
   }
  }
  if (B) {
   B = 0;
   switch (i | 0) {
   case 3:
    {
     k = c[(A + 488 | 0) >> 2] | 0;
     f = k + (e[z >> 1] | 0) | 0;
     l = c[(A + 480 | 0) >> 2] | 0;
     n = z;
     m = c[n >> 2] | 0;
     n = c[n + 4 >> 2] | 0;
     o = 1;
     if (o) {
      o = 0;
      if ((m | 0) == (c[(l + (f * 608 | 0) | 0) >> 2] | 0) ? (n | 0) == (c[(l + (f * 608 | 0) | 0) + 4 >> 2] | 0) : 0) {
       p = 1;
       if (p) {
        p = 0;
        if ((c[l + (f * 608 | 0) + 8 >> 2] | 0) == 3) {
         i = 1;
         if (i) {
          i = 0;
          if ((m | 0) == (c[(l + ((k + (m & 65535) | 0) * 608 | 0) | 0) >> 2] | 0) ? (n | 0) == (c[(l + ((k + (m & 65535) | 0) * 608 | 0) | 0) + 4 >> 2] | 0) : 0) {
           j = 1;
           if (j) {
            j = 0;
            if ((c[l + ((k + (m & 65535) | 0) * 608 | 0) + 8 >> 2] | 0) == 3) {
             Jd(c[(A + 240 | 0) >> 2] | 0);
             h = x & -16777216;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 348 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 348 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 356 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 360 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 364 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 364 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 372 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 376 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 380 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 380 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 388 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 392 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 396 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 396 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 404 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 408 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 412 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 412 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 420 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 424 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 428 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 428 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 436 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 440 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 444 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 444 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 452 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 456 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 460 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 460 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 468 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 472 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 476 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 476 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 484 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 488 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 492 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 492 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 500 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 504 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 508 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 508 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 516 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 520 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 524 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 524 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 532 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 536 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 540 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 540 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 548 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 552 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 556 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 556 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 564 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 568 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 572 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 572 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 580 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 584 >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 588 | 0) >> 2] = 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 588 | 0) + 4 >> 2] = h;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 596 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 600 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 604 >> 2] = 0;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 344 >> 2] = 0;
             c[(d + 768 | 0) >> 2] = 0;
             Be(d, d + 768 | 0);
             c[(d + 4 | 0) >> 2] = -1;
             c[(d + 8 | 0) >> 2] = 0;
             c[(d + 8 | 0) + 4 >> 2] = 0;
             c[(d + 8 | 0) >> 2] = 2013282306;
             b[(d + 8 | 0) + 4 >> 1] = 192;
             g[(d + 16 | 0) >> 2] = 1.0;
             g[(d + 20 | 0) >> 2] = 1.0;
             g[(d + 24 | 0) >> 2] = 1.0;
             g[(d + 28 | 0) >> 2] = 1.0;
             b[(d + 32 | 0) >> 1] = 28672;
             b[(d + 34 | 0) >> 1] = 28672;
             c[(d + 36 | 0) >> 2] = 0;
             b[(d + 36 | 0) >> 1] = 32647;
             b[((d + 36 | 0) + 2 | 0) >> 1] = 255;
             b[(d + 40 | 0) >> 1] = 296;
             a[(d + 44 | 0) >> 0] = 17;
             a[(d + 45 | 0) >> 0] = 13;
             a[(d + 46 | 0) >> 0] = 17;
             a[(d + 47 | 0) >> 0] = 13;
             a[(d + 48 | 0) >> 0] = 17;
             a[(d + 49 | 0) >> 0] = 13;
             a[(d + 50 | 0) >> 0] = 17;
             a[(d + 51 | 0) >> 0] = 13;
             a[(d + 52 | 0) >> 0] = 17;
             a[(d + 53 | 0) >> 0] = 13;
             a[(d + 54 | 0) >> 0] = 17;
             a[(d + 55 | 0) >> 0] = 13;
             a[(d + 56 | 0) >> 0] = 17;
             a[(d + 57 | 0) >> 0] = 13;
             a[(d + 58 | 0) >> 0] = 17;
             a[(d + 59 | 0) >> 0] = 13;
             a[(d + 60 | 0) >> 0] = 17;
             a[(d + 61 | 0) >> 0] = 13;
             a[(d + 62 | 0) >> 0] = 17;
             a[(d + 63 | 0) >> 0] = 13;
             a[(d + 64 | 0) >> 0] = 17;
             a[(d + 65 | 0) >> 0] = 13;
             a[(d + 66 | 0) >> 0] = 17;
             a[(d + 67 | 0) >> 0] = 13;
             a[(d + 68 | 0) >> 0] = 17;
             a[(d + 69 | 0) >> 0] = 13;
             a[(d + 70 | 0) >> 0] = 17;
             a[(d + 71 | 0) >> 0] = 13;
             a[(d + 72 | 0) >> 0] = 17;
             a[(d + 73 | 0) >> 0] = 13;
             a[(d + 74 | 0) >> 0] = 17;
             a[(d + 75 | 0) >> 0] = 13;
             a[(d + 42 | 0) >> 0] = 0;
             a[(d + 43 | 0) >> 0] = 1;
             a[(d + 108 | 0) >> 0] = 0;
             a[(d + 109 | 0) >> 0] = 0;
             b[(d + 92 | 0) >> 1] = 65535;
             b[(d + 92 | 0) + 2 >> 1] = 65535;
             b[(d + 92 | 0) + 4 >> 1] = 65535;
             b[(d + 92 | 0) + 6 >> 1] = 65535;
             b[(d + 92 | 0) + 8 >> 1] = 65535;
             b[(d + 92 | 0) + 10 >> 1] = 65535;
             b[(d + 92 | 0) + 12 >> 1] = 65535;
             b[(d + 92 | 0) + 14 >> 1] = 65535;
             b[(d + 76 | 0) >> 1] = 0;
             b[(d + 76 | 0) + 2 >> 1] = 0;
             b[(d + 76 | 0) + 4 >> 1] = 0;
             b[(d + 76 | 0) + 6 >> 1] = 0;
             b[(d + 76 | 0) + 8 >> 1] = 0;
             b[(d + 76 | 0) + 10 >> 1] = 0;
             b[(d + 76 | 0) + 12 >> 1] = 0;
             b[(d + 76 | 0) + 14 >> 1] = 0;
             a[(d + 112 | 0) >> 0] = 17;
             a[(d + 113 | 0) >> 0] = 13;
             a[(d + 114 | 0) >> 0] = 17;
             a[(d + 115 | 0) >> 0] = 13;
             a[(d + 116 | 0) >> 0] = 17;
             a[(d + 117 | 0) >> 0] = 13;
             a[(d + 118 | 0) >> 0] = 17;
             a[(d + 119 | 0) >> 0] = 13;
             a[(d + 120 | 0) >> 0] = 17;
             a[(d + 121 | 0) >> 0] = 13;
             a[(d + 122 | 0) >> 0] = 17;
             a[(d + 123 | 0) >> 0] = 13;
             a[(d + 124 | 0) >> 0] = 17;
             a[(d + 125 | 0) >> 0] = 13;
             a[(d + 126 | 0) >> 0] = 17;
             a[(d + 127 | 0) >> 0] = 13;
             a[(d + 128 | 0) >> 0] = 17;
             a[(d + 129 | 0) >> 0] = 13;
             a[(d + 130 | 0) >> 0] = 17;
             a[(d + 131 | 0) >> 0] = 13;
             a[(d + 132 | 0) >> 0] = 17;
             a[(d + 133 | 0) >> 0] = 13;
             a[(d + 134 | 0) >> 0] = 17;
             a[(d + 135 | 0) >> 0] = 13;
             a[(d + 136 | 0) >> 0] = 17;
             a[(d + 137 | 0) >> 0] = 13;
             a[(d + 138 | 0) >> 0] = 17;
             a[(d + 139 | 0) >> 0] = 13;
             a[(d + 140 | 0) >> 0] = 17;
             a[(d + 141 | 0) >> 0] = 13;
             a[(d + 142 | 0) >> 0] = 17;
             a[(d + 143 | 0) >> 0] = 13;
             a[(d + 110 | 0) >> 0] = 0;
             a[(d + 111 | 0) >> 0] = 1;
             a[(d + 176 | 0) >> 0] = 0;
             a[(d + 177 | 0) >> 0] = 0;
             b[(d + 160 | 0) >> 1] = 65535;
             b[(d + 160 | 0) + 2 >> 1] = 65535;
             b[(d + 160 | 0) + 4 >> 1] = 65535;
             b[(d + 160 | 0) + 6 >> 1] = 65535;
             b[(d + 160 | 0) + 8 >> 1] = 65535;
             b[(d + 160 | 0) + 10 >> 1] = 65535;
             b[(d + 160 | 0) + 12 >> 1] = 65535;
             b[(d + 160 | 0) + 14 >> 1] = 65535;
             b[(d + 144 | 0) >> 1] = 0;
             b[(d + 144 | 0) + 2 >> 1] = 0;
             b[(d + 144 | 0) + 4 >> 1] = 0;
             b[(d + 144 | 0) + 6 >> 1] = 0;
             b[(d + 144 | 0) + 8 >> 1] = 0;
             b[(d + 144 | 0) + 10 >> 1] = 0;
             b[(d + 144 | 0) + 12 >> 1] = 0;
             b[(d + 144 | 0) + 14 >> 1] = 0;
             a[(d + 180 | 0) >> 0] = 17;
             a[(d + 181 | 0) >> 0] = 13;
             a[(d + 182 | 0) >> 0] = 17;
             a[(d + 183 | 0) >> 0] = 13;
             a[(d + 184 | 0) >> 0] = 17;
             a[(d + 185 | 0) >> 0] = 13;
             a[(d + 186 | 0) >> 0] = 17;
             a[(d + 187 | 0) >> 0] = 13;
             a[(d + 188 | 0) >> 0] = 17;
             a[(d + 189 | 0) >> 0] = 13;
             a[(d + 190 | 0) >> 0] = 17;
             a[(d + 191 | 0) >> 0] = 13;
             a[(d + 192 | 0) >> 0] = 17;
             a[(d + 193 | 0) >> 0] = 13;
             a[(d + 194 | 0) >> 0] = 17;
             a[(d + 195 | 0) >> 0] = 13;
             a[(d + 196 | 0) >> 0] = 17;
             a[(d + 197 | 0) >> 0] = 13;
             a[(d + 198 | 0) >> 0] = 17;
             a[(d + 199 | 0) >> 0] = 13;
             a[(d + 200 | 0) >> 0] = 17;
             a[(d + 201 | 0) >> 0] = 13;
             a[(d + 202 | 0) >> 0] = 17;
             a[(d + 203 | 0) >> 0] = 13;
             a[(d + 204 | 0) >> 0] = 17;
             a[(d + 205 | 0) >> 0] = 13;
             a[(d + 206 | 0) >> 0] = 17;
             a[(d + 207 | 0) >> 0] = 13;
             a[(d + 208 | 0) >> 0] = 17;
             a[(d + 209 | 0) >> 0] = 13;
             a[(d + 210 | 0) >> 0] = 17;
             a[(d + 211 | 0) >> 0] = 13;
             a[(d + 178 | 0) >> 0] = 0;
             a[(d + 179 | 0) >> 0] = 1;
             a[(d + 244 | 0) >> 0] = 0;
             a[(d + 245 | 0) >> 0] = 0;
             b[(d + 228 | 0) >> 1] = 65535;
             b[(d + 228 | 0) + 2 >> 1] = 65535;
             b[(d + 228 | 0) + 4 >> 1] = 65535;
             b[(d + 228 | 0) + 6 >> 1] = 65535;
             b[(d + 228 | 0) + 8 >> 1] = 65535;
             b[(d + 228 | 0) + 10 >> 1] = 65535;
             b[(d + 228 | 0) + 12 >> 1] = 65535;
             b[(d + 228 | 0) + 14 >> 1] = 65535;
             b[(d + 212 | 0) >> 1] = 0;
             b[(d + 212 | 0) + 2 >> 1] = 0;
             b[(d + 212 | 0) + 4 >> 1] = 0;
             b[(d + 212 | 0) + 6 >> 1] = 0;
             b[(d + 212 | 0) + 8 >> 1] = 0;
             b[(d + 212 | 0) + 10 >> 1] = 0;
             b[(d + 212 | 0) + 12 >> 1] = 0;
             b[(d + 212 | 0) + 14 >> 1] = 0;
             a[(d + 248 | 0) >> 0] = 17;
             a[(d + 249 | 0) >> 0] = 13;
             a[(d + 250 | 0) >> 0] = 17;
             a[(d + 251 | 0) >> 0] = 13;
             a[(d + 252 | 0) >> 0] = 17;
             a[(d + 253 | 0) >> 0] = 13;
             a[(d + 254 | 0) >> 0] = 17;
             a[(d + 255 | 0) >> 0] = 13;
             a[(d + 256 | 0) >> 0] = 17;
             a[(d + 257 | 0) >> 0] = 13;
             a[(d + 258 | 0) >> 0] = 17;
             a[(d + 259 | 0) >> 0] = 13;
             a[(d + 260 | 0) >> 0] = 17;
             a[(d + 261 | 0) >> 0] = 13;
             a[(d + 262 | 0) >> 0] = 17;
             a[(d + 263 | 0) >> 0] = 13;
             a[(d + 264 | 0) >> 0] = 17;
             a[(d + 265 | 0) >> 0] = 13;
             a[(d + 266 | 0) >> 0] = 17;
             a[(d + 267 | 0) >> 0] = 13;
             a[(d + 268 | 0) >> 0] = 17;
             a[(d + 269 | 0) >> 0] = 13;
             a[(d + 270 | 0) >> 0] = 17;
             a[(d + 271 | 0) >> 0] = 13;
             a[(d + 272 | 0) >> 0] = 17;
             a[(d + 273 | 0) >> 0] = 13;
             a[(d + 274 | 0) >> 0] = 17;
             a[(d + 275 | 0) >> 0] = 13;
             a[(d + 276 | 0) >> 0] = 17;
             a[(d + 277 | 0) >> 0] = 13;
             a[(d + 278 | 0) >> 0] = 17;
             a[(d + 279 | 0) >> 0] = 13;
             a[(d + 246 | 0) >> 0] = 0;
             a[(d + 247 | 0) >> 0] = 1;
             a[(d + 312 | 0) >> 0] = 0;
             a[(d + 313 | 0) >> 0] = 0;
             b[(d + 296 | 0) >> 1] = 65535;
             b[(d + 296 | 0) + 2 >> 1] = 65535;
             b[(d + 296 | 0) + 4 >> 1] = 65535;
             b[(d + 296 | 0) + 6 >> 1] = 65535;
             b[(d + 296 | 0) + 8 >> 1] = 65535;
             b[(d + 296 | 0) + 10 >> 1] = 65535;
             b[(d + 296 | 0) + 12 >> 1] = 65535;
             b[(d + 296 | 0) + 14 >> 1] = 65535;
             b[(d + 280 | 0) >> 1] = 0;
             b[(d + 280 | 0) + 2 >> 1] = 0;
             b[(d + 280 | 0) + 4 >> 1] = 0;
             b[(d + 280 | 0) + 6 >> 1] = 0;
             b[(d + 280 | 0) + 8 >> 1] = 0;
             b[(d + 280 | 0) + 10 >> 1] = 0;
             b[(d + 280 | 0) + 12 >> 1] = 0;
             b[(d + 280 | 0) + 14 >> 1] = 0;
             c[(d + 316 | 0) >> 2] = 3;
             c[(d + 320 | 0) >> 2] = -1;
             c[(d + 320 | 0) + 4 >> 2] = -1;
             f = (d | 0) == (l + ((k + (m & 65535) | 0) * 608 | 0) + 16 | 0 | 0);
             if (!f) {
              c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 16 | 0) >> 2] = 0;
              Be(l + ((k + (m & 65535) | 0) * 608 | 0) + 16 | 0, d);
             }
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 20 >> 2] = c[(d + 4 | 0) >> 2];
             w = c[(d + 8 | 0) + 4 >> 2] | 0;
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 24 | 0) >> 2] = c[(d + 8 | 0) >> 2];
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 24 | 0) + 4 >> 2] = w;
             w = l + ((k + (m & 65535) | 0) * 608 | 0) + 32 | 0;
             c[w >> 2] = c[(d + 16 | 0) >> 2];
             c[w + 4 >> 2] = c[(d + 16 | 0) + 4 >> 2];
             c[w + 8 >> 2] = c[(d + 16 | 0) + 8 >> 2];
             c[w + 12 >> 2] = c[(d + 16 | 0) + 12 >> 2];
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 48 | 0) >> 2] = c[(d + 32 | 0) >> 2];
             c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 48 | 0) + 4 >> 2] = c[(d + 32 | 0) + 4 >> 2];
             b[(l + ((k + (m & 65535) | 0) * 608 | 0) + 48 | 0) + 8 >> 1] = b[(d + 32 | 0) + 8 >> 1] | 0;
             w = b[(d + 42 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 58 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 58 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 44 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 60 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 60 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 46 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 62 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 62 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 48 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 64 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 64 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 50 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 66 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 66 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 52 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 68 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 68 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 54 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 70 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 70 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 56 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 72 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 72 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 58 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 74 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 74 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 60 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 76 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 76 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 62 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 78 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 78 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 64 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 80 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 80 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 66 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 82 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 82 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 68 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 84 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 84 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 70 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 86 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 86 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 72 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 88 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 88 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 74 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 90 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 90 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 76 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 92 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 93 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 78 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 94 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 95 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 80 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 96 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 97 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 82 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 98 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 99 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 84 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 100 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 101 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 86 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 102 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 103 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 88 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 104 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 105 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 90 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 106 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 107 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 92 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 108 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 109 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 94 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 110 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 111 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 96 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 112 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 113 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 98 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 114 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 115 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 100 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 116 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 117 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 102 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 118 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 119 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 104 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 120 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 121 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 106 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 122 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 123 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 108 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 124 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 124 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 110 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 126 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 126 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 112 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 128 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 128 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 114 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 130 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 130 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 116 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 132 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 132 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 118 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 134 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 134 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 120 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 136 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 136 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 122 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 138 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 138 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 124 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 140 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 140 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 126 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 142 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 142 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 128 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 144 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 144 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 130 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 146 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 146 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 132 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 148 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 148 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 134 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 150 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 150 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 136 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 152 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 152 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 138 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 154 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 154 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 140 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 156 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 156 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 142 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 158 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 158 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 144 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 160 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 161 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 146 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 162 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 163 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 148 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 164 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 165 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 150 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 166 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 167 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 152 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 168 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 169 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 154 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 170 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 171 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 156 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 172 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 173 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 158 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 174 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 175 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 160 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 176 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 177 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 162 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 178 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 179 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 164 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 180 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 181 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 166 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 182 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 183 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 168 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 184 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 185 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 170 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 186 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 187 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 172 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 188 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 189 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 174 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 190 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 191 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 176 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 192 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 192 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 178 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 194 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 194 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 180 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 196 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 196 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 182 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 198 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 198 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 184 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 200 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 200 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 186 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 202 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 202 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 188 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 204 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 204 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 190 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 206 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 206 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 192 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 208 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 208 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 194 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 210 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 210 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 196 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 212 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 212 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 198 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 214 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 214 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 200 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 216 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 216 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 202 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 218 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 218 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 204 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 220 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 220 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 206 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 222 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 222 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 208 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 224 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 224 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 210 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 226 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 226 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 212 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 228 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 229 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 214 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 230 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 231 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 216 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 232 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 233 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 218 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 234 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 235 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 220 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 236 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 237 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 222 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 238 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 239 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 224 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 240 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 241 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 226 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 242 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 243 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 228 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 244 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 245 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 230 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 246 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 247 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 232 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 248 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 249 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 234 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 250 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 251 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 236 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 252 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 253 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 238 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 254 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 255 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 240 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 256 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 257 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 242 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 258 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 259 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 244 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 260 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 260 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 246 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 262 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 262 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 248 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 264 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 264 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 250 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 266 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 266 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 252 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 268 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 268 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 254 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 270 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 270 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 256 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 272 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 272 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 258 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 274 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 274 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 260 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 276 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 276 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 262 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 278 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 278 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 264 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 280 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 280 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 266 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 282 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 282 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 268 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 284 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 284 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 270 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 286 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 286 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 272 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 288 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 288 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 274 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 290 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 290 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 276 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 292 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 292 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 278 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 294 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 294 | 0) + 1 >> 0] = w >> 8;
             w = b[(d + 280 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 296 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 297 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 282 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 298 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 299 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 284 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 300 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 301 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 286 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 302 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 303 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 288 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 304 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 305 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 290 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 306 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 307 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 292 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 308 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 309 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 294 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 310 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 311 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 296 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 312 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 313 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 298 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 314 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 315 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 300 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 316 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 317 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 302 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 318 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 319 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 304 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 320 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 321 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 306 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 322 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 323 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 308 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 324 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 325 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 310 | 0) >> 1] | 0;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 326 >> 0] = w;
             a[l + ((k + (m & 65535) | 0) * 608 | 0) + 327 >> 0] = (w & 65535) >>> 8;
             w = b[(d + 312 | 0) >> 1] | 0;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 328 | 0) >> 0] = w;
             a[(l + ((k + (m & 65535) | 0) * 608 | 0) + 328 | 0) + 1 >> 0] = w >> 8;
             c[l + ((k + (m & 65535) | 0) * 608 | 0) + 332 >> 2] = c[(d + 316 | 0) >> 2];
             if (!f) {
              w = c[(d + 320 | 0) + 4 >> 2] | 0;
              c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 336 | 0) >> 2] = c[(d + 320 | 0) >> 2];
              c[(l + ((k + (m & 65535) | 0) * 608 | 0) + 336 | 0) + 4 >> 2] = w;
             }
             v = z;
             s = c[z >> 2] | 0;
             q = c[(A + 488 | 0) >> 2] | 0;
             t = c[(A + 480 | 0) >> 2] | 0;
             u = c[v >> 2] | 0;
             v = c[v + 4 >> 2] | 0;
             w = 0;
             r = h;
            } else j = 1;
           }
           if (j) if (1) {
            s = m;
            q = k;
            t = l;
            u = m;
            v = n;
            w = y;
            r = x;
           }
          } else i = 1;
         }
         if (i) if (1) {
          s = m;
          q = k;
          t = l;
          u = m;
          v = n;
          w = y;
          r = x;
         }
        } else p = 1;
       }
       if (p) if (1) {
        s = m;
        q = k;
        t = l;
        u = m;
        v = n;
        w = y;
        r = x;
       }
      } else o = 1;
     }
     if (o) if (1) {
      s = m;
      q = k;
      t = l;
      u = m;
      v = n;
      w = y;
      r = x;
     }
     i = s & 65535;
     f = q + i | 0;
     h = t + (f * 608 | 0) | 0;
     if ((u | 0) == (c[h >> 2] | 0) ? (v | 0) == (c[h + 4 >> 2] | 0) : 0) {
      c[h >> 2] = -1;
      c[h + 4 >> 2] = -1;
      c[t + (f * 608 | 0) + 8 >> 2] = 0;
      c[t + (f * 608 | 0) + 12 >> 2] = 0;
      id(A + 504 | 0);
      f = c[(A + 516 | 0) >> 2] | 0;
      c[(A + 516 | 0) >> 2] = f + 1;
      b[(c[(A + 504 | 0) >> 2] | 0) + (f << 1) >> 1] = b[z >> 1] | 0;
      f = w;
      h = r;
      c[d + 4544 >> 2] = 2;
      c[d + 4548 >> 2] = 4;
      break a;
     } else {
      c[(d + 712 | 0) >> 2] = s >>> 16;
      c[(d + 712 | 0) + 4 >> 2] = i;
      oe(19168, d + 712 | 0);
      f = w;
      h = r;
      c[d + 4544 >> 2] = 2;
      c[d + 4548 >> 2] = 4;
      break a;
     }
    }
   default:
    B = 1;
   }
  }
  if (B) {
   B = 0;
   switch (i | 0) {
   default:
    {
     f = y;
     h = x;
    }
   }
  }
 }
 c[d + 3328 >> 2] = f;
 c[d + 3336 >> 2] = h;
 c[d + 4464 >> 2] = B;
}

function Xc(d) {
 d = d | 0;
 var f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 s = c[d + 12944 >> 2] | 0;
 f = c[d + 14592 >> 2] | 0;
 h = c[d + 14704 >> 2] | 0;
 j = c[d + 14712 >> 2] | 0;
 k = c[d + 17672 >> 2] | 0;
 l = c[d + 17688 >> 2] | 0;
 m = c[d + 17696 >> 2] | 0;
 t = c[d + 17768 >> 2] | 0;
 n = c[d + 18160 >> 2] | 0;
 o = c[d + 18168 >> 2] | 0;
 p = c[d + 18176 >> 2] | 0;
 u = c[d + 21944 >> 2] | 0;
 a : {
  v = b[((d + 12384 | 0) + 62 | 0) >> 1] | 0;
  a[((d + 2304 | 0) + 318 | 0) >> 0] = v;
  a[((d + 2304 | 0) + 319 | 0) >> 0] = (v & 65535) >>> 8;
  v = b[((d + 12384 | 0) + 64 | 0) >> 1] | 0;
  a[((d + 2304 | 0) + 320 | 0) >> 0] = v;
  a[((d + 2304 | 0) + 321 | 0) >> 0] = (v & 65535) >>> 8;
  b[((d + 2304 | 0) + 322 | 0) >> 1] = b[((d + 12384 | 0) + 66 | 0) >> 1] | 0;
  if (h | 0) {
   v = c[f >> 2] | 0;
   c[f >> 2] = v - 1;
   if ((v | 0) == 1) {
    cf(h);
    c[(d + 12e3 | 0) >> 2] = 0;
   }
   c[(d + 12e3 | 0) >> 2] = 0;
  }
  if (j | 0) {
   h = j;
   v = c[h >> 2] | 0;
   c[h >> 2] = v - 1;
   if ((v | 0) == 1) {
    cf(j);
    c[(d + 12336 | 0) >> 2] = 0;
   }
   c[(d + 12336 | 0) >> 2] = 0;
  }
  c[(d + 11728 | 0) >> 2] = 0;
  c[(d + 11728 | 0) + 4 >> 2] = 0;
  c[(d + 11728 | 0) + 8 >> 2] = 0;
  c[(d + 11728 | 0) + 12 >> 2] = 0;
  c[(d + 11728 | 0) + 16 >> 2] = 0;
  a[(d + 11728 | 0) + 20 >> 0] = 10;
  c[(d + 11728 | 0) + 24 >> 2] = 1;
  c[(d + 11728 | 0) + 28 >> 2] = 0;
  a[(d + 11728 | 0) + 32 >> 0] = 10;
  c[(d + 11728 | 0) + 36 >> 2] = 1;
  c[(d + 11728 | 0) + 40 >> 2] = 0;
  a[(d + 11728 | 0) + 44 >> 0] = 10;
  c[(d + 11728 | 0) + 48 >> 2] = 1;
  c[(d + 11728 | 0) + 52 >> 2] = 0;
  a[(d + 11728 | 0) + 56 >> 0] = 10;
  c[(d + 11728 | 0) + 60 >> 2] = 1;
  c[(d + 11728 | 0) + 64 >> 2] = 0;
  a[(d + 11728 | 0) + 68 >> 0] = 10;
  c[(d + 11728 | 0) + 72 >> 2] = 1;
  c[(d + 11728 | 0) + 76 >> 2] = 0;
  a[(d + 11728 | 0) + 80 >> 0] = 10;
  c[(d + 11728 | 0) + 84 >> 2] = 1;
  c[(d + 11728 | 0) + 88 >> 2] = 0;
  a[(d + 11728 | 0) + 92 >> 0] = 10;
  c[(d + 11728 | 0) + 96 >> 2] = 1;
  c[(d + 11728 | 0) + 100 >> 2] = 0;
  a[(d + 11728 | 0) + 104 >> 0] = 10;
  c[(d + 11728 | 0) + 108 >> 2] = 1;
  c[(d + 11728 | 0) + 112 >> 2] = 0;
  a[(d + 11728 | 0) + 116 >> 0] = 10;
  c[(d + 11728 | 0) + 120 >> 2] = 1;
  c[(d + 11728 | 0) + 124 >> 2] = 0;
  a[(d + 11728 | 0) + 128 >> 0] = 10;
  c[(d + 11728 | 0) + 132 >> 2] = 1;
  c[(d + 11728 | 0) + 136 >> 2] = 0;
  a[(d + 11728 | 0) + 140 >> 0] = 10;
  c[(d + 11728 | 0) + 144 >> 2] = 1;
  c[(d + 11728 | 0) + 148 >> 2] = 0;
  a[(d + 11728 | 0) + 152 >> 0] = 10;
  c[(d + 11728 | 0) + 156 >> 2] = 1;
  c[(d + 11728 | 0) + 160 >> 2] = 0;
  a[(d + 11728 | 0) + 164 >> 0] = 10;
  c[(d + 11728 | 0) + 168 >> 2] = 1;
  c[(d + 11728 | 0) + 172 >> 2] = 0;
  a[(d + 11728 | 0) + 176 >> 0] = 10;
  c[(d + 11728 | 0) + 180 >> 2] = 1;
  c[(d + 11728 | 0) + 184 >> 2] = 0;
  a[(d + 11728 | 0) + 188 >> 0] = 10;
  c[(d + 11728 | 0) + 192 >> 2] = 1;
  c[(d + 11728 | 0) + 196 >> 2] = 0;
  a[(d + 11728 | 0) + 200 >> 0] = 10;
  c[(d + 11728 | 0) + 204 >> 2] = 1;
  c[(d + 11728 | 0) >> 2] = 763869090;
  c[(d + 11728 | 0) + 4 >> 2] = -99150023;
  Ae(d + 11696 | 0, 19001);
  fd(d + 11728 | 0, d + 11696 | 0, 6);
  c[(d + 11696 | 0) >> 2] = 0;
  Ae(d + 12796 | 0, 18931);
  fd(d + 11728 | 0, d + 12796 | 0, 1);
  c[(d + 12796 | 0) >> 2] = 0;
  Ae(d + 12792 | 0, 19005);
  Fd(d + 2304 | 0, d + 12792 | 0, d + 11728 | 0, 0);
  c[(d + 12792 | 0) >> 2] = 0;
  c[(d + 12596 | 0) >> 2] = 0;
  c[(d + 12596 | 0) + 4 >> 2] = 0;
  c[(d + 12596 | 0) + 8 >> 2] = -1;
  c[(d + 12596 | 0) + 12 >> 2] = -1;
  c[(d + 12596 | 0) + 16 >> 2] = 0;
  c[(d + 12596 | 0) + 20 >> 2] = -1;
  c[(d + 12596 | 0) + 24 >> 2] = -1;
  c[(d + 12596 | 0) + 28 >> 2] = 0;
  c[(d + 12596 | 0) + 32 >> 2] = -1;
  c[(d + 12596 | 0) + 36 >> 2] = -1;
  c[(d + 12596 | 0) + 40 >> 2] = 0;
  c[(d + 12596 | 0) + 44 >> 2] = -1;
  c[(d + 12596 | 0) + 48 >> 2] = -1;
  c[(d + 12596 | 0) + 52 >> 2] = 0;
  c[(d + 12596 | 0) + 56 >> 2] = -1;
  c[(d + 12596 | 0) + 60 >> 2] = -1;
  c[(d + 12596 | 0) + 64 >> 2] = 0;
  c[(d + 12596 | 0) + 68 >> 2] = -1;
  c[(d + 12596 | 0) + 72 >> 2] = -1;
  c[(d + 12596 | 0) + 76 >> 2] = 0;
  c[(d + 12596 | 0) + 80 >> 2] = -1;
  c[(d + 12596 | 0) + 84 >> 2] = -1;
  c[(d + 12596 | 0) + 88 >> 2] = 0;
  c[(d + 12596 | 0) + 92 >> 2] = -1;
  c[(d + 12596 | 0) + 96 >> 2] = -1;
  c[(d + 12596 | 0) + 100 >> 2] = 0;
  c[(d + 12596 | 0) + 104 >> 2] = -1;
  c[(d + 12596 | 0) + 108 >> 2] = -1;
  c[(d + 12596 | 0) + 112 >> 2] = 0;
  c[(d + 12596 | 0) + 116 >> 2] = -1;
  c[(d + 12596 | 0) + 120 >> 2] = -1;
  c[(d + 12596 | 0) + 124 >> 2] = 0;
  c[(d + 12596 | 0) + 128 >> 2] = -1;
  c[(d + 12596 | 0) + 132 >> 2] = -1;
  c[(d + 12596 | 0) + 136 >> 2] = 0;
  c[(d + 12596 | 0) + 140 >> 2] = -1;
  c[(d + 12596 | 0) + 144 >> 2] = -1;
  c[(d + 12596 | 0) + 148 >> 2] = 0;
  c[(d + 12596 | 0) + 152 >> 2] = -1;
  c[(d + 12596 | 0) + 156 >> 2] = -1;
  c[(d + 12596 | 0) + 160 >> 2] = 0;
  c[(d + 12596 | 0) + 164 >> 2] = -1;
  c[(d + 12596 | 0) + 168 >> 2] = -1;
  c[(d + 12596 | 0) + 172 >> 2] = 0;
  c[(d + 12596 | 0) + 176 >> 2] = -1;
  c[(d + 12596 | 0) + 180 >> 2] = -1;
  c[(d + 12596 | 0) + 184 >> 2] = 0;
  c[(d + 12596 | 0) + 188 >> 2] = -1;
  c[(d + 12596 | 0) + 192 >> 2] = -1;
  Ae(d + 12592 | 0, 19016);
  f = c[(d + 12596 | 0) >> 2] | 0;
  c[(d + 12596 | 0) >> 2] = f + 1;
  Be(d + 12528 | 0, d + 12592 | 0);
  c[((d + 12528 | 0) + 4 | 0) >> 2] = 0;
  c[(d + 12528 | 0) + 8 >> 2] = 0;
  if ((d + 12528 | 0 | 0) != ((d + 12596 | 0) + 4 + (f * 12 | 0) | 0 | 0)) {
   c[((d + 12596 | 0) + 4 + (f * 12 | 0) | 0) >> 2] = 0;
   Be((d + 12596 | 0) + 4 + (f * 12 | 0) | 0, d + 12528 | 0);
   c[(d + 12528 | 0) >> 2] = 0;
  }
  v = c[((d + 12528 | 0) + 4 | 0) + 4 >> 2] | 0;
  c[((d + 12596 | 0) + 4 + (f * 12 | 0) + 4 | 0) >> 2] = c[((d + 12528 | 0) + 4 | 0) >> 2];
  c[((d + 12596 | 0) + 4 + (f * 12 | 0) + 4 | 0) + 4 >> 2] = v;
  c[(d + 12592 | 0) >> 2] = 0;
  Ae(d + 12588 | 0, 19028);
  f = c[((d + 2304 | 0) + 2632 | 0) >> 2] | 0;
  c[((d + 2304 | 0) + 2632 | 0) >> 2] = f + 1;
  if (((d + 2304 | 0) + 2636 + (f * 204 | 0) | 0 | 0) != (d + 12588 | 0 | 0)) {
   c[((d + 2304 | 0) + 2636 + (f * 204 | 0) | 0) >> 2] = 0;
   Be((d + 2304 | 0) + 2636 + (f * 204 | 0) | 0, d + 12588 | 0);
  }
  c[((d + 2304 | 0) + 2636 + (f * 204 | 0) + 4 | 0) >> 2] = c[(d + 12596 | 0) >> 2];
  if (((d + 2304 | 0) + 2636 + (f * 204 | 0) + 4 | 0 | 0) != (d + 12596 | 0 | 0)) {
   h = 0;
   do {
    w = (d + 2304 | 0) + 2636 + (f * 204 | 0) + 8 + (h * 12 | 0) | 0;
    c[w >> 2] = 0;
    Be(w, (d + 12596 | 0) + 4 + (h * 12 | 0) | 0);
    w = (d + 12596 | 0) + 4 + (h * 12 | 0) + 4 | 0;
    j = c[w + 4 >> 2] | 0;
    v = (d + 2304 | 0) + 2636 + (f * 204 | 0) + 8 + (h * 12 | 0) + 4 | 0;
    c[v >> 2] = c[w >> 2];
    c[v + 4 >> 2] = j;
    h = h + 1 | 0;
   } while ((h | 0) != 16);
  }
  c[(d + 2304 | 0) + 2636 + (f * 204 | 0) + 200 >> 2] = 0;
  yd(d, (c[8946] | 0) + 1168 | 0, d + 2304 | 0);
  c[(d + 2304 | 0) + 3028 >> 2] = 0;
  c[(d + 2304 | 0) + 3016 >> 2] = 0;
  c[(d + 2304 | 0) + 3004 >> 2] = 0;
  c[(d + 2304 | 0) + 2992 >> 2] = 0;
  c[(d + 2304 | 0) + 2980 >> 2] = 0;
  c[(d + 2304 | 0) + 2968 >> 2] = 0;
  c[(d + 2304 | 0) + 2956 >> 2] = 0;
  c[(d + 2304 | 0) + 2944 >> 2] = 0;
  c[(d + 2304 | 0) + 2932 >> 2] = 0;
  c[(d + 2304 | 0) + 2920 >> 2] = 0;
  c[(d + 2304 | 0) + 2908 >> 2] = 0;
  c[(d + 2304 | 0) + 2896 >> 2] = 0;
  c[(d + 2304 | 0) + 2884 >> 2] = 0;
  c[(d + 2304 | 0) + 2872 >> 2] = 0;
  c[(d + 2304 | 0) + 2860 >> 2] = 0;
  c[(d + 2304 | 0) + 2848 >> 2] = 0;
  c[(d + 2304 | 0) + 2840 >> 2] = 0;
  c[(d + 2304 | 0) + 2824 >> 2] = 0;
  c[(d + 2304 | 0) + 2812 >> 2] = 0;
  c[(d + 2304 | 0) + 2800 >> 2] = 0;
  c[(d + 2304 | 0) + 2788 >> 2] = 0;
  c[(d + 2304 | 0) + 2776 >> 2] = 0;
  c[(d + 2304 | 0) + 2764 >> 2] = 0;
  c[(d + 2304 | 0) + 2752 >> 2] = 0;
  c[(d + 2304 | 0) + 2740 >> 2] = 0;
  c[(d + 2304 | 0) + 2728 >> 2] = 0;
  c[(d + 2304 | 0) + 2716 >> 2] = 0;
  c[(d + 2304 | 0) + 2704 >> 2] = 0;
  c[(d + 2304 | 0) + 2692 >> 2] = 0;
  c[(d + 2304 | 0) + 2680 >> 2] = 0;
  c[(d + 2304 | 0) + 2668 >> 2] = 0;
  c[(d + 2304 | 0) + 2656 >> 2] = 0;
  c[(d + 2304 | 0) + 2644 >> 2] = 0;
  c[(d + 2304 | 0) + 2636 >> 2] = 0;
  c[(d + 2304 | 0) + 2548 >> 2] = 0;
  c[(d + 2304 | 0) + 2536 >> 2] = 0;
  c[(d + 2304 | 0) + 2524 >> 2] = 0;
  c[(d + 2304 | 0) + 2512 >> 2] = 0;
  c[(d + 2304 | 0) + 2500 >> 2] = 0;
  c[(d + 2304 | 0) + 2488 >> 2] = 0;
  c[(d + 2304 | 0) + 2476 >> 2] = 0;
  c[(d + 2304 | 0) + 2464 >> 2] = 0;
  c[(d + 2304 | 0) + 2452 >> 2] = 0;
  c[(d + 2304 | 0) + 2440 >> 2] = 0;
  c[(d + 2304 | 0) + 2428 >> 2] = 0;
  c[(d + 2304 | 0) + 2416 >> 2] = 0;
  c[(d + 2304 | 0) + 2404 >> 2] = 0;
  c[(d + 2304 | 0) + 2392 >> 2] = 0;
  c[(d + 2304 | 0) + 2380 >> 2] = 0;
  c[(d + 2304 | 0) + 2368 >> 2] = 0;
  c[(d + 2304 | 0) + 2344 >> 2] = 0;
  c[(d + 2304 | 0) + 2260 >> 2] = 0;
  c[(d + 2304 | 0) + 2248 >> 2] = 0;
  c[(d + 2304 | 0) + 2236 >> 2] = 0;
  c[(d + 2304 | 0) + 2224 >> 2] = 0;
  c[(d + 2304 | 0) + 2212 >> 2] = 0;
  c[(d + 2304 | 0) + 2200 >> 2] = 0;
  c[(d + 2304 | 0) + 2188 >> 2] = 0;
  c[(d + 2304 | 0) + 2176 >> 2] = 0;
  c[(d + 2304 | 0) + 2164 >> 2] = 0;
  c[(d + 2304 | 0) + 2152 >> 2] = 0;
  c[(d + 2304 | 0) + 2140 >> 2] = 0;
  c[(d + 2304 | 0) + 2128 >> 2] = 0;
  c[(d + 2304 | 0) + 2116 >> 2] = 0;
  c[(d + 2304 | 0) + 2104 >> 2] = 0;
  c[(d + 2304 | 0) + 2092 >> 2] = 0;
  c[(d + 2304 | 0) + 2080 >> 2] = 0;
  c[(d + 2304 | 0) + 2056 >> 2] = 0;
  c[(d + 2304 | 0) + 1972 >> 2] = 0;
  c[(d + 2304 | 0) + 1960 >> 2] = 0;
  c[(d + 2304 | 0) + 1948 >> 2] = 0;
  c[(d + 2304 | 0) + 1936 >> 2] = 0;
  c[(d + 2304 | 0) + 1924 >> 2] = 0;
  c[(d + 2304 | 0) + 1912 >> 2] = 0;
  c[(d + 2304 | 0) + 1900 >> 2] = 0;
  c[(d + 2304 | 0) + 1888 >> 2] = 0;
  c[(d + 2304 | 0) + 1876 >> 2] = 0;
  c[(d + 2304 | 0) + 1864 >> 2] = 0;
  c[(d + 2304 | 0) + 1852 >> 2] = 0;
  c[(d + 2304 | 0) + 1840 >> 2] = 0;
  c[(d + 2304 | 0) + 1828 >> 2] = 0;
  c[(d + 2304 | 0) + 1816 >> 2] = 0;
  c[(d + 2304 | 0) + 1804 >> 2] = 0;
  c[(d + 2304 | 0) + 1792 >> 2] = 0;
  c[(d + 2304 | 0) + 1768 >> 2] = 0;
  c[(d + 2304 | 0) + 1684 >> 2] = 0;
  c[(d + 2304 | 0) + 1672 >> 2] = 0;
  c[(d + 2304 | 0) + 1660 >> 2] = 0;
  c[(d + 2304 | 0) + 1648 >> 2] = 0;
  c[(d + 2304 | 0) + 1636 >> 2] = 0;
  c[(d + 2304 | 0) + 1624 >> 2] = 0;
  c[(d + 2304 | 0) + 1612 >> 2] = 0;
  c[(d + 2304 | 0) + 1600 >> 2] = 0;
  c[(d + 2304 | 0) + 1588 >> 2] = 0;
  c[(d + 2304 | 0) + 1576 >> 2] = 0;
  c[(d + 2304 | 0) + 1564 >> 2] = 0;
  c[(d + 2304 | 0) + 1552 >> 2] = 0;
  c[(d + 2304 | 0) + 1540 >> 2] = 0;
  c[(d + 2304 | 0) + 1528 >> 2] = 0;
  c[(d + 2304 | 0) + 1516 >> 2] = 0;
  c[(d + 2304 | 0) + 1504 >> 2] = 0;
  c[(d + 2304 | 0) + 1480 >> 2] = 0;
  c[(d + 2304 | 0) + 1396 >> 2] = 0;
  c[(d + 2304 | 0) + 1384 >> 2] = 0;
  c[(d + 2304 | 0) + 1372 >> 2] = 0;
  c[(d + 2304 | 0) + 1360 >> 2] = 0;
  c[(d + 2304 | 0) + 1348 >> 2] = 0;
  c[(d + 2304 | 0) + 1336 >> 2] = 0;
  c[(d + 2304 | 0) + 1324 >> 2] = 0;
  c[(d + 2304 | 0) + 1312 >> 2] = 0;
  c[(d + 2304 | 0) + 1300 >> 2] = 0;
  c[(d + 2304 | 0) + 1288 >> 2] = 0;
  c[(d + 2304 | 0) + 1276 >> 2] = 0;
  c[(d + 2304 | 0) + 1264 >> 2] = 0;
  c[(d + 2304 | 0) + 1252 >> 2] = 0;
  c[(d + 2304 | 0) + 1240 >> 2] = 0;
  c[(d + 2304 | 0) + 1228 >> 2] = 0;
  c[(d + 2304 | 0) + 1216 >> 2] = 0;
  c[(d + 2304 | 0) + 1192 >> 2] = 0;
  c[(d + 2304 | 0) + 1108 >> 2] = 0;
  c[(d + 2304 | 0) + 1096 >> 2] = 0;
  c[(d + 2304 | 0) + 1084 >> 2] = 0;
  c[(d + 2304 | 0) + 1072 >> 2] = 0;
  c[(d + 2304 | 0) + 1060 >> 2] = 0;
  c[(d + 2304 | 0) + 1048 >> 2] = 0;
  c[(d + 2304 | 0) + 1036 >> 2] = 0;
  c[(d + 2304 | 0) + 1024 >> 2] = 0;
  c[(d + 2304 | 0) + 1012 >> 2] = 0;
  c[(d + 2304 | 0) + 1e3 >> 2] = 0;
  c[(d + 2304 | 0) + 988 >> 2] = 0;
  c[(d + 2304 | 0) + 976 >> 2] = 0;
  c[(d + 2304 | 0) + 964 >> 2] = 0;
  c[(d + 2304 | 0) + 952 >> 2] = 0;
  c[(d + 2304 | 0) + 940 >> 2] = 0;
  c[(d + 2304 | 0) + 928 >> 2] = 0;
  c[(d + 2304 | 0) + 904 >> 2] = 0;
  c[(d + 2304 | 0) + 820 >> 2] = 0;
  c[(d + 2304 | 0) + 808 >> 2] = 0;
  c[(d + 2304 | 0) + 796 >> 2] = 0;
  c[(d + 2304 | 0) + 784 >> 2] = 0;
  c[(d + 2304 | 0) + 772 >> 2] = 0;
  c[(d + 2304 | 0) + 760 >> 2] = 0;
  c[(d + 2304 | 0) + 748 >> 2] = 0;
  c[(d + 2304 | 0) + 736 >> 2] = 0;
  c[(d + 2304 | 0) + 724 >> 2] = 0;
  c[(d + 2304 | 0) + 712 >> 2] = 0;
  c[(d + 2304 | 0) + 700 >> 2] = 0;
  c[(d + 2304 | 0) + 688 >> 2] = 0;
  c[(d + 2304 | 0) + 676 >> 2] = 0;
  c[(d + 2304 | 0) + 664 >> 2] = 0;
  c[(d + 2304 | 0) + 652 >> 2] = 0;
  c[(d + 2304 | 0) + 640 >> 2] = 0;
  c[(d + 2304 | 0) + 616 >> 2] = 0;
  c[(d + 2304 | 0) + 532 >> 2] = 0;
  c[(d + 2304 | 0) + 520 >> 2] = 0;
  c[(d + 2304 | 0) + 508 >> 2] = 0;
  c[(d + 2304 | 0) + 496 >> 2] = 0;
  c[(d + 2304 | 0) + 484 >> 2] = 0;
  c[(d + 2304 | 0) + 472 >> 2] = 0;
  c[(d + 2304 | 0) + 460 >> 2] = 0;
  c[(d + 2304 | 0) + 448 >> 2] = 0;
  c[(d + 2304 | 0) + 436 >> 2] = 0;
  c[(d + 2304 | 0) + 424 >> 2] = 0;
  c[(d + 2304 | 0) + 412 >> 2] = 0;
  c[(d + 2304 | 0) + 400 >> 2] = 0;
  c[(d + 2304 | 0) + 388 >> 2] = 0;
  c[(d + 2304 | 0) + 376 >> 2] = 0;
  c[(d + 2304 | 0) + 364 >> 2] = 0;
  c[(d + 2304 | 0) + 352 >> 2] = 0;
  c[(d + 2304 | 0) + 328 >> 2] = 0;
  Sc((d + 2304 | 0) + 16 | 0);
  c[(d + 2304 | 0) >> 2] = 0;
  c[(d + 12528 | 0) >> 2] = 0;
  Be(d + 1976 | 0, d + 12528 | 0);
  c[((d + 1976 | 0) + 4 | 0) >> 2] = -1;
  c[((d + 1976 | 0) + 8 | 0) >> 2] = 0;
  c[((d + 1976 | 0) + 8 | 0) + 4 >> 2] = 0;
  c[((d + 1976 | 0) + 8 | 0) >> 2] = 2013282306;
  b[((d + 1976 | 0) + 8 | 0) + 4 >> 1] = 192;
  g[(d + 1976 | 0) + 16 >> 2] = 1.0;
  g[(d + 1976 | 0) + 20 >> 2] = 1.0;
  g[(d + 1976 | 0) + 24 >> 2] = 1.0;
  g[(d + 1976 | 0) + 28 >> 2] = 1.0;
  b[(d + 1976 | 0) + 32 >> 1] = 28672;
  b[(d + 1976 | 0) + 34 >> 1] = 28672;
  c[((d + 1976 | 0) + 36 | 0) >> 2] = 0;
  b[((d + 1976 | 0) + 36 | 0) >> 1] = 32647;
  b[((d + 1976 | 0) + 36 | 0) + 2 >> 1] = 255;
  b[(d + 1976 | 0) + 40 >> 1] = 296;
  a[(d + 1976 | 0) + 44 >> 0] = 17;
  a[(d + 1976 | 0) + 45 >> 0] = 13;
  a[(d + 1976 | 0) + 46 >> 0] = 17;
  a[(d + 1976 | 0) + 47 >> 0] = 13;
  a[(d + 1976 | 0) + 48 >> 0] = 17;
  a[(d + 1976 | 0) + 49 >> 0] = 13;
  a[(d + 1976 | 0) + 50 >> 0] = 17;
  a[(d + 1976 | 0) + 51 >> 0] = 13;
  a[(d + 1976 | 0) + 52 >> 0] = 17;
  a[(d + 1976 | 0) + 53 >> 0] = 13;
  a[(d + 1976 | 0) + 54 >> 0] = 17;
  a[(d + 1976 | 0) + 55 >> 0] = 13;
  a[(d + 1976 | 0) + 56 >> 0] = 17;
  a[(d + 1976 | 0) + 57 >> 0] = 13;
  a[(d + 1976 | 0) + 58 >> 0] = 17;
  a[(d + 1976 | 0) + 59 >> 0] = 13;
  a[(d + 1976 | 0) + 60 >> 0] = 17;
  a[(d + 1976 | 0) + 61 >> 0] = 13;
  a[(d + 1976 | 0) + 62 >> 0] = 17;
  a[(d + 1976 | 0) + 63 >> 0] = 13;
  a[(d + 1976 | 0) + 64 >> 0] = 17;
  a[(d + 1976 | 0) + 65 >> 0] = 13;
  a[(d + 1976 | 0) + 66 >> 0] = 17;
  a[(d + 1976 | 0) + 67 >> 0] = 13;
  a[(d + 1976 | 0) + 68 >> 0] = 17;
  a[(d + 1976 | 0) + 69 >> 0] = 13;
  a[(d + 1976 | 0) + 70 >> 0] = 17;
  a[(d + 1976 | 0) + 71 >> 0] = 13;
  a[(d + 1976 | 0) + 72 >> 0] = 17;
  a[(d + 1976 | 0) + 73 >> 0] = 13;
  a[(d + 1976 | 0) + 74 >> 0] = 17;
  a[(d + 1976 | 0) + 75 >> 0] = 13;
  a[(d + 1976 | 0) + 42 >> 0] = 0;
  a[(d + 1976 | 0) + 43 >> 0] = 1;
  a[((d + 1976 | 0) + 108 | 0) >> 0] = 0;
  a[(d + 1976 | 0) + 109 >> 0] = 0;
  y = (d + 1976 | 0) + 92 | 0;
  z = (d + 1976 | 0) + 76 | 0;
  b[y >> 1] = 65535;
  b[y + 2 >> 1] = 65535;
  b[y + 4 >> 1] = 65535;
  b[y + 6 >> 1] = 65535;
  b[y + 8 >> 1] = 65535;
  b[y + 10 >> 1] = 65535;
  b[y + 12 >> 1] = 65535;
  b[y + 14 >> 1] = 65535;
  b[z >> 1] = 0;
  b[z + 2 >> 1] = 0;
  b[z + 4 >> 1] = 0;
  b[z + 6 >> 1] = 0;
  b[z + 8 >> 1] = 0;
  b[z + 10 >> 1] = 0;
  b[z + 12 >> 1] = 0;
  b[z + 14 >> 1] = 0;
  a[(d + 1976 | 0) + 112 >> 0] = 17;
  a[(d + 1976 | 0) + 113 >> 0] = 13;
  a[(d + 1976 | 0) + 114 >> 0] = 17;
  a[(d + 1976 | 0) + 115 >> 0] = 13;
  a[(d + 1976 | 0) + 116 >> 0] = 17;
  a[(d + 1976 | 0) + 117 >> 0] = 13;
  a[(d + 1976 | 0) + 118 >> 0] = 17;
  a[(d + 1976 | 0) + 119 >> 0] = 13;
  a[(d + 1976 | 0) + 120 >> 0] = 17;
  a[(d + 1976 | 0) + 121 >> 0] = 13;
  a[(d + 1976 | 0) + 122 >> 0] = 17;
  a[(d + 1976 | 0) + 123 >> 0] = 13;
  a[(d + 1976 | 0) + 124 >> 0] = 17;
  a[(d + 1976 | 0) + 125 >> 0] = 13;
  a[(d + 1976 | 0) + 126 >> 0] = 17;
  a[(d + 1976 | 0) + 127 >> 0] = 13;
  a[(d + 1976 | 0) + 128 >> 0] = 17;
  a[(d + 1976 | 0) + 129 >> 0] = 13;
  a[(d + 1976 | 0) + 130 >> 0] = 17;
  a[(d + 1976 | 0) + 131 >> 0] = 13;
  a[(d + 1976 | 0) + 132 >> 0] = 17;
  a[(d + 1976 | 0) + 133 >> 0] = 13;
  a[(d + 1976 | 0) + 134 >> 0] = 17;
  a[(d + 1976 | 0) + 135 >> 0] = 13;
  a[(d + 1976 | 0) + 136 >> 0] = 17;
  a[(d + 1976 | 0) + 137 >> 0] = 13;
  a[(d + 1976 | 0) + 138 >> 0] = 17;
  a[(d + 1976 | 0) + 139 >> 0] = 13;
  a[(d + 1976 | 0) + 140 >> 0] = 17;
  a[(d + 1976 | 0) + 141 >> 0] = 13;
  a[(d + 1976 | 0) + 142 >> 0] = 17;
  a[(d + 1976 | 0) + 143 >> 0] = 13;
  a[(d + 1976 | 0) + 110 >> 0] = 0;
  a[(d + 1976 | 0) + 111 >> 0] = 1;
  a[((d + 1976 | 0) + 176 | 0) >> 0] = 0;
  a[(d + 1976 | 0) + 177 >> 0] = 0;
  f = (d + 1976 | 0) + 160 | 0;
  x = (d + 1976 | 0) + 144 | 0;
  b[f >> 1] = 65535;
  b[f + 2 >> 1] = 65535;
  b[f + 4 >> 1] = 65535;
  b[f + 6 >> 1] = 65535;
  b[f + 8 >> 1] = 65535;
  b[f + 10 >> 1] = 65535;
  b[f + 12 >> 1] = 65535;
  b[f + 14 >> 1] = 65535;
  b[x >> 1] = 0;
  b[x + 2 >> 1] = 0;
  b[x + 4 >> 1] = 0;
  b[x + 6 >> 1] = 0;
  b[x + 8 >> 1] = 0;
  b[x + 10 >> 1] = 0;
  b[x + 12 >> 1] = 0;
  b[x + 14 >> 1] = 0;
  a[(d + 1976 | 0) + 180 >> 0] = 17;
  a[(d + 1976 | 0) + 181 >> 0] = 13;
  a[(d + 1976 | 0) + 182 >> 0] = 17;
  a[(d + 1976 | 0) + 183 >> 0] = 13;
  a[(d + 1976 | 0) + 184 >> 0] = 17;
  a[(d + 1976 | 0) + 185 >> 0] = 13;
  a[(d + 1976 | 0) + 186 >> 0] = 17;
  a[(d + 1976 | 0) + 187 >> 0] = 13;
  a[(d + 1976 | 0) + 188 >> 0] = 17;
  a[(d + 1976 | 0) + 189 >> 0] = 13;
  a[(d + 1976 | 0) + 190 >> 0] = 17;
  a[(d + 1976 | 0) + 191 >> 0] = 13;
  a[(d + 1976 | 0) + 192 >> 0] = 17;
  a[(d + 1976 | 0) + 193 >> 0] = 13;
  a[(d + 1976 | 0) + 194 >> 0] = 17;
  a[(d + 1976 | 0) + 195 >> 0] = 13;
  a[(d + 1976 | 0) + 196 >> 0] = 17;
  a[(d + 1976 | 0) + 197 >> 0] = 13;
  a[(d + 1976 | 0) + 198 >> 0] = 17;
  a[(d + 1976 | 0) + 199 >> 0] = 13;
  a[(d + 1976 | 0) + 200 >> 0] = 17;
  a[(d + 1976 | 0) + 201 >> 0] = 13;
  a[(d + 1976 | 0) + 202 >> 0] = 17;
  a[(d + 1976 | 0) + 203 >> 0] = 13;
  a[(d + 1976 | 0) + 204 >> 0] = 17;
  a[(d + 1976 | 0) + 205 >> 0] = 13;
  a[(d + 1976 | 0) + 206 >> 0] = 17;
  a[(d + 1976 | 0) + 207 >> 0] = 13;
  a[(d + 1976 | 0) + 208 >> 0] = 17;
  a[(d + 1976 | 0) + 209 >> 0] = 13;
  a[(d + 1976 | 0) + 210 >> 0] = 17;
  a[(d + 1976 | 0) + 211 >> 0] = 13;
  a[(d + 1976 | 0) + 178 >> 0] = 0;
  a[(d + 1976 | 0) + 179 >> 0] = 1;
  a[((d + 1976 | 0) + 244 | 0) >> 0] = 0;
  a[(d + 1976 | 0) + 245 >> 0] = 0;
  j = (d + 1976 | 0) + 228 | 0;
  h = (d + 1976 | 0) + 212 | 0;
  b[j >> 1] = 65535;
  b[j + 2 >> 1] = 65535;
  b[j + 4 >> 1] = 65535;
  b[j + 6 >> 1] = 65535;
  b[j + 8 >> 1] = 65535;
  b[j + 10 >> 1] = 65535;
  b[j + 12 >> 1] = 65535;
  b[j + 14 >> 1] = 65535;
  b[h >> 1] = 0;
  b[h + 2 >> 1] = 0;
  b[h + 4 >> 1] = 0;
  b[h + 6 >> 1] = 0;
  b[h + 8 >> 1] = 0;
  b[h + 10 >> 1] = 0;
  b[h + 12 >> 1] = 0;
  b[h + 14 >> 1] = 0;
  a[(d + 1976 | 0) + 248 >> 0] = 17;
  a[(d + 1976 | 0) + 249 >> 0] = 13;
  a[(d + 1976 | 0) + 250 >> 0] = 17;
  a[(d + 1976 | 0) + 251 >> 0] = 13;
  a[(d + 1976 | 0) + 252 >> 0] = 17;
  a[(d + 1976 | 0) + 253 >> 0] = 13;
  a[(d + 1976 | 0) + 254 >> 0] = 17;
  a[(d + 1976 | 0) + 255 >> 0] = 13;
  a[(d + 1976 | 0) + 256 >> 0] = 17;
  a[(d + 1976 | 0) + 257 >> 0] = 13;
  a[(d + 1976 | 0) + 258 >> 0] = 17;
  a[(d + 1976 | 0) + 259 >> 0] = 13;
  a[(d + 1976 | 0) + 260 >> 0] = 17;
  a[(d + 1976 | 0) + 261 >> 0] = 13;
  a[(d + 1976 | 0) + 262 >> 0] = 17;
  a[(d + 1976 | 0) + 263 >> 0] = 13;
  a[(d + 1976 | 0) + 264 >> 0] = 17;
  a[(d + 1976 | 0) + 265 >> 0] = 13;
  a[(d + 1976 | 0) + 266 >> 0] = 17;
  a[(d + 1976 | 0) + 267 >> 0] = 13;
  a[(d + 1976 | 0) + 268 >> 0] = 17;
  a[(d + 1976 | 0) + 269 >> 0] = 13;
  a[(d + 1976 | 0) + 270 >> 0] = 17;
  a[(d + 1976 | 0) + 271 >> 0] = 13;
  a[(d + 1976 | 0) + 272 >> 0] = 17;
  a[(d + 1976 | 0) + 273 >> 0] = 13;
  a[(d + 1976 | 0) + 274 >> 0] = 17;
  a[(d + 1976 | 0) + 275 >> 0] = 13;
  a[(d + 1976 | 0) + 276 >> 0] = 17;
  a[(d + 1976 | 0) + 277 >> 0] = 13;
  a[(d + 1976 | 0) + 278 >> 0] = 17;
  a[(d + 1976 | 0) + 279 >> 0] = 13;
  a[(d + 1976 | 0) + 246 >> 0] = 0;
  a[(d + 1976 | 0) + 247 >> 0] = 1;
  a[((d + 1976 | 0) + 312 | 0) >> 0] = 0;
  a[(d + 1976 | 0) + 313 >> 0] = 0;
  w = (d + 1976 | 0) + 296 | 0;
  v = (d + 1976 | 0) + 280 | 0;
  b[w >> 1] = 65535;
  b[w + 2 >> 1] = 65535;
  b[w + 4 >> 1] = 65535;
  b[w + 6 >> 1] = 65535;
  b[w + 8 >> 1] = 65535;
  b[w + 10 >> 1] = 65535;
  b[w + 12 >> 1] = 65535;
  b[w + 14 >> 1] = 65535;
  b[v >> 1] = 0;
  b[v + 2 >> 1] = 0;
  b[v + 4 >> 1] = 0;
  b[v + 6 >> 1] = 0;
  b[v + 8 >> 1] = 0;
  b[v + 10 >> 1] = 0;
  b[v + 12 >> 1] = 0;
  b[v + 14 >> 1] = 0;
  c[((d + 1976 | 0) + 316 | 0) >> 2] = 3;
  A = c[d + 4 >> 2] | 0;
  c[((d + 1976 | 0) + 320 | 0) >> 2] = c[d >> 2];
  c[((d + 1976 | 0) + 320 | 0) + 4 >> 2] = A;
  c[(d + 736 | 0) >> 2] = 0;
  Be(d + 736 | 0, d + 1976 | 0);
  c[(d + 736 | 0) + 4 >> 2] = c[((d + 1976 | 0) + 4 | 0) >> 2];
  A = c[((d + 1976 | 0) + 8 | 0) + 4 >> 2] | 0;
  c[((d + 736 | 0) + 8 | 0) >> 2] = c[((d + 1976 | 0) + 8 | 0) >> 2];
  c[((d + 736 | 0) + 8 | 0) + 4 >> 2] = A;
  c[((d + 736 | 0) + 16 | 0) >> 2] = c[((d + 1976 | 0) + 16 | 0) >> 2];
  c[((d + 736 | 0) + 16 | 0) + 4 >> 2] = c[((d + 1976 | 0) + 16 | 0) + 4 >> 2];
  c[((d + 736 | 0) + 16 | 0) + 8 >> 2] = c[((d + 1976 | 0) + 16 | 0) + 8 >> 2];
  c[((d + 736 | 0) + 16 | 0) + 12 >> 2] = c[((d + 1976 | 0) + 16 | 0) + 12 >> 2];
  c[((d + 736 | 0) + 32 | 0) >> 2] = c[((d + 1976 | 0) + 32 | 0) >> 2];
  c[((d + 736 | 0) + 32 | 0) + 4 >> 2] = c[((d + 1976 | 0) + 32 | 0) + 4 >> 2];
  b[((d + 736 | 0) + 32 | 0) + 8 >> 1] = b[((d + 1976 | 0) + 32 | 0) + 8 >> 1] | 0;
  b[(d + 736 | 0) + 42 >> 1] = b[(d + 1976 | 0) + 42 >> 1] | 0;
  b[((d + 736 | 0) + 44 | 0) >> 1] = b[(d + 1976 | 0) + 44 >> 1] | 0;
  b[((d + 736 | 0) + 46 | 0) >> 1] = b[(d + 1976 | 0) + 46 >> 1] | 0;
  b[((d + 736 | 0) + 48 | 0) >> 1] = b[(d + 1976 | 0) + 48 >> 1] | 0;
  b[((d + 736 | 0) + 50 | 0) >> 1] = b[(d + 1976 | 0) + 50 >> 1] | 0;
  b[((d + 736 | 0) + 52 | 0) >> 1] = b[(d + 1976 | 0) + 52 >> 1] | 0;
  b[((d + 736 | 0) + 54 | 0) >> 1] = b[(d + 1976 | 0) + 54 >> 1] | 0;
  b[((d + 736 | 0) + 56 | 0) >> 1] = b[(d + 1976 | 0) + 56 >> 1] | 0;
  b[((d + 736 | 0) + 58 | 0) >> 1] = b[(d + 1976 | 0) + 58 >> 1] | 0;
  b[((d + 736 | 0) + 60 | 0) >> 1] = b[(d + 1976 | 0) + 60 >> 1] | 0;
  b[((d + 736 | 0) + 62 | 0) >> 1] = b[(d + 1976 | 0) + 62 >> 1] | 0;
  b[((d + 736 | 0) + 64 | 0) >> 1] = b[(d + 1976 | 0) + 64 >> 1] | 0;
  b[((d + 736 | 0) + 66 | 0) >> 1] = b[(d + 1976 | 0) + 66 >> 1] | 0;
  b[((d + 736 | 0) + 68 | 0) >> 1] = b[(d + 1976 | 0) + 68 >> 1] | 0;
  b[((d + 736 | 0) + 70 | 0) >> 1] = b[(d + 1976 | 0) + 70 >> 1] | 0;
  b[((d + 736 | 0) + 72 | 0) >> 1] = b[(d + 1976 | 0) + 72 >> 1] | 0;
  b[((d + 736 | 0) + 74 | 0) >> 1] = b[(d + 1976 | 0) + 74 >> 1] | 0;
  z = b[z >> 1] | 0;
  a[((d + 736 | 0) + 76 | 0) >> 0] = z;
  a[((d + 736 | 0) + 77 | 0) >> 0] = (z & 65535) >>> 8;
  z = b[(d + 1976 | 0) + 78 >> 1] | 0;
  a[((d + 736 | 0) + 78 | 0) >> 0] = z;
  a[((d + 736 | 0) + 79 | 0) >> 0] = (z & 65535) >>> 8;
  z = b[(d + 1976 | 0) + 80 >> 1] | 0;
  a[((d + 736 | 0) + 80 | 0) >> 0] = z;
  a[((d + 736 | 0) + 81 | 0) >> 0] = (z & 65535) >>> 8;
  z = b[(d + 1976 | 0) + 82 >> 1] | 0;
  a[((d + 736 | 0) + 82 | 0) >> 0] = z;
  a[((d + 736 | 0) + 83 | 0) >> 0] = (z & 65535) >>> 8;
  z = b[(d + 1976 | 0) + 84 >> 1] | 0;
  a[((d + 736 | 0) + 84 | 0) >> 0] = z;
  a[((d + 736 | 0) + 85 | 0) >> 0] = (z & 65535) >>> 8;
  z = b[(d + 1976 | 0) + 86 >> 1] | 0;
  a[((d + 736 | 0) + 86 | 0) >> 0] = z;
  a[((d + 736 | 0) + 87 | 0) >> 0] = (z & 65535) >>> 8;
  z = b[(d + 1976 | 0) + 88 >> 1] | 0;
  a[((d + 736 | 0) + 88 | 0) >> 0] = z;
  a[((d + 736 | 0) + 89 | 0) >> 0] = (z & 65535) >>> 8;
  z = b[(d + 1976 | 0) + 90 >> 1] | 0;
  a[((d + 736 | 0) + 90 | 0) >> 0] = z;
  a[((d + 736 | 0) + 91 | 0) >> 0] = (z & 65535) >>> 8;
  y = b[y >> 1] | 0;
  a[((d + 736 | 0) + 92 | 0) >> 0] = y;
  a[((d + 736 | 0) + 93 | 0) >> 0] = (y & 65535) >>> 8;
  y = b[(d + 1976 | 0) + 94 >> 1] | 0;
  a[((d + 736 | 0) + 94 | 0) >> 0] = y;
  a[((d + 736 | 0) + 95 | 0) >> 0] = (y & 65535) >>> 8;
  y = b[(d + 1976 | 0) + 96 >> 1] | 0;
  a[((d + 736 | 0) + 96 | 0) >> 0] = y;
  a[((d + 736 | 0) + 97 | 0) >> 0] = (y & 65535) >>> 8;
  y = b[(d + 1976 | 0) + 98 >> 1] | 0;
  a[((d + 736 | 0) + 98 | 0) >> 0] = y;
  a[((d + 736 | 0) + 99 | 0) >> 0] = (y & 65535) >>> 8;
  y = b[(d + 1976 | 0) + 100 >> 1] | 0;
  a[((d + 736 | 0) + 100 | 0) >> 0] = y;
  a[((d + 736 | 0) + 101 | 0) >> 0] = (y & 65535) >>> 8;
  y = b[(d + 1976 | 0) + 102 >> 1] | 0;
  a[((d + 736 | 0) + 102 | 0) >> 0] = y;
  a[((d + 736 | 0) + 103 | 0) >> 0] = (y & 65535) >>> 8;
  y = b[(d + 1976 | 0) + 104 >> 1] | 0;
  a[((d + 736 | 0) + 104 | 0) >> 0] = y;
  a[((d + 736 | 0) + 105 | 0) >> 0] = (y & 65535) >>> 8;
  y = b[(d + 1976 | 0) + 106 >> 1] | 0;
  a[((d + 736 | 0) + 106 | 0) >> 0] = y;
  a[((d + 736 | 0) + 107 | 0) >> 0] = (y & 65535) >>> 8;
  b[((d + 736 | 0) + 108 | 0) >> 1] = b[((d + 1976 | 0) + 108 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 110 | 0) >> 1] = b[(d + 1976 | 0) + 110 >> 1] | 0;
  b[((d + 736 | 0) + 112 | 0) >> 1] = b[(d + 1976 | 0) + 112 >> 1] | 0;
  b[((d + 736 | 0) + 114 | 0) >> 1] = b[(d + 1976 | 0) + 114 >> 1] | 0;
  b[((d + 736 | 0) + 116 | 0) >> 1] = b[(d + 1976 | 0) + 116 >> 1] | 0;
  b[((d + 736 | 0) + 118 | 0) >> 1] = b[(d + 1976 | 0) + 118 >> 1] | 0;
  b[((d + 736 | 0) + 120 | 0) >> 1] = b[(d + 1976 | 0) + 120 >> 1] | 0;
  b[((d + 736 | 0) + 122 | 0) >> 1] = b[(d + 1976 | 0) + 122 >> 1] | 0;
  b[((d + 736 | 0) + 124 | 0) >> 1] = b[(d + 1976 | 0) + 124 >> 1] | 0;
  b[((d + 736 | 0) + 126 | 0) >> 1] = b[(d + 1976 | 0) + 126 >> 1] | 0;
  b[((d + 736 | 0) + 128 | 0) >> 1] = b[(d + 1976 | 0) + 128 >> 1] | 0;
  b[((d + 736 | 0) + 130 | 0) >> 1] = b[(d + 1976 | 0) + 130 >> 1] | 0;
  b[((d + 736 | 0) + 132 | 0) >> 1] = b[(d + 1976 | 0) + 132 >> 1] | 0;
  b[((d + 736 | 0) + 134 | 0) >> 1] = b[(d + 1976 | 0) + 134 >> 1] | 0;
  b[((d + 736 | 0) + 136 | 0) >> 1] = b[(d + 1976 | 0) + 136 >> 1] | 0;
  b[((d + 736 | 0) + 138 | 0) >> 1] = b[(d + 1976 | 0) + 138 >> 1] | 0;
  b[((d + 736 | 0) + 140 | 0) >> 1] = b[(d + 1976 | 0) + 140 >> 1] | 0;
  b[((d + 736 | 0) + 142 | 0) >> 1] = b[(d + 1976 | 0) + 142 >> 1] | 0;
  x = b[x >> 1] | 0;
  a[((d + 736 | 0) + 144 | 0) >> 0] = x;
  a[((d + 736 | 0) + 145 | 0) >> 0] = (x & 65535) >>> 8;
  x = b[(d + 1976 | 0) + 146 >> 1] | 0;
  a[((d + 736 | 0) + 146 | 0) >> 0] = x;
  a[((d + 736 | 0) + 147 | 0) >> 0] = (x & 65535) >>> 8;
  x = b[(d + 1976 | 0) + 148 >> 1] | 0;
  a[((d + 736 | 0) + 148 | 0) >> 0] = x;
  a[((d + 736 | 0) + 149 | 0) >> 0] = (x & 65535) >>> 8;
  x = b[(d + 1976 | 0) + 150 >> 1] | 0;
  a[((d + 736 | 0) + 150 | 0) >> 0] = x;
  a[((d + 736 | 0) + 151 | 0) >> 0] = (x & 65535) >>> 8;
  x = b[(d + 1976 | 0) + 152 >> 1] | 0;
  a[((d + 736 | 0) + 152 | 0) >> 0] = x;
  a[((d + 736 | 0) + 153 | 0) >> 0] = (x & 65535) >>> 8;
  x = b[(d + 1976 | 0) + 154 >> 1] | 0;
  a[((d + 736 | 0) + 154 | 0) >> 0] = x;
  a[((d + 736 | 0) + 155 | 0) >> 0] = (x & 65535) >>> 8;
  x = b[(d + 1976 | 0) + 156 >> 1] | 0;
  a[((d + 736 | 0) + 156 | 0) >> 0] = x;
  a[((d + 736 | 0) + 157 | 0) >> 0] = (x & 65535) >>> 8;
  x = b[(d + 1976 | 0) + 158 >> 1] | 0;
  a[((d + 736 | 0) + 158 | 0) >> 0] = x;
  a[((d + 736 | 0) + 159 | 0) >> 0] = (x & 65535) >>> 8;
  f = b[f >> 1] | 0;
  a[((d + 736 | 0) + 160 | 0) >> 0] = f;
  a[((d + 736 | 0) + 161 | 0) >> 0] = (f & 65535) >>> 8;
  f = b[(d + 1976 | 0) + 162 >> 1] | 0;
  a[((d + 736 | 0) + 162 | 0) >> 0] = f;
  a[((d + 736 | 0) + 163 | 0) >> 0] = (f & 65535) >>> 8;
  f = b[(d + 1976 | 0) + 164 >> 1] | 0;
  a[((d + 736 | 0) + 164 | 0) >> 0] = f;
  a[((d + 736 | 0) + 165 | 0) >> 0] = (f & 65535) >>> 8;
  f = b[(d + 1976 | 0) + 166 >> 1] | 0;
  a[((d + 736 | 0) + 166 | 0) >> 0] = f;
  a[((d + 736 | 0) + 167 | 0) >> 0] = (f & 65535) >>> 8;
  f = b[(d + 1976 | 0) + 168 >> 1] | 0;
  a[((d + 736 | 0) + 168 | 0) >> 0] = f;
  a[((d + 736 | 0) + 169 | 0) >> 0] = (f & 65535) >>> 8;
  f = b[(d + 1976 | 0) + 170 >> 1] | 0;
  a[((d + 736 | 0) + 170 | 0) >> 0] = f;
  a[((d + 736 | 0) + 171 | 0) >> 0] = (f & 65535) >>> 8;
  f = b[(d + 1976 | 0) + 172 >> 1] | 0;
  a[((d + 736 | 0) + 172 | 0) >> 0] = f;
  a[((d + 736 | 0) + 173 | 0) >> 0] = (f & 65535) >>> 8;
  f = b[(d + 1976 | 0) + 174 >> 1] | 0;
  a[((d + 736 | 0) + 174 | 0) >> 0] = f;
  a[((d + 736 | 0) + 175 | 0) >> 0] = (f & 65535) >>> 8;
  b[((d + 736 | 0) + 176 | 0) >> 1] = b[((d + 1976 | 0) + 176 | 0) >> 1] | 0;
  b[(d + 736 | 0) + 178 >> 1] = b[(d + 1976 | 0) + 178 >> 1] | 0;
  b[(d + 736 | 0) + 180 >> 1] = b[(d + 1976 | 0) + 180 >> 1] | 0;
  b[(d + 736 | 0) + 182 >> 1] = b[(d + 1976 | 0) + 182 >> 1] | 0;
  b[(d + 736 | 0) + 184 >> 1] = b[(d + 1976 | 0) + 184 >> 1] | 0;
  b[(d + 736 | 0) + 186 >> 1] = b[(d + 1976 | 0) + 186 >> 1] | 0;
  b[(d + 736 | 0) + 188 >> 1] = b[(d + 1976 | 0) + 188 >> 1] | 0;
  b[(d + 736 | 0) + 190 >> 1] = b[(d + 1976 | 0) + 190 >> 1] | 0;
  b[(d + 736 | 0) + 192 >> 1] = b[(d + 1976 | 0) + 192 >> 1] | 0;
  b[(d + 736 | 0) + 194 >> 1] = b[(d + 1976 | 0) + 194 >> 1] | 0;
  b[(d + 736 | 0) + 196 >> 1] = b[(d + 1976 | 0) + 196 >> 1] | 0;
  b[(d + 736 | 0) + 198 >> 1] = b[(d + 1976 | 0) + 198 >> 1] | 0;
  b[(d + 736 | 0) + 200 >> 1] = b[(d + 1976 | 0) + 200 >> 1] | 0;
  b[(d + 736 | 0) + 202 >> 1] = b[(d + 1976 | 0) + 202 >> 1] | 0;
  b[(d + 736 | 0) + 204 >> 1] = b[(d + 1976 | 0) + 204 >> 1] | 0;
  b[(d + 736 | 0) + 206 >> 1] = b[(d + 1976 | 0) + 206 >> 1] | 0;
  b[(d + 736 | 0) + 208 >> 1] = b[(d + 1976 | 0) + 208 >> 1] | 0;
  b[(d + 736 | 0) + 210 >> 1] = b[(d + 1976 | 0) + 210 >> 1] | 0;
  h = b[h >> 1] | 0;
  a[(d + 736 | 0) + 212 >> 0] = h;
  a[(d + 736 | 0) + 213 >> 0] = (h & 65535) >>> 8;
  h = b[(d + 1976 | 0) + 214 >> 1] | 0;
  a[(d + 736 | 0) + 214 >> 0] = h;
  a[(d + 736 | 0) + 215 >> 0] = (h & 65535) >>> 8;
  h = b[(d + 1976 | 0) + 216 >> 1] | 0;
  a[(d + 736 | 0) + 216 >> 0] = h;
  a[(d + 736 | 0) + 217 >> 0] = (h & 65535) >>> 8;
  h = b[(d + 1976 | 0) + 218 >> 1] | 0;
  a[(d + 736 | 0) + 218 >> 0] = h;
  a[(d + 736 | 0) + 219 >> 0] = (h & 65535) >>> 8;
  h = b[(d + 1976 | 0) + 220 >> 1] | 0;
  a[(d + 736 | 0) + 220 >> 0] = h;
  a[(d + 736 | 0) + 221 >> 0] = (h & 65535) >>> 8;
  h = b[(d + 1976 | 0) + 222 >> 1] | 0;
  a[(d + 736 | 0) + 222 >> 0] = h;
  a[(d + 736 | 0) + 223 >> 0] = (h & 65535) >>> 8;
  h = b[(d + 1976 | 0) + 224 >> 1] | 0;
  a[(d + 736 | 0) + 224 >> 0] = h;
  a[(d + 736 | 0) + 225 >> 0] = (h & 65535) >>> 8;
  h = b[(d + 1976 | 0) + 226 >> 1] | 0;
  a[(d + 736 | 0) + 226 >> 0] = h;
  a[(d + 736 | 0) + 227 >> 0] = (h & 65535) >>> 8;
  j = b[j >> 1] | 0;
  a[(d + 736 | 0) + 228 >> 0] = j;
  a[(d + 736 | 0) + 229 >> 0] = (j & 65535) >>> 8;
  j = b[(d + 1976 | 0) + 230 >> 1] | 0;
  a[(d + 736 | 0) + 230 >> 0] = j;
  a[(d + 736 | 0) + 231 >> 0] = (j & 65535) >>> 8;
  j = b[(d + 1976 | 0) + 232 >> 1] | 0;
  a[(d + 736 | 0) + 232 >> 0] = j;
  a[(d + 736 | 0) + 233 >> 0] = (j & 65535) >>> 8;
  j = b[(d + 1976 | 0) + 234 >> 1] | 0;
  a[(d + 736 | 0) + 234 >> 0] = j;
  a[(d + 736 | 0) + 235 >> 0] = (j & 65535) >>> 8;
  j = b[(d + 1976 | 0) + 236 >> 1] | 0;
  a[(d + 736 | 0) + 236 >> 0] = j;
  a[(d + 736 | 0) + 237 >> 0] = (j & 65535) >>> 8;
  j = b[(d + 1976 | 0) + 238 >> 1] | 0;
  a[(d + 736 | 0) + 238 >> 0] = j;
  a[(d + 736 | 0) + 239 >> 0] = (j & 65535) >>> 8;
  j = b[(d + 1976 | 0) + 240 >> 1] | 0;
  a[(d + 736 | 0) + 240 >> 0] = j;
  a[(d + 736 | 0) + 241 >> 0] = (j & 65535) >>> 8;
  j = b[(d + 1976 | 0) + 242 >> 1] | 0;
  a[(d + 736 | 0) + 242 >> 0] = j;
  a[(d + 736 | 0) + 243 >> 0] = (j & 65535) >>> 8;
  b[(d + 736 | 0) + 244 >> 1] = b[((d + 1976 | 0) + 244 | 0) >> 1] | 0;
  b[(d + 736 | 0) + 246 >> 1] = b[(d + 1976 | 0) + 246 >> 1] | 0;
  b[(d + 736 | 0) + 248 >> 1] = b[(d + 1976 | 0) + 248 >> 1] | 0;
  b[(d + 736 | 0) + 250 >> 1] = b[(d + 1976 | 0) + 250 >> 1] | 0;
  b[(d + 736 | 0) + 252 >> 1] = b[(d + 1976 | 0) + 252 >> 1] | 0;
  b[(d + 736 | 0) + 254 >> 1] = b[(d + 1976 | 0) + 254 >> 1] | 0;
  b[(d + 736 | 0) + 256 >> 1] = b[(d + 1976 | 0) + 256 >> 1] | 0;
  b[(d + 736 | 0) + 258 >> 1] = b[(d + 1976 | 0) + 258 >> 1] | 0;
  b[(d + 736 | 0) + 260 >> 1] = b[(d + 1976 | 0) + 260 >> 1] | 0;
  b[(d + 736 | 0) + 262 >> 1] = b[(d + 1976 | 0) + 262 >> 1] | 0;
  b[(d + 736 | 0) + 264 >> 1] = b[(d + 1976 | 0) + 264 >> 1] | 0;
  b[(d + 736 | 0) + 266 >> 1] = b[(d + 1976 | 0) + 266 >> 1] | 0;
  b[(d + 736 | 0) + 268 >> 1] = b[(d + 1976 | 0) + 268 >> 1] | 0;
  b[(d + 736 | 0) + 270 >> 1] = b[(d + 1976 | 0) + 270 >> 1] | 0;
  b[(d + 736 | 0) + 272 >> 1] = b[(d + 1976 | 0) + 272 >> 1] | 0;
  b[(d + 736 | 0) + 274 >> 1] = b[(d + 1976 | 0) + 274 >> 1] | 0;
  b[(d + 736 | 0) + 276 >> 1] = b[(d + 1976 | 0) + 276 >> 1] | 0;
  b[(d + 736 | 0) + 278 >> 1] = b[(d + 1976 | 0) + 278 >> 1] | 0;
  v = b[v >> 1] | 0;
  a[(d + 736 | 0) + 280 >> 0] = v;
  a[(d + 736 | 0) + 281 >> 0] = (v & 65535) >>> 8;
  v = b[(d + 1976 | 0) + 282 >> 1] | 0;
  a[(d + 736 | 0) + 282 >> 0] = v;
  a[(d + 736 | 0) + 283 >> 0] = (v & 65535) >>> 8;
  v = b[(d + 1976 | 0) + 284 >> 1] | 0;
  a[(d + 736 | 0) + 284 >> 0] = v;
  a[(d + 736 | 0) + 285 >> 0] = (v & 65535) >>> 8;
  v = b[(d + 1976 | 0) + 286 >> 1] | 0;
  a[(d + 736 | 0) + 286 >> 0] = v;
  a[(d + 736 | 0) + 287 >> 0] = (v & 65535) >>> 8;
  v = b[(d + 1976 | 0) + 288 >> 1] | 0;
  a[(d + 736 | 0) + 288 >> 0] = v;
  a[(d + 736 | 0) + 289 >> 0] = (v & 65535) >>> 8;
  v = b[(d + 1976 | 0) + 290 >> 1] | 0;
  a[(d + 736 | 0) + 290 >> 0] = v;
  a[(d + 736 | 0) + 291 >> 0] = (v & 65535) >>> 8;
  v = b[(d + 1976 | 0) + 292 >> 1] | 0;
  a[(d + 736 | 0) + 292 >> 0] = v;
  a[(d + 736 | 0) + 293 >> 0] = (v & 65535) >>> 8;
  v = b[(d + 1976 | 0) + 294 >> 1] | 0;
  a[(d + 736 | 0) + 294 >> 0] = v;
  a[(d + 736 | 0) + 295 >> 0] = (v & 65535) >>> 8;
  w = b[w >> 1] | 0;
  a[(d + 736 | 0) + 296 >> 0] = w;
  a[(d + 736 | 0) + 297 >> 0] = (w & 65535) >>> 8;
  w = b[(d + 1976 | 0) + 298 >> 1] | 0;
  a[(d + 736 | 0) + 298 >> 0] = w;
  a[(d + 736 | 0) + 299 >> 0] = (w & 65535) >>> 8;
  w = b[(d + 1976 | 0) + 300 >> 1] | 0;
  a[(d + 736 | 0) + 300 >> 0] = w;
  a[(d + 736 | 0) + 301 >> 0] = (w & 65535) >>> 8;
  w = b[(d + 1976 | 0) + 302 >> 1] | 0;
  a[(d + 736 | 0) + 302 >> 0] = w;
  a[(d + 736 | 0) + 303 >> 0] = (w & 65535) >>> 8;
  w = b[(d + 1976 | 0) + 304 >> 1] | 0;
  a[(d + 736 | 0) + 304 >> 0] = w;
  a[(d + 736 | 0) + 305 >> 0] = (w & 65535) >>> 8;
  w = b[(d + 1976 | 0) + 306 >> 1] | 0;
  a[(d + 736 | 0) + 306 >> 0] = w;
  a[(d + 736 | 0) + 307 >> 0] = (w & 65535) >>> 8;
  w = b[(d + 1976 | 0) + 308 >> 1] | 0;
  a[(d + 736 | 0) + 308 >> 0] = w;
  a[(d + 736 | 0) + 309 >> 0] = (w & 65535) >>> 8;
  w = b[(d + 1976 | 0) + 310 >> 1] | 0;
  a[(d + 736 | 0) + 310 >> 0] = w;
  a[(d + 736 | 0) + 311 >> 0] = (w & 65535) >>> 8;
  b[(d + 736 | 0) + 312 >> 1] = b[((d + 1976 | 0) + 312 | 0) >> 1] | 0;
  c[(d + 736 | 0) + 316 >> 2] = c[((d + 1976 | 0) + 316 | 0) >> 2];
  w = c[((d + 1976 | 0) + 320 | 0) + 4 >> 2] | 0;
  c[((d + 736 | 0) + 320 | 0) >> 2] = c[((d + 1976 | 0) + 320 | 0) >> 2];
  c[((d + 736 | 0) + 320 | 0) + 4 >> 2] = w;
  c[(d + 1976 | 0) >> 2] = 0;
  w = c[(d + 200 | 0) >> 2] | 0;
  b[(d + 736 | 0) + 42 >> 1] = w;
  b[((d + 736 | 0) + 44 | 0) >> 1] = w >>> 16;
  b[((d + 736 | 0) + 46 | 0) >> 1] = b[((d + 200 | 0) + 4 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 48 | 0) >> 1] = b[((d + 200 | 0) + 6 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 50 | 0) >> 1] = b[((d + 200 | 0) + 8 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 52 | 0) >> 1] = b[((d + 200 | 0) + 10 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 54 | 0) >> 1] = b[((d + 200 | 0) + 12 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 56 | 0) >> 1] = b[((d + 200 | 0) + 14 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 58 | 0) >> 1] = b[((d + 200 | 0) + 16 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 60 | 0) >> 1] = b[((d + 200 | 0) + 18 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 62 | 0) >> 1] = b[((d + 200 | 0) + 20 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 64 | 0) >> 1] = b[((d + 200 | 0) + 22 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 66 | 0) >> 1] = b[((d + 200 | 0) + 24 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 68 | 0) >> 1] = b[((d + 200 | 0) + 26 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 70 | 0) >> 1] = b[((d + 200 | 0) + 28 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 72 | 0) >> 1] = b[((d + 200 | 0) + 30 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 74 | 0) >> 1] = b[((d + 200 | 0) + 32 | 0) >> 1] | 0;
  w = b[m >> 1] | 0;
  a[((d + 736 | 0) + 76 | 0) >> 0] = w;
  a[((d + 736 | 0) + 77 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 36 >> 1] | 0;
  a[((d + 736 | 0) + 78 | 0) >> 0] = w;
  a[((d + 736 | 0) + 79 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 38 >> 1] | 0;
  a[((d + 736 | 0) + 80 | 0) >> 0] = w;
  a[((d + 736 | 0) + 81 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 40 >> 1] | 0;
  a[((d + 736 | 0) + 82 | 0) >> 0] = w;
  a[((d + 736 | 0) + 83 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 42 >> 1] | 0;
  a[((d + 736 | 0) + 84 | 0) >> 0] = w;
  a[((d + 736 | 0) + 85 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 44 >> 1] | 0;
  a[((d + 736 | 0) + 86 | 0) >> 0] = w;
  a[((d + 736 | 0) + 87 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 46 >> 1] | 0;
  a[((d + 736 | 0) + 88 | 0) >> 0] = w;
  a[((d + 736 | 0) + 89 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 48 >> 1] | 0;
  a[((d + 736 | 0) + 90 | 0) >> 0] = w;
  a[((d + 736 | 0) + 91 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[l >> 1] | 0;
  a[((d + 736 | 0) + 92 | 0) >> 0] = w;
  a[((d + 736 | 0) + 93 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 52 >> 1] | 0;
  a[((d + 736 | 0) + 94 | 0) >> 0] = w;
  a[((d + 736 | 0) + 95 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 54 >> 1] | 0;
  a[((d + 736 | 0) + 96 | 0) >> 0] = w;
  a[((d + 736 | 0) + 97 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 56 >> 1] | 0;
  a[((d + 736 | 0) + 98 | 0) >> 0] = w;
  a[((d + 736 | 0) + 99 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 58 >> 1] | 0;
  a[((d + 736 | 0) + 100 | 0) >> 0] = w;
  a[((d + 736 | 0) + 101 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[((d + 200 | 0) + 60 | 0) >> 1] | 0;
  a[((d + 736 | 0) + 102 | 0) >> 0] = w;
  a[((d + 736 | 0) + 103 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 62 >> 1] | 0;
  a[((d + 736 | 0) + 104 | 0) >> 0] = w;
  a[((d + 736 | 0) + 105 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 200 | 0) + 64 >> 1] | 0;
  a[((d + 736 | 0) + 106 | 0) >> 0] = w;
  a[((d + 736 | 0) + 107 | 0) >> 0] = (w & 65535) >>> 8;
  b[((d + 736 | 0) + 108 | 0) >> 1] = b[k >> 1] | 0;
  w = c[((d + 8 | 0) + 8 | 0) >> 2] | 0;
  b[((d + 736 | 0) + 110 | 0) >> 1] = w;
  b[((d + 736 | 0) + 112 | 0) >> 1] = w >>> 16;
  b[((d + 736 | 0) + 114 | 0) >> 1] = b[((d + 8 | 0) + 12 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 116 | 0) >> 1] = b[((d + 8 | 0) + 14 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 118 | 0) >> 1] = b[((d + 8 | 0) + 16 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 120 | 0) >> 1] = b[((d + 8 | 0) + 18 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 122 | 0) >> 1] = b[((d + 8 | 0) + 20 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 124 | 0) >> 1] = b[((d + 8 | 0) + 22 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 126 | 0) >> 1] = b[((d + 8 | 0) + 24 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 128 | 0) >> 1] = b[((d + 8 | 0) + 26 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 130 | 0) >> 1] = b[((d + 8 | 0) + 28 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 132 | 0) >> 1] = b[((d + 8 | 0) + 30 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 134 | 0) >> 1] = b[((d + 8 | 0) + 32 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 136 | 0) >> 1] = b[((d + 8 | 0) + 34 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 138 | 0) >> 1] = b[((d + 8 | 0) + 36 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 140 | 0) >> 1] = b[((d + 8 | 0) + 38 | 0) >> 1] | 0;
  b[((d + 736 | 0) + 142 | 0) >> 1] = b[((d + 8 | 0) + 40 | 0) >> 1] | 0;
  w = b[p >> 1] | 0;
  a[((d + 736 | 0) + 144 | 0) >> 0] = w;
  a[((d + 736 | 0) + 145 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 44 >> 1] | 0;
  a[((d + 736 | 0) + 146 | 0) >> 0] = w;
  a[((d + 736 | 0) + 147 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 46 >> 1] | 0;
  a[((d + 736 | 0) + 148 | 0) >> 0] = w;
  a[((d + 736 | 0) + 149 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 48 >> 1] | 0;
  a[((d + 736 | 0) + 150 | 0) >> 0] = w;
  a[((d + 736 | 0) + 151 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 50 >> 1] | 0;
  a[((d + 736 | 0) + 152 | 0) >> 0] = w;
  a[((d + 736 | 0) + 153 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 52 >> 1] | 0;
  a[((d + 736 | 0) + 154 | 0) >> 0] = w;
  a[((d + 736 | 0) + 155 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 54 >> 1] | 0;
  a[((d + 736 | 0) + 156 | 0) >> 0] = w;
  a[((d + 736 | 0) + 157 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 56 >> 1] | 0;
  a[((d + 736 | 0) + 158 | 0) >> 0] = w;
  a[((d + 736 | 0) + 159 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[o >> 1] | 0;
  a[((d + 736 | 0) + 160 | 0) >> 0] = w;
  a[((d + 736 | 0) + 161 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 60 >> 1] | 0;
  a[((d + 736 | 0) + 162 | 0) >> 0] = w;
  a[((d + 736 | 0) + 163 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 62 >> 1] | 0;
  a[((d + 736 | 0) + 164 | 0) >> 0] = w;
  a[((d + 736 | 0) + 165 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 64 >> 1] | 0;
  a[((d + 736 | 0) + 166 | 0) >> 0] = w;
  a[((d + 736 | 0) + 167 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 66 >> 1] | 0;
  a[((d + 736 | 0) + 168 | 0) >> 0] = w;
  a[((d + 736 | 0) + 169 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 68 >> 1] | 0;
  a[((d + 736 | 0) + 170 | 0) >> 0] = w;
  a[((d + 736 | 0) + 171 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[((d + 8 | 0) + 70 | 0) >> 1] | 0;
  a[((d + 736 | 0) + 172 | 0) >> 0] = w;
  a[((d + 736 | 0) + 173 | 0) >> 0] = (w & 65535) >>> 8;
  w = b[(d + 8 | 0) + 72 >> 1] | 0;
  a[((d + 736 | 0) + 174 | 0) >> 0] = w;
  a[((d + 736 | 0) + 175 | 0) >> 0] = (w & 65535) >>> 8;
  b[((d + 736 | 0) + 176 | 0) >> 1] = b[n >> 1] | 0;
  b[((d + 736 | 0) + 40 | 0) >> 1] = b[((d + 736 | 0) + 40 | 0) >> 1] | 1;
  b[((d + 736 | 0) + 36 | 0) >> 1] = b[((d + 736 | 0) + 36 | 0) >> 1] & -64 | 33;
  zd(d + 1968 | 0, (c[8946] | 0) + 1168 | 0, d + 736 | 0);
  if ((s + 392 | 0 | 0) != (d + 1968 | 0 | 0)) {
   A = c[(d + 1968 | 0) + 4 >> 2] | 0;
   c[(s + 392 | 0) >> 2] = c[(d + 1968 | 0) >> 2];
   c[(s + 392 | 0) + 4 >> 2] = A;
  }
  f = c[8946] | 0;
  g[s + 624 >> 2] = +(c[f + 296 >> 2] | 0) * 2.4142134189605713 / +(c[f + 292 >> 2] | 0);
  c[(s + 628 | 0) >> 2] = 0;
  c[(s + 628 | 0) + 4 >> 2] = 0;
  c[(s + 628 | 0) + 8 >> 2] = 0;
  c[(s + 628 | 0) + 12 >> 2] = 0;
  g[s + 644 >> 2] = 2.4142134189605713;
  c[(s + 648 | 0) >> 2] = 0;
  c[(s + 648 | 0) + 4 >> 2] = 0;
  c[(s + 648 | 0) + 8 >> 2] = 0;
  c[(s + 648 | 0) + 12 >> 2] = 0;
  g[s + 664 >> 2] = -1.0004000663757324;
  g[s + 668 >> 2] = -1.0;
  c[(s + 672 | 0) >> 2] = 0;
  c[(s + 672 | 0) + 4 >> 2] = 0;
  g[s + 680 >> 2] = -.020004000514745712;
  g[s + 684 >> 2] = 0.0;
  c[(s + 772 | 0) >> 2] = 1157627904;
  c[s + 776 >> 2] = 1149239296;
  c[s + 780 >> 2] = 1157627904;
  c[s + 784 >> 2] = 1149239296;
  c[s + 856 >> 2] = 1157627904;
  c[s + 860 >> 2] = 1149239296;
  c[(f + 116 | 0) >> 2] = (c[(f + 116 | 0) >> 2] | 0) + 1;
  h = (c[f + 1592 >> 2] | 0) + (e[(s + 40 | 0) >> 1] | 0) | 0;
  j = c[f + 1584 >> 2] | 0;
  if ((c[(s + 40 | 0) >> 2] | 0) == (c[(j + (h * 776 | 0) | 0) >> 2] | 0) ? (c[(s + 40 | 0) + 4 >> 2] | 0) == (c[(j + (h * 776 | 0) | 0) + 4 >> 2] | 0) : 0) if ((c[j + (h * 776 | 0) + 8 >> 2] | 0) == 3) q = j + (h * 776 | 0) | 0; else u = 800; else u = 800;
  if ((u | 0) == 800) q = 0;
  Kd(f + 416 | 0, q, s + 864 | 0);
  dd(s + 56 | 0);
  f = c[8946] | 0;
  c[(f + 132 | 0) >> 2] = (c[(f + 132 | 0) >> 2] | 0) + 1;
  Md(c[f + 628 >> 2] | 0, 1, s + 772 | 0);
  ed();
  f = c[8946] | 0;
  c[(f + 116 | 0) >> 2] = (c[(f + 116 | 0) >> 2] | 0) + 1;
  h = (c[f + 1592 >> 2] | 0) + (e[(s + 48 | 0) >> 1] | 0) | 0;
  j = c[f + 1584 >> 2] | 0;
  if ((c[(s + 48 | 0) >> 2] | 0) == (c[(j + (h * 776 | 0) | 0) >> 2] | 0) ? (c[(s + 48 | 0) + 4 >> 2] | 0) == (c[(j + (h * 776 | 0) | 0) + 4 >> 2] | 0) : 0) if ((c[j + (h * 776 | 0) + 8 >> 2] | 0) == 3) r = j + (h * 776 | 0) | 0; else u = 803; else u = 803;
  if ((u | 0) == 803) r = 0;
  Kd(f + 416 | 0, r, s + 864 | 0);
  dd(s + 56 | 0);
  f = c[8946] | 0;
  c[(f + 132 | 0) >> 2] = (c[(f + 132 | 0) >> 2] | 0) + 1;
  Md(c[f + 628 >> 2] | 0, 1, s + 772 | 0);
  ed();
  f = c[((d + 200 | 0) + 496 | 0) >> 2] | 0;
  if (f | 0) cf(f);
  c[((d + 200 | 0) + 496 | 0) >> 2] = 0;
  c[((d + 200 | 0) + 488 | 0) >> 2] = 0;
  c[((d + 200 | 0) + 492 | 0) >> 2] = 0;
  c[(d + 200 | 0) + 388 >> 2] = 0;
  c[((d + 200 | 0) + 280 | 0) >> 2] = 0;
  c[((d + 200 | 0) + 284 | 0) >> 2] = 0;
  f = c[t >> 2] | 0;
  if (f | 0) cf(f);
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  c[t + 12 >> 2] = 0;
  c[((d + 200 | 0) + 176 | 0) >> 2] = 0;
  c[((d + 200 | 0) + 180 | 0) >> 2] = 0;
  f = c[(d + 200 | 0) + 160 >> 2] | 0;
  if (!f) {
   i = d;
   c[d + 21952 >> 2] = 6;
   c[d + 21956 >> 2] = 4;
   break a;
  }
  cf(f);
  i = d;
  c[d + 21952 >> 2] = 6;
  c[d + 21956 >> 2] = 4;
  break a;
 }
 c[d + 21944 >> 2] = u;
}

function Zc(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 m = c[d + 14536 >> 2] | 0;
 n = c[d + 14624 >> 2] | 0;
 o = c[d + 14632 >> 2] | 0;
 r = c[d + 15712 >> 2] | 0;
 s = c[d + 15720 >> 2] | 0;
 A = c[d + 16192 >> 2] | 0;
 z = c[d + 21944 >> 2] | 0;
 a[((d + 8640 | 0) + 306 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 307 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 52 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 308 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 309 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 54 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 310 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 311 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 56 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 312 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 313 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 58 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 314 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 315 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 60 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 316 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 317 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 62 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 318 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 319 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 64 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 320 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 321 | 0) >> 0] = (A & 65535) >>> 8;
 b[((d + 8640 | 0) + 322 | 0) >> 1] = b[((d + 12456 | 0) + 66 | 0) >> 1] | 0;
 if (n | 0) {
  A = c[m >> 2] | 0;
  c[m >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(n);
   c[(d + 12352 | 0) >> 2] = 0;
  }
  c[(d + 12352 | 0) >> 2] = 0;
 }
 if (o | 0) {
  n = o;
  A = c[n >> 2] | 0;
  c[n >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(o);
   c[(d + 12368 | 0) >> 2] = 0;
  }
  c[(d + 12368 | 0) >> 2] = 0;
 }
 a : do if (!1) {
  p = 14437;
  z = 448;
 } else {
  m = 14437;
  n = 14437;
  while (1) {
   if (!(a[m >> 0] | 0)) {
    l = n;
    break a;
   }
   m = m + 1 | 0;
   n = m;
   if (!(n & 3)) {
    p = m;
    z = 448;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 448) {
  l = p;
  while (1) {
   m = c[l >> 2] | 0;
   if (!((m & -2139062144 ^ -2139062144) & m + -16843009)) l = l + 4 | 0; else break;
  }
  if ((m & 255) << 24 >> 24) do l = l + 1 | 0; while ((a[l >> 0] | 0) != 0);
 }
 l = l - 14437 | 0;
 if ((l | 0) > 0) {
  n = bf(l + 9 | 0) | 0;
  c[n >> 2] = 0;
  c[n + 4 >> 2] = 0;
  c[n >> 2] = 0;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
  c[n + 4 >> 2] = l;
  c[(d + 12344 | 0) >> 2] = n + 8 | 0;
  Af(n + 8 | 0 | 0, 14437, l | 0) | 0;
  a[(n + 8 | 0) + l >> 0] = 0;
 } else {
  c[(d + 12344 | 0) >> 2] = 0;
  n = 0;
 }
 b : do if (!1) {
  q = 14761;
  z = 459;
 } else {
  l = 14761;
  m = 14761;
  while (1) {
   if (!(a[l >> 0] | 0)) {
    k = m;
    break b;
   }
   l = l + 1 | 0;
   m = l;
   if (!(m & 3)) {
    q = l;
    z = 459;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 459) {
  k = q;
  while (1) {
   l = c[k >> 2] | 0;
   if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) k = k + 4 | 0; else break;
  }
  if ((l & 255) << 24 >> 24) do k = k + 1 | 0; while ((a[k >> 0] | 0) != 0);
 }
 k = k - 14761 | 0;
 if ((k | 0) > 0) {
  m = bf(k + 9 | 0) | 0;
  c[m >> 2] = 0;
  c[m + 4 >> 2] = 0;
  c[m >> 2] = 0;
  c[m >> 2] = (c[m >> 2] | 0) + 1;
  c[m + 4 >> 2] = k;
  c[(d + 12336 | 0) >> 2] = m + 8 | 0;
  Af(m + 8 | 0 | 0, 14761, k | 0) | 0;
  a[(m + 8 | 0) + k >> 0] = 0;
 } else {
  c[(d + 12336 | 0) >> 2] = 0;
  m = 0;
 }
 l = (d + 8640 | 0) + 32 | 0;
 k = c[l >> 2] | 0;
 if (k | 0) {
  A = c[k >> 2] | 0;
  c[k >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[l >> 2] | 0);
   c[l >> 2] = 0;
   c[((d + 8640 | 0) + 36 | 0) >> 2] = 0;
   k = (d + 8640 | 0) + 36 | 0;
  } else k = (d + 8640 | 0) + 36 | 0;
  c[l >> 2] = 0;
  c[k >> 2] = 0;
 }
 c[l >> 2] = n;
 c[(d + 8640 | 0) + 36 >> 2] = c[(d + 12344 | 0) >> 2];
 if (n | 0) {
  A = n;
  c[A >> 2] = (c[A >> 2] | 0) + 1;
 }
 l = (d + 8640 | 0) + 72 | 0;
 k = c[l >> 2] | 0;
 if (k | 0) {
  A = c[k >> 2] | 0;
  c[k >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[l >> 2] | 0);
   c[l >> 2] = 0;
   c[((d + 8640 | 0) + 76 | 0) >> 2] = 0;
   k = (d + 8640 | 0) + 76 | 0;
  } else k = (d + 8640 | 0) + 76 | 0;
  c[l >> 2] = 0;
  c[k >> 2] = 0;
 }
 c[l >> 2] = m;
 c[(d + 8640 | 0) + 76 >> 2] = c[(d + 12336 | 0) >> 2];
 k = m;
 if (m | 0) c[k >> 2] = (c[k >> 2] | 0) + 1;
 b[((d + 8640 | 0) + 256 | 0) >> 1] = b[(d + 12456 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 258 | 0) >> 1] = b[((d + 12456 | 0) + 2 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 260 | 0) >> 1] = b[((d + 12456 | 0) + 4 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 262 | 0) >> 1] = b[((d + 12456 | 0) + 6 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 264 | 0) >> 1] = b[((d + 12456 | 0) + 8 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 266 | 0) >> 1] = b[((d + 12456 | 0) + 10 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 268 | 0) >> 1] = b[((d + 12456 | 0) + 12 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 270 | 0) >> 1] = b[((d + 12456 | 0) + 14 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 272 | 0) >> 1] = b[((d + 12456 | 0) + 16 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 274 | 0) >> 1] = b[((d + 12456 | 0) + 18 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 276 | 0) >> 1] = b[((d + 12456 | 0) + 20 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 278 | 0) >> 1] = b[((d + 12456 | 0) + 22 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 280 | 0) >> 1] = b[((d + 12456 | 0) + 24 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 282 | 0) >> 1] = b[((d + 12456 | 0) + 26 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 284 | 0) >> 1] = b[((d + 12456 | 0) + 28 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 286 | 0) >> 1] = b[((d + 12456 | 0) + 30 | 0) >> 1] | 0;
 b[((d + 8640 | 0) + 288 | 0) >> 1] = b[((d + 12456 | 0) + 32 | 0) >> 1] | 0;
 A = b[s >> 1] | 0;
 a[((d + 8640 | 0) + 290 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 291 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 36 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 292 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 293 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 38 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 294 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 295 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 40 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 296 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 297 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 42 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 298 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 299 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 44 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 300 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 301 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 46 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 302 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 303 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 48 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 304 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 305 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[r >> 1] | 0;
 a[((d + 8640 | 0) + 306 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 307 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 52 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 308 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 309 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 54 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 310 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 311 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 56 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 312 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 313 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 58 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 314 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 315 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 60 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 316 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 317 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 62 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 318 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 319 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12456 | 0) + 64 | 0) >> 1] | 0;
 a[((d + 8640 | 0) + 320 | 0) >> 0] = A;
 a[((d + 8640 | 0) + 321 | 0) >> 0] = (A & 65535) >>> 8;
 b[((d + 8640 | 0) + 322 | 0) >> 1] = b[((d + 12456 | 0) + 66 | 0) >> 1] | 0;
 if (m | 0) {
  A = c[k >> 2] | 0;
  c[k >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(m);
   c[(d + 12336 | 0) >> 2] = 0;
  }
  c[(d + 12336 | 0) >> 2] = 0;
 }
 if (n | 0) {
  s = n;
  A = c[s >> 2] | 0;
  c[s >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(n);
   c[(d + 12344 | 0) >> 2] = 0;
  }
  c[(d + 12344 | 0) >> 2] = 0;
 }
 c[(d + 12e3 | 0) >> 2] = 0;
 c[(d + 12e3 | 0) + 4 >> 2] = 0;
 c[(d + 12e3 | 0) + 8 >> 2] = 0;
 c[(d + 12e3 | 0) + 12 >> 2] = 0;
 c[(d + 12e3 | 0) + 16 >> 2] = 0;
 a[(d + 12e3 | 0) + 20 >> 0] = 10;
 c[(d + 12e3 | 0) + 24 >> 2] = 1;
 c[(d + 12e3 | 0) + 28 >> 2] = 0;
 a[(d + 12e3 | 0) + 32 >> 0] = 10;
 c[(d + 12e3 | 0) + 36 >> 2] = 1;
 c[(d + 12e3 | 0) + 40 >> 2] = 0;
 a[(d + 12e3 | 0) + 44 >> 0] = 10;
 c[(d + 12e3 | 0) + 48 >> 2] = 1;
 c[(d + 12e3 | 0) + 52 >> 2] = 0;
 a[(d + 12e3 | 0) + 56 >> 0] = 10;
 c[(d + 12e3 | 0) + 60 >> 2] = 1;
 c[(d + 12e3 | 0) + 64 >> 2] = 0;
 a[(d + 12e3 | 0) + 68 >> 0] = 10;
 c[(d + 12e3 | 0) + 72 >> 2] = 1;
 c[(d + 12e3 | 0) + 76 >> 2] = 0;
 a[(d + 12e3 | 0) + 80 >> 0] = 10;
 c[(d + 12e3 | 0) + 84 >> 2] = 1;
 c[(d + 12e3 | 0) + 88 >> 2] = 0;
 a[(d + 12e3 | 0) + 92 >> 0] = 10;
 c[(d + 12e3 | 0) + 96 >> 2] = 1;
 c[(d + 12e3 | 0) + 100 >> 2] = 0;
 a[(d + 12e3 | 0) + 104 >> 0] = 10;
 c[(d + 12e3 | 0) + 108 >> 2] = 1;
 c[(d + 12e3 | 0) + 112 >> 2] = 0;
 a[(d + 12e3 | 0) + 116 >> 0] = 10;
 c[(d + 12e3 | 0) + 120 >> 2] = 1;
 c[(d + 12e3 | 0) + 124 >> 2] = 0;
 a[(d + 12e3 | 0) + 128 >> 0] = 10;
 c[(d + 12e3 | 0) + 132 >> 2] = 1;
 c[(d + 12e3 | 0) + 136 >> 2] = 0;
 a[(d + 12e3 | 0) + 140 >> 0] = 10;
 c[(d + 12e3 | 0) + 144 >> 2] = 1;
 c[(d + 12e3 | 0) + 148 >> 2] = 0;
 a[(d + 12e3 | 0) + 152 >> 0] = 10;
 c[(d + 12e3 | 0) + 156 >> 2] = 1;
 c[(d + 12e3 | 0) + 160 >> 2] = 0;
 a[(d + 12e3 | 0) + 164 >> 0] = 10;
 c[(d + 12e3 | 0) + 168 >> 2] = 1;
 c[(d + 12e3 | 0) + 172 >> 2] = 0;
 a[(d + 12e3 | 0) + 176 >> 0] = 10;
 c[(d + 12e3 | 0) + 180 >> 2] = 1;
 c[(d + 12e3 | 0) + 184 >> 2] = 0;
 a[(d + 12e3 | 0) + 188 >> 0] = 10;
 c[(d + 12e3 | 0) + 192 >> 2] = 1;
 c[(d + 12e3 | 0) + 196 >> 2] = 0;
 a[(d + 12e3 | 0) + 200 >> 0] = 10;
 c[(d + 12e3 | 0) + 204 >> 2] = 1;
 c[(d + 12e3 | 0) >> 2] = 2124503556;
 c[(d + 12e3 | 0) + 4 >> 2] = -923214409;
 Ae(d + 11728 | 0, 18931);
 fd(d + 12e3 | 0, d + 11728 | 0, 1);
 Ae(d + 11696 | 0, 19052);
 Fd(d + 8640 | 0, d + 11696 | 0, d + 12e3 | 0, 1);
 yd(d + 1072 | 0, (c[8946] | 0) + 1168 | 0, d + 8640 | 0);
 c[(d + 8640 | 0) + 3028 >> 2] = 0;
 c[(d + 8640 | 0) + 3016 >> 2] = 0;
 c[(d + 8640 | 0) + 3004 >> 2] = 0;
 c[(d + 8640 | 0) + 2992 >> 2] = 0;
 c[(d + 8640 | 0) + 2980 >> 2] = 0;
 c[(d + 8640 | 0) + 2968 >> 2] = 0;
 c[(d + 8640 | 0) + 2956 >> 2] = 0;
 c[(d + 8640 | 0) + 2944 >> 2] = 0;
 c[(d + 8640 | 0) + 2932 >> 2] = 0;
 c[(d + 8640 | 0) + 2920 >> 2] = 0;
 c[(d + 8640 | 0) + 2908 >> 2] = 0;
 c[(d + 8640 | 0) + 2896 >> 2] = 0;
 c[(d + 8640 | 0) + 2884 >> 2] = 0;
 c[(d + 8640 | 0) + 2872 >> 2] = 0;
 c[(d + 8640 | 0) + 2860 >> 2] = 0;
 c[(d + 8640 | 0) + 2848 >> 2] = 0;
 c[(d + 8640 | 0) + 2840 >> 2] = 0;
 c[(d + 8640 | 0) + 2824 >> 2] = 0;
 c[(d + 8640 | 0) + 2812 >> 2] = 0;
 c[(d + 8640 | 0) + 2800 >> 2] = 0;
 c[(d + 8640 | 0) + 2788 >> 2] = 0;
 c[(d + 8640 | 0) + 2776 >> 2] = 0;
 c[(d + 8640 | 0) + 2764 >> 2] = 0;
 c[(d + 8640 | 0) + 2752 >> 2] = 0;
 c[(d + 8640 | 0) + 2740 >> 2] = 0;
 c[(d + 8640 | 0) + 2728 >> 2] = 0;
 c[(d + 8640 | 0) + 2716 >> 2] = 0;
 c[(d + 8640 | 0) + 2704 >> 2] = 0;
 c[(d + 8640 | 0) + 2692 >> 2] = 0;
 c[(d + 8640 | 0) + 2680 >> 2] = 0;
 c[(d + 8640 | 0) + 2668 >> 2] = 0;
 c[(d + 8640 | 0) + 2656 >> 2] = 0;
 c[(d + 8640 | 0) + 2644 >> 2] = 0;
 c[(d + 8640 | 0) + 2636 >> 2] = 0;
 c[(d + 8640 | 0) + 2548 >> 2] = 0;
 c[(d + 8640 | 0) + 2536 >> 2] = 0;
 c[(d + 8640 | 0) + 2524 >> 2] = 0;
 c[(d + 8640 | 0) + 2512 >> 2] = 0;
 c[(d + 8640 | 0) + 2500 >> 2] = 0;
 c[(d + 8640 | 0) + 2488 >> 2] = 0;
 c[(d + 8640 | 0) + 2476 >> 2] = 0;
 c[(d + 8640 | 0) + 2464 >> 2] = 0;
 c[(d + 8640 | 0) + 2452 >> 2] = 0;
 c[(d + 8640 | 0) + 2440 >> 2] = 0;
 c[(d + 8640 | 0) + 2428 >> 2] = 0;
 c[(d + 8640 | 0) + 2416 >> 2] = 0;
 c[(d + 8640 | 0) + 2404 >> 2] = 0;
 c[(d + 8640 | 0) + 2392 >> 2] = 0;
 c[(d + 8640 | 0) + 2380 >> 2] = 0;
 c[(d + 8640 | 0) + 2368 >> 2] = 0;
 c[(d + 8640 | 0) + 2344 >> 2] = 0;
 c[(d + 8640 | 0) + 2260 >> 2] = 0;
 c[(d + 8640 | 0) + 2248 >> 2] = 0;
 c[(d + 8640 | 0) + 2236 >> 2] = 0;
 c[(d + 8640 | 0) + 2224 >> 2] = 0;
 c[(d + 8640 | 0) + 2212 >> 2] = 0;
 c[(d + 8640 | 0) + 2200 >> 2] = 0;
 c[(d + 8640 | 0) + 2188 >> 2] = 0;
 c[(d + 8640 | 0) + 2176 >> 2] = 0;
 c[(d + 8640 | 0) + 2164 >> 2] = 0;
 c[(d + 8640 | 0) + 2152 >> 2] = 0;
 c[(d + 8640 | 0) + 2140 >> 2] = 0;
 c[(d + 8640 | 0) + 2128 >> 2] = 0;
 c[(d + 8640 | 0) + 2116 >> 2] = 0;
 c[(d + 8640 | 0) + 2104 >> 2] = 0;
 c[(d + 8640 | 0) + 2092 >> 2] = 0;
 c[(d + 8640 | 0) + 2080 >> 2] = 0;
 c[(d + 8640 | 0) + 2056 >> 2] = 0;
 c[(d + 8640 | 0) + 1972 >> 2] = 0;
 c[(d + 8640 | 0) + 1960 >> 2] = 0;
 c[(d + 8640 | 0) + 1948 >> 2] = 0;
 c[(d + 8640 | 0) + 1936 >> 2] = 0;
 c[(d + 8640 | 0) + 1924 >> 2] = 0;
 c[(d + 8640 | 0) + 1912 >> 2] = 0;
 c[(d + 8640 | 0) + 1900 >> 2] = 0;
 c[(d + 8640 | 0) + 1888 >> 2] = 0;
 c[(d + 8640 | 0) + 1876 >> 2] = 0;
 c[(d + 8640 | 0) + 1864 >> 2] = 0;
 c[(d + 8640 | 0) + 1852 >> 2] = 0;
 c[(d + 8640 | 0) + 1840 >> 2] = 0;
 c[(d + 8640 | 0) + 1828 >> 2] = 0;
 c[(d + 8640 | 0) + 1816 >> 2] = 0;
 c[(d + 8640 | 0) + 1804 >> 2] = 0;
 c[(d + 8640 | 0) + 1792 >> 2] = 0;
 c[(d + 8640 | 0) + 1768 >> 2] = 0;
 c[(d + 8640 | 0) + 1684 >> 2] = 0;
 c[(d + 8640 | 0) + 1672 >> 2] = 0;
 c[(d + 8640 | 0) + 1660 >> 2] = 0;
 c[(d + 8640 | 0) + 1648 >> 2] = 0;
 c[(d + 8640 | 0) + 1636 >> 2] = 0;
 c[(d + 8640 | 0) + 1624 >> 2] = 0;
 c[(d + 8640 | 0) + 1612 >> 2] = 0;
 c[(d + 8640 | 0) + 1600 >> 2] = 0;
 c[(d + 8640 | 0) + 1588 >> 2] = 0;
 c[(d + 8640 | 0) + 1576 >> 2] = 0;
 c[(d + 8640 | 0) + 1564 >> 2] = 0;
 c[(d + 8640 | 0) + 1552 >> 2] = 0;
 c[(d + 8640 | 0) + 1540 >> 2] = 0;
 c[(d + 8640 | 0) + 1528 >> 2] = 0;
 c[(d + 8640 | 0) + 1516 >> 2] = 0;
 c[(d + 8640 | 0) + 1504 >> 2] = 0;
 c[(d + 8640 | 0) + 1480 >> 2] = 0;
 c[(d + 8640 | 0) + 1396 >> 2] = 0;
 c[(d + 8640 | 0) + 1384 >> 2] = 0;
 c[(d + 8640 | 0) + 1372 >> 2] = 0;
 c[(d + 8640 | 0) + 1360 >> 2] = 0;
 c[(d + 8640 | 0) + 1348 >> 2] = 0;
 c[(d + 8640 | 0) + 1336 >> 2] = 0;
 c[(d + 8640 | 0) + 1324 >> 2] = 0;
 c[(d + 8640 | 0) + 1312 >> 2] = 0;
 c[(d + 8640 | 0) + 1300 >> 2] = 0;
 c[(d + 8640 | 0) + 1288 >> 2] = 0;
 c[(d + 8640 | 0) + 1276 >> 2] = 0;
 c[(d + 8640 | 0) + 1264 >> 2] = 0;
 c[(d + 8640 | 0) + 1252 >> 2] = 0;
 c[(d + 8640 | 0) + 1240 >> 2] = 0;
 c[(d + 8640 | 0) + 1228 >> 2] = 0;
 c[(d + 8640 | 0) + 1216 >> 2] = 0;
 c[(d + 8640 | 0) + 1192 >> 2] = 0;
 c[(d + 8640 | 0) + 1108 >> 2] = 0;
 c[(d + 8640 | 0) + 1096 >> 2] = 0;
 c[(d + 8640 | 0) + 1084 >> 2] = 0;
 c[(d + 8640 | 0) + 1072 >> 2] = 0;
 c[(d + 8640 | 0) + 1060 >> 2] = 0;
 c[(d + 8640 | 0) + 1048 >> 2] = 0;
 c[(d + 8640 | 0) + 1036 >> 2] = 0;
 c[(d + 8640 | 0) + 1024 >> 2] = 0;
 c[(d + 8640 | 0) + 1012 >> 2] = 0;
 c[(d + 8640 | 0) + 1e3 >> 2] = 0;
 c[(d + 8640 | 0) + 988 >> 2] = 0;
 c[(d + 8640 | 0) + 976 >> 2] = 0;
 c[(d + 8640 | 0) + 964 >> 2] = 0;
 c[(d + 8640 | 0) + 952 >> 2] = 0;
 c[(d + 8640 | 0) + 940 >> 2] = 0;
 c[(d + 8640 | 0) + 928 >> 2] = 0;
 c[(d + 8640 | 0) + 904 >> 2] = 0;
 c[(d + 8640 | 0) + 820 >> 2] = 0;
 c[(d + 8640 | 0) + 808 >> 2] = 0;
 c[(d + 8640 | 0) + 796 >> 2] = 0;
 c[(d + 8640 | 0) + 784 >> 2] = 0;
 c[(d + 8640 | 0) + 772 >> 2] = 0;
 c[(d + 8640 | 0) + 760 >> 2] = 0;
 c[(d + 8640 | 0) + 748 >> 2] = 0;
 c[(d + 8640 | 0) + 736 >> 2] = 0;
 c[(d + 8640 | 0) + 724 >> 2] = 0;
 c[(d + 8640 | 0) + 712 >> 2] = 0;
 c[(d + 8640 | 0) + 700 >> 2] = 0;
 c[(d + 8640 | 0) + 688 >> 2] = 0;
 c[(d + 8640 | 0) + 676 >> 2] = 0;
 c[(d + 8640 | 0) + 664 >> 2] = 0;
 c[(d + 8640 | 0) + 652 >> 2] = 0;
 c[(d + 8640 | 0) + 640 >> 2] = 0;
 c[(d + 8640 | 0) + 616 >> 2] = 0;
 c[(d + 8640 | 0) + 532 >> 2] = 0;
 c[(d + 8640 | 0) + 520 >> 2] = 0;
 c[(d + 8640 | 0) + 508 >> 2] = 0;
 c[(d + 8640 | 0) + 496 >> 2] = 0;
 c[(d + 8640 | 0) + 484 >> 2] = 0;
 c[(d + 8640 | 0) + 472 >> 2] = 0;
 c[(d + 8640 | 0) + 460 >> 2] = 0;
 c[(d + 8640 | 0) + 448 >> 2] = 0;
 c[(d + 8640 | 0) + 436 >> 2] = 0;
 c[(d + 8640 | 0) + 424 >> 2] = 0;
 c[(d + 8640 | 0) + 412 >> 2] = 0;
 c[(d + 8640 | 0) + 400 >> 2] = 0;
 c[(d + 8640 | 0) + 388 >> 2] = 0;
 c[(d + 8640 | 0) + 376 >> 2] = 0;
 c[(d + 8640 | 0) + 364 >> 2] = 0;
 c[(d + 8640 | 0) + 352 >> 2] = 0;
 c[(d + 8640 | 0) + 328 >> 2] = 0;
 Sc((d + 8640 | 0) + 16 | 0);
 c[(d + 8640 | 0) >> 2] = 0;
 Ae(d + 12456 | 0, 18918);
 c[(d + 12456 | 0) + 4 >> 2] = -2;
 Ed(d + 5592 | 0, d + 12456 | 0);
 c[(d + 12456 | 0) >> 2] = 0;
 a[((d + 12384 | 0) + 4 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 5 >> 0] = 13;
 a[((d + 12384 | 0) + 6 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 7 >> 0] = 13;
 a[((d + 12384 | 0) + 8 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 9 >> 0] = 13;
 a[((d + 12384 | 0) + 10 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 11 >> 0] = 13;
 a[((d + 12384 | 0) + 12 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 13 >> 0] = 13;
 a[((d + 12384 | 0) + 14 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 15 >> 0] = 13;
 a[((d + 12384 | 0) + 16 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 17 >> 0] = 13;
 a[((d + 12384 | 0) + 18 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 19 >> 0] = 13;
 a[((d + 12384 | 0) + 20 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 21 >> 0] = 13;
 a[((d + 12384 | 0) + 22 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 23 >> 0] = 13;
 a[((d + 12384 | 0) + 24 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 25 >> 0] = 13;
 a[((d + 12384 | 0) + 26 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 27 >> 0] = 13;
 a[((d + 12384 | 0) + 28 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 29 >> 0] = 13;
 a[((d + 12384 | 0) + 30 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 31 >> 0] = 13;
 a[((d + 12384 | 0) + 32 | 0) >> 0] = 17;
 a[(d + 12384 | 0) + 33 >> 0] = 13;
 a[(d + 12384 | 0) >> 0] = 0;
 a[(d + 12384 | 0) + 1 >> 0] = 1;
 m = (d + 12384 | 0) + 50 | 0;
 n = (d + 12384 | 0) + 34 | 0;
 b[m >> 1] = 65535;
 b[m + 2 >> 1] = 65535;
 b[m + 4 >> 1] = 65535;
 b[m + 6 >> 1] = 65535;
 b[m + 8 >> 1] = 65535;
 b[m + 10 >> 1] = 65535;
 b[m + 12 >> 1] = 65535;
 b[m + 14 >> 1] = 65535;
 b[n >> 1] = 0;
 b[n + 2 >> 1] = 0;
 b[n + 4 >> 1] = 0;
 b[n + 6 >> 1] = 0;
 b[n + 8 >> 1] = 0;
 b[n + 10 >> 1] = 0;
 b[n + 12 >> 1] = 0;
 b[n + 14 >> 1] = 0;
 b[(d + 12384 | 0) + 2 >> 1] = 768;
 a[m >> 0] = 0;
 a[n >> 0] = 0;
 a[(d + 12384 | 0) + 67 >> 0] = 16;
 a[((d + 12384 | 0) + 66 | 0) >> 0] = 1;
 c : do if (!3) {
  t = 3407;
  z = 492;
 } else {
  k = 3407;
  l = 3407;
  while (1) {
   if (!(a[k >> 0] | 0)) {
    j = l;
    break c;
   }
   k = k + 1 | 0;
   l = k;
   if (!(l & 3)) {
    t = k;
    z = 492;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 492) {
  j = t;
  while (1) {
   k = c[j >> 2] | 0;
   if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) j = j + 4 | 0; else break;
  }
  if ((k & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
 }
 j = j - 3407 | 0;
 if ((j | 0) > 0) {
  l = bf(j + 9 | 0) | 0;
  c[l >> 2] = 0;
  c[l + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = j;
  c[(d + 12376 | 0) >> 2] = l + 8 | 0;
  Af(l + 8 | 0 | 0, 3407, j | 0) | 0;
  a[(l + 8 | 0) + j >> 0] = 0;
 } else {
  c[(d + 12376 | 0) >> 2] = 0;
  l = 0;
 }
 d : do if (!2) {
  u = 6070;
  z = 503;
 } else {
  j = 6070;
  k = 6070;
  while (1) {
   if (!(a[j >> 0] | 0)) {
    i = k;
    break d;
   }
   j = j + 1 | 0;
   k = j;
   if (!(k & 3)) {
    u = j;
    z = 503;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 503) {
  i = u;
  while (1) {
   j = c[i >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) i = i + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do i = i + 1 | 0; while ((a[i >> 0] | 0) != 0);
 }
 i = i - 6070 | 0;
 if ((i | 0) > 0) {
  k = bf(i + 9 | 0) | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = i;
  c[(d + 12368 | 0) >> 2] = k + 8 | 0;
  Af(k + 8 | 0 | 0, 6070, i | 0) | 0;
  a[(k + 8 | 0) + i >> 0] = 0;
 } else {
  c[(d + 12368 | 0) >> 2] = 0;
  k = 0;
 }
 j = (d + 5592 | 0) + 16 | 0;
 i = c[j >> 2] | 0;
 if (i | 0) {
  A = c[i >> 2] | 0;
  c[i >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[j >> 2] | 0);
   c[j >> 2] = 0;
   c[((d + 5592 | 0) + 20 | 0) >> 2] = 0;
   i = (d + 5592 | 0) + 20 | 0;
  } else i = (d + 5592 | 0) + 20 | 0;
  c[j >> 2] = 0;
  c[i >> 2] = 0;
 }
 c[j >> 2] = l;
 c[(d + 5592 | 0) + 20 >> 2] = c[(d + 12376 | 0) >> 2];
 if (l | 0) {
  A = l;
  c[A >> 2] = (c[A >> 2] | 0) + 1;
 }
 j = (d + 5592 | 0) + 56 | 0;
 i = c[j >> 2] | 0;
 if (i | 0) {
  A = c[i >> 2] | 0;
  c[i >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[j >> 2] | 0);
   c[j >> 2] = 0;
   c[((d + 5592 | 0) + 60 | 0) >> 2] = 0;
   i = (d + 5592 | 0) + 60 | 0;
  } else i = (d + 5592 | 0) + 60 | 0;
  c[j >> 2] = 0;
  c[i >> 2] = 0;
 }
 c[j >> 2] = k;
 c[(d + 5592 | 0) + 60 >> 2] = c[(d + 12368 | 0) >> 2];
 i = k;
 if (k | 0) c[i >> 2] = (c[i >> 2] | 0) + 1;
 b[((d + 5592 | 0) + 256 | 0) >> 1] = b[(d + 12384 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 258 | 0) >> 1] = b[((d + 12384 | 0) + 2 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 260 | 0) >> 1] = b[((d + 12384 | 0) + 4 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 262 | 0) >> 1] = b[((d + 12384 | 0) + 6 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 264 | 0) >> 1] = b[((d + 12384 | 0) + 8 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 266 | 0) >> 1] = b[((d + 12384 | 0) + 10 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 268 | 0) >> 1] = b[((d + 12384 | 0) + 12 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 270 | 0) >> 1] = b[((d + 12384 | 0) + 14 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 272 | 0) >> 1] = b[((d + 12384 | 0) + 16 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 274 | 0) >> 1] = b[((d + 12384 | 0) + 18 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 276 | 0) >> 1] = b[((d + 12384 | 0) + 20 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 278 | 0) >> 1] = b[((d + 12384 | 0) + 22 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 280 | 0) >> 1] = b[((d + 12384 | 0) + 24 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 282 | 0) >> 1] = b[((d + 12384 | 0) + 26 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 284 | 0) >> 1] = b[((d + 12384 | 0) + 28 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 286 | 0) >> 1] = b[((d + 12384 | 0) + 30 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 288 | 0) >> 1] = b[((d + 12384 | 0) + 32 | 0) >> 1] | 0;
 A = b[n >> 1] | 0;
 a[((d + 5592 | 0) + 290 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 291 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 36 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 292 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 293 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 38 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 294 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 295 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 40 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 296 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 297 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 42 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 298 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 299 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 44 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 300 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 301 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 46 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 302 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 303 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 48 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 304 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 305 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[m >> 1] | 0;
 a[((d + 5592 | 0) + 306 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 307 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 52 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 308 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 309 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 54 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 310 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 311 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 56 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 312 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 313 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 58 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 314 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 315 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 60 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 316 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 317 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 62 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 318 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 319 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 64 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 320 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 321 | 0) >> 0] = (A & 65535) >>> 8;
 b[((d + 5592 | 0) + 322 | 0) >> 1] = b[((d + 12384 | 0) + 66 | 0) >> 1] | 0;
 if (k | 0) {
  A = c[i >> 2] | 0;
  c[i >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(k);
   c[(d + 12368 | 0) >> 2] = 0;
  }
  c[(d + 12368 | 0) >> 2] = 0;
 }
 if (l | 0) {
  u = l;
  A = c[u >> 2] | 0;
  c[u >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(l);
   c[(d + 12376 | 0) >> 2] = 0;
  }
  c[(d + 12376 | 0) >> 2] = 0;
 }
 e : do if (!3) {
  v = 9015;
  z = 536;
 } else {
  i = 9015;
  j = 9015;
  while (1) {
   if (!(a[i >> 0] | 0)) {
    h = j;
    break e;
   }
   i = i + 1 | 0;
   j = i;
   if (!(j & 3)) {
    v = i;
    z = 536;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 536) {
  h = v;
  while (1) {
   i = c[h >> 2] | 0;
   if (!((i & -2139062144 ^ -2139062144) & i + -16843009)) h = h + 4 | 0; else break;
  }
  if ((i & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 9015 | 0;
 if ((h | 0) > 0) {
  j = bf(h + 9 | 0) | 0;
  c[j >> 2] = 0;
  c[j + 4 >> 2] = 0;
  c[j >> 2] = 0;
  c[j >> 2] = (c[j >> 2] | 0) + 1;
  c[j + 4 >> 2] = h;
  c[(d + 12352 | 0) >> 2] = j + 8 | 0;
  Af(j + 8 | 0 | 0, 9015, h | 0) | 0;
  a[(j + 8 | 0) + h >> 0] = 0;
 } else {
  c[(d + 12352 | 0) >> 2] = 0;
  j = 0;
 }
 f : do if (!3) {
  w = 11615;
  z = 547;
 } else {
  h = 11615;
  i = 11615;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    g = i;
    break f;
   }
   h = h + 1 | 0;
   i = h;
   if (!(i & 3)) {
    w = h;
    z = 547;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 547) {
  g = w;
  while (1) {
   h = c[g >> 2] | 0;
   if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
  }
  if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
 }
 g = g - 11615 | 0;
 if ((g | 0) > 0) {
  i = bf(g + 9 | 0) | 0;
  c[i >> 2] = 0;
  c[i + 4 >> 2] = 0;
  c[i >> 2] = 0;
  c[i >> 2] = (c[i >> 2] | 0) + 1;
  c[i + 4 >> 2] = g;
  c[(d + 12344 | 0) >> 2] = i + 8 | 0;
  Af(i + 8 | 0 | 0, 11615, g | 0) | 0;
  a[(i + 8 | 0) + g >> 0] = 0;
 } else {
  c[(d + 12344 | 0) >> 2] = 0;
  i = 0;
 }
 h = (d + 5592 | 0) + 24 | 0;
 g = c[h >> 2] | 0;
 if (g | 0) {
  A = c[g >> 2] | 0;
  c[g >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[h >> 2] | 0);
   c[h >> 2] = 0;
   c[((d + 5592 | 0) + 28 | 0) >> 2] = 0;
   g = (d + 5592 | 0) + 28 | 0;
  } else g = (d + 5592 | 0) + 28 | 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
 }
 c[h >> 2] = j;
 c[(d + 5592 | 0) + 28 >> 2] = c[(d + 12352 | 0) >> 2];
 if (j | 0) {
  A = j;
  c[A >> 2] = (c[A >> 2] | 0) + 1;
 }
 h = (d + 5592 | 0) + 64 | 0;
 g = c[h >> 2] | 0;
 if (g | 0) {
  A = c[g >> 2] | 0;
  c[g >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[h >> 2] | 0);
   c[h >> 2] = 0;
   c[((d + 5592 | 0) + 68 | 0) >> 2] = 0;
   g = (d + 5592 | 0) + 68 | 0;
  } else g = (d + 5592 | 0) + 68 | 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
 }
 c[h >> 2] = i;
 c[(d + 5592 | 0) + 68 >> 2] = c[(d + 12344 | 0) >> 2];
 g = i;
 if (i | 0) c[g >> 2] = (c[g >> 2] | 0) + 1;
 b[((d + 5592 | 0) + 256 | 0) >> 1] = b[(d + 12384 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 258 | 0) >> 1] = b[((d + 12384 | 0) + 2 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 260 | 0) >> 1] = b[((d + 12384 | 0) + 4 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 262 | 0) >> 1] = b[((d + 12384 | 0) + 6 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 264 | 0) >> 1] = b[((d + 12384 | 0) + 8 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 266 | 0) >> 1] = b[((d + 12384 | 0) + 10 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 268 | 0) >> 1] = b[((d + 12384 | 0) + 12 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 270 | 0) >> 1] = b[((d + 12384 | 0) + 14 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 272 | 0) >> 1] = b[((d + 12384 | 0) + 16 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 274 | 0) >> 1] = b[((d + 12384 | 0) + 18 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 276 | 0) >> 1] = b[((d + 12384 | 0) + 20 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 278 | 0) >> 1] = b[((d + 12384 | 0) + 22 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 280 | 0) >> 1] = b[((d + 12384 | 0) + 24 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 282 | 0) >> 1] = b[((d + 12384 | 0) + 26 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 284 | 0) >> 1] = b[((d + 12384 | 0) + 28 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 286 | 0) >> 1] = b[((d + 12384 | 0) + 30 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 288 | 0) >> 1] = b[((d + 12384 | 0) + 32 | 0) >> 1] | 0;
 A = b[n >> 1] | 0;
 a[((d + 5592 | 0) + 290 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 291 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 36 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 292 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 293 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 38 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 294 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 295 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 40 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 296 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 297 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 42 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 298 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 299 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 44 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 300 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 301 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 46 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 302 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 303 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 48 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 304 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 305 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[m >> 1] | 0;
 a[((d + 5592 | 0) + 306 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 307 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 52 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 308 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 309 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 54 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 310 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 311 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 56 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 312 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 313 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 58 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 314 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 315 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 60 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 316 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 317 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 62 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 318 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 319 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 64 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 320 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 321 | 0) >> 0] = (A & 65535) >>> 8;
 b[((d + 5592 | 0) + 322 | 0) >> 1] = b[((d + 12384 | 0) + 66 | 0) >> 1] | 0;
 if (i | 0) {
  A = c[g >> 2] | 0;
  c[g >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(i);
   c[(d + 12344 | 0) >> 2] = 0;
  }
  c[(d + 12344 | 0) >> 2] = 0;
 }
 if (j | 0) {
  w = j;
  A = c[w >> 2] | 0;
  c[w >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(j);
   c[(d + 12352 | 0) >> 2] = 0;
  }
  c[(d + 12352 | 0) >> 2] = 0;
 }
 g : do if (!1) {
  x = 14437;
  z = 580;
 } else {
  g = 14437;
  h = 14437;
  while (1) {
   if (!(a[g >> 0] | 0)) {
    f = h;
    break g;
   }
   g = g + 1 | 0;
   h = g;
   if (!(h & 3)) {
    x = g;
    z = 580;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 580) {
  f = x;
  while (1) {
   g = c[f >> 2] | 0;
   if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
  }
  if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
 }
 f = f - 14437 | 0;
 if ((f | 0) > 0) {
  h = bf(f + 9 | 0) | 0;
  c[h >> 2] = 0;
  c[h + 4 >> 2] = 0;
  c[h >> 2] = 0;
  c[h >> 2] = (c[h >> 2] | 0) + 1;
  c[h + 4 >> 2] = f;
  c[(d + 12336 | 0) >> 2] = h + 8 | 0;
  Af(h + 8 | 0 | 0, 14437, f | 0) | 0;
  a[(h + 8 | 0) + f >> 0] = 0;
 } else {
  c[(d + 12336 | 0) >> 2] = 0;
  h = 0;
 }
 h : do if (!3) {
  y = 17031;
  z = 591;
 } else {
  f = 17031;
  g = 17031;
  while (1) {
   if (!(a[f >> 0] | 0)) {
    e = g;
    break h;
   }
   f = f + 1 | 0;
   g = f;
   if (!(g & 3)) {
    y = f;
    z = 591;
    break;
   }
  }
 } while (0);
 if ((z | 0) == 591) {
  e = y;
  while (1) {
   f = c[e >> 2] | 0;
   if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) e = e + 4 | 0; else break;
  }
  if ((f & 255) << 24 >> 24) do e = e + 1 | 0; while ((a[e >> 0] | 0) != 0);
 }
 e = e - 17031 | 0;
 if ((e | 0) > 0) {
  g = bf(e + 9 | 0) | 0;
  c[g >> 2] = 0;
  c[g + 4 >> 2] = 0;
  c[g >> 2] = 0;
  c[g >> 2] = (c[g >> 2] | 0) + 1;
  c[g + 4 >> 2] = e;
  c[(d + 12e3 | 0) >> 2] = g + 8 | 0;
  Af(g + 8 | 0 | 0, 17031, e | 0) | 0;
  a[(g + 8 | 0) + e >> 0] = 0;
 } else {
  c[(d + 12e3 | 0) >> 2] = 0;
  g = 0;
 }
 f = (d + 5592 | 0) + 32 | 0;
 e = c[f >> 2] | 0;
 if (e | 0) {
  A = c[e >> 2] | 0;
  c[e >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[f >> 2] | 0);
   c[f >> 2] = 0;
   c[((d + 5592 | 0) + 36 | 0) >> 2] = 0;
   e = (d + 5592 | 0) + 36 | 0;
  } else e = (d + 5592 | 0) + 36 | 0;
  c[f >> 2] = 0;
  c[e >> 2] = 0;
 }
 c[f >> 2] = h;
 c[(d + 5592 | 0) + 36 >> 2] = c[(d + 12336 | 0) >> 2];
 if (h | 0) {
  A = h;
  c[A >> 2] = (c[A >> 2] | 0) + 1;
 }
 f = (d + 5592 | 0) + 72 | 0;
 e = c[f >> 2] | 0;
 if (e | 0) {
  A = c[e >> 2] | 0;
  c[e >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(c[f >> 2] | 0);
   c[f >> 2] = 0;
   c[((d + 5592 | 0) + 76 | 0) >> 2] = 0;
   e = (d + 5592 | 0) + 76 | 0;
  } else e = (d + 5592 | 0) + 76 | 0;
  c[f >> 2] = 0;
  c[e >> 2] = 0;
 }
 c[f >> 2] = g;
 c[(d + 5592 | 0) + 76 >> 2] = c[(d + 12e3 | 0) >> 2];
 e = g;
 if (g | 0) c[e >> 2] = (c[e >> 2] | 0) + 1;
 b[((d + 5592 | 0) + 256 | 0) >> 1] = b[(d + 12384 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 258 | 0) >> 1] = b[((d + 12384 | 0) + 2 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 260 | 0) >> 1] = b[((d + 12384 | 0) + 4 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 262 | 0) >> 1] = b[((d + 12384 | 0) + 6 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 264 | 0) >> 1] = b[((d + 12384 | 0) + 8 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 266 | 0) >> 1] = b[((d + 12384 | 0) + 10 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 268 | 0) >> 1] = b[((d + 12384 | 0) + 12 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 270 | 0) >> 1] = b[((d + 12384 | 0) + 14 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 272 | 0) >> 1] = b[((d + 12384 | 0) + 16 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 274 | 0) >> 1] = b[((d + 12384 | 0) + 18 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 276 | 0) >> 1] = b[((d + 12384 | 0) + 20 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 278 | 0) >> 1] = b[((d + 12384 | 0) + 22 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 280 | 0) >> 1] = b[((d + 12384 | 0) + 24 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 282 | 0) >> 1] = b[((d + 12384 | 0) + 26 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 284 | 0) >> 1] = b[((d + 12384 | 0) + 28 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 286 | 0) >> 1] = b[((d + 12384 | 0) + 30 | 0) >> 1] | 0;
 b[((d + 5592 | 0) + 288 | 0) >> 1] = b[((d + 12384 | 0) + 32 | 0) >> 1] | 0;
 A = b[n >> 1] | 0;
 a[((d + 5592 | 0) + 290 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 291 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 36 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 292 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 293 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 38 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 294 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 295 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 40 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 296 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 297 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 42 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 298 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 299 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 44 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 300 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 301 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 46 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 302 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 303 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 48 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 304 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 305 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[m >> 1] | 0;
 a[((d + 5592 | 0) + 306 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 307 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 52 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 308 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 309 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 54 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 310 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 311 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 56 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 312 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 313 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 58 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 314 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 315 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 60 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 316 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 317 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 62 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 318 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 319 | 0) >> 0] = (A & 65535) >>> 8;
 A = b[((d + 12384 | 0) + 64 | 0) >> 1] | 0;
 a[((d + 5592 | 0) + 320 | 0) >> 0] = A;
 a[((d + 5592 | 0) + 321 | 0) >> 0] = (A & 65535) >>> 8;
 b[((d + 5592 | 0) + 322 | 0) >> 1] = b[((d + 12384 | 0) + 66 | 0) >> 1] | 0;
 if (g | 0) {
  A = c[e >> 2] | 0;
  c[e >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(g);
   c[(d + 12e3 | 0) >> 2] = 0;
  }
  c[(d + 12e3 | 0) >> 2] = 0;
 }
 if (h | 0) {
  y = h;
  A = c[y >> 2] | 0;
  c[y >> 2] = A - 1;
  if ((A | 0) == 1) {
   cf(h);
   c[(d + 12336 | 0) >> 2] = 0;
  }
  c[(d + 12336 | 0) >> 2] = 0;
 }
 c[(d + 11728 | 0) >> 2] = 0;
 c[(d + 11728 | 0) + 4 >> 2] = 0;
 c[(d + 11728 | 0) + 8 >> 2] = 0;
 c[(d + 11728 | 0) + 12 >> 2] = 0;
 c[(d + 11728 | 0) + 16 >> 2] = 0;
 a[(d + 11728 | 0) + 20 >> 0] = 10;
 c[(d + 11728 | 0) + 24 >> 2] = 1;
 c[(d + 11728 | 0) + 28 >> 2] = 0;
 a[(d + 11728 | 0) + 32 >> 0] = 10;
 c[(d + 11728 | 0) + 36 >> 2] = 1;
 c[(d + 11728 | 0) + 40 >> 2] = 0;
 a[(d + 11728 | 0) + 44 >> 0] = 10;
 c[(d + 11728 | 0) + 48 >> 2] = 1;
 c[(d + 11728 | 0) + 52 >> 2] = 0;
 a[(d + 11728 | 0) + 56 >> 0] = 10;
 c[(d + 11728 | 0) + 60 >> 2] = 1;
 c[(d + 11728 | 0) + 64 >> 2] = 0;
 a[(d + 11728 | 0) + 68 >> 0] = 10;
 c[(d + 11728 | 0) + 72 >> 2] = 1;
 c[(d + 11728 | 0) + 76 >> 2] = 0;
 a[(d + 11728 | 0) + 80 >> 0] = 10;
 c[(d + 11728 | 0) + 84 >> 2] = 1;
 c[(d + 11728 | 0) + 88 >> 2] = 0;
 a[(d + 11728 | 0) + 92 >> 0] = 10;
 c[(d + 11728 | 0) + 96 >> 2] = 1;
 c[(d + 11728 | 0) + 100 >> 2] = 0;
 a[(d + 11728 | 0) + 104 >> 0] = 10;
 c[(d + 11728 | 0) + 108 >> 2] = 1;
 c[(d + 11728 | 0) + 112 >> 2] = 0;
 a[(d + 11728 | 0) + 116 >> 0] = 10;
 c[(d + 11728 | 0) + 120 >> 2] = 1;
 c[(d + 11728 | 0) + 124 >> 2] = 0;
 a[(d + 11728 | 0) + 128 >> 0] = 10;
 c[(d + 11728 | 0) + 132 >> 2] = 1;
 c[(d + 11728 | 0) + 136 >> 2] = 0;
 a[(d + 11728 | 0) + 140 >> 0] = 10;
 c[(d + 11728 | 0) + 144 >> 2] = 1;
 c[(d + 11728 | 0) + 148 >> 2] = 0;
 a[(d + 11728 | 0) + 152 >> 0] = 10;
 c[(d + 11728 | 0) + 156 >> 2] = 1;
 c[(d + 11728 | 0) + 160 >> 2] = 0;
 a[(d + 11728 | 0) + 164 >> 0] = 10;
 c[(d + 11728 | 0) + 168 >> 2] = 1;
 c[(d + 11728 | 0) + 172 >> 2] = 0;
 a[(d + 11728 | 0) + 176 >> 0] = 10;
 c[(d + 11728 | 0) + 180 >> 2] = 1;
 c[(d + 11728 | 0) + 184 >> 2] = 0;
 a[(d + 11728 | 0) + 188 >> 0] = 10;
 c[(d + 11728 | 0) + 192 >> 2] = 1;
 c[(d + 11728 | 0) + 196 >> 2] = 0;
 a[(d + 11728 | 0) + 200 >> 0] = 10;
 c[(d + 11728 | 0) + 204 >> 2] = 1;
 c[(d + 11728 | 0) >> 2] = 1394610461;
 c[(d + 11728 | 0) + 4 >> 2] = 749623139;
 Ae(d + 11696 | 0, 18931);
 fd(d + 11728 | 0, d + 11696 | 0, 1);
 c[(d + 11696 | 0) >> 2] = 0;
 Ae(d + 12796 | 0, 18939);
 fd(d + 11728 | 0, d + 12796 | 0, 0);
 c[(d + 12796 | 0) >> 2] = 0;
 Ae(d + 12792 | 0, 18952);
 Fd(d + 5592 | 0, d + 12792 | 0, d + 11728 | 0, 1);
 c[(d + 12792 | 0) >> 2] = 0;
 c[(d + 12596 | 0) >> 2] = 0;
 c[(d + 12596 | 0) + 4 >> 2] = 0;
 c[(d + 12596 | 0) + 8 >> 2] = -1;
 c[(d + 12596 | 0) + 12 >> 2] = -1;
 c[(d + 12596 | 0) + 16 >> 2] = 0;
 c[(d + 12596 | 0) + 20 >> 2] = -1;
 c[(d + 12596 | 0) + 24 >> 2] = -1;
 c[(d + 12596 | 0) + 28 >> 2] = 0;
 c[(d + 12596 | 0) + 32 >> 2] = -1;
 c[(d + 12596 | 0) + 36 >> 2] = -1;
 c[(d + 12596 | 0) + 40 >> 2] = 0;
 c[(d + 12596 | 0) + 44 >> 2] = -1;
 c[(d + 12596 | 0) + 48 >> 2] = -1;
 c[(d + 12596 | 0) + 52 >> 2] = 0;
 c[(d + 12596 | 0) + 56 >> 2] = -1;
 c[(d + 12596 | 0) + 60 >> 2] = -1;
 c[(d + 12596 | 0) + 64 >> 2] = 0;
 c[(d + 12596 | 0) + 68 >> 2] = -1;
 c[(d + 12596 | 0) + 72 >> 2] = -1;
 c[(d + 12596 | 0) + 76 >> 2] = 0;
 c[(d + 12596 | 0) + 80 >> 2] = -1;
 c[(d + 12596 | 0) + 84 >> 2] = -1;
 c[(d + 12596 | 0) + 88 >> 2] = 0;
 c[(d + 12596 | 0) + 92 >> 2] = -1;
 c[(d + 12596 | 0) + 96 >> 2] = -1;
 c[(d + 12596 | 0) + 100 >> 2] = 0;
 c[(d + 12596 | 0) + 104 >> 2] = -1;
 c[(d + 12596 | 0) + 108 >> 2] = -1;
 c[(d + 12596 | 0) + 112 >> 2] = 0;
 c[(d + 12596 | 0) + 116 >> 2] = -1;
 c[(d + 12596 | 0) + 120 >> 2] = -1;
 c[(d + 12596 | 0) + 124 >> 2] = 0;
 c[(d + 12596 | 0) + 128 >> 2] = -1;
 c[(d + 12596 | 0) + 132 >> 2] = -1;
 c[(d + 12596 | 0) + 136 >> 2] = 0;
 c[(d + 12596 | 0) + 140 >> 2] = -1;
 c[(d + 12596 | 0) + 144 >> 2] = -1;
 c[(d + 12596 | 0) + 148 >> 2] = 0;
 c[(d + 12596 | 0) + 152 >> 2] = -1;
 c[(d + 12596 | 0) + 156 >> 2] = -1;
 c[(d + 12596 | 0) + 160 >> 2] = 0;
 c[(d + 12596 | 0) + 164 >> 2] = -1;
 c[(d + 12596 | 0) + 168 >> 2] = -1;
 c[(d + 12596 | 0) + 172 >> 2] = 0;
 c[(d + 12596 | 0) + 176 >> 2] = -1;
 c[(d + 12596 | 0) + 180 >> 2] = -1;
 c[(d + 12596 | 0) + 184 >> 2] = 0;
 c[(d + 12596 | 0) + 188 >> 2] = -1;
 c[(d + 12596 | 0) + 192 >> 2] = -1;
 Ae(d + 12592 | 0, 18965);
 e = c[(d + 12596 | 0) >> 2] | 0;
 c[(d + 12596 | 0) >> 2] = e + 1;
 Be(d + 12528 | 0, d + 12592 | 0);
 c[((d + 12528 | 0) + 4 | 0) >> 2] = 0;
 c[(d + 12528 | 0) + 8 >> 2] = 0;
 if ((d + 12528 | 0 | 0) != ((d + 12596 | 0) + 4 + (e * 12 | 0) | 0 | 0)) {
  c[((d + 12596 | 0) + 4 + (e * 12 | 0) | 0) >> 2] = 0;
  Be((d + 12596 | 0) + 4 + (e * 12 | 0) | 0, d + 12528 | 0);
  c[(d + 12528 | 0) >> 2] = 0;
 }
 A = c[((d + 12528 | 0) + 4 | 0) + 4 >> 2] | 0;
 c[((d + 12596 | 0) + 4 + (e * 12 | 0) + 4 | 0) >> 2] = c[((d + 12528 | 0) + 4 | 0) >> 2];
 c[((d + 12596 | 0) + 4 + (e * 12 | 0) + 4 | 0) + 4 >> 2] = A;
 c[(d + 12592 | 0) >> 2] = 0;
 Ae(d + 12588 | 0, 18975);
 e = c[((d + 5592 | 0) + 2632 | 0) >> 2] | 0;
 c[((d + 5592 | 0) + 2632 | 0) >> 2] = e + 1;
 if (((d + 5592 | 0) + 2636 + (e * 204 | 0) | 0 | 0) != (d + 12588 | 0 | 0)) {
  c[((d + 5592 | 0) + 2636 + (e * 204 | 0) | 0) >> 2] = 0;
  Be((d + 5592 | 0) + 2636 + (e * 204 | 0) | 0, d + 12588 | 0);
 }
 c[((d + 5592 | 0) + 2636 + (e * 204 | 0) + 4 | 0) >> 2] = c[(d + 12596 | 0) >> 2];
 if (((d + 5592 | 0) + 2636 + (e * 204 | 0) + 4 | 0 | 0) != (d + 12596 | 0 | 0)) {
  f = 0;
  do {
   x = (d + 5592 | 0) + 2636 + (e * 204 | 0) + 8 + (f * 12 | 0) | 0;
   c[x >> 2] = 0;
   Be(x, (d + 12596 | 0) + 4 + (f * 12 | 0) | 0);
   x = (d + 12596 | 0) + 4 + (f * 12 | 0) + 4 | 0;
   y = c[x + 4 >> 2] | 0;
   A = (d + 5592 | 0) + 2636 + (e * 204 | 0) + 8 + (f * 12 | 0) + 4 | 0;
   c[A >> 2] = c[x >> 2];
   c[A + 4 >> 2] = y;
   f = f + 1 | 0;
  } while ((f | 0) != 16);
 }
 c[(d + 5592 | 0) + 2636 + (e * 204 | 0) + 200 >> 2] = 1;
 yd(d + 1064 | 0, (c[8946] | 0) + 1168 | 0, d + 5592 | 0);
 c[(d + 5592 | 0) + 3028 >> 2] = 0;
 c[(d + 5592 | 0) + 3016 >> 2] = 0;
 c[(d + 5592 | 0) + 3004 >> 2] = 0;
 c[(d + 5592 | 0) + 2992 >> 2] = 0;
 c[(d + 5592 | 0) + 2980 >> 2] = 0;
 c[(d + 5592 | 0) + 2968 >> 2] = 0;
 c[(d + 5592 | 0) + 2956 >> 2] = 0;
 c[(d + 5592 | 0) + 2944 >> 2] = 0;
 c[(d + 5592 | 0) + 2932 >> 2] = 0;
 c[(d + 5592 | 0) + 2920 >> 2] = 0;
 c[(d + 5592 | 0) + 2908 >> 2] = 0;
 c[(d + 5592 | 0) + 2896 >> 2] = 0;
 c[(d + 5592 | 0) + 2884 >> 2] = 0;
 c[(d + 5592 | 0) + 2872 >> 2] = 0;
 c[(d + 5592 | 0) + 2860 >> 2] = 0;
 c[(d + 5592 | 0) + 2848 >> 2] = 0;
 c[(d + 5592 | 0) + 2840 >> 2] = 0;
 c[(d + 5592 | 0) + 2824 >> 2] = 0;
 c[(d + 5592 | 0) + 2812 >> 2] = 0;
 c[(d + 5592 | 0) + 2800 >> 2] = 0;
 c[(d + 5592 | 0) + 2788 >> 2] = 0;
 c[(d + 5592 | 0) + 2776 >> 2] = 0;
 c[(d + 5592 | 0) + 2764 >> 2] = 0;
 c[(d + 5592 | 0) + 2752 >> 2] = 0;
 c[(d + 5592 | 0) + 2740 >> 2] = 0;
 c[(d + 5592 | 0) + 2728 >> 2] = 0;
 c[(d + 5592 | 0) + 2716 >> 2] = 0;
 c[(d + 5592 | 0) + 2704 >> 2] = 0;
 c[(d + 5592 | 0) + 2692 >> 2] = 0;
 c[(d + 5592 | 0) + 2680 >> 2] = 0;
 c[(d + 5592 | 0) + 2668 >> 2] = 0;
 c[(d + 5592 | 0) + 2656 >> 2] = 0;
 c[(d + 5592 | 0) + 2644 >> 2] = 0;
 c[(d + 5592 | 0) + 2636 >> 2] = 0;
 c[(d + 5592 | 0) + 2548 >> 2] = 0;
 c[(d + 5592 | 0) + 2536 >> 2] = 0;
 c[(d + 5592 | 0) + 2524 >> 2] = 0;
 c[(d + 5592 | 0) + 2512 >> 2] = 0;
 c[(d + 5592 | 0) + 2500 >> 2] = 0;
 c[(d + 5592 | 0) + 2488 >> 2] = 0;
 c[(d + 5592 | 0) + 2476 >> 2] = 0;
 c[(d + 5592 | 0) + 2464 >> 2] = 0;
 c[(d + 5592 | 0) + 2452 >> 2] = 0;
 c[d + 21944 >> 2] = z;
}

function Yc(f) {
 f = f | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 x = c[f + 12944 >> 2] | 0;
 O = c[f + 21928 >> 2] | 0;
 N = c[f + 21944 >> 2] | 0;
 c[(f + 5592 | 0) + 2440 >> 2] = 0;
 c[(f + 5592 | 0) + 2428 >> 2] = 0;
 c[(f + 5592 | 0) + 2416 >> 2] = 0;
 c[(f + 5592 | 0) + 2404 >> 2] = 0;
 c[(f + 5592 | 0) + 2392 >> 2] = 0;
 c[(f + 5592 | 0) + 2380 >> 2] = 0;
 c[(f + 5592 | 0) + 2368 >> 2] = 0;
 c[(f + 5592 | 0) + 2344 >> 2] = 0;
 c[(f + 5592 | 0) + 2260 >> 2] = 0;
 c[(f + 5592 | 0) + 2248 >> 2] = 0;
 c[(f + 5592 | 0) + 2236 >> 2] = 0;
 c[(f + 5592 | 0) + 2224 >> 2] = 0;
 c[(f + 5592 | 0) + 2212 >> 2] = 0;
 c[(f + 5592 | 0) + 2200 >> 2] = 0;
 c[(f + 5592 | 0) + 2188 >> 2] = 0;
 c[(f + 5592 | 0) + 2176 >> 2] = 0;
 c[(f + 5592 | 0) + 2164 >> 2] = 0;
 c[(f + 5592 | 0) + 2152 >> 2] = 0;
 c[(f + 5592 | 0) + 2140 >> 2] = 0;
 c[(f + 5592 | 0) + 2128 >> 2] = 0;
 c[(f + 5592 | 0) + 2116 >> 2] = 0;
 c[(f + 5592 | 0) + 2104 >> 2] = 0;
 c[(f + 5592 | 0) + 2092 >> 2] = 0;
 c[(f + 5592 | 0) + 2080 >> 2] = 0;
 c[(f + 5592 | 0) + 2056 >> 2] = 0;
 c[(f + 5592 | 0) + 1972 >> 2] = 0;
 c[(f + 5592 | 0) + 1960 >> 2] = 0;
 c[(f + 5592 | 0) + 1948 >> 2] = 0;
 c[(f + 5592 | 0) + 1936 >> 2] = 0;
 c[(f + 5592 | 0) + 1924 >> 2] = 0;
 c[(f + 5592 | 0) + 1912 >> 2] = 0;
 c[(f + 5592 | 0) + 1900 >> 2] = 0;
 c[(f + 5592 | 0) + 1888 >> 2] = 0;
 c[(f + 5592 | 0) + 1876 >> 2] = 0;
 c[(f + 5592 | 0) + 1864 >> 2] = 0;
 c[(f + 5592 | 0) + 1852 >> 2] = 0;
 c[(f + 5592 | 0) + 1840 >> 2] = 0;
 c[(f + 5592 | 0) + 1828 >> 2] = 0;
 c[(f + 5592 | 0) + 1816 >> 2] = 0;
 c[(f + 5592 | 0) + 1804 >> 2] = 0;
 c[(f + 5592 | 0) + 1792 >> 2] = 0;
 c[(f + 5592 | 0) + 1768 >> 2] = 0;
 c[(f + 5592 | 0) + 1684 >> 2] = 0;
 c[(f + 5592 | 0) + 1672 >> 2] = 0;
 c[(f + 5592 | 0) + 1660 >> 2] = 0;
 c[(f + 5592 | 0) + 1648 >> 2] = 0;
 c[(f + 5592 | 0) + 1636 >> 2] = 0;
 c[(f + 5592 | 0) + 1624 >> 2] = 0;
 c[(f + 5592 | 0) + 1612 >> 2] = 0;
 c[(f + 5592 | 0) + 1600 >> 2] = 0;
 c[(f + 5592 | 0) + 1588 >> 2] = 0;
 c[(f + 5592 | 0) + 1576 >> 2] = 0;
 c[(f + 5592 | 0) + 1564 >> 2] = 0;
 c[(f + 5592 | 0) + 1552 >> 2] = 0;
 c[(f + 5592 | 0) + 1540 >> 2] = 0;
 c[(f + 5592 | 0) + 1528 >> 2] = 0;
 c[(f + 5592 | 0) + 1516 >> 2] = 0;
 c[(f + 5592 | 0) + 1504 >> 2] = 0;
 c[(f + 5592 | 0) + 1480 >> 2] = 0;
 c[(f + 5592 | 0) + 1396 >> 2] = 0;
 c[(f + 5592 | 0) + 1384 >> 2] = 0;
 c[(f + 5592 | 0) + 1372 >> 2] = 0;
 c[(f + 5592 | 0) + 1360 >> 2] = 0;
 c[(f + 5592 | 0) + 1348 >> 2] = 0;
 c[(f + 5592 | 0) + 1336 >> 2] = 0;
 c[(f + 5592 | 0) + 1324 >> 2] = 0;
 c[(f + 5592 | 0) + 1312 >> 2] = 0;
 c[(f + 5592 | 0) + 1300 >> 2] = 0;
 c[(f + 5592 | 0) + 1288 >> 2] = 0;
 c[(f + 5592 | 0) + 1276 >> 2] = 0;
 c[(f + 5592 | 0) + 1264 >> 2] = 0;
 c[(f + 5592 | 0) + 1252 >> 2] = 0;
 c[(f + 5592 | 0) + 1240 >> 2] = 0;
 c[(f + 5592 | 0) + 1228 >> 2] = 0;
 c[(f + 5592 | 0) + 1216 >> 2] = 0;
 c[(f + 5592 | 0) + 1192 >> 2] = 0;
 c[(f + 5592 | 0) + 1108 >> 2] = 0;
 c[(f + 5592 | 0) + 1096 >> 2] = 0;
 c[(f + 5592 | 0) + 1084 >> 2] = 0;
 c[(f + 5592 | 0) + 1072 >> 2] = 0;
 c[(f + 5592 | 0) + 1060 >> 2] = 0;
 c[(f + 5592 | 0) + 1048 >> 2] = 0;
 c[(f + 5592 | 0) + 1036 >> 2] = 0;
 c[(f + 5592 | 0) + 1024 >> 2] = 0;
 c[(f + 5592 | 0) + 1012 >> 2] = 0;
 c[(f + 5592 | 0) + 1e3 >> 2] = 0;
 c[(f + 5592 | 0) + 988 >> 2] = 0;
 c[(f + 5592 | 0) + 976 >> 2] = 0;
 c[(f + 5592 | 0) + 964 >> 2] = 0;
 c[(f + 5592 | 0) + 952 >> 2] = 0;
 c[(f + 5592 | 0) + 940 >> 2] = 0;
 c[(f + 5592 | 0) + 928 >> 2] = 0;
 c[(f + 5592 | 0) + 904 >> 2] = 0;
 c[(f + 5592 | 0) + 820 >> 2] = 0;
 c[(f + 5592 | 0) + 808 >> 2] = 0;
 c[(f + 5592 | 0) + 796 >> 2] = 0;
 c[(f + 5592 | 0) + 784 >> 2] = 0;
 c[(f + 5592 | 0) + 772 >> 2] = 0;
 c[(f + 5592 | 0) + 760 >> 2] = 0;
 c[(f + 5592 | 0) + 748 >> 2] = 0;
 c[(f + 5592 | 0) + 736 >> 2] = 0;
 c[(f + 5592 | 0) + 724 >> 2] = 0;
 c[(f + 5592 | 0) + 712 >> 2] = 0;
 c[(f + 5592 | 0) + 700 >> 2] = 0;
 c[(f + 5592 | 0) + 688 >> 2] = 0;
 c[(f + 5592 | 0) + 676 >> 2] = 0;
 c[(f + 5592 | 0) + 664 >> 2] = 0;
 c[(f + 5592 | 0) + 652 >> 2] = 0;
 c[(f + 5592 | 0) + 640 >> 2] = 0;
 c[(f + 5592 | 0) + 616 >> 2] = 0;
 c[(f + 5592 | 0) + 532 >> 2] = 0;
 c[(f + 5592 | 0) + 520 >> 2] = 0;
 c[(f + 5592 | 0) + 508 >> 2] = 0;
 c[(f + 5592 | 0) + 496 >> 2] = 0;
 c[(f + 5592 | 0) + 484 >> 2] = 0;
 c[(f + 5592 | 0) + 472 >> 2] = 0;
 c[(f + 5592 | 0) + 460 >> 2] = 0;
 c[(f + 5592 | 0) + 448 >> 2] = 0;
 c[(f + 5592 | 0) + 436 >> 2] = 0;
 c[(f + 5592 | 0) + 424 >> 2] = 0;
 c[(f + 5592 | 0) + 412 >> 2] = 0;
 c[(f + 5592 | 0) + 400 >> 2] = 0;
 c[(f + 5592 | 0) + 388 >> 2] = 0;
 c[(f + 5592 | 0) + 376 >> 2] = 0;
 c[(f + 5592 | 0) + 364 >> 2] = 0;
 c[(f + 5592 | 0) + 352 >> 2] = 0;
 c[(f + 5592 | 0) + 328 >> 2] = 0;
 Sc((f + 5592 | 0) + 16 | 0);
 c[(f + 5592 | 0) >> 2] = 0;
 Bd(f + 736 | 0, (f + 1088 | 0) + 8 | 0, f + 1072 | 0);
 L = c[((f + 736 | 0) + 8 | 0) >> 2] | 0;
 M = e[((f + 736 | 0) + 8 | 0) + 4 >> 1] | 0;
 K = Df(c[((f + 1280 | 0) + 28 | 0) >> 2] | 0, 0, 31) | 0;
 M = D & 15 | M & 65024;
 Df(c[((f + 1280 | 0) + 32 | 0) >> 2] | 0, 0, 36) | 0;
 c[((f + 736 | 0) + 8 | 0) >> 2] = K & -2147483648 | L & 2147483647;
 b[((f + 736 | 0) + 8 | 0) + 4 >> 1] = D & 496 | M;
 zd(f + 5584 | 0, (c[8946] | 0) + 1168 | 0, f + 736 | 0);
 if ((x + 56 | 0 | 0) != (f + 5584 | 0 | 0)) {
  M = c[(f + 5584 | 0) + 4 >> 2] | 0;
  c[(x + 56 | 0) >> 2] = c[(f + 5584 | 0) >> 2];
  c[(x + 56 | 0) + 4 >> 2] = M;
 }
 M = c[(f + 1064 | 0) + 4 >> 2] | 0;
 c[((f + 736 | 0) + 320 | 0) >> 2] = c[(f + 1064 | 0) >> 2];
 c[((f + 736 | 0) + 320 | 0) + 4 >> 2] = M;
 b[((f + 736 | 0) + 40 | 0) >> 1] = b[((f + 736 | 0) + 40 | 0) >> 1] | 4;
 zd(f + 5576 | 0, (c[8946] | 0) + 1168 | 0, f + 736 | 0);
 if ((x + 224 | 0 | 0) != (f + 5576 | 0 | 0)) {
  M = c[(f + 5576 | 0) + 4 >> 2] | 0;
  c[(x + 224 | 0) >> 2] = c[(f + 5576 | 0) >> 2];
  c[(x + 224 | 0) + 4 >> 2] = M;
 };
 c[(f + 720 | 0) >> 2] = 0;
 c[(f + 720 | 0) + 4 >> 2] = 0;
 c[(f + 720 | 0) + 8 >> 2] = 0;
 a[(f + 200 | 0) + 2 >> 0] = 17;
 a[(f + 200 | 0) + 3 >> 0] = 13;
 a[((f + 200 | 0) + 4 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 5 >> 0] = 13;
 a[((f + 200 | 0) + 6 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 7 >> 0] = 13;
 a[((f + 200 | 0) + 8 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 9 >> 0] = 13;
 a[((f + 200 | 0) + 10 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 11 >> 0] = 13;
 a[((f + 200 | 0) + 12 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 13 >> 0] = 13;
 a[((f + 200 | 0) + 14 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 15 >> 0] = 13;
 a[((f + 200 | 0) + 16 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 17 >> 0] = 13;
 a[((f + 200 | 0) + 18 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 19 >> 0] = 13;
 a[((f + 200 | 0) + 20 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 21 >> 0] = 13;
 a[((f + 200 | 0) + 22 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 23 >> 0] = 13;
 a[((f + 200 | 0) + 24 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 25 >> 0] = 13;
 a[((f + 200 | 0) + 26 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 27 >> 0] = 13;
 a[((f + 200 | 0) + 28 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 29 >> 0] = 13;
 a[((f + 200 | 0) + 30 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 31 >> 0] = 13;
 a[((f + 200 | 0) + 32 | 0) >> 0] = 17;
 a[(f + 200 | 0) + 33 >> 0] = 13;
 a[(f + 200 | 0) >> 0] = 0;
 a[(f + 200 | 0) + 1 >> 0] = 1;
 J = (f + 200 | 0) + 66 | 0;
 a[J >> 0] = 0;
 l = (f + 200 | 0) + 67 | 0;
 a[l >> 0] = 0;
 K = (f + 200 | 0) + 50 | 0;
 L = (f + 200 | 0) + 34 | 0;
 b[K >> 1] = 65535;
 b[K + 2 >> 1] = 65535;
 b[K + 4 >> 1] = 65535;
 b[K + 6 >> 1] = 65535;
 b[K + 8 >> 1] = 65535;
 b[K + 10 >> 1] = 65535;
 b[K + 12 >> 1] = 65535;
 b[K + 14 >> 1] = 65535;
 b[L >> 1] = 0;
 b[L + 2 >> 1] = 0;
 b[L + 4 >> 1] = 0;
 b[L + 6 >> 1] = 0;
 b[L + 8 >> 1] = 0;
 b[L + 10 >> 1] = 0;
 b[L + 12 >> 1] = 0;
 b[L + 14 >> 1] = 0;
 a[((f + 200 | 0) + 68 | 0) >> 0] = 0;
 w = (f + 200 | 0) + 72 | 0;
 c[w >> 2] = 0;
 c[w + 4 >> 2] = 0;
 c[w + 8 >> 2] = 0;
 c[w + 12 >> 2] = 0;
 c[w + 16 >> 2] = 0;
 c[w + 20 >> 2] = 0;
 c[w + 24 >> 2] = 0;
 c[w + 28 >> 2] = 0;
 g[((f + 200 | 0) + 80 | 0) >> 2] = 1.0;
 m = (f + 200 | 0) + 84 | 0;
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 c[m + 12 >> 2] = 0;
 g[((f + 200 | 0) + 100 | 0) >> 2] = 1.0;
 n = (f + 200 | 0) + 104 | 0;
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 c[n + 12 >> 2] = 0;
 g[((f + 200 | 0) + 120 | 0) >> 2] = 1.0;
 o = (f + 200 | 0) + 124 | 0;
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 c[o + 12 >> 2] = 0;
 g[((f + 200 | 0) + 140 | 0) >> 2] = 1.0;
 g[(f + 200 | 0) + 144 >> 2] = 1.0;
 g[(f + 200 | 0) + 148 >> 2] = 1.0;
 g[(f + 200 | 0) + 152 >> 2] = 1.0;
 g[(f + 200 | 0) + 156 >> 2] = 1.0;
 v = (f + 200 | 0) + 160 | 0;
 c[v >> 2] = 0;
 c[v + 4 >> 2] = 0;
 c[v + 8 >> 2] = 0;
 c[v + 12 >> 2] = 0;
 c[((f + 200 | 0) + 176 | 0) >> 2] = 16;
 c[((f + 200 | 0) + 180 | 0) >> 2] = 65536;
 c[(f + 200 | 0) + 184 >> 2] = 0;
 c[(f + 200 | 0) + 188 >> 2] = 0;
 c[(f + 200 | 0) + 192 >> 2] = 1;
 a[(f + 200 | 0) + 198 >> 0] = 17;
 a[(f + 200 | 0) + 199 >> 0] = 13;
 a[(f + 200 | 0) + 200 >> 0] = 17;
 a[(f + 200 | 0) + 201 >> 0] = 13;
 a[(f + 200 | 0) + 202 >> 0] = 17;
 a[(f + 200 | 0) + 203 >> 0] = 13;
 a[(f + 200 | 0) + 204 >> 0] = 17;
 a[(f + 200 | 0) + 205 >> 0] = 13;
 a[(f + 200 | 0) + 206 >> 0] = 17;
 a[(f + 200 | 0) + 207 >> 0] = 13;
 a[(f + 200 | 0) + 208 >> 0] = 17;
 a[(f + 200 | 0) + 209 >> 0] = 13;
 a[(f + 200 | 0) + 210 >> 0] = 17;
 a[(f + 200 | 0) + 211 >> 0] = 13;
 a[(f + 200 | 0) + 212 >> 0] = 17;
 a[(f + 200 | 0) + 213 >> 0] = 13;
 a[(f + 200 | 0) + 214 >> 0] = 17;
 a[(f + 200 | 0) + 215 >> 0] = 13;
 a[(f + 200 | 0) + 216 >> 0] = 17;
 a[(f + 200 | 0) + 217 >> 0] = 13;
 a[(f + 200 | 0) + 218 >> 0] = 17;
 a[(f + 200 | 0) + 219 >> 0] = 13;
 a[(f + 200 | 0) + 220 >> 0] = 17;
 a[(f + 200 | 0) + 221 >> 0] = 13;
 a[(f + 200 | 0) + 222 >> 0] = 17;
 a[(f + 200 | 0) + 223 >> 0] = 13;
 a[(f + 200 | 0) + 224 >> 0] = 17;
 a[(f + 200 | 0) + 225 >> 0] = 13;
 a[(f + 200 | 0) + 226 >> 0] = 17;
 a[(f + 200 | 0) + 227 >> 0] = 13;
 a[(f + 200 | 0) + 228 >> 0] = 17;
 a[(f + 200 | 0) + 229 >> 0] = 13;
 a[(f + 200 | 0) + 196 >> 0] = 0;
 a[(f + 200 | 0) + 197 >> 0] = 1;
 a[(f + 200 | 0) + 262 >> 0] = 0;
 a[(f + 200 | 0) + 263 >> 0] = 0;
 H = (f + 200 | 0) + 246 | 0;
 M = (f + 200 | 0) + 230 | 0;
 b[H >> 1] = 65535;
 b[H + 2 >> 1] = 65535;
 b[H + 4 >> 1] = 65535;
 b[H + 6 >> 1] = 65535;
 b[H + 8 >> 1] = 65535;
 b[H + 10 >> 1] = 65535;
 b[H + 12 >> 1] = 65535;
 b[H + 14 >> 1] = 65535;
 b[M >> 1] = 0;
 b[M + 2 >> 1] = 0;
 b[M + 4 >> 1] = 0;
 b[M + 6 >> 1] = 0;
 b[M + 8 >> 1] = 0;
 b[M + 10 >> 1] = 0;
 b[M + 12 >> 1] = 0;
 b[M + 14 >> 1] = 0;
 M = (f + 200 | 0) + 264 | 0;
 c[M >> 2] = 0;
 c[M + 4 >> 2] = 0;
 c[M + 8 >> 2] = 0;
 c[M + 12 >> 2] = 0;
 c[((f + 200 | 0) + 280 | 0) >> 2] = 16;
 c[((f + 200 | 0) + 284 | 0) >> 2] = 65536;
 c[(f + 200 | 0) + 288 >> 2] = 0;
 c[(f + 200 | 0) + 292 >> 2] = 0;
 c[(f + 200 | 0) + 296 >> 2] = -1;
 c[(f + 200 | 0) + 300 >> 2] = -1;
 a[(f + 200 | 0) + 306 >> 0] = 17;
 a[(f + 200 | 0) + 307 >> 0] = 13;
 a[(f + 200 | 0) + 308 >> 0] = 17;
 a[(f + 200 | 0) + 309 >> 0] = 13;
 a[(f + 200 | 0) + 310 >> 0] = 17;
 a[(f + 200 | 0) + 311 >> 0] = 13;
 a[(f + 200 | 0) + 312 >> 0] = 17;
 a[(f + 200 | 0) + 313 >> 0] = 13;
 a[(f + 200 | 0) + 314 >> 0] = 17;
 a[(f + 200 | 0) + 315 >> 0] = 13;
 a[(f + 200 | 0) + 316 >> 0] = 17;
 a[(f + 200 | 0) + 317 >> 0] = 13;
 a[(f + 200 | 0) + 318 >> 0] = 17;
 a[(f + 200 | 0) + 319 >> 0] = 13;
 a[(f + 200 | 0) + 320 >> 0] = 17;
 a[(f + 200 | 0) + 321 >> 0] = 13;
 a[(f + 200 | 0) + 322 >> 0] = 17;
 a[(f + 200 | 0) + 323 >> 0] = 13;
 a[(f + 200 | 0) + 324 >> 0] = 17;
 a[(f + 200 | 0) + 325 >> 0] = 13;
 a[(f + 200 | 0) + 326 >> 0] = 17;
 a[(f + 200 | 0) + 327 >> 0] = 13;
 a[(f + 200 | 0) + 328 >> 0] = 17;
 a[(f + 200 | 0) + 329 >> 0] = 13;
 a[(f + 200 | 0) + 330 >> 0] = 17;
 a[(f + 200 | 0) + 331 >> 0] = 13;
 a[(f + 200 | 0) + 332 >> 0] = 17;
 a[(f + 200 | 0) + 333 >> 0] = 13;
 a[(f + 200 | 0) + 334 >> 0] = 17;
 a[(f + 200 | 0) + 335 >> 0] = 13;
 a[(f + 200 | 0) + 336 >> 0] = 17;
 a[(f + 200 | 0) + 337 >> 0] = 13;
 a[(f + 200 | 0) + 304 >> 0] = 0;
 a[(f + 200 | 0) + 305 >> 0] = 1;
 a[(f + 200 | 0) + 370 >> 0] = 0;
 a[(f + 200 | 0) + 371 >> 0] = 0;
 H = (f + 200 | 0) + 354 | 0;
 G = (f + 200 | 0) + 338 | 0;
 b[H >> 1] = 65535;
 b[H + 2 >> 1] = 65535;
 b[H + 4 >> 1] = 65535;
 b[H + 6 >> 1] = 65535;
 b[H + 8 >> 1] = 65535;
 b[H + 10 >> 1] = 65535;
 b[H + 12 >> 1] = 65535;
 b[H + 14 >> 1] = 65535;
 b[G >> 1] = 0;
 b[G + 2 >> 1] = 0;
 b[G + 4 >> 1] = 0;
 b[G + 6 >> 1] = 0;
 b[G + 8 >> 1] = 0;
 b[G + 10 >> 1] = 0;
 b[G + 12 >> 1] = 0;
 b[G + 14 >> 1] = 0;
 c[((f + 200 | 0) + 372 | 0) >> 2] = 0;
 c[((f + 200 | 0) + 372 | 0) + 4 >> 2] = 0;
 c[((f + 200 | 0) + 372 | 0) + 8 >> 2] = 0;
 a[((f + 200 | 0) + 372 | 0) + 12 >> 0] = 0;
 c[(f + 12528 | 0) >> 2] = 0;
 Be((f + 200 | 0) + 388 | 0, f + 12528 | 0);
 c[(f + 200 | 0) + 392 >> 2] = -1;
 c[((f + 200 | 0) + 400 | 0) >> 2] = -1;
 c[((f + 200 | 0) + 400 | 0) + 4 >> 2] = -1;
 c[(f + 200 | 0) + 408 >> 2] = 0;
 c[(f + 200 | 0) + 412 >> 2] = -1;
 G = (f + 200 | 0) + 416 | 0;
 H = G + 68 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 a[((f + 200 | 0) + 484 | 0) >> 0] = a[((f + 200 | 0) + 484 | 0) >> 0] & -16;
 c[((f + 200 | 0) + 488 | 0) >> 2] = 0;
 c[((f + 200 | 0) + 492 | 0) >> 2] = 0;
 c[((f + 200 | 0) + 496 | 0) >> 2] = 0;
 a[(f + 200 | 0) + 504 >> 0] = 0;
 c[(f + 200 | 0) + 508 >> 2] = 0;
 c[(f + 200 | 0) + 512 >> 2] = 0;
 c[(f + 200 | 0) + 516 >> 2] = 0;
 a[((f + 200 | 0) + 68 | 0) >> 0] = 1;
 b[(f + 200 | 0) + 2 + (a[J >> 0] << 1) >> 1] = 512;
 r = b[J >> 1] | 0;
 a[K >> 0] = r & 255;
 a[((r & 255) << 24 >> 24) + ((f + 200 | 0) + 34) >> 0] = (r & 65535) >>> 8;
 a[l >> 0] = (d[l >> 0] | 0) + 12;
 r = (a[J >> 0] | 0) + 1 << 24 >> 24;
 a[J >> 0] = r;
 b[(f + 200 | 0) + 2 + (r << 24 >> 24 << 1) >> 1] = 778;
 r = b[J >> 1] | 0;
 a[((f + 200 | 0) + 60 | 0) >> 0] = r & 255;
 a[((r & 255) << 24 >> 24) + ((f + 200 | 0) + 34) >> 0] = (r & 65535) >>> 8;
 a[l >> 0] = (d[l >> 0] | 0) + 16;
 a[J >> 0] = (a[J >> 0] | 0) + 1 << 24 >> 24;
 g[((f + 200 | 0) + 80 | 0) >> 2] = .9999999403953552;
 g[m >> 2] = 0.0;
 g[(f + 200 | 0) + 88 >> 2] = 0.0;
 g[(f + 200 | 0) + 92 >> 2] = 0.0;
 g[(f + 200 | 0) + 96 >> 2] = 0.0;
 g[((f + 200 | 0) + 100 | 0) >> 2] = -4.371138828673793e-08;
 g[n >> 2] = 1.0;
 g[(f + 200 | 0) + 108 >> 2] = 0.0;
 g[(f + 200 | 0) + 112 >> 2] = 0.0;
 g[(f + 200 | 0) + 116 >> 2] = -1.0;
 g[((f + 200 | 0) + 120 | 0) >> 2] = -4.371138828673793e-08;
 g[o >> 2] = 0.0;
 c[((f + 200 | 0) + 128 | 0) >> 2] = c[(f + 720 | 0) >> 2];
 c[((f + 200 | 0) + 128 | 0) + 4 >> 2] = c[(f + 720 | 0) + 4 >> 2];
 c[((f + 200 | 0) + 128 | 0) + 8 >> 2] = c[(f + 720 | 0) + 8 >> 2];
 g[((f + 200 | 0) + 140 | 0) >> 2] = 1.0;
 c[(f + 12528 | 0) >> 2] = c[((f + 200 | 0) + 84 | 0) >> 2];
 c[(f + 12528 | 0) + 4 >> 2] = c[((f + 200 | 0) + 84 | 0) + 4 >> 2];
 c[(f + 12528 | 0) + 8 >> 2] = c[((f + 200 | 0) + 84 | 0) + 8 >> 2];
 c[(f + 12528 | 0) + 12 >> 2] = c[((f + 200 | 0) + 84 | 0) + 12 >> 2];
 r = c[((f + 200 | 0) + 104 | 0) >> 2] | 0;
 s = c[((f + 200 | 0) + 104 | 0) + 4 >> 2] | 0;
 t = c[((f + 200 | 0) + 112 | 0) >> 2] | 0;
 u = c[((f + 200 | 0) + 112 | 0) + 4 >> 2] | 0;
 c[(f + 12456 | 0) >> 2] = c[((f + 200 | 0) + 124 | 0) >> 2];
 c[(f + 12456 | 0) + 4 >> 2] = c[((f + 200 | 0) + 124 | 0) + 4 >> 2];
 c[(f + 12456 | 0) + 8 >> 2] = c[((f + 200 | 0) + 124 | 0) + 8 >> 2];
 c[(f + 12456 | 0) + 12 >> 2] = c[((f + 200 | 0) + 124 | 0) + 12 >> 2];
 c[(f + 12384 | 0) >> 2] = c[((f + 200 | 0) + 144 | 0) >> 2];
 c[(f + 12384 | 0) + 4 >> 2] = c[((f + 200 | 0) + 144 | 0) + 4 >> 2];
 c[(f + 12384 | 0) + 8 >> 2] = c[((f + 200 | 0) + 144 | 0) + 8 >> 2];
 c[(f + 12384 | 0) + 12 >> 2] = c[((f + 200 | 0) + 144 | 0) + 12 >> 2];
 l = c[((f + 200 | 0) + 164 | 0) >> 2] | 0;
 m = c[((f + 200 | 0) + 172 | 0) >> 2] | 0;
 do if ((l | 0) == (m | 0)) {
  m = c[((f + 200 | 0) + 176 | 0) >> 2] | 0;
  if ((l >> 1 | 0) >= (m | 0)) {
   m = c[((f + 200 | 0) + 180 | 0) >> 2] | 0;
   m = (l >> 1 | 0) > (m | 0) ? m : l >> 1;
  }
  q = m + l | 0;
  if (!m) break;
  l = l - (c[((f + 200 | 0) + 168 | 0) >> 2] | 0) | 0;
  p = bf(q * 112 | 0) | 0;
  if ((l | 0) > 0) {
   m = p;
   n = 0;
   o = (c[v >> 2] | 0) + ((c[((f + 200 | 0) + 168 | 0) >> 2] | 0) * 112 | 0) | 0;
   while (1) {
    G = m;
    m = m + 112 | 0;
    O = o;
    H = G + 112 | 0;
    do {
     c[G >> 2] = c[O >> 2];
     G = G + 4 | 0;
     O = O + 4 | 0;
    } while ((G | 0) < (H | 0));
    n = n + 1 | 0;
    if ((n | 0) == (l | 0)) break; else o = o + 112 | 0;
   }
  }
  m = c[v >> 2] | 0;
  if (m | 0) cf(m);
  c[v >> 2] = p;
  c[((f + 200 | 0) + 164 | 0) >> 2] = q;
  c[((f + 200 | 0) + 168 | 0) >> 2] = 0;
  c[((f + 200 | 0) + 172 | 0) >> 2] = l;
 } else l = m; while (0);
 c[((f + 200 | 0) + 172 | 0) >> 2] = l + 1;
 m = c[v >> 2] | 0;
 c[m + (l * 112 | 0) >> 2] = 2;
 c[m + (l * 112 | 0) + 4 >> 2] = 1065353215;
 H = m + (l * 112 | 0) + 8 | 0;
 c[H >> 2] = c[(f + 12528 | 0) >> 2];
 c[H + 4 >> 2] = c[(f + 12528 | 0) + 4 >> 2];
 c[H + 8 >> 2] = c[(f + 12528 | 0) + 8 >> 2];
 c[H + 12 >> 2] = c[(f + 12528 | 0) + 12 >> 2];
 c[m + (l * 112 | 0) + 24 >> 2] = -1287930578;
 H = m + (l * 112 | 0) + 28 | 0;
 c[H >> 2] = r;
 c[H + 4 >> 2] = s;
 r = m + (l * 112 | 0) + 36 | 0;
 c[r >> 2] = t;
 c[r + 4 >> 2] = u;
 c[m + (l * 112 | 0) + 44 >> 2] = -1287930578;
 r = m + (l * 112 | 0) + 48 | 0;
 c[r >> 2] = c[(f + 12456 | 0) >> 2];
 c[r + 4 >> 2] = c[(f + 12456 | 0) + 4 >> 2];
 c[r + 8 >> 2] = c[(f + 12456 | 0) + 8 >> 2];
 c[r + 12 >> 2] = c[(f + 12456 | 0) + 12 >> 2];
 c[m + (l * 112 | 0) + 64 >> 2] = 1065353216;
 g[m + (l * 112 | 0) + 68 >> 2] = .05000000074505806;
 r = m + (l * 112 | 0) + 72 | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[m + (l * 112 | 0) + 80 >> 2] = 3;
 c[m + (l * 112 | 0) + 84 >> 2] = 2;
 r = m + (l * 112 | 0) + 88 | 0;
 c[r >> 2] = c[(f + 12384 | 0) >> 2];
 c[r + 4 >> 2] = c[(f + 12384 | 0) + 4 >> 2];
 c[r + 8 >> 2] = c[(f + 12384 | 0) + 8 >> 2];
 c[r + 12 >> 2] = c[(f + 12384 | 0) + 12 >> 2];
 c[m + (l * 112 | 0) + 104 >> 2] = 12;
 c[m + (l * 112 | 0) + 108 >> 2] = 6;
 r = (c[((f + 200 | 0) + 76 | 0) >> 2] | 0) + 18 | 0;
 c[((f + 200 | 0) + 76 | 0) >> 2] = r;
 s = c[w >> 2] | 0;
 l = c[((f + 200 | 0) + 268 | 0) >> 2] | 0;
 m = c[((f + 200 | 0) + 276 | 0) >> 2] | 0;
 do if ((l | 0) == (m | 0)) {
  m = c[((f + 200 | 0) + 280 | 0) >> 2] | 0;
  if ((l >> 1 | 0) >= (m | 0)) {
   m = c[((f + 200 | 0) + 284 | 0) >> 2] | 0;
   m = (l >> 1 | 0) > (m | 0) ? m : l >> 1;
  }
  q = m + l | 0;
  if (!m) break;
  l = l - (c[((f + 200 | 0) + 272 | 0) >> 2] | 0) | 0;
  p = bf(q << 3) | 0;
  if ((l | 0) > 0) {
   m = p;
   n = 0;
   o = (c[M >> 2] | 0) + (c[((f + 200 | 0) + 272 | 0) >> 2] << 3) | 0;
   while (1) {
    v = o;
    G = c[v + 4 >> 2] | 0;
    H = m;
    c[H >> 2] = c[v >> 2];
    c[H + 4 >> 2] = G;
    n = n + 1 | 0;
    if ((n | 0) == (l | 0)) break; else {
     m = m + 8 | 0;
     o = o + 8 | 0;
    }
   }
  }
  m = c[M >> 2] | 0;
  if (m | 0) cf(m);
  c[M >> 2] = p;
  c[((f + 200 | 0) + 268 | 0) >> 2] = q;
  c[((f + 200 | 0) + 272 | 0) >> 2] = 0;
  c[((f + 200 | 0) + 276 | 0) >> 2] = l;
 } else l = m; while (0);
 c[((f + 200 | 0) + 276 | 0) >> 2] = l + 1;
 H = (c[M >> 2] | 0) + (l << 3) | 0;
 c[H >> 2] = s;
 c[H + 4 >> 2] = r;
 c[w >> 2] = (c[w >> 2] | 0) + (c[((f + 200 | 0) + 76 | 0) >> 2] | 0);
 c[((f + 200 | 0) + 76 | 0) >> 2] = 0;
 Ud(f + 5360 | 0, f + 200 | 0);
 vd(f + 5568 | 0, (c[8946] | 0) + 1168 | 0, f + 5360 | 0, c[((f + 5360 | 0) + 200 | 0) >> 2] | 0);
 if ((x + 400 | 0 | 0) != (f + 5568 | 0 | 0)) {
  H = c[(f + 5568 | 0) + 4 >> 2] | 0;
  c[(x + 400 | 0) >> 2] = c[(f + 5568 | 0) >> 2];
  c[(x + 400 | 0) + 4 >> 2] = H;
 }
 l = c[((f + 5360 | 0) + 200 | 0) >> 2] | 0;
 if (l | 0) cf(l);
 c[((f + 5360 | 0) + 200 | 0) >> 2] = 0;
 c[(f + 5360 | 0) + 192 >> 2] = 0;
 c[(f + 5360 | 0) + 196 >> 2] = 0;
 c[(f + 5360 | 0) + 92 >> 2] = 0;
 m = bf(4194304) | 0;
 l = 0;
 do {
  g[m + (l << 2) >> 2] = +(l | 0);
  l = l + 1 | 0;
 } while ((l | 0) != 1048576);
 c[(f + 8 | 0) >> 2] = -1;
 c[((f + 8 | 0) + 4 | 0) >> 2] = -1;
 a[(f + 8 | 0) + 10 >> 0] = 17;
 a[(f + 8 | 0) + 11 >> 0] = 13;
 a[((f + 8 | 0) + 12 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 13 >> 0] = 13;
 a[((f + 8 | 0) + 14 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 15 >> 0] = 13;
 a[((f + 8 | 0) + 16 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 17 >> 0] = 13;
 a[((f + 8 | 0) + 18 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 19 >> 0] = 13;
 a[((f + 8 | 0) + 20 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 21 >> 0] = 13;
 a[((f + 8 | 0) + 22 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 23 >> 0] = 13;
 a[((f + 8 | 0) + 24 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 25 >> 0] = 13;
 a[((f + 8 | 0) + 26 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 27 >> 0] = 13;
 a[((f + 8 | 0) + 28 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 29 >> 0] = 13;
 a[((f + 8 | 0) + 30 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 31 >> 0] = 13;
 a[((f + 8 | 0) + 32 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 33 >> 0] = 13;
 a[((f + 8 | 0) + 34 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 35 >> 0] = 13;
 a[((f + 8 | 0) + 36 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 37 >> 0] = 13;
 a[((f + 8 | 0) + 38 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 39 >> 0] = 13;
 a[((f + 8 | 0) + 40 | 0) >> 0] = 17;
 a[(f + 8 | 0) + 41 >> 0] = 13;
 a[(f + 8 | 0) + 8 >> 0] = 0;
 a[((f + 8 | 0) + 9 | 0) >> 0] = 1;
 r = (f + 8 | 0) + 74 | 0;
 a[r >> 0] = 0;
 a[((f + 8 | 0) + 75 | 0) >> 0] = 0;
 s = (f + 8 | 0) + 58 | 0;
 t = (f + 8 | 0) + 42 | 0;
 b[s >> 1] = 65535;
 b[s + 2 >> 1] = 65535;
 b[s + 4 >> 1] = 65535;
 b[s + 6 >> 1] = 65535;
 b[s + 8 >> 1] = 65535;
 b[s + 10 >> 1] = 65535;
 b[s + 12 >> 1] = 65535;
 b[s + 14 >> 1] = 65535;
 b[t >> 1] = 0;
 b[t + 2 >> 1] = 0;
 b[t + 4 >> 1] = 0;
 b[t + 6 >> 1] = 0;
 b[t + 8 >> 1] = 0;
 b[t + 10 >> 1] = 0;
 b[t + 12 >> 1] = 0;
 b[t + 14 >> 1] = 0;
 l = (f + 8 | 0) + 76 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 a[l + 12 >> 0] = 0;
 c[(f + 12528 | 0) >> 2] = 0;
 Be((f + 8 | 0) + 92 | 0, f + 12528 | 0);
 c[(f + 8 | 0) + 96 >> 2] = -1;
 c[((f + 8 | 0) + 104 | 0) >> 2] = -1;
 c[((f + 8 | 0) + 104 | 0) + 4 >> 2] = -1;
 c[(f + 8 | 0) + 112 >> 2] = 0;
 c[(f + 8 | 0) + 116 >> 2] = -1;
 G = (f + 8 | 0) + 120 | 0;
 H = G + 68 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 w = a[((f + 8 | 0) + 188 | 0) >> 0] & -16;
 c[(f + 8 | 0) >> 2] = 0;
 c[((f + 8 | 0) + 4 | 0) >> 2] = 0;
 a[((f + 8 | 0) + 188 | 0) >> 0] = w | 2;
 c[l >> 2] = 1048576;
 a[((f + 8 | 0) + 8 | 0) >> 0] = 1;
 a[((f + 8 | 0) + 9 | 0) >> 0] = 1;
 b[(f + 8 | 0) + 10 + (a[r >> 0] << 1) >> 1] = 12;
 w = b[r >> 1] | 0;
 a[((f + 8 | 0) + 70 | 0) >> 0] = w & 255;
 a[((w & 255) << 24 >> 24) + ((f + 8 | 0) + 42) >> 0] = (w & 65535) >>> 8;
 a[((f + 8 | 0) + 75 | 0) >> 0] = (d[((f + 8 | 0) + 75 | 0) >> 0] | 0) + 4;
 a[r >> 0] = (a[r >> 0] | 0) + 1 << 24 >> 24;
 vd(f + 5352 | 0, (c[8946] | 0) + 1168 | 0, f + 8 | 0, m);
 if ((x + 408 | 0 | 0) != (f + 5352 | 0 | 0)) {
  w = c[(f + 5352 | 0) + 4 >> 2] | 0;
  c[(x + 408 | 0) >> 2] = c[(f + 5352 | 0) >> 2];
  c[(x + 408 | 0) + 4 >> 2] = w;
 }
 cf(m);
 Ae(f + 12456 | 0, 18990);
 c[(f + 12456 | 0) + 4 >> 2] = -2;
 Ed(f + 2304 | 0, f + 12456 | 0);
 c[(f + 12456 | 0) >> 2] = 0;
 a[((f + 12384 | 0) + 8 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 9 >> 0] = 13;
 a[((f + 12384 | 0) + 10 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 11 >> 0] = 13;
 a[((f + 12384 | 0) + 12 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 13 >> 0] = 13;
 a[((f + 12384 | 0) + 14 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 15 >> 0] = 13;
 a[((f + 12384 | 0) + 16 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 17 >> 0] = 13;
 a[((f + 12384 | 0) + 18 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 19 >> 0] = 13;
 a[((f + 12384 | 0) + 20 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 21 >> 0] = 13;
 a[((f + 12384 | 0) + 22 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 23 >> 0] = 13;
 a[((f + 12384 | 0) + 24 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 25 >> 0] = 13;
 a[((f + 12384 | 0) + 26 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 27 >> 0] = 13;
 a[((f + 12384 | 0) + 28 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 29 >> 0] = 13;
 a[((f + 12384 | 0) + 30 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 31 >> 0] = 13;
 a[((f + 12384 | 0) + 32 | 0) >> 0] = 17;
 a[(f + 12384 | 0) + 33 >> 0] = 13;
 a[(f + 12384 | 0) >> 0] = 0;
 a[(f + 12384 | 0) + 1 >> 0] = 1;
 p = (f + 12384 | 0) + 50 | 0;
 q = (f + 12384 | 0) + 34 | 0;
 b[p >> 1] = 65535;
 b[p + 2 >> 1] = 65535;
 b[p + 4 >> 1] = 65535;
 b[p + 6 >> 1] = 65535;
 b[p + 8 >> 1] = 65535;
 b[p + 10 >> 1] = 65535;
 b[p + 12 >> 1] = 65535;
 b[p + 14 >> 1] = 65535;
 b[q >> 1] = 0;
 b[q + 2 >> 1] = 0;
 b[q + 4 >> 1] = 0;
 b[q + 6 >> 1] = 0;
 b[q + 8 >> 1] = 0;
 b[q + 10 >> 1] = 0;
 b[q + 12 >> 1] = 0;
 b[q + 14 >> 1] = 0;
 b[(f + 12384 | 0) + 2 >> 1] = 768;
 a[p >> 0] = 0;
 a[q >> 0] = 0;
 b[(f + 12384 | 0) + 4 >> 1] = 778;
 a[((f + 12384 | 0) + 60 | 0) >> 0] = 1;
 a[(f + 12384 | 0) + 35 >> 0] = 16;
 b[(f + 12384 | 0) + 6 >> 1] = 12;
 a[((f + 12384 | 0) + 62 | 0) >> 0] = 2;
 a[((f + 12384 | 0) + 36 | 0) >> 0] = 32;
 a[(f + 12384 | 0) + 67 >> 0] = 36;
 a[((f + 12384 | 0) + 66 | 0) >> 0] = 3;
 a : do if (!1) {
  y = 2365;
  N = 661;
 } else {
  l = 2365;
  m = 2365;
  while (1) {
   if (!(a[l >> 0] | 0)) {
    z = m;
    break a;
   }
   l = l + 1 | 0;
   m = l;
   if (!(m & 3)) {
    y = l;
    N = 661;
    break;
   }
  }
 } while (0);
 if ((N | 0) == 661) {
  l = y;
  while (1) {
   m = c[l >> 2] | 0;
   if (!((m & -2139062144 ^ -2139062144) & m + -16843009)) l = l + 4 | 0; else break;
  }
  if ((m & 255) << 24 >> 24) do l = l + 1 | 0; while ((a[l >> 0] | 0) != 0);
  z = l;
 }
 l = z - 2365 | 0;
 if ((l | 0) > 0) {
  o = bf(l + 9 | 0) | 0;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o >> 2] = 0;
  c[o >> 2] = (c[o >> 2] | 0) + 1;
  c[o + 4 >> 2] = l;
  c[(f + 12376 | 0) >> 2] = o + 8 | 0;
  Af(o + 8 | 0 | 0, 2365, l | 0) | 0;
  a[(o + 8 | 0) + l >> 0] = 0;
 } else {
  c[(f + 12376 | 0) >> 2] = 0;
  o = 0;
 }
 b : do if (!2) {
  A = 7686;
  N = 672;
 } else {
  l = 7686;
  m = 7686;
  while (1) {
   if (!(a[l >> 0] | 0)) {
    B = m;
    break b;
   }
   l = l + 1 | 0;
   m = l;
   if (!(m & 3)) {
    A = l;
    N = 672;
    break;
   }
  }
 } while (0);
 if ((N | 0) == 672) {
  l = A;
  while (1) {
   m = c[l >> 2] | 0;
   if (!((m & -2139062144 ^ -2139062144) & m + -16843009)) l = l + 4 | 0; else break;
  }
  if ((m & 255) << 24 >> 24) do l = l + 1 | 0; while ((a[l >> 0] | 0) != 0);
  B = l;
 }
 l = B - 7686 | 0;
 if ((l | 0) > 0) {
  n = bf(l + 9 | 0) | 0;
  c[n >> 2] = 0;
  c[n + 4 >> 2] = 0;
  c[n >> 2] = 0;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
  c[n + 4 >> 2] = l;
  c[(f + 12368 | 0) >> 2] = n + 8 | 0;
  Af(n + 8 | 0 | 0, 7686, l | 0) | 0;
  a[(n + 8 | 0) + l >> 0] = 0;
 } else {
  c[(f + 12368 | 0) >> 2] = 0;
  n = 0;
 }
 m = (f + 2304 | 0) + 16 | 0;
 l = c[m >> 2] | 0;
 if (l | 0) {
  B = c[l >> 2] | 0;
  c[l >> 2] = B - 1;
  if ((B | 0) == 1) {
   cf(c[m >> 2] | 0);
   c[m >> 2] = 0;
   c[((f + 2304 | 0) + 20 | 0) >> 2] = 0;
   l = (f + 2304 | 0) + 20 | 0;
  } else l = (f + 2304 | 0) + 20 | 0;
  c[m >> 2] = 0;
  c[l >> 2] = 0;
 }
 c[m >> 2] = o;
 c[(f + 2304 | 0) + 20 >> 2] = c[(f + 12376 | 0) >> 2];
 if (o | 0) {
  B = o;
  c[B >> 2] = (c[B >> 2] | 0) + 1;
 }
 m = (f + 2304 | 0) + 56 | 0;
 l = c[m >> 2] | 0;
 if (l | 0) {
  B = c[l >> 2] | 0;
  c[l >> 2] = B - 1;
  if ((B | 0) == 1) {
   cf(c[m >> 2] | 0);
   c[m >> 2] = 0;
   c[((f + 2304 | 0) + 60 | 0) >> 2] = 0;
   l = (f + 2304 | 0) + 60 | 0;
  } else l = (f + 2304 | 0) + 60 | 0;
  c[m >> 2] = 0;
  c[l >> 2] = 0;
 }
 c[m >> 2] = n;
 c[(f + 2304 | 0) + 60 >> 2] = c[(f + 12368 | 0) >> 2];
 l = n;
 if (n | 0) c[l >> 2] = (c[l >> 2] | 0) + 1;
 b[((f + 2304 | 0) + 256 | 0) >> 1] = b[(f + 12384 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 258 | 0) >> 1] = b[((f + 12384 | 0) + 2 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 260 | 0) >> 1] = b[((f + 12384 | 0) + 4 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 262 | 0) >> 1] = b[((f + 12384 | 0) + 6 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 264 | 0) >> 1] = b[((f + 12384 | 0) + 8 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 266 | 0) >> 1] = b[((f + 12384 | 0) + 10 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 268 | 0) >> 1] = b[((f + 12384 | 0) + 12 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 270 | 0) >> 1] = b[((f + 12384 | 0) + 14 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 272 | 0) >> 1] = b[((f + 12384 | 0) + 16 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 274 | 0) >> 1] = b[((f + 12384 | 0) + 18 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 276 | 0) >> 1] = b[((f + 12384 | 0) + 20 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 278 | 0) >> 1] = b[((f + 12384 | 0) + 22 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 280 | 0) >> 1] = b[((f + 12384 | 0) + 24 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 282 | 0) >> 1] = b[((f + 12384 | 0) + 26 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 284 | 0) >> 1] = b[((f + 12384 | 0) + 28 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 286 | 0) >> 1] = b[((f + 12384 | 0) + 30 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 288 | 0) >> 1] = b[((f + 12384 | 0) + 32 | 0) >> 1] | 0;
 B = b[q >> 1] | 0;
 a[((f + 2304 | 0) + 290 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 291 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 36 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 292 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 293 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 38 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 294 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 295 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 40 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 296 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 297 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 42 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 298 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 299 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 44 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 300 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 301 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 46 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 302 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 303 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 48 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 304 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 305 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[p >> 1] | 0;
 a[((f + 2304 | 0) + 306 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 307 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 52 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 308 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 309 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 54 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 310 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 311 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 56 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 312 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 313 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 58 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 314 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 315 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 60 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 316 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 317 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 62 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 318 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 319 | 0) >> 0] = (B & 65535) >>> 8;
 B = b[((f + 12384 | 0) + 64 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 320 | 0) >> 0] = B;
 a[((f + 2304 | 0) + 321 | 0) >> 0] = (B & 65535) >>> 8;
 b[((f + 2304 | 0) + 322 | 0) >> 1] = b[((f + 12384 | 0) + 66 | 0) >> 1] | 0;
 if (n | 0) {
  B = c[l >> 2] | 0;
  c[l >> 2] = B - 1;
  if ((B | 0) == 1) {
   cf(n);
   c[(f + 12368 | 0) >> 2] = 0;
  }
  c[(f + 12368 | 0) >> 2] = 0;
 }
 if (o | 0) {
  A = o;
  B = c[A >> 2] | 0;
  c[A >> 2] = B - 1;
  if ((B | 0) == 1) {
   cf(o);
   c[(f + 12376 | 0) >> 2] = 0;
  }
  c[(f + 12376 | 0) >> 2] = 0;
 }
 c : do if (!0) {
  C = 8028;
  N = 705;
 } else {
  l = 8028;
  m = 8028;
  while (1) {
   if (!(a[l >> 0] | 0)) {
    k = m;
    break c;
   }
   l = l + 1 | 0;
   m = l;
   if (!(m & 3)) {
    C = l;
    N = 705;
    break;
   }
  }
 } while (0);
 if ((N | 0) == 705) {
  k = C;
  while (1) {
   l = c[k >> 2] | 0;
   if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) k = k + 4 | 0; else break;
  }
  if ((l & 255) << 24 >> 24) do k = k + 1 | 0; while ((a[k >> 0] | 0) != 0);
 }
 k = k - 8028 | 0;
 if ((k | 0) > 0) {
  m = bf(k + 9 | 0) | 0;
  c[m >> 2] = 0;
  c[m + 4 >> 2] = 0;
  c[m >> 2] = 0;
  c[m >> 2] = (c[m >> 2] | 0) + 1;
  c[m + 4 >> 2] = k;
  c[(f + 12352 | 0) >> 2] = m + 8 | 0;
  Af(m + 8 | 0 | 0, 8028, k | 0) | 0;
  a[(m + 8 | 0) + k >> 0] = 0;
 } else {
  c[(f + 12352 | 0) >> 2] = 0;
  m = 0;
 }
 d : do if (!3) {
  E = 13155;
  N = 716;
 } else {
  k = 13155;
  l = 13155;
  while (1) {
   if (!(a[k >> 0] | 0)) {
    j = l;
    break d;
   }
   k = k + 1 | 0;
   l = k;
   if (!(l & 3)) {
    E = k;
    N = 716;
    break;
   }
  }
 } while (0);
 if ((N | 0) == 716) {
  j = E;
  while (1) {
   k = c[j >> 2] | 0;
   if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) j = j + 4 | 0; else break;
  }
  if ((k & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
 }
 j = j - 13155 | 0;
 if ((j | 0) > 0) {
  l = bf(j + 9 | 0) | 0;
  c[l >> 2] = 0;
  c[l + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = j;
  c[(f + 12344 | 0) >> 2] = l + 8 | 0;
  Af(l + 8 | 0 | 0, 13155, j | 0) | 0;
  a[(l + 8 | 0) + j >> 0] = 0;
 } else {
  c[(f + 12344 | 0) >> 2] = 0;
  l = 0;
 }
 k = (f + 2304 | 0) + 24 | 0;
 j = c[k >> 2] | 0;
 if (j | 0) {
  E = c[j >> 2] | 0;
  c[j >> 2] = E - 1;
  if ((E | 0) == 1) {
   cf(c[k >> 2] | 0);
   c[k >> 2] = 0;
   c[((f + 2304 | 0) + 28 | 0) >> 2] = 0;
   j = (f + 2304 | 0) + 28 | 0;
  } else j = (f + 2304 | 0) + 28 | 0;
  c[k >> 2] = 0;
  c[j >> 2] = 0;
 }
 c[k >> 2] = m;
 c[(f + 2304 | 0) + 28 >> 2] = c[(f + 12352 | 0) >> 2];
 if (m | 0) {
  E = m;
  c[E >> 2] = (c[E >> 2] | 0) + 1;
 }
 k = (f + 2304 | 0) + 64 | 0;
 j = c[k >> 2] | 0;
 if (j | 0) {
  E = c[j >> 2] | 0;
  c[j >> 2] = E - 1;
  if ((E | 0) == 1) {
   cf(c[k >> 2] | 0);
   c[k >> 2] = 0;
   c[((f + 2304 | 0) + 68 | 0) >> 2] = 0;
   j = (f + 2304 | 0) + 68 | 0;
  } else j = (f + 2304 | 0) + 68 | 0;
  c[k >> 2] = 0;
  c[j >> 2] = 0;
 }
 c[k >> 2] = l;
 c[(f + 2304 | 0) + 68 >> 2] = c[(f + 12344 | 0) >> 2];
 j = l;
 if (l | 0) c[j >> 2] = (c[j >> 2] | 0) + 1;
 b[((f + 2304 | 0) + 256 | 0) >> 1] = b[(f + 12384 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 258 | 0) >> 1] = b[((f + 12384 | 0) + 2 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 260 | 0) >> 1] = b[((f + 12384 | 0) + 4 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 262 | 0) >> 1] = b[((f + 12384 | 0) + 6 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 264 | 0) >> 1] = b[((f + 12384 | 0) + 8 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 266 | 0) >> 1] = b[((f + 12384 | 0) + 10 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 268 | 0) >> 1] = b[((f + 12384 | 0) + 12 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 270 | 0) >> 1] = b[((f + 12384 | 0) + 14 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 272 | 0) >> 1] = b[((f + 12384 | 0) + 16 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 274 | 0) >> 1] = b[((f + 12384 | 0) + 18 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 276 | 0) >> 1] = b[((f + 12384 | 0) + 20 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 278 | 0) >> 1] = b[((f + 12384 | 0) + 22 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 280 | 0) >> 1] = b[((f + 12384 | 0) + 24 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 282 | 0) >> 1] = b[((f + 12384 | 0) + 26 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 284 | 0) >> 1] = b[((f + 12384 | 0) + 28 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 286 | 0) >> 1] = b[((f + 12384 | 0) + 30 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 288 | 0) >> 1] = b[((f + 12384 | 0) + 32 | 0) >> 1] | 0;
 E = b[q >> 1] | 0;
 a[((f + 2304 | 0) + 290 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 291 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 36 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 292 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 293 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 38 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 294 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 295 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 40 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 296 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 297 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 42 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 298 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 299 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 44 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 300 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 301 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 46 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 302 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 303 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 48 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 304 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 305 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[p >> 1] | 0;
 a[((f + 2304 | 0) + 306 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 307 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 52 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 308 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 309 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 54 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 310 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 311 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 56 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 312 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 313 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 58 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 314 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 315 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 60 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 316 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 317 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 62 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 318 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 319 | 0) >> 0] = (E & 65535) >>> 8;
 E = b[((f + 12384 | 0) + 64 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 320 | 0) >> 0] = E;
 a[((f + 2304 | 0) + 321 | 0) >> 0] = (E & 65535) >>> 8;
 b[((f + 2304 | 0) + 322 | 0) >> 1] = b[((f + 12384 | 0) + 66 | 0) >> 1] | 0;
 if (l | 0) {
  E = c[j >> 2] | 0;
  c[j >> 2] = E - 1;
  if ((E | 0) == 1) {
   cf(l);
   c[(f + 12344 | 0) >> 2] = 0;
  }
  c[(f + 12344 | 0) >> 2] = 0;
 }
 if (m | 0) {
  C = m;
  E = c[C >> 2] | 0;
  c[C >> 2] = E - 1;
  if ((E | 0) == 1) {
   cf(m);
   c[(f + 12352 | 0) >> 2] = 0;
  }
  c[(f + 12352 | 0) >> 2] = 0;
 }
 e : do if (!1) {
  F = 13485;
  N = 749;
 } else {
  j = 13485;
  k = 13485;
  while (1) {
   if (!(a[j >> 0] | 0)) {
    i = k;
    break e;
   }
   j = j + 1 | 0;
   k = j;
   if (!(k & 3)) {
    F = j;
    N = 749;
    break;
   }
  }
 } while (0);
 if ((N | 0) == 749) {
  i = F;
  while (1) {
   j = c[i >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) i = i + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do i = i + 1 | 0; while ((a[i >> 0] | 0) != 0);
 }
 i = i - 13485 | 0;
 if ((i | 0) > 0) {
  k = bf(i + 9 | 0) | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = i;
  c[(f + 12336 | 0) >> 2] = k + 8 | 0;
  Af(k + 8 | 0 | 0, 13485, i | 0) | 0;
  a[(k + 8 | 0) + i >> 0] = 0;
 } else {
  c[(f + 12336 | 0) >> 2] = 0;
  k = 0;
 }
 f : do if (!2) {
  I = 18582;
  N = 760;
 } else {
  i = 18582;
  j = 18582;
  while (1) {
   if (!(a[i >> 0] | 0)) {
    h = j;
    break f;
   }
   i = i + 1 | 0;
   j = i;
   if (!(j & 3)) {
    I = i;
    N = 760;
    break;
   }
  }
 } while (0);
 if ((N | 0) == 760) {
  h = I;
  while (1) {
   i = c[h >> 2] | 0;
   if (!((i & -2139062144 ^ -2139062144) & i + -16843009)) h = h + 4 | 0; else break;
  }
  if ((i & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 18582 | 0;
 if ((h | 0) > 0) {
  j = bf(h + 9 | 0) | 0;
  c[j >> 2] = 0;
  c[j + 4 >> 2] = 0;
  c[j >> 2] = 0;
  c[j >> 2] = (c[j >> 2] | 0) + 1;
  c[j + 4 >> 2] = h;
  c[(f + 12e3 | 0) >> 2] = j + 8 | 0;
  Af(j + 8 | 0 | 0, 18582, h | 0) | 0;
  a[(j + 8 | 0) + h >> 0] = 0;
 } else {
  c[(f + 12e3 | 0) >> 2] = 0;
  j = 0;
 }
 i = (f + 2304 | 0) + 32 | 0;
 h = c[i >> 2] | 0;
 if (h | 0) {
  I = c[h >> 2] | 0;
  c[h >> 2] = I - 1;
  if ((I | 0) == 1) {
   cf(c[i >> 2] | 0);
   c[i >> 2] = 0;
   c[((f + 2304 | 0) + 36 | 0) >> 2] = 0;
   h = (f + 2304 | 0) + 36 | 0;
  } else h = (f + 2304 | 0) + 36 | 0;
  c[i >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[i >> 2] = k;
 c[(f + 2304 | 0) + 36 >> 2] = c[(f + 12336 | 0) >> 2];
 if (k | 0) {
  I = k;
  c[I >> 2] = (c[I >> 2] | 0) + 1;
 }
 i = (f + 2304 | 0) + 72 | 0;
 h = c[i >> 2] | 0;
 if (h | 0) {
  I = c[h >> 2] | 0;
  c[h >> 2] = I - 1;
  if ((I | 0) == 1) {
   cf(c[i >> 2] | 0);
   c[i >> 2] = 0;
   c[((f + 2304 | 0) + 76 | 0) >> 2] = 0;
   h = (f + 2304 | 0) + 76 | 0;
  } else h = (f + 2304 | 0) + 76 | 0;
  c[i >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[i >> 2] = j;
 c[(f + 2304 | 0) + 76 >> 2] = c[(f + 12e3 | 0) >> 2];
 h = j;
 if (j | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 b[((f + 2304 | 0) + 256 | 0) >> 1] = b[(f + 12384 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 258 | 0) >> 1] = b[((f + 12384 | 0) + 2 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 260 | 0) >> 1] = b[((f + 12384 | 0) + 4 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 262 | 0) >> 1] = b[((f + 12384 | 0) + 6 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 264 | 0) >> 1] = b[((f + 12384 | 0) + 8 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 266 | 0) >> 1] = b[((f + 12384 | 0) + 10 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 268 | 0) >> 1] = b[((f + 12384 | 0) + 12 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 270 | 0) >> 1] = b[((f + 12384 | 0) + 14 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 272 | 0) >> 1] = b[((f + 12384 | 0) + 16 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 274 | 0) >> 1] = b[((f + 12384 | 0) + 18 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 276 | 0) >> 1] = b[((f + 12384 | 0) + 20 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 278 | 0) >> 1] = b[((f + 12384 | 0) + 22 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 280 | 0) >> 1] = b[((f + 12384 | 0) + 24 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 282 | 0) >> 1] = b[((f + 12384 | 0) + 26 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 284 | 0) >> 1] = b[((f + 12384 | 0) + 28 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 286 | 0) >> 1] = b[((f + 12384 | 0) + 30 | 0) >> 1] | 0;
 b[((f + 2304 | 0) + 288 | 0) >> 1] = b[((f + 12384 | 0) + 32 | 0) >> 1] | 0;
 I = b[q >> 1] | 0;
 a[((f + 2304 | 0) + 290 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 291 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 36 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 292 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 293 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 38 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 294 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 295 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 40 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 296 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 297 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 42 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 298 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 299 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 44 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 300 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 301 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 46 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 302 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 303 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 48 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 304 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 305 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[p >> 1] | 0;
 a[((f + 2304 | 0) + 306 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 307 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 52 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 308 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 309 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 54 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 310 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 311 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 56 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 312 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 313 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 58 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 314 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 315 | 0) >> 0] = (I & 65535) >>> 8;
 I = b[((f + 12384 | 0) + 60 | 0) >> 1] | 0;
 a[((f + 2304 | 0) + 316 | 0) >> 0] = I;
 a[((f + 2304 | 0) + 317 | 0) >> 0] = (I & 65535) >>> 8;
 c[f + 14592 >> 2] = h;
 c[f + 14704 >> 2] = j;
 c[f + 14712 >> 2] = k;
 c[f + 17672 >> 2] = J;
 c[f + 17688 >> 2] = K;
 c[f + 17696 >> 2] = L;
 c[f + 17768 >> 2] = M;
 c[f + 18160 >> 2] = r;
 c[f + 18168 >> 2] = s;
 c[f + 18176 >> 2] = t;
 c[f + 21912 >> 2] = G;
 c[f + 21928 >> 2] = O;
 c[f + 21936 >> 2] = H;
 c[f + 21944 >> 2] = N;
}
function Ad(d, f) {
 d = d | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 G = 0;
 O = i;
 i = i + 4624 | 0;
 j = c[(d + 40 | 0) >> 2] | 0;
 k = c[(d + 36 | 0) >> 2] | 0;
 l = (j - k | 0 | 0) < 256 ? j - k | 0 : 256;
 if ((l | 0) > 0) {
  m = bf(l << 3) | 0;
  j = c[(d + 40 | 0) >> 2] | 0;
  k = c[(d + 36 | 0) >> 2] | 0;
 } else {
  l = 0;
  m = 0;
 }
 j = j - k | 0;
 if ((j | 0) > 0) {
  r = m;
  y = 0;
  x = m;
  D = j;
  p = m;
  n = 0;
  while (1) {
   A = D;
   D = D + -1 | 0;
   if ((f | 0) == -2) {
    E = k + D | 0;
    F = c[(d + 28 | 0) >> 2] | 0;
    G = 9;
   } else {
    j = k + D | 0;
    m = c[(d + 28 | 0) >> 2] | 0;
    if ((c[m + (j * 24 | 0) + 16 >> 2] | 0) == (f | 0)) {
     E = j;
     F = m;
     G = 9;
    } else {
     w = r;
     t = x;
     v = y;
     s = l;
     o = k;
     q = p;
     h = n;
    }
   }
   if ((G | 0) == 9) {
    G = 0;
    t = F + (E * 24 | 0) + 8 | 0;
    s = c[t >> 2] | 0;
    t = c[t + 4 >> 2] | 0;
    Be(O + 768 | 0, F + (E * 24 | 0) | 0);
    v = c[F + (E * 24 | 0) + 4 >> 2] | 0;
    c[((O + 768 | 0) + 4 | 0) >> 2] = v;
    do if ((l | 0) == (y | 0)) {
     h = y >> 1;
     if ((h | 0) < 16) h = 16; else {
      h = (h | 0) > 65536 ? 65536 : h;
      if (!h) {
       l = y;
       q = p;
       break;
      }
     }
     l = h + y | 0;
     m = bf(l << 3) | 0;
     if ((y | 0) > 0) {
      h = m;
      j = 0;
      k = x;
      while (1) {
       r = k;
       w = c[r + 4 >> 2] | 0;
       z = h;
       c[z >> 2] = c[r >> 2];
       c[z + 4 >> 2] = w;
       j = j + 1 | 0;
       if ((j | 0) == (y | 0)) break; else {
        h = h + 8 | 0;
        k = k + 8 | 0;
       }
      }
     }
     if (x | 0) cf(x);
     r = m;
     q = m;
    } else q = p; while (0);
    z = y + 1 | 0;
    h = r + (y << 3) | 0;
    c[h >> 2] = s;
    c[h + 4 >> 2] = t;
    h = c[(d + 36 | 0) >> 2] | 0;
    n = (c[(d + 40 | 0) >> 2] | 0) + -1 | 0;
    if ((n - h | 0) == (D | 0)) {
     c[(d + 40 | 0) >> 2] = n;
     c[(c[(d + 28 | 0) >> 2] | 0) + (n * 24 | 0) >> 2] = 0;
     h = n;
    } else {
     k = h + D | 0;
     m = c[(d + 28 | 0) >> 2] | 0;
     c[(d + 40 | 0) >> 2] = n;
     if ((n | 0) == (k | 0)) {
      j = m;
      h = n;
     } else {
      c[(m + (k * 24 | 0) | 0) >> 2] = 0;
      Be(m + (k * 24 | 0) | 0, m + (n * 24 | 0) | 0);
      c[m + (k * 24 | 0) + 4 >> 2] = c[m + (n * 24 | 0) + 4 >> 2];
      j = c[(m + (n * 24 | 0) + 8 | 0) + 4 >> 2] | 0;
      c[(m + (k * 24 | 0) + 8 | 0) >> 2] = c[(m + (n * 24 | 0) + 8 | 0) >> 2];
      c[(m + (k * 24 | 0) + 8 | 0) + 4 >> 2] = j;
      j = c[(d + 28 | 0) >> 2] | 0;
      h = c[(d + 40 | 0) >> 2] | 0;
     }
     c[m + (k * 24 | 0) + 16 >> 2] = c[m + (n * 24 | 0) + 16 >> 2];
     c[j + (h * 24 | 0) >> 2] = 0;
    }
    p = c[(d + 80 | 0) >> 2] | 0;
    if (!p) {
     j = 0;
     k = 0;
    } else {
     j = p + (c[(d + 92 | 0) >> 2] << 4) | 0;
     k = p + (c[(d + 88 | 0) >> 2] << 4) | 0;
    }
    n = k;
    j = j - k >> 4;
    a : while (1) {
     while (1) {
      if (!j) break a;
      k = (j | 0) / 2 | 0;
      m = n + (k << 4) | 0;
      y = c[m + 4 >> 2] | 0;
      if (y >>> 0 < t >>> 0 | ((y | 0) == (t | 0) ? (c[m >> 2] | 0) >>> 0 < s >>> 0 : 0)) break; else j = k;
     }
     n = m + 16 | 0;
     j = j + -1 - k | 0;
    }
    if (!p) j = 0; else j = p + (c[(d + 92 | 0) >> 2] << 4) | 0;
    b : do if ((n | 0) != (j | 0)) {
     j = c[(d + 88 | 0) >> 2] | 0;
     o = n - ((p | 0) == 0 ? 0 : p + (j << 4) | 0) | 0;
     k = c[(d + 92 | 0) >> 2] | 0;
     if ((o >> 4 | 0) < (k - j | 0 | 0)) {
      if (!(o >> 4)) while (1) {
       y = p + (j << 4) | 0;
       if (!((c[y >> 2] | 0) == (s | 0) ? (c[y + 4 >> 2] | 0) == (t | 0) : 0)) break b;
       j = j + 1 | 0;
       c[(d + 88 | 0) >> 2] = j;
       if ((k | 0) <= (j | 0)) break b;
      }
      if ((c[(p + ((j + (o >> 4) | 0) << 4) | 0) >> 2] | 0) == (s | 0) ? (c[(p + ((j + (o >> 4) | 0) << 4) | 0) + 4 >> 2] | 0) == (t | 0) : 0) {
       n = k - j | 0;
       m = j;
       j = j + (o >> 4) | 0;
       do {
        do if ((n + -1 | 0) == (o >> 4 | 0)) {
         k = k + -1 | 0;
         c[(d + 92 | 0) >> 2] = k;
        } else if ((n >> 1 | 0) > (o >> 4 | 0)) {
         if ((o | 0) > 0) do {
          y = j;
          j = j + -1 | 0;
          w = p + (j << 4) | 0;
          x = c[w + 4 >> 2] | 0;
          c[(p + (y << 4) | 0) >> 2] = c[w >> 2];
          c[(p + (y << 4) | 0) + 4 >> 2] = x;
          c[p + (y << 4) + 8 >> 2] = c[p + (j << 4) + 8 >> 2];
         } while ((j | 0) > (m | 0));
         m = m + 1 | 0;
         c[(d + 88 | 0) >> 2] = m;
         break;
        } else {
         k = k + -1 | 0;
         if ((j | 0) < (k | 0)) do {
          y = j;
          j = j + 1 | 0;
          w = p + (j << 4) | 0;
          x = c[w + 4 >> 2] | 0;
          c[(p + (y << 4) | 0) >> 2] = c[w >> 2];
          c[(p + (y << 4) | 0) + 4 >> 2] = x;
          c[p + (y << 4) + 8 >> 2] = c[p + (j << 4) + 8 >> 2];
         } while ((j | 0) != (k | 0));
         c[(d + 92 | 0) >> 2] = k;
         break;
        } while (0);
        n = k - m | 0;
        if ((o >> 4 | 0) >= (n | 0)) break b;
        j = m + (o >> 4) | 0;
        y = p + (j << 4) | 0;
       } while ((c[y >> 2] | 0) == (s | 0) ? (c[y + 4 >> 2] | 0) == (t | 0) : 0);
      }
     }
    } while (0);
    do if ((v | 0) != -1) {
     s = c[(d + 52 | 0) >> 2] | 0;
     if (!s) {
      j = 0;
      k = 0;
     } else {
      j = s + ((c[(d + 64 | 0) >> 2] | 0) * 12 | 0) | 0;
      k = s + ((c[(d + 60 | 0) >> 2] | 0) * 12 | 0) | 0;
     }
     x = c[((O + 768 | 0) + 4 | 0) >> 2] | 0;
     o = c[(O + 768 | 0) >> 2] | 0;
     n = k;
     j = (j - k | 0) / 12 | 0;
     c : while (1) {
      while (1) {
       if (!j) break c;
       k = (j | 0) / 2 | 0;
       m = n + (k * 12 | 0) | 0;
       if ((c[n + (k * 12 | 0) + 4 >> 2] | 0) >>> 0 < x >>> 0) break;
       if ((c[m >> 2] | 0) >>> 0 < o >>> 0) break; else j = k;
      }
      n = m + 12 | 0;
      j = j + -1 - k | 0;
     }
     if (!s) j = 0; else j = s + ((c[(d + 64 | 0) >> 2] | 0) * 12 | 0) | 0;
     if ((n | 0) != (j | 0)) {
      j = c[(d + 60 | 0) >> 2] | 0;
      w = (s | 0) == 0 ? 0 : s + (j * 12 | 0) | 0;
      t = n;
      v = (t - w | 0 | 0) / 12 | 0;
      m = c[(d + 64 | 0) >> 2] | 0;
      if ((v | 0) < (m - j | 0)) {
       k = c[s + ((j + v | 0) * 12 | 0) >> 2] | 0;
       if ((o | 0) != (k | 0)) {
        if ((o | 0) == 0 | (k | 0) == 0) break;
        if ((c[o >> 2] | 0) == (c[k >> 2] | 0)) break;
        if ((c[o + 4 >> 2] | 0) != (c[k + 4 >> 2] | 0)) break;
        p = c[k + 12 >> 2] | 0;
        n = c[o + 12 >> 2] | 0;
        o = a[p >> 0] | 0;
        k = a[n >> 0] | 0;
        if (o << 24 >> 24 == 0 ? 1 : o << 24 >> 24 != k << 24 >> 24) n = o; else {
         do {
          p = p + 1 | 0;
          n = n + 1 | 0;
          o = a[p >> 0] | 0;
          k = a[n >> 0] | 0;
         } while (!(o << 24 >> 24 == 0 ? 1 : o << 24 >> 24 != k << 24 >> 24));
         n = o;
        }
        if (n << 24 >> 24 != k << 24 >> 24) break;
       }
       h = s;
       s = j + v | 0;
       while (1) {
        if ((c[h + (s * 12 | 0) + 4 >> 2] | 0) != (x | 0)) break;
        k = m - j | 0;
        do if ((t | 0) == (w | 0)) {
         y = j + 1 | 0;
         c[(d + 60 | 0) >> 2] = y;
         c[h + (j * 12 | 0) >> 2] = 0;
         j = y;
        } else {
         if ((k + -1 | 0) == (v | 0)) {
          m = m + -1 | 0;
          c[(d + 64 | 0) >> 2] = m;
          c[h + (m * 12 | 0) >> 2] = 0;
          break;
         }
         if ((k >> 1 | 0) <= (v | 0)) {
          k = j + v | 0;
          m = m + -1 | 0;
          if ((k | 0) < (m | 0)) {
           do {
            y = h + (k * 12 | 0) | 0;
            j = k;
            k = k + 1 | 0;
            c[y >> 2] = 0;
            Be(y, h + (k * 12 | 0) | 0);
            c[h + (j * 12 | 0) + 4 >> 2] = c[h + (k * 12 | 0) + 4 >> 2];
            c[h + (j * 12 | 0) + 8 >> 2] = c[h + (k * 12 | 0) + 8 >> 2];
            j = (c[(d + 64 | 0) >> 2] | 0) + -1 | 0;
            h = c[(d + 52 | 0) >> 2] | 0;
           } while ((k | 0) < (j | 0));
           m = j;
           j = c[(d + 60 | 0) >> 2] | 0;
          }
          c[(d + 64 | 0) >> 2] = m;
          c[h + (m * 12 | 0) >> 2] = 0;
          break;
         }
         if ((t - w | 0 | 0) > 0) {
          k = j + v | 0;
          do {
           y = h + (k * 12 | 0) | 0;
           j = k;
           k = k + -1 | 0;
           c[y >> 2] = 0;
           Be(y, h + (k * 12 | 0) | 0);
           c[h + (j * 12 | 0) + 4 >> 2] = c[h + (k * 12 | 0) + 4 >> 2];
           c[h + (j * 12 | 0) + 8 >> 2] = c[h + (k * 12 | 0) + 8 >> 2];
           j = c[(d + 60 | 0) >> 2] | 0;
           h = c[(d + 52 | 0) >> 2] | 0;
          } while ((k | 0) > (j | 0));
          m = c[(d + 64 | 0) >> 2] | 0;
         }
         y = j + 1 | 0;
         c[(d + 60 | 0) >> 2] = y;
         c[h + (j * 12 | 0) >> 2] = 0;
         j = y;
        } while (0);
        if ((v | 0) >= (m - j | 0)) break;
        s = j + v | 0;
        n = c[(O + 768 | 0) >> 2] | 0;
        k = c[h + (s * 12 | 0) >> 2] | 0;
        if ((n | 0) == (k | 0)) continue;
        if ((n | 0) == 0 | (k | 0) == 0) break;
        if ((c[n >> 2] | 0) == (c[k >> 2] | 0)) break;
        if ((c[n + 4 >> 2] | 0) != (c[k + 4 >> 2] | 0)) break;
        p = c[k + 12 >> 2] | 0;
        n = c[n + 12 >> 2] | 0;
        o = a[p >> 0] | 0;
        k = a[n >> 0] | 0;
        if (o << 24 >> 24 == 0 ? 1 : o << 24 >> 24 != k << 24 >> 24) n = o; else {
         do {
          p = p + 1 | 0;
          n = n + 1 | 0;
          o = a[p >> 0] | 0;
          k = a[n >> 0] | 0;
         } while (!(o << 24 >> 24 == 0 ? 1 : o << 24 >> 24 != k << 24 >> 24));
         n = o;
        }
        if (n << 24 >> 24 != k << 24 >> 24) break;
       }
       h = c[(d + 40 | 0) >> 2] | 0;
      }
     }
    } while (0);
    o = c[(d + 36 | 0) >> 2] | 0;
    n = h - o | 0;
    d : do if ((D | 0) != (n | 0)) {
     k = c[(d + 80 | 0) >> 2] | 0;
     e : do if (k | 0) {
      h = c[(d + 88 | 0) >> 2] | 0;
      m = c[(d + 92 | 0) >> 2] | 0;
      if ((h | 0) != (m | 0)) {
       j = k + (h << 4) | 0;
       while (1) {
        h = j + 8 | 0;
        j = j + 16 | 0;
        if ((n | 0) == (c[h >> 2] | 0)) break;
        if ((j | 0) == (k + (m << 4) | 0 | 0)) break e;
       }
       c[h >> 2] = D;
      }
     } while (0);
     k = c[(d + 52 | 0) >> 2] | 0;
     if (k | 0) {
      h = c[(d + 60 | 0) >> 2] | 0;
      m = c[(d + 64 | 0) >> 2] | 0;
      if ((h | 0) != (m | 0)) {
       j = k + (h * 12 | 0) | 0;
       while (1) {
        h = j + 8 | 0;
        j = j + 12 | 0;
        if ((n | 0) == (c[h >> 2] | 0)) break;
        if ((j | 0) == (k + (m * 12 | 0) | 0 | 0)) break d;
       }
       c[h >> 2] = D;
      }
     }
    } while (0);
    w = r;
    t = r;
    v = z;
    s = l;
    h = z;
   }
   if ((A | 0) <= 1) {
    A = q;
    break;
   } else {
    r = w;
    k = o;
    l = s;
    y = v;
    x = t;
    p = q;
    n = h;
   }
  }
 } else {
  A = m;
  h = 0;
 }
 if (!A) {
  i = O;
  return;
 }
 z = A + (h << 3) | 0;
 f : do if (h | 0) {
  x = (O + 720 | 0) + 8 | 0;
  v = 0;
  w = 0;
  y = A;
  while (1) {
   g : do {
    h = 1;
    j = e[y + 2 >> 1] | 0;
    if (h) switch (j | 0) {
    case 0:
     {
      j = c[(d + 424 | 0) >> 2] | 0;
      h = j + (e[y >> 1] | 0) | 0;
      n = c[(d + 416 | 0) >> 2] | 0;
      l = y;
      m = c[l >> 2] | 0;
      l = c[l + 4 >> 2] | 0;
      if ((m | 0) == (c[(n + (h * 776 | 0) | 0) >> 2] | 0) ? (l | 0) == (c[(n + (h * 776 | 0) | 0) + 4 >> 2] | 0) : 0) if ((c[n + (h * 776 | 0) + 8 >> 2] | 0) == 3) if ((m | 0) == (c[(n + ((j + (m & 65535) | 0) * 776 | 0) | 0) >> 2] | 0) ? (l | 0) == (c[(n + ((j + (m & 65535) | 0) * 776 | 0) | 0) + 4 >> 2] | 0) : 0) if ((c[n + ((j + (m & 65535) | 0) * 776 | 0) + 8 >> 2] | 0) == 3) {
       h = (c[(d + 208 | 0) >> 2] | 0) + 304 | 0;
       l = h + 128 | 0;
       do {
        c[h >> 2] = 0;
        h = h + 4 | 0;
       } while ((h | 0) < (l | 0));
       if (c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 752 | 0) >> 2] | 0) ub(1, n + ((j + (m & 65535) | 0) * 776 | 0) + 752 | 0 | 0);
       if (c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 768 | 0) >> 2] | 0) Ya(1, n + ((j + (m & 65535) | 0) * 776 | 0) + 768 | 0 | 0);
       if (c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 772 | 0) >> 2] | 0) Ya(1, n + ((j + (m & 65535) | 0) * 776 | 0) + 772 | 0 | 0);
       if (!(a[n + ((j + (m & 65535) | 0) * 776 | 0) + 746 >> 0] | 0)) if (c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 756 | 0) >> 2] | 0) Xb(1, n + ((j + (m & 65535) | 0) * 776 | 0) + 756 | 0 | 0);
       h = O + 720 | 0;
       l = h + 44 | 0;
       do {
        c[h >> 2] = 0;
        h = h + 4 | 0;
       } while ((h | 0) < (l | 0));
       c[((O + 720 | 0) + 4 | 0) >> 2] = -2;
       c[x >> 2] = -1;
       c[((O + 720 | 0) + 12 | 0) >> 2] = 20;
       c[((O + 720 | 0) + 16 | 0) >> 2] = 20;
       c[((O + 720 | 0) + 20 | 0) >> 2] = -1;
       c[((O + 720 | 0) + 24 | 0) >> 2] = 0;
       c[((O + 720 | 0) + 28 | 0) >> 2] = 0;
       c[((O + 720 | 0) + 32 | 0) >> 2] = 0;
       c[((O + 720 | 0) + 36 | 0) >> 2] = 1;
       a[((O + 720 | 0) + 40 | 0) >> 0] = 0;
       a[((O + 720 | 0) + 41 | 0) >> 0] = 0;
       a[((O + 720 | 0) + 42 | 0) >> 0] = 0;
       if ((O + 720 | 0 | 0) == (n + ((j + (m & 65535) | 0) * 776 | 0) + 704 | 0 | 0)) h = -2; else {
        c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 704 | 0) >> 2] = 0;
        Be(n + ((j + (m & 65535) | 0) * 776 | 0) + 704 | 0, O + 720 | 0);
        h = c[((O + 720 | 0) + 4 | 0) >> 2] | 0;
       }
       c[n + ((j + (m & 65535) | 0) * 776 | 0) + 708 >> 2] = h;
       h = n + ((j + (m & 65535) | 0) * 776 | 0) + 712 | 0;
       c[h >> 2] = c[x >> 2];
       c[h + 4 >> 2] = c[x + 4 >> 2];
       c[h + 8 >> 2] = c[x + 8 >> 2];
       c[h + 12 >> 2] = c[x + 12 >> 2];
       c[h + 16 >> 2] = c[x + 16 >> 2];
       c[h + 20 >> 2] = c[x + 20 >> 2];
       c[h + 24 >> 2] = c[x + 24 >> 2];
       c[h + 28 >> 2] = c[x + 28 >> 2];
       b[h + 32 >> 1] = b[x + 32 >> 1] | 0;
       a[h + 34 >> 0] = a[x + 34 >> 0] | 0;
       c[(O + 720 | 0) >> 2] = 0;
       c[O >> 2] = 0;
       c[O + 4 >> 2] = 0;
       c[O + 8 >> 2] = 0;
       c[O + 12 >> 2] = 0;
       c[O + 16 >> 2] = 0;
       c[O + 20 >> 2] = 0;
       c[(O + 24 | 0) >> 2] = 1;
       c[(O + 28 | 0) >> 2] = 0;
       c[(O + 32 | 0) >> 2] = 20;
       c[(O + 40 | 0) >> 2] = -1;
       c[(O + 40 | 0) + 4 >> 2] = -1;
       b[(O + 48 | 0) >> 1] = 21;
       g[(O + 52 | 0) >> 2] = 0.0;
       g[(O + 56 | 0) >> 2] = 0.0;
       g[(O + 60 | 0) >> 2] = 0.0;
       g[(O + 64 | 0) >> 2] = 1.0;
       g[(O + 68 | 0) >> 2] = 1.0;
       a[(O + 72 | 0) >> 0] = 0;
       a[(O + 73 | 0) >> 0] = 3;
       c[(O + 768 | 0) >> 2] = 0;
       Be(O + 76 | 0, O + 768 | 0);
       c[(O + 80 | 0) >> 2] = -1;
       c[(O + 88 | 0) >> 2] = -1;
       c[(O + 88 | 0) + 4 >> 2] = -1;
       Bf(O + 96 | 0 | 0, 0, 584) | 0;
       a[(O + 680 | 0) >> 0] = a[(O + 680 | 0) >> 0] & -128;
       h = n + ((j + (m & 65535) | 0) * 776 | 0) + 16 | 0;
       k = O;
       l = h + 36 | 0;
       do {
        c[h >> 2] = c[k >> 2];
        h = h + 4 | 0;
        k = k + 4 | 0;
       } while ((h | 0) < (l | 0));
       if ((n + ((j + (m & 65535) | 0) * 776 | 0) + 16 | 0 | 0) == (O | 0)) {
        h = n + ((j + (m & 65535) | 0) * 776 | 0) + 64 | 0;
        c[h >> 2] = c[(O + 48 | 0) >> 2];
        c[h + 4 >> 2] = c[(O + 48 | 0) + 4 >> 2];
        c[h + 8 >> 2] = c[(O + 48 | 0) + 8 >> 2];
        c[h + 12 >> 2] = c[(O + 48 | 0) + 12 >> 2];
        c[h + 16 >> 2] = c[(O + 48 | 0) + 16 >> 2];
        c[h + 20 >> 2] = c[(O + 48 | 0) + 20 >> 2];
        c[h + 24 >> 2] = c[(O + 48 | 0) + 24 >> 2];
        h = c[(O + 80 | 0) >> 2] | 0;
       } else {
        h = c[(O + 40 | 0) + 4 >> 2] | 0;
        c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 56 | 0) >> 2] = c[(O + 40 | 0) >> 2];
        c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 56 | 0) + 4 >> 2] = h;
        h = n + ((j + (m & 65535) | 0) * 776 | 0) + 64 | 0;
        c[h >> 2] = c[(O + 48 | 0) >> 2];
        c[h + 4 >> 2] = c[(O + 48 | 0) + 4 >> 2];
        c[h + 8 >> 2] = c[(O + 48 | 0) + 8 >> 2];
        c[h + 12 >> 2] = c[(O + 48 | 0) + 12 >> 2];
        c[h + 16 >> 2] = c[(O + 48 | 0) + 16 >> 2];
        c[h + 20 >> 2] = c[(O + 48 | 0) + 20 >> 2];
        c[h + 24 >> 2] = c[(O + 48 | 0) + 24 >> 2];
        c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 92 | 0) >> 2] = 0;
        Be(n + ((j + (m & 65535) | 0) * 776 | 0) + 92 | 0, O + 76 | 0);
        h = c[(O + 80 | 0) >> 2] | 0;
        I = c[(O + 88 | 0) + 4 >> 2] | 0;
        c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 104 | 0) >> 2] = c[(O + 88 | 0) >> 2];
        c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 104 | 0) + 4 >> 2] = I;
       }
       c[n + ((j + (m & 65535) | 0) * 776 | 0) + 96 >> 2] = h;
       h = c[(O + 96 | 0) + 4 >> 2] | 0;
       c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 112 | 0) >> 2] = c[(O + 96 | 0) >> 2];
       c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 112 | 0) + 4 >> 2] = h;
       h = 0;
       do {
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) >> 2] = c[O + 104 + (h * 48 | 0) >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 4 >> 2] = c[O + 104 + (h * 48 | 0) + 4 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 8 >> 2] = c[O + 104 + (h * 48 | 0) + 8 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 12 >> 2] = c[O + 104 + (h * 48 | 0) + 12 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 16 >> 2] = c[O + 104 + (h * 48 | 0) + 16 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 20 >> 2] = c[O + 104 + (h * 48 | 0) + 20 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 24 >> 2] = c[O + 104 + (h * 48 | 0) + 24 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 28 >> 2] = c[O + 104 + (h * 48 | 0) + 28 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 32 >> 2] = c[O + 104 + (h * 48 | 0) + 32 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 36 >> 2] = c[O + 104 + (h * 48 | 0) + 36 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 40 >> 2] = c[O + 104 + (h * 48 | 0) + 40 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 120 + (h * 48 | 0) + 44 >> 2] = c[O + 104 + (h * 48 | 0) + 44 >> 2];
        h = h + 1 | 0;
       } while ((h | 0) != 6);
       h = 0;
       do {
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) >> 2] = c[O + 392 + (h * 48 | 0) >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 4 >> 2] = c[O + 392 + (h * 48 | 0) + 4 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 8 >> 2] = c[O + 392 + (h * 48 | 0) + 8 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 12 >> 2] = c[O + 392 + (h * 48 | 0) + 12 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 16 >> 2] = c[O + 392 + (h * 48 | 0) + 16 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 20 >> 2] = c[O + 392 + (h * 48 | 0) + 20 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 24 >> 2] = c[O + 392 + (h * 48 | 0) + 24 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 28 >> 2] = c[O + 392 + (h * 48 | 0) + 28 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 32 >> 2] = c[O + 392 + (h * 48 | 0) + 32 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 36 >> 2] = c[O + 392 + (h * 48 | 0) + 36 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 40 >> 2] = c[O + 392 + (h * 48 | 0) + 40 >> 2];
        c[n + ((j + (m & 65535) | 0) * 776 | 0) + 408 + (h * 48 | 0) + 44 >> 2] = c[O + 392 + (h * 48 | 0) + 44 >> 2];
        h = h + 1 | 0;
       } while ((h | 0) != 6);
       a[n + ((j + (m & 65535) | 0) * 776 | 0) + 696 >> 0] = a[(O + 680 | 0) >> 0] | 0;
       c[n + ((j + (m & 65535) | 0) * 776 | 0) + 748 >> 2] = 0;
       c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 752 | 0) >> 2] = 0;
       c[n + ((j + (m & 65535) | 0) * 776 | 0) + 756 >> 2] = 0;
       c[n + ((j + (m & 65535) | 0) * 776 | 0) + 760 >> 2] = -1;
       a[n + ((j + (m & 65535) | 0) * 776 | 0) + 764 >> 0] = 1;
       a[n + ((j + (m & 65535) | 0) * 776 | 0) + 765 >> 0] = 0;
       c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 768 | 0) >> 2] = 0;
       c[(n + ((j + (m & 65535) | 0) * 776 | 0) + 772 | 0) >> 2] = 0;
       l = y;
       o = c[y >> 2] | 0;
       h = c[(d + 424 | 0) >> 2] | 0;
       n = c[(d + 416 | 0) >> 2] | 0;
       m = c[l >> 2] | 0;
       l = c[l + 4 >> 2] | 0;
      } else {
       o = m;
       h = j;
      } else {
       o = m;
       h = j;
      } else {
       o = m;
       h = j;
      } else {
       o = m;
       h = j;
      }
      k = o & 65535;
      h = h + k | 0;
      j = n + (h * 776 | 0) | 0;
      if ((m | 0) == (c[j >> 2] | 0) ? (l | 0) == (c[j + 4 >> 2] | 0) : 0) {
       c[j >> 2] = -1;
       c[j + 4 >> 2] = -1;
       c[n + (h * 776 | 0) + 8 >> 2] = 0;
       c[n + (h * 776 | 0) + 12 >> 2] = 0;
       id(d + 440 | 0);
       H = c[(d + 452 | 0) >> 2] | 0;
       c[(d + 452 | 0) >> 2] = H + 1;
       b[(c[(d + 440 | 0) >> 2] | 0) + (H << 1) >> 1] = b[y >> 1] | 0;
       H = w;
       I = v;
       break g;
      } else {
       c[(O + 688 | 0) >> 2] = o >>> 16;
       c[(O + 688 | 0) + 4 >> 2] = k;
       oe(19168, O + 688 | 0);
       H = w;
       I = v;
       break g;
      }
     }
    default:
     h = 1;
    }
    if (h) switch (j | 0) {
    case 1:
     {
      o = c[(d + 296 | 0) >> 2] | 0;
      h = o + (e[y >> 1] | 0) | 0;
      p = c[(d + 288 | 0) >> 2] | 0;
      r = y;
      q = c[r >> 2] | 0;
      r = c[r + 4 >> 2] | 0;
      s = 1;
      if (s) {
       s = 0;
       if ((q | 0) == (c[(p + (h * 400 | 0) | 0) >> 2] | 0) ? (r | 0) == (c[(p + (h * 400 | 0) | 0) + 4 >> 2] | 0) : 0) {
        t = 1;
        if (t) {
         t = 0;
         if ((c[p + (h * 400 | 0) + 8 >> 2] | 0) == 3) {
          m = 1;
          if (m) {
           m = 0;
           if ((q | 0) == (c[(p + ((o + (q & 65535) | 0) * 400 | 0) | 0) >> 2] | 0) ? (r | 0) == (c[(p + ((o + (q & 65535) | 0) * 400 | 0) | 0) + 4 >> 2] | 0) : 0) {
            n = 1;
            if (n) {
             n = 0;
             if ((c[p + ((o + (q & 65535) | 0) * 400 | 0) + 8 >> 2] | 0) == 3) {
              Jd(c[(d + 144 | 0) >> 2] | 0);
              h = a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 368 | 0) >> 0] | 0;
              if (h << 24 >> 24) {
               j = 0;
               do {
                N = c[p + ((o + (q & 65535) | 0) * 400 | 0) + 372 + (j << 2) >> 2] | 0;
                c[(O + 768 | 0) >> 2] = N;
                if (N) {
                 Ob(1, O + 768 | 0 | 0);
                 h = a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 368 | 0) >> 0] | 0;
                }
                j = j + 1 | 0;
               } while ((j | 0) < (h & 255 | 0));
              }
              h = a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 384 | 0) >> 0] | 0;
              if (h << 24 >> 24) {
               j = 0;
               do {
                N = c[p + ((o + (q & 65535) | 0) * 400 | 0) + 388 + (j << 2) >> 2] | 0;
                c[(O + 768 | 0) >> 2] = N;
                if (N) {
                 Ob(1, O + 768 | 0 | 0);
                 h = a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 384 | 0) >> 0] | 0;
                }
                j = j + 1 | 0;
               } while ((j | 0) < (h & 255 | 0));
              }
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 364 >> 2] = -1;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 368 | 0) >> 0] = 1;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 369 >> 0] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 372 >> 2] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 376 >> 2] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 380 >> 2] = -1;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 384 | 0) >> 0] = 1;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 385 >> 0] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 388 >> 2] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 392 >> 2] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 208 >> 2] = 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 212 | 0) >> 0] = 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 212 | 0) + 1 >> 0] = 1;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 214 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 214 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 216 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 216 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 218 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 218 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 220 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 220 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 222 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 222 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 224 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 224 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 226 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 226 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 228 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 228 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 230 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 230 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 232 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 232 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 234 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 234 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 236 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 236 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 238 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 238 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 240 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 240 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 242 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 242 | 0) + 1 >> 0] = 13;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 244 | 0) >> 0] = 17;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 244 | 0) + 1 >> 0] = 13;
              h = p + ((o + (q & 65535) | 0) * 400 | 0) + 246 | 0;
              l = h + 16 | 0;
              do {
               a[h >> 0] = 0;
               h = h + 1 | 0;
              } while ((h | 0) < (l | 0));
              h = p + ((o + (q & 65535) | 0) * 400 | 0) + 262 | 0;
              l = h + 16 | 0;
              do {
               a[h >> 0] = 255;
               h = h + 1 | 0;
              } while ((h | 0) < (l | 0));
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 278 | 0) >> 0] = 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 278 | 0) + 1 >> 0] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 280 >> 2] = -1;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 284 >> 2] = 0;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 288 >> 2] = -1;
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 292 >> 2] = -1;
              h = p + ((o + (q & 65535) | 0) * 400 | 0) + 296 | 0;
              l = h + 68 | 0;
              do {
               c[h >> 2] = 0;
               h = h + 4 | 0;
              } while ((h | 0) < (l | 0));
              c[O >> 2] = -1;
              c[(O + 4 | 0) >> 2] = -1;
              a[(O + 10 | 0) >> 0] = 17;
              a[(O + 11 | 0) >> 0] = 13;
              a[(O + 12 | 0) >> 0] = 17;
              a[(O + 13 | 0) >> 0] = 13;
              a[(O + 14 | 0) >> 0] = 17;
              a[(O + 15 | 0) >> 0] = 13;
              a[(O + 16 | 0) >> 0] = 17;
              a[(O + 17 | 0) >> 0] = 13;
              a[(O + 18 | 0) >> 0] = 17;
              a[(O + 19 | 0) >> 0] = 13;
              a[(O + 20 | 0) >> 0] = 17;
              a[(O + 21 | 0) >> 0] = 13;
              a[(O + 22 | 0) >> 0] = 17;
              a[(O + 23 | 0) >> 0] = 13;
              a[(O + 24 | 0) >> 0] = 17;
              a[(O + 25 | 0) >> 0] = 13;
              a[(O + 26 | 0) >> 0] = 17;
              a[(O + 27 | 0) >> 0] = 13;
              a[(O + 28 | 0) >> 0] = 17;
              a[(O + 29 | 0) >> 0] = 13;
              a[(O + 30 | 0) >> 0] = 17;
              a[(O + 31 | 0) >> 0] = 13;
              a[(O + 32 | 0) >> 0] = 17;
              a[(O + 33 | 0) >> 0] = 13;
              a[(O + 34 | 0) >> 0] = 17;
              a[(O + 35 | 0) >> 0] = 13;
              a[(O + 36 | 0) >> 0] = 17;
              a[(O + 37 | 0) >> 0] = 13;
              a[(O + 38 | 0) >> 0] = 17;
              a[(O + 39 | 0) >> 0] = 13;
              a[(O + 40 | 0) >> 0] = 17;
              a[(O + 41 | 0) >> 0] = 13;
              a[(O + 8 | 0) >> 0] = 0;
              a[(O + 9 | 0) >> 0] = 1;
              a[(O + 74 | 0) >> 0] = 0;
              a[(O + 75 | 0) >> 0] = 0;
              b[(O + 58 | 0) >> 1] = 65535;
              b[(O + 58 | 0) + 2 >> 1] = 65535;
              b[(O + 58 | 0) + 4 >> 1] = 65535;
              b[(O + 58 | 0) + 6 >> 1] = 65535;
              b[(O + 58 | 0) + 8 >> 1] = 65535;
              b[(O + 58 | 0) + 10 >> 1] = 65535;
              b[(O + 58 | 0) + 12 >> 1] = 65535;
              b[(O + 58 | 0) + 14 >> 1] = 65535;
              b[(O + 42 | 0) >> 1] = 0;
              b[(O + 42 | 0) + 2 >> 1] = 0;
              b[(O + 42 | 0) + 4 >> 1] = 0;
              b[(O + 42 | 0) + 6 >> 1] = 0;
              b[(O + 42 | 0) + 8 >> 1] = 0;
              b[(O + 42 | 0) + 10 >> 1] = 0;
              b[(O + 42 | 0) + 12 >> 1] = 0;
              b[(O + 42 | 0) + 14 >> 1] = 0;
              c[(O + 76 | 0) >> 2] = 0;
              c[(O + 76 | 0) + 4 >> 2] = 0;
              c[(O + 76 | 0) + 8 >> 2] = 0;
              a[(O + 76 | 0) + 12 >> 0] = 0;
              c[(O + 768 | 0) >> 2] = 0;
              Be(O + 92 | 0, O + 768 | 0);
              c[(O + 96 | 0) >> 2] = -1;
              c[(O + 104 | 0) >> 2] = -1;
              c[(O + 104 | 0) + 4 >> 2] = -1;
              c[(O + 112 | 0) >> 2] = 0;
              c[(O + 116 | 0) >> 2] = -1;
              h = O + 120 | 0;
              l = h + 68 | 0;
              do {
               c[h >> 2] = 0;
               h = h + 4 | 0;
              } while ((h | 0) < (l | 0));
              a[(O + 188 | 0) >> 0] = a[(O + 188 | 0) >> 0] & -16;
              M = c[O + 4 >> 2] | 0;
              N = p + ((o + (q & 65535) | 0) * 400 | 0) + 16 | 0;
              c[N >> 2] = c[O >> 2];
              c[N + 4 >> 2] = M;
              N = c[(O + 8 | 0) >> 2] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 24 | 0) >> 0] = N & 65535;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 24 | 0) + 1 >> 0] = (N & 65535) >> 8;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 26 | 0) >> 0] = N >>> 16 & 65535;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 26 | 0) + 1 >> 0] = (N >>> 16 & 65535) >> 8;
              N = b[(O + 12 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 28 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 28 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 14 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 30 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 30 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 16 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 32 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 32 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 18 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 34 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 34 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 20 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 36 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 36 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 22 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 38 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 38 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 24 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 40 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 40 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 26 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 42 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 42 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 28 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 44 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 44 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 30 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 46 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 46 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 32 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 48 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 48 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 34 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 50 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 50 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 36 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 52 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 52 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 38 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 54 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 54 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 40 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 56 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 56 | 0) + 1 >> 0] = N >> 8;
              N = b[(O + 42 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 58 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 59 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 44 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 60 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 61 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 46 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 62 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 63 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 48 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 64 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 65 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 50 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 66 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 67 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 52 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 68 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 69 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 54 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 70 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 71 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 56 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 72 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 73 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 58 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 74 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 75 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 60 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 76 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 77 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 62 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 78 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 79 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 64 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 80 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 81 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 66 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 82 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 83 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 68 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 84 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 85 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 70 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 86 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 87 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 72 | 0) >> 1] | 0;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 88 >> 0] = N;
              a[p + ((o + (q & 65535) | 0) * 400 | 0) + 89 >> 0] = (N & 65535) >>> 8;
              N = b[(O + 74 | 0) >> 1] | 0;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 90 | 0) >> 0] = N;
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 90 | 0) + 1 >> 0] = N >> 8;
              N = p + ((o + (q & 65535) | 0) * 400 | 0) + 92 | 0;
              c[N >> 2] = c[(O + 76 | 0) >> 2];
              c[N + 4 >> 2] = c[(O + 76 | 0) + 4 >> 2];
              c[N + 8 >> 2] = c[(O + 76 | 0) + 8 >> 2];
              a[N + 12 >> 0] = a[(O + 76 | 0) + 12 >> 0] | 0;
              if ((O | 0) == (p + ((o + (q & 65535) | 0) * 400 | 0) + 16 | 0 | 0)) h = c[(O + 96 | 0) >> 2] | 0; else {
               c[(p + ((o + (q & 65535) | 0) * 400 | 0) + 108 | 0) >> 2] = 0;
               Be(p + ((o + (q & 65535) | 0) * 400 | 0) + 108 | 0, O + 92 | 0);
               h = c[(O + 96 | 0) >> 2] | 0;
               N = c[(O + 104 | 0) + 4 >> 2] | 0;
               c[(p + ((o + (q & 65535) | 0) * 400 | 0) + 120 | 0) >> 2] = c[(O + 104 | 0) >> 2];
               c[(p + ((o + (q & 65535) | 0) * 400 | 0) + 120 | 0) + 4 >> 2] = N;
              }
              c[p + ((o + (q & 65535) | 0) * 400 | 0) + 112 >> 2] = h;
              h = p + ((o + (q & 65535) | 0) * 400 | 0) + 128 | 0;
              k = O + 112 | 0;
              l = h + 76 | 0;
              do {
               c[h >> 2] = c[k >> 2];
               h = h + 4 | 0;
               k = k + 4 | 0;
              } while ((h | 0) < (l | 0));
              a[(p + ((o + (q & 65535) | 0) * 400 | 0) + 128 | 0) + 76 >> 0] = a[(O + 112 | 0) + 76 >> 0] | 0;
              N = y;
              J = c[y >> 2] | 0;
              K = c[(d + 296 | 0) >> 2] | 0;
              L = c[(d + 288 | 0) >> 2] | 0;
              M = c[N >> 2] | 0;
              N = c[N + 4 >> 2] | 0;
             } else n = 1;
            }
            if (n) if (1) {
             J = q;
             K = o;
             L = p;
             M = q;
             N = r;
            }
           } else m = 1;
          }
          if (m) if (1) {
           J = q;
           K = o;
           L = p;
           M = q;
           N = r;
          }
         } else t = 1;
        }
        if (t) if (1) {
         J = q;
         K = o;
         L = p;
         M = q;
         N = r;
        }
       } else s = 1;
      }
      if (s) if (1) {
       J = q;
       K = o;
       L = p;
       M = q;
       N = r;
      }
      h = J & 65535;
      j = K + h | 0;
      k = L + (j * 400 | 0) | 0;
      if ((M | 0) == (c[k >> 2] | 0) ? (N | 0) == (c[k + 4 >> 2] | 0) : 0) {
       c[k >> 2] = -1;
       c[k + 4 >> 2] = -1;
       c[L + (j * 400 | 0) + 8 >> 2] = 0;
       c[L + (j * 400 | 0) + 12 >> 2] = 0;
       id(d + 312 | 0);
       H = c[(d + 324 | 0) >> 2] | 0;
       c[(d + 324 | 0) >> 2] = H + 1;
       b[(c[(d + 312 | 0) >> 2] | 0) + (H << 1) >> 1] = b[y >> 1] | 0;
       H = w;
       I = v;
       break g;
      } else {
       c[(O + 696 | 0) >> 2] = J >>> 16;
       c[(O + 696 | 0) + 4 >> 2] = h;
       oe(19168, O + 696 | 0);
       H = w;
       I = v;
       break g;
      }
     }
    default:
     h = 1;
    }
    c[O + 800 >> 2] = d;
    c[O + 1920 >> 2] = v;
    c[O + 3320 >> 2] = w;
    c[O + 3328 >> 2] = H;
    c[O + 3336 >> 2] = I;
    c[O + 4160 >> 2] = y;
    c[O + 4464 >> 2] = h;
    c[O + 4472 >> 2] = j;
    c[O + 4544 >> 2] = 0;
    c[O + 4548 >> 2] = 0;
    Td(O);
    H = c[O + 3328 >> 2] | 0;
    I = c[O + 3336 >> 2] | 0;
    B = c[O + 4544 >> 2] | 0;
    u = c[O + 4548 >> 2] | 0;
    C = +g[O + 4548 >> 2];
    c[O + 4544 >> 2] = 0;
    c[O + 4548 >> 2] = 0;
    if ((B | 0) == 1) break;
    if ((B | 0) == 2) switch (u | 0) {
    case 4:
     break g;
    }
   } while (0);
   y = y + 8 | 0;
   if ((y | 0) == (z | 0)) break f; else {
    v = I;
    w = H;
   }
  }
 } while (0);
 cf(A);
 i = O;
 return;
}

function jd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0;
 z = b + 4 | 0;
 if ((c[z >> 2] | 0) == (d | 0)) return;
 A = b + 12 | 0;
 B = b + 8 | 0;
 C = (c[A >> 2] | 0) - (c[B >> 2] | 0) | 0;
 D = bf(d * 3712 | 0) | 0;
 if ((C | 0) > 0) {
  w = D;
  x = 0;
  y = (c[b >> 2] | 0) + ((c[B >> 2] | 0) * 3712 | 0) | 0;
  while (1) {
   h = y;
   g = c[h + 4 >> 2] | 0;
   f = w;
   c[f >> 2] = c[h >> 2];
   c[f + 4 >> 2] = g;
   f = y + 8 | 0;
   g = c[f + 4 >> 2] | 0;
   h = w + 8 | 0;
   c[h >> 2] = c[f >> 2];
   c[h + 4 >> 2] = g;
   Be(w + 16 | 0, y + 16 | 0);
   c[w + 20 >> 2] = c[y + 20 >> 2];
   h = y + 24 | 0;
   g = c[h + 4 >> 2] | 0;
   f = w + 24 | 0;
   c[f >> 2] = c[h >> 2];
   c[f + 4 >> 2] = g;
   f = w + 32 | 0;
   g = w + 40 | 0;
   h = w + 44 | 0;
   i = w + 48 | 0;
   j = w + 52 | 0;
   k = w + 56 | 0;
   l = w + 60 | 0;
   m = w + 64 | 0;
   n = w + 68 | 0;
   v = (w | 0) == (y | 0);
   o = f;
   p = o + 40 | 0;
   do {
    c[o >> 2] = 0;
    o = o + 4 | 0;
   } while ((o | 0) < (p | 0));
   if (!v) {
    e = c[y + 32 >> 2] | 0;
    u = c[y + 36 >> 2] | 0;
    c[f >> 2] = e;
    c[w + 36 >> 2] = u;
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 40 | 0;
    f = c[g >> 2] | 0;
    if (f | 0) {
     u = c[f >> 2] | 0;
     c[f >> 2] = u - 1;
     if ((u | 0) == 1) {
      cf(c[g >> 2] | 0);
      c[g >> 2] = 0;
      c[h >> 2] = 0;
     }
     c[g >> 2] = 0;
     c[h >> 2] = 0;
    }
    e = c[e >> 2] | 0;
    c[g >> 2] = e;
    c[h >> 2] = c[y + 44 >> 2];
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 48 | 0;
    if (!v) {
     f = c[i >> 2] | 0;
     if (f | 0) {
      u = c[f >> 2] | 0;
      c[f >> 2] = u - 1;
      if ((u | 0) == 1) {
       cf(c[i >> 2] | 0);
       c[i >> 2] = 0;
       c[j >> 2] = 0;
      }
      c[i >> 2] = 0;
      c[j >> 2] = 0;
     }
     e = c[e >> 2] | 0;
     c[i >> 2] = e;
     c[j >> 2] = c[y + 52 >> 2];
     if (e | 0) {
      u = e;
      c[u >> 2] = (c[u >> 2] | 0) + 1;
     }
     e = y + 56 | 0;
     if (!v) {
      f = c[k >> 2] | 0;
      if (f | 0) {
       u = c[f >> 2] | 0;
       c[f >> 2] = u - 1;
       if ((u | 0) == 1) {
        cf(c[k >> 2] | 0);
        c[k >> 2] = 0;
        c[l >> 2] = 0;
       }
       c[k >> 2] = 0;
       c[l >> 2] = 0;
      }
      e = c[e >> 2] | 0;
      c[k >> 2] = e;
      c[l >> 2] = c[y + 60 >> 2];
      if (e | 0) {
       u = e;
       c[u >> 2] = (c[u >> 2] | 0) + 1;
      }
      e = y + 64 | 0;
      if (!v) {
       f = c[m >> 2] | 0;
       if (f | 0) {
        u = c[f >> 2] | 0;
        c[f >> 2] = u - 1;
        if ((u | 0) == 1) {
         cf(c[m >> 2] | 0);
         c[m >> 2] = 0;
         c[n >> 2] = 0;
        }
        c[m >> 2] = 0;
        c[n >> 2] = 0;
       }
       e = c[e >> 2] | 0;
       c[m >> 2] = e;
       c[n >> 2] = c[y + 68 >> 2];
       if (e | 0) {
        u = e;
        c[u >> 2] = (c[u >> 2] | 0) + 1;
       }
      }
     }
    }
   }
   f = w + 72 | 0;
   g = w + 80 | 0;
   h = w + 84 | 0;
   i = w + 88 | 0;
   j = w + 92 | 0;
   k = w + 96 | 0;
   l = w + 100 | 0;
   m = w + 104 | 0;
   n = w + 108 | 0;
   o = f;
   p = o + 40 | 0;
   do {
    c[o >> 2] = 0;
    o = o + 4 | 0;
   } while ((o | 0) < (p | 0));
   if (!v) {
    e = c[y + 72 >> 2] | 0;
    u = c[y + 76 >> 2] | 0;
    c[f >> 2] = e;
    c[w + 76 >> 2] = u;
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 80 | 0;
    f = c[g >> 2] | 0;
    if (f | 0) {
     u = c[f >> 2] | 0;
     c[f >> 2] = u - 1;
     if ((u | 0) == 1) {
      cf(c[g >> 2] | 0);
      c[g >> 2] = 0;
      c[h >> 2] = 0;
     }
     c[g >> 2] = 0;
     c[h >> 2] = 0;
    }
    e = c[e >> 2] | 0;
    c[g >> 2] = e;
    c[h >> 2] = c[y + 84 >> 2];
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 88 | 0;
    if (!v) {
     f = c[i >> 2] | 0;
     if (f | 0) {
      u = c[f >> 2] | 0;
      c[f >> 2] = u - 1;
      if ((u | 0) == 1) {
       cf(c[i >> 2] | 0);
       c[i >> 2] = 0;
       c[j >> 2] = 0;
      }
      c[i >> 2] = 0;
      c[j >> 2] = 0;
     }
     e = c[e >> 2] | 0;
     c[i >> 2] = e;
     c[j >> 2] = c[y + 92 >> 2];
     if (e | 0) {
      u = e;
      c[u >> 2] = (c[u >> 2] | 0) + 1;
     }
     e = y + 96 | 0;
     if (!v) {
      f = c[k >> 2] | 0;
      if (f | 0) {
       u = c[f >> 2] | 0;
       c[f >> 2] = u - 1;
       if ((u | 0) == 1) {
        cf(c[k >> 2] | 0);
        c[k >> 2] = 0;
        c[l >> 2] = 0;
       }
       c[k >> 2] = 0;
       c[l >> 2] = 0;
      }
      e = c[e >> 2] | 0;
      c[k >> 2] = e;
      c[l >> 2] = c[y + 100 >> 2];
      if (e | 0) {
       u = e;
       c[u >> 2] = (c[u >> 2] | 0) + 1;
      }
      e = y + 104 | 0;
      if (!v) {
       f = c[m >> 2] | 0;
       if (f | 0) {
        u = c[f >> 2] | 0;
        c[f >> 2] = u - 1;
        if ((u | 0) == 1) {
         cf(c[m >> 2] | 0);
         c[m >> 2] = 0;
         c[n >> 2] = 0;
        }
        c[m >> 2] = 0;
        c[n >> 2] = 0;
       }
       e = c[e >> 2] | 0;
       c[m >> 2] = e;
       c[n >> 2] = c[y + 108 >> 2];
       if (e | 0) {
        u = e;
        c[u >> 2] = (c[u >> 2] | 0) + 1;
       }
      }
     }
    }
   }
   f = w + 112 | 0;
   g = w + 120 | 0;
   h = w + 124 | 0;
   i = w + 128 | 0;
   j = w + 132 | 0;
   k = w + 136 | 0;
   l = w + 140 | 0;
   m = w + 144 | 0;
   n = w + 148 | 0;
   o = f;
   p = o + 40 | 0;
   do {
    c[o >> 2] = 0;
    o = o + 4 | 0;
   } while ((o | 0) < (p | 0));
   if (!v) {
    e = c[y + 112 >> 2] | 0;
    u = c[y + 116 >> 2] | 0;
    c[f >> 2] = e;
    c[w + 116 >> 2] = u;
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 120 | 0;
    f = c[g >> 2] | 0;
    if (f | 0) {
     u = c[f >> 2] | 0;
     c[f >> 2] = u - 1;
     if ((u | 0) == 1) {
      cf(c[g >> 2] | 0);
      c[g >> 2] = 0;
      c[h >> 2] = 0;
     }
     c[g >> 2] = 0;
     c[h >> 2] = 0;
    }
    e = c[e >> 2] | 0;
    c[g >> 2] = e;
    c[h >> 2] = c[y + 124 >> 2];
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 128 | 0;
    if (!v) {
     f = c[i >> 2] | 0;
     if (f | 0) {
      u = c[f >> 2] | 0;
      c[f >> 2] = u - 1;
      if ((u | 0) == 1) {
       cf(c[i >> 2] | 0);
       c[i >> 2] = 0;
       c[j >> 2] = 0;
      }
      c[i >> 2] = 0;
      c[j >> 2] = 0;
     }
     e = c[e >> 2] | 0;
     c[i >> 2] = e;
     c[j >> 2] = c[y + 132 >> 2];
     if (e | 0) {
      u = e;
      c[u >> 2] = (c[u >> 2] | 0) + 1;
     }
     e = y + 136 | 0;
     if (!v) {
      f = c[k >> 2] | 0;
      if (f | 0) {
       u = c[f >> 2] | 0;
       c[f >> 2] = u - 1;
       if ((u | 0) == 1) {
        cf(c[k >> 2] | 0);
        c[k >> 2] = 0;
        c[l >> 2] = 0;
       }
       c[k >> 2] = 0;
       c[l >> 2] = 0;
      }
      e = c[e >> 2] | 0;
      c[k >> 2] = e;
      c[l >> 2] = c[y + 140 >> 2];
      if (e | 0) {
       u = e;
       c[u >> 2] = (c[u >> 2] | 0) + 1;
      }
      e = y + 144 | 0;
      if (!v) {
       f = c[m >> 2] | 0;
       if (f | 0) {
        u = c[f >> 2] | 0;
        c[f >> 2] = u - 1;
        if ((u | 0) == 1) {
         cf(c[m >> 2] | 0);
         c[m >> 2] = 0;
         c[n >> 2] = 0;
        }
        c[m >> 2] = 0;
        c[n >> 2] = 0;
       }
       e = c[e >> 2] | 0;
       c[m >> 2] = e;
       c[n >> 2] = c[y + 148 >> 2];
       if (e | 0) {
        u = e;
        c[u >> 2] = (c[u >> 2] | 0) + 1;
       }
      }
     }
    }
   }
   f = w + 152 | 0;
   g = w + 160 | 0;
   h = w + 164 | 0;
   i = w + 168 | 0;
   j = w + 172 | 0;
   k = w + 176 | 0;
   l = w + 180 | 0;
   m = w + 184 | 0;
   n = w + 188 | 0;
   o = f;
   p = o + 40 | 0;
   do {
    c[o >> 2] = 0;
    o = o + 4 | 0;
   } while ((o | 0) < (p | 0));
   do if (!v) {
    e = c[y + 152 >> 2] | 0;
    u = c[y + 156 >> 2] | 0;
    c[f >> 2] = e;
    c[w + 156 >> 2] = u;
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 160 | 0;
    f = c[g >> 2] | 0;
    if (f | 0) {
     u = c[f >> 2] | 0;
     c[f >> 2] = u - 1;
     if ((u | 0) == 1) {
      cf(c[g >> 2] | 0);
      c[g >> 2] = 0;
      c[h >> 2] = 0;
     }
     c[g >> 2] = 0;
     c[h >> 2] = 0;
    }
    e = c[e >> 2] | 0;
    c[g >> 2] = e;
    c[h >> 2] = c[y + 164 >> 2];
    if (e | 0) {
     u = e;
     c[u >> 2] = (c[u >> 2] | 0) + 1;
    }
    e = y + 168 | 0;
    if (!v) {
     f = c[i >> 2] | 0;
     if (f | 0) {
      u = c[f >> 2] | 0;
      c[f >> 2] = u - 1;
      if ((u | 0) == 1) {
       cf(c[i >> 2] | 0);
       c[i >> 2] = 0;
       c[j >> 2] = 0;
      }
      c[i >> 2] = 0;
      c[j >> 2] = 0;
     }
     e = c[e >> 2] | 0;
     c[i >> 2] = e;
     c[j >> 2] = c[y + 172 >> 2];
     if (e | 0) {
      u = e;
      c[u >> 2] = (c[u >> 2] | 0) + 1;
     }
     e = y + 176 | 0;
     if (!v) {
      f = c[k >> 2] | 0;
      if (f | 0) {
       u = c[f >> 2] | 0;
       c[f >> 2] = u - 1;
       if ((u | 0) == 1) {
        cf(c[k >> 2] | 0);
        c[k >> 2] = 0;
        c[l >> 2] = 0;
       }
       c[k >> 2] = 0;
       c[l >> 2] = 0;
      }
      e = c[e >> 2] | 0;
      c[k >> 2] = e;
      c[l >> 2] = c[y + 180 >> 2];
      if (e | 0) {
       u = e;
       c[u >> 2] = (c[u >> 2] | 0) + 1;
      }
      e = y + 184 | 0;
      if (!v) {
       f = c[m >> 2] | 0;
       if (f | 0) {
        u = c[f >> 2] | 0;
        c[f >> 2] = u - 1;
        if ((u | 0) == 1) {
         cf(c[m >> 2] | 0);
         c[m >> 2] = 0;
         c[n >> 2] = 0;
        }
        c[m >> 2] = 0;
        c[n >> 2] = 0;
       }
       e = c[e >> 2] | 0;
       c[m >> 2] = e;
       c[n >> 2] = c[y + 188 >> 2];
       if (!e) break;
       u = e;
       c[u >> 2] = (c[u >> 2] | 0) + 1;
      }
     }
    }
   } while (0);
   e = w + 192 | 0;
   f = y + 192 | 0;
   o = e;
   p = o + 40 | 0;
   do {
    c[o >> 2] = 0;
    o = o + 4 | 0;
   } while ((o | 0) < (p | 0));
   o = f;
   f = c[o + 4 >> 2] | 0;
   c[e >> 2] = c[o >> 2];
   c[e + 4 >> 2] = f;
   e = y + 200 | 0;
   f = c[e + 4 >> 2] | 0;
   o = w + 200 | 0;
   c[o >> 2] = c[e >> 2];
   c[o + 4 >> 2] = f;
   o = y + 208 | 0;
   f = c[o + 4 >> 2] | 0;
   e = w + 208 | 0;
   c[e >> 2] = c[o >> 2];
   c[e + 4 >> 2] = f;
   e = y + 216 | 0;
   f = c[e + 4 >> 2] | 0;
   o = w + 216 | 0;
   c[o >> 2] = c[e >> 2];
   c[o + 4 >> 2] = f;
   o = y + 224 | 0;
   f = c[o + 4 >> 2] | 0;
   e = w + 224 | 0;
   c[e >> 2] = c[o >> 2];
   c[e + 4 >> 2] = f;
   e = w + 232 | 0;
   f = y + 232 | 0;
   o = e;
   p = o + 40 | 0;
   do {
    c[o >> 2] = 0;
    o = o + 4 | 0;
   } while ((o | 0) < (p | 0));
   g = f;
   f = c[g + 4 >> 2] | 0;
   c[e >> 2] = c[g >> 2];
   c[e + 4 >> 2] = f;
   e = y + 240 | 0;
   f = c[e + 4 >> 2] | 0;
   g = w + 240 | 0;
   c[g >> 2] = c[e >> 2];
   c[g + 4 >> 2] = f;
   g = y + 248 | 0;
   f = c[g + 4 >> 2] | 0;
   e = w + 248 | 0;
   c[e >> 2] = c[g >> 2];
   c[e + 4 >> 2] = f;
   e = y + 256 | 0;
   f = c[e + 4 >> 2] | 0;
   g = w + 256 | 0;
   c[g >> 2] = c[e >> 2];
   c[g + 4 >> 2] = f;
   g = y + 264 | 0;
   f = c[g + 4 >> 2] | 0;
   e = w + 264 | 0;
   c[e >> 2] = c[g >> 2];
   c[e + 4 >> 2] = f;
   hd(w + 272 | 0, y + 272 | 0);
   c[w + 340 >> 2] = c[y + 340 >> 2];
   e = w + 344 | 0;
   c[e >> 2] = 0;
   f = w + 352 | 0;
   c[f >> 2] = 0;
   c[f + 4 >> 2] = 0;
   c[f + 8 >> 2] = 0;
   c[f + 12 >> 2] = 0;
   c[f + 16 >> 2] = 0;
   a[w + 372 >> 0] = 10;
   c[w + 376 >> 2] = 1;
   c[w + 380 >> 2] = 0;
   a[w + 384 >> 0] = 10;
   c[w + 388 >> 2] = 1;
   c[w + 392 >> 2] = 0;
   a[w + 396 >> 0] = 10;
   c[w + 400 >> 2] = 1;
   c[w + 404 >> 2] = 0;
   a[w + 408 >> 0] = 10;
   c[w + 412 >> 2] = 1;
   c[w + 416 >> 2] = 0;
   a[w + 420 >> 0] = 10;
   c[w + 424 >> 2] = 1;
   c[w + 428 >> 2] = 0;
   a[w + 432 >> 0] = 10;
   c[w + 436 >> 2] = 1;
   c[w + 440 >> 2] = 0;
   a[w + 444 >> 0] = 10;
   c[w + 448 >> 2] = 1;
   c[w + 452 >> 2] = 0;
   a[w + 456 >> 0] = 10;
   c[w + 460 >> 2] = 1;
   c[w + 464 >> 2] = 0;
   a[w + 468 >> 0] = 10;
   c[w + 472 >> 2] = 1;
   c[w + 476 >> 2] = 0;
   a[w + 480 >> 0] = 10;
   c[w + 484 >> 2] = 1;
   c[w + 488 >> 2] = 0;
   a[w + 492 >> 0] = 10;
   c[w + 496 >> 2] = 1;
   c[w + 500 >> 2] = 0;
   a[w + 504 >> 0] = 10;
   c[w + 508 >> 2] = 1;
   c[w + 512 >> 2] = 0;
   a[w + 516 >> 0] = 10;
   c[w + 520 >> 2] = 1;
   c[w + 524 >> 2] = 0;
   a[w + 528 >> 0] = 10;
   c[w + 532 >> 2] = 1;
   c[w + 536 >> 2] = 0;
   a[w + 540 >> 0] = 10;
   c[w + 544 >> 2] = 1;
   c[w + 548 >> 2] = 0;
   a[w + 552 >> 0] = 10;
   c[w + 556 >> 2] = 1;
   g = w + 624 | 0;
   c[g >> 2] = -1;
   c[w + 628 >> 2] = -1;
   c[w + 632 >> 2] = 0;
   h = w + 640 | 0;
   c[h >> 2] = 0;
   c[h + 4 >> 2] = 0;
   c[h + 8 >> 2] = 0;
   c[h + 12 >> 2] = 0;
   c[h + 16 >> 2] = 0;
   a[w + 660 >> 0] = 10;
   c[w + 664 >> 2] = 1;
   c[w + 668 >> 2] = 0;
   a[w + 672 >> 0] = 10;
   c[w + 676 >> 2] = 1;
   c[w + 680 >> 2] = 0;
   a[w + 684 >> 0] = 10;
   c[w + 688 >> 2] = 1;
   c[w + 692 >> 2] = 0;
   a[w + 696 >> 0] = 10;
   c[w + 700 >> 2] = 1;
   c[w + 704 >> 2] = 0;
   a[w + 708 >> 0] = 10;
   c[w + 712 >> 2] = 1;
   c[w + 716 >> 2] = 0;
   a[w + 720 >> 0] = 10;
   c[w + 724 >> 2] = 1;
   c[w + 728 >> 2] = 0;
   a[w + 732 >> 0] = 10;
   c[w + 736 >> 2] = 1;
   c[w + 740 >> 2] = 0;
   a[w + 744 >> 0] = 10;
   c[w + 748 >> 2] = 1;
   c[w + 752 >> 2] = 0;
   a[w + 756 >> 0] = 10;
   c[w + 760 >> 2] = 1;
   c[w + 764 >> 2] = 0;
   a[w + 768 >> 0] = 10;
   c[w + 772 >> 2] = 1;
   c[w + 776 >> 2] = 0;
   a[w + 780 >> 0] = 10;
   c[w + 784 >> 2] = 1;
   c[w + 788 >> 2] = 0;
   a[w + 792 >> 0] = 10;
   c[w + 796 >> 2] = 1;
   c[w + 800 >> 2] = 0;
   a[w + 804 >> 0] = 10;
   c[w + 808 >> 2] = 1;
   c[w + 812 >> 2] = 0;
   a[w + 816 >> 0] = 10;
   c[w + 820 >> 2] = 1;
   c[w + 824 >> 2] = 0;
   a[w + 828 >> 0] = 10;
   c[w + 832 >> 2] = 1;
   c[w + 836 >> 2] = 0;
   a[w + 840 >> 0] = 10;
   c[w + 844 >> 2] = 1;
   i = w + 912 | 0;
   c[i >> 2] = -1;
   c[w + 916 >> 2] = -1;
   c[w + 920 >> 2] = 0;
   j = w + 928 | 0;
   c[j >> 2] = 0;
   c[j + 4 >> 2] = 0;
   c[j + 8 >> 2] = 0;
   c[j + 12 >> 2] = 0;
   c[j + 16 >> 2] = 0;
   a[w + 948 >> 0] = 10;
   c[w + 952 >> 2] = 1;
   c[w + 956 >> 2] = 0;
   a[w + 960 >> 0] = 10;
   c[w + 964 >> 2] = 1;
   c[w + 968 >> 2] = 0;
   a[w + 972 >> 0] = 10;
   c[w + 976 >> 2] = 1;
   c[w + 980 >> 2] = 0;
   a[w + 984 >> 0] = 10;
   c[w + 988 >> 2] = 1;
   c[w + 992 >> 2] = 0;
   a[w + 996 >> 0] = 10;
   c[w + 1e3 >> 2] = 1;
   c[w + 1004 >> 2] = 0;
   a[w + 1008 >> 0] = 10;
   c[w + 1012 >> 2] = 1;
   c[w + 1016 >> 2] = 0;
   a[w + 1020 >> 0] = 10;
   c[w + 1024 >> 2] = 1;
   c[w + 1028 >> 2] = 0;
   a[w + 1032 >> 0] = 10;
   c[w + 1036 >> 2] = 1;
   c[w + 1040 >> 2] = 0;
   a[w + 1044 >> 0] = 10;
   c[w + 1048 >> 2] = 1;
   c[w + 1052 >> 2] = 0;
   a[w + 1056 >> 0] = 10;
   c[w + 1060 >> 2] = 1;
   c[w + 1064 >> 2] = 0;
   a[w + 1068 >> 0] = 10;
   c[w + 1072 >> 2] = 1;
   c[w + 1076 >> 2] = 0;
   a[w + 1080 >> 0] = 10;
   c[w + 1084 >> 2] = 1;
   c[w + 1088 >> 2] = 0;
   a[w + 1092 >> 0] = 10;
   c[w + 1096 >> 2] = 1;
   c[w + 1100 >> 2] = 0;
   a[w + 1104 >> 0] = 10;
   c[w + 1108 >> 2] = 1;
   c[w + 1112 >> 2] = 0;
   a[w + 1116 >> 0] = 10;
   c[w + 1120 >> 2] = 1;
   c[w + 1124 >> 2] = 0;
   a[w + 1128 >> 0] = 10;
   c[w + 1132 >> 2] = 1;
   k = w + 1200 | 0;
   c[k >> 2] = -1;
   c[w + 1204 >> 2] = -1;
   c[w + 1208 >> 2] = 0;
   l = w + 1216 | 0;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[l + 8 >> 2] = 0;
   c[l + 12 >> 2] = 0;
   c[l + 16 >> 2] = 0;
   a[w + 1236 >> 0] = 10;
   c[w + 1240 >> 2] = 1;
   c[w + 1244 >> 2] = 0;
   a[w + 1248 >> 0] = 10;
   c[w + 1252 >> 2] = 1;
   c[w + 1256 >> 2] = 0;
   a[w + 1260 >> 0] = 10;
   c[w + 1264 >> 2] = 1;
   c[w + 1268 >> 2] = 0;
   a[w + 1272 >> 0] = 10;
   c[w + 1276 >> 2] = 1;
   c[w + 1280 >> 2] = 0;
   a[w + 1284 >> 0] = 10;
   c[w + 1288 >> 2] = 1;
   c[w + 1292 >> 2] = 0;
   a[w + 1296 >> 0] = 10;
   c[w + 1300 >> 2] = 1;
   c[w + 1304 >> 2] = 0;
   a[w + 1308 >> 0] = 10;
   c[w + 1312 >> 2] = 1;
   c[w + 1316 >> 2] = 0;
   a[w + 1320 >> 0] = 10;
   c[w + 1324 >> 2] = 1;
   c[w + 1328 >> 2] = 0;
   a[w + 1332 >> 0] = 10;
   c[w + 1336 >> 2] = 1;
   c[w + 1340 >> 2] = 0;
   a[w + 1344 >> 0] = 10;
   c[w + 1348 >> 2] = 1;
   c[w + 1352 >> 2] = 0;
   a[w + 1356 >> 0] = 10;
   c[w + 1360 >> 2] = 1;
   c[w + 1364 >> 2] = 0;
   a[w + 1368 >> 0] = 10;
   c[w + 1372 >> 2] = 1;
   c[w + 1376 >> 2] = 0;
   a[w + 1380 >> 0] = 10;
   c[w + 1384 >> 2] = 1;
   c[w + 1388 >> 2] = 0;
   a[w + 1392 >> 0] = 10;
   c[w + 1396 >> 2] = 1;
   c[w + 1400 >> 2] = 0;
   a[w + 1404 >> 0] = 10;
   c[w + 1408 >> 2] = 1;
   c[w + 1412 >> 2] = 0;
   a[w + 1416 >> 0] = 10;
   c[w + 1420 >> 2] = 1;
   m = w + 1488 | 0;
   c[m >> 2] = -1;
   c[w + 1492 >> 2] = -1;
   c[w + 1496 >> 2] = 0;
   n = w + 1504 | 0;
   c[n >> 2] = 0;
   c[n + 4 >> 2] = 0;
   c[n + 8 >> 2] = 0;
   c[n + 12 >> 2] = 0;
   c[n + 16 >> 2] = 0;
   a[w + 1524 >> 0] = 10;
   c[w + 1528 >> 2] = 1;
   c[w + 1532 >> 2] = 0;
   a[w + 1536 >> 0] = 10;
   c[w + 1540 >> 2] = 1;
   c[w + 1544 >> 2] = 0;
   a[w + 1548 >> 0] = 10;
   c[w + 1552 >> 2] = 1;
   c[w + 1556 >> 2] = 0;
   a[w + 1560 >> 0] = 10;
   c[w + 1564 >> 2] = 1;
   c[w + 1568 >> 2] = 0;
   a[w + 1572 >> 0] = 10;
   c[w + 1576 >> 2] = 1;
   c[w + 1580 >> 2] = 0;
   a[w + 1584 >> 0] = 10;
   c[w + 1588 >> 2] = 1;
   c[w + 1592 >> 2] = 0;
   a[w + 1596 >> 0] = 10;
   c[w + 1600 >> 2] = 1;
   c[w + 1604 >> 2] = 0;
   a[w + 1608 >> 0] = 10;
   c[w + 1612 >> 2] = 1;
   c[w + 1616 >> 2] = 0;
   a[w + 1620 >> 0] = 10;
   c[w + 1624 >> 2] = 1;
   c[w + 1628 >> 2] = 0;
   a[w + 1632 >> 0] = 10;
   c[w + 1636 >> 2] = 1;
   c[w + 1640 >> 2] = 0;
   a[w + 1644 >> 0] = 10;
   c[w + 1648 >> 2] = 1;
   c[w + 1652 >> 2] = 0;
   a[w + 1656 >> 0] = 10;
   c[w + 1660 >> 2] = 1;
   c[w + 1664 >> 2] = 0;
   a[w + 1668 >> 0] = 10;
   c[w + 1672 >> 2] = 1;
   c[w + 1676 >> 2] = 0;
   a[w + 1680 >> 0] = 10;
   c[w + 1684 >> 2] = 1;
   c[w + 1688 >> 2] = 0;
   a[w + 1692 >> 0] = 10;
   c[w + 1696 >> 2] = 1;
   c[w + 1700 >> 2] = 0;
   a[w + 1704 >> 0] = 10;
   c[w + 1708 >> 2] = 1;
   o = w + 1776 | 0;
   c[o >> 2] = -1;
   c[w + 1780 >> 2] = -1;
   c[w + 1784 >> 2] = 0;
   p = w + 1792 | 0;
   c[p >> 2] = 0;
   c[p + 4 >> 2] = 0;
   c[p + 8 >> 2] = 0;
   c[p + 12 >> 2] = 0;
   c[p + 16 >> 2] = 0;
   a[w + 1812 >> 0] = 10;
   c[w + 1816 >> 2] = 1;
   c[w + 1820 >> 2] = 0;
   a[w + 1824 >> 0] = 10;
   c[w + 1828 >> 2] = 1;
   c[w + 1832 >> 2] = 0;
   a[w + 1836 >> 0] = 10;
   c[w + 1840 >> 2] = 1;
   c[w + 1844 >> 2] = 0;
   a[w + 1848 >> 0] = 10;
   c[w + 1852 >> 2] = 1;
   c[w + 1856 >> 2] = 0;
   a[w + 1860 >> 0] = 10;
   c[w + 1864 >> 2] = 1;
   c[w + 1868 >> 2] = 0;
   a[w + 1872 >> 0] = 10;
   c[w + 1876 >> 2] = 1;
   c[w + 1880 >> 2] = 0;
   a[w + 1884 >> 0] = 10;
   c[w + 1888 >> 2] = 1;
   c[w + 1892 >> 2] = 0;
   a[w + 1896 >> 0] = 10;
   c[w + 1900 >> 2] = 1;
   c[w + 1904 >> 2] = 0;
   a[w + 1908 >> 0] = 10;
   c[w + 1912 >> 2] = 1;
   c[w + 1916 >> 2] = 0;
   a[w + 1920 >> 0] = 10;
   c[w + 1924 >> 2] = 1;
   c[w + 1928 >> 2] = 0;
   a[w + 1932 >> 0] = 10;
   c[w + 1936 >> 2] = 1;
   c[w + 1940 >> 2] = 0;
   a[w + 1944 >> 0] = 10;
   c[w + 1948 >> 2] = 1;
   c[w + 1952 >> 2] = 0;
   a[w + 1956 >> 0] = 10;
   c[w + 1960 >> 2] = 1;
   c[w + 1964 >> 2] = 0;
   a[w + 1968 >> 0] = 10;
   c[w + 1972 >> 2] = 1;
   c[w + 1976 >> 2] = 0;
   a[w + 1980 >> 0] = 10;
   c[w + 1984 >> 2] = 1;
   c[w + 1988 >> 2] = 0;
   a[w + 1992 >> 0] = 10;
   c[w + 1996 >> 2] = 1;
   q = w + 2064 | 0;
   c[q >> 2] = -1;
   c[w + 2068 >> 2] = -1;
   c[w + 2072 >> 2] = 0;
   r = w + 2080 | 0;
   c[r >> 2] = 0;
   c[r + 4 >> 2] = 0;
   c[r + 8 >> 2] = 0;
   c[r + 12 >> 2] = 0;
   c[r + 16 >> 2] = 0;
   a[w + 2100 >> 0] = 10;
   c[w + 2104 >> 2] = 1;
   c[w + 2108 >> 2] = 0;
   a[w + 2112 >> 0] = 10;
   c[w + 2116 >> 2] = 1;
   c[w + 2120 >> 2] = 0;
   a[w + 2124 >> 0] = 10;
   c[w + 2128 >> 2] = 1;
   c[w + 2132 >> 2] = 0;
   a[w + 2136 >> 0] = 10;
   c[w + 2140 >> 2] = 1;
   c[w + 2144 >> 2] = 0;
   a[w + 2148 >> 0] = 10;
   c[w + 2152 >> 2] = 1;
   c[w + 2156 >> 2] = 0;
   a[w + 2160 >> 0] = 10;
   c[w + 2164 >> 2] = 1;
   c[w + 2168 >> 2] = 0;
   a[w + 2172 >> 0] = 10;
   c[w + 2176 >> 2] = 1;
   c[w + 2180 >> 2] = 0;
   a[w + 2184 >> 0] = 10;
   c[w + 2188 >> 2] = 1;
   c[w + 2192 >> 2] = 0;
   a[w + 2196 >> 0] = 10;
   c[w + 2200 >> 2] = 1;
   c[w + 2204 >> 2] = 0;
   a[w + 2208 >> 0] = 10;
   c[w + 2212 >> 2] = 1;
   c[w + 2216 >> 2] = 0;
   a[w + 2220 >> 0] = 10;
   c[w + 2224 >> 2] = 1;
   c[w + 2228 >> 2] = 0;
   a[w + 2232 >> 0] = 10;
   c[w + 2236 >> 2] = 1;
   c[w + 2240 >> 2] = 0;
   a[w + 2244 >> 0] = 10;
   c[w + 2248 >> 2] = 1;
   c[w + 2252 >> 2] = 0;
   a[w + 2256 >> 0] = 10;
   c[w + 2260 >> 2] = 1;
   c[w + 2264 >> 2] = 0;
   a[w + 2268 >> 0] = 10;
   c[w + 2272 >> 2] = 1;
   c[w + 2276 >> 2] = 0;
   a[w + 2280 >> 0] = 10;
   c[w + 2284 >> 2] = 1;
   s = w + 2352 | 0;
   c[s >> 2] = -1;
   c[w + 2356 >> 2] = -1;
   c[w + 2360 >> 2] = 0;
   t = w + 2368 | 0;
   c[t >> 2] = 0;
   c[t + 4 >> 2] = 0;
   c[t + 8 >> 2] = 0;
   c[t + 12 >> 2] = 0;
   c[t + 16 >> 2] = 0;
   a[w + 2388 >> 0] = 10;
   c[w + 2392 >> 2] = 1;
   c[w + 2396 >> 2] = 0;
   a[w + 2400 >> 0] = 10;
   c[w + 2404 >> 2] = 1;
   c[w + 2408 >> 2] = 0;
   a[w + 2412 >> 0] = 10;
   c[w + 2416 >> 2] = 1;
   c[w + 2420 >> 2] = 0;
   a[w + 2424 >> 0] = 10;
   c[w + 2428 >> 2] = 1;
   c[w + 2432 >> 2] = 0;
   a[w + 2436 >> 0] = 10;
   c[w + 2440 >> 2] = 1;
   c[w + 2444 >> 2] = 0;
   a[w + 2448 >> 0] = 10;
   c[w + 2452 >> 2] = 1;
   c[w + 2456 >> 2] = 0;
   a[w + 2460 >> 0] = 10;
   c[w + 2464 >> 2] = 1;
   c[w + 2468 >> 2] = 0;
   a[w + 2472 >> 0] = 10;
   c[w + 2476 >> 2] = 1;
   c[w + 2480 >> 2] = 0;
   a[w + 2484 >> 0] = 10;
   c[w + 2488 >> 2] = 1;
   c[w + 2492 >> 2] = 0;
   a[w + 2496 >> 0] = 10;
   c[w + 2500 >> 2] = 1;
   c[w + 2504 >> 2] = 0;
   a[w + 2508 >> 0] = 10;
   c[w + 2512 >> 2] = 1;
   c[w + 2516 >> 2] = 0;
   a[w + 2520 >> 0] = 10;
   c[w + 2524 >> 2] = 1;
   c[w + 2528 >> 2] = 0;
   a[w + 2532 >> 0] = 10;
   c[w + 2536 >> 2] = 1;
   c[w + 2540 >> 2] = 0;
   a[w + 2544 >> 0] = 10;
   c[w + 2548 >> 2] = 1;
   c[w + 2552 >> 2] = 0;
   a[w + 2556 >> 0] = 10;
   c[w + 2560 >> 2] = 1;
   c[w + 2564 >> 2] = 0;
   a[w + 2568 >> 0] = 10;
   c[w + 2572 >> 2] = 1;
   u = w + 2640 | 0;
   c[u >> 2] = -1;
   c[w + 2644 >> 2] = -1;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 344 | 0);
    e = y + 352 | 0;
    c[f >> 2] = c[e >> 2];
    c[f + 4 >> 2] = c[e + 4 >> 2];
    c[f + 8 >> 2] = c[e + 8 >> 2];
    c[f + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     F = w + 368 + (e * 12 | 0) | 0;
     c[F >> 2] = 0;
     Be(F, y + 368 + (e * 12 | 0) | 0);
     F = y + 368 + (e * 12 | 0) + 4 | 0;
     E = c[F + 4 >> 2] | 0;
     f = w + 368 + (e * 12 | 0) + 4 | 0;
     c[f >> 2] = c[F >> 2];
     c[f + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 560 >> 2] = c[y + 560 >> 2];
   c[w + 564 >> 2] = c[y + 564 >> 2];
   c[w + 568 >> 2] = c[y + 568 >> 2];
   c[w + 572 >> 2] = c[y + 572 >> 2];
   c[w + 576 >> 2] = c[y + 576 >> 2];
   c[w + 580 >> 2] = c[y + 580 >> 2];
   c[w + 584 >> 2] = c[y + 584 >> 2];
   c[w + 588 >> 2] = c[y + 588 >> 2];
   c[w + 592 >> 2] = c[y + 592 >> 2];
   c[w + 596 >> 2] = c[y + 596 >> 2];
   c[w + 600 >> 2] = c[y + 600 >> 2];
   c[w + 604 >> 2] = c[y + 604 >> 2];
   c[w + 608 >> 2] = c[y + 608 >> 2];
   c[w + 612 >> 2] = c[y + 612 >> 2];
   c[w + 616 >> 2] = c[y + 616 >> 2];
   c[w + 620 >> 2] = c[y + 620 >> 2];
   E = y + 624 | 0;
   F = c[E + 4 >> 2] | 0;
   e = g;
   c[e >> 2] = c[E >> 2];
   c[e + 4 >> 2] = F;
   e = w + 632 | 0;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 632 | 0);
    e = y + 640 | 0;
    c[h >> 2] = c[e >> 2];
    c[h + 4 >> 2] = c[e + 4 >> 2];
    c[h + 8 >> 2] = c[e + 8 >> 2];
    c[h + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     h = w + 656 + (e * 12 | 0) | 0;
     c[h >> 2] = 0;
     Be(h, y + 656 + (e * 12 | 0) | 0);
     h = y + 656 + (e * 12 | 0) + 4 | 0;
     E = c[h + 4 >> 2] | 0;
     F = w + 656 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[h >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 848 >> 2] = c[y + 848 >> 2];
   c[w + 852 >> 2] = c[y + 852 >> 2];
   c[w + 856 >> 2] = c[y + 856 >> 2];
   c[w + 860 >> 2] = c[y + 860 >> 2];
   c[w + 864 >> 2] = c[y + 864 >> 2];
   c[w + 868 >> 2] = c[y + 868 >> 2];
   c[w + 872 >> 2] = c[y + 872 >> 2];
   c[w + 876 >> 2] = c[y + 876 >> 2];
   c[w + 880 >> 2] = c[y + 880 >> 2];
   c[w + 884 >> 2] = c[y + 884 >> 2];
   c[w + 888 >> 2] = c[y + 888 >> 2];
   c[w + 892 >> 2] = c[y + 892 >> 2];
   c[w + 896 >> 2] = c[y + 896 >> 2];
   c[w + 900 >> 2] = c[y + 900 >> 2];
   c[w + 904 >> 2] = c[y + 904 >> 2];
   c[w + 908 >> 2] = c[y + 908 >> 2];
   E = y + 912 | 0;
   F = c[E + 4 >> 2] | 0;
   e = i;
   c[e >> 2] = c[E >> 2];
   c[e + 4 >> 2] = F;
   e = w + 920 | 0;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 920 | 0);
    e = y + 928 | 0;
    c[j >> 2] = c[e >> 2];
    c[j + 4 >> 2] = c[e + 4 >> 2];
    c[j + 8 >> 2] = c[e + 8 >> 2];
    c[j + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     j = w + 944 + (e * 12 | 0) | 0;
     c[j >> 2] = 0;
     Be(j, y + 944 + (e * 12 | 0) | 0);
     j = y + 944 + (e * 12 | 0) + 4 | 0;
     E = c[j + 4 >> 2] | 0;
     F = w + 944 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[j >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 1136 >> 2] = c[y + 1136 >> 2];
   c[w + 1140 >> 2] = c[y + 1140 >> 2];
   c[w + 1144 >> 2] = c[y + 1144 >> 2];
   c[w + 1148 >> 2] = c[y + 1148 >> 2];
   c[w + 1152 >> 2] = c[y + 1152 >> 2];
   c[w + 1156 >> 2] = c[y + 1156 >> 2];
   c[w + 1160 >> 2] = c[y + 1160 >> 2];
   c[w + 1164 >> 2] = c[y + 1164 >> 2];
   c[w + 1168 >> 2] = c[y + 1168 >> 2];
   c[w + 1172 >> 2] = c[y + 1172 >> 2];
   c[w + 1176 >> 2] = c[y + 1176 >> 2];
   c[w + 1180 >> 2] = c[y + 1180 >> 2];
   c[w + 1184 >> 2] = c[y + 1184 >> 2];
   c[w + 1188 >> 2] = c[y + 1188 >> 2];
   c[w + 1192 >> 2] = c[y + 1192 >> 2];
   c[w + 1196 >> 2] = c[y + 1196 >> 2];
   E = y + 1200 | 0;
   F = c[E + 4 >> 2] | 0;
   e = k;
   c[e >> 2] = c[E >> 2];
   c[e + 4 >> 2] = F;
   e = w + 1208 | 0;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 1208 | 0);
    e = y + 1216 | 0;
    c[l >> 2] = c[e >> 2];
    c[l + 4 >> 2] = c[e + 4 >> 2];
    c[l + 8 >> 2] = c[e + 8 >> 2];
    c[l + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     l = w + 1232 + (e * 12 | 0) | 0;
     c[l >> 2] = 0;
     Be(l, y + 1232 + (e * 12 | 0) | 0);
     l = y + 1232 + (e * 12 | 0) + 4 | 0;
     E = c[l + 4 >> 2] | 0;
     F = w + 1232 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[l >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 1424 >> 2] = c[y + 1424 >> 2];
   c[w + 1428 >> 2] = c[y + 1428 >> 2];
   c[w + 1432 >> 2] = c[y + 1432 >> 2];
   c[w + 1436 >> 2] = c[y + 1436 >> 2];
   c[w + 1440 >> 2] = c[y + 1440 >> 2];
   c[w + 1444 >> 2] = c[y + 1444 >> 2];
   c[w + 1448 >> 2] = c[y + 1448 >> 2];
   c[w + 1452 >> 2] = c[y + 1452 >> 2];
   c[w + 1456 >> 2] = c[y + 1456 >> 2];
   c[w + 1460 >> 2] = c[y + 1460 >> 2];
   c[w + 1464 >> 2] = c[y + 1464 >> 2];
   c[w + 1468 >> 2] = c[y + 1468 >> 2];
   c[w + 1472 >> 2] = c[y + 1472 >> 2];
   c[w + 1476 >> 2] = c[y + 1476 >> 2];
   c[w + 1480 >> 2] = c[y + 1480 >> 2];
   c[w + 1484 >> 2] = c[y + 1484 >> 2];
   E = y + 1488 | 0;
   F = c[E + 4 >> 2] | 0;
   e = m;
   c[e >> 2] = c[E >> 2];
   c[e + 4 >> 2] = F;
   e = w + 1496 | 0;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 1496 | 0);
    e = y + 1504 | 0;
    c[n >> 2] = c[e >> 2];
    c[n + 4 >> 2] = c[e + 4 >> 2];
    c[n + 8 >> 2] = c[e + 8 >> 2];
    c[n + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     n = w + 1520 + (e * 12 | 0) | 0;
     c[n >> 2] = 0;
     Be(n, y + 1520 + (e * 12 | 0) | 0);
     n = y + 1520 + (e * 12 | 0) + 4 | 0;
     E = c[n + 4 >> 2] | 0;
     F = w + 1520 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[n >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 1712 >> 2] = c[y + 1712 >> 2];
   c[w + 1716 >> 2] = c[y + 1716 >> 2];
   c[w + 1720 >> 2] = c[y + 1720 >> 2];
   c[w + 1724 >> 2] = c[y + 1724 >> 2];
   c[w + 1728 >> 2] = c[y + 1728 >> 2];
   c[w + 1732 >> 2] = c[y + 1732 >> 2];
   c[w + 1736 >> 2] = c[y + 1736 >> 2];
   c[w + 1740 >> 2] = c[y + 1740 >> 2];
   c[w + 1744 >> 2] = c[y + 1744 >> 2];
   c[w + 1748 >> 2] = c[y + 1748 >> 2];
   c[w + 1752 >> 2] = c[y + 1752 >> 2];
   c[w + 1756 >> 2] = c[y + 1756 >> 2];
   c[w + 1760 >> 2] = c[y + 1760 >> 2];
   c[w + 1764 >> 2] = c[y + 1764 >> 2];
   c[w + 1768 >> 2] = c[y + 1768 >> 2];
   c[w + 1772 >> 2] = c[y + 1772 >> 2];
   E = y + 1776 | 0;
   F = c[E + 4 >> 2] | 0;
   e = o;
   c[e >> 2] = c[E >> 2];
   c[e + 4 >> 2] = F;
   e = w + 1784 | 0;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 1784 | 0);
    e = y + 1792 | 0;
    c[p >> 2] = c[e >> 2];
    c[p + 4 >> 2] = c[e + 4 >> 2];
    c[p + 8 >> 2] = c[e + 8 >> 2];
    c[p + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     p = w + 1808 + (e * 12 | 0) | 0;
     c[p >> 2] = 0;
     Be(p, y + 1808 + (e * 12 | 0) | 0);
     p = y + 1808 + (e * 12 | 0) + 4 | 0;
     E = c[p + 4 >> 2] | 0;
     F = w + 1808 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[p >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 2e3 >> 2] = c[y + 2e3 >> 2];
   c[w + 2004 >> 2] = c[y + 2004 >> 2];
   c[w + 2008 >> 2] = c[y + 2008 >> 2];
   c[w + 2012 >> 2] = c[y + 2012 >> 2];
   c[w + 2016 >> 2] = c[y + 2016 >> 2];
   c[w + 2020 >> 2] = c[y + 2020 >> 2];
   c[w + 2024 >> 2] = c[y + 2024 >> 2];
   c[w + 2028 >> 2] = c[y + 2028 >> 2];
   c[w + 2032 >> 2] = c[y + 2032 >> 2];
   c[w + 2036 >> 2] = c[y + 2036 >> 2];
   c[w + 2040 >> 2] = c[y + 2040 >> 2];
   c[w + 2044 >> 2] = c[y + 2044 >> 2];
   c[w + 2048 >> 2] = c[y + 2048 >> 2];
   c[w + 2052 >> 2] = c[y + 2052 >> 2];
   c[w + 2056 >> 2] = c[y + 2056 >> 2];
   c[w + 2060 >> 2] = c[y + 2060 >> 2];
   E = y + 2064 | 0;
   F = c[E + 4 >> 2] | 0;
   e = q;
   c[e >> 2] = c[E >> 2];
   c[e + 4 >> 2] = F;
   e = w + 2072 | 0;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 2072 | 0);
    e = y + 2080 | 0;
    c[r >> 2] = c[e >> 2];
    c[r + 4 >> 2] = c[e + 4 >> 2];
    c[r + 8 >> 2] = c[e + 8 >> 2];
    c[r + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     r = w + 2096 + (e * 12 | 0) | 0;
     c[r >> 2] = 0;
     Be(r, y + 2096 + (e * 12 | 0) | 0);
     r = y + 2096 + (e * 12 | 0) + 4 | 0;
     E = c[r + 4 >> 2] | 0;
     F = w + 2096 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[r >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 2288 >> 2] = c[y + 2288 >> 2];
   c[w + 2292 >> 2] = c[y + 2292 >> 2];
   c[w + 2296 >> 2] = c[y + 2296 >> 2];
   c[w + 2300 >> 2] = c[y + 2300 >> 2];
   c[w + 2304 >> 2] = c[y + 2304 >> 2];
   c[w + 2308 >> 2] = c[y + 2308 >> 2];
   c[w + 2312 >> 2] = c[y + 2312 >> 2];
   c[w + 2316 >> 2] = c[y + 2316 >> 2];
   c[w + 2320 >> 2] = c[y + 2320 >> 2];
   c[w + 2324 >> 2] = c[y + 2324 >> 2];
   c[w + 2328 >> 2] = c[y + 2328 >> 2];
   c[w + 2332 >> 2] = c[y + 2332 >> 2];
   c[w + 2336 >> 2] = c[y + 2336 >> 2];
   c[w + 2340 >> 2] = c[y + 2340 >> 2];
   c[w + 2344 >> 2] = c[y + 2344 >> 2];
   c[w + 2348 >> 2] = c[y + 2348 >> 2];
   E = y + 2352 | 0;
   F = c[E + 4 >> 2] | 0;
   e = s;
   c[e >> 2] = c[E >> 2];
   c[e + 4 >> 2] = F;
   e = w + 2360 | 0;
   if (!v) {
    c[e >> 2] = 0;
    Be(e, y + 2360 | 0);
    e = y + 2368 | 0;
    c[t >> 2] = c[e >> 2];
    c[t + 4 >> 2] = c[e + 4 >> 2];
    c[t + 8 >> 2] = c[e + 8 >> 2];
    c[t + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     t = w + 2384 + (e * 12 | 0) | 0;
     c[t >> 2] = 0;
     Be(t, y + 2384 + (e * 12 | 0) | 0);
     t = y + 2384 + (e * 12 | 0) + 4 | 0;
     E = c[t + 4 >> 2] | 0;
     F = w + 2384 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[t >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
   }
   c[w + 2576 >> 2] = c[y + 2576 >> 2];
   c[w + 2580 >> 2] = c[y + 2580 >> 2];
   c[w + 2584 >> 2] = c[y + 2584 >> 2];
   c[w + 2588 >> 2] = c[y + 2588 >> 2];
   c[w + 2592 >> 2] = c[y + 2592 >> 2];
   c[w + 2596 >> 2] = c[y + 2596 >> 2];
   c[w + 2600 >> 2] = c[y + 2600 >> 2];
   c[w + 2604 >> 2] = c[y + 2604 >> 2];
   c[w + 2608 >> 2] = c[y + 2608 >> 2];
   c[w + 2612 >> 2] = c[y + 2612 >> 2];
   c[w + 2616 >> 2] = c[y + 2616 >> 2];
   c[w + 2620 >> 2] = c[y + 2620 >> 2];
   c[w + 2624 >> 2] = c[y + 2624 >> 2];
   c[w + 2628 >> 2] = c[y + 2628 >> 2];
   c[w + 2632 >> 2] = c[y + 2632 >> 2];
   c[w + 2636 >> 2] = c[y + 2636 >> 2];
   g = y + 2640 | 0;
   f = c[g + 4 >> 2] | 0;
   e = u;
   c[e >> 2] = c[g >> 2];
   c[e + 4 >> 2] = f;
   c[w + 2648 >> 2] = c[y + 2648 >> 2];
   e = w + 2652 | 0;
   c[e >> 2] = 0;
   f = w + 2656 | 0;
   c[f >> 2] = 0;
   c[w + 2660 >> 2] = 0;
   c[w + 2664 >> 2] = -1;
   c[w + 2668 >> 2] = -1;
   c[w + 2672 >> 2] = 0;
   c[w + 2676 >> 2] = -1;
   c[w + 2680 >> 2] = -1;
   c[w + 2684 >> 2] = 0;
   c[w + 2688 >> 2] = -1;
   c[w + 2692 >> 2] = -1;
   c[w + 2696 >> 2] = 0;
   c[w + 2700 >> 2] = -1;
   c[w + 2704 >> 2] = -1;
   c[w + 2708 >> 2] = 0;
   c[w + 2712 >> 2] = -1;
   c[w + 2716 >> 2] = -1;
   c[w + 2720 >> 2] = 0;
   c[w + 2724 >> 2] = -1;
   c[w + 2728 >> 2] = -1;
   c[w + 2732 >> 2] = 0;
   c[w + 2736 >> 2] = -1;
   c[w + 2740 >> 2] = -1;
   c[w + 2744 >> 2] = 0;
   c[w + 2748 >> 2] = -1;
   c[w + 2752 >> 2] = -1;
   c[w + 2756 >> 2] = 0;
   c[w + 2760 >> 2] = -1;
   c[w + 2764 >> 2] = -1;
   c[w + 2768 >> 2] = 0;
   c[w + 2772 >> 2] = -1;
   c[w + 2776 >> 2] = -1;
   c[w + 2780 >> 2] = 0;
   c[w + 2784 >> 2] = -1;
   c[w + 2788 >> 2] = -1;
   c[w + 2792 >> 2] = 0;
   c[w + 2796 >> 2] = -1;
   c[w + 2800 >> 2] = -1;
   c[w + 2804 >> 2] = 0;
   c[w + 2808 >> 2] = -1;
   c[w + 2812 >> 2] = -1;
   c[w + 2816 >> 2] = 0;
   c[w + 2820 >> 2] = -1;
   c[w + 2824 >> 2] = -1;
   c[w + 2828 >> 2] = 0;
   c[w + 2832 >> 2] = -1;
   c[w + 2836 >> 2] = -1;
   c[w + 2840 >> 2] = 0;
   c[w + 2844 >> 2] = -1;
   c[w + 2848 >> 2] = -1;
   g = w + 2852 | 0;
   c[g >> 2] = -1;
   c[w + 2856 >> 2] = 0;
   h = w + 2860 | 0;
   c[h >> 2] = 0;
   c[w + 2864 >> 2] = 0;
   c[w + 2868 >> 2] = -1;
   c[w + 2872 >> 2] = -1;
   c[w + 2876 >> 2] = 0;
   c[w + 2880 >> 2] = -1;
   c[w + 2884 >> 2] = -1;
   c[w + 2888 >> 2] = 0;
   c[w + 2892 >> 2] = -1;
   c[w + 2896 >> 2] = -1;
   c[w + 2900 >> 2] = 0;
   c[w + 2904 >> 2] = -1;
   c[w + 2908 >> 2] = -1;
   c[w + 2912 >> 2] = 0;
   c[w + 2916 >> 2] = -1;
   c[w + 2920 >> 2] = -1;
   c[w + 2924 >> 2] = 0;
   c[w + 2928 >> 2] = -1;
   c[w + 2932 >> 2] = -1;
   c[w + 2936 >> 2] = 0;
   c[w + 2940 >> 2] = -1;
   c[w + 2944 >> 2] = -1;
   c[w + 2948 >> 2] = 0;
   c[w + 2952 >> 2] = -1;
   c[w + 2956 >> 2] = -1;
   c[w + 2960 >> 2] = 0;
   c[w + 2964 >> 2] = -1;
   c[w + 2968 >> 2] = -1;
   c[w + 2972 >> 2] = 0;
   c[w + 2976 >> 2] = -1;
   c[w + 2980 >> 2] = -1;
   c[w + 2984 >> 2] = 0;
   c[w + 2988 >> 2] = -1;
   c[w + 2992 >> 2] = -1;
   c[w + 2996 >> 2] = 0;
   c[w + 3e3 >> 2] = -1;
   c[w + 3004 >> 2] = -1;
   c[w + 3008 >> 2] = 0;
   c[w + 3012 >> 2] = -1;
   c[w + 3016 >> 2] = -1;
   c[w + 3020 >> 2] = 0;
   c[w + 3024 >> 2] = -1;
   c[w + 3028 >> 2] = -1;
   c[w + 3032 >> 2] = 0;
   c[w + 3036 >> 2] = -1;
   c[w + 3040 >> 2] = -1;
   c[w + 3044 >> 2] = 0;
   c[w + 3048 >> 2] = -1;
   c[w + 3052 >> 2] = -1;
   i = w + 3056 | 0;
   c[i >> 2] = -1;
   if (v) e = -1; else {
    c[e >> 2] = 0;
    Be(e, y + 2652 | 0);
    c[f >> 2] = c[y + 2656 >> 2];
    e = 0;
    do {
     v = w + 2660 + (e * 12 | 0) | 0;
     c[v >> 2] = 0;
     Be(v, y + 2660 + (e * 12 | 0) | 0);
     v = y + 2660 + (e * 12 | 0) + 4 | 0;
     E = c[v + 4 >> 2] | 0;
     F = w + 2660 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[v >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
    c[g >> 2] = c[y + 2852 >> 2];
    e = w + 2856 | 0;
    c[e >> 2] = 0;
    Be(e, y + 2856 | 0);
    c[h >> 2] = c[y + 2860 >> 2];
    e = 0;
    do {
     v = w + 2864 + (e * 12 | 0) | 0;
     c[v >> 2] = 0;
     Be(v, y + 2864 + (e * 12 | 0) | 0);
     v = y + 2864 + (e * 12 | 0) + 4 | 0;
     E = c[v + 4 >> 2] | 0;
     F = w + 2864 + (e * 12 | 0) + 4 | 0;
     c[F >> 2] = c[v >> 2];
     c[F + 4 >> 2] = E;
     e = e + 1 | 0;
    } while ((e | 0) != 16);
    e = c[y + 3056 >> 2] | 0;
   }
   c[i >> 2] = e;
   c[w + 3064 >> 2] = c[y + 3064 >> 2];
   e = 0;
   do {
    c[w + 3068 + (e << 2) >> 2] = c[y + 3068 + (e << 2) >> 2];
    e = e + 1 | 0;
   } while ((e | 0) != 128);
   e = 0;
   do {
    c[w + 3580 + (e << 2) >> 2] = c[y + 3580 + (e << 2) >> 2];
    e = e + 1 | 0;
   } while ((e | 0) != 32);
   Id(y);
   x = x + 1 | 0;
   if ((x | 0) == (C | 0)) break; else {
    w = w + 3712 | 0;
    y = y + 3712 | 0;
   }
  }
 }
 e = c[b >> 2] | 0;
 if (e | 0) cf(e);
 c[b >> 2] = D;
 c[z >> 2] = d;
 c[B >> 2] = 0;
 c[A >> 2] = C;
 return;
}

function Hd(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 3056 | 0;
 j = k;
 e = d + 16 | 0;
 Dd(j);
 if ((j | 0) != (e | 0)) {
  c[e >> 2] = 0;
  Be(e, j);
 }
 c[d + 20 >> 2] = c[j + 4 >> 2];
 g = j + 8 | 0;
 h = c[g + 4 >> 2] | 0;
 f = d + 24 | 0;
 c[f >> 2] = c[g >> 2];
 c[f + 4 >> 2] = h;
 f = d + 32 | 0;
 h = j + 16 | 0;
 if ((f | 0) != (h | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   g = c[e >> 2] | 0;
   c[e >> 2] = g - 1;
   if ((g | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 36 | 0;
    c[e >> 2] = 0;
   } else e = d + 36 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[h >> 2];
  g = j + 20 | 0;
  c[d + 36 >> 2] = c[g >> 2];
  c[h >> 2] = 0;
  c[g >> 2] = 0;
 }
 f = d + 40 | 0;
 g = j + 24 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 44 | 0;
    c[e >> 2] = 0;
   } else e = d + 44 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 28 | 0;
  c[d + 44 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 48 | 0;
 g = j + 32 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 52 | 0;
    c[e >> 2] = 0;
   } else e = d + 52 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 36 | 0;
  c[d + 52 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 56 | 0;
 g = j + 40 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 60 | 0;
    c[e >> 2] = 0;
   } else e = d + 60 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 44 | 0;
  c[d + 60 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 64 | 0;
 g = j + 48 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 68 | 0;
    c[e >> 2] = 0;
   } else e = d + 68 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 52 | 0;
  c[d + 68 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 72 | 0;
 g = j + 56 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 76 | 0;
    c[e >> 2] = 0;
   } else e = d + 76 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 60 | 0;
  c[d + 76 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 80 | 0;
 g = j + 64 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 84 | 0;
    c[e >> 2] = 0;
   } else e = d + 84 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 68 | 0;
  c[d + 84 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 88 | 0;
 g = j + 72 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 92 | 0;
    c[e >> 2] = 0;
   } else e = d + 92 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 76 | 0;
  c[d + 92 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 96 | 0;
 g = j + 80 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 100 | 0;
    c[e >> 2] = 0;
   } else e = d + 100 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 84 | 0;
  c[d + 100 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 104 | 0;
 g = j + 88 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 108 | 0;
    c[e >> 2] = 0;
   } else e = d + 108 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 92 | 0;
  c[d + 108 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 112 | 0;
 g = j + 96 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 116 | 0;
    c[e >> 2] = 0;
   } else e = d + 116 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 100 | 0;
  c[d + 116 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 120 | 0;
 g = j + 104 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 124 | 0;
    c[e >> 2] = 0;
   } else e = d + 124 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 108 | 0;
  c[d + 124 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 128 | 0;
 g = j + 112 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 132 | 0;
    c[e >> 2] = 0;
   } else e = d + 132 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 116 | 0;
  c[d + 132 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 136 | 0;
 g = j + 120 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 140 | 0;
    c[e >> 2] = 0;
   } else e = d + 140 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 124 | 0;
  c[d + 140 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 144 | 0;
 g = j + 128 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 148 | 0;
    c[e >> 2] = 0;
   } else e = d + 148 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 132 | 0;
  c[d + 148 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 152 | 0;
 g = j + 136 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 156 | 0;
    c[e >> 2] = 0;
   } else e = d + 156 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 140 | 0;
  c[d + 156 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 160 | 0;
 g = j + 144 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 164 | 0;
    c[e >> 2] = 0;
   } else e = d + 164 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 148 | 0;
  c[d + 164 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 168 | 0;
 g = j + 152 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 172 | 0;
    c[e >> 2] = 0;
   } else e = d + 172 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 156 | 0;
  c[d + 172 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 176 | 0;
 g = j + 160 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 180 | 0;
    c[e >> 2] = 0;
   } else e = d + 180 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 164 | 0;
  c[d + 180 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 f = d + 184 | 0;
 g = j + 168 | 0;
 if ((f | 0) != (g | 0)) {
  e = c[f >> 2] | 0;
  if (e | 0) {
   l = c[e >> 2] | 0;
   c[e >> 2] = l - 1;
   if ((l | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + 188 | 0;
    c[e >> 2] = 0;
   } else e = d + 188 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  l = j + 172 | 0;
  c[d + 188 >> 2] = c[l >> 2];
  c[g >> 2] = 0;
  c[l >> 2] = 0;
 }
 e = j + 176 | 0;
 g = c[e + 4 >> 2] | 0;
 l = d + 192 | 0;
 c[l >> 2] = c[e >> 2];
 c[l + 4 >> 2] = g;
 l = j + 184 | 0;
 g = c[l + 4 >> 2] | 0;
 e = d + 200 | 0;
 c[e >> 2] = c[l >> 2];
 c[e + 4 >> 2] = g;
 e = j + 192 | 0;
 g = c[e + 4 >> 2] | 0;
 l = d + 208 | 0;
 c[l >> 2] = c[e >> 2];
 c[l + 4 >> 2] = g;
 l = j + 200 | 0;
 g = c[l + 4 >> 2] | 0;
 e = d + 216 | 0;
 c[e >> 2] = c[l >> 2];
 c[e + 4 >> 2] = g;
 e = j + 208 | 0;
 g = c[e + 4 >> 2] | 0;
 l = d + 224 | 0;
 c[l >> 2] = c[e >> 2];
 c[l + 4 >> 2] = g;
 l = j + 216 | 0;
 g = c[l + 4 >> 2] | 0;
 e = d + 232 | 0;
 c[e >> 2] = c[l >> 2];
 c[e + 4 >> 2] = g;
 e = j + 224 | 0;
 g = c[e + 4 >> 2] | 0;
 l = d + 240 | 0;
 c[l >> 2] = c[e >> 2];
 c[l + 4 >> 2] = g;
 l = j + 232 | 0;
 g = c[l + 4 >> 2] | 0;
 e = d + 248 | 0;
 c[e >> 2] = c[l >> 2];
 c[e + 4 >> 2] = g;
 e = j + 240 | 0;
 g = c[e + 4 >> 2] | 0;
 l = d + 256 | 0;
 c[l >> 2] = c[e >> 2];
 c[l + 4 >> 2] = g;
 l = j + 248 | 0;
 g = c[l + 4 >> 2] | 0;
 e = d + 264 | 0;
 c[e >> 2] = c[l >> 2];
 c[e + 4 >> 2] = g;
 e = d + 272 | 0;
 g = c[j + 256 >> 2] | 0;
 l = g & 65535;
 a[e >> 0] = l;
 a[e + 1 >> 0] = l >> 8;
 e = d + 274 | 0;
 g = g >>> 16 & 65535;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 276 | 0;
 g = b[j + 260 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 278 | 0;
 g = b[j + 262 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 280 | 0;
 g = b[j + 264 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 282 | 0;
 g = b[j + 266 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 284 | 0;
 g = b[j + 268 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 286 | 0;
 g = b[j + 270 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 288 | 0;
 g = b[j + 272 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 290 | 0;
 g = b[j + 274 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 292 | 0;
 g = b[j + 276 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 294 | 0;
 g = b[j + 278 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 296 | 0;
 g = b[j + 280 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 298 | 0;
 g = b[j + 282 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 300 | 0;
 g = b[j + 284 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 302 | 0;
 g = b[j + 286 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = d + 304 | 0;
 g = b[j + 288 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 e = b[j + 290 >> 1] | 0;
 a[d + 306 >> 0] = e;
 a[d + 307 >> 0] = (e & 65535) >>> 8;
 e = b[j + 292 >> 1] | 0;
 a[d + 308 >> 0] = e;
 a[d + 309 >> 0] = (e & 65535) >>> 8;
 e = b[j + 294 >> 1] | 0;
 a[d + 310 >> 0] = e;
 a[d + 311 >> 0] = (e & 65535) >>> 8;
 e = b[j + 296 >> 1] | 0;
 a[d + 312 >> 0] = e;
 a[d + 313 >> 0] = (e & 65535) >>> 8;
 e = b[j + 298 >> 1] | 0;
 a[d + 314 >> 0] = e;
 a[d + 315 >> 0] = (e & 65535) >>> 8;
 e = b[j + 300 >> 1] | 0;
 a[d + 316 >> 0] = e;
 a[d + 317 >> 0] = (e & 65535) >>> 8;
 e = b[j + 302 >> 1] | 0;
 a[d + 318 >> 0] = e;
 a[d + 319 >> 0] = (e & 65535) >>> 8;
 e = b[j + 304 >> 1] | 0;
 a[d + 320 >> 0] = e;
 a[d + 321 >> 0] = (e & 65535) >>> 8;
 e = b[j + 306 >> 1] | 0;
 a[d + 322 >> 0] = e;
 a[d + 323 >> 0] = (e & 65535) >>> 8;
 e = b[j + 308 >> 1] | 0;
 a[d + 324 >> 0] = e;
 a[d + 325 >> 0] = (e & 65535) >>> 8;
 e = b[j + 310 >> 1] | 0;
 a[d + 326 >> 0] = e;
 a[d + 327 >> 0] = (e & 65535) >>> 8;
 e = b[j + 312 >> 1] | 0;
 a[d + 328 >> 0] = e;
 a[d + 329 >> 0] = (e & 65535) >>> 8;
 e = b[j + 314 >> 1] | 0;
 a[d + 330 >> 0] = e;
 a[d + 331 >> 0] = (e & 65535) >>> 8;
 e = b[j + 316 >> 1] | 0;
 a[d + 332 >> 0] = e;
 a[d + 333 >> 0] = (e & 65535) >>> 8;
 e = b[j + 318 >> 1] | 0;
 a[d + 334 >> 0] = e;
 a[d + 335 >> 0] = (e & 65535) >>> 8;
 e = b[j + 320 >> 1] | 0;
 a[d + 336 >> 0] = e;
 a[d + 337 >> 0] = (e & 65535) >>> 8;
 e = d + 338 | 0;
 g = b[j + 322 >> 1] | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 c[d + 340 >> 2] = c[j + 324 >> 2];
 e = d + 344 | 0;
 g = j + 328 | 0;
 if ((g | 0) != (e | 0)) {
  c[e >> 2] = 0;
  Be(e, g);
  c[g >> 2] = 0;
  l = d + 352 | 0;
  f = j + 336 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = c[f + 4 >> 2];
  c[l + 8 >> 2] = c[f + 8 >> 2];
  c[l + 12 >> 2] = c[f + 12 >> 2];
  if ((f | 0) != (l | 0)) {
   e = 0;
   do {
    f = d + 368 + (e * 12 | 0) | 0;
    m = j + 352 + (e * 12 | 0) | 0;
    c[f >> 2] = 0;
    Be(f, m);
    c[m >> 2] = 0;
    m = j + 352 + (e * 12 | 0) + 4 | 0;
    f = c[m + 4 >> 2] | 0;
    l = d + 368 + (e * 12 | 0) + 4 | 0;
    c[l >> 2] = c[m >> 2];
    c[l + 4 >> 2] = f;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 560 >> 2] = c[j + 544 >> 2];
  c[d + 564 >> 2] = c[j + 548 >> 2];
  c[d + 568 >> 2] = c[j + 552 >> 2];
  c[d + 572 >> 2] = c[j + 556 >> 2];
  c[d + 576 >> 2] = c[j + 560 >> 2];
  c[d + 580 >> 2] = c[j + 564 >> 2];
  c[d + 584 >> 2] = c[j + 568 >> 2];
  c[d + 588 >> 2] = c[j + 572 >> 2];
  c[d + 592 >> 2] = c[j + 576 >> 2];
  c[d + 596 >> 2] = c[j + 580 >> 2];
  c[d + 600 >> 2] = c[j + 584 >> 2];
  c[d + 604 >> 2] = c[j + 588 >> 2];
  c[d + 608 >> 2] = c[j + 592 >> 2];
  c[d + 612 >> 2] = c[j + 596 >> 2];
  c[d + 616 >> 2] = c[j + 600 >> 2];
  c[d + 620 >> 2] = c[j + 604 >> 2];
  f = j + 608 | 0;
  m = c[f + 4 >> 2] | 0;
  l = d + 624 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = m;
  l = d + 632 | 0;
  m = j + 616 | 0;
  c[l >> 2] = 0;
  Be(l, m);
  c[m >> 2] = 0;
  m = d + 640 | 0;
  l = j + 624 | 0;
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  if ((l | 0) != (m | 0)) {
   e = 0;
   do {
    l = d + 656 + (e * 12 | 0) | 0;
    f = j + 640 + (e * 12 | 0) | 0;
    c[l >> 2] = 0;
    Be(l, f);
    c[f >> 2] = 0;
    f = j + 640 + (e * 12 | 0) + 4 | 0;
    l = c[f + 4 >> 2] | 0;
    m = d + 656 + (e * 12 | 0) + 4 | 0;
    c[m >> 2] = c[f >> 2];
    c[m + 4 >> 2] = l;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 848 >> 2] = c[j + 832 >> 2];
  c[d + 852 >> 2] = c[j + 836 >> 2];
  c[d + 856 >> 2] = c[j + 840 >> 2];
  c[d + 860 >> 2] = c[j + 844 >> 2];
  c[d + 864 >> 2] = c[j + 848 >> 2];
  c[d + 868 >> 2] = c[j + 852 >> 2];
  c[d + 872 >> 2] = c[j + 856 >> 2];
  c[d + 876 >> 2] = c[j + 860 >> 2];
  c[d + 880 >> 2] = c[j + 864 >> 2];
  c[d + 884 >> 2] = c[j + 868 >> 2];
  c[d + 888 >> 2] = c[j + 872 >> 2];
  c[d + 892 >> 2] = c[j + 876 >> 2];
  c[d + 896 >> 2] = c[j + 880 >> 2];
  c[d + 900 >> 2] = c[j + 884 >> 2];
  c[d + 904 >> 2] = c[j + 888 >> 2];
  c[d + 908 >> 2] = c[j + 892 >> 2];
  f = j + 896 | 0;
  m = c[f + 4 >> 2] | 0;
  l = d + 912 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = m;
  l = d + 920 | 0;
  m = j + 904 | 0;
  c[l >> 2] = 0;
  Be(l, m);
  c[m >> 2] = 0;
  m = d + 928 | 0;
  l = j + 912 | 0;
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  if ((l | 0) != (m | 0)) {
   e = 0;
   do {
    l = d + 944 + (e * 12 | 0) | 0;
    f = j + 928 + (e * 12 | 0) | 0;
    c[l >> 2] = 0;
    Be(l, f);
    c[f >> 2] = 0;
    f = j + 928 + (e * 12 | 0) + 4 | 0;
    l = c[f + 4 >> 2] | 0;
    m = d + 944 + (e * 12 | 0) + 4 | 0;
    c[m >> 2] = c[f >> 2];
    c[m + 4 >> 2] = l;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 1136 >> 2] = c[j + 1120 >> 2];
  c[d + 1140 >> 2] = c[j + 1124 >> 2];
  c[d + 1144 >> 2] = c[j + 1128 >> 2];
  c[d + 1148 >> 2] = c[j + 1132 >> 2];
  c[d + 1152 >> 2] = c[j + 1136 >> 2];
  c[d + 1156 >> 2] = c[j + 1140 >> 2];
  c[d + 1160 >> 2] = c[j + 1144 >> 2];
  c[d + 1164 >> 2] = c[j + 1148 >> 2];
  c[d + 1168 >> 2] = c[j + 1152 >> 2];
  c[d + 1172 >> 2] = c[j + 1156 >> 2];
  c[d + 1176 >> 2] = c[j + 1160 >> 2];
  c[d + 1180 >> 2] = c[j + 1164 >> 2];
  c[d + 1184 >> 2] = c[j + 1168 >> 2];
  c[d + 1188 >> 2] = c[j + 1172 >> 2];
  c[d + 1192 >> 2] = c[j + 1176 >> 2];
  c[d + 1196 >> 2] = c[j + 1180 >> 2];
  f = j + 1184 | 0;
  m = c[f + 4 >> 2] | 0;
  l = d + 1200 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = m;
  l = d + 1208 | 0;
  m = j + 1192 | 0;
  c[l >> 2] = 0;
  Be(l, m);
  c[m >> 2] = 0;
  m = d + 1216 | 0;
  l = j + 1200 | 0;
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  if ((l | 0) != (m | 0)) {
   e = 0;
   do {
    l = d + 1232 + (e * 12 | 0) | 0;
    f = j + 1216 + (e * 12 | 0) | 0;
    c[l >> 2] = 0;
    Be(l, f);
    c[f >> 2] = 0;
    f = j + 1216 + (e * 12 | 0) + 4 | 0;
    l = c[f + 4 >> 2] | 0;
    m = d + 1232 + (e * 12 | 0) + 4 | 0;
    c[m >> 2] = c[f >> 2];
    c[m + 4 >> 2] = l;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 1424 >> 2] = c[j + 1408 >> 2];
  c[d + 1428 >> 2] = c[j + 1412 >> 2];
  c[d + 1432 >> 2] = c[j + 1416 >> 2];
  c[d + 1436 >> 2] = c[j + 1420 >> 2];
  c[d + 1440 >> 2] = c[j + 1424 >> 2];
  c[d + 1444 >> 2] = c[j + 1428 >> 2];
  c[d + 1448 >> 2] = c[j + 1432 >> 2];
  c[d + 1452 >> 2] = c[j + 1436 >> 2];
  c[d + 1456 >> 2] = c[j + 1440 >> 2];
  c[d + 1460 >> 2] = c[j + 1444 >> 2];
  c[d + 1464 >> 2] = c[j + 1448 >> 2];
  c[d + 1468 >> 2] = c[j + 1452 >> 2];
  c[d + 1472 >> 2] = c[j + 1456 >> 2];
  c[d + 1476 >> 2] = c[j + 1460 >> 2];
  c[d + 1480 >> 2] = c[j + 1464 >> 2];
  c[d + 1484 >> 2] = c[j + 1468 >> 2];
  f = j + 1472 | 0;
  m = c[f + 4 >> 2] | 0;
  l = d + 1488 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = m;
  l = d + 1496 | 0;
  m = j + 1480 | 0;
  c[l >> 2] = 0;
  Be(l, m);
  c[m >> 2] = 0;
  m = d + 1504 | 0;
  l = j + 1488 | 0;
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  if ((l | 0) != (m | 0)) {
   e = 0;
   do {
    l = d + 1520 + (e * 12 | 0) | 0;
    f = j + 1504 + (e * 12 | 0) | 0;
    c[l >> 2] = 0;
    Be(l, f);
    c[f >> 2] = 0;
    f = j + 1504 + (e * 12 | 0) + 4 | 0;
    l = c[f + 4 >> 2] | 0;
    m = d + 1520 + (e * 12 | 0) + 4 | 0;
    c[m >> 2] = c[f >> 2];
    c[m + 4 >> 2] = l;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 1712 >> 2] = c[j + 1696 >> 2];
  c[d + 1716 >> 2] = c[j + 1700 >> 2];
  c[d + 1720 >> 2] = c[j + 1704 >> 2];
  c[d + 1724 >> 2] = c[j + 1708 >> 2];
  c[d + 1728 >> 2] = c[j + 1712 >> 2];
  c[d + 1732 >> 2] = c[j + 1716 >> 2];
  c[d + 1736 >> 2] = c[j + 1720 >> 2];
  c[d + 1740 >> 2] = c[j + 1724 >> 2];
  c[d + 1744 >> 2] = c[j + 1728 >> 2];
  c[d + 1748 >> 2] = c[j + 1732 >> 2];
  c[d + 1752 >> 2] = c[j + 1736 >> 2];
  c[d + 1756 >> 2] = c[j + 1740 >> 2];
  c[d + 1760 >> 2] = c[j + 1744 >> 2];
  c[d + 1764 >> 2] = c[j + 1748 >> 2];
  c[d + 1768 >> 2] = c[j + 1752 >> 2];
  c[d + 1772 >> 2] = c[j + 1756 >> 2];
  f = j + 1760 | 0;
  m = c[f + 4 >> 2] | 0;
  l = d + 1776 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = m;
  l = d + 1784 | 0;
  m = j + 1768 | 0;
  c[l >> 2] = 0;
  Be(l, m);
  c[m >> 2] = 0;
  m = d + 1792 | 0;
  l = j + 1776 | 0;
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  if ((l | 0) != (m | 0)) {
   e = 0;
   do {
    l = d + 1808 + (e * 12 | 0) | 0;
    f = j + 1792 + (e * 12 | 0) | 0;
    c[l >> 2] = 0;
    Be(l, f);
    c[f >> 2] = 0;
    f = j + 1792 + (e * 12 | 0) + 4 | 0;
    l = c[f + 4 >> 2] | 0;
    m = d + 1808 + (e * 12 | 0) + 4 | 0;
    c[m >> 2] = c[f >> 2];
    c[m + 4 >> 2] = l;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 2e3 >> 2] = c[j + 1984 >> 2];
  c[d + 2004 >> 2] = c[j + 1988 >> 2];
  c[d + 2008 >> 2] = c[j + 1992 >> 2];
  c[d + 2012 >> 2] = c[j + 1996 >> 2];
  c[d + 2016 >> 2] = c[j + 2e3 >> 2];
  c[d + 2020 >> 2] = c[j + 2004 >> 2];
  c[d + 2024 >> 2] = c[j + 2008 >> 2];
  c[d + 2028 >> 2] = c[j + 2012 >> 2];
  c[d + 2032 >> 2] = c[j + 2016 >> 2];
  c[d + 2036 >> 2] = c[j + 2020 >> 2];
  c[d + 2040 >> 2] = c[j + 2024 >> 2];
  c[d + 2044 >> 2] = c[j + 2028 >> 2];
  c[d + 2048 >> 2] = c[j + 2032 >> 2];
  c[d + 2052 >> 2] = c[j + 2036 >> 2];
  c[d + 2056 >> 2] = c[j + 2040 >> 2];
  c[d + 2060 >> 2] = c[j + 2044 >> 2];
  f = j + 2048 | 0;
  m = c[f + 4 >> 2] | 0;
  l = d + 2064 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = m;
  l = d + 2072 | 0;
  m = j + 2056 | 0;
  c[l >> 2] = 0;
  Be(l, m);
  c[m >> 2] = 0;
  m = d + 2080 | 0;
  l = j + 2064 | 0;
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  if ((l | 0) != (m | 0)) {
   e = 0;
   do {
    l = d + 2096 + (e * 12 | 0) | 0;
    f = j + 2080 + (e * 12 | 0) | 0;
    c[l >> 2] = 0;
    Be(l, f);
    c[f >> 2] = 0;
    f = j + 2080 + (e * 12 | 0) + 4 | 0;
    l = c[f + 4 >> 2] | 0;
    m = d + 2096 + (e * 12 | 0) + 4 | 0;
    c[m >> 2] = c[f >> 2];
    c[m + 4 >> 2] = l;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 2288 >> 2] = c[j + 2272 >> 2];
  c[d + 2292 >> 2] = c[j + 2276 >> 2];
  c[d + 2296 >> 2] = c[j + 2280 >> 2];
  c[d + 2300 >> 2] = c[j + 2284 >> 2];
  c[d + 2304 >> 2] = c[j + 2288 >> 2];
  c[d + 2308 >> 2] = c[j + 2292 >> 2];
  c[d + 2312 >> 2] = c[j + 2296 >> 2];
  c[d + 2316 >> 2] = c[j + 2300 >> 2];
  c[d + 2320 >> 2] = c[j + 2304 >> 2];
  c[d + 2324 >> 2] = c[j + 2308 >> 2];
  c[d + 2328 >> 2] = c[j + 2312 >> 2];
  c[d + 2332 >> 2] = c[j + 2316 >> 2];
  c[d + 2336 >> 2] = c[j + 2320 >> 2];
  c[d + 2340 >> 2] = c[j + 2324 >> 2];
  c[d + 2344 >> 2] = c[j + 2328 >> 2];
  c[d + 2348 >> 2] = c[j + 2332 >> 2];
  f = j + 2336 | 0;
  m = c[f + 4 >> 2] | 0;
  l = d + 2352 | 0;
  c[l >> 2] = c[f >> 2];
  c[l + 4 >> 2] = m;
  l = d + 2360 | 0;
  m = j + 2344 | 0;
  c[l >> 2] = 0;
  Be(l, m);
  c[m >> 2] = 0;
  m = d + 2368 | 0;
  l = j + 2352 | 0;
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  if ((l | 0) != (m | 0)) {
   e = 0;
   do {
    l = d + 2384 + (e * 12 | 0) | 0;
    f = j + 2368 + (e * 12 | 0) | 0;
    c[l >> 2] = 0;
    Be(l, f);
    c[f >> 2] = 0;
    f = j + 2368 + (e * 12 | 0) + 4 | 0;
    l = c[f + 4 >> 2] | 0;
    m = d + 2384 + (e * 12 | 0) + 4 | 0;
    c[m >> 2] = c[f >> 2];
    c[m + 4 >> 2] = l;
    e = e + 1 | 0;
   } while ((e | 0) != 16);
  }
  c[d + 2576 >> 2] = c[j + 2560 >> 2];
  c[d + 2580 >> 2] = c[j + 2564 >> 2];
  c[d + 2584 >> 2] = c[j + 2568 >> 2];
  c[d + 2588 >> 2] = c[j + 2572 >> 2];
  c[d + 2592 >> 2] = c[j + 2576 >> 2];
  c[d + 2596 >> 2] = c[j + 2580 >> 2];
  c[d + 2600 >> 2] = c[j + 2584 >> 2];
  c[d + 2604 >> 2] = c[j + 2588 >> 2];
  c[d + 2608 >> 2] = c[j + 2592 >> 2];
  c[d + 2612 >> 2] = c[j + 2596 >> 2];
  c[d + 2616 >> 2] = c[j + 2600 >> 2];
  c[d + 2620 >> 2] = c[j + 2604 >> 2];
  c[d + 2624 >> 2] = c[j + 2608 >> 2];
  c[d + 2628 >> 2] = c[j + 2612 >> 2];
  c[d + 2632 >> 2] = c[j + 2616 >> 2];
  c[d + 2636 >> 2] = c[j + 2620 >> 2];
  f = j + 2624 | 0;
  l = c[f + 4 >> 2] | 0;
  m = d + 2640 | 0;
  c[m >> 2] = c[f >> 2];
  c[m + 4 >> 2] = l;
 }
 c[d + 2648 >> 2] = c[j + 2632 >> 2];
 e = d + 2652 | 0;
 f = j + 2636 | 0;
 if ((f | 0) == (e | 0)) {
  m = j + 3028 | 0;
  c[m >> 2] = 0;
  m = j + 3016 | 0;
  c[m >> 2] = 0;
  m = j + 3004 | 0;
  c[m >> 2] = 0;
  m = j + 2992 | 0;
  c[m >> 2] = 0;
  m = j + 2980 | 0;
  c[m >> 2] = 0;
  m = j + 2968 | 0;
  c[m >> 2] = 0;
  m = j + 2956 | 0;
  c[m >> 2] = 0;
  m = j + 2944 | 0;
  c[m >> 2] = 0;
  m = j + 2932 | 0;
  c[m >> 2] = 0;
  m = j + 2920 | 0;
  c[m >> 2] = 0;
  m = j + 2908 | 0;
  c[m >> 2] = 0;
  m = j + 2896 | 0;
  c[m >> 2] = 0;
  m = j + 2884 | 0;
  c[m >> 2] = 0;
  m = j + 2872 | 0;
  c[m >> 2] = 0;
  m = j + 2860 | 0;
  c[m >> 2] = 0;
  m = j + 2848 | 0;
  c[m >> 2] = 0;
  m = j + 2840 | 0;
  c[m >> 2] = 0;
  m = j + 2824 | 0;
  c[m >> 2] = 0;
  m = j + 2812 | 0;
  c[m >> 2] = 0;
  m = j + 2800 | 0;
  c[m >> 2] = 0;
  m = j + 2788 | 0;
  c[m >> 2] = 0;
  m = j + 2776 | 0;
  c[m >> 2] = 0;
  m = j + 2764 | 0;
  c[m >> 2] = 0;
  m = j + 2752 | 0;
  c[m >> 2] = 0;
  m = j + 2740 | 0;
  c[m >> 2] = 0;
  m = j + 2728 | 0;
  c[m >> 2] = 0;
  m = j + 2716 | 0;
  c[m >> 2] = 0;
  m = j + 2704 | 0;
  c[m >> 2] = 0;
  m = j + 2692 | 0;
  c[m >> 2] = 0;
  m = j + 2680 | 0;
  c[m >> 2] = 0;
  m = j + 2668 | 0;
  c[m >> 2] = 0;
  m = j + 2656 | 0;
  c[m >> 2] = 0;
  m = j + 2644 | 0;
  c[m >> 2] = 0;
  m = j + 2636 | 0;
  c[m >> 2] = 0;
  m = j + 2548 | 0;
  c[m >> 2] = 0;
  m = j + 2536 | 0;
  c[m >> 2] = 0;
  m = j + 2524 | 0;
  c[m >> 2] = 0;
  m = j + 2512 | 0;
  c[m >> 2] = 0;
  m = j + 2500 | 0;
  c[m >> 2] = 0;
  m = j + 2488 | 0;
  c[m >> 2] = 0;
  m = j + 2476 | 0;
  c[m >> 2] = 0;
  m = j + 2464 | 0;
  c[m >> 2] = 0;
  m = j + 2452 | 0;
  c[m >> 2] = 0;
  m = j + 2440 | 0;
  c[m >> 2] = 0;
  m = j + 2428 | 0;
  c[m >> 2] = 0;
  m = j + 2416 | 0;
  c[m >> 2] = 0;
  m = j + 2404 | 0;
  c[m >> 2] = 0;
  m = j + 2392 | 0;
  c[m >> 2] = 0;
  m = j + 2380 | 0;
  c[m >> 2] = 0;
  m = j + 2368 | 0;
  c[m >> 2] = 0;
  m = j + 2344 | 0;
  c[m >> 2] = 0;
  m = j + 2260 | 0;
  c[m >> 2] = 0;
  m = j + 2248 | 0;
  c[m >> 2] = 0;
  m = j + 2236 | 0;
  c[m >> 2] = 0;
  m = j + 2224 | 0;
  c[m >> 2] = 0;
  m = j + 2212 | 0;
  c[m >> 2] = 0;
  m = j + 2200 | 0;
  c[m >> 2] = 0;
  m = j + 2188 | 0;
  c[m >> 2] = 0;
  m = j + 2176 | 0;
  c[m >> 2] = 0;
  m = j + 2164 | 0;
  c[m >> 2] = 0;
  m = j + 2152 | 0;
  c[m >> 2] = 0;
  m = j + 2140 | 0;
  c[m >> 2] = 0;
  m = j + 2128 | 0;
  c[m >> 2] = 0;
  m = j + 2116 | 0;
  c[m >> 2] = 0;
  m = j + 2104 | 0;
  c[m >> 2] = 0;
  m = j + 2092 | 0;
  c[m >> 2] = 0;
  m = j + 2080 | 0;
  c[m >> 2] = 0;
  m = j + 2056 | 0;
  c[m >> 2] = 0;
  m = j + 1972 | 0;
  c[m >> 2] = 0;
  m = j + 1960 | 0;
  c[m >> 2] = 0;
  m = j + 1948 | 0;
  c[m >> 2] = 0;
  m = j + 1936 | 0;
  c[m >> 2] = 0;
  m = j + 1924 | 0;
  c[m >> 2] = 0;
  m = j + 1912 | 0;
  c[m >> 2] = 0;
  m = j + 1900 | 0;
  c[m >> 2] = 0;
  m = j + 1888 | 0;
  c[m >> 2] = 0;
  m = j + 1876 | 0;
  c[m >> 2] = 0;
  m = j + 1864 | 0;
  c[m >> 2] = 0;
  m = j + 1852 | 0;
  c[m >> 2] = 0;
  m = j + 1840 | 0;
  c[m >> 2] = 0;
  m = j + 1828 | 0;
  c[m >> 2] = 0;
  m = j + 1816 | 0;
  c[m >> 2] = 0;
  m = j + 1804 | 0;
  c[m >> 2] = 0;
  m = j + 1792 | 0;
  c[m >> 2] = 0;
  m = j + 1768 | 0;
  c[m >> 2] = 0;
  m = j + 1684 | 0;
  c[m >> 2] = 0;
  m = j + 1672 | 0;
  c[m >> 2] = 0;
  m = j + 1660 | 0;
  c[m >> 2] = 0;
  m = j + 1648 | 0;
  c[m >> 2] = 0;
  m = j + 1636 | 0;
  c[m >> 2] = 0;
  m = j + 1624 | 0;
  c[m >> 2] = 0;
  m = j + 1612 | 0;
  c[m >> 2] = 0;
  m = j + 1600 | 0;
  c[m >> 2] = 0;
  m = j + 1588 | 0;
  c[m >> 2] = 0;
  m = j + 1576 | 0;
  c[m >> 2] = 0;
  m = j + 1564 | 0;
  c[m >> 2] = 0;
  m = j + 1552 | 0;
  c[m >> 2] = 0;
  m = j + 1540 | 0;
  c[m >> 2] = 0;
  m = j + 1528 | 0;
  c[m >> 2] = 0;
  m = j + 1516 | 0;
  c[m >> 2] = 0;
  m = j + 1504 | 0;
  c[m >> 2] = 0;
  m = j + 1480 | 0;
  c[m >> 2] = 0;
  m = j + 1396 | 0;
  c[m >> 2] = 0;
  m = j + 1384 | 0;
  c[m >> 2] = 0;
  m = j + 1372 | 0;
  c[m >> 2] = 0;
  m = j + 1360 | 0;
  c[m >> 2] = 0;
  m = j + 1348 | 0;
  c[m >> 2] = 0;
  m = j + 1336 | 0;
  c[m >> 2] = 0;
  m = j + 1324 | 0;
  c[m >> 2] = 0;
  m = j + 1312 | 0;
  c[m >> 2] = 0;
  m = j + 1300 | 0;
  c[m >> 2] = 0;
  m = j + 1288 | 0;
  c[m >> 2] = 0;
  m = j + 1276 | 0;
  c[m >> 2] = 0;
  m = j + 1264 | 0;
  c[m >> 2] = 0;
  m = j + 1252 | 0;
  c[m >> 2] = 0;
  m = j + 1240 | 0;
  c[m >> 2] = 0;
  m = j + 1228 | 0;
  c[m >> 2] = 0;
  m = j + 1216 | 0;
  c[m >> 2] = 0;
  m = j + 1192 | 0;
  c[m >> 2] = 0;
  m = j + 1108 | 0;
  c[m >> 2] = 0;
  m = j + 1096 | 0;
  c[m >> 2] = 0;
  m = j + 1084 | 0;
  c[m >> 2] = 0;
  m = j + 1072 | 0;
  c[m >> 2] = 0;
  m = j + 1060 | 0;
  c[m >> 2] = 0;
  m = j + 1048 | 0;
  c[m >> 2] = 0;
  m = j + 1036 | 0;
  c[m >> 2] = 0;
  m = j + 1024 | 0;
  c[m >> 2] = 0;
  m = j + 1012 | 0;
  c[m >> 2] = 0;
  m = j + 1e3 | 0;
  c[m >> 2] = 0;
  m = j + 988 | 0;
  c[m >> 2] = 0;
  m = j + 976 | 0;
  c[m >> 2] = 0;
  m = j + 964 | 0;
  c[m >> 2] = 0;
  m = j + 952 | 0;
  c[m >> 2] = 0;
  m = j + 940 | 0;
  c[m >> 2] = 0;
  m = j + 928 | 0;
  c[m >> 2] = 0;
  m = j + 904 | 0;
  c[m >> 2] = 0;
  m = j + 820 | 0;
  c[m >> 2] = 0;
  m = j + 808 | 0;
  c[m >> 2] = 0;
  m = j + 796 | 0;
  c[m >> 2] = 0;
  m = j + 784 | 0;
  c[m >> 2] = 0;
  m = j + 772 | 0;
  c[m >> 2] = 0;
  m = j + 760 | 0;
  c[m >> 2] = 0;
  m = j + 748 | 0;
  c[m >> 2] = 0;
  m = j + 736 | 0;
  c[m >> 2] = 0;
  m = j + 724 | 0;
  c[m >> 2] = 0;
  m = j + 712 | 0;
  c[m >> 2] = 0;
  m = j + 700 | 0;
  c[m >> 2] = 0;
  m = j + 688 | 0;
  c[m >> 2] = 0;
  m = j + 676 | 0;
  c[m >> 2] = 0;
  m = j + 664 | 0;
  c[m >> 2] = 0;
  m = j + 652 | 0;
  c[m >> 2] = 0;
  m = j + 640 | 0;
  c[m >> 2] = 0;
  m = j + 616 | 0;
  c[m >> 2] = 0;
  m = j + 532 | 0;
  c[m >> 2] = 0;
  m = j + 520 | 0;
  c[m >> 2] = 0;
  m = j + 508 | 0;
  c[m >> 2] = 0;
  m = j + 496 | 0;
  c[m >> 2] = 0;
  m = j + 484 | 0;
  c[m >> 2] = 0;
  m = j + 472 | 0;
  c[m >> 2] = 0;
  m = j + 460 | 0;
  c[m >> 2] = 0;
  m = j + 448 | 0;
  c[m >> 2] = 0;
  m = j + 436 | 0;
  c[m >> 2] = 0;
  m = j + 424 | 0;
  c[m >> 2] = 0;
  m = j + 412 | 0;
  c[m >> 2] = 0;
  m = j + 400 | 0;
  c[m >> 2] = 0;
  m = j + 388 | 0;
  c[m >> 2] = 0;
  m = j + 376 | 0;
  c[m >> 2] = 0;
  m = j + 364 | 0;
  c[m >> 2] = 0;
  m = j + 352 | 0;
  c[m >> 2] = 0;
  c[g >> 2] = 0;
  Sc(h);
  i = k;
  return;
 }
 c[e >> 2] = 0;
 Be(e, f);
 c[f >> 2] = 0;
 c[d + 2656 >> 2] = c[j + 2640 >> 2];
 e = 0;
 do {
  l = d + 2660 + (e * 12 | 0) | 0;
  f = j + 2644 + (e * 12 | 0) | 0;
  c[l >> 2] = 0;
  Be(l, f);
  c[f >> 2] = 0;
  f = j + 2644 + (e * 12 | 0) + 4 | 0;
  l = c[f + 4 >> 2] | 0;
  m = d + 2660 + (e * 12 | 0) + 4 | 0;
  c[m >> 2] = c[f >> 2];
  c[m + 4 >> 2] = l;
  e = e + 1 | 0;
 } while ((e | 0) != 16);
 c[d + 2852 >> 2] = c[j + 2836 >> 2];
 m = d + 2856 | 0;
 e = j + 2840 | 0;
 c[m >> 2] = 0;
 Be(m, e);
 c[e >> 2] = 0;
 c[d + 2860 >> 2] = c[j + 2844 >> 2];
 e = 0;
 do {
  l = d + 2864 + (e * 12 | 0) | 0;
  f = j + 2848 + (e * 12 | 0) | 0;
  c[l >> 2] = 0;
  Be(l, f);
  c[f >> 2] = 0;
  f = j + 2848 + (e * 12 | 0) + 4 | 0;
  l = c[f + 4 >> 2] | 0;
  m = d + 2864 + (e * 12 | 0) + 4 | 0;
  c[m >> 2] = c[f >> 2];
  c[m + 4 >> 2] = l;
  e = e + 1 | 0;
 } while ((e | 0) != 16);
 c[d + 3056 >> 2] = c[j + 3040 >> 2];
 m = j + 3028 | 0;
 c[m >> 2] = 0;
 m = j + 3016 | 0;
 c[m >> 2] = 0;
 m = j + 3004 | 0;
 c[m >> 2] = 0;
 m = j + 2992 | 0;
 c[m >> 2] = 0;
 m = j + 2980 | 0;
 c[m >> 2] = 0;
 m = j + 2968 | 0;
 c[m >> 2] = 0;
 m = j + 2956 | 0;
 c[m >> 2] = 0;
 m = j + 2944 | 0;
 c[m >> 2] = 0;
 m = j + 2932 | 0;
 c[m >> 2] = 0;
 m = j + 2920 | 0;
 c[m >> 2] = 0;
 m = j + 2908 | 0;
 c[m >> 2] = 0;
 m = j + 2896 | 0;
 c[m >> 2] = 0;
 m = j + 2884 | 0;
 c[m >> 2] = 0;
 m = j + 2872 | 0;
 c[m >> 2] = 0;
 m = j + 2860 | 0;
 c[m >> 2] = 0;
 m = j + 2848 | 0;
 c[m >> 2] = 0;
 m = j + 2840 | 0;
 c[m >> 2] = 0;
 m = j + 2824 | 0;
 c[m >> 2] = 0;
 m = j + 2812 | 0;
 c[m >> 2] = 0;
 m = j + 2800 | 0;
 c[m >> 2] = 0;
 m = j + 2788 | 0;
 c[m >> 2] = 0;
 m = j + 2776 | 0;
 c[m >> 2] = 0;
 m = j + 2764 | 0;
 c[m >> 2] = 0;
 m = j + 2752 | 0;
 c[m >> 2] = 0;
 m = j + 2740 | 0;
 c[m >> 2] = 0;
 m = j + 2728 | 0;
 c[m >> 2] = 0;
 m = j + 2716 | 0;
 c[m >> 2] = 0;
 m = j + 2704 | 0;
 c[m >> 2] = 0;
 m = j + 2692 | 0;
 c[m >> 2] = 0;
 m = j + 2680 | 0;
 c[m >> 2] = 0;
 m = j + 2668 | 0;
 c[m >> 2] = 0;
 m = j + 2656 | 0;
 c[m >> 2] = 0;
 m = j + 2644 | 0;
 c[m >> 2] = 0;
 m = j + 2636 | 0;
 c[m >> 2] = 0;
 m = j + 2548 | 0;
 c[m >> 2] = 0;
 m = j + 2536 | 0;
 c[m >> 2] = 0;
 m = j + 2524 | 0;
 c[m >> 2] = 0;
 m = j + 2512 | 0;
 c[m >> 2] = 0;
 m = j + 2500 | 0;
 c[m >> 2] = 0;
 m = j + 2488 | 0;
 c[m >> 2] = 0;
 m = j + 2476 | 0;
 c[m >> 2] = 0;
 m = j + 2464 | 0;
 c[m >> 2] = 0;
 m = j + 2452 | 0;
 c[m >> 2] = 0;
 m = j + 2440 | 0;
 c[m >> 2] = 0;
 m = j + 2428 | 0;
 c[m >> 2] = 0;
 m = j + 2416 | 0;
 c[m >> 2] = 0;
 m = j + 2404 | 0;
 c[m >> 2] = 0;
 m = j + 2392 | 0;
 c[m >> 2] = 0;
 m = j + 2380 | 0;
 c[m >> 2] = 0;
 m = j + 2368 | 0;
 c[m >> 2] = 0;
 m = j + 2344 | 0;
 c[m >> 2] = 0;
 m = j + 2260 | 0;
 c[m >> 2] = 0;
 m = j + 2248 | 0;
 c[m >> 2] = 0;
 m = j + 2236 | 0;
 c[m >> 2] = 0;
 m = j + 2224 | 0;
 c[m >> 2] = 0;
 m = j + 2212 | 0;
 c[m >> 2] = 0;
 m = j + 2200 | 0;
 c[m >> 2] = 0;
 m = j + 2188 | 0;
 c[m >> 2] = 0;
 m = j + 2176 | 0;
 c[m >> 2] = 0;
 m = j + 2164 | 0;
 c[m >> 2] = 0;
 m = j + 2152 | 0;
 c[m >> 2] = 0;
 m = j + 2140 | 0;
 c[m >> 2] = 0;
 m = j + 2128 | 0;
 c[m >> 2] = 0;
 m = j + 2116 | 0;
 c[m >> 2] = 0;
 m = j + 2104 | 0;
 c[m >> 2] = 0;
 m = j + 2092 | 0;
 c[m >> 2] = 0;
 m = j + 2080 | 0;
 c[m >> 2] = 0;
 m = j + 2056 | 0;
 c[m >> 2] = 0;
 m = j + 1972 | 0;
 c[m >> 2] = 0;
 m = j + 1960 | 0;
 c[m >> 2] = 0;
 m = j + 1948 | 0;
 c[m >> 2] = 0;
 m = j + 1936 | 0;
 c[m >> 2] = 0;
 m = j + 1924 | 0;
 c[m >> 2] = 0;
 m = j + 1912 | 0;
 c[m >> 2] = 0;
 m = j + 1900 | 0;
 c[m >> 2] = 0;
 m = j + 1888 | 0;
 c[m >> 2] = 0;
 m = j + 1876 | 0;
 c[m >> 2] = 0;
 m = j + 1864 | 0;
 c[m >> 2] = 0;
 m = j + 1852 | 0;
 c[m >> 2] = 0;
 m = j + 1840 | 0;
 c[m >> 2] = 0;
 m = j + 1828 | 0;
 c[m >> 2] = 0;
 m = j + 1816 | 0;
 c[m >> 2] = 0;
 m = j + 1804 | 0;
 c[m >> 2] = 0;
 m = j + 1792 | 0;
 c[m >> 2] = 0;
 m = j + 1768 | 0;
 c[m >> 2] = 0;
 m = j + 1684 | 0;
 c[m >> 2] = 0;
 m = j + 1672 | 0;
 c[m >> 2] = 0;
 m = j + 1660 | 0;
 c[m >> 2] = 0;
 m = j + 1648 | 0;
 c[m >> 2] = 0;
 m = j + 1636 | 0;
 c[m >> 2] = 0;
 m = j + 1624 | 0;
 c[m >> 2] = 0;
 m = j + 1612 | 0;
 c[m >> 2] = 0;
 m = j + 1600 | 0;
 c[m >> 2] = 0;
 m = j + 1588 | 0;
 c[m >> 2] = 0;
 m = j + 1576 | 0;
 c[m >> 2] = 0;
 m = j + 1564 | 0;
 c[m >> 2] = 0;
 m = j + 1552 | 0;
 c[m >> 2] = 0;
 m = j + 1540 | 0;
 c[m >> 2] = 0;
 m = j + 1528 | 0;
 c[m >> 2] = 0;
 m = j + 1516 | 0;
 c[m >> 2] = 0;
 m = j + 1504 | 0;
 c[m >> 2] = 0;
 m = j + 1480 | 0;
 c[m >> 2] = 0;
 m = j + 1396 | 0;
 c[m >> 2] = 0;
 m = j + 1384 | 0;
 c[m >> 2] = 0;
 m = j + 1372 | 0;
 c[m >> 2] = 0;
 m = j + 1360 | 0;
 c[m >> 2] = 0;
 m = j + 1348 | 0;
 c[m >> 2] = 0;
 m = j + 1336 | 0;
 c[m >> 2] = 0;
 m = j + 1324 | 0;
 c[m >> 2] = 0;
 m = j + 1312 | 0;
 c[m >> 2] = 0;
 m = j + 1300 | 0;
 c[m >> 2] = 0;
 m = j + 1288 | 0;
 c[m >> 2] = 0;
 m = j + 1276 | 0;
 c[m >> 2] = 0;
 m = j + 1264 | 0;
 c[m >> 2] = 0;
 m = j + 1252 | 0;
 c[m >> 2] = 0;
 m = j + 1240 | 0;
 c[m >> 2] = 0;
 m = j + 1228 | 0;
 c[m >> 2] = 0;
 m = j + 1216 | 0;
 c[m >> 2] = 0;
 m = j + 1192 | 0;
 c[m >> 2] = 0;
 m = j + 1108 | 0;
 c[m >> 2] = 0;
 m = j + 1096 | 0;
 c[m >> 2] = 0;
 m = j + 1084 | 0;
 c[m >> 2] = 0;
 m = j + 1072 | 0;
 c[m >> 2] = 0;
 m = j + 1060 | 0;
 c[m >> 2] = 0;
 m = j + 1048 | 0;
 c[m >> 2] = 0;
 m = j + 1036 | 0;
 c[m >> 2] = 0;
 m = j + 1024 | 0;
 c[m >> 2] = 0;
 m = j + 1012 | 0;
 c[m >> 2] = 0;
 m = j + 1e3 | 0;
 c[m >> 2] = 0;
 m = j + 988 | 0;
 c[m >> 2] = 0;
 m = j + 976 | 0;
 c[m >> 2] = 0;
 m = j + 964 | 0;
 c[m >> 2] = 0;
 m = j + 952 | 0;
 c[m >> 2] = 0;
 m = j + 940 | 0;
 c[m >> 2] = 0;
 m = j + 928 | 0;
 c[m >> 2] = 0;
 m = j + 904 | 0;
 c[m >> 2] = 0;
 m = j + 820 | 0;
 c[m >> 2] = 0;
 m = j + 808 | 0;
 c[m >> 2] = 0;
 m = j + 796 | 0;
 c[m >> 2] = 0;
 m = j + 784 | 0;
 c[m >> 2] = 0;
 m = j + 772 | 0;
 c[m >> 2] = 0;
 m = j + 760 | 0;
 c[m >> 2] = 0;
 m = j + 748 | 0;
 c[m >> 2] = 0;
 m = j + 736 | 0;
 c[m >> 2] = 0;
 m = j + 724 | 0;
 c[m >> 2] = 0;
 m = j + 712 | 0;
 c[m >> 2] = 0;
 m = j + 700 | 0;
 c[m >> 2] = 0;
 m = j + 688 | 0;
 c[m >> 2] = 0;
 m = j + 676 | 0;
 c[m >> 2] = 0;
 m = j + 664 | 0;
 c[m >> 2] = 0;
 m = j + 652 | 0;
 c[m >> 2] = 0;
 m = j + 640 | 0;
 c[m >> 2] = 0;
 m = j + 616 | 0;
 c[m >> 2] = 0;
 m = j + 532 | 0;
 c[m >> 2] = 0;
 m = j + 520 | 0;
 c[m >> 2] = 0;
 m = j + 508 | 0;
 c[m >> 2] = 0;
 m = j + 496 | 0;
 c[m >> 2] = 0;
 m = j + 484 | 0;
 c[m >> 2] = 0;
 m = j + 472 | 0;
 c[m >> 2] = 0;
 m = j + 460 | 0;
 c[m >> 2] = 0;
 m = j + 448 | 0;
 c[m >> 2] = 0;
 m = j + 436 | 0;
 c[m >> 2] = 0;
 m = j + 424 | 0;
 c[m >> 2] = 0;
 m = j + 412 | 0;
 c[m >> 2] = 0;
 m = j + 400 | 0;
 c[m >> 2] = 0;
 m = j + 388 | 0;
 c[m >> 2] = 0;
 m = j + 376 | 0;
 c[m >> 2] = 0;
 m = j + 364 | 0;
 c[m >> 2] = 0;
 m = j + 352 | 0;
 c[m >> 2] = 0;
 c[g >> 2] = 0;
 Sc(h);
 i = k;
 return;
}

function Qc(d) {
 d = d | 0;
 var e = 0, f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0;
 R = 0;
 ga = i;
 i = i + 22160 | 0;
 a : do if (!2) {
  o = 2246;
  R = 4;
 } else {
  n = 2246;
  p = 2246;
  while (1) {
   if (!(a[n >> 0] | 0)) {
    m = p;
    break a;
   }
   n = n + 1 | 0;
   p = n;
   if (!(p & 3)) {
    o = n;
    R = 4;
    break;
   }
  }
 } while (0);
 if ((R | 0) == 4) {
  m = o;
  while (1) {
   n = c[m >> 2] | 0;
   if (!((n & -2139062144 ^ -2139062144) & n + -16843009)) m = m + 4 | 0; else break;
  }
  if ((n & 255) << 24 >> 24) do m = m + 1 | 0; while ((a[m >> 0] | 0) != 0);
 }
 m = m - 2246 | 0;
 if ((m | 0) > 0) {
  P = bf(m + 9 | 0) | 0;
  c[P >> 2] = 0;
  c[P + 4 >> 2] = 0;
  c[P >> 2] = 0;
  c[P >> 2] = (c[P >> 2] | 0) + 1;
  c[P + 4 >> 2] = m;
  c[(ga + 12808 | 0) >> 2] = P + 8 | 0;
  Af(P + 8 | 0 | 0, 2246, m | 0) | 0;
  a[(P + 8 | 0) + m >> 0] = 0;
 } else {
  c[(ga + 12808 | 0) >> 2] = 0;
  P = 0;
 }
 c[(ga + 12812 | 0) >> 2] = 640;
 c[((ga + 12812 | 0) + 4 | 0) >> 2] = 400;
 c[((ga + 12812 | 0) + 8 | 0) >> 2] = 0;
 c[((ga + 12812 | 0) + 12 | 0) >> 2] = 12;
 c[((ga + 12812 | 0) + 16 | 0) >> 2] = 1;
 a[((ga + 12812 | 0) + 20 | 0) >> 0] = 1;
 c[((ga + 12812 | 0) + 24 | 0) >> 2] = 1;
 Q = (ga + 12812 | 0) + 28 | 0;
 b : do if (!3) {
  q = 19235;
  R = 15;
 } else {
  m = 19235;
  n = 19235;
  while (1) {
   if (!(a[m >> 0] | 0)) {
    r = n;
    break b;
   }
   m = m + 1 | 0;
   n = m;
   if (!(n & 3)) {
    q = m;
    R = 15;
    break;
   }
  }
 } while (0);
 if ((R | 0) == 15) {
  m = q;
  while (1) {
   n = c[m >> 2] | 0;
   if (!((n & -2139062144 ^ -2139062144) & n + -16843009)) m = m + 4 | 0; else break;
  }
  if ((n & 255) << 24 >> 24) do m = m + 1 | 0; while ((a[m >> 0] | 0) != 0);
  r = m;
 }
 m = r - 19235 | 0;
 if ((m | 0) > 0) {
  G = bf(m + 9 | 0) | 0;
  c[Q >> 2] = G;
  c[G >> 2] = 0;
  c[G + 4 >> 2] = 0;
  c[G >> 2] = 0;
  c[G >> 2] = (c[G >> 2] | 0) + 1;
  G = c[Q >> 2] | 0;
  c[G + 4 >> 2] = m;
  c[((ga + 12812 | 0) + 32 | 0) >> 2] = G + 8 | 0;
  Af(G + 8 | 0 | 0, 19235, m | 0) | 0;
  a[(c[((ga + 12812 | 0) + 32 | 0) >> 2] | 0) + m >> 0] = 0;
  G = Q;
  m = c[Q >> 2] | 0;
 } else {
  c[Q >> 2] = 0;
  c[(ga + 12812 | 0) + 32 >> 2] = 0;
  G = Q;
  m = 0;
 }
 g[(ga + 12812 | 0) + 36 >> 2] = 0.0;
 g[(ga + 12812 | 0) + 40 >> 2] = 0.0;
 g[(ga + 12812 | 0) + 44 >> 2] = 0.0;
 g[(ga + 12812 | 0) + 48 >> 2] = 1.0;
 g[(ga + 12812 | 0) + 52 >> 2] = 1.0;
 a[(ga + 12812 | 0) + 56 >> 0] = 0;
 a[(ga + 12812 | 0) + 57 >> 0] = 3;
 a[(ga + 12812 | 0) + 60 >> 0] = 0;
 c[((ga + 12812 | 0) + 64 | 0) >> 2] = 256;
 c[((ga + 12812 | 0) + 68 | 0) >> 2] = 256;
 c[(ga + 12812 | 0) + 72 >> 2] = 4194304;
 c[(ga + 12812 | 0) + 76 >> 2] = 65536;
 c[(ga + 12812 | 0) + 80 >> 2] = 4096;
 c[((ga + 12812 | 0) + 84 | 0) >> 2] = 128;
 c[(ga + 12812 | 0) + 100 >> 2] = 0;
 c[((ga + 12812 | 0) + 88 | 0) >> 2] = 128;
 c[(ga + 12812 | 0) + 104 >> 2] = 0;
 c[((ga + 12812 | 0) + 92 | 0) >> 2] = 128;
 c[(ga + 12812 | 0) + 108 >> 2] = 0;
 c[((ga + 12812 | 0) + 96 | 0) >> 2] = 128;
 c[(ga + 12812 | 0) + 112 >> 2] = 0;
 c[(ga + 12812 | 0) >> 2] = 800;
 c[((ga + 12812 | 0) + 4 | 0) >> 2] = 500;
 a[((ga + 12812 | 0) + 20 | 0) >> 0] = 1;
 if (m | 0) {
  F = c[m >> 2] | 0;
  c[m >> 2] = F - 1;
  if ((F | 0) == 1) {
   cf(c[Q >> 2] | 0);
   c[G >> 2] = 0;
   c[((ga + 12812 | 0) + 32 | 0) >> 2] = 0;
   m = (ga + 12812 | 0) + 32 | 0;
  } else m = (ga + 12812 | 0) + 32 | 0;
  c[G >> 2] = 0;
  c[m >> 2] = 0;
 }
 c[Q >> 2] = P;
 F = (ga + 12812 | 0) + 32 | 0;
 c[F >> 2] = c[(ga + 12808 | 0) >> 2];
 if (P | 0) {
  D = P;
  c[D >> 2] = (c[D >> 2] | 0) + 1;
 }
 n = bf(1728) | 0;
 Bf(n | 0, 0, 1728) | 0;
 Cd(n);
 q = n + 116 | 0;
 r = q + 44 | 0;
 do {
  c[q >> 2] = 0;
  q = q + 4 | 0;
 } while ((q | 0) < (r | 0));
 Cd(n + 160 | 0);
 c[(n + 276 | 0) >> 2] = 0;
 c[(n + 276 | 0) + 4 >> 2] = 0;
 c[(n + 276 | 0) + 8 >> 2] = 0;
 c[(n + 276 | 0) + 12 >> 2] = 0;
 c[(n + 276 | 0) + 16 >> 2] = 0;
 c[(n + 276 | 0) + 20 >> 2] = 0;
 c[(n + 276 | 0) + 24 >> 2] = 0;
 c[n + 304 >> 2] = 12;
 c[n + 308 >> 2] = 1;
 a[n + 312 >> 0] = 1;
 c[n + 316 >> 2] = 1;
 c[(n + 320 | 0) >> 2] = 0;
 c[(n + 320 | 0) + 4 >> 2] = 0;
 c[(n + 320 | 0) + 8 >> 2] = 0;
 c[(n + 320 | 0) + 12 >> 2] = 0;
 c[(n + 320 | 0) + 16 >> 2] = 0;
 c[(n + 320 | 0) + 20 >> 2] = 0;
 c[(n + 320 | 0) + 24 >> 2] = 0;
 c[n + 348 >> 2] = 16;
 c[n + 352 >> 2] = 65536;
 a[n + 356 >> 0] = 0;
 c[(n + 360 | 0) >> 2] = 0;
 c[(n + 360 | 0) + 4 >> 2] = 0;
 c[(n + 360 | 0) + 8 >> 2] = 0;
 c[(n + 360 | 0) + 12 >> 2] = 0;
 c[(n + 360 | 0) + 16 >> 2] = 0;
 c[(n + 360 | 0) + 20 >> 2] = 0;
 c[(n + 360 | 0) + 24 >> 2] = 0;
 a[(n + 360 | 0) + 28 >> 0] = 0;
 c[(n + 392 | 0) >> 2] = 0;
 c[(n + 392 | 0) + 4 >> 2] = 0;
 c[(n + 392 | 0) + 8 >> 2] = 0;
 c[(n + 392 | 0) + 12 >> 2] = 0;
 c[(n + 392 | 0) + 16 >> 2] = 0;
 c[8947] = n + 160 | 0;
 a[n + 416 >> 0] = 0;
 c[(n + 452 | 0) >> 2] = 0;
 c[(n + 452 | 0) + 4 >> 2] = 0;
 c[(n + 452 | 0) + 8 >> 2] = 0;
 c[(n + 452 | 0) + 12 >> 2] = 0;
 c[(n + 452 | 0) + 16 >> 2] = 0;
 c[(n + 452 | 0) + 20 >> 2] = 0;
 c[(n + 452 | 0) + 24 >> 2] = 0;
 c[(n + 420 | 0) >> 2] = 0;
 c[(n + 420 | 0) + 4 >> 2] = 0;
 c[(n + 420 | 0) + 8 >> 2] = 0;
 c[(n + 420 | 0) + 12 >> 2] = 0;
 c[(n + 420 | 0) + 16 >> 2] = 0;
 c[(n + 420 | 0) + 20 >> 2] = 0;
 c[(n + 420 | 0) + 24 >> 2] = 0;
 a[(n + 420 | 0) + 28 >> 0] = 0;
 c[n + 480 >> 2] = 12;
 c[n + 484 >> 2] = 1;
 a[n + 488 >> 0] = 1;
 c[n + 492 >> 2] = 1;
 c[n + 496 >> 2] = 0;
 c[n + 500 >> 2] = 0;
 Cd(n + 504 | 0);
 c[(n + 640 | 0) >> 2] = 0;
 c[(n + 640 | 0) + 4 >> 2] = 0;
 c[(n + 620 | 0) >> 2] = 0;
 c[(n + 620 | 0) + 4 >> 2] = 0;
 c[(n + 620 | 0) + 8 >> 2] = 0;
 c[(n + 620 | 0) + 12 >> 2] = 0;
 c[(n + 640 | 0) >> 2] = 2013282306;
 b[(n + 640 | 0) + 4 >> 1] = 192;
 b[n + 648 >> 1] = 28672;
 b[n + 650 >> 1] = 28672;
 c[(n + 652 | 0) >> 2] = 0;
 b[(n + 652 | 0) >> 1] = 32647;
 b[n + 654 >> 1] = 255;
 b[n + 656 >> 1] = 296;
 c[(n + 660 | 0) >> 2] = 0;
 c[(n + 660 | 0) + 4 >> 2] = 0;
 c[(n + 660 | 0) + 8 >> 2] = 0;
 c[(n + 660 | 0) + 12 >> 2] = 0;
 g[n + 676 >> 2] = 1.0;
 g[n + 680 >> 2] = 1.0;
 g[n + 684 >> 2] = 1.0;
 g[n + 688 >> 2] = 1.0;
 Bf(n + 692 | 0, 0, 163) | 0;
 c[(n + 856 | 0) >> 2] = 0;
 c[(n + 856 | 0) + 4 >> 2] = 0;
 c[(n + 856 | 0) + 8 >> 2] = 0;
 b[(n + 856 | 0) + 12 >> 1] = 0;
 a[(n + 856 | 0) + 14 >> 0] = 0;
 c[(n + 872 | 0) >> 2] = 0;
 c[(n + 872 | 0) + 4 >> 2] = 0;
 c[(n + 872 | 0) + 8 >> 2] = 0;
 b[(n + 872 | 0) + 12 >> 1] = 0;
 a[(n + 872 | 0) + 14 >> 0] = 0;
 c[(n + 888 | 0) >> 2] = 0;
 c[(n + 888 | 0) + 4 >> 2] = 0;
 c[(n + 888 | 0) + 8 >> 2] = 0;
 b[(n + 888 | 0) + 12 >> 1] = 0;
 a[(n + 888 | 0) + 14 >> 0] = 0;
 c[(n + 904 | 0) >> 2] = 0;
 c[(n + 904 | 0) + 4 >> 2] = 0;
 c[(n + 904 | 0) + 8 >> 2] = 0;
 b[(n + 904 | 0) + 12 >> 1] = 0;
 a[(n + 904 | 0) + 14 >> 0] = 0;
 c[(n + 920 | 0) >> 2] = 0;
 c[(n + 920 | 0) + 4 >> 2] = 0;
 c[(n + 920 | 0) + 8 >> 2] = 0;
 b[(n + 920 | 0) + 12 >> 1] = 0;
 a[(n + 920 | 0) + 14 >> 0] = 0;
 c[(n + 936 | 0) >> 2] = 0;
 c[(n + 936 | 0) + 4 >> 2] = 0;
 c[(n + 936 | 0) + 8 >> 2] = 0;
 b[(n + 936 | 0) + 12 >> 1] = 0;
 a[(n + 936 | 0) + 14 >> 0] = 0;
 c[(n + 952 | 0) >> 2] = 0;
 c[(n + 952 | 0) + 4 >> 2] = 0;
 c[(n + 952 | 0) + 8 >> 2] = 0;
 b[(n + 952 | 0) + 12 >> 1] = 0;
 a[(n + 952 | 0) + 14 >> 0] = 0;
 c[(n + 968 | 0) >> 2] = 0;
 c[(n + 968 | 0) + 4 >> 2] = 0;
 c[(n + 968 | 0) + 8 >> 2] = 0;
 b[(n + 968 | 0) + 12 >> 1] = 0;
 a[(n + 968 | 0) + 14 >> 0] = 0;
 c[(n + 984 | 0) >> 2] = 0;
 c[(n + 984 | 0) + 4 >> 2] = 0;
 c[(n + 984 | 0) + 8 >> 2] = 0;
 b[(n + 984 | 0) + 12 >> 1] = 0;
 a[(n + 984 | 0) + 14 >> 0] = 0;
 c[(n + 1e3 | 0) >> 2] = 0;
 c[(n + 1e3 | 0) + 4 >> 2] = 0;
 c[(n + 1e3 | 0) + 8 >> 2] = 0;
 b[(n + 1e3 | 0) + 12 >> 1] = 0;
 a[(n + 1e3 | 0) + 14 >> 0] = 0;
 c[(n + 1016 | 0) >> 2] = 0;
 c[(n + 1016 | 0) + 4 >> 2] = 0;
 c[(n + 1016 | 0) + 8 >> 2] = 0;
 b[(n + 1016 | 0) + 12 >> 1] = 0;
 a[(n + 1016 | 0) + 14 >> 0] = 0;
 c[(n + 1032 | 0) >> 2] = 0;
 c[(n + 1032 | 0) + 4 >> 2] = 0;
 c[(n + 1032 | 0) + 8 >> 2] = 0;
 b[(n + 1032 | 0) + 12 >> 1] = 0;
 a[(n + 1032 | 0) + 14 >> 0] = 0;
 c[(n + 1048 | 0) >> 2] = 0;
 c[(n + 1048 | 0) + 4 >> 2] = 0;
 c[(n + 1048 | 0) + 8 >> 2] = 0;
 b[(n + 1048 | 0) + 12 >> 1] = 0;
 a[(n + 1048 | 0) + 14 >> 0] = 0;
 c[(n + 1064 | 0) >> 2] = 0;
 c[(n + 1064 | 0) + 4 >> 2] = 0;
 c[(n + 1064 | 0) + 8 >> 2] = 0;
 b[(n + 1064 | 0) + 12 >> 1] = 0;
 a[(n + 1064 | 0) + 14 >> 0] = 0;
 c[(n + 1080 | 0) >> 2] = 0;
 c[(n + 1080 | 0) + 4 >> 2] = 0;
 c[(n + 1080 | 0) + 8 >> 2] = 0;
 b[(n + 1080 | 0) + 12 >> 1] = 0;
 a[(n + 1080 | 0) + 14 >> 0] = 0;
 q = n + 1096 | 0;
 r = q + 88 | 0;
 do {
  c[q >> 2] = 0;
  q = q + 4 | 0;
 } while ((q | 0) < (r | 0));
 c[(n + 1184 | 0) >> 2] = 16;
 c[n + 1188 >> 2] = 65536;
 a[n + 1192 >> 0] = 0;
 c[(n + 1196 | 0) >> 2] = 0;
 c[(n + 1196 | 0) + 4 >> 2] = 0;
 c[(n + 1196 | 0) + 8 >> 2] = 0;
 c[(n + 1196 | 0) + 12 >> 2] = 0;
 c[n + 1212 >> 2] = 16;
 c[n + 1216 >> 2] = 65536;
 c[(n + 1220 | 0) >> 2] = 0;
 c[(n + 1220 | 0) + 4 >> 2] = 0;
 c[(n + 1220 | 0) + 8 >> 2] = 0;
 c[(n + 1220 | 0) + 12 >> 2] = 0;
 c[n + 1236 >> 2] = 16;
 c[n + 1240 >> 2] = 65536;
 a[n + 1244 >> 0] = 0;
 c[(n + 1248 | 0) >> 2] = 0;
 c[(n + 1248 | 0) + 4 >> 2] = 0;
 c[(n + 1248 | 0) + 8 >> 2] = 0;
 c[(n + 1248 | 0) + 12 >> 2] = 0;
 c[n + 1264 >> 2] = 16;
 c[n + 1268 >> 2] = 65536;
 a[n + 1272 >> 0] = 0;
 c[n + 1276 >> 2] = 0;
 a[n + 1280 >> 0] = 0;
 c[(n + 1344 | 0) >> 2] = 0;
 c[(n + 1344 | 0) + 4 >> 2] = 0;
 c[(n + 1344 | 0) + 8 >> 2] = 0;
 c[(n + 1344 | 0) + 12 >> 2] = 0;
 c[(n + 1344 | 0) + 16 >> 2] = 0;
 c[(n + 1344 | 0) + 20 >> 2] = 0;
 c[(n + 1344 | 0) + 24 >> 2] = 0;
 a[(n + 1344 | 0) + 28 >> 0] = 0;
 c[(n + 1376 | 0) >> 2] = 0;
 c[(n + 1376 | 0) + 4 >> 2] = 0;
 c[(n + 1376 | 0) + 8 >> 2] = 0;
 c[(n + 1376 | 0) + 12 >> 2] = 0;
 c[(n + 1376 | 0) + 16 >> 2] = 0;
 c[(n + 1376 | 0) + 20 >> 2] = 0;
 c[(n + 1376 | 0) + 24 >> 2] = 0;
 a[(n + 1376 | 0) + 28 >> 0] = 0;
 c[(n + 1408 | 0) >> 2] = 0;
 c[(n + 1408 | 0) + 4 >> 2] = 0;
 c[(n + 1408 | 0) + 8 >> 2] = 0;
 c[(n + 1408 | 0) + 12 >> 2] = 0;
 c[(n + 1408 | 0) + 16 >> 2] = 0;
 c[(n + 1408 | 0) + 20 >> 2] = 0;
 c[(n + 1408 | 0) + 24 >> 2] = 0;
 a[(n + 1408 | 0) + 28 >> 0] = 0;
 a[n + 1440 >> 0] = 0;
 c[n + 1444 >> 2] = 0;
 c[n + 1448 >> 2] = 0;
 q = n + 1284 | 0;
 r = q + 56 | 0;
 do {
  c[q >> 2] = 0;
  q = q + 4 | 0;
 } while ((q | 0) < (r | 0));
 a[(n + 1284 | 0) + 56 >> 0] = 0;
 b[(n + 1452 | 0) >> 1] = 255;
 c[(n + 1456 | 0) >> 2] = 0;
 c[(n + 1456 | 0) + 4 >> 2] = 0;
 c[(n + 1456 | 0) + 8 >> 2] = 0;
 c[(n + 1456 | 0) + 12 >> 2] = 0;
 c[n + 1472 >> 2] = 16;
 c[n + 1476 >> 2] = 65536;
 c[(n + 1480 | 0) >> 2] = 0;
 c[(n + 1480 | 0) + 4 >> 2] = 0;
 c[(n + 1480 | 0) + 8 >> 2] = 0;
 c[(n + 1480 | 0) + 12 >> 2] = 0;
 c[n + 1496 >> 2] = 16;
 c[n + 1500 >> 2] = 65536;
 a[n + 1504 >> 0] = 0;
 c[n + 1508 >> 2] = 0;
 c[n + 1512 >> 2] = 0;
 b[n + 1516 >> 1] = 255;
 c[(n + 1520 | 0) >> 2] = 0;
 c[(n + 1520 | 0) + 4 >> 2] = 0;
 c[(n + 1520 | 0) + 8 >> 2] = 0;
 c[(n + 1520 | 0) + 12 >> 2] = 0;
 c[n + 1536 >> 2] = 16;
 c[n + 1540 >> 2] = 65536;
 c[(n + 1544 | 0) >> 2] = 0;
 c[(n + 1544 | 0) + 4 >> 2] = 0;
 c[(n + 1544 | 0) + 8 >> 2] = 0;
 c[(n + 1544 | 0) + 12 >> 2] = 0;
 c[n + 1560 >> 2] = 16;
 c[n + 1564 >> 2] = 65536;
 a[n + 1568 >> 0] = 0;
 c[n + 1572 >> 2] = 0;
 c[n + 1576 >> 2] = 0;
 b[n + 1580 >> 1] = 255;
 c[(n + 1584 | 0) >> 2] = 0;
 c[(n + 1584 | 0) + 4 >> 2] = 0;
 c[(n + 1584 | 0) + 8 >> 2] = 0;
 c[(n + 1584 | 0) + 12 >> 2] = 0;
 c[n + 1600 >> 2] = 16;
 c[n + 1604 >> 2] = 65536;
 c[(n + 1608 | 0) >> 2] = 0;
 c[(n + 1608 | 0) + 4 >> 2] = 0;
 c[(n + 1608 | 0) + 8 >> 2] = 0;
 c[(n + 1608 | 0) + 12 >> 2] = 0;
 c[n + 1624 >> 2] = 16;
 c[n + 1628 >> 2] = 65536;
 a[n + 1632 >> 0] = 0;
 c[n + 1636 >> 2] = 0;
 c[n + 1640 >> 2] = 0;
 b[n + 1644 >> 1] = 255;
 c[(n + 1648 | 0) >> 2] = 0;
 c[(n + 1648 | 0) + 4 >> 2] = 0;
 c[(n + 1648 | 0) + 8 >> 2] = 0;
 c[(n + 1648 | 0) + 12 >> 2] = 0;
 c[n + 1664 >> 2] = 16;
 c[n + 1668 >> 2] = 65536;
 c[(n + 1672 | 0) >> 2] = 0;
 c[(n + 1672 | 0) + 4 >> 2] = 0;
 c[(n + 1672 | 0) + 8 >> 2] = 0;
 c[(n + 1672 | 0) + 12 >> 2] = 0;
 c[n + 1688 >> 2] = 16;
 c[n + 1692 >> 2] = 65536;
 c[(n + 1696 | 0) >> 2] = 0;
 c[(n + 1696 | 0) + 4 >> 2] = 0;
 c[(n + 1696 | 0) + 8 >> 2] = 0;
 c[(n + 1696 | 0) + 12 >> 2] = 0;
 c[(n + 1696 | 0) + 16 >> 2] = 0;
 c[n + 1716 >> 2] = 16;
 c[n + 1720 >> 2] = 65536;
 c[8946] = n;
 c[n >> 2] = c[(ga + 12812 | 0) >> 2];
 c[n + 4 >> 2] = c[(ga + 12812 | 0) + 4 >> 2];
 c[n + 8 >> 2] = c[(ga + 12812 | 0) + 8 >> 2];
 c[n + 12 >> 2] = c[(ga + 12812 | 0) + 12 >> 2];
 c[n + 16 >> 2] = c[(ga + 12812 | 0) + 16 >> 2];
 c[n + 20 >> 2] = c[(ga + 12812 | 0) + 20 >> 2];
 c[n + 24 >> 2] = c[(ga + 12812 | 0) + 24 >> 2];
 if ((n + 28 | 0 | 0) != (Q | 0)) {
  m = c[(n + 28 | 0) >> 2] | 0;
  if (m | 0) {
   D = c[m >> 2] | 0;
   c[m >> 2] = D - 1;
   if ((D | 0) == 1) {
    cf(c[(n + 28 | 0) >> 2] | 0);
    c[(n + 28 | 0) >> 2] = 0;
    c[(n + 32 | 0) >> 2] = 0;
    m = n + 32 | 0;
   } else m = n + 32 | 0;
   c[(n + 28 | 0) >> 2] = 0;
   c[m >> 2] = 0;
  }
  m = c[Q >> 2] | 0;
  c[(n + 28 | 0) >> 2] = m;
  c[n + 32 >> 2] = c[F >> 2];
  if (m | 0) c[m >> 2] = (c[m >> 2] | 0) + 1;
 }
 q = n + 36 | 0;
 p = (ga + 12812 | 0) + 36 | 0;
 r = q + 80 | 0;
 do {
  c[q >> 2] = c[p >> 2];
  q = q + 4 | 0;
  p = p + 4 | 0;
 } while ((q | 0) < (r | 0));
 D = c[8946] | 0;
 a[D + 388 >> 0] = 1;
 c[(D + 160 | 0) >> 2] = c[(ga + 12812 | 0) >> 2];
 c[(D + 160 | 0) + 4 >> 2] = c[(ga + 12812 | 0) + 4 >> 2];
 c[(D + 160 | 0) + 8 >> 2] = c[(ga + 12812 | 0) + 8 >> 2];
 c[(D + 160 | 0) + 12 >> 2] = c[(ga + 12812 | 0) + 12 >> 2];
 c[(D + 160 | 0) + 16 >> 2] = c[(ga + 12812 | 0) + 16 >> 2];
 c[(D + 160 | 0) + 20 >> 2] = c[(ga + 12812 | 0) + 20 >> 2];
 c[(D + 160 | 0) + 24 >> 2] = c[(ga + 12812 | 0) + 24 >> 2];
 if ((D + 188 | 0 | 0) != (Q | 0)) {
  m = c[(D + 188 | 0) >> 2] | 0;
  if (m | 0) {
   r = c[m >> 2] | 0;
   c[m >> 2] = r - 1;
   if ((r | 0) == 1) {
    cf(c[(D + 188 | 0) >> 2] | 0);
    c[(D + 188 | 0) >> 2] = 0;
    c[(D + 192 | 0) >> 2] = 0;
    m = D + 192 | 0;
   } else m = D + 192 | 0;
   c[(D + 188 | 0) >> 2] = 0;
   c[m >> 2] = 0;
  }
  m = c[Q >> 2] | 0;
  c[(D + 188 | 0) >> 2] = m;
  c[D + 192 >> 2] = c[F >> 2];
  if (m | 0) c[m >> 2] = (c[m >> 2] | 0) + 1;
 }
 q = D + 196 | 0;
 p = (ga + 12812 | 0) + 36 | 0;
 r = q + 80 | 0;
 do {
  c[q >> 2] = c[p >> 2];
  q = q + 4 | 0;
  p = p + 4 | 0;
 } while ((q | 0) < (r | 0));
 c[(ga + 11728 | 0) >> 2] = 0;
 c[(ga + 11728 | 0) + 4 >> 2] = 0;
 c[(ga + 11728 | 0) + 8 >> 2] = 0;
 c[(ga + 11728 | 0) + 12 >> 2] = 0;
 c[(ga + 11728 | 0) + 16 >> 2] = 0;
 c[(ga + 11728 | 0) + 20 >> 2] = 0;
 c[((ga + 11728 | 0) + 40 | 0) >> 2] = 1;
 n = (ga + 11728 | 0) + 44 | 0;
 c[n >> 2] = 0;
 o = (ga + 11728 | 0) + 48 | 0;
 c[o >> 2] = 0;
 r = c[(ga + 12812 | 0) >> 2] | 0;
 c[(ga + 11728 | 0) >> 2] = r;
 m = c[((ga + 12812 | 0) + 4 | 0) >> 2] | 0;
 c[(ga + 11728 | 0) + 4 >> 2] = m;
 c[(ga + 11728 | 0) + 8 >> 2] = 0;
 c[(ga + 11728 | 0) + 12 >> 2] = 0;
 c[(ga + 11728 | 0) + 16 >> 2] = r;
 c[(ga + 11728 | 0) + 20 >> 2] = m;
 c[(ga + 11728 | 0) + 24 >> 2] = c[((ga + 12812 | 0) + 8 | 0) >> 2];
 c[(ga + 11728 | 0) + 28 >> 2] = c[((ga + 12812 | 0) + 12 | 0) >> 2];
 c[(ga + 11728 | 0) + 32 >> 2] = c[((ga + 12812 | 0) + 16 | 0) >> 2];
 a[(ga + 11728 | 0) + 36 >> 0] = a[((ga + 12812 | 0) + 20 | 0) >> 0] | 0;
 m = c[Q >> 2] | 0;
 c[n >> 2] = m;
 c[o >> 2] = c[F >> 2];
 if (m | 0) c[m >> 2] = (c[m >> 2] | 0) + 1;
 c[((ga + 11728 | 0) + 40 | 0) >> 2] = c[((ga + 12812 | 0) + 24 | 0) >> 2];
 q = D + 276 | 0;
 p = ga + 11728 | 0;
 r = q + 44 | 0;
 do {
  c[q >> 2] = c[p >> 2];
  q = q + 4 | 0;
  p = p + 4 | 0;
 } while ((q | 0) < (r | 0));
 if ((D + 320 | 0 | 0) == (n | 0)) {
  m = c[n >> 2] | 0;
  if (m | 0) {
   r = c[m >> 2] | 0;
   c[m >> 2] = r - 1;
   if ((r | 0) == 1) {
    cf(c[n >> 2] | 0);
    c[n >> 2] = 0;
    c[o >> 2] = 0;
   }
   c[n >> 2] = 0;
   c[o >> 2] = 0;
  }
 } else {
  m = c[(D + 320 | 0) >> 2] | 0;
  if (m | 0) {
   r = c[m >> 2] | 0;
   c[m >> 2] = r - 1;
   if ((r | 0) == 1) {
    cf(c[(D + 320 | 0) >> 2] | 0);
    c[(D + 320 | 0) >> 2] = 0;
    c[(D + 324 | 0) >> 2] = 0;
    m = D + 324 | 0;
   } else m = D + 324 | 0;
   c[(D + 320 | 0) >> 2] = 0;
   c[m >> 2] = 0;
  }
  c[(D + 320 | 0) >> 2] = c[n >> 2];
  c[D + 324 >> 2] = c[o >> 2];
  c[n >> 2] = 0;
  c[o >> 2] = 0;
 }
 c[D + 360 >> 2] = D + 416 | 0;
 c[D + 364 >> 2] = D + 160 | 0;
 c[D + 368 >> 2] = D + 1168 | 0;
 c[D + 372 >> 2] = D + 1440 | 0;
 c[D + 376 >> 2] = D + 1504 | 0;
 c[D + 380 >> 2] = D + 1568 | 0;
 c[D + 384 >> 2] = D + 1632 | 0;
 c[D + 392 >> 2] = c[D + 292 >> 2];
 c[D + 396 >> 2] = c[D + 296 >> 2];
 $a(c[(ga + 12812 | 0) >> 2] | 0, c[((ga + 12812 | 0) + 4 | 0) >> 2] | 0);
 Hb(ga + 11728 | 0 | 0);
 switch (c[((ga + 12812 | 0) + 8 | 0) >> 2] | 0) {
 case 4:
 case 2:
 case 0:
 case 6:
 case 5:
  {
   m = 1;
   break;
  }
 case 12:
  {
   m = 0;
   break;
  }
 default:
  m = 0;
 }
 c[(ga + 11728 | 0) >> 2] = m;
 r = c[((ga + 12812 | 0) + 12 | 0) >> 2] | 0;
 c[(ga + 11728 | 0) + 4 >> 2] = (r + -11 | 0) >>> 0 < 2 & 1;
 c[(ga + 11728 | 0) + 8 >> 2] = (r | 0) == 12 & 1;
 o = (c[((ga + 12812 | 0) + 16 | 0) >> 2] | 0) > 1 & 1;
 c[(ga + 11728 | 0) + 12 >> 2] = o;
 c[(ga + 11728 | 0) + 16 >> 2] = 0;
 c[(ga + 11728 | 0) + 20 >> 2] = 0;
 c[(ga + 12e3 | 0) >> 2] = m;
 c[(ga + 12e3 | 0) + 4 >> 2] = (r + -11 | 0) >>> 0 < 2 & 1;
 c[(ga + 12e3 | 0) + 8 >> 2] = (r | 0) == 12 & 1;
 c[(ga + 12e3 | 0) + 12 >> 2] = o;
 ne(20059, ga + 12e3 | 0);
 o = ya(0, ga + 11728 | 0 | 0) | 0;
 c[D + 408 >> 2] = o;
 Ha(o | 0) | 0;
 gb(3379, 35792);
 gb(34076, 35796);
 gb(3386, 35800);
 gb(34921, 35808);
 gb(35661, 35820);
 gb(35660, 35824);
 gb(36347, 35812);
 gb(36349, 35828);
 o = hb(7938) | 0;
 if (!o) oe(20440, ga + 12280 | 0); else {
  c : do if (!(o & 3)) {
   s = o;
   R = 66;
  } else {
   m = o;
   n = o;
   while (1) {
    if (!(a[m >> 0] | 0)) {
     t = n;
     break c;
    }
    m = m + 1 | 0;
    n = m;
    if (!(n & 3)) {
     s = m;
     R = 66;
     break;
    }
   }
  } while (0);
  if ((R | 0) == 66) {
   m = s;
   while (1) {
    n = c[m >> 2] | 0;
    if (!((n & -2139062144 ^ -2139062144) & n + -16843009)) m = m + 4 | 0; else break;
   }
   if ((n & 255) << 24 >> 24) do m = m + 1 | 0; while ((a[m >> 0] | 0) != 0);
   t = m;
  }
  m = t - o | 0;
  if ((m | 0) > 0 & (a[o >> 0] | 0) != 0) {
   n = bf(m + 9 | 0) | 0;
   c[n >> 2] = 0;
   c[n + 4 >> 2] = 0;
   c[n >> 2] = 0;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
   c[n + 4 >> 2] = m;
   Af(n + 8 | 0 | 0, o | 0, m | 0) | 0;
   a[(n + 8 | 0) + m >> 0] = 0;
   m = n;
   n = n + 8 | 0;
  } else {
   m = 0;
   n = 0;
  }
  c[(ga + 12272 | 0) >> 2] = 20429;
  c[(ga + 12272 | 0) + 4 >> 2] = (n | 0) == 0 ? 36455 : n;
  ne(20421, ga + 12272 | 0);
  if (m | 0) {
   t = c[m >> 2] | 0;
   c[m >> 2] = t - 1;
   if ((t | 0) == 1) cf(m);
  }
 }
 o = hb(7936) | 0;
 if (!o) oe(20440, ga + 12296 | 0); else {
  d : do if (!(o & 3)) {
   v = o;
   R = 81;
  } else {
   m = o;
   n = o;
   while (1) {
    if (!(a[m >> 0] | 0)) {
     w = n;
     break d;
    }
    m = m + 1 | 0;
    n = m;
    if (!(n & 3)) {
     v = m;
     R = 81;
     break;
    }
   }
  } while (0);
  if ((R | 0) == 81) {
   m = v;
   while (1) {
    n = c[m >> 2] | 0;
    if (!((n & -2139062144 ^ -2139062144) & n + -16843009)) m = m + 4 | 0; else break;
   }
   if ((n & 255) << 24 >> 24) do m = m + 1 | 0; while ((a[m >> 0] | 0) != 0);
   w = m;
  }
  m = w - o | 0;
  if ((m | 0) > 0 & (a[o >> 0] | 0) != 0) {
   n = bf(m + 9 | 0) | 0;
   c[n >> 2] = 0;
   c[n + 4 >> 2] = 0;
   c[n >> 2] = 0;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
   c[n + 4 >> 2] = m;
   Af(n + 8 | 0 | 0, o | 0, m | 0) | 0;
   a[(n + 8 | 0) + m >> 0] = 0;
   m = n;
   n = n + 8 | 0;
  } else {
   m = 0;
   n = 0;
  }
  c[(ga + 12288 | 0) >> 2] = 20475;
  c[(ga + 12288 | 0) + 4 >> 2] = (n | 0) == 0 ? 36455 : n;
  ne(20421, ga + 12288 | 0);
  if (m | 0) {
   w = c[m >> 2] | 0;
   c[m >> 2] = w - 1;
   if ((w | 0) == 1) cf(m);
  }
 }
 o = hb(7937) | 0;
 if (!o) oe(20440, ga + 12312 | 0); else {
  e : do if (!(o & 3)) {
   x = o;
   R = 96;
  } else {
   m = o;
   n = o;
   while (1) {
    if (!(a[m >> 0] | 0)) {
     l = n;
     break e;
    }
    m = m + 1 | 0;
    n = m;
    if (!(n & 3)) {
     x = m;
     R = 96;
     break;
    }
   }
  } while (0);
  if ((R | 0) == 96) {
   l = x;
   while (1) {
    m = c[l >> 2] | 0;
    if (!((m & -2139062144 ^ -2139062144) & m + -16843009)) l = l + 4 | 0; else break;
   }
   if ((m & 255) << 24 >> 24) do l = l + 1 | 0; while ((a[l >> 0] | 0) != 0);
  }
  l = l - o | 0;
  if ((l | 0) > 0 & (a[o >> 0] | 0) != 0) {
   m = bf(l + 9 | 0) | 0;
   c[m >> 2] = 0;
   c[m + 4 >> 2] = 0;
   c[m >> 2] = 0;
   c[m >> 2] = (c[m >> 2] | 0) + 1;
   c[m + 4 >> 2] = l;
   Af(m + 8 | 0 | 0, o | 0, l | 0) | 0;
   a[(m + 8 | 0) + l >> 0] = 0;
   l = m;
   m = m + 8 | 0;
  } else {
   l = 0;
   m = 0;
  }
  c[(ga + 12304 | 0) >> 2] = 20485;
  c[(ga + 12304 | 0) + 4 >> 2] = (m | 0) == 0 ? 36455 : m;
  ne(20421, ga + 12304 | 0);
  if (l | 0) {
   x = c[l >> 2] | 0;
   c[l >> 2] = x - 1;
   if ((x | 0) == 1) cf(l);
  }
 }
 n = hb(35724) | 0;
 if (!n) oe(20440, ga + 12328 | 0); else {
  f : do if (!(n & 3)) {
   y = n;
   R = 111;
  } else {
   l = n;
   m = n;
   while (1) {
    if (!(a[l >> 0] | 0)) {
     k = m;
     break f;
    }
    l = l + 1 | 0;
    m = l;
    if (!(m & 3)) {
     y = l;
     R = 111;
     break;
    }
   }
  } while (0);
  if ((R | 0) == 111) {
   k = y;
   while (1) {
    l = c[k >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) k = k + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do k = k + 1 | 0; while ((a[k >> 0] | 0) != 0);
  }
  k = k - n | 0;
  if ((k | 0) > 0 & (a[n >> 0] | 0) != 0) {
   l = bf(k + 9 | 0) | 0;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[l >> 2] = 0;
   c[l >> 2] = (c[l >> 2] | 0) + 1;
   c[l + 4 >> 2] = k;
   Af(l + 8 | 0 | 0, n | 0, k | 0) | 0;
   a[(l + 8 | 0) + k >> 0] = 0;
   k = l;
   l = l + 8 | 0;
  } else {
   k = 0;
   l = 0;
  }
  c[(ga + 12320 | 0) >> 2] = 20497;
  c[(ga + 12320 | 0) + 4 >> 2] = (l | 0) == 0 ? 36455 : l;
  ne(20421, ga + 12320 | 0);
  if (k | 0) {
   y = c[k >> 2] | 0;
   c[k >> 2] = y - 1;
   if ((y | 0) == 1) cf(k);
  }
 }
 gb(3379, ga + 12e3 | 0 | 0);
 y = c[(ga + 12e3 | 0) >> 2] | 0;
 c[(ga + 12336 | 0) >> 2] = 20533;
 c[(ga + 12336 | 0) + 4 >> 2] = y;
 ne(20525, ga + 12336 | 0);
 gb(34076, ga + 12e3 | 0 | 0);
 y = c[(ga + 12e3 | 0) >> 2] | 0;
 c[(ga + 12344 | 0) >> 2] = 20553;
 c[(ga + 12344 | 0) + 4 >> 2] = y;
 ne(20525, ga + 12344 | 0);
 gb(3386, ga + 12e3 | 0 | 0);
 y = c[(ga + 12e3 | 0) >> 2] | 0;
 m = c[(ga + 12e3 | 0) + 4 >> 2] | 0;
 c[(ga + 12352 | 0) >> 2] = 20593;
 c[(ga + 12352 | 0) + 4 >> 2] = y;
 c[(ga + 12352 | 0) + 8 >> 2] = m;
 ne(20582, ga + 12352 | 0);
 gb(34921, ga + 12e3 | 0 | 0);
 m = c[(ga + 12e3 | 0) >> 2] | 0;
 c[(ga + 12368 | 0) >> 2] = 20614;
 c[(ga + 12368 | 0) + 4 >> 2] = m;
 ne(20525, ga + 12368 | 0);
 gb(35661, ga + 12e3 | 0 | 0);
 m = c[(ga + 12e3 | 0) >> 2] | 0;
 c[(ga + 12376 | 0) >> 2] = 20636;
 c[(ga + 12376 | 0) + 4 >> 2] = m;
 ne(20525, ga + 12376 | 0);
 gb(35660, ga + 12e3 | 0 | 0);
 m = c[(ga + 12e3 | 0) >> 2] | 0;
 c[(ga + 12384 | 0) >> 2] = 20672;
 c[(ga + 12384 | 0) + 4 >> 2] = m;
 ne(20525, ga + 12384 | 0);
 gb(36347, ga + 12e3 | 0 | 0);
 m = c[(ga + 12e3 | 0) >> 2] | 0;
 c[(ga + 12456 | 0) >> 2] = 20706;
 c[(ga + 12456 | 0) + 4 >> 2] = m;
 ne(20525, ga + 12456 | 0);
 gb(36349, ga + 12e3 | 0 | 0);
 m = c[(ga + 12e3 | 0) >> 2] | 0;
 c[(ga + 12528 | 0) >> 2] = 20736;
 c[(ga + 12528 | 0) + 4 >> 2] = m;
 ne(20525, ga + 12528 | 0);
 m = hb(7939) | 0;
 if (!m) oe(20440, ga + 12552 | 0); else {
  g : do if (!(m & 3)) {
   z = m;
   R = 126;
  } else {
   k = m;
   l = m;
   while (1) {
    if (!(a[k >> 0] | 0)) {
     j = l;
     break g;
    }
    k = k + 1 | 0;
    l = k;
    if (!(l & 3)) {
     z = k;
     R = 126;
     break;
    }
   }
  } while (0);
  if ((R | 0) == 126) {
   j = z;
   while (1) {
    k = c[j >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) j = j + 4 | 0; else break;
   }
   if ((k & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  j = j - m | 0;
  if ((j | 0) > 0 & (a[m >> 0] | 0) != 0) {
   z = bf(j + 9 | 0) | 0;
   c[z >> 2] = 0;
   c[z + 4 >> 2] = 0;
   c[z >> 2] = 0;
   c[z >> 2] = (c[z >> 2] | 0) + 1;
   c[z + 4 >> 2] = j;
   c[(ga + 12528 | 0) >> 2] = z + 8 | 0;
   Af(z + 8 | 0 | 0, m | 0, j | 0) | 0;
   a[(z + 8 | 0) + j >> 0] = 0;
   m = z;
  } else {
   c[(ga + 12528 | 0) >> 2] = 0;
   m = 0;
  }
  c[(ga + 12456 | 0) >> 2] = 0;
  c[(ga + 12456 | 0) + 4 >> 2] = 0;
  c[((ga + 12456 | 0) + 8 | 0) >> 2] = 0;
  h : do if (!2) {
   A = 20782;
   R = 137;
  } else {
   j = 20782;
   k = 20782;
   while (1) {
    if (!(a[j >> 0] | 0)) {
     h = k;
     break h;
    }
    j = j + 1 | 0;
    k = j;
    if (!(k & 3)) {
     A = j;
     R = 137;
     break;
    }
   }
  } while (0);
  if ((R | 0) == 137) {
   h = A;
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  Ce(ga + 12456 | 0, 20782, 0, h - 20782 | 0);
  j = c[(ga + 12528 | 0) >> 2] | 0;
  k = m;
  l = (m | 0) == 0;
  if (l) h = 0; else h = c[k + 4 >> 2] | 0;
  Ce(ga + 12456 | 0, (j | 0) == 0 ? 36455 : j, 0, h);
  j = c[(ga + 12456 | 0) >> 2] | 0;
  i : do if (j | 0) {
   h = af(j, 20782) | 0;
   if (!h) break;
   while (1) {
    A = h + 1 | 0;
    a[A + (j - A + (c[((ga + 12456 | 0) + 8 | 0) >> 2] | 0)) >> 0] = 0;
    a[h >> 0] = 10;
    h = af(h, 20782) | 0;
    if (!h) break i;
    j = c[(ga + 12456 | 0) >> 2] | 0;
   }
  } while (0);
  De(ga + 12384 | 0, ga + 12456 | 0);
  if (!l) {
   A = c[k >> 2] | 0;
   c[k >> 2] = A - 1;
   if ((A | 0) == 1) {
    cf(m);
    c[(ga + 12528 | 0) >> 2] = 0;
   }
   c[(ga + 12528 | 0) >> 2] = 0;
  }
  h = c[(ga + 12384 | 0) >> 2] | 0;
  j = c[((ga + 12384 | 0) + 4 | 0) >> 2] | 0;
  c[(ga + 12528 | 0) >> 2] = j;
  c[(ga + 12384 | 0) >> 2] = 0;
  c[((ga + 12384 | 0) + 4 | 0) >> 2] = 0;
  k = c[(ga + 12456 | 0) >> 2] | 0;
  if (k | 0) cf(k);
  c[(ga + 12544 | 0) >> 2] = 20768;
  c[(ga + 12544 | 0) + 4 >> 2] = (j | 0) == 0 ? 36455 : j;
  ne(20421, ga + 12544 | 0);
  if (h | 0) {
   A = c[h >> 2] | 0;
   c[h >> 2] = A - 1;
   if ((A | 0) == 1) {
    cf(h);
    c[(ga + 12528 | 0) >> 2] = 0;
   }
   c[(ga + 12528 | 0) >> 2] = 0;
  }
 };
 a[36448] = 0;
 a[36449] = 0;
 a[36450] = 0;
 a[36451] = 0;
 a[36452] = 0;
 a[36453] = 0;
 a[36454] = 0;
 k = hb(7939) | 0;
 c[(ga + 12528 | 0) >> 2] = 0;
 c[(ga + 12528 | 0) + 4 >> 2] = 0;
 c[(ga + 12528 | 0) + 8 >> 2] = 0;
 j : do if (!k) {
  N = 1;
  O = 0;
  R = 177;
 } else {
  k : do if (!(k & 3)) {
   E = k;
   R = 165;
  } else {
   h = k;
   j = k;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     f = j;
     break k;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     E = h;
     R = 165;
     break;
    }
   }
  } while (0);
  if ((R | 0) == 165) {
   f = E;
   while (1) {
    h = c[f >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) f = f + 4 | 0; else break;
   }
   if ((h & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
  }
  Ce(ga + 12528 | 0, k, 0, f - k | 0);
  h = c[(ga + 12528 | 0) >> 2] | 0;
  if (!h) {
   N = (h | 0) == 0;
   O = h;
   R = 177;
  } else {
   f = af(h, 20121) | 0;
   if (!f) R = 173; else if ((f - h | 0) == -1) R = 173; else {
    H = (h | 0) == 0;
    I = h;
    J = 1;
    R = 179;
   }
   do if ((R | 0) == 173) {
    f = af(h, 20147) | 0;
    if (f | 0) if ((f - h | 0) != -1) {
     H = (h | 0) == 0;
     I = h;
     J = 1;
     R = 179;
     break;
    }
    e = af(h, 20172) | 0;
    if (!e) {
     a[36448] = 0;
     if (!h) {
      L = (h | 0) == 0;
      M = h;
      R = 196;
      break j;
     } else {
      e = h;
      break;
     }
    } else {
     a[36448] = (e - h | 0) != -1 & 1;
     e = h;
     break;
    }
   } while (0);
   if ((R | 0) == 179) {
    a[36448] = J;
    if (H) {
     L = H;
     M = I;
     R = 196;
     break;
    } else e = I;
   }
   f = af(e, 20198) | 0;
   do if (!f) R = 183; else {
    if ((f - e | 0) == -1) {
     R = 183;
     break;
    }
    a[36449] = 1;
   } while (0);
   do if ((R | 0) == 183) {
    f = af(e, 20225) | 0;
    if (!f) {
     a[36449] = 0;
     break;
    } else {
     a[36449] = (f - e | 0) != -1 & 1;
     break;
    }
   } while (0);
   f = af(e, 20251) | 0;
   do if (!f) R = 189; else {
    if ((f - e | 0) == -1) {
     R = 189;
     break;
    }
    a[36450] = 1;
   } while (0);
   do if ((R | 0) == 189) {
    f = af(e, 20275) | 0;
    if (!f) {
     a[36450] = 0;
     break;
    } else {
     a[36450] = (f - e | 0) != -1 & 1;
     break;
    }
   } while (0);
   f = af(e, 20299) | 0;
   a[36451] = (f - e | 0) != -1 & (f | 0) != 0 & 1;
   f = af(e, 20314) | 0;
   f = (f | 0) == 0 ? 0 : (f - e | 0) != -1;
   a[36453] = f & 1;
   h = af(e, 20332) | 0;
   a[36454] = (h - e | 0) != -1 & (h | 0) != 0 & 1;
   h = af(e, 20346) | 0;
   if (!h) {
    a[36452] = 0;
    if (f) {
     K = e;
     R = 197;
     break;
    }
   } else {
    a[36452] = (h - e | 0) != -1 & 1;
    if (f) {
     K = e;
     R = 197;
     break;
    }
   }
   oe(20366, ga + 12560 | 0);
   K = e;
   R = 197;
  }
 } while (0);
 if ((R | 0) == 177) {
  a[36448] = 0;
  L = N;
  M = O;
  R = 196;
 }
 if ((R | 0) == 196) {
  a[36449] = 0;
  a[36450] = 0;
  a[36451] = 0;
  a[36453] = 0;
  a[36454] = 0;
  a[36452] = 0;
  oe(20366, ga + 12568 | 0);
  if (!L) {
   K = M;
   R = 197;
  }
 }
 if ((R | 0) == 197) cf(K);
 f = c[8946] | 0;
 a[(f + 416 | 0) >> 0] = 1;
 c[f + 420 >> 2] = D + 416 | 0;
 c[f + 424 >> 2] = D + 160 | 0;
 c[f + 428 >> 2] = D + 1168 | 0;
 c[f + 432 >> 2] = D + 1440 | 0;
 c[f + 436 >> 2] = D + 1504 | 0;
 c[f + 440 >> 2] = D + 1568 | 0;
 c[f + 444 >> 2] = D + 1632 | 0;
 c[(f + 504 | 0) >> 2] = c[(ga + 12812 | 0) >> 2];
 c[(f + 504 | 0) + 4 >> 2] = c[(ga + 12812 | 0) + 4 >> 2];
 c[(f + 504 | 0) + 8 >> 2] = c[(ga + 12812 | 0) + 8 >> 2];
 c[(f + 504 | 0) + 12 >> 2] = c[(ga + 12812 | 0) + 12 >> 2];
 c[(f + 504 | 0) + 16 >> 2] = c[(ga + 12812 | 0) + 16 >> 2];
 c[(f + 504 | 0) + 20 >> 2] = c[(ga + 12812 | 0) + 20 >> 2];
 c[(f + 504 | 0) + 24 >> 2] = c[(ga + 12812 | 0) + 24 >> 2];
 if ((f + 532 | 0 | 0) != (Q | 0)) {
  e = c[(f + 532 | 0) >> 2] | 0;
  if (e | 0) {
   O = c[e >> 2] | 0;
   c[e >> 2] = O - 1;
   if ((O | 0) == 1) {
    cf(c[(f + 532 | 0) >> 2] | 0);
    c[(f + 532 | 0) >> 2] = 0;
    c[(f + 536 | 0) >> 2] = 0;
    e = f + 536 | 0;
   } else e = f + 536 | 0;
   c[(f + 532 | 0) >> 2] = 0;
   c[e >> 2] = 0;
  }
  e = c[Q >> 2] | 0;
  c[(f + 532 | 0) >> 2] = e;
  c[f + 536 >> 2] = c[F >> 2];
  if (e | 0) c[e >> 2] = (c[e >> 2] | 0) + 1;
 }
 q = f + 540 | 0;
 p = (ga + 12812 | 0) + 36 | 0;
 r = q + 80 | 0;
 do {
  c[q >> 2] = c[p >> 2];
  q = q + 4 | 0;
  p = p + 4 | 0;
 } while ((q | 0) < (r | 0));
 c[(f + 648 | 0) >> 2] = 1879076864;
 c[(f + 648 | 0) + 4 >> 2] = 16744327;
 db(2929);
 Za(519);
 Va(0);
 oc(2960);
 qa(519, 0, -1);
 Ca(7680, 7680, 7680);
 sc(-1);
 c[(f + 640 | 0) >> 2] = 2013282306;
 c[(f + 640 | 0) + 4 >> 2] = 192;
 oc(3042);
 yb(1, 0, 1, 0);
 tc(32774, 32774);
 mc(1, 1, 1, 1);
 g[f + 676 >> 2] = 1.0;
 g[f + 680 >> 2] = 1.0;
 g[f + 684 >> 2] = 1.0;
 g[f + 688 >> 2] = 1.0;
 qc(1.0, 1.0, 1.0, 1.0);
 b[f + 656 >> 1] = 296;
 oc(2884);
 Kb(2304);
 tb(1029);
 oc(32823);
 oc(3089);
 db(3024);
 Jd(f + 416 | 0);
 n = c[8946] | 0;
 c[n + 1284 >> 2] = D + 416 | 0;
 c[n + 1288 >> 2] = D + 160 | 0;
 c[n + 1292 >> 2] = D + 1168 | 0;
 c[n + 1296 >> 2] = D + 1440 | 0;
 c[n + 1300 >> 2] = D + 1504 | 0;
 c[n + 1304 >> 2] = D + 1568 | 0;
 c[n + 1308 >> 2] = D + 1632 | 0;
 m = c[((ga + 12812 | 0) + 88 | 0) >> 2] | 0;
 b[n + 1452 >> 1] = 1;
 e = (c[(n + 1468 | 0) >> 2] | 0) - (c[n + 1464 >> 2] | 0) + m | 0;
 if ((e | 0) > (c[(n + 1460 | 0) >> 2] | 0)) gd(n + 1456 | 0, e);
 c[(n + 1472 | 0) >> 2] = 0;
 c[(n + 1476 | 0) >> 2] = 0;
 e = (c[(n + 1492 | 0) >> 2] | 0) - (c[(n + 1488 | 0) >> 2] | 0) | 0;
 if ((c[(n + 1484 | 0) >> 2] | 0) < (e + m | 0 | 0)) {
  f = bf((e + m | 0) << 1) | 0;
  h = c[(n + 1480 | 0) >> 2] | 0;
  if ((e | 0) > 0) {
   j = f;
   k = 0;
   l = h + (c[(n + 1488 | 0) >> 2] << 1) | 0;
   while (1) {
    b[j >> 1] = b[l >> 1] | 0;
    k = k + 1 | 0;
    if ((k | 0) == (e | 0)) break; else {
     j = j + 2 | 0;
     l = l + 2 | 0;
    }
   }
  }
  if (h | 0) cf(h);
  c[(n + 1480 | 0) >> 2] = f;
  c[(n + 1484 | 0) >> 2] = e + m | 0;
  c[(n + 1488 | 0) >> 2] = 0;
  c[(n + 1492 | 0) >> 2] = e;
 }
 c[ga + 12944 >> 2] = d;
 c[ga + 14504 >> 2] = G;
 c[ga + 14536 >> 2] = S;
 c[ga + 14600 >> 2] = P;
 c[ga + 14624 >> 2] = U;
 c[ga + 14632 >> 2] = V;
 c[ga + 15040 >> 2] = F;
 c[ga + 15712 >> 2] = Y;
 c[ga + 15720 >> 2] = Z;
 c[ga + 16192 >> 2] = _;
 c[ga + 19704 >> 2] = Q;
 c[ga + 20888 >> 2] = n;
 c[ga + 20896 >> 2] = m;
 c[ga + 21912 >> 2] = q;
 c[ga + 21936 >> 2] = r;
 c[ga + 21944 >> 2] = R;
 c[ga + 21976 >> 2] = 0;
 c[ga + 21980 >> 2] = 0;
 _c(ga);
 O = c[ga + 14536 >> 2] | 0;
 P = c[ga + 14624 >> 2] | 0;
 Q = c[ga + 14632 >> 2] | 0;
 S = c[ga + 15712 >> 2] | 0;
 U = c[ga + 15720 >> 2] | 0;
 _ = c[ga + 16192 >> 2] | 0;
 Z = c[ga + 21912 >> 2] | 0;
 Y = c[ga + 21936 >> 2] | 0;
 V = c[ga + 21944 >> 2] | 0;
 c[ga + 14536 >> 2] = O;
 c[ga + 14624 >> 2] = P;
 c[ga + 14632 >> 2] = Q;
 c[ga + 15712 >> 2] = S;
 c[ga + 15720 >> 2] = U;
 c[ga + 16192 >> 2] = _;
 c[ga + 21944 >> 2] = V;
 c[ga + 21968 >> 2] = 0;
 c[ga + 21972 >> 2] = 0;
 Zc(ga);
 V = c[ga + 21944 >> 2] | 0;
 c[ga + 12944 >> 2] = d;
 c[ga + 14592 >> 2] = T;
 c[ga + 14704 >> 2] = W;
 c[ga + 14712 >> 2] = X;
 c[ga + 17672 >> 2] = $;
 c[ga + 17688 >> 2] = aa;
 c[ga + 17696 >> 2] = ba;
 c[ga + 17768 >> 2] = ca;
 c[ga + 18160 >> 2] = da;
 c[ga + 18168 >> 2] = ea;
 c[ga + 18176 >> 2] = fa;
 c[ga + 21912 >> 2] = Z;
 c[ga + 21928 >> 2] = p;
 c[ga + 21936 >> 2] = Y;
 c[ga + 21944 >> 2] = V;
 c[ga + 21960 >> 2] = 0;
 c[ga + 21964 >> 2] = 0;
 Yc(ga);
 V = c[ga + 14592 >> 2] | 0;
 Y = c[ga + 14704 >> 2] | 0;
 Z = c[ga + 14712 >> 2] | 0;
 $ = c[ga + 17672 >> 2] | 0;
 aa = c[ga + 17688 >> 2] | 0;
 ba = c[ga + 17696 >> 2] | 0;
 ca = c[ga + 17768 >> 2] | 0;
 da = c[ga + 18160 >> 2] | 0;
 ea = c[ga + 18168 >> 2] | 0;
 fa = c[ga + 18176 >> 2] | 0;
 _ = c[ga + 21944 >> 2] | 0;
 c[ga + 12944 >> 2] = d;
 c[ga + 14592 >> 2] = V;
 c[ga + 14704 >> 2] = Y;
 c[ga + 14712 >> 2] = Z;
 c[ga + 17672 >> 2] = $;
 c[ga + 17688 >> 2] = aa;
 c[ga + 17696 >> 2] = ba;
 c[ga + 17768 >> 2] = ca;
 c[ga + 18160 >> 2] = da;
 c[ga + 18168 >> 2] = ea;
 c[ga + 18176 >> 2] = fa;
 c[ga + 21944 >> 2] = _;
 c[ga + 21952 >> 2] = 0;
 c[ga + 21956 >> 2] = 0;
 Xc(ga);
 B = c[ga + 21952 >> 2] | 0;
 u = c[ga + 21956 >> 2] | 0;
 C = +g[ga + 21956 >> 2];
 c[ga + 21952 >> 2] = 0;
 c[ga + 21956 >> 2] = 0;
 if ((B | 0) == 6) return u | 0;
 return 0 | 0;
 return 0;
}

function yd(a, d, f) {
 a = a | 0;
 d = d | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 A = i;
 i = i + 48 | 0;
 z = A + 24 | 0;
 r = A + 16 | 0;
 q = A + 8 | 0;
 p = A + 44 | 0;
 m = A + 40 | 0;
 o = A + 36 | 0;
 g = A;
 h = A + 32 | 0;
 j = d + 24 | 0;
 be(a, j, f);
 if ((c[a + 4 >> 2] | 0) != -1) {
  i = A;
  return;
 }
 w = d + 344 | 0;
 t = c[w >> 2] | 0;
 c[w >> 2] = t + 1;
 w = d + 384 | 0;
 u = c[w >> 2] | 0;
 x = b[(c[d + 376 >> 2] | 0) + (u << 1) >> 1] | 0;
 c[w >> 2] = u + 1;
 w = Df(e[d + 348 >> 1] | 0 | 0, 0, 16) | 0;
 t = t | D;
 x = w | x & 65535;
 w = a;
 c[w >> 2] = x;
 c[w + 4 >> 2] = t;
 w = g;
 c[w >> 2] = x;
 c[w + 4 >> 2] = t;
 c[h >> 2] = c[(c[d >> 2] | 0) + ((c[d + 12 >> 2] | 0) + -1 << 2) >> 2];
 $d(j, f, g, h);
 w = d + 360 | 0;
 t = (c[w >> 2] | 0) + (e[a >> 1] | 0) | 0;
 x = d + 352 | 0;
 u = c[x >> 2] | 0;
 v = u + (t * 3712 | 0) | 0;
 c[u + (t * 3712 | 0) + 8 >> 2] = 1;
 y = d + 340 | 0;
 c[u + (t * 3712 | 0) + 12 >> 2] = c[y >> 2];
 if ((v | 0) != (a | 0)) {
  k = a;
  l = c[k + 4 >> 2] | 0;
  n = v;
  c[n >> 2] = c[k >> 2];
  c[n + 4 >> 2] = l;
 }
 g = u + (t * 3712 | 0) + 16 | 0;
 if ((g | 0) != (f | 0)) {
  c[g >> 2] = 0;
  Be(g, f);
 }
 c[u + (t * 3712 | 0) + 20 >> 2] = c[f + 4 >> 2];
 n = f + 8 | 0;
 h = c[n + 4 >> 2] | 0;
 j = u + (t * 3712 | 0) + 24 | 0;
 c[j >> 2] = c[n >> 2];
 c[j + 4 >> 2] = h;
 j = u + (t * 3712 | 0) + 32 | 0;
 h = f + 16 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 36 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 36 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 36 >> 2] = c[f + 20 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 40 | 0;
 h = f + 24 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 44 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 44 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 44 >> 2] = c[f + 28 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 48 | 0;
 h = f + 32 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 52 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 52 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 52 >> 2] = c[f + 36 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 56 | 0;
 h = f + 40 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 60 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 60 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 60 >> 2] = c[f + 44 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 64 | 0;
 h = f + 48 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 68 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 68 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 68 >> 2] = c[f + 52 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 72 | 0;
 h = f + 56 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 76 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 76 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 76 >> 2] = c[f + 60 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 80 | 0;
 h = f + 64 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 84 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 84 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 84 >> 2] = c[f + 68 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 88 | 0;
 h = f + 72 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 92 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 92 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 92 >> 2] = c[f + 76 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 96 | 0;
 h = f + 80 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 100 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 100 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 100 >> 2] = c[f + 84 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 104 | 0;
 h = f + 88 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 108 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 108 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 108 >> 2] = c[f + 92 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 112 | 0;
 h = f + 96 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 116 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 116 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 116 >> 2] = c[f + 100 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 120 | 0;
 h = f + 104 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 124 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 124 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 124 >> 2] = c[f + 108 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 128 | 0;
 h = f + 112 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 132 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 132 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 132 >> 2] = c[f + 116 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 136 | 0;
 h = f + 120 | 0;
 if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 140 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 140 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 140 >> 2] = c[f + 124 >> 2];
  if (g | 0) {
   n = g;
   c[n >> 2] = (c[n >> 2] | 0) + 1;
  }
 }
 j = u + (t * 3712 | 0) + 144 | 0;
 h = f + 128 | 0;
 do if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 148 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 148 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 148 >> 2] = c[f + 132 >> 2];
  if (!g) break;
  n = g;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
 } while (0);
 j = u + (t * 3712 | 0) + 152 | 0;
 h = f + 136 | 0;
 do if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 156 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 156 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 156 >> 2] = c[f + 140 >> 2];
  if (!g) break;
  n = g;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
 } while (0);
 j = u + (t * 3712 | 0) + 160 | 0;
 h = f + 144 | 0;
 do if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 164 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 164 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 164 >> 2] = c[f + 148 >> 2];
  if (!g) break;
  n = g;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
 } while (0);
 j = u + (t * 3712 | 0) + 168 | 0;
 h = f + 152 | 0;
 do if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 172 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 172 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 172 >> 2] = c[f + 156 >> 2];
  if (!g) break;
  n = g;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
 } while (0);
 j = u + (t * 3712 | 0) + 176 | 0;
 h = f + 160 | 0;
 do if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 180 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 180 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 180 >> 2] = c[f + 164 >> 2];
  if (!g) break;
  n = g;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
 } while (0);
 j = u + (t * 3712 | 0) + 184 | 0;
 h = f + 168 | 0;
 do if ((j | 0) != (h | 0)) {
  g = c[j >> 2] | 0;
  if (g | 0) {
   n = c[g >> 2] | 0;
   c[g >> 2] = n - 1;
   if ((n | 0) == 1) {
    cf(c[j >> 2] | 0);
    c[j >> 2] = 0;
    g = u + (t * 3712 | 0) + 188 | 0;
    c[g >> 2] = 0;
   } else g = u + (t * 3712 | 0) + 188 | 0;
   c[j >> 2] = 0;
   c[g >> 2] = 0;
  }
  g = c[h >> 2] | 0;
  c[j >> 2] = g;
  c[u + (t * 3712 | 0) + 188 >> 2] = c[f + 172 >> 2];
  if (!g) break;
  n = g;
  c[n >> 2] = (c[n >> 2] | 0) + 1;
 } while (0);
 k = f + 176 | 0;
 g = c[k + 4 >> 2] | 0;
 h = u + (t * 3712 | 0) + 192 | 0;
 c[h >> 2] = c[k >> 2];
 c[h + 4 >> 2] = g;
 h = f + 184 | 0;
 g = c[h + 4 >> 2] | 0;
 k = u + (t * 3712 | 0) + 200 | 0;
 c[k >> 2] = c[h >> 2];
 c[k + 4 >> 2] = g;
 k = f + 192 | 0;
 g = c[k + 4 >> 2] | 0;
 h = u + (t * 3712 | 0) + 208 | 0;
 c[h >> 2] = c[k >> 2];
 c[h + 4 >> 2] = g;
 h = f + 200 | 0;
 g = c[h + 4 >> 2] | 0;
 k = u + (t * 3712 | 0) + 216 | 0;
 c[k >> 2] = c[h >> 2];
 c[k + 4 >> 2] = g;
 k = f + 208 | 0;
 g = c[k + 4 >> 2] | 0;
 h = u + (t * 3712 | 0) + 224 | 0;
 c[h >> 2] = c[k >> 2];
 c[h + 4 >> 2] = g;
 h = f + 216 | 0;
 g = c[h + 4 >> 2] | 0;
 k = u + (t * 3712 | 0) + 232 | 0;
 c[k >> 2] = c[h >> 2];
 c[k + 4 >> 2] = g;
 k = f + 224 | 0;
 g = c[k + 4 >> 2] | 0;
 h = u + (t * 3712 | 0) + 240 | 0;
 c[h >> 2] = c[k >> 2];
 c[h + 4 >> 2] = g;
 h = f + 232 | 0;
 g = c[h + 4 >> 2] | 0;
 k = u + (t * 3712 | 0) + 248 | 0;
 c[k >> 2] = c[h >> 2];
 c[k + 4 >> 2] = g;
 k = f + 240 | 0;
 g = c[k + 4 >> 2] | 0;
 h = u + (t * 3712 | 0) + 256 | 0;
 c[h >> 2] = c[k >> 2];
 c[h + 4 >> 2] = g;
 h = f + 248 | 0;
 g = c[h + 4 >> 2] | 0;
 k = u + (t * 3712 | 0) + 264 | 0;
 c[k >> 2] = c[h >> 2];
 c[k + 4 >> 2] = g;
 nd(u + (t * 3712 | 0) + 272 | 0, f + 256 | 0);
 k = u + (t * 3712 | 0) + 340 | 0;
 c[k >> 2] = c[f + 324 >> 2];
 g = u + (t * 3712 | 0) + 344 | 0;
 h = f + 328 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 352 | 0;
  l = f + 336 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 352 | 0;
  n = f + 336 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 368 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 352 + (g * 12 | 0) | 0);
   j = f + 352 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 368 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 560 >> 2] = c[f + 544 >> 2];
 c[u + (t * 3712 | 0) + 564 >> 2] = c[f + 548 >> 2];
 c[u + (t * 3712 | 0) + 568 >> 2] = c[f + 552 >> 2];
 c[u + (t * 3712 | 0) + 572 >> 2] = c[f + 556 >> 2];
 c[u + (t * 3712 | 0) + 576 >> 2] = c[f + 560 >> 2];
 c[u + (t * 3712 | 0) + 580 >> 2] = c[f + 564 >> 2];
 c[u + (t * 3712 | 0) + 584 >> 2] = c[f + 568 >> 2];
 c[u + (t * 3712 | 0) + 588 >> 2] = c[f + 572 >> 2];
 c[u + (t * 3712 | 0) + 592 >> 2] = c[f + 576 >> 2];
 c[u + (t * 3712 | 0) + 596 >> 2] = c[f + 580 >> 2];
 c[u + (t * 3712 | 0) + 600 >> 2] = c[f + 584 >> 2];
 c[u + (t * 3712 | 0) + 604 >> 2] = c[f + 588 >> 2];
 c[u + (t * 3712 | 0) + 608 >> 2] = c[f + 592 >> 2];
 c[u + (t * 3712 | 0) + 612 >> 2] = c[f + 596 >> 2];
 c[u + (t * 3712 | 0) + 616 >> 2] = c[f + 600 >> 2];
 c[u + (t * 3712 | 0) + 620 >> 2] = c[f + 604 >> 2];
 n = f + 608 | 0;
 h = c[n + 4 >> 2] | 0;
 g = u + (t * 3712 | 0) + 624 | 0;
 c[g >> 2] = c[n >> 2];
 c[g + 4 >> 2] = h;
 g = u + (t * 3712 | 0) + 632 | 0;
 h = f + 616 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 640 | 0;
  l = f + 624 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 640 | 0;
  n = f + 624 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 656 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 640 + (g * 12 | 0) | 0);
   j = f + 640 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 656 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 848 >> 2] = c[f + 832 >> 2];
 c[u + (t * 3712 | 0) + 852 >> 2] = c[f + 836 >> 2];
 c[u + (t * 3712 | 0) + 856 >> 2] = c[f + 840 >> 2];
 c[u + (t * 3712 | 0) + 860 >> 2] = c[f + 844 >> 2];
 c[u + (t * 3712 | 0) + 864 >> 2] = c[f + 848 >> 2];
 c[u + (t * 3712 | 0) + 868 >> 2] = c[f + 852 >> 2];
 c[u + (t * 3712 | 0) + 872 >> 2] = c[f + 856 >> 2];
 c[u + (t * 3712 | 0) + 876 >> 2] = c[f + 860 >> 2];
 c[u + (t * 3712 | 0) + 880 >> 2] = c[f + 864 >> 2];
 c[u + (t * 3712 | 0) + 884 >> 2] = c[f + 868 >> 2];
 c[u + (t * 3712 | 0) + 888 >> 2] = c[f + 872 >> 2];
 c[u + (t * 3712 | 0) + 892 >> 2] = c[f + 876 >> 2];
 c[u + (t * 3712 | 0) + 896 >> 2] = c[f + 880 >> 2];
 c[u + (t * 3712 | 0) + 900 >> 2] = c[f + 884 >> 2];
 c[u + (t * 3712 | 0) + 904 >> 2] = c[f + 888 >> 2];
 c[u + (t * 3712 | 0) + 908 >> 2] = c[f + 892 >> 2];
 n = f + 896 | 0;
 h = c[n + 4 >> 2] | 0;
 g = u + (t * 3712 | 0) + 912 | 0;
 c[g >> 2] = c[n >> 2];
 c[g + 4 >> 2] = h;
 g = u + (t * 3712 | 0) + 920 | 0;
 h = f + 904 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 928 | 0;
  l = f + 912 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 928 | 0;
  n = f + 912 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 944 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 928 + (g * 12 | 0) | 0);
   j = f + 928 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 944 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 1136 >> 2] = c[f + 1120 >> 2];
 c[u + (t * 3712 | 0) + 1140 >> 2] = c[f + 1124 >> 2];
 c[u + (t * 3712 | 0) + 1144 >> 2] = c[f + 1128 >> 2];
 c[u + (t * 3712 | 0) + 1148 >> 2] = c[f + 1132 >> 2];
 c[u + (t * 3712 | 0) + 1152 >> 2] = c[f + 1136 >> 2];
 c[u + (t * 3712 | 0) + 1156 >> 2] = c[f + 1140 >> 2];
 c[u + (t * 3712 | 0) + 1160 >> 2] = c[f + 1144 >> 2];
 c[u + (t * 3712 | 0) + 1164 >> 2] = c[f + 1148 >> 2];
 c[u + (t * 3712 | 0) + 1168 >> 2] = c[f + 1152 >> 2];
 c[u + (t * 3712 | 0) + 1172 >> 2] = c[f + 1156 >> 2];
 c[u + (t * 3712 | 0) + 1176 >> 2] = c[f + 1160 >> 2];
 c[u + (t * 3712 | 0) + 1180 >> 2] = c[f + 1164 >> 2];
 c[u + (t * 3712 | 0) + 1184 >> 2] = c[f + 1168 >> 2];
 c[u + (t * 3712 | 0) + 1188 >> 2] = c[f + 1172 >> 2];
 c[u + (t * 3712 | 0) + 1192 >> 2] = c[f + 1176 >> 2];
 c[u + (t * 3712 | 0) + 1196 >> 2] = c[f + 1180 >> 2];
 n = f + 1184 | 0;
 h = c[n + 4 >> 2] | 0;
 g = u + (t * 3712 | 0) + 1200 | 0;
 c[g >> 2] = c[n >> 2];
 c[g + 4 >> 2] = h;
 g = u + (t * 3712 | 0) + 1208 | 0;
 h = f + 1192 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 1216 | 0;
  l = f + 1200 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 1216 | 0;
  n = f + 1200 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 1232 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 1216 + (g * 12 | 0) | 0);
   j = f + 1216 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 1232 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 1424 >> 2] = c[f + 1408 >> 2];
 c[u + (t * 3712 | 0) + 1428 >> 2] = c[f + 1412 >> 2];
 c[u + (t * 3712 | 0) + 1432 >> 2] = c[f + 1416 >> 2];
 c[u + (t * 3712 | 0) + 1436 >> 2] = c[f + 1420 >> 2];
 c[u + (t * 3712 | 0) + 1440 >> 2] = c[f + 1424 >> 2];
 c[u + (t * 3712 | 0) + 1444 >> 2] = c[f + 1428 >> 2];
 c[u + (t * 3712 | 0) + 1448 >> 2] = c[f + 1432 >> 2];
 c[u + (t * 3712 | 0) + 1452 >> 2] = c[f + 1436 >> 2];
 c[u + (t * 3712 | 0) + 1456 >> 2] = c[f + 1440 >> 2];
 c[u + (t * 3712 | 0) + 1460 >> 2] = c[f + 1444 >> 2];
 c[u + (t * 3712 | 0) + 1464 >> 2] = c[f + 1448 >> 2];
 c[u + (t * 3712 | 0) + 1468 >> 2] = c[f + 1452 >> 2];
 c[u + (t * 3712 | 0) + 1472 >> 2] = c[f + 1456 >> 2];
 c[u + (t * 3712 | 0) + 1476 >> 2] = c[f + 1460 >> 2];
 c[u + (t * 3712 | 0) + 1480 >> 2] = c[f + 1464 >> 2];
 c[u + (t * 3712 | 0) + 1484 >> 2] = c[f + 1468 >> 2];
 n = f + 1472 | 0;
 h = c[n + 4 >> 2] | 0;
 g = u + (t * 3712 | 0) + 1488 | 0;
 c[g >> 2] = c[n >> 2];
 c[g + 4 >> 2] = h;
 g = u + (t * 3712 | 0) + 1496 | 0;
 h = f + 1480 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 1504 | 0;
  l = f + 1488 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 1504 | 0;
  n = f + 1488 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 1520 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 1504 + (g * 12 | 0) | 0);
   j = f + 1504 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 1520 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 1712 >> 2] = c[f + 1696 >> 2];
 c[u + (t * 3712 | 0) + 1716 >> 2] = c[f + 1700 >> 2];
 c[u + (t * 3712 | 0) + 1720 >> 2] = c[f + 1704 >> 2];
 c[u + (t * 3712 | 0) + 1724 >> 2] = c[f + 1708 >> 2];
 c[u + (t * 3712 | 0) + 1728 >> 2] = c[f + 1712 >> 2];
 c[u + (t * 3712 | 0) + 1732 >> 2] = c[f + 1716 >> 2];
 c[u + (t * 3712 | 0) + 1736 >> 2] = c[f + 1720 >> 2];
 c[u + (t * 3712 | 0) + 1740 >> 2] = c[f + 1724 >> 2];
 c[u + (t * 3712 | 0) + 1744 >> 2] = c[f + 1728 >> 2];
 c[u + (t * 3712 | 0) + 1748 >> 2] = c[f + 1732 >> 2];
 c[u + (t * 3712 | 0) + 1752 >> 2] = c[f + 1736 >> 2];
 c[u + (t * 3712 | 0) + 1756 >> 2] = c[f + 1740 >> 2];
 c[u + (t * 3712 | 0) + 1760 >> 2] = c[f + 1744 >> 2];
 c[u + (t * 3712 | 0) + 1764 >> 2] = c[f + 1748 >> 2];
 c[u + (t * 3712 | 0) + 1768 >> 2] = c[f + 1752 >> 2];
 c[u + (t * 3712 | 0) + 1772 >> 2] = c[f + 1756 >> 2];
 n = f + 1760 | 0;
 h = c[n + 4 >> 2] | 0;
 g = u + (t * 3712 | 0) + 1776 | 0;
 c[g >> 2] = c[n >> 2];
 c[g + 4 >> 2] = h;
 g = u + (t * 3712 | 0) + 1784 | 0;
 h = f + 1768 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 1792 | 0;
  l = f + 1776 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 1792 | 0;
  n = f + 1776 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 1808 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 1792 + (g * 12 | 0) | 0);
   j = f + 1792 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 1808 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 2e3 >> 2] = c[f + 1984 >> 2];
 c[u + (t * 3712 | 0) + 2004 >> 2] = c[f + 1988 >> 2];
 c[u + (t * 3712 | 0) + 2008 >> 2] = c[f + 1992 >> 2];
 c[u + (t * 3712 | 0) + 2012 >> 2] = c[f + 1996 >> 2];
 c[u + (t * 3712 | 0) + 2016 >> 2] = c[f + 2e3 >> 2];
 c[u + (t * 3712 | 0) + 2020 >> 2] = c[f + 2004 >> 2];
 c[u + (t * 3712 | 0) + 2024 >> 2] = c[f + 2008 >> 2];
 c[u + (t * 3712 | 0) + 2028 >> 2] = c[f + 2012 >> 2];
 c[u + (t * 3712 | 0) + 2032 >> 2] = c[f + 2016 >> 2];
 c[u + (t * 3712 | 0) + 2036 >> 2] = c[f + 2020 >> 2];
 c[u + (t * 3712 | 0) + 2040 >> 2] = c[f + 2024 >> 2];
 c[u + (t * 3712 | 0) + 2044 >> 2] = c[f + 2028 >> 2];
 c[u + (t * 3712 | 0) + 2048 >> 2] = c[f + 2032 >> 2];
 c[u + (t * 3712 | 0) + 2052 >> 2] = c[f + 2036 >> 2];
 c[u + (t * 3712 | 0) + 2056 >> 2] = c[f + 2040 >> 2];
 c[u + (t * 3712 | 0) + 2060 >> 2] = c[f + 2044 >> 2];
 n = f + 2048 | 0;
 h = c[n + 4 >> 2] | 0;
 g = u + (t * 3712 | 0) + 2064 | 0;
 c[g >> 2] = c[n >> 2];
 c[g + 4 >> 2] = h;
 g = u + (t * 3712 | 0) + 2072 | 0;
 h = f + 2056 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 2080 | 0;
  l = f + 2064 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 2080 | 0;
  n = f + 2064 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 2096 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 2080 + (g * 12 | 0) | 0);
   j = f + 2080 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 2096 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 2288 >> 2] = c[f + 2272 >> 2];
 c[u + (t * 3712 | 0) + 2292 >> 2] = c[f + 2276 >> 2];
 c[u + (t * 3712 | 0) + 2296 >> 2] = c[f + 2280 >> 2];
 c[u + (t * 3712 | 0) + 2300 >> 2] = c[f + 2284 >> 2];
 c[u + (t * 3712 | 0) + 2304 >> 2] = c[f + 2288 >> 2];
 c[u + (t * 3712 | 0) + 2308 >> 2] = c[f + 2292 >> 2];
 c[u + (t * 3712 | 0) + 2312 >> 2] = c[f + 2296 >> 2];
 c[u + (t * 3712 | 0) + 2316 >> 2] = c[f + 2300 >> 2];
 c[u + (t * 3712 | 0) + 2320 >> 2] = c[f + 2304 >> 2];
 c[u + (t * 3712 | 0) + 2324 >> 2] = c[f + 2308 >> 2];
 c[u + (t * 3712 | 0) + 2328 >> 2] = c[f + 2312 >> 2];
 c[u + (t * 3712 | 0) + 2332 >> 2] = c[f + 2316 >> 2];
 c[u + (t * 3712 | 0) + 2336 >> 2] = c[f + 2320 >> 2];
 c[u + (t * 3712 | 0) + 2340 >> 2] = c[f + 2324 >> 2];
 c[u + (t * 3712 | 0) + 2344 >> 2] = c[f + 2328 >> 2];
 c[u + (t * 3712 | 0) + 2348 >> 2] = c[f + 2332 >> 2];
 n = f + 2336 | 0;
 h = c[n + 4 >> 2] | 0;
 g = u + (t * 3712 | 0) + 2352 | 0;
 c[g >> 2] = c[n >> 2];
 c[g + 4 >> 2] = h;
 g = u + (t * 3712 | 0) + 2360 | 0;
 h = f + 2344 | 0;
 if ((h | 0) == (g | 0)) {
  n = u + (t * 3712 | 0) + 2368 | 0;
  l = f + 2352 | 0;
  c[n >> 2] = c[l >> 2];
  c[n + 4 >> 2] = c[l + 4 >> 2];
  c[n + 8 >> 2] = c[l + 8 >> 2];
  c[n + 12 >> 2] = c[l + 12 >> 2];
 } else {
  c[g >> 2] = 0;
  Be(g, h);
  g = u + (t * 3712 | 0) + 2368 | 0;
  n = f + 2352 | 0;
  c[g >> 2] = c[n >> 2];
  c[g + 4 >> 2] = c[n + 4 >> 2];
  c[g + 8 >> 2] = c[n + 8 >> 2];
  c[g + 12 >> 2] = c[n + 12 >> 2];
  g = 0;
  do {
   j = u + (t * 3712 | 0) + 2384 + (g * 12 | 0) | 0;
   c[j >> 2] = 0;
   Be(j, f + 2368 + (g * 12 | 0) | 0);
   j = f + 2368 + (g * 12 | 0) + 4 | 0;
   l = c[j + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 2384 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = l;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
 }
 c[u + (t * 3712 | 0) + 2576 >> 2] = c[f + 2560 >> 2];
 c[u + (t * 3712 | 0) + 2580 >> 2] = c[f + 2564 >> 2];
 c[u + (t * 3712 | 0) + 2584 >> 2] = c[f + 2568 >> 2];
 c[u + (t * 3712 | 0) + 2588 >> 2] = c[f + 2572 >> 2];
 c[u + (t * 3712 | 0) + 2592 >> 2] = c[f + 2576 >> 2];
 c[u + (t * 3712 | 0) + 2596 >> 2] = c[f + 2580 >> 2];
 c[u + (t * 3712 | 0) + 2600 >> 2] = c[f + 2584 >> 2];
 c[u + (t * 3712 | 0) + 2604 >> 2] = c[f + 2588 >> 2];
 c[u + (t * 3712 | 0) + 2608 >> 2] = c[f + 2592 >> 2];
 c[u + (t * 3712 | 0) + 2612 >> 2] = c[f + 2596 >> 2];
 c[u + (t * 3712 | 0) + 2616 >> 2] = c[f + 2600 >> 2];
 c[u + (t * 3712 | 0) + 2620 >> 2] = c[f + 2604 >> 2];
 c[u + (t * 3712 | 0) + 2624 >> 2] = c[f + 2608 >> 2];
 c[u + (t * 3712 | 0) + 2628 >> 2] = c[f + 2612 >> 2];
 c[u + (t * 3712 | 0) + 2632 >> 2] = c[f + 2616 >> 2];
 c[u + (t * 3712 | 0) + 2636 >> 2] = c[f + 2620 >> 2];
 h = f + 2624 | 0;
 g = c[h + 4 >> 2] | 0;
 l = u + (t * 3712 | 0) + 2640 | 0;
 c[l >> 2] = c[h >> 2];
 c[l + 4 >> 2] = g;
 l = u + (t * 3712 | 0) + 2648 | 0;
 c[l >> 2] = c[f + 2632 >> 2];
 g = u + (t * 3712 | 0) + 2652 | 0;
 h = f + 2636 | 0;
 if ((h | 0) != (g | 0)) {
  c[g >> 2] = 0;
  Be(g, h);
  c[u + (t * 3712 | 0) + 2656 >> 2] = c[f + 2640 >> 2];
  g = 0;
  do {
   h = u + (t * 3712 | 0) + 2660 + (g * 12 | 0) | 0;
   c[h >> 2] = 0;
   Be(h, f + 2644 + (g * 12 | 0) | 0);
   h = f + 2644 + (g * 12 | 0) + 4 | 0;
   j = c[h + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 2660 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[h >> 2];
   c[n + 4 >> 2] = j;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
  c[u + (t * 3712 | 0) + 2852 >> 2] = c[f + 2836 >> 2];
  g = u + (t * 3712 | 0) + 2856 | 0;
  c[g >> 2] = 0;
  Be(g, f + 2840 | 0);
  c[u + (t * 3712 | 0) + 2860 >> 2] = c[f + 2844 >> 2];
  g = 0;
  do {
   h = u + (t * 3712 | 0) + 2864 + (g * 12 | 0) | 0;
   c[h >> 2] = 0;
   Be(h, f + 2848 + (g * 12 | 0) | 0);
   h = f + 2848 + (g * 12 | 0) + 4 | 0;
   j = c[h + 4 >> 2] | 0;
   n = u + (t * 3712 | 0) + 2864 + (g * 12 | 0) + 4 | 0;
   c[n >> 2] = c[h >> 2];
   c[n + 4 >> 2] = j;
   g = g + 1 | 0;
  } while ((g | 0) != 16);
  c[u + (t * 3712 | 0) + 3056 >> 2] = c[f + 3040 >> 2];
 }
 n = d + 176 | 0;
 h = c[n >> 2] | 0;
 na(0);
 c[h + 300 >> 2] = 0;
 h = c[u + (t * 3712 | 0) + 36 >> 2] | 0;
 g = c[u + (t * 3712 | 0) + 32 >> 2] | 0;
 if (!g) g = 0; else g = c[g + 4 >> 2] | 0;
 c[p >> 2] = (h | 0) == 0 ? 36455 : h;
 c[m >> 2] = g;
 g = Fb(35633) | 0;
 Ja(g | 0, 1, p | 0, m | 0);
 Lb(g | 0);
 c[o >> 2] = 0;
 _b(g | 0, 35713, o | 0);
 if (!(c[o >> 2] | 0)) {
  Rb(g | 0);
  g = 0;
 }
 j = c[u + (t * 3712 | 0) + 76 >> 2] | 0;
 h = c[u + (t * 3712 | 0) + 72 >> 2] | 0;
 if (!h) h = 0; else h = c[h + 4 >> 2] | 0;
 c[p >> 2] = (j | 0) == 0 ? 36455 : j;
 c[m >> 2] = h;
 h = Fb(35632) | 0;
 Ja(h | 0, 1, p | 0, m | 0);
 Lb(h | 0);
 c[o >> 2] = 0;
 _b(h | 0, 35713, o | 0);
 if (!(c[o >> 2] | 0)) {
  Rb(h | 0);
  h = 0;
 }
 m = wa() | 0;
 mb(m | 0, g | 0);
 mb(m | 0, h | 0);
 f = 0;
 a : while (1) {
  do switch (f | 0) {
  case 15:
   break a;
  case 0:
   {
    j = 19354;
    break;
   }
  case 1:
   {
    j = 19363;
    break;
   }
  case 2:
   {
    j = 19370;
    break;
   }
  case 3:
   {
    j = 19380;
    break;
   }
  case 4:
   {
    j = 19390;
    break;
   }
  case 5:
   {
    j = 19400;
    break;
   }
  case 6:
   {
    j = 19410;
    break;
   }
  case 7:
   {
    j = 19418;
    break;
   }
  case 8:
   {
    j = 19427;
    break;
   }
  case 9:
   {
    j = 19435;
    break;
   }
  case 10:
   {
    j = 19443;
    break;
   }
  case 11:
   {
    j = 19450;
    break;
   }
  case 12:
   {
    j = 19457;
    break;
   }
  case 13:
   {
    j = 19467;
    break;
   }
  case 14:
   {
    j = 19477;
    break;
   }
  default:
   {
    s = 229;
    break a;
   }
  } while (0);
  ec(m | 0, f | 0, j | 0);
  f = f + 1 | 0;
 }
 if ((s | 0) == 229) {
  pe(19314, q);
  eb();
 }
 ec(m | 0, 15, 19304);
 Zb(m | 0);
 Rb(g | 0);
 Rb(h | 0);
 Sb(m | 0, 35714, p | 0);
 if (!(c[p >> 2] | 0)) {
  j = c[u + (t * 3712 | 0) + 16 >> 2] | 0;
  c[r >> 2] = c[((j | 0) == 0 ? 1612 : j + 12 | 0) >> 2];
  oe(19487, r);
  j = 4;
 } else {
  c[u + (t * 3712 | 0) + 3064 >> 2] = m;
  g = (c[n >> 2] | 0) + 300 | 0;
  if ((c[g >> 2] | 0) != (m | 0)) {
   c[g >> 2] = m;
   na(m | 0);
  }
  g = c[k >> 2] | 0;
  if ((g | 0) > 0) {
   k = 0;
   do {
    h = c[u + (t * 3712 | 0) + 344 + (k * 288 | 0) + 16 >> 2] | 0;
    if ((h | 0) > 0) {
     j = c[u + (t * 3712 | 0) + 344 + (k * 288 | 0) + 284 >> 2] << 4;
     f = c[u + (t * 3712 | 0) + 344 + (k * 288 | 0) + 280 >> 2] << 6;
     d = 0;
     do {
      s = c[u + (t * 3712 | 0) + 344 + (k * 288 | 0) + 24 + (d * 12 | 0) >> 2] | 0;
      c[v + 3068 + (f + d + j << 2) >> 2] = $b(m | 0, c[((s | 0) == 0 ? 1612 : s + 12 | 0) >> 2] | 0) | 0;
      d = d + 1 | 0;
     } while ((d | 0) != (h | 0));
    }
    k = k + 1 | 0;
   } while ((k | 0) != (g | 0));
  }
  d = c[l >> 2] | 0;
  if ((d | 0) > 0) {
   g = 0;
   l = 0;
   do {
    h = c[u + (t * 3712 | 0) + 2652 + (l * 204 | 0) + 4 >> 2] | 0;
    if ((h | 0) > 0) {
     j = c[u + (t * 3712 | 0) + 2652 + (l * 204 | 0) + 200 >> 2] << 4;
     f = g;
     k = 0;
     while (1) {
      s = c[u + (t * 3712 | 0) + 2652 + (l * 204 | 0) + 8 + (k * 12 | 0) >> 2] | 0;
      s = $b(m | 0, c[((s | 0) == 0 ? 1612 : s + 12 | 0) >> 2] | 0) | 0;
      c[v + 3580 + (j + k << 2) >> 2] = f;
      Db(s | 0, f | 0);
      k = k + 1 | 0;
      if ((k | 0) == (h | 0)) break; else f = f + 1 | 0;
     }
     g = g + h | 0;
    }
    l = l + 1 | 0;
   } while ((l | 0) != (d | 0));
  }
  j = c[n >> 2] | 0;
  na(0);
  c[j + 300 >> 2] = 0;
  j = 3;
 }
 f = c[a >> 2] | 0;
 k = f & 65535;
 h = (c[w >> 2] | 0) + k | 0;
 g = c[x >> 2] | 0;
 x = a;
 a = g + (h * 3712 | 0) | 0;
 if ((c[x >> 2] | 0) == (c[a >> 2] | 0) ? (c[x + 4 >> 2] | 0) == (c[a + 4 >> 2] | 0) : 0) {
  c[g + (h * 3712 | 0) + 8 >> 2] = j;
  c[g + (h * 3712 | 0) + 12 >> 2] = c[y >> 2];
  i = A;
  return;
 } else {
  c[z >> 2] = f >>> 16;
  c[z + 4 >> 2] = k;
  oe(19098, z);
  i = A;
  return;
 }
}

function bf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 q = D;
 do if (a >>> 0 < 245) {
  p = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = p >>> 3;
  k = c[8987] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 35988 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[8987] = k & ~(1 << b); else {
    if (h >>> 0 < (c[8991] | 0) >>> 0) Nb();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else Nb();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[8989] | 0;
  if (p >>> 0 > h >>> 0) {
   if (b | 0) {
    d = 2 << a;
    d = b << a & (d | 0 - d);
    d = (d & 0 - d) + -1 | 0;
    j = d >>> 12 & 16;
    d = d >>> j;
    f = d >>> 5 & 8;
    d = d >>> f;
    g = d >>> 2 & 4;
    d = d >>> g;
    e = d >>> 1 & 2;
    d = d >>> e;
    b = d >>> 1 & 1;
    b = (f | j | g | e | b) + (d >>> b) | 0;
    d = 35988 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[8987] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[8991] | 0) >>> 0) Nb();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[8989] | 0;
      break;
     } else Nb();
    } while (0);
    h = (b << 3) - p | 0;
    c[g + 4 >> 2] = p | 3;
    e = g + p | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[8992] | 0;
     b = l >>> 3;
     d = 35988 + (b << 1 << 2) | 0;
     a = c[8987] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[8987] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[8989] = h;
    c[8992] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[8988] | 0;
   if (a) {
    j = (a & 0 - a) + -1 | 0;
    B = j >>> 12 & 16;
    j = j >>> B;
    A = j >>> 5 & 8;
    j = j >>> A;
    C = j >>> 2 & 4;
    j = j >>> C;
    b = j >>> 1 & 2;
    j = j >>> b;
    k = j >>> 1 & 1;
    k = c[36252 + ((A | B | C | b | k) + (j >>> k) << 2) >> 2] | 0;
    j = (c[k + 4 >> 2] & -8) - p | 0;
    b = k;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) break;
     }
     b = (c[a + 4 >> 2] & -8) - p | 0;
     C = b >>> 0 < j >>> 0;
     j = C ? b : j;
     b = a;
     k = C ? a : k;
    }
    f = c[8991] | 0;
    if (k >>> 0 < f >>> 0) Nb();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) Nb();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       o = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) Nb(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Nb();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Nb();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      o = d;
      break;
     } else Nb();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 36252 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[8988] = c[8988] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[8991] | 0) >>> 0) Nb();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[8991] | 0;
     if (o >>> 0 < b >>> 0) Nb();
     c[o + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Nb(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
      c[o + 20 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     }
    } while (0);
    if (j >>> 0 < 16) {
     C = j + p | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = p | 3;
     c[h + 4 >> 2] = j | 1;
     c[h + j >> 2] = j;
     a = c[8989] | 0;
     if (a | 0) {
      e = c[8992] | 0;
      b = a >>> 3;
      d = 35988 + (b << 1 << 2) | 0;
      a = c[8987] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[8987] = a | b;
       r = d + 8 | 0;
       s = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = e;
      c[s + 12 >> 2] = e;
      c[e + 8 >> 2] = s;
      c[e + 12 >> 2] = d;
     }
     c[8989] = j;
     c[8992] = h;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) p = -1; else {
  a = a + 11 | 0;
  p = a & -8;
  k = c[8988] | 0;
  if (k) {
   d = 0 - p | 0;
   a = a >>> 8;
   if (!a) j = 0; else if (p >>> 0 > 16777215) j = 31; else {
    s = (a + 1048320 | 0) >>> 16 & 8;
    w = a << s;
    r = (w + 520192 | 0) >>> 16 & 4;
    w = w << r;
    j = (w + 245760 | 0) >>> 16 & 2;
    j = 14 - (r | s | j) + (w << j >>> 15) | 0;
    j = p >>> (j + 7 | 0) & 1 | j << 1;
   }
   b = c[36252 + (j << 2) >> 2] | 0;
   a : do if (!b) {
    a = 0;
    b = 0;
    w = 86;
   } else {
    f = d;
    a = 0;
    g = p << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
    h = b;
    b = 0;
    while (1) {
     e = c[h + 4 >> 2] & -8;
     d = e - p | 0;
     if (d >>> 0 < f >>> 0) if ((e | 0) == (p | 0)) {
      a = h;
      b = h;
      w = 90;
      break a;
     } else b = h; else d = f;
     e = c[h + 20 >> 2] | 0;
     h = c[h + 16 + (g >>> 31 << 2) >> 2] | 0;
     a = (e | 0) == 0 | (e | 0) == (h | 0) ? a : e;
     e = (h | 0) == 0;
     if (e) {
      w = 86;
      break;
     } else {
      f = d;
      g = g << (e & 1 ^ 1);
     }
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << j;
     a = k & (a | 0 - a);
     if (!a) break;
     s = (a & 0 - a) + -1 | 0;
     n = s >>> 12 & 16;
     s = s >>> n;
     m = s >>> 5 & 8;
     s = s >>> m;
     o = s >>> 2 & 4;
     s = s >>> o;
     r = s >>> 1 & 2;
     s = s >>> r;
     a = s >>> 1 & 1;
     a = c[36252 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
    }
    if (!a) {
     j = d;
     k = b;
    } else w = 90;
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    s = (c[a + 4 >> 2] & -8) - p | 0;
    e = s >>> 0 < d >>> 0;
    d = e ? s : d;
    b = e ? a : b;
    e = c[a + 16 >> 2] | 0;
    if (e | 0) {
     a = e;
     w = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     j = d;
     k = b;
     break;
    } else w = 90;
   }
   if (k) if (j >>> 0 < ((c[8989] | 0) - p | 0) >>> 0) {
    f = c[8991] | 0;
    if (k >>> 0 < f >>> 0) Nb();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) Nb();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       t = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) Nb(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Nb();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Nb();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else Nb();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 36252 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[8988] = c[8988] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[8991] | 0) >>> 0) Nb();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[8991] | 0;
     if (t >>> 0 < b >>> 0) Nb();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Nb(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
      c[t + 20 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     }
    } while (0);
    do if (j >>> 0 < 16) {
     C = j + p | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = p | 3;
     c[h + 4 >> 2] = j | 1;
     c[h + j >> 2] = j;
     a = j >>> 3;
     if (j >>> 0 < 256) {
      d = 35988 + (a << 1 << 2) | 0;
      b = c[8987] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[8987] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
        u = a;
        v = b;
       }
      }
      c[u >> 2] = h;
      c[v + 12 >> 2] = h;
      c[h + 8 >> 2] = v;
      c[h + 12 >> 2] = d;
      break;
     }
     a = j >>> 8;
     if (!a) d = 0; else if (j >>> 0 > 16777215) d = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = j >>> (d + 7 | 0) & 1 | d << 1;
     }
     e = 36252 + (d << 2) | 0;
     c[h + 28 >> 2] = d;
     a = h + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[8988] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[8988] = a | b;
      c[e >> 2] = h;
      c[h + 24 >> 2] = e;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     }
     d = j << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     e = c[e >> 2] | 0;
     while (1) {
      if ((c[e + 4 >> 2] & -8 | 0) == (j | 0)) {
       w = 148;
       break;
      }
      b = e + 16 + (d >>> 31 << 2) | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       w = 145;
       break;
      } else {
       d = d << 1;
       e = a;
      }
     }
     if ((w | 0) == 145) if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
      c[b >> 2] = h;
      c[h + 24 >> 2] = e;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     } else if ((w | 0) == 148) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[8991] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = h;
       c[a >> 2] = h;
       c[h + 8 >> 2] = b;
       c[h + 12 >> 2] = e;
       c[h + 24 >> 2] = 0;
       break;
      } else Nb();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[8989] | 0;
 if (d >>> 0 >= p >>> 0) {
  a = d - p | 0;
  b = c[8992] | 0;
  if (a >>> 0 > 15) {
   C = b + p | 0;
   c[8992] = C;
   c[8989] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = p | 3;
  } else {
   c[8989] = 0;
   c[8992] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[8990] | 0;
 if (a >>> 0 > p >>> 0) {
  A = a - p | 0;
  c[8990] = A;
  C = c[8993] | 0;
  B = C + p | 0;
  c[8993] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = p | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[9105] | 0)) {
  c[9107] = 4096;
  c[9106] = 4096;
  c[9108] = -1;
  c[9109] = -1;
  c[9110] = 0;
  c[9098] = 0;
  v = q & -16 ^ 1431655768;
  c[q >> 2] = v;
  c[9105] = v;
 }
 h = p + 48 | 0;
 e = c[9107] | 0;
 j = p + 47 | 0;
 d = e + j | 0;
 e = 0 - e | 0;
 k = d & e;
 if (k >>> 0 <= p >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[9097] | 0;
 if (a | 0) {
  u = c[9095] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[9098] & 4)) {
  b = c[8993] | 0;
  c : do if (!b) w = 171; else {
   g = 36396;
   while (1) {
    a = c[g >> 2] | 0;
    if (a >>> 0 <= b >>> 0) {
     f = g + 4 | 0;
     if ((a + (c[f >> 2] | 0) | 0) >>> 0 > b >>> 0) break;
    }
    a = c[g + 8 >> 2] | 0;
    if (!a) {
     w = 171;
     break c;
    } else g = a;
   }
   a = d - (c[8990] | 0) & e;
   if (a >>> 0 < 2147483647) {
    b = za(a | 0) | 0;
    if ((b | 0) == ((c[g >> 2] | 0) + (c[f >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      h = b;
      g = a;
      w = 191;
      break b;
     }
    } else {
     e = b;
     w = 181;
    }
   }
  } while (0);
  do if ((w | 0) == 171) {
   f = za(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[9106] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[9095] | 0;
    d = b + a | 0;
    if (a >>> 0 > p >>> 0 & a >>> 0 < 2147483647) {
     e = c[9097] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = za(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = f;
      g = a;
      w = 191;
      break b;
     } else {
      e = b;
      w = 181;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 181) {
   d = 0 - a | 0;
   do if (h >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[9107] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((za(b | 0) | 0) == (-1 | 0)) {
     za(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    h = e;
    g = a;
    w = 191;
    break b;
   }
  } while (0);
  c[9098] = c[9098] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = za(k | 0) | 0;
  a = za(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (p + 40 | 0) >>> 0) {
    h = b;
    g = a;
    w = 191;
   }
  }
 }
 if ((w | 0) == 191) {
  a = (c[9095] | 0) + g | 0;
  c[9095] = a;
  if (a >>> 0 > (c[9096] | 0) >>> 0) c[9096] = a;
  l = c[8993] | 0;
  do if (!l) {
   C = c[8991] | 0;
   if ((C | 0) == 0 | h >>> 0 < C >>> 0) c[8991] = h;
   c[9099] = h;
   c[9100] = g;
   c[9102] = 0;
   c[8996] = c[9105];
   c[8995] = -1;
   a = 0;
   do {
    C = 35988 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = h + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = h + C | 0;
   C = g + -40 - C | 0;
   c[8993] = B;
   c[8990] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[8994] = c[9109];
  } else {
   a = 36396;
   do {
    b = c[a >> 2] | 0;
    d = a + 4 | 0;
    e = c[d >> 2] | 0;
    if ((h | 0) == (b + e | 0)) {
     w = 201;
     break;
    }
    a = c[a + 8 >> 2] | 0;
   } while ((a | 0) != 0);
   if ((w | 0) == 201) if (!(c[a + 12 >> 2] & 8)) if (l >>> 0 < h >>> 0 & l >>> 0 >= b >>> 0) {
    c[d >> 2] = e + g;
    C = l + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = l + C | 0;
    C = g - C + (c[8990] | 0) | 0;
    c[8993] = B;
    c[8990] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[8994] = c[9109];
    break;
   }
   a = c[8991] | 0;
   if (h >>> 0 < a >>> 0) {
    c[8991] = h;
    j = h;
   } else j = a;
   b = h + g | 0;
   a = 36396;
   while (1) {
    if ((c[a >> 2] | 0) == (b | 0)) {
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 36396;
     break;
    }
   }
   if ((w | 0) == 209) if (!(c[a + 12 >> 2] & 8)) {
    c[a >> 2] = h;
    n = a + 4 | 0;
    c[n >> 2] = (c[n >> 2] | 0) + g;
    n = h + 8 | 0;
    n = h + ((n & 7 | 0) == 0 ? 0 : 0 - n & 7) | 0;
    a = b + 8 | 0;
    a = b + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    m = n + p | 0;
    k = a - n - p | 0;
    c[n + 4 >> 2] = p | 3;
    do if ((a | 0) == (l | 0)) {
     C = (c[8990] | 0) + k | 0;
     c[8990] = C;
     c[8993] = m;
     c[m + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[8992] | 0)) {
      C = (c[8989] | 0) + k | 0;
      c[8989] = C;
      c[8992] = m;
      c[m + 4 >> 2] = C | 1;
      c[m + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      h = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 35988 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) Nb();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        Nb();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[8987] = c[8987] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) Nb();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        Nb();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       g = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        e = a + 16 | 0;
        d = e + 4 | 0;
        b = c[d >> 2] | 0;
        if (!b) {
         b = c[e >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         } else d = e;
        }
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < j >>> 0) Nb(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) Nb();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) Nb();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else Nb();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       d = 36252 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[8988] = c[8988] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[8991] | 0) >>> 0) Nb();
        b = g + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[g + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[8991] | 0;
       if (A >>> 0 < e >>> 0) Nb();
       c[A + 24 >> 2] = g;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) Nb(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + h | 0;
      f = h + k | 0;
     } else f = k;
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[m + 4 >> 2] = f | 1;
     c[m + f >> 2] = f;
     a = f >>> 3;
     if (f >>> 0 < 256) {
      d = 35988 + (a << 1 << 2) | 0;
      b = c[8987] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[8987] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[8991] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       Nb();
      } while (0);
      c[B >> 2] = m;
      c[C + 12 >> 2] = m;
      c[m + 8 >> 2] = C;
      c[m + 12 >> 2] = d;
      break;
     }
     a = f >>> 8;
     do if (!a) d = 0; else {
      if (f >>> 0 > 16777215) {
       d = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = f >>> (d + 7 | 0) & 1 | d << 1;
     } while (0);
     e = 36252 + (d << 2) | 0;
     c[m + 28 >> 2] = d;
     a = m + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[8988] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[8988] = a | b;
      c[e >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     }
     d = f << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     e = c[e >> 2] | 0;
     while (1) {
      if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
       w = 279;
       break;
      }
      b = e + 16 + (d >>> 31 << 2) | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       w = 276;
       break;
      } else {
       d = d << 1;
       e = a;
      }
     }
     if ((w | 0) == 276) if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
      c[b >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((w | 0) == 279) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[8991] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = m;
       c[a >> 2] = m;
       c[m + 8 >> 2] = b;
       c[m + 12 >> 2] = e;
       c[m + 24 >> 2] = 0;
       break;
      } else Nb();
     }
    } while (0);
    C = n + 8 | 0;
    i = D;
    return C | 0;
   } else b = 36396;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= l >>> 0) {
     d = a + (c[b + 4 >> 2] | 0) | 0;
     if (d >>> 0 > l >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   f = d + -47 | 0;
   b = f + 8 | 0;
   b = f + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7) | 0;
   f = l + 16 | 0;
   b = b >>> 0 < f >>> 0 ? l : b;
   a = b + 8 | 0;
   e = h + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = h + e | 0;
   e = g + -40 - e | 0;
   c[8993] = C;
   c[8990] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[8994] = c[9109];
   e = b + 4 | 0;
   c[e >> 2] = 27;
   c[a >> 2] = c[9099];
   c[a + 4 >> 2] = c[9100];
   c[a + 8 >> 2] = c[9101];
   c[a + 12 >> 2] = c[9102];
   c[9099] = h;
   c[9100] = g;
   c[9102] = 0;
   c[9101] = a;
   a = b + 24 | 0;
   do {
    a = a + 4 | 0;
    c[a >> 2] = 7;
   } while ((a + 4 | 0) >>> 0 < d >>> 0);
   if ((b | 0) != (l | 0)) {
    g = b - l | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[l + 4 >> 2] = g | 1;
    c[b >> 2] = g;
    a = g >>> 3;
    if (g >>> 0 < 256) {
     d = 35988 + (a << 1 << 2) | 0;
     b = c[8987] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[8987] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
       y = a;
       z = b;
      }
     }
     c[y >> 2] = l;
     c[z + 12 >> 2] = l;
     c[l + 8 >> 2] = z;
     c[l + 12 >> 2] = d;
     break;
    }
    a = g >>> 8;
    if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = g >>> (d + 7 | 0) & 1 | d << 1;
    }
    e = 36252 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[f >> 2] = 0;
    a = c[8988] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[8988] = a | b;
     c[e >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    }
    d = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    e = c[e >> 2] | 0;
    while (1) {
     if ((c[e + 4 >> 2] & -8 | 0) == (g | 0)) {
      w = 305;
      break;
     }
     b = e + 16 + (d >>> 31 << 2) | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      w = 302;
      break;
     } else {
      d = d << 1;
      e = a;
     }
    }
    if ((w | 0) == 302) if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
     c[b >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((w | 0) == 305) {
     a = e + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[8991] | 0;
     if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = l;
      c[a >> 2] = l;
      c[l + 8 >> 2] = b;
      c[l + 12 >> 2] = e;
      c[l + 24 >> 2] = 0;
      break;
     } else Nb();
    }
   }
  } while (0);
  a = c[8990] | 0;
  if (a >>> 0 > p >>> 0) {
   A = a - p | 0;
   c[8990] = A;
   C = c[8993] | 0;
   B = C + p | 0;
   c[8993] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = p | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 if (!(c[8975] | 0)) a = 35944; else a = c[(Ef() | 0) + 64 >> 2] | 0;
 c[a >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}
function Ud(e, f) {
 e = e | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 p = i;
 i = i + 7088 | 0;
 if ((c[(f + 76 | 0) >> 2] | 0) > 0) Sd(f);
 nd(f + 196 | 0, f);
 m = c[(f + 160 | 0) >> 2] | 0;
 if (!m) {
  j = 0;
  h = 0;
 } else {
  h = c[f + 168 >> 2] | 0;
  l = c[f + 172 >> 2] | 0;
  if ((h | 0) == (l | 0)) {
   j = 0;
   h = 0;
  } else {
   k = m + (h * 112 | 0) | 0;
   j = 0;
   h = 0;
   do {
    h = (c[k + 104 >> 2] | 0) + h | 0;
    j = ((c[k + 108 >> 2] | 0) * 3 | 0) + j | 0;
    k = k + 112 | 0;
   } while ((k | 0) != (m + (l * 112 | 0) | 0 | 0));
  }
 }
 c[(f + 184 | 0) >> 2] = h;
 c[(f + 192 | 0) >> 2] = 1;
 c[(f + 188 | 0) >> 2] = j;
 a[(f + 504 | 0) >> 0] = 1;
 h = c[f + 288 >> 2] | 0;
 j = c[f + 292 >> 2] | 0;
 c[p >> 2] = -1;
 c[(p + 4 | 0) >> 2] = -1;
 a[p + 10 >> 0] = 17;
 a[p + 11 >> 0] = 13;
 a[p + 12 >> 0] = 17;
 a[p + 13 >> 0] = 13;
 a[p + 14 >> 0] = 17;
 a[p + 15 >> 0] = 13;
 a[p + 16 >> 0] = 17;
 a[p + 17 >> 0] = 13;
 a[p + 18 >> 0] = 17;
 a[p + 19 >> 0] = 13;
 a[p + 20 >> 0] = 17;
 a[p + 21 >> 0] = 13;
 a[p + 22 >> 0] = 17;
 a[p + 23 >> 0] = 13;
 a[p + 24 >> 0] = 17;
 a[p + 25 >> 0] = 13;
 a[p + 26 >> 0] = 17;
 a[p + 27 >> 0] = 13;
 a[p + 28 >> 0] = 17;
 a[p + 29 >> 0] = 13;
 a[p + 30 >> 0] = 17;
 a[p + 31 >> 0] = 13;
 a[p + 32 >> 0] = 17;
 a[p + 33 >> 0] = 13;
 a[p + 34 >> 0] = 17;
 a[p + 35 >> 0] = 13;
 a[p + 36 >> 0] = 17;
 a[p + 37 >> 0] = 13;
 a[p + 38 >> 0] = 17;
 a[p + 39 >> 0] = 13;
 a[p + 40 >> 0] = 17;
 a[p + 41 >> 0] = 13;
 a[p + 8 >> 0] = 0;
 a[p + 9 >> 0] = 1;
 a[(p + 74 | 0) >> 0] = 0;
 a[p + 75 >> 0] = 0;
 b[(p + 58 | 0) >> 1] = 65535;
 b[(p + 58 | 0) + 2 >> 1] = 65535;
 b[(p + 58 | 0) + 4 >> 1] = 65535;
 b[(p + 58 | 0) + 6 >> 1] = 65535;
 b[(p + 58 | 0) + 8 >> 1] = 65535;
 b[(p + 58 | 0) + 10 >> 1] = 65535;
 b[(p + 58 | 0) + 12 >> 1] = 65535;
 b[(p + 58 | 0) + 14 >> 1] = 65535;
 b[(p + 42 | 0) >> 1] = 0;
 b[(p + 42 | 0) + 2 >> 1] = 0;
 b[(p + 42 | 0) + 4 >> 1] = 0;
 b[(p + 42 | 0) + 6 >> 1] = 0;
 b[(p + 42 | 0) + 8 >> 1] = 0;
 b[(p + 42 | 0) + 10 >> 1] = 0;
 b[(p + 42 | 0) + 12 >> 1] = 0;
 b[(p + 42 | 0) + 14 >> 1] = 0;
 c[(p + 76 | 0) >> 2] = 0;
 c[(p + 76 | 0) + 4 >> 2] = 0;
 c[(p + 76 | 0) + 8 >> 2] = 0;
 a[(p + 76 | 0) + 12 >> 0] = 0;
 c[(p + 292 | 0) >> 2] = 0;
 Be(p + 92 | 0, p + 292 | 0);
 c[(p + 96 | 0) >> 2] = -1;
 c[(p + 104 | 0) >> 2] = -1;
 c[(p + 104 | 0) + 4 >> 2] = -1;
 c[(p + 112 | 0) >> 2] = 0;
 c[p + 116 >> 2] = -1;
 k = p + 120 | 0;
 l = k + 68 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 n = a[(p + 188 | 0) >> 0] & -16;
 c[p >> 2] = h;
 c[(p + 4 | 0) >> 2] = j;
 a[(p + 188 | 0) >> 0] = n | 2;
 n = c[p + 4 >> 2] | 0;
 c[(f + 296 | 0) >> 2] = c[p >> 2];
 c[(f + 296 | 0) + 4 >> 2] = n;
 n = c[p + 8 >> 2] | 0;
 a[(f + 304 | 0) >> 0] = n & 65535;
 a[(f + 304 | 0) + 1 >> 0] = (n & 65535) >> 8;
 a[(f + 306 | 0) >> 0] = n >>> 16 & 65535;
 a[(f + 306 | 0) + 1 >> 0] = (n >>> 16 & 65535) >> 8;
 n = b[p + 12 >> 1] | 0;
 a[(f + 308 | 0) >> 0] = n;
 a[(f + 308 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 14 >> 1] | 0;
 a[(f + 310 | 0) >> 0] = n;
 a[(f + 310 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 16 >> 1] | 0;
 a[(f + 312 | 0) >> 0] = n;
 a[(f + 312 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 18 >> 1] | 0;
 a[(f + 314 | 0) >> 0] = n;
 a[(f + 314 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 20 >> 1] | 0;
 a[(f + 316 | 0) >> 0] = n;
 a[(f + 316 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 22 >> 1] | 0;
 a[(f + 318 | 0) >> 0] = n;
 a[(f + 318 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 24 >> 1] | 0;
 a[(f + 320 | 0) >> 0] = n;
 a[(f + 320 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 26 >> 1] | 0;
 a[(f + 322 | 0) >> 0] = n;
 a[(f + 322 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 28 >> 1] | 0;
 a[(f + 324 | 0) >> 0] = n;
 a[(f + 324 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 30 >> 1] | 0;
 a[(f + 326 | 0) >> 0] = n;
 a[(f + 326 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 32 >> 1] | 0;
 a[(f + 328 | 0) >> 0] = n;
 a[(f + 328 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 34 >> 1] | 0;
 a[(f + 330 | 0) >> 0] = n;
 a[(f + 330 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 36 >> 1] | 0;
 a[(f + 332 | 0) >> 0] = n;
 a[(f + 332 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 38 >> 1] | 0;
 a[(f + 334 | 0) >> 0] = n;
 a[(f + 334 | 0) + 1 >> 0] = n >> 8;
 n = b[p + 40 >> 1] | 0;
 a[(f + 336 | 0) >> 0] = n;
 a[(f + 336 | 0) + 1 >> 0] = n >> 8;
 n = b[(p + 42 | 0) >> 1] | 0;
 a[(f + 338 | 0) >> 0] = n;
 a[(f + 339 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 44 >> 1] | 0;
 a[(f + 340 | 0) >> 0] = n;
 a[(f + 341 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 46 >> 1] | 0;
 a[(f + 342 | 0) >> 0] = n;
 a[(f + 343 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 48 >> 1] | 0;
 a[(f + 344 | 0) >> 0] = n;
 a[(f + 345 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 50 >> 1] | 0;
 a[(f + 346 | 0) >> 0] = n;
 a[(f + 347 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 52 >> 1] | 0;
 a[(f + 348 | 0) >> 0] = n;
 a[(f + 349 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 54 >> 1] | 0;
 a[(f + 350 | 0) >> 0] = n;
 a[(f + 351 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 56 >> 1] | 0;
 a[(f + 352 | 0) >> 0] = n;
 a[(f + 353 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[(p + 58 | 0) >> 1] | 0;
 a[(f + 354 | 0) >> 0] = n;
 a[(f + 355 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 60 >> 1] | 0;
 a[(f + 356 | 0) >> 0] = n;
 a[(f + 357 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 62 >> 1] | 0;
 a[(f + 358 | 0) >> 0] = n;
 a[(f + 359 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 64 >> 1] | 0;
 a[(f + 360 | 0) >> 0] = n;
 a[(f + 361 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 66 >> 1] | 0;
 a[(f + 362 | 0) >> 0] = n;
 a[(f + 363 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 68 >> 1] | 0;
 a[(f + 364 | 0) >> 0] = n;
 a[(f + 365 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 70 >> 1] | 0;
 a[(f + 366 | 0) >> 0] = n;
 a[(f + 367 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[p + 72 >> 1] | 0;
 a[(f + 368 | 0) >> 0] = n;
 a[(f + 369 | 0) >> 0] = (n & 65535) >>> 8;
 n = b[(p + 74 | 0) >> 1] | 0;
 a[(f + 370 | 0) >> 0] = n;
 a[(f + 370 | 0) + 1 >> 0] = n >> 8;
 c[(f + 372 | 0) >> 2] = c[(p + 76 | 0) >> 2];
 c[(f + 372 | 0) + 4 >> 2] = c[(p + 76 | 0) + 4 >> 2];
 c[(f + 372 | 0) + 8 >> 2] = c[(p + 76 | 0) + 8 >> 2];
 a[(f + 372 | 0) + 12 >> 0] = a[(p + 76 | 0) + 12 >> 0] | 0;
 if ((p | 0) == (f + 296 | 0 | 0)) h = c[(p + 96 | 0) >> 2] | 0; else {
  c[(f + 388 | 0) >> 2] = 0;
  Be(f + 388 | 0, p + 92 | 0);
  h = c[(p + 96 | 0) >> 2] | 0;
  n = c[(p + 104 | 0) + 4 >> 2] | 0;
  c[(f + 400 | 0) >> 2] = c[(p + 104 | 0) >> 2];
  c[(f + 400 | 0) + 4 >> 2] = n;
 }
 c[(f + 392 | 0) >> 2] = h;
 k = f + 408 | 0;
 h = p + 112 | 0;
 l = k + 76 | 0;
 do {
  c[k >> 2] = c[h >> 2];
  k = k + 4 | 0;
  h = h + 4 | 0;
 } while ((k | 0) < (l | 0));
 a[(f + 408 | 0) + 76 >> 0] = a[(p + 112 | 0) + 76 >> 0] | 0;
 c[p + 92 >> 2] = 0;
 nd(f + 304 | 0, f + 196 | 0);
 j = c[(f + 184 | 0) >> 2] | 0;
 c[(f + 372 | 0) >> 2] = j;
 h = c[(f + 188 | 0) >> 2] | 0;
 c[f + 376 >> 2] = h;
 k = c[(f + 192 | 0) >> 2] | 0;
 c[f + 380 >> 2] = k;
 m = c[f + 264 >> 2] | 0;
 if (m) {
  l = c[f + 272 >> 2] | 0;
  n = c[f + 276 >> 2] | 0;
  if ((l | 0) != (n | 0)) {
   h = m + (l << 3) | 0;
   do {
    l = c[(f + 416 | 0) >> 2] | 0;
    c[(f + 416 | 0) >> 2] = l + 1;
    j = h;
    k = c[j + 4 >> 2] | 0;
    c[(f + 420 + (l << 3) | 0) >> 2] = c[j >> 2];
    c[(f + 420 + (l << 3) | 0) + 4 >> 2] = k;
    h = h + 8 | 0;
   } while ((h | 0) != (m + (n << 3) | 0 | 0));
   j = c[(f + 184 | 0) >> 2] | 0;
   k = c[(f + 192 | 0) >> 2] | 0;
   h = c[(f + 188 | 0) >> 2] | 0;
  }
 }
 m = ($(d[(f + 263 | 0) >> 0] | 0, j) | 0) + 3 & -4;
 switch (k | 0) {
 case 0:
  {
   o = 0;
   break;
  }
 case 1:
  {
   o = 2;
   break;
  }
 case 2:
  {
   o = 4;
   break;
  }
 default:
  {
   pe(21576, p + 192 | 0);
   eb();
  }
 }
 l = $(o, h) | 0;
 c[(f + 408 | 0) >> 2] = 0;
 if ((l | 0) > 0) c[f + 412 >> 2] = m;
 h = c[(f + 488 | 0) >> 2] | 0;
 if ((h + (l + m | 0) | 0 | 0) > (c[(f + 492 | 0) >> 2] | 0)) {
  k = bf(h + (l + m | 0) | 0) | 0;
  j = c[(f + 488 | 0) >> 2] | 0;
  if ((j | 0) > 0) Af(k | 0, c[(f + 496 | 0) >> 2] | 0, j | 0) | 0;
  j = c[(f + 496 | 0) >> 2] | 0;
  if (j | 0) cf(j);
  c[(f + 496 | 0) >> 2] = k;
  c[(f + 492 | 0) >> 2] = h + (l + m | 0) | 0;
  j = k;
  h = c[(f + 488 | 0) >> 2] | 0;
 } else j = c[f + 496 >> 2] | 0;
 o = j + h | 0;
 c[(f + 488 | 0) >> 2] = h + (l + m | 0);
 c[(f + 508 | 0) >> 2] = o;
 c[(f + 512 | 0) >> 2] = o + m | 0;
 c[(f + 516 | 0) >> 2] = (o + m | 0) + l;
 l = c[(f + 160 | 0) >> 2] | 0;
 a : do if (l | 0) {
  h = c[f + 168 >> 2] | 0;
  m = c[f + 172 >> 2] | 0;
  if ((h | 0) != (m | 0)) {
   h = l + (h * 112 | 0) | 0;
   j = 0;
   k = 0;
   while (1) {
    b : do {
     n = 1;
     o = c[h >> 2] | 0;
     c[p + 328 >> 2] = f;
     c[p + 6392 >> 2] = h;
     c[p + 6400 >> 2] = j;
     c[p + 6408 >> 2] = k;
     c[p + 7e3 >> 2] = n;
     c[p + 7008 >> 2] = o;
     c[p + 7016 >> 2] = 0;
     c[p + 7020 >> 2] = 0;
     Fe(p);
     B = c[p + 7016 >> 2] | 0;
     u = c[p + 7020 >> 2] | 0;
     C = +g[p + 7020 >> 2];
     c[p + 7016 >> 2] = 0;
     c[p + 7020 >> 2] = 0;
     if ((B | 0) == 1) break;
     if ((B | 0) == 2) switch (u | 0) {
     case 15:
      break b;
     }
    } while (0);
    k = (c[h + 104 >> 2] | 0) + k | 0;
    j = (c[h + 108 >> 2] | 0) + j | 0;
    h = h + 112 | 0;
    if ((h | 0) == (l + (m * 112 | 0) | 0 | 0)) break a;
   }
  }
 } while (0);
 a[(f + 504 | 0) >> 0] = 0;
 c[e >> 2] = -1;
 c[e + 4 >> 2] = -1;
 a[e + 10 >> 0] = 17;
 a[e + 11 >> 0] = 13;
 a[(e + 12 | 0) >> 0] = 17;
 a[e + 13 >> 0] = 13;
 a[(e + 14 | 0) >> 0] = 17;
 a[e + 15 >> 0] = 13;
 a[(e + 16 | 0) >> 0] = 17;
 a[e + 17 >> 0] = 13;
 a[(e + 18 | 0) >> 0] = 17;
 a[e + 19 >> 0] = 13;
 a[(e + 20 | 0) >> 0] = 17;
 a[e + 21 >> 0] = 13;
 a[(e + 22 | 0) >> 0] = 17;
 a[e + 23 >> 0] = 13;
 a[(e + 24 | 0) >> 0] = 17;
 a[e + 25 >> 0] = 13;
 a[(e + 26 | 0) >> 0] = 17;
 a[e + 27 >> 0] = 13;
 a[(e + 28 | 0) >> 0] = 17;
 a[e + 29 >> 0] = 13;
 a[(e + 30 | 0) >> 0] = 17;
 a[e + 31 >> 0] = 13;
 a[(e + 32 | 0) >> 0] = 17;
 a[e + 33 >> 0] = 13;
 a[(e + 34 | 0) >> 0] = 17;
 a[e + 35 >> 0] = 13;
 a[(e + 36 | 0) >> 0] = 17;
 a[e + 37 >> 0] = 13;
 a[(e + 38 | 0) >> 0] = 17;
 a[e + 39 >> 0] = 13;
 a[(e + 40 | 0) >> 0] = 17;
 a[e + 41 >> 0] = 13;
 a[e + 8 >> 0] = 0;
 a[e + 9 >> 0] = 1;
 a[(e + 74 | 0) >> 0] = 0;
 a[e + 75 >> 0] = 0;
 k = e + 58 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = e + 42 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 c[(e + 76 | 0) >> 2] = 0;
 c[(e + 76 | 0) + 4 >> 2] = 0;
 c[(e + 76 | 0) + 8 >> 2] = 0;
 a[(e + 76 | 0) + 12 >> 0] = 0;
 c[(p + 292 | 0) >> 2] = 0;
 Be(e + 92 | 0, p + 292 | 0);
 c[(e + 96 | 0) >> 2] = -1;
 c[(e + 104 | 0) >> 2] = -1;
 c[(e + 104 | 0) + 4 >> 2] = -1;
 c[(e + 112 | 0) >> 2] = 0;
 c[e + 116 >> 2] = -1;
 k = e + 120 | 0;
 l = k + 68 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 a[(e + 188 | 0) >> 0] = a[(e + 188 | 0) >> 0] & -16;
 c[(e + 192 | 0) >> 2] = 0;
 c[(e + 196 | 0) >> 2] = 0;
 c[(e + 200 | 0) >> 2] = 0;
 o = c[(f + 296 | 0) + 4 >> 2] | 0;
 c[e >> 2] = c[(f + 296 | 0) >> 2];
 c[e + 4 >> 2] = o;
 o = d[(f + 304 | 0) >> 0] | d[(f + 304 | 0) + 1 >> 0] << 8;
 a[(e + 8 | 0) >> 0] = o;
 a[(e + 8 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 306 | 0) >> 0] | d[(f + 306 | 0) + 1 >> 0] << 8;
 a[(e + 10 | 0) >> 0] = o;
 a[(e + 10 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 308 | 0) >> 0] | d[(f + 308 | 0) + 1 >> 0] << 8;
 a[(e + 12 | 0) >> 0] = o;
 a[(e + 12 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 310 | 0) >> 0] | d[(f + 310 | 0) + 1 >> 0] << 8;
 a[(e + 14 | 0) >> 0] = o;
 a[(e + 14 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 312 | 0) >> 0] | d[(f + 312 | 0) + 1 >> 0] << 8;
 a[(e + 16 | 0) >> 0] = o;
 a[(e + 16 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 314 | 0) >> 0] | d[(f + 314 | 0) + 1 >> 0] << 8;
 a[(e + 18 | 0) >> 0] = o;
 a[(e + 18 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 316 | 0) >> 0] | d[(f + 316 | 0) + 1 >> 0] << 8;
 a[(e + 20 | 0) >> 0] = o;
 a[(e + 20 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 318 | 0) >> 0] | d[(f + 318 | 0) + 1 >> 0] << 8;
 a[(e + 22 | 0) >> 0] = o;
 a[(e + 22 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 320 | 0) >> 0] | d[(f + 320 | 0) + 1 >> 0] << 8;
 a[(e + 24 | 0) >> 0] = o;
 a[(e + 24 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 322 | 0) >> 0] | d[(f + 322 | 0) + 1 >> 0] << 8;
 a[(e + 26 | 0) >> 0] = o;
 a[(e + 26 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 324 | 0) >> 0] | d[(f + 324 | 0) + 1 >> 0] << 8;
 a[(e + 28 | 0) >> 0] = o;
 a[(e + 28 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 326 | 0) >> 0] | d[(f + 326 | 0) + 1 >> 0] << 8;
 a[(e + 30 | 0) >> 0] = o;
 a[(e + 30 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 328 | 0) >> 0] | d[(f + 328 | 0) + 1 >> 0] << 8;
 a[(e + 32 | 0) >> 0] = o;
 a[(e + 32 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 330 | 0) >> 0] | d[(f + 330 | 0) + 1 >> 0] << 8;
 a[(e + 34 | 0) >> 0] = o;
 a[(e + 34 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 332 | 0) >> 0] | d[(f + 332 | 0) + 1 >> 0] << 8;
 a[(e + 36 | 0) >> 0] = o;
 a[(e + 36 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 334 | 0) >> 0] | d[(f + 334 | 0) + 1 >> 0] << 8;
 a[(e + 38 | 0) >> 0] = o;
 a[(e + 38 | 0) + 1 >> 0] = o >> 8;
 o = d[(f + 336 | 0) >> 0] | d[(f + 336 | 0) + 1 >> 0] << 8;
 a[(e + 40 | 0) >> 0] = o;
 a[(e + 40 | 0) + 1 >> 0] = o >> 8;
 a[(e + 42 | 0) >> 0] = a[(f + 338 | 0) >> 0] | 0;
 a[e + 43 >> 0] = a[(f + 339 | 0) >> 0] | 0;
 a[e + 44 >> 0] = a[(f + 340 | 0) >> 0] | 0;
 a[e + 45 >> 0] = a[(f + 341 | 0) >> 0] | 0;
 a[e + 46 >> 0] = a[(f + 342 | 0) >> 0] | 0;
 a[e + 47 >> 0] = a[(f + 343 | 0) >> 0] | 0;
 a[e + 48 >> 0] = a[(f + 344 | 0) >> 0] | 0;
 a[e + 49 >> 0] = a[(f + 345 | 0) >> 0] | 0;
 a[e + 50 >> 0] = a[(f + 346 | 0) >> 0] | 0;
 a[e + 51 >> 0] = a[(f + 347 | 0) >> 0] | 0;
 a[e + 52 >> 0] = a[(f + 348 | 0) >> 0] | 0;
 a[e + 53 >> 0] = a[(f + 349 | 0) >> 0] | 0;
 a[e + 54 >> 0] = a[(f + 350 | 0) >> 0] | 0;
 a[e + 55 >> 0] = a[(f + 351 | 0) >> 0] | 0;
 a[e + 56 >> 0] = a[(f + 352 | 0) >> 0] | 0;
 a[e + 57 >> 0] = a[(f + 353 | 0) >> 0] | 0;
 a[(e + 58 | 0) >> 0] = a[(f + 354 | 0) >> 0] | 0;
 a[e + 59 >> 0] = a[(f + 355 | 0) >> 0] | 0;
 a[e + 60 >> 0] = a[(f + 356 | 0) >> 0] | 0;
 a[e + 61 >> 0] = a[(f + 357 | 0) >> 0] | 0;
 a[e + 62 >> 0] = a[(f + 358 | 0) >> 0] | 0;
 a[e + 63 >> 0] = a[(f + 359 | 0) >> 0] | 0;
 a[e + 64 >> 0] = a[(f + 360 | 0) >> 0] | 0;
 a[e + 65 >> 0] = a[(f + 361 | 0) >> 0] | 0;
 a[e + 66 >> 0] = a[(f + 362 | 0) >> 0] | 0;
 a[e + 67 >> 0] = a[(f + 363 | 0) >> 0] | 0;
 a[e + 68 >> 0] = a[(f + 364 | 0) >> 0] | 0;
 a[e + 69 >> 0] = a[(f + 365 | 0) >> 0] | 0;
 a[e + 70 >> 0] = a[(f + 366 | 0) >> 0] | 0;
 a[e + 71 >> 0] = a[(f + 367 | 0) >> 0] | 0;
 a[e + 72 >> 0] = a[(f + 368 | 0) >> 0] | 0;
 a[e + 73 >> 0] = a[(f + 369 | 0) >> 0] | 0;
 o = d[(f + 370 | 0) >> 0] | d[(f + 370 | 0) + 1 >> 0] << 8;
 a[(e + 74 | 0) >> 0] = o;
 a[(e + 74 | 0) + 1 >> 0] = o >> 8;
 c[(e + 76 | 0) >> 2] = c[(f + 372 | 0) >> 2];
 c[(e + 76 | 0) + 4 >> 2] = c[(f + 372 | 0) + 4 >> 2];
 c[(e + 76 | 0) + 8 >> 2] = c[(f + 372 | 0) + 8 >> 2];
 a[(e + 76 | 0) + 12 >> 0] = a[(f + 372 | 0) + 12 >> 0] | 0;
 if ((f + 296 | 0 | 0) == (e | 0)) h = c[(e + 96 | 0) >> 2] | 0; else {
  c[(e + 92 | 0) >> 2] = 0;
  Be(e + 92 | 0, f + 388 | 0);
  h = c[(f + 392 | 0) >> 2] | 0;
  o = c[(f + 400 | 0) + 4 >> 2] | 0;
  c[(e + 104 | 0) >> 2] = c[(f + 400 | 0) >> 2];
  c[(e + 104 | 0) + 4 >> 2] = o;
 }
 c[(e + 96 | 0) >> 2] = h;
 k = e + 112 | 0;
 h = f + 408 | 0;
 l = k + 76 | 0;
 do {
  c[k >> 2] = c[h >> 2];
  k = k + 4 | 0;
  h = h + 4 | 0;
 } while ((k | 0) < (l | 0));
 a[(e + 112 | 0) + 76 >> 0] = a[(f + 408 | 0) + 76 >> 0] | 0;
 h = c[(e + 200 | 0) >> 2] | 0;
 if (h | 0) cf(h);
 c[(e + 192 | 0) >> 2] = c[(f + 488 | 0) >> 2];
 c[(e + 196 | 0) >> 2] = c[(f + 492 | 0) >> 2];
 c[(e + 200 | 0) >> 2] = c[(f + 496 | 0) >> 2];
 c[(f + 488 | 0) >> 2] = 0;
 c[(f + 492 | 0) >> 2] = 0;
 c[(f + 496 | 0) >> 2] = 0;
 c[(f + 508 | 0) >> 2] = 0;
 c[(f + 512 | 0) >> 2] = 0;
 c[(f + 516 | 0) >> 2] = 0;
 c[p >> 2] = -1;
 c[(p + 4 | 0) >> 2] = -1;
 a[p + 10 >> 0] = 17;
 a[p + 11 >> 0] = 13;
 a[p + 12 >> 0] = 17;
 a[p + 13 >> 0] = 13;
 a[p + 14 >> 0] = 17;
 a[p + 15 >> 0] = 13;
 a[p + 16 >> 0] = 17;
 a[p + 17 >> 0] = 13;
 a[p + 18 >> 0] = 17;
 a[p + 19 >> 0] = 13;
 a[p + 20 >> 0] = 17;
 a[p + 21 >> 0] = 13;
 a[p + 22 >> 0] = 17;
 a[p + 23 >> 0] = 13;
 a[p + 24 >> 0] = 17;
 a[p + 25 >> 0] = 13;
 a[p + 26 >> 0] = 17;
 a[p + 27 >> 0] = 13;
 a[p + 28 >> 0] = 17;
 a[p + 29 >> 0] = 13;
 a[p + 30 >> 0] = 17;
 a[p + 31 >> 0] = 13;
 a[p + 32 >> 0] = 17;
 a[p + 33 >> 0] = 13;
 a[p + 34 >> 0] = 17;
 a[p + 35 >> 0] = 13;
 a[p + 36 >> 0] = 17;
 a[p + 37 >> 0] = 13;
 a[p + 38 >> 0] = 17;
 a[p + 39 >> 0] = 13;
 a[p + 40 >> 0] = 17;
 a[p + 41 >> 0] = 13;
 a[p + 8 >> 0] = 0;
 a[p + 9 >> 0] = 1;
 a[(p + 74 | 0) >> 0] = 0;
 a[p + 75 >> 0] = 0;
 b[(p + 58 | 0) >> 1] = 65535;
 b[(p + 58 | 0) + 2 >> 1] = 65535;
 b[(p + 58 | 0) + 4 >> 1] = 65535;
 b[(p + 58 | 0) + 6 >> 1] = 65535;
 b[(p + 58 | 0) + 8 >> 1] = 65535;
 b[(p + 58 | 0) + 10 >> 1] = 65535;
 b[(p + 58 | 0) + 12 >> 1] = 65535;
 b[(p + 58 | 0) + 14 >> 1] = 65535;
 b[(p + 42 | 0) >> 1] = 0;
 b[(p + 42 | 0) + 2 >> 1] = 0;
 b[(p + 42 | 0) + 4 >> 1] = 0;
 b[(p + 42 | 0) + 6 >> 1] = 0;
 b[(p + 42 | 0) + 8 >> 1] = 0;
 b[(p + 42 | 0) + 10 >> 1] = 0;
 b[(p + 42 | 0) + 12 >> 1] = 0;
 b[(p + 42 | 0) + 14 >> 1] = 0;
 c[(p + 76 | 0) >> 2] = 0;
 c[(p + 76 | 0) + 4 >> 2] = 0;
 c[(p + 76 | 0) + 8 >> 2] = 0;
 a[(p + 76 | 0) + 12 >> 0] = 0;
 c[(p + 292 | 0) >> 2] = 0;
 Be(p + 92 | 0, p + 292 | 0);
 c[(p + 96 | 0) >> 2] = -1;
 c[(p + 104 | 0) >> 2] = -1;
 c[(p + 104 | 0) + 4 >> 2] = -1;
 c[(p + 112 | 0) >> 2] = 0;
 c[p + 116 >> 2] = -1;
 k = p + 120 | 0;
 l = k + 68 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 e = a[(p + 188 | 0) >> 0] & -16;
 c[p >> 2] = 0;
 c[(p + 4 | 0) >> 2] = 0;
 a[(p + 188 | 0) >> 0] = e | 2;
 e = c[p + 4 >> 2] | 0;
 c[(f + 296 | 0) >> 2] = c[p >> 2];
 c[(f + 296 | 0) + 4 >> 2] = e;
 e = c[p + 8 >> 2] | 0;
 a[(f + 304 | 0) >> 0] = e & 65535;
 a[(f + 304 | 0) + 1 >> 0] = (e & 65535) >> 8;
 a[(f + 306 | 0) >> 0] = e >>> 16 & 65535;
 a[(f + 306 | 0) + 1 >> 0] = (e >>> 16 & 65535) >> 8;
 e = b[p + 12 >> 1] | 0;
 a[(f + 308 | 0) >> 0] = e;
 a[(f + 308 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 14 >> 1] | 0;
 a[(f + 310 | 0) >> 0] = e;
 a[(f + 310 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 16 >> 1] | 0;
 a[(f + 312 | 0) >> 0] = e;
 a[(f + 312 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 18 >> 1] | 0;
 a[(f + 314 | 0) >> 0] = e;
 a[(f + 314 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 20 >> 1] | 0;
 a[(f + 316 | 0) >> 0] = e;
 a[(f + 316 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 22 >> 1] | 0;
 a[(f + 318 | 0) >> 0] = e;
 a[(f + 318 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 24 >> 1] | 0;
 a[(f + 320 | 0) >> 0] = e;
 a[(f + 320 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 26 >> 1] | 0;
 a[(f + 322 | 0) >> 0] = e;
 a[(f + 322 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 28 >> 1] | 0;
 a[(f + 324 | 0) >> 0] = e;
 a[(f + 324 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 30 >> 1] | 0;
 a[(f + 326 | 0) >> 0] = e;
 a[(f + 326 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 32 >> 1] | 0;
 a[(f + 328 | 0) >> 0] = e;
 a[(f + 328 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 34 >> 1] | 0;
 a[(f + 330 | 0) >> 0] = e;
 a[(f + 330 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 36 >> 1] | 0;
 a[(f + 332 | 0) >> 0] = e;
 a[(f + 332 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 38 >> 1] | 0;
 a[(f + 334 | 0) >> 0] = e;
 a[(f + 334 | 0) + 1 >> 0] = e >> 8;
 e = b[p + 40 >> 1] | 0;
 a[(f + 336 | 0) >> 0] = e;
 a[(f + 336 | 0) + 1 >> 0] = e >> 8;
 e = b[(p + 42 | 0) >> 1] | 0;
 a[(f + 338 | 0) >> 0] = e;
 a[(f + 339 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 44 >> 1] | 0;
 a[(f + 340 | 0) >> 0] = e;
 a[(f + 341 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 46 >> 1] | 0;
 a[(f + 342 | 0) >> 0] = e;
 a[(f + 343 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 48 >> 1] | 0;
 a[(f + 344 | 0) >> 0] = e;
 a[(f + 345 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 50 >> 1] | 0;
 a[(f + 346 | 0) >> 0] = e;
 a[(f + 347 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 52 >> 1] | 0;
 a[(f + 348 | 0) >> 0] = e;
 a[(f + 349 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 54 >> 1] | 0;
 a[(f + 350 | 0) >> 0] = e;
 a[(f + 351 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 56 >> 1] | 0;
 a[(f + 352 | 0) >> 0] = e;
 a[(f + 353 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[(p + 58 | 0) >> 1] | 0;
 a[(f + 354 | 0) >> 0] = e;
 a[(f + 355 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 60 >> 1] | 0;
 a[(f + 356 | 0) >> 0] = e;
 a[(f + 357 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 62 >> 1] | 0;
 a[(f + 358 | 0) >> 0] = e;
 a[(f + 359 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 64 >> 1] | 0;
 a[(f + 360 | 0) >> 0] = e;
 a[(f + 361 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 66 >> 1] | 0;
 a[(f + 362 | 0) >> 0] = e;
 a[(f + 363 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 68 >> 1] | 0;
 a[(f + 364 | 0) >> 0] = e;
 a[(f + 365 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 70 >> 1] | 0;
 a[(f + 366 | 0) >> 0] = e;
 a[(f + 367 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[p + 72 >> 1] | 0;
 a[(f + 368 | 0) >> 0] = e;
 a[(f + 369 | 0) >> 0] = (e & 65535) >>> 8;
 e = b[(p + 74 | 0) >> 1] | 0;
 a[(f + 370 | 0) >> 0] = e;
 a[(f + 370 | 0) + 1 >> 0] = e >> 8;
 c[(f + 372 | 0) >> 2] = c[(p + 76 | 0) >> 2];
 c[(f + 372 | 0) + 4 >> 2] = c[(p + 76 | 0) + 4 >> 2];
 c[(f + 372 | 0) + 8 >> 2] = c[(p + 76 | 0) + 8 >> 2];
 a[(f + 372 | 0) + 12 >> 0] = a[(p + 76 | 0) + 12 >> 0] | 0;
 if ((p | 0) == (f + 296 | 0 | 0)) {
  k = c[(p + 96 | 0) >> 2] | 0;
  c[(f + 392 | 0) >> 2] = k;
  k = f + 408 | 0;
  h = p + 112 | 0;
  l = k + 76 | 0;
  do {
   c[k >> 2] = c[h >> 2];
   k = k + 4 | 0;
   h = h + 4 | 0;
  } while ((k | 0) < (l | 0));
  a[(f + 408 | 0) + 76 >> 0] = a[(p + 112 | 0) + 76 >> 0] | 0;
  c[(f + 488 | 0) >> 2] = 0;
  o = f + 72 | 0;
  c[o >> 2] = 0;
  c[(f + 76 | 0) >> 2] = 0;
  o = f + 80 | 0;
  g[o >> 2] = 1.0;
  o = f + 84 | 0;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  c[o + 12 >> 2] = 0;
  o = f + 100 | 0;
  g[o >> 2] = 1.0;
  o = f + 104 | 0;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  c[o + 12 >> 2] = 0;
  o = f + 120 | 0;
  g[o >> 2] = 1.0;
  o = f + 124 | 0;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  c[o + 12 >> 2] = 0;
  o = f + 140 | 0;
  g[o >> 2] = 1.0;
  o = f + 144 | 0;
  g[o >> 2] = 1.0;
  o = f + 148 | 0;
  g[o >> 2] = 1.0;
  o = f + 152 | 0;
  g[o >> 2] = 1.0;
  o = f + 156 | 0;
  g[o >> 2] = 1.0;
  o = f + 168 | 0;
  e = f + 172 | 0;
  o = c[o >> 2] | 0;
  c[e >> 2] = o;
  e = f + 272 | 0;
  f = f + 276 | 0;
  e = c[e >> 2] | 0;
  c[f >> 2] = e;
  i = p;
  return;
 } else {
  c[(f + 388 | 0) >> 2] = 0;
  Be(f + 388 | 0, p + 92 | 0);
  k = c[(p + 96 | 0) >> 2] | 0;
  h = c[(p + 104 | 0) + 4 >> 2] | 0;
  c[(f + 400 | 0) >> 2] = c[(p + 104 | 0) >> 2];
  c[(f + 400 | 0) + 4 >> 2] = h;
  c[(f + 392 | 0) >> 2] = k;
  k = f + 408 | 0;
  h = p + 112 | 0;
  l = k + 76 | 0;
  do {
   c[k >> 2] = c[h >> 2];
   k = k + 4 | 0;
   h = h + 4 | 0;
  } while ((k | 0) < (l | 0));
  a[(f + 408 | 0) + 76 >> 0] = a[(p + 112 | 0) + 76 >> 0] | 0;
  c[(f + 488 | 0) >> 2] = 0;
  o = f + 72 | 0;
  c[o >> 2] = 0;
  c[(f + 76 | 0) >> 2] = 0;
  o = f + 80 | 0;
  g[o >> 2] = 1.0;
  o = f + 84 | 0;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  c[o + 12 >> 2] = 0;
  o = f + 100 | 0;
  g[o >> 2] = 1.0;
  o = f + 104 | 0;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  c[o + 12 >> 2] = 0;
  o = f + 120 | 0;
  g[o >> 2] = 1.0;
  o = f + 124 | 0;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  c[o + 12 >> 2] = 0;
  o = f + 140 | 0;
  g[o >> 2] = 1.0;
  o = f + 144 | 0;
  g[o >> 2] = 1.0;
  o = f + 148 | 0;
  g[o >> 2] = 1.0;
  o = f + 152 | 0;
  g[o >> 2] = 1.0;
  o = f + 156 | 0;
  g[o >> 2] = 1.0;
  o = f + 168 | 0;
  e = f + 172 | 0;
  o = c[o >> 2] | 0;
  c[e >> 2] = o;
  e = f + 272 | 0;
  f = f + 276 | 0;
  e = c[e >> 2] | 0;
  c[f >> 2] = e;
  i = p;
  return;
 }
}

function Qe(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0.0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0;
 ia = i;
 i = i + 624 | 0;
 da = ia + 24 | 0;
 fa = ia + 16 | 0;
 ea = ia + 588 | 0;
 aa = ia + 576 | 0;
 ca = ia;
 W = ia + 536 | 0;
 ha = ia + 8 | 0;
 ga = ia + 528 | 0;
 M = (e | 0) != 0;
 N = W + 40 | 0;
 V = N;
 W = W + 39 | 0;
 X = ha + 4 | 0;
 Y = ea;
 Z = 0 - Y | 0;
 _ = aa + 12 | 0;
 aa = aa + 11 | 0;
 ba = _;
 O = ba - Y | 0;
 P = -2 - Y | 0;
 Q = ba + 2 | 0;
 R = da + 288 | 0;
 S = ea + 9 | 0;
 T = S;
 U = ea + 8 | 0;
 m = 0;
 n = 0;
 r = 0;
 x = f;
 a : while (1) {
  do if ((m | 0) > -1) {
   if ((n | 0) <= (2147483647 - m | 0)) {
    m = n + m | 0;
    break;
   }
   if (!(c[8975] | 0)) m = 35944; else m = c[(Ef() | 0) + 64 >> 2] | 0;
   c[m >> 2] = 75;
   m = -1;
  } while (0);
  f = a[x >> 0] | 0;
  if (!(f << 24 >> 24)) {
   L = 254;
   break;
  } else n = x;
  b : while (1) {
   switch (f << 24 >> 24) {
   case 37:
    {
     f = n;
     L = 11;
     break b;
    }
   case 0:
    {
     f = n;
     break b;
    }
   default:
    {}
   }
   K = n + 1 | 0;
   f = a[K >> 0] | 0;
   n = K;
  }
  c : do if ((L | 0) == 11) while (1) {
   L = 0;
   if ((a[f + 1 >> 0] | 0) != 37) break c;
   n = n + 1 | 0;
   f = f + 2 | 0;
   if ((a[f >> 0] | 0) == 37) L = 11; else break;
  } while (0);
  v = n - x | 0;
  if (M) if (!(c[e >> 2] & 32)) Re(x, v, e);
  if ((n | 0) != (x | 0)) {
   n = v;
   x = f;
   continue;
  }
  q = f + 1 | 0;
  n = a[q >> 0] | 0;
  o = (n << 24 >> 24) + -48 | 0;
  if (o >>> 0 < 10) {
   K = (a[f + 2 >> 0] | 0) == 36;
   q = K ? f + 3 | 0 : q;
   n = a[q >> 0] | 0;
   t = K ? o : -1;
   r = K ? 1 : r;
  } else t = -1;
  f = n << 24 >> 24;
  d : do if ((f & -32 | 0) == 32) {
   o = 0;
   do {
    if (!(1 << f + -32 & 75913)) break d;
    o = 1 << (n << 24 >> 24) + -32 | o;
    q = q + 1 | 0;
    n = a[q >> 0] | 0;
    f = n << 24 >> 24;
   } while ((f & -32 | 0) == 32);
  } else o = 0; while (0);
  do if (n << 24 >> 24 == 42) {
   n = q + 1 | 0;
   f = (a[n >> 0] | 0) + -48 | 0;
   if (f >>> 0 < 10) if ((a[q + 2 >> 0] | 0) == 36) {
    c[l + (f << 2) >> 2] = 10;
    f = 1;
    q = q + 3 | 0;
    n = c[j + ((a[n >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else L = 26; else L = 26;
   if ((L | 0) == 26) {
    L = 0;
    if (r | 0) {
     m = -1;
     break a;
    }
    if (!M) {
     u = o;
     K = 0;
     q = n;
     J = 0;
     break;
    }
    f = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    K = c[f >> 2] | 0;
    c[g >> 2] = f + 4;
    f = 0;
    q = n;
    n = K;
   }
   if ((n | 0) < 0) {
    u = o | 8192;
    K = f;
    J = 0 - n | 0;
   } else {
    u = o;
    K = f;
    J = n;
   }
  } else {
   f = (n << 24 >> 24) + -48 | 0;
   if (f >>> 0 < 10) {
    n = 0;
    do {
     n = (n * 10 | 0) + f | 0;
     q = q + 1 | 0;
     f = (a[q >> 0] | 0) + -48 | 0;
    } while (f >>> 0 < 10);
    if ((n | 0) < 0) {
     m = -1;
     break a;
    } else {
     u = o;
     K = r;
     J = n;
    }
   } else {
    u = o;
    K = r;
    J = 0;
   }
  } while (0);
  e : do if ((a[q >> 0] | 0) == 46) {
   f = q + 1 | 0;
   n = a[f >> 0] | 0;
   if (n << 24 >> 24 != 42) {
    o = (n << 24 >> 24) + -48 | 0;
    if (o >>> 0 < 10) n = 0; else {
     r = 0;
     break;
    }
    while (1) {
     n = (n * 10 | 0) + o | 0;
     f = f + 1 | 0;
     o = (a[f >> 0] | 0) + -48 | 0;
     if (o >>> 0 >= 10) {
      r = n;
      break e;
     }
    }
   }
   f = q + 2 | 0;
   n = (a[f >> 0] | 0) + -48 | 0;
   if (n >>> 0 < 10) if ((a[q + 3 >> 0] | 0) == 36) {
    c[l + (n << 2) >> 2] = 10;
    r = c[j + ((a[f >> 0] | 0) + -48 << 3) >> 2] | 0;
    f = q + 4 | 0;
    break;
   }
   if (K | 0) {
    m = -1;
    break a;
   }
   if (M) {
    I = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    r = c[I >> 2] | 0;
    c[g >> 2] = I + 4;
   } else r = 0;
  } else {
   r = -1;
   f = q;
  } while (0);
  s = 0;
  while (1) {
   n = (a[f >> 0] | 0) + -65 | 0;
   if (n >>> 0 > 57) {
    m = -1;
    break a;
   }
   I = f + 1 | 0;
   n = a[33133 + (s * 58 | 0) + n >> 0] | 0;
   o = n & 255;
   if ((o + -1 | 0) >>> 0 < 8) {
    f = I;
    s = o;
   } else break;
  }
  if (!(n << 24 >> 24)) {
   m = -1;
   break;
  }
  q = (t | 0) > -1;
  do if (n << 24 >> 24 == 19) if (q) {
   m = -1;
   break a;
  } else L = 54; else {
   if (q) {
    c[l + (t << 2) >> 2] = o;
    G = j + (t << 3) | 0;
    H = c[G + 4 >> 2] | 0;
    L = ca;
    c[L >> 2] = c[G >> 2];
    c[L + 4 >> 2] = H;
    L = 54;
    break;
   }
   if (!M) {
    m = 0;
    break a;
   }
   Te(ca, o, g);
  } while (0);
  if ((L | 0) == 54) {
   L = 0;
   if (!M) {
    n = v;
    r = K;
    x = I;
    continue;
   }
  }
  t = a[f >> 0] | 0;
  t = (s | 0) != 0 & (t & 15 | 0) == 3 ? t & -33 : t;
  o = u & -65537;
  H = (u & 8192 | 0) == 0 ? u : o;
  f : do switch (t | 0) {
  case 110:
   switch (s | 0) {
   case 0:
    {
     c[c[ca >> 2] >> 2] = m;
     n = v;
     r = K;
     x = I;
     continue a;
    }
   case 1:
    {
     c[c[ca >> 2] >> 2] = m;
     n = v;
     r = K;
     x = I;
     continue a;
    }
   case 2:
    {
     n = c[ca >> 2] | 0;
     c[n >> 2] = m;
     c[n + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     n = v;
     r = K;
     x = I;
     continue a;
    }
   case 3:
    {
     b[c[ca >> 2] >> 1] = m;
     n = v;
     r = K;
     x = I;
     continue a;
    }
   case 4:
    {
     a[c[ca >> 2] >> 0] = m;
     n = v;
     r = K;
     x = I;
     continue a;
    }
   case 6:
    {
     c[c[ca >> 2] >> 2] = m;
     n = v;
     r = K;
     x = I;
     continue a;
    }
   case 7:
    {
     n = c[ca >> 2] | 0;
     c[n >> 2] = m;
     c[n + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     n = v;
     r = K;
     x = I;
     continue a;
    }
   default:
    {
     n = v;
     r = K;
     x = I;
     continue a;
    }
   }
  case 112:
   {
    s = H | 8;
    r = r >>> 0 > 8 ? r : 8;
    t = 120;
    L = 66;
    break;
   }
  case 88:
  case 120:
   {
    s = H;
    L = 66;
    break;
   }
  case 111:
   {
    o = ca;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((n | 0) == 0 & (o | 0) == 0) f = N; else {
     f = N;
     do {
      f = f + -1 | 0;
      a[f >> 0] = n & 7 | 48;
      n = Cf(n | 0, o | 0, 3) | 0;
      o = D;
     } while (!((n | 0) == 0 & (o | 0) == 0));
    }
    if (!(H & 8)) {
     n = H;
     s = 0;
     q = 33613;
     L = 79;
    } else {
     s = V - f | 0;
     n = H;
     r = (r | 0) > (s | 0) ? r : s + 1 | 0;
     s = 0;
     q = 33613;
     L = 79;
    }
    break;
   }
  case 105:
  case 100:
   {
    n = ca;
    f = c[n >> 2] | 0;
    n = c[n + 4 >> 2] | 0;
    if ((n | 0) < 0) {
     f = xf(0, 0, f | 0, n | 0) | 0;
     n = D;
     o = ca;
     c[o >> 2] = f;
     c[o + 4 >> 2] = n;
     o = 1;
     q = 33613;
     L = 78;
     break f;
    }
    if (!(H & 2048)) {
     q = H & 1;
     o = q;
     q = (q | 0) == 0 ? 33613 : 33615;
     L = 78;
    } else {
     o = 1;
     q = 33614;
     L = 78;
    }
    break;
   }
  case 117:
   {
    n = ca;
    f = c[n >> 2] | 0;
    n = c[n + 4 >> 2] | 0;
    o = 0;
    q = 33613;
    L = 78;
    break;
   }
  case 99:
   {
    a[W >> 0] = c[ca >> 2];
    f = W;
    t = 1;
    v = 0;
    u = 33613;
    n = N;
    break;
   }
  case 109:
   {
    if (!(c[8975] | 0)) f = 35944; else f = c[(Ef() | 0) + 64 >> 2] | 0;
    n = c[f >> 2] | 0;
    f = 0;
    while (1) {
     if ((d[33623 + f >> 0] | 0) == (n | 0)) {
      L = 85;
      break;
     }
     f = f + 1 | 0;
     if ((f | 0) == 87) {
      n = 87;
      f = 33711;
      break;
     }
    }
    if ((L | 0) == 85) if (!f) {
     n = 33711;
     L = 92;
     break f;
    } else {
     n = f;
     f = 33711;
    }
    do {
     do {
      L = f;
      f = f + 1 | 0;
     } while ((a[L >> 0] | 0) != 0);
     n = n + -1 | 0;
    } while ((n | 0) != 0);
    n = f;
    L = 92;
    break;
   }
  case 115:
   {
    n = c[ca >> 2] | 0;
    n = n | 0 ? n : 35515;
    L = 92;
    break;
   }
  case 67:
   {
    c[ha >> 2] = c[ca >> 2];
    c[X >> 2] = 0;
    c[ca >> 2] = ha;
    f = ha;
    r = -1;
    L = 96;
    break;
   }
  case 83:
   {
    f = c[ca >> 2] | 0;
    if (!r) {
     Ve(e, 32, J, 0, H);
     f = 0;
     L = 107;
    } else L = 96;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    p = +h[ca >> 3];
    c[fa >> 2] = 0;
    h[k >> 3] = p;
    if ((c[k + 4 >> 2] | 0) < 0) {
     p = -p;
     F = 1;
     G = 35522;
    } else if (!(H & 2048)) {
     G = H & 1;
     F = G;
     G = (G | 0) == 0 ? 35523 : 35528;
    } else {
     F = 1;
     G = 35525;
    }
    h[k >> 3] = p;
    E = c[k + 4 >> 2] & 2146435072;
    do if (E >>> 0 < 2146435072 | (E | 0) == 2146435072 & 0 < 0) {
     w = +Xe(p, fa) * 2.0;
     n = w != 0.0;
     if (n) c[fa >> 2] = (c[fa >> 2] | 0) + -1;
     B = t | 32;
     if ((B | 0) == 97) {
      u = t & 32;
      x = (u | 0) == 0 ? G : G + 9 | 0;
      v = F | 2;
      f = 12 - r | 0;
      do if (r >>> 0 > 11 | (f | 0) == 0) p = w; else {
       p = 8.0;
       do {
        f = f + -1 | 0;
        p = p * 16.0;
       } while ((f | 0) != 0);
       if ((a[x >> 0] | 0) == 45) {
        p = -(p + (-w - p));
        break;
       } else {
        p = w + p - p;
        break;
       }
      } while (0);
      n = c[fa >> 2] | 0;
      f = (n | 0) < 0 ? 0 - n | 0 : n;
      f = Ue(f, ((f | 0) < 0) << 31 >> 31, _) | 0;
      if ((f | 0) == (_ | 0)) {
       a[aa >> 0] = 48;
       f = aa;
      }
      a[f + -1 >> 0] = (n >> 31 & 2) + 43;
      s = f + -2 | 0;
      a[s >> 0] = t + 15;
      q = (r | 0) < 1;
      o = (H & 8 | 0) == 0;
      n = ea;
      while (1) {
       G = ~~p;
       f = n + 1 | 0;
       a[n >> 0] = d[33597 + G >> 0] | u;
       p = (p - +(G | 0)) * 16.0;
       do if ((f - Y | 0) == 1) {
        if (o & (q & p == 0.0)) break;
        a[f >> 0] = 46;
        f = n + 2 | 0;
       } while (0);
       if (!(p != 0.0)) break; else n = f;
      }
      o = s;
      r = (r | 0) != 0 & (P + f | 0) < (r | 0) ? Q + r - o | 0 : O - o + f | 0;
      q = r + v | 0;
      Ve(e, 32, J, q, H);
      if (!(c[e >> 2] & 32)) Re(x, v, e);
      Ve(e, 48, J, q, H ^ 65536);
      n = f - Y | 0;
      if (!(c[e >> 2] & 32)) Re(ea, n, e);
      f = ba - o | 0;
      Ve(e, 48, r - (n + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Re(s, f, e);
      Ve(e, 32, J, q, H ^ 8192);
      f = (q | 0) < (J | 0) ? J : q;
      break;
     }
     f = (r | 0) < 0 ? 6 : r;
     if (n) {
      n = (c[fa >> 2] | 0) + -28 | 0;
      c[fa >> 2] = n;
      p = w * 268435456.0;
     } else {
      p = w;
      n = c[fa >> 2] | 0;
     }
     E = (n | 0) < 0 ? da : R;
     C = E;
     o = E;
     do {
      A = ~~p >>> 0;
      c[o >> 2] = A;
      o = o + 4 | 0;
      p = (p - +(A >>> 0)) * 1.0e9;
     } while (p != 0.0);
     n = c[fa >> 2] | 0;
     if ((n | 0) > 0) {
      q = E;
      r = o;
      while (1) {
       s = (n | 0) > 29 ? 29 : n;
       n = r + -4 | 0;
       do if (n >>> 0 >= q >>> 0) {
        o = 0;
        do {
         z = Df(c[n >> 2] | 0, 0, s | 0) | 0;
         z = yf(z | 0, D | 0, o | 0, 0) | 0;
         A = D;
         y = Mf(z | 0, A | 0, 1e9, 0) | 0;
         c[n >> 2] = y;
         o = Lf(z | 0, A | 0, 1e9, 0) | 0;
         n = n + -4 | 0;
        } while (n >>> 0 >= q >>> 0);
        if (!o) break;
        q = q + -4 | 0;
        c[q >> 2] = o;
       } while (0);
       o = r;
       while (1) {
        if (o >>> 0 <= q >>> 0) break;
        n = o + -4 | 0;
        if (!(c[n >> 2] | 0)) o = n; else break;
       }
       n = (c[fa >> 2] | 0) - s | 0;
       c[fa >> 2] = n;
       if ((n | 0) > 0) r = o; else break;
      }
     } else q = E;
     if ((n | 0) < 0) {
      x = ((f + 25 | 0) / 9 | 0) + 1 | 0;
      y = (B | 0) == 102;
      do {
       v = 0 - n | 0;
       v = (v | 0) > 9 ? 9 : v;
       do if (q >>> 0 < o >>> 0) {
        n = (1 << v) + -1 | 0;
        r = 1e9 >>> v;
        u = 0;
        s = q;
        do {
         A = c[s >> 2] | 0;
         c[s >> 2] = (A >>> v) + u;
         u = $(A & n, r) | 0;
         s = s + 4 | 0;
        } while (s >>> 0 < o >>> 0);
        n = (c[q >> 2] | 0) == 0 ? q + 4 | 0 : q;
        if (!u) {
         q = n;
         n = o;
         break;
        }
        c[o >> 2] = u;
        q = n;
        n = o + 4 | 0;
       } else {
        q = (c[q >> 2] | 0) == 0 ? q + 4 | 0 : q;
        n = o;
       } while (0);
       o = y ? E : q;
       o = (n - o >> 2 | 0) > (x | 0) ? o + (x << 2) | 0 : n;
       n = (c[fa >> 2] | 0) + v | 0;
       c[fa >> 2] = n;
      } while ((n | 0) < 0);
      x = q;
      y = o;
     } else {
      x = q;
      y = o;
     }
     do if (x >>> 0 < y >>> 0) {
      n = (C - x >> 2) * 9 | 0;
      q = c[x >> 2] | 0;
      if (q >>> 0 < 10) break; else o = 10;
      do {
       o = o * 10 | 0;
       n = n + 1 | 0;
      } while (q >>> 0 >= o >>> 0);
     } else n = 0; while (0);
     z = (B | 0) == 103;
     A = (f | 0) != 0;
     o = f - ((B | 0) != 102 ? n : 0) + ((A & z) << 31 >> 31) | 0;
     if ((o | 0) < (((y - C >> 2) * 9 | 0) + -9 | 0)) {
      r = o + 9216 | 0;
      o = E + 4 + (((r | 0) / 9 | 0) + -1024 << 2) | 0;
      r = ((r | 0) % 9 | 0) + 1 | 0;
      if ((r | 0) < 9) {
       q = 10;
       do {
        q = q * 10 | 0;
        r = r + 1 | 0;
       } while ((r | 0) != 9);
      } else q = 10;
      u = c[o >> 2] | 0;
      v = (u >>> 0) % (q >>> 0) | 0;
      r = (o + 4 | 0) == (y | 0);
      do if (r & (v | 0) == 0) q = x; else {
       w = (((u >>> 0) / (q >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       s = (q | 0) / 2 | 0;
       if (v >>> 0 < s >>> 0) p = .5; else p = r & (v | 0) == (s | 0) ? 1.0 : 1.5;
       do if (F) {
        if ((a[G >> 0] | 0) != 45) break;
        w = -w;
        p = -p;
       } while (0);
       r = u - v | 0;
       c[o >> 2] = r;
       if (!(w + p != w)) {
        q = x;
        break;
       }
       B = r + q | 0;
       c[o >> 2] = B;
       if (B >>> 0 > 999999999) {
        n = x;
        while (1) {
         q = o + -4 | 0;
         c[o >> 2] = 0;
         if (q >>> 0 < n >>> 0) {
          n = n + -4 | 0;
          c[n >> 2] = 0;
         }
         B = (c[q >> 2] | 0) + 1 | 0;
         c[q >> 2] = B;
         if (B >>> 0 > 999999999) o = q; else {
          s = n;
          o = q;
          break;
         }
        }
       } else s = x;
       n = (C - s >> 2) * 9 | 0;
       r = c[s >> 2] | 0;
       if (r >>> 0 < 10) {
        q = s;
        break;
       } else q = 10;
       do {
        q = q * 10 | 0;
        n = n + 1 | 0;
       } while (r >>> 0 >= q >>> 0);
       q = s;
      } while (0);
      o = o + 4 | 0;
      x = q;
      o = y >>> 0 > o >>> 0 ? o : y;
     } else o = y;
     v = 0 - n | 0;
     B = o;
     while (1) {
      if (B >>> 0 <= x >>> 0) {
       y = 0;
       break;
      }
      o = B + -4 | 0;
      if (!(c[o >> 2] | 0)) B = o; else {
       y = 1;
       break;
      }
     }
     do if (z) {
      f = (A & 1 ^ 1) + f | 0;
      if ((f | 0) > (n | 0) & (n | 0) > -5) {
       t = t + -1 | 0;
       f = f + -1 - n | 0;
      } else {
       t = t + -2 | 0;
       f = f + -1 | 0;
      }
      o = H & 8;
      if (o | 0) break;
      do if (y) {
       o = c[B + -4 >> 2] | 0;
       if (!o) {
        q = 9;
        break;
       }
       if (!((o >>> 0) % 10 | 0)) {
        r = 10;
        q = 0;
       } else {
        q = 0;
        break;
       }
       do {
        r = r * 10 | 0;
        q = q + 1 | 0;
       } while (!((o >>> 0) % (r >>> 0) | 0 | 0));
      } else q = 9; while (0);
      o = ((B - C >> 2) * 9 | 0) + -9 | 0;
      if ((t | 32 | 0) == 102) {
       o = o - q | 0;
       o = (o | 0) < 0 ? 0 : o;
       f = (f | 0) < (o | 0) ? f : o;
       o = 0;
       break;
      } else {
       o = o + n - q | 0;
       o = (o | 0) < 0 ? 0 : o;
       f = (f | 0) < (o | 0) ? f : o;
       o = 0;
       break;
      }
     } else o = H & 8; while (0);
     u = f | o;
     r = (u | 0) != 0 & 1;
     s = (t | 32 | 0) == 102;
     if (s) {
      n = (n | 0) > 0 ? n : 0;
      t = 0;
     } else {
      q = (n | 0) < 0 ? v : n;
      q = Ue(q, ((q | 0) < 0) << 31 >> 31, _) | 0;
      if ((ba - q | 0) < 2) do {
       q = q + -1 | 0;
       a[q >> 0] = 48;
      } while ((ba - q | 0) < 2);
      a[q + -1 >> 0] = (n >> 31 & 2) + 43;
      C = q + -2 | 0;
      a[C >> 0] = t;
      n = ba - C | 0;
      t = C;
     }
     v = F + 1 + f + r + n | 0;
     Ve(e, 32, J, v, H);
     if (!(c[e >> 2] & 32)) Re(G, F, e);
     Ve(e, 48, J, v, H ^ 65536);
     do if (s) {
      q = x >>> 0 > E >>> 0 ? E : x;
      o = q;
      do {
       n = Ue(c[o >> 2] | 0, 0, S) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((n | 0) != (S | 0)) break;
        a[U >> 0] = 48;
        n = U;
       } else {
        if (n >>> 0 <= ea >>> 0) break;
        Bf(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Re(n, T - n | 0, e);
       o = o + 4 | 0;
      } while (o >>> 0 <= E >>> 0);
      do if (u | 0) {
       if (c[e >> 2] & 32 | 0) break;
       Re(35557, 1, e);
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < B >>> 0) while (1) {
       n = Ue(c[o >> 2] | 0, 0, S) | 0;
       if (n >>> 0 > ea >>> 0) {
        Bf(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       }
       if (!(c[e >> 2] & 32)) Re(n, (f | 0) > 9 ? 9 : f, e);
       o = o + 4 | 0;
       n = f + -9 | 0;
       if (!((f | 0) > 9 & o >>> 0 < B >>> 0)) {
        f = n;
        break;
       } else f = n;
      }
      Ve(e, 48, f + 9 | 0, 9, 0);
     } else {
      s = y ? B : x + 4 | 0;
      if ((f | 0) > -1) {
       r = (o | 0) == 0;
       q = x;
       do {
        n = Ue(c[q >> 2] | 0, 0, S) | 0;
        if ((n | 0) == (S | 0)) {
         a[U >> 0] = 48;
         n = U;
        }
        do if ((q | 0) == (x | 0)) {
         o = n + 1 | 0;
         if (!(c[e >> 2] & 32)) Re(n, 1, e);
         if (r & (f | 0) < 1) {
          n = o;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          n = o;
          break;
         }
         Re(35557, 1, e);
         n = o;
        } else {
         if (n >>> 0 <= ea >>> 0) break;
         Bf(ea | 0, 48, n + Z | 0) | 0;
         do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
        } while (0);
        o = T - n | 0;
        if (!(c[e >> 2] & 32)) Re(n, (f | 0) > (o | 0) ? o : f, e);
        f = f - o | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < s >>> 0 & (f | 0) > -1);
      }
      Ve(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      Re(t, ba - t | 0, e);
     } while (0);
     Ve(e, 32, J, v, H ^ 8192);
     f = (v | 0) < (J | 0) ? J : v;
    } else {
     s = (t & 32 | 0) != 0;
     r = p != p | 0.0 != 0.0;
     n = r ? 0 : F;
     q = n + 3 | 0;
     Ve(e, 32, J, q, o);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      Re(G, n, e);
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) Re(r ? (s ? 35549 : 35553) : s ? 35541 : 35545, 3, e);
     Ve(e, 32, J, q, H ^ 8192);
     f = (q | 0) < (J | 0) ? J : q;
    } while (0);
    n = f;
    r = K;
    x = I;
    continue a;
   }
  default:
   {
    f = x;
    o = H;
    t = r;
    v = 0;
    u = 33613;
    n = N;
   }
  } while (0);
  g : do if ((L | 0) == 66) {
   o = ca;
   n = c[o >> 2] | 0;
   o = c[o + 4 >> 2] | 0;
   q = t & 32;
   if ((n | 0) == 0 & (o | 0) == 0) {
    f = N;
    n = s;
    s = 0;
    q = 33613;
    L = 79;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[33597 + (n & 15) >> 0] | q;
     n = Cf(n | 0, o | 0, 4) | 0;
     o = D;
    } while (!((n | 0) == 0 & (o | 0) == 0));
    L = ca;
    if ((s & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     n = s;
     s = 0;
     q = 33613;
     L = 79;
    } else {
     n = s;
     s = 2;
     q = 33613 + (t >> 4) | 0;
     L = 79;
    }
   }
  } else if ((L | 0) == 78) {
   f = Ue(f, n, N) | 0;
   n = H;
   s = o;
   L = 79;
  } else if ((L | 0) == 92) {
   L = 0;
   H = Ne(n, 0, r) | 0;
   G = (H | 0) == 0;
   f = n;
   t = G ? r : H - n | 0;
   v = 0;
   u = 33613;
   n = G ? n + r | 0 : H;
  } else if ((L | 0) == 96) {
   L = 0;
   o = 0;
   n = 0;
   s = f;
   while (1) {
    q = c[s >> 2] | 0;
    if (!q) break;
    n = We(ga, q) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   Ve(e, 32, J, o, H);
   if (!o) {
    f = 0;
    L = 107;
   } else {
    q = 0;
    while (1) {
     n = c[f >> 2] | 0;
     if (!n) {
      f = o;
      L = 107;
      break g;
     }
     n = We(ga, n) | 0;
     q = n + q | 0;
     if ((q | 0) > (o | 0)) {
      f = o;
      L = 107;
      break g;
     }
     if (!(c[e >> 2] & 32)) Re(ga, n, e);
     if (q >>> 0 >= o >>> 0) {
      f = o;
      L = 107;
      break;
     } else f = f + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 107) {
   L = 0;
   Ve(e, 32, J, f, H ^ 8192);
   n = (J | 0) > (f | 0) ? J : f;
   r = K;
   x = I;
   continue;
  }
  if ((L | 0) == 79) {
   L = 0;
   o = (r | 0) > -1 ? n & -65537 : n;
   n = ca;
   n = (c[n >> 2] | 0) != 0 | (c[n + 4 >> 2] | 0) != 0;
   if ((r | 0) != 0 | n) {
    t = (n & 1 ^ 1) + (V - f) | 0;
    t = (r | 0) > (t | 0) ? r : t;
    v = s;
    u = q;
    n = N;
   } else {
    f = N;
    t = 0;
    v = s;
    u = q;
    n = N;
   }
  }
  s = n - f | 0;
  q = (t | 0) < (s | 0) ? s : t;
  r = v + q | 0;
  n = (J | 0) < (r | 0) ? r : J;
  Ve(e, 32, n, r, o);
  if (!(c[e >> 2] & 32)) Re(u, v, e);
  Ve(e, 48, n, r, o ^ 65536);
  Ve(e, 48, q, s, 0);
  if (!(c[e >> 2] & 32)) Re(f, s, e);
  Ve(e, 32, n, r, o ^ 8192);
  r = K;
  x = I;
 }
 h : do if ((L | 0) == 254) if (!e) if (!r) m = 0; else {
  m = 1;
  while (1) {
   f = c[l + (m << 2) >> 2] | 0;
   if (!f) {
    f = 0;
    break;
   }
   Te(j + (m << 3) | 0, f, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  while (1) {
   m = m + 1 | 0;
   if (f | 0) {
    m = -1;
    break h;
   }
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
   f = c[l + (m << 2) >> 2] | 0;
  }
 } while (0);
 i = ia;
 return m | 0;
}

function wd(f, h, j) {
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0;
 fa = i;
 i = i + 240 | 0;
 ea = fa + 120 | 0;
 P = fa + 112 | 0;
 A = fa + 104 | 0;
 w = fa + 96 | 0;
 v = fa + 88 | 0;
 r = fa + 80 | 0;
 N = fa + 72 | 0;
 M = fa + 64 | 0;
 H = fa + 56 | 0;
 K = fa + 48 | 0;
 J = fa + 40 | 0;
 I = fa + 32 | 0;
 t = fa + 24 | 0;
 s = fa + 16 | 0;
 q = fa + 8 | 0;
 ba = fa + 188 | 0;
 X = fa + 184 | 0;
 V = fa + 180 | 0;
 W = fa + 176 | 0;
 U = fa + 132 | 0;
 l = fa;
 n = fa + 128 | 0;
 o = h + 24 | 0;
 p = j + 76 | 0;
 be(f, o, p);
 if ((c[f + 4 >> 2] | 0) != -1) {
  i = fa;
  return;
 }
 aa = h + 408 | 0;
 _ = c[aa >> 2] | 0;
 c[aa >> 2] = _ + 1;
 aa = h + 448 | 0;
 $ = c[aa >> 2] | 0;
 ca = b[(c[h + 440 >> 2] | 0) + ($ << 1) >> 1] | 0;
 c[aa >> 2] = $ + 1;
 aa = Df(e[h + 412 >> 1] | 0, 0, 16) | 0;
 _ = _ | D;
 ca = aa | ca & 65535;
 aa = f;
 c[aa >> 2] = ca;
 c[aa + 4 >> 2] = _;
 aa = l;
 c[aa >> 2] = ca;
 c[aa + 4 >> 2] = _;
 c[n >> 2] = c[(c[h >> 2] | 0) + ((c[h + 12 >> 2] | 0) + -1 << 2) >> 2];
 $d(o, p, l, n);
 aa = h + 424 | 0;
 _ = (c[aa >> 2] | 0) + (e[f >> 1] | 0) | 0;
 ca = h + 416 | 0;
 $ = c[ca >> 2] | 0;
 l = $ + (_ * 776 | 0) | 0;
 c[$ + (_ * 776 | 0) + 8 >> 2] = 1;
 da = h + 404 | 0;
 c[$ + (_ * 776 | 0) + 12 >> 2] = c[da >> 2];
 if ((l | 0) != (f | 0)) {
  R = f;
  T = c[R + 4 >> 2] | 0;
  Z = l;
  c[Z >> 2] = c[R >> 2];
  c[Z + 4 >> 2] = T;
 }
 O = $ + (_ * 776 | 0) + 16 | 0;
 n = O;
 l = j;
 x = n + 36 | 0;
 do {
  c[n >> 2] = c[l >> 2];
  n = n + 4 | 0;
  l = l + 4 | 0;
 } while ((n | 0) < (x | 0));
 if ((O | 0) == (j | 0)) {
  l = $ + (_ * 776 | 0) + 64 | 0;
  Z = j + 48 | 0;
  c[l >> 2] = c[Z >> 2];
  c[l + 4 >> 2] = c[Z + 4 >> 2];
  c[l + 8 >> 2] = c[Z + 8 >> 2];
  c[l + 12 >> 2] = c[Z + 12 >> 2];
  c[l + 16 >> 2] = c[Z + 16 >> 2];
  c[l + 20 >> 2] = c[Z + 20 >> 2];
  c[l + 24 >> 2] = c[Z + 24 >> 2];
  l = c[j + 80 >> 2] | 0;
 } else {
  T = j + 40 | 0;
  R = c[T + 4 >> 2] | 0;
  l = $ + (_ * 776 | 0) + 56 | 0;
  c[l >> 2] = c[T >> 2];
  c[l + 4 >> 2] = R;
  l = $ + (_ * 776 | 0) + 64 | 0;
  R = j + 48 | 0;
  c[l >> 2] = c[R >> 2];
  c[l + 4 >> 2] = c[R + 4 >> 2];
  c[l + 8 >> 2] = c[R + 8 >> 2];
  c[l + 12 >> 2] = c[R + 12 >> 2];
  c[l + 16 >> 2] = c[R + 16 >> 2];
  c[l + 20 >> 2] = c[R + 20 >> 2];
  c[l + 24 >> 2] = c[R + 24 >> 2];
  l = $ + (_ * 776 | 0) + 92 | 0;
  c[l >> 2] = 0;
  Be(l, j + 76 | 0);
  l = c[j + 80 >> 2] | 0;
  R = j + 88 | 0;
  T = c[R + 4 >> 2] | 0;
  Z = $ + (_ * 776 | 0) + 104 | 0;
  c[Z >> 2] = c[R >> 2];
  c[Z + 4 >> 2] = T;
 }
 Z = $ + (_ * 776 | 0) + 96 | 0;
 c[Z >> 2] = l;
 xd($ + (_ * 776 | 0) + 112 | 0, j + 96 | 0);
 R = $ + (_ * 776 | 0) + 696 | 0;
 l = a[j + 680 >> 0] | 0;
 a[R >> 0] = l;
 T = h + 208 | 0;
 a : do if (!(l & 8)) if (!(l & 4)) m = 6; else {
  s = $ + (_ * 776 | 0) + 24 | 0;
  j = c[s >> 2] | 0;
  t = $ + (_ * 776 | 0) + 28 | 0;
  h = c[t >> 2] | 0;
  u = $ + (_ * 776 | 0) + 20 | 0;
  switch (c[u >> 2] | 0) {
  case 0:
   {
    Y = 3553;
    break;
   }
  case 2:
   {
    Y = 34067;
    break;
   }
  default:
   {
    pe(19969, r);
    eb();
   }
  }
  r = $ + (_ * 776 | 0) + 44 | 0;
  n = c[r >> 2] | 0;
  do switch (n | 0) {
  case 6:
  case 5:
  case 2:
  case 4:
  case 0:
   {
    Q = 6408;
    break;
   }
  case 3:
  case 1:
   {
    l = 6407;
    S = 96;
    break;
   }
  case 7:
   {
    l = 6409;
    S = 96;
    break;
   }
  case 11:
   {
    l = 6402;
    S = 96;
    break;
   }
  case 12:
   {
    l = 34041;
    S = 96;
    break;
   }
  case 8:
   {
    l = 33777;
    S = 96;
    break;
   }
  case 9:
   {
    l = 33778;
    S = 96;
    break;
   }
  case 10:
   {
    l = 33779;
    S = 96;
    break;
   }
  case 13:
   {
    l = 35841;
    S = 96;
    break;
   }
  case 14:
   {
    l = 35840;
    S = 96;
    break;
   }
  case 15:
   {
    l = 35843;
    S = 96;
    break;
   }
  case 16:
   {
    l = 35842;
    S = 96;
    break;
   }
  case 17:
   {
    l = 37492;
    S = 96;
    break;
   }
  case 18:
   {
    l = 37493;
    S = 96;
    break;
   }
  default:
   {
    pe(19690, v);
    eb();
   }
  } while (0);
  if ((S | 0) == 96) Q = l;
  b : do switch (n | 0) {
  case 5:
   {
    m = 6408;
    k = 5126;
    break;
   }
  case 6:
   {
    m = 6408;
    k = 5131;
    break;
   }
  case 7:
  case 1:
  case 0:
   {
    do switch (n | 0) {
    case 6:
    case 5:
    case 2:
    case 4:
    case 0:
     {
      m = 6408;
      k = 5121;
      S = 117;
      break b;
     }
    case 3:
    case 1:
     {
      m = 6407;
      k = 5121;
      S = 116;
      break b;
     }
    case 11:
     {
      k = 5121;
      S = 104;
      break b;
     }
    case 12:
     {
      k = 5121;
      S = 105;
      break b;
     }
    case 7:
     {
      m = 6409;
      k = 5121;
      S = 116;
      break b;
     }
    case 8:
     {
      m = 33777;
      k = 5121;
      S = 116;
      break b;
     }
    case 9:
     {
      m = 33778;
      k = 5121;
      S = 116;
      break b;
     }
    case 10:
     {
      m = 33779;
      k = 5121;
      S = 116;
      break b;
     }
    case 13:
     {
      m = 35841;
      k = 5121;
      S = 116;
      break b;
     }
    case 14:
     {
      m = 35840;
      k = 5121;
      S = 116;
      break b;
     }
    case 15:
     {
      m = 35843;
      k = 5121;
      S = 116;
      break b;
     }
    case 16:
     {
      m = 35842;
      k = 5121;
      S = 116;
      break b;
     }
    case 17:
     {
      m = 37492;
      k = 5121;
      S = 116;
      break b;
     }
    case 18:
     {
      m = 37493;
      k = 5121;
      S = 116;
      break b;
     }
    default:
     {
      pe(19690, A);
      eb();
     }
    } while (0);
    break;
   }
  case 4:
   {
    m = 6408;
    k = 32820;
    break;
   }
  case 3:
   {
    m = 6407;
    k = 33635;
    S = 116;
    break;
   }
  case 2:
   {
    m = 6408;
    k = 32819;
    break;
   }
  case 11:
   {
    k = 5123;
    S = 104;
    break;
   }
  case 12:
   {
    k = 34042;
    S = 105;
    break;
   }
  default:
   {
    pe(19737, w);
    eb();
   }
  } while (0);
  if ((S | 0) == 104) {
   m = 6402;
   S = 116;
  } else if ((S | 0) == 105) {
   m = 34041;
   S = 116;
  }
  if ((S | 0) == 116) S = 117;
  c : do if ((S | 0) == 117) {
   l = n + -8 | 0;
   if (l >>> 0 < 11) if (2023 >>> (l & 2047) & 1) {
    switch (n | 0) {
    case 10:
    case 9:
    case 8:
     {
      if (a[36448] | 0) break c;
      break;
     }
    case 16:
    case 15:
    case 14:
    case 13:
     {
      if (a[36449] | 0) break c;
      break;
     }
    default:
     {}
    }
    m = c[$ + (_ * 776 | 0) + 92 >> 2] | 0;
    c[P >> 2] = c[((m | 0) == 0 ? 1612 : m + 12 | 0) >> 2];
    oe(19626, P);
    m = 4;
    break a;
   }
  } while (0);
  o = $ + (_ * 776 | 0) + 764 | 0;
  a[o >> 0] = (c[O >> 2] | 0) == 2 ? 2 : 1;
  q = $ + (_ * 776 | 0) + 40 | 0;
  p = 0;
  do {
   n = (c[T >> 2] | 0) + 304 | 0;
   x = n + 128 | 0;
   do {
    c[n >> 2] = 0;
    n = n + 4 | 0;
   } while ((n | 0) < (x | 0));
   c[ba >> 2] = 0;
   fb(1, ba | 0);
   Ib(33984);
   Bb(Y | 0, c[ba >> 2] | 0);
   c[$ + (_ * 776 | 0) + 768 + (p << 2) >> 2] = c[ba >> 2];
   Od(O);
   l = c[q >> 2] | 0;
   if ((l | 0) > 0) {
    n = 0;
    do {
     W = j >> n;
     X = h >> n;
     Qb(Y | 0, n | 0, m | 0, ((W | 0) == 0 ? 1 : W) | 0, ((X | 0) == 0 ? 1 : X) | 0, 0, Q | 0, k | 0, 0);
     n = n + 1 | 0;
    } while ((n | 0) != (l | 0));
   }
   p = p + 1 | 0;
  } while ((p | 0) < (d[o >> 0] | 0));
  c[ba >> 2] = 0;
  j = ba + 4 | 0;
  c[j >> 2] = -2;
  h = ba + 8 | 0;
  c[h >> 2] = -1;
  l = ba + 12 | 0;
  c[l >> 2] = 20;
  c[ba + 16 >> 2] = 20;
  m = ba + 20 | 0;
  c[m >> 2] = -1;
  n = ba + 24 | 0;
  c[n >> 2] = 0;
  o = ba + 28 | 0;
  c[o >> 2] = 0;
  c[ba + 32 >> 2] = 0;
  p = ba + 36 | 0;
  c[p >> 2] = 1;
  a[ba + 40 >> 0] = 0;
  a[ba + 41 >> 0] = 0;
  a[ba + 42 >> 0] = 0;
  k = $ + (_ * 776 | 0) + 92 | 0;
  if ((k | 0) != (ba | 0)) {
   c[ba >> 2] = 0;
   Be(ba, k);
  }
  k = c[Z >> 2] | 0;
  c[j >> 2] = k;
  c[h >> 2] = c[u >> 2];
  c[l >> 2] = c[r >> 2];
  c[m >> 2] = c[$ + (_ * 776 | 0) + 16 >> 2];
  c[n >> 2] = c[s >> 2];
  c[o >> 2] = c[t >> 2];
  c[p >> 2] = c[q >> 2];
  l = $ + (_ * 776 | 0) + 704 | 0;
  if ((ba | 0) != (l | 0)) {
   c[l >> 2] = 0;
   Be(l, ba);
   k = c[j >> 2] | 0;
  }
  c[$ + (_ * 776 | 0) + 708 >> 2] = k;
  m = $ + (_ * 776 | 0) + 712 | 0;
  c[m >> 2] = c[h >> 2];
  c[m + 4 >> 2] = c[h + 4 >> 2];
  c[m + 8 >> 2] = c[h + 8 >> 2];
  c[m + 12 >> 2] = c[h + 12 >> 2];
  c[m + 16 >> 2] = c[h + 16 >> 2];
  c[m + 20 >> 2] = c[h + 20 >> 2];
  c[m + 24 >> 2] = c[h + 24 >> 2];
  c[m + 28 >> 2] = c[h + 28 >> 2];
  b[m + 32 >> 1] = b[h + 32 >> 1] | 0;
  a[m + 34 >> 0] = a[h + 34 >> 0] | 0;
  c[$ + (_ * 776 | 0) + 748 >> 2] = Y;
  m = 3;
 } else {
  n = (c[T >> 2] | 0) + 304 | 0;
  x = n + 128 | 0;
  do {
   c[n >> 2] = 0;
   n = n + 4 | 0;
  } while ((n | 0) < (x | 0));
  c[ba >> 2] = 0;
  gb(36006, ba | 0);
  k = a[R >> 0] | 0;
  do if (!(k & 16)) if (!(k & 32)) {
   v = c[$ + (_ * 776 | 0) + 28 >> 2] | 0;
   w = c[$ + (_ * 776 | 0) + 24 >> 2] | 0;
   break;
  } else {
   Y = c[h + 228 >> 2] | 0;
   w = (c[Y + 24 >> 2] | 0) + (e[$ + (_ * 776 | 0) + 56 >> 1] | 0) | 0;
   Y = c[Y + 16 >> 2] | 0;
   v = c[Y + (w * 776 | 0) + 732 >> 2] | 0;
   w = c[Y + (w * 776 | 0) + 728 >> 2] | 0;
   break;
  } else {
   w = c[h + 212 >> 2] | 0;
   v = ~~(+(c[w + 136 >> 2] | 0) * +g[$ + (_ * 776 | 0) + 36 >> 2]);
   w = ~~(+(c[w + 132 >> 2] | 0) * +g[$ + (_ * 776 | 0) + 32 >> 2]);
  } while (0);
  c[X >> 2] = 0;
  rb(1, X | 0);
  qb(36160, c[X >> 2] | 0);
  u = $ + (_ * 776 | 0) + 44 | 0;
  l = c[u >> 2] | 0;
  do switch (l | 0) {
  case 6:
  case 5:
  case 2:
  case 4:
  case 0:
   {
    B = 6408;
    break;
   }
  case 3:
  case 1:
   {
    k = 6407;
    S = 27;
    break;
   }
  case 7:
   {
    k = 6409;
    S = 27;
    break;
   }
  case 11:
   {
    k = 6402;
    S = 27;
    break;
   }
  case 12:
   {
    k = 34041;
    S = 27;
    break;
   }
  case 8:
   {
    k = 33777;
    S = 27;
    break;
   }
  case 9:
   {
    k = 33778;
    S = 27;
    break;
   }
  case 10:
   {
    k = 33779;
    S = 27;
    break;
   }
  case 13:
   {
    k = 35841;
    S = 27;
    break;
   }
  case 14:
   {
    k = 35840;
    S = 27;
    break;
   }
  case 15:
   {
    k = 35843;
    S = 27;
    break;
   }
  case 16:
   {
    k = 35842;
    S = 27;
    break;
   }
  case 17:
   {
    k = 37492;
    S = 27;
    break;
   }
  case 18:
   {
    k = 37493;
    S = 27;
    break;
   }
  default:
   {
    pe(19690, q);
    eb();
   }
  } while (0);
  if ((S | 0) == 27) B = k;
  switch (l | 0) {
  case 6:
  case 5:
  case 2:
  case 4:
  case 0:
   {
    k = 6408;
    S = 31;
    break;
   }
  case 3:
  case 1:
   {
    k = 6407;
    S = 31;
    break;
   }
  case 7:
   {
    k = 6409;
    S = 33;
    break;
   }
  case 11:
   {
    k = 6402;
    S = 37;
    break;
   }
  case 12:
   {
    k = 34041;
    S = 38;
    break;
   }
  case 18:
  case 17:
  case 16:
  case 15:
  case 14:
  case 13:
  case 10:
  case 9:
  case 8:
   {
    pe(19737, t);
    eb();
    break;
   }
  default:
   {
    pe(19690, s);
    eb();
   }
  }
  d : do if ((S | 0) == 31) switch (l | 0) {
  case 5:
   {
    y = k;
    z = 5126;
    break d;
   }
  case 7:
  case 1:
  case 0:
   {
    S = 33;
    break d;
   }
  case 11:
   {
    S = 37;
    break d;
   }
  case 12:
   {
    S = 38;
    break d;
   }
  case 6:
   {
    y = k;
    z = 5131;
    break d;
   }
  case 4:
   {
    y = k;
    z = 32820;
    break d;
   }
  case 3:
   {
    y = k;
    z = 33635;
    break d;
   }
  case 2:
   {
    y = k;
    z = 32819;
    break d;
   }
  default:
   {
    pe(19737, t);
    eb();
   }
  } while (0);
  if ((S | 0) == 33) {
   y = k;
   z = 5121;
  } else if ((S | 0) == 37) {
   y = k;
   z = 5123;
  } else if ((S | 0) == 38) {
   y = k;
   z = 34042;
  }
  c[V >> 2] = 0;
  fb(1, V | 0);
  Ib(33984);
  Bb(3553, c[V >> 2] | 0);
  k = $ + (_ * 776 | 0) + 64 | 0;
  switch ((e[k >> 1] | 0) >>> 9 & 7 | 0) {
  case 0:
   {
    C = 9728;
    break;
   }
  case 1:
   {
    C = 9729;
    break;
   }
  case 2:
   {
    C = 9984;
    break;
   }
  case 3:
   {
    C = 9986;
    break;
   }
  case 4:
   {
    C = 9985;
    break;
   }
  case 5:
   {
    C = 9987;
    break;
   }
  default:
   {
    pe(19879, I);
    eb();
   }
  }
  pc(3553, 10241, C | 0);
  switch ((e[k >> 1] | 0) >>> 6 & 7 | 0) {
  case 0:
   {
    E = 9728;
    break;
   }
  case 1:
   {
    E = 9729;
    break;
   }
  case 2:
   {
    E = 9984;
    break;
   }
  case 3:
   {
    E = 9986;
    break;
   }
  case 4:
   {
    E = 9985;
    break;
   }
  case 5:
   {
    E = 9987;
    break;
   }
  default:
   {
    pe(19879, J);
    eb();
   }
  }
  pc(3553, 10240, E | 0);
  switch (b[k >> 1] & 3 | 0) {
  case 0:
   {
    F = 33071;
    break;
   }
  case 1:
   {
    F = 10497;
    break;
   }
  case 2:
   {
    F = 33648;
    break;
   }
  default:
   {
    pe(19925, K);
    eb();
   }
  }
  pc(3553, 10242, F | 0);
  switch ((e[k >> 1] | 0) >>> 2 & 3 | 0) {
  case 0:
   {
    G = 33071;
    break;
   }
  case 1:
   {
    G = 10497;
    break;
   }
  case 2:
   {
    G = 33648;
    break;
   }
  default:
   {
    pe(19925, H);
    eb();
   }
  }
  pc(3553, 10243, G | 0);
  Qb(3553, 0, y | 0, w | 0, v | 0, 0, B | 0, z | 0, 0);
  jc(36160, 36064, 3553, c[V >> 2] | 0, 0);
  c[W >> 2] = 0;
  if (!(a[R >> 0] & 32)) {
   if ((c[$ + (_ * 776 | 0) + 48 >> 2] | 0) != 20) {
    sa(1, W | 0);
    Ta(36161, c[W >> 2] | 0);
    k = $ + (_ * 776 | 0) + 48 | 0;
    switch (c[k >> 2] | 0) {
    case 11:
     {
      L = 33189;
      break;
     }
    case 12:
     {
      L = 35056;
      break;
     }
    default:
     {
      pe(19782, M);
      eb();
     }
    }
    dc(36161, L | 0, w | 0, v | 0);
    Ka(36160, 36096, 36161, c[W >> 2] | 0);
    if ((c[k >> 2] | 0) == 12) Ka(36160, 36128, 36161, c[W >> 2] | 0);
   }
  } else {
   k = c[189] | 0;
   Ka(36160, 36096, 36161, k | 0);
   if ((c[12] | 0) == 12) Ka(36160, 36128, 36161, k | 0);
  }
  if ((vb(36160) | 0) != 36053) oe(19546, N);
  n = (c[T >> 2] | 0) + 304 | 0;
  x = n + 128 | 0;
  do {
   c[n >> 2] = 0;
   n = n + 4 | 0;
  } while ((n | 0) < (x | 0));
  c[U >> 2] = 0;
  s = U + 4 | 0;
  c[s >> 2] = -2;
  t = U + 8 | 0;
  c[t >> 2] = -1;
  l = U + 12 | 0;
  c[l >> 2] = 20;
  m = U + 16 | 0;
  c[m >> 2] = 20;
  n = U + 20 | 0;
  c[n >> 2] = -1;
  o = U + 24 | 0;
  c[o >> 2] = 0;
  p = U + 28 | 0;
  c[p >> 2] = 0;
  c[U + 32 >> 2] = 0;
  j = U + 36 | 0;
  c[j >> 2] = 1;
  h = U + 40 | 0;
  a[h >> 0] = 0;
  q = U + 41 | 0;
  a[q >> 0] = 0;
  r = U + 42 | 0;
  a[r >> 0] = 0;
  k = $ + (_ * 776 | 0) + 92 | 0;
  if ((k | 0) != (U | 0)) {
   c[U >> 2] = 0;
   Be(U, k);
  }
  k = c[Z >> 2] | 0;
  c[s >> 2] = k;
  c[t >> 2] = 0;
  c[l >> 2] = c[u >> 2];
  l = c[$ + (_ * 776 | 0) + 48 >> 2] | 0;
  c[m >> 2] = l;
  c[n >> 2] = 0;
  c[o >> 2] = w;
  c[p >> 2] = v;
  c[j >> 2] = 1;
  a[h >> 0] = 1;
  a[q >> 0] = (a[R >> 0] & 32) == 0 ? (l | 0) != 20 & 1 : 1;
  a[r >> 0] = (d[R >> 0] | 0) >>> 5 & 1;
  l = $ + (_ * 776 | 0) + 704 | 0;
  if ((U | 0) != (l | 0)) {
   c[l >> 2] = 0;
   Be(l, U);
   k = c[s >> 2] | 0;
  }
  c[$ + (_ * 776 | 0) + 708 >> 2] = k;
  m = $ + (_ * 776 | 0) + 712 | 0;
  c[m >> 2] = c[t >> 2];
  c[m + 4 >> 2] = c[t + 4 >> 2];
  c[m + 8 >> 2] = c[t + 8 >> 2];
  c[m + 12 >> 2] = c[t + 12 >> 2];
  c[m + 16 >> 2] = c[t + 16 >> 2];
  c[m + 20 >> 2] = c[t + 20 >> 2];
  c[m + 24 >> 2] = c[t + 24 >> 2];
  c[m + 28 >> 2] = c[t + 28 >> 2];
  b[m + 32 >> 1] = b[t + 32 >> 1] | 0;
  a[m + 34 >> 0] = a[t + 34 >> 0] | 0;
  c[$ + (_ * 776 | 0) + 768 >> 2] = c[V >> 2];
  c[$ + (_ * 776 | 0) + 752 >> 2] = c[X >> 2];
  c[$ + (_ * 776 | 0) + 756 >> 2] = c[W >> 2];
  c[$ + (_ * 776 | 0) + 748 >> 2] = 3553;
  qb(36160, c[ba >> 2] | 0);
  m = 3;
 } while (0);
 n = c[f >> 2] | 0;
 o = n & 65535;
 l = (c[aa >> 2] | 0) + o | 0;
 k = c[ca >> 2] | 0;
 ca = f;
 f = k + (l * 776 | 0) | 0;
 if ((c[ca >> 2] | 0) == (c[f >> 2] | 0) ? (c[ca + 4 >> 2] | 0) == (c[f + 4 >> 2] | 0) : 0) {
  c[k + (l * 776 | 0) + 8 >> 2] = m;
  c[k + (l * 776 | 0) + 12 >> 2] = c[da >> 2];
  i = fa;
  return;
 } else {
  c[ea >> 2] = n >>> 16;
  c[ea + 4 >> 2] = o;
  oe(19098, ea);
  i = fa;
  return;
 }
}

function Dd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 d = f;
 c[d >> 2] = 0;
 Be(b, d);
 c[b + 4 >> 2] = -1;
 Bf(b + 8 | 0, 0, 248) | 0;
 a[b + 258 >> 0] = 17;
 a[b + 259 >> 0] = 13;
 a[b + 260 >> 0] = 17;
 a[b + 261 >> 0] = 13;
 a[b + 262 >> 0] = 17;
 a[b + 263 >> 0] = 13;
 a[b + 264 >> 0] = 17;
 a[b + 265 >> 0] = 13;
 a[b + 266 >> 0] = 17;
 a[b + 267 >> 0] = 13;
 a[b + 268 >> 0] = 17;
 a[b + 269 >> 0] = 13;
 a[b + 270 >> 0] = 17;
 a[b + 271 >> 0] = 13;
 a[b + 272 >> 0] = 17;
 a[b + 273 >> 0] = 13;
 a[b + 274 >> 0] = 17;
 a[b + 275 >> 0] = 13;
 a[b + 276 >> 0] = 17;
 a[b + 277 >> 0] = 13;
 a[b + 278 >> 0] = 17;
 a[b + 279 >> 0] = 13;
 a[b + 280 >> 0] = 17;
 a[b + 281 >> 0] = 13;
 a[b + 282 >> 0] = 17;
 a[b + 283 >> 0] = 13;
 a[b + 284 >> 0] = 17;
 a[b + 285 >> 0] = 13;
 a[b + 286 >> 0] = 17;
 a[b + 287 >> 0] = 13;
 a[b + 288 >> 0] = 17;
 a[b + 289 >> 0] = 13;
 a[b + 256 >> 0] = 0;
 a[b + 257 >> 0] = 1;
 a[b + 322 >> 0] = 0;
 a[b + 323 >> 0] = 0;
 d = b + 290 | 0;
 e = b + 306 | 0;
 g = e + 16 | 0;
 do {
  a[e >> 0] = 255;
  e = e + 1 | 0;
 } while ((e | 0) < (g | 0));
 e = d;
 g = e + 16 | 0;
 do {
  a[e >> 0] = 0;
  e = e + 1 | 0;
 } while ((e | 0) < (g | 0));
 c[b + 324 >> 2] = 0;
 c[b + 328 >> 2] = 0;
 g = b + 336 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 356 >> 0] = 10;
 c[b + 360 >> 2] = 1;
 c[b + 364 >> 2] = 0;
 a[b + 368 >> 0] = 10;
 c[b + 372 >> 2] = 1;
 c[b + 376 >> 2] = 0;
 a[b + 380 >> 0] = 10;
 c[b + 384 >> 2] = 1;
 c[b + 388 >> 2] = 0;
 a[b + 392 >> 0] = 10;
 c[b + 396 >> 2] = 1;
 c[b + 400 >> 2] = 0;
 a[b + 404 >> 0] = 10;
 c[b + 408 >> 2] = 1;
 c[b + 412 >> 2] = 0;
 a[b + 416 >> 0] = 10;
 c[b + 420 >> 2] = 1;
 c[b + 424 >> 2] = 0;
 a[b + 428 >> 0] = 10;
 c[b + 432 >> 2] = 1;
 c[b + 436 >> 2] = 0;
 a[b + 440 >> 0] = 10;
 c[b + 444 >> 2] = 1;
 c[b + 448 >> 2] = 0;
 a[b + 452 >> 0] = 10;
 c[b + 456 >> 2] = 1;
 c[b + 460 >> 2] = 0;
 a[b + 464 >> 0] = 10;
 c[b + 468 >> 2] = 1;
 c[b + 472 >> 2] = 0;
 a[b + 476 >> 0] = 10;
 c[b + 480 >> 2] = 1;
 c[b + 484 >> 2] = 0;
 a[b + 488 >> 0] = 10;
 c[b + 492 >> 2] = 1;
 c[b + 496 >> 2] = 0;
 a[b + 500 >> 0] = 10;
 c[b + 504 >> 2] = 1;
 c[b + 508 >> 2] = 0;
 a[b + 512 >> 0] = 10;
 c[b + 516 >> 2] = 1;
 c[b + 520 >> 2] = 0;
 a[b + 524 >> 0] = 10;
 c[b + 528 >> 2] = 1;
 c[b + 532 >> 2] = 0;
 a[b + 536 >> 0] = 10;
 c[b + 540 >> 2] = 1;
 c[b + 608 >> 2] = -1;
 c[b + 612 >> 2] = -1;
 c[b + 616 >> 2] = 0;
 g = b + 624 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 644 >> 0] = 10;
 c[b + 648 >> 2] = 1;
 c[b + 652 >> 2] = 0;
 a[b + 656 >> 0] = 10;
 c[b + 660 >> 2] = 1;
 c[b + 664 >> 2] = 0;
 a[b + 668 >> 0] = 10;
 c[b + 672 >> 2] = 1;
 c[b + 676 >> 2] = 0;
 a[b + 680 >> 0] = 10;
 c[b + 684 >> 2] = 1;
 c[b + 688 >> 2] = 0;
 a[b + 692 >> 0] = 10;
 c[b + 696 >> 2] = 1;
 c[b + 700 >> 2] = 0;
 a[b + 704 >> 0] = 10;
 c[b + 708 >> 2] = 1;
 c[b + 712 >> 2] = 0;
 a[b + 716 >> 0] = 10;
 c[b + 720 >> 2] = 1;
 c[b + 724 >> 2] = 0;
 a[b + 728 >> 0] = 10;
 c[b + 732 >> 2] = 1;
 c[b + 736 >> 2] = 0;
 a[b + 740 >> 0] = 10;
 c[b + 744 >> 2] = 1;
 c[b + 748 >> 2] = 0;
 a[b + 752 >> 0] = 10;
 c[b + 756 >> 2] = 1;
 c[b + 760 >> 2] = 0;
 a[b + 764 >> 0] = 10;
 c[b + 768 >> 2] = 1;
 c[b + 772 >> 2] = 0;
 a[b + 776 >> 0] = 10;
 c[b + 780 >> 2] = 1;
 c[b + 784 >> 2] = 0;
 a[b + 788 >> 0] = 10;
 c[b + 792 >> 2] = 1;
 c[b + 796 >> 2] = 0;
 a[b + 800 >> 0] = 10;
 c[b + 804 >> 2] = 1;
 c[b + 808 >> 2] = 0;
 a[b + 812 >> 0] = 10;
 c[b + 816 >> 2] = 1;
 c[b + 820 >> 2] = 0;
 a[b + 824 >> 0] = 10;
 c[b + 828 >> 2] = 1;
 c[b + 896 >> 2] = -1;
 c[b + 900 >> 2] = -1;
 c[b + 904 >> 2] = 0;
 g = b + 912 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 932 >> 0] = 10;
 c[b + 936 >> 2] = 1;
 c[b + 940 >> 2] = 0;
 a[b + 944 >> 0] = 10;
 c[b + 948 >> 2] = 1;
 c[b + 952 >> 2] = 0;
 a[b + 956 >> 0] = 10;
 c[b + 960 >> 2] = 1;
 c[b + 964 >> 2] = 0;
 a[b + 968 >> 0] = 10;
 c[b + 972 >> 2] = 1;
 c[b + 976 >> 2] = 0;
 a[b + 980 >> 0] = 10;
 c[b + 984 >> 2] = 1;
 c[b + 988 >> 2] = 0;
 a[b + 992 >> 0] = 10;
 c[b + 996 >> 2] = 1;
 c[b + 1e3 >> 2] = 0;
 a[b + 1004 >> 0] = 10;
 c[b + 1008 >> 2] = 1;
 c[b + 1012 >> 2] = 0;
 a[b + 1016 >> 0] = 10;
 c[b + 1020 >> 2] = 1;
 c[b + 1024 >> 2] = 0;
 a[b + 1028 >> 0] = 10;
 c[b + 1032 >> 2] = 1;
 c[b + 1036 >> 2] = 0;
 a[b + 1040 >> 0] = 10;
 c[b + 1044 >> 2] = 1;
 c[b + 1048 >> 2] = 0;
 a[b + 1052 >> 0] = 10;
 c[b + 1056 >> 2] = 1;
 c[b + 1060 >> 2] = 0;
 a[b + 1064 >> 0] = 10;
 c[b + 1068 >> 2] = 1;
 c[b + 1072 >> 2] = 0;
 a[b + 1076 >> 0] = 10;
 c[b + 1080 >> 2] = 1;
 c[b + 1084 >> 2] = 0;
 a[b + 1088 >> 0] = 10;
 c[b + 1092 >> 2] = 1;
 c[b + 1096 >> 2] = 0;
 a[b + 1100 >> 0] = 10;
 c[b + 1104 >> 2] = 1;
 c[b + 1108 >> 2] = 0;
 a[b + 1112 >> 0] = 10;
 c[b + 1116 >> 2] = 1;
 c[b + 1184 >> 2] = -1;
 c[b + 1188 >> 2] = -1;
 c[b + 1192 >> 2] = 0;
 g = b + 1200 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 1220 >> 0] = 10;
 c[b + 1224 >> 2] = 1;
 c[b + 1228 >> 2] = 0;
 a[b + 1232 >> 0] = 10;
 c[b + 1236 >> 2] = 1;
 c[b + 1240 >> 2] = 0;
 a[b + 1244 >> 0] = 10;
 c[b + 1248 >> 2] = 1;
 c[b + 1252 >> 2] = 0;
 a[b + 1256 >> 0] = 10;
 c[b + 1260 >> 2] = 1;
 c[b + 1264 >> 2] = 0;
 a[b + 1268 >> 0] = 10;
 c[b + 1272 >> 2] = 1;
 c[b + 1276 >> 2] = 0;
 a[b + 1280 >> 0] = 10;
 c[b + 1284 >> 2] = 1;
 c[b + 1288 >> 2] = 0;
 a[b + 1292 >> 0] = 10;
 c[b + 1296 >> 2] = 1;
 c[b + 1300 >> 2] = 0;
 a[b + 1304 >> 0] = 10;
 c[b + 1308 >> 2] = 1;
 c[b + 1312 >> 2] = 0;
 a[b + 1316 >> 0] = 10;
 c[b + 1320 >> 2] = 1;
 c[b + 1324 >> 2] = 0;
 a[b + 1328 >> 0] = 10;
 c[b + 1332 >> 2] = 1;
 c[b + 1336 >> 2] = 0;
 a[b + 1340 >> 0] = 10;
 c[b + 1344 >> 2] = 1;
 c[b + 1348 >> 2] = 0;
 a[b + 1352 >> 0] = 10;
 c[b + 1356 >> 2] = 1;
 c[b + 1360 >> 2] = 0;
 a[b + 1364 >> 0] = 10;
 c[b + 1368 >> 2] = 1;
 c[b + 1372 >> 2] = 0;
 a[b + 1376 >> 0] = 10;
 c[b + 1380 >> 2] = 1;
 c[b + 1384 >> 2] = 0;
 a[b + 1388 >> 0] = 10;
 c[b + 1392 >> 2] = 1;
 c[b + 1396 >> 2] = 0;
 a[b + 1400 >> 0] = 10;
 c[b + 1404 >> 2] = 1;
 c[b + 1472 >> 2] = -1;
 c[b + 1476 >> 2] = -1;
 c[b + 1480 >> 2] = 0;
 g = b + 1488 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 1508 >> 0] = 10;
 c[b + 1512 >> 2] = 1;
 c[b + 1516 >> 2] = 0;
 a[b + 1520 >> 0] = 10;
 c[b + 1524 >> 2] = 1;
 c[b + 1528 >> 2] = 0;
 a[b + 1532 >> 0] = 10;
 c[b + 1536 >> 2] = 1;
 c[b + 1540 >> 2] = 0;
 a[b + 1544 >> 0] = 10;
 c[b + 1548 >> 2] = 1;
 c[b + 1552 >> 2] = 0;
 a[b + 1556 >> 0] = 10;
 c[b + 1560 >> 2] = 1;
 c[b + 1564 >> 2] = 0;
 a[b + 1568 >> 0] = 10;
 c[b + 1572 >> 2] = 1;
 c[b + 1576 >> 2] = 0;
 a[b + 1580 >> 0] = 10;
 c[b + 1584 >> 2] = 1;
 c[b + 1588 >> 2] = 0;
 a[b + 1592 >> 0] = 10;
 c[b + 1596 >> 2] = 1;
 c[b + 1600 >> 2] = 0;
 a[b + 1604 >> 0] = 10;
 c[b + 1608 >> 2] = 1;
 c[b + 1612 >> 2] = 0;
 a[b + 1616 >> 0] = 10;
 c[b + 1620 >> 2] = 1;
 c[b + 1624 >> 2] = 0;
 a[b + 1628 >> 0] = 10;
 c[b + 1632 >> 2] = 1;
 c[b + 1636 >> 2] = 0;
 a[b + 1640 >> 0] = 10;
 c[b + 1644 >> 2] = 1;
 c[b + 1648 >> 2] = 0;
 a[b + 1652 >> 0] = 10;
 c[b + 1656 >> 2] = 1;
 c[b + 1660 >> 2] = 0;
 a[b + 1664 >> 0] = 10;
 c[b + 1668 >> 2] = 1;
 c[b + 1672 >> 2] = 0;
 a[b + 1676 >> 0] = 10;
 c[b + 1680 >> 2] = 1;
 c[b + 1684 >> 2] = 0;
 a[b + 1688 >> 0] = 10;
 c[b + 1692 >> 2] = 1;
 c[b + 1760 >> 2] = -1;
 c[b + 1764 >> 2] = -1;
 c[b + 1768 >> 2] = 0;
 g = b + 1776 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 1796 >> 0] = 10;
 c[b + 1800 >> 2] = 1;
 c[b + 1804 >> 2] = 0;
 a[b + 1808 >> 0] = 10;
 c[b + 1812 >> 2] = 1;
 c[b + 1816 >> 2] = 0;
 a[b + 1820 >> 0] = 10;
 c[b + 1824 >> 2] = 1;
 c[b + 1828 >> 2] = 0;
 a[b + 1832 >> 0] = 10;
 c[b + 1836 >> 2] = 1;
 c[b + 1840 >> 2] = 0;
 a[b + 1844 >> 0] = 10;
 c[b + 1848 >> 2] = 1;
 c[b + 1852 >> 2] = 0;
 a[b + 1856 >> 0] = 10;
 c[b + 1860 >> 2] = 1;
 c[b + 1864 >> 2] = 0;
 a[b + 1868 >> 0] = 10;
 c[b + 1872 >> 2] = 1;
 c[b + 1876 >> 2] = 0;
 a[b + 1880 >> 0] = 10;
 c[b + 1884 >> 2] = 1;
 c[b + 1888 >> 2] = 0;
 a[b + 1892 >> 0] = 10;
 c[b + 1896 >> 2] = 1;
 c[b + 1900 >> 2] = 0;
 a[b + 1904 >> 0] = 10;
 c[b + 1908 >> 2] = 1;
 c[b + 1912 >> 2] = 0;
 a[b + 1916 >> 0] = 10;
 c[b + 1920 >> 2] = 1;
 c[b + 1924 >> 2] = 0;
 a[b + 1928 >> 0] = 10;
 c[b + 1932 >> 2] = 1;
 c[b + 1936 >> 2] = 0;
 a[b + 1940 >> 0] = 10;
 c[b + 1944 >> 2] = 1;
 c[b + 1948 >> 2] = 0;
 a[b + 1952 >> 0] = 10;
 c[b + 1956 >> 2] = 1;
 c[b + 1960 >> 2] = 0;
 a[b + 1964 >> 0] = 10;
 c[b + 1968 >> 2] = 1;
 c[b + 1972 >> 2] = 0;
 a[b + 1976 >> 0] = 10;
 c[b + 1980 >> 2] = 1;
 c[b + 2048 >> 2] = -1;
 c[b + 2052 >> 2] = -1;
 c[b + 2056 >> 2] = 0;
 g = b + 2064 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 2084 >> 0] = 10;
 c[b + 2088 >> 2] = 1;
 c[b + 2092 >> 2] = 0;
 a[b + 2096 >> 0] = 10;
 c[b + 2100 >> 2] = 1;
 c[b + 2104 >> 2] = 0;
 a[b + 2108 >> 0] = 10;
 c[b + 2112 >> 2] = 1;
 c[b + 2116 >> 2] = 0;
 a[b + 2120 >> 0] = 10;
 c[b + 2124 >> 2] = 1;
 c[b + 2128 >> 2] = 0;
 a[b + 2132 >> 0] = 10;
 c[b + 2136 >> 2] = 1;
 c[b + 2140 >> 2] = 0;
 a[b + 2144 >> 0] = 10;
 c[b + 2148 >> 2] = 1;
 c[b + 2152 >> 2] = 0;
 a[b + 2156 >> 0] = 10;
 c[b + 2160 >> 2] = 1;
 c[b + 2164 >> 2] = 0;
 a[b + 2168 >> 0] = 10;
 c[b + 2172 >> 2] = 1;
 c[b + 2176 >> 2] = 0;
 a[b + 2180 >> 0] = 10;
 c[b + 2184 >> 2] = 1;
 c[b + 2188 >> 2] = 0;
 a[b + 2192 >> 0] = 10;
 c[b + 2196 >> 2] = 1;
 c[b + 2200 >> 2] = 0;
 a[b + 2204 >> 0] = 10;
 c[b + 2208 >> 2] = 1;
 c[b + 2212 >> 2] = 0;
 a[b + 2216 >> 0] = 10;
 c[b + 2220 >> 2] = 1;
 c[b + 2224 >> 2] = 0;
 a[b + 2228 >> 0] = 10;
 c[b + 2232 >> 2] = 1;
 c[b + 2236 >> 2] = 0;
 a[b + 2240 >> 0] = 10;
 c[b + 2244 >> 2] = 1;
 c[b + 2248 >> 2] = 0;
 a[b + 2252 >> 0] = 10;
 c[b + 2256 >> 2] = 1;
 c[b + 2260 >> 2] = 0;
 a[b + 2264 >> 0] = 10;
 c[b + 2268 >> 2] = 1;
 c[b + 2336 >> 2] = -1;
 c[b + 2340 >> 2] = -1;
 c[b + 2344 >> 2] = 0;
 g = b + 2352 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 a[b + 2372 >> 0] = 10;
 c[b + 2376 >> 2] = 1;
 c[b + 2380 >> 2] = 0;
 a[b + 2384 >> 0] = 10;
 c[b + 2388 >> 2] = 1;
 c[b + 2392 >> 2] = 0;
 a[b + 2396 >> 0] = 10;
 c[b + 2400 >> 2] = 1;
 c[b + 2404 >> 2] = 0;
 a[b + 2408 >> 0] = 10;
 c[b + 2412 >> 2] = 1;
 c[b + 2416 >> 2] = 0;
 a[b + 2420 >> 0] = 10;
 c[b + 2424 >> 2] = 1;
 c[b + 2428 >> 2] = 0;
 a[b + 2432 >> 0] = 10;
 c[b + 2436 >> 2] = 1;
 c[b + 2440 >> 2] = 0;
 a[b + 2444 >> 0] = 10;
 c[b + 2448 >> 2] = 1;
 c[b + 2452 >> 2] = 0;
 a[b + 2456 >> 0] = 10;
 c[b + 2460 >> 2] = 1;
 c[b + 2464 >> 2] = 0;
 a[b + 2468 >> 0] = 10;
 c[b + 2472 >> 2] = 1;
 c[b + 2476 >> 2] = 0;
 a[b + 2480 >> 0] = 10;
 c[b + 2484 >> 2] = 1;
 c[b + 2488 >> 2] = 0;
 a[b + 2492 >> 0] = 10;
 c[b + 2496 >> 2] = 1;
 c[b + 2500 >> 2] = 0;
 a[b + 2504 >> 0] = 10;
 c[b + 2508 >> 2] = 1;
 c[b + 2512 >> 2] = 0;
 a[b + 2516 >> 0] = 10;
 c[b + 2520 >> 2] = 1;
 c[b + 2524 >> 2] = 0;
 a[b + 2528 >> 0] = 10;
 c[b + 2532 >> 2] = 1;
 c[b + 2536 >> 2] = 0;
 a[b + 2540 >> 0] = 10;
 c[b + 2544 >> 2] = 1;
 c[b + 2548 >> 2] = 0;
 a[b + 2552 >> 0] = 10;
 c[b + 2556 >> 2] = 1;
 c[b + 2624 >> 2] = -1;
 c[b + 2628 >> 2] = -1;
 g = b + 2632 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[b + 2648 >> 2] = -1;
 c[b + 2652 >> 2] = -1;
 c[b + 2656 >> 2] = 0;
 c[b + 2660 >> 2] = -1;
 c[b + 2664 >> 2] = -1;
 c[b + 2668 >> 2] = 0;
 c[b + 2672 >> 2] = -1;
 c[b + 2676 >> 2] = -1;
 c[b + 2680 >> 2] = 0;
 c[b + 2684 >> 2] = -1;
 c[b + 2688 >> 2] = -1;
 c[b + 2692 >> 2] = 0;
 c[b + 2696 >> 2] = -1;
 c[b + 2700 >> 2] = -1;
 c[b + 2704 >> 2] = 0;
 c[b + 2708 >> 2] = -1;
 c[b + 2712 >> 2] = -1;
 c[b + 2716 >> 2] = 0;
 c[b + 2720 >> 2] = -1;
 c[b + 2724 >> 2] = -1;
 c[b + 2728 >> 2] = 0;
 c[b + 2732 >> 2] = -1;
 c[b + 2736 >> 2] = -1;
 c[b + 2740 >> 2] = 0;
 c[b + 2744 >> 2] = -1;
 c[b + 2748 >> 2] = -1;
 c[b + 2752 >> 2] = 0;
 c[b + 2756 >> 2] = -1;
 c[b + 2760 >> 2] = -1;
 c[b + 2764 >> 2] = 0;
 c[b + 2768 >> 2] = -1;
 c[b + 2772 >> 2] = -1;
 c[b + 2776 >> 2] = 0;
 c[b + 2780 >> 2] = -1;
 c[b + 2784 >> 2] = -1;
 c[b + 2788 >> 2] = 0;
 c[b + 2792 >> 2] = -1;
 c[b + 2796 >> 2] = -1;
 c[b + 2800 >> 2] = 0;
 c[b + 2804 >> 2] = -1;
 c[b + 2808 >> 2] = -1;
 c[b + 2812 >> 2] = 0;
 c[b + 2816 >> 2] = -1;
 c[b + 2820 >> 2] = -1;
 c[b + 2824 >> 2] = 0;
 c[b + 2828 >> 2] = -1;
 c[b + 2832 >> 2] = -1;
 c[b + 2836 >> 2] = -1;
 c[b + 2840 >> 2] = 0;
 c[b + 2844 >> 2] = 0;
 c[b + 2848 >> 2] = 0;
 c[b + 2852 >> 2] = -1;
 c[b + 2856 >> 2] = -1;
 c[b + 2860 >> 2] = 0;
 c[b + 2864 >> 2] = -1;
 c[b + 2868 >> 2] = -1;
 c[b + 2872 >> 2] = 0;
 c[b + 2876 >> 2] = -1;
 c[b + 2880 >> 2] = -1;
 c[b + 2884 >> 2] = 0;
 c[b + 2888 >> 2] = -1;
 c[b + 2892 >> 2] = -1;
 c[b + 2896 >> 2] = 0;
 c[b + 2900 >> 2] = -1;
 c[b + 2904 >> 2] = -1;
 c[b + 2908 >> 2] = 0;
 c[b + 2912 >> 2] = -1;
 c[b + 2916 >> 2] = -1;
 c[b + 2920 >> 2] = 0;
 c[b + 2924 >> 2] = -1;
 c[b + 2928 >> 2] = -1;
 c[b + 2932 >> 2] = 0;
 c[b + 2936 >> 2] = -1;
 c[b + 2940 >> 2] = -1;
 c[b + 2944 >> 2] = 0;
 c[b + 2948 >> 2] = -1;
 c[b + 2952 >> 2] = -1;
 c[b + 2956 >> 2] = 0;
 c[b + 2960 >> 2] = -1;
 c[b + 2964 >> 2] = -1;
 c[b + 2968 >> 2] = 0;
 c[b + 2972 >> 2] = -1;
 c[b + 2976 >> 2] = -1;
 c[b + 2980 >> 2] = 0;
 c[b + 2984 >> 2] = -1;
 c[b + 2988 >> 2] = -1;
 c[b + 2992 >> 2] = 0;
 c[b + 2996 >> 2] = -1;
 c[b + 3e3 >> 2] = -1;
 c[b + 3004 >> 2] = 0;
 c[b + 3008 >> 2] = -1;
 c[b + 3012 >> 2] = -1;
 c[b + 3016 >> 2] = 0;
 c[b + 3020 >> 2] = -1;
 c[b + 3024 >> 2] = -1;
 c[b + 3028 >> 2] = 0;
 c[b + 3032 >> 2] = -1;
 c[b + 3036 >> 2] = -1;
 c[b + 3040 >> 2] = -1;
 i = f;
 return;
}

function Ed(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 Be(b, d);
 c[b + 4 >> 2] = c[d + 4 >> 2];
 Bf(b + 16 | 0, 0, 240) | 0;
 a[b + 258 >> 0] = 17;
 a[b + 259 >> 0] = 13;
 a[b + 260 >> 0] = 17;
 a[b + 261 >> 0] = 13;
 a[b + 262 >> 0] = 17;
 a[b + 263 >> 0] = 13;
 a[b + 264 >> 0] = 17;
 a[b + 265 >> 0] = 13;
 a[b + 266 >> 0] = 17;
 a[b + 267 >> 0] = 13;
 a[b + 268 >> 0] = 17;
 a[b + 269 >> 0] = 13;
 a[b + 270 >> 0] = 17;
 a[b + 271 >> 0] = 13;
 a[b + 272 >> 0] = 17;
 a[b + 273 >> 0] = 13;
 a[b + 274 >> 0] = 17;
 a[b + 275 >> 0] = 13;
 a[b + 276 >> 0] = 17;
 a[b + 277 >> 0] = 13;
 a[b + 278 >> 0] = 17;
 a[b + 279 >> 0] = 13;
 a[b + 280 >> 0] = 17;
 a[b + 281 >> 0] = 13;
 a[b + 282 >> 0] = 17;
 a[b + 283 >> 0] = 13;
 a[b + 284 >> 0] = 17;
 a[b + 285 >> 0] = 13;
 a[b + 286 >> 0] = 17;
 a[b + 287 >> 0] = 13;
 a[b + 288 >> 0] = 17;
 a[b + 289 >> 0] = 13;
 a[b + 256 >> 0] = 0;
 a[b + 257 >> 0] = 1;
 a[b + 322 >> 0] = 0;
 a[b + 323 >> 0] = 0;
 d = b + 290 | 0;
 e = b + 306 | 0;
 f = e + 16 | 0;
 do {
  a[e >> 0] = 255;
  e = e + 1 | 0;
 } while ((e | 0) < (f | 0));
 e = d;
 f = e + 16 | 0;
 do {
  a[e >> 0] = 0;
  e = e + 1 | 0;
 } while ((e | 0) < (f | 0));
 c[b + 324 >> 2] = 0;
 c[b + 328 >> 2] = 0;
 f = b + 336 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 356 >> 0] = 10;
 c[b + 360 >> 2] = 1;
 c[b + 364 >> 2] = 0;
 a[b + 368 >> 0] = 10;
 c[b + 372 >> 2] = 1;
 c[b + 376 >> 2] = 0;
 a[b + 380 >> 0] = 10;
 c[b + 384 >> 2] = 1;
 c[b + 388 >> 2] = 0;
 a[b + 392 >> 0] = 10;
 c[b + 396 >> 2] = 1;
 c[b + 400 >> 2] = 0;
 a[b + 404 >> 0] = 10;
 c[b + 408 >> 2] = 1;
 c[b + 412 >> 2] = 0;
 a[b + 416 >> 0] = 10;
 c[b + 420 >> 2] = 1;
 c[b + 424 >> 2] = 0;
 a[b + 428 >> 0] = 10;
 c[b + 432 >> 2] = 1;
 c[b + 436 >> 2] = 0;
 a[b + 440 >> 0] = 10;
 c[b + 444 >> 2] = 1;
 c[b + 448 >> 2] = 0;
 a[b + 452 >> 0] = 10;
 c[b + 456 >> 2] = 1;
 c[b + 460 >> 2] = 0;
 a[b + 464 >> 0] = 10;
 c[b + 468 >> 2] = 1;
 c[b + 472 >> 2] = 0;
 a[b + 476 >> 0] = 10;
 c[b + 480 >> 2] = 1;
 c[b + 484 >> 2] = 0;
 a[b + 488 >> 0] = 10;
 c[b + 492 >> 2] = 1;
 c[b + 496 >> 2] = 0;
 a[b + 500 >> 0] = 10;
 c[b + 504 >> 2] = 1;
 c[b + 508 >> 2] = 0;
 a[b + 512 >> 0] = 10;
 c[b + 516 >> 2] = 1;
 c[b + 520 >> 2] = 0;
 a[b + 524 >> 0] = 10;
 c[b + 528 >> 2] = 1;
 c[b + 532 >> 2] = 0;
 a[b + 536 >> 0] = 10;
 c[b + 540 >> 2] = 1;
 c[b + 608 >> 2] = -1;
 c[b + 612 >> 2] = -1;
 c[b + 616 >> 2] = 0;
 f = b + 624 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 644 >> 0] = 10;
 c[b + 648 >> 2] = 1;
 c[b + 652 >> 2] = 0;
 a[b + 656 >> 0] = 10;
 c[b + 660 >> 2] = 1;
 c[b + 664 >> 2] = 0;
 a[b + 668 >> 0] = 10;
 c[b + 672 >> 2] = 1;
 c[b + 676 >> 2] = 0;
 a[b + 680 >> 0] = 10;
 c[b + 684 >> 2] = 1;
 c[b + 688 >> 2] = 0;
 a[b + 692 >> 0] = 10;
 c[b + 696 >> 2] = 1;
 c[b + 700 >> 2] = 0;
 a[b + 704 >> 0] = 10;
 c[b + 708 >> 2] = 1;
 c[b + 712 >> 2] = 0;
 a[b + 716 >> 0] = 10;
 c[b + 720 >> 2] = 1;
 c[b + 724 >> 2] = 0;
 a[b + 728 >> 0] = 10;
 c[b + 732 >> 2] = 1;
 c[b + 736 >> 2] = 0;
 a[b + 740 >> 0] = 10;
 c[b + 744 >> 2] = 1;
 c[b + 748 >> 2] = 0;
 a[b + 752 >> 0] = 10;
 c[b + 756 >> 2] = 1;
 c[b + 760 >> 2] = 0;
 a[b + 764 >> 0] = 10;
 c[b + 768 >> 2] = 1;
 c[b + 772 >> 2] = 0;
 a[b + 776 >> 0] = 10;
 c[b + 780 >> 2] = 1;
 c[b + 784 >> 2] = 0;
 a[b + 788 >> 0] = 10;
 c[b + 792 >> 2] = 1;
 c[b + 796 >> 2] = 0;
 a[b + 800 >> 0] = 10;
 c[b + 804 >> 2] = 1;
 c[b + 808 >> 2] = 0;
 a[b + 812 >> 0] = 10;
 c[b + 816 >> 2] = 1;
 c[b + 820 >> 2] = 0;
 a[b + 824 >> 0] = 10;
 c[b + 828 >> 2] = 1;
 c[b + 896 >> 2] = -1;
 c[b + 900 >> 2] = -1;
 c[b + 904 >> 2] = 0;
 f = b + 912 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 932 >> 0] = 10;
 c[b + 936 >> 2] = 1;
 c[b + 940 >> 2] = 0;
 a[b + 944 >> 0] = 10;
 c[b + 948 >> 2] = 1;
 c[b + 952 >> 2] = 0;
 a[b + 956 >> 0] = 10;
 c[b + 960 >> 2] = 1;
 c[b + 964 >> 2] = 0;
 a[b + 968 >> 0] = 10;
 c[b + 972 >> 2] = 1;
 c[b + 976 >> 2] = 0;
 a[b + 980 >> 0] = 10;
 c[b + 984 >> 2] = 1;
 c[b + 988 >> 2] = 0;
 a[b + 992 >> 0] = 10;
 c[b + 996 >> 2] = 1;
 c[b + 1e3 >> 2] = 0;
 a[b + 1004 >> 0] = 10;
 c[b + 1008 >> 2] = 1;
 c[b + 1012 >> 2] = 0;
 a[b + 1016 >> 0] = 10;
 c[b + 1020 >> 2] = 1;
 c[b + 1024 >> 2] = 0;
 a[b + 1028 >> 0] = 10;
 c[b + 1032 >> 2] = 1;
 c[b + 1036 >> 2] = 0;
 a[b + 1040 >> 0] = 10;
 c[b + 1044 >> 2] = 1;
 c[b + 1048 >> 2] = 0;
 a[b + 1052 >> 0] = 10;
 c[b + 1056 >> 2] = 1;
 c[b + 1060 >> 2] = 0;
 a[b + 1064 >> 0] = 10;
 c[b + 1068 >> 2] = 1;
 c[b + 1072 >> 2] = 0;
 a[b + 1076 >> 0] = 10;
 c[b + 1080 >> 2] = 1;
 c[b + 1084 >> 2] = 0;
 a[b + 1088 >> 0] = 10;
 c[b + 1092 >> 2] = 1;
 c[b + 1096 >> 2] = 0;
 a[b + 1100 >> 0] = 10;
 c[b + 1104 >> 2] = 1;
 c[b + 1108 >> 2] = 0;
 a[b + 1112 >> 0] = 10;
 c[b + 1116 >> 2] = 1;
 c[b + 1184 >> 2] = -1;
 c[b + 1188 >> 2] = -1;
 c[b + 1192 >> 2] = 0;
 f = b + 1200 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 1220 >> 0] = 10;
 c[b + 1224 >> 2] = 1;
 c[b + 1228 >> 2] = 0;
 a[b + 1232 >> 0] = 10;
 c[b + 1236 >> 2] = 1;
 c[b + 1240 >> 2] = 0;
 a[b + 1244 >> 0] = 10;
 c[b + 1248 >> 2] = 1;
 c[b + 1252 >> 2] = 0;
 a[b + 1256 >> 0] = 10;
 c[b + 1260 >> 2] = 1;
 c[b + 1264 >> 2] = 0;
 a[b + 1268 >> 0] = 10;
 c[b + 1272 >> 2] = 1;
 c[b + 1276 >> 2] = 0;
 a[b + 1280 >> 0] = 10;
 c[b + 1284 >> 2] = 1;
 c[b + 1288 >> 2] = 0;
 a[b + 1292 >> 0] = 10;
 c[b + 1296 >> 2] = 1;
 c[b + 1300 >> 2] = 0;
 a[b + 1304 >> 0] = 10;
 c[b + 1308 >> 2] = 1;
 c[b + 1312 >> 2] = 0;
 a[b + 1316 >> 0] = 10;
 c[b + 1320 >> 2] = 1;
 c[b + 1324 >> 2] = 0;
 a[b + 1328 >> 0] = 10;
 c[b + 1332 >> 2] = 1;
 c[b + 1336 >> 2] = 0;
 a[b + 1340 >> 0] = 10;
 c[b + 1344 >> 2] = 1;
 c[b + 1348 >> 2] = 0;
 a[b + 1352 >> 0] = 10;
 c[b + 1356 >> 2] = 1;
 c[b + 1360 >> 2] = 0;
 a[b + 1364 >> 0] = 10;
 c[b + 1368 >> 2] = 1;
 c[b + 1372 >> 2] = 0;
 a[b + 1376 >> 0] = 10;
 c[b + 1380 >> 2] = 1;
 c[b + 1384 >> 2] = 0;
 a[b + 1388 >> 0] = 10;
 c[b + 1392 >> 2] = 1;
 c[b + 1396 >> 2] = 0;
 a[b + 1400 >> 0] = 10;
 c[b + 1404 >> 2] = 1;
 c[b + 1472 >> 2] = -1;
 c[b + 1476 >> 2] = -1;
 c[b + 1480 >> 2] = 0;
 f = b + 1488 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 1508 >> 0] = 10;
 c[b + 1512 >> 2] = 1;
 c[b + 1516 >> 2] = 0;
 a[b + 1520 >> 0] = 10;
 c[b + 1524 >> 2] = 1;
 c[b + 1528 >> 2] = 0;
 a[b + 1532 >> 0] = 10;
 c[b + 1536 >> 2] = 1;
 c[b + 1540 >> 2] = 0;
 a[b + 1544 >> 0] = 10;
 c[b + 1548 >> 2] = 1;
 c[b + 1552 >> 2] = 0;
 a[b + 1556 >> 0] = 10;
 c[b + 1560 >> 2] = 1;
 c[b + 1564 >> 2] = 0;
 a[b + 1568 >> 0] = 10;
 c[b + 1572 >> 2] = 1;
 c[b + 1576 >> 2] = 0;
 a[b + 1580 >> 0] = 10;
 c[b + 1584 >> 2] = 1;
 c[b + 1588 >> 2] = 0;
 a[b + 1592 >> 0] = 10;
 c[b + 1596 >> 2] = 1;
 c[b + 1600 >> 2] = 0;
 a[b + 1604 >> 0] = 10;
 c[b + 1608 >> 2] = 1;
 c[b + 1612 >> 2] = 0;
 a[b + 1616 >> 0] = 10;
 c[b + 1620 >> 2] = 1;
 c[b + 1624 >> 2] = 0;
 a[b + 1628 >> 0] = 10;
 c[b + 1632 >> 2] = 1;
 c[b + 1636 >> 2] = 0;
 a[b + 1640 >> 0] = 10;
 c[b + 1644 >> 2] = 1;
 c[b + 1648 >> 2] = 0;
 a[b + 1652 >> 0] = 10;
 c[b + 1656 >> 2] = 1;
 c[b + 1660 >> 2] = 0;
 a[b + 1664 >> 0] = 10;
 c[b + 1668 >> 2] = 1;
 c[b + 1672 >> 2] = 0;
 a[b + 1676 >> 0] = 10;
 c[b + 1680 >> 2] = 1;
 c[b + 1684 >> 2] = 0;
 a[b + 1688 >> 0] = 10;
 c[b + 1692 >> 2] = 1;
 c[b + 1760 >> 2] = -1;
 c[b + 1764 >> 2] = -1;
 c[b + 1768 >> 2] = 0;
 f = b + 1776 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 1796 >> 0] = 10;
 c[b + 1800 >> 2] = 1;
 c[b + 1804 >> 2] = 0;
 a[b + 1808 >> 0] = 10;
 c[b + 1812 >> 2] = 1;
 c[b + 1816 >> 2] = 0;
 a[b + 1820 >> 0] = 10;
 c[b + 1824 >> 2] = 1;
 c[b + 1828 >> 2] = 0;
 a[b + 1832 >> 0] = 10;
 c[b + 1836 >> 2] = 1;
 c[b + 1840 >> 2] = 0;
 a[b + 1844 >> 0] = 10;
 c[b + 1848 >> 2] = 1;
 c[b + 1852 >> 2] = 0;
 a[b + 1856 >> 0] = 10;
 c[b + 1860 >> 2] = 1;
 c[b + 1864 >> 2] = 0;
 a[b + 1868 >> 0] = 10;
 c[b + 1872 >> 2] = 1;
 c[b + 1876 >> 2] = 0;
 a[b + 1880 >> 0] = 10;
 c[b + 1884 >> 2] = 1;
 c[b + 1888 >> 2] = 0;
 a[b + 1892 >> 0] = 10;
 c[b + 1896 >> 2] = 1;
 c[b + 1900 >> 2] = 0;
 a[b + 1904 >> 0] = 10;
 c[b + 1908 >> 2] = 1;
 c[b + 1912 >> 2] = 0;
 a[b + 1916 >> 0] = 10;
 c[b + 1920 >> 2] = 1;
 c[b + 1924 >> 2] = 0;
 a[b + 1928 >> 0] = 10;
 c[b + 1932 >> 2] = 1;
 c[b + 1936 >> 2] = 0;
 a[b + 1940 >> 0] = 10;
 c[b + 1944 >> 2] = 1;
 c[b + 1948 >> 2] = 0;
 a[b + 1952 >> 0] = 10;
 c[b + 1956 >> 2] = 1;
 c[b + 1960 >> 2] = 0;
 a[b + 1964 >> 0] = 10;
 c[b + 1968 >> 2] = 1;
 c[b + 1972 >> 2] = 0;
 a[b + 1976 >> 0] = 10;
 c[b + 1980 >> 2] = 1;
 c[b + 2048 >> 2] = -1;
 c[b + 2052 >> 2] = -1;
 c[b + 2056 >> 2] = 0;
 f = b + 2064 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 2084 >> 0] = 10;
 c[b + 2088 >> 2] = 1;
 c[b + 2092 >> 2] = 0;
 a[b + 2096 >> 0] = 10;
 c[b + 2100 >> 2] = 1;
 c[b + 2104 >> 2] = 0;
 a[b + 2108 >> 0] = 10;
 c[b + 2112 >> 2] = 1;
 c[b + 2116 >> 2] = 0;
 a[b + 2120 >> 0] = 10;
 c[b + 2124 >> 2] = 1;
 c[b + 2128 >> 2] = 0;
 a[b + 2132 >> 0] = 10;
 c[b + 2136 >> 2] = 1;
 c[b + 2140 >> 2] = 0;
 a[b + 2144 >> 0] = 10;
 c[b + 2148 >> 2] = 1;
 c[b + 2152 >> 2] = 0;
 a[b + 2156 >> 0] = 10;
 c[b + 2160 >> 2] = 1;
 c[b + 2164 >> 2] = 0;
 a[b + 2168 >> 0] = 10;
 c[b + 2172 >> 2] = 1;
 c[b + 2176 >> 2] = 0;
 a[b + 2180 >> 0] = 10;
 c[b + 2184 >> 2] = 1;
 c[b + 2188 >> 2] = 0;
 a[b + 2192 >> 0] = 10;
 c[b + 2196 >> 2] = 1;
 c[b + 2200 >> 2] = 0;
 a[b + 2204 >> 0] = 10;
 c[b + 2208 >> 2] = 1;
 c[b + 2212 >> 2] = 0;
 a[b + 2216 >> 0] = 10;
 c[b + 2220 >> 2] = 1;
 c[b + 2224 >> 2] = 0;
 a[b + 2228 >> 0] = 10;
 c[b + 2232 >> 2] = 1;
 c[b + 2236 >> 2] = 0;
 a[b + 2240 >> 0] = 10;
 c[b + 2244 >> 2] = 1;
 c[b + 2248 >> 2] = 0;
 a[b + 2252 >> 0] = 10;
 c[b + 2256 >> 2] = 1;
 c[b + 2260 >> 2] = 0;
 a[b + 2264 >> 0] = 10;
 c[b + 2268 >> 2] = 1;
 c[b + 2336 >> 2] = -1;
 c[b + 2340 >> 2] = -1;
 c[b + 2344 >> 2] = 0;
 f = b + 2352 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 a[b + 2372 >> 0] = 10;
 c[b + 2376 >> 2] = 1;
 c[b + 2380 >> 2] = 0;
 a[b + 2384 >> 0] = 10;
 c[b + 2388 >> 2] = 1;
 c[b + 2392 >> 2] = 0;
 a[b + 2396 >> 0] = 10;
 c[b + 2400 >> 2] = 1;
 c[b + 2404 >> 2] = 0;
 a[b + 2408 >> 0] = 10;
 c[b + 2412 >> 2] = 1;
 c[b + 2416 >> 2] = 0;
 a[b + 2420 >> 0] = 10;
 c[b + 2424 >> 2] = 1;
 c[b + 2428 >> 2] = 0;
 a[b + 2432 >> 0] = 10;
 c[b + 2436 >> 2] = 1;
 c[b + 2440 >> 2] = 0;
 a[b + 2444 >> 0] = 10;
 c[b + 2448 >> 2] = 1;
 c[b + 2452 >> 2] = 0;
 a[b + 2456 >> 0] = 10;
 c[b + 2460 >> 2] = 1;
 c[b + 2464 >> 2] = 0;
 a[b + 2468 >> 0] = 10;
 c[b + 2472 >> 2] = 1;
 c[b + 2476 >> 2] = 0;
 a[b + 2480 >> 0] = 10;
 c[b + 2484 >> 2] = 1;
 c[b + 2488 >> 2] = 0;
 a[b + 2492 >> 0] = 10;
 c[b + 2496 >> 2] = 1;
 c[b + 2500 >> 2] = 0;
 a[b + 2504 >> 0] = 10;
 c[b + 2508 >> 2] = 1;
 c[b + 2512 >> 2] = 0;
 a[b + 2516 >> 0] = 10;
 c[b + 2520 >> 2] = 1;
 c[b + 2524 >> 2] = 0;
 a[b + 2528 >> 0] = 10;
 c[b + 2532 >> 2] = 1;
 c[b + 2536 >> 2] = 0;
 a[b + 2540 >> 0] = 10;
 c[b + 2544 >> 2] = 1;
 c[b + 2548 >> 2] = 0;
 a[b + 2552 >> 0] = 10;
 c[b + 2556 >> 2] = 1;
 c[b + 2624 >> 2] = -1;
 c[b + 2628 >> 2] = -1;
 f = b + 2632 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[b + 2648 >> 2] = -1;
 c[b + 2652 >> 2] = -1;
 c[b + 2656 >> 2] = 0;
 c[b + 2660 >> 2] = -1;
 c[b + 2664 >> 2] = -1;
 c[b + 2668 >> 2] = 0;
 c[b + 2672 >> 2] = -1;
 c[b + 2676 >> 2] = -1;
 c[b + 2680 >> 2] = 0;
 c[b + 2684 >> 2] = -1;
 c[b + 2688 >> 2] = -1;
 c[b + 2692 >> 2] = 0;
 c[b + 2696 >> 2] = -1;
 c[b + 2700 >> 2] = -1;
 c[b + 2704 >> 2] = 0;
 c[b + 2708 >> 2] = -1;
 c[b + 2712 >> 2] = -1;
 c[b + 2716 >> 2] = 0;
 c[b + 2720 >> 2] = -1;
 c[b + 2724 >> 2] = -1;
 c[b + 2728 >> 2] = 0;
 c[b + 2732 >> 2] = -1;
 c[b + 2736 >> 2] = -1;
 c[b + 2740 >> 2] = 0;
 c[b + 2744 >> 2] = -1;
 c[b + 2748 >> 2] = -1;
 c[b + 2752 >> 2] = 0;
 c[b + 2756 >> 2] = -1;
 c[b + 2760 >> 2] = -1;
 c[b + 2764 >> 2] = 0;
 c[b + 2768 >> 2] = -1;
 c[b + 2772 >> 2] = -1;
 c[b + 2776 >> 2] = 0;
 c[b + 2780 >> 2] = -1;
 c[b + 2784 >> 2] = -1;
 c[b + 2788 >> 2] = 0;
 c[b + 2792 >> 2] = -1;
 c[b + 2796 >> 2] = -1;
 c[b + 2800 >> 2] = 0;
 c[b + 2804 >> 2] = -1;
 c[b + 2808 >> 2] = -1;
 c[b + 2812 >> 2] = 0;
 c[b + 2816 >> 2] = -1;
 c[b + 2820 >> 2] = -1;
 c[b + 2824 >> 2] = 0;
 c[b + 2828 >> 2] = -1;
 c[b + 2832 >> 2] = -1;
 c[b + 2836 >> 2] = -1;
 c[b + 2840 >> 2] = 0;
 c[b + 2844 >> 2] = 0;
 c[b + 2848 >> 2] = 0;
 c[b + 2852 >> 2] = -1;
 c[b + 2856 >> 2] = -1;
 c[b + 2860 >> 2] = 0;
 c[b + 2864 >> 2] = -1;
 c[b + 2868 >> 2] = -1;
 c[b + 2872 >> 2] = 0;
 c[b + 2876 >> 2] = -1;
 c[b + 2880 >> 2] = -1;
 c[b + 2884 >> 2] = 0;
 c[b + 2888 >> 2] = -1;
 c[b + 2892 >> 2] = -1;
 c[b + 2896 >> 2] = 0;
 c[b + 2900 >> 2] = -1;
 c[b + 2904 >> 2] = -1;
 c[b + 2908 >> 2] = 0;
 c[b + 2912 >> 2] = -1;
 c[b + 2916 >> 2] = -1;
 c[b + 2920 >> 2] = 0;
 c[b + 2924 >> 2] = -1;
 c[b + 2928 >> 2] = -1;
 c[b + 2932 >> 2] = 0;
 c[b + 2936 >> 2] = -1;
 c[b + 2940 >> 2] = -1;
 c[b + 2944 >> 2] = 0;
 c[b + 2948 >> 2] = -1;
 c[b + 2952 >> 2] = -1;
 c[b + 2956 >> 2] = 0;
 c[b + 2960 >> 2] = -1;
 c[b + 2964 >> 2] = -1;
 c[b + 2968 >> 2] = 0;
 c[b + 2972 >> 2] = -1;
 c[b + 2976 >> 2] = -1;
 c[b + 2980 >> 2] = 0;
 c[b + 2984 >> 2] = -1;
 c[b + 2988 >> 2] = -1;
 c[b + 2992 >> 2] = 0;
 c[b + 2996 >> 2] = -1;
 c[b + 3e3 >> 2] = -1;
 c[b + 3004 >> 2] = 0;
 c[b + 3008 >> 2] = -1;
 c[b + 3012 >> 2] = -1;
 c[b + 3016 >> 2] = 0;
 c[b + 3020 >> 2] = -1;
 c[b + 3024 >> 2] = -1;
 c[b + 3028 >> 2] = 0;
 c[b + 3032 >> 2] = -1;
 c[b + 3036 >> 2] = -1;
 c[b + 3040 >> 2] = -1;
 return;
}

function $d(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 16 | 0;
 x = z;
 o = a + 4 | 0;
 n = a + 8 | 0;
 f = c[n >> 2] | 0;
 y = a + 16 | 0;
 g = c[y >> 2] | 0;
 if ((f | 0) == (g | 0)) {
  g = f >> 1;
  h = c[a + 20 >> 2] | 0;
  if ((g | 0) >= (h | 0)) {
   h = c[a + 24 >> 2] | 0;
   h = (g | 0) > (h | 0) ? h : g;
  }
  m = h + f | 0;
  if (h) {
   l = a + 12 | 0;
   f = f - (c[l >> 2] | 0) | 0;
   k = bf(m * 24 | 0) | 0;
   if ((f | 0) > 0) {
    g = k;
    h = 0;
    j = (c[o >> 2] | 0) + ((c[l >> 2] | 0) * 24 | 0) | 0;
    while (1) {
     Be(g, j);
     c[g + 4 >> 2] = c[j + 4 >> 2];
     u = j + 8 | 0;
     v = c[u + 4 >> 2] | 0;
     w = g + 8 | 0;
     c[w >> 2] = c[u >> 2];
     c[w + 4 >> 2] = v;
     c[g + 16 >> 2] = c[j + 16 >> 2];
     c[j >> 2] = 0;
     h = h + 1 | 0;
     if ((h | 0) == (f | 0)) break; else {
      g = g + 24 | 0;
      j = j + 24 | 0;
     }
    }
   }
   g = c[o >> 2] | 0;
   if (g | 0) cf(g);
   c[o >> 2] = k;
   c[n >> 2] = m;
   c[l >> 2] = 0;
   c[y >> 2] = f;
  }
 } else f = g;
 c[y >> 2] = f + 1;
 w = c[o >> 2] | 0;
 t = d;
 s = c[t >> 2] | 0;
 t = c[t + 4 >> 2] | 0;
 v = c[e >> 2] | 0;
 Be(w + (f * 24 | 0) | 0, b);
 g = b + 4 | 0;
 c[w + (f * 24 | 0) + 4 >> 2] = c[g >> 2];
 u = w + (f * 24 | 0) + 8 | 0;
 c[u >> 2] = s;
 c[u + 4 >> 2] = t;
 c[w + (f * 24 | 0) + 16 >> 2] = v;
 if ((c[g >> 2] | 0) == -1) f = a + 12 | 0; else {
  u = a + 28 | 0;
  f = a + 12 | 0;
  o = (c[y >> 2] | 0) + -1 - (c[f >> 2] | 0) | 0;
  Be(x, b);
  w = x + 4 | 0;
  l = c[g >> 2] | 0;
  c[w >> 2] = l;
  v = x + 8 | 0;
  c[v >> 2] = o;
  o = a + 32 | 0;
  m = c[o >> 2] | 0;
  s = a + 40 | 0;
  k = c[s >> 2] | 0;
  t = a + 36 | 0;
  j = c[t >> 2] | 0;
  if ((m - k | 0) == (0 - j | 0)) {
   g = m >> 1;
   h = c[a + 44 >> 2] | 0;
   if ((g | 0) >= (h | 0)) {
    h = c[a + 48 >> 2] | 0;
    h = (g | 0) > (h | 0) ? h : g;
   }
   e = h + m | 0;
   n = e - k + j >> 1;
   if (!h) {
    r = j;
    q = k;
    p = m;
   } else {
    k = k - j | 0;
    l = bf(e * 12 | 0) | 0;
    if ((k | 0) > 0) {
     g = l + (n * 12 | 0) | 0;
     h = 0;
     j = (c[u >> 2] | 0) + ((c[t >> 2] | 0) * 12 | 0) | 0;
     while (1) {
      Be(g, j);
      c[g + 4 >> 2] = c[j + 4 >> 2];
      c[g + 8 >> 2] = c[j + 8 >> 2];
      c[j >> 2] = 0;
      h = h + 1 | 0;
      if ((h | 0) == (k | 0)) break; else {
       g = g + 12 | 0;
       j = j + 12 | 0;
      }
     }
    }
    g = c[u >> 2] | 0;
    if (g | 0) cf(g);
    c[u >> 2] = l;
    c[o >> 2] = e;
    c[t >> 2] = n;
    q = n + k | 0;
    c[s >> 2] = q;
    r = n;
    l = c[w >> 2] | 0;
    p = e;
   }
  } else {
   r = j;
   q = k;
   p = m;
  }
  b = c[u >> 2] | 0;
  n = (b | 0) == 0;
  o = b + (r * 12 | 0) | 0;
  g = b + (q * 12 | 0) | 0;
  j = n ? 0 : o;
  e = c[x >> 2] | 0;
  h = j;
  j = ((n ? 0 : g) - j | 0) / 12 | 0;
  a : while (1) {
   while (1) {
    if (!j) break a;
    k = (j | 0) / 2 | 0;
    m = h + (k * 12 | 0) | 0;
    if ((c[h + (k * 12 | 0) + 4 >> 2] | 0) >>> 0 < l >>> 0) break;
    if ((c[m >> 2] | 0) >>> 0 < e >>> 0) break; else j = k;
   }
   h = m + 12 | 0;
   j = j + -1 - k | 0;
  }
  k = n ? 0 : o;
  l = (h - k | 0) / 12 | 0;
  j = q - r | 0;
  do if ((j | 0) == (l | 0)) {
   if ((q | 0) < (p | 0)) {
    c[s >> 2] = q + 1;
    h = 54;
    break;
   }
   if ((r | 0) > 0) {
    g = r + -1 | 0;
    Be(b + (g * 12 | 0) | 0, b + (r * 12 | 0) | 0);
    c[b + (g * 12 | 0) + 4 >> 2] = c[b + (r * 12 | 0) + 4 >> 2];
    c[b + (g * 12 | 0) + 8 >> 2] = c[b + (r * 12 | 0) + 8 >> 2];
    g = c[t >> 2] | 0;
    j = l + -1 | 0;
    if ((g | 0) < (g + j | 0)) {
     do {
      s = c[u >> 2] | 0;
      r = s + (g * 12 | 0) | 0;
      h = g;
      g = g + 1 | 0;
      c[r >> 2] = 0;
      Be(r, s + (g * 12 | 0) | 0);
      c[s + (h * 12 | 0) + 4 >> 2] = c[s + (g * 12 | 0) + 4 >> 2];
      c[s + (h * 12 | 0) + 8 >> 2] = c[s + (g * 12 | 0) + 8 >> 2];
      h = c[t >> 2] | 0;
     } while ((g | 0) < (h + j | 0));
     g = h;
    }
    g = g + -1 | 0;
    c[t >> 2] = g;
    g = (c[u >> 2] | 0) + ((g + l | 0) * 12 | 0) | 0;
    h = 52;
   } else {
    g = 0;
    h = 53;
   }
  } else {
   if ((h | 0) == (k | 0)) {
    if ((r | 0) > 0) {
     g = r + -1 | 0;
     c[t >> 2] = g;
     g = b + (g * 12 | 0) | 0;
     h = 54;
     break;
    }
    if ((q | 0) >= (p | 0)) {
     g = 0;
     h = 53;
     break;
    }
    g = ae(u, 0) | 0;
    h = 52;
    break;
   }
   if ((j >> 1 | 0) > (l | 0)) {
    if ((r | 0) <= 0) {
     g = ae(u, l) | 0;
     h = 52;
     break;
    }
    g = r + -1 | 0;
    Be(b + (g * 12 | 0) | 0, b + (r * 12 | 0) | 0);
    c[b + (g * 12 | 0) + 4 >> 2] = c[b + (r * 12 | 0) + 4 >> 2];
    c[b + (g * 12 | 0) + 8 >> 2] = c[b + (r * 12 | 0) + 8 >> 2];
    g = c[t >> 2] | 0;
    j = l + -1 | 0;
    if ((g | 0) < (g + j | 0)) {
     do {
      s = c[u >> 2] | 0;
      r = s + (g * 12 | 0) | 0;
      h = g;
      g = g + 1 | 0;
      c[r >> 2] = 0;
      Be(r, s + (g * 12 | 0) | 0);
      c[s + (h * 12 | 0) + 4 >> 2] = c[s + (g * 12 | 0) + 4 >> 2];
      c[s + (h * 12 | 0) + 8 >> 2] = c[s + (g * 12 | 0) + 8 >> 2];
      h = c[t >> 2] | 0;
     } while ((g | 0) < (h + j | 0));
     g = h;
    }
    g = g + -1 | 0;
    c[t >> 2] = g;
    g = (c[u >> 2] | 0) + ((g + l | 0) * 12 | 0) | 0;
    h = 52;
    break;
   } else {
    if ((q | 0) < (p | 0)) {
     g = ae(u, l) | 0;
     h = 52;
     break;
    }
    g = r + -1 | 0;
    Be(b + (g * 12 | 0) | 0, b + (r * 12 | 0) | 0);
    c[b + (g * 12 | 0) + 4 >> 2] = c[b + (r * 12 | 0) + 4 >> 2];
    c[b + (g * 12 | 0) + 8 >> 2] = c[b + (r * 12 | 0) + 8 >> 2];
    g = c[t >> 2] | 0;
    j = l + -1 | 0;
    if ((g | 0) < (g + j | 0)) {
     do {
      s = c[u >> 2] | 0;
      r = s + (g * 12 | 0) | 0;
      h = g;
      g = g + 1 | 0;
      c[r >> 2] = 0;
      Be(r, s + (g * 12 | 0) | 0);
      c[s + (h * 12 | 0) + 4 >> 2] = c[s + (g * 12 | 0) + 4 >> 2];
      c[s + (h * 12 | 0) + 8 >> 2] = c[s + (g * 12 | 0) + 8 >> 2];
      h = c[t >> 2] | 0;
     } while ((g | 0) < (h + j | 0));
     g = h;
    }
    g = g + -1 | 0;
    c[t >> 2] = g;
    g = (c[u >> 2] | 0) + ((g + l | 0) * 12 | 0) | 0;
    h = 52;
    break;
   }
  } while (0);
  if ((h | 0) == 52) {
   if ((g | 0) != (x | 0)) h = 53;
  } else if ((h | 0) == 54) {
   Be(g, x);
   c[g + 4 >> 2] = c[w >> 2];
   c[g + 8 >> 2] = c[v >> 2];
  }
  if ((h | 0) == 53) {
   c[g >> 2] = 0;
   Be(g, x);
   c[g + 4 >> 2] = c[w >> 2];
   c[g + 8 >> 2] = c[v >> 2];
  }
 }
 u = a + 56 | 0;
 t = (c[y >> 2] | 0) + -1 - (c[f >> 2] | 0) | 0;
 s = d;
 r = c[s >> 2] | 0;
 s = c[s + 4 >> 2] | 0;
 n = a + 60 | 0;
 k = c[n >> 2] | 0;
 p = a + 68 | 0;
 j = c[p >> 2] | 0;
 q = a + 64 | 0;
 f = c[q >> 2] | 0;
 if ((k - j | 0) == (0 - f | 0)) {
  g = k >> 1;
  h = c[a + 72 >> 2] | 0;
  if ((g | 0) >= (h | 0)) {
   h = c[a + 76 >> 2] | 0;
   h = (g | 0) > (h | 0) ? h : g;
  }
  o = h + k | 0;
  m = o - j + f >> 1;
  if (!h) {
   b = j;
   o = k;
  } else {
   f = j - f | 0;
   g = bf(o << 4) | 0;
   h = c[u >> 2] | 0;
   if ((f | 0) > 0) {
    j = g + (m << 4) | 0;
    k = 0;
    l = h + (c[q >> 2] << 4) | 0;
    while (1) {
     y = l;
     d = c[y + 4 >> 2] | 0;
     a = j;
     c[a >> 2] = c[y >> 2];
     c[a + 4 >> 2] = d;
     c[j + 8 >> 2] = c[l + 8 >> 2];
     k = k + 1 | 0;
     if ((k | 0) == (f | 0)) break; else {
      j = j + 16 | 0;
      l = l + 16 | 0;
     }
    }
   }
   if (h | 0) cf(h);
   c[u >> 2] = g;
   c[n >> 2] = o;
   c[q >> 2] = m;
   b = m + f | 0;
   c[p >> 2] = b;
   f = m;
  }
 } else {
  b = j;
  o = k;
 }
 e = c[u >> 2] | 0;
 l = (e | 0) == 0;
 m = e + (f << 4) | 0;
 n = e + (b << 4) | 0;
 g = l ? 0 : m;
 k = g;
 g = (l ? 0 : n) - g >> 4;
 b : while (1) {
  while (1) {
   if (!g) break b;
   h = (g | 0) / 2 | 0;
   j = k + (h << 4) | 0;
   a = j;
   d = c[a + 4 >> 2] | 0;
   if (d >>> 0 < s >>> 0 | ((d | 0) == (s | 0) ? (c[a >> 2] | 0) >>> 0 < r >>> 0 : 0)) break; else g = h;
  }
  k = j + 16 | 0;
  g = g + -1 - h | 0;
 }
 k = k - (l ? 0 : m) >> 4;
 g = b - f | 0;
 if ((g | 0) == (k | 0)) {
  if ((b | 0) < (o | 0)) {
   c[p >> 2] = b + 1;
   a = n;
   d = a;
   y = d;
   c[y >> 2] = r;
   d = d + 4 | 0;
   c[d >> 2] = s;
   a = a + 8 | 0;
   c[a >> 2] = t;
   i = z;
   return;
  }
  g = f + -1 | 0;
  y = e + (f << 4) | 0;
  d = c[y + 4 >> 2] | 0;
  a = e + (g << 4) | 0;
  c[a >> 2] = c[y >> 2];
  c[a + 4 >> 2] = d;
  c[e + (g << 4) + 8 >> 2] = c[e + (f << 4) + 8 >> 2];
  g = k + -1 | 0;
  if ((f | 0) < (f + g | 0)) {
   h = c[u >> 2] | 0;
   j = c[q >> 2] | 0;
   g = j + g | 0;
   do {
    a = f;
    f = f + 1 | 0;
    x = h + (f << 4) | 0;
    y = c[x + 4 >> 2] | 0;
    d = h + (a << 4) | 0;
    c[d >> 2] = c[x >> 2];
    c[d + 4 >> 2] = y;
    c[h + (a << 4) + 8 >> 2] = c[h + (f << 4) + 8 >> 2];
   } while ((f | 0) < (g | 0));
   f = j;
  }
  a = f + -1 | 0;
  c[q >> 2] = a;
  a = (c[u >> 2] | 0) + (a + k << 4) | 0;
  d = a;
  y = d;
  c[y >> 2] = r;
  d = d + 4 | 0;
  c[d >> 2] = s;
  a = a + 8 | 0;
  c[a >> 2] = t;
  i = z;
  return;
 }
 if (!k) {
  if ((f | 0) > 0) {
   a = f + -1 | 0;
   c[q >> 2] = a;
   a = e + (a << 4) | 0;
   d = a;
   y = d;
   c[y >> 2] = r;
   d = d + 4 | 0;
   c[d >> 2] = s;
   a = a + 8 | 0;
   c[a >> 2] = t;
   i = z;
   return;
  }
  g = b + -1 | 0;
  y = e + (g << 4) | 0;
  d = c[y + 4 >> 2] | 0;
  a = e + (b << 4) | 0;
  c[a >> 2] = c[y >> 2];
  c[a + 4 >> 2] = d;
  c[e + (b << 4) + 8 >> 2] = c[e + (g << 4) + 8 >> 2];
  if ((g | 0) > (f | 0)) {
   k = c[u >> 2] | 0;
   h = b;
   j = g;
   while (1) {
    g = h + -2 | 0;
    y = k + (g << 4) | 0;
    d = c[y + 4 >> 2] | 0;
    a = k + (j << 4) | 0;
    c[a >> 2] = c[y >> 2];
    c[a + 4 >> 2] = d;
    c[k + (j << 4) + 8 >> 2] = c[k + (g << 4) + 8 >> 2];
    g = j + -1 | 0;
    if ((g | 0) > (f | 0)) {
     h = j;
     j = g;
    } else break;
   }
  }
  c[p >> 2] = b + 1;
  a = (c[u >> 2] | 0) + (f << 4) | 0;
  d = a;
  y = d;
  c[y >> 2] = r;
  d = d + 4 | 0;
  c[d >> 2] = s;
  a = a + 8 | 0;
  c[a >> 2] = t;
  i = z;
  return;
 }
 if ((g >> 1 | 0) > (k | 0)) if ((f | 0) > 0) {
  g = f + -1 | 0;
  y = e + (f << 4) | 0;
  d = c[y + 4 >> 2] | 0;
  a = e + (g << 4) | 0;
  c[a >> 2] = c[y >> 2];
  c[a + 4 >> 2] = d;
  c[e + (g << 4) + 8 >> 2] = c[e + (f << 4) + 8 >> 2];
  g = k + -1 | 0;
  if ((f | 0) < (f + g | 0)) {
   h = c[u >> 2] | 0;
   j = c[q >> 2] | 0;
   g = j + g | 0;
   do {
    a = f;
    f = f + 1 | 0;
    x = h + (f << 4) | 0;
    y = c[x + 4 >> 2] | 0;
    d = h + (a << 4) | 0;
    c[d >> 2] = c[x >> 2];
    c[d + 4 >> 2] = y;
    c[h + (a << 4) + 8 >> 2] = c[h + (f << 4) + 8 >> 2];
   } while ((f | 0) < (g | 0));
   f = j;
  }
  a = f + -1 | 0;
  c[q >> 2] = a;
  a = (c[u >> 2] | 0) + (a + k << 4) | 0;
  d = a;
  y = d;
  c[y >> 2] = r;
  d = d + 4 | 0;
  c[d >> 2] = s;
  a = a + 8 | 0;
  c[a >> 2] = t;
  i = z;
  return;
 } else {
  g = b + -1 | 0;
  d = e + (g << 4) | 0;
  a = c[d + 4 >> 2] | 0;
  h = e + (b << 4) | 0;
  c[h >> 2] = c[d >> 2];
  c[h + 4 >> 2] = a;
  c[e + (b << 4) + 8 >> 2] = c[e + (g << 4) + 8 >> 2];
  h = f + k | 0;
  if ((g | 0) > (h | 0)) {
   j = c[u >> 2] | 0;
   f = b;
   while (1) {
    f = f + -2 | 0;
    y = j + (f << 4) | 0;
    d = c[y + 4 >> 2] | 0;
    a = j + (g << 4) | 0;
    c[a >> 2] = c[y >> 2];
    c[a + 4 >> 2] = d;
    c[j + (g << 4) + 8 >> 2] = c[j + (f << 4) + 8 >> 2];
    f = g + -1 | 0;
    if ((f | 0) > (h | 0)) {
     a = g;
     g = f;
     f = a;
    } else break;
   }
  }
  c[p >> 2] = b + 1;
  a = (c[u >> 2] | 0) + (h << 4) | 0;
  d = a;
  y = d;
  c[y >> 2] = r;
  d = d + 4 | 0;
  c[d >> 2] = s;
  a = a + 8 | 0;
  c[a >> 2] = t;
  i = z;
  return;
 } else if ((b | 0) < (o | 0)) {
  g = b + -1 | 0;
  d = e + (g << 4) | 0;
  a = c[d + 4 >> 2] | 0;
  h = e + (b << 4) | 0;
  c[h >> 2] = c[d >> 2];
  c[h + 4 >> 2] = a;
  c[e + (b << 4) + 8 >> 2] = c[e + (g << 4) + 8 >> 2];
  h = f + k | 0;
  if ((g | 0) > (h | 0)) {
   j = c[u >> 2] | 0;
   f = b;
   while (1) {
    f = f + -2 | 0;
    y = j + (f << 4) | 0;
    d = c[y + 4 >> 2] | 0;
    a = j + (g << 4) | 0;
    c[a >> 2] = c[y >> 2];
    c[a + 4 >> 2] = d;
    c[j + (g << 4) + 8 >> 2] = c[j + (f << 4) + 8 >> 2];
    f = g + -1 | 0;
    if ((f | 0) > (h | 0)) {
     a = g;
     g = f;
     f = a;
    } else break;
   }
  }
  c[p >> 2] = b + 1;
  a = (c[u >> 2] | 0) + (h << 4) | 0;
  d = a;
  y = d;
  c[y >> 2] = r;
  d = d + 4 | 0;
  c[d >> 2] = s;
  a = a + 8 | 0;
  c[a >> 2] = t;
  i = z;
  return;
 } else {
  g = f + -1 | 0;
  y = e + (f << 4) | 0;
  d = c[y + 4 >> 2] | 0;
  a = e + (g << 4) | 0;
  c[a >> 2] = c[y >> 2];
  c[a + 4 >> 2] = d;
  c[e + (g << 4) + 8 >> 2] = c[e + (f << 4) + 8 >> 2];
  g = k + -1 | 0;
  if ((f | 0) < (f + g | 0)) {
   h = c[u >> 2] | 0;
   j = c[q >> 2] | 0;
   g = j + g | 0;
   do {
    a = f;
    f = f + 1 | 0;
    x = h + (f << 4) | 0;
    y = c[x + 4 >> 2] | 0;
    d = h + (a << 4) | 0;
    c[d >> 2] = c[x >> 2];
    c[d + 4 >> 2] = y;
    c[h + (a << 4) + 8 >> 2] = c[h + (f << 4) + 8 >> 2];
   } while ((f | 0) < (g | 0));
   f = j;
  }
  a = f + -1 | 0;
  c[q >> 2] = a;
  a = (c[u >> 2] | 0) + (a + k << 4) | 0;
  d = a;
  y = d;
  c[y >> 2] = r;
  d = d + 4 | 0;
  c[d >> 2] = s;
  a = a + 8 | 0;
  c[a >> 2] = t;
  i = z;
  return;
 }
}

function Rc(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 d = c[8962] | 0;
 e = d + 268 | 0;
 if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  Ad((c[8946] | 0) + 1168 | 0, c[d + 272 >> 2] | 0);
  d = c[8962] | 0;
 }
 e = d + 268 | 0;
 if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  Ad((c[8946] | 0) + 1168 | 0, c[d + 272 >> 2] | 0);
 }
 e = c[d + 256 >> 2] | 0;
 if (e | 0) cf(e);
 cf(d);
 c[8962] = 0;
 Ad((c[8946] | 0) + 1168 | 0, -2);
 ze(c[8964] | 0, c[(c[8946] | 0) + 156 >> 2] | 0);
 e = c[8946] | 0;
 k = e + 416 | 0;
 Jd(k);
 na(0);
 c[e + 624 >> 2] = 0;
 c[e + 628 >> 2] = 0;
 i = e + 420 | 0;
 Bf(e + 716 | 0, 0, 132) | 0;
 c[i >> 2] = 0;
 c[i + 4 >> 2] = 0;
 c[i + 8 >> 2] = 0;
 c[i + 12 >> 2] = 0;
 c[i + 16 >> 2] = 0;
 c[i + 20 >> 2] = 0;
 c[i + 24 >> 2] = 0;
 a[k >> 0] = 0;
 k = c[8946] | 0;
 ze(c[8965] | 0, c[k + 1696 >> 2] | 0);
 i = k + 1700 | 0;
 e = c[i >> 2] | 0;
 j = k + 1708 | 0;
 a : do if (!e) d = k + 1712 | 0; else {
  f = c[j >> 2] | 0;
  d = k + 1712 | 0;
  l = c[d >> 2] | 0;
  g = e + (l << 2) | 0;
  if ((f | 0) != (l | 0)) {
   e = e + (f << 2) | 0;
   do {
    l = c[e >> 2] | 0;
    zc[c[(c[l >> 2] | 0) + 16 >> 2] & 63](l);
    e = e + 4 | 0;
   } while ((e | 0) != (g | 0));
   f = c[i >> 2] | 0;
   if (f) {
    g = c[j >> 2] | 0;
    e = c[d >> 2] | 0;
    if ((g | 0) < (e | 0)) {
     h = g;
     while (1) {
      f = f + (h << 2) | 0;
      g = c[f >> 2] | 0;
      if (g) {
       e = g + 4 | 0;
       l = c[e >> 2] | 0;
       c[e >> 2] = l - 1;
       if ((l | 0) == 1) zc[c[c[g >> 2] >> 2] & 63](g);
       c[f >> 2] = 0;
       e = c[d >> 2] | 0;
      }
      g = h + 1 | 0;
      if ((g | 0) >= (e | 0)) break a;
      f = c[i >> 2] | 0;
      h = g;
     }
    }
   }
  }
 } while (0);
 c[d >> 2] = c[j >> 2];
 d = k + 1180 | 0;
 e = c[d >> 2] | 0;
 f = k + 1176 | 0;
 g = c[f >> 2] | 0;
 if ((e - g | 0) == 1) c[f >> 2] = g + 1; else c[d >> 2] = e + -1;
 f = c[k + 1196 >> 2] | 0;
 d = c[k + 1204 >> 2] | 0;
 e = k + 1208 | 0;
 if (f | 0) {
  g = c[e >> 2] | 0;
  if ((d | 0) < (g | 0)) {
   h = d;
   do {
    c[f + (h * 24 | 0) >> 2] = 0;
    h = h + 1 | 0;
   } while ((h | 0) != (g | 0));
  }
 }
 c[e >> 2] = d;
 f = c[k + 1220 >> 2] | 0;
 d = c[k + 1228 >> 2] | 0;
 e = k + 1232 | 0;
 if (f | 0) {
  g = c[e >> 2] | 0;
  if ((d | 0) < (g | 0)) {
   h = d;
   do {
    c[f + (h * 12 | 0) >> 2] = 0;
    h = h + 1 | 0;
   } while ((h | 0) != (g | 0));
  }
 }
 c[e >> 2] = d;
 c[k + 1260 >> 2] = c[k + 1256 >> 2];
 a[k + 1192 >> 0] = 0;
 a[k + 1280 >> 0] = 0;
 a[k + 1632 >> 0] = 0;
 h = k + 1648 | 0;
 f = c[h >> 2] | 0;
 d = k + 1656 | 0;
 if (!f) {
  e = k + 1660 | 0;
  d = c[d >> 2] | 0;
 } else {
  d = c[d >> 2] | 0;
  e = k + 1660 | 0;
  g = c[e >> 2] | 0;
  if ((d | 0) < (g | 0)) {
   c[f + (d * 608 | 0) + 16 >> 2] = 0;
   f = d + 1 | 0;
   if ((f | 0) < (g | 0)) {
    g = c[h >> 2] | 0;
    h = c[e >> 2] | 0;
    do {
     c[g + (f * 608 | 0) + 16 >> 2] = 0;
     f = f + 1 | 0;
    } while ((f | 0) < (h | 0));
   }
  }
 }
 c[e >> 2] = d;
 c[k + 1684 >> 2] = c[k + 1680 >> 2];
 h = k + 1408 | 0;
 c[h >> 2] = 0;
 c[h + 4 >> 2] = 0;
 c[h + 8 >> 2] = 0;
 c[h + 12 >> 2] = 0;
 c[h + 16 >> 2] = 0;
 c[h + 20 >> 2] = 0;
 c[h + 24 >> 2] = 0;
 a[h + 28 >> 0] = 0;
 a[k + 1568 >> 0] = 0;
 h = k + 1584 | 0;
 f = c[h >> 2] | 0;
 d = k + 1592 | 0;
 if (!f) {
  e = k + 1596 | 0;
  d = c[d >> 2] | 0;
 } else {
  d = c[d >> 2] | 0;
  e = k + 1596 | 0;
  g = c[e >> 2] | 0;
  if ((d | 0) < (g | 0)) {
   c[f + (d * 776 | 0) + 704 >> 2] = 0;
   c[f + (d * 776 | 0) + 92 >> 2] = 0;
   f = d + 1 | 0;
   if ((f | 0) < (g | 0)) {
    g = c[h >> 2] | 0;
    h = c[e >> 2] | 0;
    do {
     c[g + (f * 776 | 0) + 704 >> 2] = 0;
     c[g + (f * 776 | 0) + 92 >> 2] = 0;
     f = f + 1 | 0;
    } while ((f | 0) < (h | 0));
   }
  }
 }
 c[e >> 2] = d;
 c[k + 1620 >> 2] = c[k + 1616 >> 2];
 g = k + 1376 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 c[g + 24 >> 2] = 0;
 a[g + 28 >> 0] = 0;
 a[k + 1504 >> 0] = 0;
 g = k + 1520 | 0;
 e = c[g >> 2] | 0;
 h = k + 1528 | 0;
 if (!e) d = k + 1532 | 0; else {
  f = c[h >> 2] | 0;
  d = k + 1532 | 0;
  if ((f | 0) < (c[d >> 2] | 0)) {
   Id(e + (f * 3712 | 0) | 0);
   e = f + 1 | 0;
   if ((e | 0) < (c[d >> 2] | 0)) do {
    Id((c[g >> 2] | 0) + (e * 3712 | 0) | 0);
    e = e + 1 | 0;
   } while ((e | 0) < (c[d >> 2] | 0));
  }
 }
 c[d >> 2] = c[h >> 2];
 c[k + 1556 >> 2] = c[k + 1552 >> 2];
 h = k + 1344 | 0;
 c[h >> 2] = 0;
 c[h + 4 >> 2] = 0;
 c[h + 8 >> 2] = 0;
 c[h + 12 >> 2] = 0;
 c[h + 16 >> 2] = 0;
 c[h + 20 >> 2] = 0;
 c[h + 24 >> 2] = 0;
 a[h + 28 >> 0] = 0;
 a[k + 1440 >> 0] = 0;
 h = k + 1456 | 0;
 f = c[h >> 2] | 0;
 d = k + 1464 | 0;
 if (!f) {
  e = k + 1468 | 0;
  d = c[d >> 2] | 0;
 } else {
  d = c[d >> 2] | 0;
  e = k + 1468 | 0;
  g = c[e >> 2] | 0;
  if ((d | 0) < (g | 0)) {
   c[f + (d * 400 | 0) + 108 >> 2] = 0;
   f = d + 1 | 0;
   if ((f | 0) < (g | 0)) {
    g = c[h >> 2] | 0;
    h = c[e >> 2] | 0;
    do {
     c[g + (f * 400 | 0) + 108 >> 2] = 0;
     f = f + 1 | 0;
    } while ((f | 0) < (h | 0));
   }
  }
 }
 c[e >> 2] = d;
 c[k + 1492 >> 2] = c[k + 1488 >> 2];
 d = k + 1312 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 c[d + 16 >> 2] = 0;
 c[d + 20 >> 2] = 0;
 c[d + 24 >> 2] = 0;
 a[d + 28 >> 0] = 0;
 d = k + 1284 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 c[d + 16 >> 2] = 0;
 c[d + 20 >> 2] = 0;
 c[d + 24 >> 2] = 0;
 d = c[8946] | 0;
 e = 35792;
 f = e + 40 | 0;
 do {
  c[e >> 2] = 0;
  e = e + 4 | 0;
 } while ((e | 0) < (f | 0));
 l = d + 408 | 0;
 fc(c[l >> 2] | 0) | 0;
 c[l >> 2] = 0;
 a[d + 388 >> 0] = 0;
 l = d + 360 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[l + 16 >> 2] = 0;
 c[l + 20 >> 2] = 0;
 c[l + 24 >> 2] = 0;
 l = c[8946] | 0;
 k = l + 1168 | 0;
 j = l + 1700 | 0;
 c[l + 1716 >> 2] = 0;
 c[l + 1720 >> 2] = 0;
 e = c[j >> 2] | 0;
 i = l + 1708 | 0;
 if (!e) d = l + 1712 | 0; else {
  g = c[i >> 2] | 0;
  d = l + 1712 | 0;
  f = c[d >> 2] | 0;
  if ((g | 0) < (f | 0)) {
   h = g;
   while (1) {
    e = e + (h << 2) | 0;
    g = c[e >> 2] | 0;
    if (g) {
     m = g + 4 | 0;
     f = c[m >> 2] | 0;
     c[m >> 2] = f - 1;
     if ((f | 0) == 1) zc[c[c[g >> 2] >> 2] & 63](g);
     c[e >> 2] = 0;
     f = c[d >> 2] | 0;
    }
    g = h + 1 | 0;
    if ((g | 0) >= (f | 0)) break;
    e = c[j >> 2] | 0;
    h = g;
   }
   e = c[j >> 2] | 0;
  }
  cf(e);
 }
 c[j >> 2] = 0;
 c[l + 1704 >> 2] = 0;
 c[i >> 2] = 0;
 c[d >> 2] = 0;
 c[l + 1688 >> 2] = 0;
 c[l + 1692 >> 2] = 0;
 d = c[l + 1672 >> 2] | 0;
 if (d | 0) cf(d);
 e = l + 1664 | 0;
 i = l + 1648 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 e = c[i >> 2] | 0;
 h = l + 1656 | 0;
 if (!e) d = l + 1660 | 0; else {
  f = c[h >> 2] | 0;
  d = l + 1660 | 0;
  g = c[d >> 2] | 0;
  if ((f | 0) < (g | 0)) {
   c[e + (f * 608 | 0) + 16 >> 2] = 0;
   f = f + 1 | 0;
   if ((f | 0) < (g | 0)) {
    e = c[i >> 2] | 0;
    g = c[d >> 2] | 0;
    do {
     c[e + (f * 608 | 0) + 16 >> 2] = 0;
     f = f + 1 | 0;
    } while ((f | 0) < (g | 0));
   }
  }
  cf(e);
 }
 c[i >> 2] = 0;
 c[l + 1652 >> 2] = 0;
 c[h >> 2] = 0;
 c[d >> 2] = 0;
 c[l + 1624 >> 2] = 0;
 c[l + 1628 >> 2] = 0;
 d = c[l + 1608 >> 2] | 0;
 if (d | 0) cf(d);
 e = l + 1600 | 0;
 i = l + 1584 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 e = c[i >> 2] | 0;
 h = l + 1592 | 0;
 if (!e) d = l + 1596 | 0; else {
  f = c[h >> 2] | 0;
  d = l + 1596 | 0;
  g = c[d >> 2] | 0;
  if ((f | 0) < (g | 0)) {
   c[e + (f * 776 | 0) + 704 >> 2] = 0;
   c[e + (f * 776 | 0) + 92 >> 2] = 0;
   f = f + 1 | 0;
   if ((f | 0) < (g | 0)) {
    e = c[i >> 2] | 0;
    g = c[d >> 2] | 0;
    do {
     c[e + (f * 776 | 0) + 704 >> 2] = 0;
     c[e + (f * 776 | 0) + 92 >> 2] = 0;
     f = f + 1 | 0;
    } while ((f | 0) < (g | 0));
   }
  }
  cf(e);
 }
 c[i >> 2] = 0;
 c[l + 1588 >> 2] = 0;
 c[h >> 2] = 0;
 c[d >> 2] = 0;
 c[l + 1560 >> 2] = 0;
 c[l + 1564 >> 2] = 0;
 d = c[l + 1544 >> 2] | 0;
 if (d | 0) cf(d);
 h = l + 1520 | 0;
 e = l + 1536 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 e = c[h >> 2] | 0;
 g = l + 1528 | 0;
 if (!e) d = l + 1532 | 0; else {
  f = c[g >> 2] | 0;
  d = l + 1532 | 0;
  if ((f | 0) < (c[d >> 2] | 0)) {
   Id(e + (f * 3712 | 0) | 0);
   e = f + 1 | 0;
   if ((e | 0) < (c[d >> 2] | 0)) do {
    Id((c[h >> 2] | 0) + (e * 3712 | 0) | 0);
    e = e + 1 | 0;
   } while ((e | 0) < (c[d >> 2] | 0));
   e = c[h >> 2] | 0;
  }
  cf(e);
 }
 c[h >> 2] = 0;
 c[l + 1524 >> 2] = 0;
 c[g >> 2] = 0;
 c[d >> 2] = 0;
 c[l + 1496 >> 2] = 0;
 c[l + 1500 >> 2] = 0;
 d = c[l + 1480 >> 2] | 0;
 if (d | 0) cf(d);
 e = l + 1472 | 0;
 i = l + 1456 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 e = c[i >> 2] | 0;
 h = l + 1464 | 0;
 if (!e) d = l + 1468 | 0; else {
  f = c[h >> 2] | 0;
  d = l + 1468 | 0;
  g = c[d >> 2] | 0;
  do if ((f | 0) < (g | 0)) {
   c[e + (f * 400 | 0) + 108 >> 2] = 0;
   f = f + 1 | 0;
   if ((f | 0) >= (g | 0)) break;
   e = c[i >> 2] | 0;
   g = c[d >> 2] | 0;
   do {
    c[e + (f * 400 | 0) + 108 >> 2] = 0;
    f = f + 1 | 0;
   } while ((f | 0) < (g | 0));
  } while (0);
  cf(e);
 }
 c[i >> 2] = 0;
 c[l + 1460 >> 2] = 0;
 c[h >> 2] = 0;
 c[d >> 2] = 0;
 d = l + 1248 | 0;
 c[l + 1264 >> 2] = 0;
 c[l + 1268 >> 2] = 0;
 e = c[d >> 2] | 0;
 if (e | 0) cf(e);
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 c[l + 1236 >> 2] = 0;
 c[l + 1240 >> 2] = 0;
 i = l + 1220 | 0;
 f = c[i >> 2] | 0;
 h = l + 1228 | 0;
 if (!f) d = l + 1232 | 0; else {
  e = c[h >> 2] | 0;
  d = l + 1232 | 0;
  g = c[d >> 2] | 0;
  if ((e | 0) < (g | 0)) do {
   c[f + (e * 12 | 0) >> 2] = 0;
   e = e + 1 | 0;
  } while ((e | 0) != (g | 0));
  cf(f);
 }
 c[i >> 2] = 0;
 c[l + 1224 >> 2] = 0;
 c[h >> 2] = 0;
 c[d >> 2] = 0;
 c[l + 1212 >> 2] = 0;
 c[l + 1216 >> 2] = 0;
 i = l + 1196 | 0;
 f = c[i >> 2] | 0;
 h = l + 1204 | 0;
 if (!f) d = l + 1208 | 0; else {
  e = c[h >> 2] | 0;
  d = l + 1208 | 0;
  g = c[d >> 2] | 0;
  if ((e | 0) < (g | 0)) do {
   c[f + (e * 24 | 0) >> 2] = 0;
   e = e + 1 | 0;
  } while ((e | 0) != (g | 0));
  cf(f);
 }
 c[i >> 2] = 0;
 c[l + 1200 >> 2] = 0;
 c[h >> 2] = 0;
 c[d >> 2] = 0;
 c[l + 1184 >> 2] = 0;
 c[l + 1188 >> 2] = 0;
 d = c[k >> 2] | 0;
 if (d | 0) cf(d);
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 e = l + 532 | 0;
 d = c[e >> 2] | 0;
 if (d | 0) {
  m = c[d >> 2] | 0;
  c[d >> 2] = m - 1;
  if ((m | 0) == 1) {
   cf(c[e >> 2] | 0);
   c[e >> 2] = 0;
   d = l + 536 | 0;
   c[d >> 2] = 0;
  } else d = l + 536 | 0;
  c[e >> 2] = 0;
  c[d >> 2] = 0;
 }
 e = l + 496 | 0;
 d = c[e >> 2] | 0;
 if (d | 0) {
  m = c[d >> 2] | 0;
  c[d >> 2] = m - 1;
  if ((m | 0) == 1) {
   cf(c[e >> 2] | 0);
   c[e >> 2] = 0;
   d = l + 500 | 0;
   c[d >> 2] = 0;
  } else d = l + 500 | 0;
  c[e >> 2] = 0;
  c[d >> 2] = 0;
 }
 d = l + 388 | 0;
 if (a[d >> 0] | 0) {
  e = 35792;
  f = e + 40 | 0;
  do {
   c[e >> 2] = 0;
   e = e + 4 | 0;
  } while ((e | 0) < (f | 0));
  m = l + 408 | 0;
  fc(c[m >> 2] | 0) | 0;
  c[m >> 2] = 0;
  a[d >> 0] = 0;
  m = l + 360 | 0;
  c[m >> 2] = 0;
  c[m + 4 >> 2] = 0;
  c[m + 8 >> 2] = 0;
  c[m + 12 >> 2] = 0;
  c[m + 16 >> 2] = 0;
  c[m + 20 >> 2] = 0;
  c[m + 24 >> 2] = 0;
 }
 c[8947] = 0;
 i = l + 332 | 0;
 c[l + 348 >> 2] = 0;
 c[l + 352 >> 2] = 0;
 e = c[i >> 2] | 0;
 h = l + 340 | 0;
 if (!e) d = l + 344 | 0; else {
  f = c[h >> 2] | 0;
  d = l + 344 | 0;
  if ((f | 0) < (c[d >> 2] | 0)) {
   while (1) {
    g = c[e + (f << 5) + 24 >> 2] | 0;
    do if ((g | 0) == (e + (f << 5) + 8 | 0)) zc[c[(c[g >> 2] | 0) + 16 >> 2] & 63](g); else {
     if (!g) break;
     zc[c[(c[g >> 2] | 0) + 20 >> 2] & 63](g);
    } while (0);
    f = f + 1 | 0;
    if ((f | 0) >= (c[d >> 2] | 0)) break;
    e = c[i >> 2] | 0;
   }
   e = c[i >> 2] | 0;
  }
  cf(e);
 }
 c[i >> 2] = 0;
 c[l + 336 >> 2] = 0;
 c[h >> 2] = 0;
 c[d >> 2] = 0;
 e = l + 320 | 0;
 d = c[e >> 2] | 0;
 if (d | 0) {
  m = c[d >> 2] | 0;
  c[d >> 2] = m - 1;
  if ((m | 0) == 1) {
   cf(c[e >> 2] | 0);
   c[e >> 2] = 0;
   d = l + 324 | 0;
   c[d >> 2] = 0;
  } else d = l + 324 | 0;
  c[e >> 2] = 0;
  c[d >> 2] = 0;
 }
 e = l + 188 | 0;
 d = c[e >> 2] | 0;
 if (d | 0) {
  m = c[d >> 2] | 0;
  c[d >> 2] = m - 1;
  if ((m | 0) == 1) {
   cf(c[e >> 2] | 0);
   c[e >> 2] = 0;
   d = l + 192 | 0;
   c[d >> 2] = 0;
  } else d = l + 192 | 0;
  c[e >> 2] = 0;
  c[d >> 2] = 0;
 }
 e = l + 28 | 0;
 d = c[e >> 2] | 0;
 if (!d) {
  cf(l);
  c[8946] = 0;
  m = he(b) | 0;
  return m | 0;
 }
 m = c[d >> 2] | 0;
 c[d >> 2] = m - 1;
 if ((m | 0) == 1) {
  cf(c[e >> 2] | 0);
  c[e >> 2] = 0;
  d = l + 32 | 0;
  c[d >> 2] = 0;
 } else d = l + 32 | 0;
 c[e >> 2] = 0;
 c[d >> 2] = 0;
 cf(l);
 c[8946] = 0;
 m = he(b) | 0;
 return m | 0;
}

function ud(f, h, j) {
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0.0, L = 0.0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, wa = 0;
 J = i;
 i = i + 160 | 0;
 I = J + 48 | 0;
 s = J + 40 | 0;
 w = J + 32 | 0;
 A = J + 24 | 0;
 z = J + 16 | 0;
 x = J + 8 | 0;
 H = J + 144 | 0;
 t = J + 64 | 0;
 v = J + 148 | 0;
 k = J;
 l = J + 56 | 0;
 m = h + 24 | 0;
 n = j + 92 | 0;
 be(f, m, n);
 if ((c[f + 4 >> 2] | 0) != -1) {
  i = J;
  return;
 }
 E = h + 280 | 0;
 B = c[E >> 2] | 0;
 c[E >> 2] = B + 1;
 E = h + 320 | 0;
 C = c[E >> 2] | 0;
 F = b[(c[h + 312 >> 2] | 0) + (C << 1) >> 1] | 0;
 c[E >> 2] = C + 1;
 E = Df(e[h + 284 >> 1] | 0, 0, 16) | 0;
 B = B | D;
 F = E | F & 65535;
 E = f;
 c[E >> 2] = F;
 c[E + 4 >> 2] = B;
 E = k;
 c[E >> 2] = F;
 c[E + 4 >> 2] = B;
 c[l >> 2] = c[(c[h >> 2] | 0) + ((c[h + 12 >> 2] | 0) + -1 << 2) >> 2];
 $d(m, n, k, l);
 E = h + 296 | 0;
 B = (c[E >> 2] | 0) + (e[f >> 1] | 0) | 0;
 F = h + 288 | 0;
 C = c[F >> 2] | 0;
 p = C + (B * 400 | 0) | 0;
 c[C + (B * 400 | 0) + 8 >> 2] = 1;
 G = h + 276 | 0;
 c[C + (B * 400 | 0) + 12 >> 2] = c[G >> 2];
 if ((p | 0) != (f | 0)) {
  o = f;
  q = c[o + 4 >> 2] | 0;
  r = p;
  c[r >> 2] = c[o >> 2];
  c[r + 4 >> 2] = q;
 }
 o = C + (B * 400 | 0) + 16 | 0;
 k = j;
 r = c[k + 4 >> 2] | 0;
 q = o;
 c[q >> 2] = c[k >> 2];
 c[q + 4 >> 2] = r;
 q = C + (B * 400 | 0) + 24 | 0;
 nd(q, j + 8 | 0);
 r = C + (B * 400 | 0) + 92 | 0;
 k = j + 76 | 0;
 c[r >> 2] = c[k >> 2];
 c[r + 4 >> 2] = c[k + 4 >> 2];
 c[r + 8 >> 2] = c[k + 8 >> 2];
 a[r + 12 >> 0] = a[k + 12 >> 0] | 0;
 k = C + (B * 400 | 0) + 108 | 0;
 if ((o | 0) == (j | 0)) k = c[j + 96 >> 2] | 0; else {
  c[k >> 2] = 0;
  Be(k, j + 92 | 0);
  k = c[j + 96 >> 2] | 0;
  m = j + 104 | 0;
  n = c[m + 4 >> 2] | 0;
  o = C + (B * 400 | 0) + 120 | 0;
  c[o >> 2] = c[m >> 2];
  c[o + 4 >> 2] = n;
 }
 c[C + (B * 400 | 0) + 112 >> 2] = k;
 o = C + (B * 400 | 0) + 128 | 0;
 k = j + 112 | 0;
 l = o;
 m = k;
 n = l + 76 | 0;
 do {
  c[l >> 2] = c[m >> 2];
  l = l + 4 | 0;
  m = m + 4 | 0;
 } while ((l | 0) < (n | 0));
 a[o + 76 >> 0] = a[k + 76 >> 0] | 0;
 h = h + 144 | 0;
 k = a[C + (B * 400 | 0) + 204 >> 0] | 0;
 a : do if (!(k & 4)) {
  if (!(k & 8)) {
   pe(19241, s);
   eb();
  }
  wa = d[q >> 0] | d[q + 1 >> 0] << 8;
  ua = C + (B * 400 | 0) + 26 | 0;
  ua = d[ua >> 0] | d[ua + 1 >> 0] << 8;
  ta = C + (B * 400 | 0) + 28 | 0;
  ta = d[ta >> 0] | d[ta + 1 >> 0] << 8;
  sa = C + (B * 400 | 0) + 30 | 0;
  sa = d[sa >> 0] | d[sa + 1 >> 0] << 8;
  ra = C + (B * 400 | 0) + 32 | 0;
  ra = d[ra >> 0] | d[ra + 1 >> 0] << 8;
  qa = C + (B * 400 | 0) + 34 | 0;
  qa = d[qa >> 0] | d[qa + 1 >> 0] << 8;
  pa = C + (B * 400 | 0) + 36 | 0;
  pa = d[pa >> 0] | d[pa + 1 >> 0] << 8;
  oa = C + (B * 400 | 0) + 38 | 0;
  oa = d[oa >> 0] | d[oa + 1 >> 0] << 8;
  na = C + (B * 400 | 0) + 40 | 0;
  na = d[na >> 0] | d[na + 1 >> 0] << 8;
  ma = C + (B * 400 | 0) + 42 | 0;
  ma = d[ma >> 0] | d[ma + 1 >> 0] << 8;
  la = C + (B * 400 | 0) + 44 | 0;
  la = d[la >> 0] | d[la + 1 >> 0] << 8;
  ka = C + (B * 400 | 0) + 46 | 0;
  ka = d[ka >> 0] | d[ka + 1 >> 0] << 8;
  ja = C + (B * 400 | 0) + 48 | 0;
  ja = d[ja >> 0] | d[ja + 1 >> 0] << 8;
  ia = C + (B * 400 | 0) + 50 | 0;
  ia = d[ia >> 0] | d[ia + 1 >> 0] << 8;
  ha = C + (B * 400 | 0) + 52 | 0;
  ha = d[ha >> 0] | d[ha + 1 >> 0] << 8;
  ga = C + (B * 400 | 0) + 54 | 0;
  ga = d[ga >> 0] | d[ga + 1 >> 0] << 8;
  fa = C + (B * 400 | 0) + 56 | 0;
  fa = d[fa >> 0] | d[fa + 1 >> 0] << 8;
  da = a[C + (B * 400 | 0) + 58 >> 0] | 0;
  ca = a[C + (B * 400 | 0) + 59 >> 0] | 0;
  ba = a[C + (B * 400 | 0) + 60 >> 0] | 0;
  aa = a[C + (B * 400 | 0) + 61 >> 0] | 0;
  _ = a[C + (B * 400 | 0) + 62 >> 0] | 0;
  Z = a[C + (B * 400 | 0) + 63 >> 0] | 0;
  Y = a[C + (B * 400 | 0) + 64 >> 0] | 0;
  X = a[C + (B * 400 | 0) + 65 >> 0] | 0;
  W = a[C + (B * 400 | 0) + 66 >> 0] | 0;
  V = a[C + (B * 400 | 0) + 67 >> 0] | 0;
  U = a[C + (B * 400 | 0) + 68 >> 0] | 0;
  T = a[C + (B * 400 | 0) + 69 >> 0] | 0;
  S = a[C + (B * 400 | 0) + 70 >> 0] | 0;
  R = a[C + (B * 400 | 0) + 71 >> 0] | 0;
  Q = a[C + (B * 400 | 0) + 72 >> 0] | 0;
  P = a[C + (B * 400 | 0) + 73 >> 0] | 0;
  O = a[C + (B * 400 | 0) + 74 >> 0] | 0;
  N = a[C + (B * 400 | 0) + 75 >> 0] | 0;
  M = a[C + (B * 400 | 0) + 76 >> 0] | 0;
  n = a[C + (B * 400 | 0) + 77 >> 0] | 0;
  o = a[C + (B * 400 | 0) + 78 >> 0] | 0;
  j = a[C + (B * 400 | 0) + 79 >> 0] | 0;
  p = a[C + (B * 400 | 0) + 80 >> 0] | 0;
  q = a[C + (B * 400 | 0) + 81 >> 0] | 0;
  r = a[C + (B * 400 | 0) + 82 >> 0] | 0;
  s = a[C + (B * 400 | 0) + 83 >> 0] | 0;
  x = a[C + (B * 400 | 0) + 84 >> 0] | 0;
  y = a[C + (B * 400 | 0) + 85 >> 0] | 0;
  z = a[C + (B * 400 | 0) + 86 >> 0] | 0;
  A = a[C + (B * 400 | 0) + 87 >> 0] | 0;
  m = a[C + (B * 400 | 0) + 88 >> 0] | 0;
  k = a[C + (B * 400 | 0) + 89 >> 0] | 0;
  l = C + (B * 400 | 0) + 90 | 0;
  l = d[l >> 0] | d[l + 1 >> 0] << 8;
  c[C + (B * 400 | 0) + 208 >> 2] = 4;
  ea = C + (B * 400 | 0) + 212 | 0;
  a[ea >> 0] = wa;
  a[ea + 1 >> 0] = wa >> 8;
  ea = C + (B * 400 | 0) + 214 | 0;
  a[ea >> 0] = ua;
  a[ea + 1 >> 0] = ua >> 8;
  ea = C + (B * 400 | 0) + 216 | 0;
  a[ea >> 0] = ta;
  a[ea + 1 >> 0] = ta >> 8;
  ea = C + (B * 400 | 0) + 218 | 0;
  a[ea >> 0] = sa;
  a[ea + 1 >> 0] = sa >> 8;
  ea = C + (B * 400 | 0) + 220 | 0;
  a[ea >> 0] = ra;
  a[ea + 1 >> 0] = ra >> 8;
  ea = C + (B * 400 | 0) + 222 | 0;
  a[ea >> 0] = qa;
  a[ea + 1 >> 0] = qa >> 8;
  ea = C + (B * 400 | 0) + 224 | 0;
  a[ea >> 0] = pa;
  a[ea + 1 >> 0] = pa >> 8;
  ea = C + (B * 400 | 0) + 226 | 0;
  a[ea >> 0] = oa;
  a[ea + 1 >> 0] = oa >> 8;
  ea = C + (B * 400 | 0) + 228 | 0;
  a[ea >> 0] = na;
  a[ea + 1 >> 0] = na >> 8;
  ea = C + (B * 400 | 0) + 230 | 0;
  a[ea >> 0] = ma;
  a[ea + 1 >> 0] = ma >> 8;
  ea = C + (B * 400 | 0) + 232 | 0;
  a[ea >> 0] = la;
  a[ea + 1 >> 0] = la >> 8;
  ea = C + (B * 400 | 0) + 234 | 0;
  a[ea >> 0] = ka;
  a[ea + 1 >> 0] = ka >> 8;
  ea = C + (B * 400 | 0) + 236 | 0;
  a[ea >> 0] = ja;
  a[ea + 1 >> 0] = ja >> 8;
  ea = C + (B * 400 | 0) + 238 | 0;
  a[ea >> 0] = ia;
  a[ea + 1 >> 0] = ia >> 8;
  ea = C + (B * 400 | 0) + 240 | 0;
  a[ea >> 0] = ha;
  a[ea + 1 >> 0] = ha >> 8;
  ea = C + (B * 400 | 0) + 242 | 0;
  a[ea >> 0] = ga;
  a[ea + 1 >> 0] = ga >> 8;
  ea = C + (B * 400 | 0) + 244 | 0;
  a[ea >> 0] = fa;
  a[ea + 1 >> 0] = fa >> 8;
  a[C + (B * 400 | 0) + 246 >> 0] = da;
  a[C + (B * 400 | 0) + 247 >> 0] = ca;
  a[C + (B * 400 | 0) + 248 >> 0] = ba;
  a[C + (B * 400 | 0) + 249 >> 0] = aa;
  a[C + (B * 400 | 0) + 250 >> 0] = _;
  a[C + (B * 400 | 0) + 251 >> 0] = Z;
  a[C + (B * 400 | 0) + 252 >> 0] = Y;
  a[C + (B * 400 | 0) + 253 >> 0] = X;
  a[C + (B * 400 | 0) + 254 >> 0] = W;
  a[C + (B * 400 | 0) + 255 >> 0] = V;
  a[C + (B * 400 | 0) + 256 >> 0] = U;
  a[C + (B * 400 | 0) + 257 >> 0] = T;
  a[C + (B * 400 | 0) + 258 >> 0] = S;
  a[C + (B * 400 | 0) + 259 >> 0] = R;
  a[C + (B * 400 | 0) + 260 >> 0] = Q;
  a[C + (B * 400 | 0) + 261 >> 0] = P;
  a[C + (B * 400 | 0) + 262 >> 0] = O;
  a[C + (B * 400 | 0) + 263 >> 0] = N;
  a[C + (B * 400 | 0) + 264 >> 0] = M;
  a[C + (B * 400 | 0) + 265 >> 0] = n;
  a[C + (B * 400 | 0) + 266 >> 0] = o;
  a[C + (B * 400 | 0) + 267 >> 0] = j;
  a[C + (B * 400 | 0) + 268 >> 0] = p;
  a[C + (B * 400 | 0) + 269 >> 0] = q;
  a[C + (B * 400 | 0) + 270 >> 0] = r;
  a[C + (B * 400 | 0) + 271 >> 0] = s;
  a[C + (B * 400 | 0) + 272 >> 0] = x;
  a[C + (B * 400 | 0) + 273 >> 0] = y;
  a[C + (B * 400 | 0) + 274 >> 0] = z;
  a[C + (B * 400 | 0) + 275 >> 0] = A;
  a[C + (B * 400 | 0) + 276 >> 0] = m;
  a[C + (B * 400 | 0) + 277 >> 0] = k;
  k = C + (B * 400 | 0) + 278 | 0;
  a[k >> 0] = l;
  a[k + 1 >> 0] = l >> 8;
  c[C + (B * 400 | 0) + 280 >> 2] = 0;
  c[C + (B * 400 | 0) + 284 >> 2] = 6;
  c[C + (B * 400 | 0) + 288 >> 2] = 1;
  k = C + (B * 400 | 0) + 292 | 0;
  c[k >> 2] = 0;
  c[C + (B * 400 | 0) + 296 >> 2] = 1;
  l = C + (B * 400 | 0) + 300 | 0;
  c[l >> 2] = 0;
  c[l + 4 >> 2] = 6;
  l = (a[C + (B * 400 | 0) + 104 >> 0] | 0) != 0;
  L = l ? 0.0 : 1.0;
  K = l ? 1.0 : 0.0;
  g[t >> 2] = -1.0;
  g[t + 4 >> 2] = 1.0;
  g[t + 8 >> 2] = 0.0;
  g[t + 12 >> 2] = 0.0;
  g[t + 16 >> 2] = L;
  g[t + 20 >> 2] = 1.0;
  g[t + 24 >> 2] = 1.0;
  g[t + 28 >> 2] = 0.0;
  g[t + 32 >> 2] = 1.0;
  g[t + 36 >> 2] = L;
  g[t + 40 >> 2] = 1.0;
  g[t + 44 >> 2] = -1.0;
  g[t + 48 >> 2] = 0.0;
  g[t + 52 >> 2] = 1.0;
  g[t + 56 >> 2] = K;
  g[t + 60 >> 2] = -1.0;
  g[t + 64 >> 2] = -1.0;
  g[t + 68 >> 2] = 0.0;
  g[t + 72 >> 2] = 0.0;
  g[t + 76 >> 2] = K;
  b[v >> 1] = b[1102] | 0;
  b[v + 2 >> 1] = b[1103] | 0;
  b[v + 4 >> 1] = b[1104] | 0;
  b[v + 6 >> 1] = b[1105] | 0;
  b[v + 8 >> 1] = b[1106] | 0;
  b[v + 10 >> 1] = b[1107] | 0;
  Jd(c[h >> 2] | 0);
  c[H >> 2] = 0;
  Ia(1, H | 0);
  l = c[H >> 2] | 0;
  m = (c[h >> 2] | 0) + 292 | 0;
  if ((c[m >> 2] | 0) != (l | 0)) {
   c[m >> 2] = l;
   va(34962, l | 0);
  }
  Pb(34962, 80, t | 0, 35044);
  Jd(c[h >> 2] | 0);
  c[C + (B * 400 | 0) + 372 >> 2] = c[H >> 2];
  k = c[k >> 2] | 0;
  Jd(c[h >> 2] | 0);
  c[H >> 2] = 0;
  Ia(1, H | 0);
  l = c[H >> 2] | 0;
  m = (c[h >> 2] | 0) + 296 | 0;
  if ((c[m >> 2] | 0) != (l | 0)) {
   c[m >> 2] = l;
   va(34963, l | 0);
  }
  switch (k | 0) {
  case 0:
   {
    u = 35044;
    break;
   }
  case 1:
   {
    u = 35048;
    break;
   }
  case 2:
   {
    u = 35040;
    break;
   }
  default:
   {
    pe(20015, w);
    eb();
   }
  }
  Pb(34963, 12, v | 0, u | 0);
  Jd(c[h >> 2] | 0);
  c[C + (B * 400 | 0) + 388 >> 2] = c[H >> 2];
 } else {
  Gd(p);
  wa = c[C + (B * 400 | 0) + 136 >> 2] | 0;
  k = C + (B * 400 | 0) + 296 | 0;
  c[k >> 2] = wa;
  if ((wa | 0) > 0) {
   l = 0;
   do {
    ta = C + (B * 400 | 0) + 140 + (l << 3) | 0;
    ua = c[ta + 4 >> 2] | 0;
    wa = C + (B * 400 | 0) + 300 + (l << 3) | 0;
    c[wa >> 2] = c[ta >> 2];
    c[wa + 4 >> 2] = ua;
    l = l + 1 | 0;
   } while ((l | 0) < (c[k >> 2] | 0));
  }
  b : do if ((c[r >> 2] | 0) > 0) {
   j = $(d[C + (B * 400 | 0) + 279 >> 0] | 0, c[C + (B * 400 | 0) + 208 >> 2] | 0) | 0;
   p = C + (B * 400 | 0) + 280 | 0;
   o = c[p >> 2] | 0;
   q = C + (B * 400 | 0) + 368 | 0;
   a[q >> 0] = (o | 0) == 2 ? 2 : 1;
   k = 0;
   c : while (1) {
    n = k & 255;
    Jd(c[h >> 2] | 0);
    c[H >> 2] = 0;
    Ia(1, H | 0);
    l = c[H >> 2] | 0;
    m = (c[h >> 2] | 0) + 292 | 0;
    if ((c[m >> 2] | 0) != (l | 0)) {
     c[m >> 2] = l;
     va(34962, l | 0);
    }
    switch (o | 0) {
    case 0:
     {
      l = 35044;
      break;
     }
    case 1:
     {
      l = 35048;
      break;
     }
    case 2:
     {
      l = 35040;
      break;
     }
    default:
     break c;
    }
    Pb(34962, j | 0, 0, l | 0);
    Jd(c[h >> 2] | 0);
    c[C + (B * 400 | 0) + 372 + (n << 2) >> 2] = c[H >> 2];
    k = k + 1 << 24 >> 24;
    if ((k & 255) >= (d[q >> 0] | 0)) break b;
    o = c[p >> 2] | 0;
   }
   pe(20015, x);
   eb();
  } while (0);
  k = c[C + (B * 400 | 0) + 288 >> 2] | 0;
  if (k | 0) {
   p = C + (B * 400 | 0) + 292 | 0;
   m = c[p >> 2] | 0;
   q = C + (B * 400 | 0) + 384 | 0;
   a[q >> 0] = (m | 0) == 2 ? 2 : 1;
   l = c[C + (B * 400 | 0) + 284 >> 2] | 0;
   switch (k | 0) {
   case 2:
    {
     y = 4;
     break;
    }
   case 1:
    {
     y = 2;
     break;
    }
   default:
    {
     pe(21576, z);
     eb();
    }
   }
   j = $(y, l) | 0;
   k = 0;
   d : while (1) {
    o = k & 255;
    Jd(c[h >> 2] | 0);
    c[H >> 2] = 0;
    Ia(1, H | 0);
    l = c[H >> 2] | 0;
    n = (c[h >> 2] | 0) + 296 | 0;
    if ((c[n >> 2] | 0) != (l | 0)) {
     c[n >> 2] = l;
     va(34963, l | 0);
    }
    switch (m | 0) {
    case 0:
     {
      l = 35044;
      break;
     }
    case 1:
     {
      l = 35048;
      break;
     }
    case 2:
     {
      l = 35040;
      break;
     }
    default:
     break d;
    }
    Pb(34963, j | 0, 0, l | 0);
    Jd(c[h >> 2] | 0);
    c[C + (B * 400 | 0) + 388 + (o << 2) >> 2] = c[H >> 2];
    k = k + 1 << 24 >> 24;
    if ((k & 255) >= (d[q >> 0] | 0)) break a;
    m = c[p >> 2] | 0;
   }
   pe(20015, A);
   eb();
  }
 } while (0);
 m = c[f >> 2] | 0;
 n = m & 65535;
 l = (c[E >> 2] | 0) + n | 0;
 k = c[F >> 2] | 0;
 ua = f;
 wa = k + (l * 400 | 0) | 0;
 if ((c[ua >> 2] | 0) == (c[wa >> 2] | 0) ? (c[ua + 4 >> 2] | 0) == (c[wa + 4 >> 2] | 0) : 0) {
  c[k + (l * 400 | 0) + 8 >> 2] = 3;
  c[k + (l * 400 | 0) + 12 >> 2] = c[G >> 2];
  i = J;
  return;
 } else {
  c[I >> 2] = m >>> 16;
  c[I + 4 >> 2] = n;
  oe(19098, I);
  i = J;
  return;
 }
}

function dd(f) {
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 80 | 0;
 v = z + 64 | 0;
 w = z + 48 | 0;
 y = z;
 u = c[8946] | 0;
 k = u + 128 | 0;
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 k = (c[u + 1656 >> 2] | 0) + (e[f >> 1] | 0) | 0;
 h = c[u + 1648 >> 2] | 0;
 j = h + (k * 608 | 0) | 0;
 s = f;
 t = j;
 if ((c[s >> 2] | 0) == (c[t >> 2] | 0) ? (c[s + 4 >> 2] | 0) == (c[t + 4 >> 2] | 0) : 0) {
  if ((c[h + (k * 608 | 0) + 8 >> 2] | 0) != 3) x = 3;
 } else x = 3;
 if ((x | 0) == 3) j = 0;
 c[v >> 2] = 0;
 c[v + 4 >> 2] = 0;
 c[v + 8 >> 2] = 0;
 c[v + 12 >> 2] = 0;
 h = f + 8 | 0;
 a : do if ((c[h + 4 >> 2] | 0) == -1) {
  q = v;
  x = 15;
 } else {
  n = c[u + 1464 >> 2] | 0;
  l = n + (e[h >> 1] | 0) | 0;
  o = c[u + 1456 >> 2] | 0;
  k = o + (l * 400 | 0) | 0;
  s = h;
  t = k;
  if ((c[s >> 2] | 0) == (c[t >> 2] | 0) ? (c[s + 4 >> 2] | 0) == (c[t + 4 >> 2] | 0) : 0) {
   if ((c[o + (l * 400 | 0) + 8 >> 2] | 0) != 3) x = 7;
  } else x = 7;
  if ((x | 0) == 7) k = 0;
  c[v >> 2] = k;
  m = f + 16 | 0;
  if ((c[m + 4 >> 2] | 0) == -1) l = 1; else {
   l = n + (e[m >> 1] | 0) | 0;
   h = o + (l * 400 | 0) | 0;
   s = m;
   t = h;
   if ((c[s >> 2] | 0) == (c[t >> 2] | 0) ? (c[s + 4 >> 2] | 0) == (c[t + 4 >> 2] | 0) : 0) {
    if ((c[o + (l * 400 | 0) + 8 >> 2] | 0) != 3) x = 123;
   } else x = 123;
   if ((x | 0) == 123) h = 0;
   c[v + 4 >> 2] = h;
   l = f + 24 | 0;
   if ((c[l + 4 >> 2] | 0) == -1) l = 2; else {
    m = n + (e[l >> 1] | 0) | 0;
    h = o + (m * 400 | 0) | 0;
    s = l;
    t = h;
    if ((c[s >> 2] | 0) == (c[t >> 2] | 0) ? (c[s + 4 >> 2] | 0) == (c[t + 4 >> 2] | 0) : 0) {
     if ((c[o + (m * 400 | 0) + 8 >> 2] | 0) != 3) x = 127;
    } else x = 127;
    if ((x | 0) == 127) h = 0;
    c[v + 8 >> 2] = h;
    m = f + 32 | 0;
    if ((c[m + 4 >> 2] | 0) == -1) l = 3; else {
     l = n + (e[m >> 1] | 0) | 0;
     h = o + (l * 400 | 0) | 0;
     s = m;
     t = h;
     if ((c[s >> 2] | 0) == (c[t >> 2] | 0) ? (c[s + 4 >> 2] | 0) == (c[t + 4 >> 2] | 0) : 0) {
      if ((c[o + (l * 400 | 0) + 8 >> 2] | 0) != 3) x = 131;
     } else x = 131;
     if ((x | 0) == 131) h = 0;
     c[v + 12 >> 2] = h;
     l = 4;
    }
   }
  }
  h = 0;
  while (1) {
   h = h + 1 | 0;
   if (!k) break;
   if ((h | 0) >= (l | 0)) {
    q = v;
    x = 15;
    break a;
   }
   k = c[v + (h << 2) >> 2] | 0;
  }
  c[u + 628 >> 2] = 0;
 } while (0);
 if ((x | 0) == 15) {
  c[u + 628 >> 2] = j;
  p = j + 48 | 0;
  h = c[j + 52 >> 2] | 0;
  k = c[u + 652 >> 2] | 0;
  do if ((h | 0) == (k | 0)) {
   if ((b[p >> 1] | 0) == (b[u + 648 >> 1] | 0)) if ((b[j + 50 >> 1] | 0) == (b[u + 650 >> 1] | 0)) break;
   h = u + 648 | 0;
   k = 0;
   x = 27;
  } else {
   o = u + 648 | 0;
   h = h & 65535;
   k = k & 65535;
   m = j + 52 | 0;
   n = u + 652 | 0;
   l = h & 31;
   if (l << 16 >> 16 != (k & 31)) {
    Za(c[1424 + ((l & 65535) << 2) >> 2] | 0);
    k = b[n >> 1] | 0;
    h = b[m >> 1] | 0;
   }
   l = (h & 65535) >>> 5 & 1;
   if (l << 16 >> 16 != ((k & 65535) >>> 5 & 1)) {
    Va(l & 255 | 0);
    h = b[m >> 1] | 0;
    k = b[n >> 1] | 0;
   }
   h = h & 64;
   if ((h & 65535) >>> 6 << 16 >> 16 == ((k & 65535) >>> 6 & 1)) {
    h = o;
    k = 1;
    x = 27;
   } else if (!(h << 16 >> 16)) {
    oc(2960);
    h = o;
    k = 1;
    x = 27;
    break;
   } else {
    db(2960);
    h = o;
    k = 1;
    x = 27;
    break;
   }
  } while (0);
  do if ((x | 0) == 27) {
   if ((b[h >> 1] | 0) == (b[p >> 1] | 0)) l = 0; else {
    Ld(p, h, 1028);
    l = 1;
   }
   if ((b[u + 650 >> 1] | 0) == (b[j + 50 >> 1] | 0)) {
    if (!(k | l)) break;
   } else Ld(p, h, 1029);
   r = p;
   s = c[r + 4 >> 2] | 0;
   t = h;
   c[t >> 2] = c[r >> 2];
   c[t + 4 >> 2] = s;
  } while (0);
  p = j + 24 | 0;
  s = p;
  h = c[s >> 2] | 0;
  t = u + 640 | 0;
  k = c[t >> 2] | 0;
  if (!((h | 0) == (k | 0) ? (c[s + 4 >> 2] | 0) == (c[t + 4 >> 2] | 0) : 0)) {
   h = h & 1;
   o = u + 640 | 0;
   do if ((h | 0) != (k & 1 | 0)) if ((h | 0) == 0 & 0 == 0) {
    oc(3042);
    break;
   } else {
    db(3042);
    break;
   } while (0);
   l = c[p >> 2] | 0;
   k = e[p + 4 >> 1] | 0;
   h = c[o >> 2] | 0;
   m = e[o + 4 >> 1] | 0;
   if (!(((h ^ l) & 16762878 | 0) == 0 & 0 == 0)) {
    s = Cf(l | 0, k & 65535 | 0, 1) | 0;
    s = c[1488 + ((s & 31) << 2) >> 2] | 0;
    t = Cf(l | 0, k & 65535 | 0, 6) | 0;
    t = c[1488 + ((t & 31) << 2) >> 2] | 0;
    m = Cf(l | 0, k & 65535 | 0, 14) | 0;
    m = c[1488 + ((m & 31) << 2) >> 2] | 0;
    h = Cf(l | 0, k & 65535 | 0, 19) | 0;
    yb(s | 0, t | 0, m | 0, c[1488 + ((h & 31) << 2) >> 2] | 0);
    h = c[o >> 2] | 0;
    l = c[p >> 2] | 0;
    m = e[o + 4 >> 1] | 0;
    k = e[p + 4 >> 1] | 0;
   }
   if (((h ^ l) & 117454848 | 0) == 0 & 0 == 0) n = m; else {
    n = Cf(l | 0, k & 65535 | 0, 11) | 0;
    n = c[1548 + ((n & 7) << 2) >> 2] | 0;
    k = Cf(l | 0, k & 65535 | 0, 24) | 0;
    tc(n | 0, c[1548 + ((k & 7) << 2) >> 2] | 0);
    k = e[p + 4 >> 1] | 0;
    l = c[p >> 2] | 0;
    n = e[o + 4 >> 1] | 0;
    h = c[o >> 2] | 0;
   }
   m = Cf(l | 0, k & 65535 | 0, 27) | 0;
   t = Cf(h | 0, n & 65535 | 0, 27) | 0;
   if (!(((t ^ m) & 15 | 0) == 0 & 0 == 0)) {
    r = Cf(l | 0, k & 65535 | 0, 30) | 0;
    s = Cf(l | 0, k & 65535 | 0, 29) | 0;
    t = Cf(l | 0, k & 65535 | 0, 28) | 0;
    mc(r & 1 | 0, s & 1 | 0, t & 1 | 0, m & 1 | 0);
   }
   r = p;
   s = c[r + 4 >> 2] | 0;
   t = o;
   c[t >> 2] = c[r >> 2];
   c[t + 4 >> 2] = s;
  }
  k = j + 32 | 0;
  l = u + 676 | 0;
  if (+g[k >> 2] != +g[l >> 2]) {
   h = u + 680 | 0;
   x = 50;
  } else {
   h = u + 680 | 0;
   if (+g[j + 36 >> 2] != +g[h >> 2]) x = 50; else if (+g[j + 40 >> 2] != +g[u + 684 >> 2]) x = 50; else if (+g[j + 44 >> 2] != +g[u + 688 >> 2]) x = 50;
  }
  if ((x | 0) == 50) {
   c[l >> 2] = c[k >> 2];
   c[l + 4 >> 2] = c[k + 4 >> 2];
   c[l + 8 >> 2] = c[k + 8 >> 2];
   c[l + 12 >> 2] = c[k + 12 >> 2];
   qc(+(+g[l >> 2]), +(+g[h >> 2]), +(+g[u + 684 >> 2]), +(+g[u + 688 >> 2]));
  }
  m = j + 56 | 0;
  h = b[m >> 1] | 0;
  n = u + 656 | 0;
  k = b[n >> 1] | 0;
  if (h << 16 >> 16 != k << 16 >> 16) {
   h = h & 1;
   do if (h << 16 >> 16 != (k & 1)) if (!(h << 16 >> 16)) {
    oc(2884);
    break;
   } else {
    db(2884);
    break;
   } while (0);
   h = b[m >> 1] | 0;
   k = (h & 65535) >>> 5 & 7;
   l = b[n >> 1] | 0;
   if (k << 16 >> 16 == ((l & 65535) >>> 5 & 7)) k = l; else {
    tb(c[1560 + ((k & 65535) << 2) >> 2] | 0);
    h = b[m >> 1] | 0;
    k = b[n >> 1] | 0;
   }
   h = h & 2;
   do if ((h & 65535) >>> 1 << 16 >> 16 != ((k & 65535) >>> 1 & 1)) if (!(h << 16 >> 16)) {
    oc(32823);
    break;
   } else {
    db(32823);
    break;
   } while (0);
   h = b[m >> 1] & 4;
   do if ((h & 65535) >>> 2 << 16 >> 16 != ((e[n >> 1] | 0) >>> 2 & 1)) if (!(h << 16 >> 16)) {
    oc(3089);
    break;
   } else {
    db(3089);
    break;
   } while (0);
   h = b[m >> 1] & 8;
   do if ((h & 65535) >>> 3 << 16 >> 16 != ((e[n >> 1] | 0) >>> 3 & 1)) if (!(h << 16 >> 16)) {
    oc(3024);
    break;
   } else {
    db(3024);
    break;
   } while (0);
   b[n >> 1] = b[m >> 1] | 0;
  }
  h = c[(c[j + 344 >> 2] | 0) + 3064 >> 2] | 0;
  k = u + 716 | 0;
  if ((c[k >> 2] | 0) != (h | 0)) {
   c[k >> 2] = h;
   na(h | 0);
  }
  h = c[q >> 2] | 0;
  c[u + 632 >> 2] = h;
  h = c[h + 388 + (d[h + 385 >> 0] << 2) >> 2] | 0;
  k = u + 712 | 0;
  if ((c[k >> 2] | 0) != (h | 0)) {
   c[k >> 2] = h;
   va(34963, h | 0);
  }
  q = u + 708 | 0;
  t = 0;
  do {
   r = j + 348 + (t << 4) | 0;
   s = u + 848 + (t << 4) | 0;
   m = c[v + (d[j + 348 + (t << 4) + 2 >> 0] << 2) >> 2] | 0;
   m = c[m + 372 + (d[m + 369 >> 0] << 2) >> 2] | 0;
   n = u + 1104 + (t << 2) | 0;
   o = c[n >> 2] | 0;
   p = c[r >> 2] | 0;
   h = p & 255;
   k = c[s >> 2] | 0;
   if (h << 24 >> 24 == (k & 255) << 24 >> 24) if ((p >>> 24 & 255) << 24 >> 24 == (k >>> 24 & 255) << 24 >> 24 & ((p >>> 16 & 255) << 24 >> 24 == (k >>> 16 & 255) << 24 >> 24 ? ((p & 65535) >>> 8 & 255) << 24 >> 24 == ((k & 65535) >>> 8 & 255) << 24 >> 24 : 0)) {
    k = c[j + 348 + (t << 4) + 4 >> 2] | 0;
    l = c[u + 848 + (t << 4) + 4 >> 2] | 0;
    if ((k & 255) << 24 >> 24 == (l & 255) << 24 >> 24) if ((k >>> 16 & 255) << 24 >> 24 == (l >>> 16 & 255) << 24 >> 24 ? ((k & 65535) >>> 8 & 255) << 24 >> 24 == ((l & 65535) >>> 8 & 255) << 24 >> 24 : 0) if ((c[j + 348 + (t << 4) + 8 >> 2] | 0) == (c[u + 848 + (t << 4) + 8 >> 2] | 0)) {
     if ((m | 0) != (o | 0) ? 1 : (c[j + 348 + (t << 4) + 12 >> 2] | 0) != (c[u + 848 + (t << 4) + 12 >> 2] | 0)) x = 82;
    } else x = 82; else x = 82; else x = 82;
   } else x = 82; else x = 82;
   if ((x | 0) == 82) {
    x = 0;
    if (!(a[j + 348 + (t << 4) + 1 >> 0] | 0)) {
     if (a[u + 848 + (t << 4) + 1 >> 0] | 0) Aa(p & 255 | 0);
    } else {
     c[n >> 2] = m;
     if ((c[q >> 2] | 0) == (m | 0)) k = r; else {
      c[q >> 2] = m;
      va(34962, m | 0);
      k = r;
      h = a[r >> 0] | 0;
     }
     Qa(h & 255 | 0, d[j + 348 + (t << 4) + 5 >> 0] | 0, c[j + 348 + (t << 4) + 12 >> 2] | 0, a[j + 348 + (t << 4) + 6 >> 0] | 0, d[j + 348 + (t << 4) + 4 >> 0] | 0, c[j + 348 + (t << 4) + 8 >> 2] | 0);
     if (!(a[u + 848 + (t << 4) + 1 >> 0] | 0)) Mb(d[k >> 0] | 0);
    }
    h = a[j + 348 + (t << 4) + 3 >> 0] | 0;
    if (!((a[36453] | 0) == 0 ? 1 : (a[u + 848 + (t << 4) + 3 >> 0] | 0) == h << 24 >> 24)) gc(d[r >> 0] | 0, h & 255 | 0);
    c[s >> 2] = c[r >> 2];
    c[s + 4 >> 2] = c[r + 4 >> 2];
    c[s + 8 >> 2] = c[r + 8 >> 2];
    c[s + 12 >> 2] = c[r + 12 >> 2];
   }
   t = t + 1 | 0;
  } while ((t | 0) != 16);
 };
 c[w >> 2] = 0;
 c[w + 4 >> 2] = 0;
 c[w + 8 >> 2] = 0;
 c[w + 12 >> 2] = 0;
 j = f + 40 | 0;
 if ((c[j + 4 >> 2] | 0) != -1) {
  n = c[8946] | 0;
  l = c[n + 1592 >> 2] | 0;
  k = l + (e[j >> 1] | 0) | 0;
  m = c[n + 1584 >> 2] | 0;
  h = m + (k * 776 | 0) | 0;
  u = j;
  v = h;
  if ((c[u >> 2] | 0) == (c[v >> 2] | 0) ? (c[u + 4 >> 2] | 0) == (c[v + 4 >> 2] | 0) : 0) {
   if ((c[m + (k * 776 | 0) + 8 >> 2] | 0) != 3) x = 97;
  } else x = 97;
  if ((x | 0) == 97) h = 0;
  c[w >> 2] = h;
  j = f + 48 | 0;
  if ((c[j + 4 >> 2] | 0) == -1) h = 1; else {
   k = l + (e[j >> 1] | 0) | 0;
   h = m + (k * 776 | 0) | 0;
   u = j;
   v = h;
   if ((c[u >> 2] | 0) == (c[v >> 2] | 0) ? (c[u + 4 >> 2] | 0) == (c[v + 4 >> 2] | 0) : 0) {
    if ((c[m + (k * 776 | 0) + 8 >> 2] | 0) != 3) x = 111;
   } else x = 111;
   if ((x | 0) == 111) h = 0;
   c[w + 4 >> 2] = h;
   j = f + 56 | 0;
   if ((c[j + 4 >> 2] | 0) == -1) h = 2; else {
    k = l + (e[j >> 1] | 0) | 0;
    h = m + (k * 776 | 0) | 0;
    u = j;
    v = h;
    if ((c[u >> 2] | 0) == (c[v >> 2] | 0) ? (c[u + 4 >> 2] | 0) == (c[v + 4 >> 2] | 0) : 0) {
     if ((c[m + (k * 776 | 0) + 8 >> 2] | 0) != 3) x = 115;
    } else x = 115;
    if ((x | 0) == 115) h = 0;
    c[w + 8 >> 2] = h;
    k = f + 64 | 0;
    if ((c[k + 4 >> 2] | 0) == -1) h = 3; else {
     j = l + (e[k >> 1] | 0) | 0;
     h = m + (j * 776 | 0) | 0;
     u = k;
     v = h;
     if ((c[u >> 2] | 0) == (c[v >> 2] | 0) ? (c[u + 4 >> 2] | 0) == (c[v + 4 >> 2] | 0) : 0) {
      if ((c[m + (j * 776 | 0) + 8 >> 2] | 0) != 3) x = 119;
     } else x = 119;
     if ((x | 0) == 119) h = 0;
     c[w + 12 >> 2] = h;
     h = 4;
    }
   }
  }
  Nd(n + 416 | 0, 0, w, h);
 }
 h = y;
 j = h + 48 | 0;
 do {
  c[h >> 2] = 0;
  h = h + 4 | 0;
 } while ((h | 0) < (j | 0));
 p = c[8946] | 0;
 n = p + 1592 | 0;
 o = p + 1584 | 0;
 h = 0;
 do {
  k = f + 72 + (h << 3) | 0;
  if ((c[k + 4 >> 2] | 0) == -1) {
   x = 106;
   break;
  }
  l = (c[n >> 2] | 0) + (e[k >> 1] | 0) | 0;
  m = c[o >> 2] | 0;
  j = m + (l * 776 | 0) | 0;
  v = k;
  w = j;
  if ((c[v >> 2] | 0) == (c[w >> 2] | 0) ? (c[v + 4 >> 2] | 0) == (c[w + 4 >> 2] | 0) : 0) {
   if ((c[m + (l * 776 | 0) + 8 >> 2] | 0) != 3) x = 104;
  } else x = 104;
  if ((x | 0) == 104) {
   x = 0;
   j = 0;
  }
  c[y + (h << 2) >> 2] = j;
  h = h + 1 | 0;
 } while ((h | 0) < 12);
 if ((x | 0) == 106) if ((h | 0) <= 0) {
  i = z;
  return;
 }
 Nd(p + 416 | 0, 1, y, h);
 i = z;
 return;
}

function md(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 j = e;
 f = c[j + 4 >> 2] | 0;
 k = d;
 c[k >> 2] = c[j >> 2];
 c[k + 4 >> 2] = f;
 k = e + 8 | 0;
 f = c[k + 4 >> 2] | 0;
 j = d + 8 | 0;
 c[j >> 2] = c[k >> 2];
 c[j + 4 >> 2] = f;
 Be(d + 16 | 0, e + 16 | 0);
 c[d + 20 >> 2] = c[e + 20 >> 2];
 j = d + 24 | 0;
 f = e + 24 | 0;
 c[j >> 2] = c[f >> 2];
 c[j + 4 >> 2] = c[f + 4 >> 2];
 c[j + 8 >> 2] = c[f + 8 >> 2];
 c[j + 12 >> 2] = c[f + 12 >> 2];
 c[j + 16 >> 2] = c[f + 16 >> 2];
 c[j + 20 >> 2] = c[f + 20 >> 2];
 c[j + 24 >> 2] = c[f + 24 >> 2];
 c[j + 28 >> 2] = c[f + 28 >> 2];
 b[j + 32 >> 1] = b[f + 32 >> 1] | 0;
 j = d + 58 | 0;
 a[d + 60 >> 0] = 17;
 a[d + 61 >> 0] = 13;
 a[d + 62 >> 0] = 17;
 a[d + 63 >> 0] = 13;
 a[d + 64 >> 0] = 17;
 a[d + 65 >> 0] = 13;
 a[d + 66 >> 0] = 17;
 a[d + 67 >> 0] = 13;
 a[d + 68 >> 0] = 17;
 a[d + 69 >> 0] = 13;
 a[d + 70 >> 0] = 17;
 a[d + 71 >> 0] = 13;
 a[d + 72 >> 0] = 17;
 a[d + 73 >> 0] = 13;
 a[d + 74 >> 0] = 17;
 a[d + 75 >> 0] = 13;
 a[d + 76 >> 0] = 17;
 a[d + 77 >> 0] = 13;
 a[d + 78 >> 0] = 17;
 a[d + 79 >> 0] = 13;
 a[d + 80 >> 0] = 17;
 a[d + 81 >> 0] = 13;
 a[d + 82 >> 0] = 17;
 a[d + 83 >> 0] = 13;
 a[d + 84 >> 0] = 17;
 a[d + 85 >> 0] = 13;
 a[d + 86 >> 0] = 17;
 a[d + 87 >> 0] = 13;
 a[d + 88 >> 0] = 17;
 a[d + 89 >> 0] = 13;
 a[d + 90 >> 0] = 17;
 a[d + 91 >> 0] = 13;
 a[j >> 0] = 0;
 a[d + 59 >> 0] = 1;
 a[d + 124 >> 0] = 0;
 a[d + 125 >> 0] = 0;
 f = d + 92 | 0;
 k = d + 108 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = f;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 i = d + 126 | 0;
 a[d + 128 >> 0] = 17;
 a[d + 129 >> 0] = 13;
 a[d + 130 >> 0] = 17;
 a[d + 131 >> 0] = 13;
 a[d + 132 >> 0] = 17;
 a[d + 133 >> 0] = 13;
 a[d + 134 >> 0] = 17;
 a[d + 135 >> 0] = 13;
 a[d + 136 >> 0] = 17;
 a[d + 137 >> 0] = 13;
 a[d + 138 >> 0] = 17;
 a[d + 139 >> 0] = 13;
 a[d + 140 >> 0] = 17;
 a[d + 141 >> 0] = 13;
 a[d + 142 >> 0] = 17;
 a[d + 143 >> 0] = 13;
 a[d + 144 >> 0] = 17;
 a[d + 145 >> 0] = 13;
 a[d + 146 >> 0] = 17;
 a[d + 147 >> 0] = 13;
 a[d + 148 >> 0] = 17;
 a[d + 149 >> 0] = 13;
 a[d + 150 >> 0] = 17;
 a[d + 151 >> 0] = 13;
 a[d + 152 >> 0] = 17;
 a[d + 153 >> 0] = 13;
 a[d + 154 >> 0] = 17;
 a[d + 155 >> 0] = 13;
 a[d + 156 >> 0] = 17;
 a[d + 157 >> 0] = 13;
 a[d + 158 >> 0] = 17;
 a[d + 159 >> 0] = 13;
 a[i >> 0] = 0;
 a[d + 127 >> 0] = 1;
 a[d + 192 >> 0] = 0;
 a[d + 193 >> 0] = 0;
 f = d + 160 | 0;
 k = d + 176 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = f;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 h = d + 194 | 0;
 a[d + 196 >> 0] = 17;
 a[d + 197 >> 0] = 13;
 a[d + 198 >> 0] = 17;
 a[d + 199 >> 0] = 13;
 a[d + 200 >> 0] = 17;
 a[d + 201 >> 0] = 13;
 a[d + 202 >> 0] = 17;
 a[d + 203 >> 0] = 13;
 a[d + 204 >> 0] = 17;
 a[d + 205 >> 0] = 13;
 a[d + 206 >> 0] = 17;
 a[d + 207 >> 0] = 13;
 a[d + 208 >> 0] = 17;
 a[d + 209 >> 0] = 13;
 a[d + 210 >> 0] = 17;
 a[d + 211 >> 0] = 13;
 a[d + 212 >> 0] = 17;
 a[d + 213 >> 0] = 13;
 a[d + 214 >> 0] = 17;
 a[d + 215 >> 0] = 13;
 a[d + 216 >> 0] = 17;
 a[d + 217 >> 0] = 13;
 a[d + 218 >> 0] = 17;
 a[d + 219 >> 0] = 13;
 a[d + 220 >> 0] = 17;
 a[d + 221 >> 0] = 13;
 a[d + 222 >> 0] = 17;
 a[d + 223 >> 0] = 13;
 a[d + 224 >> 0] = 17;
 a[d + 225 >> 0] = 13;
 a[d + 226 >> 0] = 17;
 a[d + 227 >> 0] = 13;
 a[h >> 0] = 0;
 a[d + 195 >> 0] = 1;
 a[d + 260 >> 0] = 0;
 a[d + 261 >> 0] = 0;
 f = d + 228 | 0;
 k = d + 244 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = f;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 f = d + 262 | 0;
 a[d + 264 >> 0] = 17;
 a[d + 265 >> 0] = 13;
 a[d + 266 >> 0] = 17;
 a[d + 267 >> 0] = 13;
 a[d + 268 >> 0] = 17;
 a[d + 269 >> 0] = 13;
 a[d + 270 >> 0] = 17;
 a[d + 271 >> 0] = 13;
 a[d + 272 >> 0] = 17;
 a[d + 273 >> 0] = 13;
 a[d + 274 >> 0] = 17;
 a[d + 275 >> 0] = 13;
 a[d + 276 >> 0] = 17;
 a[d + 277 >> 0] = 13;
 a[d + 278 >> 0] = 17;
 a[d + 279 >> 0] = 13;
 a[d + 280 >> 0] = 17;
 a[d + 281 >> 0] = 13;
 a[d + 282 >> 0] = 17;
 a[d + 283 >> 0] = 13;
 a[d + 284 >> 0] = 17;
 a[d + 285 >> 0] = 13;
 a[d + 286 >> 0] = 17;
 a[d + 287 >> 0] = 13;
 a[d + 288 >> 0] = 17;
 a[d + 289 >> 0] = 13;
 a[d + 290 >> 0] = 17;
 a[d + 291 >> 0] = 13;
 a[d + 292 >> 0] = 17;
 a[d + 293 >> 0] = 13;
 a[d + 294 >> 0] = 17;
 a[d + 295 >> 0] = 13;
 a[f >> 0] = 0;
 a[d + 263 >> 0] = 1;
 a[d + 328 >> 0] = 0;
 a[d + 329 >> 0] = 0;
 g = d + 296 | 0;
 k = d + 312 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = g;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 nd(j, e + 58 | 0);
 nd(i, e + 126 | 0);
 nd(h, e + 194 | 0);
 nd(f, e + 262 | 0);
 c[d + 332 >> 2] = c[e + 332 >> 2];
 t = e + 336 | 0;
 K = c[t + 4 >> 2] | 0;
 u = d + 336 | 0;
 c[u >> 2] = c[t >> 2];
 c[u + 4 >> 2] = K;
 c[d + 344 >> 2] = c[e + 344 >> 2];
 u = d + 348 | 0;
 K = d + 356 | 0;
 c[u >> 2] = 0;
 b[u + 4 >> 1] = 0;
 a[u + 6 >> 0] = 0;
 t = d + 364 | 0;
 J = d + 372 | 0;
 s = d + 380 | 0;
 I = d + 388 | 0;
 r = d + 396 | 0;
 H = d + 404 | 0;
 q = d + 412 | 0;
 G = d + 420 | 0;
 p = d + 428 | 0;
 F = d + 436 | 0;
 o = d + 444 | 0;
 E = d + 452 | 0;
 n = d + 460 | 0;
 D = d + 468 | 0;
 m = d + 476 | 0;
 C = d + 484 | 0;
 f = d + 492 | 0;
 B = d + 500 | 0;
 g = d + 508 | 0;
 A = d + 516 | 0;
 h = d + 524 | 0;
 z = d + 532 | 0;
 i = d + 540 | 0;
 y = d + 548 | 0;
 j = d + 556 | 0;
 x = d + 564 | 0;
 k = d + 572 | 0;
 w = d + 580 | 0;
 l = d + 588 | 0;
 c[d + 596 >> 2] = 0;
 c[d + 600 >> 2] = 0;
 v = e + 348 | 0;
 c[K >> 2] = 0;
 c[K + 4 >> 2] = 0;
 c[K + 8 >> 2] = 0;
 b[K + 12 >> 1] = 0;
 a[K + 14 >> 0] = 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 b[J + 12 >> 1] = 0;
 a[J + 14 >> 0] = 0;
 c[I >> 2] = 0;
 c[I + 4 >> 2] = 0;
 c[I + 8 >> 2] = 0;
 b[I + 12 >> 1] = 0;
 a[I + 14 >> 0] = 0;
 c[H >> 2] = 0;
 c[H + 4 >> 2] = 0;
 c[H + 8 >> 2] = 0;
 b[H + 12 >> 1] = 0;
 a[H + 14 >> 0] = 0;
 c[G >> 2] = 0;
 c[G + 4 >> 2] = 0;
 c[G + 8 >> 2] = 0;
 b[G + 12 >> 1] = 0;
 a[G + 14 >> 0] = 0;
 c[F >> 2] = 0;
 c[F + 4 >> 2] = 0;
 c[F + 8 >> 2] = 0;
 b[F + 12 >> 1] = 0;
 a[F + 14 >> 0] = 0;
 c[E >> 2] = 0;
 c[E + 4 >> 2] = 0;
 c[E + 8 >> 2] = 0;
 b[E + 12 >> 1] = 0;
 a[E + 14 >> 0] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 b[D + 12 >> 1] = 0;
 a[D + 14 >> 0] = 0;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 b[C + 12 >> 1] = 0;
 a[C + 14 >> 0] = 0;
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 b[B + 12 >> 1] = 0;
 a[B + 14 >> 0] = 0;
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 b[A + 12 >> 1] = 0;
 a[A + 14 >> 0] = 0;
 c[z >> 2] = 0;
 c[z + 4 >> 2] = 0;
 c[z + 8 >> 2] = 0;
 b[z + 12 >> 1] = 0;
 a[z + 14 >> 0] = 0;
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 b[y + 12 >> 1] = 0;
 a[y + 14 >> 0] = 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 b[x + 12 >> 1] = 0;
 a[x + 14 >> 0] = 0;
 c[w >> 2] = 0;
 c[w + 4 >> 2] = 0;
 c[w + 8 >> 2] = 0;
 b[w + 12 >> 1] = 0;
 a[w + 14 >> 0] = 0;
 c[u >> 2] = c[v >> 2];
 c[u + 4 >> 2] = c[v + 4 >> 2];
 c[u + 8 >> 2] = c[v + 8 >> 2];
 c[u + 12 >> 2] = c[v + 12 >> 2];
 u = e + 364 | 0;
 c[t >> 2] = c[u >> 2];
 c[t + 4 >> 2] = c[u + 4 >> 2];
 c[t + 8 >> 2] = c[u + 8 >> 2];
 c[t + 12 >> 2] = c[u + 12 >> 2];
 t = e + 380 | 0;
 c[s >> 2] = c[t >> 2];
 c[s + 4 >> 2] = c[t + 4 >> 2];
 c[s + 8 >> 2] = c[t + 8 >> 2];
 c[s + 12 >> 2] = c[t + 12 >> 2];
 s = e + 396 | 0;
 c[r >> 2] = c[s >> 2];
 c[r + 4 >> 2] = c[s + 4 >> 2];
 c[r + 8 >> 2] = c[s + 8 >> 2];
 c[r + 12 >> 2] = c[s + 12 >> 2];
 r = e + 412 | 0;
 c[q >> 2] = c[r >> 2];
 c[q + 4 >> 2] = c[r + 4 >> 2];
 c[q + 8 >> 2] = c[r + 8 >> 2];
 c[q + 12 >> 2] = c[r + 12 >> 2];
 q = e + 428 | 0;
 c[p >> 2] = c[q >> 2];
 c[p + 4 >> 2] = c[q + 4 >> 2];
 c[p + 8 >> 2] = c[q + 8 >> 2];
 c[p + 12 >> 2] = c[q + 12 >> 2];
 p = e + 444 | 0;
 c[o >> 2] = c[p >> 2];
 c[o + 4 >> 2] = c[p + 4 >> 2];
 c[o + 8 >> 2] = c[p + 8 >> 2];
 c[o + 12 >> 2] = c[p + 12 >> 2];
 o = e + 460 | 0;
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = c[o + 4 >> 2];
 c[n + 8 >> 2] = c[o + 8 >> 2];
 c[n + 12 >> 2] = c[o + 12 >> 2];
 n = e + 476 | 0;
 c[m >> 2] = c[n >> 2];
 c[m + 4 >> 2] = c[n + 4 >> 2];
 c[m + 8 >> 2] = c[n + 8 >> 2];
 c[m + 12 >> 2] = c[n + 12 >> 2];
 m = e + 492 | 0;
 c[f >> 2] = c[m >> 2];
 c[f + 4 >> 2] = c[m + 4 >> 2];
 c[f + 8 >> 2] = c[m + 8 >> 2];
 c[f + 12 >> 2] = c[m + 12 >> 2];
 f = e + 508 | 0;
 c[g >> 2] = c[f >> 2];
 c[g + 4 >> 2] = c[f + 4 >> 2];
 c[g + 8 >> 2] = c[f + 8 >> 2];
 c[g + 12 >> 2] = c[f + 12 >> 2];
 g = e + 524 | 0;
 c[h >> 2] = c[g >> 2];
 c[h + 4 >> 2] = c[g + 4 >> 2];
 c[h + 8 >> 2] = c[g + 8 >> 2];
 c[h + 12 >> 2] = c[g + 12 >> 2];
 h = e + 540 | 0;
 c[i >> 2] = c[h >> 2];
 c[i + 4 >> 2] = c[h + 4 >> 2];
 c[i + 8 >> 2] = c[h + 8 >> 2];
 c[i + 12 >> 2] = c[h + 12 >> 2];
 i = e + 556 | 0;
 c[j >> 2] = c[i >> 2];
 c[j + 4 >> 2] = c[i + 4 >> 2];
 c[j + 8 >> 2] = c[i + 8 >> 2];
 c[j + 12 >> 2] = c[i + 12 >> 2];
 j = e + 572 | 0;
 c[k >> 2] = c[j >> 2];
 c[k + 4 >> 2] = c[j + 4 >> 2];
 c[k + 8 >> 2] = c[j + 8 >> 2];
 c[k + 12 >> 2] = c[j + 12 >> 2];
 k = e + 588 | 0;
 c[l >> 2] = c[k >> 2];
 c[l + 4 >> 2] = c[k + 4 >> 2];
 c[l + 8 >> 2] = c[k + 8 >> 2];
 c[l + 12 >> 2] = c[k + 12 >> 2];
 c[d + 604 >> 2] = c[e + 604 >> 2];
 return;
}

function cf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[8991] | 0;
 if (d >>> 0 < h >>> 0) Nb();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) Nb();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) Nb();
  if ((k | 0) == (c[8992] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    f = j;
    break;
   }
   c[8989] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 35988 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) Nb();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) Nb();
   }
   if ((d | 0) == (b | 0)) {
    c[8987] = c[8987] & ~(1 << e);
    q = k;
    f = j;
    break;
   }
   if ((d | 0) == (a | 0)) g = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) Nb();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) g = a; else Nb();
   }
   c[b + 12 >> 2] = d;
   c[g >> 2] = b;
   q = k;
   f = j;
   break;
  }
  g = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   d = k + 16 | 0;
   b = d + 4 | 0;
   a = c[b >> 2] | 0;
   if (!a) {
    a = c[d >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    } else b = d;
   }
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
    }
   }
   if (b >>> 0 < h >>> 0) Nb(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) Nb();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) Nb();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else Nb();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 36252 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[8988] = c[8988] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[8991] | 0) >>> 0) Nb();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   d = c[8991] | 0;
   if (i >>> 0 < d >>> 0) Nb();
   c[i + 24 >> 2] = g;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) Nb(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    f = j;
    break;
   }
  }
 } else {
  q = d;
  f = e;
 } while (0);
 if (q >>> 0 >= m >>> 0) Nb();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) Nb();
 if (!(b & 2)) {
  if ((m | 0) == (c[8993] | 0)) {
   p = (c[8990] | 0) + f | 0;
   c[8990] = p;
   c[8993] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[8992] | 0)) return;
   c[8992] = 0;
   c[8989] = 0;
   return;
  }
  if ((m | 0) == (c[8992] | 0)) {
   p = (c[8989] | 0) + f | 0;
   c[8989] = p;
   c[8992] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (b & -8) + f | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 35988 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[8991] | 0) >>> 0) Nb();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) Nb();
   }
   if ((d | 0) == (b | 0)) {
    c[8987] = c[8987] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[8991] | 0) >>> 0) Nb();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else Nb();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   g = c[m + 24 >> 2] | 0;
   a = c[m + 12 >> 2] | 0;
   do if ((a | 0) == (m | 0)) {
    d = m + 16 | 0;
    b = d + 4 | 0;
    a = c[b >> 2] | 0;
    if (!a) {
     a = c[d >> 2] | 0;
     if (!a) {
      n = 0;
      break;
     } else b = d;
    }
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[8991] | 0) >>> 0) Nb();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) Nb();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else Nb();
   } while (0);
   if (g | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 36252 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[8988] = c[8988] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[8991] | 0) >>> 0) Nb();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[8991] | 0;
    if (n >>> 0 < d >>> 0) Nb();
    c[n + 24 >> 2] = g;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) Nb(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[8992] | 0)) {
   c[8989] = f;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  d = 35988 + (a << 1 << 2) | 0;
  b = c[8987] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[8987] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
    o = a;
    p = b;
   }
  }
  c[o >> 2] = q;
  c[p + 12 >> 2] = q;
  c[q + 8 >> 2] = p;
  c[q + 12 >> 2] = d;
  return;
 }
 a = f >>> 8;
 if (!a) d = 0; else if (f >>> 0 > 16777215) d = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  d = (p + 245760 | 0) >>> 16 & 2;
  d = 14 - (n | o | d) + (p << d >>> 15) | 0;
  d = f >>> (d + 7 | 0) & 1 | d << 1;
 }
 e = 36252 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[8988] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[8988] = a | b;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  d = f << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
  e = c[e >> 2] | 0;
  while (1) {
   if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
    a = 130;
    break;
   }
   b = e + 16 + (d >>> 31 << 2) | 0;
   a = c[b >> 2] | 0;
   if (!a) {
    a = 127;
    break;
   } else {
    d = d << 1;
    e = a;
   }
  }
  if ((a | 0) == 127) if (b >>> 0 < (c[8991] | 0) >>> 0) Nb(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = e;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = e + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[8991] | 0;
   if (b >>> 0 >= p >>> 0 & e >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = e;
    c[q + 24 >> 2] = 0;
    break;
   } else Nb();
  }
 } while (0);
 q = (c[8995] | 0) + -1 | 0;
 c[8995] = q;
 if (!q) a = 36404; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[8995] = -1;
 return;
}

function af(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 1056 | 0;
 v = x + 1024 | 0;
 w = x;
 o = a[e >> 0] | 0;
 do if (o << 24 >> 24) {
  u = $e(b, o << 24 >> 24) | 0;
  if (!u) b = 0; else {
   j = a[e + 1 >> 0] | 0;
   if (!(j << 24 >> 24)) b = u; else {
    f = u + 1 | 0;
    l = a[f >> 0] | 0;
    if (!(l << 24 >> 24)) b = 0; else {
     h = a[e + 2 >> 0] | 0;
     if (!(h << 24 >> 24)) {
      j = j & 255 | (o & 255) << 8;
      b = l;
      g = d[u >> 0] << 8 | l & 255;
      while (1) {
       g = g & 65535;
       if ((g | 0) == (j | 0)) break;
       f = f + 1 | 0;
       h = a[f >> 0] | 0;
       if (!(h << 24 >> 24)) {
        b = 0;
        break;
       } else {
        b = h;
        g = h & 255 | g << 8;
       }
      }
      b = b << 24 >> 24 ? f + -1 | 0 : 0;
      break;
     }
     f = u + 2 | 0;
     b = a[f >> 0] | 0;
     if (!(b << 24 >> 24)) b = 0; else {
      g = a[e + 3 >> 0] | 0;
      if (!(g << 24 >> 24)) {
       h = (j & 255) << 16 | (o & 255) << 24 | (h & 255) << 8;
       g = (b & 255) << 8 | (l & 255) << 16 | d[u >> 0] << 24;
       if ((g | 0) != (h | 0)) do {
        f = f + 1 | 0;
        b = a[f >> 0] | 0;
        g = (b & 255 | g) << 8;
       } while (!(b << 24 >> 24 == 0 | (g | 0) == (h | 0)));
       b = b << 24 >> 24 ? f + -2 | 0 : 0;
       break;
      }
      f = u + 3 | 0;
      k = a[f >> 0] | 0;
      if (!(k << 24 >> 24)) b = 0; else {
       if (!(a[e + 4 >> 0] | 0)) {
        h = (j & 255) << 16 | (o & 255) << 24 | (h & 255) << 8 | g & 255;
        b = (b & 255) << 8 | (l & 255) << 16 | k & 255 | d[u >> 0] << 24;
        if ((b | 0) == (h | 0)) b = k; else {
         g = b;
         do {
          f = f + 1 | 0;
          b = a[f >> 0] | 0;
          g = b & 255 | g << 8;
         } while (!(b << 24 >> 24 == 0 | (g | 0) == (h | 0)));
        }
        b = b << 24 >> 24 ? f + -3 | 0 : 0;
        break;
       };
       c[v >> 2] = 0;
       c[v + 4 >> 2] = 0;
       c[v + 8 >> 2] = 0;
       c[v + 12 >> 2] = 0;
       c[v + 16 >> 2] = 0;
       c[v + 20 >> 2] = 0;
       c[v + 24 >> 2] = 0;
       c[v + 28 >> 2] = 0;
       b = o;
       t = 0;
       while (1) {
        if (!(a[u + t >> 0] | 0)) {
         b = 0;
         break;
        }
        s = v + (((b & 255) >>> 5 & 255) << 2) | 0;
        c[s >> 2] = c[s >> 2] | 1 << (b & 31);
        s = t + 1 | 0;
        c[w + ((b & 255) << 2) >> 2] = s;
        b = a[e + s >> 0] | 0;
        if (!(b << 24 >> 24)) {
         r = 23;
         break;
        } else t = s;
       }
       a : do if ((r | 0) == 23) {
        b : do if (s >>> 0 > 1) {
         f = 1;
         l = -1;
         b = 0;
         c : while (1) {
          h = 1;
          while (1) {
           d : while (1) {
            k = f;
            j = 1;
            while (1) {
             f = a[e + (j + l) >> 0] | 0;
             g = a[e + k >> 0] | 0;
             if (f << 24 >> 24 != g << 24 >> 24) break d;
             if ((j | 0) == (h | 0)) break;
             j = j + 1 | 0;
             f = j + b | 0;
             if (f >>> 0 >= s >>> 0) {
              b = l;
              break c;
             } else k = f;
            }
            b = b + h | 0;
            f = b + 1 | 0;
            if (f >>> 0 >= s >>> 0) {
             b = l;
             break c;
            }
           }
           h = k - l | 0;
           if ((f & 255) <= (g & 255)) break;
           f = k + 1 | 0;
           if (f >>> 0 >= s >>> 0) {
            b = l;
            break c;
           } else b = k;
          }
          f = b + 2 | 0;
          if (f >>> 0 >= s >>> 0) {
           h = 1;
           break;
          } else {
           l = b;
           b = b + 1 | 0;
          }
         }
         f = 1;
         n = -1;
         g = 0;
         while (1) {
          k = f;
          f = 1;
          while (1) {
           j = k;
           e : while (1) {
            m = 1;
            while (1) {
             k = a[e + (m + n) >> 0] | 0;
             l = a[e + j >> 0] | 0;
             if (k << 24 >> 24 != l << 24 >> 24) break e;
             if ((m | 0) == (f | 0)) break;
             m = m + 1 | 0;
             j = m + g | 0;
             if (j >>> 0 >= s >>> 0) {
              g = n;
              break b;
             }
            }
            g = g + f | 0;
            j = g + 1 | 0;
            if (j >>> 0 >= s >>> 0) {
             g = n;
             break b;
            }
           }
           f = j - n | 0;
           if ((k & 255) >= (l & 255)) break;
           k = j + 1 | 0;
           if (k >>> 0 >= s >>> 0) {
            g = n;
            break b;
           } else g = j;
          }
          f = g + 2 | 0;
          if (f >>> 0 >= s >>> 0) {
           f = 1;
           break;
          } else {
           n = g;
           g = g + 1 | 0;
          }
         }
        } else {
         b = -1;
         g = -1;
         h = 1;
         f = 1;
        } while (0);
        q = (g + 1 | 0) >>> 0 > (b + 1 | 0) >>> 0;
        j = q ? f : h;
        q = q ? g : b;
        p = q + 1 | 0;
        f : do if (!p) r = 51; else {
         b = p;
         f = o;
         g = e;
         h = e + j | 0;
         while (1) {
          if (f << 24 >> 24 != (a[h >> 0] | 0)) break;
          b = b + -1 | 0;
          g = g + 1 | 0;
          if (!b) {
           r = 51;
           break f;
          }
          f = a[g >> 0] | 0;
          h = h + 1 | 0;
         }
         j = s - q + -1 | 0;
         o = 0;
         j = (q >>> 0 > j >>> 0 ? q : j) + 1 | 0;
        } while (0);
        if ((r | 0) == 51) o = s - j | 0;
        k = s | 63;
        l = (o | 0) != 0;
        m = s - j | 0;
        b = u;
        n = 0;
        h = u;
        g : while (1) {
         f = b;
         do if ((h - f | 0) >>> 0 < s >>> 0) {
          g = Ne(h, 0, k) | 0;
          if (!g) {
           g = h + k | 0;
           break;
          } else if ((g - f | 0) >>> 0 < s >>> 0) {
           b = 0;
           break a;
          } else break;
         } else g = h; while (0);
         f = a[b + t >> 0] | 0;
         if (!(1 << (f & 31) & c[v + (((f & 255) >>> 5 & 255) << 2) >> 2])) {
          b = b + s | 0;
          n = 0;
          h = g;
          continue;
         }
         u = c[w + ((f & 255) << 2) >> 2] | 0;
         f = s - u | 0;
         if ((s | 0) != (u | 0)) {
          b = b + (l & (n | 0) != 0 & f >>> 0 < j >>> 0 ? m : f) | 0;
          n = 0;
          h = g;
          continue;
         }
         h = p >>> 0 > n >>> 0 ? p : n;
         f = a[e + h >> 0] | 0;
         h : do if (!(f << 24 >> 24)) f = p; else {
          while (1) {
           if (f << 24 >> 24 != (a[b + h >> 0] | 0)) break;
           h = h + 1 | 0;
           f = a[e + h >> 0] | 0;
           if (!(f << 24 >> 24)) {
            f = p;
            break h;
           }
          }
          b = b + (h - q) | 0;
          n = 0;
          h = g;
          continue g;
         } while (0);
         do {
          if (f >>> 0 <= n >>> 0) break a;
          f = f + -1 | 0;
         } while ((a[e + f >> 0] | 0) == (a[b + f >> 0] | 0));
         b = b + j | 0;
         n = o;
         h = g;
        }
       } while (0);
      }
     }
    }
   }
  }
 } while (0);
 i = x;
 return b | 0;
}
function Ge(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 16 | 0;
 r = v;
 o = b + 24 | 0;
 f = c[o >> 2] | 0;
 if (!f) {
  He(b);
  f = c[o >> 2] | 0;
 }
 j = e;
 k = (j & 3 | 0) == 0;
 a : do if (k) {
  g = e;
  l = 6;
 } else {
  g = e;
  h = j;
  while (1) {
   if (!(a[g >> 0] | 0)) {
    g = h;
    break a;
   }
   g = g + 1 | 0;
   h = g;
   if (!(h & 3)) {
    l = 6;
    break;
   }
  }
 } while (0);
 if ((l | 0) == 6) {
  while (1) {
   h = c[g >> 2] | 0;
   if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
  }
  if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
 }
 g = g - j | 0;
 m = g + 17 | 0;
 if ((f + m | 0) >>> 0 < ((c[(c[b >> 2] | 0) + ((c[b + 12 >> 2] | 0) + -1 << 2) >> 2] | 0) + 16384 | 0) >>> 0) u = f; else {
  He(b);
  f = c[o >> 2] | 0;
  u = f;
 }
 c[u >> 2] = b;
 n = u + 4 | 0;
 c[n >> 2] = d;
 c[u + 8 >> 2] = g;
 g = f + 16 | 0;
 c[u + 12 >> 2] = g;
 b : do if (!((j ^ g) & 3)) {
  if (k) f = e; else {
   f = e;
   do {
    t = a[f >> 0] | 0;
    a[g >> 0] = t;
    if (!(t << 24 >> 24)) break b;
    f = f + 1 | 0;
    g = g + 1 | 0;
   } while ((f & 3 | 0) != 0);
  }
  h = c[f >> 2] | 0;
  if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) {
   j = g;
   while (1) {
    f = f + 4 | 0;
    g = j + 4 | 0;
    c[j >> 2] = h;
    h = c[f >> 2] | 0;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break; else j = g;
   }
  }
  l = 21;
 } else {
  f = e;
  l = 21;
 } while (0);
 if ((l | 0) == 21) {
  t = a[f >> 0] | 0;
  a[g >> 0] = t;
  if (t << 24 >> 24) do {
   f = f + 1 | 0;
   g = g + 1 | 0;
   t = a[f >> 0] | 0;
   a[g >> 0] = t;
  } while (t << 24 >> 24 != 0);
 }
 c[o >> 2] = (c[o >> 2] | 0) + m + 3 & -4;
 t = u;
 p = b + 28 | 0;
 c[p >> 2] = (c[p >> 2] | 0) + 1;
 p = c[n >> 2] & 1023;
 s = b + 32 + (p * 24 | 0) | 0;
 q = c[s >> 2] | 0;
 if (!q) {
  l = 0;
  f = 0;
 } else {
  l = q + (c[b + 32 + (p * 24 | 0) + 12 >> 2] << 2) | 0;
  f = q + (c[b + 32 + (p * 24 | 0) + 8 >> 2] << 2) | 0;
 }
 o = f;
 m = u + 12 | 0;
 n = f;
 f = l - o >> 2;
 c : while (1) {
  while (1) {
   if (!f) break c;
   e = (f | 0) / 2 | 0;
   d = n + (e << 2) | 0;
   j = c[(c[d >> 2] | 0) + 12 >> 2] | 0;
   h = c[m >> 2] | 0;
   k = a[j >> 0] | 0;
   g = a[h >> 0] | 0;
   if (k << 24 >> 24 == 0 ? 1 : k << 24 >> 24 != g << 24 >> 24) h = k; else {
    do {
     j = j + 1 | 0;
     h = h + 1 | 0;
     k = a[j >> 0] | 0;
     g = a[h >> 0] | 0;
    } while (!(k << 24 >> 24 == 0 ? 1 : k << 24 >> 24 != g << 24 >> 24));
    h = k;
   }
   if ((h & 255) < (g & 255)) break; else f = e;
  }
  n = d + 4 | 0;
  f = f + -1 - e | 0;
 }
 if ((n | 0) != (l | 0)) {
  f = c[n >> 2] | 0;
  if ((c[f + 4 >> 2] | 0) == (c[u + 4 >> 2] | 0)) {
   j = c[f + 12 >> 2] | 0;
   g = c[m >> 2] | 0;
   h = a[j >> 0] | 0;
   f = a[g >> 0] | 0;
   if (h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != f << 24 >> 24) g = h; else {
    do {
     j = j + 1 | 0;
     g = g + 1 | 0;
     h = a[j >> 0] | 0;
     f = a[g >> 0] | 0;
    } while (!(h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != f << 24 >> 24));
    g = h;
   }
   if (g << 24 >> 24 == f << 24 >> 24) {
    pe(33096, r);
    eb();
   }
  }
 }
 o = n - o >> 2;
 l = b + 32 + (p * 24 | 0) + 4 | 0;
 h = c[l >> 2] | 0;
 m = b + 32 + (p * 24 | 0) + 12 | 0;
 k = c[m >> 2] | 0;
 n = b + 32 + (p * 24 | 0) + 8 | 0;
 f = c[n >> 2] | 0;
 if ((h - k | 0) == (0 - f | 0)) {
  j = h >> 1;
  g = c[b + 32 + (p * 24 | 0) + 16 >> 2] | 0;
  if ((j | 0) >= (g | 0)) {
   g = c[b + 32 + (p * 24 | 0) + 20 >> 2] | 0;
   g = (j | 0) > (g | 0) ? g : j;
  }
  e = g + h | 0;
  if (!g) j = q; else {
   j = k - f | 0;
   d = bf(e << 2) | 0;
   if ((j | 0) > 0) {
    f = d;
    g = 0;
    h = (c[s >> 2] | 0) + (c[n >> 2] << 2) | 0;
    while (1) {
     c[f >> 2] = c[h >> 2];
     g = g + 1 | 0;
     if ((g | 0) == (j | 0)) break; else {
      f = f + 4 | 0;
      h = h + 4 | 0;
     }
    }
   }
   f = c[s >> 2] | 0;
   if (f | 0) cf(f);
   c[s >> 2] = d;
   c[l >> 2] = e;
   c[n >> 2] = 0;
   c[m >> 2] = j;
   k = j;
   f = 0;
   h = e;
   j = d;
  }
 } else j = q;
 g = k - f | 0;
 if ((g | 0) == (o | 0)) {
  if ((k | 0) < (h | 0)) {
   c[m >> 2] = k + 1;
   s = j + (k << 2) | 0;
   c[s >> 2] = t;
   i = v;
   return u | 0;
  }
  c[j + (f + -1 << 2) >> 2] = c[j + (f << 2) >> 2];
  g = o + -1 | 0;
  if ((f | 0) < (f + g | 0)) {
   h = c[n >> 2] | 0;
   g = h + g | 0;
   do {
    r = c[s >> 2] | 0;
    b = f;
    f = f + 1 | 0;
    c[r + (b << 2) >> 2] = c[r + (f << 2) >> 2];
   } while ((f | 0) < (g | 0));
   f = h;
  }
  b = f + -1 | 0;
  c[n >> 2] = b;
  s = (c[s >> 2] | 0) + (b + o << 2) | 0;
  c[s >> 2] = t;
  i = v;
  return u | 0;
 }
 if (!o) {
  if ((f | 0) > 0) {
   s = f + -1 | 0;
   c[n >> 2] = s;
   s = j + (s << 2) | 0;
   c[s >> 2] = t;
   i = v;
   return u | 0;
  }
  g = k + -1 | 0;
  c[j + (k << 2) >> 2] = c[j + (g << 2) >> 2];
  if ((g | 0) > (f | 0)) {
   h = k;
   j = g;
   while (1) {
    g = c[s >> 2] | 0;
    c[g + (j << 2) >> 2] = c[g + (h + -2 << 2) >> 2];
    g = j + -1 | 0;
    if ((g | 0) > (f | 0)) {
     h = j;
     j = g;
    } else break;
   }
  }
  c[m >> 2] = k + 1;
  s = (c[s >> 2] | 0) + (f << 2) | 0;
  c[s >> 2] = t;
  i = v;
  return u | 0;
 }
 if ((g >> 1 | 0) > (o | 0)) {
  if ((f | 0) <= 0) {
   g = k + -1 | 0;
   c[j + (k << 2) >> 2] = c[j + (g << 2) >> 2];
   h = f + o | 0;
   if ((g | 0) > (h | 0)) {
    f = k;
    while (1) {
     b = c[s >> 2] | 0;
     c[b + (g << 2) >> 2] = c[b + (f + -2 << 2) >> 2];
     f = g + -1 | 0;
     if ((f | 0) > (h | 0)) {
      b = g;
      g = f;
      f = b;
     } else break;
    }
   }
   c[m >> 2] = k + 1;
   s = (c[s >> 2] | 0) + (h << 2) | 0;
   c[s >> 2] = t;
   i = v;
   return u | 0;
  }
  c[j + (f + -1 << 2) >> 2] = c[j + (f << 2) >> 2];
  g = o + -1 | 0;
  if ((f | 0) < (f + g | 0)) {
   h = c[n >> 2] | 0;
   g = h + g | 0;
   do {
    r = c[s >> 2] | 0;
    b = f;
    f = f + 1 | 0;
    c[r + (b << 2) >> 2] = c[r + (f << 2) >> 2];
   } while ((f | 0) < (g | 0));
   f = h;
  }
  b = f + -1 | 0;
  c[n >> 2] = b;
  s = (c[s >> 2] | 0) + (b + o << 2) | 0;
  c[s >> 2] = t;
  i = v;
  return u | 0;
 } else {
  if ((k | 0) < (h | 0)) {
   g = k + -1 | 0;
   c[j + (k << 2) >> 2] = c[j + (g << 2) >> 2];
   h = f + o | 0;
   if ((g | 0) > (h | 0)) {
    f = k;
    while (1) {
     b = c[s >> 2] | 0;
     c[b + (g << 2) >> 2] = c[b + (f + -2 << 2) >> 2];
     f = g + -1 | 0;
     if ((f | 0) > (h | 0)) {
      b = g;
      g = f;
      f = b;
     } else break;
    }
   }
   c[m >> 2] = k + 1;
   s = (c[s >> 2] | 0) + (h << 2) | 0;
   c[s >> 2] = t;
   i = v;
   return u | 0;
  }
  c[j + (f + -1 << 2) >> 2] = c[j + (f << 2) >> 2];
  g = o + -1 | 0;
  if ((f | 0) < (f + g | 0)) {
   h = c[n >> 2] | 0;
   g = h + g | 0;
   do {
    r = c[s >> 2] | 0;
    b = f;
    f = f + 1 | 0;
    c[r + (b << 2) >> 2] = c[r + (f << 2) >> 2];
   } while ((f | 0) < (g | 0));
   f = h;
  }
  b = f + -1 | 0;
  c[n >> 2] = b;
  s = (c[s >> 2] | 0) + (b + o << 2) | 0;
  c[s >> 2] = t;
  i = v;
  return u | 0;
 }
 return 0;
}

function Nc(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 16 | 0;
 u = v + 8 | 0;
 t = v;
 if ((b | 0) > 0) {
  l = 0;
  e = 0;
  q = 0;
  r = 0;
  while (1) {
   m = d + (r << 2) | 0;
   if ((e | 0) == (q | 0)) {
    p = q >> 1;
    p = (p | 0) < 16 ? 16 : (p | 0) > 65536 ? 65536 : p;
    k = p + q | 0;
    if (p) {
     e = bf(k << 3) | 0;
     if ((q | 0) > 0) {
      f = e;
      h = 0;
      j = l;
      while (1) {
       c[f >> 2] = c[j >> 2];
       p = j + 4 | 0;
       c[f + 4 >> 2] = c[p >> 2];
       c[j >> 2] = 0;
       c[p >> 2] = 0;
       h = h + 1 | 0;
       if ((h | 0) == (q | 0)) break; else {
        f = f + 8 | 0;
        j = j + 8 | 0;
       }
      }
     }
     if (l | 0) cf(l);
     l = e;
     e = k;
    }
   }
   p = q + 1 | 0;
   n = l;
   o = n + (q << 3) | 0;
   k = c[m >> 2] | 0;
   do if (!k) {
    c[o >> 2] = 0;
    c[n + (q << 3) + 4 >> 2] = 0;
   } else {
    j = k;
    a : do if (!(j & 3)) {
     f = k;
     s = 14;
    } else {
     f = k;
     h = j;
     while (1) {
      if (!(a[f >> 0] | 0)) {
       f = h;
       break a;
      }
      f = f + 1 | 0;
      h = f;
      if (!(h & 3)) {
       s = 14;
       break;
      }
     }
    } while (0);
    if ((s | 0) == 14) {
     s = 0;
     while (1) {
      h = c[f >> 2] | 0;
      if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) f = f + 4 | 0; else break;
     }
     if ((h & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
    }
    f = f - j | 0;
    if ((f | 0) > 0 & (a[k >> 0] | 0) != 0) {
     m = bf(f + 9 | 0) | 0;
     c[o >> 2] = m;
     j = m;
     c[j >> 2] = 0;
     c[j + 4 >> 2] = 0;
     c[m >> 2] = 0;
     c[m >> 2] = (c[m >> 2] | 0) + 1;
     o = c[o >> 2] | 0;
     c[o + 4 >> 2] = f;
     o = o + 8 | 0;
     q = n + (q << 3) + 4 | 0;
     c[q >> 2] = o;
     Af(o | 0, k | 0, f | 0) | 0;
     a[(c[q >> 2] | 0) + f >> 0] = 0;
     break;
    } else {
     c[o >> 2] = 0;
     c[n + (q << 3) + 4 >> 2] = 0;
     break;
    }
   } while (0);
   r = r + 1 | 0;
   if ((r | 0) == (b | 0)) {
    n = e;
    m = p;
    break;
   } else q = p;
  }
 } else {
  l = 0;
  n = 0;
  m = 0;
 }
 c[8944] = 0;
 c[8945] = 0;
 e = c[8940] | 0;
 if (e | 0) {
  k = c[8942] | 0;
  f = c[8943] | 0;
  if ((k | 0) < (f | 0)) {
   j = e + (k << 3) | 0;
   h = c[j >> 2] | 0;
   if (!h) e = f; else {
    s = c[h >> 2] | 0;
    c[h >> 2] = s - 1;
    if ((s | 0) == 1) {
     cf(c[j >> 2] | 0);
     c[j >> 2] = 0;
     e = e + (k << 3) + 4 | 0;
     c[e >> 2] = 0;
    } else e = e + (k << 3) + 4 | 0;
    c[j >> 2] = 0;
    c[e >> 2] = 0;
    e = c[8943] | 0;
   }
   f = k + 1 | 0;
   if ((f | 0) < (e | 0)) do {
    h = c[8940] | 0;
    k = h + (f << 3) | 0;
    j = c[k >> 2] | 0;
    if (j) {
     s = c[j >> 2] | 0;
     c[j >> 2] = s - 1;
     if ((s | 0) == 1) {
      cf(c[k >> 2] | 0);
      c[k >> 2] = 0;
      e = h + (f << 3) + 4 | 0;
      c[e >> 2] = 0;
     } else e = h + (f << 3) + 4 | 0;
     c[k >> 2] = 0;
     c[e >> 2] = 0;
     e = c[8943] | 0;
    }
    f = f + 1 | 0;
   } while ((f | 0) < (e | 0));
   e = c[8940] | 0;
  }
  cf(e);
 };
 c[8940] = 0;
 c[8941] = 0;
 c[8942] = 0;
 c[8943] = 0;
 c[8944] = 16;
 c[8945] = 65536;
 c[8940] = 0;
 c[8941] = 0;
 c[8942] = 0;
 c[8940] = l;
 c[8941] = n;
 c[8942] = 0;
 c[8943] = m;
 f = bf(888) | 0;
 Bf(f | 0, 0, 888) | 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 9;
 e = f + 12 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 r = f + 28 | 0;
 c[r >> 2] = 16;
 s = f + 32 | 0;
 c[s >> 2] = 65536;
 a[f + 36 >> 0] = 0;
 a[f + 37 >> 0] = 0;
 c[8963] = f;
 c[f >> 2] = 1176;
 Bf(f + 40 | 0, -1, 520) | 0;
 g[f + 560 >> 2] = 1.0;
 d = f + 564 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 580 >> 2] = 1.0;
 d = f + 584 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 600 >> 2] = 1.0;
 d = f + 604 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 620 >> 2] = 1.0;
 g[f + 624 >> 2] = 1.0;
 d = f + 628 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 644 >> 2] = 1.0;
 d = f + 648 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 664 >> 2] = 1.0;
 d = f + 668 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 684 >> 2] = 1.0;
 g[f + 688 >> 2] = 1.0;
 d = f + 692 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 708 >> 2] = 1.0;
 d = f + 712 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 728 >> 2] = 1.0;
 d = f + 732 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 748 >> 2] = 1.0;
 c[f + 752 >> 2] = 0;
 d = f + 760 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 c[d + 16 >> 2] = 0;
 c[d + 20 >> 2] = 0;
 c[d + 24 >> 2] = 0;
 g[f + 792 >> 2] = 1.0;
 d = f + 796 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 812 >> 2] = 1.0;
 d = f + 816 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 832 >> 2] = 1.0;
 d = f + 836 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 g[f + 852 >> 2] = 1.0;
 d = f + 856 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 c[d + 16 >> 2] = 0;
 g[f + 876 >> 2] = 1.0;
 g[f + 880 >> 2] = 1.0;
 a[f + 884 >> 0] = 0;
 a[f + 885 >> 0] = 0;
 d = bf(4) | 0;
 c[d >> 2] = Ef() | 0;
 b = bf(84) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 20 >> 2] = 16;
 c[b + 24 >> 2] = 65536;
 a[b + 28 >> 0] = 0;
 q = b + 32 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[b + 48 >> 2] = 16;
 c[b + 52 >> 2] = 65536;
 a[b + 56 >> 0] = 0;
 q = b + 60 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[b + 76 >> 2] = 16;
 c[b + 80 >> 2] = 65536;
 c[8964] = b;
 b = bf(84) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 20 >> 2] = 16;
 c[b + 24 >> 2] = 65536;
 a[b + 28 >> 0] = 0;
 q = b + 32 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[b + 48 >> 2] = 16;
 c[b + 52 >> 2] = 65536;
 a[b + 56 >> 0] = 0;
 q = b + 60 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[b + 76 >> 2] = 16;
 c[b + 80 >> 2] = 65536;
 c[8965] = b;
 ne(32957, t);
 kc(44, 0, 1);
 ne(32982, u);
 u = c[8964] | 0;
 qe(u);
 cf(u);
 u = c[8965] | 0;
 qe(u);
 cf(u);
 cf(d);
 c[8964] = 0;
 c[8965] = 0;
 c[f >> 2] = 1580;
 c[8963] = 0;
 c[r >> 2] = 0;
 c[s >> 2] = 0;
 e = c[e >> 2] | 0;
 if (!e) {
  cf(f);
  i = v;
  return 0;
 }
 cf(e);
 cf(f);
 i = v;
 return 0;
}

function ve(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 48 | 0;
 t = w + 24 | 0;
 v = w;
 p = b + 4 | 0;
 j = c[p >> 2] | 0;
 r = b + 12 | 0;
 e = c[r >> 2] | 0;
 s = b + 8 | 0;
 h = c[s >> 2] | 0;
 if ((j - e | 0) == (0 - h | 0)) {
  f = j >> 1;
  g = c[b + 16 >> 2] | 0;
  if ((f | 0) >= (g | 0)) {
   g = c[b + 20 >> 2] | 0;
   g = (f | 0) > (g | 0) ? g : f;
  }
  q = g + j | 0;
  o = q - e + h >> 1;
  if (!g) {
   o = h;
   m = j;
  } else {
   m = e - h | 0;
   n = bf(q * 40 | 0) | 0;
   if ((m | 0) > 0) {
    j = n + (o * 40 | 0) | 0;
    k = 0;
    l = (c[b >> 2] | 0) + ((c[s >> 2] | 0) * 40 | 0) | 0;
    do {
     c[j >> 2] = c[l >> 2];
     e = j + 8 | 0;
     h = l + 24 | 0;
     f = c[h >> 2] | 0;
     do if (!f) {
      c[j + 24 >> 2] = 0;
      f = l + 8 | 0;
     } else {
      g = l + 8 | 0;
      if ((f | 0) == (g | 0)) {
       c[j + 24 >> 2] = e;
       g = c[h >> 2] | 0;
       Ac[c[(c[g >> 2] | 0) + 12 >> 2] & 31](g, e);
       break;
      } else {
       c[j + 24 >> 2] = f;
       c[h >> 2] = 0;
       f = g;
       break;
      }
     } while (0);
     a[j + 32 >> 0] = a[l + 32 >> 0] | 0;
     j = j + 40 | 0;
     l = l + 40 | 0;
     e = c[h >> 2] | 0;
     if ((e | 0) == (f | 0)) zc[c[(c[f >> 2] | 0) + 16 >> 2] & 63](f); else if (e | 0) zc[c[(c[e >> 2] | 0) + 20 >> 2] & 63](e);
     k = k + 1 | 0;
    } while ((k | 0) != (m | 0));
   }
   e = c[b >> 2] | 0;
   if (e | 0) cf(e);
   c[b >> 2] = n;
   c[p >> 2] = q;
   c[s >> 2] = o;
   e = m + o | 0;
   c[r >> 2] = e;
   m = q;
  }
 } else {
  o = h;
  m = j;
 }
 n = c[b >> 2] | 0;
 k = (n | 0) == 0;
 g = k ? 0 : n + (o * 40 | 0) | 0;
 l = c[d >> 2] | 0;
 f = g;
 g = ((k ? 0 : n + (e * 40 | 0) | 0) - g | 0) / 40 | 0;
 a : while (1) {
  while (1) {
   if (!g) break a;
   h = (g | 0) / 2 | 0;
   j = f + (h * 40 | 0) | 0;
   if ((c[j >> 2] | 0) < (l | 0)) break; else g = h;
  }
  f = j + 40 | 0;
  g = g + -1 - h | 0;
 }
 j = k ? 0 : n + (o * 40 | 0) | 0;
 g = (f - j | 0) / 40 | 0;
 h = e - o | 0;
 do if ((h | 0) == (g | 0)) {
  if ((e | 0) < (m | 0)) {
   c[r >> 2] = e + 1;
   u = 60;
   break;
  }
  if ((o | 0) > 0) {
   e = we(b, g) | 0;
   u = 42;
  } else e = 0;
 } else {
  if ((f | 0) == (j | 0)) {
   if ((o | 0) > 0) {
    e = o + -1 | 0;
    c[s >> 2] = e;
    u = 60;
    break;
   }
   if ((e | 0) >= (m | 0)) {
    e = 0;
    break;
   }
   e = xe(b, 0) | 0;
   u = 42;
   break;
  }
  if ((h >> 1 | 0) > (g | 0)) if ((o | 0) > 0) {
   e = we(b, g) | 0;
   u = 42;
   break;
  } else {
   e = xe(b, g) | 0;
   u = 42;
   break;
  } else if ((e | 0) < (m | 0)) {
   e = xe(b, g) | 0;
   u = 42;
   break;
  } else {
   e = we(b, g) | 0;
   u = 42;
   break;
  }
 } while (0);
 if ((u | 0) == 42) {
  if ((e | 0) == (d | 0)) {
   i = w;
   return;
  }
 } else if ((u | 0) == 60) {
  e = n + (e * 40 | 0) | 0;
  c[e >> 2] = c[d >> 2];
  f = e + 8 | 0;
  g = d + 24 | 0;
  h = c[g >> 2] | 0;
  do if (!h) c[e + 24 >> 2] = 0; else if ((h | 0) == (d + 8 | 0)) {
   c[e + 24 >> 2] = f;
   v = c[g >> 2] | 0;
   Ac[c[(c[v >> 2] | 0) + 12 >> 2] & 31](v, f);
   break;
  } else {
   c[e + 24 >> 2] = h;
   c[g >> 2] = 0;
   break;
  } while (0);
  a[e + 32 >> 0] = a[d + 32 >> 0] | 0;
  i = w;
  return;
 }
 c[e >> 2] = c[d >> 2];
 m = e + 8 | 0;
 f = c[d + 24 >> 2] | 0;
 do if (!f) {
  f = v + 16 | 0;
  c[f >> 2] = 0;
  h = e + 24 | 0;
  g = c[h >> 2] | 0;
  if ((g | 0) == (m | 0)) {
   j = g;
   g = v;
   u = 53;
  } else {
   j = g;
   k = 0;
   g = v;
   u = 54;
  }
 } else {
  if ((f | 0) == (d + 8 | 0)) {
   g = v + 16 | 0;
   c[g >> 2] = v;
   Ac[c[(c[f >> 2] | 0) + 12 >> 2] & 31](f, v);
   f = g;
   g = c[g >> 2] | 0;
  } else {
   g = Bc[c[(c[f >> 2] | 0) + 8 >> 2] & 63](f) | 0;
   f = v + 16 | 0;
   c[f >> 2] = g;
  }
  k = g;
  h = e + 24 | 0;
  j = c[h >> 2] | 0;
  l = (j | 0) == (m | 0);
  if ((g | 0) != (v | 0)) if (l) {
   g = v;
   u = 53;
   break;
  } else {
   g = v;
   u = 54;
   break;
  }
  if (l) {
   Ac[c[(c[v >> 2] | 0) + 12 >> 2] & 31](v, t);
   g = c[f >> 2] | 0;
   zc[c[(c[g >> 2] | 0) + 16 >> 2] & 63](g);
   c[f >> 2] = 0;
   g = c[h >> 2] | 0;
   Ac[c[(c[g >> 2] | 0) + 12 >> 2] & 31](g, v);
   g = c[h >> 2] | 0;
   zc[c[(c[g >> 2] | 0) + 16 >> 2] & 63](g);
   c[h >> 2] = 0;
   c[f >> 2] = v;
   Ac[c[(c[t >> 2] | 0) + 12 >> 2] & 31](t, j);
   zc[c[(c[t >> 2] | 0) + 16 >> 2] & 63](t);
   c[h >> 2] = m;
   g = v;
   break;
  } else {
   Ac[c[(c[v >> 2] | 0) + 12 >> 2] & 31](v, m);
   g = c[f >> 2] | 0;
   zc[c[(c[g >> 2] | 0) + 16 >> 2] & 63](g);
   c[f >> 2] = c[h >> 2];
   c[h >> 2] = m;
   g = v;
   break;
  }
 } while (0);
 if ((u | 0) == 53) {
  Ac[c[(c[m >> 2] | 0) + 12 >> 2] & 31](j, g);
  u = c[h >> 2] | 0;
  zc[c[(c[u >> 2] | 0) + 16 >> 2] & 63](u);
  c[h >> 2] = c[f >> 2];
  c[f >> 2] = v;
 } else if ((u | 0) == 54) {
  c[f >> 2] = j;
  c[h >> 2] = k;
 }
 f = c[f >> 2] | 0;
 if ((f | 0) == (g | 0)) zc[c[(c[v >> 2] | 0) + 16 >> 2] & 63](g); else if (f | 0) zc[c[(c[f >> 2] | 0) + 20 >> 2] & 63](f);
 a[e + 32 >> 0] = a[d + 32 >> 0] | 0;
 i = w;
 return;
}

function Sc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 d = a + 152 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 156 | 0;
   c[b >> 2] = 0;
  } else b = a + 156 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 144 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 148 | 0;
   c[b >> 2] = 0;
  } else b = a + 148 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 136 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 140 | 0;
   c[b >> 2] = 0;
  } else b = a + 140 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 128 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 132 | 0;
   c[b >> 2] = 0;
  } else b = a + 132 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 120 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 124 | 0;
   c[b >> 2] = 0;
  } else b = a + 124 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 112 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 116 | 0;
   c[b >> 2] = 0;
  } else b = a + 116 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 104 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 108 | 0;
   c[b >> 2] = 0;
  } else b = a + 108 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 96 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 100 | 0;
   c[b >> 2] = 0;
  } else b = a + 100 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 88 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 92 | 0;
   c[b >> 2] = 0;
  } else b = a + 92 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 80 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 84 | 0;
   c[b >> 2] = 0;
  } else b = a + 84 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 72 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 76 | 0;
   c[b >> 2] = 0;
  } else b = a + 76 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 64 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 68 | 0;
   c[b >> 2] = 0;
  } else b = a + 68 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 56 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 60 | 0;
   c[b >> 2] = 0;
  } else b = a + 60 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 48 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 52 | 0;
   c[b >> 2] = 0;
  } else b = a + 52 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 40 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 44 | 0;
   c[b >> 2] = 0;
  } else b = a + 44 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 32 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 36 | 0;
   c[b >> 2] = 0;
  } else b = a + 36 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 24 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 28 | 0;
   c[b >> 2] = 0;
  } else b = a + 28 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 16 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 20 | 0;
   c[b >> 2] = 0;
  } else b = a + 20 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 d = a + 8 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   cf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 12 | 0;
   c[b >> 2] = 0;
  } else b = a + 12 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 b = c[a >> 2] | 0;
 if (!b) return;
 e = c[b >> 2] | 0;
 c[b >> 2] = e - 1;
 if ((e | 0) == 1) {
  cf(c[a >> 2] | 0);
  c[a >> 2] = 0;
  b = a + 4 | 0;
  c[b >> 2] = 0;
 } else b = a + 4 | 0;
 c[a >> 2] = 0;
 c[b >> 2] = 0;
 return;
}

function vd(f, g, h, j) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0;
 F = i;
 i = i + 48 | 0;
 E = F + 32 | 0;
 B = F + 24 | 0;
 v = F + 16 | 0;
 s = F + 8 | 0;
 C = F + 44 | 0;
 k = F;
 l = F + 40 | 0;
 m = g + 24 | 0;
 n = h + 92 | 0;
 be(f, m, n);
 if ((c[f + 4 >> 2] | 0) != -1) {
  i = F;
  return;
 }
 y = g + 280 | 0;
 w = c[y >> 2] | 0;
 c[y >> 2] = w + 1;
 y = g + 320 | 0;
 x = c[y >> 2] | 0;
 z = b[(c[g + 312 >> 2] | 0) + (x << 1) >> 1] | 0;
 c[y >> 2] = x + 1;
 y = Df(e[g + 284 >> 1] | 0 | 0, 0, 16) | 0;
 w = w | D;
 z = y | z & 65535;
 y = f;
 c[y >> 2] = z;
 c[y + 4 >> 2] = w;
 y = k;
 c[y >> 2] = z;
 c[y + 4 >> 2] = w;
 c[l >> 2] = c[(c[g >> 2] | 0) + ((c[g + 12 >> 2] | 0) + -1 << 2) >> 2];
 $d(m, n, k, l);
 y = g + 296 | 0;
 w = (c[y >> 2] | 0) + (e[f >> 1] | 0) | 0;
 z = g + 288 | 0;
 x = c[z >> 2] | 0;
 o = x + (w * 400 | 0) | 0;
 c[x + (w * 400 | 0) + 8 >> 2] = 1;
 A = g + 276 | 0;
 c[x + (w * 400 | 0) + 12 >> 2] = c[A >> 2];
 if ((o | 0) != (f | 0)) {
  q = f;
  r = c[q + 4 >> 2] | 0;
  t = o;
  c[t >> 2] = c[q >> 2];
  c[t + 4 >> 2] = r;
 }
 t = x + (w * 400 | 0) + 16 | 0;
 r = h;
 k = c[r + 4 >> 2] | 0;
 p = t;
 c[p >> 2] = c[r >> 2];
 c[p + 4 >> 2] = k;
 nd(x + (w * 400 | 0) + 24 | 0, h + 8 | 0);
 p = x + (w * 400 | 0) + 92 | 0;
 k = h + 76 | 0;
 c[p >> 2] = c[k >> 2];
 c[p + 4 >> 2] = c[k + 4 >> 2];
 c[p + 8 >> 2] = c[k + 8 >> 2];
 a[p + 12 >> 0] = a[k + 12 >> 0] | 0;
 k = x + (w * 400 | 0) + 108 | 0;
 if ((t | 0) == (h | 0)) k = c[h + 96 >> 2] | 0; else {
  c[k >> 2] = 0;
  Be(k, h + 92 | 0);
  k = c[h + 96 >> 2] | 0;
  q = h + 104 | 0;
  r = c[q + 4 >> 2] | 0;
  t = x + (w * 400 | 0) + 120 | 0;
  c[t >> 2] = c[q >> 2];
  c[t + 4 >> 2] = r;
 }
 c[x + (w * 400 | 0) + 112 >> 2] = k;
 r = x + (w * 400 | 0) + 128 | 0;
 k = h + 112 | 0;
 l = r;
 m = k;
 n = l + 76 | 0;
 do {
  c[l >> 2] = c[m >> 2];
  l = l + 4 | 0;
  m = m + 4 | 0;
 } while ((l | 0) < (n | 0));
 a[r + 76 >> 0] = a[k + 76 >> 0] | 0;
 t = g + 144 | 0;
 Gd(o);
 q = c[x + (w * 400 | 0) + 136 >> 2] | 0;
 k = x + (w * 400 | 0) + 296 | 0;
 c[k >> 2] = q;
 if ((q | 0) > 0) {
  l = 0;
  do {
   o = x + (w * 400 | 0) + 140 + (l << 3) | 0;
   g = c[o + 4 >> 2] | 0;
   q = x + (w * 400 | 0) + 300 + (l << 3) | 0;
   c[q >> 2] = c[o >> 2];
   c[q + 4 >> 2] = g;
   l = l + 1 | 0;
  } while ((l | 0) < (c[k >> 2] | 0));
 }
 a : do if ((c[p >> 2] | 0) > 0) {
  p = $(d[x + (w * 400 | 0) + 279 >> 0] | 0, c[x + (w * 400 | 0) + 208 >> 2] | 0) | 0;
  g = x + (w * 400 | 0) + 280 | 0;
  h = c[g >> 2] | 0;
  q = x + (w * 400 | 0) + 368 | 0;
  a[q >> 0] = (h | 0) == 2 ? 2 : 1;
  o = c[r >> 2] | 0;
  o = (o | 0) == -1 ? 0 : j + o | 0;
  k = 0;
  b : while (1) {
   n = k & 255;
   Jd(c[t >> 2] | 0);
   c[C >> 2] = 0;
   Ia(1, C | 0);
   l = c[C >> 2] | 0;
   m = (c[t >> 2] | 0) + 292 | 0;
   if ((c[m >> 2] | 0) != (l | 0)) {
    c[m >> 2] = l;
    va(34962, l | 0);
   }
   switch (h | 0) {
   case 0:
    {
     l = 35044;
     break;
    }
   case 1:
    {
     l = 35048;
     break;
    }
   case 2:
    {
     l = 35040;
     break;
    }
   default:
    break b;
   }
   Pb(34962, p | 0, o | 0, l | 0);
   Jd(c[t >> 2] | 0);
   c[x + (w * 400 | 0) + 372 + (n << 2) >> 2] = c[C >> 2];
   k = k + 1 << 24 >> 24;
   if ((k & 255) >= (d[q >> 0] | 0)) break a;
   h = c[g >> 2] | 0;
  }
  pe(20015, s);
  eb();
 } while (0);
 k = c[x + (w * 400 | 0) + 288 >> 2] | 0;
 c : do if (k | 0) {
  l = c[x + (w * 400 | 0) + 284 >> 2] | 0;
  switch (k | 0) {
  case 2:
   {
    u = 4;
    break;
   }
  case 1:
   {
    u = 2;
    break;
   }
  default:
   {
    pe(21576, v);
    eb();
   }
  }
  p = $(u, l) | 0;
  g = x + (w * 400 | 0) + 292 | 0;
  h = c[g >> 2] | 0;
  q = x + (w * 400 | 0) + 384 | 0;
  a[q >> 0] = (h | 0) == 2 ? 2 : 1;
  o = c[x + (w * 400 | 0) + 132 >> 2] | 0;
  o = (o | 0) == -1 ? 0 : j + o | 0;
  k = 0;
  d : while (1) {
   n = k & 255;
   Jd(c[t >> 2] | 0);
   c[C >> 2] = 0;
   Ia(1, C | 0);
   l = c[C >> 2] | 0;
   m = (c[t >> 2] | 0) + 296 | 0;
   if ((c[m >> 2] | 0) != (l | 0)) {
    c[m >> 2] = l;
    va(34963, l | 0);
   }
   switch (h | 0) {
   case 0:
    {
     l = 35044;
     break;
    }
   case 1:
    {
     l = 35048;
     break;
    }
   case 2:
    {
     l = 35040;
     break;
    }
   default:
    break d;
   }
   Pb(34963, p | 0, o | 0, l | 0);
   Jd(c[t >> 2] | 0);
   c[x + (w * 400 | 0) + 388 + (n << 2) >> 2] = c[C >> 2];
   k = k + 1 << 24 >> 24;
   if ((k & 255) >= (d[q >> 0] | 0)) break c;
   h = c[g >> 2] | 0;
  }
  pe(20015, B);
  eb();
 } while (0);
 m = c[f >> 2] | 0;
 n = m & 65535;
 l = (c[y >> 2] | 0) + n | 0;
 k = c[z >> 2] | 0;
 C = f;
 f = k + (l * 400 | 0) | 0;
 if ((c[C >> 2] | 0) == (c[f >> 2] | 0) ? (c[C + 4 >> 2] | 0) == (c[f + 4 >> 2] | 0) : 0) {
  c[k + (l * 400 | 0) + 8 >> 2] = 3;
  c[k + (l * 400 | 0) + 12 >> 2] = c[A >> 2];
  i = F;
  return;
 } else {
  c[E >> 2] = m >>> 16;
  c[E + 4 >> 2] = n;
  oe(19098, E);
  i = F;
  return;
 }
}

function Bd(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 j = m;
 c[j >> 2] = 0;
 Be(d, j);
 c[d + 4 >> 2] = -1;
 j = d + 8 | 0;
 h = j;
 c[h >> 2] = 0;
 c[h + 4 >> 2] = 0;
 c[j >> 2] = 2013282306;
 b[j + 4 >> 1] = 192;
 g[d + 16 >> 2] = 1.0;
 g[d + 20 >> 2] = 1.0;
 g[d + 24 >> 2] = 1.0;
 g[d + 28 >> 2] = 1.0;
 b[d + 32 >> 1] = 28672;
 b[d + 34 >> 1] = 28672;
 j = d + 36 | 0;
 c[j >> 2] = 0;
 b[j >> 1] = 32647;
 b[j + 2 >> 1] = 255;
 b[d + 40 >> 1] = 296;
 j = d + 42 | 0;
 a[d + 44 >> 0] = 17;
 a[d + 45 >> 0] = 13;
 a[d + 46 >> 0] = 17;
 a[d + 47 >> 0] = 13;
 a[d + 48 >> 0] = 17;
 a[d + 49 >> 0] = 13;
 a[d + 50 >> 0] = 17;
 a[d + 51 >> 0] = 13;
 a[d + 52 >> 0] = 17;
 a[d + 53 >> 0] = 13;
 a[d + 54 >> 0] = 17;
 a[d + 55 >> 0] = 13;
 a[d + 56 >> 0] = 17;
 a[d + 57 >> 0] = 13;
 a[d + 58 >> 0] = 17;
 a[d + 59 >> 0] = 13;
 a[d + 60 >> 0] = 17;
 a[d + 61 >> 0] = 13;
 a[d + 62 >> 0] = 17;
 a[d + 63 >> 0] = 13;
 a[d + 64 >> 0] = 17;
 a[d + 65 >> 0] = 13;
 a[d + 66 >> 0] = 17;
 a[d + 67 >> 0] = 13;
 a[d + 68 >> 0] = 17;
 a[d + 69 >> 0] = 13;
 a[d + 70 >> 0] = 17;
 a[d + 71 >> 0] = 13;
 a[d + 72 >> 0] = 17;
 a[d + 73 >> 0] = 13;
 a[d + 74 >> 0] = 17;
 a[d + 75 >> 0] = 13;
 a[j >> 0] = 0;
 a[d + 43 >> 0] = 1;
 a[d + 108 >> 0] = 0;
 a[d + 109 >> 0] = 0;
 h = d + 76 | 0;
 k = d + 92 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = h;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 a[d + 112 >> 0] = 17;
 a[d + 113 >> 0] = 13;
 a[d + 114 >> 0] = 17;
 a[d + 115 >> 0] = 13;
 a[d + 116 >> 0] = 17;
 a[d + 117 >> 0] = 13;
 a[d + 118 >> 0] = 17;
 a[d + 119 >> 0] = 13;
 a[d + 120 >> 0] = 17;
 a[d + 121 >> 0] = 13;
 a[d + 122 >> 0] = 17;
 a[d + 123 >> 0] = 13;
 a[d + 124 >> 0] = 17;
 a[d + 125 >> 0] = 13;
 a[d + 126 >> 0] = 17;
 a[d + 127 >> 0] = 13;
 a[d + 128 >> 0] = 17;
 a[d + 129 >> 0] = 13;
 a[d + 130 >> 0] = 17;
 a[d + 131 >> 0] = 13;
 a[d + 132 >> 0] = 17;
 a[d + 133 >> 0] = 13;
 a[d + 134 >> 0] = 17;
 a[d + 135 >> 0] = 13;
 a[d + 136 >> 0] = 17;
 a[d + 137 >> 0] = 13;
 a[d + 138 >> 0] = 17;
 a[d + 139 >> 0] = 13;
 a[d + 140 >> 0] = 17;
 a[d + 141 >> 0] = 13;
 a[d + 142 >> 0] = 17;
 a[d + 143 >> 0] = 13;
 a[d + 110 >> 0] = 0;
 a[d + 111 >> 0] = 1;
 a[d + 176 >> 0] = 0;
 a[d + 177 >> 0] = 0;
 h = d + 144 | 0;
 k = d + 160 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = h;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 a[d + 180 >> 0] = 17;
 a[d + 181 >> 0] = 13;
 a[d + 182 >> 0] = 17;
 a[d + 183 >> 0] = 13;
 a[d + 184 >> 0] = 17;
 a[d + 185 >> 0] = 13;
 a[d + 186 >> 0] = 17;
 a[d + 187 >> 0] = 13;
 a[d + 188 >> 0] = 17;
 a[d + 189 >> 0] = 13;
 a[d + 190 >> 0] = 17;
 a[d + 191 >> 0] = 13;
 a[d + 192 >> 0] = 17;
 a[d + 193 >> 0] = 13;
 a[d + 194 >> 0] = 17;
 a[d + 195 >> 0] = 13;
 a[d + 196 >> 0] = 17;
 a[d + 197 >> 0] = 13;
 a[d + 198 >> 0] = 17;
 a[d + 199 >> 0] = 13;
 a[d + 200 >> 0] = 17;
 a[d + 201 >> 0] = 13;
 a[d + 202 >> 0] = 17;
 a[d + 203 >> 0] = 13;
 a[d + 204 >> 0] = 17;
 a[d + 205 >> 0] = 13;
 a[d + 206 >> 0] = 17;
 a[d + 207 >> 0] = 13;
 a[d + 208 >> 0] = 17;
 a[d + 209 >> 0] = 13;
 a[d + 210 >> 0] = 17;
 a[d + 211 >> 0] = 13;
 a[d + 178 >> 0] = 0;
 a[d + 179 >> 0] = 1;
 a[d + 244 >> 0] = 0;
 a[d + 245 >> 0] = 0;
 h = d + 212 | 0;
 k = d + 228 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = h;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 a[d + 248 >> 0] = 17;
 a[d + 249 >> 0] = 13;
 a[d + 250 >> 0] = 17;
 a[d + 251 >> 0] = 13;
 a[d + 252 >> 0] = 17;
 a[d + 253 >> 0] = 13;
 a[d + 254 >> 0] = 17;
 a[d + 255 >> 0] = 13;
 a[d + 256 >> 0] = 17;
 a[d + 257 >> 0] = 13;
 a[d + 258 >> 0] = 17;
 a[d + 259 >> 0] = 13;
 a[d + 260 >> 0] = 17;
 a[d + 261 >> 0] = 13;
 a[d + 262 >> 0] = 17;
 a[d + 263 >> 0] = 13;
 a[d + 264 >> 0] = 17;
 a[d + 265 >> 0] = 13;
 a[d + 266 >> 0] = 17;
 a[d + 267 >> 0] = 13;
 a[d + 268 >> 0] = 17;
 a[d + 269 >> 0] = 13;
 a[d + 270 >> 0] = 17;
 a[d + 271 >> 0] = 13;
 a[d + 272 >> 0] = 17;
 a[d + 273 >> 0] = 13;
 a[d + 274 >> 0] = 17;
 a[d + 275 >> 0] = 13;
 a[d + 276 >> 0] = 17;
 a[d + 277 >> 0] = 13;
 a[d + 278 >> 0] = 17;
 a[d + 279 >> 0] = 13;
 a[d + 246 >> 0] = 0;
 a[d + 247 >> 0] = 1;
 a[d + 312 >> 0] = 0;
 a[d + 313 >> 0] = 0;
 h = d + 280 | 0;
 k = d + 296 | 0;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 255;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 k = h;
 l = k + 16 | 0;
 do {
  a[k >> 0] = 0;
  k = k + 1 | 0;
 } while ((k | 0) < (l | 0));
 c[d + 316 >> 2] = 3;
 h = d + 320 | 0;
 c[h >> 2] = -1;
 c[h + 4 >> 2] = -1;
 nd(j, e);
 h = d + 320 | 0;
 if ((h | 0) == (f | 0)) {
  i = m;
  return;
 }
 k = f;
 l = c[k + 4 >> 2] | 0;
 f = h;
 c[f >> 2] = c[k >> 2];
 c[f + 4 >> 2] = l;
 i = m;
 return;
}

function _e(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0, j = 0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0.0;
 B = i;
 i = i + 560 | 0;
 x = B + 480 | 0;
 v = B + 320 | 0;
 z = B + 160 | 0;
 y = B;
 A = (g[k >> 2] = a, c[k >> 2] | 0);
 l = +O(+a);
 d = (g[k >> 2] = l, c[k >> 2] | 0);
 do if (d >>> 0 < 1305022427) {
  l = a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0;
  h[b >> 3] = a - l * 1.5707963109016418 - l * 1.5893254773528196e-08;
  d = ~~l;
 } else {
  if (d >>> 0 > 2139095039) {
   h[b >> 3] = a - a;
   d = 0;
   break;
  }
  u = d >>> 23;
  j = u + -150 | 0;
  a = (c[k >> 2] = d - (j << 23), +g[k >> 2]);
  u = (u + -153 | 0) / 24 | 0;
  u = (u | 0) < 0 ? 0 : u;
  f = (u * 24 | 0) + 24 | 0;
  d = 0;
  e = u;
  while (1) {
   h[v + (d << 3) >> 3] = +(c[1840 + (e << 2) >> 2] | 0);
   d = d + 1 | 0;
   if ((d | 0) == 4) break; else e = e + 1 | 0;
  }
  e = j - f | 0;
  d = 0;
  do {
   h[y + (d << 3) >> 3] = a * +h[v + (d << 3) >> 3] + 0.0;
   d = d + 1 | 0;
  } while ((d | 0) != 4);
  r = (e | 0) > 0;
  s = 24 - e | 0;
  t = 23 - e | 0;
  q = (j | 0) == (f | 0);
  d = 3;
  a : while (1) {
   l = +h[y + (d << 3) >> 3];
   m = (d | 0) > 0;
   if (m) {
    f = 0;
    j = d;
    while (1) {
     C = +(~~(l * 5.9604644775390625e-08) | 0);
     c[x + (f << 2) >> 2] = ~~(l - C * 16777216.0);
     p = j;
     j = j + -1 | 0;
     l = C + +h[y + (j << 3) >> 3];
     if ((p | 0) <= 1) break; else f = f + 1 | 0;
    }
   }
   l = +Ye(l, e);
   l = l - +N(+(l * .125)) * 8.0;
   f = ~~l;
   l = l - +(f | 0);
   do if (r) {
    p = x + (d + -1 << 2) | 0;
    j = c[p >> 2] | 0;
    w = j >> s;
    j = j - (w << s) | 0;
    c[p >> 2] = j;
    j = j >> t;
    f = w + f | 0;
    w = 17;
   } else if (q) {
    j = c[x + (d + -1 << 2) >> 2] >> 23;
    w = 17;
    break;
   } else if (!(l >= .5)) {
    m = 0;
    p = f;
    break;
   } else {
    j = 2;
    w = 18;
    break;
   } while (0);
   if ((w | 0) == 17) {
    w = 0;
    if ((j | 0) > 0) w = 18; else {
     m = j;
     p = f;
    }
   }
   if ((w | 0) == 18) {
    w = 0;
    p = f + 1 | 0;
    if (m) {
     f = 0;
     o = 0;
     do {
      m = x + (o << 2) | 0;
      n = c[m >> 2] | 0;
      if (!f) if (!n) f = 0; else {
       c[m >> 2] = 16777216 - n;
       f = 1;
      } else c[m >> 2] = 16777215 - n;
      o = o + 1 | 0;
     } while ((o | 0) != (d | 0));
    } else f = 0;
    b : do if (r) switch (e | 0) {
    case 1:
     {
      o = x + (d + -1 << 2) | 0;
      c[o >> 2] = c[o >> 2] & 8388607;
      break b;
     }
    case 2:
     {
      o = x + (d + -1 << 2) | 0;
      c[o >> 2] = c[o >> 2] & 4194303;
      break b;
     }
    default:
     break b;
    } while (0);
    if ((j | 0) == 2) {
     l = 1.0 - l;
     if (!f) m = 2; else {
      m = 2;
      l = l - +Ye(1.0, e);
     }
    } else m = j;
   }
   if (!(l == 0.0)) {
    w = 39;
    break;
   }
   if ((d | 0) > 3) {
    f = d;
    j = 0;
    do {
     f = f + -1 | 0;
     j = c[x + (f << 2) >> 2] | j;
    } while ((f | 0) > 3);
    if (!j) f = 1; else {
     w = 38;
     break;
    }
   } else f = 1;
   while (1) if (!(c[x + (3 - f << 2) >> 2] | 0)) f = f + 1 | 0; else break;
   j = f + d | 0;
   if ((f | 0) <= 0) {
    d = j;
    continue;
   }
   while (1) {
    d = d + 1 | 0;
    C = +(c[1840 + (d + u << 2) >> 2] | 0);
    h[v + (d << 3) >> 3] = C;
    h[y + (d << 3) >> 3] = a * C + 0.0;
    if ((d | 0) >= (j | 0)) {
     d = j;
     continue a;
    }
   }
  }
  do if ((w | 0) == 38) while (1) {
   e = e + -24 | 0;
   d = d + -1 | 0;
   if (!(c[x + (d << 2) >> 2] | 0)) w = 38; else break;
  } else if ((w | 0) == 39) {
   a = +Ye(l, 0 - e | 0);
   if (!(a >= 16777216.0)) {
    c[x + (d << 2) >> 2] = ~~a;
    break;
   } else {
    w = ~~(a * 5.9604644775390625e-08);
    c[x + (d << 2) >> 2] = ~~(a - +(w | 0) * 16777216.0);
    d = d + 1 | 0;
    c[x + (d << 2) >> 2] = w;
    e = e + 24 | 0;
    break;
   }
  } while (0);
  if ((d | 0) > -1) {
   a = +Ye(1.0, e);
   e = d;
   while (1) {
    h[y + (e << 3) >> 3] = a * +(c[x + (e << 2) >> 2] | 0);
    if ((e | 0) > 0) {
     a = a * 5.9604644775390625e-08;
     e = e + -1 | 0;
    } else {
     f = d;
     break;
    }
   }
   while (1) {
    e = d - f | 0;
    a = 0.0;
    j = 0;
    while (1) {
     a = a + +h[1024 + (j << 3) >> 3] * +h[y + (j + f << 3) >> 3];
     if ((j | 0) > 2 | (j | 0) >= (e | 0)) break; else j = j + 1 | 0;
    }
    h[z + (e << 3) >> 3] = a;
    if ((f | 0) > 0) f = f + -1 | 0; else {
     a = 0.0;
     break;
    }
   }
   while (1) {
    a = a + +h[z + (d << 3) >> 3];
    if ((d | 0) > 0) d = d + -1 | 0; else break;
   }
  } else a = 0.0;
  a = (m | 0) == 0 ? a : -a;
  d = p & 7;
  if ((A | 0) < 0) {
   h[b >> 3] = -a;
   d = 0 - d | 0;
   break;
  } else {
   h[b >> 3] = a;
   break;
  }
 } while (0);
 i = B;
 return d | 0;
}

function he(a) {
 a = a | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 k = r;
 q = b[a + 36 >> 1] | 0;
 if ((q & 255) << 24 >> 24 != 0 | (q & 65535) < 256) {
  q = 6;
  i = r;
  return q | 0;
 }
 q = a + 12 | 0;
 m = c[q >> 2] | 0;
 j = (m | 0) == 0;
 if (j) {
  g = 0;
  d = 0;
 } else {
  g = m + (c[a + 24 >> 2] << 2) | 0;
  d = m + (c[a + 20 >> 2] << 2) | 0;
 }
 h = d;
 d = g - d >> 2;
 a : while (1) {
  while (1) {
   if (!d) break a;
   e = (d | 0) / 2 | 0;
   f = h + (e << 2) | 0;
   if ((c[f >> 2] | 0) < 3) break; else d = e;
  }
  h = f + 4 | 0;
  d = d + -1 - e | 0;
 }
 if ((h | 0) != (g | 0)) if ((c[h >> 2] | 0) <= 3) {
  q = 3;
  i = r;
  return q | 0;
 }
 if (j) {
  h = 0;
  d = 0;
 } else {
  h = m + (c[a + 24 >> 2] << 2) | 0;
  d = m + (c[a + 20 >> 2] << 2) | 0;
 }
 j = d;
 g = d;
 d = h - j >> 2;
 b : while (1) {
  while (1) {
   if (!d) break b;
   e = (d | 0) / 2 | 0;
   f = g + (e << 2) | 0;
   if ((c[f >> 2] | 0) < 3) break; else d = e;
  }
  g = f + 4 | 0;
  d = d + -1 - e | 0;
 }
 if ((g | 0) != (h | 0)) if ((c[g >> 2] | 0) == 3) {
  pe(33096, k);
  eb();
 }
 p = g - j >> 2;
 l = a + 16 | 0;
 e = c[l >> 2] | 0;
 n = a + 24 | 0;
 g = c[n >> 2] | 0;
 o = a + 20 | 0;
 h = c[o >> 2] | 0;
 if ((e - g | 0) == (0 - h | 0)) {
  f = e >> 1;
  d = c[a + 28 >> 2] | 0;
  if ((f | 0) >= (d | 0)) {
   d = c[a + 32 >> 2] | 0;
   d = (f | 0) > (d | 0) ? d : f;
  }
  k = d + e | 0;
  if (!d) {
   j = g;
   f = m;
  } else {
   d = g - h | 0;
   f = bf(k << 2) | 0;
   e = c[q >> 2] | 0;
   if ((d | 0) > 0) {
    g = f;
    h = 0;
    j = e + (c[o >> 2] << 2) | 0;
    while (1) {
     c[g >> 2] = c[j >> 2];
     h = h + 1 | 0;
     if ((h | 0) == (d | 0)) break; else {
      g = g + 4 | 0;
      j = j + 4 | 0;
     }
    }
   }
   if (e | 0) cf(e);
   c[q >> 2] = f;
   c[l >> 2] = k;
   c[o >> 2] = 0;
   c[n >> 2] = d;
   j = d;
   h = 0;
   e = k;
  }
 } else {
  j = g;
  f = m;
 }
 d = j - h | 0;
 do if ((d | 0) == (p | 0)) {
  if ((j | 0) < (e | 0)) {
   c[n >> 2] = j + 1;
   d = f + (j << 2) | 0;
   break;
  }
  c[f + (h + -1 << 2) >> 2] = c[f + (h << 2) >> 2];
  e = p + -1 | 0;
  if ((h | 0) < (h + e | 0)) {
   g = c[q >> 2] | 0;
   d = c[o >> 2] | 0;
   f = d + e | 0;
   e = h;
   do {
    n = e;
    e = e + 1 | 0;
    c[g + (n << 2) >> 2] = c[g + (e << 2) >> 2];
   } while ((e | 0) < (f | 0));
  } else d = h;
  d = d + -1 | 0;
  c[o >> 2] = d;
  d = (c[q >> 2] | 0) + (d + p << 2) | 0;
 } else {
  if (!p) {
   if ((h | 0) > 0) {
    d = h + -1 | 0;
    c[o >> 2] = d;
    d = f + (d << 2) | 0;
    break;
   }
   d = j + -1 | 0;
   c[f + (j << 2) >> 2] = c[f + (d << 2) >> 2];
   if ((d | 0) > (h | 0)) {
    g = c[q >> 2] | 0;
    e = j;
    f = d;
    while (1) {
     c[g + (f << 2) >> 2] = c[g + (e + -2 << 2) >> 2];
     d = f + -1 | 0;
     if ((d | 0) > (h | 0)) {
      e = f;
      f = d;
     } else break;
    }
   }
   c[n >> 2] = j + 1;
   d = (c[q >> 2] | 0) + (h << 2) | 0;
   break;
  }
  if ((d >> 1 | 0) > (p | 0)) if ((h | 0) > 0) {
   c[f + (h + -1 << 2) >> 2] = c[f + (h << 2) >> 2];
   e = p + -1 | 0;
   if ((h | 0) < (h + e | 0)) {
    g = c[q >> 2] | 0;
    d = c[o >> 2] | 0;
    f = d + e | 0;
    e = h;
    do {
     n = e;
     e = e + 1 | 0;
     c[g + (n << 2) >> 2] = c[g + (e << 2) >> 2];
    } while ((e | 0) < (f | 0));
   } else d = h;
   d = d + -1 | 0;
   c[o >> 2] = d;
   d = (c[q >> 2] | 0) + (d + p << 2) | 0;
   break;
  } else {
   e = j + -1 | 0;
   c[f + (j << 2) >> 2] = c[f + (e << 2) >> 2];
   f = h + p | 0;
   if ((e | 0) > (f | 0)) {
    g = c[q >> 2] | 0;
    d = j;
    while (1) {
     c[g + (e << 2) >> 2] = c[g + (d + -2 << 2) >> 2];
     d = e + -1 | 0;
     if ((d | 0) > (f | 0)) {
      p = e;
      e = d;
      d = p;
     } else break;
    }
   }
   c[n >> 2] = j + 1;
   d = (c[q >> 2] | 0) + (f << 2) | 0;
   break;
  } else if ((j | 0) < (e | 0)) {
   e = j + -1 | 0;
   c[f + (j << 2) >> 2] = c[f + (e << 2) >> 2];
   f = h + p | 0;
   if ((e | 0) > (f | 0)) {
    g = c[q >> 2] | 0;
    d = j;
    while (1) {
     c[g + (e << 2) >> 2] = c[g + (d + -2 << 2) >> 2];
     d = e + -1 | 0;
     if ((d | 0) > (f | 0)) {
      p = e;
      e = d;
      d = p;
     } else break;
    }
   }
   c[n >> 2] = j + 1;
   d = (c[q >> 2] | 0) + (f << 2) | 0;
   break;
  } else {
   c[f + (h + -1 << 2) >> 2] = c[f + (h << 2) >> 2];
   e = p + -1 | 0;
   if ((h | 0) < (h + e | 0)) {
    g = c[q >> 2] | 0;
    d = c[o >> 2] | 0;
    f = d + e | 0;
    e = h;
    do {
     n = e;
     e = e + 1 | 0;
     c[g + (n << 2) >> 2] = c[g + (e << 2) >> 2];
    } while ((e | 0) < (f | 0));
   } else d = h;
   d = d + -1 | 0;
   c[o >> 2] = d;
   d = (c[q >> 2] | 0) + (d + p << 2) | 0;
   break;
  }
 } while (0);
 c[d >> 2] = 3;
 q = 3;
 i = r;
 return q | 0;
}

function Oc(b) {
 b = b | 0;
 var d = 0, f = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0.0, z = 0.0, A = 0.0, B = 0.0, C = 0.0, E = 0.0, F = 0.0, G = 0.0, H = 0.0, I = 0.0, J = 0.0, K = 0, L = 0;
 x = i;
 i = i + 176 | 0;
 w = x + 8 | 0;
 v = x;
 d = x + 112 | 0;
 f = x + 48 | 0;
 r = x + 24 | 0;
 k = b + 752 | 0;
 j = (c[k >> 2] | 0) + 1 | 0;
 c[k >> 2] = j;
 C = +(j | 0) * .009999999776482582;
 A = +ef(C) * 10.0;
 C = +df(C) * 10.0;
 z = 0.0 - A;
 J = 0.0 - C;
 B = 1.0 / +P(+(z * z + 6.25 + J * J));
 z = z * B;
 y = B * -2.5;
 B = J * B;
 J = y * 0.0;
 I = J - B;
 H = B * 0.0 - z * 0.0;
 J = z - J;
 F = 1.0 / +P(+(J * J + (I * I + H * H)));
 I = F * I;
 H = F * H;
 J = F * J;
 F = B * H - y * J;
 E = z * J - B * I;
 G = y * I - z * H;
 g[b + 560 >> 2] = I;
 g[b + 564 >> 2] = F;
 g[b + 568 >> 2] = -z;
 g[b + 572 >> 2] = 0.0;
 g[b + 576 >> 2] = H;
 g[b + 580 >> 2] = E;
 g[b + 584 >> 2] = -y;
 g[b + 588 >> 2] = 0.0;
 g[b + 592 >> 2] = J;
 g[b + 596 >> 2] = G;
 g[b + 600 >> 2] = -B;
 g[b + 604 >> 2] = 0.0;
 g[b + 608 >> 2] = -(C * J + (A * I + H * 2.5));
 g[b + 612 >> 2] = -(C * G + (A * F + E * 2.5));
 g[b + 616 >> 2] = C * B + (A * z + y * 2.5);
 c[b + 620 >> 2] = 1065353216;
 Pc(f, b + 624 | 0, b + 560 | 0);
 Pc(d, f, b + 688 | 0);
 f = b + 792 | 0;
 j = f + 64 | 0;
 do {
  c[f >> 2] = c[d >> 2];
  f = f + 4 | 0;
  d = d + 4 | 0;
 } while ((f | 0) < (j | 0));
 s = b + 768 | 0;
 l = (c[s >> 2] | 0) + 100 | 0;
 l = (l | 0) > 1048576 ? 1048576 : l;
 c[s >> 2] = l;
 j = c[k >> 2] | 0;
 o = ((l | 0) / 1024 | 0) + 1 | 0;
 p = b + 224 | 0;
 f = b + 296 | 0;
 d = b + 40 + (((j + 1 | 0) % 2 | 0) << 3) | 0;
 if ((f | 0) != (d | 0)) {
  k = d;
  m = c[k + 4 >> 2] | 0;
  n = f;
  c[n >> 2] = c[k >> 2];
  c[n + 4 >> 2] = m;
 }
 n = b + 780 | 0;
 g[b + 788 >> 2] = +(l | 0);
 m = b + 40 + (((j | 0) % 2 | 0) << 3) | 0;
 k = b + 864 | 0;
 l = c[8946] | 0;
 f = l + 116 | 0;
 c[f >> 2] = (c[f >> 2] | 0) + 1;
 f = (c[l + 1592 >> 2] | 0) + (e[m >> 1] | 0) | 0;
 j = c[l + 1584 >> 2] | 0;
 d = j + (f * 776 | 0) | 0;
 L = m;
 K = d;
 if ((c[L >> 2] | 0) == (c[K >> 2] | 0) ? (c[L + 4 >> 2] | 0) == (c[K + 4 >> 2] | 0) : 0) {
  if ((c[j + (f * 776 | 0) + 8 >> 2] | 0) != 3) q = 5;
 } else q = 5;
 if ((q | 0) == 5) d = 0;
 Kd(l + 416 | 0, d, k);
 d = c[8946] | 0;
 f = d + 124 | 0;
 c[f >> 2] = (c[f >> 2] | 0) + 1;
 f = d + 660 | 0;
 j = d + 664 | 0;
 if (!(c[f >> 2] | 0)) if (!(c[j >> 2] | 0)) if ((c[d + 668 >> 2] | 0) == 2048) {
  if ((c[d + 672 >> 2] | 0) != (o | 0)) q = 10;
 } else q = 10; else q = 10; else q = 10;
 if ((q | 0) == 10) {
  c[f >> 2] = 0;
  c[j >> 2] = 0;
  c[d + 668 >> 2] = 2048;
  c[d + 672 >> 2] = o;
  Tb(0, 0, 2048, o | 0);
 }
 dd(p);
 d = c[8946] | 0;
 L = d + 132 | 0;
 c[L >> 2] = (c[L >> 2] | 0) + 1;
 Md(c[d + 628 >> 2] | 0, 1, n);
 ed();
 d = b + 432 | 0;
 if ((d | 0) != (m | 0)) {
  q = m;
  K = c[q + 4 >> 2] | 0;
  L = d;
  c[L >> 2] = c[q >> 2];
  c[L + 4 >> 2] = K;
 }
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 c[r + 20 >> 2] = 0;
 g[r + 12 >> 2] = 1.0;
 g[r + 16 >> 2] = 1.0;
 a[r + 20 >> 0] = 0;
 a[r + 21 >> 0] = 3;
 l = c[8946] | 0;
 d = l + 116 | 0;
 c[d >> 2] = (c[d >> 2] | 0) + 1;
 Kd(l + 416 | 0, 0, r);
 dd(b + 392 | 0);
 l = c[8946] | 0;
 d = l + 132 | 0;
 c[d >> 2] = (c[d >> 2] | 0) + 1;
 Md(c[l + 628 >> 2] | 0, 0, b + 792 | 0);
 l = c[s >> 2] | 0;
 d = c[8946] | 0;
 f = d + 152 | 0;
 c[f >> 2] = (c[f >> 2] | 0) + 1;
 f = c[d + 628 >> 2] | 0;
 a : do if (f | 0) {
  j = c[d + 632 >> 2] | 0;
  if ((c[j + 296 >> 2] | 0) > 0) {
   k = j + 300 | 0;
   d = c[f + 604 >> 2] | 0;
   switch (c[j + 288 >> 2] | 0) {
   case 0:
    {
     if (!(a[36453] | 0)) break a;
     ib(d | 0, c[k >> 2] | 0, c[j + 304 >> 2] | 0, l | 0);
     break a;
    }
   case 2:
    {
     t = 5125;
     u = c[k >> 2] << 2;
     break;
    }
   case 1:
    {
     t = 5123;
     u = c[k >> 2] << 1;
     break;
    }
   default:
    {
     pe(21576, v);
     eb();
    }
   }
   if (a[36453] | 0) Ea(d | 0, c[j + 304 >> 2] | 0, t | 0, u | 0, l | 0);
  }
 } while (0);
 _d(c[8962] | 0);
 f = c[8946] | 0;
 a[f + 448 >> 0] = 0;
 c[f + 624 >> 2] = 0;
 c[f + 628 >> 2] = 0;
 c[f + 632 >> 2] = 0;
 j = f + 620 | 0;
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 f = f + 116 | 0;
 j = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (j | 0));
 J = +lb() * 1.0e3;
 u = ~~J >>> 0;
 v = +O(J) >= 1.0 ? (J > 0.0 ? ~~+aa(+N(J / 4294967296.0), 4294967295.0) >>> 0 : ~~+_((J - +(~~J >>> 0)) / 4294967296.0) >>> 0) : 0;
 K = b + 760 | 0;
 L = K;
 L = xf(u | 0, v | 0, c[L >> 2] | 0, c[L + 4 >> 2] | 0) | 0;
 c[K >> 2] = u;
 c[K + 4 >> 2] = v;
 c[w >> 2] = c[s >> 2];
 h[w + 8 >> 3] = (+(L >>> 0) + 4294967296.0 * +(D | 0)) / 1.0e3;
 Xd(0, w);
 i = x;
 return 4;
}

function zd(f, g, h) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 32 | 0;
 y = z + 16 | 0;
 w = z + 8 | 0;
 j = z;
 k = z + 24 | 0;
 l = g + 24 | 0;
 be(f, l, h);
 if ((c[f + 4 >> 2] | 0) != -1) {
  i = z;
  return;
 }
 n = g + 472 | 0;
 m = c[n >> 2] | 0;
 c[n >> 2] = m + 1;
 n = g + 512 | 0;
 t = c[n >> 2] | 0;
 r = b[(c[g + 504 >> 2] | 0) + (t << 1) >> 1] | 0;
 c[n >> 2] = t + 1;
 n = Df(e[g + 476 >> 1] | 0, 0, 16) | 0;
 m = m | D;
 n = n | r & 65535;
 t = f;
 c[t >> 2] = n;
 c[t + 4 >> 2] = m;
 t = j;
 c[t >> 2] = n;
 c[t + 4 >> 2] = m;
 c[k >> 2] = c[(c[g >> 2] | 0) + ((c[g + 12 >> 2] | 0) + -1 << 2) >> 2];
 $d(l, h, j, k);
 t = g + 488 | 0;
 r = (c[t >> 2] | 0) + (r & 65535) | 0;
 v = g + 480 | 0;
 s = c[v >> 2] | 0;
 j = s + (r * 608 | 0) | 0;
 c[s + (r * 608 | 0) + 8 >> 2] = 1;
 x = g + 468 | 0;
 c[s + (r * 608 | 0) + 12 >> 2] = c[x >> 2];
 if ((j | 0) != (f | 0)) {
  q = j;
  c[q >> 2] = n;
  c[q + 4 >> 2] = m;
 }
 j = s + (r * 608 | 0) + 16 | 0;
 k = (j | 0) == (h | 0);
 if (!k) {
  c[j >> 2] = 0;
  Be(j, h);
 }
 c[s + (r * 608 | 0) + 20 >> 2] = c[h + 4 >> 2];
 q = s + (r * 608 | 0) + 24 | 0;
 p = h + 8 | 0;
 c[q >> 2] = c[p >> 2];
 c[q + 4 >> 2] = c[p + 4 >> 2];
 c[q + 8 >> 2] = c[p + 8 >> 2];
 c[q + 12 >> 2] = c[p + 12 >> 2];
 c[q + 16 >> 2] = c[p + 16 >> 2];
 c[q + 20 >> 2] = c[p + 20 >> 2];
 c[q + 24 >> 2] = c[p + 24 >> 2];
 c[q + 28 >> 2] = c[p + 28 >> 2];
 b[q + 32 >> 1] = b[p + 32 >> 1] | 0;
 nd(s + (r * 608 | 0) + 58 | 0, h + 42 | 0);
 nd(s + (r * 608 | 0) + 126 | 0, h + 110 | 0);
 nd(s + (r * 608 | 0) + 194 | 0, h + 178 | 0);
 nd(s + (r * 608 | 0) + 262 | 0, h + 246 | 0);
 q = s + (r * 608 | 0) + 332 | 0;
 c[q >> 2] = c[h + 316 >> 2];
 if (k) {
  j = s + (r * 608 | 0) + 336 | 0;
  n = j;
  m = c[n >> 2] | 0;
  n = c[n + 4 >> 2] | 0;
  j = b[j >> 1] | 0;
 } else {
  n = h + 320 | 0;
  j = c[n >> 2] | 0;
  n = c[n + 4 >> 2] | 0;
  m = s + (r * 608 | 0) + 336 | 0;
  c[m >> 2] = j;
  c[m + 4 >> 2] = n;
  m = j;
  j = j & 65535;
 }
 l = c[g + 256 >> 2] | 0;
 k = (c[l + 24 >> 2] | 0) + (j & 65535) | 0;
 l = c[l + 16 >> 2] | 0;
 j = l + (k * 3712 | 0) | 0;
 p = j;
 if ((m | 0) == (c[p >> 2] | 0) ? (n | 0) == (c[p + 4 >> 2] | 0) : 0) {
  if ((c[l + (k * 3712 | 0) + 8 >> 2] | 0) != 3) o = 11;
 } else o = 11;
 if ((o | 0) == 11) j = 0;
 c[s + (r * 608 | 0) + 344 >> 2] = j;
 j = 0;
 k = 0;
 do {
  p = s + (r * 608 | 0) + 348 + (k << 4) | 0;
  j = j & -16777216;
  o = p;
  c[o >> 2] = 0;
  c[o + 4 >> 2] = j;
  c[s + (r * 608 | 0) + 348 + (k << 4) + 8 >> 2] = 0;
  c[s + (r * 608 | 0) + 348 + (k << 4) + 12 >> 2] = 0;
  a[p >> 0] = k;
  k = k + 1 | 0;
 } while ((k | 0) != 16);
 p = 0;
 do {
  j = a[s + (r * 608 | 0) + 58 + (p * 68 | 0) + 66 >> 0] | 0;
  if (j << 24 >> 24 > 0) {
   n = p & 255;
   h = s + (r * 608 | 0) + 58 + (p * 68 | 0) | 0;
   g = s + (r * 608 | 0) + 58 + (p * 68 | 0) + 67 | 0;
   o = s + (r * 608 | 0) + 58 + (p * 68 | 0) + 1 | 0;
   k = j << 24 >> 24;
   m = 0;
   do {
    l = d[s + (r * 608 | 0) + 58 + (p * 68 | 0) + 2 + (m << 1) >> 0] | 0;
    a[s + (r * 608 | 0) + 348 + (l << 4) + 1 >> 0] = 1;
    a[s + (r * 608 | 0) + 348 + (l << 4) + 2 >> 0] = n;
    if (!(a[h >> 0] | 0)) j = 0; else j = a[o >> 0] | 0;
    a[s + (r * 608 | 0) + 348 + (l << 4) + 3 >> 0] = j;
    a[s + (r * 608 | 0) + 348 + (l << 4) + 4 >> 0] = a[g >> 0] | 0;
    c[s + (r * 608 | 0) + 348 + (l << 4) + 8 >> 2] = d[s + (r * 608 | 0) + 58 + (p * 68 | 0) + 34 + m >> 0];
    j = s + (r * 608 | 0) + 58 + (p * 68 | 0) + 2 + (m << 1) + 1 | 0;
    a[s + (r * 608 | 0) + 348 + (l << 4) + 5 >> 0] = c[1280 + ((d[j >> 0] | 0) * 12 | 0) >> 2];
    c[s + (r * 608 | 0) + 348 + (l << 4) + 12 >> 2] = c[1280 + ((d[j >> 0] | 0) * 12 | 0) + 4 >> 2];
    a[s + (r * 608 | 0) + 348 + (l << 4) + 6 >> 0] = a[1280 + ((d[j >> 0] | 0) * 12 | 0) + 8 >> 0] | 0;
    m = m + 1 | 0;
   } while ((m | 0) != (k | 0));
  }
  p = p + 1 | 0;
 } while ((p | 0) != 4);
 j = c[q >> 2] | 0;
 switch (j | 0) {
 case 1:
 case 0:
  {
   u = j;
   break;
  }
 case 2:
  {
   u = 3;
   break;
  }
 case 3:
  {
   u = 4;
   break;
  }
 case 4:
  {
   u = 5;
   break;
  }
 default:
  {
   pe(19833, w);
   eb();
  }
 }
 c[s + (r * 608 | 0) + 604 >> 2] = u;
 l = c[f >> 2] | 0;
 m = l & 65535;
 k = (c[t >> 2] | 0) + m | 0;
 j = c[v >> 2] | 0;
 w = f;
 f = j + (k * 608 | 0) | 0;
 if ((c[w >> 2] | 0) == (c[f >> 2] | 0) ? (c[w + 4 >> 2] | 0) == (c[f + 4 >> 2] | 0) : 0) {
  c[j + (k * 608 | 0) + 8 >> 2] = 3;
  c[j + (k * 608 | 0) + 12 >> 2] = c[x >> 2];
  i = z;
  return;
 } else {
  c[y >> 2] = l >>> 16;
  c[y + 4 >> 2] = m;
  oe(19098, y);
  i = z;
  return;
 }
}

function ze(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 16 | 0;
 l = q;
 p = a + 60 | 0;
 e = c[p >> 2] | 0;
 if (!e) {
  j = 0;
  d = 0;
 } else {
  j = e + (c[a + 72 >> 2] << 2) | 0;
  d = e + (c[a + 68 >> 2] << 2) | 0;
 }
 k = d;
 h = d;
 d = j - k >> 2;
 a : while (1) {
  while (1) {
   if (!d) break a;
   f = (d | 0) / 2 | 0;
   g = h + (f << 2) | 0;
   if ((c[g >> 2] | 0) < (b | 0)) break; else d = f;
  }
  h = g + 4 | 0;
  d = d + -1 - f | 0;
 }
 if ((h | 0) != (j | 0)) if ((c[h >> 2] | 0) == (b | 0)) {
  pe(33096, l);
  eb();
 }
 n = h - k >> 2;
 l = a + 64 | 0;
 f = c[l >> 2] | 0;
 m = a + 72 | 0;
 h = c[m >> 2] | 0;
 o = a + 68 | 0;
 j = c[o >> 2] | 0;
 if ((f - h | 0) == (0 - j | 0)) {
  g = f >> 1;
  d = c[a + 76 >> 2] | 0;
  if ((g | 0) >= (d | 0)) {
   d = c[a + 80 >> 2] | 0;
   d = (g | 0) > (d | 0) ? d : g;
  }
  k = d + f | 0;
  if (!d) g = j; else {
   d = h - j | 0;
   e = bf(k << 2) | 0;
   f = c[p >> 2] | 0;
   if ((d | 0) > 0) {
    g = e;
    h = 0;
    j = f + (c[o >> 2] << 2) | 0;
    while (1) {
     c[g >> 2] = c[j >> 2];
     h = h + 1 | 0;
     if ((h | 0) == (d | 0)) break; else {
      g = g + 4 | 0;
      j = j + 4 | 0;
     }
    }
   }
   if (f | 0) cf(f);
   c[p >> 2] = e;
   c[l >> 2] = k;
   c[o >> 2] = 0;
   c[m >> 2] = d;
   h = d;
   g = 0;
   f = k;
  }
 } else g = j;
 d = h - g | 0;
 if ((d | 0) == (n | 0)) {
  if ((h | 0) < (f | 0)) {
   c[m >> 2] = h + 1;
   p = e + (h << 2) | 0;
   c[p >> 2] = b;
   i = q;
   return;
  }
  c[e + (g + -1 << 2) >> 2] = c[e + (g << 2) >> 2];
  d = c[o >> 2] | 0;
  f = n + -1 | 0;
  if ((d | 0) < (d + f | 0)) {
   g = c[p >> 2] | 0;
   do {
    e = d;
    d = d + 1 | 0;
    c[g + (e << 2) >> 2] = c[g + (d << 2) >> 2];
    e = c[o >> 2] | 0;
   } while ((d | 0) < (e + f | 0));
   d = e;
  }
  m = d + -1 | 0;
  c[o >> 2] = m;
  p = (c[p >> 2] | 0) + (m + n << 2) | 0;
  c[p >> 2] = b;
  i = q;
  return;
 }
 if (!n) {
  if ((g | 0) > 0) {
   p = g + -1 | 0;
   c[o >> 2] = p;
   p = e + (p << 2) | 0;
   c[p >> 2] = b;
   i = q;
   return;
  }
  c[e + (h << 2) >> 2] = c[e + (h + -1 << 2) >> 2];
  e = c[m >> 2] | 0;
  f = e + -1 | 0;
  d = c[o >> 2] | 0;
  if ((f | 0) > (d | 0)) {
   g = c[p >> 2] | 0;
   while (1) {
    c[g + (f << 2) >> 2] = c[g + (e + -2 << 2) >> 2];
    e = f + -1 | 0;
    d = c[o >> 2] | 0;
    if ((e | 0) > (d | 0)) {
     n = f;
     f = e;
     e = n;
    } else break;
   }
   e = c[m >> 2] | 0;
  }
  c[m >> 2] = e + 1;
  p = (c[p >> 2] | 0) + (d << 2) | 0;
  c[p >> 2] = b;
  i = q;
  return;
 }
 if ((d >> 1 | 0) > (n | 0)) {
  if ((g | 0) > 0) {
   c[e + (g + -1 << 2) >> 2] = c[e + (g << 2) >> 2];
   d = c[o >> 2] | 0;
   f = n + -1 | 0;
   if ((d | 0) < (d + f | 0)) {
    g = c[p >> 2] | 0;
    do {
     e = d;
     d = d + 1 | 0;
     c[g + (e << 2) >> 2] = c[g + (d << 2) >> 2];
     e = c[o >> 2] | 0;
    } while ((d | 0) < (e + f | 0));
    d = e;
   }
   m = d + -1 | 0;
   c[o >> 2] = m;
   p = (c[p >> 2] | 0) + (m + n << 2) | 0;
   c[p >> 2] = b;
   i = q;
   return;
  }
  c[e + (h << 2) >> 2] = c[e + (h + -1 << 2) >> 2];
  e = c[m >> 2] | 0;
  f = e + -1 | 0;
  d = c[o >> 2] | 0;
  if ((f | 0) > (d + n | 0)) {
   g = c[p >> 2] | 0;
   while (1) {
    c[g + (f << 2) >> 2] = c[g + (e + -2 << 2) >> 2];
    e = f + -1 | 0;
    d = c[o >> 2] | 0;
    if ((e | 0) > (d + n | 0)) {
     a = f;
     f = e;
     e = a;
    } else break;
   }
   e = c[m >> 2] | 0;
  }
  c[m >> 2] = e + 1;
  p = (c[p >> 2] | 0) + (d + n << 2) | 0;
  c[p >> 2] = b;
  i = q;
  return;
 } else {
  if ((h | 0) >= (f | 0)) {
   c[e + (g + -1 << 2) >> 2] = c[e + (g << 2) >> 2];
   d = c[o >> 2] | 0;
   f = n + -1 | 0;
   if ((d | 0) < (d + f | 0)) {
    g = c[p >> 2] | 0;
    do {
     e = d;
     d = d + 1 | 0;
     c[g + (e << 2) >> 2] = c[g + (d << 2) >> 2];
     e = c[o >> 2] | 0;
    } while ((d | 0) < (e + f | 0));
    d = e;
   }
   m = d + -1 | 0;
   c[o >> 2] = m;
   p = (c[p >> 2] | 0) + (m + n << 2) | 0;
   c[p >> 2] = b;
   i = q;
   return;
  }
  c[e + (h << 2) >> 2] = c[e + (h + -1 << 2) >> 2];
  e = c[m >> 2] | 0;
  f = e + -1 | 0;
  d = c[o >> 2] | 0;
  if ((f | 0) > (d + n | 0)) {
   g = c[p >> 2] | 0;
   while (1) {
    c[g + (f << 2) >> 2] = c[g + (e + -2 << 2) >> 2];
    e = f + -1 | 0;
    d = c[o >> 2] | 0;
    if ((e | 0) > (d + n | 0)) {
     a = f;
     f = e;
     e = a;
    } else break;
   }
   e = c[m >> 2] | 0;
  }
  c[m >> 2] = e + 1;
  p = (c[p >> 2] | 0) + (d + n << 2) | 0;
  c[p >> 2] = b;
  i = q;
  return;
 }
}

function Gd(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0;
 ba = b + 24 | 0;
 ba = d[ba >> 0] | d[ba + 1 >> 0] << 8;
 aa = b + 26 | 0;
 aa = d[aa >> 0] | d[aa + 1 >> 0] << 8;
 $ = b + 28 | 0;
 $ = d[$ >> 0] | d[$ + 1 >> 0] << 8;
 _ = b + 30 | 0;
 _ = d[_ >> 0] | d[_ + 1 >> 0] << 8;
 Z = b + 32 | 0;
 Z = d[Z >> 0] | d[Z + 1 >> 0] << 8;
 Y = b + 34 | 0;
 Y = d[Y >> 0] | d[Y + 1 >> 0] << 8;
 X = b + 36 | 0;
 X = d[X >> 0] | d[X + 1 >> 0] << 8;
 W = b + 38 | 0;
 W = d[W >> 0] | d[W + 1 >> 0] << 8;
 V = b + 40 | 0;
 V = d[V >> 0] | d[V + 1 >> 0] << 8;
 U = b + 42 | 0;
 U = d[U >> 0] | d[U + 1 >> 0] << 8;
 T = b + 44 | 0;
 T = d[T >> 0] | d[T + 1 >> 0] << 8;
 S = b + 46 | 0;
 S = d[S >> 0] | d[S + 1 >> 0] << 8;
 R = b + 48 | 0;
 R = d[R >> 0] | d[R + 1 >> 0] << 8;
 Q = b + 50 | 0;
 Q = d[Q >> 0] | d[Q + 1 >> 0] << 8;
 P = b + 52 | 0;
 P = d[P >> 0] | d[P + 1 >> 0] << 8;
 O = b + 54 | 0;
 O = d[O >> 0] | d[O + 1 >> 0] << 8;
 N = b + 56 | 0;
 N = d[N >> 0] | d[N + 1 >> 0] << 8;
 L = a[b + 58 >> 0] | 0;
 K = a[b + 59 >> 0] | 0;
 J = a[b + 60 >> 0] | 0;
 I = a[b + 61 >> 0] | 0;
 H = a[b + 62 >> 0] | 0;
 G = a[b + 63 >> 0] | 0;
 F = a[b + 64 >> 0] | 0;
 E = a[b + 65 >> 0] | 0;
 D = a[b + 66 >> 0] | 0;
 C = a[b + 67 >> 0] | 0;
 B = a[b + 68 >> 0] | 0;
 A = a[b + 69 >> 0] | 0;
 z = a[b + 70 >> 0] | 0;
 y = a[b + 71 >> 0] | 0;
 x = a[b + 72 >> 0] | 0;
 w = a[b + 73 >> 0] | 0;
 v = a[b + 74 >> 0] | 0;
 u = a[b + 75 >> 0] | 0;
 t = a[b + 76 >> 0] | 0;
 s = a[b + 77 >> 0] | 0;
 r = a[b + 78 >> 0] | 0;
 q = a[b + 79 >> 0] | 0;
 p = a[b + 80 >> 0] | 0;
 o = a[b + 81 >> 0] | 0;
 n = a[b + 82 >> 0] | 0;
 m = a[b + 83 >> 0] | 0;
 l = a[b + 84 >> 0] | 0;
 k = a[b + 85 >> 0] | 0;
 j = a[b + 86 >> 0] | 0;
 i = a[b + 87 >> 0] | 0;
 h = a[b + 88 >> 0] | 0;
 e = a[b + 89 >> 0] | 0;
 g = b + 90 | 0;
 g = d[g >> 0] | d[g + 1 >> 0] << 8;
 f = c[b + 16 >> 2] | 0;
 c[b + 208 >> 2] = c[b + 92 >> 2];
 M = b + 212 | 0;
 a[M >> 0] = ba;
 a[M + 1 >> 0] = ba >> 8;
 M = b + 214 | 0;
 a[M >> 0] = aa;
 a[M + 1 >> 0] = aa >> 8;
 M = b + 216 | 0;
 a[M >> 0] = $;
 a[M + 1 >> 0] = $ >> 8;
 M = b + 218 | 0;
 a[M >> 0] = _;
 a[M + 1 >> 0] = _ >> 8;
 M = b + 220 | 0;
 a[M >> 0] = Z;
 a[M + 1 >> 0] = Z >> 8;
 M = b + 222 | 0;
 a[M >> 0] = Y;
 a[M + 1 >> 0] = Y >> 8;
 M = b + 224 | 0;
 a[M >> 0] = X;
 a[M + 1 >> 0] = X >> 8;
 M = b + 226 | 0;
 a[M >> 0] = W;
 a[M + 1 >> 0] = W >> 8;
 M = b + 228 | 0;
 a[M >> 0] = V;
 a[M + 1 >> 0] = V >> 8;
 M = b + 230 | 0;
 a[M >> 0] = U;
 a[M + 1 >> 0] = U >> 8;
 M = b + 232 | 0;
 a[M >> 0] = T;
 a[M + 1 >> 0] = T >> 8;
 M = b + 234 | 0;
 a[M >> 0] = S;
 a[M + 1 >> 0] = S >> 8;
 M = b + 236 | 0;
 a[M >> 0] = R;
 a[M + 1 >> 0] = R >> 8;
 M = b + 238 | 0;
 a[M >> 0] = Q;
 a[M + 1 >> 0] = Q >> 8;
 M = b + 240 | 0;
 a[M >> 0] = P;
 a[M + 1 >> 0] = P >> 8;
 M = b + 242 | 0;
 a[M >> 0] = O;
 a[M + 1 >> 0] = O >> 8;
 M = b + 244 | 0;
 a[M >> 0] = N;
 a[M + 1 >> 0] = N >> 8;
 a[b + 246 >> 0] = L;
 a[b + 247 >> 0] = K;
 a[b + 248 >> 0] = J;
 a[b + 249 >> 0] = I;
 a[b + 250 >> 0] = H;
 a[b + 251 >> 0] = G;
 a[b + 252 >> 0] = F;
 a[b + 253 >> 0] = E;
 a[b + 254 >> 0] = D;
 a[b + 255 >> 0] = C;
 a[b + 256 >> 0] = B;
 a[b + 257 >> 0] = A;
 a[b + 258 >> 0] = z;
 a[b + 259 >> 0] = y;
 a[b + 260 >> 0] = x;
 a[b + 261 >> 0] = w;
 a[b + 262 >> 0] = v;
 a[b + 263 >> 0] = u;
 a[b + 264 >> 0] = t;
 a[b + 265 >> 0] = s;
 a[b + 266 >> 0] = r;
 a[b + 267 >> 0] = q;
 a[b + 268 >> 0] = p;
 a[b + 269 >> 0] = o;
 a[b + 270 >> 0] = n;
 a[b + 271 >> 0] = m;
 a[b + 272 >> 0] = l;
 a[b + 273 >> 0] = k;
 a[b + 274 >> 0] = j;
 a[b + 275 >> 0] = i;
 a[b + 276 >> 0] = h;
 a[b + 277 >> 0] = e;
 e = b + 278 | 0;
 a[e >> 0] = g;
 a[e + 1 >> 0] = g >> 8;
 c[b + 280 >> 2] = f;
 f = c[b + 100 >> 2] | 0;
 e = c[b + 20 >> 2] | 0;
 c[b + 284 >> 2] = c[b + 96 >> 2];
 c[b + 288 >> 2] = f;
 c[b + 292 >> 2] = e;
 return;
}

function hd(b, c) {
 b = b | 0;
 c = c | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 t = d[c >> 0] | d[c + 1 >> 0] << 8;
 a[b >> 0] = t;
 a[b + 1 >> 0] = t >> 8;
 t = b + 2 | 0;
 u = c + 2 | 0;
 a[t >> 0] = 17;
 a[b + 3 >> 0] = 13;
 s = b + 4 | 0;
 a[s >> 0] = 17;
 a[b + 5 >> 0] = 13;
 r = b + 6 | 0;
 a[r >> 0] = 17;
 a[b + 7 >> 0] = 13;
 q = b + 8 | 0;
 a[q >> 0] = 17;
 a[b + 9 >> 0] = 13;
 p = b + 10 | 0;
 a[p >> 0] = 17;
 a[b + 11 >> 0] = 13;
 o = b + 12 | 0;
 a[o >> 0] = 17;
 a[b + 13 >> 0] = 13;
 n = b + 14 | 0;
 a[n >> 0] = 17;
 a[b + 15 >> 0] = 13;
 m = b + 16 | 0;
 a[m >> 0] = 17;
 a[b + 17 >> 0] = 13;
 l = b + 18 | 0;
 a[l >> 0] = 17;
 a[b + 19 >> 0] = 13;
 k = b + 20 | 0;
 a[k >> 0] = 17;
 a[b + 21 >> 0] = 13;
 j = b + 22 | 0;
 a[j >> 0] = 17;
 a[b + 23 >> 0] = 13;
 i = b + 24 | 0;
 a[i >> 0] = 17;
 a[b + 25 >> 0] = 13;
 h = b + 26 | 0;
 a[h >> 0] = 17;
 a[b + 27 >> 0] = 13;
 g = b + 28 | 0;
 a[g >> 0] = 17;
 a[b + 29 >> 0] = 13;
 f = b + 30 | 0;
 a[f >> 0] = 17;
 a[b + 31 >> 0] = 13;
 e = b + 32 | 0;
 a[e >> 0] = 17;
 a[b + 33 >> 0] = 13;
 u = d[u >> 0] | d[u + 1 >> 0] << 8;
 a[t >> 0] = u;
 a[t + 1 >> 0] = u >> 8;
 t = c + 4 | 0;
 t = d[t >> 0] | d[t + 1 >> 0] << 8;
 a[s >> 0] = t;
 a[s + 1 >> 0] = t >> 8;
 s = c + 6 | 0;
 s = d[s >> 0] | d[s + 1 >> 0] << 8;
 a[r >> 0] = s;
 a[r + 1 >> 0] = s >> 8;
 r = c + 8 | 0;
 r = d[r >> 0] | d[r + 1 >> 0] << 8;
 a[q >> 0] = r;
 a[q + 1 >> 0] = r >> 8;
 q = c + 10 | 0;
 q = d[q >> 0] | d[q + 1 >> 0] << 8;
 a[p >> 0] = q;
 a[p + 1 >> 0] = q >> 8;
 p = c + 12 | 0;
 p = d[p >> 0] | d[p + 1 >> 0] << 8;
 a[o >> 0] = p;
 a[o + 1 >> 0] = p >> 8;
 o = c + 14 | 0;
 o = d[o >> 0] | d[o + 1 >> 0] << 8;
 a[n >> 0] = o;
 a[n + 1 >> 0] = o >> 8;
 n = c + 16 | 0;
 n = d[n >> 0] | d[n + 1 >> 0] << 8;
 a[m >> 0] = n;
 a[m + 1 >> 0] = n >> 8;
 m = c + 18 | 0;
 m = d[m >> 0] | d[m + 1 >> 0] << 8;
 a[l >> 0] = m;
 a[l + 1 >> 0] = m >> 8;
 l = c + 20 | 0;
 l = d[l >> 0] | d[l + 1 >> 0] << 8;
 a[k >> 0] = l;
 a[k + 1 >> 0] = l >> 8;
 k = c + 22 | 0;
 k = d[k >> 0] | d[k + 1 >> 0] << 8;
 a[j >> 0] = k;
 a[j + 1 >> 0] = k >> 8;
 j = c + 24 | 0;
 j = d[j >> 0] | d[j + 1 >> 0] << 8;
 a[i >> 0] = j;
 a[i + 1 >> 0] = j >> 8;
 i = c + 26 | 0;
 i = d[i >> 0] | d[i + 1 >> 0] << 8;
 a[h >> 0] = i;
 a[h + 1 >> 0] = i >> 8;
 h = c + 28 | 0;
 h = d[h >> 0] | d[h + 1 >> 0] << 8;
 a[g >> 0] = h;
 a[g + 1 >> 0] = h >> 8;
 g = c + 30 | 0;
 g = d[g >> 0] | d[g + 1 >> 0] << 8;
 a[f >> 0] = g;
 a[f + 1 >> 0] = g >> 8;
 f = c + 32 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 a[b + 34 >> 0] = a[c + 34 >> 0] | 0;
 a[b + 35 >> 0] = a[c + 35 >> 0] | 0;
 a[b + 36 >> 0] = a[c + 36 >> 0] | 0;
 a[b + 37 >> 0] = a[c + 37 >> 0] | 0;
 a[b + 38 >> 0] = a[c + 38 >> 0] | 0;
 a[b + 39 >> 0] = a[c + 39 >> 0] | 0;
 a[b + 40 >> 0] = a[c + 40 >> 0] | 0;
 a[b + 41 >> 0] = a[c + 41 >> 0] | 0;
 a[b + 42 >> 0] = a[c + 42 >> 0] | 0;
 a[b + 43 >> 0] = a[c + 43 >> 0] | 0;
 a[b + 44 >> 0] = a[c + 44 >> 0] | 0;
 a[b + 45 >> 0] = a[c + 45 >> 0] | 0;
 a[b + 46 >> 0] = a[c + 46 >> 0] | 0;
 a[b + 47 >> 0] = a[c + 47 >> 0] | 0;
 a[b + 48 >> 0] = a[c + 48 >> 0] | 0;
 a[b + 49 >> 0] = a[c + 49 >> 0] | 0;
 a[b + 50 >> 0] = a[c + 50 >> 0] | 0;
 a[b + 51 >> 0] = a[c + 51 >> 0] | 0;
 a[b + 52 >> 0] = a[c + 52 >> 0] | 0;
 a[b + 53 >> 0] = a[c + 53 >> 0] | 0;
 a[b + 54 >> 0] = a[c + 54 >> 0] | 0;
 a[b + 55 >> 0] = a[c + 55 >> 0] | 0;
 a[b + 56 >> 0] = a[c + 56 >> 0] | 0;
 a[b + 57 >> 0] = a[c + 57 >> 0] | 0;
 a[b + 58 >> 0] = a[c + 58 >> 0] | 0;
 a[b + 59 >> 0] = a[c + 59 >> 0] | 0;
 a[b + 60 >> 0] = a[c + 60 >> 0] | 0;
 a[b + 61 >> 0] = a[c + 61 >> 0] | 0;
 a[b + 62 >> 0] = a[c + 62 >> 0] | 0;
 a[b + 63 >> 0] = a[c + 63 >> 0] | 0;
 a[b + 64 >> 0] = a[c + 64 >> 0] | 0;
 a[b + 65 >> 0] = a[c + 65 >> 0] | 0;
 b = b + 66 | 0;
 c = c + 66 | 0;
 c = d[c >> 0] | d[c + 1 >> 0] << 8;
 a[b >> 0] = c;
 a[b + 1 >> 0] = c >> 8;
 return;
}

function Id(a) {
 a = a | 0;
 c[a + 3044 >> 2] = 0;
 c[a + 3032 >> 2] = 0;
 c[a + 3020 >> 2] = 0;
 c[a + 3008 >> 2] = 0;
 c[a + 2996 >> 2] = 0;
 c[a + 2984 >> 2] = 0;
 c[a + 2972 >> 2] = 0;
 c[a + 2960 >> 2] = 0;
 c[a + 2948 >> 2] = 0;
 c[a + 2936 >> 2] = 0;
 c[a + 2924 >> 2] = 0;
 c[a + 2912 >> 2] = 0;
 c[a + 2900 >> 2] = 0;
 c[a + 2888 >> 2] = 0;
 c[a + 2876 >> 2] = 0;
 c[a + 2864 >> 2] = 0;
 c[a + 2856 >> 2] = 0;
 c[a + 2840 >> 2] = 0;
 c[a + 2828 >> 2] = 0;
 c[a + 2816 >> 2] = 0;
 c[a + 2804 >> 2] = 0;
 c[a + 2792 >> 2] = 0;
 c[a + 2780 >> 2] = 0;
 c[a + 2768 >> 2] = 0;
 c[a + 2756 >> 2] = 0;
 c[a + 2744 >> 2] = 0;
 c[a + 2732 >> 2] = 0;
 c[a + 2720 >> 2] = 0;
 c[a + 2708 >> 2] = 0;
 c[a + 2696 >> 2] = 0;
 c[a + 2684 >> 2] = 0;
 c[a + 2672 >> 2] = 0;
 c[a + 2660 >> 2] = 0;
 c[a + 2652 >> 2] = 0;
 c[a + 2564 >> 2] = 0;
 c[a + 2552 >> 2] = 0;
 c[a + 2540 >> 2] = 0;
 c[a + 2528 >> 2] = 0;
 c[a + 2516 >> 2] = 0;
 c[a + 2504 >> 2] = 0;
 c[a + 2492 >> 2] = 0;
 c[a + 2480 >> 2] = 0;
 c[a + 2468 >> 2] = 0;
 c[a + 2456 >> 2] = 0;
 c[a + 2444 >> 2] = 0;
 c[a + 2432 >> 2] = 0;
 c[a + 2420 >> 2] = 0;
 c[a + 2408 >> 2] = 0;
 c[a + 2396 >> 2] = 0;
 c[a + 2384 >> 2] = 0;
 c[a + 2360 >> 2] = 0;
 c[a + 2276 >> 2] = 0;
 c[a + 2264 >> 2] = 0;
 c[a + 2252 >> 2] = 0;
 c[a + 2240 >> 2] = 0;
 c[a + 2228 >> 2] = 0;
 c[a + 2216 >> 2] = 0;
 c[a + 2204 >> 2] = 0;
 c[a + 2192 >> 2] = 0;
 c[a + 2180 >> 2] = 0;
 c[a + 2168 >> 2] = 0;
 c[a + 2156 >> 2] = 0;
 c[a + 2144 >> 2] = 0;
 c[a + 2132 >> 2] = 0;
 c[a + 2120 >> 2] = 0;
 c[a + 2108 >> 2] = 0;
 c[a + 2096 >> 2] = 0;
 c[a + 2072 >> 2] = 0;
 c[a + 1988 >> 2] = 0;
 c[a + 1976 >> 2] = 0;
 c[a + 1964 >> 2] = 0;
 c[a + 1952 >> 2] = 0;
 c[a + 1940 >> 2] = 0;
 c[a + 1928 >> 2] = 0;
 c[a + 1916 >> 2] = 0;
 c[a + 1904 >> 2] = 0;
 c[a + 1892 >> 2] = 0;
 c[a + 1880 >> 2] = 0;
 c[a + 1868 >> 2] = 0;
 c[a + 1856 >> 2] = 0;
 c[a + 1844 >> 2] = 0;
 c[a + 1832 >> 2] = 0;
 c[a + 1820 >> 2] = 0;
 c[a + 1808 >> 2] = 0;
 c[a + 1784 >> 2] = 0;
 c[a + 1700 >> 2] = 0;
 c[a + 1688 >> 2] = 0;
 c[a + 1676 >> 2] = 0;
 c[a + 1664 >> 2] = 0;
 c[a + 1652 >> 2] = 0;
 c[a + 1640 >> 2] = 0;
 c[a + 1628 >> 2] = 0;
 c[a + 1616 >> 2] = 0;
 c[a + 1604 >> 2] = 0;
 c[a + 1592 >> 2] = 0;
 c[a + 1580 >> 2] = 0;
 c[a + 1568 >> 2] = 0;
 c[a + 1556 >> 2] = 0;
 c[a + 1544 >> 2] = 0;
 c[a + 1532 >> 2] = 0;
 c[a + 1520 >> 2] = 0;
 c[a + 1496 >> 2] = 0;
 c[a + 1412 >> 2] = 0;
 c[a + 1400 >> 2] = 0;
 c[a + 1388 >> 2] = 0;
 c[a + 1376 >> 2] = 0;
 c[a + 1364 >> 2] = 0;
 c[a + 1352 >> 2] = 0;
 c[a + 1340 >> 2] = 0;
 c[a + 1328 >> 2] = 0;
 c[a + 1316 >> 2] = 0;
 c[a + 1304 >> 2] = 0;
 c[a + 1292 >> 2] = 0;
 c[a + 1280 >> 2] = 0;
 c[a + 1268 >> 2] = 0;
 c[a + 1256 >> 2] = 0;
 c[a + 1244 >> 2] = 0;
 c[a + 1232 >> 2] = 0;
 c[a + 1208 >> 2] = 0;
 c[a + 1124 >> 2] = 0;
 c[a + 1112 >> 2] = 0;
 c[a + 1100 >> 2] = 0;
 c[a + 1088 >> 2] = 0;
 c[a + 1076 >> 2] = 0;
 c[a + 1064 >> 2] = 0;
 c[a + 1052 >> 2] = 0;
 c[a + 1040 >> 2] = 0;
 c[a + 1028 >> 2] = 0;
 c[a + 1016 >> 2] = 0;
 c[a + 1004 >> 2] = 0;
 c[a + 992 >> 2] = 0;
 c[a + 980 >> 2] = 0;
 c[a + 968 >> 2] = 0;
 c[a + 956 >> 2] = 0;
 c[a + 944 >> 2] = 0;
 c[a + 920 >> 2] = 0;
 c[a + 836 >> 2] = 0;
 c[a + 824 >> 2] = 0;
 c[a + 812 >> 2] = 0;
 c[a + 800 >> 2] = 0;
 c[a + 788 >> 2] = 0;
 c[a + 776 >> 2] = 0;
 c[a + 764 >> 2] = 0;
 c[a + 752 >> 2] = 0;
 c[a + 740 >> 2] = 0;
 c[a + 728 >> 2] = 0;
 c[a + 716 >> 2] = 0;
 c[a + 704 >> 2] = 0;
 c[a + 692 >> 2] = 0;
 c[a + 680 >> 2] = 0;
 c[a + 668 >> 2] = 0;
 c[a + 656 >> 2] = 0;
 c[a + 632 >> 2] = 0;
 c[a + 548 >> 2] = 0;
 c[a + 536 >> 2] = 0;
 c[a + 524 >> 2] = 0;
 c[a + 512 >> 2] = 0;
 c[a + 500 >> 2] = 0;
 c[a + 488 >> 2] = 0;
 c[a + 476 >> 2] = 0;
 c[a + 464 >> 2] = 0;
 c[a + 452 >> 2] = 0;
 c[a + 440 >> 2] = 0;
 c[a + 428 >> 2] = 0;
 c[a + 416 >> 2] = 0;
 c[a + 404 >> 2] = 0;
 c[a + 392 >> 2] = 0;
 c[a + 380 >> 2] = 0;
 c[a + 368 >> 2] = 0;
 c[a + 344 >> 2] = 0;
 Sc(a + 32 | 0);
 c[a + 16 >> 2] = 0;
 return;
}

function se(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 d = c[a + 60 >> 2] | 0;
 t = a + 68 | 0;
 if (!d) {
  s = a + 72 | 0;
  t = c[t >> 2] | 0;
  c[s >> 2] = t;
  return;
 }
 e = c[t >> 2] | 0;
 b = a + 72 | 0;
 r = c[b >> 2] | 0;
 q = d + (r << 2) | 0;
 if ((e | 0) == (r | 0)) {
  s = b;
  t = c[t >> 2] | 0;
  c[s >> 2] = t;
  return;
 }
 r = a + 4 | 0;
 o = a + 32 | 0;
 m = a + 40 | 0;
 p = a + 44 | 0;
 n = a + 12 | 0;
 l = a + 16 | 0;
 k = d + (e << 2) | 0;
 do {
  j = c[k >> 2] | 0;
  i = c[r >> 2] | 0;
  h = (i | 0) == 0;
  if (h) {
   f = 0;
   a = 0;
  } else {
   f = i + ((c[l >> 2] | 0) * 40 | 0) | 0;
   a = i + ((c[n >> 2] | 0) * 40 | 0) | 0;
  }
  g = a;
  a = (f - a | 0) / 40 | 0;
  a : while (1) {
   while (1) {
    if (!a) break a;
    d = (a | 0) / 2 | 0;
    e = g + (d * 40 | 0) | 0;
    if ((c[e >> 2] | 0) < (j | 0)) break; else a = d;
   }
   g = e + 40 | 0;
   a = a + -1 - d | 0;
  }
  b : do if ((g | 0) == (f | 0)) s = 29; else if ((j | 0) < (c[g >> 2] | 0)) s = 29; else {
   if (h) {
    a = 0;
    d = 0;
   } else {
    a = i + ((c[l >> 2] | 0) * 40 | 0) | 0;
    d = i + ((c[n >> 2] | 0) * 40 | 0) | 0;
   }
   f = d;
   a = (a - d | 0) / 40 | 0;
   c : while (1) {
    while (1) {
     if (!a) break c;
     d = (a | 0) / 2 | 0;
     e = f + (d * 40 | 0) | 0;
     if ((c[e >> 2] | 0) < (j | 0)) break; else a = d;
    }
    f = e + 40 | 0;
    a = a + -1 - d | 0;
   }
   if (h) a = 0; else a = i + ((c[l >> 2] | 0) * 40 | 0) | 0;
   if ((f | 0) != (a | 0)) {
    a = c[n >> 2] | 0;
    d = (f - (h ? 0 : i + (a * 40 | 0) | 0) | 0) / 40 | 0;
    if ((d | 0) < ((c[l >> 2] | 0) - a | 0)) if ((c[i + ((a + d | 0) * 40 | 0) >> 2] | 0) == (j | 0)) do {
     te(r, d);
     a = c[n >> 2] | 0;
     if ((d | 0) >= ((c[l >> 2] | 0) - a | 0)) break b;
    } while ((c[(c[r >> 2] | 0) + ((a + d | 0) * 40 | 0) >> 2] | 0) == (j | 0));
   }
  } while (0);
  d : do if ((s | 0) == 29) {
   s = 0;
   i = c[o >> 2] | 0;
   h = (i | 0) == 0;
   if (h) {
    f = 0;
    a = 0;
   } else {
    f = i + ((c[p >> 2] | 0) * 40 | 0) | 0;
    a = i + ((c[m >> 2] | 0) * 40 | 0) | 0;
   }
   g = a;
   a = (f - a | 0) / 40 | 0;
   e : while (1) {
    while (1) {
     if (!a) break e;
     d = (a | 0) / 2 | 0;
     e = g + (d * 40 | 0) | 0;
     if ((c[e >> 2] | 0) < (j | 0)) break; else a = d;
    }
    g = e + 40 | 0;
    a = a + -1 - d | 0;
   }
   if ((g | 0) != (f | 0)) if ((j | 0) >= (c[g >> 2] | 0)) {
    if (h) {
     a = 0;
     d = 0;
    } else {
     a = i + ((c[p >> 2] | 0) * 40 | 0) | 0;
     d = i + ((c[m >> 2] | 0) * 40 | 0) | 0;
    }
    f = d;
    a = (a - d | 0) / 40 | 0;
    f : while (1) {
     while (1) {
      if (!a) break f;
      e = (a | 0) / 2 | 0;
      d = f + (e * 40 | 0) | 0;
      if ((c[d >> 2] | 0) < (j | 0)) break; else a = e;
     }
     f = d + 40 | 0;
     a = a + -1 - e | 0;
    }
    if (h) a = 0; else a = i + ((c[p >> 2] | 0) * 40 | 0) | 0;
    if ((f | 0) != (a | 0)) {
     a = c[m >> 2] | 0;
     d = (f - (h ? 0 : i + (a * 40 | 0) | 0) | 0) / 40 | 0;
     if ((d | 0) < ((c[p >> 2] | 0) - a | 0)) if ((c[i + ((a + d | 0) * 40 | 0) >> 2] | 0) == (j | 0)) do {
      te(o, d);
      a = c[m >> 2] | 0;
      if ((d | 0) >= ((c[p >> 2] | 0) - a | 0)) break d;
     } while ((c[(c[o >> 2] | 0) + ((a + d | 0) * 40 | 0) >> 2] | 0) == (j | 0));
    }
   }
  } while (0);
  k = k + 4 | 0;
 } while ((k | 0) != (q | 0));
 t = c[t >> 2] | 0;
 c[b >> 2] = t;
 return;
}

function gd(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 n = d + 4 | 0;
 if ((c[n >> 2] | 0) == (e | 0)) return;
 o = d + 12 | 0;
 p = d + 8 | 0;
 q = (c[o >> 2] | 0) - (c[p >> 2] | 0) | 0;
 r = bf(e * 400 | 0) | 0;
 if ((q | 0) > 0) {
  i = r;
  j = 0;
  k = (c[d >> 2] | 0) + ((c[p >> 2] | 0) * 400 | 0) | 0;
  while (1) {
   f = k;
   g = c[f + 4 >> 2] | 0;
   l = i;
   c[l >> 2] = c[f >> 2];
   c[l + 4 >> 2] = g;
   l = k + 8 | 0;
   g = c[l + 4 >> 2] | 0;
   f = i + 8 | 0;
   c[f >> 2] = c[l >> 2];
   c[f + 4 >> 2] = g;
   f = k + 16 | 0;
   g = c[f + 4 >> 2] | 0;
   l = i + 16 | 0;
   c[l >> 2] = c[f >> 2];
   c[l + 4 >> 2] = g;
   hd(i + 24 | 0, k + 24 | 0);
   l = i + 92 | 0;
   g = k + 92 | 0;
   c[l >> 2] = c[g >> 2];
   c[l + 4 >> 2] = c[g + 4 >> 2];
   c[l + 8 >> 2] = c[g + 8 >> 2];
   a[l + 12 >> 0] = a[g + 12 >> 0] | 0;
   Be(i + 108 | 0, k + 108 | 0);
   c[i + 112 >> 2] = c[k + 112 >> 2];
   l = k + 120 | 0;
   g = c[l + 4 >> 2] | 0;
   f = i + 120 | 0;
   c[f >> 2] = c[l >> 2];
   c[f + 4 >> 2] = g;
   f = i + 128 | 0;
   g = k + 128 | 0;
   l = f;
   h = g;
   m = l + 76 | 0;
   do {
    c[l >> 2] = c[h >> 2];
    l = l + 4 | 0;
    h = h + 4 | 0;
   } while ((l | 0) < (m | 0));
   a[f + 76 >> 0] = a[g + 76 >> 0] | 0;
   c[i + 208 >> 2] = c[k + 208 >> 2];
   hd(i + 212 | 0, k + 212 | 0);
   c[i + 280 >> 2] = c[k + 280 >> 2];
   f = i + 284 | 0;
   g = k + 284 | 0;
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = c[g + 4 >> 2];
   c[f + 8 >> 2] = c[g + 8 >> 2];
   c[f + 12 >> 2] = c[g + 12 >> 2];
   f = i + 300 | 0;
   g = k + 300 | 0;
   l = f;
   m = l + 64 | 0;
   do {
    c[l >> 2] = 0;
    l = l + 4 | 0;
   } while ((l | 0) < (m | 0));
   h = g;
   s = c[h + 4 >> 2] | 0;
   g = f;
   c[g >> 2] = c[h >> 2];
   c[g + 4 >> 2] = s;
   g = k + 308 | 0;
   s = c[g + 4 >> 2] | 0;
   f = i + 308 | 0;
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = s;
   f = k + 316 | 0;
   s = c[f + 4 >> 2] | 0;
   g = i + 316 | 0;
   c[g >> 2] = c[f >> 2];
   c[g + 4 >> 2] = s;
   g = k + 324 | 0;
   s = c[g + 4 >> 2] | 0;
   f = i + 324 | 0;
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = s;
   f = k + 332 | 0;
   s = c[f + 4 >> 2] | 0;
   g = i + 332 | 0;
   c[g >> 2] = c[f >> 2];
   c[g + 4 >> 2] = s;
   g = k + 340 | 0;
   s = c[g + 4 >> 2] | 0;
   f = i + 340 | 0;
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = s;
   f = k + 348 | 0;
   s = c[f + 4 >> 2] | 0;
   g = i + 348 | 0;
   c[g >> 2] = c[f >> 2];
   c[g + 4 >> 2] = s;
   g = k + 356 | 0;
   s = c[g + 4 >> 2] | 0;
   f = i + 356 | 0;
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = s;
   f = i + 364 | 0;
   s = k + 364 | 0;
   c[f >> 2] = -1;
   a[i + 368 >> 0] = 1;
   a[i + 369 >> 0] = 0;
   g = i + 372 | 0;
   c[g >> 2] = 0;
   h = i + 376 | 0;
   c[h >> 2] = 0;
   c[i + 380 >> 2] = -1;
   a[i + 384 >> 0] = 1;
   a[i + 385 >> 0] = 0;
   l = i + 388 | 0;
   c[l >> 2] = 0;
   m = i + 392 | 0;
   c[m >> 2] = 0;
   c[f >> 2] = c[s >> 2];
   b[f + 4 >> 1] = b[s + 4 >> 1] | 0;
   c[g >> 2] = c[k + 372 >> 2];
   c[h >> 2] = c[k + 376 >> 2];
   h = i + 380 | 0;
   i = i + 400 | 0;
   g = k + 380 | 0;
   c[h >> 2] = c[g >> 2];
   b[h + 4 >> 1] = b[g + 4 >> 1] | 0;
   c[l >> 2] = c[k + 388 >> 2];
   c[m >> 2] = c[k + 392 >> 2];
   c[k + 108 >> 2] = 0;
   j = j + 1 | 0;
   if ((j | 0) == (q | 0)) break; else k = k + 400 | 0;
  }
 }
 f = c[d >> 2] | 0;
 if (f | 0) cf(f);
 c[d >> 2] = r;
 c[n >> 2] = e;
 c[p >> 2] = 0;
 c[o >> 2] = q;
 return;
}

function Kd(f, h, j) {
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 r = i;
 i = i + 64 | 0;
 k = r;
 p = (h | 0) == 0;
 l = f + 36 | 0;
 if (p) {
  n = c[f + 8 >> 2] | 0;
  k = n + 116 | 0;
  m = l + 44 | 0;
  do {
   c[l >> 2] = c[k >> 2];
   l = l + 4 | 0;
   k = k + 4 | 0;
  } while ((l | 0) < (m | 0));
  m = f + 80 | 0;
  l = n + 160 | 0;
  if ((m | 0) != (l | 0)) {
   k = c[m >> 2] | 0;
   if (k | 0) {
    o = c[k >> 2] | 0;
    c[k >> 2] = o - 1;
    if ((o | 0) == 1) {
     cf(c[m >> 2] | 0);
     c[m >> 2] = 0;
     k = f + 84 | 0;
     c[k >> 2] = 0;
    } else k = f + 84 | 0;
    c[m >> 2] = 0;
    c[k >> 2] = 0;
   }
   k = c[l >> 2] | 0;
   c[m >> 2] = k;
   c[f + 84 >> 2] = c[n + 164 >> 2];
   if (k | 0) {
    o = k;
    c[o >> 2] = (c[o >> 2] | 0) + 1;
   }
  }
 } else {
  c[k >> 2] = 0;
  c[k + 4 >> 2] = 0;
  c[k + 8 >> 2] = 0;
  c[k + 12 >> 2] = 0;
  c[k + 16 >> 2] = 0;
  c[k + 20 >> 2] = 0;
  n = k + 44 | 0;
  c[n >> 2] = 0;
  o = k + 48 | 0;
  c[o >> 2] = 0;
  s = c[h + 728 >> 2] | 0;
  c[k >> 2] = s;
  m = c[h + 732 >> 2] | 0;
  c[k + 4 >> 2] = m;
  c[k + 8 >> 2] = 0;
  c[k + 12 >> 2] = 0;
  c[k + 16 >> 2] = s;
  c[k + 20 >> 2] = m;
  c[k + 24 >> 2] = c[h + 716 >> 2];
  c[k + 28 >> 2] = c[h + 720 >> 2];
  c[k + 32 >> 2] = 1;
  a[k + 36 >> 0] = 0;
  c[k + 40 >> 2] = 1;
  m = l + 44 | 0;
  do {
   c[l >> 2] = c[k >> 2];
   l = l + 4 | 0;
   k = k + 4 | 0;
  } while ((l | 0) < (m | 0));
  m = f + 80 | 0;
  if ((m | 0) != (n | 0)) {
   k = c[m >> 2] | 0;
   if (!k) {
    k = 0;
    l = 0;
   } else {
    s = c[k >> 2] | 0;
    c[k >> 2] = s - 1;
    if ((s | 0) == 1) {
     cf(c[m >> 2] | 0);
     c[m >> 2] = 0;
     k = f + 84 | 0;
     c[k >> 2] = 0;
    } else k = f + 84 | 0;
    c[m >> 2] = 0;
    c[k >> 2] = 0;
    k = c[n >> 2] | 0;
    l = c[o >> 2] | 0;
   }
   c[m >> 2] = k;
   c[f + 84 >> 2] = l;
   c[n >> 2] = 0;
   c[o >> 2] = 0;
  }
 }
 k = f + 208 | 0;
 do if ((c[k >> 2] | 0) != (h | 0)) if (p) {
  qb(36160, 0);
  break;
 } else {
  qb(36160, c[h + 752 >> 2] | 0);
  break;
 } while (0);
 c[k >> 2] = h;
 a[f + 32 >> 0] = 1;
 k = c[f + 52 >> 2] | 0;
 l = c[f + 56 >> 2] | 0;
 m = f + 276 | 0;
 n = f + 280 | 0;
 if (!(c[m >> 2] | 0)) if (!(c[n >> 2] | 0)) if ((c[f + 284 >> 2] | 0) == (k | 0)) {
  if ((c[f + 288 >> 2] | 0) != (l | 0)) q = 25;
 } else q = 25; else q = 25; else q = 25;
 if ((q | 0) == 25) {
  c[m >> 2] = 0;
  c[n >> 2] = 0;
  c[f + 284 >> 2] = k;
  c[f + 288 >> 2] = l;
  Xa(0, 0, k | 0, l | 0);
 }
 k = f + 240 | 0;
 l = b[k >> 1] | 0;
 if (l & 4) {
  b[k >> 1] = l & -5;
  oc(3089);
 }
 n = j + 21 | 0;
 if (!(a[n >> 0] & 1)) k = 0; else {
  Ab(+(+g[j >> 2]), +(+g[j + 4 >> 2]), +(+g[j + 8 >> 2]), +(+g[j + 12 >> 2]));
  l = f + 224 | 0;
  k = c[l >> 2] | 0;
  m = e[l + 4 >> 1] | 0;
  if ((k & 2013265920 | 0) == 2013265920 & 0 == 0) k = 16384; else {
   c[l >> 2] = k | 2013265920;
   b[l + 4 >> 1] = m;
   mc(1, 1, 1, 1);
   k = 16384;
  }
 }
 if (a[n >> 0] & 2) {
  k = k | 256;
  zb(+(+g[j + 16 >> 2]));
  l = f + 236 | 0;
  m = b[l >> 1] | 0;
  if (!(m & 32)) {
   b[l >> 1] = m | 32;
   Va(1);
  }
 }
 if (!(a[n >> 0] & 4)) {
  if (!k) {
   i = r;
   return;
  }
 } else {
  k = k | 1024;
  ma(d[j + 20 >> 0] | 0 | 0);
  l = f + 236 + 2 | 0;
  m = b[l >> 1] | 0;
  if ((m & 255) != 255) {
   b[l >> 1] = m | 255;
   sc(255);
  }
 }
 bc(k | 0);
 i = r;
 return;
}

function Nf(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (D = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (!h) {
  if (g) {
   if (f | 0) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (k >>> 0) / (h >>> 0) >>> 0;
   return (D = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (D = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((Gf(i | 0) | 0) >>> 0);
   return (D = n, f) | 0;
  }
  g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (D = n, f) | 0;
 } else {
  if (!g) {
   g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (ba(h | 0) | 0) + 33 - (ba(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f | 0) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (D = o, p) | 0;
  } else {
   p = Gf(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (D = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = yf(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   xf(k | 0, d | 0, e | 0, n | 0) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = xf(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = D;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f | 0) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (D = o, p) | 0;
}

function Vd(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0.0, m = 0.0, n = 0.0, o = 0.0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 if (!(a[b + 68 >> 0] | 0)) {
  l = +g[e + 88 >> 2];
  m = +g[e + 92 >> 2];
  n = +g[e + 96 >> 2];
  o = +g[e + 100 >> 2];
  e = e + 104 | 0;
  if ((c[e >> 2] | 0) <= 0) return;
  h = b + 256 | 0;
  i = b + 508 | 0;
  j = b + 263 | 0;
  k = 0;
  do {
   p = a[h >> 0] | 0;
   q = $(d[j >> 0] | 0, k + f | 0) | 0;
   Wd((c[i >> 2] | 0) + (q + (d[b + 230 + p >> 0] | 0)) | 0, a[b + 198 + (p << 1) + 1 >> 0] | 0, l, m, n, o) | 0;
   k = k + 1 | 0;
  } while ((k | 0) < (c[e >> 2] | 0));
  return;
 } else {
  e = e + 104 | 0;
  if ((c[e >> 2] | 0) <= 0) return;
  h = b + 256 | 0;
  i = b + 508 | 0;
  j = b + 263 | 0;
  k = 0;
  do {
   q = 35752;
   q = Kf(c[q >> 2] | 0, c[q + 4 >> 2] | 0, 1284865837, 1481765933) | 0;
   q = yf(q | 0, D | 0, 1, 0) | 0;
   B = D;
   y = Cf(q | 0, B | 0, 33) | 0;
   B = Kf(q | 0, B | 0, 1284865837, 1481765933) | 0;
   B = yf(B | 0, D | 0, 1, 0) | 0;
   q = D;
   u = Cf(B | 0, q | 0, 33) | 0;
   q = Kf(B | 0, q | 0, 1284865837, 1481765933) | 0;
   q = yf(q | 0, D | 0, 1, 0) | 0;
   B = D;
   p = Cf(q | 0, B | 0, 33) | 0;
   B = Kf(q | 0, B | 0, 1284865837, 1481765933) | 0;
   B = yf(B | 0, D | 0, 1, 0) | 0;
   q = D;
   z = Cf(B | 0, q | 0, 33) | 0;
   q = Kf(B | 0, q | 0, 1284865837, 1481765933) | 0;
   q = yf(q | 0, D | 0, 1, 0) | 0;
   B = D;
   v = Cf(q | 0, B | 0, 33) | 0;
   B = Kf(q | 0, B | 0, 1284865837, 1481765933) | 0;
   B = yf(B | 0, D | 0, 1, 0) | 0;
   q = D;
   r = Cf(B | 0, q | 0, 33) | 0;
   q = Kf(B | 0, q | 0, 1284865837, 1481765933) | 0;
   q = yf(q | 0, D | 0, 1, 0) | 0;
   B = D;
   A = Cf(q | 0, B | 0, 33) | 0;
   B = Kf(q | 0, B | 0, 1284865837, 1481765933) | 0;
   B = yf(B | 0, D | 0, 1, 0) | 0;
   q = D;
   w = Cf(B | 0, q | 0, 33) | 0;
   q = Kf(B | 0, q | 0, 1284865837, 1481765933) | 0;
   q = yf(q | 0, D | 0, 1, 0) | 0;
   B = D;
   s = Cf(q | 0, B | 0, 33) | 0;
   B = Kf(q | 0, B | 0, 1284865837, 1481765933) | 0;
   B = yf(B | 0, D | 0, 1, 0) | 0;
   q = D;
   x = Cf(B | 0, q | 0, 33) | 0;
   q = Kf(B | 0, q | 0, 1284865837, 1481765933) | 0;
   q = yf(q | 0, D | 0, 1, 0) | 0;
   B = D;
   t = Cf(q | 0, B | 0, 33) | 0;
   B = Kf(q | 0, B | 0, 1284865837, 1481765933) | 0;
   B = yf(B | 0, D | 0, 1, 0) | 0;
   q = D;
   C = 35752;
   c[C >> 2] = B;
   c[C + 4 >> 2] = q;
   q = Cf(B | 0, q | 0, 33) | 0;
   B = a[h >> 0] | 0;
   C = $(d[j >> 0] | 0, k + f | 0) | 0;
   Wd((c[i >> 2] | 0) + (C + (d[b + 230 + B >> 0] | 0)) | 0, a[b + 198 + (B << 1) + 1 >> 0] | 0, +(((((A & 255) % 255 | 0) & 255) << 8 | (((z & 255) % 255 | 0) & 255 | (((y & 255) % 255 | 0) & 255) << 8) << 16 | ((x & 255) % 255 | 0) & 255) >>> 0) * 2.3283064365386963e-10 + 0.0, +(((((w & 255) % 255 | 0) & 255) << 8 | (((v & 255) % 255 | 0) & 255 | (((u & 255) % 255 | 0) & 255) << 8) << 16 | ((t & 255) % 255 | 0) & 255) >>> 0) * 2.3283064365386963e-10 + 0.0, +(((((s & 255) % 255 | 0) & 255) << 8 | (((r & 255) % 255 | 0) & 255 | (((p & 255) % 255 | 0) & 255) << 8) << 16 | ((q & 255) % 255 | 0) & 255) >>> 0) * 2.3283064365386963e-10 + 0.0, 1.0) | 0;
   k = k + 1 | 0;
  } while ((k | 0) < (c[e >> 2] | 0));
  return;
 }
}

function nd(b, c) {
 b = b | 0;
 c = c | 0;
 var e = 0, f = 0;
 e = d[c >> 0] | d[c + 1 >> 0] << 8;
 a[b >> 0] = e;
 a[b + 1 >> 0] = e >> 8;
 e = b + 2 | 0;
 f = c + 2 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 4 | 0;
 f = c + 4 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 6 | 0;
 f = c + 6 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 8 | 0;
 f = c + 8 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 10 | 0;
 f = c + 10 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 12 | 0;
 f = c + 12 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 14 | 0;
 f = c + 14 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 16 | 0;
 f = c + 16 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 18 | 0;
 f = c + 18 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 20 | 0;
 f = c + 20 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 22 | 0;
 f = c + 22 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 24 | 0;
 f = c + 24 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 26 | 0;
 f = c + 26 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 28 | 0;
 f = c + 28 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 30 | 0;
 f = c + 30 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 e = b + 32 | 0;
 f = c + 32 | 0;
 f = d[f >> 0] | d[f + 1 >> 0] << 8;
 a[e >> 0] = f;
 a[e + 1 >> 0] = f >> 8;
 a[b + 34 >> 0] = a[c + 34 >> 0] | 0;
 a[b + 35 >> 0] = a[c + 35 >> 0] | 0;
 a[b + 36 >> 0] = a[c + 36 >> 0] | 0;
 a[b + 37 >> 0] = a[c + 37 >> 0] | 0;
 a[b + 38 >> 0] = a[c + 38 >> 0] | 0;
 a[b + 39 >> 0] = a[c + 39 >> 0] | 0;
 a[b + 40 >> 0] = a[c + 40 >> 0] | 0;
 a[b + 41 >> 0] = a[c + 41 >> 0] | 0;
 a[b + 42 >> 0] = a[c + 42 >> 0] | 0;
 a[b + 43 >> 0] = a[c + 43 >> 0] | 0;
 a[b + 44 >> 0] = a[c + 44 >> 0] | 0;
 a[b + 45 >> 0] = a[c + 45 >> 0] | 0;
 a[b + 46 >> 0] = a[c + 46 >> 0] | 0;
 a[b + 47 >> 0] = a[c + 47 >> 0] | 0;
 a[b + 48 >> 0] = a[c + 48 >> 0] | 0;
 a[b + 49 >> 0] = a[c + 49 >> 0] | 0;
 a[b + 50 >> 0] = a[c + 50 >> 0] | 0;
 a[b + 51 >> 0] = a[c + 51 >> 0] | 0;
 a[b + 52 >> 0] = a[c + 52 >> 0] | 0;
 a[b + 53 >> 0] = a[c + 53 >> 0] | 0;
 a[b + 54 >> 0] = a[c + 54 >> 0] | 0;
 a[b + 55 >> 0] = a[c + 55 >> 0] | 0;
 a[b + 56 >> 0] = a[c + 56 >> 0] | 0;
 a[b + 57 >> 0] = a[c + 57 >> 0] | 0;
 a[b + 58 >> 0] = a[c + 58 >> 0] | 0;
 a[b + 59 >> 0] = a[c + 59 >> 0] | 0;
 a[b + 60 >> 0] = a[c + 60 >> 0] | 0;
 a[b + 61 >> 0] = a[c + 61 >> 0] | 0;
 a[b + 62 >> 0] = a[c + 62 >> 0] | 0;
 a[b + 63 >> 0] = a[c + 63 >> 0] | 0;
 a[b + 64 >> 0] = a[c + 64 >> 0] | 0;
 a[b + 65 >> 0] = a[c + 65 >> 0] | 0;
 b = b + 66 | 0;
 c = c + 66 | 0;
 c = d[c >> 0] | d[c + 1 >> 0] << 8;
 a[b >> 0] = c;
 a[b + 1 >> 0] = c >> 8;
 return;
}

function je(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 32 | 0;
 o = r + 16 | 0;
 l = r + 8 | 0;
 k = r;
 q = r + 24 | 0;
 m = a + 8 | 0;
 j = c[m >> 2] | 0;
 n = a + 4 | 0;
 b = c[n >> 2] | 0;
 do if ((j | 0) == 9) p = 33; else if ((j | 0) == (b | 0)) {
  b = j;
  p = 33;
 } else {
  d = c[a + 12 >> 2] | 0;
  if (!d) {
   h = 0;
   d = 0;
  } else {
   h = d + (c[a + 24 >> 2] << 2) | 0;
   d = d + (c[a + 20 >> 2] << 2) | 0;
  }
  g = d;
  d = h - d >> 2;
  a : while (1) {
   while (1) {
    if (!d) break a;
    e = (d | 0) / 2 | 0;
    f = g + (e << 2) | 0;
    if ((c[f >> 2] | 0) < (j | 0)) break; else d = e;
   }
   g = f + 4 | 0;
   d = d + -1 - e | 0;
  }
  if ((g | 0) != (h | 0)) if ((j | 0) >= (c[g >> 2] | 0)) {
   if ((b | 0) == 7) break;
   switch (j | 0) {
   case 0:
    {
     b = 33086;
     break;
    }
   case 1:
    {
     b = 33071;
     break;
    }
   case 2:
    {
     b = 33060;
     break;
    }
   case 3:
    {
     b = 33055;
     break;
    }
   case 4:
    {
     b = 33047;
     break;
    }
   case 5:
    {
     b = 33039;
     break;
    }
   case 6:
    {
     b = 33031;
     break;
    }
   case 7:
    {
     b = 33023;
     break;
    }
   default:
    b = 33007;
   }
   c[k >> 2] = b;
   ne(32801, k);
   c[n >> 2] = 7;
   break;
  }
  switch (j | 0) {
  case 0:
   {
    b = 33086;
    break;
   }
  case 1:
   {
    b = 33071;
    break;
   }
  case 2:
   {
    b = 33060;
    break;
   }
  case 3:
   {
    b = 33055;
    break;
   }
  case 4:
   {
    b = 33047;
    break;
   }
  case 5:
   {
    b = 33039;
    break;
   }
  case 6:
   {
    b = 33031;
    break;
   }
  case 7:
   {
    b = 33023;
    break;
   }
  default:
   b = 33007;
  }
  c[l >> 2] = b;
  ne(32869, l);
  b = c[m >> 2] | 0;
  c[n >> 2] = b;
  c[m >> 2] = 9;
  p = 33;
 } while (0);
 if ((p | 0) == 33) if ((b | 0) != 7) {
  re(c[8964] | 0);
  switch (c[n >> 2] | 0) {
  case 0:
   {
    c[m >> 2] = Bc[c[c[a >> 2] >> 2] & 63](a) | 0;
    break;
   }
  case 1:
   {
    c[m >> 2] = Bc[c[(c[a >> 2] | 0) + 4 >> 2] & 63](a) | 0;
    break;
   }
  case 2:
   {
    c[m >> 2] = Bc[c[(c[a >> 2] | 0) + 8 >> 2] & 63](a) | 0;
    break;
   }
  case 3:
   {
    c[m >> 2] = Bc[c[(c[a >> 2] | 0) + 12 >> 2] & 63](a) | 0;
    break;
   }
  case 4:
   {
    c[m >> 2] = Bc[c[(c[a >> 2] | 0) + 16 >> 2] & 63](a) | 0;
    break;
   }
  case 5:
   {
    c[m >> 2] = Bc[c[(c[a >> 2] | 0) + 20 >> 2] & 63](a) | 0;
    break;
   }
  case 6:
   {
    c[m >> 2] = Bc[c[(c[a >> 2] | 0) + 24 >> 2] & 63](a) | 0;
    c[n >> 2] = 9;
    break;
   }
  case 7:
   {
    b = 33023;
    p = 49;
    break;
   }
  default:
   {
    b = 33007;
    p = 49;
   }
  }
  if ((p | 0) == 49) {
   c[o >> 2] = b;
   oe(32914, o);
  }
  re(c[8965] | 0);
  i = r;
  return;
 }
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 1e8;
 do {
  if ((bb(q | 0, q | 0) | 0) != -1) break;
  if (!(c[8975] | 0)) b = 35944; else b = c[(Ef() | 0) + 64 >> 2] | 0;
 } while ((c[b >> 2] | 0) == 4);
 i = r;
 return;
}

function df(a) {
 a = +a;
 var b = 0, d = 0, e = 0, f = 0, j = 0.0, l = 0.0;
 f = i;
 i = i + 16 | 0;
 d = f;
 b = (g[k >> 2] = a, c[k >> 2] | 0) >>> 31;
 j = +O(+a);
 e = (g[k >> 2] = j, c[k >> 2] | 0);
 if (e >>> 0 < 1061752795) {
  if (e >>> 0 < 964689920) {
   j = 1.0;
   i = f;
   return +j;
  }
  j = a;
  j = j * j;
  a = j * j;
  j = 1.0 - j * .499999997251031 + a * .04166662332373906 + j * a * (j * 2.439044879627741e-05 + -.001388676377460993);
  i = f;
  return +j;
 }
 if (e >>> 0 < 1081824210) {
  b = (b | 0) != 0;
  if (e >>> 0 > 1075235811) {
   j = a + (b ? 3.141592653589793 : -3.141592653589793);
   j = j * j;
   a = j * j;
   j = -(1.0 - j * .499999997251031 + a * .04166662332373906 + j * a * (j * 2.439044879627741e-05 + -.001388676377460993));
   i = f;
   return +j;
  }
  if (b) {
   j = a + 1.5707963267948966;
   a = j * j;
   l = a * j;
   j = l * (a * a) * (a * 2.718311493989822e-06 + -1.9839334836096632e-04) + (l * (a * .008333329385889463 + -.16666666641626524) + j);
   i = f;
   return +j;
  } else {
   l = 1.5707963267948966 - a;
   j = l * l;
   a = j * l;
   l = a * (j * j) * (j * 2.718311493989822e-06 + -1.9839334836096632e-04) + (a * (j * .008333329385889463 + -.16666666641626524) + l);
   i = f;
   return +l;
  }
 }
 if (e >>> 0 < 1088565718) {
  b = (b | 0) != 0;
  if (e >>> 0 > 1085271519) {
   l = a + (b ? 6.283185307179586 : -6.283185307179586);
   l = l * l;
   j = l * l;
   l = 1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993);
   i = f;
   return +l;
  }
  if (b) {
   l = -a + -4.71238898038469;
   j = l * l;
   a = j * l;
   l = a * (j * j) * (j * 2.718311493989822e-06 + -1.9839334836096632e-04) + (a * (j * .008333329385889463 + -.16666666641626524) + l);
   i = f;
   return +l;
  } else {
   l = a + -4.71238898038469;
   j = l * l;
   a = j * l;
   l = a * (j * j) * (j * 2.718311493989822e-06 + -1.9839334836096632e-04) + (a * (j * .008333329385889463 + -.16666666641626524) + l);
   i = f;
   return +l;
  }
 }
 if (e >>> 0 > 2139095039) {
  l = a - a;
  i = f;
  return +l;
 }
 switch ((_e(a, d) | 0) & 3 | 0) {
 case 0:
  {
   l = +h[d >> 3];
   l = l * l;
   j = l * l;
   l = 1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993);
   i = f;
   return +l;
  }
 case 1:
  {
   l = +h[d >> 3];
   a = l * l;
   j = -(l * a);
   l = a * a * j * (a * 2.718311493989822e-06 + -1.9839334836096632e-04) + ((a * .008333329385889463 + -.16666666641626524) * j - l);
   i = f;
   return +l;
  }
 case 2:
  {
   l = +h[d >> 3];
   l = l * l;
   j = l * l;
   l = -(1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993));
   i = f;
   return +l;
  }
 default:
  {
   l = +h[d >> 3];
   j = l * l;
   a = j * l;
   l = a * (j * j) * (j * 2.718311493989822e-06 + -1.9839334836096632e-04) + (a * (j * .008333329385889463 + -.16666666641626524) + l);
   i = f;
   return +l;
  }
 }
 return 0.0;
}

function td(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 a = c[a + 4 >> 2] | 0;
 k = a + 276 | 0;
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 k = a + 340 | 0;
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 k = a + 404 | 0;
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 k = a + 468 | 0;
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 k = a + 544 | 0;
 l = a + 540 | 0;
 b = c[l >> 2] | 0;
 d = (c[k >> 2] | 0) - b | 0;
 if ((d | 0) <= 0) return;
 j = a + 532 | 0;
 while (1) {
  i = d + -1 | 0;
  h = c[(c[j >> 2] | 0) + (i + b << 2) >> 2] | 0;
  do if ((Bc[c[(c[h >> 2] | 0) + 12 >> 2] & 63](h) | 0) != 2) {
   b = c[k >> 2] | 0;
   a = c[l >> 2] | 0;
   e = b - a | 0;
   if (!i) {
    c[l >> 2] = a + 1;
    a = (c[j >> 2] | 0) + (a << 2) | 0;
    b = c[a >> 2] | 0;
    if (!b) break;
    g = b + 4 | 0;
    h = c[g >> 2] | 0;
    c[g >> 2] = h - 1;
    if ((h | 0) == 1) zc[c[c[b >> 2] >> 2] & 63](b);
    c[a >> 2] = 0;
    break;
   }
   if ((e | 0) == (d | 0)) {
    a = b + -1 | 0;
    c[k >> 2] = a;
    a = (c[j >> 2] | 0) + (a << 2) | 0;
    b = c[a >> 2] | 0;
    if (!b) break;
    g = b + 4 | 0;
    h = c[g >> 2] | 0;
    c[g >> 2] = h - 1;
    if ((h | 0) == 1) zc[c[c[b >> 2] >> 2] & 63](b);
    c[a >> 2] = 0;
    break;
   }
   if ((e >> 1 | 0) < (d | 0)) {
    e = a + i | 0;
    a = b + -1 | 0;
    if ((e | 0) < (a | 0)) do {
     a = c[j >> 2] | 0;
     f = e;
     e = e + 1 | 0;
     g = a + (e << 2) | 0;
     h = c[g >> 2] | 0;
     f = a + (f << 2) | 0;
     a = c[f >> 2] | 0;
     if ((h | 0) != (a | 0)) {
      if (a) {
       m = a + 4 | 0;
       b = c[m >> 2] | 0;
       c[m >> 2] = b - 1;
       if ((b | 0) == 1) zc[c[c[a >> 2] >> 2] & 63](a);
       c[f >> 2] = 0;
       b = c[k >> 2] | 0;
      }
      c[f >> 2] = h;
      c[g >> 2] = 0;
     }
     a = b + -1 | 0;
    } while ((e | 0) < (a | 0));
    c[k >> 2] = a;
    a = (c[j >> 2] | 0) + (a << 2) | 0;
    b = c[a >> 2] | 0;
    if (!b) break;
    h = b + 4 | 0;
    m = c[h >> 2] | 0;
    c[h >> 2] = m - 1;
    if ((m | 0) == 1) zc[c[c[b >> 2] >> 2] & 63](b);
    c[a >> 2] = 0;
    break;
   }
   if ((d | 0) > 1) {
    b = a;
    h = a + i | 0;
    while (1) {
     a = c[j >> 2] | 0;
     g = h;
     h = h + -1 | 0;
     e = a + (h << 2) | 0;
     f = c[e >> 2] | 0;
     g = a + (g << 2) | 0;
     a = c[g >> 2] | 0;
     if ((f | 0) == (a | 0)) a = b; else {
      if (!a) a = b; else {
       b = a + 4 | 0;
       m = c[b >> 2] | 0;
       c[b >> 2] = m - 1;
       if ((m | 0) == 1) zc[c[c[a >> 2] >> 2] & 63](a);
       c[g >> 2] = 0;
       a = c[l >> 2] | 0;
      }
      c[g >> 2] = f;
      c[e >> 2] = 0;
     }
     if ((h | 0) <= (a | 0)) break; else b = a;
    }
   }
   c[l >> 2] = a + 1;
   a = (c[j >> 2] | 0) + (a << 2) | 0;
   b = c[a >> 2] | 0;
   if (b | 0) {
    h = b + 4 | 0;
    m = c[h >> 2] | 0;
    c[h >> 2] = m - 1;
    if ((m | 0) == 1) zc[c[c[b >> 2] >> 2] & 63](b);
    c[a >> 2] = 0;
   }
  } while (0);
  if ((d | 0) <= 1) break;
  b = c[l >> 2] | 0;
  d = i;
 }
 return;
}

function ef(a) {
 a = +a;
 var b = 0, d = 0, e = 0, f = 0, j = 0.0, l = 0.0;
 f = i;
 i = i + 16 | 0;
 d = f;
 b = (g[k >> 2] = a, c[k >> 2] | 0) >>> 31;
 j = +O(+a);
 e = (g[k >> 2] = j, c[k >> 2] | 0);
 if (e >>> 0 < 1061752795) {
  if (e >>> 0 < 964689920) {
   j = a;
   i = f;
   return +j;
  }
  j = a;
  a = j * j;
  l = a * j;
  j = l * (a * a) * (a * 2.718311493989822e-06 + -1.9839334836096632e-04) + (l * (a * .008333329385889463 + -.16666666641626524) + j);
  i = f;
  return +j;
 }
 if (e >>> 0 < 1081824210) {
  b = (b | 0) != 0;
  if (e >>> 0 >= 1075235812) {
   l = a + (b ? 3.141592653589793 : -3.141592653589793);
   a = l * l;
   j = -(l * a);
   l = a * a * j * (a * 2.718311493989822e-06 + -1.9839334836096632e-04) + ((a * .008333329385889463 + -.16666666641626524) * j - l);
   i = f;
   return +l;
  }
  if (b) {
   l = a + 1.5707963267948966;
   l = l * l;
   j = l * l;
   l = -(1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993));
   i = f;
   return +l;
  } else {
   l = a + -1.5707963267948966;
   l = l * l;
   j = l * l;
   l = 1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993);
   i = f;
   return +l;
  }
 }
 if (e >>> 0 < 1088565718) {
  b = (b | 0) != 0;
  if (e >>> 0 >= 1085271520) {
   l = a + (b ? 6.283185307179586 : -6.283185307179586);
   j = l * l;
   a = j * l;
   l = a * (j * j) * (j * 2.718311493989822e-06 + -1.9839334836096632e-04) + (a * (j * .008333329385889463 + -.16666666641626524) + l);
   i = f;
   return +l;
  }
  if (b) {
   l = a + 4.71238898038469;
   l = l * l;
   j = l * l;
   l = 1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993);
   i = f;
   return +l;
  } else {
   l = a + -4.71238898038469;
   l = l * l;
   j = l * l;
   l = -(1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993));
   i = f;
   return +l;
  }
 }
 if (e >>> 0 > 2139095039) {
  l = a - a;
  i = f;
  return +l;
 }
 switch ((_e(a, d) | 0) & 3 | 0) {
 case 0:
  {
   l = +h[d >> 3];
   j = l * l;
   a = j * l;
   l = a * (j * j) * (j * 2.718311493989822e-06 + -1.9839334836096632e-04) + (a * (j * .008333329385889463 + -.16666666641626524) + l);
   i = f;
   return +l;
  }
 case 1:
  {
   l = +h[d >> 3];
   l = l * l;
   j = l * l;
   l = 1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993);
   i = f;
   return +l;
  }
 case 2:
  {
   l = +h[d >> 3];
   a = l * l;
   j = -(l * a);
   l = a * a * j * (a * 2.718311493989822e-06 + -1.9839334836096632e-04) + ((a * .008333329385889463 + -.16666666641626524) * j - l);
   i = f;
   return +l;
  }
 default:
  {
   l = +h[d >> 3];
   l = l * l;
   j = l * l;
   l = -(1.0 - l * .499999997251031 + j * .04166662332373906 + l * j * (l * 2.439044879627741e-05 + -.001388676377460993));
   i = f;
   return +l;
  }
 }
 return 0.0;
}

function Ce(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 if ((f | 0) == -1) {
  h = d;
  a : do if (!(h & 3)) {
   f = d;
   n = 5;
  } else {
   f = d;
   g = h;
   while (1) {
    if (!(a[f >> 0] | 0)) {
     f = g;
     break a;
    }
    f = f + 1 | 0;
    g = f;
    if (!(g & 3)) {
     n = 5;
     break;
    }
   }
  } while (0);
  if ((n | 0) == 5) {
   while (1) {
    g = c[f >> 2] | 0;
    if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
   }
   if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
  }
  f = f - h | 0;
 }
 o = f - e | 0;
 if ((o | 0) <= 0) return;
 h = o + 1 | 0;
 p = b + 8 | 0;
 g = c[p >> 2] | 0;
 m = b + 4 | 0;
 i = c[m >> 2] | 0;
 if ((g + h | 0) < (i | 0)) {
  k = b;
  h = c[b >> 2] | 0;
 } else {
  l = i + ((h | 0) < 128 ? 128 : h) | 0;
  h = bf(l) | 0;
  g = c[b >> 2] | 0;
  if (!g) a[h >> 0] = 0; else {
   i = g;
   b : do if (!((i ^ h) & 3)) {
    if (!(i & 3)) i = h; else {
     i = h;
     do {
      k = a[g >> 0] | 0;
      a[i >> 0] = k;
      if (!(k << 24 >> 24)) break b;
      g = g + 1 | 0;
      i = i + 1 | 0;
     } while ((g & 3 | 0) != 0);
    }
    j = c[g >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) while (1) {
     g = g + 4 | 0;
     k = i + 4 | 0;
     c[i >> 2] = j;
     j = c[g >> 2] | 0;
     if ((j & -2139062144 ^ -2139062144) & j + -16843009 | 0) {
      i = k;
      break;
     } else i = k;
    }
    n = 22;
   } else {
    i = h;
    n = 22;
   } while (0);
   if ((n | 0) == 22) {
    k = a[g >> 0] | 0;
    a[i >> 0] = k;
    if (k << 24 >> 24) do {
     g = g + 1 | 0;
     i = i + 1 | 0;
     k = a[g >> 0] | 0;
     a[i >> 0] = k;
    } while (k << 24 >> 24 != 0);
   }
   cf(c[b >> 2] | 0);
   c[b >> 2] = 0;
  }
  c[b >> 2] = h;
  c[m >> 2] = l;
  k = b;
  g = c[p >> 2] | 0;
 }
 g = h + g | 0;
 h = d + e | 0;
 j = h;
 c : do if (!((j ^ g) & 3)) {
  i = (f | 0) != (e | 0);
  if (i & (j & 3 | 0) != 0) {
   f = o;
   do {
    e = a[h >> 0] | 0;
    a[g >> 0] = e;
    if (!(e << 24 >> 24)) break c;
    f = f + -1 | 0;
    h = h + 1 | 0;
    g = g + 1 | 0;
    i = (f | 0) != 0;
   } while (i & (h & 3 | 0) != 0);
  } else f = o;
  if (i) {
   if (a[h >> 0] | 0) {
    d : do if (f >>> 0 > 3) do {
     i = c[h >> 2] | 0;
     if ((i & -2139062144 ^ -2139062144) & i + -16843009 | 0) break d;
     c[g >> 2] = i;
     f = f + -4 | 0;
     h = h + 4 | 0;
     g = g + 4 | 0;
    } while (f >>> 0 > 3); while (0);
    n = 37;
   }
  } else f = 0;
 } else {
  f = o;
  n = 37;
 } while (0);
 e : do if ((n | 0) == 37) if (!f) f = 0; else while (1) {
  n = a[h >> 0] | 0;
  a[g >> 0] = n;
  if (!(n << 24 >> 24)) break e;
  f = f + -1 | 0;
  g = g + 1 | 0;
  if (!f) {
   f = 0;
   break;
  } else h = h + 1 | 0;
 } while (0);
 Bf(g | 0, 0, f | 0) | 0;
 o = (c[p >> 2] | 0) + o | 0;
 c[p >> 2] = o;
 a[(c[k >> 2] | 0) + o >> 0] = 0;
 return;
}

function te(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 m = b + 12 | 0;
 g = c[m >> 2] | 0;
 l = b + 8 | 0;
 e = c[l >> 2] | 0;
 f = g - e | 0;
 if (!d) {
  c[l >> 2] = e + 1;
  m = c[b >> 2] | 0;
  b = c[m + (e * 40 | 0) + 24 >> 2] | 0;
  if ((b | 0) == (m + (e * 40 | 0) + 8 | 0)) {
   zc[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b);
   return;
  }
  if (!b) return;
  zc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b);
  return;
 }
 if ((f + -1 | 0) == (d | 0)) {
  l = g + -1 | 0;
  c[m >> 2] = l;
  m = c[b >> 2] | 0;
  b = c[m + (l * 40 | 0) + 24 >> 2] | 0;
  if ((b | 0) == (m + (l * 40 | 0) + 8 | 0)) {
   zc[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b);
   return;
  }
  if (!b) return;
  zc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b);
  return;
 }
 if ((f >> 1 | 0) <= (d | 0)) {
  f = e + d | 0;
  e = g + -1 | 0;
  if ((f | 0) < (e | 0)) do {
   j = c[b >> 2] | 0;
   k = f;
   f = f + 1 | 0;
   c[j + (k * 40 | 0) >> 2] = c[j + (f * 40 | 0) >> 2];
   g = j + (k * 40 | 0) + 8 | 0;
   h = j + (f * 40 | 0) + 8 | 0;
   i = j + (k * 40 | 0) + 24 | 0;
   e = c[i >> 2] | 0;
   if ((e | 0) == (g | 0)) zc[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e); else if (e | 0) zc[c[(c[e >> 2] | 0) + 20 >> 2] & 63](e);
   c[i >> 2] = 0;
   e = j + (f * 40 | 0) + 24 | 0;
   d = c[e >> 2] | 0;
   do if (!d) c[i >> 2] = 0; else if ((d | 0) == (h | 0)) {
    c[i >> 2] = g;
    Ac[c[(c[d >> 2] | 0) + 12 >> 2] & 31](d, g);
    break;
   } else {
    c[i >> 2] = d;
    c[e >> 2] = 0;
    break;
   } while (0);
   a[j + (k * 40 | 0) + 32 >> 0] = a[j + (f * 40 | 0) + 32 >> 0] | 0;
   e = (c[m >> 2] | 0) + -1 | 0;
  } while ((f | 0) < (e | 0));
  c[m >> 2] = e;
  m = c[b >> 2] | 0;
  b = c[m + (e * 40 | 0) + 24 >> 2] | 0;
  if ((b | 0) == (m + (e * 40 | 0) + 8 | 0)) {
   zc[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b);
   return;
  }
  if (!b) return;
  zc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b);
  return;
 }
 if ((d | 0) > 0) {
  k = e + d | 0;
  do {
   d = c[b >> 2] | 0;
   j = k;
   k = k + -1 | 0;
   c[d + (j * 40 | 0) >> 2] = c[d + (k * 40 | 0) >> 2];
   g = d + (j * 40 | 0) + 8 | 0;
   h = d + (k * 40 | 0) + 8 | 0;
   i = d + (j * 40 | 0) + 24 | 0;
   e = c[i >> 2] | 0;
   if ((e | 0) == (g | 0)) zc[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e); else if (e | 0) zc[c[(c[e >> 2] | 0) + 20 >> 2] & 63](e);
   c[i >> 2] = 0;
   e = d + (k * 40 | 0) + 24 | 0;
   f = c[e >> 2] | 0;
   do if (!f) c[i >> 2] = 0; else if ((f | 0) == (h | 0)) {
    c[i >> 2] = g;
    Ac[c[(c[f >> 2] | 0) + 12 >> 2] & 31](f, g);
    break;
   } else {
    c[i >> 2] = f;
    c[e >> 2] = 0;
    break;
   } while (0);
   a[d + (j * 40 | 0) + 32 >> 0] = a[d + (k * 40 | 0) + 32 >> 0] | 0;
   e = c[l >> 2] | 0;
  } while ((k | 0) > (e | 0));
 }
 c[l >> 2] = e + 1;
 m = c[b >> 2] | 0;
 b = c[m + (e * 40 | 0) + 24 >> 2] | 0;
 if ((b | 0) == (m + (e * 40 | 0) + 8 | 0)) {
  zc[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b);
  return;
 }
 if (!b) return;
 zc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b);
 return;
}

function Wd(c, d, e, f, h, i) {
 c = c | 0;
 d = d | 0;
 e = +e;
 f = +f;
 h = +h;
 i = +i;
 var j = 0.0, k = 0.0, l = 0.0;
 switch (d << 24 >> 24) {
 case 3:
  {
   g[c >> 2] = e;
   g[c + 4 >> 2] = f;
   g[c + 8 >> 2] = h;
   g[c + 12 >> 2] = i;
   d = c + 16 | 0;
   return d | 0;
  }
 case 4:
  {
   j = e > -128.0 ? e : -128.0;
   e = f > -128.0 ? f : -128.0;
   f = h > -128.0 ? h : -128.0;
   h = i > -128.0 ? i : -128.0;
   a[c >> 0] = ~~(j < 127.0 ? j : 127.0);
   a[c + 1 >> 0] = ~~(e < 127.0 ? e : 127.0);
   a[c + 2 >> 0] = ~~(f < 127.0 ? f : 127.0);
   a[c + 3 >> 0] = ~~(h < 127.0 ? h : 127.0);
   d = c + 4 | 0;
   return d | 0;
  }
 case 5:
  {
   l = e > -1.0 ? e : -1.0;
   k = f > -1.0 ? f : -1.0;
   j = h > -1.0 ? h : -1.0;
   e = i > -1.0 ? i : -1.0;
   f = +zf(+((l < 1.0 ? l : 1.0) * 127.0));
   h = +zf(+((k < 1.0 ? k : 1.0) * 127.0));
   j = +zf(+((j < 1.0 ? j : 1.0) * 127.0));
   d = ~~+zf(+((e < 1.0 ? e : 1.0) * 127.0));
   a[c >> 0] = ~~f;
   a[c + 1 >> 0] = ~~h;
   a[c + 2 >> 0] = ~~j;
   a[c + 3 >> 0] = d;
   d = c + 4 | 0;
   return d | 0;
  }
 case 6:
  {
   e = e > 0.0 ? e : 0.0;
   j = f > 0.0 ? f : 0.0;
   k = h > 0.0 ? h : 0.0;
   l = i > 0.0 ? i : 0.0;
   a[c >> 0] = ~~(e < 255.0 ? e : 255.0);
   a[c + 1 >> 0] = ~~(j < 255.0 ? j : 255.0);
   a[c + 2 >> 0] = ~~(k < 255.0 ? k : 255.0);
   a[c + 3 >> 0] = ~~(l < 255.0 ? l : 255.0);
   d = c + 4 | 0;
   return d | 0;
  }
 case 7:
  {
   j = e > 0.0 ? e : 0.0;
   k = f > 0.0 ? f : 0.0;
   l = h > 0.0 ? h : 0.0;
   h = i > 0.0 ? i : 0.0;
   j = +zf(+((j < 1.0 ? j : 1.0) * 255.0));
   k = +zf(+((k < 1.0 ? k : 1.0) * 255.0));
   l = +zf(+((l < 1.0 ? l : 1.0) * 255.0));
   d = ~~+zf(+((h < 1.0 ? h : 1.0) * 255.0)) & 255;
   a[c >> 0] = ~~j;
   a[c + 1 >> 0] = ~~k;
   a[c + 2 >> 0] = ~~l;
   a[c + 3 >> 0] = d;
   d = c + 4 | 0;
   return d | 0;
  }
 case 10:
  {
   e = e > -32768.0 ? e : -32768.0;
   j = f > -32768.0 ? f : -32768.0;
   k = h > -32768.0 ? h : -32768.0;
   l = i > -32768.0 ? i : -32768.0;
   b[c >> 1] = ~~(e < 32767.0 ? e : 32767.0);
   b[c + 2 >> 1] = ~~(j < 32767.0 ? j : 32767.0);
   b[c + 4 >> 1] = ~~(k < 32767.0 ? k : 32767.0);
   b[c + 6 >> 1] = ~~(l < 32767.0 ? l : 32767.0);
   d = c + 8 | 0;
   return d | 0;
  }
 case 11:
  {
   j = e > -1.0 ? e : -1.0;
   k = f > -1.0 ? f : -1.0;
   l = h > -1.0 ? h : -1.0;
   h = i > -1.0 ? i : -1.0;
   j = +zf(+((j < 1.0 ? j : 1.0) * 32767.0));
   k = +zf(+((k < 1.0 ? k : 1.0) * 32767.0));
   l = +zf(+((l < 1.0 ? l : 1.0) * 32767.0));
   d = ~~+zf(+((h < 1.0 ? h : 1.0) * 32767.0));
   b[c >> 1] = ~~j;
   b[c + 2 >> 1] = ~~k;
   b[c + 4 >> 1] = ~~l;
   b[c + 6 >> 1] = d;
   d = c + 8 | 0;
   return d | 0;
  }
 default:
  {
   d = 0;
   return d | 0;
  }
 }
 return 0;
}

function kd(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = d + 4 | 0;
 if ((c[l >> 2] | 0) == (e | 0)) return;
 m = d + 12 | 0;
 n = d + 8 | 0;
 o = (c[m >> 2] | 0) - (c[n >> 2] | 0) | 0;
 p = bf(e * 776 | 0) | 0;
 if ((o | 0) > 0) {
  f = p;
  g = 0;
  h = (c[d >> 2] | 0) + ((c[n >> 2] | 0) * 776 | 0) | 0;
  while (1) {
   i = h;
   j = c[i + 4 >> 2] | 0;
   k = f;
   c[k >> 2] = c[i >> 2];
   c[k + 4 >> 2] = j;
   k = h + 8 | 0;
   j = c[k + 4 >> 2] | 0;
   i = f + 8 | 0;
   c[i >> 2] = c[k >> 2];
   c[i + 4 >> 2] = j;
   i = f + 16 | 0;
   j = h + 16 | 0;
   k = i + 36 | 0;
   do {
    c[i >> 2] = c[j >> 2];
    i = i + 4 | 0;
    j = j + 4 | 0;
   } while ((i | 0) < (k | 0));
   k = h + 56 | 0;
   j = c[k + 4 >> 2] | 0;
   i = f + 56 | 0;
   c[i >> 2] = c[k >> 2];
   c[i + 4 >> 2] = j;
   i = f + 64 | 0;
   j = h + 64 | 0;
   c[i >> 2] = c[j >> 2];
   c[i + 4 >> 2] = c[j + 4 >> 2];
   c[i + 8 >> 2] = c[j + 8 >> 2];
   c[i + 12 >> 2] = c[j + 12 >> 2];
   c[i + 16 >> 2] = c[j + 16 >> 2];
   c[i + 20 >> 2] = c[j + 20 >> 2];
   c[i + 24 >> 2] = c[j + 24 >> 2];
   Be(f + 92 | 0, h + 92 | 0);
   c[f + 96 >> 2] = c[h + 96 >> 2];
   i = h + 104 | 0;
   j = c[i + 4 >> 2] | 0;
   k = f + 104 | 0;
   c[k >> 2] = c[i >> 2];
   c[k + 4 >> 2] = j;
   ld(f + 112 | 0, h + 112 | 0);
   a[f + 696 >> 0] = a[h + 696 >> 0] | 0;
   Be(f + 704 | 0, h + 704 | 0);
   c[f + 708 >> 2] = c[h + 708 >> 2];
   k = f + 712 | 0;
   j = h + 712 | 0;
   c[k >> 2] = c[j >> 2];
   c[k + 4 >> 2] = c[j + 4 >> 2];
   c[k + 8 >> 2] = c[j + 8 >> 2];
   c[k + 12 >> 2] = c[j + 12 >> 2];
   c[k + 16 >> 2] = c[j + 16 >> 2];
   c[k + 20 >> 2] = c[j + 20 >> 2];
   c[k + 24 >> 2] = c[j + 24 >> 2];
   c[k + 28 >> 2] = c[j + 28 >> 2];
   b[k + 32 >> 1] = b[j + 32 >> 1] | 0;
   a[k + 34 >> 0] = a[j + 34 >> 0] | 0;
   k = f + 748 | 0;
   j = h + 748 | 0;
   c[k >> 2] = c[j >> 2];
   c[k + 4 >> 2] = c[j + 4 >> 2];
   c[k + 8 >> 2] = c[j + 8 >> 2];
   c[k + 12 >> 2] = c[j + 12 >> 2];
   b[k + 16 >> 1] = b[j + 16 >> 1] | 0;
   c[f + 768 >> 2] = c[h + 768 >> 2];
   c[f + 772 >> 2] = c[h + 772 >> 2];
   f = f + 776 | 0;
   c[h + 704 >> 2] = 0;
   c[h + 92 >> 2] = 0;
   g = g + 1 | 0;
   if ((g | 0) == (o | 0)) break; else h = h + 776 | 0;
  }
 }
 f = c[d >> 2] | 0;
 if (f | 0) cf(f);
 c[d >> 2] = p;
 c[l >> 2] = e;
 c[n >> 2] = 0;
 c[m >> 2] = o;
 return;
}

function Yd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 c[b >> 2] = 1065353216;
 c[b + 4 >> 2] = 1065353216;
 a[b + 10 >> 0] = 17;
 a[b + 11 >> 0] = 13;
 a[b + 12 >> 0] = 17;
 a[b + 13 >> 0] = 13;
 a[b + 14 >> 0] = 17;
 a[b + 15 >> 0] = 13;
 a[b + 16 >> 0] = 17;
 a[b + 17 >> 0] = 13;
 a[b + 18 >> 0] = 17;
 a[b + 19 >> 0] = 13;
 a[b + 20 >> 0] = 17;
 a[b + 21 >> 0] = 13;
 a[b + 22 >> 0] = 17;
 a[b + 23 >> 0] = 13;
 a[b + 24 >> 0] = 17;
 a[b + 25 >> 0] = 13;
 a[b + 26 >> 0] = 17;
 a[b + 27 >> 0] = 13;
 a[b + 28 >> 0] = 17;
 a[b + 29 >> 0] = 13;
 a[b + 30 >> 0] = 17;
 a[b + 31 >> 0] = 13;
 a[b + 32 >> 0] = 17;
 a[b + 33 >> 0] = 13;
 a[b + 34 >> 0] = 17;
 a[b + 35 >> 0] = 13;
 a[b + 36 >> 0] = 17;
 a[b + 37 >> 0] = 13;
 a[b + 38 >> 0] = 17;
 a[b + 39 >> 0] = 13;
 a[b + 40 >> 0] = 17;
 a[b + 41 >> 0] = 13;
 a[b + 8 >> 0] = 0;
 a[b + 9 >> 0] = 1;
 a[b + 74 >> 0] = 0;
 a[b + 75 >> 0] = 0;
 d = b + 42 | 0;
 e = b + 58 | 0;
 f = e + 16 | 0;
 do {
  a[e >> 0] = 255;
  e = e + 1 | 0;
 } while ((e | 0) < (f | 0));
 e = d;
 f = e + 16 | 0;
 do {
  a[e >> 0] = 0;
  e = e + 1 | 0;
 } while ((e | 0) < (f | 0));
 a[b + 76 >> 0] = 0;
 c[b + 80 >> 2] = 0;
 Bf(b + 88 | 0, -1, 168) | 0;
 i = b + 256 | 0;
 j = b + 260 | 0;
 c[i >> 2] = 0;
 c[i + 4 >> 2] = 0;
 c[i + 8 >> 2] = 0;
 a[i + 12 >> 0] = 0;
 c[b + 272 >> 2] = -1;
 h = bf(19201) | 0;
 d = c[i >> 2] | 0;
 if (!d) {
  a[h >> 0] = 0;
  c[i >> 2] = h;
  c[j >> 2] = 19201;
  return;
 }
 e = d;
 a : do if (!((e ^ h) & 3)) {
  if (!(e & 3)) e = h; else {
   e = h;
   do {
    b = a[d >> 0] | 0;
    a[e >> 0] = b;
    if (!(b << 24 >> 24)) break a;
    d = d + 1 | 0;
    e = e + 1 | 0;
   } while ((d & 3 | 0) != 0);
  }
  f = c[d >> 2] | 0;
  if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) while (1) {
   d = d + 4 | 0;
   b = e + 4 | 0;
   c[e >> 2] = f;
   f = c[d >> 2] | 0;
   if ((f & -2139062144 ^ -2139062144) & f + -16843009 | 0) {
    e = b;
    break;
   } else e = b;
  }
  g = 9;
 } else {
  e = h;
  g = 9;
 } while (0);
 if ((g | 0) == 9) {
  g = a[d >> 0] | 0;
  a[e >> 0] = g;
  if (g << 24 >> 24) do {
   d = d + 1 | 0;
   e = e + 1 | 0;
   g = a[d >> 0] | 0;
   a[e >> 0] = g;
  } while (g << 24 >> 24 != 0);
 }
 cf(c[i >> 2] | 0);
 c[i >> 2] = 0;
 c[i >> 2] = h;
 c[j >> 2] = 19201;
 return;
}

function Zd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 112 | 0;
 n = q;
 p = b + 76 | 0;
 do {
  o = a[p >> 0] | 0;
  a[p >> 0] = 1;
 } while ((o & 1) != 0);
 f = b + 80 | 0;
 do {} while ((c[f >> 2] | 0) > 0);
 m = b + 256 | 0;
 o = b + 264 | 0;
 f = c[o >> 2] | 0;
 l = b + 260 | 0;
 b = c[l >> 2] | 0;
 if ((f + 1025 | 0) < (b | 0)) {
  j = m;
  b = c[m >> 2] | 0;
 } else {
  k = b + 1025 | 0;
  b = bf(k) | 0;
  f = c[m >> 2] | 0;
  if (!f) a[b >> 0] = 0; else {
   g = f;
   a : do if (!((g ^ b) & 3)) {
    if (!(g & 3)) g = b; else {
     g = b;
     do {
      j = a[f >> 0] | 0;
      a[g >> 0] = j;
      if (!(j << 24 >> 24)) break a;
      f = f + 1 | 0;
      g = g + 1 | 0;
     } while ((f & 3 | 0) != 0);
    }
    h = c[f >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) while (1) {
     f = f + 4 | 0;
     j = g + 4 | 0;
     c[g >> 2] = h;
     h = c[f >> 2] | 0;
     if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) {
      g = j;
      break;
     } else g = j;
    }
    h = 15;
   } else {
    g = b;
    h = 15;
   } while (0);
   if ((h | 0) == 15) {
    j = a[f >> 0] | 0;
    a[g >> 0] = j;
    if (j << 24 >> 24) do {
     f = f + 1 | 0;
     g = g + 1 | 0;
     j = a[f >> 0] | 0;
     a[g >> 0] = j;
    } while (j << 24 >> 24 != 0);
   }
   cf(c[m >> 2] | 0);
   c[m >> 2] = 0;
  }
  c[m >> 2] = b;
  c[l >> 2] = k;
  j = m;
  f = c[o >> 2] | 0;
 }
 h = b + f | 0;
 f = n;
 b = 1728;
 g = f + 112 | 0;
 do {
  c[f >> 2] = c[b >> 2];
  f = f + 4 | 0;
  b = b + 4 | 0;
 } while ((f | 0) < (g | 0));
 m = -2 - h | 0;
 m = m >>> 0 < 1024 ? m : 1024;
 c[n + 48 >> 2] = m;
 g = n + 20 | 0;
 c[g >> 2] = h;
 c[n + 44 >> 2] = h;
 b = h + m | 0;
 f = n + 16 | 0;
 c[f >> 2] = b;
 c[n + 28 >> 2] = b;
 b = Pe(n, d, e) | 0;
 if (m | 0) {
  d = c[g >> 2] | 0;
  a[d + (((d | 0) == (c[f >> 2] | 0)) << 31 >> 31) >> 0] = 0;
 }
 f = c[o >> 2] | 0;
 if (b >>> 0 < 1023) {
  c[o >> 2] = f + b;
  a[p >> 0] = 0;
  i = q;
  return;
 } else {
  a[(c[j >> 2] | 0) + f >> 0] = 0;
  a[p >> 0] = 0;
  i = q;
  return;
 }
}

function Jd(a) {
 a = a | 0;
 var b = 0, d = 0;
 va(34962, 0);
 va(34963, 0);
 c[a + 292 >> 2] = 0;
 c[a + 296 >> 2] = 0;
 b = a + 432 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 688 >> 2] = 0;
 b = a + 448 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 692 >> 2] = 0;
 b = a + 464 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 696 >> 2] = 0;
 b = a + 480 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 700 >> 2] = 0;
 b = a + 496 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 704 >> 2] = 0;
 b = a + 512 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 708 >> 2] = 0;
 b = a + 528 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 712 >> 2] = 0;
 b = a + 544 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 716 >> 2] = 0;
 b = a + 560 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 720 >> 2] = 0;
 b = a + 576 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 724 >> 2] = 0;
 b = a + 592 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 728 >> 2] = 0;
 b = a + 608 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 732 >> 2] = 0;
 b = a + 624 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 736 >> 2] = 0;
 b = a + 640 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 740 >> 2] = 0;
 b = a + 656 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 744 >> 2] = 0;
 b = a + 672 | 0;
 d = b;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 748 >> 2] = 0;
 return;
}

function xd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 e = c[f + 4 >> 2] | 0;
 d = a;
 c[d >> 2] = c[f >> 2];
 c[d + 4 >> 2] = e;
 d = 0;
 do {
  c[a + 8 + (d * 48 | 0) >> 2] = c[b + 8 + (d * 48 | 0) >> 2];
  c[a + 8 + (d * 48 | 0) + 4 >> 2] = c[b + 8 + (d * 48 | 0) + 4 >> 2];
  c[a + 8 + (d * 48 | 0) + 8 >> 2] = c[b + 8 + (d * 48 | 0) + 8 >> 2];
  c[a + 8 + (d * 48 | 0) + 12 >> 2] = c[b + 8 + (d * 48 | 0) + 12 >> 2];
  c[a + 8 + (d * 48 | 0) + 16 >> 2] = c[b + 8 + (d * 48 | 0) + 16 >> 2];
  c[a + 8 + (d * 48 | 0) + 20 >> 2] = c[b + 8 + (d * 48 | 0) + 20 >> 2];
  c[a + 8 + (d * 48 | 0) + 24 >> 2] = c[b + 8 + (d * 48 | 0) + 24 >> 2];
  c[a + 8 + (d * 48 | 0) + 28 >> 2] = c[b + 8 + (d * 48 | 0) + 28 >> 2];
  c[a + 8 + (d * 48 | 0) + 32 >> 2] = c[b + 8 + (d * 48 | 0) + 32 >> 2];
  c[a + 8 + (d * 48 | 0) + 36 >> 2] = c[b + 8 + (d * 48 | 0) + 36 >> 2];
  c[a + 8 + (d * 48 | 0) + 40 >> 2] = c[b + 8 + (d * 48 | 0) + 40 >> 2];
  c[a + 8 + (d * 48 | 0) + 44 >> 2] = c[b + 8 + (d * 48 | 0) + 44 >> 2];
  d = d + 1 | 0;
 } while ((d | 0) != 6);
 d = 0;
 do {
  c[a + 296 + (d * 48 | 0) >> 2] = c[b + 296 + (d * 48 | 0) >> 2];
  c[a + 296 + (d * 48 | 0) + 4 >> 2] = c[b + 296 + (d * 48 | 0) + 4 >> 2];
  c[a + 296 + (d * 48 | 0) + 8 >> 2] = c[b + 296 + (d * 48 | 0) + 8 >> 2];
  c[a + 296 + (d * 48 | 0) + 12 >> 2] = c[b + 296 + (d * 48 | 0) + 12 >> 2];
  c[a + 296 + (d * 48 | 0) + 16 >> 2] = c[b + 296 + (d * 48 | 0) + 16 >> 2];
  c[a + 296 + (d * 48 | 0) + 20 >> 2] = c[b + 296 + (d * 48 | 0) + 20 >> 2];
  c[a + 296 + (d * 48 | 0) + 24 >> 2] = c[b + 296 + (d * 48 | 0) + 24 >> 2];
  c[a + 296 + (d * 48 | 0) + 28 >> 2] = c[b + 296 + (d * 48 | 0) + 28 >> 2];
  c[a + 296 + (d * 48 | 0) + 32 >> 2] = c[b + 296 + (d * 48 | 0) + 32 >> 2];
  c[a + 296 + (d * 48 | 0) + 36 >> 2] = c[b + 296 + (d * 48 | 0) + 36 >> 2];
  c[a + 296 + (d * 48 | 0) + 40 >> 2] = c[b + 296 + (d * 48 | 0) + 40 >> 2];
  c[a + 296 + (d * 48 | 0) + 44 >> 2] = c[b + 296 + (d * 48 | 0) + 44 >> 2];
  d = d + 1 | 0;
 } while ((d | 0) != 6);
 return;
}

function ld(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 e = c[f + 4 >> 2] | 0;
 d = a;
 c[d >> 2] = c[f >> 2];
 c[d + 4 >> 2] = e;
 d = 0;
 do {
  c[a + 8 + (d * 48 | 0) >> 2] = c[b + 8 + (d * 48 | 0) >> 2];
  c[a + 8 + (d * 48 | 0) + 4 >> 2] = c[b + 8 + (d * 48 | 0) + 4 >> 2];
  c[a + 8 + (d * 48 | 0) + 8 >> 2] = c[b + 8 + (d * 48 | 0) + 8 >> 2];
  c[a + 8 + (d * 48 | 0) + 12 >> 2] = c[b + 8 + (d * 48 | 0) + 12 >> 2];
  c[a + 8 + (d * 48 | 0) + 16 >> 2] = c[b + 8 + (d * 48 | 0) + 16 >> 2];
  c[a + 8 + (d * 48 | 0) + 20 >> 2] = c[b + 8 + (d * 48 | 0) + 20 >> 2];
  c[a + 8 + (d * 48 | 0) + 24 >> 2] = c[b + 8 + (d * 48 | 0) + 24 >> 2];
  c[a + 8 + (d * 48 | 0) + 28 >> 2] = c[b + 8 + (d * 48 | 0) + 28 >> 2];
  c[a + 8 + (d * 48 | 0) + 32 >> 2] = c[b + 8 + (d * 48 | 0) + 32 >> 2];
  c[a + 8 + (d * 48 | 0) + 36 >> 2] = c[b + 8 + (d * 48 | 0) + 36 >> 2];
  c[a + 8 + (d * 48 | 0) + 40 >> 2] = c[b + 8 + (d * 48 | 0) + 40 >> 2];
  c[a + 8 + (d * 48 | 0) + 44 >> 2] = c[b + 8 + (d * 48 | 0) + 44 >> 2];
  d = d + 1 | 0;
 } while ((d | 0) != 6);
 d = 0;
 do {
  c[a + 296 + (d * 48 | 0) >> 2] = c[b + 296 + (d * 48 | 0) >> 2];
  c[a + 296 + (d * 48 | 0) + 4 >> 2] = c[b + 296 + (d * 48 | 0) + 4 >> 2];
  c[a + 296 + (d * 48 | 0) + 8 >> 2] = c[b + 296 + (d * 48 | 0) + 8 >> 2];
  c[a + 296 + (d * 48 | 0) + 12 >> 2] = c[b + 296 + (d * 48 | 0) + 12 >> 2];
  c[a + 296 + (d * 48 | 0) + 16 >> 2] = c[b + 296 + (d * 48 | 0) + 16 >> 2];
  c[a + 296 + (d * 48 | 0) + 20 >> 2] = c[b + 296 + (d * 48 | 0) + 20 >> 2];
  c[a + 296 + (d * 48 | 0) + 24 >> 2] = c[b + 296 + (d * 48 | 0) + 24 >> 2];
  c[a + 296 + (d * 48 | 0) + 28 >> 2] = c[b + 296 + (d * 48 | 0) + 28 >> 2];
  c[a + 296 + (d * 48 | 0) + 32 >> 2] = c[b + 296 + (d * 48 | 0) + 32 >> 2];
  c[a + 296 + (d * 48 | 0) + 36 >> 2] = c[b + 296 + (d * 48 | 0) + 36 >> 2];
  c[a + 296 + (d * 48 | 0) + 40 >> 2] = c[b + 296 + (d * 48 | 0) + 40 >> 2];
  c[a + 296 + (d * 48 | 0) + 44 >> 2] = c[b + 296 + (d * 48 | 0) + 44 >> 2];
  d = d + 1 | 0;
 } while ((d | 0) != 6);
 return;
}

function Pc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0.0, h = 0.0, i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0.0, n = 0.0, o = 0.0, p = 0.0, q = 0.0, r = 0.0, s = 0.0, t = 0.0, u = 0.0, v = 0.0, w = 0.0, x = 0.0, y = 0.0, z = 0.0, A = 0.0, B = 0.0, C = 0.0, D = 0.0, E = 0.0, F = 0.0, G = 0.0, H = 0.0, I = 0.0, J = 0.0, K = 0.0, L = 0.0, M = 0.0, N = 0.0;
 w = +g[b >> 2];
 C = +g[b + 4 >> 2];
 I = +g[b + 8 >> 2];
 J = +g[b + 12 >> 2];
 K = +g[b + 16 >> 2];
 x = +g[b + 20 >> 2];
 y = +g[b + 24 >> 2];
 z = +g[b + 28 >> 2];
 A = +g[b + 32 >> 2];
 B = +g[b + 36 >> 2];
 D = +g[b + 40 >> 2];
 E = +g[b + 44 >> 2];
 F = +g[b + 48 >> 2];
 G = +g[b + 52 >> 2];
 H = +g[b + 56 >> 2];
 k = +g[b + 60 >> 2];
 N = +g[d >> 2];
 M = +g[d + 4 >> 2];
 L = +g[d + 8 >> 2];
 j = +g[d + 12 >> 2];
 l = +g[d + 16 >> 2];
 m = +g[d + 20 >> 2];
 n = +g[d + 24 >> 2];
 o = +g[d + 28 >> 2];
 p = +g[d + 32 >> 2];
 q = +g[d + 36 >> 2];
 r = +g[d + 40 >> 2];
 s = +g[d + 44 >> 2];
 t = +g[d + 48 >> 2];
 u = +g[d + 52 >> 2];
 v = +g[d + 56 >> 2];
 e = +g[d + 60 >> 2];
 f = w * N + K * M + A * L + F * j;
 h = C * N + x * M + B * L + G * j;
 i = I * N + y * M + D * L + H * j;
 j = J * N + z * M + E * L + k * j;
 b = a;
 d = b + 64 | 0;
 do {
  c[b >> 2] = 0;
  b = b + 4 | 0;
 } while ((b | 0) < (d | 0));
 g[a >> 2] = f;
 g[a + 4 >> 2] = h;
 g[a + 8 >> 2] = i;
 g[a + 12 >> 2] = j;
 g[a + 16 >> 2] = w * l + K * m + A * n + F * o;
 g[a + 20 >> 2] = C * l + x * m + B * n + G * o;
 g[a + 24 >> 2] = I * l + y * m + D * n + H * o;
 g[a + 28 >> 2] = J * l + z * m + E * n + k * o;
 g[a + 32 >> 2] = w * p + K * q + A * r + F * s;
 g[a + 36 >> 2] = C * p + x * q + B * r + G * s;
 g[a + 40 >> 2] = I * p + y * q + D * r + H * s;
 g[a + 44 >> 2] = J * p + z * q + E * r + k * s;
 g[a + 48 >> 2] = w * t + K * u + A * v + F * e;
 g[a + 52 >> 2] = C * t + x * u + B * v + G * e;
 g[a + 56 >> 2] = I * t + y * u + D * v + H * e;
 g[a + 60 >> 2] = J * t + z * u + E * v + k * e;
 return;
}

function be(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 j = c[e + 4 >> 2] | 0;
 do if ((j | 0) != -1) {
  l = c[d + 28 >> 2] | 0;
  k = (l | 0) == 0;
  if (k) {
   f = 0;
   g = 0;
  } else {
   f = l + ((c[d + 40 >> 2] | 0) * 12 | 0) | 0;
   g = l + ((c[d + 36 >> 2] | 0) * 12 | 0) | 0;
  }
  h = c[e >> 2] | 0;
  i = g;
  e = (f - g | 0) / 12 | 0;
  a : while (1) {
   while (1) {
    if (!e) break a;
    f = (e | 0) / 2 | 0;
    g = i + (f * 12 | 0) | 0;
    if ((c[i + (f * 12 | 0) + 4 >> 2] | 0) >>> 0 < j >>> 0) break;
    if ((c[g >> 2] | 0) >>> 0 < h >>> 0) break; else e = f;
   }
   i = g + 12 | 0;
   e = e + -1 - f | 0;
  }
  if (k) e = 0; else e = l + ((c[d + 40 >> 2] | 0) * 12 | 0) | 0;
  if ((i | 0) != (e | 0)) {
   e = c[i >> 2] | 0;
   if ((e | 0) != (h | 0)) {
    if ((e | 0) == 0 | (h | 0) == 0) break;
    if ((c[e >> 2] | 0) == (c[h >> 2] | 0)) break;
    if ((c[e + 4 >> 2] | 0) != (c[h + 4 >> 2] | 0)) break;
    h = c[h + 12 >> 2] | 0;
    f = c[e + 12 >> 2] | 0;
    g = a[h >> 0] | 0;
    e = a[f >> 0] | 0;
    if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 != e << 24 >> 24) f = g; else {
     do {
      h = h + 1 | 0;
      f = f + 1 | 0;
      g = a[h >> 0] | 0;
      e = a[f >> 0] | 0;
     } while (!(g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 != e << 24 >> 24));
     f = g;
    }
    if (f << 24 >> 24 != e << 24 >> 24) break;
   }
   if ((j | 0) == (c[i + 4 >> 2] | 0)) {
    if (k) e = 0; else e = l + ((c[d + 36 >> 2] | 0) * 12 | 0) | 0;
    e = i - e | 0;
    if ((e | 0) != -12) {
     f = (c[d + 12 >> 2] | 0) + (c[l + (((c[d + 36 >> 2] | 0) + ((e | 0) / 12 | 0) | 0) * 12 | 0) + 8 >> 2] | 0) | 0;
     e = c[d + 4 >> 2] | 0;
     if (e + (f * 24 | 0) | 0) {
      l = e + (f * 24 | 0) + 8 | 0;
      d = c[l + 4 >> 2] | 0;
      c[b >> 2] = c[l >> 2];
      c[b + 4 >> 2] = d;
      return;
     }
    }
   }
  }
 } while (0);
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function Te(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function xe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = b + 12 | 0;
 h = c[n >> 2] | 0;
 i = c[b >> 2] | 0;
 j = h + -1 | 0;
 c[i + (h * 40 | 0) >> 2] = c[i + (j * 40 | 0) >> 2];
 e = i + (h * 40 | 0) + 8 | 0;
 f = i + (j * 40 | 0) + 24 | 0;
 g = c[f >> 2] | 0;
 do if (!g) {
  c[i + (h * 40 | 0) + 24 >> 2] = 0;
  g = h;
 } else if ((g | 0) == (i + (j * 40 | 0) + 8 | 0)) {
  c[i + (h * 40 | 0) + 24 >> 2] = e;
  Ac[c[(c[g >> 2] | 0) + 12 >> 2] & 31](g, e);
  g = c[n >> 2] | 0;
  break;
 } else {
  c[i + (h * 40 | 0) + 24 >> 2] = g;
  c[f >> 2] = 0;
  g = h;
  break;
 } while (0);
 a[i + (h * 40 | 0) + 32 >> 0] = a[i + (j * 40 | 0) + 32 >> 0] | 0;
 f = g + -1 | 0;
 m = b + 8 | 0;
 e = c[m >> 2] | 0;
 if ((f | 0) > (e + d | 0)) {
  e = g;
  l = f;
 } else {
  l = g;
  m = e;
  l = l + 1 | 0;
  c[n >> 2] = l;
  d = m + d | 0;
  b = c[b >> 2] | 0;
  b = b + (d * 40 | 0) | 0;
  return b | 0;
 }
 while (1) {
  k = c[b >> 2] | 0;
  g = e + -2 | 0;
  c[k + (l * 40 | 0) >> 2] = c[k + (g * 40 | 0) >> 2];
  h = k + (l * 40 | 0) + 8 | 0;
  i = k + (g * 40 | 0) + 8 | 0;
  j = k + (l * 40 | 0) + 24 | 0;
  e = c[j >> 2] | 0;
  if ((e | 0) == (h | 0)) zc[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e); else if (e | 0) zc[c[(c[e >> 2] | 0) + 20 >> 2] & 63](e);
  c[j >> 2] = 0;
  e = k + (g * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   j = c[e >> 2] | 0;
   Ac[c[(c[j >> 2] | 0) + 12 >> 2] & 31](j, h);
   break;
  } else {
   c[j >> 2] = f;
   c[e >> 2] = 0;
   break;
  } while (0);
  a[k + (l * 40 | 0) + 32 >> 0] = a[k + (g * 40 | 0) + 32 >> 0] | 0;
  f = l + -1 | 0;
  e = c[m >> 2] | 0;
  if ((f | 0) > (e + d | 0)) {
   e = l;
   l = f;
  } else break;
 }
 l = c[n >> 2] | 0;
 m = e;
 l = l + 1 | 0;
 c[n >> 2] = l;
 d = m + d | 0;
 b = c[b >> 2] | 0;
 b = b + (d * 40 | 0) | 0;
 return b | 0;
}

function Md(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 16 | 0;
 n = o;
 if (!a) {
  i = o;
  return;
 }
 m = c[a + 344 >> 2] | 0;
 a = c[m + 340 >> 2] | 0;
 a : do if ((a | 0) > 0) {
  f = 0;
  while (1) {
   if ((c[m + 344 + (f * 288 | 0) + 280 >> 2] | 0) == (b | 0)) if (!(c[m + 344 + (f * 288 | 0) + 284 >> 2] | 0)) break a;
   f = f + 1 | 0;
   if ((f | 0) >= (a | 0)) {
    f = -1;
    break;
   }
  }
 } else f = -1; while (0);
 l = c[m + 344 + (f * 288 | 0) + 16 >> 2] | 0;
 if ((l | 0) <= 0) {
  i = o;
  return;
 }
 a = b << 6;
 k = 0;
 b : while (1) {
  b = e + (c[m + 344 + (f * 288 | 0) + 216 + (k << 2) >> 2] | 0) | 0;
  h = c[m + 3068 + (a + k << 2) >> 2] | 0;
  c : do if ((h | 0) != -1) switch (d[m + 344 + (f * 288 | 0) + 24 + (k * 12 | 0) + 4 >> 0] | 0 | 0) {
  case 0:
   {
    Cb(h | 0, +(+g[b >> 2]));
    break c;
   }
  case 1:
   {
    sb(h | 0, +(+g[b >> 2]), +(+g[b + 4 >> 2]));
    break c;
   }
  case 2:
   {
    ab(h | 0, +(+g[b >> 2]), +(+g[b + 4 >> 2]), +(+g[b + 8 >> 2]));
    break c;
   }
  case 3:
   {
    j = c[m + 344 + (f * 288 | 0) + 24 + (k * 12 | 0) + 8 >> 2] | 0;
    if ((j | 0) > 1) {
     cc(h | 0, j | 0, b | 0);
     break c;
    } else {
     Da(h | 0, +(+g[b >> 2]), +(+g[b + 4 >> 2]), +(+g[b + 8 >> 2]), +(+g[b + 12 >> 2]));
     break c;
    }
   }
  case 4:
   {
    pa(h | 0, 1, 0, b | 0);
    break c;
   }
  case 5:
   {
    oa(h | 0, 1, 0, b | 0);
    break c;
   }
  case 6:
   {
    ra(h | 0, c[m + 344 + (f * 288 | 0) + 24 + (k * 12 | 0) + 8 >> 2] | 0, 0, b | 0);
    break c;
   }
  case 8:
   {
    Db(h | 0, c[b >> 2] | 0);
    break c;
   }
  default:
   {
    a = 20;
    break b;
   }
  } while (0);
  k = k + 1 | 0;
  if ((k | 0) >= (l | 0)) {
   a = 22;
   break;
  }
 }
 if ((a | 0) == 20) {
  pe(19516, n);
  eb();
 } else if ((a | 0) == 22) {
  i = o;
  return;
 }
}

function Je(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 k = q + 32 | 0;
 o = a + 28 | 0;
 g = c[o >> 2] | 0;
 c[k >> 2] = g;
 p = a + 20 | 0;
 g = (c[p >> 2] | 0) - g | 0;
 c[k + 4 >> 2] = g;
 c[k + 8 >> 2] = b;
 c[k + 12 >> 2] = d;
 j = a + 60 | 0;
 l = a + 44 | 0;
 f = 2;
 g = g + d | 0;
 while (1) {
  if (!(c[8975] | 0)) {
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = k;
   c[n + 8 >> 2] = f;
   b = Oa(146, n | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[8975] | 0)) e = 35944; else e = c[(Ef() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
  } else {
   Ma(48, a | 0);
   c[m >> 2] = c[j >> 2];
   c[m + 4 >> 2] = k;
   c[m + 8 >> 2] = f;
   b = Oa(146, m | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[8975] | 0)) e = 35944; else e = c[(Ef() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
   Pa(0);
  }
  if ((g | 0) == (b | 0)) {
   b = 13;
   break;
  }
  if ((b | 0) < 0) {
   b = 15;
   break;
  }
  g = g - b | 0;
  e = c[k + 4 >> 2] | 0;
  if (b >>> 0 > e >>> 0) {
   h = c[l >> 2] | 0;
   c[o >> 2] = h;
   c[p >> 2] = h;
   h = c[k + 12 >> 2] | 0;
   b = b - e | 0;
   e = k + 8 | 0;
   f = f + -1 | 0;
  } else if ((f | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + b;
   h = e;
   e = k;
   f = 2;
  } else {
   h = e;
   e = k;
  }
  c[e >> 2] = (c[e >> 2] | 0) + b;
  c[e + 4 >> 2] = h - b;
  k = e;
 }
 if ((b | 0) == 13) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((b | 0) == 15) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((f | 0) == 2) d = 0; else d = d - (c[k + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Be(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 e = c[d >> 2] | 0;
 if (!e) {
  c[b >> 2] = 0;
  return;
 }
 i = c[e >> 2] | 0;
 f = c[8974] | 0;
 if (!f) {
  g = bf(24608) | 0;
  Bf(g | 0, 0, 24608) | 0;
  c[g + 16 >> 2] = 16;
  c[g + 20 >> 2] = 65536;
  c[g + 24 >> 2] = 0;
  c[g + 28 >> 2] = 0;
  e = g + 24608 | 0;
  f = g + 32 | 0;
  do {
   c[f >> 2] = 0;
   c[f + 4 >> 2] = 0;
   c[f + 8 >> 2] = 0;
   c[f + 12 >> 2] = 0;
   c[f + 16 >> 2] = 16;
   c[f + 20 >> 2] = 65536;
   f = f + 24 | 0;
  } while ((f | 0) != (e | 0));
  c[8974] = g;
  h = g;
  e = c[d >> 2] | 0;
  f = g;
 } else h = f;
 if ((i | 0) == (h | 0)) {
  c[b >> 2] = e;
  return;
 }
 d = c[e + 12 >> 2] | 0;
 if (d | 0) {
  e = a[d >> 0] | 0;
  if (e << 24 >> 24) {
   if (!f) {
    g = bf(24608) | 0;
    Bf(g | 0, 0, 24608) | 0;
    c[g + 16 >> 2] = 16;
    c[g + 20 >> 2] = 65536;
    c[g + 24 >> 2] = 0;
    c[g + 28 >> 2] = 0;
    e = g + 24608 | 0;
    f = g + 32 | 0;
    do {
     c[f >> 2] = 0;
     c[f + 4 >> 2] = 0;
     c[f + 8 >> 2] = 0;
     c[f + 12 >> 2] = 0;
     c[f + 16 >> 2] = 16;
     c[f + 20 >> 2] = 65536;
     f = f + 24 | 0;
    } while ((f | 0) != (e | 0));
    c[8974] = g;
    e = a[d >> 0] | 0;
    if (!(e << 24 >> 24)) {
     f = g;
     e = 0;
    } else {
     f = g;
     h = 0;
     g = d;
     j = 14;
    }
   } else {
    h = 0;
    g = d;
    j = 14;
   }
   if ((j | 0) == 14) {
    while (1) {
     g = g + 1 | 0;
     j = ((e << 24 >> 24) + h | 0) * 1025 | 0;
     h = j >> 6 ^ j;
     e = a[g >> 0] | 0;
     if (!(e << 24 >> 24)) break; else j = 14;
    }
    e = h * 9 | 0;
   }
   e = (e >> 11 ^ e) * 32769 | 0;
   j = Ee(f, e, d) | 0;
   c[b >> 2] = j;
   if (j | 0) return;
   c[b >> 2] = Ge(f, e, d) | 0;
   return;
  }
 }
 c[b >> 2] = 0;
 return;
}

function Fd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = a + 324 | 0;
 g = c[f >> 2] | 0;
 c[f >> 2] = g + 1;
 f = a + 328 + (g * 288 | 0) | 0;
 if ((f | 0) != (b | 0)) {
  c[f >> 2] = 0;
  Be(f, b);
 }
 b = a + 328 + (g * 288 | 0) + 8 | 0;
 c[b >> 2] = c[d >> 2];
 c[b + 4 >> 2] = c[d + 4 >> 2];
 c[b + 8 >> 2] = c[d + 8 >> 2];
 c[b + 12 >> 2] = c[d + 12 >> 2];
 if ((b | 0) != (d | 0)) {
  f = 0;
  do {
   i = a + 328 + (g * 288 | 0) + 24 + (f * 12 | 0) | 0;
   c[i >> 2] = 0;
   Be(i, d + 16 + (f * 12 | 0) | 0);
   i = d + 16 + (f * 12 | 0) + 4 | 0;
   h = c[i + 4 >> 2] | 0;
   b = a + 328 + (g * 288 | 0) + 24 + (f * 12 | 0) + 4 | 0;
   c[b >> 2] = c[i >> 2];
   c[b + 4 >> 2] = h;
   f = f + 1 | 0;
  } while ((f | 0) != 16);
 }
 c[a + 328 + (g * 288 | 0) + 216 >> 2] = c[d + 208 >> 2];
 c[a + 328 + (g * 288 | 0) + 220 >> 2] = c[d + 212 >> 2];
 c[a + 328 + (g * 288 | 0) + 224 >> 2] = c[d + 216 >> 2];
 c[a + 328 + (g * 288 | 0) + 228 >> 2] = c[d + 220 >> 2];
 c[a + 328 + (g * 288 | 0) + 232 >> 2] = c[d + 224 >> 2];
 c[a + 328 + (g * 288 | 0) + 236 >> 2] = c[d + 228 >> 2];
 c[a + 328 + (g * 288 | 0) + 240 >> 2] = c[d + 232 >> 2];
 c[a + 328 + (g * 288 | 0) + 244 >> 2] = c[d + 236 >> 2];
 c[a + 328 + (g * 288 | 0) + 248 >> 2] = c[d + 240 >> 2];
 c[a + 328 + (g * 288 | 0) + 252 >> 2] = c[d + 244 >> 2];
 c[a + 328 + (g * 288 | 0) + 256 >> 2] = c[d + 248 >> 2];
 c[a + 328 + (g * 288 | 0) + 260 >> 2] = c[d + 252 >> 2];
 c[a + 328 + (g * 288 | 0) + 264 >> 2] = c[d + 256 >> 2];
 c[a + 328 + (g * 288 | 0) + 268 >> 2] = c[d + 260 >> 2];
 c[a + 328 + (g * 288 | 0) + 272 >> 2] = c[d + 264 >> 2];
 c[a + 328 + (g * 288 | 0) + 276 >> 2] = c[d + 268 >> 2];
 c[a + 328 + (g * 288 | 0) + 280 >> 2] = e;
 c[a + 328 + (g * 288 | 0) + 284 >> 2] = 0;
 return;
}

function kf(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 u = i;
 i = i + 64 | 0;
 s = u;
 do if ((d | 0) == (e | 0)) g = 1; else if (!e) g = 0; else {
  p = c[e >> 2] | 0;
  g = e + (c[p + -8 >> 2] | 0) | 0;
  p = c[p + -4 >> 2] | 0;
  c[s >> 2] = 1096;
  c[s + 4 >> 2] = e;
  c[s + 8 >> 2] = 1128;
  e = s + 12 | 0;
  h = s + 16 | 0;
  j = s + 20 | 0;
  k = s + 24 | 0;
  l = s + 28 | 0;
  m = s + 32 | 0;
  n = s + 40 | 0;
  o = (p | 0) == 1096;
  q = e;
  r = q + 40 | 0;
  do {
   c[q >> 2] = 0;
   q = q + 4 | 0;
  } while ((q | 0) < (r | 0));
  b[e + 40 >> 1] = 0;
  a[e + 42 >> 0] = 0;
  a : do if (o) {
   c[s + 48 >> 2] = 1;
   lf(1096, s, g, g, 1, 0);
   if ((c[k >> 2] | 0) != 1) t = 10;
  } else {
   yc[c[(c[p >> 2] | 0) + 24 >> 2] & 63](p, s, g, 1, 0);
   switch (c[s + 36 >> 2] | 0) {
   case 0:
    if ((c[n >> 2] | 0) == 1 & (c[l >> 2] | 0) == 1 & (c[m >> 2] | 0) == 1) {
     g = c[j >> 2] | 0;
     break a;
    } else {
     t = 10;
     break a;
    }
   case 1:
    break;
   default:
    {
     t = 10;
     break a;
    }
   }
   if ((c[k >> 2] | 0) != 1) if (!((c[n >> 2] | 0) == 0 & (c[l >> 2] | 0) == 1 & (c[m >> 2] | 0) == 1)) {
    t = 10;
    break;
   }
   g = c[h >> 2] | 0;
  } while (0);
  if ((t | 0) == 10) {
   g = 0;
   break;
  }
  if (!g) g = 0; else {
   q = s;
   r = q + 56 | 0;
   do {
    c[q >> 2] = 0;
    q = q + 4 | 0;
   } while ((q | 0) < (r | 0));
   c[s >> 2] = g;
   c[s + 8 >> 2] = d;
   c[s + 12 >> 2] = -1;
   c[s + 48 >> 2] = 1;
   Ec[c[(c[g >> 2] | 0) + 28 >> 2] & 63](g, s, c[f >> 2] | 0, 1);
   if ((c[s + 24 >> 2] | 0) == 1) {
    c[f >> 2] = c[s + 16 >> 2];
    g = 1;
   } else g = 0;
  }
 } while (0);
 i = u;
 return g | 0;
}

function we(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = b + 8 | 0;
 h = c[n >> 2] | 0;
 i = h + -1 | 0;
 j = c[b >> 2] | 0;
 c[j + (i * 40 | 0) >> 2] = c[j + (h * 40 | 0) >> 2];
 e = j + (i * 40 | 0) + 8 | 0;
 f = j + (h * 40 | 0) + 24 | 0;
 g = c[f >> 2] | 0;
 do if (!g) {
  c[j + (i * 40 | 0) + 24 >> 2] = 0;
  e = h;
 } else if ((g | 0) == (j + (h * 40 | 0) + 8 | 0)) {
  c[j + (i * 40 | 0) + 24 >> 2] = e;
  Ac[c[(c[g >> 2] | 0) + 12 >> 2] & 31](g, e);
  e = c[n >> 2] | 0;
  break;
 } else {
  c[j + (i * 40 | 0) + 24 >> 2] = g;
  c[f >> 2] = 0;
  e = h;
  break;
 } while (0);
 a[j + (i * 40 | 0) + 32 >> 0] = a[j + (h * 40 | 0) + 32 >> 0] | 0;
 m = d + -1 | 0;
 if ((e | 0) < (m + e | 0)) l = e; else {
  m = e;
  m = m + -1 | 0;
  c[n >> 2] = m;
  d = m + d | 0;
  b = c[b >> 2] | 0;
  b = b + (d * 40 | 0) | 0;
  return b | 0;
 }
 do {
  g = c[b >> 2] | 0;
  k = l;
  l = l + 1 | 0;
  c[g + (k * 40 | 0) >> 2] = c[g + (l * 40 | 0) >> 2];
  h = g + (k * 40 | 0) + 8 | 0;
  i = g + (l * 40 | 0) + 8 | 0;
  j = g + (k * 40 | 0) + 24 | 0;
  e = c[j >> 2] | 0;
  if ((e | 0) == (h | 0)) zc[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e); else if (e | 0) zc[c[(c[e >> 2] | 0) + 20 >> 2] & 63](e);
  c[j >> 2] = 0;
  e = g + (l * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   Ac[c[(c[f >> 2] | 0) + 12 >> 2] & 31](f, h);
   break;
  } else {
   c[j >> 2] = f;
   c[e >> 2] = 0;
   break;
  } while (0);
  a[g + (k * 40 | 0) + 32 >> 0] = a[g + (l * 40 | 0) + 32 >> 0] | 0;
  e = c[n >> 2] | 0;
 } while ((l | 0) < (m + e | 0));
 m = e + -1 | 0;
 c[n >> 2] = m;
 d = m + d | 0;
 b = c[b >> 2] | 0;
 b = b + (d * 40 | 0) | 0;
 return b | 0;
}

function ue(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 p = i;
 i = i + 48 | 0;
 l = p;
 n = b + 32 | 0;
 e = c[n >> 2] | 0;
 o = b + 40 | 0;
 if (!e) {
  n = b + 44 | 0;
  o = c[o >> 2] | 0;
  c[n >> 2] = o;
  i = p;
  return;
 }
 f = c[o >> 2] | 0;
 d = b + 44 | 0;
 k = c[d >> 2] | 0;
 m = e + (k * 40 | 0) | 0;
 if ((f | 0) == (k | 0)) {
  n = d;
  o = c[o >> 2] | 0;
  c[n >> 2] = o;
  i = p;
  return;
 }
 g = b + 4 | 0;
 h = l + 8 | 0;
 j = l + 24 | 0;
 k = l + 32 | 0;
 f = e + (f * 40 | 0) | 0;
 do {
  b = f + 32 | 0;
  a[b >> 0] = 1;
  c[l >> 2] = c[f >> 2];
  e = c[f + 24 >> 2] | 0;
  do if (!e) c[j >> 2] = 0; else if ((e | 0) == (f + 8 | 0)) {
   c[j >> 2] = h;
   Ac[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, h);
   break;
  } else {
   c[j >> 2] = Bc[c[(c[e >> 2] | 0) + 8 >> 2] & 63](e) | 0;
   break;
  } while (0);
  a[k >> 0] = a[b >> 0] | 0;
  ve(g, l);
  b = c[j >> 2] | 0;
  if ((b | 0) == (h | 0)) zc[c[(c[h >> 2] | 0) + 16 >> 2] & 63](h); else if (b | 0) zc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b);
  f = f + 40 | 0;
 } while ((f | 0) != (m | 0));
 b = c[n >> 2] | 0;
 if (!b) {
  n = d;
  o = c[o >> 2] | 0;
  c[n >> 2] = o;
  i = p;
  return;
 }
 e = c[o >> 2] | 0;
 if ((e | 0) >= (c[d >> 2] | 0)) {
  n = d;
  o = c[o >> 2] | 0;
  c[n >> 2] = o;
  i = p;
  return;
 }
 while (1) {
  f = c[b + (e * 40 | 0) + 24 >> 2] | 0;
  if ((f | 0) == (b + (e * 40 | 0) + 8 | 0)) zc[c[(c[f >> 2] | 0) + 16 >> 2] & 63](f); else if (f | 0) zc[c[(c[f >> 2] | 0) + 20 >> 2] & 63](f);
  e = e + 1 | 0;
  if ((e | 0) >= (c[d >> 2] | 0)) break;
  b = c[n >> 2] | 0;
 }
 o = c[o >> 2] | 0;
 c[d >> 2] = o;
 i = p;
 return;
}

function Od(a) {
 a = a | 0;
 var d = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 32 | 0;
 n = o + 24 | 0;
 m = o + 16 | 0;
 g = o + 8 | 0;
 l = a + 48 | 0;
 f = b[l >> 1] | 0;
 switch ((f & 65535) >>> 9 & 7 | 0) {
 case 0:
  {
   d = 9728;
   break;
  }
 case 1:
  {
   d = 9729;
   break;
  }
 case 2:
  {
   d = 9984;
   break;
  }
 case 3:
  {
   d = 9986;
   break;
  }
 case 4:
  {
   d = 9985;
   break;
  }
 case 5:
  {
   d = 9987;
   break;
  }
 default:
  {
   pe(19879, o);
   eb();
  }
 }
 switch ((f & 65535) >>> 6 & 7 | 0) {
 case 0:
  {
   h = 9728;
   break;
  }
 case 1:
  {
   h = 9729;
   break;
  }
 case 2:
  {
   h = 9984;
   break;
  }
 case 3:
  {
   h = 9986;
   break;
  }
 case 4:
  {
   h = 9985;
   break;
  }
 case 5:
  {
   h = 9987;
   break;
  }
 default:
  {
   pe(19879, g);
   eb();
  }
 }
 if ((c[a + 24 >> 2] | 0) == 1) {
  f = d | 2;
  if ((f | 0) == 9986) d = 9728; else d = (f | 0) == 9987 ? 9729 : d;
 }
 pc(3553, 10241, d | 0);
 pc(3553, 10240, h | 0);
 if ((c[a + 4 >> 2] | 0) == 2) {
  pc(3553, 10242, 33071);
  pc(3553, 10243, 33071);
  i = o;
  return;
 }
 switch (b[l >> 1] & 3 | 0) {
 case 0:
  {
   j = 33071;
   break;
  }
 case 1:
  {
   j = 10497;
   break;
  }
 case 2:
  {
   j = 33648;
   break;
  }
 default:
  {
   pe(19925, m);
   eb();
  }
 }
 pc(3553, 10242, j | 0);
 switch ((e[l >> 1] | 0) >>> 2 & 3 | 0) {
 case 0:
  {
   k = 33071;
   break;
  }
 case 1:
  {
   k = 10497;
   break;
  }
 case 2:
  {
   k = 33648;
   break;
  }
 default:
  {
   pe(19925, n);
   eb();
  }
 }
 pc(3553, 10243, k | 0);
 i = o;
 return;
}

function Cd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, h = 0;
 c[b >> 2] = 640;
 c[b + 4 >> 2] = 400;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 12;
 c[b + 16 >> 2] = 1;
 a[b + 20 >> 0] = 1;
 c[b + 24 >> 2] = 1;
 h = b + 28 | 0;
 a : do if (!3) {
  d = 19235;
  f = 4;
 } else {
  e = 19235;
  d = 19235;
  while (1) {
   if (!(a[e >> 0] | 0)) break a;
   e = e + 1 | 0;
   d = e;
   if (!(d & 3)) {
    d = e;
    f = 4;
    break;
   }
  }
 } while (0);
 if ((f | 0) == 4) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 19235 | 0;
 if ((d | 0) > 0) {
  f = bf(d + 9 | 0) | 0;
  c[h >> 2] = f;
  e = f;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[f >> 2] = 0;
  c[f >> 2] = (c[f >> 2] | 0) + 1;
  f = c[h >> 2] | 0;
  c[f + 4 >> 2] = d;
  f = f + 8 | 0;
  h = b + 32 | 0;
  c[h >> 2] = f;
  Af(f | 0, 19235, d | 0) | 0;
  a[(c[h >> 2] | 0) + d >> 0] = 0;
 } else {
  c[h >> 2] = 0;
  c[b + 32 >> 2] = 0;
 }
 g[b + 36 >> 2] = 0.0;
 g[b + 40 >> 2] = 0.0;
 g[b + 44 >> 2] = 0.0;
 g[b + 48 >> 2] = 1.0;
 g[b + 52 >> 2] = 1.0;
 a[b + 56 >> 0] = 0;
 a[b + 57 >> 0] = 3;
 a[b + 60 >> 0] = 0;
 c[b + 64 >> 2] = 256;
 c[b + 68 >> 2] = 256;
 c[b + 72 >> 2] = 4194304;
 c[b + 76 >> 2] = 65536;
 c[b + 80 >> 2] = 4096;
 c[b + 84 >> 2] = 128;
 c[b + 100 >> 2] = 0;
 c[b + 88 >> 2] = 128;
 c[b + 104 >> 2] = 0;
 c[b + 92 >> 2] = 128;
 c[b + 108 >> 2] = 0;
 c[b + 96 >> 2] = 128;
 c[b + 112 >> 2] = 0;
 return;
}

function qe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 60 | 0;
 c[a + 76 >> 2] = 0;
 c[a + 80 >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d | 0) cf(d);
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 h = a + 32 | 0;
 c[a + 48 >> 2] = 0;
 c[a + 52 >> 2] = 0;
 d = c[h >> 2] | 0;
 g = a + 40 | 0;
 if (!d) b = a + 44 | 0; else {
  e = c[g >> 2] | 0;
  b = a + 44 | 0;
  if ((e | 0) < (c[b >> 2] | 0)) {
   while (1) {
    f = c[d + (e * 40 | 0) + 24 >> 2] | 0;
    if ((f | 0) == (d + (e * 40 | 0) + 8 | 0)) zc[c[(c[f >> 2] | 0) + 16 >> 2] & 63](f); else if (f | 0) zc[c[(c[f >> 2] | 0) + 20 >> 2] & 63](f);
    e = e + 1 | 0;
    if ((e | 0) >= (c[b >> 2] | 0)) break;
    d = c[h >> 2] | 0;
   }
   d = c[h >> 2] | 0;
  }
  cf(d);
 }
 c[h >> 2] = 0;
 c[a + 36 >> 2] = 0;
 c[g >> 2] = 0;
 c[b >> 2] = 0;
 g = a + 4 | 0;
 c[a + 20 >> 2] = 0;
 c[a + 24 >> 2] = 0;
 b = c[g >> 2] | 0;
 f = a + 12 | 0;
 if (!b) {
  h = a + 16 | 0;
  a = a + 8 | 0;
  c[g >> 2] = 0;
  c[a >> 2] = 0;
  c[f >> 2] = 0;
  c[h >> 2] = 0;
  return;
 }
 d = c[f >> 2] | 0;
 h = a + 16 | 0;
 if ((d | 0) < (c[h >> 2] | 0)) {
  while (1) {
   e = c[b + (d * 40 | 0) + 24 >> 2] | 0;
   if ((e | 0) == (b + (d * 40 | 0) + 8 | 0)) zc[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e); else if (e | 0) zc[c[(c[e >> 2] | 0) + 20 >> 2] & 63](e);
   d = d + 1 | 0;
   if ((d | 0) >= (c[h >> 2] | 0)) break;
   b = c[g >> 2] | 0;
  }
  b = c[g >> 2] | 0;
 }
 cf(b);
 a = a + 8 | 0;
 c[g >> 2] = 0;
 c[a >> 2] = 0;
 c[f >> 2] = 0;
 c[h >> 2] = 0;
 return;
}

function Ee(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 m = d & 1023;
 n = c[b + 32 + (m * 24 | 0) >> 2] | 0;
 o = (n | 0) == 0;
 if (o) {
  f = 0;
  g = 0;
 } else {
  f = n + (c[b + 32 + (m * 24 | 0) + 12 >> 2] << 2) | 0;
  g = n + (c[b + 32 + (m * 24 | 0) + 8 >> 2] << 2) | 0;
 }
 p = g;
 f = f - g >> 2;
 a : while (1) {
  while (1) {
   if (!f) break a;
   k = (f | 0) / 2 | 0;
   l = p + (k << 2) | 0;
   h = c[(c[l >> 2] | 0) + 12 >> 2] | 0;
   i = a[h >> 0] | 0;
   g = a[e >> 0] | 0;
   if (!(i << 24 >> 24 == 0 ? 1 : i << 24 >> 24 != g << 24 >> 24)) {
    j = e;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     i = a[h >> 0] | 0;
     g = a[j >> 0] | 0;
    } while (!(i << 24 >> 24 == 0 ? 1 : i << 24 >> 24 != g << 24 >> 24));
   }
   if ((i & 255) < (g & 255)) break; else f = k;
  }
  p = l + 4 | 0;
  f = f + -1 - k | 0;
 }
 if (o) f = 0; else f = n + (c[b + 32 + (m * 24 | 0) + 12 >> 2] << 2) | 0;
 if ((p | 0) == (f | 0)) return 0;
 i = c[p >> 2] | 0;
 if ((c[i + 4 >> 2] | 0) != (d | 0)) return 0;
 h = c[i + 12 >> 2] | 0;
 f = a[e >> 0] | 0;
 g = a[h >> 0] | 0;
 if (f << 24 >> 24 == 0 ? 1 : f << 24 >> 24 != g << 24 >> 24) {
  p = f;
  d = g;
  d = p << 24 >> 24 == d << 24 >> 24;
  d = d ? i : 0;
  return d | 0;
 }
 do {
  e = e + 1 | 0;
  h = h + 1 | 0;
  g = a[e >> 0] | 0;
  f = a[h >> 0] | 0;
 } while (!(g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 != f << 24 >> 24));
 d = g << 24 >> 24 == f << 24 >> 24;
 d = d ? i : 0;
 return d | 0;
}

function nf(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) {
   h = d + 28 | 0;
   if ((c[h >> 2] | 0) != 1) c[h >> 2] = f;
  }
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   j = c[b + 8 >> 2] | 0;
   yc[c[(c[j >> 2] | 0) + 24 >> 2] & 63](j, d, e, f, g);
   break;
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0)) {
   i = d + 20 | 0;
   if ((c[i >> 2] | 0) != (e | 0)) {
    c[d + 32 >> 2] = f;
    j = d + 44 | 0;
    if ((c[j >> 2] | 0) == 4) break;
    h = d + 52 | 0;
    a[h >> 0] = 0;
    f = d + 53 | 0;
    a[f >> 0] = 0;
    b = c[b + 8 >> 2] | 0;
    Dc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b, d, e, e, 1, g);
    if (!(a[f >> 0] | 0)) {
     h = 0;
     f = 13;
    } else if (!(a[h >> 0] | 0)) {
     h = 1;
     f = 13;
    } else f = 17;
    do if ((f | 0) == 13) {
     c[i >> 2] = e;
     e = d + 40 | 0;
     c[e >> 2] = (c[e >> 2] | 0) + 1;
     if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 2) {
      a[d + 54 >> 0] = 1;
      if (h) {
       f = 17;
       break;
      } else {
       h = 4;
       break;
      }
     }
     if (h) f = 17; else h = 4;
    } while (0);
    if ((f | 0) == 17) h = 3;
    c[j >> 2] = h;
    break;
   }
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function ye(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 80 | 0;
 h = l + 32 | 0;
 j = l;
 k = (c[b >> 2] | 0) + 1 | 0;
 c[b >> 2] = k;
 g = b + 32 | 0;
 b = c[d + 16 >> 2] | 0;
 do if (!b) {
  e = j + 16 | 0;
  c[e >> 2] = 0;
  b = 0;
 } else if ((b | 0) == (d | 0)) {
  f = j + 16 | 0;
  c[f >> 2] = j;
  Ac[c[(c[b >> 2] | 0) + 12 >> 2] & 31](b, j);
  e = f;
  b = c[f >> 2] | 0;
  break;
 } else {
  b = Bc[c[(c[b >> 2] | 0) + 8 >> 2] & 63](b) | 0;
  e = j + 16 | 0;
  c[e >> 2] = b;
  break;
 } while (0);
 d = j + 24 | 0;
 a[d >> 0] = 0;
 c[h >> 2] = k;
 f = h + 8 | 0;
 do if (!b) {
  b = h + 24 | 0;
  c[b >> 2] = 0;
 } else if ((b | 0) == (j | 0)) {
  b = h + 24 | 0;
  c[b >> 2] = f;
  Ac[c[(c[j >> 2] | 0) + 12 >> 2] & 31](j, f);
  break;
 } else {
  m = h + 24 | 0;
  c[m >> 2] = Bc[c[(c[b >> 2] | 0) + 8 >> 2] & 63](b) | 0;
  b = m;
  break;
 } while (0);
 a[h + 32 >> 0] = a[d >> 0] | 0;
 ve(g, h);
 b = c[b >> 2] | 0;
 if ((b | 0) == (f | 0)) zc[c[(c[f >> 2] | 0) + 16 >> 2] & 63](f); else if (b | 0) zc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b);
 b = c[e >> 2] | 0;
 if ((b | 0) == (j | 0)) {
  zc[c[(c[j >> 2] | 0) + 16 >> 2] & 63](j);
  i = l;
  return k | 0;
 }
 if (!b) {
  i = l;
  return k | 0;
 }
 zc[c[(c[b >> 2] | 0) + 20 >> 2] & 63](b);
 i = l;
 return k | 0;
}

function Ld(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 n = (e | 0) == 1028;
 k = n ? a : a + 2 | 0;
 n = n ? d : d + 2 | 0;
 l = b[k >> 1] | 0;
 i = (l & 65535) >>> 12;
 m = i & 65535;
 o = a + 4 | 0;
 g = c[o >> 2] | 0;
 a = (g & 65535) >>> 7 & 255;
 f = a & 65535;
 o = o + 2 | 0;
 g = g >>> 24;
 h = g & 65535;
 j = b[n >> 1] | 0;
 if (i << 16 >> 16 == (j & 65535) >>> 12 << 16 >> 16) {
  i = c[d + 4 >> 2] | 0;
  if (a << 16 >> 16 == ((i & 65535) >>> 7 & 255)) if (h << 16 >> 16 == (i >>> 24 & 65535) << 16 >> 16) a = l; else p = 4; else p = 4;
 } else p = 4;
 if ((p | 0) == 4) {
  uc(e | 0, c[1424 + (m << 2) >> 2] | 0, g | 0, f | 0);
  a = b[k >> 1] | 0;
  j = b[n >> 1] | 0;
 }
 n = a & 15;
 g = n & 65535;
 h = (a & 65535) >>> 4 & 15;
 i = h & 65535;
 a = (a & 65535) >>> 8 & 15;
 f = a & 65535;
 if (n << 16 >> 16 == (j & 15)) if (h << 16 >> 16 == ((j & 65535) >>> 4 & 15)) {
  if (a << 16 >> 16 != ((j & 65535) >>> 8 & 15)) p = 8;
 } else p = 8; else p = 8;
 if ((p | 0) == 8) _a(e | 0, c[1456 + (g << 2) >> 2] | 0, c[1456 + (i << 2) >> 2] | 0, c[1456 + (f << 2) >> 2] | 0);
 a = b[o >> 1] & 255;
 if (a << 16 >> 16 == (b[d + 4 + 2 >> 1] & 255)) return;
 kb(e | 0, a & 65535 | 0);
 return;
}

function cd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 64 | 0;
 h = j;
 g = c[8946] | 0;
 e = g + 392 | 0;
 a = g + 276 | 0;
 f = c[g + 292 >> 2] | 0;
 if ((c[e >> 2] | 0) == (f | 0)) {
  d = g + 396 | 0;
  b = c[g + 296 >> 2] | 0;
  if ((c[d >> 2] | 0) == (b | 0)) {
   i = j;
   return;
  }
 } else {
  d = g + 396 | 0;
  b = c[g + 296 >> 2] | 0;
 }
 c[e >> 2] = f;
 c[d >> 2] = b;
 c[h >> 2] = 0;
 d = h + 4 | 0;
 b = d + 44 | 0;
 do {
  c[d >> 2] = c[a >> 2];
  d = d + 4 | 0;
  a = a + 4 | 0;
 } while ((d | 0) < (b | 0));
 e = h + 48 | 0;
 a = c[g + 320 >> 2] | 0;
 c[e >> 2] = a;
 f = h + 52 | 0;
 c[f >> 2] = c[g + 324 >> 2];
 if (a | 0) {
  d = a;
  c[d >> 2] = (c[d >> 2] | 0) + 1;
 }
 a = c[g + 332 >> 2] | 0;
 if (a | 0) {
  b = c[g + 340 >> 2] | 0;
  g = c[g + 344 >> 2] | 0;
  d = a + (g << 5) | 0;
  if ((b | 0) != (g | 0)) {
   a = a + (b << 5) | 0;
   do {
    g = c[a + 24 >> 2] | 0;
    Ac[c[(c[g >> 2] | 0) + 24 >> 2] & 31](g, h);
    a = a + 32 | 0;
   } while ((a | 0) != (d | 0));
  }
 }
 a = c[e >> 2] | 0;
 if (!a) {
  i = j;
  return;
 }
 h = c[a >> 2] | 0;
 c[a >> 2] = h - 1;
 if ((h | 0) == 1) {
  cf(c[e >> 2] | 0);
  c[e >> 2] = 0;
  c[f >> 2] = 0;
 }
 c[e >> 2] = 0;
 c[f >> 2] = 0;
 i = j;
 return;
}

function Mc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 b = c[a >> 2] | 0;
 h = a + 8 | 0;
 if (!b) {
  i = a + 12 | 0;
  g = a + 4 | 0;
  c[a >> 2] = 0;
  c[g >> 2] = 0;
  c[h >> 2] = 0;
  c[i >> 2] = 0;
  return;
 }
 g = c[h >> 2] | 0;
 i = a + 12 | 0;
 d = c[i >> 2] | 0;
 if ((g | 0) < (d | 0)) {
  f = b + (g << 3) | 0;
  e = c[f >> 2] | 0;
  if (e) {
   d = c[e >> 2] | 0;
   c[e >> 2] = d - 1;
   if ((d | 0) == 1) {
    cf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    b = b + (g << 3) + 4 | 0;
    c[b >> 2] = 0;
   } else b = b + (g << 3) + 4 | 0;
   c[f >> 2] = 0;
   c[b >> 2] = 0;
   d = c[i >> 2] | 0;
  }
  b = g + 1 | 0;
  if ((b | 0) < (d | 0)) do {
   e = c[a >> 2] | 0;
   g = e + (b << 3) | 0;
   f = c[g >> 2] | 0;
   if (f) {
    d = c[f >> 2] | 0;
    c[f >> 2] = d - 1;
    if ((d | 0) == 1) {
     cf(c[g >> 2] | 0);
     c[g >> 2] = 0;
     d = e + (b << 3) + 4 | 0;
     c[d >> 2] = 0;
    } else d = e + (b << 3) + 4 | 0;
    c[g >> 2] = 0;
    c[d >> 2] = 0;
    d = c[i >> 2] | 0;
   }
   b = b + 1 | 0;
  } while ((b | 0) < (d | 0));
  b = c[a >> 2] | 0;
 }
 cf(b);
 g = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[h >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Sd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 j = a + 72 | 0;
 k = c[j >> 2] | 0;
 l = a + 76 | 0;
 m = c[l >> 2] | 0;
 n = a + 264 | 0;
 i = a + 268 | 0;
 b = c[i >> 2] | 0;
 o = a + 276 | 0;
 d = c[o >> 2] | 0;
 if ((b | 0) == (d | 0)) {
  d = b >> 1;
  e = c[a + 280 >> 2] | 0;
  if ((d | 0) >= (e | 0)) {
   e = c[a + 284 >> 2] | 0;
   e = (d | 0) > (e | 0) ? e : d;
  }
  h = e + b | 0;
  if (e) {
   g = a + 272 | 0;
   b = b - (c[g >> 2] | 0) | 0;
   f = bf(h << 3) | 0;
   if ((b | 0) > 0) {
    d = f;
    e = 0;
    a = (c[n >> 2] | 0) + (c[g >> 2] << 3) | 0;
    while (1) {
     r = a;
     q = c[r + 4 >> 2] | 0;
     p = d;
     c[p >> 2] = c[r >> 2];
     c[p + 4 >> 2] = q;
     e = e + 1 | 0;
     if ((e | 0) == (b | 0)) break; else {
      d = d + 8 | 0;
      a = a + 8 | 0;
     }
    }
   }
   d = c[n >> 2] | 0;
   if (d | 0) cf(d);
   c[n >> 2] = f;
   c[i >> 2] = h;
   c[g >> 2] = 0;
   c[o >> 2] = b;
  }
 } else b = d;
 c[o >> 2] = b + 1;
 r = (c[n >> 2] | 0) + (b << 3) | 0;
 c[r >> 2] = k;
 c[r + 4 >> 2] = m;
 c[j >> 2] = (c[j >> 2] | 0) + (c[l >> 2] | 0);
 c[l >> 2] = 0;
 return;
}

function Ae(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if (d | 0) {
  e = a[d >> 0] | 0;
  if (e << 24 >> 24) {
   f = c[8974] | 0;
   if (!f) {
    g = bf(24608) | 0;
    Bf(g | 0, 0, 24608) | 0;
    c[g + 16 >> 2] = 16;
    c[g + 20 >> 2] = 65536;
    c[g + 24 >> 2] = 0;
    c[g + 28 >> 2] = 0;
    e = g + 24608 | 0;
    f = g + 32 | 0;
    do {
     c[f >> 2] = 0;
     c[f + 4 >> 2] = 0;
     c[f + 8 >> 2] = 0;
     c[f + 12 >> 2] = 0;
     c[f + 16 >> 2] = 16;
     c[f + 20 >> 2] = 65536;
     f = f + 24 | 0;
    } while ((f | 0) != (e | 0));
    c[8974] = g;
    e = a[d >> 0] | 0;
    if (!(e << 24 >> 24)) {
     f = g;
     e = 0;
    } else {
     f = g;
     h = 0;
     g = d;
     i = 7;
    }
   } else {
    h = 0;
    g = d;
    i = 7;
   }
   if ((i | 0) == 7) {
    while (1) {
     g = g + 1 | 0;
     i = ((e << 24 >> 24) + h | 0) * 1025 | 0;
     h = i >> 6 ^ i;
     e = a[g >> 0] | 0;
     if (!(e << 24 >> 24)) break; else i = 7;
    }
    e = h * 9 | 0;
   }
   e = (e >> 11 ^ e) * 32769 | 0;
   i = Ee(f, e, d) | 0;
   c[b >> 2] = i;
   if (i | 0) return;
   c[b >> 2] = Ge(f, e, d) | 0;
   return;
  }
 }
 c[b >> 2] = 0;
 return;
}

function id(a) {
 a = a | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 l = a + 12 | 0;
 e = c[l >> 2] | 0;
 m = a + 8 | 0;
 d = c[m >> 2] | 0;
 if ((e | 0) == (d | 0)) {
  c[m >> 2] = 0;
  c[l >> 2] = 0;
  d = 0;
  e = 0;
 }
 k = a + 4 | 0;
 if ((c[k >> 2] | 0) != (e | 0)) return;
 if ((d | 0) > 0) {
  g = e - d | 0;
  if ((g | 0) > 0) {
   f = c[a >> 2] | 0;
   d = (f | 0) == 0 ? 0 : f + (d << 1) | 0;
   e = 0;
   while (1) {
    b[f >> 1] = b[d >> 1] | 0;
    e = e + 1 | 0;
    if ((e | 0) == (g | 0)) break; else {
     d = d + 2 | 0;
     f = f + 2 | 0;
    }
   }
  }
  c[m >> 2] = 0;
  c[l >> 2] = g;
  return;
 }
 f = e >> 1;
 g = c[a + 16 >> 2] | 0;
 if ((f | 0) >= (g | 0)) {
  g = c[a + 20 >> 2] | 0;
  g = (f | 0) > (g | 0) ? g : f;
 }
 j = g + e | 0;
 if (!g) return;
 d = e - d | 0;
 e = bf(j << 1) | 0;
 f = c[a >> 2] | 0;
 if ((d | 0) > 0) {
  g = e;
  h = 0;
  i = f + (c[m >> 2] << 1) | 0;
  while (1) {
   b[g >> 1] = b[i >> 1] | 0;
   h = h + 1 | 0;
   if ((h | 0) == (d | 0)) break; else {
    g = g + 2 | 0;
    i = i + 2 | 0;
   }
  }
 }
 if (f | 0) cf(f);
 c[a >> 2] = e;
 c[k >> 2] = j;
 c[m >> 2] = 0;
 c[l >> 2] = d;
 return;
}

function fd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 g = l + 4 | 0;
 Be(g, d);
 h = g + 4 | 0;
 a[h >> 0] = e;
 d = g + 8 | 0;
 c[d >> 2] = 1;
 j = b + 8 | 0;
 f = c[j >> 2] | 0;
 e = b + 16 + (f * 12 | 0) | 0;
 if ((e | 0) == (g | 0)) e = 1; else {
  c[e >> 2] = 0;
  Be(e, g);
  e = c[d >> 2] | 0;
 }
 g = h;
 h = c[g >> 2] | 0;
 g = c[g + 4 >> 2] | 0;
 d = b + 16 + (f * 12 | 0) + 4 | 0;
 c[d >> 2] = h;
 c[d + 4 >> 2] = g;
 d = b + 12 | 0;
 c[b + 208 + (c[j >> 2] << 2) >> 2] = c[d >> 2];
 do switch (h & 255 | 0) {
 case 0:
  {
   k = e << 2;
   break;
  }
 case 1:
  {
   k = e << 3;
   break;
  }
 case 2:
  {
   k = e << 4;
   break;
  }
 case 3:
  {
   k = e << 4;
   break;
  }
 case 4:
  {
   k = e << 4;
   break;
  }
 case 5:
  {
   k = e * 36 | 0;
   break;
  }
 case 6:
  {
   k = e << 6;
   break;
  }
 case 7:
  {
   k = e << 2;
   break;
  }
 case 8:
  {
   k = e << 2;
   break;
  }
 default:
  {
   pe(19063, l);
   eb();
  }
 } while (0);
 c[d >> 2] = (c[d >> 2] | 0) + k;
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 i = l;
 return;
}

function Pe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 224 | 0;
 n = r + 120 | 0;
 q = r + 80 | 0;
 p = r;
 o = r + 136 | 0;
 f = q;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[n >> 2] = c[e >> 2];
 if ((Qe(0, d, n, p, q) | 0) < 0) e = -1; else {
  e = c[b >> 2] | 0;
  m = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  l = b + 48 | 0;
  if (!(c[l >> 2] | 0)) {
   f = b + 44 | 0;
   g = c[f >> 2] | 0;
   c[f >> 2] = o;
   h = b + 28 | 0;
   c[h >> 2] = o;
   j = b + 20 | 0;
   c[j >> 2] = o;
   c[l >> 2] = 80;
   k = b + 16 | 0;
   c[k >> 2] = o + 80;
   e = Qe(b, d, n, p, q) | 0;
   if (g) {
    xc[c[b + 36 >> 2] & 63](b, 0, 0) | 0;
    e = (c[j >> 2] | 0) == 0 ? -1 : e;
    c[f >> 2] = g;
    c[l >> 2] = 0;
    c[k >> 2] = 0;
    c[h >> 2] = 0;
    c[j >> 2] = 0;
   }
  } else e = Qe(b, d, n, p, q) | 0;
  q = c[b >> 2] | 0;
  c[b >> 2] = q | m;
  e = (q & 32 | 0) == 0 ? e : -1;
 }
 i = r;
 return e | 0;
}

function ae(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 g = a + 12 | 0;
 d = c[g >> 2] | 0;
 f = c[a >> 2] | 0;
 h = d + -1 | 0;
 Be(f + (d * 12 | 0) | 0, f + (h * 12 | 0) | 0);
 c[f + (d * 12 | 0) + 4 >> 2] = c[f + (h * 12 | 0) + 4 >> 2];
 c[f + (d * 12 | 0) + 8 >> 2] = c[f + (h * 12 | 0) + 8 >> 2];
 d = c[g >> 2] | 0;
 f = d + -1 | 0;
 h = a + 8 | 0;
 e = c[h >> 2] | 0;
 if ((f | 0) <= (e + b | 0)) {
  f = d;
  h = e;
  f = f + 1 | 0;
  c[g >> 2] = f;
  b = h + b | 0;
  a = c[a >> 2] | 0;
  a = a + (b * 12 | 0) | 0;
  return a | 0;
 }
 while (1) {
  e = c[a >> 2] | 0;
  i = e + (f * 12 | 0) | 0;
  d = d + -2 | 0;
  c[i >> 2] = 0;
  Be(i, e + (d * 12 | 0) | 0);
  c[e + (f * 12 | 0) + 4 >> 2] = c[e + (d * 12 | 0) + 4 >> 2];
  c[e + (f * 12 | 0) + 8 >> 2] = c[e + (d * 12 | 0) + 8 >> 2];
  e = f + -1 | 0;
  d = c[h >> 2] | 0;
  if ((e | 0) > (d + b | 0)) {
   d = f;
   f = e;
  } else break;
 }
 h = c[g >> 2] | 0;
 i = d;
 h = h + 1 | 0;
 c[g >> 2] = h;
 i = i + b | 0;
 a = c[a >> 2] | 0;
 i = a + (i * 12 | 0) | 0;
 return i | 0;
}

function Ne(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) break a;
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 b : do if ((i | 0) == 5) if (f) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = $(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } else e = 0; while (0);
 return (e | 0 ? b : 0) | 0;
}

function He(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = bf(16384) | 0;
 j = a + 4 | 0;
 b = c[j >> 2] | 0;
 l = a + 12 | 0;
 d = c[l >> 2] | 0;
 if ((b | 0) == (d | 0)) {
  d = b >> 1;
  e = c[a + 16 >> 2] | 0;
  if ((d | 0) >= (e | 0)) {
   e = c[a + 20 >> 2] | 0;
   e = (d | 0) > (e | 0) ? e : d;
  }
  i = e + b | 0;
  if (e) {
   h = a + 8 | 0;
   b = b - (c[h >> 2] | 0) | 0;
   g = bf(i << 2) | 0;
   if ((b | 0) > 0) {
    d = g;
    e = 0;
    f = (c[a >> 2] | 0) + (c[h >> 2] << 2) | 0;
    while (1) {
     c[d >> 2] = c[f >> 2];
     e = e + 1 | 0;
     if ((e | 0) == (b | 0)) break; else {
      d = d + 4 | 0;
      f = f + 4 | 0;
     }
    }
   }
   d = c[a >> 2] | 0;
   if (d | 0) cf(d);
   c[a >> 2] = g;
   c[j >> 2] = i;
   c[h >> 2] = 0;
   c[l >> 2] = b;
  }
 } else b = d;
 c[l >> 2] = b + 1;
 c[(c[a >> 2] | 0) + (b << 2) >> 2] = k;
 c[a + 24 >> 2] = k;
 return;
}

function pe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[35864] & 1) != 0);
 c[8967] = (c[8967] | 0) + 1;
 d = c[8971] | 0;
 e = c[8970] | 0;
 if ((d | 0) == (e | 0)) {
  Pe(1616, b, h) | 0;
  b = c[8967] | 0;
  c[8967] = b - 1;
  i = j;
  return;
 }
 f = c[8968] | 0;
 if (!f) {
  b = c[8967] | 0;
  c[8967] = b - 1;
  i = j;
  return;
 }
 g = f + (d << 2) | 0;
 e = f + (e << 2) | 0;
 while (1) {
  d = c[e >> 2] | 0;
  if (!d) {
   d = 10;
   break;
  }
  k = d + 4 | 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  Ec[c[(c[d >> 2] | 0) + 4 >> 2] & 63](d, 1, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) zc[c[c[d >> 2] >> 2] & 63](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) eb(); else if ((d | 0) == 12) {
  k = c[8967] | 0;
  c[8967] = k - 1;
  i = j;
  return;
 }
}

function oe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[35864] & 1) != 0);
 c[8967] = (c[8967] | 0) + 1;
 d = c[8971] | 0;
 e = c[8970] | 0;
 if ((d | 0) == (e | 0)) {
  Pe(1616, b, h) | 0;
  b = c[8967] | 0;
  c[8967] = b - 1;
  i = j;
  return;
 }
 f = c[8968] | 0;
 if (!f) {
  b = c[8967] | 0;
  c[8967] = b - 1;
  i = j;
  return;
 }
 g = f + (d << 2) | 0;
 e = f + (e << 2) | 0;
 while (1) {
  d = c[e >> 2] | 0;
  if (!d) {
   d = 10;
   break;
  }
  k = d + 4 | 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  Ec[c[(c[d >> 2] | 0) + 4 >> 2] & 63](d, 2, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) zc[c[c[d >> 2] >> 2] & 63](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) eb(); else if ((d | 0) == 12) {
  k = c[8967] | 0;
  c[8967] = k - 1;
  i = j;
  return;
 }
}

function ne(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[35864] & 1) != 0);
 c[8967] = (c[8967] | 0) + 1;
 d = c[8971] | 0;
 e = c[8970] | 0;
 if ((d | 0) == (e | 0)) {
  Pe(1616, b, h) | 0;
  b = c[8967] | 0;
  c[8967] = b - 1;
  i = j;
  return;
 }
 f = c[8968] | 0;
 if (!f) {
  b = c[8967] | 0;
  c[8967] = b - 1;
  i = j;
  return;
 }
 g = f + (d << 2) | 0;
 e = f + (e << 2) | 0;
 while (1) {
  d = c[e >> 2] | 0;
  if (!d) {
   d = 10;
   break;
  }
  k = d + 4 | 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  Ec[c[(c[d >> 2] | 0) + 4 >> 2] & 63](d, 3, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) zc[c[c[d >> 2] >> 2] & 63](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) eb(); else if ((d | 0) == 12) {
  k = c[8967] | 0;
  c[8967] = k - 1;
  i = j;
  return;
 }
}

function $e(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 g = d & 255;
 a : do if (!g) {
  e = b + (Ze(b) | 0) | 0;
  b = e;
  f = d & 255;
  e = a[e >> 0] | 0;
 } else {
  if (b & 3) {
   f = d & 255;
   do {
    e = a[b >> 0] | 0;
    if (e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 == f << 24 >> 24) break a;
    b = b + 1 | 0;
   } while ((b & 3 | 0) != 0);
  }
  f = $(g, 16843009) | 0;
  e = c[b >> 2] | 0;
  b : do if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) do {
   g = e ^ f;
   if ((g & -2139062144 ^ -2139062144) & g + -16843009 | 0) break b;
   b = b + 4 | 0;
   e = c[b >> 2] | 0;
  } while (!((e & -2139062144 ^ -2139062144) & e + -16843009 | 0)); while (0);
  f = d & 255;
  while (1) {
   e = a[b >> 0] | 0;
   if (e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 == f << 24 >> 24) break; else b = b + 1 | 0;
  }
 } while (0);
 return (e << 24 >> 24 == f << 24 >> 24 ? b : 0) | 0;
}

function Nd(a, b, e, f) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 g = a + 212 | 0;
 h = c[g >> 2] | 0;
 if ((h | 0) != 0 & (f | 0) > 0) i = 0; else return;
 do {
  if (!(c[e + (i << 2) >> 2] | 0)) {
   j = 4;
   break;
  }
  i = i + 1 | 0;
 } while ((i | 0) < (f | 0));
 if ((j | 0) == 4) {
  c[g >> 2] = 0;
  return;
 }
 m = c[h + 344 >> 2] | 0;
 k = b << 4;
 l = a + 304 | 0;
 g = a + 368 | 0;
 a = 0;
 do {
  j = c[e + (a << 2) >> 2] | 0;
  h = c[m + 3580 + (a + k << 2) >> 2] | 0;
  i = c[j + 748 >> 2] | 0;
  j = c[j + 768 + ((d[j + 765 >> 0] | 0) << 2) >> 2] | 0;
  b = ((i | 0) == 3553 ? l : g) + (h << 2) | 0;
  if ((c[b >> 2] | 0) != (j | 0)) {
   c[b >> 2] = j;
   Ib(h + 33984 | 0);
   Bb(i | 0, j | 0);
  }
  a = a + 1 | 0;
 } while ((a | 0) != (f | 0));
 return;
}

function Re(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) {
  if (!(Se(e) | 0)) {
   g = c[f >> 2] | 0;
   h = 5;
  }
 } else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  f = h;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   xc[c[e + 36 >> 2] & 63](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   h = d;
   while (1) {
    if (!h) {
     g = d;
     break b;
    }
    g = h + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else h = g;
   }
   if ((xc[c[e + 36 >> 2] & 63](e, b, h) | 0) >>> 0 < h >>> 0) break a;
   g = d - h | 0;
   b = b + h | 0;
   f = c[i >> 2] | 0;
  } else g = d; while (0);
  Af(f | 0, b | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
 } while (0);
 return;
}

function me(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 b = c[a >> 2] | 0;
 g = a + 8 | 0;
 if (!b) {
  h = a + 12 | 0;
  f = a + 4 | 0;
  c[a >> 2] = 0;
  c[f >> 2] = 0;
  c[g >> 2] = 0;
  c[h >> 2] = 0;
  return;
 }
 d = c[g >> 2] | 0;
 h = a + 12 | 0;
 e = c[h >> 2] | 0;
 if ((d | 0) < (e | 0)) {
  while (1) {
   f = b + (d << 2) | 0;
   b = c[f >> 2] | 0;
   if (b) {
    i = b + 4 | 0;
    e = c[i >> 2] | 0;
    c[i >> 2] = e - 1;
    if ((e | 0) == 1) zc[c[c[b >> 2] >> 2] & 63](b);
    c[f >> 2] = 0;
    e = c[h >> 2] | 0;
   }
   d = d + 1 | 0;
   if ((d | 0) >= (e | 0)) break;
   b = c[a >> 2] | 0;
  }
  b = c[a >> 2] | 0;
 }
 cf(b);
 i = h;
 h = a + 4 | 0;
 c[a >> 2] = 0;
 c[h >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function We(b, d) {
 b = b | 0;
 d = d | 0;
 do if (!b) b = 1; else {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  }
  if (!(c[8975] | 0)) b = 35944; else b = c[(Ef() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 84;
  b = -1;
 } while (0);
 return b | 0;
}

function ed() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 a = c[8946] | 0;
 d = a + 148 | 0;
 c[d >> 2] = (c[d >> 2] | 0) + 1;
 d = c[a + 628 >> 2] | 0;
 if (!d) {
  i = h;
  return;
 }
 e = c[a + 632 >> 2] | 0;
 if ((c[e + 296 >> 2] | 0) <= 0) {
  i = h;
  return;
 }
 b = e + 300 | 0;
 a = c[d + 604 >> 2] | 0;
 switch (c[e + 288 >> 2] | 0) {
 case 0:
  {
   Eb(a | 0, c[b >> 2] | 0, c[e + 304 >> 2] | 0);
   i = h;
   return;
  }
 case 2:
  {
   f = 5125;
   g = c[b >> 2] << 2;
   break;
  }
 case 1:
  {
   f = 5123;
   g = c[b >> 2] << 1;
   break;
  }
 default:
  {
   pe(21576, h);
   eb();
  }
 }
 Ua(a | 0, c[e + 304 >> 2] | 0, f | 0, g | 0);
 i = h;
 return;
}

function mf(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 a[b + 53 >> 0] = 1;
 do if ((c[b + 4 >> 2] | 0) == (e | 0)) {
  a[b + 52 >> 0] = 1;
  e = b + 16 | 0;
  g = c[e >> 2] | 0;
  if (!g) {
   c[e >> 2] = d;
   c[b + 24 >> 2] = f;
   c[b + 36 >> 2] = 1;
   if (!((f | 0) == 1 ? (c[b + 48 >> 2] | 0) == 1 : 0)) break;
   a[b + 54 >> 0] = 1;
   break;
  }
  if ((g | 0) != (d | 0)) {
   f = b + 36 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   a[b + 54 >> 0] = 1;
   break;
  }
  g = b + 24 | 0;
  e = c[g >> 2] | 0;
  if ((e | 0) == 2) {
   c[g >> 2] = f;
   e = f;
  }
  if ((e | 0) == 1 ? (c[b + 48 >> 2] | 0) == 1 : 0) a[b + 54 >> 0] = 1;
 } while (0);
 return;
}

function rf(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) {
   b = d + 28 | 0;
   if ((c[b >> 2] | 0) != 1) c[b >> 2] = f;
  }
 } else if ((b | 0) == (c[d >> 2] | 0)) {
  if ((c[d + 16 >> 2] | 0) != (e | 0)) {
   b = d + 20 | 0;
   if ((c[b >> 2] | 0) != (e | 0)) {
    c[d + 32 >> 2] = f;
    c[b >> 2] = e;
    f = d + 40 | 0;
    c[f >> 2] = (c[f >> 2] | 0) + 1;
    if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 2) a[d + 54 >> 0] = 1;
    c[d + 44 >> 2] = 4;
    break;
   }
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Jf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 f = i;
 i = i + 16 | 0;
 j = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 k = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 a = xf(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = D;
 Nf(a, b, xf(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, D, j) | 0;
 e = xf(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = D;
 i = f;
 return (D = d, e) | 0;
}

function Ve(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = i;
 i = i + 256 | 0;
 g = h;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  f = d - e | 0;
  Bf(g | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  e = c[a >> 2] | 0;
  d = (e & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   b = f;
   do {
    if (d) {
     Re(g, 256, a);
     e = c[a >> 2] | 0;
    }
    b = b + -256 | 0;
    d = (e & 32 | 0) == 0;
   } while (b >>> 0 > 255);
   if (d) f = f & 255; else break;
  } else if (!d) break;
  Re(g, f, a);
 } while (0);
 i = h;
 return;
}

function Ye(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) {
  a = a * 8988465674311579538646525.0e283;
  d = b + -1023 | 0;
  if ((d | 0) > 1023) {
   d = b + -2046 | 0;
   d = (d | 0) > 1023 ? 1023 : d;
   a = a * 8988465674311579538646525.0e283;
  }
 } else if ((b | 0) < -1022) {
  a = a * 2.2250738585072014e-308;
  d = b + 1022 | 0;
  if ((d | 0) < -1022) {
   d = b + 2044 | 0;
   d = (d | 0) < -1022 ? -1022 : d;
   a = a * 2.2250738585072014e-308;
  }
 } else d = b;
 d = Df(d + 1023 | 0, 0, 52) | 0;
 b = D;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function De(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = c[d >> 2] | 0;
 if (e | 0) {
  d = c[d + 8 >> 2] | 0;
  if ((d | 0) > 0) if ((d | 0) > 0 & (a[e >> 0] | 0) != 0) {
   f = bf(d + 9 | 0) | 0;
   c[b >> 2] = f;
   g = f;
   c[g >> 2] = 0;
   c[g + 4 >> 2] = 0;
   c[f >> 2] = 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[f + 4 >> 2] = d;
   f = f + 8 | 0;
   c[b + 4 >> 2] = f;
   Af(f | 0, e | 0, d | 0) | 0;
   a[f + d >> 0] = 0;
   return;
  } else {
   c[b >> 2] = 0;
   c[b + 4 >> 2] = 0;
   return;
  }
 }
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 return;
}

function of(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  b = d + 16 | 0;
  g = c[b >> 2] | 0;
  if (!g) {
   c[b >> 2] = e;
   c[d + 24 >> 2] = f;
   c[d + 36 >> 2] = 1;
   break;
  }
  if ((g | 0) != (e | 0)) {
   f = d + 36 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  if ((c[b >> 2] | 0) == 2) c[b >> 2] = f;
 } else {
  g = c[b + 8 >> 2] | 0;
  Ec[c[(c[g >> 2] | 0) + 28 >> 2] & 63](g, d, e, f);
 } while (0);
 return;
}

function Le(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 h = g;
 e = g + 20 | 0;
 c[h >> 2] = c[a + 60 >> 2];
 c[h + 4 >> 2] = 0;
 c[h + 8 >> 2] = b;
 c[h + 12 >> 2] = e;
 c[h + 16 >> 2] = d;
 b = Na(140, h | 0) | 0;
 if (b >>> 0 > 4294963200) {
  if (!(c[8975] | 0)) a = 35944; else a = c[(Ef() | 0) + 64 >> 2] | 0;
  c[a >> 2] = 0 - b;
  f = 7;
 } else if ((b | 0) < 0) f = 7; else a = c[e >> 2] | 0;
 if ((f | 0) == 7) {
  c[e >> 2] = -1;
  a = -1;
 }
 i = g;
 return a | 0;
}

function If(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = xf(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = D;
 a = f ^ j;
 b = e ^ i;
 return xf((Nf(h, g, xf(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, D, 0) | 0) ^ a | 0, D ^ b | 0, a | 0, b | 0) | 0;
}

function Af(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Ba(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Xe(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Cf(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +Xe(a * 18446744073709551616.0, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = f + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function Ze(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function Ue(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Mf(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = b;
  b = Lf(b | 0, c | 0, 10, 0) | 0;
  if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break; else c = D;
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function sf(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  b = d + 16 | 0;
  g = c[b >> 2] | 0;
  if (!g) {
   c[b >> 2] = e;
   c[d + 24 >> 2] = f;
   c[d + 36 >> 2] = 1;
   break;
  }
  if ((g | 0) != (e | 0)) {
   f = d + 36 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  if ((c[b >> 2] | 0) == 2) c[b >> 2] = f;
 } while (0);
 return;
}

function Bf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function re(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 se(b);
 ue(b);
 d = c[b + 4 >> 2] | 0;
 if (d | 0) {
  e = c[b + 12 >> 2] | 0;
  g = c[b + 16 >> 2] | 0;
  f = d + (g * 40 | 0) | 0;
  if ((e | 0) != (g | 0)) {
   d = d + (e * 40 | 0) | 0;
   do {
    if (a[d + 32 >> 0] | 0) {
     g = c[d + 24 >> 2] | 0;
     zc[c[(c[g >> 2] | 0) + 24 >> 2] & 63](g);
    }
    d = d + 40 | 0;
   } while ((d | 0) != (f | 0));
  }
 }
 se(b);
 ue(b);
 return;
}

function pd(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = bf(8) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[9111] | 0;
  c[9111] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Cc[b & 63]();
 }
 if ((d | 0) == 5) {
  a = xb(4) | 0;
  c[a >> 2] = 2192;
  lc(a | 0, 1152, 41);
 } else if ((d | 0) == 6) {
  c[b >> 2] = 1252;
  c[b + 4 >> 2] = c[a + 4 >> 2];
  return b | 0;
 }
 return 0;
}

function Se(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function Wc(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = bf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[9111] | 0;
  c[9111] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Cc[a & 63]();
 }
 if ((b | 0) == 5) {
  b = xb(4) | 0;
  c[b >> 2] = 2192;
  lc(b | 0, 1152, 41);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1216;
  return a | 0;
 }
 return 0;
}

function Me(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 49;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (ic(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Je(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Hf(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = $(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + ($(e, d) | 0) | 0;
 e = b >>> 16;
 b = $(e, f) | 0;
 return (D = (a >>> 16) + ($(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function Gf(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) >> 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) >> 0] | 0) + 24 | 0;
}

function Ie(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 c[b >> 2] = c[a + 60 >> 2];
 a = pb(6, b | 0) | 0;
 if (a >>> 0 > 4294963200) {
  if (!(c[8975] | 0)) b = 35944; else b = c[(Ef() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 0 - a;
  a = -1;
 }
 i = d;
 return a | 0;
}

function Oe(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 Af(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function lf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) mf(b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  Dc[c[(c[a >> 2] | 0) + 20 >> 2] & 63](a, b, d, e, f, g);
 }
 return;
}

function Pd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 d = i;
 i = i + 16 | 0;
 e = d + 8 | 0;
 a = d + 4 | 0;
 Ga(e | 0, a | 0, d | 0);
 b = c[8947] | 0;
 c[b + 132 >> 2] = c[e >> 2];
 c[b + 136 >> 2] = c[a >> 2];
 i = d;
 return 1;
}

function Qd() {
 var a = 0, b = 0;
 a = i;
 i = i + 32 | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 4 >> 2] = 1;
 c[b + 8 >> 2] = 1;
 c[b + 12 >> 2] = 46;
 c[b + 16 >> 2] = 0;
 xa(0, 0, b | 0) | 0;
 i = a;
 return;
}

function Rd() {
 var a = 0, b = 0;
 a = i;
 i = i + 32 | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 4 >> 2] = 1;
 c[b + 8 >> 2] = 1;
 c[b + 12 >> 2] = 46;
 c[b + 16 >> 2] = 0;
 hc(0, b | 0) | 0;
 i = a;
 return;
}

function Mf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Nf(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Kf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = Hf(e, f) | 0;
 a = D;
 return (D = ($(b, f) | 0) + ($(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function Ff(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}

function Df(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 D = a << c - 32;
 return 0;
}

function Cf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = 0;
 return b >>> c - 32 | 0;
}

function Uf(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 Dc[a & 63](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function wf() {}
function xf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function qf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) mf(b, d, e, f);
 return;
}

function yf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function Pf(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 yc[a & 63](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function Xd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = i;
 i = i + 16 | 0;
 d = a;
 c[d >> 2] = b;
 Zd(c[8962] | 0, 2216, d);
 i = a;
 return;
}

function le() {
 c[8968] = 0;
 c[8969] = 0;
 c[8970] = 0;
 c[8971] = 0;
 c[8972] = 16;
 c[8973] = 65536;
 La(47, 35872, n | 0) | 0;
 return;
}

function Tc() {
 c[8940] = 0;
 c[8941] = 0;
 c[8942] = 0;
 c[8943] = 0;
 c[8944] = 16;
 c[8945] = 65536;
 La(45, 35760, n | 0) | 0;
 return;
}

function Vf(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Ec[a & 63](b | 0, c | 0, d | 0, e | 0);
}

function Of(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return xc[a & 63](b | 0, c | 0, d | 0) | 0;
}

function ag(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(6);
}

function Lf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Nf(a, b, c, d, 0) | 0;
}

function qd(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1252;
 c[b + 4 >> 2] = c[a + 4 >> 2];
 return;
}

function ke() {
 var a = 0;
 a = c[8963] | 0;
 zc[c[(c[a >> 2] | 0) + 28 >> 2] & 63](a);
 return;
}
function Fc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Xf(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(1);
}

function Rf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Ac[a & 31](b | 0, c | 0);
}

function bg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(7);
}

function Wf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(0);
 return 0;
}

function Jc(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function Sf(a, b) {
 a = a | 0;
 b = b | 0;
 return Bc[a & 63](b | 0) | 0;
}
function $c(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1216;
 return;
}

function zf(a) {
 a = +a;
 return a >= 0.0 ? +N(a + .5) : +_(a - .5);
}

function Qf(a, b) {
 a = a | 0;
 b = b | 0;
 zc[a & 63](b | 0);
}

function Ic(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Zf(a, b) {
 a = a | 0;
 b = b | 0;
 ca(3);
}

function _f(a) {
 a = a | 0;
 ca(4);
 return 0;
}

function ie(a) {
 a = a | 0;
 ac();
 return 9;
}

function uf(a) {
 a = a | 0;
 cf(a);
 return;
}

function sd(a) {
 a = a | 0;
 cf(a);
 return;
}

function pf(a) {
 a = a | 0;
 cf(a);
 return;
}

function od(a) {
 a = a | 0;
 cf(a);
 return;
}

function gf(a) {
 a = a | 0;
 cf(a);
 return;
}

function bd(a) {
 a = a | 0;
 cf(a);
 return;
}

function Vc(a) {
 a = a | 0;
 cf(a);
 return;
}

function vf(a) {
 a = a | 0;
 return 35702;
}

function Tf(a) {
 a = a | 0;
 Cc[a & 63]();
}

function ge(a) {
 a = a | 0;
 return 5;
}

function fe(a) {
 a = a | 0;
 return 4;
}

function ee(a) {
 a = a | 0;
 return 3;
}

function de(a) {
 a = a | 0;
 return 2;
}

function ce(a) {
 a = a | 0;
 return 1;
}

function tf(a) {
 a = a | 0;
 return;
}

function rd(a) {
 a = a | 0;
 return;
}

function jf(a) {
 a = a | 0;
 return;
}

function hf(a) {
 a = a | 0;
 return;
}

function ff(a) {
 a = a | 0;
 return;
}

function ad(a) {
 a = a | 0;
 return;
}

function Uc(a) {
 a = a | 0;
 return;
}

function Ke(a) {
 a = a | 0;
 return;
}

function Yf(a) {
 a = a | 0;
 ca(2);
}

function Kc(a) {
 a = a | 0;
 D = a;
}

function Hc(a) {
 a = a | 0;
 i = a;
}

function Lc() {
 return D | 0;
}

function Gc() {
 return i | 0;
}

function Ef() {
 return 0;
}

function $f() {
 ca(5);
}

// EMSCRIPTEN_END_FUNCS

 var xc = [ Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Me, Le, Oe, Wf, Wf, Wf, Wf, kf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Pd, Wf, Wf, Je, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf, Wf ];
 var yc = [ Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, rf, Xf, Xf, Xf, nf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf, Xf ];
 var zc = [ Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, je, Uc, Vc, Yf, Yf, ad, bd, cd, od, Yf, Yf, rd, sd, td, Yf, Yf, Yf, Yf, Yf, Yf, Yf, ff, pf, hf, jf, Yf, Yf, Yf, Yf, gf, Yf, Yf, Yf, tf, uf, Yf, Yf, Mc, Yf, me, Ke, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf, Yf ];
 var Ac = [ Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, $c, Zf, Zf, Zf, Zf, Zf, qd, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf, Zf ];
 var Bc = [ _f, ce, de, ee, Qc, Oc, Rc, ie, _f, _f, _f, Wc, _f, _f, _f, _f, _f, pd, _f, _f, _f, _f, fe, ge, he, Ie, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, vf, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f, _f ];
 var Cc = [ $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, ke, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f, $f ];
 var Dc = [ ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, qf, ag, ag, ag, lf, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag, ag ];
 var Ec = [ bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, sf, bg, bg, bg, of, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg ];
 return {
  _i64Subtract: xf,
  _free: cf,
  _main: Nc,
  _enter_fullscreen: Qd,
  _pthread_self: Ef,
  _roundf: zf,
  _memset: Bf,
  _malloc: bf,
  _i64Add: yf,
  _memcpy: Af,
  _enter_soft_fullscreen: Rd,
  _bitshift64Lshr: Cf,
  _bitshift64Shl: Df,
  __GLOBAL__sub_I_GPUParticles_cc: Tc,
  __GLOBAL__sub_I_Log_cc: le,
  runPostSets: wf,
  stackAlloc: Fc,
  stackSave: Gc,
  stackRestore: Hc,
  establishStackSpace: Ic,
  setThrew: Jc,
  setTempRet0: Kc,
  getTempRet0: Lc,
  dynCall_iiii: Of,
  dynCall_viiiii: Pf,
  dynCall_vi: Qf,
  dynCall_vii: Rf,
  dynCall_ii: Sf,
  dynCall_v: Tf,
  dynCall_viiiiii: Uf,
  dynCall_viiii: Vf
 };
})


;