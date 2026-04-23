import { motion } from "framer-motion";
import { Bot, Glasses, Flower2, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import robotics from "@/assets/immersive-robotics.jpg";
import vr from "@/assets/immersive-vr.jpg";
import aroma from "@/assets/immersive-aroma.jpg";
import hologram from "@/assets/immersive-hologram.jpg";

const items = [
  { title: "Robótica", icon: Bot, img: robotics, span: "md:col-span-2 md:row-span-2" },
  { title: "Realidad Virtual", icon: Glasses, img: vr, span: "md:col-span-2" },
  { title: "Mkt Sensorial", icon: Flower2, img: aroma, span: "md:col-span-1" },
  { title: "Hologramas", icon: Sparkles, img: hologram, span: "md:col-span-1" },
];

const ImmersiveSection = () => (
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
      <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[180px] gap-3 md:gap-4 max-w-6xl mx-auto">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <ScrollReveal key={it.title} delay={i * 0.1} className={it.span}>
              <motion.div
                className="group relative h-full min-h-[180px] rounded-2xl overflow-hidden border border-accent/20 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.img
                  src={it.img}
                  alt={it.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-accent/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-center gap-3">
                  <motion.div
                    className="w-9 h-9 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/40 flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
                  </motion.div>
                  <h3 className="text-base md:text-lg font-bold text-white">{it.title}</h3>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ImmersiveSection;
