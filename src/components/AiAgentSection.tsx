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
  <section id="inteligencia-artificial" className="py-8 md:py-10 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-2">
            06
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">Inteligencia Artificial</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {blocks.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 0.1}>
            <div className="group relative rounded-xl overflow-hidden border border-border hover:border-accent/50 bg-card shadow-md h-full flex items-center gap-3 p-3 transition-colors duration-300">
              <img
                src={b.img}
                alt={b.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{b.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AiAgentSection;
