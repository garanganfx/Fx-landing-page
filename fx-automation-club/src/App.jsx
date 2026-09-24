import { useEffect, useState } from 'react';
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
import SupabaseManager from './components/SupabaseManager';
import ContentManager from './components/ContentManager';
import { fetchLandingPageData } from './lib/content';

const fallbackContent = {
  hero: null,
  pricing: [],
  testimonials: [],
  faqs: [],
};

function App() {
  const [content, setContent] = useState(fallbackContent);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchLandingPageData();
      setContent(data);
    };

    loadContent();
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-32 bg-surface">
        <div className="flex flex-col w-full">
          <Hero hero={content.hero} />
          <ContentManager />
          <SupabaseManager />
          <Performance />
          <Strategy />
          <Pricing pricing={content.pricing} />
          <Installation />
          <Testimonials testimonials={content.testimonials} />
          <FAQ faqs={content.faqs} />
          <Support />
        </div>
      </main>
      <FloatingCTA />
      <BottomNav />
    </>
  );
}

export default App;