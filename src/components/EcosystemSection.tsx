import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import logopost from "@/assets/logopost-logo.png";

// Placeholder icons — replace with your own assets
import iconSignage from "@/assets/icon-signage.png";
import iconSmart from "@/assets/icon-smart.png";
import iconWayfinding from "@/assets/icon-wayfinding.png";
import iconIot from "@/assets/icon-iot.png";
import iconIa from "@/assets/icon-ia.png";
import iconRobotics from "@/assets/icon-robotics.png";
import iconSensorial from "@/assets/icon-sensorial.png";
import iconVr from "@/assets/icon-vr.png";

const solutions = [
  { name: "Digital Signage", img: iconSignage },
  { name: "Smart Signage", img: iconSmart },
  { name: "Digital Wayfinding", img: iconWayfinding },
  { name: "IoT", img: iconIot },
  { name: "IA", img: iconIa },
  { name: "Robótica", img: iconRobotics },
  { name: "Mkt Sensorial", img: iconSensorial },
  { name: "VR / AR", img: iconVr },
];

const EcosystemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Progress: 0 when section top hits viewport bottom, 1 when section is fully scrolled through
      const raw = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
      setProgress(Math.max(0, Math.min(raw, 1)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Expand radius: items start stacked at center, expand outward as you scroll
  const expandProgress = Math.min(progress / 0.4, 1); // Full expansion by 40% scroll
  const maxRadius = 42.5; // % from center
  const currentRadius = expandProgress * maxRadius;

  return (
    <section ref={sectionRef} id="ecosistema" className="py-12 md:py-16 bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">Un ecosistema digital</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Diseñamos, integramos y gestionamos soluciones digitales para tus espacios — del diseño del espacio a su
              digitalización completa, con la <span className="text-accent font-semibold">inteligencia artificial</span>{" "}
              como eje central que conecta cada tecnología.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto aspect-square">
          {/* Orbit ring — fades in as items expand */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border border-dashed border-accent/20 transition-opacity duration-700"
            style={{ opacity: expandProgress > 0.5 ? expandProgress : 0 }}
          />

          {/* Center: Logopost */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center shadow-[0_0_40px_hsl(var(--accent)/0.3)] z-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={logopost} alt="Logopost" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
          </motion.div>

          {/* Solutions — expand from center on scroll */}
          {solutions.map((sol, i) => {
            const angle = (i * 360) / solutions.length - 90;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + currentRadius * Math.cos(rad);
            const y = 50 + currentRadius * Math.sin(rad);

            return (
              <motion.div
                key={sol.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1.5 transition-all duration-300 ease-out"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  opacity: expandProgress,
                  scale: 0.5 + expandProgress * 0.5,
                }}
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-card border-2 border-accent/40 shadow-xl flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-colors cursor-default overflow-hidden">
                  <img src={sol.img} alt={sol.name} className="w-8 h-8 md:w-9 md:h-9 object-contain" loading="lazy" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-foreground text-center max-w-[90px] leading-tight">
                  {sol.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
