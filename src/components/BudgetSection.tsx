import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import LogopostLogo from "./LogopostLogo";
import asciresLogo from "@/assets/ascires-logo.png";

const ASCIRES_LOGO = asciresLogo;
const BUDGET_URL = "https://2ff6xv.share-eu1.hsforms.com/2vIt10PA2SWyd24cddBHzfg";

const BudgetSection = () => (
  <section className="py-16 md:py-24 bg-foreground relative overflow-hidden">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
          ¿Quieres digitalizar tu espacio?
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
          Solicita tu presupuesto personalizado y descubre cómo la tecnología puede mejorar la experiencia.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <a href={BUDGET_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="text-lg px-14 py-7 shadow-xl shadow-accent/30 group">
            Solicitar Presupuesto
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
          </Button>
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default BudgetSection;
