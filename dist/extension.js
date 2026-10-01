import { hostSlot as e } from "@intentic/extension-api";
import { Fragment as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createSlots as s, createTextVNode as c, createVNode as l, defineComponent as u, isRef as d, mergeModels as f, nextTick as p, normalizeClass as m, normalizeStyle as ee, openBlock as h, ref as g, renderList as _, resolveDirective as te, toDisplayString as v, toRef as ne, unref as y, useModel as re, watch as ie, withCtx as b, withDirectives as ae, withKeys as oe, withModifiers as se } from "vue";
import { Button as ce, DagGraph as x, FilterBar as le, Icon as ue, InfoHint as de, InfoTable as fe, Markdown as pe, NavRail as me, NoteEditor as he, Notice as ge, Picker as _e, Row as ve, SkeletonRows as ye, StatusBadge as be, formatBytes as xe, formatTimestamp as Se, freshness as Ce, noticeOf as we, ui as Te, useKeyedDraft as Ee, useLoadingReveal as S, useNarrow as De, useNoteDraft as Oe, useScrollReset as ke, useStickyTop as Ae } from "@intentic/extension-ui";
import { useMutation as je, useQuery as Me, useQueryClient as Ne } from "@tanstack/vue-query";
//#region \0rolldown/runtime.js
var Pe = Object.defineProperty, C = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, Fe = (e, t) => {
	let n = {};
	for (var r in e) Pe(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Pe(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ie, Le, Re = C((() => {
	({bindHost: Ie, host: Le} = e("ext-knowledge"));
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/util.js
function ze(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Be(e, t = "|") {
	return e.map((e) => ot(e)).join(t);
}
function Ve(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function He(e) {
	return new Ft(e);
}
function Ue(e) {
	return e == null;
}
function We(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Ge(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function Ke(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function qe(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function Je(e) {
	return qe(e._zod.def) ?? e._zod.def.shape;
}
function Ye(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return Ke(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function Xe(e, t, n) {
	t in e ? Ke(e, t, n) : e[t] = n;
}
function Ze(e, t, n, r) {
	let i = Je(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? Ye(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : Xe(e, a, r ? r(n.value, a) : n.value));
	}
}
function Qe(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? Ye(e, n, () => t[n]) : Xe(e, n, r.value));
	}
}
function w(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function $e(e) {
	return JSON.stringify(e);
}
function et(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function tt(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function nt(e) {
	if (tt(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return tt(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function rt(e) {
	return nt(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function it(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function at(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function T(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function ot(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function st(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
function ct(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return Ze(i, e, lt(e, t)), at(e, w(n, {
		shape: i,
		checks: []
	}));
}
function lt(e, t) {
	let n = Je(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function ut(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(lt(e, t)), a = {};
	return Ze(a, e, Reflect.ownKeys(Je(e)).filter((e) => !i.has(e))), at(e, w(n, {
		shape: a,
		checks: []
	}));
}
function dt(e, t) {
	if (!nt(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = Je(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return at(e, w(e._zod.def, { shape: ft(e, t) }));
}
function ft(e, t) {
	let n = {};
	return Ze(n, e, Reflect.ownKeys(Je(e))), Qe(n, t), n;
}
function pt(e, t) {
	if (!nt(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return at(e, w(e._zod.def, { shape: ft(e, t) }));
}
function mt(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return Ze(n, e, Reflect.ownKeys(Je(e))), Ze(n, t, Reflect.ownKeys(Je(t))), at(e, w(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function ht(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(lt(t, n)) : void 0, o = {};
	return Ze(o, t, Reflect.ownKeys(Je(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), at(t, w(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function gt(e, t, n) {
	let r = n ? new Set(lt(t, n)) : void 0, i = {};
	return Ze(i, t, Reflect.ownKeys(Je(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), at(t, w(t._zod.def, { shape: i }));
}
function _t(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function vt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function yt(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function bt(e) {
	return typeof e == "string" ? e : e?.message;
}
function xt(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function St(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : bt(e.inst?._zod.def?.error?.(e)) ?? bt(a?.(e)) ?? bt(t?.error?.(e)) ?? bt(n.customError?.(e)) ?? bt(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
function Ct(e) {
	let t = e.length;
	if (!Vt.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function wt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Tt(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function Et(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function Dt(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : jt(e, n, r.value);
	}
}
function Ot(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function kt(e, t, n) {
	return Ot(e, t, n, !1);
}
function At(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return Ot(this, n, r(this));
			},
			set(e) {
				Ot(this, n, e);
			}
		});
	}
	return t;
}
function jt(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : Ot(this, t, n.bind(this));
		},
		set(e) {
			Ot(this, t, e);
		}
	});
}
function Mt(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
function E(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Ht !== e._zod) {
		Ht = void 0;
		return;
	}
	Ht = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Wt);
			let e = Ut;
			Ut = !1;
			try {
				let r = n(this);
				return Ut ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), Ut ||= e, r;
			} catch (n) {
				throw delete this[t], Ut ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function Nt(e, t, n, r) {
	let i = Mt(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
function Pt(e) {
	let t = () => e;
	return t[Gt] = !0, t;
}
var Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt = C((() => {
	tn(), Ft = class {
		constructor(e) {
			this._getter = e, this._value = void 0;
		}
		get value() {
			let e = this._getter;
			return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
		}
	}, It = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}, Lt = /* @__PURE__*/ He(() => {
		if (en.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
		try {
			return Function(""), !0;
		} catch {
			return !1;
		}
	}), Rt = /* @__PURE__*/ new Set([
		"string",
		"number",
		"symbol"
	]), zt = {
		safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
	}, Bt = {
		int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
		uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
	}, Vt = /[\uD800-\uDBFF]/, Ut = !1, Wt = {
		configurable: !0,
		get() {
			Ut = !0;
		}
	}, Gt = "~constantCatch";
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/core.js
function qt(e) {
	let t = Zt;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Zt = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function D(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Xt.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Xt);
			} finally {
				Xt.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), Dt(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? qt(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
function Jt(e) {
	return e && Object.assign(en, e), en;
}
var Yt, Xt, Zt, Qt, $t, en, tn = C((() => {
	Kt(), Xt = {
		value: void 0,
		enumerable: !1
	}, Zt = "captureStackTrace" in Error ? Error : null, Qt = class extends Error {
		constructor() {
			super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
		}
	}, $t = class extends Error {
		constructor(e) {
			super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
		}
	}, (Yt = globalThis).__zod_globalConfig ?? (Yt.__zod_globalConfig = {}), en = globalThis.__zod_globalConfig;
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/errors.js
function nn() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Ve, 2), e.message;
}
function rn(e) {
	this._zod.message = e;
}
function an(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function on(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? an(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function sn(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
var cn, ln, un, dn, fn, pn = C((() => {
	tn(), Kt(), cn = {
		get: nn,
		set: rn,
		enumerable: !0,
		configurable: !0
	}, ln = {
		value: void 0,
		enumerable: !1
	}, un = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), dn = (e, t) => {
		e.name = "$ZodError", ln.value = t, Object.defineProperty(e, "issues", ln), ln.value = void 0, Object.defineProperty(e, "message", cn);
		let n = Object.getPrototypeOf(e);
		un.has(n) || (un.add(n), Object.defineProperty(n, "toString", {
			configurable: !0,
			enumerable: !1,
			get() {
				let e = () => this.message;
				return Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				}), e;
			},
			set(e) {
				Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				});
			}
		}));
	}, fn = D("$ZodError", dn), D("$ZodError", dn, void 0, { Parent: Error });
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/parse.js
function mn(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
function hn(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => St(e, n, Jt()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
function gn(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[Sn] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new Qt();
	return a.issues.length === 0;
}
var _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn = C((() => {
	tn(), Kt(), _n = (e) => {
		let t = (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !1
			} : { async: !1 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise) throw new Qt();
			if (s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => St(e, o, Jt())));
				throw It(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, vn = (e) => {
		let t = async (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !0
			} : { async: !0 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise && (s = await s), s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => St(e, o, Jt())));
				throw It(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, yn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			async: !1
		} : { async: !1 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (a instanceof Promise) throw new Qt();
		return a.issues.length ? hn(e, a.issues, i) : {
			success: !0,
			data: a.value
		};
	}, bn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			async: !0
		} : { async: !0 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		return a instanceof Promise && (a = await a), a.issues.length ? hn(e, a.issues, i) : {
			success: !0,
			data: a.value
		};
	}, xn = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Sn = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Cn = ((e, t, n) => {
		let r = e._zod.bag.validator;
		if (r !== void 0) {
			if (r(t) !== xn) return !0;
			if (r.definite === !0 && n === void 0) return !1;
		}
		return gn(e, t, n);
	}), wn = async (e, t, n) => {
		let r = n ? {
			...n,
			async: !0,
			abortEarly: !0
		} : {
			async: !0,
			abortEarly: !0
		}, i = e._zod.run({
			value: t,
			issues: []
		}, r);
		return i instanceof Promise && (i = await i), i.issues.length === 0;
	}, Tn = (e) => {
		let t = _n(e), n = (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return t(e, r, o, mn(n, a));
		};
		return n;
	}, En = (e) => {
		let t = _n(e), n = (e, r, i, a) => t(e, r, i, mn(n, a));
		return n;
	}, Dn = (e) => {
		let t = vn(e), n = async (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return await t(e, r, o, mn(n, a));
		};
		return n;
	}, On = (e) => {
		let t = vn(e), n = async (e, r, i, a) => await t(e, r, i, mn(n, a));
		return n;
	}, kn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return yn(e)(t, n, i);
	}, An = (e) => (t, n, r) => yn(e)(t, n, r), jn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return bn(e)(t, n, i);
	}, Mn = (e) => async (t, n, r) => bn(e)(t, n, r);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/regexes.js
function Pn(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
function Fn() {
	return new RegExp(Xn, "u");
}
function In(e) {
	return RegExp(`^${e}$`);
}
function Ln(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Rn(e) {
	return RegExp(`^${Ln(e)}$`);
}
function zn(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Ln({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Ln({ precision: e.precision })}` : n;
	return RegExp(`^${ar}T(?:${r})$`);
}
var Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr = C((() => {
	Bn = /^[cC][0-9a-z]{6,}$/, Vn = /^[0-9a-z]+$/, Hn = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Un = /^[0-9a-vA-V]{20}$/, Wn = /^[A-Za-z0-9]{27}$/, Gn = /^[a-zA-Z0-9_-]{21}$/, Kn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, qn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Jn = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Yn = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Xn = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", Zn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, $n = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, er = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, tr = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, nr = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, rr = /^https?$/, ir = /^\+[1-9]\d{6,14}$/, ar = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", or = /*@__PURE__*/ In(ar), sr = /^[\s\S]{0,}$/, cr = /^-?\d+(?:\.\d+)?$/, lr = /^[^A-Z]*$/, ur = /^[^a-z]*$/;
})), O, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr = C((() => {
	tn(), dr(), Kt(), O = /*@__PURE__*/ D("$ZodCheck", (e, t) => {
		var n;
		e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
	}), fr = (e) => {
		let t = e.value;
		return !Ue(t) && t.length !== void 0;
	}, pr = {
		number: "number",
		bigint: "bigint",
		object: "date"
	}, mr = /*@__PURE__*/ D("$ZodCheckLessThan", (e, t) => {
		O.init(e, t);
		let n = pr[typeof t.value];
		e._zod.check = (r) => {
			(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
				origin: pr[typeof r.value] ?? n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), hr = /*@__PURE__*/ D("$ZodCheckGreaterThan", (e, t) => {
		O.init(e, t);
		let n = pr[typeof t.value];
		e._zod.check = (r) => {
			(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
				origin: pr[typeof r.value] ?? n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), gr = /*@__PURE__*/ D("$ZodCheckMultipleOf", (e, t) => {
		O.init(e, t), e._zod.check = (n) => {
			if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
			(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : Ge(n.value, t.value) === 0) || n.issues.push({
				origin: typeof n.value,
				code: "not_multiple_of",
				divisor: t.value,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), _r = /*@__PURE__*/ D("$ZodCheckNumberFormat", (e, t) => {
		O.init(e, t), t.format = t.format || "float64";
		let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = zt[t.format];
		e._zod.check = (o) => {
			let s = o.value;
			if (n) {
				if (!Number.isInteger(s)) {
					o.issues.push({
						expected: r,
						format: t.format,
						code: "invalid_type",
						continue: !1,
						input: s,
						inst: e
					});
					return;
				}
				if (!Number.isSafeInteger(s)) {
					s > 0 ? o.issues.push({
						input: s,
						code: "too_big",
						maximum: 2 ** 53 - 1,
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					}) : o.issues.push({
						input: s,
						code: "too_small",
						minimum: -(2 ** 53 - 1),
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					});
					return;
				}
			}
			s < i && o.issues.push({
				origin: "number",
				input: s,
				code: "too_small",
				minimum: i,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			}), s > a && o.issues.push({
				origin: "number",
				input: s,
				code: "too_big",
				maximum: a,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			});
		};
	}), vr = /*@__PURE__*/ D("$ZodCheckMaxLength", (e, t) => {
		var n;
		O.init(e, t), (n = e._zod.def).when ?? (n.when = fr), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i > t.maximum ? Ct(r) : i) <= t.maximum) return;
			let a = wt(r);
			n.issues.push({
				origin: a,
				code: "too_big",
				maximum: t.maximum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), yr = /*@__PURE__*/ D("$ZodCheckMinLength", (e, t) => {
		var n;
		O.init(e, t), (n = e._zod.def).when ?? (n.when = fr), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? Ct(r) : i) >= t.minimum) return;
			let a = wt(r);
			n.issues.push({
				origin: a,
				code: "too_small",
				minimum: t.minimum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), br = /*@__PURE__*/ D("$ZodCheckLengthEquals", (e, t) => {
		var n;
		O.init(e, t), (n = e._zod.def).when ?? (n.when = fr), e._zod.check = (n) => {
			let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? Ct(r) : i;
			if (a === t.length) return;
			let o = wt(r), s = a > t.length;
			n.issues.push({
				origin: o,
				...s ? {
					code: "too_big",
					maximum: t.length
				} : {
					code: "too_small",
					minimum: t.length
				},
				inclusive: !0,
				exact: !0,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), xr = /*@__PURE__*/ D("$ZodCheckStringFormat", (e, t) => {
		var n, r;
		O.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: t.format,
				input: n.value,
				...t.pattern ? { pattern: t.pattern.toString() } : {},
				inst: e,
				continue: !t.abort
			});
		}) : (r = e._zod).check ?? (r.check = () => {});
	}), Sr = /*@__PURE__*/ D("$ZodCheckRegex", (e, t) => {
		xr.init(e, t), e._zod.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "regex",
				input: n.value,
				pattern: t.pattern.toString(),
				inst: e,
				continue: !t.abort
			});
		};
	}), Cr = /*@__PURE__*/ D("$ZodCheckLowerCase", (e, t) => {
		t.pattern ??= lr, xr.init(e, t);
	}), wr = /*@__PURE__*/ D("$ZodCheckUpperCase", (e, t) => {
		t.pattern ??= ur, xr.init(e, t);
	}), Tr = /*@__PURE__*/ D("$ZodCheckIncludes", (e, t) => {
		O.init(e, t);
		let n = it(t.includes);
		t.pattern = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n), e._zod.check = (n) => {
			n.value.includes(t.includes, t.position) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "includes",
				includes: t.includes,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Er = /*@__PURE__*/ D("$ZodCheckStartsWith", (e, t) => {
		O.init(e, t);
		let n = RegExp(`^${it(t.prefix)}.*`);
		t.pattern ??= n, e._zod.check = (n) => {
			n.value.startsWith(t.prefix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "starts_with",
				prefix: t.prefix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Dr = /*@__PURE__*/ D("$ZodCheckEndsWith", (e, t) => {
		O.init(e, t);
		let n = RegExp(`.*${it(t.suffix)}$`);
		t.pattern ??= n, e._zod.check = (n) => {
			n.value.endsWith(t.suffix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "ends_with",
				suffix: t.suffix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Or = /*@__PURE__*/ D("$ZodCheckOverwrite", (e, t) => {
		O.init(e, t), e._zod.check = (e) => {
			e.value = t.tx(e.value);
		};
	});
})), Ar, jr = C((() => {
	Ar = class {
		constructor(e = [], t = {}) {
			this.content = [], this.indent = 0, this.args = e, this.closed = t;
		}
		indented(e) {
			this.indent += 1;
			try {
				e(this);
			} finally {
				--this.indent;
			}
		}
		write(e) {
			if (typeof e == "function") {
				e(this, { execution: "sync" }), e(this, { execution: "async" });
				return;
			}
			let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
			for (let e of r) this.content.push(e);
		}
		compile() {
			let e = Function, t = this?.content ?? [""];
			return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
		}
	};
})), Mr, Nr = C((() => {
	Mr = {
		major: 4,
		minor: 6,
		patch: 5
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/schemas.js
async function Pr(e, t) {
	let n = { async: !0 };
	return si(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function Fr(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return si(r, n);
			} catch {}
			return Pr(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
function Ir(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Lr(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? Ir(e) || 2 : Rr(e, t);
}
function Rr(e, t) {
	if (!t.normalize && t.protocol?.source === rr.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		if (typeof URL < "u") {
			let t = URL;
			if (typeof t.parse == "function") return t.parse(e) ?? 2;
		}
		return new URL(e);
	} catch {
		return 2;
	}
}
function zr(e) {
	return e.replace(fi, "");
}
function Br(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Vr(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
function Hr(e) {
	return Ei.test(e) ? Ir(`http://[${e}]`) : !1;
}
function Ur(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Hr(n);
}
function Wr(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Gr(e) {
	if (!Mi.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Wr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function Kr(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
function qr(e, t, n) {
	e.issues.length && t.issues.push(...yt(n, e.issues)), t.value[n] = e.value;
}
function Jr(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...yt(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? (o || i === "defaulted" && !s) && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
function Yr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Vi, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = st(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Xr(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (_t(n, p)) break;
			p = n.issues.length;
		}
		if (c.has(i)) continue;
		if (i === "__proto__") {
			u === "never" && s.push(i);
			continue;
		}
		if (u === "never") {
			s.push(i);
			continue;
		}
		let a = l.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Jr(e, n, i, t, d, f))) : Jr(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Zr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !_t(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => St(e, r, Jt())))
	}), t);
}
function Qr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (nt(e) && nt(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Qr(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Qr(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function $r(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = Qr(t.value, n.value);
	if (!c.valid) {
		if (_t(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
function ei(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
function ti(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function ni(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function ri(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => St(e, r, Jt())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
function ii(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function ai(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
function oi(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(Et(e));
	}
}
var k, si, ci, A, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa = C((() => {
	kr(), tn(), jr(), dr(), Kt(), Nr(), k = /*@__PURE__*/ D("$ZodType", (e, t) => {
		var n;
		e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Mr;
		let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
		for (let t of i) for (let n of t._zod.onattach) n(e);
		if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
			e._zod.run = e._zod.parse;
		});
		else {
			let t = (t, n, r) => {
				if (t.memo) return t;
				let i = _t(t), a;
				for (let o of n) {
					if (o._zod.def.when) {
						if (vt(t) || !o._zod.def.when(t)) continue;
					} else if (i) continue;
					let n = t.issues.length, s = o._zod.check(t);
					if (s instanceof Promise && r?.async === !1) throw new Qt();
					if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
						await s, t.issues.length !== n && (xt(t.issues, n, e), i ||= _t(t, n));
					});
					else {
						if (t.issues.length === n) continue;
						xt(t.issues, n, e), i ||= _t(t, n);
					}
				}
				return a ? a.then(() => t) : t;
			}, n = (n, r, a) => {
				if (_t(n)) return n.aborted = !0, n;
				let o = t(r, i, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Qt();
					return o.then((t) => e._zod.parse(t, a));
				}
				return e._zod.parse(o, a);
			};
			e._zod.run = (r, a) => {
				if (a.skipChecks) return e._zod.parse(r, a);
				if (a.direction === "backward") {
					let t = e._zod.parse({
						value: r.value,
						issues: []
					}, {
						...a,
						skipChecks: !0
					});
					return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
				}
				let o = e._zod.parse(r, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Qt();
					return o.then((e) => t(e, i, a));
				}
				return t(o, i, a);
			};
		}
	}, {
		get "~standard"() {
			return kt(this, "~standard", Fr(this));
		},
		set "~standard"(e) {
			Ot(this, "~standard", e);
		}
	}), si = (e, t) => e.issues.length ? { issues: e.issues.map((e) => St(e, t, Jt())) } : { value: e.value }, ci = /*@__PURE__*/ D("$ZodString", (e, t) => {
		k.init(e, t), e._zod.pattern = t.pattern ?? sr, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = String(n.value);
			} catch {}
			return typeof n.value == "string" || n.issues.push({
				expected: "string",
				code: "invalid_type",
				input: n.value,
				inst: e
			}), n;
		};
	}), A = /*@__PURE__*/ D("$ZodStringFormat", (e, t) => {
		xr.init(e, t), ci.init(e, t);
	}), li = /*@__PURE__*/ D("$ZodGUID", (e, t) => {
		t.pattern ??= qn, A.init(e, t);
	}), ui = /*@__PURE__*/ D("$ZodUUID", (e, t) => {
		if (t.version) {
			let e = {
				v1: 1,
				v2: 2,
				v3: 3,
				v4: 4,
				v5: 5,
				v6: 6,
				v7: 7,
				v8: 8
			}[t.version];
			if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
			t.pattern ??= Jn(e);
		} else t.pattern ??= Jn();
		A.init(e, t);
	}), di = /*@__PURE__*/ D("$ZodEmail", (e, t) => {
		t.pattern ??= Yn, A.init(e, t);
	}), fi = /[\t\n\r]/g, pi = /*@__PURE__*/ D("$ZodURL", (e, t) => {
		A.init(e, t), e._zod.check = (n) => {
			try {
				let r = n.value.trim(), i = Lr(r, t);
				if (i === 1) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				if (i === 2) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				if (i === !0) {
					n.value = zr(r);
					return;
				}
				t.hostname && !Br(i, t.hostname) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), t.protocol && !Vr(i, t.protocol) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), n.value = t.normalize ? i.href : zr(r);
				return;
			} catch {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
			}
		};
	}), mi = /*@__PURE__*/ D("$ZodEmoji", (e, t) => {
		t.pattern ??= Fn(), A.init(e, t);
	}), hi = /*@__PURE__*/ D("$ZodNanoID", (e, t) => {
		if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
		t.pattern ??= t.length === void 0 ? Gn : Pn(t.length), A.init(e, t);
	}), gi = /*@__PURE__*/ D("$ZodCUID", (e, t) => {
		t.pattern ??= Bn, A.init(e, t);
	}), _i = /*@__PURE__*/ D("$ZodCUID2", (e, t) => {
		t.pattern ??= Vn, A.init(e, t);
	}), vi = /*@__PURE__*/ D("$ZodULID", (e, t) => {
		t.pattern ??= Hn, A.init(e, t);
	}), yi = /*@__PURE__*/ D("$ZodXID", (e, t) => {
		t.pattern ??= Un, A.init(e, t);
	}), bi = /*@__PURE__*/ D("$ZodKSUID", (e, t) => {
		t.pattern ??= Wn, A.init(e, t);
	}), xi = /*@__PURE__*/ D("$ZodISODateTime", (e, t) => {
		t.pattern ??= zn(t), A.init(e, t);
	}), Si = /*@__PURE__*/ D("$ZodISODate", (e, t) => {
		t.pattern ??= or, A.init(e, t);
	}), Ci = /*@__PURE__*/ D("$ZodISOTime", (e, t) => {
		t.pattern ??= Rn(t), A.init(e, t);
	}), wi = /*@__PURE__*/ D("$ZodISODuration", (e, t) => {
		t.pattern ??= Kn, A.init(e, t);
	}), Ti = /*@__PURE__*/ D("$ZodIPv4", (e, t) => {
		t.pattern ??= Zn, A.init(e, t);
	}), Ei = /^[0-9a-fA-F:.]+$/, Di = /*@__PURE__*/ D("$ZodIPv6", (e, t) => {
		t.pattern ??= Qn, A.init(e, t), e._zod.check = (n) => {
			Hr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Oi = /*@__PURE__*/ D("$ZodCIDRv4", (e, t) => {
		t.pattern ??= $n, A.init(e, t);
	}), ki = /*@__PURE__*/ D("$ZodCIDRv6", (e, t) => {
		t.pattern ??= er, A.init(e, t), e._zod.check = (n) => {
			Ur(n.value) || n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Ai = /^[0-9a-zA-Z+/]*={0,2}$/, ji = /*@__PURE__*/ D("$ZodBase64", (e, t) => {
		t.pattern ??= Ai, A.init(e, t), e._zod.check = (n) => {
			Wr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Mi = /^[A-Za-z0-9_-]*$/, Ni = /*@__PURE__*/ D("$ZodBase64URL", (e, t) => {
		t.pattern ??= Mi, A.init(e, t), e._zod.check = (n) => {
			Gr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Pi = /*@__PURE__*/ D("$ZodE164", (e, t) => {
		t.pattern ??= ir, A.init(e, t);
	}), Fi = /*@__PURE__*/ D("$ZodJWT", (e, t) => {
		A.init(e, t), e._zod.check = (n) => {
			Kr(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Ii = /*@__PURE__*/ D("$ZodNumber", (e, t) => {
		k.init(e, t), e._zod.pattern = cr, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = Number(n.value);
			} catch {}
			let i = n.value;
			if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
			let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
			return n.issues.push({
				expected: "number",
				code: "invalid_type",
				input: i,
				inst: e,
				...a ? { received: a } : {}
			}), n;
		};
	}), Li = /*@__PURE__*/ D("$ZodNumberFormat", (e, t) => {
		_r.init(e, t), Ii.init(e, t);
	}), Ri = /*@__PURE__*/ D("$ZodUnknown", (e, t) => {
		k.init(e, t), e._zod.parse = (e) => e;
	}), zi = /*@__PURE__*/ D("$ZodNever", (e, t) => {
		k.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
			expected: "never",
			code: "invalid_type",
			input: t.value,
			inst: e
		}), t);
	}), Bi = /*@__PURE__*/ D("$ZodArray", (e, t) => {
		k.init(e, t);
		let n = en.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Array.isArray(a)) return r.issues.push({
				expected: "array",
				code: "invalid_type",
				input: a,
				inst: e
			}), r;
			r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
			let o = [], s = i?.abortEarly;
			for (let e = 0; e < a.length; e++) {
				let n = a[e], c = t.element._zod.run({
					value: n,
					issues: []
				}, i);
				if (c instanceof Promise) o.push(c.then((t) => qr(t, r, e)));
				else if (qr(c, r, e), s && c.issues.length !== 0 && _t(c)) break;
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Vi = [], Hi = /*@__PURE__*/ D("$ZodObject", (e, t) => {
		k.init(e, t);
		let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
		if (r) {
			let e = () => {
				let n = { ...r };
				return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
			};
			e.raw = r, Object.defineProperty(t, "shape", { get: e });
		}
		let i = He(() => Yr(t));
		E(e, "propValues", (e) => {
			let t = e.def.shape, n = {};
			for (let e in t) {
				let r = t[e]._zod;
				if (r.values) {
					Object.prototype.hasOwnProperty.call(n, e) || Ke(n, e, /* @__PURE__ */ new Set());
					for (let t of r.values) n[e].add(t);
					r.optin !== void 0 && n[e].add(void 0);
				}
			}
			return n;
		});
		let a = tt, o = t.catchall, s, c = en.memoizer;
		c?.attach(e), e._zod.parse = (t, n) => {
			s ??= i.value;
			let r = t.value;
			if (!a(r)) return t.issues.push({
				expected: "object",
				code: "invalid_type",
				input: r,
				inst: e
			}), t;
			t.value = c ? c.alloc(e, t, {}, n) : {};
			let l = [], u = s.shape, d = n?.abortEarly, f = t.issues.length;
			for (let e of s.allKeys) {
				if (d && t.issues.length !== f) {
					if (_t(t, f)) break;
					f = t.issues.length;
				}
				if (e === "__proto__") continue;
				let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
					value: r[e],
					issues: []
				}, n);
				s instanceof Promise ? l.push(s.then((n) => Jr(n, t, e, r, a, o))) : Jr(s, t, e, r, a, o);
			}
			return o ? Xr(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
		};
	}), Ui = /*@__PURE__*/ D("$ZodObjectJIT", (e, t) => {
		Hi.init(e, t);
		let n = e._zod.parse, r = He(() => Yr(t)), i = en.memoizer, a = (t) => {
			let n = r.value, a = n.symbolKeys, o = new Ar(["payload", "ctx"], {
				shape: t,
				inst: e,
				memo: i,
				syms: a
			}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
			o.write("const input = payload.value;");
			let l = Object.create(null), u = 0;
			for (let e of n.allKeys) l[e] = `key_${u++}`;
			o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
			for (let e of n.allKeys) {
				if (e === "__proto__") continue;
				let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : $e(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
				if (o.write(`const ${n} = ${s(r)};`), f && p) {
					let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
				} else f ? (o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
      `), d === "defaulted" ? o.write(`newResult[${r}] = ${n}.value;`) : o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
			}
			return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
		}, o, s = tt, c = !en.jitless, l = c && Lt.value, u = t.catchall, d;
		e._zod.parse = (i, f) => {
			d ??= r.value;
			let p = i.value;
			return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Xr([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
				expected: "object",
				code: "invalid_type",
				input: p,
				inst: e
			}), i);
		};
	}), Wi = /*@__PURE__*/ D("$ZodUnion", (e, t) => {
		k.init(e, t), E(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), E(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), E(e, "values", (e) => {
			if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
		}), E(e, "pattern", (e) => {
			if (e.def.options.every((e) => e._zod.pattern)) {
				let t = e.def.options.map((e) => e._zod.pattern);
				return RegExp(`^(${t.map((e) => We(e.source)).join("|")})$`);
			}
		});
		let n = t.options.length === 1 ? t.options[0]._zod.run : null;
		e._zod.parse = (r, i) => {
			if (n) return n(r, i);
			let a = !1, o = [];
			for (let e of t.options) {
				let t = e._zod.run({
					value: r.value,
					issues: []
				}, i);
				if (t instanceof Promise) o.push(t), a = !0;
				else {
					if (t.issues.length === 0) return t;
					o.push(t);
				}
			}
			return a ? Promise.all(o).then((t) => Zr(t, r, e, i)) : Zr(o, r, e, i);
		};
	}), Gi = /*@__PURE__*/ D("$ZodIntersection", (e, t) => {
		k.init(e, t), e._zod.parse = (e, n) => {
			let r = e.value, i = t.left._zod.run({
				value: r,
				issues: []
			}, n), a = t.right._zod.run({
				value: r,
				issues: []
			}, n);
			return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => $r(e, t, n)) : $r(e, i, a);
		};
	}), Ki = /*@__PURE__*/ D("$ZodEnum", (e, t) => {
		k.init(e, t);
		let n = ze(t.entries), r = new Set(n);
		e._zod.values = r, E(e, "pattern", (e) => {
			let t = ze(e.def.entries).filter((e) => Rt.has(typeof e));
			return RegExp(t.length ? `^(${t.map((e) => it(e.toString())).join("|")})$` : "^[^\\s\\S]$");
		}), e._zod.parse = (t, i) => {
			let a = t.value;
			return r.has(a) || t.issues.push({
				code: "invalid_value",
				values: n,
				input: a,
				inst: e
			}), t;
		};
	}), qi = /*@__PURE__*/ D("$ZodLiteral", (e, t) => {
		k.init(e, t);
		let n = new Set(t.values);
		e._zod.values = n, E(e, "pattern", (e) => {
			let t = e.def.values;
			return RegExp(t.length ? `^(${t.map((e) => typeof e == "string" ? it(e) : e ? it(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$");
		}), e._zod.parse = (r, i) => {
			let a = r.value;
			return n.has(a) || r.issues.push({
				code: "invalid_value",
				values: t.values,
				input: a,
				inst: e
			}), r;
		};
	}), Ji = /*@__PURE__*/ D("$ZodTransform", (e, t) => {
		k.init(e, t), e._zod.optin = "optional", en.memoizer?.guard(e), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new $t(e.constructor.name);
			let i = t.transform(n.value, n);
			if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
			if (i instanceof Promise) throw new Qt();
			return n.value = i, n;
		};
	}), Yi = /*@__PURE__*/ D("$ZodOptional", (e, t) => {
		k.init(e, t), E(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", E(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
		}), E(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${We(t.source)})?$`) : void 0;
		}), e._zod.parse = (e, n) => {
			if (e.value === void 0) {
				if (t.innerType._zod.optin !== "defaulted") return e;
				let r = t.innerType._zod.run({
					value: e.value,
					issues: []
				}, n);
				return r instanceof Promise ? r.then((t) => ei(e, t)) : ei(e, r);
			}
			return t.innerType._zod.run(e, n);
		};
	}), Xi = /*@__PURE__*/ D("$ZodExactOptional", (e, t) => {
		Yi.init(e, t), E(e, "values", (e) => e.def.innerType._zod.values), E(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
	}), Zi = /*@__PURE__*/ D("$ZodNullable", (e, t) => {
		k.init(e, t), E(e, "optin", (e) => e.def.innerType._zod.optin), E(e, "optout", (e) => e.def.innerType._zod.optout), E(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${We(t.source)}|null)$`) : void 0;
		}), E(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
	}), Qi = /*@__PURE__*/ D("$ZodDefault", (e, t) => {
		k.init(e, t), e._zod.optin = "defaulted", E(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			if (e.value === void 0) return e.value = t.defaultValue, e;
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => ti(e, t)) : ti(r, t);
		};
	}), $i = /*@__PURE__*/ D("$ZodPrefault", (e, t) => {
		k.init(e, t), e._zod.optin = "defaulted", E(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
	}), ea = /*@__PURE__*/ D("$ZodNonOptional", (e, t) => {
		k.init(e, t), E(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
		}), e._zod.parse = (n, r) => {
			let i = t.innerType._zod.run(n, r);
			return i instanceof Promise ? i.then((t) => ni(t, e)) : ni(i, e);
		};
	}), ta = /*@__PURE__*/ D("$ZodCatch", (e, t) => {
		k.init(e, t), E(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), E(e, "optout", (e) => e.def.innerType._zod.optout), E(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((r) => ri(e, r, t, n)) : ri(e, r, t, n);
		};
	}), na = /*@__PURE__*/ D("$ZodPipe", (e, t) => {
		k.init(e, t), E(e, "values", (e) => e.def.in._zod.values), E(e, "optin", (e) => e.def.in._zod.optin), E(e, "optout", (e) => e.def.out._zod.optout), E(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if (n.direction === "backward") {
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => ii(e, t.in, n)) : ii(r, t.in, n);
			}
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => ii(e, t.out, n)) : ii(r, t.out, n);
		};
	}), ra = /*@__PURE__*/ D("$ZodReadonly", (e, t) => {
		k.init(e, t), E(e, "propValues", (e) => e.def.innerType._zod.propValues), E(e, "values", (e) => e.def.innerType._zod.values), E(e, "optin", (e) => e.def.innerType?._zod?.optin), E(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then(ai) : ai(r);
		};
	}), ia = /*@__PURE__*/ D("$ZodCustom", (e, t) => {
		O.init(e, t), k.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
			let r = n.value, i = t.fn(r);
			if (i instanceof Promise) return i.then((t) => oi(t, n, r, e));
			oi(i, n, r, e);
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/memoizer.js
function oa(e) {
	return typeof e == "object" && !!e;
}
function sa(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
function ca(e, t, n) {
	let r = ga.get(e);
	if (r !== void 0) return r ? ya : _a;
	if (t.has(e)) return ya;
	t.add(e);
	let i = _a, a = (e) => {
		if (i !== ya && e?._zod) {
			let r = ca(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = _a;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? va : o.value?._zod ? ca(o.value, t, n) : _a;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = qe(c);
			s(e ? o(e, !0) : va), a(c.catchall);
			break;
		}
		case "array":
			a(c.element);
			break;
		case "tuple":
			for (let e of c.items) a(e);
			a(c.rest);
			break;
		case "record":
		case "map":
			a(c.keyType), a(c.valueType);
			break;
		case "set":
			a(c.valueType);
			break;
		case "union":
			for (let e of c.options) a(e);
			break;
		case "intersection":
			a(c.left), a(c.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			a(c.innerType);
			break;
		case "pipe":
			a(c.in), a(c.out);
			break;
		case "function":
			a(c.input), a(c.output);
			break;
		case "lazy": {
			let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
			s(r ? ca(r, t, !1) : va);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in c) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) a(n);
				else if (Array.isArray(n)) for (let e of n) a(e);
			}
		}
	}
	return t.delete(e), la(e, i);
}
function la(e, t) {
	return t !== va && ga.set(e, t === ya), t;
}
function ua(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
function da() {
	return Sa;
}
function fa(e, t) {
	let n = e[ma]?.backEdges;
	return n !== void 0 && oa(t) && n.has(t);
}
var pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca = C((() => {
	Kt(), pa = class extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
		}
	}, ma = "~memo", ha = [], ga = /*@__PURE__*/ new WeakMap(), _a = 0, va = 1, ya = 2, xa = [], Sa = {
		alloc(e, t, n) {
			let r = ba;
			if (!r) return n;
			ba = void 0;
			let i = {
				value: n,
				issues: null
			};
			return r.set(t.value, i), xa.push(i), n;
		},
		guard(e) {
			var t;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, n = (e, n) => {
					if (n.direction !== "backward" && fa(n, e.value)) throw new pa();
					return t(e, n);
				};
				e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
			});
		},
		attach(e) {
			var t;
			let n, r = !1, i, a;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, o = (s, c) => {
					if (n === void 0) {
						let i = ca(e, /* @__PURE__ */ new Set(), !1);
						if (i === _a) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
						i === ya || r ? n = !0 : r = !0;
					}
					let l = s.value;
					if (!oa(l)) return t(s, c);
					let u = c[ma];
					u || (u = {
						buckets: /* @__PURE__ */ new WeakMap(),
						backEdges: void 0
					}, c[ma] = u);
					let d;
					i === c ? d = a : (d = ua(u, e), i = c, a = d);
					let f = d.get(l);
					if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...sa(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
					ba = d;
					let p = xa.length, m = t(s, c);
					ba = void 0;
					let ee = xa.length > p ? xa.pop() : void 0;
					return m instanceof Promise ? m.then((e) => (ee && (ee.issues = e.issues.length ? sa(e.issues) : ha), e)) : (ee && (ee.issues = m.issues.length ? sa(m.issues) : ha), m);
				};
				e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
			});
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/locales/en.js
function wa() {
	return { localeError: Ta() };
}
var Ta, Ea = C((() => {
	Kt(), Ta = () => {
		let e = {
			string: {
				unit: "characters",
				verb: "to have"
			},
			file: {
				unit: "bytes",
				verb: "to have"
			},
			array: {
				unit: "items",
				verb: "to have"
			},
			set: {
				unit: "items",
				verb: "to have"
			},
			map: {
				unit: "entries",
				verb: "to have"
			}
		};
		function t(t) {
			return e[t] ?? null;
		}
		let n = {
			regex: "input",
			email: "email address",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datetime",
			date: "ISO date",
			time: "ISO time",
			duration: "ISO duration",
			ipv4: "IPv4 address",
			ipv6: "IPv6 address",
			mac: "MAC address",
			cidrv4: "IPv4 range",
			cidrv6: "IPv6 range",
			base64: "base64-encoded string",
			base64url: "base64url-encoded string",
			json_string: "JSON string",
			e164: "E.164 number",
			currency_code: "currency code",
			credit_card: "credit card number",
			iban: "IBAN",
			jwt: "JWT",
			template_literal: "input"
		}, r = { nan: "NaN" };
		function i(e, t) {
			return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
		}
		return (e) => {
			switch (e.code) {
				case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(Tt(e.input), e.input)}`;
				case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${ot(e.values[0])}` : `Invalid option: expected one of ${Be(e.values, "|")}`;
				case "too_big": {
					let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
					return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
				}
				case "too_small": {
					let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
					return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
				}
				case "invalid_format": {
					let t = e;
					return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
				}
				case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
				case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Be(e.keys, ", ")}`;
				case "invalid_key": return `Invalid key in ${e.origin}`;
				case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
				case "invalid_element": return `Invalid value in ${e.origin}`;
				default: return "Invalid input";
			}
		};
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/registries.js
function Da() {
	return new ka();
}
var Oa, ka, Aa, ja = C((() => {
	ka = class {
		constructor() {
			this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
		}
		add(e, ...t) {
			let n = t[0];
			return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
		}
		clear() {
			return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
		}
		remove(e) {
			let t = this._map.get(e);
			return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
		}
		get(e) {
			let t = e._zod.parent;
			if (t) {
				let n = { ...this.get(t) ?? {} };
				delete n.id;
				let r = {
					...n,
					...this._map.get(e)
				};
				return Object.keys(r).length ? r : void 0;
			}
			return this._map.get(e);
		}
		has(e) {
			return this._map.has(e);
		}
	}, (Oa = globalThis).__zod_globalRegistry ?? (Oa.__zod_globalRegistry = Da()), Aa = globalThis.__zod_globalRegistry;
})), Ma = C((() => {}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/api.js
function Na(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
	return new e(Na({
		type: "string",
		...T(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ra(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
	return new e(Na({
		type: "number",
		checks: [],
		...T(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function co(e, t) {
	return new e(Na({
		type: "number",
		coerce: !0,
		checks: [],
		...T(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
	return new e({
		type: "never",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
	return new mr({
		check: "less_than",
		...T(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function mo(e, t) {
	return new mr({
		check: "less_than",
		...T(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function ho(e, t) {
	return new hr({
		check: "greater_than",
		...T(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function go(e, t) {
	return new hr({
		check: "greater_than",
		...T(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function _o(e, t) {
	return new gr({
		check: "multiple_of",
		...T(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
	return new vr({
		check: "max_length",
		...T(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function yo(e, t) {
	return new yr({
		check: "min_length",
		...T(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function bo(e, t) {
	return new br({
		check: "length_equals",
		...T(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function xo(e, t) {
	return new Sr({
		check: "string_format",
		format: "regex",
		...T(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function So(e) {
	return new Cr({
		check: "string_format",
		format: "lowercase",
		...T(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Co(e) {
	return new wr({
		check: "string_format",
		format: "uppercase",
		...T(e)
	});
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
	return new Tr({
		check: "string_format",
		format: "includes",
		...T(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function To(e, t) {
	return new Er({
		check: "string_format",
		format: "starts_with",
		...T(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t) {
	return new Dr({
		check: "string_format",
		format: "ends_with",
		...T(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Do(e) {
	return new Or({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Oo(e) {
	return /* @__PURE__ */ Do((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function ko() {
	return /* @__PURE__ */ Do((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Ao() {
	return /* @__PURE__ */ Do((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function jo() {
	return /* @__PURE__ */ Do((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Mo() {
	return /* @__PURE__ */ Do((e) => et(e));
}
// @__NO_SIDE_EFFECTS__
function No(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...T(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Po(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...T(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Fo(e, t) {
	let n = /* @__PURE__ */ Io((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(Et(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(Et(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Io(e, t) {
	let n = new O({
		check: "custom",
		...T(t)
	});
	return n._zod.check = e, n;
}
var Lo = C((() => {
	kr(), Kt();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/to-json-schema.js
function Ro(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && Ke(e, t, n[t]);
	return e;
}
function zo(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Aa,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function Bo(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function j(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, j(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Ro(o.schema, c), t.io === "input" && M(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Vo(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Ho(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${Vo(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Vo(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		r.count > 1 && e.reused === "ref" && a(n);
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Uo(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Uo(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
function Wo(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Go(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Jo.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Wo(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			Ke(n, r, e.length === 1 ? e[0] : Go(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = Wo(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Ko(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Jo) if (t in e) return;
	let n = t.filter((e) => Yo.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Go(t);
	else {
		let e = n[0], i = Yo.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Go([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Ro(e, r));
}
function qo(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Ro(i, s), Ro(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Uo(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) Ko(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Ro(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, Ke(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Zo(t, "input", e.processors),
					output: Zo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function M(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return M(r.element, n);
	if (r.type === "set") return M(r.valueType, n);
	if (r.type === "lazy") return M(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return M(r.innerType, n);
	if (r.type === "intersection") return M(r.left, n) || M(r.right, n);
	if (r.type === "record" || r.type === "map") return M(r.keyType, n) || M(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : M(r.in, n) || M(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (M(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (M(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (M(e, n)) return !0;
		return !!(r.rest && M(r.rest, n));
	}
	return !1;
}
var Jo, Yo, Xo, Zo, Qo = C((() => {
	ja(), Kt(), Jo = /* @__PURE__ */ new Set([
		"type",
		"properties",
		"required",
		"additionalProperties"
	]), Yo = ["oneOf", "anyOf"], Xo = (e, t = {}) => (n) => {
		let r = zo({
			...n,
			processors: t
		});
		return j(e, r), Ho(r, e), qo(r, e);
	}, Zo = (e, t, n = {}) => (r) => {
		let { libraryOptions: i, target: a } = r ?? {}, o = zo({
			...i ?? {},
			target: a,
			io: t,
			processors: n
		});
		return j(e, o), Ho(o, e), qo(o, e);
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/json-schema-processors.js
function $o(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) fs[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && ns(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && ns(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && rs(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && rs(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && as(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && ss(t, i.mime);
	for (let e of i.patterns ?? []) os(t, e);
	return t;
}
function es(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? es(t.out) : t.type === "catch" ? es(t.innerType) : e._zod.optin;
}
function ts(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (Bo(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), As) : JSON.parse(o);
}
var ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps, Fs, Is, Ls = C((() => {
	dr(), aa(), Qo(), Kt(), ns = (e, t, n) => {
		(e[t] === void 0 || n > e[t]) && (e[t] = n);
	}, rs = (e, t, n) => {
		(e[t] === void 0 || n < e[t]) && (e[t] = n);
	}, is = (e, t) => {
		ns(e, "minimum", t), rs(e, "maximum", t);
	}, as = (e, t) => {
		e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
	}, os = (e, t) => {
		e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
	}, ss = (e, t) => {
		e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
	}, cs = (e, t) => {
		e.format = t, t.includes("int") && (e.isInt = !0);
	}, ls = (e, t) => ns(e, "minimum", t.minimum), us = (e, t) => rs(e, "maximum", t.maximum), ds = (e) => (t, n) => {
		cs(t, n.format);
		let [r, i] = e[n.format];
		ns(t, "minimum", r), rs(t, "maximum", i);
	}, fs = {
		greater_than: (e, t) => ns(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
		less_than: (e, t) => rs(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
		multiple_of: (e, t) => as(e, t.value),
		number_format: ds(zt),
		bigint_format: ds(Bt),
		min_length: ls,
		max_length: us,
		length_equals: (e, t) => is(e, t.length),
		min_size: ls,
		max_size: us,
		size_equals: (e, t) => is(e, t.size),
		string_format: (e, t) => {
			cs(e, t.format), t.pattern && os(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
		},
		mime_type: (e, t) => ss(e, t.mime)
	}, ps = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	}, ms = /* @__PURE__ */ new Map([[Ai, tr], [Mi, nr]]), hs = (e) => ms.get(e) ?? e, gs = (e, t, n, r) => {
		let i = n;
		i.type = "string";
		let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = $o(e);
		if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = ps[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
			let e = [...c].map(hs);
			e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	}, _s = (e, t, n, r) => {
		let i = n, { minimum: a, maximum: o, multipleOf: s, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = $o(e);
		i.type = u ? "integer" : "number";
		let d = typeof l == "number" && l >= (a ?? -Infinity), f = typeof c == "number" && c <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
		if (d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), s) {
			let n = /* @__PURE__ */ new Set();
			for (let a of s) Number.isFinite(a) && a !== 0 ? n.add(Math.abs(a)) : Bo(e, t, i, r, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
			let [a, ...o] = n;
			a !== void 0 && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ?? [], ...o.map((e) => ({ multipleOf: e }))]);
		}
	}, vs = (e, t, n, r) => {
		n.not = {};
	}, ys = (e, t, n, r) => {}, bs = (e, t, n, r) => {
		let i = e._zod.def, a = ze(i.entries);
		if (a.length === 0) {
			n.not = {};
			return;
		}
		a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
	}, xs = (e, t, n, r) => {
		let i = e._zod.def;
		if (i.values.length === 0) {
			n.not = {};
			return;
		}
		let a = [];
		for (let o of i.values) if (o === void 0) {
			if (Bo(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
		} else if (typeof o == "bigint") {
			if (Bo(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
			a.push(Number(o));
		} else a.push(o);
		if (a.length !== 0) {
			if (a.length === 1) {
				let e = a[0];
				n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
			} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
		}
	}, Ss = (e, t, n, r) => {
		Bo(e, t, n, r, "Custom types cannot be represented in JSON Schema");
	}, Cs = (e, t, n, r) => {
		Bo(e, t, n, r, "Transforms cannot be represented in JSON Schema");
	}, ws = (e, t, n, r) => {
		let i = n, a = e._zod.def, { minimum: o, maximum: s } = $o(e);
		typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = j(a.element, t, {
			...r,
			path: [...r.path, "items"]
		});
	}, Ts = (e, t, n, r) => {
		let i = n, a = e._zod.def, o = a.shape;
		if (Object.getOwnPropertySymbols(o).length && Bo(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (let e in o) Ke(i.properties, e, j(o[e], t, {
			...r,
			path: [
				...r.path,
				"properties",
				e
			]
		}));
		let s = [];
		for (let e of Object.keys(o)) {
			let n = a.shape[e];
			(t.io === "input" ? es(n) === void 0 : n._zod.optout === void 0) && s.push(e);
		}
		s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = j(a.catchall, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		})) : t.io === "output" && (i.additionalProperties = !1);
	}, Es = (e, t, n, r) => {
		let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => j(e, t, {
			...r,
			path: [
				...r.path,
				a ? "oneOf" : "anyOf",
				n
			]
		}));
		a ? n.oneOf = o : n.anyOf = o;
	}, Ds = (e, t, n, r) => {
		let i = e._zod.def, a = j(i.left, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				0
			]
		}), o = j(i.right, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				1
			]
		}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
		n.allOf = c, t.intersections.push(c);
	}, Os = (e, t, n, r) => {
		let i = e._zod.def, a = j(i.innerType, t, r), o = t.seen.get(e);
		t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
	}, ks = (e, t, n, r) => {
		let i = e._zod.def;
		j(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, As = Symbol(), js = (e, t, n, r) => {
		let i = e._zod.def;
		j(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o = ts(i.defaultValue, e, t, n, r);
		o !== As && (n.default = o);
	}, Ms = (e, t, n, r) => {
		let i = e._zod.def;
		j(i.innerType, t, r);
		let a = t.seen.get(e);
		if (a.ref = i.innerType, t.io !== "input") return;
		let o = ts(i.defaultValue, e, t, n, r);
		o !== As && (n._prefault = o);
	}, Ns = (e, t, n, r) => {
		let i = e._zod.def;
		j(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o;
		try {
			o = i.catchValue(void 0);
		} catch {
			Bo(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = o;
	}, Ps = (e, t, n, r) => {
		let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
		j(o, t, r);
		let s = t.seen.get(e);
		s.ref = o;
	}, Fs = (e, t, n, r) => {
		let i = e._zod.def;
		j(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType, n.readOnly = !0;
	}, Is = (e, t, n, r) => {
		let i = e._zod.def;
		j(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	};
})), Rs = C((() => {
	tn(), Nn(), pn(), aa(), Ca(), kr(), Nr(), Kt(), dr(), Ea(), ja(), jr(), Ma(), Lo(), Qo(), Ls(), Qo();
})), zs = C((() => {
	Rs();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/errors.js
function Bs(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var Vs, Hs, N, Us = C((() => {
	Rs(), Kt(), Vs = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Hs = (e, t) => {
		fn.init(e, t), e.name = "ZodError";
		let n = Object.getPrototypeOf(e);
		Vs.has(n) || (Vs.add(n), Bs(n, "format", (e) => (t) => sn(e, t)), Bs(n, "flatten", (e) => (t) => on(e, t)), Bs(n, "addIssue", (e) => (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Ve, 2);
		}), Bs(n, "addIssues", (e) => (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Ve, 2);
		}), Object.defineProperty(n, "isEmpty", {
			configurable: !0,
			enumerable: !1,
			get() {
				return this.issues.length === 0;
			}
		}));
	}, N = /*@__PURE__*/ D("ZodError", Hs, void 0, { Parent: Error });
})), Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc = C((() => {
	Rs(), Us(), Ws = /* @__PURE__ */ _n(N), Gs = /* @__PURE__ */ vn(N), Ks = /* @__PURE__ */ yn(N), qs = /* @__PURE__ */ bn(N), Js = /* @__PURE__ */ Tn(N), Ys = /* @__PURE__ */ En(N), Xs = /* @__PURE__ */ Dn(N), Zs = /* @__PURE__ */ On(N), Qs = /* @__PURE__ */ kn(N), $s = /* @__PURE__ */ An(N), ec = /* @__PURE__ */ jn(N), tc = /* @__PURE__ */ Mn(N);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/schemas.js
function rc() {
	en.localeError || Jt(wa());
}
function ic() {
	en.memoizer || Jt({ memoizer: da() });
}
function P(e) {
	return /* @__PURE__ */ Pa(Ec, e);
}
function ac(e) {
	return /* @__PURE__ */ so(Xc, e);
}
function oc(e) {
	return /* @__PURE__ */ lo(Zc, e);
}
function sc() {
	return /* @__PURE__ */ uo(Qc);
}
function cc(e) {
	return /* @__PURE__ */ fo($c, e);
}
function F(e, t) {
	return /* @__PURE__ */ No(el, e, t);
}
function I(e, t) {
	let n = {
		type: "object",
		shape: e ?? {},
		...T(t)
	};
	return new tl(n);
}
function lc(e, t) {
	return new nl({
		type: "union",
		options: e,
		...T(t)
	});
}
function uc(e, t) {
	return new rl({
		type: "intersection",
		left: e,
		right: t
	});
}
function dc(e, t) {
	let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new il({
		type: "enum",
		entries: n,
		...T(t)
	});
}
function fc(e, t) {
	return new al({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...T(t)
	});
}
function pc(e) {
	return new ol({
		type: "transform",
		transform: e
	});
}
function mc(e) {
	return new sl({
		type: "optional",
		innerType: e
	});
}
function hc(e) {
	return new cl({
		type: "optional",
		innerType: e
	});
}
function gc(e) {
	return new ll({
		type: "nullable",
		innerType: e
	});
}
function _c(e, t) {
	return new ul({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : rt(t);
		}
	});
}
function vc(e, t) {
	return new dl({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : rt(t);
		}
	});
}
function yc(e, t) {
	return new fl({
		type: "nonoptional",
		innerType: e,
		...T(t)
	});
}
function bc(e, t) {
	return new pl({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Pt(t)
	});
}
function xc(e, t) {
	return new ml({
		type: "pipe",
		in: e,
		out: t
	});
}
function Sc(e) {
	return new hl({
		type: "readonly",
		innerType: e
	});
}
function Cc(e, t = {}) {
	return /* @__PURE__ */ Po(gl, e, t);
}
function wc(e, t) {
	return /* @__PURE__ */ Fo(e, t);
}
var L, Tc, Ec, R, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l = C((() => {
	Rs(), Ls(), Qo(), Ea(), zs(), nc(), L = /*@__PURE__*/ D("ZodType", (e, t) => (rc(), k.init(e, t), e.def = t, e.type = t.type, e), {
		check(...e) {
			let t = this.def;
			return this.clone(w(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
				check: e,
				def: { check: "custom" },
				onattach: []
			} } : e)] }), { parent: !0 });
		},
		with(...e) {
			return this.check(...e);
		},
		clone(e, t) {
			return at(this, e, t);
		},
		brand() {
			return this;
		},
		register(e, t) {
			return e.add(this, t), this;
		},
		refine(e, t) {
			return this.check(Cc(e, t));
		},
		superRefine(e, t) {
			return this.check(wc(e, t));
		},
		overwrite(e) {
			return this.check(/* @__PURE__ */ Do(e));
		},
		optional() {
			return mc(this);
		},
		exactOptional() {
			return hc(this);
		},
		nullable() {
			return gc(this);
		},
		nullish() {
			return mc(gc(this));
		},
		nonoptional(e) {
			return yc(this, e);
		},
		array() {
			return F(this);
		},
		or(e) {
			return lc([this, e]);
		},
		and(e) {
			return uc(this, e);
		},
		transform(e) {
			return xc(this, pc(e));
		},
		default(e) {
			return _c(this, e);
		},
		prefault(e) {
			return vc(this, e);
		},
		catch(e) {
			return bc(this, e);
		},
		pipe(e) {
			return xc(this, e);
		},
		readonly() {
			return Sc(this);
		},
		describe(e) {
			let t = this.clone();
			return Aa.add(t, { description: e }), t;
		},
		meta(...e) {
			if (e.length === 0) return Aa.get(this);
			let t = this.clone();
			return Aa.add(t, e[0]), t;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(e, ...t) {
			return t.length === 0 ? e(this) : e(this, ...t);
		},
		get "~standard"() {
			return kt(this, "~standard", {
				...Fr(this),
				jsonSchema: {
					input: Zo(this, "input"),
					output: Zo(this, "output")
				}
			});
		},
		set "~standard"(e) {
			Ot(this, "~standard", e);
		},
		parse: function e(t, n) {
			return Ws(this, t, n, { callee: e });
		},
		parseAsync: async function e(t, n) {
			return await Gs(this, t, n, { callee: e });
		},
		safeParse(e, t) {
			return Ks(this, e, t);
		},
		async safeParseAsync(e, t) {
			return qs(this, e, t);
		},
		get spa() {
			return this?.safeParseAsync;
		},
		set spa(e) {
			Ot(this, "spa", e);
		},
		validate(e, t) {
			return Cn(this, e, t);
		},
		validateAsync(e, t) {
			return wn(this, e, t);
		},
		encode: function e(t, n) {
			return Js(this, t, n, { callee: e });
		},
		decode: function e(t, n) {
			return Ys(this, t, n, { callee: e });
		},
		encodeAsync: async function e(t, n) {
			return await Xs(this, t, n, { callee: e });
		},
		decodeAsync: async function e(t, n) {
			return await Zs(this, t, n, { callee: e });
		},
		safeEncode(e, t) {
			return Qs(this, e, t);
		},
		safeDecode(e, t) {
			return $s(this, e, t);
		},
		async safeEncodeAsync(e, t) {
			return ec(this, e, t);
		},
		async safeDecodeAsync(e, t) {
			return tc(this, e, t);
		},
		toJSONSchema(e) {
			return Xo(this, {})(e);
		},
		get description() {
			return Aa.get(this)?.description;
		},
		get _def() {
			return this._zod.def;
		}
	}), Tc = /*@__PURE__*/ D("_ZodString", (e, t) => {
		ci.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => gs(e, t, n, r);
	}, /*@__PURE__*/ At({
		format: (e) => $o(e).format ?? null,
		minLength: (e) => $o(e).minimum ?? null,
		maxLength: (e) => $o(e).maximum ?? null
	}, {
		regex(...e) {
			return this.check(/* @__PURE__ */ xo(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ wo(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ To(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ Eo(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ yo(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ vo(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ bo(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ yo(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ So(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ Co(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ ko());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ Oo(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ Ao());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ jo());
		},
		slugify() {
			return this.check(/* @__PURE__ */ Mo());
		}
	})), Ec = /*@__PURE__*/ D("ZodString", (e, t) => {
		ci.init(e, t), Tc.init(e, t);
	}, {
		email(e) {
			return this.check(/* @__PURE__ */ Fa(jc, e));
		},
		url(e) {
			return this.check(/* @__PURE__ */ Va(Pc, e));
		},
		jwt(e) {
			return this.check(/* @__PURE__ */ no(Yc, e));
		},
		emoji(e) {
			return this.check(/* @__PURE__ */ Ha(Fc, e));
		},
		guid(e) {
			return this.check(/* @__PURE__ */ Ia(Mc, e));
		},
		uuid(e) {
			return this.check(/* @__PURE__ */ La(Nc, e));
		},
		uuidv4(e) {
			return this.check(/* @__PURE__ */ Ra(Nc, e));
		},
		uuidv6(e) {
			return this.check(/* @__PURE__ */ za(Nc, e));
		},
		uuidv7(e) {
			return this.check(/* @__PURE__ */ Ba(Nc, e));
		},
		nanoid(e) {
			return this.check(/* @__PURE__ */ Ua(Ic, e));
		},
		cuid(e) {
			return this.check(/* @__PURE__ */ Wa(Lc, e));
		},
		cuid2(e) {
			return this.check(/* @__PURE__ */ Ga(Rc, e));
		},
		ulid(e) {
			return this.check(/* @__PURE__ */ Ka(zc, e));
		},
		base64(e) {
			return this.check(/* @__PURE__ */ $a(Kc, e));
		},
		base64url(e) {
			return this.check(/* @__PURE__ */ eo(qc, e));
		},
		xid(e) {
			return this.check(/* @__PURE__ */ qa(Bc, e));
		},
		ksuid(e) {
			return this.check(/* @__PURE__ */ Ja(Vc, e));
		},
		ipv4(e) {
			return this.check(/* @__PURE__ */ Ya(Hc, e));
		},
		ipv6(e) {
			return this.check(/* @__PURE__ */ Xa(Uc, e));
		},
		cidrv4(e) {
			return this.check(/* @__PURE__ */ Za(Wc, e));
		},
		cidrv6(e) {
			return this.check(/* @__PURE__ */ Qa(Gc, e));
		},
		e164(e) {
			return this.check(/* @__PURE__ */ to(Jc, e));
		},
		datetime(e) {
			return this.check(/* @__PURE__ */ ro(Dc, e));
		},
		date(e) {
			return this.check(/* @__PURE__ */ io(Oc, e));
		},
		time(e) {
			return this.check(/* @__PURE__ */ ao(kc, e));
		},
		duration(e) {
			return this.check(/* @__PURE__ */ oo(Ac, e));
		}
	}), R = /*@__PURE__*/ D("ZodStringFormat", (e, t) => {
		A.init(e, t), Tc.init(e, t);
	}), Dc = /*@__PURE__*/ D("ZodISODateTime", (e, t) => {
		xi.init(e, t), R.init(e, t);
	}), Oc = /*@__PURE__*/ D("ZodISODate", (e, t) => {
		Si.init(e, t), R.init(e, t);
	}), kc = /*@__PURE__*/ D("ZodISOTime", (e, t) => {
		Ci.init(e, t), R.init(e, t);
	}), Ac = /*@__PURE__*/ D("ZodISODuration", (e, t) => {
		wi.init(e, t), R.init(e, t);
	}), jc = /*@__PURE__*/ D("ZodEmail", (e, t) => {
		di.init(e, t), R.init(e, t);
	}), Mc = /*@__PURE__*/ D("ZodGUID", (e, t) => {
		li.init(e, t), R.init(e, t);
	}), Nc = /*@__PURE__*/ D("ZodUUID", (e, t) => {
		ui.init(e, t), R.init(e, t);
	}), Pc = /*@__PURE__*/ D("ZodURL", (e, t) => {
		pi.init(e, t), R.init(e, t);
	}), Fc = /*@__PURE__*/ D("ZodEmoji", (e, t) => {
		mi.init(e, t), R.init(e, t);
	}), Ic = /*@__PURE__*/ D("ZodNanoID", (e, t) => {
		hi.init(e, t), R.init(e, t);
	}), Lc = /*@__PURE__*/ D("ZodCUID", (e, t) => {
		gi.init(e, t), R.init(e, t);
	}), Rc = /*@__PURE__*/ D("ZodCUID2", (e, t) => {
		_i.init(e, t), R.init(e, t);
	}), zc = /*@__PURE__*/ D("ZodULID", (e, t) => {
		vi.init(e, t), R.init(e, t);
	}), Bc = /*@__PURE__*/ D("ZodXID", (e, t) => {
		yi.init(e, t), R.init(e, t);
	}), Vc = /*@__PURE__*/ D("ZodKSUID", (e, t) => {
		bi.init(e, t), R.init(e, t);
	}), Hc = /*@__PURE__*/ D("ZodIPv4", (e, t) => {
		Ti.init(e, t), R.init(e, t);
	}), Uc = /*@__PURE__*/ D("ZodIPv6", (e, t) => {
		Di.init(e, t), R.init(e, t);
	}), Wc = /*@__PURE__*/ D("ZodCIDRv4", (e, t) => {
		Oi.init(e, t), R.init(e, t);
	}), Gc = /*@__PURE__*/ D("ZodCIDRv6", (e, t) => {
		ki.init(e, t), R.init(e, t);
	}), Kc = /*@__PURE__*/ D("ZodBase64", (e, t) => {
		ji.init(e, t), R.init(e, t);
	}), qc = /*@__PURE__*/ D("ZodBase64URL", (e, t) => {
		Ni.init(e, t), R.init(e, t);
	}), Jc = /*@__PURE__*/ D("ZodE164", (e, t) => {
		Pi.init(e, t), R.init(e, t);
	}), Yc = /*@__PURE__*/ D("ZodJWT", (e, t) => {
		Fi.init(e, t), R.init(e, t);
	}), Xc = /*@__PURE__*/ D("ZodNumber", (e, t) => {
		Ii.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => _s(e, t, n, r), e.isFinite = !0;
	}, /*@__PURE__*/ At({
		minValue: (e) => {
			let { minimum: t, exclusiveMinimum: n } = $o(e);
			return Math.max(t ?? -Infinity, n ?? -Infinity);
		},
		maxValue: (e) => {
			let { maximum: t, exclusiveMaximum: n } = $o(e);
			return Math.min(t ?? Infinity, n ?? Infinity);
		},
		isInt: (e) => {
			let { isInt: t, multipleOf: n } = $o(e);
			return !!t || !!n?.some(Number.isSafeInteger);
		},
		format: (e) => $o(e).format ?? null
	}, {
		gt(e, t) {
			return this.check(/* @__PURE__ */ ho(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ go(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ go(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ po(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ mo(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ mo(e, t));
		},
		int(e) {
			return this.check(oc(e));
		},
		safe(e) {
			return this.check(oc(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ ho(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ go(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ po(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ mo(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ _o(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ _o(e, t));
		},
		finite() {
			return this;
		}
	})), Zc = /*@__PURE__*/ D("ZodNumberFormat", (e, t) => {
		Li.init(e, t), Xc.init(e, t);
	}), Qc = /*@__PURE__*/ D("ZodUnknown", (e, t) => {
		Ri.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => ys(e, t, n, r);
	}), $c = /*@__PURE__*/ D("ZodNever", (e, t) => {
		zi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => vs(e, t, n, r);
	}), el = /*@__PURE__*/ D("ZodArray", (e, t) => {
		ic(), Bi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => ws(e, t, n, r), e.element = t.element;
	}, {
		min(e, t) {
			return this.check(/* @__PURE__ */ yo(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ yo(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ vo(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ bo(e, t));
		},
		unwrap() {
			return this.element;
		}
	}), tl = /*@__PURE__*/ D("ZodObject", (e, t) => {
		ic(), Ui.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ts(e, t, n, r), Nt(e, "shape", (e) => e._zod.def.shape, !1);
	}, {
		keyof() {
			return dc(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone(w(this._zod.def, { catchall: e }));
		},
		passthrough() {
			return this.clone(w(this._zod.def, { catchall: sc() }));
		},
		loose() {
			return this.clone(w(this._zod.def, { catchall: sc() }));
		},
		strict() {
			return this.clone(w(this._zod.def, { catchall: cc() }));
		},
		strip() {
			return this.clone(w(this._zod.def, { catchall: void 0 }));
		},
		extend(e) {
			return dt(this, e);
		},
		safeExtend(e) {
			return pt(this, e);
		},
		merge(e) {
			return mt(this, e);
		},
		pick(e) {
			return ct(this, e);
		},
		omit(e) {
			return ut(this, e);
		},
		partial(...e) {
			return ht(sl, this, e[0]);
		},
		exactPartial(...e) {
			return ht(cl, this, e[0], "exactPartial");
		},
		required(...e) {
			return gt(fl, this, e[0]);
		}
	}), nl = /*@__PURE__*/ D("ZodUnion", (e, t) => {
		Wi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Es(e, t, n, r), e.options = t.options;
	}), rl = /*@__PURE__*/ D("ZodIntersection", (e, t) => {
		Gi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ds(e, t, n, r);
	}), il = /*@__PURE__*/ D("ZodEnum", (e, t) => {
		Ki.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => bs(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
		let n = new Set(Object.keys(t.entries));
		e.extract = (e, r) => {
			let i = {};
			for (let r of e) if (n.has(r)) i[r] = t.entries[r];
			else throw Error(`Key ${r} not found in enum`);
			return new il({
				...t,
				checks: [],
				...T(r),
				entries: i
			});
		}, e.exclude = (e, r) => {
			let i = { ...t.entries };
			for (let t of e) if (n.has(t)) delete i[t];
			else throw Error(`Key ${t} not found in enum`);
			return new il({
				...t,
				checks: [],
				...T(r),
				entries: i
			});
		};
	}), al = /*@__PURE__*/ D("ZodLiteral", (e, t) => {
		qi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => xs(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
			if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0];
		} });
	}), ol = /*@__PURE__*/ D("ZodTransform", (e, t) => {
		ic(), Ji.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cs(e, t, n, r), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new $t(e.constructor.name);
			n.addIssue = (r) => {
				if (typeof r == "string") n.issues.push(Et(r, n.value, t));
				else {
					let t = r;
					t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(Et(t));
				}
			};
			let i = t.transform(n.value, n);
			return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
		};
	}), sl = /*@__PURE__*/ D("ZodOptional", (e, t) => {
		Yi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Is(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), cl = /*@__PURE__*/ D("ZodExactOptional", (e, t) => {
		Xi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Is(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), ll = /*@__PURE__*/ D("ZodNullable", (e, t) => {
		Zi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Os(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), ul = /*@__PURE__*/ D("ZodDefault", (e, t) => {
		Qi.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => js(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
	}), dl = /*@__PURE__*/ D("ZodPrefault", (e, t) => {
		$i.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ms(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), fl = /*@__PURE__*/ D("ZodNonOptional", (e, t) => {
		ea.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => ks(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), pl = /*@__PURE__*/ D("ZodCatch", (e, t) => {
		ta.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ns(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
	}), ml = /*@__PURE__*/ D("ZodPipe", (e, t) => {
		na.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ps(e, t, n, r), e.in = t.in, e.out = t.out;
	}), hl = /*@__PURE__*/ D("ZodReadonly", (e, t) => {
		ra.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), gl = /*@__PURE__*/ D("ZodCustom", (e, t) => {
		ia.init(e, t), L.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ss(e, t, n, r);
	});
})), vl = C((() => {
	Rs();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/coerce.js
function yl(e) {
	return /* @__PURE__ */ co(Xc, e);
}
var bl = C((() => {
	Rs(), _l();
})), xl = C((() => {
	Rs(), _l(), zs(), Us(), nc(), vl(), Ls(), ja(), Kt(), zs(), _l(), aa(), Ea(), bl();
})), Sl = C((() => {
	xl(), xl();
})), Cl, wl = C((() => {
	Cl = "/x/intentic.knowledge";
})), Tl, El, Dl, Ol, kl, Al, jl, Ml, Nl, Pl, Fl = C((() => {
	Sl(), wl(), Tl = I({
		path: P(),
		title: P(),
		type: P().optional(),
		tags: F(P()),
		aliases: F(P()),
		linkCount: ac(),
		backlinkCount: ac(),
		sizeBytes: ac(),
		modifiedAt: ac()
	}), El = I({
		relation: P().optional(),
		path: P().optional(),
		title: P()
	}), Dl = I({
		summary: Tl,
		content: P(),
		body: P(),
		facts: F(I({
			key: P(),
			values: F(P())
		})),
		linksTo: F(El),
		linkedFrom: F(El)
	}), I({ path: P().min(1) }), I({
		q: P().optional(),
		type: P().optional(),
		tag: P().optional(),
		linkedTo: P().optional(),
		limit: yl().int().positive().max(500).optional()
	}), Ol = I({
		path: P(),
		title: P(),
		type: P().optional(),
		tags: F(P()),
		modifiedAt: ac(),
		matched: P(),
		snippet: P().optional()
	}), kl = I({ hits: F(Ol) }), Al = I({
		name: P(),
		count: ac()
	}), jl = I({
		word: P(),
		uses: ac(),
		notes: F(P())
	}), Ml = I({
		folder: P(),
		noteCount: ac(),
		linkCount: ac(),
		types: F(Al),
		tags: F(Al),
		vocabulary: I({
			types: F(P()),
			relations: F(P()),
			path: P().optional()
		}),
		broken: F(I({
			from: P(),
			target: P(),
			relation: P().optional()
		})),
		orphans: F(P()),
		untyped: F(P()),
		typeDrift: F(jl),
		relationDrift: F(jl),
		unreadable: F(I({
			path: P(),
			keys: F(P())
		})),
		ambiguous: F(I({
			name: P(),
			notes: F(P())
		}))
	}), I({
		focus: P().min(1),
		depth: yl().int().min(1).max(4).optional()
	}), Nl = I({
		focus: P().optional(),
		nodes: F(I({
			path: P(),
			title: P(),
			type: P().optional(),
			depth: ac()
		})),
		edges: F(I({
			from: P(),
			to: P(),
			relation: P().optional()
		})),
		omitted: ac()
	}), I({
		path: P().min(1),
		content: P().max(1048576)
	}), I({ ok: fc(!0) }), Pl = I({ written: F(P()) });
}));
//#endregion
//#region src/useKnowledge.ts
function Il() {
	let e = Le(), t = Me({
		queryKey: e.sandbox.key("knowledge", "overview"),
		queryFn: async () => Ml.parse(await e.sandbox.json(`${Cl}/overview`)),
		enabled: n(() => e.sandbox.reachable()),
		refetchInterval: Vl
	});
	return {
		overview: n(() => t.data.value),
		error: n(() => t.error.value?.message),
		isLoading: n(() => t.isLoading.value)
	};
}
function Ll(e) {
	let t = Le(), r = Me({
		queryKey: n(() => t.sandbox.key("knowledge", "search", e.value.q, e.value.type ?? "", e.value.tag ?? "", e.value.linkedTo ?? "")),
		queryFn: async () => kl.parse(await t.sandbox.json(`${Cl}/search?${Hl({
			q: e.value.q,
			type: e.value.type,
			tag: e.value.tag,
			linkedTo: e.value.linkedTo,
			limit: 200
		})}`)).hits,
		enabled: n(() => t.sandbox.reachable()),
		refetchInterval: Vl,
		placeholderData: (e) => e
	});
	return {
		hits: n(() => r.data.value ?? []),
		error: n(() => r.error.value?.message),
		isLoading: n(() => r.isLoading.value),
		isFetching: n(() => r.isFetching.value)
	};
}
function Rl(e) {
	let t = Le(), r = Me({
		queryKey: n(() => t.sandbox.key("knowledge", "note", e.value ?? "")),
		queryFn: async () => Dl.parse(await t.sandbox.json(`${Cl}/note?${Hl({ path: e.value })}`)),
		enabled: n(() => t.sandbox.reachable() && e.value !== void 0)
	});
	return {
		note: n(() => r.data.value),
		error: n(() => r.error.value?.message),
		isLoading: n(() => r.isLoading.value)
	};
}
function zl(e, t, r) {
	let i = Le(), a = Me({
		queryKey: n(() => i.sandbox.key("knowledge", "graph", e.value ?? "", String(t.value))),
		queryFn: async () => Nl.parse(await i.sandbox.json(`${Cl}/graph?${Hl({
			focus: e.value,
			depth: t.value
		})}`)),
		enabled: n(() => i.sandbox.reachable() && e.value !== void 0 && r.value)
	});
	return {
		graph: n(() => a.data.value),
		error: n(() => a.error.value?.message),
		isLoading: n(() => a.isLoading.value)
	};
}
function Bl() {
	let e = Le(), t = Ne(), n = () => t.invalidateQueries({ queryKey: e.sandbox.key("knowledge") });
	return {
		save: je({
			mutationFn: ({ path: t, content: n }) => e.sandbox.json(`${Cl}/note`, {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					path: t,
					content: n
				})
			}),
			onSuccess: () => void n()
		}),
		remove: je({
			mutationFn: ({ path: t }) => e.sandbox.json(`${Cl}/note`, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: t })
			}),
			onSuccess: () => void n()
		}),
		seed: je({
			mutationFn: async () => Pl.parse(await e.sandbox.json(`${Cl}/seed`, { method: "POST" })),
			onSuccess: () => void n()
		})
	};
}
var Vl, Hl, Ul, Wl = C((() => {
	Fl(), Re(), Vl = 3e4, Hl = (e) => Object.entries(e).flatMap(([e, t]) => t === void 0 || t === "" ? [] : [`${e}=${encodeURIComponent(String(t))}`]).join("&"), Ul = (e) => ({
		types: (e?.types ?? []).map((e) => e.name),
		tags: (e?.tags ?? []).map((e) => e.name)
	});
})), Gl, Kl, ql, Jl, Yl, Xl, Zl = C((() => {
	Gl = /\[\[([^\][|]+)(?:\|([^\]]+))?\]\]/g, Kl = (e, t) => {
		let n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT), r = [];
		for (let e = n.nextNode(); e !== null; e = n.nextNode()) {
			let t = e;
			t.parentElement?.closest("a, code, pre") ?? (Gl.lastIndex = 0, Gl.test(t.data) && r.push(t));
		}
		for (let e of r) {
			let n = document.createDocumentFragment(), r = 0;
			Gl.lastIndex = 0;
			for (let i = Gl.exec(e.data); i !== null; i = Gl.exec(e.data)) {
				n.append(e.data.slice(r, i.index));
				let a = (i[1] ?? "").trim(), o = t(a), s = document.createElement("a");
				s.append(i[2]?.trim() ?? a), o === void 0 ? (s.className = "text-subtle underline decoration-dotted underline-offset-2", s.title = `No note for "${a}" yet`) : (s.dataset.kb = o, s.className = "md-file-link"), n.append(s), r = i.index + i[0].length;
			}
			n.append(e.data.slice(r)), e.replaceWith(n);
		}
	}, ql = [
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"neutral"
	], Jl = (e) => {
		if (e === void 0 || e === "") return "neutral";
		let t = 0;
		for (let n of e) t = (t * 31 + n.codePointAt(0)) % 100003;
		return ql[t % ql.length];
	}, Yl = {
		person: "user",
		project: "folder",
		company: "globe",
		decision: "check-square",
		meeting: "users",
		term: "book",
		source: "link",
		vocabulary: "sitemap"
	}, Xl = (e) => e === void 0 || e === "" ? "file" : Yl[e.toLowerCase()] ?? "file";
})), Ql, $l, eu, tu, nu, ru, iu, au = C((() => {
	Zl(), Ql = { class: "block truncate" }, $l = { class: "block truncate leading-tight" }, eu = {
		key: 0,
		role: "status",
		"aria-busy": "true"
	}, tu = {
		key: 1,
		class: "px-2 py-4 text-xs text-muted"
	}, nu = {
		key: 2,
		class: "px-2 py-4 text-xs text-muted"
	}, ru = { class: "flex items-center gap-1.5 text-2xs text-subtle" }, iu = /*@__PURE__*/ u({
		__name: "NoteIndex",
		props: {
			hits: {},
			selected: {},
			filtered: { type: Boolean },
			isLoading: { type: Boolean }
		},
		emits: ["pick"],
		setup(e, { emit: t }) {
			let u = t, d = S(n(() => e.isLoading), n(() => "note-search")), f = {
				alias: "matched an alias",
				tag: "matched a tag"
			}, m = n(() => e.hits.map((e) => ({
				path: e.path,
				title: e.title,
				icon: Xl(e.type),
				detail: e.snippet ?? f[e.matched]
			}))), ee = n(() => m.value.length === 0 ? [] : [{
				key: "hits",
				items: m.value
			}]), g = /* @__PURE__ */ new Map(), _ = (e, t) => {
				let n = t?.$el;
				n instanceof HTMLElement ? g.set(e, n) : g.delete(e);
			};
			return ie(() => e.selected, async (e) => {
				e !== void 0 && (await p(), g.get(e)?.scrollIntoView({ block: "nearest" }));
			}), (t, n) => (h(), r(y(me), {
				groups: ee.value,
				"aria-label": "Notes"
			}, s({
				row: b(({ item: t }) => [(h(), r(y(ve), {
					key: t.path,
					ref: (e) => _(t.path, e),
					as: "button",
					density: "dense",
					class: "rounded-lg",
					icon: t.icon,
					selected: t.path === e.selected,
					onClick: (e) => u("pick", t.path)
				}, s({
					title: b(() => [o("span", Ql, v(t.title), 1)]),
					_: 2
				}, [t.detail === void 0 ? void 0 : {
					name: "description",
					fn: b(() => [o("span", $l, v(t.detail), 1)]),
					key: "0"
				}]), 1032, [
					"icon",
					"selected",
					"onClick"
				]))]),
				empty: b(() => [e.isLoading ? (h(), a("div", eu, [n[0] ||= o("span", { class: "sr-only" }, "Looking through your notes…", -1), y(d) ? (h(), r(y(ye), {
					key: 0,
					rows: 5,
					density: "dense"
				})) : i("", !0)])) : e.filtered ? (h(), a("p", tu, [...n[1] ||= [
					c(" Nothing here matches. The agent's ", -1),
					o("b", null, "kb", -1),
					c(" command searches the same notes, and a link to a note nobody has written yet is a perfectly good way to leave a gap for later. ", -1)
				]])) : (h(), a("p", nu, "No notes yet."))]),
				_: 2
			}, [m.value.length >= 200 ? {
				name: "footer",
				fn: b(() => [o("p", ru, [l(y(ue), {
					name: "info-circle",
					class: "shrink-0"
				}), n[2] ||= c(" Showing the first 200: narrow it with a word, a kind or a tag. ", -1)])]),
				key: "0"
			} : void 0]), 1032, ["groups"]));
		}
	});
})), ou, su = C((() => {
	au(), au(), ou = iu;
})), cu, lu, uu, du, fu, pu, mu, hu, gu, _u, vu = C((() => {
	Zl(), Wl(), cu = { class: "relative flex h-figure w-full flex-col" }, lu = {
		key: 0,
		class: "px-4 py-3 text-xs text-danger"
	}, uu = {
		key: 1,
		class: "px-4 py-6 text-xs text-subtle"
	}, du = {
		key: 2,
		class: "flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10 text-center"
	}, fu = ["onDblclick"], pu = { class: "truncate text-xs text-content" }, mu = { class: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-2 text-2xs text-subtle" }, hu = {
		key: 0,
		class: "rounded bg-surface/80 px-1.5 py-0.5"
	}, gu = { key: 1 }, _u = /*@__PURE__*/ u({
		__name: "NoteGraph",
		props: {
			path: {},
			depth: { default: 2 }
		},
		emits: ["open"],
		setup(e, { emit: t }) {
			let s = t, { graph: u, error: d, isLoading: f } = zl(ne(() => e.path), ne(() => e.depth), g(!0)), p = n(() => u.value?.nodes.map((e) => ({
				id: e.path,
				data: {
					title: e.title,
					type: e.type,
					focus: e.path === u.value?.focus,
					path: e.path
				},
				tooltip: e.path,
				dimmed: e.depth > 1
			})) ?? []), ee = n(() => u.value?.edges.map((e) => ({
				from: e.from,
				to: e.to,
				kind: e.relation ?? "mentions",
				dashed: e.relation === void 0
			})) ?? []), _ = g(), te = () => {
				_.value !== void 0 && _.value !== u.value?.focus && s("open", _.value);
			};
			return (e, t) => (h(), a("div", cu, [y(d) ? (h(), a("p", lu, v(y(d)), 1)) : y(f) ? (h(), a("p", uu, "Drawing the map…")) : p.value.length <= 1 ? (h(), a("div", du, [
				l(y(ue), {
					name: "sitemap",
					class: "text-base text-subtle"
				}),
				t[1] ||= o("p", { class: "text-sm text-muted" }, "Nothing links to this note yet.", -1),
				t[2] ||= o("p", { class: "max-w-sm text-xs text-subtle" }, [
					c(" Mention another note as "),
					o("code", null, "[[its name]]"),
					c(" in the text, or name the relationship in the header: "),
					o("code", null, "works_on:"),
					c(", "),
					o("code", null, "about:"),
					c(", and it appears here. ")
				], -1)
			])) : (h(), r(y(x), {
				key: 3,
				modelValue: _.value,
				"onUpdate:modelValue": t[0] ||= (e) => _.value = e,
				class: "h-full w-full",
				nodes: p.value,
				edges: ee.value,
				direction: "TB",
				"node-width": 164,
				"node-height": 52,
				magnify: !1,
				"readable-zoom": .7,
				"min-zoom": .3
			}, {
				node: b(({ node: e }) => [o("button", {
					type: "button",
					class: m(["flex h-full w-full flex-col justify-center gap-0.5 px-2.5 text-left", e.data.focus ? "font-medium" : void 0]),
					onDblclick: (t) => s("open", e.data.path)
				}, [o("span", pu, v(e.data.title), 1), e.data.type ? (h(), r(y(be), {
					key: 0,
					variant: y(Jl)(e.data.type),
					size: "xs",
					label: e.data.type
				}, null, 8, ["variant", "label"])) : i("", !0)], 42, fu)]),
				overlay: b(() => [o("div", mu, [y(u)?.omitted ? (h(), a("span", hu, v(y(u).omitted) + " more not shown", 1)) : (h(), a("span", gu)), _.value && _.value !== y(u)?.focus ? (h(), r(y(ce), {
					key: 2,
					size: "small",
					severity: "secondary",
					class: "pointer-events-auto",
					onClick: te
				}, {
					default: b(() => [...t[3] ||= [c(" Open this note ", -1)]]),
					_: 1
				})) : i("", !0)])]),
				_: 1
			}, 8, [
				"modelValue",
				"nodes",
				"edges"
			]))]));
		}
	});
})), yu, bu = C((() => {
	vu(), vu(), yu = _u;
})), xu, Su, Cu, wu, Tu, Eu, Du, Ou, ku, Au, ju, Mu, Nu, Pu, Fu = C((() => {
	Zl(), bu(), Wl(), xu = { key: 0 }, Su = { class: "truncate font-mono" }, Cu = ["title"], wu = ["aria-pressed", "aria-label"], Tu = {
		key: 0,
		class: "flex flex-col gap-2.5 px-5 pt-4"
	}, Eu = {
		key: 1,
		class: "flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs"
	}, Du = {
		key: 0,
		class: "text-2xs text-subtle"
	}, Ou = ["onClick"], ku = ["title"], Au = {
		key: 2,
		class: "px-5 py-4 text-xs text-subtle"
	}, ju = {
		key: 3,
		class: "flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line-subtle px-5 py-3 text-xs"
	}, Mu = {
		key: 0,
		class: "text-2xs text-subtle"
	}, Nu = ["onClick"], Pu = /*@__PURE__*/ u({
		__name: "KnowledgePane",
		props: /*@__PURE__*/ f({ path: {} }, {
			draft: {},
			draftModifiers: {}
		}),
		emits: /*@__PURE__*/ f([
			"open",
			"filter",
			"forgotten"
		], ["update:draft"]),
		setup(e, { emit: s }) {
			let u = s, f = re(e, "draft"), { note: p, error: ee, isLoading: ie } = Rl(ne(() => e.path)), { save: oe, remove: se } = Bl(), ce = n(() => p.value?.content ?? ""), x = g("read"), { source: le, editing: de, confirming: me, error: ge, saving: _e, removing: ve, startEdit: ye, cancelEdit: we, saveDraft: Ee, forget: S } = Oe({
				draft: f,
				raw: () => ce.value,
				save: (t) => oe.mutateAsync({
					path: e.path,
					content: t
				}),
				remove: () => se.mutateAsync({ path: e.path }),
				note: () => e.path,
				onLeave: () => x.value = "read",
				onRemoved: () => u("forgotten")
			}), De = () => {
				ye(), x.value = "read";
			}, ke = n(() => (p.value?.facts ?? []).map((e) => [e.key, e.values.join(", ")])), Ae = n(() => new Map((p.value?.linksTo ?? []).map((e) => [e.title, e.path]))), je = (e) => Kl(e, (e) => Ae.value.get(e)), Me = (e) => {
				let t = e.target?.closest("[data-kb]")?.dataset.kb;
				t !== void 0 && (e.preventDefault(), u("open", t));
			};
			return (n, s) => {
				let f = te("tooltip");
				return h(), r(y(he), {
					source: y(le),
					"onUpdate:source": s[3] ||= (e) => d(le) ? le.value = e : null,
					confirming: y(me),
					"onUpdate:confirming": s[4] ||= (e) => d(me) ? me.value = e : null,
					paged: "",
					title: y(p)?.summary.title ?? "…",
					raw: ce.value,
					editing: y(de),
					loading: y(ie),
					saving: y(_e),
					removing: y(ve),
					error: y(ee) ?? y(ge),
					onEdit: De,
					onCancel: y(we),
					onSave: y(Ee),
					onRemove: y(S)
				}, {
					lead: b(() => [l(y(ue), {
						name: "file",
						class: "shrink-0 text-base text-muted"
					})]),
					badges: b(() => [y(p)?.summary.type ? (h(), r(y(be), {
						key: 0,
						variant: y(Jl)(y(p).summary.type),
						size: "xs",
						label: y(p).summary.type
					}, null, 8, ["variant", "label"])) : i("", !0)]),
					description: b(() => [y(p)?.summary.aliases.length ? (h(), a("span", xu, "Also called " + v(y(p).summary.aliases.join(", ")) + ".", 1)) : i("", !0)]),
					meta: b(() => [o("span", Su, v(e.path), 1), y(p) ? (h(), a(t, { key: 0 }, [
						s[6] ||= o("span", { "aria-hidden": "true" }, "·", -1),
						o("span", null, v(y(xe)(y(p).summary.sizeBytes)), 1),
						s[7] ||= o("span", { "aria-hidden": "true" }, "·", -1),
						o("span", { title: y(Se)(y(p).summary.modifiedAt) }, "edited " + v(y(Ce)(y(p).summary.modifiedAt)), 9, Cu),
						y(p).summary.tags.length > 0 ? (h(), a(t, { key: 0 }, [s[5] ||= o("span", { "aria-hidden": "true" }, "·", -1), (h(!0), a(t, null, _(y(p).summary.tags, (e) => (h(), a("span", { key: e }, "#" + v(e), 1))), 128))], 64)) : i("", !0)
					], 64)) : i("", !0)]),
					actions: b(() => [ae((h(), a("button", {
						type: "button",
						class: m(y(Te).iconButton("h-7 w-7")),
						"aria-pressed": x.value === "map",
						"aria-label": x.value === "map" ? "Back to the note" : "Show what this note connects to",
						onClick: s[0] ||= (e) => x.value = x.value === "map" ? "read" : "map"
					}, [l(y(ue), { name: x.value === "map" ? "eye" : "sitemap" }, null, 8, ["name"])], 10, wu)), [[
						f,
						x.value === "map" ? "Back to the note" : "Map: what this note connects to",
						void 0,
						{ top: !0 }
					]])]),
					confirm: b(() => [c(" Delete \"" + v(y(p)?.summary.title) + "\"? Anything that links to it becomes a link to a note nobody has written. ", 1)]),
					default: b(() => [x.value === "map" ? (h(), r(yu, {
						key: 0,
						path: e.path,
						onOpen: s[1] ||= (e) => u("open", e)
					}, null, 8, ["path"])) : (h(), a(t, { key: 1 }, [
						ke.value.length > 0 || (y(p)?.linksTo.length ?? 0) > 0 ? (h(), a("div", Tu, [ke.value.length > 0 ? (h(), r(y(fe), {
							key: 0,
							rows: ke.value
						}, null, 8, ["rows"])) : i("", !0), y(p) && y(p).linksTo.length > 0 ? (h(), a("div", Eu, [s[8] ||= o("span", { class: "text-2xs uppercase tracking-wide text-subtle" }, "Links to", -1), (h(!0), a(t, null, _(y(p).linksTo, (e, t) => (h(), a("span", {
							key: `out-${e.relation ?? ""}-${e.title}-${t}`,
							class: "flex items-baseline gap-1"
						}, [e.relation ? (h(), a("span", Du, v(e.relation), 1)) : i("", !0), e.path ? (h(), a("button", {
							key: 1,
							type: "button",
							class: "text-link hover:underline",
							onClick: (t) => u("open", e.path)
						}, v(e.title), 9, Ou)) : (h(), a("span", {
							key: 2,
							class: "text-subtle underline decoration-dotted underline-offset-2",
							title: `No note for "${e.title}" yet`
						}, v(e.title), 9, ku))]))), 128))])) : i("", !0)])) : i("", !0),
						(y(p)?.body ?? "").trim() === "" ? (h(), a("p", Au, "No text yet: this note is its header.")) : (h(), r(y(pe), {
							key: 1,
							source: y(p)?.body ?? "",
							decorate: je,
							class: "px-5 py-4",
							style: { "--prose-measure": "74ch" },
							onClick: Me
						}, null, 8, ["source"])),
						y(p) && y(p).linkedFrom.length > 0 ? (h(), a("div", ju, [
							s[9] ||= o("span", { class: "text-2xs uppercase tracking-wide text-subtle" }, "Linked from", -1),
							(h(!0), a(t, null, _(y(p).linkedFrom, (e, t) => (h(), a("span", {
								key: `in-${e.relation ?? ""}-${e.title}-${t}`,
								class: "flex items-baseline gap-1"
							}, [e.relation ? (h(), a("span", Mu, v(e.relation), 1)) : i("", !0), e.path ? (h(), a("button", {
								key: 1,
								type: "button",
								class: "text-link hover:underline",
								onClick: (t) => u("open", e.path)
							}, v(e.title), 9, Nu)) : i("", !0)]))), 128)),
							o("button", {
								type: "button",
								class: m(y(Te).linkButton("ml-auto shrink-0 text-2xs")),
								onClick: s[2] ||= (t) => u("filter", e.path)
							}, " Show these in the list ", 2)
						])) : i("", !0)
					], 64))]),
					_: 1
				}, 8, [
					"source",
					"confirming",
					"title",
					"raw",
					"editing",
					"loading",
					"saving",
					"removing",
					"error",
					"onCancel",
					"onSave",
					"onRemove"
				]);
			};
		}
	});
})), Iu, Lu = C((() => {
	Fu(), Fu(), Iu = Pu;
})), Ru, zu, Bu, Vu, Hu, Uu = C((() => {
	Wl(), su(), Lu(), Ru = {
		key: 0,
		class: "text-2xs text-subtle"
	}, zu = { class: "mt-1 block text-xs text-muted" }, Bu = { class: "max-w-md text-xs text-muted" }, Vu = {
		key: 0,
		class: "text-xs text-danger"
	}, Hu = /*@__PURE__*/ u({
		__name: "KnowledgeView",
		setup(e) {
			let t = g(void 0), u = De(t, 36), f = g(void 0), p = Ae(f), { overview: _, error: te } = Il(), ne = g(""), re = g(), ae = g(), x = g(), fe = n(() => ({
				q: ne.value,
				type: re.value,
				tag: ae.value,
				linkedTo: x.value
			})), pe = n(() => ne.value !== "" || re.value !== void 0 || ae.value !== void 0 || x.value !== void 0), { hits: me, error: he, isLoading: ve, isFetching: ye } = Ll(fe), be = n(() => Ul(_.value)), xe = (e, t) => [{ options: [{
				value: "",
				label: t
			}, ...e.map((e) => ({
				value: e,
				label: e
			}))] }], Se = n({
				get: () => re.value ?? "",
				set: (e) => re.value = e === "" ? void 0 : e
			}), Ce = n({
				get: () => ae.value ?? "",
				set: (e) => ae.value = e === "" ? void 0 : e
			}), S = g(), { draft: Oe } = Ee(S);
			ke(t, () => S.value), ie(me, () => {
				(S.value === void 0 || !me.value.some((e) => e.path === S.value)) && (S.value = me.value[0]?.path);
			});
			let je = (e) => {
				S.value = e;
			}, Me = (e) => {
				let t = me.value.map((e) => e.path);
				if (t.length === 0) return;
				let n = S.value === void 0 ? -1 : t.indexOf(S.value);
				S.value = t[Math.min(t.length - 1, Math.max(0, n + e))];
			}, Ne = (e) => {
				ne.value = "", re.value = void 0, ae.value = void 0, x.value = e;
			}, Pe = () => {
				ne.value = "", re.value = void 0, ae.value = void 0, x.value = void 0;
			};
			ie(ne, () => x.value = void 0);
			let C = n(() => me.value.find((e) => e.path === x.value)?.title ?? x.value), Fe = n(() => x.value === void 0 ? void 0 : {
				tone: "info",
				title: `Everything linking to "${C.value}"`,
				action: {
					label: "Show everything",
					run: Pe
				}
			}), Ie = n(() => {
				let e = _.value;
				if (e === void 0) return;
				let t = e.typeDrift.length + e.relationDrift.length, n = [
					e.broken.length === 0 ? void 0 : `${e.broken.length} ${e.broken.length === 1 ? "link points" : "links point"} at notes nobody has written`,
					t === 0 ? void 0 : `${t} ${t === 1 ? "word is" : "words are"} not in the vocabulary yet`,
					e.orphans.length === 0 ? void 0 : `${e.orphans.length} ${e.orphans.length === 1 ? "note is" : "notes are"} connected to nothing`,
					e.unreadable.length === 0 ? void 0 : `${e.unreadable.length} ${e.unreadable.length === 1 ? "note has" : "notes have"} a header this reader could not parse`
				].filter((e) => e !== void 0);
				return n.length === 0 ? void 0 : {
					tone: "info",
					title: n.join(" · "),
					detail: "The agent's kb check lists them in full."
				};
			}), Le = n(() => te.value ?? he.value), { seed: Re } = Bl(), ze = async () => {
				let { written: e } = await Re.mutateAsync();
				S.value = e[0] ?? S.value;
			};
			return (e, n) => (h(), a("div", {
				ref_key: "body",
				ref: t,
				class: "flex flex-col gap-3",
				style: ee(y(p).style.value)
			}, [
				Le.value ? (h(), r(y(ge), {
					key: 0,
					of: y(we)(Le.value)
				}, null, 8, ["of"])) : i("", !0),
				o("div", {
					ref_key: "chrome",
					ref: f,
					class: "sticky top-0 z-1 -mb-3 bg-canvas pb-3"
				}, [l(y(le), {
					modelValue: ne.value,
					"onUpdate:modelValue": n[2] ||= (e) => ne.value = e,
					placeholder: "Search the knowledge base…",
					"aria-label": "Search the knowledge base",
					clearable: "",
					count: y(me).length,
					busy: y(ye) && !y(ve),
					onKeydown: [n[3] ||= oe(se((e) => Me(1), ["prevent"]), ["down"]), n[4] ||= oe(se((e) => Me(-1), ["prevent"]), ["up"])]
				}, s({
					actions: b(() => [y(_) ? (h(), a("span", Ru, v(y(_).noteCount) + " " + v(y(_).noteCount === 1 ? "note" : "notes") + " · " + v(y(_).linkCount) + " " + v(y(_).linkCount === 1 ? "link" : "links") + " · " + v(y(_).types.length) + " " + v(y(_).types.length === 1 ? "kind" : "kinds"), 1)) : i("", !0), l(y(de), { label: "Knowledge" }, {
						default: b(() => [n[11] ||= o("span", { class: "block text-sm font-medium text-content" }, "The knowledge base", -1), o("span", zu, [
							n[7] ||= c(" A folder of markdown notes: ", -1),
							o("b", null, v(y(_)?.folder ?? "knowledge/"), 1),
							n[8] ||= c(" in your workspace, where each note is a ", -1),
							n[9] ||= o("i", null, "thing", -1),
							n[10] ||= c(" (a person, a project, a decision, a word) and each link is a connection between two of them. The agent reads it before answering questions about your world and writes to it when it learns something durable; you read, correct and delete here. Open it in Obsidian or put it under git: it is only ever markdown. ", -1)
						])]),
						_: 1
					})]),
					_: 2
				}, [be.value.types.length > 0 || be.value.tags.length > 0 ? {
					name: "controls",
					fn: b(() => [be.value.types.length > 0 ? (h(), r(y(_e), {
						key: 0,
						modelValue: Se.value,
						"onUpdate:modelValue": n[0] ||= (e) => Se.value = e,
						variant: "ghost",
						options: xe(be.value.types, "Any kind"),
						class: "max-w-32",
						"aria-label": "Kind",
						header: "Kind"
					}, null, 8, ["modelValue", "options"])) : i("", !0), be.value.tags.length > 0 ? (h(), r(y(_e), {
						key: 1,
						modelValue: Ce.value,
						"onUpdate:modelValue": n[1] ||= (e) => Ce.value = e,
						variant: "ghost",
						options: xe(be.value.tags, "Any tag"),
						class: "max-w-32",
						"aria-label": "Tag",
						header: "Tag"
					}, null, 8, ["modelValue", "options"])) : i("", !0)]),
					key: "0"
				} : void 0]), 1032, [
					"modelValue",
					"count",
					"busy"
				])], 512),
				Fe.value ? (h(), r(y(ge), {
					key: 1,
					of: Fe.value
				}, null, 8, ["of"])) : i("", !0),
				Ie.value ? (h(), r(y(ge), {
					key: 2,
					of: Ie.value
				}, null, 8, ["of"])) : i("", !0),
				y(_)?.noteCount === 0 && !pe.value ? (h(), a("div", {
					key: 3,
					class: m(y(Te).emptyState("flex flex-col items-center gap-2 px-6 py-12 text-sm"))
				}, [
					l(y(ue), {
						name: "sitemap",
						class: "text-base text-subtle"
					}),
					n[14] ||= o("p", { class: "text-content" }, "Nothing here yet.", -1),
					o("p", Bu, [
						n[12] ||= c(" Notes appear here as the agent learns durable things about your world, who you work with, what a project is for, what was decided and why. Ask it to remember something, or drop your own markdown into ", -1),
						o("b", null, v(y(_)?.folder ?? "knowledge/"), 1),
						n[13] ||= c(" and it will be read the same way. ", -1)
					]),
					l(y(ce), {
						label: "Start it off with a vocabulary",
						size: "small",
						severity: "secondary",
						loading: y(Re).isPending.value,
						onClick: ze
					}, null, 8, ["loading"]),
					y(Re).error.value ? (h(), a("p", Vu, v(y(Re).error.value.message), 1)) : i("", !0)
				], 2)) : (h(), a("div", {
					key: 4,
					class: m(["flex gap-4", y(u) ? "flex-col" : "items-start"])
				}, [o("div", { class: m(["flex min-w-0 shrink-0 flex-col", y(u) ? "max-h-56" : "sticky top-(--pinned-top) max-h-[calc(100dvh-var(--pinned-top))] w-56"]) }, [l(ou, {
					hits: y(me),
					selected: S.value,
					filtered: pe.value,
					"is-loading": y(ve),
					onPick: je
				}, null, 8, [
					"hits",
					"selected",
					"filtered",
					"is-loading"
				])], 2), S.value ? (h(), r(Iu, {
					key: 0,
					draft: y(Oe),
					"onUpdate:draft": n[5] ||= (e) => d(Oe) ? Oe.value = e : null,
					path: S.value,
					class: "min-w-0 flex-1",
					onOpen: je,
					onFilter: Ne,
					onForgotten: n[6] ||= (e) => S.value = void 0
				}, null, 8, ["draft", "path"])) : (h(), a("section", {
					key: 1,
					class: m(y(Te).emptyState("flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10"))
				}, [
					l(y(ue), {
						name: "sitemap",
						class: "text-base text-subtle"
					}),
					n[15] ||= o("p", { class: "text-sm text-muted" }, "Pick a note to read it.", -1),
					n[16] ||= o("p", { class: "max-w-xs text-xs text-subtle" }, "Follow its links to move through your knowledge the way the agent does.", -1)
				], 2))], 2))
			], 4));
		}
	});
})), Wu = /* @__PURE__ */ Fe({ default: () => Gu }), Gu, Ku = C((() => {
	Uu(), Uu(), Gu = Hu;
}));
//#endregion
//#region src/extension.ts
Re();
var qu = (e, t) => {
	Ie(e), t.subscriptions.push(e.views.register({
		id: "knowledge",
		label: "Knowledge",
		surface: "sandbox",
		detect: () => [{
			key: "knowledge",
			title: "Knowledge",
			icon: "sitemap"
		}],
		view: async () => (await Promise.resolve().then(() => (Ku(), Wu))).default
	}));
};
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js
function Ju(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Yu(e, t = "|") {
	return e.map((e) => fd(e)).join(t);
}
function Xu(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function Zu(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function Qu(e) {
	return e == null;
}
function $u(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function ed(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function z(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function td(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function nd(e) {
	return JSON.stringify(e);
}
function rd(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var id = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function ad(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var od = /* @__PURE__*/ Zu(() => {
	if (Xd.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function sd(e) {
	if (ad(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return ad(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function cd(e) {
	return sd(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var ld = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function ud(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function dd(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function B(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function fd(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function pd(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var md = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function hd(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return dd(e, td(e._zod.def, {
		get shape() {
			let e = {};
			for (let r of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, r)) throw Error(`Unrecognized key: "${String(r)}"`);
				t[r] && z(e, r, n.shape[r]);
			}
			return z(this, "shape", e), e;
		},
		checks: []
	}));
}
function gd(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return dd(e, td(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, e)) throw Error(`Unrecognized key: "${String(e)}"`);
				t[e] && delete r[e];
			}
			return z(this, "shape", r), r;
		},
		checks: []
	}));
}
function _d(e, t) {
	if (!sd(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return dd(e, td(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return z(this, "shape", n), n;
	} }));
}
function vd(e, t) {
	if (!sd(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return dd(e, td(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return z(this, "shape", n), n;
	} }));
}
function yd(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return dd(e, td(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return z(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function bd(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	return dd(t, td(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t of Reflect.ownKeys(n)) {
				if (!Object.prototype.hasOwnProperty.call(r, t)) throw Error(`Unrecognized key: "${String(t)}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t of Reflect.ownKeys(r)) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return z(this, "shape", i), i;
		},
		checks: []
	}));
}
function xd(e, t, n) {
	return dd(t, td(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t of Reflect.ownKeys(n)) {
			if (!Object.prototype.hasOwnProperty.call(i, t)) throw Error(`Unrecognized key: "${String(t)}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t of Reflect.ownKeys(r)) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return z(this, "shape", i), i;
	} }));
}
function Sd(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Cd(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function wd(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Td(e) {
	return typeof e == "string" ? e : e?.message;
}
function Ed(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function Dd(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : Td(e.inst?._zod.def?.error?.(e)) ?? Td(a?.(e)) ?? Td(t?.error?.(e)) ?? Td(n.customError?.(e)) ?? Td(n.localeError?.(e)) ?? "Invalid input", { inst: s, schema: c, continue: l, input: u, ...d } = e;
	return d.path ??= [], d.message = o, t?.reportInput && (d.input = u), d;
}
var Od = /[\uD800-\uDBFF]/;
function kd(e) {
	let t = e.length;
	if (!Od.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function Ad(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function jd(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function Md(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function Nd(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Id(e, n, r.value);
	}
}
function Pd(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function Fd(e, t, n) {
	return Pd(e, t, n, !1);
}
function Id(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : Pd(this, t, n.bind(this));
		},
		set(e) {
			Pd(this, t, e);
		}
	});
}
function Ld(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var Rd, zd = !1, Bd = {
	configurable: !0,
	get() {
		zd = !0;
	}
};
function V(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Rd !== e._zod) {
		Rd = void 0;
		return;
	}
	Rd = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Bd);
			let e = zd;
			zd = !1;
			try {
				let r = n(this);
				return zd ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), zd ||= e, r;
			} catch (n) {
				throw delete this[t], zd ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function Vd(e, t, n, r) {
	let i = Ld(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
var Hd = "~constantCatch";
function Ud(e) {
	let t = () => e;
	return t[Hd] = !0, t;
}
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js
var Wd, Gd = {
	value: void 0,
	enumerable: !1
}, Kd = "captureStackTrace" in Error ? Error : null;
function qd(e) {
	let t = Kd;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Kd = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function H(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Gd.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Gd);
			} finally {
				Gd.value = void 0;
			}
		}
		if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), Nd(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? qd(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var Jd = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Yd = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(Wd = globalThis).__zod_globalConfig ?? (Wd.__zod_globalConfig = {});
var Xd = globalThis.__zod_globalConfig;
function Zd(e) {
	return e && Object.assign(Xd, e), Xd;
}
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js
function Qd() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Xu, 2), e.message;
}
function $d(e) {
	this._zod.message = e;
}
var ef = {
	get: Qd,
	set: $d,
	enumerable: !0,
	configurable: !0
}, tf = {
	value: void 0,
	enumerable: !1
}, nf = {
	value: void 0,
	enumerable: !1
}, rf = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), af = (e, t) => {
	e.name = "$ZodError", tf.value = e._zod, Object.defineProperty(e, "_zod", tf), nf.value = t, Object.defineProperty(e, "issues", nf), tf.value = void 0, nf.value = void 0, Object.defineProperty(e, "message", ef);
	let n = Object.getPrototypeOf(e);
	rf.has(n) || (rf.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
}, of = H("$ZodError", af), sf = H("$ZodError", af, void 0, { Parent: Error });
function cf(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function lf(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? cf(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function uf(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js
function df(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var ff = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new Jd();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => Dd(e, o, Zd())));
			throw id(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, pf = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => Dd(e, o, Zd())));
			throw id(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, mf = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new Jd();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? of)(a.issues.map((e) => Dd(e, i, Zd())))
	} : {
		success: !0,
		data: a.value
	};
}, hf = /* @__PURE__*/ mf(sf), gf = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => Dd(e, i, Zd())))
	} : {
		success: !0,
		data: a.value
	};
}, _f = /* @__PURE__*/ gf(sf), vf = (e) => {
	let t = ff(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, df(n, a));
	};
	return n;
}, yf = (e) => {
	let t = ff(e), n = (e, r, i, a) => t(e, r, i, df(n, a));
	return n;
}, bf = (e) => {
	let t = pf(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, df(n, a));
	};
	return n;
}, xf = (e) => {
	let t = pf(e), n = async (e, r, i, a) => await t(e, r, i, df(n, a));
	return n;
}, Sf = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return mf(e)(t, n, i);
}, Cf = (e) => (t, n, r) => mf(e)(t, n, r), wf = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return gf(e)(t, n, i);
}, Tf = (e) => async (t, n, r) => gf(e)(t, n, r), Ef = /^[cC][0-9a-z]{6,}$/, Df = /^[0-9a-z]+$/, Of = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, kf = /^[0-9a-vA-V]{20}$/, Af = /^[A-Za-z0-9]{27}$/, jf = /^[a-zA-Z0-9_-]{21}$/;
function Mf(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var Nf = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Pf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ff = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, If = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Lf = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Rf() {
	return new RegExp(Lf, "u");
}
var zf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Bf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Vf = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Hf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Uf = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Wf = /^[A-Za-z0-9_-]*$/, Gf = /^https?$/, Kf = /^\+[1-9]\d{6,14}$/, qf = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function Jf(e) {
	return RegExp(`^${e}$`);
}
var Yf = /*@__PURE__*/ Jf(qf);
function Xf(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Zf(e) {
	return RegExp(`^${Xf(e)}$`);
}
function Qf(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Xf({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Xf({ precision: e.precision })}` : n;
	return RegExp(`^${qf}T(?:${r})$`);
}
var $f = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, ep = /^-?\d+$/, tp = /^-?\d+(?:\.\d+)?$/, np = /^(?:true|false)$/i, rp = /^[^A-Z]*$/, ip = /^[^a-z]*$/, U = /*@__PURE__*/ H("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), ap = (e) => {
	let t = e.value;
	return !Qu(t) && t.length !== void 0;
}, op = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, sp = /*@__PURE__*/ H("$ZodCheckLessThan", (e, t) => {
	U.init(e, t);
	let n = op[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
		t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: op[typeof r.value] ?? n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), cp = /*@__PURE__*/ H("$ZodCheckGreaterThan", (e, t) => {
	U.init(e, t);
	let n = op[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
		t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: op[typeof r.value] ?? n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), lp = /*@__PURE__*/ H("$ZodCheckMultipleOf", (e, t) => {
	U.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : ed(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), up = /*@__PURE__*/ H("$ZodCheckNumberFormat", (e, t) => {
	U.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = md[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = ep);
	}), e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), dp = /*@__PURE__*/ H("$ZodCheckMaxLength", (e, t) => {
	var n;
	U.init(e, t), (n = e._zod.def).when ?? (n.when = ap), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? kd(r) : i) <= t.maximum) return;
		let a = Ad(r);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), fp = /*@__PURE__*/ H("$ZodCheckMinLength", (e, t) => {
	var n;
	U.init(e, t), (n = e._zod.def).when ?? (n.when = ap), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? kd(r) : i) >= t.minimum) return;
		let a = Ad(r);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), pp = /*@__PURE__*/ H("$ZodCheckLengthEquals", (e, t) => {
	var n;
	U.init(e, t), (n = e._zod.def).when ?? (n.when = ap), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? kd(r) : i;
		if (a === t.length) return;
		let o = Ad(r), s = a > t.length;
		n.issues.push({
			origin: o,
			...s ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), mp = /*@__PURE__*/ H("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	U.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), hp = /*@__PURE__*/ H("$ZodCheckRegex", (e, t) => {
	mp.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), gp = /*@__PURE__*/ H("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= rp, mp.init(e, t);
}), _p = /*@__PURE__*/ H("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= ip, mp.init(e, t);
}), vp = /*@__PURE__*/ H("$ZodCheckIncludes", (e, t) => {
	U.init(e, t);
	let n = ud(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
	t.pattern = r, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), yp = /*@__PURE__*/ H("$ZodCheckStartsWith", (e, t) => {
	U.init(e, t);
	let n = RegExp(`^${ud(t.prefix)}.*`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), bp = /*@__PURE__*/ H("$ZodCheckEndsWith", (e, t) => {
	U.init(e, t);
	let n = RegExp(`.*${ud(t.suffix)}$`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), xp = /*@__PURE__*/ H("$ZodCheckOverwrite", (e, t) => {
	U.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), Sp = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1, e(this), --this.indent;
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
}, Cp = {
	major: 4,
	minor: 5,
	patch: 4
}, W = /*@__PURE__*/ H("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Cp;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = Sd(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (Cd(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new Jd();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (Ed(t.issues, n, e), i ||= Sd(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					Ed(t.issues, n, e), i ||= Sd(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (Sd(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Jd();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (r, a) => {
			if (a.skipChecks) return e._zod.parse(r, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: r.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
			}
			let o = e._zod.parse(r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Jd();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return Fd(this, "~standard", Tp(this));
	},
	set "~standard"(e) {
		Pd(this, "~standard", e);
	}
}), wp = (e) => e.success ? { value: e.data } : { issues: e.error?.issues };
function Tp(e) {
	return {
		validate: (t) => {
			try {
				return wp(hf(e, t));
			} catch {
				return _f(e, t).then(wp);
			}
		},
		vendor: "zod",
		version: 1
	};
}
var Ep = /*@__PURE__*/ H("$ZodString", (e, t) => {
	W.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? $f(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), G = /*@__PURE__*/ H("$ZodStringFormat", (e, t) => {
	mp.init(e, t), Ep.init(e, t);
}), Dp = /*@__PURE__*/ H("$ZodGUID", (e, t) => {
	t.pattern ??= Pf, G.init(e, t);
}), Op = /*@__PURE__*/ H("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= Ff(e);
	} else t.pattern ??= Ff();
	G.init(e, t);
}), kp = /*@__PURE__*/ H("$ZodEmail", (e, t) => {
	t.pattern ??= If, G.init(e, t);
});
function Ap(e, t) {
	if (!t.normalize && t.protocol?.source === Gf.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		return new URL(e);
	} catch {
		return 2;
	}
}
var jp = /[\t\n\r]/g;
function Mp(e) {
	return e.replace(jp, "");
}
function Np(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Pp(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var Fp = /*@__PURE__*/ H("$ZodURL", (e, t) => {
	G.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = Ap(r, t);
			if (i === 1) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === 2) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			t.hostname && !Np(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !Pp(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : Mp(r);
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Ip = /*@__PURE__*/ H("$ZodEmoji", (e, t) => {
	t.pattern ??= Rf(), G.init(e, t);
}), Lp = /*@__PURE__*/ H("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? jf : Mf(t.length), G.init(e, t);
}), Rp = /*@__PURE__*/ H("$ZodCUID", (e, t) => {
	t.pattern ??= Ef, G.init(e, t);
}), zp = /*@__PURE__*/ H("$ZodCUID2", (e, t) => {
	t.pattern ??= Df, G.init(e, t);
}), Bp = /*@__PURE__*/ H("$ZodULID", (e, t) => {
	t.pattern ??= Of, G.init(e, t);
}), Vp = /*@__PURE__*/ H("$ZodXID", (e, t) => {
	t.pattern ??= kf, G.init(e, t);
}), Hp = /*@__PURE__*/ H("$ZodKSUID", (e, t) => {
	t.pattern ??= Af, G.init(e, t);
}), Up = /*@__PURE__*/ H("$ZodISODateTime", (e, t) => {
	t.pattern ??= Qf(t), G.init(e, t), (t.local || t.precision === -1) && (e._zod.bag.laxFormat = !0, e._zod.onattach.push((e) => {
		e._zod.bag.laxFormat = !0;
	}));
}), Wp = /*@__PURE__*/ H("$ZodISODate", (e, t) => {
	t.pattern ??= Yf, G.init(e, t);
}), Gp = /*@__PURE__*/ H("$ZodISOTime", (e, t) => {
	t.pattern ??= Zf(t), G.init(e, t);
}), Kp = /*@__PURE__*/ H("$ZodISODuration", (e, t) => {
	t.pattern ??= Nf, G.init(e, t);
}), qp = /*@__PURE__*/ H("$ZodIPv4", (e, t) => {
	t.pattern ??= zf, G.init(e, t), e._zod.bag.format = "ipv4";
}), Jp = /^[0-9a-fA-F:.]+$/;
function Yp(e) {
	if (!Jp.test(e)) return !1;
	try {
		return new URL(`http://[${e}]`), !0;
	} catch {
		return !1;
	}
}
var Xp = /*@__PURE__*/ H("$ZodIPv6", (e, t) => {
	t.pattern ??= Bf, G.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		Yp(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zp = /*@__PURE__*/ H("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Vf, G.init(e, t);
});
function Qp(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Yp(n);
}
var $p = /*@__PURE__*/ H("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Hf, G.init(e, t), e._zod.check = (n) => {
		Qp(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function em(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var tm = /*@__PURE__*/ H("$ZodBase64", (e, t) => {
	t.pattern ??= Uf, G.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		em(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function nm(e) {
	if (!Wf.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return em(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var rm = /*@__PURE__*/ H("$ZodBase64URL", (e, t) => {
	t.pattern ??= Wf, G.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		nm(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), im = /*@__PURE__*/ H("$ZodE164", (e, t) => {
	t.pattern ??= Kf, G.init(e, t);
});
function am(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var om = /*@__PURE__*/ H("$ZodJWT", (e, t) => {
	G.init(e, t), e._zod.check = (n) => {
		am(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), sm = /*@__PURE__*/ H("$ZodNumber", (e, t) => {
	W.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? tp, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), cm = /*@__PURE__*/ H("$ZodNumberFormat", (e, t) => {
	up.init(e, t), sm.init(e, t);
}), lm = /*@__PURE__*/ H("$ZodBoolean", (e, t) => {
	W.init(e, t), e._zod.pattern = np, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), um = /*@__PURE__*/ H("$ZodUnknown", (e, t) => {
	W.init(e, t), e._zod.parse = (e) => e;
}), dm = /*@__PURE__*/ H("$ZodNever", (e, t) => {
	W.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function fm(e, t, n) {
	e.issues.length && t.issues.push(...wd(n, e.issues)), t.value[n] = e.value;
}
var pm = /*@__PURE__*/ H("$ZodArray", (e, t) => {
	W.init(e, t);
	let n = Xd.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
		let o = [];
		for (let e = 0; e < a.length; e++) {
			let n = a[e], s = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			s instanceof Promise ? o.push(s.then((t) => fm(t, r, e))) : fm(s, r, e);
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
});
function mm(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...wd(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
var hm = [];
function gm(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : hm, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = pd(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function _m(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin, d = c.optout;
	for (let i in t) {
		if (s.has(i)) continue;
		if (i === "__proto__") {
			l === "never" && o.push(i);
			continue;
		}
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => mm(e, n, i, t, u, d))) : mm(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var vm = /* @__PURE__ */ new WeakMap(), ym = /*@__PURE__*/ H("$ZodObject", (e, t) => {
	if (W.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		vm.set(t, e), Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), vm.set(t, n), n;
		} });
	}
	let n = Zu(() => gm(t));
	V(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || z(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let r = ad, i = t.catchall, a, o = Xd.memoizer;
	o?.attach(e), e._zod.parse = (t, s) => {
		a ??= n.value;
		let c = t.value;
		if (!r(c)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: c,
			inst: e
		}), t;
		t.value = o ? o.alloc(e, t, {}, s) : {};
		let l = [], u = a.shape;
		for (let e of a.allKeys) {
			if (e === "__proto__") continue;
			let n = u[e], r = n._zod.optin, i = n._zod.optout, a = n._zod.run({
				value: c[e],
				issues: []
			}, s);
			a instanceof Promise ? l.push(a.then((n) => mm(n, t, e, c, r, i))) : mm(a, t, e, c, r, i);
		}
		return i ? _m(l, c, t, s, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), bm = /*@__PURE__*/ H("$ZodObjectJIT", (e, t) => {
	ym.init(e, t);
	let n = e._zod.parse, r = Zu(() => gm(t)), i = Xd.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new Sp(["payload", "ctx"], {
			shape: t,
			inst: e,
			memo: i,
			syms: a
		}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
          }`;
		o.write("const input = payload.value;");
		let l = Object.create(null), u = 0;
		for (let e of n.allKeys) l[e] = `key_${u++}`;
		o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let e of n.allKeys) {
			if (e === "__proto__") continue;
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : nd(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
			if (o.write(`const ${n} = ${s(r)};`), f && p) {
				let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
				o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
			} else f ? o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
        
        if (${n}.value === undefined) {
          if (${i}) {
            newResult[${r}] = undefined;
          }
        } else {
          newResult[${r}] = ${n}.value;
        }

      `) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
		}
		return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
	}, o, s = ad, c = !Xd.jitless, l = c && od.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? _m([], p, i, f, d, e) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function xm(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !Sd(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Dd(e, r, Zd())))
	}), t);
}
var Sm = /*@__PURE__*/ H("$ZodUnion", (e, t) => {
	W.init(e, t), V(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), V(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), V(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), V(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => $u(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => xm(t, r, e, i)) : xm(o, r, e, i);
	};
}), Cm = /*@__PURE__*/ H("$ZodDiscriminatedUnion", (e, t) => {
	t.inclusive = !1, Sm.init(e, t);
	let n = e._zod.parse;
	V(e, "propValues", (e) => {
		let t = {};
		for (let n of e.def.options) {
			let r = n._zod.propValues;
			if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(n)}"`);
			for (let [e, n] of Object.entries(r)) {
				Object.prototype.hasOwnProperty.call(t, e) || z(t, e, /* @__PURE__ */ new Set());
				for (let r of n) t[e].add(r);
			}
		}
		return t;
	}), t.options.forEach((e, n) => {
		let r = vm.get(e._zod.def);
		if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
	});
	let r = Zu(() => {
		let e = t.options, n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r._zod.propValues?.[t.discriminator];
			if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
			for (let t of e) {
				if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
				n.set(t, r);
			}
		}
		return n;
	});
	e._zod.parse = (i, a) => {
		let o = i.value;
		if (!ad(o)) return i.issues.push({
			code: "invalid_type",
			expected: "object",
			input: o,
			inst: e
		}), i;
		let s = r.value.get(o?.[t.discriminator]);
		return s ? s._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: t.discriminator,
			options: Array.from(r.value.keys()),
			input: o,
			path: [t.discriminator],
			inst: e
		}), i);
	};
}), wm = /*@__PURE__*/ H("$ZodIntersection", (e, t) => {
	W.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Em(e, t, n)) : Em(e, i, a);
	};
});
function Tm(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (sd(e) && sd(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Tm(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Tm(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Em(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = Tm(t.value, n.value);
	if (!c.valid) {
		if (Sd(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var Dm = /*@__PURE__*/ H("$ZodRecord", (e, t) => {
	W.init(e, t);
	let n = Xd.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!sd(a)) return r.issues.push({
			expected: "record",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		let o = [], s = t.keyType._zod.values;
		if (s && !t.partial) {
			r.value = n ? n.alloc(e, r, {}, i) : {};
			let c = /* @__PURE__ */ new Set();
			for (let n of s) if (typeof n == "string" || typeof n == "number" || typeof n == "symbol") {
				if (c.add(typeof n == "number" ? n.toString() : n), n === "__proto__") continue;
				let s = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (s.issues.length) {
					r.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: s.issues.map((e) => Dd(e, i, Zd())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				let l = s.value;
				if (l === "__proto__") continue;
				let u = t.valueType._zod.run({
					value: a[n],
					issues: []
				}, i);
				u instanceof Promise ? o.push(u.then((e) => {
					e.issues.length && r.issues.push(...wd(n, e.issues)), r.value[l] = e.value;
				})) : (u.issues.length && r.issues.push(...wd(n, u.issues)), r.value[l] = u.value);
			}
			let l;
			for (let e in a) if (!c.has(e)) {
				if (t.mode === "loose") {
					if (e === "__proto__") continue;
					r.value[e] = a[e];
				} else l ??= [], l.push(e);
			}
			l && l.length > 0 && r.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: l,
				continue: !0
			});
		} else {
			r.value = n ? n.alloc(e, r, {}, i) : {};
			let c;
			for (let n of Reflect.ownKeys(a)) {
				if (n === "__proto__" || !Object.prototype.propertyIsEnumerable.call(a, n)) continue;
				let l = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (l instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof n == "string" && tp.test(n) && l.issues.length) {
					let e = t.keyType._zod.run({
						value: Number(n),
						issues: []
					}, i);
					if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					e.issues.length === 0 && (l = e);
				}
				if (l.issues.length) {
					t.mode === "loose" ? r.value[n] = a[n] : s ? (c ??= [], c.push(n)) : r.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: l.issues.map((e) => Dd(e, i, Zd())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				let u = l.value;
				if (u === "__proto__") continue;
				let d = t.valueType._zod.run({
					value: a[n],
					issues: []
				}, i);
				d instanceof Promise ? o.push(d.then((e) => {
					e.issues.length && r.issues.push(...wd(n, e.issues)), r.value[u] = e.value;
				})) : (d.issues.length && r.issues.push(...wd(n, d.issues)), r.value[u] = d.value);
			}
			c && c.length > 0 && r.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: c,
				continue: !0
			});
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
}), Om = /*@__PURE__*/ H("$ZodEnum", (e, t) => {
	W.init(e, t);
	let n = Ju(t.entries), r = new Set(n);
	e._zod.values = r;
	let i = n.filter((e) => ld.has(typeof e));
	e._zod.pattern = RegExp(i.length ? `^(${i.map((e) => ud(e.toString())).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), km = /*@__PURE__*/ H("$ZodLiteral", (e, t) => {
	W.init(e, t);
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(t.values.length ? `^(${t.values.map((e) => typeof e == "string" ? ud(e) : e ? ud(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), Am = /*@__PURE__*/ H("$ZodTransform", (e, t) => {
	W.init(e, t), e._zod.optin = "optional", Xd.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Yd(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new Jd();
		return n.value = i, n;
	};
});
function jm(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var Mm = /*@__PURE__*/ H("$ZodOptional", (e, t) => {
	W.init(e, t), V(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", V(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), V(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${$u(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => jm(e, t)) : jm(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), Nm = /*@__PURE__*/ H("$ZodExactOptional", (e, t) => {
	Mm.init(e, t), V(e, "values", (e) => e.def.innerType._zod.values), V(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Pm = /*@__PURE__*/ H("$ZodNullable", (e, t) => {
	W.init(e, t), V(e, "optin", (e) => e.def.innerType._zod.optin), V(e, "optout", (e) => e.def.innerType._zod.optout), V(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${$u(t.source)}|null)$`) : void 0;
	}), V(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Fm = /*@__PURE__*/ H("$ZodDefault", (e, t) => {
	W.init(e, t), e._zod.optin = "defaulted", V(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Im(e, t)) : Im(r, t);
	};
});
function Im(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Lm = /*@__PURE__*/ H("$ZodPrefault", (e, t) => {
	W.init(e, t), e._zod.optin = "defaulted", V(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Rm = /*@__PURE__*/ H("$ZodNonOptional", (e, t) => {
	W.init(e, t), V(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => zm(t, e)) : zm(i, e);
	};
});
function zm(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Bm(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => Dd(e, r, Zd())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var Vm = /*@__PURE__*/ H("$ZodCatch", (e, t) => {
	W.init(e, t), V(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), V(e, "optout", (e) => e.def.innerType._zod.optout), V(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => Bm(e, r, t, n)) : Bm(e, r, t, n);
	};
}), Hm = /*@__PURE__*/ H("$ZodPipe", (e, t) => {
	W.init(e, t), V(e, "values", (e) => e.def.in._zod.values), V(e, "optin", (e) => e.def.in._zod.optin), V(e, "optout", (e) => e.def.out._zod.optout), V(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Um(e, t.in, n)) : Um(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Um(e, t.out, n)) : Um(r, t.out, n);
	};
});
function Um(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Wm = /*@__PURE__*/ H("$ZodReadonly", (e, t) => {
	W.init(e, t), V(e, "propValues", (e) => e.def.innerType._zod.propValues), V(e, "values", (e) => e.def.innerType._zod.values), V(e, "optin", (e) => e.def.innerType?._zod?.optin), V(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Gm) : Gm(r);
	};
});
function Gm(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var Km = /*@__PURE__*/ H("$ZodCustom", (e, t) => {
	U.init(e, t), W.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => qm(t, n, r, e));
		qm(i, n, r, e);
	};
});
function qm(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(Md(e));
	}
}
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/memoizer.js
var Jm = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, Ym = "~memo", Xm = [];
function Zm(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var Qm = /*@__PURE__*/ new WeakMap();
function $m(e, t) {
	let n = Qm.get(e);
	if (n !== void 0) return n;
	if (t.has(e)) return !0;
	t.add(e);
	let r = !1, i = (e) => {
		!r && e?._zod && $m(e, t) && (r = !0);
	}, a = e._zod.def;
	switch (a.type) {
		case "object":
			for (let e of Reflect.ownKeys(a.shape)) i(a.shape[e]);
			i(a.catchall);
			break;
		case "array":
			i(a.element);
			break;
		case "tuple":
			for (let e of a.items) i(e);
			i(a.rest);
			break;
		case "record":
		case "map":
			i(a.keyType), i(a.valueType);
			break;
		case "set":
			i(a.valueType);
			break;
		case "union":
			for (let e of a.options) i(e);
			break;
		case "intersection":
			i(a.left), i(a.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			i(a.innerType);
			break;
		case "pipe":
			i(a.in), i(a.out);
			break;
		case "function":
			i(a.input), i(a.output);
			break;
		case "lazy":
			i(e._zod.innerType);
			break;
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in a) {
			let t = Object.getOwnPropertyDescriptor(a, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) i(n);
				else if (Array.isArray(n)) for (let e of n) i(e);
			}
		}
	}
	return t.delete(e), Qm.set(e, r), r;
}
function eh(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new Map(), e.buckets.set(t, n)), n;
}
var th, nh = [], rh = {
	alloc(e, t, n) {
		let r = th;
		if (!r) return n;
		th = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), nh.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && ah(n, e.value)) throw new Jm();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, r, i;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, a = (o, s) => {
				if (n === void 0 && (n = $m(e, /* @__PURE__ */ new Set()), !n)) return e._zod.parse = t, e._zod.run === a && (e._zod.run = t), t(o, s);
				let c = o.value;
				if (typeof c != "object" || !c) return t(o, s);
				let l = s[Ym];
				l || (l = {
					buckets: /* @__PURE__ */ new Map(),
					backEdges: void 0
				}, s[Ym] = l);
				let u;
				r === s ? u = i : (u = eh(l, e), r = s, i = u);
				let d = u.get(c);
				if (d) return o.value = d.value, d.issues ? d.issues.length && o.issues.push(...Zm(d.issues)) : (o.memo = !0, l.backEdges ?? (l.backEdges = /* @__PURE__ */ new Set()), l.backEdges.add(d.value)), o;
				th = u;
				let f = nh.length, p = t(o, s);
				th = void 0;
				let m = nh.length > f ? nh.pop() : void 0;
				return p instanceof Promise ? p.then((e) => (m && (m.issues = e.issues.length ? Zm(e.issues) : Xm), e)) : (m && (m.issues = p.issues.length ? Zm(p.issues) : Xm), p);
			};
			e._zod.parse = a, e._zod.run === t && (e._zod.run = a);
		});
	}
};
function ih() {
	return rh;
}
function ah(e, t) {
	let n = e[Ym]?.backEdges;
	return n !== void 0 && typeof t == "object" && !!t && n.has(t);
}
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/locales/en.js
var oh = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		credit_card: "credit card number",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	function i(e, t) {
		return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(jd(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${fd(e.values[0])}` : `Invalid option: expected one of ${Yu(e.values, "|")}`;
			case "too_big": {
				let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Yu(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function sh() {
	return { localeError: oh() };
}
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js
var ch, lh = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function uh() {
	return new lh();
}
(ch = globalThis).__zod_globalRegistry ?? (ch.__zod_globalRegistry = uh());
var dh = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function fh(e, t) {
	return new e({
		type: "string",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ph(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mh(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function hh(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function gh(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _h(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vh(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function yh(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function bh(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xh(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Sh(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ch(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wh(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Th(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Eh(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Dh(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oh(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function kh(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ah(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function jh(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Mh(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Nh(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ph(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fh(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ih(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Lh(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Rh(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zh(e, t) {
	return new e({
		type: "number",
		checks: [],
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Bh(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Vh(e, t) {
	return new e({
		type: "boolean",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Hh(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Uh(e, t) {
	return new e({
		type: "never",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wh(e, t) {
	return new sp({
		check: "less_than",
		...B(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Gh(e, t) {
	return new sp({
		check: "less_than",
		...B(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Kh(e, t) {
	return new cp({
		check: "greater_than",
		...B(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function qh(e, t) {
	return new cp({
		check: "greater_than",
		...B(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Jh(e, t) {
	return new lp({
		check: "multiple_of",
		...B(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function Yh(e, t) {
	return new dp({
		check: "max_length",
		...B(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Xh(e, t) {
	return new fp({
		check: "min_length",
		...B(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Zh(e, t) {
	return new pp({
		check: "length_equals",
		...B(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Qh(e, t) {
	return new hp({
		check: "string_format",
		format: "regex",
		...B(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function $h(e) {
	return new gp({
		check: "string_format",
		format: "lowercase",
		...B(e)
	});
}
// @__NO_SIDE_EFFECTS__
function eg(e) {
	return new _p({
		check: "string_format",
		format: "uppercase",
		...B(e)
	});
}
// @__NO_SIDE_EFFECTS__
function tg(e, t) {
	return new vp({
		check: "string_format",
		format: "includes",
		...B(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function ng(e, t) {
	return new yp({
		check: "string_format",
		format: "starts_with",
		...B(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function rg(e, t) {
	return new bp({
		check: "string_format",
		format: "ends_with",
		...B(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function ig(e) {
	return new xp({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function ag(e) {
	return /* @__PURE__ */ ig((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function og() {
	return /* @__PURE__ */ ig((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function sg() {
	return /* @__PURE__ */ ig((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function cg() {
	return /* @__PURE__ */ ig((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function lg() {
	return /* @__PURE__ */ ig((e) => rd(e));
}
// @__NO_SIDE_EFFECTS__
function ug(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...B(n)
	});
}
// @__NO_SIDE_EFFECTS__
function dg(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...B(n)
	});
}
// @__NO_SIDE_EFFECTS__
function fg(e, t) {
	let n = /* @__PURE__ */ pg((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(Md(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(Md(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function pg(e, t) {
	let n = new U({
		check: "custom",
		...B(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js
function mg(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && z(e, t, n[t]);
	return e;
}
function hg(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? dh,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function gg(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function K(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, K(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && mg(o.schema, c), t.io === "input" && q(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function _g(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function vg(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${_g(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + _g(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function yg(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		yg(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
var bg = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), xg = ["oneOf", "anyOf"];
function Sg(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Cg(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!bg.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Sg(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			z(n, r, e.length === 1 ? e[0] : Cg(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = Sg(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function wg(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of bg) if (t in e) return;
	let n = t.filter((e) => xg.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Cg(t);
	else {
		let e = n[0], i = xg.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Cg([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, mg(e, r));
}
function Tg(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : mg(i, s), mg(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) yg(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) wg(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	mg(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, z(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Dg(t, "input", e.processors),
					output: Dg(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function q(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return q(r.element, n);
	if (r.type === "set") return q(r.valueType, n);
	if (r.type === "lazy") return q(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return q(r.innerType, n);
	if (r.type === "intersection") return q(r.left, n) || q(r.right, n);
	if (r.type === "record" || r.type === "map") return q(r.keyType, n) || q(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : q(r.in, n) || q(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (q(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (q(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (q(e, n)) return !0;
		return !!(r.rest && q(r.rest, n));
	}
	return !1;
}
var Eg = (e, t = {}) => (n) => {
	let r = hg({
		...n,
		processors: t
	});
	return K(e, r), vg(r, e), Tg(r, e);
}, Dg = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = hg({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return K(e, o), vg(o, e), Tg(o, e);
}, Og = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, kg = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Og[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Ag = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
	let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (Number.isFinite(c) && c !== 0 ? i.multipleOf = Math.abs(c) : gg(e, t, i, r, `A multipleOf divisor of ${c} cannot be represented in JSON Schema`));
}, jg = (e, t, n, r) => {
	n.type = "boolean";
}, Mg = (e, t, n, r) => {
	n.not = {};
}, Ng = (e, t, n, r) => {
	let i = e._zod.def, a = Ju(i.entries);
	if (a.length === 0) {
		n.not = {};
		return;
	}
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Pg = (e, t, n, r) => {
	let i = e._zod.def;
	if (i.values.length === 0) {
		n.not = {};
		return;
	}
	let a = [];
	for (let o of i.values) if (o === void 0) {
		if (gg(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
	} else if (typeof o == "bigint") {
		if (gg(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
		a.push(Number(o));
	} else a.push(o);
	if (a.length !== 0) {
		if (a.length === 1) {
			let e = a[0];
			n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
		} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
	}
}, Fg = (e, t, n, r) => {
	gg(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, Ig = (e, t, n, r) => {
	gg(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, Lg = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = K(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function Rg(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Rg(t.out) : t.type === "catch" ? Rg(t.innerType) : e._zod.optin;
}
var zg = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && gg(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) z(i.properties, e, K(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	}));
	let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
		let n = a.shape[e];
		return t.io === "input" ? Rg(n) === void 0 : n._zod.optout === void 0;
	}));
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = K(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Bg = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => K(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Vg = (e, t, n, r) => {
	let i = e._zod.def, a = K(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = K(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
};
function Hg(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Hg(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Hg(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? tp : ep).source), p) : p;
}
var Ug = /* @__PURE__ */ new WeakMap();
function Wg(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of Ug.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Hg(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
var Gg = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object";
	let o = a.keyType, s = o._zod.bag?.patterns;
	if (a.mode === "loose" && s && s.size > 0) {
		let e = K(a.valueType, t, {
			...r,
			path: [
				...r.path,
				"patternProperties",
				"*"
			]
		});
		i.patternProperties = {};
		for (let t of s) z(i.patternProperties, t.source, e);
	} else {
		if (t.target === "draft-07" || t.target === "draft-2020-12") {
			i.propertyNames = K(a.keyType, t, {
				...r,
				path: [...r.path, "propertyNames"]
			});
			let n = Ug.get(t);
			n || (n = [], Ug.set(t, n), t.deferred.push(() => Wg(t))), n.push(e);
		}
		i.additionalProperties = K(a.valueType, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		});
	}
	let c = o._zod.values, l = t.io === "input" && Rg(a.valueType) !== void 0;
	if (c && !a.partial && !l) {
		let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
		e.length > 0 && (i.required = e.map(String));
	}
}, Kg = (e, t, n, r) => {
	let i = e._zod.def, a = K(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, qg = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Jg = Symbol();
function Yg(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (gg(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Jg) : JSON.parse(o);
}
var Xg = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = Yg(i.defaultValue, e, t, n, r);
	o !== Jg && (n.default = o);
}, Zg = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = Yg(i.defaultValue, e, t, n, r);
	o !== Jg && (n._prefault = o);
}, Qg = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		gg(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, $g = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	K(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, e_ = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, t_ = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, n_ = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function r_(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var i_ = /*@__PURE__*/ H("ZodError", (e, t) => {
	of.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	n_.has(n) || (n_.add(n), r_(n, "format", (e) => (t) => uf(e, t)), r_(n, "flatten", (e) => (t) => lf(e, t)), r_(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, Xu, 2);
	}), r_(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, Xu, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), a_ = /* @__PURE__ */ ff(i_), o_ = /* @__PURE__ */ pf(i_), s_ = /* @__PURE__ */ mf(i_), c_ = /* @__PURE__ */ gf(i_), l_ = /* @__PURE__ */ vf(i_), u_ = /* @__PURE__ */ yf(i_), d_ = /* @__PURE__ */ bf(i_), f_ = /* @__PURE__ */ xf(i_), p_ = /* @__PURE__ */ Sf(i_), m_ = /* @__PURE__ */ Cf(i_), h_ = /* @__PURE__ */ wf(i_), g_ = /* @__PURE__ */ Tf(i_);
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/schemas.js
function __() {
	Xd.localeError || Zd(sh());
}
function v_() {
	Xd.memoizer || Zd({ memoizer: ih() });
}
var J = /*@__PURE__*/ H("ZodType", (e, t) => (__(), W.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(td(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return dd(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(Fv(e, t));
	},
	superRefine(e, t) {
		return this.check(Iv(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ ig(e));
	},
	optional() {
		return _v(this);
	},
	exactOptional() {
		return yv(this);
	},
	nullable() {
		return xv(this);
	},
	nullish() {
		return _v(xv(this));
	},
	nonoptional(e) {
		return Dv(this, e);
	},
	array() {
		return Q(this);
	},
	or(e) {
		return rv([this, e]);
	},
	and(e) {
		return sv(this, e);
	},
	transform(e) {
		return jv(this, hv(e));
	},
	default(e) {
		return Cv(this, e);
	},
	prefault(e) {
		return Tv(this, e);
	},
	catch(e) {
		return kv(this, e);
	},
	pipe(e) {
		return jv(this, e);
	},
	readonly() {
		return Nv(this);
	},
	describe(e) {
		let t = this.clone();
		return dh.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return dh.get(this);
		let t = this.clone();
		return dh.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return t.length === 0 ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return Fd(this, "~standard", {
			...Tp(this),
			jsonSchema: {
				input: Dg(this, "input"),
				output: Dg(this, "output")
			}
		});
	},
	set "~standard"(e) {
		Pd(this, "~standard", e);
	},
	parse: function e(t, n) {
		return a_(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await o_(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return s_(this, e, t);
	},
	async safeParseAsync(e, t) {
		return c_(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		Pd(this, "spa", e);
	},
	encode: function e(t, n) {
		return l_(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return u_(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await d_(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await f_(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return p_(this, e, t);
	},
	safeDecode(e, t) {
		return m_(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return h_(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return g_(this, e, t);
	},
	toJSONSchema(e) {
		return Eg(this, {})(e);
	},
	get description() {
		return dh.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), y_ = /*@__PURE__*/ H("_ZodString", (e, t) => {
	Ep.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => kg(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null;
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ Qh(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ tg(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ ng(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ rg(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ Xh(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ Yh(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ Zh(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ Xh(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ $h(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ eg(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ og());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ ag(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ sg());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ cg());
	},
	slugify() {
		return this.check(/* @__PURE__ */ lg());
	}
}), b_ = /*@__PURE__*/ H("ZodString", (e, t) => {
	Ep.init(e, t), y_.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ ph(T_, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ yh(O_, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ Ph(W_, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ bh(A_, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ mh(E_, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ hh(D_, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ gh(D_, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ _h(D_, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ vh(D_, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ xh(j_, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ Sh(M_, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ Ch(N_, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ wh(P_, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ jh(V_, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ Mh(H_, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ Th(F_, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ Eh(I_, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ Dh(L_, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ Oh(R_, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ kh(z_, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ Ah(B_, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ Nh(U_, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ Fh(x_, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ Ih(S_, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ Lh(C_, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ Rh(w_, e));
	}
});
function Y(e) {
	return /* @__PURE__ */ fh(b_, e);
}
var X = /*@__PURE__*/ H("ZodStringFormat", (e, t) => {
	G.init(e, t), y_.init(e, t);
}), x_ = /*@__PURE__*/ H("ZodISODateTime", (e, t) => {
	Up.init(e, t), X.init(e, t);
}), S_ = /*@__PURE__*/ H("ZodISODate", (e, t) => {
	Wp.init(e, t), X.init(e, t);
}), C_ = /*@__PURE__*/ H("ZodISOTime", (e, t) => {
	Gp.init(e, t), X.init(e, t);
}), w_ = /*@__PURE__*/ H("ZodISODuration", (e, t) => {
	Kp.init(e, t), X.init(e, t);
}), T_ = /*@__PURE__*/ H("ZodEmail", (e, t) => {
	kp.init(e, t), X.init(e, t);
}), E_ = /*@__PURE__*/ H("ZodGUID", (e, t) => {
	Dp.init(e, t), X.init(e, t);
}), D_ = /*@__PURE__*/ H("ZodUUID", (e, t) => {
	Op.init(e, t), X.init(e, t);
}), O_ = /*@__PURE__*/ H("ZodURL", (e, t) => {
	Fp.init(e, t), X.init(e, t);
});
function k_(e) {
	return /* @__PURE__ */ yh(O_, e);
}
var A_ = /*@__PURE__*/ H("ZodEmoji", (e, t) => {
	Ip.init(e, t), X.init(e, t);
}), j_ = /*@__PURE__*/ H("ZodNanoID", (e, t) => {
	Lp.init(e, t), X.init(e, t);
}), M_ = /*@__PURE__*/ H("ZodCUID", (e, t) => {
	Rp.init(e, t), X.init(e, t);
}), N_ = /*@__PURE__*/ H("ZodCUID2", (e, t) => {
	zp.init(e, t), X.init(e, t);
}), P_ = /*@__PURE__*/ H("ZodULID", (e, t) => {
	Bp.init(e, t), X.init(e, t);
}), F_ = /*@__PURE__*/ H("ZodXID", (e, t) => {
	Vp.init(e, t), X.init(e, t);
}), I_ = /*@__PURE__*/ H("ZodKSUID", (e, t) => {
	Hp.init(e, t), X.init(e, t);
}), L_ = /*@__PURE__*/ H("ZodIPv4", (e, t) => {
	qp.init(e, t), X.init(e, t);
}), R_ = /*@__PURE__*/ H("ZodIPv6", (e, t) => {
	Xp.init(e, t), X.init(e, t);
}), z_ = /*@__PURE__*/ H("ZodCIDRv4", (e, t) => {
	Zp.init(e, t), X.init(e, t);
}), B_ = /*@__PURE__*/ H("ZodCIDRv6", (e, t) => {
	$p.init(e, t), X.init(e, t);
}), V_ = /*@__PURE__*/ H("ZodBase64", (e, t) => {
	tm.init(e, t), X.init(e, t);
}), H_ = /*@__PURE__*/ H("ZodBase64URL", (e, t) => {
	rm.init(e, t), X.init(e, t);
}), U_ = /*@__PURE__*/ H("ZodE164", (e, t) => {
	im.init(e, t), X.init(e, t);
}), W_ = /*@__PURE__*/ H("ZodJWT", (e, t) => {
	om.init(e, t), X.init(e, t);
}), G_ = /*@__PURE__*/ H("ZodNumber", (e, t) => {
	sm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ag(e, t, n, r);
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
}, {
	gt(e, t) {
		return this.check(/* @__PURE__ */ Kh(e, t));
	},
	gte(e, t) {
		return this.check(/* @__PURE__ */ qh(e, t));
	},
	min(e, t) {
		return this.check(/* @__PURE__ */ qh(e, t));
	},
	lt(e, t) {
		return this.check(/* @__PURE__ */ Wh(e, t));
	},
	lte(e, t) {
		return this.check(/* @__PURE__ */ Gh(e, t));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Gh(e, t));
	},
	int(e) {
		return this.check(J_(e));
	},
	safe(e) {
		return this.check(J_(e));
	},
	positive(e) {
		return this.check(/* @__PURE__ */ Kh(0, e));
	},
	nonnegative(e) {
		return this.check(/* @__PURE__ */ qh(0, e));
	},
	negative(e) {
		return this.check(/* @__PURE__ */ Wh(0, e));
	},
	nonpositive(e) {
		return this.check(/* @__PURE__ */ Gh(0, e));
	},
	multipleOf(e, t) {
		return this.check(/* @__PURE__ */ Jh(e, t));
	},
	step(e, t) {
		return this.check(/* @__PURE__ */ Jh(e, t));
	},
	finite() {
		return this;
	}
});
function K_(e) {
	return /* @__PURE__ */ zh(G_, e);
}
var q_ = /*@__PURE__*/ H("ZodNumberFormat", (e, t) => {
	cm.init(e, t), G_.init(e, t);
});
function J_(e) {
	return /* @__PURE__ */ Bh(q_, e);
}
var Y_ = /*@__PURE__*/ H("ZodBoolean", (e, t) => {
	lm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => jg(e, t, n, r);
});
function Z(e) {
	return /* @__PURE__ */ Vh(Y_, e);
}
var X_ = /*@__PURE__*/ H("ZodUnknown", (e, t) => {
	um.init(e, t), J.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Z_() {
	return /* @__PURE__ */ Hh(X_);
}
var Q_ = /*@__PURE__*/ H("ZodNever", (e, t) => {
	dm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Mg(e, t, n, r);
});
function $_(e) {
	return /* @__PURE__ */ Uh(Q_, e);
}
var ev = /*@__PURE__*/ H("ZodArray", (e, t) => {
	v_(), pm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Lg(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ Xh(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ Xh(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Yh(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ Zh(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function Q(e, t) {
	return /* @__PURE__ */ ug(ev, e, t);
}
var tv = /*@__PURE__*/ H("ZodObject", (e, t) => {
	v_(), bm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => zg(e, t, n, r), Vd(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return dv(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone({
			...this._zod.def,
			catchall: e
		});
	},
	passthrough() {
		return this.clone({
			...this._zod.def,
			catchall: Z_()
		});
	},
	loose() {
		return this.clone({
			...this._zod.def,
			catchall: Z_()
		});
	},
	strict() {
		return this.clone({
			...this._zod.def,
			catchall: $_()
		});
	},
	strip() {
		return this.clone({
			...this._zod.def,
			catchall: void 0
		});
	},
	extend(e) {
		return _d(this, e);
	},
	safeExtend(e) {
		return vd(this, e);
	},
	merge(e) {
		return yd(this, e);
	},
	pick(e) {
		return hd(this, e);
	},
	omit(e) {
		return gd(this, e);
	},
	partial(...e) {
		return bd(gv, this, e[0]);
	},
	exactPartial(...e) {
		return bd(vv, this, e[0], "exactPartial");
	},
	required(...e) {
		return xd(Ev, this, e[0]);
	}
});
function $(e, t) {
	return new tv({
		type: "object",
		shape: e ?? {},
		...B(t)
	});
}
var nv = /*@__PURE__*/ H("ZodUnion", (e, t) => {
	Sm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Bg(e, t, n, r), e.options = t.options;
});
function rv(e, t) {
	return new nv({
		type: "union",
		options: e,
		...B(t)
	});
}
var iv = /*@__PURE__*/ H("ZodDiscriminatedUnion", (e, t) => {
	nv.init(e, t), Cm.init(e, t);
});
function av(e, t, n) {
	return new iv({
		type: "union",
		options: t,
		discriminator: e,
		...B(n)
	});
}
var ov = /*@__PURE__*/ H("ZodIntersection", (e, t) => {
	wm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vg(e, t, n, r);
});
function sv(e, t) {
	return new ov({
		type: "intersection",
		left: e,
		right: t
	});
}
var cv = /*@__PURE__*/ H("ZodRecord", (e, t) => {
	v_(), Dm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Gg(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function lv(e, t, n) {
	return !t || !t._zod ? new cv({
		type: "record",
		keyType: Y(),
		valueType: e,
		...B(t)
	}) : new cv({
		type: "record",
		keyType: e,
		valueType: t,
		...B(n)
	});
}
var uv = /*@__PURE__*/ H("ZodEnum", (e, t) => {
	Om.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ng(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new uv({
			...t,
			checks: [],
			...B(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new uv({
			...t,
			checks: [],
			...B(r),
			entries: i
		});
	};
});
function dv(e, t) {
	return new uv({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...B(t)
	});
}
var fv = /*@__PURE__*/ H("ZodLiteral", (e, t) => {
	km.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pg(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function pv(e, t) {
	return new fv({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...B(t)
	});
}
var mv = /*@__PURE__*/ H("ZodTransform", (e, t) => {
	v_(), Am.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ig(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Yd(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(Md(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(Md(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function hv(e) {
	return new mv({
		type: "transform",
		transform: e
	});
}
var gv = /*@__PURE__*/ H("ZodOptional", (e, t) => {
	Mm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => t_(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function _v(e) {
	return new gv({
		type: "optional",
		innerType: e
	});
}
var vv = /*@__PURE__*/ H("ZodExactOptional", (e, t) => {
	Nm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => t_(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function yv(e) {
	return new vv({
		type: "optional",
		innerType: e
	});
}
var bv = /*@__PURE__*/ H("ZodNullable", (e, t) => {
	Pm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Kg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function xv(e) {
	return new bv({
		type: "nullable",
		innerType: e
	});
}
var Sv = /*@__PURE__*/ H("ZodDefault", (e, t) => {
	Fm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xg(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Cv(e, t) {
	return new Sv({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : cd(t);
		}
	});
}
var wv = /*@__PURE__*/ H("ZodPrefault", (e, t) => {
	Lm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Zg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Tv(e, t) {
	return new wv({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : cd(t);
		}
	});
}
var Ev = /*@__PURE__*/ H("ZodNonOptional", (e, t) => {
	Rm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => qg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Dv(e, t) {
	return new Ev({
		type: "nonoptional",
		innerType: e,
		...B(t)
	});
}
var Ov = /*@__PURE__*/ H("ZodCatch", (e, t) => {
	Vm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qg(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function kv(e, t) {
	return new Ov({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Ud(t)
	});
}
var Av = /*@__PURE__*/ H("ZodPipe", (e, t) => {
	Hm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => $g(e, t, n, r), e.in = t.in, e.out = t.out;
});
function jv(e, t) {
	return new Av({
		type: "pipe",
		in: e,
		out: t
	});
}
var Mv = /*@__PURE__*/ H("ZodReadonly", (e, t) => {
	Wm.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => e_(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Nv(e) {
	return new Mv({
		type: "readonly",
		innerType: e
	});
}
var Pv = /*@__PURE__*/ H("ZodCustom", (e, t) => {
	Km.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fg(e, t, n, r);
});
function Fv(e, t = {}) {
	return /* @__PURE__ */ dg(Pv, e, t);
}
function Iv(e, t) {
	return /* @__PURE__ */ fg(e, t);
}
var Lv = {
	art: Y().max(4096).optional().describe("This extension's own mark, as a complete SVG document inline: the tier an author controls fully. Give it a viewBox and let it fill its own square edge to edge; it is drawn as the tile, not as a glyph on a plate. Kept as readable SVG text (not base64) so a registry reviewer can see what they are publishing, drawn inert so it cannot script the page, and capped at 4 KB. Anything that does not parse as SVG falls back to `logo`, then `icon`, then initials."),
	logo: Y().optional().describe("A simple-icons slug, fetched from a CDN: right for standing in for somebody else's product. Add a \"/<hex>\" suffix to force a colour for a mark that vanishes against the surface it lands on. Unreachable in an offline sandbox, so it falls back to `icon`, then to initials."),
	icon: Y().optional().describe("A name from the host's own icon set, drawn when no simple-icons slug fits. It ships in the image, follows the theme and costs no request: what actually carries a first-party extension. An unknown name falls back to initials rather than to a hole.")
}, Rv = {
	name: "agent",
	description: "Declare that this checkout is also a Claude Code plugin, so the agent picks up its skills, agents, hooks, commands and MCP servers each turn. The daemon hands the directory to the plugin loader and never parses what is in it.",
	schema: $({ path: Y().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root.") })
}, zv = {
	name: "automationTemplates",
	description: "Starting points this pack offers in the automation composer, a trigger, a prompt written for that trigger's payload, and whatever guard makes it safe to leave on. Declared by whoever knows the service rather than by the composer, so they appear when your pack is installed and disappear with it. Pure prefill: creating one makes an ordinary automation.",
	schema: Q($({
		id: Y().regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/).describe("Prefills the automation name, and is what \"does one of these exist already\" is asked by, so spell it as an id, not as prose."),
		title: Y().min(1),
		logo: Y().min(1).optional().describe("A simple-icons slug for the card."),
		icon: Y().min(1).optional().describe("A name from the host's icon set, drawn when no simple-icons slug fits."),
		requires: Q(Y().min(1)).optional().describe("Capability providers that make this template work: any one connected is enough (fixing CI rides github or gitlab). Omitted ⇒ nothing to connect, so it is always offered."),
		trigger: $({
			kind: dv([
				"schedule",
				"event",
				"listener",
				"workspace"
			]),
			cron: Y().min(1).optional(),
			provider: Y().min(1).optional(),
			eventType: Y().min(1).optional(),
			event: Y().min(1).optional()
		}).describe("What wakes it. Checked against the real trigger schema when the daemon builds the catalogue, so a template can never offer one that would be refused."),
		guard: Y().min(1).optional().describe("A condition that must hold before the turn runs: what makes a template safe to leave switched on."),
		holdForSeconds: K_().int().positive().optional().describe("Wait this long and coalesce repeats, rather than firing on every event."),
		prompt: Y().min(1).describe("The turn this starts. You own the trigger's payload vocabulary, so you own the prompt that reads it."),
		note: Y().min(1).optional(),
		setup: Y().min(1).optional().describe("What the user must do themselves before this can work."),
		description: Y().min(1).optional(),
		offer: dv(["create", "configure"]).optional().describe("Absent ⇒ it waits in the gallery, where you go once you know what you want. `create` puts a card on the page that makes it, switched off, in one click. `configure` puts one there that opens the dialog prefilled, for a template that cannot work unconfigured. Both are for what a user would never think to go looking for: mark everything as offered and you have rebuilt the gallery with extra steps."),
		chore: Z().optional().describe("Whether what this makes watches THIS codebase rather than the outside world. Declared rather than read off the trigger: a nightly dependency sweep and a nightly Stripe poll are both schedules.")
	}))
}, Bv = {
	name: "bin",
	description: "A checkout-relative directory of executables the daemon puts on the agent's PATH every turn, how you ship the agent a command-line tool. The files are the approved code themselves: they ride the pinned checkout, and the daemon only adds the directory to PATH.",
	schema: Y().min(1).refine((e) => !e.split("/").includes(".."), { message: "bin must stay inside the checkout" })
}, Vv = class extends Error {
	source;
	offset;
	constructor(e, t, n) {
		super(`${e} (in \`${t}\` at ${n})`), this.source = t, this.offset = n, this.name = "WhenSyntaxError";
	}
}, Hv = [
	"&&",
	"||",
	"==",
	"!=",
	">=",
	"<=",
	">",
	"<",
	"(",
	")",
	"[",
	"]",
	",",
	"!"
], Uv = /[A-Za-z_]/, Wv = /[A-Za-z0-9_.-]/, Gv = (e) => {
	let t = [], n = 0;
	for (; n < e.length;) {
		let r = e[n] ?? "";
		if (r.trim() === "") {
			n += 1;
			continue;
		}
		if (r === "'" || r === "\"") {
			let i = e.indexOf(r, n + 1);
			if (i === -1) throw new Vv("unterminated string", e, n);
			t.push({
				kind: "literal",
				value: e.slice(n + 1, i),
				at: n
			}), n = i + 1;
			continue;
		}
		let i = Hv.find((t) => e.startsWith(t, n));
		if (i !== void 0) {
			t.push({
				kind: "punct",
				text: i,
				at: n
			}), n += i.length;
			continue;
		}
		if (/[0-9]/.test(r)) {
			let r = /^[0-9]+(\.[0-9]+)?/.exec(e.slice(n))?.[0] ?? "";
			t.push({
				kind: "literal",
				value: Number(r),
				at: n
			}), n += r.length;
			continue;
		}
		if (Uv.test(r)) {
			let r = n + 1;
			for (; r < e.length && Wv.test(e[r] ?? "");) r += 1;
			let i = e.slice(n, r);
			i === "true" || i === "false" ? t.push({
				kind: "literal",
				value: i === "true",
				at: n
			}) : i === "in" || i === "not" ? t.push({
				kind: "punct",
				text: i,
				at: n
			}) : t.push({
				kind: "key",
				text: i,
				at: n
			}), n = r;
			continue;
		}
		throw new Vv(`unexpected character ${JSON.stringify(r)}`, e, n);
	}
	return t;
}, Kv = class {
	tokens;
	source;
	index = 0;
	constructor(e, t) {
		this.tokens = e, this.source = t;
	}
	parse() {
		let e = this.or(), t = this.tokens[this.index];
		if (t !== void 0) throw new Vv("unexpected trailing input", this.source, t.at);
		return e;
	}
	or() {
		let e = this.and();
		if (!this.at("||")) return e;
		let t = [e];
		for (; this.eat("||");) t.push(this.and());
		return {
			kind: "or",
			operands: t
		};
	}
	and() {
		let e = this.unary();
		if (!this.at("&&")) return e;
		let t = [e];
		for (; this.eat("&&");) t.push(this.unary());
		return {
			kind: "and",
			operands: t
		};
	}
	unary() {
		if (this.eat("!")) return {
			kind: "not",
			operand: this.unary()
		};
		if (this.eat("(")) {
			let e = this.or();
			return this.expect(")"), e;
		}
		let e = this.tokens[this.index];
		if (e?.kind !== "key") throw new Vv("expected a context key", this.source, e?.at ?? this.source.length);
		return this.index += 1, this.tail(e.text);
	}
	tail(e) {
		for (let t of [
			"==",
			"!=",
			">=",
			"<=",
			">",
			"<"
		]) if (this.eat(t)) return {
			kind: "compare",
			key: e,
			op: t,
			value: this.literal()
		};
		return this.eat("in") ? {
			kind: "member",
			key: e,
			values: this.list(),
			negated: !1
		} : this.at("not") ? (this.index += 1, this.expect("in"), {
			kind: "member",
			key: e,
			values: this.list(),
			negated: !0
		}) : {
			kind: "has",
			key: e
		};
	}
	list() {
		this.expect("[");
		let e = [this.literal()];
		for (; this.eat(",");) e.push(this.literal());
		return this.expect("]"), e;
	}
	literal() {
		let e = this.tokens[this.index];
		if (e?.kind !== "literal") throw new Vv("expected a literal value", this.source, e?.at ?? this.source.length);
		return this.index += 1, e.value;
	}
	at(e) {
		let t = this.tokens[this.index];
		return t?.kind === "punct" && t.text === e;
	}
	eat(e) {
		return this.at(e) ? (this.index += 1, !0) : !1;
	}
	expect(e) {
		if (!this.eat(e)) throw new Vv(`expected \`${e}\``, this.source, this.tokens[this.index]?.at ?? this.source.length);
	}
}, qv = (e) => new Kv(Gv(e), e).parse(), Jv = (e) => {
	try {
		return qv(e), !0;
	} catch {
		return !1;
	}
}, Yv = $({
	key: Y().regex(/^[a-zA-Z][a-zA-Z0-9]*$/),
	label: Y().min(1),
	placeholder: Y().optional(),
	secret: Z().optional().describe("Mask it, and never echo it back."),
	optional: Z().optional(),
	multiline: Z().optional(),
	advanced: Z().optional().describe("Fold this field behind the form's Advanced disclosure: for answers whose default is right for nearly everyone. The disclosure opens by itself while any advanced field holds a non-default value, so an edit never hides live settings."),
	boolean: Z().optional().describe("Render it as a switch, carrying \"on\"/\"off\". For an opt-in EXTRA rather than a decision: a two-option picker says the same thing but presents a choice the user must make to proceed, sized like the required fields around it. A switch always holds a value, so a field like this never blocks a submit."),
	hint: Y().optional().describe("A line under this control, for what the label alone cannot say: a host requirement, when a value takes effect. The card's own `hint` speaks for the whole card; this one is bound to the field it qualifies."),
	rebuild: Z().optional().describe("This value only takes effect after the sandbox is rebuilt, because it rides the image overlay. Shown as a chip beside the label: two switches side by side, identical in every visible way, can otherwise cost five seconds or five minutes with no way to tell which."),
	default: Y().optional(),
	options: Q($({
		value: Y(),
		label: Y()
	})).optional().describe("Turns the field into a select."),
	when: Y().refine(Jv, { message: "not a valid `when` condition" }).optional().describe("Only show this field while a condition over the answers already given holds: `auth == 'key'`, `provider in ['ipsec', 'fortinet']`, `!advanced`. Supports `&&`, `||`, `!`, comparisons and `in`."),
	value: Y().optional().describe("A fixed value baked into the config rather than asked for: how a card pins its discriminator (platform=\"reddit\", provider=\"stripe\"). Renders as nothing."),
	totp: Z().optional().describe("This field holds a TOTP seed, the base32 key or otpauth:// URI a service shows when enrolling an authenticator app. Declare it with `secret: true`. Unlike an ordinary secret it never enters the agent's environment: the daemon mints the six-digit codes on demand and only those cross.")
}), Xv = $({
	url: Y().min(1).describe("The URL to call, as a template over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Same spelling as `env`."),
	method: dv([
		"GET",
		"POST",
		"HEAD"
	]).optional().describe("Defaults to GET."),
	headers: lv(Y(), Y()).optional().describe("The request headers, templated the same way: `{\"Authorization\": \"Bearer ${token}\"}`."),
	identity: Y().optional().describe("A dotted path into the JSON answer naming who the caller is (\"login\", \"user.name\"), so success can say which account answered."),
	insecure: Z().optional().describe("Accept a self-signed certificate, for a service whose local install ships one (Obsidian's Local REST API).")
}), Zv = $({
	name: Y().min(1),
	...Lv,
	description: Y().min(1).describe("ONE LINE: aim for 60 characters or fewer. The grid clamps it at two lines in a narrow pane, so a paragraph here is a paragraph the reader gets truncated. Everything longer belongs in `hint`."),
	category: Y().min(1),
	hint: Y().optional().describe("The paragraph, shown under the add form and searched from the catalog, so the words that identify this card to someone hunting for it (\"webauthn\", \"socket mode\") belong here even when the tile cannot show them."),
	guide: $({
		url: Y().optional(),
		urlFromField: Y().optional(),
		path: Y().optional(),
		linkLabel: Y().optional(),
		scopes: Y().optional(),
		steps: Q(Y()).optional()
	}).optional().describe("The walkthrough the install dialog renders for getting the credential this card asks for.")
}), Qv = {
	id: Y().regex(/^[a-z0-9][a-z0-9-]*$/),
	catalog: Zv,
	fields: Q(Yv)
}, $v = {
	name: "capabilities",
	description: "Capability cards this pack adds to the \"+\" grid: a connected CLI tool, a site the agent acts on as the owner through the shared browser, an operating system pack, a browser family the owner connects their own copy of, or a preset over a core kind. The card and its form are data here; the machinery that acts on them is core, which is why a card may only name one of these five kinds.",
	schema: Q(av("kind", [
		$({
			...Qv,
			kind: pv("cli"),
			fields: Q(Yv).min(1),
			env: lv(Y().regex(/^[A-Z][A-Z0-9_]*$/), Y()).describe("The environment the agent's shell gets, as value templates over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Each name is suffixed per instance."),
			skill: Y().min(1).describe("Checkout-relative SKILL.md teaching the agent this tool. `${id}` in it is replaced with the instance name at apply time."),
			fragment: Y().min(1).optional().describe("A Dockerfile fragment holding the client binary this tool needs (psql, mysql, whisper)."),
			pack: Y().min(1).optional().describe("A sandbox feature pack name (whisper, llamacpp, browser, …) supplying this tool. Preferred over `fragment`: an image that already bakes the pack needs no rebuild, and there is no copy to drift."),
			probe: Xv.optional().describe("One authenticated request that tests this card's settings before they are saved, so a wrong token or an unreachable host is answered on the form rather than by a card that says 'not connected' afterwards.")
		}),
		$({
			...Qv,
			kind: pv("browser"),
			loginUrl: k_().optional().describe("What the sign-in window opens; the profile it persists IS the credential. Optional so one card can be the generic one that asks for the URL on its form instead, but a card must either pin this or declare a field that supplies it, or the window opens on nothing."),
			homeUrl: k_().optional().describe("Where that same profile opens once it HAS a session: the owner's own hands on the connected browser. Separate from loginUrl because for some platforms the login lives on another site entirely (YouTube signs in at accounts.google.com)."),
			skill: Y().min(1).describe("Checkout-relative SKILL.md teaching the agent this site's actions: rendered once per site, all its connected accounts on one roster (`${accounts}`), the core tool note at `${tools}`.")
		}),
		$({
			...Qv,
			kind: pv("host"),
			skill: Y().min(1).describe("Checkout-relative SKILL.md teaching the agent that machine's shell.")
		}),
		$({
			...Qv,
			kind: pv("webext"),
			install: k_().describe("Where this browser's extension is installed from: its store listing, or a page offering the build."),
			skill: Y().min(1).describe("Checkout-relative SKILL.md teaching the agent to drive this browser.")
		}),
		$({
			...Qv,
			kind: pv("agent")
		})
	]).superRefine((e, t) => {
		if (e.kind === "cli") for (let n of e.fields.filter((e) => e.totp === !0)) Object.values(e.env).some((e) => e.includes(`\${${n.key}}`) || e.includes(`\${${n.key}:uri}`)) && t.addIssue({
			code: "custom",
			message: `env must not reference the totp field "${n.key}", the daemon mints codes from it instead`
		});
	}))
}, ey = {
	name: "commands",
	description: "Commands this extension may register handlers for, surfaced in the command palette. Title, icon and shortcut all come from here rather than from the registration call, because this is what the owner approved at install.",
	schema: Q($({
		command: Y().regex(/^[a-z0-9][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)+$/),
		title: Y().min(1).describe("What the command palette shows. The manifest's value wins over the one passed at registration."),
		category: Y().min(1).optional().describe("What the command acts on (\"Deployments\", \"Knowledge\"), drawn ahead of the title as \"Category: Title\" and searched with it. Use the extension's own name so its commands group together; omit it and the command stands alone."),
		icon: Y().optional().describe("A name from the host's icon set, drawn beside the title."),
		keybinding: Y().regex(/^\S+$/).optional().describe("A global keyboard shortcut, e.g. \"Mod+Shift+K\" — `Mod` is ⌘ on Apple and Ctrl elsewhere. Declared here because a global shortcut is consequential: the owner approves it at install, and the host binds only what was approved."),
		when: Y().refine(Jv, { message: "not a valid `when` condition" }).optional().describe("When the shortcut applies, as a condition over the shell's context keys, `tabSurface == 'chat'`, `!editableTarget`. Without one the chord is claimed everywhere, including inside a terminal where a bare key belongs to the program running in it. The command palette ignores this: a command is always runnable by name.")
	}))
}, ty = {
	name: "documents",
	description: "Per-directory documents this extension can offer. Your provider marks the rows in the Workspace tree it has something to say about, and the host opens your component as a tab.",
	schema: Q($({
		id: Y().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: Y().min(1).describe("The family's name, shown in the install dialog beside your other contributions. Per-row wording stays with the provider, which is the only thing that knows what it found.")
	}))
}, ny = {
	name: "environment",
	description: "A Dockerfile fragment baked into the sandbox image so your tools are actually installed at runtime: a whisper binary, a psql client. The owner approves the composed overlay and rebuilds out of band, so this does not take effect immediately.",
	schema: $({ fragment: Y().min(1).refine((e) => !e.split("/").includes(".."), { message: "fragment must stay inside the checkout" }).describe("Checkout-relative path to a file holding ONLY RUN and ENV instructions. FROM and privileged directives are rejected: those stay daemon-owned.") })
}, ry = {
	name: "files",
	description: "Which workspace files back your views, so the daemon's file watcher can tell the browser they went stale instead of you polling for it. The agent edits the workspace out of band from every HTTP route, and this push is the only thing that can notice.",
	schema: Q($({
		path: Y().min(1).refine((e) => !e.startsWith("/") && !e.split("/").includes(".."), { message: "path must be workspace-root-relative and stay inside the workspace" }).describe("Workspace-root-relative, forward-slash, matched by prefix, so one entry covers an exact file (`.intentic/config/automations.json`), a directory (`.intentic/config/approvals/`, with the trailing slash so it cannot match a sibling file) or a name family (`.intentic/environment.`). Not a glob."),
		invalidates: Q(Y().min(1)).min(1).describe("The query keys this path makes stale, the first element of your own api.sandbox.key(...) keys. Keep both this and the path as narrow as the view actually needs: a broad prefix costs every connected browser a refetch on every matching write.")
	}))
}, iy = $({
	label: Y().min(1),
	placeholder: Y().min(1),
	hint: Y().min(1).optional().describe("The sentence under the input, for a filter whose empty case is easy to get wrong.")
}), ay = {
	name: "listener",
	description: "A realtime event source this extension supplies, so automations can trigger on it. One declaration feeds both halves: the daemon accepts these event types and serves this provider's control surface, and the automation editor derives its source picker, filters and starter prompt from it, so a newly installed listener is configurable without a matching app release.",
	schema: $({
		provider: Y().regex(/^[a-z0-9][a-z0-9-]*$/).describe("The slug this source's automation triggers fire on."),
		events: Q($({
			type: Y().regex(/^[a-z0-9][a-z0-9_]*$/),
			label: Y().min(1)
		})).min(1).refine((e) => new Set(e.map((e) => e.type)).size === e.length, { message: "listener event types must be unique" }).describe("The event types this source can fire, with the wording the automation editor offers them under. The daemon accepts no others."),
		automation: $({
			label: Y().min(1),
			mentionLabel: Y().min(1).optional().describe("Only for a source whose message events distinguish being addressed. Absent ⇒ the editor offers no mention-only filter, rather than inventing semantics you did not promise."),
			channel: iy.describe("The primary narrowing filter, a channel, a room, a repo."),
			branchField: iy.optional().describe("A second narrowing axis, for a source whose events carry one: a pipeline's git ref, so a trigger can say \"the branch that ships\" rather than \"every agent's every failure\"."),
			sender: iy.optional().describe("How this source names a sender, and where a person finds that id. Declaring it promises that `author.id` is an identity the service vouches for, not a name the sender typed; absent ⇒ the editor offers no sender rules on this source."),
			senderGroup: iy.optional().describe("How this source names a sender's group, for a source whose messages carry `author.groups` (a Discord role). Absent ⇒ rules match ids only."),
			starterPrompt: Y().min(1).describe("The first prompt a new automation on this source is prefilled with. You own the payload vocabulary, so you own the prompt that explains it.")
		}).describe("How the generic automation editor presents this source: its name, its filters, and the prompt it starts people on.")
	})
}, oy = {
	name: "processes",
	description: "Long-lived background processes the daemon runs for this extension: a gateway holding a connection the daemon must not, a dev server. Managed the same way panel dev servers are, and startable and stoppable from the Extensions tab.",
	schema: Q($({
		name: Y().regex(/^[a-z0-9][a-z0-9-]*$/),
		command: Y().min(1),
		cwd: Y().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root."),
		port: pv("auto").optional().describe("Assign a free port and inject it as PORT."),
		preview: Z().optional().describe("Expose the port on a tunnelled preview hostname."),
		autoStart: Z().optional().describe("Launch it on install and on daemon boot, rather than waiting to be started.")
	}))
}, sy = {
	name: "settings",
	description: "Typed settings the host renders into the Settings page for you and persists daemon-side. You never draw the form or store the value; you read it back with api.settings.get.",
	schema: Q($({
		key: Y().regex(/^[a-z0-9][a-zA-Z0-9-]*$/),
		type: dv([
			"boolean",
			"string",
			"number",
			"enum"
		]).describe("Which control the Settings page draws. `enum` reads its choices from `enum`."),
		title: Y().min(1),
		description: Y().optional().describe("The line under the control."),
		default: rv([
			Y(),
			K_(),
			Z()
		]).optional(),
		enum: Q(Y()).optional().describe("The choices, for type \"enum\". Meaningless otherwise."),
		secret: Z().optional().describe("Mask the value in the UI and strip it from reads: a set secret round-trips as 'still set', never as its value."),
		env: Y().regex(/^[A-Z][A-Z0-9_]*$/).optional().describe("Inject the stored value into the agent's shell environment under this name, every turn. How a credential you hold reaches the agent's command-line tools.")
	}))
}, cy = {
	name: "viewers",
	description: "File formats this extension can render. The host resolves an opened file to your viewer by its extension, fetches the content, and renders your component with it: you keep none of the fetch lifecycle and none of the daemon credentials.",
	schema: Q($({
		id: Y().regex(/^[a-z0-9][a-z0-9-]*$/),
		extensions: Q(Y().regex(/^[a-z0-9]+$/)).min(1).describe("Bare file extensions, no dot: e.g. [\"docx\", \"xlsx\"]."),
		fetch: dv([
			"text",
			"blob",
			"url"
		]).describe("How much of the file the host hands you. `text` for a format that is text (svg, a subtitle track). `blob` for one that must be parsed end to end before any of it shows (a .docx, a spreadsheet), bounded by the daemon's raw-read cap. `url` for anything range-read rather than parsed (audio, video): your component gets a streaming URL to point an element at, never the bytes.")
	}))
}, ly = [
	{
		name: "views",
		description: "Sidebar elements this extension may register at runtime. Each entry reserves an id and a surface; the extension supplies the component with api.views.register, and the host refuses any registration this list does not cover.",
		schema: Q($({
			id: Y().regex(/^[a-z0-9][a-z0-9-]*$/),
			label: Y().min(1).describe("The name shown on the tile or tab. The manifest's value wins over the one passed at registration."),
			surface: dv([
				"rail",
				"directory",
				"sandbox"
			]).describe("Where it appears. `rail` is a tile in the global left rail; `directory` is a panel opened from a repo in the Workspace tree; `sandbox` is a tab on the Sandbox hub, for a view whose subject is the box rather than the work."),
			badge: Z().optional().describe("Allow this view to say something on its tile: a count, a glyph, or that work is running there. Declared because a badge interrupts from every other screen in the app; leave it out and any badge the extension registers is dropped.")
		}))
	},
	ry,
	cy,
	ty,
	ey,
	sy,
	oy,
	Rv,
	ny,
	$v,
	ay,
	zv,
	Bv
], uy = $(Object.fromEntries(ly.map((e) => [e.name, e.schema.describe(e.description).optional()]))), dy = $({
	$schema: Y().optional().describe("The authoring schema, for editor completion and validation. Nothing at runtime reads it."),
	publisher: Y().regex(/^[a-z0-9][a-z0-9-]*$/),
	name: Y().regex(/^[a-z0-9][a-z0-9-]*$/),
	version: Y().min(1).describe("Your own semver, display and identity only. The installed code's identity is the pinned commit sha."),
	category: Y().min(1).optional().describe("Which section of the Extensions tab this sits under: a grouping by what it is FOR, which cannot be derived from what it contributes. A section this app has never heard of lands in 'Other' rather than failing to install."),
	...Lv,
	engines: $({ intentic: Y().min(1) }).describe("A semver range over the host's extension API version, checked before your code is activated."),
	entry: Y().min(1).refine((e) => !e.split("/").includes(".."), { message: "entry must stay inside the checkout" }).optional().describe("Repo-relative path of your prebuilt single-file ESM bundle, built with `vue` and `@intentic/extension-api` as externals. Absent ⇒ an extension with no UI."),
	server: Y().min(1).refine((e) => !e.split("/").includes(".."), { message: "server must stay inside the checkout" }).optional().describe("Repo-relative path of your prebuilt single-file node ESM server bundle, exporting `activateServer`. Served under your own route namespace, which the daemon proxies. Nothing is provided at runtime but node builtins, so bundle everything else in. Absent ⇒ no backend."),
	permissions: $({
		sandbox: Q(Y()).optional().describe("Daemon routes your UI half may call. Your own backend namespace needs no entry: its backend is your own code."),
		daemon: Q(Y()).optional().describe("Daemon routes your SERVER half may call. Separate from `sandbox` because the two halves run as different principals: the UI as the owner's session, the backend as a minted per-extension token, so a grant to one must never quietly widen the other.")
	}).optional().describe("How far this extension may reach into the daemon, as \"<METHOD> <path-glob>\" entries where `*` matches one path segment: e.g. \"GET /panels\", \"POST /panels/*/start\". The install dialog shows these, the host refuses anything undeclared, and the usage ledger records which were actually earned."),
	contributes: uy.optional()
}).parse({
	$schema: "https://intentic.dev/intentic-extension.schema.json",
	publisher: "intentic",
	name: "knowledge",
	version: "1.0.0",
	category: "knowledge",
	icon: "sitemap",
	engines: { intentic: "^2.1.0" },
	entry: "dist/extension.js",
	server: "dist/server.js",
	contributes: {
		views: [{
			id: "knowledge",
			label: "Knowledge",
			surface: "sandbox"
		}],
		files: [{
			path: "knowledge/",
			invalidates: ["knowledge"]
		}],
		settings: [{
			key: "folder",
			type: "string",
			title: "Knowledge folder",
			description: "Workspace folder holding the notes. Point it at a folder of notes you already sync if you have one. Live refresh follows the default folder; elsewhere the view catches up on its own poll.",
			default: "knowledge",
			env: "KB_FOLDER"
		}],
		bin: "dist/bin",
		agent: { path: "plugin" },
		capabilities: [{
			id: "obsidian",
			kind: "cli",
			catalog: {
				name: "Obsidian",
				logo: "obsidian",
				description: "Your own Obsidian vault, live from the app.",
				category: "business",
				hint: "Obsidian must be running for the vault to answer. `obsidian pull` / `obsidian push` copy notes each way: a copy, not a sync.",
				guide: {
					url: "https://github.com/coddingtonbear/obsidian-local-rest-api",
					linkLabel: "Open the Local REST API plugin",
					steps: [
						"In Obsidian: install the `Local REST API` community plugin, enable it.",
						"Copy the `API Key` from its settings.",
						"Leave its HTTPS server on `27124`: the self-signed certificate is expected.",
						"Keep Obsidian open: nothing here reaches a closed app.",
						"Turn on writing below if the agent should add notes."
					]
				}
			},
			fields: [
				{
					key: "baseUrl",
					label: "Local REST API URL",
					default: "https://host.docker.internal:27124",
					hint: "The plugin's own address."
				},
				{
					key: "apiKey",
					label: "API key",
					secret: !0
				},
				{
					key: "write",
					label: "Let the agent write notes",
					boolean: !0,
					default: "off",
					hint: "Off = read and search only."
				},
				{
					key: "folder",
					label: "Folder for new notes",
					optional: !0,
					placeholder: "the vault root",
					hint: "Where notes the agent creates land."
				}
			],
			env: {
				OBSIDIAN_URL: "${baseUrl}",
				OBSIDIAN_API_KEY: "${apiKey}",
				OBSIDIAN_WRITE: "${write}",
				OBSIDIAN_FOLDER: "${folder}"
			},
			skill: "skills/obsidian/SKILL.md",
			probe: {
				url: "${baseUrl}/",
				headers: { authorization: "Bearer ${apiKey}" },
				identity: "versions.self",
				insecure: !0
			}
		}]
	}
});
Fl(), wl();
//#endregion
export { Cl as KNOWLEDGE_BASE, qu as activate, dy as manifest };
