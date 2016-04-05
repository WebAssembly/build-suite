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
 var ia = env.invoke_viii;
 var ja = env.invoke_v;
 var ka = env.invoke_iii;
 var la = env.invoke_viiii;
 var ma = env._pthread_cleanup_pop;
 var na = env._nanosleep;
 var oa = env._emscripten_async_wget_data;
 var pa = env.___cxa_atexit;
 var qa = env._atexit;
 var ra = env._abort;
 var sa = env._emscripten_set_main_loop_timing;
 var ta = env.___syscall6;
 var ua = env._sbrk;
 var va = env._llvm_trap;
 var wa = env._emscripten_cancel_main_loop;
 var xa = env.___syscall146;
 var ya = env._emscripten_get_now;
 var za = env._emscripten_memcpy_big;
 var Aa = env.___syscall54;
 var Ba = env.___syscall140;
 var Ca = env._pthread_cleanup_push;
 var Da = env._emscripten_set_main_loop;
 var Ea = env._usleep;
 var Fa = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function ec(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 q = D;
 do if (a >>> 0 < 245) {
  p = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = p >>> 3;
  k = c[1344] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 5416 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[1344] = k & ~(1 << b); else {
    if (h >>> 0 < (c[1348] | 0) >>> 0) ra();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else ra();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[1346] | 0;
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
    d = 5416 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[1344] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[1348] | 0) >>> 0) ra();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[1346] | 0;
      break;
     } else ra();
    } while (0);
    h = (b << 3) - p | 0;
    c[g + 4 >> 2] = p | 3;
    e = g + p | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[1349] | 0;
     b = l >>> 3;
     d = 5416 + (b << 1 << 2) | 0;
     a = c[1344] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[1344] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[1346] = h;
    c[1349] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[1345] | 0;
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
    k = c[5680 + ((A | B | C | b | k) + (j >>> k) << 2) >> 2] | 0;
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
    f = c[1348] | 0;
    if (k >>> 0 < f >>> 0) ra();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) ra();
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
     if (b >>> 0 < f >>> 0) ra(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) ra();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ra();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      o = d;
      break;
     } else ra();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 5680 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[1345] = c[1345] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1348] | 0) >>> 0) ra();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[1348] | 0;
     if (o >>> 0 < b >>> 0) ra();
     c[o + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ra(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
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
     a = c[1346] | 0;
     if (a | 0) {
      e = c[1349] | 0;
      b = a >>> 3;
      d = 5416 + (b << 1 << 2) | 0;
      a = c[1344] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[1344] = a | b;
       r = d + 8 | 0;
       s = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = e;
      c[s + 12 >> 2] = e;
      c[e + 8 >> 2] = s;
      c[e + 12 >> 2] = d;
     }
     c[1346] = j;
     c[1349] = h;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) p = -1; else {
  a = a + 11 | 0;
  p = a & -8;
  k = c[1345] | 0;
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
   b = c[5680 + (j << 2) >> 2] | 0;
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
     a = c[5680 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (j >>> 0 < ((c[1346] | 0) - p | 0) >>> 0) {
    f = c[1348] | 0;
    if (k >>> 0 < f >>> 0) ra();
    h = k + p | 0;
    if (k >>> 0 >= h >>> 0) ra();
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
     if (b >>> 0 < f >>> 0) ra(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) ra();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ra();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else ra();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 5680 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[1345] = c[1345] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1348] | 0) >>> 0) ra();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[1348] | 0;
     if (t >>> 0 < b >>> 0) ra();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ra(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
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
      d = 5416 + (a << 1 << 2) | 0;
      b = c[1344] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[1344] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
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
     e = 5680 + (d << 2) | 0;
     c[h + 28 >> 2] = d;
     a = h + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1345] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1345] = a | b;
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
     if ((w | 0) == 145) if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
      c[b >> 2] = h;
      c[h + 24 >> 2] = e;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     } else if ((w | 0) == 148) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[1348] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = h;
       c[a >> 2] = h;
       c[h + 8 >> 2] = b;
       c[h + 12 >> 2] = e;
       c[h + 24 >> 2] = 0;
       break;
      } else ra();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[1346] | 0;
 if (d >>> 0 >= p >>> 0) {
  a = d - p | 0;
  b = c[1349] | 0;
  if (a >>> 0 > 15) {
   C = b + p | 0;
   c[1349] = C;
   c[1346] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = p | 3;
  } else {
   c[1346] = 0;
   c[1349] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[1347] | 0;
 if (a >>> 0 > p >>> 0) {
  A = a - p | 0;
  c[1347] = A;
  C = c[1350] | 0;
  B = C + p | 0;
  c[1350] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = p | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[1462] | 0)) {
  c[1464] = 4096;
  c[1463] = 4096;
  c[1465] = -1;
  c[1466] = -1;
  c[1467] = 0;
  c[1455] = 0;
  v = q & -16 ^ 1431655768;
  c[q >> 2] = v;
  c[1462] = v;
 }
 h = p + 48 | 0;
 e = c[1464] | 0;
 j = p + 47 | 0;
 d = e + j | 0;
 e = 0 - e | 0;
 k = d & e;
 if (k >>> 0 <= p >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[1454] | 0;
 if (a | 0) {
  u = c[1452] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[1455] & 4)) {
  b = c[1350] | 0;
  c : do if (!b) w = 171; else {
   g = 5824;
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
   a = d - (c[1347] | 0) & e;
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
    b = c[1463] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[1452] | 0;
    d = b + a | 0;
    if (a >>> 0 > p >>> 0 & a >>> 0 < 2147483647) {
     e = c[1454] | 0;
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
    b = c[1464] | 0;
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
  c[1455] = c[1455] | 4;
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
  a = (c[1452] | 0) + g | 0;
  c[1452] = a;
  if (a >>> 0 > (c[1453] | 0) >>> 0) c[1453] = a;
  l = c[1350] | 0;
  do if (!l) {
   C = c[1348] | 0;
   if ((C | 0) == 0 | h >>> 0 < C >>> 0) c[1348] = h;
   c[1456] = h;
   c[1457] = g;
   c[1459] = 0;
   c[1353] = c[1462];
   c[1352] = -1;
   a = 0;
   do {
    C = 5416 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = h + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = h + C | 0;
   C = g + -40 - C | 0;
   c[1350] = B;
   c[1347] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[1351] = c[1466];
  } else {
   a = 5824;
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
    C = g - C + (c[1347] | 0) | 0;
    c[1350] = B;
    c[1347] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[1351] = c[1466];
    break;
   }
   a = c[1348] | 0;
   if (h >>> 0 < a >>> 0) {
    c[1348] = h;
    j = h;
   } else j = a;
   b = h + g | 0;
   a = 5824;
   while (1) {
    if ((c[a >> 2] | 0) == (b | 0)) {
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 5824;
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
     C = (c[1347] | 0) + k | 0;
     c[1347] = C;
     c[1350] = m;
     c[m + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[1349] | 0)) {
      C = (c[1346] | 0) + k | 0;
      c[1346] = C;
      c[1349] = m;
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
       b = 5416 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) ra();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        ra();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[1344] = c[1344] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) ra();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        ra();
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
        if (d >>> 0 < j >>> 0) ra(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) ra();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) ra();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else ra();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       d = 5680 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[1345] = c[1345] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[1348] | 0) >>> 0) ra();
        b = g + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[g + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[1348] | 0;
       if (A >>> 0 < e >>> 0) ra();
       c[A + 24 >> 2] = g;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) ra(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
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
      d = 5416 + (a << 1 << 2) | 0;
      b = c[1344] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[1344] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[1348] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       ra();
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
     e = 5680 + (d << 2) | 0;
     c[m + 28 >> 2] = d;
     a = m + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[1345] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1345] = a | b;
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
     if ((w | 0) == 276) if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
      c[b >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((w | 0) == 279) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[1348] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = m;
       c[a >> 2] = m;
       c[m + 8 >> 2] = b;
       c[m + 12 >> 2] = e;
       c[m + 24 >> 2] = 0;
       break;
      } else ra();
     }
    } while (0);
    C = n + 8 | 0;
    i = D;
    return C | 0;
   } else b = 5824;
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
   c[1350] = C;
   c[1347] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[1351] = c[1466];
   e = b + 4 | 0;
   c[e >> 2] = 27;
   c[a >> 2] = c[1456];
   c[a + 4 >> 2] = c[1457];
   c[a + 8 >> 2] = c[1458];
   c[a + 12 >> 2] = c[1459];
   c[1456] = h;
   c[1457] = g;
   c[1459] = 0;
   c[1458] = a;
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
     d = 5416 + (a << 1 << 2) | 0;
     b = c[1344] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[1344] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
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
    e = 5680 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[f >> 2] = 0;
    a = c[1345] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[1345] = a | b;
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
    if ((w | 0) == 302) if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
     c[b >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((w | 0) == 305) {
     a = e + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[1348] | 0;
     if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = l;
      c[a >> 2] = l;
      c[l + 8 >> 2] = b;
      c[l + 12 >> 2] = e;
      c[l + 24 >> 2] = 0;
      break;
     } else ra();
    }
   }
  } while (0);
  a = c[1347] | 0;
  if (a >>> 0 > p >>> 0) {
   A = a - p | 0;
   c[1347] = A;
   C = c[1350] | 0;
   B = C + p | 0;
   c[1350] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = p | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 if (!(c[1332] | 0)) a = 5372; else a = c[(nc() | 0) + 64 >> 2] | 0;
 c[a >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function Wb(e, f, g, j, l) {
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
   if (!(c[1332] | 0)) m = 5372; else m = c[(nc() | 0) + 64 >> 2] | 0;
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
  if (M) if (!(c[e >> 2] & 32)) Xb(x, v, e);
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
   n = a[1788 + (s * 58 | 0) + n >> 0] | 0;
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
   Zb(ca, o, g);
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
      n = kc(n | 0, o | 0, 3) | 0;
      o = D;
     } while (!((n | 0) == 0 & (o | 0) == 0));
    }
    if (!(H & 8)) {
     n = H;
     s = 0;
     q = 2268;
     L = 79;
    } else {
     s = V - f | 0;
     n = H;
     r = (r | 0) > (s | 0) ? r : s + 1 | 0;
     s = 0;
     q = 2268;
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
     f = hc(0, 0, f | 0, n | 0) | 0;
     n = D;
     o = ca;
     c[o >> 2] = f;
     c[o + 4 >> 2] = n;
     o = 1;
     q = 2268;
     L = 78;
     break f;
    }
    if (!(H & 2048)) {
     q = H & 1;
     o = q;
     q = (q | 0) == 0 ? 2268 : 2270;
     L = 78;
    } else {
     o = 1;
     q = 2269;
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
    q = 2268;
    L = 78;
    break;
   }
  case 99:
   {
    a[W >> 0] = c[ca >> 2];
    f = W;
    t = 1;
    v = 0;
    u = 2268;
    n = N;
    break;
   }
  case 109:
   {
    if (!(c[1332] | 0)) f = 5372; else f = c[(nc() | 0) + 64 >> 2] | 0;
    n = c[f >> 2] | 0;
    f = 0;
    while (1) {
     if ((d[2278 + f >> 0] | 0) == (n | 0)) {
      L = 85;
      break;
     }
     f = f + 1 | 0;
     if ((f | 0) == 87) {
      n = 87;
      f = 2366;
      break;
     }
    }
    if ((L | 0) == 85) if (!f) {
     n = 2366;
     L = 92;
     break f;
    } else {
     n = f;
     f = 2366;
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
    n = n | 0 ? n : 4170;
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
     $b(e, 32, J, 0, H);
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
     G = 4177;
    } else if (!(H & 2048)) {
     G = H & 1;
     F = G;
     G = (G | 0) == 0 ? 4178 : 4183;
    } else {
     F = 1;
     G = 4180;
    }
    h[k >> 3] = p;
    E = c[k + 4 >> 2] & 2146435072;
    do if (E >>> 0 < 2146435072 | (E | 0) == 2146435072 & 0 < 0) {
     w = +bc(p, fa) * 2.0;
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
      f = _b(f, ((f | 0) < 0) << 31 >> 31, _) | 0;
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
       a[n >> 0] = d[2252 + G >> 0] | u;
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
      $b(e, 32, J, q, H);
      if (!(c[e >> 2] & 32)) Xb(x, v, e);
      $b(e, 48, J, q, H ^ 65536);
      n = f - Y | 0;
      if (!(c[e >> 2] & 32)) Xb(ea, n, e);
      f = ba - o | 0;
      $b(e, 48, r - (n + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Xb(s, f, e);
      $b(e, 32, J, q, H ^ 8192);
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
         z = lc(c[n >> 2] | 0, 0, s | 0) | 0;
         z = ic(z | 0, D | 0, o | 0, 0) | 0;
         A = D;
         y = vc(z | 0, A | 0, 1e9, 0) | 0;
         c[n >> 2] = y;
         o = uc(z | 0, A | 0, 1e9, 0) | 0;
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
      q = _b(q, ((q | 0) < 0) << 31 >> 31, _) | 0;
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
     $b(e, 32, J, v, H);
     if (!(c[e >> 2] & 32)) Xb(G, F, e);
     $b(e, 48, J, v, H ^ 65536);
     do if (s) {
      q = x >>> 0 > E >>> 0 ? E : x;
      o = q;
      do {
       n = _b(c[o >> 2] | 0, 0, S) | 0;
       do if ((o | 0) == (q | 0)) {
        if ((n | 0) != (S | 0)) break;
        a[U >> 0] = 48;
        n = U;
       } else {
        if (n >>> 0 <= ea >>> 0) break;
        jc(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Xb(n, T - n | 0, e);
       o = o + 4 | 0;
      } while (o >>> 0 <= E >>> 0);
      do if (u | 0) {
       if (c[e >> 2] & 32 | 0) break;
       Xb(4212, 1, e);
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < B >>> 0) while (1) {
       n = _b(c[o >> 2] | 0, 0, S) | 0;
       if (n >>> 0 > ea >>> 0) {
        jc(ea | 0, 48, n - Y | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
       }
       if (!(c[e >> 2] & 32)) Xb(n, (f | 0) > 9 ? 9 : f, e);
       o = o + 4 | 0;
       n = f + -9 | 0;
       if (!((f | 0) > 9 & o >>> 0 < B >>> 0)) {
        f = n;
        break;
       } else f = n;
      }
      $b(e, 48, f + 9 | 0, 9, 0);
     } else {
      s = y ? B : x + 4 | 0;
      if ((f | 0) > -1) {
       r = (o | 0) == 0;
       q = x;
       do {
        n = _b(c[q >> 2] | 0, 0, S) | 0;
        if ((n | 0) == (S | 0)) {
         a[U >> 0] = 48;
         n = U;
        }
        do if ((q | 0) == (x | 0)) {
         o = n + 1 | 0;
         if (!(c[e >> 2] & 32)) Xb(n, 1, e);
         if (r & (f | 0) < 1) {
          n = o;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          n = o;
          break;
         }
         Xb(4212, 1, e);
         n = o;
        } else {
         if (n >>> 0 <= ea >>> 0) break;
         jc(ea | 0, 48, n + Z | 0) | 0;
         do n = n + -1 | 0; while (n >>> 0 > ea >>> 0);
        } while (0);
        o = T - n | 0;
        if (!(c[e >> 2] & 32)) Xb(n, (f | 0) > (o | 0) ? o : f, e);
        f = f - o | 0;
        q = q + 4 | 0;
       } while (q >>> 0 < s >>> 0 & (f | 0) > -1);
      }
      $b(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      Xb(t, ba - t | 0, e);
     } while (0);
     $b(e, 32, J, v, H ^ 8192);
     f = (v | 0) < (J | 0) ? J : v;
    } else {
     s = (t & 32 | 0) != 0;
     r = p != p | 0.0 != 0.0;
     n = r ? 0 : F;
     q = n + 3 | 0;
     $b(e, 32, J, q, o);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      Xb(G, n, e);
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) Xb(r ? (s ? 4204 : 4208) : s ? 4196 : 4200, 3, e);
     $b(e, 32, J, q, H ^ 8192);
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
    u = 2268;
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
    q = 2268;
    L = 79;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[2252 + (n & 15) >> 0] | q;
     n = kc(n | 0, o | 0, 4) | 0;
     o = D;
    } while (!((n | 0) == 0 & (o | 0) == 0));
    L = ca;
    if ((s & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     n = s;
     s = 0;
     q = 2268;
     L = 79;
    } else {
     n = s;
     s = 2;
     q = 2268 + (t >> 4) | 0;
     L = 79;
    }
   }
  } else if ((L | 0) == 78) {
   f = _b(f, n, N) | 0;
   n = H;
   s = o;
   L = 79;
  } else if ((L | 0) == 92) {
   L = 0;
   H = Ub(n, 0, r) | 0;
   G = (H | 0) == 0;
   f = n;
   t = G ? r : H - n | 0;
   v = 0;
   u = 2268;
   n = G ? n + r | 0 : H;
  } else if ((L | 0) == 96) {
   L = 0;
   o = 0;
   n = 0;
   s = f;
   while (1) {
    q = c[s >> 2] | 0;
    if (!q) break;
    n = ac(ga, q) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   $b(e, 32, J, o, H);
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
     n = ac(ga, n) | 0;
     q = n + q | 0;
     if ((q | 0) > (o | 0)) {
      f = o;
      L = 107;
      break g;
     }
     if (!(c[e >> 2] & 32)) Xb(ga, n, e);
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
   $b(e, 32, J, f, H ^ 8192);
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
  $b(e, 32, n, r, o);
  if (!(c[e >> 2] & 32)) Xb(u, v, e);
  $b(e, 48, n, r, o ^ 65536);
  $b(e, 48, q, s, 0);
  if (!(c[e >> 2] & 32)) Xb(f, s, e);
  $b(e, 32, n, r, o ^ 8192);
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
   Zb(j + (m << 3) | 0, f, g);
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

function Xa(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 16 | 0;
 r = w;
 e = ec(12) | 0;
 f = e + 4 | 0;
 c[f >> 2] = 0;
 c[e >> 2] = 1092;
 g = (e | 0) == 0;
 if (!g) c[f >> 2] = (c[f >> 2] | 0) + 1;
 u = d + 40 | 0;
 h = c[u >> 2] | 0;
 if ((e | 0) == (h | 0)) {
  if (!g) {
   t = c[f >> 2] | 0;
   c[f >> 2] = t - 1;
   if ((t | 0) == 1) eb(e);
  }
 } else {
  if (h | 0) {
   s = h + 4 | 0;
   t = c[s >> 2] | 0;
   c[s >> 2] = t - 1;
   if ((t | 0) == 1) Ha[c[c[h >> 2] >> 2] & 31](h);
   c[u >> 2] = 0;
  }
  c[u >> 2] = e;
 }
 t = d + 44 | 0;
 g = ec(128) | 0;
 h = g + 4 | 0;
 c[h >> 2] = 0;
 e = g + 8 | 0;
 a[g + 12 >> 0] = 0;
 a[g + 13 >> 0] = 0;
 c[g >> 2] = 1072;
 c[g + 20 >> 2] = 0;
 a[g + 56 >> 0] = 0;
 f = g + 24 | 0;
 d = f + 32 | 0;
 do {
  b[f >> 1] = 65535;
  f = f + 2 | 0;
 } while ((f | 0) < (d | 0));
 q = g + 60 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[g + 76 >> 2] = 16;
 c[g + 80 >> 2] = 65536;
 a[g + 84 >> 0] = 0;
 q = g + 88 | 0;
 a[g + 116 >> 0] = 0;
 s = g + 104 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 b[s >> 1] = 65535;
 b[s + 2 >> 1] = 65535;
 b[s + 4 >> 1] = 65535;
 b[s + 6 >> 1] = 65535;
 b[s + 8 >> 1] = 65535;
 b[s + 10 >> 1] = 65535;
 c[g + 120 >> 2] = 0;
 c[g + 124 >> 2] = 0;
 c[e >> 2] = 1;
 c[g + 16 >> 2] = 1;
 e = (g | 0) == 0;
 if (!e) c[h >> 2] = (c[h >> 2] | 0) + 1;
 f = c[t >> 2] | 0;
 if ((g | 0) == (f | 0)) {
  if (!e) {
   s = c[h >> 2] | 0;
   c[h >> 2] = s - 1;
   if ((s | 0) == 1) _a(g);
  }
 } else {
  if (f | 0) {
   q = f + 4 | 0;
   s = c[q >> 2] | 0;
   c[q >> 2] = s - 1;
   if ((s | 0) == 1) Ha[c[c[f >> 2] >> 2] & 31](f);
   c[t >> 2] = 0;
  }
  c[t >> 2] = g;
 }
 s = c[t >> 2] | 0;
 n = s + 20 | 0;
 c[n >> 2] = 0;
 e = c[1331] | 0;
 if (!e) {
  e = ec(24608) | 0;
  jc(e | 0, 0, 24608) | 0;
  c[e + 16 >> 2] = 16;
  c[e + 20 >> 2] = 65536;
  c[e + 24 >> 2] = 0;
  c[e + 28 >> 2] = 0;
  f = e + 24608 | 0;
  g = e + 32 | 0;
  do {
   c[g >> 2] = 0;
   c[g + 4 >> 2] = 0;
   c[g + 8 >> 2] = 0;
   c[g + 12 >> 2] = 0;
   c[g + 16 >> 2] = 16;
   c[g + 20 >> 2] = 65536;
   g = g + 24 | 0;
  } while ((g | 0) != (f | 0));
  c[1331] = e;
 }
 q = Mb(e, -1980167071, 1280) | 0;
 c[n >> 2] = q;
 if (!q) c[n >> 2] = Nb(e, -1980167071, 1280) | 0;
 a : do if (!0) {
  e = 1280;
  v = 32;
 } else {
  e = 1280;
  f = 1280;
  while (1) {
   if (!(a[e >> 0] | 0)) {
    e = f;
    break a;
   }
   e = e + 1 | 0;
   f = e;
   if (!(f & 3)) {
    v = 32;
    break;
   }
  }
 } while (0);
 if ((v | 0) == 32) {
  while (1) {
   f = c[e >> 2] | 0;
   if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) e = e + 4 | 0; else break;
  }
  if ((f & 255) << 24 >> 24) do e = e + 1 | 0; while ((a[e >> 0] | 0) != 0);
 }
 e = e - 1280 | 0;
 if ((e | 0) > 0) {
  q = ec(e + 9 | 0) | 0;
  p = q;
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[q >> 2] = 0;
  c[q >> 2] = (c[q >> 2] | 0) + 1;
  c[q + 4 >> 2] = e;
  p = q + 8 | 0;
  mc(p | 0, 1280, e | 0) | 0;
  a[p + e >> 0] = 0;
  e = p;
 } else {
  q = 0;
  e = 0;
 }
 c[n >> 2] = 0;
 o = s + 24 | 0;
 f = o;
 d = f + 32 | 0;
 do {
  b[f >> 1] = 65535;
  f = f + 2 | 0;
 } while ((f | 0) < (d | 0));
 p = s + 56 | 0;
 a[p >> 0] = 0;
 k = (e | 0) == 0 ? 5875 : e;
 f = a[k >> 0] | 0;
 if (f << 24 >> 24) {
  if (!q) {
   m = 0;
   l = 0;
  } else {
   e = c[q + 4 >> 2] | 0;
   if ((e | 0) == -1) {
    d = k;
    b : do if (!(d & 3)) {
     e = k;
     v = 46;
    } else {
     h = k;
     e = d;
     while (1) {
      if (!(f << 24 >> 24)) break b;
      e = h + 1 | 0;
      g = e;
      if (!(g & 3)) {
       v = 46;
       break b;
      }
      h = e;
      f = a[e >> 0] | 0;
      e = g;
     }
    } while (0);
    if ((v | 0) == 46) {
     while (1) {
      f = c[e >> 2] | 0;
      if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) e = e + 4 | 0; else break;
     }
     if ((f & 255) << 24 >> 24) do e = e + 1 | 0; while ((a[e >> 0] | 0) != 0);
    }
    e = e - d | 0;
   }
   if ((e | 0) > 0) {
    j = e + 1 | 0;
    j = ec((j | 0) < 128 ? 128 : j) | 0;
    a[j >> 0] = 0;
    f = k;
    c : do if (!((f ^ j) & 3)) {
     d = (e | 0) != 0;
     if (d & (f & 3 | 0) != 0) {
      f = e;
      h = k;
      g = j;
      do {
       m = a[h >> 0] | 0;
       a[g >> 0] = m;
       if (!(m << 24 >> 24)) break c;
       f = f + -1 | 0;
       h = h + 1 | 0;
       g = g + 1 | 0;
       d = (f | 0) != 0;
      } while (d & (h & 3 | 0) != 0);
     } else {
      f = e;
      h = k;
      g = j;
     }
     if (d) {
      if (a[h >> 0] | 0) {
       d : do if (f >>> 0 > 3) {
        while (1) {
         d = c[h >> 2] | 0;
         if ((d & -2139062144 ^ -2139062144) & d + -16843009 | 0) break;
         c[g >> 2] = d;
         f = f + -4 | 0;
         h = h + 4 | 0;
         g = g + 4 | 0;
         if (f >>> 0 <= 3) break d;
        }
        v = 64;
        break c;
       } while (0);
       if (!f) f = 0; else v = 64;
      }
     } else f = 0;
    } else {
     h = k;
     g = j;
     f = e;
     v = 64;
    } while (0);
    e : do if ((v | 0) == 64) while (1) {
     v = 0;
     m = a[h >> 0] | 0;
     a[g >> 0] = m;
     if (!(m << 24 >> 24)) break e;
     f = f + -1 | 0;
     g = g + 1 | 0;
     if (!f) {
      f = 0;
      break;
     } else {
      h = h + 1 | 0;
      v = 64;
     }
    } while (0);
    jc(g | 0, 0, f | 0) | 0;
    a[j + e >> 0] = 0;
    m = j;
    l = e;
   } else {
    m = 0;
    l = 0;
   }
  }
  c[n >> 2] = 0;
  e = a[k >> 0] | 0;
  if (!(e << 24 >> 24)) {
   c[n >> 2] = 0;
   g = 0;
  } else {
   f = c[1331] | 0;
   if (!f) {
    f = ec(24608) | 0;
    jc(f | 0, 0, 24608) | 0;
    c[f + 16 >> 2] = 16;
    c[f + 20 >> 2] = 65536;
    c[f + 24 >> 2] = 0;
    c[f + 28 >> 2] = 0;
    e = f + 24608 | 0;
    g = f + 32 | 0;
    do {
     c[g >> 2] = 0;
     c[g + 4 >> 2] = 0;
     c[g + 8 >> 2] = 0;
     c[g + 12 >> 2] = 0;
     c[g + 16 >> 2] = 16;
     c[g + 20 >> 2] = 65536;
     g = g + 24 | 0;
    } while ((g | 0) != (e | 0));
    c[1331] = f;
    e = a[k >> 0] | 0;
    if (!(e << 24 >> 24)) e = 0; else {
     h = 0;
     g = k;
     v = 72;
    }
   } else {
    h = 0;
    g = k;
    v = 72;
   }
   if ((v | 0) == 72) {
    while (1) {
     v = 0;
     g = g + 1 | 0;
     j = ((e << 24 >> 24) + h | 0) * 1025 | 0;
     h = j >> 6 ^ j;
     e = a[g >> 0] | 0;
     if (!(e << 24 >> 24)) break; else v = 72;
    }
    e = h * 9 | 0;
   }
   e = (e >> 11 ^ e) * 32769 | 0;
   g = Mb(f, e, k) | 0;
   c[n >> 2] = g;
   if (!g) {
    g = Nb(f, e, k) | 0;
    c[n >> 2] = g;
   }
  }
  b[o >> 1] = 0;
  k = (m | 0) == 0;
  do if (k) v = 92; else {
   j = m;
   f : do if (!(j & 3)) {
    e = m;
    v = 81;
   } else {
    e = m;
    while (1) {
     f = a[e >> 0] | 0;
     switch (f << 24 >> 24) {
     case 0:
     case 58:
      break f;
     default:
      {}
     }
     e = e + 1 | 0;
     if (!(e & 3)) {
      v = 81;
      break f;
     }
    }
   } while (0);
   g : do if ((v | 0) == 81) {
    f = c[e >> 2] | 0;
    h : do if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) do {
     if ((f & -2139062144 ^ -2139062144) & (f ^ 976894522) + -16843009 | 0) break h;
     e = e + 4 | 0;
     f = c[e >> 2] | 0;
    } while (!((f & -2139062144 ^ -2139062144) & f + -16843009 | 0)); while (0);
    while (1) {
     f = a[e >> 0] | 0;
     switch (f << 24 >> 24) {
     case 0:
     case 58:
      break g;
     default:
      e = e + 1 | 0;
     }
    }
   } while (0);
   if ((e | 0) == 0 | f << 24 >> 24 != 58) v = 92; else {
    f = a[e + 1 >> 0] | 0;
    if (!(f << 24 >> 24)) v = 92; else {
     d = e + 2 | 0;
     h = a[d >> 0] | 0;
     if (!(h << 24 >> 24)) v = 92; else {
      f = (h & 255) << 8 | (f & 255) << 16 | 973078528;
      if ((f | 0) != 976170752) {
       while (1) {
        e = d + 1 | 0;
        h = a[e >> 0] | 0;
        f = (h & 255 | f) << 8;
        if (h << 24 >> 24 == 0 | (f | 0) == 976170752) break; else d = e;
       }
       if (!(h << 24 >> 24)) {
        v = 92;
        break;
       } else e = d + -1 | 0;
      }
      e = e - j | 0;
      e = (e | 0) < 8 ? e : -1;
      b[s + 26 >> 1] = e;
      e = e << 16 >> 16;
      if ((e | 0) == -1) v = 94; else {
       f = e + 3 | 0;
       h = Lb(m, l, f, -1, 1443) | 0;
       h = (h | 0) == -1 ? l : h;
       do if ((f | 0) != (h | 0)) {
        g = Lb(m, l, f, h, 1445) | 0;
        if ((g | 0) != -1) {
         e = Lb(m, l, f, g, 1454) | 0;
         b[s + 28 >> 1] = f;
         if ((e | 0) == -1) e = g; else {
          b[s + 32 >> 1] = e + 1;
          b[s + 34 >> 1] = g;
         }
         b[s + 30 >> 1] = e;
         f = g + 1 | 0;
        }
        e = Lb(m, l, f, h, 1454) | 0;
        b[s + 36 >> 1] = f;
        if ((e | 0) == -1) {
         b[s + 38 >> 1] = h;
         break;
        } else {
         b[s + 38 >> 1] = e;
         b[s + 40 >> 1] = e + 1;
         b[s + 42 >> 1] = h;
         break;
        }
       } while (0);
       do if ((h | 0) != (l | 0)) {
        f = h + 1 | 0;
        e = Lb(m, l, f, l, 1447) | 0;
        e = (e | 0) == -1 ? l : e;
        if ((f | 0) != (e | 0)) {
         b[s + 44 >> 1] = f;
         b[s + 46 >> 1] = e;
        }
        if ((e | 0) == (l | 0)) break;
        do if ((a[m + e >> 0] | 0) == 63) {
         f = e + 1 | 0;
         e = Lb(m, l, f, l, 1450) | 0;
         e = (e | 0) == -1 ? l : e;
         if ((f | 0) == (e | 0)) {
          e = f;
          break;
         }
         b[s + 52 >> 1] = f;
         b[s + 54 >> 1] = e;
        } while (0);
        if ((e | 0) == (l | 0)) break;
        if ((a[m + e >> 0] | 0) != 35) break;
        f = e + 1 | 0;
        e = Lb(m, l, f, l, 1452) | 0;
        e = (e | 0) == -1 ? l : e;
        if ((f | 0) == (e | 0)) break;
        b[s + 48 >> 1] = f;
        b[s + 50 >> 1] = e;
       } while (0);
       a[p >> 0] = 1;
      }
     }
    }
   }
  } while (0);
  if ((v | 0) == 92) {
   b[s + 26 >> 1] = -1;
   v = 94;
  }
  if ((v | 0) == 94) {
   c[r >> 2] = c[((g | 0) == 0 ? 1164 : g + 12 | 0) >> 2];
   Bb(1403, r);
   f = o;
   d = f + 32 | 0;
   do {
    b[f >> 1] = 65535;
    f = f + 2 | 0;
   } while ((f | 0) < (d | 0));
  }
  if (!k) fc(m);
 }
 if (!q) {
  v = c[u >> 2] | 0;
  u = c[v >> 2] | 0;
  u = u + 4 | 0;
  u = c[u >> 2] | 0;
  Ma[u & 31](v, t) | 0;
  i = w;
  return 4;
 }
 v = c[q >> 2] | 0;
 c[q >> 2] = v - 1;
 if ((v | 0) != 1) {
  v = c[u >> 2] | 0;
  u = c[v >> 2] | 0;
  u = u + 4 | 0;
  u = c[u >> 2] | 0;
  Ma[u & 31](v, t) | 0;
  i = w;
  return 4;
 }
 fc(q);
 v = c[u >> 2] | 0;
 u = c[v >> 2] | 0;
 u = u + 4 | 0;
 u = c[u >> 2] | 0;
 Ma[u & 31](v, t) | 0;
 i = w;
 return 4;
}

function fc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[1348] | 0;
 if (d >>> 0 < h >>> 0) ra();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) ra();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) ra();
  if ((k | 0) == (c[1349] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    f = j;
    break;
   }
   c[1346] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 5416 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) ra();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) ra();
   }
   if ((d | 0) == (b | 0)) {
    c[1344] = c[1344] & ~(1 << e);
    q = k;
    f = j;
    break;
   }
   if ((d | 0) == (a | 0)) g = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) ra();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) g = a; else ra();
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
   if (b >>> 0 < h >>> 0) ra(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) ra();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) ra();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else ra();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 5680 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[1345] = c[1345] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[1348] | 0) >>> 0) ra();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   d = c[1348] | 0;
   if (i >>> 0 < d >>> 0) ra();
   c[i + 24 >> 2] = g;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) ra(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
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
 if (q >>> 0 >= m >>> 0) ra();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) ra();
 if (!(b & 2)) {
  if ((m | 0) == (c[1350] | 0)) {
   p = (c[1347] | 0) + f | 0;
   c[1347] = p;
   c[1350] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[1349] | 0)) return;
   c[1349] = 0;
   c[1346] = 0;
   return;
  }
  if ((m | 0) == (c[1349] | 0)) {
   p = (c[1346] | 0) + f | 0;
   c[1346] = p;
   c[1349] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (b & -8) + f | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 5416 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[1348] | 0) >>> 0) ra();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) ra();
   }
   if ((d | 0) == (b | 0)) {
    c[1344] = c[1344] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[1348] | 0) >>> 0) ra();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else ra();
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
    if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[1348] | 0) >>> 0) ra();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) ra();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else ra();
   } while (0);
   if (g | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 5680 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[1345] = c[1345] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[1348] | 0) >>> 0) ra();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[1348] | 0;
    if (n >>> 0 < d >>> 0) ra();
    c[n + 24 >> 2] = g;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) ra(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[1349] | 0)) {
   c[1346] = f;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  d = 5416 + (a << 1 << 2) | 0;
  b = c[1344] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[1344] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
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
 e = 5680 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[1345] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[1345] = a | b;
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
  if ((a | 0) == 127) if (b >>> 0 < (c[1348] | 0) >>> 0) ra(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = e;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = e + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[1348] | 0;
   if (b >>> 0 >= p >>> 0 & e >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = e;
    c[q + 24 >> 2] = 0;
    break;
   } else ra();
  }
 } while (0);
 q = (c[1352] | 0) + -1 | 0;
 c[1352] = q;
 if (!q) a = 5832; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[1352] = -1;
 return;
}

