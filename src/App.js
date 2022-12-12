import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Headers from "./Pages/Headers/Headers";
import AllSkills from "./Pages/Skills/AllSkills/AllSkills";

function App() {
  
  return (
    <div className="max-w-[1400px] mx-auto">
      <Headers></Headers>
      <h1 className="text-2xl py-20 text-center text-orange-600 font-bold">Portfolio are Updating</h1>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
