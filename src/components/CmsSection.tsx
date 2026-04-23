import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import cmsWaapiti from "@/assets/cms-waapiti.png";

const features = [
  { title: "Control centralizado", desc: "Gestiona todo el contenido de señalización digital desde un único panel." },
  { title: "Partición de pantalla", desc: "Divide cada pantalla en zonas independientes para múltiples contenidos simultáneos." },
  { title: "Gestión de colas vía API", desc: "Integración con sistemas de turnos para actualizar información en tiempo real." },
  { title: "Segmentación por sala", desc: "Contenido personalizado para cada sala de espera según departamento y especialidad." },
];

const CmsSection = () => (
  <section id="plataforma" className="py-12 md:py-16 bg-surface">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">04</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Gestión de Contenido</h2>
        </div>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row items-start gap-10">
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
          />
        </ScrollReveal>

        <ScrollReveal className="flex-1" delay={0.1} direction="right">
          <div className="grid gap-3">
            {features.map((f, i) => (
              <div key={i} className="dark-card p-5 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-base font-bold mb-1">{f.title}</h3>
                <p className="text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default CmsSection;
