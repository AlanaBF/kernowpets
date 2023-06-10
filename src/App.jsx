import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, NotFound, Reptiles, LiveFood, Gallery, Products } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Reptiles" element={<Reptiles />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/LiveFood" element={<LiveFood />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;