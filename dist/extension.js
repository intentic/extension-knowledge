import { hostSlot as e } from "@intentic/extension-api";
import { Fragment as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createSlots as s, createTextVNode as c, createVNode as l, defineComponent as u, isRef as d, mergeModels as f, nextTick as p, normalizeClass as m, normalizeStyle as h, openBlock as g, ref as _, renderList as v, resolveDirective as y, toDisplayString as b, toRef as ee, unref as x, useModel as te, watch as ne, withCtx as S, withDirectives as re, withKeys as C, withModifiers as ie } from "vue";
import { Button as ae, DagGraph as w, FilterBar as T, Icon as oe, InfoHint as se, InfoTable as ce, Markdown as le, NavRail as E, NoteEditor as ue, Notice as de, Picker as fe, Row as pe, SkeletonRows as me, SkeletonSnapshot as he, StatusBadge as ge, formatBytes as _e, formatTimestamp as ve, freshness as ye, noticeOf as be, ui as xe, useKeyedDraft as Se, useLoadingReveal as Ce, useNarrow as we, useNoteDraft as Te, useScrollReset as Ee, useStickyTop as De, vSkeletonSource as Oe } from "@intentic/extension-ui";
import { useMutation as ke, useQuery as Ae, useQueryClient as je } from "@tanstack/vue-query";
//#region \0rolldown/runtime.js
var D = Object.defineProperty, O = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, Me = (e, t) => {
	let n = {};
	for (var r in e) D(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || D(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ne, Pe, Fe = O((() => {
	({bindHost: Ne, host: Pe} = e("ext-knowledge"));
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/util.js
function Ie(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Le(e, t = "|") {
	return e.map((e) => tt(e)).join(t);
}
function Re(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function ze(e) {
	return new kt(e);
}
function Be(e) {
	return e == null;
}
function Ve(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function He(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function k(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Ue(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function A(e) {
	return Ue(e._zod.def) ?? e._zod.def.shape;
}
function We(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return k(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function Ge(e, t, n) {
	t in e ? k(e, t, n) : e[t] = n;
}
function Ke(e, t, n, r) {
	let i = A(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? We(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : Ge(e, a, r ? r(n.value, a) : n.value));
	}
}
function qe(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? We(e, n, () => t[n]) : Ge(e, n, r.value));
	}
}
function j(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Je(e) {
	return JSON.stringify(e);
}
function Ye(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function Xe(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ze(e) {
	if (Xe(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return Xe(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function Qe(e) {
	return Ze(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function $e(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function et(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function M(e) {
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
function tt(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function nt(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
function rt(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return Ke(i, e, it(e, t)), et(e, j(n, {
		shape: i,
		checks: []
	}));
}
function it(e, t) {
	let n = A(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function at(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(it(e, t)), a = {};
	return Ke(a, e, Reflect.ownKeys(A(e)).filter((e) => !i.has(e))), et(e, j(n, {
		shape: a,
		checks: []
	}));
}
function ot(e, t) {
	if (!Ze(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = A(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return et(e, j(e._zod.def, { shape: st(e, t) }));
}
function st(e, t) {
	let n = {};
	return Ke(n, e, Reflect.ownKeys(A(e))), qe(n, t), n;
}
function ct(e, t) {
	if (!Ze(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return et(e, j(e._zod.def, { shape: st(e, t) }));
}
function lt(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return Ke(n, e, Reflect.ownKeys(A(e))), Ke(n, t, Reflect.ownKeys(A(t))), et(e, j(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function ut(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(it(t, n)) : void 0, o = {};
	return Ke(o, t, Reflect.ownKeys(A(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), et(t, j(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function dt(e, t, n) {
	let r = n ? new Set(it(t, n)) : void 0, i = {};
	return Ke(i, t, Reflect.ownKeys(A(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), et(t, j(t._zod.def, { shape: i }));
}
function N(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function ft(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function pt(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function mt(e) {
	return typeof e == "string" ? e : e?.message;
}
function ht(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function gt(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : mt(e.inst?._zod.def?.error?.(e)) ?? mt(a?.(e)) ?? mt(t?.error?.(e)) ?? mt(n.customError?.(e)) ?? mt(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
function _t(e) {
	let t = e.length;
	if (!Ft.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function vt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function yt(e) {
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
function bt(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function xt(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Tt(e, n, r.value);
	}
}
function St(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function Ct(e, t, n) {
	return St(e, t, n, !1);
}
function wt(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return St(this, n, r(this));
			},
			set(e) {
				St(this, n, e);
			}
		});
	}
	return t;
}
function Tt(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : St(this, t, n.bind(this));
		},
		set(e) {
			St(this, t, e);
		}
	});
}
function Et(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
function P(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && It !== e._zod) {
		It = void 0;
		return;
	}
	It = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Rt);
			let e = Lt;
			Lt = !1;
			try {
				let r = n(this);
				return Lt ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), Lt ||= e, r;
			} catch (n) {
				throw delete this[t], Lt ||= e, n;
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
function Dt(e, t, n, r) {
	let i = Et(e, t);
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
function Ot(e) {
	let t = () => e;
	return t[zt] = !0, t;
}
var kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, F = O((() => {
	Kt(), kt = class {
		constructor(e) {
			this._getter = e, this._value = void 0;
		}
		get value() {
			let e = this._getter;
			return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
		}
	}, At = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}, jt = /* @__PURE__*/ ze(() => {
		if (R.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
		try {
			return Function(""), !0;
		} catch {
			return !1;
		}
	}), Mt = /* @__PURE__*/ new Set([
		"string",
		"number",
		"symbol"
	]), Nt = {
		safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
	}, Pt = {
		int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
		uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
	}, Ft = /[\uD800-\uDBFF]/, Lt = !1, Rt = {
		configurable: !0,
		get() {
			Lt = !0;
		}
	}, zt = "~constantCatch";
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/core.js
function Bt(e) {
	let t = Ut;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Ut = null, new e();
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
function I(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Ht.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Ht);
			} finally {
				Ht.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), xt(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? Bt(u) : this;
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
function L(e) {
	return e && Object.assign(R, e), R;
}
var Vt, Ht, Ut, Wt, Gt, R, Kt = O((() => {
	F(), Ht = {
		value: void 0,
		enumerable: !1
	}, Ut = "captureStackTrace" in Error ? Error : null, Wt = class extends Error {
		constructor() {
			super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
		}
	}, Gt = class extends Error {
		constructor(e) {
			super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
		}
	}, (Vt = globalThis).__zod_globalConfig ?? (Vt.__zod_globalConfig = {}), R = globalThis.__zod_globalConfig;
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/errors.js
function qt() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Re, 2), e.message;
}
function Jt(e) {
	this._zod.message = e;
}
function Yt(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Xt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Yt(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Zt(e, t = (e) => e.message) {
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
var Qt, $t, en, tn, nn, rn = O((() => {
	Kt(), F(), Qt = {
		get: qt,
		set: Jt,
		enumerable: !0,
		configurable: !0
	}, $t = {
		value: void 0,
		enumerable: !1
	}, en = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), tn = (e, t) => {
		e.name = "$ZodError", $t.value = t, Object.defineProperty(e, "issues", $t), $t.value = void 0, Object.defineProperty(e, "message", Qt);
		let n = Object.getPrototypeOf(e);
		en.has(n) || (en.add(n), Object.defineProperty(n, "toString", {
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
	}, nn = I("$ZodError", tn), I("$ZodError", tn, void 0, { Parent: Error });
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/parse.js
function an(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
function on(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => gt(e, n, L()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
function sn(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[pn] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new Wt();
	return a.issues.length === 0;
}
var cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn = O((() => {
	Kt(), F(), cn = (e) => {
		let t = (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !1
			} : { async: !1 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise) throw new Wt();
			if (s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => gt(e, o, L())));
				throw At(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, ln = (e) => {
		let t = async (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !0
			} : { async: !0 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise && (s = await s), s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => gt(e, o, L())));
				throw At(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, un = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			async: !1
		} : { async: !1 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (a instanceof Promise) throw new Wt();
		return a.issues.length ? on(e, a.issues, i) : {
			success: !0,
			data: a.value
		};
	}, dn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			async: !0
		} : { async: !0 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		return a instanceof Promise && (a = await a), a.issues.length ? on(e, a.issues, i) : {
			success: !0,
			data: a.value
		};
	}, fn = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), pn = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), mn = ((e, t, n) => {
		let r = e._zod.bag.validator;
		if (r !== void 0) {
			if (r(t) !== fn) return !0;
			if (r.definite === !0 && n === void 0) return !1;
		}
		return sn(e, t, n);
	}), hn = async (e, t, n) => {
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
	}, gn = (e) => {
		let t = cn(e), n = (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return t(e, r, o, an(n, a));
		};
		return n;
	}, _n = (e) => {
		let t = cn(e), n = (e, r, i, a) => t(e, r, i, an(n, a));
		return n;
	}, vn = (e) => {
		let t = ln(e), n = async (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return await t(e, r, o, an(n, a));
		};
		return n;
	}, yn = (e) => {
		let t = ln(e), n = async (e, r, i, a) => await t(e, r, i, an(n, a));
		return n;
	}, bn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return un(e)(t, n, i);
	}, xn = (e) => (t, n, r) => un(e)(t, n, r), Sn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return dn(e)(t, n, i);
	}, Cn = (e) => async (t, n, r) => dn(e)(t, n, r);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/regexes.js
function Tn(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
function En() {
	return new RegExp(Vn, "u");
}
function Dn(e) {
	return RegExp(`^${e}$`);
}
function On(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function kn(e) {
	return RegExp(`^${On(e)}$`);
}
function An(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${On({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${On({ precision: e.precision })}` : n;
	return RegExp(`^${Xn}T(?:${r})$`);
}
var jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir = O((() => {
	jn = /^[cC][0-9a-z]{6,}$/, Mn = /^[0-9a-z]+$/, Nn = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Pn = /^[0-9a-vA-V]{20}$/, Fn = /^[A-Za-z0-9]{27}$/, In = /^[a-zA-Z0-9_-]{21}$/, Ln = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Rn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, zn = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Bn = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Vn = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", Hn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Un = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Wn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Gn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Kn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, qn = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Jn = /^https?$/, Yn = /^\+[1-9]\d{6,14}$/, Xn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Zn = /*@__PURE__*/ Dn(Xn), Qn = /^[\s\S]{0,}$/, $n = /^-?\d+$/, er = /^-?\d+(?:\.\d+)?$/, tr = /^(?:true|false)$/i, nr = /^[^A-Z]*$/, rr = /^[^a-z]*$/;
})), z, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr = O((() => {
	Kt(), ir(), F(), z = /*@__PURE__*/ I("$ZodCheck", (e, t) => {
		var n;
		e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
	}), ar = (e) => {
		let t = e.value;
		return !Be(t) && t.length !== void 0;
	}, or = {
		number: "number",
		bigint: "bigint",
		object: "date"
	}, sr = /*@__PURE__*/ I("$ZodCheckLessThan", (e, t) => {
		z.init(e, t);
		let n = or[typeof t.value];
		e._zod.check = (r) => {
			(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
				origin: or[typeof r.value] ?? n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), cr = /*@__PURE__*/ I("$ZodCheckGreaterThan", (e, t) => {
		z.init(e, t);
		let n = or[typeof t.value];
		e._zod.check = (r) => {
			(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
				origin: or[typeof r.value] ?? n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), lr = /*@__PURE__*/ I("$ZodCheckMultipleOf", (e, t) => {
		z.init(e, t), e._zod.check = (n) => {
			if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
			(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : He(n.value, t.value) === 0) || n.issues.push({
				origin: typeof n.value,
				code: "not_multiple_of",
				divisor: t.value,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), ur = /*@__PURE__*/ I("$ZodCheckNumberFormat", (e, t) => {
		z.init(e, t), t.format = t.format || "float64";
		let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Nt[t.format];
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
	}), dr = /*@__PURE__*/ I("$ZodCheckMaxLength", (e, t) => {
		var n;
		z.init(e, t), (n = e._zod.def).when ?? (n.when = ar), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i > t.maximum ? _t(r) : i) <= t.maximum) return;
			let a = vt(r);
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
	}), fr = /*@__PURE__*/ I("$ZodCheckMinLength", (e, t) => {
		var n;
		z.init(e, t), (n = e._zod.def).when ?? (n.when = ar), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? _t(r) : i) >= t.minimum) return;
			let a = vt(r);
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
	}), pr = /*@__PURE__*/ I("$ZodCheckLengthEquals", (e, t) => {
		var n;
		z.init(e, t), (n = e._zod.def).when ?? (n.when = ar), e._zod.check = (n) => {
			let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? _t(r) : i;
			if (a === t.length) return;
			let o = vt(r), s = a > t.length;
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
	}), mr = /*@__PURE__*/ I("$ZodCheckStringFormat", (e, t) => {
		var n, r;
		z.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
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
	}), hr = /*@__PURE__*/ I("$ZodCheckRegex", (e, t) => {
		mr.init(e, t), e._zod.check = (n) => {
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
	}), gr = /*@__PURE__*/ I("$ZodCheckLowerCase", (e, t) => {
		t.pattern ??= nr, mr.init(e, t);
	}), _r = /*@__PURE__*/ I("$ZodCheckUpperCase", (e, t) => {
		t.pattern ??= rr, mr.init(e, t);
	}), vr = /*@__PURE__*/ I("$ZodCheckIncludes", (e, t) => {
		z.init(e, t);
		let n = $e(t.includes);
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
	}), yr = /*@__PURE__*/ I("$ZodCheckStartsWith", (e, t) => {
		z.init(e, t);
		let n = RegExp(`^${$e(t.prefix)}.*`);
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
	}), br = /*@__PURE__*/ I("$ZodCheckEndsWith", (e, t) => {
		z.init(e, t);
		let n = RegExp(`.*${$e(t.suffix)}$`);
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
	}), xr = /*@__PURE__*/ I("$ZodCheckOverwrite", (e, t) => {
		z.init(e, t), e._zod.check = (e) => {
			e.value = t.tx(e.value);
		};
	});
})), Cr, wr = O((() => {
	Cr = class {
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
})), Tr, Er = O((() => {
	Tr = {
		major: 4,
		minor: 6,
		patch: 5
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/schemas.js
async function Dr(e, t) {
	let n = { async: !0 };
	return ti(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function Or(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return ti(r, n);
			} catch {}
			return Dr(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
function kr(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Ar(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? kr(e) || 2 : jr(e, t);
}
function jr(e, t) {
	if (!t.normalize && t.protocol?.source === Jn.source && !/^https?:\/\//i.test(e)) return 1;
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
function Mr(e) {
	return e.replace(oi, "");
}
function Nr(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Pr(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
function Fr(e) {
	return bi.test(e) ? kr(`http://[${e}]`) : !1;
}
function Ir(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Fr(n);
}
function Lr(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Rr(e) {
	if (!Ei.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Lr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function zr(e, t = null) {
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
function Br(e, t, n) {
	e.issues.length && t.issues.push(...pt(n, e.issues)), t.value[n] = e.value;
}
function Vr(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...pt(n, e.issues));
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
function Hr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Ii, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = nt(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Ur(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (N(n, p)) break;
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
		a instanceof Promise ? e.push(a.then((e) => Vr(e, n, i, t, d, f))) : Vr(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Wr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !N(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => gt(e, r, L())))
	}), t);
}
function Gr(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.options) {
		let r = n._zod.propValues?.[e.discriminator];
		if (!r || r.size === 0) throw Error(`Invalid discriminated union option at index "${e.options.indexOf(n)}"`);
		for (let e of r) if (t.has(e)) {
			if (e !== void 0) throw Error(`Duplicate discriminator value "${String(e)}"`);
			t.set(e, null);
		} else t.set(e, n);
	}
	return t;
}
function Kr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Ze(e) && Ze(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Kr(e[n], t[n]);
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
			let i = e[r], a = t[r], o = Kr(i, a);
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
function qr(e, t, n) {
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
	let c = Kr(t.value, n.value);
	if (!c.valid) {
		if (N(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
function Jr(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
function Yr(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Xr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Zr(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => gt(e, r, L())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
function Qr(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function $r(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
function ei(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(bt(e));
	}
}
var B, ti, ni, V, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na = O((() => {
	Sr(), Kt(), wr(), ir(), F(), Er(), B = /*@__PURE__*/ I("$ZodType", (e, t) => {
		var n;
		e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Tr;
		let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
		for (let t of i) for (let n of t._zod.onattach) n(e);
		if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
			e._zod.run = e._zod.parse;
		});
		else {
			let t = (t, n, r) => {
				if (t.memo) return t;
				let i = N(t), a;
				for (let o of n) {
					if (o._zod.def.when) {
						if (ft(t) || !o._zod.def.when(t)) continue;
					} else if (i) continue;
					let n = t.issues.length, s = o._zod.check(t);
					if (s instanceof Promise && r?.async === !1) throw new Wt();
					if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
						await s, t.issues.length !== n && (ht(t.issues, n, e), i ||= N(t, n));
					});
					else {
						if (t.issues.length === n) continue;
						ht(t.issues, n, e), i ||= N(t, n);
					}
				}
				return a ? a.then(() => t) : t;
			}, n = (n, r, a) => {
				if (N(n)) return n.aborted = !0, n;
				let o = t(r, i, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Wt();
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
					if (a.async === !1) throw new Wt();
					return o.then((e) => t(e, i, a));
				}
				return t(o, i, a);
			};
		}
	}, {
		get "~standard"() {
			return Ct(this, "~standard", Or(this));
		},
		set "~standard"(e) {
			St(this, "~standard", e);
		}
	}), ti = (e, t) => e.issues.length ? { issues: e.issues.map((e) => gt(e, t, L())) } : { value: e.value }, ni = /*@__PURE__*/ I("$ZodString", (e, t) => {
		B.init(e, t), e._zod.pattern = t.pattern ?? Qn, e._zod.parse = (n, r) => {
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
	}), V = /*@__PURE__*/ I("$ZodStringFormat", (e, t) => {
		mr.init(e, t), ni.init(e, t);
	}), ri = /*@__PURE__*/ I("$ZodGUID", (e, t) => {
		t.pattern ??= Rn, V.init(e, t);
	}), ii = /*@__PURE__*/ I("$ZodUUID", (e, t) => {
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
			t.pattern ??= zn(e);
		} else t.pattern ??= zn();
		V.init(e, t);
	}), ai = /*@__PURE__*/ I("$ZodEmail", (e, t) => {
		t.pattern ??= Bn, V.init(e, t);
	}), oi = /[\t\n\r]/g, si = /*@__PURE__*/ I("$ZodURL", (e, t) => {
		V.init(e, t), e._zod.check = (n) => {
			try {
				let r = n.value.trim(), i = Ar(r, t);
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
					n.value = Mr(r);
					return;
				}
				t.hostname && !Nr(i, t.hostname) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), t.protocol && !Pr(i, t.protocol) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), n.value = t.normalize ? i.href : Mr(r);
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
	}), ci = /*@__PURE__*/ I("$ZodEmoji", (e, t) => {
		t.pattern ??= En(), V.init(e, t);
	}), li = /*@__PURE__*/ I("$ZodNanoID", (e, t) => {
		if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
		t.pattern ??= t.length === void 0 ? In : Tn(t.length), V.init(e, t);
	}), ui = /*@__PURE__*/ I("$ZodCUID", (e, t) => {
		t.pattern ??= jn, V.init(e, t);
	}), di = /*@__PURE__*/ I("$ZodCUID2", (e, t) => {
		t.pattern ??= Mn, V.init(e, t);
	}), fi = /*@__PURE__*/ I("$ZodULID", (e, t) => {
		t.pattern ??= Nn, V.init(e, t);
	}), pi = /*@__PURE__*/ I("$ZodXID", (e, t) => {
		t.pattern ??= Pn, V.init(e, t);
	}), mi = /*@__PURE__*/ I("$ZodKSUID", (e, t) => {
		t.pattern ??= Fn, V.init(e, t);
	}), hi = /*@__PURE__*/ I("$ZodISODateTime", (e, t) => {
		t.pattern ??= An(t), V.init(e, t);
	}), gi = /*@__PURE__*/ I("$ZodISODate", (e, t) => {
		t.pattern ??= Zn, V.init(e, t);
	}), _i = /*@__PURE__*/ I("$ZodISOTime", (e, t) => {
		t.pattern ??= kn(t), V.init(e, t);
	}), vi = /*@__PURE__*/ I("$ZodISODuration", (e, t) => {
		t.pattern ??= Ln, V.init(e, t);
	}), yi = /*@__PURE__*/ I("$ZodIPv4", (e, t) => {
		t.pattern ??= Hn, V.init(e, t);
	}), bi = /^[0-9a-fA-F:.]+$/, xi = /*@__PURE__*/ I("$ZodIPv6", (e, t) => {
		t.pattern ??= Un, V.init(e, t), e._zod.check = (n) => {
			Fr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Si = /*@__PURE__*/ I("$ZodCIDRv4", (e, t) => {
		t.pattern ??= Wn, V.init(e, t);
	}), Ci = /*@__PURE__*/ I("$ZodCIDRv6", (e, t) => {
		t.pattern ??= Gn, V.init(e, t), e._zod.check = (n) => {
			Ir(n.value) || n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), wi = /^[0-9a-zA-Z+/]*={0,2}$/, Ti = /*@__PURE__*/ I("$ZodBase64", (e, t) => {
		t.pattern ??= wi, V.init(e, t), e._zod.check = (n) => {
			Lr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Ei = /^[A-Za-z0-9_-]*$/, Di = /*@__PURE__*/ I("$ZodBase64URL", (e, t) => {
		t.pattern ??= Ei, V.init(e, t), e._zod.check = (n) => {
			Rr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Oi = /*@__PURE__*/ I("$ZodE164", (e, t) => {
		t.pattern ??= Yn, V.init(e, t);
	}), ki = /*@__PURE__*/ I("$ZodJWT", (e, t) => {
		V.init(e, t), e._zod.check = (n) => {
			zr(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Ai = /*@__PURE__*/ I("$ZodNumber", (e, t) => {
		B.init(e, t), e._zod.pattern = er, e._zod.parse = (n, r) => {
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
	}), ji = /*@__PURE__*/ I("$ZodNumberFormat", (e, t) => {
		ur.init(e, t), Ai.init(e, t);
	}), Mi = /*@__PURE__*/ I("$ZodBoolean", (e, t) => {
		B.init(e, t), e._zod.pattern = tr, e._zod.parse = (n, r) => {
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
	}), Ni = /*@__PURE__*/ I("$ZodUnknown", (e, t) => {
		B.init(e, t), e._zod.parse = (e) => e;
	}), Pi = /*@__PURE__*/ I("$ZodNever", (e, t) => {
		B.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
			expected: "never",
			code: "invalid_type",
			input: t.value,
			inst: e
		}), t);
	}), Fi = /*@__PURE__*/ I("$ZodArray", (e, t) => {
		B.init(e, t);
		let n = R.memoizer;
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
				if (c instanceof Promise) o.push(c.then((t) => Br(t, r, e)));
				else if (Br(c, r, e), s && c.issues.length !== 0 && N(c)) break;
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Ii = [], Li = /*@__PURE__*/ I("$ZodObject", (e, t) => {
		B.init(e, t);
		let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
		if (r) {
			let e = () => {
				let n = { ...r };
				return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
			};
			e.raw = r, Object.defineProperty(t, "shape", { get: e });
		}
		let i = ze(() => Hr(t));
		P(e, "propValues", (e) => {
			let t = e.def.shape, n = {};
			for (let e in t) {
				let r = t[e]._zod;
				if (r.values) {
					Object.prototype.hasOwnProperty.call(n, e) || k(n, e, /* @__PURE__ */ new Set());
					for (let t of r.values) n[e].add(t);
					r.optin !== void 0 && n[e].add(void 0);
				}
			}
			return n;
		});
		let a = Xe, o = t.catchall, s, c = R.memoizer;
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
					if (N(t, f)) break;
					f = t.issues.length;
				}
				if (e === "__proto__") continue;
				let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
					value: r[e],
					issues: []
				}, n);
				s instanceof Promise ? l.push(s.then((n) => Vr(n, t, e, r, a, o))) : Vr(s, t, e, r, a, o);
			}
			return o ? Ur(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
		};
	}), Ri = /*@__PURE__*/ I("$ZodObjectJIT", (e, t) => {
		Li.init(e, t);
		let n = e._zod.parse, r = ze(() => Hr(t)), i = R.memoizer, a = (t) => {
			let n = r.value, a = n.symbolKeys, o = new Cr(["payload", "ctx"], {
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
				let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Je(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
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
		}, o, s = Xe, c = !R.jitless, l = c && jt.value, u = t.catchall, d;
		e._zod.parse = (i, f) => {
			d ??= r.value;
			let p = i.value;
			return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Ur([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
				expected: "object",
				code: "invalid_type",
				input: p,
				inst: e
			}), i);
		};
	}), zi = /*@__PURE__*/ I("$ZodUnion", (e, t) => {
		B.init(e, t), P(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), P(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), P(e, "values", (e) => {
			if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
		}), P(e, "pattern", (e) => {
			if (e.def.options.every((e) => e._zod.pattern)) {
				let t = e.def.options.map((e) => e._zod.pattern);
				return RegExp(`^(${t.map((e) => Ve(e.source)).join("|")})$`);
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
			return a ? Promise.all(o).then((t) => Wr(t, r, e, i)) : Wr(o, r, e, i);
		};
	}), Bi = /*@__PURE__*/ I("$ZodDiscriminatedUnion", (e, t) => {
		t.inclusive = !1, zi.init(e, t);
		let n = e._zod.parse;
		P(e, "propValues", (e) => {
			let t = {}, n = 0;
			for (let r of e.def.options) {
				let i = r._zod.propValues;
				if (!i || Object.keys(i).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(r)}"`);
				i[e.def.discriminator]?.has(void 0) && n++;
				for (let [e, n] of Object.entries(i)) {
					Object.prototype.hasOwnProperty.call(t, e) || k(t, e, /* @__PURE__ */ new Set());
					for (let r of n) t[e].add(r);
				}
			}
			return !e.def.unionFallback && n > 1 && t[e.def.discriminator]?.delete(void 0), t;
		}), t.options.forEach((e, n) => {
			let r = Ue(e._zod.def);
			if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
		});
		let r = ze(() => Gr(t));
		e._zod.parse = (i, a) => {
			let o = i.value;
			if (!Xe(o)) return i.issues.push({
				code: "invalid_type",
				expected: "object",
				input: o,
				inst: e
			}), i;
			let s = o?.[t.discriminator], c = r.value.get(s);
			return c && (s !== void 0 || a.direction !== "backward") ? c._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
				code: "invalid_union",
				errors: [],
				note: "No matching discriminator",
				discriminator: t.discriminator,
				options: Array.from(r.value.keys()).filter((e) => r.value.get(e) !== null),
				input: o,
				path: [t.discriminator],
				inst: e
			}), i);
		};
	}), Vi = /*@__PURE__*/ I("$ZodIntersection", (e, t) => {
		B.init(e, t), e._zod.parse = (e, n) => {
			let r = e.value, i = t.left._zod.run({
				value: r,
				issues: []
			}, n), a = t.right._zod.run({
				value: r,
				issues: []
			}, n);
			return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => qr(e, t, n)) : qr(e, i, a);
		};
	}), Hi = /*@__PURE__*/ I("$ZodRecord", (e, t) => {
		B.init(e, t);
		let n = R.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Ze(a)) return r.issues.push({
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
							issues: s.issues.map((e) => gt(e, i, L())),
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
						e.issues.length && r.issues.push(...pt(n, e.issues)), r.value[l] = e.value;
					})) : (u.issues.length && r.issues.push(...pt(n, u.issues)), r.value[l] = u.value);
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
					if (typeof n == "string" && er.test(n) && l.issues.length) {
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
							issues: l.issues.map((e) => gt(e, i, L())),
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
						e.issues.length && r.issues.push(...pt(n, e.issues)), r.value[u] = e.value;
					})) : (d.issues.length && r.issues.push(...pt(n, d.issues)), r.value[u] = d.value);
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
	}), Ui = /*@__PURE__*/ I("$ZodEnum", (e, t) => {
		B.init(e, t);
		let n = Ie(t.entries), r = new Set(n);
		e._zod.values = r, P(e, "pattern", (e) => {
			let t = Ie(e.def.entries).filter((e) => Mt.has(typeof e));
			return RegExp(t.length ? `^(${t.map((e) => $e(e.toString())).join("|")})$` : "^[^\\s\\S]$");
		}), e._zod.parse = (t, i) => {
			let a = t.value;
			return r.has(a) || t.issues.push({
				code: "invalid_value",
				values: n,
				input: a,
				inst: e
			}), t;
		};
	}), Wi = /*@__PURE__*/ I("$ZodLiteral", (e, t) => {
		B.init(e, t);
		let n = new Set(t.values);
		e._zod.values = n, P(e, "pattern", (e) => {
			let t = e.def.values;
			return RegExp(t.length ? `^(${t.map((e) => typeof e == "string" ? $e(e) : e ? $e(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$");
		}), e._zod.parse = (r, i) => {
			let a = r.value;
			return n.has(a) || r.issues.push({
				code: "invalid_value",
				values: t.values,
				input: a,
				inst: e
			}), r;
		};
	}), Gi = /*@__PURE__*/ I("$ZodTransform", (e, t) => {
		B.init(e, t), e._zod.optin = "optional", R.memoizer?.guard(e), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Gt(e.constructor.name);
			let i = t.transform(n.value, n);
			if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
			if (i instanceof Promise) throw new Wt();
			return n.value = i, n;
		};
	}), Ki = /*@__PURE__*/ I("$ZodOptional", (e, t) => {
		B.init(e, t), P(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", P(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
		}), P(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Ve(t.source)})?$`) : void 0;
		}), e._zod.parse = (e, n) => {
			if (e.value === void 0) {
				if (t.innerType._zod.optin !== "defaulted") return e;
				let r = t.innerType._zod.run({
					value: e.value,
					issues: []
				}, n);
				return r instanceof Promise ? r.then((t) => Jr(e, t)) : Jr(e, r);
			}
			return t.innerType._zod.run(e, n);
		};
	}), qi = /*@__PURE__*/ I("$ZodExactOptional", (e, t) => {
		Ki.init(e, t), P(e, "values", (e) => e.def.innerType._zod.values), P(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
	}), Ji = /*@__PURE__*/ I("$ZodNullable", (e, t) => {
		B.init(e, t), P(e, "optin", (e) => e.def.innerType._zod.optin), P(e, "optout", (e) => e.def.innerType._zod.optout), P(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Ve(t.source)}|null)$`) : void 0;
		}), P(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
	}), Yi = /*@__PURE__*/ I("$ZodDefault", (e, t) => {
		B.init(e, t), e._zod.optin = "defaulted", P(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			if (e.value === void 0) return e.value = t.defaultValue, e;
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Yr(e, t)) : Yr(r, t);
		};
	}), Xi = /*@__PURE__*/ I("$ZodPrefault", (e, t) => {
		B.init(e, t), e._zod.optin = "defaulted", P(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
	}), Zi = /*@__PURE__*/ I("$ZodNonOptional", (e, t) => {
		B.init(e, t), P(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
		}), e._zod.parse = (n, r) => {
			let i = t.innerType._zod.run(n, r);
			return i instanceof Promise ? i.then((t) => Xr(t, e)) : Xr(i, e);
		};
	}), Qi = /*@__PURE__*/ I("$ZodCatch", (e, t) => {
		B.init(e, t), P(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), P(e, "optout", (e) => e.def.innerType._zod.optout), P(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((r) => Zr(e, r, t, n)) : Zr(e, r, t, n);
		};
	}), $i = /*@__PURE__*/ I("$ZodPipe", (e, t) => {
		B.init(e, t), P(e, "values", (e) => e.def.in._zod.values), P(e, "optin", (e) => e.def.in._zod.optin), P(e, "optout", (e) => e.def.out._zod.optout), P(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if (n.direction === "backward") {
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Qr(e, t.in, n)) : Qr(r, t.in, n);
			}
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Qr(e, t.out, n)) : Qr(r, t.out, n);
		};
	}), ea = /*@__PURE__*/ I("$ZodReadonly", (e, t) => {
		B.init(e, t), P(e, "propValues", (e) => e.def.innerType._zod.propValues), P(e, "values", (e) => e.def.innerType._zod.values), P(e, "optin", (e) => e.def.innerType?._zod?.optin), P(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then($r) : $r(r);
		};
	}), ta = /*@__PURE__*/ I("$ZodCustom", (e, t) => {
		z.init(e, t), B.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
			let r = n.value, i = t.fn(r);
			if (i instanceof Promise) return i.then((t) => ei(t, n, r, e));
			ei(i, n, r, e);
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/memoizer.js
function ra(e) {
	return typeof e == "object" && !!e;
}
function ia(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
function aa(e, t, n) {
	let r = pa.get(e);
	if (r !== void 0) return r ? ga : ma;
	if (t.has(e)) return ga;
	t.add(e);
	let i = ma, a = (e) => {
		if (i !== ga && e?._zod) {
			let r = aa(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = ma;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? ha : o.value?._zod ? aa(o.value, t, n) : ma;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = Ue(c);
			s(e ? o(e, !0) : ha), a(c.catchall);
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
			s(r ? aa(r, t, !1) : ha);
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
	return t.delete(e), oa(e, i);
}
function oa(e, t) {
	return t !== ha && pa.set(e, t === ga), t;
}
function sa(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
function ca() {
	return ya;
}
function la(e, t) {
	let n = e[da]?.backEdges;
	return n !== void 0 && ra(t) && n.has(t);
}
var ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba = O((() => {
	F(), ua = class extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
		}
	}, da = "~memo", fa = [], pa = /*@__PURE__*/ new WeakMap(), ma = 0, ha = 1, ga = 2, va = [], ya = {
		alloc(e, t, n) {
			let r = _a;
			if (!r) return n;
			_a = void 0;
			let i = {
				value: n,
				issues: null
			};
			return r.set(t.value, i), va.push(i), n;
		},
		guard(e) {
			var t;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, n = (e, n) => {
					if (n.direction !== "backward" && la(n, e.value)) throw new ua();
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
						let i = aa(e, /* @__PURE__ */ new Set(), !1);
						if (i === ma) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
						i === ga || r ? n = !0 : r = !0;
					}
					let l = s.value;
					if (!ra(l)) return t(s, c);
					let u = c[da];
					u || (u = {
						buckets: /* @__PURE__ */ new WeakMap(),
						backEdges: void 0
					}, c[da] = u);
					let d;
					i === c ? d = a : (d = sa(u, e), i = c, a = d);
					let f = d.get(l);
					if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...ia(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
					_a = d;
					let p = va.length, m = t(s, c);
					_a = void 0;
					let h = va.length > p ? va.pop() : void 0;
					return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? ia(e.issues) : fa), e)) : (h && (h.issues = m.issues.length ? ia(m.issues) : fa), m);
				};
				e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
			});
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/locales/en.js
function xa() {
	return { localeError: Sa() };
}
var Sa, Ca = O((() => {
	F(), Sa = () => {
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
				case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(yt(e.input), e.input)}`;
				case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${tt(e.values[0])}` : `Invalid option: expected one of ${Le(e.values, "|")}`;
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
				case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Le(e.keys, ", ")}`;
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
function wa() {
	return new Ea();
}
var Ta, Ea, Da, Oa = O((() => {
	Ea = class {
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
	}, (Ta = globalThis).__zod_globalRegistry ?? (Ta.__zod_globalRegistry = wa()), Da = globalThis.__zod_globalRegistry;
})), ka = O((() => {}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/api.js
function Aa(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function ja(e, t) {
	return new e(Aa({
		type: "string",
		...M(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ra(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
	return new e(Aa({
		type: "number",
		checks: [],
		...M(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
	return new e(Aa({
		type: "number",
		coerce: !0,
		checks: [],
		...M(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
	return new e({
		type: "boolean",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function co(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
	return new e({
		type: "never",
		...M(t)
	});
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
	return new sr({
		check: "less_than",
		...M(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
	return new sr({
		check: "less_than",
		...M(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
	return new cr({
		check: "greater_than",
		...M(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function mo(e, t) {
	return new cr({
		check: "greater_than",
		...M(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function ho(e, t) {
	return new lr({
		check: "multiple_of",
		...M(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function go(e, t) {
	return new dr({
		check: "max_length",
		...M(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function _o(e, t) {
	return new fr({
		check: "min_length",
		...M(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
	return new pr({
		check: "length_equals",
		...M(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function yo(e, t) {
	return new hr({
		check: "string_format",
		format: "regex",
		...M(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function bo(e) {
	return new gr({
		check: "string_format",
		format: "lowercase",
		...M(e)
	});
}
// @__NO_SIDE_EFFECTS__
function xo(e) {
	return new _r({
		check: "string_format",
		format: "uppercase",
		...M(e)
	});
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
	return new vr({
		check: "string_format",
		format: "includes",
		...M(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
	return new yr({
		check: "string_format",
		format: "starts_with",
		...M(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
	return new br({
		check: "string_format",
		format: "ends_with",
		...M(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function To(e) {
	return new xr({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
	return /* @__PURE__ */ To((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Do() {
	return /* @__PURE__ */ To((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Oo() {
	return /* @__PURE__ */ To((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function ko() {
	return /* @__PURE__ */ To((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Ao() {
	return /* @__PURE__ */ To((e) => Ye(e));
}
// @__NO_SIDE_EFFECTS__
function jo(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...M(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Mo(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...M(n)
	});
}
// @__NO_SIDE_EFFECTS__
function No(e, t) {
	let n = /* @__PURE__ */ Po((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(bt(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(bt(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Po(e, t) {
	let n = new z({
		check: "custom",
		...M(t)
	});
	return n._zod.check = e, n;
}
var Fo = O((() => {
	Sr(), F();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/to-json-schema.js
function Io(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && k(e, t, n[t]);
	return e;
}
function Lo(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Da,
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
function Ro(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function H(e, t, n = {
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
		a && (o.ref ||= a, H(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Io(o.schema, c), t.io === "input" && U(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function zo(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Bo(e, t) {
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
				ref: `${i("__shared")}#/${r}/${zo(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + zo(a)
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
function Vo(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Vo(e);
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
function Ho(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Uo(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Ko.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Ho(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			k(n, r, e.length === 1 ? e[0] : Uo(e) ?? { allOf: e });
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
			let t = Ho(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Wo(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Ko) if (t in e) return;
	let n = t.filter((e) => qo.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Uo(t);
	else {
		let e = n[0], i = qo.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Uo([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Io(e, r));
}
function Go(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Io(i, s), Io(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
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
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Vo(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) Wo(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Io(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, k(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Yo(t, "input", e.processors),
					output: Yo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function U(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return U(r.element, n);
	if (r.type === "set") return U(r.valueType, n);
	if (r.type === "lazy") return U(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return U(r.innerType, n);
	if (r.type === "intersection") return U(r.left, n) || U(r.right, n);
	if (r.type === "record" || r.type === "map") return U(r.keyType, n) || U(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : U(r.in, n) || U(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (U(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (U(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (U(e, n)) return !0;
		return !!(r.rest && U(r.rest, n));
	}
	return !1;
}
var Ko, qo, Jo, Yo, Xo = O((() => {
	Oa(), F(), Ko = /* @__PURE__ */ new Set([
		"type",
		"properties",
		"required",
		"additionalProperties"
	]), qo = ["oneOf", "anyOf"], Jo = (e, t = {}) => (n) => {
		let r = Lo({
			...n,
			processors: t
		});
		return H(e, r), Bo(r, e), Go(r, e);
	}, Yo = (e, t, n = {}) => (r) => {
		let { libraryOptions: i, target: a } = r ?? {}, o = Lo({
			...i ?? {},
			target: a,
			io: t,
			processors: n
		});
		return H(e, o), Bo(o, e), Go(o, e);
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/json-schema-processors.js
function W(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) ds[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && ts(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && ts(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && ns(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && ns(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && is(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && os(t, i.mime);
	for (let e of i.patterns ?? []) as(t, e);
	return t;
}
function Zo(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Zo(t.out) : t.type === "catch" ? Zo(t.innerType) : e._zod.optin;
}
function Qo(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Qo(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Qo(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? er : $n).source), p) : p;
}
function $o(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of Os.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Qo(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
function es(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (Ro(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Ms) : JSON.parse(o);
}
var ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps, Fs, Is, Ls, Rs, zs = O((() => {
	ir(), na(), Xo(), F(), ts = (e, t, n) => {
		(e[t] === void 0 || n > e[t]) && (e[t] = n);
	}, ns = (e, t, n) => {
		(e[t] === void 0 || n < e[t]) && (e[t] = n);
	}, rs = (e, t) => {
		ts(e, "minimum", t), ns(e, "maximum", t);
	}, is = (e, t) => {
		e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
	}, as = (e, t) => {
		e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
	}, os = (e, t) => {
		e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
	}, ss = (e, t) => {
		e.format = t, t.includes("int") && (e.isInt = !0);
	}, cs = (e, t) => ts(e, "minimum", t.minimum), ls = (e, t) => ns(e, "maximum", t.maximum), us = (e) => (t, n) => {
		ss(t, n.format);
		let [r, i] = e[n.format];
		ts(t, "minimum", r), ns(t, "maximum", i);
	}, ds = {
		greater_than: (e, t) => ts(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
		less_than: (e, t) => ns(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
		multiple_of: (e, t) => is(e, t.value),
		number_format: us(Nt),
		bigint_format: us(Pt),
		min_length: cs,
		max_length: ls,
		length_equals: (e, t) => rs(e, t.length),
		min_size: cs,
		max_size: ls,
		size_equals: (e, t) => rs(e, t.size),
		string_format: (e, t) => {
			ss(e, t.format), t.pattern && as(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
		},
		mime_type: (e, t) => os(e, t.mime)
	}, fs = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	}, ps = /* @__PURE__ */ new Map([[wi, Kn], [Ei, qn]]), ms = (e) => ps.get(e) ?? e, hs = (e, t, n, r) => {
		let i = n;
		i.type = "string";
		let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = W(e);
		if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = fs[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
			let e = [...c].map(ms);
			e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	}, gs = (e, t, n, r) => {
		let i = n, { minimum: a, maximum: o, multipleOf: s, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = W(e);
		i.type = u ? "integer" : "number";
		let d = typeof l == "number" && l >= (a ?? -Infinity), f = typeof c == "number" && c <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
		if (d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), s) {
			let n = /* @__PURE__ */ new Set();
			for (let a of s) Number.isFinite(a) && a !== 0 ? n.add(Math.abs(a)) : Ro(e, t, i, r, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
			let [a, ...o] = n;
			a !== void 0 && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ?? [], ...o.map((e) => ({ multipleOf: e }))]);
		}
	}, _s = (e, t, n, r) => {
		n.type = "boolean";
	}, vs = (e, t, n, r) => {
		n.not = {};
	}, ys = (e, t, n, r) => {}, bs = (e, t, n, r) => {
		let i = e._zod.def, a = Ie(i.entries);
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
			if (Ro(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
		} else if (typeof o == "bigint") {
			if (Ro(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
			a.push(Number(o));
		} else a.push(o);
		if (a.length !== 0) {
			if (a.length === 1) {
				let e = a[0];
				n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
			} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
		}
	}, Ss = (e, t, n, r) => {
		Ro(e, t, n, r, "Custom types cannot be represented in JSON Schema");
	}, Cs = (e, t, n, r) => {
		Ro(e, t, n, r, "Transforms cannot be represented in JSON Schema");
	}, ws = (e, t, n, r) => {
		let i = n, a = e._zod.def, { minimum: o, maximum: s } = W(e);
		typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = H(a.element, t, {
			...r,
			path: [...r.path, "items"]
		});
	}, Ts = (e, t, n, r) => {
		let i = n, a = e._zod.def, o = a.shape;
		if (Object.getOwnPropertySymbols(o).length && Ro(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (let e in o) k(i.properties, e, H(o[e], t, {
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
			(t.io === "input" ? Zo(n) === void 0 : n._zod.optout === void 0) && s.push(e);
		}
		s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = H(a.catchall, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		})) : t.io === "output" && (i.additionalProperties = !1);
	}, Es = (e, t, n, r) => {
		let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => H(e, t, {
			...r,
			path: [
				...r.path,
				a ? "oneOf" : "anyOf",
				n
			]
		}));
		a ? n.oneOf = o : n.anyOf = o;
	}, Ds = (e, t, n, r) => {
		let i = e._zod.def, a = H(i.left, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				0
			]
		}), o = H(i.right, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				1
			]
		}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
		n.allOf = c, t.intersections.push(c);
	}, Os = /* @__PURE__ */ new WeakMap(), ks = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "object";
		let o = a.keyType, s = W(o).patterns;
		if (a.mode === "loose" && s && s.size > 0) {
			let e = H(a.valueType, t, {
				...r,
				path: [
					...r.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (let t of s) k(i.patternProperties, ms(t).source, e);
		} else {
			if (t.target === "draft-07" || t.target === "draft-2020-12") {
				i.propertyNames = H(a.keyType, t, {
					...r,
					path: [...r.path, "propertyNames"]
				});
				let n = Os.get(t);
				n || (n = [], Os.set(t, n), t.deferred.push(() => $o(t))), n.push(e);
			}
			i.additionalProperties = H(a.valueType, t, {
				...r,
				path: [...r.path, "additionalProperties"]
			});
		}
		let c = o._zod.values, l = t.io === "input" && Zo(a.valueType) !== void 0;
		if (c && !a.partial && !l) {
			let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
			e.length > 0 && (i.required = e.map(String));
		}
	}, As = (e, t, n, r) => {
		let i = e._zod.def, a = H(i.innerType, t, r), o = t.seen.get(e);
		t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
	}, js = (e, t, n, r) => {
		let i = e._zod.def;
		H(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ms = Symbol(), Ns = (e, t, n, r) => {
		let i = e._zod.def;
		H(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o = es(i.defaultValue, e, t, n, r);
		o !== Ms && (n.default = o);
	}, Ps = (e, t, n, r) => {
		let i = e._zod.def;
		H(i.innerType, t, r);
		let a = t.seen.get(e);
		if (a.ref = i.innerType, t.io !== "input") return;
		let o = es(i.defaultValue, e, t, n, r);
		o !== Ms && (n._prefault = o);
	}, Fs = (e, t, n, r) => {
		let i = e._zod.def;
		H(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o;
		try {
			o = i.catchValue(void 0);
		} catch {
			Ro(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = o;
	}, Is = (e, t, n, r) => {
		let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
		H(o, t, r);
		let s = t.seen.get(e);
		s.ref = o;
	}, Ls = (e, t, n, r) => {
		let i = e._zod.def;
		H(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType, n.readOnly = !0;
	}, Rs = (e, t, n, r) => {
		let i = e._zod.def;
		H(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	};
})), Bs = O((() => {
	Kt(), wn(), rn(), na(), ba(), Sr(), Er(), F(), ir(), Ca(), Oa(), wr(), ka(), Fo(), Xo(), zs(), Xo();
})), Vs = O((() => {
	Bs();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/errors.js
function Hs(e, t, n) {
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
var Us, Ws, G, Gs = O((() => {
	Bs(), F(), Us = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Ws = (e, t) => {
		nn.init(e, t), e.name = "ZodError";
		let n = Object.getPrototypeOf(e);
		Us.has(n) || (Us.add(n), Hs(n, "format", (e) => (t) => Zt(e, t)), Hs(n, "flatten", (e) => (t) => Xt(e, t)), Hs(n, "addIssue", (e) => (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Re, 2);
		}), Hs(n, "addIssues", (e) => (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Re, 2);
		}), Object.defineProperty(n, "isEmpty", {
			configurable: !0,
			enumerable: !1,
			get() {
				return this.issues.length === 0;
			}
		}));
	}, G = /*@__PURE__*/ I("ZodError", Ws, void 0, { Parent: Error });
})), Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc, rc, ic = O((() => {
	Bs(), Gs(), Ks = /* @__PURE__ */ cn(G), qs = /* @__PURE__ */ ln(G), Js = /* @__PURE__ */ un(G), Ys = /* @__PURE__ */ dn(G), Xs = /* @__PURE__ */ gn(G), Zs = /* @__PURE__ */ _n(G), Qs = /* @__PURE__ */ vn(G), $s = /* @__PURE__ */ yn(G), ec = /* @__PURE__ */ bn(G), tc = /* @__PURE__ */ xn(G), nc = /* @__PURE__ */ Sn(G), rc = /* @__PURE__ */ Cn(G);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/schemas.js
function ac() {
	R.localeError || L(xa());
}
function oc() {
	R.memoizer || L({ memoizer: ca() });
}
function K(e) {
	return /* @__PURE__ */ ja(Ac, e);
}
function sc(e) {
	return /* @__PURE__ */ Ra(Rc, e);
}
function q(e) {
	return /* @__PURE__ */ io(el, e);
}
function cc(e) {
	return /* @__PURE__ */ oo(tl, e);
}
function J(e) {
	return /* @__PURE__ */ so(nl, e);
}
function lc() {
	return /* @__PURE__ */ co(rl);
}
function uc(e) {
	return /* @__PURE__ */ lo(il, e);
}
function Y(e, t) {
	return /* @__PURE__ */ jo(al, e, t);
}
function X(e, t) {
	let n = {
		type: "object",
		shape: e ?? {},
		...M(t)
	};
	return new ol(n);
}
function dc(e, t) {
	return new sl({
		type: "union",
		options: e,
		...M(t)
	});
}
function fc(e, t, n) {
	return new cl({
		type: "union",
		options: t,
		discriminator: e,
		...M(n)
	});
}
function pc(e, t) {
	return new ll({
		type: "intersection",
		left: e,
		right: t
	});
}
function mc(e, t, n) {
	return !t || !t._zod ? new ul({
		type: "record",
		keyType: K(),
		valueType: e,
		...M(t)
	}) : new ul({
		type: "record",
		keyType: e,
		valueType: t,
		...M(n)
	});
}
function hc(e, t) {
	let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new dl({
		type: "enum",
		entries: n,
		...M(t)
	});
}
function gc(e, t) {
	return new fl({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...M(t)
	});
}
function _c(e) {
	return new pl({
		type: "transform",
		transform: e
	});
}
function vc(e) {
	return new ml({
		type: "optional",
		innerType: e
	});
}
function yc(e) {
	return new hl({
		type: "optional",
		innerType: e
	});
}
function bc(e) {
	return new gl({
		type: "nullable",
		innerType: e
	});
}
function xc(e, t) {
	return new _l({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Qe(t);
		}
	});
}
function Sc(e, t) {
	return new vl({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Qe(t);
		}
	});
}
function Cc(e, t) {
	return new yl({
		type: "nonoptional",
		innerType: e,
		...M(t)
	});
}
function wc(e, t) {
	return new bl({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Ot(t)
	});
}
function Tc(e, t) {
	return new xl({
		type: "pipe",
		in: e,
		out: t
	});
}
function Ec(e) {
	return new Sl({
		type: "readonly",
		innerType: e
	});
}
function Dc(e, t = {}) {
	return /* @__PURE__ */ Mo(Cl, e, t);
}
function Oc(e, t) {
	return /* @__PURE__ */ No(e, t);
}
var Z, kc, Ac, Q, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl = O((() => {
	Bs(), zs(), Xo(), Ca(), Vs(), ic(), Z = /*@__PURE__*/ I("ZodType", (e, t) => (ac(), B.init(e, t), e.def = t, e.type = t.type, e), {
		check(...e) {
			let t = this.def;
			return this.clone(j(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
				check: e,
				def: { check: "custom" },
				onattach: []
			} } : e)] }), { parent: !0 });
		},
		with(...e) {
			return this.check(...e);
		},
		clone(e, t) {
			return et(this, e, t);
		},
		brand() {
			return this;
		},
		register(e, t) {
			return e.add(this, t), this;
		},
		refine(e, t) {
			return this.check(Dc(e, t));
		},
		superRefine(e, t) {
			return this.check(Oc(e, t));
		},
		overwrite(e) {
			return this.check(/* @__PURE__ */ To(e));
		},
		optional() {
			return vc(this);
		},
		exactOptional() {
			return yc(this);
		},
		nullable() {
			return bc(this);
		},
		nullish() {
			return vc(bc(this));
		},
		nonoptional(e) {
			return Cc(this, e);
		},
		array() {
			return Y(this);
		},
		or(e) {
			return dc([this, e]);
		},
		and(e) {
			return pc(this, e);
		},
		transform(e) {
			return Tc(this, _c(e));
		},
		default(e) {
			return xc(this, e);
		},
		prefault(e) {
			return Sc(this, e);
		},
		catch(e) {
			return wc(this, e);
		},
		pipe(e) {
			return Tc(this, e);
		},
		readonly() {
			return Ec(this);
		},
		describe(e) {
			let t = this.clone();
			return Da.add(t, { description: e }), t;
		},
		meta(...e) {
			if (e.length === 0) return Da.get(this);
			let t = this.clone();
			return Da.add(t, e[0]), t;
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
			return Ct(this, "~standard", {
				...Or(this),
				jsonSchema: {
					input: Yo(this, "input"),
					output: Yo(this, "output")
				}
			});
		},
		set "~standard"(e) {
			St(this, "~standard", e);
		},
		parse: function e(t, n) {
			return Ks(this, t, n, { callee: e });
		},
		parseAsync: async function e(t, n) {
			return await qs(this, t, n, { callee: e });
		},
		safeParse(e, t) {
			return Js(this, e, t);
		},
		async safeParseAsync(e, t) {
			return Ys(this, e, t);
		},
		get spa() {
			return this?.safeParseAsync;
		},
		set spa(e) {
			St(this, "spa", e);
		},
		validate(e, t) {
			return mn(this, e, t);
		},
		validateAsync(e, t) {
			return hn(this, e, t);
		},
		encode: function e(t, n) {
			return Xs(this, t, n, { callee: e });
		},
		decode: function e(t, n) {
			return Zs(this, t, n, { callee: e });
		},
		encodeAsync: async function e(t, n) {
			return await Qs(this, t, n, { callee: e });
		},
		decodeAsync: async function e(t, n) {
			return await $s(this, t, n, { callee: e });
		},
		safeEncode(e, t) {
			return ec(this, e, t);
		},
		safeDecode(e, t) {
			return tc(this, e, t);
		},
		async safeEncodeAsync(e, t) {
			return nc(this, e, t);
		},
		async safeDecodeAsync(e, t) {
			return rc(this, e, t);
		},
		toJSONSchema(e) {
			return Jo(this, {})(e);
		},
		get description() {
			return Da.get(this)?.description;
		},
		get _def() {
			return this._zod.def;
		}
	}), kc = /*@__PURE__*/ I("_ZodString", (e, t) => {
		ni.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => hs(e, t, n, r);
	}, /*@__PURE__*/ wt({
		format: (e) => W(e).format ?? null,
		minLength: (e) => W(e).minimum ?? null,
		maxLength: (e) => W(e).maximum ?? null
	}, {
		regex(...e) {
			return this.check(/* @__PURE__ */ yo(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ So(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ Co(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ wo(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ _o(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ go(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ vo(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ _o(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ bo(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ xo(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ Do());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ Eo(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ Oo());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ ko());
		},
		slugify() {
			return this.check(/* @__PURE__ */ Ao());
		}
	})), Ac = /*@__PURE__*/ I("ZodString", (e, t) => {
		ni.init(e, t), kc.init(e, t);
	}, {
		email(e) {
			return this.check(/* @__PURE__ */ Ma(Fc, e));
		},
		url(e) {
			return this.check(/* @__PURE__ */ Ra(Rc, e));
		},
		jwt(e) {
			return this.check(/* @__PURE__ */ $a($c, e));
		},
		emoji(e) {
			return this.check(/* @__PURE__ */ za(zc, e));
		},
		guid(e) {
			return this.check(/* @__PURE__ */ Na(Ic, e));
		},
		uuid(e) {
			return this.check(/* @__PURE__ */ Pa(Lc, e));
		},
		uuidv4(e) {
			return this.check(/* @__PURE__ */ Fa(Lc, e));
		},
		uuidv6(e) {
			return this.check(/* @__PURE__ */ Ia(Lc, e));
		},
		uuidv7(e) {
			return this.check(/* @__PURE__ */ La(Lc, e));
		},
		nanoid(e) {
			return this.check(/* @__PURE__ */ Ba(Bc, e));
		},
		cuid(e) {
			return this.check(/* @__PURE__ */ Va(Vc, e));
		},
		cuid2(e) {
			return this.check(/* @__PURE__ */ Ha(Hc, e));
		},
		ulid(e) {
			return this.check(/* @__PURE__ */ Ua(Uc, e));
		},
		base64(e) {
			return this.check(/* @__PURE__ */ Xa(Xc, e));
		},
		base64url(e) {
			return this.check(/* @__PURE__ */ Za(Zc, e));
		},
		xid(e) {
			return this.check(/* @__PURE__ */ Wa(Wc, e));
		},
		ksuid(e) {
			return this.check(/* @__PURE__ */ Ga(Gc, e));
		},
		ipv4(e) {
			return this.check(/* @__PURE__ */ Ka(Kc, e));
		},
		ipv6(e) {
			return this.check(/* @__PURE__ */ qa(qc, e));
		},
		cidrv4(e) {
			return this.check(/* @__PURE__ */ Ja(Jc, e));
		},
		cidrv6(e) {
			return this.check(/* @__PURE__ */ Ya(Yc, e));
		},
		e164(e) {
			return this.check(/* @__PURE__ */ Qa(Qc, e));
		},
		datetime(e) {
			return this.check(/* @__PURE__ */ eo(jc, e));
		},
		date(e) {
			return this.check(/* @__PURE__ */ to(Mc, e));
		},
		time(e) {
			return this.check(/* @__PURE__ */ no(Nc, e));
		},
		duration(e) {
			return this.check(/* @__PURE__ */ ro(Pc, e));
		}
	}), Q = /*@__PURE__*/ I("ZodStringFormat", (e, t) => {
		V.init(e, t), kc.init(e, t);
	}), jc = /*@__PURE__*/ I("ZodISODateTime", (e, t) => {
		hi.init(e, t), Q.init(e, t);
	}), Mc = /*@__PURE__*/ I("ZodISODate", (e, t) => {
		gi.init(e, t), Q.init(e, t);
	}), Nc = /*@__PURE__*/ I("ZodISOTime", (e, t) => {
		_i.init(e, t), Q.init(e, t);
	}), Pc = /*@__PURE__*/ I("ZodISODuration", (e, t) => {
		vi.init(e, t), Q.init(e, t);
	}), Fc = /*@__PURE__*/ I("ZodEmail", (e, t) => {
		ai.init(e, t), Q.init(e, t);
	}), Ic = /*@__PURE__*/ I("ZodGUID", (e, t) => {
		ri.init(e, t), Q.init(e, t);
	}), Lc = /*@__PURE__*/ I("ZodUUID", (e, t) => {
		ii.init(e, t), Q.init(e, t);
	}), Rc = /*@__PURE__*/ I("ZodURL", (e, t) => {
		si.init(e, t), Q.init(e, t);
	}), zc = /*@__PURE__*/ I("ZodEmoji", (e, t) => {
		ci.init(e, t), Q.init(e, t);
	}), Bc = /*@__PURE__*/ I("ZodNanoID", (e, t) => {
		li.init(e, t), Q.init(e, t);
	}), Vc = /*@__PURE__*/ I("ZodCUID", (e, t) => {
		ui.init(e, t), Q.init(e, t);
	}), Hc = /*@__PURE__*/ I("ZodCUID2", (e, t) => {
		di.init(e, t), Q.init(e, t);
	}), Uc = /*@__PURE__*/ I("ZodULID", (e, t) => {
		fi.init(e, t), Q.init(e, t);
	}), Wc = /*@__PURE__*/ I("ZodXID", (e, t) => {
		pi.init(e, t), Q.init(e, t);
	}), Gc = /*@__PURE__*/ I("ZodKSUID", (e, t) => {
		mi.init(e, t), Q.init(e, t);
	}), Kc = /*@__PURE__*/ I("ZodIPv4", (e, t) => {
		yi.init(e, t), Q.init(e, t);
	}), qc = /*@__PURE__*/ I("ZodIPv6", (e, t) => {
		xi.init(e, t), Q.init(e, t);
	}), Jc = /*@__PURE__*/ I("ZodCIDRv4", (e, t) => {
		Si.init(e, t), Q.init(e, t);
	}), Yc = /*@__PURE__*/ I("ZodCIDRv6", (e, t) => {
		Ci.init(e, t), Q.init(e, t);
	}), Xc = /*@__PURE__*/ I("ZodBase64", (e, t) => {
		Ti.init(e, t), Q.init(e, t);
	}), Zc = /*@__PURE__*/ I("ZodBase64URL", (e, t) => {
		Di.init(e, t), Q.init(e, t);
	}), Qc = /*@__PURE__*/ I("ZodE164", (e, t) => {
		Oi.init(e, t), Q.init(e, t);
	}), $c = /*@__PURE__*/ I("ZodJWT", (e, t) => {
		ki.init(e, t), Q.init(e, t);
	}), el = /*@__PURE__*/ I("ZodNumber", (e, t) => {
		Ai.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => gs(e, t, n, r), e.isFinite = !0;
	}, /*@__PURE__*/ wt({
		minValue: (e) => {
			let { minimum: t, exclusiveMinimum: n } = W(e);
			return Math.max(t ?? -Infinity, n ?? -Infinity);
		},
		maxValue: (e) => {
			let { maximum: t, exclusiveMaximum: n } = W(e);
			return Math.min(t ?? Infinity, n ?? Infinity);
		},
		isInt: (e) => {
			let { isInt: t, multipleOf: n } = W(e);
			return !!t || !!n?.some(Number.isSafeInteger);
		},
		format: (e) => W(e).format ?? null
	}, {
		gt(e, t) {
			return this.check(/* @__PURE__ */ po(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ mo(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ mo(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ uo(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ fo(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ fo(e, t));
		},
		int(e) {
			return this.check(cc(e));
		},
		safe(e) {
			return this.check(cc(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ po(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ mo(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ uo(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ fo(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ ho(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ ho(e, t));
		},
		finite() {
			return this;
		}
	})), tl = /*@__PURE__*/ I("ZodNumberFormat", (e, t) => {
		ji.init(e, t), el.init(e, t);
	}), nl = /*@__PURE__*/ I("ZodBoolean", (e, t) => {
		Mi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => _s(e, t, n, r);
	}), rl = /*@__PURE__*/ I("ZodUnknown", (e, t) => {
		Ni.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ys(e, t, n, r);
	}), il = /*@__PURE__*/ I("ZodNever", (e, t) => {
		Pi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => vs(e, t, n, r);
	}), al = /*@__PURE__*/ I("ZodArray", (e, t) => {
		oc(), Fi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ws(e, t, n, r), e.element = t.element;
	}, {
		min(e, t) {
			return this.check(/* @__PURE__ */ _o(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ _o(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ go(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ vo(e, t));
		},
		unwrap() {
			return this.element;
		}
	}), ol = /*@__PURE__*/ I("ZodObject", (e, t) => {
		oc(), Ri.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ts(e, t, n, r), Dt(e, "shape", (e) => e._zod.def.shape, !1);
	}, {
		keyof() {
			return hc(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone(j(this._zod.def, { catchall: e }));
		},
		passthrough() {
			return this.clone(j(this._zod.def, { catchall: lc() }));
		},
		loose() {
			return this.clone(j(this._zod.def, { catchall: lc() }));
		},
		strict() {
			return this.clone(j(this._zod.def, { catchall: uc() }));
		},
		strip() {
			return this.clone(j(this._zod.def, { catchall: void 0 }));
		},
		extend(e) {
			return ot(this, e);
		},
		safeExtend(e) {
			return ct(this, e);
		},
		merge(e) {
			return lt(this, e);
		},
		pick(e) {
			return rt(this, e);
		},
		omit(e) {
			return at(this, e);
		},
		partial(...e) {
			return ut(ml, this, e[0]);
		},
		exactPartial(...e) {
			return ut(hl, this, e[0], "exactPartial");
		},
		required(...e) {
			return dt(yl, this, e[0]);
		}
	}), sl = /*@__PURE__*/ I("ZodUnion", (e, t) => {
		zi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Es(e, t, n, r), e.options = t.options;
	}), cl = /*@__PURE__*/ I("ZodDiscriminatedUnion", (e, t) => {
		sl.init(e, t), Bi.init(e, t);
	}), ll = /*@__PURE__*/ I("ZodIntersection", (e, t) => {
		Vi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ds(e, t, n, r);
	}), ul = /*@__PURE__*/ I("ZodRecord", (e, t) => {
		oc(), Hi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ks(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
	}), dl = /*@__PURE__*/ I("ZodEnum", (e, t) => {
		Ui.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => bs(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
		let n = new Set(Object.keys(t.entries));
		e.extract = (e, r) => {
			let i = {};
			for (let r of e) if (n.has(r)) i[r] = t.entries[r];
			else throw Error(`Key ${r} not found in enum`);
			return new dl({
				...t,
				checks: [],
				...M(r),
				entries: i
			});
		}, e.exclude = (e, r) => {
			let i = { ...t.entries };
			for (let t of e) if (n.has(t)) delete i[t];
			else throw Error(`Key ${t} not found in enum`);
			return new dl({
				...t,
				checks: [],
				...M(r),
				entries: i
			});
		};
	}), fl = /*@__PURE__*/ I("ZodLiteral", (e, t) => {
		Wi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => xs(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
			if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0];
		} });
	}), pl = /*@__PURE__*/ I("ZodTransform", (e, t) => {
		oc(), Gi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cs(e, t, n, r), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Gt(e.constructor.name);
			n.addIssue = (r) => {
				if (typeof r == "string") n.issues.push(bt(r, n.value, t));
				else {
					let t = r;
					t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(bt(t));
				}
			};
			let i = t.transform(n.value, n);
			return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
		};
	}), ml = /*@__PURE__*/ I("ZodOptional", (e, t) => {
		Ki.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Rs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), hl = /*@__PURE__*/ I("ZodExactOptional", (e, t) => {
		qi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Rs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), gl = /*@__PURE__*/ I("ZodNullable", (e, t) => {
		Ji.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => As(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), _l = /*@__PURE__*/ I("ZodDefault", (e, t) => {
		Yi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ns(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
	}), vl = /*@__PURE__*/ I("ZodPrefault", (e, t) => {
		Xi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ps(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), yl = /*@__PURE__*/ I("ZodNonOptional", (e, t) => {
		Zi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => js(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), bl = /*@__PURE__*/ I("ZodCatch", (e, t) => {
		Qi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fs(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
	}), xl = /*@__PURE__*/ I("ZodPipe", (e, t) => {
		$i.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Is(e, t, n, r), e.in = t.in, e.out = t.out;
	}), Sl = /*@__PURE__*/ I("ZodReadonly", (e, t) => {
		ea.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ls(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), Cl = /*@__PURE__*/ I("ZodCustom", (e, t) => {
		ta.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ss(e, t, n, r);
	});
})), Tl = O((() => {
	Bs();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/coerce.js
function El(e) {
	return /* @__PURE__ */ ao(el, e);
}
var Dl = O((() => {
	Bs(), wl();
})), Ol = O((() => {
	Bs(), wl(), Vs(), Gs(), ic(), Tl(), zs(), Oa(), F(), Vs(), wl(), na(), Ca(), Dl();
})), $ = O((() => {
	Ol(), Ol();
})), kl, Al, jl, Ml, Nl, Pl, Fl, Il, Ll, Rl, zl = O((() => {
	$(), kl = X({
		path: K(),
		title: K(),
		type: K().optional(),
		tags: Y(K()),
		aliases: Y(K()),
		linkCount: q(),
		backlinkCount: q(),
		sizeBytes: q(),
		modifiedAt: q()
	}), Al = X({
		relation: K().optional(),
		path: K().optional(),
		title: K()
	}), jl = X({
		summary: kl,
		content: K(),
		body: K(),
		facts: Y(X({
			key: K(),
			values: Y(K())
		})),
		linksTo: Y(Al),
		linkedFrom: Y(Al)
	}), X({ path: K().min(1) }), X({
		q: K().optional(),
		type: K().optional(),
		tag: K().optional(),
		linkedTo: K().optional(),
		limit: El().int().positive().max(500).optional()
	}), Ml = X({
		path: K(),
		title: K(),
		type: K().optional(),
		tags: Y(K()),
		modifiedAt: q(),
		matched: K(),
		snippet: K().optional()
	}), Nl = X({ hits: Y(Ml) }), Pl = X({
		name: K(),
		count: q()
	}), Fl = X({
		word: K(),
		uses: q(),
		notes: Y(K())
	}), Il = X({
		folder: K(),
		noteCount: q(),
		linkCount: q(),
		types: Y(Pl),
		tags: Y(Pl),
		vocabulary: X({
			types: Y(K()),
			relations: Y(K()),
			path: K().optional()
		}),
		broken: Y(X({
			from: K(),
			target: K(),
			relation: K().optional()
		})),
		orphans: Y(K()),
		untyped: Y(K()),
		typeDrift: Y(Fl),
		relationDrift: Y(Fl),
		unreadable: Y(X({
			path: K(),
			keys: Y(K())
		})),
		ambiguous: Y(X({
			name: K(),
			notes: Y(K())
		}))
	}), X({
		focus: K().min(1),
		depth: El().int().min(1).max(4).optional()
	}), Ll = X({
		focus: K().optional(),
		nodes: Y(X({
			path: K(),
			title: K(),
			type: K().optional(),
			depth: q()
		})),
		edges: Y(X({
			from: K(),
			to: K(),
			relation: K().optional()
		})),
		omitted: q()
	}), X({
		path: K().min(1),
		content: K().max(1048576)
	}), X({ ok: gc(!0) }), Rl = X({ written: Y(K()) });
}));
//#endregion
//#region src/useKnowledge.ts
function Bl() {
	let e = Pe(), t = Ae({
		queryKey: e.sandbox.key("knowledge", "overview"),
		queryFn: async () => Il.parse(await e.backend.json("overview")),
		enabled: n(() => e.sandbox.reachable()),
		refetchInterval: Gl
	});
	return {
		overview: n(() => t.data.value),
		error: n(() => t.error.value?.message),
		isLoading: n(() => t.isLoading.value)
	};
}
function Vl(e) {
	let t = Pe(), r = Ae({
		queryKey: n(() => t.sandbox.key("knowledge", "search", e.value.q, e.value.type ?? "", e.value.tag ?? "", e.value.linkedTo ?? "")),
		queryFn: async () => Nl.parse(await t.backend.json(`search?${Kl({
			q: e.value.q,
			type: e.value.type,
			tag: e.value.tag,
			linkedTo: e.value.linkedTo,
			limit: 200
		})}`)).hits,
		enabled: n(() => t.sandbox.reachable()),
		refetchInterval: Gl,
		placeholderData: (e) => e
	});
	return {
		hits: n(() => r.data.value ?? []),
		error: n(() => r.error.value?.message),
		isLoading: n(() => r.isLoading.value),
		isFetching: n(() => r.isFetching.value)
	};
}
function Hl(e) {
	let t = Pe(), r = Ae({
		queryKey: n(() => t.sandbox.key("knowledge", "note", e.value ?? "")),
		queryFn: async () => jl.parse(await t.backend.json(`note?${Kl({ path: e.value })}`)),
		enabled: n(() => t.sandbox.reachable() && e.value !== void 0)
	});
	return {
		note: n(() => r.data.value),
		error: n(() => r.error.value?.message),
		isLoading: n(() => r.isLoading.value)
	};
}
function Ul(e, t, r) {
	let i = Pe(), a = Ae({
		queryKey: n(() => i.sandbox.key("knowledge", "graph", e.value ?? "", String(t.value))),
		queryFn: async () => Ll.parse(await i.backend.json(`graph?${Kl({
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
function Wl() {
	let e = Pe(), t = je(), n = () => t.invalidateQueries({ queryKey: e.sandbox.key("knowledge") });
	return {
		save: ke({
			mutationFn: ({ path: t, content: n }) => e.backend.json("note", {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					path: t,
					content: n
				})
			}),
			onSuccess: () => void n()
		}),
		remove: ke({
			mutationFn: ({ path: t }) => e.backend.json("note", {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: t })
			}),
			onSuccess: () => void n()
		}),
		seed: ke({
			mutationFn: async () => Rl.parse(await e.backend.json("seed", { method: "POST" })),
			onSuccess: () => void n()
		})
	};
}
var Gl, Kl, ql, Jl = O((() => {
	zl(), Fe(), Gl = 3e4, Kl = (e) => Object.entries(e).flatMap(([e, t]) => t === void 0 || t === "" ? [] : [`${e}=${encodeURIComponent(String(t))}`]).join("&"), ql = (e) => ({
		types: (e?.types ?? []).map((e) => e.name),
		tags: (e?.tags ?? []).map((e) => e.name)
	});
})), Yl, Xl, Zl, Ql, $l, eu, tu = O((() => {
	Yl = /\[\[([^\][|]+)(?:\|([^\]]+))?\]\]/g, Xl = (e, t) => {
		let n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT), r = [];
		for (let e = n.nextNode(); e !== null; e = n.nextNode()) {
			let t = e;
			t.parentElement?.closest("a, code, pre") ?? (Yl.lastIndex = 0, Yl.test(t.data) && r.push(t));
		}
		for (let e of r) {
			let n = document.createDocumentFragment(), r = 0;
			Yl.lastIndex = 0;
			for (let i = Yl.exec(e.data); i !== null; i = Yl.exec(e.data)) {
				n.append(e.data.slice(r, i.index));
				let a = (i[1] ?? "").trim(), o = t(a), s = document.createElement("a");
				s.append(i[2]?.trim() ?? a), o === void 0 ? (s.className = "text-subtle underline decoration-dotted underline-offset-2", s.title = `No note for "${a}" yet`) : (s.dataset.kb = o, s.className = "md-file-link"), n.append(s), r = i.index + i[0].length;
			}
			n.append(e.data.slice(r)), e.replaceWith(n);
		}
	}, Zl = [
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"neutral"
	], Ql = (e) => {
		if (e === void 0 || e === "") return "neutral";
		let t = 0;
		for (let n of e) t = (t * 31 + n.codePointAt(0)) % 100003;
		return Zl[t % Zl.length];
	}, $l = {
		person: "user",
		project: "folder",
		company: "globe",
		decision: "check-square",
		meeting: "users",
		term: "book",
		source: "link",
		vocabulary: "sitemap"
	}, eu = (e) => e === void 0 || e === "" ? "file" : $l[e.toLowerCase()] ?? "file";
})), nu, ru, iu, au, ou, su, cu, lu, uu = O((() => {
	tu(), nu = {
		class: "flex min-h-0 flex-1 flex-col pr-2",
		role: "status",
		"aria-busy": "true"
	}, ru = {
		key: 1,
		class: "flex min-h-0 flex-1 flex-col"
	}, iu = { class: "block truncate" }, au = { class: "block truncate leading-tight" }, ou = {
		key: 0,
		class: "px-2 py-4 text-xs text-muted"
	}, su = {
		key: 1,
		class: "px-2 py-4 text-xs text-muted"
	}, cu = { class: "flex items-center gap-1.5 text-2xs text-subtle" }, lu = /*@__PURE__*/ u({
		__name: "NoteIndex",
		props: {
			hits: {},
			selected: {},
			filtered: { type: Boolean },
			isLoading: { type: Boolean }
		},
		emits: ["pick"],
		setup(e, { emit: t }) {
			let u = t, d = Ce(n(() => e.isLoading), n(() => "note-search")), f = {
				alias: "matched an alias",
				tag: "matched a tag"
			}, m = n(() => e.hits.map((e) => ({
				path: e.path,
				title: e.title,
				icon: eu(e.type),
				detail: e.snippet ?? f[e.matched]
			}))), h = n(() => m.value.length === 0 ? [] : [{
				key: "hits",
				items: m.value
			}]), _ = /* @__PURE__ */ new Map(), v = (e, t) => {
				let n = t?.$el;
				n instanceof HTMLElement ? _.set(e, n) : _.delete(e);
			};
			return ne(() => e.selected, async (e) => {
				e !== void 0 && (await p(), _.get(e)?.scrollIntoView({ block: "nearest" }));
			}), (t, n) => e.isLoading && x(d) ? (g(), r(x(he), {
				key: 0,
				of: "knowledge.index",
				label: "Looking through your notes…"
			}, {
				default: S(() => [o("div", nu, [n[0] ||= o("span", { class: "sr-only" }, "Looking through your notes…", -1), l(x(me), {
					rows: 5,
					density: "dense"
				})])]),
				_: 1
			})) : e.isLoading ? i("", !0) : re((g(), a("div", ru, [l(x(E), {
				groups: h.value,
				"aria-label": "Notes"
			}, s({
				row: S(({ item: t }) => [(g(), r(x(pe), {
					key: t.path,
					ref: (e) => v(t.path, e),
					as: "button",
					density: "dense",
					class: "rounded-lg",
					icon: t.icon,
					selected: t.path === e.selected,
					onClick: (e) => u("pick", t.path)
				}, s({
					title: S(() => [o("span", iu, b(t.title), 1)]),
					_: 2
				}, [t.detail === void 0 ? void 0 : {
					name: "description",
					fn: S(() => [o("span", au, b(t.detail), 1)]),
					key: "0"
				}]), 1032, [
					"icon",
					"selected",
					"onClick"
				]))]),
				empty: S(() => [e.filtered ? (g(), a("p", ou, [...n[1] ||= [
					c(" Nothing here matches. The agent's ", -1),
					o("b", null, "kb", -1),
					c(" command searches the same notes, and a link to a note nobody has written yet is a perfectly good way to leave a gap for later. ", -1)
				]])) : (g(), a("p", su, "No notes yet."))]),
				_: 2
			}, [m.value.length >= 200 ? {
				name: "footer",
				fn: S(() => [o("p", cu, [l(x(oe), {
					name: "info-circle",
					class: "shrink-0"
				}), n[2] ||= c(" Showing the first 200: narrow it with a word, a kind or a tag. ", -1)])]),
				key: "0"
			} : void 0]), 1032, ["groups"])])), [[x(Oe), "knowledge.index"]]);
		}
	});
})), du, fu = O((() => {
	uu(), uu(), du = lu;
})), pu, mu, hu, gu, _u = O((() => {
	pu = {
		class: "flex flex-col gap-2 border-b border-line-subtle px-4 py-2.5 @xl:flex-row @xl:items-start @xl:justify-between @xl:gap-3",
		"aria-hidden": "true"
	}, mu = { class: "flex shrink-0 items-center gap-1.5" }, hu = {
		class: "flex flex-col gap-5 px-5 py-4",
		"aria-hidden": "true"
	}, gu = /*@__PURE__*/ u({
		__name: "NoteSkeleton",
		props: { framed: {
			type: Boolean,
			default: !1
		} },
		setup(e) {
			let n = [[
				"w-full",
				"w-11/12",
				"w-full",
				"w-2/3"
			], [
				"w-full",
				"w-5/6",
				"w-1/2"
			]];
			return (r, s) => (g(), a("div", {
				class: m(e.framed ? "@container flex flex-col rounded-lg bg-card shadow-sm" : "flex flex-col"),
				role: "status",
				"aria-busy": "true"
			}, [
				s[2] ||= o("span", { class: "sr-only" }, "Reading the note…", -1),
				e.framed ? (g(), a(t, { key: 0 }, [o("div", pu, [s[0] ||= o("div", { class: "flex h-5 items-center gap-2" }, [o("span", { class: "skeleton block h-4 w-4 shrink-0" }), o("span", { class: "skeleton block h-3.5 w-40" })], -1), o("div", mu, [(g(), a(t, null, v(4, (e) => o("span", {
					key: e,
					class: "skeleton block h-7 w-7"
				})), 64))])]), s[1] ||= o("div", {
					class: "flex flex-col gap-1 border-b border-line-subtle px-4 py-2.5",
					"aria-hidden": "true"
				}, [o("span", { class: "flex h-4 items-center" }, [o("span", { class: "skeleton block h-2.5 w-56 max-w-full" })])], -1)], 64)) : i("", !0),
				o("div", hu, [(g(), a(t, null, v(n, (e, n) => o("div", {
					key: n,
					class: "flex flex-col gap-3"
				}, [(g(!0), a(t, null, v(e, (e, t) => (g(), a("span", {
					key: t,
					class: m(["skeleton block h-2.5", e])
				}, null, 2))), 128))])), 64))])
			], 2));
		}
	});
})), vu, yu = O((() => {
	_u(), _u(), vu = gu;
})), bu, xu, Su, Cu, wu, Tu, Eu, Du, Ou, ku, Au = O((() => {
	tu(), Jl(), bu = { class: "relative flex h-figure w-full flex-col" }, xu = {
		key: 0,
		class: "px-4 py-3 text-xs text-danger"
	}, Su = {
		class: "flex flex-1 flex-col items-center justify-center gap-8 overflow-hidden",
		role: "status",
		"aria-busy": "true"
	}, Cu = {
		key: 2,
		class: "flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10 text-center"
	}, wu = ["onDblclick"], Tu = { class: "truncate text-xs text-content" }, Eu = { class: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-2 text-2xs text-subtle" }, Du = {
		key: 0,
		class: "rounded bg-surface/80 px-1.5 py-0.5"
	}, Ou = { key: 1 }, ku = /*@__PURE__*/ u({
		__name: "NoteGraph",
		props: {
			path: {},
			depth: { default: 2 }
		},
		emits: ["open"],
		setup(e, { emit: s }) {
			let u = s, { graph: d, error: f, isLoading: p } = Ul(ee(() => e.path), ee(() => e.depth), _(!0)), h = n(() => d.value?.nodes.map((e) => ({
				id: e.path,
				data: {
					title: e.title,
					type: e.type,
					focus: e.path === d.value?.focus,
					path: e.path
				},
				tooltip: e.path,
				dimmed: e.depth > 1
			})) ?? []), y = n(() => d.value?.edges.map((e) => ({
				from: e.from,
				to: e.to,
				kind: e.relation ?? "mentions",
				dashed: e.relation === void 0
			})) ?? []), te = n(() => `knowledge.map:${e.path ?? ""}`), ne = [
				{
					cards: 1,
					faded: !1
				},
				{
					cards: 2,
					faded: !1
				},
				{
					cards: 2,
					faded: !0
				}
			], C = _(), ie = () => {
				C.value !== void 0 && C.value !== d.value?.focus && u("open", C.value);
			};
			return (e, n) => (g(), a("div", bu, [x(f) ? (g(), a("p", xu, b(x(f)), 1)) : x(p) ? (g(), r(x(he), {
				key: 1,
				of: te.value,
				label: "Drawing the map…"
			}, {
				default: S(() => [o("div", Su, [n[1] ||= o("span", { class: "sr-only" }, "Drawing the map…", -1), (g(), a(t, null, v(ne, (e, n) => o("div", {
					key: n,
					class: m(["flex items-center gap-6", e.faded ? "opacity-50" : void 0]),
					"aria-hidden": "true"
				}, [(g(!0), a(t, null, v(e.cards, (e) => (g(), a("span", {
					key: e,
					class: "skeleton block h-12 w-40 shrink-0 rounded-lg"
				}))), 128))], 2)), 64))])]),
				_: 1
			}, 8, ["of"])) : h.value.length <= 1 ? re((g(), a("div", Cu, [
				l(x(oe), {
					name: "sitemap",
					class: "text-base text-subtle"
				}),
				n[2] ||= o("p", { class: "text-sm text-muted" }, "Nothing links to this note yet.", -1),
				n[3] ||= o("p", { class: "max-w-sm text-xs text-subtle" }, [
					c(" Mention another note as "),
					o("code", null, "[[its name]]"),
					c(" in the text, or name the relationship in the header: "),
					o("code", null, "works_on:"),
					c(", "),
					o("code", null, "about:"),
					c(", and it appears here. ")
				], -1)
			])), [[x(Oe), te.value]]) : re((g(), r(x(w), {
				key: 3,
				modelValue: C.value,
				"onUpdate:modelValue": n[0] ||= (e) => C.value = e,
				class: "h-full w-full",
				nodes: h.value,
				edges: y.value,
				direction: "TB",
				"node-width": 164,
				"node-height": 52,
				magnify: !1,
				"readable-zoom": .7,
				"min-zoom": .3
			}, {
				node: S(({ node: e }) => [o("button", {
					type: "button",
					class: m(["flex h-full w-full flex-col justify-center gap-0.5 px-2.5 text-left", e.data.focus ? "font-medium" : void 0]),
					onDblclick: (t) => u("open", e.data.path)
				}, [o("span", Tu, b(e.data.title), 1), e.data.type ? (g(), r(x(ge), {
					key: 0,
					variant: x(Ql)(e.data.type),
					size: "xs",
					label: e.data.type
				}, null, 8, ["variant", "label"])) : i("", !0)], 42, wu)]),
				overlay: S(() => [o("div", Eu, [x(d)?.omitted ? (g(), a("span", Du, b(x(d).omitted) + " more not shown", 1)) : (g(), a("span", Ou)), C.value && C.value !== x(d)?.focus ? (g(), r(x(ae), {
					key: 2,
					size: "small",
					severity: "secondary",
					class: "pointer-events-auto",
					onClick: ie
				}, {
					default: S(() => [...n[4] ||= [c(" Open this note ", -1)]]),
					_: 1
				})) : i("", !0)])]),
				_: 1
			}, 8, [
				"modelValue",
				"nodes",
				"edges"
			])), [[x(Oe), te.value]])]));
		}
	});
})), ju, Mu = O((() => {
	Au(), Au(), ju = ku;
})), Nu, Pu, Fu, Iu, Lu, Ru, zu, Bu, Vu, Hu, Uu, Wu, Gu, Ku, qu, Ju = O((() => {
	tu(), Mu(), yu(), Jl(), Nu = { key: 0 }, Pu = { class: "truncate font-mono" }, Fu = ["title"], Iu = ["aria-pressed", "aria-label"], Lu = {
		key: 2,
		class: "flex flex-col"
	}, Ru = {
		key: 0,
		class: "flex flex-col gap-2.5 px-5 pt-4"
	}, zu = {
		key: 1,
		class: "flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs"
	}, Bu = {
		key: 0,
		class: "text-2xs text-subtle"
	}, Vu = ["onClick"], Hu = ["title"], Uu = {
		key: 2,
		class: "px-5 py-4 text-xs text-subtle"
	}, Wu = {
		key: 3,
		class: "flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line-subtle px-5 py-3 text-xs"
	}, Gu = {
		key: 0,
		class: "text-2xs text-subtle"
	}, Ku = ["onClick"], qu = /*@__PURE__*/ u({
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
			let u = s, f = te(e, "draft"), { note: p, error: h, isLoading: ne } = Hl(ee(() => e.path)), C = Ce(ne, n(() => e.path)), { save: ie, remove: ae } = Wl(), w = n(() => p.value?.content ?? ""), T = _("read"), { source: se, editing: E, confirming: de, error: fe, saving: pe, removing: me, startEdit: be, cancelEdit: Se, saveDraft: we, forget: Ee } = Te({
				draft: f,
				raw: () => w.value,
				save: (t) => ie.mutateAsync({
					path: e.path,
					content: t
				}),
				remove: () => ae.mutateAsync({ path: e.path }),
				note: () => e.path,
				onLeave: () => T.value = "read",
				onRemoved: () => u("forgotten")
			}), De = () => {
				be(), T.value = "read";
			}, ke = n(() => (p.value?.facts ?? []).map((e) => [e.key, e.values.join(", ")])), Ae = n(() => new Map((p.value?.linksTo ?? []).map((e) => [e.title, e.path]))), je = (e) => Xl(e, (e) => Ae.value.get(e)), D = (e) => {
				let t = e.target?.closest("[data-kb]")?.dataset.kb;
				t !== void 0 && (e.preventDefault(), u("open", t));
			};
			return (n, s) => {
				let f = y("tooltip");
				return g(), r(x(ue), {
					source: x(se),
					"onUpdate:source": s[3] ||= (e) => d(se) ? se.value = e : null,
					confirming: x(de),
					"onUpdate:confirming": s[4] ||= (e) => d(de) ? de.value = e : null,
					paged: "",
					title: x(p)?.summary.title ?? "…",
					raw: w.value,
					editing: x(E),
					saving: x(pe),
					removing: x(me),
					error: x(h) ?? x(fe),
					onEdit: De,
					onCancel: x(Se),
					onSave: x(we),
					onRemove: x(Ee)
				}, {
					lead: S(() => [l(x(oe), {
						name: "file",
						class: "shrink-0 text-base text-muted"
					})]),
					badges: S(() => [x(p)?.summary.type ? (g(), r(x(ge), {
						key: 0,
						variant: x(Ql)(x(p).summary.type),
						size: "xs",
						label: x(p).summary.type
					}, null, 8, ["variant", "label"])) : i("", !0)]),
					description: S(() => [x(p)?.summary.aliases.length ? (g(), a("span", Nu, "Also called " + b(x(p).summary.aliases.join(", ")) + ".", 1)) : i("", !0)]),
					meta: S(() => [o("span", Pu, b(e.path), 1), x(p) ? (g(), a(t, { key: 0 }, [
						s[6] ||= o("span", { "aria-hidden": "true" }, "·", -1),
						o("span", null, b(x(_e)(x(p).summary.sizeBytes)), 1),
						s[7] ||= o("span", { "aria-hidden": "true" }, "·", -1),
						o("span", { title: x(ve)(x(p).summary.modifiedAt) }, "edited " + b(x(ye)(x(p).summary.modifiedAt)), 9, Fu),
						x(p).summary.tags.length > 0 ? (g(), a(t, { key: 0 }, [s[5] ||= o("span", { "aria-hidden": "true" }, "·", -1), (g(!0), a(t, null, v(x(p).summary.tags, (e) => (g(), a("span", { key: e }, "#" + b(e), 1))), 128))], 64)) : i("", !0)
					], 64)) : i("", !0)]),
					actions: S(() => [re((g(), a("button", {
						type: "button",
						class: m(x(xe).iconButton("h-7 w-7")),
						"aria-pressed": T.value === "map",
						"aria-label": T.value === "map" ? "Back to the note" : "Show what this note connects to",
						onClick: s[0] ||= (e) => T.value = T.value === "map" ? "read" : "map"
					}, [l(x(oe), { name: T.value === "map" ? "eye" : "sitemap" }, null, 8, ["name"])], 10, Iu)), [[
						f,
						T.value === "map" ? "Back to the note" : "Map: what this note connects to",
						void 0,
						{ top: !0 }
					]])]),
					confirm: S(() => [c(" Delete \"" + b(x(p)?.summary.title) + "\"? Anything that links to it becomes a link to a note nobody has written. ", 1)]),
					default: S(() => [T.value === "map" ? (g(), r(ju, {
						key: 0,
						path: e.path,
						onOpen: s[1] ||= (e) => u("open", e)
					}, null, 8, ["path"])) : x(ne) ? (g(), a(t, { key: 1 }, [x(C) ? (g(), r(x(he), {
						key: 0,
						of: `knowledge.note:${e.path}`,
						label: "Reading the note…"
					}, {
						default: S(() => [l(vu)]),
						_: 1
					}, 8, ["of"])) : i("", !0)], 64)) : re((g(), a("div", Lu, [
						ke.value.length > 0 || (x(p)?.linksTo.length ?? 0) > 0 ? (g(), a("div", Ru, [ke.value.length > 0 ? (g(), r(x(ce), {
							key: 0,
							rows: ke.value
						}, null, 8, ["rows"])) : i("", !0), x(p) && x(p).linksTo.length > 0 ? (g(), a("div", zu, [s[8] ||= o("span", { class: "text-2xs uppercase tracking-wide text-subtle" }, "Links to", -1), (g(!0), a(t, null, v(x(p).linksTo, (e, t) => (g(), a("span", {
							key: `out-${e.relation ?? ""}-${e.title}-${t}`,
							class: "flex items-baseline gap-1"
						}, [e.relation ? (g(), a("span", Bu, b(e.relation), 1)) : i("", !0), e.path ? (g(), a("button", {
							key: 1,
							type: "button",
							class: "text-link hover:underline",
							onClick: (t) => u("open", e.path)
						}, b(e.title), 9, Vu)) : (g(), a("span", {
							key: 2,
							class: "text-subtle underline decoration-dotted underline-offset-2",
							title: `No note for "${e.title}" yet`
						}, b(e.title), 9, Hu))]))), 128))])) : i("", !0)])) : i("", !0),
						(x(p)?.body ?? "").trim() === "" ? (g(), a("p", Uu, "No text yet: this note is its header.")) : (g(), r(x(le), {
							key: 1,
							source: x(p)?.body ?? "",
							decorate: je,
							class: "px-5 py-4",
							style: { "--prose-measure": "74ch" },
							onClick: D
						}, null, 8, ["source"])),
						x(p) && x(p).linkedFrom.length > 0 ? (g(), a("div", Wu, [
							s[9] ||= o("span", { class: "text-2xs uppercase tracking-wide text-subtle" }, "Linked from", -1),
							(g(!0), a(t, null, v(x(p).linkedFrom, (e, t) => (g(), a("span", {
								key: `in-${e.relation ?? ""}-${e.title}-${t}`,
								class: "flex items-baseline gap-1"
							}, [e.relation ? (g(), a("span", Gu, b(e.relation), 1)) : i("", !0), e.path ? (g(), a("button", {
								key: 1,
								type: "button",
								class: "text-link hover:underline",
								onClick: (t) => u("open", e.path)
							}, b(e.title), 9, Ku)) : i("", !0)]))), 128)),
							o("button", {
								type: "button",
								class: m(x(xe).linkButton("ml-auto shrink-0 text-2xs")),
								onClick: s[2] ||= (t) => u("filter", e.path)
							}, " Show these in the list ", 2)
						])) : i("", !0)
					])), [[x(Oe), `knowledge.note:${e.path}`]])]),
					_: 1
				}, 8, [
					"source",
					"confirming",
					"title",
					"raw",
					"editing",
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
})), Yu, Xu = O((() => {
	Ju(), Ju(), Yu = qu;
})), Zu, Qu, $u, ed, td, nd, rd = O((() => {
	Jl(), fu(), yu(), Xu(), Zu = {
		key: 1,
		class: "text-2xs text-subtle"
	}, Qu = { class: "mt-1 block text-xs text-muted" }, $u = { class: "max-w-md text-xs text-muted" }, ed = {
		key: 0,
		class: "text-xs text-danger"
	}, td = {
		key: 0,
		class: "min-w-0 flex-1"
	}, nd = /*@__PURE__*/ u({
		__name: "KnowledgeView",
		setup(e) {
			let u = _(void 0), f = we(u, 36), p = _(void 0), v = De(p), { overview: y, error: ee, isLoading: te } = Bl(), w = _(""), ce = _(), le = _(), E = _(), ue = n(() => ({
				q: w.value,
				type: ce.value,
				tag: le.value,
				linkedTo: E.value
			})), pe = n(() => w.value !== "" || ce.value !== void 0 || le.value !== void 0 || E.value !== void 0), { hits: me, error: ge, isLoading: _e, isFetching: ve } = Vl(ue), ye = Ce(_e, n(() => "note-search")), Te = n(() => ql(y.value)), ke = (e, t) => [{ options: [{
				value: "",
				label: t
			}, ...e.map((e) => ({
				value: e,
				label: e
			}))] }], Ae = n({
				get: () => ce.value ?? "",
				set: (e) => ce.value = e === "" ? void 0 : e
			}), je = n({
				get: () => le.value ?? "",
				set: (e) => le.value = e === "" ? void 0 : e
			}), D = _(), { draft: O } = Se(D);
			Ee(u, () => D.value), ne(me, () => {
				(D.value === void 0 || !me.value.some((e) => e.path === D.value)) && (D.value = me.value[0]?.path);
			});
			let Me = (e) => {
				D.value = e;
			}, Ne = (e) => {
				let t = me.value.map((e) => e.path);
				if (t.length === 0) return;
				let n = D.value === void 0 ? -1 : t.indexOf(D.value);
				D.value = t[Math.min(t.length - 1, Math.max(0, n + e))];
			}, Pe = (e) => {
				w.value = "", ce.value = void 0, le.value = void 0, E.value = e;
			}, Fe = () => {
				w.value = "", ce.value = void 0, le.value = void 0, E.value = void 0;
			};
			ne(w, () => E.value = void 0);
			let Ie = n(() => me.value.find((e) => e.path === E.value)?.title ?? E.value), Le = n(() => E.value === void 0 ? void 0 : {
				tone: "info",
				title: `Everything linking to "${Ie.value}"`,
				action: {
					label: "Show everything",
					run: Fe
				}
			}), Re = n(() => {
				let e = y.value;
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
			}), ze = n(() => ee.value ?? ge.value), { seed: Be } = Wl(), Ve = async () => {
				let { written: e } = await Be.mutateAsync();
				D.value = e[0] ?? D.value;
			};
			return (e, n) => (g(), a("div", {
				ref_key: "body",
				ref: u,
				class: "flex flex-col gap-3",
				style: h(x(v).style.value)
			}, [
				ze.value ? (g(), r(x(de), {
					key: 0,
					of: x(be)(ze.value)
				}, null, 8, ["of"])) : i("", !0),
				o("div", {
					ref_key: "chrome",
					ref: p,
					class: "sticky top-0 z-1 -mb-3 bg-canvas pb-3"
				}, [l(x(T), {
					modelValue: w.value,
					"onUpdate:modelValue": n[2] ||= (e) => w.value = e,
					placeholder: "Search the knowledge base…",
					"aria-label": "Search the knowledge base",
					clearable: "",
					count: x(me).length,
					busy: x(ve) && !x(_e),
					onKeydown: [n[3] ||= C(ie((e) => Ne(1), ["prevent"]), ["down"]), n[4] ||= C(ie((e) => Ne(-1), ["prevent"]), ["up"])]
				}, s({
					actions: S(() => [x(te) ? (g(), r(x(he), {
						key: 0,
						of: "knowledge.tally"
					})) : x(y) ? re((g(), a("span", Zu, [c(b(x(y).noteCount) + " " + b(x(y).noteCount === 1 ? "note" : "notes") + " · " + b(x(y).linkCount) + " " + b(x(y).linkCount === 1 ? "link" : "links") + " · " + b(x(y).types.length) + " " + b(x(y).types.length === 1 ? "kind" : "kinds"), 1)])), [[x(Oe), "knowledge.tally"]]) : i("", !0), l(x(se), { label: "Knowledge" }, {
						default: S(() => [n[11] ||= o("span", { class: "block text-sm font-medium text-content" }, "The knowledge base", -1), o("span", Qu, [
							n[7] ||= c(" A folder of markdown notes: ", -1),
							o("b", null, b(x(y)?.folder ?? "knowledge/"), 1),
							n[8] ||= c(" in your workspace, where each note is a ", -1),
							n[9] ||= o("i", null, "thing", -1),
							n[10] ||= c(" (a person, a project, a decision, a word) and each link is a connection between two of them. The agent reads it before answering questions about your world and writes to it when it learns something durable; you read, correct and delete here. Open it in Obsidian or put it under git: it is only ever markdown. ", -1)
						])]),
						_: 1
					})]),
					_: 2
				}, [Te.value.types.length > 0 || Te.value.tags.length > 0 ? {
					name: "controls",
					fn: S(() => [Te.value.types.length > 0 ? (g(), r(x(fe), {
						key: 0,
						modelValue: Ae.value,
						"onUpdate:modelValue": n[0] ||= (e) => Ae.value = e,
						variant: "ghost",
						options: ke(Te.value.types, "Any kind"),
						class: "max-w-32",
						"aria-label": "Kind",
						header: "Kind"
					}, null, 8, ["modelValue", "options"])) : i("", !0), Te.value.tags.length > 0 ? (g(), r(x(fe), {
						key: 1,
						modelValue: je.value,
						"onUpdate:modelValue": n[1] ||= (e) => je.value = e,
						variant: "ghost",
						options: ke(Te.value.tags, "Any tag"),
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
				Le.value ? (g(), r(x(de), {
					key: 1,
					of: Le.value
				}, null, 8, ["of"])) : i("", !0),
				Re.value ? (g(), r(x(de), {
					key: 2,
					of: Re.value
				}, null, 8, ["of"])) : i("", !0),
				x(y)?.noteCount === 0 && !pe.value ? (g(), a("div", {
					key: 3,
					class: m(x(xe).emptyState("flex flex-col items-center gap-2 px-6 py-12 text-sm"))
				}, [
					l(x(oe), {
						name: "sitemap",
						class: "text-base text-subtle"
					}),
					n[14] ||= o("p", { class: "text-content" }, "Nothing here yet.", -1),
					o("p", $u, [
						n[12] ||= c(" Notes appear here as the agent learns durable things about your world, who you work with, what a project is for, what was decided and why. Ask it to remember something, or drop your own markdown into ", -1),
						o("b", null, b(x(y)?.folder ?? "knowledge/"), 1),
						n[13] ||= c(" and it will be read the same way. ", -1)
					]),
					l(x(ae), {
						label: "Start it off with a vocabulary",
						size: "small",
						severity: "secondary",
						loading: x(Be).isPending.value,
						onClick: Ve
					}, null, 8, ["loading"]),
					x(Be).error.value ? (g(), a("p", ed, b(x(Be).error.value.message), 1)) : i("", !0)
				], 2)) : (g(), a("div", {
					key: 4,
					class: m(["flex gap-4", x(f) ? "flex-col" : "items-start"])
				}, [o("div", { class: m(["flex min-w-0 shrink-0 flex-col", x(f) ? "max-h-56" : "sticky top-(--pinned-top) max-h-[calc(100dvh-var(--pinned-top))] w-56"]) }, [l(du, {
					hits: x(me),
					selected: D.value,
					filtered: pe.value,
					"is-loading": x(_e),
					onPick: Me
				}, null, 8, [
					"hits",
					"selected",
					"filtered",
					"is-loading"
				])], 2), D.value ? re((g(), a("div", td, [l(Yu, {
					draft: x(O),
					"onUpdate:draft": n[5] ||= (e) => d(O) ? O.value = e : null,
					path: D.value,
					onOpen: Me,
					onFilter: Pe,
					onForgotten: n[6] ||= (e) => D.value = void 0
				}, null, 8, ["draft", "path"])])), [[x(Oe), "knowledge.pane"]]) : x(_e) ? (g(), a(t, { key: 1 }, [x(ye) ? (g(), r(x(he), {
					key: 0,
					of: "knowledge.pane",
					label: "Reading your notes…"
				}, {
					default: S(() => [l(vu, {
						framed: "",
						class: "min-w-0 flex-1"
					})]),
					_: 1
				})) : i("", !0)], 64)) : re((g(), a("section", {
					key: 2,
					class: m(x(xe).emptyState("flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10"))
				}, [
					l(x(oe), {
						name: "sitemap",
						class: "text-base text-subtle"
					}),
					n[15] ||= o("p", { class: "text-sm text-muted" }, "Pick a note to read it.", -1),
					n[16] ||= o("p", { class: "max-w-xs text-xs text-subtle" }, "Follow its links to move through your knowledge the way the agent does.", -1)
				], 2)), [[x(Oe), "knowledge.pane"]])], 2))
			], 4));
		}
	});
})), id = /* @__PURE__ */ Me({ default: () => ad }), ad, od = O((() => {
	rd(), rd(), ad = nd;
}));
//#endregion
//#region src/extension.ts
Fe();
var sd = (e, t) => {
	Ne(e), t.subscriptions.push(e.views.register({
		id: "knowledge",
		label: "Knowledge",
		surface: "sandbox",
		detect: () => [{
			key: "knowledge",
			title: "Knowledge",
			icon: "sitemap"
		}],
		view: async () => (await Promise.resolve().then(() => (od(), id))).default
	}));
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/mark.js
$();
var cd = {
	art: K().max(4096).optional().describe("This extension's own mark, as a complete SVG document inline: the tier an author controls fully. Give it a viewBox and let it fill its own square edge to edge; it is drawn as the tile, not as a glyph on a plate. Kept as readable SVG text (not base64) so a registry reviewer can see what they are publishing, drawn inert so it cannot script the page, and capped at 4 KB. Anything that does not parse as SVG falls back to `logo`, then `icon`, then initials."),
	logo: K().optional().describe("A simple-icons slug, fetched from a CDN: right for standing in for somebody else's product. Add a \"/<hex>\" suffix to force a colour for a mark that vanishes against the surface it lands on. Unreachable in an offline sandbox, so it falls back to `icon`, then to initials."),
	icon: K().optional().describe("A name from the host's own icon set, drawn when no simple-icons slug fits. It ships in the image, follows the theme and costs no request: what actually carries a first-party extension. An unknown name falls back to initials rather than to a hole.")
}, ld = /* @__PURE__ */ new Set([
	"GET",
	"HEAD",
	"POST",
	"PUT",
	"PATCH",
	"DELETE",
	"OPTIONS"
]), ud = /^(?:\.|%2e){1,2}$/iu, dd = (e) => {
	if (e.includes("*") && e !== "*") return `"${e}" is not a segment glob: a \`*\` stands alone between slashes and matches one whole segment, so \`**\` and a \`*\` inside a segment are not supported`;
	if (ud.test(e)) return `"${e}" is not a route segment: the URL resolves it away before any route sees it`;
}, fd = (e, t) => t === "" ? "expected \"<METHOD> <path-glob>\", e.g. \"GET /panels\"" : ld.has(e.toUpperCase()) ? t.startsWith("/") ? /[?#\\]/u.test(t) ? "the path may not hold \"?\", \"#\" or \"\\\": routes are matched on the path alone" : t.slice(1).split("/").map(dd).find((e) => e !== void 0) : "the path must start with \"/\"" : `"${e}" is not one of ${[...ld].join(", ")}`, pd = (e) => {
	let [, t = "", n = ""] = /^(\S+)\s+(\S+)$/u.exec(e.trim()) ?? [];
	return {
		method: t,
		glob: n
	};
}, md = (e) => {
	let { method: t, glob: n } = pd(e), r = fd(t, n);
	return r === void 0 ? void 0 : `invalid permission "${e}": ${r}`;
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/agent.js
$();
var hd = {
	name: "agent",
	description: "Declare that this checkout is also a Claude Code plugin, so Claude Code turns pick up its skills, agents, hooks and commands. Only Claude Code reads it: give the agent tools with `contributes.tools`, which every runtime gets, and put a skill every runtime should read in a capability card's `skill`. MCP servers in the plugin's `.mcp.json` are deprecated, reach Claude Code alone, and are warned about at load.",
	schema: X({ path: K().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root.") }).meta({ power: {
		key: "agent",
		sentence: "contributes skills, agents and hooks to the agent's turns"
	} })
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/automation-templates.js
$();
var gd = {
	name: "automationTemplates",
	description: "Starting points this pack offers in the automation composer, a trigger, a prompt written for that trigger's payload, and whatever guard makes it safe to leave on. Declared by whoever knows the service rather than by the composer, so they appear when your pack is installed and disappear with it. Pure prefill: creating one makes an ordinary automation.",
	schema: Y(X({
		id: K().regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/).describe("Prefills the automation name, and is what \"does one of these exist already\" is asked by, so spell it as an id, not as prose."),
		title: K().min(1),
		logo: K().min(1).optional().describe("A simple-icons slug for the card."),
		icon: K().min(1).optional().describe("A name from the host's icon set, drawn when no simple-icons slug fits."),
		requires: Y(K().min(1)).optional().describe("Capability providers that make this template work: any one connected is enough (fixing CI rides github or gitlab). Omitted ⇒ nothing to connect, so it is always offered."),
		trigger: X({
			kind: hc([
				"schedule",
				"event",
				"listener",
				"workspace"
			]),
			cron: K().min(1).optional(),
			provider: K().min(1).optional(),
			eventType: K().min(1).optional(),
			event: K().min(1).optional()
		}).describe("What wakes it. Checked against the real trigger schema when the daemon builds the catalogue, so a template can never offer one that would be refused."),
		guard: K().min(1).optional().describe("A condition that must hold before the turn runs: what makes a template safe to leave switched on."),
		holdForSeconds: q().int().positive().optional().describe("Wait this long and coalesce repeats, rather than firing on every event."),
		prompt: K().min(1).describe("The turn this starts. You own the trigger's payload vocabulary, so you own the prompt that reads it."),
		note: K().min(1).optional(),
		setup: K().min(1).optional().describe("What the user must do themselves before this can work."),
		description: K().min(1).optional(),
		offer: hc(["create", "configure"]).optional().describe("Absent ⇒ it waits in the gallery, where you go once you know what you want. `create` puts a card on the page that makes it, switched off, in one click. `configure` puts one there that opens the dialog prefilled, for a template that cannot work unconfigured. Both are for what a user would never think to go looking for: mark everything as offered and you have rebuilt the gallery with extra steps."),
		chore: J().optional().describe("Whether what this makes watches THIS codebase rather than the outside world. Declared rather than read off the trigger: a nightly dependency sweep and a nightly Stripe poll are both schedules.")
	}))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/bin.js
$();
var _d = {
	name: "bin",
	description: "A checkout-relative directory of executables the daemon puts on the agent's PATH every turn, how you ship the agent a command-line tool. The files are the approved code themselves: they ride the pinned checkout, and the daemon only adds the directory to PATH.",
	schema: K().min(1).refine((e) => !e.split("/").includes(".."), { message: "bin must stay inside the checkout" }).meta({ power: {
		key: "bin",
		sentence: "puts its shipped tools on the agent's PATH"
	} })
}, vd = class extends Error {
	source;
	offset;
	constructor(e, t, n) {
		super(`${e} (in \`${t}\` at ${n})`), this.source = t, this.offset = n, this.name = "WhenSyntaxError";
	}
}, yd = [
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
], bd = /[A-Za-z_]/, xd = /[A-Za-z0-9_.-]/, Sd = (e) => {
	let t = [], n = 0;
	for (; n < e.length;) {
		let r = e[n] ?? "";
		if (r.trim() === "") {
			n += 1;
			continue;
		}
		if (r === "'" || r === "\"") {
			let i = e.indexOf(r, n + 1);
			if (i === -1) throw new vd("unterminated string", e, n);
			t.push({
				kind: "literal",
				value: e.slice(n + 1, i),
				at: n
			}), n = i + 1;
			continue;
		}
		let i = yd.find((t) => e.startsWith(t, n));
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
		if (bd.test(r)) {
			let r = n + 1;
			for (; r < e.length && xd.test(e[r] ?? "");) r += 1;
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
		throw new vd(`unexpected character ${JSON.stringify(r)}`, e, n);
	}
	return t;
}, Cd = class {
	tokens;
	source;
	index = 0;
	constructor(e, t) {
		this.tokens = e, this.source = t;
	}
	parse() {
		let e = this.or(), t = this.tokens[this.index];
		if (t !== void 0) throw new vd("unexpected trailing input", this.source, t.at);
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
		if (e?.kind !== "key") throw new vd("expected a context key", this.source, e?.at ?? this.source.length);
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
		if (e?.kind !== "literal") throw new vd("expected a literal value", this.source, e?.at ?? this.source.length);
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
		if (!this.eat(e)) throw new vd(`expected \`${e}\``, this.source, this.tokens[this.index]?.at ?? this.source.length);
	}
}, wd = (e) => new Cd(Sd(e), e).parse(), Td = (e) => {
	try {
		return wd(e), !0;
	} catch {
		return !1;
	}
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/tools.js
$();
var Ed = /^[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)*$/, Dd = {
	name: "tools",
	description: "Tools for the agent, as an MCP server the daemon mounts into every turn and every runtime (Claude Code, Codex, Cursor, ACP agents). Serve them from your `server` bundle with `api.tools.serve((card) => [...])`, or from a declared process's port. Replaces an agent plugin's `.mcp.json`, which only Claude Code read.",
	schema: X({
		perCard: K().regex(/^[a-z0-9][a-z0-9-]*$/).optional().describe("The id of one of this extension's `cli` capability cards. Every turn granted a card of that kind gets one server named by the card's id, handed that card's settings (secrets included) with each call. Absent ⇒ one server for the extension, named by its `name`, in every turn while the extension is enabled."),
		process: K().regex(/^[a-z0-9][a-z0-9-]*$/).optional().describe("A process from `contributes.processes`, declared with `port: \"auto\"`, that answers MCP over Streamable HTTP at `path` on its port. Absent ⇒ your `server` bundle serves the tools."),
		path: K().regex(Ed).optional().describe("Where the MCP endpoint answers, without a leading or trailing slash: on the process's port, or in your backend's own namespace when your `server` bundle speaks MCP itself. Absent with no `process` ⇒ the host serves what `api.tools.serve` returns, which is what you want: the host owns the transport, the deadlines and the card lookup. With `perCard`, a request arrives at `<path>/<card id>`.")
	}).meta({
		effect: "mcp",
		mintsServer: !0,
		power: {
			key: "tools${perCard?-${perCard}:}",
			sentence: "gives the agent MCP tools${perCard?, one server for each \"${perCard}\" card:}"
		}
	})
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/capabilities.js
$();
var Od = X({
	key: K().regex(/^[a-zA-Z][a-zA-Z0-9]*$/),
	label: K().min(1),
	placeholder: K().optional(),
	secret: J().optional().describe("Mask it, and never echo it back."),
	optional: J().optional(),
	multiline: J().optional(),
	advanced: J().optional().describe("Fold this field behind the form's Advanced disclosure: for answers whose default is right for nearly everyone. The disclosure opens by itself while any advanced field holds a non-default value, so an edit never hides live settings."),
	boolean: J().optional().describe("Render it as a switch, carrying \"on\"/\"off\". For an opt-in EXTRA rather than a decision: a two-option picker says the same thing but presents a choice the user must make to proceed, sized like the required fields around it. A switch always holds a value, so a field like this never blocks a submit."),
	hint: K().optional().describe("A line under this control, for what the label alone cannot say: a host requirement, when a value takes effect. The card's own `hint` speaks for the whole card; this one is bound to the field it qualifies."),
	rebuild: J().optional().describe("This value only takes effect after the sandbox is rebuilt, because it rides the image overlay. Shown as a chip beside the label: two switches side by side, identical in every visible way, can otherwise cost five seconds or five minutes with no way to tell which."),
	default: K().optional(),
	options: Y(X({
		value: K(),
		label: K()
	})).optional().describe("Turns the field into a select."),
	when: K().refine(Td, { message: "not a valid `when` condition" }).optional().describe("Only show this field while a condition over the answers already given holds: `auth == 'key'`, `provider in ['ipsec', 'fortinet']`, `!advanced`. Supports `&&`, `||`, `!`, comparisons and `in`."),
	value: K().optional().describe("A fixed value baked into the config rather than asked for: how a card pins its discriminator (platform=\"reddit\", provider=\"stripe\"). Renders as nothing."),
	totp: J().optional().describe("This field holds a TOTP seed, the base32 key or otpauth:// URI a service shows when enrolling an authenticator app. Declare it with `secret: true`. Unlike an ordinary secret it never enters the agent's environment: the daemon mints the six-digit codes on demand and only those cross.")
}), kd = X({
	url: K().min(1).describe("The URL to call, as a template over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Same spelling as `env`."),
	method: hc([
		"GET",
		"POST",
		"HEAD"
	]).optional().describe("Defaults to GET."),
	headers: mc(K(), K()).optional().describe("The request headers, templated the same way: `{\"Authorization\": \"Bearer ${token}\"}`."),
	identity: K().optional().describe("A dotted path into the JSON answer naming who the caller is (\"login\", \"user.name\"), so success can say which account answered."),
	insecure: J().optional().describe("Accept a self-signed certificate, for a service whose local install ships one (Obsidian's Local REST API).")
}), Ad = X({
	name: K().min(1),
	...cd,
	description: K().min(1).describe("ONE LINE: aim for 60 characters or fewer. The grid clamps it at two lines in a narrow pane, so a paragraph here is a paragraph the reader gets truncated. Everything longer belongs in `hint`."),
	category: K().min(1),
	hint: K().optional().describe("The paragraph, shown under the add form and searched from the catalog, so the words that identify this card to someone hunting for it (\"webauthn\", \"socket mode\") belong here even when the tile cannot show them."),
	guide: X({
		url: K().optional(),
		urlFromField: K().optional(),
		path: K().optional(),
		linkLabel: K().optional(),
		scopes: K().optional(),
		steps: Y(K()).optional()
	}).optional().describe("The walkthrough the install dialog renders for getting the credential this card asks for.")
}), jd = {
	id: K().regex(/^[a-z0-9][a-z0-9-]*$/),
	catalog: Ad,
	fields: Y(Od)
}, Md = {
	name: "capabilities",
	description: "Capability cards this pack adds to the \"+\" grid: a connected CLI tool, a site the agent acts on as the owner through the shared browser, an operating system pack, a browser family the owner connects their own copy of, or a preset over a core kind. The card and its form are data here; the machinery that acts on them is core, which is why a card may only name one of these five kinds.",
	schema: Y(fc("kind", [
		X({
			...jd,
			kind: gc("cli"),
			fields: Y(Od).min(1),
			env: mc(K().regex(/^[A-Z][A-Z0-9_]*$/), K()).describe("The environment the agent's shell gets, as value templates over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Each name is suffixed per instance."),
			skill: K().min(1).describe("Checkout-relative SKILL.md teaching the agent this tool. `${id}` in it is replaced with the instance name at apply time."),
			fragment: K().min(1).optional().describe("A Dockerfile fragment holding the client binary this tool needs (psql, mysql, whisper).").meta({ effect: "image" }),
			pack: K().min(1).optional().describe("A sandbox feature pack name (whisper, llamacpp, browser, …) supplying this tool. Preferred over `fragment`: an image that already bakes the pack needs no rebuild, and there is no copy to drift.").meta({ effect: "image" }),
			probe: kd.optional().describe("One authenticated request that tests this card's settings before they are saved, so a wrong token or an unreachable host is answered on the form rather than by a card that says 'not connected' afterwards."),
			hosts: Y(K().min(1)).optional().describe("The hosts this card's credential is meant for, as templates over the fields like `env` (`api.github.com`, `*.githubusercontent.com`, `${url}`); a value that comes out as a URL counts as its host. The sandbox limits the credential's `{{secret:…}}` reference to them by default, so a use aimed anywhere else asks a person first. The owner can change or lift the list on the Secrets view."),
			mcp: K().regex(Ed).optional().describe("Deprecated: declare `contributes.tools` with `perCard` naming this card instead, and serve the tools with `api.tools.serve`. A path in this extension's backend (`server`) answering MCP over Streamable HTTP; every turn granted a card of this kind gets it as a server named by the card's id, each request arriving at `<path>/<card id>`.").meta({
				effect: "mcp",
				mintsServer: !0,
				power: {
					key: "capability-tools:${id}",
					sentence: "serves MCP tools to the agent for each \"${catalog.name}\" card"
				}
			})
		}),
		X({
			...jd,
			kind: gc("browser"),
			loginUrl: sc().optional().describe("What the sign-in window opens; the profile it persists IS the credential. Optional so one card can be the generic one that asks for the URL on its form instead, but a card must either pin this or declare a field that supplies it, or the window opens on nothing."),
			homeUrl: sc().optional().describe("Where that same profile opens once it HAS a session: the owner's own hands on the connected browser. Separate from loginUrl because for some platforms the login lives on another site entirely (YouTube signs in at accounts.google.com)."),
			skill: K().min(1).describe("Checkout-relative SKILL.md teaching the agent this site's actions: rendered once per site, all its connected accounts on one roster (`${accounts}`), the core tool note at `${tools}`.")
		}),
		X({
			...jd,
			kind: gc("device"),
			skill: K().min(1).describe("Checkout-relative SKILL.md teaching the agent that machine's shell.")
		}).meta({ mintsServer: !0 }),
		X({
			...jd,
			kind: gc("webext"),
			install: sc().optional().describe("Where this browser's extension is installed from: its store listing, or a page offering the build."),
			skill: K().min(1).describe("Checkout-relative SKILL.md teaching the agent to drive this browser.")
		}).meta({ mintsServer: !0 }),
		X({
			...jd,
			kind: gc("agent")
		})
	]).superRefine((e, t) => {
		if (e.kind === "cli") for (let n of e.fields.filter((e) => e.totp === !0)) Object.values(e.env).some((e) => e.includes(`\${${n.key}}`) || e.includes(`\${${n.key}:uri}`)) && t.addIssue({
			code: "custom",
			message: `env must not reference the totp field "${n.key}", the daemon mints codes from it instead`
		});
	}).meta({ power: {
		key: "capability:${id}",
		sentence: "a ${kind} capability card \"${catalog.name}\""
	} }))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/commands.js
$();
var Nd = {
	name: "commands",
	description: "Commands this extension may register handlers for, surfaced in the command palette. Title, icon and shortcut all come from here rather than from the registration call, because this is what the owner approved at install.",
	schema: Y(X({
		command: K().regex(/^[a-z0-9][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)+$/),
		title: K().min(1).describe("What the command palette shows. The manifest's value wins over the one passed at registration."),
		category: K().min(1).optional().describe("What the command acts on (\"Deployments\", \"Knowledge\"), drawn ahead of the title as \"Category: Title\" and searched with it. Use the extension's own name so its commands group together; omit it and the command stands alone."),
		icon: K().optional().describe("A name from the host's icon set, drawn beside the title."),
		keybinding: K().regex(/^\S+$/).optional().describe("A global keyboard shortcut, e.g. \"Mod+Shift+K\" — `Mod` is ⌘ on Apple and Ctrl elsewhere. Declared here because a global shortcut is consequential: the owner approves it at install, and the host binds only what was approved.").meta({ power: {
			key: "keybinding:${command}",
			sentence: "the global shortcut ${keybinding} (\"${title}\")"
		} }),
		when: K().refine(Td, { message: "not a valid `when` condition" }).optional().describe("When the shortcut applies, as a condition over the shell's context keys, `tabSurface == 'chat'`, `!editableTarget`. Without one the chord is claimed everywhere, including inside a terminal where a bare key belongs to the program running in it. The command palette ignores this: a command is always runnable by name.")
	}).meta({ power: {
		key: "command:${command}",
		sentence: "a palette command \"${title}\""
	} }))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/documents.js
$();
var Pd = {
	name: "documents",
	description: "Per-directory documents this extension can offer. Your provider marks the rows in the Workspace tree it has something to say about, and the host opens your component as a tab.",
	schema: Y(X({
		id: K().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: K().min(1).describe("The family's name, shown in the install dialog beside your other contributions. Per-row wording stays with the provider, which is the only thing that knows what it found.")
	}).meta({ power: {
		key: "document:${id}",
		sentence: "marks workspace directories (\"${label}\")"
	} }))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/environment.js
$();
var Fd = {
	name: "environment",
	description: "A Dockerfile fragment baked into the sandbox image so your tools are actually installed at runtime: a whisper binary, a psql client. The owner approves the composed overlay and rebuilds out of band, so this does not take effect immediately.",
	schema: X({ fragment: K().min(1).refine((e) => !e.split("/").includes(".."), { message: "fragment must stay inside the checkout" }).describe("Checkout-relative path to a file holding ONLY RUN and ENV instructions. FROM and privileged directives are rejected: those stay daemon-owned.") }).meta({
		effect: "image",
		power: {
			key: "environment",
			sentence: "bakes an environment fragment into the sandbox image"
		}
	})
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/files.js
$();
var Id = {
	name: "files",
	description: "Which workspace files back your views, so the daemon's file watcher can tell the browser they went stale instead of you polling for it. The agent edits the workspace out of band from every HTTP route, and this push is the only thing that can notice.",
	schema: Y(X({
		path: K().min(1).refine((e) => !e.startsWith("/") && !e.split("/").includes(".."), { message: "path must be workspace-root-relative and stay inside the workspace" }).describe("Workspace-root-relative, forward-slash, matched by prefix, so one entry covers an exact file (`.intentic/config/automations.json`), a directory (`.intentic/config/approvals/`, with the trailing slash so it cannot match a sibling file) or a name family (`.intentic/environment.`). Not a glob."),
		invalidates: Y(K().min(1)).min(1).describe("The query keys this path makes stale, the first element of your own api.sandbox.key(...) keys. Keep both this and the path as narrow as the view actually needs: a broad prefix costs every connected browser a refetch on every matching write.")
	}).meta({ power: {
		key: "files:${path}",
		sentence: "is told when ${path} changes"
	} }))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/listener.js
$();
var Ld = X({
	label: K().min(1),
	placeholder: K().min(1),
	hint: K().min(1).optional().describe("The sentence under the input, for a filter whose empty case is easy to get wrong.")
}), Rd = {
	name: "listener",
	description: "A realtime event source this extension supplies, so automations can trigger on it. One declaration feeds both halves: the daemon accepts these event types and serves this provider's control surface, and the automation editor derives its source picker, filters and starter prompt from it, so a newly installed listener is configurable without a matching app release.",
	schema: X({
		provider: K().regex(/^[a-z0-9][a-z0-9-]*$/).describe("The slug this source's automation triggers fire on."),
		events: Y(X({
			type: K().regex(/^[a-z0-9][a-z0-9_]*$/),
			label: K().min(1)
		})).min(1).refine((e) => new Set(e.map((e) => e.type)).size === e.length, { message: "listener event types must be unique" }).describe("The event types this source can fire, with the wording the automation editor offers them under. The daemon accepts no others."),
		automation: X({
			label: K().min(1),
			mentionLabel: K().min(1).optional().describe("Only for a source whose message events distinguish being addressed. Absent ⇒ the editor offers no mention-only filter, rather than inventing semantics you did not promise."),
			channel: Ld.describe("The primary narrowing filter, a channel, a room, a repo."),
			branchField: Ld.optional().describe("A second narrowing axis, for a source whose events carry one: a pipeline's git ref, so a trigger can say \"the branch that ships\" rather than \"every agent's every failure\"."),
			sender: Ld.optional().describe("How this source names a sender, and where a person finds that id. Declaring it promises that `author.id` is an identity the service vouches for, not a name the sender typed; absent ⇒ the editor offers no sender rules on this source."),
			senderGroup: Ld.optional().describe("How this source names a sender's group, for a source whose messages carry `author.groups` (a Discord role). Absent ⇒ rules match ids only."),
			starterPrompt: K().min(1).describe("The first prompt a new automation on this source is prefilled with. You own the payload vocabulary, so you own the prompt that explains it.")
		}).describe("How the generic automation editor presents this source: its name, its filters, and the prompt it starts people on.")
	}).meta({ power: {
		key: "listener:${provider}",
		sentence: "a realtime listener provider \"${provider}\""
	} })
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/processes.js
$();
var zd = {
	name: "processes",
	description: "Long-lived background processes the daemon runs for this extension: a gateway holding a connection the daemon must not, a dev server. Managed the same way panel dev servers are, and startable and stoppable from the Extensions tab.",
	schema: Y(X({
		name: K().regex(/^[a-z0-9][a-z0-9-]*$/),
		command: K().min(1),
		cwd: K().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root."),
		port: gc("auto").optional().describe("Assign a free port and inject it as PORT."),
		preview: J().optional().describe("Expose the port on a tunnelled preview hostname."),
		autoStart: J().optional().describe("Launch it on install and on daemon boot, rather than waiting to be started.")
	}).meta({
		effect: "process",
		power: {
			key: "process:${name}",
			sentence: "a background process \"${name}\"${autoStart? (starts on boot):}"
		}
	}))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/settings.js
$();
var Bd = {
	name: "settings",
	description: "Typed settings the host renders into the Settings page for you and persists daemon-side. You never draw the form or store the value; you read it back with api.settings.get.",
	schema: Y(X({
		key: K().regex(/^[a-z0-9][a-zA-Z0-9-]*$/),
		type: hc([
			"boolean",
			"string",
			"number",
			"enum"
		]).describe("Which control the Settings page draws. `enum` reads its choices from `enum`."),
		title: K().min(1),
		description: K().optional().describe("The line under the control."),
		default: dc([
			K(),
			q(),
			J()
		]).optional(),
		enum: Y(K()).optional().describe("The choices, for type \"enum\". Meaningless otherwise."),
		secret: J().optional().describe("Mask the value in the UI and strip it from reads: a set secret round-trips as 'still set', never as its value."),
		env: K().regex(/^[A-Z][A-Z0-9_]*$/).optional().describe("Inject the stored value into the agent's shell environment under this name, every turn. How a credential you hold reaches the agent's command-line tools.").meta({ power: {
			key: "setting-env:${key}",
			sentence: "puts the \"${key}\" setting into the agent's environment as ${env}"
		} })
	}))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/side-views.js
$();
var Vd = {
	name: "sideViews",
	description: "Things this extension can show in the editor's side panel, one input at a time, beside whatever the reader is doing. Each entry reserves an id; the extension supplies the component with api.sideViews.register and opens one with api.sideViews.open, and the host refuses any id this list does not cover.",
	schema: Y(X({
		id: K().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: K().min(1).describe("What one of these is called (\"CI run\"), shown in the install dialog and on a tab whose own title could not be read. Each tab's title is the extension's to say for the thing it shows."),
		links: J().optional().describe("Allow this side view to take links the chat renders: a link it recognises (its registration's `claim`) opens beside the chat instead of in a new browser tab. Declared because it changes what the reader's click does; leave it out and the host never asks.").meta({ power: {
			key: "side-view-links:${id}",
			sentence: "opens links it recognises as \"${label}\" beside the chat"
		} })
	}).meta({ power: {
		key: "side-view:${id}",
		sentence: "shows \"${label}\" in the side panel"
	} }))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/viewers.js
$();
var Hd = {
	name: "viewers",
	description: "File formats this extension can render. The host resolves an opened file to your viewer by its extension, fetches the content, and renders your component with it: you keep none of the fetch lifecycle and none of the daemon credentials.",
	schema: Y(X({
		id: K().regex(/^[a-z0-9][a-z0-9-]*$/),
		extensions: Y(K().regex(/^[a-z0-9]+$/)).min(1).describe("Bare file extensions, no dot: e.g. [\"docx\", \"xlsx\"]."),
		fetch: hc([
			"text",
			"blob",
			"url",
			"path"
		]).describe("How much of the file the host hands you. `text` for a format that is text (svg, a subtitle track). `blob` for one that must be parsed end to end before any of it shows (a .docx, a spreadsheet), bounded by the daemon's raw-read cap. `url` for anything range-read rather than parsed (audio, video): your component gets a streaming URL to point an element at, never the bytes. `path` for a viewer whose own backend reads and writes the file: you get the workspace path and the scope it is viewed in, plus `readOnly` where the window may not write the file and, in a desktop app's local window, a `text` slot holding the document's text for while your own view can't show it. Emit `dirty` (a boolean) whenever you start or stop holding edits the file doesn't have, so a window closing over them can ask first."),
		edit: J().optional().describe("Whether this viewer writes the file back. An editing viewer is chosen over a render-only viewer claiming the same extension, whatever order the two activated in."),
		compare: J().optional().describe("Whether this viewer also draws two versions of a file as one, with what changed marked in place: its registration then carries a `compare` component the host renders with `before` and `after` blobs. Only for `fetch: \"blob\"`.")
	}).meta({ power: {
		key: "viewer:${id}",
		sentence: "${edit?opens and edits:opens}${compare? and compares:} .${extensions|, .} files (${fetch})"
	} }))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/views.js
$();
var Ud = {
	name: "views",
	description: "Sidebar elements this extension may register at runtime. Each entry reserves an id and a surface; the extension supplies the component with api.views.register, and the host refuses any registration this list does not cover.",
	schema: Y(X({
		id: K().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: K().min(1).describe("The name shown on the tile or tab. The manifest's value wins over the one passed at registration."),
		surface: hc([
			"rail",
			"directory",
			"sandbox"
		]).describe("Where it appears. `rail` is a tile in the global left rail; `directory` is a panel opened from a repo in the Workspace tree; `sandbox` is a tab on the Sandbox hub, for a view whose subject is the box rather than the work."),
		badge: J().optional().describe("Allow this view to say something on its tile: a count, a glyph, or that work is running there. Declared because a badge interrupts from every other screen in the app; leave it out and any badge the extension registers is dropped.").meta({ power: {
			key: "view-badge:${id}",
			sentence: "may badge the \"${label}\" tile from any screen"
		} })
	}).meta({ power: {
		key: "view:${id}",
		sentence: "a ${surface} view \"${label}\""
	} }))
};
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/points/index.js
$();
var Wd = X(Object.fromEntries([
	Ud,
	Id,
	Hd,
	Pd,
	Vd,
	Nd,
	Bd,
	zd,
	hd,
	Fd,
	Md,
	Rd,
	gd,
	_d,
	Dd
].map((e) => [e.name, e.schema.describe(e.description).optional()])));
//#endregion
//#region node_modules/.pnpm/@intentic+extension-manifest@1.323.0/node_modules/@intentic/extension-manifest/dist/manifest.js
$();
var Gd = () => K().superRefine((e, t) => {
	let n = md(e);
	n !== void 0 && t.addIssue({
		code: "custom",
		message: n
	});
}), Kd = X({
	$schema: K().optional().describe("The authoring schema, for editor completion and validation. Nothing at runtime reads it."),
	publisher: K().regex(/^[a-z0-9][a-z0-9-]*$/),
	name: K().regex(/^[a-z0-9][a-z0-9-]*$/),
	version: K().min(1).describe("Your own semver, display and identity only. The installed code's identity is the pinned commit sha."),
	category: K().min(1).optional().describe("Which section of the Extensions tab this sits under: a grouping by what it is FOR, which cannot be derived from what it contributes. A section this app has never heard of lands in 'Other' rather than failing to install."),
	...cd,
	engines: X({ intentic: K().min(1) }).describe("A semver range over the host's extension API version, checked before your code is activated."),
	entry: K().min(1).refine((e) => !e.split("/").includes(".."), { message: "entry must stay inside the checkout" }).meta({ power: {
		key: "entry",
		sentence: "runs a UI bundle in your browser"
	} }).optional().describe("Repo-relative path of your prebuilt single-file ESM bundle, built with `vue` and `@intentic/extension-api` as externals. Absent ⇒ an extension with no UI."),
	server: K().min(1).refine((e) => !e.split("/").includes(".."), { message: "server must stay inside the checkout" }).meta({ power: {
		key: "server",
		sentence: "runs a backend bundle inside the daemon's extension host"
	} }).optional().describe("Repo-relative path of your prebuilt single-file node ESM server bundle, exporting `activateServer`. Served under your own route namespace, which the daemon proxies. Nothing is provided at runtime but node builtins, so bundle everything else in. Absent ⇒ no backend."),
	permissions: X({
		sandbox: Y(Gd().meta({ power: {
			key: "sandbox:${value}",
			sentence: "its UI calls the sandbox route ${value}"
		} })).optional().describe("Daemon routes your UI half may call. Your own backend namespace needs no entry: its backend is your own code."),
		daemon: Y(Gd().meta({ power: {
			key: "daemon:${value}",
			sentence: "its backend calls the daemon route ${value}"
		} })).optional().describe("Daemon routes your SERVER half may call. Separate from `sandbox` because the two halves run as different principals: the UI as the owner's session, the backend as a minted per-extension token, so a grant to one must never quietly widen the other.")
	}).optional().describe("How far this extension may reach into the daemon, as \"<METHOD> <path-glob>\" entries where `*` matches one path segment: e.g. \"GET /panels\", \"POST /panels/*/start\". The install dialog shows these, the host refuses anything undeclared, and the usage ledger records which were actually earned."),
	contributes: Wd.optional()
}).superRefine((e, t) => {
	let n = e.contributes, r = n?.tools, i = n?.capabilities ?? [];
	for (let n of i) n.kind === "cli" && n.mcp !== void 0 && e.server === void 0 && t.addIssue({
		code: "custom",
		path: ["contributes", "capabilities"],
		message: `card "${n.id}" declares \`mcp\`, which only a \`server\` bundle can answer`
	});
	r !== void 0 && (r.process === void 0 ? e.server === void 0 && t.addIssue({
		code: "custom",
		path: ["contributes", "tools"],
		message: "tools need a `server` bundle to serve them, or a `process` that does"
	}) : (n?.processes?.find((e) => e.name === r.process)?.port !== "auto" && t.addIssue({
		code: "custom",
		path: [
			"contributes",
			"tools",
			"process"
		],
		message: "tools.process must name a process in contributes.processes declared with port: \"auto\""
	}), r.path === void 0 && t.addIssue({
		code: "custom",
		path: [
			"contributes",
			"tools",
			"path"
		],
		message: "tools served by a process need the path its MCP endpoint answers at"
	})), r.perCard !== void 0 && !i.some((e) => e.kind === "cli" && e.id === r.perCard) && t.addIssue({
		code: "custom",
		path: [
			"contributes",
			"tools",
			"perCard"
		],
		message: "tools.perCard must name one of this extension's cli cards"
	}));
}).parse({
	$schema: "https://intentic.dev/intentic-extension.schema.json",
	publisher: "intentic",
	name: "knowledge",
	version: "1.0.0",
	category: "knowledge",
	icon: "sitemap",
	engines: { intentic: "^2.20.0" },
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
//#endregion
export { sd as activate, Kd as manifest };
