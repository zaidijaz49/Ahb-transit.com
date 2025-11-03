import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Zap, Target, Goal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Mission() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100, // alternate left/right
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#80A1BA]/20 py-16 px-6 sm:px-10 lg:px-20 overflow-hidden ">
      {/* Decorative line + heading */}
      <div className="flex justify-center items-center mb-6">
        <div className="bg-black w-16 sm:w-20 h-[2px]"></div>
        <div className="w-3 h-3 bg-[#80A1BA] rotate-45 mx-2"></div>
        <div className="w-3 h-3 bg-[#80A1BA] rotate-45 mx-2"></div>
        <div className="w-3 h-3 bg-[#80A1BA] rotate-45 mx-2"></div>
        <div className="bg-black w-16 sm:w-20 h-[2px]"></div>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-[font5] mb-12">
        OUR MISSION
      </h1>

      <div className="flex justify-center mb-6">
        <div className="bg-black w-16 sm:w-20 h-[2px]"></div>
        <div className="w-3 h-3 bg-[#80A1BA] rotate-45 mx-2"></div>
        <div className="w-3 h-3 bg-[#80A1BA] rotate-45 mx-2"></div>
        <div className="w-3 h-3 bg-[#80A1BA] rotate-45 mx-2"></div>
        <div className="bg-black w-16 sm:w-20 h-[2px]"></div>
      </div>

      {/* Mission/Vision/Goals Section */}
      <div className="flex flex-col gap-20 mt-16">
        {/* VISION */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="flex flex-col md:flex-row items-center justify-center gap-10"
        >
          <img
            src="https://images.unsplash.com/photo-1758384076382-21f6587e1048?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhdWZmZXVyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
            alt="Vision"
            className="w-64 h-64 object-cover rounded-3xl shadow-lg "
          />
          <div className="text-center md:text-left max-w-xl">
            <h2 className="font-[font5] text-4xl sm:text-3xl mb-3">VISION</h2>
            <p className="font-[font6] text-gray-700 leading-relaxed">
              A world where every journey is a seamless masterpiece, empowering travelers
              to return not just with souvenirs, but with renewed perspectives and stories
              that last a lifetime.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="flex flex-col md:flex-row-reverse items-center justify-center gap-10"
        >
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="Mission"
            className="w-64 h-64 object-cover rounded-3xl shadow-lg"
          />
          <div className="text-center md:text-left max-w-xl">
            <h2 className="font-[font5] text-4xl sm:text-3xl mb-3">MISSION</h2>
            <p className="font-[font6] text-gray-700 leading-relaxed">
              To reveal the soul of Switzerland and Europe through flawless, private
              journeys. We believe every expedition should be as extraordinary as its
              destination, meticulously designing every moment — from the first pickup to
              the final farewell — to be nothing short of perfection.
            </p>
          </div>
        </div>

        {/* GOALS */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="flex flex-col md:flex-row items-center justify-center gap-10"
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/07/17/17/37/switzerland-5414899_1280.jpg"
            alt="Goals"
            className="w-64 h-64 object-cover rounded-3xl shadow-lg"
          />
          <div className="text-center md:text-left max-w-xl">
            <h2 className="font-[font5] text-4xl sm:text-3xl mb-3">GOALS</h2>
            <p className="font-[font6] text-gray-700 leading-relaxed">
              Create travel experiences that are smooth, enjoyable, and stress-free, so
              every journey feels effortless from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
