import { n as __toESM } from "../_runtime.mjs";
import { r as projects, t as panel_default } from "./projects-D7BiU8_O.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Activity, _ as Cog, a as ShieldCheck, b as CircleCheck, c as MessageCircle, d as Mail, f as Headphones, g as Cpu, h as Factory, i as Star, l as Menu, m as FlaskConical, n as X, o as Phone, p as Gauge, r as Wrench, s as Monitor, t as Zap, u as MapPin, v as Clock, x as ArrowRight, y as CircuitBoard } from "../_libs/lucide-react.mjs";
import { n as PHONE, t as EMAIL } from "./routes-DE9RbxCz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CziBiUve.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-C4GmHUNY.png";
var a_1_default = "/assets/a-1-vcRhEuaj.jpg";
var a_2_default = "/assets/a-2-CqQ75aaa.jpg";
var a_3_default = "/assets/a-3-DZ1mH2lF.jpg";
var a_4_default = "/assets/a-4-DA4KvPVT.jpg";
var a_5_default = "/assets/a-5-Dm9M0AaW.jpg";
var web4 = "https://web4infotech.com/";
var PHONE_TEL = "+918668454817";
var WA = `https://api.whatsapp.com/send?phone=+918668454817&text=Hello`;
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counters, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyActions, {})
		]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Banner",
						style: { width: "60px" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-bold tracking-tight text-[20px] leading-tight",
						children: ["BAJARANGI", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[14px] font-medium text-muted-foreground tracking-[0.22em]",
							children: "INFRATECH WORLD"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-7 text-lg text-muted-foreground",
					children: [
						["About", "#about"],
						["Services", "#services"],
						["Industries", "#industries"],
						["Projects", "#projects"],
						["Contact", "#contact"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "hover:text-foreground transition-colors",
						children: l
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden",
					onClick: () => setMenuOpen(!menuOpen),
					children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 28 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "hidden md:inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-medium text-sm px-4 py-2 hover:brightness-110 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
				})
			]
		}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden bg-background border-t border-border p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#about",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#industries",
						children: "Industries"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#projects",
						children: "Projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "bg-brand text-white px-4 py-3 rounded-md text-center",
						children: "Call Now"
					})
				]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					className: "h-full w-full object-cover opacity-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "https://cdn.prod.website-files.com/65f854814fd223fc3678ea45/6601787785162a844edf5cf8_iStock-804878296-transcode.mp4",
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-60" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot absolute inline-flex h-full w-full rounded-full bg-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-brand" })]
					}), "Belagavi, Karnataka · Industrial Automation Specialists"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.02] max-w-4xl",
					children: [
						"Automation that makes your",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "factory smarter."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed",
					children: "Industrial Automation · PLC · SCADA · HMI · Machine Automation. Complete solutions for manufacturing industries, OEM machine builders and testing equipment — from PLC programming to control panels and custom software."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-semibold px-5 py-3 hover:brightness-110 transition shadow-[0_10px_40px_-10px] shadow-brand/70",
							children: ["Get Free Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WA,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-5 py-3 font-medium hover:bg-surface transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-brand" }), " WhatsApp Now"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-5 py-3 font-medium hover:bg-surface transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand" }), " Call Now"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap items-center gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a_1_default,
							alt: "Siemens",
							className: "h-18 object-contain rounded-xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a_2_default,
							alt: "Delta",
							className: "h-18 object-contain rounded-xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a_3_default,
							alt: "Mitsubishi",
							className: "h-18 object-contain rounded-xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a_4_default,
							alt: "Allen Bradley",
							className: "h-18 object-contain rounded-xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a_4_default,
							alt: "LabVIEW",
							className: "h-18 object-contain rounded-xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a_5_default,
							alt: "Weintek",
							className: "h-18 object-contain rounded-xl"
						})
					]
				})
			]
		})]
	});
}
function Counters() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8",
			children: [
				{
					n: "200+",
					l: "Projects Delivered"
				},
				{
					n: "80+",
					l: "Happy Clients"
				},
				{
					n: "10+",
					l: "Years of Experience"
				},
				{
					n: "24×7",
					l: "Technical Support"
				}
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display font-bold text-3xl md:text-4xl text-gradient-brand",
				children: i.n
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
				children: i.l
			})] }, i.l))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "About Us" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display font-bold text-3xl md:text-5xl leading-tight",
					children: [
						"A leading industrial automation company in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "Belagavi."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted-foreground leading-relaxed",
					children: "Bajarangi Infratech World specializes in complete automation solutions for manufacturing industries — helping factories improve productivity, reliability and efficiency with proven engineering and hands-on commissioning support."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [
						"PLC Programming",
						"SCADA Development",
						"HMI Development",
						"LabVIEW Development",
						"Siemens PLC",
						"Delta PLC",
						"Mitsubishi PLC",
						"Allen Bradley PLC",
						"VFD Commissioning",
						"Servo Systems",
						"Motion Control",
						"Industrial IoT",
						"SQL Database Integration",
						"Reporting Software",
						"Machine Automation",
						"Concrete Batching Plant Automation",
						"Valve Testing Machine Automation",
						"Control Panel Design"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs rounded-full border border-border bg-surface/60 px-3 py-1.5 text-muted-foreground",
						children: t
					}, t))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] rounded-xl overflow-hidden border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: panel_default,
						alt: "PLC control panel with wiring",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-brand/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg bg-background/80 backdrop-blur border border-border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: "Field-tested engineering"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground text-xs",
								children: "From PLC logic to on-site commissioning"
							})]
						})]
					})
				]
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 bg-surface/30 border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Our Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display font-bold text-3xl md:text-5xl",
					children: "End-to-end automation, engineered in-house."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: [
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-5 w-5" }),
						title: "PLC Programming",
						items: [
							"Siemens S7-1200",
							"Siemens S7-1500",
							"S7-200 Smart",
							"Delta PLC",
							"Mitsubishi PLC",
							"Allen Bradley PLC"
						]
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-5 w-5" }),
						title: "SCADA Development",
						items: [
							"Custom SCADA Software",
							"Real-time Monitoring",
							"Historical Trends",
							"Alarm Management",
							"Production Reports",
							"SQL Database Integration"
						]
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-5 w-5" }),
						title: "HMI Development",
						items: [
							"Delta",
							"Siemens",
							"INVT",
							"Fuji",
							"Weintek",
							"Custom Screens"
						]
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-5 w-5" }),
						title: "LabVIEW Development",
						items: [
							"Industrial Software",
							"DAQ Systems",
							"Machine Testing Software",
							"Report Generation",
							"Vision Inspection",
							"Automation Dashboards"
						]
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBoard, { className: "h-5 w-5" }),
						title: "Control Panel Design",
						items: [
							"Electrical Design",
							"PLC Panels",
							"MCC Panels",
							"PCC Panels",
							"Automation Panels",
							"Field Commissioning"
						]
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cog, { className: "h-5 w-5" }),
						title: "Industrial Automation",
						items: [
							"Machine Retrofitting",
							"OEM Machine Development",
							"Testing Machines",
							"Special Purpose Machines",
							"Industrial Networking",
							"Industrial IoT"
						]
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-xl border border-border bg-surface p-6 hover:border-brand/60 transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30",
							children: s.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display font-semibold text-xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-brand" }), it]
							}, it))
						})
					]
				}, s.title))
			})]
		})
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "industries",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Industries We Serve" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display font-bold text-3xl md:text-4xl",
						children: "Trusted across critical process and OEM industries."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "We deliver reliable automation for demanding environments — from cement and steel plants to pharma and packaging lines."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-3 grid sm:grid-cols-2 gap-3",
				children: [
					"Cement Industry",
					"Concrete Batching Plants",
					"Steel Industry",
					"Automotive",
					"Pharmaceutical",
					"Food Processing",
					"Packaging",
					"Chemical Plants",
					"Water Treatment",
					"OEM Machine Builders",
					"Hydraulic industry"
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Factory, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: i
					})]
				}, i))
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-surface/30 border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Why Choose Us" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display font-bold text-3xl md:text-5xl max-w-2xl",
					children: "Built on engineering discipline and factory-floor experience."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4",
					children: [
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" }),
							t: "Experienced Engineers"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cog, { className: "h-5 w-5" }),
							t: "Customized Solutions"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" }),
							t: "Fast Project Execution"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }),
							t: "Affordable Pricing"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-5 w-5" }),
							t: "Remote Support"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-5 w-5" }),
							t: "On-site Commissioning"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" }),
							t: "Annual Maintenance"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "h-5 w-5" }),
							t: "24×7 Technical Support"
						}
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-5 hover:border-brand/60 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30",
							children: i.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-medium",
							children: i.t
						})]
					}, i.t))
				})
			]
		})
	});
}
function Projects() {
	const featured = projects.slice(0, 3);
	const rest = projects.slice(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display font-bold text-3xl md:text-5xl",
							children: "Selected work across process & machine automation."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid md:grid-cols-3 gap-5",
					children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-brand",
									children: p.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-brand transition" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display font-semibold text-lg",
								children: p.title
							})]
						})]
					}, p.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid sm:grid-cols-2 md:grid-cols-5 gap-3",
					children: rest.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$slug",
						params: { slug: r.slug },
						className: "group flex items-center justify-between gap-2 rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm hover:border-brand/60 hover:bg-surface transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground group-hover:text-brand transition" })]
					}, r.slug))
				})
			]
		})
	});
}
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-surface/30 border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Customer Benefits" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display font-bold text-3xl md:text-5xl max-w-2xl",
					children: "Measurable results on the shop floor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [
						"Reduce Downtime",
						"Increase Productivity",
						"Improve Product Quality",
						"Lower Maintenance Cost",
						"Real-Time Monitoring",
						"Automatic Reporting",
						"Better Traceability"
					].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-brand" }),
							" ",
							b
						]
					}, b))
				})
			]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Testimonials" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display font-bold text-3xl md:text-5xl max-w-2xl",
					children: "What clients say about working with us."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid md:grid-cols-3 gap-5",
					children: [
						{
							q: "Professional PLC programming and excellent support.",
							a: "Plant Manager, Cement"
						},
						{
							q: "Highly recommended for industrial automation projects.",
							a: "OEM Machine Builder"
						},
						{
							q: "Delivered our machine automation project before schedule.",
							a: "Testing Equipment Client"
						}
					].map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-xl border border-border bg-surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 text-brand",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 text-foreground leading-relaxed",
								children: [
									"\"",
									it.q,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground",
								children: it.a
							})
						]
					}, idx))
				})
			]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 bg-surface/30 border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display font-bold text-3xl md:text-5xl",
					children: "Let's automate your next project."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground max-w-lg",
					children: "Reach out for a free consultation on PLC, SCADA, HMI, LabVIEW or custom machine automation. We respond within one business day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
							}), "bajarangi infratech world, Near, KLE Engineering College Rd, Angol, Belagavi, Karnataka 590008."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "flex items-center gap-3 hover:text-brand transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
							}), PHONE]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${EMAIL}`,
							className: "flex items-center gap-3 hover:text-brand transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
							}), EMAIL]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WA,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-3 hover:text-brand transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
							}), "WhatsApp us"]
						}) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-xl overflow-hidden border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Bajarangi Infratech World",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.824908015845!2d74.5012998!3d15.8156137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65817586ec37%3A0x64f6259a94b248e9!2sBajarangi%20Infratech%20World!5e1!3m2!1sen!2sin!4v1784721440390!5m2!1sen!2sin",
						width: "100%",
						height: "250",
						style: { border: 0 },
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "strict-origin-when-cross-origin"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					const f = e.currentTarget;
					const data = new FormData(f);
					const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nRequirement: ${data.get("message")}`);
					window.location.href = `mailto:${EMAIL}?subject=Automation%20Enquiry&body=${body}`;
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold text-xl",
						children: "Request a Callback"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Tell us about your project."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "name",
							label: "Your Name",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "phone",
							label: "Phone",
							type: "tel",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "email",
						label: "Email",
						type: "email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "company",
						label: "Company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Requirement"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						rows: 4,
						required: true,
						className: "mt-1 w-full rounded-md bg-background border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/60",
						placeholder: "PLC / SCADA / HMI / LabVIEW / Panel..."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground font-semibold px-5 py-3 hover:brightness-110 transition",
						children: ["Send Enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground text-center",
						children: [
							"Or WhatsApp us directly at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WA,
								target: "_blank",
								rel: "noreferrer",
								className: "text-brand hover:underline",
								children: PHONE
							})
						]
					})
				]
			})]
		})
	});
}
function Field({ name, label, type = "text", required = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "mt-1 w-full rounded-md bg-background border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/60"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-3 gap-8 pb-8 border-b border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-bold",
						children: "BAJARANGI INFRATECH WORLD"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground max-w-sm",
						children: "Industrial Automation · PLC · SCADA · HMI · LabVIEW · Control Panel Design · Machine Automation · SQL Integration · Industrial Software."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								className: "hover:text-brand",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-brand",
								children: "Services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "hover:text-brand",
								children: "Projects"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hover:text-brand",
								children: "Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Belagavi, Karnataka" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE_TEL}`,
								className: "hover:text-brand",
								children: PHONE
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "hover:text-brand",
								children: EMAIL
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Bajarangi Infratech World. All rights reserved. · Designed By     ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: web4,
						target: "_blank",
						children: "Web4 Infotech Solutions."
					})
				]
			})]
		})
	});
}
function StickyActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-40 flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: WA,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "WhatsApp",
			className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `tel:${PHONE_TEL}`,
			"aria-label": "Call",
			className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg hover:scale-105 transition",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
		})]
	});
}
function SectionKicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 text-lg uppercase tracking-[0.25em] text-brand",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-brand" }), children]
	});
}
//#endregion
export { Index as component };
