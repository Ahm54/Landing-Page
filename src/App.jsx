import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Download from "./sections/Download";
import Testimonials from "./sections/Testimonial";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
