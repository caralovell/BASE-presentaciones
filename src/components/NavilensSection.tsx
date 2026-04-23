import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import navilensLogo from "@/assets/navilens-logo.png";
import navilensCode from "@/assets/navilens-code.png";

const NavilensSection = () => (
  <section id="accesibilidad" className="py-12 md:py-16 bg-surface relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }} />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">03</span>

          <div className="flex justify-center mb-6">
            <img src={navilensLogo} alt="navilens logo" className="max-w-[180px] w-full object-contain" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Navegación Accesible
          </h2>
        </div>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <ScrollReveal className="flex-1 flex justify-center" direction="left">
          <motion.img
            src={navilensCode}
            alt="navilens code"
            className="w-full max-w-sm rounded-2xl shadow-2xl border-2 border-accent/20 object-contain"
            style={{ aspectRatio: "1/1" }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3 },
            }}
          />
        </ScrollReveal>

        <div className="flex-1 max-w-xl">
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <div className="dark-card p-5">
                <h3 className="text-base font-bold mb-1">¿Qué es Navilens?</h3>
                <p className="text-sm leading-relaxed">
                  Navilens utiliza códigos geométricos de alto contraste y colores vivos,
                  diseñados para ser leídos a larga distancia — hasta 12 metros — sin
                  necesidad de enfocar la cámara. Una revolución para personas con
                  discapacidad visual.
                </p>
              </div>

              <div className="dark-card p-5">
                <h3 className="text-base font-bold mb-1">¿Cómo funciona?</h3>
                <p className="text-sm leading-relaxed">
                  El usuario simplemente abre la app Navilens y apunta en la dirección general
                  del código. Sin necesidad de enfocar, sin necesidad de estar cerca. El
                  código se detecta automáticamente y proporciona información contextual
                  por voz en tiempo real.
                </p>
              </div>

              <div className="dark-card p-5">
                <h3 className="text-base font-bold mb-1">¿Por qué es imprescindible?</h3>
                <p className="text-sm leading-relaxed">
                  Los hospitales tienen la responsabilidad de ser accesibles para todos.
                  Navilens transforma los entornos complejos en espacios navegables para
                  personas con discapacidad visual — desde la entrada principal hasta cada
                  departamento, sala de espera y consulta.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default NavilensSection;
