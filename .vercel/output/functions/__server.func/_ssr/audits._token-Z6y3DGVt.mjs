import { r as __toESM } from "../_runtime.mjs";
import { g as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as CircleX, I as Check, M as CircleCheck, O as Copy, R as Calendar, V as ArrowRight, a as TriangleAlert, d as ShieldCheck, o as TrendingUp, t as Zap, u as Sparkles } from "../_libs/lucide-react.mjs";
import { c as SiteHeader, s as SiteFooter } from "./site-footer-BdWkVFfZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audits._token-Z6y3DGVt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useAuditData(token) {
	return {
		token,
		firstName: "Coach",
		niche: "Executive Leadership",
		offer: "12 Week Mastery Accelerator",
		offerPrice: 5e3,
		monthlyInquiries: 60,
		monthlyBookedCalls: 8,
		biggestChallenge: "Prospects ghosting direct message booking links",
		socialProfile: "@coach",
		website: "",
		healthScore: 34,
		annualizedLeak: 156e3
	};
}
var stages = [
	{
		name: "Attraction",
		status: "ok",
		summary: "Content drives consistent inbound visibility.",
		leak: 0
	},
	{
		name: "Capture",
		status: "critical",
		summary: "Zero automated capture mechanism. Prospects land on profile and leave without entering a pipeline.",
		leak: 38e3
	},
	{
		name: "Nurture",
		status: "critical",
		summary: "No educational nurture sequence. Delayed buyers evaporate after initial inquiry.",
		leak: 52e3
	},
	{
		name: "Qualification",
		status: "critical",
		summary: "Booking links sent raw without intake filtering. Unqualified callers consume fifty percent of sales capacity.",
		leak: 41e3
	},
	{
		name: "Conversion",
		status: "warning",
		summary: "No pre-call framing assets or show-up sequences. Show rate estimated below sixty percent.",
		leak: 25e3
	}
];
var repairs = [
	{
		id: "capture",
		label: "Instant DM Conversational Routing",
		desc: "Automated asset bridge that pre-sells prospects before they reach your calendar.",
		recoveryPct: .25
	},
	{
		id: "nurture",
		label: "90 Day Automated Educational Nurture",
		desc: "Multi-touch email and SMS sequence that reactivates delayed buyers on autopilot.",
		recoveryPct: .33
	},
	{
		id: "qualify",
		label: "Frictionless Dynamic Intake Filters",
		desc: "Two step qualification gate filtering non-buyers before they consume calendar slots.",
		recoveryPct: .22
	},
	{
		id: "showup",
		label: "Show Up Pre-Framing Assets",
		desc: "Automated pre-call video, reminder sequence, and value anchoring to drive show rates above eighty five percent.",
		recoveryPct: .2
	}
];
var roadmap = [
	{
		phase: "Phase 1",
		title: "Intake and Capture Infrastructure",
		timeline: "Days 1 through 14",
		deliverables: [
			"Conversational DM routing engine",
			"Automated lead capture landing architecture",
			"CRM pipeline configuration and tagging logic"
		]
	},
	{
		phase: "Phase 2",
		title: "Autonomous Nurture and Dynamic Qualification",
		timeline: "Days 15 through 30",
		deliverables: [
			"90 day educational email and SMS nurture sequences",
			"Dynamic intake qualification filters",
			"Calendar integration with pre-call framing assets"
		]
	},
	{
		phase: "Phase 3",
		title: "Scaling and Conversion Calibration",
		timeline: "Days 31 through 60",
		deliverables: [
			"Show rate optimization and reminder automation",
			"Pipeline analytics dashboard deployment",
			"Conversion velocity tuning and A/B split testing"
		]
	}
];
function AuditReportPage() {
	const { token } = useParams({ from: "/audits/$token" });
	const data = useAuditData(token);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [activeRepairs, setActiveRepairs] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [inquirySlider, setInquirySlider] = (0, import_react.useState)(data.monthlyInquiries);
	const [priceSlider, setPriceSlider] = (0, import_react.useState)(data.offerPrice);
	const totalLeak = stages.reduce((s, st) => s + st.leak, 0);
	const recoveredRevenue = (0, import_react.useMemo)(() => {
		let recovered = 0;
		repairs.forEach((r) => {
			if (activeRepairs.has(r.id)) recovered += inquirySlider * priceSlider * r.recoveryPct * .12;
		});
		return Math.round(recovered);
	}, [
		activeRepairs,
		inquirySlider,
		priceSlider
	]);
	const toggleRepair = (id) => {
		setActiveRepairs((prev) => {
			const next = new Set(prev);
			next.has(id) ? next.delete(id) : next.add(id);
			return next;
		});
	};
	const copyToken = () => {
		navigator.clipboard.writeText(token);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const statusIcon = (s) => s === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-500" }) : s === "critical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 text-rose-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-amber-500" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground font-sans antialiased selection:bg-accent/15 selection:text-accent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-4 z-50 mx-auto mt-24 w-[calc(100%-2rem)] max-w-5xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-2xl border border-line bg-surface/75 px-5 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-extrabold tracking-[-0.03em]",
							children: "DUXIO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700",
							children: "DIAGNOSTIC COMPLETE"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[10px] tracking-wide text-muted-foreground",
							children: token
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: copyToken,
							className: "rounded-lg border border-line bg-card p-1.5 text-muted-foreground transition hover:bg-surface-2",
							title: "Copy token",
							children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-5xl space-y-10 px-4 pt-8 pb-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden rounded-3xl border border-line bg-card p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_12px_32px_-8px_rgba(0,0,0,0.05)] sm:p-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,85,0,0.05),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mb-2 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), "Pipeline Diagnostic Report"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl",
										children: [
											data.firstName,
											", your acquisition system is operating at",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-rose-500",
												children: [data.healthScore, "%"]
											}),
											" capacity."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: [
											"Based on your submitted parameters, we identified critical infrastructure gaps across your ",
											data.niche,
											" practice pipeline. Your current system is estimated to leave",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-foreground",
												children: [
													"$",
													totalLeak.toLocaleString(),
													" per year"
												]
											}),
											" ",
											"in unrealized revenue on the table."
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-36 w-36",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 120 120",
										className: "h-full w-full -rotate-90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "60",
											cy: "60",
											r: "50",
											fill: "none",
											stroke: "currentColor",
											opacity: "0.1",
											strokeWidth: "10"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "60",
											cy: "60",
											r: "50",
											fill: "none",
											stroke: data.healthScore < 50 ? "#EF4444" : "#FF5500",
											strokeWidth: "10",
											strokeLinecap: "round",
											strokeDasharray: `${data.healthScore / 100 * 314} 314`,
											className: "transition-all duration-700"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-0 flex flex-col items-center justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-3xl font-extrabold",
											children: data.healthScore
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-semibold text-muted-foreground",
											children: "of 100"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-rose-500",
									children: "Critical Infrastructure Gaps"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 text-lg font-bold tracking-[-0.03em]",
						children: "Pipeline Leak Diagnostic"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-5",
						children: stages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-2xl border p-4 text-xs ${stage.status === "critical" ? "border-destructive/30 bg-destructive/10" : stage.status === "warning" ? "border-amber-500/30 bg-amber-500/10" : "border-line bg-card"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center gap-1.5",
									children: [statusIcon(stage.status), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[11px] uppercase tracking-wider",
										children: stage.name
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] leading-relaxed text-muted-foreground",
									children: stage.summary
								}),
								stage.leak > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 rounded-lg bg-rose-100/60 px-2 py-1 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-bold text-rose-600",
										children: [
											"$",
											stage.leak.toLocaleString(),
											"/yr leaked"
										]
									})
								})
							]
						}, stage.name))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12141A] to-[#1D1D1F] p-8 text-white shadow-2xl backdrop-blur-2xl sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,85,0,0.12),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mb-1 text-lg font-bold tracking-[-0.03em]",
									children: "Interactive Pipeline Repair Sandbox"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-6 text-xs text-white/50",
									children: "Toggle system upgrades to simulate your recovered pipeline revenue."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/60",
										children: ["Monthly Inquiries: ", inquirySlider]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 10,
										max: 200,
										value: inquirySlider,
										onChange: (e) => setInquirySlider(+e.target.value),
										className: "w-full accent-accent"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/60",
										children: ["Offer Price: $", priceSlider.toLocaleString()]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 500,
										max: 15e3,
										step: 250,
										value: priceSlider,
										onChange: (e) => setPriceSlider(+e.target.value),
										className: "w-full accent-accent"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
									children: repairs.map((r) => {
										const active = activeRepairs.has(r.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => toggleRepair(r.id),
											className: `flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${active ? "border-accent/40 bg-accent/10" : "border-white/10 bg-card/5 hover:bg-card/8"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${active ? "border-accent bg-accent" : "border-white/20 bg-card/5"}`,
												children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-white" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-bold",
												children: r.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 block text-[10px] text-white/50",
												children: r.desc
											})] })]
										}, r.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[10px] font-semibold uppercase tracking-wider text-accent/80",
											children: "Estimated Recovered Annual Revenue"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 block text-4xl font-extrabold tracking-[-0.04em] text-accent",
											children: [
												"$",
												recoveredRevenue.toLocaleString(),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg text-white/40",
													children: "/yr"
												})
											]
										}),
										activeRepairs.size === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-[10px] text-white/40",
											children: "Toggle system upgrades above to simulate recovery."
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-3xl border border-line bg-card p-8 shadow-sm sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-6 text-lg font-bold tracking-[-0.03em]",
							children: "System Architecture Comparison"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-rose-200 bg-rose-50/40 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }), "Current Fragile Process"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: [
										"Manual direct messages",
										"Raw Calendly link drops",
										"Zero pre-call qualification",
										"No automated follow up",
										"Unqualified no-shows"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] text-rose-700",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-accent/20 bg-accent/5 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }), "DUXIO Client Acquisition OS"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: [
										"Unified conversational lead capture",
										"Autonomous logic qualifier engine",
										"Omnichannel 90 day nurture sequences",
										"Pre-call framing and show-up assets",
										"Qualified high-ticket conversion pipeline"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] text-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-3xl border border-line bg-background p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-5 text-lg font-bold tracking-[-0.03em]",
							children: "Implementation Roadmap"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: roadmap.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-line bg-card p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold text-accent",
											children: p.phase
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-semibold text-muted-foreground",
											children: p.timeline
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-2 text-sm font-bold tracking-[-0.02em]",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1",
										children: p.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-[11px] text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-3 w-3 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
										}, d))
									})
								]
							}, p.phase))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto max-w-3xl rounded-3xl border border-white/90 bg-card/85 p-8 text-center shadow-[0_20px_50px_rgba(255,85,0,0.12)] ring-1 ring-accent/20 backdrop-blur-2xl sm:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-6 w-6 text-accent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-extrabold tracking-[-0.04em]",
								children: "Schedule Your System Architecture Strategy Review"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-md text-xs text-muted-foreground leading-relaxed",
								children: "In a focused ten minute walkthrough, our solutions team will present your custom implementation blueprint and deployment timeline based on the diagnostic findings above."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold text-amber-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2 Consultations Available for Current Sprint" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-xs font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BOOK MY STRATEGY REVIEW" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confidential. Your diagnostic data is encrypted end to end." })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AuditReportPage as component };
