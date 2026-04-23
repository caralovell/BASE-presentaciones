import { motion } from "framer-motion";
import { MapPin, Route, Navigation, Layers, Smartphone, Compass } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import wayfindingImg from "@/assets/wayfinding.png";

const features = [
  { icon: Route, title: "Rutas óptimas", desc: "Cálculo en tiempo real del camino más corto." },
  { icon: Layers, title: "Multi-planta", desc: "Navegación fluida entre niveles y edificios." },
  { icon: Smartphone, title: "Sin app", desc: "Acceso instantáneo desde cualquier navegador." },
  { icon: Compass, title: "Orientación viva", desc: "Brújula y posición actualizadas al moverse." },
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
    <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }} />

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">04</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Digital Wayfinding</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Navegación interior interactiva que guía a usuarios y visitantes por cualquier espacio con
            <strong className="text-foreground"> rutas en tiempo real</strong>, zonas codificadas y orientación paso a paso.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: Features stacked */}
        <ScrollReveal className="lg:col-span-5 order-2 lg:order-1" direction="left">
          <div className="grid grid-cols-2 gap-3 mb-8">
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
                  className="p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <a href="https://digital.logopost.es/landing5/mapa.html" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="text-base px-10 py-6 group">
              Ver mapa interactivo
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </a>
        </ScrollReveal>

        {/* Right: Mockup with floating elements */}
        <ScrollReveal className="lg:col-span-7 order-1 lg:order-2" delay={0.15} direction="right">
          <div className="relative max-w-2xl mx-auto">
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

            {/* Floating pin: destination */}
            <motion.div
              className="absolute -top-4 right-6 md:right-12 flex items-center gap-2 px-4 py-2 rounded-2xl bg-card border border-accent/40 shadow-2xl backdrop-blur"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-accent-foreground" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Destino</p>
                <p className="text-xs font-bold text-foreground leading-tight">Sala 204 · Planta 2</p>
              </div>
            </motion.div>

            {/* Floating pin: ETA */}
            <motion.div
              className="absolute -bottom-4 left-4 md:left-10 flex items-center gap-2 px-4 py-2 rounded-2xl bg-card border border-accent/40 shadow-2xl backdrop-blur"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <div className="w-7 h-7 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center">
                <Navigation className="w-3.5 h-3.5 text-accent" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Tiempo</p>
                <p className="text-xs font-bold text-foreground leading-tight">2 min · 85 m</p>
              </div>
            </motion.div>

            {/* Pulse dot */}
            <motion.div
              className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_hsl(var(--accent))]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WayfindingSection;
