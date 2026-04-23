import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import iconQr from "@/assets/icon-qr.png";
import iconNfc from "@/assets/icon-nfc.png";
import qrAscires from "@/assets/qr-ascires.png";
import nfcWipass from "@/assets/nfc-wipass.png";

const SmartSignageSection = () => (
  <section id="smart-signage" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">03</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Smart Signage</h2>
        </div>
      </ScrollReveal>

      {/* QR */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          <div className="flex-1 max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <img src={iconQr} alt="QR icon" className="w-10 h-10 object-contain rounded-lg" />
              <h3 className="text-xl font-bold text-foreground">Códigos QR</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Los códigos QR integrados en la señalización permiten a los pacientes acceder
              de forma instantánea a información relevante: citas, ubicaciones, servicios y más.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.img
              src={qrAscires}
              alt="qr hospital signage"
              className="w-full max-w-xs rounded-2xl shadow-xl object-contain"
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 },
              }}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* NFC */}
      <ScrollReveal delay={0.15}>
        <div className="relative rounded-3xl bg-gradient-to-br from-secondary/80 to-secondary/30 p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }} />
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 relative z-10">
            <div className="flex-1 flex justify-center">
              <motion.img
                src={nfcWipass}
                alt="nfc hospital interaction"
                className="w-full max-w-sm rounded-2xl shadow-2xl object-cover"
                style={{ aspectRatio: "4/3" }}
                whileHover={{ scale: 1.03 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 },
                }}
              />
            </div>
            <div className="flex-1 max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconNfc} alt="NFC icon" className="w-10 h-10 object-contain rounded-xl" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Dispositivos NFC</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Con un simple toque del teléfono, el paciente accede instantáneamente a información
                personalizada. Sin aplicaciones, sin cámaras, sin barreras.
              </p>
              <ul className="space-y-3">
                {[
                  "Check-in automático al llegar al hospital",
                  "Puntos de información interactivos en cada planta",
                  "Guía personalizada del paciente por todo el recinto",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SmartSignageSection;
