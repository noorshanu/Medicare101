import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
      <section className="wrapper">
 
        <div className=" hero-main ">
        <Navbar />
        <Hero />
        </div>

        <AboutUs/>
        <div className=" pt-4">
          {/* <Faq /> */}

          <Footer />
        </div>
        </section>
      </div>
    </>
  );
}

export default App;
