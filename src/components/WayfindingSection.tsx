import { motion } from "framer-motion";
import { Map, Brain, MapPinned, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import wayfindingImg from "@/assets/wayfinding.png";

const features = [
  { icon: MapPinned, title: "Mapa estático", desc: "Planos fijos digitalizados con puntos de interés señalizados." },
  { icon: Map, title: "Mapa dinámico", desc: "Rutas en tiempo real que se adaptan al recorrido del usuario." },
  { icon: Brain, title: "Mapa con IA", desc: "Navegación predictiva que aprende del comportamiento del visitante." },
];

const WayfindingSection = () => (
  <section id="wayfinding" className="py-16 md:py-24 bg-background relative overflow-hidden">
    {/* Background grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    <div
      className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            04
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Digital Wayfinding</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Navegación interior interactiva que guía a usuarios y visitantes por cualquier espacio con
            <strong className="text-foreground"> rutas en tiempo real</strong>, zonas codificadas y orientación paso a
            paso.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: Image (smaller) */}
        <ScrollReveal className="lg:col-span-5 order-1" direction="left">
          <div className="relative max-w-md mx-auto">
            {/* Glow */}
            <motion.div
              className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.4), transparent 70%)" }}
              animate={{ opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-accent/20 bg-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={wayfindingImg}
                alt="Mapa interactivo de navegación interior"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Right: 3 feature cards + button */}
        <ScrollReveal className="lg:col-span-7 order-2" delay={0.15} direction="right">
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors text-center"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <a href="https://digital.logopost.es/landing5/mapa.html" target="_blank" rel="noopener noreferrer">
              <button className="group relative bg-gradient-to-r from-accent to-accent/70 text-accent-foreground px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)] hover:scale-[1.03] flex items-center overflow-hidden">
                <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">Ver mapa interactivo</span>
                <span className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-10 place-items-center transition-all duration-500 bg-accent-foreground/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WayfindingSection;
