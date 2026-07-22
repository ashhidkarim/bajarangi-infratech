import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowLeft, b as CircleCheck, c as MessageCircle, o as Phone, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as projects } from "./projects-DhWQh564.mjs";
import { t as Route } from "./projects._slug-D1lF_5F8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-LI4DWNFX.js
var import_jsx_runtime = require_jsx_runtime();
var PHONE = "+91 89700 63613";
var PHONE_TEL = "+918970063613";
var WA = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent("Hi Bajarangi Infratech, I'd like to discuss a similar project.")}`;
function ProjectCase() {
	const { project } = Route.useLoaderData();
	const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-background/85 backdrop-blur sticky top-0 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to home"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "hidden sm:inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-medium text-sm px-4 py-2 hover:brightness-110 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
							" ",
							PHONE
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 -z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.cover,
							alt: project.title,
							className: "h-full w-full object-cover opacity-35",
							width: 1920,
							height: 1080
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-60" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-brand",
							children: ["Case Study · ", project.tag]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-4xl",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed",
							children: project.summary
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-surface/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8",
					children: project.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-bold text-2xl md:text-3xl text-gradient-brand",
						children: o.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
						children: o.label
					})] }, o.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "The Problem" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display font-bold text-2xl md:text-3xl",
							children: "What the plant was facing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: project.problem
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Our Solution" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display font-bold text-2xl md:text-3xl",
							children: "What we engineered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: project.solution.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90 leading-relaxed",
									children: s
								})]
							}, s))
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 bg-surface/30 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Tech Stack" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display font-bold text-2xl md:text-3xl",
							children: "Hardware & software used"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: project.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm rounded-full border border-border bg-surface px-4 py-2",
								children: t
							}, t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Gallery" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display font-bold text-2xl md:text-3xl",
							children: "On-site & control room"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid md:grid-cols-3 gap-4",
							children: project.gallery.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: `overflow-hidden rounded-xl border border-border bg-surface ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img.src,
									alt: img.alt,
									loading: "lazy",
									width: 1280,
									height: 960,
									className: "h-full w-full object-cover aspect-[4/3]"
								})
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 bg-surface/30 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-5 lg:px-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKickerCenter, { children: "Similar Project?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display font-bold text-3xl md:text-5xl",
							children: ["Let's engineer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "yours next."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-xl mx-auto",
							children: "Tell us about your automation requirement — we respond within one business day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								hash: "contact",
								className: "inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-semibold px-5 py-3 hover:brightness-110 transition shadow-[0_10px_40px_-10px] shadow-brand/70",
								children: ["Get Free Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WA,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-medium hover:bg-surface-2 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-brand" }), " WhatsApp Now"]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "More Case Studies" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display font-bold text-2xl md:text-3xl",
							children: "Explore other projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid md:grid-cols-3 gap-5",
							children: others.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects/$slug",
								params: { slug: p.slug },
								className: "group relative overflow-hidden rounded-xl border border-border bg-surface hover:border-brand/60 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.cover,
										alt: p.title,
										loading: "lazy",
										width: 1280,
										height: 960,
										className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-brand",
										children: p.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display font-semibold text-lg",
										children: p.title
									})]
								})]
							}, p.slug))
						})
					]
				})
			})
		]
	});
}
function SectionKicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-brand" }), children]
	});
}
function SectionKickerCenter({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-brand" }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-brand" })
		]
	});
}
//#endregion
export { ProjectCase as component };
