import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import navilensLogo from "@/assets/navilens-logo.png";
import navilensCode from "@/assets/navilens-code.png";
import visualfyLogo from "@/assets/visualfy-logo.png";

const NavilensSection = () => (
  <section id="accesibilidad" className="py-12 md:py-16 bg-surface relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }} />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">03</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Navegación Accesible
          </h2>
        </div>
      </ScrollReveal>

      {/* Navilens block */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <ScrollReveal className="flex-1 flex justify-center" direction="left">
          <div className="w-full max-w-xs flex flex-col items-center gap-4">
            <img src={navilensLogo} alt="navilens logo" className="max-w-[140px] w-full object-contain" />
            <motion.img
              src={navilensCode}
              alt="navilens code"
              className="w-full max-w-[260px] rounded-2xl shadow-2xl border-2 border-accent/20 object-contain"
              style={{ aspectRatio: "1/1" }}
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 },
              }}
            />
          </div>
        </ScrollReveal>

        <div className="flex-1 max-w-xl">
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <div className="dark-card p-5">
                <h3 className="text-base font-bold mb-1">¿Qué es Navilens y cómo funciona?</h3>
                <p className="text-sm leading-relaxed">
                  Navilens utiliza códigos geométricos de alto contraste y colores vivos,
                  legibles a hasta 12 metros sin necesidad de enfocar la cámara. El usuario
                  abre la app, apunta en la dirección general del código y recibe información
                  contextual por voz en tiempo real — una revolución para personas con
                  discapacidad visual.
                </p>
              </div>

              <div className="dark-card p-5">
                <h3 className="text-base font-bold mb-1">¿Por qué es imprescindible?</h3>
                <p className="text-sm leading-relaxed">
                  Los hospitales tienen la responsabilidad de ser accesibles para todos.
                  Navilens transforma entornos complejos en espacios navegables para personas
                  con discapacidad visual — desde la entrada principal hasta cada
                  departamento, sala de espera y consulta.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Visualfy block — imagen a la derecha, texto a la izquierda */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
        <ScrollReveal className="flex-1 flex justify-center" direction="right">
          <motion.img
            src={visualfyLogo}
            alt="Visualfy logo"
            className="w-full max-w-[260px] object-contain"
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3 },
            }}
          />
        </ScrollReveal>

        <div className="flex-1 max-w-xl">
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-4">
              <div className="dark-card p-5">
                <h3 className="text-base font-bold mb-1">Una empresa comprometida</h3>
                <p className="text-sm leading-relaxed">
                  Empresa española dedicada a crear tecnología para la accesibilidad
                  auditiva. Creemos en otra forma de hacer empresa — la que genera un
                  impacto positivo en su entorno y mide el éxito con variables sociales
                  además de económicas. Hemos sido reconocidos como una de las mejores
                  empresas para el mundo por nuestro impacto social.
                </p>
              </div>

              <div className="dark-card p-5">
                <h3 className="text-base font-bold mb-1">Tecnología que empodera</h3>
                <p className="text-sm leading-relaxed">
                  Nuestros productos empoderan a las personas sordas y a la sociedad de la
                  que forman parte, apoyando con tecnología una integración real. Nuestro
                  equipo está formado por personas sordas y oyentes, porque solo juntos
                  podemos crear el mundo que imaginamos.
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
