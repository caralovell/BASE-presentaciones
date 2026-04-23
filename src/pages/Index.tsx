import HeroSection from "@/components/HeroSection";
import DigitalSignageSection from "@/components/DigitalSignageSection";
import SmartSignageSection from "@/components/SmartSignageSection";
import NavilensSection from "@/components/NavilensSection";
import WayfindingSection from "@/components/WayfindingSection";
import CmsSection from "@/components/CmsSection";
import AiAgentSection from "@/components/AiAgentSection";
import BudgetSection from "@/components/BudgetSection";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <SectionDivider />
    <DigitalSignageSection />
    <SectionDivider />
    <CmsSection />
    <SectionDivider />
    <SmartSignageSection />
    <SectionDivider />
    <NavilensSection />
    <SectionDivider />
    <WayfindingSection />
    <SectionDivider />
    <AiAgentSection />
    <BudgetSection />
    <FooterSection />
  </div>
);

export default Index;
