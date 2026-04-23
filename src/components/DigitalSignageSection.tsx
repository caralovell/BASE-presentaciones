import { motion } from "framer-motion";
import { MonitorPlay, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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

      <ScrollReveal delay={0.1}>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">
          {/* Left — Text + Features */}
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

          {/* Right — Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[500px] w-full shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop"
              alt="Digital Signage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DigitalSignageSection;
