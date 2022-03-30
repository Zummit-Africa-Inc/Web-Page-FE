import "./App.css";
import Brands from "./Section/Brands";
import Carousel from "./Section/Carousel";
import Hero from "./Section/Hero";


function App() {
  return (
    <div className="App">
      <Hero />
      <Brands />
      <Carousel/>
    </div>
  );
}

export default App;
