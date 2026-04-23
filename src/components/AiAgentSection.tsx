import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import aiAgent from "@/assets/ai-agent.jpg";
import aiAvatar from "@/assets/ai-avatar.jpg";
import aiAdaptive from "@/assets/ai-adaptive.jpg";
import chatgptLogo from "@/assets/logos/chatgpt.png";
import claudeLogo from "@/assets/logos/claude.png";
import heygenLogo from "@/assets/logos/heygen.png";
import synthesiaLogo from "@/assets/logos/synthesia.png";
import geminiLogo from "@/assets/logos/gemini.png";
import mistralLogo from "@/assets/logos/mistral.png";

const blocks = [
  {
    title: "Agente IA",
    img: aiAgent,
    desc: "Asistente conversacional que automatiza procesos, atiende consultas y guía a usuarios y personal en tiempo real.",
    tools: [
      { src: chatgptLogo, name: "ChatGPT" },
      { src: claudeLogo, name: "Claude" },
    ],
  },
  {
    title: "Avatar IA",
    img: aiAvatar,
    desc: "Avatar virtual humano y empático que interactúa por voz y gesto en pantallas y tótems de forma accesible.",
    tools: [
      { src: heygenLogo, name: "HeyGen" },
      { src: synthesiaLogo, name: "Synthesia" },
    ],
  },
  {
    title: "IA Adaptable",
    img: aiAdaptive,
    desc: "Asistente personalizable que aprende del entorno y adapta tono, respuestas y capacidades a cada caso de uso.",
    tools: [
      { src: geminiLogo, name: "Gemini" },
      { src: mistralLogo, name: "Mistral" },
    ],
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
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">06</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Inteligencia Artificial
          </h2>
        </div>
      </ScrollReveal>

      <TooltipProvider delayDuration={150}>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.12}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden border-2 border-accent/20 bg-card shadow-xl h-full flex flex-col"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{b.desc}</p>

                  {/* Tool logos */}
                  <div className="pt-4 border-t border-border/60 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-primary font-bold">
                      Tech
                    </span>
                    <div className="flex items-center gap-2">
                      {b.tools.map((t) => (
                        <Tooltip key={t.name}>
                          <TooltipTrigger asChild>
                            <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden hover:border-accent hover:scale-110 transition-all cursor-pointer">
                              <img
                                src={t.src}
                                alt={t.name}
                                className="w-5 h-5 object-contain"
                                loading="lazy"
                                width={20}
                                height={20}
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <span className="text-xs font-medium">{t.name}</span>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-accent"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </TooltipProvider>
    </div>
  </section>
);

export default AiAgentSection;