function Nb(b, d, e) {
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
  Ob(b);
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
  Ob(b);
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
    Cb(1751, r);
    va();
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
   d = ec(e << 2) | 0;
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
   if (f | 0) fc(f);
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

function Hb(b) {
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
   Ia[c[(c[e >> 2] | 0) + 12 >> 2] & 0](e, v);
   break;
  } else {
   c[w >> 2] = Ja[c[(c[e >> 2] | 0) + 8 >> 2] & 31](e) | 0;
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
    m = ec(o * 40 | 0) | 0;
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
        Ia[c[(c[f >> 2] | 0) + 12 >> 2] & 0](f, b);
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
      if ((b | 0) == (e | 0)) Ha[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (b | 0) Ha[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
      j = j + 1 | 0;
     } while ((j | 0) != (l | 0));
    }
    b = c[u >> 2] | 0;
    if (b | 0) fc(b);
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
    b = Ib(u, f) | 0;
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
    b = Jb(u, 0) | 0;
    h = 60;
    break;
   }
   if ((g >> 1 | 0) > (f | 0)) if ((n | 0) > 0) {
    b = Ib(u, f) | 0;
    h = 60;
    break;
   } else {
    b = Jb(u, f) | 0;
    h = 60;
    break;
   } else if ((b | 0) < (l | 0)) {
    b = Jb(u, f) | 0;
    h = 60;
    break;
   } else {
    b = Ib(u, f) | 0;
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
    Ia[c[(c[o >> 2] | 0) + 12 >> 2] & 0](o, e);
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
     Ia[c[(c[v >> 2] | 0) + 12 >> 2] & 0](v, s);
     g = c[r >> 2] | 0;
    } else {
     g = Ja[c[(c[e >> 2] | 0) + 8 >> 2] & 31](e) | 0;
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
     Ia[c[(c[s >> 2] | 0) + 12 >> 2] & 0](s, D);
     h = c[r >> 2] | 0;
     Ha[c[(c[h >> 2] | 0) + 16 >> 2] & 31](h);
     c[r >> 2] = 0;
     h = c[f >> 2] | 0;
     Ia[c[(c[h >> 2] | 0) + 12 >> 2] & 0](h, s);
     h = c[f >> 2] | 0;
     Ha[c[(c[h >> 2] | 0) + 16 >> 2] & 31](h);
     c[f >> 2] = 0;
     c[r >> 2] = s;
     Ia[c[(c[D >> 2] | 0) + 12 >> 2] & 0](D, e);
     Ha[c[(c[D >> 2] | 0) + 16 >> 2] & 31](D);
     c[f >> 2] = k;
     h = 73;
     break;
    } else {
     Ia[c[(c[s >> 2] | 0) + 12 >> 2] & 0](s, k);
     h = c[r >> 2] | 0;
     Ha[c[(c[h >> 2] | 0) + 16 >> 2] & 31](h);
     c[r >> 2] = c[f >> 2];
     c[f >> 2] = k;
     h = 73;
     break;
    }
   } while (0);
   if ((h | 0) == 71) {
    Ia[c[(c[k >> 2] | 0) + 12 >> 2] & 0](e, s);
    o = c[f >> 2] | 0;
    Ha[c[(c[o >> 2] | 0) + 16 >> 2] & 31](o);
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
    if ((e | 0) == (s | 0)) h = 74; else if (e | 0) Ha[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   }
   if ((h | 0) == 74) Ha[c[(c[s >> 2] | 0) + 16 >> 2] & 31](s);
   a[b + 32 >> 0] = a[x >> 0] | 0;
  }
  b = c[w >> 2] | 0;
  if ((b | 0) == (v | 0)) Ha[c[(c[v >> 2] | 0) + 16 >> 2] & 31](v); else if (b | 0) Ha[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
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
  if ((f | 0) == (b + (e * 40 | 0) + 8 | 0)) Ha[c[(c[f >> 2] | 0) + 16 >> 2] & 31](f); else if (f | 0) Ha[c[(c[f >> 2] | 0) + 20 >> 2] & 31](f);
  e = e + 1 | 0;
  if ((e | 0) >= (c[d >> 2] | 0)) break;
  b = c[E >> 2] | 0;
 }
 F = c[F >> 2] | 0;
 c[d >> 2] = F;
 i = G;
 return;
}

