import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { ThreeBackground } from '@/components/ui/ThreeBackground';

function App() {
  return (
    <>
      <ThreeBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

export default App;
