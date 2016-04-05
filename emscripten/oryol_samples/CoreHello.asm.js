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
 var fa = env.invoke_vi;
 var ga = env.invoke_vii;
 var ha = env.invoke_ii;
 var ia = env.invoke_v;
 var ja = env.invoke_viiii;
 var ka = env._pthread_cleanup_pop;
 var la = env._nanosleep;
 var ma = env.___cxa_atexit;
 var na = env._atexit;
 var oa = env._abort;
 var pa = env._emscripten_set_main_loop_timing;
 var qa = env.___syscall6;
 var ra = env._sbrk;
 var sa = env._llvm_trap;
 var ta = env._emscripten_cancel_main_loop;
 var ua = env.___syscall146;
 var va = env._emscripten_get_now;
 var wa = env._emscripten_memcpy_big;
 var xa = env.___syscall54;
 var ya = env.___syscall140;
 var za = env._pthread_cleanup_push;
 var Aa = env._emscripten_set_main_loop;
 var Ba = env._usleep;
 var Ca = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function Cb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 q = D;
 do if (a >>> 0 < 245) {
  p = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = p >>> 3;
  k = c[1027] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 4148 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[1027] = k & ~(1 << b); else {
    if (h >>> 0 < (c[1031] | 0) >>> 0) oa();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else oa();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[1029] | 0;
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
    d = 4148 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[1027] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[1031] | 0) >>> 0) oa();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[1029] | 0;
      break;
     } else oa();
    } while (0);
    h = (b << 3) - p | 0;
    c[g + 4 >> 2] = p | 3;
    e = g + p | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[1032] | 0;
     b = l >>> 3;
     d = 4148 + (b << 1 << 2) | 0;
     a = c[1027] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[1027] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[1029] = h;
    c[1032] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[1028] | 0;
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
    k = c[4412 + ((A | B | C | b | k) + (j >>> k) << 2) >> 2] | 0;
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
    f = c[1031] | 0;
    if (k >>> 0 < f >>> 0) oa();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) oa();
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
     if (b >>> 0 < f >>> 0) oa(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) oa();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) oa();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      o = d;
      break;
     } else oa();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 4412 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[1028] = c[1028] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1031] | 0) >>> 0) oa();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[1031] | 0;
     if (o >>> 0 < b >>> 0) oa();
     c[o + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) oa(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
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
     a = c[1029] | 0;
     if (a | 0) {
      e = c[1032] | 0;
      b = a >>> 3;
      d = 4148 + (b << 1 << 2) | 0;
      a = c[1027] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[1027] = a | b;
       r = d + 8 | 0;
       s = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = e;
      c[s + 12 >> 2] = e;
      c[e + 8 >> 2] = s;
      c[e + 12 >> 2] = d;
     }
     c[1029] = j;
     c[1032] = h;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) p = -1; else {
  a = a + 11 | 0;
  p = a & -8;
  k = c[1028] | 0;
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
   b = c[4412 + (j << 2) >> 2] | 0;
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
     a = c[4412 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (j >>> 0 < ((c[1029] | 0) - p | 0) >>> 0) {
    f = c[1031] | 0;
    if (k >>> 0 < f >>> 0) oa();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) oa();
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
     if (b >>> 0 < f >>> 0) oa(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) oa();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) oa();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else oa();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 4412 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[1028] = c[1028] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1031] | 0) >>> 0) oa();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[1031] | 0;
     if (t >>> 0 < b >>> 0) oa();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) oa(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
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
      d = 4148 + (a << 1 << 2) | 0;
      b = c[1027] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[1027] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
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
     e = 4412 + (d << 2) | 0;
     c[h + 28 >> 2] = d;
     a = h + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1028] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1028] = a | b;
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
     if ((w | 0) == 145) if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
      c[b >> 2] = h;
      c[h + 24 >> 2] = e;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     } else if ((w | 0) == 148) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[1031] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = h;
       c[a >> 2] = h;
       c[h + 8 >> 2] = b;
       c[h + 12 >> 2] = e;
       c[h + 24 >> 2] = 0;
       break;
      } else oa();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[1029] | 0;
 if (d >>> 0 >= p >>> 0) {
  a = d - p | 0;
  b = c[1032] | 0;
  if (a >>> 0 > 15) {
   C = b + p | 0;
   c[1032] = C;
   c[1029] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = p | 3;
  } else {
   c[1029] = 0;
   c[1032] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[1030] | 0;
 if (a >>> 0 > p >>> 0) {
  A = a - p | 0;
  c[1030] = A;
  C = c[1033] | 0;
  B = C + p | 0;
  c[1033] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = p | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[1145] | 0)) {
  c[1147] = 4096;
  c[1146] = 4096;
  c[1148] = -1;
  c[1149] = -1;
  c[1150] = 0;
  c[1138] = 0;
  v = q & -16 ^ 1431655768;
  c[q >> 2] = v;
  c[1145] = v;
 }
 h = p + 48 | 0;
 e = c[1147] | 0;
 j = p + 47 | 0;
 d = e + j | 0;
 e = 0 - e | 0;
 k = d & e;
 if (k >>> 0 <= p >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[1137] | 0;
 if (a | 0) {
  u = c[1135] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[1138] & 4)) {
  b = c[1033] | 0;
  c : do if (!b) w = 171; else {
   g = 4556;
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
   a = d - (c[1030] | 0) & e;
   if (a >>> 0 < 2147483647) {
    b = ra(a | 0) | 0;
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
   f = ra(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[1146] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[1135] | 0;
    d = b + a | 0;
    if (a >>> 0 > p >>> 0 & a >>> 0 < 2147483647) {
     e = c[1137] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = ra(a | 0) | 0;
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
    b = c[1147] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((ra(b | 0) | 0) == (-1 | 0)) {
     ra(d | 0) | 0;
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
  c[1138] = c[1138] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = ra(k | 0) | 0;
  a = ra(0) | 0;
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
  a = (c[1135] | 0) + g | 0;
  c[1135] = a;
  if (a >>> 0 > (c[1136] | 0) >>> 0) c[1136] = a;
  l = c[1033] | 0;
  do if (!l) {
   C = c[1031] | 0;
   if ((C | 0) == 0 | h >>> 0 < C >>> 0) c[1031] = h;
   c[1139] = h;
   c[1140] = g;
   c[1142] = 0;
   c[1036] = c[1145];
   c[1035] = -1;
   a = 0;
   do {
    C = 4148 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = h + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = h + C | 0;
   C = g + -40 - C | 0;
   c[1033] = B;
   c[1030] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[1034] = c[1149];
  } else {
   a = 4556;
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
    C = g - C + (c[1030] | 0) | 0;
    c[1033] = B;
    c[1030] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[1034] = c[1149];
    break;
   }
   a = c[1031] | 0;
   if (h >>> 0 < a >>> 0) {
    c[1031] = h;
    j = h;
   } else j = a;
   b = h + g | 0;
   a = 4556;
   while (1) {
    if ((c[a >> 2] | 0) == (b | 0)) {
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 4556;
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
     C = (c[1030] | 0) + k | 0;
     c[1030] = C;
     c[1033] = m;
     c[m + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[1032] | 0)) {
      C = (c[1029] | 0) + k | 0;
      c[1029] = C;
      c[1032] = m;
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
       b = 4148 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) oa();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        oa();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[1027] = c[1027] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) oa();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        oa();
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
        if (d >>> 0 < j >>> 0) oa(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) oa();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) oa();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else oa();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       d = 4412 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[1028] = c[1028] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[1031] | 0) >>> 0) oa();
        b = g + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[g + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[1031] | 0;
       if (A >>> 0 < e >>> 0) oa();
       c[A + 24 >> 2] = g;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) oa(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
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
      d = 4148 + (a << 1 << 2) | 0;
      b = c[1027] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[1027] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[1031] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       oa();
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
     e = 4412 + (d << 2) | 0;
     c[m + 28 >> 2] = d;
     a = m + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1028] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1028] = a | b;
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
     if ((w | 0) == 276) if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
      c[b >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((w | 0) == 279) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[1031] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = m;
       c[a >> 2] = m;
       c[m + 8 >> 2] = b;
       c[m + 12 >> 2] = e;
       c[m + 24 >> 2] = 0;
       break;
      } else oa();
     }
    } while (0);
    C = n + 8 | 0;
    i = D;
    return C | 0;
   } else b = 4556;
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
   c[1033] = C;
   c[1030] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[1034] = c[1149];
   e = b + 4 | 0;
   c[e >> 2] = 27;
   c[a >> 2] = c[1139];
   c[a + 4 >> 2] = c[1140];
   c[a + 8 >> 2] = c[1141];
   c[a + 12 >> 2] = c[1142];
   c[1139] = h;
   c[1140] = g;
   c[1142] = 0;
   c[1141] = a;
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
     d = 4148 + (a << 1 << 2) | 0;
     b = c[1027] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[1027] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
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
    e = 4412 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[f >> 2] = 0;
    a = c[1028] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[1028] = a | b;
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
    if ((w | 0) == 302) if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
     c[b >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((w | 0) == 305) {
     a = e + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[1031] | 0;
     if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = l;
      c[a >> 2] = l;
      c[l + 8 >> 2] = b;
      c[l + 12 >> 2] = e;
      c[l + 24 >> 2] = 0;
      break;
     } else oa();
    }
   }
  } while (0);
  a = c[1030] | 0;
  if (a >>> 0 > p >>> 0) {
   A = a - p | 0;
   c[1030] = A;
   C = c[1033] | 0;
   B = C + p | 0;
   c[1033] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = p | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 if (!(c[1015] | 0)) a = 4104; else a = c[(Lb() | 0) + 64 >> 2] | 0;
 c[a >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function ub(e, f, g, j, l) {
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
   if (!(c[1015] | 0)) m = 4104; else m = c[(Lb() | 0) + 64 >> 2] | 0;
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
  if (M) if (!(c[e >> 2] & 32)) vb(x, v, e);
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
   n = a[1565 + (s * 58 | 0) + n >> 0] | 0;
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
   xb(ca, o, g);
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
      n = Ib(n | 0, o | 0, 3) | 0;
      o = D;
     } while (!((n | 0) == 0 & (o | 0) == 0));
    }
    if (!(H & 8)) {
     n = H;
     s = 0;
     q = 2045;
     L = 79;
    } else {
     s = V - f | 0;
     n = H;
     r = (r | 0) > (s | 0) ? r : s + 1 | 0;
     s = 0;
     q = 2045;
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
     f = Fb(0, 0, f | 0, n | 0) | 0;
     n = D;
     o = ca;
     c[o >> 2] = f;
     c[o + 4 >> 2] = n;
     o = 1;
     q = 2045;
     L = 78;
     break f;
    }
    if (!(H & 2048)) {
     q = H & 1;
     o = q;
     q = (q | 0) == 0 ? 2045 : 2047;
     L = 78;
    } else {
     o = 1;
     q = 2046;
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
    q = 2045;
    L = 78;
    break;
   }
  case 99:
   {
    a[W >> 0] = c[ca >> 2];
    f = W;
    t = 1;
    v = 0;
    u = 2045;
    n = N;
    break;
   }
  case 109:
   {
    if (!(c[1015] | 0)) f = 4104; else f = c[(Lb() | 0) + 64 >> 2] | 0;
    n = c[f >> 2] | 0;
    f = 0;
    while (1) {
     if ((d[2055 + f >> 0] | 0) == (n | 0)) {
      L = 85;
      break;
     }
     f = f + 1 | 0;
     if ((f | 0) == 87) {
      n = 87;
      f = 2143;
      break;
     }
    }
    if ((L | 0) == 85) if (!f) {
     n = 2143;
     L = 92;
     break f;
    } else {
     n = f;
     f = 2143;
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
    n = n | 0 ? n : 3947;
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
     zb(e, 32, J, 0, H);
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
     G = 3954;
    } else if (!(H & 2048)) {
     G = H & 1;
     F = G;
     G = (G | 0) == 0 ? 3955 : 3960;
    } else {
     F = 1;
     G = 3957;
    }
    h[k >> 3] = p;
    E = c[k + 4 >> 2] & 2146435072;
    do if (E >>> 0 < 2146435072 | (E | 0) == 2146435072 & 0 < 0) {
     w = +Bb(p, fa) * 2.0;
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
      f = yb(f, ((f | 0) < 0) << 31 >> 31, _) | 0;
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
       a[n >> 0] = d[2029 + G >> 0] | u;
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
      zb(e, 32, J, q, H);
      if (!(c[e >> 2] & 32)) vb(x, v, e);
      zb(e, 48, J, q, H ^ 65536);
      n = f - Y | 0;
      if (!(c[e >> 2] & 32)) vb(ea, n, e);
      f = ba - o | 0;
      zb(e, 48, r - (n + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) vb(s, f, e);
      zb(e, 32, J, q, H ^ 8192);
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
         z = Jb(c[n >> 2] | 0, 0, s | 0) | 0;
         z = Gb(z | 0, D | 0, o | 0, 0) | 0;
         A = D;
         y = Tb(z | 0, A | 0, 1e9, 0) | 0;
         c[n >> 2] = y;
         o = Sb(z | 0, A | 0, 1e9, 0) | 0;
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
      q = yb(q, ((q | 0) < 0) << 31 >> 31, _) | 0;
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
     zb(e, 32, J, v, H);
     if (!(c[e >> 2] & 32)) vb(G, F, e);
     zb(e, 48, J, v, H ^ 65536);
     do if (s) {
      q = x >>> 0 > E >>> 0 ? E : x;
      o = q;
      do {
       n = yb(c[o >> 2] | 0, 0, S) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((n | 0) != (S | 0)) break;
        a[U >> 0] = 48;
        n = U;
       } else {
        if (n >>> 0 <= ea >>> 0) break;
        Hb(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) vb(n, T - n | 0, e);
       o = o + 4 | 0;
      } while (o >>> 0 <= E >>> 0);
      do if (u | 0) {
       if (c[e >> 2] & 32 | 0) break;
       vb(3989, 1, e);
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < B >>> 0) while (1) {
       n = yb(c[o >> 2] | 0, 0, S) | 0;
       if (n >>> 0 > ea >>> 0) {
        Hb(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       }
       if (!(c[e >> 2] & 32)) vb(n, (f | 0) > 9 ? 9 : f, e);
       o = o + 4 | 0;
       n = f + -9 | 0;
       if (!((f | 0) > 9 & o >>> 0 < B >>> 0)) {
        f = n;
        break;
       } else f = n;
      }
      zb(e, 48, f + 9 | 0, 9, 0);
     } else {
      s = y ? B : x + 4 | 0;
      if ((f | 0) > -1) {
       r = (o | 0) == 0;
       q = x;
       do {
        n = yb(c[q >> 2] | 0, 0, S) | 0;
        if ((n | 0) == (S | 0)) {
         a[U >> 0] = 48;
         n = U;
        }
        do if ((q | 0) == (x | 0)) {
         o = n + 1 | 0;
         if (!(c[e >> 2] & 32)) vb(n, 1, e);
         if (r & (f | 0) < 1) {
          n = o;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          n = o;
          break;
         }
         vb(3989, 1, e);
         n = o;
        } else {
         if (n >>> 0 <= ea >>> 0) break;
         Hb(ea | 0, 48, n + Z | 0) | 0;
         do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
        } while (0);
        o = T - n | 0;
        if (!(c[e >> 2] & 32)) vb(n, (f | 0) > (o | 0) ? o : f, e);
        f = f - o | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < s >>> 0 & (f | 0) > -1);
      }
      zb(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      vb(t, ba - t | 0, e);
     } while (0);
     zb(e, 32, J, v, H ^ 8192);
     f = (v | 0) < (J | 0) ? J : v;
    } else {
     s = (t & 32 | 0) != 0;
     r = p != p | 0.0 != 0.0;
     n = r ? 0 : F;
     q = n + 3 | 0;
     zb(e, 32, J, q, o);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      vb(G, n, e);
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) vb(r ? (s ? 3981 : 3985) : s ? 3973 : 3977, 3, e);
     zb(e, 32, J, q, H ^ 8192);
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
    u = 2045;
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
    q = 2045;
    L = 79;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[2029 + (n & 15) >> 0] | q;
     n = Ib(n | 0, o | 0, 4) | 0;
     o = D;
    } while (!((n | 0) == 0 & (o | 0) == 0));
    L = ca;
    if ((s & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     n = s;
     s = 0;
     q = 2045;
     L = 79;
    } else {
     n = s;
     s = 2;
     q = 2045 + (t >> 4) | 0;
     L = 79;
    }
   }
  } else if ((L | 0) == 78) {
   f = yb(f, n, N) | 0;
   n = H;
   s = o;
   L = 79;
  } else if ((L | 0) == 92) {
   L = 0;
   H = sb(n, 0, r) | 0;
   G = (H | 0) == 0;
   f = n;
   t = G ? r : H - n | 0;
   v = 0;
   u = 2045;
   n = G ? n + r | 0 : H;
  } else if ((L | 0) == 96) {
   L = 0;
   o = 0;
   n = 0;
   s = f;
   while (1) {
    q = c[s >> 2] | 0;
    if (!q) break;
    n = Ab(ga, q) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   zb(e, 32, J, o, H);
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
     n = Ab(ga, n) | 0;
     q = n + q | 0;
     if ((q | 0) > (o | 0)) {
      f = o;
      L = 107;
      break g;
     }
     if (!(c[e >> 2] & 32)) vb(ga, n, e);
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
   zb(e, 32, J, f, H ^ 8192);
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
  zb(e, 32, n, r, o);
  if (!(c[e >> 2] & 32)) vb(u, v, e);
  zb(e, 48, n, r, o ^ 65536);
  zb(e, 48, q, s, 0);
  if (!(c[e >> 2] & 32)) vb(f, s, e);
  zb(e, 32, n, r, o ^ 8192);
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
   xb(j + (m << 3) | 0, f, g);
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

function Db(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[1031] | 0;
 if (d >>> 0 < h >>> 0) oa();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) oa();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) oa();
  if ((k | 0) == (c[1032] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    f = j;
    break;
   }
   c[1029] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 4148 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) oa();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) oa();
   }
   if ((d | 0) == (b | 0)) {
    c[1027] = c[1027] & ~(1 << e);
    q = k;
    f = j;
    break;
   }
   if ((d | 0) == (a | 0)) g = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) oa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) g = a; else oa();
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
   if (b >>> 0 < h >>> 0) oa(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) oa();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) oa();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else oa();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 4412 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[1028] = c[1028] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[1031] | 0) >>> 0) oa();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   d = c[1031] | 0;
   if (i >>> 0 < d >>> 0) oa();
   c[i + 24 >> 2] = g;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) oa(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
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
 if (q >>> 0 >= m >>> 0) oa();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) oa();
 if (!(b & 2)) {
  if ((m | 0) == (c[1033] | 0)) {
   p = (c[1030] | 0) + f | 0;
   c[1030] = p;
   c[1033] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[1032] | 0)) return;
   c[1032] = 0;
   c[1029] = 0;
   return;
  }
  if ((m | 0) == (c[1032] | 0)) {
   p = (c[1029] | 0) + f | 0;
   c[1029] = p;
   c[1032] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (b & -8) + f | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 4148 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[1031] | 0) >>> 0) oa();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) oa();
   }
   if ((d | 0) == (b | 0)) {
    c[1027] = c[1027] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[1031] | 0) >>> 0) oa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else oa();
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
    if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[1031] | 0) >>> 0) oa();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) oa();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else oa();
   } while (0);
   if (g | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 4412 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[1028] = c[1028] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[1031] | 0) >>> 0) oa();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[1031] | 0;
    if (n >>> 0 < d >>> 0) oa();
    c[n + 24 >> 2] = g;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) oa(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[1032] | 0)) {
   c[1029] = f;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  d = 4148 + (a << 1 << 2) | 0;
  b = c[1027] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[1027] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
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
 e = 4412 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[1028] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[1028] = a | b;
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
  if ((a | 0) == 127) if (b >>> 0 < (c[1031] | 0) >>> 0) oa(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = e;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = e + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[1031] | 0;
   if (b >>> 0 >= p >>> 0 & e >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = e;
    c[q + 24 >> 2] = 0;
    break;
   } else oa();
  }
 } while (0);
 q = (c[1035] | 0) + -1 | 0;
 c[1035] = q;
 if (!q) a = 4564; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[1035] = -1;
 return;
}

