import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Invitation from "@/components/sections/Invitation";
import Gallery from "@/components/sections/Gallery";
import StyleGuide from "@/components/sections/StyleGuide";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Credits from "@/components/sections/Credits";
import GlobalBackground from "@/components/core/GlobalBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <GlobalBackground />
      <Hero />
      <Countdown />
      <Invitation />
      <StyleGuide />
      <Gallery />
      <Location />
      <Contact />
      <Credits />
      <Footer />
    </main>
  );
}
