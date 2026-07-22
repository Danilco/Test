import { ContactSection } from "~/app/_components/contact";
import { HeaderSection } from "~/app/_components/header";
import { HeroSection } from "~/app/_components/hero";
import { ReviewsSection } from "~/app/_components/reviews";
import { ServicesSection } from "~/app/_components/services";
import { TeamSection } from "~/app/_components/team";

export default function Home() {
  return (
    <main className="relative bg-slate-50 text-slate-950">
      <div className="pointer-events-none absolute left-0 top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
