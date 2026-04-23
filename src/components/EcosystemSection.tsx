import { motion } from "framer-motion";
import { Sparkles, Monitor, QrCode, Map, Cpu, Glasses, Bot, Wind } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

// Inner ring: AI engines that power the ecosystem
import chatgptLogo from "@/assets/logos/chatgpt.png";
import claudeLogo from "@/assets/logos/claude.png";
import geminiLogo from "@/assets/logos/gemini.png";
import heygenLogo from "@/assets/logos/heygen.png";

const innerRing = [
  { name: "ChatGPT", logo: chatgptLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Gemini", logo: geminiLogo },
  { name: "HeyGen", logo: heygenLogo },
];

// Outer ring: Logopost digital solutions
const outerRing = [
  { name: "Digital Signage", icon: Monitor },
  { name: "Smart Signage", icon: QrCode },
  { name: "Digital Wayfinding", icon: Map },
  { name: "Soluciones IoT", icon: Cpu },
  { name: "VR / AR", icon: Glasses },
  { name: "Robótica", icon: Bot },
  { name: "MKT Sensorial", icon: Wind },
];

const EcosystemSection = () => (
  <section id="ecosistema" className="py-12 md:py-16 bg-background relative overflow-hidden">
    {/* Background glow */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            00
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Un ecosistema digital
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Diseñamos, integramos y gestionamos soluciones digitales para tus espacios — del diseño
            del espacio a su digitalización completa, con la <span className="text-accent font-semibold">inteligencia artificial</span> como
            eje central que conecta cada tecnología.
          </p>
        </div>
      </ScrollReveal>

      {/* Orbital diagram */}
      <ScrollReveal delay={0.15}>
        <TooltipProvider delayDuration={150}>
          <div className="relative max-w-3xl mx-auto aspect-square">
            {/* Orbit rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full border border-dashed border-accent/25" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-accent/15" />

            {/* Slow rotating accent dot on outer orbit */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
            </motion.div>

            {/* Center: AI core */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-accent text-accent-foreground flex flex-col items-center justify-center shadow-[0_0_40px_hsl(var(--accent)/0.4)] z-20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-7 h-7 md:w-8 md:h-8 mb-1" strokeWidth={2} />
              <span className="text-xs md:text-sm font-bold tracking-wide">IA</span>
            </motion.div>

            {/* Inner ring: AI engines */}
            {innerRing.map((tool, i) => {
              const angle = (i * 360) / innerRing.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 27.5;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <Tooltip key={tool.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: "backOut" }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-accent/30 shadow-lg flex items-center justify-center cursor-pointer hover:border-accent transition-colors">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-7 h-7 md:w-8 md:h-8 object-contain"
                          loading="lazy"
                          width={32}
                          height={32}
                        />
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <span className="text-xs font-medium">{tool.name}</span>
                  </TooltipContent>
                </Tooltip>
              );
            })}

            {/* Outer ring: solutions */}
            {outerRing.map((sol, i) => {
              const angle = (i * 360) / outerRing.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 45;
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
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.07, ease: "backOut" }}
                  whileHover={{ y: -4 }}
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
        </TooltipProvider>
      </ScrollReveal>

      {/* Footer caption */}
      <ScrollReveal delay={0.3}>
        <p className="text-center text-xs md:text-sm text-muted-foreground mt-10 max-w-2xl mx-auto italic">
          Un todo que <span className="text-accent font-semibold not-italic">piensa, analiza y entrega</span> soluciones
          en forma de experiencia memorable.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default EcosystemSection;
