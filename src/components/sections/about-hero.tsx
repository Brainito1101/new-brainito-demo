"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Add / remove videos freely — slider handles any count ──────────────────
const VIDEOS = [
    "https://res.cloudinary.com/desluil7z/video/upload/v1773327518/1st_dsio5h.mp4",
    "https://res.cloudinary.com/desluil7z/video/upload/v1773327519/4th_bob7kk.mp4",
    "https://res.cloudinary.com/desluil7z/video/upload/v1773327519/6th_am33k5.mp4",
    "https://res.cloudinary.com/desluil7z/video/upload/v1773327520/5th_onfpd0.mp4",
    "https://res.cloudinary.com/desluil7z/video/upload/v1773327520/3rd_bfnhws.mp4",
    // ↓ Add more CDN URLs here
];
// ────────────────────────────────────────────────────────────────────────────

const AUTO_MS = 4500;

function wrap(i: number, len: number) {
    return ((i % len) + len) % len;
}

// 5 fixed visual slots (-2, -1, 0, 1, 2)
const SLOTS = [
    { offset: -2, rotate: -11, opacity: 0.58, width: "clamp(120px,15vw,210px)", height: "clamp(200px,26vw,360px)", zIndex: 1 },
    { offset: -1, rotate: -5, opacity: 0.82, width: "clamp(150px,19vw,260px)", height: "clamp(240px,32vw,440px)", zIndex: 2 },
    { offset: 0, rotate: 0, opacity: 1.00, width: "clamp(180px,23vw,320px)", height: "clamp(280px,38vw,520px)", zIndex: 5 },
    { offset: 1, rotate: 5, opacity: 0.82, width: "clamp(150px,19vw,260px)", height: "clamp(240px,32vw,440px)", zIndex: 2 },
    { offset: 2, rotate: 11, opacity: 0.58, width: "clamp(120px,15vw,210px)", height: "clamp(200px,26vw,360px)", zIndex: 1 },
];

const FLOAT_DUR = [4.4, 3.7, 4.9, 3.8, 4.3];
const FLOAT_AMT = [8, 10, 7, 10, 8];
const FLOAT_DEL = [0.2, 0.8, 0, 0.5, 1.1];

// Background orbs
const ORBS = [
    { w: 480, x: "4%", y: "8%", c: "rgba(203,132,255,0.13)", d: 12 },
    { w: 360, x: "72%", y: "5%", c: "rgba(113,56,154,0.10)", d: 15 },
    { w: 290, x: "50%", y: "65%", c: "rgba(203,132,255,0.09)", d: 10 },
    { w: 200, x: "16%", y: "68%", c: "rgba(113,56,154,0.07)", d: 13 },
];

// Floating dots
const DOTS = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    x: `${5 + (i * 5.9) % 90}%`,
    y: `${8 + (i * 7.1) % 78}%`,
    size: 2.5 + (i % 3),
    dur: 4.5 + (i % 5),
    delay: (i * 0.38) % 4,
    op: 0.12 + (i % 4) * 0.06,
}));

const WORDS = ["Growth", "with", "Control", "&", "Clarity"];

