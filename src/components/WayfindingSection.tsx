import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import wayfindingImg from "@/assets/wayfinding.png";

const WayfindingSection = () => (
  <section id="wayfinding" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <ScrollReveal className="flex-1 max-w-xl" direction="left">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">03</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Digital Wayfinding</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Navegación interior interactiva que guía a pacientes y visitantes a través de los espacios
            del hospital con zonas codificadas por colores y orientación en tiempo real.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Facilita el movimiento por espacios complejos, reduciendo estrés y mejorando la experiencia
            del usuario desde el primer momento.
          </p>
          <a href="https://digital.logopost.es/landing5/mapa.html" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="text-base px-10 py-6 group">
              Ver mapa
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
            </Button>
          </a>
        </ScrollReveal>

        <ScrollReveal className="flex-1 flex justify-center" delay={0.15} direction="right">
          <motion.img
            src={wayfindingImg}
            alt="hospital navigation map mobile"
            className="w-full max-w-sm rounded-2xl shadow-2xl border-2 border-accent/20 object-cover"
            style={{ aspectRatio: "4/3" }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3 },
            }}
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WayfindingSection;
