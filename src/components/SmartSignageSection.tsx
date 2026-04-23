import { motion } from "framer-motion";
import { Smartphone, Zap, MapPin, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import iconQr from "@/assets/icon-qr.png";
import iconNfc from "@/assets/icon-nfc.png";
import qrAscires from "@/assets/qr-ascires.png";
import nfcWipass from "@/assets/nfc-wipass.png";

const nfcUseCases = [
  { icon: CheckCircle2, text: "Check-in automático al llegar al recinto" },
  { icon: MapPin, text: "Puntos de información interactivos en cada planta" },
  { icon: Smartphone, text: "Guía personalizada del usuario por todo el espacio" },
];

const SmartSignageSection = () => (
  <section id="smart-signage" className="py-12 md:py-20 bg-background relative overflow-hidden">
    {/* Background grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">02</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Smart Signage</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Convierte la señalización tradicional en un punto de contacto inteligente.
            Un solo gesto del usuario, infinitas posibilidades.
          </p>
        </div>
      </ScrollReveal>

      {/* === QR + NFC side-by-side feature cards === */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* QR Card */}
        <ScrollReveal direction="left">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-8 overflow-hidden transition-colors duration-500"
          >
            {/* Glow */}
            <motion.div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />

            {/* Number watermark */}
            <span className="absolute top-4 right-6 text-7xl font-black text-accent/5 group-hover:text-accent/10 transition-colors duration-500 select-none">
              01
            </span>

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={iconQr} alt="QR" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Acceso rápido</span>
                  <h3 className="text-2xl font-bold text-foreground">Códigos QR</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Información instantánea al alcance del usuario: horarios, ubicaciones,
                servicios y más. Solo necesitan su móvil.
              </p>

              {/* QR Image with phone mockup feel */}
              <div className="relative flex justify-center py-4">
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-2xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={qrAscires}
                  alt="qr signage"
                  className="relative w-full max-w-[220px] rounded-2xl shadow-xl object-contain"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.3 },
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom accent bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>
        </ScrollReveal>

        {/* NFC Card — featured/highlighted */}
        <ScrollReveal direction="right" delay={0.1}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative h-full rounded-3xl bg-gradient-to-br from-accent/20 via-card to-card border border-accent/30 p-8 overflow-hidden"
          >
            {/* Featured badge */}
            <span className="absolute top-5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
              <Zap className="w-3 h-3" /> Destacado
            </span>

            {/* Animated rings */}
            <motion.div
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-accent/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full border border-accent/30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={iconNfc} alt="NFC" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Sin apps · Sin cámara</span>
                  <h3 className="text-2xl font-bold text-foreground">Dispositivos NFC</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Un simple toque del teléfono y el usuario accede a información personalizada.
                Sin barreras, sin fricciones.
              </p>

              {/* NFC image */}
              <div className="relative rounded-2xl overflow-hidden mb-5 shadow-2xl border border-accent/20">
                <motion.img
                  src={nfcWipass}
                  alt="nfc interaction"
                  className="w-full h-44 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              {/* Use cases */}
              <ul className="space-y-2.5">
                {nfcUseCases.map((u, i) => {
                  const Icon = u.icon;
                  return (
                    <motion.li
                      key={u.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <Icon className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{u.text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default SmartSignageSection;
