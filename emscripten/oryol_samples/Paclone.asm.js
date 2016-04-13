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
 var n = 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = global.NaN, s = global.Infinity;
 var t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0.0;
 var C = 0;
 var D = global.Math.floor;
 var E = global.Math.abs;
 var F = global.Math.sqrt;
 var G = global.Math.pow;
 var H = global.Math.cos;
 var I = global.Math.sin;
 var J = global.Math.tan;
 var K = global.Math.acos;
 var L = global.Math.asin;
 var M = global.Math.atan;
 var N = global.Math.atan2;
 var O = global.Math.exp;
 var P = global.Math.log;
 var Q = global.Math.ceil;
 var R = global.Math.imul;
 var S = global.Math.min;
 var T = global.Math.clz32;
 var U = env.abort;
 var V = env.assert;
 var W = env.invoke_iiii;
 var X = env.invoke_viiiii;
 var Y = env.invoke_vi;
 var Z = env.invoke_vii;
 var _ = env.invoke_ii;
 var $ = env.invoke_v;
 var aa = env.invoke_viiiiii;
 var ba = env.invoke_iii;
 var ca = env.invoke_viiii;
 var da = env._glClearStencil;
 var ea = env._glUseProgram;
 var fa = env._glUniformMatrix3fv;
 var ga = env._glUniformMatrix2fv;
 var ha = env._glStencilFunc;
 var ia = env._glUniformMatrix4fv;
 var ja = env._glGenRenderbuffers;
 var ka = env._alBufferData;
 var la = env._glDeleteProgram;
 var ma = env.__ZSt18uncaught_exceptionv;
 var na = env._glBindBuffer;
 var oa = env._glCreateProgram;
 var pa = env._emscripten_webgl_make_context_current;
 var qa = env._emscripten_set_touchmove_callback;
 var ra = env._emscripten_set_main_loop_timing;
 var sa = env._sbrk;
 var ta = env._glDisableVertexAttribArray;
 var ua = env._emscripten_memcpy_big;
 var va = env._emscripten_set_mousedown_callback;
 var wa = env._emscripten_set_touchstart_callback;
 var xa = env._glStencilOp;
 var ya = env._glUniform4f;
 var za = env._glUniform3f;
 var Aa = env._emscripten_get_canvas_size;
 var Ba = env._emscripten_request_fullscreen_strategy;
 var Ca = env._glGenBuffers;
 var Da = env._glShaderSource;
 var Ea = env._glFramebufferRenderbuffer;
 var Fa = env._pthread_cleanup_push;
 var Ga = env._alSourcePlay;
 var Ha = env._llvm_trap;
 var Ia = env._alGetString;
 var Ja = env._emscripten_set_devicemotion_callback;
 var Ka = env._pthread_cleanup_pop;
 var La = env._emscripten_set_keyup_callback;
 var Ma = env._alcCreateContext;
 var Na = env.__restoreHiddenElements;
 var Oa = env.___cxa_find_matching_catch;
 var Pa = env._glBindRenderbuffer;
 var Qa = env._glDrawElements;
 var Ra = env._glDepthMask;
 var Sa = env._glBufferSubData;
 var Ta = env._alcMakeContextCurrent;
 var Ua = env._glViewport;
 var Va = env._llvm_cttz_i32;
 var Wa = env._alSourcef;
 var Xa = env._glDeleteTextures;
 var Ya = env._glDepthFunc;
 var Za = env._glStencilOpSeparate;
 var _a = env._emscripten_set_canvas_size;
 var $a = env.___resumeException;
 var ab = env._alSourcei;
 var bb = env._alGenBuffers;
 var cb = env._nanosleep;
 var db = env._glBlendFuncSeparate;
 var eb = env._glEnable;
 var fb = env.___syscall140;
 var gb = env._glGenTextures;
 var hb = env._glGetIntegerv;
 var ib = env._glGetString;
 var jb = env.emscriptenWebGLGet;
 var kb = env._emscripten_set_mouseup_callback;
 var lb = env._emscripten_get_now;
 var mb = env._glAttachShader;
 var nb = env.__registerRestoreOldStyle;
 var ob = env.emscriptenWebGLGetTexPixelData;
 var pb = env.___syscall6;
 var qb = env._glBindFramebuffer;
 var rb = env.___syscall146;
 var sb = env._glGenFramebuffers;
 var tb = env._glUniform2f;
 var ub = env._alDeleteSources;
 var vb = env._glCullFace;
 var wb = env._emscripten_set_keypress_callback;
 var xb = env._glDeleteFramebuffers;
 var yb = env._glCheckFramebufferStatus;
 var zb = env._emscripten_webgl_create_context;
 var Ab = env._emscripten_set_deviceorientation_callback;
 var Bb = env.___cxa_allocate_exception;
 var Cb = env._glVertexAttribPointer;
 var Db = env._glCompressedTexImage2D;
 var Eb = env._glStencilMaskSeparate;
 var Fb = env._glClearDepthf;
 var Gb = env._glClearColor;
 var Hb = env._glBindTexture;
 var Ib = env._glUniform1f;
 var Jb = env._glUniform1i;
 var Kb = env._alcDestroyContext;
 var Lb = env._glDrawArrays;
 var Mb = env._glCreateShader;
 var Nb = env._emscripten_webgl_init_context_attributes;
 var Ob = env._glActiveTexture;
 var Pb = env.__setLetterbox;
 var Qb = env._alcGetString;
 var Rb = env._glFrontFace;
 var Sb = env._glCompileShader;
 var Tb = env._emscripten_exit_pointerlock;
 var Ub = env._alcCloseDevice;
 var Vb = env._glEnableVertexAttribArray;
 var Wb = env._abort;
 var Xb = env._glDeleteBuffers;
 var Yb = env._glBufferData;
 var Zb = env._glTexImage2D;
 var _b = env._glDeleteShader;
 var $b = env._glGetProgramiv;
 var ac = env._emscripten_request_pointerlock;
 var bc = env.emscriptenWebGLComputeImageSize;
 var cc = env._emscripten_set_keydown_callback;
 var dc = env.___gxx_personality_v0;
 var ec = env._emscripten_set_touchcancel_callback;
 var fc = env._emscripten_set_mousemove_callback;
 var gc = env._glDeleteRenderbuffers;
 var hc = env._usleep;
 var ic = env._glLinkProgram;
 var jc = env._emscripten_set_touchend_callback;
 var kc = env._glGetShaderiv;
 var lc = env._glGetUniformLocation;
 var mc = env._emscripten_cancel_main_loop;
 var nc = env._glClear;
 var oc = env._glUniform4fv;
 var pc = env._glRenderbufferStorage;
 var qc = env.__softFullscreenResizeWebGLRenderTarget;
 var rc = env._glBindAttribLocation;
 var sc = env._emscripten_webgl_destroy_context;
 var tc = env._alDeleteBuffers;
 var uc = env._glVertexAttribDivisor;
 var vc = env._emscripten_enter_soft_fullscreen;
 var wc = env._emscripten_set_wheel_callback;
 var xc = env.___syscall54;
 var yc = env._glFramebufferTexture2D;
 var zc = env._emscripten_set_main_loop;
 var Ac = env._alGenSources;
 var Bc = env._alcOpenDevice;
 var Cc = env.___cxa_throw;
 var Dc = env._glColorMask;
 var Ec = env.__hideEverythingExceptGivenElement;
 var Fc = env._glDisable;
 var Gc = env._glTexParameteri;
 var Hc = env._glBlendColor;
 var Ic = env._glStencilMask;
 var Jc = env._glBlendEquationSeparate;
 var Kc = env._glStencilFuncSeparate;
 var Lc = env._emscripten_do_request_fullscreen;
 var Mc = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function cd(f) {
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ia = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, ra = 0, sa = 0, ta = 0, ua = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Fa = 0, Ga = 0, Ha = 0, Ka = 0, Na = 0, Oa = 0, Qa = 0, Sa = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Za = 0, $a = 0, ab = 0, bb = 0, cb = 0, fb = 0, jb = 0, lb = 0, mb = 0, nb = 0, ob = 0, pb = 0, rb = 0, tb = 0, ub = 0, xb = 0, Bb = 0, Cb = 0, Db = 0, Eb = 0, Fb = 0, Gb = 0, Ib = 0, Jb = 0, Kb = 0, Lb = 0, Mb = 0, Pb = 0, Sb = 0, Tb = 0, Ub = 0, Vb = 0, Xb = 0, Yb = 0, _b = 0, $b = 0, ac = 0, bc = 0, dc = 0, gc = 0;
 dc = i;
 i = i + 10400 | 0;
 cb = dc + 10272 | 0;
 Za = dc + 10264 | 0;
 Da = dc + 10256 | 0;
 Ca = dc + 10248 | 0;
 ya = dc + 10240 | 0;
 sa = dc + 10232 | 0;
 Xa = dc + 10224 | 0;
 Wa = dc + 10216 | 0;
 Ua = dc + 10208 | 0;
 Sa = dc + 10200 | 0;
 Qa = dc + 10192 | 0;
 Oa = dc + 10184 | 0;
 za = dc + 10176 | 0;
 ua = dc + 10168 | 0;
 ta = dc + 10160 | 0;
 oa = dc + 10152 | 0;
 na = dc + 10144 | 0;
 ma = dc + 10136 | 0;
 la = dc + 10128 | 0;
 ka = dc + 10120 | 0;
 ia = dc + 10112 | 0;
 ga = dc + 10104 | 0;
 fa = dc + 10096 | 0;
 ea = dc + 10088 | 0;
 T = dc + 10080 | 0;
 U = dc + 10072 | 0;
 F = dc + 10064 | 0;
 I = dc + 10056 | 0;
 Cb = dc + 10008 | 0;
 Db = dc + 9680 | 0;
 Eb = dc + 8992 | 0;
 Fb = dc + 8984 | 0;
 Gb = dc + 8936 | 0;
 Ib = dc + 8912 | 0;
 Jb = dc + 8904 | 0;
 Kb = dc + 8856 | 0;
 D = dc + 8848 | 0;
 E = dc + 8840 | 0;
 A = dc + 8832 | 0;
 B = dc + 8824 | 0;
 y = dc + 8816 | 0;
 z = dc + 8808 | 0;
 w = dc + 8800 | 0;
 x = dc + 8792 | 0;
 Lb = dc + 8768 | 0;
 Mb = dc + 8496 | 0;
 Pb = dc + 8448 | 0;
 Sb = dc + 8424 | 0;
 Tb = dc + 8224 | 0;
 Ub = dc + 8176 | 0;
 Vb = dc + 8152 | 0;
 Xb = dc + 5096 | 0;
 Yb = dc + 5048 | 0;
 _b = dc + 4360 | 0;
 $b = dc + 4344 | 0;
 ac = dc + 4296 | 0;
 bc = dc + 1224 | 0;
 V = dc + 10284 | 0;
 da = dc + 10280 | 0;
 ra = dc + 528 | 0;
 bb = dc + 8144 | 0;
 ob = dc + 336 | 0;
 fb = dc + 4352 | 0;
 pb = dc + 328 | 0;
 nb = dc + 1248 | 0;
 xb = dc;
 ub = dc + 1216 | 0;
 c[f + 411416 >> 2] = 0;
 a : do if (!0) {
  j = 137032;
  Bb = 4;
 } else {
  j = 137032;
  l = 137032;
  while (1) {
   if (!(a[j >> 0] | 0)) {
    j = l;
    break a;
   }
   j = j + 1 | 0;
   l = j;
   if (!(l & 3)) {
    Bb = 4;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 4) {
  while (1) {
   l = c[j >> 2] | 0;
   if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
  }
  if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
 }
 j = j - 137032 | 0;
 if ((j | 0) > 0) {
  ba = yg(j + 9 | 0) | 0;
  tb = ba;
  c[tb >> 2] = 0;
  c[tb + 4 >> 2] = 0;
  c[ba >> 2] = 0;
  c[ba >> 2] = (c[ba >> 2] | 0) + 1;
  c[ba + 4 >> 2] = j;
  tb = ba + 8 | 0;
  c[da >> 2] = tb;
  Rg(tb | 0, 137032, j | 0) | 0;
  a[tb + j >> 0] = 0;
 } else {
  c[da >> 2] = 0;
  ba = 0;
 }
 c[V >> 2] = 640;
 r = V + 4 | 0;
 c[r >> 2] = 400;
 t = V + 8 | 0;
 c[t >> 2] = 0;
 u = V + 12 | 0;
 c[u >> 2] = 12;
 v = V + 16 | 0;
 c[v >> 2] = 1;
 p = V + 20 | 0;
 a[p >> 0] = 1;
 q = V + 24 | 0;
 c[q >> 2] = 1;
 ca = V + 28 | 0;
 b : do if (!0) {
  j = 151232;
  Bb = 15;
 } else {
  j = 151232;
  l = 151232;
  while (1) {
   if (!(a[j >> 0] | 0)) {
    j = l;
    break b;
   }
   j = j + 1 | 0;
   l = j;
   if (!(l & 3)) {
    Bb = 15;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 15) {
  while (1) {
   l = c[j >> 2] | 0;
   if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
  }
  if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
 }
 j = j - 151232 | 0;
 if ((j | 0) > 0) {
  tb = yg(j + 9 | 0) | 0;
  c[ca >> 2] = tb;
  aa = tb;
  c[aa >> 2] = 0;
  c[aa + 4 >> 2] = 0;
  c[tb >> 2] = 0;
  c[tb >> 2] = (c[tb >> 2] | 0) + 1;
  tb = c[ca >> 2] | 0;
  c[tb + 4 >> 2] = j;
  tb = tb + 8 | 0;
  aa = V + 32 | 0;
  c[aa >> 2] = tb;
  Rg(tb | 0, 151232, j | 0) | 0;
  a[(c[aa >> 2] | 0) + j >> 0] = 0;
  aa = ca;
  j = c[ca >> 2] | 0;
 } else {
  c[ca >> 2] = 0;
  c[V + 32 >> 2] = 0;
  aa = ca;
  j = 0;
 }
 g[V + 36 >> 2] = 0.0;
 g[V + 40 >> 2] = 0.0;
 g[V + 44 >> 2] = 0.0;
 g[V + 48 >> 2] = 1.0;
 g[V + 52 >> 2] = 1.0;
 a[V + 56 >> 0] = 0;
 a[V + 57 >> 0] = 3;
 a[V + 60 >> 0] = 0;
 _ = V + 64 | 0;
 c[_ >> 2] = 256;
 $ = V + 68 | 0;
 c[$ >> 2] = 256;
 c[V + 72 >> 2] = 4194304;
 c[V + 76 >> 2] = 65536;
 c[V + 80 >> 2] = 4096;
 X = V + 84 | 0;
 c[X >> 2] = 128;
 c[V + 100 >> 2] = 0;
 S = V + 88 | 0;
 c[S >> 2] = 128;
 c[V + 104 >> 2] = 0;
 W = V + 92 | 0;
 c[W >> 2] = 128;
 c[V + 108 >> 2] = 0;
 Y = V + 96 | 0;
 c[Y >> 2] = 128;
 c[V + 112 >> 2] = 0;
 c[V >> 2] = 448;
 c[r >> 2] = 576;
 a[p >> 0] = 1;
 if (j | 0) {
  tb = c[j >> 2] | 0;
  c[j >> 2] = tb - 1;
  if ((tb | 0) == 1) {
   zg(c[ca >> 2] | 0);
   c[aa >> 2] = 0;
   j = V + 32 | 0;
   c[j >> 2] = 0;
  } else j = V + 32 | 0;
  c[aa >> 2] = 0;
  c[j >> 2] = 0;
 }
 c[ca >> 2] = ba;
 Z = V + 32 | 0;
 c[Z >> 2] = c[da >> 2];
 if (ba | 0) {
  tb = ba;
  c[tb >> 2] = (c[tb >> 2] | 0) + 1;
 }
 m = yg(1728) | 0;
 Xg(m | 0, 0, 1728) | 0;
 ff(m);
 j = m + 160 | 0;
 G = m + 116 | 0;
 H = G + 44 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 ff(j);
 J = m + 276 | 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 c[J + 12 >> 2] = 0;
 c[J + 16 >> 2] = 0;
 c[J + 20 >> 2] = 0;
 c[J + 24 >> 2] = 0;
 c[m + 304 >> 2] = 12;
 c[m + 308 >> 2] = 1;
 a[m + 312 >> 0] = 1;
 c[m + 316 >> 2] = 1;
 J = m + 320 | 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 c[J + 12 >> 2] = 0;
 c[J + 16 >> 2] = 0;
 c[J + 20 >> 2] = 0;
 c[J + 24 >> 2] = 0;
 c[m + 348 >> 2] = 16;
 c[m + 352 >> 2] = 65536;
 a[m + 356 >> 0] = 0;
 J = m + 360 | 0;
 K = m + 392 | 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 c[J + 12 >> 2] = 0;
 c[J + 16 >> 2] = 0;
 c[J + 20 >> 2] = 0;
 c[J + 24 >> 2] = 0;
 a[J + 28 >> 0] = 0;
 c[K >> 2] = 0;
 c[K + 4 >> 2] = 0;
 c[K + 8 >> 2] = 0;
 c[K + 12 >> 2] = 0;
 c[K + 16 >> 2] = 0;
 c[42823] = j;
 a[m + 416 >> 0] = 0;
 K = m + 420 | 0;
 J = m + 452 | 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 c[J + 12 >> 2] = 0;
 c[J + 16 >> 2] = 0;
 c[J + 20 >> 2] = 0;
 c[J + 24 >> 2] = 0;
 c[K >> 2] = 0;
 c[K + 4 >> 2] = 0;
 c[K + 8 >> 2] = 0;
 c[K + 12 >> 2] = 0;
 c[K + 16 >> 2] = 0;
 c[K + 20 >> 2] = 0;
 c[K + 24 >> 2] = 0;
 a[K + 28 >> 0] = 0;
 c[m + 480 >> 2] = 12;
 c[m + 484 >> 2] = 1;
 a[m + 488 >> 0] = 1;
 c[m + 492 >> 2] = 1;
 c[m + 496 >> 2] = 0;
 c[m + 500 >> 2] = 0;
 ff(m + 504 | 0);
 K = m + 620 | 0;
 J = m + 640 | 0;
 L = J;
 c[L >> 2] = 0;
 c[L + 4 >> 2] = 0;
 c[K >> 2] = 0;
 c[K + 4 >> 2] = 0;
 c[K + 8 >> 2] = 0;
 c[K + 12 >> 2] = 0;
 c[J >> 2] = 2013282306;
 b[J + 4 >> 1] = 192;
 b[m + 648 >> 1] = 28672;
 b[m + 650 >> 1] = 28672;
 J = m + 652 | 0;
 c[J >> 2] = 0;
 b[J >> 1] = 32647;
 b[m + 654 >> 1] = 255;
 b[m + 656 >> 1] = 296;
 J = m + 660 | 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 c[J + 12 >> 2] = 0;
 g[m + 676 >> 2] = 1.0;
 g[m + 680 >> 2] = 1.0;
 g[m + 684 >> 2] = 1.0;
 g[m + 688 >> 2] = 1.0;
 J = m + 856 | 0;
 K = m + 872 | 0;
 L = m + 888 | 0;
 M = m + 904 | 0;
 N = m + 920 | 0;
 O = m + 936 | 0;
 P = m + 952 | 0;
 Q = m + 968 | 0;
 jb = m + 984 | 0;
 lb = m + 1e3 | 0;
 mb = m + 1016 | 0;
 rb = m + 1032 | 0;
 tb = m + 1048 | 0;
 H = m + 1064 | 0;
 G = m + 1080 | 0;
 j = m + 1184 | 0;
 Xg(m + 692 | 0, 0, 163) | 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 b[J + 12 >> 1] = 0;
 a[J + 14 >> 0] = 0;
 c[K >> 2] = 0;
 c[K + 4 >> 2] = 0;
 c[K + 8 >> 2] = 0;
 b[K + 12 >> 1] = 0;
 a[K + 14 >> 0] = 0;
 c[L >> 2] = 0;
 c[L + 4 >> 2] = 0;
 c[L + 8 >> 2] = 0;
 b[L + 12 >> 1] = 0;
 a[L + 14 >> 0] = 0;
 c[M >> 2] = 0;
 c[M + 4 >> 2] = 0;
 c[M + 8 >> 2] = 0;
 b[M + 12 >> 1] = 0;
 a[M + 14 >> 0] = 0;
 c[N >> 2] = 0;
 c[N + 4 >> 2] = 0;
 c[N + 8 >> 2] = 0;
 b[N + 12 >> 1] = 0;
 a[N + 14 >> 0] = 0;
 c[O >> 2] = 0;
 c[O + 4 >> 2] = 0;
 c[O + 8 >> 2] = 0;
 b[O + 12 >> 1] = 0;
 a[O + 14 >> 0] = 0;
 c[P >> 2] = 0;
 c[P + 4 >> 2] = 0;
 c[P + 8 >> 2] = 0;
 b[P + 12 >> 1] = 0;
 a[P + 14 >> 0] = 0;
 c[Q >> 2] = 0;
 c[Q + 4 >> 2] = 0;
 c[Q + 8 >> 2] = 0;
 b[Q + 12 >> 1] = 0;
 a[Q + 14 >> 0] = 0;
 c[jb >> 2] = 0;
 c[jb + 4 >> 2] = 0;
 c[jb + 8 >> 2] = 0;
 b[jb + 12 >> 1] = 0;
 a[jb + 14 >> 0] = 0;
 c[lb >> 2] = 0;
 c[lb + 4 >> 2] = 0;
 c[lb + 8 >> 2] = 0;
 b[lb + 12 >> 1] = 0;
 a[lb + 14 >> 0] = 0;
 c[mb >> 2] = 0;
 c[mb + 4 >> 2] = 0;
 c[mb + 8 >> 2] = 0;
 b[mb + 12 >> 1] = 0;
 a[mb + 14 >> 0] = 0;
 c[rb >> 2] = 0;
 c[rb + 4 >> 2] = 0;
 c[rb + 8 >> 2] = 0;
 b[rb + 12 >> 1] = 0;
 a[rb + 14 >> 0] = 0;
 c[tb >> 2] = 0;
 c[tb + 4 >> 2] = 0;
 c[tb + 8 >> 2] = 0;
 b[tb + 12 >> 1] = 0;
 a[tb + 14 >> 0] = 0;
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
 G = m + 1096 | 0;
 H = G + 88 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 c[j >> 2] = 16;
 c[m + 1188 >> 2] = 65536;
 a[m + 1192 >> 0] = 0;
 j = m + 1196 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[m + 1212 >> 2] = 16;
 c[m + 1216 >> 2] = 65536;
 j = m + 1220 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[m + 1236 >> 2] = 16;
 c[m + 1240 >> 2] = 65536;
 a[m + 1244 >> 0] = 0;
 j = m + 1248 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[m + 1264 >> 2] = 16;
 c[m + 1268 >> 2] = 65536;
 a[m + 1272 >> 0] = 0;
 c[m + 1276 >> 2] = 0;
 a[m + 1280 >> 0] = 0;
 j = m + 1284 | 0;
 l = m + 1344 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[l + 16 >> 2] = 0;
 c[l + 20 >> 2] = 0;
 c[l + 24 >> 2] = 0;
 a[l + 28 >> 0] = 0;
 l = m + 1376 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[l + 16 >> 2] = 0;
 c[l + 20 >> 2] = 0;
 c[l + 24 >> 2] = 0;
 a[l + 28 >> 0] = 0;
 l = m + 1408 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[l + 16 >> 2] = 0;
 c[l + 20 >> 2] = 0;
 c[l + 24 >> 2] = 0;
 a[l + 28 >> 0] = 0;
 a[m + 1440 >> 0] = 0;
 c[m + 1444 >> 2] = 0;
 c[m + 1448 >> 2] = 0;
 l = m + 1452 | 0;
 G = j;
 H = G + 56 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 a[j + 56 >> 0] = 0;
 b[l >> 1] = 255;
 l = m + 1456 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1472 >> 2] = 16;
 c[m + 1476 >> 2] = 65536;
 l = m + 1480 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1496 >> 2] = 16;
 c[m + 1500 >> 2] = 65536;
 a[m + 1504 >> 0] = 0;
 c[m + 1508 >> 2] = 0;
 c[m + 1512 >> 2] = 0;
 b[m + 1516 >> 1] = 255;
 l = m + 1520 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1536 >> 2] = 16;
 c[m + 1540 >> 2] = 65536;
 l = m + 1544 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1560 >> 2] = 16;
 c[m + 1564 >> 2] = 65536;
 a[m + 1568 >> 0] = 0;
 c[m + 1572 >> 2] = 0;
 c[m + 1576 >> 2] = 0;
 b[m + 1580 >> 1] = 255;
 l = m + 1584 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1600 >> 2] = 16;
 c[m + 1604 >> 2] = 65536;
 l = m + 1608 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1624 >> 2] = 16;
 c[m + 1628 >> 2] = 65536;
 a[m + 1632 >> 0] = 0;
 c[m + 1636 >> 2] = 0;
 c[m + 1640 >> 2] = 0;
 b[m + 1644 >> 1] = 255;
 l = m + 1648 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1664 >> 2] = 16;
 c[m + 1668 >> 2] = 65536;
 l = m + 1672 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[m + 1688 >> 2] = 16;
 c[m + 1692 >> 2] = 65536;
 l = m + 1696 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[l + 16 >> 2] = 0;
 c[m + 1716 >> 2] = 16;
 c[m + 1720 >> 2] = 65536;
 c[42822] = m;
 c[m >> 2] = c[V >> 2];
 c[m + 4 >> 2] = c[V + 4 >> 2];
 c[m + 8 >> 2] = c[V + 8 >> 2];
 c[m + 12 >> 2] = c[V + 12 >> 2];
 c[m + 16 >> 2] = c[V + 16 >> 2];
 c[m + 20 >> 2] = c[V + 20 >> 2];
 c[m + 24 >> 2] = c[V + 24 >> 2];
 l = m + 28 | 0;
 if ((l | 0) != (ca | 0)) {
  j = c[l >> 2] | 0;
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) {
    zg(c[l >> 2] | 0);
    c[l >> 2] = 0;
    j = m + 32 | 0;
    c[j >> 2] = 0;
   } else j = m + 32 | 0;
   c[l >> 2] = 0;
   c[j >> 2] = 0;
  }
  j = c[ca >> 2] | 0;
  c[l >> 2] = j;
  c[m + 32 >> 2] = c[Z >> 2];
  if (j | 0) {
   tb = j;
   c[tb >> 2] = (c[tb >> 2] | 0) + 1;
  }
 }
 J = V + 36 | 0;
 G = m + 36 | 0;
 s = J;
 H = G + 80 | 0;
 do {
  c[G >> 2] = c[s >> 2];
  G = G + 4 | 0;
  s = s + 4 | 0;
 } while ((G | 0) < (H | 0));
 o = c[42822] | 0;
 K = o + 160 | 0;
 L = o + 416 | 0;
 M = o + 1168 | 0;
 N = o + 1440 | 0;
 O = o + 1504 | 0;
 P = o + 1568 | 0;
 Q = o + 1632 | 0;
 l = o + 160 | 0;
 a[o + 388 >> 0] = 1;
 c[l >> 2] = c[V >> 2];
 c[l + 4 >> 2] = c[V + 4 >> 2];
 c[l + 8 >> 2] = c[V + 8 >> 2];
 c[l + 12 >> 2] = c[V + 12 >> 2];
 c[l + 16 >> 2] = c[V + 16 >> 2];
 c[l + 20 >> 2] = c[V + 20 >> 2];
 c[l + 24 >> 2] = c[V + 24 >> 2];
 l = o + 188 | 0;
 if ((l | 0) != (ca | 0)) {
  j = c[l >> 2] | 0;
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) {
    zg(c[l >> 2] | 0);
    c[l >> 2] = 0;
    j = o + 192 | 0;
    c[j >> 2] = 0;
   } else j = o + 192 | 0;
   c[l >> 2] = 0;
   c[j >> 2] = 0;
  }
  j = c[ca >> 2] | 0;
  c[l >> 2] = j;
  c[o + 192 >> 2] = c[Z >> 2];
  if (j | 0) {
   tb = j;
   c[tb >> 2] = (c[tb >> 2] | 0) + 1;
  }
 }
 G = o + 196 | 0;
 s = J;
 H = G + 80 | 0;
 do {
  c[G >> 2] = c[s >> 2];
  G = G + 4 | 0;
  s = s + 4 | 0;
 } while ((G | 0) < (H | 0));
 c[Mb >> 2] = 0;
 c[Mb + 4 >> 2] = 0;
 c[Mb + 8 >> 2] = 0;
 c[Mb + 12 >> 2] = 0;
 c[Mb + 16 >> 2] = 0;
 c[Mb + 20 >> 2] = 0;
 l = Mb + 40 | 0;
 c[l >> 2] = 1;
 m = Mb + 44 | 0;
 c[m >> 2] = 0;
 n = Mb + 48 | 0;
 c[n >> 2] = 0;
 tb = c[V >> 2] | 0;
 c[Mb >> 2] = tb;
 j = c[r >> 2] | 0;
 c[Mb + 4 >> 2] = j;
 c[Mb + 8 >> 2] = 0;
 c[Mb + 12 >> 2] = 0;
 c[Mb + 16 >> 2] = tb;
 c[Mb + 20 >> 2] = j;
 c[Mb + 24 >> 2] = c[t >> 2];
 c[Mb + 28 >> 2] = c[u >> 2];
 c[Mb + 32 >> 2] = c[v >> 2];
 a[Mb + 36 >> 0] = a[p >> 0] | 0;
 j = c[ca >> 2] | 0;
 c[m >> 2] = j;
 c[n >> 2] = c[Z >> 2];
 if (j | 0) {
  tb = j;
  c[tb >> 2] = (c[tb >> 2] | 0) + 1;
 }
 c[l >> 2] = c[q >> 2];
 G = o + 276 | 0;
 s = Mb;
 H = G + 44 | 0;
 do {
  c[G >> 2] = c[s >> 2];
  G = G + 4 | 0;
  s = s + 4 | 0;
 } while ((G | 0) < (H | 0));
 l = o + 320 | 0;
 if ((l | 0) == (m | 0)) {
  j = c[m >> 2] | 0;
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) {
    zg(c[m >> 2] | 0);
    c[m >> 2] = 0;
    c[n >> 2] = 0;
   }
   c[m >> 2] = 0;
   c[n >> 2] = 0;
  }
 } else {
  j = c[l >> 2] | 0;
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) {
    zg(c[l >> 2] | 0);
    c[l >> 2] = 0;
    j = o + 324 | 0;
    c[j >> 2] = 0;
   } else j = o + 324 | 0;
   c[l >> 2] = 0;
   c[j >> 2] = 0;
  }
  c[l >> 2] = c[m >> 2];
  c[o + 324 >> 2] = c[n >> 2];
  c[m >> 2] = 0;
  c[n >> 2] = 0;
 }
 c[o + 360 >> 2] = L;
 c[o + 364 >> 2] = K;
 c[o + 368 >> 2] = M;
 c[o + 372 >> 2] = N;
 c[o + 376 >> 2] = O;
 c[o + 380 >> 2] = P;
 c[o + 384 >> 2] = Q;
 c[o + 392 >> 2] = c[o + 292 >> 2];
 c[o + 396 >> 2] = c[o + 296 >> 2];
 _a(c[V >> 2] | 0, c[r >> 2] | 0);
 Nb(Mb | 0);
 switch (c[t >> 2] | 0) {
 case 4:
 case 2:
 case 0:
 case 6:
 case 5:
  {
   j = 1;
   break;
  }
 case 12:
  {
   j = 0;
   break;
  }
 default:
  j = 0;
 }
 c[Mb >> 2] = j;
 tb = c[u >> 2] | 0;
 rb = (tb + -11 | 0) >>> 0 < 2 & 1;
 c[Mb + 4 >> 2] = rb;
 tb = (tb | 0) == 12 & 1;
 c[Mb + 8 >> 2] = tb;
 n = (c[v >> 2] | 0) > 1 & 1;
 c[Mb + 12 >> 2] = n;
 c[Mb + 16 >> 2] = 0;
 c[Mb + 20 >> 2] = 0;
 c[Lb >> 2] = j;
 c[Lb + 4 >> 2] = rb;
 c[Lb + 8 >> 2] = tb;
 c[Lb + 12 >> 2] = n;
 ge(152105, Lb);
 n = zb(0, Mb | 0) | 0;
 c[o + 408 >> 2] = n;
 pa(n | 0) | 0;
 hb(3379, 171296);
 hb(34076, 171300);
 hb(3386, 171304);
 hb(34921, 171312);
 hb(35661, 171324);
 hb(35660, 171328);
 hb(36347, 171316);
 hb(36349, 171332);
 n = ib(7938) | 0;
 if (!n) he(152486, w); else {
  m = n;
  c : do if (!(m & 3)) {
   j = n;
   Bb = 66;
  } else {
   j = n;
   l = m;
   while (1) {
    if (!(a[j >> 0] | 0)) {
     j = l;
     break c;
    }
    j = j + 1 | 0;
    l = j;
    if (!(l & 3)) {
     Bb = 66;
     break;
    }
   }
  } while (0);
  if ((Bb | 0) == 66) {
   while (1) {
    l = c[j >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  j = j - m | 0;
  if ((j | 0) > 0 & (a[n >> 0] | 0) != 0) {
   tb = yg(j + 9 | 0) | 0;
   l = tb;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[tb >> 2] = 0;
   c[tb >> 2] = (c[tb >> 2] | 0) + 1;
   c[tb + 4 >> 2] = j;
   l = tb + 8 | 0;
   Rg(l | 0, n | 0, j | 0) | 0;
   a[l + j >> 0] = 0;
   j = tb;
  } else {
   j = 0;
   l = 0;
  }
  c[x >> 2] = 152475;
  c[x + 4 >> 2] = (l | 0) == 0 ? 171852 : l;
  ge(152467, x);
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) zg(j);
  }
 }
 n = ib(7936) | 0;
 if (!n) he(152486, y); else {
  m = n;
  d : do if (!(m & 3)) {
   j = n;
   Bb = 81;
  } else {
   j = n;
   l = m;
   while (1) {
    if (!(a[j >> 0] | 0)) {
     j = l;
     break d;
    }
    j = j + 1 | 0;
    l = j;
    if (!(l & 3)) {
     Bb = 81;
     break;
    }
   }
  } while (0);
  if ((Bb | 0) == 81) {
   while (1) {
    l = c[j >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  j = j - m | 0;
  if ((j | 0) > 0 & (a[n >> 0] | 0) != 0) {
   tb = yg(j + 9 | 0) | 0;
   l = tb;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[tb >> 2] = 0;
   c[tb >> 2] = (c[tb >> 2] | 0) + 1;
   c[tb + 4 >> 2] = j;
   l = tb + 8 | 0;
   Rg(l | 0, n | 0, j | 0) | 0;
   a[l + j >> 0] = 0;
   j = tb;
  } else {
   j = 0;
   l = 0;
  }
  c[z >> 2] = 152521;
  c[z + 4 >> 2] = (l | 0) == 0 ? 171852 : l;
  ge(152467, z);
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) zg(j);
  }
 }
 n = ib(7937) | 0;
 if (!n) he(152486, A); else {
  m = n;
  e : do if (!(m & 3)) {
   j = n;
   Bb = 96;
  } else {
   j = n;
   l = m;
   while (1) {
    if (!(a[j >> 0] | 0)) {
     j = l;
     break e;
    }
    j = j + 1 | 0;
    l = j;
    if (!(l & 3)) {
     Bb = 96;
     break;
    }
   }
  } while (0);
  if ((Bb | 0) == 96) {
   while (1) {
    l = c[j >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  j = j - m | 0;
  if ((j | 0) > 0 & (a[n >> 0] | 0) != 0) {
   tb = yg(j + 9 | 0) | 0;
   l = tb;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[tb >> 2] = 0;
   c[tb >> 2] = (c[tb >> 2] | 0) + 1;
   c[tb + 4 >> 2] = j;
   l = tb + 8 | 0;
   Rg(l | 0, n | 0, j | 0) | 0;
   a[l + j >> 0] = 0;
   j = tb;
  } else {
   j = 0;
   l = 0;
  }
  c[B >> 2] = 152531;
  c[B + 4 >> 2] = (l | 0) == 0 ? 171852 : l;
  ge(152467, B);
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) zg(j);
  }
 }
 n = ib(35724) | 0;
 if (!n) he(152486, D); else {
  m = n;
  f : do if (!(m & 3)) {
   j = n;
   Bb = 111;
  } else {
   j = n;
   l = m;
   while (1) {
    if (!(a[j >> 0] | 0)) {
     j = l;
     break f;
    }
    j = j + 1 | 0;
    l = j;
    if (!(l & 3)) {
     Bb = 111;
     break;
    }
   }
  } while (0);
  if ((Bb | 0) == 111) {
   while (1) {
    l = c[j >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  j = j - m | 0;
  if ((j | 0) > 0 & (a[n >> 0] | 0) != 0) {
   tb = yg(j + 9 | 0) | 0;
   l = tb;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[tb >> 2] = 0;
   c[tb >> 2] = (c[tb >> 2] | 0) + 1;
   c[tb + 4 >> 2] = j;
   l = tb + 8 | 0;
   Rg(l | 0, n | 0, j | 0) | 0;
   a[l + j >> 0] = 0;
   j = tb;
  } else {
   j = 0;
   l = 0;
  }
  c[E >> 2] = 152543;
  c[E + 4 >> 2] = (l | 0) == 0 ? 171852 : l;
  ge(152467, E);
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) zg(j);
  }
 }
 hb(3379, Lb | 0);
 tb = c[Lb >> 2] | 0;
 c[Kb >> 2] = 152579;
 c[Kb + 4 >> 2] = tb;
 ge(152571, Kb);
 hb(34076, Lb | 0);
 tb = c[Lb >> 2] | 0;
 c[Jb >> 2] = 152599;
 c[Jb + 4 >> 2] = tb;
 ge(152571, Jb);
 hb(3386, Lb | 0);
 tb = c[Lb >> 2] | 0;
 n = c[Lb + 4 >> 2] | 0;
 c[Ib >> 2] = 152639;
 c[Ib + 4 >> 2] = tb;
 c[Ib + 8 >> 2] = n;
 ge(152628, Ib);
 hb(34921, Lb | 0);
 n = c[Lb >> 2] | 0;
 c[Gb >> 2] = 152660;
 c[Gb + 4 >> 2] = n;
 ge(152571, Gb);
 hb(35661, Lb | 0);
 n = c[Lb >> 2] | 0;
 c[Fb >> 2] = 152682;
 c[Fb + 4 >> 2] = n;
 ge(152571, Fb);
 hb(35660, Lb | 0);
 n = c[Lb >> 2] | 0;
 c[Eb >> 2] = 152718;
 c[Eb + 4 >> 2] = n;
 ge(152571, Eb);
 hb(36347, Lb | 0);
 n = c[Lb >> 2] | 0;
 c[Db >> 2] = 152752;
 c[Db + 4 >> 2] = n;
 ge(152571, Db);
 hb(36349, Lb | 0);
 n = c[Lb >> 2] | 0;
 c[Cb >> 2] = 152782;
 c[Cb + 4 >> 2] = n;
 ge(152571, Cb);
 n = ib(7939) | 0;
 if (!n) he(152486, F); else {
  m = n;
  g : do if (!(m & 3)) {
   j = n;
   Bb = 126;
  } else {
   j = n;
   l = m;
   while (1) {
    if (!(a[j >> 0] | 0)) {
     j = l;
     break g;
    }
    j = j + 1 | 0;
    l = j;
    if (!(l & 3)) {
     Bb = 126;
     break;
    }
   }
  } while (0);
  if ((Bb | 0) == 126) {
   while (1) {
    l = c[j >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  j = j - m | 0;
  if ((j | 0) > 0 & (a[n >> 0] | 0) != 0) {
   m = yg(j + 9 | 0) | 0;
   tb = m;
   c[tb >> 2] = 0;
   c[tb + 4 >> 2] = 0;
   c[m >> 2] = 0;
   c[m >> 2] = (c[m >> 2] | 0) + 1;
   c[m + 4 >> 2] = j;
   tb = m + 8 | 0;
   c[Cb >> 2] = tb;
   Rg(tb | 0, n | 0, j | 0) | 0;
   a[tb + j >> 0] = 0;
  } else {
   c[Cb >> 2] = 0;
   m = 0;
  }
  c[Db >> 2] = 0;
  c[Db + 4 >> 2] = 0;
  c[Db + 8 >> 2] = 0;
  h : do if (!1) {
   j = 164261;
   Bb = 137;
  } else {
   j = 164261;
   l = 164261;
   while (1) {
    if (!(a[j >> 0] | 0)) {
     j = l;
     break h;
    }
    j = j + 1 | 0;
    l = j;
    if (!(l & 3)) {
     Bb = 137;
     break;
    }
   }
  } while (0);
  if ((Bb | 0) == 137) {
   while (1) {
    l = c[j >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  ve(Db, 164261, 0, j - 164261 | 0);
  j = c[Cb >> 2] | 0;
  j = (j | 0) == 0 ? 171852 : j;
  l = m;
  if (!m) {
   ve(Db, j, 0, 0);
   xe(Db, 164261, 164263);
   we(Eb, Db);
  } else {
   ve(Db, j, 0, c[l + 4 >> 2] | 0);
   xe(Db, 164261, 164263);
   we(Eb, Db);
   tb = c[l >> 2] | 0;
   c[l >> 2] = tb - 1;
   if ((tb | 0) == 1) {
    zg(m);
    c[Cb >> 2] = 0;
   }
   c[Cb >> 2] = 0;
  }
  j = c[Eb >> 2] | 0;
  m = Eb + 4 | 0;
  l = c[m >> 2] | 0;
  c[Cb >> 2] = l;
  c[Eb >> 2] = 0;
  c[m >> 2] = 0;
  m = c[Db >> 2] | 0;
  if (m | 0) zg(m);
  c[I >> 2] = 152814;
  c[I + 4 >> 2] = (l | 0) == 0 ? 171852 : l;
  ge(152467, I);
  if (j | 0) {
   rb = j;
   tb = c[rb >> 2] | 0;
   c[rb >> 2] = tb - 1;
   if ((tb | 0) == 1) {
    zg(j);
    c[Cb >> 2] = 0;
   }
   c[Cb >> 2] = 0;
  }
 };
 a[171853] = 0;
 a[171854] = 0;
 a[171855] = 0;
 a[171856] = 0;
 a[171857] = 0;
 a[171858] = 0;
 a[171859] = 0;
 m = ib(7939) | 0;
 c[Cb >> 2] = 0;
 c[Cb + 4 >> 2] = 0;
 c[Cb + 8 >> 2] = 0;
 i : do if (!m) {
  l = 1;
  j = 0;
  Bb = 171;
 } else {
  n = m;
  j : do if (!(n & 3)) {
   j = m;
   Bb = 159;
  } else {
   l = m;
   j = n;
   while (1) {
    if (!(a[l >> 0] | 0)) break j;
    l = l + 1 | 0;
    j = l;
    if (!(j & 3)) {
     j = l;
     Bb = 159;
     break;
    }
   }
  } while (0);
  if ((Bb | 0) == 159) {
   while (1) {
    l = c[j >> 2] | 0;
    if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
   }
   if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
  }
  ve(Cb, m, 0, j - n | 0);
  j = c[Cb >> 2] | 0;
  l = (j | 0) == 0;
  if (l) Bb = 171; else {
   m = xg(j, 152167) | 0;
   if (!m) Bb = 167; else if ((m - j | 0) == -1) Bb = 167; else {
    m = 1;
    Bb = 173;
   }
   do if ((Bb | 0) == 167) {
    m = xg(j, 152193) | 0;
    if (m | 0) if ((m - j | 0) != -1) {
     m = 1;
     Bb = 173;
     break;
    }
    m = xg(j, 152218) | 0;
    if (!m) {
     a[171853] = 0;
     if (l) {
      Bb = 190;
      break i;
     } else break;
    } else {
     a[171853] = (m - j | 0) != -1 & 1;
     break;
    }
   } while (0);
   if ((Bb | 0) == 173) {
    a[171853] = m;
    if (l) {
     Bb = 190;
     break;
    }
   }
   l = xg(j, 152244) | 0;
   do if (!l) Bb = 177; else {
    if ((l - j | 0) == -1) {
     Bb = 177;
     break;
    }
    a[171854] = 1;
   } while (0);
   do if ((Bb | 0) == 177) {
    l = xg(j, 152271) | 0;
    if (!l) {
     a[171854] = 0;
     break;
    } else {
     a[171854] = (l - j | 0) != -1 & 1;
     break;
    }
   } while (0);
   l = xg(j, 152297) | 0;
   do if (!l) Bb = 183; else {
    if ((l - j | 0) == -1) {
     Bb = 183;
     break;
    }
    a[171855] = 1;
   } while (0);
   do if ((Bb | 0) == 183) {
    l = xg(j, 152321) | 0;
    if (!l) {
     a[171855] = 0;
     break;
    } else {
     a[171855] = (l - j | 0) != -1 & 1;
     break;
    }
   } while (0);
   l = xg(j, 152345) | 0;
   a[171856] = (l - j | 0) != -1 & (l | 0) != 0 & 1;
   l = xg(j, 152360) | 0;
   l = (l | 0) == 0 ? 0 : (l - j | 0) != -1;
   a[171858] = l & 1;
   m = xg(j, 152378) | 0;
   a[171859] = (m - j | 0) != -1 & (m | 0) != 0 & 1;
   m = xg(j, 152392) | 0;
   if (!m) {
    a[171857] = 0;
    if (l) {
     Bb = 191;
     break;
    }
   } else {
    a[171857] = (m - j | 0) != -1 & 1;
    if (l) {
     Bb = 191;
     break;
    }
   }
   he(152412, U);
   Bb = 191;
  }
 } while (0);
 if ((Bb | 0) == 171) {
  a[171853] = 0;
  Bb = 190;
 }
 if ((Bb | 0) == 190) {
  a[171854] = 0;
  a[171855] = 0;
  a[171856] = 0;
  a[171858] = 0;
  a[171859] = 0;
  a[171857] = 0;
  he(152412, T);
  if (!l) Bb = 191;
 }
 if ((Bb | 0) == 191) zg(j);
 m = c[42822] | 0;
 n = m + 416 | 0;
 a[n >> 0] = 1;
 c[m + 420 >> 2] = L;
 c[m + 424 >> 2] = K;
 c[m + 428 >> 2] = M;
 c[m + 432 >> 2] = N;
 c[m + 436 >> 2] = O;
 c[m + 440 >> 2] = P;
 c[m + 444 >> 2] = Q;
 l = m + 504 | 0;
 c[l >> 2] = c[V >> 2];
 c[l + 4 >> 2] = c[V + 4 >> 2];
 c[l + 8 >> 2] = c[V + 8 >> 2];
 c[l + 12 >> 2] = c[V + 12 >> 2];
 c[l + 16 >> 2] = c[V + 16 >> 2];
 c[l + 20 >> 2] = c[V + 20 >> 2];
 c[l + 24 >> 2] = c[V + 24 >> 2];
 l = m + 532 | 0;
 if ((l | 0) != (ca | 0)) {
  j = c[l >> 2] | 0;
  if (j | 0) {
   tb = c[j >> 2] | 0;
   c[j >> 2] = tb - 1;
   if ((tb | 0) == 1) {
    zg(c[l >> 2] | 0);
    c[l >> 2] = 0;
    j = m + 536 | 0;
    c[j >> 2] = 0;
   } else j = m + 536 | 0;
   c[l >> 2] = 0;
   c[j >> 2] = 0;
  }
  j = c[ca >> 2] | 0;
  c[l >> 2] = j;
  c[m + 536 >> 2] = c[Z >> 2];
  if (j | 0) {
   tb = j;
   c[tb >> 2] = (c[tb >> 2] | 0) + 1;
  }
 }
 G = m + 540 | 0;
 s = J;
 H = G + 80 | 0;
 do {
  c[G >> 2] = c[s >> 2];
  G = G + 4 | 0;
  s = s + 4 | 0;
 } while ((G | 0) < (H | 0));
 D = m + 648 | 0;
 c[D >> 2] = 1879076864;
 c[D + 4 >> 2] = 16744327;
 eb(2929);
 Ya(519);
 Ra(0);
 Fc(2960);
 ha(519, 0, -1);
 xa(7680, 7680, 7680);
 Ic(-1);
 D = m + 640 | 0;
 c[D >> 2] = 2013282306;
 c[D + 4 >> 2] = 192;
 Fc(3042);
 db(1, 0, 1, 0);
 Jc(32774, 32774);
 Dc(1, 1, 1, 1);
 g[m + 676 >> 2] = 1.0;
 g[m + 680 >> 2] = 1.0;
 g[m + 684 >> 2] = 1.0;
 g[m + 688 >> 2] = 1.0;
 Hc(1.0, 1.0, 1.0, 1.0);
 b[m + 656 >> 1] = 296;
 Fc(2884);
 Rb(2304);
 vb(1029);
 Fc(32823);
 Fc(3089);
 eb(3024);
 mf(n);
 D = c[42822] | 0;
 F = D + 1168 | 0;
 E = D + 1284 | 0;
 c[D + 1284 >> 2] = L;
 c[D + 1288 >> 2] = K;
 c[D + 1292 >> 2] = M;
 c[D + 1296 >> 2] = N;
 c[D + 1300 >> 2] = O;
 c[D + 1304 >> 2] = P;
 c[D + 1308 >> 2] = Q;
 A = c[S >> 2] | 0;
 b[D + 1452 >> 1] = 1;
 v = D + 1456 | 0;
 w = D + 1468 | 0;
 j = (c[w >> 2] | 0) - (c[D + 1464 >> 2] | 0) + A | 0;
 x = D + 1460 | 0;
 if ((j | 0) > (c[x >> 2] | 0)) Me(v, j);
 t = D + 1472 | 0;
 c[t >> 2] = 0;
 u = D + 1476 | 0;
 c[u >> 2] = 0;
 y = D + 1480 | 0;
 z = D + 1492 | 0;
 j = D + 1488 | 0;
 l = (c[z >> 2] | 0) - (c[j >> 2] | 0) | 0;
 m = l + A | 0;
 n = D + 1484 | 0;
 if ((c[n >> 2] | 0) < (m | 0)) {
  o = yg(m << 1) | 0;
  p = c[y >> 2] | 0;
  if ((l | 0) > 0) {
   q = o;
   r = 0;
   s = p + (c[j >> 2] << 1) | 0;
   while (1) {
    b[q >> 1] = b[s >> 1] | 0;
    r = r + 1 | 0;
    if ((r | 0) == (l | 0)) break; else {
     q = q + 2 | 0;
     s = s + 2 | 0;
    }
   }
  }
  if (p | 0) zg(p);
  c[y >> 2] = o;
  c[n >> 2] = m;
  c[j >> 2] = 0;
  c[z >> 2] = l;
 }
 if ((A | 0) > 0) {
  n = 0;
  do {
   m = c[x >> 2] | 0;
   j = c[w >> 2] | 0;
   if ((m | 0) == (j | 0)) {
    l = m >> 1;
    j = c[t >> 2] | 0;
    if ((l | 0) >= (j | 0)) {
     j = c[u >> 2] | 0;
     j = (l | 0) > (j | 0) ? j : l;
    }
    Me(v, j + m | 0);
    j = c[w >> 2] | 0;
   }
   c[w >> 2] = j + 1;
   m = c[v >> 2] | 0;
   l = m + (j * 400 | 0) | 0;
   Xg(l | 0, 0, 400) | 0;
   c[l >> 2] = -1;
   c[l + 4 >> 2] = -1;
   c[m + (j * 400 | 0) + 8 >> 2] = 0;
   c[m + (j * 400 | 0) + 12 >> 2] = 0;
   c[m + (j * 400 | 0) + 16 >> 2] = -1;
   c[m + (j * 400 | 0) + 20 >> 2] = -1;
   a[m + (j * 400 | 0) + 26 >> 0] = 17;
   a[m + (j * 400 | 0) + 27 >> 0] = 13;
   a[m + (j * 400 | 0) + 28 >> 0] = 17;
   a[m + (j * 400 | 0) + 29 >> 0] = 13;
   a[m + (j * 400 | 0) + 30 >> 0] = 17;
   a[m + (j * 400 | 0) + 31 >> 0] = 13;
   a[m + (j * 400 | 0) + 32 >> 0] = 17;
   a[m + (j * 400 | 0) + 33 >> 0] = 13;
   a[m + (j * 400 | 0) + 34 >> 0] = 17;
   a[m + (j * 400 | 0) + 35 >> 0] = 13;
   a[m + (j * 400 | 0) + 36 >> 0] = 17;
   a[m + (j * 400 | 0) + 37 >> 0] = 13;
   a[m + (j * 400 | 0) + 38 >> 0] = 17;
   a[m + (j * 400 | 0) + 39 >> 0] = 13;
   a[m + (j * 400 | 0) + 40 >> 0] = 17;
   a[m + (j * 400 | 0) + 41 >> 0] = 13;
   a[m + (j * 400 | 0) + 42 >> 0] = 17;
   a[m + (j * 400 | 0) + 43 >> 0] = 13;
   a[m + (j * 400 | 0) + 44 >> 0] = 17;
   a[m + (j * 400 | 0) + 45 >> 0] = 13;
   a[m + (j * 400 | 0) + 46 >> 0] = 17;
   a[m + (j * 400 | 0) + 47 >> 0] = 13;
   a[m + (j * 400 | 0) + 48 >> 0] = 17;
   a[m + (j * 400 | 0) + 49 >> 0] = 13;
   a[m + (j * 400 | 0) + 50 >> 0] = 17;
   a[m + (j * 400 | 0) + 51 >> 0] = 13;
   a[m + (j * 400 | 0) + 52 >> 0] = 17;
   a[m + (j * 400 | 0) + 53 >> 0] = 13;
   a[m + (j * 400 | 0) + 54 >> 0] = 17;
   a[m + (j * 400 | 0) + 55 >> 0] = 13;
   a[m + (j * 400 | 0) + 56 >> 0] = 17;
   a[m + (j * 400 | 0) + 57 >> 0] = 13;
   a[m + (j * 400 | 0) + 24 >> 0] = 0;
   a[m + (j * 400 | 0) + 25 >> 0] = 1;
   a[m + (j * 400 | 0) + 90 >> 0] = 0;
   a[m + (j * 400 | 0) + 91 >> 0] = 0;
   l = m + (j * 400 | 0) + 58 | 0;
   G = m + (j * 400 | 0) + 74 | 0;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 255;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   G = l;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 0;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   l = m + (j * 400 | 0) + 92 | 0;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[l + 8 >> 2] = 0;
   a[l + 12 >> 0] = 0;
   c[Cb >> 2] = 0;
   ue(m + (j * 400 | 0) + 108 | 0, Cb);
   c[m + (j * 400 | 0) + 112 >> 2] = -1;
   l = m + (j * 400 | 0) + 120 | 0;
   c[l >> 2] = -1;
   c[l + 4 >> 2] = -1;
   c[m + (j * 400 | 0) + 128 >> 2] = 0;
   c[m + (j * 400 | 0) + 132 >> 2] = -1;
   l = m + (j * 400 | 0) + 204 | 0;
   G = m + (j * 400 | 0) + 136 | 0;
   H = G + 68 | 0;
   do {
    c[G >> 2] = 0;
    G = G + 4 | 0;
   } while ((G | 0) < (H | 0));
   a[l >> 0] = a[l >> 0] & -16;
   c[m + (j * 400 | 0) + 208 >> 2] = 0;
   a[m + (j * 400 | 0) + 214 >> 0] = 17;
   a[m + (j * 400 | 0) + 215 >> 0] = 13;
   a[m + (j * 400 | 0) + 216 >> 0] = 17;
   a[m + (j * 400 | 0) + 217 >> 0] = 13;
   a[m + (j * 400 | 0) + 218 >> 0] = 17;
   a[m + (j * 400 | 0) + 219 >> 0] = 13;
   a[m + (j * 400 | 0) + 220 >> 0] = 17;
   a[m + (j * 400 | 0) + 221 >> 0] = 13;
   a[m + (j * 400 | 0) + 222 >> 0] = 17;
   a[m + (j * 400 | 0) + 223 >> 0] = 13;
   a[m + (j * 400 | 0) + 224 >> 0] = 17;
   a[m + (j * 400 | 0) + 225 >> 0] = 13;
   a[m + (j * 400 | 0) + 226 >> 0] = 17;
   a[m + (j * 400 | 0) + 227 >> 0] = 13;
   a[m + (j * 400 | 0) + 228 >> 0] = 17;
   a[m + (j * 400 | 0) + 229 >> 0] = 13;
   a[m + (j * 400 | 0) + 230 >> 0] = 17;
   a[m + (j * 400 | 0) + 231 >> 0] = 13;
   a[m + (j * 400 | 0) + 232 >> 0] = 17;
   a[m + (j * 400 | 0) + 233 >> 0] = 13;
   a[m + (j * 400 | 0) + 234 >> 0] = 17;
   a[m + (j * 400 | 0) + 235 >> 0] = 13;
   a[m + (j * 400 | 0) + 236 >> 0] = 17;
   a[m + (j * 400 | 0) + 237 >> 0] = 13;
   a[m + (j * 400 | 0) + 238 >> 0] = 17;
   a[m + (j * 400 | 0) + 239 >> 0] = 13;
   a[m + (j * 400 | 0) + 240 >> 0] = 17;
   a[m + (j * 400 | 0) + 241 >> 0] = 13;
   a[m + (j * 400 | 0) + 242 >> 0] = 17;
   a[m + (j * 400 | 0) + 243 >> 0] = 13;
   a[m + (j * 400 | 0) + 244 >> 0] = 17;
   a[m + (j * 400 | 0) + 245 >> 0] = 13;
   a[m + (j * 400 | 0) + 212 >> 0] = 0;
   a[m + (j * 400 | 0) + 213 >> 0] = 1;
   a[m + (j * 400 | 0) + 278 >> 0] = 0;
   a[m + (j * 400 | 0) + 279 >> 0] = 0;
   l = m + (j * 400 | 0) + 246 | 0;
   G = m + (j * 400 | 0) + 262 | 0;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 255;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   G = l;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 0;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   c[m + (j * 400 | 0) + 280 >> 2] = -1;
   c[m + (j * 400 | 0) + 284 >> 2] = 0;
   c[m + (j * 400 | 0) + 288 >> 2] = -1;
   c[m + (j * 400 | 0) + 292 >> 2] = -1;
   G = m + (j * 400 | 0) + 296 | 0;
   H = G + 68 | 0;
   do {
    c[G >> 2] = 0;
    G = G + 4 | 0;
   } while ((G | 0) < (H | 0));
   c[m + (j * 400 | 0) + 364 >> 2] = -1;
   a[m + (j * 400 | 0) + 368 >> 0] = 1;
   a[m + (j * 400 | 0) + 369 >> 0] = 0;
   c[m + (j * 400 | 0) + 372 >> 2] = 0;
   c[m + (j * 400 | 0) + 376 >> 2] = 0;
   c[m + (j * 400 | 0) + 380 >> 2] = -1;
   a[m + (j * 400 | 0) + 384 >> 0] = 1;
   a[m + (j * 400 | 0) + 385 >> 0] = 0;
   c[m + (j * 400 | 0) + 388 >> 2] = 0;
   c[m + (j * 400 | 0) + 392 >> 2] = 0;
   n = n + 1 | 0;
  } while ((n | 0) != (A | 0));
  j = 0;
  do {
   Oe(y);
   tb = c[z >> 2] | 0;
   c[z >> 2] = tb + 1;
   b[(c[y >> 2] | 0) + (tb << 1) >> 1] = j;
   j = j + 1 << 16 >> 16;
  } while ((j & 65535 | 0) < (A | 0));
 }
 a[D + 1440 >> 0] = 1;
 A = c[W >> 2] | 0;
 b[D + 1516 >> 1] = 2;
 v = D + 1520 | 0;
 w = D + 1532 | 0;
 j = (c[w >> 2] | 0) - (c[D + 1528 >> 2] | 0) + A | 0;
 x = D + 1524 | 0;
 if ((j | 0) > (c[x >> 2] | 0)) Pe(v, j);
 t = D + 1536 | 0;
 c[t >> 2] = 0;
 u = D + 1540 | 0;
 c[u >> 2] = 0;
 y = D + 1544 | 0;
 z = D + 1556 | 0;
 j = D + 1552 | 0;
 l = (c[z >> 2] | 0) - (c[j >> 2] | 0) | 0;
 m = l + A | 0;
 n = D + 1548 | 0;
 if ((c[n >> 2] | 0) < (m | 0)) {
  o = yg(m << 1) | 0;
  p = c[y >> 2] | 0;
  if ((l | 0) > 0) {
   q = o;
   r = 0;
   s = p + (c[j >> 2] << 1) | 0;
   while (1) {
    b[q >> 1] = b[s >> 1] | 0;
    r = r + 1 | 0;
    if ((r | 0) == (l | 0)) break; else {
     q = q + 2 | 0;
     s = s + 2 | 0;
    }
   }
  }
  if (p | 0) zg(p);
  c[y >> 2] = o;
  c[n >> 2] = m;
  c[j >> 2] = 0;
  c[z >> 2] = l;
 }
 if ((A | 0) > 0) {
  n = 0;
  do {
   m = c[x >> 2] | 0;
   j = c[w >> 2] | 0;
   if ((m | 0) == (j | 0)) {
    l = m >> 1;
    j = c[t >> 2] | 0;
    if ((l | 0) >= (j | 0)) {
     j = c[u >> 2] | 0;
     j = (l | 0) > (j | 0) ? j : l;
    }
    Pe(v, j + m | 0);
    j = c[w >> 2] | 0;
   }
   c[w >> 2] = j + 1;
   rb = c[v >> 2] | 0;
   tb = rb + (j * 3712 | 0) | 0;
   Xg(tb | 0, 0, 3712) | 0;
   mb = tb;
   c[mb >> 2] = -1;
   c[mb + 4 >> 2] = -1;
   c[rb + (j * 3712 | 0) + 8 >> 2] = 0;
   c[rb + (j * 3712 | 0) + 12 >> 2] = 0;
   gf(rb + (j * 3712 | 0) + 16 | 0);
   c[rb + (j * 3712 | 0) + 3064 >> 2] = 0;
   Xg(rb + (j * 3712 | 0) + 3068 | 0, -1, 640) | 0;
   kf(tb);
   n = n + 1 | 0;
  } while ((n | 0) != (A | 0));
  j = 0;
  do {
   Oe(y);
   tb = c[z >> 2] | 0;
   c[z >> 2] = tb + 1;
   b[(c[y >> 2] | 0) + (tb << 1) >> 1] = j;
   j = j + 1 << 16 >> 16;
  } while ((j & 65535 | 0) < (A | 0));
 }
 a[D + 1504 >> 0] = 1;
 A = c[X >> 2] | 0;
 b[D + 1580 >> 1] = 0;
 v = D + 1584 | 0;
 w = D + 1596 | 0;
 j = (c[w >> 2] | 0) - (c[D + 1592 >> 2] | 0) + A | 0;
 x = D + 1588 | 0;
 if ((j | 0) > (c[x >> 2] | 0)) Qe(v, j);
 t = D + 1600 | 0;
 c[t >> 2] = 0;
 u = D + 1604 | 0;
 c[u >> 2] = 0;
 y = D + 1608 | 0;
 z = D + 1620 | 0;
 m = D + 1616 | 0;
 n = (c[z >> 2] | 0) - (c[m >> 2] | 0) | 0;
 o = n + A | 0;
 p = D + 1612 | 0;
 if ((c[p >> 2] | 0) < (o | 0)) {
  j = yg(o << 1) | 0;
  l = c[y >> 2] | 0;
  if ((n | 0) > 0) {
   q = j;
   r = 0;
   s = l + (c[m >> 2] << 1) | 0;
   while (1) {
    b[q >> 1] = b[s >> 1] | 0;
    r = r + 1 | 0;
    if ((r | 0) == (n | 0)) break; else {
     q = q + 2 | 0;
     s = s + 2 | 0;
    }
   }
  }
  if (l | 0) zg(l);
  c[y >> 2] = j;
  c[p >> 2] = o;
  c[m >> 2] = 0;
  c[z >> 2] = n;
 }
 if ((A | 0) > 0) {
  n = 0;
  do {
   m = c[x >> 2] | 0;
   j = c[w >> 2] | 0;
   if ((m | 0) == (j | 0)) {
    l = m >> 1;
    j = c[t >> 2] | 0;
    if ((l | 0) >= (j | 0)) {
     j = c[u >> 2] | 0;
     j = (l | 0) > (j | 0) ? j : l;
    }
    Qe(v, j + m | 0);
    j = c[w >> 2] | 0;
   }
   c[w >> 2] = j + 1;
   tb = c[v >> 2] | 0;
   rb = tb + (j * 776 | 0) | 0;
   Xg(rb | 0, 0, 776) | 0;
   c[rb >> 2] = -1;
   c[rb + 4 >> 2] = -1;
   rb = tb + (j * 776 | 0) + 8 | 0;
   c[rb >> 2] = 0;
   c[rb + 4 >> 2] = 0;
   c[rb + 8 >> 2] = 0;
   c[rb + 12 >> 2] = 0;
   c[rb + 16 >> 2] = 0;
   c[rb + 20 >> 2] = 0;
   c[rb + 24 >> 2] = 0;
   c[rb + 28 >> 2] = 0;
   c[tb + (j * 776 | 0) + 40 >> 2] = 1;
   c[tb + (j * 776 | 0) + 44 >> 2] = 0;
   c[tb + (j * 776 | 0) + 48 >> 2] = 20;
   rb = tb + (j * 776 | 0) + 56 | 0;
   c[rb >> 2] = -1;
   c[rb + 4 >> 2] = -1;
   b[tb + (j * 776 | 0) + 64 >> 1] = 21;
   g[tb + (j * 776 | 0) + 68 >> 2] = 0.0;
   g[tb + (j * 776 | 0) + 72 >> 2] = 0.0;
   g[tb + (j * 776 | 0) + 76 >> 2] = 0.0;
   g[tb + (j * 776 | 0) + 80 >> 2] = 1.0;
   g[tb + (j * 776 | 0) + 84 >> 2] = 1.0;
   a[tb + (j * 776 | 0) + 88 >> 0] = 0;
   a[tb + (j * 776 | 0) + 89 >> 0] = 3;
   c[Cb >> 2] = 0;
   ue(tb + (j * 776 | 0) + 92 | 0, Cb);
   c[tb + (j * 776 | 0) + 96 >> 2] = -1;
   rb = tb + (j * 776 | 0) + 104 | 0;
   c[rb >> 2] = -1;
   c[rb + 4 >> 2] = -1;
   rb = tb + (j * 776 | 0) + 696 | 0;
   Xg(tb + (j * 776 | 0) + 112 | 0, 0, 584) | 0;
   a[rb >> 0] = a[rb >> 0] & -128;
   c[tb + (j * 776 | 0) + 704 >> 2] = 0;
   c[tb + (j * 776 | 0) + 708 >> 2] = -2;
   c[tb + (j * 776 | 0) + 712 >> 2] = -1;
   c[tb + (j * 776 | 0) + 716 >> 2] = 20;
   c[tb + (j * 776 | 0) + 720 >> 2] = 20;
   c[tb + (j * 776 | 0) + 724 >> 2] = -1;
   c[tb + (j * 776 | 0) + 728 >> 2] = 0;
   c[tb + (j * 776 | 0) + 732 >> 2] = 0;
   c[tb + (j * 776 | 0) + 736 >> 2] = 0;
   c[tb + (j * 776 | 0) + 740 >> 2] = 1;
   a[tb + (j * 776 | 0) + 744 >> 0] = 0;
   a[tb + (j * 776 | 0) + 745 >> 0] = 0;
   a[tb + (j * 776 | 0) + 746 >> 0] = 0;
   c[tb + (j * 776 | 0) + 748 >> 2] = 0;
   c[tb + (j * 776 | 0) + 752 >> 2] = 0;
   c[tb + (j * 776 | 0) + 756 >> 2] = 0;
   c[tb + (j * 776 | 0) + 760 >> 2] = -1;
   a[tb + (j * 776 | 0) + 764 >> 0] = 1;
   a[tb + (j * 776 | 0) + 765 >> 0] = 0;
   c[tb + (j * 776 | 0) + 768 >> 2] = 0;
   c[tb + (j * 776 | 0) + 772 >> 2] = 0;
   n = n + 1 | 0;
  } while ((n | 0) != (A | 0));
  j = 0;
  do {
   Oe(y);
   tb = c[z >> 2] | 0;
   c[z >> 2] = tb + 1;
   b[(c[y >> 2] | 0) + (tb << 1) >> 1] = j;
   j = j + 1 << 16 >> 16;
  } while ((j & 65535 | 0) < (A | 0));
 }
 a[D + 1568 >> 0] = 1;
 B = c[Y >> 2] | 0;
 b[D + 1644 >> 1] = 3;
 x = D + 1648 | 0;
 y = D + 1660 | 0;
 z = D + 1656 | 0;
 n = (c[y >> 2] | 0) - (c[z >> 2] | 0) | 0;
 o = n + B | 0;
 A = D + 1652 | 0;
 if ((c[A >> 2] | 0) < (o | 0)) {
  p = yg(o * 608 | 0) | 0;
  if ((n | 0) > 0) {
   j = p;
   l = 0;
   m = (c[x >> 2] | 0) + ((c[z >> 2] | 0) * 608 | 0) | 0;
   while (1) {
    Se(j, m);
    c[m + 16 >> 2] = 0;
    l = l + 1 | 0;
    if ((l | 0) == (n | 0)) break; else {
     j = j + 608 | 0;
     m = m + 608 | 0;
    }
   }
  }
  j = c[x >> 2] | 0;
  if (j | 0) zg(j);
  c[x >> 2] = p;
  c[A >> 2] = o;
  c[z >> 2] = 0;
  c[y >> 2] = n;
 }
 t = D + 1664 | 0;
 c[t >> 2] = 0;
 u = D + 1668 | 0;
 c[u >> 2] = 0;
 v = D + 1672 | 0;
 w = D + 1684 | 0;
 j = D + 1680 | 0;
 l = (c[w >> 2] | 0) - (c[j >> 2] | 0) | 0;
 m = l + B | 0;
 n = D + 1676 | 0;
 if ((c[n >> 2] | 0) < (m | 0)) {
  o = yg(m << 1) | 0;
  p = c[v >> 2] | 0;
  if ((l | 0) > 0) {
   q = o;
   r = 0;
   s = p + (c[j >> 2] << 1) | 0;
   while (1) {
    b[q >> 1] = b[s >> 1] | 0;
    r = r + 1 | 0;
    if ((r | 0) == (l | 0)) break; else {
     q = q + 2 | 0;
     s = s + 2 | 0;
    }
   }
  }
  if (p | 0) zg(p);
  c[v >> 2] = o;
  c[n >> 2] = m;
  c[j >> 2] = 0;
  c[w >> 2] = l;
 }
 if ((B | 0) > 0) {
  q = 0;
  do {
   m = c[A >> 2] | 0;
   j = c[y >> 2] | 0;
   do if ((m | 0) == (j | 0)) {
    j = m >> 1;
    l = c[t >> 2] | 0;
    if ((j | 0) >= (l | 0)) {
     l = c[u >> 2] | 0;
     l = (j | 0) > (l | 0) ? l : j;
    }
    p = l + m | 0;
    if (!l) {
     j = m;
     break;
    }
    j = m - (c[z >> 2] | 0) | 0;
    o = yg(p * 608 | 0) | 0;
    if ((j | 0) > 0) {
     l = o;
     m = 0;
     n = (c[x >> 2] | 0) + ((c[z >> 2] | 0) * 608 | 0) | 0;
     while (1) {
      Se(l, n);
      c[n + 16 >> 2] = 0;
      m = m + 1 | 0;
      if ((m | 0) == (j | 0)) break; else {
       l = l + 608 | 0;
       n = n + 608 | 0;
      }
     }
    }
    l = c[x >> 2] | 0;
    if (l | 0) zg(l);
    c[x >> 2] = o;
    c[A >> 2] = p;
    c[z >> 2] = 0;
    c[y >> 2] = j;
   } while (0);
   c[y >> 2] = j + 1;
   m = c[x >> 2] | 0;
   l = m + (j * 608 | 0) | 0;
   Xg(l | 0, 0, 608) | 0;
   c[l >> 2] = -1;
   c[l + 4 >> 2] = -1;
   c[m + (j * 608 | 0) + 8 >> 2] = 0;
   c[m + (j * 608 | 0) + 12 >> 2] = 0;
   c[Cb >> 2] = 0;
   ue(m + (j * 608 | 0) + 16 | 0, Cb);
   c[m + (j * 608 | 0) + 20 >> 2] = -1;
   l = m + (j * 608 | 0) + 24 | 0;
   G = l;
   c[G >> 2] = 0;
   c[G + 4 >> 2] = 0;
   c[l >> 2] = 2013282306;
   b[l + 4 >> 1] = 192;
   g[m + (j * 608 | 0) + 32 >> 2] = 1.0;
   g[m + (j * 608 | 0) + 36 >> 2] = 1.0;
   g[m + (j * 608 | 0) + 40 >> 2] = 1.0;
   g[m + (j * 608 | 0) + 44 >> 2] = 1.0;
   b[m + (j * 608 | 0) + 48 >> 1] = 28672;
   b[m + (j * 608 | 0) + 50 >> 1] = 28672;
   l = m + (j * 608 | 0) + 52 | 0;
   c[l >> 2] = 0;
   b[l >> 1] = 32647;
   b[l + 2 >> 1] = 255;
   b[m + (j * 608 | 0) + 56 >> 1] = 296;
   a[m + (j * 608 | 0) + 60 >> 0] = 17;
   a[m + (j * 608 | 0) + 61 >> 0] = 13;
   a[m + (j * 608 | 0) + 62 >> 0] = 17;
   a[m + (j * 608 | 0) + 63 >> 0] = 13;
   a[m + (j * 608 | 0) + 64 >> 0] = 17;
   a[m + (j * 608 | 0) + 65 >> 0] = 13;
   a[m + (j * 608 | 0) + 66 >> 0] = 17;
   a[m + (j * 608 | 0) + 67 >> 0] = 13;
   a[m + (j * 608 | 0) + 68 >> 0] = 17;
   a[m + (j * 608 | 0) + 69 >> 0] = 13;
   a[m + (j * 608 | 0) + 70 >> 0] = 17;
   a[m + (j * 608 | 0) + 71 >> 0] = 13;
   a[m + (j * 608 | 0) + 72 >> 0] = 17;
   a[m + (j * 608 | 0) + 73 >> 0] = 13;
   a[m + (j * 608 | 0) + 74 >> 0] = 17;
   a[m + (j * 608 | 0) + 75 >> 0] = 13;
   a[m + (j * 608 | 0) + 76 >> 0] = 17;
   a[m + (j * 608 | 0) + 77 >> 0] = 13;
   a[m + (j * 608 | 0) + 78 >> 0] = 17;
   a[m + (j * 608 | 0) + 79 >> 0] = 13;
   a[m + (j * 608 | 0) + 80 >> 0] = 17;
   a[m + (j * 608 | 0) + 81 >> 0] = 13;
   a[m + (j * 608 | 0) + 82 >> 0] = 17;
   a[m + (j * 608 | 0) + 83 >> 0] = 13;
   a[m + (j * 608 | 0) + 84 >> 0] = 17;
   a[m + (j * 608 | 0) + 85 >> 0] = 13;
   a[m + (j * 608 | 0) + 86 >> 0] = 17;
   a[m + (j * 608 | 0) + 87 >> 0] = 13;
   a[m + (j * 608 | 0) + 88 >> 0] = 17;
   a[m + (j * 608 | 0) + 89 >> 0] = 13;
   a[m + (j * 608 | 0) + 90 >> 0] = 17;
   a[m + (j * 608 | 0) + 91 >> 0] = 13;
   a[m + (j * 608 | 0) + 58 >> 0] = 0;
   a[m + (j * 608 | 0) + 59 >> 0] = 1;
   a[m + (j * 608 | 0) + 124 >> 0] = 0;
   a[m + (j * 608 | 0) + 125 >> 0] = 0;
   l = m + (j * 608 | 0) + 92 | 0;
   G = m + (j * 608 | 0) + 108 | 0;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 255;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   G = l;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 0;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   a[m + (j * 608 | 0) + 128 >> 0] = 17;
   a[m + (j * 608 | 0) + 129 >> 0] = 13;
   a[m + (j * 608 | 0) + 130 >> 0] = 17;
   a[m + (j * 608 | 0) + 131 >> 0] = 13;
   a[m + (j * 608 | 0) + 132 >> 0] = 17;
   a[m + (j * 608 | 0) + 133 >> 0] = 13;
   a[m + (j * 608 | 0) + 134 >> 0] = 17;
   a[m + (j * 608 | 0) + 135 >> 0] = 13;
   a[m + (j * 608 | 0) + 136 >> 0] = 17;
   a[m + (j * 608 | 0) + 137 >> 0] = 13;
   a[m + (j * 608 | 0) + 138 >> 0] = 17;
   a[m + (j * 608 | 0) + 139 >> 0] = 13;
   a[m + (j * 608 | 0) + 140 >> 0] = 17;
   a[m + (j * 608 | 0) + 141 >> 0] = 13;
   a[m + (j * 608 | 0) + 142 >> 0] = 17;
   a[m + (j * 608 | 0) + 143 >> 0] = 13;
   a[m + (j * 608 | 0) + 144 >> 0] = 17;
   a[m + (j * 608 | 0) + 145 >> 0] = 13;
   a[m + (j * 608 | 0) + 146 >> 0] = 17;
   a[m + (j * 608 | 0) + 147 >> 0] = 13;
   a[m + (j * 608 | 0) + 148 >> 0] = 17;
   a[m + (j * 608 | 0) + 149 >> 0] = 13;
   a[m + (j * 608 | 0) + 150 >> 0] = 17;
   a[m + (j * 608 | 0) + 151 >> 0] = 13;
   a[m + (j * 608 | 0) + 152 >> 0] = 17;
   a[m + (j * 608 | 0) + 153 >> 0] = 13;
   a[m + (j * 608 | 0) + 154 >> 0] = 17;
   a[m + (j * 608 | 0) + 155 >> 0] = 13;
   a[m + (j * 608 | 0) + 156 >> 0] = 17;
   a[m + (j * 608 | 0) + 157 >> 0] = 13;
   a[m + (j * 608 | 0) + 158 >> 0] = 17;
   a[m + (j * 608 | 0) + 159 >> 0] = 13;
   a[m + (j * 608 | 0) + 126 >> 0] = 0;
   a[m + (j * 608 | 0) + 127 >> 0] = 1;
   a[m + (j * 608 | 0) + 192 >> 0] = 0;
   a[m + (j * 608 | 0) + 193 >> 0] = 0;
   l = m + (j * 608 | 0) + 160 | 0;
   G = m + (j * 608 | 0) + 176 | 0;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 255;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   G = l;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 0;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   a[m + (j * 608 | 0) + 196 >> 0] = 17;
   a[m + (j * 608 | 0) + 197 >> 0] = 13;
   a[m + (j * 608 | 0) + 198 >> 0] = 17;
   a[m + (j * 608 | 0) + 199 >> 0] = 13;
   a[m + (j * 608 | 0) + 200 >> 0] = 17;
   a[m + (j * 608 | 0) + 201 >> 0] = 13;
   a[m + (j * 608 | 0) + 202 >> 0] = 17;
   a[m + (j * 608 | 0) + 203 >> 0] = 13;
   a[m + (j * 608 | 0) + 204 >> 0] = 17;
   a[m + (j * 608 | 0) + 205 >> 0] = 13;
   a[m + (j * 608 | 0) + 206 >> 0] = 17;
   a[m + (j * 608 | 0) + 207 >> 0] = 13;
   a[m + (j * 608 | 0) + 208 >> 0] = 17;
   a[m + (j * 608 | 0) + 209 >> 0] = 13;
   a[m + (j * 608 | 0) + 210 >> 0] = 17;
   a[m + (j * 608 | 0) + 211 >> 0] = 13;
   a[m + (j * 608 | 0) + 212 >> 0] = 17;
   a[m + (j * 608 | 0) + 213 >> 0] = 13;
   a[m + (j * 608 | 0) + 214 >> 0] = 17;
   a[m + (j * 608 | 0) + 215 >> 0] = 13;
   a[m + (j * 608 | 0) + 216 >> 0] = 17;
   a[m + (j * 608 | 0) + 217 >> 0] = 13;
   a[m + (j * 608 | 0) + 218 >> 0] = 17;
   a[m + (j * 608 | 0) + 219 >> 0] = 13;
   a[m + (j * 608 | 0) + 220 >> 0] = 17;
   a[m + (j * 608 | 0) + 221 >> 0] = 13;
   a[m + (j * 608 | 0) + 222 >> 0] = 17;
   a[m + (j * 608 | 0) + 223 >> 0] = 13;
   a[m + (j * 608 | 0) + 224 >> 0] = 17;
   a[m + (j * 608 | 0) + 225 >> 0] = 13;
   a[m + (j * 608 | 0) + 226 >> 0] = 17;
   a[m + (j * 608 | 0) + 227 >> 0] = 13;
   a[m + (j * 608 | 0) + 194 >> 0] = 0;
   a[m + (j * 608 | 0) + 195 >> 0] = 1;
   a[m + (j * 608 | 0) + 260 >> 0] = 0;
   a[m + (j * 608 | 0) + 261 >> 0] = 0;
   l = m + (j * 608 | 0) + 228 | 0;
   G = m + (j * 608 | 0) + 244 | 0;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 255;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   G = l;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 0;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   a[m + (j * 608 | 0) + 264 >> 0] = 17;
   a[m + (j * 608 | 0) + 265 >> 0] = 13;
   a[m + (j * 608 | 0) + 266 >> 0] = 17;
   a[m + (j * 608 | 0) + 267 >> 0] = 13;
   a[m + (j * 608 | 0) + 268 >> 0] = 17;
   a[m + (j * 608 | 0) + 269 >> 0] = 13;
   a[m + (j * 608 | 0) + 270 >> 0] = 17;
   a[m + (j * 608 | 0) + 271 >> 0] = 13;
   a[m + (j * 608 | 0) + 272 >> 0] = 17;
   a[m + (j * 608 | 0) + 273 >> 0] = 13;
   a[m + (j * 608 | 0) + 274 >> 0] = 17;
   a[m + (j * 608 | 0) + 275 >> 0] = 13;
   a[m + (j * 608 | 0) + 276 >> 0] = 17;
   a[m + (j * 608 | 0) + 277 >> 0] = 13;
   a[m + (j * 608 | 0) + 278 >> 0] = 17;
   a[m + (j * 608 | 0) + 279 >> 0] = 13;
   a[m + (j * 608 | 0) + 280 >> 0] = 17;
   a[m + (j * 608 | 0) + 281 >> 0] = 13;
   a[m + (j * 608 | 0) + 282 >> 0] = 17;
   a[m + (j * 608 | 0) + 283 >> 0] = 13;
   a[m + (j * 608 | 0) + 284 >> 0] = 17;
   a[m + (j * 608 | 0) + 285 >> 0] = 13;
   a[m + (j * 608 | 0) + 286 >> 0] = 17;
   a[m + (j * 608 | 0) + 287 >> 0] = 13;
   a[m + (j * 608 | 0) + 288 >> 0] = 17;
   a[m + (j * 608 | 0) + 289 >> 0] = 13;
   a[m + (j * 608 | 0) + 290 >> 0] = 17;
   a[m + (j * 608 | 0) + 291 >> 0] = 13;
   a[m + (j * 608 | 0) + 292 >> 0] = 17;
   a[m + (j * 608 | 0) + 293 >> 0] = 13;
   a[m + (j * 608 | 0) + 294 >> 0] = 17;
   a[m + (j * 608 | 0) + 295 >> 0] = 13;
   a[m + (j * 608 | 0) + 262 >> 0] = 0;
   a[m + (j * 608 | 0) + 263 >> 0] = 1;
   a[m + (j * 608 | 0) + 328 >> 0] = 0;
   a[m + (j * 608 | 0) + 329 >> 0] = 0;
   l = m + (j * 608 | 0) + 296 | 0;
   G = m + (j * 608 | 0) + 312 | 0;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 255;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   G = l;
   H = G + 16 | 0;
   do {
    a[G >> 0] = 0;
    G = G + 1 | 0;
   } while ((G | 0) < (H | 0));
   c[m + (j * 608 | 0) + 332 >> 2] = 3;
   N = m + (j * 608 | 0) + 336 | 0;
   c[N >> 2] = -1;
   c[N + 4 >> 2] = -1;
   N = m + (j * 608 | 0) + 344 | 0;
   O = m + (j * 608 | 0) + 356 | 0;
   P = m + (j * 608 | 0) + 372 | 0;
   Q = m + (j * 608 | 0) + 388 | 0;
   S = m + (j * 608 | 0) + 404 | 0;
   T = m + (j * 608 | 0) + 420 | 0;
   U = m + (j * 608 | 0) + 436 | 0;
   V = m + (j * 608 | 0) + 452 | 0;
   W = m + (j * 608 | 0) + 468 | 0;
   X = m + (j * 608 | 0) + 484 | 0;
   Y = m + (j * 608 | 0) + 500 | 0;
   jb = m + (j * 608 | 0) + 516 | 0;
   lb = m + (j * 608 | 0) + 532 | 0;
   mb = m + (j * 608 | 0) + 548 | 0;
   rb = m + (j * 608 | 0) + 564 | 0;
   tb = m + (j * 608 | 0) + 580 | 0;
   c[m + (j * 608 | 0) + 596 >> 2] = 0;
   c[m + (j * 608 | 0) + 600 >> 2] = 0;
   c[m + (j * 608 | 0) + 604 >> 2] = 0;
   c[N >> 2] = 0;
   c[N + 4 >> 2] = 0;
   b[N + 8 >> 1] = 0;
   a[N + 10 >> 0] = 0;
   c[O >> 2] = 0;
   c[O + 4 >> 2] = 0;
   c[O + 8 >> 2] = 0;
   b[O + 12 >> 1] = 0;
   a[O + 14 >> 0] = 0;
   c[P >> 2] = 0;
   c[P + 4 >> 2] = 0;
   c[P + 8 >> 2] = 0;
   b[P + 12 >> 1] = 0;
   a[P + 14 >> 0] = 0;
   c[Q >> 2] = 0;
   c[Q + 4 >> 2] = 0;
   c[Q + 8 >> 2] = 0;
   b[Q + 12 >> 1] = 0;
   a[Q + 14 >> 0] = 0;
   c[S >> 2] = 0;
   c[S + 4 >> 2] = 0;
   c[S + 8 >> 2] = 0;
   b[S + 12 >> 1] = 0;
   a[S + 14 >> 0] = 0;
   c[T >> 2] = 0;
   c[T + 4 >> 2] = 0;
   c[T + 8 >> 2] = 0;
   b[T + 12 >> 1] = 0;
   a[T + 14 >> 0] = 0;
   c[U >> 2] = 0;
   c[U + 4 >> 2] = 0;
   c[U + 8 >> 2] = 0;
   b[U + 12 >> 1] = 0;
   a[U + 14 >> 0] = 0;
   c[V >> 2] = 0;
   c[V + 4 >> 2] = 0;
   c[V + 8 >> 2] = 0;
   b[V + 12 >> 1] = 0;
   a[V + 14 >> 0] = 0;
   c[W >> 2] = 0;
   c[W + 4 >> 2] = 0;
   c[W + 8 >> 2] = 0;
   b[W + 12 >> 1] = 0;
   a[W + 14 >> 0] = 0;
   c[X >> 2] = 0;
   c[X + 4 >> 2] = 0;
   c[X + 8 >> 2] = 0;
   b[X + 12 >> 1] = 0;
   a[X + 14 >> 0] = 0;
   c[Y >> 2] = 0;
   c[Y + 4 >> 2] = 0;
   c[Y + 8 >> 2] = 0;
   b[Y + 12 >> 1] = 0;
   a[Y + 14 >> 0] = 0;
   c[jb >> 2] = 0;
   c[jb + 4 >> 2] = 0;
   c[jb + 8 >> 2] = 0;
   b[jb + 12 >> 1] = 0;
   a[jb + 14 >> 0] = 0;
   c[lb >> 2] = 0;
   c[lb + 4 >> 2] = 0;
   c[lb + 8 >> 2] = 0;
   b[lb + 12 >> 1] = 0;
   a[lb + 14 >> 0] = 0;
   c[mb >> 2] = 0;
   c[mb + 4 >> 2] = 0;
   c[mb + 8 >> 2] = 0;
   b[mb + 12 >> 1] = 0;
   a[mb + 14 >> 0] = 0;
   c[rb >> 2] = 0;
   c[rb + 4 >> 2] = 0;
   c[rb + 8 >> 2] = 0;
   b[rb + 12 >> 1] = 0;
   a[rb + 14 >> 0] = 0;
   c[tb >> 2] = 0;
   c[tb + 4 >> 2] = 0;
   c[tb + 8 >> 2] = 0;
   b[tb + 12 >> 1] = 0;
   a[tb + 14 >> 0] = 0;
   q = q + 1 | 0;
  } while ((q | 0) != (B | 0));
  j = 0;
  do {
   Oe(v);
   tb = c[w >> 2] | 0;
   c[w >> 2] = tb + 1;
   b[(c[v >> 2] | 0) + (tb << 1) >> 1] = j;
   j = j + 1 << 16 >> 16;
  } while ((j & 65535 | 0) < (B | 0));
 }
 a[D + 1632 >> 0] = 1;
 tb = D + 1312 | 0;
 c[tb >> 2] = c[E >> 2];
 c[tb + 4 >> 2] = c[E + 4 >> 2];
 c[tb + 8 >> 2] = c[E + 8 >> 2];
 c[tb + 12 >> 2] = c[E + 12 >> 2];
 c[tb + 16 >> 2] = c[E + 16 >> 2];
 c[tb + 20 >> 2] = c[E + 20 >> 2];
 c[tb + 24 >> 2] = c[E + 24 >> 2];
 a[D + 1340 >> 0] = 1;
 tb = D + 1344 | 0;
 a[D + 1372 >> 0] = 1;
 c[tb >> 2] = c[E >> 2];
 c[tb + 4 >> 2] = c[E + 4 >> 2];
 c[tb + 8 >> 2] = c[E + 8 >> 2];
 c[tb + 12 >> 2] = c[E + 12 >> 2];
 c[tb + 16 >> 2] = c[E + 16 >> 2];
 c[tb + 20 >> 2] = c[E + 20 >> 2];
 c[tb + 24 >> 2] = c[E + 24 >> 2];
 tb = D + 1376 | 0;
 a[D + 1404 >> 0] = 1;
 c[tb >> 2] = c[E >> 2];
 c[tb + 4 >> 2] = c[E + 4 >> 2];
 c[tb + 8 >> 2] = c[E + 8 >> 2];
 c[tb + 12 >> 2] = c[E + 12 >> 2];
 c[tb + 16 >> 2] = c[E + 16 >> 2];
 c[tb + 20 >> 2] = c[E + 20 >> 2];
 c[tb + 24 >> 2] = c[E + 24 >> 2];
 tb = D + 1408 | 0;
 c[tb >> 2] = c[E >> 2];
 c[tb + 4 >> 2] = c[E + 4 >> 2];
 c[tb + 8 >> 2] = c[E + 8 >> 2];
 c[tb + 12 >> 2] = c[E + 12 >> 2];
 c[tb + 16 >> 2] = c[E + 16 >> 2];
 c[tb + 20 >> 2] = c[E + 20 >> 2];
 c[tb + 24 >> 2] = c[E + 24 >> 2];
 a[D + 1436 >> 0] = 1;
 tb = c[42818] | 0;
 j = Db + 16 | 0;
 c[j >> 2] = Db;
 c[Db >> 2] = 136340;
 c[Db + 4 >> 2] = F;
 c[D + 1696 >> 2] = re(tb, Db) | 0;
 j = c[j >> 2] | 0;
 do if ((j | 0) == (Db | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else {
  if (!j) break;
  Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
 } while (0);
 $f(F, c[_ >> 2] | 0, c[$ >> 2] | 0);
 tb = c[42817] | 0;
 j = Pb + 16 | 0;
 c[j >> 2] = Pb;
 c[Pb >> 2] = 136304;
 tb = re(tb, Pb) | 0;
 c[(c[42822] | 0) + 156 >> 2] = tb;
 j = c[j >> 2] | 0;
 do if ((j | 0) == (Pb | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else {
  if (!j) break;
  Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
 } while (0);
 G = (c[42822] | 0) + 116 | 0;
 H = G + 40 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 j = c[aa >> 2] | 0;
 if (j | 0) {
  tb = c[j >> 2] | 0;
  c[j >> 2] = tb - 1;
  if ((tb | 0) == 1) {
   zg(c[ca >> 2] | 0);
   c[aa >> 2] = 0;
   c[Z >> 2] = 0;
  }
  c[aa >> 2] = 0;
  c[Z >> 2] = 0;
 }
 if (ba | 0) {
  rb = ba;
  tb = c[rb >> 2] | 0;
  c[rb >> 2] = tb - 1;
  if ((tb | 0) == 1) {
   zg(ba);
   c[da >> 2] = 0;
  }
  c[da >> 2] = 0;
 }
 j = yg(3160) | 0;
 Xg(j | 0, 0, 3160) | 0;
 vf(j);
 l = j + 2128 | 0;
 c[l >> 2] = 0;
 a[j + 2132 >> 0] = 0;
 c[42834] = j;
 c[j + 1416 >> 2] = 1;
 c[j + 1592 >> 2] = 2;
 tb = j + 1408 | 0;
 c[tb >> 2] = 16843009;
 b[tb + 4 >> 1] = 257;
 a[tb + 6 >> 0] = 1;
 Xg(j + 2136 | 0, 0, 1024) | 0;
 c[j + 2168 >> 2] = 54;
 c[j + 2172 >> 2] = 53;
 c[j + 2188 >> 2] = 52;
 c[j + 2200 >> 2] = 112;
 c[j + 2204 >> 2] = 113;
 c[j + 2208 >> 2] = 114;
 c[j + 2212 >> 2] = 69;
 c[j + 2244 >> 2] = 51;
 c[j + 2264 >> 2] = 1;
 c[j + 2268 >> 2] = 61;
 c[j + 2272 >> 2] = 62;
 c[j + 2276 >> 2] = 64;
 c[j + 2280 >> 2] = 63;
 c[j + 2284 >> 2] = 58;
 c[j + 2288 >> 2] = 60;
 c[j + 2292 >> 2] = 57;
 c[j + 2296 >> 2] = 59;
 c[j + 2316 >> 2] = 55;
 c[j + 2320 >> 2] = 56;
 c[j + 2328 >> 2] = 7;
 c[j + 2332 >> 2] = 8;
 c[j + 2336 >> 2] = 9;
 c[j + 2340 >> 2] = 10;
 c[j + 2344 >> 2] = 11;
 c[j + 2348 >> 2] = 12;
 c[j + 2352 >> 2] = 13;
 c[j + 2356 >> 2] = 14;
 c[j + 2360 >> 2] = 15;
 c[j + 2364 >> 2] = 16;
 c[j + 2372 >> 2] = 17;
 c[j + 2392 >> 2] = 18;
 c[j + 2396 >> 2] = 19;
 c[j + 2400 >> 2] = 20;
 c[j + 2404 >> 2] = 21;
 c[j + 2408 >> 2] = 22;
 c[j + 2412 >> 2] = 23;
 c[j + 2416 >> 2] = 24;
 c[j + 2420 >> 2] = 25;
 c[j + 2424 >> 2] = 26;
 c[j + 2428 >> 2] = 27;
 c[j + 2432 >> 2] = 28;
 c[j + 2436 >> 2] = 29;
 c[j + 2440 >> 2] = 30;
 c[j + 2444 >> 2] = 31;
 c[j + 2448 >> 2] = 32;
 c[j + 2452 >> 2] = 33;
 c[j + 2456 >> 2] = 34;
 c[j + 2460 >> 2] = 35;
 c[j + 2464 >> 2] = 36;
 c[j + 2468 >> 2] = 37;
 c[j + 2472 >> 2] = 38;
 c[j + 2476 >> 2] = 39;
 c[j + 2480 >> 2] = 40;
 c[j + 2484 >> 2] = 41;
 c[j + 2488 >> 2] = 42;
 c[j + 2492 >> 2] = 43;
 c[j + 2496 >> 2] = 44;
 c[j + 2508 >> 2] = 120;
 c[j + 2520 >> 2] = 95;
 c[j + 2524 >> 2] = 96;
 c[j + 2528 >> 2] = 97;
 c[j + 2532 >> 2] = 98;
 c[j + 2536 >> 2] = 99;
 c[j + 2540 >> 2] = 100;
 c[j + 2544 >> 2] = 101;
 c[j + 2548 >> 2] = 102;
 c[j + 2552 >> 2] = 103;
 c[j + 2556 >> 2] = 104;
 c[j + 2560 >> 2] = 107;
 c[j + 2564 >> 2] = 109;
 c[j + 2572 >> 2] = 108;
 c[j + 2576 >> 2] = 105;
 c[j + 2580 >> 2] = 106;
 c[j + 2584 >> 2] = 70;
 c[j + 2588 >> 2] = 71;
 c[j + 2592 >> 2] = 72;
 c[j + 2596 >> 2] = 73;
 c[j + 2600 >> 2] = 74;
 c[j + 2604 >> 2] = 75;
 c[j + 2608 >> 2] = 76;
 c[j + 2612 >> 2] = 77;
 c[j + 2616 >> 2] = 78;
 c[j + 2620 >> 2] = 79;
 c[j + 2624 >> 2] = 80;
 c[j + 2628 >> 2] = 81;
 c[j + 2712 >> 2] = 67;
 c[j + 2716 >> 2] = 66;
 c[j + 2828 >> 2] = 4;
 c[j + 2888 >> 2] = 3;
 c[j + 2896 >> 2] = 5;
 c[j + 2900 >> 2] = 6;
 c[j + 2904 >> 2] = 48;
 c[j + 3012 >> 2] = 45;
 c[j + 3016 >> 2] = 46;
 c[j + 3020 >> 2] = 47;
 c[j + 3024 >> 2] = 2;
 c[j + 3032 >> 2] = 115;
 a[j >> 0] = 1;
 a[j + 624 >> 0] = 1;
 a[j + 1288 >> 0] = 1;
 a[j + 1380 >> 0] = 1;
 cc(0, j | 0, 1, 94) | 0;
 La(0, j | 0, 1, 95) | 0;
 wb(0, j | 0, 1, 96) | 0;
 va(152828, j | 0, 1, 97) | 0;
 kb(152828, j | 0, 1, 98) | 0;
 fc(152828, j | 0, 1, 99) | 0;
 wc(152828, j | 0, 0, 100) | 0;
 wa(152828, j | 0, 1, 101) | 0;
 jc(152828, j | 0, 1, 101) | 0;
 qa(152828, j | 0, 1, 101) | 0;
 ec(152828, j | 0, 1, 101) | 0;
 if (a[j + 1413 >> 0] | 0) Ja(j | 0, 1, 102) | 0;
 if (a[j + 1414 >> 0] | 0) Ab(j | 0, 1, 103) | 0;
 rb = c[42818] | 0;
 tb = Cb + 16 | 0;
 c[tb >> 2] = Cb;
 c[Cb >> 2] = 136668;
 c[Cb + 4 >> 2] = j;
 c[l >> 2] = re(rb, Cb) | 0;
 j = c[tb >> 2] | 0;
 do if ((j | 0) == (Cb | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else {
  if (!j) break;
  Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
 } while (0);
 l = yg(1048788) | 0;
 Xg(l | 0, 0, 1048788) | 0;
 o = l + 12 | 0;
 j = l + 16 | 0;
 m = l + 20 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[j + 16 >> 2] = 0;
 c[j + 20 >> 2] = 0;
 c[j + 24 >> 2] = 0;
 c[l + 44 >> 2] = 16;
 c[l + 48 >> 2] = 65536;
 a[l + 52 >> 0] = 0;
 tb = l + 56 | 0;
 c[tb >> 2] = 0;
 c[tb + 4 >> 2] = 0;
 c[tb + 8 >> 2] = 0;
 c[tb + 12 >> 2] = 0;
 c[l + 72 >> 2] = 16;
 c[l + 76 >> 2] = 65536;
 tb = l + 80 | 0;
 c[tb >> 2] = 0;
 c[tb + 4 >> 2] = 0;
 c[tb + 8 >> 2] = 0;
 c[tb + 12 >> 2] = 0;
 c[l + 96 >> 2] = 16;
 c[l + 100 >> 2] = 65536;
 a[l + 104 >> 0] = 0;
 tb = l + 108 | 0;
 c[tb >> 2] = 0;
 c[tb + 4 >> 2] = 0;
 c[tb + 8 >> 2] = 0;
 c[tb + 12 >> 2] = 0;
 c[l + 124 >> 2] = 16;
 c[l + 128 >> 2] = 65536;
 a[l + 132 >> 0] = 0;
 c[l + 136 >> 2] = 0;
 a[l + 140 >> 0] = 0;
 tb = l + 144 | 0;
 a[tb >> 0] = 0;
 c[l + 148 >> 2] = 0;
 c[l + 152 >> 2] = 0;
 b[l + 156 >> 1] = 255;
 rb = l + 160 | 0;
 c[rb >> 2] = 0;
 c[rb + 4 >> 2] = 0;
 c[rb + 8 >> 2] = 0;
 c[rb + 12 >> 2] = 0;
 c[l + 176 >> 2] = 16;
 c[l + 180 >> 2] = 65536;
 rb = l + 184 | 0;
 c[rb >> 2] = 0;
 c[rb + 4 >> 2] = 0;
 c[rb + 8 >> 2] = 0;
 c[rb + 12 >> 2] = 0;
 c[l + 200 >> 2] = 16;
 c[l + 204 >> 2] = 65536;
 a[l + 208 >> 0] = 0;
 c[42836] = l;
 rb = l;
 c[rb >> 2] = 128;
 c[rb + 4 >> 2] = 256;
 c[l + 8 >> 2] = 256;
 a[o >> 0] = 1;
 c[j >> 2] = tb;
 j = Bc(0) | 0;
 c[m >> 2] = j;
 do if (!j) he(164149, ea); else {
  j = Ma(j | 0, 0) | 0;
  c[l + 24 >> 2] = j;
  if (!j) {
   he(164174, fa);
   break;
  }
  if (!((Ta(j | 0) | 0) << 24 >> 24)) {
   he(164202, ga);
   break;
  }
  j = Qb(c[m >> 2] | 0, 4101) | 0;
  if (j | 0) {
   c[ia >> 2] = j;
   ge(164235, ia);
  }
  m = Qb(c[m >> 2] | 0, 4102) | 0;
  if (m | 0) {
   c[Cb >> 2] = 0;
   c[Cb + 4 >> 2] = 0;
   c[Cb + 8 >> 2] = 0;
   n = m;
   k : do if (!(n & 3)) {
    j = m;
    Bb = 319;
   } else {
    j = m;
    l = n;
    while (1) {
     if (!(a[j >> 0] | 0)) {
      j = l;
      break k;
     }
     j = j + 1 | 0;
     l = j;
     if (!(l & 3)) {
      Bb = 319;
      break;
     }
    }
   } while (0);
   if ((Bb | 0) == 319) {
    while (1) {
     l = c[j >> 2] | 0;
     if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
    }
    if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
   }
   ve(Cb, m, 0, j - n | 0);
   xe(Cb, 164261, 164263);
   j = c[Cb >> 2] | 0;
   tb = (j | 0) == 0;
   c[ka >> 2] = tb ? 171852 : j;
   ge(164265, ka);
   if (!tb) zg(j);
  }
  j = Ia(45058) | 0;
  if (j | 0) {
   c[la >> 2] = j;
   ge(164285, la);
  }
  j = Ia(45059) | 0;
  if (j | 0) {
   c[ma >> 2] = j;
   ge(164301, ma);
  }
  j = Ia(45057) | 0;
  if (j | 0) {
   c[na >> 2] = j;
   ge(164318, na);
  }
  m = Ia(45060) | 0;
  if (m | 0) {
   c[Cb >> 2] = 0;
   c[Cb + 4 >> 2] = 0;
   c[Cb + 8 >> 2] = 0;
   n = m;
   l : do if (!(n & 3)) {
    j = m;
    Bb = 337;
   } else {
    j = m;
    l = n;
    while (1) {
     if (!(a[j >> 0] | 0)) {
      j = l;
      break l;
     }
     j = j + 1 | 0;
     l = j;
     if (!(l & 3)) {
      Bb = 337;
      break;
     }
    }
   } while (0);
   if ((Bb | 0) == 337) {
    while (1) {
     l = c[j >> 2] | 0;
     if (!((l & -2139062144 ^ -2139062144) & l + -16843009)) j = j + 4 | 0; else break;
    }
    if ((l & 255) << 24 >> 24) do j = j + 1 | 0; while ((a[j >> 0] | 0) != 0);
   }
   ve(Cb, m, 0, j - n | 0);
   xe(Cb, 164261, 164263);
   j = c[Cb >> 2] | 0;
   tb = (j | 0) == 0;
   c[oa >> 2] = tb ? 171852 : j;
   ge(164333, oa);
   if (!tb) zg(j);
  }
  a[o >> 0] = 1;
 } while (0);
 B = c[42836] | 0;
 D = B + 28 | 0;
 a[B + 208 >> 0] = 1;
 b[B + 156 >> 1] = 0;
 x = B + 160 | 0;
 y = B + 172 | 0;
 z = B + 168 | 0;
 o = (c[y >> 2] | 0) - (c[z >> 2] | 0) | 0;
 p = o + 128 | 0;
 A = B + 164 | 0;
 if ((c[A >> 2] | 0) < (p | 0)) {
  q = yg(p * 144 | 0) | 0;
  if ((o | 0) > 0) {
   l = q;
   m = 0;
   n = (c[x >> 2] | 0) + ((c[z >> 2] | 0) * 144 | 0) | 0;
   do {
    Zf(l, n);
    l = l + 144 | 0;
    j = c[n + 48 >> 2] | 0;
    do if ((j | 0) == (n + 32 | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else {
     if (!j) break;
     Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
    } while (0);
    c[n + 16 >> 2] = 0;
    n = n + 144 | 0;
    m = m + 1 | 0;
   } while ((m | 0) != (o | 0));
  }
  j = c[x >> 2] | 0;
  if (j | 0) zg(j);
  c[x >> 2] = q;
  c[A >> 2] = p;
  c[z >> 2] = 0;
  c[y >> 2] = o;
 }
 t = B + 176 | 0;
 c[t >> 2] = 0;
 u = B + 180 | 0;
 c[u >> 2] = 0;
 v = B + 184 | 0;
 w = B + 196 | 0;
 j = B + 192 | 0;
 l = (c[w >> 2] | 0) - (c[j >> 2] | 0) | 0;
 m = l + 128 | 0;
 n = B + 188 | 0;
 if ((c[n >> 2] | 0) < (m | 0)) {
  o = yg(m << 1) | 0;
  p = c[v >> 2] | 0;
  if ((l | 0) > 0) {
   q = o;
   r = 0;
   s = p + (c[j >> 2] << 1) | 0;
   while (1) {
    b[q >> 1] = b[s >> 1] | 0;
    r = r + 1 | 0;
    if ((r | 0) == (l | 0)) break; else {
     q = q + 2 | 0;
     s = s + 2 | 0;
    }
   }
  }
  if (p | 0) zg(p);
  c[v >> 2] = o;
  c[n >> 2] = m;
  c[j >> 2] = 0;
  c[w >> 2] = l;
 }
 r = 0;
 do {
  j = c[A >> 2] | 0;
  l = c[y >> 2] | 0;
  do if ((j | 0) == (l | 0)) {
   l = j >> 1;
   m = c[t >> 2] | 0;
   if ((l | 0) >= (m | 0)) {
    m = c[u >> 2] | 0;
    m = (l | 0) > (m | 0) ? m : l;
   }
   q = m + j | 0;
   if (!m) break;
   j = j - (c[z >> 2] | 0) | 0;
   p = yg(q * 144 | 0) | 0;
   if ((j | 0) > 0) {
    m = p;
    n = 0;
    o = (c[x >> 2] | 0) + ((c[z >> 2] | 0) * 144 | 0) | 0;
    do {
     Zf(m, o);
     m = m + 144 | 0;
     l = c[o + 48 >> 2] | 0;
     do if ((l | 0) == (o + 32 | 0)) Pc[c[(c[l >> 2] | 0) + 16 >> 2] & 127](l); else {
      if (!l) break;
      Pc[c[(c[l >> 2] | 0) + 20 >> 2] & 127](l);
     } while (0);
     c[o + 16 >> 2] = 0;
     o = o + 144 | 0;
     n = n + 1 | 0;
    } while ((n | 0) != (j | 0));
   }
   l = c[x >> 2] | 0;
   if (l | 0) zg(l);
   c[x >> 2] = p;
   c[A >> 2] = q;
   c[z >> 2] = 0;
   c[y >> 2] = j;
  } else j = l; while (0);
  c[y >> 2] = j + 1;
  tb = c[x >> 2] | 0;
  rb = tb + (j * 144 | 0) | 0;
  Xg(rb | 0, 0, 144) | 0;
  c[rb >> 2] = -1;
  c[rb + 4 >> 2] = -1;
  c[tb + (j * 144 | 0) + 8 >> 2] = 0;
  c[tb + (j * 144 | 0) + 12 >> 2] = 0;
  c[Cb >> 2] = 0;
  ue(tb + (j * 144 | 0) + 16 | 0, Cb);
  c[tb + (j * 144 | 0) + 20 >> 2] = -1;
  c[tb + (j * 144 | 0) + 24 >> 2] = 22050;
  c[tb + (j * 144 | 0) + 48 >> 2] = 0;
  c[tb + (j * 144 | 0) + 56 >> 2] = 16;
  c[tb + (j * 144 | 0) + 64 >> 2] = 0;
  c[tb + (j * 144 | 0) + 68 >> 2] = 0;
  c[tb + (j * 144 | 0) + 72 >> 2] = 0;
  r = r + 1 | 0;
 } while ((r | 0) != 128);
 j = 0;
 do {
  Oe(v);
  tb = c[w >> 2] | 0;
  c[w >> 2] = tb + 1;
  b[(c[v >> 2] | 0) + (tb << 1) >> 1] = j;
  j = j + 1 << 16 >> 16;
 } while ((j & 65535) < 128);
 a[B + 144 >> 0] = 1;
 $f(D, 256, 256);
 rb = yg(1152280) | 0;
 Xg(rb | 0, 0, 1152280) | 0;
 Rf(rb);
 c[42835] = rb;
 c[ra >> 2] = 0;
 c[ra + 4 >> 2] = 0;
 c[ra + 8 >> 2] = 0;
 c[ra + 12 >> 2] = 0;
 c[ra + 16 >> 2] = 0;
 c[ra + 20 >> 2] = 0;
 c[ra + 24 >> 2] = 1;
 rb = ra + 28 | 0;
 c[rb >> 2] = 0;
 tb = ra + 32 | 0;
 c[tb >> 2] = 20;
 m = ra + 40 | 0;
 mb = m;
 c[mb >> 2] = -1;
 c[mb + 4 >> 2] = -1;
 mb = ra + 48 | 0;
 b[mb >> 1] = 21;
 g[ra + 52 >> 2] = 0.0;
 g[ra + 56 >> 2] = 0.0;
 g[ra + 60 >> 2] = 0.0;
 g[ra + 64 >> 2] = 1.0;
 g[ra + 68 >> 2] = 1.0;
 a[ra + 72 >> 0] = 0;
 a[ra + 73 >> 0] = 3;
 c[Cb >> 2] = 0;
 n = ra + 76 | 0;
 ue(n, Cb);
 o = ra + 80 | 0;
 c[o >> 2] = -1;
 p = ra + 88 | 0;
 q = p;
 c[q >> 2] = -1;
 c[q + 4 >> 2] = -1;
 q = ra + 680 | 0;
 Xg(ra + 96 | 0, 0, 584) | 0;
 a[q >> 0] = a[q >> 0] & -128 | 8;
 c[ra + 8 >> 2] = 224;
 c[ra + 12 >> 2] = 288;
 b[mb >> 1] = b[mb >> 1] & -4048 | 576;
 mb = f + 40 | 0;
 r = c[42822] | 0;
 j = r + 1192 | 0;
 l = ra + 76 | 0;
 cg(bb, j, l);
 do if ((c[bb + 4 >> 2] | 0) == -1) {
  D = r + 1576 | 0;
  A = c[D >> 2] | 0;
  c[D >> 2] = A + 1;
  D = r + 1616 | 0;
  B = c[D >> 2] | 0;
  E = b[(c[r + 1608 >> 2] | 0) + (B << 1) >> 1] | 0;
  c[D >> 2] = B + 1;
  D = _g(e[r + 1580 >> 1] | 0, 0, 16) | 0;
  A = A | C;
  E = D | E & 65535;
  D = bb;
  c[D >> 2] = E;
  c[D + 4 >> 2] = A;
  D = Ib;
  c[D >> 2] = E;
  c[D + 4 >> 2] = A;
  c[Jb >> 2] = c[(c[r + 1168 >> 2] | 0) + ((c[r + 1180 >> 2] | 0) + -1 << 2) >> 2];
  ag(j, l, Ib, Jb);
  D = r + 1592 | 0;
  A = (c[D >> 2] | 0) + (e[bb >> 1] | 0) | 0;
  E = r + 1584 | 0;
  B = c[E >> 2] | 0;
  j = B + (A * 776 | 0) | 0;
  c[B + (A * 776 | 0) + 8 >> 2] = 1;
  F = r + 1572 | 0;
  c[B + (A * 776 | 0) + 12 >> 2] = c[F >> 2];
  if ((j | 0) != (bb | 0)) {
   oa = bb;
   jb = c[oa + 4 >> 2] | 0;
   lb = j;
   c[lb >> 2] = c[oa >> 2];
   c[lb + 4 >> 2] = jb;
  }
  v = B + (A * 776 | 0) + 16 | 0;
  G = v;
  s = ra;
  H = G + 36 | 0;
  do {
   c[G >> 2] = c[s >> 2];
   G = G + 4 | 0;
   s = s + 4 | 0;
  } while ((G | 0) < (H | 0));
  if ((v | 0) == (ra | 0)) {
   j = B + (A * 776 | 0) + 64 | 0;
   lb = ra + 48 | 0;
   c[j >> 2] = c[lb >> 2];
   c[j + 4 >> 2] = c[lb + 4 >> 2];
   c[j + 8 >> 2] = c[lb + 8 >> 2];
   c[j + 12 >> 2] = c[lb + 12 >> 2];
   c[j + 16 >> 2] = c[lb + 16 >> 2];
   c[j + 20 >> 2] = c[lb + 20 >> 2];
   c[j + 24 >> 2] = c[lb + 24 >> 2];
   j = c[o >> 2] | 0;
  } else {
   jb = m;
   oa = c[jb + 4 >> 2] | 0;
   j = B + (A * 776 | 0) + 56 | 0;
   c[j >> 2] = c[jb >> 2];
   c[j + 4 >> 2] = oa;
   j = B + (A * 776 | 0) + 64 | 0;
   oa = ra + 48 | 0;
   c[j >> 2] = c[oa >> 2];
   c[j + 4 >> 2] = c[oa + 4 >> 2];
   c[j + 8 >> 2] = c[oa + 8 >> 2];
   c[j + 12 >> 2] = c[oa + 12 >> 2];
   c[j + 16 >> 2] = c[oa + 16 >> 2];
   c[j + 20 >> 2] = c[oa + 20 >> 2];
   c[j + 24 >> 2] = c[oa + 24 >> 2];
   j = B + (A * 776 | 0) + 92 | 0;
   c[j >> 2] = 0;
   ue(j, n);
   j = c[o >> 2] | 0;
   oa = p;
   jb = c[oa + 4 >> 2] | 0;
   lb = B + (A * 776 | 0) + 104 | 0;
   c[lb >> 2] = c[oa >> 2];
   c[lb + 4 >> 2] = jb;
  }
  z = B + (A * 776 | 0) + 96 | 0;
  c[z >> 2] = j;
  $e(B + (A * 776 | 0) + 112 | 0, ra + 96 | 0);
  x = B + (A * 776 | 0) + 696 | 0;
  j = a[q >> 0] | 0;
  a[x >> 0] = j;
  y = r + 1376 | 0;
  m : do if (!(j & 8)) {
   if (!(j & 4)) {
    k = 6;
    break;
   }
   s = B + (A * 776 | 0) + 24 | 0;
   o = c[s >> 2] | 0;
   t = B + (A * 776 | 0) + 28 | 0;
   p = c[t >> 2] | 0;
   u = B + (A * 776 | 0) + 20 | 0;
   switch (c[u >> 2] | 0) {
   case 0:
    {
     ab = 3553;
     break;
    }
   case 2:
    {
     ab = 34067;
     break;
    }
   default:
    {
     ie(152015, sa);
     Wb();
    }
   }
   r = B + (A * 776 | 0) + 44 | 0;
   l = c[r >> 2] | 0;
   do switch (l | 0) {
   case 6:
   case 5:
   case 2:
   case 4:
   case 0:
    {
     $a = 6408;
     break;
    }
   case 3:
   case 1:
    {
     j = 6407;
     Bb = 477;
     break;
    }
   case 7:
    {
     j = 6409;
     Bb = 477;
     break;
    }
   case 11:
    {
     j = 6402;
     Bb = 477;
     break;
    }
   case 12:
    {
     j = 34041;
     Bb = 477;
     break;
    }
   case 8:
    {
     j = 33777;
     Bb = 477;
     break;
    }
   case 9:
    {
     j = 33778;
     Bb = 477;
     break;
    }
   case 10:
    {
     j = 33779;
     Bb = 477;
     break;
    }
   case 13:
    {
     j = 35841;
     Bb = 477;
     break;
    }
   case 14:
    {
     j = 35840;
     Bb = 477;
     break;
    }
   case 15:
    {
     j = 35843;
     Bb = 477;
     break;
    }
   case 16:
    {
     j = 35842;
     Bb = 477;
     break;
    }
   case 17:
    {
     j = 37492;
     Bb = 477;
     break;
    }
   case 18:
    {
     j = 37493;
     Bb = 477;
     break;
    }
   default:
    {
     ie(151736, ya);
     Wb();
    }
   } while (0);
   if ((Bb | 0) == 477) $a = j;
   n : do switch (l | 0) {
   case 5:
    {
     k = 6408;
     h = 5126;
     break;
    }
   case 6:
    {
     k = 6408;
     h = 5131;
     break;
    }
   case 7:
   case 1:
   case 0:
    {
     do switch (l | 0) {
     case 6:
     case 5:
     case 2:
     case 4:
     case 0:
      {
       k = 6408;
       h = 5121;
       Bb = 498;
       break n;
      }
     case 3:
     case 1:
      {
       k = 6407;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 11:
      {
       h = 5121;
       Bb = 485;
       break n;
      }
     case 12:
      {
       h = 5121;
       Bb = 486;
       break n;
      }
     case 7:
      {
       k = 6409;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 8:
      {
       k = 33777;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 9:
      {
       k = 33778;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 10:
      {
       k = 33779;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 13:
      {
       k = 35841;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 14:
      {
       k = 35840;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 15:
      {
       k = 35843;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 16:
      {
       k = 35842;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 17:
      {
       k = 37492;
       h = 5121;
       Bb = 497;
       break n;
      }
     case 18:
      {
       k = 37493;
       h = 5121;
       Bb = 497;
       break n;
      }
     default:
      {
       ie(151736, Da);
       Wb();
      }
     } while (0);
     break;
    }
   case 4:
    {
     k = 6408;
     h = 32820;
     break;
    }
   case 3:
    {
     k = 6407;
     h = 33635;
     Bb = 497;
     break;
    }
   case 2:
    {
     k = 6408;
     h = 32819;
     break;
    }
   case 11:
    {
     h = 5123;
     Bb = 485;
     break;
    }
   case 12:
    {
     h = 34042;
     Bb = 486;
     break;
    }
   default:
    {
     ie(151783, Ca);
     Wb();
    }
   } while (0);
   if ((Bb | 0) == 485) {
    k = 6402;
    Bb = 497;
   } else if ((Bb | 0) == 486) {
    k = 34041;
    Bb = 497;
   }
   if ((Bb | 0) == 497) Bb = 498;
   o : do if ((Bb | 0) == 498) {
    j = l + -8 | 0;
    if (j >>> 0 >= 11) break;
    if (!(2023 >>> (j & 2047) & 1)) break;
    switch (l | 0) {
    case 10:
    case 9:
    case 8:
     {
      if (a[171853] | 0) break o;
      break;
     }
    case 16:
    case 15:
    case 14:
    case 13:
     {
      if (a[171854] | 0) break o;
      break;
     }
    default:
     {}
    }
    k = c[B + (A * 776 | 0) + 92 >> 2] | 0;
    c[Za >> 2] = c[((k | 0) == 0 ? 136292 : k + 12 | 0) >> 2];
    he(151672, Za);
    k = 4;
    break m;
   } while (0);
   m = B + (A * 776 | 0) + 764 | 0;
   a[m >> 0] = (c[v >> 2] | 0) == 2 ? 2 : 1;
   q = B + (A * 776 | 0) + 40 | 0;
   n = 0;
   do {
    G = (c[y >> 2] | 0) + 304 | 0;
    H = G + 128 | 0;
    do {
     c[G >> 2] = 0;
     G = G + 4 | 0;
    } while ((G | 0) < (H | 0));
    c[Cb >> 2] = 0;
    gb(1, Cb | 0);
    Ob(33984);
    Hb(ab | 0, c[Cb >> 2] | 0);
    c[B + (A * 776 | 0) + 768 + (n << 2) >> 2] = c[Cb >> 2];
    rf(v);
    j = c[q >> 2] | 0;
    if ((j | 0) > 0) {
     l = 0;
     do {
      jb = o >> l;
      lb = p >> l;
      Zb(ab | 0, l | 0, k | 0, ((jb | 0) == 0 ? 1 : jb) | 0, ((lb | 0) == 0 ? 1 : lb) | 0, 0, $a | 0, h | 0, 0);
      l = l + 1 | 0;
     } while ((l | 0) != (j | 0));
    }
    n = n + 1 | 0;
   } while ((n | 0) < (d[m >> 0] | 0));
   c[Cb >> 2] = 0;
   o = Cb + 4 | 0;
   c[o >> 2] = -2;
   p = Cb + 8 | 0;
   c[p >> 2] = -1;
   j = Cb + 12 | 0;
   c[j >> 2] = 20;
   c[Cb + 16 >> 2] = 20;
   k = Cb + 20 | 0;
   c[k >> 2] = -1;
   l = Cb + 24 | 0;
   c[l >> 2] = 0;
   m = Cb + 28 | 0;
   c[m >> 2] = 0;
   c[Cb + 32 >> 2] = 0;
   n = Cb + 36 | 0;
   c[n >> 2] = 1;
   a[Cb + 40 >> 0] = 0;
   a[Cb + 41 >> 0] = 0;
   a[Cb + 42 >> 0] = 0;
   h = B + (A * 776 | 0) + 92 | 0;
   if ((h | 0) != (Cb | 0)) {
    c[Cb >> 2] = 0;
    ue(Cb, h);
   }
   h = c[z >> 2] | 0;
   c[o >> 2] = h;
   c[p >> 2] = c[u >> 2];
   c[j >> 2] = c[r >> 2];
   c[k >> 2] = c[B + (A * 776 | 0) + 16 >> 2];
   c[l >> 2] = c[s >> 2];
   c[m >> 2] = c[t >> 2];
   c[n >> 2] = c[q >> 2];
   j = B + (A * 776 | 0) + 704 | 0;
   if ((Cb | 0) != (j | 0)) {
    c[j >> 2] = 0;
    ue(j, Cb);
    h = c[o >> 2] | 0;
   }
   c[B + (A * 776 | 0) + 708 >> 2] = h;
   k = B + (A * 776 | 0) + 712 | 0;
   c[k >> 2] = c[p >> 2];
   c[k + 4 >> 2] = c[p + 4 >> 2];
   c[k + 8 >> 2] = c[p + 8 >> 2];
   c[k + 12 >> 2] = c[p + 12 >> 2];
   c[k + 16 >> 2] = c[p + 16 >> 2];
   c[k + 20 >> 2] = c[p + 20 >> 2];
   c[k + 24 >> 2] = c[p + 24 >> 2];
   c[k + 28 >> 2] = c[p + 28 >> 2];
   b[k + 32 >> 1] = b[p + 32 >> 1] | 0;
   a[k + 34 >> 0] = a[p + 34 >> 0] | 0;
   c[B + (A * 776 | 0) + 748 >> 2] = ab;
   k = 3;
  } else {
   G = (c[y >> 2] | 0) + 304 | 0;
   H = G + 128 | 0;
   do {
    c[G >> 2] = 0;
    G = G + 4 | 0;
   } while ((G | 0) < (H | 0));
   c[Cb >> 2] = 0;
   hb(36006, Cb | 0);
   h = a[x >> 0] | 0;
   do if (!(h & 16)) if (!(h & 32)) {
    v = c[B + (A * 776 | 0) + 28 >> 2] | 0;
    w = c[B + (A * 776 | 0) + 24 >> 2] | 0;
    break;
   } else {
    lb = c[r + 1396 >> 2] | 0;
    w = (c[lb + 24 >> 2] | 0) + (e[B + (A * 776 | 0) + 56 >> 1] | 0) | 0;
    lb = c[lb + 16 >> 2] | 0;
    v = c[lb + (w * 776 | 0) + 732 >> 2] | 0;
    w = c[lb + (w * 776 | 0) + 728 >> 2] | 0;
    break;
   } else {
    w = c[r + 1380 >> 2] | 0;
    v = ~~(+(c[w + 136 >> 2] | 0) * +g[B + (A * 776 | 0) + 36 >> 2]);
    w = ~~(+(c[w + 132 >> 2] | 0) * +g[B + (A * 776 | 0) + 32 >> 2]);
   } while (0);
   c[Db >> 2] = 0;
   sb(1, Db | 0);
   qb(36160, c[Db >> 2] | 0);
   u = B + (A * 776 | 0) + 44 | 0;
   j = c[u >> 2] | 0;
   do switch (j | 0) {
   case 6:
   case 5:
   case 2:
   case 4:
   case 0:
    {
     Fa = 6408;
     break;
    }
   case 3:
   case 1:
    {
     h = 6407;
     Bb = 408;
     break;
    }
   case 7:
    {
     h = 6409;
     Bb = 408;
     break;
    }
   case 11:
    {
     h = 6402;
     Bb = 408;
     break;
    }
   case 12:
    {
     h = 34041;
     Bb = 408;
     break;
    }
   case 8:
    {
     h = 33777;
     Bb = 408;
     break;
    }
   case 9:
    {
     h = 33778;
     Bb = 408;
     break;
    }
   case 10:
    {
     h = 33779;
     Bb = 408;
     break;
    }
   case 13:
    {
     h = 35841;
     Bb = 408;
     break;
    }
   case 14:
    {
     h = 35840;
     Bb = 408;
     break;
    }
   case 15:
    {
     h = 35843;
     Bb = 408;
     break;
    }
   case 16:
    {
     h = 35842;
     Bb = 408;
     break;
    }
   case 17:
    {
     h = 37492;
     Bb = 408;
     break;
    }
   case 18:
    {
     h = 37493;
     Bb = 408;
     break;
    }
   default:
    {
     ie(151736, ta);
     Wb();
    }
   } while (0);
   if ((Bb | 0) == 408) Fa = h;
   switch (j | 0) {
   case 6:
   case 5:
   case 2:
   case 4:
   case 0:
    {
     h = 6408;
     Bb = 412;
     break;
    }
   case 3:
   case 1:
    {
     h = 6407;
     Bb = 412;
     break;
    }
   case 7:
    {
     h = 6409;
     Bb = 414;
     break;
    }
   case 11:
    {
     h = 6402;
     Bb = 418;
     break;
    }
   case 12:
    {
     h = 34041;
     Bb = 419;
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
     ie(151783, za);
     Wb();
     break;
    }
   default:
    {
     ie(151736, ua);
     Wb();
    }
   }
   p : do if ((Bb | 0) == 412) switch (j | 0) {
   case 5:
    {
     Aa = h;
     Ba = 5126;
     break p;
    }
   case 7:
   case 1:
   case 0:
    {
     Bb = 414;
     break p;
    }
   case 11:
    {
     Bb = 418;
     break p;
    }
   case 12:
    {
     Bb = 419;
     break p;
    }
   case 6:
    {
     Aa = h;
     Ba = 5131;
     break p;
    }
   case 4:
    {
     Aa = h;
     Ba = 32820;
     break p;
    }
   case 3:
    {
     Aa = h;
     Ba = 33635;
     break p;
    }
   case 2:
    {
     Aa = h;
     Ba = 32819;
     break p;
    }
   default:
    {
     ie(151783, za);
     Wb();
    }
   } while (0);
   if ((Bb | 0) == 414) {
    Aa = h;
    Ba = 5121;
   } else if ((Bb | 0) == 418) {
    Aa = h;
    Ba = 5123;
   } else if ((Bb | 0) == 419) {
    Aa = h;
    Ba = 34042;
   }
   c[Eb >> 2] = 0;
   gb(1, Eb | 0);
   Ob(33984);
   Hb(3553, c[Eb >> 2] | 0);
   h = B + (A * 776 | 0) + 64 | 0;
   switch ((e[h >> 1] | 0) >>> 9 & 7 | 0) {
   case 0:
    {
     Ga = 9728;
     break;
    }
   case 1:
    {
     Ga = 9729;
     break;
    }
   case 2:
    {
     Ga = 9984;
     break;
    }
   case 3:
    {
     Ga = 9986;
     break;
    }
   case 4:
    {
     Ga = 9985;
     break;
    }
   case 5:
    {
     Ga = 9987;
     break;
    }
   default:
    {
     ie(151925, Oa);
     Wb();
    }
   }
   Gc(3553, 10241, Ga | 0);
   switch ((e[h >> 1] | 0) >>> 6 & 7 | 0) {
   case 0:
    {
     Ha = 9728;
     break;
    }
   case 1:
    {
     Ha = 9729;
     break;
    }
   case 2:
    {
     Ha = 9984;
     break;
    }
   case 3:
    {
     Ha = 9986;
     break;
    }
   case 4:
    {
     Ha = 9985;
     break;
    }
   case 5:
    {
     Ha = 9987;
     break;
    }
   default:
    {
     ie(151925, Qa);
     Wb();
    }
   }
   Gc(3553, 10240, Ha | 0);
   switch (b[h >> 1] & 3 | 0) {
   case 0:
    {
     Ka = 33071;
     break;
    }
   case 1:
    {
     Ka = 10497;
     break;
    }
   case 2:
    {
     Ka = 33648;
     break;
    }
   default:
    {
     ie(151971, Sa);
     Wb();
    }
   }
   Gc(3553, 10242, Ka | 0);
   switch ((e[h >> 1] | 0) >>> 2 & 3 | 0) {
   case 0:
    {
     Na = 33071;
     break;
    }
   case 1:
    {
     Na = 10497;
     break;
    }
   case 2:
    {
     Na = 33648;
     break;
    }
   default:
    {
     ie(151971, Ua);
     Wb();
    }
   }
   Gc(3553, 10243, Na | 0);
   Zb(3553, 0, Aa | 0, w | 0, v | 0, 0, Fa | 0, Ba | 0, 0);
   yc(36160, 36064, 3553, c[Eb >> 2] | 0, 0);
   c[Fb >> 2] = 0;
   do if (!(a[x >> 0] & 32)) {
    if ((c[B + (A * 776 | 0) + 48 >> 2] | 0) == 20) break;
    ja(1, Fb | 0);
    Pa(36161, c[Fb >> 2] | 0);
    h = B + (A * 776 | 0) + 48 | 0;
    switch (c[h >> 2] | 0) {
    case 11:
     {
      Va = 33189;
      break;
     }
    case 12:
     {
      Va = 35056;
      break;
     }
    default:
     {
      ie(151828, Wa);
      Wb();
     }
    }
    pc(36161, Va | 0, w | 0, v | 0);
    Ea(36160, 36096, 36161, c[Fb >> 2] | 0);
    if ((c[h >> 2] | 0) != 12) break;
    Ea(36160, 36128, 36161, c[Fb >> 2] | 0);
   } else {
    h = c[189] | 0;
    Ea(36160, 36096, 36161, h | 0);
    if ((c[12] | 0) != 12) break;
    Ea(36160, 36128, 36161, h | 0);
   } while (0);
   if ((yb(36160) | 0) != 36053) he(151592, Xa);
   G = (c[y >> 2] | 0) + 304 | 0;
   H = G + 128 | 0;
   do {
    c[G >> 2] = 0;
    G = G + 4 | 0;
   } while ((G | 0) < (H | 0));
   c[Gb >> 2] = 0;
   s = Gb + 4 | 0;
   c[s >> 2] = -2;
   t = Gb + 8 | 0;
   c[t >> 2] = -1;
   j = Gb + 12 | 0;
   c[j >> 2] = 20;
   k = Gb + 16 | 0;
   c[k >> 2] = 20;
   l = Gb + 20 | 0;
   c[l >> 2] = -1;
   m = Gb + 24 | 0;
   c[m >> 2] = 0;
   n = Gb + 28 | 0;
   c[n >> 2] = 0;
   c[Gb + 32 >> 2] = 0;
   o = Gb + 36 | 0;
   c[o >> 2] = 1;
   p = Gb + 40 | 0;
   a[p >> 0] = 0;
   q = Gb + 41 | 0;
   a[q >> 0] = 0;
   r = Gb + 42 | 0;
   a[r >> 0] = 0;
   h = B + (A * 776 | 0) + 92 | 0;
   if ((h | 0) != (Gb | 0)) {
    c[Gb >> 2] = 0;
    ue(Gb, h);
   }
   h = c[z >> 2] | 0;
   c[s >> 2] = h;
   c[t >> 2] = 0;
   c[j >> 2] = c[u >> 2];
   j = c[B + (A * 776 | 0) + 48 >> 2] | 0;
   c[k >> 2] = j;
   c[l >> 2] = 0;
   c[m >> 2] = w;
   c[n >> 2] = v;
   c[o >> 2] = 1;
   a[p >> 0] = 1;
   a[q >> 0] = (j | 0) != 20 | (d[x >> 0] | 0) >>> 5 & 1;
   a[r >> 0] = (d[x >> 0] | 0) >>> 5 & 1;
   j = B + (A * 776 | 0) + 704 | 0;
   if ((Gb | 0) != (j | 0)) {
    c[j >> 2] = 0;
    ue(j, Gb);
    h = c[s >> 2] | 0;
   }
   c[B + (A * 776 | 0) + 708 >> 2] = h;
   k = B + (A * 776 | 0) + 712 | 0;
   c[k >> 2] = c[t >> 2];
   c[k + 4 >> 2] = c[t + 4 >> 2];
   c[k + 8 >> 2] = c[t + 8 >> 2];
   c[k + 12 >> 2] = c[t + 12 >> 2];
   c[k + 16 >> 2] = c[t + 16 >> 2];
   c[k + 20 >> 2] = c[t + 20 >> 2];
   c[k + 24 >> 2] = c[t + 24 >> 2];
   c[k + 28 >> 2] = c[t + 28 >> 2];
   b[k + 32 >> 1] = b[t + 32 >> 1] | 0;
   a[k + 34 >> 0] = a[t + 34 >> 0] | 0;
   c[B + (A * 776 | 0) + 768 >> 2] = c[Eb >> 2];
   c[B + (A * 776 | 0) + 752 >> 2] = c[Db >> 2];
   c[B + (A * 776 | 0) + 756 >> 2] = c[Fb >> 2];
   c[B + (A * 776 | 0) + 748 >> 2] = 3553;
   qb(36160, c[Cb >> 2] | 0);
   k = 3;
  } while (0);
  l = c[bb >> 2] | 0;
  m = l & 65535;
  j = (c[D >> 2] | 0) + m | 0;
  h = c[E >> 2] | 0;
  jb = bb;
  lb = h + (j * 776 | 0) | 0;
  if ((c[jb >> 2] | 0) == (c[lb >> 2] | 0) ? (c[jb + 4 >> 2] | 0) == (c[lb + 4 >> 2] | 0) : 0) {
   c[h + (j * 776 | 0) + 8 >> 2] = k;
   c[h + (j * 776 | 0) + 12 >> 2] = c[F >> 2];
   break;
  } else {
   c[cb >> 2] = l >>> 16;
   c[cb + 4 >> 2] = m;
   he(164012, cb);
   break;
  }
 } while (0);
 if ((mb | 0) != (bb | 0)) {
  cb = bb;
  jb = c[cb + 4 >> 2] | 0;
  lb = mb;
  c[lb >> 2] = c[cb >> 2];
  c[lb + 4 >> 2] = jb;
 }
 c[ob >> 2] = -1;
 c[ob + 4 >> 2] = -1;
 a[ob + 10 >> 0] = 17;
 a[ob + 11 >> 0] = 13;
 a[ob + 12 >> 0] = 17;
 a[ob + 13 >> 0] = 13;
 a[ob + 14 >> 0] = 17;
 a[ob + 15 >> 0] = 13;
 a[ob + 16 >> 0] = 17;
 a[ob + 17 >> 0] = 13;
 a[ob + 18 >> 0] = 17;
 a[ob + 19 >> 0] = 13;
 a[ob + 20 >> 0] = 17;
 a[ob + 21 >> 0] = 13;
 a[ob + 22 >> 0] = 17;
 a[ob + 23 >> 0] = 13;
 a[ob + 24 >> 0] = 17;
 a[ob + 25 >> 0] = 13;
 a[ob + 26 >> 0] = 17;
 a[ob + 27 >> 0] = 13;
 a[ob + 28 >> 0] = 17;
 a[ob + 29 >> 0] = 13;
 a[ob + 30 >> 0] = 17;
 a[ob + 31 >> 0] = 13;
 a[ob + 32 >> 0] = 17;
 a[ob + 33 >> 0] = 13;
 a[ob + 34 >> 0] = 17;
 a[ob + 35 >> 0] = 13;
 a[ob + 36 >> 0] = 17;
 a[ob + 37 >> 0] = 13;
 a[ob + 38 >> 0] = 17;
 a[ob + 39 >> 0] = 13;
 a[ob + 40 >> 0] = 17;
 a[ob + 41 >> 0] = 13;
 a[ob + 8 >> 0] = 0;
 a[ob + 9 >> 0] = 1;
 h = ob + 74 | 0;
 a[h >> 0] = 0;
 j = ob + 75 | 0;
 a[j >> 0] = 0;
 k = ob + 58 | 0;
 l = ob + 42 | 0;
 b[k >> 1] = 65535;
 b[k + 2 >> 1] = 65535;
 b[k + 4 >> 1] = 65535;
 b[k + 6 >> 1] = 65535;
 b[k + 8 >> 1] = 65535;
 b[k + 10 >> 1] = 65535;
 b[k + 12 >> 1] = 65535;
 b[k + 14 >> 1] = 65535;
 b[l >> 1] = 0;
 b[l + 2 >> 1] = 0;
 b[l + 4 >> 1] = 0;
 b[l + 6 >> 1] = 0;
 b[l + 8 >> 1] = 0;
 b[l + 10 >> 1] = 0;
 b[l + 12 >> 1] = 0;
 b[l + 14 >> 1] = 0;
 l = ob + 76 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 a[l + 12 >> 0] = 0;
 c[Cb >> 2] = 0;
 ue(ob + 92 | 0, Cb);
 c[ob + 96 >> 2] = -1;
 l = ob + 104 | 0;
 c[l >> 2] = -1;
 c[l + 4 >> 2] = -1;
 c[ob + 112 >> 2] = 0;
 c[ob + 116 >> 2] = -1;
 l = ob + 188 | 0;
 G = ob + 120 | 0;
 H = G + 68 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 a[l >> 0] = a[l >> 0] & -16 | 8;
 a[ob + 88 >> 0] = 0;
 b[ob + 10 + (a[h >> 0] << 1) >> 1] = 512;
 lb = b[h >> 1] | 0;
 jb = lb & 255;
 a[k >> 0] = jb;
 a[(jb << 24 >> 24) + (ob + 42) >> 0] = (lb & 65535) >>> 8;
 a[j >> 0] = (d[j >> 0] | 0) + 12;
 jb = (a[h >> 0] | 0) + 1 << 24 >> 24;
 a[h >> 0] = jb;
 b[ob + 10 + (jb << 24 >> 24 << 1) >> 1] = 258;
 jb = b[h >> 1] | 0;
 lb = jb & 255;
 a[ob + 60 >> 0] = lb;
 a[(lb << 24 >> 24) + (ob + 42) >> 0] = (jb & 65535) >>> 8;
 a[j >> 0] = (d[j >> 0] | 0) + 8;
 a[h >> 0] = (a[h >> 0] | 0) + 1 << 24 >> 24;
 h = f + 56 | 0;
 _e(fb, (c[42822] | 0) + 1168 | 0, ob);
 if ((h | 0) != (fb | 0)) {
  jb = c[fb + 4 >> 2] | 0;
  lb = h;
  c[lb >> 2] = c[fb >> 2];
  c[lb + 4 >> 2] = jb;
 }
 te(Db, 150855);
 c[Db + 4 >> 2] = -2;
 hf(nb, Db);
 c[Db >> 2] = 0;
 Ga = Eb + 4 | 0;
 Ha = Eb + 6 | 0;
 a[Ha >> 0] = 17;
 a[Eb + 7 >> 0] = 13;
 Ka = Eb + 8 | 0;
 a[Ka >> 0] = 17;
 a[Eb + 9 >> 0] = 13;
 Na = Eb + 10 | 0;
 a[Na >> 0] = 17;
 a[Eb + 11 >> 0] = 13;
 Oa = Eb + 12 | 0;
 a[Oa >> 0] = 17;
 a[Eb + 13 >> 0] = 13;
 Qa = Eb + 14 | 0;
 a[Qa >> 0] = 17;
 a[Eb + 15 >> 0] = 13;
 Sa = Eb + 16 | 0;
 a[Sa >> 0] = 17;
 a[Eb + 17 >> 0] = 13;
 Ua = Eb + 18 | 0;
 a[Ua >> 0] = 17;
 a[Eb + 19 >> 0] = 13;
 Va = Eb + 20 | 0;
 a[Va >> 0] = 17;
 a[Eb + 21 >> 0] = 13;
 Wa = Eb + 22 | 0;
 a[Wa >> 0] = 17;
 a[Eb + 23 >> 0] = 13;
 Xa = Eb + 24 | 0;
 a[Xa >> 0] = 17;
 a[Eb + 25 >> 0] = 13;
 Za = Eb + 26 | 0;
 a[Za >> 0] = 17;
 a[Eb + 27 >> 0] = 13;
 $a = Eb + 28 | 0;
 a[$a >> 0] = 17;
 a[Eb + 29 >> 0] = 13;
 ab = Eb + 30 | 0;
 a[ab >> 0] = 17;
 a[Eb + 31 >> 0] = 13;
 bb = Eb + 32 | 0;
 a[bb >> 0] = 17;
 a[Eb + 33 >> 0] = 13;
 a[Eb >> 0] = 0;
 a[Eb + 1 >> 0] = 1;
 cb = Eb + 66 | 0;
 fb = Eb + 50 | 0;
 jb = Eb + 34 | 0;
 b[fb >> 1] = 65535;
 b[fb + 2 >> 1] = 65535;
 b[fb + 4 >> 1] = 65535;
 b[fb + 6 >> 1] = 65535;
 b[fb + 8 >> 1] = 65535;
 b[fb + 10 >> 1] = 65535;
 b[fb + 12 >> 1] = 65535;
 b[fb + 14 >> 1] = 65535;
 b[jb >> 1] = 0;
 b[jb + 2 >> 1] = 0;
 b[jb + 4 >> 1] = 0;
 b[jb + 6 >> 1] = 0;
 b[jb + 8 >> 1] = 0;
 b[jb + 10 >> 1] = 0;
 b[jb + 12 >> 1] = 0;
 b[jb + 14 >> 1] = 0;
 b[Eb + 2 >> 1] = 768;
 a[fb >> 0] = 0;
 a[jb >> 0] = 0;
 b[Eb + 4 >> 1] = 258;
 lb = Eb + 52 | 0;
 a[lb >> 0] = 1;
 a[Eb + 35 >> 0] = 16;
 a[Eb + 67 >> 0] = 24;
 a[cb >> 0] = 2;
 q : do if (!1) {
  h = 138557;
  Bb = 523;
 } else {
  h = 138557;
  j = 138557;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break q;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 523;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 523) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 138557 | 0;
 if ((h | 0) > 0) {
  l = yg(h + 9 | 0) | 0;
  Fa = l;
  c[Fa >> 2] = 0;
  c[Fa + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = h;
  Fa = l + 8 | 0;
  c[Fb >> 2] = Fa;
  Rg(Fa | 0, 138557, h | 0) | 0;
  a[Fa + h >> 0] = 0;
 } else {
  c[Fb >> 2] = 0;
  l = 0;
 }
 r : do if (!3) {
  h = 139315;
  Bb = 534;
 } else {
  h = 139315;
  j = 139315;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break r;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 534;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 534) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 139315 | 0;
 if ((h | 0) > 0) {
  k = yg(h + 9 | 0) | 0;
  Fa = k;
  c[Fa >> 2] = 0;
  c[Fa + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = h;
  Fa = k + 8 | 0;
  c[Gb >> 2] = Fa;
  Rg(Fa | 0, 139315, h | 0) | 0;
  a[Fa + h >> 0] = 0;
 } else {
  c[Gb >> 2] = 0;
  k = 0;
 }
 j = nb + 16 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  Fa = c[h >> 2] | 0;
  c[h >> 2] = Fa - 1;
  if ((Fa | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = nb + 20 | 0;
   c[h >> 2] = 0;
  } else h = nb + 20 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = l;
 c[nb + 20 >> 2] = c[Fb >> 2];
 if (l | 0) {
  Fa = l;
  c[Fa >> 2] = (c[Fa >> 2] | 0) + 1;
 }
 j = nb + 56 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  Fa = c[h >> 2] | 0;
  c[h >> 2] = Fa - 1;
  if ((Fa | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = nb + 60 | 0;
   c[h >> 2] = 0;
  } else h = nb + 60 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = k;
 c[nb + 60 >> 2] = c[Gb >> 2];
 h = k;
 if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 m = nb + 256 | 0;
 b[m >> 1] = b[Eb >> 1] | 0;
 n = nb + 258 | 0;
 o = Eb + 2 | 0;
 b[n >> 1] = b[o >> 1] | 0;
 p = nb + 260 | 0;
 b[p >> 1] = b[Ga >> 1] | 0;
 q = nb + 262 | 0;
 b[q >> 1] = b[Ha >> 1] | 0;
 r = nb + 264 | 0;
 b[r >> 1] = b[Ka >> 1] | 0;
 s = nb + 266 | 0;
 b[s >> 1] = b[Na >> 1] | 0;
 t = nb + 268 | 0;
 b[t >> 1] = b[Oa >> 1] | 0;
 u = nb + 270 | 0;
 b[u >> 1] = b[Qa >> 1] | 0;
 v = nb + 272 | 0;
 b[v >> 1] = b[Sa >> 1] | 0;
 w = nb + 274 | 0;
 b[w >> 1] = b[Ua >> 1] | 0;
 x = nb + 276 | 0;
 b[x >> 1] = b[Va >> 1] | 0;
 y = nb + 278 | 0;
 b[y >> 1] = b[Wa >> 1] | 0;
 z = nb + 280 | 0;
 b[z >> 1] = b[Xa >> 1] | 0;
 A = nb + 282 | 0;
 b[A >> 1] = b[Za >> 1] | 0;
 B = nb + 284 | 0;
 b[B >> 1] = b[$a >> 1] | 0;
 D = nb + 286 | 0;
 b[D >> 1] = b[ab >> 1] | 0;
 E = nb + 288 | 0;
 b[E >> 1] = b[bb >> 1] | 0;
 H = b[jb >> 1] | 0;
 F = nb + 290 | 0;
 a[F >> 0] = H;
 G = nb + 291 | 0;
 a[G >> 0] = (H & 65535) >>> 8;
 H = Eb + 36 | 0;
 K = b[H >> 1] | 0;
 I = nb + 292 | 0;
 a[I >> 0] = K;
 J = nb + 293 | 0;
 a[J >> 0] = (K & 65535) >>> 8;
 K = Eb + 38 | 0;
 N = b[K >> 1] | 0;
 L = nb + 294 | 0;
 a[L >> 0] = N;
 M = nb + 295 | 0;
 a[M >> 0] = (N & 65535) >>> 8;
 N = Eb + 40 | 0;
 Q = b[N >> 1] | 0;
 O = nb + 296 | 0;
 a[O >> 0] = Q;
 P = nb + 297 | 0;
 a[P >> 0] = (Q & 65535) >>> 8;
 Q = Eb + 42 | 0;
 U = b[Q >> 1] | 0;
 S = nb + 298 | 0;
 a[S >> 0] = U;
 T = nb + 299 | 0;
 a[T >> 0] = (U & 65535) >>> 8;
 U = Eb + 44 | 0;
 X = b[U >> 1] | 0;
 V = nb + 300 | 0;
 a[V >> 0] = X;
 W = nb + 301 | 0;
 a[W >> 0] = (X & 65535) >>> 8;
 X = Eb + 46 | 0;
 _ = b[X >> 1] | 0;
 Y = nb + 302 | 0;
 a[Y >> 0] = _;
 Z = nb + 303 | 0;
 a[Z >> 0] = (_ & 65535) >>> 8;
 _ = Eb + 48 | 0;
 fa = b[_ >> 1] | 0;
 $ = nb + 304 | 0;
 a[$ >> 0] = fa;
 aa = nb + 305 | 0;
 a[aa >> 0] = (fa & 65535) >>> 8;
 fa = b[fb >> 1] | 0;
 ba = nb + 306 | 0;
 a[ba >> 0] = fa;
 ca = nb + 307 | 0;
 a[ca >> 0] = (fa & 65535) >>> 8;
 fa = b[lb >> 1] | 0;
 da = nb + 308 | 0;
 a[da >> 0] = fa;
 ea = nb + 309 | 0;
 a[ea >> 0] = (fa & 65535) >>> 8;
 fa = Eb + 54 | 0;
 ka = b[fa >> 1] | 0;
 ga = nb + 310 | 0;
 a[ga >> 0] = ka;
 ia = nb + 311 | 0;
 a[ia >> 0] = (ka & 65535) >>> 8;
 ka = Eb + 56 | 0;
 na = b[ka >> 1] | 0;
 la = nb + 312 | 0;
 a[la >> 0] = na;
 ma = nb + 313 | 0;
 a[ma >> 0] = (na & 65535) >>> 8;
 na = Eb + 58 | 0;
 sa = b[na >> 1] | 0;
 oa = nb + 314 | 0;
 a[oa >> 0] = sa;
 ra = nb + 315 | 0;
 a[ra >> 0] = (sa & 65535) >>> 8;
 sa = Eb + 60 | 0;
 ya = b[sa >> 1] | 0;
 ta = nb + 316 | 0;
 a[ta >> 0] = ya;
 ua = nb + 317 | 0;
 a[ua >> 0] = (ya & 65535) >>> 8;
 ya = Eb + 62 | 0;
 Ba = b[ya >> 1] | 0;
 za = nb + 318 | 0;
 a[za >> 0] = Ba;
 Aa = nb + 319 | 0;
 a[Aa >> 0] = (Ba & 65535) >>> 8;
 Ba = Eb + 64 | 0;
 Fa = b[Ba >> 1] | 0;
 Ca = nb + 320 | 0;
 a[Ca >> 0] = Fa;
 Da = nb + 321 | 0;
 a[Da >> 0] = (Fa & 65535) >>> 8;
 Fa = nb + 322 | 0;
 b[Fa >> 1] = b[cb >> 1] | 0;
 if (k | 0) {
  j = c[h >> 2] | 0;
  c[h >> 2] = j - 1;
  if ((j | 0) == 1) {
   zg(k);
   c[Gb >> 2] = 0;
  }
  c[Gb >> 2] = 0;
 }
 if (l | 0) {
  j = l;
  k = c[j >> 2] | 0;
  c[j >> 2] = k - 1;
  if ((k | 0) == 1) {
   zg(l);
   c[Fb >> 2] = 0;
  }
  c[Fb >> 2] = 0;
 }
 s : do if (!0) {
  h = 142808;
  Bb = 567;
 } else {
  h = 142808;
  j = 142808;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break s;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 567;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 567) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 142808 | 0;
 if ((h | 0) > 0) {
  l = yg(h + 9 | 0) | 0;
  k = l;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = h;
  k = l + 8 | 0;
  c[Ib >> 2] = k;
  Rg(k | 0, 142808, h | 0) | 0;
  a[k + h >> 0] = 0;
 } else {
  c[Ib >> 2] = 0;
  l = 0;
 }
 t : do if (!3) {
  h = 143567;
  Bb = 578;
 } else {
  h = 143567;
  j = 143567;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break t;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 578;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 578) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 143567 | 0;
 if ((h | 0) > 0) {
  k = yg(h + 9 | 0) | 0;
  j = k;
  c[j >> 2] = 0;
  c[j + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = h;
  j = k + 8 | 0;
  c[Jb >> 2] = j;
  Rg(j | 0, 143567, h | 0) | 0;
  a[j + h >> 0] = 0;
 } else {
  c[Jb >> 2] = 0;
  k = 0;
 }
 j = nb + 24 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = nb + 28 | 0;
   c[h >> 2] = 0;
  } else h = nb + 28 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = l;
 c[nb + 28 >> 2] = c[Ib >> 2];
 if (l | 0) {
  gc = l;
  c[gc >> 2] = (c[gc >> 2] | 0) + 1;
 }
 j = nb + 64 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = nb + 68 | 0;
   c[h >> 2] = 0;
  } else h = nb + 68 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = k;
 c[nb + 68 >> 2] = c[Jb >> 2];
 h = k;
 if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 b[m >> 1] = b[Eb >> 1] | 0;
 b[n >> 1] = b[o >> 1] | 0;
 b[p >> 1] = b[Ga >> 1] | 0;
 b[q >> 1] = b[Ha >> 1] | 0;
 b[r >> 1] = b[Ka >> 1] | 0;
 b[s >> 1] = b[Na >> 1] | 0;
 b[t >> 1] = b[Oa >> 1] | 0;
 b[u >> 1] = b[Qa >> 1] | 0;
 b[v >> 1] = b[Sa >> 1] | 0;
 b[w >> 1] = b[Ua >> 1] | 0;
 b[x >> 1] = b[Va >> 1] | 0;
 b[y >> 1] = b[Wa >> 1] | 0;
 b[z >> 1] = b[Xa >> 1] | 0;
 b[A >> 1] = b[Za >> 1] | 0;
 b[B >> 1] = b[$a >> 1] | 0;
 b[D >> 1] = b[ab >> 1] | 0;
 b[E >> 1] = b[bb >> 1] | 0;
 gc = b[jb >> 1] | 0;
 a[F >> 0] = gc;
 a[G >> 0] = (gc & 65535) >>> 8;
 gc = b[H >> 1] | 0;
 a[I >> 0] = gc;
 a[J >> 0] = (gc & 65535) >>> 8;
 gc = b[K >> 1] | 0;
 a[L >> 0] = gc;
 a[M >> 0] = (gc & 65535) >>> 8;
 gc = b[N >> 1] | 0;
 a[O >> 0] = gc;
 a[P >> 0] = (gc & 65535) >>> 8;
 gc = b[Q >> 1] | 0;
 a[S >> 0] = gc;
 a[T >> 0] = (gc & 65535) >>> 8;
 gc = b[U >> 1] | 0;
 a[V >> 0] = gc;
 a[W >> 0] = (gc & 65535) >>> 8;
 gc = b[X >> 1] | 0;
 a[Y >> 0] = gc;
 a[Z >> 0] = (gc & 65535) >>> 8;
 gc = b[_ >> 1] | 0;
 a[$ >> 0] = gc;
 a[aa >> 0] = (gc & 65535) >>> 8;
 gc = b[fb >> 1] | 0;
 a[ba >> 0] = gc;
 a[ca >> 0] = (gc & 65535) >>> 8;
 gc = b[lb >> 1] | 0;
 a[da >> 0] = gc;
 a[ea >> 0] = (gc & 65535) >>> 8;
 gc = b[fa >> 1] | 0;
 a[ga >> 0] = gc;
 a[ia >> 0] = (gc & 65535) >>> 8;
 gc = b[ka >> 1] | 0;
 a[la >> 0] = gc;
 a[ma >> 0] = (gc & 65535) >>> 8;
 gc = b[na >> 1] | 0;
 a[oa >> 0] = gc;
 a[ra >> 0] = (gc & 65535) >>> 8;
 gc = b[sa >> 1] | 0;
 a[ta >> 0] = gc;
 a[ua >> 0] = (gc & 65535) >>> 8;
 gc = b[ya >> 1] | 0;
 a[za >> 0] = gc;
 a[Aa >> 0] = (gc & 65535) >>> 8;
 gc = b[Ba >> 1] | 0;
 a[Ca >> 0] = gc;
 a[Da >> 0] = (gc & 65535) >>> 8;
 b[Fa >> 1] = b[cb >> 1] | 0;
 if (k | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(k);
   c[Jb >> 2] = 0;
  }
  c[Jb >> 2] = 0;
 }
 if (l | 0) {
  k = l;
  gc = c[k >> 2] | 0;
  c[k >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(l);
   c[Ib >> 2] = 0;
  }
  c[Ib >> 2] = 0;
 }
 u : do if (!0) {
  h = 147020;
  Bb = 611;
 } else {
  h = 147020;
  j = 147020;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break u;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 611;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 611) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 147020 | 0;
 if ((h | 0) > 0) {
  l = yg(h + 9 | 0) | 0;
  gc = l;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = h;
  gc = l + 8 | 0;
  c[Kb >> 2] = gc;
  Rg(gc | 0, 147020, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Kb >> 2] = 0;
  l = 0;
 }
 v : do if (!1) {
  h = 147757;
  Bb = 622;
 } else {
  h = 147757;
  j = 147757;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break v;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 622;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 622) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 147757 | 0;
 if ((h | 0) > 0) {
  k = yg(h + 9 | 0) | 0;
  gc = k;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = h;
  gc = k + 8 | 0;
  c[Lb >> 2] = gc;
  Rg(gc | 0, 147757, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Lb >> 2] = 0;
  k = 0;
 }
 j = nb + 32 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = nb + 36 | 0;
   c[h >> 2] = 0;
  } else h = nb + 36 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = l;
 c[nb + 36 >> 2] = c[Kb >> 2];
 if (l | 0) {
  gc = l;
  c[gc >> 2] = (c[gc >> 2] | 0) + 1;
 }
 j = nb + 72 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = nb + 76 | 0;
   c[h >> 2] = 0;
  } else h = nb + 76 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = k;
 c[nb + 76 >> 2] = c[Lb >> 2];
 h = k;
 if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 b[m >> 1] = b[Eb >> 1] | 0;
 b[n >> 1] = b[o >> 1] | 0;
 b[p >> 1] = b[Ga >> 1] | 0;
 b[q >> 1] = b[Ha >> 1] | 0;
 b[r >> 1] = b[Ka >> 1] | 0;
 b[s >> 1] = b[Na >> 1] | 0;
 b[t >> 1] = b[Oa >> 1] | 0;
 b[u >> 1] = b[Qa >> 1] | 0;
 b[v >> 1] = b[Sa >> 1] | 0;
 b[w >> 1] = b[Ua >> 1] | 0;
 b[x >> 1] = b[Va >> 1] | 0;
 b[y >> 1] = b[Wa >> 1] | 0;
 b[z >> 1] = b[Xa >> 1] | 0;
 b[A >> 1] = b[Za >> 1] | 0;
 b[B >> 1] = b[$a >> 1] | 0;
 b[D >> 1] = b[ab >> 1] | 0;
 b[E >> 1] = b[bb >> 1] | 0;
 gc = b[jb >> 1] | 0;
 a[F >> 0] = gc;
 a[G >> 0] = (gc & 65535) >>> 8;
 gc = b[H >> 1] | 0;
 a[I >> 0] = gc;
 a[J >> 0] = (gc & 65535) >>> 8;
 gc = b[K >> 1] | 0;
 a[L >> 0] = gc;
 a[M >> 0] = (gc & 65535) >>> 8;
 gc = b[N >> 1] | 0;
 a[O >> 0] = gc;
 a[P >> 0] = (gc & 65535) >>> 8;
 gc = b[Q >> 1] | 0;
 a[S >> 0] = gc;
 a[T >> 0] = (gc & 65535) >>> 8;
 gc = b[U >> 1] | 0;
 a[V >> 0] = gc;
 a[W >> 0] = (gc & 65535) >>> 8;
 gc = b[X >> 1] | 0;
 a[Y >> 0] = gc;
 a[Z >> 0] = (gc & 65535) >>> 8;
 gc = b[_ >> 1] | 0;
 a[$ >> 0] = gc;
 a[aa >> 0] = (gc & 65535) >>> 8;
 gc = b[fb >> 1] | 0;
 a[ba >> 0] = gc;
 a[ca >> 0] = (gc & 65535) >>> 8;
 gc = b[lb >> 1] | 0;
 a[da >> 0] = gc;
 a[ea >> 0] = (gc & 65535) >>> 8;
 gc = b[fa >> 1] | 0;
 a[ga >> 0] = gc;
 a[ia >> 0] = (gc & 65535) >>> 8;
 gc = b[ka >> 1] | 0;
 a[la >> 0] = gc;
 a[ma >> 0] = (gc & 65535) >>> 8;
 gc = b[na >> 1] | 0;
 a[oa >> 0] = gc;
 a[ra >> 0] = (gc & 65535) >>> 8;
 gc = b[sa >> 1] | 0;
 a[ta >> 0] = gc;
 a[ua >> 0] = (gc & 65535) >>> 8;
 gc = b[ya >> 1] | 0;
 a[za >> 0] = gc;
 a[Aa >> 0] = (gc & 65535) >>> 8;
 gc = b[Ba >> 1] | 0;
 a[Ca >> 0] = gc;
 a[Da >> 0] = (gc & 65535) >>> 8;
 b[Fa >> 1] = b[cb >> 1] | 0;
 if (k | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(k);
   c[Lb >> 2] = 0;
  }
  c[Lb >> 2] = 0;
 }
 if (l | 0) {
  lb = l;
  gc = c[lb >> 2] | 0;
  c[lb >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(l);
   c[Kb >> 2] = 0;
  }
  c[Kb >> 2] = 0;
 }
 c[Mb >> 2] = 0;
 c[Mb + 4 >> 2] = 0;
 c[Mb + 8 >> 2] = 0;
 c[Mb + 12 >> 2] = 0;
 c[Mb + 16 >> 2] = 0;
 a[Mb + 20 >> 0] = 10;
 c[Mb + 24 >> 2] = 1;
 c[Mb + 28 >> 2] = 0;
 a[Mb + 32 >> 0] = 10;
 c[Mb + 36 >> 2] = 1;
 c[Mb + 40 >> 2] = 0;
 a[Mb + 44 >> 0] = 10;
 c[Mb + 48 >> 2] = 1;
 c[Mb + 52 >> 2] = 0;
 a[Mb + 56 >> 0] = 10;
 c[Mb + 60 >> 2] = 1;
 c[Mb + 64 >> 2] = 0;
 a[Mb + 68 >> 0] = 10;
 c[Mb + 72 >> 2] = 1;
 c[Mb + 76 >> 2] = 0;
 a[Mb + 80 >> 0] = 10;
 c[Mb + 84 >> 2] = 1;
 c[Mb + 88 >> 2] = 0;
 a[Mb + 92 >> 0] = 10;
 c[Mb + 96 >> 2] = 1;
 c[Mb + 100 >> 2] = 0;
 a[Mb + 104 >> 0] = 10;
 c[Mb + 108 >> 2] = 1;
 c[Mb + 112 >> 2] = 0;
 a[Mb + 116 >> 0] = 10;
 c[Mb + 120 >> 2] = 1;
 c[Mb + 124 >> 2] = 0;
 a[Mb + 128 >> 0] = 10;
 c[Mb + 132 >> 2] = 1;
 c[Mb + 136 >> 2] = 0;
 a[Mb + 140 >> 0] = 10;
 c[Mb + 144 >> 2] = 1;
 c[Mb + 148 >> 2] = 0;
 a[Mb + 152 >> 0] = 10;
 c[Mb + 156 >> 2] = 1;
 c[Mb + 160 >> 2] = 0;
 a[Mb + 164 >> 0] = 10;
 c[Mb + 168 >> 2] = 1;
 c[Mb + 172 >> 2] = 0;
 a[Mb + 176 >> 0] = 10;
 c[Mb + 180 >> 2] = 1;
 c[Mb + 184 >> 2] = 0;
 a[Mb + 188 >> 0] = 10;
 c[Mb + 192 >> 2] = 1;
 c[Mb + 196 >> 2] = 0;
 a[Mb + 200 >> 0] = 10;
 c[Mb + 204 >> 2] = 1;
 h = Mb;
 c[h >> 2] = 2124503556;
 c[h + 4 >> 2] = -923214409;
 te(Pb, 150781);
 Le(Mb, Pb);
 c[Pb >> 2] = 0;
 te(Sb, 150793);
 jf(nb, Sb, Mb, 1);
 c[Sb >> 2] = 0;
 c[Tb >> 2] = 0;
 c[Tb + 4 >> 2] = 0;
 c[Tb + 8 >> 2] = -1;
 c[Tb + 12 >> 2] = -1;
 c[Tb + 16 >> 2] = 0;
 c[Tb + 20 >> 2] = -1;
 c[Tb + 24 >> 2] = -1;
 c[Tb + 28 >> 2] = 0;
 c[Tb + 32 >> 2] = -1;
 c[Tb + 36 >> 2] = -1;
 c[Tb + 40 >> 2] = 0;
 c[Tb + 44 >> 2] = -1;
 c[Tb + 48 >> 2] = -1;
 c[Tb + 52 >> 2] = 0;
 c[Tb + 56 >> 2] = -1;
 c[Tb + 60 >> 2] = -1;
 c[Tb + 64 >> 2] = 0;
 c[Tb + 68 >> 2] = -1;
 c[Tb + 72 >> 2] = -1;
 c[Tb + 76 >> 2] = 0;
 c[Tb + 80 >> 2] = -1;
 c[Tb + 84 >> 2] = -1;
 c[Tb + 88 >> 2] = 0;
 c[Tb + 92 >> 2] = -1;
 c[Tb + 96 >> 2] = -1;
 c[Tb + 100 >> 2] = 0;
 c[Tb + 104 >> 2] = -1;
 c[Tb + 108 >> 2] = -1;
 c[Tb + 112 >> 2] = 0;
 c[Tb + 116 >> 2] = -1;
 c[Tb + 120 >> 2] = -1;
 c[Tb + 124 >> 2] = 0;
 c[Tb + 128 >> 2] = -1;
 c[Tb + 132 >> 2] = -1;
 c[Tb + 136 >> 2] = 0;
 c[Tb + 140 >> 2] = -1;
 c[Tb + 144 >> 2] = -1;
 c[Tb + 148 >> 2] = 0;
 c[Tb + 152 >> 2] = -1;
 c[Tb + 156 >> 2] = -1;
 c[Tb + 160 >> 2] = 0;
 c[Tb + 164 >> 2] = -1;
 c[Tb + 168 >> 2] = -1;
 c[Tb + 172 >> 2] = 0;
 c[Tb + 176 >> 2] = -1;
 c[Tb + 180 >> 2] = -1;
 c[Tb + 184 >> 2] = 0;
 c[Tb + 188 >> 2] = -1;
 c[Tb + 192 >> 2] = -1;
 te(Ub, 150805);
 h = c[Tb >> 2] | 0;
 c[Tb >> 2] = h + 1;
 j = Tb + 4 + (h * 12 | 0) | 0;
 ue(Cb, Ub);
 k = Cb + 4 | 0;
 c[k >> 2] = 0;
 c[Cb + 8 >> 2] = 0;
 if ((Cb | 0) != (j | 0)) {
  c[j >> 2] = 0;
  ue(j, Cb);
  c[Cb >> 2] = 0;
 }
 gc = k;
 j = c[gc + 4 >> 2] | 0;
 h = Tb + 4 + (h * 12 | 0) + 4 | 0;
 c[h >> 2] = c[gc >> 2];
 c[h + 4 >> 2] = j;
 c[Ub >> 2] = 0;
 te(Vb, 150815);
 h = nb + 2632 | 0;
 j = c[h >> 2] | 0;
 c[h >> 2] = j + 1;
 h = nb + 2636 + (j * 204 | 0) | 0;
 if ((h | 0) != (Vb | 0)) {
  c[h >> 2] = 0;
  ue(h, Vb);
 }
 gc = nb + 2636 + (j * 204 | 0) + 4 | 0;
 c[gc >> 2] = c[Tb >> 2];
 if ((gc | 0) != (Tb | 0)) {
  h = 0;
  do {
   jb = nb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) | 0;
   c[jb >> 2] = 0;
   ue(jb, Tb + 4 + (h * 12 | 0) | 0);
   jb = Tb + 4 + (h * 12 | 0) + 4 | 0;
   lb = c[jb + 4 >> 2] | 0;
   gc = nb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) + 4 | 0;
   c[gc >> 2] = c[jb >> 2];
   c[gc + 4 >> 2] = lb;
   h = h + 1 | 0;
  } while ((h | 0) != 16);
 }
 c[nb + 2636 + (j * 204 | 0) + 200 >> 2] = 1;
 bf(pb, (c[42822] | 0) + 1168 | 0, nb);
 c[nb + 3028 >> 2] = 0;
 c[nb + 3016 >> 2] = 0;
 c[nb + 3004 >> 2] = 0;
 c[nb + 2992 >> 2] = 0;
 c[nb + 2980 >> 2] = 0;
 c[nb + 2968 >> 2] = 0;
 c[nb + 2956 >> 2] = 0;
 c[nb + 2944 >> 2] = 0;
 c[nb + 2932 >> 2] = 0;
 c[nb + 2920 >> 2] = 0;
 c[nb + 2908 >> 2] = 0;
 c[nb + 2896 >> 2] = 0;
 c[nb + 2884 >> 2] = 0;
 c[nb + 2872 >> 2] = 0;
 c[nb + 2860 >> 2] = 0;
 c[nb + 2848 >> 2] = 0;
 c[nb + 2840 >> 2] = 0;
 c[nb + 2824 >> 2] = 0;
 c[nb + 2812 >> 2] = 0;
 c[nb + 2800 >> 2] = 0;
 c[nb + 2788 >> 2] = 0;
 c[nb + 2776 >> 2] = 0;
 c[nb + 2764 >> 2] = 0;
 c[nb + 2752 >> 2] = 0;
 c[nb + 2740 >> 2] = 0;
 c[nb + 2728 >> 2] = 0;
 c[nb + 2716 >> 2] = 0;
 c[nb + 2704 >> 2] = 0;
 c[nb + 2692 >> 2] = 0;
 c[nb + 2680 >> 2] = 0;
 c[nb + 2668 >> 2] = 0;
 c[nb + 2656 >> 2] = 0;
 c[nb + 2644 >> 2] = 0;
 c[nb + 2636 >> 2] = 0;
 c[nb + 2548 >> 2] = 0;
 c[nb + 2536 >> 2] = 0;
 c[nb + 2524 >> 2] = 0;
 c[nb + 2512 >> 2] = 0;
 c[nb + 2500 >> 2] = 0;
 c[nb + 2488 >> 2] = 0;
 c[nb + 2476 >> 2] = 0;
 c[nb + 2464 >> 2] = 0;
 c[nb + 2452 >> 2] = 0;
 c[nb + 2440 >> 2] = 0;
 c[nb + 2428 >> 2] = 0;
 c[nb + 2416 >> 2] = 0;
 c[nb + 2404 >> 2] = 0;
 c[nb + 2392 >> 2] = 0;
 c[nb + 2380 >> 2] = 0;
 c[nb + 2368 >> 2] = 0;
 c[nb + 2344 >> 2] = 0;
 c[nb + 2260 >> 2] = 0;
 c[nb + 2248 >> 2] = 0;
 c[nb + 2236 >> 2] = 0;
 c[nb + 2224 >> 2] = 0;
 c[nb + 2212 >> 2] = 0;
 c[nb + 2200 >> 2] = 0;
 c[nb + 2188 >> 2] = 0;
 c[nb + 2176 >> 2] = 0;
 c[nb + 2164 >> 2] = 0;
 c[nb + 2152 >> 2] = 0;
 c[nb + 2140 >> 2] = 0;
 c[nb + 2128 >> 2] = 0;
 c[nb + 2116 >> 2] = 0;
 c[nb + 2104 >> 2] = 0;
 c[nb + 2092 >> 2] = 0;
 c[nb + 2080 >> 2] = 0;
 c[nb + 2056 >> 2] = 0;
 c[nb + 1972 >> 2] = 0;
 c[nb + 1960 >> 2] = 0;
 c[nb + 1948 >> 2] = 0;
 c[nb + 1936 >> 2] = 0;
 c[nb + 1924 >> 2] = 0;
 c[nb + 1912 >> 2] = 0;
 c[nb + 1900 >> 2] = 0;
 c[nb + 1888 >> 2] = 0;
 c[nb + 1876 >> 2] = 0;
 c[nb + 1864 >> 2] = 0;
 c[nb + 1852 >> 2] = 0;
 c[nb + 1840 >> 2] = 0;
 c[nb + 1828 >> 2] = 0;
 c[nb + 1816 >> 2] = 0;
 c[nb + 1804 >> 2] = 0;
 c[nb + 1792 >> 2] = 0;
 c[nb + 1768 >> 2] = 0;
 c[nb + 1684 >> 2] = 0;
 c[nb + 1672 >> 2] = 0;
 c[nb + 1660 >> 2] = 0;
 c[nb + 1648 >> 2] = 0;
 c[nb + 1636 >> 2] = 0;
 c[nb + 1624 >> 2] = 0;
 c[nb + 1612 >> 2] = 0;
 c[nb + 1600 >> 2] = 0;
 c[nb + 1588 >> 2] = 0;
 c[nb + 1576 >> 2] = 0;
 c[nb + 1564 >> 2] = 0;
 c[nb + 1552 >> 2] = 0;
 c[nb + 1540 >> 2] = 0;
 c[nb + 1528 >> 2] = 0;
 c[nb + 1516 >> 2] = 0;
 c[nb + 1504 >> 2] = 0;
 c[nb + 1480 >> 2] = 0;
 c[nb + 1396 >> 2] = 0;
 c[nb + 1384 >> 2] = 0;
 c[nb + 1372 >> 2] = 0;
 c[nb + 1360 >> 2] = 0;
 c[nb + 1348 >> 2] = 0;
 c[nb + 1336 >> 2] = 0;
 c[nb + 1324 >> 2] = 0;
 c[nb + 1312 >> 2] = 0;
 c[nb + 1300 >> 2] = 0;
 c[nb + 1288 >> 2] = 0;
 c[nb + 1276 >> 2] = 0;
 c[nb + 1264 >> 2] = 0;
 c[nb + 1252 >> 2] = 0;
 c[nb + 1240 >> 2] = 0;
 c[nb + 1228 >> 2] = 0;
 c[nb + 1216 >> 2] = 0;
 c[nb + 1192 >> 2] = 0;
 c[nb + 1108 >> 2] = 0;
 c[nb + 1096 >> 2] = 0;
 c[nb + 1084 >> 2] = 0;
 c[nb + 1072 >> 2] = 0;
 c[nb + 1060 >> 2] = 0;
 c[nb + 1048 >> 2] = 0;
 c[nb + 1036 >> 2] = 0;
 c[nb + 1024 >> 2] = 0;
 c[nb + 1012 >> 2] = 0;
 c[nb + 1e3 >> 2] = 0;
 c[nb + 988 >> 2] = 0;
 c[nb + 976 >> 2] = 0;
 c[nb + 964 >> 2] = 0;
 c[nb + 952 >> 2] = 0;
 c[nb + 940 >> 2] = 0;
 c[nb + 928 >> 2] = 0;
 c[nb + 904 >> 2] = 0;
 c[nb + 820 >> 2] = 0;
 c[nb + 808 >> 2] = 0;
 c[nb + 796 >> 2] = 0;
 c[nb + 784 >> 2] = 0;
 c[nb + 772 >> 2] = 0;
 c[nb + 760 >> 2] = 0;
 c[nb + 748 >> 2] = 0;
 c[nb + 736 >> 2] = 0;
 c[nb + 724 >> 2] = 0;
 c[nb + 712 >> 2] = 0;
 c[nb + 700 >> 2] = 0;
 c[nb + 688 >> 2] = 0;
 c[nb + 676 >> 2] = 0;
 c[nb + 664 >> 2] = 0;
 c[nb + 652 >> 2] = 0;
 c[nb + 640 >> 2] = 0;
 c[nb + 616 >> 2] = 0;
 c[nb + 532 >> 2] = 0;
 c[nb + 520 >> 2] = 0;
 c[nb + 508 >> 2] = 0;
 c[nb + 496 >> 2] = 0;
 c[nb + 484 >> 2] = 0;
 c[nb + 472 >> 2] = 0;
 c[nb + 460 >> 2] = 0;
 c[nb + 448 >> 2] = 0;
 c[nb + 436 >> 2] = 0;
 c[nb + 424 >> 2] = 0;
 c[nb + 412 >> 2] = 0;
 c[nb + 400 >> 2] = 0;
 c[nb + 388 >> 2] = 0;
 c[nb + 376 >> 2] = 0;
 c[nb + 364 >> 2] = 0;
 c[nb + 352 >> 2] = 0;
 c[nb + 328 >> 2] = 0;
 fd(nb + 16 | 0);
 c[nb >> 2] = 0;
 ef(xb, ob + 8 | 0, pb);
 h = f + 48 | 0;
 cf(ub, (c[42822] | 0) + 1168 | 0, xb);
 if ((h | 0) != (ub | 0)) {
  xb = c[ub + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[ub >> 2];
  c[gc + 4 >> 2] = xb;
 }
 ob = mb;
 nb = c[ob + 4 >> 2] | 0;
 pb = f + 120 | 0;
 c[pb >> 2] = c[ob >> 2];
 c[pb + 4 >> 2] = nb;
 pb = f + 224 | 0;
 a[pb >> 0] = 1;
 nb = f + 228 | 0;
 c[nb >> 2] = 28;
 ob = f + 232 | 0;
 c[ob >> 2] = 36;
 c[f + 236 >> 2] = 8;
 c[f + 240 >> 2] = 8;
 c[f + 244 >> 2] = 224;
 c[f + 248 >> 2] = 288;
 c[f + 252 >> 2] = 12;
 n = f + 256 | 0;
 c[n >> 2] = 6120;
 c[Tb >> 2] = -1;
 h = Tb + 4 | 0;
 c[h >> 2] = -1;
 a[Tb + 10 >> 0] = 17;
 a[Tb + 11 >> 0] = 13;
 a[Tb + 12 >> 0] = 17;
 a[Tb + 13 >> 0] = 13;
 a[Tb + 14 >> 0] = 17;
 a[Tb + 15 >> 0] = 13;
 a[Tb + 16 >> 0] = 17;
 a[Tb + 17 >> 0] = 13;
 a[Tb + 18 >> 0] = 17;
 a[Tb + 19 >> 0] = 13;
 a[Tb + 20 >> 0] = 17;
 a[Tb + 21 >> 0] = 13;
 a[Tb + 22 >> 0] = 17;
 a[Tb + 23 >> 0] = 13;
 a[Tb + 24 >> 0] = 17;
 a[Tb + 25 >> 0] = 13;
 a[Tb + 26 >> 0] = 17;
 a[Tb + 27 >> 0] = 13;
 a[Tb + 28 >> 0] = 17;
 a[Tb + 29 >> 0] = 13;
 a[Tb + 30 >> 0] = 17;
 a[Tb + 31 >> 0] = 13;
 a[Tb + 32 >> 0] = 17;
 a[Tb + 33 >> 0] = 13;
 a[Tb + 34 >> 0] = 17;
 a[Tb + 35 >> 0] = 13;
 a[Tb + 36 >> 0] = 17;
 a[Tb + 37 >> 0] = 13;
 a[Tb + 38 >> 0] = 17;
 a[Tb + 39 >> 0] = 13;
 a[Tb + 40 >> 0] = 17;
 a[Tb + 41 >> 0] = 13;
 a[Tb + 8 >> 0] = 0;
 a[Tb + 9 >> 0] = 1;
 o = Tb + 74 | 0;
 a[o >> 0] = 0;
 p = Tb + 75 | 0;
 a[p >> 0] = 0;
 q = Tb + 58 | 0;
 j = Tb + 42 | 0;
 b[q >> 1] = 65535;
 b[q + 2 >> 1] = 65535;
 b[q + 4 >> 1] = 65535;
 b[q + 6 >> 1] = 65535;
 b[q + 8 >> 1] = 65535;
 b[q + 10 >> 1] = 65535;
 b[q + 12 >> 1] = 65535;
 b[q + 14 >> 1] = 65535;
 b[j >> 1] = 0;
 b[j + 2 >> 1] = 0;
 b[j + 4 >> 1] = 0;
 b[j + 6 >> 1] = 0;
 b[j + 8 >> 1] = 0;
 b[j + 10 >> 1] = 0;
 b[j + 12 >> 1] = 0;
 b[j + 14 >> 1] = 0;
 j = Tb + 76 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 c[Cb >> 2] = 0;
 ue(Tb + 92 | 0, Cb);
 c[Tb + 96 >> 2] = -1;
 k = Tb + 104 | 0;
 c[k >> 2] = -1;
 c[k + 4 >> 2] = -1;
 k = Tb + 112 | 0;
 l = Tb + 116 | 0;
 r = Tb + 120 | 0;
 m = Tb + 188 | 0;
 G = r;
 H = G + 68 | 0;
 do {
  c[G >> 2] = 0;
  G = G + 4 | 0;
 } while ((G | 0) < (H | 0));
 a[m >> 0] = a[m >> 0] & -16 | 4;
 c[Tb >> 2] = 2;
 c[h >> 2] = -1;
 c[j >> 2] = 6120;
 c[Tb + 80 >> 2] = 0;
 c[Tb + 84 >> 2] = 0;
 c[k >> 2] = -1;
 c[l >> 2] = -1;
 mb = Tb + 8 | 0;
 b[Tb + 10 + (a[o >> 0] << 1) >> 1] = 256;
 gc = b[o >> 1] | 0;
 h = gc & 255;
 a[q >> 0] = h;
 a[(h << 24 >> 24) + (Tb + 42) >> 0] = (gc & 65535) >>> 8;
 a[p >> 0] = (d[p >> 0] | 0) + 8;
 h = (a[o >> 0] | 0) + 1 << 24 >> 24;
 a[o >> 0] = h;
 b[Tb + 10 + (h << 24 >> 24 << 1) >> 1] = 258;
 h = b[o >> 1] | 0;
 gc = h & 255;
 a[Tb + 60 >> 0] = gc;
 a[(gc << 24 >> 24) + (Tb + 42) >> 0] = (h & 65535) >>> 8;
 a[p >> 0] = (d[p >> 0] | 0) + 8;
 a[o >> 0] = (a[o >> 0] | 0) + 1 << 24 >> 24;
 gc = c[n >> 2] | 0;
 h = c[r >> 2] | 0;
 c[r >> 2] = h + 1;
 h = Tb + 124 + (h << 3) | 0;
 c[h >> 2] = 0;
 c[h + 4 >> 2] = gc;
 h = f + 272 | 0;
 _e(Ub, (c[42822] | 0) + 1168 | 0, Tb);
 if ((h | 0) != (Ub | 0)) {
  ub = Ub;
  xb = c[ub + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[ub >> 2];
  c[gc + 4 >> 2] = xb;
 }
 te(Db, 150827);
 c[Db + 4 >> 2] = -2;
 hf(Xb, Db);
 c[Db >> 2] = 0;
 Ga = Eb + 4 | 0;
 Ha = Eb + 6 | 0;
 a[Ha >> 0] = 17;
 a[Eb + 7 >> 0] = 13;
 Ka = Eb + 8 | 0;
 a[Ka >> 0] = 17;
 a[Eb + 9 >> 0] = 13;
 Na = Eb + 10 | 0;
 a[Na >> 0] = 17;
 a[Eb + 11 >> 0] = 13;
 Oa = Eb + 12 | 0;
 a[Oa >> 0] = 17;
 a[Eb + 13 >> 0] = 13;
 Qa = Eb + 14 | 0;
 a[Qa >> 0] = 17;
 a[Eb + 15 >> 0] = 13;
 Sa = Eb + 16 | 0;
 a[Sa >> 0] = 17;
 a[Eb + 17 >> 0] = 13;
 Ua = Eb + 18 | 0;
 a[Ua >> 0] = 17;
 a[Eb + 19 >> 0] = 13;
 Va = Eb + 20 | 0;
 a[Va >> 0] = 17;
 a[Eb + 21 >> 0] = 13;
 Wa = Eb + 22 | 0;
 a[Wa >> 0] = 17;
 a[Eb + 23 >> 0] = 13;
 Xa = Eb + 24 | 0;
 a[Xa >> 0] = 17;
 a[Eb + 25 >> 0] = 13;
 Za = Eb + 26 | 0;
 a[Za >> 0] = 17;
 a[Eb + 27 >> 0] = 13;
 $a = Eb + 28 | 0;
 a[$a >> 0] = 17;
 a[Eb + 29 >> 0] = 13;
 ab = Eb + 30 | 0;
 a[ab >> 0] = 17;
 a[Eb + 31 >> 0] = 13;
 bb = Eb + 32 | 0;
 a[bb >> 0] = 17;
 a[Eb + 33 >> 0] = 13;
 a[Eb >> 0] = 0;
 a[Eb + 1 >> 0] = 1;
 cb = Eb + 66 | 0;
 fb = Eb + 50 | 0;
 jb = Eb + 34 | 0;
 b[fb >> 1] = 65535;
 b[fb + 2 >> 1] = 65535;
 b[fb + 4 >> 1] = 65535;
 b[fb + 6 >> 1] = 65535;
 b[fb + 8 >> 1] = 65535;
 b[fb + 10 >> 1] = 65535;
 b[fb + 12 >> 1] = 65535;
 b[fb + 14 >> 1] = 65535;
 b[jb >> 1] = 0;
 b[jb + 2 >> 1] = 0;
 b[jb + 4 >> 1] = 0;
 b[jb + 6 >> 1] = 0;
 b[jb + 8 >> 1] = 0;
 b[jb + 10 >> 1] = 0;
 b[jb + 12 >> 1] = 0;
 b[jb + 14 >> 1] = 0;
 b[Eb + 2 >> 1] = 256;
 a[fb >> 0] = 0;
 a[jb >> 0] = 0;
 b[Eb + 4 >> 1] = 258;
 lb = Eb + 52 | 0;
 a[lb >> 0] = 1;
 a[Eb + 35 >> 0] = 8;
 a[Eb + 67 >> 0] = 16;
 a[cb >> 0] = 2;
 w : do if (!3) {
  h = 138107;
  Bb = 665;
 } else {
  h = 138107;
  j = 138107;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break w;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 665;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 665) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 138107 | 0;
 if ((h | 0) > 0) {
  l = yg(h + 9 | 0) | 0;
  gc = l;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = h;
  gc = l + 8 | 0;
  c[Fb >> 2] = gc;
  Rg(gc | 0, 138107, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Fb >> 2] = 0;
  l = 0;
 }
 x : do if (!0) {
  h = 138944;
  Bb = 676;
 } else {
  h = 138944;
  j = 138944;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break x;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 676;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 676) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 138944 | 0;
 if ((h | 0) > 0) {
  k = yg(h + 9 | 0) | 0;
  gc = k;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = h;
  gc = k + 8 | 0;
  c[Gb >> 2] = gc;
  Rg(gc | 0, 138944, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Gb >> 2] = 0;
  k = 0;
 }
 j = Xb + 16 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = Xb + 20 | 0;
   c[h >> 2] = 0;
  } else h = Xb + 20 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = l;
 c[Xb + 20 >> 2] = c[Fb >> 2];
 if (l | 0) {
  gc = l;
  c[gc >> 2] = (c[gc >> 2] | 0) + 1;
 }
 j = Xb + 56 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = Xb + 60 | 0;
   c[h >> 2] = 0;
  } else h = Xb + 60 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = k;
 c[Xb + 60 >> 2] = c[Gb >> 2];
 h = k;
 if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 m = Xb + 256 | 0;
 b[m >> 1] = b[Eb >> 1] | 0;
 n = Xb + 258 | 0;
 o = Eb + 2 | 0;
 b[n >> 1] = b[o >> 1] | 0;
 p = Xb + 260 | 0;
 b[p >> 1] = b[Ga >> 1] | 0;
 q = Xb + 262 | 0;
 b[q >> 1] = b[Ha >> 1] | 0;
 r = Xb + 264 | 0;
 b[r >> 1] = b[Ka >> 1] | 0;
 s = Xb + 266 | 0;
 b[s >> 1] = b[Na >> 1] | 0;
 t = Xb + 268 | 0;
 b[t >> 1] = b[Oa >> 1] | 0;
 u = Xb + 270 | 0;
 b[u >> 1] = b[Qa >> 1] | 0;
 v = Xb + 272 | 0;
 b[v >> 1] = b[Sa >> 1] | 0;
 w = Xb + 274 | 0;
 b[w >> 1] = b[Ua >> 1] | 0;
 x = Xb + 276 | 0;
 b[x >> 1] = b[Va >> 1] | 0;
 y = Xb + 278 | 0;
 b[y >> 1] = b[Wa >> 1] | 0;
 z = Xb + 280 | 0;
 b[z >> 1] = b[Xa >> 1] | 0;
 A = Xb + 282 | 0;
 b[A >> 1] = b[Za >> 1] | 0;
 B = Xb + 284 | 0;
 b[B >> 1] = b[$a >> 1] | 0;
 D = Xb + 286 | 0;
 b[D >> 1] = b[ab >> 1] | 0;
 E = Xb + 288 | 0;
 b[E >> 1] = b[bb >> 1] | 0;
 H = b[jb >> 1] | 0;
 F = Xb + 290 | 0;
 a[F >> 0] = H;
 G = Xb + 291 | 0;
 a[G >> 0] = (H & 65535) >>> 8;
 H = Eb + 36 | 0;
 K = b[H >> 1] | 0;
 I = Xb + 292 | 0;
 a[I >> 0] = K;
 J = Xb + 293 | 0;
 a[J >> 0] = (K & 65535) >>> 8;
 K = Eb + 38 | 0;
 N = b[K >> 1] | 0;
 L = Xb + 294 | 0;
 a[L >> 0] = N;
 M = Xb + 295 | 0;
 a[M >> 0] = (N & 65535) >>> 8;
 N = Eb + 40 | 0;
 Q = b[N >> 1] | 0;
 O = Xb + 296 | 0;
 a[O >> 0] = Q;
 P = Xb + 297 | 0;
 a[P >> 0] = (Q & 65535) >>> 8;
 Q = Eb + 42 | 0;
 U = b[Q >> 1] | 0;
 S = Xb + 298 | 0;
 a[S >> 0] = U;
 T = Xb + 299 | 0;
 a[T >> 0] = (U & 65535) >>> 8;
 U = Eb + 44 | 0;
 X = b[U >> 1] | 0;
 V = Xb + 300 | 0;
 a[V >> 0] = X;
 W = Xb + 301 | 0;
 a[W >> 0] = (X & 65535) >>> 8;
 X = Eb + 46 | 0;
 _ = b[X >> 1] | 0;
 Y = Xb + 302 | 0;
 a[Y >> 0] = _;
 Z = Xb + 303 | 0;
 a[Z >> 0] = (_ & 65535) >>> 8;
 _ = Eb + 48 | 0;
 fa = b[_ >> 1] | 0;
 $ = Xb + 304 | 0;
 a[$ >> 0] = fa;
 aa = Xb + 305 | 0;
 a[aa >> 0] = (fa & 65535) >>> 8;
 fa = b[fb >> 1] | 0;
 ba = Xb + 306 | 0;
 a[ba >> 0] = fa;
 ca = Xb + 307 | 0;
 a[ca >> 0] = (fa & 65535) >>> 8;
 fa = b[lb >> 1] | 0;
 da = Xb + 308 | 0;
 a[da >> 0] = fa;
 ea = Xb + 309 | 0;
 a[ea >> 0] = (fa & 65535) >>> 8;
 fa = Eb + 54 | 0;
 ka = b[fa >> 1] | 0;
 ga = Xb + 310 | 0;
 a[ga >> 0] = ka;
 ia = Xb + 311 | 0;
 a[ia >> 0] = (ka & 65535) >>> 8;
 ka = Eb + 56 | 0;
 na = b[ka >> 1] | 0;
 la = Xb + 312 | 0;
 a[la >> 0] = na;
 ma = Xb + 313 | 0;
 a[ma >> 0] = (na & 65535) >>> 8;
 na = Eb + 58 | 0;
 sa = b[na >> 1] | 0;
 oa = Xb + 314 | 0;
 a[oa >> 0] = sa;
 ra = Xb + 315 | 0;
 a[ra >> 0] = (sa & 65535) >>> 8;
 sa = Eb + 60 | 0;
 ya = b[sa >> 1] | 0;
 ta = Xb + 316 | 0;
 a[ta >> 0] = ya;
 ua = Xb + 317 | 0;
 a[ua >> 0] = (ya & 65535) >>> 8;
 ya = Eb + 62 | 0;
 Ba = b[ya >> 1] | 0;
 za = Xb + 318 | 0;
 a[za >> 0] = Ba;
 Aa = Xb + 319 | 0;
 a[Aa >> 0] = (Ba & 65535) >>> 8;
 Ba = Eb + 64 | 0;
 Fa = b[Ba >> 1] | 0;
 Ca = Xb + 320 | 0;
 a[Ca >> 0] = Fa;
 Da = Xb + 321 | 0;
 a[Da >> 0] = (Fa & 65535) >>> 8;
 Fa = Xb + 322 | 0;
 b[Fa >> 1] = b[cb >> 1] | 0;
 if (k | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(k);
   c[Gb >> 2] = 0;
  }
  c[Gb >> 2] = 0;
 }
 if (l | 0) {
  xb = l;
  gc = c[xb >> 2] | 0;
  c[xb >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(l);
   c[Fb >> 2] = 0;
  }
  c[Fb >> 2] = 0;
 }
 y : do if (!1) {
  h = 142345;
  Bb = 709;
 } else {
  h = 142345;
  j = 142345;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break y;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 709;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 709) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 142345 | 0;
 if ((h | 0) > 0) {
  l = yg(h + 9 | 0) | 0;
  gc = l;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = h;
  gc = l + 8 | 0;
  c[Ib >> 2] = gc;
  Rg(gc | 0, 142345, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Ib >> 2] = 0;
  l = 0;
 }
 z : do if (!0) {
  h = 143208;
  Bb = 720;
 } else {
  h = 143208;
  j = 143208;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break z;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 720;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 720) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 143208 | 0;
 if ((h | 0) > 0) {
  k = yg(h + 9 | 0) | 0;
  gc = k;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = h;
  gc = k + 8 | 0;
  c[Jb >> 2] = gc;
  Rg(gc | 0, 143208, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Jb >> 2] = 0;
  k = 0;
 }
 j = Xb + 24 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = Xb + 28 | 0;
   c[h >> 2] = 0;
  } else h = Xb + 28 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = l;
 c[Xb + 28 >> 2] = c[Ib >> 2];
 if (l | 0) {
  gc = l;
  c[gc >> 2] = (c[gc >> 2] | 0) + 1;
 }
 j = Xb + 64 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = Xb + 68 | 0;
   c[h >> 2] = 0;
  } else h = Xb + 68 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = k;
 c[Xb + 68 >> 2] = c[Jb >> 2];
 h = k;
 if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 b[m >> 1] = b[Eb >> 1] | 0;
 b[n >> 1] = b[o >> 1] | 0;
 b[p >> 1] = b[Ga >> 1] | 0;
 b[q >> 1] = b[Ha >> 1] | 0;
 b[r >> 1] = b[Ka >> 1] | 0;
 b[s >> 1] = b[Na >> 1] | 0;
 b[t >> 1] = b[Oa >> 1] | 0;
 b[u >> 1] = b[Qa >> 1] | 0;
 b[v >> 1] = b[Sa >> 1] | 0;
 b[w >> 1] = b[Ua >> 1] | 0;
 b[x >> 1] = b[Va >> 1] | 0;
 b[y >> 1] = b[Wa >> 1] | 0;
 b[z >> 1] = b[Xa >> 1] | 0;
 b[A >> 1] = b[Za >> 1] | 0;
 b[B >> 1] = b[$a >> 1] | 0;
 b[D >> 1] = b[ab >> 1] | 0;
 b[E >> 1] = b[bb >> 1] | 0;
 gc = b[jb >> 1] | 0;
 a[F >> 0] = gc;
 a[G >> 0] = (gc & 65535) >>> 8;
 gc = b[H >> 1] | 0;
 a[I >> 0] = gc;
 a[J >> 0] = (gc & 65535) >>> 8;
 gc = b[K >> 1] | 0;
 a[L >> 0] = gc;
 a[M >> 0] = (gc & 65535) >>> 8;
 gc = b[N >> 1] | 0;
 a[O >> 0] = gc;
 a[P >> 0] = (gc & 65535) >>> 8;
 gc = b[Q >> 1] | 0;
 a[S >> 0] = gc;
 a[T >> 0] = (gc & 65535) >>> 8;
 gc = b[U >> 1] | 0;
 a[V >> 0] = gc;
 a[W >> 0] = (gc & 65535) >>> 8;
 gc = b[X >> 1] | 0;
 a[Y >> 0] = gc;
 a[Z >> 0] = (gc & 65535) >>> 8;
 gc = b[_ >> 1] | 0;
 a[$ >> 0] = gc;
 a[aa >> 0] = (gc & 65535) >>> 8;
 gc = b[fb >> 1] | 0;
 a[ba >> 0] = gc;
 a[ca >> 0] = (gc & 65535) >>> 8;
 gc = b[lb >> 1] | 0;
 a[da >> 0] = gc;
 a[ea >> 0] = (gc & 65535) >>> 8;
 gc = b[fa >> 1] | 0;
 a[ga >> 0] = gc;
 a[ia >> 0] = (gc & 65535) >>> 8;
 gc = b[ka >> 1] | 0;
 a[la >> 0] = gc;
 a[ma >> 0] = (gc & 65535) >>> 8;
 gc = b[na >> 1] | 0;
 a[oa >> 0] = gc;
 a[ra >> 0] = (gc & 65535) >>> 8;
 gc = b[sa >> 1] | 0;
 a[ta >> 0] = gc;
 a[ua >> 0] = (gc & 65535) >>> 8;
 gc = b[ya >> 1] | 0;
 a[za >> 0] = gc;
 a[Aa >> 0] = (gc & 65535) >>> 8;
 gc = b[Ba >> 1] | 0;
 a[Ca >> 0] = gc;
 a[Da >> 0] = (gc & 65535) >>> 8;
 b[Fa >> 1] = b[cb >> 1] | 0;
 if (k | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(k);
   c[Jb >> 2] = 0;
  }
  c[Jb >> 2] = 0;
 }
 if (l | 0) {
  xb = l;
  gc = c[xb >> 2] | 0;
  c[xb >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(l);
   c[Ib >> 2] = 0;
  }
  c[Ib >> 2] = 0;
 }
 A : do if (!1) {
  h = 146585;
  Bb = 753;
 } else {
  h = 146585;
  j = 146585;
  while (1) {
   if (!(a[h >> 0] | 0)) {
    h = j;
    break A;
   }
   h = h + 1 | 0;
   j = h;
   if (!(j & 3)) {
    Bb = 753;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 753) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 146585 | 0;
 if ((h | 0) > 0) {
  l = yg(h + 9 | 0) | 0;
  gc = l;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[l >> 2] = 0;
  c[l >> 2] = (c[l >> 2] | 0) + 1;
  c[l + 4 >> 2] = h;
  gc = l + 8 | 0;
  c[Kb >> 2] = gc;
  Rg(gc | 0, 146585, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Kb >> 2] = 0;
  l = 0;
 }
 B : do if (!0) {
  h = 147392;
  Bb = 764;
 } else {
  j = 147392;
  h = 147392;
  while (1) {
   if (!(a[j >> 0] | 0)) break B;
   j = j + 1 | 0;
   h = j;
   if (!(h & 3)) {
    h = j;
    Bb = 764;
    break;
   }
  }
 } while (0);
 if ((Bb | 0) == 764) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - 147392 | 0;
 if ((h | 0) > 0) {
  k = yg(h + 9 | 0) | 0;
  gc = k;
  c[gc >> 2] = 0;
  c[gc + 4 >> 2] = 0;
  c[k >> 2] = 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
  c[k + 4 >> 2] = h;
  gc = k + 8 | 0;
  c[Lb >> 2] = gc;
  Rg(gc | 0, 147392, h | 0) | 0;
  a[gc + h >> 0] = 0;
 } else {
  c[Lb >> 2] = 0;
  k = 0;
 }
 j = Xb + 32 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = Xb + 36 | 0;
   c[h >> 2] = 0;
  } else h = Xb + 36 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = l;
 c[Xb + 36 >> 2] = c[Kb >> 2];
 if (l | 0) {
  gc = l;
  c[gc >> 2] = (c[gc >> 2] | 0) + 1;
 }
 j = Xb + 72 | 0;
 h = c[j >> 2] | 0;
 if (h | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(c[j >> 2] | 0);
   c[j >> 2] = 0;
   h = Xb + 76 | 0;
   c[h >> 2] = 0;
  } else h = Xb + 76 | 0;
  c[j >> 2] = 0;
  c[h >> 2] = 0;
 }
 c[j >> 2] = k;
 c[Xb + 76 >> 2] = c[Lb >> 2];
 h = k;
 if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 b[m >> 1] = b[Eb >> 1] | 0;
 b[n >> 1] = b[o >> 1] | 0;
 b[p >> 1] = b[Ga >> 1] | 0;
 b[q >> 1] = b[Ha >> 1] | 0;
 b[r >> 1] = b[Ka >> 1] | 0;
 b[s >> 1] = b[Na >> 1] | 0;
 b[t >> 1] = b[Oa >> 1] | 0;
 b[u >> 1] = b[Qa >> 1] | 0;
 b[v >> 1] = b[Sa >> 1] | 0;
 b[w >> 1] = b[Ua >> 1] | 0;
 b[x >> 1] = b[Va >> 1] | 0;
 b[y >> 1] = b[Wa >> 1] | 0;
 b[z >> 1] = b[Xa >> 1] | 0;
 b[A >> 1] = b[Za >> 1] | 0;
 b[B >> 1] = b[$a >> 1] | 0;
 b[D >> 1] = b[ab >> 1] | 0;
 b[E >> 1] = b[bb >> 1] | 0;
 gc = b[jb >> 1] | 0;
 a[F >> 0] = gc;
 a[G >> 0] = (gc & 65535) >>> 8;
 gc = b[H >> 1] | 0;
 a[I >> 0] = gc;
 a[J >> 0] = (gc & 65535) >>> 8;
 gc = b[K >> 1] | 0;
 a[L >> 0] = gc;
 a[M >> 0] = (gc & 65535) >>> 8;
 gc = b[N >> 1] | 0;
 a[O >> 0] = gc;
 a[P >> 0] = (gc & 65535) >>> 8;
 gc = b[Q >> 1] | 0;
 a[S >> 0] = gc;
 a[T >> 0] = (gc & 65535) >>> 8;
 gc = b[U >> 1] | 0;
 a[V >> 0] = gc;
 a[W >> 0] = (gc & 65535) >>> 8;
 gc = b[X >> 1] | 0;
 a[Y >> 0] = gc;
 a[Z >> 0] = (gc & 65535) >>> 8;
 gc = b[_ >> 1] | 0;
 a[$ >> 0] = gc;
 a[aa >> 0] = (gc & 65535) >>> 8;
 gc = b[fb >> 1] | 0;
 a[ba >> 0] = gc;
 a[ca >> 0] = (gc & 65535) >>> 8;
 gc = b[lb >> 1] | 0;
 a[da >> 0] = gc;
 a[ea >> 0] = (gc & 65535) >>> 8;
 gc = b[fa >> 1] | 0;
 a[ga >> 0] = gc;
 a[ia >> 0] = (gc & 65535) >>> 8;
 gc = b[ka >> 1] | 0;
 a[la >> 0] = gc;
 a[ma >> 0] = (gc & 65535) >>> 8;
 gc = b[na >> 1] | 0;
 a[oa >> 0] = gc;
 a[ra >> 0] = (gc & 65535) >>> 8;
 gc = b[sa >> 1] | 0;
 a[ta >> 0] = gc;
 a[ua >> 0] = (gc & 65535) >>> 8;
 gc = b[ya >> 1] | 0;
 a[za >> 0] = gc;
 a[Aa >> 0] = (gc & 65535) >>> 8;
 gc = b[Ba >> 1] | 0;
 a[Ca >> 0] = gc;
 a[Da >> 0] = (gc & 65535) >>> 8;
 b[Fa >> 1] = b[cb >> 1] | 0;
 if (k | 0) {
  gc = c[h >> 2] | 0;
  c[h >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(k);
   c[Lb >> 2] = 0;
  }
  c[Lb >> 2] = 0;
 }
 if (l | 0) {
  Bb = l;
  gc = c[Bb >> 2] | 0;
  c[Bb >> 2] = gc - 1;
  if ((gc | 0) == 1) {
   zg(l);
   c[Kb >> 2] = 0;
  }
  c[Kb >> 2] = 0;
 }
 c[Mb >> 2] = 0;
 c[Mb + 4 >> 2] = 0;
 c[Mb + 8 >> 2] = -1;
 c[Mb + 12 >> 2] = -1;
 c[Mb + 16 >> 2] = 0;
 c[Mb + 20 >> 2] = -1;
 c[Mb + 24 >> 2] = -1;
 c[Mb + 28 >> 2] = 0;
 c[Mb + 32 >> 2] = -1;
 c[Mb + 36 >> 2] = -1;
 c[Mb + 40 >> 2] = 0;
 c[Mb + 44 >> 2] = -1;
 c[Mb + 48 >> 2] = -1;
 c[Mb + 52 >> 2] = 0;
 c[Mb + 56 >> 2] = -1;
 c[Mb + 60 >> 2] = -1;
 c[Mb + 64 >> 2] = 0;
 c[Mb + 68 >> 2] = -1;
 c[Mb + 72 >> 2] = -1;
 c[Mb + 76 >> 2] = 0;
 c[Mb + 80 >> 2] = -1;
 c[Mb + 84 >> 2] = -1;
 c[Mb + 88 >> 2] = 0;
 c[Mb + 92 >> 2] = -1;
 c[Mb + 96 >> 2] = -1;
 c[Mb + 100 >> 2] = 0;
 c[Mb + 104 >> 2] = -1;
 c[Mb + 108 >> 2] = -1;
 c[Mb + 112 >> 2] = 0;
 c[Mb + 116 >> 2] = -1;
 c[Mb + 120 >> 2] = -1;
 c[Mb + 124 >> 2] = 0;
 c[Mb + 128 >> 2] = -1;
 c[Mb + 132 >> 2] = -1;
 c[Mb + 136 >> 2] = 0;
 c[Mb + 140 >> 2] = -1;
 c[Mb + 144 >> 2] = -1;
 c[Mb + 148 >> 2] = 0;
 c[Mb + 152 >> 2] = -1;
 c[Mb + 156 >> 2] = -1;
 c[Mb + 160 >> 2] = 0;
 c[Mb + 164 >> 2] = -1;
 c[Mb + 168 >> 2] = -1;
 c[Mb + 172 >> 2] = 0;
 c[Mb + 176 >> 2] = -1;
 c[Mb + 180 >> 2] = -1;
 c[Mb + 184 >> 2] = 0;
 c[Mb + 188 >> 2] = -1;
 c[Mb + 192 >> 2] = -1;
 te(Pb, 155806);
 h = c[Mb >> 2] | 0;
 c[Mb >> 2] = h + 1;
 j = Mb + 4 + (h * 12 | 0) | 0;
 ue(Cb, Pb);
 k = Cb + 4 | 0;
 c[k >> 2] = 0;
 c[Cb + 8 >> 2] = 0;
 if ((Cb | 0) != (j | 0)) {
  c[j >> 2] = 0;
  ue(j, Cb);
  c[Cb >> 2] = 0;
 }
 gc = k;
 j = c[gc + 4 >> 2] | 0;
 h = Mb + 4 + (h * 12 | 0) + 4 | 0;
 c[h >> 2] = c[gc >> 2];
 c[h + 4 >> 2] = j;
 c[Pb >> 2] = 0;
 te(Sb, 150840);
 h = Xb + 2632 | 0;
 j = c[h >> 2] | 0;
 c[h >> 2] = j + 1;
 h = Xb + 2636 + (j * 204 | 0) | 0;
 if ((h | 0) != (Sb | 0)) {
  c[h >> 2] = 0;
  ue(h, Sb);
 }
 gc = Xb + 2636 + (j * 204 | 0) + 4 | 0;
 c[gc >> 2] = c[Mb >> 2];
 if ((gc | 0) != (Mb | 0)) {
  h = 0;
  do {
   xb = Xb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) | 0;
   c[xb >> 2] = 0;
   ue(xb, Mb + 4 + (h * 12 | 0) | 0);
   xb = Mb + 4 + (h * 12 | 0) + 4 | 0;
   Bb = c[xb + 4 >> 2] | 0;
   gc = Xb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) + 4 | 0;
   c[gc >> 2] = c[xb >> 2];
   c[gc + 4 >> 2] = Bb;
   h = h + 1 | 0;
  } while ((h | 0) != 16);
 }
 c[Xb + 2636 + (j * 204 | 0) + 200 >> 2] = 1;
 bf(Vb, (c[42822] | 0) + 1168 | 0, Xb);
 c[Xb + 3028 >> 2] = 0;
 c[Xb + 3016 >> 2] = 0;
 c[Xb + 3004 >> 2] = 0;
 c[Xb + 2992 >> 2] = 0;
 c[Xb + 2980 >> 2] = 0;
 c[Xb + 2968 >> 2] = 0;
 c[Xb + 2956 >> 2] = 0;
 c[Xb + 2944 >> 2] = 0;
 c[Xb + 2932 >> 2] = 0;
 c[Xb + 2920 >> 2] = 0;
 c[Xb + 2908 >> 2] = 0;
 c[Xb + 2896 >> 2] = 0;
 c[Xb + 2884 >> 2] = 0;
 c[Xb + 2872 >> 2] = 0;
 c[Xb + 2860 >> 2] = 0;
 c[Xb + 2848 >> 2] = 0;
 c[Xb + 2840 >> 2] = 0;
 c[Xb + 2824 >> 2] = 0;
 c[Xb + 2812 >> 2] = 0;
 c[Xb + 2800 >> 2] = 0;
 c[Xb + 2788 >> 2] = 0;
 c[Xb + 2776 >> 2] = 0;
 c[Xb + 2764 >> 2] = 0;
 c[Xb + 2752 >> 2] = 0;
 c[Xb + 2740 >> 2] = 0;
 c[Xb + 2728 >> 2] = 0;
 c[Xb + 2716 >> 2] = 0;
 c[Xb + 2704 >> 2] = 0;
 c[Xb + 2692 >> 2] = 0;
 c[Xb + 2680 >> 2] = 0;
 c[Xb + 2668 >> 2] = 0;
 c[Xb + 2656 >> 2] = 0;
 c[Xb + 2644 >> 2] = 0;
 c[Xb + 2636 >> 2] = 0;
 c[Xb + 2548 >> 2] = 0;
 c[Xb + 2536 >> 2] = 0;
 c[Xb + 2524 >> 2] = 0;
 c[Xb + 2512 >> 2] = 0;
 c[Xb + 2500 >> 2] = 0;
 c[Xb + 2488 >> 2] = 0;
 c[Xb + 2476 >> 2] = 0;
 c[Xb + 2464 >> 2] = 0;
 c[Xb + 2452 >> 2] = 0;
 c[Xb + 2440 >> 2] = 0;
 c[Xb + 2428 >> 2] = 0;
 c[Xb + 2416 >> 2] = 0;
 c[Xb + 2404 >> 2] = 0;
 c[Xb + 2392 >> 2] = 0;
 c[Xb + 2380 >> 2] = 0;
 c[Xb + 2368 >> 2] = 0;
 c[Xb + 2344 >> 2] = 0;
 c[Xb + 2260 >> 2] = 0;
 c[Xb + 2248 >> 2] = 0;
 c[Xb + 2236 >> 2] = 0;
 c[Xb + 2224 >> 2] = 0;
 c[Xb + 2212 >> 2] = 0;
 c[Xb + 2200 >> 2] = 0;
 c[Xb + 2188 >> 2] = 0;
 c[Xb + 2176 >> 2] = 0;
 c[Xb + 2164 >> 2] = 0;
 c[Xb + 2152 >> 2] = 0;
 c[Xb + 2140 >> 2] = 0;
 c[Xb + 2128 >> 2] = 0;
 c[Xb + 2116 >> 2] = 0;
 c[Xb + 2104 >> 2] = 0;
 c[Xb + 2092 >> 2] = 0;
 c[Xb + 2080 >> 2] = 0;
 c[Xb + 2056 >> 2] = 0;
 c[Xb + 1972 >> 2] = 0;
 c[Xb + 1960 >> 2] = 0;
 c[Xb + 1948 >> 2] = 0;
 c[Xb + 1936 >> 2] = 0;
 c[Xb + 1924 >> 2] = 0;
 c[Xb + 1912 >> 2] = 0;
 c[Xb + 1900 >> 2] = 0;
 c[Xb + 1888 >> 2] = 0;
 c[Xb + 1876 >> 2] = 0;
 c[Xb + 1864 >> 2] = 0;
 c[Xb + 1852 >> 2] = 0;
 c[Xb + 1840 >> 2] = 0;
 c[Xb + 1828 >> 2] = 0;
 c[Xb + 1816 >> 2] = 0;
 c[Xb + 1804 >> 2] = 0;
 c[Xb + 1792 >> 2] = 0;
 c[Xb + 1768 >> 2] = 0;
 c[Xb + 1684 >> 2] = 0;
 c[Xb + 1672 >> 2] = 0;
 c[Xb + 1660 >> 2] = 0;
 c[Xb + 1648 >> 2] = 0;
 c[Xb + 1636 >> 2] = 0;
 c[Xb + 1624 >> 2] = 0;
 c[Xb + 1612 >> 2] = 0;
 c[Xb + 1600 >> 2] = 0;
 c[Xb + 1588 >> 2] = 0;
 c[Xb + 1576 >> 2] = 0;
 c[Xb + 1564 >> 2] = 0;
 c[Xb + 1552 >> 2] = 0;
 c[Xb + 1540 >> 2] = 0;
 c[Xb + 1528 >> 2] = 0;
 c[Xb + 1516 >> 2] = 0;
 c[Xb + 1504 >> 2] = 0;
 c[Xb + 1480 >> 2] = 0;
 c[Xb + 1396 >> 2] = 0;
 c[Xb + 1384 >> 2] = 0;
 c[Xb + 1372 >> 2] = 0;
 c[Xb + 1360 >> 2] = 0;
 c[Xb + 1348 >> 2] = 0;
 c[Xb + 1336 >> 2] = 0;
 c[Xb + 1324 >> 2] = 0;
 c[Xb + 1312 >> 2] = 0;
 c[Xb + 1300 >> 2] = 0;
 c[Xb + 1288 >> 2] = 0;
 c[Xb + 1276 >> 2] = 0;
 c[Xb + 1264 >> 2] = 0;
 c[Xb + 1252 >> 2] = 0;
 c[Xb + 1240 >> 2] = 0;
 c[Xb + 1228 >> 2] = 0;
 c[Xb + 1216 >> 2] = 0;
 c[Xb + 1192 >> 2] = 0;
 c[Xb + 1108 >> 2] = 0;
 c[Xb + 1096 >> 2] = 0;
 c[Xb + 1084 >> 2] = 0;
 c[Xb + 1072 >> 2] = 0;
 c[Xb + 1060 >> 2] = 0;
 c[Xb + 1048 >> 2] = 0;
 c[Xb + 1036 >> 2] = 0;
 c[Xb + 1024 >> 2] = 0;
 c[Xb + 1012 >> 2] = 0;
 c[Xb + 1e3 >> 2] = 0;
 c[Xb + 988 >> 2] = 0;
 c[Xb + 976 >> 2] = 0;
 c[Xb + 964 >> 2] = 0;
 c[Xb + 952 >> 2] = 0;
 c[Xb + 940 >> 2] = 0;
 c[Xb + 928 >> 2] = 0;
 c[Xb + 904 >> 2] = 0;
 c[Xb + 820 >> 2] = 0;
 c[Xb + 808 >> 2] = 0;
 c[Xb + 796 >> 2] = 0;
 c[Xb + 784 >> 2] = 0;
 c[Xb + 772 >> 2] = 0;
 c[Xb + 760 >> 2] = 0;
 c[Xb + 748 >> 2] = 0;
 c[Xb + 736 >> 2] = 0;
 c[Xb + 724 >> 2] = 0;
 c[Xb + 712 >> 2] = 0;
 c[Xb + 700 >> 2] = 0;
 c[Xb + 688 >> 2] = 0;
 c[Xb + 676 >> 2] = 0;
 c[Xb + 664 >> 2] = 0;
 c[Xb + 652 >> 2] = 0;
 c[Xb + 640 >> 2] = 0;
 c[Xb + 616 >> 2] = 0;
 c[Xb + 532 >> 2] = 0;
 c[Xb + 520 >> 2] = 0;
 c[Xb + 508 >> 2] = 0;
 c[Xb + 496 >> 2] = 0;
 c[Xb + 484 >> 2] = 0;
 c[Xb + 472 >> 2] = 0;
 c[Xb + 460 >> 2] = 0;
 c[Xb + 448 >> 2] = 0;
 c[Xb + 436 >> 2] = 0;
 c[Xb + 424 >> 2] = 0;
 c[Xb + 412 >> 2] = 0;
 c[Xb + 400 >> 2] = 0;
 c[Xb + 388 >> 2] = 0;
 c[Xb + 376 >> 2] = 0;
 c[Xb + 364 >> 2] = 0;
 c[Xb + 352 >> 2] = 0;
 c[Xb + 328 >> 2] = 0;
 fd(Xb + 16 | 0);
 c[Xb >> 2] = 0;
 ef(Db, mb, Vb);
 h = Db + 8 | 0;
 Bb = c[h >> 2] | 0;
 gc = e[h + 4 >> 1] | 0;
 xb = _g(c[rb >> 2] | 0, 0, 31) | 0;
 gc = C & 15 | gc & 65024;
 _g(c[tb >> 2] | 0, 0, 36) | 0;
 c[h >> 2] = xb & -2147483648 | (Bb & 2147481600 | 329);
 b[h + 4 >> 1] = gc | C & 496;
 h = Db + 40 | 0;
 b[h >> 1] = b[h >> 1] & -2;
 h = f + 264 | 0;
 cf(Yb, (c[42822] | 0) + 1168 | 0, Db);
 if ((h | 0) != (Yb | 0)) {
  xb = Yb;
  Bb = c[xb + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[xb >> 2];
  c[gc + 4 >> 2] = Bb;
 }
 c[_b >> 2] = 0;
 c[_b + 4 >> 2] = 0;
 c[_b + 8 >> 2] = 0;
 c[_b + 12 >> 2] = 0;
 c[_b + 16 >> 2] = 0;
 c[_b + 20 >> 2] = 0;
 c[_b + 24 >> 2] = 1;
 c[_b + 28 >> 2] = 0;
 c[_b + 32 >> 2] = 20;
 h = _b + 40 | 0;
 j = h;
 c[j >> 2] = -1;
 c[j + 4 >> 2] = -1;
 b[_b + 48 >> 1] = 21;
 g[_b + 52 >> 2] = 0.0;
 g[_b + 56 >> 2] = 0.0;
 g[_b + 60 >> 2] = 0.0;
 g[_b + 64 >> 2] = 1.0;
 g[_b + 68 >> 2] = 1.0;
 a[_b + 72 >> 0] = 0;
 a[_b + 73 >> 0] = 3;
 c[Cb >> 2] = 0;
 j = _b + 76 | 0;
 ue(j, Cb);
 k = _b + 80 | 0;
 c[k >> 2] = -1;
 l = _b + 88 | 0;
 m = l;
 c[m >> 2] = -1;
 c[m + 4 >> 2] = -1;
 m = _b + 680 | 0;
 Xg(_b + 96 | 0, 0, 584) | 0;
 a[m >> 0] = a[m >> 0] & -128;
 G = Eb;
 s = _b;
 H = G + 36 | 0;
 do {
  c[G >> 2] = c[s >> 2];
  G = G + 4 | 0;
  s = s + 4 | 0;
 } while ((G | 0) < (H | 0));
 gc = c[h + 4 >> 2] | 0;
 Bb = Eb + 40 | 0;
 c[Bb >> 2] = c[h >> 2];
 c[Bb + 4 >> 2] = gc;
 Bb = Eb + 48 | 0;
 gc = _b + 48 | 0;
 c[Bb >> 2] = c[gc >> 2];
 c[Bb + 4 >> 2] = c[gc + 4 >> 2];
 c[Bb + 8 >> 2] = c[gc + 8 >> 2];
 c[Bb + 12 >> 2] = c[gc + 12 >> 2];
 c[Bb + 16 >> 2] = c[gc + 16 >> 2];
 c[Bb + 20 >> 2] = c[gc + 20 >> 2];
 c[Bb + 24 >> 2] = c[gc + 24 >> 2];
 ue(Eb + 76 | 0, j);
 c[Eb + 80 >> 2] = c[k >> 2];
 Bb = l;
 gc = c[Bb + 4 >> 2] | 0;
 h = Eb + 88 | 0;
 c[h >> 2] = c[Bb >> 2];
 c[h + 4 >> 2] = gc;
 Re(Eb + 96 | 0, _b + 96 | 0);
 a[Eb + 680 >> 0] = a[m >> 0] | 2;
 c[Eb + 4 >> 2] = 0;
 c[Eb + 8 >> 2] = 128;
 c[Eb + 12 >> 2] = 256;
 c[Eb + 24 >> 2] = 1;
 c[Eb + 28 >> 2] = 0;
 c[Eb + 96 >> 2] = 1;
 c[Eb + 100 >> 2] = 1;
 c[_b + 76 >> 2] = 0;
 h = Eb + 48 | 0;
 b[h >> 1] = b[h >> 1] & -4048;
 c[Eb + 392 >> 2] = 131072;
 h = f + 336 | 0;
 af($b, (c[42822] | 0) + 1168 | 0, Eb, 1820);
 if ((h | 0) != ($b | 0)) {
  xb = $b;
  Bb = c[xb + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[xb >> 2];
  c[gc + 4 >> 2] = Bb;
 }
 h = c[ob >> 2] | 0;
 if ((h | 0) > 0) {
  j = c[nb >> 2] | 0;
  k = 0;
  do {
   if ((j | 0) > 0) {
    h = 0;
    do {
     c[f + 432 + ((R(j, k) | 0) + h << 2) >> 2] = 74;
     h = h + 1 | 0;
     j = c[nb >> 2] | 0;
    } while ((h | 0) < (j | 0));
    h = c[ob >> 2] | 0;
   }
   k = k + 1 | 0;
  } while ((k | 0) < (h | 0));
 }
 Xg(f + 17584 | 0, 0, 393216) | 0;
 k = f + 411344 | 0;
 h = f + 411352 | 0;
 j = Eb + 16 | 0;
 c[j >> 2] = Eb;
 c[Eb >> 2] = 1576;
 Xf(Db, 1, .125, Eb);
 Vf(Cb, Db);
 if ((h | 0) != (Cb | 0)) {
  Bb = Cb;
  Cb = c[Bb + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[Bb >> 2];
  c[gc + 4 >> 2] = Cb;
 }
 h = c[Db + 32 >> 2] | 0;
 do if ((h | 0) == (Db + 16 | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 c[Db >> 2] = 0;
 h = c[j >> 2] | 0;
 do if ((h | 0) == (Eb | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 h = f + 411360 | 0;
 j = Ib + 16 | 0;
 c[j >> 2] = Ib;
 c[Ib >> 2] = 1612;
 Xf(Gb, 1, .125, Ib);
 Vf(Fb, Gb);
 if ((h | 0) != (Fb | 0)) {
  Eb = Fb;
  Fb = c[Eb + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[Eb >> 2];
  c[gc + 4 >> 2] = Fb;
 }
 h = c[Gb + 32 >> 2] | 0;
 do if ((h | 0) == (Gb + 16 | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 c[Gb >> 2] = 0;
 h = c[j >> 2] | 0;
 do if ((h | 0) == (Ib | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 j = Lb + 16 | 0;
 c[j >> 2] = Lb;
 c[Lb >> 2] = 1648;
 Xf(Kb, 1, 4.28000020980835, Lb);
 Vf(Jb, Kb);
 if ((k | 0) != (Jb | 0)) {
  Ib = Jb;
  Jb = c[Ib + 4 >> 2] | 0;
  gc = k;
  c[gc >> 2] = c[Ib >> 2];
  c[gc + 4 >> 2] = Jb;
 }
 h = c[Kb + 32 >> 2] | 0;
 do if ((h | 0) == (Kb + 16 | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 c[Kb >> 2] = 0;
 h = c[j >> 2] | 0;
 do if ((h | 0) == (Lb | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 h = f + 411368 | 0;
 j = Sb + 16 | 0;
 c[j >> 2] = Sb;
 c[Sb >> 2] = 1684;
 Xf(Pb, 1, .13330000638961792, Sb);
 Vf(Mb, Pb);
 if ((h | 0) != (Mb | 0)) {
  Lb = Mb;
  Mb = c[Lb + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[Lb >> 2];
  c[gc + 4 >> 2] = Mb;
 }
 h = c[Pb + 32 >> 2] | 0;
 do if ((h | 0) == (Pb + 16 | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 c[Pb >> 2] = 0;
 h = c[j >> 2] | 0;
 do if ((h | 0) == (Sb | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 h = f + 411376 | 0;
 j = Vb + 16 | 0;
 c[j >> 2] = Vb;
 c[Vb >> 2] = 1720;
 Xf(Ub, 2, .4000000059604645, Vb);
 Vf(Tb, Ub);
 if ((h | 0) != (Tb | 0)) {
  Sb = Tb;
  Tb = c[Sb + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[Sb >> 2];
  c[gc + 4 >> 2] = Tb;
 }
 h = c[Ub + 32 >> 2] | 0;
 do if ((h | 0) == (Ub + 16 | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 c[Ub >> 2] = 0;
 h = c[j >> 2] | 0;
 do if ((h | 0) == (Vb | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 h = f + 411384 | 0;
 j = _b + 16 | 0;
 c[j >> 2] = _b;
 c[_b >> 2] = 1756;
 Xf(Yb, 2, .25, _b);
 Vf(Xb, Yb);
 if ((h | 0) != (Xb | 0)) {
  Vb = Xb;
  Xb = c[Vb + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[Vb >> 2];
  c[gc + 4 >> 2] = Xb;
 }
 h = c[Yb + 32 >> 2] | 0;
 do if ((h | 0) == (Yb + 16 | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 c[Yb >> 2] = 0;
 h = c[j >> 2] | 0;
 do if ((h | 0) == (_b | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 h = f + 411392 | 0;
 j = bc + 16 | 0;
 c[j >> 2] = bc;
 c[bc >> 2] = 1792;
 c[bc + 4 >> 2] = k;
 Xf(ac, 1, .5120000243186951, bc);
 Vf($b, ac);
 if ((h | 0) != ($b | 0)) {
  _b = $b;
  $b = c[_b + 4 >> 2] | 0;
  gc = h;
  c[gc >> 2] = c[_b >> 2];
  c[gc + 4 >> 2] = $b;
 }
 h = c[ac + 32 >> 2] | 0;
 do if ((h | 0) == (ac + 16 | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else {
  if (!h) break;
  Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 } while (0);
 c[ac >> 2] = 0;
 h = c[j >> 2] | 0;
 if ((h | 0) == (bc | 0)) {
  Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h);
  gc = f + 410800 | 0;
  c[gc >> 2] = 0;
  bc = f + 410804 | 0;
  c[bc >> 2] = 0;
  bc = f + 410820 | 0;
  c[bc >> 2] = 0;
  bc = f + 410824 | 0;
  c[bc >> 2] = 0;
  bc = f + 410828 | 0;
  c[bc >> 2] = 3;
  bc = f + 410808 | 0;
  c[bc >> 2] = 0;
  bc = f + 410812 | 0;
  c[bc >> 2] = 0;
  bc = f + 410816 | 0;
  c[bc >> 2] = 0;
  f = f + 410832 | 0;
  c[f >> 2] = 0;
  hd(gc, pb, k);
  i = dc;
  return 4;
 }
 if (!h) {
  gc = f + 410800 | 0;
  c[gc >> 2] = 0;
  bc = f + 410804 | 0;
  c[bc >> 2] = 0;
  bc = f + 410820 | 0;
  c[bc >> 2] = 0;
  bc = f + 410824 | 0;
  c[bc >> 2] = 0;
  bc = f + 410828 | 0;
  c[bc >> 2] = 3;
  bc = f + 410808 | 0;
  c[bc >> 2] = 0;
  bc = f + 410812 | 0;
  c[bc >> 2] = 0;
  bc = f + 410816 | 0;
  c[bc >> 2] = 0;
  f = f + 410832 | 0;
  c[f >> 2] = 0;
  hd(gc, pb, k);
  i = dc;
  return 4;
 }
 Pc[c[(c[h >> 2] | 0) + 20 >> 2] & 127](h);
 gc = f + 410800 | 0;
 c[gc >> 2] = 0;
 bc = f + 410804 | 0;
 c[bc >> 2] = 0;
 bc = f + 410820 | 0;
 c[bc >> 2] = 0;
 bc = f + 410824 | 0;
 c[bc >> 2] = 0;
 bc = f + 410828 | 0;
 c[bc >> 2] = 3;
 bc = f + 410808 | 0;
 c[bc >> 2] = 0;
 bc = f + 410812 | 0;
 c[bc >> 2] = 0;
 bc = f + 410816 | 0;
 c[bc >> 2] = 0;
 f = f + 410832 | 0;
 c[f >> 2] = 0;
 hd(gc, pb, k);
 i = dc;
 return 4;
}

function df(d, f) {
 d = d | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = 0, jb = 0, kb = 0, lb = 0, mb = 0, nb = 0, ob = 0, pb = 0, qb = 0, rb = 0, sb = 0, tb = 0, ub = 0, vb = 0, wb = 0, yb = 0, zb = 0, Ab = 0, Bb = 0, Cb = 0, Db = 0, Eb = 0, Fb = 0, Gb = 0, Hb = 0, Ib = 0, Jb = 0, Kb = 0, Lb = 0, Mb = 0, Nb = 0, Ob = 0, Pb = 0, Qb = 0, Rb = 0, Sb = 0, Tb = 0, Ub = 0, Vb = 0, Wb = 0, Yb = 0, Zb = 0, _b = 0, $b = 0, ac = 0, bc = 0, cc = 0, dc = 0, ec = 0, fc = 0, hc = 0, ic = 0, jc = 0, kc = 0, lc = 0, mc = 0, nc = 0, oc = 0, pc = 0, qc = 0, rc = 0, sc = 0, tc = 0, uc = 0, vc = 0, wc = 0, xc = 0, yc = 0, zc = 0, Ac = 0, Bc = 0, Cc = 0, Dc = 0, Ec = 0, Fc = 0, Gc = 0, Hc = 0, Ic = 0, Jc = 0, Kc = 0, Lc = 0, Mc = 0, Nc = 0, Oc = 0, Pc = 0, Qc = 0, Rc = 0, Sc = 0, Tc = 0, Uc = 0, Vc = 0, Wc = 0, Xc = 0, Yc = 0, Zc = 0, _c = 0, $c = 0, ad = 0, bd = 0, cd = 0, dd = 0, ed = 0, fd = 0, gd = 0, hd = 0, id = 0, jd = 0, kd = 0, ld = 0, md = 0, nd = 0, od = 0, pd = 0, qd = 0, rd = 0, sd = 0, td = 0, ud = 0, vd = 0, wd = 0, xd = 0, yd = 0, zd = 0, Ad = 0, Bd = 0, Cd = 0, Dd = 0, Ed = 0, Fd = 0, Gd = 0, Hd = 0, Id = 0, Jd = 0, Kd = 0, Ld = 0, Md = 0, Nd = 0, Od = 0, Pd = 0, Qd = 0, Rd = 0, Sd = 0, Td = 0, Ud = 0, Vd = 0, Wd = 0, Xd = 0, Yd = 0, Zd = 0, _d = 0, $d = 0, ae = 0, be = 0, ce = 0, de = 0, ee = 0, fe = 0, ge = 0, ie = 0, je = 0, ke = 0, le = 0, me = 0, ne = 0, oe = 0, pe = 0, qe = 0, re = 0, se = 0, te = 0, ve = 0, we = 0, xe = 0, ye = 0, ze = 0, Ae = 0, Be = 0, Ce = 0, De = 0, Ee = 0, Fe = 0, Ge = 0, He = 0, Ie = 0, Je = 0, Ke = 0, Le = 0, Me = 0, Ne = 0, Pe = 0, Qe = 0, Re = 0, Se = 0, Te = 0, Ue = 0, Ve = 0, We = 0, Xe = 0, Ye = 0, Ze = 0, _e = 0, $e = 0, af = 0, bf = 0, cf = 0, df = 0, ef = 0, ff = 0, gf = 0, hf = 0, jf = 0, lf = 0, nf = 0, of = 0, pf = 0, qf = 0, rf = 0, sf = 0, tf = 0, uf = 0, vf = 0, wf = 0, xf = 0, yf = 0, zf = 0, Af = 0, Bf = 0, Cf = 0, Df = 0, Ef = 0, Ff = 0, Gf = 0, Hf = 0, If = 0, Jf = 0, Kf = 0, Lf = 0, Mf = 0, Nf = 0, Of = 0, Pf = 0, Qf = 0, Rf = 0, Sf = 0, Tf = 0, Uf = 0, Vf = 0, Wf = 0, Xf = 0, Yf = 0, Zf = 0, _f = 0, $f = 0, ag = 0, bg = 0, cg = 0, eg = 0, fg = 0, gg = 0, hg = 0, ig = 0, jg = 0, kg = 0, lg = 0, mg = 0, ng = 0, og = 0, pg = 0, qg = 0, rg = 0, sg = 0, tg = 0, ug = 0, vg = 0, wg = 0, xg = 0, yg = 0, Ag = 0, Bg = 0, Cg = 0, Dg = 0, Eg = 0, Fg = 0, Gg = 0, Hg = 0, Ig = 0, Jg = 0, Kg = 0, Lg = 0, Mg = 0, Ng = 0, Og = 0, Pg = 0, Qg = 0, Rg = 0, Sg = 0, Tg = 0, Ug = 0, Vg = 0, Wg = 0, Yg = 0, Zg = 0, _g = 0, $g = 0, ah = 0, bh = 0, ch = 0, dh = 0, eh = 0, fh = 0, gh = 0, hh = 0, ih = 0, jh = 0, kh = 0, lh = 0, mh = 0, nh = 0, oh = 0, ph = 0, qh = 0, rh = 0, sh = 0, th = 0, uh = 0, vh = 0, wh = 0, xh = 0, yh = 0, zh = 0, Ah = 0, Bh = 0, Ch = 0, Dh = 0, Eh = 0;
 Eh = i;
 i = i + 800 | 0;
 Ah = Eh + 712 | 0;
 Ch = Eh + 704 | 0;
 Bh = Eh + 696 | 0;
 zh = Eh + 688 | 0;
 wh = Eh + 792 | 0;
 xh = Eh;
 yh = Eh + 744 | 0;
 Dh = Eh + 720 | 0;
 vh = Eh + 788 | 0;
 c[vh >> 2] = f;
 dg(Dh, d + 24 | 0, vh);
 f = c[Dh >> 2] | 0;
 if (!f) {
  c[Dh + 16 >> 2] = 0;
  c[Dh + 20 >> 2] = 0;
  i = Eh;
  return;
 }
 h = c[Dh + 8 >> 2] | 0;
 vh = c[Dh + 12 >> 2] | 0;
 ch = f + (vh << 3) | 0;
 if ((h | 0) == (vh | 0)) {
  c[Dh + 16 >> 2] = 0;
  c[Dh + 20 >> 2] = 0;
 } else {
  dh = d + 424 | 0;
  eh = d + 416 | 0;
  fh = d + 208 | 0;
  gh = d + 440 | 0;
  hh = d + 452 | 0;
  ih = d + 296 | 0;
  jh = d + 288 | 0;
  kh = d + 144 | 0;
  lh = d + 312 | 0;
  mh = d + 324 | 0;
  nh = d + 360 | 0;
  oh = d + 352 | 0;
  ph = d + 176 | 0;
  qh = d + 376 | 0;
  rh = d + 388 | 0;
  sh = d + 488 | 0;
  th = d + 480 | 0;
  uh = d + 240 | 0;
  vh = d + 504 | 0;
  Ae = d + 516 | 0;
  Le = yh + 4 | 0;
  Xe = yh + 8 | 0;
  gf = yh + 12 | 0;
  uf = yh + 16 | 0;
  Ff = yh + 20 | 0;
  Qf = yh + 24 | 0;
  Zf = yh + 28 | 0;
  _f = yh + 32 | 0;
  $f = yh + 36 | 0;
  ag = yh + 40 | 0;
  bg = yh + 41 | 0;
  cg = yh + 42 | 0;
  eg = xh + 24 | 0;
  fg = xh + 28 | 0;
  gg = xh + 32 | 0;
  hg = xh + 40 | 0;
  ig = xh + 48 | 0;
  jg = xh + 52 | 0;
  kg = xh + 56 | 0;
  lg = xh + 60 | 0;
  mg = xh + 64 | 0;
  ng = xh + 68 | 0;
  og = xh + 72 | 0;
  pg = xh + 73 | 0;
  qg = xh + 76 | 0;
  rg = xh + 80 | 0;
  sg = xh + 88 | 0;
  tg = xh + 96 | 0;
  ug = xh + 680 | 0;
  vg = xh + 48 | 0;
  wg = xh + 96 | 0;
  xg = xh + 4 | 0;
  yg = xh + 10 | 0;
  Ag = xh + 11 | 0;
  Bg = xh + 12 | 0;
  Cg = xh + 13 | 0;
  Dg = xh + 14 | 0;
  Eg = xh + 15 | 0;
  Fg = xh + 16 | 0;
  Gg = xh + 17 | 0;
  Hg = xh + 18 | 0;
  Ig = xh + 19 | 0;
  Jg = xh + 20 | 0;
  Kg = xh + 21 | 0;
  Lg = xh + 22 | 0;
  Mg = xh + 23 | 0;
  Ng = xh + 24 | 0;
  Og = xh + 25 | 0;
  Pg = xh + 26 | 0;
  Qg = xh + 27 | 0;
  Rg = xh + 28 | 0;
  Sg = xh + 29 | 0;
  Tg = xh + 30 | 0;
  Ug = xh + 31 | 0;
  Vg = xh + 32 | 0;
  Wg = xh + 33 | 0;
  Yg = xh + 34 | 0;
  Zg = xh + 35 | 0;
  _g = xh + 36 | 0;
  $g = xh + 37 | 0;
  ah = xh + 38 | 0;
  bh = xh + 39 | 0;
  s = xh + 40 | 0;
  t = xh + 41 | 0;
  u = xh + 8 | 0;
  v = xh + 9 | 0;
  w = xh + 74 | 0;
  x = xh + 75 | 0;
  y = xh + 58 | 0;
  z = xh + 42 | 0;
  A = xh + 76 | 0;
  B = xh + 92 | 0;
  C = xh + 96 | 0;
  D = xh + 104 | 0;
  E = xh + 112 | 0;
  F = xh + 116 | 0;
  G = xh + 120 | 0;
  H = xh + 188 | 0;
  I = xh + 8 | 0;
  J = xh + 12 | 0;
  K = xh + 14 | 0;
  L = xh + 16 | 0;
  M = xh + 18 | 0;
  N = xh + 20 | 0;
  O = xh + 22 | 0;
  P = xh + 24 | 0;
  Q = xh + 26 | 0;
  R = xh + 28 | 0;
  S = xh + 30 | 0;
  T = xh + 32 | 0;
  U = xh + 34 | 0;
  V = xh + 36 | 0;
  W = xh + 38 | 0;
  X = xh + 40 | 0;
  Y = xh + 44 | 0;
  Z = xh + 46 | 0;
  _ = xh + 48 | 0;
  $ = xh + 50 | 0;
  aa = xh + 52 | 0;
  ba = xh + 54 | 0;
  ca = xh + 56 | 0;
  da = xh + 60 | 0;
  fa = xh + 62 | 0;
  ga = xh + 64 | 0;
  ha = xh + 66 | 0;
  ia = xh + 68 | 0;
  ja = xh + 70 | 0;
  ka = xh + 72 | 0;
  ma = xh + 4 | 0;
  na = xh + 8 | 0;
  oa = xh + 16 | 0;
  pa = xh + 20 | 0;
  qa = xh + 24 | 0;
  ra = xh + 28 | 0;
  sa = xh + 32 | 0;
  ta = xh + 34 | 0;
  ua = xh + 36 | 0;
  va = ua + 2 | 0;
  wa = xh + 40 | 0;
  xa = xh + 44 | 0;
  ya = xh + 45 | 0;
  za = xh + 46 | 0;
  Aa = xh + 47 | 0;
  Ba = xh + 48 | 0;
  Ca = xh + 49 | 0;
  Da = xh + 50 | 0;
  Ea = xh + 51 | 0;
  Fa = xh + 52 | 0;
  Ga = xh + 53 | 0;
  Ha = xh + 54 | 0;
  Ia = xh + 55 | 0;
  Ja = xh + 56 | 0;
  Ka = xh + 57 | 0;
  La = xh + 58 | 0;
  Ma = xh + 59 | 0;
  Na = xh + 60 | 0;
  Oa = xh + 61 | 0;
  Pa = xh + 62 | 0;
  Qa = xh + 63 | 0;
  Ra = xh + 64 | 0;
  Sa = xh + 65 | 0;
  Ta = xh + 66 | 0;
  Ua = xh + 67 | 0;
  Va = xh + 68 | 0;
  Wa = xh + 69 | 0;
  Ya = xh + 70 | 0;
  Za = xh + 71 | 0;
  _a = xh + 72 | 0;
  $a = xh + 73 | 0;
  ab = xh + 74 | 0;
  bb = xh + 75 | 0;
  cb = xh + 42 | 0;
  db = xh + 43 | 0;
  eb = xh + 108 | 0;
  fb = xh + 109 | 0;
  gb = xh + 92 | 0;
  hb = xh + 76 | 0;
  ib = xh + 112 | 0;
  jb = xh + 113 | 0;
  kb = xh + 114 | 0;
  lb = xh + 115 | 0;
  mb = xh + 116 | 0;
  nb = xh + 117 | 0;
  ob = xh + 118 | 0;
  pb = xh + 119 | 0;
  qb = xh + 120 | 0;
  rb = xh + 121 | 0;
  sb = xh + 122 | 0;
  tb = xh + 123 | 0;
  ub = xh + 124 | 0;
  vb = xh + 125 | 0;
  wb = xh + 126 | 0;
  yb = xh + 127 | 0;
  zb = xh + 128 | 0;
  Ab = xh + 129 | 0;
  Bb = xh + 130 | 0;
  Cb = xh + 131 | 0;
  Db = xh + 132 | 0;
  Eb = xh + 133 | 0;
  Fb = xh + 134 | 0;
  Gb = xh + 135 | 0;
  Hb = xh + 136 | 0;
  Ib = xh + 137 | 0;
  Jb = xh + 138 | 0;
  Kb = xh + 139 | 0;
  Lb = xh + 140 | 0;
  Mb = xh + 141 | 0;
  Nb = xh + 142 | 0;
  Ob = xh + 143 | 0;
  Pb = xh + 110 | 0;
  Qb = xh + 111 | 0;
  Rb = xh + 176 | 0;
  Sb = xh + 177 | 0;
  Tb = xh + 160 | 0;
  Ub = xh + 144 | 0;
  Vb = xh + 180 | 0;
  Wb = xh + 181 | 0;
  Yb = xh + 182 | 0;
  Zb = xh + 183 | 0;
  _b = xh + 184 | 0;
  $b = xh + 185 | 0;
  ac = xh + 186 | 0;
  bc = xh + 187 | 0;
  cc = xh + 188 | 0;
  dc = xh + 189 | 0;
  ec = xh + 190 | 0;
  fc = xh + 191 | 0;
  hc = xh + 192 | 0;
  ic = xh + 193 | 0;
  jc = xh + 194 | 0;
  kc = xh + 195 | 0;
  lc = xh + 196 | 0;
  mc = xh + 197 | 0;
  nc = xh + 198 | 0;
  oc = xh + 199 | 0;
  pc = xh + 200 | 0;
  qc = xh + 201 | 0;
  rc = xh + 202 | 0;
  sc = xh + 203 | 0;
  tc = xh + 204 | 0;
  uc = xh + 205 | 0;
  vc = xh + 206 | 0;
  wc = xh + 207 | 0;
  xc = xh + 208 | 0;
  yc = xh + 209 | 0;
  zc = xh + 210 | 0;
  Ac = xh + 211 | 0;
  Bc = xh + 178 | 0;
  Cc = xh + 179 | 0;
  Dc = xh + 244 | 0;
  Ec = xh + 245 | 0;
  Fc = xh + 228 | 0;
  Gc = xh + 212 | 0;
  Hc = xh + 248 | 0;
  Ic = xh + 249 | 0;
  Jc = xh + 250 | 0;
  Kc = xh + 251 | 0;
  Lc = xh + 252 | 0;
  Mc = xh + 253 | 0;
  Nc = xh + 254 | 0;
  Oc = xh + 255 | 0;
  Pc = xh + 256 | 0;
  Qc = xh + 257 | 0;
  Rc = xh + 258 | 0;
  Sc = xh + 259 | 0;
  Tc = xh + 260 | 0;
  Uc = xh + 261 | 0;
  Vc = xh + 262 | 0;
  Wc = xh + 263 | 0;
  Xc = xh + 264 | 0;
  Yc = xh + 265 | 0;
  Zc = xh + 266 | 0;
  _c = xh + 267 | 0;
  $c = xh + 268 | 0;
  ad = xh + 269 | 0;
  bd = xh + 270 | 0;
  cd = xh + 271 | 0;
  dd = xh + 272 | 0;
  ed = xh + 273 | 0;
  fd = xh + 274 | 0;
  gd = xh + 275 | 0;
  hd = xh + 276 | 0;
  id = xh + 277 | 0;
  jd = xh + 278 | 0;
  kd = xh + 279 | 0;
  ld = xh + 246 | 0;
  md = xh + 247 | 0;
  nd = xh + 312 | 0;
  od = xh + 313 | 0;
  pd = xh + 296 | 0;
  qd = xh + 280 | 0;
  rd = xh + 316 | 0;
  sd = xh + 320 | 0;
  td = xh + 8 | 0;
  ud = xh + 16 | 0;
  vd = xh + 32 | 0;
  wd = xh + 42 | 0;
  xd = xh + 44 | 0;
  yd = xh + 46 | 0;
  zd = xh + 48 | 0;
  Ad = xh + 50 | 0;
  Bd = xh + 52 | 0;
  Cd = xh + 54 | 0;
  Dd = xh + 56 | 0;
  Ed = xh + 58 | 0;
  Fd = xh + 60 | 0;
  Gd = xh + 62 | 0;
  Hd = xh + 64 | 0;
  Id = xh + 66 | 0;
  Jd = xh + 68 | 0;
  Kd = xh + 70 | 0;
  Ld = xh + 72 | 0;
  Md = xh + 74 | 0;
  Nd = xh + 78 | 0;
  Od = xh + 80 | 0;
  Pd = xh + 82 | 0;
  Qd = xh + 84 | 0;
  Rd = xh + 86 | 0;
  Sd = xh + 88 | 0;
  Td = xh + 90 | 0;
  Ud = xh + 94 | 0;
  Vd = xh + 96 | 0;
  Wd = xh + 98 | 0;
  Xd = xh + 100 | 0;
  Yd = xh + 102 | 0;
  Zd = xh + 104 | 0;
  _d = xh + 106 | 0;
  $d = xh + 110 | 0;
  ae = xh + 112 | 0;
  be = xh + 114 | 0;
  ce = xh + 116 | 0;
  de = xh + 118 | 0;
  ee = xh + 120 | 0;
  fe = xh + 122 | 0;
  ge = xh + 124 | 0;
  ie = xh + 126 | 0;
  je = xh + 128 | 0;
  ke = xh + 130 | 0;
  le = xh + 132 | 0;
  me = xh + 134 | 0;
  ne = xh + 136 | 0;
  oe = xh + 138 | 0;
  pe = xh + 140 | 0;
  qe = xh + 142 | 0;
  re = xh + 146 | 0;
  se = xh + 148 | 0;
  te = xh + 150 | 0;
  ve = xh + 152 | 0;
  we = xh + 154 | 0;
  xe = xh + 156 | 0;
  ye = xh + 158 | 0;
  ze = xh + 162 | 0;
  Be = xh + 164 | 0;
  Ce = xh + 166 | 0;
  De = xh + 168 | 0;
  Ee = xh + 170 | 0;
  Fe = xh + 172 | 0;
  Ge = xh + 174 | 0;
  He = xh + 178 | 0;
  Ie = xh + 180 | 0;
  Je = xh + 182 | 0;
  Ke = xh + 184 | 0;
  Me = xh + 186 | 0;
  Ne = xh + 188 | 0;
  Pe = xh + 190 | 0;
  Qe = xh + 192 | 0;
  Re = xh + 194 | 0;
  Se = xh + 196 | 0;
  Te = xh + 198 | 0;
  Ue = xh + 200 | 0;
  Ve = xh + 202 | 0;
  We = xh + 204 | 0;
  Ye = xh + 206 | 0;
  Ze = xh + 208 | 0;
  _e = xh + 210 | 0;
  $e = xh + 214 | 0;
  af = xh + 216 | 0;
  bf = xh + 218 | 0;
  cf = xh + 220 | 0;
  df = xh + 222 | 0;
  ef = xh + 224 | 0;
  ff = xh + 226 | 0;
  hf = xh + 230 | 0;
  jf = xh + 232 | 0;
  lf = xh + 234 | 0;
  nf = xh + 236 | 0;
  of = xh + 238 | 0;
  pf = xh + 240 | 0;
  qf = xh + 242 | 0;
  rf = xh + 246 | 0;
  sf = xh + 248 | 0;
  tf = xh + 250 | 0;
  vf = xh + 252 | 0;
  wf = xh + 254 | 0;
  xf = xh + 256 | 0;
  yf = xh + 258 | 0;
  zf = xh + 260 | 0;
  Af = xh + 262 | 0;
  Bf = xh + 264 | 0;
  Cf = xh + 266 | 0;
  Df = xh + 268 | 0;
  Ef = xh + 270 | 0;
  Gf = xh + 272 | 0;
  Hf = xh + 274 | 0;
  If = xh + 276 | 0;
  Jf = xh + 278 | 0;
  Kf = xh + 282 | 0;
  Lf = xh + 284 | 0;
  Mf = xh + 286 | 0;
  Nf = xh + 288 | 0;
  Of = xh + 290 | 0;
  Pf = xh + 292 | 0;
  Rf = xh + 294 | 0;
  Sf = xh + 298 | 0;
  Tf = xh + 300 | 0;
  Uf = xh + 302 | 0;
  Vf = xh + 304 | 0;
  Wf = xh + 306 | 0;
  Xf = xh + 308 | 0;
  Yf = xh + 310 | 0;
  q = 0;
  d = 0;
  r = f + (h << 3) | 0;
  while (1) {
   a : do switch (e[r + 2 >> 1] | 0) {
   case 0:
    {
     h = c[dh >> 2] | 0;
     f = h + (e[r >> 1] | 0) | 0;
     m = c[eh >> 2] | 0;
     k = r;
     j = c[k >> 2] | 0;
     k = c[k + 4 >> 2] | 0;
     p = m + (f * 776 | 0) | 0;
     if ((j | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) if ((c[m + (f * 776 | 0) + 8 >> 2] | 0) == 3) {
      p = h + (j & 65535) | 0;
      o = m + (p * 776 | 0) | 0;
      if ((j | 0) == (c[o >> 2] | 0) ? (k | 0) == (c[o + 4 >> 2] | 0) : 0) if ((c[m + (p * 776 | 0) + 8 >> 2] | 0) == 3) {
       n = (c[fh >> 2] | 0) + 304 | 0;
       o = n + 128 | 0;
       do {
        c[n >> 2] = 0;
        n = n + 4 | 0;
       } while ((n | 0) < (o | 0));
       j = m + (p * 776 | 0) + 752 | 0;
       if (c[j >> 2] | 0) xb(1, j | 0);
       k = m + (p * 776 | 0) + 768 | 0;
       if (c[k >> 2] | 0) Xa(1, k | 0);
       l = m + (p * 776 | 0) + 772 | 0;
       if (c[l >> 2] | 0) Xa(1, l | 0);
       if (!(a[m + (p * 776 | 0) + 746 >> 0] | 0)) {
        f = m + (p * 776 | 0) + 756 | 0;
        if (c[f >> 2] | 0) gc(1, f | 0);
       }
       f = m + (p * 776 | 0) + 704 | 0;
       n = yh;
       o = n + 44 | 0;
       do {
        c[n >> 2] = 0;
        n = n + 4 | 0;
       } while ((n | 0) < (o | 0));
       c[Le >> 2] = -2;
       c[Xe >> 2] = -1;
       c[gf >> 2] = 20;
       c[uf >> 2] = 20;
       c[Ff >> 2] = -1;
       c[Qf >> 2] = 0;
       c[Zf >> 2] = 0;
       c[_f >> 2] = 0;
       c[$f >> 2] = 1;
       a[ag >> 0] = 0;
       a[bg >> 0] = 0;
       a[cg >> 0] = 0;
       if ((yh | 0) == (f | 0)) f = -2; else {
        c[f >> 2] = 0;
        ue(f, yh);
        f = c[Le >> 2] | 0;
       }
       c[m + (p * 776 | 0) + 708 >> 2] = f;
       f = m + (p * 776 | 0) + 712 | 0;
       c[f >> 2] = c[Xe >> 2];
       c[f + 4 >> 2] = c[Xe + 4 >> 2];
       c[f + 8 >> 2] = c[Xe + 8 >> 2];
       c[f + 12 >> 2] = c[Xe + 12 >> 2];
       c[f + 16 >> 2] = c[Xe + 16 >> 2];
       c[f + 20 >> 2] = c[Xe + 20 >> 2];
       c[f + 24 >> 2] = c[Xe + 24 >> 2];
       c[f + 28 >> 2] = c[Xe + 28 >> 2];
       b[f + 32 >> 1] = b[Xe + 32 >> 1] | 0;
       a[f + 34 >> 0] = a[Xe + 34 >> 0] | 0;
       c[yh >> 2] = 0;
       f = m + (p * 776 | 0) + 16 | 0;
       c[xh >> 2] = 0;
       c[xh + 4 >> 2] = 0;
       c[xh + 8 >> 2] = 0;
       c[xh + 12 >> 2] = 0;
       c[xh + 16 >> 2] = 0;
       c[xh + 20 >> 2] = 0;
       c[eg >> 2] = 1;
       c[fg >> 2] = 0;
       c[gg >> 2] = 20;
       n = hg;
       c[n >> 2] = -1;
       c[n + 4 >> 2] = -1;
       b[ig >> 1] = 21;
       g[jg >> 2] = 0.0;
       g[kg >> 2] = 0.0;
       g[lg >> 2] = 0.0;
       g[mg >> 2] = 1.0;
       g[ng >> 2] = 1.0;
       a[og >> 0] = 0;
       a[pg >> 0] = 3;
       c[wh >> 2] = 0;
       ue(qg, wh);
       c[rg >> 2] = -1;
       n = sg;
       c[n >> 2] = -1;
       c[n + 4 >> 2] = -1;
       Xg(tg | 0, 0, 584) | 0;
       a[ug >> 0] = a[ug >> 0] & -128;
       n = f;
       h = xh;
       o = n + 36 | 0;
       do {
        c[n >> 2] = c[h >> 2];
        n = n + 4 | 0;
        h = h + 4 | 0;
       } while ((n | 0) < (o | 0));
       if ((f | 0) == (xh | 0)) {
        f = m + (p * 776 | 0) + 64 | 0;
        c[f >> 2] = c[vg >> 2];
        c[f + 4 >> 2] = c[vg + 4 >> 2];
        c[f + 8 >> 2] = c[vg + 8 >> 2];
        c[f + 12 >> 2] = c[vg + 12 >> 2];
        c[f + 16 >> 2] = c[vg + 16 >> 2];
        c[f + 20 >> 2] = c[vg + 20 >> 2];
        c[f + 24 >> 2] = c[vg + 24 >> 2];
        f = c[rg >> 2] | 0;
       } else {
        n = hg;
        h = c[n + 4 >> 2] | 0;
        f = m + (p * 776 | 0) + 56 | 0;
        c[f >> 2] = c[n >> 2];
        c[f + 4 >> 2] = h;
        f = m + (p * 776 | 0) + 64 | 0;
        c[f >> 2] = c[vg >> 2];
        c[f + 4 >> 2] = c[vg + 4 >> 2];
        c[f + 8 >> 2] = c[vg + 8 >> 2];
        c[f + 12 >> 2] = c[vg + 12 >> 2];
        c[f + 16 >> 2] = c[vg + 16 >> 2];
        c[f + 20 >> 2] = c[vg + 20 >> 2];
        c[f + 24 >> 2] = c[vg + 24 >> 2];
        f = m + (p * 776 | 0) + 92 | 0;
        c[f >> 2] = 0;
        ue(f, qg);
        f = c[rg >> 2] | 0;
        h = sg;
        n = c[h + 4 >> 2] | 0;
        o = m + (p * 776 | 0) + 104 | 0;
        c[o >> 2] = c[h >> 2];
        c[o + 4 >> 2] = n;
       }
       c[m + (p * 776 | 0) + 96 >> 2] = f;
       n = wg;
       o = c[n + 4 >> 2] | 0;
       f = m + (p * 776 | 0) + 112 | 0;
       c[f >> 2] = c[n >> 2];
       c[f + 4 >> 2] = o;
       f = 0;
       do {
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) >> 2] = c[xh + 104 + (f * 48 | 0) >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 4 >> 2] = c[xh + 104 + (f * 48 | 0) + 4 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 8 >> 2] = c[xh + 104 + (f * 48 | 0) + 8 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 12 >> 2] = c[xh + 104 + (f * 48 | 0) + 12 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 16 >> 2] = c[xh + 104 + (f * 48 | 0) + 16 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 20 >> 2] = c[xh + 104 + (f * 48 | 0) + 20 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 24 >> 2] = c[xh + 104 + (f * 48 | 0) + 24 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 28 >> 2] = c[xh + 104 + (f * 48 | 0) + 28 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 32 >> 2] = c[xh + 104 + (f * 48 | 0) + 32 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 36 >> 2] = c[xh + 104 + (f * 48 | 0) + 36 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 40 >> 2] = c[xh + 104 + (f * 48 | 0) + 40 >> 2];
        c[m + (p * 776 | 0) + 120 + (f * 48 | 0) + 44 >> 2] = c[xh + 104 + (f * 48 | 0) + 44 >> 2];
        f = f + 1 | 0;
       } while ((f | 0) != 6);
       f = 0;
       do {
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) >> 2] = c[xh + 392 + (f * 48 | 0) >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 4 >> 2] = c[xh + 392 + (f * 48 | 0) + 4 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 8 >> 2] = c[xh + 392 + (f * 48 | 0) + 8 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 12 >> 2] = c[xh + 392 + (f * 48 | 0) + 12 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 16 >> 2] = c[xh + 392 + (f * 48 | 0) + 16 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 20 >> 2] = c[xh + 392 + (f * 48 | 0) + 20 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 24 >> 2] = c[xh + 392 + (f * 48 | 0) + 24 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 28 >> 2] = c[xh + 392 + (f * 48 | 0) + 28 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 32 >> 2] = c[xh + 392 + (f * 48 | 0) + 32 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 36 >> 2] = c[xh + 392 + (f * 48 | 0) + 36 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 40 >> 2] = c[xh + 392 + (f * 48 | 0) + 40 >> 2];
        c[m + (p * 776 | 0) + 408 + (f * 48 | 0) + 44 >> 2] = c[xh + 392 + (f * 48 | 0) + 44 >> 2];
        f = f + 1 | 0;
       } while ((f | 0) != 6);
       a[m + (p * 776 | 0) + 696 >> 0] = a[ug >> 0] | 0;
       c[m + (p * 776 | 0) + 748 >> 2] = 0;
       c[j >> 2] = 0;
       c[m + (p * 776 | 0) + 756 >> 2] = 0;
       c[m + (p * 776 | 0) + 760 >> 2] = -1;
       a[m + (p * 776 | 0) + 764 >> 0] = 1;
       a[m + (p * 776 | 0) + 765 >> 0] = 0;
       c[k >> 2] = 0;
       c[l >> 2] = 0;
       k = r;
       n = c[r >> 2] | 0;
       h = c[dh >> 2] | 0;
       m = c[eh >> 2] | 0;
       l = c[k >> 2] | 0;
       k = c[k + 4 >> 2] | 0;
      } else {
       n = j;
       l = j;
      } else {
       n = j;
       l = j;
      }
     } else {
      n = j;
      l = j;
     } else {
      n = j;
      l = j;
     }
     j = n & 65535;
     f = h + j | 0;
     h = m + (f * 776 | 0) | 0;
     p = h;
     if ((l | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) {
      p = h;
      c[p >> 2] = -1;
      c[p + 4 >> 2] = -1;
      c[m + (f * 776 | 0) + 8 >> 2] = 0;
      c[m + (f * 776 | 0) + 12 >> 2] = 0;
      Oe(gh);
      f = c[hh >> 2] | 0;
      c[hh >> 2] = f + 1;
      b[(c[gh >> 2] | 0) + (f << 1) >> 1] = b[r >> 1] | 0;
      f = q;
      break a;
     } else {
      c[zh >> 2] = n >>> 16;
      c[zh + 4 >> 2] = j;
      he(164082, zh);
      f = q;
      break a;
     }
    }
   case 1:
    {
     h = c[ih >> 2] | 0;
     f = h + (e[r >> 1] | 0) | 0;
     m = c[jh >> 2] | 0;
     k = r;
     j = c[k >> 2] | 0;
     k = c[k + 4 >> 2] | 0;
     p = m + (f * 400 | 0) | 0;
     if ((j | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) if ((c[m + (f * 400 | 0) + 8 >> 2] | 0) == 3) {
      l = h + (j & 65535) | 0;
      p = m + (l * 400 | 0) | 0;
      if ((j | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) if ((c[m + (l * 400 | 0) + 8 >> 2] | 0) == 3) {
       mf(c[kh >> 2] | 0);
       k = m + (l * 400 | 0) + 368 | 0;
       f = a[k >> 0] | 0;
       if (f << 24 >> 24) {
        h = 0;
        do {
         p = c[m + (l * 400 | 0) + 372 + (h << 2) >> 2] | 0;
         c[wh >> 2] = p;
         if (p) {
          Xb(1, wh | 0);
          f = a[k >> 0] | 0;
         }
         h = h + 1 | 0;
        } while ((h | 0) < (f & 255 | 0));
       }
       j = m + (l * 400 | 0) + 384 | 0;
       f = a[j >> 0] | 0;
       if (f << 24 >> 24) {
        h = 0;
        do {
         p = c[m + (l * 400 | 0) + 388 + (h << 2) >> 2] | 0;
         c[wh >> 2] = p;
         if (p) {
          Xb(1, wh | 0);
          f = a[j >> 0] | 0;
         }
         h = h + 1 | 0;
        } while ((h | 0) < (f & 255 | 0));
       }
       c[m + (l * 400 | 0) + 364 >> 2] = -1;
       a[k >> 0] = 1;
       a[m + (l * 400 | 0) + 369 >> 0] = 0;
       c[m + (l * 400 | 0) + 372 >> 2] = 0;
       c[m + (l * 400 | 0) + 376 >> 2] = 0;
       c[m + (l * 400 | 0) + 380 >> 2] = -1;
       a[j >> 0] = 1;
       a[m + (l * 400 | 0) + 385 >> 0] = 0;
       c[m + (l * 400 | 0) + 388 >> 2] = 0;
       c[m + (l * 400 | 0) + 392 >> 2] = 0;
       c[m + (l * 400 | 0) + 208 >> 2] = 0;
       f = m + (l * 400 | 0) + 212 | 0;
       a[f >> 0] = 0;
       a[f + 1 >> 0] = 1;
       f = m + (l * 400 | 0) + 214 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 216 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 218 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 220 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 222 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 224 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 226 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 228 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 230 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 232 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 234 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 236 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 238 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 240 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 242 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 244 | 0;
       a[f >> 0] = 17;
       a[f + 1 >> 0] = 13;
       f = m + (l * 400 | 0) + 262 | 0;
       n = m + (l * 400 | 0) + 246 | 0;
       o = n + 16 | 0;
       do {
        a[n >> 0] = 0;
        n = n + 1 | 0;
       } while ((n | 0) < (o | 0));
       h = m + (l * 400 | 0) + 278 | 0;
       n = f;
       o = n + 16 | 0;
       do {
        a[n >> 0] = 255;
        n = n + 1 | 0;
       } while ((n | 0) < (o | 0));
       a[h >> 0] = 0;
       a[h + 1 >> 0] = 0;
       c[m + (l * 400 | 0) + 280 >> 2] = -1;
       c[m + (l * 400 | 0) + 284 >> 2] = 0;
       c[m + (l * 400 | 0) + 288 >> 2] = -1;
       c[m + (l * 400 | 0) + 292 >> 2] = -1;
       n = m + (l * 400 | 0) + 296 | 0;
       o = n + 68 | 0;
       do {
        c[n >> 2] = 0;
        n = n + 4 | 0;
       } while ((n | 0) < (o | 0));
       h = m + (l * 400 | 0) + 16 | 0;
       c[xh >> 2] = -1;
       c[xg >> 2] = -1;
       a[yg >> 0] = 17;
       a[Ag >> 0] = 13;
       a[Bg >> 0] = 17;
       a[Cg >> 0] = 13;
       a[Dg >> 0] = 17;
       a[Eg >> 0] = 13;
       a[Fg >> 0] = 17;
       a[Gg >> 0] = 13;
       a[Hg >> 0] = 17;
       a[Ig >> 0] = 13;
       a[Jg >> 0] = 17;
       a[Kg >> 0] = 13;
       a[Lg >> 0] = 17;
       a[Mg >> 0] = 13;
       a[Ng >> 0] = 17;
       a[Og >> 0] = 13;
       a[Pg >> 0] = 17;
       a[Qg >> 0] = 13;
       a[Rg >> 0] = 17;
       a[Sg >> 0] = 13;
       a[Tg >> 0] = 17;
       a[Ug >> 0] = 13;
       a[Vg >> 0] = 17;
       a[Wg >> 0] = 13;
       a[Yg >> 0] = 17;
       a[Zg >> 0] = 13;
       a[_g >> 0] = 17;
       a[$g >> 0] = 13;
       a[ah >> 0] = 17;
       a[bh >> 0] = 13;
       a[s >> 0] = 17;
       a[t >> 0] = 13;
       a[u >> 0] = 0;
       a[v >> 0] = 1;
       a[w >> 0] = 0;
       a[x >> 0] = 0;
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
       c[A >> 2] = 0;
       c[A + 4 >> 2] = 0;
       c[A + 8 >> 2] = 0;
       a[A + 12 >> 0] = 0;
       c[wh >> 2] = 0;
       ue(B, wh);
       c[C >> 2] = -1;
       n = D;
       c[n >> 2] = -1;
       c[n + 4 >> 2] = -1;
       c[E >> 2] = 0;
       c[F >> 2] = -1;
       n = G;
       o = n + 68 | 0;
       do {
        c[n >> 2] = 0;
        n = n + 4 | 0;
       } while ((n | 0) < (o | 0));
       a[H >> 0] = a[H >> 0] & -16;
       o = xh;
       p = c[o + 4 >> 2] | 0;
       f = h;
       c[f >> 2] = c[o >> 2];
       c[f + 4 >> 2] = p;
       f = m + (l * 400 | 0) + 24 | 0;
       p = c[I >> 2] | 0;
       o = p & 65535;
       a[f >> 0] = o;
       a[f + 1 >> 0] = o >> 8;
       f = m + (l * 400 | 0) + 26 | 0;
       p = p >>> 16 & 65535;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 28 | 0;
       p = b[J >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 30 | 0;
       p = b[K >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 32 | 0;
       p = b[L >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 34 | 0;
       p = b[M >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 36 | 0;
       p = b[N >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 38 | 0;
       p = b[O >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 40 | 0;
       p = b[P >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 42 | 0;
       p = b[Q >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 44 | 0;
       p = b[R >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 46 | 0;
       p = b[S >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 48 | 0;
       p = b[T >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 50 | 0;
       p = b[U >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 52 | 0;
       p = b[V >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 54 | 0;
       p = b[W >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 56 | 0;
       p = b[X >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = b[z >> 1] | 0;
       a[m + (l * 400 | 0) + 58 >> 0] = f;
       a[m + (l * 400 | 0) + 59 >> 0] = (f & 65535) >>> 8;
       f = b[Y >> 1] | 0;
       a[m + (l * 400 | 0) + 60 >> 0] = f;
       a[m + (l * 400 | 0) + 61 >> 0] = (f & 65535) >>> 8;
       f = b[Z >> 1] | 0;
       a[m + (l * 400 | 0) + 62 >> 0] = f;
       a[m + (l * 400 | 0) + 63 >> 0] = (f & 65535) >>> 8;
       f = b[_ >> 1] | 0;
       a[m + (l * 400 | 0) + 64 >> 0] = f;
       a[m + (l * 400 | 0) + 65 >> 0] = (f & 65535) >>> 8;
       f = b[$ >> 1] | 0;
       a[m + (l * 400 | 0) + 66 >> 0] = f;
       a[m + (l * 400 | 0) + 67 >> 0] = (f & 65535) >>> 8;
       f = b[aa >> 1] | 0;
       a[m + (l * 400 | 0) + 68 >> 0] = f;
       a[m + (l * 400 | 0) + 69 >> 0] = (f & 65535) >>> 8;
       f = b[ba >> 1] | 0;
       a[m + (l * 400 | 0) + 70 >> 0] = f;
       a[m + (l * 400 | 0) + 71 >> 0] = (f & 65535) >>> 8;
       f = b[ca >> 1] | 0;
       a[m + (l * 400 | 0) + 72 >> 0] = f;
       a[m + (l * 400 | 0) + 73 >> 0] = (f & 65535) >>> 8;
       f = b[y >> 1] | 0;
       a[m + (l * 400 | 0) + 74 >> 0] = f;
       a[m + (l * 400 | 0) + 75 >> 0] = (f & 65535) >>> 8;
       f = b[da >> 1] | 0;
       a[m + (l * 400 | 0) + 76 >> 0] = f;
       a[m + (l * 400 | 0) + 77 >> 0] = (f & 65535) >>> 8;
       f = b[fa >> 1] | 0;
       a[m + (l * 400 | 0) + 78 >> 0] = f;
       a[m + (l * 400 | 0) + 79 >> 0] = (f & 65535) >>> 8;
       f = b[ga >> 1] | 0;
       a[m + (l * 400 | 0) + 80 >> 0] = f;
       a[m + (l * 400 | 0) + 81 >> 0] = (f & 65535) >>> 8;
       f = b[ha >> 1] | 0;
       a[m + (l * 400 | 0) + 82 >> 0] = f;
       a[m + (l * 400 | 0) + 83 >> 0] = (f & 65535) >>> 8;
       f = b[ia >> 1] | 0;
       a[m + (l * 400 | 0) + 84 >> 0] = f;
       a[m + (l * 400 | 0) + 85 >> 0] = (f & 65535) >>> 8;
       f = b[ja >> 1] | 0;
       a[m + (l * 400 | 0) + 86 >> 0] = f;
       a[m + (l * 400 | 0) + 87 >> 0] = (f & 65535) >>> 8;
       f = b[ka >> 1] | 0;
       a[m + (l * 400 | 0) + 88 >> 0] = f;
       a[m + (l * 400 | 0) + 89 >> 0] = (f & 65535) >>> 8;
       f = m + (l * 400 | 0) + 90 | 0;
       p = b[w >> 1] | 0;
       a[f >> 0] = p;
       a[f + 1 >> 0] = p >> 8;
       f = m + (l * 400 | 0) + 92 | 0;
       c[f >> 2] = c[A >> 2];
       c[f + 4 >> 2] = c[A + 4 >> 2];
       c[f + 8 >> 2] = c[A + 8 >> 2];
       a[f + 12 >> 0] = a[A + 12 >> 0] | 0;
       f = m + (l * 400 | 0) + 108 | 0;
       if ((xh | 0) == (h | 0)) f = c[C >> 2] | 0; else {
        c[f >> 2] = 0;
        ue(f, B);
        f = c[C >> 2] | 0;
        n = D;
        o = c[n + 4 >> 2] | 0;
        p = m + (l * 400 | 0) + 120 | 0;
        c[p >> 2] = c[n >> 2];
        c[p + 4 >> 2] = o;
       }
       c[m + (l * 400 | 0) + 112 >> 2] = f;
       f = m + (l * 400 | 0) + 128 | 0;
       n = f;
       h = E;
       o = n + 76 | 0;
       do {
        c[n >> 2] = c[h >> 2];
        n = n + 4 | 0;
        h = h + 4 | 0;
       } while ((n | 0) < (o | 0));
       a[f + 76 >> 0] = a[E + 76 >> 0] | 0;
       k = r;
       n = c[r >> 2] | 0;
       h = c[ih >> 2] | 0;
       m = c[jh >> 2] | 0;
       l = c[k >> 2] | 0;
       k = c[k + 4 >> 2] | 0;
      } else {
       n = j;
       l = j;
      } else {
       n = j;
       l = j;
      }
     } else {
      n = j;
      l = j;
     } else {
      n = j;
      l = j;
     }
     j = n & 65535;
     f = h + j | 0;
     h = m + (f * 400 | 0) | 0;
     p = h;
     if ((l | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) {
      p = h;
      c[p >> 2] = -1;
      c[p + 4 >> 2] = -1;
      c[m + (f * 400 | 0) + 8 >> 2] = 0;
      c[m + (f * 400 | 0) + 12 >> 2] = 0;
      Oe(lh);
      f = c[mh >> 2] | 0;
      c[mh >> 2] = f + 1;
      b[(c[lh >> 2] | 0) + (f << 1) >> 1] = b[r >> 1] | 0;
      f = q;
      break a;
     } else {
      c[Bh >> 2] = n >>> 16;
      c[Bh + 4 >> 2] = j;
      he(164082, Bh);
      f = q;
      break a;
     }
    }
   case 2:
    {
     h = c[nh >> 2] | 0;
     f = h + (e[r >> 1] | 0) | 0;
     m = c[oh >> 2] | 0;
     k = r;
     n = c[k >> 2] | 0;
     k = c[k + 4 >> 2] | 0;
     p = m + (f * 3712 | 0) | 0;
     if ((n | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) if ((c[m + (f * 3712 | 0) + 8 >> 2] | 0) == 3) {
      j = h + (n & 65535) | 0;
      l = m + (j * 3712 | 0) | 0;
      p = l;
      if ((n | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) if ((c[m + (j * 3712 | 0) + 8 >> 2] | 0) == 3) {
       f = c[ph >> 2] | 0;
       ea(0);
       c[f + 300 >> 2] = 0;
       f = m + (j * 3712 | 0) + 3064 | 0;
       h = c[f >> 2] | 0;
       if (h | 0) la(h | 0);
       c[f >> 2] = 0;
       Xg(m + (j * 3712 | 0) + 3068 | 0, -1, 640) | 0;
       kf(l);
       k = r;
       o = c[r >> 2] | 0;
       h = c[nh >> 2] | 0;
       m = c[oh >> 2] | 0;
       l = c[k >> 2] | 0;
       k = c[k + 4 >> 2] | 0;
      } else {
       o = n;
       l = n;
      } else {
       o = n;
       l = n;
      }
     } else {
      o = n;
      l = n;
     } else {
      o = n;
      l = n;
     }
     j = o & 65535;
     f = h + j | 0;
     h = m + (f * 3712 | 0) | 0;
     p = h;
     if ((l | 0) == (c[p >> 2] | 0) ? (k | 0) == (c[p + 4 >> 2] | 0) : 0) {
      p = h;
      c[p >> 2] = -1;
      c[p + 4 >> 2] = -1;
      c[m + (f * 3712 | 0) + 8 >> 2] = 0;
      c[m + (f * 3712 | 0) + 12 >> 2] = 0;
      Oe(qh);
      f = c[rh >> 2] | 0;
      c[rh >> 2] = f + 1;
      b[(c[qh >> 2] | 0) + (f << 1) >> 1] = b[r >> 1] | 0;
      f = q;
      break a;
     } else {
      c[Ch >> 2] = o >>> 16;
      c[Ch + 4 >> 2] = j;
      he(164082, Ch);
      f = q;
      break a;
     }
    }
   case 3:
    {
     h = c[sh >> 2] | 0;
     f = h + (e[r >> 1] | 0) | 0;
     m = c[th >> 2] | 0;
     l = r;
     k = c[l >> 2] | 0;
     l = c[l + 4 >> 2] | 0;
     p = m + (f * 608 | 0) | 0;
     if ((k | 0) == (c[p >> 2] | 0) ? (l | 0) == (c[p + 4 >> 2] | 0) : 0) if ((c[m + (f * 608 | 0) + 8 >> 2] | 0) == 3) {
      j = h + (k & 65535) | 0;
      p = m + (j * 608 | 0) | 0;
      if ((k | 0) == (c[p >> 2] | 0) ? (l | 0) == (c[p + 4 >> 2] | 0) : 0) if ((c[m + (j * 608 | 0) + 8 >> 2] | 0) == 3) {
       mf(c[uh >> 2] | 0);
       f = q & -16777216;
       d = m + (j * 608 | 0) + 348 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 356 >> 2] = 0;
       c[m + (j * 608 | 0) + 360 >> 2] = 0;
       d = m + (j * 608 | 0) + 364 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 372 >> 2] = 0;
       c[m + (j * 608 | 0) + 376 >> 2] = 0;
       d = m + (j * 608 | 0) + 380 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 388 >> 2] = 0;
       c[m + (j * 608 | 0) + 392 >> 2] = 0;
       d = m + (j * 608 | 0) + 396 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 404 >> 2] = 0;
       c[m + (j * 608 | 0) + 408 >> 2] = 0;
       d = m + (j * 608 | 0) + 412 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 420 >> 2] = 0;
       c[m + (j * 608 | 0) + 424 >> 2] = 0;
       d = m + (j * 608 | 0) + 428 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 436 >> 2] = 0;
       c[m + (j * 608 | 0) + 440 >> 2] = 0;
       d = m + (j * 608 | 0) + 444 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 452 >> 2] = 0;
       c[m + (j * 608 | 0) + 456 >> 2] = 0;
       d = m + (j * 608 | 0) + 460 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 468 >> 2] = 0;
       c[m + (j * 608 | 0) + 472 >> 2] = 0;
       d = m + (j * 608 | 0) + 476 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 484 >> 2] = 0;
       c[m + (j * 608 | 0) + 488 >> 2] = 0;
       d = m + (j * 608 | 0) + 492 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 500 >> 2] = 0;
       c[m + (j * 608 | 0) + 504 >> 2] = 0;
       d = m + (j * 608 | 0) + 508 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 516 >> 2] = 0;
       c[m + (j * 608 | 0) + 520 >> 2] = 0;
       d = m + (j * 608 | 0) + 524 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 532 >> 2] = 0;
       c[m + (j * 608 | 0) + 536 >> 2] = 0;
       d = m + (j * 608 | 0) + 540 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 548 >> 2] = 0;
       c[m + (j * 608 | 0) + 552 >> 2] = 0;
       d = m + (j * 608 | 0) + 556 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 564 >> 2] = 0;
       c[m + (j * 608 | 0) + 568 >> 2] = 0;
       d = m + (j * 608 | 0) + 572 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 580 >> 2] = 0;
       c[m + (j * 608 | 0) + 584 >> 2] = 0;
       d = m + (j * 608 | 0) + 588 | 0;
       c[d >> 2] = 0;
       c[d + 4 >> 2] = f;
       c[m + (j * 608 | 0) + 596 >> 2] = 0;
       c[m + (j * 608 | 0) + 600 >> 2] = 0;
       c[m + (j * 608 | 0) + 604 >> 2] = 0;
       c[m + (j * 608 | 0) + 344 >> 2] = 0;
       d = m + (j * 608 | 0) + 16 | 0;
       c[wh >> 2] = 0;
       ue(xh, wh);
       c[ma >> 2] = -1;
       h = na;
       c[h >> 2] = 0;
       c[h + 4 >> 2] = 0;
       c[na >> 2] = 2013282306;
       b[na + 4 >> 1] = 192;
       g[oa >> 2] = 1.0;
       g[pa >> 2] = 1.0;
       g[qa >> 2] = 1.0;
       g[ra >> 2] = 1.0;
       b[sa >> 1] = 28672;
       b[ta >> 1] = 28672;
       c[ua >> 2] = 0;
       b[ua >> 1] = 32647;
       b[va >> 1] = 255;
       b[wa >> 1] = 296;
       a[xa >> 0] = 17;
       a[ya >> 0] = 13;
       a[za >> 0] = 17;
       a[Aa >> 0] = 13;
       a[Ba >> 0] = 17;
       a[Ca >> 0] = 13;
       a[Da >> 0] = 17;
       a[Ea >> 0] = 13;
       a[Fa >> 0] = 17;
       a[Ga >> 0] = 13;
       a[Ha >> 0] = 17;
       a[Ia >> 0] = 13;
       a[Ja >> 0] = 17;
       a[Ka >> 0] = 13;
       a[La >> 0] = 17;
       a[Ma >> 0] = 13;
       a[Na >> 0] = 17;
       a[Oa >> 0] = 13;
       a[Pa >> 0] = 17;
       a[Qa >> 0] = 13;
       a[Ra >> 0] = 17;
       a[Sa >> 0] = 13;
       a[Ta >> 0] = 17;
       a[Ua >> 0] = 13;
       a[Va >> 0] = 17;
       a[Wa >> 0] = 13;
       a[Ya >> 0] = 17;
       a[Za >> 0] = 13;
       a[_a >> 0] = 17;
       a[$a >> 0] = 13;
       a[ab >> 0] = 17;
       a[bb >> 0] = 13;
       a[cb >> 0] = 0;
       a[db >> 0] = 1;
       a[eb >> 0] = 0;
       a[fb >> 0] = 0;
       b[gb >> 1] = 65535;
       b[gb + 2 >> 1] = 65535;
       b[gb + 4 >> 1] = 65535;
       b[gb + 6 >> 1] = 65535;
       b[gb + 8 >> 1] = 65535;
       b[gb + 10 >> 1] = 65535;
       b[gb + 12 >> 1] = 65535;
       b[gb + 14 >> 1] = 65535;
       b[hb >> 1] = 0;
       b[hb + 2 >> 1] = 0;
       b[hb + 4 >> 1] = 0;
       b[hb + 6 >> 1] = 0;
       b[hb + 8 >> 1] = 0;
       b[hb + 10 >> 1] = 0;
       b[hb + 12 >> 1] = 0;
       b[hb + 14 >> 1] = 0;
       a[ib >> 0] = 17;
       a[jb >> 0] = 13;
       a[kb >> 0] = 17;
       a[lb >> 0] = 13;
       a[mb >> 0] = 17;
       a[nb >> 0] = 13;
       a[ob >> 0] = 17;
       a[pb >> 0] = 13;
       a[qb >> 0] = 17;
       a[rb >> 0] = 13;
       a[sb >> 0] = 17;
       a[tb >> 0] = 13;
       a[ub >> 0] = 17;
       a[vb >> 0] = 13;
       a[wb >> 0] = 17;
       a[yb >> 0] = 13;
       a[zb >> 0] = 17;
       a[Ab >> 0] = 13;
       a[Bb >> 0] = 17;
       a[Cb >> 0] = 13;
       a[Db >> 0] = 17;
       a[Eb >> 0] = 13;
       a[Fb >> 0] = 17;
       a[Gb >> 0] = 13;
       a[Hb >> 0] = 17;
       a[Ib >> 0] = 13;
       a[Jb >> 0] = 17;
       a[Kb >> 0] = 13;
       a[Lb >> 0] = 17;
       a[Mb >> 0] = 13;
       a[Nb >> 0] = 17;
       a[Ob >> 0] = 13;
       a[Pb >> 0] = 0;
       a[Qb >> 0] = 1;
       a[Rb >> 0] = 0;
       a[Sb >> 0] = 0;
       b[Tb >> 1] = 65535;
       b[Tb + 2 >> 1] = 65535;
       b[Tb + 4 >> 1] = 65535;
       b[Tb + 6 >> 1] = 65535;
       b[Tb + 8 >> 1] = 65535;
       b[Tb + 10 >> 1] = 65535;
       b[Tb + 12 >> 1] = 65535;
       b[Tb + 14 >> 1] = 65535;
       b[Ub >> 1] = 0;
       b[Ub + 2 >> 1] = 0;
       b[Ub + 4 >> 1] = 0;
       b[Ub + 6 >> 1] = 0;
       b[Ub + 8 >> 1] = 0;
       b[Ub + 10 >> 1] = 0;
       b[Ub + 12 >> 1] = 0;
       b[Ub + 14 >> 1] = 0;
       a[Vb >> 0] = 17;
       a[Wb >> 0] = 13;
       a[Yb >> 0] = 17;
       a[Zb >> 0] = 13;
       a[_b >> 0] = 17;
       a[$b >> 0] = 13;
       a[ac >> 0] = 17;
       a[bc >> 0] = 13;
       a[cc >> 0] = 17;
       a[dc >> 0] = 13;
       a[ec >> 0] = 17;
       a[fc >> 0] = 13;
       a[hc >> 0] = 17;
       a[ic >> 0] = 13;
       a[jc >> 0] = 17;
       a[kc >> 0] = 13;
       a[lc >> 0] = 17;
       a[mc >> 0] = 13;
       a[nc >> 0] = 17;
       a[oc >> 0] = 13;
       a[pc >> 0] = 17;
       a[qc >> 0] = 13;
       a[rc >> 0] = 17;
       a[sc >> 0] = 13;
       a[tc >> 0] = 17;
       a[uc >> 0] = 13;
       a[vc >> 0] = 17;
       a[wc >> 0] = 13;
       a[xc >> 0] = 17;
       a[yc >> 0] = 13;
       a[zc >> 0] = 17;
       a[Ac >> 0] = 13;
       a[Bc >> 0] = 0;
       a[Cc >> 0] = 1;
       a[Dc >> 0] = 0;
       a[Ec >> 0] = 0;
       b[Fc >> 1] = 65535;
       b[Fc + 2 >> 1] = 65535;
       b[Fc + 4 >> 1] = 65535;
       b[Fc + 6 >> 1] = 65535;
       b[Fc + 8 >> 1] = 65535;
       b[Fc + 10 >> 1] = 65535;
       b[Fc + 12 >> 1] = 65535;
       b[Fc + 14 >> 1] = 65535;
       b[Gc >> 1] = 0;
       b[Gc + 2 >> 1] = 0;
       b[Gc + 4 >> 1] = 0;
       b[Gc + 6 >> 1] = 0;
       b[Gc + 8 >> 1] = 0;
       b[Gc + 10 >> 1] = 0;
       b[Gc + 12 >> 1] = 0;
       b[Gc + 14 >> 1] = 0;
       a[Hc >> 0] = 17;
       a[Ic >> 0] = 13;
       a[Jc >> 0] = 17;
       a[Kc >> 0] = 13;
       a[Lc >> 0] = 17;
       a[Mc >> 0] = 13;
       a[Nc >> 0] = 17;
       a[Oc >> 0] = 13;
       a[Pc >> 0] = 17;
       a[Qc >> 0] = 13;
       a[Rc >> 0] = 17;
       a[Sc >> 0] = 13;
       a[Tc >> 0] = 17;
       a[Uc >> 0] = 13;
       a[Vc >> 0] = 17;
       a[Wc >> 0] = 13;
       a[Xc >> 0] = 17;
       a[Yc >> 0] = 13;
       a[Zc >> 0] = 17;
       a[_c >> 0] = 13;
       a[$c >> 0] = 17;
       a[ad >> 0] = 13;
       a[bd >> 0] = 17;
       a[cd >> 0] = 13;
       a[dd >> 0] = 17;
       a[ed >> 0] = 13;
       a[fd >> 0] = 17;
       a[gd >> 0] = 13;
       a[hd >> 0] = 17;
       a[id >> 0] = 13;
       a[jd >> 0] = 17;
       a[kd >> 0] = 13;
       a[ld >> 0] = 0;
       a[md >> 0] = 1;
       a[nd >> 0] = 0;
       a[od >> 0] = 0;
       b[pd >> 1] = 65535;
       b[pd + 2 >> 1] = 65535;
       b[pd + 4 >> 1] = 65535;
       b[pd + 6 >> 1] = 65535;
       b[pd + 8 >> 1] = 65535;
       b[pd + 10 >> 1] = 65535;
       b[pd + 12 >> 1] = 65535;
       b[pd + 14 >> 1] = 65535;
       b[qd >> 1] = 0;
       b[qd + 2 >> 1] = 0;
       b[qd + 4 >> 1] = 0;
       b[qd + 6 >> 1] = 0;
       b[qd + 8 >> 1] = 0;
       b[qd + 10 >> 1] = 0;
       b[qd + 12 >> 1] = 0;
       b[qd + 14 >> 1] = 0;
       c[rd >> 2] = 3;
       h = sd;
       c[h >> 2] = -1;
       c[h + 4 >> 2] = -1;
       h = (xh | 0) == (d | 0);
       if (!h) {
        c[d >> 2] = 0;
        ue(d, xh);
       }
       c[m + (j * 608 | 0) + 20 >> 2] = c[ma >> 2];
       o = td;
       p = c[o + 4 >> 2] | 0;
       q = m + (j * 608 | 0) + 24 | 0;
       c[q >> 2] = c[o >> 2];
       c[q + 4 >> 2] = p;
       q = m + (j * 608 | 0) + 32 | 0;
       c[q >> 2] = c[ud >> 2];
       c[q + 4 >> 2] = c[ud + 4 >> 2];
       c[q + 8 >> 2] = c[ud + 8 >> 2];
       c[q + 12 >> 2] = c[ud + 12 >> 2];
       q = m + (j * 608 | 0) + 48 | 0;
       c[q >> 2] = c[vd >> 2];
       c[q + 4 >> 2] = c[vd + 4 >> 2];
       b[q + 8 >> 1] = b[vd + 8 >> 1] | 0;
       q = m + (j * 608 | 0) + 58 | 0;
       p = b[wd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 60 | 0;
       p = b[xd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 62 | 0;
       p = b[yd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 64 | 0;
       p = b[zd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 66 | 0;
       p = b[Ad >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 68 | 0;
       p = b[Bd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 70 | 0;
       p = b[Cd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 72 | 0;
       p = b[Dd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 74 | 0;
       p = b[Ed >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 76 | 0;
       p = b[Fd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 78 | 0;
       p = b[Gd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 80 | 0;
       p = b[Hd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 82 | 0;
       p = b[Id >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 84 | 0;
       p = b[Jd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 86 | 0;
       p = b[Kd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 88 | 0;
       p = b[Ld >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 90 | 0;
       p = b[Md >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = b[hb >> 1] | 0;
       a[m + (j * 608 | 0) + 92 >> 0] = q;
       a[m + (j * 608 | 0) + 93 >> 0] = (q & 65535) >>> 8;
       q = b[Nd >> 1] | 0;
       a[m + (j * 608 | 0) + 94 >> 0] = q;
       a[m + (j * 608 | 0) + 95 >> 0] = (q & 65535) >>> 8;
       q = b[Od >> 1] | 0;
       a[m + (j * 608 | 0) + 96 >> 0] = q;
       a[m + (j * 608 | 0) + 97 >> 0] = (q & 65535) >>> 8;
       q = b[Pd >> 1] | 0;
       a[m + (j * 608 | 0) + 98 >> 0] = q;
       a[m + (j * 608 | 0) + 99 >> 0] = (q & 65535) >>> 8;
       q = b[Qd >> 1] | 0;
       a[m + (j * 608 | 0) + 100 >> 0] = q;
       a[m + (j * 608 | 0) + 101 >> 0] = (q & 65535) >>> 8;
       q = b[Rd >> 1] | 0;
       a[m + (j * 608 | 0) + 102 >> 0] = q;
       a[m + (j * 608 | 0) + 103 >> 0] = (q & 65535) >>> 8;
       q = b[Sd >> 1] | 0;
       a[m + (j * 608 | 0) + 104 >> 0] = q;
       a[m + (j * 608 | 0) + 105 >> 0] = (q & 65535) >>> 8;
       q = b[Td >> 1] | 0;
       a[m + (j * 608 | 0) + 106 >> 0] = q;
       a[m + (j * 608 | 0) + 107 >> 0] = (q & 65535) >>> 8;
       q = b[gb >> 1] | 0;
       a[m + (j * 608 | 0) + 108 >> 0] = q;
       a[m + (j * 608 | 0) + 109 >> 0] = (q & 65535) >>> 8;
       q = b[Ud >> 1] | 0;
       a[m + (j * 608 | 0) + 110 >> 0] = q;
       a[m + (j * 608 | 0) + 111 >> 0] = (q & 65535) >>> 8;
       q = b[Vd >> 1] | 0;
       a[m + (j * 608 | 0) + 112 >> 0] = q;
       a[m + (j * 608 | 0) + 113 >> 0] = (q & 65535) >>> 8;
       q = b[Wd >> 1] | 0;
       a[m + (j * 608 | 0) + 114 >> 0] = q;
       a[m + (j * 608 | 0) + 115 >> 0] = (q & 65535) >>> 8;
       q = b[Xd >> 1] | 0;
       a[m + (j * 608 | 0) + 116 >> 0] = q;
       a[m + (j * 608 | 0) + 117 >> 0] = (q & 65535) >>> 8;
       q = b[Yd >> 1] | 0;
       a[m + (j * 608 | 0) + 118 >> 0] = q;
       a[m + (j * 608 | 0) + 119 >> 0] = (q & 65535) >>> 8;
       q = b[Zd >> 1] | 0;
       a[m + (j * 608 | 0) + 120 >> 0] = q;
       a[m + (j * 608 | 0) + 121 >> 0] = (q & 65535) >>> 8;
       q = b[_d >> 1] | 0;
       a[m + (j * 608 | 0) + 122 >> 0] = q;
       a[m + (j * 608 | 0) + 123 >> 0] = (q & 65535) >>> 8;
       q = m + (j * 608 | 0) + 124 | 0;
       p = b[eb >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 126 | 0;
       p = b[$d >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 128 | 0;
       p = b[ae >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 130 | 0;
       p = b[be >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 132 | 0;
       p = b[ce >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 134 | 0;
       p = b[de >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 136 | 0;
       p = b[ee >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 138 | 0;
       p = b[fe >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 140 | 0;
       p = b[ge >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 142 | 0;
       p = b[ie >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 144 | 0;
       p = b[je >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 146 | 0;
       p = b[ke >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 148 | 0;
       p = b[le >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 150 | 0;
       p = b[me >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 152 | 0;
       p = b[ne >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 154 | 0;
       p = b[oe >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 156 | 0;
       p = b[pe >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 158 | 0;
       p = b[qe >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = b[Ub >> 1] | 0;
       a[m + (j * 608 | 0) + 160 >> 0] = q;
       a[m + (j * 608 | 0) + 161 >> 0] = (q & 65535) >>> 8;
       q = b[re >> 1] | 0;
       a[m + (j * 608 | 0) + 162 >> 0] = q;
       a[m + (j * 608 | 0) + 163 >> 0] = (q & 65535) >>> 8;
       q = b[se >> 1] | 0;
       a[m + (j * 608 | 0) + 164 >> 0] = q;
       a[m + (j * 608 | 0) + 165 >> 0] = (q & 65535) >>> 8;
       q = b[te >> 1] | 0;
       a[m + (j * 608 | 0) + 166 >> 0] = q;
       a[m + (j * 608 | 0) + 167 >> 0] = (q & 65535) >>> 8;
       q = b[ve >> 1] | 0;
       a[m + (j * 608 | 0) + 168 >> 0] = q;
       a[m + (j * 608 | 0) + 169 >> 0] = (q & 65535) >>> 8;
       q = b[we >> 1] | 0;
       a[m + (j * 608 | 0) + 170 >> 0] = q;
       a[m + (j * 608 | 0) + 171 >> 0] = (q & 65535) >>> 8;
       q = b[xe >> 1] | 0;
       a[m + (j * 608 | 0) + 172 >> 0] = q;
       a[m + (j * 608 | 0) + 173 >> 0] = (q & 65535) >>> 8;
       q = b[ye >> 1] | 0;
       a[m + (j * 608 | 0) + 174 >> 0] = q;
       a[m + (j * 608 | 0) + 175 >> 0] = (q & 65535) >>> 8;
       q = b[Tb >> 1] | 0;
       a[m + (j * 608 | 0) + 176 >> 0] = q;
       a[m + (j * 608 | 0) + 177 >> 0] = (q & 65535) >>> 8;
       q = b[ze >> 1] | 0;
       a[m + (j * 608 | 0) + 178 >> 0] = q;
       a[m + (j * 608 | 0) + 179 >> 0] = (q & 65535) >>> 8;
       q = b[Be >> 1] | 0;
       a[m + (j * 608 | 0) + 180 >> 0] = q;
       a[m + (j * 608 | 0) + 181 >> 0] = (q & 65535) >>> 8;
       q = b[Ce >> 1] | 0;
       a[m + (j * 608 | 0) + 182 >> 0] = q;
       a[m + (j * 608 | 0) + 183 >> 0] = (q & 65535) >>> 8;
       q = b[De >> 1] | 0;
       a[m + (j * 608 | 0) + 184 >> 0] = q;
       a[m + (j * 608 | 0) + 185 >> 0] = (q & 65535) >>> 8;
       q = b[Ee >> 1] | 0;
       a[m + (j * 608 | 0) + 186 >> 0] = q;
       a[m + (j * 608 | 0) + 187 >> 0] = (q & 65535) >>> 8;
       q = b[Fe >> 1] | 0;
       a[m + (j * 608 | 0) + 188 >> 0] = q;
       a[m + (j * 608 | 0) + 189 >> 0] = (q & 65535) >>> 8;
       q = b[Ge >> 1] | 0;
       a[m + (j * 608 | 0) + 190 >> 0] = q;
       a[m + (j * 608 | 0) + 191 >> 0] = (q & 65535) >>> 8;
       q = m + (j * 608 | 0) + 192 | 0;
       p = b[Rb >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 194 | 0;
       p = b[He >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 196 | 0;
       p = b[Ie >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 198 | 0;
       p = b[Je >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 200 | 0;
       p = b[Ke >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 202 | 0;
       p = b[Me >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 204 | 0;
       p = b[Ne >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 206 | 0;
       p = b[Pe >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 208 | 0;
       p = b[Qe >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 210 | 0;
       p = b[Re >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 212 | 0;
       p = b[Se >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 214 | 0;
       p = b[Te >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 216 | 0;
       p = b[Ue >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 218 | 0;
       p = b[Ve >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 220 | 0;
       p = b[We >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 222 | 0;
       p = b[Ye >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 224 | 0;
       p = b[Ze >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 226 | 0;
       p = b[_e >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = b[Gc >> 1] | 0;
       a[m + (j * 608 | 0) + 228 >> 0] = q;
       a[m + (j * 608 | 0) + 229 >> 0] = (q & 65535) >>> 8;
       q = b[$e >> 1] | 0;
       a[m + (j * 608 | 0) + 230 >> 0] = q;
       a[m + (j * 608 | 0) + 231 >> 0] = (q & 65535) >>> 8;
       q = b[af >> 1] | 0;
       a[m + (j * 608 | 0) + 232 >> 0] = q;
       a[m + (j * 608 | 0) + 233 >> 0] = (q & 65535) >>> 8;
       q = b[bf >> 1] | 0;
       a[m + (j * 608 | 0) + 234 >> 0] = q;
       a[m + (j * 608 | 0) + 235 >> 0] = (q & 65535) >>> 8;
       q = b[cf >> 1] | 0;
       a[m + (j * 608 | 0) + 236 >> 0] = q;
       a[m + (j * 608 | 0) + 237 >> 0] = (q & 65535) >>> 8;
       q = b[df >> 1] | 0;
       a[m + (j * 608 | 0) + 238 >> 0] = q;
       a[m + (j * 608 | 0) + 239 >> 0] = (q & 65535) >>> 8;
       q = b[ef >> 1] | 0;
       a[m + (j * 608 | 0) + 240 >> 0] = q;
       a[m + (j * 608 | 0) + 241 >> 0] = (q & 65535) >>> 8;
       q = b[ff >> 1] | 0;
       a[m + (j * 608 | 0) + 242 >> 0] = q;
       a[m + (j * 608 | 0) + 243 >> 0] = (q & 65535) >>> 8;
       q = b[Fc >> 1] | 0;
       a[m + (j * 608 | 0) + 244 >> 0] = q;
       a[m + (j * 608 | 0) + 245 >> 0] = (q & 65535) >>> 8;
       q = b[hf >> 1] | 0;
       a[m + (j * 608 | 0) + 246 >> 0] = q;
       a[m + (j * 608 | 0) + 247 >> 0] = (q & 65535) >>> 8;
       q = b[jf >> 1] | 0;
       a[m + (j * 608 | 0) + 248 >> 0] = q;
       a[m + (j * 608 | 0) + 249 >> 0] = (q & 65535) >>> 8;
       q = b[lf >> 1] | 0;
       a[m + (j * 608 | 0) + 250 >> 0] = q;
       a[m + (j * 608 | 0) + 251 >> 0] = (q & 65535) >>> 8;
       q = b[nf >> 1] | 0;
       a[m + (j * 608 | 0) + 252 >> 0] = q;
       a[m + (j * 608 | 0) + 253 >> 0] = (q & 65535) >>> 8;
       q = b[of >> 1] | 0;
       a[m + (j * 608 | 0) + 254 >> 0] = q;
       a[m + (j * 608 | 0) + 255 >> 0] = (q & 65535) >>> 8;
       q = b[pf >> 1] | 0;
       a[m + (j * 608 | 0) + 256 >> 0] = q;
       a[m + (j * 608 | 0) + 257 >> 0] = (q & 65535) >>> 8;
       q = b[qf >> 1] | 0;
       a[m + (j * 608 | 0) + 258 >> 0] = q;
       a[m + (j * 608 | 0) + 259 >> 0] = (q & 65535) >>> 8;
       q = m + (j * 608 | 0) + 260 | 0;
       p = b[Dc >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 262 | 0;
       p = b[rf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 264 | 0;
       p = b[sf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 266 | 0;
       p = b[tf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 268 | 0;
       p = b[vf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 270 | 0;
       p = b[wf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 272 | 0;
       p = b[xf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 274 | 0;
       p = b[yf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 276 | 0;
       p = b[zf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 278 | 0;
       p = b[Af >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 280 | 0;
       p = b[Bf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 282 | 0;
       p = b[Cf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 284 | 0;
       p = b[Df >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 286 | 0;
       p = b[Ef >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 288 | 0;
       p = b[Gf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 290 | 0;
       p = b[Hf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 292 | 0;
       p = b[If >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = m + (j * 608 | 0) + 294 | 0;
       p = b[Jf >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       q = b[qd >> 1] | 0;
       a[m + (j * 608 | 0) + 296 >> 0] = q;
       a[m + (j * 608 | 0) + 297 >> 0] = (q & 65535) >>> 8;
       q = b[Kf >> 1] | 0;
       a[m + (j * 608 | 0) + 298 >> 0] = q;
       a[m + (j * 608 | 0) + 299 >> 0] = (q & 65535) >>> 8;
       q = b[Lf >> 1] | 0;
       a[m + (j * 608 | 0) + 300 >> 0] = q;
       a[m + (j * 608 | 0) + 301 >> 0] = (q & 65535) >>> 8;
       q = b[Mf >> 1] | 0;
       a[m + (j * 608 | 0) + 302 >> 0] = q;
       a[m + (j * 608 | 0) + 303 >> 0] = (q & 65535) >>> 8;
       q = b[Nf >> 1] | 0;
       a[m + (j * 608 | 0) + 304 >> 0] = q;
       a[m + (j * 608 | 0) + 305 >> 0] = (q & 65535) >>> 8;
       q = b[Of >> 1] | 0;
       a[m + (j * 608 | 0) + 306 >> 0] = q;
       a[m + (j * 608 | 0) + 307 >> 0] = (q & 65535) >>> 8;
       q = b[Pf >> 1] | 0;
       a[m + (j * 608 | 0) + 308 >> 0] = q;
       a[m + (j * 608 | 0) + 309 >> 0] = (q & 65535) >>> 8;
       q = b[Rf >> 1] | 0;
       a[m + (j * 608 | 0) + 310 >> 0] = q;
       a[m + (j * 608 | 0) + 311 >> 0] = (q & 65535) >>> 8;
       q = b[pd >> 1] | 0;
       a[m + (j * 608 | 0) + 312 >> 0] = q;
       a[m + (j * 608 | 0) + 313 >> 0] = (q & 65535) >>> 8;
       q = b[Sf >> 1] | 0;
       a[m + (j * 608 | 0) + 314 >> 0] = q;
       a[m + (j * 608 | 0) + 315 >> 0] = (q & 65535) >>> 8;
       q = b[Tf >> 1] | 0;
       a[m + (j * 608 | 0) + 316 >> 0] = q;
       a[m + (j * 608 | 0) + 317 >> 0] = (q & 65535) >>> 8;
       q = b[Uf >> 1] | 0;
       a[m + (j * 608 | 0) + 318 >> 0] = q;
       a[m + (j * 608 | 0) + 319 >> 0] = (q & 65535) >>> 8;
       q = b[Vf >> 1] | 0;
       a[m + (j * 608 | 0) + 320 >> 0] = q;
       a[m + (j * 608 | 0) + 321 >> 0] = (q & 65535) >>> 8;
       q = b[Wf >> 1] | 0;
       a[m + (j * 608 | 0) + 322 >> 0] = q;
       a[m + (j * 608 | 0) + 323 >> 0] = (q & 65535) >>> 8;
       q = b[Xf >> 1] | 0;
       a[m + (j * 608 | 0) + 324 >> 0] = q;
       a[m + (j * 608 | 0) + 325 >> 0] = (q & 65535) >>> 8;
       q = b[Yf >> 1] | 0;
       a[m + (j * 608 | 0) + 326 >> 0] = q;
       a[m + (j * 608 | 0) + 327 >> 0] = (q & 65535) >>> 8;
       q = m + (j * 608 | 0) + 328 | 0;
       p = b[nd >> 1] | 0;
       a[q >> 0] = p;
       a[q + 1 >> 0] = p >> 8;
       c[m + (j * 608 | 0) + 332 >> 2] = c[rd >> 2];
       if (!h) {
        o = sd;
        p = c[o + 4 >> 2] | 0;
        q = m + (j * 608 | 0) + 336 | 0;
        c[q >> 2] = c[o >> 2];
        c[q + 4 >> 2] = p;
       }
       l = r;
       o = c[r >> 2] | 0;
       h = c[sh >> 2] | 0;
       m = c[th >> 2] | 0;
       n = c[l >> 2] | 0;
       l = c[l + 4 >> 2] | 0;
       d = 0;
      } else {
       o = k;
       n = k;
       f = q;
      } else {
       o = k;
       n = k;
       f = q;
      }
     } else {
      o = k;
      n = k;
      f = q;
     } else {
      o = k;
      n = k;
      f = q;
     }
     k = o & 65535;
     h = h + k | 0;
     j = m + (h * 608 | 0) | 0;
     q = j;
     if ((n | 0) == (c[q >> 2] | 0) ? (l | 0) == (c[q + 4 >> 2] | 0) : 0) {
      q = j;
      c[q >> 2] = -1;
      c[q + 4 >> 2] = -1;
      c[m + (h * 608 | 0) + 8 >> 2] = 0;
      c[m + (h * 608 | 0) + 12 >> 2] = 0;
      Oe(vh);
      q = c[Ae >> 2] | 0;
      c[Ae >> 2] = q + 1;
      b[(c[vh >> 2] | 0) + (q << 1) >> 1] = b[r >> 1] | 0;
      break a;
     } else {
      c[Ah >> 2] = o >>> 16;
      c[Ah + 4 >> 2] = k;
      he(164082, Ah);
      break a;
     }
    }
   default:
    f = q;
   } while (0);
   r = r + 8 | 0;
   if ((r | 0) == (ch | 0)) break; else q = f;
  }
  f = c[Dh >> 2] | 0;
  c[Dh + 16 >> 2] = 0;
  c[Dh + 20 >> 2] = 0;
  if (!f) {
   i = Eh;
   return;
  }
 }
 zg(f);
 i = Eh;
 return;
}
function dd(d) {
 d = d | 0;
 var f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0.0, p = 0.0, q = 0.0, r = 0.0, s = 0.0, t = 0.0, u = 0.0, v = 0.0, w = 0.0, x = 0.0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0;
 ka = i;
 i = i + 112 | 0;
 fa = ka + 32 | 0;
 ca = ka + 24 | 0;
 aa = ka + 16 | 0;
 ba = ka;
 ga = ka + 40 | 0;
 ha = ka + 80 | 0;
 ia = ka + 56 | 0;
 h = c[42834] | 0;
 do if (a[h >> 0] | 0) {
  f = c[h + 40 >> 2] | 0;
  if (f & 67108864 | 0) {
   c[d + 411436 >> 2] = 1;
   break;
  }
  if (f & 33554432 | 0) {
   c[d + 411436 >> 2] = 2;
   break;
  }
  if (f & 268435456 | 0) {
   c[d + 411436 >> 2] = 3;
   break;
  }
  if (f & 134217728 | 0) c[d + 411436 >> 2] = 4;
 } while (0);
 f = b[h + 1288 >> 1] | 0;
 if (!((f & 255) << 24 >> 24)) {
  if (a[h + 624 >> 0] | 0) da = 12;
 } else da = 12;
 do if ((da | 0) == 12) {
  if ((f & 65535) < 256) if (!(a[h + 1292 >> 0] | 0)) {
   if (!(a[h + 652 >> 0] & 4)) break;
   f = h + 628 | 0;
   h = h + 632 | 0;
  } else da = 15; else da = 15;
  if ((da | 0) == 15) {
   f = h + 1300 | 0;
   h = h + 1304 | 0;
  }
  p = +g[f >> 2] - (+(c[d + 411420 >> 2] | 0) + +(c[d + 411208 >> 2] | 0) / +(c[d + 244 >> 2] | 0) * +(c[d + 411428 >> 2] | 0));
  o = +g[h >> 2] - (+(c[d + 411424 >> 2] | 0) + +(c[d + 411212 >> 2] | 0) / +(c[d + 248 >> 2] | 0) * +(c[d + 411432 >> 2] | 0));
  if ((p >= 0.0 ? p : -p) > (o >= 0.0 ? o : -o)) {
   c[d + 411436 >> 2] = p < 0.0 ? 1 : 2;
   break;
  } else {
   c[d + 411436 >> 2] = o < 0.0 ? 3 : 4;
   break;
  }
 } while (0);
 T = c[d + 411436 >> 2] | 0;
 ea = d + 410800 | 0;
 ja = d + 411416 | 0;
 $ = d + 410812 | 0;
 if ((c[$ >> 2] | 0) == 240) hd(ea, d + 224 | 0, d + 411344 | 0);
 _ = d + 411268 | 0;
 if ((c[_ >> 2] | 0) == 1) {
  f = d + 410828 | 0;
  da = c[f >> 2] | 0;
  c[f >> 2] = da + -1;
  c[d + 411400 >> 2] = 0;
  c[d + 411404 >> 2] = -23;
  c[d + 411408 >> 2] = 0;
  if ((da | 0) < 2) c[f >> 2] = 0;
  c[ea >> 2] = 0;
  f = d + 410808 | 0;
  c[f >> 2] = 180;
  c[d + 410816 >> 2] = 0;
  c[d + 410832 >> 2] = 0;
  h = d + 411276 | 0;
  l = d + 410836 | 0;
  do {
   da = c[l >> 2] | 0;
   k = c[1488 + (da << 2) >> 2] | 0;
   c[l + 8 >> 2] = k;
   c[l + 12 >> 2] = k;
   k = 1248 + (da << 3) | 0;
   Z = c[k >> 2] | 0;
   j = Z << 3 | 7;
   k = Zg(Z | 0, c[k + 4 >> 2] | 0, 29) | 0;
   k = k & -8 | 4;
   Z = l + 20 | 0;
   c[Z >> 2] = j;
   c[Z + 4 >> 2] = k;
   c[l + 60 >> 2] = (da | 0) == 0 ? 2 : 5;
   c[l + 64 >> 2] = 0;
   c[l + 68 >> 2] = 0;
   a[l + 84 >> 0] = 0;
   if ((da | 0) != 4) c[l + 76 >> 2] = 0;
   c[l + 80 >> 2] = 0;
   c[l + 28 >> 2] = (j | 0) / 8 | 0;
   c[l + 32 >> 2] = (k | 0) / 8 | 0;
   c[l + 36 >> 2] = 3 - ((j | 0) % 8 | 0);
   c[l + 40 >> 2] = 4 - ((k | 0) % 8 | 0);
   l = l + 88 | 0;
  } while ((l | 0) != (h | 0));
  Z = f;
 } else Z = d + 410808 | 0;
 f = c[Z >> 2] | 0;
 if ((f | 0) > 0) {
  f = f + -1 | 0;
  c[Z >> 2] = f;
 }
 h = d + 410916 | 0;
 j = c[h >> 2] | 0;
 if ((j | 0) > 0) c[h >> 2] = j + -1;
 h = d + 411004 | 0;
 j = c[h >> 2] | 0;
 if ((j | 0) > 0) c[h >> 2] = j + -1;
 h = d + 411092 | 0;
 j = c[h >> 2] | 0;
 if ((j | 0) > 0) c[h >> 2] = j + -1;
 h = d + 411180 | 0;
 j = c[h >> 2] | 0;
 if ((j | 0) > 0) c[h >> 2] = j + -1;
 h = c[_ >> 2] | 0;
 if ((h | 0) > 0) c[_ >> 2] = h + -1;
 if (!f) {
  U = d + 410836 | 0;
  W = d + 411276 | 0;
  Y = d + 410816 | 0;
  if ((c[d + 410896 >> 2] | 0) == 5) if ((c[Y >> 2] | 0) > 240) {
   f = U;
   da = 46;
  } else da = 47; else da = 47;
  do if ((da | 0) == 47) {
   if ((c[d + 410984 >> 2] | 0) == 5) if ((c[Y >> 2] | 0) > 240) {
    f = d + 410924 | 0;
    da = 46;
    break;
   }
   if ((c[d + 411072 >> 2] | 0) == 5) if ((c[Y >> 2] | 0) > 240) {
    f = d + 411012 | 0;
    da = 46;
    break;
   }
   if ((c[d + 411160 >> 2] | 0) == 5) if ((c[Y >> 2] | 0) > 240) {
    f = d + 411100 | 0;
    da = 46;
    break;
   }
   if ((c[d + 411248 >> 2] | 0) == 5) if ((c[Y >> 2] | 0) > 240) {
    f = d + 411188 | 0;
    da = 46;
   }
  } while (0);
  if ((da | 0) == 46) {
   a[f + 84 >> 0] = 1;
   c[Y >> 2] = 0;
  }
  V = d + 411216 | 0;
  N = d + 411216 | 0;
  O = d + 411196 | 0;
  X = d + 411220 | 0;
  P = d + 410864 | 0;
  Q = d + 410868 | 0;
  S = U;
  while (1) {
   l = c[S >> 2] | 0;
   a : do if ((l | 0) == 4) {
    M = ((c[ea >> 2] | 0) % 5 | 0 | 0) != 0;
    l = M & 1;
    if (M) {
     m = S + 8 | 0;
     n = S + 20 | 0;
     y = S + 24 | 0;
     z = S + 36 | 0;
     A = S + 28 | 0;
     B = S + 32 | 0;
     D = S + 40 | 0;
     E = S + 16 | 0;
     f = c[n >> 2] | 0;
     h = c[y >> 2] | 0;
     F = 0;
     do {
      j = gd(S, T, 1) | 0;
      c[m >> 2] = j;
      f = f + (c[1208 + (j << 3) >> 2] | 0) | 0;
      c[n >> 2] = f;
      k = h + (c[1208 + (j << 3) + 4 >> 2] | 0) | 0;
      c[y >> 2] = k;
      do if (!j) h = k; else {
       c[E >> 2] = (c[E >> 2] | 0) + 1;
       if ((j + -1 | 0) >>> 0 <= 1) {
        h = c[D >> 2] | 0;
        if ((h | 0) < 0) {
         h = k + -1 | 0;
         c[y >> 2] = h;
         break;
        }
        if ((h | 0) <= 0) {
         h = k;
         break;
        }
        h = k + 1 | 0;
        c[y >> 2] = h;
        break;
       }
       if ((j + -3 | 0) >>> 0 > 1) {
        h = k;
        break;
       }
       h = c[z >> 2] | 0;
       if ((h | 0) < 0) {
        f = f + -1 | 0;
        c[n >> 2] = f;
        h = k;
        break;
       }
       if ((h | 0) <= 0) {
        h = k;
        break;
       }
       f = f + 1 | 0;
       c[n >> 2] = f;
       h = k;
      } while (0);
      do if ((f | 0) < 0) {
       c[n >> 2] = 223;
       f = 223;
      } else {
       if ((f | 0) <= 224) break;
       c[n >> 2] = 0;
       f = 0;
      } while (0);
      c[A >> 2] = (f | 0) / 8 | 0;
      c[B >> 2] = (h | 0) / 8 | 0;
      c[z >> 2] = 3 - ((f | 0) % 8 | 0);
      c[D >> 2] = 4 - ((h | 0) % 8 | 0);
      F = F + 1 | 0;
     } while ((F | 0) != (l | 0));
    }
   } else {
    h = S + 60 | 0;
    j = c[h >> 2] | 0;
    b : do switch (j | 0) {
    case 4:
     {
      f = S + 20 | 0;
      M = 111 - (c[f >> 2] | 0) | 0;
      if ((((M | 0) > -1 ? M : 0 - M | 0) | 0) < 9) if ((c[S + 24 >> 2] | 0) == 116) {
       c[f >> 2] = 111;
       c[f + 4 >> 2] = 116;
       c[S + 68 >> 2] = 0;
       f = 7;
      } else f = 4; else f = 4;
      break;
     }
    case 7:
     {
      if ((c[S + 20 >> 2] | 0) == (c[S + 52 >> 2] | 0)) f = (c[S + 24 >> 2] | 0) == (c[S + 56 >> 2] | 0) ? 5 : 7; else f = 7;
      break;
     }
    case 5:
     {
      if ((c[S + 68 >> 2] | 0) < (c[S + 72 >> 2] | 0)) if (!(a[S + 84 >> 0] | 0)) {
       f = 5;
       break b;
      }
      f = 6;
      break;
     }
    case 6:
     {
      if ((c[S + 20 >> 2] | 0) == 111) f = (c[S + 24 >> 2] | 0) == 116 ? 2 : 6; else f = 6;
      break;
     }
    default:
     if ((c[S + 64 >> 2] | 0) > 0) f = 3; else {
      f = c[ea >> 2] | 0;
      do if ((f | 0) < 420) f = 0; else {
       if ((f | 0) < 1620) {
        f = 1;
        break;
       }
       if ((f | 0) < 2040) {
        f = 2;
        break;
       }
       if ((f | 0) < 3240) {
        f = 3;
        break;
       }
       if ((f | 0) < 3540) {
        f = 4;
        break;
       }
       if ((f | 0) < 4740) {
        f = 5;
        break;
       }
       if ((f | 0) < 5040) {
        f = 6;
        break;
       }
       if ((f | 0) == 2147483647) {
        f = 1;
        break b;
       } else f = 7;
      } while (0);
      f = c[1424 + (f << 3) + 4 >> 2] | 0;
     }
    } while (0);
    if ((j | 0) == (f | 0)) M = j; else {
     switch (j | 0) {
     case 6:
      {
       c[S + 8 >> 2] = 1;
       c[S + 12 >> 2] = 1;
       break;
      }
     case 7:
      {
       c[S + 12 >> 2] = 4;
       break;
      }
     case 3:
      break;
     default:
      c[S + 12 >> 2] = c[1188 + (c[S + 8 >> 2] << 2) >> 2];
     }
     c[h >> 2] = f;
     M = f;
    }
    f = S + 64 | 0;
    h = c[f >> 2] | 0;
    if ((h | 0) > 0) c[f >> 2] = h + -1;
    a[S + 84 >> 0] = 0;
    j = c[ea >> 2] | 0;
    c : do switch (M | 0) {
    case 3:
     {
      f = j & 1;
      da = 148;
      break;
     }
    case 4:
     {
      f = 2 - (j & 1) | 0;
      da = 152;
      break;
     }
    default:
     {
      do if ((c[S + 32 >> 2] | 0) == 17) {
       if (((c[S + 28 >> 2] | 0) + -6 | 0) >>> 0 <= 15) {
        da = 102;
        break;
       }
       f = j & 1;
      } else da = 102; while (0);
      if ((da | 0) == 102) {
       da = 0;
       f = (j & 3 | 0) != 0 & 1;
      }
      switch (M | 0) {
      case 3:
       {
        da = 148;
        break c;
       }
      case 4:
       {
        da = 152;
        break c;
       }
      case 5:
       {
        if ((f | 0) <= 0) break a;
        y = S + 8 | 0;
        z = S + 28 | 0;
        A = S + 32 | 0;
        B = S + 12 | 0;
        D = S + 20 | 0;
        E = S + 24 | 0;
        F = S + 36 | 0;
        G = S + 16 | 0;
        h = c[y >> 2] | 0;
        k = c[z >> 2] | 0;
        m = c[A >> 2] | 0;
        n = c[D >> 2] | 0;
        j = c[E >> 2] | 0;
        H = 0;
        do {
         if ((h + -3 | 0) >>> 0 >= 2) {
          c[y >> 2] = 3;
          h = 3;
         }
         l = c[1208 + (h << 3) >> 2] | 0;
         M = l + k | 0;
         k = c[1208 + (h << 3) + 4 >> 2] | 0;
         L = k + m | 0;
         if ((c[167232 + (((L | 0) < 0 ? 0 : (L | 0) > 35 ? 35 : L) * 112 | 0) + (((M | 0) < 0 ? 0 : (M | 0) > 27 ? 27 : M) << 2) >> 2] | 1 | 0) == 3) {
          h = c[1188 + (h << 2) >> 2] | 0;
          c[y >> 2] = h;
          c[B >> 2] = h;
          k = n + (c[1208 + (h << 3) >> 2] | 0) | 0;
          j = j + (c[1208 + (h << 3) + 4 >> 2] | 0) | 0;
          if (h) da = 115;
         } else {
          j = j + k | 0;
          k = n + l | 0;
          da = 115;
         }
         if ((da | 0) == 115) {
          da = 0;
          c[G >> 2] = (c[G >> 2] | 0) + 1;
         }
         n = (k | 0) < 0 ? 223 : (k | 0) > 224 ? 0 : k;
         k = (n | 0) / 8 | 0;
         m = (j | 0) / 8 | 0;
         H = H + 1 | 0;
        } while ((H | 0) != (f | 0));
        c[z >> 2] = k;
        c[A >> 2] = m;
        c[D >> 2] = n;
        c[E >> 2] = j;
        c[F >> 2] = 3 - ((n | 0) % 8 | 0);
        c[S + 40 >> 2] = 4 - ((j | 0) % 8 | 0);
        break a;
       }
      case 7:
       {
        if ((f | 0) <= 0) break a;
        k = S + 24 | 0;
        l = S + 20 | 0;
        m = S + 8 | 0;
        n = S + 28 | 0;
        y = S + 36 | 0;
        z = S + 16 | 0;
        A = S + 56 | 0;
        B = S + 52 | 0;
        j = c[z >> 2] | 0;
        D = c[k >> 2] | 0;
        E = c[l >> 2] | 0;
        F = 0;
        do {
         do if ((D | 0) == 116) {
          if ((E | 0) > 111) {
           c[m >> 2] = 1;
           h = 1;
           break;
          }
          if ((E | 0) >= 111) {
           da = 122;
           break;
          }
          c[m >> 2] = 2;
          h = 2;
         } else da = 122; while (0);
         do if ((da | 0) == 122) {
          da = 0;
          if ((D | 0) < (c[A >> 2] | 0)) {
           c[m >> 2] = 4;
           h = 4;
           break;
          }
          h = c[B >> 2] | 0;
          if ((E | 0) > (h | 0)) {
           c[m >> 2] = 1;
           h = 1;
           break;
          }
          if ((E | 0) < (h | 0)) {
           c[m >> 2] = 2;
           h = 2;
           break;
          } else {
           c[m >> 2] = 3;
           h = 3;
           break;
          }
         } while (0);
         M = E + (c[1208 + (h << 3) >> 2] | 0) | 0;
         D = D + (c[1208 + (h << 3) + 4 >> 2] | 0) | 0;
         E = (M | 0) < 0 ? 223 : (M | 0) > 224 ? 0 : M;
         F = F + 1 | 0;
        } while ((F | 0) != (f | 0));
        c[l >> 2] = E;
        c[k >> 2] = D;
        c[n >> 2] = (E | 0) / 8 | 0;
        c[S + 32 >> 2] = (D | 0) / 8 | 0;
        c[y >> 2] = 3 - ((E | 0) % 8 | 0);
        c[S + 40 >> 2] = 4 - ((D | 0) % 8 | 0);
        c[z >> 2] = f + j;
        break a;
       }
      case 6:
       {
        if ((f | 0) <= 0) break a;
        j = S + 20 | 0;
        k = S + 8 | 0;
        l = S + 24 | 0;
        m = S + 28 | 0;
        n = S + 36 | 0;
        y = S + 16 | 0;
        h = c[y >> 2] | 0;
        z = c[j >> 2] | 0;
        A = c[l >> 2] | 0;
        D = 0;
        do {
         do if ((z | 0) > 111) {
          c[k >> 2] = 1;
          B = 1;
         } else {
          if ((z | 0) < 111) {
           c[k >> 2] = 2;
           B = 2;
           break;
          }
          if ((A | 0) > 116) {
           c[k >> 2] = 3;
           B = 3;
           break;
          }
          if ((A | 0) < 116) {
           c[k >> 2] = 4;
           B = 4;
           break;
          } else {
           c[k >> 2] = 1;
           B = 1;
           break;
          }
         } while (0);
         M = z + (c[1208 + (B << 3) >> 2] | 0) | 0;
         A = A + (c[1208 + (B << 3) + 4 >> 2] | 0) | 0;
         z = (M | 0) < 0 ? 223 : (M | 0) > 224 ? 0 : M;
         D = D + 1 | 0;
        } while ((D | 0) != (f | 0));
        c[l >> 2] = A;
        c[j >> 2] = z;
        c[m >> 2] = (z | 0) / 8 | 0;
        c[S + 32 >> 2] = (A | 0) / 8 | 0;
        c[n >> 2] = 3 - ((z | 0) % 8 | 0);
        c[S + 40 >> 2] = 4 - ((A | 0) % 8 | 0);
        c[y >> 2] = f + h;
        c[S + 12 >> 2] = B;
        break a;
       }
      case 2:
       {
        J = 1528 + (l << 3) | 0;
        K = c[J + 4 >> 2] | 0;
        L = S + 44 | 0;
        c[L >> 2] = c[J >> 2];
        c[L + 4 >> 2] = K;
        break c;
       }
      case 1:
       {
        k = S + 44 | 0;
        d : do switch (l | 0) {
        case 0:
         {
          j = V;
          h = c[j >> 2] | 0;
          j = c[j + 4 >> 2] | 0;
          break;
         }
        case 1:
         {
          j = c[O >> 2] | 0;
          h = (c[1208 + (j << 3) >> 2] << 2) + (c[N >> 2] | 0) | 0;
          j = (c[1208 + (j << 3) + 4 >> 2] << 2) + (c[X >> 2] | 0) | 0;
          break;
         }
        case 2:
         {
          L = c[O >> 2] | 0;
          h = c[P >> 2] | 0;
          j = c[Q >> 2] | 0;
          h = ((c[1208 + (L << 3) >> 2] << 1) + (c[N >> 2] | 0) - h << 1) + h | 0;
          j = ((c[1208 + (L << 3) + 4 >> 2] << 1) + (c[X >> 2] | 0) - j << 1) + j | 0;
          break;
         }
        case 3:
         {
          L = (c[S + 28 >> 2] | 0) - (c[V >> 2] | 0) | 0;
          K = (c[S + 32 >> 2] | 0) - (c[X >> 2] | 0) | 0;
          if (((R(K, K) | 0) + (R(L, L) | 0) | 0) >>> 0 <= 64) {
           h = 0;
           j = 34;
           break d;
          }
          j = V;
          h = c[j >> 2] | 0;
          j = c[j + 4 >> 2] | 0;
          break;
         }
        default:
         {
          h = 0;
          j = 0;
         }
        } while (0);
        L = k;
        c[L >> 2] = h;
        c[L + 4 >> 2] = j;
        break c;
       }
      default:
       break c;
      }
     }
    } while (0);
    if ((da | 0) == 148) {
     da = 0;
     h = S + 44 | 0;
     if (!((j | 0) % 13 | 0)) {
      k = h;
      j = c[k >> 2] | 0;
      k = c[k + 4 >> 2] | 0;
     } else {
      k = 167224;
      k = ah(c[k >> 2] | 0, c[k + 4 >> 2] | 0, 1284865837, 1481765933) | 0;
      k = Tg(k | 0, C | 0, 1, 0) | 0;
      L = C;
      j = Zg(k | 0, L | 0, 33) | 0;
      L = ah(k | 0, L | 0, 1284865837, 1481765933) | 0;
      L = Tg(L | 0, C | 0, 1, 0) | 0;
      k = C;
      K = 167224;
      c[K >> 2] = L;
      c[K + 4 >> 2] = k;
      k = Zg(L | 0, k | 0, 33) | 0;
      j = (j >>> 0) % 28 | 0;
      k = (k >>> 0) % 36 | 0;
     }
     L = h;
     c[L >> 2] = j;
     c[L + 4 >> 2] = k;
    } else if ((da | 0) == 152) {
     da = 0;
     L = S + 44 | 0;
     c[L >> 2] = 13;
     c[L + 4 >> 2] = 15;
    }
    if ((f | 0) > 0) {
     A = S + 8 | 0;
     B = S + 20 | 0;
     D = S + 24 | 0;
     E = S + 36 | 0;
     F = S + 28 | 0;
     G = S + 32 | 0;
     H = S + 40 | 0;
     I = S + 16 | 0;
     J = S + 12 | 0;
     K = S + 44 | 0;
     z = c[E >> 2] | 0;
     L = 0;
     do {
      if (!z) if (!(c[H >> 2] | 0)) da = 158; else da = 157; else da = 157;
      if ((da | 0) == 157) {
       da = 0;
       h = c[A >> 2] | 0;
       if (!h) da = 158;
      }
      if ((da | 0) == 158) {
       h = c[J >> 2] | 0;
       if (!h) h = c[A >> 2] | 0; else c[A >> 2] = h;
       n = (c[1208 + (h << 3) >> 2] | 0) + (c[F >> 2] | 0) | 0;
       y = (c[1208 + (h << 3) + 4 >> 2] | 0) + (c[G >> 2] | 0) | 0;
       do if ((h | 0) == 4) {
        j = 0;
        l = 1e6;
        da = 166;
       } else {
        j = y + -1 | 0;
        da = c[167232 + (((y | 0) < 1 ? 0 : (j | 0) > 35 ? 35 : j) * 112 | 0) + (((n | 0) < 0 ? 0 : (n | 0) > 27 ? 27 : n) << 2) >> 2] | 0;
        if ((M | 2 | 0) == 6 ? (da | 0) == 2 : (da | 1 | 0) == 3) {
         j = 0;
         l = 1e6;
        } else {
         da = K;
         l = n - (c[da >> 2] | 0) | 0;
         da = j - (c[da + 4 >> 2] | 0) | 0;
         l = (R(da, da) | 0) + (R(l, l) | 0) | 0;
         da = l >>> 0 < 1e6;
         j = da ? 3 : 0;
         l = da ? l : 1e6;
        }
        if ((h | 0) != 2) {
         da = 166;
         break;
        }
        m = M | 2;
        da = 169;
       } while (0);
       if ((da | 0) == 166) {
        k = n + -1 | 0;
        da = c[167232 + (((y | 0) < 0 ? 0 : (y | 0) > 35 ? 35 : y) * 112 | 0) + (((n | 0) < 1 ? 0 : (k | 0) > 27 ? 27 : k) << 2) >> 2] | 0;
        m = M | 2;
        if (!((m | 0) == 6 ? (da | 0) == 2 : (da | 1 | 0) == 3)) {
         la = K;
         da = k - (c[la >> 2] | 0) | 0;
         k = y - (c[la + 4 >> 2] | 0) | 0;
         da = (R(k, k) | 0) + (R(da, da) | 0) | 0;
         k = (da | 0) < (l | 0);
         j = k ? 1 : j;
         l = k ? da : l;
        }
        if ((h | 0) == 3) da = 172; else da = 169;
       }
       if ((da | 0) == 169) {
        da = 0;
        k = y + 1 | 0;
        la = c[167232 + (((y | 0) < -1 ? 0 : (k | 0) > 35 ? 35 : k) * 112 | 0) + (((n | 0) < 0 ? 0 : (n | 0) > 27 ? 27 : n) << 2) >> 2] | 0;
        if (!((m | 0) == 6 ? (la | 0) == 2 : (la | 1 | 0) == 3)) {
         ma = K;
         la = n - (c[ma >> 2] | 0) | 0;
         k = k - (c[ma + 4 >> 2] | 0) | 0;
         la = (R(k, k) | 0) + (R(la, la) | 0) | 0;
         k = (la | 0) < (l | 0);
         j = k ? 4 : j;
         l = k ? la : l;
        }
        if ((h | 0) != 1) da = 172;
       }
       do if ((da | 0) == 172) {
        da = 0;
        k = n + 1 | 0;
        ma = c[167232 + (((y | 0) < 0 ? 0 : (y | 0) > 35 ? 35 : y) * 112 | 0) + (((n | 0) < -1 ? 0 : (k | 0) > 27 ? 27 : k) << 2) >> 2] | 0;
        if ((m | 0) == 6 ? (ma | 0) == 2 : (ma | 1 | 0) == 3) break;
        la = K;
        ma = k - (c[la >> 2] | 0) | 0;
        la = y - (c[la + 4 >> 2] | 0) | 0;
        ma = ((R(la, la) | 0) + (R(ma, ma) | 0) | 0) < (l | 0);
        j = ma ? 2 : j;
       } while (0);
       c[J >> 2] = j;
      }
      j = gd(S, h, 0) | 0;
      c[A >> 2] = j;
      h = (c[B >> 2] | 0) + (c[1208 + (j << 3) >> 2] | 0) | 0;
      c[B >> 2] = h;
      k = (c[D >> 2] | 0) + (c[1208 + (j << 3) + 4 >> 2] | 0) | 0;
      c[D >> 2] = k;
      do if (!j) j = k; else {
       c[I >> 2] = (c[I >> 2] | 0) + 1;
       if ((j + -1 | 0) >>> 0 <= 1) {
        j = c[H >> 2] | 0;
        if ((j | 0) < 0) {
         j = k + -1 | 0;
         c[D >> 2] = j;
         break;
        }
        if ((j | 0) <= 0) {
         j = k;
         break;
        }
        j = k + 1 | 0;
        c[D >> 2] = j;
        break;
       }
       if ((j + -3 | 0) >>> 0 > 1) {
        j = k;
        break;
       }
       if ((z | 0) < 0) {
        h = h + -1 | 0;
        c[B >> 2] = h;
        j = k;
        break;
       }
       if ((z | 0) <= 0) {
        j = k;
        break;
       }
       h = h + 1 | 0;
       c[B >> 2] = h;
       j = k;
      } while (0);
      do if ((h | 0) < 0) {
       c[B >> 2] = 223;
       h = 223;
      } else {
       if ((h | 0) <= 224) break;
       c[B >> 2] = 0;
       h = 0;
      } while (0);
      c[F >> 2] = (h | 0) / 8 | 0;
      c[G >> 2] = (j | 0) / 8 | 0;
      z = 3 - ((h | 0) % 8 | 0) | 0;
      c[E >> 2] = z;
      c[H >> 2] = 4 - ((j | 0) % 8 | 0);
      L = L + 1 | 0;
     } while ((L | 0) != (f | 0));
    }
   } while (0);
   S = S + 88 | 0;
   if ((S | 0) == (W | 0)) {
    f = U;
    h = 0;
    break;
   }
  }
  do {
   ma = (c[f + 60 >> 2] | 0) == 4;
   h = h | ma;
   f = f + 88 | 0;
  } while (!(ma | (f | 0) == (W | 0)));
  do if (h) {
   f = c[ea >> 2] | 0;
   h = d + 411408 | 0;
   if ((f - (c[h >> 2] | 0) | 0) > 13) {
    c[h >> 2] = f;
    T = d + 411384 | 0;
    la = c[T + 4 >> 2] | 0;
    ma = ba;
    c[ma >> 2] = c[T >> 2];
    c[ma + 4 >> 2] = la;
    Wf(ba);
   }
  } else {
   f = U;
   h = 0;
   do {
    ma = (c[f + 60 >> 2] | 0) == 3;
    h = h | ma;
    f = f + 88 | 0;
   } while (!(ma | (f | 0) == (W | 0)));
   j = c[ea >> 2] | 0;
   if (h) {
    f = d + 411400 | 0;
    if ((j - (c[f >> 2] | 0) | 0) > 6) {
     c[f >> 2] = j;
     T = d + 411368 | 0;
     la = c[T + 4 >> 2] | 0;
     ma = ba;
     c[ma >> 2] = c[T >> 2];
     c[ma + 4 >> 2] = la;
     Wf(ba);
    }
    break;
   } else {
    f = d + 411404 | 0;
    if ((j - (c[f >> 2] | 0) | 0) > 22) {
     c[f >> 2] = j;
     T = d + 411376 | 0;
     la = c[T + 4 >> 2] | 0;
     ma = ba;
     c[ma >> 2] = c[T >> 2];
     c[ma + 4 >> 2] = la;
     Wf(ba);
    }
    break;
   }
  } while (0);
  G = V;
  F = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  h = d + 411340 | 0;
  H = d + 410832 | 0;
  j = d + 410836 | 0;
  k = d + 410924 | 0;
  l = d + 411012 | 0;
  m = d + 411100 | 0;
  n = d + 411188 | 0;
  I = d + 410820 | 0;
  J = d + 410824 | 0;
  y = d + 411252 | 0;
  z = d + 411164 | 0;
  A = d + 411076 | 0;
  B = d + 410988 | 0;
  D = d + 410900 | 0;
  E = d + 411276 | 0;
  do {
   f = E + 12 | 0;
   do if (a[f >> 0] | 0) if ((F | 0) == (c[E >> 2] | 0)) if ((G | 0) == (c[E + 4 >> 2] | 0)) {
    a[f >> 0] = 0;
    c[H >> 2] = 0;
    if ((c[j >> 2] | 0) != 4) c[D >> 2] = 360;
    if ((c[k >> 2] | 0) != 4) c[B >> 2] = 360;
    if ((c[l >> 2] | 0) != 4) c[A >> 2] = 360;
    if ((c[m >> 2] | 0) != 4) c[z >> 2] = 360;
    if ((c[n >> 2] | 0) != 4) c[y >> 2] = 360;
    f = (c[I >> 2] | 0) + 5 | 0;
    c[I >> 2] = f;
    if ((f | 0) <= (c[J >> 2] | 0)) break;
    c[J >> 2] = f;
   } while (0);
   E = E + 16 | 0;
  } while ((E | 0) != (h | 0));
  j = d + 411264 | 0;
  k = d + 411392 | 0;
  h = U;
  do {
   e : do if ((c[h >> 2] | 0) != 4) if ((F | 0) == (c[h + 28 >> 2] | 0)) if ((G | 0) == (c[h + 32 >> 2] | 0)) {
    f = h + 60 | 0;
    switch (c[f >> 2] | 0) {
    case 1:
    case 2:
     {
      ge(137082, aa);
      c[j >> 2] = (c[j >> 2] | 0) + 1;
      c[_ >> 2] = 180;
      c[Z >> 2] = 180;
      break e;
     }
    case 3:
     break;
    default:
     break e;
    }
    c[f >> 2] = 4;
    c[h + 64 >> 2] = 0;
    ma = c[H >> 2] | 0;
    la = ma + 1 | 0;
    c[H >> 2] = la;
    c[h + 76 >> 2] = la;
    c[h + 80 >> 2] = 30;
    c[Z >> 2] = 30;
    switch (ma | 0) {
    case 0:
     {
      f = 20;
      break;
     }
    case 1:
     {
      f = 40;
      break;
     }
    case 2:
     {
      f = 80;
      break;
     }
    default:
     f = 160;
    }
    f = (c[I >> 2] | 0) + f | 0;
    c[I >> 2] = f;
    if ((f | 0) > (c[J >> 2] | 0)) c[J >> 2] = f;
    U = k;
    la = c[U + 4 >> 2] | 0;
    ma = ba;
    c[ma >> 2] = c[U >> 2];
    c[ma + 4 >> 2] = la;
    Wf(ba);
   } while (0);
   h = h + 88 | 0;
  } while ((h | 0) != (W | 0));
  do if ((c[167232 + (((G | 0) < 0 ? 0 : (G | 0) > 35 ? 35 : G) * 112 | 0) + (((F | 0) < 0 ? 0 : (F | 0) > 27 ? 27 : F) << 2) >> 2] | 0) == 1) {
   h = V;
   f = c[h >> 2] | 0;
   h = c[h + 4 >> 2] | 0;
   ma = (f | 0) < 0;
   c[167232 + (((h | 0) < 0 ? 0 : (h | 0) > 35 ? 35 : h) * 112 | 0) + ((ma ? 0 : (f | 0) > 27 ? 27 : f) << 2) >> 2] = 0;
   h = c[X >> 2] | 0;
   if (ma) j = 0; else {
    j = c[d + 228 >> 2] | 0;
    j = (j | 0) > (f | 0) ? f : j + -1 | 0;
   }
   if ((h | 0) < 0) f = 0; else {
    f = c[d + 232 >> 2] | 0;
    f = (f | 0) > (h | 0) ? h : f + -1 | 0;
   }
   c[d + 432 + ((R(c[d + 228 >> 2] | 0, f) | 0) + j << 2) >> 2] = 0;
   do if ((c[d + 410984 >> 2] | 0) == 5) {
    f = 1;
    da = 253;
   } else {
    if ((c[d + 411072 >> 2] | 0) == 5) {
     f = 2;
     da = 253;
     break;
    }
    if ((c[d + 411160 >> 2] | 0) == 5) {
     f = 3;
     da = 253;
    }
   } while (0);
   if ((da | 0) == 253) {
    ma = d + 410836 + (f * 88 | 0) + 68 | 0;
    c[ma >> 2] = (c[ma >> 2] | 0) + 1;
   }
   ma = c[I >> 2] | 0;
   f = ma + 1 | 0;
   c[I >> 2] = f;
   if ((ma | 0) >= (c[J >> 2] | 0)) c[J >> 2] = f;
   c[Y >> 2] = 0;
   ma = (c[$ >> 2] | 0) + 1 | 0;
   c[$ >> 2] = ma;
   if (!(ma & 1)) {
    da = d + 411352 | 0;
    la = c[da + 4 >> 2] | 0;
    ma = ba;
    c[ma >> 2] = c[da >> 2];
    c[ma + 4 >> 2] = la;
    Wf(ba);
    break;
   } else {
    da = d + 411360 | 0;
    la = c[da + 4 >> 2] | 0;
    ma = ba;
    c[ma >> 2] = c[da >> 2];
    c[ma + 4 >> 2] = la;
    Wf(ba);
    break;
   }
  } while (0);
  c[ea >> 2] = (c[ea >> 2] | 0) + 1;
  c[Y >> 2] = (c[Y >> 2] | 0) + 1;
 }
 h = c[d + 411284 >> 2] | 0;
 if (!(a[d + 411288 >> 0] | 0)) f = 74; else {
  f = d + 411276 | 0;
  ma = c[f >> 2] | 0;
  f = Zg(ma | 0, c[f + 4 >> 2] | 0, 29) | 0;
  c[d + 16816 + (h * 24 | 0) + 4 >> 2] = (ma << 3) + -4;
  c[d + 16816 + (h * 24 | 0) + 8 >> 2] = (f & -8) + -4;
  c[d + 16816 + (h * 24 | 0) + 12 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 16 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 20 >> 2] = 0;
  f = 3;
 }
 c[d + 16816 + (h * 24 | 0) >> 2] = f;
 h = c[d + 411300 >> 2] | 0;
 if (!(a[d + 411304 >> 0] | 0)) f = 74; else {
  f = d + 411292 | 0;
  ma = c[f >> 2] | 0;
  f = Zg(ma | 0, c[f + 4 >> 2] | 0, 29) | 0;
  c[d + 16816 + (h * 24 | 0) + 4 >> 2] = (ma << 3) + -4;
  c[d + 16816 + (h * 24 | 0) + 8 >> 2] = (f & -8) + -4;
  c[d + 16816 + (h * 24 | 0) + 12 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 16 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 20 >> 2] = 0;
  f = 3;
 }
 c[d + 16816 + (h * 24 | 0) >> 2] = f;
 h = c[d + 411316 >> 2] | 0;
 if (!(a[d + 411320 >> 0] | 0)) f = 74; else {
  f = d + 411308 | 0;
  ma = c[f >> 2] | 0;
  f = Zg(ma | 0, c[f + 4 >> 2] | 0, 29) | 0;
  c[d + 16816 + (h * 24 | 0) + 4 >> 2] = (ma << 3) + -4;
  c[d + 16816 + (h * 24 | 0) + 8 >> 2] = (f & -8) + -4;
  c[d + 16816 + (h * 24 | 0) + 12 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 16 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 20 >> 2] = 0;
  f = 3;
 }
 c[d + 16816 + (h * 24 | 0) >> 2] = f;
 h = c[d + 411332 >> 2] | 0;
 if (!(a[d + 411336 >> 0] | 0)) f = 74; else {
  f = d + 411324 | 0;
  ma = c[f >> 2] | 0;
  f = Zg(ma | 0, c[f + 4 >> 2] | 0, 29) | 0;
  c[d + 16816 + (h * 24 | 0) + 4 >> 2] = (ma << 3) + -4;
  c[d + 16816 + (h * 24 | 0) + 8 >> 2] = (f & -8) + -4;
  c[d + 16816 + (h * 24 | 0) + 12 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 16 >> 2] = 16;
  c[d + 16816 + (h * 24 | 0) + 20 >> 2] = 0;
  f = 3;
 }
 c[d + 16816 + (h * 24 | 0) >> 2] = f;
 l = d + 411276 | 0;
 m = d + 410836 | 0;
 do {
  h = c[m >> 2] | 0;
  ma = (h | 0) == 4;
  j = c[(ma ? m + 8 | 0 : m + 12 | 0) >> 2] | 0;
  k = (c[m + 16 >> 2] | 0) / ((ma ? 2 : 4) | 0) | 0;
  if (ma) {
   f = c[m + 80 >> 2] | 0;
   if ((f | 0) > 0) {
    j = (180 - f | 0) / 5 | 0;
    f = 9;
    da = 282;
   } else da = 273;
  } else da = 273;
  f : do if ((da | 0) == 273) {
   da = 0;
   g : do switch (c[m + 60 >> 2] | 0) {
   case 7:
   case 4:
    if ((c[m + 80 >> 2] | 0) > 0) {
     f = 1408 + ((c[m + 76 >> 2] | 0) + -1 << 2) | 0;
     break g;
    } else {
     f = 1388 + (j << 2) | 0;
     break g;
    }
   default:
    {
     f = c[m + 64 >> 2] | 0;
     if ((f | 0) <= 0) {
      f = 1288 + (h * 20 | 0) + (j << 2) | 0;
      break g;
     }
     if ((f | 0) >= 120) {
      j = k;
      f = 30;
      da = 282;
      break f;
     }
     j = k;
     f = ((f | 0) / 15 | 0) & 1 | 30;
     da = 282;
     break f;
    }
   } while (0);
   f = c[f >> 2] | 0;
   if ((f | 0) != 74) {
    j = k;
    da = 282;
   }
  } while (0);
  if ((da | 0) == 282) {
   da = 0;
   ma = m + 20 | 0;
   la = (c[ma >> 2] | 0) + -7 | 0;
   ma = (c[ma + 4 >> 2] | 0) + -8 | 0;
   h = c[m + 4 >> 2] | 0;
   c[d + 16816 + (h * 24 | 0) >> 2] = f;
   c[d + 16816 + (h * 24 | 0) + 4 >> 2] = la;
   c[d + 16816 + (h * 24 | 0) + 8 >> 2] = ma;
   c[d + 16816 + (h * 24 | 0) + 12 >> 2] = 16;
   c[d + 16816 + (h * 24 | 0) + 16 >> 2] = 16;
   switch (c[132892 + (f << 5) + 24 >> 2] | 0) {
   case 0:
    {
     f = 0;
     break;
    }
   case 1:
    {
     f = (j | 0) % (c[132892 + (f << 5) + 20 >> 2] | 0) | 0;
     break;
    }
   case 3:
    {
     f = c[132892 + (f << 5) + 20 >> 2] | 0;
     f = (f | 0) > (j | 0) ? j : f + -1 | 0;
     break;
    }
   default:
    {
     ma = c[132892 + (f << 5) + 20 >> 2] | 0;
     f = (j | 0) % (ma | 0) | 0;
     f = ((j | 0) % (ma << 1 | 0) | 0 | 0) < (ma | 0) ? f : ma + -1 - f | 0;
    }
   }
   c[d + 16816 + (h * 24 | 0) + 20 >> 2] = f;
  }
  m = m + 88 | 0;
 } while ((m | 0) != (l | 0));
 h = c[42835] | 0;
 A = h + 76 | 0;
 do {
  ma = a[A >> 0] | 0;
  a[A >> 0] = 1;
 } while ((ma & 1) != 0);
 f = h + 80 | 0;
 do {} while ((c[f >> 2] | 0) > 0);
 y = h + 256 | 0;
 z = h + 264 | 0;
 j = c[z >> 2] | 0;
 n = h + 260 | 0;
 f = c[n >> 2] | 0;
 if ((j + 2 | 0) < (f | 0)) {
  h = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   h : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break h;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 302;
   } else {
    j = f;
    da = 302;
   } while (0);
   do if ((da | 0) == 302) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  h = y;
  j = c[z >> 2] | 0;
 }
 c[z >> 2] = j + 1;
 a[f + j >> 0] = 27;
 a[(c[h >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   i : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break i;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 317;
   } else {
    j = f;
    da = 317;
   } while (0);
   do if ((da | 0) == 317) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 1;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   j : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break j;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 332;
   } else {
    j = f;
    da = 332;
   } while (0);
   do if ((da | 0) == 332) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 9;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   k : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break k;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 347;
   } else {
    j = f;
    da = 347;
   } while (0);
   do if ((da | 0) == 347) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 0;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 a[A >> 0] = 0;
 g[ba >> 2] = 1.0;
 g[ba + 4 >> 2] = 1.0;
 g[ba + 8 >> 2] = 1.0;
 g[ba + 12 >> 2] = 1.0;
 Tf(c[42835] | 0, ba);
 f = c[42835] | 0;
 k = f + 76 | 0;
 do {
  ma = a[k >> 0] | 0;
  a[k >> 0] = 1;
 } while ((ma & 1) != 0);
 h = f + 80 | 0;
 do {} while ((c[h >> 2] | 0) > 0);
 j = f + 256 | 0;
 l : do if (!2) {
  f = 137058;
  da = 359;
 } else {
  f = 137058;
  h = 137058;
  while (1) {
   if (!(a[f >> 0] | 0)) {
    f = h;
    break l;
   }
   f = f + 1 | 0;
   h = f;
   if (!(h & 3)) {
    da = 359;
    break;
   }
  }
 } while (0);
 if ((da | 0) == 359) {
  while (1) {
   h = c[f >> 2] | 0;
   if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) f = f + 4 | 0; else break;
  }
  if ((h & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
 }
 ve(j, 137058, 0, f - 137058 | 0);
 a[k >> 0] = 0;
 h = c[42835] | 0;
 A = h + 76 | 0;
 do {
  ma = a[A >> 0] | 0;
  a[A >> 0] = 1;
 } while ((ma & 1) != 0);
 f = h + 80 | 0;
 do {} while ((c[f >> 2] | 0) > 0);
 y = h + 256 | 0;
 z = h + 264 | 0;
 j = c[z >> 2] | 0;
 n = h + 260 | 0;
 f = c[n >> 2] | 0;
 if ((j + 2 | 0) < (f | 0)) {
  h = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   m : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break m;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 378;
   } else {
    j = f;
    da = 378;
   } while (0);
   do if ((da | 0) == 378) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  h = y;
  j = c[z >> 2] | 0;
 }
 c[z >> 2] = j + 1;
 a[f + j >> 0] = 27;
 a[(c[h >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   n : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break n;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 393;
   } else {
    j = f;
    da = 393;
   } while (0);
   do if ((da | 0) == 393) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 1;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   o : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break o;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 408;
   } else {
    j = f;
    da = 408;
   } while (0);
   do if ((da | 0) == 408) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 0;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   p : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break p;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 423;
   } else {
    j = f;
    da = 423;
   } while (0);
   do if ((da | 0) == 423) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 1;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 a[A >> 0] = 0;
 c[ca >> 2] = c[d + 410820 >> 2];
 Qf(0, ca);
 h = c[42835] | 0;
 A = h + 76 | 0;
 do {
  ma = a[A >> 0] | 0;
  a[A >> 0] = 1;
 } while ((ma & 1) != 0);
 f = h + 80 | 0;
 do {} while ((c[f >> 2] | 0) > 0);
 y = h + 256 | 0;
 z = h + 264 | 0;
 j = c[z >> 2] | 0;
 n = h + 260 | 0;
 f = c[n >> 2] | 0;
 if ((j + 2 | 0) < (f | 0)) {
  h = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   q : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break q;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 442;
   } else {
    j = f;
    da = 442;
   } while (0);
   do if ((da | 0) == 442) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  h = y;
  j = c[z >> 2] | 0;
 }
 c[z >> 2] = j + 1;
 a[f + j >> 0] = 27;
 a[(c[h >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   r : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break r;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 457;
   } else {
    j = f;
    da = 457;
   } while (0);
   do if ((da | 0) == 457) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 1;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   s : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break s;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 472;
   } else {
    j = f;
    da = 472;
   } while (0);
   do if ((da | 0) == 472) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 10;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 h = c[z >> 2] | 0;
 f = c[n >> 2] | 0;
 if ((h + 2 | 0) < (f | 0)) {
  j = y;
  f = c[y >> 2] | 0;
 } else {
  m = f + 128 | 0;
  f = yg(m) | 0;
  h = c[y >> 2] | 0;
  if (!h) a[f >> 0] = 0; else {
   j = h;
   t : do if (!((j ^ f) & 3)) {
    if (!(j & 3)) j = f; else {
     j = f;
     do {
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
      if (!(ma << 24 >> 24)) break t;
      h = h + 1 | 0;
      j = j + 1 | 0;
     } while ((h & 3 | 0) != 0);
    }
    k = c[h >> 2] | 0;
    if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
     h = h + 4 | 0;
     l = j + 4 | 0;
     c[j >> 2] = k;
     k = c[h >> 2] | 0;
     if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
      j = l;
      break;
     } else j = l;
    }
    da = 487;
   } else {
    j = f;
    da = 487;
   } while (0);
   do if ((da | 0) == 487) {
    ma = a[h >> 0] | 0;
    a[j >> 0] = ma;
    if (!(ma << 24 >> 24)) break;
    do {
     h = h + 1 | 0;
     j = j + 1 | 0;
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
    } while (ma << 24 >> 24 != 0);
   } while (0);
   zg(c[y >> 2] | 0);
   c[y >> 2] = 0;
  }
  c[y >> 2] = f;
  c[n >> 2] = m;
  j = y;
  h = c[z >> 2] | 0;
 }
 c[z >> 2] = h + 1;
 a[f + h >> 0] = 1;
 a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
 a[A >> 0] = 0;
 c[fa >> 2] = c[d + 410824 >> 2];
 Qf(0, fa);
 if (!(c[ea >> 2] | 0)) {
  h = c[42835] | 0;
  A = h + 76 | 0;
  do {
   ma = a[A >> 0] | 0;
   a[A >> 0] = 1;
  } while ((ma & 1) != 0);
  f = h + 80 | 0;
  do {} while ((c[f >> 2] | 0) > 0);
  y = h + 256 | 0;
  z = h + 264 | 0;
  j = c[z >> 2] | 0;
  n = h + 260 | 0;
  f = c[n >> 2] | 0;
  if ((j + 2 | 0) < (f | 0)) {
   h = y;
   f = c[y >> 2] | 0;
  } else {
   m = f + 128 | 0;
   f = yg(m) | 0;
   h = c[y >> 2] | 0;
   if (!h) a[f >> 0] = 0; else {
    j = h;
    u : do if (!((j ^ f) & 3)) {
     if (!(j & 3)) j = f; else {
      j = f;
      do {
       ma = a[h >> 0] | 0;
       a[j >> 0] = ma;
       if (!(ma << 24 >> 24)) break u;
       h = h + 1 | 0;
       j = j + 1 | 0;
      } while ((h & 3 | 0) != 0);
     }
     k = c[h >> 2] | 0;
     if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
      h = h + 4 | 0;
      l = j + 4 | 0;
      c[j >> 2] = k;
      k = c[h >> 2] | 0;
      if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
       j = l;
       break;
      } else j = l;
     }
     da = 507;
    } else {
     j = f;
     da = 507;
    } while (0);
    do if ((da | 0) == 507) {
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
     if (!(ma << 24 >> 24)) break;
     do {
      h = h + 1 | 0;
      j = j + 1 | 0;
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
     } while (ma << 24 >> 24 != 0);
    } while (0);
    zg(c[y >> 2] | 0);
    c[y >> 2] = 0;
   }
   c[y >> 2] = f;
   c[n >> 2] = m;
   h = y;
   j = c[z >> 2] | 0;
  }
  c[z >> 2] = j + 1;
  a[f + j >> 0] = 27;
  a[(c[h >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
  h = c[z >> 2] | 0;
  f = c[n >> 2] | 0;
  if ((h + 2 | 0) < (f | 0)) {
   j = y;
   f = c[y >> 2] | 0;
  } else {
   m = f + 128 | 0;
   f = yg(m) | 0;
   h = c[y >> 2] | 0;
   if (!h) a[f >> 0] = 0; else {
    j = h;
    v : do if (!((j ^ f) & 3)) {
     if (!(j & 3)) j = f; else {
      j = f;
      do {
       ma = a[h >> 0] | 0;
       a[j >> 0] = ma;
       if (!(ma << 24 >> 24)) break v;
       h = h + 1 | 0;
       j = j + 1 | 0;
      } while ((h & 3 | 0) != 0);
     }
     k = c[h >> 2] | 0;
     if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
      h = h + 4 | 0;
      l = j + 4 | 0;
      c[j >> 2] = k;
      k = c[h >> 2] | 0;
      if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
       j = l;
       break;
      } else j = l;
     }
     da = 522;
    } else {
     j = f;
     da = 522;
    } while (0);
    do if ((da | 0) == 522) {
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
     if (!(ma << 24 >> 24)) break;
     do {
      h = h + 1 | 0;
      j = j + 1 | 0;
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
     } while (ma << 24 >> 24 != 0);
    } while (0);
    zg(c[y >> 2] | 0);
    c[y >> 2] = 0;
   }
   c[y >> 2] = f;
   c[n >> 2] = m;
   j = y;
   h = c[z >> 2] | 0;
  }
  c[z >> 2] = h + 1;
  a[f + h >> 0] = 1;
  a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
  h = c[z >> 2] | 0;
  f = c[n >> 2] | 0;
  if ((h + 2 | 0) < (f | 0)) {
   j = y;
   f = c[y >> 2] | 0;
  } else {
   m = f + 128 | 0;
   f = yg(m) | 0;
   h = c[y >> 2] | 0;
   if (!h) a[f >> 0] = 0; else {
    j = h;
    w : do if (!((j ^ f) & 3)) {
     if (!(j & 3)) j = f; else {
      j = f;
      do {
       ma = a[h >> 0] | 0;
       a[j >> 0] = ma;
       if (!(ma << 24 >> 24)) break w;
       h = h + 1 | 0;
       j = j + 1 | 0;
      } while ((h & 3 | 0) != 0);
     }
     k = c[h >> 2] | 0;
     if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
      h = h + 4 | 0;
      l = j + 4 | 0;
      c[j >> 2] = k;
      k = c[h >> 2] | 0;
      if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
       j = l;
       break;
      } else j = l;
     }
     da = 537;
    } else {
     j = f;
     da = 537;
    } while (0);
    do if ((da | 0) == 537) {
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
     if (!(ma << 24 >> 24)) break;
     do {
      h = h + 1 | 0;
      j = j + 1 | 0;
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
     } while (ma << 24 >> 24 != 0);
    } while (0);
    zg(c[y >> 2] | 0);
    c[y >> 2] = 0;
   }
   c[y >> 2] = f;
   c[n >> 2] = m;
   j = y;
   h = c[z >> 2] | 0;
  }
  c[z >> 2] = h + 1;
  a[f + h >> 0] = 11;
  a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
  h = c[z >> 2] | 0;
  f = c[n >> 2] | 0;
  if ((h + 2 | 0) < (f | 0)) {
   j = y;
   f = c[y >> 2] | 0;
  } else {
   m = f + 128 | 0;
   f = yg(m) | 0;
   h = c[y >> 2] | 0;
   if (!h) a[f >> 0] = 0; else {
    j = h;
    x : do if (!((j ^ f) & 3)) {
     if (!(j & 3)) j = f; else {
      j = f;
      do {
       ma = a[h >> 0] | 0;
       a[j >> 0] = ma;
       if (!(ma << 24 >> 24)) break x;
       h = h + 1 | 0;
       j = j + 1 | 0;
      } while ((h & 3 | 0) != 0);
     }
     k = c[h >> 2] | 0;
     if (!((k & -2139062144 ^ -2139062144) & k + -16843009)) while (1) {
      h = h + 4 | 0;
      l = j + 4 | 0;
      c[j >> 2] = k;
      k = c[h >> 2] | 0;
      if ((k & -2139062144 ^ -2139062144) & k + -16843009 | 0) {
       j = l;
       break;
      } else j = l;
     }
     da = 552;
    } else {
     j = f;
     da = 552;
    } while (0);
    do if ((da | 0) == 552) {
     ma = a[h >> 0] | 0;
     a[j >> 0] = ma;
     if (!(ma << 24 >> 24)) break;
     do {
      h = h + 1 | 0;
      j = j + 1 | 0;
      ma = a[h >> 0] | 0;
      a[j >> 0] = ma;
     } while (ma << 24 >> 24 != 0);
    } while (0);
    zg(c[y >> 2] | 0);
    c[y >> 2] = 0;
   }
   c[y >> 2] = f;
   c[n >> 2] = m;
   j = y;
   h = c[z >> 2] | 0;
  }
  c[z >> 2] = h + 1;
  a[f + h >> 0] = 20;
  a[(c[j >> 2] | 0) + (c[z >> 2] | 0) >> 0] = 0;
  a[A >> 0] = 0;
  g[ga >> 2] = 1.0;
  g[ga + 4 >> 2] = 1.0;
  g[ga + 8 >> 2] = 0.0;
  g[ga + 12 >> 2] = 1.0;
  Tf(c[42835] | 0, ga);
  f = c[42835] | 0;
  k = f + 76 | 0;
  do {
   ma = a[k >> 0] | 0;
   a[k >> 0] = 1;
  } while ((ma & 1) != 0);
  h = f + 80 | 0;
  do {} while ((c[h >> 2] | 0) > 0);
  j = f + 256 | 0;
  y : do if (!3) {
   f = 137075;
   da = 564;
  } else {
   f = 137075;
   h = 137075;
   while (1) {
    if (!(a[f >> 0] | 0)) {
     f = h;
     break y;
    }
    f = f + 1 | 0;
    h = f;
    if (!(h & 3)) {
     da = 564;
     break;
    }
   }
  } while (0);
  if ((da | 0) == 564) {
   while (1) {
    h = c[f >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) f = f + 4 | 0; else break;
   }
   if ((h & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
  }
  ve(j, 137075, 0, f - 137075 | 0);
  a[k >> 0] = 0;
 }
 h = d + 410828 | 0;
 if ((c[h >> 2] | 0) > 0) {
  f = 0;
  j = 0;
  while (1) {
   ma = f + 9 | 0;
   c[d + 16816 + (ma * 24 | 0) >> 2] = 8;
   c[d + 16816 + (ma * 24 | 0) + 4 >> 2] = j;
   c[d + 16816 + (ma * 24 | 0) + 8 >> 2] = 272;
   c[d + 16816 + (ma * 24 | 0) + 12 >> 2] = 16;
   c[d + 16816 + (ma * 24 | 0) + 16 >> 2] = 16;
   c[d + 16816 + (ma * 24 | 0) + 20 >> 2] = 1;
   f = f + 1 | 0;
   if ((f | 0) >= (c[h >> 2] | 0)) break; else j = j + 16 | 0;
  }
  if ((f | 0) < 3) da = 573;
 } else {
  f = 0;
  da = 573;
 }
 if ((da | 0) == 573) while (1) {
  da = 0;
  c[d + 16816 + ((f + 9 | 0) * 24 | 0) >> 2] = 74;
  f = f + 1 | 0;
  if ((f | 0) == 3) break; else da = 573;
 }
 la = d + 40 | 0;
 c[ha >> 2] = 0;
 c[ha + 4 >> 2] = 0;
 c[ha + 8 >> 2] = 0;
 c[ha + 12 >> 2] = 0;
 c[ha + 16 >> 2] = 0;
 c[ha + 20 >> 2] = 0;
 g[ha + 12 >> 2] = 1.0;
 g[ha + 16 >> 2] = 1.0;
 a[ha + 20 >> 0] = 0;
 a[ha + 21 >> 0] = 3;
 k = c[42822] | 0;
 h = k + 116 | 0;
 c[h >> 2] = (c[h >> 2] | 0) + 1;
 h = (c[k + 1592 >> 2] | 0) + (e[la >> 1] | 0) | 0;
 j = c[k + 1584 >> 2] | 0;
 f = j + (h * 776 | 0) | 0;
 ma = f;
 if ((c[la >> 2] | 0) == (c[ma >> 2] | 0) ? (c[la + 4 >> 2] | 0) == (c[ma + 4 >> 2] | 0) : 0) {
  if ((c[j + (h * 776 | 0) + 8 >> 2] | 0) != 3) da = 576;
 } else da = 576;
 if ((da | 0) == 576) f = 0;
 nf(k + 416 | 0, f, ha);
 l = d + 228 | 0;
 f = c[l >> 2] | 0;
 q = 1.0 / +(f | 0);
 m = d + 232 | 0;
 h = c[m >> 2] | 0;
 r = 1.0 / +(h | 0);
 if ((h | 0) > 0) {
  j = f;
  f = 0;
  k = 0;
  do {
   o = r * +(k | 0);
   p = r + o;
   if ((j | 0) > 0) {
    h = 0;
    do {
     v = q * +(h | 0);
     t = q + v;
     ma = c[d + 432 + ((R(j, k) | 0) + h << 2) >> 2] | 0;
     w = +(c[132892 + (ma << 5) + 4 >> 2] | 0) * .0078125;
     s = +(c[132892 + (ma << 5) + 8 >> 2] | 0) * .00390625;
     u = w + +(c[132892 + (ma << 5) + 12 >> 2] | 0) * .0078125;
     x = s + +(c[132892 + (ma << 5) + 16 >> 2] | 0) * .00390625;
     g[d + 17584 + (f << 4) >> 2] = v;
     g[d + 17584 + (f << 4) + 4 >> 2] = o;
     g[d + 17584 + (f << 4) + 8 >> 2] = w;
     g[d + 17584 + (f << 4) + 12 >> 2] = s;
     ma = f + 1 | 0;
     g[d + 17584 + (ma << 4) >> 2] = t;
     g[d + 17584 + (ma << 4) + 4 >> 2] = o;
     g[d + 17584 + (ma << 4) + 8 >> 2] = u;
     g[d + 17584 + (ma << 4) + 12 >> 2] = s;
     ma = f + 2 | 0;
     g[d + 17584 + (ma << 4) >> 2] = t;
     g[d + 17584 + (ma << 4) + 4 >> 2] = p;
     g[d + 17584 + (ma << 4) + 8 >> 2] = u;
     g[d + 17584 + (ma << 4) + 12 >> 2] = x;
     ma = f + 3 | 0;
     g[d + 17584 + (ma << 4) >> 2] = v;
     g[d + 17584 + (ma << 4) + 4 >> 2] = o;
     g[d + 17584 + (ma << 4) + 8 >> 2] = w;
     g[d + 17584 + (ma << 4) + 12 >> 2] = s;
     ma = f + 4 | 0;
     g[d + 17584 + (ma << 4) >> 2] = t;
     g[d + 17584 + (ma << 4) + 4 >> 2] = p;
     g[d + 17584 + (ma << 4) + 8 >> 2] = u;
     g[d + 17584 + (ma << 4) + 12 >> 2] = x;
     ma = f + 5 | 0;
     g[d + 17584 + (ma << 4) >> 2] = v;
     g[d + 17584 + (ma << 4) + 4 >> 2] = p;
     g[d + 17584 + (ma << 4) + 8 >> 2] = w;
     g[d + 17584 + (ma << 4) + 12 >> 2] = x;
     f = f + 6 | 0;
     h = h + 1 | 0;
     j = c[l >> 2] | 0;
    } while ((h | 0) < (j | 0));
    h = c[m >> 2] | 0;
   }
   k = k + 1 | 0;
  } while ((k | 0) < (h | 0));
 } else f = 0;
 w = +(c[d + 244 >> 2] | 0);
 x = +(c[d + 248 >> 2] | 0);
 j = d + 252 | 0;
 if ((c[j >> 2] | 0) > 0) {
  k = 0;
  while (1) {
   h = c[d + 16816 + (k * 24 | 0) >> 2] | 0;
   if ((h | 0) == 74) {
    o = 0.0;
    p = 0.0;
    q = 0.0;
    r = 0.0;
    s = 0.0;
    t = 0.0;
    u = 0.0;
    v = 0.0;
   } else {
    t = +(c[d + 16816 + (k * 24 | 0) + 4 >> 2] | 0) / w;
    v = +(c[d + 16816 + (k * 24 | 0) + 8 >> 2] | 0) / x;
    la = c[132892 + (h << 5) + 12 >> 2] | 0;
    ha = (R(c[d + 16816 + (k * 24 | 0) + 20 >> 2] | 0, la) | 0) + (c[132892 + (h << 5) + 4 >> 2] | 0) | 0;
    p = +((ha | 0) % 128 | 0 | 0) * .0078125;
    ma = c[132892 + (h << 5) + 16 >> 2] | 0;
    r = +((R((ha | 0) / 128 | 0, ma) | 0) + (c[132892 + (h << 5) + 8 >> 2] | 0) | 0) * .00390625;
    o = p;
    p = +(la | 0) * .0078125 + p;
    q = r;
    r = +(ma | 0) * .00390625 + r;
    s = t;
    t = t + +(c[d + 16816 + (k * 24 | 0) + 12 >> 2] | 0) / w;
    u = v;
    v = v + +(c[d + 16816 + (k * 24 | 0) + 16 >> 2] | 0) / x;
   }
   g[d + 17584 + (f << 4) >> 2] = s;
   g[d + 17584 + (f << 4) + 4 >> 2] = u;
   g[d + 17584 + (f << 4) + 8 >> 2] = o;
   g[d + 17584 + (f << 4) + 12 >> 2] = q;
   ma = f + 1 | 0;
   g[d + 17584 + (ma << 4) >> 2] = t;
   g[d + 17584 + (ma << 4) + 4 >> 2] = u;
   g[d + 17584 + (ma << 4) + 8 >> 2] = p;
   g[d + 17584 + (ma << 4) + 12 >> 2] = q;
   ma = f + 2 | 0;
   g[d + 17584 + (ma << 4) >> 2] = t;
   g[d + 17584 + (ma << 4) + 4 >> 2] = v;
   g[d + 17584 + (ma << 4) + 8 >> 2] = p;
   g[d + 17584 + (ma << 4) + 12 >> 2] = r;
   ma = f + 3 | 0;
   g[d + 17584 + (ma << 4) >> 2] = s;
   g[d + 17584 + (ma << 4) + 4 >> 2] = u;
   g[d + 17584 + (ma << 4) + 8 >> 2] = o;
   g[d + 17584 + (ma << 4) + 12 >> 2] = q;
   ma = f + 4 | 0;
   g[d + 17584 + (ma << 4) >> 2] = t;
   g[d + 17584 + (ma << 4) + 4 >> 2] = v;
   g[d + 17584 + (ma << 4) + 8 >> 2] = p;
   g[d + 17584 + (ma << 4) + 12 >> 2] = r;
   ma = f + 5 | 0;
   g[d + 17584 + (ma << 4) >> 2] = s;
   g[d + 17584 + (ma << 4) + 4 >> 2] = v;
   g[d + 17584 + (ma << 4) + 8 >> 2] = o;
   g[d + 17584 + (ma << 4) + 12 >> 2] = r;
   k = k + 1 | 0;
   if ((k | 0) >= (c[j >> 2] | 0)) break; else f = f + 6 | 0;
  }
 }
 Je(d + 272 | 0, d + 17584 | 0, c[d + 256 >> 2] << 4);
 Ie(d + 264 | 0);
 Ke();
 Uf(c[42835] | 0);
 n = d + 216 | 0;
 f = c[42822] | 0;
 x = +(c[f + 296 >> 2] | 0);
 g[n >> 2] = +(c[f + 292 >> 2] | 0);
 g[d + 220 >> 2] = x;
 c[ia >> 2] = 0;
 c[ia + 4 >> 2] = 0;
 c[ia + 8 >> 2] = 0;
 c[ia + 12 >> 2] = 0;
 c[ia + 16 >> 2] = 0;
 c[ia + 20 >> 2] = 0;
 g[ia + 12 >> 2] = 1.0;
 g[ia + 16 >> 2] = 1.0;
 a[ia + 20 >> 0] = 0;
 a[ia + 21 >> 0] = 3;
 k = f + 116 | 0;
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 nf(f + 416 | 0, 0, ia);
 f = c[42822] | 0;
 k = c[f + 292 >> 2] | 0;
 h = c[f + 296 >> 2] | 0;
 c[d + 411424 >> 2] = 0;
 c[d + 411432 >> 2] = h;
 j = ~~(+(h | 0) * .7777777910232544);
 c[d + 411428 >> 2] = j;
 k = (k - j | 0) / 2 | 0;
 c[d + 411420 >> 2] = k;
 l = f + 120 | 0;
 c[l >> 2] = (c[l >> 2] | 0) + 1;
 l = f + 692 | 0;
 m = f + 696 | 0;
 do if ((c[l >> 2] | 0) == (k | 0)) {
  if (c[m >> 2] | 0) break;
  if ((c[f + 700 >> 2] | 0) != (j | 0)) break;
  if ((c[f + 704 >> 2] | 0) != (h | 0)) break;
  f = d + 48 | 0;
  Ie(f);
  f = c[42822] | 0;
  h = f + 132 | 0;
  ma = c[h >> 2] | 0;
  ma = ma + 1 | 0;
  c[h >> 2] = ma;
  f = f + 628 | 0;
  f = c[f >> 2] | 0;
  pf(f, 1, n);
  Ke();
  f = c[42822] | 0;
  h = f + 448 | 0;
  a[h >> 0] = 0;
  h = f + 624 | 0;
  c[h >> 2] = 0;
  h = f + 628 | 0;
  c[h >> 2] = 0;
  h = f + 632 | 0;
  c[h >> 2] = 0;
  h = f + 620 | 0;
  ma = c[h >> 2] | 0;
  ma = ma + 1 | 0;
  c[h >> 2] = ma;
  f = f + 116 | 0;
  h = f + 40 | 0;
  do {
   c[f >> 2] = 0;
   f = f + 4 | 0;
  } while ((f | 0) < (h | 0));
  ma = c[ja >> 2] | 0;
  ma = ma + 1 | 0;
  c[ja >> 2] = ma;
  i = ka;
  return 4;
 } while (0);
 c[l >> 2] = k;
 c[m >> 2] = 0;
 c[f + 700 >> 2] = j;
 c[f + 704 >> 2] = h;
 Ua(k | 0, 0, j | 0, h | 0);
 f = d + 48 | 0;
 Ie(f);
 f = c[42822] | 0;
 h = f + 132 | 0;
 ma = c[h >> 2] | 0;
 ma = ma + 1 | 0;
 c[h >> 2] = ma;
 f = f + 628 | 0;
 f = c[f >> 2] | 0;
 pf(f, 1, n);
 Ke();
 f = c[42822] | 0;
 h = f + 448 | 0;
 a[h >> 0] = 0;
 h = f + 624 | 0;
 c[h >> 2] = 0;
 h = f + 628 | 0;
 c[h >> 2] = 0;
 h = f + 632 | 0;
 c[h >> 2] = 0;
 h = f + 620 | 0;
 ma = c[h >> 2] | 0;
 ma = ma + 1 | 0;
 c[h >> 2] = ma;
 f = f + 116 | 0;
 h = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (h | 0));
 ma = c[ja >> 2] | 0;
 ma = ma + 1 | 0;
 c[ja >> 2] = ma;
 i = ka;
 return 4;
}

function Uf(f) {
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = 0, jb = 0, kb = 0, lb = 0, mb = 0, nb = 0, ob = 0, pb = 0, qb = 0.0, rb = 0.0, sb = 0.0, tb = 0.0, ub = 0.0, vb = 0.0;
 pb = i;
 i = i + 5296 | 0;
 nb = pb + 5048 | 0;
 jb = pb + 5040 | 0;
 ob = pb + 4712 | 0;
 ib = pb + 4024 | 0;
 gb = pb + 3336 | 0;
 za = pb + 5284 | 0;
 ya = pb + 5280 | 0;
 Va = pb + 5276 | 0;
 Ua = pb + 5272 | 0;
 Ya = pb + 5268 | 0;
 Xa = pb + 5264 | 0;
 $a = pb + 3064 | 0;
 Za = pb + 5260 | 0;
 _a = pb + 5256 | 0;
 db = pb + 5060 | 0;
 ab = pb + 5056 | 0;
 bb = pb + 5052 | 0;
 eb = pb + 3056 | 0;
 cb = pb + 8 | 0;
 fb = pb;
 hb = f + 268 | 0;
 if (!(a[hb >> 0] | 0)) {
  l = c[42822] | 0;
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
    j = yg(p << 2) | 0;
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
    if (k | 0) zg(k);
    c[r >> 2] = j;
    c[q >> 2] = p;
    c[o >> 2] = 0;
    c[t >> 2] = h;
   }
  } else h = j;
  c[t >> 2] = h + 1;
  c[(c[r >> 2] | 0) + (h << 2) >> 2] = s;
  c[f + 272 >> 2] = s;
  Wa = f + 8 | 0;
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
  c[ib >> 2] = -1;
  y = ib + 4 | 0;
  c[y >> 2] = -1;
  a[ib + 10 >> 0] = 17;
  a[ib + 11 >> 0] = 13;
  z = ib + 12 | 0;
  a[z >> 0] = 17;
  a[ib + 13 >> 0] = 13;
  A = ib + 14 | 0;
  a[A >> 0] = 17;
  a[ib + 15 >> 0] = 13;
  B = ib + 16 | 0;
  a[B >> 0] = 17;
  a[ib + 17 >> 0] = 13;
  D = ib + 18 | 0;
  a[D >> 0] = 17;
  a[ib + 19 >> 0] = 13;
  E = ib + 20 | 0;
  a[E >> 0] = 17;
  a[ib + 21 >> 0] = 13;
  F = ib + 22 | 0;
  a[F >> 0] = 17;
  a[ib + 23 >> 0] = 13;
  G = ib + 24 | 0;
  a[G >> 0] = 17;
  a[ib + 25 >> 0] = 13;
  H = ib + 26 | 0;
  a[H >> 0] = 17;
  a[ib + 27 >> 0] = 13;
  I = ib + 28 | 0;
  a[I >> 0] = 17;
  a[ib + 29 >> 0] = 13;
  h = ib + 30 | 0;
  a[h >> 0] = 17;
  a[ib + 31 >> 0] = 13;
  j = ib + 32 | 0;
  a[j >> 0] = 17;
  a[ib + 33 >> 0] = 13;
  k = ib + 34 | 0;
  a[k >> 0] = 17;
  a[ib + 35 >> 0] = 13;
  l = ib + 36 | 0;
  a[l >> 0] = 17;
  a[ib + 37 >> 0] = 13;
  m = ib + 38 | 0;
  a[m >> 0] = 17;
  a[ib + 39 >> 0] = 13;
  n = ib + 40 | 0;
  a[n >> 0] = 17;
  a[ib + 41 >> 0] = 13;
  a[ib + 8 >> 0] = 0;
  a[ib + 9 >> 0] = 1;
  o = ib + 74 | 0;
  a[o >> 0] = 0;
  a[ib + 75 >> 0] = 0;
  p = ib + 58 | 0;
  q = ib + 42 | 0;
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
  r = ib + 76 | 0;
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  a[r + 12 >> 0] = 0;
  c[ob >> 2] = 0;
  ue(ib + 92 | 0, ob);
  c[ib + 96 >> 2] = -1;
  s = ib + 104 | 0;
  c[s >> 2] = -1;
  c[s + 4 >> 2] = -1;
  s = ib + 112 | 0;
  t = ib + 116 | 0;
  u = ib + 188 | 0;
  J = ib + 120 | 0;
  K = J + 68 | 0;
  do {
   c[J >> 2] = 0;
   J = J + 4 | 0;
  } while ((J | 0) < (K | 0));
  a[u >> 0] = a[u >> 0] & -16 | 4;
  c[ib >> 2] = 2;
  c[y >> 2] = -1;
  c[r >> 2] = 57600;
  c[ib + 80 >> 2] = 0;
  c[ib + 84 >> 2] = 0;
  c[s >> 2] = -1;
  c[t >> 2] = -1;
  b[ib + 8 >> 1] = d[Wa >> 0] | d[Wa + 1 >> 0] << 8;
  Ta = f + 10 | 0;
  b[ib + 10 >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 12 | 0;
  b[z >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 14 | 0;
  b[A >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 16 | 0;
  b[B >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 18 | 0;
  b[D >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 20 | 0;
  b[E >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 22 | 0;
  b[F >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 24 | 0;
  b[G >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 26 | 0;
  b[H >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 28 | 0;
  b[I >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
  Ta = f + 30 | 0;
  b[h >> 1] = d[Ta >> 0] | d[Ta + 1 >> 0] << 8;
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
  a[ib + 43 >> 0] = a[f + 43 >> 0] | 0;
  a[ib + 44 >> 0] = a[f + 44 >> 0] | 0;
  a[ib + 45 >> 0] = a[f + 45 >> 0] | 0;
  a[ib + 46 >> 0] = a[f + 46 >> 0] | 0;
  a[ib + 47 >> 0] = a[f + 47 >> 0] | 0;
  a[ib + 48 >> 0] = a[f + 48 >> 0] | 0;
  a[ib + 49 >> 0] = a[f + 49 >> 0] | 0;
  a[ib + 50 >> 0] = a[f + 50 >> 0] | 0;
  a[ib + 51 >> 0] = a[f + 51 >> 0] | 0;
  a[ib + 52 >> 0] = a[f + 52 >> 0] | 0;
  a[ib + 53 >> 0] = a[f + 53 >> 0] | 0;
  a[ib + 54 >> 0] = a[f + 54 >> 0] | 0;
  a[ib + 55 >> 0] = a[f + 55 >> 0] | 0;
  a[ib + 56 >> 0] = a[f + 56 >> 0] | 0;
  a[ib + 57 >> 0] = a[f + 57 >> 0] | 0;
  a[p >> 0] = a[w >> 0] | 0;
  a[ib + 59 >> 0] = a[f + 59 >> 0] | 0;
  a[ib + 60 >> 0] = a[f + 60 >> 0] | 0;
  a[ib + 61 >> 0] = a[f + 61 >> 0] | 0;
  a[ib + 62 >> 0] = a[f + 62 >> 0] | 0;
  a[ib + 63 >> 0] = a[f + 63 >> 0] | 0;
  a[ib + 64 >> 0] = a[f + 64 >> 0] | 0;
  a[ib + 65 >> 0] = a[f + 65 >> 0] | 0;
  a[ib + 66 >> 0] = a[f + 66 >> 0] | 0;
  a[ib + 67 >> 0] = a[f + 67 >> 0] | 0;
  a[ib + 68 >> 0] = a[x >> 0] | 0;
  a[ib + 69 >> 0] = a[f + 69 >> 0] | 0;
  a[ib + 70 >> 0] = a[f + 70 >> 0] | 0;
  a[ib + 71 >> 0] = a[f + 71 >> 0] | 0;
  a[ib + 72 >> 0] = a[f + 72 >> 0] | 0;
  a[ib + 73 >> 0] = a[f + 73 >> 0] | 0;
  b[o >> 1] = d[v >> 0] | d[v + 1 >> 0] << 8;
  h = f + 96 | 0;
  _e(gb, (c[42822] | 0) + 1168 | 0, ib);
  if ((h | 0) != (gb | 0)) {
   Ra = gb;
   Sa = c[Ra + 4 >> 2] | 0;
   Ta = h;
   c[Ta >> 2] = c[Ra >> 2];
   c[Ta + 4 >> 2] = Sa;
  }
  te(ib, 155773);
  c[ib + 4 >> 2] = -2;
  hf(cb, ib);
  c[ib >> 2] = 0;
  Aa = gb + 4 | 0;
  Ba = gb + 6 | 0;
  a[Ba >> 0] = 17;
  a[gb + 7 >> 0] = 13;
  Ca = gb + 8 | 0;
  a[Ca >> 0] = 17;
  a[gb + 9 >> 0] = 13;
  Da = gb + 10 | 0;
  a[Da >> 0] = 17;
  a[gb + 11 >> 0] = 13;
  Ea = gb + 12 | 0;
  a[Ea >> 0] = 17;
  a[gb + 13 >> 0] = 13;
  Fa = gb + 14 | 0;
  a[Fa >> 0] = 17;
  a[gb + 15 >> 0] = 13;
  Ga = gb + 16 | 0;
  a[Ga >> 0] = 17;
  a[gb + 17 >> 0] = 13;
  Ha = gb + 18 | 0;
  a[Ha >> 0] = 17;
  a[gb + 19 >> 0] = 13;
  Ia = gb + 20 | 0;
  a[Ia >> 0] = 17;
  a[gb + 21 >> 0] = 13;
  Ja = gb + 22 | 0;
  a[Ja >> 0] = 17;
  a[gb + 23 >> 0] = 13;
  Ka = gb + 24 | 0;
  a[Ka >> 0] = 17;
  a[gb + 25 >> 0] = 13;
  La = gb + 26 | 0;
  a[La >> 0] = 17;
  a[gb + 27 >> 0] = 13;
  Ma = gb + 28 | 0;
  a[Ma >> 0] = 17;
  a[gb + 29 >> 0] = 13;
  Na = gb + 30 | 0;
  a[Na >> 0] = 17;
  a[gb + 31 >> 0] = 13;
  Oa = gb + 32 | 0;
  a[Oa >> 0] = 17;
  a[gb + 33 >> 0] = 13;
  a[gb >> 0] = 0;
  a[gb + 1 >> 0] = 1;
  Pa = gb + 66 | 0;
  Ra = gb + 50 | 0;
  Sa = gb + 34 | 0;
  b[Ra >> 1] = 65535;
  b[Ra + 2 >> 1] = 65535;
  b[Ra + 4 >> 1] = 65535;
  b[Ra + 6 >> 1] = 65535;
  b[Ra + 8 >> 1] = 65535;
  b[Ra + 10 >> 1] = 65535;
  b[Ra + 12 >> 1] = 65535;
  b[Ra + 14 >> 1] = 65535;
  b[Sa >> 1] = 0;
  b[Sa + 2 >> 1] = 0;
  b[Sa + 4 >> 1] = 0;
  b[Sa + 6 >> 1] = 0;
  b[Sa + 8 >> 1] = 0;
  b[Sa + 10 >> 1] = 0;
  b[Sa + 12 >> 1] = 0;
  b[Sa + 14 >> 1] = 0;
  b[gb + 2 >> 1] = 768;
  a[Ra >> 0] = 0;
  a[Sa >> 0] = 0;
  b[gb + 4 >> 1] = 778;
  Ta = gb + 60 | 0;
  a[Ta >> 0] = 1;
  a[gb + 35 >> 0] = 16;
  a[gb + 67 >> 0] = 32;
  a[Pa >> 0] = 2;
  a : do if (!2) {
   h = 152862;
   kb = 17;
  } else {
   h = 152862;
   j = 152862;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break a;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     kb = 17;
     break;
    }
   }
  } while (0);
  if ((kb | 0) == 17) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 152862 | 0;
  if ((h | 0) > 0) {
   l = yg(h + 9 | 0) | 0;
   xa = l;
   c[xa >> 2] = 0;
   c[xa + 4 >> 2] = 0;
   c[l >> 2] = 0;
   c[l >> 2] = (c[l >> 2] | 0) + 1;
   c[l + 4 >> 2] = h;
   xa = l + 8 | 0;
   c[za >> 2] = xa;
   Rg(xa | 0, 152862, h | 0) | 0;
   a[xa + h >> 0] = 0;
  } else {
   c[za >> 2] = 0;
   l = 0;
  }
  b : do if (!2) {
   h = 153442;
   kb = 28;
  } else {
   h = 153442;
   j = 153442;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break b;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     kb = 28;
     break;
    }
   }
  } while (0);
  if ((kb | 0) == 28) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 153442 | 0;
  if ((h | 0) > 0) {
   k = yg(h + 9 | 0) | 0;
   xa = k;
   c[xa >> 2] = 0;
   c[xa + 4 >> 2] = 0;
   c[k >> 2] = 0;
   c[k >> 2] = (c[k >> 2] | 0) + 1;
   c[k + 4 >> 2] = h;
   xa = k + 8 | 0;
   c[ya >> 2] = xa;
   Rg(xa | 0, 153442, h | 0) | 0;
   a[xa + h >> 0] = 0;
  } else {
   c[ya >> 2] = 0;
   k = 0;
  }
  j = cb + 16 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   xa = c[h >> 2] | 0;
   c[h >> 2] = xa - 1;
   if ((xa | 0) == 1) {
    zg(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = cb + 20 | 0;
    c[h >> 2] = 0;
   } else h = cb + 20 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = l;
  c[cb + 20 >> 2] = c[za >> 2];
  if (l | 0) {
   xa = l;
   c[xa >> 2] = (c[xa >> 2] | 0) + 1;
  }
  j = cb + 56 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   xa = c[h >> 2] | 0;
   c[h >> 2] = xa - 1;
   if ((xa | 0) == 1) {
    zg(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = cb + 60 | 0;
    c[h >> 2] = 0;
   } else h = cb + 60 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = k;
  c[cb + 60 >> 2] = c[ya >> 2];
  h = k;
  if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
  m = cb + 256 | 0;
  b[m >> 1] = b[gb >> 1] | 0;
  n = cb + 258 | 0;
  o = gb + 2 | 0;
  b[n >> 1] = b[o >> 1] | 0;
  p = cb + 260 | 0;
  b[p >> 1] = b[Aa >> 1] | 0;
  q = cb + 262 | 0;
  b[q >> 1] = b[Ba >> 1] | 0;
  r = cb + 264 | 0;
  b[r >> 1] = b[Ca >> 1] | 0;
  s = cb + 266 | 0;
  b[s >> 1] = b[Da >> 1] | 0;
  t = cb + 268 | 0;
  b[t >> 1] = b[Ea >> 1] | 0;
  u = cb + 270 | 0;
  b[u >> 1] = b[Fa >> 1] | 0;
  v = cb + 272 | 0;
  b[v >> 1] = b[Ga >> 1] | 0;
  w = cb + 274 | 0;
  b[w >> 1] = b[Ha >> 1] | 0;
  x = cb + 276 | 0;
  b[x >> 1] = b[Ia >> 1] | 0;
  y = cb + 278 | 0;
  b[y >> 1] = b[Ja >> 1] | 0;
  z = cb + 280 | 0;
  b[z >> 1] = b[Ka >> 1] | 0;
  A = cb + 282 | 0;
  b[A >> 1] = b[La >> 1] | 0;
  B = cb + 284 | 0;
  b[B >> 1] = b[Ma >> 1] | 0;
  D = cb + 286 | 0;
  b[D >> 1] = b[Na >> 1] | 0;
  E = cb + 288 | 0;
  b[E >> 1] = b[Oa >> 1] | 0;
  H = b[Sa >> 1] | 0;
  F = cb + 290 | 0;
  a[F >> 0] = H;
  G = cb + 291 | 0;
  a[G >> 0] = (H & 65535) >>> 8;
  H = gb + 36 | 0;
  K = b[H >> 1] | 0;
  I = cb + 292 | 0;
  a[I >> 0] = K;
  J = cb + 293 | 0;
  a[J >> 0] = (K & 65535) >>> 8;
  K = gb + 38 | 0;
  N = b[K >> 1] | 0;
  L = cb + 294 | 0;
  a[L >> 0] = N;
  M = cb + 295 | 0;
  a[M >> 0] = (N & 65535) >>> 8;
  N = gb + 40 | 0;
  Q = b[N >> 1] | 0;
  O = cb + 296 | 0;
  a[O >> 0] = Q;
  P = cb + 297 | 0;
  a[P >> 0] = (Q & 65535) >>> 8;
  Q = gb + 42 | 0;
  U = b[Q >> 1] | 0;
  S = cb + 298 | 0;
  a[S >> 0] = U;
  T = cb + 299 | 0;
  a[T >> 0] = (U & 65535) >>> 8;
  U = gb + 44 | 0;
  X = b[U >> 1] | 0;
  V = cb + 300 | 0;
  a[V >> 0] = X;
  W = cb + 301 | 0;
  a[W >> 0] = (X & 65535) >>> 8;
  X = gb + 46 | 0;
  _ = b[X >> 1] | 0;
  Y = cb + 302 | 0;
  a[Y >> 0] = _;
  Z = cb + 303 | 0;
  a[Z >> 0] = (_ & 65535) >>> 8;
  _ = gb + 48 | 0;
  da = b[_ >> 1] | 0;
  $ = cb + 304 | 0;
  a[$ >> 0] = da;
  aa = cb + 305 | 0;
  a[aa >> 0] = (da & 65535) >>> 8;
  da = b[Ra >> 1] | 0;
  ba = cb + 306 | 0;
  a[ba >> 0] = da;
  ca = cb + 307 | 0;
  a[ca >> 0] = (da & 65535) >>> 8;
  da = gb + 52 | 0;
  ga = b[da >> 1] | 0;
  ea = cb + 308 | 0;
  a[ea >> 0] = ga;
  fa = cb + 309 | 0;
  a[fa >> 0] = (ga & 65535) >>> 8;
  ga = gb + 54 | 0;
  ja = b[ga >> 1] | 0;
  ha = cb + 310 | 0;
  a[ha >> 0] = ja;
  ia = cb + 311 | 0;
  a[ia >> 0] = (ja & 65535) >>> 8;
  ja = gb + 56 | 0;
  ma = b[ja >> 1] | 0;
  ka = cb + 312 | 0;
  a[ka >> 0] = ma;
  la = cb + 313 | 0;
  a[la >> 0] = (ma & 65535) >>> 8;
  ma = gb + 58 | 0;
  ra = b[ma >> 1] | 0;
  na = cb + 314 | 0;
  a[na >> 0] = ra;
  oa = cb + 315 | 0;
  a[oa >> 0] = (ra & 65535) >>> 8;
  ra = b[Ta >> 1] | 0;
  pa = cb + 316 | 0;
  a[pa >> 0] = ra;
  qa = cb + 317 | 0;
  a[qa >> 0] = (ra & 65535) >>> 8;
  ra = gb + 62 | 0;
  ua = b[ra >> 1] | 0;
  sa = cb + 318 | 0;
  a[sa >> 0] = ua;
  ta = cb + 319 | 0;
  a[ta >> 0] = (ua & 65535) >>> 8;
  ua = gb + 64 | 0;
  xa = b[ua >> 1] | 0;
  va = cb + 320 | 0;
  a[va >> 0] = xa;
  wa = cb + 321 | 0;
  a[wa >> 0] = (xa & 65535) >>> 8;
  xa = cb + 322 | 0;
  b[xa >> 1] = b[Pa >> 1] | 0;
  if (k | 0) {
   j = c[h >> 2] | 0;
   c[h >> 2] = j - 1;
   if ((j | 0) == 1) {
    zg(k);
    c[ya >> 2] = 0;
   }
   c[ya >> 2] = 0;
  }
  if (l | 0) {
   k = l;
   ya = c[k >> 2] | 0;
   c[k >> 2] = ya - 1;
   if ((ya | 0) == 1) {
    zg(l);
    c[za >> 2] = 0;
   }
   c[za >> 2] = 0;
  }
  c : do if (!2) {
   h = 153842;
   kb = 61;
  } else {
   h = 153842;
   j = 153842;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break c;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     kb = 61;
     break;
    }
   }
  } while (0);
  if ((kb | 0) == 61) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 153842 | 0;
  if ((h | 0) > 0) {
   l = yg(h + 9 | 0) | 0;
   za = l;
   c[za >> 2] = 0;
   c[za + 4 >> 2] = 0;
   c[l >> 2] = 0;
   c[l >> 2] = (c[l >> 2] | 0) + 1;
   c[l + 4 >> 2] = h;
   za = l + 8 | 0;
   c[Va >> 2] = za;
   Rg(za | 0, 153842, h | 0) | 0;
   a[za + h >> 0] = 0;
  } else {
   c[Va >> 2] = 0;
   l = 0;
  }
  d : do if (!3) {
   h = 154435;
   kb = 72;
  } else {
   h = 154435;
   j = 154435;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break d;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     kb = 72;
     break;
    }
   }
  } while (0);
  if ((kb | 0) == 72) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 154435 | 0;
  if ((h | 0) > 0) {
   k = yg(h + 9 | 0) | 0;
   za = k;
   c[za >> 2] = 0;
   c[za + 4 >> 2] = 0;
   c[k >> 2] = 0;
   c[k >> 2] = (c[k >> 2] | 0) + 1;
   c[k + 4 >> 2] = h;
   za = k + 8 | 0;
   c[Ua >> 2] = za;
   Rg(za | 0, 154435, h | 0) | 0;
   a[za + h >> 0] = 0;
  } else {
   c[Ua >> 2] = 0;
   k = 0;
  }
  j = cb + 24 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   za = c[h >> 2] | 0;
   c[h >> 2] = za - 1;
   if ((za | 0) == 1) {
    zg(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = cb + 28 | 0;
    c[h >> 2] = 0;
   } else h = cb + 28 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = l;
  c[cb + 28 >> 2] = c[Va >> 2];
  if (l | 0) {
   za = l;
   c[za >> 2] = (c[za >> 2] | 0) + 1;
  }
  j = cb + 64 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   za = c[h >> 2] | 0;
   c[h >> 2] = za - 1;
   if ((za | 0) == 1) {
    zg(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = cb + 68 | 0;
    c[h >> 2] = 0;
   } else h = cb + 68 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = k;
  c[cb + 68 >> 2] = c[Ua >> 2];
  h = k;
  if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
  b[m >> 1] = b[gb >> 1] | 0;
  b[n >> 1] = b[o >> 1] | 0;
  b[p >> 1] = b[Aa >> 1] | 0;
  b[q >> 1] = b[Ba >> 1] | 0;
  b[r >> 1] = b[Ca >> 1] | 0;
  b[s >> 1] = b[Da >> 1] | 0;
  b[t >> 1] = b[Ea >> 1] | 0;
  b[u >> 1] = b[Fa >> 1] | 0;
  b[v >> 1] = b[Ga >> 1] | 0;
  b[w >> 1] = b[Ha >> 1] | 0;
  b[x >> 1] = b[Ia >> 1] | 0;
  b[y >> 1] = b[Ja >> 1] | 0;
  b[z >> 1] = b[Ka >> 1] | 0;
  b[A >> 1] = b[La >> 1] | 0;
  b[B >> 1] = b[Ma >> 1] | 0;
  b[D >> 1] = b[Na >> 1] | 0;
  b[E >> 1] = b[Oa >> 1] | 0;
  za = b[Sa >> 1] | 0;
  a[F >> 0] = za;
  a[G >> 0] = (za & 65535) >>> 8;
  za = b[H >> 1] | 0;
  a[I >> 0] = za;
  a[J >> 0] = (za & 65535) >>> 8;
  za = b[K >> 1] | 0;
  a[L >> 0] = za;
  a[M >> 0] = (za & 65535) >>> 8;
  za = b[N >> 1] | 0;
  a[O >> 0] = za;
  a[P >> 0] = (za & 65535) >>> 8;
  za = b[Q >> 1] | 0;
  a[S >> 0] = za;
  a[T >> 0] = (za & 65535) >>> 8;
  za = b[U >> 1] | 0;
  a[V >> 0] = za;
  a[W >> 0] = (za & 65535) >>> 8;
  za = b[X >> 1] | 0;
  a[Y >> 0] = za;
  a[Z >> 0] = (za & 65535) >>> 8;
  za = b[_ >> 1] | 0;
  a[$ >> 0] = za;
  a[aa >> 0] = (za & 65535) >>> 8;
  za = b[Ra >> 1] | 0;
  a[ba >> 0] = za;
  a[ca >> 0] = (za & 65535) >>> 8;
  za = b[da >> 1] | 0;
  a[ea >> 0] = za;
  a[fa >> 0] = (za & 65535) >>> 8;
  za = b[ga >> 1] | 0;
  a[ha >> 0] = za;
  a[ia >> 0] = (za & 65535) >>> 8;
  za = b[ja >> 1] | 0;
  a[ka >> 0] = za;
  a[la >> 0] = (za & 65535) >>> 8;
  za = b[ma >> 1] | 0;
  a[na >> 0] = za;
  a[oa >> 0] = (za & 65535) >>> 8;
  za = b[Ta >> 1] | 0;
  a[pa >> 0] = za;
  a[qa >> 0] = (za & 65535) >>> 8;
  za = b[ra >> 1] | 0;
  a[sa >> 0] = za;
  a[ta >> 0] = (za & 65535) >>> 8;
  za = b[ua >> 1] | 0;
  a[va >> 0] = za;
  a[wa >> 0] = (za & 65535) >>> 8;
  b[xa >> 1] = b[Pa >> 1] | 0;
  if (k | 0) {
   za = c[h >> 2] | 0;
   c[h >> 2] = za - 1;
   if ((za | 0) == 1) {
    zg(k);
    c[Ua >> 2] = 0;
   }
   c[Ua >> 2] = 0;
  }
  if (l | 0) {
   za = l;
   Ua = c[za >> 2] | 0;
   c[za >> 2] = Ua - 1;
   if ((Ua | 0) == 1) {
    zg(l);
    c[Va >> 2] = 0;
   }
   c[Va >> 2] = 0;
  }
  e : do if (!3) {
   h = 154823;
   kb = 105;
  } else {
   h = 154823;
   j = 154823;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break e;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     kb = 105;
     break;
    }
   }
  } while (0);
  if ((kb | 0) == 105) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 154823 | 0;
  if ((h | 0) > 0) {
   l = yg(h + 9 | 0) | 0;
   Va = l;
   c[Va >> 2] = 0;
   c[Va + 4 >> 2] = 0;
   c[l >> 2] = 0;
   c[l >> 2] = (c[l >> 2] | 0) + 1;
   c[l + 4 >> 2] = h;
   Va = l + 8 | 0;
   c[Ya >> 2] = Va;
   Rg(Va | 0, 154823, h | 0) | 0;
   a[Va + h >> 0] = 0;
  } else {
   c[Ya >> 2] = 0;
   l = 0;
  }
  f : do if (!0) {
   h = 155384;
   kb = 116;
  } else {
   h = 155384;
   j = 155384;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break f;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     kb = 116;
     break;
    }
   }
  } while (0);
  if ((kb | 0) == 116) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  h = h - 155384 | 0;
  if ((h | 0) > 0) {
   k = yg(h + 9 | 0) | 0;
   Va = k;
   c[Va >> 2] = 0;
   c[Va + 4 >> 2] = 0;
   c[k >> 2] = 0;
   c[k >> 2] = (c[k >> 2] | 0) + 1;
   c[k + 4 >> 2] = h;
   Va = k + 8 | 0;
   c[Xa >> 2] = Va;
   Rg(Va | 0, 155384, h | 0) | 0;
   a[Va + h >> 0] = 0;
  } else {
   c[Xa >> 2] = 0;
   k = 0;
  }
  j = cb + 32 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   Va = c[h >> 2] | 0;
   c[h >> 2] = Va - 1;
   if ((Va | 0) == 1) {
    zg(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = cb + 36 | 0;
    c[h >> 2] = 0;
   } else h = cb + 36 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = l;
  c[cb + 36 >> 2] = c[Ya >> 2];
  if (l | 0) {
   Va = l;
   c[Va >> 2] = (c[Va >> 2] | 0) + 1;
  }
  j = cb + 72 | 0;
  h = c[j >> 2] | 0;
  if (h | 0) {
   Va = c[h >> 2] | 0;
   c[h >> 2] = Va - 1;
   if ((Va | 0) == 1) {
    zg(c[j >> 2] | 0);
    c[j >> 2] = 0;
    h = cb + 76 | 0;
    c[h >> 2] = 0;
   } else h = cb + 76 | 0;
   c[j >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[j >> 2] = k;
  c[cb + 76 >> 2] = c[Xa >> 2];
  h = k;
  if (k | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
  b[m >> 1] = b[gb >> 1] | 0;
  b[n >> 1] = b[o >> 1] | 0;
  b[p >> 1] = b[Aa >> 1] | 0;
  b[q >> 1] = b[Ba >> 1] | 0;
  b[r >> 1] = b[Ca >> 1] | 0;
  b[s >> 1] = b[Da >> 1] | 0;
  b[t >> 1] = b[Ea >> 1] | 0;
  b[u >> 1] = b[Fa >> 1] | 0;
  b[v >> 1] = b[Ga >> 1] | 0;
  b[w >> 1] = b[Ha >> 1] | 0;
  b[x >> 1] = b[Ia >> 1] | 0;
  b[y >> 1] = b[Ja >> 1] | 0;
  b[z >> 1] = b[Ka >> 1] | 0;
  b[A >> 1] = b[La >> 1] | 0;
  b[B >> 1] = b[Ma >> 1] | 0;
  b[D >> 1] = b[Na >> 1] | 0;
  b[E >> 1] = b[Oa >> 1] | 0;
  Va = b[Sa >> 1] | 0;
  a[F >> 0] = Va;
  a[G >> 0] = (Va & 65535) >>> 8;
  Va = b[H >> 1] | 0;
  a[I >> 0] = Va;
  a[J >> 0] = (Va & 65535) >>> 8;
  Va = b[K >> 1] | 0;
  a[L >> 0] = Va;
  a[M >> 0] = (Va & 65535) >>> 8;
  Va = b[N >> 1] | 0;
  a[O >> 0] = Va;
  a[P >> 0] = (Va & 65535) >>> 8;
  Va = b[Q >> 1] | 0;
  a[S >> 0] = Va;
  a[T >> 0] = (Va & 65535) >>> 8;
  Va = b[U >> 1] | 0;
  a[V >> 0] = Va;
  a[W >> 0] = (Va & 65535) >>> 8;
  Va = b[X >> 1] | 0;
  a[Y >> 0] = Va;
  a[Z >> 0] = (Va & 65535) >>> 8;
  Va = b[_ >> 1] | 0;
  a[$ >> 0] = Va;
  a[aa >> 0] = (Va & 65535) >>> 8;
  Va = b[Ra >> 1] | 0;
  a[ba >> 0] = Va;
  a[ca >> 0] = (Va & 65535) >>> 8;
  Va = b[da >> 1] | 0;
  a[ea >> 0] = Va;
  a[fa >> 0] = (Va & 65535) >>> 8;
  Va = b[ga >> 1] | 0;
  a[ha >> 0] = Va;
  a[ia >> 0] = (Va & 65535) >>> 8;
  Va = b[ja >> 1] | 0;
  a[ka >> 0] = Va;
  a[la >> 0] = (Va & 65535) >>> 8;
  Va = b[ma >> 1] | 0;
  a[na >> 0] = Va;
  a[oa >> 0] = (Va & 65535) >>> 8;
  Va = b[Ta >> 1] | 0;
  a[pa >> 0] = Va;
  a[qa >> 0] = (Va & 65535) >>> 8;
  Va = b[ra >> 1] | 0;
  a[sa >> 0] = Va;
  a[ta >> 0] = (Va & 65535) >>> 8;
  Va = b[ua >> 1] | 0;
  a[va >> 0] = Va;
  a[wa >> 0] = (Va & 65535) >>> 8;
  b[xa >> 1] = b[Pa >> 1] | 0;
  if (k | 0) {
   Va = c[h >> 2] | 0;
   c[h >> 2] = Va - 1;
   if ((Va | 0) == 1) {
    zg(k);
    c[Xa >> 2] = 0;
   }
   c[Xa >> 2] = 0;
  }
  if (l | 0) {
   Va = l;
   Xa = c[Va >> 2] | 0;
   c[Va >> 2] = Xa - 1;
   if ((Xa | 0) == 1) {
    zg(l);
    c[Ya >> 2] = 0;
   }
   c[Ya >> 2] = 0;
  }
  c[$a >> 2] = 0;
  c[$a + 4 >> 2] = 0;
  c[$a + 8 >> 2] = 0;
  c[$a + 12 >> 2] = 0;
  c[$a + 16 >> 2] = 0;
  a[$a + 20 >> 0] = 10;
  c[$a + 24 >> 2] = 1;
  c[$a + 28 >> 2] = 0;
  a[$a + 32 >> 0] = 10;
  c[$a + 36 >> 2] = 1;
  c[$a + 40 >> 2] = 0;
  a[$a + 44 >> 0] = 10;
  c[$a + 48 >> 2] = 1;
  c[$a + 52 >> 2] = 0;
  a[$a + 56 >> 0] = 10;
  c[$a + 60 >> 2] = 1;
  c[$a + 64 >> 2] = 0;
  a[$a + 68 >> 0] = 10;
  c[$a + 72 >> 2] = 1;
  c[$a + 76 >> 2] = 0;
  a[$a + 80 >> 0] = 10;
  c[$a + 84 >> 2] = 1;
  c[$a + 88 >> 2] = 0;
  a[$a + 92 >> 0] = 10;
  c[$a + 96 >> 2] = 1;
  c[$a + 100 >> 2] = 0;
  a[$a + 104 >> 0] = 10;
  c[$a + 108 >> 2] = 1;
  c[$a + 112 >> 2] = 0;
  a[$a + 116 >> 0] = 10;
  c[$a + 120 >> 2] = 1;
  c[$a + 124 >> 2] = 0;
  a[$a + 128 >> 0] = 10;
  c[$a + 132 >> 2] = 1;
  c[$a + 136 >> 2] = 0;
  a[$a + 140 >> 0] = 10;
  c[$a + 144 >> 2] = 1;
  c[$a + 148 >> 2] = 0;
  a[$a + 152 >> 0] = 10;
  c[$a + 156 >> 2] = 1;
  c[$a + 160 >> 2] = 0;
  a[$a + 164 >> 0] = 10;
  c[$a + 168 >> 2] = 1;
  c[$a + 172 >> 2] = 0;
  a[$a + 176 >> 0] = 10;
  c[$a + 180 >> 2] = 1;
  c[$a + 184 >> 2] = 0;
  a[$a + 188 >> 0] = 10;
  c[$a + 192 >> 2] = 1;
  c[$a + 196 >> 2] = 0;
  a[$a + 200 >> 0] = 10;
  c[$a + 204 >> 2] = 1;
  h = $a;
  c[h >> 2] = 2124503556;
  c[h + 4 >> 2] = -923214409;
  te(Za, 155787);
  Le($a, Za);
  c[Za >> 2] = 0;
  te(_a, 155797);
  jf(cb, _a, $a, 0);
  c[_a >> 2] = 0;
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
  te(ab, 155806);
  h = c[db >> 2] | 0;
  c[db >> 2] = h + 1;
  j = db + 4 + (h * 12 | 0) | 0;
  ue(ob, ab);
  k = ob + 4 | 0;
  c[k >> 2] = 0;
  c[ob + 8 >> 2] = 0;
  if ((ob | 0) != (j | 0)) {
   c[j >> 2] = 0;
   ue(j, ob);
   c[ob >> 2] = 0;
  }
  $a = k;
  j = c[$a + 4 >> 2] | 0;
  h = db + 4 + (h * 12 | 0) + 4 | 0;
  c[h >> 2] = c[$a >> 2];
  c[h + 4 >> 2] = j;
  c[ab >> 2] = 0;
  te(bb, 155810);
  h = cb + 2632 | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = j + 1;
  h = cb + 2636 + (j * 204 | 0) | 0;
  if ((h | 0) != (bb | 0)) {
   c[h >> 2] = 0;
   ue(h, bb);
  }
  bb = cb + 2636 + (j * 204 | 0) + 4 | 0;
  c[bb >> 2] = c[db >> 2];
  if ((bb | 0) != (db | 0)) {
   h = 0;
   do {
    $a = cb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) | 0;
    c[$a >> 2] = 0;
    ue($a, db + 4 + (h * 12 | 0) | 0);
    $a = db + 4 + (h * 12 | 0) + 4 | 0;
    ab = c[$a + 4 >> 2] | 0;
    bb = cb + 2636 + (j * 204 | 0) + 8 + (h * 12 | 0) + 4 | 0;
    c[bb >> 2] = c[$a >> 2];
    c[bb + 4 >> 2] = ab;
    h = h + 1 | 0;
   } while ((h | 0) != 16);
  }
  c[cb + 2636 + (j * 204 | 0) + 200 >> 2] = 1;
  bf(eb, (c[42822] | 0) + 1168 | 0, cb);
  c[cb + 3028 >> 2] = 0;
  c[cb + 3016 >> 2] = 0;
  c[cb + 3004 >> 2] = 0;
  c[cb + 2992 >> 2] = 0;
  c[cb + 2980 >> 2] = 0;
  c[cb + 2968 >> 2] = 0;
  c[cb + 2956 >> 2] = 0;
  c[cb + 2944 >> 2] = 0;
  c[cb + 2932 >> 2] = 0;
  c[cb + 2920 >> 2] = 0;
  c[cb + 2908 >> 2] = 0;
  c[cb + 2896 >> 2] = 0;
  c[cb + 2884 >> 2] = 0;
  c[cb + 2872 >> 2] = 0;
  c[cb + 2860 >> 2] = 0;
  c[cb + 2848 >> 2] = 0;
  c[cb + 2840 >> 2] = 0;
  c[cb + 2824 >> 2] = 0;
  c[cb + 2812 >> 2] = 0;
  c[cb + 2800 >> 2] = 0;
  c[cb + 2788 >> 2] = 0;
  c[cb + 2776 >> 2] = 0;
  c[cb + 2764 >> 2] = 0;
  c[cb + 2752 >> 2] = 0;
  c[cb + 2740 >> 2] = 0;
  c[cb + 2728 >> 2] = 0;
  c[cb + 2716 >> 2] = 0;
  c[cb + 2704 >> 2] = 0;
  c[cb + 2692 >> 2] = 0;
  c[cb + 2680 >> 2] = 0;
  c[cb + 2668 >> 2] = 0;
  c[cb + 2656 >> 2] = 0;
  c[cb + 2644 >> 2] = 0;
  c[cb + 2636 >> 2] = 0;
  c[cb + 2548 >> 2] = 0;
  c[cb + 2536 >> 2] = 0;
  c[cb + 2524 >> 2] = 0;
  c[cb + 2512 >> 2] = 0;
  c[cb + 2500 >> 2] = 0;
  c[cb + 2488 >> 2] = 0;
  c[cb + 2476 >> 2] = 0;
  c[cb + 2464 >> 2] = 0;
  c[cb + 2452 >> 2] = 0;
  c[cb + 2440 >> 2] = 0;
  c[cb + 2428 >> 2] = 0;
  c[cb + 2416 >> 2] = 0;
  c[cb + 2404 >> 2] = 0;
  c[cb + 2392 >> 2] = 0;
  c[cb + 2380 >> 2] = 0;
  c[cb + 2368 >> 2] = 0;
  c[cb + 2344 >> 2] = 0;
  c[cb + 2260 >> 2] = 0;
  c[cb + 2248 >> 2] = 0;
  c[cb + 2236 >> 2] = 0;
  c[cb + 2224 >> 2] = 0;
  c[cb + 2212 >> 2] = 0;
  c[cb + 2200 >> 2] = 0;
  c[cb + 2188 >> 2] = 0;
  c[cb + 2176 >> 2] = 0;
  c[cb + 2164 >> 2] = 0;
  c[cb + 2152 >> 2] = 0;
  c[cb + 2140 >> 2] = 0;
  c[cb + 2128 >> 2] = 0;
  c[cb + 2116 >> 2] = 0;
  c[cb + 2104 >> 2] = 0;
  c[cb + 2092 >> 2] = 0;
  c[cb + 2080 >> 2] = 0;
  c[cb + 2056 >> 2] = 0;
  c[cb + 1972 >> 2] = 0;
  c[cb + 1960 >> 2] = 0;
  c[cb + 1948 >> 2] = 0;
  c[cb + 1936 >> 2] = 0;
  c[cb + 1924 >> 2] = 0;
  c[cb + 1912 >> 2] = 0;
  c[cb + 1900 >> 2] = 0;
  c[cb + 1888 >> 2] = 0;
  c[cb + 1876 >> 2] = 0;
  c[cb + 1864 >> 2] = 0;
  c[cb + 1852 >> 2] = 0;
  c[cb + 1840 >> 2] = 0;
  c[cb + 1828 >> 2] = 0;
  c[cb + 1816 >> 2] = 0;
  c[cb + 1804 >> 2] = 0;
  c[cb + 1792 >> 2] = 0;
  c[cb + 1768 >> 2] = 0;
  c[cb + 1684 >> 2] = 0;
  c[cb + 1672 >> 2] = 0;
  c[cb + 1660 >> 2] = 0;
  c[cb + 1648 >> 2] = 0;
  c[cb + 1636 >> 2] = 0;
  c[cb + 1624 >> 2] = 0;
  c[cb + 1612 >> 2] = 0;
  c[cb + 1600 >> 2] = 0;
  c[cb + 1588 >> 2] = 0;
  c[cb + 1576 >> 2] = 0;
  c[cb + 1564 >> 2] = 0;
  c[cb + 1552 >> 2] = 0;
  c[cb + 1540 >> 2] = 0;
  c[cb + 1528 >> 2] = 0;
  c[cb + 1516 >> 2] = 0;
  c[cb + 1504 >> 2] = 0;
  c[cb + 1480 >> 2] = 0;
  c[cb + 1396 >> 2] = 0;
  c[cb + 1384 >> 2] = 0;
  c[cb + 1372 >> 2] = 0;
  c[cb + 1360 >> 2] = 0;
  c[cb + 1348 >> 2] = 0;
  c[cb + 1336 >> 2] = 0;
  c[cb + 1324 >> 2] = 0;
  c[cb + 1312 >> 2] = 0;
  c[cb + 1300 >> 2] = 0;
  c[cb + 1288 >> 2] = 0;
  c[cb + 1276 >> 2] = 0;
  c[cb + 1264 >> 2] = 0;
  c[cb + 1252 >> 2] = 0;
  c[cb + 1240 >> 2] = 0;
  c[cb + 1228 >> 2] = 0;
  c[cb + 1216 >> 2] = 0;
  c[cb + 1192 >> 2] = 0;
  c[cb + 1108 >> 2] = 0;
  c[cb + 1096 >> 2] = 0;
  c[cb + 1084 >> 2] = 0;
  c[cb + 1072 >> 2] = 0;
  c[cb + 1060 >> 2] = 0;
  c[cb + 1048 >> 2] = 0;
  c[cb + 1036 >> 2] = 0;
  c[cb + 1024 >> 2] = 0;
  c[cb + 1012 >> 2] = 0;
  c[cb + 1e3 >> 2] = 0;
  c[cb + 988 >> 2] = 0;
  c[cb + 976 >> 2] = 0;
  c[cb + 964 >> 2] = 0;
  c[cb + 952 >> 2] = 0;
  c[cb + 940 >> 2] = 0;
  c[cb + 928 >> 2] = 0;
  c[cb + 904 >> 2] = 0;
  c[cb + 820 >> 2] = 0;
  c[cb + 808 >> 2] = 0;
  c[cb + 796 >> 2] = 0;
  c[cb + 784 >> 2] = 0;
  c[cb + 772 >> 2] = 0;
  c[cb + 760 >> 2] = 0;
  c[cb + 748 >> 2] = 0;
  c[cb + 736 >> 2] = 0;
  c[cb + 724 >> 2] = 0;
  c[cb + 712 >> 2] = 0;
  c[cb + 700 >> 2] = 0;
  c[cb + 688 >> 2] = 0;
  c[cb + 676 >> 2] = 0;
  c[cb + 664 >> 2] = 0;
  c[cb + 652 >> 2] = 0;
  c[cb + 640 >> 2] = 0;
  c[cb + 616 >> 2] = 0;
  c[cb + 532 >> 2] = 0;
  c[cb + 520 >> 2] = 0;
  c[cb + 508 >> 2] = 0;
  c[cb + 496 >> 2] = 0;
  c[cb + 484 >> 2] = 0;
  c[cb + 472 >> 2] = 0;
  c[cb + 460 >> 2] = 0;
  c[cb + 448 >> 2] = 0;
  c[cb + 436 >> 2] = 0;
  c[cb + 424 >> 2] = 0;
  c[cb + 412 >> 2] = 0;
  c[cb + 400 >> 2] = 0;
  c[cb + 388 >> 2] = 0;
  c[cb + 376 >> 2] = 0;
  c[cb + 364 >> 2] = 0;
  c[cb + 352 >> 2] = 0;
  c[cb + 328 >> 2] = 0;
  fd(cb + 16 | 0);
  c[cb >> 2] = 0;
  ef(ob, Wa, eb);
  h = ob + 36 | 0;
  b[h >> 1] = b[h >> 1] & -64 | 7;
  h = ob + 8 | 0;
  db = e[h + 4 >> 1] & 65535;
  cb = c[h >> 2] & -2013267968 | 1879048521;
  c[h >> 2] = cb;
  b[h + 4 >> 1] = db;
  eb = c[42822] | 0;
  bb = _g(c[eb + 476 >> 2] | 0, 0, 31) | 0;
  cb = bb & -2147483648 | cb & 2013264201;
  db = C & 15 | db & 65520;
  c[h >> 2] = cb;
  b[h + 4 >> 1] = db;
  _g(c[eb + 480 >> 2] | 0, 0, 36) | 0;
  c[h >> 2] = cb;
  b[h + 4 >> 1] = C & 496 | db & 65039;
  h = ob + 40 | 0;
  b[h >> 1] = (c[eb + 484 >> 2] & 65535) << 8 & 3840 | b[h >> 1] & -3841;
  h = f + 88 | 0;
  cf(fb, eb + 1168 | 0, ob);
  if ((h | 0) != (fb | 0)) {
   db = fb;
   eb = c[db + 4 >> 2] | 0;
   fb = h;
   c[fb >> 2] = c[db >> 2];
   c[fb + 4 >> 2] = eb;
  }
  o = yg(8192) | 0;
  j = 0;
  k = 155819;
  while (1) {
   h = j << 3;
   l = k;
   m = 0;
   while (1) {
    fb = (m << 10) + h | 0;
    a[o + fb >> 0] = ((a[l >> 0] | 0) != 45) << 31 >> 31;
    a[o + (fb | 1) >> 0] = ((a[l + 1 >> 0] | 0) != 45) << 31 >> 31;
    a[o + (fb | 2) >> 0] = ((a[l + 2 >> 0] | 0) != 45) << 31 >> 31;
    a[o + (fb | 3) >> 0] = ((a[l + 3 >> 0] | 0) != 45) << 31 >> 31;
    a[o + (fb | 4) >> 0] = ((a[l + 4 >> 0] | 0) != 45) << 31 >> 31;
    a[o + (fb | 5) >> 0] = ((a[l + 5 >> 0] | 0) != 45) << 31 >> 31;
    a[o + (fb | 6) >> 0] = ((a[l + 6 >> 0] | 0) != 45) << 31 >> 31;
    a[o + (fb | 7) >> 0] = ((a[l + 7 >> 0] | 0) != 45) << 31 >> 31;
    m = m + 1 | 0;
    if ((m | 0) == 8) break; else l = l + 8 | 0;
   }
   j = j + 1 | 0;
   if ((j | 0) == 128) break; else k = k + 64 | 0;
  }
  c[gb >> 2] = 0;
  c[gb + 4 >> 2] = 0;
  c[gb + 8 >> 2] = 0;
  c[gb + 12 >> 2] = 0;
  c[gb + 16 >> 2] = 0;
  c[gb + 20 >> 2] = 0;
  c[gb + 24 >> 2] = 1;
  c[gb + 28 >> 2] = 0;
  c[gb + 32 >> 2] = 20;
  h = gb + 40 | 0;
  j = h;
  c[j >> 2] = -1;
  c[j + 4 >> 2] = -1;
  b[gb + 48 >> 1] = 21;
  g[gb + 52 >> 2] = 0.0;
  g[gb + 56 >> 2] = 0.0;
  g[gb + 60 >> 2] = 0.0;
  g[gb + 64 >> 2] = 1.0;
  g[gb + 68 >> 2] = 1.0;
  a[gb + 72 >> 0] = 0;
  a[gb + 73 >> 0] = 3;
  c[ob >> 2] = 0;
  j = gb + 76 | 0;
  ue(j, ob);
  k = gb + 80 | 0;
  c[k >> 2] = -1;
  l = gb + 88 | 0;
  m = l;
  c[m >> 2] = -1;
  c[m + 4 >> 2] = -1;
  m = gb + 680 | 0;
  Xg(gb + 96 | 0, 0, 584) | 0;
  a[m >> 0] = a[m >> 0] & -128;
  J = ib;
  n = gb;
  K = J + 36 | 0;
  do {
   c[J >> 2] = c[n >> 2];
   J = J + 4 | 0;
   n = n + 4 | 0;
  } while ((J | 0) < (K | 0));
  fb = c[h + 4 >> 2] | 0;
  eb = ib + 40 | 0;
  c[eb >> 2] = c[h >> 2];
  c[eb + 4 >> 2] = fb;
  eb = ib + 48 | 0;
  fb = gb + 48 | 0;
  c[eb >> 2] = c[fb >> 2];
  c[eb + 4 >> 2] = c[fb + 4 >> 2];
  c[eb + 8 >> 2] = c[fb + 8 >> 2];
  c[eb + 12 >> 2] = c[fb + 12 >> 2];
  c[eb + 16 >> 2] = c[fb + 16 >> 2];
  c[eb + 20 >> 2] = c[fb + 20 >> 2];
  c[eb + 24 >> 2] = c[fb + 24 >> 2];
  ue(ib + 76 | 0, j);
  c[ib + 80 >> 2] = c[k >> 2];
  eb = l;
  fb = c[eb + 4 >> 2] | 0;
  h = ib + 88 | 0;
  c[h >> 2] = c[eb >> 2];
  c[h + 4 >> 2] = fb;
  Re(ib + 96 | 0, gb + 96 | 0);
  a[ib + 680 >> 0] = a[m >> 0] | 2;
  c[ib + 4 >> 2] = 0;
  c[ib + 8 >> 2] = 1024;
  c[ib + 12 >> 2] = 8;
  c[ib + 24 >> 2] = 1;
  c[ib + 28 >> 2] = 7;
  c[ib + 96 >> 2] = 1;
  c[ib + 100 >> 2] = 1;
  c[gb + 76 >> 2] = 0;
  h = ib + 48 | 0;
  b[h >> 1] = b[h >> 1] & -4048;
  c[ib + 392 >> 2] = 8192;
  af(ob, (c[42822] | 0) + 1168 | 0, ib, o);
  h = f + 160 | 0;
  if ((h | 0) != (ob | 0)) {
   eb = ob;
   fb = c[eb + 4 >> 2] | 0;
   gb = h;
   c[gb >> 2] = c[eb >> 2];
   c[gb + 4 >> 2] = fb;
  }
  zg(o);
  k = c[42822] | 0;
  h = k + 1180 | 0;
  j = c[h >> 2] | 0;
  k = k + 1176 | 0;
  l = c[k >> 2] | 0;
  if ((j - l | 0) == 1) c[k >> 2] = l + 1; else c[h >> 2] = j + -1;
  a[hb >> 0] = 1;
 }
 j = f + 76 | 0;
 do {
  hb = a[j >> 0] | 0;
  a[j >> 0] = 1;
 } while ((hb & 1) != 0);
 h = f + 80 | 0;
 do {} while ((c[h >> 2] | 0) > 0);
 h = f + 256 | 0;
 we(ob, h);
 h = c[h >> 2] | 0;
 if (h | 0) a[h >> 0] = 0;
 c[f + 264 >> 2] = 0;
 a[j >> 0] = 0;
 r = c[ob >> 2] | 0;
 s = (r | 0) == 0;
 if (s) {
  i = pb;
  return;
 }
 if ((c[r + 4 >> 2] | 0) > 9600) {
  q = c[ob + 4 >> 2] | 0;
  q = (q | 0) == 0 ? 171852 : q;
  j = 9600;
  kb = 174;
 } else {
  j = c[r + 4 >> 2] | 0;
  h = c[ob + 4 >> 2] | 0;
  if ((j | 0) > 0) {
   q = (h | 0) == 0 ? 171852 : h;
   kb = 174;
  }
 }
 if ((kb | 0) == 174) {
  p = 0;
  o = 0;
  k = 0;
  l = -16711681;
  m = 0;
  g : while (1) {
   hb = a[q + p >> 0] | 0;
   h = hb & 255;
   h : do if ((hb & 255) < 32) switch (h | 0) {
   case 8:
    {
     n = p;
     h = (o | 0) > 0 ? o + -1 | 0 : 0;
     break h;
    }
   case 9:
    {
     n = p;
     h = (o | 0) < 119 ? o + 1 | 0 : 119;
     break h;
    }
   case 10:
    {
     n = p;
     h = o;
     k = (k | 0) < 79 ? k + 1 | 0 : 79;
     break h;
    }
   case 11:
    {
     n = p;
     h = o;
     k = (k | 0) > 0 ? k + -1 | 0 : 0;
     break h;
    }
   case 13:
    {
     n = p;
     h = 0;
     break h;
    }
   case 16:
    {
     n = p;
     h = 0;
     k = 0;
     break h;
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
       break h;
      }
     case 2:
      {
       l = p + 5 | 0;
       n = l;
       h = o;
       l = d[q + (p + 3) >> 0] << 8 | d[q + (p + 2) >> 0] | d[q + (p + 4) >> 0] << 16 | d[q + l >> 0] << 24;
       break h;
      }
     default:
      {
       kb = 186;
       break g;
      }
     }
    }
   default:
    {
     n = p;
     h = o;
     break h;
    }
   } else {
    if (!((m | 0) < 57594 & (o | 0) < 120)) {
     mb = m;
     break g;
    }
    hb = h & 127;
    sb = +(o & 255);
    g[f + 276 + (m * 20 | 0) >> 2] = sb;
    vb = +(k & 255);
    g[f + 276 + (m * 20 | 0) + 4 >> 2] = vb;
    qb = +(hb & 255);
    g[f + 276 + (m * 20 | 0) + 8 >> 2] = qb;
    g[f + 276 + (m * 20 | 0) + 12 >> 2] = 0.0;
    c[f + 276 + (m * 20 | 0) + 16 >> 2] = l;
    n = m + 1 | 0;
    h = o + 1 | 0;
    ub = +(h & 255);
    g[f + 276 + (n * 20 | 0) >> 2] = ub;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = vb;
    tb = +(hb + 1 & 255);
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = tb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 0.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 2 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = ub;
    rb = +(k + 1 & 255);
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = rb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = tb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 1.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 3 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = sb;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = vb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = qb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 0.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 4 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = ub;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = rb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = tb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 1.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = m + 5 | 0;
    g[f + 276 + (n * 20 | 0) >> 2] = sb;
    g[f + 276 + (n * 20 | 0) + 4 >> 2] = rb;
    g[f + 276 + (n * 20 | 0) + 8 >> 2] = qb;
    g[f + 276 + (n * 20 | 0) + 12 >> 2] = 1.0;
    c[f + 276 + (n * 20 | 0) + 16 >> 2] = l;
    n = p;
    m = m + 6 | 0;
   } while (0);
   p = n + 1 | 0;
   if ((p | 0) >= (j | 0)) {
    mb = m;
    break;
   } else o = h;
  }
  if ((kb | 0) == 186) {
   c[jb >> 2] = h << 24 >> 24;
   ie(152836, jb);
   Wb();
  }
  if ((mb | 0) > 0) {
   g[ib >> 2] = 0.0;
   g[ib + 4 >> 2] = 0.0;
   j = c[42822] | 0;
   vb = +g[f + 4 >> 2] * (8.0 / +(c[j + 472 >> 2] | 0) * 2.0);
   g[ib >> 2] = 8.0 / +(c[j + 468 >> 2] | 0) * 2.0 * +g[f >> 2];
   g[ib + 4 >> 2] = vb;
   Je(f + 96 | 0, f + 276 | 0, R(d[f + 75 >> 0] | 0, mb) | 0);
   Ie(f + 88 | 0);
   j = c[42822] | 0;
   h = j + 132 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   pf(c[j + 628 >> 2] | 0, 0, ib);
   j = c[42822] | 0;
   h = j + 148 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   h = c[j + 628 >> 2] | 0;
   i : do if (h | 0) {
    h = c[h + 604 >> 2] | 0;
    switch (c[(c[j + 632 >> 2] | 0) + 288 >> 2] | 0) {
    case 0:
     {
      Lb(h | 0, 0, mb | 0);
      break i;
     }
    case 2:
     {
      lb = 5125;
      break;
     }
    case 1:
     {
      lb = 5123;
      break;
     }
    default:
     {
      ie(151513, nb);
      Wb();
     }
    }
    Qa(h | 0, mb | 0, lb | 0, 0);
   } while (0);
  }
  if (s) {
   i = pb;
   return;
  }
 }
 nb = c[r >> 2] | 0;
 c[r >> 2] = nb - 1;
 if ((nb | 0) == 1) {
  zg(r);
  c[ob >> 2] = 0;
  h = ob + 4 | 0;
  c[h >> 2] = 0;
 } else h = ob + 4 | 0;
 c[ob >> 2] = 0;
 c[h >> 2] = 0;
 i = pb;
 return;
}

function Pe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0;
 z = b + 4 | 0;
 if ((c[z >> 2] | 0) == (d | 0)) return;
 A = b + 12 | 0;
 B = b + 8 | 0;
 C = (c[A >> 2] | 0) - (c[B >> 2] | 0) | 0;
 D = yg(d * 3712 | 0) | 0;
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
   ue(w + 16 | 0, y + 16 | 0);
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
      zg(c[g >> 2] | 0);
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
       zg(c[i >> 2] | 0);
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
        zg(c[k >> 2] | 0);
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
         zg(c[m >> 2] | 0);
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
      zg(c[g >> 2] | 0);
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
       zg(c[i >> 2] | 0);
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
        zg(c[k >> 2] | 0);
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
         zg(c[m >> 2] | 0);
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
      zg(c[g >> 2] | 0);
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
       zg(c[i >> 2] | 0);
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
        zg(c[k >> 2] | 0);
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
         zg(c[m >> 2] | 0);
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
      zg(c[g >> 2] | 0);
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
       zg(c[i >> 2] | 0);
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
        zg(c[k >> 2] | 0);
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
         zg(c[m >> 2] | 0);
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
   Ne(w + 272 | 0, y + 272 | 0);
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
    ue(e, y + 344 | 0);
    e = y + 352 | 0;
    c[f >> 2] = c[e >> 2];
    c[f + 4 >> 2] = c[e + 4 >> 2];
    c[f + 8 >> 2] = c[e + 8 >> 2];
    c[f + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     F = w + 368 + (e * 12 | 0) | 0;
     c[F >> 2] = 0;
     ue(F, y + 368 + (e * 12 | 0) | 0);
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
    ue(e, y + 632 | 0);
    e = y + 640 | 0;
    c[h >> 2] = c[e >> 2];
    c[h + 4 >> 2] = c[e + 4 >> 2];
    c[h + 8 >> 2] = c[e + 8 >> 2];
    c[h + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     h = w + 656 + (e * 12 | 0) | 0;
     c[h >> 2] = 0;
     ue(h, y + 656 + (e * 12 | 0) | 0);
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
    ue(e, y + 920 | 0);
    e = y + 928 | 0;
    c[j >> 2] = c[e >> 2];
    c[j + 4 >> 2] = c[e + 4 >> 2];
    c[j + 8 >> 2] = c[e + 8 >> 2];
    c[j + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     j = w + 944 + (e * 12 | 0) | 0;
     c[j >> 2] = 0;
     ue(j, y + 944 + (e * 12 | 0) | 0);
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
    ue(e, y + 1208 | 0);
    e = y + 1216 | 0;
    c[l >> 2] = c[e >> 2];
    c[l + 4 >> 2] = c[e + 4 >> 2];
    c[l + 8 >> 2] = c[e + 8 >> 2];
    c[l + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     l = w + 1232 + (e * 12 | 0) | 0;
     c[l >> 2] = 0;
     ue(l, y + 1232 + (e * 12 | 0) | 0);
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
    ue(e, y + 1496 | 0);
    e = y + 1504 | 0;
    c[n >> 2] = c[e >> 2];
    c[n + 4 >> 2] = c[e + 4 >> 2];
    c[n + 8 >> 2] = c[e + 8 >> 2];
    c[n + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     n = w + 1520 + (e * 12 | 0) | 0;
     c[n >> 2] = 0;
     ue(n, y + 1520 + (e * 12 | 0) | 0);
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
    ue(e, y + 1784 | 0);
    e = y + 1792 | 0;
    c[p >> 2] = c[e >> 2];
    c[p + 4 >> 2] = c[e + 4 >> 2];
    c[p + 8 >> 2] = c[e + 8 >> 2];
    c[p + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     p = w + 1808 + (e * 12 | 0) | 0;
     c[p >> 2] = 0;
     ue(p, y + 1808 + (e * 12 | 0) | 0);
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
    ue(e, y + 2072 | 0);
    e = y + 2080 | 0;
    c[r >> 2] = c[e >> 2];
    c[r + 4 >> 2] = c[e + 4 >> 2];
    c[r + 8 >> 2] = c[e + 8 >> 2];
    c[r + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     r = w + 2096 + (e * 12 | 0) | 0;
     c[r >> 2] = 0;
     ue(r, y + 2096 + (e * 12 | 0) | 0);
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
    ue(e, y + 2360 | 0);
    e = y + 2368 | 0;
    c[t >> 2] = c[e >> 2];
    c[t + 4 >> 2] = c[e + 4 >> 2];
    c[t + 8 >> 2] = c[e + 8 >> 2];
    c[t + 12 >> 2] = c[e + 12 >> 2];
    e = 0;
    do {
     t = w + 2384 + (e * 12 | 0) | 0;
     c[t >> 2] = 0;
     ue(t, y + 2384 + (e * 12 | 0) | 0);
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
    ue(e, y + 2652 | 0);
    c[f >> 2] = c[y + 2656 >> 2];
    e = 0;
    do {
     v = w + 2660 + (e * 12 | 0) | 0;
     c[v >> 2] = 0;
     ue(v, y + 2660 + (e * 12 | 0) | 0);
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
    ue(e, y + 2856 | 0);
    c[h >> 2] = c[y + 2860 >> 2];
    e = 0;
    do {
     v = w + 2864 + (e * 12 | 0) | 0;
     c[v >> 2] = 0;
     ue(v, y + 2864 + (e * 12 | 0) | 0);
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
   lf(y);
   x = x + 1 | 0;
   if ((x | 0) == (C | 0)) break; else {
    w = w + 3712 | 0;
    y = y + 3712 | 0;
   }
  }
 }
 e = c[b >> 2] | 0;
 if (e | 0) zg(e);
 c[b >> 2] = D;
 c[z >> 2] = d;
 c[B >> 2] = 0;
 c[A >> 2] = C;
 return;
}

function kf(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 3056 | 0;
 j = k;
 e = d + 16 | 0;
 gf(j);
 if ((j | 0) != (e | 0)) {
  c[e >> 2] = 0;
  ue(e, j);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
    zg(c[f >> 2] | 0);
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
  ue(e, g);
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
    ue(f, m);
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
  ue(l, m);
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
    ue(l, f);
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
  ue(l, m);
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
    ue(l, f);
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
  ue(l, m);
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
    ue(l, f);
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
  ue(l, m);
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
    ue(l, f);
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
  ue(l, m);
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
    ue(l, f);
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
  ue(l, m);
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
    ue(l, f);
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
  ue(l, m);
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
    ue(l, f);
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
  fd(h);
  i = k;
  return;
 }
 c[e >> 2] = 0;
 ue(e, f);
 c[f >> 2] = 0;
 c[d + 2656 >> 2] = c[j + 2640 >> 2];
 e = 0;
 do {
  l = d + 2660 + (e * 12 | 0) | 0;
  f = j + 2644 + (e * 12 | 0) | 0;
  c[l >> 2] = 0;
  ue(l, f);
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
 ue(m, e);
 c[e >> 2] = 0;
 c[d + 2860 >> 2] = c[j + 2844 >> 2];
 e = 0;
 do {
  l = d + 2864 + (e * 12 | 0) | 0;
  f = j + 2848 + (e * 12 | 0) | 0;
  c[l >> 2] = 0;
  ue(l, f);
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
 fd(h);
 i = k;
 return;
}

function bf(a, d, f) {
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
 cg(a, j, f);
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
 w = _g(e[d + 348 >> 1] | 0 | 0, 0, 16) | 0;
 t = t | C;
 x = w | x & 65535;
 w = a;
 c[w >> 2] = x;
 c[w + 4 >> 2] = t;
 w = g;
 c[w >> 2] = x;
 c[w + 4 >> 2] = t;
 c[h >> 2] = c[(c[d >> 2] | 0) + ((c[d + 12 >> 2] | 0) + -1 << 2) >> 2];
 ag(j, f, g, h);
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
  ue(g, f);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
    zg(c[j >> 2] | 0);
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
 Te(u + (t * 3712 | 0) + 272 | 0, f + 256 | 0);
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
  ue(g, h);
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
   ue(j, f + 352 + (g * 12 | 0) | 0);
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
  ue(g, h);
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
   ue(j, f + 640 + (g * 12 | 0) | 0);
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
  ue(g, h);
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
   ue(j, f + 928 + (g * 12 | 0) | 0);
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
  ue(g, h);
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
   ue(j, f + 1216 + (g * 12 | 0) | 0);
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
  ue(g, h);
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
   ue(j, f + 1504 + (g * 12 | 0) | 0);
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
  ue(g, h);
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
   ue(j, f + 1792 + (g * 12 | 0) | 0);
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
  ue(g, h);
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
   ue(j, f + 2080 + (g * 12 | 0) | 0);
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
  ue(g, h);
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
   ue(j, f + 2368 + (g * 12 | 0) | 0);
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
  ue(g, h);
  c[u + (t * 3712 | 0) + 2656 >> 2] = c[f + 2640 >> 2];
  g = 0;
  do {
   h = u + (t * 3712 | 0) + 2660 + (g * 12 | 0) | 0;
   c[h >> 2] = 0;
   ue(h, f + 2644 + (g * 12 | 0) | 0);
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
  ue(g, f + 2840 | 0);
  c[u + (t * 3712 | 0) + 2860 >> 2] = c[f + 2844 >> 2];
  g = 0;
  do {
   h = u + (t * 3712 | 0) + 2864 + (g * 12 | 0) | 0;
   c[h >> 2] = 0;
   ue(h, f + 2848 + (g * 12 | 0) | 0);
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
 ea(0);
 c[h + 300 >> 2] = 0;
 h = c[u + (t * 3712 | 0) + 36 >> 2] | 0;
 g = c[u + (t * 3712 | 0) + 32 >> 2] | 0;
 if (!g) g = 0; else g = c[g + 4 >> 2] | 0;
 c[p >> 2] = (h | 0) == 0 ? 171852 : h;
 c[m >> 2] = g;
 g = Mb(35633) | 0;
 Da(g | 0, 1, p | 0, m | 0);
 Sb(g | 0);
 c[o >> 2] = 0;
 kc(g | 0, 35713, o | 0);
 if (!(c[o >> 2] | 0)) {
  _b(g | 0);
  g = 0;
 }
 j = c[u + (t * 3712 | 0) + 76 >> 2] | 0;
 h = c[u + (t * 3712 | 0) + 72 >> 2] | 0;
 if (!h) h = 0; else h = c[h + 4 >> 2] | 0;
 c[p >> 2] = (j | 0) == 0 ? 171852 : j;
 c[m >> 2] = h;
 h = Mb(35632) | 0;
 Da(h | 0, 1, p | 0, m | 0);
 Sb(h | 0);
 c[o >> 2] = 0;
 kc(h | 0, 35713, o | 0);
 if (!(c[o >> 2] | 0)) {
  _b(h | 0);
  h = 0;
 }
 m = oa() | 0;
 mb(m | 0, g | 0);
 mb(m | 0, h | 0);
 f = 0;
 a : while (1) {
  do switch (f | 0) {
  case 15:
   break a;
  case 0:
   {
    j = 151351;
    break;
   }
  case 1:
   {
    j = 151360;
    break;
   }
  case 2:
   {
    j = 151367;
    break;
   }
  case 3:
   {
    j = 151377;
    break;
   }
  case 4:
   {
    j = 151387;
    break;
   }
  case 5:
   {
    j = 151397;
    break;
   }
  case 6:
   {
    j = 151407;
    break;
   }
  case 7:
   {
    j = 151415;
    break;
   }
  case 8:
   {
    j = 151424;
    break;
   }
  case 9:
   {
    j = 151432;
    break;
   }
  case 10:
   {
    j = 151440;
    break;
   }
  case 11:
   {
    j = 151447;
    break;
   }
  case 12:
   {
    j = 151454;
    break;
   }
  case 13:
   {
    j = 151464;
    break;
   }
  case 14:
   {
    j = 151474;
    break;
   }
  default:
   {
    s = 229;
    break a;
   }
  } while (0);
  rc(m | 0, f | 0, j | 0);
  f = f + 1 | 0;
 }
 if ((s | 0) == 229) {
  ie(151311, q);
  Wb();
 }
 rc(m | 0, 15, 151301);
 ic(m | 0);
 _b(g | 0);
 _b(h | 0);
 $b(m | 0, 35714, p | 0);
 if (!(c[p >> 2] | 0)) {
  j = c[u + (t * 3712 | 0) + 16 >> 2] | 0;
  c[r >> 2] = c[((j | 0) == 0 ? 136292 : j + 12 | 0) >> 2];
  he(151484, r);
  j = 4;
 } else {
  c[u + (t * 3712 | 0) + 3064 >> 2] = m;
  g = (c[n >> 2] | 0) + 300 | 0;
  if ((c[g >> 2] | 0) != (m | 0)) {
   c[g >> 2] = m;
   ea(m | 0);
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
      c[v + 3068 + (f + d + j << 2) >> 2] = lc(m | 0, c[((s | 0) == 0 ? 136292 : s + 12 | 0) >> 2] | 0) | 0;
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
      s = lc(m | 0, c[((s | 0) == 0 ? 136292 : s + 12 | 0) >> 2] | 0) | 0;
      c[v + 3580 + (j + k << 2) >> 2] = f;
      Jb(s | 0, f | 0);
      k = k + 1 | 0;
      if ((k | 0) == (h | 0)) break; else f = f + 1 | 0;
     }
     g = g + h | 0;
    }
    l = l + 1 | 0;
   } while ((l | 0) != (d | 0));
  }
  j = c[n >> 2] | 0;
  ea(0);
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
  he(164012, z);
  i = A;
  return;
 }
}

function yg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 q = D;
 do if (a >>> 0 < 245) {
  p = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = p >>> 3;
  k = c[42838] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 171392 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[42838] = k & ~(1 << b); else {
    if (h >>> 0 < (c[42842] | 0) >>> 0) Wb();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else Wb();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[42840] | 0;
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
    d = 171392 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[42838] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[42842] | 0) >>> 0) Wb();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[42840] | 0;
      break;
     } else Wb();
    } while (0);
    h = (b << 3) - p | 0;
    c[g + 4 >> 2] = p | 3;
    e = g + p | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[42843] | 0;
     b = l >>> 3;
     d = 171392 + (b << 1 << 2) | 0;
     a = c[42838] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[42838] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[42840] = h;
    c[42843] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[42839] | 0;
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
    k = c[171656 + ((A | B | C | b | k) + (j >>> k) << 2) >> 2] | 0;
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
    f = c[42842] | 0;
    if (k >>> 0 < f >>> 0) Wb();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) Wb();
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
     if (b >>> 0 < f >>> 0) Wb(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Wb();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Wb();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      o = d;
      break;
     } else Wb();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 171656 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[42839] = c[42839] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[42842] | 0) >>> 0) Wb();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[42842] | 0;
     if (o >>> 0 < b >>> 0) Wb();
     c[o + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Wb(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
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
     a = c[42840] | 0;
     if (a | 0) {
      e = c[42843] | 0;
      b = a >>> 3;
      d = 171392 + (b << 1 << 2) | 0;
      a = c[42838] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[42838] = a | b;
       r = d + 8 | 0;
       s = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = e;
      c[s + 12 >> 2] = e;
      c[e + 8 >> 2] = s;
      c[e + 12 >> 2] = d;
     }
     c[42840] = j;
     c[42843] = h;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) p = -1; else {
  a = a + 11 | 0;
  p = a & -8;
  k = c[42839] | 0;
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
   b = c[171656 + (j << 2) >> 2] | 0;
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
     a = c[171656 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (j >>> 0 < ((c[42840] | 0) - p | 0) >>> 0) {
    f = c[42842] | 0;
    if (k >>> 0 < f >>> 0) Wb();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) Wb();
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
     if (b >>> 0 < f >>> 0) Wb(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Wb();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Wb();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else Wb();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 171656 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[42839] = c[42839] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[42842] | 0) >>> 0) Wb();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[42842] | 0;
     if (t >>> 0 < b >>> 0) Wb();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Wb(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
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
      d = 171392 + (a << 1 << 2) | 0;
      b = c[42838] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[42838] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
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
     e = 171656 + (d << 2) | 0;
     c[h + 28 >> 2] = d;
     a = h + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[42839] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[42839] = a | b;
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
     if ((w | 0) == 145) if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
      c[b >> 2] = h;
      c[h + 24 >> 2] = e;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     } else if ((w | 0) == 148) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[42842] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = h;
       c[a >> 2] = h;
       c[h + 8 >> 2] = b;
       c[h + 12 >> 2] = e;
       c[h + 24 >> 2] = 0;
       break;
      } else Wb();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[42840] | 0;
 if (d >>> 0 >= p >>> 0) {
  a = d - p | 0;
  b = c[42843] | 0;
  if (a >>> 0 > 15) {
   C = b + p | 0;
   c[42843] = C;
   c[42840] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = p | 3;
  } else {
   c[42840] = 0;
   c[42843] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[42841] | 0;
 if (a >>> 0 > p >>> 0) {
  A = a - p | 0;
  c[42841] = A;
  C = c[42844] | 0;
  B = C + p | 0;
  c[42844] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = p | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[42956] | 0)) {
  c[42958] = 4096;
  c[42957] = 4096;
  c[42959] = -1;
  c[42960] = -1;
  c[42961] = 0;
  c[42949] = 0;
  v = q & -16 ^ 1431655768;
  c[q >> 2] = v;
  c[42956] = v;
 }
 h = p + 48 | 0;
 e = c[42958] | 0;
 j = p + 47 | 0;
 d = e + j | 0;
 e = 0 - e | 0;
 k = d & e;
 if (k >>> 0 <= p >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[42948] | 0;
 if (a | 0) {
  u = c[42946] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[42949] & 4)) {
  b = c[42844] | 0;
  c : do if (!b) w = 171; else {
   g = 171800;
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
   a = d - (c[42841] | 0) & e;
   if (a >>> 0 < 2147483647) {
    b = sa(a | 0) | 0;
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
   f = sa(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[42957] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[42946] | 0;
    d = b + a | 0;
    if (a >>> 0 > p >>> 0 & a >>> 0 < 2147483647) {
     e = c[42948] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = sa(a | 0) | 0;
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
    b = c[42958] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((sa(b | 0) | 0) == (-1 | 0)) {
     sa(d | 0) | 0;
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
  c[42949] = c[42949] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = sa(k | 0) | 0;
  a = sa(0) | 0;
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
  a = (c[42946] | 0) + g | 0;
  c[42946] = a;
  if (a >>> 0 > (c[42947] | 0) >>> 0) c[42947] = a;
  l = c[42844] | 0;
  do if (!l) {
   C = c[42842] | 0;
   if ((C | 0) == 0 | h >>> 0 < C >>> 0) c[42842] = h;
   c[42950] = h;
   c[42951] = g;
   c[42953] = 0;
   c[42847] = c[42956];
   c[42846] = -1;
   a = 0;
   do {
    C = 171392 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = h + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = h + C | 0;
   C = g + -40 - C | 0;
   c[42844] = B;
   c[42841] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[42845] = c[42960];
  } else {
   a = 171800;
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
    C = g - C + (c[42841] | 0) | 0;
    c[42844] = B;
    c[42841] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[42845] = c[42960];
    break;
   }
   a = c[42842] | 0;
   if (h >>> 0 < a >>> 0) {
    c[42842] = h;
    j = h;
   } else j = a;
   b = h + g | 0;
   a = 171800;
   while (1) {
    if ((c[a >> 2] | 0) == (b | 0)) {
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 171800;
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
     C = (c[42841] | 0) + k | 0;
     c[42841] = C;
     c[42844] = m;
     c[m + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[42843] | 0)) {
      C = (c[42840] | 0) + k | 0;
      c[42840] = C;
      c[42843] = m;
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
       b = 171392 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) Wb();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        Wb();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[42838] = c[42838] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) Wb();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        Wb();
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
        if (d >>> 0 < j >>> 0) Wb(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) Wb();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) Wb();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else Wb();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       d = 171656 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[42839] = c[42839] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[42842] | 0) >>> 0) Wb();
        b = g + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[g + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[42842] | 0;
       if (A >>> 0 < e >>> 0) Wb();
       c[A + 24 >> 2] = g;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) Wb(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
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
      d = 171392 + (a << 1 << 2) | 0;
      b = c[42838] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[42838] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[42842] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       Wb();
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
     e = 171656 + (d << 2) | 0;
     c[m + 28 >> 2] = d;
     a = m + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[42839] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[42839] = a | b;
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
     if ((w | 0) == 276) if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
      c[b >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((w | 0) == 279) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[42842] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = m;
       c[a >> 2] = m;
       c[m + 8 >> 2] = b;
       c[m + 12 >> 2] = e;
       c[m + 24 >> 2] = 0;
       break;
      } else Wb();
     }
    } while (0);
    C = n + 8 | 0;
    i = D;
    return C | 0;
   } else b = 171800;
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
   c[42844] = C;
   c[42841] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[42845] = c[42960];
   e = b + 4 | 0;
   c[e >> 2] = 27;
   c[a >> 2] = c[42950];
   c[a + 4 >> 2] = c[42951];
   c[a + 8 >> 2] = c[42952];
   c[a + 12 >> 2] = c[42953];
   c[42950] = h;
   c[42951] = g;
   c[42953] = 0;
   c[42952] = a;
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
     d = 171392 + (a << 1 << 2) | 0;
     b = c[42838] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[42838] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
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
    e = 171656 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[f >> 2] = 0;
    a = c[42839] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[42839] = a | b;
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
    if ((w | 0) == 302) if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
     c[b >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((w | 0) == 305) {
     a = e + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[42842] | 0;
     if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = l;
      c[a >> 2] = l;
      c[l + 8 >> 2] = b;
      c[l + 12 >> 2] = e;
      c[l + 24 >> 2] = 0;
      break;
     } else Wb();
    }
   }
  } while (0);
  a = c[42841] | 0;
  if (a >>> 0 > p >>> 0) {
   A = a - p | 0;
   c[42841] = A;
   C = c[42844] | 0;
   B = C + p | 0;
   c[42844] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = p | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 if (!0) a = 171348; else a = c[(bh() | 0) + 64 >> 2] | 0;
 c[a >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function mg(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0.0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0;
 ia = i;
 i = i + 624 | 0;
 da = ia + 24 | 0;
 fa = ia + 16 | 0;
 ea = ia + 588 | 0;
 aa = ia + 576 | 0;
 ca = ia;
 X = ia + 536 | 0;
 ha = ia + 8 | 0;
 ga = ia + 528 | 0;
 M = (e | 0) != 0;
 N = X + 40 | 0;
 W = N;
 X = X + 39 | 0;
 Y = ha + 4 | 0;
 Z = ea;
 _ = 0 - Z | 0;
 $ = aa + 12 | 0;
 aa = aa + 11 | 0;
 ba = $;
 O = ba - Z | 0;
 P = -2 - Z | 0;
 Q = ba + 2 | 0;
 S = da + 288 | 0;
 T = ea + 9 | 0;
 U = T;
 V = ea + 8 | 0;
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
   if (!0) m = 171348; else m = c[(bh() | 0) + 64 >> 2] | 0;
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
  if (M) if (!(c[e >> 2] & 32)) ng(x, v, e);
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
   n = a[164640 + (s * 58 | 0) + n >> 0] | 0;
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
   pg(ca, o, g);
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
      n = Zg(n | 0, o | 0, 3) | 0;
      o = C;
     } while (!((n | 0) == 0 & (o | 0) == 0));
    }
    if (!(H & 8)) {
     n = H;
     s = 0;
     q = 165120;
     L = 79;
    } else {
     s = W - f | 0;
     n = H;
     r = (r | 0) > (s | 0) ? r : s + 1 | 0;
     s = 0;
     q = 165120;
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
     f = Ug(0, 0, f | 0, n | 0) | 0;
     n = C;
     o = ca;
     c[o >> 2] = f;
     c[o + 4 >> 2] = n;
     o = 1;
     q = 165120;
     L = 78;
     break f;
    }
    if (!(H & 2048)) {
     q = H & 1;
     o = q;
     q = (q | 0) == 0 ? 165120 : 165122;
     L = 78;
    } else {
     o = 1;
     q = 165121;
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
    q = 165120;
    L = 78;
    break;
   }
  case 99:
   {
    a[X >> 0] = c[ca >> 2];
    f = X;
    t = 1;
    v = 0;
    u = 165120;
    n = N;
    break;
   }
  case 109:
   {
    if (!0) f = 171348; else f = c[(bh() | 0) + 64 >> 2] | 0;
    n = c[f >> 2] | 0;
    f = 0;
    while (1) {
     if ((d[165130 + f >> 0] | 0) == (n | 0)) {
      L = 85;
      break;
     }
     f = f + 1 | 0;
     if ((f | 0) == 87) {
      n = 87;
      f = 165218;
      break;
     }
    }
    if ((L | 0) == 85) if (!f) {
     n = 165218;
     L = 92;
     break f;
    } else {
     n = f;
     f = 165218;
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
    n = n | 0 ? n : 167022;
    L = 92;
    break;
   }
  case 67:
   {
    c[ha >> 2] = c[ca >> 2];
    c[Y >> 2] = 0;
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
     rg(e, 32, J, 0, H);
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
     G = 167029;
    } else if (!(H & 2048)) {
     G = H & 1;
     F = G;
     G = (G | 0) == 0 ? 167030 : 167035;
    } else {
     F = 1;
     G = 167032;
    }
    h[k >> 3] = p;
    E = c[k + 4 >> 2] & 2146435072;
    do if (E >>> 0 < 2146435072 | (E | 0) == 2146435072 & 0 < 0) {
     w = +tg(p, fa) * 2.0;
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
      f = qg(f, ((f | 0) < 0) << 31 >> 31, $) | 0;
      if ((f | 0) == ($ | 0)) {
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
       a[n >> 0] = d[165104 + G >> 0] | u;
       p = (p - +(G | 0)) * 16.0;
       do if ((f - Z | 0) == 1) {
        if (o & (q & p == 0.0)) break;
        a[f >> 0] = 46;
        f = n + 2 | 0;
       } while (0);
       if (!(p != 0.0)) break; else n = f;
      }
      o = s;
      r = (r | 0) != 0 & (P + f | 0) < (r | 0) ? Q + r - o | 0 : O - o + f | 0;
      q = r + v | 0;
      rg(e, 32, J, q, H);
      if (!(c[e >> 2] & 32)) ng(x, v, e);
      rg(e, 48, J, q, H ^ 65536);
      n = f - Z | 0;
      if (!(c[e >> 2] & 32)) ng(ea, n, e);
      f = ba - o | 0;
      rg(e, 48, r - (n + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) ng(s, f, e);
      rg(e, 32, J, q, H ^ 8192);
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
     E = (n | 0) < 0 ? da : S;
     D = E;
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
         z = _g(c[n >> 2] | 0, 0, s | 0) | 0;
         z = Tg(z | 0, C | 0, o | 0, 0) | 0;
         A = C;
         y = Wg(z | 0, A | 0, 1e9, 0) | 0;
         c[n >> 2] = y;
         o = Yg(z | 0, A | 0, 1e9, 0) | 0;
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
         u = R(A & n, r) | 0;
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
      n = (D - x >> 2) * 9 | 0;
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
     if ((o | 0) < (((y - D >> 2) * 9 | 0) + -9 | 0)) {
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
       n = (D - s >> 2) * 9 | 0;
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
      o = ((B - D >> 2) * 9 | 0) + -9 | 0;
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
      q = qg(q, ((q | 0) < 0) << 31 >> 31, $) | 0;
      if ((ba - q | 0) < 2) do {
       q = q + -1 | 0;
       a[q >> 0] = 48;
      } while ((ba - q | 0) < 2);
      a[q + -1 >> 0] = (n >> 31 & 2) + 43;
      D = q + -2 | 0;
      a[D >> 0] = t;
      n = ba - D | 0;
      t = D;
     }
     v = F + 1 + f + r + n | 0;
     rg(e, 32, J, v, H);
     if (!(c[e >> 2] & 32)) ng(G, F, e);
     rg(e, 48, J, v, H ^ 65536);
     do if (s) {
      q = x >>> 0 > E >>> 0 ? E : x;
      o = q;
      do {
       n = qg(c[o >> 2] | 0, 0, T) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((n | 0) != (T | 0)) break;
        a[V >> 0] = 48;
        n = V;
       } else {
        if (n >>> 0 <= ea >>> 0) break;
        Xg(ea | 0, 48, n - Z | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) ng(n, U - n | 0, e);
       o = o + 4 | 0;
      } while (o >>> 0 <= E >>> 0);
      do if (u | 0) {
       if (c[e >> 2] & 32 | 0) break;
       ng(167064, 1, e);
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < B >>> 0) while (1) {
       n = qg(c[o >> 2] | 0, 0, T) | 0;
       if (n >>> 0 > ea >>> 0) {
        Xg(ea | 0, 48, n - Z | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       }
       if (!(c[e >> 2] & 32)) ng(n, (f | 0) > 9 ? 9 : f, e);
       o = o + 4 | 0;
       n = f + -9 | 0;
       if (!((f | 0) > 9 & o >>> 0 < B >>> 0)) {
        f = n;
        break;
       } else f = n;
      }
      rg(e, 48, f + 9 | 0, 9, 0);
     } else {
      s = y ? B : x + 4 | 0;
      if ((f | 0) > -1) {
       r = (o | 0) == 0;
       q = x;
       do {
        n = qg(c[q >> 2] | 0, 0, T) | 0;
        if ((n | 0) == (T | 0)) {
         a[V >> 0] = 48;
         n = V;
        }
        do if ((q | 0) == (x | 0)) {
         o = n + 1 | 0;
         if (!(c[e >> 2] & 32)) ng(n, 1, e);
         if (r & (f | 0) < 1) {
          n = o;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          n = o;
          break;
         }
         ng(167064, 1, e);
         n = o;
        } else {
         if (n >>> 0 <= ea >>> 0) break;
         Xg(ea | 0, 48, n + _ | 0) | 0;
         do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
        } while (0);
        o = U - n | 0;
        if (!(c[e >> 2] & 32)) ng(n, (f | 0) > (o | 0) ? o : f, e);
        f = f - o | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < s >>> 0 & (f | 0) > -1);
      }
      rg(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      ng(t, ba - t | 0, e);
     } while (0);
     rg(e, 32, J, v, H ^ 8192);
     f = (v | 0) < (J | 0) ? J : v;
    } else {
     s = (t & 32 | 0) != 0;
     r = p != p | 0.0 != 0.0;
     n = r ? 0 : F;
     q = n + 3 | 0;
     rg(e, 32, J, q, o);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      ng(G, n, e);
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) ng(r ? (s ? 167056 : 167060) : s ? 167048 : 167052, 3, e);
     rg(e, 32, J, q, H ^ 8192);
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
    u = 165120;
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
    q = 165120;
    L = 79;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[165104 + (n & 15) >> 0] | q;
     n = Zg(n | 0, o | 0, 4) | 0;
     o = C;
    } while (!((n | 0) == 0 & (o | 0) == 0));
    L = ca;
    if ((s & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     n = s;
     s = 0;
     q = 165120;
     L = 79;
    } else {
     n = s;
     s = 2;
     q = 165120 + (t >> 4) | 0;
     L = 79;
    }
   }
  } else if ((L | 0) == 78) {
   f = qg(f, n, N) | 0;
   n = H;
   s = o;
   L = 79;
  } else if ((L | 0) == 92) {
   L = 0;
   H = jg(n, 0, r) | 0;
   G = (H | 0) == 0;
   f = n;
   t = G ? r : H - n | 0;
   v = 0;
   u = 165120;
   n = G ? n + r | 0 : H;
  } else if ((L | 0) == 96) {
   L = 0;
   o = 0;
   n = 0;
   s = f;
   while (1) {
    q = c[s >> 2] | 0;
    if (!q) break;
    n = sg(ga, q) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   rg(e, 32, J, o, H);
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
     n = sg(ga, n) | 0;
     q = n + q | 0;
     if ((q | 0) > (o | 0)) {
      f = o;
      L = 107;
      break g;
     }
     if (!(c[e >> 2] & 32)) ng(ga, n, e);
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
   rg(e, 32, J, f, H ^ 8192);
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
    t = (n & 1 ^ 1) + (W - f) | 0;
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
  rg(e, 32, n, r, o);
  if (!(c[e >> 2] & 32)) ng(u, v, e);
  rg(e, 48, n, r, o ^ 65536);
  rg(e, 48, q, s, 0);
  if (!(c[e >> 2] & 32)) ng(f, s, e);
  rg(e, 32, n, r, o ^ 8192);
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
   pg(j + (m << 3) | 0, f, g);
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

function ed(d) {
 d = d | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 96 | 0;
 C = D + 48 | 0;
 z = D + 88 | 0;
 A = D;
 B = D + 64 | 0;
 h = D + 56 | 0;
 a[d + 224 >> 0] = 0;
 f = c[42835] | 0;
 g = f + 268 | 0;
 if (!(a[g >> 0] | 0)) g = f; else {
  a[g >> 0] = 0;
  df((c[42822] | 0) + 1168 | 0, c[f + 272 >> 2] | 0);
  g = c[42835] | 0;
 }
 f = g + 268 | 0;
 if (a[f >> 0] | 0) {
  a[f >> 0] = 0;
  df((c[42822] | 0) + 1168 | 0, c[g + 272 >> 2] | 0);
 }
 f = c[g + 256 >> 2] | 0;
 if (f | 0) zg(f);
 zg(g);
 c[42835] = 0;
 f = c[42836] | 0;
 c[h >> 2] = -2;
 dg(B, f + 52 | 0, h);
 u = c[B >> 2] | 0;
 if (!u) {
  c[B + 16 >> 2] = 0;
  c[B + 20 >> 2] = 0;
 } else {
  g = c[B + 8 >> 2] | 0;
  y = c[B + 12 >> 2] | 0;
  v = u + (y << 3) | 0;
  if ((g | 0) == (y | 0)) {
   c[B + 16 >> 2] = 0;
   c[B + 20 >> 2] = 0;
  } else {
   w = f + 168 | 0;
   x = f + 160 | 0;
   y = f + 184 | 0;
   o = f + 196 | 0;
   p = A + 4 | 0;
   q = A + 8 | 0;
   r = A + 32 | 0;
   s = A + 40 | 0;
   t = A + 16 | 0;
   n = u + (g << 3) | 0;
   do {
    g = c[w >> 2] | 0;
    f = g + (e[n >> 1] | 0) | 0;
    l = c[x >> 2] | 0;
    j = n;
    h = c[j >> 2] | 0;
    j = c[j + 4 >> 2] | 0;
    m = l + (f * 144 | 0) | 0;
    if ((h | 0) == (c[m >> 2] | 0) ? (j | 0) == (c[m + 4 >> 2] | 0) : 0) if ((c[l + (f * 144 | 0) + 8 >> 2] | 0) == 3) {
     k = g + (h & 65535) | 0;
     m = l + (k * 144 | 0) | 0;
     if ((h | 0) == (c[m >> 2] | 0) ? (j | 0) == (c[m + 4 >> 2] | 0) : 0) if ((c[l + (k * 144 | 0) + 8 >> 2] | 0) == 3) {
      f = l + (k * 144 | 0) + 76 | 0;
      if (c[f >> 2] | 0) ub(c[l + (k * 144 | 0) + 72 >> 2] | 0, f | 0);
      f = l + (k * 144 | 0) + 64 | 0;
      if (c[f >> 2] | 0) tc(1, f | 0);
      g = f;
      h = g + 76 | 0;
      do {
       c[g >> 2] = 0;
       g = g + 4 | 0;
      } while ((g | 0) < (h | 0));
      f = l + (k * 144 | 0) + 16 | 0;
      g = A;
      h = g + 48 | 0;
      do {
       c[g >> 2] = 0;
       g = g + 4 | 0;
      } while ((g | 0) < (h | 0));
      c[z >> 2] = 0;
      ue(A, z);
      c[p >> 2] = -1;
      c[q >> 2] = 22050;
      c[r >> 2] = 0;
      c[s >> 2] = 16;
      if ((A | 0) == (f | 0)) f = -1; else {
       c[f >> 2] = 0;
       ue(f, A);
       f = c[p >> 2] | 0;
      }
      c[l + (k * 144 | 0) + 20 >> 2] = f;
      f = q;
      h = c[f + 4 >> 2] | 0;
      g = l + (k * 144 | 0) + 24 | 0;
      c[g >> 2] = c[f >> 2];
      c[g + 4 >> 2] = h;
      g = l + (k * 144 | 0) + 32 | 0;
      h = l + (k * 144 | 0) + 48 | 0;
      f = c[h >> 2] | 0;
      if ((f | 0) == (g | 0)) Pc[c[(c[f >> 2] | 0) + 16 >> 2] & 127](f); else if (f | 0) Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
      c[h >> 2] = 0;
      f = c[r >> 2] | 0;
      do if (!f) {
       c[h >> 2] = 0;
       f = 0;
      } else if ((f | 0) == (t | 0)) {
       c[h >> 2] = g;
       Qc[c[(c[t >> 2] | 0) + 12 >> 2] & 127](t, g);
       f = c[r >> 2] | 0;
       break;
      } else {
       c[h >> 2] = f;
       c[r >> 2] = 0;
       f = 0;
       break;
      } while (0);
      c[l + (k * 144 | 0) + 56 >> 2] = c[s >> 2];
      do if ((f | 0) == (t | 0)) Pc[c[(c[t >> 2] | 0) + 16 >> 2] & 127](t); else {
       if (!f) break;
       Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
      } while (0);
      j = n;
      m = c[n >> 2] | 0;
      g = c[w >> 2] | 0;
      l = c[x >> 2] | 0;
      k = c[j >> 2] | 0;
      j = c[j + 4 >> 2] | 0;
     } else {
      m = h;
      k = h;
     } else {
      m = h;
      k = h;
     }
    } else {
     m = h;
     k = h;
    } else {
     m = h;
     k = h;
    }
    h = m & 65535;
    f = g + h | 0;
    g = l + (f * 144 | 0) | 0;
    E = g;
    if ((k | 0) == (c[E >> 2] | 0) ? (j | 0) == (c[E + 4 >> 2] | 0) : 0) {
     E = g;
     c[E >> 2] = -1;
     c[E + 4 >> 2] = -1;
     c[l + (f * 144 | 0) + 8 >> 2] = 0;
     c[l + (f * 144 | 0) + 12 >> 2] = 0;
     Oe(y);
     E = c[o >> 2] | 0;
     c[o >> 2] = E + 1;
     b[(c[y >> 2] | 0) + (E << 1) >> 1] = b[n >> 1] | 0;
    } else {
     c[C >> 2] = m >>> 16;
     c[C + 4 >> 2] = h;
     he(164082, C);
    }
    n = n + 8 | 0;
   } while ((n | 0) != (v | 0));
   c[B + 16 >> 2] = 0;
   c[B + 20 >> 2] = 0;
  }
  zg(u);
 }
 h = c[42836] | 0;
 f = h + 24 | 0;
 g = c[f >> 2] | 0;
 if (g | 0) {
  Kb(g | 0);
  c[f >> 2] = 0;
 }
 f = h + 20 | 0;
 g = c[f >> 2] | 0;
 if (g | 0) {
  Ub(g | 0) | 0;
  c[f >> 2] = 0;
 }
 a[h + 12 >> 0] = 0;
 c[h + 16 >> 2] = 0;
 m = c[42836] | 0;
 f = m + 40 | 0;
 g = c[f >> 2] | 0;
 h = m + 36 | 0;
 j = c[h >> 2] | 0;
 if ((g - j | 0) == 1) c[h >> 2] = j + 1; else c[f >> 2] = g + -1;
 h = c[m + 56 >> 2] | 0;
 f = c[m + 64 >> 2] | 0;
 g = m + 68 | 0;
 if (h | 0) {
  j = c[g >> 2] | 0;
  if ((f | 0) < (j | 0)) {
   k = f;
   do {
    c[h + (k * 24 | 0) >> 2] = 0;
    k = k + 1 | 0;
   } while ((k | 0) != (j | 0));
  }
 }
 c[g >> 2] = f;
 h = c[m + 80 >> 2] | 0;
 f = c[m + 88 >> 2] | 0;
 g = m + 92 | 0;
 if (h | 0) {
  j = c[g >> 2] | 0;
  if ((f | 0) < (j | 0)) {
   k = f;
   do {
    c[h + (k * 12 | 0) >> 2] = 0;
    k = k + 1 | 0;
   } while ((k | 0) != (j | 0));
  }
 }
 c[g >> 2] = f;
 c[m + 120 >> 2] = c[m + 116 >> 2];
 a[m + 52 >> 0] = 0;
 a[m + 140 >> 0] = 0;
 a[m + 144 >> 0] = 0;
 k = m + 160 | 0;
 g = c[k >> 2] | 0;
 l = m + 168 | 0;
 if (!g) f = m + 172 | 0; else {
  h = c[l >> 2] | 0;
  f = m + 172 | 0;
  if ((h | 0) < (c[f >> 2] | 0)) {
   j = c[g + (h * 144 | 0) + 48 >> 2] | 0;
   if ((j | 0) == (g + (h * 144 | 0) + 32 | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else if (j | 0) Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
   c[g + (h * 144 | 0) + 16 >> 2] = 0;
   g = h + 1 | 0;
   if ((g | 0) < (c[f >> 2] | 0)) do {
    h = c[k >> 2] | 0;
    j = c[h + (g * 144 | 0) + 48 >> 2] | 0;
    if ((j | 0) == (h + (g * 144 | 0) + 32 | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else if (j | 0) Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
    c[h + (g * 144 | 0) + 16 >> 2] = 0;
    g = g + 1 | 0;
   } while ((g | 0) < (c[f >> 2] | 0));
  }
 }
 c[f >> 2] = c[l >> 2];
 c[m + 196 >> 2] = c[m + 192 >> 2];
 a[m + 208 >> 0] = 0;
 m = c[42836] | 0;
 n = m + 28 | 0;
 c[m + 200 >> 2] = 0;
 c[m + 204 >> 2] = 0;
 f = c[m + 184 >> 2] | 0;
 if (f | 0) zg(f);
 l = m + 160 | 0;
 g = m + 176 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 g = c[l >> 2] | 0;
 k = m + 168 | 0;
 if (!g) f = m + 172 | 0; else {
  h = c[k >> 2] | 0;
  f = m + 172 | 0;
  if ((h | 0) < (c[f >> 2] | 0)) {
   j = c[g + (h * 144 | 0) + 48 >> 2] | 0;
   if ((j | 0) == (g + (h * 144 | 0) + 32 | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else if (j | 0) Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
   c[g + (h * 144 | 0) + 16 >> 2] = 0;
   g = h + 1 | 0;
   if ((g | 0) < (c[f >> 2] | 0)) do {
    h = c[l >> 2] | 0;
    j = c[h + (g * 144 | 0) + 48 >> 2] | 0;
    do if ((j | 0) == (h + (g * 144 | 0) + 32 | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else {
     if (!j) break;
     Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
    } while (0);
    c[h + (g * 144 | 0) + 16 >> 2] = 0;
    g = g + 1 | 0;
   } while ((g | 0) < (c[f >> 2] | 0));
   g = c[l >> 2] | 0;
  }
  zg(g);
 }
 c[l >> 2] = 0;
 c[m + 164 >> 2] = 0;
 c[k >> 2] = 0;
 c[f >> 2] = 0;
 _f(n);
 zg(m);
 c[42836] = 0;
 E = c[42834] | 0;
 f = E + 704 | 0;
 g = c[f >> 2] | 0;
 if ((g | 0) == (E + 688 | 0)) Pc[c[(c[g >> 2] | 0) + 16 >> 2] & 127](g); else if (g | 0) Pc[c[(c[g >> 2] | 0) + 20 >> 2] & 127](g);
 c[f >> 2] = 0;
 g = c[42834] | 0;
 cc(0, 0, 1, 0) | 0;
 La(0, 0, 1, 0) | 0;
 wb(0, 0, 1, 0) | 0;
 va(152828, 0, 1, 0) | 0;
 kb(152828, 0, 1, 0) | 0;
 fc(152828, 0, 1, 0) | 0;
 wc(152828, 0, 1, 0) | 0;
 wa(152828, 0, 1, 0) | 0;
 jc(152828, 0, 1, 0) | 0;
 qa(152828, 0, 1, 0) | 0;
 ec(152828, 0, 1, 0) | 0;
 Ja(0, 1, 0) | 0;
 Ab(0, 1, 0) | 0;
 n = g + 2128 | 0;
 se(c[42818] | 0, c[n >> 2] | 0);
 c[n >> 2] = 0;
 a[g + 1408 >> 0] = 0;
 g = c[42834] | 0;
 wf(g);
 zg(g);
 c[42834] = 0;
 df((c[42822] | 0) + 1168 | 0, -2);
 se(c[42817] | 0, c[(c[42822] | 0) + 156 >> 2] | 0);
 g = c[42822] | 0;
 n = g + 416 | 0;
 mf(n);
 ea(0);
 c[g + 624 >> 2] = 0;
 c[g + 628 >> 2] = 0;
 l = g + 420 | 0;
 Xg(g + 716 | 0, 0, 132) | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = 0;
 c[l + 16 >> 2] = 0;
 c[l + 20 >> 2] = 0;
 c[l + 24 >> 2] = 0;
 a[n >> 0] = 0;
 n = c[42822] | 0;
 se(c[42818] | 0, c[n + 1696 >> 2] | 0);
 l = n + 1700 | 0;
 g = c[l >> 2] | 0;
 m = n + 1708 | 0;
 a : do if (!g) f = n + 1712 | 0; else {
  h = c[m >> 2] | 0;
  f = n + 1712 | 0;
  E = c[f >> 2] | 0;
  j = g + (E << 2) | 0;
  if ((h | 0) != (E | 0)) {
   g = g + (h << 2) | 0;
   do {
    E = c[g >> 2] | 0;
    Pc[c[(c[E >> 2] | 0) + 16 >> 2] & 127](E);
    g = g + 4 | 0;
   } while ((g | 0) != (j | 0));
   g = c[l >> 2] | 0;
   if (g) {
    j = c[m >> 2] | 0;
    h = c[f >> 2] | 0;
    if ((j | 0) < (h | 0)) {
     k = j;
     while (1) {
      g = g + (k << 2) | 0;
      j = c[g >> 2] | 0;
      if (j) {
       C = j + 4 | 0;
       E = c[C >> 2] | 0;
       c[C >> 2] = E - 1;
       if ((E | 0) == 1) Pc[c[c[j >> 2] >> 2] & 127](j);
       c[g >> 2] = 0;
       h = c[f >> 2] | 0;
      }
      j = k + 1 | 0;
      if ((j | 0) >= (h | 0)) break a;
      g = c[l >> 2] | 0;
      k = j;
     }
    }
   }
  }
 } while (0);
 c[f >> 2] = c[m >> 2];
 f = n + 1180 | 0;
 g = c[f >> 2] | 0;
 h = n + 1176 | 0;
 j = c[h >> 2] | 0;
 if ((g - j | 0) == 1) c[h >> 2] = j + 1; else c[f >> 2] = g + -1;
 h = c[n + 1196 >> 2] | 0;
 f = c[n + 1204 >> 2] | 0;
 g = n + 1208 | 0;
 if (h | 0) {
  j = c[g >> 2] | 0;
  if ((f | 0) < (j | 0)) {
   k = f;
   do {
    c[h + (k * 24 | 0) >> 2] = 0;
    k = k + 1 | 0;
   } while ((k | 0) != (j | 0));
  }
 }
 c[g >> 2] = f;
 h = c[n + 1220 >> 2] | 0;
 f = c[n + 1228 >> 2] | 0;
 g = n + 1232 | 0;
 if (h | 0) {
  j = c[g >> 2] | 0;
  if ((f | 0) < (j | 0)) {
   k = f;
   do {
    c[h + (k * 12 | 0) >> 2] = 0;
    k = k + 1 | 0;
   } while ((k | 0) != (j | 0));
  }
 }
 c[g >> 2] = f;
 c[n + 1260 >> 2] = c[n + 1256 >> 2];
 a[n + 1192 >> 0] = 0;
 a[n + 1280 >> 0] = 0;
 a[n + 1632 >> 0] = 0;
 k = n + 1648 | 0;
 h = c[k >> 2] | 0;
 f = n + 1656 | 0;
 do if (!h) {
  g = n + 1660 | 0;
  f = c[f >> 2] | 0;
 } else {
  f = c[f >> 2] | 0;
  g = n + 1660 | 0;
  j = c[g >> 2] | 0;
  if ((f | 0) < (j | 0)) {
   c[h + (f * 608 | 0) + 16 >> 2] = 0;
   h = f + 1 | 0;
   if ((h | 0) >= (j | 0)) break;
   j = c[k >> 2] | 0;
   k = c[g >> 2] | 0;
   do {
    c[j + (h * 608 | 0) + 16 >> 2] = 0;
    h = h + 1 | 0;
   } while ((h | 0) < (k | 0));
  }
 } while (0);
 c[g >> 2] = f;
 c[n + 1684 >> 2] = c[n + 1680 >> 2];
 k = n + 1408 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 c[k + 16 >> 2] = 0;
 c[k + 20 >> 2] = 0;
 c[k + 24 >> 2] = 0;
 a[k + 28 >> 0] = 0;
 a[n + 1568 >> 0] = 0;
 k = n + 1584 | 0;
 h = c[k >> 2] | 0;
 f = n + 1592 | 0;
 do if (!h) {
  g = n + 1596 | 0;
  f = c[f >> 2] | 0;
 } else {
  f = c[f >> 2] | 0;
  g = n + 1596 | 0;
  j = c[g >> 2] | 0;
  if ((f | 0) >= (j | 0)) break;
  c[h + (f * 776 | 0) + 704 >> 2] = 0;
  c[h + (f * 776 | 0) + 92 >> 2] = 0;
  h = f + 1 | 0;
  if ((h | 0) >= (j | 0)) break;
  j = c[k >> 2] | 0;
  k = c[g >> 2] | 0;
  do {
   c[j + (h * 776 | 0) + 704 >> 2] = 0;
   c[j + (h * 776 | 0) + 92 >> 2] = 0;
   h = h + 1 | 0;
  } while ((h | 0) < (k | 0));
 } while (0);
 c[g >> 2] = f;
 c[n + 1620 >> 2] = c[n + 1616 >> 2];
 j = n + 1376 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[j + 16 >> 2] = 0;
 c[j + 20 >> 2] = 0;
 c[j + 24 >> 2] = 0;
 a[j + 28 >> 0] = 0;
 a[n + 1504 >> 0] = 0;
 j = n + 1520 | 0;
 g = c[j >> 2] | 0;
 k = n + 1528 | 0;
 do if (!g) f = n + 1532 | 0; else {
  h = c[k >> 2] | 0;
  f = n + 1532 | 0;
  if ((h | 0) >= (c[f >> 2] | 0)) break;
  lf(g + (h * 3712 | 0) | 0);
  g = h + 1 | 0;
  if ((g | 0) >= (c[f >> 2] | 0)) break;
  do {
   lf((c[j >> 2] | 0) + (g * 3712 | 0) | 0);
   g = g + 1 | 0;
  } while ((g | 0) < (c[f >> 2] | 0));
 } while (0);
 c[f >> 2] = c[k >> 2];
 c[n + 1556 >> 2] = c[n + 1552 >> 2];
 k = n + 1344 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 c[k + 16 >> 2] = 0;
 c[k + 20 >> 2] = 0;
 c[k + 24 >> 2] = 0;
 a[k + 28 >> 0] = 0;
 a[n + 1440 >> 0] = 0;
 k = n + 1456 | 0;
 h = c[k >> 2] | 0;
 f = n + 1464 | 0;
 do if (!h) {
  g = n + 1468 | 0;
  f = c[f >> 2] | 0;
 } else {
  f = c[f >> 2] | 0;
  g = n + 1468 | 0;
  j = c[g >> 2] | 0;
  if ((f | 0) >= (j | 0)) break;
  c[h + (f * 400 | 0) + 108 >> 2] = 0;
  h = f + 1 | 0;
  if ((h | 0) >= (j | 0)) break;
  j = c[k >> 2] | 0;
  k = c[g >> 2] | 0;
  do {
   c[j + (h * 400 | 0) + 108 >> 2] = 0;
   h = h + 1 | 0;
  } while ((h | 0) < (k | 0));
 } while (0);
 c[g >> 2] = f;
 c[n + 1492 >> 2] = c[n + 1488 >> 2];
 f = n + 1312 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 c[f + 20 >> 2] = 0;
 c[f + 24 >> 2] = 0;
 a[f + 28 >> 0] = 0;
 f = n + 1284 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 c[f + 20 >> 2] = 0;
 c[f + 24 >> 2] = 0;
 f = c[42822] | 0;
 g = 171296;
 h = g + 40 | 0;
 do {
  c[g >> 2] = 0;
  g = g + 4 | 0;
 } while ((g | 0) < (h | 0));
 o = f + 408 | 0;
 sc(c[o >> 2] | 0) | 0;
 c[o >> 2] = 0;
 a[f + 388 >> 0] = 0;
 o = f + 360 | 0;
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 c[o + 12 >> 2] = 0;
 c[o + 16 >> 2] = 0;
 c[o + 20 >> 2] = 0;
 c[o + 24 >> 2] = 0;
 o = c[42822] | 0;
 n = o + 1168 | 0;
 m = o + 1700 | 0;
 c[o + 1716 >> 2] = 0;
 c[o + 1720 >> 2] = 0;
 g = c[m >> 2] | 0;
 l = o + 1708 | 0;
 if (!g) f = o + 1712 | 0; else {
  j = c[l >> 2] | 0;
  f = o + 1712 | 0;
  h = c[f >> 2] | 0;
  if ((j | 0) < (h | 0)) {
   k = j;
   while (1) {
    g = g + (k << 2) | 0;
    j = c[g >> 2] | 0;
    if (j) {
     C = j + 4 | 0;
     E = c[C >> 2] | 0;
     c[C >> 2] = E - 1;
     if ((E | 0) == 1) Pc[c[c[j >> 2] >> 2] & 127](j);
     c[g >> 2] = 0;
     h = c[f >> 2] | 0;
    }
    j = k + 1 | 0;
    if ((j | 0) >= (h | 0)) break;
    g = c[m >> 2] | 0;
    k = j;
   }
   g = c[m >> 2] | 0;
  }
  zg(g);
 }
 c[m >> 2] = 0;
 c[o + 1704 >> 2] = 0;
 c[l >> 2] = 0;
 c[f >> 2] = 0;
 c[o + 1688 >> 2] = 0;
 c[o + 1692 >> 2] = 0;
 f = c[o + 1672 >> 2] | 0;
 if (f | 0) zg(f);
 g = o + 1664 | 0;
 l = o + 1648 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 g = c[l >> 2] | 0;
 k = o + 1656 | 0;
 if (!g) f = o + 1660 | 0; else {
  h = c[k >> 2] | 0;
  f = o + 1660 | 0;
  j = c[f >> 2] | 0;
  do if ((h | 0) < (j | 0)) {
   c[g + (h * 608 | 0) + 16 >> 2] = 0;
   h = h + 1 | 0;
   if ((h | 0) >= (j | 0)) break;
   g = c[l >> 2] | 0;
   j = c[f >> 2] | 0;
   do {
    c[g + (h * 608 | 0) + 16 >> 2] = 0;
    h = h + 1 | 0;
   } while ((h | 0) < (j | 0));
  } while (0);
  zg(g);
 }
 c[l >> 2] = 0;
 c[o + 1652 >> 2] = 0;
 c[k >> 2] = 0;
 c[f >> 2] = 0;
 c[o + 1624 >> 2] = 0;
 c[o + 1628 >> 2] = 0;
 f = c[o + 1608 >> 2] | 0;
 if (f | 0) zg(f);
 g = o + 1600 | 0;
 l = o + 1584 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 g = c[l >> 2] | 0;
 k = o + 1592 | 0;
 if (!g) f = o + 1596 | 0; else {
  h = c[k >> 2] | 0;
  f = o + 1596 | 0;
  j = c[f >> 2] | 0;
  do if ((h | 0) < (j | 0)) {
   c[g + (h * 776 | 0) + 704 >> 2] = 0;
   c[g + (h * 776 | 0) + 92 >> 2] = 0;
   h = h + 1 | 0;
   if ((h | 0) >= (j | 0)) break;
   g = c[l >> 2] | 0;
   j = c[f >> 2] | 0;
   do {
    c[g + (h * 776 | 0) + 704 >> 2] = 0;
    c[g + (h * 776 | 0) + 92 >> 2] = 0;
    h = h + 1 | 0;
   } while ((h | 0) < (j | 0));
  } while (0);
  zg(g);
 }
 c[l >> 2] = 0;
 c[o + 1588 >> 2] = 0;
 c[k >> 2] = 0;
 c[f >> 2] = 0;
 c[o + 1560 >> 2] = 0;
 c[o + 1564 >> 2] = 0;
 f = c[o + 1544 >> 2] | 0;
 if (f | 0) zg(f);
 k = o + 1520 | 0;
 g = o + 1536 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 g = c[k >> 2] | 0;
 j = o + 1528 | 0;
 if (!g) f = o + 1532 | 0; else {
  h = c[j >> 2] | 0;
  f = o + 1532 | 0;
  if ((h | 0) < (c[f >> 2] | 0)) {
   lf(g + (h * 3712 | 0) | 0);
   g = h + 1 | 0;
   if ((g | 0) < (c[f >> 2] | 0)) do {
    lf((c[k >> 2] | 0) + (g * 3712 | 0) | 0);
    g = g + 1 | 0;
   } while ((g | 0) < (c[f >> 2] | 0));
   g = c[k >> 2] | 0;
  }
  zg(g);
 }
 c[k >> 2] = 0;
 c[o + 1524 >> 2] = 0;
 c[j >> 2] = 0;
 c[f >> 2] = 0;
 c[o + 1496 >> 2] = 0;
 c[o + 1500 >> 2] = 0;
 f = c[o + 1480 >> 2] | 0;
 if (f | 0) zg(f);
 g = o + 1472 | 0;
 l = o + 1456 | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 g = c[l >> 2] | 0;
 k = o + 1464 | 0;
 if (!g) f = o + 1468 | 0; else {
  h = c[k >> 2] | 0;
  f = o + 1468 | 0;
  j = c[f >> 2] | 0;
  do if ((h | 0) < (j | 0)) {
   c[g + (h * 400 | 0) + 108 >> 2] = 0;
   h = h + 1 | 0;
   if ((h | 0) >= (j | 0)) break;
   g = c[l >> 2] | 0;
   j = c[f >> 2] | 0;
   do {
    c[g + (h * 400 | 0) + 108 >> 2] = 0;
    h = h + 1 | 0;
   } while ((h | 0) < (j | 0));
  } while (0);
  zg(g);
 }
 c[l >> 2] = 0;
 c[o + 1460 >> 2] = 0;
 c[k >> 2] = 0;
 c[f >> 2] = 0;
 _f(n);
 g = o + 532 | 0;
 f = c[g >> 2] | 0;
 if (f | 0) {
  E = c[f >> 2] | 0;
  c[f >> 2] = E - 1;
  if ((E | 0) == 1) {
   zg(c[g >> 2] | 0);
   c[g >> 2] = 0;
   f = o + 536 | 0;
   c[f >> 2] = 0;
  } else f = o + 536 | 0;
  c[g >> 2] = 0;
  c[f >> 2] = 0;
 }
 g = o + 496 | 0;
 f = c[g >> 2] | 0;
 if (f | 0) {
  E = c[f >> 2] | 0;
  c[f >> 2] = E - 1;
  if ((E | 0) == 1) {
   zg(c[g >> 2] | 0);
   c[g >> 2] = 0;
   f = o + 500 | 0;
   c[f >> 2] = 0;
  } else f = o + 500 | 0;
  c[g >> 2] = 0;
  c[f >> 2] = 0;
 }
 f = o + 388 | 0;
 if (a[f >> 0] | 0) {
  g = 171296;
  h = g + 40 | 0;
  do {
   c[g >> 2] = 0;
   g = g + 4 | 0;
  } while ((g | 0) < (h | 0));
  E = o + 408 | 0;
  sc(c[E >> 2] | 0) | 0;
  c[E >> 2] = 0;
  a[f >> 0] = 0;
  E = o + 360 | 0;
  c[E >> 2] = 0;
  c[E + 4 >> 2] = 0;
  c[E + 8 >> 2] = 0;
  c[E + 12 >> 2] = 0;
  c[E + 16 >> 2] = 0;
  c[E + 20 >> 2] = 0;
  c[E + 24 >> 2] = 0;
 }
 c[42823] = 0;
 l = o + 332 | 0;
 c[o + 348 >> 2] = 0;
 c[o + 352 >> 2] = 0;
 g = c[l >> 2] | 0;
 k = o + 340 | 0;
 if (!g) f = o + 344 | 0; else {
  h = c[k >> 2] | 0;
  f = o + 344 | 0;
  if ((h | 0) < (c[f >> 2] | 0)) {
   while (1) {
    j = c[g + (h << 5) + 24 >> 2] | 0;
    do if ((j | 0) == (g + (h << 5) + 8 | 0)) Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j); else {
     if (!j) break;
     Pc[c[(c[j >> 2] | 0) + 20 >> 2] & 127](j);
    } while (0);
    h = h + 1 | 0;
    if ((h | 0) >= (c[f >> 2] | 0)) break;
    g = c[l >> 2] | 0;
   }
   g = c[l >> 2] | 0;
  }
  zg(g);
 }
 c[l >> 2] = 0;
 c[o + 336 >> 2] = 0;
 c[k >> 2] = 0;
 c[f >> 2] = 0;
 g = o + 320 | 0;
 f = c[g >> 2] | 0;
 if (f | 0) {
  E = c[f >> 2] | 0;
  c[f >> 2] = E - 1;
  if ((E | 0) == 1) {
   zg(c[g >> 2] | 0);
   c[g >> 2] = 0;
   f = o + 324 | 0;
   c[f >> 2] = 0;
  } else f = o + 324 | 0;
  c[g >> 2] = 0;
  c[f >> 2] = 0;
 }
 g = o + 188 | 0;
 f = c[g >> 2] | 0;
 if (f | 0) {
  E = c[f >> 2] | 0;
  c[f >> 2] = E - 1;
  if ((E | 0) == 1) {
   zg(c[g >> 2] | 0);
   c[g >> 2] = 0;
   f = o + 192 | 0;
   c[f >> 2] = 0;
  } else f = o + 192 | 0;
  c[g >> 2] = 0;
  c[f >> 2] = 0;
 }
 g = o + 28 | 0;
 f = c[g >> 2] | 0;
 if (!f) {
  zg(o);
  c[42822] = 0;
  E = ce(d) | 0;
  i = D;
  return E | 0;
 }
 E = c[f >> 2] | 0;
 c[f >> 2] = E - 1;
 if ((E | 0) == 1) {
  zg(c[g >> 2] | 0);
  c[g >> 2] = 0;
  f = o + 32 | 0;
  c[f >> 2] = 0;
 } else f = o + 32 | 0;
 c[g >> 2] = 0;
 c[f >> 2] = 0;
 zg(o);
 c[42822] = 0;
 E = ce(d) | 0;
 i = D;
 return E | 0;
}

function _e(f, h, j) {
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0.0, L = 0.0, M = 0, N = 0, O = 0, P = 0, Q = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0;
 J = i;
 i = i + 160 | 0;
 I = J + 48 | 0;
 q = J + 40 | 0;
 v = J + 32 | 0;
 A = J + 24 | 0;
 z = J + 16 | 0;
 w = J + 8 | 0;
 H = J + 144 | 0;
 r = J + 64 | 0;
 u = J + 148 | 0;
 k = J;
 l = J + 56 | 0;
 m = h + 24 | 0;
 n = j + 92 | 0;
 cg(f, m, n);
 if ((c[f + 4 >> 2] | 0) != -1) {
  i = J;
  return;
 }
 E = h + 280 | 0;
 B = c[E >> 2] | 0;
 c[E >> 2] = B + 1;
 E = h + 320 | 0;
 D = c[E >> 2] | 0;
 F = b[(c[h + 312 >> 2] | 0) + (D << 1) >> 1] | 0;
 c[E >> 2] = D + 1;
 E = _g(e[h + 284 >> 1] | 0, 0, 16) | 0;
 B = B | C;
 F = E | F & 65535;
 E = f;
 c[E >> 2] = F;
 c[E + 4 >> 2] = B;
 E = k;
 c[E >> 2] = F;
 c[E + 4 >> 2] = B;
 c[l >> 2] = c[(c[h >> 2] | 0) + ((c[h + 12 >> 2] | 0) + -1 << 2) >> 2];
 ag(m, n, k, l);
 E = h + 296 | 0;
 B = (c[E >> 2] | 0) + (e[f >> 1] | 0) | 0;
 F = h + 288 | 0;
 D = c[F >> 2] | 0;
 k = D + (B * 400 | 0) | 0;
 c[D + (B * 400 | 0) + 8 >> 2] = 1;
 G = h + 276 | 0;
 c[D + (B * 400 | 0) + 12 >> 2] = c[G >> 2];
 if ((k | 0) != (f | 0)) {
  p = f;
  s = c[p + 4 >> 2] | 0;
  y = k;
  c[y >> 2] = c[p >> 2];
  c[y + 4 >> 2] = s;
 }
 y = D + (B * 400 | 0) + 16 | 0;
 k = j;
 s = c[k + 4 >> 2] | 0;
 p = y;
 c[p >> 2] = c[k >> 2];
 c[p + 4 >> 2] = s;
 p = D + (B * 400 | 0) + 24 | 0;
 Te(p, j + 8 | 0);
 s = D + (B * 400 | 0) + 92 | 0;
 k = j + 76 | 0;
 c[s >> 2] = c[k >> 2];
 c[s + 4 >> 2] = c[k + 4 >> 2];
 c[s + 8 >> 2] = c[k + 8 >> 2];
 a[s + 12 >> 0] = a[k + 12 >> 0] | 0;
 k = D + (B * 400 | 0) + 108 | 0;
 if ((y | 0) == (j | 0)) k = c[j + 96 >> 2] | 0; else {
  c[k >> 2] = 0;
  ue(k, j + 92 | 0);
  k = c[j + 96 >> 2] | 0;
  n = j + 104 | 0;
  o = c[n + 4 >> 2] | 0;
  y = D + (B * 400 | 0) + 120 | 0;
  c[y >> 2] = c[n >> 2];
  c[y + 4 >> 2] = o;
 }
 c[D + (B * 400 | 0) + 112 >> 2] = k;
 o = D + (B * 400 | 0) + 128 | 0;
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
 y = h + 144 | 0;
 k = a[D + (B * 400 | 0) + 204 >> 0] | 0;
 a : do if (!(k & 4)) {
  if (!(k & 8)) {
   ie(151238, q);
   Wb();
  }
  wa = d[p >> 0] | d[p + 1 >> 0] << 8;
  va = D + (B * 400 | 0) + 26 | 0;
  va = d[va >> 0] | d[va + 1 >> 0] << 8;
  ua = D + (B * 400 | 0) + 28 | 0;
  ua = d[ua >> 0] | d[ua + 1 >> 0] << 8;
  ta = D + (B * 400 | 0) + 30 | 0;
  ta = d[ta >> 0] | d[ta + 1 >> 0] << 8;
  sa = D + (B * 400 | 0) + 32 | 0;
  sa = d[sa >> 0] | d[sa + 1 >> 0] << 8;
  ra = D + (B * 400 | 0) + 34 | 0;
  ra = d[ra >> 0] | d[ra + 1 >> 0] << 8;
  qa = D + (B * 400 | 0) + 36 | 0;
  qa = d[qa >> 0] | d[qa + 1 >> 0] << 8;
  pa = D + (B * 400 | 0) + 38 | 0;
  pa = d[pa >> 0] | d[pa + 1 >> 0] << 8;
  oa = D + (B * 400 | 0) + 40 | 0;
  oa = d[oa >> 0] | d[oa + 1 >> 0] << 8;
  ma = D + (B * 400 | 0) + 42 | 0;
  ma = d[ma >> 0] | d[ma + 1 >> 0] << 8;
  la = D + (B * 400 | 0) + 44 | 0;
  la = d[la >> 0] | d[la + 1 >> 0] << 8;
  ka = D + (B * 400 | 0) + 46 | 0;
  ka = d[ka >> 0] | d[ka + 1 >> 0] << 8;
  ja = D + (B * 400 | 0) + 48 | 0;
  ja = d[ja >> 0] | d[ja + 1 >> 0] << 8;
  ia = D + (B * 400 | 0) + 50 | 0;
  ia = d[ia >> 0] | d[ia + 1 >> 0] << 8;
  ha = D + (B * 400 | 0) + 52 | 0;
  ha = d[ha >> 0] | d[ha + 1 >> 0] << 8;
  ga = D + (B * 400 | 0) + 54 | 0;
  ga = d[ga >> 0] | d[ga + 1 >> 0] << 8;
  fa = D + (B * 400 | 0) + 56 | 0;
  fa = d[fa >> 0] | d[fa + 1 >> 0] << 8;
  da = a[D + (B * 400 | 0) + 58 >> 0] | 0;
  ca = a[D + (B * 400 | 0) + 59 >> 0] | 0;
  ba = a[D + (B * 400 | 0) + 60 >> 0] | 0;
  aa = a[D + (B * 400 | 0) + 61 >> 0] | 0;
  $ = a[D + (B * 400 | 0) + 62 >> 0] | 0;
  _ = a[D + (B * 400 | 0) + 63 >> 0] | 0;
  Z = a[D + (B * 400 | 0) + 64 >> 0] | 0;
  Y = a[D + (B * 400 | 0) + 65 >> 0] | 0;
  X = a[D + (B * 400 | 0) + 66 >> 0] | 0;
  W = a[D + (B * 400 | 0) + 67 >> 0] | 0;
  V = a[D + (B * 400 | 0) + 68 >> 0] | 0;
  U = a[D + (B * 400 | 0) + 69 >> 0] | 0;
  T = a[D + (B * 400 | 0) + 70 >> 0] | 0;
  S = a[D + (B * 400 | 0) + 71 >> 0] | 0;
  Q = a[D + (B * 400 | 0) + 72 >> 0] | 0;
  P = a[D + (B * 400 | 0) + 73 >> 0] | 0;
  O = a[D + (B * 400 | 0) + 74 >> 0] | 0;
  N = a[D + (B * 400 | 0) + 75 >> 0] | 0;
  M = a[D + (B * 400 | 0) + 76 >> 0] | 0;
  n = a[D + (B * 400 | 0) + 77 >> 0] | 0;
  o = a[D + (B * 400 | 0) + 78 >> 0] | 0;
  j = a[D + (B * 400 | 0) + 79 >> 0] | 0;
  p = a[D + (B * 400 | 0) + 80 >> 0] | 0;
  h = a[D + (B * 400 | 0) + 81 >> 0] | 0;
  q = a[D + (B * 400 | 0) + 82 >> 0] | 0;
  s = a[D + (B * 400 | 0) + 83 >> 0] | 0;
  w = a[D + (B * 400 | 0) + 84 >> 0] | 0;
  x = a[D + (B * 400 | 0) + 85 >> 0] | 0;
  z = a[D + (B * 400 | 0) + 86 >> 0] | 0;
  A = a[D + (B * 400 | 0) + 87 >> 0] | 0;
  m = a[D + (B * 400 | 0) + 88 >> 0] | 0;
  k = a[D + (B * 400 | 0) + 89 >> 0] | 0;
  l = D + (B * 400 | 0) + 90 | 0;
  l = d[l >> 0] | d[l + 1 >> 0] << 8;
  c[D + (B * 400 | 0) + 208 >> 2] = 4;
  ea = D + (B * 400 | 0) + 212 | 0;
  a[ea >> 0] = wa;
  a[ea + 1 >> 0] = wa >> 8;
  ea = D + (B * 400 | 0) + 214 | 0;
  a[ea >> 0] = va;
  a[ea + 1 >> 0] = va >> 8;
  ea = D + (B * 400 | 0) + 216 | 0;
  a[ea >> 0] = ua;
  a[ea + 1 >> 0] = ua >> 8;
  ea = D + (B * 400 | 0) + 218 | 0;
  a[ea >> 0] = ta;
  a[ea + 1 >> 0] = ta >> 8;
  ea = D + (B * 400 | 0) + 220 | 0;
  a[ea >> 0] = sa;
  a[ea + 1 >> 0] = sa >> 8;
  ea = D + (B * 400 | 0) + 222 | 0;
  a[ea >> 0] = ra;
  a[ea + 1 >> 0] = ra >> 8;
  ea = D + (B * 400 | 0) + 224 | 0;
  a[ea >> 0] = qa;
  a[ea + 1 >> 0] = qa >> 8;
  ea = D + (B * 400 | 0) + 226 | 0;
  a[ea >> 0] = pa;
  a[ea + 1 >> 0] = pa >> 8;
  ea = D + (B * 400 | 0) + 228 | 0;
  a[ea >> 0] = oa;
  a[ea + 1 >> 0] = oa >> 8;
  ea = D + (B * 400 | 0) + 230 | 0;
  a[ea >> 0] = ma;
  a[ea + 1 >> 0] = ma >> 8;
  ea = D + (B * 400 | 0) + 232 | 0;
  a[ea >> 0] = la;
  a[ea + 1 >> 0] = la >> 8;
  ea = D + (B * 400 | 0) + 234 | 0;
  a[ea >> 0] = ka;
  a[ea + 1 >> 0] = ka >> 8;
  ea = D + (B * 400 | 0) + 236 | 0;
  a[ea >> 0] = ja;
  a[ea + 1 >> 0] = ja >> 8;
  ea = D + (B * 400 | 0) + 238 | 0;
  a[ea >> 0] = ia;
  a[ea + 1 >> 0] = ia >> 8;
  ea = D + (B * 400 | 0) + 240 | 0;
  a[ea >> 0] = ha;
  a[ea + 1 >> 0] = ha >> 8;
  ea = D + (B * 400 | 0) + 242 | 0;
  a[ea >> 0] = ga;
  a[ea + 1 >> 0] = ga >> 8;
  ea = D + (B * 400 | 0) + 244 | 0;
  a[ea >> 0] = fa;
  a[ea + 1 >> 0] = fa >> 8;
  a[D + (B * 400 | 0) + 246 >> 0] = da;
  a[D + (B * 400 | 0) + 247 >> 0] = ca;
  a[D + (B * 400 | 0) + 248 >> 0] = ba;
  a[D + (B * 400 | 0) + 249 >> 0] = aa;
  a[D + (B * 400 | 0) + 250 >> 0] = $;
  a[D + (B * 400 | 0) + 251 >> 0] = _;
  a[D + (B * 400 | 0) + 252 >> 0] = Z;
  a[D + (B * 400 | 0) + 253 >> 0] = Y;
  a[D + (B * 400 | 0) + 254 >> 0] = X;
  a[D + (B * 400 | 0) + 255 >> 0] = W;
  a[D + (B * 400 | 0) + 256 >> 0] = V;
  a[D + (B * 400 | 0) + 257 >> 0] = U;
  a[D + (B * 400 | 0) + 258 >> 0] = T;
  a[D + (B * 400 | 0) + 259 >> 0] = S;
  a[D + (B * 400 | 0) + 260 >> 0] = Q;
  a[D + (B * 400 | 0) + 261 >> 0] = P;
  a[D + (B * 400 | 0) + 262 >> 0] = O;
  a[D + (B * 400 | 0) + 263 >> 0] = N;
  a[D + (B * 400 | 0) + 264 >> 0] = M;
  a[D + (B * 400 | 0) + 265 >> 0] = n;
  a[D + (B * 400 | 0) + 266 >> 0] = o;
  a[D + (B * 400 | 0) + 267 >> 0] = j;
  a[D + (B * 400 | 0) + 268 >> 0] = p;
  a[D + (B * 400 | 0) + 269 >> 0] = h;
  a[D + (B * 400 | 0) + 270 >> 0] = q;
  a[D + (B * 400 | 0) + 271 >> 0] = s;
  a[D + (B * 400 | 0) + 272 >> 0] = w;
  a[D + (B * 400 | 0) + 273 >> 0] = x;
  a[D + (B * 400 | 0) + 274 >> 0] = z;
  a[D + (B * 400 | 0) + 275 >> 0] = A;
  a[D + (B * 400 | 0) + 276 >> 0] = m;
  a[D + (B * 400 | 0) + 277 >> 0] = k;
  k = D + (B * 400 | 0) + 278 | 0;
  a[k >> 0] = l;
  a[k + 1 >> 0] = l >> 8;
  c[D + (B * 400 | 0) + 280 >> 2] = 0;
  c[D + (B * 400 | 0) + 284 >> 2] = 6;
  c[D + (B * 400 | 0) + 288 >> 2] = 1;
  k = D + (B * 400 | 0) + 292 | 0;
  c[k >> 2] = 0;
  c[D + (B * 400 | 0) + 296 >> 2] = 1;
  l = D + (B * 400 | 0) + 300 | 0;
  c[l >> 2] = 0;
  c[l + 4 >> 2] = 6;
  l = (a[D + (B * 400 | 0) + 104 >> 0] | 0) != 0;
  L = l ? 0.0 : 1.0;
  K = l ? 1.0 : 0.0;
  g[r >> 2] = -1.0;
  g[r + 4 >> 2] = 1.0;
  g[r + 8 >> 2] = 0.0;
  g[r + 12 >> 2] = 0.0;
  g[r + 16 >> 2] = L;
  g[r + 20 >> 2] = 1.0;
  g[r + 24 >> 2] = 1.0;
  g[r + 28 >> 2] = 0.0;
  g[r + 32 >> 2] = 1.0;
  g[r + 36 >> 2] = L;
  g[r + 40 >> 2] = 1.0;
  g[r + 44 >> 2] = -1.0;
  g[r + 48 >> 2] = 0.0;
  g[r + 52 >> 2] = 1.0;
  g[r + 56 >> 2] = K;
  g[r + 60 >> 2] = -1.0;
  g[r + 64 >> 2] = -1.0;
  g[r + 68 >> 2] = 0.0;
  g[r + 72 >> 2] = 0.0;
  g[r + 76 >> 2] = K;
  b[u >> 1] = b[68510] | 0;
  b[u + 2 >> 1] = b[68511] | 0;
  b[u + 4 >> 1] = b[68512] | 0;
  b[u + 6 >> 1] = b[68513] | 0;
  b[u + 8 >> 1] = b[68514] | 0;
  b[u + 10 >> 1] = b[68515] | 0;
  mf(c[y >> 2] | 0);
  c[H >> 2] = 0;
  Ca(1, H | 0);
  l = c[H >> 2] | 0;
  m = (c[y >> 2] | 0) + 292 | 0;
  if ((c[m >> 2] | 0) != (l | 0)) {
   c[m >> 2] = l;
   na(34962, l | 0);
  }
  Yb(34962, 80, r | 0, 35044);
  mf(c[y >> 2] | 0);
  c[D + (B * 400 | 0) + 372 >> 2] = c[H >> 2];
  k = c[k >> 2] | 0;
  mf(c[y >> 2] | 0);
  c[H >> 2] = 0;
  Ca(1, H | 0);
  l = c[H >> 2] | 0;
  m = (c[y >> 2] | 0) + 296 | 0;
  if ((c[m >> 2] | 0) != (l | 0)) {
   c[m >> 2] = l;
   na(34963, l | 0);
  }
  switch (k | 0) {
  case 0:
   {
    t = 35044;
    break;
   }
  case 1:
   {
    t = 35048;
    break;
   }
  case 2:
   {
    t = 35040;
    break;
   }
  default:
   {
    ie(152061, v);
    Wb();
   }
  }
  Yb(34963, 12, u | 0, t | 0);
  mf(c[y >> 2] | 0);
  c[D + (B * 400 | 0) + 388 >> 2] = c[H >> 2];
 } else {
  za = d[p >> 0] | d[p + 1 >> 0] << 8;
  ya = D + (B * 400 | 0) + 26 | 0;
  ya = d[ya >> 0] | d[ya + 1 >> 0] << 8;
  xa = D + (B * 400 | 0) + 28 | 0;
  xa = d[xa >> 0] | d[xa + 1 >> 0] << 8;
  m = D + (B * 400 | 0) + 30 | 0;
  m = d[m >> 0] | d[m + 1 >> 0] << 8;
  n = D + (B * 400 | 0) + 32 | 0;
  n = d[n >> 0] | d[n + 1 >> 0] << 8;
  o = D + (B * 400 | 0) + 34 | 0;
  o = d[o >> 0] | d[o + 1 >> 0] << 8;
  j = D + (B * 400 | 0) + 36 | 0;
  j = d[j >> 0] | d[j + 1 >> 0] << 8;
  p = D + (B * 400 | 0) + 38 | 0;
  p = d[p >> 0] | d[p + 1 >> 0] << 8;
  u = D + (B * 400 | 0) + 40 | 0;
  u = d[u >> 0] | d[u + 1 >> 0] << 8;
  v = D + (B * 400 | 0) + 42 | 0;
  v = d[v >> 0] | d[v + 1 >> 0] << 8;
  M = D + (B * 400 | 0) + 44 | 0;
  M = d[M >> 0] | d[M + 1 >> 0] << 8;
  N = D + (B * 400 | 0) + 46 | 0;
  N = d[N >> 0] | d[N + 1 >> 0] << 8;
  O = D + (B * 400 | 0) + 48 | 0;
  O = d[O >> 0] | d[O + 1 >> 0] << 8;
  P = D + (B * 400 | 0) + 50 | 0;
  P = d[P >> 0] | d[P + 1 >> 0] << 8;
  Q = D + (B * 400 | 0) + 52 | 0;
  Q = d[Q >> 0] | d[Q + 1 >> 0] << 8;
  S = D + (B * 400 | 0) + 54 | 0;
  S = d[S >> 0] | d[S + 1 >> 0] << 8;
  T = D + (B * 400 | 0) + 56 | 0;
  T = d[T >> 0] | d[T + 1 >> 0] << 8;
  V = a[D + (B * 400 | 0) + 58 >> 0] | 0;
  W = a[D + (B * 400 | 0) + 59 >> 0] | 0;
  X = a[D + (B * 400 | 0) + 60 >> 0] | 0;
  Y = a[D + (B * 400 | 0) + 61 >> 0] | 0;
  Z = a[D + (B * 400 | 0) + 62 >> 0] | 0;
  _ = a[D + (B * 400 | 0) + 63 >> 0] | 0;
  $ = a[D + (B * 400 | 0) + 64 >> 0] | 0;
  aa = a[D + (B * 400 | 0) + 65 >> 0] | 0;
  ba = a[D + (B * 400 | 0) + 66 >> 0] | 0;
  ca = a[D + (B * 400 | 0) + 67 >> 0] | 0;
  da = a[D + (B * 400 | 0) + 68 >> 0] | 0;
  ea = a[D + (B * 400 | 0) + 69 >> 0] | 0;
  fa = a[D + (B * 400 | 0) + 70 >> 0] | 0;
  ga = a[D + (B * 400 | 0) + 71 >> 0] | 0;
  ha = a[D + (B * 400 | 0) + 72 >> 0] | 0;
  ia = a[D + (B * 400 | 0) + 73 >> 0] | 0;
  ja = a[D + (B * 400 | 0) + 74 >> 0] | 0;
  ka = a[D + (B * 400 | 0) + 75 >> 0] | 0;
  la = a[D + (B * 400 | 0) + 76 >> 0] | 0;
  ma = a[D + (B * 400 | 0) + 77 >> 0] | 0;
  oa = a[D + (B * 400 | 0) + 78 >> 0] | 0;
  pa = a[D + (B * 400 | 0) + 79 >> 0] | 0;
  qa = a[D + (B * 400 | 0) + 80 >> 0] | 0;
  ra = a[D + (B * 400 | 0) + 81 >> 0] | 0;
  sa = a[D + (B * 400 | 0) + 82 >> 0] | 0;
  ta = a[D + (B * 400 | 0) + 83 >> 0] | 0;
  ua = a[D + (B * 400 | 0) + 84 >> 0] | 0;
  va = a[D + (B * 400 | 0) + 85 >> 0] | 0;
  l = a[D + (B * 400 | 0) + 86 >> 0] | 0;
  q = a[D + (B * 400 | 0) + 87 >> 0] | 0;
  r = a[D + (B * 400 | 0) + 88 >> 0] | 0;
  h = a[D + (B * 400 | 0) + 89 >> 0] | 0;
  wa = D + (B * 400 | 0) + 90 | 0;
  wa = d[wa >> 0] | d[wa + 1 >> 0] << 8;
  t = c[D + (B * 400 | 0) + 16 >> 2] | 0;
  k = D + (B * 400 | 0) + 208 | 0;
  c[k >> 2] = c[s >> 2];
  U = D + (B * 400 | 0) + 212 | 0;
  a[U >> 0] = za;
  a[U + 1 >> 0] = za >> 8;
  U = D + (B * 400 | 0) + 214 | 0;
  a[U >> 0] = ya;
  a[U + 1 >> 0] = ya >> 8;
  U = D + (B * 400 | 0) + 216 | 0;
  a[U >> 0] = xa;
  a[U + 1 >> 0] = xa >> 8;
  U = D + (B * 400 | 0) + 218 | 0;
  a[U >> 0] = m;
  a[U + 1 >> 0] = m >> 8;
  U = D + (B * 400 | 0) + 220 | 0;
  a[U >> 0] = n;
  a[U + 1 >> 0] = n >> 8;
  U = D + (B * 400 | 0) + 222 | 0;
  a[U >> 0] = o;
  a[U + 1 >> 0] = o >> 8;
  U = D + (B * 400 | 0) + 224 | 0;
  a[U >> 0] = j;
  a[U + 1 >> 0] = j >> 8;
  U = D + (B * 400 | 0) + 226 | 0;
  a[U >> 0] = p;
  a[U + 1 >> 0] = p >> 8;
  U = D + (B * 400 | 0) + 228 | 0;
  a[U >> 0] = u;
  a[U + 1 >> 0] = u >> 8;
  U = D + (B * 400 | 0) + 230 | 0;
  a[U >> 0] = v;
  a[U + 1 >> 0] = v >> 8;
  U = D + (B * 400 | 0) + 232 | 0;
  a[U >> 0] = M;
  a[U + 1 >> 0] = M >> 8;
  U = D + (B * 400 | 0) + 234 | 0;
  a[U >> 0] = N;
  a[U + 1 >> 0] = N >> 8;
  U = D + (B * 400 | 0) + 236 | 0;
  a[U >> 0] = O;
  a[U + 1 >> 0] = O >> 8;
  U = D + (B * 400 | 0) + 238 | 0;
  a[U >> 0] = P;
  a[U + 1 >> 0] = P >> 8;
  U = D + (B * 400 | 0) + 240 | 0;
  a[U >> 0] = Q;
  a[U + 1 >> 0] = Q >> 8;
  U = D + (B * 400 | 0) + 242 | 0;
  a[U >> 0] = S;
  a[U + 1 >> 0] = S >> 8;
  U = D + (B * 400 | 0) + 244 | 0;
  a[U >> 0] = T;
  a[U + 1 >> 0] = T >> 8;
  a[D + (B * 400 | 0) + 246 >> 0] = V;
  a[D + (B * 400 | 0) + 247 >> 0] = W;
  a[D + (B * 400 | 0) + 248 >> 0] = X;
  a[D + (B * 400 | 0) + 249 >> 0] = Y;
  a[D + (B * 400 | 0) + 250 >> 0] = Z;
  a[D + (B * 400 | 0) + 251 >> 0] = _;
  a[D + (B * 400 | 0) + 252 >> 0] = $;
  a[D + (B * 400 | 0) + 253 >> 0] = aa;
  a[D + (B * 400 | 0) + 254 >> 0] = ba;
  a[D + (B * 400 | 0) + 255 >> 0] = ca;
  a[D + (B * 400 | 0) + 256 >> 0] = da;
  a[D + (B * 400 | 0) + 257 >> 0] = ea;
  a[D + (B * 400 | 0) + 258 >> 0] = fa;
  a[D + (B * 400 | 0) + 259 >> 0] = ga;
  a[D + (B * 400 | 0) + 260 >> 0] = ha;
  a[D + (B * 400 | 0) + 261 >> 0] = ia;
  a[D + (B * 400 | 0) + 262 >> 0] = ja;
  a[D + (B * 400 | 0) + 263 >> 0] = ka;
  a[D + (B * 400 | 0) + 264 >> 0] = la;
  a[D + (B * 400 | 0) + 265 >> 0] = ma;
  a[D + (B * 400 | 0) + 266 >> 0] = oa;
  a[D + (B * 400 | 0) + 267 >> 0] = pa;
  a[D + (B * 400 | 0) + 268 >> 0] = qa;
  a[D + (B * 400 | 0) + 269 >> 0] = ra;
  a[D + (B * 400 | 0) + 270 >> 0] = sa;
  a[D + (B * 400 | 0) + 271 >> 0] = ta;
  a[D + (B * 400 | 0) + 272 >> 0] = ua;
  a[D + (B * 400 | 0) + 273 >> 0] = va;
  a[D + (B * 400 | 0) + 274 >> 0] = l;
  a[D + (B * 400 | 0) + 275 >> 0] = q;
  a[D + (B * 400 | 0) + 276 >> 0] = r;
  a[D + (B * 400 | 0) + 277 >> 0] = h;
  h = D + (B * 400 | 0) + 278 | 0;
  a[h >> 0] = wa;
  a[h + 1 >> 0] = wa >> 8;
  h = D + (B * 400 | 0) + 280 | 0;
  c[h >> 2] = t;
  t = c[D + (B * 400 | 0) + 100 >> 2] | 0;
  wa = c[D + (B * 400 | 0) + 20 >> 2] | 0;
  r = D + (B * 400 | 0) + 284 | 0;
  c[r >> 2] = c[D + (B * 400 | 0) + 96 >> 2];
  q = D + (B * 400 | 0) + 288 | 0;
  c[q >> 2] = t;
  t = D + (B * 400 | 0) + 292 | 0;
  c[t >> 2] = wa;
  wa = c[D + (B * 400 | 0) + 136 >> 2] | 0;
  l = D + (B * 400 | 0) + 296 | 0;
  c[l >> 2] = wa;
  if ((wa | 0) > 0) {
   m = 0;
   do {
    xa = D + (B * 400 | 0) + 140 + (m << 3) | 0;
    ya = c[xa + 4 >> 2] | 0;
    za = D + (B * 400 | 0) + 300 + (m << 3) | 0;
    c[za >> 2] = c[xa >> 2];
    c[za + 4 >> 2] = ya;
    m = m + 1 | 0;
   } while ((m | 0) < (c[l >> 2] | 0));
  }
  b : do if ((c[s >> 2] | 0) > 0) {
   j = R(d[D + (B * 400 | 0) + 279 >> 0] | 0, c[k >> 2] | 0) | 0;
   o = c[h >> 2] | 0;
   p = D + (B * 400 | 0) + 368 | 0;
   a[p >> 0] = (o | 0) == 2 ? 2 : 1;
   k = 0;
   c : while (1) {
    n = k & 255;
    mf(c[y >> 2] | 0);
    c[H >> 2] = 0;
    Ca(1, H | 0);
    l = c[H >> 2] | 0;
    m = (c[y >> 2] | 0) + 292 | 0;
    if ((c[m >> 2] | 0) != (l | 0)) {
     c[m >> 2] = l;
     na(34962, l | 0);
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
    Yb(34962, j | 0, 0, l | 0);
    mf(c[y >> 2] | 0);
    c[D + (B * 400 | 0) + 372 + (n << 2) >> 2] = c[H >> 2];
    k = k + 1 << 24 >> 24;
    if ((k & 255) >= (d[p >> 0] | 0)) break b;
    o = c[h >> 2] | 0;
   }
   ie(152061, w);
   Wb();
  } while (0);
  l = c[q >> 2] | 0;
  if (l | 0) {
   m = c[t >> 2] | 0;
   p = D + (B * 400 | 0) + 384 | 0;
   a[p >> 0] = (m | 0) == 2 ? 2 : 1;
   k = c[r >> 2] | 0;
   switch (l | 0) {
   case 2:
    {
     x = 4;
     break;
    }
   case 1:
    {
     x = 2;
     break;
    }
   default:
    {
     ie(151513, z);
     Wb();
    }
   }
   j = R(x, k) | 0;
   o = m;
   k = 0;
   d : while (1) {
    n = k & 255;
    mf(c[y >> 2] | 0);
    c[H >> 2] = 0;
    Ca(1, H | 0);
    l = c[H >> 2] | 0;
    m = (c[y >> 2] | 0) + 296 | 0;
    if ((c[m >> 2] | 0) != (l | 0)) {
     c[m >> 2] = l;
     na(34963, l | 0);
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
     break d;
    }
    Yb(34963, j | 0, 0, l | 0);
    mf(c[y >> 2] | 0);
    c[D + (B * 400 | 0) + 388 + (n << 2) >> 2] = c[H >> 2];
    k = k + 1 << 24 >> 24;
    if ((k & 255) >= (d[p >> 0] | 0)) break a;
    o = c[t >> 2] | 0;
   }
   ie(152061, A);
   Wb();
  }
 } while (0);
 m = c[f >> 2] | 0;
 n = m & 65535;
 l = (c[E >> 2] | 0) + n | 0;
 k = c[F >> 2] | 0;
 ya = f;
 za = k + (l * 400 | 0) | 0;
 if ((c[ya >> 2] | 0) == (c[za >> 2] | 0) ? (c[ya + 4 >> 2] | 0) == (c[za + 4 >> 2] | 0) : 0) {
  c[k + (l * 400 | 0) + 8 >> 2] = 3;
  c[k + (l * 400 | 0) + 12 >> 2] = c[G >> 2];
  i = J;
  return;
 } else {
  c[I >> 2] = m >>> 16;
  c[I + 4 >> 2] = n;
  he(164012, I);
  i = J;
  return;
 }
}

function yf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, h = 0, j = 0.0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 64 | 0;
 v = w;
 if (!(a[b + 1288 >> 0] | 0)) {
  i = w;
  return;
 }
 if (a[b + 1409 >> 0] | 0) if ((zf(b + 1416 | 0, d) | 0) == 5) {
  a[b + 1289 >> 0] = 1;
  f = b + 1420 | 0;
  e = c[f >> 2] | 0;
  f = c[f + 4 >> 2] | 0;
  m = b + 1300 | 0;
  c[m >> 2] = e;
  c[m + 4 >> 2] = f;
  m = b + 1332 | 0;
  c[m >> 2] = e;
  c[m + 4 >> 2] = f;
  m = c[b + 1364 >> 2] | 0;
  n = c[b + 1360 >> 2] | 0;
  if ((m | 0) != (n | 0)) {
   h = v + 4 | 0;
   t = v;
   u = t + 52 | 0;
   do {
    c[t >> 2] = 0;
    t = t + 4 | 0;
   } while ((t | 0) < (u | 0));
   u = h;
   c[u >> 2] = e;
   c[u + 4 >> 2] = f;
   u = v + 20 | 0;
   c[u >> 2] = e;
   c[u + 4 >> 2] = f;
   e = c[b + 1352 >> 2] | 0;
   if (e | 0) {
    f = e + (m << 5) | 0;
    e = e + (n << 5) | 0;
    do {
     u = c[e + 24 >> 2] | 0;
     Qc[c[(c[u >> 2] | 0) + 24 >> 2] & 127](u, v);
     e = e + 32 | 0;
    } while ((e | 0) != (f | 0));
   }
  }
 }
 if (a[b + 1410 >> 0] | 0) if ((zf(b + 1592 | 0, d) | 0) == 5) {
  a[b + 1290 >> 0] = 1;
  f = b + 1596 | 0;
  e = c[f >> 2] | 0;
  f = c[f + 4 >> 2] | 0;
  h = b + 1300 | 0;
  c[h >> 2] = e;
  c[h + 4 >> 2] = f;
  h = b + 1332 | 0;
  c[h >> 2] = e;
  c[h + 4 >> 2] = f;
  h = c[b + 1364 >> 2] | 0;
  m = c[b + 1360 >> 2] | 0;
  if ((h | 0) != (m | 0)) {
   t = v + 4 | 0;
   u = t + 48 | 0;
   do {
    c[t >> 2] = 0;
    t = t + 4 | 0;
   } while ((t | 0) < (u | 0));
   c[v >> 2] = 1;
   u = v + 4 | 0;
   c[u >> 2] = e;
   c[u + 4 >> 2] = f;
   u = v + 20 | 0;
   c[u >> 2] = e;
   c[u + 4 >> 2] = f;
   e = c[b + 1352 >> 2] | 0;
   if (e | 0) {
    f = e + (h << 5) | 0;
    e = e + (m << 5) | 0;
    do {
     u = c[e + 24 >> 2] | 0;
     Qc[c[(c[u >> 2] | 0) + 24 >> 2] & 127](u, v);
     e = e + 32 | 0;
    } while ((e | 0) != (f | 0));
   }
  }
 }
 a : do if (a[b + 1412 >> 0] | 0) {
  p = b + 1768 | 0;
  e = c[d >> 2] | 0;
  b : do if ((e | 0) == 3) {
   e = b + 1784 | 0;
   if ((c[e >> 2] | 0) != 4) {
    c[e >> 2] = 4;
    Xg(b + 1792 | 0, 0, 140) | 0;
   }
   a[b + 1936 >> 0] = 0;
  } else {
   f = d + 16 | 0;
   h = b + 1784 | 0;
   m = (c[h >> 2] | 0) == 4;
   if ((c[f >> 2] | 0) != 1) {
    if (!m) {
     c[h >> 2] = 4;
     Xg(b + 1792 | 0, 0, 140) | 0;
    }
    a[b + 1936 >> 0] = 0;
    break;
   }
   do if (!m) {
    if ((c[b + 1800 >> 2] | 0) == 1) if ((c[b + 1804 >> 2] | 0) == (c[d + 20 >> 2] | 0)) break;
    c[h >> 2] = 4;
    Xg(b + 1792 | 0, 0, 140) | 0;
    a[b + 1936 >> 0] = 0;
    break b;
   } while (0);
   switch (e | 0) {
   case 0:
    {
     c[h >> 2] = 0;
     u = d + 8 | 0;
     h = c[u + 4 >> 2] | 0;
     e = b + 1792 | 0;
     c[e >> 2] = c[u >> 2];
     c[e + 4 >> 2] = h;
     Rg(b + 1800 | 0, f | 0, 132) | 0;
     e = b + 1776 | 0;
     f = c[d + 20 >> 2] | 0;
     h = 0;
     while (1) {
      if ((c[d + 20 + (h << 4) >> 2] | 0) == (f | 0)) break;
      h = h + 1 | 0;
     }
     t = d + 20 + (h << 4) + 4 | 0;
     s = c[t >> 2] | 0;
     t = c[t + 4 >> 2] | 0;
     u = e;
     c[u >> 2] = s;
     c[u + 4 >> 2] = t;
     u = p;
     c[u >> 2] = s;
     c[u + 4 >> 2] = t;
     a[b + 1936 >> 0] = 0;
     break b;
    }
   case 1:
    {
     if (m) break b;
     q = d + 24 | 0;
     o = c[q >> 2] | 0;
     q = c[q + 4 >> 2] | 0;
     e = p;
     c[e >> 2] = o;
     c[e + 4 >> 2] = q;
     e = b + 1936 | 0;
     j = (c[k >> 2] = o, +g[k >> 2]);
     l = (c[k >> 2] = q, +g[k >> 2]);
     if (a[e >> 0] | 0) {
      a[b + 1292 >> 0] = 1;
      m = b + 1316 | 0;
      f = b + 1300 | 0;
      l = l - +g[b + 1304 >> 2];
      g[m >> 2] = j - +g[f >> 2];
      g[b + 1320 >> 2] = l;
      c[f >> 2] = o;
      c[f + 4 >> 2] = q;
      f = b + 1776 | 0;
      e = c[f >> 2] | 0;
      f = c[f + 4 >> 2] | 0;
      h = b + 1332 | 0;
      c[h >> 2] = e;
      c[h + 4 >> 2] = f;
      h = c[b + 1364 >> 2] | 0;
      n = c[b + 1360 >> 2] | 0;
      if ((h | 0) == (n | 0)) break a;
      t = v + 4 | 0;
      u = t + 48 | 0;
      do {
       c[t >> 2] = 0;
       t = t + 4 | 0;
      } while ((t | 0) < (u | 0));
      c[v >> 2] = 3;
      s = v + 4 | 0;
      c[s >> 2] = o;
      c[s + 4 >> 2] = q;
      s = m;
      t = c[s + 4 >> 2] | 0;
      u = v + 36 | 0;
      c[u >> 2] = c[s >> 2];
      c[u + 4 >> 2] = t;
      u = v + 20 | 0;
      c[u >> 2] = e;
      c[u + 4 >> 2] = f;
      e = c[b + 1352 >> 2] | 0;
      if (e | 0) {
       f = e + (h << 5) | 0;
       e = e + (n << 5) | 0;
       do {
        u = c[e + 24 >> 2] | 0;
        Qc[c[(c[u >> 2] | 0) + 24 >> 2] & 127](u, v);
        e = e + 32 | 0;
       } while ((e | 0) != (f | 0));
      }
      break a;
     }
     j = j - +g[b + 1776 >> 2];
     l = l - +g[b + 1780 >> 2];
     if (j * j + l * l < 100.0) break b;
     a[e >> 0] = 1;
     a[b + 1291 >> 0] = 1;
     a[b + 1292 >> 0] = 1;
     f = b + 1300 | 0;
     c[f >> 2] = o;
     c[f + 4 >> 2] = q;
     f = b + 1776 | 0;
     e = c[f >> 2] | 0;
     f = c[f + 4 >> 2] | 0;
     h = b + 1332 | 0;
     c[h >> 2] = e;
     c[h + 4 >> 2] = f;
     h = c[b + 1364 >> 2] | 0;
     m = c[b + 1360 >> 2] | 0;
     if ((h | 0) == (m | 0)) break a;
     t = v + 4 | 0;
     u = t + 48 | 0;
     do {
      c[t >> 2] = 0;
      t = t + 4 | 0;
     } while ((t | 0) < (u | 0));
     c[v >> 2] = 2;
     u = v + 4 | 0;
     c[u >> 2] = o;
     c[u + 4 >> 2] = q;
     u = v + 20 | 0;
     c[u >> 2] = e;
     c[u + 4 >> 2] = f;
     e = c[b + 1352 >> 2] | 0;
     if (e | 0) {
      f = e + (h << 5) | 0;
      e = e + (m << 5) | 0;
      do {
       u = c[e + 24 >> 2] | 0;
       Qc[c[(c[u >> 2] | 0) + 24 >> 2] & 127](u, v);
       e = e + 32 | 0;
      } while ((e | 0) != (f | 0));
     }
     break a;
    }
   case 2:
    {
     e = b + 1936 | 0;
     if (!(a[e >> 0] | 0)) {
      if (!m) {
       c[h >> 2] = 4;
       Xg(b + 1792 | 0, 0, 140) | 0;
      }
      a[e >> 0] = 0;
      break b;
     }
     o = d + 24 | 0;
     n = c[o >> 2] | 0;
     o = c[o + 4 >> 2] | 0;
     u = p;
     c[u >> 2] = n;
     c[u + 4 >> 2] = o;
     if (!m) {
      c[h >> 2] = 4;
      Xg(b + 1792 | 0, 0, 140) | 0;
     }
     a[e >> 0] = 0;
     a[b + 1293 >> 0] = 1;
     a[b + 1292 >> 0] = 0;
     f = b + 1300 | 0;
     c[f >> 2] = n;
     c[f + 4 >> 2] = o;
     f = b + 1776 | 0;
     e = c[f >> 2] | 0;
     f = c[f + 4 >> 2] | 0;
     h = b + 1332 | 0;
     c[h >> 2] = e;
     c[h + 4 >> 2] = f;
     h = c[b + 1364 >> 2] | 0;
     m = c[b + 1360 >> 2] | 0;
     if ((h | 0) == (m | 0)) break a;
     t = v + 4 | 0;
     u = t + 48 | 0;
     do {
      c[t >> 2] = 0;
      t = t + 4 | 0;
     } while ((t | 0) < (u | 0));
     c[v >> 2] = 4;
     u = v + 4 | 0;
     c[u >> 2] = n;
     c[u + 4 >> 2] = o;
     u = v + 20 | 0;
     c[u >> 2] = e;
     c[u + 4 >> 2] = f;
     e = c[b + 1352 >> 2] | 0;
     if (e | 0) {
      f = e + (h << 5) | 0;
      e = e + (m << 5) | 0;
      do {
       u = c[e + 24 >> 2] | 0;
       Qc[c[(c[u >> 2] | 0) + 24 >> 2] & 127](u, v);
       e = e + 32 | 0;
      } while ((e | 0) != (f | 0));
     }
     break a;
    }
   default:
    break b;
   }
  } while (0);
  e = b + 1292 | 0;
  if (a[e >> 0] | 0) {
   a[e >> 0] = 0;
   f = c[b + 1364 >> 2] | 0;
   h = c[b + 1360 >> 2] | 0;
   if ((f | 0) != (h | 0)) {
    t = v + 4 | 0;
    u = t + 48 | 0;
    do {
     c[t >> 2] = 0;
     t = t + 4 | 0;
    } while ((t | 0) < (u | 0));
    c[v >> 2] = 5;
    e = c[b + 1352 >> 2] | 0;
    if (e | 0) {
     f = e + (f << 5) | 0;
     e = e + (h << 5) | 0;
     do {
      u = c[e + 24 >> 2] | 0;
      Qc[c[(c[u >> 2] | 0) + 24 >> 2] & 127](u, v);
      e = e + 32 | 0;
     } while ((e | 0) != (f | 0));
    }
   }
  }
 } while (0);
 if (!(a[b + 1411 >> 0] | 0)) {
  i = w;
  return;
 }
 p = b + 1944 | 0;
 o = c[d >> 2] | 0;
 switch (o | 0) {
 case 3:
  {
   e = b + 1976 | 0;
   if ((c[e >> 2] | 0) != 4) {
    c[e >> 2] = 4;
    Xg(b + 1984 | 0, 0, 140) | 0;
   }
   break;
  }
 case 2:
  {
   r = 71;
   break;
  }
 default:
  if ((c[d + 16 >> 2] | 0) == 2) r = 71; else {
   e = b + 1976 | 0;
   if ((c[e >> 2] | 0) != 4) {
    c[e >> 2] = 4;
    Xg(b + 1984 | 0, 0, 140) | 0;
   }
  }
 }
 c : do if ((r | 0) == 71) {
  q = b + 1976 | 0;
  e = (c[q >> 2] | 0) == 4;
  d : do if (!e) {
   f = c[d + 16 >> 2] | 0;
   e : do if ((f | 0) == (c[b + 1992 >> 2] | 0)) {
    if ((f | 0) > 0) n = 0; else break d;
    while (1) {
     h = c[d + 20 + (n << 4) >> 2] | 0;
     m = 0;
     while (1) {
      if ((c[b + 1996 + (m << 4) >> 2] | 0) == (h | 0)) break;
      m = m + 1 | 0;
      if ((m | 0) >= (f | 0)) break e;
     }
     n = n + 1 | 0;
     if ((n | 0) >= (f | 0)) break d;
    }
   } while (0);
   c[q >> 2] = 4;
   Xg(b + 1984 | 0, 0, 140) | 0;
   break c;
  } while (0);
  switch (o | 0) {
  case 0:
   {
    c[q >> 2] = 0;
    f = d + 8 | 0;
    e = c[f + 4 >> 2] | 0;
    h = b + 1984 | 0;
    c[h >> 2] = c[f >> 2];
    c[h + 4 >> 2] = e;
    Rg(b + 1992 | 0, d + 16 | 0, 132) | 0;
    h = b + 1960 | 0;
    e = c[d + 20 >> 2] | 0;
    f = 0;
    while (1) {
     if ((c[d + 20 + (f << 4) >> 2] | 0) == (e | 0)) break;
     f = f + 1 | 0;
    }
    o = d + 20 + (f << 4) + 4 | 0;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    c[h >> 2] = n;
    c[h + 4 >> 2] = o;
    h = b + 1968 | 0;
    e = c[d + 36 >> 2] | 0;
    f = 0;
    while (1) {
     if ((c[d + 20 + (f << 4) >> 2] | 0) == (e | 0)) break;
     f = f + 1 | 0;
    }
    m = d + 20 + (f << 4) + 4 | 0;
    e = c[m >> 2] | 0;
    m = c[m + 4 >> 2] | 0;
    f = h;
    c[f >> 2] = e;
    c[f + 4 >> 2] = m;
    f = p;
    c[f >> 2] = n;
    c[f + 4 >> 2] = o;
    f = b + 1952 | 0;
    c[f >> 2] = e;
    c[f + 4 >> 2] = m;
    a[b + 1294 >> 0] = 1;
    a[b + 1295 >> 0] = 1;
    f = b + 1300 | 0;
    c[f >> 2] = n;
    c[f + 4 >> 2] = o;
    f = b + 1308 | 0;
    c[f >> 2] = e;
    c[f + 4 >> 2] = m;
    f = b + 1332 | 0;
    c[f >> 2] = n;
    c[f + 4 >> 2] = o;
    f = b + 1340 | 0;
    c[f >> 2] = e;
    c[f + 4 >> 2] = m;
    f = c[b + 1364 >> 2] | 0;
    h = c[b + 1360 >> 2] | 0;
    if ((f | 0) == (h | 0)) {
     i = w;
     return;
    }
    t = v + 4 | 0;
    u = t + 48 | 0;
    do {
     c[t >> 2] = 0;
     t = t + 4 | 0;
    } while ((t | 0) < (u | 0));
    c[v >> 2] = 6;
    d = v + 4 | 0;
    c[d >> 2] = n;
    c[d + 4 >> 2] = o;
    d = v + 12 | 0;
    c[d >> 2] = e;
    c[d + 4 >> 2] = m;
    d = v + 20 | 0;
    c[d >> 2] = n;
    c[d + 4 >> 2] = o;
    d = v + 28 | 0;
    c[d >> 2] = e;
    c[d + 4 >> 2] = m;
    e = c[b + 1352 >> 2] | 0;
    if (e | 0) {
     f = e + (f << 5) | 0;
     e = e + (h << 5) | 0;
     do {
      b = c[e + 24 >> 2] | 0;
      Qc[c[(c[b >> 2] | 0) + 24 >> 2] & 127](b, v);
      e = e + 32 | 0;
     } while ((e | 0) != (f | 0));
    }
    i = w;
    return;
   }
  case 1:
   {
    if (e) break c;
    e = c[b + 1996 >> 2] | 0;
    f = 0;
    while (1) {
     if ((c[d + 20 + (f << 4) >> 2] | 0) == (e | 0)) break;
     f = f + 1 | 0;
    }
    t = d + 20 + (f << 4) + 4 | 0;
    s = c[t >> 2] | 0;
    t = c[t + 4 >> 2] | 0;
    h = p;
    c[h >> 2] = s;
    c[h + 4 >> 2] = t;
    h = b + 1952 | 0;
    e = c[b + 2012 >> 2] | 0;
    j = (c[k >> 2] = s, +g[k >> 2]);
    l = (c[k >> 2] = t, +g[k >> 2]);
    f = 0;
    while (1) {
     if ((c[d + 20 + (f << 4) >> 2] | 0) == (e | 0)) break;
     f = f + 1 | 0;
    }
    r = d + 20 + (f << 4) + 4 | 0;
    q = c[r >> 2] | 0;
    r = c[r + 4 >> 2] | 0;
    o = h;
    c[o >> 2] = q;
    c[o + 4 >> 2] = r;
    a[b + 1295 >> 0] = 1;
    o = b + 1316 | 0;
    e = b + 1300 | 0;
    l = l - +g[b + 1304 >> 2];
    g[o >> 2] = j - +g[e >> 2];
    g[b + 1320 >> 2] = l;
    f = b + 1308 | 0;
    j = (c[k >> 2] = q, +g[k >> 2]) - +g[f >> 2];
    l = (c[k >> 2] = r, +g[k >> 2]) - +g[b + 1312 >> 2];
    g[b + 1324 >> 2] = j;
    g[b + 1328 >> 2] = l;
    c[e >> 2] = s;
    c[e + 4 >> 2] = t;
    c[f >> 2] = q;
    c[f + 4 >> 2] = r;
    f = b + 1960 | 0;
    e = c[f >> 2] | 0;
    f = c[f + 4 >> 2] | 0;
    m = b + 1332 | 0;
    c[m >> 2] = e;
    c[m + 4 >> 2] = f;
    m = b + 1968 | 0;
    h = c[m >> 2] | 0;
    m = c[m + 4 >> 2] | 0;
    n = b + 1340 | 0;
    c[n >> 2] = h;
    c[n + 4 >> 2] = m;
    n = c[b + 1364 >> 2] | 0;
    p = c[b + 1360 >> 2] | 0;
    if ((n | 0) == (p | 0)) {
     i = w;
     return;
    }
    d = v + 4 | 0;
    c[d >> 2] = 0;
    c[d + 4 >> 2] = 0;
    c[d + 8 >> 2] = 0;
    c[d + 12 >> 2] = 0;
    c[d + 16 >> 2] = 0;
    c[d + 20 >> 2] = 0;
    c[v >> 2] = 7;
    d = v + 4 | 0;
    c[d >> 2] = s;
    c[d + 4 >> 2] = t;
    d = v + 12 | 0;
    c[d >> 2] = q;
    c[d + 4 >> 2] = r;
    d = o;
    u = c[d + 4 >> 2] | 0;
    t = v + 36 | 0;
    c[t >> 2] = c[d >> 2];
    c[t + 4 >> 2] = u;
    t = b + 1324 | 0;
    u = c[t + 4 >> 2] | 0;
    d = v + 44 | 0;
    c[d >> 2] = c[t >> 2];
    c[d + 4 >> 2] = u;
    d = v + 20 | 0;
    c[d >> 2] = e;
    c[d + 4 >> 2] = f;
    e = v + 28 | 0;
    c[e >> 2] = h;
    c[e + 4 >> 2] = m;
    e = c[b + 1352 >> 2] | 0;
    if (e | 0) {
     f = e + (n << 5) | 0;
     e = e + (p << 5) | 0;
     do {
      b = c[e + 24 >> 2] | 0;
      Qc[c[(c[b >> 2] | 0) + 24 >> 2] & 127](b, v);
      e = e + 32 | 0;
     } while ((e | 0) != (f | 0));
    }
    i = w;
    return;
   }
  case 2:
   {
    if (e) break c;
    e = c[b + 1996 >> 2] | 0;
    f = 0;
    while (1) {
     if ((c[d + 20 + (f << 4) >> 2] | 0) == (e | 0)) break;
     f = f + 1 | 0;
    }
    s = d + 20 + (f << 4) + 4 | 0;
    r = c[s >> 2] | 0;
    s = c[s + 4 >> 2] | 0;
    h = p;
    c[h >> 2] = r;
    c[h + 4 >> 2] = s;
    h = b + 1952 | 0;
    e = c[b + 2012 >> 2] | 0;
    f = 0;
    while (1) {
     if ((c[d + 20 + (f << 4) >> 2] | 0) == (e | 0)) break;
     f = f + 1 | 0;
    }
    p = d + 20 + (f << 4) + 4 | 0;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
    f = h;
    c[f >> 2] = o;
    c[f + 4 >> 2] = p;
    c[q >> 2] = 4;
    Xg(b + 1984 | 0, 0, 140) | 0;
    a[b + 1296 >> 0] = 1;
    a[b + 1295 >> 0] = 0;
    f = b + 1300 | 0;
    c[f >> 2] = r;
    c[f + 4 >> 2] = s;
    f = b + 1308 | 0;
    c[f >> 2] = o;
    c[f + 4 >> 2] = p;
    f = b + 1960 | 0;
    e = c[f >> 2] | 0;
    f = c[f + 4 >> 2] | 0;
    m = b + 1332 | 0;
    c[m >> 2] = e;
    c[m + 4 >> 2] = f;
    m = b + 1968 | 0;
    h = c[m >> 2] | 0;
    m = c[m + 4 >> 2] | 0;
    n = b + 1340 | 0;
    c[n >> 2] = h;
    c[n + 4 >> 2] = m;
    n = c[b + 1364 >> 2] | 0;
    q = c[b + 1360 >> 2] | 0;
    if ((n | 0) == (q | 0)) {
     i = w;
     return;
    }
    t = v + 4 | 0;
    u = t + 48 | 0;
    do {
     c[t >> 2] = 0;
     t = t + 4 | 0;
    } while ((t | 0) < (u | 0));
    c[v >> 2] = 8;
    d = v + 4 | 0;
    c[d >> 2] = r;
    c[d + 4 >> 2] = s;
    d = v + 12 | 0;
    c[d >> 2] = o;
    c[d + 4 >> 2] = p;
    d = v + 20 | 0;
    c[d >> 2] = e;
    c[d + 4 >> 2] = f;
    e = v + 28 | 0;
    c[e >> 2] = h;
    c[e + 4 >> 2] = m;
    e = c[b + 1352 >> 2] | 0;
    if (e | 0) {
     f = e + (n << 5) | 0;
     e = e + (q << 5) | 0;
     do {
      b = c[e + 24 >> 2] | 0;
      Qc[c[(c[b >> 2] | 0) + 24 >> 2] & 127](b, v);
      e = e + 32 | 0;
     } while ((e | 0) != (f | 0));
    }
    i = w;
    return;
   }
  default:
   break c;
  }
 } while (0);
 e = b + 1295 | 0;
 if (!(a[e >> 0] | 0)) {
  i = w;
  return;
 }
 a[e >> 0] = 0;
 f = c[b + 1364 >> 2] | 0;
 h = c[b + 1360 >> 2] | 0;
 if ((f | 0) == (h | 0)) {
  i = w;
  return;
 }
 t = v + 4 | 0;
 u = t + 48 | 0;
 do {
  c[t >> 2] = 0;
  t = t + 4 | 0;
 } while ((t | 0) < (u | 0));
 c[v >> 2] = 9;
 e = c[b + 1352 >> 2] | 0;
 if (e | 0) {
  f = e + (f << 5) | 0;
  e = e + (h << 5) | 0;
  do {
   b = c[e + 24 >> 2] | 0;
   Qc[c[(c[b >> 2] | 0) + 24 >> 2] & 127](b, v);
   e = e + 32 | 0;
  } while ((e | 0) != (f | 0));
 }
 i = w;
 return;
}

function gf(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 d = f;
 c[d >> 2] = 0;
 ue(b, d);
 c[b + 4 >> 2] = -1;
 Xg(b + 8 | 0, 0, 248) | 0;
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
function hf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 ue(b, d);
 c[b + 4 >> 2] = c[d + 4 >> 2];
 Xg(b + 16 | 0, 0, 240) | 0;
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

function ag(a, b, d, e) {
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
   k = yg(m * 24 | 0) | 0;
   if ((f | 0) > 0) {
    g = k;
    h = 0;
    j = (c[o >> 2] | 0) + ((c[l >> 2] | 0) * 24 | 0) | 0;
    while (1) {
     ue(g, j);
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
   if (g | 0) zg(g);
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
 ue(w + (f * 24 | 0) | 0, b);
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
  ue(x, b);
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
    l = yg(e * 12 | 0) | 0;
    if ((k | 0) > 0) {
     g = l + (n * 12 | 0) | 0;
     h = 0;
     j = (c[u >> 2] | 0) + ((c[t >> 2] | 0) * 12 | 0) | 0;
     while (1) {
      ue(g, j);
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
    if (g | 0) zg(g);
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
    ue(b + (g * 12 | 0) | 0, b + (r * 12 | 0) | 0);
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
      ue(r, s + (g * 12 | 0) | 0);
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
    g = bg(u, 0) | 0;
    h = 52;
    break;
   }
   if ((j >> 1 | 0) > (l | 0)) {
    if ((r | 0) <= 0) {
     g = bg(u, l) | 0;
     h = 52;
     break;
    }
    g = r + -1 | 0;
    ue(b + (g * 12 | 0) | 0, b + (r * 12 | 0) | 0);
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
      ue(r, s + (g * 12 | 0) | 0);
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
     g = bg(u, l) | 0;
     h = 52;
     break;
    }
    g = r + -1 | 0;
    ue(b + (g * 12 | 0) | 0, b + (r * 12 | 0) | 0);
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
      ue(r, s + (g * 12 | 0) | 0);
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
   ue(g, x);
   c[g + 4 >> 2] = c[w >> 2];
   c[g + 8 >> 2] = c[v >> 2];
  }
  if ((h | 0) == 53) {
   c[g >> 2] = 0;
   ue(g, x);
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
   g = yg(o << 4) | 0;
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
   if (h | 0) zg(h);
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

function bd(b, d) {
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
     e = yg(k << 3) | 0;
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
     if (l | 0) zg(l);
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
     m = yg(f + 9 | 0) | 0;
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
     Rg(o | 0, k | 0, f | 0) | 0;
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
 c[280] = 0;
 c[281] = 0;
 e = c[276] | 0;
 if (e | 0) {
  k = c[278] | 0;
  f = c[279] | 0;
  if ((k | 0) < (f | 0)) {
   j = e + (k << 3) | 0;
   h = c[j >> 2] | 0;
   if (!h) e = f; else {
    s = c[h >> 2] | 0;
    c[h >> 2] = s - 1;
    if ((s | 0) == 1) {
     zg(c[j >> 2] | 0);
     c[j >> 2] = 0;
     e = e + (k << 3) + 4 | 0;
     c[e >> 2] = 0;
    } else e = e + (k << 3) + 4 | 0;
    c[j >> 2] = 0;
    c[e >> 2] = 0;
    e = c[279] | 0;
   }
   f = k + 1 | 0;
   if ((f | 0) < (e | 0)) do {
    h = c[276] | 0;
    k = h + (f << 3) | 0;
    j = c[k >> 2] | 0;
    if (j) {
     s = c[j >> 2] | 0;
     c[j >> 2] = s - 1;
     if ((s | 0) == 1) {
      zg(c[k >> 2] | 0);
      c[k >> 2] = 0;
      e = h + (f << 3) + 4 | 0;
      c[e >> 2] = 0;
     } else e = h + (f << 3) + 4 | 0;
     c[k >> 2] = 0;
     c[e >> 2] = 0;
     e = c[279] | 0;
    }
    f = f + 1 | 0;
   } while ((f | 0) < (e | 0));
   e = c[276] | 0;
  }
  zg(e);
 };
 c[276] = 0;
 c[277] = 0;
 c[278] = 0;
 c[279] = 0;
 c[280] = 16;
 c[281] = 65536;
 c[276] = 0;
 c[277] = 0;
 c[278] = 0;
 c[276] = l;
 c[277] = n;
 c[278] = 0;
 c[279] = m;
 m = yg(411440) | 0;
 Xg(m | 0, 0, 411440) | 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 9;
 h = m + 12 | 0;
 c[h >> 2] = 0;
 c[h + 4 >> 2] = 0;
 c[h + 8 >> 2] = 0;
 c[h + 12 >> 2] = 0;
 j = m + 28 | 0;
 c[j >> 2] = 16;
 f = m + 32 | 0;
 c[f >> 2] = 65536;
 a[m + 36 >> 0] = 0;
 a[m + 37 >> 0] = 0;
 c[42816] = m;
 c[m >> 2] = 1136;
 Xg(m + 40 | 0, -1, 176) | 0;
 g[m + 216 >> 2] = 0.0;
 g[m + 220 >> 2] = 0.0;
 a[m + 224 >> 0] = 0;
 e = m + 228 | 0;
 c[m + 256 >> 2] = 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 Xg(m + 264 | 0, -1, 168) | 0;
 c[m + 16816 >> 2] = 74;
 e = m + 16820 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 16840 >> 2] = 74;
 e = m + 16844 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 16864 >> 2] = 74;
 e = m + 16868 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 16888 >> 2] = 74;
 e = m + 16892 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 16912 >> 2] = 74;
 e = m + 16916 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 16936 >> 2] = 74;
 e = m + 16940 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 16960 >> 2] = 74;
 e = m + 16964 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 16984 >> 2] = 74;
 e = m + 16988 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17008 >> 2] = 74;
 e = m + 17012 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17032 >> 2] = 74;
 e = m + 17036 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17056 >> 2] = 74;
 e = m + 17060 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17080 >> 2] = 74;
 e = m + 17084 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17104 >> 2] = 74;
 e = m + 17108 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17128 >> 2] = 74;
 e = m + 17132 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17152 >> 2] = 74;
 e = m + 17156 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17176 >> 2] = 74;
 e = m + 17180 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17200 >> 2] = 74;
 e = m + 17204 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17224 >> 2] = 74;
 e = m + 17228 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17248 >> 2] = 74;
 e = m + 17252 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17272 >> 2] = 74;
 e = m + 17276 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17296 >> 2] = 74;
 e = m + 17300 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17320 >> 2] = 74;
 e = m + 17324 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17344 >> 2] = 74;
 e = m + 17348 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17368 >> 2] = 74;
 e = m + 17372 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17392 >> 2] = 74;
 e = m + 17396 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17416 >> 2] = 74;
 e = m + 17420 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17440 >> 2] = 74;
 e = m + 17444 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17464 >> 2] = 74;
 e = m + 17468 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17488 >> 2] = 74;
 e = m + 17492 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17512 >> 2] = 74;
 e = m + 17516 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17536 >> 2] = 74;
 e = m + 17540 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[m + 17560 >> 2] = 74;
 e = m + 17564 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 e = m + 410800 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 c[e + 24 >> 2] = 0;
 c[m + 410828 >> 2] = 3;
 c[m + 410832 >> 2] = 0;
 c[m + 410836 >> 2] = 6;
 e = m + 410896 | 0;
 k = m + 410840 | 0;
 l = k + 56 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 c[e >> 2] = 2;
 e = m + 410900 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 a[e + 20 >> 0] = 0;
 c[m + 410924 >> 2] = 6;
 e = m + 410984 | 0;
 k = m + 410928 | 0;
 l = k + 56 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 c[e >> 2] = 2;
 e = m + 410988 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 a[e + 20 >> 0] = 0;
 c[m + 411012 >> 2] = 6;
 e = m + 411072 | 0;
 k = m + 411016 | 0;
 l = k + 56 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 c[e >> 2] = 2;
 e = m + 411076 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 a[e + 20 >> 0] = 0;
 c[m + 411100 >> 2] = 6;
 e = m + 411160 | 0;
 k = m + 411104 | 0;
 l = k + 56 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 c[e >> 2] = 2;
 e = m + 411164 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 a[e + 20 >> 0] = 0;
 c[m + 411188 >> 2] = 6;
 e = m + 411248 | 0;
 k = m + 411192 | 0;
 l = k + 56 | 0;
 do {
  c[k >> 2] = 0;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 c[e >> 2] = 2;
 e = m + 411252 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 a[e + 20 >> 0] = 0;
 e = m + 411276 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 a[e + 12 >> 0] = 0;
 e = m + 411292 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 a[e + 12 >> 0] = 0;
 e = m + 411308 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 a[e + 12 >> 0] = 0;
 e = m + 411324 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 a[e + 12 >> 0] = 0;
 e = m + 411400 | 0;
 k = m + 411344 | 0;
 l = k + 56 | 0;
 do {
  c[k >> 2] = -1;
  k = k + 4 | 0;
 } while ((k | 0) < (l | 0));
 c[e >> 2] = 0;
 c[m + 411404 >> 2] = -23;
 c[m + 411408 >> 2] = 0;
 e = m + 411416 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 e = yg(4) | 0;
 c[e >> 2] = bh() | 0;
 s = yg(84) | 0;
 c[s >> 2] = 0;
 c[s + 4 >> 2] = 0;
 c[s + 8 >> 2] = 0;
 c[s + 12 >> 2] = 0;
 c[s + 16 >> 2] = 0;
 c[s + 20 >> 2] = 16;
 c[s + 24 >> 2] = 65536;
 a[s + 28 >> 0] = 0;
 r = s + 32 | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[s + 48 >> 2] = 16;
 c[s + 52 >> 2] = 65536;
 a[s + 56 >> 0] = 0;
 r = s + 60 | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[s + 76 >> 2] = 16;
 c[s + 80 >> 2] = 65536;
 c[42817] = s;
 s = yg(84) | 0;
 c[s >> 2] = 0;
 c[s + 4 >> 2] = 0;
 c[s + 8 >> 2] = 0;
 c[s + 12 >> 2] = 0;
 c[s + 16 >> 2] = 0;
 c[s + 20 >> 2] = 16;
 c[s + 24 >> 2] = 65536;
 a[s + 28 >> 0] = 0;
 r = s + 32 | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[s + 48 >> 2] = 16;
 c[s + 52 >> 2] = 65536;
 a[s + 56 >> 0] = 0;
 r = s + 60 | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[s + 76 >> 2] = 16;
 c[s + 80 >> 2] = 65536;
 c[42818] = s;
 ge(151021, t);
 zc(93, 0, 1);
 ge(151046, u);
 u = c[42817] | 0;
 je(u);
 zg(u);
 u = c[42818] | 0;
 je(u);
 zg(u);
 zg(e);
 c[42817] = 0;
 c[42818] = 0;
 c[m >> 2] = 136260;
 c[42816] = 0;
 c[j >> 2] = 0;
 c[f >> 2] = 0;
 e = c[h >> 2] | 0;
 if (!e) {
  zg(m);
  i = v;
  return 0;
 }
 zg(e);
 zg(m);
 i = v;
 return 0;
}

function Ie(f) {
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 80 | 0;
 v = z + 64 | 0;
 w = z + 48 | 0;
 y = z;
 u = c[42822] | 0;
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
    Ya(c[136512 + ((l & 65535) << 2) >> 2] | 0);
    k = b[n >> 1] | 0;
    h = b[m >> 1] | 0;
   }
   l = (h & 65535) >>> 5 & 1;
   if (l << 16 >> 16 != ((k & 65535) >>> 5 & 1)) {
    Ra(l & 255 | 0);
    h = b[m >> 1] | 0;
    k = b[n >> 1] | 0;
   }
   h = h & 64;
   if ((h & 65535) >>> 6 << 16 >> 16 == ((k & 65535) >>> 6 & 1)) {
    h = o;
    k = 1;
    x = 27;
   } else if (!(h << 16 >> 16)) {
    Fc(2960);
    h = o;
    k = 1;
    x = 27;
    break;
   } else {
    eb(2960);
    h = o;
    k = 1;
    x = 27;
    break;
   }
  } while (0);
  do if ((x | 0) == 27) {
   if ((b[h >> 1] | 0) == (b[p >> 1] | 0)) l = 0; else {
    of(p, h, 1028);
    l = 1;
   }
   if ((b[u + 650 >> 1] | 0) == (b[j + 50 >> 1] | 0)) {
    if (!(k | l)) break;
   } else of(p, h, 1029);
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
    Fc(3042);
    break;
   } else {
    eb(3042);
    break;
   } while (0);
   l = c[p >> 2] | 0;
   k = e[p + 4 >> 1] | 0;
   h = c[o >> 2] | 0;
   m = e[o + 4 >> 1] | 0;
   if (!(((h ^ l) & 16762878 | 0) == 0 & 0 == 0)) {
    s = Zg(l | 0, k & 65535 | 0, 1) | 0;
    s = c[136576 + ((s & 31) << 2) >> 2] | 0;
    t = Zg(l | 0, k & 65535 | 0, 6) | 0;
    t = c[136576 + ((t & 31) << 2) >> 2] | 0;
    m = Zg(l | 0, k & 65535 | 0, 14) | 0;
    m = c[136576 + ((m & 31) << 2) >> 2] | 0;
    h = Zg(l | 0, k & 65535 | 0, 19) | 0;
    db(s | 0, t | 0, m | 0, c[136576 + ((h & 31) << 2) >> 2] | 0);
    h = c[o >> 2] | 0;
    l = c[p >> 2] | 0;
    m = e[o + 4 >> 1] | 0;
    k = e[p + 4 >> 1] | 0;
   }
   if (((h ^ l) & 117454848 | 0) == 0 & 0 == 0) n = m; else {
    n = Zg(l | 0, k & 65535 | 0, 11) | 0;
    n = c[136636 + ((n & 7) << 2) >> 2] | 0;
    k = Zg(l | 0, k & 65535 | 0, 24) | 0;
    Jc(n | 0, c[136636 + ((k & 7) << 2) >> 2] | 0);
    k = e[p + 4 >> 1] | 0;
    l = c[p >> 2] | 0;
    n = e[o + 4 >> 1] | 0;
    h = c[o >> 2] | 0;
   }
   m = Zg(l | 0, k & 65535 | 0, 27) | 0;
   t = Zg(h | 0, n & 65535 | 0, 27) | 0;
   if (!(((t ^ m) & 15 | 0) == 0 & 0 == 0)) {
    r = Zg(l | 0, k & 65535 | 0, 30) | 0;
    s = Zg(l | 0, k & 65535 | 0, 29) | 0;
    t = Zg(l | 0, k & 65535 | 0, 28) | 0;
    Dc(r & 1 | 0, s & 1 | 0, t & 1 | 0, m & 1 | 0);
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
   Hc(+(+g[l >> 2]), +(+g[h >> 2]), +(+g[u + 684 >> 2]), +(+g[u + 688 >> 2]));
  }
  m = j + 56 | 0;
  h = b[m >> 1] | 0;
  n = u + 656 | 0;
  k = b[n >> 1] | 0;
  if (h << 16 >> 16 != k << 16 >> 16) {
   h = h & 1;
   do if (h << 16 >> 16 != (k & 1)) if (!(h << 16 >> 16)) {
    Fc(2884);
    break;
   } else {
    eb(2884);
    break;
   } while (0);
   h = b[m >> 1] | 0;
   k = (h & 65535) >>> 5 & 7;
   l = b[n >> 1] | 0;
   if (k << 16 >> 16 == ((l & 65535) >>> 5 & 7)) k = l; else {
    vb(c[136648 + ((k & 65535) << 2) >> 2] | 0);
    h = b[m >> 1] | 0;
    k = b[n >> 1] | 0;
   }
   h = h & 2;
   do if ((h & 65535) >>> 1 << 16 >> 16 != ((k & 65535) >>> 1 & 1)) if (!(h << 16 >> 16)) {
    Fc(32823);
    break;
   } else {
    eb(32823);
    break;
   } while (0);
   h = b[m >> 1] & 4;
   do if ((h & 65535) >>> 2 << 16 >> 16 != ((e[n >> 1] | 0) >>> 2 & 1)) if (!(h << 16 >> 16)) {
    Fc(3089);
    break;
   } else {
    eb(3089);
    break;
   } while (0);
   h = b[m >> 1] & 8;
   do if ((h & 65535) >>> 3 << 16 >> 16 != ((e[n >> 1] | 0) >>> 3 & 1)) if (!(h << 16 >> 16)) {
    Fc(3024);
    break;
   } else {
    eb(3024);
    break;
   } while (0);
   b[n >> 1] = b[m >> 1] | 0;
  }
  h = c[(c[j + 344 >> 2] | 0) + 3064 >> 2] | 0;
  k = u + 716 | 0;
  if ((c[k >> 2] | 0) != (h | 0)) {
   c[k >> 2] = h;
   ea(h | 0);
  }
  h = c[q >> 2] | 0;
  c[u + 632 >> 2] = h;
  h = c[h + 388 + (d[h + 385 >> 0] << 2) >> 2] | 0;
  k = u + 712 | 0;
  if ((c[k >> 2] | 0) != (h | 0)) {
   c[k >> 2] = h;
   na(34963, h | 0);
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
     if (a[u + 848 + (t << 4) + 1 >> 0] | 0) ta(p & 255 | 0);
    } else {
     c[n >> 2] = m;
     if ((c[q >> 2] | 0) == (m | 0)) k = r; else {
      c[q >> 2] = m;
      na(34962, m | 0);
      k = r;
      h = a[r >> 0] | 0;
     }
     Cb(h & 255 | 0, d[j + 348 + (t << 4) + 5 >> 0] | 0, c[j + 348 + (t << 4) + 12 >> 2] | 0, a[j + 348 + (t << 4) + 6 >> 0] | 0, d[j + 348 + (t << 4) + 4 >> 0] | 0, c[j + 348 + (t << 4) + 8 >> 2] | 0);
     if (!(a[u + 848 + (t << 4) + 1 >> 0] | 0)) Vb(d[k >> 0] | 0);
    }
    h = a[j + 348 + (t << 4) + 3 >> 0] | 0;
    if (!((a[171858] | 0) == 0 ? 1 : (a[u + 848 + (t << 4) + 3 >> 0] | 0) == h << 24 >> 24)) uc(d[r >> 0] | 0, h & 255 | 0);
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
  n = c[42822] | 0;
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
  qf(n + 416 | 0, 0, w, h);
 }
 h = y;
 j = h + 48 | 0;
 do {
  c[h >> 2] = 0;
  h = h + 4 | 0;
 } while ((h | 0) < (j | 0));
 p = c[42822] | 0;
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
 qf(p + 416 | 0, 1, y, h);
 i = z;
 return;
}

function dg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 P = i;
 i = i + 16 | 0;
 N = P;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 16;
 c[b + 20 >> 2] = 65536;
 J = d + 16 | 0;
 f = c[J >> 2] | 0;
 K = d + 12 | 0;
 g = c[K >> 2] | 0;
 h = f - g | 0;
 h = (h | 0) < 256 ? h : 256;
 L = b + 12 | 0;
 M = b + 8 | 0;
 I = b + 4 | 0;
 if ((h | 0) > 0) {
  j = yg(h << 3) | 0;
  f = c[J >> 2] | 0;
  c[b >> 2] = j;
  c[I >> 2] = h;
  c[M >> 2] = 0;
  c[L >> 2] = 0;
  g = c[K >> 2] | 0;
 } else {
  j = 0;
  h = 0;
 }
 f = f - g | 0;
 if ((f | 0) <= 0) {
  i = P;
  return;
 }
 A = d + 4 | 0;
 B = N + 4 | 0;
 C = d + 56 | 0;
 D = d + 28 | 0;
 E = d + 36 | 0;
 F = d + 40 | 0;
 G = d + 64 | 0;
 H = d + 68 | 0;
 z = d + 28 | 0;
 k = j;
 m = 0;
 l = j;
 x = f;
 while (1) {
  y = x;
  x = x + -1 | 0;
  f = c[e >> 2] | 0;
  if ((f | 0) == -2) {
   d = g + x | 0;
   f = c[A >> 2] | 0;
   O = 9;
  } else {
   d = g + x | 0;
   j = c[A >> 2] | 0;
   if ((c[j + (d * 24 | 0) + 16 >> 2] | 0) == (f | 0)) {
    f = j;
    O = 9;
   } else {
    j = k;
    d = l;
    f = m;
   }
  }
  if ((O | 0) == 9) {
   O = 0;
   q = f + (d * 24 | 0) + 8 | 0;
   p = c[q >> 2] | 0;
   q = c[q + 4 >> 2] | 0;
   ue(N, f + (d * 24 | 0) | 0);
   o = c[f + (d * 24 | 0) + 4 >> 2] | 0;
   c[B >> 2] = o;
   do if ((h | 0) == (m | 0)) {
    f = m >> 1;
    if ((f | 0) < 16) f = 16; else {
     f = (f | 0) > 65536 ? 65536 : f;
     if (!f) {
      h = m;
      v = k;
      break;
     }
    }
    h = f + m | 0;
    j = yg(h << 3) | 0;
    if ((m | 0) > 0) {
     f = j;
     g = 0;
     d = l;
     while (1) {
      u = d;
      v = c[u + 4 >> 2] | 0;
      w = f;
      c[w >> 2] = c[u >> 2];
      c[w + 4 >> 2] = v;
      g = g + 1 | 0;
      if ((g | 0) == (m | 0)) break; else {
       f = f + 8 | 0;
       d = d + 8 | 0;
      }
     }
    }
    if (l | 0) zg(l);
    c[b >> 2] = j;
    c[I >> 2] = h;
    c[M >> 2] = 0;
    c[L >> 2] = m;
    v = j;
   } else v = k; while (0);
   w = m + 1 | 0;
   c[L >> 2] = w;
   f = v + (m << 3) | 0;
   c[f >> 2] = p;
   c[f + 4 >> 2] = q;
   f = c[K >> 2] | 0;
   k = (c[J >> 2] | 0) + -1 | 0;
   if ((k - f | 0) == (x | 0)) {
    c[J >> 2] = k;
    c[(c[A >> 2] | 0) + (k * 24 | 0) >> 2] = 0;
    f = k;
   } else {
    d = f + x | 0;
    j = c[A >> 2] | 0;
    f = j + (d * 24 | 0) | 0;
    c[J >> 2] = k;
    if ((k | 0) == (d | 0)) {
     g = j;
     f = k;
    } else {
     c[f >> 2] = 0;
     ue(f, j + (k * 24 | 0) | 0);
     c[j + (d * 24 | 0) + 4 >> 2] = c[j + (k * 24 | 0) + 4 >> 2];
     u = j + (k * 24 | 0) + 8 | 0;
     f = c[u + 4 >> 2] | 0;
     g = j + (d * 24 | 0) + 8 | 0;
     c[g >> 2] = c[u >> 2];
     c[g + 4 >> 2] = f;
     g = c[A >> 2] | 0;
     f = c[J >> 2] | 0;
    }
    c[j + (d * 24 | 0) + 16 >> 2] = c[j + (k * 24 | 0) + 16 >> 2];
    c[g + (f * 24 | 0) >> 2] = 0;
   }
   n = c[C >> 2] | 0;
   l = (n | 0) == 0;
   if (l) {
    g = 0;
    d = 0;
   } else {
    g = n + (c[H >> 2] << 4) | 0;
    d = n + (c[G >> 2] << 4) | 0;
   }
   k = d;
   g = g - d >> 4;
   a : while (1) {
    while (1) {
     if (!g) break a;
     d = (g | 0) / 2 | 0;
     j = k + (d << 4) | 0;
     u = j;
     t = c[u + 4 >> 2] | 0;
     if (t >>> 0 < q >>> 0 | ((t | 0) == (q | 0) ? (c[u >> 2] | 0) >>> 0 < p >>> 0 : 0)) break; else g = d;
    }
    k = j + 16 | 0;
    g = g + -1 - d | 0;
   }
   if (l) g = 0; else g = n + (c[H >> 2] << 4) | 0;
   b : do if ((k | 0) != (g | 0)) {
    g = c[G >> 2] | 0;
    d = k - (l ? 0 : n + (g << 4) | 0) | 0;
    m = d >> 4;
    j = c[H >> 2] | 0;
    k = j - g | 0;
    if ((m | 0) < (k | 0)) {
     l = (d | 0) > 0;
     if (!m) while (1) {
      u = n + (g << 4) | 0;
      if (!((c[u >> 2] | 0) == (p | 0) ? (c[u + 4 >> 2] | 0) == (q | 0) : 0)) break b;
      g = g + 1 | 0;
      c[G >> 2] = g;
      if ((j | 0) <= (g | 0)) break b;
     }
     d = g + m | 0;
     u = n + (d << 4) | 0;
     if ((c[u >> 2] | 0) == (p | 0) ? (c[u + 4 >> 2] | 0) == (q | 0) : 0) do {
      do if ((k + -1 | 0) == (m | 0)) {
       j = j + -1 | 0;
       c[H >> 2] = j;
      } else if ((k >> 1 | 0) > (m | 0)) {
       if (l) do {
        u = d;
        d = d + -1 | 0;
        r = n + (d << 4) | 0;
        s = c[r + 4 >> 2] | 0;
        t = n + (u << 4) | 0;
        c[t >> 2] = c[r >> 2];
        c[t + 4 >> 2] = s;
        c[n + (u << 4) + 8 >> 2] = c[n + (d << 4) + 8 >> 2];
       } while ((d | 0) > (g | 0));
       g = g + 1 | 0;
       c[G >> 2] = g;
       break;
      } else {
       j = j + -1 | 0;
       if ((d | 0) < (j | 0)) do {
        u = d;
        d = d + 1 | 0;
        r = n + (d << 4) | 0;
        s = c[r + 4 >> 2] | 0;
        t = n + (u << 4) | 0;
        c[t >> 2] = c[r >> 2];
        c[t + 4 >> 2] = s;
        c[n + (u << 4) + 8 >> 2] = c[n + (d << 4) + 8 >> 2];
       } while ((d | 0) != (j | 0));
       c[H >> 2] = j;
       break;
      } while (0);
      k = j - g | 0;
      if ((m | 0) >= (k | 0)) break b;
      d = g + m | 0;
      u = n + (d << 4) | 0;
     } while ((c[u >> 2] | 0) == (p | 0) ? (c[u + 4 >> 2] | 0) == (q | 0) : 0);
    }
   } while (0);
   do if ((o | 0) != -1) {
    s = c[z >> 2] | 0;
    k = (s | 0) == 0;
    if (k) {
     g = 0;
     d = 0;
    } else {
     g = s + ((c[F >> 2] | 0) * 12 | 0) | 0;
     d = s + ((c[E >> 2] | 0) * 12 | 0) | 0;
    }
    u = c[B >> 2] | 0;
    n = c[N >> 2] | 0;
    l = d;
    g = (g - d | 0) / 12 | 0;
    c : while (1) {
     while (1) {
      if (!g) break c;
      d = (g | 0) / 2 | 0;
      j = l + (d * 12 | 0) | 0;
      if ((c[l + (d * 12 | 0) + 4 >> 2] | 0) >>> 0 < u >>> 0) break;
      if ((c[j >> 2] | 0) >>> 0 < n >>> 0) break; else g = d;
     }
     l = j + 12 | 0;
     g = g + -1 - d | 0;
    }
    if (k) g = 0; else g = s + ((c[F >> 2] | 0) * 12 | 0) | 0;
    if ((l | 0) != (g | 0)) {
     g = c[E >> 2] | 0;
     p = k ? 0 : s + (g * 12 | 0) | 0;
     o = l;
     q = o - p | 0;
     t = (q | 0) / 12 | 0;
     j = c[F >> 2] | 0;
     if ((t | 0) < (j - g | 0)) {
      r = g + t | 0;
      d = c[s + (r * 12 | 0) >> 2] | 0;
      if ((n | 0) != (d | 0)) {
       if ((n | 0) == 0 | (d | 0) == 0) break;
       if ((c[n >> 2] | 0) == (c[d >> 2] | 0)) break;
       if ((c[n + 4 >> 2] | 0) != (c[d + 4 >> 2] | 0)) break;
       m = c[d + 12 >> 2] | 0;
       k = c[n + 12 >> 2] | 0;
       l = a[m >> 0] | 0;
       d = a[k >> 0] | 0;
       if (l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != d << 24 >> 24) k = l; else {
        do {
         m = m + 1 | 0;
         k = k + 1 | 0;
         l = a[m >> 0] | 0;
         d = a[k >> 0] | 0;
        } while (!(l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != d << 24 >> 24));
        k = l;
       }
       if (k << 24 >> 24 != d << 24 >> 24) break;
      }
      o = (o | 0) == (p | 0);
      n = (q | 0) > 0;
      f = s;
      while (1) {
       if ((c[f + (r * 12 | 0) + 4 >> 2] | 0) != (u | 0)) break;
       d = j - g | 0;
       do if (o) {
        s = g + 1 | 0;
        c[E >> 2] = s;
        c[f + (g * 12 | 0) >> 2] = 0;
        g = s;
       } else {
        if ((d + -1 | 0) == (t | 0)) {
         j = j + -1 | 0;
         c[F >> 2] = j;
         c[f + (j * 12 | 0) >> 2] = 0;
         break;
        }
        if ((d >> 1 | 0) <= (t | 0)) {
         d = g + t | 0;
         j = j + -1 | 0;
         if ((d | 0) < (j | 0)) {
          do {
           s = f + (d * 12 | 0) | 0;
           g = d;
           d = d + 1 | 0;
           c[s >> 2] = 0;
           ue(s, f + (d * 12 | 0) | 0);
           c[f + (g * 12 | 0) + 4 >> 2] = c[f + (d * 12 | 0) + 4 >> 2];
           c[f + (g * 12 | 0) + 8 >> 2] = c[f + (d * 12 | 0) + 8 >> 2];
           g = (c[F >> 2] | 0) + -1 | 0;
           f = c[z >> 2] | 0;
          } while ((d | 0) < (g | 0));
          j = g;
          g = c[E >> 2] | 0;
         }
         c[F >> 2] = j;
         c[f + (j * 12 | 0) >> 2] = 0;
         break;
        }
        if (n) {
         d = g + t | 0;
         do {
          s = f + (d * 12 | 0) | 0;
          g = d;
          d = d + -1 | 0;
          c[s >> 2] = 0;
          ue(s, f + (d * 12 | 0) | 0);
          c[f + (g * 12 | 0) + 4 >> 2] = c[f + (d * 12 | 0) + 4 >> 2];
          c[f + (g * 12 | 0) + 8 >> 2] = c[f + (d * 12 | 0) + 8 >> 2];
          g = c[E >> 2] | 0;
          f = c[z >> 2] | 0;
         } while ((d | 0) > (g | 0));
         j = c[F >> 2] | 0;
        }
        s = g + 1 | 0;
        c[E >> 2] = s;
        c[f + (g * 12 | 0) >> 2] = 0;
        g = s;
       } while (0);
       if ((t | 0) >= (j - g | 0)) break;
       r = g + t | 0;
       k = c[N >> 2] | 0;
       d = c[f + (r * 12 | 0) >> 2] | 0;
       if ((k | 0) == (d | 0)) continue;
       if ((k | 0) == 0 | (d | 0) == 0) break;
       if ((c[k >> 2] | 0) == (c[d >> 2] | 0)) break;
       if ((c[k + 4 >> 2] | 0) != (c[d + 4 >> 2] | 0)) break;
       m = c[d + 12 >> 2] | 0;
       k = c[k + 12 >> 2] | 0;
       l = a[m >> 0] | 0;
       d = a[k >> 0] | 0;
       if (l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != d << 24 >> 24) k = l; else {
        do {
         m = m + 1 | 0;
         k = k + 1 | 0;
         l = a[m >> 0] | 0;
         d = a[k >> 0] | 0;
        } while (!(l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != d << 24 >> 24));
        k = l;
       }
       if (k << 24 >> 24 != d << 24 >> 24) break;
      }
      f = c[J >> 2] | 0;
     }
    }
   } while (0);
   g = c[K >> 2] | 0;
   k = f - g | 0;
   d : do if ((x | 0) != (k | 0)) {
    f = c[C >> 2] | 0;
    e : do if (f | 0) {
     d = c[G >> 2] | 0;
     u = c[H >> 2] | 0;
     j = f + (u << 4) | 0;
     if ((d | 0) != (u | 0)) {
      d = f + (d << 4) | 0;
      while (1) {
       f = d + 8 | 0;
       d = d + 16 | 0;
       if ((k | 0) == (c[f >> 2] | 0)) break;
       if ((d | 0) == (j | 0)) break e;
      }
      c[f >> 2] = x;
     }
    } while (0);
    f = c[D >> 2] | 0;
    if (f | 0) {
     d = c[E >> 2] | 0;
     u = c[F >> 2] | 0;
     j = f + (u * 12 | 0) | 0;
     if ((d | 0) != (u | 0)) {
      d = f + (d * 12 | 0) | 0;
      while (1) {
       f = d + 8 | 0;
       d = d + 12 | 0;
       if ((k | 0) == (c[f >> 2] | 0)) break;
       if ((d | 0) == (j | 0)) break d;
      }
      c[f >> 2] = x;
     }
    }
   } while (0);
   j = v;
   d = v;
   f = w;
  }
  if ((y | 0) <= 1) break; else {
   k = j;
   m = f;
   l = d;
  }
 }
 i = P;
 return;
}

function af(d, f, g, h) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0;
 Q = i;
 i = i + 112 | 0;
 P = Q + 48 | 0;
 E = Q + 40 | 0;
 D = Q + 32 | 0;
 p = Q + 24 | 0;
 o = Q + 16 | 0;
 n = Q + 8 | 0;
 M = Q + 60 | 0;
 j = Q;
 k = Q + 56 | 0;
 l = f + 24 | 0;
 m = g + 76 | 0;
 cg(d, l, m);
 if ((c[d + 4 >> 2] | 0) != -1) {
  i = Q;
  return;
 }
 K = f + 408 | 0;
 I = c[K >> 2] | 0;
 c[K >> 2] = I + 1;
 K = f + 448 | 0;
 J = c[K >> 2] | 0;
 L = b[(c[f + 440 >> 2] | 0) + (J << 1) >> 1] | 0;
 c[K >> 2] = J + 1;
 K = _g(e[f + 412 >> 1] | 0, 0, 16) | 0;
 I = I | C;
 L = K | L & 65535;
 K = d;
 c[K >> 2] = L;
 c[K + 4 >> 2] = I;
 K = j;
 c[K >> 2] = L;
 c[K + 4 >> 2] = I;
 c[k >> 2] = c[(c[f >> 2] | 0) + ((c[f + 12 >> 2] | 0) + -1 << 2) >> 2];
 ag(l, m, j, k);
 K = f + 424 | 0;
 I = (c[K >> 2] | 0) + (e[d >> 1] | 0) | 0;
 L = f + 416 | 0;
 J = c[L >> 2] | 0;
 j = J + (I * 776 | 0) | 0;
 c[J + (I * 776 | 0) + 8 >> 2] = 1;
 O = f + 404 | 0;
 c[J + (I * 776 | 0) + 12 >> 2] = c[O >> 2];
 if ((j | 0) != (d | 0)) {
  A = d;
  B = c[A + 4 >> 2] | 0;
  G = j;
  c[G >> 2] = c[A >> 2];
  c[G + 4 >> 2] = B;
 }
 m = J + (I * 776 | 0) + 16 | 0;
 k = m;
 j = g;
 l = k + 36 | 0;
 do {
  c[k >> 2] = c[j >> 2];
  k = k + 4 | 0;
  j = j + 4 | 0;
 } while ((k | 0) < (l | 0));
 if ((m | 0) == (g | 0)) {
  j = J + (I * 776 | 0) + 64 | 0;
  G = g + 48 | 0;
  c[j >> 2] = c[G >> 2];
  c[j + 4 >> 2] = c[G + 4 >> 2];
  c[j + 8 >> 2] = c[G + 8 >> 2];
  c[j + 12 >> 2] = c[G + 12 >> 2];
  c[j + 16 >> 2] = c[G + 16 >> 2];
  c[j + 20 >> 2] = c[G + 20 >> 2];
  c[j + 24 >> 2] = c[G + 24 >> 2];
  j = c[g + 80 >> 2] | 0;
 } else {
  B = g + 40 | 0;
  A = c[B + 4 >> 2] | 0;
  j = J + (I * 776 | 0) + 56 | 0;
  c[j >> 2] = c[B >> 2];
  c[j + 4 >> 2] = A;
  j = J + (I * 776 | 0) + 64 | 0;
  A = g + 48 | 0;
  c[j >> 2] = c[A >> 2];
  c[j + 4 >> 2] = c[A + 4 >> 2];
  c[j + 8 >> 2] = c[A + 8 >> 2];
  c[j + 12 >> 2] = c[A + 12 >> 2];
  c[j + 16 >> 2] = c[A + 16 >> 2];
  c[j + 20 >> 2] = c[A + 20 >> 2];
  c[j + 24 >> 2] = c[A + 24 >> 2];
  j = J + (I * 776 | 0) + 92 | 0;
  c[j >> 2] = 0;
  ue(j, g + 76 | 0);
  j = c[g + 80 >> 2] | 0;
  A = g + 88 | 0;
  B = c[A + 4 >> 2] | 0;
  G = J + (I * 776 | 0) + 104 | 0;
  c[G >> 2] = c[A >> 2];
  c[G + 4 >> 2] = B;
 }
 G = J + (I * 776 | 0) + 96 | 0;
 c[G >> 2] = j;
 $e(J + (I * 776 | 0) + 112 | 0, g + 96 | 0);
 B = a[g + 680 >> 0] | 0;
 a[J + (I * 776 | 0) + 696 >> 0] = B;
 l = f + 208 | 0;
 a : do if (!(B & 2)) H = 6; else {
  z = J + (I * 776 | 0) + 24 | 0;
  t = c[z >> 2] | 0;
  A = J + (I * 776 | 0) + 28 | 0;
  u = c[A >> 2] | 0;
  B = J + (I * 776 | 0) + 44 | 0;
  j = c[B >> 2] | 0;
  k = j + -8 | 0;
  b : do if (k >>> 0 < 11) if (2023 >>> (k & 2047) & 1) {
   switch (j | 0) {
   case 10:
   case 9:
   case 8:
    {
     if (a[171853] | 0) break b;
     break;
    }
   case 16:
   case 15:
   case 14:
   case 13:
    {
     if (a[171854] | 0) break b;
     break;
    }
   default:
    {}
   }
   H = c[J + (I * 776 | 0) + 92 >> 2] | 0;
   c[n >> 2] = c[((H | 0) == 0 ? 136292 : H + 12 | 0) >> 2];
   he(151672, n);
   H = 4;
   break a;
  } while (0);
  x = J + (I * 776 | 0) + 20 | 0;
  switch (c[x >> 2] | 0) {
  case 0:
   {
    N = 3553;
    break;
   }
  case 2:
   {
    N = 34067;
    break;
   }
  default:
   {
    ie(152015, o);
    Wb();
   }
  }
  k = (c[l >> 2] | 0) + 304 | 0;
  l = k + 128 | 0;
  do {
   c[k >> 2] = 0;
   k = k + 4 | 0;
  } while ((k | 0) < (l | 0));
  c[M >> 2] = 0;
  gb(1, M | 0);
  Ob(33984);
  Hb(N | 0, c[M >> 2] | 0);
  w = c[M >> 2] | 0;
  rf(m);
  l = c[x >> 2] | 0;
  r = (l | 0) == 2 ? 6 : 1;
  v = J + (I * 776 | 0) + 40 | 0;
  s = c[v >> 2] | 0;
  k = c[B >> 2] | 0;
  j = k + -8 | 0;
  if (j >>> 0 < 11) q = (2023 >>> (j & 2047) & 1) != 0; else q = 0;
  do switch (k | 0) {
  case 6:
  case 5:
  case 2:
  case 4:
  case 0:
   {
    y = 6408;
    break;
   }
  case 3:
  case 1:
   {
    y = 6407;
    break;
   }
  case 7:
   {
    y = 6409;
    break;
   }
  case 11:
   {
    y = 6402;
    break;
   }
  case 12:
   {
    y = 34041;
    break;
   }
  case 8:
   {
    y = 33777;
    break;
   }
  case 9:
   {
    y = 33778;
    break;
   }
  case 10:
   {
    y = 33779;
    break;
   }
  case 13:
   {
    y = 35841;
    break;
   }
  case 14:
   {
    y = 35840;
    break;
   }
  case 15:
   {
    y = 35843;
    break;
   }
  case 16:
   {
    y = 35842;
    break;
   }
  case 17:
   {
    y = 37492;
    break;
   }
  case 18:
   {
    y = 37493;
    break;
   }
  default:
   {
    ie(151736, p);
    Wb();
   }
  } while (0);
  p = (s | 0) > 0;
  k = l;
  j = 0;
  c : while (1) {
   d : do if ((k | 0) == 2) switch (j | 0) {
   case 0:
    {
     o = 34069;
     break d;
    }
   case 1:
    {
     o = 34070;
     break d;
    }
   case 2:
    {
     o = 34071;
     break d;
    }
   case 3:
    {
     o = 34072;
     break d;
    }
   case 4:
    {
     o = 34073;
     break d;
    }
   default:
    {
     o = 34074;
     break d;
    }
   } else o = N; while (0);
   e : do if (p) {
    if (q) {
     k = 0;
     while (1) {
      f = t >> k;
      n = u >> k;
      Db(o | 0, k | 0, y | 0, ((f | 0) == 0 ? 1 : f) | 0, ((n | 0) == 0 ? 1 : n) | 0, 0, c[J + (I * 776 | 0) + 408 + (j * 48 | 0) + (k << 2) >> 2] | 0, h + (c[J + (I * 776 | 0) + 120 + (j * 48 | 0) + (k << 2) >> 2] | 0) | 0);
      k = k + 1 | 0;
      if ((k | 0) == (s | 0)) break e;
     }
    } else n = 0;
    while (1) {
     g = t >> n;
     g = (g | 0) == 0 ? 1 : g;
     f = u >> n;
     f = (f | 0) == 0 ? 1 : f;
     m = c[B >> 2] | 0;
     do switch (m | 0) {
     case 6:
     case 5:
     case 2:
     case 4:
     case 0:
      {
       l = 6408;
       break;
      }
     case 3:
     case 1:
      {
       k = 6407;
       F = 66;
       break;
      }
     case 7:
      {
       k = 6409;
       F = 66;
       break;
      }
     case 11:
      {
       k = 6402;
       F = 66;
       break;
      }
     case 12:
      {
       k = 34041;
       F = 66;
       break;
      }
     case 8:
      {
       k = 33777;
       F = 66;
       break;
      }
     case 9:
      {
       k = 33778;
       F = 66;
       break;
      }
     case 10:
      {
       k = 33779;
       F = 66;
       break;
      }
     case 13:
      {
       k = 35841;
       F = 66;
       break;
      }
     case 14:
      {
       k = 35840;
       F = 66;
       break;
      }
     case 15:
      {
       k = 35843;
       F = 66;
       break;
      }
     case 16:
      {
       k = 35842;
       F = 66;
       break;
      }
     case 17:
      {
       k = 37492;
       F = 66;
       break;
      }
     case 18:
      {
       k = 37493;
       F = 66;
       break;
      }
     default:
      {
       F = 65;
       break c;
      }
     } while (0);
     if ((F | 0) == 66) {
      F = 0;
      l = k;
     }
     switch (m | 0) {
     case 5:
      {
       k = 5126;
       break;
      }
     case 6:
      {
       k = 5131;
       break;
      }
     case 7:
     case 1:
     case 0:
      {
       k = 5121;
       break;
      }
     case 4:
      {
       k = 32820;
       break;
      }
     case 3:
      {
       k = 33635;
       break;
      }
     case 2:
      {
       k = 32819;
       break;
      }
     case 11:
      {
       k = 5123;
       break;
      }
     case 12:
      {
       k = 34042;
       break;
      }
     default:
      {
       F = 75;
       break c;
      }
     }
     Zb(o | 0, n | 0, y | 0, g | 0, f | 0, 0, l | 0, k | 0, h + (c[J + (I * 776 | 0) + 120 + (j * 48 | 0) + (n << 2) >> 2] | 0) | 0);
     n = n + 1 | 0;
     if ((n | 0) == (s | 0)) break e;
    }
   } while (0);
   j = j + 1 | 0;
   if ((j | 0) >= (r | 0)) {
    F = 35;
    break;
   }
   k = c[x >> 2] | 0;
  }
  if ((F | 0) == 35) {
   c[M >> 2] = 0;
   n = M + 4 | 0;
   c[n >> 2] = -2;
   o = M + 8 | 0;
   c[o >> 2] = -1;
   k = M + 12 | 0;
   c[k >> 2] = 20;
   c[M + 16 >> 2] = 20;
   l = M + 20 | 0;
   c[l >> 2] = -1;
   m = M + 24 | 0;
   c[m >> 2] = 0;
   g = M + 28 | 0;
   c[g >> 2] = 0;
   c[M + 32 >> 2] = 0;
   f = M + 36 | 0;
   c[f >> 2] = 1;
   a[M + 40 >> 0] = 0;
   a[M + 41 >> 0] = 0;
   a[M + 42 >> 0] = 0;
   j = J + (I * 776 | 0) + 92 | 0;
   if ((j | 0) != (M | 0)) {
    c[M >> 2] = 0;
    ue(M, j);
   }
   j = c[G >> 2] | 0;
   c[n >> 2] = j;
   c[o >> 2] = c[x >> 2];
   c[k >> 2] = c[B >> 2];
   c[l >> 2] = c[J + (I * 776 | 0) + 16 >> 2];
   c[m >> 2] = c[z >> 2];
   c[g >> 2] = c[A >> 2];
   c[f >> 2] = c[v >> 2];
   k = J + (I * 776 | 0) + 704 | 0;
   if ((M | 0) != (k | 0)) {
    c[k >> 2] = 0;
    ue(k, M);
    j = c[n >> 2] | 0;
   }
   c[J + (I * 776 | 0) + 708 >> 2] = j;
   H = J + (I * 776 | 0) + 712 | 0;
   c[H >> 2] = c[o >> 2];
   c[H + 4 >> 2] = c[o + 4 >> 2];
   c[H + 8 >> 2] = c[o + 8 >> 2];
   c[H + 12 >> 2] = c[o + 12 >> 2];
   c[H + 16 >> 2] = c[o + 16 >> 2];
   c[H + 20 >> 2] = c[o + 20 >> 2];
   c[H + 24 >> 2] = c[o + 24 >> 2];
   c[H + 28 >> 2] = c[o + 28 >> 2];
   b[H + 32 >> 1] = b[o + 32 >> 1] | 0;
   a[H + 34 >> 0] = a[o + 34 >> 0] | 0;
   c[J + (I * 776 | 0) + 768 >> 2] = w;
   c[J + (I * 776 | 0) + 748 >> 2] = N;
   H = 3;
   break;
  } else if ((F | 0) == 65) {
   ie(151736, D);
   Wb();
  } else if ((F | 0) == 75) {
   ie(151783, E);
   Wb();
  }
 } while (0);
 l = c[d >> 2] | 0;
 m = l & 65535;
 k = (c[K >> 2] | 0) + m | 0;
 j = c[L >> 2] | 0;
 N = d;
 d = j + (k * 776 | 0) | 0;
 if ((c[N >> 2] | 0) == (c[d >> 2] | 0) ? (c[N + 4 >> 2] | 0) == (c[d + 4 >> 2] | 0) : 0) {
  c[j + (k * 776 | 0) + 8 >> 2] = H;
  c[j + (k * 776 | 0) + 12 >> 2] = c[O >> 2];
  i = Q;
  return;
 } else {
  c[P >> 2] = l >>> 16;
  c[P + 4 >> 2] = m;
  he(164012, P);
  i = Q;
  return;
 }
}

function Se(d, e) {
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
 ue(d + 16 | 0, e + 16 | 0);
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
 Te(j, e + 58 | 0);
 Te(i, e + 126 | 0);
 Te(h, e + 194 | 0);
 Te(f, e + 262 | 0);
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

function Ad(d, e, f, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0.0, n = 0.0, o = 0.0, p = 0.0, q = 0, r = 0.0, s = 0, t = 0.0, u = 0;
 t = +g[e >> 2];
 s = c[f >> 2] | 0;
 h = c[h >> 2] | 0;
 if ((h | 0) > 0) {
  q = 0;
  i = 0.0;
  m = 0.0;
  r = 0.0;
  j = 440.0;
  k = 0.0;
  n = 0.0;
 } else return;
 while (1) {
  f = r >= 0.0;
  do if (f & r < .4000000059604645) {
   if (r < 0.0) j = 1.0; else if (r > .4000000059604645) j = 0.0; else j = 1.0 - r / .4000000059604645;
   i = 0.0;
   m = .4000000059604645;
   p = 65.0;
   o = j * j;
  } else {
   if (r >= .4000000059604645 & r < .9330000281333923) {
    e = r < .5299999713897705;
    i = e ? .4000000059604645 : .5299999713897705;
    if (r < i) j = 1.0; else if (r > .9330000281333923) j = 0.0; else j = 1.0 - (r - i) / (.9330000281333923 - i);
    m = .9330000281333923;
    p = e ? 96.0 : 66.0;
    o = j * j;
    break;
   }
   if (r >= .9330000281333923 & r < 1.465999960899353) {
    e = r < 1.0700000524520874;
    i = e ? .9330000281333923 : 1.0700000524520874;
    if (r < i) j = 1.0; else if (r > 1.465999960899353) j = 0.0; else j = 1.0 - (r - i) / (1.465999960899353 - i);
    m = 1.465999960899353;
    p = e ? 100.0 : 72.0;
    o = j * j;
    break;
   }
   if (r >= 1.465999960899353 & r < 2.0) {
    e = r < 1.600000023841858;
    i = e ? 1.465999960899353 : 1.600000023841858;
    if (r < i) j = 1.0; else if (r > 2.0) j = 0.0; else j = 1.0 - (r - i) / (2.0 - i);
    m = 2.0;
    p = e ? 102.0 : 72.0;
    o = j * j;
    break;
   }
   if (r >= 2.0 & r < 2.5299999713897705) {
    e = r < 2.134000062942505;
    i = e ? 2.0 : 2.134000062942505;
    if (r < i) j = 1.0; else if (r > 2.5299999713897705) j = 0.0; else j = 1.0 - (r - i) / (2.5299999713897705 - i);
    m = 2.5299999713897705;
    p = e ? 103.0 : 66.0;
    o = j * j;
    break;
   }
   if (r >= 2.5299999713897705 & r < 2.933000087738037) {
    e = r < 2.6670000553131104;
    i = e ? 2.5299999713897705 : 2.6670000553131104;
    if (r < i) j = 1.0; else if (r > 2.933000087738037) j = 0.0; else j = 1.0 - (r - i) / (2.933000087738037 - i);
    m = 2.933000087738037;
    p = e ? 99.0 : 65.0;
    o = j * j;
    break;
   }
   e = r < 3.4670000076293945;
   if (r >= 3.066999912261963 & e) {
    i = r < 3.200000047683716 ? 3.066999912261963 : 3.200000047683716;
    if (r < i) j = 1.0; else if (r > 3.4670000076293945) j = 0.0; else j = 1.0 - (r - i) / (3.4670000076293945 - i);
    m = 3.4670000076293945;
    p = 84.0;
    o = j * j;
    break;
   }
   d = r < 3.7339999675750732;
   if (r >= 3.4670000076293945 & d) {
    if (e) j = 1.0; else if (r > 3.7339999675750732) j = 0.0; else j = 1.0 - (r + -3.4670000076293945) / .2669999599456787;
    i = 3.4670000076293945;
    m = 3.7339999675750732;
    p = 105.0;
    o = j * j;
    break;
   }
   e = r < 4.0;
   if (r >= 3.7339999675750732 & e) {
    if (d) j = 1.0; else if (r > 4.0) j = 0.0; else j = 1.0 - (r + -3.7339999675750732) / .26600003242492676;
    i = 3.7339999675750732;
    m = 4.0;
    p = 118.0;
    o = j * j;
    break;
   }
   if (r >= 4.0 & r < 4.28000020980835) {
    if (e) j = 1.0; else if (r > 4.28000020980835) j = 0.0; else j = 1.0 - (r + -4.0) / .2800002098083496;
    i = 4.0;
    m = 4.28000020980835;
    p = 135.0;
    o = j * j;
   } else {
    p = j;
    o = 0.0;
   }
  } while (0);
  do if (f & r < .06700000166893005) {
   i = 0.0;
   m = .06700000166893005;
   j = 540.0;
   u = 89;
  } else if (r >= .1340000033378601 & r < .20000000298023224) {
   i = .1340000033378601;
   m = .20000000298023224;
   j = 1080.0;
   u = 89;
  } else if (r >= .26600000262260437 & r < .33500000834465027) {
   i = .26600000262260437;
   m = .33500000834465027;
   j = 810.0;
   u = 89;
  } else if (r >= .4000000059604645 & r < .4650000035762787) {
   i = .4000000059604645;
   m = .4650000035762787;
   j = 700.0;
   u = 89;
  } else {
   if (r >= .5329999923706055 & r < .6669999957084656) {
    if (r < .6000000238418579) {
     i = .5329999923706055;
     m = .6669999957084656;
     j = 1085.0;
     u = 89;
     break;
    }
    i = .5329999923706055;
    m = .6669999957084656;
    j = 810.0;
    u = 89;
    break;
   }
   if (r >= .800000011920929 & r < .9330000281333923) {
    i = .800000011920929;
    m = .9330000281333923;
    j = 722.0;
    u = 89;
   } else if (r >= 1.0700000524520874 & r < 1.1339999437332153) {
    i = 1.0700000524520874;
    m = 1.1339999437332153;
    j = 570.0;
    u = 89;
   } else if (r >= 1.2000000476837158 & r < 1.2669999599456787) {
    i = 1.2000000476837158;
    m = 1.2669999599456787;
    j = 1160.0;
    u = 89;
   } else if (r >= 1.3339999914169312 & r < 1.399999976158142) {
    i = 1.3339999914169312;
    m = 1.399999976158142;
    j = 860.0;
    u = 89;
   } else if (r >= 1.465999960899353 & r < 1.534999966621399) {
    i = 1.465999960899353;
    m = 1.534999966621399;
    j = 717.0;
    u = 89;
   } else {
    if (r >= 1.600000023841858 & r < 1.7350000143051147) {
     if (r < 1.6670000553131104) {
      i = 1.600000023841858;
      m = 1.7350000143051147;
      j = 1141.0;
      u = 89;
      break;
     }
     i = 1.600000023841858;
     m = 1.7350000143051147;
     j = 865.0;
     u = 89;
     break;
    }
    if (r >= 1.8660000562667847 & r < 2.0) {
     i = 1.8660000562667847;
     m = 2.0;
     j = 720.0;
     u = 89;
    } else if (r >= 2.134999990463257 & r < 2.200000047683716) {
     i = 2.134999990463257;
     m = 2.200000047683716;
     j = 537.0;
     u = 89;
    } else if (r >= 2.2669999599456787 & r < 2.3340001106262207) {
     i = 2.2669999599456787;
     m = 2.3340001106262207;
     j = 1086.0;
     u = 89;
    } else if (r >= 2.4000000953674316 & r < 2.4670000076293945) {
     i = 2.4000000953674316;
     m = 2.4670000076293945;
     j = 809.0;
     u = 89;
    } else if (r >= 2.5299999713897705 & r < 2.5999999046325684) {
     i = 2.5299999713897705;
     m = 2.5999999046325684;
     j = 676.0;
     u = 89;
    } else {
     if (r >= 2.6670000553131104 & r < 2.799999952316284) {
      if (r < 2.7330000400543213) {
       i = 2.6670000553131104;
       m = 2.799999952316284;
       j = 1084.0;
       u = 89;
       break;
      }
      i = 2.6670000553131104;
      m = 2.799999952316284;
      j = 809.0;
      u = 89;
      break;
     }
     if (r >= 2.933000087738037 & r < 3.066999912261963) {
      i = 2.933000087738037;
      m = 3.066999912261963;
      j = 680.0;
      u = 89;
      break;
     }
     if (r >= 3.200000047683716 & r < 3.4000000953674316) {
      if (r < 3.200000047683716) {
       i = 3.200000047683716;
       m = 3.4000000953674316;
       j = 637.0;
       u = 89;
       break;
      }
      if (r > 3.4000000953674316) {
       i = 3.200000047683716;
       m = 3.4000000953674316;
       j = 725.0;
       u = 89;
       break;
      }
      i = 3.200000047683716;
      m = 3.4000000953674316;
      j = (r + -3.200000047683716) / .20000004768371582 * 88.0 + 637.0;
      u = 89;
      break;
     }
     if (r >= 3.4670000076293945 & r < 3.6679999828338623) {
      if (r < 3.4670000076293945) {
       i = 3.4670000076293945;
       m = 3.6679999828338623;
       j = 720.0;
       u = 89;
       break;
      }
      if (r > 3.6679999828338623) {
       i = 3.4670000076293945;
       m = 3.6679999828338623;
       j = 806.0;
       u = 89;
       break;
      }
      i = 3.4670000076293945;
      m = 3.6679999828338623;
      j = (r + -3.4670000076293945) / .20099997520446777 * 86.0 + 720.0;
      u = 89;
      break;
     }
     if (!(r >= 3.7339999675750732 & r < 3.934000015258789)) if (r >= 4.0 & r < 4.133999824523926) {
      i = 4.0;
      m = 4.133999824523926;
      j = 1084.0;
      u = 89;
      break;
     } else {
      l = 0.0;
      break;
     }
     if (r < 3.7339999675750732) {
      i = 3.7339999675750732;
      m = 3.934000015258789;
      j = 804.0;
      u = 89;
      break;
     }
     if (r > 3.934000015258789) {
      i = 3.7339999675750732;
      m = 3.934000015258789;
      j = 908.0;
      u = 89;
      break;
     }
     i = 3.7339999675750732;
     m = 3.934000015258789;
     j = (r + -3.7339999675750732) / .20000004768371582 * 104.0 + 804.0;
     u = 89;
    }
   }
  } while (0);
  if ((u | 0) == 89) {
   u = 0;
   l = +(a[164352 + ~~(n * 32.0) >> 0] | 0) * .125 + -1.0;
   j = n + t * j;
   if (!(j >= 1.0)) n = j; else n = +vg(j);
  }
  j = i + .009999999776482582;
  if (r < i) j = 0.0; else if (r > j) j = 1.0; else j = (r - i) / (j - i);
  l = l * j;
  j = m + -.009999999776482582;
  if (r < j) j = 1.0; else if (r > m) j = 0.0; else j = 1.0 - (r - j) / (m - j);
  l = l * j;
  if (o > 0.0) {
   j = o * (+(a[164416 + ~~(k * 32.0) >> 0] | 0) * .125 + -1.0);
   k = k + t * p;
   if (k >= 1.0) k = +vg(k);
  } else j = 0.0;
  f = ~~((l + j) * .5 * 32768.0);
  b[s + (q << 1) >> 1] = (f | 0) < -32768 ? -32768 : ((f | 0) > 32767 ? 32767 : f) & 65535;
  q = q + 1 | 0;
  if ((q | 0) == (h | 0)) break; else {
   r = t + r;
   j = p;
  }
 }
 return;
}

function Tf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 p = b + 76 | 0;
 do {
  o = a[p >> 0] | 0;
  a[p >> 0] = 1;
 } while ((o & 1) != 0);
 e = b + 80 | 0;
 do {} while ((c[e >> 2] | 0) > 0);
 n = b + 256 | 0;
 o = b + 264 | 0;
 f = c[o >> 2] | 0;
 m = b + 260 | 0;
 e = c[m >> 2] | 0;
 if ((f + 2 | 0) < (e | 0)) {
  h = n;
  b = f;
  e = c[n >> 2] | 0;
 } else {
  j = e + 128 | 0;
  e = yg(j) | 0;
  b = c[n >> 2] | 0;
  if (!b) a[e >> 0] = 0; else {
   f = b;
   a : do if (!((f ^ e) & 3)) {
    if (!(f & 3)) f = e; else {
     f = e;
     do {
      k = a[b >> 0] | 0;
      a[f >> 0] = k;
      if (!(k << 24 >> 24)) break a;
      b = b + 1 | 0;
      f = f + 1 | 0;
     } while ((b & 3 | 0) != 0);
    }
    h = c[b >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) while (1) {
     b = b + 4 | 0;
     i = f + 4 | 0;
     c[f >> 2] = h;
     h = c[b >> 2] | 0;
     if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) {
      f = i;
      break;
     } else f = i;
    }
    l = 15;
   } else {
    f = e;
    l = 15;
   } while (0);
   if ((l | 0) == 15) {
    k = a[b >> 0] | 0;
    a[f >> 0] = k;
    if (k << 24 >> 24) do {
     b = b + 1 | 0;
     f = f + 1 | 0;
     k = a[b >> 0] | 0;
     a[f >> 0] = k;
    } while (k << 24 >> 24 != 0);
   }
   zg(c[n >> 2] | 0);
   c[n >> 2] = 0;
  }
  c[n >> 2] = e;
  c[m >> 2] = j;
  h = n;
  b = c[o >> 2] | 0;
 }
 c[o >> 2] = b + 1;
 a[e + b >> 0] = 27;
 a[(c[h >> 2] | 0) + (c[o >> 2] | 0) >> 0] = 0;
 b = c[o >> 2] | 0;
 e = c[m >> 2] | 0;
 if ((b + 2 | 0) < (e | 0)) {
  f = n;
  e = c[n >> 2] | 0;
 } else {
  j = e + 128 | 0;
  e = yg(j) | 0;
  b = c[n >> 2] | 0;
  if (!b) a[e >> 0] = 0; else {
   f = b;
   b : do if (!((f ^ e) & 3)) {
    if (!(f & 3)) f = e; else {
     f = e;
     do {
      k = a[b >> 0] | 0;
      a[f >> 0] = k;
      if (!(k << 24 >> 24)) break b;
      b = b + 1 | 0;
      f = f + 1 | 0;
     } while ((b & 3 | 0) != 0);
    }
    h = c[b >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) while (1) {
     b = b + 4 | 0;
     i = f + 4 | 0;
     c[f >> 2] = h;
     h = c[b >> 2] | 0;
     if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) {
      f = i;
      break;
     } else f = i;
    }
    l = 30;
   } else {
    f = e;
    l = 30;
   } while (0);
   if ((l | 0) == 30) {
    k = a[b >> 0] | 0;
    a[f >> 0] = k;
    if (k << 24 >> 24) do {
     b = b + 1 | 0;
     f = f + 1 | 0;
     k = a[b >> 0] | 0;
     a[f >> 0] = k;
    } while (k << 24 >> 24 != 0);
   }
   zg(c[n >> 2] | 0);
   c[n >> 2] = 0;
  }
  c[n >> 2] = e;
  c[m >> 2] = j;
  f = n;
  b = c[o >> 2] | 0;
 }
 c[o >> 2] = b + 1;
 a[e + b >> 0] = 2;
 a[(c[f >> 2] | 0) + (c[o >> 2] | 0) >> 0] = 0;
 k = ~~(+g[d >> 2] * 255.0);
 b = c[o >> 2] | 0;
 e = c[m >> 2] | 0;
 if ((b + 2 | 0) < (e | 0)) {
  f = n;
  e = c[n >> 2] | 0;
 } else {
  j = e + 128 | 0;
  e = yg(j) | 0;
  b = c[n >> 2] | 0;
  if (!b) a[e >> 0] = 0; else {
   f = b;
   c : do if (!((f ^ e) & 3)) {
    if (!(f & 3)) f = e; else {
     f = e;
     do {
      i = a[b >> 0] | 0;
      a[f >> 0] = i;
      if (!(i << 24 >> 24)) break c;
      b = b + 1 | 0;
      f = f + 1 | 0;
     } while ((b & 3 | 0) != 0);
    }
    h = c[b >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) while (1) {
     b = b + 4 | 0;
     i = f + 4 | 0;
     c[f >> 2] = h;
     h = c[b >> 2] | 0;
     if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) {
      f = i;
      break;
     } else f = i;
    }
    l = 45;
   } else {
    f = e;
    l = 45;
   } while (0);
   if ((l | 0) == 45) {
    i = a[b >> 0] | 0;
    a[f >> 0] = i;
    if (i << 24 >> 24) do {
     b = b + 1 | 0;
     f = f + 1 | 0;
     i = a[b >> 0] | 0;
     a[f >> 0] = i;
    } while (i << 24 >> 24 != 0);
   }
   zg(c[n >> 2] | 0);
   c[n >> 2] = 0;
  }
  c[n >> 2] = e;
  c[m >> 2] = j;
  f = n;
  b = c[o >> 2] | 0;
 }
 c[o >> 2] = b + 1;
 a[e + b >> 0] = k;
 a[(c[f >> 2] | 0) + (c[o >> 2] | 0) >> 0] = 0;
 k = ~~(+g[d + 4 >> 2] * 255.0);
 b = c[o >> 2] | 0;
 e = c[m >> 2] | 0;
 if ((b + 2 | 0) < (e | 0)) {
  f = n;
  e = c[n >> 2] | 0;
 } else {
  j = e + 128 | 0;
  e = yg(j) | 0;
  b = c[n >> 2] | 0;
  if (!b) a[e >> 0] = 0; else {
   f = b;
   d : do if (!((f ^ e) & 3)) {
    if (!(f & 3)) f = e; else {
     f = e;
     do {
      i = a[b >> 0] | 0;
      a[f >> 0] = i;
      if (!(i << 24 >> 24)) break d;
      b = b + 1 | 0;
      f = f + 1 | 0;
     } while ((b & 3 | 0) != 0);
    }
    h = c[b >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) while (1) {
     b = b + 4 | 0;
     i = f + 4 | 0;
     c[f >> 2] = h;
     h = c[b >> 2] | 0;
     if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) {
      f = i;
      break;
     } else f = i;
    }
    l = 60;
   } else {
    f = e;
    l = 60;
   } while (0);
   if ((l | 0) == 60) {
    i = a[b >> 0] | 0;
    a[f >> 0] = i;
    if (i << 24 >> 24) do {
     b = b + 1 | 0;
     f = f + 1 | 0;
     i = a[b >> 0] | 0;
     a[f >> 0] = i;
    } while (i << 24 >> 24 != 0);
   }
   zg(c[n >> 2] | 0);
   c[n >> 2] = 0;
  }
  c[n >> 2] = e;
  c[m >> 2] = j;
  f = n;
  b = c[o >> 2] | 0;
 }
 c[o >> 2] = b + 1;
 a[e + b >> 0] = k;
 a[(c[f >> 2] | 0) + (c[o >> 2] | 0) >> 0] = 0;
 k = ~~(+g[d + 8 >> 2] * 255.0);
 b = c[o >> 2] | 0;
 e = c[m >> 2] | 0;
 if ((b + 2 | 0) < (e | 0)) {
  f = n;
  e = c[n >> 2] | 0;
 } else {
  j = e + 128 | 0;
  e = yg(j) | 0;
  b = c[n >> 2] | 0;
  if (!b) a[e >> 0] = 0; else {
   f = b;
   e : do if (!((f ^ e) & 3)) {
    if (!(f & 3)) f = e; else {
     f = e;
     do {
      i = a[b >> 0] | 0;
      a[f >> 0] = i;
      if (!(i << 24 >> 24)) break e;
      b = b + 1 | 0;
      f = f + 1 | 0;
     } while ((b & 3 | 0) != 0);
    }
    h = c[b >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) while (1) {
     b = b + 4 | 0;
     i = f + 4 | 0;
     c[f >> 2] = h;
     h = c[b >> 2] | 0;
     if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) {
      f = i;
      break;
     } else f = i;
    }
    l = 75;
   } else {
    f = e;
    l = 75;
   } while (0);
   if ((l | 0) == 75) {
    i = a[b >> 0] | 0;
    a[f >> 0] = i;
    if (i << 24 >> 24) do {
     b = b + 1 | 0;
     f = f + 1 | 0;
     i = a[b >> 0] | 0;
     a[f >> 0] = i;
    } while (i << 24 >> 24 != 0);
   }
   zg(c[n >> 2] | 0);
   c[n >> 2] = 0;
  }
  c[n >> 2] = e;
  c[m >> 2] = j;
  f = n;
  b = c[o >> 2] | 0;
 }
 c[o >> 2] = b + 1;
 a[e + b >> 0] = k;
 a[(c[f >> 2] | 0) + (c[o >> 2] | 0) >> 0] = 0;
 k = ~~(+g[d + 12 >> 2] * 255.0);
 e = c[o >> 2] | 0;
 b = c[m >> 2] | 0;
 if ((e + 2 | 0) < (b | 0)) {
  m = n;
  d = e;
  n = c[n >> 2] | 0;
  l = d + 1 | 0;
  c[o >> 2] = l;
  n = n + d | 0;
  a[n >> 0] = k;
  o = c[o >> 2] | 0;
  n = c[m >> 2] | 0;
  o = n + o | 0;
  a[o >> 0] = 0;
  a[p >> 0] = 0;
  return;
 }
 i = b + 128 | 0;
 j = yg(i) | 0;
 e = c[n >> 2] | 0;
 if (!e) a[j >> 0] = 0; else {
  b = e;
  f : do if (!((b ^ j) & 3)) {
   if (!(b & 3)) b = j; else {
    b = j;
    do {
     d = a[e >> 0] | 0;
     a[b >> 0] = d;
     if (!(d << 24 >> 24)) break f;
     e = e + 1 | 0;
     b = b + 1 | 0;
    } while ((e & 3 | 0) != 0);
   }
   f = c[e >> 2] | 0;
   if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) while (1) {
    e = e + 4 | 0;
    h = b + 4 | 0;
    c[b >> 2] = f;
    f = c[e >> 2] | 0;
    if ((f & -2139062144 ^ -2139062144) & f + -16843009 | 0) {
     b = h;
     break;
    } else b = h;
   }
   l = 90;
  } else {
   b = j;
   l = 90;
  } while (0);
  if ((l | 0) == 90) {
   d = a[e >> 0] | 0;
   a[b >> 0] = d;
   if (d << 24 >> 24) do {
    e = e + 1 | 0;
    b = b + 1 | 0;
    d = a[e >> 0] | 0;
    a[b >> 0] = d;
   } while (d << 24 >> 24 != 0);
  }
  zg(c[n >> 2] | 0);
  c[n >> 2] = 0;
 }
 c[n >> 2] = j;
 c[m >> 2] = i;
 m = c[o >> 2] | 0;
 d = j;
 l = m + 1 | 0;
 c[o >> 2] = l;
 m = d + m | 0;
 a[m >> 0] = k;
 o = c[o >> 2] | 0;
 n = c[n >> 2] | 0;
 o = n + o | 0;
 a[o >> 0] = 0;
 a[p >> 0] = 0;
 return;
}

function zg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[42842] | 0;
 if (d >>> 0 < h >>> 0) Wb();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) Wb();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) Wb();
  if ((k | 0) == (c[42843] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    f = j;
    break;
   }
   c[42840] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 171392 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) Wb();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) Wb();
   }
   if ((d | 0) == (b | 0)) {
    c[42838] = c[42838] & ~(1 << e);
    q = k;
    f = j;
    break;
   }
   if ((d | 0) == (a | 0)) g = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) Wb();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) g = a; else Wb();
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
   if (b >>> 0 < h >>> 0) Wb(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) Wb();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) Wb();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else Wb();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 171656 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[42839] = c[42839] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[42842] | 0) >>> 0) Wb();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   d = c[42842] | 0;
   if (i >>> 0 < d >>> 0) Wb();
   c[i + 24 >> 2] = g;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) Wb(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
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
 if (q >>> 0 >= m >>> 0) Wb();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) Wb();
 if (!(b & 2)) {
  if ((m | 0) == (c[42844] | 0)) {
   p = (c[42841] | 0) + f | 0;
   c[42841] = p;
   c[42844] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[42843] | 0)) return;
   c[42843] = 0;
   c[42840] = 0;
   return;
  }
  if ((m | 0) == (c[42843] | 0)) {
   p = (c[42840] | 0) + f | 0;
   c[42840] = p;
   c[42843] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (b & -8) + f | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 171392 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[42842] | 0) >>> 0) Wb();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) Wb();
   }
   if ((d | 0) == (b | 0)) {
    c[42838] = c[42838] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[42842] | 0) >>> 0) Wb();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else Wb();
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
    if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[42842] | 0) >>> 0) Wb();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) Wb();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else Wb();
   } while (0);
   if (g | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 171656 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[42839] = c[42839] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[42842] | 0) >>> 0) Wb();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[42842] | 0;
    if (n >>> 0 < d >>> 0) Wb();
    c[n + 24 >> 2] = g;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) Wb(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[42843] | 0)) {
   c[42840] = f;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  d = 171392 + (a << 1 << 2) | 0;
  b = c[42838] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[42838] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
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
 e = 171656 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[42839] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[42839] = a | b;
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
  if ((a | 0) == 127) if (b >>> 0 < (c[42842] | 0) >>> 0) Wb(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = e;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = e + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[42842] | 0;
   if (b >>> 0 >= p >>> 0 & e >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = e;
    c[q + 24 >> 2] = 0;
    break;
   } else Wb();
  }
 } while (0);
 q = (c[42846] | 0) + -1 | 0;
 c[42846] = q;
 if (!q) a = 171808; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[42846] = -1;
 return;
}

function xg(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 1056 | 0;
 v = x + 1024 | 0;
 w = x;
 o = a[e >> 0] | 0;
 do if (o << 24 >> 24) {
  u = wg(b, o << 24 >> 24) | 0;
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
          g = jg(h, 0, k) | 0;
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

function ze(b, d, e) {
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
  Ae(b);
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
  Ae(b);
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
    ie(151160, r);
    Wb();
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
   d = yg(e << 2) | 0;
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
   if (f | 0) zg(f);
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

function vf(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, h = 0, i = 0, j = 0, k = 0;
 a[b >> 0] = 0;
 a[b + 588 >> 0] = 0;
 d = b + 592 | 0;
 e = b + 612 | 0;
 j = b + 4 | 0;
 k = j + 68 | 0;
 do {
  c[j >> 2] = 0;
  j = j + 4 | 0;
 } while ((j | 0) < (k | 0));
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 c[d + 16 >> 2] = 0;
 c[e >> 2] = 16;
 c[b + 616 >> 2] = 65536;
 a[b + 620 >> 0] = 0;
 Xg(b + 72 | 0, 0, 516) | 0;
 a[b + 624 >> 0] = 0;
 e = b + 628 | 0;
 d = b + 656 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 c[d + 16 >> 2] = 0;
 c[b + 676 >> 2] = 16;
 c[b + 680 >> 2] = 65536;
 a[b + 684 >> 0] = 0;
 c[b + 704 >> 2] = 0;
 d = b + 652 | 0;
 a[d >> 0] = 0;
 a[d + 1 >> 0] = 0;
 a[d + 2 >> 0] = 0;
 a[b + 712 >> 0] = 0;
 d = b + 716 | 0;
 e = b + 860 | 0;
 f = b + 1004 | 0;
 h = b + 1148 | 0;
 i = b + 1368 | 0;
 j = b + 1300 | 0;
 k = j + 68 | 0;
 do {
  c[j >> 2] = 0;
  j = j + 4 | 0;
 } while ((j | 0) < (k | 0));
 Xg(d | 0, 0, 141) | 0;
 Xg(e | 0, 0, 141) | 0;
 Xg(f | 0, 0, 141) | 0;
 Xg(h | 0, 0, 149) | 0;
 c[i >> 2] = 16;
 c[b + 1372 >> 2] = 65536;
 a[b + 1376 >> 0] = 0;
 a[b + 1380 >> 0] = 0;
 c[b + 1384 >> 2] = 0;
 c[b + 1388 >> 2] = -1055070198;
 j = b + 1392 | 0;
 k = b + 1409 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 a[j + 16 >> 0] = 0;
 a[k >> 0] = 1;
 a[k + 1 >> 0] = 1;
 a[k + 2 >> 0] = 1;
 a[k + 3 >> 0] = 1;
 a[k + 4 >> 0] = 1;
 a[k + 5 >> 0] = 1;
 c[b + 1416 >> 2] = 1;
 g[b + 1420 >> 2] = 0.0;
 g[b + 1424 >> 2] = 0.0;
 c[b + 1432 >> 2] = 4;
 k = b + 1440 | 0;
 j = b + 1468 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 c[k + 16 >> 2] = 0;
 c[k + 20 >> 2] = 0;
 a[k + 24 >> 0] = 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1484 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1500 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1516 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1532 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1548 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1564 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 c[b + 1584 >> 2] = 0;
 c[b + 1592 >> 2] = 1;
 g[b + 1596 >> 2] = 0.0;
 g[b + 1600 >> 2] = 0.0;
 c[b + 1608 >> 2] = 4;
 j = b + 1616 | 0;
 k = b + 1644 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[j + 16 >> 2] = 0;
 c[j + 20 >> 2] = 0;
 a[j + 24 >> 0] = 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 1660 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 1676 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 1692 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 1708 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 1724 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 1740 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 c[b + 1760 >> 2] = 0;
 k = b + 1768 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 c[b + 1784 >> 2] = 4;
 k = b + 1792 | 0;
 j = b + 1820 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 c[k + 16 >> 2] = 0;
 c[k + 20 >> 2] = 0;
 a[k + 24 >> 0] = 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1836 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1852 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1868 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1884 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1900 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 j = b + 1916 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 a[j + 12 >> 0] = 0;
 a[b + 1936 >> 0] = 0;
 j = b + 1944 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[j + 16 >> 2] = 0;
 c[j + 20 >> 2] = 0;
 c[j + 24 >> 2] = 0;
 c[j + 28 >> 2] = 0;
 c[b + 1976 >> 2] = 4;
 j = b + 1984 | 0;
 k = b + 2012 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 c[j + 16 >> 2] = 0;
 c[j + 20 >> 2] = 0;
 a[j + 24 >> 0] = 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 2028 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 2044 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 2060 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 2076 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 2092 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = b + 2108 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 return;
}

function oe(b, d) {
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
   n = yg(q * 40 | 0) | 0;
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
       Qc[c[(c[g >> 2] | 0) + 12 >> 2] & 127](g, e);
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
     if ((e | 0) == (f | 0)) Pc[c[(c[f >> 2] | 0) + 16 >> 2] & 127](f); else if (e | 0) Pc[c[(c[e >> 2] | 0) + 20 >> 2] & 127](e);
     k = k + 1 | 0;
    } while ((k | 0) != (m | 0));
   }
   e = c[b >> 2] | 0;
   if (e | 0) zg(e);
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
   e = pe(b, g) | 0;
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
   e = qe(b, 0) | 0;
   u = 42;
   break;
  }
  if ((h >> 1 | 0) > (g | 0)) if ((o | 0) > 0) {
   e = pe(b, g) | 0;
   u = 42;
   break;
  } else {
   e = qe(b, g) | 0;
   u = 42;
   break;
  } else if ((e | 0) < (m | 0)) {
   e = qe(b, g) | 0;
   u = 42;
   break;
  } else {
   e = pe(b, g) | 0;
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
   Qc[c[(c[v >> 2] | 0) + 12 >> 2] & 127](v, f);
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
   Qc[c[(c[f >> 2] | 0) + 12 >> 2] & 127](f, v);
   f = g;
   g = c[g >> 2] | 0;
  } else {
   g = Rc[c[(c[f >> 2] | 0) + 8 >> 2] & 127](f) | 0;
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
   Qc[c[(c[v >> 2] | 0) + 12 >> 2] & 127](v, t);
   g = c[f >> 2] | 0;
   Pc[c[(c[g >> 2] | 0) + 16 >> 2] & 127](g);
   c[f >> 2] = 0;
   g = c[h >> 2] | 0;
   Qc[c[(c[g >> 2] | 0) + 12 >> 2] & 127](g, v);
   g = c[h >> 2] | 0;
   Pc[c[(c[g >> 2] | 0) + 16 >> 2] & 127](g);
   c[h >> 2] = 0;
   c[f >> 2] = v;
   Qc[c[(c[t >> 2] | 0) + 12 >> 2] & 127](t, j);
   Pc[c[(c[t >> 2] | 0) + 16 >> 2] & 127](t);
   c[h >> 2] = m;
   g = v;
   break;
  } else {
   Qc[c[(c[v >> 2] | 0) + 12 >> 2] & 127](v, m);
   g = c[f >> 2] | 0;
   Pc[c[(c[g >> 2] | 0) + 16 >> 2] & 127](g);
   c[f >> 2] = c[h >> 2];
   c[h >> 2] = m;
   g = v;
   break;
  }
 } while (0);
 if ((u | 0) == 53) {
  Qc[c[(c[m >> 2] | 0) + 12 >> 2] & 127](j, g);
  u = c[h >> 2] | 0;
  Pc[c[(c[u >> 2] | 0) + 16 >> 2] & 127](u);
  c[h >> 2] = c[f >> 2];
  c[f >> 2] = v;
 } else if ((u | 0) == 54) {
  c[f >> 2] = j;
  c[h >> 2] = k;
 }
 f = c[f >> 2] | 0;
 if ((f | 0) == (g | 0)) Pc[c[(c[v >> 2] | 0) + 16 >> 2] & 127](g); else if (f | 0) Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
 a[e + 32 >> 0] = a[d + 32 >> 0] | 0;
 i = w;
 return;
}

function fd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 d = a + 152 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
   zg(c[d >> 2] | 0);
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
  zg(c[a >> 2] | 0);
  c[a >> 2] = 0;
  b = a + 4 | 0;
  c[b >> 2] = 0;
 } else b = a + 4 | 0;
 c[a >> 2] = 0;
 c[b >> 2] = 0;
 return;
}

function ef(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 j = m;
 c[j >> 2] = 0;
 ue(d, j);
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
 Te(j, e);
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

function ce(a) {
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
  ie(151160, k);
  Wb();
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
   f = yg(k << 2) | 0;
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
   if (e | 0) zg(e);
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

function cf(f, g, h) {
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
 cg(f, l, h);
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
 n = _g(e[g + 476 >> 1] | 0, 0, 16) | 0;
 m = m | C;
 n = n | r & 65535;
 t = f;
 c[t >> 2] = n;
 c[t + 4 >> 2] = m;
 t = j;
 c[t >> 2] = n;
 c[t + 4 >> 2] = m;
 c[k >> 2] = c[(c[g >> 2] | 0) + ((c[g + 12 >> 2] | 0) + -1 << 2) >> 2];
 ag(l, h, j, k);
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
  ue(j, h);
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
 Te(s + (r * 608 | 0) + 58 | 0, h + 42 | 0);
 Te(s + (r * 608 | 0) + 126 | 0, h + 110 | 0);
 Te(s + (r * 608 | 0) + 194 | 0, h + 178 | 0);
 Te(s + (r * 608 | 0) + 262 | 0, h + 246 | 0);
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
    a[s + (r * 608 | 0) + 348 + (l << 4) + 5 >> 0] = c[136368 + ((d[j >> 0] | 0) * 12 | 0) >> 2];
    c[s + (r * 608 | 0) + 348 + (l << 4) + 12 >> 2] = c[136368 + ((d[j >> 0] | 0) * 12 | 0) + 4 >> 2];
    a[s + (r * 608 | 0) + 348 + (l << 4) + 6 >> 0] = a[136368 + ((d[j >> 0] | 0) * 12 | 0) + 8 >> 0] | 0;
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
   ie(151879, w);
   Wb();
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
  he(164012, y);
  i = z;
  return;
 }
}

function se(a, b) {
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
  ie(151160, l);
  Wb();
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
   e = yg(k << 2) | 0;
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
   if (f | 0) zg(f);
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

function xe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 i = c[b >> 2] | 0;
 if (!i) return;
 h = d;
 a : do if (!(h & 3)) {
  f = d;
  x = 5;
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
    x = 5;
    break;
   }
  }
 } while (0);
 if ((x | 0) == 5) {
  while (1) {
   g = c[f >> 2] | 0;
   if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
  }
  if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
 }
 y = f - h | 0;
 z = e;
 h = z & 3;
 b : do if (!h) {
  f = e;
  x = 13;
 } else {
  f = e;
  g = z;
  while (1) {
   if (!(a[f >> 0] | 0)) {
    f = g;
    break b;
   }
   f = f + 1 | 0;
   g = f;
   if (!(g & 3)) {
    x = 13;
    break;
   }
  }
 } while (0);
 if ((x | 0) == 13) {
  while (1) {
   g = c[f >> 2] | 0;
   if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
  }
  if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
 }
 w = f - z | 0;
 g = xg(i, d) | 0;
 if (!g) return;
 o = w - y | 0;
 p = (o | 0) > 0;
 q = o + 1 | 0;
 r = b + 8 | 0;
 s = b + 4 | 0;
 t = (q | 0) < 128 ? 128 : q;
 u = (w | 0) != (y | 0);
 v = (w | 0) > 0;
 n = (f | 0) != (z | 0);
 m = n & (h | 0) != 0;
 do {
  if (p) {
   f = c[s >> 2] | 0;
   if (((c[r >> 2] | 0) + q | 0) >= (f | 0)) {
    k = f + t | 0;
    l = yg(k) | 0;
    f = c[b >> 2] | 0;
    if (!f) a[l >> 0] = 0; else {
     h = f;
     c : do if (!((h ^ l) & 3)) {
      if (!(h & 3)) h = l; else {
       h = l;
       do {
        j = a[f >> 0] | 0;
        a[h >> 0] = j;
        if (!(j << 24 >> 24)) break c;
        f = f + 1 | 0;
        h = h + 1 | 0;
       } while ((f & 3 | 0) != 0);
      }
      i = c[f >> 2] | 0;
      if (!((i & -2139062144 ^ -2139062144) & i + -16843009)) while (1) {
       f = f + 4 | 0;
       j = h + 4 | 0;
       c[h >> 2] = i;
       i = c[f >> 2] | 0;
       if ((i & -2139062144 ^ -2139062144) & i + -16843009 | 0) {
        h = j;
        break;
       } else h = j;
      }
      x = 30;
     } else {
      h = l;
      x = 30;
     } while (0);
     if ((x | 0) == 30) {
      x = 0;
      j = a[f >> 0] | 0;
      a[h >> 0] = j;
      if (j << 24 >> 24) do {
       f = f + 1 | 0;
       h = h + 1 | 0;
       j = a[f >> 0] | 0;
       a[h >> 0] = j;
      } while (j << 24 >> 24 != 0);
     }
     zg(c[b >> 2] | 0);
     c[b >> 2] = 0;
    }
    c[b >> 2] = l;
    c[s >> 2] = k;
   }
  }
  f = g + y | 0;
  h = g + w | 0;
  i = (c[b >> 2] | 0) - f + (c[r >> 2] | 0) | 0;
  if (u & (i | 0) > 0) Sg(h | 0, f | 0, i | 0) | 0;
  a[h + i >> 0] = 0;
  c[r >> 2] = (c[r >> 2] | 0) + o;
  if (v) {
   d : do if (!((z ^ g) & 3)) {
    if (m) {
     f = w;
     h = e;
     i = g;
     do {
      l = a[h >> 0] | 0;
      a[i >> 0] = l;
      if (!(l << 24 >> 24)) break d;
      f = f + -1 | 0;
      h = h + 1 | 0;
      i = i + 1 | 0;
      j = (f | 0) != 0;
     } while (j & (h & 3 | 0) != 0);
    } else {
     f = w;
     h = e;
     i = g;
     j = n;
    }
    if (j) {
     if (a[h >> 0] | 0) {
      e : do if (f >>> 0 > 3) {
       j = i;
       while (1) {
        i = c[h >> 2] | 0;
        if ((i & -2139062144 ^ -2139062144) & i + -16843009 | 0) {
         i = j;
         break e;
        }
        c[j >> 2] = i;
        f = f + -4 | 0;
        h = h + 4 | 0;
        i = j + 4 | 0;
        if (f >>> 0 > 3) j = i; else break;
       }
      } while (0);
      x = 48;
     }
    } else f = 0;
   } else {
    h = e;
    i = g;
    f = w;
    x = 48;
   } while (0);
   f : do if ((x | 0) == 48) {
    x = 0;
    if (!f) f = 0; else while (1) {
     l = a[h >> 0] | 0;
     a[i >> 0] = l;
     if (!(l << 24 >> 24)) break f;
     f = f + -1 | 0;
     i = i + 1 | 0;
     if (!f) {
      f = 0;
      break;
     } else h = h + 1 | 0;
    }
   } while (0);
   Xg(i | 0, 0, f | 0) | 0;
  }
  g = xg(g, d) | 0;
 } while ((g | 0) != 0);
 return;
}

function Ne(b, c) {
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

function lf(a) {
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
 fd(a + 32 | 0);
 c[a + 16 >> 2] = 0;
 return;
}

function $f(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 r = b + 12 | 0;
 s = b + 8 | 0;
 k = (c[r >> 2] | 0) - (c[s >> 2] | 0) | 0;
 g = k + d | 0;
 q = b + 4 | 0;
 if ((c[q >> 2] | 0) < (g | 0)) {
  d = yg(g << 2) | 0;
  f = c[b >> 2] | 0;
  if ((k | 0) > 0) {
   h = d;
   i = 0;
   j = f + (c[s >> 2] << 2) | 0;
   while (1) {
    c[h >> 2] = c[j >> 2];
    i = i + 1 | 0;
    if ((i | 0) == (k | 0)) break; else {
     h = h + 4 | 0;
     j = j + 4 | 0;
    }
   }
  }
  if (f | 0) zg(f);
  c[b >> 2] = d;
  c[q >> 2] = g;
  c[s >> 2] = 0;
  c[r >> 2] = k;
 }
 a[b + 24 >> 0] = 1;
 h = b + 28 | 0;
 i = b + 40 | 0;
 j = b + 36 | 0;
 k = (c[i >> 2] | 0) - (c[j >> 2] | 0) | 0;
 l = k + e | 0;
 m = b + 32 | 0;
 if ((c[m >> 2] | 0) < (l | 0)) {
  n = yg(l * 24 | 0) | 0;
  if ((k | 0) > 0) {
   d = n;
   f = 0;
   g = (c[h >> 2] | 0) + ((c[j >> 2] | 0) * 24 | 0) | 0;
   while (1) {
    ue(d, g);
    c[d + 4 >> 2] = c[g + 4 >> 2];
    t = g + 8 | 0;
    o = c[t + 4 >> 2] | 0;
    p = d + 8 | 0;
    c[p >> 2] = c[t >> 2];
    c[p + 4 >> 2] = o;
    c[d + 16 >> 2] = c[g + 16 >> 2];
    c[g >> 2] = 0;
    f = f + 1 | 0;
    if ((f | 0) == (k | 0)) break; else {
     d = d + 24 | 0;
     g = g + 24 | 0;
    }
   }
  }
  d = c[h >> 2] | 0;
  if (d | 0) zg(d);
  c[h >> 2] = n;
  c[m >> 2] = l;
  c[j >> 2] = 0;
  c[i >> 2] = k;
 }
 j = b + 52 | 0;
 k = b + 64 | 0;
 d = c[k >> 2] | 0;
 l = b + 60 | 0;
 f = c[l >> 2] | 0;
 m = d - f | 0;
 n = m + e | 0;
 o = b + 56 | 0;
 g = c[o >> 2] | 0;
 if ((n | 0) > (g | 0)) {
  i = f - d + n >> 1;
  if ((g | 0) != (n | 0)) {
   h = yg(n * 12 | 0) | 0;
   if ((m | 0) > 0) {
    d = h + (i * 12 | 0) | 0;
    f = 0;
    g = (c[j >> 2] | 0) + ((c[l >> 2] | 0) * 12 | 0) | 0;
    while (1) {
     ue(d, g);
     c[d + 4 >> 2] = c[g + 4 >> 2];
     c[d + 8 >> 2] = c[g + 8 >> 2];
     c[g >> 2] = 0;
     f = f + 1 | 0;
     if ((f | 0) == (m | 0)) break; else {
      d = d + 12 | 0;
      g = g + 12 | 0;
     }
    }
   }
   d = c[j >> 2] | 0;
   if (d | 0) zg(d);
   c[j >> 2] = h;
   c[o >> 2] = n;
   c[l >> 2] = i;
   c[k >> 2] = i + m;
  }
 }
 m = b + 80 | 0;
 n = b + 92 | 0;
 f = c[n >> 2] | 0;
 o = b + 88 | 0;
 g = c[o >> 2] | 0;
 p = f - g | 0;
 l = p + e | 0;
 k = b + 84 | 0;
 d = c[k >> 2] | 0;
 if ((l | 0) > (d | 0)) {
  j = g - f + l >> 1;
  if ((d | 0) != (l | 0)) {
   d = yg(l << 4) | 0;
   f = c[m >> 2] | 0;
   if ((p | 0) > 0) {
    g = d + (j << 4) | 0;
    h = 0;
    i = f + (c[o >> 2] << 4) | 0;
    while (1) {
     u = i;
     e = c[u + 4 >> 2] | 0;
     t = g;
     c[t >> 2] = c[u >> 2];
     c[t + 4 >> 2] = e;
     c[g + 8 >> 2] = c[i + 8 >> 2];
     h = h + 1 | 0;
     if ((h | 0) == (p | 0)) break; else {
      g = g + 16 | 0;
      i = i + 16 | 0;
     }
    }
   }
   if (f | 0) zg(f);
   c[m >> 2] = d;
   c[k >> 2] = l;
   c[o >> 2] = j;
   c[n >> 2] = j + p;
  }
 }
 a[b + 112 >> 0] = 1;
 g = c[q >> 2] | 0;
 d = c[r >> 2] | 0;
 if ((g | 0) != (d | 0)) {
  u = d;
  t = u + 1 | 0;
  c[r >> 2] = t;
  t = c[b >> 2] | 0;
  u = t + (u << 2) | 0;
  c[u >> 2] = -3;
  return;
 }
 d = g >> 1;
 f = c[b + 16 >> 2] | 0;
 if ((d | 0) >= (f | 0)) {
  f = c[b + 20 >> 2] | 0;
  f = (d | 0) > (f | 0) ? f : d;
 }
 k = f + g | 0;
 if (!f) {
  u = g;
  t = u + 1 | 0;
  c[r >> 2] = t;
  t = c[b >> 2] | 0;
  u = t + (u << 2) | 0;
  c[u >> 2] = -3;
  return;
 }
 d = g - (c[s >> 2] | 0) | 0;
 f = yg(k << 2) | 0;
 g = c[b >> 2] | 0;
 if ((d | 0) > 0) {
  h = f;
  i = 0;
  j = g + (c[s >> 2] << 2) | 0;
  while (1) {
   c[h >> 2] = c[j >> 2];
   i = i + 1 | 0;
   if ((i | 0) == (d | 0)) break; else {
    h = h + 4 | 0;
    j = j + 4 | 0;
   }
  }
 }
 if (g | 0) zg(g);
 c[b >> 2] = f;
 c[q >> 2] = k;
 c[s >> 2] = 0;
 c[r >> 2] = d;
 u = d;
 t = u + 1 | 0;
 c[r >> 2] = t;
 t = c[b >> 2] | 0;
 u = t + (u << 2) | 0;
 c[u >> 2] = -3;
 return;
}

function le(a) {
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
     me(r, d);
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
      me(o, d);
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
function Me(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 n = d + 4 | 0;
 if ((c[n >> 2] | 0) == (e | 0)) return;
 o = d + 12 | 0;
 p = d + 8 | 0;
 q = (c[o >> 2] | 0) - (c[p >> 2] | 0) | 0;
 r = yg(e * 400 | 0) | 0;
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
   Ne(i + 24 | 0, k + 24 | 0);
   l = i + 92 | 0;
   g = k + 92 | 0;
   c[l >> 2] = c[g >> 2];
   c[l + 4 >> 2] = c[g + 4 >> 2];
   c[l + 8 >> 2] = c[g + 8 >> 2];
   a[l + 12 >> 0] = a[g + 12 >> 0] | 0;
   ue(i + 108 | 0, k + 108 | 0);
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
   Ne(i + 212 | 0, k + 212 | 0);
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
 if (f | 0) zg(f);
 c[d >> 2] = r;
 c[n >> 2] = e;
 c[p >> 2] = 0;
 c[o >> 2] = q;
 return;
}

function nf(f, h, j) {
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
     zg(c[m >> 2] | 0);
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
     zg(c[m >> 2] | 0);
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
  Ua(0, 0, k | 0, l | 0);
 }
 k = f + 240 | 0;
 l = b[k >> 1] | 0;
 if (l & 4) {
  b[k >> 1] = l & -5;
  Fc(3089);
 }
 n = j + 21 | 0;
 if (!(a[n >> 0] & 1)) k = 0; else {
  Gb(+(+g[j >> 2]), +(+g[j + 4 >> 2]), +(+g[j + 8 >> 2]), +(+g[j + 12 >> 2]));
  l = f + 224 | 0;
  k = c[l >> 2] | 0;
  m = e[l + 4 >> 1] | 0;
  if ((k & 2013265920 | 0) == 2013265920 & 0 == 0) k = 16384; else {
   c[l >> 2] = k | 2013265920;
   b[l + 4 >> 1] = m;
   Dc(1, 1, 1, 1);
   k = 16384;
  }
 }
 if (a[n >> 0] & 2) {
  k = k | 256;
  Fb(+(+g[j + 16 >> 2]));
  l = f + 236 | 0;
  m = b[l >> 1] | 0;
  if (!(m & 32)) {
   b[l >> 1] = m | 32;
   Ra(1);
  }
 }
 if (!(a[n >> 0] & 4)) {
  if (!k) {
   i = r;
   return;
  }
 } else {
  k = k | 1024;
  da(d[j + 20 >> 0] | 0 | 0);
  l = f + 236 + 2 | 0;
  m = b[l >> 1] | 0;
  if ((m & 255) != 255) {
   b[l >> 1] = m | 255;
   Ic(255);
  }
 }
 nc(k | 0);
 i = r;
 return;
}

function Vg(a, b, d, e, f) {
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
   return (C = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
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
   return (C = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((Va(i | 0) | 0) >>> 0);
   return (C = n, f) | 0;
  }
  g = (T(i | 0) | 0) - (T(k | 0) | 0) | 0;
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
   return (C = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (C = n, f) | 0;
 } else {
  if (!g) {
   g = (T(i | 0) | 0) - (T(k | 0) | 0) | 0;
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
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (T(h | 0) | 0) + 33 - (T(k | 0) | 0) | 0;
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
   return (C = o, p) | 0;
  } else {
   p = Va(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (C = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = Tg(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Ug(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Ug(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = C;
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
 return (C = o, p) | 0;
}

function Te(b, c) {
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

function Vf(a, d) {
 a = a | 0;
 d = d | 0;
 var f = 0, h = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 64 | 0;
 w = x + 32 | 0;
 n = x + 8 | 0;
 o = x + 48 | 0;
 p = x + 44 | 0;
 f = x;
 h = x + 40 | 0;
 t = c[42836] | 0;
 j = t + 52 | 0;
 cg(a, j, d);
 if ((c[a + 4 >> 2] | 0) != -1) {
  i = x;
  return;
 }
 m = t + 152 | 0;
 k = c[m >> 2] | 0;
 c[m >> 2] = k + 1;
 m = t + 192 | 0;
 s = c[m >> 2] | 0;
 q = b[(c[t + 184 >> 2] | 0) + (s << 1) >> 1] | 0;
 c[m >> 2] = s + 1;
 m = _g(e[t + 156 >> 1] | 0 | 0, 0, 16) | 0;
 k = k | C;
 m = m | q & 65535;
 s = a;
 c[s >> 2] = m;
 c[s + 4 >> 2] = k;
 s = f;
 c[s >> 2] = m;
 c[s + 4 >> 2] = k;
 c[h >> 2] = c[(c[t + 28 >> 2] | 0) + ((c[t + 40 >> 2] | 0) + -1 << 2) >> 2];
 ag(j, d, f, h);
 s = t + 168 | 0;
 q = (c[s >> 2] | 0) + (q & 65535) | 0;
 u = t + 160 | 0;
 r = c[u >> 2] | 0;
 f = r + (q * 144 | 0) | 0;
 c[r + (q * 144 | 0) + 8 >> 2] = 1;
 v = t + 148 | 0;
 c[r + (q * 144 | 0) + 12 >> 2] = c[v >> 2];
 if ((f | 0) != (a | 0)) {
  j = f;
  c[j >> 2] = m;
  c[j + 4 >> 2] = k;
 }
 f = r + (q * 144 | 0) + 16 | 0;
 if ((f | 0) != (d | 0)) {
  c[f >> 2] = 0;
  ue(f, d);
 }
 c[r + (q * 144 | 0) + 20 >> 2] = c[d + 4 >> 2];
 m = r + (q * 144 | 0) + 24 | 0;
 k = d + 8 | 0;
 f = c[k + 4 >> 2] | 0;
 h = m;
 c[h >> 2] = c[k >> 2];
 c[h + 4 >> 2] = f;
 h = r + (q * 144 | 0) + 32 | 0;
 f = c[d + 32 >> 2] | 0;
 do if (!f) {
  f = n + 16 | 0;
  c[f >> 2] = 0;
 } else if ((f | 0) == (d + 16 | 0)) {
  k = n + 16 | 0;
  c[k >> 2] = n;
  Qc[c[(c[f >> 2] | 0) + 12 >> 2] & 127](f, n);
  f = k;
  break;
 } else {
  k = n + 16 | 0;
  c[k >> 2] = Rc[c[(c[f >> 2] | 0) + 8 >> 2] & 127](f) | 0;
  f = k;
  break;
 } while (0);
 Yf(n, h);
 f = c[f >> 2] | 0;
 if ((f | 0) == (n | 0)) Pc[c[(c[n >> 2] | 0) + 16 >> 2] & 127](n); else if (f | 0) Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
 h = r + (q * 144 | 0) + 56 | 0;
 c[h >> 2] = c[d + 40 >> 2];
 l = +(c[m >> 2] | 0);
 k = ~~(+g[r + (q * 144 | 0) + 28 >> 2] * l);
 f = c[r + (q * 144 | 0) + 48 >> 2] | 0;
 if (!f) Xg(t + 210 | 0, 0, k << 1 | 0) | 0; else {
  g[n >> 2] = 1.0 / l;
  c[o >> 2] = t + 210;
  c[p >> 2] = k;
  Vc[c[(c[f >> 2] | 0) + 24 >> 2] & 127](f, n, o, p);
 }
 j = r + (q * 144 | 0) + 72 | 0;
 c[j >> 2] = c[h >> 2];
 h = r + (q * 144 | 0) + 64 | 0;
 bb(1, h | 0);
 Ac(c[j >> 2] | 0, r + (q * 144 | 0) + 76 | 0);
 c[r + (q * 144 | 0) + 68 >> 2] = 0;
 if ((k | 0) > 0) ka(c[h >> 2] | 0, 4353, t + 210 | 0, k << 1 | 0, c[m >> 2] | 0);
 if ((c[j >> 2] | 0) > 0) {
  f = 0;
  do {
   ab(c[r + (q * 144 | 0) + 76 + (f << 2) >> 2] | 0, 4105, c[h >> 2] | 0);
   f = f + 1 | 0;
  } while ((f | 0) < (c[j >> 2] | 0));
 }
 j = c[a >> 2] | 0;
 k = j & 65535;
 h = (c[s >> 2] | 0) + k | 0;
 f = c[u >> 2] | 0;
 u = a;
 a = f + (h * 144 | 0) | 0;
 if ((c[u >> 2] | 0) == (c[a >> 2] | 0) ? (c[u + 4 >> 2] | 0) == (c[a + 4 >> 2] | 0) : 0) {
  c[f + (h * 144 | 0) + 8 >> 2] = 3;
  c[f + (h * 144 | 0) + 12 >> 2] = c[v >> 2];
  i = x;
  return;
 } else {
  c[w >> 2] = j >>> 16;
  c[w + 4 >> 2] = k;
  he(164012, w);
  i = x;
  return;
 }
}

function ee(a) {
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
     b = 151150;
     break;
    }
   case 1:
    {
     b = 151135;
     break;
    }
   case 2:
    {
     b = 151124;
     break;
    }
   case 3:
    {
     b = 151119;
     break;
    }
   case 4:
    {
     b = 151111;
     break;
    }
   case 5:
    {
     b = 151103;
     break;
    }
   case 6:
    {
     b = 151095;
     break;
    }
   case 7:
    {
     b = 151087;
     break;
    }
   default:
    b = 151071;
   }
   c[k >> 2] = b;
   ge(150865, k);
   c[n >> 2] = 7;
   break;
  }
  switch (j | 0) {
  case 0:
   {
    b = 151150;
    break;
   }
  case 1:
   {
    b = 151135;
    break;
   }
  case 2:
   {
    b = 151124;
    break;
   }
  case 3:
   {
    b = 151119;
    break;
   }
  case 4:
   {
    b = 151111;
    break;
   }
  case 5:
   {
    b = 151103;
    break;
   }
  case 6:
   {
    b = 151095;
    break;
   }
  case 7:
   {
    b = 151087;
    break;
   }
  default:
   b = 151071;
  }
  c[l >> 2] = b;
  ge(150933, l);
  b = c[m >> 2] | 0;
  c[n >> 2] = b;
  c[m >> 2] = 9;
  p = 33;
 } while (0);
 if ((p | 0) == 33) if ((b | 0) != 7) {
  ke(c[42817] | 0);
  switch (c[n >> 2] | 0) {
  case 0:
   {
    c[m >> 2] = Rc[c[c[a >> 2] >> 2] & 127](a) | 0;
    break;
   }
  case 1:
   {
    c[m >> 2] = Rc[c[(c[a >> 2] | 0) + 4 >> 2] & 127](a) | 0;
    break;
   }
  case 2:
   {
    c[m >> 2] = Rc[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a) | 0;
    break;
   }
  case 3:
   {
    c[m >> 2] = Rc[c[(c[a >> 2] | 0) + 12 >> 2] & 127](a) | 0;
    break;
   }
  case 4:
   {
    c[m >> 2] = Rc[c[(c[a >> 2] | 0) + 16 >> 2] & 127](a) | 0;
    break;
   }
  case 5:
   {
    c[m >> 2] = Rc[c[(c[a >> 2] | 0) + 20 >> 2] & 127](a) | 0;
    break;
   }
  case 6:
   {
    c[m >> 2] = Rc[c[(c[a >> 2] | 0) + 24 >> 2] & 127](a) | 0;
    c[n >> 2] = 9;
    break;
   }
  case 7:
   {
    b = 151087;
    p = 49;
    break;
   }
  default:
   {
    b = 151071;
    p = 49;
   }
  }
  if ((p | 0) == 49) {
   c[o >> 2] = b;
   he(150978, o);
  }
  ke(c[42818] | 0);
  i = r;
  return;
 }
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 1e8;
 do {
  if ((cb(q | 0, q | 0) | 0) != -1) break;
  if (!0) b = 171348; else b = c[(bh() | 0) + 64 >> 2] | 0;
 } while ((c[b >> 2] | 0) == 4);
 i = r;
 return;
}

function hd(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 16 | 0;
 p = q;
 c[b + 8 >> 2] = 256;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 32 >> 2] = 0;
 l = e + 4 | 0;
 j = c[l >> 2] | 0;
 n = j + -1 | 0;
 m = (j | 0) > 0 ? 0 : n;
 k = c[e + 8 >> 2] | 0;
 o = k + -1 | 0;
 g = (k | 0) > 0 ? 0 : o;
 n = (j | 0) > 28 ? 28 : n;
 o = (k | 0) > 36 ? 36 : o;
 if ((g | 0) > (o | 0) | (m | 0) > (n | 0)) k = 0; else {
  h = 137098;
  while (1) {
   k = m;
   while (1) {
    j = h;
    h = h + 1 | 0;
    j = c[135228 + (d[j >> 0] << 2) >> 2] | 0;
    if ((j | 0) != 74) c[e + 208 + ((R(c[l >> 2] | 0, g) | 0) + k << 2) >> 2] = j;
    if ((k | 0) >= (n | 0)) break; else k = k + 1 | 0;
   }
   if ((g | 0) < (o | 0)) g = g + 1 | 0; else {
    k = 0;
    break;
   }
  }
 }
 do {
  g = k * 28 | 0;
  j = 0;
  do {
   switch (a[137098 + (j + g) >> 0] | 0) {
   case 46:
    {
     h = 1;
     break;
    }
   case 32:
    {
     h = 0;
     break;
    }
   case 45:
    {
     h = 3;
     break;
    }
   default:
    h = 2;
   }
   c[167232 + (((k | 0) < 0 ? 0 : (k | 0) > 35 ? 35 : k) * 112 | 0) + (((j | 0) < 0 ? 0 : (j | 0) > 27 ? 27 : j) << 2) >> 2] = h;
   j = j + 1 | 0;
  } while ((j | 0) != 28);
  k = k + 1 | 0;
 } while ((k | 0) != 36);
 g = 0;
 do {
  c[b + 36 + (g * 88 | 0) >> 2] = g;
  c[b + 36 + (g * 88 | 0) + 4 >> 2] = c[1168 + (g << 2) >> 2];
  m = c[1488 + (g << 2) >> 2] | 0;
  c[b + 36 + (g * 88 | 0) + 8 >> 2] = m;
  c[b + 36 + (g * 88 | 0) + 12 >> 2] = m;
  m = 1248 + (g << 3) | 0;
  o = c[m >> 2] | 0;
  n = o << 3 | 7;
  m = Zg(o | 0, c[m + 4 >> 2] | 0, 29) | 0;
  m = m & -8 | 4;
  o = b + 36 + (g * 88 | 0) + 20 | 0;
  c[o >> 2] = n;
  c[o + 4 >> 2] = m;
  o = b + 36 + (g * 88 | 0) + 52 | 0;
  c[o >> 2] = n;
  c[o + 4 >> 2] = m;
  c[b + 36 + (g * 88 | 0) + 60 >> 2] = (g | 0) == 0 ? 2 : 5;
  c[b + 36 + (g * 88 | 0) + 64 >> 2] = 0;
  c[b + 36 + (g * 88 | 0) + 68 >> 2] = 0;
  c[b + 36 + (g * 88 | 0) + 72 >> 2] = c[1508 + (g << 2) >> 2];
  a[b + 36 + (g * 88 | 0) + 84 >> 0] = 0;
  c[b + 36 + (g * 88 | 0) + 76 >> 2] = 0;
  c[b + 36 + (g * 88 | 0) + 80 >> 2] = 0;
  c[b + 36 + (g * 88 | 0) + 28 >> 2] = (n | 0) / 8 | 0;
  o = c[b + 36 + (g * 88 | 0) + 24 >> 2] | 0;
  c[b + 36 + (g * 88 | 0) + 32 >> 2] = (o | 0) / 8 | 0;
  c[b + 36 + (g * 88 | 0) + 36 >> 2] = 3 - ((n | 0) % 8 | 0);
  c[b + 36 + (g * 88 | 0) + 40 >> 2] = 4 - ((o | 0) % 8 | 0);
  g = g + 1 | 0;
 } while ((g | 0) != 5);
 o = b + 476 | 0;
 c[o >> 2] = 1;
 c[o + 4 >> 2] = 6;
 c[b + 484 >> 2] = 0;
 a[b + 488 >> 0] = 1;
 o = b + 492 | 0;
 c[o >> 2] = 26;
 c[o + 4 >> 2] = 6;
 c[b + 500 >> 2] = 1;
 a[b + 504 >> 0] = 1;
 o = b + 508 | 0;
 c[o >> 2] = 1;
 c[o + 4 >> 2] = 26;
 c[b + 516 >> 2] = 2;
 a[b + 520 >> 0] = 1;
 o = b + 524 | 0;
 c[o >> 2] = 26;
 c[o + 4 >> 2] = 26;
 c[b + 532 >> 2] = 3;
 a[b + 536 >> 0] = 1;
 c[f + 56 >> 2] = 0;
 c[f + 60 >> 2] = -23;
 c[f + 64 >> 2] = 0;
 o = f;
 f = c[o + 4 >> 2] | 0;
 b = p;
 c[b >> 2] = c[o >> 2];
 c[b + 4 >> 2] = f;
 Wf(p);
 i = q;
 return;
}

function Ze(a) {
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
  do if ((Rc[c[(c[h >> 2] | 0) + 12 >> 2] & 127](h) | 0) != 2) {
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
    if ((h | 0) == 1) Pc[c[c[b >> 2] >> 2] & 127](b);
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
    if ((h | 0) == 1) Pc[c[c[b >> 2] >> 2] & 127](b);
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
       if ((b | 0) == 1) Pc[c[c[a >> 2] >> 2] & 127](a);
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
    if ((m | 0) == 1) Pc[c[c[b >> 2] >> 2] & 127](b);
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
       if ((m | 0) == 1) Pc[c[c[a >> 2] >> 2] & 127](a);
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
    if ((m | 0) == 1) Pc[c[c[b >> 2] >> 2] & 127](b);
    c[a >> 2] = 0;
   }
  } while (0);
  if ((d | 0) <= 1) break;
  b = c[l >> 2] | 0;
  d = i;
 }
 return;
}

function me(b, d) {
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
   Pc[c[(c[b >> 2] | 0) + 16 >> 2] & 127](b);
   return;
  }
  if (!b) return;
  Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
  return;
 }
 if ((f + -1 | 0) == (d | 0)) {
  l = g + -1 | 0;
  c[m >> 2] = l;
  m = c[b >> 2] | 0;
  b = c[m + (l * 40 | 0) + 24 >> 2] | 0;
  if ((b | 0) == (m + (l * 40 | 0) + 8 | 0)) {
   Pc[c[(c[b >> 2] | 0) + 16 >> 2] & 127](b);
   return;
  }
  if (!b) return;
  Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
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
   if ((e | 0) == (g | 0)) Pc[c[(c[e >> 2] | 0) + 16 >> 2] & 127](e); else if (e | 0) Pc[c[(c[e >> 2] | 0) + 20 >> 2] & 127](e);
   c[i >> 2] = 0;
   e = j + (f * 40 | 0) + 24 | 0;
   d = c[e >> 2] | 0;
   do if (!d) c[i >> 2] = 0; else if ((d | 0) == (h | 0)) {
    c[i >> 2] = g;
    Qc[c[(c[d >> 2] | 0) + 12 >> 2] & 127](d, g);
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
   Pc[c[(c[b >> 2] | 0) + 16 >> 2] & 127](b);
   return;
  }
  if (!b) return;
  Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
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
   if ((e | 0) == (g | 0)) Pc[c[(c[e >> 2] | 0) + 16 >> 2] & 127](e); else if (e | 0) Pc[c[(c[e >> 2] | 0) + 20 >> 2] & 127](e);
   c[i >> 2] = 0;
   e = d + (k * 40 | 0) + 24 | 0;
   f = c[e >> 2] | 0;
   do if (!f) c[i >> 2] = 0; else if ((f | 0) == (h | 0)) {
    c[i >> 2] = g;
    Qc[c[(c[f >> 2] | 0) + 12 >> 2] & 127](f, g);
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
  Pc[c[(c[b >> 2] | 0) + 16 >> 2] & 127](b);
  return;
 }
 if (!b) return;
 Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
 return;
}

function ve(b, d, e, f) {
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
  h = yg(l) | 0;
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
   zg(c[b >> 2] | 0);
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
 Xg(g | 0, 0, f | 0) | 0;
 o = (c[p >> 2] | 0) + o | 0;
 c[p >> 2] = o;
 a[(c[k >> 2] | 0) + o >> 0] = 0;
 return;
}

function Qe(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = d + 4 | 0;
 if ((c[l >> 2] | 0) == (e | 0)) return;
 m = d + 12 | 0;
 n = d + 8 | 0;
 o = (c[m >> 2] | 0) - (c[n >> 2] | 0) | 0;
 p = yg(e * 776 | 0) | 0;
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
   ue(f + 92 | 0, h + 92 | 0);
   c[f + 96 >> 2] = c[h + 96 >> 2];
   i = h + 104 | 0;
   j = c[i + 4 >> 2] | 0;
   k = f + 104 | 0;
   c[k >> 2] = c[i >> 2];
   c[k + 4 >> 2] = j;
   Re(f + 112 | 0, h + 112 | 0);
   a[f + 696 >> 0] = a[h + 696 >> 0] | 0;
   ue(f + 704 | 0, h + 704 | 0);
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
 if (f | 0) zg(f);
 c[d >> 2] = p;
 c[l >> 2] = e;
 c[n >> 2] = 0;
 c[m >> 2] = o;
 return;
}

function Rf(b) {
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
 Xg(b + 88 | 0, -1, 168) | 0;
 i = b + 256 | 0;
 j = b + 260 | 0;
 c[i >> 2] = 0;
 c[i + 4 >> 2] = 0;
 c[i + 8 >> 2] = 0;
 a[i + 12 >> 0] = 0;
 c[b + 272 >> 2] = -1;
 h = yg(19201) | 0;
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
 zg(c[i >> 2] | 0);
 c[i >> 2] = 0;
 c[i >> 2] = h;
 c[j >> 2] = 19201;
 return;
}

function zf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, h = 0, i = 0, j = 0, k = 0.0, l = 0.0, m = 0, n = 0;
 j = b + 16 | 0;
 a : do if ((c[j >> 2] | 0) <= 1) switch (c[b >> 2] | 0) {
 case 3:
  break a;
 case 0:
  {
   f = a + 168 | 0;
   h = b + 8 | 0;
   if ((c[f >> 2] | 0) > 0) {
    e = h;
    d = a + 24 | 0;
    i = d;
    i = Ug(c[e >> 2] | 0, c[e + 4 >> 2] | 0, c[i >> 2] | 0, c[i + 4 >> 2] | 0) | 0;
    if (!((+(i >>> 0) + 4294967296.0 * +(C | 0)) / 1.0e3 < 750.0)) {
     e = a + 16 | 0;
     if ((c[e >> 2] | 0) != 4) {
      c[e >> 2] = 4;
      Xg(d | 0, 0, 140) | 0;
     }
     c[f >> 2] = 0;
    }
    l = +g[b + 24 >> 2] - +g[a + 40 >> 2];
    k = +g[b + 28 >> 2] - +g[a + 44 >> 2];
    if (!(l * l + k * k < 900.0)) {
     e = a + 16 | 0;
     if ((c[e >> 2] | 0) != 4) {
      c[e >> 2] = 4;
      Xg(d | 0, 0, 140) | 0;
     }
     c[f >> 2] = 0;
    }
   } else d = a + 24 | 0;
   c[a + 16 >> 2] = c[b >> 2];
   i = c[h + 4 >> 2] | 0;
   b = d;
   c[b >> 2] = c[h >> 2];
   c[b + 4 >> 2] = i;
   Rg(a + 32 | 0, j | 0, 132) | 0;
   a = 0;
   return a | 0;
  }
 case 2:
  {
   f = b + 8 | 0;
   e = c[f >> 2] | 0;
   f = c[f + 4 >> 2] | 0;
   h = a + 24 | 0;
   i = h;
   if (!((+((Ug(e | 0, f | 0, c[i >> 2] | 0, c[i + 4 >> 2] | 0) | 0) >>> 0) + 4294967296.0 * +(C | 0)) / 1.0e3 < 250.0)) {
    a = 0;
    return a | 0;
   }
   k = +g[b + 24 >> 2] - +g[a + 40 >> 2];
   l = +g[b + 28 >> 2] - +g[a + 44 >> 2];
   if (!(k * k + l * l < 400.0)) {
    a = 0;
    return a | 0;
   }
   i = a + 168 | 0;
   m = (c[i >> 2] | 0) + 1 | 0;
   c[i >> 2] = m;
   d = a + 16 | 0;
   c[d >> 2] = 2;
   n = h;
   c[n >> 2] = e;
   c[n + 4 >> 2] = f;
   Rg(a + 32 | 0, j | 0, 132) | 0;
   if ((m | 0) != (c[a >> 2] | 0)) {
    n = 0;
    return n | 0;
   }
   c[d >> 2] = 4;
   Xg(h | 0, 0, 140) | 0;
   c[i >> 2] = 0;
   b = b + 24 | 0;
   m = c[b + 4 >> 2] | 0;
   n = a + 4 | 0;
   c[n >> 2] = c[b >> 2];
   c[n + 4 >> 2] = m;
   n = 5;
   return n | 0;
  }
 default:
  {
   n = 0;
   return n | 0;
  }
 } while (0);
 d = a + 16 | 0;
 if ((c[d >> 2] | 0) != 4) {
  c[d >> 2] = 4;
  Xg(a + 24 | 0, 0, 140) | 0;
 }
 c[a + 168 >> 2] = 0;
 n = 0;
 return n | 0;
}

function Sf(b, d, e) {
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
  b = yg(k) | 0;
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
   zg(c[m >> 2] | 0);
   c[m >> 2] = 0;
  }
  c[m >> 2] = b;
  c[l >> 2] = k;
  j = m;
  f = c[o >> 2] | 0;
 }
 h = b + f | 0;
 f = n;
 b = 136808;
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
 b = lg(n, d, e) | 0;
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

function wf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = a + 1352 | 0;
 c[a + 1368 >> 2] = 0;
 c[a + 1372 >> 2] = 0;
 d = c[h >> 2] | 0;
 g = a + 1360 | 0;
 if (!d) b = a + 1364 | 0; else {
  e = c[g >> 2] | 0;
  b = a + 1364 | 0;
  if ((e | 0) < (c[b >> 2] | 0)) {
   while (1) {
    f = c[d + (e << 5) + 24 >> 2] | 0;
    if ((f | 0) == (d + (e << 5) + 8 | 0)) Pc[c[(c[f >> 2] | 0) + 16 >> 2] & 127](f); else if (f | 0) Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
    e = e + 1 | 0;
    if ((e | 0) >= (c[b >> 2] | 0)) break;
    d = c[h >> 2] | 0;
   }
   d = c[h >> 2] | 0;
  }
  zg(d);
 }
 c[h >> 2] = 0;
 c[a + 1356 >> 2] = 0;
 c[g >> 2] = 0;
 c[b >> 2] = 0;
 b = c[a + 704 >> 2] | 0;
 if ((b | 0) == (a + 688 | 0)) Pc[c[(c[b >> 2] | 0) + 16 >> 2] & 127](b); else if (b | 0) Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
 h = a + 660 | 0;
 c[a + 676 >> 2] = 0;
 c[a + 680 >> 2] = 0;
 d = c[h >> 2] | 0;
 g = a + 668 | 0;
 if (!d) b = a + 672 | 0; else {
  e = c[g >> 2] | 0;
  b = a + 672 | 0;
  if ((e | 0) < (c[b >> 2] | 0)) {
   while (1) {
    f = c[d + (e << 5) + 24 >> 2] | 0;
    if ((f | 0) == (d + (e << 5) + 8 | 0)) Pc[c[(c[f >> 2] | 0) + 16 >> 2] & 127](f); else if (f | 0) Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
    e = e + 1 | 0;
    if ((e | 0) >= (c[b >> 2] | 0)) break;
    d = c[h >> 2] | 0;
   }
   d = c[h >> 2] | 0;
  }
  zg(d);
 }
 c[h >> 2] = 0;
 c[a + 664 >> 2] = 0;
 c[g >> 2] = 0;
 c[b >> 2] = 0;
 g = a + 596 | 0;
 c[a + 612 >> 2] = 0;
 c[a + 616 >> 2] = 0;
 b = c[g >> 2] | 0;
 f = a + 604 | 0;
 if (!b) {
  h = a + 608 | 0;
  a = a + 600 | 0;
  c[g >> 2] = 0;
  c[a >> 2] = 0;
  c[f >> 2] = 0;
  c[h >> 2] = 0;
  return;
 }
 d = c[f >> 2] | 0;
 h = a + 608 | 0;
 if ((d | 0) < (c[h >> 2] | 0)) {
  while (1) {
   e = c[b + (d << 5) + 24 >> 2] | 0;
   if ((e | 0) == (b + (d << 5) + 8 | 0)) Pc[c[(c[e >> 2] | 0) + 16 >> 2] & 127](e); else if (e | 0) Pc[c[(c[e >> 2] | 0) + 20 >> 2] & 127](e);
   d = d + 1 | 0;
   if ((d | 0) >= (c[h >> 2] | 0)) break;
   b = c[g >> 2] | 0;
  }
  b = c[g >> 2] | 0;
 }
 zg(b);
 a = a + 600 | 0;
 c[g >> 2] = 0;
 c[a >> 2] = 0;
 c[f >> 2] = 0;
 c[h >> 2] = 0;
 return;
}

function mf(a) {
 a = a | 0;
 var b = 0, d = 0;
 na(34962, 0);
 na(34963, 0);
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

function Re(a, b) {
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

function $e(a, b) {
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

function cg(b, d, e) {
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

function pg(a, b, d) {
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

function qe(b, d) {
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
  Qc[c[(c[g >> 2] | 0) + 12 >> 2] & 127](g, e);
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
  if ((e | 0) == (h | 0)) Pc[c[(c[e >> 2] | 0) + 16 >> 2] & 127](e); else if (e | 0) Pc[c[(c[e >> 2] | 0) + 20 >> 2] & 127](e);
  c[j >> 2] = 0;
  e = k + (g * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   j = c[e >> 2] | 0;
   Qc[c[(c[j >> 2] | 0) + 12 >> 2] & 127](j, h);
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

function Hf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, h = 0, j = 0, k = 0, l = 0.0;
 j = i;
 i = i + 160 | 0;
 h = j;
 c[h >> 2] = 4;
 f = h + 8 | 0;
 k = h + 36 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 c[f + 20 >> 2] = 0;
 a[f + 24 >> 0] = 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = h + 52 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = h + 68 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = h + 84 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = h + 100 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = h + 116 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 k = h + 132 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 a[k + 12 >> 0] = 0;
 switch (b | 0) {
 case 22:
  {
   c[h >> 2] = 0;
   break;
  }
 case 23:
  {
   c[h >> 2] = 2;
   break;
  }
 case 24:
  {
   c[h >> 2] = 1;
   break;
  }
 case 25:
  {
   c[h >> 2] = 3;
   break;
  }
 default:
  {
   k = 0;
   i = j;
   return k | 0;
  }
 }
 l = +lb() * 1.0e3;
 b = +E(l) >= 1.0 ? (l > 0.0 ? ~~+S(+D(l / 4294967296.0), 4294967295.0) >>> 0 : ~~+Q((l - +(~~l >>> 0)) / 4294967296.0) >>> 0) : 0;
 k = f;
 c[k >> 2] = ~~l >>> 0;
 c[k + 4 >> 2] = b;
 k = c[d >> 2] | 0;
 f = h + 16 | 0;
 c[f >> 2] = k;
 if ((k | 0) > 0) {
  b = 0;
  do {
   c[h + 20 + (b << 4) >> 2] = c[d + 20 + (b * 52 | 0) >> 2];
   g[h + 20 + (b << 4) + 4 >> 2] = +(c[d + 20 + (b * 52 | 0) + 44 >> 2] | 0);
   g[h + 20 + (b << 4) + 8 >> 2] = +(c[d + 20 + (b * 52 | 0) + 48 >> 2] | 0);
   a[h + 20 + (b << 4) + 12 >> 0] = (c[d + 20 + (b * 52 | 0) + 28 >> 2] | 0) != 0 & 1;
   b = b + 1 | 0;
  } while ((b | 0) < (c[f >> 2] | 0));
 }
 yf(e, h);
 k = 1;
 i = j;
 return k | 0;
}

function pf(a, b, e) {
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
    Ib(h | 0, +(+g[b >> 2]));
    break c;
   }
  case 1:
   {
    tb(h | 0, +(+g[b >> 2]), +(+g[b + 4 >> 2]));
    break c;
   }
  case 2:
   {
    za(h | 0, +(+g[b >> 2]), +(+g[b + 4 >> 2]), +(+g[b + 8 >> 2]));
    break c;
   }
  case 3:
   {
    j = c[m + 344 + (f * 288 | 0) + 24 + (k * 12 | 0) + 8 >> 2] | 0;
    if ((j | 0) > 1) {
     oc(h | 0, j | 0, b | 0);
     break c;
    } else {
     ya(h | 0, +(+g[b >> 2]), +(+g[b + 4 >> 2]), +(+g[b + 8 >> 2]), +(+g[b + 12 >> 2]));
     break c;
    }
   }
  case 4:
   {
    ga(h | 0, 1, 0, b | 0);
    break c;
   }
  case 5:
   {
    fa(h | 0, 1, 0, b | 0);
    break c;
   }
  case 6:
   {
    ia(h | 0, c[m + 344 + (f * 288 | 0) + 24 + (k * 12 | 0) + 8 >> 2] | 0, 0, b | 0);
    break c;
   }
  case 8:
   {
    Jb(h | 0, c[b >> 2] | 0);
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
  ie(151562, n);
  Wb();
 } else if ((a | 0) == 22) {
  i = o;
  return;
 }
}

function ue(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 e = c[d >> 2] | 0;
 if (!e) {
  c[b >> 2] = 0;
  return;
 }
 i = c[e >> 2] | 0;
 f = c[42821] | 0;
 if (!f) {
  g = yg(24608) | 0;
  Xg(g | 0, 0, 24608) | 0;
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
  c[42821] = g;
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
    g = yg(24608) | 0;
    Xg(g | 0, 0, 24608) | 0;
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
    c[42821] = g;
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
   j = ye(f, e, d) | 0;
   c[b >> 2] = j;
   if (j | 0) return;
   c[b >> 2] = ze(f, e, d) | 0;
   return;
  }
 }
 c[b >> 2] = 0;
 return;
}

function jf(a, b, d, e) {
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
  ue(f, b);
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
   ue(i, d + 16 + (f * 12 | 0) | 0);
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

function fg(a, b, d) {
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
  if (!0) {
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = k;
   c[n + 8 >> 2] = f;
   b = rb(146, n | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!0) e = 171348; else e = c[(bh() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
  } else {
   Fa(105, a | 0);
   c[m >> 2] = c[j >> 2];
   c[m + 4 >> 2] = k;
   c[m + 8 >> 2] = f;
   b = rb(146, m | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!0) e = 171348; else e = c[(bh() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
   Ka(0);
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

function Eg(d, e, f) {
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
  c[s >> 2] = 1032;
  c[s + 4 >> 2] = e;
  c[s + 8 >> 2] = 1064;
  e = s + 12 | 0;
  h = s + 16 | 0;
  j = s + 20 | 0;
  k = s + 24 | 0;
  l = s + 28 | 0;
  m = s + 32 | 0;
  n = s + 40 | 0;
  o = (p | 0) == 1032;
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
   Fg(1032, s, g, g, 1, 0);
   if ((c[k >> 2] | 0) != 1) t = 10;
  } else {
   Oc[c[(c[p >> 2] | 0) + 24 >> 2] & 127](p, s, g, 1, 0);
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
   Vc[c[(c[g >> 2] | 0) + 28 >> 2] & 127](g, s, c[f >> 2] | 0, 1);
   if ((c[s + 24 >> 2] | 0) == 1) {
    c[f >> 2] = c[s + 16 >> 2];
    g = 1;
   } else g = 0;
  }
 } while (0);
 i = u;
 return g | 0;
}

function pe(b, d) {
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
  Qc[c[(c[g >> 2] | 0) + 12 >> 2] & 127](g, e);
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
  if ((e | 0) == (h | 0)) Pc[c[(c[e >> 2] | 0) + 16 >> 2] & 127](e); else if (e | 0) Pc[c[(c[e >> 2] | 0) + 20 >> 2] & 127](e);
  c[j >> 2] = 0;
  e = g + (l * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   Qc[c[(c[f >> 2] | 0) + 12 >> 2] & 127](f, h);
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

function ne(b) {
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
   Qc[c[(c[e >> 2] | 0) + 12 >> 2] & 127](e, h);
   break;
  } else {
   c[j >> 2] = Rc[c[(c[e >> 2] | 0) + 8 >> 2] & 127](e) | 0;
   break;
  } while (0);
  a[k >> 0] = a[b >> 0] | 0;
  oe(g, l);
  b = c[j >> 2] | 0;
  if ((b | 0) == (h | 0)) Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h); else if (b | 0) Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
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
  if ((f | 0) == (b + (e * 40 | 0) + 8 | 0)) Pc[c[(c[f >> 2] | 0) + 16 >> 2] & 127](f); else if (f | 0) Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
  e = e + 1 | 0;
  if ((e | 0) >= (c[d >> 2] | 0)) break;
  b = c[n >> 2] | 0;
 }
 o = c[o >> 2] | 0;
 c[d >> 2] = o;
 i = p;
 return;
}

function Ff(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0.0, h = 0.0, j = 0, k = 0, l = 0, m = 0.0, n = 0, o = 0;
 l = i;
 i = i + 32 | 0;
 k = l;
 if (!(a[e + 2132 >> 0] | 0)) {
  h = +(c[d + 60 >> 2] | 0);
  f = +(c[d + 64 >> 2] | 0);
  b = e + 636 | 0;
  j = e + 628 | 0;
  d = e + 632 | 0;
  m = f - +g[d >> 2];
  g[b >> 2] = h - +g[j >> 2];
  g[e + 640 >> 2] = m;
  g[j >> 2] = h;
  g[d >> 2] = f;
  d = c[e + 672 >> 2] | 0;
  j = c[e + 668 >> 2] | 0;
  if ((d | 0) != (j | 0)) {
   c[k >> 2] = 0;
   o = b;
   n = c[o + 4 >> 2] | 0;
   b = k + 4 | 0;
   c[b >> 2] = c[o >> 2];
   c[b + 4 >> 2] = n;
   g[k + 12 >> 2] = h;
   g[k + 16 >> 2] = f;
   g[k + 20 >> 2] = 0.0;
   g[k + 24 >> 2] = 0.0;
   b = c[e + 660 >> 2] | 0;
   if (b | 0) {
    d = b + (d << 5) | 0;
    b = b + (j << 5) | 0;
    do {
     o = c[b + 24 >> 2] | 0;
     Qc[c[(c[o >> 2] | 0) + 24 >> 2] & 127](o, k);
     b = b + 32 | 0;
    } while ((b | 0) != (d | 0));
   }
  }
  i = l;
  return 1;
 } else {
  h = +(c[d + 44 >> 2] | 0);
  f = +(c[d + 48 >> 2] | 0);
  g[e + 636 >> 2] = h;
  g[e + 640 >> 2] = f;
  d = c[e + 672 >> 2] | 0;
  j = c[e + 668 >> 2] | 0;
  if ((d | 0) != (j | 0)) {
   c[k >> 2] = 0;
   g[k + 4 >> 2] = h;
   g[k + 8 >> 2] = f;
   n = e + 628 | 0;
   o = c[n + 4 >> 2] | 0;
   b = k + 12 | 0;
   c[b >> 2] = c[n >> 2];
   c[b + 4 >> 2] = o;
   g[k + 20 >> 2] = 0.0;
   g[k + 24 >> 2] = 0.0;
   b = c[e + 660 >> 2] | 0;
   if (b | 0) {
    d = b + (d << 5) | 0;
    b = b + (j << 5) | 0;
    do {
     o = c[b + 24 >> 2] | 0;
     Qc[c[(c[o >> 2] | 0) + 24 >> 2] & 127](o, k);
     b = b + 32 | 0;
    } while ((b | 0) != (d | 0));
   }
  }
  i = l;
  return 1;
 }
 return 0;
}

function Af(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 b = c[d + 156 >> 2] | 0;
 if (b >>> 0 >= 256) {
  i = k;
  return 0;
 }
 h = c[e + 2136 + (b << 2) >> 2] | 0;
 if (!h) {
  i = k;
  return 0;
 }
 if (!(c[d + 84 >> 2] | 0)) {
  b = h >>> 5;
  g = e + 4 + (b << 2) | 0;
  d = 1 << (h & 31);
  c[g >> 2] = c[g >> 2] | d;
  b = e + 36 + (b << 2) | 0;
  c[b >> 2] = c[b >> 2] | d;
  b = c[e + 608 >> 2] | 0;
  d = c[e + 604 >> 2] | 0;
  if ((b | 0) != (d | 0)) {
   c[j >> 2] = 0;
   c[j + 4 >> 2] = h;
   c[j + 8 >> 2] = 0;
   f = c[e + 596 >> 2] | 0;
   if (f | 0) {
    g = f + (b << 5) | 0;
    b = f + (d << 5) | 0;
    do {
     f = c[b + 24 >> 2] | 0;
     Qc[c[(c[f >> 2] | 0) + 24 >> 2] & 127](f, j);
     b = b + 32 | 0;
    } while ((b | 0) != (g | 0));
   }
  }
  j = e + 588 | 0;
  j = a[j >> 0] | 0;
  e = h + -52 | 0;
  e = e >>> 0 < 3;
  j = j ^ 1;
  j = j & 255;
  e = e & 1;
  e = j | e;
  i = k;
  return e | 0;
 } else {
  b = e + 52 + (h >>> 5 << 2) | 0;
  c[b >> 2] = c[b >> 2] | 1 << (h & 31);
  b = c[e + 608 >> 2] | 0;
  d = c[e + 604 >> 2] | 0;
  if ((b | 0) != (d | 0)) {
   c[j >> 2] = 2;
   c[j + 4 >> 2] = h;
   c[j + 8 >> 2] = 0;
   f = c[e + 596 >> 2] | 0;
   if (f | 0) {
    g = f + (b << 5) | 0;
    b = f + (d << 5) | 0;
    do {
     f = c[b + 24 >> 2] | 0;
     Qc[c[(c[f >> 2] | 0) + 24 >> 2] & 127](f, j);
     b = b + 32 | 0;
    } while ((b | 0) != (g | 0));
   }
  }
  j = e + 588 | 0;
  j = a[j >> 0] | 0;
  e = h + -52 | 0;
  e = e >>> 0 < 3;
  j = j ^ 1;
  j = j & 255;
  e = e & 1;
  e = j | e;
  i = k;
  return e | 0;
 }
 return 0;
}

function rf(a) {
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
   ie(151925, o);
   Wb();
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
   ie(151925, g);
   Wb();
  }
 }
 if ((c[a + 24 >> 2] | 0) == 1) {
  f = d | 2;
  if ((f | 0) == 9986) d = 9728; else d = (f | 0) == 9987 ? 9729 : d;
 }
 Gc(3553, 10241, d | 0);
 Gc(3553, 10240, h | 0);
 if ((c[a + 4 >> 2] | 0) == 2) {
  Gc(3553, 10242, 33071);
  Gc(3553, 10243, 33071);
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
   ie(151971, m);
   Wb();
  }
 }
 Gc(3553, 10242, j | 0);
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
   ie(151971, n);
   Wb();
  }
 }
 Gc(3553, 10243, k | 0);
 i = o;
 return;
}

function ff(b) {
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
 a : do if (!0) {
  d = 151232;
  f = 4;
 } else {
  e = 151232;
  d = 151232;
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
 d = d - 151232 | 0;
 if ((d | 0) > 0) {
  f = yg(d + 9 | 0) | 0;
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
  Rg(f | 0, 151232, d | 0) | 0;
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

function je(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 60 | 0;
 c[a + 76 >> 2] = 0;
 c[a + 80 >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d | 0) zg(d);
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
    if ((f | 0) == (d + (e * 40 | 0) + 8 | 0)) Pc[c[(c[f >> 2] | 0) + 16 >> 2] & 127](f); else if (f | 0) Pc[c[(c[f >> 2] | 0) + 20 >> 2] & 127](f);
    e = e + 1 | 0;
    if ((e | 0) >= (c[b >> 2] | 0)) break;
    d = c[h >> 2] | 0;
   }
   d = c[h >> 2] | 0;
  }
  zg(d);
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
   if ((e | 0) == (b + (d * 40 | 0) + 8 | 0)) Pc[c[(c[e >> 2] | 0) + 16 >> 2] & 127](e); else if (e | 0) Pc[c[(c[e >> 2] | 0) + 20 >> 2] & 127](e);
   d = d + 1 | 0;
   if ((d | 0) >= (c[h >> 2] | 0)) break;
   b = c[g >> 2] | 0;
  }
  b = c[g >> 2] | 0;
 }
 zg(b);
 a = a + 8 | 0;
 c[g >> 2] = 0;
 c[a >> 2] = 0;
 c[f >> 2] = 0;
 c[h >> 2] = 0;
 return;
}

function ye(b, d, e) {
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

function Zf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 e = c[f + 4 >> 2] | 0;
 d = a;
 c[d >> 2] = c[f >> 2];
 c[d + 4 >> 2] = e;
 d = b + 8 | 0;
 e = c[d + 4 >> 2] | 0;
 f = a + 8 | 0;
 c[f >> 2] = c[d >> 2];
 c[f + 4 >> 2] = e;
 ue(a + 16 | 0, b + 16 | 0);
 c[a + 20 >> 2] = c[b + 20 >> 2];
 f = b + 24 | 0;
 e = c[f + 4 >> 2] | 0;
 d = a + 24 | 0;
 c[d >> 2] = c[f >> 2];
 c[d + 4 >> 2] = e;
 d = a + 32 | 0;
 e = b + 48 | 0;
 f = c[e >> 2] | 0;
 do if (!f) c[a + 48 >> 2] = 0; else if ((f | 0) == (b + 32 | 0)) {
  c[a + 48 >> 2] = d;
  f = c[e >> 2] | 0;
  Qc[c[(c[f >> 2] | 0) + 12 >> 2] & 127](f, d);
  break;
 } else {
  c[a + 48 >> 2] = Rc[c[(c[f >> 2] | 0) + 8 >> 2] & 127](f) | 0;
  break;
 } while (0);
 c[a + 56 >> 2] = c[b + 56 >> 2];
 f = a + 64 | 0;
 e = b + 64 | 0;
 c[f >> 2] = c[e >> 2];
 c[f + 4 >> 2] = c[e + 4 >> 2];
 c[f + 8 >> 2] = c[e + 8 >> 2];
 c[a + 76 >> 2] = c[b + 76 >> 2];
 c[a + 80 >> 2] = c[b + 80 >> 2];
 c[a + 84 >> 2] = c[b + 84 >> 2];
 c[a + 88 >> 2] = c[b + 88 >> 2];
 c[a + 92 >> 2] = c[b + 92 >> 2];
 c[a + 96 >> 2] = c[b + 96 >> 2];
 c[a + 100 >> 2] = c[b + 100 >> 2];
 c[a + 104 >> 2] = c[b + 104 >> 2];
 c[a + 108 >> 2] = c[b + 108 >> 2];
 c[a + 112 >> 2] = c[b + 112 >> 2];
 c[a + 116 >> 2] = c[b + 116 >> 2];
 c[a + 120 >> 2] = c[b + 120 >> 2];
 c[a + 124 >> 2] = c[b + 124 >> 2];
 c[a + 128 >> 2] = c[b + 128 >> 2];
 c[a + 132 >> 2] = c[b + 132 >> 2];
 c[a + 136 >> 2] = c[b + 136 >> 2];
 return;
}

function Md(d, e, f, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0, n = 0.0, o = 0;
 n = +g[e >> 2];
 m = c[f >> 2] | 0;
 d = c[h >> 2] | 0;
 if ((d | 0) > 0) {
  f = 0;
  l = 0.0;
  k = 0.0;
 } else return;
 while (1) {
  e = l < .20000000298023224;
  if (l >= 0.0 & e) if (l < 0.0) {
   i = 440.0;
   o = 10;
  } else if (l > .20000000298023224) {
   i = 900.0;
   o = 10;
  } else {
   i = l / .20000000298023224 * 460.0 + 440.0;
   o = 10;
  } else if (l >= .20000000298023224 & l < .4000000059604645) if (e) {
   i = 900.0;
   o = 10;
  } else if (l > .4000000059604645) {
   i = 440.0;
   o = 10;
  } else {
   i = 900.0 - (l + -.20000000298023224) / .20000000298023224 * 460.0;
   o = 10;
  } else j = 0.0;
  if ((o | 0) == 10) {
   o = 0;
   j = +(a[164544 + ~~(k * 32.0) >> 0] | 0) * .125 + -1.0;
   i = k + n * i;
   if (!(i >= 1.0)) k = i; else k = +vg(i);
  }
  if (l < 0.0) i = 0.0; else if (l > .009999999776482582) i = 1.0; else i = l / .009999999776482582;
  j = j * i;
  if (l < .38999998569488525) i = 1.0; else if (l > .4000000059604645) i = 0.0; else i = 1.0 - (l + -.38999998569488525) / .010000020265579224;
  h = ~~(j * i * .30000001192092896 * 32768.0);
  b[m + (f << 1) >> 1] = (h | 0) < -32768 ? -32768 : ((h | 0) > 32767 ? 32767 : h) & 65535;
  f = f + 1 | 0;
  if ((f | 0) == (d | 0)) break; else l = n + l;
 }
 return;
}

function xf(b) {
 b = b | 0;
 var e = 0;
 if (a[b >> 0] | 0) {
  e = b + 4 | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = 0;
  e = b + 16 | 0;
  c[e >> 2] = c[e >> 2] & -33554432;
  e = b + 20 | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = 0;
  e = b + 32 | 0;
  c[e >> 2] = c[e >> 2] & -33554432;
  e = b + 52 | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = 0;
  e = b + 64 | 0;
  c[e >> 2] = c[e >> 2] & -33554432;
  c[b + 72 >> 2] = 0;
  c[b + 68 >> 2] = 0;
 }
 if (a[b + 624 >> 0] | 0) {
  e = b + 652 | 0;
  a[e >> 0] = d[e >> 0] & 252;
  e = b + 653 | 0;
  a[e >> 0] = d[e >> 0] & 252;
  e = b + 654 | 0;
  a[e >> 0] = d[e >> 0] & 252;
  e = b + 636 | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = 0;
  c[e + 12 >> 2] = 0;
 }
 if (a[b + 1288 >> 0] | 0) {
  a[b + 1289 >> 0] = 0;
  a[b + 1290 >> 0] = 0;
  a[b + 1291 >> 0] = 0;
  a[b + 1293 >> 0] = 0;
  a[b + 1294 >> 0] = 0;
  a[b + 1296 >> 0] = 0;
  e = b + 1316 | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = 0;
  c[e + 12 >> 2] = 0;
 }
 if (a[b + 712 >> 0] | 0) {
  c[b + 716 >> 2] = 0;
  c[b + 720 >> 2] = 0;
 }
 if (a[b + 856 >> 0] | 0) {
  c[b + 860 >> 2] = 0;
  c[b + 864 >> 2] = 0;
 }
 if (a[b + 1e3 >> 0] | 0) {
  c[b + 1004 >> 2] = 0;
  c[b + 1008 >> 2] = 0;
 }
 if (!(a[b + 1144 >> 0] | 0)) return;
 c[b + 1148 >> 2] = 0;
 c[b + 1152 >> 2] = 0;
 return;
}

function Hg(b, d, e, f, g) {
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
   Oc[c[(c[j >> 2] | 0) + 24 >> 2] & 127](j, d, e, f, g);
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
    Tc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b, d, e, e, 1, g);
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

function re(b, d) {
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
  Qc[c[(c[b >> 2] | 0) + 12 >> 2] & 127](b, j);
  e = f;
  b = c[f >> 2] | 0;
  break;
 } else {
  b = Rc[c[(c[b >> 2] | 0) + 8 >> 2] & 127](b) | 0;
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
  Qc[c[(c[j >> 2] | 0) + 12 >> 2] & 127](j, f);
  break;
 } else {
  m = h + 24 | 0;
  c[m >> 2] = Rc[c[(c[b >> 2] | 0) + 8 >> 2] & 127](b) | 0;
  b = m;
  break;
 } while (0);
 a[h + 32 >> 0] = a[d >> 0] | 0;
 oe(g, h);
 b = c[b >> 2] | 0;
 if ((b | 0) == (f | 0)) Pc[c[(c[f >> 2] | 0) + 16 >> 2] & 127](f); else if (b | 0) Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
 b = c[e >> 2] | 0;
 if ((b | 0) == (j | 0)) {
  Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j);
  i = l;
  return k | 0;
 }
 if (!b) {
  i = l;
  return k | 0;
 }
 Pc[c[(c[b >> 2] | 0) + 20 >> 2] & 127](b);
 i = l;
 return k | 0;
}

function of(a, d, e) {
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
  Kc(e | 0, c[136512 + (m << 2) >> 2] | 0, g | 0, f | 0);
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
 if ((p | 0) == 8) Za(e | 0, c[136544 + (g << 2) >> 2] | 0, c[136544 + (i << 2) >> 2] | 0, c[136544 + (f << 2) >> 2] | 0);
 a = b[o >> 1] & 255;
 if (a << 16 >> 16 == (b[d + 4 + 2 >> 1] & 255)) return;
 Eb(e | 0, a & 65535 | 0);
 return;
}

function He(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 64 | 0;
 h = j;
 g = c[42822] | 0;
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
    Qc[c[(c[g >> 2] | 0) + 24 >> 2] & 127](g, h);
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
  zg(c[e >> 2] | 0);
  c[e >> 2] = 0;
  c[f >> 2] = 0;
 }
 c[e >> 2] = 0;
 c[f >> 2] = 0;
 i = j;
 return;
}

function _f(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 80 | 0;
 c[a + 96 >> 2] = 0;
 c[a + 100 >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d | 0) zg(d);
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[a + 68 >> 2] = 0;
 c[a + 72 >> 2] = 0;
 h = a + 52 | 0;
 f = c[h >> 2] | 0;
 g = a + 60 | 0;
 if (!f) b = a + 64 | 0; else {
  d = c[g >> 2] | 0;
  b = a + 64 | 0;
  e = c[b >> 2] | 0;
  if ((d | 0) < (e | 0)) do {
   c[f + (d * 12 | 0) >> 2] = 0;
   d = d + 1 | 0;
  } while ((d | 0) != (e | 0));
  zg(f);
 }
 c[h >> 2] = 0;
 c[a + 56 >> 2] = 0;
 c[g >> 2] = 0;
 c[b >> 2] = 0;
 c[a + 44 >> 2] = 0;
 c[a + 48 >> 2] = 0;
 h = a + 28 | 0;
 e = c[h >> 2] | 0;
 g = a + 36 | 0;
 if (!e) b = a + 40 | 0; else {
  d = c[g >> 2] | 0;
  b = a + 40 | 0;
  f = c[b >> 2] | 0;
  if ((d | 0) < (f | 0)) do {
   c[e + (d * 24 | 0) >> 2] = 0;
   d = d + 1 | 0;
  } while ((d | 0) != (f | 0));
  zg(e);
 }
 c[h >> 2] = 0;
 c[a + 32 >> 2] = 0;
 c[g >> 2] = 0;
 c[b >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 b = c[a >> 2] | 0;
 if (!b) {
  c[a >> 2] = 0;
  c[a + 4 >> 2] = 0;
  c[a + 8 >> 2] = 0;
  c[a + 12 >> 2] = 0;
  return;
 }
 zg(b);
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 return;
}

function gd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 if (!b) {
  d = d ^ 1;
  h = a + 40 | 0;
  b = a + 36 | 0;
  g = c[a + 28 >> 2] | 0;
  f = c[a + 32 >> 2] | 0;
  e = c[a + 60 >> 2] | 0;
 } else {
  k = (b + -3 | 0) >>> 0 > 1;
  i = a + 36 | 0;
  h = a + 40 | 0;
  g = c[a + 28 >> 2] | 0;
  j = (c[1208 + (b << 3) >> 2] | 0) + g | 0;
  f = c[a + 32 >> 2] | 0;
  l = f + (c[1208 + (b << 3) + 4 >> 2] | 0) | 0;
  e = c[a + 60 >> 2] | 0;
  j = c[167232 + (((l | 0) < 0 ? 0 : (l | 0) > 35 ? 35 : l) * 112 | 0) + (((j | 0) < 0 ? 0 : (j | 0) > 27 ? 27 : j) << 2) >> 2] | 0;
  d = d ^ 1;
  if ((c[(k ? h : i) >> 2] | 0) != 0 & d | ((c[(k ? i : h) >> 2] | 0) == 0 ? ((e | 2 | 0) == 6 ? (j | 0) == 2 : (j | 1 | 0) == 3) : 0)) b = i; else return b | 0;
 }
 l = c[a + 8 >> 2] | 0;
 j = (l + -3 | 0) >>> 0 > 1;
 k = (c[1208 + (l << 3) >> 2] | 0) + g | 0;
 a = f + (c[1208 + (l << 3) + 4 >> 2] | 0) | 0;
 k = c[167232 + (((a | 0) < 0 ? 0 : (a | 0) > 35 ? 35 : a) * 112 | 0) + (((k | 0) < 0 ? 0 : (k | 0) > 27 ? 27 : k) << 2) >> 2] | 0;
 return ((c[(j ? h : b) >> 2] | 0) != 0 & d | ((c[(j ? b : h) >> 2] | 0) == 0 ? ((e | 2 | 0) == 6 ? (k | 0) == 2 : (k | 1 | 0) == 3) : 0) ? 0 : l) | 0;
}

function te(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if (d | 0) {
  e = a[d >> 0] | 0;
  if (e << 24 >> 24) {
   f = c[42821] | 0;
   if (!f) {
    g = yg(24608) | 0;
    Xg(g | 0, 0, 24608) | 0;
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
    c[42821] = g;
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
   i = ye(f, e, d) | 0;
   c[b >> 2] = i;
   if (i | 0) return;
   c[b >> 2] = ze(f, e, d) | 0;
   return;
  }
 }
 c[b >> 2] = 0;
 return;
}

function Oe(a) {
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
 e = yg(j << 1) | 0;
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
 if (f | 0) zg(f);
 c[a >> 2] = e;
 c[k >> 2] = j;
 c[m >> 2] = 0;
 c[l >> 2] = d;
 return;
}

function Yf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 d = a + 16 | 0;
 e = c[d >> 2] | 0;
 f = e;
 g = b + 16 | 0;
 h = c[g >> 2] | 0;
 j = (h | 0) == (b | 0);
 if ((e | 0) == (a | 0)) if (j) {
  Qc[c[(c[e >> 2] | 0) + 12 >> 2] & 127](e, k);
  j = c[d >> 2] | 0;
  Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j);
  c[d >> 2] = 0;
  j = c[g >> 2] | 0;
  Qc[c[(c[j >> 2] | 0) + 12 >> 2] & 127](j, e);
  j = c[g >> 2] | 0;
  Pc[c[(c[j >> 2] | 0) + 16 >> 2] & 127](j);
  c[g >> 2] = 0;
  c[d >> 2] = a;
  Qc[c[(c[k >> 2] | 0) + 12 >> 2] & 127](k, h);
  Pc[c[(c[k >> 2] | 0) + 16 >> 2] & 127](k);
  c[g >> 2] = b;
  i = l;
  return;
 } else {
  Qc[c[(c[e >> 2] | 0) + 12 >> 2] & 127](e, b);
  a = c[d >> 2] | 0;
  Pc[c[(c[a >> 2] | 0) + 16 >> 2] & 127](a);
  c[d >> 2] = c[g >> 2];
  c[g >> 2] = b;
  i = l;
  return;
 } else if (j) {
  Qc[c[(c[b >> 2] | 0) + 12 >> 2] & 127](h, a);
  k = c[g >> 2] | 0;
  Pc[c[(c[k >> 2] | 0) + 16 >> 2] & 127](k);
  c[g >> 2] = c[d >> 2];
  c[d >> 2] = a;
  i = l;
  return;
 } else {
  c[d >> 2] = h;
  c[g >> 2] = f;
  i = l;
  return;
 }
}

function vg(a) {
 a = +a;
 var b = 0, d = 0, e = 0, f = 0, h = 0;
 e = (g[k >> 2] = a, c[k >> 2] | 0);
 b = e >>> 23 & 255;
 h = e & -2147483648;
 a : do if ((b | 0) == 255) a = a / a; else {
  d = e << 1;
  if (d >>> 0 <= 2130706432) return +((d | 0) == 2130706432 ? a * 0.0 : a);
  if (!b) {
   b = e << 9;
   if ((b | 0) > -1) {
    d = 0;
    do {
     d = d + -1 | 0;
     b = b << 1;
    } while ((b | 0) > -1);
   } else d = 0;
   b = d;
   e = e << 1 - d;
  } else e = e & 8388607 | 8388608;
  d = e + -8388608 | 0;
  f = (d | 0) > -1;
  b : do if ((b | 0) > 127) {
   while (1) {
    if (f) {
     if ((e | 0) == 8388608) break;
    } else d = e;
    e = d << 1;
    b = b + -1 | 0;
    d = e + -8388608 | 0;
    f = (d | 0) > -1;
    if ((b | 0) <= 127) break b;
   }
   a = a * 0.0;
   break a;
  } while (0);
  if (f) {
   if ((e | 0) == 8388608) {
    a = a * 0.0;
    break;
   }
  } else d = e;
  if (d >>> 0 < 8388608) do {
   d = d << 1;
   b = b + -1 | 0;
  } while (d >>> 0 < 8388608);
  if ((b | 0) > 0) b = d + -8388608 | b << 23; else b = d >>> (1 - b | 0);
  a = (c[k >> 2] = b | h, +g[k >> 2]);
 } while (0);
 return +a;
}

function Le(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 f = l + 4 | 0;
 ue(f, d);
 g = f + 4 | 0;
 a[g >> 0] = 1;
 d = f + 8 | 0;
 c[d >> 2] = 1;
 j = b + 8 | 0;
 h = c[j >> 2] | 0;
 e = b + 16 + (h * 12 | 0) | 0;
 if ((e | 0) == (f | 0)) e = 1; else {
  c[e >> 2] = 0;
  ue(e, f);
  e = c[d >> 2] | 0;
 }
 f = g;
 g = c[f >> 2] | 0;
 f = c[f + 4 >> 2] | 0;
 d = b + 16 + (h * 12 | 0) + 4 | 0;
 c[d >> 2] = g;
 c[d + 4 >> 2] = f;
 d = b + 12 | 0;
 c[b + 208 + (c[j >> 2] << 2) >> 2] = c[d >> 2];
 do switch (g & 255 | 0) {
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
   ie(151197, l);
   Wb();
  }
 } while (0);
 c[d >> 2] = (c[d >> 2] | 0) + k;
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 i = l;
 return;
}

function lg(b, d, e) {
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
 if ((mg(0, d, n, p, q) | 0) < 0) e = -1; else {
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
   e = mg(b, d, n, p, q) | 0;
   if (g) {
    Nc[c[b + 36 >> 2] & 127](b, 0, 0) | 0;
    e = (c[j >> 2] | 0) == 0 ? -1 : e;
    c[f >> 2] = g;
    c[l >> 2] = 0;
    c[k >> 2] = 0;
    c[h >> 2] = 0;
    c[j >> 2] = 0;
   }
  } else e = mg(b, d, n, p, q) | 0;
  q = c[b >> 2] | 0;
  c[b >> 2] = q | m;
  e = (q & 32 | 0) == 0 ? e : -1;
 }
 i = r;
 return e | 0;
}

function bg(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 g = a + 12 | 0;
 d = c[g >> 2] | 0;
 f = c[a >> 2] | 0;
 h = d + -1 | 0;
 ue(f + (d * 12 | 0) | 0, f + (h * 12 | 0) | 0);
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
  ue(i, e + (d * 12 | 0) | 0);
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

function jg(b, d, e) {
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
   f = R(h, 16843009) | 0;
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

function Ef(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 32 | 0;
 k = l;
 e = b[f + 40 >> 1] | 0;
 if ((e & 65535) > 2) {
  i = l;
  return 1;
 }
 e = e & 65535;
 f = g + 624 + 28 + e | 0;
 a[f >> 0] = (d[f >> 0] | 0) & 249 | 2;
 c[k >> 2] = 2;
 f = k + 4 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 c[f + 20 >> 2] = 0;
 c[k + 28 >> 2] = e;
 e = c[g + 672 >> 2] | 0;
 f = c[g + 668 >> 2] | 0;
 if ((e | 0) != (f | 0)) {
  h = c[g + 660 >> 2] | 0;
  if (h | 0) {
   j = h + (e << 5) | 0;
   e = h + (f << 5) | 0;
   do {
    h = c[e + 24 >> 2] | 0;
    Qc[c[(c[h >> 2] | 0) + 24 >> 2] & 127](h, k);
    e = e + 32 | 0;
   } while ((e | 0) != (j | 0));
  }
 }
 e = c[g + 704 >> 2] | 0;
 if (!e) m = 10; else if ((Uc[c[(c[e >> 2] | 0) + 24 >> 2] & 0](e, k) | 0) == 1) {
  ac(0, 0) | 0;
  e = 1;
 } else m = 10;
 if ((m | 0) == 10) {
  Tb() | 0;
  e = 0;
 }
 a[g + 2132 >> 0] = e;
 i = l;
 return 1;
}

function Df(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 32 | 0;
 k = l;
 e = b[f + 40 >> 1] | 0;
 if ((e & 65535) > 2) {
  i = l;
  return 1;
 }
 e = e & 65535;
 f = g + 624 + 28 + e | 0;
 a[f >> 0] = d[f >> 0] | 0 | 5;
 c[k >> 2] = 1;
 f = k + 4 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[f + 16 >> 2] = 0;
 c[f + 20 >> 2] = 0;
 c[k + 28 >> 2] = e;
 e = c[g + 672 >> 2] | 0;
 f = c[g + 668 >> 2] | 0;
 if ((e | 0) != (f | 0)) {
  h = c[g + 660 >> 2] | 0;
  if (h | 0) {
   j = h + (e << 5) | 0;
   e = h + (f << 5) | 0;
   do {
    h = c[e + 24 >> 2] | 0;
    Qc[c[(c[h >> 2] | 0) + 24 >> 2] & 127](h, k);
    e = e + 32 | 0;
   } while ((e | 0) != (j | 0));
  }
 }
 e = c[g + 704 >> 2] | 0;
 if (!e) m = 10; else if ((Uc[c[(c[e >> 2] | 0) + 24 >> 2] & 0](e, k) | 0) == 1) {
  ac(0, 0) | 0;
  e = 1;
 } else m = 10;
 if ((m | 0) == 10) {
  Tb() | 0;
  e = 0;
 }
 a[g + 2132 >> 0] = e;
 i = l;
 return 1;
}

function Sd(d, e, f, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0.0;
 m = +g[e >> 2];
 f = c[f >> 2] | 0;
 e = c[h >> 2] | 0;
 if ((e | 0) > 0) {
  d = 0;
  l = 0.0;
  k = 0.0;
 } else return;
 while (1) {
  if (l >= 0.0 & l < .25) {
   if (l < 0.0) i = 2500.0; else if (l > .25) i = 600.0; else i = 2500.0 - l * 4.0 * 1900.0;
   j = +(a[164352 + ~~(k * 32.0) >> 0] | 0) * .125 + -1.0;
   i = k + m * i;
   if (!(i >= 1.0)) k = i; else k = +vg(i);
  } else j = 0.0;
  if (l < 0.0) i = 0.0; else if (l > .009999999776482582) i = 1.0; else i = l / .009999999776482582;
  j = j * i;
  if (l < .23999999463558197) i = 1.0; else if (l > .25) i = 0.0; else i = 1.0 - (l + -.23999999463558197) / .01000000536441803;
  h = ~~(j * i * .4000000059604645 * 32768.0);
  b[f + (d << 1) >> 1] = (h | 0) < -32768 ? -32768 : ((h | 0) > 32767 ? 32767 : h) & 65535;
  d = d + 1 | 0;
  if ((d | 0) == (e | 0)) break; else l = m + l;
 }
 return;
}

function Ae(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = yg(16384) | 0;
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
   g = yg(i << 2) | 0;
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
   if (d | 0) zg(d);
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

function wg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 g = d & 255;
 a : do if (!g) {
  e = b + (ug(b) | 0) | 0;
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
  f = R(g, 16843009) | 0;
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

function Xf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = +d;
 e = e | 0;
 var f = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 h = k;
 c[h >> 2] = 0;
 ue(a, h);
 c[a + 4 >> 2] = -1;
 c[a + 32 >> 2] = 0;
 j = a + 40 | 0;
 c[j >> 2] = 16;
 g[a + 12 >> 2] = d;
 c[a + 8 >> 2] = 44100;
 f = a + 16 | 0;
 a = c[e + 16 >> 2] | 0;
 do if (!a) {
  a = h + 16 | 0;
  c[a >> 2] = 0;
 } else if ((a | 0) == (e | 0)) {
  e = h + 16 | 0;
  c[e >> 2] = h;
  Qc[c[(c[a >> 2] | 0) + 12 >> 2] & 127](a, h);
  a = e;
  break;
 } else {
  e = h + 16 | 0;
  c[e >> 2] = Rc[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a) | 0;
  a = e;
  break;
 } while (0);
 Yf(h, f);
 a = c[a >> 2] | 0;
 if ((a | 0) == (h | 0)) {
  Pc[c[(c[h >> 2] | 0) + 16 >> 2] & 127](h);
  c[j >> 2] = b;
  i = k;
  return;
 }
 if (!a) {
  c[j >> 2] = b;
  i = k;
  return;
 }
 Pc[c[(c[a >> 2] | 0) + 20 >> 2] & 127](a);
 c[j >> 2] = b;
 i = k;
 return;
}

function Je(b, f, g) {
 b = b | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 l = c[42822] | 0;
 j = l + 136 | 0;
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 j = (c[l + 1464 >> 2] | 0) + (e[b >> 1] | 0) | 0;
 i = c[l + 1456 >> 2] | 0;
 h = i + (j * 400 | 0) | 0;
 m = b;
 b = h;
 if ((c[m >> 2] | 0) == (c[b >> 2] | 0) ? (c[m + 4 >> 2] | 0) == (c[b + 4 >> 2] | 0) : 0) {
  if ((c[i + (j * 400 | 0) + 8 >> 2] | 0) != 3) k = 3;
 } else k = 3;
 if ((k | 0) == 3) h = 0;
 c[h + 364 >> 2] = c[l + 620 >> 2];
 m = h + 369 | 0;
 i = (a[m >> 0] | 0) + 1 << 24 >> 24;
 i = (i & 255) < (d[h + 368 >> 0] | 0) ? i : 0;
 a[m >> 0] = i;
 i = c[h + 372 + ((i & 255) << 2) >> 2] | 0;
 h = l + 708 | 0;
 if ((c[h >> 2] | 0) == (i | 0)) {
  Sa(34962, 0, g | 0, f | 0);
  return;
 }
 c[h >> 2] = i;
 na(34962, i | 0);
 Sa(34962, 0, g | 0, f | 0);
 return;
}

function Bf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 a = c[b + 156 >> 2] | 0;
 if (a >>> 0 >= 256) {
  f = 0;
  i = g;
  return f | 0;
 }
 a = c[d + 2136 + (a << 2) >> 2] | 0;
 if (!a) {
  f = 0;
  i = g;
  return f | 0;
 }
 b = a >>> 5;
 h = d + 20 + (b << 2) | 0;
 e = 1 << (a & 31);
 c[h >> 2] = c[h >> 2] | e;
 b = d + 36 + (b << 2) | 0;
 c[b >> 2] = c[b >> 2] & ~e;
 b = c[d + 608 >> 2] | 0;
 e = c[d + 604 >> 2] | 0;
 if ((b | 0) != (e | 0)) {
  c[f >> 2] = 1;
  c[f + 4 >> 2] = a;
  c[f + 8 >> 2] = 0;
  a = c[d + 596 >> 2] | 0;
  if (a | 0) {
   b = a + (b << 5) | 0;
   a = a + (e << 5) | 0;
   do {
    h = c[a + 24 >> 2] | 0;
    Qc[c[(c[h >> 2] | 0) + 24 >> 2] & 127](h, f);
    a = a + 32 | 0;
   } while ((a | 0) != (b | 0));
  }
 }
 h = 1;
 i = g;
 return h | 0;
}

function qf(a, b, e, f) {
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
   Ob(h + 33984 | 0);
   Hb(i | 0, j | 0);
  }
  a = a + 1 | 0;
 } while ((a | 0) != (f | 0));
 return;
}

function ng(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) {
  if (!(og(e) | 0)) {
   g = c[f >> 2] | 0;
   h = 5;
  }
 } else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  f = h;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   Nc[c[e + 36 >> 2] & 127](e, b, d) | 0;
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
   if ((Nc[c[e + 36 >> 2] & 127](e, b, h) | 0) >>> 0 < h >>> 0) break a;
   g = d - h | 0;
   b = b + h | 0;
   f = c[i >> 2] | 0;
  } else g = d; while (0);
  Rg(f | 0, b | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
 } while (0);
 return;
}

function Gd(d, e, f, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0.0;
 m = +g[e >> 2];
 f = c[f >> 2] | 0;
 e = c[h >> 2] | 0;
 if ((e | 0) > 0) {
  d = 0;
  l = 0.0;
  i = 0.0;
 } else return;
 while (1) {
  if (l >= 0.0 & l < .13330000638961792) {
   if (l < 0.0) j = 50.0; else if (l > .13330000638961792) j = 250.0; else j = l / .13330000638961792 * 200.0 + 50.0;
   k = +(a[164480 + ~~(i * 32.0) >> 0] | 0) * .125 + -1.0;
   i = i + m * j;
   if (!(i >= 1.0)) j = k; else {
    j = k;
    i = +vg(i);
   }
  } else j = 0.0;
  h = ~~(j * .5 * 32768.0);
  b[f + (d << 1) >> 1] = (h | 0) < -32768 ? -32768 : ((h | 0) > 32767 ? 32767 : h) & 65535;
  d = d + 1 | 0;
  if ((d | 0) == (e | 0)) break; else l = m + l;
 }
 return;
}

function Yd(d, e, f, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0.0;
 m = +g[e >> 2];
 f = c[f >> 2] | 0;
 e = c[h >> 2] | 0;
 if ((e | 0) > 0) {
  d = 0;
  l = 0.0;
  i = 0.0;
 } else return;
 while (1) {
  if (l >= 0.0 & l < .5120000243186951) {
   if (l < 0.0) j = 10.0; else if (l > .5120000243186951) j = 220.0; else j = l / .5120000243186951 * 210.0 + 10.0;
   k = +(a[164480 + ~~(i * 32.0) >> 0] | 0) * .125 + -1.0;
   i = i + m * j;
   if (!(i >= 1.0)) j = k; else {
    j = k;
    i = +vg(i);
   }
  } else j = 0.0;
  h = ~~(j * .75 * 32768.0);
  b[f + (d << 1) >> 1] = (h | 0) < -32768 ? -32768 : ((h | 0) > 32767 ? 32767 : h) & 65535;
  d = d + 1 | 0;
  if ((d | 0) == (e | 0)) break; else l = m + l;
 }
 return;
}

function Cf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 g = c[d + 152 >> 2] | 0;
 if (a[e + 588 >> 0] | 0) {
  b = e + 68 | 0;
  d = c[b >> 2] | 0;
  if ((d | 0) < 128) {
   c[b >> 2] = d + 1;
   c[e + 72 + (d << 2) >> 2] = g;
   c[e + 72 + (c[b >> 2] << 2) >> 2] = 0;
  }
 }
 d = c[e + 608 >> 2] | 0;
 f = c[e + 604 >> 2] | 0;
 if ((d | 0) == (f | 0)) {
  i = j;
  return 1;
 }
 c[h >> 2] = 3;
 c[h + 4 >> 2] = 0;
 c[h + 8 >> 2] = g;
 b = c[e + 596 >> 2] | 0;
 if (!b) {
  i = j;
  return 1;
 }
 d = b + (d << 5) | 0;
 b = b + (f << 5) | 0;
 do {
  e = c[b + 24 >> 2] | 0;
  Qc[c[(c[e >> 2] | 0) + 24 >> 2] & 127](e, h);
  b = b + 32 | 0;
 } while ((b | 0) != (d | 0));
 i = j;
 return 1;
}

function sg(b, d) {
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
  if (!0) b = 171348; else b = c[(bh() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 84;
  b = -1;
 } while (0);
 return b | 0;
}

function Gf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0.0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 32 | 0;
 k = l;
 f = +h[b + 72 >> 3] * .5;
 e = +h[b + 80 >> 3] * -.5;
 g[d + 644 >> 2] = f;
 g[d + 648 >> 2] = e;
 b = c[d + 672 >> 2] | 0;
 j = c[d + 668 >> 2] | 0;
 if ((b | 0) == (j | 0)) {
  i = l;
  return 1;
 }
 c[k >> 2] = 3;
 a = k + 4 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 g[k + 20 >> 2] = f;
 g[k + 24 >> 2] = e;
 a = c[d + 660 >> 2] | 0;
 if (!a) {
  i = l;
  return 1;
 }
 b = a + (b << 5) | 0;
 a = a + (j << 5) | 0;
 do {
  d = c[a + 24 >> 2] | 0;
  Qc[c[(c[d >> 2] | 0) + 24 >> 2] & 127](d, k);
  a = a + 32 | 0;
 } while ((a | 0) != (b | 0));
 i = l;
 return 1;
}

function Ke() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 a = c[42822] | 0;
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
   Lb(a | 0, c[b >> 2] | 0, c[e + 304 >> 2] | 0);
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
   ie(151513, h);
   Wb();
  }
 }
 Qa(a | 0, c[e + 304 >> 2] | 0, f | 0, g | 0);
 i = h;
 return;
}

function od(d, e, f, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0.0;
 m = +g[e >> 2];
 f = c[f >> 2] | 0;
 e = c[h >> 2] | 0;
 if ((e | 0) > 0) {
  d = 0;
  l = 0.0;
  j = 0.0;
  i = 440.0;
 } else return;
 while (1) {
  if (l >= 0.0 & l < .125) if (l < 0.0) i = 500.0; else if (l > .125) i = 50.0; else i = 500.0 - l * 8.0 * 450.0;
  k = +(a[164416 + ~~(j * 32.0) >> 0] | 0) * .125 + -1.0;
  j = j + m * i;
  if (j >= 1.0) j = +vg(j);
  h = ~~(k * .30000001192092896 * 32768.0);
  b[f + (d << 1) >> 1] = (h | 0) < -32768 ? -32768 : ((h | 0) > 32767 ? 32767 : h) & 65535;
  d = d + 1 | 0;
  if ((d | 0) == (e | 0)) break; else l = m + l;
 }
 return;
}

function ud(d, e, f, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0.0;
 m = +g[e >> 2];
 f = c[f >> 2] | 0;
 e = c[h >> 2] | 0;
 if ((e | 0) > 0) {
  d = 0;
  l = 0.0;
  j = 0.0;
  i = 440.0;
 } else return;
 while (1) {
  if (l >= 0.0 & l < .125) if (l < 0.0) i = 50.0; else if (l > .125) i = 500.0; else i = l * 8.0 * 450.0 + 50.0;
  k = +(a[164416 + ~~(j * 32.0) >> 0] | 0) * .125 + -1.0;
  j = j + m * i;
  if (j >= 1.0) j = +vg(j);
  h = ~~(k * .30000001192092896 * 32768.0);
  b[f + (d << 1) >> 1] = (h | 0) < -32768 ? -32768 : ((h | 0) > 32767 ? 32767 : h) & 65535;
  d = d + 1 | 0;
  if ((d | 0) == (e | 0)) break; else l = m + l;
 }
 return;
}

function Gg(b, d, e, f) {
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

function Lg(b, d, e, f, g) {
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

function ie(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 c[f >> 2] = d;
 do {} while ((a[171276] & 1) != 0);
 c[42820] = (c[42820] | 0) + 1;
 a : do if (!0) lg(136696, b, f) | 0; else if (0) {
  e = 0;
  while (1) {
   d = c[e >> 2] | 0;
   if (!d) break;
   j = d + 4 | 0;
   c[j >> 2] = (c[j >> 2] | 0) + 1;
   Vc[c[(c[d >> 2] | 0) + 4 >> 2] & 127](d, 1, b, f);
   h = c[j >> 2] | 0;
   c[j >> 2] = h - 1;
   if ((h | 0) == 1) Pc[c[c[d >> 2] >> 2] & 127](d);
   e = e + 4 | 0;
   if (!e) break a;
  }
  Ha();
 } while (0);
 c[42820] = (c[42820] | 0) - 1;
 i = g;
 return;
}

function he(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 c[f >> 2] = d;
 do {} while ((a[171276] & 1) != 0);
 c[42820] = (c[42820] | 0) + 1;
 a : do if (!0) lg(136696, b, f) | 0; else if (0) {
  e = 0;
  while (1) {
   d = c[e >> 2] | 0;
   if (!d) break;
   j = d + 4 | 0;
   c[j >> 2] = (c[j >> 2] | 0) + 1;
   Vc[c[(c[d >> 2] | 0) + 4 >> 2] & 127](d, 2, b, f);
   h = c[j >> 2] | 0;
   c[j >> 2] = h - 1;
   if ((h | 0) == 1) Pc[c[c[d >> 2] >> 2] & 127](d);
   e = e + 4 | 0;
   if (!e) break a;
  }
  Ha();
 } while (0);
 c[42820] = (c[42820] | 0) - 1;
 i = g;
 return;
}

function ge(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 c[f >> 2] = d;
 do {} while ((a[171276] & 1) != 0);
 c[42820] = (c[42820] | 0) + 1;
 a : do if (!0) lg(136696, b, f) | 0; else if (0) {
  e = 0;
  while (1) {
   d = c[e >> 2] | 0;
   if (!d) break;
   j = d + 4 | 0;
   c[j >> 2] = (c[j >> 2] | 0) + 1;
   Vc[c[(c[d >> 2] | 0) + 4 >> 2] & 127](d, 3, b, f);
   h = c[j >> 2] | 0;
   c[j >> 2] = h - 1;
   if ((h | 0) == 1) Pc[c[c[d >> 2] >> 2] & 127](d);
   e = e + 4 | 0;
   if (!e) break a;
  }
  Ha();
 } while (0);
 c[42820] = (c[42820] | 0) - 1;
 i = g;
 return;
}

function Wf(a) {
 a = a | 0;
 var b = 0, d = 0, f = 0, g = 0;
 d = c[42836] | 0;
 b = (c[d + 168 >> 2] | 0) + (e[a >> 1] | 0) | 0;
 d = c[d + 160 >> 2] | 0;
 f = a;
 a = d + (b * 144 | 0) | 0;
 if (!((c[f >> 2] | 0) == (c[a >> 2] | 0) ? (c[f + 4 >> 2] | 0) == (c[a + 4 >> 2] | 0) : 0)) return;
 if ((c[d + (b * 144 | 0) + 8 >> 2] | 0) != 3) return;
 a = d + (b * 144 | 0) + 68 | 0;
 f = c[a >> 2] | 0;
 g = f + 1 | 0;
 c[a >> 2] = (g | 0) == (c[d + (b * 144 | 0) + 72 >> 2] | 0) ? 0 : g;
 f = c[d + (b * 144 | 0) + 76 + (f << 2) >> 2] | 0;
 ab(f | 0, 4103, 0);
 Wa(f | 0, 4099, 1.0);
 Wa(f | 0, 4106, 1.0);
 Ga(f | 0);
 return;
}

function rg(a, b, d, e, f) {
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
  Xg(g | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  e = c[a >> 2] | 0;
  d = (e & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   b = f;
   do {
    if (d) {
     ng(g, 256, a);
     e = c[a >> 2] | 0;
    }
    b = b + -256 | 0;
    d = (e & 32 | 0) == 0;
   } while (b >>> 0 > 255);
   if (d) f = f & 255; else break;
  } else if (!d) break;
  ng(g, f, a);
 } while (0);
 i = h;
 return;
}

function we(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = c[d >> 2] | 0;
 if (e | 0) {
  d = c[d + 8 >> 2] | 0;
  if ((d | 0) > 0) if ((d | 0) > 0 & (a[e >> 0] | 0) != 0) {
   f = yg(d + 9 | 0) | 0;
   c[b >> 2] = f;
   g = f;
   c[g >> 2] = 0;
   c[g + 4 >> 2] = 0;
   c[f >> 2] = 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[f + 4 >> 2] = d;
   f = f + 8 | 0;
   c[b + 4 >> 2] = f;
   Rg(f | 0, e | 0, d | 0) | 0;
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

function Ig(b, d, e, f) {
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
  Vc[c[(c[g >> 2] | 0) + 28 >> 2] & 127](g, d, e, f);
 } while (0);
 return;
}

function Qg() {}
function Rg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return ua(b | 0, d | 0, e | 0) | 0;
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

function hg(a, b, d) {
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
 b = fb(140, h | 0) | 0;
 if (b >>> 0 > 4294963200) {
  if (!0) a = 171348; else a = c[(bh() | 0) + 64 >> 2] | 0;
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

function tg(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Zg(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +tg(a * 18446744073709551616.0, b);
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

function ug(b) {
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

function qg(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Wg(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = b;
  b = Yg(b | 0, c | 0, 10, 0) | 0;
  if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break; else c = C;
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function Mg(b, d, e, f) {
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

function Xg(b, d, e) {
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

function ke(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 le(b);
 ne(b);
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
     Pc[c[(c[g >> 2] | 0) + 24 >> 2] & 127](g);
    }
    d = d + 40 | 0;
   } while ((d | 0) != (f | 0));
  }
 }
 le(b);
 ne(b);
 return;
}

function Ve(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = yg(8) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[42962] | 0;
  c[42962] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Sc[b & 127]();
 }
 if ((d | 0) == 5) {
  a = Bb(4) | 0;
  c[a >> 2] = 137008;
  Cc(a | 0, 1088, 90);
 } else if ((d | 0) == 6) {
  c[b >> 2] = 136340;
  c[b + 4 >> 2] = c[a + 4 >> 2];
  return b | 0;
 }
 return 0;
}

function Lf(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = yg(8) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[42962] | 0;
  c[42962] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Sc[b & 127]();
 }
 if ((d | 0) == 5) {
  a = Bb(4) | 0;
  c[a >> 2] = 137008;
  Cc(a | 0, 1088, 90);
 } else if ((d | 0) == 6) {
  c[b >> 2] = 136668;
  c[b + 4 >> 2] = c[a + 4 >> 2];
  return b | 0;
 }
 return 0;
}

function Ud(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = yg(8) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[42962] | 0;
  c[42962] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Sc[b & 127]();
 }
 if ((d | 0) == 5) {
  a = Bb(4) | 0;
  c[a >> 2] = 137008;
  Cc(a | 0, 1088, 90);
 } else if ((d | 0) == 6) {
  c[b >> 2] = 1792;
  c[b + 4 >> 2] = c[a + 4 >> 2];
  return b | 0;
 }
 return 0;
}

function og(b) {
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

function De(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = yg(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[42962] | 0;
  c[42962] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Sc[a & 127]();
 }
 if ((b | 0) == 5) {
  b = Bb(4) | 0;
  c[b >> 2] = 137008;
  Cc(b | 0, 1088, 90);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 136304;
  return a | 0;
 }
 return 0;
}

function wd(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = yg(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[42962] | 0;
  c[42962] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Sc[a & 127]();
 }
 if ((b | 0) == 5) {
  b = Bb(4) | 0;
  c[b >> 2] = 137008;
  Cc(b | 0, 1088, 90);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1648;
  return a | 0;
 }
 return 0;
}

function qd(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = yg(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[42962] | 0;
  c[42962] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Sc[a & 127]();
 }
 if ((b | 0) == 5) {
  b = Bb(4) | 0;
  c[b >> 2] = 137008;
  Cc(b | 0, 1088, 90);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1612;
  return a | 0;
 }
 return 0;
}

function kd(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = yg(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[42962] | 0;
  c[42962] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Sc[a & 127]();
 }
 if ((b | 0) == 5) {
  b = Bb(4) | 0;
  c[b >> 2] = 137008;
  Cc(b | 0, 1088, 90);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1576;
  return a | 0;
 }
 return 0;
}

function Od(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = yg(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[42962] | 0;
  c[42962] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Sc[a & 127]();
 }
 if ((b | 0) == 5) {
  b = Bb(4) | 0;
  c[b >> 2] = 137008;
  Cc(b | 0, 1088, 90);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1756;
  return a | 0;
 }
 return 0;
}

function Id(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = yg(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[42962] | 0;
  c[42962] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Sc[a & 127]();
 }
 if ((b | 0) == 5) {
  b = Bb(4) | 0;
  c[b >> 2] = 137008;
  Cc(b | 0, 1088, 90);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1720;
  return a | 0;
 }
 return 0;
}

function Cd(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = yg(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[42962] | 0;
  c[42962] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Sc[a & 127]();
 }
 if ((b | 0) == 5) {
  b = Bb(4) | 0;
  c[b >> 2] = 137008;
  Cc(b | 0, 1088, 90);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1684;
  return a | 0;
 }
 return 0;
}

function ig(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 106;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (xc(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = fg(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Sg(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
  e = b;
  c = c + d | 0;
  b = b + d | 0;
  while ((d | 0) > 0) {
   b = b - 1 | 0;
   c = c - 1 | 0;
   d = d - 1 | 0;
   a[b >> 0] = a[c >> 0] | 0;
  }
  b = e;
 } else Rg(b, c, d) | 0;
 return b | 0;
}

function $g(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = R(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + (R(e, d) | 0) | 0;
 e = b >>> 16;
 b = R(e, f) | 0;
 return (C = (a >>> 16) + (R(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function eg(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 c[b >> 2] = c[a + 60 >> 2];
 a = pb(6, b | 0) | 0;
 if (a >>> 0 > 4294963200) {
  if (!0) b = 171348; else b = c[(bh() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 0 - a;
  a = -1;
 }
 i = d;
 return a | 0;
}

function Fg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Gg(b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  Tc[c[(c[a >> 2] | 0) + 20 >> 2] & 127](a, b, d, e, f, g);
 }
 return;
}
function kg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 Rg(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function sf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 d = i;
 i = i + 16 | 0;
 e = d + 8 | 0;
 a = d + 4 | 0;
 Aa(e | 0, a | 0, d | 0);
 b = c[42823] | 0;
 c[b + 132 >> 2] = c[e >> 2];
 c[b + 136 >> 2] = c[a >> 2];
 i = d;
 return 1;
}

function tf() {
 var a = 0, b = 0;
 a = i;
 i = i + 32 | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 4 >> 2] = 1;
 c[b + 8 >> 2] = 1;
 c[b + 12 >> 2] = 104;
 c[b + 16 >> 2] = 0;
 Ba(0, 0, b | 0) | 0;
 i = a;
 return;
}

function Jf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 g[c + 1404 >> 2] = +h[b + 24 >> 3] * .017453292519943295;
 g[c + 1400 >> 2] = +h[b + 16 >> 3] * .017453292519943295;
 g[c + 1396 >> 2] = +h[b + 8 >> 3] * .017453292519943295;
 return 1;
}

function uf() {
 var a = 0, b = 0;
 a = i;
 i = i + 32 | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 4 >> 2] = 1;
 c[b + 8 >> 2] = 1;
 c[b + 12 >> 2] = 104;
 c[b + 16 >> 2] = 0;
 vc(0, b | 0) | 0;
 i = a;
 return;
}

function Wg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Vg(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function ah(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = $g(e, f) | 0;
 a = C;
 return (C = (R(b, f) | 0) + (R(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function _g(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 C = a << c - 32;
 return 0;
}

function If(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 g[c + 1384 >> 2] = -+h[b + 32 >> 3];
 g[c + 1388 >> 2] = -+h[b + 40 >> 3];
 g[c + 1392 >> 2] = -+h[b + 48 >> 3];
 return 1;
}

function Zg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = 0;
 return b >>> c - 32 | 0;
}

function ih(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 Tc[a & 127](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Kg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Gg(b, d, e, f);
 return;
}

function Ug(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function Tg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function dh(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 Oc[a & 127](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function Qf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = i;
 i = i + 16 | 0;
 d = a;
 c[d >> 2] = b;
 Sf(c[42835] | 0, 137069, d);
 i = a;
 return;
}

function kh(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Vc[a & 127](b | 0, c | 0, d | 0, e | 0);
}

function ch(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Nc[a & 127](b | 0, c | 0, d | 0) | 0;
}

function rh(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 U(6);
}

function We(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 136340;
 c[b + 4 >> 2] = c[a + 4 >> 2];
 return;
}

function Mf(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 136668;
 c[b + 4 >> 2] = c[a + 4 >> 2];
 return;
}

function Yg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Vg(a, b, c, d, 0) | 0;
}

function Vd(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1792;
 c[b + 4 >> 2] = c[a + 4 >> 2];
 return;
}

function fe() {
 var a = 0;
 a = c[42816] | 0;
 Pc[c[(c[a >> 2] | 0) + 28 >> 2] & 127](a);
 return;
}
function Wc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function mh(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 U(1);
}

function jh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Uc[a & 0](b | 0, c | 0) | 0;
}

function fh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Qc[a & 127](b | 0, c | 0);
}

function th(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 U(8);
}

function lh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 U(0);
 return 0;
}

function gh(a, b) {
 a = a | 0;
 b = b | 0;
 return Rc[a & 127](b | 0) | 0;
}

function _c(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function Ee(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 136304;
 return;
}

function xd(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1648;
 return;
}

function rd(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1612;
 return;
}

function ld(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1576;
 return;
}

function Pd(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1756;
 return;
}

function Jd(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1720;
 return;
}

function Dd(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1684;
 return;
}

function eh(a, b) {
 a = a | 0;
 b = b | 0;
 Pc[a & 127](b | 0);
}

function sh(a, b) {
 a = a | 0;
 b = b | 0;
 U(7);
 return 0;
}

function Pf(a) {
 a = a | 0;
 xf(c[a + 4 >> 2] | 0);
 return;
}

function Zc(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function oh(a, b) {
 a = a | 0;
 b = b | 0;
 U(3);
}

function ph(a) {
 a = a | 0;
 U(4);
 return 0;
}

function de(a) {
 a = a | 0;
 mc();
 return 9;
}

function zd(a) {
 a = a | 0;
 zg(a);
 return;
}

function vd(a) {
 a = a | 0;
 zg(a);
 return;
}

function td(a) {
 a = a | 0;
 zg(a);
 return;
}

function pd(a) {
 a = a | 0;
 zg(a);
 return;
}

function nd(a) {
 a = a | 0;
 zg(a);
 return;
}

function jd(a) {
 a = a | 0;
 zg(a);
 return;
}

function Ye(a) {
 a = a | 0;
 zg(a);
 return;
}

function Xd(a) {
 a = a | 0;
 zg(a);
 return;
}

function Ue(a) {
 a = a | 0;
 zg(a);
 return;
}

function Td(a) {
 a = a | 0;
 zg(a);
 return;
}

function Rd(a) {
 a = a | 0;
 zg(a);
 return;
}

function Og(a) {
 a = a | 0;
 zg(a);
 return;
}

function Of(a) {
 a = a | 0;
 zg(a);
 return;
}

function Nd(a) {
 a = a | 0;
 zg(a);
 return;
}

function Ld(a) {
 a = a | 0;
 zg(a);
 return;
}

function Kf(a) {
 a = a | 0;
 zg(a);
 return;
}

function Jg(a) {
 a = a | 0;
 zg(a);
 return;
}

function Hd(a) {
 a = a | 0;
 zg(a);
 return;
}

function Ge(a) {
 a = a | 0;
 zg(a);
 return;
}

function Fd(a) {
 a = a | 0;
 zg(a);
 return;
}

function Ce(a) {
 a = a | 0;
 zg(a);
 return;
}

function Bg(a) {
 a = a | 0;
 zg(a);
 return;
}

function Bd(a) {
 a = a | 0;
 zg(a);
 return;
}

function hh(a) {
 a = a | 0;
 Sc[a & 127]();
}

function Pg(a) {
 a = a | 0;
 return 167209;
}

function be(a) {
 a = a | 0;
 return 5;
}

function ae(a) {
 a = a | 0;
 return 4;
}

function _d(a) {
 a = a | 0;
 return 2;
}

function Zd(a) {
 a = a | 0;
 return 1;
}

function $d(a) {
 a = a | 0;
 return 3;
}

function yd(a) {
 a = a | 0;
 return;
}

function sd(a) {
 a = a | 0;
 return;
}

function md(a) {
 a = a | 0;
 return;
}

function id(a) {
 a = a | 0;
 return;
}

function gg(a) {
 a = a | 0;
 return;
}

function Xe(a) {
 a = a | 0;
 return;
}

function Wd(a) {
 a = a | 0;
 return;
}

function Qd(a) {
 a = a | 0;
 return;
}

function Ng(a) {
 a = a | 0;
 return;
}

function Nf(a) {
 a = a | 0;
 return;
}

function Kd(a) {
 a = a | 0;
 return;
}

function Fe(a) {
 a = a | 0;
 return;
}

function Ed(a) {
 a = a | 0;
 return;
}

function Dg(a) {
 a = a | 0;
 return;
}

function Cg(a) {
 a = a | 0;
 return;
}

function Be(a) {
 a = a | 0;
 return;
}

function Ag(a) {
 a = a | 0;
 return;
}

function Yc(a) {
 a = a | 0;
 i = a;
}

function $c(a) {
 a = a | 0;
 C = a;
}

function nh(a) {
 a = a | 0;
 U(2);
}

function ad() {
 return C | 0;
}

function Xc() {
 return i | 0;
}

function bh() {
 return 0;
}

function qh() {
 U(5);
}

// EMSCRIPTEN_END_FUNCS

 var Nc = [ lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, ig, hg, kg, lh, lh, lh, lh, Eg, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, sf, lh, fg, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh, lh ];
 var Oc = [ mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, Lg, mh, mh, mh, Hg, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh, mh ];
 var Pc = [ nh, nh, nh, nh, nh, nh, nh, nh, ee, id, jd, nh, nh, md, nd, nh, pd, nh, nh, sd, td, nh, vd, nh, nh, yd, zd, nh, Bd, nh, nh, Ed, Fd, nh, Hd, nh, nh, Kd, Ld, nh, Nd, nh, nh, Qd, Rd, nh, Td, nh, nh, Wd, Xd, nh, nh, nh, nh, Be, Ce, nh, nh, Fe, Ge, He, Ue, nh, nh, Xe, Ye, Ze, Kf, nh, nh, Nf, Of, Pf, nh, nh, nh, nh, Ag, Jg, Cg, Dg, nh, nh, nh, nh, Bg, nh, nh, nh, Ng, Og, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, gg, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh, nh ];
 var Qc = [ oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, ld, oh, oh, oh, oh, oh, rd, oh, oh, oh, oh, oh, xd, oh, oh, oh, oh, oh, Dd, oh, oh, oh, oh, oh, Jd, oh, oh, oh, oh, oh, Pd, oh, oh, oh, oh, oh, Vd, oh, oh, oh, oh, oh, oh, oh, oh, oh, Ee, oh, oh, oh, oh, oh, We, oh, oh, oh, oh, oh, Mf, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh ];
 var Rc = [ ph, Zd, _d, $d, cd, dd, ed, de, ph, ph, ph, kd, ph, ph, ph, ph, ph, qd, ph, ph, ph, ph, ph, wd, ph, ph, ph, ph, ph, Cd, ph, ph, ph, ph, ph, Id, ph, ph, ph, ph, ph, Od, ph, ph, ph, ph, ph, Ud, ph, ph, ph, ph, ae, be, ce, ph, ph, De, ph, ph, ph, ph, ph, Ve, ph, ph, ph, ph, ph, Lf, ph, ph, ph, ph, eg, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, Pg, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph, ph ];
 var Sc = [ qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, fe, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh, qh ];
 var Tc = [ rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, Kg, rh, rh, rh, Fg, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh, rh ];
 var Uc = [ sh ];
 var Vc = [ th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, od, th, th, th, th, th, ud, th, th, th, th, th, Ad, th, th, th, th, th, Gd, th, th, th, th, th, Md, th, th, th, th, th, Sd, th, th, th, th, th, Yd, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, Mg, th, th, th, Ig, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th, th ];
 return {
  ___muldsi3: $g,
  _i64Subtract: Ug,
  _free: zg,
  _main: bd,
  _enter_fullscreen: tf,
  _memmove: Sg,
  _pthread_self: bh,
  _memset: Xg,
  ___udivdi3: Yg,
  _malloc: yg,
  _i64Add: Tg,
  _memcpy: Rg,
  _enter_soft_fullscreen: uf,
  ___muldi3: ah,
  _bitshift64Lshr: Zg,
  _bitshift64Shl: _g,
  ___uremdi3: Wg,
  ___udivmoddi4: Vg,
  runPostSets: Qg,
  stackAlloc: Wc,
  stackSave: Xc,
  stackRestore: Yc,
  establishStackSpace: Zc,
  setThrew: _c,
  setTempRet0: $c,
  getTempRet0: ad,
  dynCall_iiii: ch,
  dynCall_viiiii: dh,
  dynCall_vi: eh,
  dynCall_vii: fh,
  dynCall_ii: gh,
  dynCall_v: hh,
  dynCall_viiiiii: ih,
  dynCall_iii: jh,
  dynCall_viiii: kh
 };
})


;