// utorid: pate1452

// app/page.js
import React from "react";

// Reusable Text Component
const TextElement = ({ text, className, style }) => (
  <div className={`absolute text-[#eaecd7] ${className}`} style={style}>
    {text}
  </div>
);

export default function Home() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      {/* Click Button */}
      <div className="w-[150px] h-[52px] absolute right-[52px] top-[58px]">
        <div className="w-full h-full bg-[#eaecd7] rounded-[49px]" />
        <div className="absolute left-[50px] top-[16px] text-[#db4439] text-base font-black font-['Inknut_Antiqua']">
          Click
        </div>
      </div>

      {/* Coffee Image Container */}
      <div className="origin-top-left rotate-[-8.64deg] w-[543px] h-[590px] absolute right-[100px] top-[226px]">
        <div className="w-full h-full bg-[#d9d9d9]" />
        <img
          className="w-[631px] h-[1055px] absolute left-[81px] top-[-58px]"
          src="https://placehold.co/631x1055"
          alt="Coffee shop"
        />
      </div>

      {/* Main Heading */}
      <div className="w-[680px] absolute left-[143px] top-[313px] text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134px]">
        BlaBlaCoffee!
      </div>

      {/* Subheading */}
      <div className="w-[680px] absolute left-[148px] top-[740px] text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[49px]">
        Your NO.1 Choice
      </div>

      {/* Navigation */}
      <nav className="absolute top-[46px] left-[64px] flex">
        <a
          href="#"
          className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua'] mr-8"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua'] mr-8"
        >
          Menu
        </a>
        <a
          href="#"
          className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']"
        >
          Login
        </a>
      </nav>

      {/* Footer */}
      <footer className="w-full h-[102px] absolute bottom-0 bg-white flex items-center">
        <div className="flex w-full justify-between px-[124px]">
          <a
            href="#"
            className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']"
          >
            Contact Information
          </a>
          <a
            href="#"
            className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']"
          >
            Company Policy
          </a>
          <a
            href="#"
            className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']"
          >
            Be our partner today
          </a>
        </div>
      </footer>
    </div>
  );
}
