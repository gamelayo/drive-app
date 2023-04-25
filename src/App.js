import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Find from "./components/find/Find.jsx";
import Driver from "./components/driver/Driver.jsx";
import Luxury from "./components/luxury/Luxury.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