function Wa(b, d) {
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
     e = ec(j << 3) | 0;
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
     if (k | 0) fc(k);
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
     l = ec(f + 9 | 0) | 0;
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
     mc(n | 0, j | 0, f | 0) | 0;
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
 c[1058] = 0;
 c[1059] = 0;
 e = c[1054] | 0;
 if (e | 0) {
  j = c[1056] | 0;
  f = c[1057] | 0;
  if ((j | 0) < (f | 0)) {
   h = e + (j << 3) | 0;
   g = c[h >> 2] | 0;
   if (!g) e = f; else {
    r = c[g >> 2] | 0;
    c[g >> 2] = r - 1;
    if ((r | 0) == 1) {
     fc(c[h >> 2] | 0);
     c[h >> 2] = 0;
     e = e + (j << 3) + 4 | 0;
     c[e >> 2] = 0;
    } else e = e + (j << 3) + 4 | 0;
    c[h >> 2] = 0;
    c[e >> 2] = 0;
    e = c[1057] | 0;
   }
   f = j + 1 | 0;
   if ((f | 0) < (e | 0)) do {
    g = c[1054] | 0;
    j = g + (f << 3) | 0;
    h = c[j >> 2] | 0;
    if (h) {
     r = c[h >> 2] | 0;
     c[h >> 2] = r - 1;
     if ((r | 0) == 1) {
      fc(c[j >> 2] | 0);
      c[j >> 2] = 0;
      e = g + (f << 3) + 4 | 0;
      c[e >> 2] = 0;
     } else e = g + (f << 3) + 4 | 0;
     c[j >> 2] = 0;
     c[e >> 2] = 0;
     e = c[1057] | 0;
    }
    f = f + 1 | 0;
   } while ((f | 0) < (e | 0));
   e = c[1054] | 0;
  }
  fc(e);
 };
 c[1054] = 0;
 c[1055] = 0;
 c[1056] = 0;
 c[1057] = 0;
 c[1058] = 16;
 c[1059] = 65536;
 c[1054] = 0;
 c[1055] = 0;
 c[1056] = 0;
 c[1054] = k;
 c[1055] = m;
 c[1056] = 0;
 c[1057] = l;
 l = ec(48) | 0;
 e = l;
 f = e + 44 | 0;
 do {
  c[e >> 2] = 0;
  e = e + 4 | 0;
 } while ((e | 0) < (f | 0));
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 9;
 j = l + 12 | 0;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 c[j + 12 >> 2] = 0;
 k = l + 28 | 0;
 c[k >> 2] = 16;
 g = l + 32 | 0;
 c[g >> 2] = 65536;
 a[l + 36 >> 0] = 0;
 a[l + 37 >> 0] = 0;
 c[1320] = l;
 c[l >> 2] = 1032;
 h = l + 40 | 0;
 c[h >> 2] = 0;
 f = l + 44 | 0;
 c[f >> 2] = 0;
 e = ec(4) | 0;
 c[e >> 2] = nc() | 0;
 r = ec(84) | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 c[r + 20 >> 2] = 16;
 c[r + 24 >> 2] = 65536;
 a[r + 28 >> 0] = 0;
 q = r + 32 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[r + 48 >> 2] = 16;
 c[r + 52 >> 2] = 65536;
 a[r + 56 >> 0] = 0;
 q = r + 60 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[r + 76 >> 2] = 16;
 c[r + 80 >> 2] = 65536;
 c[1321] = r;
 r = ec(84) | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 c[r + 20 >> 2] = 16;
 c[r + 24 >> 2] = 65536;
 a[r + 28 >> 0] = 0;
 q = r + 32 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[r + 48 >> 2] = 16;
 c[r + 52 >> 2] = 65536;
 a[r + 56 >> 0] = 0;
 q = r + 60 | 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[r + 76 >> 2] = 16;
 c[r + 80 >> 2] = 65536;
 c[1322] = r;
 Ab(1612, s);
 Da(24, 0, 1);
 Ab(1637, t);
 t = c[1321] | 0;
 Db(t);
 fc(t);
 t = c[1322] | 0;
 Db(t);
 fc(t);
 fc(e);
 c[1321] = 0;
 c[1322] = 0;
 c[l >> 2] = 1032;
 e = c[f >> 2] | 0;
 if (e | 0) {
  s = e + 4 | 0;
  t = c[s >> 2] | 0;
  c[s >> 2] = t - 1;
  if ((t | 0) == 1) Ha[c[c[e >> 2] >> 2] & 31](e);
  c[f >> 2] = 0;
 }
 e = c[h >> 2] | 0;
 if (e | 0) {
  s = e + 4 | 0;
  t = c[s >> 2] | 0;
  c[s >> 2] = t - 1;
  if ((t | 0) == 1) Ha[c[c[e >> 2] >> 2] & 31](e);
  c[h >> 2] = 0;
 }
 c[l >> 2] = 1132;
 c[1320] = 0;
 c[k >> 2] = 0;
 c[g >> 2] = 0;
 e = c[j >> 2] | 0;
 if (!e) {
  fc(l);
  i = u;
  return 0;
 }
 fc(e);
 fc(l);
 i = u;
 return 0;
}

