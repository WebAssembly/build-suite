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
 var ja = env.invoke_viii;
 var ka = env.invoke_v;
 var la = env.invoke_viiiiii;
 var ma = env.invoke_iii;
 var na = env.invoke_viiii;
 var oa = env._pthread_cleanup_pop;
 var pa = env.___syscall6;
 var qa = env.___gxx_personality_v0;
 var ra = env.___cxa_allocate_exception;
 var sa = env.___cxa_find_matching_catch;
 var ta = env._emscripten_set_main_loop_timing;
 var ua = env._sbrk;
 var va = env._usleep;
 var wa = env._emscripten_memcpy_big;
 var xa = env.___resumeException;
 var ya = env.__ZSt18uncaught_exceptionv;
 var za = env._nanosleep;
 var Aa = env._llvm_trap;
 var Ba = env.___syscall54;
 var Ca = env._emscripten_set_main_loop;
 var Da = env._emscripten_get_now;
 var Ea = env.___cxa_atexit;
 var Fa = env.___cxa_throw;
 var Ga = env._abort;
 var Ha = env._pthread_cleanup_push;
 var Ia = env._emscripten_cancel_main_loop;
 var Ja = env._emscripten_async_wget_data;
 var Ka = env._atexit;
 var La = env.___syscall140;
 var Ma = env.___syscall146;
 var Na = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function fb(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0;
 ba = i;
 i = i + 736 | 0;
 M = ba + 384 | 0;
 L = ba + 360 | 0;
 O = ba + 288 | 0;
 N = ba + 264 | 0;
 Q = ba + 240 | 0;
 P = ba + 216 | 0;
 aa = ba + 456 | 0;
 h = ba + 728 | 0;
 j = ba + 192 | 0;
 l = ba + 724 | 0;
 k = ba + 720 | 0;
 C = ba + 680 | 0;
 D = ba + 168 | 0;
 B = ba + 144 | 0;
 F = ba + 640 | 0;
 G = ba + 120 | 0;
 E = ba + 96 | 0;
 T = ba + 520 | 0;
 S = ba + 72 | 0;
 R = ba + 48 | 0;
 V = ba + 416 | 0;
 W = ba + 24 | 0;
 U = ba;
 c[aa >> 2] = 0;
 c[aa + 4 >> 2] = 0;
 c[aa + 8 >> 2] = 0;
 c[aa + 12 >> 2] = 0;
 Z = aa + 16 | 0;
 c[Z >> 2] = 16;
 _ = aa + 20 | 0;
 c[_ >> 2] = 65536;
 a[aa + 24 >> 0] = 0;
 $ = aa + 28 | 0;
 c[$ >> 2] = 0;
 c[$ + 4 >> 2] = 0;
 c[$ + 8 >> 2] = 0;
 c[$ + 12 >> 2] = 0;
 X = aa + 44 | 0;
 c[X >> 2] = 16;
 Y = aa + 48 | 0;
 c[Y >> 2] = 65536;
 a[aa + 52 >> 0] = 0;
 m = aa + 56 | 0;
 c[m >> 2] = 4;
 d = c[1914] | 0;
 if (!d) {
  d = pf(24608) | 0;
  Kf(d | 0, 0, 24608) | 0;
  c[d + 16 >> 2] = 16;
  c[d + 20 >> 2] = 65536;
  c[d + 24 >> 2] = 0;
  c[d + 28 >> 2] = 0;
  e = d + 24608 | 0;
  f = d + 32 | 0;
  do {
   c[f >> 2] = 0;
   c[f + 4 >> 2] = 0;
   c[f + 8 >> 2] = 0;
   c[f + 12 >> 2] = 0;
   c[f + 16 >> 2] = 16;
   c[f + 20 >> 2] = 65536;
   f = f + 24 | 0;
  } while ((f | 0) != (e | 0));
  c[1914] = d;
 }
 J = Ve(d, -1651782582, 2208) | 0;
 c[h >> 2] = J;
 if (!J) c[h >> 2] = We(d, -1651782582, 2208) | 0;
 g = j + 16 | 0;
 c[g >> 2] = j;
 c[j >> 2] = 1152;
 while (1) {
  d = pf(32) | 0;
  if (d | 0) break;
  d = c[2051] | 0;
  c[2051] = d + 0;
  if (!d) {
   K = 11;
   break;
  }
  Ua[d & 255]();
 }
 if ((K | 0) == 11) {
  ba = ra(4) | 0;
  c[ba >> 2] = 2196;
  Fa(ba | 0, 1088, 167);
 }
 c[d >> 2] = 1188;
 e = d + 8 | 0;
 c[d + 24 >> 2] = e;
 c[e >> 2] = 1152;
 Se(M, h);
 e = M + 8 | 0;
 f = M + 24 | 0;
 c[f >> 2] = Sa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d) | 0;
 pb($, M);
 f = c[f >> 2] | 0;
 if ((f | 0) == (e | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
 Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 d = c[g >> 2] | 0;
 if ((d | 0) == (j | 0)) Qa[c[(c[j >> 2] | 0) + 16 >> 2] & 255](j); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 c[h >> 2] = 0;
 a : do if (!1) {
  d = 2213;
  K = 23;
 } else {
  d = 2213;
  e = 2213;
  while (1) {
   if (!(a[d >> 0] | 0)) {
    d = e;
    break a;
   }
   d = d + 1 | 0;
   e = d;
   if (!(e & 3)) {
    K = 23;
    break;
   }
  }
 } while (0);
 if ((K | 0) == 23) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 2213 | 0;
 if ((d | 0) > 0) {
  j = pf(d + 9 | 0) | 0;
  J = j;
  c[J >> 2] = 0;
  c[J + 4 >> 2] = 0;
  c[j >> 2] = 0;
  c[j >> 2] = (c[j >> 2] | 0) + 1;
  c[j + 4 >> 2] = d;
  J = j + 8 | 0;
  c[l >> 2] = J;
  Nf(J | 0, 2213, d | 0) | 0;
  a[J + d >> 0] = 0;
 } else {
  c[l >> 2] = 0;
  j = 0;
 }
 b : do if (!2) {
  d = 2218;
  K = 34;
 } else {
  d = 2218;
  e = 2218;
  while (1) {
   if (!(a[d >> 0] | 0)) {
    d = e;
    break b;
   }
   d = d + 1 | 0;
   e = d;
   if (!(e & 3)) {
    K = 34;
    break;
   }
  }
 } while (0);
 if ((K | 0) == 34) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 2218 | 0;
 if ((d | 0) > 0) {
  g = pf(d + 9 | 0) | 0;
  J = g;
  c[J >> 2] = 0;
  c[J + 4 >> 2] = 0;
  c[g >> 2] = 0;
  c[g >> 2] = (c[g >> 2] | 0) + 1;
  c[g + 4 >> 2] = d;
  J = g + 8 | 0;
  c[k >> 2] = J;
  Nf(J | 0, 2218, d | 0) | 0;
  a[J + d >> 0] = 0;
 } else {
  c[k >> 2] = 0;
  g = 0;
 }
 c[M >> 2] = j;
 h = M + 4 | 0;
 c[h >> 2] = c[l >> 2];
 if (j | 0) {
  J = j;
  c[J >> 2] = (c[J >> 2] | 0) + 1;
 }
 d = M + 8 | 0;
 c[d >> 2] = g;
 e = M + 12 | 0;
 c[e >> 2] = c[k >> 2];
 if (g | 0) {
  J = g;
  c[J >> 2] = (c[J >> 2] | 0) + 1;
 }
 zb(aa, M);
 f = c[d >> 2] | 0;
 if (f | 0) {
  J = c[f >> 2] | 0;
  c[f >> 2] = J - 1;
  if ((J | 0) == 1) {
   qf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[d >> 2] = 0;
  c[e >> 2] = 0;
 }
 d = c[M >> 2] | 0;
 if (d | 0) {
  J = c[d >> 2] | 0;
  c[d >> 2] = J - 1;
  if ((J | 0) == 1) {
   qf(c[M >> 2] | 0);
   c[M >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[M >> 2] = 0;
  c[h >> 2] = 0;
 }
 if (g | 0) {
  I = g;
  J = c[I >> 2] | 0;
  c[I >> 2] = J - 1;
  if ((J | 0) == 1) {
   qf(g);
   c[k >> 2] = 0;
  }
  c[k >> 2] = 0;
 }
 if (j | 0) {
  I = j;
  J = c[I >> 2] | 0;
  c[I >> 2] = J - 1;
  if ((J | 0) == 1) {
   qf(j);
   c[l >> 2] = 0;
  }
  c[l >> 2] = 0;
 }
 A = pf(128) | 0;
 d = A + 24 | 0;
 o = A;
 p = o + 124 | 0;
 do {
  a[o >> 0] = 0;
  o = o + 1 | 0;
 } while ((o | 0) < (p | 0));
 c[d >> 2] = 16;
 c[A + 28 >> 2] = 65536;
 a[A + 32 >> 0] = 0;
 w = A + 36 | 0;
 a[w >> 0] = 0;
 x = A + 40 | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 c[x + 12 >> 2] = 0;
 c[x + 16 >> 2] = 0;
 c[A + 60 >> 2] = 16;
 c[A + 64 >> 2] = 65536;
 a[A + 68 >> 0] = 0;
 x = A + 72 | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 c[x + 12 >> 2] = 0;
 c[x + 16 >> 2] = 0;
 c[x + 20 >> 2] = 0;
 c[A + 96 >> 2] = 16;
 c[A + 100 >> 2] = 65536;
 x = A + 104 | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 c[x + 12 >> 2] = 0;
 c[A + 120 >> 2] = 16;
 c[A + 124 >> 2] = 65536;
 c[1642] = A;
 x = A;
 z = pf(40) | 0;
 f = c[m >> 2] | 0;
 y = z + 4 | 0;
 c[y >> 2] = 0;
 c[z >> 2] = 1556;
 c[z + 8 >> 2] = 0;
 p = z + 12 | 0;
 c[p >> 2] = f;
 q = z + 16 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 r = z + 32 | 0;
 c[r >> 2] = 16;
 s = z + 36 | 0;
 c[s >> 2] = 65536;
 t = z + 28 | 0;
 u = z + 24 | 0;
 v = z + 20 | 0;
 if ((f | 0) > 0) {
  d = pf(f << 2) | 0;
  e = c[q >> 2] | 0;
  if (e | 0) qf(e);
  c[q >> 2] = d;
  c[v >> 2] = f;
  c[u >> 2] = 0;
  c[t >> 2] = 0;
  if ((c[p >> 2] | 0) > 0) {
   o = 0;
   do {
    l = pf(128) | 0;
    m = l + 4 | 0;
    c[m >> 2] = 0;
    n = l + 8 | 0;
    c[n >> 2] = 0;
    c[n + 4 >> 2] = 0;
    c[n + 8 >> 2] = 0;
    c[n + 12 >> 2] = 0;
    c[n + 16 >> 2] = 0;
    c[l + 28 >> 2] = 16;
    c[l + 32 >> 2] = 65536;
    n = l + 36 | 0;
    c[n >> 2] = 0;
    c[n + 4 >> 2] = 0;
    c[n + 8 >> 2] = 0;
    c[n + 12 >> 2] = 0;
    c[l + 52 >> 2] = 16;
    c[l + 56 >> 2] = 65536;
    n = l + 60 | 0;
    c[n >> 2] = 0;
    c[n + 4 >> 2] = 0;
    c[n + 8 >> 2] = 0;
    c[n + 12 >> 2] = 0;
    c[l + 76 >> 2] = 16;
    c[l + 80 >> 2] = 65536;
    n = l + 84 | 0;
    c[n >> 2] = 0;
    b[n + 4 >> 1] = 0;
    a[n + 6 >> 0] = 0;
    c[l >> 2] = 1576;
    c[l + 92 >> 2] = x;
    c[l + 96 >> 2] = w;
    n = l + 100 | 0;
    c[n >> 2] = 0;
    c[n + 4 >> 2] = 0;
    c[n + 8 >> 2] = 0;
    c[n + 12 >> 2] = 0;
    c[l + 116 >> 2] = 16;
    c[l + 120 >> 2] = 65536;
    a[l + 124 >> 0] = 0;
    n = (l | 0) == 0;
    if (!n) c[m >> 2] = (c[m >> 2] | 0) + 1;
    le(l);
    d = c[v >> 2] | 0;
    e = c[t >> 2] | 0;
    do if ((d | 0) == (e | 0)) {
     e = d >> 1;
     f = c[r >> 2] | 0;
     if ((e | 0) >= (f | 0)) {
      f = c[s >> 2] | 0;
      f = (e | 0) > (f | 0) ? f : e;
     }
     k = f + d | 0;
     if (!f) break;
     d = d - (c[u >> 2] | 0) | 0;
     e = pf(k << 2) | 0;
     f = c[q >> 2] | 0;
     if ((d | 0) > 0) {
      g = e;
      h = 0;
      j = f + (c[u >> 2] << 2) | 0;
      while (1) {
       c[g >> 2] = c[j >> 2];
       c[j >> 2] = 0;
       h = h + 1 | 0;
       if ((h | 0) == (d | 0)) break; else {
        g = g + 4 | 0;
        j = j + 4 | 0;
       }
      }
     }
     if (f | 0) qf(f);
     c[q >> 2] = e;
     c[v >> 2] = k;
     c[u >> 2] = 0;
     c[t >> 2] = d;
    } else d = e; while (0);
    c[t >> 2] = d + 1;
    c[(c[q >> 2] | 0) + (d << 2) >> 2] = l;
    do if (!n) {
     c[m >> 2] = (c[m >> 2] | 0) + 1;
     K = c[m >> 2] | 0;
     c[m >> 2] = K - 1;
     if ((K | 0) != 1) break;
     Qa[c[c[l >> 2] >> 2] & 255](l);
    } while (0);
    o = o + 1 | 0;
   } while ((o | 0) < (c[p >> 2] | 0));
  }
  d = (z | 0) == 0;
  K = 84;
 } else if (!z) d = 1; else {
  d = 0;
  K = 84;
 }
 if ((K | 0) == 84) c[y >> 2] = (c[y >> 2] | 0) + 1;
 e = A + 76 | 0;
 f = c[e >> 2] | 0;
 if ((z | 0) == (f | 0)) {
  if (!d) {
   J = c[y >> 2] | 0;
   c[y >> 2] = J - 1;
   if ((J | 0) == 1) Qa[c[c[z >> 2] >> 2] & 255](z);
  }
 } else {
  if (f | 0) {
   I = f + 4 | 0;
   J = c[I >> 2] | 0;
   c[I >> 2] = J - 1;
   if ((J | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
   c[e >> 2] = 0;
  }
  c[e >> 2] = z;
 }
 d = c[aa >> 2] | 0;
 if (d | 0) {
  e = c[aa + 8 >> 2] | 0;
  J = c[aa + 12 >> 2] | 0;
  v = d + (J << 4) | 0;
  if ((e | 0) != (J | 0)) {
   w = M + 4 | 0;
   x = M + 8 | 0;
   y = M + 12 | 0;
   u = d + (e << 4) | 0;
   do {
    t = c[1642] | 0;
    do {
     J = a[t >> 0] | 0;
     a[t >> 0] = 1;
    } while ((J & 1) != 0);
    d = t + 4 | 0;
    do {} while ((c[d >> 2] | 0) > 0);
    s = u + 8 | 0;
    q = t + 8 | 0;
    o = c[q >> 2] | 0;
    n = (o | 0) == 0;
    if (n) {
     l = 0;
     d = 0;
    } else {
     l = o + (c[t + 20 >> 2] << 4) | 0;
     d = o + (c[t + 16 >> 2] << 4) | 0;
    }
    r = u + 4 | 0;
    m = d;
    d = l - d >> 4;
    c : while (1) {
     while (1) {
      if (!d) break c;
      j = (d | 0) / 2 | 0;
      k = m + (j << 4) | 0;
      if ((c[k >> 2] | 0) == (c[u >> 2] | 0)) {
       d = j;
       continue;
      }
      f = c[m + (j << 4) + 4 >> 2] | 0;
      f = (f | 0) == 0 ? 8216 : f;
      g = c[r >> 2] | 0;
      g = (g | 0) == 0 ? 8216 : g;
      h = a[f >> 0] | 0;
      e = a[g >> 0] | 0;
      if (h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != e << 24 >> 24) f = h; else {
       do {
        f = f + 1 | 0;
        g = g + 1 | 0;
        h = a[f >> 0] | 0;
        e = a[g >> 0] | 0;
       } while (!(h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != e << 24 >> 24));
       f = h;
      }
      if ((f & 255) < (e & 255)) break; else d = j;
     }
     m = k + 16 | 0;
     d = d + -1 - j | 0;
    }
    do if ((m | 0) == (l | 0)) {
     e = c[u >> 2] | 0;
     d = c[r >> 2] | 0;
     K = 138;
    } else {
     p = c[u >> 2] | 0;
     e = p;
     if ((p | 0) != (c[m >> 2] | 0)) {
      d = c[r >> 2] | 0;
      j = (d | 0) == 0 ? 8216 : d;
      g = c[m + 4 >> 2] | 0;
      g = (g | 0) == 0 ? 8216 : g;
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
      if ((g & 255) < (f & 255)) {
       K = 138;
       break;
      }
     }
     if (n) {
      e = 0;
      d = 0;
     } else {
      e = o + (c[t + 20 >> 2] << 4) | 0;
      d = o + (c[t + 16 >> 2] << 4) | 0;
     }
     l = d;
     d = e - d >> 4;
     d : while (1) {
      while (1) {
       if (!d) break d;
       j = (d | 0) / 2 | 0;
       k = l + (j << 4) | 0;
       if ((c[k >> 2] | 0) == (p | 0)) {
        d = j;
        continue;
       }
       f = c[l + (j << 4) + 4 >> 2] | 0;
       f = (f | 0) == 0 ? 8216 : f;
       g = c[r >> 2] | 0;
       g = (g | 0) == 0 ? 8216 : g;
       h = a[f >> 0] | 0;
       e = a[g >> 0] | 0;
       if (h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != e << 24 >> 24) f = h; else {
        do {
         f = f + 1 | 0;
         g = g + 1 | 0;
         h = a[f >> 0] | 0;
         e = a[g >> 0] | 0;
        } while (!(h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != e << 24 >> 24));
        f = h;
       }
       if ((f & 255) < (e & 255)) break; else d = j;
      }
      l = k + 16 | 0;
      d = d + -1 - j | 0;
     }
     e = l + 8 | 0;
     if ((l | 0) == (u | 0)) break;
     d = c[e >> 2] | 0;
     if (d | 0) {
      J = c[d >> 2] | 0;
      c[d >> 2] = J - 1;
      if ((J | 0) == 1) {
       qf(c[e >> 2] | 0);
       c[e >> 2] = 0;
       d = l + 12 | 0;
       c[d >> 2] = 0;
      } else d = l + 12 | 0;
      c[e >> 2] = 0;
      c[d >> 2] = 0;
     }
     d = c[s >> 2] | 0;
     c[e >> 2] = d;
     c[l + 12 >> 2] = c[u + 12 >> 2];
     if (!d) break;
     J = d;
     c[J >> 2] = (c[J >> 2] | 0) + 1;
    } while (0);
    if ((K | 0) == 138) {
     K = 0;
     c[M >> 2] = e;
     c[w >> 2] = d;
     if (e | 0) {
      J = e;
      c[J >> 2] = (c[J >> 2] | 0) + 1;
     }
     d = c[s >> 2] | 0;
     c[x >> 2] = d;
     c[y >> 2] = c[u + 12 >> 2];
     if (d | 0) {
      J = d;
      c[J >> 2] = (c[J >> 2] | 0) + 1;
     }
     zb(q, M);
     d = c[x >> 2] | 0;
     if (d | 0) {
      J = c[d >> 2] | 0;
      c[d >> 2] = J - 1;
      if ((J | 0) == 1) {
       qf(c[x >> 2] | 0);
       c[x >> 2] = 0;
       c[y >> 2] = 0;
      }
      c[x >> 2] = 0;
      c[y >> 2] = 0;
     }
     d = c[M >> 2] | 0;
     if (d | 0) {
      J = c[d >> 2] | 0;
      c[d >> 2] = J - 1;
      if ((J | 0) == 1) {
       qf(c[M >> 2] | 0);
       c[M >> 2] = 0;
       c[w >> 2] = 0;
      }
      c[M >> 2] = 0;
      c[w >> 2] = 0;
     }
    }
    a[t >> 0] = 0;
    u = u + 16 | 0;
   } while ((u | 0) != (v | 0));
  }
 }
 d = c[aa + 28 >> 2] | 0;
 if (d | 0) {
  e = c[aa + 36 >> 2] | 0;
  J = c[aa + 40 >> 2] | 0;
  n = d + (J << 5) | 0;
  if ((e | 0) != (J | 0)) {
   o = O + 16 | 0;
   p = L + 16 | 0;
   q = M + 8 | 0;
   r = M + 24 | 0;
   m = d + (e << 5) | 0;
   do {
    d = m + 24 | 0;
    e = c[d >> 2] | 0;
    do if (!e) c[o >> 2] = 0; else if ((e | 0) == (m + 8 | 0)) {
     c[o >> 2] = O;
     J = c[d >> 2] | 0;
     Ra[c[(c[J >> 2] | 0) + 12 >> 2] & 255](J, O);
     break;
    } else {
     c[o >> 2] = Sa[c[(c[e >> 2] | 0) + 8 >> 2] & 255](e) | 0;
     break;
    } while (0);
    e = c[1642] | 0;
    d = e + 36 | 0;
    do {} while ((a[d >> 0] & 1) != 0);
    k = e + 40 | 0;
    c[k >> 2] = (c[k >> 2] | 0) + 1;
    d = c[e + 44 >> 2] | 0;
    if (!d) {
     j = 0;
     d = 0;
    } else {
     j = d + (c[e + 56 >> 2] << 5) | 0;
     d = d + (c[e + 52 >> 2] << 5) | 0;
    }
    h = c[m >> 2] | 0;
    g = d;
    d = j - d >> 5;
    e : while (1) {
     while (1) {
      if (!d) break e;
      e = (d | 0) / 2 | 0;
      f = g + (e << 5) | 0;
      if ((c[f >> 2] | 0) >>> 0 < h >>> 0) break; else d = e;
     }
     g = f + 32 | 0;
     d = d + -1 - e | 0;
    }
    if ((g | 0) == (j | 0)) l = 0; else l = h >>> 0 >= (c[g >> 2] | 0) >>> 0;
    c[k >> 2] = (c[k >> 2] | 0) - 1;
    g = c[1642] | 0;
    d = c[o >> 2] | 0;
    do if (!d) c[p >> 2] = 0; else if ((d | 0) == (O | 0)) {
     c[p >> 2] = L;
     Ra[c[(c[O >> 2] | 0) + 12 >> 2] & 255](O, L);
     break;
    } else {
     c[p >> 2] = Sa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d) | 0;
     break;
    } while (0);
    f = g + 36 | 0;
    do {
     J = a[f >> 0] | 0;
     a[f >> 0] = 1;
    } while ((J & 1) != 0);
    j = g + 40 | 0;
    do {} while ((c[j >> 2] | 0) > 0);
    d = g + 44 | 0;
    Se(M, m);
    e = c[p >> 2] | 0;
    do if (!e) c[r >> 2] = 0; else if ((e | 0) == (L | 0)) {
     c[r >> 2] = q;
     Ra[c[(c[L >> 2] | 0) + 12 >> 2] & 255](L, q);
     break;
    } else {
     c[r >> 2] = Sa[c[(c[e >> 2] | 0) + 8 >> 2] & 255](e) | 0;
     break;
    } while (0);
    pb(d, M);
    d = c[r >> 2] | 0;
    do if ((d | 0) == (q | 0)) Qa[c[(c[q >> 2] | 0) + 16 >> 2] & 255](q); else {
     if (!d) break;
     Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
    } while (0);
    a[f >> 0] = 0;
    do {} while ((a[f >> 0] & 1) != 0);
    c[j >> 2] = (c[j >> 2] | 0) + 1;
    d = c[g + 44 >> 2] | 0;
    if (!d) {
     e = 0;
     d = 0;
    } else {
     e = d + (c[g + 56 >> 2] << 5) | 0;
     d = d + (c[g + 52 >> 2] << 5) | 0;
    }
    h = c[m >> 2] | 0;
    g = d;
    d = e - d >> 5;
    f : while (1) {
     while (1) {
      if (!d) break f;
      e = (d | 0) / 2 | 0;
      f = g + (e << 5) | 0;
      if ((c[f >> 2] | 0) >>> 0 < h >>> 0) break; else d = e;
     }
     g = f + 32 | 0;
     d = d + -1 - e | 0;
    }
    d = c[g + 24 >> 2] | 0;
    d = Sa[c[(c[d >> 2] | 0) + 24 >> 2] & 255](d) | 0;
    Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
    c[j >> 2] = (c[j >> 2] | 0) - 1;
    Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, m);
    do if (d | 0) {
     I = d + 4 | 0;
     J = c[I >> 2] | 0;
     c[I >> 2] = J - 1;
     if ((J | 0) != 1) break;
     Qa[c[c[d >> 2] >> 2] & 255](d);
    } while (0);
    d = c[p >> 2] | 0;
    do if ((d | 0) == (L | 0)) Qa[c[(c[L >> 2] | 0) + 16 >> 2] & 255](L); else {
     if (!d) break;
     Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
    } while (0);
    if (l) {
     d = pf(20) | 0;
     e = d + 4 | 0;
     c[e >> 2] = 0;
     a[d + 12 >> 0] = 0;
     a[d + 13 >> 0] = 0;
     f = d + 16 | 0;
     c[f >> 2] = 0;
     c[d >> 2] = 1460;
     c[d + 8 >> 2] = 5;
     if (d | 0) c[e >> 2] = (c[e >> 2] | 0) + 1;
     c[M >> 2] = d;
     if ((f | 0) != (m | 0)) {
      c[f >> 2] = 0;
      Se(f, m);
     }
     d = c[(c[1642] | 0) + 76 >> 2] | 0;
     Wa[c[(c[d >> 2] | 0) + 4 >> 2] & 255](d, M) | 0;
     d = c[M >> 2] | 0;
     if (d | 0) {
      I = d + 4 | 0;
      J = c[I >> 2] | 0;
      c[I >> 2] = J - 1;
      if ((J | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
      c[M >> 2] = 0;
     }
    } else {
     d = pf(20) | 0;
     e = d + 4 | 0;
     c[e >> 2] = 0;
     a[d + 12 >> 0] = 0;
     a[d + 13 >> 0] = 0;
     f = d + 16 | 0;
     c[f >> 2] = 0;
     c[d >> 2] = 1440;
     c[d + 8 >> 2] = 6;
     if (d | 0) c[e >> 2] = (c[e >> 2] | 0) + 1;
     c[M >> 2] = d;
     if ((f | 0) != (m | 0)) {
      c[f >> 2] = 0;
      Se(f, m);
     }
     d = c[(c[1642] | 0) + 76 >> 2] | 0;
     Wa[c[(c[d >> 2] | 0) + 4 >> 2] & 255](d, M) | 0;
     d = c[M >> 2] | 0;
     if (d | 0) {
      I = d + 4 | 0;
      J = c[I >> 2] | 0;
      c[I >> 2] = J - 1;
      if ((J | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
      c[M >> 2] = 0;
     }
    }
    d = c[o >> 2] | 0;
    do if ((d | 0) == (O | 0)) Qa[c[(c[O >> 2] | 0) + 16 >> 2] & 255](O); else {
     if (!d) break;
     Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
    } while (0);
    m = m + 32 | 0;
   } while ((m | 0) != (n | 0));
  }
 }
 J = c[1904] | 0;
 d = N + 16 | 0;
 c[d >> 2] = N;
 c[N >> 2] = 1404;
 J = Qe(J, N) | 0;
 c[(c[1642] | 0) + 72 >> 2] = J;
 d = c[d >> 2] | 0;
 do if ((d | 0) == (N | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 Gc(C, 2244);
 d = D + 16 | 0;
 c[d >> 2] = D;
 c[D >> 2] = 1224;
 e = B + 16 | 0;
 c[e >> 2] = 0;
 zc(C, D, B);
 e = c[e >> 2] | 0;
 do if ((e | 0) == (B | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else {
  if (!e) break;
  Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
 } while (0);
 d = c[d >> 2] | 0;
 do if ((d | 0) == (D | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 c[C >> 2] = 0;
 Gc(F, 2261);
 d = G + 16 | 0;
 c[d >> 2] = G;
 c[G >> 2] = 1260;
 e = E + 16 | 0;
 c[e >> 2] = 0;
 zc(F, G, E);
 e = c[e >> 2] | 0;
 do if ((e | 0) == (E | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else {
  if (!e) break;
  Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
 } while (0);
 d = c[d >> 2] | 0;
 do if ((d | 0) == (G | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 c[F >> 2] = 0;
 Gc(T, 2244);
 Gc(T + 40 | 0, 2261);
 Gc(T + 80 | 0, 2278);
 m = T + 120 | 0;
 l = pf(120) | 0;
 d = 3;
 J = 0;
 n = T;
 while (1) {
  do if ((d | 0) == (J | 0)) {
   I = J >> 1;
   I = (I | 0) < 16 ? 16 : (I | 0) > 65536 ? 65536 : I;
   k = I + J | 0;
   if (!I) break;
   e = pf(k * 40 | 0) | 0;
   if ((J | 0) > 0) {
    g = e;
    h = 0;
    j = l;
    while (1) {
     c[g >> 2] = 0;
     if ((j | 0) == (g | 0)) d = j; else {
      c[g >> 2] = 0;
      Se(g, j);
      c[j >> 2] = 0;
      d = j;
     }
     o = j + 4 | 0;
     b[g + 4 >> 1] = b[o >> 1] | 0;
     b[g + 6 >> 1] = b[j + 6 >> 1] | 0;
     b[g + 8 >> 1] = b[j + 8 >> 1] | 0;
     b[g + 10 >> 1] = b[j + 10 >> 1] | 0;
     b[g + 12 >> 1] = b[j + 12 >> 1] | 0;
     b[g + 14 >> 1] = b[j + 14 >> 1] | 0;
     b[g + 16 >> 1] = b[j + 16 >> 1] | 0;
     b[g + 18 >> 1] = b[j + 18 >> 1] | 0;
     b[g + 20 >> 1] = b[j + 20 >> 1] | 0;
     b[g + 22 >> 1] = b[j + 22 >> 1] | 0;
     b[g + 24 >> 1] = b[j + 24 >> 1] | 0;
     b[g + 26 >> 1] = b[j + 26 >> 1] | 0;
     b[g + 28 >> 1] = b[j + 28 >> 1] | 0;
     b[g + 30 >> 1] = b[j + 30 >> 1] | 0;
     b[g + 32 >> 1] = b[j + 32 >> 1] | 0;
     b[g + 34 >> 1] = b[j + 34 >> 1] | 0;
     f = j + 36 | 0;
     a[g + 36 >> 0] = a[f >> 0] | 0;
     g = g + 40 | 0;
     p = o + 32 | 0;
     do {
      b[o >> 1] = 65535;
      o = o + 2 | 0;
     } while ((o | 0) < (p | 0));
     a[f >> 0] = 0;
     c[d >> 2] = 0;
     h = h + 1 | 0;
     if ((h | 0) == (J | 0)) break; else j = j + 40 | 0;
    }
   }
   if (l | 0) qf(l);
   l = e;
   d = k;
  } while (0);
  I = J + 1 | 0;
  Se(l + (J * 40 | 0) | 0, n);
  a[l + (J * 40 | 0) + 36 >> 0] = a[n + 36 >> 0] | 0;
  b[l + (J * 40 | 0) + 4 >> 1] = b[n + 4 >> 1] | 0;
  b[l + (J * 40 | 0) + 6 >> 1] = b[n + 6 >> 1] | 0;
  b[l + (J * 40 | 0) + 8 >> 1] = b[n + 8 >> 1] | 0;
  b[l + (J * 40 | 0) + 10 >> 1] = b[n + 10 >> 1] | 0;
  b[l + (J * 40 | 0) + 12 >> 1] = b[n + 12 >> 1] | 0;
  b[l + (J * 40 | 0) + 14 >> 1] = b[n + 14 >> 1] | 0;
  b[l + (J * 40 | 0) + 16 >> 1] = b[n + 16 >> 1] | 0;
  b[l + (J * 40 | 0) + 18 >> 1] = b[n + 18 >> 1] | 0;
  b[l + (J * 40 | 0) + 20 >> 1] = b[n + 20 >> 1] | 0;
  b[l + (J * 40 | 0) + 22 >> 1] = b[n + 22 >> 1] | 0;
  b[l + (J * 40 | 0) + 24 >> 1] = b[n + 24 >> 1] | 0;
  b[l + (J * 40 | 0) + 26 >> 1] = b[n + 26 >> 1] | 0;
  b[l + (J * 40 | 0) + 28 >> 1] = b[n + 28 >> 1] | 0;
  b[l + (J * 40 | 0) + 30 >> 1] = b[n + 30 >> 1] | 0;
  b[l + (J * 40 | 0) + 32 >> 1] = b[n + 32 >> 1] | 0;
  b[l + (J * 40 | 0) + 34 >> 1] = b[n + 34 >> 1] | 0;
  n = n + 40 | 0;
  if ((n | 0) == (m | 0)) break; else J = I;
 }
 G = S + 16 | 0;
 c[G >> 2] = S;
 c[S >> 2] = 1296;
 F = R + 16 | 0;
 c[F >> 2] = 0;
 x = c[1642] | 0;
 c[Q + 16 >> 2] = Q;
 Sb(S, Q);
 d = c[F >> 2] | 0;
 do if (!d) {
  E = P + 16 | 0;
  c[E >> 2] = 0;
 } else if ((d | 0) == (R | 0)) {
  E = P + 16 | 0;
  c[E >> 2] = P;
  Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, P);
  break;
 } else {
  E = P + 16 | 0;
  c[E >> 2] = Sa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d) | 0;
  break;
 } while (0);
 c[O >> 2] = 0;
 c[O + 4 >> 2] = 0;
 c[O + 8 >> 2] = 0;
 c[O + 12 >> 2] = 0;
 A = O + 16 | 0;
 c[A >> 2] = 16;
 B = O + 20 | 0;
 c[B >> 2] = 65536;
 z = O + 40 | 0;
 c[z >> 2] = 0;
 y = O + 64 | 0;
 c[y >> 2] = 0;
 D = O + 12 | 0;
 C = O + 8 | 0;
 m = O + 4 | 0;
 if ((J | 0) > -1) {
  c[O >> 2] = pf(I << 2) | 0;
  c[m >> 2] = I;
  c[C >> 2] = 0;
  c[D >> 2] = 0;
 }
 H = (l | 0) == 0;
 do if (!H) {
  n = l + (I * 40 | 0) | 0;
  if (!I) break;
  q = O + 24 | 0;
  r = Q + 16 | 0;
  s = L + 16 | 0;
  t = O + 48 | 0;
  u = P + 16 | 0;
  v = L + 16 | 0;
  w = l;
  do {
   d = pf(112) | 0;
   e = d + 4 | 0;
   c[e >> 2] = 0;
   f = d + 8 | 0;
   a[d + 12 >> 0] = 0;
   a[d + 13 >> 0] = 0;
   g = d + 16 | 0;
   c[g >> 2] = 0;
   h = d + 52 | 0;
   a[h >> 0] = 0;
   j = d + 20 | 0;
   o = j;
   p = o + 32 | 0;
   do {
    b[o >> 1] = 65535;
    o = o + 2 | 0;
   } while ((o | 0) < (p | 0));
   p = d + 68 | 0;
   a[d + 96 >> 0] = 0;
   K = d + 84 | 0;
   c[p >> 2] = 0;
   c[p + 4 >> 2] = 0;
   c[p + 8 >> 2] = 0;
   c[p + 12 >> 2] = 0;
   b[K >> 1] = 65535;
   b[K + 2 >> 1] = 65535;
   b[K + 4 >> 1] = 65535;
   b[K + 6 >> 1] = 65535;
   b[K + 8 >> 1] = 65535;
   b[K + 10 >> 1] = 65535;
   c[d + 104 >> 2] = 0;
   c[d + 108 >> 2] = 0;
   a[d + 56 >> 0] = 1;
   a[d + 57 >> 0] = 1;
   c[d + 60 >> 2] = 0;
   c[d + 64 >> 2] = -1;
   c[d + 100 >> 2] = -1;
   c[d >> 2] = 1500;
   c[f >> 2] = 1;
   if (d | 0) c[e >> 2] = (c[e >> 2] | 0) + 1;
   c[N >> 2] = d;
   if ((w | 0) != (g | 0)) {
    c[g >> 2] = 0;
    Se(g, w);
    b[j >> 1] = b[w + 4 >> 1] | 0;
    b[d + 22 >> 1] = b[w + 6 >> 1] | 0;
    b[d + 24 >> 1] = b[w + 8 >> 1] | 0;
    b[d + 26 >> 1] = b[w + 10 >> 1] | 0;
    b[d + 28 >> 1] = b[w + 12 >> 1] | 0;
    b[d + 30 >> 1] = b[w + 14 >> 1] | 0;
    b[d + 32 >> 1] = b[w + 16 >> 1] | 0;
    b[d + 34 >> 1] = b[w + 18 >> 1] | 0;
    b[d + 36 >> 1] = b[w + 20 >> 1] | 0;
    b[d + 38 >> 1] = b[w + 22 >> 1] | 0;
    b[d + 40 >> 1] = b[w + 24 >> 1] | 0;
    b[d + 42 >> 1] = b[w + 26 >> 1] | 0;
    b[d + 44 >> 1] = b[w + 28 >> 1] | 0;
    b[d + 46 >> 1] = b[w + 30 >> 1] | 0;
    b[d + 48 >> 1] = b[w + 32 >> 1] | 0;
    b[d + 50 >> 1] = b[w + 34 >> 1] | 0;
    a[h >> 0] = a[w + 36 >> 0] | 0;
   }
   f = c[(c[1642] | 0) + 76 >> 2] | 0;
   Wa[c[(c[f >> 2] | 0) + 4 >> 2] & 255](f, N) | 0;
   f = c[m >> 2] | 0;
   d = c[D >> 2] | 0;
   do if ((f | 0) == (d | 0)) {
    d = f >> 1;
    e = c[A >> 2] | 0;
    if ((d | 0) >= (e | 0)) {
     e = c[B >> 2] | 0;
     e = (d | 0) > (e | 0) ? e : d;
    }
    k = e + f | 0;
    if (!e) {
     d = f;
     break;
    }
    d = f - (c[C >> 2] | 0) | 0;
    e = pf(k << 2) | 0;
    f = c[O >> 2] | 0;
    if ((d | 0) > 0) {
     g = e;
     h = 0;
     j = f + (c[C >> 2] << 2) | 0;
     while (1) {
      c[g >> 2] = c[j >> 2];
      c[j >> 2] = 0;
      h = h + 1 | 0;
      if ((h | 0) == (d | 0)) break; else {
       g = g + 4 | 0;
       j = j + 4 | 0;
      }
     }
    }
    if (f | 0) qf(f);
    c[O >> 2] = e;
    c[m >> 2] = k;
    c[C >> 2] = 0;
    c[D >> 2] = d;
   } while (0);
   c[D >> 2] = d + 1;
   e = c[N >> 2] | 0;
   c[(c[O >> 2] | 0) + (d << 2) >> 2] = e;
   if (e | 0) {
    K = e + 4 | 0;
    c[K >> 2] = (c[K >> 2] | 0) + 1;
   }
   d = c[r >> 2] | 0;
   do if (!d) {
    c[s >> 2] = 0;
    d = c[z >> 2] | 0;
    if ((d | 0) == (q | 0)) K = 381; else {
     e = 0;
     K = 382;
    }
   } else {
    if ((d | 0) == (Q | 0)) {
     c[s >> 2] = L;
     Ra[c[(c[Q >> 2] | 0) + 12 >> 2] & 255](Q, L);
     f = c[s >> 2] | 0;
    } else {
     f = Sa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d) | 0;
     c[s >> 2] = f;
    }
    e = f;
    d = c[z >> 2] | 0;
    g = (d | 0) == (q | 0);
    if ((f | 0) != (L | 0)) if (g) {
     K = 381;
     break;
    } else {
     K = 382;
     break;
    }
    if (g) {
     Ra[c[(c[L >> 2] | 0) + 12 >> 2] & 255](L, M);
     d = c[s >> 2] | 0;
     Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
     c[s >> 2] = 0;
     d = c[z >> 2] | 0;
     Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, L);
     d = c[z >> 2] | 0;
     Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
     c[z >> 2] = 0;
     c[s >> 2] = L;
     Ra[c[(c[M >> 2] | 0) + 12 >> 2] & 255](M, q);
     Qa[c[(c[M >> 2] | 0) + 16 >> 2] & 255](M);
     c[z >> 2] = q;
     d = c[s >> 2] | 0;
     K = 383;
     break;
    } else {
     Ra[c[(c[L >> 2] | 0) + 12 >> 2] & 255](L, q);
     d = c[s >> 2] | 0;
     Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
     d = c[z >> 2] | 0;
     c[s >> 2] = d;
     c[z >> 2] = q;
     K = 383;
     break;
    }
   } while (0);
   if ((K | 0) == 381) {
    Ra[c[(c[q >> 2] | 0) + 12 >> 2] & 255](q, L);
    p = c[z >> 2] | 0;
    Qa[c[(c[p >> 2] | 0) + 16 >> 2] & 255](p);
    c[z >> 2] = c[s >> 2];
    c[s >> 2] = L;
    K = 384;
   } else if ((K | 0) == 382) {
    c[s >> 2] = d;
    c[z >> 2] = e;
    K = 383;
   }
   do if ((K | 0) == 383) {
    K = 0;
    if ((d | 0) == (L | 0)) {
     K = 384;
     break;
    }
    if (!d) break;
    Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
   } while (0);
   if ((K | 0) == 384) Qa[c[(c[L >> 2] | 0) + 16 >> 2] & 255](L);
   d = c[u >> 2] | 0;
   do if (!d) {
    c[v >> 2] = 0;
    d = c[y >> 2] | 0;
    if ((d | 0) == (t | 0)) K = 397; else {
     e = 0;
     K = 398;
    }
   } else {
    if ((d | 0) == (P | 0)) {
     c[v >> 2] = L;
     Ra[c[(c[P >> 2] | 0) + 12 >> 2] & 255](P, L);
     f = c[v >> 2] | 0;
    } else {
     f = Sa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d) | 0;
     c[v >> 2] = f;
    }
    e = f;
    d = c[y >> 2] | 0;
    g = (d | 0) == (t | 0);
    if ((f | 0) != (L | 0)) if (g) {
     K = 397;
     break;
    } else {
     K = 398;
     break;
    }
    if (g) {
     Ra[c[(c[L >> 2] | 0) + 12 >> 2] & 255](L, M);
     d = c[v >> 2] | 0;
     Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
     c[v >> 2] = 0;
     d = c[y >> 2] | 0;
     Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, L);
     d = c[y >> 2] | 0;
     Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
     c[y >> 2] = 0;
     c[v >> 2] = L;
     Ra[c[(c[M >> 2] | 0) + 12 >> 2] & 255](M, t);
     Qa[c[(c[M >> 2] | 0) + 16 >> 2] & 255](M);
     c[y >> 2] = t;
     d = c[v >> 2] | 0;
     K = 399;
     break;
    } else {
     Ra[c[(c[L >> 2] | 0) + 12 >> 2] & 255](L, t);
     d = c[v >> 2] | 0;
     Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
     d = c[y >> 2] | 0;
     c[v >> 2] = d;
     c[y >> 2] = t;
     K = 399;
     break;
    }
   } while (0);
   if ((K | 0) == 397) {
    Ra[c[(c[t >> 2] | 0) + 12 >> 2] & 255](t, L);
    p = c[y >> 2] | 0;
    Qa[c[(c[p >> 2] | 0) + 16 >> 2] & 255](p);
    c[y >> 2] = c[v >> 2];
    c[v >> 2] = L;
    K = 400;
   } else if ((K | 0) == 398) {
    c[v >> 2] = d;
    c[y >> 2] = e;
    K = 399;
   }
   do if ((K | 0) == 399) {
    K = 0;
    if ((d | 0) == (L | 0)) {
     K = 400;
     break;
    }
    if (!d) break;
    Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
   } while (0);
   if ((K | 0) == 400) {
    K = 0;
    Qa[c[(c[L >> 2] | 0) + 16 >> 2] & 255](L);
   }
   d = c[N >> 2] | 0;
   if (d | 0) {
    o = d + 4 | 0;
    p = c[o >> 2] | 0;
    c[o >> 2] = p - 1;
    if ((p | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
    c[N >> 2] = 0;
   }
   w = w + 40 | 0;
  } while ((w | 0) != (n | 0));
 } while (0);
 u = x + 104 | 0;
 t = x + 108 | 0;
 f = c[t >> 2] | 0;
 v = x + 116 | 0;
 d = c[v >> 2] | 0;
 do if ((f | 0) == (d | 0)) {
  d = f >> 1;
  e = c[x + 120 >> 2] | 0;
  if ((d | 0) >= (e | 0)) {
   e = c[x + 124 >> 2] | 0;
   e = (d | 0) > (e | 0) ? e : d;
  }
  s = e + f | 0;
  if (!e) {
   r = f;
   break;
  }
  q = x + 112 | 0;
  r = f - (c[q >> 2] | 0) | 0;
  p = pf(s * 72 | 0) | 0;
  if ((r | 0) > 0) {
   m = p;
   n = 0;
   o = (c[u >> 2] | 0) + ((c[q >> 2] | 0) * 72 | 0) | 0;
   do {
    c[m >> 2] = 0;
    c[m + 4 >> 2] = 0;
    c[m + 8 >> 2] = 0;
    c[m + 12 >> 2] = 0;
    j = o + 16 | 0;
    c[m + 16 >> 2] = c[j >> 2];
    k = o + 20 | 0;
    c[m + 20 >> 2] = c[k >> 2];
    if ((o | 0) != (m | 0)) {
     c[m >> 2] = 0;
     c[m + 4 >> 2] = 0;
     c[m + 8 >> 2] = 0;
     c[m + 12 >> 2] = 0;
     c[m >> 2] = c[o >> 2];
     c[m + 4 >> 2] = c[o + 4 >> 2];
     c[m + 8 >> 2] = c[o + 8 >> 2];
     c[m + 12 >> 2] = c[o + 12 >> 2];
     c[o >> 2] = 0;
     c[o + 4 >> 2] = 0;
     c[o + 8 >> 2] = 0;
     c[o + 12 >> 2] = 0;
    }
    d = m + 24 | 0;
    h = o + 40 | 0;
    e = c[h >> 2] | 0;
    do if (!e) c[m + 40 >> 2] = 0; else if ((e | 0) == (o + 24 | 0)) {
     c[m + 40 >> 2] = d;
     N = c[h >> 2] | 0;
     Ra[c[(c[N >> 2] | 0) + 12 >> 2] & 255](N, d);
     break;
    } else {
     c[m + 40 >> 2] = e;
     c[h >> 2] = 0;
     break;
    } while (0);
    e = m + 48 | 0;
    g = o + 64 | 0;
    f = c[g >> 2] | 0;
    do if (!f) {
     c[m + 64 >> 2] = 0;
     d = o + 48 | 0;
     K = 287;
    } else {
     d = o + 48 | 0;
     if ((f | 0) == (d | 0)) {
      c[m + 64 >> 2] = e;
      d = c[g >> 2] | 0;
      Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, e);
      d = f;
      K = 287;
      break;
     } else {
      c[m + 64 >> 2] = f;
      c[g >> 2] = 0;
      e = 0;
      break;
     }
    } while (0);
    m = m + 72 | 0;
    if ((K | 0) == 287) {
     K = 0;
     e = c[g >> 2] | 0;
    }
    do if ((e | 0) == (d | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else {
     if (!e) break;
     Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
    } while (0);
    e = o + 24 | 0;
    d = c[h >> 2] | 0;
    do if ((d | 0) == (e | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else {
     if (!d) break;
     Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
    } while (0);
    c[j >> 2] = 0;
    c[k >> 2] = 0;
    e = c[o >> 2] | 0;
    j = o + 8 | 0;
    if (!e) d = o + 12 | 0; else {
     g = c[j >> 2] | 0;
     d = o + 12 | 0;
     f = c[d >> 2] | 0;
     if ((g | 0) < (f | 0)) {
      h = g;
      while (1) {
       e = e + (h << 2) | 0;
       g = c[e >> 2] | 0;
       if (g) {
        M = g + 4 | 0;
        N = c[M >> 2] | 0;
        c[M >> 2] = N - 1;
        if ((N | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
        c[e >> 2] = 0;
        f = c[d >> 2] | 0;
       }
       g = h + 1 | 0;
       if ((g | 0) >= (f | 0)) break;
       e = c[o >> 2] | 0;
       h = g;
      }
      e = c[o >> 2] | 0;
     }
     qf(e);
    }
    c[o >> 2] = 0;
    c[o + 4 >> 2] = 0;
    o = o + 72 | 0;
    c[j >> 2] = 0;
    c[d >> 2] = 0;
    n = n + 1 | 0;
   } while ((n | 0) != (r | 0));
  }
  d = c[u >> 2] | 0;
  if (d | 0) qf(d);
  c[u >> 2] = p;
  c[t >> 2] = s;
  c[q >> 2] = 0;
  c[v >> 2] = r;
 } else r = d; while (0);
 c[v >> 2] = r + 1;
 q = c[u >> 2] | 0;
 m = q + (r * 72 | 0) | 0;
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 c[m + 12 >> 2] = 0;
 c[q + (r * 72 | 0) + 16 >> 2] = c[A >> 2];
 c[q + (r * 72 | 0) + 20 >> 2] = c[B >> 2];
 do if ((O | 0) != (m | 0)) {
  p = q + (r * 72 | 0) + 8 | 0;
  c[m >> 2] = 0;
  n = q + (r * 72 | 0) + 4 | 0;
  c[n >> 2] = 0;
  c[p >> 2] = 0;
  c[q + (r * 72 | 0) + 12 >> 2] = 0;
  f = c[D >> 2] | 0;
  d = c[C >> 2] | 0;
  o = f - d | 0;
  if ((o | 0) <= 0) break;
  if ((f | 0) == (d | 0)) g = 0; else {
   d = q + (r * 72 | 0) + 12 | 0;
   e = c[d >> 2] | 0;
   g = pf(o << 2) | 0;
   f = c[m >> 2] | 0;
   if ((e | 0) > 0) {
    h = g;
    j = 0;
    k = f + (c[p >> 2] << 2) | 0;
    while (1) {
     c[h >> 2] = c[k >> 2];
     c[k >> 2] = 0;
     j = j + 1 | 0;
     if ((j | 0) == (e | 0)) break; else {
      h = h + 4 | 0;
      k = k + 4 | 0;
     }
    }
   }
   if (f | 0) qf(f);
   c[m >> 2] = g;
   c[n >> 2] = o;
   c[p >> 2] = 0;
   c[d >> 2] = e;
   f = c[D >> 2] | 0;
   d = c[C >> 2] | 0;
  }
  h = f - d | 0;
  if ((h | 0) > 0) {
   d = (c[O >> 2] | 0) + (d << 2) | 0;
   f = 0;
   while (1) {
    e = c[d >> 2] | 0;
    c[g >> 2] = e;
    if (e | 0) {
     N = e + 4 | 0;
     c[N >> 2] = (c[N >> 2] | 0) + 1;
    }
    f = f + 1 | 0;
    if ((f | 0) == (h | 0)) break; else {
     g = g + 4 | 0;
     d = d + 4 | 0;
    }
   }
   f = c[D >> 2] | 0;
   e = c[p >> 2] | 0;
   d = c[C >> 2] | 0;
  } else e = 0;
  c[q + (r * 72 | 0) + 12 >> 2] = f + e - d;
 } while (0);
 d = q + (r * 72 | 0) + 24 | 0;
 e = c[z >> 2] | 0;
 do if (!e) c[q + (r * 72 | 0) + 40 >> 2] = 0; else if ((e | 0) == (O + 24 | 0)) {
  c[q + (r * 72 | 0) + 40 >> 2] = d;
  N = c[z >> 2] | 0;
  Ra[c[(c[N >> 2] | 0) + 12 >> 2] & 255](N, d);
  break;
 } else {
  c[q + (r * 72 | 0) + 40 >> 2] = Sa[c[(c[e >> 2] | 0) + 8 >> 2] & 255](e) | 0;
  break;
 } while (0);
 d = q + (r * 72 | 0) + 48 | 0;
 f = c[y >> 2] | 0;
 do if (!f) {
  c[q + (r * 72 | 0) + 64 >> 2] = 0;
  e = O + 48 | 0;
 } else {
  e = O + 48 | 0;
  if ((f | 0) == (e | 0)) {
   c[q + (r * 72 | 0) + 64 >> 2] = d;
   N = c[y >> 2] | 0;
   Ra[c[(c[N >> 2] | 0) + 12 >> 2] & 255](N, d);
   break;
  } else {
   c[q + (r * 72 | 0) + 64 >> 2] = Sa[c[(c[f >> 2] | 0) + 8 >> 2] & 255](f) | 0;
   break;
  }
 } while (0);
 d = c[y >> 2] | 0;
 do if ((d | 0) == (e | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 e = O + 24 | 0;
 d = c[z >> 2] | 0;
 do if ((d | 0) == (e | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 c[A >> 2] = 0;
 c[B >> 2] = 0;
 d = c[O >> 2] | 0;
 if (d | 0) {
  f = c[C >> 2] | 0;
  e = c[D >> 2] | 0;
  if ((f | 0) < (e | 0)) {
   g = f;
   while (1) {
    d = d + (g << 2) | 0;
    f = c[d >> 2] | 0;
    if (f) {
     M = f + 4 | 0;
     N = c[M >> 2] | 0;
     c[M >> 2] = N - 1;
     if ((N | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
     e = c[D >> 2] | 0;
    }
    f = g + 1 | 0;
    if ((f | 0) >= (e | 0)) break;
    d = c[O >> 2] | 0;
    g = f;
   }
   d = c[O >> 2] | 0;
  }
  qf(d);
 }
 d = c[E >> 2] | 0;
 do if ((d | 0) == (P | 0)) Qa[c[(c[P >> 2] | 0) + 16 >> 2] & 255](P); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 d = c[Q + 16 >> 2] | 0;
 do if ((d | 0) == (Q | 0)) Qa[c[(c[Q >> 2] | 0) + 16 >> 2] & 255](Q); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 d = c[F >> 2] | 0;
 do if ((d | 0) == (R | 0)) Qa[c[(c[R >> 2] | 0) + 16 >> 2] & 255](R); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 d = c[G >> 2] | 0;
 do if ((d | 0) == (S | 0)) Qa[c[(c[S >> 2] | 0) + 16 >> 2] & 255](S); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 if (!H) {
  if ((J | 0) > -1) {
   d = 0;
   do {
    c[l + (d * 40 | 0) >> 2] = 0;
    d = d + 1 | 0;
   } while ((d | 0) != (I | 0));
  }
  qf(l);
 }
 c[T + 80 >> 2] = 0;
 c[T + 40 >> 2] = 0;
 c[T >> 2] = 0;
 Gc(V, 2295);
 d = W + 16 | 0;
 c[d >> 2] = W;
 c[W >> 2] = 1332;
 e = U + 16 | 0;
 c[e >> 2] = U;
 c[U >> 2] = 1368;
 zc(V, W, U);
 e = c[e >> 2] | 0;
 do if ((e | 0) == (U | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else {
  if (!e) break;
  Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
 } while (0);
 d = c[d >> 2] | 0;
 do if ((d | 0) == (W | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else {
  if (!d) break;
  Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 } while (0);
 c[V >> 2] = 0;
 c[X >> 2] = 0;
 c[Y >> 2] = 0;
 e = c[$ >> 2] | 0;
 h = aa + 36 | 0;
 if (!e) d = aa + 40 | 0; else {
  f = c[h >> 2] | 0;
  d = aa + 40 | 0;
  if ((f | 0) < (c[d >> 2] | 0)) {
   while (1) {
    g = c[e + (f << 5) + 24 >> 2] | 0;
    do if ((g | 0) == (e + (f << 5) + 8 | 0)) Qa[c[(c[g >> 2] | 0) + 16 >> 2] & 255](g); else {
     if (!g) break;
     Qa[c[(c[g >> 2] | 0) + 20 >> 2] & 255](g);
    } while (0);
    c[e + (f << 5) >> 2] = 0;
    f = f + 1 | 0;
    if ((f | 0) >= (c[d >> 2] | 0)) break;
    e = c[$ >> 2] | 0;
   }
   e = c[$ >> 2] | 0;
  }
  qf(e);
 }
 c[$ >> 2] = 0;
 c[aa + 32 >> 2] = 0;
 c[h >> 2] = 0;
 c[d >> 2] = 0;
 c[Z >> 2] = 0;
 c[_ >> 2] = 0;
 d = c[aa >> 2] | 0;
 if (!d) {
  aa = aa + 12 | 0;
  c[aa >> 2] = 0;
  i = ba;
  return 4;
 }
 g = c[aa + 8 >> 2] | 0;
 h = aa + 12 | 0;
 if ((g | 0) < (c[h >> 2] | 0)) {
  f = d + (g << 4) + 8 | 0;
  e = c[f >> 2] | 0;
  if (e | 0) {
   $ = c[e >> 2] | 0;
   c[e >> 2] = $ - 1;
   if (($ | 0) == 1) {
    qf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    e = d + (g << 4) + 12 | 0;
    c[e >> 2] = 0;
   } else e = d + (g << 4) + 12 | 0;
   c[f >> 2] = 0;
   c[e >> 2] = 0;
  }
  f = d + (g << 4) | 0;
  e = c[f >> 2] | 0;
  if (e | 0) {
   $ = c[e >> 2] | 0;
   c[e >> 2] = $ - 1;
   if (($ | 0) == 1) {
    qf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    d = d + (g << 4) + 4 | 0;
    c[d >> 2] = 0;
   } else d = d + (g << 4) + 4 | 0;
   c[f >> 2] = 0;
   c[d >> 2] = 0;
  }
  d = g + 1 | 0;
  if ((d | 0) < (c[h >> 2] | 0)) do {
   g = c[aa >> 2] | 0;
   f = g + (d << 4) + 8 | 0;
   e = c[f >> 2] | 0;
   if (e | 0) {
    $ = c[e >> 2] | 0;
    c[e >> 2] = $ - 1;
    if (($ | 0) == 1) {
     qf(c[f >> 2] | 0);
     c[f >> 2] = 0;
     e = g + (d << 4) + 12 | 0;
     c[e >> 2] = 0;
    } else e = g + (d << 4) + 12 | 0;
    c[f >> 2] = 0;
    c[e >> 2] = 0;
   }
   f = g + (d << 4) | 0;
   e = c[f >> 2] | 0;
   if (e | 0) {
    $ = c[e >> 2] | 0;
    c[e >> 2] = $ - 1;
    if (($ | 0) == 1) {
     qf(c[f >> 2] | 0);
     c[f >> 2] = 0;
     e = g + (d << 4) + 4 | 0;
     c[e >> 2] = 0;
    } else e = g + (d << 4) + 4 | 0;
    c[f >> 2] = 0;
    c[e >> 2] = 0;
   }
   d = d + 1 | 0;
  } while ((d | 0) < (c[h >> 2] | 0));
  d = c[aa >> 2] | 0;
 }
 qf(d);
 aa = h;
 c[aa >> 2] = 0;
 i = ba;
 return 4;
}

function pf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 q = D;
 do if (a >>> 0 < 245) {
  p = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = p >>> 3;
  k = c[1927] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 7748 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[1927] = k & ~(1 << b); else {
    if (h >>> 0 < (c[1931] | 0) >>> 0) Ga();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else Ga();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[1929] | 0;
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
    d = 7748 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[1927] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[1931] | 0) >>> 0) Ga();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[1929] | 0;
      break;
     } else Ga();
    } while (0);
    h = (b << 3) - p | 0;
    c[g + 4 >> 2] = p | 3;
    e = g + p | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[1932] | 0;
     b = l >>> 3;
     d = 7748 + (b << 1 << 2) | 0;
     a = c[1927] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[1927] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[1929] = h;
    c[1932] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[1928] | 0;
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
    k = c[8012 + ((A | B | C | b | k) + (j >>> k) << 2) >> 2] | 0;
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
    f = c[1931] | 0;
    if (k >>> 0 < f >>> 0) Ga();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) Ga();
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
     if (b >>> 0 < f >>> 0) Ga(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Ga();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Ga();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      o = d;
      break;
     } else Ga();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 8012 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[1928] = c[1928] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1931] | 0) >>> 0) Ga();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[1931] | 0;
     if (o >>> 0 < b >>> 0) Ga();
     c[o + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Ga(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
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
     a = c[1929] | 0;
     if (a | 0) {
      e = c[1932] | 0;
      b = a >>> 3;
      d = 7748 + (b << 1 << 2) | 0;
      a = c[1927] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[1927] = a | b;
       r = d + 8 | 0;
       s = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = e;
      c[s + 12 >> 2] = e;
      c[e + 8 >> 2] = s;
      c[e + 12 >> 2] = d;
     }
     c[1929] = j;
     c[1932] = h;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) p = -1; else {
  a = a + 11 | 0;
  p = a & -8;
  k = c[1928] | 0;
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
   b = c[8012 + (j << 2) >> 2] | 0;
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
     a = c[8012 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (j >>> 0 < ((c[1929] | 0) - p | 0) >>> 0) {
    f = c[1931] | 0;
    if (k >>> 0 < f >>> 0) Ga();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) Ga();
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
     if (b >>> 0 < f >>> 0) Ga(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Ga();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Ga();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else Ga();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 8012 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[1928] = c[1928] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1931] | 0) >>> 0) Ga();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[1931] | 0;
     if (t >>> 0 < b >>> 0) Ga();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Ga(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
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
      d = 7748 + (a << 1 << 2) | 0;
      b = c[1927] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[1927] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
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
     e = 8012 + (d << 2) | 0;
     c[h + 28 >> 2] = d;
     a = h + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1928] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1928] = a | b;
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
     if ((w | 0) == 145) if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
      c[b >> 2] = h;
      c[h + 24 >> 2] = e;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     } else if ((w | 0) == 148) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[1931] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = h;
       c[a >> 2] = h;
       c[h + 8 >> 2] = b;
       c[h + 12 >> 2] = e;
       c[h + 24 >> 2] = 0;
       break;
      } else Ga();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[1929] | 0;
 if (d >>> 0 >= p >>> 0) {
  a = d - p | 0;
  b = c[1932] | 0;
  if (a >>> 0 > 15) {
   C = b + p | 0;
   c[1932] = C;
   c[1929] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = p | 3;
  } else {
   c[1929] = 0;
   c[1932] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[1930] | 0;
 if (a >>> 0 > p >>> 0) {
  A = a - p | 0;
  c[1930] = A;
  C = c[1933] | 0;
  B = C + p | 0;
  c[1933] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = p | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[2045] | 0)) {
  c[2047] = 4096;
  c[2046] = 4096;
  c[2048] = -1;
  c[2049] = -1;
  c[2050] = 0;
  c[2038] = 0;
  v = q & -16 ^ 1431655768;
  c[q >> 2] = v;
  c[2045] = v;
 }
 h = p + 48 | 0;
 e = c[2047] | 0;
 j = p + 47 | 0;
 d = e + j | 0;
 e = 0 - e | 0;
 k = d & e;
 if (k >>> 0 <= p >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[2037] | 0;
 if (a | 0) {
  u = c[2035] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[2038] & 4)) {
  b = c[1933] | 0;
  c : do if (!b) w = 171; else {
   g = 8156;
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
   a = d - (c[1930] | 0) & e;
   if (a >>> 0 < 2147483647) {
    b = ua(a | 0) | 0;
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
   f = ua(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[2046] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[2035] | 0;
    d = b + a | 0;
    if (a >>> 0 > p >>> 0 & a >>> 0 < 2147483647) {
     e = c[2037] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = ua(a | 0) | 0;
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
    b = c[2047] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((ua(b | 0) | 0) == (-1 | 0)) {
     ua(d | 0) | 0;
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
  c[2038] = c[2038] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = ua(k | 0) | 0;
  a = ua(0) | 0;
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
  a = (c[2035] | 0) + g | 0;
  c[2035] = a;
  if (a >>> 0 > (c[2036] | 0) >>> 0) c[2036] = a;
  l = c[1933] | 0;
  do if (!l) {
   C = c[1931] | 0;
   if ((C | 0) == 0 | h >>> 0 < C >>> 0) c[1931] = h;
   c[2039] = h;
   c[2040] = g;
   c[2042] = 0;
   c[1936] = c[2045];
   c[1935] = -1;
   a = 0;
   do {
    C = 7748 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = h + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = h + C | 0;
   C = g + -40 - C | 0;
   c[1933] = B;
   c[1930] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[1934] = c[2049];
  } else {
   a = 8156;
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
    C = g - C + (c[1930] | 0) | 0;
    c[1933] = B;
    c[1930] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[1934] = c[2049];
    break;
   }
   a = c[1931] | 0;
   if (h >>> 0 < a >>> 0) {
    c[1931] = h;
    j = h;
   } else j = a;
   b = h + g | 0;
   a = 8156;
   while (1) {
    if ((c[a >> 2] | 0) == (b | 0)) {
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 8156;
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
     C = (c[1930] | 0) + k | 0;
     c[1930] = C;
     c[1933] = m;
     c[m + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[1932] | 0)) {
      C = (c[1929] | 0) + k | 0;
      c[1929] = C;
      c[1932] = m;
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
       b = 7748 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) Ga();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        Ga();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[1927] = c[1927] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) Ga();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        Ga();
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
        if (d >>> 0 < j >>> 0) Ga(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) Ga();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) Ga();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else Ga();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       d = 8012 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[1928] = c[1928] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[1931] | 0) >>> 0) Ga();
        b = g + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[g + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[1931] | 0;
       if (A >>> 0 < e >>> 0) Ga();
       c[A + 24 >> 2] = g;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) Ga(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
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
      d = 7748 + (a << 1 << 2) | 0;
      b = c[1927] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[1927] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[1931] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       Ga();
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
     e = 8012 + (d << 2) | 0;
     c[m + 28 >> 2] = d;
     a = m + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1928] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1928] = a | b;
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
     if ((w | 0) == 276) if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
      c[b >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((w | 0) == 279) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[1931] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = m;
       c[a >> 2] = m;
       c[m + 8 >> 2] = b;
       c[m + 12 >> 2] = e;
       c[m + 24 >> 2] = 0;
       break;
      } else Ga();
     }
    } while (0);
    C = n + 8 | 0;
    i = D;
    return C | 0;
   } else b = 8156;
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
   c[1933] = C;
   c[1930] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[1934] = c[2049];
   e = b + 4 | 0;
   c[e >> 2] = 27;
   c[a >> 2] = c[2039];
   c[a + 4 >> 2] = c[2040];
   c[a + 8 >> 2] = c[2041];
   c[a + 12 >> 2] = c[2042];
   c[2039] = h;
   c[2040] = g;
   c[2042] = 0;
   c[2041] = a;
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
     d = 7748 + (a << 1 << 2) | 0;
     b = c[1927] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[1927] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
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
    e = 8012 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[f >> 2] = 0;
    a = c[1928] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[1928] = a | b;
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
    if ((w | 0) == 302) if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
     c[b >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((w | 0) == 305) {
     a = e + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[1931] | 0;
     if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = l;
      c[a >> 2] = l;
      c[l + 8 >> 2] = b;
      c[l + 12 >> 2] = e;
      c[l + 24 >> 2] = 0;
      break;
     } else Ga();
    }
   }
  } while (0);
  a = c[1930] | 0;
  if (a >>> 0 > p >>> 0) {
   A = a - p | 0;
   c[1930] = A;
   C = c[1933] | 0;
   B = C + p | 0;
   c[1933] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = p | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 if (!(c[1915] | 0)) a = 7704; else a = c[(Pf() | 0) + 64 >> 2] | 0;
 c[a >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function pc(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 O = i;
 i = i + 128 | 0;
 N = O + 32 | 0;
 I = O + 24 | 0;
 L = O + 96 | 0;
 k = O + 40 | 0;
 M = O;
 J = c[1642] | 0;
 G = J + 92 | 0;
 H = J + 88 | 0;
 d = c[H >> 2] | 0;
 e = (c[G >> 2] | 0) - d | 0;
 a : do if ((e | 0) > 0) {
  l = J + 80 | 0;
  m = k + 40 | 0;
  n = k + 44 | 0;
  o = k + 48 | 0;
  p = k + 36 | 0;
  q = k + 4 | 0;
  r = k + 6 | 0;
  s = k + 8 | 0;
  t = k + 10 | 0;
  u = k + 12 | 0;
  v = k + 14 | 0;
  w = k + 16 | 0;
  x = k + 18 | 0;
  y = k + 20 | 0;
  z = k + 22 | 0;
  A = k + 24 | 0;
  B = k + 26 | 0;
  C = k + 28 | 0;
  D = k + 30 | 0;
  E = k + 32 | 0;
  F = k + 34 | 0;
  while (1) {
   j = e + -1 | 0;
   f = d + j | 0;
   g = c[l >> 2] | 0;
   d = g + (f * 56 | 0) | 0;
   do if (a[(c[d >> 2] | 0) + 12 >> 0] & 1) {
    d = c[d >> 2] | 0;
    h = c[d + 100 >> 2] | 0;
    do if ((h | 0) == 200) {
     Se(k, d + 16 | 0);
     a[p >> 0] = a[d + 52 >> 0] | 0;
     b[q >> 1] = b[d + 20 >> 1] | 0;
     b[r >> 1] = b[d + 22 >> 1] | 0;
     b[s >> 1] = b[d + 24 >> 1] | 0;
     b[t >> 1] = b[d + 26 >> 1] | 0;
     b[u >> 1] = b[d + 28 >> 1] | 0;
     b[v >> 1] = b[d + 30 >> 1] | 0;
     b[w >> 1] = b[d + 32 >> 1] | 0;
     b[x >> 1] = b[d + 34 >> 1] | 0;
     b[y >> 1] = b[d + 36 >> 1] | 0;
     b[z >> 1] = b[d + 38 >> 1] | 0;
     b[A >> 1] = b[d + 40 >> 1] | 0;
     b[B >> 1] = b[d + 42 >> 1] | 0;
     b[C >> 1] = b[d + 44 >> 1] | 0;
     b[D >> 1] = b[d + 46 >> 1] | 0;
     b[E >> 1] = b[d + 48 >> 1] | 0;
     b[F >> 1] = b[d + 50 >> 1] | 0;
     P = d + 68 | 0;
     c[m >> 2] = c[P >> 2];
     h = d + 72 | 0;
     c[n >> 2] = c[h >> 2];
     d = d + 76 | 0;
     c[o >> 2] = c[d >> 2];
     c[P >> 2] = 0;
     c[h >> 2] = 0;
     c[d >> 2] = 0;
     d = c[g + (f * 56 | 0) + 24 >> 2] | 0;
     Ra[c[(c[d >> 2] | 0) + 24 >> 2] & 255](d, k);
     d = c[o >> 2] | 0;
     if (d | 0) qf(d);
     c[o >> 2] = 0;
     c[m >> 2] = 0;
     c[n >> 2] = 0;
     c[k >> 2] = 0;
    } else {
     f = c[g + (f * 56 | 0) + 48 >> 2] | 0;
     d = d + 16 | 0;
     if (f | 0) {
      c[L >> 2] = h;
      Ta[c[(c[f >> 2] | 0) + 24 >> 2] & 255](f, d, L);
      break;
     }
     f = c[d >> 2] | 0;
     f = c[((f | 0) == 0 ? 1992 : f + 12 | 0) >> 2] | 0;
     do switch (h | 0) {
     case 100:
      {
       d = 3355;
       break;
      }
     case 101:
      {
       d = 3336;
       break;
      }
     case 200:
      {
       d = 3333;
       break;
      }
     case 201:
      {
       d = 3325;
       break;
      }
     case 202:
      {
       d = 3316;
       break;
      }
     case 203:
      {
       d = 3290;
       break;
      }
     case 204:
      {
       d = 3280;
       break;
      }
     case 205:
      {
       d = 3267;
       break;
      }
     case 206:
      {
       d = 3252;
       break;
      }
     case 300:
      {
       d = 3236;
       break;
      }
     case 301:
      {
       d = 3219;
       break;
      }
     case 302:
      {
       d = 3213;
       break;
      }
     case 303:
      {
       d = 3204;
       break;
      }
     case 304:
      {
       d = 3192;
       break;
      }
     case 305:
      {
       d = 3183;
       break;
      }
     case 306:
      {
       d = 3165;
       break;
      }
     case 400:
      {
       d = 3154;
       break;
      }
     case 401:
      {
       d = 3141;
       break;
      }
     case 402:
      {
       d = 3125;
       break;
      }
     case 403:
      {
       d = 3115;
       break;
      }
     case 404:
      {
       d = 3106;
       break;
      }
     case 405:
      {
       d = 3089;
       break;
      }
     case 406:
      {
       d = 3075;
       break;
      }
     case 407:
      {
       d = 3047;
       break;
      }
     case 408:
      {
       d = 3032;
       break;
      }
     case 409:
      {
       d = 3023;
       break;
      }
     case 410:
      {
       d = 3018;
       break;
      }
     case 411:
      {
       d = 3003;
       break;
      }
     case 412:
      {
       d = 2984;
       break;
      }
     case 413:
      {
       d = 2962;
       break;
      }
     case 414:
      {
       d = 2943;
       break;
      }
     case 415:
      {
       d = 2922;
       break;
      }
     case 416:
      {
       d = 2893;
       break;
      }
     case 417:
      {
       d = 2875;
       break;
      }
     case 500:
      {
       d = 2855;
       break;
      }
     case 501:
      {
       d = 2840;
       break;
      }
     case 502:
      {
       d = 2829;
       break;
      }
     case 503:
      {
       d = 2810;
       break;
      }
     case 504:
      {
       d = 2795;
       break;
      }
     case 505:
      {
       d = 2771;
       break;
      }
     case 1e3:
      {
       d = 2761;
       break;
      }
     case 1001:
      {
       d = 2747;
       break;
      }
     default:
      d = 2731;
     } while (0);
     c[I >> 2] = f;
     c[I + 4 >> 2] = d;
     Ge(2510, I);
    } while (0);
    g = c[G >> 2] | 0;
    d = c[H >> 2] | 0;
    f = g - d | 0;
    if (!j) {
     c[H >> 2] = d + 1;
     g = c[l >> 2] | 0;
     f = c[g + (d * 56 | 0) + 48 >> 2] | 0;
     if ((f | 0) == (g + (d * 56 | 0) + 32 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     f = c[g + (d * 56 | 0) + 24 >> 2] | 0;
     if ((f | 0) == (g + (d * 56 | 0) + 8 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     d = g + (d * 56 | 0) | 0;
     f = c[d >> 2] | 0;
     if (!f) break;
     h = f + 4 | 0;
     P = c[h >> 2] | 0;
     c[h >> 2] = P - 1;
     if ((P | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
     break;
    }
    if ((f | 0) == (e | 0)) {
     f = g + -1 | 0;
     c[G >> 2] = f;
     g = c[l >> 2] | 0;
     d = c[g + (f * 56 | 0) + 48 >> 2] | 0;
     if ((d | 0) == (g + (f * 56 | 0) + 32 | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
     d = c[g + (f * 56 | 0) + 24 >> 2] | 0;
     if ((d | 0) == (g + (f * 56 | 0) + 8 | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
     d = g + (f * 56 | 0) | 0;
     f = c[d >> 2] | 0;
     if (!f) break;
     h = f + 4 | 0;
     P = c[h >> 2] | 0;
     c[h >> 2] = P - 1;
     if ((P | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
     break;
    }
    if ((f >> 1 | 0) < (e | 0)) {
     f = d + j | 0;
     d = g + -1 | 0;
     if ((f | 0) < (d | 0)) do {
      d = c[l >> 2] | 0;
      P = f;
      f = f + 1 | 0;
      Ic(d + (P * 56 | 0) | 0, d + (f * 56 | 0) | 0);
      d = (c[G >> 2] | 0) + -1 | 0;
     } while ((f | 0) < (d | 0));
     c[G >> 2] = d;
     g = c[l >> 2] | 0;
     f = c[g + (d * 56 | 0) + 48 >> 2] | 0;
     if ((f | 0) == (g + (d * 56 | 0) + 32 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     f = c[g + (d * 56 | 0) + 24 >> 2] | 0;
     if ((f | 0) == (g + (d * 56 | 0) + 8 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     d = g + (d * 56 | 0) | 0;
     f = c[d >> 2] | 0;
     if (!f) break;
     h = f + 4 | 0;
     P = c[h >> 2] | 0;
     c[h >> 2] = P - 1;
     if ((P | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
     break;
    }
    if ((e | 0) > 1) {
     f = d + j | 0;
     do {
      d = c[l >> 2] | 0;
      P = f;
      f = f + -1 | 0;
      Ic(d + (P * 56 | 0) | 0, d + (f * 56 | 0) | 0);
      d = c[H >> 2] | 0;
     } while ((f | 0) > (d | 0));
    }
    c[H >> 2] = d + 1;
    g = c[l >> 2] | 0;
    f = c[g + (d * 56 | 0) + 48 >> 2] | 0;
    if ((f | 0) == (g + (d * 56 | 0) + 32 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
    f = c[g + (d * 56 | 0) + 24 >> 2] | 0;
    if ((f | 0) == (g + (d * 56 | 0) + 8 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
    d = g + (d * 56 | 0) | 0;
    f = c[d >> 2] | 0;
    if (f | 0) {
     h = f + 4 | 0;
     P = c[h >> 2] | 0;
     c[h >> 2] = P - 1;
     if ((P | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
    }
   } while (0);
   if ((e | 0) <= 1) break a;
   d = c[H >> 2] | 0;
   e = j;
  }
 } while (0);
 D = J + 116 | 0;
 E = J + 112 | 0;
 d = c[E >> 2] | 0;
 e = (c[D >> 2] | 0) - d | 0;
 b : do if ((e | 0) > 0) {
  u = J + 104 | 0;
  v = L + 16 | 0;
  w = L + 20 | 0;
  x = L + 12 | 0;
  y = L + 8 | 0;
  z = L + 4 | 0;
  A = M + 16 | 0;
  B = M + 20 | 0;
  s = M + 8 | 0;
  t = M + 12 | 0;
  C = M + 4 | 0;
  while (1) {
   r = e + -1 | 0;
   p = d + r | 0;
   q = c[u >> 2] | 0;
   o = q + (p * 72 | 0) | 0;
   d = c[o >> 2] | 0;
   c : do if (!d) {
    f = q + (p * 72 | 0) + 8 | 0;
    g = q + (p * 72 | 0) + 12 | 0;
    K = 168;
   } else {
    f = q + (p * 72 | 0) + 8 | 0;
    h = c[f >> 2] | 0;
    g = q + (p * 72 | 0) + 12 | 0;
    P = c[g >> 2] | 0;
    m = d + (P << 2) | 0;
    if ((h | 0) == (P | 0)) K = 168; else {
     n = q + (p * 72 | 0) + 64 | 0;
     l = d + (h << 2) | 0;
     d = 0;
     do {
      if (!(a[(c[l >> 2] | 0) + 12 >> 0] & 1)) break c;
      h = c[l >> 2] | 0;
      k = c[h + 100 >> 2] | 0;
      do if ((k | 0) != 200) {
       j = c[n >> 2] | 0;
       d = h + 16 | 0;
       if (j | 0) {
        c[L >> 2] = k;
        Ta[c[(c[j >> 2] | 0) + 24 >> 2] & 255](j, d, L);
        d = 1;
        break;
       }
       h = c[d >> 2] | 0;
       h = c[((h | 0) == 0 ? 1992 : h + 12 | 0) >> 2] | 0;
       do switch (k | 0) {
       case 100:
        {
         d = 3355;
         break;
        }
       case 101:
        {
         d = 3336;
         break;
        }
       case 200:
        {
         d = 3333;
         break;
        }
       case 201:
        {
         d = 3325;
         break;
        }
       case 202:
        {
         d = 3316;
         break;
        }
       case 203:
        {
         d = 3290;
         break;
        }
       case 204:
        {
         d = 3280;
         break;
        }
       case 205:
        {
         d = 3267;
         break;
        }
       case 206:
        {
         d = 3252;
         break;
        }
       case 300:
        {
         d = 3236;
         break;
        }
       case 301:
        {
         d = 3219;
         break;
        }
       case 302:
        {
         d = 3213;
         break;
        }
       case 303:
        {
         d = 3204;
         break;
        }
       case 304:
        {
         d = 3192;
         break;
        }
       case 305:
        {
         d = 3183;
         break;
        }
       case 306:
        {
         d = 3165;
         break;
        }
       case 400:
        {
         d = 3154;
         break;
        }
       case 401:
        {
         d = 3141;
         break;
        }
       case 402:
        {
         d = 3125;
         break;
        }
       case 403:
        {
         d = 3115;
         break;
        }
       case 404:
        {
         d = 3106;
         break;
        }
       case 405:
        {
         d = 3089;
         break;
        }
       case 406:
        {
         d = 3075;
         break;
        }
       case 407:
        {
         d = 3047;
         break;
        }
       case 408:
        {
         d = 3032;
         break;
        }
       case 409:
        {
         d = 3023;
         break;
        }
       case 410:
        {
         d = 3018;
         break;
        }
       case 411:
        {
         d = 3003;
         break;
        }
       case 412:
        {
         d = 2984;
         break;
        }
       case 413:
        {
         d = 2962;
         break;
        }
       case 414:
        {
         d = 2943;
         break;
        }
       case 415:
        {
         d = 2922;
         break;
        }
       case 416:
        {
         d = 2893;
         break;
        }
       case 417:
        {
         d = 2875;
         break;
        }
       case 500:
        {
         d = 2855;
         break;
        }
       case 501:
        {
         d = 2840;
         break;
        }
       case 502:
        {
         d = 2829;
         break;
        }
       case 503:
        {
         d = 2810;
         break;
        }
       case 504:
        {
         d = 2795;
         break;
        }
       case 505:
        {
         d = 2771;
         break;
        }
       case 1e3:
        {
         d = 2761;
         break;
        }
       case 1001:
        {
         d = 2747;
         break;
        }
       default:
        d = 2731;
       } while (0);
       c[N >> 2] = h;
       c[N + 4 >> 2] = d;
       Ge(2510, N);
       d = 1;
      } while (0);
      l = l + 4 | 0;
     } while ((l | 0) != (m | 0));
     if (d) K = 189; else K = 168;
    }
   } while (0);
   if ((K | 0) == 168) {
    K = 0;
    c[L >> 2] = 0;
    c[L + 4 >> 2] = 0;
    c[L + 8 >> 2] = 0;
    c[L + 12 >> 2] = 0;
    c[v >> 2] = 16;
    c[w >> 2] = 65536;
    d = (c[g >> 2] | 0) - (c[f >> 2] | 0) | 0;
    if ((d | 0) > 0) Jc(L, d);
    h = c[o >> 2] | 0;
    if (!h) K = 172; else {
     f = c[f >> 2] | 0;
     P = c[g >> 2] | 0;
     k = h + (P << 2) | 0;
     if ((f | 0) == (P | 0)) K = 172; else {
      d = c[x >> 2] | 0;
      j = h + (f << 2) | 0;
      do {
       h = c[j >> 2] | 0;
       if ((c[z >> 2] | 0) == (d | 0)) {
        g = d >> 1;
        f = c[v >> 2] | 0;
        if ((g | 0) >= (f | 0)) {
         f = c[w >> 2] | 0;
         f = (g | 0) > (f | 0) ? f : g;
        }
        Jc(L, f + d | 0);
        g = c[x >> 2] | 0;
       } else g = d;
       d = g + 1 | 0;
       c[x >> 2] = d;
       f = c[L >> 2] | 0;
       Se(f + (g * 52 | 0) | 0, h + 16 | 0);
       a[f + (g * 52 | 0) + 36 >> 0] = a[h + 52 >> 0] | 0;
       b[f + (g * 52 | 0) + 4 >> 1] = b[h + 20 >> 1] | 0;
       b[f + (g * 52 | 0) + 6 >> 1] = b[h + 22 >> 1] | 0;
       b[f + (g * 52 | 0) + 8 >> 1] = b[h + 24 >> 1] | 0;
       b[f + (g * 52 | 0) + 10 >> 1] = b[h + 26 >> 1] | 0;
       b[f + (g * 52 | 0) + 12 >> 1] = b[h + 28 >> 1] | 0;
       b[f + (g * 52 | 0) + 14 >> 1] = b[h + 30 >> 1] | 0;
       b[f + (g * 52 | 0) + 16 >> 1] = b[h + 32 >> 1] | 0;
       b[f + (g * 52 | 0) + 18 >> 1] = b[h + 34 >> 1] | 0;
       b[f + (g * 52 | 0) + 20 >> 1] = b[h + 36 >> 1] | 0;
       b[f + (g * 52 | 0) + 22 >> 1] = b[h + 38 >> 1] | 0;
       b[f + (g * 52 | 0) + 24 >> 1] = b[h + 40 >> 1] | 0;
       b[f + (g * 52 | 0) + 26 >> 1] = b[h + 42 >> 1] | 0;
       b[f + (g * 52 | 0) + 28 >> 1] = b[h + 44 >> 1] | 0;
       b[f + (g * 52 | 0) + 30 >> 1] = b[h + 46 >> 1] | 0;
       b[f + (g * 52 | 0) + 32 >> 1] = b[h + 48 >> 1] | 0;
       b[f + (g * 52 | 0) + 34 >> 1] = b[h + 50 >> 1] | 0;
       I = h + 68 | 0;
       c[f + (g * 52 | 0) + 40 >> 2] = c[I >> 2];
       J = h + 72 | 0;
       c[f + (g * 52 | 0) + 44 >> 2] = c[J >> 2];
       P = h + 76 | 0;
       c[f + (g * 52 | 0) + 48 >> 2] = c[P >> 2];
       c[I >> 2] = 0;
       c[J >> 2] = 0;
       c[P >> 2] = 0;
       j = j + 4 | 0;
      } while ((j | 0) != (k | 0));
     }
    }
    if ((K | 0) == 172) {
     f = c[L >> 2] | 0;
     d = c[x >> 2] | 0;
    }
    c[A >> 2] = c[v >> 2];
    c[B >> 2] = c[w >> 2];
    P = M;
    c[P >> 2] = 0;
    c[P + 4 >> 2] = 0;
    c[M >> 2] = f;
    c[C >> 2] = c[z >> 2];
    c[s >> 2] = c[y >> 2];
    c[t >> 2] = d;
    c[L >> 2] = 0;
    c[L + 4 >> 2] = 0;
    c[L + 8 >> 2] = 0;
    c[L + 12 >> 2] = 0;
    d = c[q + (p * 72 | 0) + 40 >> 2] | 0;
    Ra[c[(c[d >> 2] | 0) + 24 >> 2] & 255](d, M);
    c[A >> 2] = 0;
    c[B >> 2] = 0;
    d = c[M >> 2] | 0;
    if (d | 0) {
     g = c[s >> 2] | 0;
     f = c[t >> 2] | 0;
     if ((g | 0) < (f | 0)) {
      while (1) {
       j = d + (g * 52 | 0) + 48 | 0;
       h = c[j >> 2] | 0;
       if (h) {
        qf(h);
        f = c[t >> 2] | 0;
       }
       c[j >> 2] = 0;
       c[d + (g * 52 | 0) + 40 >> 2] = 0;
       c[d + (g * 52 | 0) + 44 >> 2] = 0;
       c[d + (g * 52 | 0) >> 2] = 0;
       g = g + 1 | 0;
       if ((g | 0) >= (f | 0)) break;
       d = c[M >> 2] | 0;
      }
      d = c[M >> 2] | 0;
     }
     qf(d);
    };
    c[M >> 2] = 0;
    c[M + 4 >> 2] = 0;
    c[M + 8 >> 2] = 0;
    c[M + 12 >> 2] = 0;
    K = 189;
   }
   do if ((K | 0) == 189) {
    K = 0;
    g = c[D >> 2] | 0;
    d = c[E >> 2] | 0;
    f = g - d | 0;
    if (!r) {
     c[E >> 2] = d + 1;
     m = c[u >> 2] | 0;
     n = m + (d * 72 | 0) | 0;
     f = c[m + (d * 72 | 0) + 64 >> 2] | 0;
     if ((f | 0) == (m + (d * 72 | 0) + 48 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     f = c[m + (d * 72 | 0) + 40 >> 2] | 0;
     if ((f | 0) == (m + (d * 72 | 0) + 24 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     c[m + (d * 72 | 0) + 16 >> 2] = 0;
     c[m + (d * 72 | 0) + 20 >> 2] = 0;
     g = c[n >> 2] | 0;
     l = m + (d * 72 | 0) + 8 | 0;
     if (!g) f = m + (d * 72 | 0) + 12 | 0; else {
      j = c[l >> 2] | 0;
      f = m + (d * 72 | 0) + 12 | 0;
      h = c[f >> 2] | 0;
      if ((j | 0) < (h | 0)) {
       k = j;
       while (1) {
        g = g + (k << 2) | 0;
        j = c[g >> 2] | 0;
        if (j) {
         J = j + 4 | 0;
         P = c[J >> 2] | 0;
         c[J >> 2] = P - 1;
         if ((P | 0) == 1) Qa[c[c[j >> 2] >> 2] & 255](j);
         c[g >> 2] = 0;
         h = c[f >> 2] | 0;
        }
        j = k + 1 | 0;
        if ((j | 0) >= (h | 0)) break;
        g = c[n >> 2] | 0;
        k = j;
       }
       g = c[n >> 2] | 0;
      }
      qf(g);
     }
     c[n >> 2] = 0;
     c[m + (d * 72 | 0) + 4 >> 2] = 0;
     c[l >> 2] = 0;
     c[f >> 2] = 0;
     break;
    }
    if ((f | 0) == (e | 0)) {
     l = g + -1 | 0;
     c[D >> 2] = l;
     m = c[u >> 2] | 0;
     n = m + (l * 72 | 0) | 0;
     d = c[m + (l * 72 | 0) + 64 >> 2] | 0;
     if ((d | 0) == (m + (l * 72 | 0) + 48 | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
     d = c[m + (l * 72 | 0) + 40 >> 2] | 0;
     if ((d | 0) == (m + (l * 72 | 0) + 24 | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
     c[m + (l * 72 | 0) + 16 >> 2] = 0;
     c[m + (l * 72 | 0) + 20 >> 2] = 0;
     f = c[n >> 2] | 0;
     k = m + (l * 72 | 0) + 8 | 0;
     if (!f) d = m + (l * 72 | 0) + 12 | 0; else {
      h = c[k >> 2] | 0;
      d = m + (l * 72 | 0) + 12 | 0;
      g = c[d >> 2] | 0;
      if ((h | 0) < (g | 0)) {
       j = h;
       while (1) {
        f = f + (j << 2) | 0;
        h = c[f >> 2] | 0;
        if (h) {
         J = h + 4 | 0;
         P = c[J >> 2] | 0;
         c[J >> 2] = P - 1;
         if ((P | 0) == 1) Qa[c[c[h >> 2] >> 2] & 255](h);
         c[f >> 2] = 0;
         g = c[d >> 2] | 0;
        }
        h = j + 1 | 0;
        if ((h | 0) >= (g | 0)) break;
        f = c[n >> 2] | 0;
        j = h;
       }
       f = c[n >> 2] | 0;
      }
      qf(f);
     }
     c[n >> 2] = 0;
     c[m + (l * 72 | 0) + 4 >> 2] = 0;
     c[k >> 2] = 0;
     c[d >> 2] = 0;
     break;
    }
    if ((f >> 1 | 0) < (e | 0)) {
     f = d + r | 0;
     d = g + -1 | 0;
     if ((f | 0) < (d | 0)) do {
      d = c[u >> 2] | 0;
      P = f;
      f = f + 1 | 0;
      Kc(d + (P * 72 | 0) | 0, d + (f * 72 | 0) | 0);
      d = (c[D >> 2] | 0) + -1 | 0;
     } while ((f | 0) < (d | 0));
     c[D >> 2] = d;
     m = c[u >> 2] | 0;
     n = m + (d * 72 | 0) | 0;
     f = c[m + (d * 72 | 0) + 64 >> 2] | 0;
     if ((f | 0) == (m + (d * 72 | 0) + 48 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     f = c[m + (d * 72 | 0) + 40 >> 2] | 0;
     if ((f | 0) == (m + (d * 72 | 0) + 24 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     c[m + (d * 72 | 0) + 16 >> 2] = 0;
     c[m + (d * 72 | 0) + 20 >> 2] = 0;
     g = c[n >> 2] | 0;
     l = m + (d * 72 | 0) + 8 | 0;
     if (!g) f = m + (d * 72 | 0) + 12 | 0; else {
      j = c[l >> 2] | 0;
      f = m + (d * 72 | 0) + 12 | 0;
      h = c[f >> 2] | 0;
      if ((j | 0) < (h | 0)) {
       k = j;
       while (1) {
        g = g + (k << 2) | 0;
        j = c[g >> 2] | 0;
        if (j) {
         J = j + 4 | 0;
         P = c[J >> 2] | 0;
         c[J >> 2] = P - 1;
         if ((P | 0) == 1) Qa[c[c[j >> 2] >> 2] & 255](j);
         c[g >> 2] = 0;
         h = c[f >> 2] | 0;
        }
        j = k + 1 | 0;
        if ((j | 0) >= (h | 0)) break;
        g = c[n >> 2] | 0;
        k = j;
       }
       g = c[n >> 2] | 0;
      }
      qf(g);
     }
     c[n >> 2] = 0;
     c[m + (d * 72 | 0) + 4 >> 2] = 0;
     c[l >> 2] = 0;
     c[f >> 2] = 0;
     break;
    }
    if ((e | 0) > 1) {
     f = d + r | 0;
     do {
      d = c[u >> 2] | 0;
      P = f;
      f = f + -1 | 0;
      Kc(d + (P * 72 | 0) | 0, d + (f * 72 | 0) | 0);
      d = c[E >> 2] | 0;
     } while ((f | 0) > (d | 0));
    }
    c[E >> 2] = d + 1;
    m = c[u >> 2] | 0;
    n = m + (d * 72 | 0) | 0;
    f = c[m + (d * 72 | 0) + 64 >> 2] | 0;
    if ((f | 0) == (m + (d * 72 | 0) + 48 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
    f = c[m + (d * 72 | 0) + 40 >> 2] | 0;
    if ((f | 0) == (m + (d * 72 | 0) + 24 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
    c[m + (d * 72 | 0) + 16 >> 2] = 0;
    c[m + (d * 72 | 0) + 20 >> 2] = 0;
    g = c[n >> 2] | 0;
    l = m + (d * 72 | 0) + 8 | 0;
    if (!g) f = m + (d * 72 | 0) + 12 | 0; else {
     j = c[l >> 2] | 0;
     f = m + (d * 72 | 0) + 12 | 0;
     h = c[f >> 2] | 0;
     if ((j | 0) < (h | 0)) {
      k = j;
      while (1) {
       g = g + (k << 2) | 0;
       j = c[g >> 2] | 0;
       if (j) {
        J = j + 4 | 0;
        P = c[J >> 2] | 0;
        c[J >> 2] = P - 1;
        if ((P | 0) == 1) Qa[c[c[j >> 2] >> 2] & 255](j);
        c[g >> 2] = 0;
        h = c[f >> 2] | 0;
       }
       j = k + 1 | 0;
       if ((j | 0) >= (h | 0)) break;
       g = c[n >> 2] | 0;
       k = j;
      }
      g = c[n >> 2] | 0;
     }
     qf(g);
    }
    c[n >> 2] = 0;
    c[m + (d * 72 | 0) + 4 >> 2] = 0;
    c[l >> 2] = 0;
    c[f >> 2] = 0;
   } while (0);
   if ((e | 0) <= 1) break b;
   d = c[E >> 2] | 0;
   e = r;
  }
 } while (0);
 d = c[(c[1642] | 0) + 76 >> 2] | 0;
 if (!d) {
  i = O;
  return;
 }
 Qa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d);
 i = O;
 return;
}

function df(e, f, g, j, l) {
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
   if (!(c[1915] | 0)) m = 7704; else m = c[(Pf() | 0) + 64 >> 2] | 0;
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
  if (M) if (!(c[e >> 2] & 32)) ef(x, v, e);
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
   n = a[3960 + (s * 58 | 0) + n >> 0] | 0;
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
   gf(ca, o, g);
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
      n = Lf(n | 0, o | 0, 3) | 0;
      o = D;
     } while (!((n | 0) == 0 & (o | 0) == 0));
    }
    if (!(H & 8)) {
     n = H;
     s = 0;
     q = 4440;
     L = 79;
    } else {
     s = V - f | 0;
     n = H;
     r = (r | 0) > (s | 0) ? r : s + 1 | 0;
     s = 0;
     q = 4440;
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
     f = If(0, 0, f | 0, n | 0) | 0;
     n = D;
     o = ca;
     c[o >> 2] = f;
     c[o + 4 >> 2] = n;
     o = 1;
     q = 4440;
     L = 78;
     break f;
    }
    if (!(H & 2048)) {
     q = H & 1;
     o = q;
     q = (q | 0) == 0 ? 4440 : 4442;
     L = 78;
    } else {
     o = 1;
     q = 4441;
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
    q = 4440;
    L = 78;
    break;
   }
  case 99:
   {
    a[W >> 0] = c[ca >> 2];
    f = W;
    t = 1;
    v = 0;
    u = 4440;
    n = N;
    break;
   }
  case 109:
   {
    if (!(c[1915] | 0)) f = 7704; else f = c[(Pf() | 0) + 64 >> 2] | 0;
    n = c[f >> 2] | 0;
    f = 0;
    while (1) {
     if ((d[4450 + f >> 0] | 0) == (n | 0)) {
      L = 85;
      break;
     }
     f = f + 1 | 0;
     if ((f | 0) == 87) {
      n = 87;
      f = 4538;
      break;
     }
    }
    if ((L | 0) == 85) if (!f) {
     n = 4538;
     L = 92;
     break f;
    } else {
     n = f;
     f = 4538;
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
    n = n | 0 ? n : 6342;
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
     jf(e, 32, J, 0, H);
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
     G = 6349;
    } else if (!(H & 2048)) {
     G = H & 1;
     F = G;
     G = (G | 0) == 0 ? 6350 : 6355;
    } else {
     F = 1;
     G = 6352;
    }
    h[k >> 3] = p;
    E = c[k + 4 >> 2] & 2146435072;
    do if (E >>> 0 < 2146435072 | (E | 0) == 2146435072 & 0 < 0) {
     w = +lf(p, fa) * 2.0;
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
      f = hf(f, ((f | 0) < 0) << 31 >> 31, _) | 0;
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
       a[n >> 0] = d[4424 + G >> 0] | u;
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
      jf(e, 32, J, q, H);
      if (!(c[e >> 2] & 32)) ef(x, v, e);
      jf(e, 48, J, q, H ^ 65536);
      n = f - Y | 0;
      if (!(c[e >> 2] & 32)) ef(ea, n, e);
      f = ba - o | 0;
      jf(e, 48, r - (n + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) ef(s, f, e);
      jf(e, 32, J, q, H ^ 8192);
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
         z = Mf(c[n >> 2] | 0, 0, s | 0) | 0;
         z = Jf(z | 0, D | 0, o | 0, 0) | 0;
         A = D;
         y = Xf(z | 0, A | 0, 1e9, 0) | 0;
         c[n >> 2] = y;
         o = Wf(z | 0, A | 0, 1e9, 0) | 0;
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
      q = hf(q, ((q | 0) < 0) << 31 >> 31, _) | 0;
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
     jf(e, 32, J, v, H);
     if (!(c[e >> 2] & 32)) ef(G, F, e);
     jf(e, 48, J, v, H ^ 65536);
     do if (s) {
      q = x >>> 0 > E >>> 0 ? E : x;
      o = q;
      do {
       n = hf(c[o >> 2] | 0, 0, S) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((n | 0) != (S | 0)) break;
        a[U >> 0] = 48;
        n = U;
       } else {
        if (n >>> 0 <= ea >>> 0) break;
        Kf(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) ef(n, T - n | 0, e);
       o = o + 4 | 0;
      } while (o >>> 0 <= E >>> 0);
      do if (u | 0) {
       if (c[e >> 2] & 32 | 0) break;
       ef(6384, 1, e);
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < B >>> 0) while (1) {
       n = hf(c[o >> 2] | 0, 0, S) | 0;
       if (n >>> 0 > ea >>> 0) {
        Kf(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       }
       if (!(c[e >> 2] & 32)) ef(n, (f | 0) > 9 ? 9 : f, e);
       o = o + 4 | 0;
       n = f + -9 | 0;
       if (!((f | 0) > 9 & o >>> 0 < B >>> 0)) {
        f = n;
        break;
       } else f = n;
      }
      jf(e, 48, f + 9 | 0, 9, 0);
     } else {
      s = y ? B : x + 4 | 0;
      if ((f | 0) > -1) {
       r = (o | 0) == 0;
       q = x;
       do {
        n = hf(c[q >> 2] | 0, 0, S) | 0;
        if ((n | 0) == (S | 0)) {
         a[U >> 0] = 48;
         n = U;
        }
        do if ((q | 0) == (x | 0)) {
         o = n + 1 | 0;
         if (!(c[e >> 2] & 32)) ef(n, 1, e);
         if (r & (f | 0) < 1) {
          n = o;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          n = o;
          break;
         }
         ef(6384, 1, e);
         n = o;
        } else {
         if (n >>> 0 <= ea >>> 0) break;
         Kf(ea | 0, 48, n + Z | 0) | 0;
         do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
        } while (0);
        o = T - n | 0;
        if (!(c[e >> 2] & 32)) ef(n, (f | 0) > (o | 0) ? o : f, e);
        f = f - o | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < s >>> 0 & (f | 0) > -1);
      }
      jf(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      ef(t, ba - t | 0, e);
     } while (0);
     jf(e, 32, J, v, H ^ 8192);
     f = (v | 0) < (J | 0) ? J : v;
    } else {
     s = (t & 32 | 0) != 0;
     r = p != p | 0.0 != 0.0;
     n = r ? 0 : F;
     q = n + 3 | 0;
     jf(e, 32, J, q, o);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      ef(G, n, e);
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) ef(r ? (s ? 6376 : 6380) : s ? 6368 : 6372, 3, e);
     jf(e, 32, J, q, H ^ 8192);
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
    u = 4440;
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
    q = 4440;
    L = 79;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[4424 + (n & 15) >> 0] | q;
     n = Lf(n | 0, o | 0, 4) | 0;
     o = D;
    } while (!((n | 0) == 0 & (o | 0) == 0));
    L = ca;
    if ((s & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     n = s;
     s = 0;
     q = 4440;
     L = 79;
    } else {
     n = s;
     s = 2;
     q = 4440 + (t >> 4) | 0;
     L = 79;
    }
   }
  } else if ((L | 0) == 78) {
   f = hf(f, n, N) | 0;
   n = H;
   s = o;
   L = 79;
  } else if ((L | 0) == 92) {
   L = 0;
   H = bf(n, 0, r) | 0;
   G = (H | 0) == 0;
   f = n;
   t = G ? r : H - n | 0;
   v = 0;
   u = 4440;
   n = G ? n + r | 0 : H;
  } else if ((L | 0) == 96) {
   L = 0;
   o = 0;
   n = 0;
   s = f;
   while (1) {
    q = c[s >> 2] | 0;
    if (!q) break;
    n = kf(ga, q) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   jf(e, 32, J, o, H);
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
     n = kf(ga, n) | 0;
     q = n + q | 0;
     if ((q | 0) > (o | 0)) {
      f = o;
      L = 107;
      break g;
     }
     if (!(c[e >> 2] & 32)) ef(ga, n, e);
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
   jf(e, 32, J, f, H ^ 8192);
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
  jf(e, 32, n, r, o);
  if (!(c[e >> 2] & 32)) ef(u, v, e);
  jf(e, 48, n, r, o ^ 65536);
  jf(e, 48, q, s, 0);
  if (!(c[e >> 2] & 32)) ef(f, s, e);
  jf(e, 32, n, r, o ^ 8192);
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
   gf(j + (m << 3) | 0, f, g);
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

function Gc(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0;
 I = i;
 i = i + 32 | 0;
 F = I;
 E = I + 16 | 0;
 H = I + 8 | 0;
 c[d >> 2] = 0;
 G = d + 36 | 0;
 a[G >> 0] = 0;
 do if (!e) {
  c[H >> 2] = 0;
  c[H + 4 >> 2] = 0;
  f = 0;
 } else {
  h = e;
  a : do if (!(h & 3)) {
   f = e;
   C = 5;
  } else {
   f = e;
   g = h;
   while (1) {
    if (!(a[f >> 0] | 0)) {
     f = g;
     break a;
    }
    f = f + 1 | 0;
    g = f;
    if (!(g & 3)) {
     C = 5;
     break;
    }
   }
  } while (0);
  if ((C | 0) == 5) {
   while (1) {
    g = c[f >> 2] | 0;
    if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
   }
   if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
  }
  f = f - h | 0;
  if ((f | 0) > 0 & (a[e >> 0] | 0) != 0) {
   D = pf(f + 9 | 0) | 0;
   c[H >> 2] = D;
   B = D;
   c[B >> 2] = 0;
   c[B + 4 >> 2] = 0;
   c[D >> 2] = 0;
   c[D >> 2] = (c[D >> 2] | 0) + 1;
   c[D + 4 >> 2] = f;
   D = D + 8 | 0;
   c[H + 4 >> 2] = D;
   Nf(D | 0, e | 0, f | 0) | 0;
   a[D + f >> 0] = 0;
   f = D;
   break;
  } else {
   c[H >> 2] = 0;
   c[H + 4 >> 2] = 0;
   f = 0;
   break;
  }
 } while (0);
 c[d >> 2] = 0;
 D = d + 4 | 0;
 g = D;
 h = g + 32 | 0;
 do {
  b[g >> 1] = 65535;
  g = g + 2 | 0;
 } while ((g | 0) < (h | 0));
 a[G >> 0] = 0;
 h = c[1642] | 0;
 if (!h) m = H + 4 | 0; else {
  do {} while ((a[h >> 0] & 1) != 0);
  B = h + 4 | 0;
  c[B >> 2] = (c[B >> 2] | 0) + 1;
  c[E >> 2] = 0;
  x = E + 4 | 0;
  c[x >> 2] = 0;
  y = E + 8 | 0;
  c[y >> 2] = 0;
  Te(E, H);
  g = c[E >> 2] | 0;
  f = c[y >> 2] | 0;
  e = Ue(g, f, 0, -1, 2508) | 0;
  b : do if ((e | 0) > 1) {
   z = h + 8 | 0;
   A = h + 16 | 0;
   w = h + 20 | 0;
   while (1) {
    u = g;
    h = e + 1 | 0;
    t = (g | 0) == 0;
    if (t) {
     v = 0;
     h = 0;
    } else if ((e | 0) > -1 & (a[g >> 0] | 0) != 0) {
     v = pf(e + 10 | 0) | 0;
     s = v;
     c[s >> 2] = 0;
     c[s + 4 >> 2] = 0;
     c[v >> 2] = 0;
     c[v >> 2] = (c[v >> 2] | 0) + 1;
     c[v + 4 >> 2] = h;
     s = v + 8 | 0;
     Nf(s | 0, g | 0, h | 0) | 0;
     a[s + h >> 0] = 0;
     h = s;
    } else {
     v = 0;
     h = 0;
    }
    s = c[z >> 2] | 0;
    r = (s | 0) == 0;
    if (r) {
     q = 0;
     j = 0;
    } else {
     q = s + (c[w >> 2] << 4) | 0;
     j = s + (c[A >> 2] << 4) | 0;
    }
    e = (h | 0) == 0 ? 8216 : h;
    p = j;
    h = q - j >> 4;
    c : while (1) {
     while (1) {
      if (!h) break c;
      n = (h | 0) / 2 | 0;
      o = p + (n << 4) | 0;
      if ((c[o >> 2] | 0) == (v | 0)) {
       h = n;
       continue;
      }
      k = c[p + (n << 4) + 4 >> 2] | 0;
      k = (k | 0) == 0 ? 8216 : k;
      l = a[k >> 0] | 0;
      j = a[e >> 0] | 0;
      if (!(l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != j << 24 >> 24)) {
       m = e;
       do {
        k = k + 1 | 0;
        m = m + 1 | 0;
        l = a[k >> 0] | 0;
        j = a[m >> 0] | 0;
       } while (!(l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != j << 24 >> 24));
      }
      if ((l & 255) < (j & 255)) break; else h = n;
     }
     p = o + 16 | 0;
     h = h + -1 - n | 0;
    }
    if ((p | 0) == (q | 0)) break;
    if ((v | 0) != (c[p >> 2] | 0)) {
     k = c[p + 4 >> 2] | 0;
     k = (k | 0) == 0 ? 8216 : k;
     j = a[e >> 0] | 0;
     h = a[k >> 0] | 0;
     if (!(j << 24 >> 24 == 0 ? 1 : j << 24 >> 24 != h << 24 >> 24)) {
      l = e;
      do {
       l = l + 1 | 0;
       k = k + 1 | 0;
       j = a[l >> 0] | 0;
       h = a[k >> 0] | 0;
      } while (!(j << 24 >> 24 == 0 ? 1 : j << 24 >> 24 != h << 24 >> 24));
     }
     if ((j & 255) < (h & 255)) break;
    }
    if (r) {
     j = 0;
     h = 0;
    } else {
     j = s + (c[w >> 2] << 4) | 0;
     h = s + (c[A >> 2] << 4) | 0;
    }
    p = h;
    h = j - h >> 4;
    d : while (1) {
     while (1) {
      if (!h) break d;
      n = (h | 0) / 2 | 0;
      o = p + (n << 4) | 0;
      if ((c[o >> 2] | 0) == (v | 0)) {
       h = n;
       continue;
      }
      k = c[p + (n << 4) + 4 >> 2] | 0;
      k = (k | 0) == 0 ? 8216 : k;
      l = a[k >> 0] | 0;
      j = a[e >> 0] | 0;
      if (!(l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != j << 24 >> 24)) {
       m = e;
       do {
        k = k + 1 | 0;
        m = m + 1 | 0;
        l = a[k >> 0] | 0;
        j = a[m >> 0] | 0;
       } while (!(l << 24 >> 24 == 0 ? 1 : l << 24 >> 24 != j << 24 >> 24));
      }
      if ((l & 255) < (j & 255)) break; else h = n;
     }
     p = o + 16 | 0;
     h = h + -1 - n | 0;
    }
    h = c[p + 12 >> 2] | 0;
    h = (h | 0) == 0 ? 8216 : h;
    if (!t) {
     t = of(g, e) | 0;
     if (t | 0) {
      k = e;
      e : do if (!(k & 3)) C = 53; else {
       j = k;
       while (1) {
        if (!(a[e >> 0] | 0)) {
         e = j;
         break e;
        }
        e = e + 1 | 0;
        j = e;
        if (!(j & 3)) {
         C = 53;
         break;
        }
       }
      } while (0);
      if ((C | 0) == 53) {
       C = 0;
       while (1) {
        j = c[e >> 2] | 0;
        if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) e = e + 4 | 0; else break;
       }
       if ((j & 255) << 24 >> 24) do e = e + 1 | 0; while ((a[e >> 0] | 0) != 0);
      }
      q = e - k | 0;
      r = h;
      s = r & 3;
      f : do if (!s) {
       e = h;
       C = 61;
      } else {
       e = h;
       j = r;
       while (1) {
        if (!(a[e >> 0] | 0)) {
         e = j;
         break f;
        }
        e = e + 1 | 0;
        j = e;
        if (!(j & 3)) {
         C = 61;
         break;
        }
       }
      } while (0);
      if ((C | 0) == 61) {
       C = 0;
       while (1) {
        j = c[e >> 2] | 0;
        if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) e = e + 4 | 0; else break;
       }
       if ((j & 255) << 24 >> 24) do e = e + 1 | 0; while ((a[e >> 0] | 0) != 0);
      }
      p = e - r | 0;
      o = p - q | 0;
      if ((o | 0) > 0) {
       j = o + 1 | 0;
       k = c[x >> 2] | 0;
       if ((f + j | 0) < (k | 0)) g = u; else {
        l = k + ((j | 0) < 128 ? 128 : j) | 0;
        m = pf(l) | 0;
        f = g;
        n = m;
        g : do if (!((f ^ n) & 3)) {
         if (!(f & 3)) f = m; else {
          f = m;
          do {
           u = a[g >> 0] | 0;
           a[f >> 0] = u;
           if (!(u << 24 >> 24)) break g;
           g = g + 1 | 0;
           f = f + 1 | 0;
          } while ((g & 3 | 0) != 0);
         }
         j = c[g >> 2] | 0;
         if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) while (1) {
          g = g + 4 | 0;
          k = f + 4 | 0;
          c[f >> 2] = j;
          j = c[g >> 2] | 0;
          if ((j & -2139062144 ^ -2139062144) & j + -16843009 | 0) {
           f = k;
           break;
          } else f = k;
         }
         C = 75;
        } else {
         f = m;
         C = 75;
        } while (0);
        do if ((C | 0) == 75) {
         C = 0;
         u = a[g >> 0] | 0;
         a[f >> 0] = u;
         if (!(u << 24 >> 24)) break;
         do {
          g = g + 1 | 0;
          f = f + 1 | 0;
          u = a[g >> 0] | 0;
          a[f >> 0] = u;
         } while (u << 24 >> 24 != 0);
        } while (0);
        qf(c[E >> 2] | 0);
        c[E >> 2] = 0;
        f = c[y >> 2] | 0;
        c[E >> 2] = m;
        c[x >> 2] = l;
        g = n;
       }
      } else g = u;
      j = t + q | 0;
      k = t + p | 0;
      g = g - j + f | 0;
      if ((p | 0) != (q | 0) & (g | 0) > 0) Of(k | 0, j | 0, g | 0) | 0;
      a[k + g >> 0] = 0;
      c[y >> 2] = f + o;
      if ((p | 0) > 0) {
       h : do if (!((r ^ t) & 3)) {
        e = (e | 0) != (r | 0);
        if (e & (s | 0) != 0) {
         f = p;
         g = t;
         do {
          u = a[h >> 0] | 0;
          a[g >> 0] = u;
          if (!(u << 24 >> 24)) break h;
          f = f + -1 | 0;
          h = h + 1 | 0;
          g = g + 1 | 0;
          e = (f | 0) != 0;
         } while (e & (h & 3 | 0) != 0);
        } else {
         f = p;
         g = t;
        }
        if (!e) {
         f = 0;
         break;
        }
        if (!(a[h >> 0] | 0)) break;
        i : do if (f >>> 0 > 3) {
         while (1) {
          e = c[h >> 2] | 0;
          if ((e & -2139062144 ^ -2139062144) & e + -16843009 | 0) break;
          c[g >> 2] = e;
          f = f + -4 | 0;
          h = h + 4 | 0;
          g = g + 4 | 0;
          if (f >>> 0 <= 3) break i;
         }
         C = 92;
         break h;
        } while (0);
        if (!f) f = 0; else C = 92;
       } else {
        g = t;
        f = p;
        C = 92;
       } while (0);
       j : do if ((C | 0) == 92) while (1) {
        C = 0;
        u = a[h >> 0] | 0;
        a[g >> 0] = u;
        if (!(u << 24 >> 24)) break j;
        f = f + -1 | 0;
        g = g + 1 | 0;
        if (!f) {
         f = 0;
         break;
        } else {
         h = h + 1 | 0;
         C = 92;
        }
       } while (0);
       Kf(g | 0, 0, f | 0) | 0;
      }
     }
    }
    if (v | 0) {
     u = c[v >> 2] | 0;
     c[v >> 2] = u - 1;
     if ((u | 0) == 1) qf(v);
    }
    g = c[E >> 2] | 0;
    f = c[y >> 2] | 0;
    e = Ue(g, f, 0, -1, 2508) | 0;
    if ((e | 0) <= 1) break b;
   }
   if (v) {
    A = c[v >> 2] | 0;
    c[v >> 2] = A - 1;
    if ((A | 0) == 1) qf(v);
   }
  } while (0);
  if ((g | 0) != 0 & (f | 0) > 0) if ((f | 0) > 0 & (a[g >> 0] | 0) != 0) {
   h = pf(f + 9 | 0) | 0;
   A = h;
   c[A >> 2] = 0;
   c[A + 4 >> 2] = 0;
   c[h >> 2] = 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   c[h + 4 >> 2] = f;
   A = h + 8 | 0;
   Nf(A | 0, g | 0, f | 0) | 0;
   a[A + f >> 0] = 0;
   f = A;
  } else {
   h = 0;
   f = 0;
  } else {
   h = 0;
   f = 0;
  }
  c[B >> 2] = (c[B >> 2] | 0) - 1;
  g = c[E >> 2] | 0;
  if (g | 0) qf(g);
  g = c[H >> 2] | 0;
  if (g | 0) {
   B = c[g >> 2] | 0;
   c[g >> 2] = B - 1;
   if ((B | 0) == 1) {
    qf(c[H >> 2] | 0);
    c[H >> 2] = 0;
    g = H + 4 | 0;
    c[g >> 2] = 0;
   } else g = H + 4 | 0;
   c[H >> 2] = 0;
   c[g >> 2] = 0;
  }
  c[H >> 2] = h;
  m = H + 4 | 0;
  c[m >> 2] = f;
 }
 if (a[((f | 0) == 0 ? 8216 : f) >> 0] | 0) {
  c[E >> 2] = 0;
  c[E + 4 >> 2] = 0;
  k = E + 8 | 0;
  c[k >> 2] = 0;
  Te(E, H);
  c[d >> 2] = 0;
  j = c[m >> 2] | 0;
  j = (j | 0) == 0 ? 8216 : j;
  f = a[j >> 0] | 0;
  if (!(f << 24 >> 24)) {
   c[d >> 2] = 0;
   g = 0;
  } else {
   g = c[1914] | 0;
   if (!g) {
    g = pf(24608) | 0;
    Kf(g | 0, 0, 24608) | 0;
    c[g + 16 >> 2] = 16;
    c[g + 20 >> 2] = 65536;
    c[g + 24 >> 2] = 0;
    c[g + 28 >> 2] = 0;
    f = g + 24608 | 0;
    h = g + 32 | 0;
    do {
     c[h >> 2] = 0;
     c[h + 4 >> 2] = 0;
     c[h + 8 >> 2] = 0;
     c[h + 12 >> 2] = 0;
     c[h + 16 >> 2] = 16;
     c[h + 20 >> 2] = 65536;
     h = h + 24 | 0;
    } while ((h | 0) != (f | 0));
    c[1914] = g;
    f = a[j >> 0] | 0;
    if (!(f << 24 >> 24)) {
     h = g;
     f = 0;
    } else {
     e = 0;
     h = j;
     C = 119;
    }
   } else {
    e = 0;
    h = j;
    C = 119;
   }
   if ((C | 0) == 119) {
    while (1) {
     h = h + 1 | 0;
     C = ((f << 24 >> 24) + e | 0) * 1025 | 0;
     e = C >> 6 ^ C;
     f = a[h >> 0] | 0;
     if (!(f << 24 >> 24)) break; else C = 119;
    }
    h = g;
    f = e * 9 | 0;
   }
   f = (f >> 11 ^ f) * 32769 | 0;
   g = Ve(h, f, j) | 0;
   c[d >> 2] = g;
   if (!g) {
    g = We(h, f, j) | 0;
    c[d >> 2] = g;
   }
  }
  b[D >> 1] = 0;
  l = c[E >> 2] | 0;
  e = (l | 0) == 0;
  if (e) C = 126; else {
   f = of(l, 2453) | 0;
   if (!f) C = 126; else {
    f = f - l | 0;
    f = (f | 0) < 8 ? f : -1;
    b[d + 6 >> 1] = f;
    f = f << 16 >> 16;
    if ((f | 0) == -1) C = 148; else {
     g = f + 3 | 0;
     j = c[k >> 2] | 0;
     e = Ue(l, j, g, -1, 2497) | 0;
     e = (e | 0) == -1 ? j : e;
     do if ((g | 0) != (e | 0)) {
      h = Ue(l, j, g, e, 2499) | 0;
      if ((h | 0) != -1) {
       f = Ue(l, j, g, h, 2508) | 0;
       b[d + 8 >> 1] = g;
       if ((f | 0) == -1) f = h; else {
        b[d + 12 >> 1] = f + 1;
        b[d + 14 >> 1] = h;
       }
       b[d + 10 >> 1] = f;
       g = h + 1 | 0;
      }
      f = Ue(l, j, g, e, 2508) | 0;
      b[d + 16 >> 1] = g;
      if ((f | 0) == -1) {
       b[d + 18 >> 1] = e;
       break;
      } else {
       b[d + 18 >> 1] = f;
       b[d + 20 >> 1] = f + 1;
       b[d + 22 >> 1] = e;
       break;
      }
     } while (0);
     if ((e | 0) != (j | 0)) {
      g = e + 1 | 0;
      f = Ue(l, j, g, j, 2501) | 0;
      f = (f | 0) == -1 ? j : f;
      if ((g | 0) != (f | 0)) {
       b[d + 24 >> 1] = g;
       b[d + 26 >> 1] = f;
      }
      if ((f | 0) != (j | 0)) {
       if ((a[l + f >> 0] | 0) == 63) {
        g = f + 1 | 0;
        f = Ue(l, j, g, j, 2504) | 0;
        f = (f | 0) == -1 ? j : f;
        if ((g | 0) == (f | 0)) f = g; else {
         b[d + 32 >> 1] = g;
         b[d + 34 >> 1] = f;
        }
       }
       if ((f | 0) != (j | 0)) if ((a[l + f >> 0] | 0) == 35) {
        g = f + 1 | 0;
        f = Ue(l, j, g, j, 2506) | 0;
        f = (f | 0) == -1 ? j : f;
        if ((g | 0) != (f | 0)) {
         b[d + 28 >> 1] = g;
         b[d + 30 >> 1] = f;
        }
       }
      }
     }
     a[G >> 0] = 1;
     C = 149;
    }
   }
  }
  if ((C | 0) == 126) {
   b[d + 6 >> 1] = -1;
   C = 148;
  }
  if ((C | 0) == 148) {
   c[F >> 2] = c[((g | 0) == 0 ? 1992 : g + 12 | 0) >> 2];
   Ge(2457, F);
   g = D;
   h = g + 32 | 0;
   do {
    b[g >> 1] = 65535;
    g = g + 2 | 0;
   } while ((g | 0) < (h | 0));
   if (!e) C = 149;
  }
  if ((C | 0) == 149) qf(l);
 }
 f = c[H >> 2] | 0;
 if (!f) {
  i = I;
  return;
 }
 d = c[f >> 2] | 0;
 c[f >> 2] = d - 1;
 if ((d | 0) == 1) {
  qf(f);
  c[H >> 2] = 0;
  c[m >> 2] = 0;
 }
 c[H >> 2] = 0;
 c[m >> 2] = 0;
 i = I;
 return;
}

function Td(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 48 | 0;
 r = s + 24 | 0;
 k = s + 20 | 0;
 j = s + 16 | 0;
 m = s + 12 | 0;
 l = s + 8 | 0;
 q = s + 4 | 0;
 p = s;
 d = pf(12) | 0;
 e = d + 4 | 0;
 c[e >> 2] = 0;
 c[d >> 2] = 1876;
 f = (d | 0) == 0;
 if (!f) c[e >> 2] = (c[e >> 2] | 0) + 1;
 g = b + 24 | 0;
 h = c[g >> 2] | 0;
 if ((d | 0) == (h | 0)) {
  if (!f) {
   o = c[e >> 2] | 0;
   c[e >> 2] = o - 1;
   if ((o | 0) == 1) _d(d);
  }
 } else {
  if (h | 0) {
   f = h + 4 | 0;
   o = c[f >> 2] | 0;
   c[f >> 2] = o - 1;
   if ((o | 0) == 1) Qa[c[c[h >> 2] >> 2] & 255](h);
   c[g >> 2] = 0;
  }
  c[g >> 2] = d;
 }
 o = b + 28 | 0;
 a : do if (!1) {
  d = 3481;
  n = 15;
 } else {
  d = 3481;
  e = 3481;
  while (1) {
   if (!(a[d >> 0] | 0)) {
    d = e;
    break a;
   }
   d = d + 1 | 0;
   e = d;
   if (!(e & 3)) {
    n = 15;
    break;
   }
  }
 } while (0);
 if ((n | 0) == 15) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 3481 | 0;
 if ((d | 0) > 0) {
  b = pf(d + 9 | 0) | 0;
  h = b;
  c[h >> 2] = 0;
  c[h + 4 >> 2] = 0;
  c[b >> 2] = 0;
  c[b >> 2] = (c[b >> 2] | 0) + 1;
  c[b + 4 >> 2] = d;
  h = b + 8 | 0;
  c[k >> 2] = h;
  Nf(h | 0, 3481, d | 0) | 0;
  a[h + d >> 0] = 0;
 } else {
  c[k >> 2] = 0;
  b = 0;
 }
 b : do if (!0) {
  d = 3492;
  n = 26;
 } else {
  d = 3492;
  e = 3492;
  while (1) {
   if (!(a[d >> 0] | 0)) {
    d = e;
    break b;
   }
   d = d + 1 | 0;
   e = d;
   if (!(e & 3)) {
    n = 26;
    break;
   }
  }
 } while (0);
 if ((n | 0) == 26) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 3492 | 0;
 if ((d | 0) > 0) {
  g = pf(d + 9 | 0) | 0;
  h = g;
  c[h >> 2] = 0;
  c[h + 4 >> 2] = 0;
  c[g >> 2] = 0;
  c[g >> 2] = (c[g >> 2] | 0) + 1;
  c[g + 4 >> 2] = d;
  h = g + 8 | 0;
  c[j >> 2] = h;
  Nf(h | 0, 3492, d | 0) | 0;
  a[h + d >> 0] = 0;
 } else {
  c[j >> 2] = 0;
  g = 0;
 }
 c[r >> 2] = b;
 h = r + 4 | 0;
 c[h >> 2] = c[k >> 2];
 if (b | 0) {
  f = b;
  c[f >> 2] = (c[f >> 2] | 0) + 1;
 }
 d = r + 8 | 0;
 c[d >> 2] = g;
 e = r + 12 | 0;
 c[e >> 2] = c[j >> 2];
 if (g | 0) {
  f = g;
  c[f >> 2] = (c[f >> 2] | 0) + 1;
 }
 zb(o, r);
 f = c[d >> 2] | 0;
 if (f | 0) {
  t = c[f >> 2] | 0;
  c[f >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[d >> 2] = 0;
  c[e >> 2] = 0;
 }
 d = c[r >> 2] | 0;
 if (d | 0) {
  t = c[d >> 2] | 0;
  c[d >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(c[r >> 2] | 0);
   c[r >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[r >> 2] = 0;
  c[h >> 2] = 0;
 }
 if (g | 0) {
  h = g;
  t = c[h >> 2] | 0;
  c[h >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(g);
   c[j >> 2] = 0;
  }
  c[j >> 2] = 0;
 }
 if (b | 0) {
  j = b;
  t = c[j >> 2] | 0;
  c[j >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(b);
   c[k >> 2] = 0;
  }
  c[k >> 2] = 0;
 }
 c : do if (!0) {
  d = 3504;
  n = 57;
 } else {
  d = 3504;
  e = 3504;
  while (1) {
   if (!(a[d >> 0] | 0)) {
    d = e;
    break c;
   }
   d = d + 1 | 0;
   e = d;
   if (!(e & 3)) {
    n = 57;
    break;
   }
  }
 } while (0);
 if ((n | 0) == 57) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 3504 | 0;
 if ((d | 0) > 0) {
  b = pf(d + 9 | 0) | 0;
  t = b;
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[b >> 2] = 0;
  c[b >> 2] = (c[b >> 2] | 0) + 1;
  c[b + 4 >> 2] = d;
  t = b + 8 | 0;
  c[m >> 2] = t;
  Nf(t | 0, 3504, d | 0) | 0;
  a[t + d >> 0] = 0;
 } else {
  c[m >> 2] = 0;
  b = 0;
 }
 d : do if (!3) {
  d = 3515;
  n = 68;
 } else {
  d = 3515;
  e = 3515;
  while (1) {
   if (!(a[d >> 0] | 0)) {
    d = e;
    break d;
   }
   d = d + 1 | 0;
   e = d;
   if (!(e & 3)) {
    n = 68;
    break;
   }
  }
 } while (0);
 if ((n | 0) == 68) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 3515 | 0;
 if ((d | 0) > 0) {
  g = pf(d + 9 | 0) | 0;
  t = g;
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[g >> 2] = 0;
  c[g >> 2] = (c[g >> 2] | 0) + 1;
  c[g + 4 >> 2] = d;
  t = g + 8 | 0;
  c[l >> 2] = t;
  Nf(t | 0, 3515, d | 0) | 0;
  a[t + d >> 0] = 0;
 } else {
  c[l >> 2] = 0;
  g = 0;
 }
 c[r >> 2] = b;
 h = r + 4 | 0;
 c[h >> 2] = c[m >> 2];
 if (b | 0) {
  t = b;
  c[t >> 2] = (c[t >> 2] | 0) + 1;
 }
 d = r + 8 | 0;
 c[d >> 2] = g;
 e = r + 12 | 0;
 c[e >> 2] = c[l >> 2];
 if (g | 0) {
  t = g;
  c[t >> 2] = (c[t >> 2] | 0) + 1;
 }
 zb(o, r);
 f = c[d >> 2] | 0;
 if (f | 0) {
  t = c[f >> 2] | 0;
  c[f >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   c[e >> 2] = 0;
  }
  c[d >> 2] = 0;
  c[e >> 2] = 0;
 }
 d = c[r >> 2] | 0;
 if (d | 0) {
  t = c[d >> 2] | 0;
  c[d >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(c[r >> 2] | 0);
   c[r >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[r >> 2] = 0;
  c[h >> 2] = 0;
 }
 if (g | 0) {
  k = g;
  t = c[k >> 2] | 0;
  c[k >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(g);
   c[l >> 2] = 0;
  }
  c[l >> 2] = 0;
 }
 if (b | 0) {
  l = b;
  t = c[l >> 2] | 0;
  c[l >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(b);
   c[m >> 2] = 0;
  }
  c[m >> 2] = 0;
 }
 e : do if (!2) {
  d = 3526;
  n = 99;
 } else {
  d = 3526;
  e = 3526;
  while (1) {
   if (!(a[d >> 0] | 0)) {
    d = e;
    break e;
   }
   d = d + 1 | 0;
   e = d;
   if (!(e & 3)) {
    n = 99;
    break;
   }
  }
 } while (0);
 if ((n | 0) == 99) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 3526 | 0;
 if ((d | 0) > 0) {
  b = pf(d + 9 | 0) | 0;
  t = b;
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[b >> 2] = 0;
  c[b >> 2] = (c[b >> 2] | 0) + 1;
  c[b + 4 >> 2] = d;
  t = b + 8 | 0;
  c[q >> 2] = t;
  Nf(t | 0, 3526, d | 0) | 0;
  a[t + d >> 0] = 0;
 } else {
  c[q >> 2] = 0;
  b = 0;
 }
 f : do if (!2) {
  d = 3542;
  n = 110;
 } else {
  e = 3542;
  d = 3542;
  while (1) {
   if (!(a[e >> 0] | 0)) break f;
   e = e + 1 | 0;
   d = e;
   if (!(d & 3)) {
    d = e;
    n = 110;
    break;
   }
  }
 } while (0);
 if ((n | 0) == 110) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 d = d - 3542 | 0;
 if ((d | 0) > 0) {
  g = pf(d + 9 | 0) | 0;
  t = g;
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[g >> 2] = 0;
  c[g >> 2] = (c[g >> 2] | 0) + 1;
  c[g + 4 >> 2] = d;
  t = g + 8 | 0;
  c[p >> 2] = t;
  Nf(t | 0, 3542, d | 0) | 0;
  a[t + d >> 0] = 0;
 } else {
  c[p >> 2] = 0;
  g = 0;
 }
 c[r >> 2] = b;
 h = r + 4 | 0;
 c[h >> 2] = c[q >> 2];
 if (b | 0) {
  t = b;
  c[t >> 2] = (c[t >> 2] | 0) + 1;
 }
 e = r + 8 | 0;
 c[e >> 2] = g;
 f = r + 12 | 0;
 c[f >> 2] = c[p >> 2];
 if (g | 0) {
  t = g;
  c[t >> 2] = (c[t >> 2] | 0) + 1;
 }
 zb(o, r);
 d = c[e >> 2] | 0;
 if (d | 0) {
  t = c[d >> 2] | 0;
  c[d >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(c[e >> 2] | 0);
   c[e >> 2] = 0;
   c[f >> 2] = 0;
  }
  c[e >> 2] = 0;
  c[f >> 2] = 0;
 }
 d = c[r >> 2] | 0;
 if (d | 0) {
  t = c[d >> 2] | 0;
  c[d >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(c[r >> 2] | 0);
   c[r >> 2] = 0;
   c[h >> 2] = 0;
  }
  c[r >> 2] = 0;
  c[h >> 2] = 0;
 }
 if (g | 0) {
  r = g;
  t = c[r >> 2] | 0;
  c[r >> 2] = t - 1;
  if ((t | 0) == 1) {
   qf(g);
   c[p >> 2] = 0;
  }
  c[p >> 2] = 0;
 }
 if (!b) {
  i = s;
  return;
 }
 r = b;
 t = c[r >> 2] | 0;
 c[r >> 2] = t - 1;
 if ((t | 0) == 1) {
  qf(b);
  c[q >> 2] = 0;
 }
 c[q >> 2] = 0;
 i = s;
 return;
}

function qf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[1931] | 0;
 if (d >>> 0 < h >>> 0) Ga();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) Ga();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) Ga();
  if ((k | 0) == (c[1932] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    f = j;
    break;
   }
   c[1929] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 7748 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) Ga();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) Ga();
   }
   if ((d | 0) == (b | 0)) {
    c[1927] = c[1927] & ~(1 << e);
    q = k;
    f = j;
    break;
   }
   if ((d | 0) == (a | 0)) g = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) Ga();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) g = a; else Ga();
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
   if (b >>> 0 < h >>> 0) Ga(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) Ga();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) Ga();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else Ga();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 8012 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[1928] = c[1928] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[1931] | 0) >>> 0) Ga();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   d = c[1931] | 0;
   if (i >>> 0 < d >>> 0) Ga();
   c[i + 24 >> 2] = g;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) Ga(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
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
 if (q >>> 0 >= m >>> 0) Ga();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) Ga();
 if (!(b & 2)) {
  if ((m | 0) == (c[1933] | 0)) {
   p = (c[1930] | 0) + f | 0;
   c[1930] = p;
   c[1933] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[1932] | 0)) return;
   c[1932] = 0;
   c[1929] = 0;
   return;
  }
  if ((m | 0) == (c[1932] | 0)) {
   p = (c[1929] | 0) + f | 0;
   c[1929] = p;
   c[1932] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (b & -8) + f | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 7748 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[1931] | 0) >>> 0) Ga();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) Ga();
   }
   if ((d | 0) == (b | 0)) {
    c[1927] = c[1927] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[1931] | 0) >>> 0) Ga();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else Ga();
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
    if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[1931] | 0) >>> 0) Ga();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) Ga();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else Ga();
   } while (0);
   if (g | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 8012 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[1928] = c[1928] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[1931] | 0) >>> 0) Ga();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[1931] | 0;
    if (n >>> 0 < d >>> 0) Ga();
    c[n + 24 >> 2] = g;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) Ga(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[1932] | 0)) {
   c[1929] = f;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  d = 7748 + (a << 1 << 2) | 0;
  b = c[1927] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[1927] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
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
 e = 8012 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[1928] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[1928] = a | b;
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
  if ((a | 0) == 127) if (b >>> 0 < (c[1931] | 0) >>> 0) Ga(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = e;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = e + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[1931] | 0;
   if (b >>> 0 >= p >>> 0 & e >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = e;
    c[q + 24 >> 2] = 0;
    break;
   } else Ga();
  }
 } while (0);
 q = (c[1935] | 0) + -1 | 0;
 c[1935] = q;
 if (!q) a = 8164; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[1935] = -1;
 return;
}

function of(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 1056 | 0;
 v = x + 1024 | 0;
 w = x;
 o = a[e >> 0] | 0;
 do if (o << 24 >> 24) {
  u = nf(b, o << 24 >> 24) | 0;
  u = (a[u >> 0] | 0) == o << 24 >> 24 ? u : 0;
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
          g = bf(h, 0, k) | 0;
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

function We(b, d, e) {
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
  Xe(b);
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
  Xe(b);
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
    He(3923, r);
    Aa();
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
   d = pf(e << 2) | 0;
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
   if (f | 0) qf(f);
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

function zc(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 112 | 0;
 z = C + 104 | 0;
 y = C + 48 | 0;
 B = C + 24 | 0;
 A = C;
 n = c[1642] | 0;
 v = n + 80 | 0;
 g = c[e + 16 >> 2] | 0;
 do if (!g) c[B + 16 >> 2] = 0; else if ((g | 0) == (e | 0)) {
  c[B + 16 >> 2] = B;
  Ra[c[(c[g >> 2] | 0) + 12 >> 2] & 255](g, B);
  break;
 } else {
  c[B + 16 >> 2] = Sa[c[(c[g >> 2] | 0) + 8 >> 2] & 255](g) | 0;
  break;
 } while (0);
 g = c[f + 16 >> 2] | 0;
 do if (!g) {
  w = A + 16 | 0;
  c[w >> 2] = 0;
 } else if ((g | 0) == (f | 0)) {
  w = A + 16 | 0;
  c[w >> 2] = A;
  Ra[c[(c[g >> 2] | 0) + 12 >> 2] & 255](g, A);
  break;
 } else {
  w = A + 16 | 0;
  c[w >> 2] = Sa[c[(c[g >> 2] | 0) + 8 >> 2] & 255](g) | 0;
  break;
 } while (0);
 g = pf(112) | 0;
 e = g + 4 | 0;
 c[e >> 2] = 0;
 f = g + 8 | 0;
 a[g + 12 >> 0] = 0;
 a[g + 13 >> 0] = 0;
 h = g + 16 | 0;
 c[h >> 2] = 0;
 j = g + 52 | 0;
 a[j >> 0] = 0;
 k = g + 20 | 0;
 l = k;
 m = l + 32 | 0;
 do {
  b[l >> 1] = 65535;
  l = l + 2 | 0;
 } while ((l | 0) < (m | 0));
 t = g + 68 | 0;
 a[g + 96 >> 0] = 0;
 u = g + 84 | 0;
 c[t >> 2] = 0;
 c[t + 4 >> 2] = 0;
 c[t + 8 >> 2] = 0;
 c[t + 12 >> 2] = 0;
 b[u >> 1] = 65535;
 b[u + 2 >> 1] = 65535;
 b[u + 4 >> 1] = 65535;
 b[u + 6 >> 1] = 65535;
 b[u + 8 >> 1] = 65535;
 b[u + 10 >> 1] = 65535;
 c[g + 104 >> 2] = 0;
 c[g + 108 >> 2] = 0;
 a[g + 56 >> 0] = 1;
 a[g + 57 >> 0] = 1;
 c[g + 60 >> 2] = 0;
 c[g + 64 >> 2] = -1;
 c[g + 100 >> 2] = -1;
 c[g >> 2] = 1500;
 c[f >> 2] = 1;
 if (g | 0) c[e >> 2] = (c[e >> 2] | 0) + 1;
 c[z >> 2] = g;
 if ((h | 0) != (d | 0)) {
  c[h >> 2] = 0;
  Se(h, d);
  b[k >> 1] = b[d + 4 >> 1] | 0;
  b[g + 22 >> 1] = b[d + 6 >> 1] | 0;
  b[g + 24 >> 1] = b[d + 8 >> 1] | 0;
  b[g + 26 >> 1] = b[d + 10 >> 1] | 0;
  b[g + 28 >> 1] = b[d + 12 >> 1] | 0;
  b[g + 30 >> 1] = b[d + 14 >> 1] | 0;
  b[g + 32 >> 1] = b[d + 16 >> 1] | 0;
  b[g + 34 >> 1] = b[d + 18 >> 1] | 0;
  b[g + 36 >> 1] = b[d + 20 >> 1] | 0;
  b[g + 38 >> 1] = b[d + 22 >> 1] | 0;
  b[g + 40 >> 1] = b[d + 24 >> 1] | 0;
  b[g + 42 >> 1] = b[d + 26 >> 1] | 0;
  b[g + 44 >> 1] = b[d + 28 >> 1] | 0;
  b[g + 46 >> 1] = b[d + 30 >> 1] | 0;
  b[g + 48 >> 1] = b[d + 32 >> 1] | 0;
  b[g + 50 >> 1] = b[d + 34 >> 1] | 0;
  a[j >> 0] = a[d + 36 >> 0] | 0;
 }
 g = c[(c[1642] | 0) + 76 >> 2] | 0;
 Wa[c[(c[g >> 2] | 0) + 4 >> 2] & 255](g, z) | 0;
 g = c[z >> 2] | 0;
 c[y >> 2] = g;
 if (g | 0) {
  u = g + 4 | 0;
  c[u >> 2] = (c[u >> 2] | 0) + 1;
 }
 t = y + 8 | 0;
 u = B + 16 | 0;
 g = c[u >> 2] | 0;
 do if (!g) c[y + 24 >> 2] = 0; else if ((g | 0) == (B | 0)) {
  c[y + 24 >> 2] = t;
  Ra[c[(c[B >> 2] | 0) + 12 >> 2] & 255](B, t);
  break;
 } else {
  c[y + 24 >> 2] = Sa[c[(c[g >> 2] | 0) + 8 >> 2] & 255](g) | 0;
  break;
 } while (0);
 g = y + 32 | 0;
 e = c[A + 16 >> 2] | 0;
 do if (!e) c[y + 48 >> 2] = 0; else if ((e | 0) == (A | 0)) {
  c[y + 48 >> 2] = g;
  Ra[c[(c[A >> 2] | 0) + 12 >> 2] & 255](A, g);
  break;
 } else {
  c[y + 48 >> 2] = Sa[c[(c[e >> 2] | 0) + 8 >> 2] & 255](e) | 0;
  break;
 } while (0);
 r = n + 84 | 0;
 k = c[r >> 2] | 0;
 s = n + 92 | 0;
 e = c[s >> 2] | 0;
 if ((k | 0) == (e | 0)) {
  e = k >> 1;
  f = c[n + 96 >> 2] | 0;
  if ((e | 0) >= (f | 0)) {
   f = c[n + 100 >> 2] | 0;
   f = (e | 0) > (f | 0) ? f : e;
  }
  q = f + k | 0;
  if (f) {
   p = n + 88 | 0;
   k = k - (c[p >> 2] | 0) | 0;
   o = pf(q * 56 | 0) | 0;
   if ((k | 0) > 0) {
    m = o;
    d = 0;
    n = (c[v >> 2] | 0) + ((c[p >> 2] | 0) * 56 | 0) | 0;
    do {
     c[m >> 2] = c[n >> 2];
     c[n >> 2] = 0;
     e = m + 8 | 0;
     l = n + 24 | 0;
     f = c[l >> 2] | 0;
     do if (!f) c[m + 24 >> 2] = 0; else if ((f | 0) == (n + 8 | 0)) {
      c[m + 24 >> 2] = e;
      j = c[l >> 2] | 0;
      Ra[c[(c[j >> 2] | 0) + 12 >> 2] & 255](j, e);
      break;
     } else {
      c[m + 24 >> 2] = f;
      c[l >> 2] = 0;
      break;
     } while (0);
     f = m + 32 | 0;
     j = n + 48 | 0;
     h = c[j >> 2] | 0;
     do if (!h) {
      c[m + 48 >> 2] = 0;
      e = n + 32 | 0;
      x = 43;
     } else {
      e = n + 32 | 0;
      if ((h | 0) == (e | 0)) {
       c[m + 48 >> 2] = f;
       e = c[j >> 2] | 0;
       Ra[c[(c[e >> 2] | 0) + 12 >> 2] & 255](e, f);
       e = h;
       x = 43;
       break;
      } else {
       c[m + 48 >> 2] = h;
       c[j >> 2] = 0;
       f = 0;
       break;
      }
     } while (0);
     m = m + 56 | 0;
     if ((x | 0) == 43) {
      x = 0;
      f = c[j >> 2] | 0;
     }
     if ((f | 0) == (e | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
     f = n + 8 | 0;
     e = c[l >> 2] | 0;
     if ((e | 0) == (f | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
     e = c[n >> 2] | 0;
     if (e | 0) {
      j = e + 4 | 0;
      l = c[j >> 2] | 0;
      c[j >> 2] = l - 1;
      if ((l | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
      c[n >> 2] = 0;
     }
     n = n + 56 | 0;
     d = d + 1 | 0;
    } while ((d | 0) != (k | 0));
   }
   e = c[v >> 2] | 0;
   if (e | 0) qf(e);
   c[v >> 2] = o;
   c[r >> 2] = q;
   c[p >> 2] = 0;
   c[s >> 2] = k;
  }
 } else k = e;
 c[s >> 2] = k + 1;
 h = c[v >> 2] | 0;
 c[h + (k * 56 | 0) >> 2] = c[y >> 2];
 c[y >> 2] = 0;
 e = h + (k * 56 | 0) + 8 | 0;
 l = y + 24 | 0;
 f = c[l >> 2] | 0;
 do if (!f) c[h + (k * 56 | 0) + 24 >> 2] = 0; else if ((f | 0) == (t | 0)) {
  c[h + (k * 56 | 0) + 24 >> 2] = e;
  v = c[l >> 2] | 0;
  Ra[c[(c[v >> 2] | 0) + 12 >> 2] & 255](v, e);
  break;
 } else {
  c[h + (k * 56 | 0) + 24 >> 2] = f;
  c[l >> 2] = 0;
  break;
 } while (0);
 e = h + (k * 56 | 0) + 32 | 0;
 j = y + 48 | 0;
 f = c[j >> 2] | 0;
 do if (!f) {
  c[h + (k * 56 | 0) + 48 >> 2] = 0;
  x = 70;
 } else if ((f | 0) == (g | 0)) {
  c[h + (k * 56 | 0) + 48 >> 2] = e;
  x = c[j >> 2] | 0;
  Ra[c[(c[x >> 2] | 0) + 12 >> 2] & 255](x, e);
  x = 70;
  break;
 } else {
  c[h + (k * 56 | 0) + 48 >> 2] = f;
  c[j >> 2] = 0;
  e = 0;
  break;
 } while (0);
 if ((x | 0) == 70) e = c[j >> 2] | 0;
 if ((e | 0) == (g | 0)) Qa[c[(c[g >> 2] | 0) + 16 >> 2] & 255](g); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
 g = c[l >> 2] | 0;
 if ((g | 0) == (t | 0)) Qa[c[(c[t >> 2] | 0) + 16 >> 2] & 255](t); else if (g | 0) Qa[c[(c[g >> 2] | 0) + 20 >> 2] & 255](g);
 g = c[y >> 2] | 0;
 if (g | 0) {
  v = g + 4 | 0;
  x = c[v >> 2] | 0;
  c[v >> 2] = x - 1;
  if ((x | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
  c[y >> 2] = 0;
 }
 g = c[z >> 2] | 0;
 if (g | 0) {
  x = g + 4 | 0;
  y = c[x >> 2] | 0;
  c[x >> 2] = y - 1;
  if ((y | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
  c[z >> 2] = 0;
 }
 g = c[w >> 2] | 0;
 if ((g | 0) == (A | 0)) Qa[c[(c[A >> 2] | 0) + 16 >> 2] & 255](A); else if (g | 0) Qa[c[(c[g >> 2] | 0) + 20 >> 2] & 255](g);
 g = c[u >> 2] | 0;
 if ((g | 0) == (B | 0)) {
  Qa[c[(c[B >> 2] | 0) + 16 >> 2] & 255](B);
  i = C;
  return;
 }
 if (!g) {
  i = C;
  return;
 }
 Qa[c[(c[g >> 2] | 0) + 20 >> 2] & 255](g);
 i = C;
 return;
}

function Vd(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 B = i;
 i = i + 16 | 0;
 y = B;
 A = pf(128) | 0;
 k = A + 4 | 0;
 c[k >> 2] = 0;
 j = A + 8 | 0;
 a[A + 12 >> 0] = 0;
 a[A + 13 >> 0] = 0;
 c[A >> 2] = 1856;
 n = A + 20 | 0;
 c[n >> 2] = 0;
 o = A + 56 | 0;
 a[o >> 0] = 0;
 p = A + 24 | 0;
 g = p;
 h = g + 32 | 0;
 do {
  b[g >> 1] = 65535;
  g = g + 2 | 0;
 } while ((g | 0) < (h | 0));
 z = A + 60 | 0;
 c[z >> 2] = 0;
 c[z + 4 >> 2] = 0;
 c[z + 8 >> 2] = 0;
 c[z + 12 >> 2] = 0;
 w = A + 76 | 0;
 c[w >> 2] = 16;
 x = A + 80 | 0;
 c[x >> 2] = 65536;
 v = A + 84 | 0;
 a[v >> 0] = 0;
 r = A + 88 | 0;
 s = A + 92 | 0;
 t = A + 96 | 0;
 l = A + 100 | 0;
 m = A + 116 | 0;
 a[m >> 0] = 0;
 q = A + 104 | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 b[q >> 1] = 65535;
 b[q + 2 >> 1] = 65535;
 b[q + 4 >> 1] = 65535;
 b[q + 6 >> 1] = 65535;
 b[q + 8 >> 1] = 65535;
 b[q + 10 >> 1] = 65535;
 u = A + 120 | 0;
 c[u >> 2] = 0;
 c[A + 124 >> 2] = 0;
 c[j >> 2] = 1;
 g = A + 16 | 0;
 c[g >> 2] = 1;
 if (A | 0) c[k >> 2] = (c[k >> 2] | 0) + 1;
 c[g >> 2] = e;
 h = c[f >> 2] | 0;
 g = h + 16 | 0;
 if ((g | 0) != (n | 0)) {
  c[n >> 2] = 0;
  Se(n, g);
  b[p >> 1] = b[h + 20 >> 1] | 0;
  b[A + 26 >> 1] = b[h + 22 >> 1] | 0;
  b[A + 28 >> 1] = b[h + 24 >> 1] | 0;
  b[A + 30 >> 1] = b[h + 26 >> 1] | 0;
  b[A + 32 >> 1] = b[h + 28 >> 1] | 0;
  b[A + 34 >> 1] = b[h + 30 >> 1] | 0;
  b[A + 36 >> 1] = b[h + 32 >> 1] | 0;
  b[A + 38 >> 1] = b[h + 34 >> 1] | 0;
  b[A + 40 >> 1] = b[h + 36 >> 1] | 0;
  b[A + 42 >> 1] = b[h + 38 >> 1] | 0;
  b[A + 44 >> 1] = b[h + 40 >> 1] | 0;
  b[A + 46 >> 1] = b[h + 42 >> 1] | 0;
  b[A + 48 >> 1] = b[h + 44 >> 1] | 0;
  b[A + 50 >> 1] = b[h + 46 >> 1] | 0;
  b[A + 52 >> 1] = b[h + 48 >> 1] | 0;
  b[A + 54 >> 1] = b[h + 50 >> 1] | 0;
  a[o >> 0] = a[h + 52 >> 0] | 0;
  h = c[f >> 2] | 0;
 }
 g = h + 80 | 0;
 if ((g | 0) != (l | 0)) {
  c[l >> 2] = 0;
  Se(l, g);
  b[q >> 1] = b[h + 84 >> 1] | 0;
  b[A + 106 >> 1] = b[h + 86 >> 1] | 0;
  b[A + 108 >> 1] = b[h + 88 >> 1] | 0;
  b[A + 110 >> 1] = b[h + 90 >> 1] | 0;
  b[A + 112 >> 1] = b[h + 92 >> 1] | 0;
  b[A + 114 >> 1] = b[h + 94 >> 1] | 0;
  a[m >> 0] = a[h + 96 >> 0] | 0;
  h = c[f >> 2] | 0;
 }
 g = c[t >> 2] | 0;
 if (!g) g = h; else {
  qf(g);
  g = c[f >> 2] | 0;
 }
 c[t >> 2] = 0;
 c[r >> 2] = 0;
 c[s >> 2] = 0;
 q = h + 68 | 0;
 c[r >> 2] = c[q >> 2];
 r = h + 72 | 0;
 c[s >> 2] = c[r >> 2];
 h = h + 76 | 0;
 c[t >> 2] = c[h >> 2];
 c[q >> 2] = 0;
 c[r >> 2] = 0;
 c[h >> 2] = 0;
 h = c[u >> 2] | 0;
 if ((g | 0) != (h | 0)) {
  if (h) {
   s = h + 4 | 0;
   t = c[s >> 2] | 0;
   c[s >> 2] = t - 1;
   if ((t | 0) == 1) Qa[c[c[h >> 2] >> 2] & 255](h);
   c[u >> 2] = 0;
   g = c[f >> 2] | 0;
  }
  c[u >> 2] = g;
  if (g | 0) {
   u = g + 4 | 0;
   c[u >> 2] = (c[u >> 2] | 0) + 1;
  }
 }
 g = c[f >> 2] | 0;
 if (c[g + 60 >> 2] | 0) {
  He(3556, y);
  Aa();
 }
 if ((c[g + 64 >> 2] | 0) != -1) {
  He(3556, y);
  Aa();
 }
 n = d + 28 | 0;
 if ((n | 0) == (z | 0)) {
  i = B;
  return A | 0;
 }
 xc(z);
 c[w >> 2] = c[d + 44 >> 2];
 c[x >> 2] = c[d + 48 >> 2];
 a[v >> 0] = a[d + 52 >> 0] | 0;
 if ((n | 0) == (z | 0)) {
  i = B;
  return A | 0;
 }
 h = c[z >> 2] | 0;
 o = A + 68 | 0;
 if (!h) g = A + 72 | 0; else {
  e = c[o >> 2] | 0;
  g = A + 72 | 0;
  if ((e | 0) < (c[g >> 2] | 0)) {
   k = h + (e << 4) + 8 | 0;
   j = c[k >> 2] | 0;
   if (j | 0) {
    y = c[j >> 2] | 0;
    c[j >> 2] = y - 1;
    if ((y | 0) == 1) {
     qf(c[k >> 2] | 0);
     c[k >> 2] = 0;
     j = h + (e << 4) + 12 | 0;
     c[j >> 2] = 0;
    } else j = h + (e << 4) + 12 | 0;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
   }
   k = h + (e << 4) | 0;
   j = c[k >> 2] | 0;
   if (j | 0) {
    y = c[j >> 2] | 0;
    c[j >> 2] = y - 1;
    if ((y | 0) == 1) {
     qf(c[k >> 2] | 0);
     c[k >> 2] = 0;
     h = h + (e << 4) + 4 | 0;
     c[h >> 2] = 0;
    } else h = h + (e << 4) + 4 | 0;
    c[k >> 2] = 0;
    c[h >> 2] = 0;
   }
   h = e + 1 | 0;
   if ((h | 0) < (c[g >> 2] | 0)) do {
    e = c[z >> 2] | 0;
    k = e + (h << 4) + 8 | 0;
    j = c[k >> 2] | 0;
    if (j | 0) {
     y = c[j >> 2] | 0;
     c[j >> 2] = y - 1;
     if ((y | 0) == 1) {
      qf(c[k >> 2] | 0);
      c[k >> 2] = 0;
      j = e + (h << 4) + 12 | 0;
      c[j >> 2] = 0;
     } else j = e + (h << 4) + 12 | 0;
     c[k >> 2] = 0;
     c[j >> 2] = 0;
    }
    k = e + (h << 4) | 0;
    j = c[k >> 2] | 0;
    if (j | 0) {
     y = c[j >> 2] | 0;
     c[j >> 2] = y - 1;
     if ((y | 0) == 1) {
      qf(c[k >> 2] | 0);
      c[k >> 2] = 0;
      j = e + (h << 4) + 4 | 0;
      c[j >> 2] = 0;
     } else j = e + (h << 4) + 4 | 0;
     c[k >> 2] = 0;
     c[j >> 2] = 0;
    }
    h = h + 1 | 0;
   } while ((h | 0) < (c[g >> 2] | 0));
   h = c[z >> 2] | 0;
  }
  qf(h);
 }
 c[z >> 2] = 0;
 c[A + 64 >> 2] = 0;
 c[o >> 2] = 0;
 c[g >> 2] = 0;
 l = d + 40 | 0;
 m = d + 36 | 0;
 g = (c[l >> 2] | 0) - (c[m >> 2] | 0) | 0;
 if ((g | 0) <= 0) {
  i = B;
  return A | 0;
 }
 Ab(z, g, 0);
 g = c[m >> 2] | 0;
 h = c[o >> 2] | 0;
 j = c[l >> 2] | 0;
 e = j - g | 0;
 if ((e | 0) > 0) {
  k = (c[z >> 2] | 0) + (h << 4) | 0;
  h = (c[n >> 2] | 0) + (g << 4) | 0;
  j = 0;
  while (1) {
   g = c[h >> 2] | 0;
   c[k >> 2] = g;
   c[k + 4 >> 2] = c[h + 4 >> 2];
   if (g | 0) {
    z = g;
    c[z >> 2] = (c[z >> 2] | 0) + 1;
   }
   g = c[h + 8 >> 2] | 0;
   c[k + 8 >> 2] = g;
   c[k + 12 >> 2] = c[h + 12 >> 2];
   if (g | 0) {
    z = g;
    c[z >> 2] = (c[z >> 2] | 0) + 1;
   }
   j = j + 1 | 0;
   if ((j | 0) == (e | 0)) break; else {
    k = k + 16 | 0;
    h = h + 16 | 0;
   }
  }
  j = c[l >> 2] | 0;
  h = c[o >> 2] | 0;
  g = c[m >> 2] | 0;
 }
 c[A + 72 >> 2] = j + h - g;
 i = B;
 return A | 0;
}

function Ne(b, d) {
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
   n = pf(q * 40 | 0) | 0;
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
       Ra[c[(c[g >> 2] | 0) + 12 >> 2] & 255](g, e);
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
     if ((e | 0) == (f | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
     k = k + 1 | 0;
    } while ((k | 0) != (m | 0));
   }
   e = c[b >> 2] | 0;
   if (e | 0) qf(e);
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
   e = Oe(b, g) | 0;
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
   e = Pe(b, 0) | 0;
   u = 42;
   break;
  }
  if ((h >> 1 | 0) > (g | 0)) if ((o | 0) > 0) {
   e = Oe(b, g) | 0;
   u = 42;
   break;
  } else {
   e = Pe(b, g) | 0;
   u = 42;
   break;
  } else if ((e | 0) < (m | 0)) {
   e = Pe(b, g) | 0;
   u = 42;
   break;
  } else {
   e = Oe(b, g) | 0;
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
   Ra[c[(c[v >> 2] | 0) + 12 >> 2] & 255](v, f);
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
   Ra[c[(c[f >> 2] | 0) + 12 >> 2] & 255](f, v);
   f = g;
   g = c[g >> 2] | 0;
  } else {
   g = Sa[c[(c[f >> 2] | 0) + 8 >> 2] & 255](f) | 0;
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
   Ra[c[(c[v >> 2] | 0) + 12 >> 2] & 255](v, t);
   g = c[f >> 2] | 0;
   Qa[c[(c[g >> 2] | 0) + 16 >> 2] & 255](g);
   c[f >> 2] = 0;
   g = c[h >> 2] | 0;
   Ra[c[(c[g >> 2] | 0) + 12 >> 2] & 255](g, v);
   g = c[h >> 2] | 0;
   Qa[c[(c[g >> 2] | 0) + 16 >> 2] & 255](g);
   c[h >> 2] = 0;
   c[f >> 2] = v;
   Ra[c[(c[t >> 2] | 0) + 12 >> 2] & 255](t, j);
   Qa[c[(c[t >> 2] | 0) + 16 >> 2] & 255](t);
   c[h >> 2] = m;
   g = v;
   break;
  } else {
   Ra[c[(c[v >> 2] | 0) + 12 >> 2] & 255](v, m);
   g = c[f >> 2] | 0;
   Qa[c[(c[g >> 2] | 0) + 16 >> 2] & 255](g);
   c[f >> 2] = c[h >> 2];
   c[h >> 2] = m;
   g = v;
   break;
  }
 } while (0);
 if ((u | 0) == 53) {
  Ra[c[(c[m >> 2] | 0) + 12 >> 2] & 255](j, g);
  u = c[h >> 2] | 0;
  Qa[c[(c[u >> 2] | 0) + 16 >> 2] & 255](u);
  c[h >> 2] = c[f >> 2];
  c[f >> 2] = v;
 } else if ((u | 0) == 54) {
  c[f >> 2] = j;
  c[h >> 2] = k;
 }
 f = c[f >> 2] | 0;
 if ((f | 0) == (g | 0)) Qa[c[(c[v >> 2] | 0) + 16 >> 2] & 255](g); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
 a[e + 32 >> 0] = a[d + 32 >> 0] | 0;
 i = w;
 return;
}

function eb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 u = i;
 i = i + 16 | 0;
 t = u + 8 | 0;
 s = u;
 if ((b | 0) > 0) {
  k = 0;
  e = 0;
  p = 0;
  q = 0;
  while (1) {
   l = d + (q << 2) | 0;
   if ((e | 0) == (p | 0)) {
    o = p >> 1;
    o = (o | 0) < 16 ? 16 : (o | 0) > 65536 ? 65536 : o;
    j = o + p | 0;
    if (o) {
     e = pf(j << 3) | 0;
     if ((p | 0) > 0) {
      f = e;
      g = 0;
      h = k;
      while (1) {
       c[f >> 2] = c[h >> 2];
       o = h + 4 | 0;
       c[f + 4 >> 2] = c[o >> 2];
       c[h >> 2] = 0;
       c[o >> 2] = 0;
       g = g + 1 | 0;
       if ((g | 0) == (p | 0)) break; else {
        f = f + 8 | 0;
        h = h + 8 | 0;
       }
      }
     }
     if (k | 0) qf(k);
     k = e;
     e = j;
    }
   }
   o = p + 1 | 0;
   m = k;
   n = m + (p << 3) | 0;
   j = c[l >> 2] | 0;
   do if (!j) {
    c[n >> 2] = 0;
    c[m + (p << 3) + 4 >> 2] = 0;
   } else {
    h = j;
    a : do if (!(h & 3)) {
     f = j;
     r = 14;
    } else {
     f = j;
     g = h;
     while (1) {
      if (!(a[f >> 0] | 0)) {
       f = g;
       break a;
      }
      f = f + 1 | 0;
      g = f;
      if (!(g & 3)) {
       r = 14;
       break;
      }
     }
    } while (0);
    if ((r | 0) == 14) {
     r = 0;
     while (1) {
      g = c[f >> 2] | 0;
      if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
     }
     if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
    }
    f = f - h | 0;
    if ((f | 0) > 0 & (a[j >> 0] | 0) != 0) {
     l = pf(f + 9 | 0) | 0;
     c[n >> 2] = l;
     h = l;
     c[h >> 2] = 0;
     c[h + 4 >> 2] = 0;
     c[l >> 2] = 0;
     c[l >> 2] = (c[l >> 2] | 0) + 1;
     n = c[n >> 2] | 0;
     c[n + 4 >> 2] = f;
     n = n + 8 | 0;
     p = m + (p << 3) + 4 | 0;
     c[p >> 2] = n;
     Nf(n | 0, j | 0, f | 0) | 0;
     a[(c[p >> 2] | 0) + f >> 0] = 0;
     break;
    } else {
     c[n >> 2] = 0;
     c[m + (p << 3) + 4 >> 2] = 0;
     break;
    }
   } while (0);
   q = q + 1 | 0;
   if ((q | 0) == (b | 0)) {
    m = e;
    l = o;
    break;
   } else p = o;
  }
 } else {
  k = 0;
  m = 0;
  l = 0;
 }
 c[1640] = 0;
 c[1641] = 0;
 e = c[1636] | 0;
 if (e | 0) {
  j = c[1638] | 0;
  f = c[1639] | 0;
  if ((j | 0) < (f | 0)) {
   h = e + (j << 3) | 0;
   g = c[h >> 2] | 0;
   if (!g) e = f; else {
    r = c[g >> 2] | 0;
    c[g >> 2] = r - 1;
    if ((r | 0) == 1) {
     qf(c[h >> 2] | 0);
     c[h >> 2] = 0;
     e = e + (j << 3) + 4 | 0;
     c[e >> 2] = 0;
    } else e = e + (j << 3) + 4 | 0;
    c[h >> 2] = 0;
    c[e >> 2] = 0;
    e = c[1639] | 0;
   }
   f = j + 1 | 0;
   if ((f | 0) < (e | 0)) do {
    g = c[1636] | 0;
    j = g + (f << 3) | 0;
    h = c[j >> 2] | 0;
    if (h) {
     r = c[h >> 2] | 0;
     c[h >> 2] = r - 1;
     if ((r | 0) == 1) {
      qf(c[j >> 2] | 0);
      c[j >> 2] = 0;
      e = g + (f << 3) + 4 | 0;
      c[e >> 2] = 0;
     } else e = g + (f << 3) + 4 | 0;
     c[j >> 2] = 0;
     c[e >> 2] = 0;
     e = c[1639] | 0;
    }
    f = f + 1 | 0;
   } while ((f | 0) < (e | 0));
   e = c[1636] | 0;
  }
  qf(e);
 };
 c[1636] = 0;
 c[1637] = 0;
 c[1638] = 0;
 c[1639] = 0;
 c[1640] = 16;
 c[1641] = 65536;
 c[1636] = 0;
 c[1637] = 0;
 c[1638] = 0;
 c[1636] = k;
 c[1637] = m;
 c[1638] = 0;
 c[1639] = l;
 g = pf(40) | 0;
 e = g;
 f = e + 40 | 0;
 do {
  c[e >> 2] = 0;
  e = e + 4 | 0;
 } while ((e | 0) < (f | 0));
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 9;
 e = g + 12 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 q = g + 28 | 0;
 c[q >> 2] = 16;
 r = g + 32 | 0;
 c[r >> 2] = 65536;
 a[g + 36 >> 0] = 0;
 a[g + 37 >> 0] = 0;
 c[1903] = g;
 c[g >> 2] = 1112;
 d = pf(4) | 0;
 c[d >> 2] = Pf() | 0;
 b = pf(84) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 20 >> 2] = 16;
 c[b + 24 >> 2] = 65536;
 a[b + 28 >> 0] = 0;
 p = b + 32 | 0;
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[p + 12 >> 2] = 0;
 c[b + 48 >> 2] = 16;
 c[b + 52 >> 2] = 65536;
 a[b + 56 >> 0] = 0;
 p = b + 60 | 0;
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[p + 12 >> 2] = 0;
 c[b + 76 >> 2] = 16;
 c[b + 80 >> 2] = 65536;
 c[1904] = b;
 b = pf(84) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 20 >> 2] = 16;
 c[b + 24 >> 2] = 65536;
 a[b + 28 >> 0] = 0;
 p = b + 32 | 0;
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[p + 12 >> 2] = 0;
 c[b + 48 >> 2] = 16;
 c[b + 52 >> 2] = 65536;
 a[b + 56 >> 0] = 0;
 p = b + 60 | 0;
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[p + 12 >> 2] = 0;
 c[b + 76 >> 2] = 16;
 c[b + 80 >> 2] = 65536;
 c[1905] = b;
 Fe(3784, s);
 Ca(170, 0, 1);
 Fe(3809, t);
 t = c[1904] | 0;
 Ie(t);
 qf(t);
 t = c[1905] | 0;
 Ie(t);
 qf(t);
 qf(d);
 c[1904] = 0;
 c[1905] = 0;
 c[g >> 2] = 1960;
 c[1903] = 0;
 c[q >> 2] = 0;
 c[r >> 2] = 0;
 e = c[e >> 2] | 0;
 if (!e) {
  qf(g);
  i = u;
  return 0;
 }
 qf(e);
 qf(g);
 i = u;
 return 0;
}

function pb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 48 | 0;
 s = v + 24 | 0;
 u = v;
 p = a + 4 | 0;
 h = c[p >> 2] | 0;
 q = a + 12 | 0;
 d = c[q >> 2] | 0;
 r = a + 8 | 0;
 g = c[r >> 2] | 0;
 if ((h - d | 0) == (0 - g | 0)) {
  e = h >> 1;
  f = c[a + 16 >> 2] | 0;
  if ((e | 0) >= (f | 0)) {
   f = c[a + 20 >> 2] | 0;
   f = (e | 0) > (f | 0) ? f : e;
  }
  m = f + h | 0;
  o = m - d + g >> 1;
  if (!f) m = h; else {
   l = d - g | 0;
   n = pf(m << 5) | 0;
   if ((l | 0) > 0) {
    h = n + (o << 5) | 0;
    j = 0;
    k = (c[a >> 2] | 0) + (c[r >> 2] << 5) | 0;
    do {
     Se(h, k);
     c[k >> 2] = 0;
     e = h + 8 | 0;
     g = k + 24 | 0;
     f = c[g >> 2] | 0;
     do if (!f) {
      c[h + 24 >> 2] = 0;
      d = k + 8 | 0;
      t = 12;
     } else {
      d = k + 8 | 0;
      if ((f | 0) == (d | 0)) {
       c[h + 24 >> 2] = e;
       d = c[g >> 2] | 0;
       Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, e);
       d = f;
       t = 12;
       break;
      } else {
       c[h + 24 >> 2] = f;
       c[g >> 2] = 0;
       e = 0;
       break;
      }
     } while (0);
     h = h + 32 | 0;
     if ((t | 0) == 12) {
      t = 0;
      e = c[g >> 2] | 0;
     }
     if ((e | 0) == (d | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
     c[k >> 2] = 0;
     k = k + 32 | 0;
     j = j + 1 | 0;
    } while ((j | 0) != (l | 0));
   }
   d = c[a >> 2] | 0;
   if (d | 0) qf(d);
   c[a >> 2] = n;
   c[p >> 2] = m;
   c[r >> 2] = o;
   d = l + o | 0;
   c[q >> 2] = d;
   g = o;
  }
 } else m = h;
 n = c[a >> 2] | 0;
 k = (n | 0) == 0;
 e = k ? 0 : n + (g << 5) | 0;
 l = c[b >> 2] | 0;
 j = e;
 e = (k ? 0 : n + (d << 5) | 0) - e >> 5;
 a : while (1) {
  while (1) {
   if (!e) break a;
   f = (e | 0) / 2 | 0;
   h = j + (f << 5) | 0;
   if ((c[h >> 2] | 0) >>> 0 < l >>> 0) break; else e = f;
  }
  j = h + 32 | 0;
  e = e + -1 - f | 0;
 }
 e = j - (k ? 0 : n + (g << 5) | 0) >> 5;
 f = d - g | 0;
 do if ((f | 0) == (e | 0)) {
  if ((d | 0) < (m | 0)) {
   c[q >> 2] = d + 1;
   t = 61;
   break;
  }
  if ((g | 0) > 0) {
   d = qb(a, e) | 0;
   t = 43;
  } else d = 0;
 } else {
  if (!e) {
   if ((g | 0) > 0) {
    d = g + -1 | 0;
    c[r >> 2] = d;
    t = 61;
    break;
   }
   if ((d | 0) >= (m | 0)) {
    d = 0;
    break;
   }
   d = rb(a, 0) | 0;
   t = 43;
   break;
  }
  if ((f >> 1 | 0) > (e | 0)) if ((g | 0) > 0) {
   d = qb(a, e) | 0;
   t = 43;
   break;
  } else {
   d = rb(a, e) | 0;
   t = 43;
   break;
  } else if ((d | 0) < (m | 0)) {
   d = rb(a, e) | 0;
   t = 43;
   break;
  } else {
   d = qb(a, e) | 0;
   t = 43;
   break;
  }
 } while (0);
 if ((t | 0) == 43) {
  if ((d | 0) == (b | 0)) {
   i = v;
   return;
  }
 } else if ((t | 0) == 61) {
  d = n + (d << 5) | 0;
  Se(d, b);
  c[b >> 2] = 0;
  e = d + 8 | 0;
  f = b + 24 | 0;
  g = c[f >> 2] | 0;
  if (!g) {
   c[d + 24 >> 2] = 0;
   i = v;
   return;
  }
  if ((g | 0) == (b + 8 | 0)) {
   c[d + 24 >> 2] = e;
   u = c[f >> 2] | 0;
   Ra[c[(c[u >> 2] | 0) + 12 >> 2] & 255](u, e);
   i = v;
   return;
  } else {
   c[d + 24 >> 2] = g;
   c[f >> 2] = 0;
   i = v;
   return;
  }
 }
 c[d >> 2] = 0;
 Se(d, b);
 k = d + 8 | 0;
 e = c[b + 24 >> 2] | 0;
 do if (!e) {
  e = u + 16 | 0;
  c[e >> 2] = 0;
  g = d + 24 | 0;
  f = c[g >> 2] | 0;
  if ((f | 0) == (k | 0)) {
   d = e;
   e = u;
   t = 54;
  } else {
   d = e;
   h = 0;
   e = u;
   t = 55;
  }
 } else {
  if ((e | 0) == (b + 8 | 0)) {
   j = u + 16 | 0;
   c[j >> 2] = u;
   Ra[c[(c[e >> 2] | 0) + 12 >> 2] & 255](e, u);
   e = j;
   j = c[j >> 2] | 0;
  } else {
   j = Sa[c[(c[e >> 2] | 0) + 8 >> 2] & 255](e) | 0;
   e = u + 16 | 0;
   c[e >> 2] = j;
  }
  h = j;
  g = d + 24 | 0;
  f = c[g >> 2] | 0;
  d = (f | 0) == (k | 0);
  if ((j | 0) != (u | 0)) if (d) {
   d = e;
   e = u;
   t = 54;
   break;
  } else {
   d = e;
   e = u;
   t = 55;
   break;
  }
  if (d) {
   Ra[c[(c[u >> 2] | 0) + 12 >> 2] & 255](u, s);
   d = c[e >> 2] | 0;
   Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
   c[e >> 2] = 0;
   d = c[g >> 2] | 0;
   Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, u);
   d = c[g >> 2] | 0;
   Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
   c[g >> 2] = 0;
   c[e >> 2] = u;
   Ra[c[(c[s >> 2] | 0) + 12 >> 2] & 255](s, f);
   Qa[c[(c[s >> 2] | 0) + 16 >> 2] & 255](s);
   c[g >> 2] = k;
   d = e;
   e = u;
   break;
  } else {
   Ra[c[(c[u >> 2] | 0) + 12 >> 2] & 255](u, k);
   d = c[e >> 2] | 0;
   Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d);
   c[e >> 2] = c[g >> 2];
   c[g >> 2] = k;
   d = e;
   e = u;
   break;
  }
 } while (0);
 if ((t | 0) == 54) {
  Ra[c[(c[k >> 2] | 0) + 12 >> 2] & 255](f, e);
  t = c[g >> 2] | 0;
  Qa[c[(c[t >> 2] | 0) + 16 >> 2] & 255](t);
  c[g >> 2] = c[d >> 2];
  c[d >> 2] = u;
 } else if ((t | 0) == 55) {
  c[d >> 2] = f;
  c[g >> 2] = h;
 }
 d = c[d >> 2] | 0;
 if ((d | 0) == (e | 0)) Qa[c[(c[u >> 2] | 0) + 16 >> 2] & 255](e); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 i = v;
 return;
}

function Od(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 q = b + 100 | 0;
 k = c[q >> 2] | 0;
 h = (k | 0) == 0;
 if (h) {
  e = 0;
  f = 0;
 } else {
  e = k + (c[b + 112 >> 2] << 3) | 0;
  f = k + (c[b + 108 >> 2] << 3) | 0;
 }
 p = (c[d >> 2] | 0) + 16 | 0;
 i = c[p >> 2] | 0;
 g = f;
 d = e - f >> 3;
 a : while (1) {
  while (1) {
   if (!d) break a;
   e = (d | 0) / 2 | 0;
   f = g + (e << 3) | 0;
   if ((c[f >> 2] | 0) >>> 0 < i >>> 0) break; else d = e;
  }
  g = f + 8 | 0;
  d = d + -1 - e | 0;
 }
 if (h) d = 0; else d = k + (c[b + 112 >> 2] << 3) | 0;
 if ((g | 0) == (d | 0)) return;
 o = b + 108 | 0;
 j = c[o >> 2] | 0;
 h = g - (h ? 0 : k + (j << 3) | 0) | 0;
 n = h >> 3;
 m = b + 112 | 0;
 b = c[m >> 2] | 0;
 if ((n | 0) >= (b - j | 0)) return;
 d = c[k + (j + n << 3) >> 2] | 0;
 if ((i | 0) != (d | 0)) {
  if ((i | 0) == 0 | (d | 0) == 0) return;
  if ((c[i >> 2] | 0) == (c[d >> 2] | 0)) return;
  if ((c[i + 4 >> 2] | 0) != (c[d + 4 >> 2] | 0)) return;
  g = c[d + 12 >> 2] | 0;
  e = c[i + 12 >> 2] | 0;
  f = a[g >> 0] | 0;
  d = a[e >> 0] | 0;
  if (f << 24 >> 24 == 0 ? 1 : f << 24 >> 24 != d << 24 >> 24) e = f; else {
   do {
    g = g + 1 | 0;
    e = e + 1 | 0;
    f = a[g >> 0] | 0;
    d = a[e >> 0] | 0;
   } while (!(f << 24 >> 24 == 0 ? 1 : f << 24 >> 24 != d << 24 >> 24));
   e = f;
  }
  if (e << 24 >> 24 != d << 24 >> 24) return;
 }
 l = (n | 0) == 0;
 i = (h | 0) > 0;
 while (1) {
  d = b - j | 0;
  do if (l) {
   c[o >> 2] = j + 1;
   d = k + (j << 3) + 4 | 0;
   e = c[d >> 2] | 0;
   if (e | 0) {
    h = e + 4 | 0;
    b = c[h >> 2] | 0;
    c[h >> 2] = b - 1;
    if ((b | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
    c[d >> 2] = 0;
   }
   c[k + (j << 3) >> 2] = 0;
  } else {
   if ((d + -1 | 0) == (n | 0)) {
    d = b + -1 | 0;
    c[m >> 2] = d;
    e = k + (d << 3) + 4 | 0;
    f = c[e >> 2] | 0;
    if (f | 0) {
     b = f + 4 | 0;
     j = c[b >> 2] | 0;
     c[b >> 2] = j - 1;
     if ((j | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[e >> 2] = 0;
    }
    c[k + (d << 3) >> 2] = 0;
    break;
   }
   if ((d >> 1 | 0) <= (n | 0)) {
    f = j + n | 0;
    d = b + -1 | 0;
    if ((f | 0) < (d | 0)) {
     e = k;
     do {
      h = e + (f << 3) | 0;
      d = f;
      f = f + 1 | 0;
      g = e + (f << 3) | 0;
      c[h >> 2] = 0;
      Se(h, g);
      c[g >> 2] = 0;
      g = e + (f << 3) + 4 | 0;
      h = c[g >> 2] | 0;
      d = e + (d << 3) + 4 | 0;
      e = c[d >> 2] | 0;
      if ((h | 0) != (e | 0)) {
       if (e | 0) {
        s = e + 4 | 0;
        r = c[s >> 2] | 0;
        c[s >> 2] = r - 1;
        if ((r | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
        c[d >> 2] = 0;
       }
       c[d >> 2] = h;
       c[g >> 2] = 0;
      }
      g = (c[m >> 2] | 0) + -1 | 0;
      e = c[q >> 2] | 0;
     } while ((f | 0) < (g | 0));
    } else {
     g = d;
     e = k;
    }
    c[m >> 2] = g;
    d = e + (g << 3) + 4 | 0;
    f = c[d >> 2] | 0;
    if (f | 0) {
     r = f + 4 | 0;
     s = c[r >> 2] | 0;
     c[r >> 2] = s - 1;
     if ((s | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
    }
    c[e + (g << 3) >> 2] = 0;
    break;
   }
   if (i) {
    e = k;
    h = j + n | 0;
    do {
     g = e + (h << 3) | 0;
     d = h;
     h = h + -1 | 0;
     f = e + (h << 3) | 0;
     c[g >> 2] = 0;
     Se(g, f);
     c[f >> 2] = 0;
     f = e + (h << 3) + 4 | 0;
     g = c[f >> 2] | 0;
     d = e + (d << 3) + 4 | 0;
     e = c[d >> 2] | 0;
     if ((g | 0) != (e | 0)) {
      if (e | 0) {
       r = e + 4 | 0;
       s = c[r >> 2] | 0;
       c[r >> 2] = s - 1;
       if ((s | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
       c[d >> 2] = 0;
      }
      c[d >> 2] = g;
      c[f >> 2] = 0;
     }
     g = c[o >> 2] | 0;
     e = c[q >> 2] | 0;
    } while ((h | 0) > (g | 0));
   } else {
    g = j;
    e = k;
   }
   c[o >> 2] = g + 1;
   d = e + (g << 3) + 4 | 0;
   f = c[d >> 2] | 0;
   if (f | 0) {
    r = f + 4 | 0;
    s = c[r >> 2] | 0;
    c[r >> 2] = s - 1;
    if ((s | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
    c[d >> 2] = 0;
   }
   c[e + (g << 3) >> 2] = 0;
  } while (0);
  b = c[m >> 2] | 0;
  j = c[o >> 2] | 0;
  if ((n | 0) >= (b - j | 0)) {
   d = 68;
   break;
  }
  k = c[q >> 2] | 0;
  e = c[p >> 2] | 0;
  d = c[k + (j + n << 3) >> 2] | 0;
  if ((e | 0) == (d | 0)) continue;
  if ((e | 0) == 0 | (d | 0) == 0) {
   d = 68;
   break;
  }
  if ((c[e >> 2] | 0) == (c[d >> 2] | 0)) {
   d = 68;
   break;
  }
  if ((c[e + 4 >> 2] | 0) != (c[d + 4 >> 2] | 0)) {
   d = 68;
   break;
  }
  g = c[d + 12 >> 2] | 0;
  e = c[e + 12 >> 2] | 0;
  f = a[g >> 0] | 0;
  d = a[e >> 0] | 0;
  if (f << 24 >> 24 == 0 ? 1 : f << 24 >> 24 != d << 24 >> 24) e = f; else {
   do {
    g = g + 1 | 0;
    e = e + 1 | 0;
    f = a[g >> 0] | 0;
    d = a[e >> 0] | 0;
   } while (!(f << 24 >> 24 == 0 ? 1 : f << 24 >> 24 != d << 24 >> 24));
   e = f;
  }
  if (e << 24 >> 24 != d << 24 >> 24) {
   d = 68;
   break;
  }
 }
 if ((d | 0) == 68) return;
}

function ye(a) {
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
  He(3923, k);
  Aa();
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
   f = pf(k << 2) | 0;
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
   if (e | 0) qf(e);
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

function Re(a, b) {
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
  He(3923, l);
  Aa();
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
   e = pf(k << 2) | 0;
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
   if (f | 0) qf(f);
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

function hb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 Re(c[1904] | 0, c[(c[1642] | 0) + 72 >> 2] | 0);
 a = c[1642] | 0;
 d = a + 76 | 0;
 b = c[d >> 2] | 0;
 if (b) {
  m = b + 4 | 0;
  n = c[m >> 2] | 0;
  c[m >> 2] = n - 1;
  if ((n | 0) == 1) {
   Qa[c[c[b >> 2] >> 2] & 255](b);
   a = c[1642] | 0;
  }
  c[d >> 2] = 0;
 }
 n = a + 104 | 0;
 c[a + 120 >> 2] = 0;
 c[a + 124 >> 2] = 0;
 d = c[n >> 2] | 0;
 m = a + 112 | 0;
 if (!d) b = a + 116 | 0; else {
  k = c[m >> 2] | 0;
  b = a + 116 | 0;
  if ((k | 0) < (c[b >> 2] | 0)) {
   l = d + (k * 72 | 0) | 0;
   e = c[d + (k * 72 | 0) + 64 >> 2] | 0;
   if ((e | 0) == (d + (k * 72 | 0) + 48 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   e = c[d + (k * 72 | 0) + 40 >> 2] | 0;
   if ((e | 0) == (d + (k * 72 | 0) + 24 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   c[d + (k * 72 | 0) + 16 >> 2] = 0;
   c[d + (k * 72 | 0) + 20 >> 2] = 0;
   f = c[l >> 2] | 0;
   j = d + (k * 72 | 0) + 8 | 0;
   if (!f) e = d + (k * 72 | 0) + 12 | 0; else {
    h = c[j >> 2] | 0;
    e = d + (k * 72 | 0) + 12 | 0;
    g = c[e >> 2] | 0;
    if ((h | 0) < (g | 0)) {
     i = h;
     while (1) {
      f = f + (i << 2) | 0;
      h = c[f >> 2] | 0;
      if (h) {
       o = h + 4 | 0;
       g = c[o >> 2] | 0;
       c[o >> 2] = g - 1;
       if ((g | 0) == 1) Qa[c[c[h >> 2] >> 2] & 255](h);
       c[f >> 2] = 0;
       g = c[e >> 2] | 0;
      }
      h = i + 1 | 0;
      if ((h | 0) >= (g | 0)) break;
      f = c[l >> 2] | 0;
      i = h;
     }
     f = c[l >> 2] | 0;
    }
    qf(f);
   }
   c[l >> 2] = 0;
   c[d + (k * 72 | 0) + 4 >> 2] = 0;
   c[j >> 2] = 0;
   c[e >> 2] = 0;
   d = k + 1 | 0;
   if ((d | 0) < (c[b >> 2] | 0)) do {
    k = c[n >> 2] | 0;
    l = k + (d * 72 | 0) | 0;
    e = c[k + (d * 72 | 0) + 64 >> 2] | 0;
    if ((e | 0) == (k + (d * 72 | 0) + 48 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
    e = c[k + (d * 72 | 0) + 40 >> 2] | 0;
    if ((e | 0) == (k + (d * 72 | 0) + 24 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
    c[k + (d * 72 | 0) + 16 >> 2] = 0;
    c[k + (d * 72 | 0) + 20 >> 2] = 0;
    f = c[l >> 2] | 0;
    j = k + (d * 72 | 0) + 8 | 0;
    if (!f) e = k + (d * 72 | 0) + 12 | 0; else {
     h = c[j >> 2] | 0;
     e = k + (d * 72 | 0) + 12 | 0;
     g = c[e >> 2] | 0;
     if ((h | 0) < (g | 0)) {
      i = h;
      while (1) {
       f = f + (i << 2) | 0;
       h = c[f >> 2] | 0;
       if (h) {
        g = h + 4 | 0;
        o = c[g >> 2] | 0;
        c[g >> 2] = o - 1;
        if ((o | 0) == 1) Qa[c[c[h >> 2] >> 2] & 255](h);
        c[f >> 2] = 0;
        g = c[e >> 2] | 0;
       }
       h = i + 1 | 0;
       if ((h | 0) >= (g | 0)) break;
       f = c[l >> 2] | 0;
       i = h;
      }
      f = c[l >> 2] | 0;
     }
     qf(f);
    }
    c[l >> 2] = 0;
    c[k + (d * 72 | 0) + 4 >> 2] = 0;
    c[j >> 2] = 0;
    c[e >> 2] = 0;
    d = d + 1 | 0;
   } while ((d | 0) < (c[b >> 2] | 0));
   d = c[n >> 2] | 0;
  }
  qf(d);
 }
 c[n >> 2] = 0;
 c[a + 108 >> 2] = 0;
 c[m >> 2] = 0;
 c[b >> 2] = 0;
 c[a + 96 >> 2] = 0;
 c[a + 100 >> 2] = 0;
 b = a + 80 | 0;
 wc(b);
 wc(b);
 b = a + 76 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  n = d + 4 | 0;
  o = c[n >> 2] | 0;
  c[n >> 2] = o - 1;
  if ((o | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[b >> 2] = 0;
 }
 g = a + 44 | 0;
 c[a + 60 >> 2] = 0;
 c[a + 64 >> 2] = 0;
 b = c[g >> 2] | 0;
 f = a + 52 | 0;
 if (!b) {
  o = a + 56 | 0;
  n = a + 48 | 0;
  c[g >> 2] = 0;
  c[n >> 2] = 0;
  c[f >> 2] = 0;
  c[o >> 2] = 0;
  o = a + 8 | 0;
  xc(o);
  yc(o);
  qf(a);
  c[1642] = 0;
  return 6;
 }
 d = c[f >> 2] | 0;
 h = a + 56 | 0;
 if ((d | 0) < (c[h >> 2] | 0)) {
  while (1) {
   e = c[b + (d << 5) + 24 >> 2] | 0;
   if ((e | 0) == (b + (d << 5) + 8 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   c[b + (d << 5) >> 2] = 0;
   d = d + 1 | 0;
   if ((d | 0) >= (c[h >> 2] | 0)) break;
   b = c[g >> 2] | 0;
  }
  b = c[g >> 2] | 0;
 }
 qf(b);
 o = h;
 n = a + 48 | 0;
 c[g >> 2] = 0;
 c[n >> 2] = 0;
 c[f >> 2] = 0;
 c[o >> 2] = 0;
 o = a + 8 | 0;
 xc(o);
 yc(o);
 qf(a);
 c[1642] = 0;
 return 6;
}

function wd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 16 | 0;
 v = w;
 d = c[d >> 2] | 0;
 e = c[b + 96 >> 2] | 0;
 do {} while ((a[e >> 0] & 1) != 0);
 k = d + 16 | 0;
 j = e + 4 | 0;
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 d = c[e + 8 >> 2] | 0;
 if (!d) {
  f = 0;
  d = 0;
 } else {
  f = d + (c[e + 20 >> 2] << 5) | 0;
  d = d + (c[e + 16 >> 2] << 5) | 0;
 }
 h = c[k >> 2] | 0;
 g = d;
 d = f - d >> 5;
 a : while (1) {
  while (1) {
   if (!d) break a;
   e = (d | 0) / 2 | 0;
   f = g + (e << 5) | 0;
   if ((c[f >> 2] | 0) >>> 0 < h >>> 0) break; else d = e;
  }
  g = f + 32 | 0;
  d = d + -1 - e | 0;
 }
 u = c[g + 24 >> 2] | 0;
 u = Sa[c[(c[u >> 2] | 0) + 24 >> 2] & 255](u) | 0;
 Qa[c[(c[u >> 2] | 0) + 16 >> 2] & 255](u);
 c[j >> 2] = (c[j >> 2] | 0) - 1;
 r = b + 100 | 0;
 Se(v, k);
 s = v + 4 | 0;
 c[s >> 2] = u;
 t = (u | 0) == 0;
 if (!t) {
  q = u + 4 | 0;
  c[q >> 2] = (c[q >> 2] | 0) + 1;
 }
 l = b + 104 | 0;
 f = c[l >> 2] | 0;
 p = b + 112 | 0;
 h = c[p >> 2] | 0;
 q = b + 108 | 0;
 g = c[q >> 2] | 0;
 if ((f - h | 0) == (0 - g | 0)) {
  d = f >> 1;
  e = c[b + 116 >> 2] | 0;
  if ((d | 0) >= (e | 0)) {
   e = c[b + 120 >> 2] | 0;
   e = (d | 0) > (e | 0) ? e : d;
  }
  j = e + f | 0;
  k = j - h + g >> 1;
  if (!e) o = f; else {
   g = h - g | 0;
   h = pf(j << 3) | 0;
   if ((g | 0) > 0) {
    d = h + (k << 3) | 0;
    e = 0;
    f = (c[r >> 2] | 0) + (c[q >> 2] << 3) | 0;
    while (1) {
     Se(d, f);
     o = f + 4 | 0;
     c[d + 4 >> 2] = c[o >> 2];
     c[o >> 2] = 0;
     c[f >> 2] = 0;
     e = e + 1 | 0;
     if ((e | 0) == (g | 0)) break; else {
      d = d + 8 | 0;
      f = f + 8 | 0;
     }
    }
   }
   d = c[r >> 2] | 0;
   if (d | 0) qf(d);
   c[r >> 2] = h;
   c[l >> 2] = j;
   c[q >> 2] = k;
   h = k + g | 0;
   c[p >> 2] = h;
   o = j;
   g = k;
  }
 } else o = f;
 n = c[r >> 2] | 0;
 l = (n | 0) == 0;
 b = n + (g << 3) | 0;
 d = n + (h << 3) | 0;
 e = l ? 0 : b;
 m = c[v >> 2] | 0;
 k = e;
 e = (l ? 0 : d) - e >> 3;
 b : while (1) {
  while (1) {
   if (!e) break b;
   f = (e | 0) / 2 | 0;
   j = k + (f << 3) | 0;
   if ((c[j >> 2] | 0) >>> 0 < m >>> 0) break; else e = f;
  }
  k = j + 8 | 0;
  e = e + -1 - f | 0;
 }
 e = k - (l ? 0 : b) >> 3;
 f = h - g | 0;
 do if ((f | 0) == (e | 0)) {
  if ((h | 0) < (o | 0)) {
   c[p >> 2] = h + 1;
   g = 52;
   break;
  }
  if ((g | 0) > 0) {
   d = xd(r, e) | 0;
   g = 44;
  } else {
   e = 0;
   g = 45;
  }
 } else {
  if (!e) {
   if ((g | 0) > 0) {
    d = g + -1 | 0;
    c[q >> 2] = d;
    d = n + (d << 3) | 0;
    g = 52;
    break;
   }
   if ((h | 0) >= (o | 0)) {
    e = 0;
    g = 45;
    break;
   }
   d = yd(r, 0) | 0;
   g = 44;
   break;
  }
  if ((f >> 1 | 0) > (e | 0)) if ((g | 0) > 0) {
   d = xd(r, e) | 0;
   g = 44;
   break;
  } else {
   d = yd(r, e) | 0;
   g = 44;
   break;
  } else if ((h | 0) < (o | 0)) {
   d = yd(r, e) | 0;
   g = 44;
   break;
  } else {
   d = xd(r, e) | 0;
   g = 44;
   break;
  }
 } while (0);
 if ((g | 0) == 44) if ((d | 0) == (v | 0)) g = 53; else {
  e = d;
  g = 45;
 } else if ((g | 0) == 52) {
  Se(d, v);
  c[v >> 2] = 0;
  v = v + 4 | 0;
  c[d + 4 >> 2] = c[v >> 2];
  c[v >> 2] = 0;
  g = 53;
 }
 if ((g | 0) == 45) {
  c[e >> 2] = 0;
  Se(e, v);
  d = c[s >> 2] | 0;
  f = e + 4 | 0;
  e = c[f >> 2] | 0;
  if ((d | 0) != (e | 0)) {
   if (e) {
    r = e + 4 | 0;
    v = c[r >> 2] | 0;
    c[r >> 2] = v - 1;
    if ((v | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
    c[f >> 2] = 0;
    d = c[s >> 2] | 0;
   }
   c[f >> 2] = d;
   if (!d) g = 53; else {
    g = d + 4 | 0;
    c[g >> 2] = (c[g >> 2] | 0) + 1;
    g = 53;
   }
  }
 }
 if ((g | 0) == 53) d = c[s >> 2] | 0;
 if (d | 0) {
  r = d + 4 | 0;
  v = c[r >> 2] | 0;
  c[r >> 2] = v - 1;
  if ((v | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[s >> 2] = 0;
 }
 if (t) {
  i = w;
  return;
 }
 t = u + 4 | 0;
 v = c[t >> 2] | 0;
 c[t >> 2] = v - 1;
 if ((v | 0) != 1) {
  i = w;
  return;
 }
 Qa[c[c[u >> 2] >> 2] & 255](u);
 i = w;
 return;
}

function Wc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 p = i;
 i = i + 144 | 0;
 k = p + 120 | 0;
 e = p + 96 | 0;
 f = p + 72 | 0;
 g = p + 48 | 0;
 h = p + 24 | 0;
 l = p;
 n = pf(176) | 0;
 o = n + 4 | 0;
 c[o >> 2] = 0;
 c[n >> 2] = 1620;
 c[n + 24 >> 2] = 0;
 c[n + 48 >> 2] = 0;
 c[n + 72 >> 2] = 0;
 c[n + 96 >> 2] = 0;
 c[n + 120 >> 2] = 0;
 c[n + 144 >> 2] = 0;
 c[n + 168 >> 2] = 0;
 m = (n | 0) == 0;
 if (!m) c[o >> 2] = (c[o >> 2] | 0) + 1;
 j = a;
 b = e + 16 | 0;
 c[b >> 2] = e;
 c[e >> 2] = 1640;
 r = e + 4 | 0;
 c[r >> 2] = 172;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = j;
 d = k + 16 | 0;
 c[d >> 2] = k;
 c[k >> 2] = 1640;
 q = k + 4 | 0;
 c[q >> 2] = c[r >> 2];
 c[q + 4 >> 2] = c[r + 4 >> 2];
 c[q + 8 >> 2] = c[r + 8 >> 2];
 gd(k, n + 32 | 0);
 d = c[d >> 2] | 0;
 if ((d | 0) == (k | 0)) Qa[c[(c[k >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 b = c[b >> 2] | 0;
 if ((b | 0) == (e | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = f + 16 | 0;
 c[b >> 2] = f;
 c[f >> 2] = 1676;
 q = f + 4 | 0;
 c[q >> 2] = 173;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = j;
 d = k + 16 | 0;
 c[d >> 2] = k;
 c[k >> 2] = 1676;
 r = k + 4 | 0;
 c[r >> 2] = c[q >> 2];
 c[r + 4 >> 2] = c[q + 4 >> 2];
 c[r + 8 >> 2] = c[q + 8 >> 2];
 gd(k, n + 56 | 0);
 d = c[d >> 2] | 0;
 if ((d | 0) == (k | 0)) Qa[c[(c[k >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 b = c[b >> 2] | 0;
 if ((b | 0) == (f | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = g + 16 | 0;
 c[b >> 2] = g;
 c[g >> 2] = 1712;
 q = g + 4 | 0;
 c[q >> 2] = 174;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = j;
 d = k + 16 | 0;
 c[d >> 2] = k;
 c[k >> 2] = 1712;
 r = k + 4 | 0;
 c[r >> 2] = c[q >> 2];
 c[r + 4 >> 2] = c[q + 4 >> 2];
 c[r + 8 >> 2] = c[q + 8 >> 2];
 gd(k, n + 152 | 0);
 d = c[d >> 2] | 0;
 if ((d | 0) == (k | 0)) Qa[c[(c[k >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 b = c[b >> 2] | 0;
 if ((b | 0) == (g | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 d = h + 16 | 0;
 c[d >> 2] = h;
 c[h >> 2] = 1748;
 q = h + 4 | 0;
 c[q >> 2] = 175;
 c[h + 8 >> 2] = 0;
 c[h + 12 >> 2] = j;
 b = k + 16 | 0;
 c[b >> 2] = k;
 c[k >> 2] = 1748;
 r = k + 4 | 0;
 c[r >> 2] = c[q >> 2];
 c[r + 4 >> 2] = c[q + 4 >> 2];
 c[r + 8 >> 2] = c[q + 8 >> 2];
 gd(k, n + 128 | 0);
 b = c[b >> 2] | 0;
 if ((b | 0) == (k | 0)) Qa[c[(c[k >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[d >> 2] | 0;
 if ((b | 0) == (h | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 d = l + 16 | 0;
 c[d >> 2] = l;
 c[l >> 2] = 1784;
 q = l + 4 | 0;
 c[q >> 2] = 176;
 c[l + 8 >> 2] = 0;
 c[l + 12 >> 2] = j;
 b = k + 16 | 0;
 c[b >> 2] = k;
 c[k >> 2] = 1784;
 r = k + 4 | 0;
 c[r >> 2] = c[q >> 2];
 c[r + 4 >> 2] = c[q + 4 >> 2];
 c[r + 8 >> 2] = c[q + 8 >> 2];
 gd(k, n + 104 | 0);
 b = c[b >> 2] | 0;
 if ((b | 0) == (k | 0)) Qa[c[(c[k >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[d >> 2] | 0;
 if ((b | 0) == (l | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = a + 84 | 0;
 d = c[b >> 2] | 0;
 do if ((n | 0) == (d | 0)) {
  if (m) {
   i = p;
   return;
  }
 } else {
  if (d | 0) {
   q = d + 4 | 0;
   r = c[q >> 2] | 0;
   c[q >> 2] = r - 1;
   if ((r | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
   c[b >> 2] = 0;
  }
  c[b >> 2] = n;
  if (m) {
   i = p;
   return;
  } else {
   c[o >> 2] = (c[o >> 2] | 0) + 1;
   break;
  }
 } while (0);
 r = c[o >> 2] | 0;
 c[o >> 2] = r - 1;
 if ((r | 0) != 1) {
  i = p;
  return;
 }
 Qa[c[c[n >> 2] >> 2] & 255](n);
 i = p;
 return;
}

function Ke(a) {
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
     Le(r, d);
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
      Le(o, d);
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

function fd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 m = n;
 e = c[d + 4 >> 2] | 0;
 if ((e & 65535) << 16 >> 16 == -1) {
  j = 0;
  d = 0;
 } else {
  g = c[d >> 2] | 0;
  g = c[((g | 0) == 0 ? 1992 : g + 12 | 0) >> 2] | 0;
  h = e << 16 >> 16;
  d = e >> 16;
  if ((d | 0) == -1) {
   f = g;
   a : do if (!(f & 3)) {
    d = g;
    k = 6;
   } else {
    d = g;
    e = f;
    while (1) {
     if (!(a[d >> 0] | 0)) {
      d = e;
      break a;
     }
     d = d + 1 | 0;
     e = d;
     if (!(e & 3)) {
      k = 6;
      break;
     }
    }
   } while (0);
   if ((k | 0) == 6) {
    while (1) {
     e = c[d >> 2] | 0;
     if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
    }
    if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
   }
   d = d - f | 0;
  }
  e = g + h | 0;
  d = d - h | 0;
  if ((d | 0) > 0 & (a[e >> 0] | 0) != 0) {
   j = pf(d + 9 | 0) | 0;
   l = j;
   c[l >> 2] = 0;
   c[l + 4 >> 2] = 0;
   c[j >> 2] = 0;
   c[j >> 2] = (c[j >> 2] | 0) + 1;
   c[j + 4 >> 2] = d;
   l = j + 8 | 0;
   Nf(l | 0, e | 0, d | 0) | 0;
   a[l + d >> 0] = 0;
   d = l;
  } else {
   j = 0;
   d = 0;
  }
 }
 h = (d | 0) == 0 ? 8216 : d;
 e = a[h >> 0] | 0;
 if (!(e << 24 >> 24)) l = 0; else {
  d = c[1914] | 0;
  if (!d) {
   d = pf(24608) | 0;
   Kf(d | 0, 0, 24608) | 0;
   c[d + 16 >> 2] = 16;
   c[d + 20 >> 2] = 65536;
   c[d + 24 >> 2] = 0;
   c[d + 28 >> 2] = 0;
   e = d + 24608 | 0;
   f = d + 32 | 0;
   do {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = 0;
    c[f + 8 >> 2] = 0;
    c[f + 12 >> 2] = 0;
    c[f + 16 >> 2] = 16;
    c[f + 20 >> 2] = 65536;
    f = f + 24 | 0;
   } while ((f | 0) != (e | 0));
   c[1914] = d;
   e = a[h >> 0] | 0;
   if (!(e << 24 >> 24)) e = 0; else {
    g = 0;
    f = h;
    k = 19;
   }
  } else {
   g = 0;
   f = h;
   k = 19;
  }
  if ((k | 0) == 19) {
   while (1) {
    f = f + 1 | 0;
    l = ((e << 24 >> 24) + g | 0) * 1025 | 0;
    g = l >> 6 ^ l;
    e = a[f >> 0] | 0;
    if (!(e << 24 >> 24)) break; else k = 19;
   }
   e = g * 9 | 0;
  }
  e = (e >> 11 ^ e) * 32769 | 0;
  f = Ve(d, e, h) | 0;
  if (!f) l = We(d, e, h) | 0; else l = f;
 }
 if (j | 0) {
  k = c[j >> 2] | 0;
  c[j >> 2] = k - 1;
  if ((k | 0) == 1) qf(j);
 }
 k = c[b + 100 >> 2] | 0;
 j = (k | 0) == 0;
 if (j) {
  g = 0;
  d = 0;
 } else {
  g = k + (c[b + 112 >> 2] << 3) | 0;
  d = k + (c[b + 108 >> 2] << 3) | 0;
 }
 h = d;
 d = g - d >> 3;
 b : while (1) {
  while (1) {
   if (!d) break b;
   e = (d | 0) / 2 | 0;
   f = h + (e << 3) | 0;
   if ((c[f >> 2] | 0) >>> 0 < l >>> 0) break; else d = e;
  }
  h = f + 8 | 0;
  d = d + -1 - e | 0;
 }
 if ((h | 0) != (g | 0)) if (l >>> 0 >= (c[h >> 2] | 0) >>> 0) {
  if (j) {
   e = 0;
   d = 0;
  } else {
   e = k + (c[b + 112 >> 2] << 3) | 0;
   d = k + (c[b + 108 >> 2] << 3) | 0;
  }
  g = d;
  d = e - d >> 3;
  c : while (1) {
   while (1) {
    if (!d) break c;
    e = (d | 0) / 2 | 0;
    f = g + (e << 3) | 0;
    if ((c[f >> 2] | 0) >>> 0 < l >>> 0) break; else d = e;
   }
   g = f + 8 | 0;
   d = d + -1 - e | 0;
  }
  d = c[g + 4 >> 2] | 0;
  if (!d) {
   b = 0;
   i = n;
   return b | 0;
  }
  b = d + 4 | 0;
  c[b >> 2] = (c[b >> 2] | 0) + 1;
  b = d;
  i = n;
  return b | 0;
 }
 c[m >> 2] = c[((l | 0) == 0 ? 1992 : l + 12 | 0) >> 2];
 Ge(3408, m);
 b = 0;
 i = n;
 return b | 0;
}

function ae(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 m = d + 4 | 0;
 if (d | 0) c[m >> 2] = (c[m >> 2] | 0) + 1;
 p = c[m >> 2] | 0;
 c[m >> 2] = p - 1;
 if ((p | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
 o = pf(88) | 0;
 p = o + 4 | 0;
 c[p >> 2] = 0;
 a[o + 12 >> 0] = 0;
 a[o + 13 >> 0] = 0;
 c[o >> 2] = 1896;
 k = o + 20 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 c[o + 36 >> 2] = 16;
 c[o + 40 >> 2] = 65536;
 a[o + 44 >> 0] = 0;
 k = o + 48 | 0;
 i = o + 52 | 0;
 j = o + 56 | 0;
 a[o + 76 >> 0] = 0;
 g = o + 64 | 0;
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 0;
 b[g >> 1] = 65535;
 b[g + 2 >> 1] = 65535;
 b[g + 4 >> 1] = 65535;
 b[g + 6 >> 1] = 65535;
 b[g + 8 >> 1] = 65535;
 b[g + 10 >> 1] = 65535;
 c[o + 80 >> 2] = 0;
 c[o + 84 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 g = o + 16 | 0;
 c[g >> 2] = -1;
 n = (o | 0) == 0;
 if (!n) c[p >> 2] = (c[p >> 2] | 0) + 1;
 c[g >> 2] = 200;
 l = d + 120 | 0;
 if ((f | 0) > 0) {
  g = pf(f) | 0;
  h = c[k >> 2] | 0;
  if ((h | 0) > 0) Nf(g | 0, c[j >> 2] | 0, h | 0) | 0;
  h = c[j >> 2] | 0;
  if (h | 0) qf(h);
  c[j >> 2] = g;
  c[i >> 2] = f;
  h = c[k >> 2] | 0;
 } else {
  g = 0;
  h = 0;
 }
 Nf(g + h | 0, e | 0, f | 0) | 0;
 c[k >> 2] = (c[k >> 2] | 0) + f;
 f = d + 124 | 0;
 g = c[f >> 2] | 0;
 if ((o | 0) != (g | 0)) {
  if (g | 0) {
   k = g + 4 | 0;
   e = c[k >> 2] | 0;
   c[k >> 2] = e - 1;
   if ((e | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
   c[f >> 2] = 0;
  }
  c[f >> 2] = o;
  c[p >> 2] = (c[p >> 2] | 0) + 1;
 }
 h = c[l >> 2] | 0;
 if (!h) {
  a[d + 12 >> 0] = 1;
  q = 34;
 } else {
  i = c[f >> 2] | 0;
  c[h + 100 >> 2] = c[i + 16 >> 2];
  j = h + 76 | 0;
  g = c[j >> 2] | 0;
  if (!g) {
   k = h;
   e = i;
  } else {
   qf(g);
   k = c[l >> 2] | 0;
   e = c[f >> 2] | 0;
  }
  c[j >> 2] = 0;
  s = h + 68 | 0;
  c[s >> 2] = 0;
  g = h + 72 | 0;
  c[g >> 2] = 0;
  r = i + 48 | 0;
  c[s >> 2] = c[r >> 2];
  h = i + 52 | 0;
  c[g >> 2] = c[h >> 2];
  g = i + 56 | 0;
  c[j >> 2] = c[g >> 2];
  c[r >> 2] = 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
  g = k + 80 | 0;
  h = e + 60 | 0;
  if ((h | 0) == (g | 0)) j = e; else {
   c[g >> 2] = 0;
   Se(g, h);
   b[k + 84 >> 1] = b[e + 64 >> 1] | 0;
   b[k + 86 >> 1] = b[e + 66 >> 1] | 0;
   b[k + 88 >> 1] = b[e + 68 >> 1] | 0;
   b[k + 90 >> 1] = b[e + 70 >> 1] | 0;
   b[k + 92 >> 1] = b[e + 72 >> 1] | 0;
   b[k + 94 >> 1] = b[e + 74 >> 1] | 0;
   a[k + 96 >> 0] = a[e + 76 >> 0] | 0;
   k = c[l >> 2] | 0;
   j = c[f >> 2] | 0;
  }
  i = k + 104 | 0;
  h = j + 80 | 0;
  if ((i | 0) != (h | 0)) {
   g = c[i >> 2] | 0;
   if (g | 0) {
    s = c[g >> 2] | 0;
    c[g >> 2] = s - 1;
    if ((s | 0) == 1) {
     qf(c[i >> 2] | 0);
     c[i >> 2] = 0;
     g = k + 108 | 0;
     c[g >> 2] = 0;
    } else g = k + 108 | 0;
    c[i >> 2] = 0;
    c[g >> 2] = 0;
   }
   g = c[h >> 2] | 0;
   c[i >> 2] = g;
   c[k + 108 >> 2] = c[j + 84 >> 2];
   if (g | 0) {
    s = g;
    c[s >> 2] = (c[s >> 2] | 0) + 1;
   }
  }
  a[(c[l >> 2] | 0) + 12 >> 0] = 1;
  a[d + 12 >> 0] = 1;
  if (!n) q = 34;
 }
 if ((q | 0) == 34) {
  s = c[p >> 2] | 0;
  c[p >> 2] = s - 1;
  if ((s | 0) == 1) Qa[c[c[o >> 2] >> 2] & 255](o);
 }
 s = c[m >> 2] | 0;
 c[m >> 2] = s - 1;
 if ((s | 0) != 1) return;
 Qa[c[c[d >> 2] >> 2] & 255](d);
 return;
}

function Yf(a, b, d, e, f) {
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
   f = k >>> ((Rf(i | 0) | 0) >>> 0);
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
   p = Rf(h | 0) | 0;
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
  k = Jf(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   If(k | 0, d | 0, e | 0, n | 0) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = If(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function zb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 q = b + 4 | 0;
 g = c[q >> 2] | 0;
 r = b + 12 | 0;
 h = c[r >> 2] | 0;
 t = b + 8 | 0;
 i = c[t >> 2] | 0;
 if ((g - h | 0) == (0 - i | 0)) {
  f = g >> 1;
  e = c[b + 16 >> 2] | 0;
  if ((f | 0) >= (e | 0)) {
   e = c[b + 20 >> 2] | 0;
   e = (f | 0) > (e | 0) ? e : f;
  }
  s = e + g | 0;
  Ab(b, s, s - h + i >> 1);
 }
 p = c[b >> 2] | 0;
 o = (p | 0) == 0;
 if (o) {
  e = 0;
  f = 0;
 } else {
  e = p + (c[r >> 2] << 4) | 0;
  f = p + (c[t >> 2] << 4) | 0;
 }
 m = c[d >> 2] | 0;
 s = d + 4 | 0;
 l = c[s >> 2] | 0;
 l = (l | 0) == 0 ? 8216 : l;
 n = f;
 e = e - f >> 4;
 a : while (1) {
  while (1) {
   if (!e) break a;
   j = (e | 0) / 2 | 0;
   k = n + (j << 4) | 0;
   if ((c[k >> 2] | 0) == (m | 0)) {
    e = j;
    continue;
   }
   g = c[n + (j << 4) + 4 >> 2] | 0;
   g = (g | 0) == 0 ? 8216 : g;
   h = a[g >> 0] | 0;
   f = a[l >> 0] | 0;
   if (!(h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != f << 24 >> 24)) {
    i = l;
    do {
     g = g + 1 | 0;
     i = i + 1 | 0;
     h = a[g >> 0] | 0;
     f = a[i >> 0] | 0;
    } while (!(h << 24 >> 24 == 0 ? 1 : h << 24 >> 24 != f << 24 >> 24));
   }
   if ((h & 255) < (f & 255)) break; else e = j;
  }
  n = k + 16 | 0;
  e = e + -1 - j | 0;
 }
 h = c[t >> 2] | 0;
 f = n - (o ? 0 : p + (h << 4) | 0) >> 4;
 e = c[r >> 2] | 0;
 g = e - h | 0;
 do if ((g | 0) == (f | 0)) {
  if ((e | 0) < (c[q >> 2] | 0)) {
   c[r >> 2] = e + 1;
   u = 47;
   break;
  }
  if ((h | 0) > 0) {
   e = Bb(b, f) | 0;
   u = 32;
  } else e = 0;
 } else {
  if (!f) {
   if ((h | 0) > 0) {
    e = h + -1 | 0;
    c[t >> 2] = e;
    u = 47;
    break;
   }
   if ((e | 0) >= (c[q >> 2] | 0)) {
    e = 0;
    break;
   }
   e = Cb(b, 0) | 0;
   u = 32;
   break;
  }
  if ((g >> 1 | 0) > (f | 0)) if ((h | 0) > 0) {
   e = Bb(b, f) | 0;
   u = 32;
   break;
  } else {
   e = Cb(b, f) | 0;
   u = 32;
   break;
  } else if ((e | 0) < (c[q >> 2] | 0)) {
   e = Cb(b, f) | 0;
   u = 32;
   break;
  } else {
   e = Bb(b, f) | 0;
   u = 32;
   break;
  }
 } while (0);
 if ((u | 0) == 32) {
  if ((e | 0) == (d | 0)) return;
 } else if ((u | 0) == 47) {
  b = p + (e << 4) | 0;
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[s >> 2];
  c[d >> 2] = 0;
  c[s >> 2] = 0;
  u = d + 8 | 0;
  c[b + 8 >> 2] = c[u >> 2];
  d = d + 12 | 0;
  c[b + 12 >> 2] = c[d >> 2];
  c[u >> 2] = 0;
  c[d >> 2] = 0;
  return;
 }
 f = c[e >> 2] | 0;
 if (f | 0) {
  u = c[f >> 2] | 0;
  c[f >> 2] = u - 1;
  if ((u | 0) == 1) {
   qf(c[e >> 2] | 0);
   c[e >> 2] = 0;
   f = e + 4 | 0;
   c[f >> 2] = 0;
  } else f = e + 4 | 0;
  c[e >> 2] = 0;
  c[f >> 2] = 0;
 }
 f = c[d >> 2] | 0;
 c[e >> 2] = f;
 c[e + 4 >> 2] = c[s >> 2];
 if (f | 0) {
  u = f;
  c[u >> 2] = (c[u >> 2] | 0) + 1;
 }
 h = e + 8 | 0;
 g = d + 8 | 0;
 f = c[h >> 2] | 0;
 if (f | 0) {
  u = c[f >> 2] | 0;
  c[f >> 2] = u - 1;
  if ((u | 0) == 1) {
   qf(c[h >> 2] | 0);
   c[h >> 2] = 0;
   f = e + 12 | 0;
   c[f >> 2] = 0;
  } else f = e + 12 | 0;
  c[h >> 2] = 0;
  c[f >> 2] = 0;
 }
 f = c[g >> 2] | 0;
 c[h >> 2] = f;
 c[e + 12 >> 2] = c[d + 12 >> 2];
 if (!f) return;
 d = f;
 c[d >> 2] = (c[d >> 2] | 0) + 1;
 return;
}

function Te(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 e = c[b >> 2] | 0;
 if (e | 0) a[e >> 0] = 0;
 m = b + 8 | 0;
 c[m >> 2] = 0;
 g = c[d + 4 >> 2] | 0;
 g = (g | 0) == 0 ? 8216 : g;
 e = c[d >> 2] | 0;
 if (!e) return;
 e = c[e + 4 >> 2] | 0;
 if ((e | 0) == -1) {
  f = g;
  a : do if (!(f & 3)) {
   e = g;
   i = 8;
  } else {
   e = g;
   d = f;
   while (1) {
    if (!(a[e >> 0] | 0)) {
     e = d;
     break a;
    }
    e = e + 1 | 0;
    d = e;
    if (!(d & 3)) {
     i = 8;
     break;
    }
   }
  } while (0);
  if ((i | 0) == 8) {
   while (1) {
    d = c[e >> 2] | 0;
    if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) e = e + 4 | 0; else break;
   }
   if ((d & 255) << 24 >> 24) do e = e + 1 | 0; while ((a[e >> 0] | 0) != 0);
  }
  e = e - f | 0;
 }
 if ((e | 0) <= 0) return;
 d = e + 1 | 0;
 l = b + 4 | 0;
 f = c[l >> 2] | 0;
 if ((d | 0) < (f | 0)) {
  d = c[b >> 2] | 0;
  f = 0;
 } else {
  k = f + ((d | 0) < 128 ? 128 : d) | 0;
  d = pf(k) | 0;
  f = c[b >> 2] | 0;
  if (!f) a[d >> 0] = 0; else {
   h = f;
   b : do if (!((h ^ d) & 3)) {
    if (!(h & 3)) h = d; else {
     h = d;
     do {
      j = a[f >> 0] | 0;
      a[h >> 0] = j;
      if (!(j << 24 >> 24)) break b;
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
    i = 25;
   } else {
    h = d;
    i = 25;
   } while (0);
   if ((i | 0) == 25) {
    j = a[f >> 0] | 0;
    a[h >> 0] = j;
    if (j << 24 >> 24) do {
     f = f + 1 | 0;
     h = h + 1 | 0;
     j = a[f >> 0] | 0;
     a[h >> 0] = j;
    } while (j << 24 >> 24 != 0);
   }
   qf(c[b >> 2] | 0);
   c[b >> 2] = 0;
  }
  c[b >> 2] = d;
  c[l >> 2] = k;
  f = c[m >> 2] | 0;
 }
 f = d + f | 0;
 d = g;
 c : do if (!((d ^ f) & 3)) {
  h = (e | 0) != 0;
  if (h & (d & 3 | 0) != 0) {
   d = e;
   do {
    l = a[g >> 0] | 0;
    a[f >> 0] = l;
    if (!(l << 24 >> 24)) break c;
    d = d + -1 | 0;
    g = g + 1 | 0;
    f = f + 1 | 0;
    h = (d | 0) != 0;
   } while (h & (g & 3 | 0) != 0);
  } else d = e;
  if (h) {
   if (a[g >> 0] | 0) {
    d : do if (d >>> 0 > 3) do {
     h = c[g >> 2] | 0;
     if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break d;
     c[f >> 2] = h;
     d = d + -4 | 0;
     g = g + 4 | 0;
     f = f + 4 | 0;
    } while (d >>> 0 > 3); while (0);
    i = 40;
   }
  } else d = 0;
 } else {
  d = e;
  i = 40;
 } while (0);
 e : do if ((i | 0) == 40) if (!d) d = 0; else while (1) {
  l = a[g >> 0] | 0;
  a[f >> 0] = l;
  if (!(l << 24 >> 24)) break e;
  d = d + -1 | 0;
  f = f + 1 | 0;
  if (!d) {
   d = 0;
   break;
  } else g = g + 1 | 0;
 } while (0);
 Kf(f | 0, 0, d | 0) | 0;
 l = (c[m >> 2] | 0) + e | 0;
 c[m >> 2] = l;
 a[(c[b >> 2] | 0) + l >> 0] = 0;
 return;
}

function Ae(a) {
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
     b = 3913;
     break;
    }
   case 1:
    {
     b = 3898;
     break;
    }
   case 2:
    {
     b = 3887;
     break;
    }
   case 3:
    {
     b = 3882;
     break;
    }
   case 4:
    {
     b = 3874;
     break;
    }
   case 5:
    {
     b = 3866;
     break;
    }
   case 6:
    {
     b = 3858;
     break;
    }
   case 7:
    {
     b = 3850;
     break;
    }
   default:
    b = 3834;
   }
   c[k >> 2] = b;
   Fe(3628, k);
   c[n >> 2] = 7;
   break;
  }
  switch (j | 0) {
  case 0:
   {
    b = 3913;
    break;
   }
  case 1:
   {
    b = 3898;
    break;
   }
  case 2:
   {
    b = 3887;
    break;
   }
  case 3:
   {
    b = 3882;
    break;
   }
  case 4:
   {
    b = 3874;
    break;
   }
  case 5:
   {
    b = 3866;
    break;
   }
  case 6:
   {
    b = 3858;
    break;
   }
  case 7:
   {
    b = 3850;
    break;
   }
  default:
   b = 3834;
  }
  c[l >> 2] = b;
  Fe(3696, l);
  b = c[m >> 2] | 0;
  c[n >> 2] = b;
  c[m >> 2] = 9;
  p = 33;
 } while (0);
 if ((p | 0) == 33) if ((b | 0) != 7) {
  Je(c[1904] | 0);
  switch (c[n >> 2] | 0) {
  case 0:
   {
    c[m >> 2] = Sa[c[c[a >> 2] >> 2] & 255](a) | 0;
    break;
   }
  case 1:
   {
    c[m >> 2] = Sa[c[(c[a >> 2] | 0) + 4 >> 2] & 255](a) | 0;
    break;
   }
  case 2:
   {
    c[m >> 2] = Sa[c[(c[a >> 2] | 0) + 8 >> 2] & 255](a) | 0;
    break;
   }
  case 3:
   {
    c[m >> 2] = Sa[c[(c[a >> 2] | 0) + 12 >> 2] & 255](a) | 0;
    break;
   }
  case 4:
   {
    c[m >> 2] = Sa[c[(c[a >> 2] | 0) + 16 >> 2] & 255](a) | 0;
    break;
   }
  case 5:
   {
    c[m >> 2] = Sa[c[(c[a >> 2] | 0) + 20 >> 2] & 255](a) | 0;
    break;
   }
  case 6:
   {
    c[m >> 2] = Sa[c[(c[a >> 2] | 0) + 24 >> 2] & 255](a) | 0;
    c[n >> 2] = 9;
    break;
   }
  case 7:
   {
    b = 3850;
    p = 49;
    break;
   }
  default:
   {
    b = 3834;
    p = 49;
   }
  }
  if ((p | 0) == 49) {
   c[o >> 2] = b;
   Ge(3741, o);
  }
  Je(c[1905] | 0);
  i = r;
  return;
 }
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 1e8;
 do {
  if ((za(q | 0, q | 0) | 0) != -1) break;
  if (!(c[1915] | 0)) b = 7704; else b = c[(Pf() | 0) + 64 >> 2] | 0;
 } while ((c[b >> 2] | 0) == 4);
 i = r;
 return;
}

function Le(b, d) {
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
   Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
   return;
  }
  if (!b) return;
  Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
  return;
 }
 if ((f + -1 | 0) == (d | 0)) {
  l = g + -1 | 0;
  c[m >> 2] = l;
  m = c[b >> 2] | 0;
  b = c[m + (l * 40 | 0) + 24 >> 2] | 0;
  if ((b | 0) == (m + (l * 40 | 0) + 8 | 0)) {
   Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
   return;
  }
  if (!b) return;
  Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
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
   if ((e | 0) == (g | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   c[i >> 2] = 0;
   e = j + (f * 40 | 0) + 24 | 0;
   d = c[e >> 2] | 0;
   do if (!d) c[i >> 2] = 0; else if ((d | 0) == (h | 0)) {
    c[i >> 2] = g;
    Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, g);
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
   Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
   return;
  }
  if (!b) return;
  Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
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
   if ((e | 0) == (g | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   c[i >> 2] = 0;
   e = d + (k * 40 | 0) + 24 | 0;
   f = c[e >> 2] | 0;
   do if (!f) c[i >> 2] = 0; else if ((f | 0) == (h | 0)) {
    c[i >> 2] = g;
    Ra[c[(c[f >> 2] | 0) + 12 >> 2] & 255](f, g);
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
  Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
  return;
 }
 if (!b) return;
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 return;
}

function ke(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 p = i;
 i = i + 16 | 0;
 o = p;
 l = a + 24 | 0;
 d = c[l >> 2] | 0;
 j = a + 20 | 0;
 b = c[j >> 2] | 0;
 n = a + 36 | 0;
 a : do if ((d | 0) != (b | 0)) {
  m = a + 48 | 0;
  k = a + 44 | 0;
  if ((c[m >> 2] | 0) != (c[k >> 2] | 0)) {
   d = a + 12 | 0;
   while (1) {
    k = (c[d >> 2] | 0) + (b << 2) | 0;
    h = c[k >> 2] | 0;
    c[k >> 2] = 0;
    c[j >> 2] = b + 1;
    je(n);
    k = c[m >> 2] | 0;
    c[m >> 2] = k + 1;
    c[(c[n >> 2] | 0) + (k << 2) >> 2] = h;
    b = c[j >> 2] | 0;
    if ((c[l >> 2] | 0) == (b | 0)) break a;
   }
  }
  f = a + 12 | 0;
  g = a + 52 | 0;
  c[g >> 2] = 0;
  h = a + 56 | 0;
  c[h >> 2] = 0;
  e = c[n >> 2] | 0;
  if (e) {
   qf(e);
   b = c[j >> 2] | 0;
   d = c[l >> 2] | 0;
  }
  c[g >> 2] = c[a + 28 >> 2];
  c[h >> 2] = c[a + 32 >> 2];
  l = n;
  c[l >> 2] = 0;
  c[l + 4 >> 2] = 0;
  c[n >> 2] = c[f >> 2];
  c[a + 40 >> 2] = c[a + 16 >> 2];
  c[k >> 2] = b;
  c[m >> 2] = d;
  c[f >> 2] = 0;
  c[f + 4 >> 2] = 0;
  c[f + 8 >> 2] = 0;
  c[f + 12 >> 2] = 0;
 } while (0);
 l = a + 60 | 0;
 h = a + 76 | 0;
 c[h >> 2] = 0;
 j = a + 80 | 0;
 c[j >> 2] = 0;
 b = c[l >> 2] | 0;
 k = a + 68 | 0;
 if (!b) d = a + 72 | 0; else {
  f = c[k >> 2] | 0;
  d = a + 72 | 0;
  e = c[d >> 2] | 0;
  if ((f | 0) < (e | 0)) {
   g = f;
   while (1) {
    b = b + (g << 2) | 0;
    f = c[b >> 2] | 0;
    if (f) {
     e = f + 4 | 0;
     m = c[e >> 2] | 0;
     c[e >> 2] = m - 1;
     if ((m | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[b >> 2] = 0;
     e = c[d >> 2] | 0;
    }
    f = g + 1 | 0;
    if ((f | 0) >= (e | 0)) break;
    b = c[l >> 2] | 0;
    g = f;
   }
   b = c[l >> 2] | 0;
  }
  qf(b);
 }
 c[d >> 2] = 0;
 c[h >> 2] = c[a + 52 >> 2];
 c[j >> 2] = c[a + 56 >> 2];
 c[d >> 2] = 0;
 c[l >> 2] = c[n >> 2];
 c[a + 64 >> 2] = c[a + 40 >> 2];
 c[k >> 2] = c[a + 44 >> 2];
 c[d >> 2] = c[a + 48 >> 2];
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 c[n + 12 >> 2] = 0;
 b = c[k >> 2] | 0;
 if ((c[d >> 2] | 0) == (b | 0)) {
  o = c[a >> 2] | 0;
  o = o + 28 | 0;
  o = c[o >> 2] | 0;
  Qa[o & 255](a);
  i = p;
  return;
 }
 do {
  n = c[(c[a >> 2] | 0) + 24 >> 2] | 0;
  j = (c[l >> 2] | 0) + (b << 2) | 0;
  m = c[j >> 2] | 0;
  c[j >> 2] = 0;
  c[k >> 2] = b + 1;
  c[o >> 2] = m;
  Ra[n & 255](a, o);
  b = c[o >> 2] | 0;
  if (b | 0) {
   m = b + 4 | 0;
   n = c[m >> 2] | 0;
   c[m >> 2] = n - 1;
   if ((n | 0) == 1) Qa[c[c[b >> 2] >> 2] & 255](b);
   c[o >> 2] = 0;
  }
  b = c[k >> 2] | 0;
 } while ((c[d >> 2] | 0) != (b | 0));
 o = c[a >> 2] | 0;
 o = o + 28 | 0;
 o = c[o >> 2] | 0;
 Qa[o & 255](a);
 i = p;
 return;
}

function he(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 c[a >> 2] = 1916;
 b = a + 84 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  h = d + 4 | 0;
  i = c[h >> 2] | 0;
  c[h >> 2] = i - 1;
  if ((i | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[b >> 2] = 0;
 }
 i = a + 60 | 0;
 c[a + 76 >> 2] = 0;
 c[a + 80 >> 2] = 0;
 d = c[i >> 2] | 0;
 h = a + 68 | 0;
 if (!d) b = a + 72 | 0; else {
  f = c[h >> 2] | 0;
  b = a + 72 | 0;
  e = c[b >> 2] | 0;
  if ((f | 0) < (e | 0)) {
   g = f;
   while (1) {
    d = d + (g << 2) | 0;
    f = c[d >> 2] | 0;
    if (f) {
     j = f + 4 | 0;
     e = c[j >> 2] | 0;
     c[j >> 2] = e - 1;
     if ((e | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
     e = c[b >> 2] | 0;
    }
    f = g + 1 | 0;
    if ((f | 0) >= (e | 0)) break;
    d = c[i >> 2] | 0;
    g = f;
   }
   d = c[i >> 2] | 0;
  }
  qf(d);
 }
 c[i >> 2] = 0;
 c[a + 64 >> 2] = 0;
 c[h >> 2] = 0;
 c[b >> 2] = 0;
 i = a + 36 | 0;
 c[a + 52 >> 2] = 0;
 c[a + 56 >> 2] = 0;
 d = c[i >> 2] | 0;
 h = a + 44 | 0;
 if (!d) b = a + 48 | 0; else {
  f = c[h >> 2] | 0;
  b = a + 48 | 0;
  e = c[b >> 2] | 0;
  if ((f | 0) < (e | 0)) {
   g = f;
   while (1) {
    d = d + (g << 2) | 0;
    f = c[d >> 2] | 0;
    if (f) {
     e = f + 4 | 0;
     j = c[e >> 2] | 0;
     c[e >> 2] = j - 1;
     if ((j | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
     c[d >> 2] = 0;
     e = c[b >> 2] | 0;
    }
    f = g + 1 | 0;
    if ((f | 0) >= (e | 0)) break;
    d = c[i >> 2] | 0;
    g = f;
   }
   d = c[i >> 2] | 0;
  }
  qf(d);
 }
 c[i >> 2] = 0;
 c[a + 40 >> 2] = 0;
 c[h >> 2] = 0;
 c[b >> 2] = 0;
 h = a + 12 | 0;
 c[a + 28 >> 2] = 0;
 c[a + 32 >> 2] = 0;
 b = c[h >> 2] | 0;
 g = a + 20 | 0;
 if (!b) {
  j = a + 24 | 0;
  a = a + 16 | 0;
  c[h >> 2] = 0;
  c[a >> 2] = 0;
  c[g >> 2] = 0;
  c[j >> 2] = 0;
  return;
 }
 e = c[g >> 2] | 0;
 i = a + 24 | 0;
 d = c[i >> 2] | 0;
 if ((e | 0) < (d | 0)) {
  f = e;
  while (1) {
   b = b + (f << 2) | 0;
   e = c[b >> 2] | 0;
   if (e) {
    d = e + 4 | 0;
    j = c[d >> 2] | 0;
    c[d >> 2] = j - 1;
    if ((j | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
    c[b >> 2] = 0;
    d = c[i >> 2] | 0;
   }
   e = f + 1 | 0;
   if ((e | 0) >= (d | 0)) break;
   b = c[h >> 2] | 0;
   f = e;
  }
  b = c[h >> 2] | 0;
 }
 qf(b);
 j = i;
 a = a + 16 | 0;
 c[h >> 2] = 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[j >> 2] = 0;
 return;
}

function $d(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 d = c[e >> 2] | 0;
 k = Wa[c[(c[d >> 2] | 0) + 4 >> 2] & 255](d, 8214) | 0;
 d = k ? d : 0;
 if (d | 0) {
  k = d + 4 | 0;
  c[k >> 2] = (c[k >> 2] | 0) + 1;
 }
 c[l >> 2] = d;
 f = d + 120 | 0;
 e = c[f >> 2] | 0;
 do if (!e) j = 8; else if (!(a[e + 13 >> 0] & 1)) {
  d = c[l >> 2] | 0;
  j = 8;
  break;
 } else {
  k = c[f >> 2] | 0;
  c[k + 100 >> 2] = 1e3;
  a[k + 12 >> 0] = 1;
  a[(c[l >> 2] | 0) + 13 >> 0] = 1;
  a[(c[l >> 2] | 0) + 12 >> 0] = 1;
  break;
 } while (0);
 do if ((j | 0) == 8) {
  if (a[d + 13 >> 0] & 1) {
   a[(c[l >> 2] | 0) + 12 >> 0] = 1;
   break;
  }
  k = c[l >> 2] | 0;
  d = k + 4 | 0;
  c[d >> 2] = (c[d >> 2] | 0) + 1;
  d = b[k + 44 >> 1] | 0;
  if (d << 16 >> 16 == -1) {
   d = 0;
   e = 0;
  } else {
   f = c[k + 20 >> 2] | 0;
   f = c[((f | 0) == 0 ? 1992 : f + 12 | 0) >> 2] | 0;
   g = d << 16 >> 16;
   h = f;
   a : do if (!(h & 3)) {
    d = f;
    j = 14;
   } else {
    e = f;
    d = h;
    while (1) {
     if (!(a[e >> 0] | 0)) break a;
     e = e + 1 | 0;
     d = e;
     if (!(d & 3)) {
      d = e;
      j = 14;
      break;
     }
    }
   } while (0);
   if ((j | 0) == 14) {
    while (1) {
     e = c[d >> 2] | 0;
     if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
    }
    if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
   }
   e = f + g | 0;
   d = d - h - g | 0;
   if ((d | 0) > 0 & (a[e >> 0] | 0) != 0) {
    h = pf(d + 9 | 0) | 0;
    j = h;
    c[j >> 2] = 0;
    c[j + 4 >> 2] = 0;
    c[h >> 2] = 0;
    c[h >> 2] = (c[h >> 2] | 0) + 1;
    c[h + 4 >> 2] = d;
    j = h + 8 | 0;
    Nf(j | 0, e | 0, d | 0) | 0;
    a[j + d >> 0] = 0;
    d = h;
    e = j;
   } else {
    d = 0;
    e = 0;
   }
  }
  Ja(((e | 0) == 0 ? 8216 : e) | 0, k | 0, 177, 178);
  if (d | 0) {
   k = c[d >> 2] | 0;
   c[d >> 2] = k - 1;
   if ((k | 0) == 1) qf(d);
  }
 } while (0);
 d = c[l >> 2] | 0;
 if (!d) {
  i = m;
  return 1;
 }
 j = d + 4 | 0;
 k = c[j >> 2] | 0;
 c[j >> 2] = k - 1;
 if ((k | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
 c[l >> 2] = 0;
 i = m;
 return 1;
}

function Vb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 m = r;
 p = c[d >> 2] | 0;
 e = c[d + 8 >> 2] | 0;
 q = c[d + 12 >> 2] | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 c[d + 12 >> 2] = 0;
 o = p;
 l = (p | 0) == 0;
 b = l ? 0 : o + (e * 52 | 0) | 0;
 k = l ? 0 : o + (q * 52 | 0) | 0;
 if ((b | 0) != (k | 0)) do {
  d = c[b + 24 >> 2] | 0;
  if ((d & 65535) << 16 >> 16 == -1) {
   d = 0;
   f = 0;
  } else {
   h = c[b >> 2] | 0;
   h = c[((h | 0) == 0 ? 1992 : h + 12 | 0) >> 2] | 0;
   j = d << 16 >> 16;
   d = d >> 16;
   if ((d | 0) == -1) {
    g = h;
    a : do if (!(g & 3)) {
     d = h;
     n = 7;
    } else {
     d = h;
     f = g;
     while (1) {
      if (!(a[d >> 0] | 0)) {
       d = f;
       break a;
      }
      d = d + 1 | 0;
      f = d;
      if (!(f & 3)) {
       n = 7;
       break;
      }
     }
    } while (0);
    if ((n | 0) == 7) {
     n = 0;
     while (1) {
      f = c[d >> 2] | 0;
      if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) d = d + 4 | 0; else break;
     }
     if ((f & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
    }
    d = d - g | 0;
   }
   f = h + j | 0;
   d = d - j | 0;
   if ((d | 0) > 0 & (a[f >> 0] | 0) != 0) {
    h = pf(d + 9 | 0) | 0;
    j = h;
    c[j >> 2] = 0;
    c[j + 4 >> 2] = 0;
    c[h >> 2] = 0;
    c[h >> 2] = (c[h >> 2] | 0) + 1;
    c[h + 4 >> 2] = d;
    j = h + 8 | 0;
    Nf(j | 0, f | 0, d | 0) | 0;
    a[j + d >> 0] = 0;
    d = h;
    f = j;
   } else {
    d = 0;
    f = 0;
   }
  }
  c[m >> 2] = (f | 0) == 0 ? 8216 : f;
  Fe(2332, m);
  if (d | 0) {
   j = c[d >> 2] | 0;
   c[d >> 2] = j - 1;
   if ((j | 0) == 1) qf(d);
  }
  b = b + 52 | 0;
 } while ((b | 0) != (k | 0));
 if (l) {
  i = r;
  return;
 }
 if ((e | 0) < (q | 0)) do {
  b = o + (e * 52 | 0) + 48 | 0;
  d = c[b >> 2] | 0;
  if (d | 0) qf(d);
  c[b >> 2] = 0;
  c[o + (e * 52 | 0) + 40 >> 2] = 0;
  c[o + (e * 52 | 0) + 44 >> 2] = 0;
  c[o + (e * 52 | 0) >> 2] = 0;
  e = e + 1 | 0;
 } while ((e | 0) != (q | 0));
 qf(p);
 i = r;
 return;
}

function Kc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 if ((b | 0) != (a | 0)) {
  j = a + 16 | 0;
  c[j >> 2] = 0;
  k = a + 20 | 0;
  c[k >> 2] = 0;
  e = c[a >> 2] | 0;
  i = a + 8 | 0;
  if (!e) d = a + 12 | 0; else {
   f = c[i >> 2] | 0;
   d = a + 12 | 0;
   g = c[d >> 2] | 0;
   if ((f | 0) < (g | 0)) {
    h = f;
    while (1) {
     e = e + (h << 2) | 0;
     f = c[e >> 2] | 0;
     if (f) {
      l = f + 4 | 0;
      g = c[l >> 2] | 0;
      c[l >> 2] = g - 1;
      if ((g | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
      c[e >> 2] = 0;
      g = c[d >> 2] | 0;
     }
     f = h + 1 | 0;
     if ((f | 0) >= (g | 0)) break;
     e = c[a >> 2] | 0;
     h = f;
    }
    e = c[a >> 2] | 0;
   }
   qf(e);
  }
  l = a + 4 | 0;
  c[d >> 2] = 0;
  c[j >> 2] = c[b + 16 >> 2];
  c[k >> 2] = c[b + 20 >> 2];
  c[a >> 2] = 0;
  c[l >> 2] = 0;
  c[i >> 2] = 0;
  c[d >> 2] = 0;
  c[a >> 2] = c[b >> 2];
  c[l >> 2] = c[b + 4 >> 2];
  c[i >> 2] = c[b + 8 >> 2];
  c[d >> 2] = c[b + 12 >> 2];
  c[b >> 2] = 0;
  c[b + 4 >> 2] = 0;
  c[b + 8 >> 2] = 0;
  c[b + 12 >> 2] = 0;
 }
 f = a + 24 | 0;
 g = b + 24 | 0;
 h = a + 40 | 0;
 d = c[h >> 2] | 0;
 if ((d | 0) == (f | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 c[h >> 2] = 0;
 d = b + 40 | 0;
 e = c[d >> 2] | 0;
 do if (!e) c[h >> 2] = 0; else if ((e | 0) == (g | 0)) {
  c[h >> 2] = f;
  l = c[d >> 2] | 0;
  Ra[c[(c[l >> 2] | 0) + 12 >> 2] & 255](l, f);
  break;
 } else {
  c[h >> 2] = e;
  c[d >> 2] = 0;
  break;
 } while (0);
 g = a + 48 | 0;
 h = b + 48 | 0;
 f = a + 64 | 0;
 d = c[f >> 2] | 0;
 if ((d | 0) == (g | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 c[f >> 2] = 0;
 d = b + 64 | 0;
 e = c[d >> 2] | 0;
 if (!e) {
  c[f >> 2] = 0;
  return;
 }
 if ((e | 0) == (h | 0)) {
  c[f >> 2] = g;
  l = c[d >> 2] | 0;
  Ra[c[(c[l >> 2] | 0) + 12 >> 2] & 255](l, g);
  return;
 } else {
  c[f >> 2] = e;
  c[d >> 2] = 0;
  return;
 }
}

function ac(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 64 | 0;
 k = l;
 g = l + 4 | 0;
 c[g >> 2] = 0;
 a[g + 36 >> 0] = 0;
 b = g + 4 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 c[b + 8 >> 2] = -1;
 c[b + 12 >> 2] = -1;
 c[b + 16 >> 2] = -1;
 c[b + 20 >> 2] = -1;
 c[b + 24 >> 2] = -1;
 c[b + 28 >> 2] = -1;
 b = g + 40 | 0;
 c[b >> 2] = 0;
 e = g + 44 | 0;
 c[e >> 2] = 0;
 j = g + 48 | 0;
 c[j >> 2] = 0;
 Hc(g, d);
 f = c[j >> 2] | 0;
 if (f | 0) qf(f);
 m = d + 40 | 0;
 c[b >> 2] = c[m >> 2];
 f = d + 44 | 0;
 c[e >> 2] = c[f >> 2];
 b = d + 48 | 0;
 c[j >> 2] = c[b >> 2];
 c[m >> 2] = 0;
 c[f >> 2] = 0;
 c[b >> 2] = 0;
 b = c[g + 24 >> 2] | 0;
 if ((b & 65535) << 16 >> 16 == -1) {
  b = 0;
  e = 0;
 } else {
  g = c[g >> 2] | 0;
  g = c[((g | 0) == 0 ? 1992 : g + 12 | 0) >> 2] | 0;
  d = b << 16 >> 16;
  b = b >> 16;
  if ((b | 0) == -1) {
   f = g;
   a : do if (!(f & 3)) {
    b = g;
    h = 8;
   } else {
    e = g;
    b = f;
    while (1) {
     if (!(a[e >> 0] | 0)) break a;
     e = e + 1 | 0;
     b = e;
     if (!(b & 3)) {
      b = e;
      h = 8;
      break;
     }
    }
   } while (0);
   if ((h | 0) == 8) {
    while (1) {
     e = c[b >> 2] | 0;
     if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) b = b + 4 | 0; else break;
    }
    if ((e & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
   }
   b = b - f | 0;
  }
  e = g + d | 0;
  b = b - d | 0;
  if ((b | 0) > 0 & (a[e >> 0] | 0) != 0) {
   h = pf(b + 9 | 0) | 0;
   m = h;
   c[m >> 2] = 0;
   c[m + 4 >> 2] = 0;
   c[h >> 2] = 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   c[h + 4 >> 2] = b;
   m = h + 8 | 0;
   Nf(m | 0, e | 0, b | 0) | 0;
   a[m + b >> 0] = 0;
   b = h;
   e = m;
  } else {
   b = 0;
   e = 0;
  }
 }
 c[k >> 2] = (e | 0) == 0 ? 8216 : e;
 Fe(2362, k);
 if (b | 0) {
  m = c[b >> 2] | 0;
  c[b >> 2] = m - 1;
  if ((m | 0) == 1) qf(b);
 }
 b = c[j >> 2] | 0;
 if (!b) {
  i = l;
  return;
 }
 qf(b);
 i = l;
 return;
}

function Ob(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 64 | 0;
 k = l;
 g = l + 4 | 0;
 c[g >> 2] = 0;
 a[g + 36 >> 0] = 0;
 b = g + 4 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 c[b + 8 >> 2] = -1;
 c[b + 12 >> 2] = -1;
 c[b + 16 >> 2] = -1;
 c[b + 20 >> 2] = -1;
 c[b + 24 >> 2] = -1;
 c[b + 28 >> 2] = -1;
 b = g + 40 | 0;
 c[b >> 2] = 0;
 e = g + 44 | 0;
 c[e >> 2] = 0;
 j = g + 48 | 0;
 c[j >> 2] = 0;
 Hc(g, d);
 f = c[j >> 2] | 0;
 if (f | 0) qf(f);
 m = d + 40 | 0;
 c[b >> 2] = c[m >> 2];
 f = d + 44 | 0;
 c[e >> 2] = c[f >> 2];
 b = d + 48 | 0;
 c[j >> 2] = c[b >> 2];
 c[m >> 2] = 0;
 c[f >> 2] = 0;
 c[b >> 2] = 0;
 b = c[g + 24 >> 2] | 0;
 if ((b & 65535) << 16 >> 16 == -1) {
  b = 0;
  e = 0;
 } else {
  g = c[g >> 2] | 0;
  g = c[((g | 0) == 0 ? 1992 : g + 12 | 0) >> 2] | 0;
  d = b << 16 >> 16;
  b = b >> 16;
  if ((b | 0) == -1) {
   f = g;
   a : do if (!(f & 3)) {
    b = g;
    h = 8;
   } else {
    e = g;
    b = f;
    while (1) {
     if (!(a[e >> 0] | 0)) break a;
     e = e + 1 | 0;
     b = e;
     if (!(b & 3)) {
      b = e;
      h = 8;
      break;
     }
    }
   } while (0);
   if ((h | 0) == 8) {
    while (1) {
     e = c[b >> 2] | 0;
     if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) b = b + 4 | 0; else break;
    }
    if ((e & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
   }
   b = b - f | 0;
  }
  e = g + d | 0;
  b = b - d | 0;
  if ((b | 0) > 0 & (a[e >> 0] | 0) != 0) {
   h = pf(b + 9 | 0) | 0;
   m = h;
   c[m >> 2] = 0;
   c[m + 4 >> 2] = 0;
   c[h >> 2] = 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   c[h + 4 >> 2] = b;
   m = h + 8 | 0;
   Nf(m | 0, e | 0, b | 0) | 0;
   a[m + b >> 0] = 0;
   b = h;
   e = m;
  } else {
   b = 0;
   e = 0;
  }
 }
 c[k >> 2] = (e | 0) == 0 ? 8216 : e;
 Fe(2313, k);
 if (b | 0) {
  m = c[b >> 2] | 0;
  c[b >> 2] = m - 1;
  if ((m | 0) == 1) qf(b);
 }
 b = c[j >> 2] | 0;
 if (!b) {
  i = l;
  return;
 }
 qf(b);
 i = l;
 return;
}

function Ib(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 64 | 0;
 k = l;
 g = l + 4 | 0;
 c[g >> 2] = 0;
 a[g + 36 >> 0] = 0;
 b = g + 4 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 c[b + 8 >> 2] = -1;
 c[b + 12 >> 2] = -1;
 c[b + 16 >> 2] = -1;
 c[b + 20 >> 2] = -1;
 c[b + 24 >> 2] = -1;
 c[b + 28 >> 2] = -1;
 b = g + 40 | 0;
 c[b >> 2] = 0;
 e = g + 44 | 0;
 c[e >> 2] = 0;
 j = g + 48 | 0;
 c[j >> 2] = 0;
 Hc(g, d);
 f = c[j >> 2] | 0;
 if (f | 0) qf(f);
 m = d + 40 | 0;
 c[b >> 2] = c[m >> 2];
 f = d + 44 | 0;
 c[e >> 2] = c[f >> 2];
 b = d + 48 | 0;
 c[j >> 2] = c[b >> 2];
 c[m >> 2] = 0;
 c[f >> 2] = 0;
 c[b >> 2] = 0;
 b = c[g + 24 >> 2] | 0;
 if ((b & 65535) << 16 >> 16 == -1) {
  b = 0;
  e = 0;
 } else {
  g = c[g >> 2] | 0;
  g = c[((g | 0) == 0 ? 1992 : g + 12 | 0) >> 2] | 0;
  d = b << 16 >> 16;
  b = b >> 16;
  if ((b | 0) == -1) {
   f = g;
   a : do if (!(f & 3)) {
    b = g;
    h = 8;
   } else {
    e = g;
    b = f;
    while (1) {
     if (!(a[e >> 0] | 0)) break a;
     e = e + 1 | 0;
     b = e;
     if (!(b & 3)) {
      b = e;
      h = 8;
      break;
     }
    }
   } while (0);
   if ((h | 0) == 8) {
    while (1) {
     e = c[b >> 2] | 0;
     if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) b = b + 4 | 0; else break;
    }
    if ((e & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
   }
   b = b - f | 0;
  }
  e = g + d | 0;
  b = b - d | 0;
  if ((b | 0) > 0 & (a[e >> 0] | 0) != 0) {
   h = pf(b + 9 | 0) | 0;
   m = h;
   c[m >> 2] = 0;
   c[m + 4 >> 2] = 0;
   c[h >> 2] = 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   c[h + 4 >> 2] = b;
   m = h + 8 | 0;
   Nf(m | 0, e | 0, b | 0) | 0;
   a[m + b >> 0] = 0;
   b = h;
   e = m;
  } else {
   b = 0;
   e = 0;
  }
 }
 c[k >> 2] = (e | 0) == 0 ? 8216 : e;
 Fe(2313, k);
 if (b | 0) {
  m = c[b >> 2] | 0;
  c[b >> 2] = m - 1;
  if ((m | 0) == 1) qf(b);
 }
 b = c[j >> 2] | 0;
 if (!b) {
  i = l;
  return;
 }
 qf(b);
 i = l;
 return;
}

function gf(a, b, d) {
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

function Pe(b, d) {
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
  Ra[c[(c[g >> 2] | 0) + 12 >> 2] & 255](g, e);
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
  if ((e | 0) == (h | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
  c[j >> 2] = 0;
  e = k + (g * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   j = c[e >> 2] | 0;
   Ra[c[(c[j >> 2] | 0) + 12 >> 2] & 255](j, h);
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

function Cb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 j = a + 12 | 0;
 f = c[j >> 2] | 0;
 e = c[a >> 2] | 0;
 g = f + -1 | 0;
 k = e + (g << 4) | 0;
 c[e + (f << 4) >> 2] = c[k >> 2];
 d = e + (g << 4) + 4 | 0;
 c[e + (f << 4) + 4 >> 2] = c[d >> 2];
 c[k >> 2] = 0;
 c[d >> 2] = 0;
 d = e + (g << 4) + 8 | 0;
 c[e + (f << 4) + 8 >> 2] = c[d >> 2];
 k = e + (g << 4) + 12 | 0;
 c[e + (f << 4) + 12 >> 2] = c[k >> 2];
 c[d >> 2] = 0;
 c[k >> 2] = 0;
 k = a + 8 | 0;
 d = c[k >> 2] | 0;
 if ((g | 0) > (d + b | 0)) d = f; else {
  i = f;
  a = d;
  k = e;
  i = i + 1 | 0;
  c[j >> 2] = i;
  a = a + b | 0;
  a = k + (a << 4) | 0;
  return a | 0;
 }
 while (1) {
  i = d + -2 | 0;
  f = e + (g << 4) | 0;
  h = e + (i << 4) | 0;
  d = c[f >> 2] | 0;
  if (d | 0) {
   l = c[d >> 2] | 0;
   c[d >> 2] = l - 1;
   if ((l | 0) == 1) {
    qf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    d = e + (g << 4) + 4 | 0;
    c[d >> 2] = 0;
   } else d = e + (g << 4) + 4 | 0;
   c[f >> 2] = 0;
   c[d >> 2] = 0;
  }
  c[f >> 2] = c[h >> 2];
  f = e + (i << 4) + 4 | 0;
  c[e + (g << 4) + 4 >> 2] = c[f >> 2];
  c[h >> 2] = 0;
  c[f >> 2] = 0;
  f = e + (g << 4) + 8 | 0;
  h = e + (i << 4) + 8 | 0;
  d = c[f >> 2] | 0;
  if (d | 0) {
   l = c[d >> 2] | 0;
   c[d >> 2] = l - 1;
   if ((l | 0) == 1) {
    qf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    d = e + (g << 4) + 12 | 0;
    c[d >> 2] = 0;
   } else d = e + (g << 4) + 12 | 0;
   c[f >> 2] = 0;
   c[d >> 2] = 0;
  }
  c[f >> 2] = c[h >> 2];
  f = e + (i << 4) + 12 | 0;
  c[e + (g << 4) + 12 >> 2] = c[f >> 2];
  c[h >> 2] = 0;
  c[f >> 2] = 0;
  f = g + -1 | 0;
  d = c[k >> 2] | 0;
  if ((f | 0) <= (d + b | 0)) break;
  d = g;
  e = c[a >> 2] | 0;
  g = f;
 }
 k = c[j >> 2] | 0;
 l = d;
 a = c[a >> 2] | 0;
 k = k + 1 | 0;
 c[j >> 2] = k;
 l = l + b | 0;
 l = a + (l << 4) | 0;
 return l | 0;
}

function Ze(a, b, d) {
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
  if (!(c[1915] | 0)) {
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = k;
   c[n + 8 >> 2] = f;
   b = Ma(146, n | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[1915] | 0)) e = 7704; else e = c[(Pf() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
  } else {
   Ha(181, a | 0);
   c[m >> 2] = c[j >> 2];
   c[m + 4 >> 2] = k;
   c[m + 8 >> 2] = f;
   b = Ma(146, m | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[1915] | 0)) e = 7704; else e = c[(Pf() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
   oa(0);
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

function xc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 b = c[a >> 2] | 0;
 g = a + 8 | 0;
 if (!b) {
  h = a + 12 | 0;
  c[a >> 2] = 0;
  a = a + 4 | 0;
  c[a >> 2] = 0;
  c[g >> 2] = 0;
  c[h >> 2] = 0;
  return;
 }
 f = c[g >> 2] | 0;
 h = a + 12 | 0;
 if ((f | 0) < (c[h >> 2] | 0)) {
  e = b + (f << 4) + 8 | 0;
  d = c[e >> 2] | 0;
  if (d | 0) {
   i = c[d >> 2] | 0;
   c[d >> 2] = i - 1;
   if ((i | 0) == 1) {
    qf(c[e >> 2] | 0);
    c[e >> 2] = 0;
    d = b + (f << 4) + 12 | 0;
    c[d >> 2] = 0;
   } else d = b + (f << 4) + 12 | 0;
   c[e >> 2] = 0;
   c[d >> 2] = 0;
  }
  e = b + (f << 4) | 0;
  d = c[e >> 2] | 0;
  if (d | 0) {
   i = c[d >> 2] | 0;
   c[d >> 2] = i - 1;
   if ((i | 0) == 1) {
    qf(c[e >> 2] | 0);
    c[e >> 2] = 0;
    b = b + (f << 4) + 4 | 0;
    c[b >> 2] = 0;
   } else b = b + (f << 4) + 4 | 0;
   c[e >> 2] = 0;
   c[b >> 2] = 0;
  }
  b = f + 1 | 0;
  if ((b | 0) < (c[h >> 2] | 0)) do {
   f = c[a >> 2] | 0;
   e = f + (b << 4) + 8 | 0;
   d = c[e >> 2] | 0;
   if (d | 0) {
    i = c[d >> 2] | 0;
    c[d >> 2] = i - 1;
    if ((i | 0) == 1) {
     qf(c[e >> 2] | 0);
     c[e >> 2] = 0;
     d = f + (b << 4) + 12 | 0;
     c[d >> 2] = 0;
    } else d = f + (b << 4) + 12 | 0;
    c[e >> 2] = 0;
    c[d >> 2] = 0;
   }
   e = f + (b << 4) | 0;
   d = c[e >> 2] | 0;
   if (d | 0) {
    i = c[d >> 2] | 0;
    c[d >> 2] = i - 1;
    if ((i | 0) == 1) {
     qf(c[e >> 2] | 0);
     c[e >> 2] = 0;
     d = f + (b << 4) + 4 | 0;
     c[d >> 2] = 0;
    } else d = f + (b << 4) + 4 | 0;
    c[e >> 2] = 0;
    c[d >> 2] = 0;
   }
   b = b + 1 | 0;
  } while ((b | 0) < (c[h >> 2] | 0));
  b = c[a >> 2] | 0;
 }
 qf(b);
 i = h;
 c[a >> 2] = 0;
 a = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Bb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = a + 8 | 0;
 e = c[k >> 2] | 0;
 h = e + -1 | 0;
 d = c[a >> 2] | 0;
 j = d + (e << 4) | 0;
 c[d + (h << 4) >> 2] = c[j >> 2];
 i = d + (e << 4) + 4 | 0;
 c[d + (h << 4) + 4 >> 2] = c[i >> 2];
 c[j >> 2] = 0;
 c[i >> 2] = 0;
 i = d + (e << 4) + 8 | 0;
 c[d + (h << 4) + 8 >> 2] = c[i >> 2];
 j = d + (e << 4) + 12 | 0;
 c[d + (h << 4) + 12 >> 2] = c[j >> 2];
 c[i >> 2] = 0;
 c[j >> 2] = 0;
 j = b + -1 | 0;
 if ((e | 0) < (j + e | 0)) {
  i = d;
  d = 0;
 } else {
  j = e;
  a = d;
  j = j + -1 | 0;
  c[k >> 2] = j;
  b = j + b | 0;
  b = a + (b << 4) | 0;
  return b | 0;
 }
 while (1) {
  h = e + 1 | 0;
  f = i + (e << 4) | 0;
  g = i + (h << 4) | 0;
  if (d | 0) {
   l = c[d >> 2] | 0;
   c[d >> 2] = l - 1;
   if ((l | 0) == 1) {
    qf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    d = i + (e << 4) + 4 | 0;
    c[d >> 2] = 0;
   } else d = i + (e << 4) + 4 | 0;
   c[f >> 2] = 0;
   c[d >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  f = i + (h << 4) + 4 | 0;
  c[i + (e << 4) + 4 >> 2] = c[f >> 2];
  c[g >> 2] = 0;
  c[f >> 2] = 0;
  f = i + (e << 4) + 8 | 0;
  g = i + (h << 4) + 8 | 0;
  d = c[f >> 2] | 0;
  if (d | 0) {
   l = c[d >> 2] | 0;
   c[d >> 2] = l - 1;
   if ((l | 0) == 1) {
    qf(c[f >> 2] | 0);
    c[f >> 2] = 0;
    d = i + (e << 4) + 12 | 0;
    c[d >> 2] = 0;
   } else d = i + (e << 4) + 12 | 0;
   c[f >> 2] = 0;
   c[d >> 2] = 0;
  }
  c[f >> 2] = c[g >> 2];
  d = i + (h << 4) + 12 | 0;
  c[i + (e << 4) + 12 >> 2] = c[d >> 2];
  c[g >> 2] = 0;
  c[d >> 2] = 0;
  e = c[k >> 2] | 0;
  d = c[a >> 2] | 0;
  if ((h | 0) >= (j + e | 0)) break;
  i = d;
  d = c[d + (h << 4) >> 2] | 0;
  e = h;
 }
 l = e + -1 | 0;
 c[k >> 2] = l;
 l = l + b | 0;
 l = d + (l << 4) | 0;
 return l | 0;
}

function Se(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 e = c[d >> 2] | 0;
 if (!e) {
  c[b >> 2] = 0;
  return;
 }
 i = c[e >> 2] | 0;
 f = c[1914] | 0;
 if (!f) {
  g = pf(24608) | 0;
  Kf(g | 0, 0, 24608) | 0;
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
  c[1914] = g;
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
    g = pf(24608) | 0;
    Kf(g | 0, 0, 24608) | 0;
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
    c[1914] = g;
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
   j = Ve(f, e, d) | 0;
   c[b >> 2] = j;
   if (j | 0) return;
   c[b >> 2] = We(f, e, d) | 0;
   return;
  }
 }
 c[b >> 2] = 0;
 return;
}

function vf(d, e, f) {
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
   wf(1032, s, g, g, 1, 0);
   if ((c[k >> 2] | 0) != 1) t = 10;
  } else {
   Pa[c[(c[p >> 2] | 0) + 24 >> 2] & 255](p, s, g, 1, 0);
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
   Xa[c[(c[g >> 2] | 0) + 28 >> 2] & 255](g, s, c[f >> 2] | 0, 1);
   if ((c[s + 24 >> 2] | 0) == 1) {
    c[f >> 2] = c[s + 16 >> 2];
    g = 1;
   } else g = 0;
  }
 } while (0);
 i = u;
 return g | 0;
}

function yc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 b = c[a >> 2] | 0;
 g = a + 8 | 0;
 if (!b) {
  h = a + 12 | 0;
  c[a >> 2] = 0;
  a = a + 4 | 0;
  c[a >> 2] = 0;
  c[g >> 2] = 0;
  c[h >> 2] = 0;
  return;
 }
 f = c[g >> 2] | 0;
 h = a + 12 | 0;
 if ((f | 0) < (c[h >> 2] | 0)) {
  e = b + (f << 4) + 8 | 0;
  d = c[e >> 2] | 0;
  if (d | 0) {
   i = c[d >> 2] | 0;
   c[d >> 2] = i - 1;
   if ((i | 0) == 1) {
    qf(c[e >> 2] | 0);
    c[e >> 2] = 0;
    d = b + (f << 4) + 12 | 0;
    c[d >> 2] = 0;
   } else d = b + (f << 4) + 12 | 0;
   c[e >> 2] = 0;
   c[d >> 2] = 0;
  }
  e = b + (f << 4) | 0;
  d = c[e >> 2] | 0;
  if (d | 0) {
   i = c[d >> 2] | 0;
   c[d >> 2] = i - 1;
   if ((i | 0) == 1) {
    qf(c[e >> 2] | 0);
    c[e >> 2] = 0;
    b = b + (f << 4) + 4 | 0;
    c[b >> 2] = 0;
   } else b = b + (f << 4) + 4 | 0;
   c[e >> 2] = 0;
   c[b >> 2] = 0;
  }
  b = f + 1 | 0;
  if ((b | 0) < (c[h >> 2] | 0)) do {
   f = c[a >> 2] | 0;
   e = f + (b << 4) + 8 | 0;
   d = c[e >> 2] | 0;
   if (d | 0) {
    i = c[d >> 2] | 0;
    c[d >> 2] = i - 1;
    if ((i | 0) == 1) {
     qf(c[e >> 2] | 0);
     c[e >> 2] = 0;
     d = f + (b << 4) + 12 | 0;
     c[d >> 2] = 0;
    } else d = f + (b << 4) + 12 | 0;
    c[e >> 2] = 0;
    c[d >> 2] = 0;
   }
   e = f + (b << 4) | 0;
   d = c[e >> 2] | 0;
   if (d | 0) {
    i = c[d >> 2] | 0;
    c[d >> 2] = i - 1;
    if ((i | 0) == 1) {
     qf(c[e >> 2] | 0);
     c[e >> 2] = 0;
     d = f + (b << 4) + 4 | 0;
     c[d >> 2] = 0;
    } else d = f + (b << 4) + 4 | 0;
    c[e >> 2] = 0;
    c[d >> 2] = 0;
   }
   b = b + 1 | 0;
  } while ((b | 0) < (c[h >> 2] | 0));
  b = c[a >> 2] | 0;
 }
 qf(b);
 i = h;
 c[a >> 2] = 0;
 a = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Oe(b, d) {
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
  Ra[c[(c[g >> 2] | 0) + 12 >> 2] & 255](g, e);
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
  if ((e | 0) == (h | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
  c[j >> 2] = 0;
  e = g + (l * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   Ra[c[(c[f >> 2] | 0) + 12 >> 2] & 255](f, h);
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

function Sc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 c[a >> 2] = 1556;
 i = a + 16 | 0;
 d = c[i >> 2] | 0;
 h = a + 24 | 0;
 a : do if (!d) b = a + 28 | 0; else {
  e = c[h >> 2] | 0;
  b = a + 28 | 0;
  g = c[b >> 2] | 0;
  f = d + (g << 2) | 0;
  if ((e | 0) != (g | 0)) {
   d = d + (e << 2) | 0;
   do {
    g = c[d >> 2] | 0;
    Qa[c[(c[g >> 2] | 0) + 16 >> 2] & 255](g);
    d = d + 4 | 0;
   } while ((d | 0) != (f | 0));
   d = c[i >> 2] | 0;
   if (d) {
    f = c[h >> 2] | 0;
    e = c[b >> 2] | 0;
    if ((f | 0) < (e | 0)) {
     g = f;
     while (1) {
      d = d + (g << 2) | 0;
      f = c[d >> 2] | 0;
      if (f) {
       j = f + 4 | 0;
       e = c[j >> 2] | 0;
       c[j >> 2] = e - 1;
       if ((e | 0) == 1) Qa[c[c[f >> 2] >> 2] & 255](f);
       c[d >> 2] = 0;
       e = c[b >> 2] | 0;
      }
      f = g + 1 | 0;
      if ((f | 0) >= (e | 0)) break a;
      d = c[i >> 2] | 0;
      g = f;
     }
    }
   }
  }
 } while (0);
 c[b >> 2] = c[h >> 2];
 c[a + 32 >> 2] = 0;
 c[a + 36 >> 2] = 0;
 b = c[i >> 2] | 0;
 if (!b) {
  j = a + 28 | 0;
  g = a + 20 | 0;
  c[i >> 2] = 0;
  c[g >> 2] = 0;
  c[h >> 2] = 0;
  c[j >> 2] = 0;
  qf(a);
  return;
 }
 e = c[h >> 2] | 0;
 g = a + 28 | 0;
 d = c[g >> 2] | 0;
 if ((e | 0) < (d | 0)) {
  f = e;
  while (1) {
   b = b + (f << 2) | 0;
   e = c[b >> 2] | 0;
   if (e) {
    d = e + 4 | 0;
    j = c[d >> 2] | 0;
    c[d >> 2] = j - 1;
    if ((j | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
    c[b >> 2] = 0;
    d = c[g >> 2] | 0;
   }
   e = f + 1 | 0;
   if ((e | 0) >= (d | 0)) break;
   b = c[i >> 2] | 0;
   f = e;
  }
  b = c[i >> 2] | 0;
 }
 qf(b);
 j = g;
 g = a + 20 | 0;
 c[i >> 2] = 0;
 c[g >> 2] = 0;
 c[h >> 2] = 0;
 c[j >> 2] = 0;
 qf(a);
 return;
}

function rb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 l = a + 12 | 0;
 d = c[l >> 2] | 0;
 e = c[a >> 2] | 0;
 f = d + -1 | 0;
 g = e + (f << 5) | 0;
 Se(e + (d << 5) | 0, g);
 c[g >> 2] = 0;
 g = e + (d << 5) + 8 | 0;
 h = e + (f << 5) + 24 | 0;
 i = c[h >> 2] | 0;
 do if (!i) c[e + (d << 5) + 24 >> 2] = 0; else if ((i | 0) == (e + (f << 5) + 8 | 0)) {
  c[e + (d << 5) + 24 >> 2] = g;
  Ra[c[(c[i >> 2] | 0) + 12 >> 2] & 255](i, g);
  break;
 } else {
  c[e + (d << 5) + 24 >> 2] = i;
  c[h >> 2] = 0;
  break;
 } while (0);
 d = c[l >> 2] | 0;
 f = d + -1 | 0;
 k = a + 8 | 0;
 e = c[k >> 2] | 0;
 if ((f | 0) <= (e + b | 0)) {
  j = d;
  k = e;
  j = j + 1 | 0;
  c[l >> 2] = j;
  b = k + b | 0;
  a = c[a >> 2] | 0;
  a = a + (b << 5) | 0;
  return a | 0;
 }
 while (1) {
  g = c[a >> 2] | 0;
  i = g + (f << 5) | 0;
  d = d + -2 | 0;
  h = g + (d << 5) | 0;
  c[i >> 2] = 0;
  Se(i, h);
  c[h >> 2] = 0;
  h = g + (f << 5) + 8 | 0;
  i = g + (d << 5) + 8 | 0;
  j = g + (f << 5) + 24 | 0;
  e = c[j >> 2] | 0;
  if ((e | 0) == (h | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
  c[j >> 2] = 0;
  d = g + (d << 5) + 24 | 0;
  e = c[d >> 2] | 0;
  do if (!e) c[j >> 2] = 0; else if ((e | 0) == (i | 0)) {
   c[j >> 2] = h;
   j = c[d >> 2] | 0;
   Ra[c[(c[j >> 2] | 0) + 12 >> 2] & 255](j, h);
   break;
  } else {
   c[j >> 2] = e;
   c[d >> 2] = 0;
   break;
  } while (0);
  e = f + -1 | 0;
  d = c[k >> 2] | 0;
  if ((e | 0) > (d + b | 0)) {
   d = f;
   f = e;
  } else break;
 }
 j = c[l >> 2] | 0;
 k = d;
 j = j + 1 | 0;
 c[l >> 2] = j;
 b = k + b | 0;
 a = c[a >> 2] | 0;
 a = a + (b << 5) | 0;
 return a | 0;
}
function ee(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 16 | 0;
 e = k;
 j = d + 4 | 0;
 if (d | 0) c[j >> 2] = (c[j >> 2] | 0) + 1;
 h = c[j >> 2] | 0;
 c[j >> 2] = h - 1;
 if ((h | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
 g = c[d + 20 >> 2] | 0;
 c[e >> 2] = c[((g | 0) == 0 ? 1992 : g + 12 | 0) >> 2];
 Ee(0, e);
 g = pf(88) | 0;
 h = g + 4 | 0;
 c[h >> 2] = 0;
 a[g + 12 >> 0] = 0;
 a[g + 13 >> 0] = 0;
 c[g >> 2] = 1896;
 f = g + 20 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[g + 36 >> 2] = 16;
 c[g + 40 >> 2] = 65536;
 a[g + 44 >> 0] = 0;
 f = g + 48 | 0;
 a[g + 76 >> 0] = 0;
 e = g + 64 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 b[e >> 1] = 65535;
 b[e + 2 >> 1] = 65535;
 b[e + 4 >> 1] = 65535;
 b[e + 6 >> 1] = 65535;
 b[e + 8 >> 1] = 65535;
 b[e + 10 >> 1] = 65535;
 c[g + 80 >> 2] = 0;
 c[g + 84 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 e = g + 16 | 0;
 c[e >> 2] = -1;
 if (g | 0) c[h >> 2] = (c[h >> 2] | 0) + 1;
 c[e >> 2] = 404;
 f = d + 124 | 0;
 e = c[f >> 2] | 0;
 if ((g | 0) != (e | 0)) {
  if (e | 0) {
   m = e + 4 | 0;
   l = c[m >> 2] | 0;
   c[m >> 2] = l - 1;
   if ((l | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
   c[f >> 2] = 0;
  }
  c[f >> 2] = g;
  c[h >> 2] = (c[h >> 2] | 0) + 1;
 }
 e = c[d + 120 >> 2] | 0;
 if (e | 0) {
  c[e + 100 >> 2] = c[(c[f >> 2] | 0) + 16 >> 2];
  a[e + 12 >> 0] = 1;
 }
 a[d + 12 >> 0] = 1;
 m = c[h >> 2] | 0;
 c[h >> 2] = m - 1;
 if ((m | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
 m = c[j >> 2] | 0;
 c[j >> 2] = m - 1;
 if ((m | 0) != 1) {
  i = k;
  return;
 }
 Qa[c[c[d >> 2] >> 2] & 255](d);
 i = k;
 return;
}

function Me(b) {
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
   Ra[c[(c[e >> 2] | 0) + 12 >> 2] & 255](e, h);
   break;
  } else {
   c[j >> 2] = Sa[c[(c[e >> 2] | 0) + 8 >> 2] & 255](e) | 0;
   break;
  } while (0);
  a[k >> 0] = a[b >> 0] | 0;
  Ne(g, l);
  b = c[j >> 2] | 0;
  if ((b | 0) == (h | 0)) Qa[c[(c[h >> 2] | 0) + 16 >> 2] & 255](h); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
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
  if ((f | 0) == (b + (e * 40 | 0) + 8 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
  e = e + 1 | 0;
  if ((e | 0) >= (c[d >> 2] | 0)) break;
  b = c[n >> 2] | 0;
 }
 o = c[o >> 2] | 0;
 c[d >> 2] = o;
 i = p;
 return;
}

function Gd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 f = c[d >> 2] | 0;
 d = c[b + 96 >> 2] | 0;
 do {} while ((a[d >> 0] & 1) != 0);
 k = d + 4 | 0;
 c[k >> 2] = (c[k >> 2] | 0) + 1;
 e = c[d + 8 >> 2] | 0;
 if (!e) {
  g = 0;
  d = 0;
 } else {
  g = e + (c[d + 20 >> 2] << 5) | 0;
  d = e + (c[d + 16 >> 2] << 5) | 0;
 }
 j = f + 16 | 0;
 i = c[j >> 2] | 0;
 h = d;
 d = g - d >> 5;
 a : while (1) {
  while (1) {
   if (!d) break a;
   e = (d | 0) / 2 | 0;
   f = h + (e << 5) | 0;
   if ((c[f >> 2] | 0) >>> 0 < i >>> 0) break; else d = e;
  }
  h = f + 32 | 0;
  d = d + -1 - e | 0;
 }
 i = c[h + 24 >> 2] | 0;
 i = Sa[c[(c[i >> 2] | 0) + 24 >> 2] & 255](i) | 0;
 Qa[c[(c[i >> 2] | 0) + 16 >> 2] & 255](i);
 c[k >> 2] = (c[k >> 2] | 0) - 1;
 d = c[b + 100 >> 2] | 0;
 if (!d) {
  e = 0;
  d = 0;
 } else {
  e = d + (c[b + 112 >> 2] << 3) | 0;
  d = d + (c[b + 108 >> 2] << 3) | 0;
 }
 h = c[j >> 2] | 0;
 g = d;
 d = e - d >> 3;
 b : while (1) {
  while (1) {
   if (!d) break b;
   e = (d | 0) / 2 | 0;
   f = g + (e << 3) | 0;
   if ((c[f >> 2] | 0) >>> 0 < h >>> 0) break; else d = e;
  }
  g = f + 8 | 0;
  d = d + -1 - e | 0;
 }
 d = g + 4 | 0;
 e = c[d >> 2] | 0;
 do if ((i | 0) == (e | 0)) if (!i) return; else {
  d = i + 4 | 0;
  break;
 } else {
  if (e | 0) {
   k = e + 4 | 0;
   b = c[k >> 2] | 0;
   c[k >> 2] = b - 1;
   if ((b | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
   c[d >> 2] = 0;
  }
  c[d >> 2] = i;
  if (!i) return; else {
   d = i + 4 | 0;
   c[d >> 2] = (c[d >> 2] | 0) + 1;
   break;
  }
 } while (0);
 b = c[d >> 2] | 0;
 c[d >> 2] = b - 1;
 if ((b | 0) != 1) return;
 Qa[c[c[i >> 2] >> 2] & 255](i);
 return;
}

function qb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 k = a + 8 | 0;
 d = c[k >> 2] | 0;
 e = d + -1 | 0;
 f = c[a >> 2] | 0;
 g = f + (d << 5) | 0;
 Se(f + (e << 5) | 0, g);
 c[g >> 2] = 0;
 g = f + (e << 5) + 8 | 0;
 h = f + (d << 5) + 24 | 0;
 i = c[h >> 2] | 0;
 do if (!i) c[f + (e << 5) + 24 >> 2] = 0; else if ((i | 0) == (f + (d << 5) + 8 | 0)) {
  c[f + (e << 5) + 24 >> 2] = g;
  Ra[c[(c[i >> 2] | 0) + 12 >> 2] & 255](i, g);
  break;
 } else {
  c[f + (e << 5) + 24 >> 2] = i;
  c[h >> 2] = 0;
  break;
 } while (0);
 d = c[k >> 2] | 0;
 j = b + -1 | 0;
 if ((d | 0) < (j + d | 0)) i = d; else {
  j = d;
  j = j + -1 | 0;
  c[k >> 2] = j;
  b = j + b | 0;
  a = c[a >> 2] | 0;
  a = a + (b << 5) | 0;
  return a | 0;
 }
 do {
  d = c[a >> 2] | 0;
  g = d + (i << 5) | 0;
  h = i;
  i = i + 1 | 0;
  f = d + (i << 5) | 0;
  c[g >> 2] = 0;
  Se(g, f);
  c[f >> 2] = 0;
  f = d + (h << 5) + 8 | 0;
  g = d + (i << 5) + 8 | 0;
  h = d + (h << 5) + 24 | 0;
  e = c[h >> 2] | 0;
  if ((e | 0) == (f | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
  c[h >> 2] = 0;
  d = d + (i << 5) + 24 | 0;
  e = c[d >> 2] | 0;
  do if (!e) c[h >> 2] = 0; else if ((e | 0) == (g | 0)) {
   c[h >> 2] = f;
   Ra[c[(c[e >> 2] | 0) + 12 >> 2] & 255](e, f);
   break;
  } else {
   c[h >> 2] = e;
   c[d >> 2] = 0;
   break;
  } while (0);
  d = c[k >> 2] | 0;
 } while ((i | 0) < (j + d | 0));
 j = d + -1 | 0;
 c[k >> 2] = j;
 b = j + b | 0;
 a = c[a >> 2] | 0;
 a = a + (b << 5) | 0;
 return a | 0;
}

function Ie(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 60 | 0;
 c[a + 76 >> 2] = 0;
 c[a + 80 >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d | 0) qf(d);
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
    if ((f | 0) == (d + (e * 40 | 0) + 8 | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (f | 0) Qa[c[(c[f >> 2] | 0) + 20 >> 2] & 255](f);
    e = e + 1 | 0;
    if ((e | 0) >= (c[b >> 2] | 0)) break;
    d = c[h >> 2] | 0;
   }
   d = c[h >> 2] | 0;
  }
  qf(d);
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
   if ((e | 0) == (b + (d * 40 | 0) + 8 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   d = d + 1 | 0;
   if ((d | 0) >= (c[h >> 2] | 0)) break;
   b = c[g >> 2] | 0;
  }
  b = c[g >> 2] | 0;
 }
 qf(b);
 a = a + 8 | 0;
 c[g >> 2] = 0;
 c[a >> 2] = 0;
 c[f >> 2] = 0;
 c[h >> 2] = 0;
 return;
}

function Ve(b, d, e) {
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

function je(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = a + 12 | 0;
 d = c[k >> 2] | 0;
 l = a + 8 | 0;
 b = c[l >> 2] | 0;
 if ((d | 0) == (b | 0)) {
  c[l >> 2] = 0;
  c[k >> 2] = 0;
  b = 0;
  d = 0;
 }
 j = a + 4 | 0;
 if ((c[j >> 2] | 0) != (d | 0)) return;
 if ((b | 0) > 0) {
  g = d - b | 0;
  if ((g | 0) > 0) {
   f = c[a >> 2] | 0;
   d = (f | 0) == 0 ? 0 : f + (b << 2) | 0;
   e = 0;
   while (1) {
    b = c[d >> 2] | 0;
    c[f >> 2] = b;
    if (b | 0) {
     a = b + 4 | 0;
     c[a >> 2] = (c[a >> 2] | 0) + 1;
    }
    b = c[d >> 2] | 0;
    if (b | 0) {
     j = b + 4 | 0;
     a = c[j >> 2] | 0;
     c[j >> 2] = a - 1;
     if ((a | 0) == 1) Qa[c[c[b >> 2] >> 2] & 255](b);
     c[d >> 2] = 0;
    }
    e = e + 1 | 0;
    if ((e | 0) == (g | 0)) break; else {
     d = d + 4 | 0;
     f = f + 4 | 0;
    }
   }
  }
  c[l >> 2] = 0;
  c[k >> 2] = g;
  return;
 } else {
  e = d >> 1;
  f = c[a + 16 >> 2] | 0;
  if ((e | 0) >= (f | 0)) {
   f = c[a + 20 >> 2] | 0;
   f = (e | 0) > (f | 0) ? f : e;
  }
  i = f + d | 0;
  if (!f) return;
  b = d - b | 0;
  d = pf(i << 2) | 0;
  e = c[a >> 2] | 0;
  if ((b | 0) > 0) {
   f = d;
   g = 0;
   h = e + (c[l >> 2] << 2) | 0;
   while (1) {
    c[f >> 2] = c[h >> 2];
    c[h >> 2] = 0;
    g = g + 1 | 0;
    if ((g | 0) == (b | 0)) break; else {
     f = f + 4 | 0;
     h = h + 4 | 0;
    }
   }
  }
  if (e | 0) qf(e);
  c[a >> 2] = d;
  c[j >> 2] = i;
  c[l >> 2] = 0;
  c[k >> 2] = b;
  return;
 }
}

function hc(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 j = c[e >> 2] | 0;
 b = c[d + 24 >> 2] | 0;
 if ((b & 65535) << 16 >> 16 == -1) {
  b = 0;
  e = 0;
 } else {
  g = c[d >> 2] | 0;
  g = c[((g | 0) == 0 ? 1992 : g + 12 | 0) >> 2] | 0;
  h = b << 16 >> 16;
  b = b >> 16;
  if ((b | 0) == -1) {
   d = g;
   a : do if (!(d & 3)) {
    b = g;
    f = 6;
   } else {
    e = g;
    b = d;
    while (1) {
     if (!(a[e >> 0] | 0)) break a;
     e = e + 1 | 0;
     b = e;
     if (!(b & 3)) {
      b = e;
      f = 6;
      break;
     }
    }
   } while (0);
   if ((f | 0) == 6) {
    while (1) {
     e = c[b >> 2] | 0;
     if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) b = b + 4 | 0; else break;
    }
    if ((e & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
   }
   b = b - d | 0;
  }
  e = g + h | 0;
  b = b - h | 0;
  if ((b | 0) > 0 & (a[e >> 0] | 0) != 0) {
   g = pf(b + 9 | 0) | 0;
   h = g;
   c[h >> 2] = 0;
   c[h + 4 >> 2] = 0;
   c[g >> 2] = 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   c[g + 4 >> 2] = b;
   h = g + 8 | 0;
   Nf(h | 0, e | 0, b | 0) | 0;
   a[h + b >> 0] = 0;
   b = g;
   e = h;
  } else {
   b = 0;
   e = 0;
  }
 }
 c[k >> 2] = (e | 0) == 0 ? 8216 : e;
 c[k + 4 >> 2] = j;
 Fe(2400, k);
 if (!b) {
  i = l;
  return;
 }
 k = c[b >> 2] | 0;
 c[b >> 2] = k - 1;
 if ((k | 0) != 1) {
  i = l;
  return;
 }
 qf(b);
 i = l;
 return;
}

function yf(b, d, e, f, g) {
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
   Pa[c[(c[j >> 2] | 0) + 24 >> 2] & 255](j, d, e, f, g);
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
    Va[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b, d, e, e, 1, g);
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

function Qe(b, d) {
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
  Ra[c[(c[b >> 2] | 0) + 12 >> 2] & 255](b, j);
  e = f;
  b = c[f >> 2] | 0;
  break;
 } else {
  b = Sa[c[(c[b >> 2] | 0) + 8 >> 2] & 255](b) | 0;
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
  Ra[c[(c[j >> 2] | 0) + 12 >> 2] & 255](j, f);
  break;
 } else {
  m = h + 24 | 0;
  c[m >> 2] = Sa[c[(c[b >> 2] | 0) + 8 >> 2] & 255](b) | 0;
  b = m;
  break;
 } while (0);
 a[h + 32 >> 0] = a[d >> 0] | 0;
 Ne(g, h);
 b = c[b >> 2] | 0;
 if ((b | 0) == (f | 0)) Qa[c[(c[f >> 2] | 0) + 16 >> 2] & 255](f); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[e >> 2] | 0;
 if ((b | 0) == (j | 0)) {
  Qa[c[(c[j >> 2] | 0) + 16 >> 2] & 255](j);
  i = l;
  return k | 0;
 }
 if (!b) {
  i = l;
  return k | 0;
 }
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 i = l;
 return k | 0;
}

function Tc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 e = h;
 g = c[b >> 2] | 0;
 if ((g | 0) == 0 | (Wa[c[(c[g >> 2] | 0) + 4 >> 2] & 255](g, 8208) | 0) ^ 1) {
  d = c[b >> 2] | 0;
  if ((d | 0) == 0 | (Wa[c[(c[d >> 2] | 0) + 4 >> 2] & 255](d, 8212) | 0) ^ 1) {
   Ge(2675, e);
   b = 0;
   i = h;
   return b | 0;
  }
  g = d + 4 | 0;
  c[g >> 2] = (c[g >> 2] | 0) + 1;
  e = a + 8 | 0;
  f = ((c[e >> 2] | 0) + 1 | 0) % (c[a + 12 >> 2] | 0) | 0;
  c[e >> 2] = f;
  f = c[(c[a + 16 >> 2] | 0) + ((c[a + 24 >> 2] | 0) + f << 2) >> 2] | 0;
  Wa[c[(c[f >> 2] | 0) + 4 >> 2] & 255](f, b) | 0;
  b = c[g >> 2] | 0;
  c[g >> 2] = b - 1;
  if ((b | 0) != 1) {
   b = 1;
   i = h;
   return b | 0;
  }
  Qa[c[c[d >> 2] >> 2] & 255](d);
  b = 1;
  i = h;
  return b | 0;
 }
 f = g + 4 | 0;
 c[f >> 2] = (c[f >> 2] | 0) + 1;
 d = c[a + 16 >> 2] | 0;
 if (d | 0) {
  e = c[a + 24 >> 2] | 0;
  j = c[a + 28 >> 2] | 0;
  a = d + (j << 2) | 0;
  if ((e | 0) != (j | 0)) {
   d = d + (e << 2) | 0;
   do {
    j = c[d >> 2] | 0;
    Wa[c[(c[j >> 2] | 0) + 4 >> 2] & 255](j, b) | 0;
    d = d + 4 | 0;
   } while ((d | 0) != (a | 0));
  }
 }
 j = c[f >> 2] | 0;
 c[f >> 2] = j - 1;
 if ((j | 0) != 1) {
  j = 1;
  i = h;
  return j | 0;
 }
 Qa[c[c[g >> 2] >> 2] & 255](g);
 j = 1;
 i = h;
 return j | 0;
}

function yd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 i = a + 12 | 0;
 f = c[i >> 2] | 0;
 j = c[a >> 2] | 0;
 e = f + -1 | 0;
 d = j + (e << 3) | 0;
 Se(j + (f << 3) | 0, d);
 c[d >> 2] = 0;
 e = j + (e << 3) + 4 | 0;
 c[j + (f << 3) + 4 >> 2] = c[e >> 2];
 c[e >> 2] = 0;
 e = c[i >> 2] | 0;
 f = e + -1 | 0;
 j = a + 8 | 0;
 d = c[j >> 2] | 0;
 if ((f | 0) <= (d + b | 0)) {
  h = e;
  j = d;
  h = h + 1 | 0;
  c[i >> 2] = h;
  b = j + b | 0;
  a = c[a >> 2] | 0;
  a = a + (b << 3) | 0;
  return a | 0;
 }
 while (1) {
  g = c[a >> 2] | 0;
  h = g + (f << 3) | 0;
  d = e + -2 | 0;
  e = g + (d << 3) | 0;
  c[h >> 2] = 0;
  Se(h, e);
  c[e >> 2] = 0;
  d = g + (d << 3) + 4 | 0;
  e = c[d >> 2] | 0;
  g = g + (f << 3) + 4 | 0;
  h = c[g >> 2] | 0;
  if ((e | 0) != (h | 0)) {
   if (h | 0) {
    l = h + 4 | 0;
    k = c[l >> 2] | 0;
    c[l >> 2] = k - 1;
    if ((k | 0) == 1) Qa[c[c[h >> 2] >> 2] & 255](h);
    c[g >> 2] = 0;
   }
   c[g >> 2] = e;
   c[d >> 2] = 0;
  }
  e = f + -1 | 0;
  d = c[j >> 2] | 0;
  if ((e | 0) > (d + b | 0)) {
   l = f;
   f = e;
   e = l;
  } else break;
 }
 k = c[i >> 2] | 0;
 l = d;
 k = k + 1 | 0;
 c[i >> 2] = k;
 l = l + b | 0;
 k = c[a >> 2] | 0;
 l = k + (l << 3) | 0;
 return l | 0;
}

function Ic(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = c[b >> 2] | 0;
 e = c[a >> 2] | 0;
 if ((d | 0) != (e | 0)) {
  if (e | 0) {
   g = e + 4 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = h - 1;
   if ((h | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
   c[a >> 2] = 0;
  }
  c[a >> 2] = d;
  c[b >> 2] = 0;
 }
 f = a + 8 | 0;
 g = b + 8 | 0;
 h = a + 24 | 0;
 d = c[h >> 2] | 0;
 if ((d | 0) == (f | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 c[h >> 2] = 0;
 d = b + 24 | 0;
 e = c[d >> 2] | 0;
 do if (!e) c[h >> 2] = 0; else if ((e | 0) == (g | 0)) {
  c[h >> 2] = f;
  h = c[d >> 2] | 0;
  Ra[c[(c[h >> 2] | 0) + 12 >> 2] & 255](h, f);
  break;
 } else {
  c[h >> 2] = e;
  c[d >> 2] = 0;
  break;
 } while (0);
 g = a + 32 | 0;
 h = b + 32 | 0;
 f = a + 48 | 0;
 d = c[f >> 2] | 0;
 if ((d | 0) == (g | 0)) Qa[c[(c[d >> 2] | 0) + 16 >> 2] & 255](d); else if (d | 0) Qa[c[(c[d >> 2] | 0) + 20 >> 2] & 255](d);
 c[f >> 2] = 0;
 d = b + 48 | 0;
 e = c[d >> 2] | 0;
 if (!e) {
  c[f >> 2] = 0;
  return;
 }
 if ((e | 0) == (h | 0)) {
  c[f >> 2] = g;
  b = c[d >> 2] | 0;
  Ra[c[(c[b >> 2] | 0) + 12 >> 2] & 255](b, g);
  return;
 } else {
  c[f >> 2] = e;
  c[d >> 2] = 0;
  return;
 }
}

function db(a) {
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
    qf(c[f >> 2] | 0);
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
     qf(c[g >> 2] | 0);
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
 qf(b);
 g = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[h >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Xc(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 1620;
 b = c[a + 168 >> 2] | 0;
 if ((b | 0) == (a + 152 | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[a + 144 >> 2] | 0;
 if ((b | 0) == (a + 128 | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[a + 120 >> 2] | 0;
 if ((b | 0) == (a + 104 | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[a + 96 >> 2] | 0;
 if ((b | 0) == (a + 80 | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[a + 72 >> 2] | 0;
 if ((b | 0) == (a + 56 | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[a + 48 >> 2] | 0;
 if ((b | 0) == (a + 32 | 0)) Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b); else if (b | 0) Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 b = c[a + 24 >> 2] | 0;
 if ((b | 0) == (a + 8 | 0)) {
  Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
  qf(a);
  return;
 }
 if (!b) {
  qf(a);
  return;
 }
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 qf(a);
 return;
}

function Jc(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 m = d + 4 | 0;
 if ((c[m >> 2] | 0) == (e | 0)) return;
 n = d + 12 | 0;
 o = d + 8 | 0;
 p = (c[n >> 2] | 0) - (c[o >> 2] | 0) | 0;
 q = pf(e * 52 | 0) | 0;
 if ((p | 0) > 0) {
  j = q;
  k = 0;
  l = (c[d >> 2] | 0) + ((c[o >> 2] | 0) * 52 | 0) | 0;
  while (1) {
   c[j >> 2] = 0;
   a[j + 36 >> 0] = 0;
   f = j + 4 | 0;
   g = f + 32 | 0;
   do {
    b[f >> 1] = 65535;
    f = f + 2 | 0;
   } while ((f | 0) < (g | 0));
   f = j + 40 | 0;
   c[f >> 2] = 0;
   g = j + 44 | 0;
   c[g >> 2] = 0;
   h = j + 48 | 0;
   c[h >> 2] = 0;
   Hc(j, l);
   j = j + 52 | 0;
   i = c[h >> 2] | 0;
   if (i | 0) qf(i);
   c[h >> 2] = 0;
   c[f >> 2] = 0;
   c[g >> 2] = 0;
   i = l + 40 | 0;
   c[f >> 2] = c[i >> 2];
   c[g >> 2] = c[l + 44 >> 2];
   c[h >> 2] = c[l + 48 >> 2];
   c[l >> 2] = 0;
   k = k + 1 | 0;
   c[i >> 2] = 0;
   c[i + 4 >> 2] = 0;
   c[i + 8 >> 2] = 0;
   if ((k | 0) == (p | 0)) break; else l = l + 52 | 0;
  }
 }
 f = c[d >> 2] | 0;
 if (f | 0) qf(f);
 c[d >> 2] = q;
 c[m >> 2] = e;
 c[o >> 2] = 0;
 c[n >> 2] = p;
 return;
}

function xd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 j = a + 8 | 0;
 d = c[j >> 2] | 0;
 i = d + -1 | 0;
 h = c[a >> 2] | 0;
 g = h + (d << 3) | 0;
 Se(h + (i << 3) | 0, g);
 c[g >> 2] = 0;
 d = h + (d << 3) + 4 | 0;
 c[h + (i << 3) + 4 >> 2] = c[d >> 2];
 c[d >> 2] = 0;
 d = c[j >> 2] | 0;
 i = b + -1 | 0;
 if ((d | 0) < (i + d | 0)) h = d; else {
  i = d;
  i = i + -1 | 0;
  c[j >> 2] = i;
  b = i + b | 0;
  a = c[a >> 2] | 0;
  a = a + (b << 3) | 0;
  return a | 0;
 }
 do {
  g = c[a >> 2] | 0;
  e = g + (h << 3) | 0;
  f = h;
  h = h + 1 | 0;
  d = g + (h << 3) | 0;
  c[e >> 2] = 0;
  Se(e, d);
  c[d >> 2] = 0;
  d = g + (h << 3) + 4 | 0;
  e = c[d >> 2] | 0;
  f = g + (f << 3) + 4 | 0;
  g = c[f >> 2] | 0;
  if ((e | 0) != (g | 0)) {
   if (g | 0) {
    l = g + 4 | 0;
    k = c[l >> 2] | 0;
    c[l >> 2] = k - 1;
    if ((k | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
    c[f >> 2] = 0;
   }
   c[f >> 2] = e;
   c[d >> 2] = 0;
  }
  d = c[j >> 2] | 0;
 } while ((h | 0) < (i + d | 0));
 l = d + -1 | 0;
 c[j >> 2] = l;
 l = l + b | 0;
 k = c[a >> 2] | 0;
 l = k + (l << 3) | 0;
 return l | 0;
}

function gd(a, b) {
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
  Ra[c[(c[e >> 2] | 0) + 12 >> 2] & 255](e, k);
  j = c[d >> 2] | 0;
  Qa[c[(c[j >> 2] | 0) + 16 >> 2] & 255](j);
  c[d >> 2] = 0;
  j = c[g >> 2] | 0;
  Ra[c[(c[j >> 2] | 0) + 12 >> 2] & 255](j, e);
  j = c[g >> 2] | 0;
  Qa[c[(c[j >> 2] | 0) + 16 >> 2] & 255](j);
  c[g >> 2] = 0;
  c[d >> 2] = a;
  Ra[c[(c[k >> 2] | 0) + 12 >> 2] & 255](k, h);
  Qa[c[(c[k >> 2] | 0) + 16 >> 2] & 255](k);
  c[g >> 2] = b;
  i = l;
  return;
 } else {
  Ra[c[(c[e >> 2] | 0) + 12 >> 2] & 255](e, b);
  a = c[d >> 2] | 0;
  Qa[c[(c[a >> 2] | 0) + 16 >> 2] & 255](a);
  c[d >> 2] = c[g >> 2];
  c[g >> 2] = b;
  i = l;
  return;
 } else if (j) {
  Ra[c[(c[b >> 2] | 0) + 12 >> 2] & 255](h, a);
  k = c[g >> 2] | 0;
  Qa[c[(c[k >> 2] | 0) + 16 >> 2] & 255](k);
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

function wc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 b = c[a >> 2] | 0;
 f = a + 8 | 0;
 if (!b) {
  g = a + 12 | 0;
  c[a >> 2] = 0;
  a = a + 4 | 0;
  c[a >> 2] = 0;
  c[f >> 2] = 0;
  c[g >> 2] = 0;
  return;
 }
 d = c[f >> 2] | 0;
 g = a + 12 | 0;
 if ((d | 0) < (c[g >> 2] | 0)) {
  while (1) {
   e = c[b + (d * 56 | 0) + 48 >> 2] | 0;
   if ((e | 0) == (b + (d * 56 | 0) + 32 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   e = c[b + (d * 56 | 0) + 24 >> 2] | 0;
   if ((e | 0) == (b + (d * 56 | 0) + 8 | 0)) Qa[c[(c[e >> 2] | 0) + 16 >> 2] & 255](e); else if (e | 0) Qa[c[(c[e >> 2] | 0) + 20 >> 2] & 255](e);
   b = b + (d * 56 | 0) | 0;
   e = c[b >> 2] | 0;
   if (e | 0) {
    i = e + 4 | 0;
    h = c[i >> 2] | 0;
    c[i >> 2] = h - 1;
    if ((h | 0) == 1) Qa[c[c[e >> 2] >> 2] & 255](e);
    c[b >> 2] = 0;
   }
   d = d + 1 | 0;
   if ((d | 0) >= (c[g >> 2] | 0)) break;
   b = c[a >> 2] | 0;
  }
  b = c[a >> 2] | 0;
 }
 qf(b);
 i = g;
 c[a >> 2] = 0;
 h = a + 4 | 0;
 c[h >> 2] = 0;
 c[f >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Ue(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 32 | 0;
 j = l;
 if (!b) {
  k = -1;
  i = l;
  return k | 0;
 }
 h = b + e | 0;
 b = a[g >> 0] | 0;
 if (!(b << 24 >> 24)) k = 4; else if (!(a[g + 1 >> 0] | 0)) k = 4; else {
  c[j >> 2] = 0;
  c[j + 4 >> 2] = 0;
  c[j + 8 >> 2] = 0;
  c[j + 12 >> 2] = 0;
  c[j + 16 >> 2] = 0;
  c[j + 20 >> 2] = 0;
  c[j + 24 >> 2] = 0;
  c[j + 28 >> 2] = 0;
  do {
   m = j + (((b & 255) >>> 5 & 255) << 2) | 0;
   c[m >> 2] = c[m >> 2] | 1 << (b & 31);
   g = g + 1 | 0;
   b = a[g >> 0] | 0;
  } while (b << 24 >> 24 != 0);
  g = a[h >> 0] | 0;
  a : do if (!(g << 24 >> 24)) b = h; else {
   b = h;
   do {
    if (c[j + (((g & 255) >>> 5 & 255) << 2) >> 2] & 1 << (g & 31) | 0) break a;
    b = b + 1 | 0;
    g = a[b >> 0] | 0;
   } while (g << 24 >> 24 != 0);
  } while (0);
  b = b - h | 0;
 }
 if ((k | 0) == 4) b = (nf(h, b << 24 >> 24) | 0) - h | 0;
 m = b + e | 0;
 m = (m | 0) < (d | 0) & ((f | 0) == -1 | (m | 0) < (f | 0)) ? m : -1;
 i = l;
 return m | 0;
}

function Ab(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 j = a + 4 | 0;
 if ((c[j >> 2] | 0) == (b | 0)) return;
 k = a + 12 | 0;
 l = a + 8 | 0;
 m = (c[k >> 2] | 0) - (c[l >> 2] | 0) | 0;
 n = pf(b << 4) | 0;
 if ((m | 0) > 0) {
  g = n + (d << 4) | 0;
  h = 0;
  i = (c[a >> 2] | 0) + (c[l >> 2] << 4) | 0;
  do {
   c[g >> 2] = c[i >> 2];
   e = i + 4 | 0;
   c[g + 4 >> 2] = c[e >> 2];
   c[i >> 2] = 0;
   c[e >> 2] = 0;
   o = i + 8 | 0;
   c[g + 8 >> 2] = c[o >> 2];
   f = i + 12 | 0;
   c[g + 12 >> 2] = c[f >> 2];
   g = g + 16 | 0;
   c[o >> 2] = 0;
   c[f >> 2] = 0;
   f = c[i >> 2] | 0;
   if (f | 0) {
    o = c[f >> 2] | 0;
    c[f >> 2] = o - 1;
    if ((o | 0) == 1) {
     qf(c[i >> 2] | 0);
     c[i >> 2] = 0;
     c[e >> 2] = 0;
    }
    c[i >> 2] = 0;
    c[e >> 2] = 0;
   }
   i = i + 16 | 0;
   h = h + 1 | 0;
  } while ((h | 0) != (m | 0));
 }
 e = c[a >> 2] | 0;
 if (e | 0) qf(e);
 c[a >> 2] = n;
 c[j >> 2] = b;
 c[l >> 2] = d;
 c[k >> 2] = m + d;
 return;
}

function bf(b, d, e) {
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

function cf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 224 | 0;
 m = q + 120 | 0;
 p = q + 80 | 0;
 o = q;
 n = q + 136 | 0;
 f = p;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[m >> 2] = c[e >> 2];
 if ((df(0, d, m, o, p) | 0) >= 0) {
  e = c[b >> 2] | 0;
  l = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  k = b + 48 | 0;
  if (!(c[k >> 2] | 0)) {
   e = b + 44 | 0;
   f = c[e >> 2] | 0;
   c[e >> 2] = n;
   g = b + 28 | 0;
   c[g >> 2] = n;
   h = b + 20 | 0;
   c[h >> 2] = n;
   c[k >> 2] = 80;
   j = b + 16 | 0;
   c[j >> 2] = n + 80;
   df(b, d, m, o, p) | 0;
   if (f | 0) {
    Oa[c[b + 36 >> 2] & 255](b, 0, 0) | 0;
    c[e >> 2] = f;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
    c[g >> 2] = 0;
    c[h >> 2] = 0;
   }
  } else df(b, d, m, o, p) | 0;
  c[b >> 2] = c[b >> 2] | l;
 }
 i = q;
 return;
}

function Vc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 c[a >> 2] = 1576;
 i = a + 100 | 0;
 c[a + 116 >> 2] = 0;
 c[a + 120 >> 2] = 0;
 b = c[i >> 2] | 0;
 h = a + 108 | 0;
 if (!b) {
  j = a + 112 | 0;
  g = a + 104 | 0;
  c[i >> 2] = 0;
  c[g >> 2] = 0;
  c[h >> 2] = 0;
  c[j >> 2] = 0;
  he(a);
  qf(a);
  return;
 }
 d = c[h >> 2] | 0;
 j = a + 112 | 0;
 e = c[j >> 2] | 0;
 if ((d | 0) < (e | 0)) {
  while (1) {
   f = b + (d << 3) + 4 | 0;
   g = c[f >> 2] | 0;
   if (g) {
    k = g + 4 | 0;
    e = c[k >> 2] | 0;
    c[k >> 2] = e - 1;
    if ((e | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
    c[f >> 2] = 0;
    e = c[j >> 2] | 0;
   }
   c[b + (d << 3) >> 2] = 0;
   d = d + 1 | 0;
   if ((d | 0) >= (e | 0)) break;
   b = c[i >> 2] | 0;
  }
  b = c[i >> 2] | 0;
 }
 qf(b);
 k = j;
 j = a + 104 | 0;
 c[i >> 2] = 0;
 c[j >> 2] = 0;
 c[h >> 2] = 0;
 c[k >> 2] = 0;
 he(a);
 qf(a);
 return;
}

function Xe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = pf(16384) | 0;
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
   g = pf(i << 2) | 0;
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
   if (d | 0) qf(d);
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

function He(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[7624] & 1) != 0);
 c[1907] = (c[1907] | 0) + 1;
 d = c[1911] | 0;
 e = c[1910] | 0;
 if ((d | 0) == (e | 0)) {
  cf(1996, b, h);
  b = c[1907] | 0;
  c[1907] = b - 1;
  i = j;
  return;
 }
 f = c[1908] | 0;
 if (!f) {
  b = c[1907] | 0;
  c[1907] = b - 1;
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
  Xa[c[(c[d >> 2] | 0) + 4 >> 2] & 255](d, 1, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) Aa(); else if ((d | 0) == 12) {
  k = c[1907] | 0;
  c[1907] = k - 1;
  i = j;
  return;
 }
}

function Ge(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[7624] & 1) != 0);
 c[1907] = (c[1907] | 0) + 1;
 d = c[1911] | 0;
 e = c[1910] | 0;
 if ((d | 0) == (e | 0)) {
  cf(1996, b, h);
  b = c[1907] | 0;
  c[1907] = b - 1;
  i = j;
  return;
 }
 f = c[1908] | 0;
 if (!f) {
  b = c[1907] | 0;
  c[1907] = b - 1;
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
  Xa[c[(c[d >> 2] | 0) + 4 >> 2] & 255](d, 2, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) Aa(); else if ((d | 0) == 12) {
  k = c[1907] | 0;
  c[1907] = k - 1;
  i = j;
  return;
 }
}

function Fe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[7624] & 1) != 0);
 c[1907] = (c[1907] | 0) + 1;
 d = c[1911] | 0;
 e = c[1910] | 0;
 if ((d | 0) == (e | 0)) {
  cf(1996, b, h);
  b = c[1907] | 0;
  c[1907] = b - 1;
  i = j;
  return;
 }
 f = c[1908] | 0;
 if (!f) {
  b = c[1907] | 0;
  c[1907] = b - 1;
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
  Xa[c[(c[d >> 2] | 0) + 4 >> 2] & 255](d, 3, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) Aa(); else if ((d | 0) == 12) {
  k = c[1907] | 0;
  c[1907] = k - 1;
  i = j;
  return;
 }
}

function Ee(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 g = h;
 c[g >> 2] = d;
 do {} while ((a[7624] & 1) != 0);
 c[1907] = (c[1907] | 0) + 1;
 b = c[1911] | 0;
 d = c[1910] | 0;
 if ((b | 0) == (d | 0)) {
  cf(1996, 3595, g);
  g = c[1907] | 0;
  c[1907] = g - 1;
  i = h;
  return;
 }
 e = c[1908] | 0;
 if (!e) {
  g = c[1907] | 0;
  c[1907] = g - 1;
  i = h;
  return;
 }
 f = e + (b << 2) | 0;
 d = e + (d << 2) | 0;
 while (1) {
  b = c[d >> 2] | 0;
  if (!b) {
   b = 10;
   break;
  }
  j = b + 4 | 0;
  c[j >> 2] = (c[j >> 2] | 0) + 1;
  Xa[c[(c[b >> 2] | 0) + 4 >> 2] & 255](b, 4, 3595, g);
  e = c[j >> 2] | 0;
  c[j >> 2] = e - 1;
  if ((e | 0) == 1) Qa[c[c[b >> 2] >> 2] & 255](b);
  d = d + 4 | 0;
  if ((d | 0) == (f | 0)) {
   b = 12;
   break;
  }
 }
 if ((b | 0) == 10) Aa(); else if ((b | 0) == 12) {
  j = c[1907] | 0;
  c[1907] = j - 1;
  i = h;
  return;
 }
}

function Pd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 b = a + 84 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  h = d + 4 | 0;
  i = c[h >> 2] | 0;
  c[h >> 2] = i - 1;
  if ((i | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[b >> 2] = 0;
 }
 h = a + 100 | 0;
 f = c[h >> 2] | 0;
 i = a + 108 | 0;
 if (!f) {
  h = a + 112 | 0;
  i = c[i >> 2] | 0;
  c[h >> 2] = i;
  return;
 }
 e = c[i >> 2] | 0;
 b = a + 112 | 0;
 d = c[b >> 2] | 0;
 if ((e | 0) >= (d | 0)) {
  h = b;
  i = c[i >> 2] | 0;
  c[h >> 2] = i;
  return;
 }
 while (1) {
  a = f + (e << 3) + 4 | 0;
  g = c[a >> 2] | 0;
  if (g) {
   j = g + 4 | 0;
   d = c[j >> 2] | 0;
   c[j >> 2] = d - 1;
   if ((d | 0) == 1) Qa[c[c[g >> 2] >> 2] & 255](g);
   c[a >> 2] = 0;
   d = c[b >> 2] | 0;
  }
  c[f + (e << 3) >> 2] = 0;
  e = e + 1 | 0;
  if ((e | 0) >= (d | 0)) break;
  f = c[h >> 2] | 0;
 }
 j = c[i >> 2] | 0;
 c[b >> 2] = j;
 return;
}

function Hc(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if ((e | 0) == (d | 0)) return;
 c[d >> 2] = 0;
 Se(d, e);
 g = e + 4 | 0;
 b[d + 4 >> 1] = b[g >> 1] | 0;
 b[d + 6 >> 1] = b[e + 6 >> 1] | 0;
 b[d + 8 >> 1] = b[e + 8 >> 1] | 0;
 b[d + 10 >> 1] = b[e + 10 >> 1] | 0;
 b[d + 12 >> 1] = b[e + 12 >> 1] | 0;
 b[d + 14 >> 1] = b[e + 14 >> 1] | 0;
 b[d + 16 >> 1] = b[e + 16 >> 1] | 0;
 b[d + 18 >> 1] = b[e + 18 >> 1] | 0;
 b[d + 20 >> 1] = b[e + 20 >> 1] | 0;
 b[d + 22 >> 1] = b[e + 22 >> 1] | 0;
 b[d + 24 >> 1] = b[e + 24 >> 1] | 0;
 b[d + 26 >> 1] = b[e + 26 >> 1] | 0;
 b[d + 28 >> 1] = b[e + 28 >> 1] | 0;
 b[d + 30 >> 1] = b[e + 30 >> 1] | 0;
 b[d + 32 >> 1] = b[e + 32 >> 1] | 0;
 b[d + 34 >> 1] = b[e + 34 >> 1] | 0;
 f = e + 36 | 0;
 a[d + 36 >> 0] = a[f >> 0] | 0;
 c[e >> 2] = 0;
 e = g;
 d = e + 32 | 0;
 do {
  b[e >> 1] = 65535;
  e = e + 2 | 0;
 } while ((e | 0) < (d | 0));
 a[f >> 0] = 0;
 return;
}

function ef(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) {
  if (!(ff(e) | 0)) {
   g = c[f >> 2] | 0;
   h = 5;
  }
 } else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  f = h;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   Oa[c[e + 36 >> 2] & 255](e, b, d) | 0;
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
   if ((Oa[c[e + 36 >> 2] & 255](e, b, h) | 0) >>> 0 < h >>> 0) break a;
   g = d - h | 0;
   b = b + h | 0;
   f = c[i >> 2] | 0;
  } else g = d; while (0);
  Nf(f | 0, b | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
 } while (0);
 return;
}

function De(a) {
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
    if ((e | 0) == 1) Qa[c[c[b >> 2] >> 2] & 255](b);
    c[f >> 2] = 0;
    e = c[h >> 2] | 0;
   }
   d = d + 1 | 0;
   if ((d | 0) >= (e | 0)) break;
   b = c[a >> 2] | 0;
  }
  b = c[a >> 2] | 0;
 }
 qf(b);
 i = h;
 h = a + 4 | 0;
 c[a >> 2] = 0;
 c[h >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function nf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = d & 255;
 a : do if (!f) b = b + (mf(b) | 0) | 0; else {
  if (b & 3) {
   e = d & 255;
   do {
    g = a[b >> 0] | 0;
    if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break a;
    b = b + 1 | 0;
   } while ((b & 3 | 0) != 0);
  }
  f = $(f, 16843009) | 0;
  e = c[b >> 2] | 0;
  b : do if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) do {
   g = e ^ f;
   if ((g & -2139062144 ^ -2139062144) & g + -16843009 | 0) break b;
   b = b + 4 | 0;
   e = c[b >> 2] | 0;
  } while (!((e & -2139062144 ^ -2139062144) & e + -16843009 | 0)); while (0);
  e = d & 255;
  while (1) {
   g = a[b >> 0] | 0;
   if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break; else b = b + 1 | 0;
  }
 } while (0);
 return b | 0;
}

function kf(b, d) {
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
  if (!(c[1915] | 0)) b = 7704; else b = c[(Pf() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 84;
  b = -1;
 } while (0);
 return b | 0;
}

function xf(b, d, e, f) {
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

function Cf(b, d, e, f, g) {
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

function Wd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 c[a >> 2] = 1856;
 b = a + 124 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  f = d + 4 | 0;
  e = c[f >> 2] | 0;
  c[f >> 2] = e - 1;
  if ((e | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[b >> 2] = 0;
 }
 b = a + 120 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  e = d + 4 | 0;
  f = c[e >> 2] | 0;
  c[e >> 2] = f - 1;
  if ((f | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[b >> 2] = 0;
 }
 c[a + 100 >> 2] = 0;
 b = a + 96 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) qf(d);
 c[b >> 2] = 0;
 c[a + 88 >> 2] = 0;
 c[a + 92 >> 2] = 0;
 f = a + 60 | 0;
 xc(f);
 yc(f);
 qf(a);
 return;
}

function ub(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 while (1) {
  e = pf(32) | 0;
  if (e | 0) break;
  b = c[2051] | 0;
  c[2051] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Ua[b & 255]();
 }
 if ((d | 0) == 5) {
  a = ra(4) | 0;
  c[a >> 2] = 2196;
  Fa(a | 0, 1088, 167);
 }
 c[e >> 2] = 1188;
 b = e + 8 | 0;
 d = c[a + 24 >> 2] | 0;
 if (!d) {
  c[e + 24 >> 2] = 0;
  return e | 0;
 }
 if ((d | 0) == (a + 8 | 0)) {
  c[e + 24 >> 2] = b;
  Ra[c[(c[d >> 2] | 0) + 12 >> 2] & 255](d, b);
  return e | 0;
 } else {
  c[e + 24 >> 2] = Sa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d) | 0;
  return e | 0;
 }
 return 0;
}

function Uf(a, b, d, e) {
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
 a = If(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = D;
 Yf(a, b, If(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, D, j) | 0;
 e = If(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = D;
 i = f;
 return (D = d, e) | 0;
}

function jf(a, b, d, e, f) {
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
  Kf(g | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  e = c[a >> 2] | 0;
  d = (e & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   b = f;
   do {
    if (d) {
     ef(g, 256, a);
     e = c[a >> 2] | 0;
    }
    b = b + -256 | 0;
    d = (e & 32 | 0) == 0;
   } while (b >>> 0 > 255);
   if (d) f = f & 255; else break;
  } else if (!d) break;
  ef(g, f, a);
 } while (0);
 i = h;
 return;
}

function zf(b, d, e, f) {
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
  Xa[c[(c[g >> 2] | 0) + 28 >> 2] & 255](g, d, e, f);
 } while (0);
 return;
}

function $e(a, b, d) {
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
 b = La(140, h | 0) | 0;
 if (b >>> 0 > 4294963200) {
  if (!(c[1915] | 0)) a = 7704; else a = c[(Pf() | 0) + 64 >> 2] | 0;
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

function Tf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = If(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = D;
 a = f ^ j;
 b = e ^ i;
 return If((Yf(h, g, If(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, D, 0) | 0) ^ a | 0, D ^ b | 0, a | 0, b | 0) | 0;
}

function nb(b) {
 b = b | 0;
 var d = 0, e = 0;
 b = pf(56) | 0;
 d = b;
 e = d + 56 | 0;
 do {
  c[d >> 2] = 0;
  d = d + 4 | 0;
 } while ((d | 0) < (e | 0));
 c[b + 8 >> 2] = 0;
 c[b >> 2] = 1820;
 e = b + 12 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 c[e + 24 >> 2] = 0;
 c[e + 28 >> 2] = 0;
 c[b + 44 >> 2] = 16;
 c[b + 48 >> 2] = 65536;
 a[b + 52 >> 0] = 0;
 if (!b) return b | 0;
 e = b + 4 | 0;
 c[e >> 2] = (c[e >> 2] | 0) + 1;
 return b | 0;
}

function Nf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return wa(b | 0, d | 0, e | 0) | 0;
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

function lf(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Lf(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +lf(a * 18446744073709551616.0, b);
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

function mf(b) {
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

function be(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 c[a >> 2] = 1896;
 d = a + 80 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   qf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 84 | 0;
   c[b >> 2] = 0;
  } else b = a + 84 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 c[a + 60 >> 2] = 0;
 b = a + 56 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) qf(d);
 c[b >> 2] = 0;
 c[a + 48 >> 2] = 0;
 c[a + 52 >> 2] = 0;
 e = a + 20 | 0;
 xc(e);
 yc(e);
 qf(a);
 return;
}

function rd(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = pf(16) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[2051] | 0;
  c[2051] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Ua[b & 255]();
 }
 if ((d | 0) == 5) {
  a = ra(4) | 0;
  c[a >> 2] = 2196;
  Fa(a | 0, 1088, 167);
 } else if ((d | 0) == 6) {
  d = a + 4 | 0;
  c[b >> 2] = 1712;
  a = b + 4 | 0;
  c[a >> 2] = c[d >> 2];
  c[a + 4 >> 2] = c[d + 4 >> 2];
  c[a + 8 >> 2] = c[d + 8 >> 2];
  return b | 0;
 }
 return 0;
}

function jd(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = pf(16) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[2051] | 0;
  c[2051] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Ua[b & 255]();
 }
 if ((d | 0) == 5) {
  a = ra(4) | 0;
  c[a >> 2] = 2196;
  Fa(a | 0, 1088, 167);
 } else if ((d | 0) == 6) {
  d = a + 4 | 0;
  c[b >> 2] = 1676;
  a = b + 4 | 0;
  c[a >> 2] = c[d >> 2];
  c[a + 4 >> 2] = c[d + 4 >> 2];
  c[a + 8 >> 2] = c[d + 8 >> 2];
  return b | 0;
 }
 return 0;
}

function Jd(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = pf(16) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[2051] | 0;
  c[2051] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Ua[b & 255]();
 }
 if ((d | 0) == 5) {
  a = ra(4) | 0;
  c[a >> 2] = 2196;
  Fa(a | 0, 1088, 167);
 } else if ((d | 0) == 6) {
  d = a + 4 | 0;
  c[b >> 2] = 1784;
  a = b + 4 | 0;
  c[a >> 2] = c[d >> 2];
  c[a + 4 >> 2] = c[d + 4 >> 2];
  c[a + 8 >> 2] = c[d + 8 >> 2];
  return b | 0;
 }
 return 0;
}

function Bd(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = pf(16) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[2051] | 0;
  c[2051] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Ua[b & 255]();
 }
 if ((d | 0) == 5) {
  a = ra(4) | 0;
  c[a >> 2] = 2196;
  Fa(a | 0, 1088, 167);
 } else if ((d | 0) == 6) {
  d = a + 4 | 0;
  c[b >> 2] = 1748;
  a = b + 4 | 0;
  c[a >> 2] = c[d >> 2];
  c[a + 4 >> 2] = c[d + 4 >> 2];
  c[a + 8 >> 2] = c[d + 8 >> 2];
  return b | 0;
 }
 return 0;
}

function $c(a) {
 a = a | 0;
 var b = 0, d = 0;
 while (1) {
  b = pf(16) | 0;
  if (b | 0) {
   d = 6;
   break;
  }
  b = c[2051] | 0;
  c[2051] = b + 0;
  if (!b) {
   d = 5;
   break;
  }
  Ua[b & 255]();
 }
 if ((d | 0) == 5) {
  a = ra(4) | 0;
  c[a >> 2] = 2196;
  Fa(a | 0, 1088, 167);
 } else if ((d | 0) == 6) {
  d = a + 4 | 0;
  c[b >> 2] = 1640;
  a = b + 4 | 0;
  c[a >> 2] = c[d >> 2];
  c[a + 4 >> 2] = c[d + 4 >> 2];
  c[a + 8 >> 2] = c[d + 8 >> 2];
  return b | 0;
 }
 return 0;
}

function Yc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 d = c[b >> 2] | 0;
 if (!(Wa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d, 1229934676) | 0)) {
  e = 0;
  i = f;
  return e | 0;
 }
 d = c[(c[b >> 2] | 0) + 8 >> 2] | 0;
 a = c[a + 8 + (d * 24 | 0) + 16 >> 2] | 0;
 if (!a) {
  c[e >> 2] = d;
  Ge(3364, e);
  e = 0;
  i = f;
  return e | 0;
 } else {
  Ra[c[(c[a >> 2] | 0) + 24 >> 2] & 255](a, b);
  e = 1;
  i = f;
  return e | 0;
 }
 return 0;
}

function hf(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Xf(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = b;
  b = Wf(b | 0, c | 0, 10, 0) | 0;
  if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break; else c = D;
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function ge(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 he(b);
 f = b + -16 | 0;
 a[f + 8 >> 0] = 1;
 g = f + 4 | 0;
 d = c[g >> 2] & 65535;
 e = c[1644] | 0;
 c[1644] = e + 1;
 d = (e << 16) + 65536 | d;
 c[g >> 2] = d;
 e = c[1645] | 0;
 c[f >> 2] = e;
 b = c[1645] | 0;
 if ((b | 0) == (e | 0)) c[1645] = d;
 if ((b | 0) == (e | 0)) return;
 do {
  c[f >> 2] = b;
  d = b;
  b = c[1645] | 0;
  if ((b | 0) == (d | 0)) c[1645] = c[g >> 2];
 } while ((b | 0) != (d | 0));
 return;
}

function Df(b, d, e, f) {
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

function Kf(b, d, e) {
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

function Je(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 Ke(b);
 Me(b);
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
     Qa[c[(c[g >> 2] | 0) + 24 >> 2] & 255](g);
    }
    d = d + 40 | 0;
   } while ((d | 0) != (f | 0));
  }
 }
 Ke(b);
 Me(b);
 return;
}

function Rd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 c[a >> 2] = 1820;
 b = a + 28 | 0;
 xc(b);
 yc(b);
 b = a + 24 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  f = d + 4 | 0;
  e = c[f >> 2] | 0;
  c[f >> 2] = e - 1;
  if ((e | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[b >> 2] = 0;
 }
 d = a + 12 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) qf(b);
 c[d >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 c[a >> 2] = 1520;
 c[a + 8 >> 2] = 0;
 return;
}

function Dc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 c[a >> 2] = 1480;
 d = a + 104 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   qf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 108 | 0;
   c[b >> 2] = 0;
  } else b = a + 108 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 c[a + 80 >> 2] = 0;
 b = c[a + 76 >> 2] | 0;
 if (!b) {
  qf(a);
  return;
 }
 qf(b);
 qf(a);
 return;
}

function Ac(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 c[a >> 2] = 1480;
 d = a + 104 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   qf(c[d >> 2] | 0);
   c[d >> 2] = 0;
   b = a + 108 | 0;
   c[b >> 2] = 0;
  } else b = a + 108 | 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
 }
 c[a + 80 >> 2] = 0;
 b = c[a + 76 >> 2] | 0;
 if (!b) {
  qf(a);
  return;
 }
 qf(b);
 qf(a);
 return;
}

function gb(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 1e7;
 do {
  if ((za(b | 0, b | 0) | 0) != -1) break;
  if (!(c[1915] | 0)) a = 7704; else a = c[(Pf() | 0) + 64 >> 2] | 0;
 } while ((c[a >> 2] | 0) == 4);
 b = c[1642] | 0;
 i = d;
 return (((c[b + 92 >> 2] | 0) - (c[b + 88 >> 2] | 0) + (c[b + 116 >> 2] | 0) - (c[b + 112 >> 2] | 0) | 0) > 0 ? 4 : 5) | 0;
}

function Zd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 f = c[a + 24 >> 2] | 0;
 g = c[(c[f >> 2] | 0) + 4 >> 2] | 0;
 c[d >> 2] = Vd(a, 3, b) | 0;
 Wa[g & 255](f, d) | 0;
 b = c[d >> 2] | 0;
 if (!b) {
  i = e;
  return;
 }
 f = b + 4 | 0;
 g = c[f >> 2] | 0;
 c[f >> 2] = g - 1;
 if ((g | 0) == 1) Qa[c[c[b >> 2] >> 2] & 255](b);
 c[d >> 2] = 0;
 i = e;
 return;
}

function Ud(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 f = c[a + 24 >> 2] | 0;
 g = c[(c[f >> 2] | 0) + 4 >> 2] | 0;
 c[d >> 2] = Vd(a, 1, b) | 0;
 Wa[g & 255](f, d) | 0;
 b = c[d >> 2] | 0;
 if (!b) {
  i = e;
  return;
 }
 f = b + 4 | 0;
 g = c[f >> 2] | 0;
 c[f >> 2] = g - 1;
 if ((g | 0) == 1) Qa[c[c[b >> 2] >> 2] & 255](b);
 c[d >> 2] = 0;
 i = e;
 return;
}

function od(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (a[(c[d >> 2] | 0) + 13 >> 0] & 1) {
  d = c[d >> 2] | 0;
  c[d + 100 >> 2] = 1e3;
  a[d + 12 >> 0] = 1;
  return;
 }
 b = fd(b, (c[d >> 2] | 0) + 16 | 0) | 0;
 if (!b) return;
 Ra[c[(c[b >> 2] | 0) + 24 >> 2] & 255](b, d);
 e = b + 4 | 0;
 d = c[e >> 2] | 0;
 c[e >> 2] = d - 1;
 if ((d | 0) != 1) return;
 Qa[c[c[b >> 2] >> 2] & 255](b);
 return;
}

function ed(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (a[(c[d >> 2] | 0) + 13 >> 0] & 1) {
  d = c[d >> 2] | 0;
  c[d + 100 >> 2] = 1e3;
  a[d + 12 >> 0] = 1;
  return;
 }
 b = fd(b, (c[d >> 2] | 0) + 16 | 0) | 0;
 if (!b) return;
 Ra[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b, d);
 e = b + 4 | 0;
 d = c[e >> 2] | 0;
 c[e >> 2] = d - 1;
 if ((d | 0) != 1) return;
 Qa[c[c[b >> 2] >> 2] & 255](b);
 return;
}

function vb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 c[b >> 2] = 1188;
 d = b + 8 | 0;
 e = a + 24 | 0;
 f = c[e >> 2] | 0;
 if (!f) {
  c[b + 24 >> 2] = 0;
  return;
 }
 if ((f | 0) == (a + 8 | 0)) {
  c[b + 24 >> 2] = d;
  a = c[e >> 2] | 0;
  Ra[c[(c[a >> 2] | 0) + 12 >> 2] & 255](a, d);
  return;
 } else {
  c[b + 24 >> 2] = Sa[c[(c[f >> 2] | 0) + 8 >> 2] & 255](f) | 0;
  return;
 }
}

function Sd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 c[a >> 2] = 1820;
 b = a + 28 | 0;
 xc(b);
 yc(b);
 b = a + 24 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  f = d + 4 | 0;
  e = c[f >> 2] | 0;
  c[f >> 2] = e - 1;
  if ((e | 0) == 1) Qa[c[c[d >> 2] >> 2] & 255](d);
  c[b >> 2] = 0;
 }
 b = c[a + 12 >> 2] | 0;
 if (!b) {
  qf(a);
  return;
 }
 qf(b);
 qf(a);
 return;
}

function ff(b) {
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

function lc(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = pf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[2051] | 0;
  c[2051] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Ua[a & 255]();
 }
 if ((b | 0) == 5) {
  b = ra(4) | 0;
  c[b >> 2] = 2196;
  Fa(b | 0, 1088, 167);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1404;
  return a | 0;
 }
 return 0;
}

function jb(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = pf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[2051] | 0;
  c[2051] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Ua[a & 255]();
 }
 if ((b | 0) == 5) {
  b = ra(4) | 0;
  c[b >> 2] = 2196;
  Fa(b | 0, 1088, 167);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1152;
  return a | 0;
 }
 return 0;
}

function dc(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = pf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[2051] | 0;
  c[2051] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Ua[a & 255]();
 }
 if ((b | 0) == 5) {
  b = ra(4) | 0;
  c[b >> 2] = 2196;
  Fa(b | 0, 1088, 167);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1368;
  return a | 0;
 }
 return 0;
}

function Yb(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = pf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[2051] | 0;
  c[2051] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Ua[a & 255]();
 }
 if ((b | 0) == 5) {
  b = ra(4) | 0;
  c[b >> 2] = 2196;
  Fa(b | 0, 1088, 167);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1332;
  return a | 0;
 }
 return 0;
}

function Rb(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = pf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[2051] | 0;
  c[2051] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Ua[a & 255]();
 }
 if ((b | 0) == 5) {
  b = ra(4) | 0;
  c[b >> 2] = 2196;
  Fa(b | 0, 1088, 167);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1296;
  return a | 0;
 }
 return 0;
}

function Kb(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = pf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[2051] | 0;
  c[2051] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Ua[a & 255]();
 }
 if ((b | 0) == 5) {
  b = ra(4) | 0;
  c[b >> 2] = 2196;
  Fa(b | 0, 1088, 167);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1260;
  return a | 0;
 }
 return 0;
}

function Eb(a) {
 a = a | 0;
 var b = 0;
 while (1) {
  a = pf(8) | 0;
  if (a | 0) {
   b = 6;
   break;
  }
  a = c[2051] | 0;
  c[2051] = a + 0;
  if (!a) {
   b = 5;
   break;
  }
  Ua[a & 255]();
 }
 if ((b | 0) == 5) {
  b = ra(4) | 0;
  c[b >> 2] = 2196;
  Fa(b | 0, 1088, 167);
 } else if ((b | 0) == 6) {
  c[a >> 2] = 1224;
  return a | 0;
 }
 return 0;
}

function Uc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = c[a + 16 >> 2] | 0;
 if (!b) return;
 d = c[a + 24 >> 2] | 0;
 a = c[a + 28 >> 2] | 0;
 e = b + (a << 2) | 0;
 if ((d | 0) == (a | 0)) return;
 a = b + (d << 2) | 0;
 do {
  d = c[a >> 2] | 0;
  Qa[c[(c[d >> 2] | 0) + 8 >> 2] & 255](d);
  a = a + 4 | 0;
 } while ((a | 0) != (e | 0));
 return;
}

function af(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 182;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (Ba(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Ze(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Of(b, c, d) {
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
 } else Nf(b, c, d) | 0;
 return b | 0;
}

function Sf(a, b) {
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

function Rf(b) {
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

function vd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 8 >> 2] | 0;
 a = (c[a + 12 >> 2] | 0) + (e >> 1) | 0;
 if (!(e & 1)) {
  e = d;
  Ra[e & 255](a, b);
  return;
 } else {
  e = c[(c[a >> 2] | 0) + d >> 2] | 0;
  Ra[e & 255](a, b);
  return;
 }
}

function nd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 8 >> 2] | 0;
 a = (c[a + 12 >> 2] | 0) + (e >> 1) | 0;
 if (!(e & 1)) {
  e = d;
  Ra[e & 255](a, b);
  return;
 } else {
  e = c[(c[a >> 2] | 0) + d >> 2] | 0;
  Ra[e & 255](a, b);
  return;
 }
}

function dd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 8 >> 2] | 0;
 a = (c[a + 12 >> 2] | 0) + (e >> 1) | 0;
 if (!(e & 1)) {
  e = d;
  Ra[e & 255](a, b);
  return;
 } else {
  e = c[(c[a >> 2] | 0) + d >> 2] | 0;
  Ra[e & 255](a, b);
  return;
 }
}

function Nd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 8 >> 2] | 0;
 a = (c[a + 12 >> 2] | 0) + (e >> 1) | 0;
 if (!(e & 1)) {
  e = d;
  Ra[e & 255](a, b);
  return;
 } else {
  e = c[(c[a >> 2] | 0) + d >> 2] | 0;
  Ra[e & 255](a, b);
  return;
 }
}

function Fd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 8 >> 2] | 0;
 a = (c[a + 12 >> 2] | 0) + (e >> 1) | 0;
 if (!(e & 1)) {
  e = d;
  Ra[e & 255](a, b);
  return;
 } else {
  e = c[(c[a >> 2] | 0) + d >> 2] | 0;
  Ra[e & 255](a, b);
  return;
 }
}

function Ye(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 c[b >> 2] = c[a + 60 >> 2];
 a = pa(6, b | 0) | 0;
 if (a >>> 0 > 4294963200) {
  if (!(c[1915] | 0)) b = 7704; else b = c[(Pf() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 0 - a;
  a = -1;
 }
 i = d;
 return a | 0;
}

function ie(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = a + 12 | 0;
 je(d);
 e = a + 24 | 0;
 a = c[e >> 2] | 0;
 c[e >> 2] = a + 1;
 b = c[b >> 2] | 0;
 c[(c[d >> 2] | 0) + (a << 2) >> 2] = b;
 if (!b) return 1;
 e = b + 4 | 0;
 c[e >> 2] = (c[e >> 2] | 0) + 1;
 return 1;
}

function tb(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 1188;
 b = c[a + 24 >> 2] | 0;
 if ((b | 0) == (a + 8 | 0)) {
  Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
  qf(a);
  return;
 }
 if (!b) {
  qf(a);
  return;
 }
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 qf(a);
 return;
}

function wf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) xf(b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  Va[c[(c[a >> 2] | 0) + 20 >> 2] & 255](a, b, d, e, f, g);
 }
 return;
}

function xb(a) {
 a = a | 0;
 var b = 0;
 b = c[a + 24 >> 2] | 0;
 if ((b | 0) == (a + 8 | 0)) {
  Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
  qf(a);
  return;
 }
 if (!b) {
  qf(a);
  return;
 }
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 qf(a);
 return;
}

function sb(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 1188;
 b = c[a + 24 >> 2] | 0;
 if ((b | 0) == (a + 8 | 0)) {
  Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
  return;
 }
 if (!b) return;
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 return;
}

function se(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = c[a + 12 >> 2] | 0;
 if (!b) return; else d = 0;
 do {
  e = a + 16 + (d << 2) | 0;
  qf(c[e >> 2] | 0);
  c[e >> 2] = 0;
  d = d + 1 | 0;
 } while ((d | 0) != (b | 0));
 return;
}

function wb(a) {
 a = a | 0;
 var b = 0;
 b = c[a + 24 >> 2] | 0;
 if ((b | 0) == (a + 8 | 0)) {
  Qa[c[(c[b >> 2] | 0) + 16 >> 2] & 255](b);
  return;
 }
 if (!b) return;
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 return;
}

function Xf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Yf(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Vf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = Sf(e, f) | 0;
 a = D;
 return (D = ($(b, f) | 0) + ($(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function sd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 4 | 0;
 c[b >> 2] = 1712;
 a = b + 4 | 0;
 c[a >> 2] = c[d >> 2];
 c[a + 4 >> 2] = c[d + 4 >> 2];
 c[a + 8 >> 2] = c[d + 8 >> 2];
 return;
}

function kd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 4 | 0;
 c[b >> 2] = 1676;
 a = b + 4 | 0;
 c[a >> 2] = c[d >> 2];
 c[a + 4 >> 2] = c[d + 4 >> 2];
 c[a + 8 >> 2] = c[d + 8 >> 2];
 return;
}

function ad(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 4 | 0;
 c[b >> 2] = 1640;
 a = b + 4 | 0;
 c[a >> 2] = c[d >> 2];
 c[a + 4 >> 2] = c[d + 4 >> 2];
 c[a + 8 >> 2] = c[d + 8 >> 2];
 return;
}

function Kd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 4 | 0;
 c[b >> 2] = 1784;
 a = b + 4 | 0;
 c[a >> 2] = c[d >> 2];
 c[a + 4 >> 2] = c[d + 4 >> 2];
 c[a + 8 >> 2] = c[d + 8 >> 2];
 return;
}

function Cd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 4 | 0;
 c[b >> 2] = 1748;
 a = b + 4 | 0;
 c[a >> 2] = c[d >> 2];
 c[a + 4 >> 2] = c[d + 4 >> 2];
 c[a + 8 >> 2] = c[d + 8 >> 2];
 return;
}

function Qf(a, b, c) {
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

function Mf(a, b, c) {
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

function Lf(a, b, c) {
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

function eg(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 Va[a & 255](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Hf() {}
function If(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function Bf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) xf(b, d, e, f);
 return;
}

function Jf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function _f(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 Pa[a & 255](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function uc(a, b) {
 a = a | 0;
 b = b | 0;
 if ((b | 0) == 8211) {
  a = 1;
  return a | 0;
 }
 a = (b | 0) == 8208 | (b | 0) == 8209;
 return a | 0;
}

function rc(a, b) {
 a = a | 0;
 b = b | 0;
 if ((b | 0) == 8210) {
  a = 1;
  return a | 0;
 }
 a = (b | 0) == 8208 | (b | 0) == 8209;
 return a | 0;
}

function Ec(a, b) {
 a = a | 0;
 b = b | 0;
 if ((b | 0) == 8213) {
  a = 1;
  return a | 0;
 }
 a = (b | 0) == 8212 | (b | 0) == 8209;
 return a | 0;
}

function ic() {
 c[1636] = 0;
 c[1637] = 0;
 c[1638] = 0;
 c[1639] = 0;
 c[1640] = 16;
 c[1641] = 65536;
 Ea(171, 6544, n | 0) | 0;
 return;
}

function Ce() {
 c[1908] = 0;
 c[1909] = 0;
 c[1910] = 0;
 c[1911] = 0;
 c[1912] = 16;
 c[1913] = 65536;
 Ea(180, 7632, n | 0) | 0;
 return;
}

function re() {
 Kf(6588, 0, 1024) | 0;
 c[1646] = 0;
 c[1643] = 112;
 c[1644] = 0;
 c[1645] = -1;
 Ea(179, 6572, n | 0) | 0;
 return;
}

function gg(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Xa[a & 255](b | 0, c | 0, d | 0, e | 0);
}

function Oc(a, b) {
 a = a | 0;
 b = b | 0;
 a = a + 8 | 0;
 if ((a | 0) == (b | 0)) return;
 c[a >> 2] = 0;
 Se(a, b);
 return;
}

function oe(a, b) {
 a = a | 0;
 b = b | 0;
 a = c[a + 84 >> 2] | 0;
 Wa[c[(c[a >> 2] | 0) + 4 >> 2] & 255](a, b) | 0;
 return;
}

function me(b) {
 b = b | 0;
 a[b + 89 >> 0] = 1;
 Qa[c[(c[b >> 2] | 0) + 32 >> 2] & 255](b);
 a[b + 90 >> 0] = 1;
 return;
}

function Zf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Oa[a & 255](b | 0, c | 0, d | 0) | 0;
}

function og(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(7);
}

function yb(a) {
 a = a | 0;
 a = c[a + 24 >> 2] | 0;
 return Sa[c[(c[a >> 2] | 0) + 24 >> 2] & 255](a) | 0;
}

function cg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 Ta[a & 255](b | 0, c | 0, d | 0);
}

function pe(a) {
 a = a | 0;
 a = c[a + 84 >> 2] | 0;
 Qa[c[(c[a >> 2] | 0) + 8 >> 2] & 255](a);
 return;
}

function Wf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Yf(a, b, c, d, 0) | 0;
}

function le(b) {
 b = b | 0;
 Qa[c[(c[b >> 2] | 0) + 20 >> 2] & 255](b);
 a[b + 88 >> 0] = 1;
 return;
}

function Rc(a, b) {
 a = a | 0;
 b = b | 0;
 a = i;
 i = i + 16 | 0;
 Ge(2616, a);
 i = a;
 return;
}

function Qc(a, b) {
 a = a | 0;
 b = b | 0;
 a = i;
 i = i + 16 | 0;
 Ge(2558, a);
 i = a;
 return;
}

function Be() {
 var a = 0;
 a = c[1903] | 0;
 Qa[c[(c[a >> 2] | 0) + 28 >> 2] & 255](a);
 return;
}

function fg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Wa[a & 255](b | 0, c | 0) | 0;
}
function Ya(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function ig(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(1);
}

function ce(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 8215 | (b | 0) == 8209 | 0;
}

function Xd(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 8214 | (b | 0) == 8209 | 0;
}

function Bc(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 8212 | (b | 0) == 8209 | 0;
}

function Qd(a) {
 a = a | 0;
 Qa[c[(c[a >> 2] | 0) + 4 >> 2] & 255](a);
 qf(a);
 return;
}

function Lc(a) {
 a = a | 0;
 Qa[c[(c[a >> 2] | 0) + 4 >> 2] & 255](a);
 qf(a);
 return;
}

function ag(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Ra[a & 255](b | 0, c | 0);
}

function qg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(9);
}

function vc(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1229934676 | 0;
}

function sc(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1229934676 | 0;
}

function de(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1213485138 | 0;
}

function Yd(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1213485138 | 0;
}

function Fc(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1229934676 | 0;
}

function Cc(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1229934676 | 0;
}

function hg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(0);
 return 0;
}

function Mc(a) {
 a = a | 0;
 c[a >> 2] = 1520;
 c[a + 8 >> 2] = 0;
 return;
}

function bg(a, b) {
 a = a | 0;
 b = b | 0;
 return Sa[a & 255](b | 0) | 0;
}

function ab(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function mc(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1404;
 return;
}

function kb(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1152;
 return;
}

function ec(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1368;
 return;
}

function Zb(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1332;
 return;
}

function Sb(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1296;
 return;
}

function Lb(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1260;
 return;
}

function Fb(a, b) {
 a = a | 0;
 b = b | 0;
 c[b >> 2] = 1224;
 return;
}

function mg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(5);
}

function $f(a, b) {
 a = a | 0;
 b = b | 0;
 Qa[a & 255](b | 0);
}

function pg(a, b) {
 a = a | 0;
 b = b | 0;
 ca(8);
 return 0;
}

function $a(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function kg(a, b) {
 a = a | 0;
 b = b | 0;
 ca(3);
}

function lg(a) {
 a = a | 0;
 ca(4);
 return 0;
}

function ze(a) {
 a = a | 0;
 Ia();
 return 9;
}

function ud(a) {
 a = a | 0;
 qf(a);
 return;
}

function tc(a) {
 a = a | 0;
 qf(a);
 return;
}

function sf(a) {
 a = a | 0;
 qf(a);
 return;
}

function qd(a) {
 a = a | 0;
 qf(a);
 return;
}

function qc(a) {
 a = a | 0;
 qf(a);
 return;
}

function oc(a) {
 a = a | 0;
 qf(a);
 return;
}

function md(a) {
 a = a | 0;
 qf(a);
 return;
}

function mb(a) {
 a = a | 0;
 qf(a);
 return;
}

function kc(a) {
 a = a | 0;
 qf(a);
 return;
}

function id(a) {
 a = a | 0;
 qf(a);
 return;
}

function ib(a) {
 a = a | 0;
 qf(a);
 return;
}

function gc(a) {
 a = a | 0;
 qf(a);
 return;
}

function cd(a) {
 a = a | 0;
 qf(a);
 return;
}

function cc(a) {
 a = a | 0;
 qf(a);
 return;
}

function _d(a) {
 a = a | 0;
 qf(a);
 return;
}

function _c(a) {
 a = a | 0;
 qf(a);
 return;
}

function Xb(a) {
 a = a | 0;
 qf(a);
 return;
}

function Ub(a) {
 a = a | 0;
 qf(a);
 return;
}

function Qb(a) {
 a = a | 0;
 qf(a);
 return;
}

function Nc(a) {
 a = a | 0;
 qf(a);
 return;
}

function Nb(a) {
 a = a | 0;
 qf(a);
 return;
}

function Md(a) {
 a = a | 0;
 qf(a);
 return;
}

function Jb(a) {
 a = a | 0;
 qf(a);
 return;
}

function Id(a) {
 a = a | 0;
 qf(a);
 return;
}

function Hb(a) {
 a = a | 0;
 qf(a);
 return;
}

function Ff(a) {
 a = a | 0;
 qf(a);
 return;
}

function Ed(a) {
 a = a | 0;
 qf(a);
 return;
}

function Db(a) {
 a = a | 0;
 qf(a);
 return;
}

function Af(a) {
 a = a | 0;
 qf(a);
 return;
}

function Ad(a) {
 a = a | 0;
 qf(a);
 return;
}

function $b(a) {
 a = a | 0;
 qf(a);
 return;
}

function dg(a) {
 a = a | 0;
 Ua[a & 255]();
}

function Gf(a) {
 a = a | 0;
 return 6529;
}

function xe(a) {
 a = a | 0;
 return 5;
}

function we(a) {
 a = a | 0;
 return 4;
}

function ve(a) {
 a = a | 0;
 return 3;
}

function ue(a) {
 a = a | 0;
 return 2;
}

function te(a) {
 a = a | 0;
 return 1;
}

function zd(a) {
 a = a | 0;
 return;
}

function uf(a) {
 a = a | 0;
 return;
}

function tf(a) {
 a = a | 0;
 return;
}

function td(a) {
 a = a | 0;
 return;
}

function rf(a) {
 a = a | 0;
 return;
}

function qe(a) {
 a = a | 0;
 return;
}

function pd(a) {
 a = a | 0;
 return;
}

function ob(a) {
 a = a | 0;
 return;
}

function ne(a) {
 a = a | 0;
 return;
}

function nc(a) {
 a = a | 0;
 return;
}

function ld(a) {
 a = a | 0;
 return;
}

function lb(a) {
 a = a | 0;
 return;
}

function jc(a) {
 a = a | 0;
 return;
}

function hd(a) {
 a = a | 0;
 return;
}

function fe(a) {
 a = a | 0;
 return;
}

function fc(a) {
 a = a | 0;
 return;
}

function bd(a) {
 a = a | 0;
 return;
}

function bc(a) {
 a = a | 0;
 return;
}

function _e(a) {
 a = a | 0;
 return;
}

function _b(a) {
 a = a | 0;
 return;
}

function Zc(a) {
 a = a | 0;
 return;
}

function Wb(a) {
 a = a | 0;
 return;
}

function Tb(a) {
 a = a | 0;
 return;
}

function Pc(a) {
 a = a | 0;
 return;
}

function Pb(a) {
 a = a | 0;
 return;
}

function Mb(a) {
 a = a | 0;
 return;
}

function Ld(a) {
 a = a | 0;
 return;
}

function Hd(a) {
 a = a | 0;
 return;
}

function Gb(a) {
 a = a | 0;
 return;
}

function Ef(a) {
 a = a | 0;
 return;
}

function Dd(a) {
 a = a | 0;
 return;
}

function jg(a) {
 a = a | 0;
 ca(2);
}

function bb(a) {
 a = a | 0;
 D = a;
}

function _a(a) {
 a = a | 0;
 i = a;
}

function cb() {
 return D | 0;
}

function Za() {
 return i | 0;
}

function Pf() {
 return 0;
}

function ng() {
 ca(6);
}

// EMSCRIPTEN_END_FUNCS

 var Oa = [ hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, af, $e, hg, hg, hg, hg, vf, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, Ze, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg, hg ];
 var Pa = [ ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, Cf, ig, ig, ig, yf, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig, ig ];
 var Qa = [ jg, jg, jg, jg, jg, jg, jg, jg, Ae, ob, ib, jg, jg, lb, mb, jg, sb, tb, jg, jg, wb, xb, jg, Wb, Db, jg, jg, Gb, Hb, jg, Jb, jg, jg, Mb, Nb, jg, Pb, Qb, jg, jg, Tb, Ub, jg, Xb, jg, jg, _b, $b, jg, bc, cc, jg, jg, fc, gc, jg, jc, kc, jg, jg, nc, oc, pc, qc, jg, jg, tc, jg, jg, Ac, jg, jg, Dc, jg, jg, Lc, Mc, Nc, jg, Pc, jg, jg, Sc, jg, Uc, Vc, jg, ke, le, me, Wc, jg, pe, Pd, Xc, jg, fe, Zc, _c, jg, jg, bd, cd, jg, hd, id, jg, jg, ld, md, jg, pd, qd, jg, jg, td, ud, jg, zd, Ad, jg, jg, Dd, Ed, jg, Hd, Id, jg, jg, Ld, Md, jg, Qd, Rd, Sd, Td, jg, jg, Wd, jg, jg, _d, jg, be, jg, jg, ge, ne, qe, jg, jg, jg, jg, jg, jg, rf, Af, tf, uf, jg, jg, jg, jg, sf, jg, jg, jg, Ef, Ff, jg, jg, db, jg, jg, jg, jg, jg, jg, ee, se, De, _e, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg, jg ];
 var Ra = [ kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kb, kg, kg, kg, kg, kg, kg, vb, kg, kg, kg, kg, kg, kg, Fb, kg, kg, Ib, kg, kg, Lb, kg, kg, Ob, kg, kg, kg, Sb, kg, kg, Vb, kg, kg, Zb, kg, kg, ac, kg, kg, kg, ec, kg, kg, kg, kg, kg, kg, mc, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, Oc, kg, Qc, Rc, kg, kg, kg, kg, kg, kg, kg, kg, kg, oe, kg, kg, kg, kg, kg, kg, kg, kg, ad, kg, kg, dd, kg, kg, kg, kd, kg, kg, nd, kg, kg, kg, sd, kg, kg, vd, kg, kg, kg, Cd, kg, kg, Fd, kg, kg, kg, Kd, kg, kg, Nd, kg, kg, kg, kg, Ud, Zd, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, ed, od, wd, Gd, Od, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg, kg ];
 var Sa = [ lg, te, ue, ve, fb, gb, hb, ze, lg, lg, lg, jb, lg, lg, lg, nb, lg, lg, ub, lg, lg, lg, yb, lg, lg, Eb, lg, lg, lg, lg, lg, Kb, lg, lg, lg, lg, lg, lg, Rb, lg, lg, lg, lg, lg, Yb, lg, lg, lg, lg, lg, lg, dc, lg, lg, lg, lg, lg, lg, lc, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, $c, lg, lg, lg, lg, lg, lg, jd, lg, lg, lg, lg, lg, lg, rd, lg, lg, lg, lg, lg, lg, Bd, lg, lg, lg, lg, lg, lg, Jd, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, we, xe, ye, Ye, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, Gf, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg, lg ];
 var Ta = [ mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, hc, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, ae, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg, mg ];
 var Ua = [ ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, Be, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng, ng ];
 var Va = [ og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, Bf, og, og, og, wf, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og, og ];
 var Wa = [ pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, rc, sc, pg, uc, vc, pg, Bc, Cc, pg, Ec, Fc, pg, pg, pg, pg, pg, pg, pg, pg, Tc, pg, pg, ie, pg, pg, pg, pg, pg, pg, pg, pg, Yc, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, Xd, Yd, pg, $d, pg, ce, de, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg, pg ];
 var Xa = [ qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, Df, qg, qg, qg, zf, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg, qg ];
 return {
  _i64Subtract: If,
  _free: qf,
  _main: eb,
  _i64Add: Jf,
  _memmove: Of,
  _pthread_self: Pf,
  _memset: Kf,
  _malloc: pf,
  _memcpy: Nf,
  _bitshift64Lshr: Lf,
  _bitshift64Shl: Mf,
  __GLOBAL__sub_I_IOQueueSample_cc: ic,
  __GLOBAL__sub_I_ThreadedQueue_cc: re,
  __GLOBAL__sub_I_Log_cc: Ce,
  runPostSets: Hf,
  stackAlloc: Ya,
  stackSave: Za,
  stackRestore: _a,
  establishStackSpace: $a,
  setThrew: ab,
  setTempRet0: bb,
  getTempRet0: cb,
  dynCall_iiii: Zf,
  dynCall_viiiii: _f,
  dynCall_vi: $f,
  dynCall_vii: ag,
  dynCall_ii: bg,
  dynCall_viii: cg,
  dynCall_v: dg,
  dynCall_viiiiii: eg,
  dynCall_iii: fg,
  dynCall_viiii: gg
 };
})


;