import React from "react";
import Hero from "../components/Hero";
import DocumentParcel from "../components/DocumentParcel";
import Cargo from "../components/Cargo";
import GreenShip from "../components/GreenShip";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <DocumentParcel />
      <Cargo />
      <GreenShip />
    </div>
  );
};

export default Home;
