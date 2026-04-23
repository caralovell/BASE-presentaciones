import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import totemImg from "@/assets/totem.png";

const useCases = [
  { title: "Operaciones internas", desc: "Automatiza procesos administrativos y reduce la carga operativa del personal hospitalario." },
  { title: "Soporte al personal", desc: "Asistencia en tiempo real para protocolos, consultas de procedimientos y gestión de turnos." },
  { title: "Atención al paciente", desc: "Respuestas inmediatas a preguntas frecuentes, orientación y seguimiento personalizado." },
  { title: "Formación y onboarding", desc: "Acompañamiento inteligente en la incorporación de nuevo personal sanitario." },
  { title: "Cumplimiento normativo", desc: "Monitorización automática de estándares y alertas de compliance en tiempo real." },
  { title: "Integración con sistemas hospitalarios", desc: "Conexión con HIS, ERP y otros sistemas para centralizar datos y mejorar la eficiencia operativa en todo el entorno hospitalario." },
];

const AiAgentSection = () => (
  <section id="agente-ia" className="py-12 md:py-16 bg-background relative overflow-hidden">
    <motion.div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">06</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Agente IA
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="flex justify-center mb-10">
          <img
            src={totemImg}
            alt="virtual assistant hospital"
            className="w-full max-w-md rounded-2xl shadow-2xl border-2 border-accent/20 object-contain"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto mb-10">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="glass-card p-5 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-base font-bold text-foreground mb-1">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

    </div>
  </section>
);

export default AiAgentSection;
