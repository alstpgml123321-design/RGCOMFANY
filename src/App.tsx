/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Inventory from "./components/Inventory";
import GenesisPromotion from "./components/GenesisPromotion";
import DomesticCars from "./components/DomesticCars";
import ImportedCars from "./components/ImportedCars";
import QuickQuote from "./components/QuickQuote";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import AdminPortal from "./components/AdminPortal";

function MainApp() {
  return (
    <div className="selection:bg-red-200 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Inventory />
        <GenesisPromotion />
        <DomesticCars />
        <ImportedCars />
        <Reviews />
        <QuickQuote />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin-secret-portal" element={<AdminPortal />} />
      </Routes>
    </Router>
  );
}
