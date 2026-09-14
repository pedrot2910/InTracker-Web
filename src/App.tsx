import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Home from "./pages/home";
import Schedule from "./pages/schedules";
import Profile from "./pages/profile";
import Sobre from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<Sobre />} />
    </Routes>
  );
}

export default App;
