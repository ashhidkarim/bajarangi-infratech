import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./projects._slug-DRl0tf8q.mjs";
import { n as PHONE, t as EMAIL } from "./routes-DE9RbxCz.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DGmsCY-_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PopupForm() {
	const [open, setOpen] = (0, import_react.useState)(true);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		message: ""
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await (await fetch("https://web4infotech.com/api/send-mail.php", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			})).json();
			alert(result.message);
			if (result.status) {
				setFormData({
					name: "",
					phone: "",
					email: "",
					message: ""
				});
				setOpen(false);
			}
		} catch (error) {
			alert("Something went wrong!");
		}
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 flex justify-center items-center z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white w-[90%] max-w-md rounded-xl p-6 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "absolute top-3 right-3 text-xl",
					children: "✕"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-black mb-5",
					children: "Get Free Consultation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Full Name",
							value: formData.name,
							onChange: (e) => setFormData({
								...formData,
								name: e.target.value
							}),
							className: "w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "tel",
							placeholder: "Mobile Number",
							value: formData.phone,
							onChange: (e) => setFormData({
								...formData,
								phone: e.target.value
							}),
							className: "w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "Email Address",
							value: formData.email,
							onChange: (e) => setFormData({
								...formData,
								email: e.target.value
							}),
							className: "w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							placeholder: "Message",
							value: formData.message,
							onChange: (e) => setFormData({
								...formData,
								message: e.target.value
							}),
							className: "w-full border border-gray-300 rounded-lg p-3 mb-3 text-black bg-white"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "bg-orange-600 text-white w-full p-3 rounded",
							children: "Submit"
						})
					]
				})
			]
		})
	});
}
var styles_default = "/assets/styles-_AQsuPfe.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bajarangi Infratech World — Industrial Automation, PLC, SCADA, HMI | Belagavi" },
			{
				name: "description",
				content: "Industrial Automation Company in Belagavi, Karnataka. PLC Programming (Siemens, Delta, Mitsubishi, Allen Bradley), SCADA, HMI, LabVIEW, control panels and machine automation."
			},
			{
				name: "author",
				content: "Bajarangi Infratech World"
			},
			{
				name: "keywords",
				content: "PLC Programming Belgaum, Industrial Automation Belgaum, SCADA Development Karnataka, HMI Programming, Siemens PLC Programmer, LabVIEW Developer India, Control Panel Manufacturer, Machine Automation Company"
			},
			{
				property: "og:title",
				content: "Bajarangi Infratech World — Industrial Automation, PLC & SCADA"
			},
			{
				property: "og:description",
				content: "Complete industrial automation solutions: PLC, SCADA, HMI, LabVIEW, control panels and custom machine automation from Belagavi, Karnataka."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicons.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopupForm, {})]
	});
}
var $$splitComponentImporter = () => import("./routes-CziBiUve.mjs");
var rootRouteChildren = {
	IndexRoute: createFileRoute("/")({
		head: () => ({ scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "Bajarangi Infratech World",
				telephone: PHONE,
				email: EMAIL,
				address: {
					"@type": "PostalAddress",
					addressLocality: "Belagavi",
					addressRegion: "Karnataka",
					addressCountry: "IN"
				},
				areaServed: "IN",
				description: "Industrial Automation Company in Belagavi providing PLC, SCADA, HMI, LabVIEW, control panels and machine automation."
			})
		}] }),
		component: lazyRouteComponent($$splitComponentImporter, "component")
	}).update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$1
	}),
	ProjectsSlugRoute: Route.update({
		id: "/projects/$slug",
		path: "/projects/$slug",
		getParentRoute: () => Route$1
	})
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
