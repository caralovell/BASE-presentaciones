import { motion } from "framer-motion";
import { Map, Brain, MapPinned, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import wayfindingImg from "@/assets/wayfinding.png";
import wayfindingImg2 from "@/assets/wayfinding-2.png";

const features = [
  { icon: MapPinned, title: "Mapa estático", desc: "Planos fijos digitalizados." },
  { icon: Map, title: "Mapa dinámico", desc: "Rutas en tiempo real." },
  { icon: Brain, title: "Mapa con IA", desc: "Navegación predictiva." },
];

const WayfindingSection = () => (
  <section id="wayfinding" className="py-16 md:py-24 bg-background relative overflow-hidden">
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

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 items-center max-w-6xl mx-auto mb-8">
          {/* Left image — large */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={wayfindingImg}
              alt="Mapa interactivo de navegación interior"
              className="w-full max-w-[340px] h-auto object-contain drop-shadow-lg"
              loading="lazy"
            />
          </motion.div>

          {/* 3 small cards vertical + button */}
          <div className="flex flex-col items-center gap-2.5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="w-[160px] p-2.5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors text-center"
                >
                  <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center mb-1.5 mx-auto">
                    <Icon className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
                  </div>
                  <h4 className="text-[11px] font-bold text-foreground mb-0.5">{f.title}</h4>
                  <p className="text-[9px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}

            <a
              href="https://digital.logopost.es/landing5/mapa.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <button className="group relative bg-gradient-to-r from-accent to-accent/70 text-accent-foreground px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)] hover:scale-[1.03] flex items-center overflow-hidden">
                <span className="mr-7 transition-opacity duration-500 group-hover:opacity-0">Ver mapa</span>
                <span className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-8 place-items-center transition-all duration-500 bg-accent-foreground/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </button>
            </a>
          </div>

          {/* Right image — large */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img
              src={wayfindingImg2}
              alt="Navegación digital en espacio interior"
              className="w-full max-w-[340px] h-auto object-contain drop-shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WayfindingSection;
