module.exports = {

"[project]/app/components/sections/FeaturedCrausel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WallpaperCarousel),
    "featuredPosts": (()=>featuredPosts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
;
const featuredPosts = [
    {
        id: 1,
        title: "The Future of AI in Education",
        excerpt: "Exploring how artificial intelligence is transforming the educational landscape",
        image: "https://picsum.photos/seed/1/1200/600",
        author: "Dr. Sarah Johnson",
        authorAvatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent("Sarah Johnson")}&size=40`,
        date: "May 15, 2025",
        category: "Technology",
        readTime: "8 min read",
        likes: 245,
        comments: 32
    },
    {
        id: 2,
        title: "Student Success Stories: From Campus to Career",
        excerpt: "Inspiring journeys of recent graduates who found success in their chosen fields",
        image: "https://picsum.photos/seed/2/1200/600",
        author: "Prof. Michael Chen",
        authorAvatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent("Michael Chen")}&size=40`,
        date: "June 2, 2025",
        category: "Career",
        readTime: "6 min read",
        likes: 189,
        comments: 24
    },
    {
        id: 3,
        title: "Research Breakthroughs: What's New in 2025",
        excerpt: "A roundup of the most significant research developments from our institution",
        image: "https://picsum.photos/seed/3/1200/600",
        author: "Dr. Emily Rodriguez",
        authorAvatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent("Emily Rodriguez")}&size=40`,
        date: "June 10, 2025",
        category: "Research",
        readTime: "10 min read",
        likes: 312,
        comments: 45
    }
];
function WallpaperCarousel() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('right');
    const [touchStartX, setTouchStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            handleNext();
        }, 8000);
        return ()=>clearInterval(interval);
    }, [
        currentIndex
    ]);
    const handleNext = ()=>{
        setDirection('right');
        setCurrentIndex((prev)=>prev === featuredPosts.length - 1 ? 0 : prev + 1);
    };
    const handlePrev = ()=>{
        setDirection('left');
        setCurrentIndex((prev)=>prev === 0 ? featuredPosts.length - 1 : prev - 1);
    };
    const handleTouchStart = (e)=>{
        setTouchStartX(e.touches[0].clientX);
    };
    const handleTouchEnd = (e)=>{
        if (!touchStartX) return;
        const endX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - endX;
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
        setTouchStartX(null);
    };
    const dispersionVariants = {
        enter: (direction)=>({
                x: direction === 'right' ? '100%' : '-100%',
                opacity: 1,
                scale: 0.98
            }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction)=>({
                x: direction === 'right' ? '-100%' : '100%',
                opacity: 0.8,
                scale: 0.9
            })
    };
    const dispersionTransition = {
        type: 'spring',
        damping: 70,
        stiffness: 300,
        velocity: 0.5
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[400px] md:h-[600px] overflow-hidden shadow-xl group",
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                custom: direction,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    custom: direction,
                    variants: dispersionVariants,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    transition: dispersionTransition,
                    className: "absolute w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: featuredPosts[currentIndex].image,
                            alt: "",
                            className: "w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900/90 h-[460px] md:h-[660px] ",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-7 left-0 right-0 p-4 md:p-8 text-white max-w-4xl md:ml-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "space-y-4 md:space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 bg-[#FF6F61] rounded-full text-xs md:text-sm font-medium",
                                        children: featuredPosts[currentIndex].category
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight tracking-tight",
                                        children: featuredPosts[currentIndex].title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sm:block text-sm md:text-lg text-gray-200 max-w-2xl line-clamp-2 md:line-clamp-3",
                                        children: featuredPosts[currentIndex].excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: featuredPosts[currentIndex].authorAvatar,
                                                        alt: "Author",
                                                        className: "w-8 h-8 md:w-10 md:h-10 rounded-full border-[0.5px] border-white/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm md:text-base",
                                                                children: featuredPosts[currentIndex].author
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs md:text-sm text-gray-300",
                                                                children: featuredPosts[currentIndex].date
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-4 text-xs md:text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-4 h-4 md:w-5 md:h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: featuredPosts[currentIndex].readTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                className: "w-4 h-4 md:w-5 md:h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: featuredPosts[currentIndex].likes
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                className: "w-4 h-4 md:w-5 md:h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: featuredPosts[currentIndex].comments
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-15 right-4 md:bottom-12 md:right-12 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center bg-[#0077B6] hover:bg-[#3a7897] sm:px-4 sm:py-2 p-3 md:px-6 md:py-3 sm:rounded-xl rounded-2xl transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm md:text-base font-bold hidden sm:block",
                                        children: "Read More"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: " sm:ml-2 w-4 h-4 md:w-5 md:h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, currentIndex, true, {
                    fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-between px-2 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        className: "p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-110 shadow-lg hidden sm:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-6 h-6 md:w-8 md:h-8 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-110 shadow-lg hidden sm:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-6 h-6 md:w-8 md:h-8 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
                children: featuredPosts.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm",
                        style: {
                            width: 20
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full bg-white transition-all duration-500 ease-out ${index === currentIndex ? 'w-full' : 'w-0'}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/sections/FeaturedCrausel.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/sections/Hero_Section.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#E1E5E8] flex items-center justify-center h-[450px] px-4 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-3xl sm:overflow-visible overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative left-14 sm:left-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "relative text-4xl md:text-5xl font-serif font-bold flex items-center justify-center gap-2 text-black",
                        children: [
                            "SiteName",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative left-[-70px] top-[-10px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "150",
                                    height: "150",
                                    viewBox: "0 0 196 205",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M43.066 74.7819C42.8713 74.6416 42.597 74.6289 42.2432 74.7437C41.8951 74.8504 41.416 75.0536 40.8056 75.3534C40.0089 75.7407 39.3539 76.0083 38.8406 76.1562C38.3192 76.2982 37.876 76.2377 37.5109 75.9746C37.2188 75.7642 37 75.4093 36.8544 74.91C36.7088 74.4107 36.6568 73.8926 36.6985 73.3557C36.7461 72.8107 36.8839 72.38 37.1118 72.0636C37.3924 71.6741 37.7655 71.2589 38.2312 70.8179C38.6945 70.3629 39.0678 70.0587 39.3509 69.9052L41.286 71.2994L40.8651 71.8836C40.2331 71.7857 39.6674 71.8095 39.1681 71.9551C38.6747 72.0926 38.3052 72.3317 38.0597 72.6725C37.9019 72.8916 37.837 73.1099 37.8652 73.3274C37.8853 73.539 37.9805 73.7062 38.1509 73.829C38.3699 73.9868 38.6605 74.0112 39.0224 73.9023C39.3903 73.7852 39.8893 73.5716 40.5194 73.2615C41.0506 73.0032 41.485 72.8109 41.8226 72.6844C42.158 72.5439 42.4954 72.4604 42.835 72.4339C43.1664 72.4016 43.4579 72.476 43.7094 72.6572C44.0096 72.8735 44.2267 73.2394 44.3606 73.7549C44.4922 74.2565 44.5314 74.7838 44.4779 75.337C44.4304 75.882 44.2897 76.3168 44.0559 76.6413C43.7519 77.0632 43.3478 77.53 42.8435 78.0418C42.3369 78.5396 41.9392 78.8693 41.6502 79.0309L39.6786 77.6104L40.0995 77.0262C40.7711 77.1033 41.3752 77.0518 41.9119 76.8714C42.4463 76.6772 42.8508 76.3894 43.1256 76.008C43.2892 75.7808 43.3628 75.5504 43.3463 75.3167C43.3299 75.0829 43.2364 74.9047 43.066 74.7819Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 14,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M56.0849 64.1674L53.743 66.1602L50.5351 62.3903C50.1917 61.9866 49.8942 61.7605 49.6427 61.7119C49.3848 61.6556 49.1035 61.7571 48.7989 62.0163C48.5704 62.2107 48.3743 62.4432 48.2106 62.7138C48.047 62.9844 47.9112 63.3494 47.8032 63.8089L50.6514 67.1561L52.0003 66.6583L52.2008 67.4725L48.8422 70.3304L48.4436 69.862L48.7604 68.1743L43.0446 61.4571L41.4349 61.6254L41.0363 61.157L42.4236 58.5979L42.972 58.1313L47.22 63.1235L47.6987 60.7466C47.8068 60.5496 48.0017 60.3312 48.2835 60.0914C48.8243 59.6313 49.3907 59.425 49.9827 59.4727C50.5683 59.5128 51.0911 59.8032 51.5512 60.3439L54.5355 63.8511L55.8845 63.3532L56.0849 64.1674Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 15,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M66.9333 58.2014L64.1828 59.5764L63.5993 58.4091L62.6801 60.3612C62.537 60.5221 62.3313 60.6697 62.0629 60.8039C61.2579 61.2063 60.5737 61.3024 60.0102 61.0922C59.4512 60.8686 59.0309 60.475 58.7491 59.9115C58.5837 59.5805 58.5345 59.2026 58.6016 58.7778C58.6732 58.3395 58.8476 57.8722 59.1249 57.3758L62.2913 55.7928L61.9828 55.1757C61.473 54.156 60.6725 53.9189 59.5813 54.4645C59.0088 54.7506 58.4252 55.417 57.8303 56.4634L57.126 56.0609L58.2732 53.5923C58.5997 53.3061 59.0447 53.0222 59.6082 52.7405C60.4937 52.2978 61.2875 52.1636 61.9896 52.3381C62.6918 52.5126 63.244 53.0023 63.6465 53.8073L65.491 57.4969L66.9333 57.3628L66.9333 58.2014ZM61.8819 59.1335C62.3828 58.8831 62.8233 58.3778 63.2035 57.6175L62.6334 56.4771L60.3391 57.6241C60.2675 57.9282 60.3078 58.2323 60.4598 58.5364C60.6074 58.8316 60.8131 59.0418 61.0769 59.167C61.3453 59.2788 61.6136 59.2677 61.8819 59.1335Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 16,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M75.1764 49.1714C74.7472 49.2683 74.359 49.5918 74.0116 50.1419L74.9602 54.3411L77.2205 54.4764L77.02 55.2906L71.9136 56.444L71.7781 55.8441L72.8424 54.4965L71.9831 50.6923L70.5024 50.1964L70.3669 49.5965L72.8074 47.7381L73.6949 49.3522L74.8096 47.5473C74.9675 47.4296 75.2123 47.3333 75.544 47.2584C75.9439 47.168 76.3122 47.1874 76.6489 47.3164C76.9856 47.4453 77.2619 47.67 77.4778 47.9903L76.6604 49.682L75.9581 49.8406C75.8649 49.5643 75.7564 49.3787 75.6324 49.2837C75.516 49.1767 75.3651 49.1441 75.1797 49.186L75.1764 49.1714Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 17,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M89.6459 54.3221C89.1838 54.4233 88.6179 54.4673 87.948 54.4544C87.2581 54.4411 86.6415 54.2592 86.0982 53.9087C85.565 53.5483 85.1492 53.0702 84.8506 52.4743C84.5522 51.8685 84.41 51.2056 84.4239 50.4857C84.4389 49.7059 84.6929 48.9856 85.1857 48.325C85.6887 47.6546 86.309 47.1265 87.0466 46.7406C87.7844 46.3448 88.4932 46.1534 89.1731 46.1665C90.1629 46.1856 90.9253 46.5854 91.4604 47.3658C91.9954 48.1463 92.2454 49.1863 92.2103 50.4859L86.7064 50.3797C86.7717 51.1411 86.9848 51.7604 87.3457 52.2374C87.7165 52.7146 88.2219 52.9594 88.8618 52.9718C89.5316 52.9847 90.5001 52.5583 91.767 51.6926L92.1886 52.3908L89.6459 54.3221ZM88.2905 47.5898C87.3006 47.5707 86.7675 48.2455 86.6911 49.6143L89.9455 49.6771C89.875 49.1856 89.7923 48.8039 89.6975 48.5321C89.613 48.2504 89.4572 48.0273 89.2304 47.8629C89.0137 47.6887 88.7004 47.5977 88.2905 47.5898Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 18,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M98.5932 59.5274L98.0406 58.8056C98.6661 58.3618 99.1406 57.9606 99.464 57.6018C99.7848 57.2527 100.035 56.8382 100.215 56.3583L99.2159 55.3311L99.3745 54.7369L102.399 54.2242L102.464 56.7722L98.5932 59.5274Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 19,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M124.944 69.684L121.698 66.6987L122.115 66.2461L123.829 66.3549L129.799 59.863L129.436 58.2858L129.852 57.8331L132.561 58.8982L133.091 59.3856L125.07 68.1076L125.728 69.3859L124.944 69.684Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 20,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M132.646 79.2639C132.301 78.9414 131.942 78.501 131.572 77.9427C131.19 77.3677 130.989 76.7571 130.969 76.1108C130.962 75.4673 131.118 74.8534 131.439 74.2689C131.767 73.6788 132.232 73.1848 132.832 72.7868C133.482 72.3556 134.218 72.1548 135.042 72.1843C135.88 72.2167 136.667 72.4265 137.404 72.8137C138.149 73.1953 138.709 73.6694 139.085 74.2361C139.633 75.061 139.738 75.9155 139.4 76.7995C139.062 77.6835 138.349 78.4807 137.26 79.191L134.217 74.6038C133.628 75.0906 133.24 75.6181 133.053 76.1862C132.871 76.7627 132.957 77.3176 133.311 77.8509C133.682 78.4092 134.583 78.9631 136.016 79.5127L135.681 80.2567L132.646 79.2639ZM137.413 74.3197C136.865 73.4947 136.007 73.4401 134.838 74.1558L136.637 76.8682C137.001 76.5306 137.268 76.2456 137.438 76.013C137.622 75.7832 137.716 75.5282 137.723 75.2481C137.743 74.9708 137.639 74.6613 137.413 74.3197Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 21,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M139.039 93.424L138.001 90.5295L139.229 90.089L137.4 88.9441C137.258 88.7828 137.135 88.561 137.034 88.2786C136.73 87.4315 136.716 86.7406 136.992 86.2062C137.281 85.6777 137.721 85.3072 138.315 85.0945C138.663 84.9696 139.044 84.9658 139.458 85.083C139.884 85.2062 140.328 85.435 140.787 85.7694L141.982 89.1016L142.632 88.8687C143.705 88.4839 144.036 87.7173 143.624 86.5689C143.408 85.9664 142.816 85.3076 141.847 84.5925L142.331 83.9411L144.645 85.3739C144.891 85.7321 145.12 86.2077 145.332 86.8007C145.667 87.7326 145.705 88.5367 145.449 89.2131C145.192 89.8895 144.64 90.3796 143.793 90.6834L139.91 92.0758L139.871 93.5238L139.039 93.424ZM138.714 88.2976C138.903 88.8248 139.353 89.3223 140.062 89.7902L141.262 89.3598L140.396 86.9454C140.103 86.8381 139.796 86.8419 139.476 86.9567C139.166 87.0681 138.932 87.2473 138.777 87.4944C138.634 87.7475 138.613 88.0152 138.714 88.2976Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 22,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M147.024 102.683C146.979 102.245 146.704 101.821 146.199 101.411L141.917 101.853L141.513 104.081L140.729 103.785L140.191 98.5781L140.803 98.5149L142.014 99.7319L145.894 99.3314L146.562 97.9202L147.174 97.8571L148.729 100.501L147.021 101.19L148.68 102.512C148.778 102.683 148.845 102.937 148.879 103.276C148.922 103.683 148.859 104.047 148.69 104.366C148.522 104.685 148.266 104.932 147.923 105.109L146.34 104.096L146.266 103.38C146.552 103.32 146.749 103.234 146.858 103.122C146.978 103.019 147.028 102.874 147.009 102.685L147.024 102.683Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 23,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M139.689 119.906L140.114 116.861L145.016 117.544C145.541 117.617 145.914 117.589 146.134 117.458C146.364 117.328 146.507 117.065 146.562 116.669C146.603 116.372 146.595 116.068 146.538 115.757C146.48 115.446 146.339 115.083 146.114 114.668L141.761 114.061L141.084 115.33L140.393 114.855L141.003 110.487L141.612 110.572L142.497 112.043L146.36 112.582L147.346 111.372L147.955 111.457L148.833 114.396L146.918 114.659L148.228 116.886C148.278 117.105 148.278 117.398 148.227 117.765C148.129 118.468 147.843 118.998 147.369 119.356C146.905 119.716 146.321 119.846 145.618 119.748L141.057 119.112L140.38 120.381L139.689 119.906Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 24,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M133.955 124.701L134.738 124.238C135.104 124.912 135.446 125.431 135.763 125.795C136.072 126.155 136.454 126.453 136.909 126.688L138.047 125.819L138.619 126.047L138.768 129.111L136.23 128.873L133.955 124.701Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 25,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M124.588 155.303C124.159 155.171 123.804 154.941 123.524 154.614C123.102 154.121 122.9 153.477 122.919 152.684C122.937 151.906 123.157 151.171 123.579 150.48C123.588 150.091 123.502 149.79 123.32 149.577C123.216 149.456 123.027 149.42 122.753 149.469C122.487 149.527 122.084 149.641 121.546 149.812C120.818 150.053 120.236 150.203 119.798 150.261C119.347 150.319 119.011 150.218 118.79 149.96C118.588 149.724 118.483 149.301 118.473 148.69C118.464 148.08 118.57 147.45 118.79 146.8C119.003 146.157 119.315 145.66 119.725 145.309C120.174 144.925 120.76 144.549 121.483 144.179C122.207 143.81 122.832 143.525 123.358 143.325L124.958 145.194L124.411 145.662C123.558 145.496 122.809 145.46 122.164 145.551C121.512 145.635 120.924 145.902 120.4 146.351C120.21 146.513 120.071 146.697 119.985 146.903C119.884 147.108 119.837 147.3 119.844 147.478C119.844 147.662 119.886 147.804 119.971 147.902C120.133 148.092 120.394 148.166 120.752 148.123C121.103 148.072 121.591 147.95 122.216 147.758C122.849 147.558 123.344 147.43 123.703 147.373C124.061 147.33 124.325 147.407 124.494 147.605C124.65 147.787 124.68 148.084 124.585 148.495C124.489 148.906 124.328 149.333 124.102 149.776C124.241 149.631 124.348 149.526 124.424 149.461C124.85 149.097 125.316 148.849 125.822 148.718C126.328 148.601 126.813 148.607 127.279 148.736C127.744 148.864 128.126 149.103 128.425 149.452C128.783 149.87 128.979 150.4 129.015 151.041C129.049 151.696 128.928 152.346 128.65 152.991C128.38 153.644 127.994 154.185 127.493 154.614C126.93 155.095 126.307 155.366 125.621 155.426L123.798 156.987L123.312 156.396L124.588 155.303ZM124.732 151.112C124.109 151.646 124.052 152.209 124.559 152.801C124.916 153.219 125.343 153.44 125.837 153.464C126.324 153.495 126.792 153.318 127.24 152.935C127.536 152.681 127.702 152.414 127.738 152.133C127.774 151.852 127.669 151.567 127.422 151.279C127.058 150.853 126.629 150.621 126.135 150.583C125.641 150.559 125.173 150.735 124.732 151.112Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 26,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M113.364 161.746C113.757 161.548 114.056 161.14 114.26 160.522L112.323 156.677L110.097 157.093L110.095 156.254L114.771 153.9L115.047 154.449L114.341 156.014L116.095 159.498L117.651 159.621L117.928 160.17L116.01 162.563L114.758 161.212L114.113 163.233C113.988 163.385 113.774 163.538 113.47 163.691C113.104 163.875 112.742 163.946 112.384 163.902C112.026 163.858 111.704 163.707 111.417 163.449L111.801 161.609L112.444 161.286C112.601 161.531 112.751 161.685 112.895 161.747C113.033 161.823 113.188 161.818 113.357 161.732L113.364 161.746Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 27,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M100.983 167.939C100.31 168.093 99.667 168.061 99.0528 167.843C98.4408 167.634 97.9227 167.275 97.4986 166.767C97.0648 166.261 96.7675 165.657 96.6068 164.956C96.4328 164.195 96.5087 163.429 96.8346 162.657C97.1507 161.887 97.6188 161.221 98.2389 160.658C98.8612 160.105 99.5038 159.753 100.167 159.601C100.839 159.447 101.482 159.474 102.094 159.683C102.698 159.904 103.217 160.267 103.651 160.773C104.087 161.289 104.386 161.898 104.546 162.599C104.72 163.36 104.648 164.12 104.33 164.88C104.004 165.652 103.53 166.315 102.907 166.868C102.287 167.43 101.646 167.787 100.983 167.939ZM101.51 166.341C101.997 166.23 102.325 165.96 102.494 165.531C102.653 165.105 102.65 164.531 102.484 163.81C102.281 162.923 101.928 162.229 101.423 161.729C100.919 161.229 100.326 161.057 99.6433 161.214C98.6491 161.441 98.3204 162.291 98.6574 163.763C98.8582 164.64 99.2108 165.329 99.7151 165.829C100.219 166.329 100.818 166.5 101.51 166.341Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 28,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M80.0278 168.586L83.5534 161.248L84.9932 161.271L86.4043 164.88L88.3078 161.326L89.7476 161.349L91.9507 166.981L93.362 167.829L93.3519 168.444L90.4666 169.657L89.9338 167.383L88.2488 163.095L86.8218 165.952L87.1963 166.903L88.6076 167.752L88.5975 168.366L85.7123 169.579L85.1794 167.305L83.5377 163.123L81.7646 166.964L83.8845 168.514L83.4972 169.258L80.0177 169.201L80.0278 168.586Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 29,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M76.2655 156.111L76.8202 156.831C76.1959 157.277 75.7226 157.68 75.4003 158.039C75.0804 158.389 74.8313 158.804 74.653 159.285L75.6549 160.309L75.4981 160.904L72.4752 161.425L72.4024 158.878L76.2655 156.111Z",
                                            fill: "black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                            lineNumber: 30,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                    lineNumber: 13,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/Hero_Section.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sections/Hero_Section.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/sections/Hero_Section.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "relative top-[-30px] text-gray-700 mt-2 text-md md:top-[-75px] max-w-[400px] sm:max-w-[400px] w-full md:left-[290px] md:text-left md:font-semibold",
                    children: "Discover insights, share knowledge, and connect with our community of thinkers and innovators."
                }, void 0, false, {
                    fileName: "[project]/app/components/sections/Hero_Section.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 md:mt-0 flex flex-col md:flex-row gap-4 justify-center sm:relative top-[-30px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-medium items-center gap-2 shadow-md hover:bg-blue-700 transition",
                            children: "Explore Blogs →"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-white text-black px-6 py-3 rounded-2xl text-lg font-medium shadow-md hover:bg-gray-100 transition",
                            children: "Write a Blog"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/Hero_Section.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/sections/Hero_Section.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/sections/Hero_Section.tsx",
            lineNumber: 8,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/sections/Hero_Section.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = HeroSection;
}}),

};

//# sourceMappingURL=app_components_sections_eebc6bc6._.js.map