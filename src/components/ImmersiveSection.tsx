import { motion, useMotionValue, useSpring } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useEffect, useRef } from "react";
import robotics from "@/assets/immersive-robotics.jpg";
import vr from "@/assets/immersive-vr.jpg";
import aroma from "@/assets/immersive-aroma.jpg";
import hologram from "@/assets/immersive-hologram.jpg";

const items = [
  { title: "Robótica", img: robotics },
  { title: "Realidad Virtual", img: vr },
  { title: "Mkt Sensorial", img: aroma },
  { title: "Hologramas", img: hologram },
];

const ImmersiveSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(x * 15);
      mouseY.set(y * 10);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="experiencia-inmersiva" className="py-12 md:py-16 bg-background relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
              07
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3">Experiencia Inmersiva</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Tecnologías complementarias que elevan la experiencia sensorial del espacio.
            </p>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          <div className="flex justify-center items-end gap-4 md:gap-6 py-8">
            {items.map((it, i) => {
              const arcOffsets = [-12, -28, -28, -12];
              const rotations = [-6, -2, 2, 6];
              const floatDelay = i * 0.8;

              return (
                <ScrollReveal key={it.title} delay={i * 0.1}>
                  <motion.div
                    className="group relative cursor-pointer"
                    style={{
                      x: smoothX,
                      y: smoothY,
                    }}
                    animate={{
                      y: [arcOffsets[i], arcOffsets[i] - 8, arcOffsets[i]],
                      rotate: rotations[i],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: floatDelay,
                      },
                      rotate: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.08, y: arcOffsets[i] - 16, rotate: 0 }}
                  >
                    <div className="relative w-[130px] h-[180px] md:w-[150px] md:h-[210px] rounded-2xl overflow-hidden shadow-xl border border-accent/20">
                      <img
                        src={it.img}
                        alt={it.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-center">
                        <h3 className="text-xs md:text-sm font-bold text-white text-center leading-tight">
                          {it.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveSection;
