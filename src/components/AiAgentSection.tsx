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

// Duplicate for seamless loop
const duplicatedBlocks = [...blocks, ...blocks];

const AiAgentSection = () => (
  <section id="inteligencia-artificial" className="py-12 md:py-14 bg-background relative overflow-hidden">
    <style>{`
      @keyframes slide-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .ai-scroll-track {
        animation: slide-left 30s linear infinite;
      }
      .ai-scroll-track:hover {
        animation-play-state: paused;
      }
      .ai-scroll-container {
        mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
      }
    `}</style>

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-3">
            06
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Inteligencia Artificial</h2>
        </div>
      </ScrollReveal>

      <div className="ai-scroll-container w-full max-w-5xl mx-auto overflow-hidden">
        <div className="ai-scroll-track flex gap-5 w-max">
          {duplicatedBlocks.map((b, i) => (
            <div
              key={`${b.title}-${i}`}
              className="group relative flex-shrink-0 w-[260px] md:w-[300px] rounded-xl overflow-hidden border border-border hover:border-accent/50 bg-card shadow-md flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-foreground mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AiAgentSection;