export function AboutHero() {
    const [centre, setCentre] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const total = VIDEOS.length;

    const goTo = useCallback((newIndex: number) => {
        setCentre(wrap(newIndex, total));
    }, [total]);

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setCentre(c => wrap(c + 1, total));
        }, AUTO_MS);
    }, [total]);

    useEffect(() => {
        resetTimer();
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [centre, resetTimer]);

    return (
        <section
            id="about-hero"
            style={{
                background: "linear-gradient(180deg,#FFFFFF 0%,#FAF5FF 18%,#F0E8FF 50%,#FAF5FF 82%,#FFFFFF 100%)",
                paddingTop: "clamp(80px,10vw,140px)",
                paddingBottom: "clamp(60px,8vw,110px)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* ── Background orbs ── */}
            {ORBS.map((o, i) => (
                <motion.div key={i}
                    style={{ position: "absolute", width: o.w, height: o.w, left: o.x, top: o.y, borderRadius: "50%", background: `radial-gradient(circle,${o.c} 0%,transparent 70%)`, pointerEvents: "none", zIndex: 0 }}
                    animate={{ x: [0, 26, -16, 10, 0], y: [0, -20, 13, -7, 0], scale: [1, 1.07, 0.94, 1.04, 1] }}
                    transition={{ duration: o.d, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: i * 1.8 }}
                />
            ))}

            {/* ── Floating dots ── */}
            {DOTS.map(d => (
                <motion.div key={d.id}
                    style={{ position: "absolute", left: d.x, top: d.y, width: d.size, height: d.size, borderRadius: "50%", background: "#9B5ED4", opacity: d.op, pointerEvents: "none", zIndex: 0 }}
                    animate={{ y: [0, -16, 0], opacity: [d.op, d.op * 1.8, d.op], scale: [1, 1.5, 1] }}
                    transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
                />
            ))}

            {/* ── Text block ── */}
            <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-center">

                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -14, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mb-8"
                >
                    <motion.div
                        className="inline-flex items-center px-[22px] py-[9px] rounded-full bg-white"
                        style={{ border: "1.5px solid #d4cde8", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
                        whileHover={{ boxShadow: "0 4px 20px rgba(113,56,154,0.18)", borderColor: "#b08cdc", scale: 1.04 }}
                        transition={{ duration: 0.22 }}
                    >
                        <span style={{ fontFamily: "var(--font-poppins),ui-sans-serif", fontSize: "14px", fontWeight: 400, color: "#101011" }}>
                            About Us
                        </span>
                    </motion.div>
                </motion.div>

                {/* Heading — single line */}
                <div style={{ fontFamily: "var(--font-poppins),ui-sans-serif", fontSize: "clamp(34px,5.5vw,56px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "22px" }}>
                    {WORDS.map((w, wi) => (
                        <motion.span key={wi}
                            initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.55, delay: 0.12 + wi * 0.11, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                display: "inline-block",
                                marginRight: "0.26em",
                                background: (wi < 2) ? "linear-gradient(to bottom,#71389A 0%,#CB84FF 100%)" : "none",
                                WebkitBackgroundClip: (wi < 2) ? "text" : "none",
                                WebkitTextFillColor: (wi < 2) ? "transparent" : "#101011",
                                backgroundClip: (wi < 2) ? "text" : "none",
                                color: (wi >= 2) ? "#101011" : "inherit"
                            }}
                        >{w}</motion.span>
                    ))}
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.66 }}
                    style={{ fontFamily: "var(--font-poppins),ui-sans-serif", fontSize: "clamp(15px,2vw,18px)", color: "#3d3d3d", lineHeight: 1.75, maxWidth: "540px", margin: "0 auto", fontWeight: 400, marginBottom: "clamp(52px,7vw,88px)" }}
                >
                    Where AI-driven insights meet human-led execution. Helping

                    businesses grow through clarity and data.
                </motion.p>
            </div>

            {/* ══════════════════════════════════════════
                  FULL-BLEED SLIDER
              ══════════════════════════════════════════ */}
            {/* ══════════════════════════════════════════
                  FULL-BLEED SLIDER (Commented out for now)
              ══════════════════════════════════════════
            <div style={{ position: "relative", width: "100vw", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "clamp(8px,1.2vw,18px)",
                    paddingBottom: "28px",
                    paddingLeft: "0",
                    paddingRight: "0",
                }}>
                    {SLOTS.map((slot, si) => {
                        const videoIndex = wrap(centre + slot.offset, total);
                        const isCentre = slot.offset === 0;

                        const slotWidths = [
                            "clamp(115px, 14vw, 195px)", // -2
                            "clamp(145px, 18vw, 255px)", // -1
                            "clamp(185px, 24vw, 335px)", // 0
                            "clamp(175px, 22vw, 315px)", // 1 (wider)
                            "clamp(105px, 13vw, 185px)", // 2 (thinner)
                        ];
                        const slotHeights = [
                            "clamp(215px, 27vw, 375px)", // -2
                            "clamp(275px, 35vw, 475px)", // -1
                            "clamp(315px, 43vw, 575px)", // 0 (tallest)
                            "clamp(215px, 27vw, 355px)", // 1 (shorter)
                            "clamp(255px, 33vw, 455px)", // 2 (taller)
                        ];

                        return (
                            <motion.div
                                key={slot.offset}
                                initial={{ opacity: 0, y: 70, rotate: slot.rotate * 0.3, scale: 0.82 }}
                                animate={{ opacity: slot.opacity, y: 0, rotate: slot.rotate, scale: 1, zIndex: slot.zIndex }}
                                transition={{ type: "spring", stiffness: 95, damping: 18, delay: 0.85 + si * 0.1 }}
                                onClick={() => { if (!isCentre) { goTo(videoIndex); resetTimer(); } }}
                                whileHover={!isCentre ? { opacity: 1, scale: 1.03, transition: { duration: 0.22 } } : undefined}
                                style={{
                                    flexShrink: 0,
                                    width: slotWidths[si],
                                    height: slotHeights[si],
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    transformOrigin: "bottom center",
                                    position: "relative",
                                    cursor: isCentre ? "default" : "pointer",
                                    border: isCentre ? "2px solid rgba(203,132,255,0.6)" : "2px solid rgba(255,255,255,0.7)",
                                    boxShadow: isCentre
                                        ? "0 28px 80px rgba(113,56,154,0.30),0 8px 28px rgba(0,0,0,0.14)"
                                        : "0 10px 40px rgba(0,0,0,0.11)",
                                    willChange: "transform,opacity",
                                }}
                            >
                                <motion.div
                                    style={{ width: "100%", height: "100%" }}
                                    animate={{ y: [0, -FLOAT_AMT[si], 0] }}
                                    transition={{
                                        duration: FLOAT_DUR[si],
                                        delay: FLOAT_DEL[si] + 1.5 + si * 0.12,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        repeatType: "mirror",
                                    }}
                                >
                                    <video
                                        src={VIDEOS[videoIndex]}
                                        autoPlay loop muted playsInline
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                    />
                                </motion.div>

                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.22) 0%,transparent 55%)", pointerEvents: "none" }} />

                                {isCentre && (
                                    <motion.div
                                        style={{ position: "absolute", inset: -2, borderRadius: "22px", pointerEvents: "none", background: "linear-gradient(135deg,rgba(203,132,255,0) 0%,rgba(203,132,255,0.55) 40%,rgba(113,56,154,0.55) 60%,rgba(203,132,255,0) 100%)", backgroundSize: "200% 200%" }}
                                        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"], opacity: [0.3, 0.72, 0.3] }}
                                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", width: "45%", height: "50px", borderRadius: "50%", background: "radial-gradient(ellipse,rgba(113,56,154,0.18) 0%,transparent 70%)", pointerEvents: "none", zIndex: -1 }}
                    animate={{ opacity: [0.45, 1, 0.45], scaleX: [0.85, 1.15, 0.85] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "18px", marginTop: "28px" }}>

                    <motion.button
                        onClick={() => { goTo(centre - 1); resetTimer(); }}
                        aria-label="Previous video"
                        whileHover={{ scale: 1.1, boxShadow: "0 6px 22px rgba(113,56,154,0.26)" }}
                        whileTap={{ scale: 0.92 }}
                        style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid #9B72C0", background: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#71389A", cursor: "pointer", outline: "none", flexShrink: 0 }}
                    >
                        <ChevronLeft size={22} />
                    </motion.button>

                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        {VIDEOS.map((_, i) => (
                            <motion.button key={i}
                                onClick={() => { goTo(i); resetTimer(); }}
                                aria-label={`Go to video ${i + 1}`}
                                animate={{ width: i === centre ? 26 : 8, background: i === centre ? "#71389A" : "#D4B8ED", opacity: i === centre ? 1 : 0.55 }}
                                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                                style={{ height: "8px", borderRadius: "9999px", border: "none", cursor: "pointer", padding: 0, outline: "none", display: "block" }}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={() => { goTo(centre + 1); resetTimer(); }}
                        aria-label="Next video"
                        whileHover={{ scale: 1.1, boxShadow: "0 6px 22px rgba(113,56,154,0.38)" }}
                        whileTap={{ scale: 0.92 }}
                        style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(to top right,#B265E6,#71389A)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "white", cursor: "pointer", outline: "none", boxShadow: "0 4px 14px rgba(113,56,154,0.35)", flexShrink: 0 }}
                    >
                        <ChevronRight size={22} />
                    </motion.button>
                </div>

                <div style={{ width: "160px", height: "3px", background: "rgba(113,56,154,0.12)", borderRadius: "9999px", margin: "18px auto 0", overflow: "hidden" }}>
                    <motion.div
                        key={centre}
                        initial={{ width: "0%" }} animate={{ width: "100%" }}
                        transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                        style={{ height: "100%", background: "linear-gradient(to right,#71389A,#CB84FF)", borderRadius: "inherit" }}
                    />
                </div>

            </div>
            */}
        </section>
    );
}
