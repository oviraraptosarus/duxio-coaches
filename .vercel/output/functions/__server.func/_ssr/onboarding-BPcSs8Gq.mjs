import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { M as CircleCheck, V as ArrowRight, b as LoaderCircle, d as ShieldCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
import { c as SiteHeader, s as SiteFooter } from "./site-footer-BdWkVFfZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding-BPcSs8Gq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ClientOnboardingPage() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSubmitted(true);
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background selection:bg-accent selection:text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-28 pb-20 px-5 sm:px-8 mesh-hero-glow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow-chip mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Client Infrastructure Deployment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2",
								children: "DUXIO Client Onboarding Portal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto",
								children: "Welcome to your client acquisition operating system installation. Please submit your practice parameters and calendar credentials below to initiate deployment."
							})
						]
					}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated p-8 sm:p-12 text-center animate-in fade-in duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-2xl font-bold text-foreground",
								children: "Onboarding Parameters Received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed",
								children: "Your practice profile has been queued for infrastructure installation. Our systems engineering team will configure your client acquisition ecosystem within seventy two hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 pt-6 border-t border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/coach-client-acquisition",
									className: "inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Return to Practice Dashboard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "card-elevated p-6 sm:p-10 text-left space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-line pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] font-bold uppercase tracking-wider text-accent block",
									children: [
										"Deployment Stage ",
										step,
										" of 2"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold text-foreground mt-0.5",
									children: step === 1 ? "Program and Pricing Structure" : "Calendar Credentials and Brand Parameters"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-bold text-accent",
									children: [step, "/2"]
								})]
							}),
							step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1 block font-semibold text-foreground",
											children: "Principal Consultant Name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "Alex Vance",
											className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1 block font-semibold text-foreground",
											children: "Corporate Email Address *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											required: true,
											placeholder: "alex@vancecoaching.com",
											className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-1 block font-semibold text-foreground",
												children: "Coaching Niche *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												placeholder: "Executive Leadership",
												className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-1 block font-semibold text-foreground",
												children: "Flagship Offer Name *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												placeholder: "12 Week Mastery Accelerator",
												className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-1 block font-semibold text-foreground",
												children: "Offer Price Point *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												placeholder: "$5,000",
												className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1 block font-semibold text-foreground",
										children: "Primary Audience Transformation Statement *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										rows: 3,
										placeholder: "We help corporate directors transition into executive roles without burnout.",
										className: "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(2),
										className: "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient py-4 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proceed to Technical Integrations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-xs animate-in fade-in duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1 block font-semibold text-foreground",
											children: "Scheduling Calendar URL *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "url",
											required: true,
											placeholder: "https://calendly.com/alex/discovery",
											className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1 block font-semibold text-foreground",
											children: "Official Website or Landing Page URL"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "url",
											placeholder: "https://vancecoaching.com",
											className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1 block font-semibold text-foreground",
											children: "Primary Social Profile Handle *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "@alexvancecoach",
											className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1 block font-semibold text-foreground",
											children: "Target Monthly Client Enrollments *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "4 to 6 clients monthly",
											className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1 block font-semibold text-foreground",
										children: "Asset Drive or Brand Folder Link"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "url",
										placeholder: "https://drive.google.com/...",
										className: "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setStep(1),
											className: "rounded-full border border-line bg-surface px-5 py-3.5 text-xs font-semibold text-foreground hover:bg-surface-2 transition",
											children: "Back"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: loading,
											className: "flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient py-3.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01] disabled:opacity-50",
											children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Submitting Deployment Parameters..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INITIALIZE INFRASTRUCTURE DEPLOYMENT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })] })
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-2 border-t border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enterprise encryption. Your credentials remain strictly confidential." })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ClientOnboardingPage as component };
