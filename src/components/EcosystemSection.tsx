import { motion } from "framer-motion";
import { Monitor, QrCode, Map, Cpu, Brain, Bot, Wind, Glasses } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import logopost from "@/assets/logopost-logo.png";

const solutions = [
  { name: "Digital Signage", icon: Monitor },
  { name: "Smart Signage", icon: QrCode },
  { name: "Digital Wayfinding", icon: Map },
  { name: "IoT", icon: Cpu },
  { name: "IA", icon: Brain },
  { name: "Robótica", icon: Bot },
  { name: "Mkt Sensorial", icon: Wind },
  { name: "VR / AR", icon: Glasses },
];

const EcosystemSection = () => (
  <section id="ecosistema" className="py-12 md:py-16 bg-background relative overflow-hidden">
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

      <ScrollReveal delay={0.15}>
        <div className="relative max-w-3xl mx-auto aspect-square">
          {/* Orbit ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border border-dashed border-accent/20" />

          {/* Center: Logopost */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center shadow-[0_0_40px_hsl(var(--accent)/0.3)] z-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={logopost} alt="Logopost" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
          </motion.div>

          {/* Solutions orbit */}
          {solutions.map((sol, i) => {
            const angle = (i * 360) / solutions.length - 90;
            const rad = (angle * Math.PI) / 180;
            const radius = 42.5;
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1.5"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: "backOut" }}
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-card border-2 border-accent/40 shadow-xl flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-colors cursor-default">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" strokeWidth={1.8} />
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-foreground text-center max-w-[90px] leading-tight">
                  {sol.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EcosystemSection;
