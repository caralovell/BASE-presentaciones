import { motion } from "framer-motion";
import LogopostLogo from "./LogopostLogo";
import asciresLogo from "@/assets/ascires-logo.png";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const HeroSection = () => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-center px-6">
    {/* Background decorations */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>

    {/* Content — proposal cover */}
    <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl w-full">
      {/* 1. Client logo */}
      <motion.div {...fadeUp(0.1)}>
        <div className="h-48 md:h-64 w-80 md:w-[28rem] bg-muted flex items-center justify-center text-muted-foreground text-sm uppercase tracking-[0.3em]">
          Logo
        </div>
      </motion.div>

      {/* 2. Label */}
      <motion.span
        className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70"
        {...fadeUp(0.25)}
      >
        Propuesta de
      </motion.span>

      {/* 3. Logopost logo — main anchor */}
      <motion.div {...fadeUp(0.4)}>
        <LogopostLogo className="h-12 md:h-14 w-auto" />
      </motion.div>

      {/* 3.5 Tagline */}
      <motion.div className="flex items-center gap-4 w-full max-w-md" {...fadeUp(0.5)}>
        <span className="h-px flex-1 bg-primary/60" />
        <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium whitespace-nowrap">
          Línea digital
        </span>
        <span className="h-px flex-1 bg-primary/60" />
      </motion.div>

      {/* 4. Proposal info */}
      <motion.div className="flex flex-col items-center gap-1.5 mt-2" {...fadeUp(0.6)}>
        <p className="text-sm text-muted-foreground">
          <span className="opacity-60">Nombre de cliente:</span>{" "}
          <span className="text-foreground/80">Ascires</span>
          <span className="mx-3 opacity-30">|</span>
          <span className="opacity-60">Fecha:</span>{" "}
          <span className="text-foreground/80">27/03/2026</span>
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="opacity-60">Persona de contacto:</span>{" "}
          <span className="text-foreground/80">Paulo César Ribeiro</span>
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="opacity-60">Creado por:</span>{" "}
          <span className="text-foreground/80">David Ochoa Tapia</span>
        </p>
        <p className="text-xs text-muted-foreground/60 italic">
          Responsable del Departamento de Tecnología e Innovación
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
