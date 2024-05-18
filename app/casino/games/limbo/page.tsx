import React from "react";
import LeftNavbar from "@/components/LeftNavbar";
import LimboGameWindow from "@/components/LimboGameWindow";
import LimboTable from "@/components/LimboTable";
import Footer from "@/components/Footer";

const LimboGame = () => {
  return (
    <div className="flex flex-row">
      <LeftNavbar />
      <div className="bg-[#1A2C38] h-screen w-5/6 overflow-y-auto">
        <LimboGameWindow />
        <LimboTable />
        <Footer />
      </div>
    </div>
  );
};

export default LimboGame;
