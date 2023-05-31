import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, NotFound } from "./pages";
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