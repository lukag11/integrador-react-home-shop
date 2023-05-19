import "./App.css";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useSection } from "./hooks/useSection";

function App() {
  const secciones = useSection();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home secciones={secciones} />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
