import Header from './components/Header';
import Hero from './components/Hero';
import Performance from './components/Performance';
import Strategy from './components/Strategy';
import Pricing from './components/Pricing';
import Installation from './components/Installation';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Support from './components/Support';
import BottomNav from './components/BottomNav';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-32 bg-surface">
        <div className="flex flex-col w-full">
          <Hero />
          <Performance />
          <Strategy />
          <Pricing />
          <Installation />
          <Testimonials />
          <FAQ />
          <Support />
        </div>
      </main>
      <FloatingCTA />
      <BottomNav />
    </>
  );
}

export default App;