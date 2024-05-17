import React from "react";
import LeftNavbar from "@/components/LeftNavbar";
import LimboGameWindow from "@/components/LimboGameWindow";

const LimboGame = () => {
  return (
    <div className="flex flex-row">
      <LeftNavbar />
      <div className="bg-[#1A2C38] h-screen w-5/6">
        <LimboGameWindow />
      </div>
    </div>
  );
};

export default LimboGame;
