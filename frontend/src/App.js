// src/App.js
import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Preloader from "./components/Preloaders";
import CardComponent from "./components/CardComponent";
import TwoCardComponent from "./components/TwoCardComponent";
import Social from "./components/SocialComponent";
import ChatComponent from "./components/ChatComponent";
import LoginPage from "./components/LoginPage"; // Import your LoginPage component
import ParticleRing from "./components/ParticleRing"; // Import ParticleRing component


// modified
import { useAuth0 } from "@auth0/auth0-react";
import C2 from "./components/C2";
import { Developers } from "./components/Developers";
const UserContext = createContext();

function App({ children }) {
  const [loading, setLoading] = useState(true);
  const [isCam, setCam] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState(true);

  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time (2 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        loginWithRedirect,
        user,
        isLoading,
        isCam,
        setCam,
        selectedImage,
        setSelectedImage,
        img,
        setImg,
      }}
    >
      <Router>
        {loading ? (
          <Preloader />
        ) : (
          <div className="relative min-h-screen text-white bg-custom-gradient">
            {/* Background particle animation */}
            <div className="fixed top-0 left-0 w-full h-full -z-10">
              <ParticleRing />
            </div>

            {/* Foreground content */}
            <Header />
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/Chat" element={<C2 />} />
              <Route path="/developers" element={<Developers />} />
              {/* <Route path="/Chat" element={<ChatComponent />} /> */}
              {/* Add other routes if needed */}
              {/* You can conditionally render other components here if required */}
            </Routes>
          </div>
        )}
      </Router>
    </UserContext.Provider>
  );
}

export { App, UserContext };
