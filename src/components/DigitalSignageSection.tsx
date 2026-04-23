import { motion } from "framer-motion";
import { LayoutGrid, SplitSquareVertical, Radio, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import cmsDashboard from "@/assets/cms-dashboard.jpg";
import ledWall1 from "@/assets/led-wall-1.jpg";
import ledWall2 from "@/assets/led-wall-2.jpg";
import digitalSignageKiosk from "@/assets/digital-signage-kiosk.jpg";

const bubbles = [
  "Tótems interactivos",
  "Kioskos táctiles",
  "Gestión de colas",
  "Wayfinding digital",
];

const cmsFeatures = [
  { icon: LayoutGrid, title: "Control centralizado", desc: "Gestiona todo el contenido de señalización digital desde un único panel." },
  { icon: SplitSquareVertical, title: "Partición de pantalla", desc: "Divide cada pantalla en zonas independientes para múltiples contenidos simultáneos." },
  { icon: Radio, title: "Gestión de colas vía API", desc: "Integración con sistemas de turnos para actualizar información en tiempo real." },
  { icon: MapPin, title: "Segmentación por sala", desc: "Contenido personalizado para cada sala de espera según departamento y especialidad." },
];

const DigitalSignageSection = () => (
  <section id="digital-signage" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            01
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Digital Signage</h2>
        </div>
      </ScrollReveal>

      {/* Intro block */}
      <ScrollReveal delay={0.1}>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center mb-20">
          <div>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Soluciones personalizadas que consiguen acercar tu marca a los usuarios de forma fácil y sencilla,
              creando una experiencia única. Servicio completo de Digital Signage, incluyendo la instalación de
              pantallas, software y sistemas de gestión.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {bubbles.map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.6, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.06,
                    type: "spring",
                    stiffness: 200,
                    damping: 14,
                  }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground hover:bg-accent/20 hover:border-accent/60 transition-colors cursor-default shadow-sm"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[500px] w-full shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={digitalSignageKiosk}
              alt="Tótem digital interactivo de señalización"
              className="w-full h-full object-cover"
              loading="lazy"
              width={768}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Sub-section: Gestión de Contenido */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-4xl font-bold text-foreground">Gestión de Contenido</h3>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            Una plataforma todo-en-uno para programar, distribuir y monitorizar tus pantallas en tiempo real.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">
        <ScrollReveal direction="left">
          <div className="relative group max-w-md mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-tr from-accent/30 via-accent/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20 bg-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="flex items-center gap-1.5 px-4 py-3 bg-muted/40 border-b border-border/50">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <div className="ml-3 flex-1 h-5 rounded-md bg-background/50" />
              </div>
              <img
                src={cmsDashboard}
                alt="Panel de gestión de contenido"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-bold shadow-xl flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              EN VIVO
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="right">
          <div className="grid sm:grid-cols-2 gap-3">
            {cmsFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm font-bold mb-1 text-foreground">{f.title}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* Sub-section: Pantallas LED */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Pantallas LED</h3>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
            Pantallas LED de alta luminosidad y resolución, ideales tanto para grandes espacios
            interiores como para fachadas exteriores. Configurables en cualquier formato y
            tamaño, ofrecen un impacto visual incomparable con un consumo eficiente y un
            mantenimiento mínimo.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.img
              src={ledWall1}
              alt="Pantalla LED interior"
              className="w-full rounded-2xl shadow-xl border-2 border-accent/20 object-cover aspect-[4/3]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
            <motion.img
              src={ledWall2}
              alt="Pantalla LED exterior"
              className="w-full rounded-2xl shadow-xl border-2 border-accent/20 object-cover aspect-[4/3]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DigitalSignageSection;
