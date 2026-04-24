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
  <section id="inteligencia-artificial" className="py-12 md:py-14 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-3">
            06
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Inteligencia Artificial</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {blocks.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 0.1}>
            <div className="group relative rounded-xl overflow-hidden border border-border hover:border-accent/50 bg-card shadow-md h-full flex flex-col transition-colors duration-300">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-foreground mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AiAgentSection;
