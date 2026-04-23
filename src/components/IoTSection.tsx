import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, FileText, Sparkles, Headphones, Bell, Scale } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: LayoutDashboard, title: "Dashboards", desc: "Creación de paneles personalizados" },
  { icon: FileText, title: "Informes", desc: "Generación rápida de informes en tiempo real e históricos" },
  { icon: Sparkles, title: "Fácil de Usar", desc: "Gestión fácil e intuitiva sin necesidad de conocimientos técnicos" },
  { icon: Headphones, title: "Centro de Ayuda", desc: "Soporte técnico y documentación en línea" },
  { icon: Bell, title: "Notificaciones", desc: "Notificaciones por email, SMS o push" },
  { icon: Scale, title: "Escalabilidad", desc: "Implementación de cientos de sensores y dispositivos rápidamente" },
];

const AnimatedDashboard = () => {
  const [values, setValues] = useState([65, 42, 78, 55, 88, 35, 72]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prev) =>
        prev.map((v) => {
          const change = (Math.random() - 0.5) * 20;
          return Math.max(10, Math.min(95, v + change));
        }),
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xs">
      <div className="bg-slate-800 rounded-xl p-2 shadow-2xl border border-slate-700/50">
        <div className="bg-slate-900 rounded-lg p-5 min-h-[280px]">
          <div className="mb-4">
            <p className="text-slate-400 text-xs mb-1">Consumo energético</p>
            <div className="flex items-end gap-2">
              <motion.span
                className="text-3xl font-bold text-white"
                key={Math.round(values[0])}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {Math.round(values[0] * 12.8)}
              </motion.span>
              <span className="text-slate-500 text-sm mb-1">kWh</span>
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-20 mb-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm bg-accent"
                animate={{ height: `${v}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Sensores", value: "147" },
              { label: "Alertas", value: "3" },
              { label: "Uptime", value: "99.8%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-white font-semibold text-sm">{stat.value}</p>
                <p className="text-slate-500 text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto w-16 h-4 bg-slate-700 rounded-b-lg" />
      <div className="mx-auto w-24 h-2 bg-slate-600 rounded-b-lg" />
    </div>
  );
};

const FloatingSensor = () => {
  const [temp, setTemp] = useState(22.0);
  const [humidity, setHumidity] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((prev) => {
        const change = (Math.random() - 0.4) * 0.8;
        return Math.max(18, Math.min(32, prev + change));
      });
      setHumidity((prev) => {
        const change = Math.round((Math.random() - 0.5) * 4);
        return Math.max(30, Math.min(70, prev + change));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const tempPercent = ((temp - 15) / 25) * 100;

  return (
    <div className="bg-card rounded-2xl p-6 shadow-xl border border-border/50 w-full max-w-xs">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-600 text-xs font-medium">SENSOR A-12</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-6 h-28 bg-muted rounded-full overflow-hidden border border-border">
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 via-orange-400 to-emerald-400 rounded-full"
            animate={{ height: `${tempPercent}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
        <div>
          <motion.p
            className="text-4xl font-bold text-foreground"
            key={temp.toFixed(1)}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
          >
            {temp.toFixed(1)}°
          </motion.p>
          <p className="text-muted-foreground text-sm mt-1">Temperatura</p>
          <div className="mt-3">
            <motion.p
              className="text-xl font-semibold text-accent"
              key={humidity}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
            >
              {humidity}%
            </motion.p>
            <p className="text-muted-foreground text-sm">Humedad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IoTSection = () => (
  <section id="iot" className="py-12 md:py-16 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">05</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Soluciones IoT</h2>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-12 items-center mb-16">
        <ScrollReveal direction="left" className="flex justify-center">
          <AnimatedDashboard />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
            Permite que tu espacio{" "}
            <em className="text-accent not-italic font-semibold">recopile, analice y ejecute</em>{" "}
            en consecuencia de los datos que recibe a través de{" "}
            <em className="text-accent not-italic font-semibold">diferentes dispositivos de analítica</em>.
            Sírvete de la IA para revolucionar tu espacio.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="flex justify-center">
          <FloatingSensor />
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-3 py-3 px-4 rounded-xl transition-all duration-300 hover:bg-accent/5"
              >
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
      </ScrollReveal>
    </div>
  </section>
);

export default IoTSection;
