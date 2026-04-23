import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import aiAgent from "@/assets/ai-agent.jpg";
import aiAvatar from "@/assets/ai-avatar.jpg";
import aiAdaptive from "@/assets/ai-adaptive.jpg";

const blocks = [
  {
    title: "Agente IA",
    img: aiAgent,
    desc: "Un asistente conversacional inteligente que automatiza procesos, atiende consultas y guía a usuarios y personal en tiempo real, integrándose con los sistemas existentes de tu organización.",
  },
  {
    title: "Avatar IA",
    img: aiAvatar,
    desc: "Un avatar virtual humano y empático que da rostro a la tecnología — interactúa por voz y gesto en pantallas y tótems, ofreciendo una experiencia cercana y accesible para cualquier usuario.",
  },
  {
    title: "IA Adaptable",
    img: aiAdaptive,
    desc: "Un asistente personalizable que aprende de cada entorno, adapta su tono, sus respuestas y sus capacidades a las necesidades específicas de cada área, espacio o caso de uso.",
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
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.25), transparent 60%)",
                  }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>

              {/* Animated accent bar */}
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
    </div>
  </section>
);

export default AiAgentSection;