function kb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
 G = i;
 i = i + 80 | 0;
 D = G + 64 | 0;
 s = G + 40 | 0;
 t = G;
 E = b + 32 | 0;
 e = c[E >> 2] | 0;
 F = b + 40 | 0;
 if (!e) {
  E = b + 44 | 0;
  F = c[F >> 2] | 0;
  c[E >> 2] = F;
  i = G;
  return;
 }
 f = c[F >> 2] | 0;
 d = b + 44 | 0;
 B = c[d >> 2] | 0;
 C = e + (B * 40 | 0) | 0;
 if ((f | 0) == (B | 0)) {
  E = d;
  F = c[F >> 2] | 0;
  c[E >> 2] = F;
  i = G;
  return;
 }
 u = b + 4 | 0;
 v = t + 8 | 0;
 w = t + 24 | 0;
 x = t + 32 | 0;
 y = b + 8 | 0;
 z = b + 16 | 0;
 A = b + 12 | 0;
 B = b + 20 | 0;
 q = b + 24 | 0;
 r = s + 16 | 0;
 p = e + (f * 40 | 0) | 0;
 do {
  b = p + 32 | 0;
  a[b >> 0] = 1;
  c[t >> 2] = c[p >> 2];
  e = c[p + 24 >> 2] | 0;
  do if (!e) c[w >> 2] = 0; else if ((e | 0) == (p + 8 | 0)) {
   c[w >> 2] = v;
   Fa[c[(c[e >> 2] | 0) + 12 >> 2] & 0](e, v);
   break;
  } else {
   c[w >> 2] = Ga[c[(c[e >> 2] | 0) + 8 >> 2] & 15](e) | 0;
   break;
  } while (0);
  a[x >> 0] = a[b >> 0] | 0;
  h = c[y >> 2] | 0;
  b = c[z >> 2] | 0;
  g = c[A >> 2] | 0;
  if ((h - b | 0) == (0 - g | 0)) {
   e = h >> 1;
   f = c[B >> 2] | 0;
   if ((e | 0) >= (f | 0)) {
    f = c[q >> 2] | 0;
    f = (e | 0) > (f | 0) ? f : e;
   }
   o = f + h | 0;
   n = o - b + g >> 1;
   if (!f) {
    n = g;
    l = h;
   } else {
    l = b - g | 0;
    m = Cb(o * 40 | 0) | 0;
    if ((l | 0) > 0) {
     h = m + (n * 40 | 0) | 0;
     j = 0;
     k = (c[u >> 2] | 0) + ((c[A >> 2] | 0) * 40 | 0) | 0;
     do {
      c[h >> 2] = c[k >> 2];
      b = h + 8 | 0;
      g = k + 24 | 0;
      e = c[g >> 2] | 0;
      do if (!e) {
       c[h + 24 >> 2] = 0;
       e = k + 8 | 0;
      } else {
       f = k + 8 | 0;
       if ((e | 0) == (f | 0)) {
        c[h + 24 >> 2] = b;
        f = c[g >> 2] | 0;
        Fa[c[(c[f >> 2] | 0) + 12 >> 2] & 0](f, b);
        break;
       } else {
        c[h + 24 >> 2] = e;
        c[g >> 2] = 0;
        e = f;
        break;
       }
      } while (0);
      a[h + 32 >> 0] = a[k + 32 >> 0] | 0;
      h = h + 40 | 0;
      k = k + 40 | 0;
      b = c[g >> 2] | 0;
      if ((b | 0) == (e | 0)) Ea[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (b | 0) Ea[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
      j = j + 1 | 0;
     } while ((j | 0) != (l | 0));
    }
    b = c[u >> 2] | 0;
    if (b | 0) Db(b);
    c[u >> 2] = m;
    c[y >> 2] = o;
    c[A >> 2] = n;
    b = l + n | 0;
    c[z >> 2] = b;
    l = o;
   }
  } else {
   n = g;
   l = h;
  }
  m = c[u >> 2] | 0;
  j = (m | 0) == 0;
  f = j ? 0 : m + (n * 40 | 0) | 0;
  k = c[t >> 2] | 0;
  e = f;
  f = ((j ? 0 : m + (b * 40 | 0) | 0) - f | 0) / 40 | 0;
  a : while (1) {
   while (1) {
    if (!f) break a;
    g = (f | 0) / 2 | 0;
    h = e + (g * 40 | 0) | 0;
    if ((c[h >> 2] | 0) < (k | 0)) break; else f = g;
   }
   e = h + 40 | 0;
   f = f + -1 - g | 0;
  }
  h = j ? 0 : m + (n * 40 | 0) | 0;
  f = (e - h | 0) / 40 | 0;
  g = b - n | 0;
  do if ((g | 0) == (f | 0)) {
   if ((b | 0) < (l | 0)) {
    c[z >> 2] = b + 1;
    h = 78;
    break;
   }
   if ((n | 0) > 0) {
    b = lb(u, f) | 0;
    h = 60;
   } else {
    b = 0;
    h = 61;
   }
  } else {
   if ((e | 0) == (h | 0)) {
    if ((n | 0) > 0) {
     b = n + -1 | 0;
     c[A >> 2] = b;
     h = 78;
     break;
    }
    if ((b | 0) >= (l | 0)) {
     b = 0;
     h = 61;
     break;
    }
    b = mb(u, 0) | 0;
    h = 60;
    break;
   }
   if ((g >> 1 | 0) > (f | 0)) if ((n | 0) > 0) {
    b = lb(u, f) | 0;
    h = 60;
    break;
   } else {
    b = mb(u, f) | 0;
    h = 60;
    break;
   } else if ((b | 0) < (l | 0)) {
    b = mb(u, f) | 0;
    h = 60;
    break;
   } else {
    b = lb(u, f) | 0;
    h = 60;
    break;
   }
  } while (0);
  if ((h | 0) == 60) {
   h = 0;
   if ((b | 0) != (t | 0)) h = 61;
  } else if ((h | 0) == 78) {
   h = 0;
   b = m + (b * 40 | 0) | 0;
   c[b >> 2] = c[t >> 2];
   e = b + 8 | 0;
   f = c[w >> 2] | 0;
   do if (!f) c[b + 24 >> 2] = 0; else if ((f | 0) == (v | 0)) {
    c[b + 24 >> 2] = e;
    o = c[w >> 2] | 0;
    Fa[c[(c[o >> 2] | 0) + 12 >> 2] & 0](o, e);
    break;
   } else {
    c[b + 24 >> 2] = f;
    c[w >> 2] = 0;
    break;
   } while (0);
   a[b + 32 >> 0] = a[x >> 0] | 0;
  }
  if ((h | 0) == 61) {
   c[b >> 2] = c[t >> 2];
   k = b + 8 | 0;
   e = c[w >> 2] | 0;
   do if (!e) {
    c[r >> 2] = 0;
    f = b + 24 | 0;
    e = c[f >> 2] | 0;
    if ((e | 0) == (k | 0)) h = 71; else {
     g = 0;
     h = 72;
    }
   } else {
    if ((e | 0) == (v | 0)) {
     c[r >> 2] = s;
     Fa[c[(c[v >> 2] | 0) + 12 >> 2] & 0](v, s);
     g = c[r >> 2] | 0;
    } else {
     g = Ga[c[(c[e >> 2] | 0) + 8 >> 2] & 15](e) | 0;
     c[r >> 2] = g;
    }
    j = g;
    f = b + 24 | 0;
    e = c[f >> 2] | 0;
    h = (e | 0) == (k | 0);
    if ((g | 0) != (s | 0)) if (h) {
     h = 71;
     break;
    } else {
     g = j;
     h = 72;
     break;
    }
    if (h) {
     Fa[c[(c[s >> 2] | 0) + 12 >> 2] & 0](s, D);
     h = c[r >> 2] | 0;
     Ea[c[(c[h >> 2] | 0) + 16 >> 2] & 31](h);
     c[r >> 2] = 0;
     h = c[f >> 2] | 0;
     Fa[c[(c[h >> 2] | 0) + 12 >> 2] & 0](h, s);
     h = c[f >> 2] | 0;
     Ea[c[(c[h >> 2] | 0) + 16 >> 2] & 31](h);
     c[f >> 2] = 0;
     c[r >> 2] = s;
     Fa[c[(c[D >> 2] | 0) + 12 >> 2] & 0](D, e);
     Ea[c[(c[D >> 2] | 0) + 16 >> 2] & 31](D);
     c[f >> 2] = k;
     h = 73;
     break;
    } else {
     Fa[c[(c[s >> 2] | 0) + 12 >> 2] & 0](s, k);
     h = c[r >> 2] | 0;
     Ea[c[(c[h >> 2] | 0) + 16 >> 2] & 31](h);
     c[r >> 2] = c[f >> 2];
     c[f >> 2] = k;
     h = 73;
     break;
    }
   } while (0);
   if ((h | 0) == 71) {
    Fa[c[(c[k >> 2] | 0) + 12 >> 2] & 0](e, s);
    o = c[f >> 2] | 0;
    Ea[c[(c[o >> 2] | 0) + 16 >> 2] & 31](o);
    c[f >> 2] = c[r >> 2];
    c[r >> 2] = s;
    h = 74;
   } else if ((h | 0) == 72) {
    c[r >> 2] = e;
    c[f >> 2] = g;
    h = 73;
   }
   if ((h | 0) == 73) {
    h = 0;
    e = c[r >> 2] | 0;
    if ((e | 0) == (s | 0)) h = 74; else if (e | 0) Ea[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   }
   if ((h | 0) == 74) Ea[c[(c[s >> 2] | 0) + 16 >> 2] & 31](s);
   a[b + 32 >> 0] = a[x >> 0] | 0;
  }
  b = c[w >> 2] | 0;
  if ((b | 0) == (v | 0)) Ea[c[(c[v >> 2] | 0) + 16 >> 2] & 31](v); else if (b | 0) Ea[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
  p = p + 40 | 0;
 } while ((p | 0) != (C | 0));
 b = c[E >> 2] | 0;
 if (!b) {
  E = d;
  F = c[F >> 2] | 0;
  c[E >> 2] = F;
  i = G;
  return;
 }
 e = c[F >> 2] | 0;
 if ((e | 0) >= (c[d >> 2] | 0)) {
  E = d;
  F = c[F >> 2] | 0;
  c[E >> 2] = F;
  i = G;
  return;
 }
 while (1) {
  f = c[b + (e * 40 | 0) + 24 >> 2] | 0;
  if ((f | 0) == (b + (e * 40 | 0) + 8 | 0)) Ea[c[(c[f >> 2] | 0) + 16 >> 2] & 31](f); else if (f | 0) Ea[c[(c[f >> 2] | 0) + 20 >> 2] & 31](f);
  e = e + 1 | 0;
  if ((e | 0) >= (c[d >> 2] | 0)) break;
  b = c[E >> 2] | 0;
 }
 F = c[F >> 2] | 0;
 c[d >> 2] = F;
 i = G;
 return;
}

function Ra(b, d) {
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
     e = Cb(j << 3) | 0;
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
     if (k | 0) Db(k);
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
     l = Cb(f + 9 | 0) | 0;
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
     Kb(n | 0, j | 0, f | 0) | 0;
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
 c[1002] = 0;
 c[1003] = 0;
 e = c[998] | 0;
 if (e | 0) {
  j = c[1e3] | 0;
  f = c[1001] | 0;
  if ((j | 0) < (f | 0)) {
   h = e + (j << 3) | 0;
   g = c[h >> 2] | 0;
   if (!g) e = f; else {
    r = c[g >> 2] | 0;
    c[g >> 2] = r - 1;
    if ((r | 0) == 1) {
     Db(c[h >> 2] | 0);
     c[h >> 2] = 0;
     e = e + (j << 3) + 4 | 0;
     c[e >> 2] = 0;
    } else e = e + (j << 3) + 4 | 0;
    c[h >> 2] = 0;
    c[e >> 2] = 0;
    e = c[1001] | 0;
   }
   f = j + 1 | 0;
   if ((f | 0) < (e | 0)) do {
    g = c[998] | 0;
    j = g + (f << 3) | 0;
    h = c[j >> 2] | 0;
    if (h) {
     r = c[h >> 2] | 0;
     c[h >> 2] = r - 1;
     if ((r | 0) == 1) {
      Db(c[j >> 2] | 0);
      c[j >> 2] = 0;
      e = g + (f << 3) + 4 | 0;
      c[e >> 2] = 0;
     } else e = g + (f << 3) + 4 | 0;
     c[j >> 2] = 0;
     c[e >> 2] = 0;
     e = c[1001] | 0;
    }
    f = f + 1 | 0;
   } while ((f | 0) < (e | 0));
   e = c[998] | 0;
  }
  Db(e);
 };
 c[998] = 0;
 c[999] = 0;
 c[1e3] = 0;
 c[1001] = 0;
 c[1002] = 16;
 c[1003] = 65536;
 c[998] = 0;
 c[999] = 0;
 c[1e3] = 0;
 c[998] = k;
 c[999] = m;
 c[1e3] = 0;
 c[1001] = l;
 g = Cb(44) | 0;
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
 c[1004] = g;
 c[g >> 2] = 1032;
 c[g + 40 >> 2] = 0;
 d = Cb(4) | 0;
 c[d >> 2] = Lb() | 0;
 b = Cb(84) | 0;
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
 c[1005] = b;
 b = Cb(84) | 0;
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
 c[1006] = b;
 db(1426, s);
 Aa(13, 0, 1);
 db(1451, t);
 t = c[1005] | 0;
 gb(t);
 Db(t);
 t = c[1006] | 0;
 gb(t);
 Db(t);
 Db(d);
 c[1005] = 0;
 c[1006] = 0;
 c[g >> 2] = 1072;
 c[1004] = 0;
 c[q >> 2] = 0;
 c[r >> 2] = 0;
 e = c[e >> 2] | 0;
 if (!e) {
  Db(g);
  i = u;
  return 0;
 }
 Db(e);
 Db(g);
 i = u;
 return 0;
}

function Za(a) {
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
  fb(1233, k);
  sa();
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
   f = Cb(k << 2) | 0;
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
   if (e | 0) Db(e);
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

function ib(a) {
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
     jb(r, d);
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
      jb(o, d);
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

function Ub(a, b, d, e, f) {
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
   f = k >>> ((Nb(i | 0) | 0) >>> 0);
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
   p = Nb(h | 0) | 0;
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
  k = Gb(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Fb(k | 0, d | 0, e | 0, n | 0) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Fb(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function $a(a) {
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
     b = 1555;
     break;
    }
   case 1:
    {
     b = 1540;
     break;
    }
   case 2:
    {
     b = 1529;
     break;
    }
   case 3:
    {
     b = 1524;
     break;
    }
   case 4:
    {
     b = 1516;
     break;
    }
   case 5:
    {
     b = 1508;
     break;
    }
   case 6:
    {
     b = 1500;
     break;
    }
   case 7:
    {
     b = 1492;
     break;
    }
   default:
    b = 1476;
   }
   c[k >> 2] = b;
   db(1270, k);
   c[n >> 2] = 7;
   break;
  }
  switch (j | 0) {
  case 0:
   {
    b = 1555;
    break;
   }
  case 1:
   {
    b = 1540;
    break;
   }
  case 2:
   {
    b = 1529;
    break;
   }
  case 3:
   {
    b = 1524;
    break;
   }
  case 4:
   {
    b = 1516;
    break;
   }
  case 5:
   {
    b = 1508;
    break;
   }
  case 6:
   {
    b = 1500;
    break;
   }
  case 7:
   {
    b = 1492;
    break;
   }
  default:
   b = 1476;
  }
  c[l >> 2] = b;
  db(1338, l);
  b = c[m >> 2] | 0;
  c[n >> 2] = b;
  c[m >> 2] = 9;
  p = 33;
 } while (0);
 if ((p | 0) == 33) if ((b | 0) != 7) {
  hb(c[1005] | 0);
  switch (c[n >> 2] | 0) {
  case 0:
   {
    c[m >> 2] = Ga[c[c[a >> 2] >> 2] & 15](a) | 0;
    break;
   }
  case 1:
   {
    c[m >> 2] = Ga[c[(c[a >> 2] | 0) + 4 >> 2] & 15](a) | 0;
    break;
   }
  case 2:
   {
    c[m >> 2] = Ga[c[(c[a >> 2] | 0) + 8 >> 2] & 15](a) | 0;
    break;
   }
  case 3:
   {
    c[m >> 2] = Ga[c[(c[a >> 2] | 0) + 12 >> 2] & 15](a) | 0;
    break;
   }
  case 4:
   {
    c[m >> 2] = Ga[c[(c[a >> 2] | 0) + 16 >> 2] & 15](a) | 0;
    break;
   }
  case 5:
   {
    c[m >> 2] = Ga[c[(c[a >> 2] | 0) + 20 >> 2] & 15](a) | 0;
    break;
   }
  case 6:
   {
    c[m >> 2] = Ga[c[(c[a >> 2] | 0) + 24 >> 2] & 15](a) | 0;
    c[n >> 2] = 9;
    break;
   }
  case 7:
   {
    b = 1492;
    p = 49;
    break;
   }
  default:
   {
    b = 1476;
    p = 49;
   }
  }
  if ((p | 0) == 49) {
   c[o >> 2] = b;
   eb(1383, o);
  }
  hb(c[1006] | 0);
  i = r;
  return;
 }
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 1e8;
 do {
  if ((la(q | 0, q | 0) | 0) != -1) break;
  if (!(c[1015] | 0)) b = 4104; else b = c[(Lb() | 0) + 64 >> 2] | 0;
 } while ((c[b >> 2] | 0) == 4);
 i = r;
 return;
}

function jb(b, d) {
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
   Ea[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
   return;
  }
  if (!b) return;
  Ea[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
  return;
 }
 if ((f + -1 | 0) == (d | 0)) {
  l = g + -1 | 0;
  c[m >> 2] = l;
  m = c[b >> 2] | 0;
  b = c[m + (l * 40 | 0) + 24 >> 2] | 0;
  if ((b | 0) == (m + (l * 40 | 0) + 8 | 0)) {
   Ea[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
   return;
  }
  if (!b) return;
  Ea[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
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
   if ((e | 0) == (g | 0)) Ea[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ea[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   c[i >> 2] = 0;
   e = j + (f * 40 | 0) + 24 | 0;
   d = c[e >> 2] | 0;
   do if (!d) c[i >> 2] = 0; else if ((d | 0) == (h | 0)) {
    c[i >> 2] = g;
    Fa[c[(c[d >> 2] | 0) + 12 >> 2] & 0](d, g);
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
   Ea[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
   return;
  }
  if (!b) return;
  Ea[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
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
   if ((e | 0) == (g | 0)) Ea[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ea[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   c[i >> 2] = 0;
   e = d + (k * 40 | 0) + 24 | 0;
   f = c[e >> 2] | 0;
   do if (!f) c[i >> 2] = 0; else if ((f | 0) == (h | 0)) {
    c[i >> 2] = g;
    Fa[c[(c[f >> 2] | 0) + 12 >> 2] & 0](f, g);
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
  Ea[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
  return;
 }
 if (!b) return;
 Ea[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
 return;
}

function xb(a, b, d) {
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

function mb(b, d) {
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
  Fa[c[(c[g >> 2] | 0) + 12 >> 2] & 0](g, e);
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
  if ((e | 0) == (h | 0)) Ea[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ea[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
  c[j >> 2] = 0;
  e = k + (g * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   j = c[e >> 2] | 0;
   Fa[c[(c[j >> 2] | 0) + 12 >> 2] & 0](j, h);
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

function ob(a, b, d) {
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
  if (!(c[1015] | 0)) {
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = k;
   c[n + 8 >> 2] = f;
   b = ua(146, n | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[1015] | 0)) e = 4104; else e = c[(Lb() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
  } else {
   za(16, a | 0);
   c[m >> 2] = c[j >> 2];
   c[m + 4 >> 2] = k;
   c[m + 8 >> 2] = f;
   b = ua(146, m | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[1015] | 0)) e = 4104; else e = c[(Lb() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
   ka(0);
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

function lb(b, d) {
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
  Fa[c[(c[g >> 2] | 0) + 12 >> 2] & 0](g, e);
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
  if ((e | 0) == (h | 0)) Ea[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ea[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
  c[j >> 2] = 0;
  e = g + (l * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   Fa[c[(c[f >> 2] | 0) + 12 >> 2] & 0](f, h);
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

function gb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 60 | 0;
 c[a + 76 >> 2] = 0;
 c[a + 80 >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d | 0) Db(d);
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
    if ((f | 0) == (d + (e * 40 | 0) + 8 | 0)) Ea[c[(c[f >> 2] | 0) + 16 >> 2] & 31](f); else if (f | 0) Ea[c[(c[f >> 2] | 0) + 20 >> 2] & 31](f);
    e = e + 1 | 0;
    if ((e | 0) >= (c[b >> 2] | 0)) break;
    d = c[h >> 2] | 0;
   }
   d = c[h >> 2] | 0;
  }
  Db(d);
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
   if ((e | 0) == (b + (d * 40 | 0) + 8 | 0)) Ea[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ea[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   d = d + 1 | 0;
   if ((d | 0) >= (c[h >> 2] | 0)) break;
   b = c[g >> 2] | 0;
  }
  b = c[g >> 2] | 0;
 }
 Db(b);
 a = a + 8 | 0;
 c[g >> 2] = 0;
 c[a >> 2] = 0;
 c[f >> 2] = 0;
 c[h >> 2] = 0;
 return;
}

function Qa(a) {
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
    Db(c[f >> 2] | 0);
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
     Db(c[g >> 2] | 0);
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
 Db(b);
 g = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[h >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function sb(b, d, e) {
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

function tb(b, d, e) {
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
 if ((ub(0, d, m, o, p) | 0) >= 0) {
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
   ub(b, d, m, o, p) | 0;
   if (f | 0) {
    Da[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
    c[e >> 2] = f;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
    c[g >> 2] = 0;
    c[h >> 2] = 0;
   }
  } else ub(b, d, m, o, p) | 0;
  c[b >> 2] = c[b >> 2] | l;
 }
 i = q;
 return;
}

function fb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[4028] & 1) != 0);
 c[1008] = (c[1008] | 0) + 1;
 d = c[1012] | 0;
 e = c[1011] | 0;
 if ((d | 0) == (e | 0)) {
  tb(1104, b, h);
  b = c[1008] | 0;
  c[1008] = b - 1;
  i = j;
  return;
 }
 f = c[1009] | 0;
 if (!f) {
  b = c[1008] | 0;
  c[1008] = b - 1;
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
  Ia[c[(c[d >> 2] | 0) + 4 >> 2] & 0](d, 1, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Ea[c[c[d >> 2] >> 2] & 31](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) sa(); else if ((d | 0) == 12) {
  k = c[1008] | 0;
  c[1008] = k - 1;
  i = j;
  return;
 }
}

function eb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[4028] & 1) != 0);
 c[1008] = (c[1008] | 0) + 1;
 d = c[1012] | 0;
 e = c[1011] | 0;
 if ((d | 0) == (e | 0)) {
  tb(1104, b, h);
  b = c[1008] | 0;
  c[1008] = b - 1;
  i = j;
  return;
 }
 f = c[1009] | 0;
 if (!f) {
  b = c[1008] | 0;
  c[1008] = b - 1;
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
  Ia[c[(c[d >> 2] | 0) + 4 >> 2] & 0](d, 2, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Ea[c[c[d >> 2] >> 2] & 31](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) sa(); else if ((d | 0) == 12) {
  k = c[1008] | 0;
  c[1008] = k - 1;
  i = j;
  return;
 }
}

function db(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[4028] & 1) != 0);
 c[1008] = (c[1008] | 0) + 1;
 d = c[1012] | 0;
 e = c[1011] | 0;
 if ((d | 0) == (e | 0)) {
  tb(1104, b, h);
  b = c[1008] | 0;
  c[1008] = b - 1;
  i = j;
  return;
 }
 f = c[1009] | 0;
 if (!f) {
  b = c[1008] | 0;
  c[1008] = b - 1;
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
  Ia[c[(c[d >> 2] | 0) + 4 >> 2] & 0](d, 3, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Ea[c[c[d >> 2] >> 2] & 31](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) sa(); else if ((d | 0) == 12) {
  k = c[1008] | 0;
  c[1008] = k - 1;
  i = j;
  return;
 }
}

function vb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) {
  if (!(wb(e) | 0)) {
   g = c[f >> 2] | 0;
   h = 5;
  }
 } else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  f = h;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   Da[c[e + 36 >> 2] & 31](e, b, d) | 0;
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
   if ((Da[c[e + 36 >> 2] & 31](e, b, h) | 0) >>> 0 < h >>> 0) break a;
   g = d - h | 0;
   b = b + h | 0;
   f = c[i >> 2] | 0;
  } else g = d; while (0);
  Kb(f | 0, b | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
 } while (0);
 return;
}

function cb(a) {
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
    if ((e | 0) == 1) Ea[c[c[b >> 2] >> 2] & 31](b);
    c[f >> 2] = 0;
    e = c[h >> 2] | 0;
   }
   d = d + 1 | 0;
   if ((d | 0) >= (e | 0)) break;
   b = c[a >> 2] | 0;
  }
  b = c[a >> 2] | 0;
 }
 Db(b);
 i = h;
 h = a + 4 | 0;
 c[a >> 2] = 0;
 c[h >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Ab(b, d) {
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
  if (!(c[1015] | 0)) b = 4104; else b = c[(Lb() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 84;
  b = -1;
 } while (0);
 return b | 0;
}

function Qb(a, b, d, e) {
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
 a = Fb(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = D;
 Ub(a, b, Fb(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, D, j) | 0;
 e = Fb(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = D;
 i = f;
 return (D = d, e) | 0;
}

function zb(a, b, d, e, f) {
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
  Hb(g | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  e = c[a >> 2] | 0;
  d = (e & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   b = f;
   do {
    if (d) {
     vb(g, 256, a);
     e = c[a >> 2] | 0;
    }
    b = b + -256 | 0;
    d = (e & 32 | 0) == 0;
   } while (b >>> 0 > 255);
   if (d) f = f & 255; else break;
  } else if (!d) break;
  vb(g, f, a);
 } while (0);
 i = h;
 return;
}

function Sa(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 d = f;
 e = f + 8 | 0;
 h = a + 40 | 0;
 g = c[h >> 2] | 0;
 b = g + 1 | 0;
 c[h >> 2] = b;
 if (!((g | 0) % 10 | 0)) {
  c[d >> 2] = b;
  db(1216, d);
 }
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 1e8;
 while (1) {
  if ((la(e | 0, e | 0) | 0) != -1) {
   b = 8;
   break;
  }
  if (!(c[1015] | 0)) b = 4104; else b = c[(Lb() | 0) + 64 >> 2] | 0;
  if ((c[b >> 2] | 0) != 4) {
   b = 8;
   break;
  }
 }
 if ((b | 0) == 8) {
  $a(a);
  i = f;
  return;
 }
}

function qb(a, b, d) {
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
 b = ya(140, h | 0) | 0;
 if (b >>> 0 > 4294963200) {
  if (!(c[1015] | 0)) a = 4104; else a = c[(Lb() | 0) + 64 >> 2] | 0;
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

function Pb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = Fb(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = D;
 a = f ^ j;
 b = e ^ i;
 return Fb((Ub(h, g, Fb(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, D, 0) | 0) ^ a | 0, D ^ b | 0, a | 0, b | 0) | 0;
}

function Kb(b, d, e) {
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

function Bb(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Ib(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +Bb(a * 18446744073709551616.0, b);
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

function yb(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Tb(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = b;
  b = Sb(b | 0, c | 0, 10, 0) | 0;
  if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break; else c = D;
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function Hb(b, d, e) {
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

function hb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 ib(b);
 kb(b);
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
     Ea[c[(c[g >> 2] | 0) + 24 >> 2] & 31](g);
    }
    d = d + 40 | 0;
   } while ((d | 0) != (f | 0));
  }
 }
 ib(b);
 kb(b);
 return;
}

function wb(b) {
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

function rb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 17;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (xa(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = ob(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Ob(a, b) {
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

function Nb(b) {
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

function nb(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 c[b >> 2] = c[a + 60 >> 2];
 a = qa(6, b | 0) | 0;
 if (a >>> 0 > 4294963200) {
  if (!(c[1015] | 0)) b = 4104; else b = c[(Lb() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 0 - a;
  a = -1;
 }
 i = d;
 return a | 0;
}

function Tb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Ub(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Rb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = Ob(e, f) | 0;
 a = D;
 return (D = ($(b, f) | 0) + ($(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function Mb(a, b, c) {
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

function Jb(a, b, c) {
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

function Ib(a, b, c) {
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

function Eb() {}
function Fb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function Gb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function bb() {
 c[1009] = 0;
 c[1010] = 0;
 c[1011] = 0;
 c[1012] = 0;
 c[1013] = 16;
 c[1014] = 65536;
 ma(15, 4036, n | 0) | 0;
 return;
}

function Ta() {
 c[998] = 0;
 c[999] = 0;
 c[1e3] = 0;
 c[1001] = 0;
 c[1002] = 16;
 c[1003] = 65536;
 ma(14, 3992, n | 0) | 0;
 return;
}

function _b(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Ia[a & 0](b | 0, c | 0, d | 0, e | 0);
}

function Vb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Da[a & 31](b | 0, c | 0, d | 0) | 0;
}

function Sb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Ub(a, b, c, d, 0) | 0;
}

function ab() {
 var a = 0;
 a = c[1004] | 0;
 Ea[c[(c[a >> 2] | 0) + 28 >> 2] & 31](a);
 return;
}
function Ja(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Xb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Fa[a & 0](b | 0, c | 0);
}

function ec(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(5);
}

function $b(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(0);
 return 0;
}

function Na(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function Yb(a, b) {
 a = a | 0;
 b = b | 0;
 return Ga[a & 15](b | 0) | 0;
}

function Wb(a, b) {
 a = a | 0;
 b = b | 0;
 Ea[a & 31](b | 0);
}

function Ma(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function bc(a, b) {
 a = a | 0;
 b = b | 0;
 ca(2);
}

function cc(a) {
 a = a | 0;
 ca(3);
 return 0;
}

function _a(a) {
 a = a | 0;
 ta();
 return 9;
}

function Zb(a) {
 a = a | 0;
 Ha[a & 15]();
}

function Ya(a) {
 a = a | 0;
 return 5;
}

function Xa(a) {
 a = a | 0;
 return 4;
}

function Wa(a) {
 a = a | 0;
 return 3;
}

function Va(a) {
 a = a | 0;
 return 2;
}

function Ua(a) {
 a = a | 0;
 return 1;
}

function pb(a) {
 a = a | 0;
 return;
}

function ac(a) {
 a = a | 0;
 ca(1);
}

function Oa(a) {
 a = a | 0;
 D = a;
}

function La(a) {
 a = a | 0;
 i = a;
}

function Pa() {
 return D | 0;
}

function Ka() {
 return i | 0;
}

function Lb() {
 return 0;
}

function dc() {
 ca(4);
}

// EMSCRIPTEN_END_FUNCS

 var Da = [ $b, $b, $b, $b, $b, $b, $b, $b, $b, $b, $b, rb, qb, $b, $b, $b, $b, ob, $b, $b, $b, $b, $b, $b, $b, $b, $b, $b, $b, $b, $b, $b ];
 var Ea = [ ac, ac, ac, ac, ac, ac, ac, ac, Sa, $a, ac, ac, ac, ac, Qa, cb, pb, ac, ac, ac, ac, ac, ac, ac, ac, ac, ac, ac, ac, ac, ac, ac ];
 var Fa = [ bc ];
 var Ga = [ cc, Ua, Va, Wa, Xa, Ya, Za, _a, cc, cc, nb, cc, cc, cc, cc, cc ];
 var Ha = [ dc, dc, dc, dc, dc, dc, dc, dc, dc, dc, dc, dc, dc, ab, dc, dc ];
 var Ia = [ ec ];
 return {
  _i64Subtract: Fb,
  _free: Db,
  _main: Ra,
  _i64Add: Gb,
  _pthread_self: Lb,
  _memset: Hb,
  _malloc: Cb,
  _memcpy: Kb,
  _bitshift64Lshr: Ib,
  _bitshift64Shl: Jb,
  __GLOBAL__sub_I_CoreHello_cc: Ta,
  __GLOBAL__sub_I_Log_cc: bb,
  runPostSets: Eb,
  stackAlloc: Ja,
  stackSave: Ka,
  stackRestore: La,
  establishStackSpace: Ma,
  setThrew: Na,
  setTempRet0: Oa,
  getTempRet0: Pa,
  dynCall_iiii: Vb,
  dynCall_vi: Wb,
  dynCall_vii: Xb,
  dynCall_ii: Yb,
  dynCall_v: Zb,
  dynCall_viiii: _b
 };
})


;