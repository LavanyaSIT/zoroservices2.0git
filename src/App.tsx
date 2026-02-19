import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CookieNotice from "./components/CookieNotice";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ITServices from "./pages/ITServices";
import NonITServices from "./pages/NonITServices";
import Products from "./pages/Products";
import BookAppointment from "./pages/BookAppointment";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#0b0618] text-white min-h-screen flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/it" element={<ITServices />} />
            <Route path="/services/non-it" element={<NonITServices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Components */}
        <Chatbot />
        <CookieNotice />

      </div>
    </Router>
  );
};

export default App;
