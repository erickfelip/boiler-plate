"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="flex space-x-4" >
        <div className="bg-white p-4 shadow-lg rounded-lg">Item 1</div>
        <div className="bg-white p-4 shadow-lg rounded-lg">Item 2</div>
        <div className="bg-white p-4 shadow-lg rounded-lg">Item 3</div>
        <div className="bg-white p-4 shadow-lg rounded-lg">Item 4</div>
        <div className="bg-white p-4 shadow-lg rounded-lg">Item 5</div>
      </div>
    </div>
  );
};

export default Section;
