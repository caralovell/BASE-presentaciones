import LogopostLogo from "./LogopostLogo";

import asciresLogo from "@/assets/ascires-logo.png";
const ASCIRES_LOGO = asciresLogo;

const FooterSection = () => (
  <footer className="py-8 bg-background border-t border-border/50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <LogopostLogo className="h-7 w-auto" />
      </div>
      <p className="text-muted-foreground text-xs">© 2026 Logopost. Todos los derechos reservados. logopost.es</p>
    </div>
  </footer>
);

export default FooterSection;
