import HeroSection from "@/components/HeroSection";
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
    <SmartSignageSection />
    <SectionDivider />
    <NavilensSection />
    <SectionDivider />
    <WayfindingSection />
    <SectionDivider />
    <CmsSection />
    <SectionDivider />
    <AiAgentSection />
    <BudgetSection />
    <FooterSection />
  </div>
);

export default Index;
