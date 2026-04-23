import { motion } from "framer-motion";
import { Ear, MapPin, Sparkles, Heart, Eye } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import navilensLogo from "@/assets/navilens-logo.png";
import navilensCode from "@/assets/navilens-code.png";
import navilensNyc from "@/assets/navilens-nyc.jpg";
import visualfyLogo from "@/assets/visualfy-logo.png";
import visualfyDevice from "@/assets/visualfy-device.jpg";

const navilensFeatures = [
  { icon: Eye, title: "Lectura sin enfocar", desc: "Detecta códigos a 12 m sin necesidad de apuntar con precisión." },
  { icon: Sparkles, title: "Información por voz", desc: "Indicaciones contextuales en tiempo real en el idioma del usuario." },
  { icon: MapPin, title: "Wayfinding inteligente", desc: "Guía paso a paso por cualquier recinto, desde la entrada hasta el destino final." },
];

const visualfyFeatures = [
  { icon: Ear, title: "Detección de sonidos", desc: "Alertas visuales y vibratorias de sirenas, llamadas, timbres y más." },
  { icon: Heart, title: "Impacto social", desc: "Reconocida como una de las mejores empresas para el mundo." },
];

const NavilensSection = () => (
  <section id="accesibilidad" className="py-12 md:py-20 bg-surface relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }} />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }} />

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">03</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Accesibilidad
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Un espacio verdaderamente inclusivo no deja a nadie atrás. Integramos las tecnologías
            líderes mundiales para garantizar que <strong className="text-foreground">cualquier persona</strong>,
            independientemente de sus capacidades, pueda navegar, comunicarse y sentirse segura.
          </p>
        </div>
      </ScrollReveal>

      {/* === NAVILENS BLOCK === */}
      <ScrollReveal>
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 mt-12">
          <img src={navilensLogo} alt="Navilens" className="h-12 md:h-14 object-contain" />
          <div className="h-10 w-px bg-border hidden md:block" />
          <span className="text-sm md:text-base font-semibold text-foreground">Para personas con discapacidad visual</span>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
        <ScrollReveal direction="left">
          <div className="relative group">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-tr from-accent/30 to-transparent rounded-3xl blur-2xl opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <img
                src={navilensNyc}
                alt="Navilens en el metro de Nueva York"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>

            {/* Floating navilens code */}
            <motion.img
              src={navilensCode}
              alt="Código Navilens"
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl shadow-2xl border-2 border-accent/40 object-contain bg-background p-2"
              animate={{ rotate: [0, 5, 0, -5, 0], y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Códigos geométricos de alto contraste, legibles a hasta <strong className="text-foreground">12 metros</strong> sin
            necesidad de enfocar la cámara. El usuario apunta con su móvil y recibe información por voz al instante —
            una revolución mundial para la navegación accesible.
          </p>
          <div className="space-y-3">
            {navilensFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-0.5">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* === VISUALFY BLOCK === */}
      <ScrollReveal>
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
          <img src={visualfyLogo} alt="Visualfy" className="h-12 md:h-14 object-contain" />
          <div className="h-10 w-px bg-border hidden md:block" />
          <span className="text-sm md:text-base font-semibold text-foreground">Para personas con discapacidad auditiva</span>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <ScrollReveal direction="left">
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Empresa española pionera en accesibilidad auditiva. Sus dispositivos transforman los sonidos del entorno
            en <strong className="text-foreground">alertas visuales y vibratorias</strong>, devolviendo autonomía y
            tranquilidad a las personas sordas en cualquier espacio.
          </p>
          <div className="space-y-3">
            {visualfyFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-0.5">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <div className="relative group">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-bl from-accent/30 to-transparent rounded-3xl blur-2xl opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <img
                src={visualfyDevice}
                alt="Dispositivo Visualfy"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default NavilensSection;
