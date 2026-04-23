import { motion } from "framer-motion";
import { MonitorPlay, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import cmsWaapiti from "@/assets/cms-waapiti.png";
import ledWall1 from "@/assets/led-wall-1.jpg";
import ledWall2 from "@/assets/led-wall-2.jpg";

const features = [
  {
    icon: MonitorPlay,
    title: "Gestor de contenido",
    desc: "Plataforma intuitiva para gestionar y programar contenidos en todas tus pantallas.",
  },
  {
    icon: Users,
    title: "Gestión de colas",
    desc: "Sistema inteligente de turnos que mejora la experiencia de espera del cliente.",
  },
];

const cmsFeatures = [
  { title: "Control centralizado", desc: "Gestiona todo el contenido de señalización digital desde un único panel." },
  { title: "Partición de pantalla", desc: "Divide cada pantalla en zonas independientes para múltiples contenidos simultáneos." },
  { title: "Gestión de colas vía API", desc: "Integración con sistemas de turnos para actualizar información en tiempo real." },
  { title: "Segmentación por sala", desc: "Contenido personalizado para cada sala de espera según departamento y especialidad." },
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

            <div className="flex flex-col gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-3 py-3 px-4 rounded-xl">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[500px] w-full shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop"
              alt="Digital Signage"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Sub-section: Gestión de Contenido */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Gestión de Contenido</h3>
        </div>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row items-start gap-10 mb-20">
        <ScrollReveal className="flex-1 flex justify-center" direction="left">
          <motion.img
            src={cmsWaapiti}
            alt="content management dashboard"
            className="w-full max-w-sm rounded-2xl shadow-2xl border-2 border-accent/20 object-cover"
            style={{ aspectRatio: "4/3" }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3 },
            }}
            loading="lazy"
          />
        </ScrollReveal>

        <ScrollReveal className="flex-1" delay={0.1} direction="right">
          <div className="grid gap-3">
            {cmsFeatures.map((f, i) => (
              <div key={i} className="dark-card p-5 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-base font-bold mb-1">{f.title}</h4>
                <p className="text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
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
