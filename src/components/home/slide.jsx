import React, { useEffect, useState, useMemo } from "react";
import Pic3 from "../../../public/pics/pc2.jpeg";
import Pic4 from "../../../public/pics/pic3.jpeg";
import Pic5 from "../../../public/pics/pic4.jpeg";

function Slide() {
  const slides = useMemo(
    () => [
      {
        title: "CHAUFFEUR SERVICES",
        services: [
          "🚗 Transportation",
          "🛬 Airport Transfers",
          "🤵 Personal Assistance",
          "🧳 Airport Assistance",
          "📦 Delivery Service",
          "🕴️ Professional Drivers",
          "🌍 Travel Coordination",
        ],
        images: [Pic5, Pic4, Pic3],
      },
      {
        title: "PRIVATE TOURS & EXCURSIONS",
        services: [
          "🚗 Plan your dream excursions",
          "🧭 Expert guides",
          "🎟️ Event planning",
          "🌄 Discover hidden gems",
        ],
        images: [
          "https://cdn.pixabay.com/photo/2020/10/08/14/39/castle-5638140_1280.jpg",
          "https://cdn.pixabay.com/photo/2019/04/23/16/31/europe-4149947_1280.jpg",
          "https://cdn.pixabay.com/photo/2022/04/12/18/00/europe-7128531_1280.jpg",
        ],
      },
      {
        title: "CONCIERGE SERVICES",
        services: [
          "🍽️ Michelin-starred restaurants",
          "🎫 VIP event access",
          "✈️ Last-minute bookings",
          "💼 Access to VIP lounges",
          "🧳 Luggage handling",
          "🏨 Luxury accommodation",
        ],
        images: [
          "https://cfmsaudi.com/wp-content/uploads/2023/12/The-Benefits-of-Corporate-Concierge-Services-for-Employee-Satisfaction-and-Productivity.webp",
          "https://cd9941cc.delivery.rocketcdn.me/wp-content/uploads/2024/06/Credit-Card-Concierge-Services.webp",
          "https://media.istockphoto.com/id/2057973065/photo/welcome-to-our-hotel.jpg?s=612x612&w=0&k=20&c=SUUhvbHY5O41Fl7s7arXo6QbOsGz0r9QSlW650x7F9c=",
        ],
      },
    ],
    []
  );

  const [currentCard, setCurrentCard] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-switch cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setCurrentImage(0);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Auto-switch images
  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === slides[currentCard].images.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(imgInterval);
  }, [currentCard, slides]);

  return (
    <div className="  flex flex-col items-center justify-center py-10 px-2 sm:px-6 relative bg-[#80A1BA]/20  ">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[font5] uppercase text-center mb-8 sm:mb-14   ">
        Let's Explore
      </h1>

      {/* Slider Wrapper */}
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
          className="flex transition-transform duration-[1000ms] ease-in-out"
          style={{
            transform: `translateX(-${currentCard * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center px-2 sm:px-4"
            >
              {/* Card */}
              <div className="w-[95%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[80%]  bg-white rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-94 sm:h-56 md:h-[60vh]">
                  {slide.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className={`absolute inset-0 w-full h-full object-cover rounded-t-2xl md:rounded-none transition-opacity duration-1000 ${
                        i === currentImage ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center text-center md:text-left bg-white">
                  <h2 className="text-[#80A1BA] font-[font5] text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-5">
                    {slide.title}
                  </h2>
                  <div className="flex flex-col font-[font5] text-xs sm:text-base md:text-lg lg:text-xl gap-1.5 sm:gap-2 text-gray-800">
                    {slide.services.map((service, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex items-center justify-center md:justify-start gap-2 hover:text-[#80A1BA] transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="text-[#80A1BA]">
                          {service.split(" ")[0]}
                        </span>
                        {service.split(" ").slice(1).join(" ")}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-center gap-2 sm:gap-3">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentCard(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ${
                i === currentCard
                  ? "bg-[#80A1BA] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide;
