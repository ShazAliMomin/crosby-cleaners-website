import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Location from "./Pages/Location/Location";
import Coupon from "./Pages/Coupon/Coupon";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/location" element={<Location />} />
        <Route path="/coupon" element={<Coupon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
