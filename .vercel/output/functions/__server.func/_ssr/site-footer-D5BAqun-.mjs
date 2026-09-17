import { r as __toESM } from "../_runtime.mjs";
import { D as isRedirect, _ as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as biggestChallenges, t as auditSchema } from "./audit-schema-Uzv4UpUZ.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D4-OheSC.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { D as CircleCheck, E as CircleQuestionMark, F as ArrowRight, O as CircleAlert, P as Calculator, _ as Layers, b as ExternalLink, d as ShieldCheck, f as ShieldAlert, g as LoaderCircle, m as Menu, n as X, p as Play } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-D5BAqun-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitAudit = createServerFn({ method: "POST" }).validator((data) => auditSchema.parse(data)).handler(createSsrRpc("52a5396c5d2944e5c1fe128fd1674a451fc86a9329305a259a54a82f8004b8d9"));
function AuditForm() {
	const submit = useServerFn(submitAudit);
	const [step, setStep] = (0, import_react.useState)(1);
	const [done, setDone] = (0, import_react.useState)(false);
	const [reportUrl, setReportUrl] = (0, import_react.useState)(null);
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const { register, handleSubmit, trigger, formState: { errors, isSubmitting } } = useForm({ resolver: u(auditSchema) });
	const onSubmit = handleSubmit(async (values) => {
		setServerError(null);
		try {
			const res = await submit({ data: values });
			if (res && res.id) setReportUrl(`/audits/${res.id}`);
			setDone(true);
		} catch {
			setDone(true);
		}
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessCard, { reportUrl });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "relative z-10 w-full overflow-hidden card-elevated p-6 sm:p-9 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between border-b border-line pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow-chip mb-1",
				children: [
					"Diagnostic Step ",
					step,
					" of 2"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold text-foreground mt-1",
				children: step === 1 ? "Identify Your Primary Bottleneck" : "Coaching Business Details"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-bold text-accent",
				children: [step, "/2"]
			})]
		}), step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What is your biggest acquisition bottleneck right now?",
					required: true,
					error: errors.biggestChallenge?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls(!!errors.biggestChallenge),
						defaultValue: "",
						...register("biggestChallenge"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select your primary challenge"
						}), biggestChallenges.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: async () => {
						if (await trigger("biggestChallenge")) setStep(2);
					},
					className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01] hover:opacity-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proceed to Step 2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confidential diagnostic. No spam." })]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 animate-in fade-in duration-300 text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "First Name",
						required: true,
						error: errors.firstName?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							autoComplete: "given-name",
							placeholder: "Alex",
							className: inputCls(!!errors.firstName),
							...register("firstName")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email Address",
						required: true,
						error: errors.email?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							autoComplete: "email",
							placeholder: "alex@coaching.com",
							className: inputCls(!!errors.email),
							...register("email")
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Website URL",
						error: errors.websiteUrl?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "url",
							placeholder: "https://...",
							className: inputCls(!!errors.websiteUrl),
							...register("websiteUrl")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Instagram or Social Profile",
						required: true,
						error: errors.socialMediaLink?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "@handle or profile URL",
							className: inputCls(!!errors.socialMediaLink),
							...register("socialMediaLink")
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Coaching Niche",
							required: true,
							error: errors.coachingNiche?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Executive or Fitness",
								className: inputCls(!!errors.coachingNiche),
								...register("coachingNiche")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Main Program Offer",
							required: true,
							error: errors.offerDescription?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "12 Week Mastery",
								className: inputCls(!!errors.offerDescription),
								...register("offerDescription")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Offer Price",
							required: true,
							error: errors.offerPrice?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "$3,000",
								className: inputCls(!!errors.offerPrice),
								...register("offerPrice")
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Approx Monthly Inquiries",
							error: errors.monthlyInquiries?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "30 to 50 inquiries",
								className: inputCls(!!errors.monthlyInquiries),
								...register("monthlyInquiries")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Monthly Booked Calls",
							error: errors.monthlyBookedCalls?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "5 to 10 calls",
								className: inputCls(!!errors.monthlyBookedCalls),
								...register("monthlyBookedCalls")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Primary Traffic Source",
							error: errors.primaryLeadSource?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Instagram or Referrals",
								className: inputCls(!!errors.primaryLeadSource),
								...register("primaryLeadSource")
							})
						})
					]
				}),
				serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive border border-destructive/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: serverError })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setStep(1),
						className: "rounded-full border border-line bg-surface px-5 py-3.5 text-xs font-semibold text-foreground hover:bg-surface-2 transition",
						children: "Back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isSubmitting,
						className: "flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01] hover:opacity-95 disabled:opacity-50",
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Analyzing Architecture..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REQUEST PIPELINE DIAGNOSTIC EVALUATION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })] })
					})]
				})
			]
		})]
	});
}
function SuccessCard({ reportUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-elevated p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-xl font-bold text-foreground",
				children: "Diagnostic Audit Generated"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-md text-xs text-muted-foreground leading-relaxed",
				children: "We have mapped your complete client journey and identified your primary revenue leakage points."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: reportUrl || "/coach-client-acquisition",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Your Personalized Diagnostic Report" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
				})
			})
		]
	});
}
function Field({ label, required, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mb-1 block text-xs font-semibold text-foreground",
			children: [
				label,
				" ",
				required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: "*"
				})
			]
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[11px] text-destructive font-medium",
			children: error
		})
	] });
}
function inputCls(hasError) {
	return `w-full rounded-xl border bg-surface px-3.5 py-2.5 text-xs text-foreground outline-none transition focus:border-accent focus:bg-white ${hasError ? "border-destructive focus:border-destructive" : "border-line"}`;
}
function FloatingDock() {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-3 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? "translate-y-0" : "translate-y-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "liquid-glass flex h-14 max-w-4xl w-full items-center justify-between gap-2 sm:gap-6 rounded-full px-4 sm:px-6 shadow-xl border border-white/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-1.5 text-base font-extrabold tracking-tight text-foreground pl-1",
					children: ["DUXIO ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-6 text-xs font-semibold text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#vsl",
							className: "hover:text-foreground transition flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3 text-accent fill-current" }), " Executive Briefing"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#calculator",
							className: "hover:text-foreground transition flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-3 w-3 text-accent" }), " Leak Calculator"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#leaks",
							className: "hover:text-foreground transition flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-3 w-3 text-accent" }), " The 5 Leaks"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#system",
							className: "hover:text-foreground transition flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3 w-3 text-accent" }), " The Architecture"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#faq",
							className: "hover:text-foreground transition flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3 w-3 text-accent" }), " Questions"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-bold text-white shadow-[0_0_15px_rgba(var(--accent),0.3)] transition-all hover:scale-[1.02] hover:opacity-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request Diagnostic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-xl border-none bg-transparent p-0 shadow-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "sr-only",
								children: "Pipeline Diagnostic Evaluation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "sr-only",
								children: "Submit your details to request an architecture evaluation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditForm, {})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-surface text-foreground",
						onClick: () => setMobileMenuOpen(!mobileMenuOpen),
						"aria-label": "Toggle navigation menu",
						children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})]
				})
			]
		})
	}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-4 top-20 z-40 rounded-3xl liquid-glass p-6 shadow-2xl border border-white/60 md:hidden animate-in fade-in slide-in-from-top-3 duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex flex-col gap-4 text-xs font-bold text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#vsl",
					onClick: () => setMobileMenuOpen(false),
					className: "flex items-center gap-2 p-2 rounded-xl hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 text-accent fill-current" }), " Executive Briefing"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#calculator",
					onClick: () => setMobileMenuOpen(false),
					className: "flex items-center gap-2 p-2 rounded-xl hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-3.5 w-3.5 text-accent" }), " Pipeline Bleed Calculator"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#leaks",
					onClick: () => setMobileMenuOpen(false),
					className: "flex items-center gap-2 p-2 rounded-xl hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-3.5 w-3.5 text-accent" }), " The 5 Broken Handshakes"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#system",
					onClick: () => setMobileMenuOpen(false),
					className: "flex items-center gap-2 p-2 rounded-xl hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5 text-accent" }), " The Duxio Architecture"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#faq",
					onClick: () => setMobileMenuOpen(false),
					className: "flex items-center gap-2 p-2 rounded-xl hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5 text-accent" }), " Frequently Asked Questions"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2 border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient py-3.5 text-xs font-bold text-white shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request Pipeline Diagnostic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-xl border-none bg-transparent p-0 shadow-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "sr-only",
								children: "Pipeline Diagnostic Evaluation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "sr-only",
								children: "Submit your details to request an architecture evaluation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditForm, {})
						]
					})] })
				})
			]
		})
	})] });
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDock, {});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-black/[0.06] bg-white py-12 text-center text-xs text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "© 2026 Duxio. Client Acquisition Systems for Established Coaches. All rights reserved."
			})
		})
	});
}
//#endregion
export { DialogTitle as a, SiteHeader as c, DialogDescription as i, Dialog as n, DialogTrigger as o, DialogContent as r, SiteFooter as s, AuditForm as t };
