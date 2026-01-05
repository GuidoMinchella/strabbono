import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Offers from './components/Offers';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Offers />
        <HowItWorks />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
