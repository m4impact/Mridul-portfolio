import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./styles/global.css";
import "./styles/community.css";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Community from "./pages/Community";

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
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
