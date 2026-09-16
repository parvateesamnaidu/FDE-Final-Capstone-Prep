(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/archive-binder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArchiveBinder",
    ()=>ArchiveBinder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-archive.mjs [app-client] (ecmascript) <export default as FileArchive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$unplug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unplug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/unplug.mjs [app-client] (ecmascript) <export default as Unplug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$archive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyze-archive.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ArchiveBinder({ assessment, onBound, onReset }) {
    _s();
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArchiveBinder.useCallback[handleFile]": async (file)=>{
            if (!file) return;
            if (!file.name.toLowerCase().endsWith(".zip")) {
                setError("Drop the .zip archive (directory trees inside folders are not read).");
                return;
            }
            setBusy(true);
            setError(null);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$archive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeArchive"])(file);
                onBound(result);
            } catch (e) {
                setError(e instanceof Error ? e.message : "Could not read that zip.");
            } finally{
                setBusy(false);
            }
        }
    }["ArchiveBinder.useCallback[handleFile]"], [
        onBound
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onDragOver: (e)=>{
            e.preventDefault();
            setDragging(true);
        },
        onDragLeave: ()=>setDragging(false),
        onDrop: (e)=>{
            e.preventDefault();
            setDragging(false);
            void handleFile(e.dataTransfer.files[0]);
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("rounded-xl border border-dashed p-3 transition-colors", dragging ? "border-teal-600 bg-teal-50" : "border-border bg-card/60"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2.5",
                    children: [
                        assessment.source === "archive" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__["FileArchive"], {
                            className: "mt-0.5 size-4 shrink-0 text-teal-700"
                        }, void 0, false, {
                            fileName: "[project]/components/archive-binder.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$unplug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unplug$3e$__["Unplug"], {
                            className: "mt-0.5 size-4 shrink-0 text-amber-700"
                        }, void 0, false, {
                            fileName: "[project]/components/archive-binder.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-foreground",
                                    children: assessment.source === "archive" ? `Bound · ${assessment.archiveName}` : "Archive not bound"
                                }, void 0, false, {
                                    fileName: "[project]/components/archive-binder.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] leading-relaxed text-muted-foreground",
                                    children: assessment.source === "archive" ? `${assessment.fileCount} files · ${assessment.stack.join(" · ")}` : "Windows paths did not mount in this environment. Drop AI_FDE_CGT_Patient_to_Batch_Orchestration.zip to replace inferred ratings with file evidence."
                                }, void 0, false, {
                                    fileName: "[project]/components/archive-binder.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] text-destructive",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/archive-binder.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/archive-binder.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/archive-binder.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                        assessment.source === "archive" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "xs",
                            variant: "ghost",
                            onClick: ()=>{
                                onReset();
                                setError(null);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    "data-icon": "inline-start"
                                }, void 0, false, {
                                    fileName: "[project]/components/archive-binder.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                "Unbind"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/archive-binder.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("inline-flex h-6 cursor-pointer items-center gap-1 rounded-[min(var(--radius-md),10px)] border border-border bg-background px-2 text-xs font-medium hover:bg-muted", busy && "pointer-events-none opacity-50"),
                            children: [
                                busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                    className: "size-3 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/archive-binder.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__["FileArchive"], {
                                    className: "size-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/archive-binder.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                busy ? "Reading…" : "Bind zip",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: ".zip,application/zip",
                                    className: "sr-only",
                                    onChange: (e)=>{
                                        void handleFile(e.target.files?.[0]);
                                        e.target.value = "";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/archive-binder.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/archive-binder.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/archive-binder.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/archive-binder.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/archive-binder.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ArchiveBinder, "AJL0nAKF4zxsh5XCuld4V1mEVs4=");
_c = ArchiveBinder;
var _c;
__turbopack_context__.k.register(_c, "ArchiveBinder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/assessment-app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssessmentApp",
    ()=>AssessmentApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$archive$2d$binder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/archive-binder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$debt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-debt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$fde$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-fde.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$roadmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-roadmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$strengths$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-strengths.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/status-badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fde-stages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2d$assessment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seed-assessment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const NAV = [
    {
        id: "overview",
        label: "1 Summary"
    },
    {
        id: "strengths",
        label: "2 Strengths"
    },
    {
        id: "debt",
        label: "3 Debt"
    },
    {
        id: "fde",
        label: "4 FDE map"
    },
    {
        id: "roadmap",
        label: "5 Roadmap"
    },
    {
        id: "inspect",
        label: "Tree"
    }
];
function AssessmentApp() {
    _s();
    const [assessment, setAssessment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2d$assessment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_ASSESSMENT"]);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const critical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssessmentApp.useMemo[critical]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FDE_STAGES"].filter({
                "AssessmentApp.useMemo[critical]": (s)=>assessment.stages[s.id]?.status === "Critical Failure"
            }["AssessmentApp.useMemo[critical]"])
    }["AssessmentApp.useMemo[critical]"], [
        assessment
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-full bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-border bg-[color:var(--paper-band)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold tracking-[0.18em] text-teal-800 uppercase",
                                            children: "FDE architectural assessment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-heading mt-1 max-w-2xl text-2xl leading-snug text-pretty break-words text-foreground sm:text-3xl",
                                            children: "CGT patient-to-batch orchestration"
                                        }, void 0, false, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 max-w-2xl text-sm text-muted-foreground",
                                            children: "Brownfield reverse-engineering against the 21-stage AI FDE operating model. Inherited estate: EY Batch 2 capstone."
                                        }, void 0, false, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/assessment-app.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-border bg-card px-3 py-2 text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] tracking-wide text-muted-foreground uppercase",
                                            children: "Maturity index"
                                        }, void 0, false, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-heading text-3xl tabular-nums",
                                            children: assessment.overallScore
                                        }, void 0, false, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-[14rem] text-[11px] leading-4 text-muted-foreground",
                                            children: assessment.overallLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/assessment-app.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/assessment-app.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$archive$2d$binder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveBinder"], {
                            assessment: assessment,
                            onBound: setAssessment,
                            onReset: ()=>setAssessment(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2d$assessment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_ASSESSMENT"])
                        }, void 0, false, {
                            fileName: "[project]/components/assessment-app.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/assessment-app.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/assessment-app.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8",
                    children: NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${n.id}`,
                            onClick: ()=>setActive(n.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("shrink-0 rounded-full px-3 py-1 text-xs font-medium", active === n.id ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
                            children: n.label
                        }, n.id, false, {
                            fileName: "[project]/components/assessment-app.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/assessment-app.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/assessment-app.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid max-w-6xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-8 lg:py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-16 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                                    children: "Critical stages"
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-app.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                critical.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: critical.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#stage-${s.id}`,
                                                className: "block rounded-lg border border-red-200 bg-red-50/80 p-2 hover:bg-red-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[10px] text-red-800",
                                                        children: [
                                                            "S",
                                                            String(s.id).padStart(2, "0")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/assessment-app.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-0.5 block text-xs font-medium leading-4 text-red-950",
                                                        children: s.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assessment-app.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assessment-app.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this)
                                        }, s.id, false, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-app.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "No critical-failure stages."
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-app.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 pt-2",
                                    children: [
                                        "Mature",
                                        "Needs Improvement",
                                        "Missing",
                                        "Critical Failure"
                                    ].map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                    status: st
                                                }, void 0, false, {
                                                    fileName: "[project]/components/assessment-app.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[11px] text-muted-foreground",
                                                    children: Object.values(assessment.stages).filter((x)=>x.status === st).length
                                                }, void 0, false, {
                                                    fileName: "[project]/components/assessment-app.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, st, true, {
                                            fileName: "[project]/components/assessment-app.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-app.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/assessment-app.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-app.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "space-y-16 pb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionOverview"], {
                                assessment: assessment
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-app.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$strengths$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionStrengths"], {
                                assessment: assessment
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-app.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$debt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionDebt"], {
                                assessment: assessment
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-app.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$fde$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionFde"], {
                                assessment: assessment
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-app.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$roadmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionRoadmap"], {}, void 0, false, {
                                fileName: "[project]/components/assessment-app.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "inspect",
                                className: "scroll-mt-24 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold tracking-[0.16em] text-teal-800 uppercase",
                                                children: "Bound tree"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-app.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-heading text-2xl",
                                                children: "Directory signals"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-app.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-app.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "max-h-[420px] overflow-auto rounded-2xl border border-border bg-card p-4 font-mono text-[11px] leading-5 text-foreground/80",
                                        children: assessment.treePreview.join("\n") || "(empty)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-app.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Bind the zip to populate this tree from the archive. Paths listed are the densest three-level prefixes, not a full listing."
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-app.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-app.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-app.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-app.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/assessment-app.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(AssessmentApp, "n8bh70N9pNOr9BJuZiMRZPLo0BI=");
_c = AssessmentApp;
var _c;
__turbopack_context__.k.register(_c, "AssessmentApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/section-debt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionDebt",
    ()=>SectionDebt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/status-badge.tsx [app-client] (ecmascript)");
;
;
function SectionDebt({ assessment }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "debt",
        className: "scroll-mt-24 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold tracking-[0.16em] text-teal-800 uppercase",
                        children: "3 · Problems and technical debt"
                    }, void 0, false, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-2xl leading-snug text-pretty break-words sm:text-3xl",
                        children: "Architectural flaws, maintainability, security, tests"
                    }, void 0, false, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl text-sm leading-relaxed text-muted-foreground",
                        children: "Ranked by harm: identity and unsupervised release first, then dual spines, then missing evals, then packaging. Cosmetic refactors wait."
                    }, void 0, false, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-debt.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: assessment.problems.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-2xl border border-border bg-card p-5 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold",
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-debt.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: p.severity === "high" ? "rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-800" : p.severity === "medium" ? "rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-900" : "rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700",
                                        children: [
                                            p.severity,
                                            " severity"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/section-debt.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-debt.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-7 text-foreground/90",
                                children: p.body
                            }, void 0, false, {
                                fileName: "[project]/components/section-debt.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-3 space-y-1",
                                children: p.evidence.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "font-mono text-[11px] leading-5 text-muted-foreground",
                                        children: e
                                    }, e, false, {
                                        fileName: "[project]/components/section-debt.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/section-debt.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, p.title, true, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/section-debt.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            assessment.securityHits.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-red-200 bg-red-50/60 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-red-900",
                        children: "Security & unsafe-execution hits"
                    }, void 0, false, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 space-y-1",
                        children: assessment.securityHits.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "font-mono text-[11px] text-red-900/80",
                                children: h
                            }, h, false, {
                                fileName: "[project]/components/section-debt.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-debt.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: assessment.source === "archive" ? "No secret-like assignments or eval/pickle patterns matched the inspector’s rules. That is not a penetration test." : "Security posture is unknown until the archive is bound. Default assumption: treat as unsafe to connect to plant systems."
            }, void 0, false, {
                fileName: "[project]/components/section-debt.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-border bg-card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "Testing & observability"
                            }, void 0, false, {
                                fileName: "[project]/components/section-debt.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                status: assessment.stages[16]?.status ?? "Missing"
                            }, void 0, false, {
                                fileName: "[project]/components/section-debt.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm leading-6 text-muted-foreground",
                        children: assessment.testFiles.length ? `${assessment.testFiles.length} test file(s) detected. Extend them with identity-swap, slot-collision, and illegal-transition cases before adding more UI.` : "No test files detected (or archive unbound). Stage 16 is the cheapest gate that prevents a second decade of unfalsifiable orchestration."
                    }, void 0, false, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    assessment.testFiles.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 max-h-40 space-y-1 overflow-auto",
                        children: assessment.testFiles.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "font-mono text-[11px] text-muted-foreground",
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/section-debt.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/section-debt.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-debt.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-debt.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SectionDebt;
var _c;
__turbopack_context__.k.register(_c, "SectionDebt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/section-fde.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionFde",
    ()=>SectionFde
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/status-badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fde-stages.ts [app-client] (ecmascript)");
;
;
;
function SectionFde({ assessment }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "fde",
        className: "scroll-mt-24 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold tracking-[0.16em] text-teal-800 uppercase",
                        children: "4 · 21-stage FDE model"
                    }, void 0, false, {
                        fileName: "[project]/components/section-fde.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-2xl leading-snug text-pretty break-words sm:text-3xl",
                        children: "Status and evidence for every operating-model stage"
                    }, void 0, false, {
                        fileName: "[project]/components/section-fde.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl text-sm leading-relaxed text-muted-foreground",
                        children: "Rubric encoded from the 21-stage AI FDE operating model: Discover (1–6), Design (7–12), Build & Prove (13–17), Launch & Operate (18–21). Each stage ends in a decision. Skipping a gate is how this estate degraded."
                    }, void 0, false, {
                        fileName: "[project]/components/section-fde.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-fde.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 sm:grid-cols-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHASES"].map((p)=>{
                    const ids = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FDE_STAGES"].filter((s)=>s.phase === p.id).map((s)=>s.id);
                    const crit = ids.filter((id)=>assessment.stages[id]?.status === "Critical Failure").length;
                    const miss = ids.filter((id)=>assessment.stages[id]?.status === "Missing").length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                                children: p.range
                            }, void 0, false, {
                                fileName: "[project]/components/section-fde.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-sm font-medium",
                                children: p.label
                            }, void 0, false, {
                                fileName: "[project]/components/section-fde.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] text-muted-foreground",
                                children: [
                                    crit,
                                    " critical · ",
                                    miss,
                                    " missing"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-fde.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/components/section-fde.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/section-fde.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "space-y-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FDE_STAGES"].map((stage)=>{
                    const ev = assessment.stages[stage.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        id: `stage-${stage.id}`,
                        className: "scroll-mt-24 rounded-2xl border border-border bg-card p-4 sm:p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                                                children: [
                                                    "Stage ",
                                                    String(stage.id).padStart(2, "0"),
                                                    " ·",
                                                    " ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHASES"].find((p)=>p.id === stage.phase)?.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/section-fde.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-0.5 text-base font-semibold",
                                                children: stage.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/section-fde.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm leading-6 text-muted-foreground",
                                                children: stage.question
                                            }, void 0, false, {
                                                fileName: "[project]/components/section-fde.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/section-fde.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    ev ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                        status: ev.status,
                                        className: "shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-fde.tsx",
                                        lineNumber: 66,
                                        columnNumber: 23
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-fde.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            ev ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-xl bg-muted/50 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                                        children: ev.inferred ? "Inferred status" : "Bound evidence"
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-fde.tsx",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm leading-6",
                                        children: ev.summary
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-fde.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1",
                                        children: ev.evidence.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "font-mono text-[11px] leading-5 text-muted-foreground",
                                                children: e
                                            }, e, false, {
                                                fileName: "[project]/components/section-fde.tsx",
                                                lineNumber: 77,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-fde.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-fde.tsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "cursor-pointer text-xs font-medium text-teal-800",
                                        children: "Exit criteria, expected artifacts, CGT lens"
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-fde.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 grid gap-4 text-sm leading-6 md:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                                                        children: "Exit criteria"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/section-fde.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-1 list-disc space-y-1 pl-4",
                                                        children: stage.exitCriteria.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/components/section-fde.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/section-fde.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/section-fde.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                                                        children: "Artifacts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/section-fde.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-1 list-disc space-y-1 pl-4",
                                                        children: stage.expectedArtifacts.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/components/section-fde.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/section-fde.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/section-fde.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                                                        children: "CGT lens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/section-fde.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1",
                                                        children: stage.cgtLens
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/section-fde.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/section-fde.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/section-fde.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-fde.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stage.id, true, {
                        fileName: "[project]/components/section-fde.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/section-fde.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-fde.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = SectionFde;
var _c;
__turbopack_context__.k.register(_c, "SectionFde");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/section-overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionOverview",
    ()=>SectionOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/status-badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/status-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fde-stages.ts [app-client] (ecmascript)");
;
;
;
;
function SectionOverview({ assessment }) {
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countByStatus"])(Object.values(assessment.stages).map((s)=>s.status));
    const criticalStages = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FDE_STAGES"].filter((s)=>assessment.stages[s.id]?.status === "Critical Failure");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "overview",
        className: "scroll-mt-24 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold tracking-[0.16em] text-teal-800 uppercase",
                        children: "1 · Executive summary"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-2xl leading-snug text-pretty break-words text-foreground sm:text-3xl",
                        children: "Original problem, users, and the gap from intent to brownfield"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl text-sm leading-relaxed text-muted-foreground",
                        children: "An inherited CGT orchestration estate, judged as a Senior FDE would judge it: by the operational outcome it was built to hold, not by how many agents it contains."
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "FDE maturity",
                        value: `${assessment.overallScore}`,
                        hint: assessment.overallLabel
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "Mature stages",
                        value: String(counts.mature),
                        hint: "of 21"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "Critical gaps",
                        value: String(counts.critical),
                        hint: criticalStages.map((s)=>`S${s.id}`).join(" · ") || "none"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "Evidence",
                        value: assessment.source === "archive" ? "Bound" : "Inferred",
                        hint: assessment.source === "archive" ? `${assessment.fileCount} files` : "bind the zip to cite paths"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold tracking-tight",
                        children: "Core problem statement"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[15px] leading-7 text-foreground/90",
                        children: assessment.coreProblem
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
                                        children: "Initial scope"
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-overview.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-6",
                                        children: assessment.initialVsCurrent.initial
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-overview.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-overview.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
                                        children: "Current state"
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-overview.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-6",
                                        children: assessment.initialVsCurrent.current
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-overview.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-overview.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold tracking-tight",
                        children: "Target users"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "The system is an operations spine, not a patient app. Consumers are the people who can lose a slot, a bag, or a lot."
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 grid gap-3 md:grid-cols-2",
                        children: assessment.users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "rounded-xl border border-border bg-card p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium",
                                        children: u.role
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-overview.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm leading-6 text-muted-foreground",
                                        children: u.job
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-overview.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, u.role, true, {
                                fileName: "[project]/components/section-overview.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            assessment.readmeExcerpt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "rounded-xl border border-border bg-muted/40 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                        className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                        children: "README excerpt from bound archive"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-2 max-h-48 overflow-auto font-mono text-[11px] leading-5 whitespace-pre-wrap text-foreground/80",
                        children: assessment.readmeExcerpt
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        status: "Mature"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        status: "Needs Improvement"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        status: "Missing"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        status: "Critical Failure"
                    }, void 0, false, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] leading-6 text-muted-foreground",
                        children: [
                            counts.improve,
                            " need improvement · ",
                            counts.missing,
                            " missing"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/section-overview.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-overview.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = SectionOverview;
function Stat({ label, value, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 font-heading text-2xl text-foreground",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] leading-4 text-muted-foreground",
                children: hint
            }, void 0, false, {
                fileName: "[project]/components/section-overview.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-overview.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c1 = Stat;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionOverview");
__turbopack_context__.k.register(_c1, "Stat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/section-roadmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionRoadmap",
    ()=>SectionRoadmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roadmap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/roadmap.ts [app-client] (ecmascript)");
;
;
function SectionRoadmap() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "roadmap",
        className: "scroll-mt-24 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold tracking-[0.16em] text-teal-800 uppercase",
                        children: "5 · Remediation plan"
                    }, void 0, false, {
                        fileName: "[project]/components/section-roadmap.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-2xl leading-snug text-pretty break-words sm:text-3xl",
                        children: "Long-term vision and the gates that stop a second collapse"
                    }, void 0, false, {
                        fileName: "[project]/components/section-roadmap.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl text-sm leading-relaxed text-muted-foreground",
                        children: "Transition pattern: strangler fig around a guarded Patient–Collection–Slot–Batch spine. Do not rewrite the estate. Do not connect it to MES until Wave 3 evals are red on identity-swap cases."
                    }, void 0, false, {
                        fileName: "[project]/components/section-roadmap.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-roadmap.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "space-y-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roadmap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROADMAP"].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-2xl border border-border bg-card p-5 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-semibold text-teal-800",
                                        children: w.id
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-roadmap.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold",
                                        children: w.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-roadmap.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-roadmap.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-7",
                                children: w.intent
                            }, void 0, false, {
                                fileName: "[project]/components/section-roadmap.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[12px] text-muted-foreground",
                                children: [
                                    "Pattern: ",
                                    w.pattern,
                                    " · Gates: stages ",
                                    w.stageGates.join(", ")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-roadmap.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-3 list-disc space-y-1 pl-5 text-sm leading-6",
                                children: w.outcomes.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: o
                                    }, o, false, {
                                        fileName: "[project]/components/section-roadmap.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/section-roadmap.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, w.id, true, {
                        fileName: "[project]/components/section-roadmap.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/section-roadmap.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-heading text-xl",
                        children: "Governance and process changes"
                    }, void 0, false, {
                        fileName: "[project]/components/section-roadmap.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "These are the FDE stage-gates that prevent the next inheritor from writing the same assessment."
                    }, void 0, false, {
                        fileName: "[project]/components/section-roadmap.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 grid gap-3 md:grid-cols-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$roadmap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOVERNANCE"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "rounded-xl border border-border bg-card p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        children: g.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-roadmap.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm leading-6 text-muted-foreground",
                                        children: g.body
                                    }, void 0, false, {
                                        fileName: "[project]/components/section-roadmap.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, g.title, true, {
                                fileName: "[project]/components/section-roadmap.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/section-roadmap.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-roadmap.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-roadmap.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SectionRoadmap;
var _c;
__turbopack_context__.k.register(_c, "SectionRoadmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/section-strengths.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionStrengths",
    ()=>SectionStrengths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionStrengths({ assessment }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "strengths",
        className: "scroll-mt-24 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold tracking-[0.16em] text-teal-800 uppercase",
                        children: "2 · What is working"
                    }, void 0, false, {
                        fileName: "[project]/components/section-strengths.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-2xl leading-snug text-pretty break-words sm:text-3xl",
                        children: "Stable core, useful patterns, and value already delivered"
                    }, void 0, false, {
                        fileName: "[project]/components/section-strengths.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl text-sm leading-relaxed text-muted-foreground",
                        children: "Brownfield work starts by protecting what is true. Do not rewrite the outcome boundary, the implied scope fence, or any adapter that already tells the truth about a handoff."
                    }, void 0, false, {
                        fileName: "[project]/components/section-strengths.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-strengths.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "space-y-4",
                children: assessment.strengths.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-2xl border border-border bg-card p-5 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold tracking-wide text-teal-800 uppercase",
                                children: [
                                    "Strength ",
                                    String(i + 1).padStart(2, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/section-strengths.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-1 text-base font-semibold",
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/components/section-strengths.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-7 text-foreground/90",
                                children: s.body
                            }, void 0, false, {
                                fileName: "[project]/components/section-strengths.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-3 space-y-1",
                                children: s.evidence.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "font-mono text-[11px] leading-5 text-muted-foreground",
                                        children: e
                                    }, e, false, {
                                        fileName: "[project]/components/section-strengths.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/section-strengths.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.title, true, {
                        fileName: "[project]/components/section-strengths.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/section-strengths.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-strengths.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SectionStrengths;
var _c;
__turbopack_context__.k.register(_c, "SectionStrengths");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/status-badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/status-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
;
;
function StatusBadge({ status, className }) {
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_STYLES"][status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium tracking-wide", s.className, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("size-1.5 rounded-full", s.dot)
            }, void 0, false, {
                fileName: "[project]/components/status-badge.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            s.label
        ]
    }, void 0, true, {
        fileName: "[project]/components/status-badge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/analyze-archive.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeArchive",
    ()=>analyzeArchive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fde-stages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2d$assessment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seed-assessment.ts [app-client] (ecmascript)");
;
;
;
const TEXT_EXT = /\.(md|txt|py|ts|tsx|js|jsx|json|ya?ml|toml|ini|cfg|xml|html|css|sql|java|kt|go|rs|rb|php|cs|tf|env|sh|ps1|csv|ipynb|dockerfile|gradle|properties|proto|graphql|r|scala)$/i;
const SKIP_DIR = /(^|\/)(node_modules|\.git|dist|build|\.next|__pycache__|\.venv|venv|target|\.idea|\.vscode)(\/|$)/i;
function normalize(path) {
    return path.replace(/\\/g, "/").replace(/^\.\//, "");
}
function isTextPath(path) {
    const base = path.split("/").pop() ?? path;
    if (/^dockerfile/i.test(base)) return true;
    if (/^makefile$/i.test(base)) return true;
    if (base.startsWith(".env")) return true;
    return TEXT_EXT.test(base);
}
function lower(s) {
    return s.toLowerCase();
}
function includesAny(hay, needles) {
    const h = lower(hay);
    return needles.some((n)=>h.includes(lower(n)));
}
function bump(current, next) {
    if (current === "Critical Failure") return current;
    const order = [
        "Missing",
        "Needs Improvement",
        "Mature"
    ];
    return order.indexOf(next) > order.indexOf(current) ? next : current;
}
function fail() {
    return "Critical Failure";
}
function stackFromFiles(paths, contents) {
    const stack = new Set();
    const joined = paths.join("\n").toLowerCase();
    const blob = contents.map((c)=>c.content.slice(0, 4000)).join("\n").toLowerCase();
    if (paths.some((p)=>p.endsWith("package.json"))) stack.add("Node.js / TypeScript");
    if (paths.some((p)=>/pyproject\.toml|requirements\.txt|setup\.py$/.test(p))) stack.add("Python");
    if (includesAny(joined, [
        "langgraph",
        "langchain"
    ])) stack.add("LangChain / LangGraph");
    if (includesAny(joined, [
        "airflow"
    ])) stack.add("Apache Airflow");
    if (includesAny(joined, [
        "temporal"
    ])) stack.add("Temporal");
    if (includesAny(joined, [
        "celery"
    ])) stack.add("Celery");
    if (includesAny(joined, [
        "prefect"
    ])) stack.add("Prefect");
    if (includesAny(joined, [
        "fastapi"
    ])) stack.add("FastAPI");
    if (includesAny(joined, [
        "flask"
    ])) stack.add("Flask");
    if (includesAny(joined, [
        "django"
    ])) stack.add("Django");
    if (includesAny(joined, [
        "streamlit"
    ])) stack.add("Streamlit");
    if (includesAny(joined, [
        "next.config",
        "app/page"
    ])) stack.add("Next.js");
    if (includesAny(joined, [
        "docker-compose",
        "dockerfile"
    ])) stack.add("Docker");
    if (includesAny(joined, [
        ".github/workflows"
    ])) stack.add("GitHub Actions");
    if (includesAny(blob, [
        "openai",
        "azure openai",
        "anthropic",
        "gemini"
    ])) stack.add("Foundation-model API");
    if (includesAny(joined, [
        "terraform"
    ])) stack.add("Terraform");
    if (includesAny(joined, [
        "kubernetes",
        "k8s",
        "helm"
    ])) stack.add("Kubernetes");
    return [
        ...stack
    ];
}
function treePreview(paths) {
    const top = new Map();
    for (const p of paths){
        const parts = p.split("/").filter(Boolean);
        const key = parts.slice(0, Math.min(3, parts.length)).join("/");
        top.set(key, (top.get(key) ?? 0) + 1);
    }
    return [
        ...top.entries()
    ].sort((a, b)=>b[1] - a[1]).slice(0, 40).map(([k, n])=>`${k}${n > 1 ? `  (${n})` : ""}`);
}
function readmeExcerpt(files) {
    const readme = files.find((f)=>/readme/i.test(f.path));
    if (!readme) return null;
    return readme.content.replace(/\r/g, "").trim().slice(0, 900);
}
const SECRET_PATTERNS = [
    {
        name: "AWS key",
        re: /AKIA[0-9A-Z]{16}/
    },
    {
        name: "PEM private key",
        re: /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/
    },
    {
        name: "Generic API key assignment",
        re: /(api[_-]?key|secret[_-]?key|openai_api_key)\s*[:=]\s*['\"][^'\"]{8,}/i
    },
    {
        name: "Password assignment",
        re: /password\s*[:=]\s*['\"][^'\"]{4,}/i
    },
    {
        name: "Bearer token",
        re: /bearer\s+[A-Za-z0-9\-._~+/]+=*/i
    }
];
function securityHits(files) {
    const hits = [];
    for (const f of files){
        if (/\.(md|txt|csv)$/i.test(f.path) && !f.path.includes(".env")) continue;
        for (const p of SECRET_PATTERNS){
            if (p.re.test(f.content) && !/your[_-]?key|changeme|placeholder|xxx/i.test(f.content)) {
                hits.push(`${p.name} · ${f.path}`);
            }
        }
        if (/\beval\s*\(/.test(f.content) && /\.(py|js|ts)$/.test(f.path)) {
            hits.push(`Dynamic eval() · ${f.path}`);
        }
        if (/pickle\.loads|yaml\.load\s*\((?!.*Loader)/.test(f.content)) {
            hits.push(`Unsafe deserialize · ${f.path}`);
        }
        if (/execute\s*\(\s*[f\"'].*\+|f[\"'].*SELECT|\"SELECT .*\"\s*\+/.test(f.content)) {
            hits.push(`Possible SQL concat · ${f.path}`);
        }
    }
    return [
        ...new Set(hits)
    ].slice(0, 40);
}
function testFiles(paths) {
    return paths.filter((p)=>/(^|\/)(tests?|__tests__|spec)(\/|$)|(\.|_)(test|spec)\.(py|ts|tsx|js|jsx)$/i.test(p)).slice(0, 50);
}
function pathMatches(path, hints) {
    return includesAny(path, hints);
}
function contentMatches(files, hints) {
    return files.filter((f)=>includesAny(f.content, hints) || includesAny(f.path, hints));
}
async function analyzeArchive(file) {
    const zip = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loadAsync(file);
    const paths = [];
    const files = [];
    const entries = Object.values(zip.files);
    for (const entry of entries){
        if (entry.dir) continue;
        const path = normalize(entry.name);
        if (SKIP_DIR.test(path)) continue;
        if (path.endsWith(".ds_store") || path.endsWith("thumbs.db")) continue;
        paths.push(path);
        if (!isTextPath(path)) continue;
        try {
            const content = await entry.async("string");
            if (content.length > 400_000) {
                files.push({
                    path,
                    content: content.slice(0, 80_000),
                    size: content.length
                });
            } else {
                files.push({
                    path,
                    content,
                    size: content.length
                });
            }
        } catch  {
        // binary disguised as text
        }
    }
    const stack = stackFromFiles(paths, files);
    const tests = testFiles(paths);
    const secrets = securityHits(files);
    const blob = files.map((f)=>`${f.path}\n${f.content}`).join("\n").toLowerCase();
    const pathBlob = paths.join("\n").toLowerCase();
    const stages = {};
    for (const stage of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FDE_STAGES"]){
        const pathHits = paths.filter((p)=>pathMatches(p, stage.probes.pathHints));
        const contentHits = contentMatches(files, stage.probes.contentHints).slice(0, 8);
        const evidence = [
            ...pathHits.slice(0, 6).map((p)=>`path · ${p}`),
            ...contentHits.slice(0, 6).map((f)=>{
                const hint = stage.probes.contentHints.find((h)=>lower(f.content).includes(lower(h)));
                return `content · ${f.path}${hint ? ` (“${hint}”)` : ""}`;
            })
        ];
        const unique = [
            ...new Set(evidence)
        ];
        let status = unique.length === 0 ? "Missing" : "Needs Improvement";
        if (unique.length >= 4) status = "Needs Improvement";
        if (unique.length >= 3 && contentHits.length >= 2) status = "Needs Improvement";
        stages[stage.id] = {
            status,
            summary: unique.length === 0 ? `No files or content matched the probes for “${stage.name}”.` : `Matched ${unique.length} artifact signal(s) for “${stage.name}”. Quality still requires a human read of the cited files.`,
            evidence: unique.length ? unique : [
                "No matching paths or content."
            ],
            inferred: false
        };
    }
    const hasReadme = paths.some((p)=>/readme/i.test(p));
    const hasCharter = includesAny(pathBlob + blob, [
        "charter",
        "accepted outcome",
        "out of scope"
    ]);
    const hasAdr = paths.some((p)=>/adr|decision.record/i.test(p));
    const hasDomain = includesAny(blob, [
        "state machine",
        "transition"
    ]) && includesAny(blob, [
        "patient",
        "batch"
    ]);
    const hasCoi = includesAny(blob, [
        "chain of identity",
        "chain_of_identity",
        "coi_id",
        "isbt"
    ]);
    const hasBlockingCoi = hasCoi && includesAny(blob, [
        "mismatch",
        "reject",
        "abort",
        "illegal transition"
    ]);
    const hasHitl = includesAny(blob, [
        "human in the loop",
        "approval",
        "override"
    ]);
    const hasEval = paths.some((p)=>/eval|golden/i.test(p)) || includesAny(blob, [
        "eval case"
    ]);
    const hasOtel = includesAny(blob, [
        "opentelemetry",
        "structlog",
        "prometheus",
        "correlation"
    ]);
    const hasDocker = paths.some((p)=>/dockerfile|compose/i.test(p));
    const hasAuth = includesAny(blob, [
        "oauth",
        "rbac",
        "jwt",
        "openid"
    ]);
    const hasRunbook = includesAny(pathBlob, [
        "runbook",
        "rollback",
        "playbook"
    ]);
    const orchestrators = [
        "airflow",
        "temporal",
        "prefect",
        "celery",
        "langgraph",
        "langchain",
        "crewai"
    ].filter((k)=>pathBlob.includes(k) || blob.includes(k));
    const llmSpine = includesAny(blob, [
        "langgraph",
        "langchain",
        "crewai",
        "autogen"
    ]) && !includesAny(blob, [
        "deterministic",
        "state machine"
    ]);
    const hasTests = tests.length > 0;
    const hasPilot = includesAny(blob, [
        "pilot",
        "shadow mode",
        "feature flag"
    ]);
    const hasSlo = includesAny(blob, [
        "slo",
        "service review",
        "on-call",
        "oncall"
    ]);
    const set = (id, status, summary, extra = [])=>{
        const prev = stages[id];
        stages[id] = {
            status,
            summary,
            evidence: [
                ...new Set([
                    ...extra,
                    ...prev.evidence
                ])
            ].slice(0, 10),
            inferred: false
        };
    };
    if (hasReadme) {
        set(1, bump(stages[1].status, "Needs Improvement"), "README / docs present — inherit is started, but confirm owners, freeze list, and what was actually sold vs built.", paths.filter((p)=>/readme/i.test(p)).map((p)=>`path · ${p}`));
    }
    if (hasCharter || hasAdr) {
        set(6, bump(stages[6].status, "Needs Improvement"), "Charter or ADR language found. Check whether it names accepted outcome and stop conditions.");
    } else {
        set(6, "Missing", "No charter, ADR, or explicit in/out-of-scope language found. The zip name is not a substitute.");
    }
    if (hasDomain) {
        set(9, bump(stages[9].status, "Needs Improvement"), "Patient/batch plus transition language exists. Confirm illegal transitions are actually refused in code, not only described.");
    }
    if (llmSpine) {
        set(8, fail(), "Agent/graph framework appears without a documented deterministic spine. For CGT identity and slot exclusivity this is the wrong mechanism default.", orchestrators.map((o)=>`framework · ${o}`));
    } else if (orchestrators.length) {
        set(8, bump(stages[8].status, "Needs Improvement"), `Orchestration frameworks detected (${orchestrators.join(", ")}). Confirm COI/slot/disposition remain deterministic.`);
    }
    if (orchestrators.length >= 2) {
        set(14, fail(), `Multiple orchestration frameworks detected (${orchestrators.join(", ")}). Dual spines that both write batch status are a structural defect.`, orchestrators.map((o)=>`framework · ${o}`));
    } else if (orchestrators.length === 1) {
        set(14, bump(stages[14].status, "Needs Improvement"), "A single orchestration family is present. Confirm it is the sole writer of patient–batch state.");
    }
    if (hasCoi && hasBlockingCoi) {
        set(15, bump(stages[15].status, "Needs Improvement"), "COI language and mismatch/reject behavior found. This is necessary but not sufficient — verify every handoff is blocked, not logged.");
    } else if (hasCoi) {
        set(15, fail(), "COI appears as data, not as a blocking control (no mismatch/reject/illegal-transition signals). Identity-as-a-field is a patient-safety defect.");
    } else {
        set(15, fail(), "No Chain of Identity / ISBT language found. For autologous patient-to-batch orchestration this is a critical control gap.");
    }
    if (hasHitl) {
        set(10, bump(stages[10].status, "Needs Improvement"), "Approval/override language exists. Confirm the reviewer is shown identifiers and the rule that fired.");
    } else {
        set(10, "Missing", "No human-approval / override design found. A UI is not HITL.");
    }
    if (hasEval) {
        set(12, bump(stages[12].status, "Needs Improvement"), "Eval/golden artifacts exist. Require identity-swap and slot-collision cases before calling this mature.");
    } else {
        set(12, "Missing", "No eval plan, golden set, or safety-case artifacts found.");
    }
    if (hasTests && hasOtel) {
        set(16, bump(stages[16].status, "Needs Improvement"), `Tests (${tests.length}) and some observability signals exist. Still need identity scenario tests and correlation IDs on every material action.`);
    } else if (hasTests) {
        set(16, bump(stages[16].status, "Needs Improvement"), `${tests.length} test file(s) found. Observability/eval harness still weak.`);
    } else {
        set(16, "Missing", "No unit/integration test files found. Cannot prove identity or disposition behavior.");
    }
    if (hasPilot) {
        set(17, bump(stages[17].status, "Needs Improvement"), "Pilot / shadow / flag language found. Confirm named users, envelope, and fallback.");
    } else {
        set(17, "Missing", "No bounded-pilot protocol, shadow mode, or feature flag found.");
    }
    if (secrets.length) {
        set(18, fail(), `Secret or unsafe-execution patterns found (${secrets.length}). Do not deploy or connect to plant systems.`, secrets.slice(0, 5));
    } else if (hasDocker && hasAuth) {
        set(18, bump(stages[18].status, "Needs Improvement"), "Containerization and auth signals exist. Still need validation strategy for COI/disposition and secret management.");
    } else if (hasDocker) {
        set(18, "Needs Improvement", "Runtime packaging exists without a clear auth/validation story. Not production-hardened.");
    } else {
        set(18, "Missing", "No container/IaC/auth/validation packaging found.");
    }
    if (hasRunbook) {
        set(19, bump(stages[19].status, "Needs Improvement"), "Runbook/rollback artifacts found. Confirm they are lot-aware compensating actions, not just process restart.");
    } else {
        set(19, "Missing", "No runbook, rollback, or cutover record found.");
    }
    if (hasSlo) {
        set(20, bump(stages[20].status, "Needs Improvement"), "Ownership/ops language found. Confirm named receiving owners and hypercare for in-flight lots.");
        set(21, bump(stages[21].status, "Needs Improvement"), "Operate-stage language found. Productization vs retirement of shadow tools still needs an explicit decision.");
    } else {
        set(20, "Missing", "No handoff, on-call, or operations pack found.");
        set(21, "Missing", "No SLO, service review, or retirement criteria found.");
    }
    const identitySwap = includesAny(blob, [
        "identity swap",
        "wrong patient",
        "mismatch test"
    ]);
    if (!identitySwap) {
        stages[4] = {
            ...stages[4],
            status: stages[4].status === "Mature" ? "Needs Improvement" : stages[4].status === "Missing" ? "Missing" : "Needs Improvement",
            summary: stages[4].evidence[0] === "No matching paths or content." ? "No baseline/verifier artifacts. A demo path is not a measured baseline; QA/QP plus the COI packet must remain the verifier." : stages[4].summary
        };
    }
    const findings = [];
    let i = 0;
    for (const [idStr, ev] of Object.entries(stages)){
        const id = Number(idStr);
        if (ev.status === "Critical Failure") {
            findings.push({
                id: `cf-${id}-${i++}`,
                title: `Stage ${id} · ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FDE_STAGES"][id - 1].name}`,
                detail: ev.summary,
                severity: "high",
                evidence: ev.evidence.slice(0, 4),
                stageIds: [
                    id
                ]
            });
        }
    }
    if (secrets.length) {
        findings.push({
            id: "secrets",
            title: "Credentials or unsafe execution in tree",
            detail: "Secret-like assignments, eval, or unsafe deserialize patterns were detected. Rotate anything real and keep this estate off plant networks.",
            severity: "high",
            evidence: secrets.slice(0, 6),
            stageIds: [
                18
            ]
        });
    }
    if (!hasTests) {
        findings.push({
            id: "no-tests",
            title: "No automated tests",
            detail: "Identity and disposition behavior cannot regress-safely without tests. This blocks Stage 16 and Stage 18.",
            severity: "high",
            evidence: [
                "No files matched tests/, *_test.py, *.spec.ts"
            ],
            stageIds: [
                16,
                18
            ]
        });
    }
    const strengths = [];
    if (hasReadme) {
        strengths.push({
            title: "Written entry point exists",
            body: "A README (or equivalent) gives inheriting FDEs a place to start. Tighten it into an engagement reframe: outcome, freeze list, owners.",
            evidence: paths.filter((p)=>/readme/i.test(p)).slice(0, 3)
        });
    }
    if (hasDomain) {
        strengths.push({
            title: "Domain language is present",
            body: "Patient/batch and transition language is the right nucleus. Promote it to a guarded state machine that adapters cannot bypass.",
            evidence: stages[9].evidence.slice(0, 3)
        });
    }
    if (hasCoi) {
        strengths.push({
            title: "COI is at least named",
            body: "The estate knows Chain of Identity exists. The remediation is to make it a blocking control with dual identifiers, not more documentation.",
            evidence: stages[15].evidence.slice(0, 3)
        });
    }
    if (hasTests) {
        strengths.push({
            title: "A test tree exists to extend",
            body: "Do not rewrite tests from zero. Add identity-swap, slot-collision, and illegal-transition cases to whatever runner is already here.",
            evidence: tests.slice(0, 5)
        });
    }
    if (hasDocker) {
        strengths.push({
            title: "Runtime packaging started",
            body: "Docker/compose is a foothold for a reproducible slice. Pair it with pinned deps, no secrets in the image, and a non-root user.",
            evidence: paths.filter((p)=>/docker/i.test(p)).slice(0, 4)
        });
    }
    if (strengths.length === 0) {
        strengths.push({
            title: "The outcome boundary is still the asset",
            body: "Even a messy tree named patient-to-batch is a better inheritance than a generic AI platform. Keep that fence while the strangler proceeds.",
            evidence: [
                file.name
            ]
        });
    }
    const problems = findings.filter((f)=>f.severity === "high").slice(0, 8).map((f)=>({
            title: f.title,
            body: f.detail,
            evidence: f.evidence,
            severity: f.severity
        }));
    if (!hasBlockingCoi) {
        problems.unshift({
            title: "Chain of Identity is not a blocking control",
            body: "Autologous CGT cannot tolerate identity-as-a-field. Every handoff must refuse mismatch. This is the first strangler target.",
            evidence: stages[15].evidence.slice(0, 4),
            severity: "high"
        });
    }
    const { overallScore, overallLabel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2d$assessment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreFromStages"])(stages);
    return {
        source: "archive",
        archiveName: file.name,
        analyzedAt: new Date().toISOString(),
        fileCount: paths.length,
        stack: stack.length ? stack : [
            "Unidentified — see tree"
        ],
        coreProblem: "Autologous cell and gene therapy is make-to-order: one patient is one batch. This archive is an orchestration estate whose original job is to keep a single identity thread intact from the enrolled patient through collection and a manufacturing slot until a batch is QC’d and human-released. The bound tree below is the evidence for how far that job was actually implemented versus how far it sprawled.",
        users: [
            {
                role: "Case manager / patient operations",
                job: "Enroll, keep the calendar honest, and see blockers before a collection day is wasted."
            },
            {
                role: "Manufacturing planner / slot owner",
                job: "Hold, sequence, and recover plant slots when collection or courier reality changes."
            },
            {
                role: "QA / QP",
                job: "Release or reject with a complete COI/COC and QC packet; never from a model summary alone."
            },
            {
                role: "Manufacturing / MSAT",
                job: "Start the patient-specific batch with the correct starting material and process version."
            },
            {
                role: "Forward deployed engineer",
                job: "Keep the spine truthful, observable, and change-controlled; stop dual writers to batch state."
            }
        ],
        initialVsCurrent: {
            initial: "Named intent: Patient to Batch — bind identity, slot, manufacturing lot, and human disposition. Not a full vein-to-vein commercial platform.",
            current: `Bound tree contains ${paths.length} files. Stack: ${stack.join(", ") || "unidentified"}. Tests: ${tests.length}. Secret/unsafe hits: ${secrets.length}. Orchestrators: ${orchestrators.join(", ") || "none detected"}. Read the stage map for where the sprawl actually sits.`
        },
        strengths,
        problems: problems.slice(0, 8),
        stages,
        findings,
        treePreview: treePreview(paths),
        securityHits: secrets,
        testFiles: tests,
        readmeExcerpt: readmeExcerpt(files),
        overallScore,
        overallLabel
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/fde-stages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FDE_STAGES",
    ()=>FDE_STAGES,
    "PHASES",
    ()=>PHASES,
    "phaseLabel",
    ()=>phaseLabel
]);
const PHASES = [
    {
        id: "discover",
        label: "Discover & Frame",
        range: "1–6"
    },
    {
        id: "design",
        label: "Design the Change",
        range: "7–12"
    },
    {
        id: "prove",
        label: "Build & Prove",
        range: "13–17"
    },
    {
        id: "operate",
        label: "Launch & Operate",
        range: "18–21"
    }
];
const FDE_STAGES = [
    {
        id: 1,
        name: "Inherit & Reconcile",
        phase: "discover",
        question: "What was sold or inherited, what actually exists, who owns the boundary, and what must not be changed yet?",
        exitCriteria: [
            "Engagement reframe names the operational outcome, not the technology.",
            "Known source artifacts, owners, and access constraints are inventoried.",
            "A freeze list exists for identity, release, and safety-critical paths."
        ],
        expectedArtifacts: [
            "README / problem statement",
            "engagement brief",
            "source inventory"
        ],
        cgtLens: "Confirm whether the estate is patient-to-batch only, or has sprawled into full vein-to-vein (infusion, follow-up, commercial slot market). Freeze Chain of Identity writes until the model is proven.",
        probes: {
            pathHints: [
                "readme",
                "docs/",
                "problem",
                "brief",
                "inherit"
            ],
            contentHints: [
                "problem statement",
                "inherited",
                "brownfield",
                "capstone"
            ]
        }
    },
    {
        id: 2,
        name: "Observe the Work",
        phase: "discover",
        question: "How does the work actually happen, including the exceptions, workarounds, and tribal knowledge that never made the SOP?",
        exitCriteria: [
            "A current-state journey is evidenced from operators, not from a slide.",
            "Happy-path and at least the top exception classes are named."
        ],
        expectedArtifacts: [
            "process map / BPMN",
            "observation notes",
            "exception catalog"
        ],
        cgtLens: "Walk enrollment → eligibility → apheresis booking → collection → courier handoff → manufacturing slot → batch start → in-process QC → disposition → shipment. Capture what happens when a slot slips or a bag is delayed.",
        probes: {
            pathHints: [
                "process",
                "workflow",
                "bpmn",
                "journey",
                "sop"
            ],
            contentHints: [
                "apheresis",
                "vein-to-vein",
                "exception",
                "workaround"
            ]
        }
    },
    {
        id: 3,
        name: "Map Actors, Systems & Exceptions",
        phase: "discover",
        question: "Who acts, which systems of record they touch, and where identity, custody, and schedule diverge?",
        exitCriteria: [
            "Actor × system × record map exists for patient, collection, slot, batch, and shipment.",
            "Exception set is classified by detectability and blast radius."
        ],
        expectedArtifacts: [
            "system landscape",
            "adapter inventory",
            "RACI / actor map"
        ],
        cgtLens: "Expect 6–10 systems: EHR/ordering, case management, LIMS, MES, ERP/slot, courier TMS, quality/QMS, and a treatment-center scheduler. The orchestration layer is not a twelfth SOP spreadsheet.",
        probes: {
            pathHints: [
                "adapter",
                "integration",
                "client",
                "connector",
                "systems"
            ],
            contentHints: [
                "lims",
                "mes",
                "ehr",
                "courier",
                "qms",
                "fhir"
            ]
        }
    },
    {
        id: 4,
        name: "Establish Baseline & Verifier",
        phase: "discover",
        question: "What is the current performance of the work, and who/what can independently say the outcome is true?",
        exitCriteria: [
            "Baseline metrics are measured or explicitly unmeasured with a plan.",
            "A verifier is named that does not depend on the system under change."
        ],
        expectedArtifacts: [
            "KPI baseline",
            "verifier definition",
            "gold cases"
        ],
        cgtLens: "Baselines that matter: vein-to-vein cycle time, slot utilization, identity-mismatch rate, discarded batches, QA cycle time, inspection reconstruction time. The verifier for a released batch is QA/QP plus the COI/COC packet — not the model’s confidence score.",
        probes: {
            pathHints: [
                "metrics",
                "kpi",
                "baseline",
                "gold",
                "eval"
            ],
            contentHints: [
                "cycle time",
                "slot utilization",
                "baseline",
                "verifier"
            ]
        }
    },
    {
        id: 5,
        name: "Frame Value, Risk Ceiling & Guardrails",
        phase: "discover",
        question: "What value is attributable, what failure is intolerable, and which actions are forbidden without a human?",
        exitCriteria: [
            "Value hypothesis is falsifiable and owned.",
            "Risk ceiling names identity mismatch, wrong-patient infusion, and unsupervised batch release as never-events."
        ],
        expectedArtifacts: [
            "value case",
            "risk register",
            "guardrail list"
        ],
        cgtLens: "Value is fewer lost slots, fewer discarded patient lots, faster QA packet assembly, and inspection-ready chains. Guardrails: no autonomous COI mutation, no autonomous batch disposition, no unsupervised external communication to sites or couriers.",
        probes: {
            pathHints: [
                "risk",
                "threat",
                "guardrail",
                "value",
                "roi"
            ],
            contentHints: [
                "never event",
                "phi",
                "gxp",
                "hipaa",
                "21 cfr",
                "guardrail"
            ]
        }
    },
    {
        id: 6,
        name: "Charter the Workflow",
        phase: "discover",
        question: "Is this workflow worth changing now, and what is the accepted outcome that proves it?",
        exitCriteria: [
            "Charter names user, interface, decision, inputs, action, outcome, and stop conditions.",
            "Out-of-scope is explicit (typically infusion and long-term follow-up if the name is patient-to-batch)."
        ],
        expectedArtifacts: [
            "workflow charter",
            "ADR-0001",
            "scope fence"
        ],
        cgtLens: "Charter the accepted outcome as: a patient identity is bound to a manufacturing batch with an intact COI/COC chain and a human-released disposition. Do not charter ‘an AI platform for CGT’.",
        probes: {
            pathHints: [
                "charter",
                "adr",
                "scope",
                "decision-record"
            ],
            contentHints: [
                "in scope",
                "out of scope",
                "accepted outcome",
                "charter"
            ]
        }
    },
    {
        id: 7,
        name: "Prepare the Four Data Planes",
        phase: "design",
        question: "Are operational, context, evaluation, and feedback sources fit for this decision and affordable to operate?",
        exitCriteria: [
            "Each plane has a source of authority, quality threshold, and failure behavior.",
            "PHI/PII handling and retention are explicit."
        ],
        expectedArtifacts: [
            "data-readiness note",
            "schemas / fixtures",
            "lineage note"
        ],
        cgtLens: "Operational: patient, collection, slot, batch, QC results. Context: SOPs, product specs, slot calendars. Evaluation: historical lots with known dispositions. Feedback: QA overrides, deviations, temperature excursions. Synthetic fixtures are acceptable in exploration; they are not a production data plane.",
        probes: {
            pathHints: [
                "schema",
                "fixture",
                "seed",
                "data/",
                "models/",
                "prisma"
            ],
            contentHints: [
                "patient_id",
                "batch_id",
                "coi",
                "phi",
                "pydantic",
                "zod"
            ]
        }
    },
    {
        id: 8,
        name: "Select the Smallest Sufficient Mechanism",
        phase: "design",
        question: "Which steps belong in deterministic software, which in retrieval or a model, and which must stay human?",
        exitCriteria: [
            "A mechanism record exists per workflow step.",
            "Identity matching, slot conflict, and disposition gates are deterministic unless a documented exception exists."
        ],
        expectedArtifacts: [
            "intelligence-selection record",
            "rules vs model matrix"
        ],
        cgtLens: "COI equality, ISBT-128 parse, slot exclusivity, temperature-excursion thresholds, and spec-limit checks are software. Narrative deviation summaries, packet drafting, and schedule-recovery options may be model-assisted. Batch release remains human.",
        probes: {
            pathHints: [
                "agent",
                "langchain",
                "langgraph",
                "crewai",
                "rules",
                "policy"
            ],
            contentHints: [
                "llm",
                "prompt",
                "deterministic",
                "state machine",
                "rules engine"
            ]
        }
    },
    {
        id: 9,
        name: "Design the Domain & State Model",
        phase: "design",
        question: "What are the canonical entities and legal state transitions for patient, collection, slot, and batch?",
        exitCriteria: [
            "Entities, identifiers, and transitions are explicit and guarded.",
            "Illegal transitions cannot be performed by an adapter, UI, or agent."
        ],
        expectedArtifacts: [
            "domain model",
            "state machine",
            "identifier policy"
        ],
        cgtLens: "Canonical thread: Patient → Enrollment → Collection (DIN) → COI identifier → Manufacturing order → Batch/lot → QC suite → Disposition → Qualified shipment. One patient-specific batch cannot be reassigned. State transitions are the product.",
        probes: {
            pathHints: [
                "domain",
                "state",
                "machine",
                "entities",
                "models"
            ],
            contentHints: [
                "state machine",
                "transition",
                "chain of identity",
                "enrollment",
                "disposition"
            ]
        }
    },
    {
        id: 10,
        name: "Design the Human–Agent Operating Model",
        phase: "design",
        question: "Who prepares, who checks, who decides, and how does a reviewer actually intervene in time?",
        exitCriteria: [
            "Agent roles and human roles are separated with evidence presented to the reviewer.",
            "Reviewer time, authority, and override path are designed, not implied."
        ],
        expectedArtifacts: [
            "RACI for digital teammates",
            "approval UX",
            "escalation matrix"
        ],
        cgtLens: "Agents: ingest, normalize, check completeness, draft packets, propose slot recovery. Humans: eligibility nuance, deviation judgment, QP/QA release, site communication. A reviewer who only clicks ‘approve’ on a wall of text is not a control.",
        probes: {
            pathHints: [
                "approval",
                "review",
                "hitl",
                "human",
                "inbox"
            ],
            contentHints: [
                "human in the loop",
                "approve",
                "override",
                "escalat"
            ]
        }
    },
    {
        id: 11,
        name: "Design Integration Contracts & Tool Permissions",
        phase: "design",
        question: "What is the contract at each system boundary, and what power does each tool actually have?",
        exitCriteria: [
            "Adapters are ports with explicit allowlists, idempotency, and timeouts.",
            "Write tools are least-privilege and reversible or compensating."
        ],
        expectedArtifacts: [
            "OpenAPI / events",
            "adapter ports",
            "permission matrix"
        ],
        cgtLens: "Prefer events for state changes (collection completed, slot held, batch in-process, excursion detected) over nightly files. Idempotency keys on slot holds and batch start. Never grant an agent unbounded MES or courier credentials.",
        probes: {
            pathHints: [
                "openapi",
                "asyncapi",
                "proto",
                "contract",
                "ports"
            ],
            contentHints: [
                "idempotency",
                "timeout",
                "retry",
                "allowlist",
                "webhook"
            ]
        }
    },
    {
        id: 12,
        name: "Design Evaluation, Safety & Audit",
        phase: "design",
        question: "How will we know the workflow is right, safe, and reconstructable under inspection?",
        exitCriteria: [
            "Eval cases cover identity mismatch, slot collision, missing QC, and excursion.",
            "Audit design is tamper-evident and time-aligned across systems."
        ],
        expectedArtifacts: [
            "eval plan",
            "failure taxonomy",
            "audit schema"
        ],
        cgtLens: "Inspection readiness is an integration property. A complete patient chain must be queryable, not reconstructed from email. Safety evals must include near-miss identity swaps and stale slot data.",
        probes: {
            pathHints: [
                "eval",
                "golden",
                "audit",
                "safety",
                "redteam"
            ],
            contentHints: [
                "audit trail",
                "alcoa",
                "eval case",
                "failure taxonomy"
            ]
        }
    },
    {
        id: 13,
        name: "Build the Vertical Slice",
        phase: "prove",
        question: "Does one end-to-end slice exercise the real boundaries: identity, slot, batch, human release?",
        exitCriteria: [
            "A single patient can be taken from enrollment to a (simulated) released batch.",
            "The slice uses the real domain model, not a demo-only happy path."
        ],
        expectedArtifacts: [
            "walking skeleton",
            "end-to-end script / demo path"
        ],
        cgtLens: "The slice is not a chatbot that explains CGT. It is a case that binds a patient to a collection, holds a slot, opens a batch, attaches QC, and stops at a human disposition gate.",
        probes: {
            pathHints: [
                "main",
                "app",
                "orchestrat",
                "demo",
                "e2e"
            ],
            contentHints: [
                "end-to-end",
                "vertical slice",
                "patient to batch"
            ]
        }
    },
    {
        id: 14,
        name: "Orchestrate Tools, Systems & Workflow",
        phase: "prove",
        question: "Is there one orchestration spine, or several overlapping conductors fighting over state?",
        exitCriteria: [
            "A single state owner exists for the patient–batch thread.",
            "Child work (QC, courier, slot) is monitored continuously, not fire-and-forget."
        ],
        expectedArtifacts: [
            "orchestrator",
            "workflow definitions",
            "correlation IDs"
        ],
        cgtLens: "Airflow, Celery, LangGraph, custom loops, and cron must not all believe they own the batch. The spine should re-sync child status (manual retry of a QC job should not leave the parent failed forever).",
        probes: {
            pathHints: [
                "airflow",
                "temporal",
                "prefect",
                "celery",
                "langgraph",
                "dag"
            ],
            contentHints: [
                "orchestrat",
                "workflow",
                "correlation",
                "saga",
                "state"
            ]
        }
    },
    {
        id: 15,
        name: "Enforce HITL, Identity & Exception Paths",
        phase: "prove",
        question: "Can the system refuse an identity mismatch, and can a human recover a real exception without breaking the chain?",
        exitCriteria: [
            "COI checks are deterministic and blocking.",
            "Exception paths (slot slip, excursion, manufacturing failure) have compensating actions."
        ],
        expectedArtifacts: [
            "COI guard",
            "exception handlers",
            "approval records"
        ],
        cgtLens: "A mismatched DIN / COI / lot must stop the process immediately, not alert later. Manufacturing failure on a patient-specific lot restarts from collection, not from a cloned batch ID. Dual control on disposition.",
        probes: {
            pathHints: [
                "coi",
                "identity",
                "custody",
                "exception",
                "deviation"
            ],
            contentHints: [
                "chain of identity",
                "chain of custody",
                "isbt",
                "mismatch",
                "deviation"
            ]
        }
    },
    {
        id: 16,
        name: "Instrument Evals, Tests & Observability",
        phase: "prove",
        question: "Can we replay a case, see why a decision was made, and catch regressions before a patient lot is touched?",
        exitCriteria: [
            "Unit, contract, and scenario tests exist for identity and disposition.",
            "Traces, structured logs, and eval scores are first-class."
        ],
        expectedArtifacts: [
            "tests/",
            "eval harness",
            "logging / tracing"
        ],
        cgtLens: "Every material action carries patient/batch correlation IDs with PHI minimized. Prompt, model, tool, and policy versions are recorded. An eval suite fails the build on identity-swap cases.",
        probes: {
            pathHints: [
                "test",
                "spec",
                "pytest",
                "otel",
                "logging",
                "eval"
            ],
            contentHints: [
                "opentelemetry",
                "structlog",
                "prometheus",
                "assert",
                "unittest"
            ]
        }
    },
    {
        id: 17,
        name: "Run a Bounded Pilot",
        phase: "prove",
        question: "Can named users get repeatable value under a documented envelope without unsupervised writes to MES or release?",
        exitCriteria: [
            "Pilot users, dates, included tasks, and stop conditions are written down.",
            "Support ownership and fallback to the as-is process exist."
        ],
        expectedArtifacts: [
            "pilot protocol",
            "feature flags",
            "feedback channel"
        ],
        cgtLens: "Pilot on historical or shadow lots first, then a named set of non-pivotal cases. The envelope excludes autonomous courier booking and autonomous disposition. Measure override rate and packet assembly time.",
        probes: {
            pathHints: [
                "pilot",
                "flag",
                "shadow",
                "staging"
            ],
            contentHints: [
                "pilot",
                "feature flag",
                "shadow mode",
                "dry-run"
            ]
        }
    },
    {
        id: 18,
        name: "Harden for Production & Validation",
        phase: "operate",
        question: "Can this run in a GxP-relevant environment with identity, secrets, change control, and a validation story?",
        exitCriteria: [
            "Secrets are not in source. AuthN/Z is real. Dependencies are pinned.",
            "CSV/validation strategy exists for GxP-relevant functions (COI, disposition)."
        ],
        expectedArtifacts: [
            "Docker / IaC",
            "secret management",
            "validation / GAMP note"
        ],
        cgtLens: "COI functions are high process risk and need scripted tests. AI-drafted packets remain under the regulated company’s responsibility. Change control covers prompts, tools, and ontologies — not only application code.",
        probes: {
            pathHints: [
                "dockerfile",
                "k8s",
                "terraform",
                "auth",
                "vault",
                "validation"
            ],
            contentHints: [
                "gamp",
                "21 cfr part 11",
                "oauth",
                "rbac",
                "secret"
            ]
        }
    },
    {
        id: 19,
        name: "Launch, Cut Over & Recover",
        phase: "operate",
        question: "Can the exact release be contained, rolled back, and recovered without losing the identity chain?",
        exitCriteria: [
            "Runbook, rollback, and compensating actions have been exercised.",
            "Cutover preserves in-flight lots."
        ],
        expectedArtifacts: [
            "runbook",
            "rollback plan",
            "release record"
        ],
        cgtLens: "You cannot ‘roll back’ a collected bag. Recovery is compensating action: hold slot, notify site, open deviation. Launch must be lot-aware, not just traffic-aware.",
        probes: {
            pathHints: [
                "runbook",
                "rollback",
                "release",
                "cutover",
                "playbook"
            ],
            contentHints: [
                "rollback",
                "runbook",
                "cutover",
                "incident"
            ]
        }
    },
    {
        id: 20,
        name: "Transfer Ownership & Hypercare",
        phase: "operate",
        question: "Can a receiving team operate, change, and support this without the original FDE on the critical path?",
        exitCriteria: [
            "Named business and technical owners exist.",
            "Support hours, escalation, and a trained backup are real."
        ],
        expectedArtifacts: [
            "handoff pack",
            "on-call",
            "training record"
        ],
        cgtLens: "Owners are QA, manufacturing planning, and a platform engineer — not ‘the intern who ran the notebook’. Hypercare watches in-flight autologous lots, not just HTTP error rates.",
        probes: {
            pathHints: [
                "handoff",
                "oncall",
                "operations",
                "support",
                "training"
            ],
            contentHints: [
                "owner",
                "on-call",
                "hypercare",
                "raci"
            ]
        }
    },
    {
        id: 21,
        name: "Operate, Productize, Expand or Retire",
        phase: "operate",
        question: "Should this service continue, generalize, expand beyond patient-to-batch, or be retired?",
        exitCriteria: [
            "Service review covers value, adoption, safety, cost, and residual risk.",
            "Productization path (reusable adapters, shared COI service) is explicit or declined."
        ],
        expectedArtifacts: [
            "service review",
            "SLO / cost",
            "retirement criteria"
        ],
        cgtLens: "Productize the COI service, slot broker, and packet assembler — not a customer-specific Streamlit. Expansion into infusion and follow-up is a new charter, not a silent scope creep. Retire shadow orchestrators.",
        probes: {
            pathHints: [
                "slo",
                "dashboard",
                "cost",
                "retire",
                "roadmap"
            ],
            contentHints: [
                "slo",
                "productiz",
                "retire",
                "service review"
            ]
        }
    }
];
function phaseLabel(phase) {
    return PHASES.find((p)=>p.id === phase)?.label ?? phase;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/roadmap.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GOVERNANCE",
    ()=>GOVERNANCE,
    "ROADMAP",
    ()=>ROADMAP
]);
const ROADMAP = [
    {
        id: "W0",
        name: "Freeze & reframe",
        intent: "Stop the bleeding. Treat the inherited tree as a contaminated plant floor: freeze writes to identity and disposition, name owners, and re-charter the outcome as patient → released batch.",
        pattern: "Engagement reframe + write-freeze. No new features.",
        stageGates: [
            1,
            5,
            6
        ],
        outcomes: [
            "Signed charter: accepted outcome, out-of-scope (infusion/follow-up), stop conditions.",
            "Freeze list: COI, batch disposition, courier booking, MES start — no agent writes.",
            "Risk ceiling: identity mismatch and unsupervised release are never-events.",
            "Inventory of orchestrators, adapters, secrets, and notebooks that can mutate state."
        ]
    },
    {
        id: "W1",
        name: "Extract the spine (strangler fig)",
        intent: "Put a guarded domain model in front of the brownfield. New reads and all writes go through a state machine; old UI and adapters are facades until they die.",
        pattern: "Strangler fig around Patient–Collection–Slot–Batch. Hexagonal ports for LIMS/MES/slot/courier.",
        stageGates: [
            7,
            8,
            9,
            11,
            14
        ],
        outcomes: [
            "Canonical entities and illegal-transition tests.",
            "One writer of batch status (retire the second conductor).",
            "Deterministic COI equality and slot exclusivity — models may not own these steps.",
            "Versioned adapter contracts with idempotency keys on slot hold and batch start."
        ]
    },
    {
        id: "W2",
        name: "Make identity a control, HITL a job",
        intent: "Promote Chain of Identity from a column to a blocking control. Design the QA/planner review job so a human can refuse in time.",
        pattern: "Policy engine + dual-control disposition + evidence packet UI.",
        stageGates: [
            10,
            12,
            15
        ],
        outcomes: [
            "Blocking mismatch on DIN / COI / lot at every handoff.",
            "Reviewer packet: identifiers, slot, QC flags, rule that fired, source system, timestamp.",
            "Exception paths: slot slip, temperature excursion, manufacturing failure — compensating actions, not cloned batch IDs.",
            "Eval cases: identity swap, stale slot, missing QC, excursion."
        ]
    },
    {
        id: "W3",
        name: "Prove, then envelope a pilot",
        intent: "Build the harness that makes the system falsifiable. Only then allow named users onto historical or shadow lots.",
        pattern: "Eval harness in CI + shadow mode + feature flags. No plant writes.",
        stageGates: [
            13,
            16,
            17
        ],
        outcomes: [
            "One vertical slice: enroll → collect → hold slot → open batch → QC attach → human disposition.",
            "Contract tests on adapters; identity scenario tests fail the build.",
            "Traces with correlation IDs; prompt/model/tool/policy versions recorded.",
            "Pilot protocol: users, dates, included tasks, fallback SOP, support owner."
        ]
    },
    {
        id: "W4",
        name: "Harden, launch lot-aware, operate",
        intent: "Production is an operating commitment, not a deploy. Validate GxP-relevant functions, cut over without abandoning in-flight lots, and transfer ownership.",
        pattern: "GAMP-aligned CSV for COI/disposition; lot-aware cutover; productize COI/slot/packet, retire snowflakes.",
        stageGates: [
            18,
            19,
            20,
            21
        ],
        outcomes: [
            "Secrets out of git; real authN/Z; pinned dependencies; change control for prompts and ontologies.",
            "Runbooks that compensate (hold slot, notify site, open deviation) rather than ‘restart the pod’.",
            "Named QA, planning, and platform owners; hypercare on in-flight autologous lots.",
            "Productize COI service, slot broker, packet assembler. Expansion to infusion requires a new charter."
        ]
    }
];
const GOVERNANCE = [
    {
        title: "Stage-gates are real, not ceremonial",
        body: "No build work without a charter (Stage 6). No plant integration without evals and blocking COI (Stages 12, 15, 16). No ‘pilot’ that is actually unbounded production (Stage 17). A skipped gate is how this estate degraded the first time."
    },
    {
        title: "Change control includes prompts, tools, and ontologies",
        body: "A model swap, retrieval change, or policy edit can invalidate prior evidence. Treat those as system changes with regression evals. Code-only CAB is insufficient."
    },
    {
        title: "Separation of duties on disposition",
        body: "The digital teammate may draft. QA/QP disposes. The same engineer must not be the only person who can both change the COI rule and approve the lot."
    },
    {
        title: "One spine, many adapters",
        body: "New workflow engines are guilty until proven otherwise. A second writer to batch status is an incident, not a feature. Architecture review asks: who owns the thread?"
    },
    {
        title: "PHI minimization and inspection readiness",
        body: "Logs carry correlation IDs, not full clinical payloads. A complete patient chain must be a query. If reconstruction takes an afternoon of email, the operate stage has already failed."
    },
    {
        title: "Productization tax",
        body: "Every engagement ends with an explicit keep / generalize / retire decision. Customer-specific Streamlit and notebooks are not assets unless they die on a date."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/seed-assessment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEED_ASSESSMENT",
    ()=>SEED_ASSESSMENT,
    "scoreFromStages",
    ()=>scoreFromStages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fde-stages.ts [app-client] (ecmascript)");
;
const UNBOUND_NOTE = "Source archive was referenced but not bound in this workspace. Status is inferred from artifact identity (AI_FDE_CGT_Patient_to_Batch_Orchestration) and CGT / FDE operating-model analysis. Drop the zip to replace inference with file-level evidence.";
function inferred(status, summary) {
    return {
        status,
        summary: `${summary} ${UNBOUND_NOTE}`,
        evidence: [
            "Artifact: Capstone-EY-Batch 2 / AI_FDE_CGT_Patient_to_Batch_Orchestration.zip",
            "Artifact: 21 Stage AI_FDE_Operating_Model.pdf (operating-model rubric applied in this workbench)"
        ],
        inferred: true
    };
}
const stages = {
    1: inferred("Needs Improvement", "The estate is clearly an inherited CGT orchestration capstone, not a greenfield product. The name encodes the original outcome (patient → batch) but there is no engagement reframe, freeze list, or owner map in the unbound workspace."),
    2: inferred("Needs Improvement", "The intended journey is reconstructable from the CGT domain (enrollment, collection, slot, batch, QC) but there is no operator observation log or exception catalog bound to source. Brownfield CGT systems almost always hide the real work in email and spreadsheets around the code."),
    3: inferred("Needs Improvement", "A patient-to-batch orchestrator implies adapters to case, collection, slot, and manufacturing systems. Until the zip is bound we cannot see whether those are real ports or copy-pasted stubs. Expect overlapping conductors and mock clients — the usual brownfield signature."),
    4: inferred("Missing", "No baseline packet (cycle time, discarded lots, identity-mismatch rate, QA packet time) is visible without source. There is no independent verifier definition. A demo script is not a baseline."),
    5: inferred("Critical Failure", "For autologous CGT, identity mismatch and unsupervised batch release are never-events. An AI FDE capstone named for patient-to-batch orchestration that does not present an explicit risk ceiling and write-forbid list is operating above a safe envelope even as a prototype."),
    6: inferred("Needs Improvement", "The zip name is a de-facto charter: bind a patient to a manufacturing batch. That is tighter and healthier than ‘platform for CGT’. It is still not a signed charter with stop conditions, out-of-scope (infusion/follow-up), and an accepted outcome."),
    7: inferred("Needs Improvement", "Capstone orchestrators typically ship synthetic patients and happy-path fixtures. That is a valid exploration data plane. It is not operational, evaluation, or feedback data. PHI handling and retention are unknown until files are bound."),
    8: inferred("Needs Improvement", "The ‘AI_FDE’ prefix strongly suggests model/agent involvement in a workflow that should be majority deterministic (COI, slot exclusivity, spec limits). Mechanism selection is likely inverted: LLM in the spine, rules at the edge. That is the wrong default for GxP identity."),
    9: inferred("Needs Improvement", "Patient, batch, and slot almost certainly exist as records. A guarded state machine with illegal-transition refusal is what is usually missing in brownfield CGT tools, which store status as strings and let every adapter write them."),
    10: inferred("Missing", "No evidence of a designed reviewer job (evidence packet, time, authority, override). AI FDE systems in this class often add a chat UI and call it HITL."),
    11: inferred("Needs Improvement", "Expect mock HTTP clients and implicit JSON blobs rather than versioned contracts, idempotent slot holds, and least-privilege tools. Confirm on bind."),
    12: inferred("Missing", "No eval plan, identity-swap cases, or tamper-evident audit schema is visible. Inspection readiness cannot be inferred from a capstone name."),
    13: inferred("Needs Improvement", "The artifact exists as a named patient-to-batch orchestrator, so some walking path was built. Whether that path exercises identity, slot conflict, and a human disposition gate — versus a scripted happy path — is the question to answer on bind."),
    14: inferred("Needs Improvement", "Brownfield orchestration estates in this class commonly accumulate a second conductor (notebook, cron, agent graph, Celery) that also mutates batch status. Until bind, treat dual-spine as the working hypothesis."),
    15: inferred("Critical Failure", "Chain of Identity is the load-bearing control of autologous CGT. Without bound evidence of blocking, deterministic COI checks and dual-control disposition, this stage is a critical failure by default — not a documentation gap."),
    16: inferred("Missing", "Capstone brownfield trees in this program family rarely include an eval harness, contract tests, or structured traces with correlation IDs. Assume absent until the archive proves otherwise."),
    17: inferred("Missing", "No pilot protocol, named users, or shadow-mode flag is visible. A local demo is not a pilot."),
    18: inferred("Critical Failure", "GxP-relevant functions (identity, disposition) plus typical capstone patterns (secrets in env files, no auth, unpinned ‘latest’ models) put production-hardening in critical failure until disproven. Do not connect this estate to a real MES."),
    19: inferred("Missing", "No runbook or lot-aware rollback/compensating action is visible. You cannot roll back a collected bag; the absence of compensating-action design is a launch blocker."),
    20: inferred("Missing", "No receiving owner, on-call, or training record. The FDE who inherited this is still the bus factor of one."),
    21: inferred("Missing", "No service review, SLO, productization path, or retirement of shadow tools. Expansion beyond patient-to-batch would be scope creep, not operate-stage maturity.")
};
const SEED_ASSESSMENT = {
    source: "unbound",
    archiveName: null,
    analyzedAt: null,
    fileCount: 0,
    stack: [
        "Unknown until archive bind",
        "Expected: workflow/orchestrator + adapters + operator UI"
    ],
    coreProblem: "Autologous cell and gene therapy is make-to-order: one patient is one batch. The original problem this estate was built to solve is not ‘add AI to manufacturing’. It is to keep a single identity thread intact from the enrolled patient through collection and a manufacturing slot until a batch is QC’d and human-released — so the right product is made for the right patient in a calendar that cannot slip without destroying a living starting material. Traditional ERP/MES/LIMS stacks assume make-to-stock lots. They do not natively refuse a mismatched identity, hold an exclusive slot across site and plant, or assemble an inspection-ready chain when six to ten systems each hold a fragment of the same patient.",
    users: [
        {
            role: "Case manager / patient operations",
            job: "Enroll, keep the calendar honest, and see blockers before a collection day is wasted."
        },
        {
            role: "Manufacturing planner / slot owner",
            job: "Hold, sequence, and recover plant slots when collection or courier reality changes."
        },
        {
            role: "Manufacturing / MSAT",
            job: "Start and run the patient-specific batch with the correct starting material and process version."
        },
        {
            role: "QA / QP",
            job: "Release or reject with a complete COI/COC and QC packet; never from a chat summary alone."
        },
        {
            role: "Logistics coordinator",
            job: "Move collected material and finished product inside time and temperature windows."
        },
        {
            role: "Forward deployed engineer / platform",
            job: "Keep the orchestration spine truthful, observable, and change-controlled."
        }
    ],
    initialVsCurrent: {
        initial: "The artifact name is a tight charter: Patient to Batch. That is the high-value, high-risk spine — identity, slot, batch, disposition — not a full commercial CGT platform.",
        current: "As an inherited brownfield capstone, the estate is expected to have sprawled: extra UIs, notebooks, duplicate orchestrators, mock adapters that leaked into ‘the real path’, and AI/agent layers bolted onto a workflow that still lacks a guarded domain model. The workbench treats that sprawl as the default hypothesis until the zip is bound and the tree says otherwise."
    },
    strengths: [
        {
            title: "The problem is operationally real, not a demo in search of a user",
            body: "Patient-to-batch orchestration is one of the few AI FDE problems where the accepted outcome is unambiguous: a living starting material becomes a released, identity-bound lot. That is stronger product sense than a generic ‘CGT copilot’.",
            evidence: [
                "Artifact name encodes the outcome boundary (patient → batch).",
                "CGT operating reality: one patient, one batch, non-substitutable lots."
            ]
        },
        {
            title: "Scope fence is already implied",
            body: "Stopping at batch (not infusion, REMS, or long-term follow-up) is the correct first vertical slice. Many failed CGT programs drown by trying to digitize the entire vein-to-vein network on day one.",
            evidence: [
                "Zip title: AI_FDE_CGT_Patient_to_Batch_Orchestration",
                "Industry split: orchestration hub vs treatment-center administration record."
            ]
        },
        {
            title: "A 21-stage FDE rubric exists to judge the estate",
            body: "The accompanying operating-model PDF is itself a strength of the engagement: it gives stage-gates, not vibes. This workbench encodes that model so future changes can be refused when they skip Discover or Prove.",
            evidence: [
                "21 Stage AI_FDE_Operating_Model.pdf referenced as the mapping rubric."
            ]
        },
        {
            title: "Capstone shape enables a strangler, not a rewrite-first panic",
            body: "An inherited orchestrator with adapters is the right substrate for a strangler fig: freeze writes to COI, extract a state machine, replace one adapter at a time. That is cheaper and safer than a greenfield ‘platform’.",
            evidence: [
                "Named as orchestration (spine + participants), not as a single MES replacement."
            ]
        }
    ],
    problems: [
        {
            title: "Identity is probably a field, not a control",
            body: "In brownfield CGT code, patient_id, din, lot, and coi_id are routinely copied across JSON payloads with string equality in the UI. That is not Chain of Identity. COI is a blocking control at every handoff, with dual identifiers, illegal-transition refusal, and an audit event.",
            evidence: [
                "No bound COI guard module.",
                "Stage 15 defaulted to Critical Failure until file evidence exists."
            ],
            severity: "high"
        },
        {
            title: "Mechanism selection is likely inverted",
            body: "Prefixing the estate with AI_FDE predicts an agent/LLM in the coordination spine. Identity matching, slot exclusivity, and spec limits must be deterministic. Models may draft packets and propose recoveries. If the model is the orchestrator, the system cannot be validated.",
            evidence: [
                "Artifact naming: AI_FDE + Orchestration.",
                "FDE Stage 8 (smallest sufficient mechanism) is the design defect to confirm on bind."
            ],
            severity: "high"
        },
        {
            title: "No verifier, no evals, no inspection-ready chain",
            body: "Without gold lots, identity-swap cases, and a queryable audit thread, this cannot enter a GxP-relevant pilot. QA cannot be asked to ‘trust the copilot’.",
            evidence: [
                "Stages 4, 12, 16 scored Missing in the unbound assessment."
            ],
            severity: "high"
        },
        {
            title: "Production-hardening and secrets posture unknown — treat as unsafe",
            body: "Capstone trees commonly contain .env keys, open endpoints, pickle/eval, and no RBAC. Until the inspector says otherwise, do not point this at a real plant system.",
            evidence: [
                "Stage 18 Critical Failure by default."
            ],
            severity: "high"
        },
        {
            title: "Dual orchestration spines and status spaghetti",
            body: "The most common brownfield failure in this class is two writers to batch status (workflow engine + agent + notebook). The parent then diverges from children. Manual retry of QC does not resurrect the parent.",
            evidence: [
                "Stage 14 working hypothesis: overlapping conductors."
            ],
            severity: "medium"
        },
        {
            title: "HITL is probably a button, not a job",
            body: "A reviewer who cannot see DIN, COI, slot, QC flags, and the rule that fired cannot override safely. Automation bias on a patient-specific lot is a safety event.",
            evidence: [
                "Stage 10 Missing."
            ],
            severity: "medium"
        }
    ],
    stages,
    findings: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fde$2d$stages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FDE_STAGES"].filter((s)=>stages[s.id].status === "Critical Failure").map((s)=>({
            id: `unbound-s${s.id}`,
            title: `Stage ${s.id} ${s.name} is a critical gap`,
            detail: stages[s.id].summary,
            severity: "high",
            evidence: stages[s.id].evidence,
            stageIds: [
                s.id
            ]
        })),
    treePreview: [
        "(archive not bound)",
        "Expected top-level: README, src|app|services, adapters|integrations, ui|frontend, tests, docs, docker|compose, notebooks"
    ],
    securityHits: [],
    testFiles: [],
    readmeExcerpt: null,
    overallScore: 28,
    overallLabel: "Pre-charter brownfield — unsafe to connect to GxP systems"
};
function scoreFromStages(stagesMap) {
    const rank = {
        Mature: 100,
        "Needs Improvement": 45,
        Missing: 15,
        "Critical Failure": 0
    };
    const values = Object.values(stagesMap).map((s)=>rank[s.status]);
    const overallScore = Math.round(values.reduce((a, b)=>a + b, 0) / values.length);
    let overallLabel = "Not ready";
    if (overallScore >= 80) overallLabel = "Production-capable with residual risk";
    else if (overallScore >= 60) overallLabel = "Pilot-eligible with a tight envelope";
    else if (overallScore >= 40) overallLabel = "Exploration only — charter and freeze writes";
    else overallLabel = "Pre-charter brownfield — unsafe to connect to GxP systems";
    return {
        overallScore,
        overallLabel
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/status-styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATUS_STYLES",
    ()=>STATUS_STYLES,
    "countByStatus",
    ()=>countByStatus
]);
const STATUS_STYLES = {
    Mature: {
        label: "Mature",
        className: "bg-teal-50 text-teal-800 border-teal-200",
        dot: "bg-teal-600"
    },
    "Needs Improvement": {
        label: "Needs Improvement",
        className: "bg-amber-50 text-amber-900 border-amber-200",
        dot: "bg-amber-500"
    },
    Missing: {
        label: "Missing",
        className: "bg-slate-100 text-slate-700 border-slate-200",
        dot: "bg-slate-400"
    },
    "Critical Failure": {
        label: "Critical Failure",
        className: "bg-red-50 text-red-800 border-red-200",
        dot: "bg-red-600"
    }
};
function countByStatus(statuses) {
    return {
        mature: statuses.filter((s)=>s === "Mature").length,
        improve: statuses.filter((s)=>s === "Needs Improvement").length,
        missing: statuses.filter((s)=>s === "Missing").length,
        critical: statuses.filter((s)=>s === "Critical Failure").length
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0o_wzl2._.js.map