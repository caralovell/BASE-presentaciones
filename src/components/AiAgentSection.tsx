import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import aiAgent from "@/assets/ai-agent.jpg";
import aiAvatar from "@/assets/ai-avatar.jpg";
import aiAdaptive from "@/assets/ai-adaptive.jpg";

const blocks = [
  {
    title: "Agente IA",
    img: aiAgent,
    desc: "Asistente conversacional que automatiza procesos, atiende consultas y guía a usuarios y personal en tiempo real.",
  },
  {
    title: "Avatar IA",
    img: aiAvatar,
    desc: "Avatar virtual humano y empático que interactúa por voz y gesto en pantallas y tótems de forma accesible.",
  },
  {
    title: "IA Adaptable",
    img: aiAdaptive,
    desc: "Asistente personalizable que aprende del entorno y adapta tono, respuestas y capacidades a cada caso de uso.",
  },
];

const AiAgentSection = () => (
  <section id="inteligencia-artificial" className="py-12 md:py-16 bg-background relative overflow-hidden">
    <motion.div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            06
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">Inteligencia Artificial</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blocks.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 0.12}>
            <motion.div
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-accent/50 bg-card shadow-xl h-full flex flex-col transition-colors duration-300"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{b.desc}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AiAgentSection;
