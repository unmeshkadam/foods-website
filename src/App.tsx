import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/mainSection/HeroSection";
import ServicesCards from "./components/mainSection/ServicesCards";
import TestimonialsSection from "./components/mainSection/TestimonialsSection";
import ServicesSection from "./components/mainSection/ServicesSection";
import PhotoGallarySection from "./components/mainSection/PhotoGallary";
import ContactList from "./components/mainSection/ContactList";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./config/themeConfig";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <HeroSection />
        <ServicesCards />
        <TestimonialsSection />
        <ServicesSection />
        <PhotoGallarySection />
        <ContactList />
        <div style={{height: "200px"}}></div>
      </div>
    </ThemeProvider>
  );
};

export default App;
