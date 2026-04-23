import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  Headphones,
  Bell,
  Scale,
  Thermometer,
  Droplets,
  Zap,
  Wifi,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import iotTotem from "@/assets/iot-totem-dashboard.jpg";

const features = [
  { icon: LayoutDashboard, title: "Dashboards", desc: "Paneles personalizados con métricas clave en una sola vista." },
  { icon: FileText, title: "Informes", desc: "Reportes en tiempo real e históricos generados al instante." },
  { icon: Sparkles, title: "Fácil de usar", desc: "Gestión intuitiva sin necesidad de conocimientos técnicos." },
  { icon: Headphones, title: "Centro de ayuda", desc: "Soporte técnico y documentación siempre disponibles." },
  { icon: Bell, title: "Notificaciones", desc: "Alertas instantáneas por email, SMS o notificación push." },
  { icon: Scale, title: "Escalabilidad", desc: "Despliega cientos de sensores y dispositivos en minutos." },
];

const kpis = [
  { icon: Thermometer, label: "Temperatura", value: "22.4", unit: "°C", trend: "+0.3" },
  { icon: Droplets, label: "Humedad", value: "47", unit: "%", trend: "−2" },
  { icon: Zap, label: "Consumo", value: "832", unit: "kWh", trend: "−12%" },
  { icon: Wifi, label: "Sensores", value: "147", unit: "online", trend: "99.8%" },
];

// Static illustrative bar chart values (PDF-friendly, no live animation)
const barValues = [42, 68, 55, 81, 73, 90, 64, 77, 58, 85, 71, 95];
const barLabels = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const IoTSection = () => (
  <section id="iot" className="py-16 md:py-24 bg-surface relative overflow-hidden">
    {/* Subtle background */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />
    <div
      className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            05
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Soluciones IoT</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Convierte tu espacio en un entorno que{" "}
            <strong className="text-foreground">recopila, analiza y reacciona</strong> en tiempo real.
            Sensores, dashboards e inteligencia artificial trabajando en conjunto para optimizar cada decisión.
          </p>
        </div>
      </ScrollReveal>

      {/* Hero visual: totem with dashboard */}
      <ScrollReveal delay={0.1}>
        <div className="relative max-w-md mx-auto mb-16">
          <div className="relative">
            <motion.div
              className="absolute -inset-6 rounded-[3rem] blur-3xl opacity-50"
              style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.3), transparent 70%)" }}
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-accent/20"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <img
                src={iotTotem}
                alt="Tótem digital mostrando dashboard IoT en tiempo real"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </motion.div>
            <motion.div
              className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur border border-accent/40 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-accent"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Live</span>
            </motion.div>
          </div>
        </div>
      </ScrollReveal>

      {/* Features grid */}
      <ScrollReveal delay={0.15}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative p-5 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.2), transparent 70%)" }}
                />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/15 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default IoTSection;
