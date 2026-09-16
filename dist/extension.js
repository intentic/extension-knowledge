import { hostSlot as e } from "@intentic/extension-api";
import { Fragment as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createSlots as s, createTextVNode as c, createVNode as l, defineComponent as u, isRef as d, mergeModels as f, nextTick as p, normalizeClass as m, normalizeStyle as ee, openBlock as h, ref as g, renderList as _, resolveDirective as te, toDisplayString as v, toRef as y, unref as b, useModel as ne, watch as re, withCtx as x, withDirectives as ie, withKeys as ae, withModifiers as oe } from "vue";
import { Button as se, DagGraph as S, FilterBar as ce, Icon as le, InfoHint as ue, InfoTable as de, Markdown as fe, NavRail as C, NoteEditor as pe, Notice as me, Picker as he, Row as ge, SkeletonRows as _e, StatusBadge as w, formatBytes as ve, formatTimestamp as ye, freshness as be, noticeOf as xe, ui as Se, useKeyedDraft as Ce, useLoadingReveal as T, useNarrow as we, useNoteDraft as Te, useScrollReset as Ee, useStickyTop as De } from "@intentic/extension-ui";
import { useMutation as Oe, useQuery as ke, useQueryClient as Ae } from "@tanstack/vue-query";
import { ExtensionManifestSchema as je } from "@intentic/extension-manifest";
//#region \0rolldown/runtime.js
var Me = Object.defineProperty, E = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, Ne = (e, t) => {
	let n = {};
	for (var r in e) Me(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Me(n, Symbol.toStringTag, { value: "Module" }), n;
}, Pe, D, Fe = E((() => {
	({bindHost: Pe, host: D} = e("ext-knowledge"));
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/util.js
function Ie(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Le(e, t = "|") {
	return e.map((e) => nt(e)).join(t);
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
function Ue(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function We(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function O(e) {
	return We(e._zod.def) ?? e._zod.def.shape;
}
function Ge(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return Ue(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function Ke(e, t, n) {
	t in e ? Ue(e, t, n) : e[t] = n;
}
function qe(e, t, n, r) {
	let i = O(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? Ge(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : Ke(e, a, r ? r(n.value, a) : n.value));
	}
}
function Je(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? Ge(e, n, () => t[n]) : Ke(e, n, r.value));
	}
}
function k(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Ye(e) {
	return JSON.stringify(e);
}
function Xe(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function Ze(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Qe(e) {
	if (Ze(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return Ze(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function $e(e) {
	return Qe(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function et(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function tt(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function A(e) {
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
function nt(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function rt(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
function it(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return qe(i, e, at(e, t)), tt(e, k(n, {
		shape: i,
		checks: []
	}));
}
function at(e, t) {
	let n = O(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function ot(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(at(e, t)), a = {};
	return qe(a, e, Reflect.ownKeys(O(e)).filter((e) => !i.has(e))), tt(e, k(n, {
		shape: a,
		checks: []
	}));
}
function st(e, t) {
	if (!Qe(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = O(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return tt(e, k(e._zod.def, { shape: ct(e, t) }));
}
function ct(e, t) {
	let n = {};
	return qe(n, e, Reflect.ownKeys(O(e))), Je(n, t), n;
}
function lt(e, t) {
	if (!Qe(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return tt(e, k(e._zod.def, { shape: ct(e, t) }));
}
function ut(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return qe(n, e, Reflect.ownKeys(O(e))), qe(n, t, Reflect.ownKeys(O(t))), tt(e, k(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function dt(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(at(t, n)) : void 0, o = {};
	return qe(o, t, Reflect.ownKeys(O(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), tt(t, k(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function ft(e, t, n) {
	let r = n ? new Set(at(t, n)) : void 0, i = {};
	return qe(i, t, Reflect.ownKeys(O(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), tt(t, k(t._zod.def, { shape: i }));
}
function j(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function pt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function mt(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function ht(e) {
	return typeof e == "string" ? e : e?.message;
}
function gt(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function _t(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : ht(e.inst?._zod.def?.error?.(e)) ?? ht(a?.(e)) ?? ht(t?.error?.(e)) ?? ht(n.customError?.(e)) ?? ht(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
function vt(e) {
	let t = e.length;
	if (!Ft.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function yt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function bt(e) {
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
function xt(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function St(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Tt(e, n, r.value);
	}
}
function M(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function Ct(e, t, n) {
	return M(e, t, n, !1);
}
function wt(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return M(this, n, r(this));
			},
			set(e) {
				M(this, n, e);
			}
		});
	}
	return t;
}
function Tt(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : M(this, t, n.bind(this));
		},
		set(e) {
			M(this, t, e);
		}
	});
}
function Et(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
function N(e, t, n) {
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
var kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, P = E((() => {
	Gt(), kt = class {
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
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/core.js
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
function F(e, t, n, r) {
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
			s.has(i) || (s.add(i), St(i, o));
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
function I(e) {
	return e && Object.assign(R, e), R;
}
var Vt, Ht, Ut, L, Wt, R, Gt = E((() => {
	P(), Ht = {
		value: void 0,
		enumerable: !1
	}, Ut = "captureStackTrace" in Error ? Error : null, L = class extends Error {
		constructor() {
			super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
		}
	}, Wt = class extends Error {
		constructor(e) {
			super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
		}
	}, (Vt = globalThis).__zod_globalConfig ?? (Vt.__zod_globalConfig = {}), R = globalThis.__zod_globalConfig;
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/errors.js
function Kt() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Re, 2), e.message;
}
function qt(e) {
	this._zod.message = e;
}
function Jt(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Yt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Jt(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Xt(e, t = (e) => e.message) {
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
var Zt, Qt, $t, en, tn, nn = E((() => {
	Gt(), P(), Zt = {
		get: Kt,
		set: qt,
		enumerable: !0,
		configurable: !0
	}, Qt = {
		value: void 0,
		enumerable: !1
	}, $t = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), en = (e, t) => {
		e.name = "$ZodError", Qt.value = t, Object.defineProperty(e, "issues", Qt), Qt.value = void 0, Object.defineProperty(e, "message", Zt);
		let n = Object.getPrototypeOf(e);
		$t.has(n) || ($t.add(n), Object.defineProperty(n, "toString", {
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
	}, tn = F("$ZodError", en), F("$ZodError", en, void 0, { Parent: Error });
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/parse.js
function rn(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
function an(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => _t(e, n, I()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
function on(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[fn] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new L();
	return a.issues.length === 0;
}
var sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn = E((() => {
	Gt(), P(), sn = (e) => {
		let t = (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !1
			} : { async: !1 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise) throw new L();
			if (s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => _t(e, o, I())));
				throw At(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, cn = (e) => {
		let t = async (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !0
			} : { async: !0 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise && (s = await s), s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => _t(e, o, I())));
				throw At(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, ln = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			async: !1
		} : { async: !1 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (a instanceof Promise) throw new L();
		return a.issues.length ? an(e, a.issues, i) : {
			success: !0,
			data: a.value
		};
	}, un = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			async: !0
		} : { async: !0 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		return a instanceof Promise && (a = await a), a.issues.length ? an(e, a.issues, i) : {
			success: !0,
			data: a.value
		};
	}, dn = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), fn = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), pn = ((e, t, n) => {
		let r = e._zod.bag.validator;
		if (r !== void 0) {
			if (r(t) !== dn) return !0;
			if (r.definite === !0 && n === void 0) return !1;
		}
		return on(e, t, n);
	}), mn = async (e, t, n) => {
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
	}, hn = (e) => {
		let t = sn(e), n = (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return t(e, r, o, rn(n, a));
		};
		return n;
	}, gn = (e) => {
		let t = sn(e), n = (e, r, i, a) => t(e, r, i, rn(n, a));
		return n;
	}, _n = (e) => {
		let t = cn(e), n = async (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return await t(e, r, o, rn(n, a));
		};
		return n;
	}, vn = (e) => {
		let t = cn(e), n = async (e, r, i, a) => await t(e, r, i, rn(n, a));
		return n;
	}, yn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return ln(e)(t, n, i);
	}, bn = (e) => (t, n, r) => ln(e)(t, n, r), xn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return un(e)(t, n, i);
	}, Sn = (e) => async (t, n, r) => un(e)(t, n, r);
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/regexes.js
function wn(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
function Tn() {
	return new RegExp(Bn, "u");
}
function En(e) {
	return RegExp(`^${e}$`);
}
function Dn(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function On(e) {
	return RegExp(`^${Dn(e)}$`);
}
function kn(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Dn({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Dn({ precision: e.precision })}` : n;
	return RegExp(`^${Yn}T(?:${r})$`);
}
var An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr = E((() => {
	An = /^[cC][0-9a-z]{6,}$/, jn = /^[0-9a-z]+$/, Mn = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Nn = /^[0-9a-vA-V]{20}$/, Pn = /^[A-Za-z0-9]{27}$/, Fn = /^[a-zA-Z0-9_-]{21}$/, In = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ln = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Rn = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, zn = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Bn = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", Vn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Hn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Un = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Wn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Gn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Kn = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, qn = /^https?$/, Jn = /^\+[1-9]\d{6,14}$/, Yn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Xn = /*@__PURE__*/ En(Yn), Zn = /^[\s\S]{0,}$/, Qn = /^-?\d+(?:\.\d+)?$/, $n = /^[^A-Z]*$/, er = /^[^a-z]*$/;
})), z, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr = E((() => {
	Gt(), tr(), P(), z = /*@__PURE__*/ F("$ZodCheck", (e, t) => {
		var n;
		e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
	}), nr = (e) => {
		let t = e.value;
		return !Be(t) && t.length !== void 0;
	}, rr = {
		number: "number",
		bigint: "bigint",
		object: "date"
	}, ir = /*@__PURE__*/ F("$ZodCheckLessThan", (e, t) => {
		z.init(e, t);
		let n = rr[typeof t.value];
		e._zod.check = (r) => {
			(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
				origin: rr[typeof r.value] ?? n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), ar = /*@__PURE__*/ F("$ZodCheckGreaterThan", (e, t) => {
		z.init(e, t);
		let n = rr[typeof t.value];
		e._zod.check = (r) => {
			(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
				origin: rr[typeof r.value] ?? n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), or = /*@__PURE__*/ F("$ZodCheckMultipleOf", (e, t) => {
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
	}), sr = /*@__PURE__*/ F("$ZodCheckNumberFormat", (e, t) => {
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
	}), cr = /*@__PURE__*/ F("$ZodCheckMaxLength", (e, t) => {
		var n;
		z.init(e, t), (n = e._zod.def).when ?? (n.when = nr), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i > t.maximum ? vt(r) : i) <= t.maximum) return;
			let a = yt(r);
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
	}), lr = /*@__PURE__*/ F("$ZodCheckMinLength", (e, t) => {
		var n;
		z.init(e, t), (n = e._zod.def).when ?? (n.when = nr), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? vt(r) : i) >= t.minimum) return;
			let a = yt(r);
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
	}), ur = /*@__PURE__*/ F("$ZodCheckLengthEquals", (e, t) => {
		var n;
		z.init(e, t), (n = e._zod.def).when ?? (n.when = nr), e._zod.check = (n) => {
			let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? vt(r) : i;
			if (a === t.length) return;
			let o = yt(r), s = a > t.length;
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
	}), dr = /*@__PURE__*/ F("$ZodCheckStringFormat", (e, t) => {
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
	}), fr = /*@__PURE__*/ F("$ZodCheckRegex", (e, t) => {
		dr.init(e, t), e._zod.check = (n) => {
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
	}), pr = /*@__PURE__*/ F("$ZodCheckLowerCase", (e, t) => {
		t.pattern ??= $n, dr.init(e, t);
	}), mr = /*@__PURE__*/ F("$ZodCheckUpperCase", (e, t) => {
		t.pattern ??= er, dr.init(e, t);
	}), hr = /*@__PURE__*/ F("$ZodCheckIncludes", (e, t) => {
		z.init(e, t);
		let n = et(t.includes);
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
	}), gr = /*@__PURE__*/ F("$ZodCheckStartsWith", (e, t) => {
		z.init(e, t);
		let n = RegExp(`^${et(t.prefix)}.*`);
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
	}), _r = /*@__PURE__*/ F("$ZodCheckEndsWith", (e, t) => {
		z.init(e, t);
		let n = RegExp(`.*${et(t.suffix)}$`);
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
	}), vr = /*@__PURE__*/ F("$ZodCheckOverwrite", (e, t) => {
		z.init(e, t), e._zod.check = (e) => {
			e.value = t.tx(e.value);
		};
	});
})), br, xr = E((() => {
	br = class {
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
})), Sr, Cr = E((() => {
	Sr = {
		major: 4,
		minor: 6,
		patch: 5
	};
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/schemas.js
async function wr(e, t) {
	let n = { async: !0 };
	return Zr(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function Tr(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return Zr(r, n);
			} catch {}
			return wr(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
function Er(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Dr(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? Er(e) || 2 : Or(e, t);
}
function Or(e, t) {
	if (!t.normalize && t.protocol?.source === qn.source && !/^https?:\/\//i.test(e)) return 1;
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
function kr(e) {
	return e.replace(ni, "");
}
function Ar(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function jr(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
function Mr(e) {
	return gi.test(e) ? Er(`http://[${e}]`) : !1;
}
function Nr(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Mr(n);
}
function Pr(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Fr(e) {
	if (!Si.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Pr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function Ir(e, t = null) {
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
function Lr(e, t, n) {
	e.issues.length && t.issues.push(...mt(n, e.issues)), t.value[n] = e.value;
}
function Rr(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...mt(n, e.issues));
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
function zr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : ji, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = rt(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Br(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (j(n, p)) break;
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
		a instanceof Promise ? e.push(a.then((e) => Rr(e, n, i, t, d, f))) : Rr(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Vr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !j(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => _t(e, r, I())))
	}), t);
}
function Hr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Qe(e) && Qe(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Hr(e[n], t[n]);
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
			let i = e[r], a = t[r], o = Hr(i, a);
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
function Ur(e, t, n) {
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
	let c = Hr(t.value, n.value);
	if (!c.valid) {
		if (j(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
function Wr(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
function Gr(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Kr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function qr(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => _t(e, r, I())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
function Jr(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function Yr(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
function Xr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(xt(e));
	}
}
var B, Zr, Qr, V, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi = E((() => {
	yr(), Gt(), xr(), tr(), P(), Cr(), B = /*@__PURE__*/ F("$ZodType", (e, t) => {
		var n;
		e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Sr;
		let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
		for (let t of i) for (let n of t._zod.onattach) n(e);
		if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
			e._zod.run = e._zod.parse;
		});
		else {
			let t = (t, n, r) => {
				if (t.memo) return t;
				let i = j(t), a;
				for (let o of n) {
					if (o._zod.def.when) {
						if (pt(t) || !o._zod.def.when(t)) continue;
					} else if (i) continue;
					let n = t.issues.length, s = o._zod.check(t);
					if (s instanceof Promise && r?.async === !1) throw new L();
					if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
						await s, t.issues.length !== n && (gt(t.issues, n, e), i ||= j(t, n));
					});
					else {
						if (t.issues.length === n) continue;
						gt(t.issues, n, e), i ||= j(t, n);
					}
				}
				return a ? a.then(() => t) : t;
			}, n = (n, r, a) => {
				if (j(n)) return n.aborted = !0, n;
				let o = t(r, i, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new L();
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
					if (a.async === !1) throw new L();
					return o.then((e) => t(e, i, a));
				}
				return t(o, i, a);
			};
		}
	}, {
		get "~standard"() {
			return Ct(this, "~standard", Tr(this));
		},
		set "~standard"(e) {
			M(this, "~standard", e);
		}
	}), Zr = (e, t) => e.issues.length ? { issues: e.issues.map((e) => _t(e, t, I())) } : { value: e.value }, Qr = /*@__PURE__*/ F("$ZodString", (e, t) => {
		B.init(e, t), e._zod.pattern = t.pattern ?? Zn, e._zod.parse = (n, r) => {
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
	}), V = /*@__PURE__*/ F("$ZodStringFormat", (e, t) => {
		dr.init(e, t), Qr.init(e, t);
	}), $r = /*@__PURE__*/ F("$ZodGUID", (e, t) => {
		t.pattern ??= Ln, V.init(e, t);
	}), ei = /*@__PURE__*/ F("$ZodUUID", (e, t) => {
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
			t.pattern ??= Rn(e);
		} else t.pattern ??= Rn();
		V.init(e, t);
	}), ti = /*@__PURE__*/ F("$ZodEmail", (e, t) => {
		t.pattern ??= zn, V.init(e, t);
	}), ni = /[\t\n\r]/g, ri = /*@__PURE__*/ F("$ZodURL", (e, t) => {
		V.init(e, t), e._zod.check = (n) => {
			try {
				let r = n.value.trim(), i = Dr(r, t);
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
					n.value = kr(r);
					return;
				}
				t.hostname && !Ar(i, t.hostname) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), t.protocol && !jr(i, t.protocol) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), n.value = t.normalize ? i.href : kr(r);
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
	}), ii = /*@__PURE__*/ F("$ZodEmoji", (e, t) => {
		t.pattern ??= Tn(), V.init(e, t);
	}), ai = /*@__PURE__*/ F("$ZodNanoID", (e, t) => {
		if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
		t.pattern ??= t.length === void 0 ? Fn : wn(t.length), V.init(e, t);
	}), oi = /*@__PURE__*/ F("$ZodCUID", (e, t) => {
		t.pattern ??= An, V.init(e, t);
	}), si = /*@__PURE__*/ F("$ZodCUID2", (e, t) => {
		t.pattern ??= jn, V.init(e, t);
	}), ci = /*@__PURE__*/ F("$ZodULID", (e, t) => {
		t.pattern ??= Mn, V.init(e, t);
	}), li = /*@__PURE__*/ F("$ZodXID", (e, t) => {
		t.pattern ??= Nn, V.init(e, t);
	}), ui = /*@__PURE__*/ F("$ZodKSUID", (e, t) => {
		t.pattern ??= Pn, V.init(e, t);
	}), di = /*@__PURE__*/ F("$ZodISODateTime", (e, t) => {
		t.pattern ??= kn(t), V.init(e, t);
	}), fi = /*@__PURE__*/ F("$ZodISODate", (e, t) => {
		t.pattern ??= Xn, V.init(e, t);
	}), pi = /*@__PURE__*/ F("$ZodISOTime", (e, t) => {
		t.pattern ??= On(t), V.init(e, t);
	}), mi = /*@__PURE__*/ F("$ZodISODuration", (e, t) => {
		t.pattern ??= In, V.init(e, t);
	}), hi = /*@__PURE__*/ F("$ZodIPv4", (e, t) => {
		t.pattern ??= Vn, V.init(e, t);
	}), gi = /^[0-9a-fA-F:.]+$/, _i = /*@__PURE__*/ F("$ZodIPv6", (e, t) => {
		t.pattern ??= Hn, V.init(e, t), e._zod.check = (n) => {
			Mr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), vi = /*@__PURE__*/ F("$ZodCIDRv4", (e, t) => {
		t.pattern ??= Un, V.init(e, t);
	}), yi = /*@__PURE__*/ F("$ZodCIDRv6", (e, t) => {
		t.pattern ??= Wn, V.init(e, t), e._zod.check = (n) => {
			Nr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), bi = /^[0-9a-zA-Z+/]*={0,2}$/, xi = /*@__PURE__*/ F("$ZodBase64", (e, t) => {
		t.pattern ??= bi, V.init(e, t), e._zod.check = (n) => {
			Pr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Si = /^[A-Za-z0-9_-]*$/, Ci = /*@__PURE__*/ F("$ZodBase64URL", (e, t) => {
		t.pattern ??= Si, V.init(e, t), e._zod.check = (n) => {
			Fr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), wi = /*@__PURE__*/ F("$ZodE164", (e, t) => {
		t.pattern ??= Jn, V.init(e, t);
	}), Ti = /*@__PURE__*/ F("$ZodJWT", (e, t) => {
		V.init(e, t), e._zod.check = (n) => {
			Ir(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Ei = /*@__PURE__*/ F("$ZodNumber", (e, t) => {
		B.init(e, t), e._zod.pattern = Qn, e._zod.parse = (n, r) => {
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
	}), Di = /*@__PURE__*/ F("$ZodNumberFormat", (e, t) => {
		sr.init(e, t), Ei.init(e, t);
	}), Oi = /*@__PURE__*/ F("$ZodUnknown", (e, t) => {
		B.init(e, t), e._zod.parse = (e) => e;
	}), ki = /*@__PURE__*/ F("$ZodNever", (e, t) => {
		B.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
			expected: "never",
			code: "invalid_type",
			input: t.value,
			inst: e
		}), t);
	}), Ai = /*@__PURE__*/ F("$ZodArray", (e, t) => {
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
				if (c instanceof Promise) o.push(c.then((t) => Lr(t, r, e)));
				else if (Lr(c, r, e), s && c.issues.length !== 0 && j(c)) break;
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), ji = [], Mi = /*@__PURE__*/ F("$ZodObject", (e, t) => {
		B.init(e, t);
		let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
		if (r) {
			let e = () => {
				let n = { ...r };
				return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
			};
			e.raw = r, Object.defineProperty(t, "shape", { get: e });
		}
		let i = ze(() => zr(t));
		N(e, "propValues", (e) => {
			let t = e.def.shape, n = {};
			for (let e in t) {
				let r = t[e]._zod;
				if (r.values) {
					Object.prototype.hasOwnProperty.call(n, e) || Ue(n, e, /* @__PURE__ */ new Set());
					for (let t of r.values) n[e].add(t);
					r.optin !== void 0 && n[e].add(void 0);
				}
			}
			return n;
		});
		let a = Ze, o = t.catchall, s, c = R.memoizer;
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
					if (j(t, f)) break;
					f = t.issues.length;
				}
				if (e === "__proto__") continue;
				let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
					value: r[e],
					issues: []
				}, n);
				s instanceof Promise ? l.push(s.then((n) => Rr(n, t, e, r, a, o))) : Rr(s, t, e, r, a, o);
			}
			return o ? Br(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
		};
	}), Ni = /*@__PURE__*/ F("$ZodObjectJIT", (e, t) => {
		Mi.init(e, t);
		let n = e._zod.parse, r = ze(() => zr(t)), i = R.memoizer, a = (t) => {
			let n = r.value, a = n.symbolKeys, o = new br(["payload", "ctx"], {
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
				let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Ye(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
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
		}, o, s = Ze, c = !R.jitless, l = c && jt.value, u = t.catchall, d;
		e._zod.parse = (i, f) => {
			d ??= r.value;
			let p = i.value;
			return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Br([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
				expected: "object",
				code: "invalid_type",
				input: p,
				inst: e
			}), i);
		};
	}), Pi = /*@__PURE__*/ F("$ZodUnion", (e, t) => {
		B.init(e, t), N(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), N(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), N(e, "values", (e) => {
			if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
		}), N(e, "pattern", (e) => {
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
			return a ? Promise.all(o).then((t) => Vr(t, r, e, i)) : Vr(o, r, e, i);
		};
	}), Fi = /*@__PURE__*/ F("$ZodIntersection", (e, t) => {
		B.init(e, t), e._zod.parse = (e, n) => {
			let r = e.value, i = t.left._zod.run({
				value: r,
				issues: []
			}, n), a = t.right._zod.run({
				value: r,
				issues: []
			}, n);
			return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Ur(e, t, n)) : Ur(e, i, a);
		};
	}), Ii = /*@__PURE__*/ F("$ZodEnum", (e, t) => {
		B.init(e, t);
		let n = Ie(t.entries), r = new Set(n);
		e._zod.values = r, N(e, "pattern", (e) => {
			let t = Ie(e.def.entries).filter((e) => Mt.has(typeof e));
			return RegExp(t.length ? `^(${t.map((e) => et(e.toString())).join("|")})$` : "^[^\\s\\S]$");
		}), e._zod.parse = (t, i) => {
			let a = t.value;
			return r.has(a) || t.issues.push({
				code: "invalid_value",
				values: n,
				input: a,
				inst: e
			}), t;
		};
	}), Li = /*@__PURE__*/ F("$ZodLiteral", (e, t) => {
		B.init(e, t);
		let n = new Set(t.values);
		e._zod.values = n, N(e, "pattern", (e) => {
			let t = e.def.values;
			return RegExp(t.length ? `^(${t.map((e) => typeof e == "string" ? et(e) : e ? et(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$");
		}), e._zod.parse = (r, i) => {
			let a = r.value;
			return n.has(a) || r.issues.push({
				code: "invalid_value",
				values: t.values,
				input: a,
				inst: e
			}), r;
		};
	}), Ri = /*@__PURE__*/ F("$ZodTransform", (e, t) => {
		B.init(e, t), e._zod.optin = "optional", R.memoizer?.guard(e), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Wt(e.constructor.name);
			let i = t.transform(n.value, n);
			if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
			if (i instanceof Promise) throw new L();
			return n.value = i, n;
		};
	}), zi = /*@__PURE__*/ F("$ZodOptional", (e, t) => {
		B.init(e, t), N(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", N(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
		}), N(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Ve(t.source)})?$`) : void 0;
		}), e._zod.parse = (e, n) => {
			if (e.value === void 0) {
				if (t.innerType._zod.optin !== "defaulted") return e;
				let r = t.innerType._zod.run({
					value: e.value,
					issues: []
				}, n);
				return r instanceof Promise ? r.then((t) => Wr(e, t)) : Wr(e, r);
			}
			return t.innerType._zod.run(e, n);
		};
	}), Bi = /*@__PURE__*/ F("$ZodExactOptional", (e, t) => {
		zi.init(e, t), N(e, "values", (e) => e.def.innerType._zod.values), N(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
	}), Vi = /*@__PURE__*/ F("$ZodNullable", (e, t) => {
		B.init(e, t), N(e, "optin", (e) => e.def.innerType._zod.optin), N(e, "optout", (e) => e.def.innerType._zod.optout), N(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Ve(t.source)}|null)$`) : void 0;
		}), N(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
	}), Hi = /*@__PURE__*/ F("$ZodDefault", (e, t) => {
		B.init(e, t), e._zod.optin = "defaulted", N(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			if (e.value === void 0) return e.value = t.defaultValue, e;
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Gr(e, t)) : Gr(r, t);
		};
	}), Ui = /*@__PURE__*/ F("$ZodPrefault", (e, t) => {
		B.init(e, t), e._zod.optin = "defaulted", N(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
	}), Wi = /*@__PURE__*/ F("$ZodNonOptional", (e, t) => {
		B.init(e, t), N(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
		}), e._zod.parse = (n, r) => {
			let i = t.innerType._zod.run(n, r);
			return i instanceof Promise ? i.then((t) => Kr(t, e)) : Kr(i, e);
		};
	}), Gi = /*@__PURE__*/ F("$ZodCatch", (e, t) => {
		B.init(e, t), N(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), N(e, "optout", (e) => e.def.innerType._zod.optout), N(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((r) => qr(e, r, t, n)) : qr(e, r, t, n);
		};
	}), Ki = /*@__PURE__*/ F("$ZodPipe", (e, t) => {
		B.init(e, t), N(e, "values", (e) => e.def.in._zod.values), N(e, "optin", (e) => e.def.in._zod.optin), N(e, "optout", (e) => e.def.out._zod.optout), N(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if (n.direction === "backward") {
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Jr(e, t.in, n)) : Jr(r, t.in, n);
			}
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Jr(e, t.out, n)) : Jr(r, t.out, n);
		};
	}), qi = /*@__PURE__*/ F("$ZodReadonly", (e, t) => {
		B.init(e, t), N(e, "propValues", (e) => e.def.innerType._zod.propValues), N(e, "values", (e) => e.def.innerType._zod.values), N(e, "optin", (e) => e.def.innerType?._zod?.optin), N(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then(Yr) : Yr(r);
		};
	}), Ji = /*@__PURE__*/ F("$ZodCustom", (e, t) => {
		z.init(e, t), B.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
			let r = n.value, i = t.fn(r);
			if (i instanceof Promise) return i.then((t) => Xr(t, n, r, e));
			Xr(i, n, r, e);
		};
	});
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/memoizer.js
function Xi(e) {
	return typeof e == "object" && !!e;
}
function Zi(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
function Qi(e, t, n) {
	let r = oa.get(e);
	if (r !== void 0) return r ? la : sa;
	if (t.has(e)) return la;
	t.add(e);
	let i = sa, a = (e) => {
		if (i !== la && e?._zod) {
			let r = Qi(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = sa;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? ca : o.value?._zod ? Qi(o.value, t, n) : sa;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = We(c);
			s(e ? o(e, !0) : ca), a(c.catchall);
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
			s(r ? Qi(r, t, !1) : ca);
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
	return t.delete(e), $i(e, i);
}
function $i(e, t) {
	return t !== ca && oa.set(e, t === la), t;
}
function ea(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
function ta() {
	return fa;
}
function na(e, t) {
	let n = e[ia]?.backEdges;
	return n !== void 0 && Xi(t) && n.has(t);
}
var ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa = E((() => {
	P(), ra = class extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
		}
	}, ia = "~memo", aa = [], oa = /*@__PURE__*/ new WeakMap(), sa = 0, ca = 1, la = 2, da = [], fa = {
		alloc(e, t, n) {
			let r = ua;
			if (!r) return n;
			ua = void 0;
			let i = {
				value: n,
				issues: null
			};
			return r.set(t.value, i), da.push(i), n;
		},
		guard(e) {
			var t;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, n = (e, n) => {
					if (n.direction !== "backward" && na(n, e.value)) throw new ra();
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
						let i = Qi(e, /* @__PURE__ */ new Set(), !1);
						if (i === sa) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
						i === la || r ? n = !0 : r = !0;
					}
					let l = s.value;
					if (!Xi(l)) return t(s, c);
					let u = c[ia];
					u || (u = {
						buckets: /* @__PURE__ */ new WeakMap(),
						backEdges: void 0
					}, c[ia] = u);
					let d;
					i === c ? d = a : (d = ea(u, e), i = c, a = d);
					let f = d.get(l);
					if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...Zi(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
					ua = d;
					let p = da.length, m = t(s, c);
					ua = void 0;
					let ee = da.length > p ? da.pop() : void 0;
					return m instanceof Promise ? m.then((e) => (ee && (ee.issues = e.issues.length ? Zi(e.issues) : aa), e)) : (ee && (ee.issues = m.issues.length ? Zi(m.issues) : aa), m);
				};
				e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
			});
		}
	};
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/locales/en.js
function ma() {
	return { localeError: ha() };
}
var ha, ga = E((() => {
	P(), ha = () => {
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
				case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(bt(e.input), e.input)}`;
				case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${nt(e.values[0])}` : `Invalid option: expected one of ${Le(e.values, "|")}`;
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
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/registries.js
function _a() {
	return new ya();
}
var va, ya, ba, xa = E((() => {
	ya = class {
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
	}, (va = globalThis).__zod_globalRegistry ?? (va.__zod_globalRegistry = _a()), ba = globalThis.__zod_globalRegistry;
})), Sa = E((() => {}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/api.js
function Ca(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function wa(e, t) {
	return new e(Ca({
		type: "string",
		...A(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Da(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ka(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Aa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ja(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ra(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
	return new e(Ca({
		type: "number",
		checks: [],
		...A(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t) {
	return new e(Ca({
		type: "number",
		coerce: !0,
		checks: [],
		...A(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function eo(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
	return new e({
		type: "never",
		...A(t)
	});
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
	return new ir({
		check: "less_than",
		...A(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
	return new ir({
		check: "less_than",
		...A(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
	return new ar({
		check: "greater_than",
		...A(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
	return new ar({
		check: "greater_than",
		...A(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
	return new or({
		check: "multiple_of",
		...A(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
	return new cr({
		check: "max_length",
		...A(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function co(e, t) {
	return new lr({
		check: "min_length",
		...A(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
	return new ur({
		check: "length_equals",
		...A(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
	return new fr({
		check: "string_format",
		format: "regex",
		...A(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
	return new pr({
		check: "string_format",
		format: "lowercase",
		...A(e)
	});
}
// @__NO_SIDE_EFFECTS__
function po(e) {
	return new mr({
		check: "string_format",
		format: "uppercase",
		...A(e)
	});
}
// @__NO_SIDE_EFFECTS__
function mo(e, t) {
	return new hr({
		check: "string_format",
		format: "includes",
		...A(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function ho(e, t) {
	return new gr({
		check: "string_format",
		format: "starts_with",
		...A(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function go(e, t) {
	return new _r({
		check: "string_format",
		format: "ends_with",
		...A(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
	return new vr({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
	return /* @__PURE__ */ _o((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function yo() {
	return /* @__PURE__ */ _o((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function bo() {
	return /* @__PURE__ */ _o((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function xo() {
	return /* @__PURE__ */ _o((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function So() {
	return /* @__PURE__ */ _o((e) => Xe(e));
}
// @__NO_SIDE_EFFECTS__
function Co(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...A(n)
	});
}
// @__NO_SIDE_EFFECTS__
function wo(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...A(n)
	});
}
// @__NO_SIDE_EFFECTS__
function To(e, t) {
	let n = /* @__PURE__ */ Eo((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(xt(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(xt(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t) {
	let n = new z({
		check: "custom",
		...A(t)
	});
	return n._zod.check = e, n;
}
var Do = E((() => {
	yr(), P();
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/to-json-schema.js
function Oo(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && Ue(e, t, n[t]);
	return e;
}
function ko(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? ba,
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
function H(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function U(e, t, n = {
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
		a && (o.ref ||= a, U(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Oo(o.schema, c), t.io === "input" && W(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Ao(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function jo(e, t) {
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
				ref: `${i("__shared")}#/${r}/${Ao(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Ao(a)
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
function Mo(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Mo(e);
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
function No(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Po(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Lo.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? No(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			Ue(n, r, e.length === 1 ? e[0] : Po(e) ?? { allOf: e });
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
			let t = No(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Fo(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Lo) if (t in e) return;
	let n = t.filter((e) => Ro.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Po(t);
	else {
		let e = n[0], i = Ro.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Po([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Oo(e, r));
}
function Io(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Oo(i, s), Oo(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
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
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Mo(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) Fo(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Oo(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, Ue(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Bo(t, "input", e.processors),
					output: Bo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function W(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return W(r.element, n);
	if (r.type === "set") return W(r.valueType, n);
	if (r.type === "lazy") return W(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return W(r.innerType, n);
	if (r.type === "intersection") return W(r.left, n) || W(r.right, n);
	if (r.type === "record" || r.type === "map") return W(r.keyType, n) || W(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : W(r.in, n) || W(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (W(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (W(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (W(e, n)) return !0;
		return !!(r.rest && W(r.rest, n));
	}
	return !1;
}
var Lo, Ro, zo, Bo, Vo = E((() => {
	xa(), P(), Lo = /* @__PURE__ */ new Set([
		"type",
		"properties",
		"required",
		"additionalProperties"
	]), Ro = ["oneOf", "anyOf"], zo = (e, t = {}) => (n) => {
		let r = ko({
			...n,
			processors: t
		});
		return U(e, r), jo(r, e), Io(r, e);
	}, Bo = (e, t, n = {}) => (r) => {
		let { libraryOptions: i, target: a } = r ?? {}, o = ko({
			...i ?? {},
			target: a,
			io: t,
			processors: n
		});
		return U(e, o), jo(o, e), Io(o, e);
	};
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/json-schema-processors.js
function G(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) es[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && Wo(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && Wo(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && Go(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && Go(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && qo(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && Yo(t, i.mime);
	for (let e of i.patterns ?? []) Jo(t, e);
	return t;
}
function Ho(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Ho(t.out) : t.type === "catch" ? Ho(t.innerType) : e._zod.optin;
}
function Uo(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (H(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), vs) : JSON.parse(o);
}
var Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts = E((() => {
	tr(), Yi(), Vo(), P(), Wo = (e, t, n) => {
		(e[t] === void 0 || n > e[t]) && (e[t] = n);
	}, Go = (e, t, n) => {
		(e[t] === void 0 || n < e[t]) && (e[t] = n);
	}, Ko = (e, t) => {
		Wo(e, "minimum", t), Go(e, "maximum", t);
	}, qo = (e, t) => {
		e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
	}, Jo = (e, t) => {
		e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
	}, Yo = (e, t) => {
		e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
	}, Xo = (e, t) => {
		e.format = t, t.includes("int") && (e.isInt = !0);
	}, Zo = (e, t) => Wo(e, "minimum", t.minimum), Qo = (e, t) => Go(e, "maximum", t.maximum), $o = (e) => (t, n) => {
		Xo(t, n.format);
		let [r, i] = e[n.format];
		Wo(t, "minimum", r), Go(t, "maximum", i);
	}, es = {
		greater_than: (e, t) => Wo(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
		less_than: (e, t) => Go(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
		multiple_of: (e, t) => qo(e, t.value),
		number_format: $o(Nt),
		bigint_format: $o(Pt),
		min_length: Zo,
		max_length: Qo,
		length_equals: (e, t) => Ko(e, t.length),
		min_size: Zo,
		max_size: Qo,
		size_equals: (e, t) => Ko(e, t.size),
		string_format: (e, t) => {
			Xo(e, t.format), t.pattern && Jo(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
		},
		mime_type: (e, t) => Yo(e, t.mime)
	}, ts = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	}, ns = /* @__PURE__ */ new Map([[bi, Gn], [Si, Kn]]), rs = (e) => ns.get(e) ?? e, is = (e, t, n, r) => {
		let i = n;
		i.type = "string";
		let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = G(e);
		if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = ts[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
			let e = [...c].map(rs);
			e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	}, as = (e, t, n, r) => {
		let i = n, { minimum: a, maximum: o, multipleOf: s, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = G(e);
		i.type = u ? "integer" : "number";
		let d = typeof l == "number" && l >= (a ?? -Infinity), f = typeof c == "number" && c <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
		if (d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), s) {
			let n = /* @__PURE__ */ new Set();
			for (let a of s) Number.isFinite(a) && a !== 0 ? n.add(Math.abs(a)) : H(e, t, i, r, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
			let [a, ...o] = n;
			a !== void 0 && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ?? [], ...o.map((e) => ({ multipleOf: e }))]);
		}
	}, os = (e, t, n, r) => {
		n.not = {};
	}, ss = (e, t, n, r) => {}, cs = (e, t, n, r) => {
		let i = e._zod.def, a = Ie(i.entries);
		if (a.length === 0) {
			n.not = {};
			return;
		}
		a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
	}, ls = (e, t, n, r) => {
		let i = e._zod.def;
		if (i.values.length === 0) {
			n.not = {};
			return;
		}
		let a = [];
		for (let o of i.values) if (o === void 0) {
			if (H(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
		} else if (typeof o == "bigint") {
			if (H(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
			a.push(Number(o));
		} else a.push(o);
		if (a.length !== 0) {
			if (a.length === 1) {
				let e = a[0];
				n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
			} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
		}
	}, us = (e, t, n, r) => {
		H(e, t, n, r, "Custom types cannot be represented in JSON Schema");
	}, ds = (e, t, n, r) => {
		H(e, t, n, r, "Transforms cannot be represented in JSON Schema");
	}, fs = (e, t, n, r) => {
		let i = n, a = e._zod.def, { minimum: o, maximum: s } = G(e);
		typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = U(a.element, t, {
			...r,
			path: [...r.path, "items"]
		});
	}, ps = (e, t, n, r) => {
		let i = n, a = e._zod.def, o = a.shape;
		if (Object.getOwnPropertySymbols(o).length && H(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (let e in o) Ue(i.properties, e, U(o[e], t, {
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
			(t.io === "input" ? Ho(n) === void 0 : n._zod.optout === void 0) && s.push(e);
		}
		s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = U(a.catchall, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		})) : t.io === "output" && (i.additionalProperties = !1);
	}, ms = (e, t, n, r) => {
		let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => U(e, t, {
			...r,
			path: [
				...r.path,
				a ? "oneOf" : "anyOf",
				n
			]
		}));
		a ? n.oneOf = o : n.anyOf = o;
	}, hs = (e, t, n, r) => {
		let i = e._zod.def, a = U(i.left, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				0
			]
		}), o = U(i.right, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				1
			]
		}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
		n.allOf = c, t.intersections.push(c);
	}, gs = (e, t, n, r) => {
		let i = e._zod.def, a = U(i.innerType, t, r), o = t.seen.get(e);
		t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
	}, _s = (e, t, n, r) => {
		let i = e._zod.def;
		U(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, vs = Symbol(), ys = (e, t, n, r) => {
		let i = e._zod.def;
		U(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o = Uo(i.defaultValue, e, t, n, r);
		o !== vs && (n.default = o);
	}, bs = (e, t, n, r) => {
		let i = e._zod.def;
		U(i.innerType, t, r);
		let a = t.seen.get(e);
		if (a.ref = i.innerType, t.io !== "input") return;
		let o = Uo(i.defaultValue, e, t, n, r);
		o !== vs && (n._prefault = o);
	}, xs = (e, t, n, r) => {
		let i = e._zod.def;
		U(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o;
		try {
			o = i.catchValue(void 0);
		} catch {
			H(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = o;
	}, Ss = (e, t, n, r) => {
		let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
		U(o, t, r);
		let s = t.seen.get(e);
		s.ref = o;
	}, Cs = (e, t, n, r) => {
		let i = e._zod.def;
		U(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType, n.readOnly = !0;
	}, ws = (e, t, n, r) => {
		let i = e._zod.def;
		U(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	};
})), Es = E((() => {
	Gt(), Cn(), nn(), Yi(), pa(), yr(), Cr(), P(), tr(), ga(), xa(), xr(), Sa(), Do(), Vo(), Ts(), Vo();
})), Ds = E((() => {
	Es();
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/errors.js
function Os(e, t, n) {
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
var ks, As, K, js = E((() => {
	Es(), P(), ks = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), As = (e, t) => {
		tn.init(e, t), e.name = "ZodError";
		let n = Object.getPrototypeOf(e);
		ks.has(n) || (ks.add(n), Os(n, "format", (e) => (t) => Xt(e, t)), Os(n, "flatten", (e) => (t) => Yt(e, t)), Os(n, "addIssue", (e) => (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Re, 2);
		}), Os(n, "addIssues", (e) => (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Re, 2);
		}), Object.defineProperty(n, "isEmpty", {
			configurable: !0,
			enumerable: !1,
			get() {
				return this.issues.length === 0;
			}
		}));
	}, K = /*@__PURE__*/ F("ZodError", As, void 0, { Parent: Error });
})), Ms, Ns, Ps, Fs, Is, Ls, Rs, zs, Bs, Vs, Hs, Us, Ws = E((() => {
	Es(), js(), Ms = /* @__PURE__ */ sn(K), Ns = /* @__PURE__ */ cn(K), Ps = /* @__PURE__ */ ln(K), Fs = /* @__PURE__ */ un(K), Is = /* @__PURE__ */ hn(K), Ls = /* @__PURE__ */ gn(K), Rs = /* @__PURE__ */ _n(K), zs = /* @__PURE__ */ vn(K), Bs = /* @__PURE__ */ yn(K), Vs = /* @__PURE__ */ bn(K), Hs = /* @__PURE__ */ xn(K), Us = /* @__PURE__ */ Sn(K);
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/schemas.js
function Gs() {
	R.localeError || I(ma());
}
function Ks() {
	R.memoizer || I({ memoizer: ta() });
}
function q(e) {
	return /* @__PURE__ */ wa(pc, e);
}
function J(e) {
	return /* @__PURE__ */ Za(Lc, e);
}
function qs(e) {
	return /* @__PURE__ */ $a(Rc, e);
}
function Js() {
	return /* @__PURE__ */ eo(zc);
}
function Ys(e) {
	return /* @__PURE__ */ to(Bc, e);
}
function Y(e, t) {
	return /* @__PURE__ */ Co(Vc, e, t);
}
function X(e, t) {
	let n = {
		type: "object",
		shape: e ?? {},
		...A(t)
	};
	return new Hc(n);
}
function Xs(e, t) {
	return new Uc({
		type: "union",
		options: e,
		...A(t)
	});
}
function Zs(e, t) {
	return new Wc({
		type: "intersection",
		left: e,
		right: t
	});
}
function Qs(e, t) {
	let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Gc({
		type: "enum",
		entries: n,
		...A(t)
	});
}
function $s(e, t) {
	return new Kc({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...A(t)
	});
}
function ec(e) {
	return new qc({
		type: "transform",
		transform: e
	});
}
function tc(e) {
	return new Jc({
		type: "optional",
		innerType: e
	});
}
function nc(e) {
	return new Yc({
		type: "optional",
		innerType: e
	});
}
function rc(e) {
	return new Xc({
		type: "nullable",
		innerType: e
	});
}
function ic(e, t) {
	return new Zc({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : $e(t);
		}
	});
}
function ac(e, t) {
	return new Qc({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : $e(t);
		}
	});
}
function oc(e, t) {
	return new $c({
		type: "nonoptional",
		innerType: e,
		...A(t)
	});
}
function sc(e, t) {
	return new el({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Ot(t)
	});
}
function cc(e, t) {
	return new tl({
		type: "pipe",
		in: e,
		out: t
	});
}
function lc(e) {
	return new nl({
		type: "readonly",
		innerType: e
	});
}
function uc(e, t = {}) {
	return /* @__PURE__ */ wo(rl, e, t);
}
function dc(e, t) {
	return /* @__PURE__ */ To(e, t);
}
var Z, fc, pc, Q, mc, hc, gc, _c, vc, yc, bc, xc, Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il = E((() => {
	Es(), Ts(), Vo(), ga(), Ds(), Ws(), Z = /*@__PURE__*/ F("ZodType", (e, t) => (Gs(), B.init(e, t), e.def = t, e.type = t.type, e), {
		check(...e) {
			let t = this.def;
			return this.clone(k(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
				check: e,
				def: { check: "custom" },
				onattach: []
			} } : e)] }), { parent: !0 });
		},
		with(...e) {
			return this.check(...e);
		},
		clone(e, t) {
			return tt(this, e, t);
		},
		brand() {
			return this;
		},
		register(e, t) {
			return e.add(this, t), this;
		},
		refine(e, t) {
			return this.check(uc(e, t));
		},
		superRefine(e, t) {
			return this.check(dc(e, t));
		},
		overwrite(e) {
			return this.check(/* @__PURE__ */ _o(e));
		},
		optional() {
			return tc(this);
		},
		exactOptional() {
			return nc(this);
		},
		nullable() {
			return rc(this);
		},
		nullish() {
			return tc(rc(this));
		},
		nonoptional(e) {
			return oc(this, e);
		},
		array() {
			return Y(this);
		},
		or(e) {
			return Xs([this, e]);
		},
		and(e) {
			return Zs(this, e);
		},
		transform(e) {
			return cc(this, ec(e));
		},
		default(e) {
			return ic(this, e);
		},
		prefault(e) {
			return ac(this, e);
		},
		catch(e) {
			return sc(this, e);
		},
		pipe(e) {
			return cc(this, e);
		},
		readonly() {
			return lc(this);
		},
		describe(e) {
			let t = this.clone();
			return ba.add(t, { description: e }), t;
		},
		meta(...e) {
			if (e.length === 0) return ba.get(this);
			let t = this.clone();
			return ba.add(t, e[0]), t;
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
				...Tr(this),
				jsonSchema: {
					input: Bo(this, "input"),
					output: Bo(this, "output")
				}
			});
		},
		set "~standard"(e) {
			M(this, "~standard", e);
		},
		parse: function e(t, n) {
			return Ms(this, t, n, { callee: e });
		},
		parseAsync: async function e(t, n) {
			return await Ns(this, t, n, { callee: e });
		},
		safeParse(e, t) {
			return Ps(this, e, t);
		},
		async safeParseAsync(e, t) {
			return Fs(this, e, t);
		},
		get spa() {
			return this?.safeParseAsync;
		},
		set spa(e) {
			M(this, "spa", e);
		},
		validate(e, t) {
			return pn(this, e, t);
		},
		validateAsync(e, t) {
			return mn(this, e, t);
		},
		encode: function e(t, n) {
			return Is(this, t, n, { callee: e });
		},
		decode: function e(t, n) {
			return Ls(this, t, n, { callee: e });
		},
		encodeAsync: async function e(t, n) {
			return await Rs(this, t, n, { callee: e });
		},
		decodeAsync: async function e(t, n) {
			return await zs(this, t, n, { callee: e });
		},
		safeEncode(e, t) {
			return Bs(this, e, t);
		},
		safeDecode(e, t) {
			return Vs(this, e, t);
		},
		async safeEncodeAsync(e, t) {
			return Hs(this, e, t);
		},
		async safeDecodeAsync(e, t) {
			return Us(this, e, t);
		},
		toJSONSchema(e) {
			return zo(this, {})(e);
		},
		get description() {
			return ba.get(this)?.description;
		},
		get _def() {
			return this._zod.def;
		}
	}), fc = /*@__PURE__*/ F("_ZodString", (e, t) => {
		Qr.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => is(e, t, n, r);
	}, /*@__PURE__*/ wt({
		format: (e) => G(e).format ?? null,
		minLength: (e) => G(e).minimum ?? null,
		maxLength: (e) => G(e).maximum ?? null
	}, {
		regex(...e) {
			return this.check(/* @__PURE__ */ uo(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ mo(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ ho(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ go(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ co(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ so(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ lo(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ co(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ fo(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ po(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ yo());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ vo(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ bo());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ xo());
		},
		slugify() {
			return this.check(/* @__PURE__ */ So());
		}
	})), pc = /*@__PURE__*/ F("ZodString", (e, t) => {
		Qr.init(e, t), fc.init(e, t);
	}, {
		email(e) {
			return this.check(/* @__PURE__ */ Ta(vc, e));
		},
		url(e) {
			return this.check(/* @__PURE__ */ ja(xc, e));
		},
		jwt(e) {
			return this.check(/* @__PURE__ */ Ka(Ic, e));
		},
		emoji(e) {
			return this.check(/* @__PURE__ */ Ma(Sc, e));
		},
		guid(e) {
			return this.check(/* @__PURE__ */ Ea(yc, e));
		},
		uuid(e) {
			return this.check(/* @__PURE__ */ Da(bc, e));
		},
		uuidv4(e) {
			return this.check(/* @__PURE__ */ Oa(bc, e));
		},
		uuidv6(e) {
			return this.check(/* @__PURE__ */ ka(bc, e));
		},
		uuidv7(e) {
			return this.check(/* @__PURE__ */ Aa(bc, e));
		},
		nanoid(e) {
			return this.check(/* @__PURE__ */ Na(Cc, e));
		},
		cuid(e) {
			return this.check(/* @__PURE__ */ Pa(wc, e));
		},
		cuid2(e) {
			return this.check(/* @__PURE__ */ Fa(Tc, e));
		},
		ulid(e) {
			return this.check(/* @__PURE__ */ Ia(Ec, e));
		},
		base64(e) {
			return this.check(/* @__PURE__ */ Ua(Nc, e));
		},
		base64url(e) {
			return this.check(/* @__PURE__ */ Wa(Pc, e));
		},
		xid(e) {
			return this.check(/* @__PURE__ */ La(Dc, e));
		},
		ksuid(e) {
			return this.check(/* @__PURE__ */ Ra(Oc, e));
		},
		ipv4(e) {
			return this.check(/* @__PURE__ */ za(kc, e));
		},
		ipv6(e) {
			return this.check(/* @__PURE__ */ Ba(Ac, e));
		},
		cidrv4(e) {
			return this.check(/* @__PURE__ */ Va(jc, e));
		},
		cidrv6(e) {
			return this.check(/* @__PURE__ */ Ha(Mc, e));
		},
		e164(e) {
			return this.check(/* @__PURE__ */ Ga(Fc, e));
		},
		datetime(e) {
			return this.check(/* @__PURE__ */ qa(mc, e));
		},
		date(e) {
			return this.check(/* @__PURE__ */ Ja(hc, e));
		},
		time(e) {
			return this.check(/* @__PURE__ */ Ya(gc, e));
		},
		duration(e) {
			return this.check(/* @__PURE__ */ Xa(_c, e));
		}
	}), Q = /*@__PURE__*/ F("ZodStringFormat", (e, t) => {
		V.init(e, t), fc.init(e, t);
	}), mc = /*@__PURE__*/ F("ZodISODateTime", (e, t) => {
		di.init(e, t), Q.init(e, t);
	}), hc = /*@__PURE__*/ F("ZodISODate", (e, t) => {
		fi.init(e, t), Q.init(e, t);
	}), gc = /*@__PURE__*/ F("ZodISOTime", (e, t) => {
		pi.init(e, t), Q.init(e, t);
	}), _c = /*@__PURE__*/ F("ZodISODuration", (e, t) => {
		mi.init(e, t), Q.init(e, t);
	}), vc = /*@__PURE__*/ F("ZodEmail", (e, t) => {
		ti.init(e, t), Q.init(e, t);
	}), yc = /*@__PURE__*/ F("ZodGUID", (e, t) => {
		$r.init(e, t), Q.init(e, t);
	}), bc = /*@__PURE__*/ F("ZodUUID", (e, t) => {
		ei.init(e, t), Q.init(e, t);
	}), xc = /*@__PURE__*/ F("ZodURL", (e, t) => {
		ri.init(e, t), Q.init(e, t);
	}), Sc = /*@__PURE__*/ F("ZodEmoji", (e, t) => {
		ii.init(e, t), Q.init(e, t);
	}), Cc = /*@__PURE__*/ F("ZodNanoID", (e, t) => {
		ai.init(e, t), Q.init(e, t);
	}), wc = /*@__PURE__*/ F("ZodCUID", (e, t) => {
		oi.init(e, t), Q.init(e, t);
	}), Tc = /*@__PURE__*/ F("ZodCUID2", (e, t) => {
		si.init(e, t), Q.init(e, t);
	}), Ec = /*@__PURE__*/ F("ZodULID", (e, t) => {
		ci.init(e, t), Q.init(e, t);
	}), Dc = /*@__PURE__*/ F("ZodXID", (e, t) => {
		li.init(e, t), Q.init(e, t);
	}), Oc = /*@__PURE__*/ F("ZodKSUID", (e, t) => {
		ui.init(e, t), Q.init(e, t);
	}), kc = /*@__PURE__*/ F("ZodIPv4", (e, t) => {
		hi.init(e, t), Q.init(e, t);
	}), Ac = /*@__PURE__*/ F("ZodIPv6", (e, t) => {
		_i.init(e, t), Q.init(e, t);
	}), jc = /*@__PURE__*/ F("ZodCIDRv4", (e, t) => {
		vi.init(e, t), Q.init(e, t);
	}), Mc = /*@__PURE__*/ F("ZodCIDRv6", (e, t) => {
		yi.init(e, t), Q.init(e, t);
	}), Nc = /*@__PURE__*/ F("ZodBase64", (e, t) => {
		xi.init(e, t), Q.init(e, t);
	}), Pc = /*@__PURE__*/ F("ZodBase64URL", (e, t) => {
		Ci.init(e, t), Q.init(e, t);
	}), Fc = /*@__PURE__*/ F("ZodE164", (e, t) => {
		wi.init(e, t), Q.init(e, t);
	}), Ic = /*@__PURE__*/ F("ZodJWT", (e, t) => {
		Ti.init(e, t), Q.init(e, t);
	}), Lc = /*@__PURE__*/ F("ZodNumber", (e, t) => {
		Ei.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => as(e, t, n, r), e.isFinite = !0;
	}, /*@__PURE__*/ wt({
		minValue: (e) => {
			let { minimum: t, exclusiveMinimum: n } = G(e);
			return Math.max(t ?? -Infinity, n ?? -Infinity);
		},
		maxValue: (e) => {
			let { maximum: t, exclusiveMaximum: n } = G(e);
			return Math.min(t ?? Infinity, n ?? Infinity);
		},
		isInt: (e) => {
			let { isInt: t, multipleOf: n } = G(e);
			return !!t || !!n?.some(Number.isSafeInteger);
		},
		format: (e) => G(e).format ?? null
	}, {
		gt(e, t) {
			return this.check(/* @__PURE__ */ io(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ ao(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ ao(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ no(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		int(e) {
			return this.check(qs(e));
		},
		safe(e) {
			return this.check(qs(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ io(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ ao(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ no(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ ro(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ oo(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ oo(e, t));
		},
		finite() {
			return this;
		}
	})), Rc = /*@__PURE__*/ F("ZodNumberFormat", (e, t) => {
		Di.init(e, t), Lc.init(e, t);
	}), zc = /*@__PURE__*/ F("ZodUnknown", (e, t) => {
		Oi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ss(e, t, n, r);
	}), Bc = /*@__PURE__*/ F("ZodNever", (e, t) => {
		ki.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => os(e, t, n, r);
	}), Vc = /*@__PURE__*/ F("ZodArray", (e, t) => {
		Ks(), Ai.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => fs(e, t, n, r), e.element = t.element;
	}, {
		min(e, t) {
			return this.check(/* @__PURE__ */ co(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ co(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ so(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ lo(e, t));
		},
		unwrap() {
			return this.element;
		}
	}), Hc = /*@__PURE__*/ F("ZodObject", (e, t) => {
		Ks(), Ni.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ps(e, t, n, r), Dt(e, "shape", (e) => e._zod.def.shape, !1);
	}, {
		keyof() {
			return Qs(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone(k(this._zod.def, { catchall: e }));
		},
		passthrough() {
			return this.clone(k(this._zod.def, { catchall: Js() }));
		},
		loose() {
			return this.clone(k(this._zod.def, { catchall: Js() }));
		},
		strict() {
			return this.clone(k(this._zod.def, { catchall: Ys() }));
		},
		strip() {
			return this.clone(k(this._zod.def, { catchall: void 0 }));
		},
		extend(e) {
			return st(this, e);
		},
		safeExtend(e) {
			return lt(this, e);
		},
		merge(e) {
			return ut(this, e);
		},
		pick(e) {
			return it(this, e);
		},
		omit(e) {
			return ot(this, e);
		},
		partial(...e) {
			return dt(Jc, this, e[0]);
		},
		exactPartial(...e) {
			return dt(Yc, this, e[0], "exactPartial");
		},
		required(...e) {
			return ft($c, this, e[0]);
		}
	}), Uc = /*@__PURE__*/ F("ZodUnion", (e, t) => {
		Pi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ms(e, t, n, r), e.options = t.options;
	}), Wc = /*@__PURE__*/ F("ZodIntersection", (e, t) => {
		Fi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => hs(e, t, n, r);
	}), Gc = /*@__PURE__*/ F("ZodEnum", (e, t) => {
		Ii.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => cs(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
		let n = new Set(Object.keys(t.entries));
		e.extract = (e, r) => {
			let i = {};
			for (let r of e) if (n.has(r)) i[r] = t.entries[r];
			else throw Error(`Key ${r} not found in enum`);
			return new Gc({
				...t,
				checks: [],
				...A(r),
				entries: i
			});
		}, e.exclude = (e, r) => {
			let i = { ...t.entries };
			for (let t of e) if (n.has(t)) delete i[t];
			else throw Error(`Key ${t} not found in enum`);
			return new Gc({
				...t,
				checks: [],
				...A(r),
				entries: i
			});
		};
	}), Kc = /*@__PURE__*/ F("ZodLiteral", (e, t) => {
		Li.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ls(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
			if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0];
		} });
	}), qc = /*@__PURE__*/ F("ZodTransform", (e, t) => {
		Ks(), Ri.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ds(e, t, n, r), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Wt(e.constructor.name);
			n.addIssue = (r) => {
				if (typeof r == "string") n.issues.push(xt(r, n.value, t));
				else {
					let t = r;
					t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(xt(t));
				}
			};
			let i = t.transform(n.value, n);
			return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
		};
	}), Jc = /*@__PURE__*/ F("ZodOptional", (e, t) => {
		zi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ws(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), Yc = /*@__PURE__*/ F("ZodExactOptional", (e, t) => {
		Bi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ws(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), Xc = /*@__PURE__*/ F("ZodNullable", (e, t) => {
		Vi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => gs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), Zc = /*@__PURE__*/ F("ZodDefault", (e, t) => {
		Hi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => ys(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
	}), Qc = /*@__PURE__*/ F("ZodPrefault", (e, t) => {
		Ui.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => bs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), $c = /*@__PURE__*/ F("ZodNonOptional", (e, t) => {
		Wi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => _s(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), el = /*@__PURE__*/ F("ZodCatch", (e, t) => {
		Gi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => xs(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
	}), tl = /*@__PURE__*/ F("ZodPipe", (e, t) => {
		Ki.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ss(e, t, n, r), e.in = t.in, e.out = t.out;
	}), nl = /*@__PURE__*/ F("ZodReadonly", (e, t) => {
		qi.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), rl = /*@__PURE__*/ F("ZodCustom", (e, t) => {
		Ji.init(e, t), Z.init(e, t), e._zod.processJSONSchema = (t, n, r) => us(e, t, n, r);
	});
})), al = E((() => {
	Es();
}));
//#endregion
//#region ../../../tmp/extbuild/knowledge/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/coerce.js
function ol(e) {
	return /* @__PURE__ */ Qa(Lc, e);
}
var sl = E((() => {
	Es(), il();
})), cl = E((() => {
	Es(), il(), Ds(), js(), Ws(), al(), Ts(), xa(), P(), Ds(), il(), Yi(), ga(), sl();
})), ll = E((() => {
	cl(), cl();
})), $, ul = E((() => {
	$ = "/x/intentic.knowledge";
})), dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl = E((() => {
	ll(), ul(), dl = X({
		path: q(),
		title: q(),
		type: q().optional(),
		tags: Y(q()),
		aliases: Y(q()),
		linkCount: J(),
		backlinkCount: J(),
		sizeBytes: J(),
		modifiedAt: J()
	}), fl = X({
		relation: q().optional(),
		path: q().optional(),
		title: q()
	}), pl = X({
		summary: dl,
		content: q(),
		body: q(),
		facts: Y(X({
			key: q(),
			values: Y(q())
		})),
		linksTo: Y(fl),
		linkedFrom: Y(fl)
	}), X({ path: q().min(1) }), X({
		q: q().optional(),
		type: q().optional(),
		tag: q().optional(),
		linkedTo: q().optional(),
		limit: ol().int().positive().max(500).optional()
	}), ml = X({
		path: q(),
		title: q(),
		type: q().optional(),
		tags: Y(q()),
		modifiedAt: J(),
		matched: q(),
		snippet: q().optional()
	}), hl = X({ hits: Y(ml) }), gl = X({
		name: q(),
		count: J()
	}), _l = X({
		word: q(),
		uses: J(),
		notes: Y(q())
	}), vl = X({
		folder: q(),
		noteCount: J(),
		linkCount: J(),
		types: Y(gl),
		tags: Y(gl),
		vocabulary: X({
			types: Y(q()),
			relations: Y(q()),
			path: q().optional()
		}),
		broken: Y(X({
			from: q(),
			target: q(),
			relation: q().optional()
		})),
		orphans: Y(q()),
		untyped: Y(q()),
		typeDrift: Y(_l),
		relationDrift: Y(_l),
		unreadable: Y(X({
			path: q(),
			keys: Y(q())
		})),
		ambiguous: Y(X({
			name: q(),
			notes: Y(q())
		}))
	}), X({
		focus: q().min(1),
		depth: ol().int().min(1).max(4).optional()
	}), yl = X({
		focus: q().optional(),
		nodes: Y(X({
			path: q(),
			title: q(),
			type: q().optional(),
			depth: J()
		})),
		edges: Y(X({
			from: q(),
			to: q(),
			relation: q().optional()
		})),
		omitted: J()
	}), X({
		path: q().min(1),
		content: q().max(1048576)
	}), X({ ok: $s(!0) }), bl = X({ written: Y(q()) });
}));
//#endregion
//#region src/useKnowledge.ts
function Sl() {
	let e = D(), t = ke({
		queryKey: e.sandbox.key("knowledge", "overview"),
		queryFn: async () => vl.parse(await e.sandbox.json(`${$}/overview`)),
		enabled: n(() => e.sandbox.reachable()),
		refetchInterval: Dl
	});
	return {
		overview: n(() => t.data.value),
		error: n(() => t.error.value?.message),
		isLoading: n(() => t.isLoading.value)
	};
}
function Cl(e) {
	let t = D(), r = ke({
		queryKey: n(() => t.sandbox.key("knowledge", "search", e.value.q, e.value.type ?? "", e.value.tag ?? "", e.value.linkedTo ?? "")),
		queryFn: async () => hl.parse(await t.sandbox.json(`${$}/search?${Ol({
			q: e.value.q,
			type: e.value.type,
			tag: e.value.tag,
			linkedTo: e.value.linkedTo,
			limit: 200
		})}`)).hits,
		enabled: n(() => t.sandbox.reachable()),
		refetchInterval: Dl,
		placeholderData: (e) => e
	});
	return {
		hits: n(() => r.data.value ?? []),
		error: n(() => r.error.value?.message),
		isLoading: n(() => r.isLoading.value),
		isFetching: n(() => r.isFetching.value)
	};
}
function wl(e) {
	let t = D(), r = ke({
		queryKey: n(() => t.sandbox.key("knowledge", "note", e.value ?? "")),
		queryFn: async () => pl.parse(await t.sandbox.json(`${$}/note?${Ol({ path: e.value })}`)),
		enabled: n(() => t.sandbox.reachable() && e.value !== void 0)
	});
	return {
		note: n(() => r.data.value),
		error: n(() => r.error.value?.message),
		isLoading: n(() => r.isLoading.value)
	};
}
function Tl(e, t, r) {
	let i = D(), a = ke({
		queryKey: n(() => i.sandbox.key("knowledge", "graph", e.value ?? "", String(t.value))),
		queryFn: async () => yl.parse(await i.sandbox.json(`${$}/graph?${Ol({
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
function El() {
	let e = D(), t = Ae(), n = () => t.invalidateQueries({ queryKey: e.sandbox.key("knowledge") });
	return {
		save: Oe({
			mutationFn: ({ path: t, content: n }) => e.sandbox.json(`${$}/note`, {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					path: t,
					content: n
				})
			}),
			onSuccess: () => void n()
		}),
		remove: Oe({
			mutationFn: ({ path: t }) => e.sandbox.json(`${$}/note`, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: t })
			}),
			onSuccess: () => void n()
		}),
		seed: Oe({
			mutationFn: async () => bl.parse(await e.sandbox.json(`${$}/seed`, { method: "POST" })),
			onSuccess: () => void n()
		})
	};
}
var Dl, Ol, kl, Al = E((() => {
	xl(), Fe(), Dl = 3e4, Ol = (e) => Object.entries(e).flatMap(([e, t]) => t === void 0 || t === "" ? [] : [`${e}=${encodeURIComponent(String(t))}`]).join("&"), kl = (e) => ({
		types: (e?.types ?? []).map((e) => e.name),
		tags: (e?.tags ?? []).map((e) => e.name)
	});
})), jl, Ml, Nl, Pl, Fl, Il, Ll = E((() => {
	jl = /\[\[([^\][|]+)(?:\|([^\]]+))?\]\]/g, Ml = (e, t) => {
		let n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT), r = [];
		for (let e = n.nextNode(); e !== null; e = n.nextNode()) {
			let t = e;
			t.parentElement?.closest("a, code, pre") ?? (jl.lastIndex = 0, jl.test(t.data) && r.push(t));
		}
		for (let e of r) {
			let n = document.createDocumentFragment(), r = 0;
			jl.lastIndex = 0;
			for (let i = jl.exec(e.data); i !== null; i = jl.exec(e.data)) {
				n.append(e.data.slice(r, i.index));
				let a = (i[1] ?? "").trim(), o = t(a), s = document.createElement("a");
				s.append(i[2]?.trim() ?? a), o === void 0 ? (s.className = "text-subtle underline decoration-dotted underline-offset-2", s.title = `No note for "${a}" yet`) : (s.dataset.kb = o, s.className = "md-file-link"), n.append(s), r = i.index + i[0].length;
			}
			n.append(e.data.slice(r)), e.replaceWith(n);
		}
	}, Nl = [
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"neutral"
	], Pl = (e) => {
		if (e === void 0 || e === "") return "neutral";
		let t = 0;
		for (let n of e) t = (t * 31 + n.codePointAt(0)) % 100003;
		return Nl[t % Nl.length];
	}, Fl = {
		person: "user",
		project: "folder",
		company: "globe",
		decision: "check-square",
		meeting: "users",
		term: "book",
		source: "link",
		vocabulary: "sitemap"
	}, Il = (e) => e === void 0 || e === "" ? "file" : Fl[e.toLowerCase()] ?? "file";
})), Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl = E((() => {
	Ll(), Rl = { class: "block truncate" }, zl = { class: "block truncate leading-tight" }, Bl = {
		key: 0,
		role: "status",
		"aria-busy": "true"
	}, Vl = {
		key: 1,
		class: "px-2 py-4 text-xs text-muted"
	}, Hl = {
		key: 2,
		class: "px-2 py-4 text-xs text-muted"
	}, Ul = { class: "flex items-center gap-1.5 text-2xs text-subtle" }, Wl = /*@__PURE__*/ u({
		__name: "NoteIndex",
		props: {
			hits: {},
			selected: {},
			filtered: { type: Boolean },
			isLoading: { type: Boolean }
		},
		emits: ["pick"],
		setup(e, { emit: t }) {
			let u = t, d = T(n(() => e.isLoading), n(() => "note-search")), f = {
				alias: "matched an alias",
				tag: "matched a tag"
			}, m = n(() => e.hits.map((e) => ({
				path: e.path,
				title: e.title,
				icon: Il(e.type),
				detail: e.snippet ?? f[e.matched]
			}))), ee = n(() => m.value.length === 0 ? [] : [{
				key: "hits",
				items: m.value
			}]), g = /* @__PURE__ */ new Map(), _ = (e, t) => {
				let n = t?.$el;
				n instanceof HTMLElement ? g.set(e, n) : g.delete(e);
			};
			return re(() => e.selected, async (e) => {
				e !== void 0 && (await p(), g.get(e)?.scrollIntoView({ block: "nearest" }));
			}), (t, n) => (h(), r(b(C), {
				groups: ee.value,
				"aria-label": "Notes"
			}, s({
				row: x(({ item: t }) => [(h(), r(b(ge), {
					key: t.path,
					ref: (e) => _(t.path, e),
					as: "button",
					density: "dense",
					class: "rounded-lg",
					icon: t.icon,
					selected: t.path === e.selected,
					onClick: (e) => u("pick", t.path)
				}, s({
					title: x(() => [o("span", Rl, v(t.title), 1)]),
					_: 2
				}, [t.detail === void 0 ? void 0 : {
					name: "description",
					fn: x(() => [o("span", zl, v(t.detail), 1)]),
					key: "0"
				}]), 1032, [
					"icon",
					"selected",
					"onClick"
				]))]),
				empty: x(() => [e.isLoading ? (h(), a("div", Bl, [n[0] ||= o("span", { class: "sr-only" }, "Looking through your notes…", -1), b(d) ? (h(), r(b(_e), {
					key: 0,
					rows: 5,
					density: "dense"
				})) : i("", !0)])) : e.filtered ? (h(), a("p", Vl, [...n[1] ||= [
					c(" Nothing here matches. The agent's ", -1),
					o("b", null, "kb", -1),
					c(" command searches the same notes, and a link to a note nobody has written yet is a perfectly good way to leave a gap for later. ", -1)
				]])) : (h(), a("p", Hl, "No notes yet."))]),
				_: 2
			}, [m.value.length >= 200 ? {
				name: "footer",
				fn: x(() => [o("p", Ul, [l(b(le), {
					name: "info-circle",
					class: "shrink-0"
				}), n[2] ||= c(" Showing the first 200: narrow it with a word, a kind or a tag. ", -1)])]),
				key: "0"
			} : void 0]), 1032, ["groups"]));
		}
	});
})), Kl, ql = E((() => {
	Gl(), Gl(), Kl = Wl;
})), Jl, Yl, Xl, Zl, Ql, $l, eu, tu, nu, ru, iu = E((() => {
	Ll(), Al(), Jl = { class: "relative flex h-figure w-full flex-col" }, Yl = {
		key: 0,
		class: "px-4 py-3 text-xs text-danger"
	}, Xl = {
		key: 1,
		class: "px-4 py-6 text-xs text-subtle"
	}, Zl = {
		key: 2,
		class: "flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10 text-center"
	}, Ql = ["onDblclick"], $l = { class: "truncate text-xs text-content" }, eu = { class: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-2 text-2xs text-subtle" }, tu = {
		key: 0,
		class: "rounded bg-surface/80 px-1.5 py-0.5"
	}, nu = { key: 1 }, ru = /*@__PURE__*/ u({
		__name: "NoteGraph",
		props: {
			path: {},
			depth: { default: 2 }
		},
		emits: ["open"],
		setup(e, { emit: t }) {
			let s = t, { graph: u, error: d, isLoading: f } = Tl(y(() => e.path), y(() => e.depth), g(!0)), p = n(() => u.value?.nodes.map((e) => ({
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
			return (e, t) => (h(), a("div", Jl, [b(d) ? (h(), a("p", Yl, v(b(d)), 1)) : b(f) ? (h(), a("p", Xl, "Drawing the map…")) : p.value.length <= 1 ? (h(), a("div", Zl, [
				l(b(le), {
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
			])) : (h(), r(b(S), {
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
				node: x(({ node: e }) => [o("button", {
					type: "button",
					class: m(["flex h-full w-full flex-col justify-center gap-0.5 px-2.5 text-left", e.data.focus ? "font-medium" : void 0]),
					onDblclick: (t) => s("open", e.data.path)
				}, [o("span", $l, v(e.data.title), 1), e.data.type ? (h(), r(b(w), {
					key: 0,
					variant: b(Pl)(e.data.type),
					size: "xs",
					label: e.data.type
				}, null, 8, ["variant", "label"])) : i("", !0)], 42, Ql)]),
				overlay: x(() => [o("div", eu, [b(u)?.omitted ? (h(), a("span", tu, v(b(u).omitted) + " more not shown", 1)) : (h(), a("span", nu)), _.value && _.value !== b(u)?.focus ? (h(), r(b(se), {
					key: 2,
					size: "small",
					severity: "secondary",
					class: "pointer-events-auto",
					onClick: te
				}, {
					default: x(() => [...t[3] ||= [c(" Open this note ", -1)]]),
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
})), au, ou = E((() => {
	iu(), iu(), au = ru;
})), su, cu, lu, uu, du, fu, pu, mu, hu, gu, _u, vu, yu, bu, xu = E((() => {
	Ll(), ou(), Al(), su = { key: 0 }, cu = { class: "truncate font-mono" }, lu = ["title"], uu = ["aria-pressed", "aria-label"], du = {
		key: 0,
		class: "flex flex-col gap-2.5 px-5 pt-4"
	}, fu = {
		key: 1,
		class: "flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs"
	}, pu = {
		key: 0,
		class: "text-2xs text-subtle"
	}, mu = ["onClick"], hu = ["title"], gu = {
		key: 2,
		class: "px-5 py-4 text-xs text-subtle"
	}, _u = {
		key: 3,
		class: "flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line-subtle px-5 py-3 text-xs"
	}, vu = {
		key: 0,
		class: "text-2xs text-subtle"
	}, yu = ["onClick"], bu = /*@__PURE__*/ u({
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
			let u = s, f = ne(e, "draft"), { note: p, error: ee, isLoading: re } = wl(y(() => e.path)), { save: ae, remove: oe } = El(), se = n(() => p.value?.content ?? ""), S = g("read"), { source: ce, editing: ue, confirming: C, error: me, saving: he, removing: ge, startEdit: _e, cancelEdit: xe, saveDraft: Ce, forget: T } = Te({
				draft: f,
				raw: () => se.value,
				save: (t) => ae.mutateAsync({
					path: e.path,
					content: t
				}),
				remove: () => oe.mutateAsync({ path: e.path }),
				note: () => e.path,
				onLeave: () => S.value = "read",
				onRemoved: () => u("forgotten")
			}), we = () => {
				_e(), S.value = "read";
			}, Ee = n(() => (p.value?.facts ?? []).map((e) => [e.key, e.values.join(", ")])), De = n(() => new Map((p.value?.linksTo ?? []).map((e) => [e.title, e.path]))), Oe = (e) => Ml(e, (e) => De.value.get(e)), ke = (e) => {
				let t = e.target?.closest("[data-kb]")?.dataset.kb;
				t !== void 0 && (e.preventDefault(), u("open", t));
			};
			return (n, s) => {
				let f = te("tooltip");
				return h(), r(b(pe), {
					source: b(ce),
					"onUpdate:source": s[3] ||= (e) => d(ce) ? ce.value = e : null,
					confirming: b(C),
					"onUpdate:confirming": s[4] ||= (e) => d(C) ? C.value = e : null,
					paged: "",
					title: b(p)?.summary.title ?? "…",
					raw: se.value,
					editing: b(ue),
					loading: b(re),
					saving: b(he),
					removing: b(ge),
					error: b(ee) ?? b(me),
					onEdit: we,
					onCancel: b(xe),
					onSave: b(Ce),
					onRemove: b(T)
				}, {
					lead: x(() => [l(b(le), {
						name: "file",
						class: "shrink-0 text-base text-muted"
					})]),
					badges: x(() => [b(p)?.summary.type ? (h(), r(b(w), {
						key: 0,
						variant: b(Pl)(b(p).summary.type),
						size: "xs",
						label: b(p).summary.type
					}, null, 8, ["variant", "label"])) : i("", !0)]),
					description: x(() => [b(p)?.summary.aliases.length ? (h(), a("span", su, "Also called " + v(b(p).summary.aliases.join(", ")) + ".", 1)) : i("", !0)]),
					meta: x(() => [o("span", cu, v(e.path), 1), b(p) ? (h(), a(t, { key: 0 }, [
						s[6] ||= o("span", { "aria-hidden": "true" }, "·", -1),
						o("span", null, v(b(ve)(b(p).summary.sizeBytes)), 1),
						s[7] ||= o("span", { "aria-hidden": "true" }, "·", -1),
						o("span", { title: b(ye)(b(p).summary.modifiedAt) }, "edited " + v(b(be)(b(p).summary.modifiedAt)), 9, lu),
						b(p).summary.tags.length > 0 ? (h(), a(t, { key: 0 }, [s[5] ||= o("span", { "aria-hidden": "true" }, "·", -1), (h(!0), a(t, null, _(b(p).summary.tags, (e) => (h(), a("span", { key: e }, "#" + v(e), 1))), 128))], 64)) : i("", !0)
					], 64)) : i("", !0)]),
					actions: x(() => [ie((h(), a("button", {
						type: "button",
						class: m(b(Se).iconButton("h-7 w-7")),
						"aria-pressed": S.value === "map",
						"aria-label": S.value === "map" ? "Back to the note" : "Show what this note connects to",
						onClick: s[0] ||= (e) => S.value = S.value === "map" ? "read" : "map"
					}, [l(b(le), { name: S.value === "map" ? "eye" : "sitemap" }, null, 8, ["name"])], 10, uu)), [[
						f,
						S.value === "map" ? "Back to the note" : "Map: what this note connects to",
						void 0,
						{ top: !0 }
					]])]),
					confirm: x(() => [c(" Delete \"" + v(b(p)?.summary.title) + "\"? Anything that links to it becomes a link to a note nobody has written. ", 1)]),
					default: x(() => [S.value === "map" ? (h(), r(au, {
						key: 0,
						path: e.path,
						onOpen: s[1] ||= (e) => u("open", e)
					}, null, 8, ["path"])) : (h(), a(t, { key: 1 }, [
						Ee.value.length > 0 || (b(p)?.linksTo.length ?? 0) > 0 ? (h(), a("div", du, [Ee.value.length > 0 ? (h(), r(b(de), {
							key: 0,
							rows: Ee.value
						}, null, 8, ["rows"])) : i("", !0), b(p) && b(p).linksTo.length > 0 ? (h(), a("div", fu, [s[8] ||= o("span", { class: "text-2xs uppercase tracking-wide text-subtle" }, "Links to", -1), (h(!0), a(t, null, _(b(p).linksTo, (e, t) => (h(), a("span", {
							key: `out-${e.relation ?? ""}-${e.title}-${t}`,
							class: "flex items-baseline gap-1"
						}, [e.relation ? (h(), a("span", pu, v(e.relation), 1)) : i("", !0), e.path ? (h(), a("button", {
							key: 1,
							type: "button",
							class: "text-link hover:underline",
							onClick: (t) => u("open", e.path)
						}, v(e.title), 9, mu)) : (h(), a("span", {
							key: 2,
							class: "text-subtle underline decoration-dotted underline-offset-2",
							title: `No note for "${e.title}" yet`
						}, v(e.title), 9, hu))]))), 128))])) : i("", !0)])) : i("", !0),
						(b(p)?.body ?? "").trim() === "" ? (h(), a("p", gu, "No text yet: this note is its header.")) : (h(), r(b(fe), {
							key: 1,
							source: b(p)?.body ?? "",
							decorate: Oe,
							class: "px-5 py-4",
							style: { "--prose-measure": "74ch" },
							onClick: ke
						}, null, 8, ["source"])),
						b(p) && b(p).linkedFrom.length > 0 ? (h(), a("div", _u, [
							s[9] ||= o("span", { class: "text-2xs uppercase tracking-wide text-subtle" }, "Linked from", -1),
							(h(!0), a(t, null, _(b(p).linkedFrom, (e, t) => (h(), a("span", {
								key: `in-${e.relation ?? ""}-${e.title}-${t}`,
								class: "flex items-baseline gap-1"
							}, [e.relation ? (h(), a("span", vu, v(e.relation), 1)) : i("", !0), e.path ? (h(), a("button", {
								key: 1,
								type: "button",
								class: "text-link hover:underline",
								onClick: (t) => u("open", e.path)
							}, v(e.title), 9, yu)) : i("", !0)]))), 128)),
							o("button", {
								type: "button",
								class: m(b(Se).linkButton("ml-auto shrink-0 text-2xs")),
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
})), Su, Cu = E((() => {
	xu(), xu(), Su = bu;
})), wu, Tu, Eu, Du, Ou, ku = E((() => {
	Al(), ql(), Cu(), wu = {
		key: 0,
		class: "text-2xs text-subtle"
	}, Tu = { class: "mt-1 block text-xs text-muted" }, Eu = { class: "max-w-md text-xs text-muted" }, Du = {
		key: 0,
		class: "text-xs text-danger"
	}, Ou = /*@__PURE__*/ u({
		__name: "KnowledgeView",
		setup(e) {
			let t = g(void 0), u = we(t, 36), f = g(void 0), p = De(f), { overview: _, error: te } = Sl(), y = g(""), ne = g(), ie = g(), S = g(), de = n(() => ({
				q: y.value,
				type: ne.value,
				tag: ie.value,
				linkedTo: S.value
			})), fe = n(() => y.value !== "" || ne.value !== void 0 || ie.value !== void 0 || S.value !== void 0), { hits: C, error: pe, isLoading: ge, isFetching: _e } = Cl(de), w = n(() => kl(_.value)), ve = (e, t) => [{ options: [{
				value: "",
				label: t
			}, ...e.map((e) => ({
				value: e,
				label: e
			}))] }], ye = n({
				get: () => ne.value ?? "",
				set: (e) => ne.value = e === "" ? void 0 : e
			}), be = n({
				get: () => ie.value ?? "",
				set: (e) => ie.value = e === "" ? void 0 : e
			}), T = g(), { draft: Te } = Ce(T);
			Ee(t, () => T.value), re(C, () => {
				(T.value === void 0 || !C.value.some((e) => e.path === T.value)) && (T.value = C.value[0]?.path);
			});
			let Oe = (e) => {
				T.value = e;
			}, ke = (e) => {
				let t = C.value.map((e) => e.path);
				if (t.length === 0) return;
				let n = T.value === void 0 ? -1 : t.indexOf(T.value);
				T.value = t[Math.min(t.length - 1, Math.max(0, n + e))];
			}, Ae = (e) => {
				y.value = "", ne.value = void 0, ie.value = void 0, S.value = e;
			}, je = () => {
				y.value = "", ne.value = void 0, ie.value = void 0, S.value = void 0;
			};
			re(y, () => S.value = void 0);
			let Me = n(() => C.value.find((e) => e.path === S.value)?.title ?? S.value), E = n(() => S.value === void 0 ? void 0 : {
				tone: "info",
				title: `Everything linking to "${Me.value}"`,
				action: {
					label: "Show everything",
					run: je
				}
			}), Ne = n(() => {
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
			}), Pe = n(() => te.value ?? pe.value), { seed: D } = El(), Fe = async () => {
				let { written: e } = await D.mutateAsync();
				T.value = e[0] ?? T.value;
			};
			return (e, n) => (h(), a("div", {
				ref_key: "body",
				ref: t,
				class: "flex flex-col gap-3",
				style: ee(b(p).style.value)
			}, [
				Pe.value ? (h(), r(b(me), {
					key: 0,
					of: b(xe)(Pe.value)
				}, null, 8, ["of"])) : i("", !0),
				o("div", {
					ref_key: "chrome",
					ref: f,
					class: "sticky top-0 z-1 -mb-3 bg-canvas pb-3"
				}, [l(b(ce), {
					modelValue: y.value,
					"onUpdate:modelValue": n[2] ||= (e) => y.value = e,
					placeholder: "Search the knowledge base…",
					"aria-label": "Search the knowledge base",
					clearable: "",
					count: b(C).length,
					busy: b(_e) && !b(ge),
					onKeydown: [n[3] ||= ae(oe((e) => ke(1), ["prevent"]), ["down"]), n[4] ||= ae(oe((e) => ke(-1), ["prevent"]), ["up"])]
				}, s({
					actions: x(() => [b(_) ? (h(), a("span", wu, v(b(_).noteCount) + " " + v(b(_).noteCount === 1 ? "note" : "notes") + " · " + v(b(_).linkCount) + " " + v(b(_).linkCount === 1 ? "link" : "links") + " · " + v(b(_).types.length) + " " + v(b(_).types.length === 1 ? "kind" : "kinds"), 1)) : i("", !0), l(b(ue), { label: "Knowledge" }, {
						default: x(() => [n[11] ||= o("span", { class: "block text-sm font-medium text-content" }, "The knowledge base", -1), o("span", Tu, [
							n[7] ||= c(" A folder of markdown notes: ", -1),
							o("b", null, v(b(_)?.folder ?? "knowledge/"), 1),
							n[8] ||= c(" in your workspace, where each note is a ", -1),
							n[9] ||= o("i", null, "thing", -1),
							n[10] ||= c(" (a person, a project, a decision, a word) and each link is a connection between two of them. The agent reads it before answering questions about your world and writes to it when it learns something durable; you read, correct and delete here. Open it in Obsidian or put it under git: it is only ever markdown. ", -1)
						])]),
						_: 1
					})]),
					_: 2
				}, [w.value.types.length > 0 || w.value.tags.length > 0 ? {
					name: "controls",
					fn: x(() => [w.value.types.length > 0 ? (h(), r(b(he), {
						key: 0,
						modelValue: ye.value,
						"onUpdate:modelValue": n[0] ||= (e) => ye.value = e,
						variant: "ghost",
						options: ve(w.value.types, "Any kind"),
						class: "max-w-32",
						"aria-label": "Kind",
						header: "Kind"
					}, null, 8, ["modelValue", "options"])) : i("", !0), w.value.tags.length > 0 ? (h(), r(b(he), {
						key: 1,
						modelValue: be.value,
						"onUpdate:modelValue": n[1] ||= (e) => be.value = e,
						variant: "ghost",
						options: ve(w.value.tags, "Any tag"),
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
				E.value ? (h(), r(b(me), {
					key: 1,
					of: E.value
				}, null, 8, ["of"])) : i("", !0),
				Ne.value ? (h(), r(b(me), {
					key: 2,
					of: Ne.value
				}, null, 8, ["of"])) : i("", !0),
				b(_)?.noteCount === 0 && !fe.value ? (h(), a("div", {
					key: 3,
					class: m(b(Se).emptyState("flex flex-col items-center gap-2 px-6 py-12 text-sm"))
				}, [
					l(b(le), {
						name: "sitemap",
						class: "text-base text-subtle"
					}),
					n[14] ||= o("p", { class: "text-content" }, "Nothing here yet.", -1),
					o("p", Eu, [
						n[12] ||= c(" Notes appear here as the agent learns durable things about your world, who you work with, what a project is for, what was decided and why. Ask it to remember something, or drop your own markdown into ", -1),
						o("b", null, v(b(_)?.folder ?? "knowledge/"), 1),
						n[13] ||= c(" and it will be read the same way. ", -1)
					]),
					l(b(se), {
						label: "Start it off with a vocabulary",
						size: "small",
						severity: "secondary",
						loading: b(D).isPending.value,
						onClick: Fe
					}, null, 8, ["loading"]),
					b(D).error.value ? (h(), a("p", Du, v(b(D).error.value.message), 1)) : i("", !0)
				], 2)) : (h(), a("div", {
					key: 4,
					class: m(["flex gap-4", b(u) ? "flex-col" : "items-start"])
				}, [o("div", { class: m(["flex min-w-0 shrink-0 flex-col", b(u) ? "max-h-56" : "sticky top-(--pinned-top) max-h-[calc(100dvh-var(--pinned-top))] w-56"]) }, [l(Kl, {
					hits: b(C),
					selected: T.value,
					filtered: fe.value,
					"is-loading": b(ge),
					onPick: Oe
				}, null, 8, [
					"hits",
					"selected",
					"filtered",
					"is-loading"
				])], 2), T.value ? (h(), r(Su, {
					key: 0,
					draft: b(Te),
					"onUpdate:draft": n[5] ||= (e) => d(Te) ? Te.value = e : null,
					path: T.value,
					class: "min-w-0 flex-1",
					onOpen: Oe,
					onFilter: Ae,
					onForgotten: n[6] ||= (e) => T.value = void 0
				}, null, 8, ["draft", "path"])) : (h(), a("section", {
					key: 1,
					class: m(b(Se).emptyState("flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10"))
				}, [
					l(b(le), {
						name: "sitemap",
						class: "text-base text-subtle"
					}),
					n[15] ||= o("p", { class: "text-sm text-muted" }, "Pick a note to read it.", -1),
					n[16] ||= o("p", { class: "max-w-xs text-xs text-subtle" }, "Follow its links to move through your knowledge the way the agent does.", -1)
				], 2))], 2))
			], 4));
		}
	});
})), Au = /* @__PURE__ */ Ne({ default: () => ju }), ju, Mu = E((() => {
	ku(), ku(), ju = Ou;
}));
//#endregion
//#region src/extension.ts
Fe();
var Nu = (e, t) => {
	Pe(e), t.subscriptions.push(e.views.register({
		id: "knowledge",
		label: "Knowledge",
		surface: "sandbox",
		detect: () => [{
			key: "knowledge",
			title: "Knowledge",
			icon: "sitemap"
		}],
		view: async () => (await Promise.resolve().then(() => (Mu(), Au))).default
	}));
}, Pu = je.parse({
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
xl(), ul();
//#endregion
export { $ as KNOWLEDGE_BASE, Nu as activate, Pu as manifest };
