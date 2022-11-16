import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";

const Servicio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Servicio;
