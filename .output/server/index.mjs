globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-ws3Xe6yH00tgvx5OKgLXzMoCJPA\"",
		"mtime": "2026-07-24T10:38:04.660Z",
		"size": 6148,
		"path": "../public/.DS_Store"
	},
	"/assets/a-1-Bsyp4Xb6.jpg": {
		"type": "image/jpeg",
		"etag": "\"2054-ELbfjaXBKSDoIdnLyvEvyVtA9cY\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 8276,
		"path": "../public/assets/a-1-Bsyp4Xb6.jpg"
	},
	"/assets/a-2-BZlJ7XD_.jpg": {
		"type": "image/jpeg",
		"etag": "\"1db9-GjmPIcLa9RFAL7F03cOdGAVtsbs\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 7609,
		"path": "../public/assets/a-2-BZlJ7XD_.jpg"
	},
	"/assets/a-3-EGnBb_Hi.jpg": {
		"type": "image/jpeg",
		"etag": "\"215d-1rfuYSapEcGP4QB+wxE4kCDf5r8\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 8541,
		"path": "../public/assets/a-3-EGnBb_Hi.jpg"
	},
	"/assets/a-5-CVjXUQDp.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dd3-rvxvvhcBC+pHq5xjPZySzmiP6oQ\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 7635,
		"path": "../public/assets/a-5-CVjXUQDp.jpg"
	},
	"/assets/createLucideIcon-CIfNJlK7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a5-4GVEwSy1y7jedlccSpTI3VCmO8g\"",
		"mtime": "2026-07-24T10:38:04.452Z",
		"size": 1189,
		"path": "../public/assets/createLucideIcon-CIfNJlK7.js"
	},
	"/assets/arrow-left-BY-Nc-3I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-ALawNiF41NMLwApK37tU4p/YdXU\"",
		"mtime": "2026-07-24T10:38:04.452Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BY-Nc-3I.js"
	},
	"/assets/batching-plant-c7tIT3Ag.jpg": {
		"type": "image/jpeg",
		"etag": "\"202bf-NdIrfobaPOpTdlSAkUv9erXQnP4\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 131775,
		"path": "../public/assets/batching-plant-c7tIT3Ag.jpg"
	},
	"/assets/hmi-scada-CLcX_qcA.jpg": {
		"type": "image/jpeg",
		"etag": "\"188d1-SPRTTSshH4tC/IXpA9zi9DhZ3Ak\"",
		"mtime": "2026-07-24T10:38:04.454Z",
		"size": 100561,
		"path": "../public/assets/hmi-scada-CLcX_qcA.jpg"
	},
	"/favicons.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4203e-4+cToA6mxEm73DqyThOHtpc+mpY\"",
		"mtime": "2026-07-24T10:38:04.660Z",
		"size": 270398,
		"path": "../public/favicons.ico"
	},
	"/assets/a-4-CCWTIf_f.jpg": {
		"type": "image/jpeg",
		"etag": "\"2377-+DArwSSqzK0r8J5j0zg+yPCKhP0\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 9079,
		"path": "../public/assets/a-4-CCWTIf_f.jpg"
	},
	"/assets/logo-C4GmHUNY.png": {
		"type": "image/png",
		"etag": "\"7a67-GeXxnCRcH5tiNXSde1x+/YMvFbI\"",
		"mtime": "2026-07-24T10:38:04.454Z",
		"size": 31335,
		"path": "../public/assets/logo-C4GmHUNY.png"
	},
	"/assets/projects._slug-CWhXwxX0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"290-SfvhWunhFSkz6WSGCg5Cp3My7Eg\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 656,
		"path": "../public/assets/projects._slug-CWhXwxX0.js"
	},
	"/assets/projects._slug-hsIjmFIy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6e-+EbbeTwKdWMYn+KtEJclVjIqXW0\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 7278,
		"path": "../public/assets/projects._slug-hsIjmFIy.js"
	},
	"/assets/routes-BTPknf9c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72ef-2XxaJR2uRtygkUK1Rk6lOUDKhhM\"",
		"mtime": "2026-07-24T10:38:04.453Z",
		"size": 29423,
		"path": "../public/assets/routes-BTPknf9c.js"
	},
	"/assets/panel-DnbEkkkm.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fef3-U4K8ceC4iowaEzPSwcxz9NI1uwg\"",
		"mtime": "2026-07-24T10:38:04.454Z",
		"size": 130803,
		"path": "../public/assets/panel-DnbEkkkm.jpg"
	},
	"/assets/phone-Cnc-vSGs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e1-0gm+Tm4U0uCeGelabZh53J1Cr+8\"",
		"mtime": "2026-07-24T10:38:04.452Z",
		"size": 737,
		"path": "../public/assets/phone-Cnc-vSGs.js"
	},
	"/assets/index-_mV7QKoj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56c43-DpN1t8MxfEjN03Eg0Tkcz2fX2xs\"",
		"mtime": "2026-07-24T10:38:04.452Z",
		"size": 355395,
		"path": "../public/assets/index-_mV7QKoj.js"
	},
	"/assets/styles-B0eoB8uE.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"141c3-y+Msk2Twyo6pkxy35zkboBOfsZ0\"",
		"mtime": "2026-07-24T10:38:04.454Z",
		"size": 82371,
		"path": "../public/assets/styles-B0eoB8uE.css"
	},
	"/assets/hero-automation-CpH71nzF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a629a-kXSuTT+nr78Rc8C38cqwc5QHAvw\"",
		"mtime": "2026-07-24T10:38:04.454Z",
		"size": 1729178,
		"path": "../public/assets/hero-automation-CpH71nzF.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_bekvS_ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_bekvS_
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
