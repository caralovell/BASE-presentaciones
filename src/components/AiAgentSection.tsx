import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
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
    subtitle: "Asistente conversacional inteligente",
    img: aiAgent,
    desc: "Un asistente conversacional inteligente que automatiza procesos, atiende consultas y guía a usuarios y personal en tiempo real, integrándose con los sistemas existentes de tu organización.",
    points: [
      "Atención 24/7 en lenguaje natural",
      "Integración con sistemas internos",
      "Automatización de consultas frecuentes",
    ],
    tools: [
      { src: chatgptLogo, name: "ChatGPT" },
      { src: claudeLogo, name: "Claude" },
    ],
  },
  {
    title: "Avatar IA",
    subtitle: "Rostro humano y empático",
    img: aiAvatar,
    desc: "Un avatar virtual humano y empático que da rostro a la tecnología — interactúa por voz y gesto en pantallas y tótems, ofreciendo una experiencia cercana y accesible para cualquier usuario.",
    points: [
      "Interacción por voz y gestos",
      "Presencia humana en tótems y pantallas",
      "Experiencia accesible e inclusiva",
    ],
    tools: [
      { src: heygenLogo, name: "HeyGen" },
      { src: synthesiaLogo, name: "Synthesia" },
    ],
  },
  {
    title: "IA Adaptable",
    subtitle: "Personalizable a cada entorno",
    img: aiAdaptive,
    desc: "Un asistente personalizable que aprende de cada entorno, adapta su tono, sus respuestas y sus capacidades a las necesidades específicas de cada área, espacio o caso de uso.",
    points: [
      "Aprende del contexto de cada espacio",
      "Tono y respuestas configurables",
      "Capacidades adaptadas por caso de uso",
    ],
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">06</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Inteligencia Artificial
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto space-y-10">
        {blocks.map((b, i) => {
          const reverse = i % 2 === 1;
          return (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden border-2 border-accent/20 bg-card shadow-xl"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                  {/* Image side */}
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[340px]">
                    <motion.img
                      src={b.img}
                      alt={b.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${reverse ? "l" : "r"} from-transparent via-transparent to-card/40`} />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] font-primary font-bold text-accent bg-background/80 backdrop-blur px-2.5 py-1 rounded-full border border-accent/30">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Info side */}
                  <div className="p-6 md:p-8 flex flex-col justify-between gap-5">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{b.title}</h3>
                      <p className="text-sm text-accent font-semibold mb-4">{b.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{b.desc}</p>

                      <ul className="space-y-2">
                        {b.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-foreground/90">
                            <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                            </span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="pt-4 border-t border-border/60">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-primary font-bold mb-3">
                        Tecnologías
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {b.tools.map((t) => (
                          <div
                            key={t.name}
                            className="flex items-center gap-2 bg-background border border-border rounded-full pl-1.5 pr-3 py-1 hover:border-accent/50 transition-colors"
                          >
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                              <img
                                src={t.src}
                                alt={t.name}
                                className="w-5 h-5 object-contain"
                                loading="lazy"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="text-xs font-medium text-foreground">{t.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated accent bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                />
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default AiAgentSection;
