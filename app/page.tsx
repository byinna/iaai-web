import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import RevealController from "@/components/RevealController";

export default function Home() {
  const year = 2026;
  return (
    <main className="page">
      <div className="frame">
        <Hero />
        <About />
        <Work />
        <Contact />

        <div className="footer-band" data-reveal aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/clouds/cloud-band.webp" alt="" />
        </div>
        <p className="footer-legal">
          © {year} INGRID ASHIDA · IA-AI.PRO
        </p>
      </div>
      <RevealController />
    </main>
  );
}