function tb(a) {
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
  Cb(1751, k);
  va();
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
   f = ec(k << 2) | 0;
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
   if (e | 0) fc(e);
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

function Fb(a) {
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
     Gb(r, d);
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
      Gb(o, d);
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

function gb(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 m = d + 4 | 0;
 if (d | 0) c[m >> 2] = (c[m >> 2] | 0) + 1;
 p = c[m >> 2] | 0;
 c[m >> 2] = p - 1;
 if ((p | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
 o = ec(88) | 0;
 p = o + 4 | 0;
 c[p >> 2] = 0;
 a[o + 12 >> 0] = 0;
 a[o + 13 >> 0] = 0;
 c[o >> 2] = 1112;
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
  g = ec(f) | 0;
  h = c[k >> 2] | 0;
  if ((h | 0) > 0) mc(g | 0, c[j >> 2] | 0, h | 0) | 0;
  h = c[j >> 2] | 0;
  if (h | 0) fc(h);
  c[j >> 2] = g;
  c[i >> 2] = f;
  h = c[k >> 2] | 0;
 } else {
  g = 0;
  h = 0;
 }
 mc(g + h | 0, e | 0, f | 0) | 0;
 c[k >> 2] = (c[k >> 2] | 0) + f;
 f = d + 124 | 0;
 g = c[f >> 2] | 0;
 if ((o | 0) != (g | 0)) {
  if (g | 0) {
   k = g + 4 | 0;
   e = c[k >> 2] | 0;
   c[k >> 2] = e - 1;
   if ((e | 0) == 1) Ha[c[c[g >> 2] >> 2] & 31](g);
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
   fc(g);
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
   Kb(g, h);
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
     fc(c[i >> 2] | 0);
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
  if ((s | 0) == 1) Ha[c[c[o >> 2] >> 2] & 31](o);
 }
 s = c[m >> 2] | 0;
 c[m >> 2] = s - 1;
 if ((s | 0) != 1) return;
 Ha[c[c[d >> 2] >> 2] & 31](d);
 return;
}

function wc(a, b, d, e, f) {
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
   f = k >>> ((pc(i | 0) | 0) >>> 0);
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
   p = pc(h | 0) | 0;
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
  k = ic(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   hc(k | 0, d | 0, e | 0, n | 0) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = hc(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function vb(a) {
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
     b = 1741;
     break;
    }
   case 1:
    {
     b = 1726;
     break;
    }
   case 2:
    {
     b = 1715;
     break;
    }
   case 3:
    {
     b = 1710;
     break;
    }
   case 4:
    {
     b = 1702;
     break;
    }
   case 5:
    {
     b = 1694;
     break;
    }
   case 6:
    {
     b = 1686;
     break;
    }
   case 7:
    {
     b = 1678;
     break;
    }
   default:
    b = 1662;
   }
   c[k >> 2] = b;
   Ab(1456, k);
   c[n >> 2] = 7;
   break;
  }
  switch (j | 0) {
  case 0:
   {
    b = 1741;
    break;
   }
  case 1:
   {
    b = 1726;
    break;
   }
  case 2:
   {
    b = 1715;
    break;
   }
  case 3:
   {
    b = 1710;
    break;
   }
  case 4:
   {
    b = 1702;
    break;
   }
  case 5:
   {
    b = 1694;
    break;
   }
  case 6:
   {
    b = 1686;
    break;
   }
  case 7:
   {
    b = 1678;
    break;
   }
  default:
   b = 1662;
  }
  c[l >> 2] = b;
  Ab(1524, l);
  b = c[m >> 2] | 0;
  c[n >> 2] = b;
  c[m >> 2] = 9;
  p = 33;
 } while (0);
 if ((p | 0) == 33) if ((b | 0) != 7) {
  Eb(c[1321] | 0);
  switch (c[n >> 2] | 0) {
  case 0:
   {
    c[m >> 2] = Ja[c[c[a >> 2] >> 2] & 31](a) | 0;
    break;
   }
  case 1:
   {
    c[m >> 2] = Ja[c[(c[a >> 2] | 0) + 4 >> 2] & 31](a) | 0;
    break;
   }
  case 2:
   {
    c[m >> 2] = Ja[c[(c[a >> 2] | 0) + 8 >> 2] & 31](a) | 0;
    break;
   }
  case 3:
   {
    c[m >> 2] = Ja[c[(c[a >> 2] | 0) + 12 >> 2] & 31](a) | 0;
    break;
   }
  case 4:
   {
    c[m >> 2] = Ja[c[(c[a >> 2] | 0) + 16 >> 2] & 31](a) | 0;
    break;
   }
  case 5:
   {
    c[m >> 2] = Ja[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a) | 0;
    break;
   }
  case 6:
   {
    c[m >> 2] = Ja[c[(c[a >> 2] | 0) + 24 >> 2] & 31](a) | 0;
    c[n >> 2] = 9;
    break;
   }
  case 7:
   {
    b = 1678;
    p = 49;
    break;
   }
  default:
   {
    b = 1662;
    p = 49;
   }
  }
  if ((p | 0) == 49) {
   c[o >> 2] = b;
   Bb(1569, o);
  }
  Eb(c[1322] | 0);
  i = r;
  return;
 }
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 1e8;
 do {
  if ((na(q | 0, q | 0) | 0) != -1) break;
  if (!(c[1332] | 0)) b = 5372; else b = c[(nc() | 0) + 64 >> 2] | 0;
 } while ((c[b >> 2] | 0) == 4);
 i = r;
 return;
}

function Gb(b, d) {
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
   Ha[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
   return;
  }
  if (!b) return;
  Ha[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
  return;
 }
 if ((f + -1 | 0) == (d | 0)) {
  l = g + -1 | 0;
  c[m >> 2] = l;
  m = c[b >> 2] | 0;
  b = c[m + (l * 40 | 0) + 24 >> 2] | 0;
  if ((b | 0) == (m + (l * 40 | 0) + 8 | 0)) {
   Ha[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
   return;
  }
  if (!b) return;
  Ha[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
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
   if ((e | 0) == (g | 0)) Ha[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ha[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   c[i >> 2] = 0;
   e = j + (f * 40 | 0) + 24 | 0;
   d = c[e >> 2] | 0;
   do if (!d) c[i >> 2] = 0; else if ((d | 0) == (h | 0)) {
    c[i >> 2] = g;
    Ia[c[(c[d >> 2] | 0) + 12 >> 2] & 0](d, g);
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
   Ha[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
   return;
  }
  if (!b) return;
  Ha[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
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
   if ((e | 0) == (g | 0)) Ha[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ha[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   c[i >> 2] = 0;
   e = d + (k * 40 | 0) + 24 | 0;
   f = c[e >> 2] | 0;
   do if (!f) c[i >> 2] = 0; else if ((f | 0) == (h | 0)) {
    c[i >> 2] = g;
    Ia[c[(c[f >> 2] | 0) + 12 >> 2] & 0](f, g);
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
  Ha[c[(c[b >> 2] | 0) + 16 >> 2] & 31](b);
  return;
 }
 if (!b) return;
 Ha[c[(c[b >> 2] | 0) + 20 >> 2] & 31](b);
 return;
}

function fb(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 d = c[e >> 2] | 0;
 k = Ma[c[(c[d >> 2] | 0) + 4 >> 2] & 31](d, 5872) | 0;
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
   f = c[((f | 0) == 0 ? 1164 : f + 12 | 0) >> 2] | 0;
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
    h = ec(d + 9 | 0) | 0;
    j = h;
    c[j >> 2] = 0;
    c[j + 4 >> 2] = 0;
    c[h >> 2] = 0;
    c[h >> 2] = (c[h >> 2] | 0) + 1;
    c[h + 4 >> 2] = d;
    j = h + 8 | 0;
    mc(j | 0, e | 0, d | 0) | 0;
    a[j + d >> 0] = 0;
    d = h;
    e = j;
   } else {
    d = 0;
    e = 0;
   }
  }
  oa(((e | 0) == 0 ? 5875 : e) | 0, k | 0, 26, 27);
  if (d | 0) {
   k = c[d >> 2] | 0;
   c[d >> 2] = k - 1;
   if ((k | 0) == 1) fc(d);
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
 if ((k | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
 c[l >> 2] = 0;
 i = m;
 return 1;
}

function Ya(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 32 | 0;
 e = l + 16 | 0;
 h = l + 8 | 0;
 d = l;
 k = l + 24 | 0;
 j = c[b + 40 >> 2] | 0;
 Ha[c[(c[j >> 2] | 0) + 8 >> 2] & 31](j);
 j = b + 44 | 0;
 b = c[j >> 2] | 0;
 if (b | 0) if (a[b + 12 >> 0] & 1) {
  g = c[j >> 2] | 0;
  b = c[g + 20 >> 2] | 0;
  b = c[((b | 0) == 0 ? 1164 : b + 12 | 0) >> 2] | 0;
  if ((c[(c[g + 124 >> 2] | 0) + 16 >> 2] | 0) == 200) {
   c[d >> 2] = b;
   Ab(1319, d);
   b = c[(c[j >> 2] | 0) + 124 >> 2] | 0;
   g = c[b + 56 >> 2] | 0;
   b = c[b + 48 >> 2] | 0;
   if ((b | 0) == -1) {
    e = g;
    a : do if (!(e & 3)) {
     b = g;
     f = 8;
    } else {
     d = g;
     b = e;
     while (1) {
      if (!(a[d >> 0] | 0)) break a;
      d = d + 1 | 0;
      b = d;
      if (!(b & 3)) {
       b = d;
       f = 8;
       break;
      }
     }
    } while (0);
    if ((f | 0) == 8) {
     while (1) {
      d = c[b >> 2] | 0;
      if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
     }
     if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
    }
    b = b - e | 0;
   }
   if ((b | 0) > 0 & (a[g >> 0] | 0) != 0) {
    f = ec(b + 9 | 0) | 0;
    d = f;
    c[d >> 2] = 0;
    c[d + 4 >> 2] = 0;
    c[f >> 2] = 0;
    c[f >> 2] = (c[f >> 2] | 0) + 1;
    c[f + 4 >> 2] = b;
    d = f + 8 | 0;
    mc(d | 0, g | 0, b | 0) | 0;
    a[d + b >> 0] = 0;
    b = f;
   } else {
    b = 0;
    d = 0;
   }
   c[h >> 2] = (d | 0) == 0 ? 5875 : d;
   Ab(1337, h);
   if (b | 0) {
    h = c[b >> 2] | 0;
    c[b >> 2] = h - 1;
    if ((h | 0) == 1) fc(b);
   }
  } else {
   c[e >> 2] = b;
   Ab(1347, e);
  }
  b = c[j >> 2] | 0;
  if (b | 0) {
   g = b + 4 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = h - 1;
   if ((h | 0) == 1) Ha[c[c[b >> 2] >> 2] & 31](b);
   c[j >> 2] = 0;
  }
 }
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 1e7;
 while (1) {
  if ((na(k | 0, k | 0) | 0) != -1) {
   f = 29;
   break;
  }
  if (!(c[1332] | 0)) b = 5372; else b = c[(nc() | 0) + 64 >> 2] | 0;
  if ((c[b >> 2] | 0) != 4) {
   f = 29;
   break;
  }
 }
 if ((f | 0) == 29) {
  i = l;
  return (c[j >> 2] | 0 ? 4 : 5) | 0;
 }
 return 0;
}

function Zb(a, b, d) {
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

function Jb(b, d) {
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
  Ia[c[(c[g >> 2] | 0) + 12 >> 2] & 0](g, e);
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
  if ((e | 0) == (h | 0)) Ha[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ha[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
  c[j >> 2] = 0;
  e = k + (g * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   j = c[e >> 2] | 0;
   Ia[c[(c[j >> 2] | 0) + 12 >> 2] & 0](j, h);
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

function Qb(a, b, d) {
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
  if (!(c[1332] | 0)) {
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = k;
   c[n + 8 >> 2] = f;
   b = xa(146, n | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[1332] | 0)) e = 5372; else e = c[(nc() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
  } else {
   Ca(30, a | 0);
   c[m >> 2] = c[j >> 2];
   c[m + 4 >> 2] = k;
   c[m + 8 >> 2] = f;
   b = xa(146, m | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[1332] | 0)) e = 5372; else e = c[(nc() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
   ma(0);
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

function bb(a) {
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
    fc(c[e >> 2] | 0);
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
    fc(c[e >> 2] | 0);
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
     fc(c[e >> 2] | 0);
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
     fc(c[e >> 2] | 0);
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
 fc(b);
 i = h;
 c[a >> 2] = 0;
 a = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Kb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 e = c[d >> 2] | 0;
 if (!e) {
  c[b >> 2] = 0;
  return;
 }
 i = c[e >> 2] | 0;
 f = c[1331] | 0;
 if (!f) {
  g = ec(24608) | 0;
  jc(g | 0, 0, 24608) | 0;
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
  c[1331] = g;
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
    g = ec(24608) | 0;
    jc(g | 0, 0, 24608) | 0;
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
    c[1331] = g;
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
   j = Mb(f, e, d) | 0;
   c[b >> 2] = j;
   if (j | 0) return;
   c[b >> 2] = Nb(f, e, d) | 0;
   return;
  }
 }
 c[b >> 2] = 0;
 return;
}

function cb(a) {
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
    fc(c[e >> 2] | 0);
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
    fc(c[e >> 2] | 0);
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
     fc(c[e >> 2] | 0);
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
     fc(c[e >> 2] | 0);
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
 fc(b);
 i = h;
 c[a >> 2] = 0;
 a = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Ib(b, d) {
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
  Ia[c[(c[g >> 2] | 0) + 12 >> 2] & 0](g, e);
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
  if ((e | 0) == (h | 0)) Ha[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ha[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
  c[j >> 2] = 0;
  e = g + (l * 40 | 0) + 24 | 0;
  f = c[e >> 2] | 0;
  do if (!f) c[j >> 2] = 0; else if ((f | 0) == (i | 0)) {
   c[j >> 2] = h;
   Ia[c[(c[f >> 2] | 0) + 12 >> 2] & 0](f, h);
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

function kb(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 16 | 0;
 e = k;
 j = d + 4 | 0;
 if (d | 0) c[j >> 2] = (c[j >> 2] | 0) + 1;
 h = c[j >> 2] | 0;
 c[j >> 2] = h - 1;
 if ((h | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
 g = c[d + 20 >> 2] | 0;
 c[e >> 2] = c[((g | 0) == 0 ? 1164 : g + 12 | 0) >> 2];
 zb(0, e);
 g = ec(88) | 0;
 h = g + 4 | 0;
 c[h >> 2] = 0;
 a[g + 12 >> 0] = 0;
 a[g + 13 >> 0] = 0;
 c[g >> 2] = 1112;
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
   if ((l | 0) == 1) Ha[c[c[e >> 2] >> 2] & 31](e);
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
 if ((m | 0) == 1) Ha[c[c[g >> 2] >> 2] & 31](g);
 m = c[j >> 2] | 0;
 c[j >> 2] = m - 1;
 if ((m | 0) != 1) {
  i = k;
  return;
 }
 Ha[c[c[d >> 2] >> 2] & 31](d);
 i = k;
 return;
}

function Db(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 60 | 0;
 c[a + 76 >> 2] = 0;
 c[a + 80 >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d | 0) fc(d);
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
    if ((f | 0) == (d + (e * 40 | 0) + 8 | 0)) Ha[c[(c[f >> 2] | 0) + 16 >> 2] & 31](f); else if (f | 0) Ha[c[(c[f >> 2] | 0) + 20 >> 2] & 31](f);
    e = e + 1 | 0;
    if ((e | 0) >= (c[b >> 2] | 0)) break;
    d = c[h >> 2] | 0;
   }
   d = c[h >> 2] | 0;
  }
  fc(d);
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
   if ((e | 0) == (b + (d * 40 | 0) + 8 | 0)) Ha[c[(c[e >> 2] | 0) + 16 >> 2] & 31](e); else if (e | 0) Ha[c[(c[e >> 2] | 0) + 20 >> 2] & 31](e);
   d = d + 1 | 0;
   if ((d | 0) >= (c[h >> 2] | 0)) break;
   b = c[g >> 2] | 0;
  }
  b = c[g >> 2] | 0;
 }
 fc(b);
 a = a + 8 | 0;
 c[g >> 2] = 0;
 c[a >> 2] = 0;
 c[f >> 2] = 0;
 c[h >> 2] = 0;
 return;
}

function Mb(b, d, e) {
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

function Va(a) {
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
    fc(c[f >> 2] | 0);
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
     fc(c[g >> 2] | 0);
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
 fc(b);
 g = a + 4 | 0;
 c[a >> 2] = 0;
 c[g >> 2] = 0;
 c[h >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function Lb(b, d, e, f, g) {
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
 if ((k | 0) == 4) b = (dc(h, b << 24 >> 24) | 0) - h | 0;
 m = b + e | 0;
 m = (m | 0) < (d | 0) & ((f | 0) == -1 | (m | 0) < (f | 0)) ? m : -1;
 i = l;
 return m | 0;
}

function Ub(b, d, e) {
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

function Vb(b, d, e) {
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
 if ((Wb(0, d, m, o, p) | 0) >= 0) {
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
   Wb(b, d, m, o, p) | 0;
   if (f | 0) {
    Ga[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
    c[e >> 2] = f;
    c[k >> 2] = 0;
    c[j >> 2] = 0;
    c[g >> 2] = 0;
    c[h >> 2] = 0;
   }
  } else Wb(b, d, m, o, p) | 0;
  c[b >> 2] = c[b >> 2] | l;
 }
 i = q;
 return;
}

function Ob(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = ec(16384) | 0;
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
   g = ec(i << 2) | 0;
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
   if (d | 0) fc(d);
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

function Cb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[5292] & 1) != 0);
 c[1324] = (c[1324] | 0) + 1;
 d = c[1328] | 0;
 e = c[1327] | 0;
 if ((d | 0) == (e | 0)) {
  Vb(1168, b, h);
  b = c[1324] | 0;
  c[1324] = b - 1;
  i = j;
  return;
 }
 f = c[1325] | 0;
 if (!f) {
  b = c[1324] | 0;
  c[1324] = b - 1;
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
  Na[c[(c[d >> 2] | 0) + 4 >> 2] & 0](d, 1, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) va(); else if ((d | 0) == 12) {
  k = c[1324] | 0;
  c[1324] = k - 1;
  i = j;
  return;
 }
}

function Bb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[5292] & 1) != 0);
 c[1324] = (c[1324] | 0) + 1;
 d = c[1328] | 0;
 e = c[1327] | 0;
 if ((d | 0) == (e | 0)) {
  Vb(1168, b, h);
  b = c[1324] | 0;
  c[1324] = b - 1;
  i = j;
  return;
 }
 f = c[1325] | 0;
 if (!f) {
  b = c[1324] | 0;
  c[1324] = b - 1;
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
  Na[c[(c[d >> 2] | 0) + 4 >> 2] & 0](d, 2, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) va(); else if ((d | 0) == 12) {
  k = c[1324] | 0;
  c[1324] = k - 1;
  i = j;
  return;
 }
}

function Ab(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[h >> 2] = d;
 do {} while ((a[5292] & 1) != 0);
 c[1324] = (c[1324] | 0) + 1;
 d = c[1328] | 0;
 e = c[1327] | 0;
 if ((d | 0) == (e | 0)) {
  Vb(1168, b, h);
  b = c[1324] | 0;
  c[1324] = b - 1;
  i = j;
  return;
 }
 f = c[1325] | 0;
 if (!f) {
  b = c[1324] | 0;
  c[1324] = b - 1;
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
  Na[c[(c[d >> 2] | 0) + 4 >> 2] & 0](d, 3, b, h);
  f = c[k >> 2] | 0;
  c[k >> 2] = f - 1;
  if ((f | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
  e = e + 4 | 0;
  if ((e | 0) == (g | 0)) {
   d = 12;
   break;
  }
 }
 if ((d | 0) == 10) va(); else if ((d | 0) == 12) {
  k = c[1324] | 0;
  c[1324] = k - 1;
  i = j;
  return;
 }
}

function zb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 g = h;
 c[g >> 2] = d;
 do {} while ((a[5292] & 1) != 0);
 c[1324] = (c[1324] | 0) + 1;
 b = c[1328] | 0;
 d = c[1327] | 0;
 if ((b | 0) == (d | 0)) {
  Vb(1168, 1370, g);
  g = c[1324] | 0;
  c[1324] = g - 1;
  i = h;
  return;
 }
 e = c[1325] | 0;
 if (!e) {
  g = c[1324] | 0;
  c[1324] = g - 1;
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
  Na[c[(c[b >> 2] | 0) + 4 >> 2] & 0](b, 4, 1370, g);
  e = c[j >> 2] | 0;
  c[j >> 2] = e - 1;
  if ((e | 0) == 1) Ha[c[c[b >> 2] >> 2] & 31](b);
  d = d + 4 | 0;
  if ((d | 0) == (f | 0)) {
   b = 12;
   break;
  }
 }
 if ((b | 0) == 10) va(); else if ((b | 0) == 12) {
  j = c[1324] | 0;
  c[1324] = j - 1;
  i = h;
  return;
 }
}

function Xb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) {
  if (!(Yb(e) | 0)) {
   g = c[f >> 2] | 0;
   h = 5;
  }
 } else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  f = h;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   Ga[c[e + 36 >> 2] & 31](e, b, d) | 0;
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
   if ((Ga[c[e + 36 >> 2] & 31](e, b, h) | 0) >>> 0 < h >>> 0) break a;
   g = d - h | 0;
   b = b + h | 0;
   f = c[i >> 2] | 0;
  } else g = d; while (0);
  mc(f | 0, b | 0, g | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + g;
 } while (0);
 return;
}

function yb(a) {
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
    if ((e | 0) == 1) Ha[c[c[b >> 2] >> 2] & 31](b);
    c[f >> 2] = 0;
    e = c[h >> 2] | 0;
   }
   d = d + 1 | 0;
   if ((d | 0) >= (e | 0)) break;
   b = c[a >> 2] | 0;
  }
  b = c[a >> 2] | 0;
 }
 fc(b);
 i = h;
 h = a + 4 | 0;
 c[a >> 2] = 0;
 c[h >> 2] = 0;
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 return;
}

function dc(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = d & 255;
 a : do if (!f) b = b + (cc(b) | 0) | 0; else {
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

function ac(b, d) {
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
  if (!(c[1332] | 0)) b = 5372; else b = c[(nc() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 84;
  b = -1;
 } while (0);
 return b | 0;
}

function _a(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 c[a >> 2] = 1072;
 b = a + 124 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  f = d + 4 | 0;
  e = c[f >> 2] | 0;
  c[f >> 2] = e - 1;
  if ((e | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
  c[b >> 2] = 0;
 }
 b = a + 120 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) {
  e = d + 4 | 0;
  f = c[e >> 2] | 0;
  c[e >> 2] = f - 1;
  if ((f | 0) == 1) Ha[c[c[d >> 2] >> 2] & 31](d);
  c[b >> 2] = 0;
 }
 c[a + 100 >> 2] = 0;
 b = a + 96 | 0;
 d = c[b >> 2] | 0;
 if (d | 0) fc(d);
 c[b >> 2] = 0;
 c[a + 88 >> 2] = 0;
 c[a + 92 >> 2] = 0;
 f = a + 60 | 0;
 bb(f);
 cb(f);
 fc(a);
 return;
}

function sc(a, b, d, e) {
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
 a = hc(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = D;
 wc(a, b, hc(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, D, j) | 0;
 e = hc(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = D;
 i = f;
 return (D = d, e) | 0;
}

function $b(a, b, d, e, f) {
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
  jc(g | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  e = c[a >> 2] | 0;
  d = (e & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   b = f;
   do {
    if (d) {
     Xb(g, 256, a);
     e = c[a >> 2] | 0;
    }
    b = b + -256 | 0;
    d = (e & 32 | 0) == 0;
   } while (b >>> 0 > 255);
   if (d) f = f & 255; else break;
  } else if (!d) break;
  Xb(g, f, a);
 } while (0);
 i = h;
 return;
}

function Sb(a, b, d) {
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
 b = Ba(140, h | 0) | 0;
 if (b >>> 0 > 4294963200) {
  if (!(c[1332] | 0)) a = 5372; else a = c[(nc() | 0) + 64 >> 2] | 0;
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

function rc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = hc(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = D;
 a = f ^ j;
 b = e ^ i;
 return hc((wc(h, g, hc(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, D, 0) | 0) ^ a | 0, D ^ b | 0, a | 0, b | 0) | 0;
}

function mc(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return za(b | 0, d | 0, e | 0) | 0;
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

function bc(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = kc(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +bc(a * 18446744073709551616.0, b);
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

function cc(b) {
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

function hb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 c[a >> 2] = 1112;
 d = a + 80 | 0;
 b = c[d >> 2] | 0;
 if (b | 0) {
  e = c[b >> 2] | 0;
  c[b >> 2] = e - 1;
  if ((e | 0) == 1) {
   fc(c[d >> 2] | 0);
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
 if (d | 0) fc(d);
 c[b >> 2] = 0;
 c[a + 48 >> 2] = 0;
 c[a + 52 >> 2] = 0;
 e = a + 20 | 0;
 bb(e);
 cb(e);
 fc(a);
 return;
}

function _b(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = vc(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = b;
  b = uc(b | 0, c | 0, 10, 0) | 0;
  if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break; else c = D;
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function jc(b, d, e) {
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

function Eb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 Fb(b);
 Hb(b);
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
     Ha[c[(c[g >> 2] | 0) + 24 >> 2] & 31](g);
    }
    d = d + 40 | 0;
   } while ((d | 0) != (f | 0));
  }
 }
 Fb(b);
 Hb(b);
 return;
}

function Yb(b) {
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

function Tb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 31;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (Aa(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Qb(b, d, e) | 0;
 i = g;
 return f | 0;
}

function qc(a, b) {
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

function Za(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 Ab(1362, d);
 a = a + 40 | 0;
 b = c[a >> 2] | 0;
 if (!b) {
  i = d;
  return 6;
 }
 f = b + 4 | 0;
 e = c[f >> 2] | 0;
 c[f >> 2] = e - 1;
 if ((e | 0) == 1) Ha[c[c[b >> 2] >> 2] & 31](b);
 c[a >> 2] = 0;
 i = d;
 return 6;
}

function pc(b) {
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

function Pb(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 c[b >> 2] = c[a + 60 >> 2];
 a = ta(6, b | 0) | 0;
 if (a >>> 0 > 4294963200) {
  if (!(c[1332] | 0)) b = 5372; else b = c[(nc() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 0 - a;
  a = -1;
 }
 i = d;
 return a | 0;
}

function nb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = c[a + 12 >> 2] | 0;
 if (!b) return; else d = 0;
 do {
  e = a + 16 + (d << 2) | 0;
  fc(c[e >> 2] | 0);
  c[e >> 2] = 0;
  d = d + 1 | 0;
 } while ((d | 0) != (b | 0));
 return;
}

function vc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 wc(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function tc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = qc(e, f) | 0;
 a = D;
 return (D = ($(b, f) | 0) + ($(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function oc(a, b, c) {
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

function lc(a, b, c) {
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

function kc(a, b, c) {
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

function gc() {}
function hc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function ic(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function xb() {
 c[1325] = 0;
 c[1326] = 0;
 c[1327] = 0;
 c[1328] = 0;
 c[1329] = 16;
 c[1330] = 65536;
 pa(29, 5300, n | 0) | 0;
 return;
}

function db() {
 c[1054] = 0;
 c[1055] = 0;
 c[1056] = 0;
 c[1057] = 0;
 c[1058] = 16;
 c[1059] = 65536;
 pa(25, 4216, n | 0) | 0;
 return;
}

function mb() {
 jc(4256, 0, 1024) | 0;
 c[1063] = 0;
 c[1060] = 112;
 c[1061] = 0;
 c[1062] = -1;
 pa(28, 4240, n | 0) | 0;
 return;
}

function Ec(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Na[a & 0](b | 0, c | 0, d | 0, e | 0);
}

function xc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Ga[a & 31](b | 0, c | 0, d | 0) | 0;
}

function Bc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 Ka[a & 31](b | 0, c | 0, d | 0);
}

function uc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return wc(a, b, c, d, 0) | 0;
}

function wb() {
 var a = 0;
 a = c[1320] | 0;
 Ha[c[(c[a >> 2] | 0) + 28 >> 2] & 31](a);
 return;
}
function Oa(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Dc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Ma[a & 31](b | 0, c | 0) | 0;
}

function ib(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 5874 | (b | 0) == 5873 | 0;
}

function $a(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 5872 | (b | 0) == 5873 | 0;
}

function zc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Ia[a & 0](b | 0, c | 0);
}

function Mc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(7);
}

function jb(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1213485138 | 0;
}

function ab(a, b) {
 a = a | 0;
 b = b | 0;
 return (b | 0) == 1213485138 | 0;
}

function Fc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(0);
 return 0;
}

function Sa(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function Ac(a, b) {
 a = a | 0;
 b = b | 0;
 return Ja[a & 31](b | 0) | 0;
}

function Jc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(4);
}

function yc(a, b) {
 a = a | 0;
 b = b | 0;
 Ha[a & 31](b | 0);
}

function Lc(a, b) {
 a = a | 0;
 b = b | 0;
 ca(6);
 return 0;
}

function Ra(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Hc(a, b) {
 a = a | 0;
 b = b | 0;
 ca(2);
}

function Ic(a) {
 a = a | 0;
 ca(3);
 return 0;
}

function ub(a) {
 a = a | 0;
 wa();
 return 9;
}

function eb(a) {
 a = a | 0;
 fc(a);
 return;
}

function Cc(a) {
 a = a | 0;
 La[a & 31]();
}

function sb(a) {
 a = a | 0;
 return 5;
}

function rb(a) {
 a = a | 0;
 return 4;
}

function qb(a) {
 a = a | 0;
 return 3;
}

function pb(a) {
 a = a | 0;
 return 2;
}

function ob(a) {
 a = a | 0;
 return 1;
}

function lb(a) {
 a = a | 0;
 return;
}

function Rb(a) {
 a = a | 0;
 return;
}

function Ta(a) {
 a = a | 0;
 D = a;
}

function Qa(a) {
 a = a | 0;
 i = a;
}

function Gc(a) {
 a = a | 0;
 ca(1);
}

function Ua() {
 return D | 0;
}

function Pa() {
 return i | 0;
}

function nc() {
 return 0;
}

function Kc() {
 ca(5);
}

// EMSCRIPTEN_END_FUNCS

 var Ga = [ Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Tb, Sb, Fc, Fc, Fc, Fc, Fc, Fc, Fc, Qb ];
 var Ha = [ Gc, Gc, Gc, Gc, Gc, Gc, Gc, Gc, vb, _a, Gc, Gc, eb, Gc, lb, hb, Gc, Gc, Gc, Gc, Gc, Gc, Gc, Gc, Gc, Va, Gc, kb, nb, yb, Rb, Gc ];
 var Ia = [ Hc ];
 var Ja = [ Ic, ob, pb, qb, Xa, Ya, Za, ub, Ic, Ic, Ic, Ic, Ic, Ic, Ic, Ic, Ic, Ic, rb, sb, tb, Pb, Ic, Ic, Ic, Ic, Ic, Ic, Ic, Ic, Ic, Ic ];
 var Ka = [ Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, Jc, gb, Jc, Jc, Jc, Jc, Jc ];
 var La = [ Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, Kc, wb, Kc, Kc, Kc, Kc, Kc, Kc, Kc ];
 var Ma = [ Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, $a, ab, Lc, fb, Lc, Lc, ib, jb, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc, Lc ];
 var Na = [ Mc ];
 return {
  _i64Subtract: hc,
  _free: fc,
  _main: Wa,
  _i64Add: ic,
  _pthread_self: nc,
  _memset: jc,
  _malloc: ec,
  _memcpy: mc,
  _bitshift64Lshr: kc,
  _bitshift64Shl: lc,
  __GLOBAL__sub_I_HTTPClientSample_cc: db,
  __GLOBAL__sub_I_ThreadedQueue_cc: mb,
  __GLOBAL__sub_I_Log_cc: xb,
  runPostSets: gc,
  stackAlloc: Oa,
  stackSave: Pa,
  stackRestore: Qa,
  establishStackSpace: Ra,
  setThrew: Sa,
  setTempRet0: Ta,
  getTempRet0: Ua,
  dynCall_iiii: xc,
  dynCall_vi: yc,
  dynCall_vii: zc,
  dynCall_ii: Ac,
  dynCall_viii: Bc,
  dynCall_v: Cc,
  dynCall_iii: Dc,
  dynCall_viiii: Ec
 };
})


;