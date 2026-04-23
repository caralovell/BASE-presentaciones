import { motion } from "framer-motion";
import { Eye, Ear } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import navilensLogo from "@/assets/navilens-logo.png";
import navilensCode from "@/assets/navilens-code.png";
import visualfyLogo from "@/assets/visualfy-logo.png";
import visualfyDevice from "@/assets/visualfy-device.jpg";

const NavilensSection = () => (
  <div className="mt-12 md:mt-16">
    <ScrollReveal>
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">Accesibilidad</h3>
      </div>
    </ScrollReveal>

    <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
      {/* NAVILENS Card */}
      <ScrollReveal direction="left">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-6 overflow-hidden transition-colors duration-500"
        >
          <motion.div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative grid grid-cols-[1fr_auto] gap-4 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-5 h-5 text-accent" strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                    Discapacidad visual
                  </span>
                  <img src={navilensLogo} alt="Navilens" className="h-7 object-contain mt-0.5" />
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Códigos geométricos legibles a hasta <strong className="text-foreground">12 metros</strong> sin
                necesidad de enfocar la cámara. Información por voz al instante.
              </p>
            </div>

            <div className="relative flex justify-center shrink-0">
             
              <motion.img
                src={navilensCode}
                alt="Código Navilens"
                className="relative w-full max-w-[110px] rounded-2xl shadow-xl object-contain bg-background p-2"
                whileHover={{ scale: 1.05, rotate: 2 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.3 },
                }}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </ScrollReveal>

      {/* VISUALFY Card */}
      <ScrollReveal direction="right" delay={0.1}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-6 overflow-hidden transition-colors duration-500"
        >
          <motion.div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <motion.div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-accent/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid grid-cols-[1fr_auto] gap-4 items-center">
  <div>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Ear className="w-5 h-5 text-accent" strokeWidth={2.2} />
      </div>
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
          Discapacidad auditiva
        </span>
        <img src={visualfyLogo} alt="Visualfy" className="h-7 object-contain mt-0.5" />
      </div>
    </div>

    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
      Transforma los sonidos del entorno en{" "}
      <strong className="text-foreground">alertas visuales y vibratorias</strong>, devolviendo autonomía a las
      personas sordas.
    </p>
  </div>

  <div className="relative flex justify-center shrink-0">
    <motion.div
      className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-2xl"
      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.img
      src={visualfyDevice}
      alt="Dispositivo Visualfy"
      className="relative w-full max-w-[110px] rounded-2xl shadow-xl object-cover bg-background p-2"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
      loading="lazy"
    />
  </div>
</div>

          
          </div>
        </motion.div>
      </ScrollReveal>
    </div>
  </div>
);

export default NavilensSection;
