import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Index from "./pages/index";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Home from "./pages/home";
import Schedule from "./pages/schedules";
import Profile from "./pages/profile";
import Sobre from "./pages/about";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<Sobre />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
