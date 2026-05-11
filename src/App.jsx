import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./styles/global.css";
import "./styles/community.css";
import Cursor from "./components/Cursor";
import Filmstrip from "./components/Filmstrip";
import Nav from "./components/Nav";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import SkillsPage from "./pages/SkillsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Community from "./pages/Community";
import HoopsPage from "./pages/projects/HoopsPage";
import KrishiPage from "./pages/projects/KrishiPage";
import MATPage from "./pages/projects/MATPage";
import CraftevePage from "./pages/projects/CraftevePage";
import NightingalePage from "./pages/projects/NightingalePage";

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Cursor />
      <Filmstrip />
      <Nav />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/hoops" element={<HoopsPage />} />
        <Route path="/work/krishi" element={<KrishiPage />} />
        <Route path="/work/mat" element={<MATPage />} />
        <Route path="/work/crafteve" element={<CraftevePage />} />
        <Route path="/work/nightingale" element={<NightingalePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  );
}
