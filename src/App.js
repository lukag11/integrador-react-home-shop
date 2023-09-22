import "./App.css";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Checkout from "./Pages/Checkout/Checkout";
import Verify from "./Pages/Verify/Verify";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSection } from "./hooks/useSection";

function App() {
  const secciones = useSection();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home secciones={secciones} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacto" element={<Contact />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute redirectTo="/login">
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verify"
          element={
            <ProtectedRoute redirectTo="/login">
              <Verify />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
