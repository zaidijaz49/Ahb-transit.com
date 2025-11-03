import React from "react";
import Video from "./video";

import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";


const HomeHerotxt = () => {
 
       
      
    useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".boxes", {
      y: -100,          // slide in from left
      opacity: 0,       // fade in
     delay:1,      // animation time for each
      ease: "power3.out",
      stagger: {
        amount: 1,      // total duration of stagger across all
        from: "start",  // start staggering from the first element
      },
    });
  });
      
    
  return (
    <div className=" font-[font5] pt-50  pl-5 text-[#80A1BA] ">
      <div> <p className=" boxes text-[2vw]  text-white leading-[2vw]">Where would you like to go ?</p></div>
      <div className=" boxes text-[3vw]  uppercase leading-[3.5vw]   ">
        You'r Private and
      </div>

      <div className=" boxes text-[3vw]  uppercase leading-[3.5vw]">
        Remote Travel
      </div>

      <div className=" boxes text-[3vw] uppercase  leading-[3.5vw]  ">
        Specialist
      </div>
    </div>
  );
};

export default HomeHerotxt;
